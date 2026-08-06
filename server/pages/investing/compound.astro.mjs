import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Compound = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "\u590D\u5229\u539F\u7406";
  const actualCategories = ["finance", "\u590D\u5229"];
  const pageTitle = "\u590D\u5229\u539F\u7406\uFF1A\u5B9A\u6295\u3001\u901A\u80C0\u3001FIRE \u4E0E\u957F\u671F\u8D44\u4EA7\u589E\u957F - XBSTACK";
  const pageDescription = "\u6574\u7406 XBSTACK \u5173\u4E8E\u590D\u5229\u3001\u5B9A\u6295\u3001\u901A\u80C0\u3001FIRE \u548C\u957F\u671F\u8D44\u4EA7\u589E\u957F\u7684\u5185\u5BB9\uFF0C\u5E2E\u52A9\u8BFB\u8005\u7406\u89E3\u8D44\u4EA7\u589E\u957F\u6A21\u578B\u3002\u5185\u5BB9\u4EC5\u7528\u4E8E\u5B66\u4E60\u548C\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  const keywords = "\u590D\u5229\u539F\u7406, XBSTACK, \u590D\u5229\u6295\u8D44, FIRE, \u8D22\u62A5\u7814\u7A76, \u6295\u8D44\u590D\u76D8, \u957F\u671F\u8D44\u4EA7";
  const posts = (await getCollection("horizon", ({ data }) => {
    return !data.draft && (actualCategories.includes(data.category) || data.tags && data.tags.some((t) => actualCategories.includes(t)));
  })).sort((a, b) => new Date(b.data.createdAt).valueOf() - new Date(a.data.createdAt).valueOf());
  const faqs = [
    { question: "\u8FD9\u91CC\u4F1A\u7ED9\u5177\u4F53\u4E70\u5356\u5EFA\u8BAE\u5417\uFF1F", answer: "\u4E0D\u4F1A\u3002\u8FD9\u4E2A\u9875\u9762\u53EA\u6574\u7406\u4E2A\u4EBA\u89C2\u5BDF\u3001\u5B66\u4E60\u8BB0\u5F55\u548C\u98CE\u9669\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u4EFB\u4F55\u6295\u8D44\u5EFA\u8BAE\u3002" },
    { question: "\u9002\u5408\u65B0\u624B\u4ECE\u8FD9\u91CC\u5F00\u59CB\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF0C\u4F46\u5EFA\u8BAE\u5148\u4F7F\u7528\u590D\u5229\u8BA1\u7B97\u5668\u548C\u7231\u8D22\u62A5\u5DE5\u5177\u7406\u89E3\u57FA\u672C\u6A21\u578B\uFF0C\u518D\u9605\u8BFB\u5177\u4F53\u590D\u76D8\u6587\u7AE0\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u8981\u628A\u6295\u8D44\u5185\u5BB9\u548C\u5DE5\u5177\u9875\u4E92\u94FE\uFF1F", answer: "\u56E0\u4E3A XBSTACK \u66F4\u5173\u6CE8\u65B9\u6CD5\u548C\u7CFB\u7EDF\uFF0C\u5DE5\u5177\u9875\u7528\u4E8E\u8BA1\u7B97\u548C\u5206\u6790\uFF0C\u6587\u7AE0\u7528\u4E8E\u8BB0\u5F55\u8FC7\u7A0B\u548C\u9519\u8BEF\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a><span class="opacity-30">/</span> <a href="/investing/" class="hover:text-sky-500 transition-colors">Investing</a><span class="opacity-30">/</span> <span class="text-sky-500">${displayTitle}</span> </nav> <header class="mb-16 max-w-4xl"> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white italic tracking-tighter">${displayTitle}</h1> <p class="mt-6 text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">${pageDescription}</p> </header> <section class="mb-14 grid grid-cols-1 md:grid-cols-3 gap-4"> <a href="/tools/compound-calculator/" class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black hover:text-sky-500 transition-colors">复利计算器 →</a> <a href="/tools/ai-finance/" class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black hover:text-sky-500 transition-colors">爱财报 Financial Report AI →</a> <a href="/horizon/" class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black hover:text-sky-500 transition-colors">返回 Horizon →</a> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full"> <div><div class="flex items-center gap-3 mb-4"><span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">${post.data.category || displayTitle}</span><span class="text-[9px] font-bold text-slate-400">${formatDate(post.data.createdAt)}</span></div><h2 class="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors leading-snug">${post.data.title}</h2><p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 font-medium">${post.data.description}</p></div> <div class="mt-8 text-[10px] font-black uppercase tracking-widest text-sky-500">阅读复盘 →</div> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在整理该分类下的记录...</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/compound.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/compound.astro";
const $$url = "/investing/compound/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Compound,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
