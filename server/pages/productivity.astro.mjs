import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u6548\u7387\u7CFB\u7EDF\uFF1ANAS\u3001\u672C\u5730AI\u3001\u7B14\u8BB0\u8D44\u6599\u3001\u81EA\u52A8\u5316\u7CFB\u7EDF\u4E0E\u5185\u5BB9\u8FD0\u8425 - XBSTACK";
  const description = "XBSTACK \u6548\u7387\u7CFB\u7EDF\u8BB0\u5F55\u5C0F\u767D\u5982\u4F55\u7528 NAS \u79C1\u6709\u4E91\u3001\u672C\u5730 AI\u3001\u7B14\u8BB0\u8D44\u6599\u3001n8n \u81EA\u52A8\u5316\u548C\u5185\u5BB9\u8FD0\u8425\u5DE5\u5177\u642D\u5EFA\u957F\u671F\u5DE5\u4F5C\u5E95\u5EA7\uFF0C\u8986\u76D6\u8D44\u6599\u5907\u4EFD\u3001\u77E5\u8BC6\u5E93\u3001\u811A\u672C\u6D41\u7A0B\u3001\u6570\u636E\u56DE\u6D41\u548C\u53EF\u7EF4\u62A4\u7684\u4E2A\u4EBA\u751F\u4EA7\u7CFB\u7EDF\u3002";
  const keywords = "\u6548\u7387\u7CFB\u7EDF, NAS\u79C1\u6709\u4E91, \u672C\u5730AI, \u7B14\u8BB0\u8D44\u6599, \u81EA\u52A8\u5316\u7CFB\u7EDF, \u5185\u5BB9\u8FD0\u8425, \u81EA\u5A92\u4F53\u5DE5\u4F5C\u6D41, n8n, XBSTACK, \u5C0F\u767D";
  const sections = [
    {
      title: "NAS\u79C1\u6709\u4E91",
      subtitle: "NAS Private Cloud",
      desc: "\u5B58\u50A8\u3001\u5907\u4EFD\u3001Docker\u3001\u8FDC\u7A0B\u8BBF\u95EE\u548C\u4E2A\u4EBA\u6570\u636E\u5E95\u5EA7\u3002NAS \u4E0D\u662F\u786C\u4EF6\u70AB\u6280\uFF0C\u800C\u662F\u957F\u671F\u8D44\u6599\u548C\u670D\u52A1\u7684\u57FA\u7840\u8BBE\u65BD\u3002",
      href: "/productivity/nas/"
    },
    {
      title: "\u672C\u5730AI",
      subtitle: "Local AI",
      desc: "\u672C\u5730\u6A21\u578B\u3001\u77E5\u8BC6\u5E93\u3001RAG \u548C\u79C1\u6709\u6570\u636E\u5904\u7406\uFF0C\u8BA9 AI \u80FD\u8FDB\u5165\u81EA\u5DF1\u7684\u5DE5\u4F5C\u6D41\uFF0C\u800C\u4E0D\u662F\u53EA\u505C\u7559\u5728\u804A\u5929\u7A97\u53E3\u3002",
      href: "/productivity/local-ai/"
    },
    {
      title: "\u7B14\u8BB0\u8D44\u6599",
      subtitle: "Notes and Knowledge Base",
      desc: "\u9605\u8BFB\u3001\u9879\u76EE\u3001\u6295\u8D44\u590D\u76D8\u3001\u7D20\u6750\u548C\u957F\u671F\u77E5\u8BC6\u5E93\u7684\u6574\u7406\u65B9\u6CD5\uFF0C\u8BA9\u8D44\u6599\u53EF\u4EE5\u88AB\u518D\u6B21\u8C03\u7528\u3002",
      href: "/productivity/notes/"
    },
    {
      title: "\u81EA\u52A8\u5316\u7CFB\u7EDF",
      subtitle: "Automation System",
      desc: "\u7528 n8n\u3001\u811A\u672C\u3001Webhook \u548C\u81EA\u6258\u7BA1\u670D\u52A1\u51CF\u5C11\u91CD\u590D\u5DE5\u4F5C\uFF0C\u91CD\u70B9\u5173\u6CE8\u7A33\u5B9A\u3001\u53EF\u7EF4\u62A4\u548C\u53EF\u6062\u590D\u3002",
      href: "/productivity/automation/"
    },
    {
      title: "\u5185\u5BB9\u8FD0\u8425",
      subtitle: "Content Workflow",
      desc: "\u7F51\u7AD9\u3001\u516C\u4F17\u53F7\u3001\u5916\u90E8\u5206\u53D1\u3001\u7D20\u6750\u7BA1\u7406\u548C\u6570\u636E\u56DE\u6D41\uFF0C\u628A\u5185\u5BB9\u751F\u4EA7\u53D8\u6210\u53EF\u590D\u76D8\u7684\u957F\u671F\u6D41\u7A0B\u3002",
      href: "/productivity/content/"
    }
  ];
  const productivityFaqs = [
    { question: "XBSTACK \u6548\u7387\u7CFB\u7EDF\u4E3B\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "\u5B83\u628A NAS\u3001\u672C\u5730 AI\u3001\u7B14\u8BB0\u8D44\u6599\u3001\u81EA\u52A8\u5316\u6D41\u7A0B\u548C\u5185\u5BB9\u8FD0\u8425\u653E\u5728\u4E00\u8D77\uFF0C\u76EE\u6807\u662F\u51CF\u5C11\u91CD\u590D\u52B3\u52A8\uFF0C\u628A\u4E2A\u4EBA\u8D44\u6599\u548C\u5DE5\u4F5C\u6D41\u53D8\u6210\u957F\u671F\u53EF\u7EF4\u62A4\u7CFB\u7EDF\u3002" },
    { question: "\u6548\u7387\u7CFB\u7EDF\u548C AI Hub \u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "AI Hub \u8D1F\u8D23 AI \u5DE5\u7A0B\u65B9\u6CD5\uFF0C\u6548\u7387\u7CFB\u7EDF\u8D1F\u8D23\u628A\u8FD9\u4E9B\u65B9\u6CD5\u63A5\u5165\u771F\u5B9E\u5DE5\u4F5C\u5E95\u5EA7\uFF0C\u4F8B\u5982\u5185\u5BB9\u751F\u4EA7\u3001\u8D44\u6599\u7BA1\u7406\u3001\u81EA\u52A8\u5316\u6267\u884C\u548C\u672C\u5730\u57FA\u7840\u8BBE\u65BD\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u628A NAS \u653E\u8FDB\u6548\u7387\u7CFB\u7EDF\uFF1F", answer: "\u56E0\u4E3A NAS \u627F\u63A5\u6570\u636E\u4E3B\u6743\u3001\u5907\u4EFD\u3001Docker \u670D\u52A1\u548C\u8FDC\u7A0B\u8BBF\u95EE\uFF0C\u662F\u4E2A\u4EBA\u957F\u671F\u8D44\u6599\u3001\u5185\u5BB9\u548C\u81EA\u52A8\u5316\u670D\u52A1\u7684\u7269\u7406\u5E95\u5EA7\u3002" }
  ];
  const related = [
    { name: "AI\u5F00\u53D1", href: "/ai/", desc: "AI Agent\u3001MCP\u3001LangGraph \u548C\u81EA\u52A8\u5316\u6D41\u7A0B\u3002" },
    { name: "\u4EA7\u54C1\u5DE5\u5177", href: "/tools/", desc: "App\u3001\u5728\u7EBF\u5DE5\u5177\u548C\u5F00\u53D1\u4E2D\u9879\u76EE\u3002" },
    { name: "\u6295\u8D44\u9605\u8BFB", href: "/investing/", desc: "\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7B14\u8BB0\u548C\u957F\u671F\u5224\u65AD\u3002" },
    { name: "\u6237\u5916\u751F\u6D3B", href: "/life/", desc: "\u8D35\u5DDE\u6237\u5916\u3001\u8DEF\u7EBF\u3001\u88C5\u5907\u548C\u771F\u5B9E\u751F\u6D3B\u3002" }
  ];
  const productivitySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: "https://www.xbstack.com/productivity/",
    description,
    inLanguage: "zh-Hans",
    isPartOf: { "@id": "https://www.xbstack.com/#website" },
    about: [
      { "@type": "Thing", name: "Productivity System" },
      { "@type": "Thing", name: "NAS Private Cloud" },
      { "@type": "Thing", name: "Local AI" },
      { "@type": "Thing", name: "Workflow Automation" },
      { "@type": "Thing", name: "Content Workflow" }
    ],
    mainEntity: productivityFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": productivitySchema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative z-10 text-slate-900 dark:text-white pt-32 pb-24 min-h-screen"> <section class="container mx-auto px-6 max-w-6xl"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-12"> <a href="/" class="hover:text-blue-500 transition-colors">首页</a> <span class="opacity-30">/</span> <span class="text-blue-500">效率系统</span> </nav> <header class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end border-b border-slate-200 dark:border-white/10 pb-16 mb-16"> <div> <p class="text-xs font-black uppercase tracking-[0.35em] text-blue-500 mb-6">Productivity System</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight italic leading-none mb-8">效率系统</h1> <p class="text-xl md:text-2xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">
把资料、AI、自动化和内容流程放到一个可维护的长期系统里。
</p> </div> <p class="text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">
这里不是泛泛的生产力技巧，而是小白自己的工作底座：NAS 承接数据，本地 AI 承接处理，笔记资料承接知识，自动化系统承接重复任务，内容运营承接长期分发。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"> ${sections.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-8 rounded-[34px] border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> <span class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">${item.subtitle}</span> <h2 class="text-2xl font-black mt-4 mb-4 group-hover:text-blue-500 transition-colors">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </a>`)} </section> <section data-theme-surface="adaptive-productivity" class="p-8 md:p-10 rounded-[36px] bg-blue-50/70 text-slate-950 border border-blue-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300 mb-4">How it connects</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">效率系统不是单独栏目，而是 XBSTACK 的底座</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> ${related.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-5 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:hover:bg-white/10"> <h3 class="text-sm font-black text-slate-950 dark:text-white mb-3">${item.name}</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </a>`)} </div> </section> <section id="faq" class="mt-16 p-8 md:p-10 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight mb-8">关于 XBSTACK 效率系统</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${productivityFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/index.astro";
const $$url = "/productivity/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
