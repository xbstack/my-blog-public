import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { g as getCollection } from '../chunks/_astro_content_CEdkLuU4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const collections = ["ai", "horizon", "lens", "notes"];
  let allPosts = [];
  for (const col of collections) {
    try {
      const posts = await getCollection(col, (entry) => !entry.data?.draft);
      allPosts = [...allPosts, ...posts];
    } catch (e) {
    }
  }
  const tagMap = {};
  allPosts.forEach((post) => {
    const tags = post.data.tags || [];
    tags.forEach((tag) => {
      const normalizedTag = tag.trim().toLowerCase();
      if (normalizedTag) {
        if (tagMap[normalizedTag]) {
          tagMap[normalizedTag].count += 1;
        } else {
          tagMap[normalizedTag] = { name: tag, count: 1 };
        }
      }
    });
  });
  const minimumPostCount = 3;
  const sortedTags = Object.values(tagMap).filter((tag) => tag.count >= minimumPostCount).sort((a, b) => b.count - a.count);
  const title = "\u6807\u7B7E\u5F52\u6863 | \u6807\u7B7E\u7D22\u5F15 - XBSTACK";
  const description = "XBSTACK \u5168\u7AD9\u6807\u7B7E\u7D22\u5F15\uFF0C\u8986\u76D6 AI Agent\u3001MCP\u3001LangGraph\u3001n8n Workflow\u3001\u590D\u5229\u6295\u8D44\u3001\u7231\u8D22\u62A5\u3001NAS \u79C1\u6709\u4E91\u3001\u8D35\u5DDE\u6237\u5916\u3001\u88C5\u5907\u6444\u5F71\u548C\u9605\u8BFB\u7CFB\u7EDF\u3002";
  const keywords = "XBSTACK \u6807\u7B7E, AI Agent \u6807\u7B7E, MCP \u6807\u7B7E, LangGraph \u6807\u7B7E, n8n \u6807\u7B7E, \u590D\u5229\u6295\u8D44\u6807\u7B7E, \u8D35\u5DDE\u6237\u5916\u6807\u7B7E, NAS \u6807\u7B7E";
  const tagFaqs = [
    { question: "\u6807\u7B7E\u9875\u9002\u5408\u600E\u4E48\u7528\uFF1F", answer: "\u5982\u679C\u4F60\u5DF2\u7ECF\u77E5\u9053\u81EA\u5DF1\u60F3\u627E MCP\u3001LangGraph\u3001n8n\u3001\u590D\u5229\u3001\u6237\u5916\u6216 NAS \u76F8\u5173\u5185\u5BB9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECE\u6807\u7B7E\u8FDB\u5165\u3002" },
    { question: "\u65B0\u8BFB\u8005\u5E94\u8BE5\u5148\u770B\u6807\u7B7E\u9875\u5417\uFF1F", answer: "\u4E0D\u5EFA\u8BAE\u3002\u65B0\u8BFB\u8005\u66F4\u9002\u5408\u4ECE\u9996\u9875 Start Here\u3001AI Hub\u3001Tools \u6216 Guides \u5F00\u59CB\uFF0C\u6807\u7B7E\u9875\u9002\u5408\u4E8C\u6B21\u68C0\u7D22\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u6807\u7B7E\u9875 noindex\uFF1F", answer: "\u6807\u7B7E\u805A\u5408\u9875\u5BB9\u6613\u548C\u6B63\u5F0F\u4E13\u9898\u9875\u7ADE\u4E89\u641C\u7D22\u6743\u91CD\uFF0C\u6240\u4EE5\u5B83\u4E3B\u8981\u670D\u52A1\u7AD9\u5185\u5BFC\u822A\uFF0C\u4E0D\u4F5C\u4E3A\u6838\u5FC3\u641C\u7D22\u843D\u5730\u9875\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: tagFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> <main class="relative z-10 pt-32 pb-24"> <header class="container mx-auto px-4 mb-24 text-center"> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">全部<span class="text-sky-500">标签</span></h1> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-4 max-w-3xl mx-auto">
" 标签是知识网络的经纬线。这里是碎片知识的有机共振。 "
</p> </header> <div class="container mx-auto px-4 max-w-4xl"> <section class="mb-14 p-8 rounded-[36px] bg-sky-500/5 border border-sky-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-sky-500 mb-3">Start Here</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">标签适合检索，专题适合学习</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <a href="/ai/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">AI Hub →</a> <a href="/tools/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">Tools →</a> <a href="/horizon/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">Horizon →</a> <a href="/life/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">Life →</a> </div> </section> <div class="flex flex-wrap gap-4 justify-center"> ${sortedTags.map((tag) => renderTemplate`<a${addAttribute(`/search/?q=${encodeURIComponent(tag.name)}`, "href")} class="px-6 py-3 rounded-full bg-slate-100 hover:bg-sky-500/10 dark:bg-white/5 dark:hover:bg-sky-500/20 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-sky-500 dark:hover:border-sky-500 transition-all font-bold text-sm flex items-center gap-2"> <span>#${tag.name}</span> <span class="text-xs bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400 font-mono"> ${tag.count} </span> </a>`)} </div> ${sortedTags.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">标签正在同步中...</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tags/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tags/index.astro";
const $$url = "/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
