import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclosure = createComponent(($$result, $$props, $$slots) => {
  const title = "\u5229\u76CA\u62AB\u9732\u4E0E\u514D\u8D23\u58F0\u660E - XBSTACK";
  const description = "XBSTACK \u5173\u4E8E\u6295\u8D44\u590D\u76D8\u3001\u5DE5\u5177\u7B97\u6CD5\u53CA\u6570\u636E\u5F15\u7528\u7684\u5408\u89C4\u6027\u58F0\u660E\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-40 pb-24"> <div class="container mx-auto px-6 max-w-4xl"> <header class="mb-16 animate-fadeUp"> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter mb-4">
DISCLOSURE / <span class="text-orange-500">利益披露</span> </h1> <p class="text-slate-500 font-bold italic">" 透明是审计的前提。我们坚持披露所有潜在的利益关联，以确保审计逻辑的纯净。"</p> </header> <div class="prose prose-slate dark:prose-invert max-w-none space-y-12 font-medium leading-loose text-slate-600 dark:text-slate-400"> <section class="animate-fadeUp [animation-delay:100ms]"> <h2 class="text-2xl font-black text-slate-900 dark:text-white border-l-4 border-orange-500 pl-6 mb-6">数据来源与工具逻辑</h2> <p>
本站提供的 <span class="text-slate-900 dark:text-white font-black">资产审计工具</span> 及所有投资复盘文章均基于公开财报数据。工具算法（如复利引擎、IRR 模拟）仅代表我个人的逻辑实现，不构成任何投资建议。
</p> </section> <section class="animate-fadeUp [animation-delay:200ms]"> <h2 class="text-2xl font-black text-slate-900 dark:text-white border-l-4 border-orange-500 pl-6 mb-6">利益关联说明</h2> <p>
当你在本站点击某些特定链接（如 NAS 硬件推荐、书籍购买、券商开户）并产生后续行为时，我可能会获得相应的推广分佣。这些收益将全部用于维持服务器运行及 XBSTACK 的持续开发。
</p> <p class="mt-4">
但我保证：所有的推荐均基于我的 <span class="text-slate-900 dark:text-white font-black">真实使用体验</span>。我绝不会因为分佣而推荐任何我不认可的低质产品。
</p> </section> <section class="animate-fadeUp [animation-delay:300ms]"> <h2 class="text-2xl font-black text-slate-900 dark:text-white border-l-4 border-orange-500 pl-6 mb-6">风险提示</h2> <p>
市场有风险，投资需谨慎。XBSTACK 记录的是我个人通往财务自由的路径，但这并不意味着该路径适合所有人。请务必根据你自身的风险承受能力，通过独立的审计和思考后再做决策。
</p> </section> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/disclosure.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/disclosure.astro";
const $$url = "/disclosure/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
