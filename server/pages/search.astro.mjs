import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(($$result, $$props, $$slots) => {
  const title = "Search XBSTACK\uFF1A\u641C\u7D22 AI Agent\u3001MCP\u3001n8n\u3001\u5DE5\u5177\u3001\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u6237\u5916\u5185\u5BB9";
  const description = "\u5728 XBSTACK \u641C\u7D22 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001Workflow Automation\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001AI \u8D22\u62A5\u52A9\u624B\u3001Lunest\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u8D35\u5DDE\u5F92\u6B65\u3001\u6237\u5916\u88C5\u5907\u548C\u6444\u5F71\u5185\u5BB9\u3002\u5E2E\u52A9\u60A8\u5FEB\u901F\u5B9A\u4F4D\u5C0F\u767D\u7684\u6240\u6709\u6570\u5B57\u8D44\u4EA7\u3002";
  const keywords = "XBSTACK Search, \u641C\u7D22 XBSTACK, AI Agent \u641C\u7D22, MCP \u641C\u7D22, n8n \u641C\u7D22, LangGraph \u641C\u7D22, \u590D\u5229\u8BA1\u7B97\u5668, AI \u8D22\u62A5\u52A9\u624B, \u8D35\u5DDE\u5F92\u6B65, \u9605\u8BFB\u7CFB\u7EDF, \u6237\u5916\u88C5\u5907";
  const geoConfig = {
    geo_summary: "XBSTACK Search \u662F\u7AD9\u5185\u641C\u7D22\u548C\u5185\u5BB9\u5BFC\u822A\u5165\u53E3\uFF0C\u5E2E\u52A9\u7528\u6237\u641C\u7D22 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001Workflow Automation\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001AI \u8D22\u62A5\u52A9\u624B\u3001Lunest\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u8D35\u5DDE\u5F92\u6B65\u3001\u6237\u5916\u88C5\u5907\u548C\u6444\u5F71\u5185\u5BB9\u3002Search \u9875\u9762\u5E94\u540C\u65F6\u63D0\u4F9B\u641C\u7D22\u6846\u3001\u70ED\u95E8\u5173\u952E\u8BCD\u3001\u4E3B\u9898\u5BFC\u822A\u3001\u7A7A\u7ED3\u679C\u63A8\u8350\u548C\u680F\u76EE\u5165\u53E3\u3002",
    geo_questions: [
      "How do I search XBSTACK?",
      "Where can I find AI Agent articles on XBSTACK?",
      "How do I find MCP and n8n content on XBSTACK?",
      "Where are XBSTACK tools listed?",
      "How can I find investing, reading and outdoor content on XBSTACK?",
      "What should I do if XBSTACK search has no results?"
    ],
    geo_entities: [
      "XBSTACK",
      "XBSTACK Search",
      "AI Agent",
      "MCP",
      "LangGraph",
      "n8n",
      "Workflow Automation",
      "Compound Calculator",
      "AI Finance Assistant",
      "Lunest",
      "XBSTACK Horizon",
      "XBSTACK Lens",
      "Reading",
      "Hiking"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<div class="fixed inset-0 -z-10 pointer-events-none"> <div class="absolute inset-0 bg-slate-50 dark:bg-[#020617]"></div> <div class="absolute inset-0 bg-[radial-gradient(#80808033_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div> </div> <main class="relative z-10 text-slate-900 dark:text-white pt-32 pb-24 min-h-screen"> <div class="container mx-auto px-6 max-w-4xl"> <header class="mb-16 text-center animate-fadeUp"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-500 text-[10px] font-black border border-orange-500/20 mb-8 uppercase tracking-[0.3em]">
Central Intelligence / 全量检索
</div> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter italic">
Search.
</h1> <div class="flex items-center justify-center gap-4"> <div class="h-px w-8 bg-slate-200 dark:bg-white/10"></div> <p class="text-slate-500 dark:text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px]">在 XBSTACK 的所有维度中探索逻辑</p> <div class="h-px w-8 bg-slate-200 dark:bg-white/10"></div> </div> </header> <div class="not-prose animate-fadeUp" style="animation-delay: 0.2s;">  ${renderComponent($$result2, "SearchPage", null, { "client:only": "react", "isEmbedded": true, "lang": "zh-CN", "client:component-hydration": "only", "client:component-path": "@components/search/Search", "client:component-export": "default" })} </div> </div> </main> ` })}`;
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
