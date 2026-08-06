import fs from 'fs';
import path from 'path';
import { g as getPublisherConfig } from './config_rjp9Q1W5.mjs';
import { p as parsePublisherMarkdown, a as buildPlatformExport } from './markdown_DRfC83uz.mjs';

function readPublisherJobs() {
  const store = readStore();
  return store.jobs.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getPublisherJob(id) {
  return readStore().jobs.find((job) => job.id === id);
}
function createPublisherJob(input) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const job = {
    ...input,
    id: `pub_${Date.now()}_${Math.round(Math.random() * 1e5)}`,
    createdAt: now,
    updatedAt: now,
    status: "pending",
    results: {}
  };
  const store = readStore();
  store.jobs.unshift(job);
  writeStore(store);
  return job;
}
function updatePublisherJob(id, updater) {
  const store = readStore();
  const index = store.jobs.findIndex((job) => job.id === id);
  if (index < 0) throw new Error(`Publisher job not found: ${id}`);
  const next = updater({ ...store.jobs[index], updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  store.jobs[index] = next;
  writeStore(store);
  return next;
}
function readStore() {
  const filePath = getPublisherConfig().storagePath;
  if (!fs.existsSync(filePath)) return { jobs: [] };
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    const jobs = Array.isArray(parsed.jobs) ? parsed.jobs.map(hydrateJobFromSourceFile) : [];
    return { jobs };
  } catch {
    return { jobs: [] };
  }
}
function hydrateJobFromSourceFile(job) {
  const sourceFile = job.article?.filePath;
  if (!sourceFile) return job;
  const absolutePath = path.resolve(process.cwd(), sourceFile);
  if (!fs.existsSync(absolutePath)) return job;
  try {
    const markdown = fs.readFileSync(absolutePath, "utf-8");
    const article = parsePublisherMarkdown({
      markdown,
      id: job.article.id,
      collection: job.article.collection,
      filePath: absolutePath,
      source: job.article.source
    });
    const results = { ...job.results };
    for (const platform of job.platforms) {
      const current = results[platform];
      if (!current || current.status !== "export_ready") continue;
      const isPreparedForPlatform = String(article.frontmatter.platform || "") === platform && String(article.frontmatter.status || "") === "ready";
      const exported = isPreparedForPlatform ? null : buildPlatformExport(article, platform);
      results[platform] = {
        ...current,
        message: isPreparedForPlatform ? `${platform} 平台稿已从源文件刷新` : current.message,
        content: isPreparedForPlatform ? article.body.trim() : exported?.content,
        data: {
          ...current.data || {},
          format: isPreparedForPlatform ? "markdown" : exported?.format,
          title: isPreparedForPlatform ? article.title : exported?.title,
          summary: isPreparedForPlatform ? article.frontmatter.description : exported?.summary,
          cover: article.cover || exported?.cover,
          contentUrl: article.source_url || exported?.contentUrl,
          tags: isPreparedForPlatform ? article.frontmatter.tags : exported?.tags,
          sourceFile,
          refreshedFromSource: true
        }
      };
    }
    return {
      ...job,
      title: article.title,
      article,
      results
    };
  } catch {
    return job;
  }
}
function writeStore(store) {
  const filePath = getPublisherConfig().storagePath;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2));
}

export { createPublisherJob as c, getPublisherJob as g, readPublisherJobs as r, updatePublisherJob as u };
