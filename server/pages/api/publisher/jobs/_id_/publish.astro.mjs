import { a as buildPlatformExport, c as buildPlatformFormattedExport, d as composeWechatMarkdown } from '../../../../../chunks/markdown_DRfC83uz.mjs';
import { r as readPlatformConfig } from '../../../../../chunks/platform-config_CXVUJP_u.mjs';
import { P as PLATFORM_REGISTRY } from '../../../../../chunks/types_SOVn2iN6.mjs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { g as getPublisherConfig } from '../../../../../chunks/config_rjp9Q1W5.mjs';
import { q as queuePublisherI18n } from '../../../../../chunks/pipeline_DFB3LFP5.mjs';
import { u as updatePublisherJob } from '../../../../../chunks/storage_cIafyEQG.mjs';
export { renderers } from '../../../../../renderers.mjs';

const DIRECT_API_PLATFORMS = /* @__PURE__ */ new Set(["devto", "linkedin"]);
function required(value, label) {
  const normalized = value?.trim();
  if (!normalized) throw new Error(`${label} 未配置`);
  return normalized;
}
function stripTracking(value) {
  if (!value) return void 0;
  try {
    const url = new URL(value);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "ref"].forEach((key) => url.searchParams.delete(key));
    return url.toString();
  } catch {
    return value;
  }
}
function safeRemoteImage(value) {
  if (!value) return void 0;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : void 0;
  } catch {
    return void 0;
  }
}
async function readError(response) {
  const text = await response.text().catch(() => "");
  if (!text) return `${response.status} ${response.statusText}`.trim();
  try {
    const parsed = JSON.parse(text);
    const message = parsed?.error || parsed?.message || parsed?.errors?.[0]?.message;
    return message ? String(message) : text.slice(0, 600);
  } catch {
    return text.slice(0, 600);
  }
}
async function publishDevTo(article) {
  const cfg = readPlatformConfig().devto || {};
  const apiKey = required(process.env.DEVTO_API_KEY || cfg.authValue, "DEVTO_API_KEY");
  const exported = buildPlatformExport(article, "devto");
  const response = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.forem.api-v1+json",
      "api-key": apiKey,
      "User-Agent": "XBSTACK-Publisher/1.0"
    },
    body: JSON.stringify({
      article: {
        title: exported.title || article.title,
        body_markdown: exported.content,
        published: true,
        tags: (exported.tags || []).slice(0, 4).join(","),
        main_image: safeRemoteImage(exported.cover || article.cover),
        canonical_url: stripTracking(exported.contentUrl || article.source_url),
        description: exported.summary || ""
      }
    }),
    signal: AbortSignal.timeout(6e4)
  });
  if (!response.ok) throw new Error(`DEV API 发布失败：${await readError(response)}`);
  const data = await response.json();
  return {
    platform: "devto",
    status: "published",
    message: "DEV Community 已通过官方 API 直接发布",
    data: {
      id: data.id,
      articleId: data.id,
      title: data.title,
      url: data.url,
      canonicalUrl: data.canonical_url,
      publishedAt: data.published_at || data.published_timestamp
    }
  };
}
async function publishLinkedIn(article) {
  const cfg = readPlatformConfig().linkedin || {};
  const token = required(process.env.LINKEDIN_ACCESS_TOKEN || cfg.authValue, "LINKEDIN_ACCESS_TOKEN");
  const authorUrn = required(process.env.LINKEDIN_AUTHOR_URN || cfg.account, "LINKEDIN_AUTHOR_URN");
  const apiVersion = (process.env.LINKEDIN_VERSION || cfg.serviceUrl || "202606").replace(/\D/g, "");
  if (!/^20\d{4}$/.test(apiVersion)) throw new Error("LINKEDIN_VERSION 必须使用 YYYYMM 格式");
  const exported = buildPlatformExport(article, "linkedin");
  const response = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
      "Linkedin-Version": apiVersion
    },
    body: JSON.stringify({
      author: authorUrn,
      commentary: exported.content,
      visibility: "PUBLIC",
      distribution: {
        feedDistribution: "MAIN_FEED",
        targetEntities: [],
        thirdPartyDistributionChannels: []
      },
      lifecycleState: "PUBLISHED",
      isReshareDisabledByAuthor: false
    }),
    signal: AbortSignal.timeout(6e4)
  });
  if (!response.ok) throw new Error(`LinkedIn API 发布失败：${await readError(response)}`);
  const postId = response.headers.get("x-restli-id") || void 0;
  return {
    platform: "linkedin",
    status: "published",
    message: "LinkedIn 已通过官方 Posts API 直接发布",
    data: {
      id: postId,
      articleId: postId,
      author: authorUrn,
      apiVersion,
      contentUrl: exported.contentUrl
    }
  };
}
async function publishViaDirectApi(article, platform) {
  if (!DIRECT_API_PLATFORMS.has(platform)) {
    throw new Error(`${platform} 未配置官方直接发布适配器`);
  }
  if (platform === "devto") return publishDevTo(article);
  return publishLinkedIn(article);
}

const MULTIPOST_API_BASE = (process.env.MULTIPOST_SERVER_URL || "http://127.0.0.1:19421").replace(/\/+$/, "");
const BROWSER_DRAFT_PLATFORMS = /* @__PURE__ */ new Set(["juejin", "zhihu", "csdn", "hashnode", "medium", "hackernoon", "hackernews"]);
async function callMultiPost(endpoint, body, token) {
  const url = `${MULTIPOST_API_BASE}${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MultiPost-Token": token
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(6e4)
  });
  if (!response.ok) {
    const err = await response.text().catch(() => "Unknown error");
    throw new Error(`MultiPost API ${response.status}: ${err.slice(0, 300)}`);
  }
  return response.json();
}
function exportFallback(platform, message, exported) {
  return {
    platform,
    status: "export_ready",
    message,
    content: exported.content,
    data: { format: exported.format, fallback: true }
  };
}
function isConnectionFailure(error) {
  if (!(error instanceof Error)) return false;
  return error instanceof TypeError || /fetch failed|ECONNREFUSED|ECONNRESET|timeout|timed out/i.test(error.message);
}
async function publishViaMultiPost(article, platform, options) {
  const meta = PLATFORM_REGISTRY.find((p) => p.id === platform);
  const exported = buildPlatformExport(article, platform);
  if (!BROWSER_DRAFT_PLATFORMS.has(platform)) {
    return exportFallback(
      platform,
      `${meta?.name || platform} 当前使用复制/导出模式，未执行浏览器操作`,
      exported
    );
  }
  const token = process.env.MULTIPOST_TOKEN?.trim();
  if (!token) {
    return exportFallback(
      platform,
      "未配置 MULTIPOST_TOKEN，已降级为复制/导出内容",
      exported
    );
  }
  const payload = {
    platform,
    mode: "draft",
    title: exported.title || article.title,
    content: exported.content,
    cover: exported.cover || article.cover,
    tags: exported.tags || article.frontmatter.tags,
    contentUrl: exported.contentUrl
  };
  try {
    const result = await callMultiPost("/api/publish", payload, token);
    return {
      platform,
      status: result.success ? "draft_created" : "failed",
      message: result.success ? result.data?.editorReady ? `${meta?.name || platform} 提交表单已预填，请人工确认后提交` : result.data?.autosaveConfirmed === false ? `${meta?.name || platform} 内容已填入编辑器，但未检测到明确保存提示，请打开草稿确认` : `${meta?.name || platform} 草稿已创建，请人工检查后发布` : `${meta?.name || platform} 草稿创建失败: ${result.error || "未知错误"}`,
      data: result.data || {}
    };
  } catch (error) {
    if (isConnectionFailure(error)) {
      return exportFallback(
        platform,
        "MultiPost 本机服务未连接，内容已降级为复制/导出文本",
        exported
      );
    }
    return {
      platform,
      status: "failed",
      message: `${meta?.name || platform} 草稿创建异常: ${error instanceof Error ? error.message : "未知错误"}`
    };
  }
}
function getPlatformPublishMethod(platform) {
  return PLATFORM_REGISTRY.find((p) => p.id === platform)?.method || "copy";
}

function exportPlatform(article, platform) {
  const exported = buildPlatformExport(article, platform);
  return {
    platform,
    status: "export_ready",
    message: `${platform} 导出内容已生成`,
    content: exported.content,
    data: { format: exported.format, notes: exported.notes || [] }
  };
}

async function publishWechatDraft(article, theme) {
  const config = getPublisherConfig();
  if (!config.wenyanServerUrl || !config.wenyanApiKey) {
    return {
      platform: "wechat",
      status: "failed",
      message: "Wenyan Server 未配置",
      error: "请配置 WENYAN_SERVER_URL 和 WENYAN_API_KEY"
    };
  }
  const exported = buildPlatformFormattedExport(article, "wechat");
  const markdown = composeWechatMarkdown(article, theme);
  const tempPath = path.join(os.tmpdir(), `${article.slug || article.id}-${Date.now()}.md`);
  fs.writeFileSync(tempPath, markdown);
  try {
    const endpoint = new URL(config.wenyanPublishPath, config.wenyanServerUrl).toString();
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.wenyanApiKey}`
      },
      body: JSON.stringify({
        title: exported.title,
        markdown,
        theme,
        cover: article.cover,
        author: article.author,
        source_url: exported.contentUrl,
        summary: exported.summary,
        keywords: exported.keywords,
        tags: exported.tags,
        filePath: tempPath
      })
    });
    const text = await response.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }
    if (!response.ok) {
      return {
        platform: "wechat",
        status: "failed",
        message: `Wenyan Server 返回 ${response.status}`,
        error: String(data.error || data.message || text || "发布失败"),
        data
      };
    }
    return {
      platform: "wechat",
      status: "draft_created",
      message: "已创建微信公众号草稿",
      data
    };
  } catch (error) {
    return {
      platform: "wechat",
      status: "failed",
      message: "无法连接 Wenyan Server",
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    try {
      fs.unlinkSync(tempPath);
    } catch {
    }
  }
}

const DEFAULT_STORE = {
  articles: [],
  distributions: [],
  snapshots: [],
  insights: []
};
function getGrowthStorePath() {
  return path.resolve(process.cwd(), process.env.PUBLISHER_GROWTH_STORAGE_PATH || "data/publisher/growth.json");
}
function readGrowthStore() {
  const filePath = getGrowthStorePath();
  if (!fs.existsSync(filePath)) return { ...DEFAULT_STORE };
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return {
      articles: Array.isArray(parsed.articles) ? parsed.articles : [],
      distributions: Array.isArray(parsed.distributions) ? parsed.distributions : [],
      snapshots: Array.isArray(parsed.snapshots) ? parsed.snapshots : [],
      insights: Array.isArray(parsed.insights) ? parsed.insights : []
    };
  } catch {
    return { ...DEFAULT_STORE };
  }
}
function writeGrowthStore(store) {
  const filePath = getGrowthStorePath();
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2));
}
function addGrowthDistribution(input) {
  const store = readGrowthStore();
  const record = {
    ...input,
    id: input.id || `dist_${Date.now()}_${Math.round(Math.random() * 1e5)}`
  };
  store.distributions.unshift(record);
  writeGrowthStore(store);
  return record;
}

async function runQueue(tasks, options = {}) {
  const concurrency = Math.max(1, options.concurrency ?? 1);
  const results = {};
  const pending = [...tasks];
  async function worker() {
    while (pending.length > 0) {
      const task = pending.shift();
      if (!task) return;
      options.onTaskStart?.(task.id);
      try {
        results[task.id] = await task.run();
        options.onTaskDone?.(task.id);
      } catch (error) {
        options.onTaskError?.(task.id, error);
        throw error;
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker()));
  return results;
}

async function withRetry(fn, options = {}) {
  const maxRetries = options.maxRetries ?? 3;
  const baseDelayMs = options.baseDelayMs ?? 600;
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const canRetry = attempt < maxRetries && (options.shouldRetry ? options.shouldRetry(error, attempt) : true);
      if (!canRetry) break;
      options.onRetry?.(error, attempt + 1);
      await sleep(baseDelayMs * Math.max(1, attempt + 1));
    }
  }
  throw lastError;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function toErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

const PLATFORM_STYLE = {
  zhihu: "question",
  juejin: "technical",
  csdn: "technical",
  jianshu: "canonical",
  jike: "short_post",
  segmentfault: "technical",
  xbstack: "seo"
};
function buildTitleVariants(article, platforms) {
  const title = normalizeTitle(article.title);
  const keywords = extractKeywordHints(article);
  return platforms.reduce((acc, platform) => {
    const angle = PLATFORM_STYLE[platform] || "canonical";
    acc[platform] = {
      platform,
      angle,
      title: buildPlatformTitle(title, angle, keywords),
      reason: reasonForAngle(angle)
    };
    return acc;
  }, {});
}
function buildPlatformTitle(title, angle, keywords) {
  const keyword = keywords[0];
  if (angle === "question") {
    const core = title.replace(/[：:｜|].*$/, "");
    return ensureMaxLength(`${core} 为什么上线后容易出问题？`, 56);
  }
  if (angle === "technical") {
    const suffix = keyword ? `：${keyword} 排查清单` : "：生产环境排查清单";
    return ensureMaxLength(title.includes("排查") ? title : `${title}${suffix}`, 64);
  }
  if (angle === "short_post") {
    return ensureMaxLength(title.replace(/实战|指南|教程/g, "").replace(/[：:]/g, "："), 42);
  }
  if (angle === "seo") {
    return ensureMaxLength(title, 68);
  }
  return ensureMaxLength(title, 58);
}
function extractKeywordHints(article) {
  const tags = Array.isArray(article.frontmatter.tags) ? article.frontmatter.tags : [];
  return tags.map((tag) => String(tag)).filter(Boolean).slice(0, 3);
}
function reasonForAngle(angle) {
  if (angle === "question") return "知乎更适合问题化标题，便于承接搜索与问答流量。";
  if (angle === "technical") return "技术社区更适合明确问题、场景和排查清单。";
  if (angle === "short_post") return "即刻更适合短标题和现场感表达。";
  if (angle === "seo") return "站内保留主关键词和标准标题，便于搜索沉淀。";
  return "保留原文主标题，降低跨平台改写风险。";
}
function normalizeTitle(title) {
  return title.replace(/\s+/g, " ").trim();
}
function ensureMaxLength(title, max) {
  if (title.length <= max) return title;
  return title.slice(0, max - 1).replace(/[，。；、：:｜|\s]+$/, "") + "…";
}

async function runPublisherJob(id) {
  let working = updatePublisherJob(id, (job) => ({
    ...job,
    status: "queued",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    error: void 0
  }));
  const results = { ...working.results };
  const titleVariants = buildTitleVariants(working.article, working.platforms);
  const platformConfig = readPlatformConfig();
  working = updatePublisherJob(id, (job) => ({
    ...job,
    status: "publishing",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  }));
  const tasks = working.platforms.map((platform) => ({
    id: platform,
    label: `${working.article.title} -> ${platform}`,
    run: async () => {
      let retryCount = 0;
      const titleVariant = titleVariants[platform];
      const articleForPlatform = titleVariant ? { ...working.article, title: titleVariant.title } : working.article;
      try {
        const cfg = platformConfig[platform] || {};
        if (cfg.enabled === false) {
          const skipped = { platform, status: "export_ready", message: "平台已停用，跳过发布", data: { skipped: true, reason: "disabled", titleVariant } };
          results[platform] = skipped;
          return skipped;
        }
        if (cfg.publishMode === "export" || cfg.autoPublish === false) {
          const exported = exportPlatform(articleForPlatform, platform);
          const enrichedExport = { ...exported, data: { ...exported.data || {}, platformConfig: { publishMode: cfg.publishMode || "export", autoPublish: Boolean(cfg.autoPublish) }, titleVariant } };
          results[platform] = enrichedExport;
          recordGrowthDistribution(working.id, platform, enrichedExport, articleForPlatform.title, 0, titleVariant?.title);
          return enrichedExport;
        }
        const publishMethod = getPlatformPublishMethod(platform);
        const directPublicApi = publishMethod === "api" && platform !== "wechat";
        const result = await withRetry(
          () => publishOnePlatform(articleForPlatform, platform, working.theme),
          {
            // Public POST APIs are not safely retryable without a platform-supported
            // idempotency key. A timeout may occur after the remote post is created.
            maxRetries: directPublicApi ? 0 : 2,
            baseDelayMs: 800,
            onRetry: () => {
              retryCount += 1;
            }
          }
        );
        const enriched = {
          ...result,
          data: {
            ...result.data || {},
            retryCount,
            titleVariant
          }
        };
        results[platform] = enriched;
        recordGrowthDistribution(working.id, platform, enriched, articleForPlatform.title, retryCount, titleVariant?.title);
        return enriched;
      } catch (error) {
        const failed = {
          platform,
          status: "failed",
          message: retryCount > 0 ? "发布失败，已完成自动重试" : "发布失败，未执行自动重试",
          error: toErrorMessage(error),
          data: { retryCount, titleVariant }
        };
        results[platform] = failed;
        recordGrowthDistribution(working.id, platform, failed, articleForPlatform.title, retryCount, titleVariant?.title);
        return failed;
      }
    }
  }));
  await runQueue(tasks, { concurrency: 1 });
  const hasFailure = Object.values(results).some((result) => result?.status === "failed");
  const hasPublished = Object.values(results).some((result) => result?.status === "published");
  const hasDraft = Object.values(results).some((result) => result?.status === "draft_created");
  const status = hasFailure ? "failed" : hasPublished ? "published" : hasDraft ? "draft_created" : "export_ready";
  working = updatePublisherJob(id, (job) => ({
    ...job,
    status,
    results,
    completedAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    error: hasFailure ? Object.values(results).find((result) => result?.error)?.error : void 0
  }));
  try {
    return queuePublisherI18n(id);
  } catch {
    return working;
  }
}
async function publishOnePlatform(article, platform, theme) {
  const method = getPlatformPublishMethod(platform);
  if (method === "api" && platform === "wechat") {
    return publishWechatDraft(article, theme);
  }
  if (method === "api") {
    return publishViaDirectApi(article, platform);
  }
  if (method === "multipost") {
    return publishViaMultiPost(article, platform);
  }
  return exportPlatform(article, platform);
}
function recordGrowthDistribution(jobId, platform, result, platformTitle, retryCount, titleVariant) {
  try {
    addGrowthDistribution({
      articleId: String(result.data?.articleId || result.data?.id || jobId),
      jobId,
      platform,
      platformTitle,
      platformUrl: typeof result.data?.url === "string" ? result.data.url : void 0,
      trackedUrl: typeof result.data?.contentUrl === "string" ? result.data.contentUrl : void 0,
      status: result.status === "failed" ? "failed" : ["published", "draft_created"].includes(result.status) ? "published" : "export_ready",
      titleVariant,
      retryCount,
      publishedAt: result.status === "failed" ? void 0 : (/* @__PURE__ */ new Date()).toISOString(),
      error: result.error
    });
  } catch {
  }
}

const POST = async ({ params }) => {
  const id = String(params.id || "");
  try {
    const working = await runPublisherJob(id);
    const hasFailure = Object.values(working.results).some((result) => result?.status === "failed");
    return json({ success: !hasFailure, data: working, error: working.error });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return json({ success: false, error: message }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
