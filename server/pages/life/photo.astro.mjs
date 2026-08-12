import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Photo = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "\u5F71\u50CF\u8BB0\u5F55";
  const actualCategories = ["photo"];
  const collection = "lens";
  const posts = (await getCollection(collection, ({ data }) => {
    return !data.draft && data.lang !== "en" && (actualCategories.includes(data.category) || data.tags && data.tags.some((t) => actualCategories.includes(t)));
  })).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const pageTitle = `${displayTitle} | \u5B9E\u6218\u8BB0\u5F55 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "\u6574\u7406\u5C0F\u767D\u5728\u8D35\u5DDE\u57CE\u5E02\u3001\u5C71\u91CE\u3001\u96EA\u5C71\u4E0E\u591C\u95F4\u6237\u5916\u4E2D\u7684\u771F\u5B9E\u5F71\u50CF\u8BB0\u5F55\uFF0C\u5305\u542B\u62CD\u6444\u5730\u70B9\u3001\u5668\u6750\u9009\u62E9\u3001\u5929\u6C14\u6761\u4EF6\u3001\u73B0\u573A\u5224\u65AD\u548C\u7167\u7247\u80CC\u540E\u7684\u5B8C\u6574\u6545\u4E8B\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-purple-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/life/" class="hover:text-purple-500 transition-colors">Lens</a> <span class="opacity-30">/</span> <span class="text-purple-500">Photography</span> </nav> <header class="mb-20"> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
Photography / <span class="text-purple-500">影像记录</span> </h1> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/life/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-10 rounded-[45px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl"> <div> <div class="flex items-center gap-3 mb-6"> <span class="px-3 py-1 rounded-full bg-purple-500/10 text-[9px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 border border-purple-500/20">${post.data.category === "photo" ? "\u5F71\u50CF\u91C7\u6837" : post.data.category || "\u6444\u5F71"}</span> <span class="text-[9px] font-black text-slate-400 uppercase font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-purple-500 transition-colors leading-tight italic"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-10 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between"> <span class="text-[9px] font-black uppercase tracking-[0.3em] text-purple-500 opacity-60 group-hover:opacity-100 transition-all italic">PHOTO_LOG_v6.6</span> <svg class="w-5 h-5 text-purple-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在采样光影瞬间... Loading Assets.</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/photo.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/photo.astro";
const $$url = "/life/photo/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
