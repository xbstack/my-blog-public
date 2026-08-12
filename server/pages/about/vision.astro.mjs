import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Vision = createComponent(($$result, $$props, $$slots) => {
  const title = `\u7F51\u7AD9\u7406\u5FF5\uFF1AXBSTACK \u4E3A\u4EC0\u4E48\u5B58\u5728 | \u5173\u4E8E\u5C0F\u767D - ${SITE_INFO.SITE_NAME}`;
  const description = "XBSTACK \u662F\u5C0F\u767D\u7684\u4E2A\u4EBA\u54C1\u724C\u7CFB\u7EDF\uFF1A\u4EE5 AI \u5F00\u53D1\u3001\u5168\u6808\u5DE5\u7A0B\u3001\u667A\u80FD\u4F53\u548C NAS \u81EA\u6258\u7BA1\u4E3A\u80FD\u529B\u5E95\u5EA7\uFF0C\u4EE5\u5DE5\u5177\u4EA7\u54C1\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u548C\u6237\u5916\u751F\u6D3B\u6784\u5EFA\u957F\u671F\u8D44\u4EA7\u3002";
  const keywords = "XBSTACK \u7406\u5FF5, \u4E2A\u4EBA\u54C1\u724C\u7AD9, \u72EC\u7ACB\u5F00\u53D1\u8005, AI \u5DE5\u7A0B, NAS \u81EA\u6258\u7BA1, \u957F\u671F\u8D44\u4EA7, \u5C0F\u767D";
  const visionFaqs = [
    { question: "XBSTACK \u4E3A\u4EC0\u4E48\u4E0D\u662F\u666E\u901A\u535A\u5BA2\uFF1F", answer: "\u56E0\u4E3A\u5B83\u4E0D\u662F\u6309\u65F6\u95F4\u8BB0\u5F55\u788E\u7247\uFF0C\u800C\u662F\u56F4\u7ED5 AI \u5DE5\u7A0B\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u6548\u7387\u7CFB\u7EDF\u3001\u957F\u671F\u8D44\u4EA7\u548C\u771F\u5B9E\u751F\u6D3B\u8F93\u5165\u6784\u5EFA\u4E2A\u4EBA\u8D44\u4EA7\u7CFB\u7EDF\u3002" },
    { question: "\u7F51\u7AD9\u7406\u5FF5\u548C\u5185\u5BB9\u8FD0\u8425\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u7406\u5FF5\u51B3\u5B9A\u9009\u9898\u8FB9\u754C\uFF1A\u4E0D\u505A\u6CDB AI \u5185\u5BB9\u519C\u573A\uFF0C\u4E0D\u505A\u8350\u80A1\uFF0C\u4E0D\u7F16\u9020\u7ECF\u5386\uFF0C\u4F18\u5148\u5199\u771F\u5B9E\u5DE5\u7A0B\u73B0\u573A\u548C\u957F\u671F\u590D\u76D8\u3002" },
    { question: "Build Assets. See Further \u662F\u4EC0\u4E48\u610F\u601D\uFF1F", answer: "\u5148\u5728\u5E95\u5C42\u5806\u53EF\u590D\u7528\u8D44\u4EA7\uFF0C\u5305\u62EC\u80FD\u529B\u3001\u5DE5\u5177\u3001\u5185\u5BB9\u3001\u6570\u636E\u548C\u8EAB\u4F53\u72B6\u6001\uFF0C\u518D\u7528\u66F4\u9AD8\u89C6\u89D2\u770B\u4E16\u754C\u3002" }
  ];
  const sections = [
    {
      eyebrow: "01 / Identity",
      title: "\u8FD9\u662F\u4E2A\u4EBA IP \u7AD9\uFF0C\u4E0D\u662F\u516C\u53F8\u5B98\u7F51\uFF0C\u4E5F\u4E0D\u662F\u8D44\u8BAF\u7AD9",
      body: "XBSTACK \u7684\u4E2D\u5FC3\u4E0D\u662F\u67D0\u4E2A\u6846\u67B6\uFF0C\u800C\u662F\u5C0F\u767D\u8FD9\u4E2A\u4EBA\uFF1A\u4E00\u4E2A\u5728\u5317\u4EAC\u5B8C\u6210\u5B66\u4E60\u4E0E\u804C\u4E1A\u8BAD\u7EC3\u3001\u73B0\u5728\u5B9A\u5C45\u8D35\u9633\u7684\u72EC\u7ACB\u5F00\u53D1\u8005\u3002\u8FD9\u91CC\u4F1A\u5199 AI\u3001\u5168\u6808\u3001\u667A\u80FD\u4F53\u3001NAS\u3001\u81EA\u6258\u7BA1\uFF0C\u4E5F\u4F1A\u5199\u6295\u8D44\u3001\u9605\u8BFB\u3001\u6237\u5916\u548C\u751F\u6D3B\uFF0C\u4F46\u5B83\u4EEC\u5FC5\u987B\u5171\u540C\u670D\u52A1\u4E00\u4E2A\u6E05\u6670\u76EE\u6807\uFF1A\u6784\u5EFA\u957F\u671F\u53EF\u590D\u7528\u7684\u4E2A\u4EBA\u8D44\u4EA7\u3002"
    },
    {
      eyebrow: "02 / Engineering",
      title: "\u4E13\u4E1A\u5185\u5BB9\u5FC5\u987B\u56DE\u5230\u5DE5\u7A0B\u73B0\u573A",
      body: "\u6211\u4E0D\u60F3\u628A AI \u5199\u6210\u6982\u5FF5\u5408\u96C6\u3002AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001RAG\u3001\u672C\u5730 AI \u548C\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\uFF0C\u6700\u540E\u90FD\u8981\u56DE\u7B54\u8FD9\u4E9B\u95EE\u9898\uFF1A\u80FD\u4E0D\u80FD\u8DD1\u3001\u80FD\u4E0D\u80FD\u7EF4\u62A4\u3001\u6743\u9650\u662F\u5426\u5B89\u5168\u3001\u5931\u8D25\u540E\u80FD\u5426\u6062\u590D\u3001\u65E5\u5FD7\u80FD\u5426\u8FFD\u8E2A\u3001\u6210\u672C\u662F\u5426\u53EF\u63A7\u3002"
    },
    {
      eyebrow: "03 / Local Stack",
      title: "NAS \u662F\u4E2A\u4EBA\u6570\u5B57\u5E95\u5EA7\uFF0C\u4E0D\u662F\u786C\u4EF6\u7231\u597D\u70AB\u6280",
      body: "\u672C\u5730 NAS \u627F\u63A5\u4E86\u6211\u7684\u5B58\u50A8\u3001\u7B14\u8BB0\u3001\u81EA\u5A92\u4F53\u8FD0\u8425\u3001\u672C\u5730 AI\u3001\u5A31\u4E50\u548C\u90E8\u5206\u81EA\u52A8\u5316\u7CFB\u7EDF\u3002\u5B83\u4EE3\u8868\u4E00\u79CD\u65B9\u6CD5\uFF1A\u628A\u91CD\u8981\u6570\u636E\u3001\u5185\u5BB9\u751F\u4EA7\u3001\u77E5\u8BC6\u5E93\u548C\u5DE5\u5177\u6D41\u5C3D\u91CF\u653E\u56DE\u81EA\u5DF1\u53EF\u63A7\u7684\u57FA\u7840\u8BBE\u65BD\u91CC\u3002"
    },
    {
      eyebrow: "04 / Real Life",
      title: "\u8D35\u9633\u7684\u5C71\u8DEF\u3001\u7FBD\u6BDB\u7403\u573A\u3001\u81EA\u9A7E\u8DEF\u7EBF\u548C\u4E66\u684C\uFF0C\u90FD\u5C5E\u4E8E\u8FD9\u4E2A\u7CFB\u7EDF",
      body: "\u4E00\u4E2A\u957F\u671F\u5199\u4EE3\u7801\u7684\u4EBA\uFF0C\u5982\u679C\u53EA\u6D3B\u5728\u5C4F\u5E55\u91CC\uFF0C\u5224\u65AD\u4F1A\u53D8\u7A84\u3002\u6237\u5916\u5F92\u6B65\u3001\u81EA\u9A7E\u3001\u7FBD\u6BDB\u7403\u548C\u9605\u8BFB\u4E0D\u662F\u201C\u751F\u6D3B\u65B9\u5F0F\u5305\u88C5\u201D\uFF0C\u800C\u662F\u8BA9\u8EAB\u4F53\u3001\u4FE1\u606F\u548C\u5224\u65AD\u4FDD\u6301\u66F4\u65B0\u7684\u8F93\u5165\u7CFB\u7EDF\u3002"
    }
  ];
  const pact = [
    "\u4E0D\u628A AI \u751F\u6210\u5185\u5BB9\u4F2A\u88C5\u6210\u4E2A\u4EBA\u7ECF\u9A8C\u3002",
    "\u4E0D\u4F7F\u7528\u65E0\u6CD5\u6838\u9A8C\u7684\u5938\u5F20\u6570\u5B57\u5305\u88C5\u9879\u76EE\u3002",
    "\u4E0D\u628A\u6295\u8D44\u5185\u5BB9\u5199\u6210\u8350\u80A1\u3001\u558A\u5355\u6216\u6536\u76CA\u627F\u8BFA\u3002",
    "\u4E0D\u4E3A\u4E86\u77ED\u671F\u6D41\u91CF\u727A\u7272 XBSTACK \u7684\u4E3B\u9898\u4E00\u81F4\u6027\u3002",
    "\u6280\u672F\u6587\u7AE0\u8981\u5C3D\u91CF\u8BF4\u660E\u73AF\u5883\u3001\u8FB9\u754C\u3001\u5931\u8D25\u573A\u666F\u548C\u771F\u5B9E\u53D6\u820D\u3002",
    "\u751F\u6D3B\u5185\u5BB9\u8981\u6709\u73B0\u573A\uFF0C\u4E0D\u5199\u6210\u7A7A\u6CDB\u7684\u4EBA\u8BBE\u6807\u7B7E\u3002"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: visionFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <div class="max-w-5xl mx-auto px-6"> <header class="mb-20 max-w-4xl"> <div class="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 mb-8">
Brand Vision
</div> <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.98] mb-8">
XBSTACK 的理念：<br>把一个人的能力、工具和生活搭成长期系统。
</h1> <p class="text-xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">
Build Assets. See Further. 中文说法保留为：在高处看世界，在底层堆资产。
</p> </header> <section class="grid grid-cols-1 gap-6 mb-16"> ${sections.map((item) => renderTemplate`<article class="p-8 rounded-[36px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.32em] text-blue-500 mb-4">${item.eyebrow}</div> <h2 class="text-2xl md:text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-4">${item.title}</h2> <p class="text-base font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.body}</p> </article>`)} </section> <section class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start"> <div data-theme-surface="adaptive-vision" class="p-8 rounded-[36px] bg-blue-50/70 text-slate-950 border border-blue-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 mb-5">Content Pact</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">我和读者之间的隐形契约</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">
个人品牌最怕写成自我包装。XBSTACK 的可信度来自长期一致的作品、真实经历、工程边界和复盘，而不是把自己写得很厉害。
</p> </div> <div class="space-y-4"> ${pact.map((item, index) => renderTemplate`<div class="flex gap-4 items-start p-5 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <span class="shrink-0 mt-1 text-[10px] font-black text-blue-500 font-mono">${String(index + 1).padStart(2, "0")}</span> <p class="text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-300">${item}</p> </div>`)} </div> </section> <section id="faq" class="mt-16 p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">关于 XBSTACK 理念</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${visionFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <div class="mt-16"> <a href="/about/" class="text-blue-500 font-black uppercase tracking-widest text-xs">← 返回关于小白</a> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/vision.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/vision.astro";
const $$url = "/about/vision/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vision,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
