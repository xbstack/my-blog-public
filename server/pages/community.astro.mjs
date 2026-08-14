import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Community = createComponent(($$result, $$props, $$slots) => {
  const questions = [
    { hub: "MCP", title: "Stateless \u6A21\u5F0F\u4E0B\uFF0CSession \u72B6\u6001\u5230\u5E95\u5E94\u8BE5\u7531\u54EA\u4E00\u5C42\u7EF4\u62A4\uFF1F", href: "/ai/mcp/" },
    { hub: "LangGraph", title: "Interrupt / Resume \u5728\u591A Worker \u4E0B\u600E\u6837\u907F\u514D\u91CD\u590D\u6062\u590D\uFF1F", href: "/ai/langgraph/" },
    { hub: "AI Agent", title: "Tool Permission \u5E94\u7531 Agent Runtime \u8FD8\u662F\u4E1A\u52A1\u5C42\u6700\u7EC8\u88C1\u51B3\uFF1F", href: "/ai/agent/" }
  ];
  const description = "XBSTACK \u5DE5\u7A0B\u95EE\u9898\u4E0E\u6280\u672F\u8BA8\u8BBA\uFF0C\u56F4\u7ED5 MCP\u3001LangGraph\u3001AI Agent\u3001Workflow \u4E0E\u4EA7\u54C1\u5DE5\u5177\u6536\u96C6\u771F\u5B9E\u5DE5\u7A0B\u95EE\u9898\u3001\u53CD\u4F8B\u548C\u8865\u5145\u8BC1\u636E\u3002\u4E0D\u5236\u9020\u7528\u6237\u3001\u56DE\u590D\u6216\u70ED\u5EA6\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u5DE5\u7A0B\u95EE\u9898\u4E0E\u6280\u672F\u8BA8\u8BBA | XBSTACK", "description": description, "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[860px]"><h1 class="xb-title">工程问题与技术讨论</h1><p class="xb-lead">这里不做“热闹论坛”。优先收集能改变技术判断的真实问题、反例、GitHub Issue、复现条件和补充证据；没有真实回复时，就明确保持空状态。</p><div class="xb-chip-row mt-5"><a class="xb-chip" href="/ai/mcp/">MCP</a><a class="xb-chip" href="/ai/langgraph/">LangGraph</a><a class="xb-chip" href="/ai/agent/">AI Agent</a><a class="xb-chip" href="/ai/workflow/">Workflow</a><a class="xb-chip" href="/tools/">Tools</a></div></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="xb-hub-layout"><main class="min-w-0"> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">重点讨论</h2></div></div><div class="border-y border-[var(--xb-line)] py-6"><div class="xb-meta">MCP · Architecture</div><h3 class="mt-2 max-w-[820px] text-[25px] font-bold leading-9 tracking-[-.025em] text-[var(--xb-ink)]">MCP 最终会停留在协议层，还是继续侵入 Agent Runtime？</h3><p class="mt-3 max-w-[760px] text-[12px] leading-6 text-[var(--xb-muted)]">欢迎真实工程案例、反例或 GitHub 证据。能改变判断的材料比“同意/反对”更有价值。</p><div class="mt-5 flex gap-3"><a href="/ai/mcp/" class="xb-chip">查看 MCP 判断</a><a href="/contact/" class="xb-chip">提交证据</a></div></div></section> <section class="mb-12"><div class="xb-divider-title"><div><h2 class="xb-h2">开放问题</h2></div></div><div class="xb-list">${questions.map((q) => renderTemplate`<a${addAttribute(q.href, "href")} class="xb-list-row"><div class="xb-list-row__type">${q.hub}</div><div><h3>${q.title}</h3><p>当前只记录问题本身；有真实回答或证据后再更新状态。</p></div><div class="xb-list-row__meta">等待回答</div><div class="xb-list-row__arrow">→</div></a>`)}</div></section> <section><div class="xb-divider-title"><div><h2 class="xb-h2">最新讨论</h2></div></div><div class="rounded-xl border border-dashed border-[var(--xb-line-strong)] bg-[var(--xb-surface)] px-6 py-10"><div class="text-[14px] font-bold text-[var(--xb-ink)]">暂无可验证的最近回复</div><p class="mt-2 text-[11px] leading-6 text-[var(--xb-muted)]">这里不会使用示例用户、示例点赞或虚构回复来填空。</p></div></section> </main><aside class="xb-side-stack"><section class="xb-side-card"><h3>主题导航</h3><a href="/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/ai/workflow/"><span>Workflow</span><span>→</span></a><a href="/tools/"><span>产品构建</span><span>→</span></a></section><section class="xb-side-card"><h3>参与方式</h3><a href="/contact/"><span>提交工程问题</span><span>→</span></a><a href="https://github.com/xbstack" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span>→</span></a><a href="/newsletter/"><span>订阅更新</span><span>→</span></a></section></aside></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/community.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/community.astro";
const $$url = "/community/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
