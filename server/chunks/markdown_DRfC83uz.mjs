import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE_URL = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.xbstack.com";
const UTM_CAMPAIGN = process.env.PUBLISHER_UTM_CAMPAIGN || "article_distribution";
const PLATFORM_UTM_MEDIUM = {
  wechat: "official_account",
  zhihu: "social",
  xiaohongshu: "social",
  jike: "social",
  weibo: "social",
  juejin: "community",
  csdn: "community",
  segmentfault: "community",
  jianshu: "community",
  devto: "community",
  hashnode: "community",
  medium: "syndication",
  hackernoon: "community",
  linkedin: "social",
  hackernews: "community"
};
function platformUtmMedium(platform) {
  return process.env.PUBLISHER_UTM_MEDIUM || PLATFORM_UTM_MEDIUM[platform] || "referral";
}
const PLATFORM_PROFILE = {
  wechat: { title: "wechat", summary: "story", limit: 6 },
  zhihu: { title: "question", summary: "question", limit: 5 },
  juejin: { title: "technical", summary: "technical", limit: 6 },
  csdn: { title: "technical", summary: "technical", limit: 6 },
  segmentfault: { title: "technical", summary: "technical", limit: 5 },
  oschina: { title: "technical", summary: "technical", limit: 5 },
  xiaohongshu: { title: "lifestyle", summary: "lifestyle", limit: 8 },
  jike: { title: "short", summary: "short", limit: 4 },
  weibo: { title: "short", summary: "short", limit: 4 },
  devto: { title: "english-technical", summary: "english-technical", limit: 5 },
  hashnode: { title: "english-technical", summary: "english-technical", limit: 5 },
  medium: { title: "english-canonical", summary: "english-technical", limit: 5 },
  hackernoon: { title: "english-technical", summary: "english-technical", limit: 5 },
  linkedin: { title: "english-short", summary: "english-short", limit: 4 },
  hackernews: { title: "english-discussion", summary: "english-short", limit: 3 }
};
const RULES = {
  wechat: { format: "draft", note: "微信公众号：生成公众号草稿版本，文末带原文追踪链接。", footerLabel: "阅读原文", summary: true },
  xiaohongshu: { format: "text", note: "小红书：生成图文文案和标签，图片需人工选择。", footerLabel: "原文链接", plain: true, maxLength: 1200 },
  weibo: { format: "text", note: "微博：生成短摘要和原文追踪链接。", footerLabel: "原文", plain: true, maxLength: 680 },
  zhihu: { format: "markdown", note: "知乎：保留长文结构、标题层级、代码块和文末原文链接。", footerLabel: "原文与更多 AI 工程实践", summary: true },
  juejin: { format: "markdown", note: "掘金：保留 Markdown、代码块、排查清单和技术关键词。", footerLabel: "原文与完整工程笔记", summary: true },
  csdn: { format: "markdown", note: "CSDN：保留教程结构、代码块和步骤清单。", footerLabel: "原文链接", summary: true },
  jianshu: { format: "markdown", note: "简书：使用干净长文格式，保留主要结构。", footerLabel: "原文阅读" },
  jike: { format: "text", note: "即刻：生成短帖摘要，不建议全文同步。", footerLabel: "完整文章", plain: true, maxLength: 1700 },
  segmentfault: { format: "markdown", note: "思否：保留技术问答和代码块。", footerLabel: "原文与更多实践", summary: true },
  devto: { format: "markdown", note: "DEV Community: publish the reviewed English technical version and set XBSTACK as the canonical URL.", footerLabel: "Canonical article on XBSTACK", summary: true },
  hashnode: { format: "markdown", note: "Hashnode: prepare the reviewed English technical version for a browser-assisted draft; confirm the XBSTACK canonical URL before publishing.", footerLabel: "Canonical article on XBSTACK", summary: true },
  medium: { format: "markdown", note: "Medium: use a selected excerpt or imported canonical copy; do not create a competing canonical page.", footerLabel: "Read the canonical article on XBSTACK", summary: true },
  hackernoon: { format: "markdown", note: "HackerNoon: use the engineering case-study version and disclose the canonical XBSTACK source.", footerLabel: "Original engineering note on XBSTACK", summary: true },
  linkedin: { format: "text", note: "LinkedIn: publish a concise English observation and tracked link, not the complete article.", footerLabel: "Full test", plain: true, maxLength: 2200, summary: true },
  hackernews: { format: "text", note: "Hacker News: use a factual discussion title and the canonical URL; avoid promotional copy.", footerLabel: "Article", plain: true, maxLength: 700 }
};
function buildTrackedArticleUrl(article, platform) {
  const raw = article.source_url || inferArticleUrl(article);
  return withTracking(raw, platform, article.slug || article.id || "article");
}
function buildPlatformFormattedExport(article, platform) {
  const rule = RULES[platform] || { format: "markdown", note: "已生成平台发布副本。", footerLabel: "原文链接", summary: true };
  const profile = PLATFORM_PROFILE[platform] || { title: "canonical", summary: "canonical", limit: 6 };
  const trackedUrl = buildTrackedArticleUrl(article, platform);
  const keywords = buildKeywords(article, platform, profile.limit);
  const tags = buildPlatformTags(article, platform, keywords, profile.limit);
  const title = buildPlatformTitle(article, platform, profile.title, keywords);
  const summary = buildPlatformSummary(article, profile.summary);
  let content = rewriteInternalLinks(article.body || "", article, platform).trim();
  if (rule.summary && summary) {
    content = rule.plain ? `${summary}

${content}` : `> ${summary}

${content}`;
  }
  if (platform === "xiaohongshu") {
    content = buildXiaohongshuContent(title, summary, content, tags, trackedUrl);
  } else if (platform === "jike" || platform === "weibo") {
    content = buildShortPostContent(title, summary, trackedUrl, tags, rule.footerLabel);
  } else if (platform === "linkedin") {
    content = buildEnglishSocialPost(title, summary, trackedUrl, tags);
  } else if (platform === "hackernews") {
    content = buildHackerNewsPost(summary, trackedUrl);
  } else {
    content = `${content}

${buildFooter(rule.footerLabel, trackedUrl, tags, rule.plain)}`.trim();
  }
  if (rule.plain) content = toPlainText(content);
  if (rule.maxLength && content.length > rule.maxLength) {
    content = `${content.slice(0, rule.maxLength - trackedUrl.length - 32).trim()}...

${rule.footerLabel}：${trackedUrl}`;
  }
  return {
    platform,
    title,
    originalTitle: article.title,
    summary,
    keywords,
    format: rule.format,
    content,
    cover: article.cover,
    contentUrl: trackedUrl,
    tags,
    notes: [
      rule.note,
      `平台标题：${title}`,
      `摘要：${summary || "未生成"}`,
      `关键词：${keywords.join(" / ") || "未生成"}`,
      `GA4: utm_source=${platform}, utm_medium=${platformUtmMedium(platform)}, utm_campaign=${UTM_CAMPAIGN}`
    ]
  };
}
function inferArticleUrl(article) {
  const canonical = typeof article.frontmatter.canonical === "string" ? article.frontmatter.canonical.trim() : "";
  if (canonical) return new URL(canonical, ensureSlash(SITE_URL)).toString();
  const declaredRoute = typeof article.frontmatter.route === "string" ? article.frontmatter.route.trim() : "";
  if (declaredRoute) return new URL(declaredRoute, ensureSlash(SITE_URL)).toString();
  const id = cleanId(article.slug || article.id || "");
  const collection = article.collection || "ai";
  if (!id) return SITE_URL;
  const route = collection === "pages" ? `/${id}/` : collection === "ai" ? `/ai/${id}/` : collection === "lens" ? `/life/${id}/` : `/${collection}/${id}/`;
  return new URL(route, ensureSlash(SITE_URL)).toString();
}
function withTracking(url, platform, contentId) {
  const parsed = new URL(url, ensureSlash(SITE_URL));
  parsed.searchParams.set("utm_source", platform);
  parsed.searchParams.set("utm_medium", platformUtmMedium(platform));
  parsed.searchParams.set("utm_campaign", UTM_CAMPAIGN);
  parsed.searchParams.set("utm_content", cleanId(contentId));
  parsed.searchParams.set("ref", platform);
  return parsed.toString();
}
function rewriteInternalLinks(body, article, platform) {
  return body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (full, label, href) => {
    const value = href.trim();
    if (!isInternalLink(value)) return full;
    const absolute = value.startsWith("http") ? value : new URL(value, ensureSlash(SITE_URL)).toString();
    return `[${label}](${withTracking(absolute, platform, article.slug || article.id || "article")})`;
  });
}
function isInternalLink(href) {
  if (href.startsWith("#") || href.startsWith("mailto:")) return false;
  if (href.startsWith("/")) return true;
  try {
    const parsed = new URL(href);
    return parsed.hostname === "www.xbstack.com" || parsed.hostname === "xbstack.com";
  } catch {
    return false;
  }
}
function buildFooter(label, url, tags, plain = false) {
  const tagLine = tags.length && !plain ? `

标签：${tags.map((tag) => `#${tag}`).join(" ")}` : "";
  return plain ? `${label}：${url}` : `---

${label}：${url}${tagLine}`;
}
function buildPlatformTitle(article, platform, style, keywords) {
  const title = article.title.replace(/\s+/g, " ").trim();
  const core = title.replace(/[：:｜|].*$/, "");
  const keyword = keywords[0];
  if (style === "wechat") return truncate(title.includes("：") ? title : `${core}：这次我真正想清楚的一个问题`, 34);
  if (style === "question") return truncate(`${core}，为什么实际做起来总会出问题？`, 42);
  if (style === "technical") return truncate(["实测", "测评", "实战", "排查"].some((marker) => title.includes(marker)) ? title : `${core}：${keyword || "生产环境"}实战与排查清单`, platform === "juejin" ? 58 : 64);
  if (style === "lifestyle") return truncate(title.replace(/实战|教程|指南/g, "").replace(/[：:｜|]/g, "，"), 26);
  if (style === "short") return truncate(core, 30);
  if (style === "english-technical" || style === "english-canonical") return truncate(title, 90);
  if (style === "english-short") return truncate(title, 110);
  if (style === "english-discussion") return truncate(`Show HN: ${title}`, 100);
  return truncate(title, 58);
}
function buildPlatformSummary(article, style) {
  const desc = typeof article.frontmatter.description === "string" ? article.frontmatter.description.trim() : "";
  const paragraph = (article.body || "").split(/\n{2,}/).find((line) => line.trim() && !line.trim().startsWith("#"));
  const base = (desc || toPlainText(paragraph || "") || article.title).replace(/\s+/g, " ").trim();
  if (style === "technical") return truncate(`这篇主要解决一个实际问题：${base}`, 110);
  if (style === "question") return truncate(`问题不在概念本身，而在落地时的边界、状态和失败处理。${base}`, 120);
  if (style === "lifestyle") return truncate(`不是标准教程，更像一次真实使用后的记录：${base}`, 90);
  if (style === "short") return truncate(base, 90);
  if (style === "story") return truncate(`我把这篇文章重新整理成一份可直接执行的记录：${base}`, 100);
  if (style === "english-technical") return truncate(`A production-focused update based on a real project: ${base}`, 180);
  if (style === "english-short") return truncate(base, 220);
  return truncate(base, 120);
}
function buildKeywords(article, platform, limit) {
  const fromMeta = [
    ...normalizeTags$1(article.frontmatter.keywords),
    ...normalizeTags$1(article.frontmatter.tags),
    ...normalizeTags$1(article.frontmatter.category)
  ];
  const hints = extractKeywordHints(`${article.title} ${article.body}`);
  return unique([...platformKeywordHints(platform), ...fromMeta, ...hints]).slice(0, limit);
}
function buildPlatformTags(article, platform, keywords, limit) {
  const base = normalizeTags$1(article.frontmatter.tags);
  if (platform === "xiaohongshu") return unique(["小白记录", "户外生活", "个人成长", ...base, ...keywords]).slice(0, limit);
  if (platform === "juejin") return unique(["AI", "工程实践", "排查清单", ...base, ...keywords]).slice(0, limit);
  if (platform === "csdn") return unique(["AI", "实战", "问题排查", ...base, ...keywords]).slice(0, limit);
  if (platform === "zhihu") return unique(["AI", "程序员", "实践经验", ...base, ...keywords]).slice(0, limit);
  if (platform === "wechat") return unique(["小白", "XBSTACK", ...base, ...keywords]).slice(0, limit);
  if (["devto", "hashnode", "medium", "hackernoon", "linkedin", "hackernews"].includes(platform)) {
    return unique(["AI", "SoftwareEngineering", "DeveloperTools", ...base, ...keywords]).slice(0, limit);
  }
  return unique([...base, ...keywords]).slice(0, limit);
}
function platformKeywordHints(platform) {
  if (platform === "wechat") return ["XBSTACK", "小白", "实践记录"];
  if (platform === "zhihu") return ["为什么", "经验", "实践"];
  if (platform === "juejin") return ["AI", "工程实践", "排查清单"];
  if (platform === "csdn") return ["教程", "实战", "问题排查"];
  if (platform === "xiaohongshu") return ["真实记录", "生活方式", "自我成长"];
  if (platform === "jike" || platform === "weibo") return ["记录", "思考"];
  if (["devto", "hashnode", "medium", "hackernoon", "linkedin", "hackernews"].includes(platform)) {
    return ["AI Engineering", "Code Review", "Production Systems"];
  }
  return [];
}
function buildXiaohongshuContent(title, summary, body, tags, trackedUrl) {
  const clean = toPlainText(body).slice(0, 900);
  const tagLine = tags.map((tag) => `#${tag.replace(/^#/, "")}`).join(" ");
  return `${title}

${summary}

${clean}

原文链接：${trackedUrl}

${tagLine}`.trim();
}
function buildShortPostContent(title, summary, trackedUrl, tags, label) {
  const tagLine = tags.length ? `
${tags.map((tag) => `#${tag.replace(/^#/, "")}`).join(" ")}` : "";
  return `${title}

${summary}

${label}：${trackedUrl}${tagLine}`.trim();
}
function buildEnglishSocialPost(title, summary, trackedUrl, tags) {
  const tagLine = tags.length ? `

${tags.map((tag) => `#${tag.replace(/^#/, "").replace(/\s+/g, "")}`).join(" ")}` : "";
  return `${title}

${summary}

The useful boundary: model output can accelerate cross-file investigation, but local builds, diffs, security checks, and production approval still need deterministic verification.

Full test: ${trackedUrl}${tagLine}`.trim();
}
function buildHackerNewsPost(summary, trackedUrl) {
  return `${summary}

I tested the model against a real Astro repository and documented both the correct diagnosis and the unsafe first remediation. The article includes the evidence boundary and the July 20 product update.

${trackedUrl}`.trim();
}
function extractKeywordHints(value) {
  const hints = ["LangGraph", "MCP", "n8n", "AI Agent", "AI", "NAS", "Docker", "Postgres", "Redis", "OpenAI", "Objective-C", "iOS", "户外", "贵州", "投资", "阅读"];
  return hints.filter((hint) => value.toLowerCase().includes(hint.toLowerCase()));
}
function unique(values) {
  const seen = /* @__PURE__ */ new Set();
  return values.map((value) => value.trim()).filter(Boolean).filter((value) => {
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function toPlainText(value) {
  return value.replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*|```/g, "")).replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1：$2").replace(/^#{1,6}\s*/gm, "").replace(/^>\s?/gm, "").replace(/[\*_`~]/g, "").replace(/\n{3,}/g, "\n\n").trim();
}
function normalizeTags$1(value) {
  if (Array.isArray(value)) return value.map(String).map((v) => v.trim()).filter(Boolean).slice(0, 8);
  if (typeof value === "string") return value.split(/[,，\s]+/).map((v) => v.trim()).filter(Boolean).slice(0, 8);
  return [];
}
function cleanId(value) {
  return value.replace(/\.(md|mdx)$/i, "").replace(/^\/+|\/+$/g, "");
}
function ensureSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}
function truncate(value, length) {
  return value.length > length ? `${value.slice(0, length - 1)}…` : value;
}

const IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
function parsePublisherMarkdown(input) {
  const parsed = matter(input.markdown || "");
  const frontmatter = parsed.data || {};
  const body = input.assetMap ? replaceImageSources(parsed.content || "", input.assetMap) : parsed.content || "";
  const title = asString(frontmatter.title) || inferTitle(body) || input.id || "未命名文章";
  const slug = asString(frontmatter.slug) || input.id || slugify(title);
  const cover = asString(frontmatter.cover) || asString(frontmatter.image) || asString(frontmatter.featuredImg);
  const baseDir = input.filePath ? path.dirname(input.filePath) : void 0;
  const images = extractImages(body, baseDir, input.assetMap);
  return {
    id: input.id || slug,
    title,
    slug,
    collection: input.collection,
    filePath: input.filePath,
    source: input.source || "manual",
    markdown: body === parsed.content ? input.markdown || "" : matter.stringify(body, frontmatter),
    body,
    frontmatter,
    cover,
    author: asString(frontmatter.author),
    source_url: asString(frontmatter.source_url) || asString(frontmatter.canonical),
    images
  };
}
function buildPublisherPreview(article, platforms = ["juejin", "zhihu", "jike", "csdn", "jianshu"]) {
  return {
    article,
    checks: buildChecks(article),
    exports: platforms.reduce((acc, platform) => {
      acc[platform] = buildPlatformExport(article, platform);
      return acc;
    }, {})
  };
}
function buildChecks(article) {
  const checks = [];
  checks.push({
    key: "title",
    label: "标题",
    level: article.title && article.title !== "未命名文章" ? "ok" : "error",
    message: article.title && article.title !== "未命名文章" ? `已识别：${article.title}` : "缺少标题，请补充 title 或一级标题"
  });
  checks.push({
    key: "cover",
    label: "封面",
    level: article.cover ? "ok" : "warning",
    message: article.cover ? `封面：${article.cover}` : "未设置封面，可从正文第一张图或图片库选择"
  });
  checks.push({
    key: "images",
    label: "正文图片",
    level: article.images.some((img) => img.exists === false) ? "warning" : "ok",
    message: article.images.length ? `识别到 ${article.images.length} 张图片` : "正文未识别到图片"
  });
  checks.push({
    key: "wechat",
    label: "公众号草稿",
    level: "ok",
    message: "将通过服务端 Wenyan Server 创建草稿箱文章"
  });
  return checks;
}
function buildPlatformExport(article, platform) {
  if (platform === "xiaohongshu") {
    const clean = stripMarkdown(article.body).replace(/\n{3,}/g, "\n\n").trim();
    const tags = normalizeTags(article.frontmatter.tags);
    return {
      platform,
      title: article.title,
      format: "text",
      content: `${article.title}

${clean}

${tags.map((tag) => `#${tag}`).join(" ")}`.trim(),
      notes: ["小红书第一版生成复制文案，不自动登录发布", "图片请按图片清单人工上传"]
    };
  }
  if (platform === "xbstack") {
    return {
      platform,
      title: article.title,
      format: "mdx",
      content: article.markdown,
      notes: ["站内发布副本，不自动覆盖原始文章"]
    };
  }
  return buildPlatformFormattedExport(article, platform);
}
function composeWechatMarkdown(article, theme = "default") {
  const exported = buildPlatformFormattedExport(article, "wechat");
  const data = { ...article.frontmatter };
  data.title = exported.title;
  data.description = exported.summary;
  data.keywords = exported.keywords;
  data.tags = exported.tags;
  data.source_url = exported.contentUrl;
  if (article.cover) data.cover = article.cover;
  if (article.author) data.author = article.author;
  data.theme = theme;
  return matter.stringify(exported.content, data);
}
function extractImages(body, baseDir, assetMap) {
  const images = [];
  let match;
  while ((match = IMAGE_RE.exec(body)) !== null) {
    const src = match[2].trim();
    const mapped = assetMap?.[src] || assetMap?.[src.replace(/^\.\//, "")];
    const isRemote = /^https?:\/\//i.test(src) || src.startsWith("/");
    const resolvedSrc = mapped || (isRemote || !baseDir ? src : path.resolve(baseDir, src));
    const exists = /^https?:\/\//i.test(resolvedSrc) || resolvedSrc.startsWith("/") ? void 0 : fs.existsSync(resolvedSrc);
    images.push({ alt: match[1], src, resolvedSrc, exists, isRemote: /^https?:\/\//i.test(src) });
  }
  return images;
}
function replaceImageSources(body, assetMap) {
  return body.replace(IMAGE_RE, (full, alt, src) => {
    const cleanSrc = src.trim();
    const replacement = findAssetReplacement(cleanSrc, assetMap);
    return replacement ? `![${alt}](${replacement})` : full;
  });
}
function findAssetReplacement(src, assetMap) {
  const candidates = [
    src,
    src.replace(/^\.\//, ""),
    src.split("/").slice(-1)[0],
    src.split("/").slice(-2).join("/")
  ];
  return candidates.map((item) => assetMap[item]).find(Boolean);
}
function inferTitle(body) {
  const heading = body.match(/^#\s+(.+)$/m);
  return heading?.[1]?.trim();
}
function stripMarkdown(value) {
  return value.replace(/```[\s\S]*?```/g, "").replace(/!\[[^\]]*\]\([^)]+\)/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#>*_`~-]/g, "").trim();
}
function normalizeTags(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") return value.split(/[,，\s]+/).filter(Boolean);
  return [];
}
function asString(value) {
  return typeof value === "string" ? value : "";
}
function slugify(value) {
  return value.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || `article-${Date.now()}`;
}

export { buildPlatformExport as a, buildPublisherPreview as b, buildPlatformFormattedExport as c, composeWechatMarkdown as d, parsePublisherMarkdown as p };
