import { e as createAstro, c as createComponent, m as maybeRenderHead, b as renderComponent, d as addAttribute, r as renderTemplate } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { s as slugify } from './textConverter_B5mDsl3k.mjs';
import { FaServer, FaMicrochip } from 'react-icons/fa';
import { $ as $$AuthorSidebar } from './authorSidebar_DU8A9Shi.mjs';

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

export { $$Sidebar as $ };
