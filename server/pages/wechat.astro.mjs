import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Wechat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7", "description": "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7\u5165\u53E3\uFF0C\u7528\u4E8E\u4E2D\u6587\u6DF1\u5EA6\u5185\u5BB9\u3001\u6280\u672F\u66F4\u65B0\u4E0E\u6237\u5916\u6587\u7AE0\u8BA2\u9605\u3002", "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[800px]"><h1 class="xb-title">微信公众号</h1><p class="xb-lead">中文长文、AI 工程实践、工具更新与户外内容会在公众号同步或二次整理。二维码和账号信息只在这里集中展示，其他页面不重复堆联系方式。</p></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="mx-auto grid max-w-[860px] grid-cols-1 gap-8 md:grid-cols-[320px_1fr] md:items-center"><div class="xb-surface p-5 text-center"><img src="/assets/qrcode_guizhou_outdoor.png" alt="XBSTACK 微信公众号二维码" class="mx-auto aspect-square w-full max-w-[280px] object-contain" loading="lazy"><p class="mt-4 text-[12px] font-bold text-[var(--xb-ink)]">XBSTACK / 贵州户外相关内容</p></div><div><h2 class="text-[24px] font-bold text-[var(--xb-ink)]">适合通过公众号关注什么</h2><div class="mt-5 xb-list"><div class="border-b border-[var(--xb-line)] py-4"><b class="text-[13px]">AI 工程深度文章</b><p class="mt-1 text-[11px] text-[var(--xb-muted)]">MCP、LangGraph、Agent、Workflow 与真实排障。</p></div><div class="border-b border-[var(--xb-line)] py-4"><b class="text-[13px]">工具与产品进展</b><p class="mt-1 text-[11px] text-[var(--xb-muted)]">AI Finance、Lunest 和开发者工具。</p></div><div class="border-b border-[var(--xb-line)] py-4"><b class="text-[13px]">贵州户外与旅行</b><p class="mt-1 text-[11px] text-[var(--xb-muted)]">徒步、避暑、路线、装备和现场记录。</p></div></div><div class="xb-chip-row mt-6"><a class="xb-chip" href="/newsletter/">Newsletter</a><a class="xb-chip" href="/rss.xml">RSS</a><a class="xb-chip" href="/contact/">联系与合作</a></div></div></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/wechat.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/wechat.astro";
const $$url = "/wechat/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wechat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
