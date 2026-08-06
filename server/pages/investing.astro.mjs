import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DQag2m34.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_pMHxHuJm.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_c6kFuudu.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const selectedCategory = Astro2.url.searchParams.get("category");
  const allInvestingPosts = await getCollection("horizon", ({ data }) => {
    const isInvestingHub = data.hub === "investing" || data.section === "horizon";
    const isInvestingCategory = ["investing", "finance", "reading"].includes(data.category);
    return !data.draft && data.lang !== "en" && (isInvestingHub || isInvestingCategory);
  });
  const mainInvestingPosts = allInvestingPosts.filter((p) => p.data.category !== "reading");
  const readingSupportPosts = allInvestingPosts.filter((p) => p.data.category === "reading").sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 3);
  const investingPosts = selectedCategory ? allInvestingPosts.filter((p) => p.data.category === selectedCategory) : mainInvestingPosts;
  const sortedPosts = investingPosts.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const categoriesWithCount = [
    { name: "\u590D\u5229\u539F\u7406", slug: "finance", count: allInvestingPosts.filter((p) => p.data.category === "finance").length },
    { name: "\u5B9E\u6218\u590D\u76D8", slug: "investing", count: allInvestingPosts.filter((p) => p.data.category === "investing").length },
    { name: "\u77E5\u8BC6\u4E66\u67B6", slug: "reading", count: allInvestingPosts.filter((p) => p.data.category === "reading").length }
  ];
  const allTags = [...new Set(allInvestingPosts.flatMap((post) => post.data.tags || []))].slice(0, 20);
  const title = "Investing\uFF1A\u590D\u5229\u6295\u8D44\u3001FIRE\u3001\u8D22\u62A5\u7814\u7A76\u4E0E\u957F\u671F\u8D44\u4EA7\u590D\u76D8 - XBSTACK";
  const description = "XBSTACK Investing \u8BB0\u5F55\u5C0F\u767D\u7684\u590D\u5229\u6295\u8D44\u3001FIRE \u8D22\u52A1\u81EA\u7531\u3001\u6E2F\u7F8E A \u6295\u8D44\u590D\u76D8\u3001AI \u8D22\u62A5\u5206\u6790\u3001\u9605\u8BFB\u7CFB\u7EDF\u548C\u957F\u671F\u8D44\u4EA7\u5B9E\u9A8C\u3002\u5185\u5BB9\u4EC5\u7528\u4E8E\u4E2A\u4EBA\u8BB0\u5F55\u548C\u98CE\u9669\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  const keywords = "XBSTACK Investing, \u590D\u5229\u6295\u8D44, FIRE \u8D22\u52A1\u81EA\u7531, \u7F8E\u80A1\u6295\u8D44, A\u80A1\u590D\u76D8, \u6E2F\u80A1\u6295\u8D44, AI\u8D22\u62A5\u5206\u6790, \u7231\u8D22\u62A5, \u6295\u8D44\u590D\u76D8, \u957F\u671F\u8D44\u4EA7";
  const investingStartRoutes = [
    { title: "\u5148\u505A\u590D\u5229\u548C FIRE \u6D4B\u7B97", desc: "\u7528\u590D\u5229\u8BA1\u7B97\u5668\u7406\u89E3\u672C\u91D1\u3001\u5B9A\u6295\u3001\u6536\u76CA\u7387\u3001\u65F6\u95F4\u548C\u901A\u80C0\u4E4B\u95F4\u7684\u5173\u7CFB\u3002", href: "/tools/compound-calculator/" },
    { title: "\u518D\u7528\u7231\u8D22\u62A5\u8BFB\u8D22\u62A5", desc: "\u7528 Financial Report AI \u8F85\u52A9\u538B\u7F29\u8D22\u62A5\u3001\u98CE\u9669\u6BB5\u843D\u548C\u5173\u952E\u6307\u6807\u3002", href: "/tools/ai-finance/" },
    { title: "\u770B\u771F\u5B9E\u6295\u8D44\u590D\u76D8", desc: "\u53EA\u8BB0\u5F55\u89C2\u5BDF\u3001\u9519\u8BEF\u548C\u51B3\u7B56\u8FC7\u7A0B\uFF0C\u4E0D\u505A\u4E70\u5356\u5EFA\u8BAE\u3002", href: "/investing/?category=investing" },
    { title: "\u56DE\u5230\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF", desc: "\u628A\u6295\u8D44\u3001\u9605\u8BFB\u3001\u5DE5\u5177\u4EA7\u54C1\u548C\u4E2A\u4EBA\u7F51\u7AD9\u653E\u56DE Horizon \u4E3B\u7EBF\u3002", href: "/horizon/" }
  ];
  const investingFaqs = [
    { question: "\u8FD9\u91CC\u4F1A\u7ED9\u80A1\u7968\u4E70\u5356\u5EFA\u8BAE\u5417\uFF1F", answer: "\u4E0D\u4F1A\u3002XBSTACK Investing \u53EA\u505A\u4E2A\u4EBA\u89C2\u5BDF\u3001\u5DE5\u5177\u65B9\u6CD5\u3001\u9519\u8BEF\u590D\u76D8\u548C\u98CE\u9669\u8FB9\u754C\u8BB0\u5F55\uFF0C\u4E0D\u6784\u6210\u4EFB\u4F55\u6295\u8D44\u5EFA\u8BAE\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u628A\u590D\u5229\u3001FIRE\u3001\u8D22\u62A5\u548C\u9605\u8BFB\u653E\u5728\u4E00\u8D77\uFF1F", answer: "\u590D\u5229\u8D1F\u8D23\u8D44\u4EA7\u589E\u957F\u6A21\u578B\uFF0C\u8D22\u62A5\u8D1F\u8D23\u4FE1\u606F\u8FC7\u6EE4\uFF0C\u9605\u8BFB\u8D1F\u8D23\u4FEE\u6B63\u5224\u65AD\uFF0C\u4E09\u8005\u5171\u540C\u670D\u52A1\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u3002" },
    { question: "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u54EA\u91CC\u5F00\u59CB\uFF1F", answer: "\u5148\u4ECE\u590D\u5229\u8BA1\u7B97\u5668\u548C Horizon \u5165\u53E3\u5F00\u59CB\uFF0C\u518D\u770B\u7231\u8D22\u62A5\u5DE5\u5177\u548C\u5177\u4F53\u6295\u8D44\u590D\u76D8\uFF0C\u4E0D\u8981\u76F4\u63A5\u4ECE\u5355\u7BC7\u6301\u4ED3\u8BB0\u5F55\u5F00\u59CB\u3002" }
  ];
  const investingInternalLinks = [
    ...investingStartRoutes,
    ...sortedPosts.slice(0, 8).map((post) => ({ title: post.data.title, href: post.data.category === "reading" ? `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/` : `/investing/${post.id.replace(/\.(md|mdx)$/, "")}/`, desc: post.data.description }))
  ];
  const investingSchema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://www.xbstack.com/investing/#collection", name: title, description, url: "https://www.xbstack.com/investing/", inLanguage: "zh-CN", isPartOf: { "@id": "https://www.xbstack.com/#website" }, about: ["\u590D\u5229\u6295\u8D44", "\u6295\u8D44\u590D\u76D8", "FIRE", "\u8D22\u62A5\u5206\u6790", "\u98CE\u9669\u7BA1\u7406"].map((name) => ({ "@type": "Thing", name })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.xbstack.com/" }, { "@type": "ListItem", position: 2, name: "Investing", item: "https://www.xbstack.com/investing/" }] },
    { "@context": "https://schema.org", "@type": "ItemList", name: "XBSTACK Investing articles and tools", itemListElement: investingInternalLinks.slice(0, 12).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://www.xbstack.com${item.href}` })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: investingFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
  ];
  const investingGeo = {
    summary: "XBSTACK Investing \u662F\u590D\u5229\u6295\u8D44\u3001FIRE\u3001\u8D22\u62A5\u5206\u6790\u548C\u4E2A\u4EBA\u6295\u8D44\u590D\u76D8\u5165\u53E3\u3002\u9875\u9762\u53EA\u8BB0\u5F55\u5C0F\u767D\u7684\u89C2\u5BDF\u3001\u9519\u8BEF\u3001\u98CE\u9669\u8FB9\u754C\u548C\u5DE5\u5177\u65B9\u6CD5\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\uFF0C\u4E5F\u4E0D\u63D0\u4F9B\u4E70\u5356\u70B9\u3002",
    questions: ["XBSTACK Investing \u662F\u5426\u63D0\u4F9B\u80A1\u7968\u4E70\u5356\u5EFA\u8BAE\uFF1F", "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u590D\u5229\u8BA1\u7B97\u5668\u3001AI \u8D22\u62A5\u5DE5\u5177\u8FD8\u662F\u6295\u8D44\u590D\u76D8\u5F00\u59CB\uFF1F", "\u6295\u8D44\u6587\u7AE0\u5982\u4F55\u6309\u5F53\u65F6\u5224\u65AD\u3001\u540E\u6765\u7ED3\u679C\u548C\u4E0B\u6B21\u89C4\u5219\u6765\u590D\u76D8\uFF1F"],
    entities: ["XBSTACK Investing", "\u590D\u5229\u6295\u8D44", "FIRE", "\u6295\u8D44\u590D\u76D8", "\u8D22\u62A5\u5206\u6790", "AI \u8D22\u62A5\u5DE5\u5177", "\u590D\u5229\u8BA1\u7B97\u5668", "\u98CE\u9669\u7BA1\u7406", "\u4ED3\u4F4D\u89C4\u5219"],
    links: investingInternalLinks.map((item) => ({ title: item.title, href: item.href, description: item.desc }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": investingSchema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> <div class="absolute inset-0 bg-[radial-gradient(#80808033_1px,transparent_1px)] bg-[size:40px_40px] opacity-100"></div> </div> ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": investingGeo.summary, "questions": investingGeo.questions, "entities": investingGeo.entities, "links": investingGeo.links })} <main class="relative z-10 pt-40 pb-24 min-h-screen"> <header class="container mx-auto px-4 mb-24 text-center"> <nav class="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/horizon/" class="hover:text-orange-500 transition-colors">Horizon</a> <span class="opacity-30">/</span> <span class="text-orange-500">Investing</span> </nav> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none font-brand">Investing / <span class="text-orange-500">实战</span></h1> <div class="max-w-3xl mx-auto space-y-6"> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-6">
" 拒绝预测市场，拥抱逻辑确定性。记录真实的复利实验。"
</p> </div> </header> <section class="container mx-auto px-4 max-w-6xl mb-16"> <div class="p-8 md:p-10 rounded-[40px] bg-orange-500/5 border border-orange-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Start Here</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">投资内容从哪里开始？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-8">这里不是荐股页。先用工具理解复利和财报，再看复盘记录，最后回到长期资产系统。</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${investingStartRoutes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-colors block"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </div> </div> </section> <div class="container mx-auto px-4 max-w-[1440px]"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-16"> <div class="lg:col-span-3 space-y-12"> <div class="flex items-center gap-8 mb-12"> <h3 class="text-sm font-black text-slate-400 uppercase tracking-[0.4em] italic whitespace-nowrap">实战审计流 / AUDIT STREAM</h3> <div class="h-px w-full bg-gradient-to-r from-orange-500/20 via-slate-200 dark:via-white/5 to-transparent"></div> </div> <div class="grid gap-8"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> ${sortedPosts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic font-medium">正在同步投资数据... Loading Assets.</div>`} ${!selectedCategory && readingSupportPosts.length > 0 && renderTemplate`<section class="p-8 rounded-[40px] bg-sky-500/5 border border-sky-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-sky-500 mb-3">Reading Support</p> <h2 class="text-2xl font-black tracking-tight text-slate-950 dark:text-white mb-4">阅读只做投资复盘的辅助，不和实战记录混排</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-6">Investing 主列表优先保留复利、工具和真实复盘；阅读文章放在这里，作用是修正判断模型，而不是替代投资记录。</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${readingSupportPosts.map((post) => renderTemplate`<a${addAttribute(`/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-colors block"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${post.data.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">${post.data.description}</p> </a>`)} </div> </section>`} </div> <aside class="lg:col-span-1"> <div class="sticky top-40"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": allTags, "categories": categoriesWithCount, "allBlogCount": allInvestingPosts.length })} </div> </aside> </div> </div> <section id="faq" class="container mx-auto px-4 max-w-6xl mt-20"> <div class="p-8 md:p-10 rounded-[40px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">关于 Investing</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${investingFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/index.astro";
const $$url = "/investing/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
