import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, e as renderScript } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$FooterLinks = createComponent(async ($$result, $$props, $$slots) => {
  const title = "\u5E95\u90E8\u53CB\u60C5\u94FE\u63A5\u7BA1\u7406";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl space-y-8"> <div class="p-8 rounded-3xl bg-slate-900 border border-white/5 shadow-2xl"> <div class="flex items-center justify-between mb-10"> <div> <h2 class="text-2xl font-black text-white italic uppercase tracking-tighter">底部链接配置</h2> <p class="text-xs text-slate-700 dark:text-slate-500 font-bold mt-1 uppercase tracking-widest">Footer Blogroll & Alliances</p> </div> <button id="add-link-btn" class="px-6 py-2 rounded-full bg-orange-500 text-white font-black text-[10px] tracking-widest uppercase hover:bg-orange-400 transition-all">
添加新链接 +
</button> </div> <div class="overflow-x-auto"> <table class="w-full text-left"> <thead> <tr class="border-b border-white/5"> <th class="pb-4 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest px-4">图标</th> <th class="pb-4 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest px-4">显示名称</th> <th class="pb-4 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest px-4">跳转地址 (URL)</th> <th class="pb-4 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest px-4">外部链接?</th> <th class="pb-4 text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest px-4 text-right">操作</th> </tr> </thead> <tbody id="links-table-body">  </tbody> </table> </div> <div class="mt-12 flex justify-end gap-4 border-t border-white/5 pt-8"> <button id="save-btn" class="px-10 py-4 rounded-2xl bg-emerald-600 text-white font-black text-xs tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-xl">
保存配置并预览
</button> </div> </div> <div class="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4"> <div class="text-xl">💡</div> <div class="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed"> <p class="text-white font-black mb-1 uppercase tracking-wider">小白的运维建议：</p>
1. <strong>图标</strong>：可以使用 Emoji (🚇, ⏳) 或者简单的文字字符。<br>
2. <strong>外部链接</strong>：如果是跳转到其他网站，请勾选“外部链接”，会自动开启新窗口弹出。<br>
3. <strong>保存后</strong>：需要点击侧边栏的“全站同步并发布”才会真正更新到线上站点。
</div> </div> </div> ${renderScript($$result2, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/footer-links.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/footer-links.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/footer-links.astro";
const $$url = "/admin/footer-links/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FooterLinks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
