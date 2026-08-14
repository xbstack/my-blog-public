import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$ToolUtilityPage } from '../../chunks/ToolUtilityPage_WJpW4nW8.mjs';
import { U as UtmBatchBuilder } from '../../chunks/UtmBatchBuilder_BO1CZ9Df.mjs';
export { renderers } from '../../renderers.mjs';

const $$UtmBuilder = createComponent(($$result, $$props, $$slots) => {
  const title = "\u6279\u91CF UTM \u5206\u53D1\u94FE\u63A5\u751F\u6210\u5668";
  const description = "\u514D\u8D39\u7684\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668\uFF0C\u4E00\u6B21\u4E3A\u77E5\u4E4E\u3001\u6398\u91D1\u3001GitHub\u3001DEV\u3001Medium\u3001LinkedIn\u3001Reddit \u7B49\u5E73\u53F0\u751F\u6210\u8FFD\u8E2A\u94FE\u63A5\uFF0C\u652F\u6301\u8986\u76D6\u3001\u4FDD\u7559\u3001\u8865\u5168\u6216\u6E05\u9664\u5DF2\u6709 UTM\uFF0C\u5E76\u5BFC\u51FA CSV \u4E0E Markdown\u3002";
  const canonical = "https://www.xbstack.com/tools/utm-builder/";
  const faqs = [
    { q: "\u7F51\u5740\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u5417\uFF1F", a: "\u4E0D\u4F1A\u3002URL \u89E3\u6790\u3001UTM \u53C2\u6570\u5904\u7406\u3001\u590D\u5236\u548C\u5BFC\u51FA\u90FD\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u3002" },
    { q: "\u539F\u94FE\u63A5\u5DF2\u7ECF\u6709 UTM \u600E\u4E48\u529E\uFF1F", a: "\u53EF\u4EE5\u9009\u62E9\u8986\u76D6\u5DF2\u6709\u53C2\u6570\u3001\u4FDD\u7559\u5DF2\u6709\u53C2\u6570\u3001\u53EA\u8865\u7F3A\u5931\u5B57\u6BB5\u6216\u6E05\u9664\u5168\u90E8 UTM\u3002" },
    { q: "\u4E3A\u4EC0\u4E48 Hacker News \u4F7F\u7528\u5E72\u51C0\u94FE\u63A5\uFF1F", a: "\u8BE5\u5E73\u53F0\u66F4\u9002\u5408\u63D0\u4EA4\u539F\u59CB\u6210\u679C\u94FE\u63A5\uFF0C\u56E0\u6B64\u9884\u8BBE\u4F1A\u5220\u9664\u5168\u90E8 UTM \u53C2\u6570\u3002" },
    { q: "\u5BFC\u51FA\u7684 CSV \u548C Markdown \u6709\u4EC0\u4E48\u7528\uFF1F", a: "\u53EF\u4EE5\u76F4\u63A5\u52A0\u5165\u5206\u53D1\u53F0\u8D26\uFF0C\u8BB0\u5F55\u5E73\u53F0\u3001\u53D1\u5E03\u65F6\u95F4\u3001\u6807\u9898\u7248\u672C\u548C\u540E\u7EED\u56DE\u7AD9\u6570\u636E\u3002" }
  ];
  const schema = [{ "@context": "https://schema.org", "@type": "WebApplication", name: "XBSTACK \u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668", url: canonical, applicationCategory: "BusinessApplication", operatingSystem: "Web", description, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }];
  return renderTemplate`${renderComponent($$result, "ToolUtilityPage", $$ToolUtilityPage, { "title": title, "seoTitle": "\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668\uFF1A\u591A\u5E73\u53F0\u5206\u53D1\u4E0E\u5F52\u56E0 | XBSTACK", "description": description, "keywords": "UTM Builder, \u6279\u91CF UTM, utm_source, utm_campaign, \u5185\u5BB9\u5206\u53D1, \u6E20\u9053\u5F52\u56E0", "eyebrow": "Distribution & Attribution Utility", "intro": "\u8F93\u5165\u4E00\u6B21\u539F\u59CB URL\uFF0C\u591A\u9009\u5206\u53D1\u5E73\u53F0\uFF0C\u7EDF\u4E00\u751F\u6210\u3001\u68C0\u67E5\u3001\u590D\u5236\u548C\u5BFC\u51FA\u8FFD\u8E2A\u94FE\u63A5\u3002\u8FD9\u4E2A\u9875\u9762\u4F18\u5148\u5B8C\u6210\u5206\u53D1\u4EFB\u52A1\uFF0C\u589E\u957F\u65B9\u6CD5\u653E\u5230 Growth Lab\u3002", "chips": ["Browser Only", "\u6279\u91CF\u751F\u6210", "CSV \u5BFC\u51FA", "Markdown \u5BFC\u51FA"], "faqs": faqs, "related": [{ title: "\u641C\u7D22\u589E\u957F\u4E0E\u5185\u5BB9\u5B9E\u9A8C\u5BA4", href: "/growth/" }, { title: "UTM \u5206\u53D1\u8FFD\u8E2A\u5B9E\u8DF5", href: "/ai/xbstack-utm-distribution-tracking/" }, { title: "\u5168\u90E8\u5DE5\u5177", href: "/tools/" }], "sideLinks": [{ title: "Newsletter", href: "/newsletter/" }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }], "canonical": canonical, "schemaJsonLd": schema }, { "after-tool": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="mb-12"><div class="xb-divider-title"><div><div class="xb-kicker">使用原则</div><h2 class="xb-h2 mt-2">使用规范</h2></div></div><div class="xb-grid-3"><article class="xb-card"><h3>统一命名</h3><p>平台、媒介、活动名称先固定规范，避免同一渠道出现多种写法。</p></article><article class="xb-card"><h3>保留原始链接</h3><p>原始 URL 是资产，渠道参数只是分发层；需要时可以一键清除。</p></article><article class="xb-card"><h3>回到真实数据</h3><p>UTM 只负责归因标识，最终判断仍需结合 Search Console、GA 和实际转化。</p></article></div></section>`, "tool": ($$result2) => renderTemplate`<div>${renderComponent($$result2, "UtmBatchBuilder", UtmBatchBuilder, { "client:load": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@features/tools/components/UtmBatchBuilder.jsx", "client:component-export": "default" })}</div>` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/utm-builder.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/utm-builder.astro";
const $$url = "/tools/utm-builder/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UtmBuilder,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
