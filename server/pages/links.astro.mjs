import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { $ as $$LiquidGlassLess } from '../chunks/LiquidGlassLess_Cxf5e6fF.mjs';
import fs from 'node:fs';
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  let friendsData = { categories: [], links: [] };
  try {
    const jsonPath = "./public/data/friends.json";
    const rawData = fs.readFileSync(jsonPath, "utf8");
    friendsData = JSON.parse(rawData);
  } catch (e) {
    console.error("\u53CB\u94FE\u6570\u636E\u52A0\u8F7D\u5931\u8D25:", e);
  }
  const { categories, links } = friendsData;
  const title = "\u53CB\u60C5\u94FE\u63A5 - XBSTACK \u6D41\u91CF\u4E92\u6362\u4E2D\u5FC3";
  const description = "\u6B22\u8FCE\u7533\u8BF7\u53CB\u60C5\u94FE\u63A5\u4EA4\u6362\uFF0C\u57FA\u4E8E 3000 \u5B57\u957F\u6587\u539F\u5219\uFF0C\u5171\u540C\u5EFA\u8BBE\u786C\u6838\u6280\u672F\u793E\u533A";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-[1400px] mx-auto px-6 pt-32 pb-24">  <div class="flex flex-col items-center mb-24 text-center"> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-6">
FRIENDS <span class="text-sky-500">&</span> LINKS
</h1> <div class="flex flex-col items-center gap-4"> <p class="text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-4">
逻辑置换 · 权重复利
</p>  <div class="flex items-center gap-6 p-4 rounded-3xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm"> <a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" class="hover:scale-110 transition-transform flex items-center gap-2"> <img src="https://www.travellings.cn/assets/logo.gradient.svg" alt="开往-友链接力" class="h-6 opacity-70"> <span class="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">TRAVELLINGS</span> </a> </div> </div> </div>  ${categories.map((cat) => renderTemplate`<div class="mb-24"> <div class="flex items-center gap-6 mb-12"> <h2 class="text-sm font-black text-sky-500 uppercase tracking-[0.6em] whitespace-nowrap"> ${cat.name} </h2> <div class="h-[1px] w-full bg-gradient-to-r from-sky-500/30 to-transparent"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${links.filter((l) => l.category_code === cat.code).map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="group relative"> <div class="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[35px] opacity-0 group-hover:opacity-20 blur transition duration-500"></div> <div class="relative p-8 rounded-[35px] bg-white/70 dark:bg-[#0d1117]/80 border border-slate-200/60 dark:border-white/5 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"> <div class="flex items-center gap-6"> <div class="relative"> <img${addAttribute(link.avatar, "src")}${addAttribute(link.name, "alt")} class="w-16 h-16 rounded-2xl object-cover border-2 border-white dark:border-white/10 shadow-md group-hover:rotate-6 transition-transform" onerror="this.setAttribute('src','/favicon/logo-192x192.png')"> <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-[#0d1117] rounded-full"></div> </div> <div class="flex-1 min-w-0"> <h3 class="text-xl font-black text-slate-900 dark:text-slate-100 truncate mb-1"> ${link.name} </h3> <p class="text-sm font-bold text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed opacity-70"> ${link.description} </p> </div> </div> </div> </a>`)} </div> </div>`)}  <div class="max-w-4xl mx-auto mt-40"> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "wrapperClass": "p-12 md:p-16 rounded-[60px] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#0a0c10]/60 overflow-hidden relative" }, { "default": ($$result3) => renderTemplate`<div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full"></div> <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-10 italic uppercase tracking-tighter">
申请标准 <span class="text-sky-500">/</span> POLICIES
</h2> <div class="grid gap-6 text-base font-bold text-slate-600 dark:text-slate-400 mb-16"> <div class="flex gap-4"> <span class="text-sky-500">01.</span> <p>优先考虑 AI 开发、量化回测及硬核户外类站点。</p> </div> <div class="flex gap-4"> <span class="text-sky-500">02.</span> <p>文章原创度高，单篇平均字数建议在 2000+ 以上。</p> </div> <div class="flex gap-4"> <span class="text-sky-500">03.</span> <p>请先在贵站添加本站友链后再行申请。</p> </div> </div> <div class="p-8 rounded-3xl bg-slate-900/5 dark:bg-white/10 border border-slate-900/5 dark:border-white/10 font-mono text-sm leading-loose"> <div class="space-y-4 text-slate-800 dark:text-slate-200"> <p><span class="text-sky-500 font-black mr-3">NAME:</span> XBSTACK | 小白的个人主权实验场</p> <p><span class="text-sky-500 font-black mr-3">URL:</span> https://www.xbstack.com</p> <p><span class="text-sky-500 font-black mr-3">DESC:</span> 技术复利、资产审计与数字荒原生存指南。</p> </div> </div> ` })} </div> </section> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/links.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/links.astro";
const $$url = "/links/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
