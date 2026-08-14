import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$StickerLab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "\u5FAE\u4FE1\u8868\u60C5\u5305\u5B9E\u9A8C\u5BA4" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/gifshot/build/gifshot.min.js"><\/script> ', '<div class="max-w-6xl mx-auto space-y-10"> <header class="flex justify-between items-end border-b border-white/5 pb-10"> <div> <div class="flex items-center gap-3 mb-4"> <span class="w-1.5 h-5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></span> <span class="text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-[0.4em]">Sticker Lab v4.0</span> </div> <h2 class="text-4xl font-black text-white italic tracking-tighter uppercase">AI \u8868\u60C5\u5305\u5B9E\u9A8C\u5BA4</h2> <p class="text-slate-600 dark:text-slate-400 text-xs font-bold mt-2 italic">\u7B26\u5408\u5FAE\u4FE1\u8868\u60C5\u5F00\u653E\u5E73\u53F0 240px \u6807\u51C6 | \u96C6\u6210 AI \u8BED\u4E49\u751F\u6210\u4E0E\u81EA\u52A8\u914D\u56FE</p> </div> <div class="flex gap-4"> <div class="px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase">\u8F93\u51FA: PNG / GIF</div> <div class="px-4 py-2 rounded-xl bg-slate-900 border border-white/5 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase">\u6A21\u5F0F: \u7269\u7406\u52A8\u6548 + AI \u8BED\u4E49</div> </div> </header> ', " </div> "])), maybeRenderHead(), renderComponent($$result2, "StickerCreator", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/admin/components/StickerCreator.jsx", "client:component-export": "default" })) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/sticker-lab.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/sticker-lab.astro";
const $$url = "/admin/sticker-lab/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StickerLab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
