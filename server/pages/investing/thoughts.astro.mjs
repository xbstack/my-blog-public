import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderComponent, b as addAttribute, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Lb3doMJi.mjs';
import { $ as $$BlogListCard } from '../../chunks/BlogListCard_BXcEr3EY.mjs';
import { $ as $$AuthorSidebar, s as slugify } from '../../chunks/authorSidebar_iCvki5ec.mjs';
import { FaServer, FaMicrochip } from 'react-icons/fa';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { categories, lang = "zh-CN" } = Astro2.props;
  const isEnglish = lang === "en";
  const localizeRoute = (path) => isEnglish && path.startsWith("/") ? `/en${path}` : path;
  const getCategoryUrl = (slug) => {
    if (["ai", "dev", "nas", "devtools", "web", "agent", "mcp", "langgraph", "workflow"].includes(slug)) {
      const map = {
        "ai": "agent",
        "dev": "notes",
        "nas": "practice",
        "devtools": "tools",
        "web": "web",
        "agent": "agent",
        "mcp": "mcp",
        "langgraph": "langgraph",
        "workflow": "workflow"
      };
      return `/ai/${map[slug] || slug}/`;
    }
    if (["finance", "investing", "reading", "roadmap", "compound", "fire", "us-stocks", "thoughts", "horizon"].includes(slug)) {
      if (slug === "reading") return `/horizon/reading/`;
      if (slug === "thoughts") return `/investing/thoughts/`;
      return `/investing/`;
    }
    if (["outdoor", "hiking", "photo", "gear", "reading-life"].includes(slug)) {
      const map = {
        "hiking": "hiking",
        "outdoor": "hiking",
        "photo": "photo",
        "gear": "gear",
        "reading-life": "reading"
      };
      return `/life/${map[slug] || slug}/`;
    }
    return `/ai/`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full space-y-8"> <!-- 作者卡片 --> ${renderComponent($$result, "AuthorSidebar", $$AuthorSidebar, { "lang": lang })} <!-- 分类模块：水玻璃背板 --> <div class="liquid-card p-8 rounded-[35px]"> <div class="flex items-center gap-3 mb-8"> <span class="w-1.5 h-4 bg-orange-500 rounded-full"></span> <h3 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] italic">知识分类 / Categories</h3> </div> <ul class="space-y-2"> ${categories.map((category) => {
    const isCountCategory = typeof category === "object" && "name" in category;
    const name = isCountCategory ? category.name : category;
    const count = isCountCategory ? category.count : "";
    const slug = isCountCategory ? category.slug : slugify(name);
    const finalHref = localizeRoute(getCategoryUrl(slug));
    const isActive = Astro2.url.pathname.startsWith(finalHref);
    return renderTemplate`<li> <a${addAttribute(finalHref, "href")}${addAttribute(`flex items-center justify-between p-3 rounded-2xl border transition-all duration-500 group/item ${isActive ? "bg-orange-500/10 border-orange-500/30 shadow-inner" : "bg-white/30 dark:bg-white/5 border-transparent hover:border-orange-500/30 hover:bg-white dark:hover:bg-slate-800"}`, "class")}> <span${addAttribute(`text-xs font-bold transition-colors uppercase tracking-wider ${isActive ? "text-orange-500" : "text-slate-700 dark:text-slate-200 group-hover/item:text-orange-500"}`, "class")}> ${name} </span> <span${addAttribute(`text-[10px] font-mono font-black transition-opacity ${isActive ? "text-orange-500 opacity-100" : "text-slate-600 dark:text-slate-300 opacity-80"}`, "class")}> ${count?.toString().padStart(2, "0")} </span> </a> </li>`;
  })} </ul> </div>  <div class="liquid-card p-8 rounded-[35px] relative overflow-hidden group"> <div class="flex items-center gap-3 mb-6"> <span class="w-1.5 h-4 bg-emerald-500 rounded-full animate-pulse"></span> <h3 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] italic">系统状态 / System</h3> </div> <div class="space-y-4">  <a href="https://bandwagonhost.com/aff.php?aff=80687" target="_blank" class="block group/node"> <div class="flex justify-between items-end mb-1"> <div class="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 dark:text-slate-300"> ${renderComponent($$result, "FaServer", FaServer, { "className": "text-emerald-500" })} <span>Node_CN2_GIA</span> </div> <span class="text-[10px] font-mono font-bold text-emerald-500">ONLINE</span> </div> <div class="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"> <div class="h-full bg-emerald-500 w-[98%] group-hover/node:animate-pulse"></div> </div> <div class="flex justify-between mt-1 text-[10px] font-mono text-slate-600 dark:text-slate-300"> <span>Latency: 14ms</span> <span>Load: 12%</span> </div> </a>  <a href="https://u.jd.com/J6DLEKH" target="_blank" class="block group/node"> <div class="flex justify-between items-end mb-1"> <div class="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 dark:text-slate-300"> ${renderComponent($$result, "FaMicrochip", FaMicrochip, { "className": "text-blue-500" })} <span>Storage_Cluster</span> </div> <span class="text-[10px] font-mono font-bold text-blue-500">ACTIVE</span> </div> <div class="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"> <div class="h-full bg-blue-500 w-[45%] group-hover/node:w-[60%] transition-all duration-1000"></div> </div> <div class="flex justify-between mt-1 text-[10px] font-mono text-slate-600 dark:text-slate-300"> <span>Used: 8TB</span> <span>Free: 12TB</span> </div> </a> </div> </div> </div>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/Sidebar.astro", void 0);

const $$Thoughts = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("notes", ({ data }) => !data.draft && data.hub === "thinking");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const categoriesWithCount = [
    { name: "\u7CFB\u7EDF\u601D\u8003", slug: "thoughts", count: allPosts.length }
  ];
  const allTags = [...new Set(allPosts.flatMap((post) => post.data.tags || []))].slice(0, 20);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thinking | \u7CFB\u7EDF\u601D\u8003\u3001\u6570\u5B57\u4E3B\u6743\u4E0E\u5168\u6808\u8FDB\u9636 - XBSTACK", "description": "XBSTACK Thinking \u8BB0\u5F55\u5C0F\u767D\u5173\u4E8E\u6570\u5B57\u4E3B\u6743\u3001\u6CE8\u610F\u529B\u7BA1\u7406\u3001\u4E2A\u4EBA\u7CFB\u7EDF\u548C\u72EC\u7ACB\u5F00\u53D1\u7684\u957F\u671F\u5FC3\u6CD5\u6587\u7AE0\u3002\u8FD9\u91CC\u4E0D\u662F\u788E\u7247\u65E5\u8BB0\uFF0C\u800C\u662F\u53EF\u590D\u76D8\u3001\u53EF\u641C\u7D22\u3001\u53EF\u7EE7\u7EED\u8FED\u4EE3\u7684\u7CFB\u7EDF\u601D\u8003\u3002" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> <main class="relative z-10 pt-40 pb-24 min-h-screen"> <header class="container mx-auto px-4 mb-24 text-center"> <nav class="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-purple-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/horizon/" class="hover:text-purple-500 transition-colors">Horizon</a> <span class="opacity-30">/</span> <span class="text-purple-500">Thinking</span> </nav> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none font-brand">Thinking / <span class="text-purple-500">深思</span></h1> <div class="max-w-3xl mx-auto space-y-6"> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-6">
" 在碎片化时代，构建属于自己的操作系统。"
</p> </div> </header> <div class="container mx-auto px-4 max-w-[1440px]"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-16"> <div class="lg:col-span-3 space-y-12"> <div class="grid gap-8"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> ${sortedPosts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic font-medium">正在进行系统级反思... 更多思考内容正在同步。</div>`} </div> <aside class="lg:col-span-1"> <div class="sticky top-40"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": allTags, "categories": categoriesWithCount, "allBlogCount": allPosts.length })} </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/thoughts.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/thoughts.astro";
const $$url = "/investing/thoughts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thoughts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
