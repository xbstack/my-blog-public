import { e as createAstro, c as createComponent, x as renderHead, d as addAttribute, r as renderTemplate, w as renderSlot, a as renderScript } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */
/* empty css                           */

const $$Astro = createAstro("https://www.xbstack.com");
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "\u7BA1\u7406\u540E\u53F0" } = Astro2.props;
  const currentPath = Astro2.url.pathname.endsWith("/") ? Astro2.url.pathname : `${Astro2.url.pathname}/`;
  return renderTemplate`<html lang="zh-CN" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - 系统管理中心</title>${renderHead()}</head> <body class="bg-slate-950 text-slate-200 antialiased"> <div class="admin-main-grid">  <aside class="sticky top-0 h-screen bg-slate-900 border-r border-slate-200 dark:border-white/10 flex flex-col z-[100] w-[var(--admin-sidebar-width)] shadow-2xl"> <div class="p-8 border-b border-slate-200 dark:border-white/10 mb-6 bg-black/40"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg"> <span class="text-xl font-black italic text-white">AS</span> </div> <div> <h2 class="text-lg font-black italic text-white uppercase leading-none tracking-tighter">XBSTACK</h2> <p class="text-[9px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em] mt-1">管理控制台</p> </div> </div> </div> <nav class="flex-1 px-4 space-y-1.5 overflow-y-auto"> ${[
    { label: "\u7CFB\u7EDF\u4EEA\u8868\u76D8", url: "/admin/", icon: "\u{1F4CA}" },
    { label: "\u5168\u90E8\u6587\u7AE0\u7BA1\u7406", url: "/admin/content/", icon: "\u{1F4DD}" },
    { label: "\u5185\u5BB9\u53D1\u5E03\u4E2D\u5FC3", url: "/admin/publisher/", icon: "\u{1F680}" },
    { label: "Growth \u63A7\u5236\u53F0", url: "/admin/growth/", icon: "\u{1F4C8}" },
    { label: "AI \u8BBE\u7F6E", url: "/admin/ai-settings/", icon: "\u{1F916}" },
    { label: "AI \u521B\u4F5C\u4E2D\u5FC3", url: "/admin/ai-studio/", icon: "\u{1F9E0}" },
    { label: "\u70ED\u70B9\u91C7\u96C6", url: "/admin/hot-trending/", icon: "\u{1F525}" },
    { label: "\u7F51\u7AD9\u680F\u76EE\u7BA1\u7406", url: "/admin/categories/", icon: "\u{1F4C1}" },
    { label: "\u5BFC\u822A\u83DC\u5355\u7BA1\u7406", url: "/admin/menus/", icon: "\u{1F5FA}\uFE0F" },
    { label: "\u5E95\u90E8\u94FE\u63A5\u7BA1\u7406", url: "/admin/footer-links/", icon: "\u{1F517}" },
    { label: "\u793E\u4EA4\u5A92\u4F53\u77E9\u9635", url: "/admin/social/", icon: "\u{1F310}" },
    { label: "\u6D88\u606F\u7559\u8A00\u7BA1\u7406", url: "/admin/messages/", icon: "\u{1F4AC}" },
    { label: "\u90AE\u4EF6\u8BA2\u9605\u7BA1\u7406", url: "/admin/newsletter/", icon: "\u{1F4E9}" },
    { label: "\u5168\u7AD9\u8BC4\u8BBA\u5BA1\u6838", url: "/admin/comments/", icon: "\u{1F5E8}\uFE0F" },
    { label: "\u5149\u5F71\u4F5C\u54C1\u7BA1\u7406", url: "/admin/gallery/", icon: "\u{1F4F7}" },
    { label: "\u6D41\u91CF\u8BBF\u95EE\u7EDF\u8BA1", url: "/admin/analytics/", icon: "\u{1F4C8}" },
    { label: "\u8868\u60C5\u5305\u5B9E\u9A8C\u5BA4", url: "/admin/sticker-lab/", icon: "\u{1F3A8}" },
    { label: "\u53D8\u73B0\u94FE\u63A5\u7BA1\u7406", url: "/admin/affiliates/", icon: "\u{1F4B0}" },
    { label: "SEO \u641C\u7D22\u4F18\u5316", url: "/admin/seo/", icon: "\u{1F50D}" },
    { label: "\u7F51\u7AD9\u5168\u5C40\u8BBE\u7F6E", url: "/admin/settings/", icon: "\u2699\uFE0F" },
    { label: "\u8D26\u6237\u4E0E\u5B89\u5168", url: "/admin/account/", icon: "\u{1F510}" },
    { label: "\u5BA1\u8BA1\u65E5\u5FD7", url: "/admin/audit-log/", icon: "\u{1F4CB}" },
    { label: "Python \u96C6\u6210", url: "/admin/python-integration/", icon: "\u{1F40D}" }
  ].map((item) => renderTemplate`<a${addAttribute(item.url, "href")}${addAttribute(`flex items-center gap-4 px-5 py-3 rounded-xl text-[11px] font-black transition-all duration-300
              ${currentPath === item.url || item.url === "/admin/growth/" && currentPath.startsWith("/admin/growth/") ? "bg-orange-500 text-white shadow-xl" : "text-slate-300 hover:bg-slate-100 dark:bg-white/5 hover:text-white"}`, "class")}> <span class="text-base">${item.icon}</span> ${item.label} </a>`)} </nav> </aside>  <main class="relative flex flex-col bg-slate-950 overflow-auto">  <header class="sticky top-0 z-[90] w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-xl px-8 py-4 flex items-center justify-between"> <div class="flex items-center gap-3"> <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol: V4.1 Stable</span> </div> <div class="flex items-center gap-4"> <a href="https://www.xbstack.com" target="_blank" class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center gap-2"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
预览前端首页
</a> <button id="logout-btn" class="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
安全退出
</button> </div> </header> <div class="flex-1 p-12 md:p-16 min-w-0"> <!-- AdminConfirmDialog 组件 (所有 admin 页面共用) --> <div id="confirm-dialog" class="hidden fixed inset-0 z-[300] flex items-center justify-center"> <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="window.__closeConfirmDialog(false)"></div> <div class="relative bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"> <h3 id="confirm-title" class="text-lg font-black text-white uppercase tracking-tight mb-2"></h3> <p id="confirm-message" class="text-sm text-slate-400 mb-8 leading-relaxed"></p> <div class="flex gap-3 justify-end"> <button id="confirm-cancel" class="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">取消</button> <button id="confirm-ok" class="px-5 py-2.5 rounded-xl bg-red-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all">确认</button> </div> </div> </div> <header class="mb-16 border-b border-slate-200 dark:border-white/10 pb-12"> <div class="flex items-center gap-3 mb-4"> <span class="w-1.5 h-5 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span> <span class="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">SYSTEM MODULE</span> </div> <h1 class="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">${title}</h1> </header> <div class="relative z-10"> ${renderSlot($$result, $$slots["default"])} </div> </div> </main> </div> <div id="toast-container" class="fixed top-8 left-1/2 -translate-x-1/2 z-[200] pointer-events-none"></div> ${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
