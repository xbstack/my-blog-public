import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_BDgPsFL4.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Langgraph = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "LangGraph \u4E13\u9898\u6307\u5357";
  const collection = "ai";
  const roadmapPaths = [
    {
      step: "01",
      title: "\u72B6\u6001\u9694\u79BB",
      subtitle: "State Isolation",
      id: "langgraph-thread-session-state-isolation"
    },
    {
      step: "02",
      title: "\u72B6\u6001\u6301\u4E45\u5316",
      subtitle: "Checkpointer",
      id: "langgraph-checkpointer-memory-sqlite-redis"
    },
    {
      step: "03",
      title: "\u4EBA\u5DE5\u5BA1\u6279",
      subtitle: "Human-in-the-loop",
      id: "langgraph-human-in-the-loop-approval"
    },
    {
      step: "04",
      title: "\u5931\u8D25\u6062\u590D",
      subtitle: "Error Recovery",
      id: "langgraph-agent-error-recovery-retry-timeout"
    },
    {
      step: "05",
      title: "\u53EF\u89C2\u6D4B\u6027",
      subtitle: "Observability",
      id: "langgraph-observability-agent-trace"
    },
    {
      step: "06",
      title: "\u591A\u667A\u80FD\u4F53\u534F\u4F5C",
      subtitle: "Supervisor / Worker",
      id: "langgraph-supervisor-worker-handoff"
    },
    {
      step: "07",
      title: "\u5B50\u56FE\u62C6\u5206",
      subtitle: "Subgraph",
      id: "langgraph-subgraph-worker-state"
    },
    {
      step: "08",
      title: "\u8BB0\u5FC6\u4E0E\u957F\u671F\u72B6\u6001",
      subtitle: "Memory",
      id: "langgraph-memory-checkpointing-production-agents"
    }
  ];
  const extensionIds = [
    "crewai-vs-langgraph-for-ai-workflows",
    "ai-agent-memory-implementation",
    "agent-memory-system",
    "ai-agent-deployment",
    "ai-agent-observability",
    "ai-agent-evaluation-guide",
    "langchain-vs-crewai-for-ai-agents",
    "ai-agent-framework-comparison"
  ];
  const allPosts = await getCollection(collection, ({ data }) => !data.draft && data.lang !== "en");
  const roadmapPosts = roadmapPaths.map((item) => {
    const post = allPosts.find((p) => p.id.replace(/\.(md|mdx)$/, "") === item.id);
    return {
      ...item,
      post
    };
  }).filter((item) => item.post !== void 0);
  const extensionPosts = allPosts.filter((post) => {
    const cleanId = post.id.replace(/\.(md|mdx)$/, "");
    return extensionIds.includes(cleanId) && !roadmapPaths.some((r) => r.id === cleanId);
  });
  const categorizedIds = [...roadmapPaths.map((r) => r.id), ...extensionIds];
  const otherPosts = allPosts.filter(
    (post) => (post.data.hub === "langgraph" || post.id.includes("langgraph")) && !categorizedIds.includes(post.id.replace(/\.(md|mdx)$/, ""))
  ).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 6);
  const pageTitle = `${displayTitle} | \u72B6\u6001\u7BA1\u7406\u3001\u4EBA\u673A\u534F\u540C\u4E0E\u751F\u4EA7\u7EA7\u591A\u667A\u80FD\u4F53\u7F16\u6392 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "XBSTACK LangGraph Hub \u662F\u751F\u4EA7\u7EA7\u6709\u72B6\u6001 Agent \u7F16\u6392\u5165\u53E3\uFF0C\u7CFB\u7EDF\u6574\u7406 thread_id \u72B6\u6001\u9694\u79BB\u3001Checkpointer\u3001Human-in-the-loop\u3001\u5931\u8D25\u6062\u590D\u3001Observability\u3001Supervisor Worker \u548C Subgraph \u62C6\u5206\u5B9E\u6218\u3002";
  const keywords = "LangGraph, StateGraph, thread_id, session_id, Memory Checkpoint, Checkpointer, Human-in-the-loop, HITL, State Isolation, Subgraph, Supervisor Worker, Multi-Agent Systems, LangSmith, Agentic Workflow, LangGraph \u5B9E\u6218";
  const langGraphStartRoutes = [
    { title: "\u7B2C\u4E00\u6B65\uFF1A\u5148\u8BBE\u8BA1 thread_id \u548C\u72B6\u6001\u9694\u79BB", desc: "\u751F\u4EA7\u73AF\u5883\u6700\u5148\u51FA\u95EE\u9898\u7684\u662F\u72B6\u6001\u4E32\u7EBF\uFF0C\u4E0D\u662F\u56FE\u753B\u5F97\u4E0D\u591F\u590D\u6742\u3002", href: "/ai/langgraph-thread-session-state-isolation/" },
    { title: "\u7B2C\u4E8C\u6B65\uFF1A\u9009\u62E9 Checkpointer \u6301\u4E45\u5316\u65B9\u6848", desc: "SQLite\u3001Postgres\u3001Redis \u7684\u9009\u62E9\u51B3\u5B9A\u6682\u505C\u6062\u590D\u3001\u5931\u8D25\u91CD\u8BD5\u548C\u8DE8\u8FDB\u7A0B\u7EED\u8DD1\u80FD\u529B\u3002", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/" },
    { title: "\u7B2C\u4E09\u6B65\uFF1A\u628A\u9AD8\u98CE\u9669\u52A8\u4F5C\u653E\u8FDB HITL", desc: "\u5199\u5E93\u3001\u53D1\u6D88\u606F\u3001\u5BA1\u6279\u3001\u53D1\u5E03\u4E4B\u524D\u8981\u80FD\u6682\u505C\u3001\u786E\u8BA4\u3001\u6062\u590D\u548C\u5BA1\u8BA1\u3002", href: "/ai/langgraph-human-in-the-loop-approval/" },
    { title: "\u7B2C\u56DB\u6B65\uFF1A\u8865\u9F50\u5931\u8D25\u6062\u590D\u548C Trace", desc: "\u8282\u70B9\u5931\u8D25\u540E\u80FD\u91CD\u8BD5\u3001\u8865\u507F\u3001\u8DF3\u8FC7\u6216\u4EBA\u5DE5\u4ECB\u5165\uFF0C\u5FC5\u987B\u80FD\u590D\u76D8\u6BCF\u6B21\u72B6\u6001\u53D8\u5316\u3002", href: "/ai/langgraph-observability-agent-trace/" }
  ];
  const langGraphDecisionBlocks = [
    { title: "StateGraph", desc: "\u5B9A\u4E49\u6D41\u7A0B\u7ED3\u6784\u548C\u8282\u70B9\u8DF3\u8F6C\u89C4\u5219\uFF0C\u8BA9 Agent \u7684\u6267\u884C\u8DEF\u5F84\u4ECE\u9690\u5F0F\u94FE\u5F0F\u8C03\u7528\u53D8\u6210\u53EF\u5BA1\u8BA1\u7684\u56FE\u3002" },
    { title: "State", desc: "\u4FDD\u5B58\u8DE8\u8282\u70B9\u5171\u4EAB\u7684\u6570\u636E\uFF0C\u5FC5\u987B\u8BBE\u8BA1 reducer\u3001\u5B57\u6BB5\u8FB9\u754C\u548C\u66F4\u65B0\u7B56\u7565\uFF0C\u5426\u5219\u5F88\u5BB9\u6613\u51FA\u73B0\u72B6\u6001\u8986\u76D6\u3002" },
    { title: "thread_id", desc: "\u9694\u79BB\u7528\u6237\u3001\u4F1A\u8BDD\u548C\u4EFB\u52A1\u5B9E\u4F8B\uFF0C\u662F\u591A\u7528\u6237\u751F\u4EA7\u73AF\u5883\u91CC\u907F\u514D\u72B6\u6001\u4E32\u7EBF\u7684\u7B2C\u4E00\u9053\u8FB9\u754C\u3002" },
    { title: "Checkpointer", desc: "\u8D1F\u8D23\u6301\u4E45\u5316\u6267\u884C\u72B6\u6001\uFF0C\u652F\u6301\u6682\u505C\u3001\u6062\u590D\u3001\u5931\u8D25\u91CD\u8BD5\u548C\u8DE8\u8FDB\u7A0B\u7EED\u8DD1\u3002" },
    { title: "HITL", desc: "\u5728\u4EBA\u7C7B\u5BA1\u6279\u70B9\u4E2D\u65AD\u56FE\u6267\u884C\uFF0C\u628A\u9AD8\u98CE\u9669\u52A8\u4F5C\u4ECE\u81EA\u52A8\u6267\u884C\u6539\u6210\u53EF\u786E\u8BA4\u3001\u53EF\u56DE\u6EDA\u3002" },
    { title: "Observability", desc: "\u8BB0\u5F55\u8282\u70B9\u8F93\u5165\u8F93\u51FA\u3001\u72B6\u6001\u53D8\u5316\u3001\u5DE5\u5177\u8C03\u7528\u548C\u9519\u8BEF\u94FE\u8DEF\uFF0C\u4FDD\u8BC1\u590D\u6742\u6D41\u7A0B\u53EF\u590D\u76D8\u3002" }
  ];
  const langGraphFaqs = [
    { question: "LangGraph \u548C LangChain \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "LangChain \u66F4\u9002\u5408\u5FEB\u901F\u7EC4\u5408\u6A21\u578B\u3001\u5DE5\u5177\u548C\u94FE\u5F0F\u8C03\u7528\uFF1BLangGraph \u5173\u6CE8\u6709\u72B6\u6001\u6D41\u7A0B\u3001\u5206\u652F\u3001\u5FAA\u73AF\u3001\u6682\u505C\u6062\u590D\u548C\u591A\u667A\u80FD\u4F53\u7F16\u6392\u3002\u53EF\u4EE5\u628A LangGraph \u770B\u6210\u590D\u6742 Agent \u5DE5\u4F5C\u6D41\u7684\u63A7\u5236\u5C42\uFF0C\u800C\u4E0D\u662F\u666E\u901A\u94FE\u5F0F\u8C03\u7528\u7684\u66FF\u4EE3\u5199\u6CD5\u3002" },
    { question: "\u4EC0\u4E48\u65F6\u5019\u9700\u8981 LangGraph\uFF1F", answer: "\u5F53\u6D41\u7A0B\u9700\u8981\u72B6\u6001\u9694\u79BB\u3001\u4EBA\u5DE5\u5BA1\u6279\u3001\u5931\u8D25\u6062\u590D\u3001\u5B50\u56FE\u62C6\u5206\u3001\u5FAA\u73AF\u6267\u884C\u6216\u591A\u89D2\u8272\u534F\u540C\u65F6\uFF0CLangGraph \u66F4\u9002\u5408\u3002\u5982\u679C\u53EA\u662F\u4E00\u6B21\u95EE\u7B54\u6216\u56FA\u5B9A\u6B65\u9AA4\u8C03\u7528\uFF0C\u76F4\u63A5\u7528\u7B80\u5355 Workflow \u6216\u51FD\u6570\u8C03\u7528\u66F4\u8F7B\u3002" },
    { question: "thread_id \u4E3A\u4EC0\u4E48\u91CD\u8981\uFF1F", answer: "thread_id \u662F LangGraph \u533A\u5206\u4E0D\u540C\u6267\u884C\u7EBF\u7A0B\u7684\u5173\u952E\u3002\u6CA1\u6709\u6E05\u6670\u7684 thread_id\u3001session_id \u548C user_id \u8BBE\u8BA1\uFF0C\u591A\u7528\u6237\u73AF\u5883\u4E2D\u5F88\u5BB9\u6613\u51FA\u73B0\u72B6\u6001\u4E32\u7EBF\u3001\u8BB0\u5FC6\u6C61\u67D3\u548C\u9519\u8BEF\u6062\u590D\u5230\u522B\u4EBA\u7684\u4EFB\u52A1\u3002" },
    { question: "Checkpointer \u5E94\u8BE5\u9009 SQLite\u3001Postgres \u8FD8\u662F Redis\uFF1F", answer: "SQLite \u9002\u5408\u672C\u5730\u5F00\u53D1\u548C\u8F7B\u91CF\u573A\u666F\uFF1BPostgres \u9002\u5408\u9700\u8981\u4E8B\u52A1\u3001\u5907\u4EFD\u548C\u7A33\u5B9A\u6301\u4E45\u5316\u7684\u751F\u4EA7\u573A\u666F\uFF1BRedis \u66F4\u9002\u5408\u77ED\u751F\u547D\u5468\u671F\u3001\u9AD8\u541E\u5410\u548C\u961F\u5217\u5F0F\u6062\u590D\u3002\u9009\u62E9\u53D6\u51B3\u4E8E\u4EFB\u52A1\u751F\u547D\u5468\u671F\u548C\u4E00\u81F4\u6027\u8981\u6C42\u3002" },
    { question: "Human-in-the-loop \u5982\u4F55\u843D\u5730\uFF1F", answer: "HITL \u5E94\u8BE5\u653E\u5728\u5199\u5E93\u3001\u53D1\u6D88\u606F\u3001\u652F\u4ED8\u3001\u53D1\u5E03\u3001\u6743\u9650\u53D8\u66F4\u7B49\u9AD8\u98CE\u9669\u52A8\u4F5C\u524D\u3002\u7CFB\u7EDF\u9700\u8981\u4FDD\u5B58\u4E2D\u65AD\u524D\u72B6\u6001\u3001\u5BA1\u6279\u8F93\u5165\u3001\u6062\u590D\u5165\u53E3\u548C\u5BA1\u8BA1\u8BB0\u5F55\uFF0C\u800C\u4E0D\u662F\u53EA\u5728 UI \u4E0A\u5F39\u4E00\u4E2A\u786E\u8BA4\u6846\u3002" },
    { question: "LangGraph \u600E\u4E48\u505A\u5931\u8D25\u6062\u590D\uFF1F", answer: "\u5931\u8D25\u6062\u590D\u4F9D\u8D56\u72B6\u6001\u8BBE\u8BA1\u3001Checkpointer \u548C\u8282\u70B9\u5E42\u7B49\u3002\u6BCF\u4E2A\u8282\u70B9\u90FD\u5E94\u8BE5\u77E5\u9053\u5931\u8D25\u540E\u80FD\u5426\u91CD\u8BD5\u3001\u662F\u5426\u9700\u8981\u8865\u507F\u3001\u662F\u5426\u5141\u8BB8\u8DF3\u8FC7\uFF0C\u4EE5\u53CA\u5982\u4F55\u628A\u9519\u8BEF\u5199\u56DE\u72B6\u6001\u4F9B\u540E\u7EED\u8282\u70B9\u5224\u65AD\u3002" }
  ];
  const langGraphCoreArticles = [
    { title: "LangGraph \u72B6\u6001\u9694\u79BB\u5B9E\u6218", href: "/ai/langgraph-thread-session-state-isolation/" },
    { title: "LangGraph Checkpointer \u9009\u578B", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/" },
    { title: "LangGraph Human-in-the-loop \u5BA1\u6279\u6D41", href: "/ai/langgraph-human-in-the-loop-approval/" },
    { title: "LangGraph \u591A\u667A\u80FD\u4F53\u5931\u8D25\u6062\u590D", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" },
    { title: "LangGraph Observability \u5B9E\u6218", href: "/ai/langgraph-observability-agent-trace/" },
    { title: "LangGraph Supervisor / Worker \u534F\u4F5C", href: "/ai/langgraph-supervisor-worker-handoff/" },
    { title: "LangGraph Subgraph Worker State", href: "/ai/langgraph-subgraph-worker-state/" },
    { title: "LangGraph Memory \u4E0E\u957F\u671F\u72B6\u6001", href: "/ai/langgraph-memory-checkpointing-production-agents/" }
  ];
  const langGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": pageTitle,
        "url": "https://www.xbstack.com/ai/langgraph/",
        "description": pageDescription,
        "inLanguage": "zh-CN",
        "about": ["LangGraph", "StateGraph", "Checkpointer", "Human-in-the-loop", "Multi-Agent Systems", "LangSmith"].map((name) => ({ "@type": "Thing", name })),
        "isPartOf": { "@type": "WebSite", "name": "XBSTACK", "url": "https://www.xbstack.com/" }
      },
      {
        "@type": "ItemList",
        "name": "LangGraph core articles",
        "itemListElement": langGraphCoreArticles.map((article, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": article.title,
          "url": `https://www.xbstack.com${article.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": langGraphFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
  const geoConfig = {
    geo_summary: "XBSTACK LangGraph \u4E13\u9898\u7CFB\u7EDF\u68B3\u7406\u6709\u72B6\u6001\u667A\u80FD\u4F53\u7F16\u6392\uFF0C\u8986\u76D6 StateGraph\u3001thread_id \u4E0E session_id \u72B6\u6001\u9694\u79BB\u3001SQLite/Postgres Checkpointer \u8BB0\u5FC6\u6301\u4E45\u5316\u3001Human-in-the-loop \u4EBA\u5DE5\u5BA1\u6279\u3001\u591A\u667A\u80FD\u4F53\u534F\u4F5C\u3001\u5B50\u56FE Subgraph \u4E0E LangSmith \u53EF\u89C2\u6D4B\u6027 Trace\u3002\u8BE5\u9875\u9762\u5E94\u6309\u7167\u56FE\u58F0\u660E\u3001\u72B6\u6001\u9694\u79BB\u3001\u68C0\u67E5\u70B9\u3001\u4EBA\u673A\u5BA1\u6279\u3001\u5B50\u56FE\u62C6\u5206\u548C\u6392\u969C\u76EE\u5F55\u7EC4\u7EC7\u5185\u5BB9\u3002",
    geo_questions: [
      "Where should I start learning LangGraph on XBSTACK?",
      "What is the best LangGraph learning path?",
      "How does LangGraph manage memory and state checkpoints?",
      "How do you implement Human-in-the-loop in LangGraph?",
      "Why does LangGraph need thread_id isolation?",
      "How do you resolve recursion limit errors in LangGraph?",
      "What is the difference between LangGraph and CrewAI?"
    ],
    geo_entities: [
      "XBSTACK",
      "LangGraph",
      "StateGraph",
      "Memory Checkpoint",
      "Checkpointer",
      "Human-in-the-loop",
      "HITL",
      "State Isolation",
      "Subgraph",
      "Multi-Agent Systems",
      "LangSmith",
      "recursion_limit",
      "Agentic Workflow"
    ]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": langGraphSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden text-left">  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6">  <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-indigo-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai/" class="hover:text-indigo-500 transition-colors">AI Hub</a> <span class="opacity-30">/</span> <span class="text-indigo-500">${displayTitle}</span> </nav>  <header class="mb-20 space-y-6"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-500/20 uppercase tracking-[0.3em]">
Stateful Orchestration Blueprint / 有状态编排蓝图
</div> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
AI / <span class="text-indigo-500">LANGGRAPH.</span> </h1> <p class="max-w-3xl text-lg font-bold text-slate-500 dark:text-slate-400 italic">
LangGraph 适合处理需要状态、分支、回滚和人工确认的 Agent 流程。这里按生产系统需要的能力组织：状态隔离、检查点、人机协同、失败恢复和可观测性。
</p> </header> <section class="mb-16 p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">相关专题</div> <div class="grid grid-cols-2 md:grid-cols-5 gap-3"> <a href="/ai/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">AI Hub</a> <a href="/ai/agent/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors">Agent</a> <a href="/ai/langgraph/" class="px-4 py-3 rounded-2xl bg-indigo-500/10 text-[10px] font-black uppercase tracking-widest text-indigo-500">LangGraph</a> <a href="/ai/mcp/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">MCP</a> <a href="/ai/workflow/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Workflow</a> </div> </section> <section id="langgraph-fit" class="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6"> <article class="p-8 rounded-[36px] bg-emerald-500/5 border border-emerald-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400 mb-4">适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">你已经遇到生产级状态问题</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 多用户 Agent 状态串线、上下文污染、审批恢复困难。</li> <li>· 需要把 thread_id、session_id、user_id、run_id 做成可审计链路。</li> <li>· 需要在真实项目里落地 Checkpointer、HITL、Trace、Supervisor / Worker。</li> </ul> </article> <article class="p-8 rounded-[36px] bg-rose-500/5 border border-rose-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-rose-600 dark:text-rose-400 mb-4">不适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">只想看泛入门，不建议从这里开始</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 只需要一次性问答、简单 RAG 或固定顺序 Chain。</li> <li>· 还没有真实业务状态、审批、恢复、审计问题。</li> <li>· 想找“LangGraph 是什么”的泛科普；本站后续不再重复写泛题。</li> </ul> </article> </section> <section id="start-langgraph" class="mb-24 p-10 md:p-12 rounded-[50px] bg-indigo-500/5 border border-indigo-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">LangGraph 从哪里开始？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">不要从复杂多智能体开始。生产级 LangGraph 的顺序应该是：状态隔离、检查点、人机审批、失败恢复和可观测性，最后才是 Supervisor、Worker 和 Subgraph。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${langGraphStartRoutes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-colors block"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-500">开始 →</div> </a>`)} </div> </section> <section id="when-to-use-langgraph" class="mb-24 p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">什么时候需要 LangGraph？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">LangGraph 的价值不在于把代码写得更复杂，而在于把状态、分支、恢复和人工审批显式化。只要流程开始跨用户、跨会话、跨节点恢复，就应该优先考虑图式编排。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${langGraphDecisionBlocks.map((block) => renderTemplate`<article class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-500 mb-3">${block.title}</div> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${block.desc}</p> </article>`)} </div> </section> <section id="langgraph-troubleshooting" class="mb-24 p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">高频排障入口</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">LangGraph 生产问题通常不是“图怎么画”，而是状态隔离、checkpoint 恢复、人机审批、trace 和子图字段边界没有设计清楚。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> <a href="/ai/langgraph-thread-session-state-isolation/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">状态串线 / thread_id 设计 →</a> <a href="/ai/langgraph-checkpointer-memory-sqlite-redis/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">checkpoint 丢失 / SQLite Redis 选型 →</a> <a href="/ai/langgraph-human-in-the-loop-approval/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">HITL 恢复失败 / 审批状态 →</a> <a href="/ai/langgraph-observability-agent-trace/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">Trace 缺失 / Audit Log →</a> <a href="/ai/langgraph-agent-error-recovery-retry-timeout/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">Tool Error / Timeout / Retry →</a> <a href="/ai/langgraph-subgraph-worker-state/" class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors">Subgraph State 映射错误 →</a> </div> </section>  <section id="must-read" class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 mb-24"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
⚡ 推荐起点
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/ai/langgraph-thread-session-state-isolation/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">状态隔离</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">LangGraph 状态隔离 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">在高并发下合理隔离不同用户的执行线程，彻底避免全局状态交叉覆盖冲突。</p> </a> <a href="/ai/langgraph-human-in-the-loop-approval/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">STEP 02 / APPROVAL</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">人机协同审批 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">在敏感的写库和外部API调用前拦截执行，实现高安全性的审核和重置恢复流。</p> </a> <a href="/ai/langgraph-checkpointer-memory-sqlite-redis/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">检查点存储</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">记忆持久化 Checkpointer ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">配置 SQLite 或生产级 Redis 存储断点，即使服务宕机也能跨 Pod 无缝恢复。</p> </a> <a href="/ai/langgraph-subgraph-worker-state/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">STEP 04 / COMPOSITION</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">子图 Subgraph 拆分 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">将单体巨型图重构为高内聚的子图集群，理清父子图之间的参数映射和字段隐藏。</p> </a> <a href="/ai/langgraph-observability-agent-trace/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">STEP 05 / MONITORING</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">可观测性 Trace 审计 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">使用 LangSmith 或私有 Trace 插件，抓取每一次跳转的中间状态与输入输出时延。</p> </a> </div> </section> <section id="faq" class="mb-24 p-10 md:p-12 rounded-[50px] bg-indigo-500/5 border border-indigo-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">LangGraph 常见问题</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">如果一个项目需要 LangGraph，通常不是因为框架流行，而是因为流程复杂度已经超过普通链式调用。</p> </div> <div class="space-y-4"> ${langGraphFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section>  <div class="space-y-24 mb-32 relative z-30 pt-16 border-t border-slate-200 dark:border-white/10"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-8 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-indigo-600"></span> 系统内容分类清单 / CATEGORIZED_ARTICLES
</h2> ${roadmapPosts.length > 0 && renderTemplate`<section class="space-y-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 编排主线学习路径 / THE ROADMAP
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${roadmapPosts.map((item) => renderTemplate`<a${addAttribute(`/ai/${item.post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl relative z-10 cursor-pointer animate-fadeUp"> <div> <div class="flex items-center justify-between mb-6"> <div class="flex items-center gap-3"> <span class="px-3 py-1 rounded-full bg-indigo-500/10 text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">STEP ${item.step}</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(item.post.data.createdAt)}</span> </div> <span class="text-2xl font-black text-slate-200 dark:text-slate-800 font-mono group-hover:text-indigo-500/30 transition-colors">${item.step}</span> </div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors leading-snug"> ${item.post.data.title} </h4> <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${item.post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500 opacity-60 group-hover:opacity-100 transition-all">
INVOKE_GRAPH <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> </section>`} ${extensionPosts.length > 0 && renderTemplate`<section class="space-y-8 pt-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> 扩展探索与周边 / EXTENSIONS
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${extensionPosts.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl relative z-10 cursor-pointer animate-fadeUp"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[9px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">EXTENSION</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors leading-snug"> ${post.data.title} </h4> <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500 opacity-60 group-hover:opacity-100 transition-all">
EXPLORE <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> </section>`}  ${otherPosts.length > 0 && renderTemplate`<section class="space-y-8 pt-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> 更多实战记录 / MORE LOGS
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${otherPosts.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all shadow-sm block animate-fadeUp text-left"> <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors line-clamp-2 m-0 leading-normal"> ${post.data.title} </h4> </a>`)} </div> </section>`} </div> <section id="langgraph-next" data-theme-surface="adaptive-langgraph-next" class="p-10 md:p-12 rounded-[50px] bg-indigo-50/70 text-slate-950 border border-indigo-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"> <div> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300 mb-4">下一步 / Conversion Path</div> <h2 class="text-3xl font-black italic uppercase text-slate-950 dark:text-white mb-4">从阅读路线转到项目证据</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">每篇 LangGraph 主力文后续都按同一标准补强：真实运行环境、最小代码片段、报错日志、排查过程和最终修复结果。新文只写真实项目中出现的新问题，不再重复泛入门。</p> </div> <div class="flex flex-col gap-3"> <a href="/ai/mcp/" class="rounded-full bg-indigo-600 px-6 py-3 text-xs font-black uppercase tracking-widest text-white text-center hover:bg-indigo-700 transition-colors">继续看 MCP 生产治理 →</a> <a href="/ai/workflow/" class="rounded-full border border-indigo-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-indigo-400 hover:text-indigo-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">继续看 n8n Workflow →</a> <a href="/newsletter/" class="rounded-full border border-indigo-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-indigo-400 hover:text-indigo-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">订阅整改复盘 →</a> <a href="/about/" class="rounded-full border border-indigo-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-indigo-400 hover:text-indigo-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">查看小白项目背景 →</a> </div> </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/langgraph.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/langgraph.astro";
const $$url = "/ai/langgraph/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Langgraph,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
