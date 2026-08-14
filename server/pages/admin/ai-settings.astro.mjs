import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$AiSettings = createComponent(($$result, $$props, $$slots) => {
  const title = "AI \u8BBE\u7F6E";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl"> <div class="rounded-2xl bg-slate-900 border border-white/10 p-8 mb-8"> <h2 class="text-lg font-black text-white mb-2">AI 提供商管理</h2> <p class="text-xs text-slate-400 leading-relaxed">
配置 AI 提供商后可开启智能创作、内容生成等功能。支持云端 API（OpenAI / DeepSeek / 智谱 GLM 等）和本地模型（Ollama / vLLM）。
<br> <span class="text-amber-400 font-bold">⚠️ API Key 经 AES-256 加密存储，前端仅显示脱敏信息。</span> </p> </div> ${renderComponent($$result2, "AISettings", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/ai-gateway/components/AISettings.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/ai-settings.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/ai-settings.astro";
const $$url = "/admin/ai-settings/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiSettings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
