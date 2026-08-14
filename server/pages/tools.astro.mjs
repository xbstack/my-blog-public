import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const primaryTools = [
    { title: "AI Finance", href: "/tools/ai-finance/", desc: "\u8D22\u62A5\u4E0E\u516C\u53F8\u57FA\u672C\u9762\u5206\u6790\uFF0C\u91CD\u70B9\u533A\u5206\u516C\u5F00\u4E8B\u5B9E\u3001\u6A21\u578B\u89E3\u91CA\u4E0E\u98CE\u9669\u63D0\u793A\u3002", badge: "\u5728\u7EBF\u5DE5\u5177", icon: "AI" },
    { title: "Compound Calculator", href: "/tools/compound-calculator/", desc: "\u590D\u5229\u3001\u5B9A\u6295\u3001\u901A\u80C0\u548C\u76EE\u6807\u8D44\u4EA7\u8BA1\u7B97\uFF0C\u628A\u957F\u671F\u6536\u76CA\u5047\u8BBE\u53D8\u6210\u53EF\u68C0\u67E5\u7684\u6570\u5B57\u3002", badge: "\u5728\u7EBF\u5DE5\u5177", icon: "%" },
    { title: "Lunest", href: "/tools/lunest/", desc: "\u7761\u7720\u4E0E\u6062\u590D\u4EA7\u54C1\uFF0C\u56F4\u7ED5\u52A9\u7720\u58F0\u97F3\u3001\u7761\u7720\u8BB0\u5F55\u4E0E\u6062\u590D\u4F53\u9A8C\u6301\u7EED\u5F00\u53D1\u3002", badge: "\u4EA7\u54C1", icon: "L" }
  ];
  const secondaryTools = [
    { title: "UTM Builder", href: "/tools/utm-builder/" },
    { title: "Templates", href: "/tools/templates/" }
  ];
  const description = "XBSTACK \u5DE5\u5177\u4E0E\u4EA7\u54C1\uFF0C\u96C6\u4E2D\u5C55\u793A AI Finance\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest\uFF0C\u4EE5\u53CA\u5C11\u91CF\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u5F00\u53D1\u8005\u8D44\u6E90\u3002";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "XBSTACK \u5DE5\u5177\u4E0E\u4EA7\u54C1", url: "https://www.xbstack.com/tools/", description, inLanguage: "zh-CN" };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u5DE5\u5177\u4E0E\u4EA7\u54C1 | XBSTACK", "description": description, "keywords": "XBSTACK Tools, AI Finance, \u590D\u5229\u8BA1\u7B97\u5668, Lunest, UTM Builder, \u5F00\u53D1\u8005\u5DE5\u5177", "schemaJsonLd": schema, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-12 md:py-16"> <div class="max-w-[850px]"> <h1 class="xb-title">工具与产品</h1> <p class="xb-lead">把高频问题做成可以直接使用的工具，把值得长期维护的想法做成产品。这里优先展示真正能用的东西，而不是项目清单。</p> <a href="/search/" class="xb-search-box mt-7 max-w-[720px] text-left"> <span class="xb-search-box__icon">⌕</span><span class="xb-search-box__placeholder">搜索工具、产品或使用场景…</span><span class="xb-search-box__button">搜索</span> </a> <div class="xb-chip-row mt-4"><a class="xb-chip" href="/tools/ai-finance/">AI Finance</a><a class="xb-chip" href="/tools/compound-calculator/">复利计算器</a><a class="xb-chip" href="/tools/lunest/">Lunest</a></div> </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <section id="products"> <div class="xb-divider-title"><div><h2 class="xb-h2">产品与工具</h2></div></div> <div class="xb-grid-3"> ${primaryTools.map((tool) => renderTemplate`<a${addAttribute(tool.href, "href")} class="xb-card xb-tool-card"> <div class="xb-tool-card__top"><div class="xb-card__icon">${tool.icon}</div></div> <h3>${tool.title}</h3> <p>${tool.desc}</p> <div class="xb-tool-card__actions text-[11px] font-bold text-blue-600 dark:text-blue-400">打开 →</div> </a>`)} </div> <div class="xb-list mt-7"> ${secondaryTools.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-list-row xb-list-row--simple"><div><h3>${item.title}</h3></div><div class="xb-list-row__arrow">→</div></a>`)} </div> </section> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/index.astro";
const $$url = "/tools/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
