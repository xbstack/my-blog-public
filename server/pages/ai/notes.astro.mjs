import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_DpzxR7uC.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Notes = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "\u6280\u672F\u7B14\u8BB0";
  const actualCategories = ["dev"];
  const collection = "ai";
  const posts = (await getCollection(collection, ({ data }) => {
    return !data.draft && data.lang !== "en" && (actualCategories.includes(data.category) || data.tags && data.tags.some((t) => actualCategories.includes(t)));
  })).sort((a, b) => new Date(b.data.createdAt).valueOf() - new Date(a.data.createdAt).valueOf());
  const pageTitle = `AI \u6280\u672F\u7B14\u8BB0\uFF1AAgent\u3001MCP\u3001LangGraph \u4E0E\u5DE5\u7A0B\u6392\u969C\u8BB0\u5F55 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "XBSTACK AI \u6280\u672F\u7B14\u8BB0\u9875\u6536\u5F55 AI Agent\u3001MCP\u3001LangGraph\u3001\u90E8\u7F72\u6392\u969C\u548C\u5F00\u53D1\u5B9E\u8DF5\u4E2D\u7684\u77ED\u8BB0\u5F55\uFF0C\u9002\u5408\u5FEB\u901F\u67E5\u627E\u95EE\u9898\u80CC\u666F\u3001\u5B9E\u73B0\u7EC6\u8282\u548C\u540E\u7EED\u6DF1\u5165\u9605\u8BFB\u5165\u53E3\u3002";
  const keywords = "AI \u6280\u672F\u7B14\u8BB0, AI Agent \u7B14\u8BB0, MCP \u6392\u969C, LangGraph \u7B14\u8BB0, \u5F00\u53D1\u8BB0\u5F55, XBSTACK, AI Engineering Notes";
  const noteTypes = [
    { title: "Bug \u7B14\u8BB0", desc: "\u8BB0\u5F55\u9519\u8BEF\u73B0\u8C61\u3001\u89E6\u53D1\u6761\u4EF6\u3001\u5B9A\u4F4D\u8DEF\u5F84\u548C\u6700\u7EC8\u4FEE\u590D\u65B9\u5F0F\uFF0C\u907F\u514D\u540C\u7C7B\u95EE\u9898\u53CD\u590D\u6392\u67E5\u3002" },
    { title: "\u6982\u5FF5\u8FB9\u754C", desc: "\u628A Agent\u3001Workflow\u3001MCP\u3001LangGraph \u7B49\u5BB9\u6613\u6DF7\u7528\u7684\u6982\u5FF5\u653E\u5230\u5DE5\u7A0B\u573A\u666F\u91CC\u89E3\u91CA\u3002" },
    { title: "\u90E8\u7F72\u8BB0\u5F55", desc: "\u4FDD\u7559 NAS\u3001Docker\u3001SSR\u3001\u53CD\u5411\u4EE3\u7406\u548C\u81EA\u6258\u7BA1\u670D\u52A1\u4E2D\u7684\u5173\u952E\u914D\u7F6E\u5DEE\u5F02\u3002" },
    { title: "\u6392\u969C\u7D22\u5F15", desc: "\u628A\u77ED\u95EE\u9898\u8FDE\u63A5\u5230\u6B63\u5F0F\u957F\u6587\uFF0C\u65B9\u4FBF\u4ECE\u4E00\u4E2A\u9519\u8BEF\u5FEB\u901F\u8DF3\u5230\u5B8C\u6574\u89E3\u51B3\u65B9\u6848\u3002" }
  ];
  const noteFaqs = [
    { question: "AI \u6280\u672F\u7B14\u8BB0\u548C\u6B63\u5F0F\u6587\u7AE0\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "\u6280\u672F\u7B14\u8BB0\u66F4\u77ED\uFF0C\u4E3B\u8981\u8BB0\u5F55\u95EE\u9898\u3001\u8FB9\u754C\u548C\u6392\u969C\u7EBF\u7D22\uFF1B\u6B63\u5F0F\u6587\u7AE0\u4F1A\u5C55\u5F00\u6210\u5B8C\u6574\u65B9\u6848\u548C\u4EE3\u7801\u8DEF\u5F84\u3002" },
    { question: "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u7B14\u8BB0\u9875\u5F00\u59CB\u5417\uFF1F", answer: "\u4E0D\u5EFA\u8BAE\u3002\u65B0\u8BFB\u8005\u66F4\u9002\u5408\u4ECE AI Hub\u3001MCP Hub\u3001LangGraph Hub \u6216 Workflow Hub \u5F00\u59CB\u3002" },
    { question: "\u7B14\u8BB0\u4F1A\u7EE7\u7EED\u6574\u7406\u6210\u4E13\u9898\u5417\uFF1F", answer: "\u4F1A\uFF0C\u5177\u5907\u590D\u7528\u4EF7\u503C\u7684\u7B14\u8BB0\u4F1A\u5347\u7EA7\u6210 Builder Log\u3001\u4E13\u9898\u9875\u6216\u5B8C\u6574\u6559\u7A0B\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "noindex": true, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: noteFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai" class="hover:text-sky-500 transition-colors">AI开发</a> <span class="opacity-30">/</span> <span class="text-sky-500">${displayTitle}</span> </nav> <header class="mb-20 space-y-5"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black border border-sky-500/20 uppercase tracking-[0.3em]">Engineering Notes / 技术速记</div> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter"> ${displayTitle} / <span class="text-sky-500">笔记整理</span> </h1> <p class="max-w-3xl text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed">把开发中遇到的问题、概念边界和实现细节按 AI 工程主题归档，作为长文和实战教程之间的快速索引。</p> </header> <section class="mb-20 p-8 md:p-10 rounded-[42px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white mb-6">笔记如何使用</h2> <p class="max-w-4xl text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-8">这个页面不是零散摘抄，而是把开发现场遇到的短问题沉淀成索引。能独立解决的小问题保留为笔记，具备复用价值的内容会继续升级成正式教程或专题页。</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"> ${noteTypes.map((item) => renderTemplate`<article class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-sky-500 mb-3">${item.title}</div> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </article>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const slug = post.id.replace(/\.(md|mdx)$/, "");
    return renderTemplate`<a${addAttribute(`/ai/${slug}`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">${post.data.category || displayTitle}</span> <span class="text-[9px] font-bold text-slate-400">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors leading-snug"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 font-medium"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-sky-500 opacity-60 group-hover:opacity-100 transition-all">
阅读全文 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`;
  })} </div> <section id="faq" class="mt-20 p-8 rounded-[36px] bg-sky-500/5 border border-sky-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-sky-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${noteFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在编写该分类下的实战记录...</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/notes.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/notes.astro";
const $$url = "/ai/notes/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Notes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
