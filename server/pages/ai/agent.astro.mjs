import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_BDgPsFL4.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Agent = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "AI Agent \u5B9E\u6218\u6307\u5357";
  const collection = "ai";
  const agentPaths = [
    {
      title: "\u5165\u95E8\u4E0E\u6838\u5FC3\u67B6\u6784 (Fundamentals)",
      ids: [
        "ai-agent-vs-ai-assistant",
        "ai-agent-architecture",
        "ai-agent-complete-guide",
        "genai-agents-deep-dive",
        "genai-agents-tutorial"
      ]
    },
    {
      title: "\u6838\u5FC3\u80FD\u529B\u6A21\u5757 (Core Capabilities)",
      ids: [
        "ai-agent-planning",
        "ai-agent-tool-use",
        "ai-agent-memory-implementation",
        "agent-memory-system",
        "ai-agent-rag-integration"
      ]
    },
    {
      title: "\u6846\u67B6\u5B9E\u6218 (Frameworks)",
      ids: [
        "ai-agent-langchain-tutorial",
        "ai-agent-autogen-tutorial",
        "multi-agent-systems",
        "multi-agent-planning",
        "openai-assistants-api-vs-custom-agent"
      ]
    },
    {
      title: "\u4F01\u4E1A\u7EA7\u5E94\u7528\u6848\u4F8B (Enterprise Scenarios)",
      ids: [
        "how-to-build-an-ai-expense-approval-agent",
        "how-to-build-an-ai-vendor-management-agent",
        "ai-email-routing-agent",
        "how-to-build-ai-contract-review-agent",
        "ai-customer-support-vs-ai-ticket-routing-agent",
        "how-to-build-ai-research-agent"
      ]
    }
  ];
  const allPosts = await getCollection(collection, ({ data }) => !data.draft && data.lang !== "en");
  const groupedPosts = agentPaths.map((path) => {
    return {
      ...path,
      articles: allPosts.filter((post) => path.ids.includes(post.id.replace(/\.(md|mdx)$/, "")))
    };
  });
  const categorizedIds = agentPaths.flatMap((p) => p.ids);
  const otherPosts = allPosts.filter(
    (post) => (post.data.hub === "agent" || post.data.category === "Dev") && !categorizedIds.includes(post.id.replace(/\.(md|mdx)$/, ""))
  ).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 6);
  const pageTitle = `XBSTACK AI Agent \u5B9E\u6218\u6307\u5357\uFF1A\u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001\u8BB0\u5FC6\u4E0E\u751F\u4EA7\u5316 | ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "\u9762\u5411\u5F00\u53D1\u8005\u7684 AI Agent \u5B9E\u6218\u8DEF\u7EBF\uFF0C\u7CFB\u7EDF\u6574\u7406 Agent \u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001\u8BB0\u5FC6\u3001\u89C4\u5212\u3001\u8BC4\u4F30\u3001\u53EF\u89C2\u6D4B\u6027\u4E0E\u751F\u4EA7\u90E8\u7F72\uFF0C\u5E2E\u52A9\u4ECE\u539F\u578B\u8D70\u5411\u53EF\u7EF4\u62A4\u7684\u667A\u80FD\u4F53\u7CFB\u7EDF\u3002";
  const keywords = "AI Agent, Agent \u67B6\u6784, \u5DE5\u5177\u8C03\u7528, \u8BB0\u5FC6\u7CFB\u7EDF, \u751F\u4EA7\u90E8\u7F72, \u591A\u667A\u80FD\u4F53, \u4E1A\u52A1\u573A\u666F, XBSTACK";
  const productionAgentBlocks = [
    { title: "Planner", desc: "\u628A\u4E1A\u52A1\u76EE\u6807\u62C6\u6210\u53EF\u6267\u884C\u6B65\u9AA4\uFF0C\u5E76\u5728\u5DE5\u5177\u5931\u8D25\u3001\u4E0A\u4E0B\u6587\u7F3A\u5931\u6216\u6743\u9650\u4E0D\u8DB3\u65F6\u91CD\u65B0\u89C4\u5212\u3002\u6CA1\u6709 Planner \u7684 Agent \u53EA\u662F\u5E26\u5DE5\u5177\u7684\u804A\u5929\u673A\u5668\u4EBA\u3002" },
    { title: "Tool Boundary", desc: "\u5DE5\u5177\u8C03\u7528\u5FC5\u987B\u6709\u53C2\u6570\u6821\u9A8C\u3001\u5E42\u7B49\u8BBE\u8BA1\u3001\u8D85\u65F6\u63A7\u5236\u548C\u6743\u9650\u8FB9\u754C\u3002\u751F\u4EA7\u7CFB\u7EDF\u4E0D\u5141\u8BB8\u6A21\u578B\u81EA\u7531\u62FC\u63A5\u5371\u9669\u8F93\u5165\u3002" },
    { title: "Memory", desc: "\u77ED\u671F\u8BB0\u5FC6\u670D\u52A1\u4E8E\u5F53\u524D\u4EFB\u52A1\uFF0C\u957F\u671F\u8BB0\u5FC6\u670D\u52A1\u4E8E\u7528\u6237\u504F\u597D\u3001\u5386\u53F2\u51B3\u7B56\u548C\u4E1A\u52A1\u4E0A\u4E0B\u6587\u3002\u4E8C\u8005\u9700\u8981\u53EF\u5220\u9664\u3001\u53EF\u5BA1\u8BA1\u3001\u53EF\u9694\u79BB\u3002" },
    { title: "Evaluator", desc: "Agent \u4E0D\u80FD\u53EA\u9760\u201C\u770B\u8D77\u6765\u56DE\u7B54\u4E0D\u9519\u201D\u4E0A\u7EBF\uFF0C\u5FC5\u987B\u7528\u6D4B\u8BD5\u96C6\u3001\u56DE\u5F52\u6837\u4F8B\u3001\u4EBA\u5DE5\u62BD\u68C0\u548C LLM-as-a-judge \u7EC4\u5408\u8BC4\u4F30\u3002" },
    { title: "Human Gate", desc: "\u51E1\u662F\u6D89\u53CA\u5199\u5E93\u3001\u6263\u8D39\u3001\u53D1\u6D88\u606F\u3001\u5916\u90E8\u53D1\u5E03\u548C\u6743\u9650\u53D8\u66F4\u7684\u52A8\u4F5C\uFF0C\u90FD\u5E94\u8BE5\u6709\u4EBA\u5DE5\u786E\u8BA4\u6216\u7B56\u7565\u5BA1\u6279\u3002" },
    { title: "Observability", desc: "Trace\u3001Tool Call\u3001\u72B6\u6001\u53D8\u5316\u548C\u9519\u8BEF\u94FE\u8DEF\u5FC5\u987B\u53EF\u8FFD\u8E2A\uFF0C\u5426\u5219 Agent \u7EBF\u4E0A\u5931\u8D25\u65F6\u5F88\u96BE\u590D\u76D8\u3002" }
  ];
  const agentFaqs = [
    { question: "AI Agent \u548C AI Assistant \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "AI Assistant \u504F\u5411\u95EE\u7B54\u548C\u8F85\u52A9\u751F\u6210\uFF0CAI Agent \u9700\u8981\u56F4\u7ED5\u76EE\u6807\u4E3B\u52A8\u89C4\u5212\u6B65\u9AA4\u3001\u9009\u62E9\u5DE5\u5177\u3001\u8BFB\u53D6\u6216\u5199\u5165\u5916\u90E8\u7CFB\u7EDF\uFF0C\u5E76\u6839\u636E\u6267\u884C\u7ED3\u679C\u8C03\u6574\u540E\u7EED\u52A8\u4F5C\u3002\u751F\u4EA7\u7EA7 Agent \u7684\u91CD\u70B9\u4E0D\u662F\u4F1A\u804A\u5929\uFF0C\u800C\u662F\u80FD\u5728\u8FB9\u754C\u5185\u53EF\u9760\u6267\u884C\u4EFB\u52A1\u3002" },
    { question: "\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u7528 Agent\uFF0C\u800C\u4E0D\u662F Workflow\uFF1F", answer: "\u5F53\u4EFB\u52A1\u8DEF\u5F84\u4E0D\u56FA\u5B9A\u3001\u9700\u8981\u6A21\u578B\u6839\u636E\u4E2D\u95F4\u7ED3\u679C\u51B3\u5B9A\u4E0B\u4E00\u6B65\u3001\u9700\u8981\u8C03\u7528\u591A\u4E2A\u5DE5\u5177\u5E76\u5904\u7406\u975E\u7ED3\u6784\u5316\u8F93\u5165\u65F6\uFF0C\u9002\u5408 Agent\u3002\u5982\u679C\u6B65\u9AA4\u56FA\u5B9A\u3001\u5206\u652F\u660E\u786E\u3001\u5931\u8D25\u53EA\u9700\u8981\u91CD\u8BD5\uFF0CWorkflow \u901A\u5E38\u66F4\u7A33\u5B9A\u3002" },
    { question: "AI Agent \u4E3A\u4EC0\u4E48\u5BB9\u6613\u5931\u63A7\uFF1F", answer: "\u5931\u63A7\u901A\u5E38\u6765\u81EA\u4E09\u4E2A\u5730\u65B9\uFF1A\u5DE5\u5177\u6743\u9650\u8FC7\u5927\u3001\u72B6\u6001\u4E0D\u53EF\u8FFD\u8E2A\u3001\u8BC4\u4F30\u4F53\u7CFB\u7F3A\u5931\u3002Agent \u4E00\u65E6\u80FD\u5199\u5E93\u3001\u53D1\u8BF7\u6C42\u6216\u4FEE\u6539\u5916\u90E8\u7CFB\u7EDF\uFF0C\u5C31\u5FC5\u987B\u628A\u6743\u9650\u3001\u65E5\u5FD7\u3001\u56DE\u6EDA\u548C\u4EBA\u5DE5\u5BA1\u6279\u4F5C\u4E3A\u9ED8\u8BA4\u67B6\u6784\u3002" },
    { question: "\u751F\u4EA7\u73AF\u5883 Agent \u5FC5\u987B\u6709\u54EA\u4E9B\u4FDD\u62A4\uFF1F", answer: "\u81F3\u5C11\u9700\u8981\u5DE5\u5177\u53C2\u6570\u6821\u9A8C\u3001\u6743\u9650\u9694\u79BB\u3001\u8C03\u7528\u8D85\u65F6\u3001\u5E42\u7B49\u91CD\u8BD5\u3001\u5BA1\u8BA1\u65E5\u5FD7\u3001\u654F\u611F\u52A8\u4F5C\u5BA1\u6279\u3001\u72B6\u6001\u9694\u79BB\u3001\u5F02\u5E38\u544A\u8B66\u548C\u53EF\u56DE\u653E Trace\u3002\u7F3A\u5C11\u8FD9\u4E9B\u4FDD\u62A4\u7684 Agent \u4E0D\u9002\u5408\u76F4\u63A5\u63A5\u5165\u771F\u5B9E\u4E1A\u52A1\u3002" },
    { question: "Agent \u5982\u4F55\u505A\u8BB0\u5FC6\u3001\u8BC4\u4F30\u548C\u53EF\u89C2\u6D4B\u6027\uFF1F", answer: "\u8BB0\u5FC6\u8981\u533A\u5206\u77ED\u671F\u4E0A\u4E0B\u6587\u548C\u957F\u671F\u753B\u50CF\uFF0C\u8BC4\u4F30\u8981\u8986\u76D6\u4EFB\u52A1\u6210\u529F\u7387\u3001\u5DE5\u5177\u8C03\u7528\u6B63\u786E\u7387\u548C\u5B89\u5168\u8FB9\u754C\uFF0C\u53EF\u89C2\u6D4B\u6027\u8981\u8BB0\u5F55\u6BCF\u6B21\u89C4\u5212\u3001\u5DE5\u5177\u8F93\u5165\u8F93\u51FA\u3001\u72B6\u6001\u53D8\u66F4\u548C\u6700\u7EC8\u7ED3\u679C\u3002" }
  ];
  const agentCoreArticles = [
    { title: "AI Agent \u5168\u6808\u6307\u5357 2026", href: "/ai/ai-agent-complete-guide/" },
    { title: "AI Agent \u67B6\u6784\u6DF1\u5256", href: "/ai/ai-agent-architecture/" },
    { title: "AI Agent \u5DE5\u5177\u8C03\u7528", href: "/ai/ai-agent-tool-use/" },
    { title: "AI Agent \u751F\u4EA7\u5316\u6CBB\u7406", href: "/ai/ai-agent-production-governance/" },
    { title: "Agent \u79D1\u5B66\u8BC4\u4F30\u6307\u5357", href: "/ai/ai-agent-evaluation-guide/" }
  ];
  const agentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": pageTitle,
        "url": "https://www.xbstack.com/ai/agent/",
        "description": pageDescription,
        "inLanguage": "zh-CN",
        "about": ["AI Agent", "Agent Architecture", "Tool Use", "Agent Memory", "Multi-Agent Systems", "Production AI Agents"].map((name) => ({ "@type": "Thing", name })),
        "isPartOf": { "@type": "WebSite", "name": "XBSTACK", "url": "https://www.xbstack.com/" }
      },
      {
        "@type": "ItemList",
        "name": "AI Agent core articles",
        "itemListElement": agentCoreArticles.map((article, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": article.title,
          "url": `https://www.xbstack.com${article.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": agentFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
  const geoConfig = {
    geo_summary: "XBSTACK AI Agent \u680F\u76EE\u662F AI Agent \u5185\u5BB9\u7684\u5B66\u4E60\u8DEF\u5F84\u5165\u53E3\uFF0C\u8986\u76D6 Agent \u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001\u8BB0\u5FC6\u7CFB\u7EDF\u3001\u4EFB\u52A1\u89C4\u5212\u3001RAG\u3001\u591A\u667A\u80FD\u4F53\u3001Evaluation\u3001Observability\u3001Deployment\u3001Human-in-the-loop \u548C\u4F01\u4E1A\u5E94\u7528\u4E13\u9898\u3002\u8BE5\u9875\u9762\u5E94\u628A\u6587\u7AE0\u6309\u57FA\u7840\u5C42\u3001\u5DE5\u5177\u5C42\u3001\u8BB0\u5FC6\u72B6\u6001\u5C42\u3001Planning / Workflow\u3001RAG\u3001\u591A\u667A\u80FD\u4F53\u3001\u751F\u4EA7\u5316\u6CBB\u7406\u548C\u4F01\u4E1A\u5E94\u7528\u4E13\u9898\u7EC4\u7EC7\uFF0C\u800C\u4E0D\u662F\u6309\u53D1\u5E03\u65F6\u95F4\u5E73\u94FA\u3002",
    geo_questions: [
      "Where should I start learning AI Agent on XBSTACK?",
      "What is the best AI Agent learning path?",
      "How do AI Agents use tools?",
      "How do AI Agents manage memory and state?",
      "How do you evaluate and deploy production AI Agents?",
      "What enterprise AI Agent examples does XBSTACK cover?"
    ],
    geo_entities: [
      "XBSTACK",
      "AI Agent",
      "Production AI Agents",
      "Agent Architecture",
      "Tool Use",
      "Agent Memory",
      "Agent Planning",
      "RAG",
      "Multi-Agent Systems",
      "Agent Evaluation",
      "Agent Observability",
      "Agent Deployment",
      "Human-in-the-loop"
    ]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": agentSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden text-left">  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6">  <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-emerald-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai/" class="hover:text-emerald-500 transition-colors">AI Hub</a> <span class="opacity-30">/</span> <span class="text-emerald-500">${displayTitle}</span> </nav>  <header class="mb-20 space-y-6"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-500/20 uppercase tracking-[0.3em]">
Cognitive Agentic Blueprint / 智能体认知蓝图
</div> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
AI / <span class="text-emerald-500">AGENTS.</span> </h1> <p class="max-w-3xl text-lg font-bold text-slate-500 dark:text-slate-400 italic">
从工具调用、记忆、任务规划到多智能体协作，先把 Agent 的系统边界讲清楚，再进入可落地的工程实现。
</p> </header> <section class="mb-16 p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">相关专题</div> <div class="grid grid-cols-2 md:grid-cols-5 gap-3"> <a href="/ai/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors">AI Hub</a> <a href="/ai/agent/" class="px-4 py-3 rounded-2xl bg-emerald-500/10 text-[10px] font-black uppercase tracking-widest text-emerald-500">Agent</a> <a href="/ai/langgraph/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">LangGraph</a> <a href="/ai/mcp/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">MCP</a> <a href="/ai/workflow/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">Workflow</a> </div> </section>  <section class="mb-20"> <h2 class="text-3xl font-black italic text-slate-900 dark:text-white mb-6">适合解决的问题</h2> <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300"> <li>客户运营智能体：自动工单分配、客户反馈分析、CRM 同步。</li> <li>财务自动化智能体：发票 OCR、费用审批、供应商合规审查。</li> <li>文档理解智能体：企业报告检索、合同比对、知识库问答。</li> <li>开发者工程智能体：代码审查、Issue 自动分配、部署回滚。</li> </ul> </section> <section id="production-agent" class="mb-24 p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">什么是生产级 AI Agent？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">生产级 Agent 不是把大模型接上几个工具，而是在可控边界内让模型完成任务。它必须能被观测、能被评估、能被暂停、能被追责，也必须知道哪些动作不能自动执行。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${productionAgentBlocks.map((block) => renderTemplate`<article class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-500 mb-3">${block.title}</div> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${block.desc}</p> </article>`)} </div> </section>  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"> <section class="space-y-6 p-10 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white">Agent vs Workflow</h2> <div class="text-sm font-medium text-slate-500 dark:text-slate-400 space-y-4 leading-relaxed"> <p>Workflow 更适合确定步骤和固定分支；Agent 更适合目标明确但路径不完全固定的任务，需要模型在执行过程中选择工具、拆分步骤和处理异常。</p> <p>Agent 的核心在于它能够根据任务目标，自主决定使用哪些工具 (Tool Calling)、如何规划步骤 (Planning) 以及如何从失败中反思 (Reflection)。</p> </div> </section> <section class="space-y-6 p-10 rounded-[40px] bg-emerald-500/5 border border-emerald-500/10"> <h2 class="text-2xl font-black italic uppercase text-emerald-500">Agent 核心四要素</h2> <div class="grid grid-cols-2 gap-4"> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-500/20"> <div class="text-[10px] font-black uppercase text-emerald-600">Planning</div> <p class="text-[9px] font-bold text-slate-400">任务拆解与推理</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-500/20"> <div class="text-[10px] font-black uppercase text-emerald-600">Memory</div> <p class="text-[9px] font-bold text-slate-400">短期上下文与长期经验</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-500/20"> <div class="text-[10px] font-black uppercase text-emerald-600">Tools</div> <p class="text-[9px] font-bold text-slate-400">外部 API 与环境交互</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-500/20"> <div class="text-[10px] font-black uppercase text-emerald-600">Reflection</div> <p class="text-[9px] font-bold text-slate-400">自我纠错与迭代</p> </div> </div> </section> </div>  <section id="must-read" class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 mb-24"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
⚡ 推荐起点
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/ai/ai-agent-complete-guide/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-emerald-500 transition-colors"> <div class="text-[9px] font-black text-emerald-500 mb-2 font-mono">总览</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">AI Agent 全栈指南 2026 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从概念架构、工具调用、长短期记忆、RAG 向量检索到物理部署的完整系统图谱。</p> </a> <a href="/ai/ai-agent-architecture/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-emerald-500 transition-colors"> <div class="text-[9px] font-black text-emerald-500 mb-2 font-mono">架构设计</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">AI Agent 架构深剖 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">解构目标设定、记忆提取机制、控制流规划以及可观测度量的系统组件组合方法。</p> </a> <a href="/ai/ai-agent-production-governance/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-emerald-500 transition-colors"> <div class="text-[9px] font-black text-emerald-500 mb-2 font-mono">生产治理</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">AI Agent 生产化治理 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">解决 Demo 上线后的高频故障：系统评估基准、Trace 可观测性审计与人工审批机制。</p> </a> <a href="/ai/ai-agent-tool-use/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-emerald-500 transition-colors"> <div class="text-[9px] font-black text-emerald-500 mb-2 font-mono">STEP 04 / TOOLING</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">AI Agent 工具调用 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">工具描述注册规范、输入 JSON-Schema 严格校验、网络调用幂等与重试隔离实践。</p> </a> <a href="/ai/ai-agent-evaluation-guide/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-emerald-500 transition-colors"> <div class="text-[9px] font-black text-emerald-500 mb-2 font-mono">评估方法</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">Agent 科学评估指南 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">放弃拍脑袋的心智评估，用测试数据集、LLM-as-a-judge 与回归测试保障状态一致性。</p> </a> </div> </section> <section id="faq" class="mb-24 p-10 md:p-12 rounded-[50px] bg-emerald-500/5 border border-emerald-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">AI Agent 常见问题</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">这里回答的不是概念定义，而是 Agent 真正进入工程系统时会影响架构选择的问题。</p> </div> <div class="space-y-4"> ${agentFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section>  <div class="space-y-24 mb-32 relative z-30 pt-16 border-t border-slate-200 dark:border-white/10"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-8 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-emerald-600"></span> 按能力分类
</h2> ${groupedPosts.map((group) => group.articles.length > 0 && renderTemplate`<section class="space-y-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> ${group.title} </h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${group.articles.map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl relative z-10 cursor-pointer animate-fadeUp"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">AGENTIC</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 group-hover:text-emerald-500 transition-colors leading-snug"> ${post.data.title} </h4> <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 opacity-60 group-hover:opacity-100 transition-all">
阅读全文 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> </section>`)}  ${otherPosts.length > 0 && renderTemplate`<section class="space-y-8 pt-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> 更多实战记录 / MORE LOGS
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${otherPosts.map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")} class="group p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-all shadow-sm block animate-fadeUp text-left"> <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors line-clamp-2 m-0 leading-normal"> ${post.data.title} </h4> </a>`)} </div> </section>`} </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/agent.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/agent.astro";
const $$url = "/ai/agent/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
