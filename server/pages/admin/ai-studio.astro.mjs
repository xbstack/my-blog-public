import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiStudio = createComponent(($$result, $$props, $$slots) => {
  const title = "AI \u521B\u4F5C\u4E2D\u5FC3";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl"> <div class="rounded-2xl bg-slate-900 border border-white/10 p-8 mb-8"> <h2 class="text-lg font-black text-white mb-2">AI 智能创作</h2> <p class="text-xs text-slate-400 leading-relaxed">
支持文章写作、剧本创作、小说续写、文章润色、标题生成、AI 画图和视频生成。
        请先在 <a href="/admin/ai-settings" class="text-sky-400 font-bold underline">AI 设置</a> 中配置至少一个 AI 提供商。
</p> </div> ${renderComponent($$result2, "AIStudio", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/ai-gateway/components/AIStudio.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/ai-studio.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/ai-studio.astro";
const $$url = "/admin/ai-studio/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiStudio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
