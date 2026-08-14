import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  const groups = [
    { title: "XBSTACK", links: [["AI \u5DE5\u7A0B", "/ai/"], ["Tools", "/tools/"], ["Horizon", "/horizon/"], ["Lens", "/life/"], ["About", "/about/"]] },
    { title: "AI \u4E13\u9898", links: [["AI Agent", "/ai/agent/"], ["MCP", "/ai/mcp/"], ["LangGraph", "/ai/langgraph/"], ["Workflow", "/ai/workflow/"], ["AI Tools Lab", "/ai/tools-lab/"]] },
    { title: "\u8D44\u6E90", links: [["\u7AD9\u5185\u641C\u7D22", "/search/"], ["\u5185\u5BB9\u5F52\u6863", "/archive/"], ["Newsletter", "/newsletter/"], ["RSS", "/rss.xml"], ["GitHub", "https://github.com/xbstack"]] }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "XBSTACK \u94FE\u63A5\u4E0E\u7AD9\u70B9\u5BFC\u822A", "description": "XBSTACK \u4E3B\u8981\u9875\u9762\u3001AI \u5DE5\u7A0B\u4E13\u9898\u3001\u5DE5\u5177\u3001\u5F52\u6863\u3001\u8BA2\u9605\u548C\u5916\u90E8\u8D44\u6E90\u7684\u7B80\u6D01\u94FE\u63A5\u7D22\u5F15\u3002", "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[780px]"><h1 class="xb-title">站点导航</h1><p class="xb-lead">如果你已经知道想去哪里，从这里直接进入。新读者更适合从首页搜索或对应 Hub 开始。</p></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-3">${groups.map((group) => renderTemplate`<section class="xb-side-card"><h2 class="mb-4 text-[14px] font-bold text-[var(--xb-ink)]">${group.title}</h2>${group.links.map(([name, href]) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(String(href).startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(String(href).startsWith("http") ? "noopener noreferrer" : void 0, "rel")}><span>${name}</span><span>→</span></a>`)}</section>`)}</div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/links.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/links.astro";
const $$url = "/links/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
