import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
import { U as UtmBatchBuilder } from '../../chunks/UtmBatchBuilder_BO1CZ9Df.mjs';
export { renderers } from '../../renderers.mjs';

const $$UtmBuilder = createComponent(($$result, $$props, $$slots) => {
  const title = "\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668\uFF1A\u4E00\u6B21\u751F\u6210\u591A\u5E73\u53F0\u5206\u53D1\u94FE\u63A5 - XBSTACK";
  const description = "\u514D\u8D39\u7684\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668\uFF0C\u4E00\u6B21\u4E3A\u77E5\u4E4E\u3001\u6398\u91D1\u3001GitHub\u3001DEV\u3001Medium\u3001LinkedIn\u3001Reddit \u7B49\u5E73\u53F0\u751F\u6210\u8FFD\u8E2A\u94FE\u63A5\uFF0C\u652F\u6301\u8986\u76D6\u3001\u4FDD\u7559\u3001\u8865\u5168\u6216\u6E05\u9664\u5DF2\u6709 UTM\uFF0C\u5E76\u5BFC\u51FA CSV \u4E0E Markdown\u3002";
  const keywords = "\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668, UTM Builder, utm_source, utm_medium, utm_campaign, \u5185\u5BB9\u5206\u53D1\u94FE\u63A5, UTM CSV, UTM Markdown, XBSTACK";
  const canonical = "https://www.xbstack.com/tools/utm-builder/";
  const faqs = [
    { q: "\u7F51\u5740\u4F1A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u5417\uFF1F", a: "\u4E0D\u4F1A\u3002URL \u89E3\u6790\u3001UTM \u53C2\u6570\u5904\u7406\u3001\u590D\u5236\u548C\u5BFC\u51FA\u90FD\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u3002" },
    { q: "\u539F\u94FE\u63A5\u5DF2\u7ECF\u6709 UTM \u600E\u4E48\u529E\uFF1F", a: "\u53EF\u4EE5\u9009\u62E9\u8986\u76D6\u5DF2\u6709\u53C2\u6570\u3001\u4FDD\u7559\u5DF2\u6709\u53C2\u6570\u3001\u53EA\u8865\u7F3A\u5931\u5B57\u6BB5\u6216\u6E05\u9664\u5168\u90E8 UTM\u3002" },
    { q: "\u4E3A\u4EC0\u4E48 Hacker News \u4F7F\u7528\u5E72\u51C0\u94FE\u63A5\uFF1F", a: "\u8BE5\u5E73\u53F0\u66F4\u9002\u5408\u63D0\u4EA4\u539F\u59CB\u6210\u679C\u94FE\u63A5\uFF0C\u56E0\u6B64\u9884\u8BBE\u4F1A\u5220\u9664\u5168\u90E8 UTM \u53C2\u6570\u3002" },
    { q: "\u5BFC\u51FA\u7684 CSV \u548C Markdown \u6709\u4EC0\u4E48\u7528\uFF1F", a: "\u53EF\u4EE5\u76F4\u63A5\u52A0\u5165\u5206\u53D1\u53F0\u8D26\uFF0C\u8BB0\u5F55\u5E73\u53F0\u3001\u53D1\u5E03\u65F6\u95F4\u3001\u6807\u9898\u7248\u672C\u548C\u540E\u7EED\u56DE\u7AD9\u6570\u636E\u3002" }
  ];
  const schema = [{ "@context": "https://schema.org", "@type": "WebApplication", name: "XBSTACK \u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668", url: canonical, applicationCategory: "BusinessApplication", operatingSystem: "Web", description, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "schemaJsonLd": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-28"> <section class="mx-auto max-w-6xl px-6"> <a href="/tools/" class="text-sm font-black text-blue-500">← 返回 Tools</a> <header class="py-14"> <p class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Batch UTM Builder / Browser Only</p> <h1 class="mt-6 text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">批量 UTM 链接生成器</h1> <p class="mt-7 max-w-4xl text-lg font-semibold leading-9 text-slate-600 dark:text-slate-300">输入一次原始 URL，多选分发平台，统一生成、检查、复制和导出追踪链接。</p> </header> ${renderComponent($$result2, "UtmBatchBuilder", UtmBatchBuilder, { "client:load": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@features/tools/components/UtmBatchBuilder.jsx", "client:component-export": "default" })} <section class="mt-16 rounded-[40px] border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]"> <h2 class="text-3xl font-black text-slate-950 dark:text-white">常见问题</h2> <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">${faqs.map((item) => renderTemplate`<article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/40"><h3 class="font-black text-slate-950 dark:text-white">${item.q}</h3><p class="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">${item.a}</p></article>`)}</div> </section> </section> </main> ` })}`;
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
