import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Lb3doMJi.mjs';
import { S as Search } from '../../chunks/Search_DPVta9_Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Search = createComponent(($$result, $$props, $$slots) => {
  const title = "Search XBSTACK: AI Engineering, Tools, Research and Field Notes";
  const description = "Search reviewed XBSTACK English content across AI Agent, MCP, LangGraph, n8n, developer tools, investing, reading, outdoor and product topics.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": "XBSTACK Search, MCP, LangGraph, AI Agent, n8n, developer tools", "noindex": true, "lang": "en" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)] py-10 md:py-14"> <div class="xb-shell"> <div class="max-w-[820px]"> <h1 class="text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-.055em] text-[var(--xb-ink)]">Search XBSTACK</h1> <p class="mt-4 text-[14px] leading-7 text-[var(--xb-muted)]">Search by problem, error, tool, technical topic, article title or real-world place. The goal is to get you to the right answer or the right hub quickly.</p> </div> </div> </section> <div class="xb-shell py-9 md:py-11"> <div class="grid grid-cols-1 gap-8 xl:grid-cols-[190px_minmax(0,1fr)_220px]"> <aside class="hidden xl:block"> <div class="xb-side-stack"> <section class="xb-side-card"><h3>Content</h3><a href="/en/ai/"><span>AI Engineering</span><span>→</span></a><a href="/en/tools/"><span>Products & Tools</span><span>→</span></a><a href="/en/horizon/"><span>Horizon</span><span>→</span></a><a href="/en/life/"><span>Lens</span><span>→</span></a></section> <section class="xb-side-card"><h3>Topics</h3><a href="/en/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/en/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/en/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/en/ai/workflow/"><span>Workflow</span><span>→</span></a></section> </div> </aside> <main class="min-w-0"> ${renderComponent($$result2, "SearchPage", Search, { "client:load": true, "isEmbedded": true, "lang": "en", "client:component-hydration": "load", "client:component-path": "@components/search/Search", "client:component-export": "default" })} </main> <aside class="hidden xl:block"> <div class="xb-side-stack"> <section class="xb-side-card"><h3>Search tips</h3><p class="text-[11px] leading-6 text-[var(--xb-muted)]">Use a concrete error, framework name or key object, for example <b>MCP -32700</b>, <b>thread_id</b> or <b>n8n Queue</b>.</p></section> <section class="xb-side-card"><h3>Nothing found?</h3><a href="/en/ai/"><span>Browse AI Engineering</span><span>→</span></a><a href="/en/archive/"><span>Browse the archive</span><span>→</span></a><a href="/en/contact/"><span>Report a search issue</span><span>→</span></a></section> </div> </aside> </div> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/en/search.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/en/search.astro";
const $$url = "/en/search/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
