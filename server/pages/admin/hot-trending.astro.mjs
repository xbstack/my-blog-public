import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$HotTrending = createComponent(($$result, $$props, $$slots) => {
  const title = "\u70ED\u70B9\u91C7\u96C6";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl"> <div class="rounded-2xl bg-slate-900 border border-white/10 p-8 mb-8"> <h2 class="text-lg font-black text-white mb-2">热点采集中心</h2> <p class="text-xs text-slate-400 leading-relaxed">
采集各大平台热搜、热门内容，辅助创作选题。点击「🤖 创作」可复制为 AI 创作提示词，在
<a href="/admin/ai-studio" class="text-sky-400 font-bold underline mx-1">AI 创作中心</a>
中使用。
</p> </div> ${renderComponent($$result2, "HotTrendingClient", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/ai-gateway/components/HotTrending.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/hot-trending.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/hot-trending.astro";
const $$url = "/admin/hot-trending/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HotTrending,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
