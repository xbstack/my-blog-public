import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$ToolUtilityPage } from '../../chunks/ToolUtilityPage_WJpW4nW8.mjs';
import { T as TemplateLibrary } from '../../chunks/TemplateLibrary_PvRwbmOS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Templates = createComponent(($$result, $$props, $$slots) => {
  const title = "AI \u5DE5\u7A0B\u4E0E\u8FD0\u8425\u6A21\u677F\u5E93";
  const description = "XBSTACK \u53EF\u590D\u7528\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9B MCP Server \u4E0A\u7EBF\u68C0\u67E5\u3001n8n \u9519\u8BEF\u91CD\u8BD5\u5DE5\u4F5C\u6D41\u3001AI \u8D22\u62A5 JSON Schema\u3001\u6587\u7AE0\u53D1\u5E03\u6E05\u5355\u3001\u53CC\u8BED UTM \u53F0\u8D26\u548C LangGraph \u751F\u4EA7\u53D1\u5E03\u6E05\u5355\u3002";
  const canonical = "https://www.xbstack.com/tools/templates/";
  const faqs = [
    { q: "\u8FD9\u4E9B\u6A21\u677F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7\u5417\uFF1F", a: "\u4E0D\u80FD\u76F4\u63A5\u4FDD\u8BC1\u3002\u4F7F\u7528\u524D\u5FC5\u987B\u6838\u5BF9\u7248\u672C\u3001\u51ED\u636E\u3001\u6743\u9650\u3001\u9519\u8BEF\u8DEF\u5F84\u548C\u76EE\u6807\u5E73\u53F0\u517C\u5BB9\u6027\u3002" },
    { q: "\u6A21\u677F\u53EF\u4EE5\u514D\u8D39\u4E0B\u8F7D\u548C\u590D\u5236\u5417\uFF1F", a: "\u53EF\u4EE5\u3002\u5F53\u524D\u8D44\u4EA7\u652F\u6301\u5728\u7EBF\u9884\u89C8\u3001\u590D\u5236\u548C\u539F\u6587\u4EF6\u4E0B\u8F7D\uFF0C\u4E0D\u8981\u6C42\u6CE8\u518C\u3002" },
    { q: "n8n JSON \u5BFC\u5165\u540E\u4E00\u5B9A\u80FD\u8FD0\u884C\u5417\uFF1F", a: "\u4E0D\u4E00\u5B9A\u3002\u9700\u8981\u66FF\u6362\u793A\u4F8B\u5730\u5740\u3001\u914D\u7F6E\u51ED\u636E\uFF0C\u5E76\u6839\u636E\u5F53\u524D n8n \u7248\u672C\u6838\u5BF9\u8282\u70B9\u53C2\u6570\u3002" },
    { q: "\u4E3A\u4EC0\u4E48\u6A21\u677F\u8FD8\u8981\u5173\u8054\u6587\u7AE0\uFF1F", a: "\u6A21\u677F\u8D1F\u8D23\u51CF\u5C11\u91CD\u590D\u642D\u5EFA\uFF0C\u6587\u7AE0\u89E3\u91CA\u8BBE\u8BA1\u539F\u56E0\u3001\u5931\u8D25\u6A21\u5F0F\u548C\u751F\u4EA7\u8FB9\u754C\u3002" }
  ];
  const schema = [{ "@context": "https://schema.org", "@type": "CollectionPage", name: title, url: canonical, description, inLanguage: "zh-CN" }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }];
  return renderTemplate`${renderComponent($$result, "ToolUtilityPage", $$ToolUtilityPage, { "title": title, "seoTitle": "AI \u5DE5\u7A0B\u6A21\u677F\u5E93\uFF1AMCP\u3001n8n\u3001LangGraph \u4E0E\u5185\u5BB9\u8FD0\u8425\u6A21\u677F | XBSTACK", "description": description, "keywords": "AI \u5F00\u53D1\u6A21\u677F, MCP Checklist, n8n \u6A21\u677F, LangGraph Checklist, JSON Schema, UTM \u53F0\u8D26", "eyebrow": "Reusable Engineering Assets", "intro": "\u8FD9\u91CC\u4E0D\u662F\u4E13\u9898\u5BFC\u822A\uFF0C\u800C\u662F\u53EF\u4EE5\u76F4\u63A5\u9884\u89C8\u3001\u590D\u5236\u548C\u4E0B\u8F7D\u7684\u771F\u5B9E\u6587\u4EF6\u3002\u6A21\u677F\u63D0\u4F9B\u7ED3\u6784\uFF0C\u76F8\u5173\u5DE5\u7A0B\u6587\u7AE0\u89E3\u91CA\u4E3A\u4EC0\u4E48\u8FD9\u6837\u8BBE\u8BA1\uFF0C\u4EE5\u53CA\u4EC0\u4E48\u65F6\u5019\u4E0D\u80FD\u76F4\u63A5\u7167\u642C\u3002", "chips": ["\u65E0\u9700\u6CE8\u518C", "\u53EF\u590D\u5236", "\u53EF\u4E0B\u8F7D", "\u7248\u672C\u5316\u8D44\u4EA7"], "faqs": faqs, "related": [{ title: "MCP \u5DE5\u7A0B\u4E13\u9898", href: "/ai/mcp/" }, { title: "Workflow \u81EA\u52A8\u5316", href: "/ai/workflow/" }, { title: "LangGraph \u4E13\u9898", href: "/ai/langgraph/" }], "sideLinks": [{ title: "\u5168\u90E8 Tools", href: "/tools/" }, { title: "AI \u5DE5\u5177\u94FE", href: "/ai/tools-lab/" }], "canonical": canonical, "schemaJsonLd": schema }, { "after-tool": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="mb-12"><div class="xb-divider-title"><div><div class="xb-kicker">模板原则</div><h2 class="xb-h2 mt-2">使用规范</h2></div></div><div class="xb-grid-3"><article class="xb-card"><h3>版本先核对</h3><p>框架、节点和 API 变化会直接影响模板可用性。</p></article><article class="xb-card"><h3>凭据不内置</h3><p>模板只提供结构，不携带真实 Secret、Token 或生产地址。</p></article><article class="xb-card"><h3>失败路径也要复制</h3><p>真正可复用的资产必须包含异常、重试和发布检查，而不只是成功路径。</p></article></div></section>`, "tool": ($$result2) => renderTemplate`<div>${renderComponent($$result2, "TemplateLibrary", TemplateLibrary, { "client:load": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@features/tools/components/TemplateLibrary.jsx", "client:component-export": "default" })}</div>` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/templates.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/templates.astro";
const $$url = "/tools/templates/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Templates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
