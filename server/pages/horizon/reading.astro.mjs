import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
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
  const pageTitle = `Reading\uFF1A\u9605\u8BFB\u2014\u5B9E\u8DF5\u2014\u9A8C\u8BC1\u81EA\u5DF1\u7684\u957F\u671F\u590D\u76D8\u7CFB\u7EDF - ${SITE_INFO.SITE_NAME}`;
  const description = "XBSTACK Reading \u4E0D\u662F\u666E\u901A\u4E66\u8BC4\u3001\u4E66\u5355\u6216\u91D1\u53E5\u6458\u6284\uFF0C\u800C\u662F\u5C0F\u767D\u628A\u9605\u8BFB\u653E\u8FDB\u6295\u8D44\u3001\u6237\u5916\u3001\u72EC\u7ACB\u5F00\u53D1\u548C\u751F\u6D3B\u51B3\u7B56\u91CC\u7684\u5B9E\u8DF5\u590D\u76D8\u7CFB\u7EDF\uFF1A\u5E26\u7740\u95EE\u9898\u8BFB\u3001\u62FF\u89C2\u70B9\u53BB\u505A\u3001\u7528\u73B0\u5B9E\u7ED3\u679C\u9A8C\u8BC1\u5224\u65AD\u3002";
  const keywords = "XBSTACK Reading, \u9605\u8BFB\u7CFB\u7EDF, \u9605\u8BFB\u5B9E\u8DF5, \u51B3\u7B56\u7CFB\u7EDF, \u7A0B\u5E8F\u5458\u9605\u8BFB, \u6295\u8D44\u9605\u8BFB, \u72EC\u7ACB\u5F00\u53D1\u9605\u8BFB, \u53CD\u8106\u5F31, \u7EB3\u74E6\u5C14, \u539F\u5219, \u7A77\u67E5\u7406\u5B9D\u5178";
  const readingLinks = [
    { title: "Horizon \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF", href: "/horizon/", description: "\u6295\u8D44\u3001\u9605\u8BFB\u3001\u72EC\u7ACB\u5F00\u53D1\u548C\u73B0\u91D1\u6D41\u603B\u5165\u53E3\u3002" },
    { title: "Investing \u6295\u8D44\u590D\u76D8", href: "/investing/", description: "\u628A\u5224\u65AD\u653E\u5230\u5E02\u573A\u548C\u5DE5\u5177\u91CC\u9A8C\u8BC1\u3002" },
    { title: "\u6237\u5916\u751F\u6D3B", href: "/life/", description: "\u7528\u8DEF\u7EBF\u3001\u5929\u6C14\u548C\u8EAB\u4F53\u53CD\u9988\u6821\u51C6\u5224\u65AD\u3002" },
    ...posts.slice(0, 9).map((post) => ({ title: post.data.title, href: `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`, description: post.data.description }))
  ];
  const readingSchema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://www.xbstack.com/horizon/reading/#collection", name: pageTitle, description, url: "https://www.xbstack.com/horizon/reading/", inLanguage: "zh-CN", isPartOf: { "@id": "https://www.xbstack.com/#website" }, about: ["Reading", "\u9605\u8BFB\u5B9E\u8DF5", "\u51B3\u7B56\u7CFB\u7EDF", "\u6295\u8D44\u590D\u76D8", "\u72EC\u7ACB\u5F00\u53D1"].map((name) => ({ "@type": "Thing", name })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.xbstack.com/" }, { "@type": "ListItem", position: 2, name: "Horizon", item: "https://www.xbstack.com/horizon/" }, { "@type": "ListItem", position: 3, name: "Reading", item: "https://www.xbstack.com/horizon/reading/" }] },
    { "@context": "https://schema.org", "@type": "ItemList", name: "XBSTACK Reading articles", itemListElement: readingLinks.slice(0, 12).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://www.xbstack.com${item.href}` })) }
  ];
  const readingFaqs = [
    { question: "Reading \u548C\u666E\u901A\u4E66\u8BC4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "\u8FD9\u91CC\u4E0D\u5199\u666E\u901A\u4E66\u8BC4\u3001\u4E66\u5355\u6216\u91D1\u53E5\u6458\u6284\u3002\u6BCF\u7BC7\u6587\u7AE0\u90FD\u5FC5\u987B\u5E26\u7740\u73B0\u5B9E\u95EE\u9898\u8BFB\u4E66\uFF0C\u518D\u8BB0\u5F55\u5B9E\u8DF5\u3001\u9A8C\u8BC1\u7ED3\u679C\u548C\u4E0B\u6B21\u89C4\u5219\u3002" },
    { question: "\u9002\u5408\u4ECE\u54EA\u91CC\u5F00\u59CB\uFF1F", answer: "\u5148\u770B Reading \u5F00\u5C71\u6587\uFF0C\u518D\u6309\u6295\u8D44\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u751F\u6D3B\u4E09\u4E2A\u65B9\u5411\u627E\u5177\u4F53\u5B9E\u8DF5\uFF0C\u4E0D\u5EFA\u8BAE\u4ECE\u4E66\u540D\u6216\u540D\u4EBA\u91D1\u53E5\u5F00\u59CB\u3002" },
    { question: "\u4EC0\u4E48\u5185\u5BB9\u4E0D\u9002\u5408\u653E\u8FDB Reading\uFF1F", answer: "\u5355\u7EAF\u6458\u6284\u3001\u8BFB\u540E\u611F\u3001\u60C5\u7EEA\u9E21\u6C64\u548C\u6CA1\u6709\u73B0\u5B9E\u9A8C\u8BC1\u7684\u4E66\u8BC4\u4E0D\u9002\u5408\u653E\u8FDB\u8FD9\u4E2A\u680F\u76EE\u3002" }
  ];
  const readingRules = [
    "\u5E26\u7740\u4E00\u4E2A\u73B0\u5B9E\u95EE\u9898\u8BFB\uFF0C\u800C\u4E0D\u662F\u4E3A\u4E86\u5199\u4E66\u8BC4\u8BFB",
    "\u628A\u4E66\u91CC\u7684\u89C2\u70B9\u653E\u5230\u6295\u8D44\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u6216\u5185\u5BB9\u7CFB\u7EDF\u91CC\u8BD5\u4E00\u6B21",
    "\u8BB0\u5F55\u9A8C\u8BC1\u7ED3\u679C\uFF0C\u5305\u62EC\u5931\u8D25\u3001\u8BEF\u5224\u548C\u6CA1\u6709\u7528\u7684\u90E8\u5206",
    "\u6700\u540E\u6C89\u6DC0\u4E00\u6761\u4E0B\u6B21\u53EF\u6267\u884C\u7684\u5224\u65AD\u89C4\u5219"
  ];
  const readingGeo = {
    summary: "XBSTACK Reading \u662F\u9605\u8BFB\u2014\u5B9E\u8DF5\u2014\u9A8C\u8BC1\u81EA\u5DF1\u7684\u957F\u671F\u590D\u76D8\u7CFB\u7EDF\u3002\u8FD9\u91CC\u4E0D\u5199\u666E\u901A\u4E66\u8BC4\u3001\u4E66\u5355\u6216\u6458\u6284\uFF0C\u800C\u662F\u8BB0\u5F55\u5C0F\u767D\u5E26\u7740\u73B0\u5B9E\u95EE\u9898\u8BFB\u4E66\uFF0C\u628A\u89C2\u70B9\u653E\u8FDB\u6295\u8D44\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u751F\u6D3B\u548C\u5185\u5BB9\u7CFB\u7EDF\u91CC\u9A8C\u8BC1\uFF0C\u518D\u7528\u7ED3\u679C\u4FEE\u6539\u5224\u65AD\u3002",
    questions: ["XBSTACK Reading \u548C\u666E\u901A\u4E66\u8BC4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F", "\u5982\u4F55\u628A\u9605\u8BFB\u53D8\u6210\u6295\u8D44\u548C\u72EC\u7ACB\u5F00\u53D1\u7684\u51B3\u7B56\u7CFB\u7EDF\uFF1F", "Reading \u6587\u7AE0\u5E94\u8BE5\u5982\u4F55\u5199\u5B9E\u8DF5\u3001\u9A8C\u8BC1\u548C\u4E0B\u6B21\u89C4\u5219\uFF1F"],
    entities: ["XBSTACK Reading", "\u9605\u8BFB\u7CFB\u7EDF", "\u9605\u8BFB\u5B9E\u8DF5", "\u51B3\u7B56\u7CFB\u7EDF", "\u53CD\u8106\u5F31", "\u7EB3\u74E6\u5C14", "\u539F\u5219", "\u7A77\u67E5\u7406\u5B9D\u5178", "\u72EC\u7ACB\u5F00\u53D1", "\u6295\u8D44\u590D\u76D8"],
    links: readingLinks
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": description, "keywords": keywords, "schemaJsonLd": readingSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": readingGeo.summary, "questions": readingGeo.questions, "entities": readingGeo.entities, "links": readingGeo.links })} ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/horizon/" class="hover:text-sky-500 transition-colors">Horizon</a> <span class="opacity-30">/</span> <span class="text-sky-500">Reading</span> </nav> <header class="mb-14"> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
Reading / <span class="text-sky-500">阅读实践</span> </h1> <p class="max-w-3xl mt-6 text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">
这里不做普通书评、书单或金句摘抄。每篇 Reading 都必须回答：我带着什么问题读，拿观点做了什么实践，现实验证结果如何，下次怎样修改判断。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"> ${readingLinks.slice(0, 3).map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[28px] bg-sky-500/5 border border-sky-500/10 hover:border-sky-500/40 transition-colors"> <h2 class="text-lg font-black text-slate-900 dark:text-white mb-3">${item.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.description}</p> </a>`)} </section> <section class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-14"> <div class="p-7 rounded-[32px] bg-sky-500/5 border border-sky-500/10"> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">Reading 写作标准</h2> <ol class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> ${readingRules.map((item, index) => renderTemplate`<li>${index + 1}. ${item}</li>`)} </ol> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${readingFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-sm font-black text-slate-900 dark:text-white mb-2">${faq.question}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const url = `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`;
    return renderTemplate`<a${addAttribute(url, "href")} class="group p-10 rounded-[45px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl"> <div> <div class="flex items-center gap-3 mb-6"> <span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 border border-sky-500/20">${post.data.category === "reading" ? "\u77E5\u8BC6\u4E66\u67B6" : post.data.category || "\u9605\u8BFB"}</span> <span class="text-[9px] font-black text-slate-400 uppercase font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-sky-500 transition-colors leading-tight italic"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-10 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between"> <span class="text-[9px] font-black uppercase tracking-[0.3em] text-sky-500 opacity-60 group-hover:opacity-100 transition-all italic">READ_LOG_v6.6</span> <svg class="w-5 h-5 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`;
  })} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在构建格栅思维系统... Loading Knowledge Base.</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/reading.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/reading.astro";
const $$url = "/horizon/reading/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reading,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
