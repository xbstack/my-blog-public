import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Hiking = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "\u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF";
  const actualCategories = ["outdoor", "summit"];
  const collection = "lens";
  const TECH_HUBS = /* @__PURE__ */ new Set(["infrastructure", "nas", "workflow", "dev", "ai", "mcp"]);
  const ROUTE_KEYWORDS = /户外|徒步|高坡|草海|雪山|攀登|路线|峡谷|关岭|雅拉|哈巴|夜爬|下撤|海拔|露营/i;
  const getImageSrc = (image) => image?.src || (typeof image === "string" ? image : void 0) || "/assets/covers/outdoor/guizhou-hidden-trails.svg";
  const posts = (await getCollection(collection, ({ data }) => {
    const hub = String(data.hub || "").toLowerCase();
    const text = `${data.category || ""} ${data.hub || ""} ${data.title || ""} ${data.description || ""} ${(data.tags || []).join(" ")}`;
    if (data.draft || data.lang === "en" || TECH_HUBS.has(hub) || /Docker|VPS|NAS|MCP|Agent|AI 工作流|基础设施|私有云/i.test(text)) return false;
    return actualCategories.includes(data.category) || hub === "hiking" || ROUTE_KEYWORDS.test(text);
  })).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const pageTitle = `${displayTitle} | \u771F\u5B9E\u8DEF\u4E66\u3001\u5929\u6C14\u8DEF\u51B5\u3001\u8865\u7ED9\u4E0B\u64A4 - ${SITE_INFO.SITE_NAME}`;
  const description = "XBSTACK \u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF\uFF1A\u9AD8\u5761\u8349\u539F\u3001\u9ED4\u7075\u5C71\u591C\u722C\u3001\u5A01\u5B81\u8349\u6D77\u3001\u5173\u5CAD\u5CE1\u8C37\u3001\u8D35\u5DDE\u9690\u79D8\u8DEF\u7EBF\u548C\u9AD8\u6D77\u62D4\u8FDC\u7EBF\uFF0C\u4EE5\u5C0F\u767D\u7684\u73B0\u573A\u89C6\u89D2\u8BB0\u5F55\u8DEF\u7EBF\u3001\u8DEF\u51B5\u3001\u4F53\u529B\u3001\u5929\u6C14\u3001\u8865\u7ED9\u3001\u98CE\u9669\u548C\u4E0B\u64A4\u5224\u65AD\u3002";
  const keywords = "\u8D35\u5DDE\u5F92\u6B65, \u8D35\u9633\u5F92\u6B65, \u8D35\u5DDE\u6237\u5916\u8DEF\u7EBF, \u9ED4\u7075\u5C71\u591C\u722C, \u9AD8\u5761\u8349\u539F, \u5A01\u5B81\u8349\u6D77, \u5173\u5CAD\u5CE1\u8C37, \u8D35\u9633\u5468\u8FB9\u5F92\u6B65, \u6237\u5916\u4E0B\u64A4, \u5F92\u6B65\u8865\u7ED9, XBSTACK";
  const routeGroups = [
    { title: "\u8D35\u9633\u5468\u8FB9\u534A\u65E5", desc: "\u4E0B\u73ED\u540E\u80FD\u4E0D\u80FD\u51FA\u53D1\u3001\u505C\u8F66\u662F\u5426\u65B9\u4FBF\u3001\u5929\u9ED1\u524D\u80FD\u4E0D\u80FD\u64A4\u3002", href: "/life/gaopo-cloud-top-offline/" },
    { title: "\u8D35\u5DDE\u7701\u5185\u4E00\u65E5", desc: "\u9002\u5408\u5468\u672B\u5F53\u5929\u5F80\u8FD4\uFF0C\u91CD\u70B9\u770B\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u5929\u6C14\u548C\u4F53\u529B\u6D88\u8017\u3002", href: "/life/guizhou-hidden-trails/" },
    { title: "\u96E8\u5929\u64A4\u9000\u65B9\u6848", desc: "\u8D35\u5DDE\u5929\u6C14\u53D8\u8138\u5FEB\uFF0C\u8DEF\u7EBF\u4EF7\u503C\u4E0D\u53EA\u5728\u98CE\u666F\uFF0C\u4E5F\u5728\u64A4\u9000\u662F\u5426\u6E05\u695A\u3002", href: "/life/weining-caohai-reset/" },
    { title: "\u4EB2\u6C34\u5CE1\u8C37\u8DEF\u7EBF", desc: "\u590F\u5B63\u73A9\u6C34\u3001\u5CE1\u8C37\u3001\u6EAA\u6D41\u548C\u5CA9\u77F3\u5730\u8C8C\uFF0C\u9002\u5408\u4F5C\u4E3A\u6F02\u6D41\u5B63\u5185\u5BB9\u5165\u53E3\u3002", href: "/life/guanling-ice-mortar-preview/" },
    { title: "\u9AD8\u6D77\u62D4\u8FDC\u7EBF", desc: "\u96EA\u7EBF\u3001\u788E\u77F3\u5761\u3001\u7F3A\u6C27\u548C\u88C5\u5907\u5197\u4F59\uFF0C\u9002\u5408\u957F\u7EBF\u5F92\u6B65\u590D\u76D8\u3002", href: "/life/yala-summit/" }
  ];
  const hikingLinks = [
    ...routeGroups.map((item) => ({ title: item.title, href: item.href, description: item.desc })),
    ...posts.slice(0, 7).map((post) => ({ title: post.data.title, href: `/life/${post.id.replace(/\.(md|mdx)$/, "")}/`, description: post.data.description }))
  ];
  const hikingSchema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://www.xbstack.com/life/hiking/#collection", name: pageTitle, description, url: "https://www.xbstack.com/life/hiking/", inLanguage: "zh-CN", isPartOf: { "@id": "https://www.xbstack.com/#website" }, about: ["\u8D35\u5DDE\u5F92\u6B65", "\u8D35\u9633\u5F92\u6B65", "\u6237\u5916\u8DEF\u7EBF", "\u4E0B\u64A4\u5224\u65AD", "\u6237\u5916\u8865\u7ED9"].map((name) => ({ "@type": "Thing", name })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.xbstack.com/" }, { "@type": "ListItem", position: 2, name: "\u6237\u5916\u751F\u6D3B", item: "https://www.xbstack.com/life/" }, { "@type": "ListItem", position: 3, name: "\u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF", item: "https://www.xbstack.com/life/hiking/" }] },
    { "@context": "https://schema.org", "@type": "ItemList", name: "XBSTACK Guizhou hiking routes", itemListElement: hikingLinks.slice(0, 12).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://www.xbstack.com${item.href}` })) }
  ];
  const evidenceChecklist = ["\u5177\u4F53\u5730\u70B9", "\u8DEF\u7EBF\u8017\u65F6", "\u5929\u6C14", "\u8DEF\u51B5", "\u8865\u7ED9", "\u505C\u8F66", "\u4E0B\u64A4\u70B9", "\u8EAB\u4F53\u53CD\u9988", "\u771F\u5B9E\u56FE\u7247"];
  const hikingFaqs = [
    { question: "\u8D35\u5DDE\u5F92\u6B65\u8DEF\u7EBF\u6700\u91CD\u8981\u770B\u4EC0\u4E48\uFF1F", answer: "\u4E0D\u53EA\u770B\u98CE\u666F\uFF0C\u8981\u5148\u770B\u5929\u6C14\u3001\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u505C\u8F66\u548C\u4E0B\u64A4\u70B9\uFF0C\u8D35\u5DDE\u5C71\u533A\u5929\u6C14\u53D8\u5316\u5F88\u5FEB\u3002" },
    { question: "\u591C\u722C\u5185\u5BB9\u4E3A\u4EC0\u4E48\u8981\u5199\u8EAB\u4F53\u53CD\u9988\uFF1F", answer: "\u591C\u722C\u98CE\u9669\u4E0D\u53EA\u5728\u8DEF\u7EBF\uFF0C\u8FD8\u5728\u75B2\u52B3\u3001\u89C6\u7EBF\u3001\u8865\u7ED9\u548C\u4E0B\u5C71\u72B6\u6001\u3002\u8EAB\u4F53\u53CD\u9988\u80FD\u5E2E\u52A9\u8BFB\u8005\u5224\u65AD\u662F\u5426\u9002\u5408\u81EA\u5DF1\u3002" },
    { question: "\u6237\u5916\u6587\u7AE0\u4E3A\u4EC0\u4E48\u4E0D\u5199\u7A7A\u6CDB\u79CD\u8349\uFF1F", answer: "XBSTACK \u7684\u6237\u5916\u5185\u5BB9\u5FC5\u987B\u56DE\u5230\u771F\u5B9E\u8DEF\u7EBF\u3001\u771F\u5B9E\u98CE\u9669\u548C\u771F\u5B9E\u53D6\u820D\uFF0C\u5426\u5219\u5C31\u4F1A\u53D8\u6210\u666E\u901A\u666F\u70B9\u63A8\u8350\u3002" }
  ];
  const hikingGeo = {
    summary: "XBSTACK \u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF\u9875\u6309\u771F\u5B9E\u8DEF\u4E66\u7EC4\u7EC7\u5185\u5BB9\uFF0C\u91CD\u70B9\u8BB0\u5F55\u8D35\u5DDE\u548C\u8D35\u9633\u5468\u8FB9\u8DEF\u7EBF\u7684\u5929\u6C14\u3001\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u505C\u8F66\u3001\u98CE\u9669\u3001\u4E0B\u64A4\u548C\u8EAB\u4F53\u53CD\u9988\u3002",
    questions: ["\u8D35\u9633\u5468\u8FB9\u534A\u65E5\u5F92\u6B65\u8DEF\u7EBF\u600E\u4E48\u9009\uFF1F", "\u8D35\u5DDE\u4E00\u65E5\u5F80\u8FD4\u8DEF\u7EBF\u9700\u8981\u6CE8\u610F\u54EA\u4E9B\u5929\u6C14\u548C\u8865\u7ED9\u95EE\u9898\uFF1F", "\u6237\u5916\u6587\u7AE0\u4E3A\u4EC0\u4E48\u5FC5\u987B\u5199\u4E0B\u64A4\u548C\u8EAB\u4F53\u53CD\u9988\uFF1F"],
    entities: ["\u8D35\u5DDE\u5F92\u6B65", "\u8D35\u9633\u5F92\u6B65", "\u9ED4\u7075\u5C71\u591C\u722C", "\u9AD8\u5761\u8349\u539F", "\u5A01\u5B81\u8349\u6D77", "\u5173\u5CAD\u5CE1\u8C37", "\u96C5\u62C9\u795E\u5C71", "\u54C8\u5DF4\u96EA\u5C71", "\u6237\u5916\u4E0B\u64A4", "\u5F92\u6B65\u8865\u7ED9"],
    links: hikingLinks
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": description, "keywords": keywords, "schemaJsonLd": hikingSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": hikingGeo.summary, "questions": hikingGeo.questions, "entities": hikingGeo.entities, "links": hikingGeo.links })} ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-emerald-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/life/" class="hover:text-emerald-500 transition-colors">户外生活</a> <span class="opacity-30">/</span> <span class="text-emerald-500">贵州户外</span> </nav> <header class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end mb-14"> <div> <p class="text-xs font-black uppercase tracking-[0.35em] text-emerald-500 mb-6">Field Notes</p> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
Guizhou / <span class="text-emerald-500">户外徒步</span> </h1> </div> <p class="text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">
这里不做空泛种草，只记录真实路线：路况、天气、补给、体力、停车、下撤和拍照点。程序员身份只是底色，真正重要的是走到现场以后，身体给出的反馈。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"> ${routeGroups.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-5 rounded-[26px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.035] hover:border-emerald-500/50 transition-all"> <h2 class="text-lg font-black mb-3 group-hover:text-emerald-500 transition-colors">${item.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </section> <section class="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-16"> <div class="p-7 rounded-[32px] bg-emerald-500/5 border border-emerald-500/10"> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">路线证据清单</h2> <div class="flex flex-wrap gap-2"> ${evidenceChecklist.map((item) => renderTemplate`<span class="px-3 py-2 rounded-full bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-xs font-black text-slate-600 dark:text-slate-300">${item}</span>`)} </div> <a href="/tools/lunest/" class="mt-6 inline-block text-xs font-black text-emerald-600 dark:text-emerald-400 underline underline-offset-4">户外恢复和睡眠趋势 → Lunest</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${hikingFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-sm font-black text-slate-900 dark:text-white mb-2">${faq.question}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/life/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group rounded-[34px] overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-2xl"> <div class="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900"> <img${addAttribute(getImageSrc(post.data.image), "src")}${addAttribute(post.data.imageAlt || post.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div> ${post.data.location && renderTemplate`<span class="absolute left-5 bottom-4 text-[9px] font-black uppercase tracking-widest text-white/80">${post.data.location}</span>`} </div> <div class="p-7 flex flex-col flex-1"> <div class="flex items-center gap-3 mb-5"> <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">${post.data.category === "outdoor" ? "\u6237\u5916\u8DEF\u7EBF" : post.data.category || "\u5F92\u6B65"}</span> <span class="text-[9px] font-black text-slate-400 uppercase font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-5 group-hover:text-emerald-500 transition-colors leading-tight italic"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> <div class="mt-auto pt-7 flex items-center justify-between"> <span class="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500 opacity-60 group-hover:opacity-100 transition-all italic">FIELD_LOG</span> <svg class="w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </div> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在整理真实路书...</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/hiking.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/hiking.astro";
const $$url = "/life/hiking/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hiking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
