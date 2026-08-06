import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, a as renderScript } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const title = "\u90AE\u4EF6\u8BA2\u9605\u7BA1\u7406";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl space-y-8"> <div class="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl"> <div class="flex items-center justify-between mb-8"> <div> <h2 class="text-2xl font-black text-white italic tracking-tighter uppercase">订阅者名册</h2> <p class="text-slate-400 text-xs font-bold mt-1">
数据来源：NAS 本地存储 (subscribers.txt)
</p> </div> <button id="refresh-btn" class="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-black text-[10px] tracking-widest uppercase transition-all shadow-lg">
刷新列表
</button> </div> <div class="overflow-x-auto"> <table class="w-full text-left"> <thead> <tr class="border-b border-white/5"> <th class="py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest px-4">序号</th> <th class="py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest px-4">订阅邮箱</th> <th class="py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest px-4 text-right">状态</th> </tr> </thead> <tbody id="subscribers-list"> <tr> <td colspan="3" class="py-20 text-center"> <div class="flex flex-col items-center gap-3"> <div class="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div> <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">正在拉取订阅数据...</span> </div> </td> </tr> </tbody> </table> </div> <div class="mt-8 pt-8 border-t border-white/5 flex items-center justify-between"> <p class="text-[10px] font-black text-slate-600 uppercase">当前共有 <span id="count-display" class="text-orange-500">0</span> 位订阅者</p> <div class="flex gap-2"> <button id="export-btn" class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-black text-[10px] tracking-widest uppercase border border-white/5 transition-all">
导出 CSV
</button> </div> </div> </div>  <div class="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6"> <div class="flex gap-4"> <span class="text-xl">💡</span> <div> <h4 class="text-sm font-black text-blue-400 uppercase mb-1">提示：如何增加订阅者？</h4> <p class="text-xs text-blue-300/60 font-bold leading-relaxed">
订阅数据通过前端 Newsletter 模块自动采集。如果您想手动添加，可以直接在 NAS 上修改 <code class="bg-black/40 px-1.5 py-0.5 rounded text-blue-200">python-api/subscribers.txt</code> 文件。
</p> </div> </div> </div> </div> ${renderScript($$result2, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/newsletter.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/newsletter.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/newsletter.astro";
const $$url = "/admin/newsletter/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newsletter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
