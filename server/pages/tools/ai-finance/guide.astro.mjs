import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DhkRtcHh.mjs';
import { a as getEntry } from '../../../chunks/_astro_content_CEdkLuU4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Guide = createComponent(async ($$result, $$props, $$slots) => {
  const title = "AI \u8D22\u62A5\u5206\u6790\u52A9\u624B\u7814\u53D1\u8DEF\u7EBF\uFF1APDF \u89E3\u6790\u3001JSON Schema\u3001\u4EFB\u52A1\u961F\u5217\u3001\u8BC1\u636E\u94FE\u4E0E\u4EBA\u5DE5\u590D\u6838 - XBSTACK";
  const description = "AI \u8D22\u62A5\u5206\u6790\u52A9\u624B\u7814\u53D1\u5E94\u8BE5\u600E\u4E48\u505A\uFF1F\u672C\u6587\u6309 PDF \u89E3\u6790\u3001JSON Schema\u3001source_page\u3001evidence\u3001\u5F02\u6B65\u4EFB\u52A1\u961F\u5217\u3001Golden Dataset \u548C\u4EBA\u5DE5\u590D\u6838\u7EC4\u7EC7\u5B8C\u6574\u7814\u53D1\u8DEF\u7EBF\uFF0C\u5E76\u5BFC\u5411\u7231\u8D22\u62A5\u5DE5\u5177\u9875\u3002";
  const keywords = "AI \u8D22\u62A5\u52A9\u624B\u7814\u53D1\u8DEF\u7EBF, \u8D22\u62A5 PDF \u89E3\u6790, LLM JSON Schema, source_page, evidence, Golden Dataset \u8BC4\u6D4B, \u667A\u80FD\u4F53\u4EFB\u52A1\u961F\u5217, AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177";
  const faqItems = [
    {
      question: "\u8FD9\u9875\u548C /tools/ai-finance/ \u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
      answer: "\u5F53\u524D\u5DE5\u5177\u9875\u8D1F\u8D23\u80A1\u7968\u4EE3\u7801\u5206\u6790\u548C\u5185\u6D4B\u8F6C\u5316\uFF1B\u8FD9\u4E2A Guide \u9875\u89E3\u91CA\u540E\u7EED PDF \u89E3\u6790\u3001JSON Schema\u3001\u4EFB\u52A1\u961F\u5217\u3001\u8BC4\u4F30\u96C6\u3001\u8BC1\u636E\u94FE\u548C\u4EBA\u5DE5\u590D\u6838\u7814\u53D1\u8DEF\u7EBF\u3002\u4E24\u8005\u4E0D\u80FD\u6DF7\u5199\u6210\u5DF2\u7ECF\u4E0A\u7EBF\u7684\u540C\u4E00\u5957\u80FD\u529B\u3002"
    },
    {
      question: "AI \u8D22\u62A5\u5206\u6790\u52A9\u624B\u7814\u53D1\u5E94\u8BE5\u5148\u505A\u54EA\u4E00\u6B65\uFF1F",
      answer: "\u5148\u505A PDF \u6587\u672C\u548C\u8868\u683C\u89E3\u6790\uFF0C\u518D\u505A JSON Schema \u7ED3\u6784\u5316\u8F93\u51FA\uFF0C\u6700\u540E\u8865\u4EFB\u52A1\u961F\u5217\u3001\u8BC4\u4F30\u96C6\u548C\u4EBA\u5DE5\u590D\u6838\u72B6\u6001\u3002\u4E0D\u8981\u4E00\u5F00\u59CB\u5C31\u505A\u7ED3\u8BBA\u751F\u6210\u3002"
    },
    {
      question: "\u4E3A\u4EC0\u4E48\u8981\u628A source_page \u548C evidence \u653E\u8FDB\u7814\u53D1\u8DEF\u7EBF\uFF1F",
      answer: "\u56E0\u4E3A\u8D22\u62A5\u5206\u6790\u4E0D\u80FD\u53EA\u7ED9\u6458\u8981\u3002\u6BCF\u4E2A KPI\u3001\u98CE\u9669\u6BB5\u843D\u548C\u7BA1\u7406\u5C42\u8868\u8FF0\u90FD\u5FC5\u987B\u80FD\u56DE\u5230\u539F\u6587\u9875\u7801\u548C\u8BC1\u636E\u7247\u6BB5\uFF0C\u65B9\u4FBF\u4EBA\u5DE5\u590D\u6838\u3002"
    },
    {
      question: "\u8FD9\u4E2A Guide \u4F1A\u63D0\u4F9B\u6295\u8D44\u5224\u65AD\u5417\uFF1F",
      answer: "\u4E0D\u4F1A\u3002\u8FD9\u91CC\u662F\u4EA7\u54C1\u548C\u5DE5\u7A0B\u8DEF\u7EBF\uFF0C\u4E0D\u63D0\u4F9B\u80A1\u7968\u4E70\u5356\u5EFA\u8BAE\u3001\u76EE\u6807\u4EF7\u3001\u4ED3\u4F4D\u6216\u77ED\u7EBF\u9884\u6D4B\u3002"
    }
  ];
  const routeBlocks = [
    { title: "PDF \u89E3\u6790\u5C42", desc: "PDF\u300110-K\u300110-Q\u3001\u5E74\u62A5\u3001transcript\uFF0C\u5148\u89E3\u51B3\u6587\u672C\u3001\u8868\u683C\u3001\u8DE8\u9875\u548C\u9875\u7801\u4FDD\u771F\u3002" },
    { title: "JSON Schema \u5C42", desc: "\u7528 Schema \u7EA6\u675F financial_metrics\u3001risk_factors\u3001source_page\u3001evidence\u3001confidence\u3002" },
    { title: "\u5F02\u6B65\u4EFB\u52A1\u5C42", desc: "\u7528\u4EFB\u52A1\u961F\u5217\u3001\u72B6\u6001\u673A\u548C\u8FDB\u5EA6\u56DE\u4F20\u5904\u7406\u5927\u6587\u4EF6\u3001\u8D85\u65F6\u3001\u5931\u8D25\u91CD\u8BD5\u548C\u7528\u6237\u7B49\u5F85\u3002" },
    { title: "\u8BC1\u636E\u94FE\u4E0E\u590D\u6838\u5C42", desc: "\u7528 Golden Dataset\u3001review_status\u3001\u4EBA\u5DE5\u590D\u6838\u548C\u9519\u8BEF\u6837\u4F8B\u8861\u91CF\u6A21\u578B\u662F\u5426\u53EF\u9760\u3002" }
  ];
  const slugs = [
    "ai-finance-analysis-tool",
    "ai-finance-report-7-steps",
    "ai-financial-report-implementation",
    "financial-report-pdf-table-extraction",
    "llm-json-schema-financial-report-extraction",
    "ai-financial-report-evaluation-golden-dataset",
    "ai-financial-report-task-queue"
  ];
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await getEntry("ai", slug);
      return entry;
    })
  );
  const guideArticles = articles.filter(Boolean);
  const stepsInfo = [
    {
      stepNum: "01",
      label: "\u5DE5\u5177\u5B9A\u4E49\u4E0E\u8BBE\u8BA1",
      title: "AI \u8D22\u62A5\u52A9\u624B\u662F\u4EC0\u4E48",
      desc: "\u4ECB\u7ECD\u57FA\u4E8E\u5927\u6A21\u578B\u4E0E RAG \u67B6\u6784\u7684\u4F01\u4E1A\u8D22\u62A5\u5206\u6790\u5DE5\u5177\u7684\u8BDE\u751F\u80CC\u666F\u4E0E\u6838\u5FC3\u75DB\u70B9\u3002",
      url: "/ai/ai-finance-analysis-tool/"
    },
    {
      stepNum: "02",
      label: "\u5B9E\u64CD\u4E0E\u65B9\u6CD5\u8BBA",
      title: "7 \u6B65\u8D22\u62A5\u5206\u6790\u6D41\u7A0B",
      desc: "\u4ECE PDF \u8F93\u5165\u5230\u751F\u6210\u6700\u7EC8\u98CE\u9669\u68C0\u67E5\u6E05\u5355\u7684\u5B8C\u6574\u6D41\u7A0B\u8BBE\u8BA1\u4E0E\u4EBA\u673A\u534F\u540C\u65B9\u6848\u3002",
      url: "/ai/ai-finance-report-7-steps/"
    },
    {
      stepNum: "03",
      label: "\u6838\u5FC3\u7CFB\u7EDF\u67B6\u6784",
      title: "\u6280\u672F\u67B6\u6784\u8BBE\u8BA1\u4E0E\u5B9E\u73B0",
      desc: "\u62C6\u89E3\u5982\u4F55\u5C06\u957F\u6587\u672C\u8D22\u62A5 PDF \u8F6C\u6362\u4E3A\u7ED3\u6784\u5316\u7684\u98CE\u9669\u5BA1\u8BA1\u4EFB\u52A1\uFF0C\u5EFA\u7ACB\u5E95\u5C42\u7684\u903B\u8F91\u6D41\u7BA1\u9053\u3002",
      url: "/ai/ai-financial-report-analyzer-architecture/"
    },
    {
      stepNum: "04",
      label: "\u6570\u636E\u89E3\u6790\u5C42",
      title: "PDF \u8868\u683C\u63D0\u53D6\u4E0E\u89E3\u6790",
      desc: "\u89E3\u51B3\u5927\u6A21\u578B\u8BFB\u9519\u6570\u636E\u3001\u9519\u4F4D\u8868\u683C\u7684\u6838\u5FC3\u5DE5\u7A0B\u95EE\u9898\uFF0C\u786E\u4FDD\u6E90\u5934\u8F93\u5165\u6570\u636E\u7684\u7EDD\u5BF9\u53EF\u4FE1\u5EA6\u3002",
      url: "/ai/financial-report-pdf-table-extraction/"
    },
    {
      stepNum: "05",
      label: "\u6A21\u578B\u8BED\u4E49\u5C42",
      title: "JSON Schema \u7ED3\u6784\u5316\u8F93\u51FA",
      desc: "\u7F16\u5199\u4E25\u683C\u7684 Zod Schema \u9501\u6B7B\u5927\u6A21\u578B\u8F93\u51FA\u683C\u5F0F\uFF0C\u9632\u6B62\u6838\u5FC3 KPI \u548C\u98CE\u9669\u56E0\u5B50\u53D1\u751F\u683C\u5F0F\u5D29\u6E83\u3002",
      url: "/ai/llm-json-schema-financial-report-extraction/"
    },
    {
      stepNum: "06",
      label: "\u8D28\u91CF\u63A7\u5236\u5C42",
      title: "Golden Dataset \u8BC4\u6D4B\u4F53\u7CFB",
      desc: "\u8BBE\u8BA1\u9EC4\u91D1\u6570\u636E\u96C6\u4F5C\u4E3A\u72EC\u7ACB\u6D4B\u8BD5\u6CD5\u5EAD\uFF0C\u79D2\u7EA7\u6355\u6349\u5E76\u91CF\u5316\u5927\u6A21\u578B\u5728\u8D22\u62A5\u5BA1\u8BA1\u4E2D\u7684\u5E7B\u89C9\u7387\u3002",
      url: "/ai/ai-financial-report-evaluation-golden-dataset/"
    },
    {
      stepNum: "07",
      label: "\u540E\u7AEF\u9AD8\u53EF\u9760",
      title: "\u5F02\u6B65\u4EFB\u52A1\u961F\u5217\u4E0E\u72B6\u6001\u673A",
      desc: "\u8BBE\u8BA1\u652F\u6301 PDF \u89E3\u6790\u3001LLM \u8017\u65F6\u4EFB\u52A1\u548C SSE \u8FDB\u5EA6\u56DE\u4F20\u7684\u4EFB\u52A1\u961F\u5217\uFF0C\u5904\u7406\u8D85\u65F6\u4E0E\u6545\u969C\u91CD\u8BD5\u3002",
      url: "/ai/ai-financial-report-task-queue/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-[#070b19] dark:bg-[#030712] backdrop-blur-[20px]"></div>  <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div> <div class="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div> </div> <main class="relative z-10 text-white pt-32 pb-24 min-h-screen text-left"> <div class="container mx-auto px-6 max-w-5xl">  <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-12 animate-fadeDown"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/tools/" class="hover:text-orange-500 transition-colors">自研实验室</a> <span class="opacity-30">/</span> <a href="/tools/ai-finance/" class="hover:text-orange-500 transition-colors">AI 财报助手</a> <span class="opacity-30">/</span> <span class="text-orange-500">专题指南</span> </nav>  <header class="mb-20 animate-fadeUp"> <div class="inline-flex items-center gap-3 mb-6"> <span class="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20">
Topic Hub Page
</span> <span class="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
AIP - V4.2
</span> </div> <h1 class="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
AI 财报分析助手 <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-sky-400 to-indigo-500">
研发路线
</span> <br>
PDF / Schema / Evidence
</h1> <p class="text-slate-400 font-bold max-w-3xl leading-relaxed italic text-lg border-l-4 border-orange-500 pl-6 my-8">
「 这不是普通文章列表，而是 AI 财报分析助手的研发路线：先保证 PDF 页码和表格可信，再约束 JSON 输出，最后用任务队列、评估集和人工复核把 AI 结果变成可检查的产品能力。 」
</p> <div class="flex flex-wrap gap-3"> <a href="/tools/ai-finance/" class="px-5 py-3 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">直接打开 AI 财报助手 →</a> <a href="/ai/ai-finance-report-7-steps/" class="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 text-[10px] font-black uppercase tracking-widest hover:border-sky-400 transition-colors">从 7 步流程开始</a> </div> </header> <section class="mb-16 grid grid-cols-1 md:grid-cols-4 gap-4 animate-fadeUp"> ${routeBlocks.map((item) => renderTemplate`<article class="p-5 rounded-[28px] bg-white/[0.055] border border-white/10"> <h2 class="text-sm font-black text-orange-400 mb-3">${item.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-400">${item.desc}</p> </article>`)} </section>  <section class="space-y-6 animate-fadeUp"> <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5"> <h2 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
技术演进流 / ARCHITECTURE STEPS
</h2> <span class="text-xs text-slate-500 font-mono">共 ${stepsInfo.length} 个核心阶段</span> </div> <div class="grid gap-6"> ${stepsInfo.map((step, idx) => {
    const articleEntry = guideArticles.find((art) => art.id.replace(/\.(md|mdx)$/, "") === slugs[idx]);
    const pubDate = articleEntry?.data?.createdAt ? new Date(articleEntry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "2026-06";
    return renderTemplate`<a${addAttribute(step.url, "href")} class="group block relative p-0.5 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent hover:from-orange-500/30 hover:to-sky-500/20 transition-all duration-500"> <div class="p-8 rounded-[31px] bg-slate-950/80 backdrop-blur-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl overflow-hidden relative">  <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-orange-500/5 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700"></div> <div class="flex items-start gap-6 relative z-10 flex-1">  <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center font-mono"> <span class="text-xs font-black text-slate-500 uppercase tracking-widest leading-none">Step</span> <span class="text-2xl font-black text-orange-500 leading-none mt-1">${step.stepNum}</span> </div> <div class="space-y-2"> <div class="flex items-center gap-3"> <span class="text-[9px] font-black uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded"> ${step.label} </span> <span class="text-[9px] font-mono text-slate-500"> ${pubDate} </span> </div> <h3 class="text-2xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors italic"> ${step.title} </h3> <p class="text-sm text-slate-400 leading-relaxed font-medium"> ${step.desc} </p> </div> </div> <div class="flex-shrink-0 flex items-center gap-2 relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 group-hover:translate-x-2 transition-transform pl-22 md:pl-0">
研读指南
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </div> </div> </a>`;
  })} </div> </section> <section class="mt-20 p-10 rounded-[44px] bg-white/[0.045] border border-white/10 animate-fadeUp"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-white mb-8">常见问题 / FAQ</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${faqItems.map((item) => renderTemplate`<article class="p-6 rounded-[28px] bg-slate-950/70 border border-white/10"> <h3 class="text-base font-black text-orange-300 mb-3">${item.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-400">${item.answer}</p> </article>`)} </div> </section>  <section class="mt-20 p-12 rounded-[48px] bg-gradient-to-br from-orange-500/10 via-sky-500/5 to-transparent border border-white/5 animate-fadeUp flex flex-col md:flex-row items-center justify-between gap-8"> <div class="space-y-4 max-w-xl text-center md:text-left"> <h2 class="text-3xl font-black italic uppercase tracking-tight text-white leading-none">
先体验公开股票代码分析
</h2> <p class="text-sm text-slate-400 font-medium leading-relaxed">
当前工具可查看公开行情、历史财务趋势和风险摘要；PDF 上传、source_page、evidence、confidence 和 review_status 仍是这条研发路线要继续实现和验证的能力。
</p> </div> <a href="/tools/ai-finance/" class="flex-shrink-0 px-10 py-5 rounded-full bg-orange-600 hover:bg-orange-700 font-black uppercase text-[11px] tracking-[0.3em] text-white shadow-2xl shadow-orange-600/30 hover:scale-[1.02] transition-all">
进入 AI 财报助手工具 →
</a> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/guide.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/guide.astro";
const $$url = "/tools/ai-finance/guide/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
