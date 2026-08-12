import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_CEdkLuU4.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lensPosts = await getCollection("lens", ({ data }) => !data.draft && data.lang !== "en");
  const horizonPosts = await getCollection("horizon", ({ data }) => !data.draft && data.lang !== "en");
  const getSafeTime = (dateVal) => {
    if (!dateVal) return 0;
    const time = new Date(dateVal).getTime();
    return Number.isNaN(time) ? 0 : time;
  };
  const sortByTime = (posts) => [...posts].sort(
    (a, b) => getSafeTime(b.data.createdAt) - getSafeTime(a.data.createdAt)
  );
  const getImageSrc = (image) => image?.src || (typeof image === "string" ? image : void 0) || "/assets/covers/outdoor/guizhou-hidden-trails.svg";
  const OUTDOOR_HUBS = /* @__PURE__ */ new Set(["hiking", "outdoor", "photo", "gear", "recovery"]);
  const TECH_HUBS = /* @__PURE__ */ new Set(["infrastructure", "nas", "workflow", "dev", "ai", "mcp"]);
  const OUTDOOR_KEYWORDS = /户外|徒步|路线|高坡|黔灵山|贵阳|贵州|草海|雪山|峡谷|风车|草原|自驾|摄影|夜爬|下撤|海拔|背包|雨衣|头灯|登山鞋|无人机/i;
  const GEAR_KEYWORDS = /户外装备|装备|摄影|无人机|背包|鞋|雨衣|头灯|手电|EDC|Garmin|HHKB|键盘|gear|photo/i;
  const getPostText = (post) => `${post.data.title || ""} ${post.data.description || ""} ${post.data.category || ""} ${post.data.hub || ""} ${(post.data.tags || []).join(" ")}`;
  const isTechnicalLensPost = (post) => {
    const hub = String(post.data.hub || "").toLowerCase();
    const text = getPostText(post);
    return TECH_HUBS.has(hub) || /Docker|VPS|NAS|MCP|Agent|AI 工作流|基础设施|私有云/i.test(text);
  };
  const isOutdoorPost = (post) => {
    if (isTechnicalLensPost(post)) return false;
    const category = String(post.data.category || "").toLowerCase();
    const hub = String(post.data.hub || "").toLowerCase();
    return category === "outdoor" || OUTDOOR_HUBS.has(hub) || OUTDOOR_KEYWORDS.test(getPostText(post));
  };
  const isGearPost = (post) => {
    if (isTechnicalLensPost(post)) return false;
    const category = String(post.data.category || "").toLowerCase();
    const hub = String(post.data.hub || "").toLowerCase();
    return category === "gear" || hub === "gear" || GEAR_KEYWORDS.test(getPostText(post));
  };
  const toLifeCard = (post) => ({
    title: post.data.title,
    desc: post.data.description,
    date: post.data.createdAt,
    image: getImageSrc(post.data.image),
    href: `/life/${post.id.replace(/\.(md|mdx)$/, "")}/`,
    tag: post.data.hub === "gear" ? "\u88C5\u5907\u5B9E\u6D4B" : post.data.hub === "photo" ? "\u6444\u5F71\u89C2\u5BDF" : post.data.category === "outdoor" ? "\u6237\u5916\u8DEF\u7EBF" : "\u73B0\u573A\u8BB0\u5F55"
  });
  const toReadingCard = (post) => ({
    title: post.data.title,
    desc: post.data.description,
    date: post.data.createdAt,
    href: `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`,
    tag: "\u9605\u8BFB\u7B14\u8BB0"
  });
  const outdoorPosts = sortByTime(
    lensPosts.filter(isOutdoorPost)
  ).slice(0, 6).map(toLifeCard);
  const gearPosts = sortByTime(
    lensPosts.filter(isGearPost)
  ).slice(0, 4).map(toLifeCard);
  const readingPosts = sortByTime(
    horizonPosts.filter((post) => post.data.category === "reading")
  ).slice(0, 4).map(toReadingCard);
  const title = "\u6237\u5916\u751F\u6D3B\uFF1A\u8D35\u5DDE\u5F92\u6B65\u3001\u81EA\u9A7E\u3001\u88C5\u5907\u6444\u5F71\u3001\u9605\u8BFB\u4E0E\u8FD0\u52A8\u6062\u590D - XBSTACK";
  const description = "XBSTACK \u6237\u5916\u751F\u6D3B\u8BB0\u5F55\u5C0F\u767D\u5728\u8D35\u5DDE\u548C\u66F4\u8FDC\u5730\u65B9\u7684\u5F92\u6B65\u8DEF\u7EBF\u3001\u81EA\u9A7E\u8BB0\u5F55\u3001\u88C5\u5907\u6444\u5F71\u3001\u6237\u5916\u76F8\u5173\u9605\u8BFB\u4E0E\u8FD0\u52A8\u6062\u590D\u3002\u8FD9\u91CC\u4E0D\u662F\u65C5\u6E38\u653B\u7565\u5408\u96C6\uFF0C\u800C\u662F\u7528\u8EAB\u4F53\u3001\u8DEF\u7EBF\u3001\u5929\u6C14\u548C\u9605\u8BFB\u6821\u51C6\u957F\u671F\u5224\u65AD\u3002";
  const keywords = "\u6237\u5916\u751F\u6D3B, \u8D35\u5DDE\u5F92\u6B65, \u8D35\u9633\u5F92\u6B65, \u8D35\u5DDE\u6237\u5916, \u81EA\u9A7E\u8BB0\u5F55, \u88C5\u5907\u6444\u5F71, \u6237\u5916\u88C5\u5907, \u9ED4\u7075\u5C71\u591C\u722C, \u9AD8\u5761\u8349\u539F, \u6237\u5916\u9605\u8BFB, \u8FD0\u52A8\u6062\u590D, XBSTACK, \u5C0F\u767D";
  const routeCards = [
    { title: "\u8D35\u5DDE\u6237\u5916", desc: "\u9ED4\u7075\u5C71\u591C\u722C\u3001\u9AD8\u5761\u8349\u539F\u3001\u8D35\u5DDE\u5468\u8FB9\u8DEF\u7EBF\u548C\u771F\u5B9E\u4F53\u611F\u8BB0\u5F55\u3002", href: "/life/hiking/", tag: "Guizhou Outdoor" },
    { title: "\u5F92\u6B65\u8DEF\u7EBF", desc: "\u8DEF\u7EBF\u96BE\u5EA6\u3001\u8DEF\u51B5\u3001\u5929\u6C14\u3001\u8865\u7ED9\u3001\u98CE\u9669\u548C\u9002\u5408\u4EBA\u7FA4\u3002", href: "/life/hiking/", tag: "Hiking Routes" },
    { title: "\u81EA\u9A7E\u8BB0\u5F55", desc: "\u5468\u8FB9\u81EA\u9A7E\u3001\u8DEF\u51B5\u3001\u505C\u8F66\u3001\u6CBF\u9014\u89C2\u5BDF\u548C\u51FA\u884C\u590D\u76D8\u3002", href: "/life/road-trip/", tag: "Road Trips" },
    { title: "\u88C5\u5907\u6444\u5F71", desc: "\u80CC\u5305\u3001\u978B\u670D\u3001\u6444\u5F71\u3001\u65E0\u4EBA\u673A\u548C\u6237\u5916\u5DE5\u5177\u7684\u771F\u5B9E\u4F7F\u7528\u3002", href: "/life/gear/", tag: "Gear & Photo" },
    { title: "\u8FD0\u52A8\u6062\u590D", desc: "\u7FBD\u6BDB\u7403\u3001\u591C\u722C\u6062\u590D\u3001\u7761\u7720\u3001\u8EAB\u4F53\u72B6\u6001\u548C\u957F\u671F\u7CBE\u529B\u7BA1\u7406\u3002", href: "/life/badminton/", tag: "Recovery" }
  ];
  const routeIndex = [
    { title: "\u8D35\u9633\u5468\u8FB9\u534A\u65E5", desc: "\u4E0B\u73ED\u540E\u80FD\u4E0D\u80FD\u8D70\u3001\u505C\u8F66\u662F\u5426\u65B9\u4FBF\u3001\u5929\u9ED1\u524D\u80FD\u4E0D\u80FD\u64A4\u3002", href: "/life/gaopo-cloud-top-offline/" },
    { title: "\u8D35\u5DDE\u7701\u5185\u4E00\u65E5", desc: "\u5468\u672B\u5F53\u5929\u5F80\u8FD4\uFF0C\u91CD\u70B9\u770B\u8DEF\u51B5\u3001\u5929\u6C14\u3001\u8865\u7ED9\u548C\u4F53\u529B\u6D88\u8017\u3002", href: "/life/guizhou-hidden-trails/" },
    { title: "\u4E24\u5929\u4E00\u591C\u8DEF\u7EBF", desc: "\u9002\u5408\u81EA\u9A7E\u3001\u9732\u8425\u3001\u6444\u5F71\u548C\u6DF1\u5EA6\u8DEF\u7EBF\u590D\u76D8\u3002", href: "/life/road-trip/" },
    { title: "\u96E8\u5929\u64A4\u9000\u65B9\u6848", desc: "\u8D35\u5DDE\u5929\u6C14\u591A\u53D8\uFF0C\u64A4\u9000\u8DEF\u7EBF\u548C\u5907\u9009\u73A9\u6CD5\u6BD4\u786C\u51B2\u66F4\u91CD\u8981\u3002", href: "/life/weining-caohai-reset/" },
    { title: "\u73A9\u6C34\u6F02\u6D41\u5B63", desc: "\u590F\u5B63\u9AD8\u6D41\u91CF\u4E3B\u9898\uFF0C\u5148\u7528\u5173\u5CAD\u5CE1\u8C37\u548C\u4EB2\u6C34\u8DEF\u7EBF\u627F\u63A5\u3002", href: "/life/guanling-ice-mortar-preview/" },
    { title: "\u9AD8\u6D77\u62D4\u8FDC\u7EBF", desc: "\u96C5\u62C9\u3001\u54C8\u5DF4\u3001\u96EA\u7EBF\u548C\u957F\u7EBF\u5F92\u6B65\u7684\u88C5\u5907\u5197\u4F59\u3002", href: "/life/yala-summit/" }
  ];
  const lifeFaqs = [
    { question: "XBSTACK \u6237\u5916\u751F\u6D3B\u4E3B\u8981\u5199\u4EC0\u4E48\uFF1F", answer: "\u4E3B\u8981\u8BB0\u5F55\u8D35\u5DDE\u5F92\u6B65\u3001\u8D35\u9633\u5468\u8FB9\u8DEF\u7EBF\u3001\u81EA\u9A7E\u3001\u88C5\u5907\u6444\u5F71\u3001\u8FD0\u52A8\u6062\u590D\u548C\u6237\u5916\u9605\u8BFB\uFF0C\u4E0D\u5199\u6210\u7EAF\u65C5\u6E38\u653B\u7565\u3002" },
    { question: "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u54EA\u6761\u8DEF\u7EBF\u5F00\u59CB\uFF1F", answer: "\u5982\u679C\u5728\u8D35\u9633\uFF0C\u5148\u770B\u9ED4\u7075\u5C71\u591C\u722C\u548C\u9AD8\u5761\u8349\u539F\u8FD9\u7C7B\u534A\u65E5\u8DEF\u7EBF\uFF1B\u5982\u679C\u662F\u8D35\u5DDE\u5468\u8FB9\u6E38\uFF0C\u518D\u770B\u8349\u6D77\u3001\u5173\u5CAD\u3001\u6F02\u6D41\u548C\u4E24\u5929\u4E00\u591C\u81EA\u9A7E\u3002" },
    { question: "\u6237\u5916\u5185\u5BB9\u548C AI \u6280\u672F\u7AD9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u6237\u5916\u662F XBSTACK \u7684\u771F\u5B9E\u751F\u6D3B\u8F93\u5165\uFF0C\u7528\u8EAB\u4F53\u3001\u8DEF\u7EBF\u3001\u5929\u6C14\u548C\u98CE\u9669\u611F\u77E5\u6821\u51C6\u957F\u671F\u5224\u65AD\uFF0C\u800C\u4E0D\u662F\u4E3A\u4E86\u88C5\u9970\u4EBA\u8BBE\u3002" }
  ];
  const recoveryItems = [
    { title: "\u7FBD\u6BDB\u7403", desc: "\u4E0D\u518D\u5355\u72EC\u5360\u5BFC\u822A\uFF0C\u800C\u662F\u5F52\u5165\u8FD0\u52A8\u6062\u590D\uFF1A\u4F53\u80FD\u3001\u7206\u53D1\u3001\u5173\u8282\u548C\u8282\u594F\u3002" },
    { title: "\u591C\u722C\u6062\u590D", desc: "\u9ED4\u7075\u5C71\u3001\u722C\u5761\u3001\u51FA\u6C57\u3001\u7761\u7720\u548C\u7B2C\u4E8C\u5929\u5DE5\u4F5C\u72B6\u6001\u3002" },
    { title: "\u7761\u7720\u6062\u590D", desc: "\u548C Lunest \u5F62\u6210\u547C\u5E94\uFF0C\u628A\u8EAB\u4F53\u72B6\u6001\u4E5F\u7EB3\u5165\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u3002" },
    { title: "\u4E45\u5750\u5BF9\u51B2", desc: "\u5F00\u53D1\u8005\u957F\u671F\u5750\u5728\u5C4F\u5E55\u524D\uFF0C\u9700\u8981\u6709\u7A33\u5B9A\u7684\u8EAB\u4F53\u8F93\u5165\u3002" }
  ];
  const fallbackOutdoor = [
    { title: "\u8D35\u5DDE\u63A2\u79D8\uFF1A\u5229\u7528\u5730\u7406\u9006\u5411\u5DE5\u7A0B\u5BFB\u627E\u88AB\u7B97\u6CD5\u9057\u5FD8\u7684\u5F92\u6B65\u79D8\u5883", desc: "\u4ECE\u7B49\u9AD8\u7EBF\u3001\u536B\u661F\u5730\u56FE\u548C\u8DEF\u7EBF\u98CE\u9669\u51FA\u53D1\uFF0C\u8BB0\u5F55\u8D35\u5DDE\u975E\u6807\u5F92\u6B65\u8DEF\u7EBF\u3002", href: "/life/guizhou-hidden-trails/", tag: "\u8D35\u5DDE\u5F92\u6B65" },
    { title: "\u96C5\u62C9\u795E\u5C71\u5F92\u6B65\u5B9E\u5F55\uFF1A5400 \u7C73\u4FA7\u810A\u7684\u65E5\u7167\u91D1\u5C71\u4E0E\u5168\u6808\u751F\u5B58\u5BA1\u8BA1", desc: "\u9AD8\u6D77\u62D4\u3001\u88C5\u5907\u5197\u4F59\u3001\u79BB\u7EBF\u5BFC\u822A\u548C\u771F\u5B9E\u8EAB\u4F53\u53CD\u9988\u3002", href: "/life/yala-summit/", tag: "\u957F\u7EBF\u5F92\u6B65" }
  ];
  const lifeInternalLinks = [
    ...routeCards.map((item) => ({ title: item.title, href: item.href, description: item.desc })),
    ...routeIndex.map((item) => ({ title: item.title, href: item.href, description: item.desc })),
    ...outdoorPosts.slice(0, 4).map((item) => ({ title: item.title, href: item.href, description: item.desc })),
    ...gearPosts.slice(0, 3).map((item) => ({ title: item.title, href: item.href, description: item.desc }))
  ];
  const lifeGeo = {
    summary: "XBSTACK \u6237\u5916\u751F\u6D3B\u662F\u5C0F\u767D\u7684\u8D35\u5DDE\u5F92\u6B65\u3001\u81EA\u9A7E\u3001\u88C5\u5907\u6444\u5F71\u3001\u8FD0\u52A8\u6062\u590D\u548C\u6237\u5916\u9605\u8BFB\u5165\u53E3\u3002\u9875\u9762\u5F3A\u8C03\u8DEF\u7EBF\u3001\u5929\u6C14\u3001\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u98CE\u9669\u3001\u4E0B\u64A4\u548C\u8EAB\u4F53\u53CD\u9988\uFF0C\u4E0D\u505A\u7A7A\u6CDB\u65C5\u6E38\u653B\u7565\u3002",
    questions: ["XBSTACK \u6237\u5916\u751F\u6D3B\u4E3B\u8981\u5199\u54EA\u4E9B\u8D35\u5DDE\u8DEF\u7EBF\uFF1F", "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u8D35\u9633\u5468\u8FB9\u534A\u65E5\u8DEF\u7EBF\u8FD8\u662F\u8D35\u5DDE\u7701\u5185\u4E00\u65E5\u8DEF\u7EBF\u5F00\u59CB\uFF1F", "\u6237\u5916\u6587\u7AE0\u4E3A\u4EC0\u4E48\u8981\u5199\u5929\u6C14\u3001\u8DEF\u51B5\u3001\u8865\u7ED9\u548C\u4E0B\u64A4\uFF1F", "\u6237\u5916\u751F\u6D3B\u548C\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"],
    entities: ["XBSTACK \u6237\u5916\u751F\u6D3B", "\u8D35\u5DDE\u5F92\u6B65", "\u8D35\u9633\u5F92\u6B65", "\u9ED4\u7075\u5C71\u591C\u722C", "\u9AD8\u5761\u8349\u539F", "\u5A01\u5B81\u8349\u6D77", "\u5173\u5CAD\u5CE1\u8C37", "\u6237\u5916\u88C5\u5907", "\u8FD0\u52A8\u6062\u590D", "Lunest"],
    links: lifeInternalLinks
  };
  const lifeSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: "https://www.xbstack.com/life/",
    description,
    inLanguage: "zh-Hans",
    isPartOf: { "@id": "https://www.xbstack.com/#website" },
    about: [
      { "@type": "Thing", name: "Guizhou Hiking" },
      { "@type": "Thing", name: "Outdoor Life" },
      { "@type": "Thing", name: "Outdoor Gear" },
      { "@type": "Thing", name: "Road Trips" },
      { "@type": "Thing", name: "Sports Recovery" },
      { "@type": "Thing", name: "Reading Notes" }
    ],
    hasPart: lifeInternalLinks.slice(0, 12).map((item) => ({ "@type": "WebPage", name: item.title, url: `https://www.xbstack.com${item.href}`, description: item.description })),
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.xbstack.com/" }, { "@type": "ListItem", position: 2, name: "\u6237\u5916\u751F\u6D3B", item: "https://www.xbstack.com/life/" }] },
    mainEntity: lifeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": lifeSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": lifeGeo.summary, "questions": lifeGeo.questions, "entities": lifeGeo.entities, "links": lifeGeo.links })} ${maybeRenderHead()}<main class="relative z-10 text-slate-900 dark:text-white pt-32 pb-24 min-h-screen"> <section class="container mx-auto px-6 max-w-6xl"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-12"> <a href="/" class="hover:text-blue-500 transition-colors">首页</a> <span class="opacity-30">/</span> <span class="text-blue-500">户外生活</span> </nav> <header class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end border-b border-slate-200 dark:border-white/10 pb-16 mb-16"> <div> <p class="text-xs font-black uppercase tracking-[0.35em] text-blue-500 mb-6">Outdoor Life</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight italic leading-none mb-8">户外生活</h1> <p class="text-xl md:text-2xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">
户外不是逃离工作，而是把身体、时间、天气、路线和判断力重新放回现实世界。
</p> </div> <p class="text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">
这里记录贵州徒步、自驾路线、装备摄影、户外相关阅读和运动恢复。它不是旅游攻略合集，也不是生活流水账，而是 XBSTACK 长期资产系统里的真实生活输入。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20"> ${routeCards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-6 rounded-[28px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> <span class="text-[9px] font-black uppercase tracking-[0.22em] text-blue-500">${item.tag}</span> <h2 class="text-xl font-black mt-4 mb-3 group-hover:text-blue-500 transition-colors">${item.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </section> <div class="space-y-24"> <section> <div class="flex items-end justify-between gap-6 mb-10"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Latest Outdoor Notes</p> <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">最新户外文章</h2> </div> <a href="/life/hiking/" class="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors">View All</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${(outdoorPosts.length ? outdoorPosts : fallbackOutdoor).map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group rounded-[30px] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> ${item.image && renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-44 object-cover">`} <div class="p-6"> <span class="text-[9px] font-black uppercase tracking-[0.22em] text-blue-500">${item.tag}</span> <h3 class="text-xl font-black leading-tight mt-3 mb-4 group-hover:text-blue-500 transition-colors">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">${item.desc}</p> </div> </a>`)} </div> </section> <section> <div class="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 items-start"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Route Index</p> <h2 class="text-3xl font-black tracking-tight mb-5">贵州路线索引</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">
先按出行半径组织路线，再逐步补真实路书。这个区块用来承接黔灵山、高坡、漂流、雨天撤退和贵州周边自驾内容。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${routeIndex.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[26px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors"> <h3 class="text-lg font-black mb-3">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </div> </div> </section> <section> <div class="flex items-end justify-between gap-6 mb-10"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Gear & Field Notes</p> <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">装备摄影与现场观察</h2> </div> <a href="/life/gear/" class="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors">View Gear</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${(gearPosts.length ? gearPosts : outdoorPosts.slice(0, 4)).map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-7 rounded-[30px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> <span class="text-[9px] font-black uppercase tracking-[0.22em] text-blue-500">${item.tag}</span> <h3 class="text-2xl font-black leading-tight mt-3 mb-4 group-hover:text-blue-500 transition-colors">${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">${item.desc}</p> </a>`)} </div> </section> <section class="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-8 items-start"> <div data-theme-surface="adaptive-reading" class="p-8 md:p-10 rounded-[36px] bg-slate-50 text-slate-950 border border-slate-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 dark:text-blue-300 mb-3">Reading for Outdoor Life</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">和户外有关的阅读</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
阅读不直接变成路线，但会改变我理解风险、身体、自由和长期生活的方式。这里不搬空 Reading 栏目，只挑和户外生活有关的书与笔记做连接。
</p> <div class="space-y-4"> ${readingPosts.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block p-5 rounded-[24px] bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:hover:bg-white/10"> <span class="text-[9px] font-black uppercase tracking-[0.22em] text-blue-500 dark:text-blue-300">${item.tag}</span> <h3 class="text-lg font-black leading-tight text-slate-950 dark:text-white mt-2 mb-2">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">${item.desc}</p> </a>`)} </div> </div> <div class="p-8 md:p-10 rounded-[36px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Sports Recovery</p> <h2 class="text-3xl font-black tracking-tight mb-6">运动恢复</h2> <div class="space-y-4"> ${recoveryItems.map((item) => renderTemplate`<div class="p-5 rounded-[24px] bg-blue-500/5 border border-blue-500/10"> <h3 class="text-lg font-black mb-2">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </div>`)} </div> </div> </section> <section id="faq" class="p-8 md:p-10 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight mb-8">关于 XBSTACK 户外生活</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${lifeFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <section data-theme-surface="adaptive-life-next" class="p-8 rounded-[36px] bg-blue-50/70 text-slate-950 border border-blue-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 mb-3">Next Reading</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">继续看户外人格主线</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <a href="/life/hiking/" class="p-5 rounded-2xl bg-white border border-blue-100 text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-black dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:bg-white/10">贵州徒步路线 →</a> <a href="/life/gear/" class="p-5 rounded-2xl bg-white border border-blue-100 text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-black dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:bg-white/10">装备与摄影 →</a> <a href="/tools/lunest/" class="p-5 rounded-2xl bg-white border border-blue-100 text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-black dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:bg-white/10">睡眠恢复 Lunest →</a> </div> </section> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/index.astro";
const $$url = "/life/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
