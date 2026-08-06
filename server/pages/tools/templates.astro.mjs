import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { T as TemplateLibrary } from '../../chunks/TemplateLibrary_PvRwbmOS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Templates = createComponent(($$result, $$props, $$slots) => {
  const title = "AI \u5F00\u53D1\u6A21\u677F\u5E93\uFF1AMCP\u3001n8n\u3001LangGraph\u3001\u8D22\u62A5 Schema \u4E0E\u5185\u5BB9\u8FD0\u8425\u6A21\u677F";
  const description = "\u514D\u8D39\u4E0B\u8F7D\u548C\u590D\u5236 6 \u4E2A XBSTACK \u5B9E\u6218\u6A21\u677F\uFF1AMCP Server \u4E0A\u7EBF\u68C0\u67E5\u3001n8n \u9519\u8BEF\u91CD\u8BD5\u5DE5\u4F5C\u6D41\u3001AI \u8D22\u62A5 JSON Schema\u3001\u6587\u7AE0\u53D1\u5E03\u6E05\u5355\u3001\u53CC\u8BED UTM \u53F0\u8D26\u548C LangGraph \u751F\u4EA7\u53D1\u5E03\u6E05\u5355\u3002";
  const keywords = "AI \u5F00\u53D1\u6A21\u677F, MCP \u68C0\u67E5\u6E05\u5355, n8n \u5DE5\u4F5C\u6D41\u6A21\u677F, AI \u8D22\u62A5 JSON Schema, LangGraph \u68C0\u67E5\u6E05\u5355, UTM \u53F0\u8D26, \u5185\u5BB9\u53D1\u5E03\u6E05\u5355, XBSTACK Templates";
  const canonical = "https://www.xbstack.com/tools/templates/";
  const faqs = [
    { q: "\u8FD9\u4E9B\u6A21\u677F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7\u5417\uFF1F", a: "\u4E0D\u80FD\u76F4\u63A5\u4FDD\u8BC1\u3002\u6A21\u677F\u7528\u4E8E\u51CF\u5C11\u91CD\u590D\u642D\u5EFA\uFF0C\u4F7F\u7528\u524D\u5FC5\u987B\u6838\u5BF9\u7248\u672C\u3001\u51ED\u636E\u3001\u6743\u9650\u3001\u9519\u8BEF\u8DEF\u5F84\u548C\u76EE\u6807\u5E73\u53F0\u517C\u5BB9\u6027\u3002" },
    { q: "\u6A21\u677F\u53EF\u4EE5\u514D\u8D39\u4E0B\u8F7D\u548C\u590D\u5236\u5417\uFF1F", a: "\u53EF\u4EE5\u3002\u5F53\u524D 6 \u4E2A\u8D44\u4EA7\u90FD\u652F\u6301\u5728\u7EBF\u9884\u89C8\u3001\u4E00\u952E\u590D\u5236\u548C\u539F\u6587\u4EF6\u4E0B\u8F7D\uFF0C\u4E0D\u8981\u6C42\u6CE8\u518C\u3002" },
    { q: "n8n JSON \u5BFC\u5165\u540E\u4E00\u5B9A\u80FD\u8FD0\u884C\u5417\uFF1F", a: "\u4E0D\u4E00\u5B9A\u3002\u4F60\u5FC5\u987B\u66FF\u6362\u793A\u4F8B\u5730\u5740\u3001\u914D\u7F6E\u51ED\u636E\uFF0C\u5E76\u6839\u636E\u5F53\u524D n8n \u7248\u672C\u6838\u5BF9\u8282\u70B9\u53C2\u6570\u548C\u9519\u8BEF\u8F93\u51FA\u3002" },
    { q: "\u4E3A\u4EC0\u4E48\u6A21\u677F\u8FD8\u8981\u5173\u8054\u6587\u7AE0\uFF1F", a: "\u6A21\u677F\u63D0\u4F9B\u53EF\u590D\u7528\u7ED3\u6784\uFF0C\u6587\u7AE0\u89E3\u91CA\u8BBE\u8BA1\u539F\u56E0\u3001\u8FB9\u754C\u3001\u5931\u8D25\u6A21\u5F0F\u548C\u751F\u4EA7\u6CBB\u7406\uFF0C\u4E8C\u8005\u4E0D\u80FD\u4E92\u76F8\u66FF\u4EE3\u3002" }
  ];
  const schema = [{ "@context": "https://schema.org", "@type": "CollectionPage", name: title, url: canonical, description, inLanguage: "zh-CN" }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "schemaJsonLd": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-28"> <section class="mx-auto max-w-6xl px-6"> <a href="/tools/" class="text-sm font-black text-blue-500">← 返回 Tools</a> <header class="py-14"> <p class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Reusable Assets / Versioned Files</p> <h1 class="mt-6 text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">AI 开发与运营模板库</h1> <p class="mt-7 max-w-4xl text-lg font-semibold leading-9 text-slate-600 dark:text-slate-300">不是专题导航，而是 6 个已经落地的 Markdown、JSON、JSON Schema 和 CSV 文件。每个资产都可以预览、复制、下载并回到对应技术文章理解设计边界。</p> <div class="mt-8 flex flex-wrap gap-3 text-xs font-black"><span class="rounded-full bg-blue-500/10 px-4 py-2 text-blue-500">6 个真实资产</span><span class="rounded-full bg-slate-100 px-4 py-2 text-slate-600 dark:bg-white/10 dark:text-slate-300">无需注册</span><span class="rounded-full bg-slate-100 px-4 py-2 text-slate-600 dark:bg-white/10 dark:text-slate-300">版本化下载</span></div> </header> ${renderComponent($$result2, "TemplateLibrary", TemplateLibrary, { "client:load": true, "lang": "zh-CN", "client:component-hydration": "load", "client:component-path": "@features/tools/components/TemplateLibrary.jsx", "client:component-export": "default" })} <section class="mt-16 rounded-[40px] border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]"> <h2 class="text-3xl font-black text-slate-950 dark:text-white">常见问题</h2> <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">${faqs.map((item) => renderTemplate`<article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/40"><h3 class="font-black text-slate-950 dark:text-white">${item.q}</h3><p class="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">${item.a}</p></article>`)}</div> </section> </section> </main> ` })}`;
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
