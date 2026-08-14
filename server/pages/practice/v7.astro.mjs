import { c as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$V7Frame } from '../../chunks/V7Frame_BYwqVHMF.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$StudioHero = createComponent(($$result, $$props, $$slots) => {
  const nowItems = [
    { label: "Building", title: "Lunest", tone: "var(--v7-build)" },
    { label: "Investigating", title: "MCP stdio / JSON-RPC", tone: "var(--v7-fix)" },
    { label: "Testing", title: "AI coding agents", tone: "var(--v7-lab)" },
    { label: "Thinking", title: "Agent Runtime > Framework?", tone: "var(--v7-thesis)" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="pb-14 pt-16 sm:pb-18 sm:pt-20 lg:pb-20 lg:pt-24"> <div class="v7-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end"> <div> <div class="v7-eyebrow mb-6 text-[var(--v7-brand)]"><span class="v7-dot"></span> XBSTACK</div> <h1 class="v7-title">\u89E3\u51B3\u771F\u5B9E\u95EE\u9898\uFF0C<br>\u8BB0\u5F55\u957F\u671F\u5224\u65AD\u3002</h1> <p class="v7-lead mt-7">\n\u8FD9\u91CC\u8BB0\u5F55 AI \u5DE5\u7A0B\u5B9E\u9A8C\u3001\u751F\u4EA7\u95EE\u9898\u6392\u67E5\u3001\u4EA7\u54C1\u6784\u5EFA\uFF0C\u4EE5\u53CA\u5BF9\u6280\u672F\u8DEF\u7EBF\u548C\u957F\u671F\u5224\u65AD\u7684\u6301\u7EED\u590D\u76D8\u3002\n</p> <div class="mt-8 flex flex-wrap gap-3"> <button id="v7-hero-search" type="button" class="v7-button v7-button-primary">\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898 <span aria-hidden="true">\u2315</span></button> <a href="/practice/v7/thesis/" class="v7-button">\u770B\u6700\u8FD1\u7684\u5224\u65AD \u2192</a> </div> </div> <aside class="border-l border-[var(--v7-line)] pl-6 sm:pl-8" aria-label="XBSTACK operating model"> <div class="v7-eyebrow mb-4">Operating model</div> <p class="text-sm leading-6 text-[var(--v7-muted)]">Solve \u2192 Think \u2192 Build \u2192 Discuss\u3002\u9996\u9875\u6309\u7528\u6237\u4EFB\u52A1\u7EC4\u7EC7\uFF0C\u6280\u672F\u5206\u7C7B\u7EE7\u7EED\u7559\u5728 Hub\u3002</p> </aside> </div> <div class="v7-container mt-12 border-y border-[var(--v7-line)]"> <div class="grid sm:grid-cols-2 lg:grid-cols-4"> ', " </div> </div> <script>\n    const initHeroSearch = () => {\n      const button = document.getElementById('v7-hero-search');\n      if (!button || button.dataset.ready === 'true') return;\n      button.dataset.ready = 'true';\n      button.addEventListener('click', () => window.dispatchEvent(new CustomEvent('xbstack:open-search')));\n    };\n    document.addEventListener('astro:page-load', initHeroSearch);\n    initHeroSearch();\n  <\/script> </section>"])), maybeRenderHead(), nowItems.map((item, index) => renderTemplate`<div${addAttribute(`py-4 sm:px-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 2 ? "sm:border-b lg:border-b-0" : ""} ${index < 3 ? "lg:border-r" : ""} border-[var(--v7-line)]`, "class")}> <div class="v7-eyebrow"${addAttribute(`color:${item.tone}`, "style")}><span class="v7-dot"></span>${item.label}</div> <div class="mt-2 text-sm font-extrabold tracking-[-0.02em] text-[var(--v7-ink)]">${item.title}</div> </div>`));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/v7/StudioHero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FeaturedThesis = createComponent(($$result, $$props, $$slots) => {
  const problems = [
    { label: "MCP", title: "Parse Error / stdio / OAuth", href: "/ai/mcp/" },
    { label: "LangGraph", title: "State / Checkpoint / Recovery", href: "/ai/langgraph/" },
    { label: "Agent Runtime", title: "Tool / Permission / HITL", href: "/ai/agent/" },
    { label: "Workflow", title: "n8n / Webhook / Retry", href: "/ai/workflow/" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="v7-section !py-14 sm:!py-16 lg:!py-20" id="solve"> <div class="v7-container"> <div class="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]"> <article> <div class="v7-eyebrow text-[var(--v7-thesis)]"><span class="v7-dot"></span> Featured thesis</div> <a href="/practice/v7/thesis/" class="group mt-5 block"> <h2 class="max-w-4xl text-[clamp(32px,4.5vw,58px)] font-[820] leading-[1.05] tracking-[-0.05em] text-[var(--v7-ink)] group-hover:text-[var(--v7-thesis)]">\n\u6211\u8D8A\u6765\u8D8A\u4E0D\u5173\u5FC3\u201C\u54EA\u4E2A Agent Framework \u6700\u5F3A\u201D\u4E86\u3002\n</h2> <p class="mt-5 max-w-3xl text-[17px] leading-7 text-[var(--v7-muted)]">\n\u771F\u6B63\u51B3\u5B9A\u751F\u4EA7\u7EA7 Agent \u80FD\u4E0D\u80FD\u7A33\u5B9A\u8FD0\u884C\u7684\uFF0C\u6B63\u5728\u4ECE\u6846\u67B6 API \u8F6C\u5411 Runtime\u3001State\u3001Permission\u3001Observability \u548C Recovery\u3002\n</p> <div class="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[var(--v7-muted)]"> <span>Confidence \xB7 Medium</span><span>\u2022</span><span>6 signals</span><span>\u2022</span><span class="text-[var(--v7-ink)]">\u9605\u8BFB\u5224\u65AD \u2192</span> </div> </a> </article> <aside class="border-t border-[var(--v7-line)] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"> <div class="v7-eyebrow text-[var(--v7-lab)]"><span class="v7-dot"></span> Active experiment</div> <h3 class="mt-4 text-2xl font-extrabold tracking-[-0.035em] text-[var(--v7-ink)]">MCP stdio diagnostics</h3> <p class="mt-3 text-sm leading-6 text-[var(--v7-muted)]">\u628A Parse Error \u7684\u5224\u65AD\u53D8\u6210 validator\u3001fixtures \u548C\u53EF\u91CD\u590D\u8FD0\u884C\u7684\u8BC1\u636E\u3002</p> <div class="mt-5 grid grid-cols-3 gap-2 border-y border-[var(--v7-line)] py-4 text-center"> <div><strong class="block text-sm text-[var(--v7-build)]">PASS</strong><span class="mt-1 block text-[10px] text-[var(--v7-muted)]">Clean</span></div> <div><strong class="block text-sm text-red-500">FAIL</strong><span class="mt-1 block text-[10px] text-[var(--v7-muted)]">Polluted</span></div> <div><strong class="block text-sm text-red-500">FAIL</strong><span class="mt-1 block text-[10px] text-[var(--v7-muted)]">Invalid</span></div> </div> <div class="mt-5 flex flex-wrap gap-2"><a href="https://github.com/xbstack/mcp-stdio-diagnostics" class="v7-button v7-button-primary">Repo \u2192</a><a href="/practice/v7/fix/" class="v7-button">FIX \u539F\u578B</a></div> </aside> </div> <div class="mt-12 border-t border-[var(--v7-line)] pt-8"> <div class="mb-5 flex items-end justify-between gap-4"> <div><div class="v7-eyebrow text-[var(--v7-fix)]"><span class="v7-dot"></span> Solve</div><h3 class="mt-2 text-2xl font-extrabold tracking-[-0.035em]">\u76F4\u63A5\u8FDB\u5165\u95EE\u9898</h3></div> <button id="v7-solve-search" type="button" class="v7-button hidden sm:inline-flex">\u641C\u7D22\u5168\u90E8\u95EE\u9898 \u2315</button> </div> <div class="grid border-y border-[var(--v7-line)] sm:grid-cols-2 lg:grid-cols-4"> ', " </div> </div> </div> <script>\n    const initSolveSearch = () => {\n      const button = document.getElementById('v7-solve-search');\n      if (!button || button.dataset.ready === 'true') return;\n      button.dataset.ready = 'true';\n      button.addEventListener('click', () => window.dispatchEvent(new CustomEvent('xbstack:open-search')));\n    };\n    document.addEventListener('astro:page-load', initSolveSearch);\n    initSolveSearch();\n  <\/script> </section>"])), maybeRenderHead(), problems.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`group py-5 sm:px-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 3 ? "lg:border-r" : ""} ${index < 2 ? "sm:border-b lg:border-b-0" : ""} border-[var(--v7-line)]`, "class")}> <span class="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--v7-fix)]">${item.label}</span> <h4 class="mt-2 text-sm font-extrabold leading-5 text-[var(--v7-ink)] group-hover:text-[var(--v7-fix)]">${item.title}</h4> </a>`));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/v7/FeaturedThesis.astro", void 0);

const $$HomePanels = createComponent(($$result, $$props, $$slots) => {
  const products = [
    { name: "Lunest", type: "Sleep Recovery", status: "BUILDING", href: "/tools/lunest/" },
    { name: "AI Finance", type: "Financial Report Analysis", status: "LIVE", href: "/tools/ai-finance/" },
    { name: "MCP Diagnostics", type: "Open-source utility", status: "OPEN SOURCE", href: "https://github.com/xbstack/mcp-stdio-diagnostics" }
  ];
  const activity = [
    { role: "FIX", tone: "var(--v7-fix)", title: "MCP -32700 Parse Error", href: "/ai/mcp-json-rpc-parse-error/" },
    { role: "LAB", tone: "var(--v7-lab)", title: "GPT-5.6 \u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4", href: "/ai/tools-lab/" },
    { role: "BUILD", tone: "var(--v7-build)", title: "Lunest \u4EA7\u54C1\u8FDB\u5C55", href: "/tools/lunest/" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="v7-section !py-14 sm:!py-16 lg:!py-20" id="build"> <div class="v7-container"> <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]"> <div> <div class="v7-eyebrow text-[var(--v7-build)]"><span class="v7-dot"></span> Built by XBSTACK</div> <h2 class="mt-3 text-[clamp(30px,4vw,48px)] font-[820] leading-[1.05] tracking-[-0.045em] text-[var(--v7-ink)]">内容最终要落到真实资产。</h2> <div class="mt-7 divide-y divide-[var(--v7-line)] border-y border-[var(--v7-line)]"> ${products.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="grid gap-2 py-4 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-5"> <strong class="text-[15px] tracking-[-0.02em] text-[var(--v7-ink)]">${item.name}</strong> <span class="text-xs text-[var(--v7-muted)]">${item.type}</span> <span class="v7-status w-fit">${item.status}</span> </a>`)} </div> </div> <aside id="community" class="border-t border-[var(--v7-line)] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"> <div class="v7-eyebrow text-[var(--v7-community)]"><span class="v7-dot"></span> Community pulse</div> <h3 class="mt-4 text-2xl font-extrabold leading-8 tracking-[-0.035em] text-[var(--v7-ink)]">MCP 最终会停留在协议层，还是继续侵入 Agent Runtime？</h3> <p class="mt-4 text-sm leading-6 text-[var(--v7-muted)]">首页只给一个正在讨论的问题。真实评论、未回答问题和更多社区内容下沉到 Community 页面。</p> <a href="/practice/v7/thesis/" class="mt-5 inline-block text-sm font-extrabold text-[var(--v7-community)]">加入讨论 →</a> </aside> </div> <div class="mt-12 border-t border-[var(--v7-line)] pt-7"> <div class="mb-4 flex items-center justify-between gap-4"> <div class="v7-eyebrow">Latest activity</div> <a href="/archive/" class="v7-link text-xs font-bold">全部归档 →</a> </div> <div class="grid gap-x-6 gap-y-0 md:grid-cols-3"> ${activity.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="grid grid-cols-[54px_1fr] items-center gap-3 border-t border-[var(--v7-line)] py-4"> <span class="font-mono text-[10px] font-black"${addAttribute(`color:${item.tone}`, "style")}>${item.role}</span> <strong class="text-sm leading-5 text-[var(--v7-ink)]">${item.title}</strong> </a>`)} </div> </div> </div> </section>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/v7/HomePanels.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V7Frame", $$V7Frame, { "title": "XBSTACK V7 \u9996\u9875\u539F\u578B", "description": "XBSTACK V7 Developer Studio \u9996\u9875\u539F\u578B\uFF1ASolve\u3001Think\u3001Build\u3001Discuss \u56DB\u6761\u7528\u6237\u8DEF\u5F84\uFF0C\u5C55\u793A Now\u3001\u89C2\u70B9\u3001\u5B9E\u9A8C\u3001\u4EA7\u54C1\u4E0E\u793E\u533A\u3002", "section": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StudioHero", $$StudioHero, {})} ${renderComponent($$result2, "FeaturedThesis", $$FeaturedThesis, {})} ${renderComponent($$result2, "HomePanels", $$HomePanels, {})} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/practice/v7/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/practice/v7/index.astro";
const $$url = "/practice/v7/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
