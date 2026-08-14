import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderScript } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const title = "\u7CFB\u7EDF\u4EEA\u8868\u76D8";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl space-y-10">  <section> <div class="relative p-10 md:p-12 rounded-3xl bg-slate-800 border border-white/5 shadow-2xl"> <div class="flex flex-col lg:flex-row items-center justify-between gap-10"> <div class="flex-1 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> <span class="text-[10px] font-black text-emerald-500 uppercase tracking-widest">节点状态：生产环境</span> </div> <h2 class="text-4xl font-black text-white italic tracking-tighter uppercase mb-4">全站资产同步</h2> <p class="text-slate-300 font-bold text-sm leading-relaxed max-w-md">
将本地编辑的最新内容、光影记录与未来规划同步至全球 CDN 边缘节点。
</p> </div> <div class="w-full lg:w-72 shrink-0"> <button id="publish-btn" class="w-full group relative overflow-hidden px-8 py-5 rounded-2xl bg-emerald-600 text-white font-black text-sm tracking-widest uppercase transition-all hover:bg-emerald-500 shadow-xl">
立即执行同步
</button> <div id="publish-status" class="mt-4 text-center text-xs font-bold text-slate-700 dark:text-slate-500 h-4"></div> </div> </div> </div> </section>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${[
    { label: "\u5185\u5BB9\u7BA1\u7406", desc: "\u6587\u7AE0\u3001\u9875\u9762\u4E0E\u5A92\u4F53\u8D44\u4EA7\u7BA1\u7406", url: "/admin/content", icon: "\u{1F4DD}" },
    { label: "\u5185\u5BB9\u53D1\u5E03\u4E2D\u5FC3", desc: "\u516C\u4F17\u53F7\u8349\u7A3F\u7BB1\u4E0E\u591A\u5E73\u53F0\u590D\u5236\u5BFC\u51FA", url: "/admin/publisher", icon: "\u{1F680}" },
    { label: "AI \u8BBE\u7F6E", desc: "\u914D\u7F6E AI \u63D0\u4F9B\u5546\u4E0E\u521B\u4F5C\u6A21\u578B", url: "/admin/ai-settings", icon: "\u{1F916}" },
    { label: "AI \u521B\u4F5C\u4E2D\u5FC3", desc: "\u667A\u80FD\u5199\u4F5C\u3001\u753B\u56FE\u4E0E\u89C6\u9891\u751F\u6210", url: "/admin/ai-studio", icon: "\u{1F9E0}" },
    { label: "\u70ED\u70B9\u91C7\u96C6", desc: "\u5168\u7F51\u70ED\u641C\u805A\u5408\u4E0E\u521B\u4F5C\u9009\u9898", url: "/admin/hot-trending", icon: "\u{1F525}" },
    { label: "\u8BBF\u95EE\u7EDF\u8BA1", desc: "\u6D41\u91CF\u5B9E\u65F6\u611F\u77E5\u4E0E\u6570\u636E\u7EDF\u8BA1", url: "/admin/analytics", icon: "\u{1F4C8}" },
    { label: "\u641C\u7D22\u4F18\u5316", desc: "\u641C\u7D22\u5F15\u64CE\u6536\u5F55\u4E0E GEO \u4F18\u5316", url: "/admin/seo", icon: "\u{1F50D}" },
    { label: "\u793E\u4EA4\u77E9\u9635", desc: "\u793E\u4EA4\u8FDE\u63A5\u4E0E\u5168\u7F51\u5206\u53D1\u4E2D\u5FC3", url: "/admin/social", icon: "\u{1F310}" },
    { label: "\u90BB\u5C45\u7BA1\u7406", desc: "\u53CB\u94FE\u4EA4\u6362\u4E0E\u5E95\u90E8\u8054\u76DF\u914D\u7F6E", url: "/admin/footer-links", icon: "\u{1F91D}" },
    { label: "\u5149\u5F71\u7BA1\u7406", desc: "\u5149\u5F71\u4F5C\u54C1\u4E0E\u611F\u77E5\u523B\u5EA6\u7BA1\u7406", url: "/admin/gallery", icon: "\u{1F4F7}" },
    { label: "\u7CFB\u7EDF\u8BBE\u7F6E", desc: "\u7AD9\u70B9\u5E95\u5C42\u534F\u8BAE\u4E0E\u5168\u5C40\u914D\u7F6E", url: "/admin/settings", icon: "\u2699\uFE0F" },
    { label: "\u8D26\u6237\u4E0E\u5B89\u5168", desc: "\u5BC6\u7801\u3001\u9A8C\u8BC1\u7801\u4E0E\u7528\u6237\u7BA1\u7406", url: "/admin/account", icon: "\u{1F510}" }
  ].map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="group relative p-8 rounded-3xl bg-slate-800 border border-white/5 hover:border-sky-500/30 transition-all duration-300 hover:bg-slate-700"> <div class="flex items-start justify-between mb-8"> <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 text-xl group-hover:bg-sky-500/20 transition-all"> ${item.icon} </div> <span class="text-[9px] font-mono font-black text-slate-600 uppercase tracking-tighter group-hover:text-sky-500">READY</span> </div> <h3 class="text-xl font-black text-white uppercase mb-2 group-hover:text-sky-400 transition-colors">${item.label}</h3> <p class="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed opacity-80 italic">${item.desc}</p> <div class="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0"> <span class="text-[10px] font-black text-sky-500 uppercase">进入模块</span> <svg class="w-3 h-3 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg> </div> </a>`)} </div> </div> ${renderScript($$result2, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/dashboard.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
