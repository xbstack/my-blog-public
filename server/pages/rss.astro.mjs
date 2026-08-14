import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Rss = createComponent(($$result, $$props, $$slots) => {
  const feeds = [
    { title: "\u5168\u7AD9 RSS", href: "/rss.xml", desc: "\u8BA2\u9605 XBSTACK \u516C\u5F00\u6587\u7AE0\u4E0E\u4E3B\u8981\u66F4\u65B0\u3002" },
    { title: "Newsletter", href: "/newsletter/", desc: "\u6BCF\u5468\u6574\u7406 AI \u5DE5\u7A0B\u53D8\u5316\u3001\u771F\u5B9E\u6545\u969C\u3001\u5B9E\u9A8C\u4E0E\u65B0\u8D44\u4EA7\u3002" },
    { title: "\u5185\u5BB9\u5F52\u6863", href: "/archive/", desc: "\u6309\u65F6\u95F4\u6D4F\u89C8\u5168\u90E8\u516C\u5F00\u5185\u5BB9\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "RSS \u4E0E\u8BA2\u9605 | XBSTACK", "description": "\u8BA2\u9605 XBSTACK \u7684 RSS\u3001Newsletter \u548C\u5185\u5BB9\u5F52\u6863\uFF0C\u83B7\u53D6 AI \u5DE5\u7A0B\u3001\u4EA7\u54C1\u5DE5\u5177\u3001Horizon \u4E0E Lens \u66F4\u65B0\u3002", "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[800px]"><h1 class="xb-title">RSS 与订阅</h1><p class="xb-lead">不依赖算法推荐，也可以持续关注 XBSTACK。RSS 适合所有更新，Newsletter 适合每周筛选后的重点内容。</p></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="mx-auto max-w-[900px]"><div class="xb-grid-3">${feeds.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-card"><h2 class="m-0 text-[17px] font-bold text-[var(--xb-ink)]">${item.title}</h2><p class="mt-3">${item.desc}</p><div class="mt-5 text-[11px] font-bold text-blue-600 dark:text-blue-400">打开 →</div></a>`)}</div></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/rss.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/rss.astro";
const $$url = "/rss/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rss,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
