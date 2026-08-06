import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { g as guidesData } from '../chunks/guides_DEPxCt2w.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u4E13\u9898\u6307\u5357\uFF1AAI Agent\u3001MCP\u3001n8n\u3001\u590D\u5229\u6295\u8D44\u4E0E\u79C1\u6709\u4E91\u5B9E\u6218 - XBSTACK";
  const description = "XBSTACK \u4E13\u9898\u6307\u5357\u628A AI Agent\u3001MCP\u3001LangGraph\u3001n8n Workflow\u3001\u590D\u5229\u6295\u8D44\u3001NAS \u79C1\u6709\u4E91\u548C\u5185\u5BB9\u7CFB\u7EDF\u6574\u7406\u6210\u5B66\u4E60\u8DEF\u5F84\uFF0C\u9002\u5408\u65B0\u8BFB\u8005\u4ECE\u95EE\u9898\u5165\u53E3\u8FDB\u5165\uFF0C\u800C\u4E0D\u662F\u6309\u65F6\u95F4\u7EBF\u7FFB\u6587\u7AE0\u3002";
  const keywords = "XBSTACK \u4E13\u9898\u6307\u5357, AI Agent \u5B66\u4E60\u8DEF\u7EBF, MCP \u6307\u5357, LangGraph \u6307\u5357, n8n AI Workflow, \u590D\u5229\u6295\u8D44, NAS \u79C1\u6709\u4E91, \u5185\u5BB9\u7CFB\u7EDF, \u72EC\u7ACB\u5F00\u53D1";
  const guideStartRoutes = [
    { title: "AI \u5DE5\u7A0B\u5316\u8DEF\u7EBF", desc: "\u4ECE AI Hub \u8FDB\u5165 Agent\u3001MCP\u3001LangGraph\u3001n8n Workflow \u548C\u751F\u4EA7\u5316\u6CBB\u7406\u3002", href: "/ai/" },
    { title: "n8n AI Starter Kit", desc: "\u4ECE Gmail\u3001Slack\u3001Notion \u5230\u81EA\u6258\u7BA1\u3001Queue Mode \u548C Webhook Hardening\u3002", href: "/ai/n8n-ai-starter-kit/" },
    { title: "\u957F\u671F\u8D44\u4EA7\u4E0E\u590D\u5229", desc: "\u4ECE\u590D\u5229\u8BA1\u7B97\u5668\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u548C\u72EC\u7ACB\u5F00\u53D1\u7406\u89E3\u8D44\u4EA7\u6784\u5EFA\u3002", href: "/horizon/" },
    { title: "NAS \u4E0E\u672C\u5730\u7CFB\u7EDF", desc: "\u4ECE\u79C1\u6709\u4E91\u3001\u81EA\u52A8\u5316\u3001\u5185\u5BB9\u8FD0\u8425\u548C\u672C\u5730 AI \u770B\u4E2A\u4EBA\u57FA\u7840\u8BBE\u65BD\u3002", href: "/productivity/" }
  ];
  const guideFaqs = [
    { question: "\u4E13\u9898\u6307\u5357\u548C\u6587\u7AE0\u5F52\u6863\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "\u4E13\u9898\u6307\u5357\u6309\u95EE\u9898\u548C\u5B66\u4E60\u8DEF\u7EBF\u7EC4\u7EC7\u5185\u5BB9\uFF0C\u9002\u5408\u65B0\u8BFB\u8005\u5FEB\u901F\u8FDB\u5165 AI\u3001n8n\u3001MCP\u3001\u590D\u5229\u6D4B\u7B97\u6216 NAS \u79C1\u6709\u4E91\u4E3B\u7EBF\uFF1B\u5F52\u6863\u9875\u66F4\u9002\u5408\u6309\u65F6\u95F4\u67E5\u5168\u90E8\u5185\u5BB9\u3002" },
    { question: "\u5E94\u8BE5\u5148\u770B AI Agent \u8FD8\u662F MCP\uFF1F", answer: "\u5982\u679C\u4F60\u8FD8\u5728\u7406\u89E3\u7CFB\u7EDF\u5F62\u6001\uFF0C\u5148\u770B AI Hub \u548C Agent\uFF1B\u5982\u679C\u4F60\u5DF2\u7ECF\u8981\u63A5\u5DE5\u5177\u3001\u6587\u4EF6\u3001\u6570\u636E\u5E93\u6216 IDE\uFF0C\u518D\u8FDB\u5165 MCP \u548C LangGraph \u8DEF\u7EBF\u3002" },
    { question: "\u590D\u5229\u4E13\u9898\u662F\u5426\u63D0\u4F9B\u6295\u8D44\u5EFA\u8BAE\uFF1F", answer: "\u4E0D\u63D0\u4F9B\u3002\u590D\u5229\u4E13\u9898\u53EA\u505A\u6570\u5B66\u5047\u8BBE\u3001\u901A\u80C0\u3001\u56DE\u64A4\u548C\u957F\u671F\u76EE\u6807\u6D4B\u7B97\uFF0C\u5177\u4F53\u51B3\u7B56\u9700\u8981\u81EA\u884C\u5224\u65AD\u5E76\u627F\u62C5\u98CE\u9669\u3002" }
  ];
  const guides = Object.entries(guidesData).map(([slug, data]) => {
    let finalUrl = `/guides/${slug}/`;
    if (slug === "compound-interest") finalUrl = "/compound-interest/";
    return {
      slug,
      finalUrl,
      ...data
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> <main class="relative z-10 pt-32 pb-24 min-h-screen"> <div class="container mx-auto px-6 max-w-5xl"> <header class="mb-20 animate-fadeUp"> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 italic tracking-tighter uppercase leading-none font-brand">
专题<span class="text-orange-500">指南</span> </h1> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-4 max-w-2xl">
" 系统化的知识输出，是为了对抗碎片化时代的认知熵增。"
</p> </header> <section class="mb-16 p-8 md:p-10 rounded-[40px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 animate-fadeUp"> <div class="max-w-3xl mb-8"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Start Here</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-4">不知道先看什么？按问题进入</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">专题页不是文章归档，而是把 XBSTACK 已有内容组织成学习路线。先选方向，再进入具体专题。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${guideStartRoutes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[28px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-colors block"> <h3 class="text-lg font-black text-slate-950 dark:text-white mb-3">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">进入路线 →</div> </a>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${guides.map((guide) => renderTemplate`<a${addAttribute(guide.finalUrl, "href")} class="group relative p-1 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent hover:from-orange-500/20 transition-all duration-500"> <div class="h-full p-10 rounded-[39px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 flex flex-col shadow-2xl relative overflow-hidden"> <div class="mb-8 flex justify-between items-start"> <div${addAttribute(`w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all border border-black/5 dark:border-white/5`, "class")}> ${guide.icon} </div> </div> <h3 class="text-xl font-black text-slate-900 dark:text-white mb-4 italic tracking-tight group-hover:text-orange-500 transition-colors"> ${guide.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-10 flex-1 font-medium line-clamp-3"> ${guide.description} </p> <div class="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400 group-hover:translate-x-2 transition-all">
进入专题 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg> </div> </div> </a>`)} </div> </div> <section class="container mx-auto px-6 max-w-5xl mt-16"> <div class="p-8 rounded-[36px] bg-orange-500 text-white"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-100 mb-3">Next Reading</p> <h2 class="text-3xl font-black mb-5">如果你只想看当前最值得读的入口</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <a href="/ai/mcp-vs-function-calling/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">MCP vs Function Calling →</a> <a href="/ai/n8n-ai-starter-kit/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">n8n AI Starter Kit →</a> <a href="/tools/ai-finance/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">爱财报 Financial Report AI →</a> </div> </div> </section> <section id="faq" class="container mx-auto px-6 max-w-5xl mt-16"> <div class="p-8 rounded-[36px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">FAQ</p> <h2 class="text-3xl font-black mb-8 text-slate-950 dark:text-white">专题指南怎么用</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${guideFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2 text-slate-950 dark:text-white">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/guides/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/guides/index.astro";
const $$url = "/guides/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
