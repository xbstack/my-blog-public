import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, e as renderScript, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, y as Fragment, w as renderSlot } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$LiquidGlassLess, r as readingTime, f as formatDate } from './readingTime_BMg8wGjh.mjs';
/* empty css                          */
import 'clsx';
import fs from 'node:fs';
import path from 'node:path';
import { $ as $$Image } from './_astro_assets_cm5UI8r_.mjs';
import { u as upperHumanize, m as markdownify, s as slugify, $ as $$AuthorSidebar } from './authorSidebar_iCvki5ec.mjs';
import { S as SITE_INFO } from './config_CxFGSX0T.mjs';
import { N as NewsletterForm } from './NewsletterForm_DuXcv_Zx.mjs';
import { r as resolveEntryUrl } from './content-route_Id4Hifd6.mjs';

function createHeadingHierarchy(headings) {
  const topLevelHeadings = [];
  headings.forEach((heading) => {
    const h = {
      ...heading,
      subheadings: []
    };
    if (h.depth >= 2) {
      topLevelHeadings.push(h);
    } else {
      let parent = topLevelHeadings[topLevelHeadings.length - 1];
      if (parent) {
        parent.subheadings.push(h);
      }
    }
  });
  return topLevelHeadings;
}

const $$Astro$5 = createAstro("https://www.xbstack.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings, tocDepth = 3, lang = "zh-CN" } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const heirarchy = createHeadingHierarchy(headings);
  const toc = heirarchy.filter((heading) => heading.depth <= tocDepth);
  return renderTemplate`${toc.length > 0 && renderTemplate`${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "animation": "fadeLeft", "wrapperClass": "dock !p-6", "data-astro-cid-hop3l3kc": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="intersect:animate-fadeLeft" data-astro-cid-hop3l3kc><h2 class="text-2xl border-none mb-3" data-astro-cid-hop3l3kc>${isEnglish ? "On This Page" : "\u5185\u5BB9\u5BFC\u822A"}</h2><div class="max-h-96 overflow-y-auto" data-astro-cid-hop3l3kc><ul class="list-none m-0 space-y-1" data-astro-cid-hop3l3kc>${toc.map((heading) => renderTemplate`<li${addAttribute(`${heading.depth === 2 ? "ml-0" : "ml-4"}`, "class")} data-astro-cid-hop3l3kc><a${addAttribute(`#${heading.slug}`, "href")} class="block w-full leading-relaxed no-underline text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-primary transition-colors duration-200 py-1 font-medium" data-toc-link data-astro-cid-hop3l3kc>${heading.text}</a></li>`)}</ul></div></div>` })}`}${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/TableOfContents.astro", void 0);

const $$Astro$4 = createAstro("https://www.xbstack.com");
const $$FinancialDisclaimer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FinancialDisclaimer;
  const { type = "finance", lang = "zh-CN" } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  return renderTemplate`${maybeRenderHead()}<div class="financial-disclaimer my-8 p-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm relative overflow-hidden group" data-astro-cid-qg2yevcq> <!-- 装饰性背景图标 --> <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity" data-astro-cid-qg2yevcq> <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qg2yevcq> <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" data-astro-cid-qg2yevcq></path> </svg> </div> <div class="flex items-start gap-4" data-astro-cid-qg2yevcq> <div class="flex-shrink-0 w-10 h-10 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500" data-astro-cid-qg2yevcq> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qg2yevcq> <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" data-astro-cid-qg2yevcq></path> <line x1="12" y1="9" x2="12" y2="13" data-astro-cid-qg2yevcq></line> <line x1="12" y1="17" x2="12.01" y2="17" data-astro-cid-qg2yevcq></line> </svg> </div> <div class="flex-1" data-astro-cid-qg2yevcq> <h4 class="text-sm font-black text-orange-500 uppercase tracking-widest mb-1 italic" data-astro-cid-qg2yevcq> ${isEnglish ? type === "finance" ? "FINANCIAL DISCLAIMER" : "CONTENT GUIDELINES" : type === "finance" ? "\u79BB\u7EBF\u5B9E\u9A8C\u514D\u8D23\u58F0\u660E / DISCLAIMER" : "\u5185\u5BB9\u51C6\u5219 / GUIDELINES"} </h4> <div class="text-xs leading-relaxed text-slate-600 dark:text-slate-600 dark:text-slate-400 font-medium" data-astro-cid-qg2yevcq> ${type === "finance" ? isEnglish ? renderTemplate`<p data-astro-cid-qg2yevcq>
This article is <strong data-astro-cid-qg2yevcq>Xiaobai’s</strong> personal investment review and technical backtest record. Any assets, strategies, or data analysis mentioned here are offline engineering experiments and <strong data-astro-cid-qg2yevcq>do not constitute investment advice, a recommendation to buy, or financial consulting</strong>. Financial markets involve nonlinear risk, and code does not guarantee returns. Conduct your own review and remain responsible for asset safety.
</p>` : renderTemplate`<p data-astro-cid-qg2yevcq>
本文属于<strong data-astro-cid-qg2yevcq>“小白”</strong>的个人投资逻辑复盘与技术回测记录。文中提及的所有标的、策略及数据分析仅作为全栈工程师的离线实验案例，<strong data-astro-cid-qg2yevcq>不构成任何形式的买入建议或投资咨询</strong>。金融市场具有极高的非线性风险，代码逻辑不代表财富收益。请务必保持独立审计，资产安全由您自行负责。
</p>` : renderTemplate`<p data-astro-cid-qg2yevcq>${isEnglish ? "This content is based on personal implementation experience and is provided for reference. Test any technology or approach thoroughly in a local environment before use." : "\u672C\u6587\u5185\u5BB9\u57FA\u4E8E\u4E2A\u4EBA\u5B9E\u6218\u603B\u7ED3\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002\u5728\u5E94\u7528\u76F8\u5173\u6280\u672F\u6216\u65B9\u6848\u524D\uFF0C\u8BF7\u52A1\u5FC5\u8FDB\u884C\u5145\u5206\u7684\u672C\u5730\u6D4B\u8BD5\u3002"}</p>`} </div> </div> </div> </div> `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/FinancialDisclaimer.astro", void 0);

const $$Astro$3 = createAstro("https://www.xbstack.com");
const $$EntryHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EntryHeader;
  const { entry, showInfo = true, showImage = true, showDate = true, showReadingTime = false, showCategories = false, showTags = false } = Astro2.props;
  const { title, categories, category, tags = [], image, imageAlt, createdAt, updatedAt, complexity = 1, lang, description } = entry.data;
  const isEnglish = String(lang || "").toLowerCase().startsWith("en");
  const displayCategories = categories || (category ? [category] : []);
  const collectionName = entry.collection;
  const getCategoryLink = (cat) => {
    const slug = slugify(cat);
    if (collectionName === "ai" || String(collectionName) === "stack") {
      if (slug === "mcp") return "/ai/mcp/";
      if (slug === "langgraph") return "/ai/langgraph/";
      if (slug === "workflow" || slug === "n8n") return "/ai/workflow/";
      return "/ai/agent/";
    }
    if (collectionName === "horizon") return "/horizon/";
    if (collectionName === "lens") return "/life/";
    if (collectionName === "newsletter") return "/newsletter/";
    return "/";
  };
  let rawBody = entry.body;
  if (!rawBody) {
    try {
      const candidates = [
        path.join(process.cwd(), "src/content", entry.collection, entry.id),
        path.join(process.cwd(), "src/content", entry.collection, `${entry.id}.md`),
        path.join(process.cwd(), "src/content", entry.collection, `${entry.id}.mdx`)
      ];
      for (const file of candidates) {
        if (!fs.existsSync(file)) continue;
        const source = fs.readFileSync(file, "utf-8");
        const parts = source.split("---");
        rawBody = parts.length >= 3 ? parts.slice(2).join("---") : source;
        break;
      }
    } catch {
    }
  }
  const minutes = parseInt(readingTime(rawBody || "", complexity), 10);
  const displayImageAlt = imageAlt || title;
  return renderTemplate`${showInfo && renderTemplate`${maybeRenderHead()}<header class="mb-10 border-b border-[var(--xb-line)] pb-8">${image && showImage && renderTemplate`<div class="mb-8 overflow-hidden rounded-xl border border-[var(--xb-line)] bg-[var(--xb-surface-soft)]">${typeof image === "object" && "src" in image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": displayImageAlt, "width": 1200, "height": 630, "sizes": "(min-width: 1280px) 860px, calc(100vw - 40px)", "loading": "eager", "fetchpriority": "high", "class": "aspect-[40/21] w-full object-cover" })}` : renderTemplate`<img${addAttribute(image, "src")}${addAttribute(displayImageAlt, "alt")} width="1200" height="630" loading="eager" decoding="async" class="aspect-[40/21] w-full object-cover">`}</div>`}${showCategories && displayCategories.length > 0 && renderTemplate`<div class="mb-4 flex flex-wrap items-center gap-2">${displayCategories.map((cat) => renderTemplate`<a${addAttribute(getCategoryLink(cat), "href")} class="rounded-md border border-blue-500/15 bg-blue-500/[0.05] px-2.5 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400">${isEnglish ? upperHumanize(cat) : cat}</a>`)}</div>`}<h1 class="m-0 text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.12] tracking-[-.045em] text-[var(--xb-ink)]">${unescapeHTML(markdownify(title))}</h1>${description && renderTemplate`<p class="mt-5 max-w-[760px] text-[15px] leading-7 text-[var(--xb-text)]">${description}</p>`}<div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-[var(--xb-faint)]">${createdAt && showDate && renderTemplate`<span>${isEnglish ? "Published" : "\u53D1\u5E03"} · ${formatDate(createdAt)}</span>`}${updatedAt && renderTemplate`<span>${isEnglish ? "Updated" : "\u66F4\u65B0"} · ${formatDate(updatedAt)}</span>`}${showReadingTime && renderTemplate`<span>${isEnglish ? `${minutes} min read` : `${minutes} \u5206\u949F\u9605\u8BFB`}</span>`}<span>${isEnglish ? "XBSTACK" : "XBSTACK \u539F\u521B"}</span></div>${showTags && tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2">${tags.slice(0, 8).map((tag) => renderTemplate`<span class="rounded-md border border-[var(--xb-line)] bg-[var(--xb-surface-soft)] px-2 py-1 text-[9px] font-semibold text-[var(--xb-muted)]">#${tag}</span>`)}</div>`}</header>`}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/EntryHeader.astro", void 0);

const $$Astro$2 = createAstro("https://www.xbstack.com");
const $$Comment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Comment;
  const { lang, path } = Astro2.props;
  const serverURL = "https://comments.xbstack.com";
  const pageLang = String(lang || Astro2.currentLocale || "").toLowerCase().startsWith("en") ? "en" : "zh-CN";
  const pagePath = path || Astro2.url.pathname;
  const isEnglish = pageLang === "en";
  return renderTemplate`${maybeRenderHead()}<section class="xbstack-comments" data-xbstack-waline${addAttribute(serverURL, "data-server-url")}${addAttribute(pagePath, "data-comment-path")}${addAttribute(pageLang, "data-comment-lang")} aria-labelledby="xbstack-comments-title"> <div class="xbstack-comments__header"> <div> <p class="xbstack-comments__eyebrow">${isEnglish ? "DISCUSSION" : "参与讨论"}</p> <h2 id="xbstack-comments-title"> ${isEnglish ? "Questions, verification and corrections" : "问题、验证与勘误"} </h2> <p class="xbstack-comments__description"> ${isEnglish ? "Sign in to comment. Every new comment is reviewed before publication; while pending, it is visible only to you and the administrator." : "登录后可发表评论。所有新评论先进入审核；审核期间仅评论者本人和管理员可见，通过后才公开。"} </p> </div> <div class="xbstack-comments__policy"${addAttribute(isEnglish ? "Comment policy" : "评论规则", "aria-label")}> <span>${isEnglish ? "Sign-in required" : "登录评论"}</span> <span>${isEnglish ? "Reviewed before public" : "审核后公开"}</span> </div> </div> <div class="xbstack-comments__status" data-waline-status role="status" aria-live="polite"> <span class="xbstack-comments__spinner" aria-hidden="true"></span> <span>${isEnglish ? "Loading the discussion…" : "正在加载评论区…"}</span> </div> <div id="waline" class="xbstack-comments__mount" data-waline-mount></div> <noscript> <p class="xbstack-comments__noscript"> ${isEnglish ? "JavaScript is required to view and post comments." : "评论区需要启用 JavaScript 才能查看和发布评论。"} </p> </noscript> </section> ${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/Comment.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/Comment.astro", void 0);

const $$Astro$1 = createAstro("https://www.xbstack.com");
const $$BlogNetworkLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogNetworkLinks;
  const { className = "", lang = "zh-CN" } = Astro2.props;
  const isEnglish = lang === "en";
  const links = [
    {
      label: isEnglish ? "Ten-Year Pledge" : "\u5341\u5E74\u4E4B\u7EA6",
      href: SITE_INFO.BLOG_NETWORK?.tenYearPledge,
      external: true
    },
    {
      label: isEnglish ? "Travel to the next blog \u2192" : "\u5F00\u5F80\u4E0B\u4E00\u7AD9 \u2192",
      href: SITE_INFO.BLOG_NETWORK?.travelling,
      external: false
    }
  ].filter((item) => Boolean(item.href));
  return renderTemplate`${links.length > 0 && renderTemplate`${maybeRenderHead()}<nav${addAttribute([
    "rounded-[20px] border border-slate-200/80 dark:border-white/10 bg-white/55 dark:bg-white/[0.025] px-4 py-3",
    className
  ], "class:list")}${addAttribute(isEnglish ? "Independent blog network" : "\u72EC\u7ACB\u535A\u5BA2\u7F51\u7EDC", "aria-label")}><div class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">${isEnglish ? "Independent Blog Network" : "\u72EC\u7ACB\u535A\u5BA2\u7F51\u7EDC"}</div><div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">${links.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index > 0 && renderTemplate`<span class="text-slate-300 dark:text-slate-700">·</span>`}<a${addAttribute(item.href, "href")}${addAttribute(item.external ? "_blank" : void 0, "target")}${addAttribute(item.external ? "noopener noreferrer" : void 0, "rel")} class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${item.label}</a>` })}`)}</div></nav>`}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/BlogNetworkLinks.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.xbstack.com");
const $$TechLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechLayout;
  const { entry, headings = [], recommendedPosts = [], categoryLink, showReadingTime = true } = Astro2.props;
  const { category } = entry.data;
  const isEnglish = entry.id.includes("/en/") || entry.data.lang === "en" || entry.id.startsWith("en/") || entry.data.title_en;
  const translations = entry.data.translations && typeof entry.data.translations === "object" ? entry.data.translations : {};
  const alternateLanguageHref = isEnglish ? translations["zh-CN"] || translations["zh-Hans"] || translations.zh : translations.en;
  const alternateLanguageText = isEnglish ? "\u9605\u8BFB\u4E2D\u6587\u7248\u672C" : "Read this article in English";
  const actuallyHideToc = (headings || []).length < 2;
  const hub = entry.data.hub || category || "AI";
  const dateString = entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString(isEnglish ? "en-US" : "zh-CN") : "";
  const hideStructuredBlocks = entry.data.hideStructuredBlocks === true;
  const explicitTldr = !hideStructuredBlocks && Array.isArray(entry.data.tldr) ? entry.data.tldr.filter(Boolean) : [];
  const tags = Array.isArray(entry.data.tags) ? entry.data.tags : [];
  const newsletterHref = isEnglish ? "/en/newsletter/" : "/newsletter/";
  const toolsHref = isEnglish ? "/en/tools/" : "/tools/";
  return renderTemplate(_a || (_a = __template(["", '<div class="xb-article-grid py-8 md:py-10"> <aside class="xb-article-side"> ', ' <section class="xb-article-panel"> <div class="xb-article-panel__title">', '</div> <dl class="space-y-3 text-[10px] leading-5 text-[var(--xb-muted)]"> ', ' <div><dt class="font-bold text-[var(--xb-ink)]">', "</dt><dd><a", ' class="text-blue-600 dark:text-blue-400">', "</a></dd></div> ", " </dl> ", ' </section> <section class="xb-article-panel"> <div class="xb-article-panel__title">', '</div> <p class="text-[10px] leading-5 text-[var(--xb-muted)]">', '</p> <div class="mt-3 grid gap-2 text-[10px] font-bold text-blue-600 dark:text-blue-400"><nav data-cluster-hub-link><a', ">", " \u2192</a></nav><a", ">", " \u2192</a><a", '>Newsletter \u2192</a></div> </section> </aside> <main class="min-w-0"> <article class="xb-article-paper"> <div class="xl:hidden mb-6">', "</div> ", " ", " ", " ", ' <div class="prose prose-tech markdown-content max-w-none"> ', " ", " </div> ", ' <section class="mt-10 border-t border-[var(--xb-line)] pt-7"> <div class="grid grid-cols-1 gap-4 md:grid-cols-[1fr_260px] md:items-center"><div><h2 class="m-0 text-[16px] font-bold text-[var(--xb-ink)]">', '</h2><p class="mt-1 text-[10px] leading-5 text-[var(--xb-muted)]">', "</p></div>", '</div> </section> </article> <section class="xb-article-comments"> <div class="mb-5 flex items-center gap-3 text-[11px] font-bold text-[var(--xb-ink)]"><span>', '</span><span class="h-px flex-1 bg-[var(--xb-line)]"></span></div> ', ' </section> </main> <aside class="xb-article-side"> ', ' <section class="xb-article-panel"> <div class="xb-article-panel__title">', '</div> <div class="grid gap-1 text-[10px] text-[var(--xb-text)]"> <button type="button" data-copy-article class="flex items-center justify-between border-b border-[var(--xb-line)] py-2 text-left"><span>', "</span><span>\u2197</span></button> <a", ' class="flex items-center justify-between border-b border-[var(--xb-line)] py-2"><span>', "</span><span>\u2192</span></a> <a", ' class="flex items-center justify-between border-b border-[var(--xb-line)] py-2"><span>RSS</span><span>\u2192</span></a> <a', ' class="flex items-center justify-between py-2"><span>Newsletter</span><span>\u2192</span></a> </div> </section> ', " ", " </aside> </div> <script>\n  const bindArticleTools=()=>{document.querySelectorAll('[data-copy-article]').forEach((button)=>{if(button.dataset.ready)return;button.dataset.ready='1';button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(window.location.href);const original=button.querySelector('span')?.textContent;if(button.querySelector('span'))button.querySelector('span').textContent='\u5DF2\u590D\u5236';setTimeout(()=>{if(button.querySelector('span'))button.querySelector('span').textContent=original||'\u590D\u5236\u94FE\u63A5'},1200)}catch{}})})};document.addEventListener('astro:page-load',bindArticleTools);bindArticleTools();\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "AuthorSidebar", $$AuthorSidebar, { "variant": "article", "lang": isEnglish ? "en" : "zh-CN", "className": "xb-article-panel !rounded-xl !shadow-none" }), isEnglish ? "ARTICLE INFO" : "\u6587\u7AE0\u4FE1\u606F", dateString && renderTemplate`<div><dt class="font-bold text-[var(--xb-ink)]">${isEnglish ? "Published" : "\u53D1\u5E03"}</dt><dd>${dateString}</dd></div>`, isEnglish ? "Topic" : "\u6240\u5C5E\u4E13\u9898", addAttribute(categoryLink, "href"), hub, entry.data.license && renderTemplate`<div><dt class="font-bold text-[var(--xb-ink)]">License</dt><dd>${entry.data.license}</dd></div>`, tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-1.5">${tags.slice(0, 6).map((tag) => renderTemplate`<span class="rounded border border-[var(--xb-line)] px-1.5 py-0.5 text-[8px] text-[var(--xb-faint)]">#${tag}</span>`)}</div>`, isEnglish ? "Related" : "\u76F8\u5173\u5165\u53E3", isEnglish ? "Continue with the related topic, tools or weekly updates." : "\u7EE7\u7EED\u67E5\u770B\u76F8\u5173\u4E13\u9898\u3001\u5DE5\u5177\u4E0E\u5185\u5BB9\u66F4\u65B0\u3002", addAttribute(categoryLink, "href"), isEnglish ? "Topic" : "\u76F8\u5173\u4E13\u9898", addAttribute(toolsHref, "href"), isEnglish ? "Products & tools" : "\u4EA7\u54C1\u4E0E\u5DE5\u5177", addAttribute(newsletterHref, "href"), renderComponent($$result, "AuthorSidebar", $$AuthorSidebar, { "variant": "mobile", "lang": isEnglish ? "en" : "zh-CN", "className": "!rounded-xl !shadow-none" }), renderComponent($$result, "EntryHeader", $$EntryHeader, { "entry": entry, "showReadingTime": showReadingTime, "showCategories": true, "showTags": true }), alternateLanguageHref && renderTemplate`<nav class="mb-7 flex items-center justify-between gap-4 border-y border-[var(--xb-line)] py-3 text-[10px] text-[var(--xb-muted)]"${addAttribute(isEnglish ? "Article language version" : "\u6587\u7AE0\u8BED\u8A00\u7248\u672C", "aria-label")}> <span>${isEnglish ? "This URL is the English edition." : "\u5F53\u524D URL \u4E3A\u4E2D\u6587\u7248\u672C\u3002"}</span> <a${addAttribute(alternateLanguageHref, "href")}${addAttribute(isEnglish ? "zh-CN" : "en", "hreflang")} class="font-bold text-blue-600 dark:text-blue-400">${alternateLanguageText} →</a> </nav>`, entry.data.note && renderTemplate`<aside class="mb-8 border-l-2 border-blue-500 bg-blue-500/[0.04] px-4 py-3"> <div class="text-[9px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">${isEnglish ? "Author note" : "\u5C0F\u767D\u7684\u8BF4\u660E"}</div> <p class="mt-1 text-[12px] leading-6 text-[var(--xb-text)]">${entry.data.note}</p> </aside>`, explicitTldr.length > 0 && renderTemplate`<section class="mb-9 border-y border-[var(--xb-line)] py-4"> <div class="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">${isEnglish ? "Quick answer" : "\u5148\u7ED9\u7ED3\u8BBA"}</div> <ul class="space-y-2 pl-4 text-[12px] leading-6 text-[var(--xb-text)]">${explicitTldr.map((item) => renderTemplate`<li>${item}</li>`)}</ul> </section>`, (category === "finance" || category === "investing") && renderTemplate`${renderComponent($$result, "FinancialDisclaimer", $$FinancialDisclaimer, { "type": "finance" })}`, renderSlot($$result, $$slots["default"]), (recommendedPosts || []).length > 0 && renderTemplate`<section class="mt-14 border-t border-[var(--xb-line)] pt-7" data-related-reading> <div class="mb-4 flex items-center justify-between gap-4"><h2 class="m-0 text-[17px] font-bold text-[var(--xb-ink)]">${isEnglish ? "Next reading" : "\u4E0B\u4E00\u6B65\u9605\u8BFB"}</h2><a${addAttribute(categoryLink, "href")} class="text-[10px] font-bold text-blue-600 dark:text-blue-400">${isEnglish ? "Topic hub" : "\u8FD4\u56DE\u4E13\u9898"} →</a></div> <div class="xb-article-related">${recommendedPosts.slice(0, 4).map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")} data-related-link><span class="font-bold text-[var(--xb-ink)]">${post.data.title}</span>${post.data.description && renderTemplate`<span class="mt-1 block line-clamp-1 text-[9px] text-[var(--xb-faint)]">${post.data.description}</span>`}</a>`)}</div> </section>`, isEnglish ? "AI Engineering Weekly" : "AI \u5DE5\u7A0B\u5468\u62A5", isEnglish ? "Production changes, real failures, experiments and new XBSTACK assets." : "\u53EA\u53D1\u771F\u6B63\u6539\u53D8\u5DE5\u7A0B\u5224\u65AD\u7684\u53D8\u5316\u3001\u6545\u969C\u3001\u5B9E\u9A8C\u548C\u65B0\u8D44\u4EA7\u3002", renderComponent($$result, "NewsletterForm", NewsletterForm, { "client:visible": true, "compact": true, "lang": isEnglish ? "en" : "zh-CN", "client:component-hydration": "visible", "client:component-path": "@components/common/NewsletterForm.jsx", "client:component-export": "default" }), isEnglish ? "Comments & evidence" : "\u8BC4\u8BBA\u4E0E\u8865\u5145\u8BC1\u636E", renderComponent($$result, "Comment", $$Comment, { "lang": isEnglish ? "en" : "zh-CN" }), !actuallyHideToc && renderTemplate`<section class="xb-article-panel"> <div class="xb-article-panel__title">${isEnglish ? "ON THIS PAGE" : "\u672C\u6587\u76EE\u5F55"}</div> ${renderComponent($$result, "TableOfContents", $$TableOfContents, { "headings": headings, "tocDepth": 3 })} </section>`, isEnglish ? "ARTICLE TOOLS" : "\u6587\u7AE0\u5DE5\u5177", isEnglish ? "Copy link" : "\u590D\u5236\u94FE\u63A5", addAttribute(categoryLink, "href"), isEnglish ? "Topic hub" : "\u8FD4\u56DE\u4E13\u9898 Hub", addAttribute(isEnglish ? "/en/rss.xml" : "/rss.xml", "href"), addAttribute(newsletterHref, "href"), (recommendedPosts || []).length > 0 && renderTemplate`<section class="xb-article-panel"> <div class="xb-article-panel__title">${isEnglish ? "RELATED" : "\u76F8\u5173\u6587\u7AE0"}</div> <div class="xb-article-related">${recommendedPosts.slice(0, 3).map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")}>${post.data.title}</a>`)}</div> </section>`, renderComponent($$result, "BlogNetworkLinks", $$BlogNetworkLinks, { "lang": isEnglish ? "en" : "zh-CN", "className": "xb-article-panel !rounded-xl !shadow-none" }));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/layout/TechLayout.astro", void 0);

export { $$TechLayout as $ };
