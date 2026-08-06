import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { FaShoppingCart, FaDolly, FaTools } from 'react-icons/fa';
export { renderers } from '../../renderers.mjs';

const $$Gear = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "\u6237\u5916\u88C5\u5907\u4E0E\u5F00\u53D1\u8005 EDC";
  const collection = "lens";
  const posts = (await getCollection(collection, ({ data }) => {
    const text = `${data.title || ""} ${data.description || ""} ${(data.tags || []).join(" ")}`;
    const isOutdoorGear = data.hub === "gear" || /EDC|户外装备|程序员装备|键盘|背包|雨衣|手电|鞋|Garmin|HHKB/i.test(text);
    const isInfrastructure = data.hub === "infrastructure" || /NAS|私有云|AI 工作流|VPS|Docker|Tailscale|n8n|基础设施|自托管/i.test(text);
    return !data.draft && data.lang !== "en" && isOutdoorGear && !isInfrastructure;
  })).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const recommendedGear = [
    { id: "jd_garmin", name: "Garmin Fenix 7X", category: "\u6237\u5916\u5BFC\u822A", link: "https://u.jd.com/lrSirmn" },
    { id: "jd_arcteryx_beta", name: "\u59CB\u7956\u9E1F Beta AR", category: "\u786C\u6838\u51B2\u950B\u8863", link: "https://u.jd.com/lgSiJ35" },
    { id: "headlamp", name: "\u5934\u706F / \u624B\u7535", category: "\u591C\u722C\u4E0B\u64A4", link: "/life/high-altitude-edc/" },
    { id: "powerbank", name: "\u5145\u7535\u5B9D", category: "\u7535\u529B\u5197\u4F59", link: "/life/high-altitude-edc/" },
    { id: "hhkb-pro", name: "HHKB Hybrid", category: "\u5F00\u53D1\u8005\u684C\u9762 EDC", link: "https://u.jd.com/lrYh8QM" },
    { id: "raincoat", name: "\u8F7B\u91CF\u96E8\u8863", category: "\u8D35\u5DDE\u5929\u6C14\u5197\u4F59", link: "/life/high-altitude-edc/" }
  ];
  const pageTitle = `${displayTitle} | \u5B9E\u6218\u8BB0\u5F55 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "\u6574\u7406\u5C0F\u767D\u771F\u5B9E\u4F7F\u7528\u8FC7\u7684\u6237\u5916\u88C5\u5907\u4E0E\u5F00\u53D1\u8005 EDC\uFF0C\u5305\u62EC\u96E8\u8863\u3001\u5934\u706F\u3001\u80CC\u5305\u3001\u978B\u3001Garmin\u3001\u952E\u76D8\u548C\u7535\u529B\u5197\u4F59\uFF0C\u91CD\u70B9\u8BB0\u5F55\u4F7F\u7528\u573A\u666F\u3001\u98CE\u9669\u8FB9\u754C\u4E0E\u957F\u671F\u4F53\u9A8C\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24 relative overflow-hidden text-left"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/life/" class="hover:text-orange-500 transition-colors">Lens</a> <span class="opacity-30">/</span> <span class="text-orange-500">Gear Lab</span> </nav> <header class="mb-20 space-y-4"> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
Gear / <span class="text-orange-500">装备实测</span> </h1> <p class="max-w-3xl text-lg font-bold text-slate-500 italic">
" 不堆参数，只看真实使用：雨衣、头灯、电力、鞋、背包，以及一个独立开发者怎么把身体安全带回来。 "
</p> </header>  <section class="mb-32"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-12 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-orange-500"></span> 装备审计日志 / AUDIT LOGS
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/life/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-orange-500/10 text-[9px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400">GEAR_TEST</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors leading-snug"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-medium opacity-80 leading-relaxed"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6"> <span class="text-[9px] font-black uppercase tracking-widest text-orange-500 opacity-60 group-hover:opacity-100 transition-all">READ_FULL_LOG</span> <svg class="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-20 text-center text-slate-400 italic">正在向荒野进发... 更多装备审计中。</div>`} </section>  <section class="mb-32 p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/5 relative overflow-hidden shadow-sm"> <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10"> <div class="text-center mb-16"> <h2 class="text-3xl font-black italic uppercase mb-4 tracking-tight">Field Stack / 常用清单</h2> <p class="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">" 能帮助安全下撤和长期输出的装备，才值得进背包 "</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"> ${recommendedGear.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} target="_blank" rel="sponsored nofollow" class="group p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex flex-col items-center text-center gap-4 shadow-sm"> <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform"> ${item.id.includes("jd") ? renderTemplate`${renderComponent($$result2, "FaShoppingCart", FaShoppingCart, {})}` : item.id.includes("bandwagon") ? renderTemplate`${renderComponent($$result2, "FaDolly", FaDolly, {})}` : renderTemplate`${renderComponent($$result2, "FaTools", FaTools, {})}`} </div> <div> <h4 class="text-[11px] font-black text-slate-900 dark:text-white leading-tight mb-1">${item.name}</h4> <p class="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">${item.category}</p> </div> <div class="text-[8px] font-black uppercase text-orange-500 opacity-0 group-hover:opacity-100 transition-all">
GET_ASSET →
</div> </a>`)} </div> <div class="mt-12 text-center"> <a href="/life/high-altitude-edc/" class="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 hover:border-orange-500 transition-all text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white group">
Read Outdoor EDC Guide
<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> <p class="mt-12 text-center text-[9px] font-bold text-slate-500 italic uppercase tracking-widest">
* 本页包含联盟链接。基于真实体验推荐，点击将跳转第三方平台。
</p> </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/gear.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/gear.astro";
const $$url = "/life/gear/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gear,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
