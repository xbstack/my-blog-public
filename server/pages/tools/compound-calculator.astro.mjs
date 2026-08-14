import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$ToolUtilityPage } from '../../chunks/ToolUtilityPage_WJpW4nW8.mjs';
export { renderers } from '../../renderers.mjs';

const $$CompoundCalculator = createComponent(($$result, $$props, $$slots) => {
  const title = "\u590D\u5229\u3001\u5B9A\u6295\u4E0E FIRE \u5047\u8BBE\u8BA1\u7B97\u5668";
  const description = "XBSTACK \u590D\u5229\u8BA1\u7B97\u5668\u7528\u4E8E\u6BD4\u8F83\u672C\u91D1\u3001\u5B9A\u6295\u3001\u5E74\u5316\u5047\u8BBE\u3001\u901A\u80C0\u3001\u65F6\u95F4\u548C\u56DE\u64A4\u5BF9\u957F\u671F\u8D44\u4EA7\u76EE\u6807\u7684\u5F71\u54CD\u3002\u5B83\u662F\u6570\u5B66\u5047\u8BBE\u9A8C\u8BC1\u5668\uFF0C\u4E0D\u9884\u6D4B\u6536\u76CA\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  const faqItems = [
    { question: "\u590D\u5229\u8BA1\u7B97\u5668\u80FD\u9884\u6D4B\u672A\u6765\u6536\u76CA\u5417\uFF1F", answer: "\u4E0D\u80FD\u3002\u5B83\u53EA\u80FD\u6839\u636E\u8F93\u5165\u53C2\u6570\u505A\u6570\u5B66\u63A8\u6F14\uFF0C\u4E0D\u80FD\u9884\u6D4B\u5E02\u573A\u6216\u4FDD\u8BC1\u6536\u76CA\u3002" },
    { question: "\u5E74\u5316\u6536\u76CA\u7387\u5E94\u8BE5\u600E\u4E48\u586B\uFF1F", answer: "\u628A\u5E74\u5316\u6536\u76CA\u7387\u5F53\u4F5C\u5047\u8BBE\u53C2\u6570\uFF0C\u81F3\u5C11\u6D4B\u8BD5\u4FDD\u5B88\u3001\u4E2D\u6027\u548C\u4E50\u89C2\u60C5\u666F\uFF0C\u4E0D\u5E94\u628A\u5B83\u5F53\u4F5C\u6536\u76CA\u627F\u8BFA\u3002" },
    { question: "\u5B9A\u6295\u548C\u4E00\u6B21\u6027\u6295\u5165\u600E\u4E48\u6BD4\u8F83\uFF1F", answer: "\u6BD4\u8F83\u4E0D\u540C\u73B0\u91D1\u6D41\u8DEF\u5F84\u3001\u6295\u5165\u65F6\u70B9\u548C\u6301\u6709\u65F6\u95F4\uFF0C\u800C\u4E0D\u662F\u53EA\u6BD4\u8F83\u5355\u4E00\u7EC8\u503C\u3002" },
    { question: "\u4E3A\u4EC0\u4E48 FIRE \u8981\u8003\u8651\u901A\u80C0\uFF1F", answer: "\u957F\u671F\u76EE\u6807\u770B\u7684\u662F\u8D2D\u4E70\u529B\u3002\u901A\u80C0\u4F1A\u8BA9\u76F8\u540C\u8D26\u9762\u91D1\u989D\u5728\u672A\u6765\u5BF9\u5E94\u4E0D\u540C\u73B0\u5B9E\u652F\u51FA\u80FD\u529B\u3002" },
    { question: "\u8FD9\u4E2A\u5DE5\u5177\u662F\u5426\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\uFF1F", answer: "\u4E0D\u6784\u6210\u3002\u5DE5\u5177\u53EA\u7528\u4E8E\u5047\u8BBE\u9A8C\u8BC1\u548C\u4E2A\u4EBA\u590D\u76D8\u3002" }
  ];
  const schemaJsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "WebApplication", name: "XBSTACK Compound Interest Calculator", operatingSystem: "All", applicationCategory: "FinanceApplication", offers: { "@type": "Offer", price: "0" }, description }, { "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }] };
  return renderTemplate`${renderComponent($$result, "ToolUtilityPage", $$ToolUtilityPage, { "title": title, "seoTitle": "\u590D\u5229\u8BA1\u7B97\u5668\uFF1A\u672C\u91D1\u3001\u5B9A\u6295\u3001\u901A\u80C0\u3001\u56DE\u64A4\u4E0E FIRE \u5047\u8BBE\u6D4B\u7B97 | XBSTACK", "description": description, "keywords": "\u590D\u5229\u8BA1\u7B97\u5668, \u5B9A\u6295\u590D\u5229\u8BA1\u7B97\u5668, FIRE \u8BA1\u7B97\u5668, Compound Interest Calculator, \u901A\u80C0, \u56DE\u64A4", "eyebrow": "Compound Interest & FIRE Calculator", "intro": "\u5148\u8F93\u5165\u672C\u91D1\u3001\u73B0\u91D1\u6D41\u3001\u65F6\u95F4\u548C\u6536\u76CA\u5047\u8BBE\uFF0C\u89C2\u5BDF\u4E0D\u540C\u53C2\u6570\u600E\u6837\u6539\u53D8\u957F\u671F\u7ED3\u679C\u3002\u5DE5\u5177\u91CD\u70B9\u662F\u538B\u529B\u6D4B\u8BD5\uFF0C\u800C\u4E0D\u662F\u751F\u6210\u4E00\u4E2A\u770B\u8D77\u6765\u6F02\u4EAE\u7684\u7EC8\u503C\u3002", "chips": ["\u6D4F\u89C8\u5668\u8BA1\u7B97", "\u65E0\u9700\u6CE8\u518C", "\u5047\u8BBE\u9A8C\u8BC1", "\u975E\u6295\u8D44\u5EFA\u8BAE"], "faqs": faqItems, "related": [{ title: "DCA \u51B3\u7B56\u4E0E\u590D\u76D8", href: "/horizon/" }, { title: "AI Finance", href: "/tools/ai-finance/" }, { title: "\u590D\u5229\u4E13\u9898", href: "/compound-interest/" }], "sideLinks": [{ title: "Horizon", href: "/horizon/" }, { title: "\u514D\u8D23\u58F0\u660E", href: "/disclosure/" }], "schemaJsonLd": schemaJsonLd }, { "after-tool": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="mb-12"> <div class="xb-divider-title"><div><div class="xb-kicker">怎么使用</div><h2 class="xb-h2 mt-2">使用说明</h2></div></div> <div class="xb-grid-3"><article class="xb-card"><h3>一次性投入</h3><p>比较不同起始本金与持有年限的长期差异。</p></article><article class="xb-card"><h3>每月定投</h3><p>观察持续现金流对资产曲线和目标时间的影响。</p></article><article class="xb-card"><h3>压力测试</h3><p>降低收益、提高通胀或加入现金流中断，再看目标是否仍成立。</p></article></div> </section>`, "tool": ($$result2) => renderTemplate`<div>${renderComponent($$result2, "CompoundCalculatorClient", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/tools/CompoundCalculator.jsx", "client:component-export": "default" })}</div>` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/compound-calculator.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/compound-calculator.astro";
const $$url = "/tools/compound-calculator/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CompoundCalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
