import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { N as NewsletterForm } from '../chunks/NewsletterForm_DuXcv_Zx.mjs';
import { g as getCollection } from '../chunks/_astro_content_jbBoyPXF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const newsletters = (await getCollection("newsletter", ({ data }) => !data.draft && data.lang !== "en")).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const issues = newsletters.map((entry) => ({
    title: entry.data.title,
    href: entry.data.route || `/newsletter/${entry.id.replace(/\.(md|mdx)$/, "")}/`,
    desc: entry.data.description || "",
    date: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const latest = issues[0];
  const description = "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5\u4E0E\u7814\u7A76\u66F4\u65B0\uFF0C\u6BCF\u671F\u805A\u7126\u771F\u6B63\u6539\u53D8\u5DE5\u7A0B\u5224\u65AD\u7684\u53D8\u5316\u3001\u771F\u5B9E\u6545\u969C\u3001\u53EF\u590D\u73B0\u5B9E\u9A8C\u3001\u503C\u5F97\u5C1D\u8BD5\u7684\u5DE5\u5177\u4E0E XBSTACK \u65B0\u8D44\u4EA7\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI \u5DE5\u7A0B\u5468\u62A5\u4E0E\u7814\u7A76\u66F4\u65B0 | XBSTACK Newsletter", "description": description, "keywords": "AI \u5DE5\u7A0B\u5468\u62A5, MCP, LangGraph, AI Agent, n8n, Newsletter", "lang": "zh-CN" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-12 md:py-16"> <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:items-end"> <div class="max-w-[820px]"><h1 class="xb-title">AI 工程周报与研究更新</h1><p class="xb-lead">不是泛 AI 新闻摘要。每期只回答五个问题：什么变了、什么坏了、我测了什么、什么值得试，以及 XBSTACK 最近构建了什么。</p></div> <div class="xb-surface p-5"><div class="mb-3 text-[12px] font-bold text-[var(--xb-ink)]">订阅 Weekly</div><p class="mb-4 text-[10px] leading-5 text-[var(--xb-muted)]">不为周更凑数，可随时退订。</p>${renderComponent($$result2, "NewsletterForm", NewsletterForm, { "client:load": true, "compact": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@components/common/NewsletterForm.jsx", "client:component-export": "default" })}</div> </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <div class="xb-hub-layout"> <main class="min-w-0"> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">内容结构</h2></div></div><div class="xb-grid-4"><div class="xb-card"><h3>Changed</h3><p>真正改变工程判断的变化。</p></div><div class="xb-card"><h3>Broke</h3><p>兼容性、真实故障和踩坑。</p></div><div class="xb-card"><h3>Tested</h3><p>XBSTACK 做过的实验与复现。</p></div><div class="xb-card"><h3>Worth trying</h3><p>值得投入时间的新工具或方法。</p></div></div></section> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">最新一期</h2></div></div>${latest ? renderTemplate`<a${addAttribute(latest.href, "href")} class="block border-y border-[var(--xb-line)] py-6"><div class="xb-meta">${latest.date}</div><h3 class="mt-2 text-[20px] font-bold text-[var(--xb-ink)]">${latest.title}</h3>${latest.desc && renderTemplate`<p class="mt-2 text-[12px] leading-6 text-[var(--xb-muted)]">${latest.desc}</p>`}<div class="mt-4 text-[11px] font-bold text-blue-600 dark:text-blue-400">阅读本期 →</div></a>` : renderTemplate`<div class="border-y border-dashed border-[var(--xb-line-strong)] py-10 text-[12px] text-[var(--xb-muted)]">当前尚未绑定已发布期刊。</div>`}</section> <section><div class="xb-divider-title"><div><h2 class="xb-h2">历史期刊</h2></div></div><div class="xb-list">${issues.map((issue) => renderTemplate`<a${addAttribute(issue.href, "href")} class="xb-list-row"><div class="xb-list-row__type">ISSUE</div><div><h3>${issue.title}</h3>${issue.desc && renderTemplate`<p>${issue.desc}</p>`}</div><div class="xb-list-row__meta">${issue.date}</div><div class="xb-list-row__arrow">→</div></a>`)}</div></section> </main> <aside class="xb-side-stack"><section class="xb-side-card"><h3>相关资源</h3><a href="/ai/"><span>AI 工程知识体系</span><span>→</span></a><a href="/archive/"><span>全部归档</span><span>→</span></a><a href="/rss.xml"><span>RSS</span><span>→</span></a></section><section class="xb-side-card"><h3>专题导航</h3><a href="/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/ai/workflow/"><span>Workflow</span><span>→</span></a></section></aside> </div> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/newsletter/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/newsletter/index.astro";
const $$url = "/newsletter/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
