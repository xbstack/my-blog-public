import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Growth = createComponent(($$result, $$props, $$slots) => {
  const experiments = [
    { state: "\u8FDB\u884C\u4E2D", title: "\u9AD8\u66DD\u5149\u3001\u4F4E\u70B9\u51FB\u9875\u9762\u7684\u641C\u7D22\u4EFB\u52A1\u5339\u914D\u5B9E\u9A8C", desc: "\u5148\u6539\u6807\u9898\u3001\u6458\u8981\u548C\u9996\u5C4F\u4EFB\u52A1\u5339\u914D\uFF0C\u518D\u89C2\u5BDF\u771F\u5B9E Search Console \u6570\u636E\u3002", result: "\u7ED3\u679C \xB7 \u5F85\u771F\u5B9E\u6570\u636E" },
    { state: "\u5F85\u9A8C\u8BC1", title: "Topic Hub \u2192 \u6DF1\u5C42\u95EE\u9898\u9875\u5185\u94FE\u5B9E\u9A8C", desc: "\u89C2\u5BDF\u7528\u6237\u662F\u5426\u4ECE\u95EE\u9898\u57DF\u8FDB\u5165\u5177\u4F53\u7B54\u6848\uFF0C\u800C\u4E0D\u662F\u53EA\u505C\u7559\u5728 Hub\u3002", result: "\u7ED3\u679C \xB7 \u672A\u8FD0\u884C" },
    { state: "\u6301\u7EED\u8BB0\u5F55", title: "404 \u56DE\u6536\u4E0E\u641C\u7D22\u5165\u53E3\u4FEE\u590D", desc: "\u628A\u771F\u5B9E 404\u3001\u65E7\u8DEF\u5F84\u3001\u5185\u90E8\u94FE\u63A5\u9519\u8BEF\u548C\u641C\u7D22\u8DF3\u5931\u6301\u7EED\u7EB3\u5165\u53D1\u5E03\u8D28\u91CF\u89C4\u5219\u3002", result: "\u7ED3\u679C \xB7 \u6309\u771F\u5B9E\u62A5\u8868\u66F4\u65B0" }
  ];
  const description = "XBSTACK \u641C\u7D22\u589E\u957F\u4E0E\u5185\u5BB9\u5B9E\u9A8C\u5BA4\uFF0C\u8BB0\u5F55 Search Console\u3001SEO/GEO\u3001404 \u56DE\u6536\u3001UTM \u5206\u53D1\u3001\u5185\u5BB9\u8D28\u91CF\u548C\u641C\u7D22\u4EFB\u52A1\u5339\u914D\u5B9E\u9A8C\u3002\u53EA\u8BB0\u5F55\u771F\u5B9E\u57FA\u7EBF\u4E0E\u7ED3\u679C\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u641C\u7D22\u589E\u957F\u4E0E\u5185\u5BB9\u5B9E\u9A8C | XBSTACK", "description": description, "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[880px]"><h1 class="xb-title">搜索增长与内容实验</h1><p class="xb-lead">公开记录搜索增长假设、内容实验、失败和下一步资源分配。它不是公开 Analytics Dashboard：没有真实数据就写“待记录”，绝不填示例百分比。</p><div class="xb-chip-row mt-5"><a class="xb-chip" href="/search/">Search</a><a class="xb-chip" href="/archive/">Archive</a><a class="xb-chip" href="/tools/utm-builder/">UTM Builder</a><a class="xb-chip" href="/ai/">Content Hubs</a></div></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="xb-hub-layout"><main class="min-w-0"> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">当前实验假设</h2></div></div><div class="border-y border-[var(--xb-line)] py-6"><p class="max-w-[840px] text-[23px] font-bold leading-9 tracking-[-.025em] text-[var(--xb-ink)]">高曝光、低点击的搜索页，优先优化标题、摘要、首屏和用户意图匹配，而不是继续增加泛化正文。</p><p class="mt-3 text-[11px] leading-6 text-[var(--xb-muted)]">这是待验证假设，不是结论。正式结果只来自真实 Search Console / GA / 站内行为数据。</p></div></section> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">实验记录</h2></div></div><div class="xb-list">${experiments.map((item) => renderTemplate`<div class="xb-list-row"><div class="xb-list-row__type">${item.state}</div><div><h3>${item.title}</h3><p>${item.desc}</p></div><div class="xb-list-row__meta">${item.result}</div><div class="xb-list-row__arrow">·</div></div>`)}</div></section> <section><div class="xb-divider-title"><div><h2 class="xb-h2">决策与资源配置</h2></div></div><div class="xb-grid-3"><div class="xb-card"><h3>P0 · 已有曝光资产</h3><p>优先修搜索任务匹配、内容深度、标题摘要与内部链接。</p></div><div class="xb-card"><h3>P1 · 专题知识体系</h3><p>用 Hub 承接问题域，避免同一主题反复制造近似文章。</p></div><div class="xb-card"><h3>STOP · 无证据动作</h3><p>停止为了更新频率制造低价值内容、虚假实验和装饰性页面。</p></div></div></section> </main><aside class="xb-side-stack"><section class="xb-side-card"><h3>分析工具</h3><a href="/tools/utm-builder/"><span>UTM Builder</span><span>→</span></a><a href="/search/"><span>站内搜索</span><span>→</span></a><a href="/archive/"><span>内容归档</span><span>→</span></a></section><section class="xb-side-card"><h3>相关研究</h3><a href="/ai/search-console-ctr-title-fix/"><span>Search Console CTR 修复</span><span>→</span></a><a href="/ai/xbstack-content-quality-audit-builder-log/"><span>内容质量审计</span><span>→</span></a><a href="/ai/xbstack-utm-distribution-tracking/"><span>UTM 分发追踪</span><span>→</span></a></section></aside></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/growth.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/growth.astro";
const $$url = "/growth/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Growth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
