import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_BDgPsFL4.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Mcp = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "MCP \u4E13\u9898\u6307\u5357";
  const collection = "ai";
  const mcpPaths = [
    {
      title: "1. \u6838\u5FC3\u5165\u95E8\uFF1A\u4EC0\u4E48\u662F MCP \u534F\u8BAE (Introduction)",
      ids: [
        "mcp-protocol-guide",
        "mcp-protocol-deep-dive"
      ]
    },
    {
      title: "2. \u672C\u5730\u5B9E\u6218\uFF1A\u6784\u5EFA\u4E0E\u96C6\u6210\u672C\u5730 Server (Local Servers)",
      ids: [
        "mcp-tutorial",
        "mcp-server-sqlite",
        "mcp-filesystem-server"
      ]
    },
    {
      title: "3. \u8FDC\u7A0B\u90E8\u7F72\uFF1A\u642D\u5EFA\u4E0E\u6269\u5C55\u8FDC\u7A0B\u670D\u52A1 (Remote Servers)",
      ids: [
        "mcp-streamable-http-deployment",
        "mcp-oauth-authentication"
      ]
    },
    {
      title: "4. \u5B89\u5168\u6CBB\u7406\uFF1A\u5BA1\u8BA1\u3001\u6743\u9650\u4E0E\u9694\u79BB\u6C99\u7BB1 (Security & Audits)",
      ids: [
        "mcp-security-best-practices",
        "openclaw-mcp-sandbox-architecture",
        "mcp-server-production-governance"
      ]
    },
    {
      title: "5. \u6545\u969C\u6392\u67E5\uFF1A\u5E38\u89C1\u62A5\u9519\u4E0E\u534F\u8BAE\u8C03\u8BD5 (Troubleshooting)",
      ids: [
        "mcp-json-rpc-parse-error",
        "mcp-stdio-pollution-guide",
        "mcp-tool-call-truncated-fix"
      ]
    },
    {
      title: "6. \u5BF9\u6BD4\u9009\u578B\uFF1A\u63A2\u7D22\u63A5\u53E3\u6807\u51C6\u8FB9\u754C (Comparisons)",
      ids: [
        "mcp-vs-function-calling",
        "mcp-vs-semantic-kernel",
        "ai-agent-protocol-ecosystem"
      ]
    }
  ];
  const allPosts = await getCollection(collection, ({ data }) => !data.draft && data.lang !== "en");
  const groupedPosts = mcpPaths.map((path) => {
    return {
      ...path,
      articles: allPosts.filter((post) => path.ids.includes(post.id.replace(/\.(md|mdx)$/, "")))
    };
  });
  const categorizedIds = mcpPaths.flatMap((p) => p.ids);
  const otherPosts = allPosts.filter(
    (post) => (post.data.hub === "mcp" || post.id.includes("mcp")) && !categorizedIds.includes(post.id.replace(/\.(md|mdx)$/, ""))
  ).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 6);
  const pageTitle = `${displayTitle} | Model Context Protocol\u3001Server \u90E8\u7F72\u4E0E\u6392\u969C\u5168\u653B\u7565 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "XBSTACK MCP Hub \u662F Model Context Protocol \u4E13\u9898\u5165\u53E3\uFF0C\u7CFB\u7EDF\u6574\u7406 MCP vs Function Calling\u3001MCP Server\u3001Streamable HTTP\u3001OAuth\u3001allowedRoots\u3001\u5B89\u5168\u6CBB\u7406\u3001JSON-RPC parse error\u3001stdio \u6C61\u67D3\u548C Tool Call \u622A\u65AD\u6392\u969C\u3002";
  const keywords = "MCP, Model Context Protocol, MCP vs Function Calling, mcp function calling difference, MCP Server, MCP OAuth, MCP Streamable HTTP, MCP Filesystem Server, MCP SQLite Server, MCP \u5B89\u5168\u6CBB\u7406, MCP JSON-RPC parse error, MCP Stdio \u6C61\u67D3, MCP Tool Call Result Truncated";
  const mcpStartRoutes = [
    {
      title: "\u5148\u5224\u65AD\uFF1AMCP \u548C Function Calling \u600E\u4E48\u9009",
      desc: "\u5982\u679C\u4F60\u53EA\u662F\u6BD4\u8F83\u534F\u8BAE\u8FB9\u754C\uFF0C\u5148\u770B\u8FD9\u7BC7\u3002\u5B83\u76F4\u63A5\u56DE\u7B54 mcp vs function calling \u548C mcp function calling difference\u3002",
      href: "/ai/mcp-vs-function-calling/"
    },
    {
      title: "\u518D\u7406\u89E3\uFF1AMCP \u534F\u8BAE\u5230\u5E95\u89E3\u51B3\u4EC0\u4E48",
      desc: "\u4ECE Resources\u3001Tools\u3001Prompts\u3001JSON-RPC \u548C Server \u751F\u547D\u5468\u671F\u7406\u89E3 MCP \u7684\u57FA\u672C\u6A21\u578B\u3002",
      href: "/ai/mcp-protocol-guide/"
    },
    {
      title: "\u7136\u540E\u5B9E\u6218\uFF1A\u672C\u5730 Server \u600E\u4E48\u63A5\u5165",
      desc: "\u4ECE SQLite\u3001Filesystem\u3001stdio \u5230\u5DE5\u5177\u8C03\u7528\uFF0C\u8DD1\u901A\u672C\u5730\u5F00\u53D1\u73AF\u5883\u7684\u7B2C\u4E00\u6761 MCP \u94FE\u8DEF\u3002",
      href: "/ai/mcp-server-sqlite/"
    },
    {
      title: "\u6700\u540E\u4E0A\u7EBF\uFF1A\u8FDC\u7A0B\u90E8\u7F72\u548C\u6743\u9650\u6CBB\u7406",
      desc: "\u8FDC\u7A0B MCP \u5FC5\u987B\u5904\u7406 OAuth\u3001allowedRoots\u3001\u5BA1\u8BA1\u3001\u622A\u65AD\u3001\u8131\u654F\u548C\u591A\u7528\u6237\u9694\u79BB\u3002",
      href: "/ai/mcp-security-best-practices/"
    }
  ];
  const mcpSecurityChecklist = [
    "\u9650\u5236 allowedRoots\uFF0C\u53EA\u66B4\u9732\u4E1A\u52A1\u9700\u8981\u7684\u76EE\u5F55\uFF0C\u4E0D\u628A\u5BBF\u4E3B\u673A\u6587\u4EF6\u7CFB\u7EDF\u4EA4\u7ED9\u6A21\u578B\u3002",
    "\u6570\u636E\u5E93 Server \u4F7F\u7528\u53EA\u8BFB\u8D26\u53F7\u6216\u6700\u5C0F\u6743\u9650\u8D26\u53F7\uFF0C\u5199\u64CD\u4F5C\u5FC5\u987B\u5355\u72EC\u8BBE\u8BA1\u5BA1\u6279\u548C\u5BA1\u8BA1\u3002",
    "\u8FDC\u7A0B MCP Server \u5FC5\u987B\u6709\u8BA4\u8BC1\u4E0E\u8BBF\u95EE\u63A7\u5236\uFF0C\u4E0D\u5141\u8BB8\u88F8\u9732\u5728\u516C\u7F51\u3002",
    "\u8BB0\u5F55 Tool Call \u7684\u8F93\u5165\u3001\u8F93\u51FA\u3001\u8017\u65F6\u3001\u8C03\u7528\u4EBA\u548C\u5931\u8D25\u539F\u56E0\uFF0C\u65B9\u4FBF\u5B89\u5168\u5BA1\u8BA1\u3002",
    "\u5BF9\u4E0D\u540C\u7528\u6237\u3001\u56E2\u961F\u548C\u79DF\u6237\u505A\u6743\u9650\u9694\u79BB\uFF0C\u907F\u514D\u6A21\u578B\u8DE8\u8FB9\u754C\u8BFB\u53D6\u8D44\u6E90\u3002",
    "\u5BF9\u957F\u7ED3\u679C\u3001\u654F\u611F\u5B57\u6BB5\u548C\u5916\u90E8 API \u8FD4\u56DE\u503C\u505A\u622A\u65AD\u3001\u8131\u654F\u548C\u901F\u7387\u9650\u5236\u3002"
  ];
  const mcpDecisionRows = [
    { title: "MCP vs Function Calling", desc: "Function Calling \u66F4\u9002\u5408\u5355\u5E94\u7528\u5185\u90E8\u51FD\u6570\uFF1BMCP \u66F4\u9002\u5408\u8DE8\u5BA2\u6237\u7AEF\u3001\u8DE8\u5DE5\u5177\u3001\u8DE8\u8D44\u6E90\u7684\u6807\u51C6\u5316\u63A5\u5165\u548C\u6CBB\u7406\u3002" },
    { title: "\u672C\u5730 stdio vs \u8FDC\u7A0B HTTP", desc: "stdio \u9002\u5408\u672C\u5730\u5F00\u53D1\u548C\u684C\u9762\u5BA2\u6237\u7AEF\uFF1BStreamable HTTP \u9002\u5408\u8FDC\u7A0B\u670D\u52A1\u3001\u56E2\u961F\u534F\u4F5C\u548C\u4E91\u7AEF\u8D44\u6E90\u63A5\u5165\uFF0C\u4F46\u5FC5\u987B\u914D\u5408\u8BA4\u8BC1\u3002" },
    { title: "MCP vs API Gateway", desc: "API Gateway \u7BA1\u7406\u670D\u52A1\u6D41\u91CF\uFF0CMCP \u7BA1\u7406\u6A21\u578B\u5982\u4F55\u7406\u89E3\u3001\u53D1\u73B0\u548C\u8C03\u7528\u5DE5\u5177\u3002\u4E8C\u8005\u53EF\u4EE5\u7EC4\u5408\uFF0C\u4E0D\u662F\u66FF\u4EE3\u5173\u7CFB\u3002" }
  ];
  const mcpFaqs = [
    { question: "MCP \u662F\u4EC0\u4E48\uFF1F", answer: "MCP \u662F Model Context Protocol\uFF0C\u7528\u6765\u89C4\u8303\u6A21\u578B\u5BA2\u6237\u7AEF\u548C\u5916\u90E8\u5DE5\u5177\u3001\u8D44\u6E90\u3001\u63D0\u793A\u6A21\u677F\u4E4B\u95F4\u7684\u8FDE\u63A5\u65B9\u5F0F\u3002\u5B83\u7684\u4EF7\u503C\u4E0D\u53EA\u662F\u8C03\u7528\u5DE5\u5177\uFF0C\u800C\u662F\u8BA9\u5DE5\u5177\u53D1\u73B0\u3001\u6743\u9650\u3001\u8F93\u5165\u8F93\u51FA\u548C\u5BA1\u8BA1\u66F4\u6807\u51C6\u5316\u3002" },
    { question: "MCP \u548C Function Calling \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "Function Calling \u901A\u5E38\u7ED1\u5B9A\u5728\u4E00\u4E2A\u6A21\u578B\u6216\u5E94\u7528\u5185\u90E8\uFF0C\u9002\u5408\u5C11\u91CF\u51FD\u6570\uFF1BMCP \u66F4\u50CF\u9762\u5411\u6A21\u578B\u7684\u5DE5\u5177\u534F\u8BAE\u5C42\uFF0C\u9002\u5408\u591A\u4E2A\u5BA2\u6237\u7AEF\u5171\u4EAB Server\u3001\u63A5\u5165\u6587\u4EF6\u7CFB\u7EDF\u3001\u6570\u636E\u5E93\u548C\u8FDC\u7A0B\u670D\u52A1\u3002" },
    { question: "\u8FDC\u7A0B MCP Server \u4E3A\u4EC0\u4E48\u9700\u8981 OAuth \u6216\u8BA4\u8BC1\uFF1F", answer: "\u8FDC\u7A0B Server \u4E00\u65E6\u66B4\u9732\u5230\u7F51\u7EDC\uFF0C\u5C31\u4E0D\u518D\u662F\u672C\u5730\u53D7\u63A7\u73AF\u5883\u3002\u5982\u679C\u6CA1\u6709\u8BA4\u8BC1\uFF0C\u4EFB\u4F55\u80FD\u8BBF\u95EE\u5730\u5740\u7684\u4EBA\u90FD\u53EF\u80FD\u89E6\u53D1\u5DE5\u5177\u8C03\u7528\u3001\u8BFB\u53D6\u8D44\u6E90\u6216\u6D88\u8017\u670D\u52A1\u989D\u5EA6\u3002" },
    { question: "allowedRoots \u662F\u4EC0\u4E48\uFF1F", answer: "allowedRoots \u662F\u6587\u4EF6\u7CFB\u7EDF\u7C7B MCP Server \u7684\u8BBF\u95EE\u8FB9\u754C\uFF0C\u7528\u6765\u9650\u5236\u6A21\u578B\u53EA\u80FD\u8BFB\u53D6\u6216\u64CD\u4F5C\u6307\u5B9A\u76EE\u5F55\u3002\u5B83\u4E0D\u662F\u88C5\u9970\u9879\uFF0C\u800C\u662F\u9632\u6B62\u8D8A\u6743\u8BBF\u95EE\u672C\u5730\u6587\u4EF6\u7684\u6838\u5FC3\u4FDD\u62A4\u3002" },
    { question: "MCP Server \u5982\u4F55\u907F\u514D\u8D8A\u6743\u8BBF\u95EE\uFF1F", answer: "\u9700\u8981\u540C\u65F6\u505A\u8DEF\u5F84\u9650\u5236\u3001\u8D26\u53F7\u6700\u5C0F\u6743\u9650\u3001\u7528\u6237\u8EAB\u4EFD\u6620\u5C04\u3001Tool Call \u5BA1\u8BA1\u3001\u654F\u611F\u8F93\u51FA\u8131\u654F\u548C\u9AD8\u98CE\u9669\u5DE5\u5177\u9694\u79BB\u3002\u53EA\u9760\u63D0\u793A\u8BCD\u58F0\u660E\u201C\u4E0D\u8981\u8BBF\u95EE\u654F\u611F\u6587\u4EF6\u201D\u6CA1\u6709\u5B89\u5168\u610F\u4E49\u3002" },
    { question: "MCP JSON-RPC parse error \u600E\u4E48\u6392\u67E5\uFF1F", answer: "\u4F18\u5148\u68C0\u67E5 stdio \u662F\u5426\u88AB\u65E5\u5FD7\u6C61\u67D3\u3001\u54CD\u5E94\u662F\u5426\u7B26\u5408 JSON-RPC \u7ED3\u6784\u3001Content-Type \u662F\u5426\u6B63\u786E\u3001\u5DE5\u5177\u8FD4\u56DE\u503C\u662F\u5426\u88AB\u622A\u65AD\uFF0C\u4EE5\u53CA\u5BA2\u6237\u7AEF\u548C Server \u7684\u534F\u8BAE\u7248\u672C\u662F\u5426\u5339\u914D\u3002" }
  ];
  const mcpCoreArticles = [
    { title: "MCP \u548C Function Calling \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u771F\u5B9E\u9879\u76EE\u9009\u578B", href: "/ai/mcp-vs-function-calling/" },
    { title: "MCP \u548C Semantic Kernel \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u7EC4\u5408\u67B6\u6784\u9009\u578B", href: "/ai/mcp-vs-semantic-kernel/" },
    { title: "MCP \u6587\u4EF6\u670D\u52A1\u5668\uFF1AResources\u3001Tools\u3001Roots \u4E0E\u5B89\u5168\u6C99\u7BB1", href: "/ai/mcp-protocol-deep-dive/" },
    { title: "MCP Streamable HTTP \u90E8\u7F72", href: "/ai/mcp-streamable-http-deployment/" },
    { title: "MCP OAuth \u8BA4\u8BC1\u5B9E\u6218", href: "/ai/mcp-oauth-authentication/" },
    { title: "MCP Filesystem Server \u5B9E\u6218", href: "/ai/mcp-filesystem-server/" },
    { title: "MCP JSON-RPC parse error \u6392\u67E5", href: "/ai/mcp-json-rpc-parse-error/" }
  ];
  const mcpSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": pageTitle,
        "url": "https://www.xbstack.com/ai/mcp/",
        "description": pageDescription,
        "inLanguage": "zh-CN",
        "about": ["Model Context Protocol", "MCP Server", "MCP OAuth", "Streamable HTTP", "MCP Security", "JSON-RPC"].map((name) => ({ "@type": "Thing", name })),
        "isPartOf": { "@type": "WebSite", "name": "XBSTACK", "url": "https://www.xbstack.com/" }
      },
      {
        "@type": "ItemList",
        "name": "MCP core articles",
        "itemListElement": mcpCoreArticles.map((article, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": article.title,
          "url": `https://www.xbstack.com${article.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": mcpFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
  const geoConfig = {
    geo_summary: "XBSTACK MCP \u680F\u76EE\u662F Model Context Protocol \u5185\u5BB9\u7684\u4E13\u9898\u5165\u53E3\uFF0C\u8986\u76D6 MCP Server\u3001MCP vs Function Calling\u3001Streamable HTTP\u3001OAuth \u8BA4\u8BC1\u3001Filesystem Server\u3001SQLite Server\u3001Tool \u6743\u9650\u3001\u5B89\u5168\u6CBB\u7406\u3001allowedRoots\u3001\u591A\u7528\u6237\u9694\u79BB\u3001Tool Call \u5BA1\u8BA1\u3001JSON-RPC parse error\u3001Stdio \u6C61\u67D3\u548C Tool Call Result Truncated \u6392\u969C\u3002\u8BE5\u9875\u9762\u5E94\u6309\u7167\u7406\u89E3\u534F\u8BAE\u3001\u672C\u5730 Server\u3001\u8FDC\u7A0B\u90E8\u7F72\u3001\u5B89\u5168\u6CBB\u7406\u548C\u6392\u969C\u76EE\u5F55\u7EC4\u7EC7\u5185\u5BB9\u3002",
    geo_questions: [
      "Where should I start learning MCP on XBSTACK?",
      "What is Model Context Protocol?",
      "How do I deploy MCP Server remotely?",
      "Why does MCP Server need OAuth?",
      "How do I secure MCP Filesystem Server?",
      "How do I troubleshoot MCP JSON-RPC parse errors?",
      "What is the difference between MCP and Function Calling?"
    ],
    geo_entities: [
      "XBSTACK",
      "MCP",
      "Model Context Protocol",
      "MCP Server",
      "MCP OAuth",
      "Streamable HTTP",
      "MCP Filesystem Server",
      "MCP SQLite Server",
      "allowedRoots",
      "MCP Security",
      "JSON-RPC",
      "Stdio",
      "Tool Call Audit"
    ]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": mcpSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden text-left">  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6">  <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai/" class="hover:text-orange-500 transition-colors">AI Hub</a> <span class="opacity-30">/</span> <span class="text-orange-500">${displayTitle}</span> </nav>  <header class="mb-20 space-y-6"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black border border-orange-500/20 uppercase tracking-[0.3em]">
Context Protocol Blueprint / 上下文协议蓝图
</div> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
AI / <span class="text-orange-500">MCP.</span> </h1> <p class="max-w-3xl text-lg font-bold text-slate-500 dark:text-slate-400 italic">
“MCP 解决的是工具接入的标准化问题：让大模型以可审计、可授权、可隔离的方式访问文件、数据库和外部服务。”
</p> </header> <section class="mb-16 p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">相关专题</div> <div class="grid grid-cols-2 md:grid-cols-5 gap-3"> <a href="/ai/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">AI Hub</a> <a href="/ai/agent/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors">Agent</a> <a href="/ai/langgraph/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">LangGraph</a> <a href="/ai/mcp/" class="px-4 py-3 rounded-2xl bg-orange-500/10 text-[10px] font-black uppercase tracking-widest text-orange-500">MCP</a> <a href="/ai/workflow/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Workflow</a> </div> </section> <section id="mcp-fit" class="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6"> <article class="p-8 rounded-[36px] bg-emerald-500/5 border border-emerald-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400 mb-4">适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">你要把工具接入做成可治理系统</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 需要接入文件、数据库、远程服务，但又担心越权和审计问题。</li> <li>· 要区分本地 stdio、远程 Streamable HTTP、OAuth、allowedRoots 的边界。</li> <li>· 正在排查 JSON-RPC parse error、stdio 污染、Tool Call 截断等真实故障。</li> </ul> </article> <article class="p-8 rounded-[36px] bg-rose-500/5 border border-rose-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-rose-600 dark:text-rose-400 mb-4">不适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">只想给模型塞一个函数，不需要 MCP</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 单应用内部只有几个稳定函数，Function Calling 已经足够。</li> <li>· 没有多客户端共享 Server、权限隔离、远程部署和审计需求。</li> <li>· 只是想看“完整指南”关键词堆砌；本站后续不再重复泛 guide。</li> </ul> </article> </section> <section id="start-mcp" class="mb-24 p-10 md:p-12 rounded-[50px] bg-orange-500/5 border border-orange-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">MCP 从哪里开始？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">如果你是从搜索进来，不要先看长列表。按这四步走：先判断 MCP 和 Function Calling 边界，再理解协议，再做本地 Server，最后补权限治理。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${mcpStartRoutes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-colors block"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">开始 →</div> </a>`)} </div> </section> <section id="mcp-production-path" data-theme-surface="adaptive-mcp-production" class="mb-24 p-10 md:p-12 rounded-[50px] bg-orange-50/70 text-slate-950 border border-orange-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-950 dark:text-white">MCP 生产部署路径</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">MCP 内容不再按 guide / tutorial / deep-dive 随机堆叠，而是按真实部署顺序组织：先跑通本地 stdio，再接 SQLite / Filesystem Server，随后进入远程 HTTP、OAuth、安全治理和协议排障。</p> </div> <div class="grid grid-cols-1 md:grid-cols-6 gap-3 text-center"> <a href="/ai/mcp-protocol-guide/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Guide<br>协议边界</a> <a href="/ai/mcp-json-rpc-parse-error/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Local<br>stdio 排障</a> <a href="/ai/mcp-server-sqlite/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Server<br>SQLite / FS</a> <a href="/ai/mcp-streamable-http-deployment/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Remote<br>HTTP</a> <a href="/ai/mcp-oauth-authentication/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Auth<br>OAuth</a> <a href="/ai/mcp-json-rpc-parse-error/" class="rounded-[24px] bg-white border border-orange-100 p-4 text-[10px] font-black uppercase tracking-widest text-orange-700 hover:border-orange-400 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-orange-200">Debug<br>JSON-RPC</a> </div> </section> <section id="mcp-security-checklist" class="mb-24 p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">MCP Server 上线安全清单</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">MCP 的风险不在协议名，而在工具权限被模型间接放大。任何能读取文件、查询数据库或触发外部 API 的 Server，都必须先通过安全边界检查。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${mcpSecurityChecklist.map((item, index) => renderTemplate`<div class="p-5 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex gap-4"> <span class="text-[10px] font-black text-orange-500 font-mono">${String(index + 1).padStart(2, "0")}</span> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item}</p> </div>`)} </div> </section> <section id="mcp-decisions" class="mb-24 grid grid-cols-1 md:grid-cols-3 gap-5"> ${mcpDecisionRows.map((row) => renderTemplate`<article class="p-7 rounded-[32px] bg-orange-500/5 border border-orange-500/10"> <h2 class="text-lg font-black italic uppercase text-orange-500 mb-4">${row.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${row.desc}</p> </article>`)} </section>  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"> <section class="space-y-6 p-10 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white">从本地工具到远程服务</h2> <div class="text-sm font-medium text-slate-500 dark:text-slate-400 space-y-4 leading-relaxed"> <p>基于 stdio 的本地连接是 MCP 的默认通信信道。但在真实的协作或部署场景中，大模型客户端需要通过网络访问云端资源。</p> <p>这就是为什么我们需要引入 Streamable HTTP 远程传输层，并在服务暴露给公网时配置 OAuth 认证，确保工具的安全访问控制。</p> </div> </section> <section class="space-y-6 p-10 rounded-[40px] bg-orange-500/5 border border-orange-500/10"> <h2 class="text-2xl font-black italic uppercase text-orange-500">MCP 核心三要素</h2> <div class="grid grid-cols-3 gap-4"> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-orange-500/20"> <div class="text-[10px] font-black uppercase text-orange-600">Tools</div> <p class="text-[9px] font-bold text-slate-400">大模型可以执行的客户端函数</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-orange-500/20"> <div class="text-[10px] font-black uppercase text-orange-600">Resources</div> <p class="text-[9px] font-bold text-slate-400">静态或动态的上下文数据源</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-orange-500/20"> <div class="text-[10px] font-black uppercase text-orange-600">Prompts</div> <p class="text-[9px] font-bold text-slate-400">标准化的预设交互模板</p> </div> </div> </section> </div>  <section id="must-read" class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 mb-24"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
⚡ 推荐起点
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/ai/mcp-server-production-governance/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">生产治理</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP Server 生产化治理 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">远程部署、允许访问目录、高风险接口审批以及多租户鉴权控制方案。</p> </a> <a href="/ai/mcp-vs-function-calling/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">STEP 02 / COMPARISON</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP vs Function Calling ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">系统拆解什么时候该用标准协议，什么时候应该选用更轻量的原生函数调用。</p> </a> <a href="/ai/mcp-vs-semantic-kernel/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">ARCHITECTURE / SELECTION</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP vs Semantic Kernel ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">区分协议、Plugin、Function Calling 和 Agent 编排，并给出两者组合使用的企业架构。</p> </a> <a href="/ai/mcp-streamable-http-deployment/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">STEP 03 / DEPLOYMENT</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP Streamable HTTP ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">跳出本地限制，以标准 Server Sent Events 方式托管运行远程服务的方法。</p> </a> <a href="/ai/mcp-oauth-authentication/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">STEP 04 / SECURITY</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP OAuth 认证 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">为外部访问智能体链路补齐安全令牌校验，确保你的远程节点不被恶意刷流量。</p> </a> <a href="/ai/mcp-security-best-practices/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">STEP 05 / COMPLIANCE</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">MCP 安全治理 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">防范提示词注入越权、文件读写边界拦截以及敏感执行日志审计的最佳实操。</p> </a> </div> </section> <section id="faq" class="mb-24 p-10 md:p-12 rounded-[50px] bg-orange-500/5 border border-orange-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">MCP 常见问题</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">MCP 的核心不是“让模型能调用更多东西”，而是让工具访问进入可治理、可审计、可隔离的工程边界。</p> </div> <div class="space-y-4"> ${mcpFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section>  <div class="space-y-24 mb-32 relative z-30 pt-16 border-t border-slate-200 dark:border-white/10"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-8 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-orange-600"></span> 系统内容分类清单 / CATEGORIZED_ARTICLES
</h2> ${groupedPosts.map((group) => group.articles.length > 0 && renderTemplate`<section class="space-y-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> ${group.title} </h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${group.articles.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl relative z-10 cursor-pointer animate-fadeUp"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-orange-500/10 text-[9px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400">PROTOCOL</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors leading-snug"> ${post.data.title} </h4> <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500 opacity-60 group-hover:opacity-100 transition-all">
INVOKE_PROTOCOL <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> </section>`)}  ${otherPosts.length > 0 && renderTemplate`<section class="space-y-8 pt-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> 更多实战记录 / MORE LOGS
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${otherPosts.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500/30 transition-all shadow-sm block animate-fadeUp text-left"> <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-2 m-0 leading-normal"> ${post.data.title} </h4> </a>`)} </div> </section>`} </div> <section id="mcp-next" data-theme-surface="adaptive-mcp-next" class="p-10 md:p-12 rounded-[50px] bg-orange-50/70 text-slate-950 border border-orange-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"> <div> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-orange-700 dark:text-orange-300 mb-4">下一步 / Production Path</div> <h2 class="text-3xl font-black italic uppercase text-slate-950 dark:text-white mb-4">把 MCP 文章从指南堆叠改成部署路径</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">MCP 专题后续只保留清晰分工：入门页解释协议边界，部署页承接远程 Server，认证页承接 OAuth，安全页承接治理，排障页承接 JSON-RPC、stdio 和截断问题。</p> </div> <div class="flex flex-col gap-3"> <a href="/ai/mcp-streamable-http-deployment/" class="rounded-full bg-orange-600 px-6 py-3 text-xs font-black uppercase tracking-widest text-white text-center hover:bg-orange-700 transition-colors">远程部署路径 →</a> <a href="/ai/mcp-json-rpc-parse-error/" class="rounded-full border border-orange-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-orange-400 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">故障排查入口 →</a> <a href="/newsletter/" class="rounded-full border border-orange-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-orange-400 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">订阅整改复盘 →</a> <a href="/github/" class="rounded-full border border-orange-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-orange-400 hover:text-orange-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">查看 GitHub / 示例入口 →</a> </div> </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/mcp.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/mcp.astro";
const $$url = "/ai/mcp/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mcp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
