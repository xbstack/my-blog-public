import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { g as getCollection } from '../chunks/_astro_content_DQag2m34.mjs';
import { $ as $$BuiltByXBStack, a as $$TopicClusters, b as $$EngineeringLogs } from '../chunks/EngineeringLogs_CjLTBmAU.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_pMHxHuJm.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "XBSTACK\uFF1A\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\uFF5CAI Agent\u3001MCP \u4E0E\u72EC\u7ACB\u5F00\u53D1\u5B9E\u6218";
  const description = "XBSTACK \u662F\u5C0F\u767D\u7684\u4E2A\u4EBA\u54C1\u724C\u7AD9\u548C\u72EC\u7ACB\u5F00\u53D1\u8005\u8D44\u4EA7\u7CFB\u7EDF\u3002\u6838\u5FC3\u53E3\u53F7\u662F\uFF1A\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002\u8FD9\u91CC\u6574\u7406 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001\u4EA7\u54C1\u5DE5\u5177\u3001\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u7CFB\u7EDF\u548C\u8D35\u5DDE\u6237\u5916\u751F\u6D3B\u3002";
  const keywords = "XBSTACK, \u5C0F\u767D, \u5728\u9AD8\u5904\u770B\u4E16\u754C, \u5728\u5E95\u5C42\u5806\u8D44\u4EA7, Build Assets See Further, AI Agent, MCP, LangGraph, n8n, AI Workflow, \u72EC\u7ACB\u5F00\u53D1, \u590D\u5229\u6295\u8D44, \u9605\u8BFB\u7CFB\u7EDF, \u8D35\u5DDE\u5F92\u6B65, \u6237\u5916\u88C5\u5907, \u4E2A\u4EBA\u8D44\u4EA7\u7CFB\u7EDF";
  const aiArticles = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en");
  const isPublicChinese = ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex";
  const horizonArticles = await getCollection("horizon", isPublicChinese);
  const lensArticles = await getCollection("lens", isPublicChinese);
  const getSafeTime = (dateVal) => {
    if (!dateVal) return 0;
    const time = new Date(dateVal).getTime();
    return isNaN(time) ? 0 : time;
  };
  const getArticleTime = (entry) => getSafeTime(
    entry.data.createdAt
  );
  const formatHomeDate = (dateVal) => {
    const time = getSafeTime(dateVal);
    if (!time) return "\u5F85\u66F4\u65B0";
    return new Date(time).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
  };
  const allArticles = [...aiArticles, ...horizonArticles, ...lensArticles].sort(
    (a, b) => getArticleTime(b) - getArticleTime(a)
  );
  const latestArticles = allArticles.slice(0, 6);
  const latestPublishedLabel = latestArticles.length ? formatHomeDate(getArticleTime(latestArticles[0])) : "\u5F85\u66F4\u65B0";
  const toolsLabArticles = aiArticles.filter((entry) => {
    const tags = entry.data.tags || [];
    return entry.data.section === "tools-lab" || entry.data.hub === "tools-lab" || entry.data.subcategory === "tools-lab" || entry.data.series === "ai-tools-lab" || tags.includes("AI Tools Lab") || tags.includes("AI\u5DE5\u5177\u5B9E\u6D4B");
  }).sort((a, b) => getArticleTime(b) - getArticleTime(a));
  const explicitlyFeaturedToolsLab = toolsLabArticles.find((entry) => entry.data.homeFeatured === true);
  const latestToolsLab = toolsLabArticles[0];
  const featuredToolsLabCandidate = explicitlyFeaturedToolsLab || latestToolsLab;
  const toolsLabFreshnessWindowMs = 14 * 24 * 60 * 60 * 1e3;
  const featuredToolsLabAgeMs = featuredToolsLabCandidate ? Date.now() - getArticleTime(featuredToolsLabCandidate) : Number.POSITIVE_INFINITY;
  const featuredToolsLab = explicitlyFeaturedToolsLab || (featuredToolsLabAgeMs <= toolsLabFreshnessWindowMs ? featuredToolsLabCandidate : void 0);
  const featuredToolsLabUrl = featuredToolsLab?.data.route || (featuredToolsLab ? `/ai/tools-lab/${featuredToolsLab.id.replace(/\.(md|mdx)$/, "")}/` : "/ai/tools-lab/");
  const featuredToolsLabDate = featuredToolsLab ? formatHomeDate(getArticleTime(featuredToolsLab)) : "\u5F85\u66F4\u65B0";
  const aiGateways = [
    {
      label: "01 / SYSTEM MAP",
      title: "AI Hub \u603B\u5165\u53E3",
      desc: "\u6309 Agent Engineering\u3001MCP\u3001Workflow\u3001AI Tools Lab\u3001Local AI \u8FDB\u5165\u751F\u4EA7\u7EA7 AI \u7CFB\u7EDF\u3002",
      href: "/ai/",
      accent: "text-blue-500"
    },
    {
      label: "02 / AGENT ENGINEERING",
      title: "Agent \u5DE5\u7A0B\u5316",
      desc: "\u628A LangGraph\u3001Memory\u3001RAG\u3001Evaluation\u3001HITL \u548C\u591A\u667A\u80FD\u4F53\u534F\u4F5C\u7EDF\u4E00\u653E\u8FDB Agent \u5DE5\u7A0B\u8DEF\u7EBF\u3002",
      href: "/ai/agent/",
      accent: "text-emerald-500"
    },
    {
      label: "03 / MCP",
      title: "MCP \u5DE5\u5177\u534F\u8BAE",
      desc: "\u56F4\u7ED5 MCP Server\u3001OAuth\u3001allowedRoots\u3001\u6743\u9650\u9694\u79BB\u548C Tool Call \u5BA1\u8BA1\u6784\u5EFA\u5DE5\u5177\u63A5\u5165\u8FB9\u754C\u3002",
      href: "/ai/mcp/",
      accent: "text-orange-500"
    },
    {
      label: "04 / WORKFLOW",
      title: "Workflow \u81EA\u52A8\u5316",
      desc: "\u628A n8n\u3001\u81EA\u6258\u7BA1\u3001Queue Mode\u3001Webhook\u3001\u51ED\u636E\u548C\u9519\u8BEF\u91CD\u8BD5\u4E32\u6210\u53EF\u4E0A\u7EBF\u7684\u81EA\u52A8\u5316\u7BA1\u9053\u3002",
      href: "/ai/workflow/",
      accent: "text-sky-500"
    },
    {
      label: "05 / TOOLS LAB",
      title: "\u6A21\u578B\u4E0E\u5DE5\u5177\u5B9E\u6D4B",
      desc: "\u8DDF\u8FDB\u5927\u6A21\u578B\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u3001\u5185\u5BB9\u751F\u4EA7\u548C\u673A\u5668\u4EBA\u4E16\u754C\u6A21\u578B\u7684\u771F\u5B9E\u4EFB\u52A1\u6D4B\u8BD5\u3002",
      href: "/ai/tools-lab/",
      accent: "text-violet-500"
    },
    {
      label: "06 / LOCAL AI",
      title: "\u7AEF\u4FA7\u6A21\u578B\u4E0E App \u96C6\u6210",
      desc: "\u8BC4\u4F30 iPhone\u3001Android\u3001Core ML\u3001ONNX\u3001llama.cpp\u3001\u5C0F\u6A21\u578B\u3001\u53D1\u70ED\u3001\u5361\u987F\u548C\u9690\u79C1\u8FB9\u754C\u3002",
      href: "/ai/local-ai/",
      accent: "text-cyan-500"
    }
  ];
  const startHereGateways = [
    {
      label: "AI ENGINEERING",
      title: "\u6211\u60F3\u5B66 AI \u5DE5\u7A0B\u5316",
      desc: "\u4ECE AI Hub \u5F00\u59CB\uFF0C\u6309 Agent\u3001MCP\u3001LangGraph\u3001n8n Workflow \u56DB\u6761\u8DEF\u7EBF\u8FDB\u5165\u751F\u4EA7\u7EA7 AI \u7CFB\u7EDF\u3002",
      href: "/ai/"
    },
    {
      label: "SEARCH ENTRY",
      title: "\u6211\u6B63\u5728\u6BD4\u8F83 MCP \u548C Function Calling",
      desc: "\u76F4\u63A5\u770B MCP vs Function Calling\uFF0C\u7406\u89E3\u5DE5\u5177\u8C03\u7528\u3001\u534F\u8BAE\u8FB9\u754C\u3001\u6743\u9650\u548C\u9879\u76EE\u9009\u578B\u5DEE\u5F02\u3002",
      href: "/ai/mcp-vs-function-calling/"
    },
    {
      label: "WORKFLOW KIT",
      title: "\u6211\u60F3\u642D n8n AI \u5DE5\u4F5C\u6D41",
      desc: "\u4ECE n8n AI Starter Kit \u5F00\u59CB\uFF0C\u628A Gmail\u3001Slack\u3001Notion\u3001\u81EA\u6258\u7BA1\u3001Queue \u548C Webhook \u4E32\u6210\u8DEF\u7EBF\u3002",
      href: "/ai/n8n-ai-starter-kit/"
    },
    {
      label: "GROWTH LAB",
      title: "\u6211\u60F3\u8FD0\u8425\u7F51\u7AD9\u589E\u957F",
      desc: "\u8FDB\u5165 Growth Lab\uFF0C\u770B Search Console\u3001SEO\u3001GEO\u3001404 \u56DE\u6536\u3001UTM \u5206\u53D1\u548C\u5DE5\u5177\u8F6C\u5316\u3002",
      href: "/growth/"
    },
    {
      label: "TOOLS",
      title: "\u6211\u60F3\u76F4\u63A5\u4F7F\u7528\u5DE5\u5177",
      desc: "\u8FDB\u5165 Tools\uFF0C\u4F18\u5148\u4F53\u9A8C\u7231\u8D22\u62A5 AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest\u3001UTM Builder \u548C Templates\u3002",
      href: "/tools/"
    }
  ];
  const toolGateways = [
    {
      label: "TOY LAB",
      title: "\u7AE5\u73A9\u5B9E\u9A8C\u5BA4",
      desc: "\u76F4\u63A5\u4F53\u9A8C\u7AF9\u77E5\u4E86\u7B49\u4F20\u7EDF\u73A9\u5177\u7684\u7F51\u9875\u4E92\u52A8\u7248\u672C\uFF0C\u652F\u6301\u9F20\u6807\u3001\u89E6\u6478\u3001\u952E\u76D8\u548C\u624B\u673A\u4F53\u611F\u3002",
      href: "/tools/toy-lab/"
    },
    {
      label: "AI REPORT",
      title: "\u7231\u8D22\u62A5 AI \u8D22\u52A1\u5206\u6790",
      desc: "\u8F93\u5165\u80A1\u7968\u4EE3\u7801\uFF0C\u67E5\u770B\u516C\u5F00\u8D22\u52A1\u6458\u8981\u3001\u98CE\u9669\u63D0\u793A\u3001\u7F13\u5B58\u72B6\u6001\u548C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u3002",
      href: "/tools/ai-finance/"
    },
    {
      label: "COMPOUND",
      title: "\u590D\u5229\u4E0E\u5B9A\u6295\u8BA1\u7B97\u5668",
      desc: "\u6D4B\u7B97\u672C\u91D1\u3001\u6BCF\u6708\u5B9A\u6295\u3001\u5E74\u5316\u6536\u76CA\u3001\u901A\u80C0\u4E0E\u76EE\u6807\u8D44\u4EA7\uFF0C\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u5185\u5B8C\u6210\u3002",
      href: "/tools/compound-calculator/"
    },
    {
      label: "UTM",
      title: "\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668",
      desc: "\u4E3A\u591A\u4E2A\u5206\u53D1\u5E73\u53F0\u751F\u6210\u7EDF\u4E00\u53C2\u6570\u94FE\u63A5\uFF0C\u5E76\u5BFC\u51FA CSV \u6216 Markdown \u8FDB\u884C\u5F52\u56E0\u8FFD\u8E2A\u3002",
      href: "/tools/utm-builder/"
    }
  ];
  const homeFaqs = [
    { question: "\u65B0\u8BFB\u8005\u5E94\u8BE5\u4ECE\u54EA\u91CC\u5F00\u59CB\uFF1F", answer: "\u5982\u679C\u4F60\u5173\u6CE8 AI \u5DE5\u7A0B\uFF0C\u4ECE AI Hub \u5F00\u59CB\uFF1B\u5982\u679C\u4F60\u60F3\u76F4\u63A5\u7528\u5DE5\u5177\uFF0C\u4ECE Tools \u5F00\u59CB\uFF1B\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u5C0F\u767D\u7684\u4EBA\u683C\u4E3B\u7EBF\uFF0C\u4ECE\u6237\u5916\u751F\u6D3B\u548C About \u5F00\u59CB\u3002" },
    { question: "XBSTACK \u662F\u6280\u672F\u535A\u5BA2\u8FD8\u662F\u4E2A\u4EBA\u54C1\u724C\u7AD9\uFF1F", answer: "\u5B83\u4E0D\u662F\u5355\u4E00\u6280\u672F\u535A\u5BA2\uFF0C\u800C\u662F\u5C0F\u767D\u7684\u72EC\u7ACB\u5F00\u53D1\u8005\u8D44\u4EA7\u7CFB\u7EDF\uFF0C\u628A AI \u5DE5\u7A0B\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u957F\u671F\u590D\u76D8\u3001\u9605\u8BFB\u548C\u8D35\u5DDE\u6237\u5916\u751F\u6D3B\u653E\u5728\u540C\u4E00\u4E2A\u5165\u53E3\u3002" },
    { question: "\u9996\u9875\u6700\u91CD\u8981\u7684\u8F6C\u5316\u5165\u53E3\u662F\u4EC0\u4E48\uFF1F", answer: "\u5F53\u524D\u4F18\u5148\u5BFC\u5411 AI \u8D22\u62A5\u52A9\u624B\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest\u3001AI Hub\u3001MCP \u5BF9\u6BD4\u548C n8n Starter Kit\uFF0C\u8BA9\u8BFB\u8005\u4ECE\u6D4F\u89C8\u8FDB\u5165\u53EF\u6267\u884C\u8DEF\u5F84\u3002" }
  ];
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.xbstack.com/#website",
        "name": "XBSTACK",
        "alternateName": ["\u5C0F\u767D", "Xiaobai Labs", "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7", "Build Assets. See Further."],
        "url": "https://www.xbstack.com/",
        "slogan": "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002",
        "description": description,
        "inLanguage": "zh-CN",
        "about": [
          { "@type": "Thing", "name": "AI Agent" },
          { "@type": "Thing", "name": "Model Context Protocol" },
          { "@type": "Thing", "name": "LangGraph" },
          { "@type": "Thing", "name": "Workflow Automation" },
          { "@type": "Thing", "name": "n8n AI Starter Kit" },
          { "@type": "Thing", "name": "Financial Report AI" },
          { "@type": "Thing", "name": "Independent Development" },
          { "@type": "Thing", "name": "Compound Investing" }
        ],
        "hasPart": [
          { "@type": "CollectionPage", "name": "XBSTACK AI Hub", "url": "https://www.xbstack.com/ai/" },
          { "@type": "CollectionPage", "name": "AI Agent", "url": "https://www.xbstack.com/ai/agent/" },
          { "@type": "CollectionPage", "name": "LangGraph", "url": "https://www.xbstack.com/ai/langgraph/" },
          { "@type": "CollectionPage", "name": "MCP", "url": "https://www.xbstack.com/ai/mcp/" },
          { "@type": "CollectionPage", "name": "Workflow", "url": "https://www.xbstack.com/ai/workflow/" },
          { "@type": "CollectionPage", "name": "AI Tools Lab", "url": "https://www.xbstack.com/ai/tools-lab/" },
          { "@type": "CollectionPage", "name": "Model Updates", "url": "https://www.xbstack.com/ai/model-updates/" },
          { "@type": "CollectionPage", "name": "Local AI", "url": "https://www.xbstack.com/ai/local-ai/" },
          { "@type": "CollectionPage", "name": "Growth Lab", "url": "https://www.xbstack.com/growth/" },
          { "@type": "WebPage", "name": "n8n AI Starter Kit", "url": "https://www.xbstack.com/ai/n8n-ai-starter-kit/" },
          { "@type": "WebApplication", "name": "\u7231\u8D22\u62A5 AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177", "url": "https://www.xbstack.com/tools/ai-finance/" },
          { "@type": "WebApplication", "name": "UTM Builder", "url": "https://www.xbstack.com/tools/utm-builder/" },
          { "@type": "CollectionPage", "name": "Templates", "url": "https://www.xbstack.com/tools/templates/" },
          { "@type": "CollectionPage", "name": "Tools", "url": "https://www.xbstack.com/tools/" }
        ],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.xbstack.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.xbstack.com/#organization",
        "name": "XBSTACK",
        "alternateName": ["\u5C0F\u767D", "Xiaobai Labs", "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7"],
        "url": "https://www.xbstack.com/",
        "logo": "https://www.xbstack.com/favicon/favicon.svg",
        "slogan": "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002"
      },
      {
        "@type": "ItemList",
        "@id": "https://www.xbstack.com/#primary-paths",
        "name": "XBSTACK primary content paths",
        "itemListElement": aiGateways.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.title,
          "url": `https://www.xbstack.com${item.href}`
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": websiteSchema, "lang": "zh-CN", "alternates": [
    { lang: "zh-CN", href: "https://www.xbstack.com/" },
    { lang: "en", href: "https://www.xbstack.com/en/" },
    { lang: "x-default", href: "https://www.xbstack.com/" }
  ] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1280px] mx-auto px-6"> <section class="pt-[150px] pb-20 border-b border-slate-200 dark:border-white/5"> <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center"> <div class="space-y-12"> <div class="inline-flex flex-wrap items-center gap-3"> <span class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/10">XIAOBAI • ASSET SYSTEM</span> <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">在高处看世界，在底层堆资产</span> </div> <div class="space-y-8"> <h1 class="text-5xl md:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tighter uppercase italic">
Build Assets.<br><span class="text-blue-500">See Further.</span> </h1> <p class="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-400 leading-tight italic max-w-4xl border-l-8 border-blue-500 pl-8">
在高处看世界，在底层堆资产。<br><br>
XBSTACK 是小白的长期资产系统：用 AI 开发提升能力，用效率系统沉淀方法，用产品工具验证想法，也用投资、阅读和户外生活校准判断。
</p> </div> <div class="flex flex-wrap gap-4 pt-4"> <a href="#start-here" class="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-700 transition-all shadow-lg text-center">
🚀 第一次来
</a> <a href="/ai/" class="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-center">
⚡ AI开发
</a> <a href="/growth/" class="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-center">
📈 Growth Lab
</a> <a href="/tools/" class="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-center">
🔧 产品工具
</a> <a href="/about/" class="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-center">
⛺ 关于
</a> </div> </div> <aside class="xb-asset-panel rounded-[40px] bg-white/90 dark:bg-white/[0.04] border border-blue-500/15 dark:border-white/10 p-6 md:p-8 shadow-[0_30px_100px_rgba(37,99,235,0.12)]"> <div class="flex items-start justify-between gap-4 mb-8"> <div> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-400 mb-3">Asset Stack</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white">长期资产系统矩阵</h2> </div> <div class="px-3 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 text-[10px] font-black uppercase tracking-[0.22em]">Running</div> </div> <div class="space-y-3"> <a href="/ai/" class="xb-asset-row" style="--delay: 0s"><span class="xb-asset-index">01</span><span class="flex-1"><strong>AI 开发</strong><small>Agent / LangGraph / MCP</small></span></a> <a href="/tools/" class="xb-asset-row" style="--delay: 2.4s"><span class="xb-asset-index">02</span><span class="flex-1"><strong>Tools</strong><small>Finance / Calculator / Lunest</small></span></a> <a href="/growth/" class="xb-asset-row" style="--delay: 4.8s"><span class="xb-asset-index">03</span><span class="flex-1"><strong>Growth Lab</strong><small>SEO / GEO / UTM</small></span></a> <a href="/horizon/" class="xb-asset-row" style="--delay: 7.2s"><span class="xb-asset-index">04</span><span class="flex-1"><strong>Horizon</strong><small>Investing / Reading / Thinking</small></span></a> <a href="/life/" class="xb-asset-row" style="--delay: 9.6s"><span class="xb-asset-index">05</span><span class="flex-1"><strong>Lens</strong><small>Outdoor / Photo / Gear</small></span></a> </div> <div class="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400"> <span>Build Assets</span><span class="h-px flex-1 bg-blue-500/20"></span><span>See Further</span> </div> </aside> </div> </section> <section id="start-here" class="py-20 border-b border-slate-200 dark:border-white/5 scroll-mt-28"> <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"> <div class="space-y-4 max-w-3xl"> <div class="flex items-center gap-3"> <div class="w-1.5 h-6 bg-emerald-500 rounded-full"></div> <h2 class="text-xs font-black text-emerald-500 uppercase tracking-[0.3em]">Start Here / 新读者入口</h2> </div> <h3 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter leading-none">第一次来 <span class="text-emerald-500">从这里开始</span></h3> <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
XBSTACK 内容已经很多，新用户不应该靠时间倒序找入口。这里按真实意图分流：学 AI 工程、比较 MCP、搭 n8n 工作流、直接使用工具。
</p> </div> <a href="/about/" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-emerald-500 transition-colors pb-1 border-b border-transparent hover:border-emerald-500/30">了解 XBSTACK →</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${startHereGateways.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-7 rounded-[32px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-500 block relative overflow-hidden"> <div class="text-[9px] font-black uppercase tracking-[0.25em] mb-4 text-emerald-500">${item.label}</div> <h4 class="text-xl font-black text-slate-950 dark:text-white mb-4 uppercase italic tracking-tight group-hover:text-emerald-500 transition-colors">${item.title}</h4> <p class="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-emerald-500 transition-colors">开始阅读 →</div> </a>`)} </div> </section> <section class="py-20 border-b border-slate-200 dark:border-white/5"> <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"> <div class="space-y-4 max-w-3xl"> <div class="flex items-center gap-3"> <div class="w-1.5 h-6 bg-blue-500 rounded-full"></div> <h2 class="text-xs font-black text-blue-500 uppercase tracking-[0.3em]">AI Systems Gateway</h2> </div> <h3 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter leading-none">先选你的 <span class="text-blue-500">AI 路径</span></h3> <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
首页把 AI 主线前置，不再让用户从文章列表里猜入口。先按系统建设意图分流，再进入 Agent Engineering、MCP、Workflow、AI Tools Lab、Local AI 等专题页。
</p> </div> <a href="/ai/" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-500 transition-colors pb-1 border-b border-transparent hover:border-blue-500/30">Open AI Hub →</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${aiGateways.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-7 rounded-[32px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 block relative overflow-hidden"> <div${addAttribute(`text-[9px] font-black uppercase tracking-[0.25em] mb-4 ${item.accent}`, "class")}>${item.label}</div> <h4 class="text-2xl font-black text-slate-950 dark:text-white mb-4 uppercase italic tracking-tight group-hover:text-blue-500 transition-colors">${item.title}</h4> <p class="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-500 transition-colors">进入专题 →</div> <div class="absolute -bottom-12 -right-12 w-28 h-28 bg-blue-500/5 blur-[44px] rounded-full group-hover:scale-150 transition-transform duration-700"></div> </a>`)} </div> </section> ${featuredToolsLab && renderTemplate`<section class="py-16 border-b border-slate-200 dark:border-white/5"> <a${addAttribute(featuredToolsLabUrl, "href")} class="group block p-8 md:p-10 rounded-[42px] bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-transparent border border-violet-500/20 hover:border-violet-500/50 transition-colors relative overflow-hidden"> <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[0.72fr_0.28fr] gap-8 items-end"> <div> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500 mb-4">Featured AI Tools Lab Review</div> <h2 class="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-5 group-hover:text-violet-500 transition-colors">${featuredToolsLab.data.title}</h2> <p class="max-w-3xl text-sm md:text-base font-bold leading-relaxed text-slate-600 dark:text-slate-400">${featuredToolsLab.data.description}</p> </div> <div class="lg:text-right"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400 mb-3">首次发布：${featuredToolsLabDate}</div> <div class="inline-flex px-6 py-3 rounded-2xl bg-violet-600 text-white text-[10px] font-black uppercase tracking-[0.25em]">查看完整实测 →</div> </div> </div> <div class="absolute -right-20 -bottom-24 w-72 h-72 rounded-full bg-violet-500/10 blur-[70px]"></div> </a> </section>`} <section class="py-20 border-b border-slate-200 dark:border-white/5"> <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"> <div class="space-y-4 max-w-3xl"> <div class="flex items-center gap-3"> <div class="w-1.5 h-6 bg-orange-500 rounded-full"></div> <h2 class="text-xs font-black text-orange-500 uppercase tracking-[0.3em]">Online Tools Gateway</h2> </div> <h3 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter leading-none">读完以后 <span class="text-orange-500">下一步做什么</span></h3> <p class="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
把首页流量从“看一眼就走”导向真实使用。这里仅展示已经可以直接完成任务的童玩实验室、爱财报、复利计算器和 UTM Builder。
</p> </div> <a href="/tools/" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-500/30">Open Tools →</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${toolGateways.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-7 rounded-[32px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-orange-500/50 transition-all duration-500 block relative overflow-hidden"> <div class="text-[9px] font-black uppercase tracking-[0.25em] mb-4 text-orange-500">${item.label}</div> <h4 class="text-2xl font-black text-slate-950 dark:text-white mb-4 uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">${item.title}</h4> <p class="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-orange-500 transition-colors">进入工具 →</div> <div class="absolute -bottom-12 -right-12 w-28 h-28 bg-orange-500/5 blur-[44px] rounded-full group-hover:scale-150 transition-transform duration-700"></div> </a>`)} </div> </section> <div class="py-24"> ${renderComponent($$result2, "BuiltByXBStack", $$BuiltByXBStack, {})} </div> <section class="py-24 border-t border-slate-200 dark:border-white/5"> ${renderComponent($$result2, "TopicClusters", $$TopicClusters, {})} </section> <section class="py-24 border-t border-slate-200 dark:border-white/5"> <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="w-1.5 h-6 bg-orange-500 rounded-full"></div> <h2 class="text-xs font-black text-orange-500 uppercase tracking-[0.3em]">Latest Activity</h2> </div> <h3 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter leading-none">最新 <span class="text-orange-500">发布</span></h3> <p class="text-xs font-black uppercase tracking-[0.28em] text-slate-400">Latest publish date: ${latestPublishedLabel}</p> </div> <a href="/archive/" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-500/30">查看全站归档 ➔</a> </div> <div class="grid gap-6 max-w-4xl mx-auto"> ${latestArticles.map((article) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": article })}`)} </div> </section> <section id="faq" class="py-24 border-t border-slate-200 dark:border-white/5"> <div class="max-w-5xl mx-auto"> <div class="mb-10 space-y-4"> <p class="text-xs font-black uppercase tracking-[0.3em] text-orange-500">FAQ</p> <h2 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter">新读者常见问题</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${homeFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </div> </section> <div class="py-24 border-t border-slate-200 dark:border-white/5"> ${renderComponent($$result2, "EngineeringLogs", $$EngineeringLogs, {})} </div> </div> ` })} `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
