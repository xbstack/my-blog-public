import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { g as getPublisherConfig } from './config_rjp9Q1W5.mjs';
import { u as updatePublisherJob, r as readPublisherJobs, g as getPublisherJob } from './storage_cIafyEQG.mjs';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, "src", "content");
const MAX_COMMAND_OUTPUT = 24e3;
const globalRuntime = globalThis;
const runtime = globalRuntime.__xbstackPublisherI18nRuntime || {
  active: /* @__PURE__ */ new Set(),
  queue: Promise.resolve()
};
globalRuntime.__xbstackPublisherI18nRuntime = runtime;
function queuePublisherI18n(jobId, options = {}) {
  const config = getPublisherConfig();
  const job = getRequiredJob(jobId);
  if (!config.i18nEnabled) return job;
  let source;
  try {
    source = resolveSourceContext(job);
  } catch (error) {
    return updatePublisherJob(jobId, (current) => ({
      ...current,
      i18n: buildFailedState(current.i18n, config.i18nPolicy, toErrorMessage(error), "source-validation")
    }));
  }
  if (!options.force && job.i18n && ["reviewed", "published"].includes(job.i18n.status)) {
    return job;
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const attempt = options.force ? (job.i18n?.attempt || 0) + 1 : Math.max(1, job.i18n?.attempt || 1);
  const queued = updatePublisherJob(jobId, (current) => ({
    ...current,
    i18n: {
      status: "pending",
      policy: config.i18nPolicy,
      sourceFile: source.sourceRelative,
      englishFile: source.englishRelative,
      sourceRoute: current.i18n?.sourceRoute,
      englishRoute: current.i18n?.englishRoute,
      translationStatus: current.i18n?.translationStatus,
      indexing: current.i18n?.indexing || "pending",
      sitemap: current.i18n?.sitemap || "pending",
      audits: { structure: "pending", quality: "pending" },
      attempt,
      createdAt: current.i18n?.createdAt || now,
      updatedAt: now,
      lastStep: "queued",
      generatedByTask: false,
      logs: appendLog(current.i18n?.logs, options.force ? `第 ${attempt} 次重试已进入队列` : "英文任务已进入后台队列")
    }
  }));
  schedule(jobId);
  return queued;
}
function retryPublisherI18n(jobId) {
  return queuePublisherI18n(jobId, { force: true });
}
function resumePendingPublisherI18nJobs() {
  for (const job of readPublisherJobs()) {
    if (job.i18n && ["pending", "translating", "reviewing"].includes(job.i18n.status)) schedule(job.id);
  }
}
async function publishReviewedPublisherI18n(jobId) {
  const job = getRequiredJob(jobId);
  const source = resolveSourceContext(job);
  if (!fs.existsSync(source.englishAbsolute)) throw new Error("英文文件不存在，无法发布");
  const parsed = matter(fs.readFileSync(source.englishAbsolute, "utf8"));
  const translationStatus = String(parsed.data.translationStatus || "");
  if (!["reviewed", "published"].includes(translationStatus)) {
    throw new Error("英文稿尚未通过 reviewed 审核，不能进入索引");
  }
  if (translationStatus === "published") return job;
  patchI18n(jobId, {
    status: "reviewing",
    lastStep: "structure-audit",
    audits: { structure: "pending", quality: "pending" },
    error: void 0,
    logs: appendLog(job.i18n?.logs, "人工确认前重新执行结构与质量审计")
  });
  try {
    await runTargetAudits(source.englishRelative, jobId);
    await promoteEnglishWithManifest(source.englishAbsolute);
  } catch (error) {
    markPipelineFailed(jobId, error, getRequiredJob(jobId).i18n?.lastStep || "manual-publish");
    throw error;
  }
  const refreshed = readEnglishState(source.englishAbsolute);
  return updatePublisherJob(jobId, (current) => ({
    ...current,
    i18n: {
      ...current.i18n || createBaseState(getPublisherConfig().i18nPolicy),
      status: "published",
      translationStatus: "published",
      sourceRoute: refreshed.sourceRoute,
      englishRoute: refreshed.englishRoute,
      indexing: "index",
      sitemap: "included",
      lastStep: "published",
      error: void 0,
      completedAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      logs: appendLog(current.i18n?.logs, "人工确认完成：英文稿已切换为 published + index")
    }
  }));
}
function schedule(jobId) {
  if (runtime.active.has(jobId)) return;
  runtime.active.add(jobId);
  setTimeout(() => {
    runtime.queue = runtime.queue.then(() => runPipeline(jobId)).catch((error) => markPipelineFailed(jobId, error, "worker")).finally(() => {
      runtime.active.delete(jobId);
    });
  }, 0);
}
async function runPipeline(jobId) {
  const job = getRequiredJob(jobId);
  const config = getPublisherConfig();
  const source = resolveSourceContext(job);
  let generatedByTask = Boolean(job.i18n?.generatedByTask);
  let needsEditorialReview = true;
  try {
    if (fs.existsSync(source.englishAbsolute)) {
      const existing = readEnglishState(source.englishAbsolute);
      if (existing.translationStatus === "published") {
        finishExisting(jobId, source, existing, "published");
        return;
      }
      if (existing.translationStatus === "reviewed") {
        if (!generatedByTask) {
          patchI18n(jobId, {
            status: "reviewing",
            lastStep: "structure-audit",
            audits: { structure: "pending", quality: "pending" },
            logs: appendLog(getRequiredJob(jobId).i18n?.logs, "检测到已有 reviewed 英文稿，仅执行定向审计，不重新翻译")
          });
          await runTargetAudits(source.englishRelative, jobId);
          finishExisting(jobId, source, existing, "reviewed");
          return;
        }
        needsEditorialReview = false;
        patchI18n(jobId, {
          status: "reviewing",
          translationStatus: "reviewed",
          sourceRoute: existing.sourceRoute,
          englishRoute: existing.englishRoute,
          indexing: "noindex",
          sitemap: "excluded",
          lastStep: "structure-audit",
          logs: appendLog(getRequiredJob(jobId).i18n?.logs, "恢复已生成的 reviewed 英文稿，从审计步骤继续")
        });
      }
    } else {
      patchI18n(jobId, {
        status: "translating",
        lastStep: "translating",
        indexing: "pending",
        sitemap: "pending",
        logs: appendLog(getRequiredJob(jobId).i18n?.logs, "开始生成英文 Markdown 与英文 frontmatter")
      });
      await runTsx("scripts/translate-content-en.ts", [
        "--apply",
        `--provider=${config.i18nProvider}`,
        "--concurrency=1",
        `--source=${source.sourceRelative}`,
        `--progress=data/publisher/i18n/${jobId}-translate.json`
      ], "英文翻译");
      if (!fs.existsSync(source.englishAbsolute)) throw new Error(`翻译脚本未生成目标文件：${source.englishRelative}`);
      const machine = readEnglishState(source.englishAbsolute);
      generatedByTask = true;
      patchI18n(jobId, {
        translationStatus: "machine",
        sourceRoute: machine.sourceRoute,
        englishRoute: machine.englishRoute,
        indexing: "noindex",
        sitemap: "excluded",
        generatedByTask: true
      });
    }
    if (needsEditorialReview) {
      patchI18n(jobId, {
        status: "reviewing",
        lastStep: "editorial-review",
        generatedByTask,
        indexing: "noindex",
        sitemap: "excluded",
        logs: appendLog(getRequiredJob(jobId).i18n?.logs, "开始英文编辑审校与图片路径校正")
      });
      await runTsx("scripts/editorial-rebuild-english-agnes.ts", [
        "--apply",
        "--concurrency=1",
        `--file=${source.englishRelative}`,
        `--progress=data/publisher/i18n/${jobId}-review.json`
      ], "英文编辑审校");
      const reviewedDraft = readEnglishState(source.englishAbsolute);
      patchI18n(jobId, {
        translationStatus: "reviewed",
        sourceRoute: reviewedDraft.sourceRoute,
        englishRoute: reviewedDraft.englishRoute,
        indexing: "noindex",
        sitemap: "excluded",
        generatedByTask,
        lastStep: "link-rewrite"
      });
    }
    patchI18n(jobId, {
      status: "reviewing",
      lastStep: "link-rewrite",
      logs: appendLog(getRequiredJob(jobId).i18n?.logs, "开始英文站内链接转换")
    });
    await runTsx("scripts/rewrite-english-internal-links.ts", [source.englishRelative], "英文站内链接转换");
    patchI18n(jobId, {
      lastStep: "structure-audit",
      audits: { structure: "pending", quality: "pending" },
      logs: appendLog(getRequiredJob(jobId).i18n?.logs, "开始中英文结构审计与英文质量审计")
    });
    await runTargetAudits(source.englishRelative, jobId);
    await syncManifest();
    const reviewed = readEnglishState(source.englishAbsolute);
    const canAutoPublish = config.i18nPolicy === "published" && generatedByTask;
    if (canAutoPublish) {
      await promoteEnglishWithManifest(source.englishAbsolute);
    }
    const finalState = readEnglishState(source.englishAbsolute);
    const published = finalState.translationStatus === "published";
    patchI18n(jobId, {
      status: published ? "published" : "reviewed",
      translationStatus: published ? "published" : "reviewed",
      sourceRoute: finalState.sourceRoute || reviewed.sourceRoute,
      englishRoute: finalState.englishRoute || reviewed.englishRoute,
      indexing: published ? "index" : "noindex",
      sitemap: published ? "included" : "excluded",
      lastStep: published ? "published" : "reviewed",
      generatedByTask,
      error: void 0,
      completedAt: (/* @__PURE__ */ new Date()).toISOString(),
      logs: appendLog(
        getRequiredJob(jobId).i18n?.logs,
        published ? "审计通过：英文稿已自动发布并进入下次构建的 Sitemap、RSS、搜索和英文 Hub" : "审计通过：英文稿保持 reviewed + noindex，等待人工确认发布"
      )
    });
  } catch (error) {
    await ensureFailedDraftIsNoindex(source.englishAbsolute);
    try {
      await syncManifest();
    } catch {
    }
    markPipelineFailed(jobId, error, getRequiredJob(jobId).i18n?.lastStep || "pipeline");
  }
}
async function runTargetAudits(englishRelative, jobId) {
  try {
    await runNode("scripts/audit-editorial-pairs.mjs", [englishRelative], "中英文结构审计");
    patchI18n(jobId, {
      lastStep: "quality-audit",
      audits: { structure: "passed", quality: "pending" },
      logs: appendLog(getRequiredJob(jobId).i18n?.logs, "中英文结构审计通过")
    });
  } catch (error) {
    patchI18n(jobId, {
      lastStep: "structure-audit",
      audits: { structure: "failed", quality: "skipped" }
    });
    throw new Error(`中英文结构审计失败：${toErrorMessage(error)}`);
  }
  try {
    await runNode(
      "scripts/audit-english-content-quality.mjs",
      [englishRelative, `--report=data/publisher/i18n/${jobId}-quality.json`],
      "英文质量审计"
    );
    patchI18n(jobId, {
      lastStep: "manifest-sync",
      audits: { structure: "passed", quality: "passed" },
      logs: appendLog(getRequiredJob(jobId).i18n?.logs, "英文质量审计通过")
    });
  } catch (error) {
    patchI18n(jobId, {
      lastStep: "quality-audit",
      audits: { structure: "passed", quality: "failed" }
    });
    throw new Error(`英文质量审计失败：${toErrorMessage(error)}`);
  }
}
function finishExisting(jobId, source, english, status) {
  patchI18n(jobId, {
    status,
    translationStatus: status,
    sourceFile: source.sourceRelative,
    englishFile: source.englishRelative,
    sourceRoute: english.sourceRoute,
    englishRoute: english.englishRoute,
    indexing: status === "published" ? "index" : "noindex",
    sitemap: status === "published" ? "included" : "excluded",
    audits: { structure: "passed", quality: "passed" },
    generatedByTask: false,
    lastStep: status,
    error: void 0,
    completedAt: (/* @__PURE__ */ new Date()).toISOString(),
    logs: appendLog(
      getRequiredJob(jobId).i18n?.logs,
      status === "published" ? "检测到已有 published 英文稿，未重新翻译" : "检测到已有 reviewed 英文稿，未重新翻译；仍保持 noindex"
    )
  });
}
function patchI18n(jobId, patch) {
  return updatePublisherJob(jobId, (job) => {
    const base = job.i18n || createBaseState(getPublisherConfig().i18nPolicy);
    return {
      ...job,
      i18n: {
        ...base,
        ...patch,
        audits: patch.audits ? { ...base.audits, ...patch.audits } : base.audits,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
  });
}
function markPipelineFailed(jobId, error, step) {
  const message = toErrorMessage(error);
  try {
    const current = getRequiredJob(jobId).i18n;
    const beforeAudits = !["structure-audit", "quality-audit", "manifest-sync"].includes(step);
    patchI18n(jobId, {
      status: "failed",
      translationStatus: current?.translationStatus,
      indexing: current?.translationStatus === "published" ? "index" : "noindex",
      sitemap: current?.translationStatus === "published" ? "included" : "excluded",
      audits: beforeAudits ? { structure: "skipped", quality: "skipped" } : current?.audits,
      lastStep: step,
      error: message,
      completedAt: (/* @__PURE__ */ new Date()).toISOString(),
      logs: appendLog(current?.logs, `失败：${message}`)
    });
  } catch {
  }
}
function buildFailedState(existing, policy, error, step) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return {
    ...existing || createBaseState(policy),
    status: "failed",
    policy,
    indexing: "noindex",
    sitemap: "excluded",
    audits: { structure: "skipped", quality: "skipped" },
    attempt: Math.max(1, existing?.attempt || 1),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    completedAt: now,
    lastStep: step,
    error,
    logs: appendLog(existing?.logs, `失败：${error}`)
  };
}
function createBaseState(policy) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return {
    status: "pending",
    policy,
    indexing: "pending",
    sitemap: "pending",
    audits: { structure: "pending", quality: "pending" },
    attempt: 1,
    createdAt: now,
    updatedAt: now,
    logs: []
  };
}
function resolveSourceContext(job) {
  const sourceFile = job.article?.filePath;
  if (!sourceFile) throw new Error("当前文章没有站内源文件路径；中文发布不受影响，但无法创建英文文件");
  const sourceAbsolute = path.resolve(ROOT, sourceFile);
  const relativeFromContent = path.relative(CONTENT_ROOT, sourceAbsolute);
  if (relativeFromContent.startsWith("..") || path.isAbsolute(relativeFromContent)) {
    throw new Error("中文源文件不在 src/content 目录中");
  }
  if (!fs.existsSync(sourceAbsolute)) throw new Error(`中文源文件不存在：${toRelative(sourceAbsolute)}`);
  const parts = relativeFromContent.split(path.sep);
  const collection = parts.shift();
  if (!collection || parts.length === 0) throw new Error("无法识别中文内容集合或文章 ID");
  const extension = path.extname(parts.at(-1) || "") || ".md";
  const entryParts = parts.join(path.sep).replace(/\.(md|mdx)$/i, "").split(path.sep);
  if (/^(zh|zh-cn|zh-hans|zh-tw)$/i.test(entryParts[0] || "")) entryParts.shift();
  if (!entryParts.length) throw new Error("无法计算英文内容文件路径");
  const englishAbsolute = path.join(CONTENT_ROOT, collection, "en", `${entryParts.join(path.sep)}${extension}`);
  return {
    sourceAbsolute,
    sourceRelative: toRelative(sourceAbsolute),
    englishAbsolute,
    englishRelative: toRelative(englishAbsolute)
  };
}
function readEnglishState(filePath) {
  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  return {
    translationStatus: String(parsed.data.translationStatus || "machine"),
    indexing: String(parsed.data.indexing || "noindex"),
    sourceRoute: String(parsed.data.translations?.["zh-CN"] || parsed.data.translationSource || ""),
    englishRoute: String(parsed.data.route || parsed.data.translations?.en || "")
  };
}
function setEnglishPublicationState(filePath, status) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = {
    ...parsed.data,
    translationStatus: status,
    indexing: status === "published" ? "index" : "noindex"
  };
  fs.writeFileSync(filePath, matter.stringify(parsed.content, data), "utf8");
}
async function ensureFailedDraftIsNoindex(filePath) {
  if (!fs.existsSync(filePath)) return;
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  if (parsed.data.translationStatus === "published" && parsed.data.indexing === "index") return;
  fs.writeFileSync(filePath, matter.stringify(parsed.content, {
    ...parsed.data,
    translationStatus: parsed.data.translationStatus === "reviewed" ? "reviewed" : "machine",
    indexing: "noindex"
  }), "utf8");
}
async function promoteEnglishWithManifest(filePath) {
  const original = readEnglishState(filePath).translationStatus;
  setEnglishPublicationState(filePath, "published");
  try {
    await syncManifest();
  } catch (error) {
    if (original !== "published") {
      setEnglishPublicationState(filePath, "reviewed");
      try {
        await syncManifest();
      } catch {
      }
    }
    throw error;
  }
}
async function syncManifest() {
  await runTsx("scripts/sync-content-i18n-manifest.ts", [], "同步 i18n manifest");
}
async function runTsx(script, args, label) {
  const executable = path.join(ROOT, "node_modules", ".bin", process.platform === "win32" ? "tsx.cmd" : "tsx");
  return runCommand(executable, [script, ...args], label);
}
async function runNode(script, args, label) {
  return runCommand(process.execPath, [script, ...args], label);
}
function runCommand(command, args, label) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: ROOT,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let stdout = "";
    let stderr = "";
    const timeout = setTimeout(() => child.kill("SIGTERM"), 30 * 60 * 1e3);
    child.stdout.on("data", (chunk) => {
      stdout = trimOutput(`${stdout}${String(chunk)}`);
    });
    child.stderr.on("data", (chunk) => {
      stderr = trimOutput(`${stderr}${String(chunk)}`);
    });
    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(new Error(`${label}无法启动：${error.message}`));
    });
    child.on("close", (code, signal) => {
      clearTimeout(timeout);
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(new Error(`${label}失败（exit=${code ?? "null"}${signal ? `, signal=${signal}` : ""}）：${stderr.trim() || stdout.trim() || "无输出"}`));
    });
  });
}
function getRequiredJob(jobId) {
  const job = getPublisherJob(jobId);
  if (!job) throw new Error(`Publisher job not found: ${jobId}`);
  return job;
}
function appendLog(current, message) {
  return [...current || [], `${(/* @__PURE__ */ new Date()).toISOString()} ${message}`].slice(-12);
}
function trimOutput(value) {
  return value.length > MAX_COMMAND_OUTPUT ? value.slice(-MAX_COMMAND_OUTPUT) : value;
}
function toRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}
function toErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

export { resumePendingPublisherI18nJobs as a, publishReviewedPublisherI18n as p, queuePublisherI18n as q, retryPublisherI18n as r };
