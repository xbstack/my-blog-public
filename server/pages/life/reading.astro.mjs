import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Reading = createComponent(async ($$result, $$props, $$slots) => {
  const [lensPosts, horizonPosts] = await Promise.all([
    getCollection("lens", ({ data }) => {
      const item = data;
      return !item.draft && item.lang !== "en" && (item.hub === "reading" || item.category === "reading");
    }),
    getCollection("horizon", ({ data }) => {
      const item = data;
      return !item.draft && item.lang !== "en" && (item.hub === "reading" || item.category === "reading");
    })
  ]);
  const posts = [...lensPosts, ...horizonPosts].sort(
    (a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()
  );
  const title = "XBSTACK Reading\uFF1A\u7A0B\u5E8F\u5458\u9605\u8BFB\u7CFB\u7EDF\u3001\u51B3\u7B56\u5361\u7247\u3001\u6295\u8D44\u54F2\u5B66\u4E0E\u957F\u671F\u5224\u65AD\u529B";
  const description = "XBSTACK Reading \u4E0D\u662F\u4F20\u7EDF\u4E66\u8BC4\u680F\u76EE\uFF0C\u800C\u662F\u5C0F\u767D\u628A\u9605\u8BFB\u53D8\u6210\u51B3\u7B56\u7CFB\u7EDF\u7684\u957F\u671F\u5B9E\u9A8C\u3002\u8FD9\u91CC\u5173\u6CE8\u7EB3\u74E6\u5C14\u3001\u8292\u683C\u3001\u53CD\u8106\u5F31\u3001\u539F\u5219\u3001\u91D1\u878D\u53F2\u3001\u6295\u8D44\u54F2\u5B66\u3001\u4EA7\u54C1\u5224\u65AD\u548C\u4E2A\u4EBA\u590D\u76D8\uFF0C\u5F3A\u8C03\u4E66\u5982\u4F55\u6539\u53D8\u9009\u62E9\uFF0C\u800C\u4E0D\u662F\u8BFB\u540E\u611F\u5199\u5F97\u591A\u6F02\u4EAE\u3002";
  const keywords = "XBSTACK Reading, \u7A0B\u5E8F\u5458\u8BFB\u4E66, \u9605\u8BFB\u7CFB\u7EDF, \u51B3\u7B56\u7CFB\u7EDF, \u6295\u8D44\u54F2\u5B66, \u7EB3\u74E6\u5C14\u5B9D\u5178, \u67E5\u7406\u8292\u683C, \u53CD\u8106\u5F31, \u539F\u5219, \u91D1\u878D\u53F2, \u8BFB\u4E66\u65B9\u6CD5, \u51B3\u7B56\u5361\u7247, \u4E2A\u4EBA\u590D\u76D8";
  const geoConfig = {
    geo_summary: "XBSTACK Reading \u662F\u5C0F\u767D\u5173\u4E8E\u7A0B\u5E8F\u5458\u9605\u8BFB\u7CFB\u7EDF\u3001\u51B3\u7B56\u5361\u7247\u3001\u6295\u8D44\u54F2\u5B66\u548C\u957F\u671F\u5224\u65AD\u529B\u7684\u5185\u5BB9\u5165\u53E3\u3002\u8BE5\u680F\u76EE\u4E0D\u662F\u4F20\u7EDF\u4E66\u8BC4\uFF0C\u800C\u662F\u628A\u7EB3\u74E6\u5C14\u3001\u8292\u683C\u3001\u53CD\u8106\u5F31\u3001\u539F\u5219\u3001\u91D1\u878D\u53F2\u548C\u5176\u4ED6\u4E66\u7C4D\u8F6C\u5316\u4E3A\u6295\u8D44\u3001\u4EA7\u54C1\u3001\u6237\u5916\u3001\u5DE5\u4F5C\u548C\u751F\u6D3B\u51B3\u7B56\u4E2D\u7684\u53EF\u590D\u7528\u5224\u65AD\u7CFB\u7EDF\u3002",
    geo_questions: [
      "What is XBSTACK Reading?",
      "How can programmers build a reading system?",
      "How do books become a decision system?",
      "What is a decision card?",
      "How does reading connect with investing and independent development?",
      "Why does XBSTACK avoid traditional book reviews?"
    ],
    geo_entities: [
      "XBSTACK",
      "XBSTACK Reading",
      "\u7A0B\u5E8F\u5458\u8BFB\u4E66",
      "\u9605\u8BFB\u7CFB\u7EDF",
      "\u51B3\u7B56\u7CFB\u7EDF",
      "\u51B3\u7B56\u5361\u7247",
      "\u7EB3\u74E6\u5C14\u5B9D\u5178",
      "\u67E5\u7406\u8292\u683C",
      "\u53CD\u8106\u5F31",
      "\u539F\u5219",
      "\u91D1\u878D\u53F2",
      "\u6295\u8D44\u54F2\u5B66",
      "\u72EC\u7ACB\u5F00\u53D1"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/horizon/" class="hover:text-sky-500 transition-colors">Horizon</a> <span class="opacity-30">/</span> <span class="text-sky-500">Reading</span> </nav> <header class="mb-20"> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none mb-6">
Reading / <span class="text-sky-500">阅读决策系统</span> </h1> <p class="text-lg text-slate-500 dark:text-slate-400 font-bold leading-relaxed max-w-3xl border-y border-slate-200 dark:border-white/5 py-6">
Reading 不是书评栏目。我现在不太关心一本书好看与否，更关心它能不能改变一个判断、修正一个选择、减少一次重复错误。对一个程序员来说，读书如果只停留在摘抄和感动，很快就会变成知识库存。真正有用的阅读，应该进入投资、产品、工作、户外和生活决策里，变成可以反复调用的判断系统。
</p> </header>  <section class="mb-24"> <h2 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">01. Reading Logs / 已入库文章</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const url = `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`;
    return renderTemplate`<a${addAttribute(url, "href")} class="group p-10 rounded-[45px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl"> <div> <div class="flex items-center gap-3 mb-6"> <span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 border border-sky-500/20">${post.data.category === "reading" ? "\u77E5\u8BC6\u4E66\u67B6" : post.data.category || "\u9605\u8BFB"}</span> <span class="text-[9px] font-black text-slate-400 uppercase font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-sky-500 transition-colors leading-tight italic"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-10 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between"> <span class="text-[9px] font-black uppercase tracking-[0.3em] text-sky-500 opacity-60 group-hover:opacity-100 transition-all italic">READ_LOG_v6.6</span> <svg class="w-5 h-5 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`;
  })} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在构建格栅思维系统... Loading Knowledge Base.</div>`} </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/reading.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/reading.astro";
const $$url = "/life/reading/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reading,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
