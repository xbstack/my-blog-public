import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { S as Search } from '../chunks/Search_DPVta9_Q.mjs';
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(($$result, $$props, $$slots) => {
  const title = "\u641C\u7D22 XBSTACK\uFF1AAI \u5DE5\u7A0B\u3001\u5DE5\u5177\u3001\u957F\u671F\u7814\u7A76\u4E0E\u6237\u5916\u5185\u5BB9";
  const description = "\u641C\u7D22 XBSTACK \u7684 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001\u5F00\u53D1\u8005\u5DE5\u5177\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u8D35\u5DDE\u5F92\u6B65\u3001\u6237\u5916\u88C5\u5907\u548C\u4EA7\u54C1\u5185\u5BB9\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": "XBSTACK Search, MCP, LangGraph, AI Agent, n8n, \u5DE5\u5177\u641C\u7D22, \u8D35\u5DDE\u5F92\u6B65", "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)] py-10 md:py-14"> <div class="xb-shell"> <div class="max-w-[820px]"> <h1 class="text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-.055em] text-[var(--xb-ink)]">搜索 XBSTACK</h1> <p class="mt-4 text-[14px] leading-7 text-[var(--xb-muted)]">按问题、报错、工具、技术主题、文章标题或真实地点检索。搜索页只做一件事：尽快把你带到正确答案或正确 Hub。</p> </div> </div> </section> <div class="xb-shell py-9 md:py-11"> <div class="grid grid-cols-1 gap-8 xl:grid-cols-[190px_minmax(0,1fr)_220px]"> <aside class="hidden xl:block"> <div class="xb-side-stack"> <section class="xb-side-card"><h3>内容范围</h3><a href="/ai/"><span>AI 工程</span><span>→</span></a><a href="/tools/"><span>产品与工具</span><span>→</span></a><a href="/horizon/"><span>Horizon</span><span>→</span></a><a href="/life/"><span>Lens</span><span>→</span></a></section> <section class="xb-side-card"><h3>专题导航</h3><a href="/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/ai/workflow/"><span>Workflow</span><span>→</span></a></section> </div> </aside> <main class="min-w-0"> ${renderComponent($$result2, "SearchPage", Search, { "client:load": true, "isEmbedded": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@components/search/Search", "client:component-export": "default" })} </main> <aside class="hidden xl:block"> <div class="xb-side-stack"> <section class="xb-side-card"><h3>搜索建议</h3><p class="text-[11px] leading-6 text-[var(--xb-muted)]">优先使用具体报错、框架名或关键对象，例如 <b>MCP -32700</b>、<b>thread_id</b>、<b>n8n Queue</b>。</p></section> <section class="xb-side-card"><h3>没有找到？</h3><a href="/community/"><span>提交一个问题</span><span>→</span></a><a href="/archive/"><span>浏览全部归档</span><span>→</span></a><a href="/contact/"><span>反馈搜索问题</span><span>→</span></a></section> </div> </aside> </div> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/search.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/search.astro";
const $$url = "/search/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
