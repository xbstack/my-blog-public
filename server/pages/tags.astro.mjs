import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const collections = ["ai", "horizon", "lens", "notes", "newsletter"];
  let all = [];
  for (const col of collections) {
    try {
      all = [...all, ...await getCollection(col, ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex")];
    } catch {
    }
  }
  const counts = /* @__PURE__ */ new Map();
  for (const entry of all) {
    for (const tag of entry.data.tags || []) {
      const key = String(tag).trim();
      if (key) counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  const tags = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u6807\u7B7E\u7D22\u5F15 | XBSTACK", "description": "\u6309\u6807\u7B7E\u6D4F\u89C8 XBSTACK \u7684 AI \u5DE5\u7A0B\u3001\u4EA7\u54C1\u5DE5\u5177\u3001Horizon \u4E0E Lens \u5185\u5BB9\u3002\u6807\u7B7E\u662F\u8F85\u52A9\u7D22\u5F15\uFF0C\u6838\u5FC3\u641C\u7D22\u8DEF\u5F84\u4ECD\u7136\u662F\u7AD9\u5185\u641C\u7D22\u548C\u4E13\u9898\u9875\u3002", "noindex": true, "lang": "zh-CN" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-11 md:py-14"><div class="max-w-[820px]"><h1 class="xb-title">标签索引</h1><p class="xb-lead">标签用于横向浏览内容。如果你已经有具体问题，优先使用站内搜索；如果要系统了解一个领域，进入对应专题页。</p><div class="xb-chip-row mt-5"><a class="xb-chip" href="/search/">站内搜索</a><a class="xb-chip" href="/ai/">AI 工程</a><a class="xb-chip" href="/archive/">内容归档</a></div></div></div></section> <div class="xb-shell py-9 md:py-11"><div class="xb-hub-layout"><main class="min-w-0"><div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">${tags.map(([tag, count]) => renderTemplate`<a${addAttribute(`/tags/${encodeURIComponent(tag)}/`, "href")} class="flex items-center justify-between rounded-lg border border-[var(--xb-line)] bg-[var(--xb-surface)] px-3 py-2.5 text-[11px] text-[var(--xb-text)] hover:border-blue-400 hover:text-blue-600"><span class="truncate">${tag}</span><span class="ml-2 text-[9px] text-[var(--xb-faint)]">${count}</span></a>`)}</div></main><aside class="xb-side-stack"><section class="xb-side-card"><h3>专题导航</h3><a href="/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/ai/workflow/"><span>Workflow</span><span>→</span></a></section></aside></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tags/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tags/index.astro";
const $$url = "/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
