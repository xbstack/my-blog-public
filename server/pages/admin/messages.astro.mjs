import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
export { renderers } from '../../renderers.mjs';

const $$Messages = createComponent(async ($$result, $$props, $$slots) => {
  const DB_PATH = path.join(process.cwd(), "data", "messages.json");
  let messages = [];
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    messages = JSON.parse(data);
  } catch (e) {
    messages = [];
  }
  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u6D88\u606F\u4E2D\u5FC3 | Message Center" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <div class="flex items-center justify-between"> <div> <h1 class="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
消息中心 <span class="text-orange-500">Inbox</span> </h1> <p class="text-slate-700 dark:text-slate-500 mt-2 font-medium">来自 Contact 表单的访客留言 (${messages.length})</p> </div> <button onclick="location.reload()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-200 dark:bg-white/10 transition-colors"> <svg class="w-5 h-5 text-slate-700 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button> </div> ${messages.length === 0 ? renderTemplate`<div class="p-12 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-center shadow-sm"> <div class="inline-flex p-4 rounded-full bg-slate-50 dark:bg-slate-100 dark:bg-white/5 mb-4"> <svg class="w-8 h-8 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> </div> <h3 class="text-lg font-bold text-slate-700 dark:text-slate-300">暂无消息</h3> <p class="text-slate-700 dark:text-slate-500 text-sm mt-1">这里目前空空如也，去喝杯咖啡吧。</p> </div>` : renderTemplate`<div class="grid gap-4"> ${messages.map((msg) => renderTemplate`<div class="group relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all"> <div class="flex items-start justify-between mb-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-black text-sm"> ${msg.name.charAt(0).toUpperCase()} </div> <div> <h3 class="font-bold text-slate-800 dark:text-white">${msg.name}</h3> <a${addAttribute(`mailto:${msg.email}`, "href")} class="text-xs text-sky-500 hover:underline">${msg.email}</a> </div> </div> <span class="text-xs font-mono text-slate-600 dark:text-slate-400">${formatDate(msg.createdAt)}</span> </div> <div class="bg-slate-50 dark:bg-black/20 p-4 rounded-xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium"> ${msg.message} </div> <div class="mt-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity"> <a${addAttribute(`mailto:${msg.email}?subject=Reply from XBSTACK`, "href")} class="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white transition-colors">
回复 / Reply
</a> </div> </div>`)} </div>`} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/messages.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/messages.astro";
const $$url = "/admin/messages/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Messages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
