import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u5F00\u53D1\u4E2D\u5DE5\u5177\uFF1AUTM Builder\u3001SEO \u68C0\u67E5\u3001\u5185\u5BB9\u5DE5\u4F5C\u6D41\u4E0E XBSTACK Labs";
  const description = "XBSTACK Labs \u6536\u7EB3\u6B63\u5728\u5F00\u53D1\u548C\u9A8C\u8BC1\u4E2D\u7684\u5DE5\u5177\u4EA7\u54C1\uFF0C\u5305\u62EC UTM \u94FE\u63A5\u751F\u6210\u5668\u3001Markdown SEO \u68C0\u67E5\u3001\u6587\u7AE0\u5185\u94FE\u68C0\u67E5\u3001\u56FE\u7247\u8D44\u4EA7\u6821\u9A8C\u3001\u5185\u5BB9\u53D1\u5E03\u5DE5\u4F5C\u6D41\u548C\u72EC\u7ACB\u5F00\u53D1\u4EA7\u54C1\u539F\u578B\u3002\u6210\u719F\u540E\u4F1A\u5347\u7EA7\u5230\u6B63\u5F0F Tools \u9875\u9762\u3002";
  const keywords = "XBSTACK Labs, \u5F00\u53D1\u4E2D\u5DE5\u5177, UTM Builder, SEO \u68C0\u67E5\u5DE5\u5177, Markdown SEO, \u5185\u5BB9\u5DE5\u4F5C\u6D41, \u56FE\u7247\u8D44\u4EA7\u6821\u9A8C, \u5185\u94FE\u68C0\u67E5, \u72EC\u7ACB\u5F00\u53D1\u5DE5\u5177";
  const labItems = [
    { title: "UTM \u94FE\u63A5\u751F\u6210\u5668", status: "\u5DF2\u843D\u5730", desc: "\u7ED9\u4E2D\u6587\u5E73\u53F0\u548C\u5168\u7403\u82F1\u6587\u5E73\u53F0\u7684\u56DE\u7AD9\u94FE\u63A5\u81EA\u52A8\u52A0 utm_source\u3001utm_medium \u548C campaign\uFF0C\u89E3\u51B3\u6D41\u91CF\u6765\u6E90\u8BC6\u522B\u95EE\u9898\u3002", href: "/tools/utm-builder/" },
    { title: "Markdown SEO \u68C0\u67E5", status: "\u89C4\u5212\u4E2D", desc: "\u68C0\u67E5 title\u3001description\u3001FAQ\u3001\u5185\u94FE\u3001\u56FE\u7247\u3001slug \u548C\u5173\u952E\u8BCD\u8986\u76D6\uFF0C\u670D\u52A1 XBSTACK \u5185\u5BB9\u7AD9\u8FD0\u8425\u3002", href: "/ai/xbstack-content-quality-audit-builder-log/" },
    { title: "\u56FE\u7247\u8D44\u4EA7\u6821\u9A8C", status: "\u5DF2\u90E8\u5206\u843D\u5730", desc: "\u9632\u6B62\u6D4B\u8BD5\u56FE\u3001\u4F4E\u8D28\u91CF\u5C01\u9762\u3001\u9519\u8BEF\u683C\u5F0F\u548C\u4E34\u65F6\u6587\u4EF6\u8FDB\u5165\u6B63\u5F0F\u5185\u5BB9\u8D44\u4EA7\u3002", href: "/ai/chatgpt-image-to-astro-cover-bridge/" },
    { title: "\u5185\u5BB9\u53D1\u5E03\u5DE5\u4F5C\u6D41", status: "\u8FED\u4EE3\u4E2D", desc: "\u628A\u6587\u7AE0\u3001\u5C01\u9762\u3001UTM\u3001\u7AD9\u5916\u5206\u53D1\u548C\u6570\u636E\u590D\u76D8\u4E32\u6210\u53EF\u91CD\u590D\u6267\u884C\u7684\u589E\u957F\u6D41\u7A0B\u3002", href: "/ai/n8n-ai-starter-kit/" }
  ];
  const labFaqs = [
    { question: "Labs \u548C\u6B63\u5F0F Tools \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "Labs \u6536\u7EB3\u6B63\u5728\u9A8C\u8BC1\u7684\u5DE5\u5177\u548C\u4EA7\u54C1\u539F\u578B\uFF1B\u5F53\u4E00\u4E2A\u5DE5\u5177\u6709\u6E05\u6670\u4F7F\u7528\u573A\u666F\u3001\u7A33\u5B9A\u9875\u9762\u548C\u957F\u671F\u7EF4\u62A4\u4EF7\u503C\u540E\uFF0C\u518D\u5347\u7EA7\u5230\u6B63\u5F0F Tools\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u4F18\u5148\u505A UTM Builder\uFF1F", answer: "\u56E0\u4E3A XBSTACK \u5FC5\u987B\u5148\u628A\u4E2D\u6587\u5E73\u53F0\u548C\u5168\u7403\u82F1\u6587\u5E73\u53F0\u7684\u56DE\u7AD9\u6765\u6E90\u7EDF\u8BA1\u6253\u51C6\uFF0C\u624D\u80FD\u5224\u65AD\u54EA\u4E9B\u5206\u53D1\u771F\u6B63\u6709\u6548\u3002" },
    { question: "\u8FD9\u4E9B\u5DE5\u5177\u4F1A\u5F00\u6E90\u5417\uFF1F", answer: "\u90E8\u5206\u5DE5\u5177\u672A\u6765\u53EF\u80FD\u6574\u7406\u6210\u53EF\u590D\u7528\u9879\u76EE\u6216 GitHub \u4ED3\u5E93\uFF0C\u4F46\u4F18\u5148\u7EA7\u662F\u5148\u670D\u52A1 XBSTACK \u81EA\u5DF1\u7684\u771F\u5B9E\u8FD0\u8425\u548C\u4EA7\u54C1\u95ED\u73AF\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: labFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/tools/" class="text-sm font-bold text-blue-500">← 产品工具</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Labs / Building in Public</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">开发中工具</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">这里收纳 XBSTACK 正在验证的工具。原则很简单：先解决自己网站和产品运营里的真实问题，再考虑做成公开工具。</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"> ${labItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-8 rounded-[34px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <div class="flex items-center justify-between gap-4 mb-5"> <span class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">LAB ITEM</span> <span class="px-3 py-1 rounded-full bg-blue-500/10 text-[10px] font-black text-blue-500">${item.status}</span> </div> <h2 class="text-2xl font-black text-slate-950 dark:text-white mb-4">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> <div class="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">相关记录 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">关于 XBSTACK Labs</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${labFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/labs/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/labs/index.astro";
const $$url = "/tools/labs/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
