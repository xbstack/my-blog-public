import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { W as WaitlistForm } from '../../chunks/WaitlistForm_BLhsSqeW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177\uFF1A\u8F93\u5165\u80A1\u7968\u4EE3\u7801\uFF0C\u751F\u6210\u8D22\u52A1\u6307\u6807\u4E0E\u98CE\u9669\u5BA1\u8BA1\u62A5\u544A";
  const description = "\u8F93\u5165\u80A1\u7968\u4EE3\u7801\u5373\u53EF\u751F\u6210\u516C\u5F00\u8D22\u52A1\u6570\u636E\u5BA1\u8BA1\u62A5\u544A\uFF0C\u67E5\u770B\u73B0\u4EF7\u3001\u5E02\u503C\u3001\u4F30\u503C\u3001\u6536\u5165\u3001\u51C0\u5229\u6DA6\u3001ROE\u3001\u6BDB\u5229\u7387\u548C\u98CE\u9669\u6458\u8981\u3002\u7231\u8D22\u62A5\u4E0D\u9884\u6D4B\u80A1\u4EF7\uFF0C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\uFF0C\u7ED3\u679C\u5FC5\u987B\u7ED3\u5408\u539F\u59CB\u8D22\u62A5\u4EBA\u5DE5\u590D\u6838\u3002";
  const keywords = "\u7231\u8D22\u62A5, financial report ai, AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177, AI Financial Report Analyzer, \u80A1\u7968\u8D22\u62A5\u5206\u6790, \u8D22\u52A1\u6307\u6807\u5206\u6790, ROE \u5206\u6790, \u8D22\u62A5\u98CE\u9669\u5206\u6790, \u80A1\u7968\u4EE3\u7801\u5206\u6790\u5DE5\u5177, XBSTACK";
  const faqItems = [
    {
      question: "\u7231\u8D22\u62A5\u4F1A\u7ED9\u51FA\u4E70\u5356\u5EFA\u8BAE\u5417\uFF1F",
      answer: "\u4E0D\u4F1A\u3002\u5F53\u524D\u516C\u5F00\u7248\u6574\u7406\u516C\u5F00\u884C\u60C5\u3001\u5386\u53F2\u8D22\u52A1\u6307\u6807\u548C AI \u98CE\u9669\u6458\u8981\uFF0C\u4E0D\u9884\u6D4B\u80A1\u4EF7\uFF0C\u4E5F\u4E0D\u8F93\u51FA\u5177\u4F53\u4E70\u5165\u3001\u5356\u51FA\u6216\u4ED3\u4F4D\u5EFA\u8BAE\u3002"
    },
    {
      question: "\u5F53\u524D\u7248\u672C\u9700\u8981\u4E0A\u4F20\u8D22\u62A5 PDF \u5417\uFF1F",
      answer: "\u4E0D\u9700\u8981\u3002\u5F53\u524D\u9875\u9762\u53EA\u63D0\u4EA4\u4F60\u8F93\u5165\u7684\u80A1\u7968\u4EE3\u7801\u5230 XBSTACK \u5BA1\u8BA1 API\uFF0C\u518D\u8FD4\u56DE\u516C\u5F00\u8D22\u52A1\u4E0E\u884C\u60C5\u6570\u636E\u7684\u7ED3\u6784\u5316\u7ED3\u679C\u3002\u6279\u91CF PDF\u3001\u8BC1\u636E\u9875\u7801\u548C\u79C1\u6709\u5316\u5206\u6790\u4ECD\u5C5E\u4E8E\u540E\u7EED\u5185\u6D4B\u65B9\u5411\u3002"
    },
    {
      question: "\u5B83\u548C\u76F4\u63A5\u95EE ChatGPT \u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
      answer: "\u666E\u901A\u5BF9\u8BDD\u66F4\u504F\u4E34\u65F6\u95EE\u7B54\uFF1B\u7231\u8D22\u62A5\u628A\u73B0\u4EF7\u3001\u5E02\u503C\u3001\u4F30\u503C\u3001\u5386\u53F2\u6536\u5165\u3001\u51C0\u5229\u6DA6\u3001ROE\u3001\u6BDB\u5229\u7387\u548C\u5206\u9879\u5BA1\u8BA1\u653E\u5728\u540C\u4E00\u4EFD\u62A5\u544A\u4E2D\uFF0C\u4FBF\u4E8E\u91CD\u590D\u67E5\u770B\u548C\u6A2A\u5411\u590D\u76D8\u3002"
    },
    {
      question: "\u54EA\u4E9B\u80A1\u7968\u4EE3\u7801\u53EF\u4EE5\u5C1D\u8BD5\uFF1F",
      answer: "\u53EF\u4EE5\u5148\u4F7F\u7528\u9875\u9762\u63D0\u4F9B\u7684 NVDA\u3001\u817E\u8BAF\u63A7\u80A1 700 \u548C\u8D35\u5DDE\u8305\u53F0 600519 \u516C\u5F00\u6837\u4F8B\u3002\u5176\u4ED6\u4EE3\u7801\u662F\u5426\u53EF\u7528\u53D6\u51B3\u4E8E\u5F53\u524D\u6570\u636E\u6E90\u8986\u76D6\u8303\u56F4\uFF0C\u5931\u8D25\u65F6\u9875\u9762\u4F1A\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002"
    },
    {
      question: "\u751F\u6210\u7ED3\u679C\u540E\u5E94\u8BE5\u5148\u770B\u4EC0\u4E48\uFF1F",
      answer: "\u5148\u786E\u8BA4\u516C\u53F8\u540D\u79F0\u3001\u4EE3\u7801\u3001\u5E01\u79CD\u548C\u5386\u53F2\u5E74\u4EFD\u662F\u5426\u6B63\u786E\uFF0C\u518D\u770B\u6536\u5165\u3001\u51C0\u5229\u6DA6\u3001ROE\u3001\u6BDB\u5229\u7387\u4EE5\u53CA\u98CE\u9669\u5BA1\u8BA1\u6458\u8981\u662F\u5426\u4E0E\u516C\u53F8\u539F\u59CB\u5E74\u62A5\u4E00\u81F4\u3002"
    },
    {
      question: "\u4E3A\u4EC0\u4E48\u7ED3\u679C\u4ECD\u7136\u9700\u8981\u4EBA\u5DE5\u590D\u6838\uFF1F",
      answer: "\u7B2C\u4E09\u65B9\u516C\u5F00\u63A5\u53E3\u53EF\u80FD\u5B58\u5728\u5EF6\u8FDF\u3001\u7F3A\u5931\u3001\u53E3\u5F84\u5DEE\u5F02\u6216\u5355\u4F4D\u9519\u8BEF\uFF0CAI \u6458\u8981\u4E5F\u53EF\u80FD\u9057\u6F0F\u91CD\u8981\u4FE1\u606F\u3002\u6D89\u53CA\u6295\u8D44\u5224\u65AD\u65F6\uFF0C\u5E94\u56DE\u5230\u516C\u53F8\u516C\u544A\u3001\u5E74\u62A5\u548C\u76D1\u7BA1\u62AB\u9732\u6838\u5BF9\u3002"
    }
  ];
  const fitItems = [
    "\u60F3\u5148\u7528\u80A1\u7968\u4EE3\u7801\u5FEB\u901F\u67E5\u770B\u5386\u53F2\u8D22\u52A1\u6307\u6807\u548C\u98CE\u9669\u6458\u8981\u7684\u4E2A\u4EBA\u7814\u7A76\u8005",
    "\u9700\u8981\u9A8C\u8BC1 AI \u8D22\u52A1\u6570\u636E\u4EA7\u54C1\u4EA4\u4E92\u3001\u9519\u8BEF\u5904\u7406\u548C\u62A5\u544A\u7ED3\u6784\u7684\u72EC\u7ACB\u5F00\u53D1\u8005",
    "\u5E0C\u671B\u628A\u516C\u5F00\u8D22\u52A1\u6307\u6807\u6574\u7406\u6210\u6295\u7814\u590D\u76D8\u8D77\u70B9\u7684\u5185\u5BB9\u521B\u4F5C\u8005"
  ];
  const unfitItems = [
    "\u5E0C\u671B AI \u76F4\u63A5\u544A\u8BC9\u4F60\u4E70\u54EA\u53EA\u80A1\u7968\u3001\u4EC0\u4E48\u65F6\u5019\u4E70\u5356\u6216\u914D\u591A\u5C11\u4ED3\u4F4D\u7684\u4EBA",
    "\u9700\u8981\u4E0A\u4F20\u79C1\u6709 PDF\u3001\u6279\u91CF\u5904\u7406\u6587\u4EF6\u6216\u83B7\u5F97\u6CD5\u5B9A\u5BA1\u8BA1\u7ED3\u8BBA\u7684\u4EBA",
    "\u9700\u8981\u5B9E\u65F6\u4EA4\u6613\u4FE1\u53F7\u3001\u65E0\u5EF6\u8FDF\u884C\u60C5\u3001\u6295\u987E\u670D\u52A1\u6216\u77ED\u7EBF\u4EF7\u683C\u9884\u6D4B\u7684\u4EBA"
  ];
  const sampleRows = [
    { field: "ticker", value: "NVDA / 700 / 600519", note: "\u7528\u6237\u8F93\u5165\u6216\u70B9\u51FB\u516C\u5F00\u6837\u4F8B\u540E\u63D0\u4EA4\u7684\u80A1\u7968\u4EE3\u7801" },
    { field: "market_snapshot", value: "\u73B0\u4EF7 / \u5E02\u503C / PE / PB", note: "\u6765\u81EA\u5F53\u524D\u516C\u5F00\u884C\u60C5\u63A5\u53E3\uFF0C\u53EF\u80FD\u5B58\u5728\u5EF6\u8FDF\u6216\u5B57\u6BB5\u7F3A\u5931" },
    { field: "history", value: "\u6536\u5165 / \u51C0\u5229\u6DA6 / ROE / \u6BDB\u5229\u7387", note: "\u6309\u53EF\u7528\u5386\u53F2\u5E74\u4EFD\u5C55\u793A\uFF0C\u7528\u4E8E\u8D8B\u52BF\u590D\u76D8\u800C\u975E\u6536\u76CA\u9884\u6D4B" },
    { field: "audit_sections", value: "\u884C\u4E1A / \u57FA\u672C\u9762 / \u8D22\u52A1 / \u4F30\u503C / \u98CE\u9669", note: "AI \u751F\u6210\u7684\u5206\u9879\u6458\u8981\uFF0C\u9700\u8981\u56DE\u5230\u539F\u59CB\u516C\u544A\u548C\u5E74\u62A5\u590D\u6838" },
    { field: "currency", value: "CNY / USD / HKD", note: "\u9875\u9762\u660E\u786E\u663E\u793A\u7ED3\u7B97\u5E01\u79CD\uFF0C\u907F\u514D\u91D1\u989D\u5355\u4F4D\u6DF7\u7528" },
    { field: "error_state", value: "unsupported / unavailable", note: "\u4EE3\u7801\u4E0D\u53D7\u652F\u6301\u6216\u63A5\u53E3\u5931\u8D25\u65F6\u4FDD\u7559\u660E\u786E\u9519\u8BEF\u72B6\u6001" }
  ];
  const relatedArticles = [
    { title: "AI \u8D22\u62A5\u5206\u6790\u7684 7 \u4E2A\u6B65\u9AA4", href: "/ai/ai-finance-report-7-steps/" },
    { title: "JSON Schema \u7EA6\u675F\u8D22\u62A5\u62BD\u53D6", href: "/ai/llm-json-schema-financial-report-extraction/" },
    { title: "\u8D22\u62A5 PDF \u8868\u683C\u62BD\u53D6\u5B9E\u6218", href: "/ai/financial-report-pdf-table-extraction/" },
    { title: "AI \u8D22\u62A5\u5F02\u6B65\u4EFB\u52A1\u961F\u5217", href: "/ai/ai-financial-report-task-queue/" },
    { title: "Golden Dataset \u8BC4\u4F30\u96C6", href: "/ai/ai-financial-report-evaluation-golden-dataset/" },
    { title: "AI \u6587\u6863\u5206\u6790 Agent \u5BF9\u6BD4", href: "/ai/comparison-of-ai-document-analysis-agents/" },
    { title: "Gemini 3 \u4E0E MCP \u8D22\u62A5\u5BA1\u8BA1", href: "/ai/gemini3-mcp-audit/" },
    { title: "AI \u8D22\u62A5\u52A9\u624B\u67B6\u6784", href: "/ai/ai-financial-report-analyzer-architecture/" }
  ];
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "\u7231\u8D22\u62A5 AI Financial Report Analyzer",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0" },
        "description": "\u7231\u8D22\u62A5\u662F XBSTACK \u7684 AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177\u3002\u5F53\u524D\u516C\u5F00\u7248\u6839\u636E\u80A1\u7968\u4EE3\u7801\u6574\u7406\u516C\u5F00\u884C\u60C5\u3001\u5386\u53F2\u8D22\u52A1\u6307\u6807\u548C\u98CE\u9669\u5BA1\u8BA1\u6458\u8981\uFF0C\u4E0D\u63D0\u4F9B\u80A1\u4EF7\u9884\u6D4B\u6216\u4E70\u5356\u5EFA\u8BAE\u3002",
        "featureList": [
          "Public market snapshot",
          "Historical revenue and profit trends",
          "ROE and gross margin review",
          "AI-assisted risk summary",
          "Public sample ticker workflow"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": schemaJsonLd }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-24 min-h-screen text-left"> <div class="max-w-6xl mx-auto"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 animate-fadeDown"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai/" class="hover:text-orange-500 transition-colors">知识库</a> <span class="opacity-30">/</span> <span class="text-orange-500">AI 财报分析</span> </nav> <header class="mb-12 animate-fadeUp"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-6"> <div> <h1 class="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 leading-none">
爱财报 <span class="text-orange-500">AI</span> <br> Financial Report Analyzer
</h1> <div class="flex items-center gap-4 mb-4"> <span class="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">爱财报 / AI 财报分析 / Financial Report AI</span> <a href="/en/tools/ai-finance/" class="px-3 py-1 rounded-full border border-orange-500/30 text-[10px] font-black text-orange-500 hover:bg-orange-500/10 transition-all uppercase tracking-widest">English Version</a> </div> <p class="text-slate-600 dark:text-slate-400 font-bold max-w-2xl leading-relaxed italic">
输入股票代码，查看公开行情快照、历史收入、净利润、ROE、毛利率和分项风险审计。当前公开版不上传财报 PDF，不预测股价，也不提供买卖建议；所有结果都应回到公司公告和原始财报人工复核。
</p> <div class="flex flex-wrap gap-3 mt-6"> <a href="#finance-analyzer" class="px-6 py-3 rounded-2xl bg-orange-500 text-white text-xs font-black tracking-widest hover:bg-orange-600 transition-colors">输入代码开始分析</a> <a href="#sample-report" class="px-6 py-3 rounded-2xl border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-black tracking-widest hover:border-orange-500 hover:text-orange-500 transition-colors">先看当前输出结构</a> </div> </div> </div> </header> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">  <div id="finance-analyzer" class="lg:col-span-8 scroll-mt-28"> <div class="relative"> <div class="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div> <div class="relative z-10"> ${renderComponent($$result2, "FinanceAnalyzer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/tools/components/FinanceAnalyzer.jsx", "client:component-export": "default" })} </div> </div> </div>  <div class="lg:col-span-4 space-y-8"> <section class="p-8 rounded-[40px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10"> <h3 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6 flex items-center gap-3"> <span class="h-4 w-1 bg-orange-500"></span> 它能做什么 / CAPABILITIES
</h3> <ul class="space-y-6"> <li class="space-y-2"> <div class="text-[10px] font-black text-orange-500 uppercase">01. 行情与估值快照</div> <p class="text-xs text-slate-500 dark:text-slate-400 font-bold">按股票代码整理现价、流通市值、市盈率、市净率和结算币种，字段缺失时明确显示同步状态。</p> </li> <li class="space-y-2"> <div class="text-[10px] font-black text-orange-500 uppercase">02. 历史财务趋势</div> <p class="text-xs text-slate-500 dark:text-slate-400 font-bold">集中展示收入、净利润、ROE 和毛利率的历史变化，方便快速发现趋势和异常年份。</p> </li> <li class="space-y-2"> <div class="text-[10px] font-black text-orange-500 uppercase">03. 分项风险摘要</div> <p class="text-xs text-slate-500 dark:text-slate-400 font-bold">生成行业、基本面、财务、估值和风险摘要，作为回到公司公告和原始财报复核的起点。</p> </li> </ul> </section> <section class="p-8 rounded-[40px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10"> <h3 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6 flex items-center gap-3"> <span class="h-4 w-1 bg-rose-500"></span> 它不能做什么 / LIMITATIONS
</h3> <ul class="space-y-4 text-xs font-bold text-slate-500 dark:text-slate-400"> <li class="flex items-start gap-2"><span class="text-rose-500 mt-0.5">×</span> 不预测短期股价走势</li> <li class="flex items-start gap-2"><span class="text-rose-500 mt-0.5">×</span> 不提供具体的买卖操作建议</li> <li class="flex items-start gap-2"><span class="text-rose-500 mt-0.5">×</span> 不替代人工对复杂报表的最终审计</li> </ul> </section> <div class="p-8 rounded-[40px] bg-sky-500/5 border border-sky-500/10"> <h4 class="text-[10px] font-black uppercase text-sky-500 mb-2">Data & Privacy</h4> <p class="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-4">当前公开分析只提交股票代码到 XBSTACK API，不上传财报 PDF。行情和财务字段来自第三方公开接口，可能延迟或缺失；等待名单中的邮箱只用于内测和重要产品更新。</p> ${renderComponent($$result2, "WaitlistForm", WaitlistForm, { "client:idle": true, "source": "ai_finance_waitlist", "idleLabel": "\u7533\u8BF7\u5185\u6D4B", "privacyNote": "\u90AE\u7BB1\u3001\u79F0\u547C\u548C\u4F7F\u7528\u573A\u666F\u4EC5\u7528\u4E8E\u7231\u8D22\u62A5\u5185\u6D4B\u6C9F\u901A\uFF0C\u4E0D\u4F1A\u4F5C\u4E3A\u80A1\u7968\u5206\u6790\u8F93\u5165\uFF0C\u4E5F\u4E0D\u4F1A\u7528\u4E8E\u53D1\u9001\u65E0\u5173\u8425\u9500\u90AE\u4EF6\u3002", "showName": true, "showPlatform": true, "showUseCase": true, "platformOptions": ["Web", "API", "\u79C1\u6709\u5316\u90E8\u7F72", "\u6682\u4E0D\u786E\u5B9A"], "useCasePlaceholder": "\u4F60\u5E0C\u671B\u540E\u7EED\u652F\u6301\u4EC0\u4E48\uFF1F\u4F8B\u5982\u6279\u91CF\u80A1\u7968\u5BF9\u6BD4\u300110-K/\u5E74\u62A5 PDF\u3001\u79C1\u6709\u5316\u90E8\u7F72\u6216 API", "successNextSteps": ["\u6839\u636E\u4F60\u586B\u5199\u7684\u573A\u666F\u533A\u5206 Web\u3001API \u6216\u79C1\u6709\u5316\u9700\u6C42", "\u540E\u7EED\u90AE\u4EF6\u540C\u6B65\u6279\u91CF\u5206\u6790\u3001PDF \u8BC1\u636E\u94FE\u548C\u4EBA\u5DE5\u590D\u6838\u529F\u80FD\u8FDB\u5EA6", "\u5F53\u524D\u516C\u5F00\u80A1\u7968\u4EE3\u7801\u5206\u6790\u5165\u53E3\u53EF\u7EE7\u7EED\u76F4\u63A5\u4F7F\u7528"], "client:component-hydration": "idle", "client:component-path": "@components/tools/WaitlistForm.jsx", "client:component-export": "default" })} </div> </div> </div> <section class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeUp"> <div class="p-7 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm"> <h2 class="text-xs font-black uppercase tracking-widest text-orange-500 mb-4">适合谁用 / USERS</h2> <p class="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">适合想先用股票代码查看公开财务趋势的个人研究者、内容创作者和独立开发者。它提供复盘起点，不替代原始财报、公司公告和最终判断。</p> </div> <div class="p-7 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm"> <h2 class="text-xs font-black uppercase tracking-widest text-orange-500 mb-4">核心关键词 / SEARCH</h2> <p class="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">爱财报、AI 财报分析、financial report ai、AI financial report analyzer、财报总结、财报风险分析，会统一指向这个工具页。</p> </div> <div class="p-7 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm"> <h2 class="text-xs font-black uppercase tracking-widest text-orange-500 mb-4">不是普通 ChatGPT / DIFFERENCE</h2> <p class="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">普通 ChatGPT 更像临时问答；爱财报把行情快照、历史财务指标、趋势图和分项风险摘要放进同一份可重复查看的报告。</p> </div> </section> <section class="mt-20 max-w-4xl mx-auto space-y-12 animate-fadeUp"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h4 class="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">输入什么 / INPUTS</h4> <ul class="text-xs font-bold text-slate-600 dark:text-slate-400 space-y-3"> <li>· 美股代码，例如 NVDA</li> <li>· 港股代码，例如 700</li> <li>· A 股代码，例如 600519</li> <li>· 当前公开版不会上传 PDF 文件</li> </ul> </div> <div class="p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h4 class="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">输出什么 / OUTPUTS</h4> <ul class="text-xs font-bold text-slate-600 dark:text-slate-400 space-y-3"> <li>· 现价、市值、PE、PB 和币种</li> <li>· 历史收入、净利润、ROE、毛利率</li> <li>· 行业、基本面、估值和风险摘要</li> <li>· 接口失败或字段缺失的明确状态</li> </ul> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="p-8 rounded-[40px] bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20"> <h4 class="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-300 mb-4">适合谁 / GOOD FIT</h4> <ul class="space-y-3 text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400"> ${fitItems.map((item) => renderTemplate`<li>✓ ${item}</li>`)} </ul> </div> <div class="p-8 rounded-[40px] bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20"> <h4 class="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-300 mb-4">不适合谁 / NOT FOR</h4> <ul class="space-y-3 text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400"> ${unfitItems.map((item) => renderTemplate`<li>× ${item}</li>`)} </ul> </div> </div> <div id="sample-report" class="p-8 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm scroll-mt-28"> <h4 class="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-4">样例报告 / SAMPLE REPORT</h4> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-6">下面是当前公开版真实使用到的输入和输出结构。点击页面上方 NVDA、700 或 600519 样例，会直接调用审计 API；报告结果取决于当时公开数据源的可用性。</p> <div class="overflow-hidden rounded-[28px] border border-slate-200 dark:border-white/10"> ${sampleRows.map((row) => renderTemplate`<div class="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_2fr] gap-3 border-b last:border-b-0 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.025] p-4 text-xs font-bold text-slate-600 dark:text-slate-400"> <div class="font-black text-orange-500">${row.field}</div> <div>${row.value}</div> <div>${row.note}</div> </div>`)} </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-5"> <div class="p-6 rounded-[28px] bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20"> <h4 class="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">使用场景 01</h4> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">财报季先看历史收入、净利润、ROE 和毛利率变化，再回公司公告核对异常年份。</p> </div> <div class="p-6 rounded-[28px] bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20"> <h4 class="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">使用场景 02</h4> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">快速比较不同市场股票的币种、估值和财务趋势，发现需要进一步研究的问题。</p> </div> <div class="p-6 rounded-[28px] bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20"> <h4 class="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">使用场景 03</h4> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">验证 AI 财务产品的代码输入、异步状态、错误提示和结构化报告交互。</p> </div> </div> <div class="p-8 rounded-[40px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"> <h4 class="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">数据边界 / DATA BOUNDARY</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-slate-600 dark:text-slate-400"> <div class="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-white/10"><span class="text-orange-500">ticker_only</span>：当前公开版只向 API 提交股票代码，不接收财报 PDF。</div> <div class="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-white/10"><span class="text-orange-500">public_data</span>：行情和财务字段来自第三方公开接口，可能存在延迟、缺失或口径差异。</div> <div class="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-white/10"><span class="text-orange-500">ai_summary</span>：分项审计属于 AI 辅助摘要，不能替代原始公告、法定审计或人工判断。</div> <div class="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-white/10"><span class="text-orange-500">error_visible</span>：代码不支持或接口失败时显示错误，不用空白结果伪装成功。</div> </div> <pre class="mt-6 overflow-x-auto rounded-[28px] bg-slate-950 p-5 text-[11px] font-bold leading-relaxed text-slate-200"><code>${`{
  "ticker": "NVDA",
  "market_snapshot": ["price", "market_cap", "pe", "pb"],
  "history": ["revenue", "net_income", "roe", "gross_margin"],
  "audit": ["industry", "fundamental", "valuation", "risk"],
  "data_source": "third_party_public_interfaces",
  "requires_manual_review": true
}`}</code></pre> </div> <section data-theme-surface="adaptive-finance-route" class="p-8 rounded-[40px] bg-orange-50/70 text-slate-950 border border-orange-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <h2 class="text-xl font-black italic uppercase tracking-tight text-slate-950 dark:text-white mb-6">研发路线 / BUILDING ROUTE</h2> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-6">当前公开工具先解决股票代码分析；下面的文章记录后续 PDF 解析、结构化输出、任务队列、评估集和证据链研发路线。这里明确区分“已经上线的功能”和“正在建设的能力”。</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${relatedArticles.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-4 rounded-[24px] bg-white border border-orange-100 text-sm font-black text-slate-800 hover:border-orange-400 hover:text-orange-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-slate-100 dark:hover:text-orange-300">${item.title} →</a>`)} </div> </section> <section class="p-8 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm"> <h2 class="text-xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-6">常见问题 / FAQ</h2> <div class="space-y-4"> ${faqItems.map((item) => renderTemplate`<article class="p-5 rounded-[28px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-sm font-black text-slate-900 dark:text-white mb-2">${item.question}</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.answer}</p> </article>`)} </div> </section> </section> <footer class="mt-32 p-8 md:p-12 rounded-[50px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 animate-fadeUp"> <div class="grid grid-cols-1 md:grid-cols-2 gap-20"> <div class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-medium leading-relaxed space-y-6"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white">先用公开指标定位问题，再回原始财报复核</h2> <p>
当前公开版先把股票代码、行情快照、历史财务趋势和风险摘要集中到一份报告里，帮助你快速定位值得继续研究的年份和问题。它不会替你读完数百页财报，更不会替你下判断；最终结论仍要回到公司公告、年报和监管披露。
</p> </div> <div class="space-y-12 pt-8"> <div class="space-y-6"> <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-3"> <span class="h-4 w-1 bg-sky-500"></span> 研发实战教程 / TECHNICALS
</h4> <ul class="space-y-4"> <li><a href="/tools/ai-finance/guide/" class="text-sm font-black text-sky-500 hover:text-orange-500 transition-colors">📖 核心指南：AI 财报分析助手研发全集 →</a></li> <li><a href="/ai/ai-financial-report-task-queue/" class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">· 异步任务队列与进度回传设计</a></li> <li><a href="/ai/llm-json-schema-financial-report-extraction/" class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">· LLM JSON Schema 稳定约束实战</a></li> <li><a href="/ai/financial-report-pdf-table-extraction/" class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">· 财报 PDF 复杂表格抽取解析</a></li> </ul> </div> <div class="p-8 rounded-[32px] bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20 space-y-4"> <h4 class="text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-500">风险声明 / DISCLAIMER</h4> <p class="text-[10px] font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
爱财报不是荐股工具。公开行情和财务字段可能存在延迟、缺失或口径差异，AI 摘要也可能出现遗漏。所有输出都需要用户独立复核公司公告、年报和监管披露；本工具不构成任何投资建议。
</p> </div> </div> </div> </footer> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/index.astro";
const $$url = "/tools/ai-finance/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
