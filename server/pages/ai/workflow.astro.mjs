import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_DpzxR7uC.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
import { $ as $$GeoAnchor } from '../../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Workflow = createComponent(async ($$result, $$props, $$slots) => {
  const displayTitle = "AI Workflow \u4E13\u9898\u6307\u5357";
  const collection = "ai";
  const workflowPaths = [
    {
      title: "0. n8n AI Starter Kit (Start Here)",
      ids: [
        "n8n-ai-starter-kit"
      ]
    },
    {
      title: "1. \u81EA\u6258\u7BA1\u4E0E\u90E8\u7F72 (Self-Hosting)",
      ids: [
        "self-hosted-n8n-ai-workflows",
        "n8n-webhook-production-hardening",
        "n8n-ai-workflow-error-handling",
        "n8n-queue-mode-redis-worker"
      ]
    },
    {
      title: "2. n8n \u5B9E\u6218\u6848\u4F8B (n8n Case Studies)",
      ids: [
        "n8n-ai-gmail-summarizer-openai-google-sheets",
        "n8n-ai-notion-knowledge-base-agent",
        "n8n-ai-slack-daily-digest-bot"
      ]
    },
    {
      title: "3. \u5DE5\u5177\u9009\u578B\u5BF9\u6BD4 (Comparison)",
      ids: [
        "zapier-vs-make-vs-n8n-for-ai-workflow-automation",
        "n8n-vs-make-ai-workflow-automation",
        "zapier-vs-ai-agents-2026",
        "crewai-vs-autogen-for-workflow-automation"
      ]
    },
    {
      title: "4. \u4E1A\u52A1\u573A\u666F\u6DF1\u5EA6\u5B9E\u6218 (Scenarios)",
      ids: [
        "ai-agent-seo-content-workflow",
        "ai-sales-assistant-vs-lead-scoring",
        "how-to-build-ai-lead-scoring-agent"
      ]
    }
  ];
  const allPosts = await getCollection(collection, ({ data }) => !data.draft && data.lang !== "en");
  const groupedPosts = workflowPaths.map((path) => {
    return {
      ...path,
      articles: allPosts.filter((post) => path.ids.includes(post.id.replace(/\.(md|mdx)$/, "")))
    };
  });
  const categorizedIds = workflowPaths.flatMap((p) => p.ids);
  const otherPosts = allPosts.filter(
    (post) => (post.data.hub === "workflow" || post.id.includes("n8n") || post.id.includes("workflow")) && !categorizedIds.includes(post.id.replace(/\.(md|mdx)$/, ""))
  ).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 6);
  const pageTitle = `${displayTitle} | n8n AI Starter Kit\u3001\u81EA\u6258\u7BA1\u4E0E\u751F\u4EA7\u7EA7\u4E1A\u52A1\u6D41\u7A0B\u81EA\u52A8\u5316 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "XBSTACK AI Workflow Hub \u662F n8n AI Starter Kit\u3001\u81EA\u6258\u7BA1 n8n\u3001Queue Mode\u3001Webhook Hardening\u3001\u9519\u8BEF\u91CD\u8BD5\u3001\u6210\u672C\u76D1\u63A7\u548C Zapier vs Make vs n8n \u9009\u578B\u7684\u751F\u4EA7\u5316\u8DEF\u7EBF\u56FE\u3002";
  const keywords = "AI Workflow, n8n AI Starter Kit, n8n ai workflow, n8n \u81EA\u6258\u7BA1, n8n Queue Mode, n8n Redis, Webhook 502, Webhook Hardening, Credential \u8FC1\u79FB, \u5DE5\u4F5C\u6D41\u81EA\u52A8\u5316, AI \u81EA\u52A8\u5316, Zapier vs Make vs n8n, \u6210\u672C\u76D1\u63A7";
  const workflowArchitecture = [
    { title: "n8n \u4E3B\u670D\u52A1", desc: "\u8D1F\u8D23\u7F16\u8F91\u5668\u3001\u6267\u884C\u5165\u53E3\u3001Webhook \u6CE8\u518C\u548C\u4EFB\u52A1\u8C03\u5EA6\uFF0C\u751F\u4EA7\u73AF\u5883\u5E94\u907F\u514D\u628A\u6240\u6709\u6267\u884C\u538B\u529B\u90FD\u538B\u5728\u4E3B\u8FDB\u7A0B\u3002" },
    { title: "Postgres", desc: "\u4FDD\u5B58 workflow\u3001credential\u3001\u6267\u884C\u8BB0\u5F55\u548C\u7CFB\u7EDF\u5143\u6570\u636E\uFF0C\u6BD4 SQLite \u66F4\u9002\u5408\u957F\u671F\u8FD0\u884C\u548C\u5907\u4EFD\u6062\u590D\u3002" },
    { title: "Redis Queue", desc: "\u628A\u6267\u884C\u4EFB\u52A1\u4ECE\u4E3B\u670D\u52A1\u62C6\u51FA\u6765\uFF0C\u914D\u5408 worker \u6D88\u5316\u9AD8\u5CF0\u6D41\u91CF\uFF0C\u964D\u4F4E Webhook \u963B\u585E\u548C\u8FDB\u7A0B\u5D29\u6E83\u98CE\u9669\u3002" },
    { title: "Worker", desc: "\u4E13\u95E8\u6267\u884C\u8017\u65F6\u4EFB\u52A1\u3001\u5916\u90E8 API \u8C03\u7528\u548C AI \u63A8\u7406\u6B65\u9AA4\uFF0C\u4FBF\u4E8E\u6A2A\u5411\u6269\u5BB9\u548C\u9694\u79BB\u5931\u8D25\u3002" },
    { title: "Webhook Gateway", desc: "\u627F\u63A5\u5916\u90E8\u89E6\u53D1\u6D41\u91CF\uFF0C\u9700\u8981\u5173\u6CE8 404\u3001502\u3001\u53CD\u5411\u4EE3\u7406\u3001URL \u914D\u7F6E\u548C\u8D85\u65F6\u3002" },
    { title: "Secrets & Backup", desc: "N8N_ENCRYPTION_KEY\u3001\u51ED\u636E\u5907\u4EFD\u3001\u6570\u636E\u5E93\u5FEB\u7167\u548C\u7248\u672C\u8FC1\u79FB\u5FC5\u987B\u8FDB\u5165\u53D1\u5E03\u6D41\u7A0B\uFF0C\u800C\u4E0D\u662F\u51FA\u6545\u969C\u540E\u4E34\u65F6\u8865\u6551\u3002" }
  ];
  const workflowTroubleshooting = [
    { title: "Webhook 404 / 502", href: "/ai/n8n-webhook-production-hardening/" },
    { title: "Queue Mode + Redis Worker", href: "/ai/n8n-queue-mode-redis-worker/" },
    { title: "\u81EA\u6258\u7BA1 n8n \u90E8\u7F72", href: "/ai/self-hosted-n8n-ai-workflows/" },
    { title: "\u9519\u8BEF\u5904\u7406\u3001\u91CD\u8BD5\u4E0E\u6210\u672C\u76D1\u63A7", href: "/ai/n8n-ai-workflow-error-handling/" },
    { title: "n8n vs Make \u9009\u578B", href: "/ai/n8n-vs-make-ai-workflow-automation/" }
  ];
  const workflowFaqs = [
    { question: "n8n \u9002\u5408\u4EC0\u4E48\u573A\u666F\uFF1F", answer: "n8n \u9002\u5408\u6B65\u9AA4\u660E\u786E\u3001\u89E6\u53D1\u6761\u4EF6\u7A33\u5B9A\u3001\u9700\u8981\u8FDE\u63A5\u591A\u4E2A SaaS \u6216\u5185\u90E8\u63A5\u53E3\u7684\u81EA\u52A8\u5316\u6D41\u7A0B\uFF0C\u4F8B\u5982\u90AE\u4EF6\u6458\u8981\u3001Slack \u65E5\u62A5\u3001CRM \u540C\u6B65\u3001\u8868\u683C\u5199\u5165\u548C\u5BA1\u6279\u901A\u77E5\u3002" },
    { question: "Workflow \u548C Agent \u600E\u4E48\u9009\uFF1F", answer: "Workflow \u9002\u5408\u786E\u5B9A\u6027\u6D41\u7A0B\uFF0CAgent \u9002\u5408\u4E0D\u786E\u5B9A\u4EFB\u52A1\u3002\u7A33\u5B9A\u4E1A\u52A1\u7CFB\u7EDF\u901A\u5E38\u5148\u7528 Workflow \u56FA\u5316\u89E6\u53D1\u3001\u6743\u9650\u548C\u5931\u8D25\u91CD\u8BD5\uFF0C\u518D\u628A\u9700\u8981\u6A21\u578B\u5224\u65AD\u7684\u73AF\u8282\u4EA4\u7ED9 Agent\u3002" },
    { question: "\u81EA\u6258\u7BA1 n8n \u751F\u4EA7\u73AF\u5883\u9700\u8981\u54EA\u4E9B\u7EC4\u4EF6\uFF1F", answer: "\u81F3\u5C11\u9700\u8981 n8n \u4E3B\u670D\u52A1\u3001Postgres\u3001Redis Queue\u3001Worker\u3001\u53CD\u5411\u4EE3\u7406\u3001\u57DF\u540D\u3001\u5907\u4EFD\u3001\u65E5\u5FD7\u548C\u51ED\u636E\u5BC6\u94A5\u7BA1\u7406\u3002\u5355\u5BB9\u5668 SQLite \u66F4\u9002\u5408\u8BD5\u9A8C\uFF0C\u4E0D\u9002\u5408\u957F\u671F\u627F\u8F7D\u4E1A\u52A1\u3002" },
    { question: "Webhook 404 / 502 \u600E\u4E48\u6392\u67E5\uFF1F", answer: "\u4F18\u5148\u68C0\u67E5 WEBHOOK_URL\u3001\u53CD\u5411\u4EE3\u7406\u8DEF\u5F84\u3001HTTPS \u7EC8\u6B62\u3001\u5BB9\u5668\u7AEF\u53E3\u3001\u961F\u5217 worker \u72B6\u6001\u548C\u6267\u884C\u8D85\u65F6\u3002\u5F88\u591A 502 \u4E0D\u662F n8n \u672C\u8EAB\u574F\u4E86\uFF0C\u800C\u662F\u4EE3\u7406\u6216\u6267\u884C\u8D85\u65F6\u6CA1\u6709\u9694\u79BB\u3002" },
    { question: "Queue Mode \u548C Redis \u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F", answer: "Queue Mode \u628A\u4EFB\u52A1\u653E\u5165 Redis \u961F\u5217\uFF0C\u7531 worker \u5F02\u6B65\u6267\u884C\u3002\u5B83\u80FD\u51CF\u5C11\u4E3B\u670D\u52A1\u963B\u585E\uFF0C\u652F\u6301\u6A2A\u5411\u6269\u5BB9\uFF0C\u4E5F\u80FD\u8BA9\u8017\u65F6 AI \u8C03\u7528\u548C\u5916\u90E8 API \u8C03\u7528\u66F4\u7A33\u5B9A\u3002" },
    { question: "Credential \u89E3\u5BC6\u5931\u8D25\u600E\u4E48\u5904\u7406\uFF1F", answer: "\u5173\u952E\u662F N8N_ENCRYPTION_KEY \u5FC5\u987B\u7A33\u5B9A\u4FDD\u5B58\u3002\u8FC1\u79FB\u5BB9\u5668\u3001\u6570\u636E\u5E93\u6216\u5907\u4EFD\u6062\u590D\u65F6\uFF0C\u5982\u679C\u5BC6\u94A5\u4E22\u5931\uFF0C\u539F\u6709 credential \u53EF\u80FD\u65E0\u6CD5\u89E3\u5BC6\uFF0C\u53EA\u80FD\u91CD\u65B0\u914D\u7F6E\u3002" }
  ];
  const workflowCoreArticles = [
    { title: "n8n AI Starter Kit", href: "/ai/n8n-ai-starter-kit/" },
    { title: "n8n Gmail \u90AE\u4EF6\u6458\u8981\u81EA\u52A8\u5316", href: "/ai/n8n-ai-gmail-summarizer-openai-google-sheets/" },
    { title: "Self-hosted n8n AI Workflow", href: "/ai/self-hosted-n8n-ai-workflows/" },
    { title: "n8n Queue Mode + Redis", href: "/ai/n8n-queue-mode-redis-worker/" },
    { title: "n8n Webhook \u751F\u4EA7\u5316\u6392\u969C", href: "/ai/n8n-webhook-production-hardening/" },
    { title: "n8n \u9519\u8BEF\u5904\u7406\u4E0E\u6210\u672C\u76D1\u63A7", href: "/ai/n8n-ai-workflow-error-handling/" },
    { title: "Zapier vs Make vs n8n", href: "/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/" }
  ];
  const workflowSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": pageTitle,
        "url": "https://www.xbstack.com/ai/workflow/",
        "description": pageDescription,
        "inLanguage": "zh-CN",
        "about": ["AI Workflow", "n8n AI Starter Kit", "n8n", "Workflow Automation", "Queue Mode", "Webhook Hardening", "Zapier vs Make vs n8n"].map((name) => ({ "@type": "Thing", name })),
        "isPartOf": { "@type": "WebSite", "name": "XBSTACK", "url": "https://www.xbstack.com/" }
      },
      {
        "@type": "ItemList",
        "name": "AI Workflow core articles",
        "itemListElement": workflowCoreArticles.map((article, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": article.title,
          "url": `https://www.xbstack.com${article.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": workflowFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
  const geoConfig = {
    geo_summary: "XBSTACK AI Workflow \u4E13\u9898\u7CFB\u7EDF\u6574\u7406\u57FA\u4E8E n8n \u4E0E Make \u7684\u751F\u4EA7\u7EA7\u5DE5\u4F5C\u6D41\u81EA\u52A8\u5316\uFF0C\u8986\u76D6\u81EA\u6258\u7BA1 n8n \u90E8\u7F72\u3001Redis \u961F\u5217\u6A21\u5F0F\u3001Webhook \u8D85\u65F6 502/404 \u5BB9\u9519\u3001Credential \u7269\u7406\u51ED\u8BC1\u52A0\u5BC6\u8FC1\u79FB\u4EE5\u53CA\u6D41\u7A0B\u8FD0\u884C\u6210\u672C\u4E0E API \u76D1\u63A7\u3002\u8BE5\u9875\u9762\u5E94\u6309\u7167\u81EA\u6258\u7BA1\u3001\u5B9E\u6218\u6848\u4F8B\u3001\u9009\u578B\u5BF9\u6BD4\u3001\u4E1A\u52A1\u573A\u666F\u548C\u6392\u969C\u76EE\u5F55\u7EC4\u7EC7\u5185\u5BB9\u3002",
    geo_questions: [
      "Where should I start learning AI Workflow on XBSTACK?",
      "How do I self-host n8n for AI workflows?",
      "How does n8n queue mode with Redis work?",
      "Why does self-hosted n8n throw decryption errors on credentials?",
      "How do you resolve Webhook 502 bad gateway in n8n?",
      "What is the difference between n8n, Make and Zapier?",
      "What are some real-world AI workflow examples?"
    ],
    geo_entities: [
      "XBSTACK",
      "AI Workflow",
      "n8n",
      "n8n \u81EA\u6258\u7BA1",
      "n8n Queue Mode",
      "n8n Redis",
      "Webhook 502",
      "Credential \u8FC1\u79FB",
      "Zapier vs Make vs n8n",
      "\u6210\u672C\u76D1\u63A7"
    ]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": workflowSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden text-left">  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6">  <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai/" class="hover:text-sky-500 transition-colors">AI Hub</a> <span class="opacity-30">/</span> <span class="text-sky-500">${displayTitle}</span> </nav>  <header class="mb-20 space-y-6"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black border border-sky-500/20 uppercase tracking-[0.3em]">
Automation Orchestration Blueprint / 自动化流程蓝图
</div> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter leading-none">
AI / <span class="text-sky-500">WORKFLOW.</span> </h1> <p class="max-w-3xl text-lg font-bold text-slate-500 dark:text-slate-400 italic">
AI Workflow 适合把明确流程自动化：触发、调用接口、处理数据、写入系统，并在失败时保留重试、告警和人工兜底。
</p> </header> <section class="mb-16 p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">相关专题</div> <div class="grid grid-cols-2 md:grid-cols-5 gap-3"> <a href="/ai/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">AI Hub</a> <a href="/ai/agent/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors">Agent</a> <a href="/ai/langgraph/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">LangGraph</a> <a href="/ai/mcp/" class="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">MCP</a> <a href="/ai/workflow/" class="px-4 py-3 rounded-2xl bg-sky-500/10 text-[10px] font-black uppercase tracking-widest text-sky-500">Workflow</a> </div> </section> <section id="workflow-fit" class="mb-24 grid grid-cols-1 md:grid-cols-2 gap-6"> <article class="p-8 rounded-[36px] bg-emerald-500/5 border border-emerald-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400 mb-4">适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">你要让自动化长期稳定运行</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 自托管 n8n 已经跑起来，但遇到 Webhook、队列、凭据、备份和成本问题。</li> <li>· 需要把 Queue Mode、Redis、Worker、Postgres、反向代理拆成生产链路。</li> <li>· 需要从 Gmail、Slack、Notion 等案例回到可复用的自动化架构。</li> </ul> </article> <article class="p-8 rounded-[36px] bg-rose-500/5 border border-rose-500/15"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-rose-600 dark:text-rose-400 mb-4">不适合人群</div> <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-5">只想看拖节点教程，这里不是重点</h2> <ul class="space-y-3 text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <li>· 只需要临时自动化，不关心部署、备份和故障恢复。</li> <li>· 没有真实 Webhook 流量、队列执行或凭据迁移问题。</li> <li>· 已经看过泛 n8n 部署文；本站后续重点改旧文和补证据。</li> </ul> </article> </section> <section id="workflow-architecture" class="mb-24 p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">生产级 AI Workflow 架构</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">n8n 不是只要跑起来就算生产可用。真正稳定的工作流系统需要把执行、存储、队列、Webhook、凭据和备份拆开设计。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${workflowArchitecture.map((block) => renderTemplate`<article class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-sky-500 mb-3">${block.title}</div> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${block.desc}</p> </article>`)} </div> </section> <section id="troubleshooting" class="mb-24 p-10 md:p-12 rounded-[50px] bg-sky-500/5 border border-sky-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">高频排障入口</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">自托管工作流最常见的问题不是节点不会拖，而是网络、队列、数据库、凭据密钥和反向代理没有进入架构设计。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${workflowTroubleshooting.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-5 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-sky-500 transition-colors">${item.title} →</a>`)} </div> </section>  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"> <section class="space-y-6 p-10 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white">主权级自动化的基盘</h2> <div class="text-sm font-medium text-slate-500 dark:text-slate-400 space-y-4 leading-relaxed"> <p>当自动化流程涉及账号凭证、内部数据和长期运行成本，自托管 n8n 更适合做可控的业务底座。它让流程、数据和密钥留在自己的基础设施里。</p> <p>当触发量变大后，需要把 Web 入口、任务队列和 Worker 执行拆开，再配合重试、告警和成本监控，避免一个外部接口抖动拖垮整条流程。</p> </div> </section> <section class="space-y-6 p-10 rounded-[40px] bg-sky-500/5 border border-sky-500/10"> <h2 class="text-2xl font-black italic uppercase text-sky-500">自动化系统三要素</h2> <div class="grid grid-cols-3 gap-4"> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-sky-500/20"> <div class="text-[10px] font-black uppercase text-sky-600">Triggers</div> <p class="text-[9px] font-bold text-slate-400">Webhook、定时器或事件触发源点</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-sky-500/20"> <div class="text-[10px] font-black uppercase text-sky-600">Nodes</div> <p class="text-[9px] font-bold text-slate-400">进行 API 拉取、数据变换和 AI 运算的模块</p> </div> <div class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-sky-500/20"> <div class="text-[10px] font-black uppercase text-sky-600">Credentials</div> <p class="text-[9px] font-bold text-slate-400">安全加密保管的第三方应用凭证与密钥</p> </div> </div> </section> </div>  <section id="must-read" class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 mb-24"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
⚡ 推荐起点
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/ai/n8n-ai-starter-kit/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">START HERE</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">n8n AI Starter Kit ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从 Gmail、Slack、Notion 到自托管、Queue Mode 和 Webhook Hardening 的 n8n AI 入门路线。</p> </a> <a href="/ai/n8n-ai-gmail-summarizer-openai-google-sheets/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">CASE / GMAIL</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">Gmail 邮件摘要自动化 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">用 Gmail Trigger、结构化输出、Message ID 去重和 Google Sheets 完成可复用的邮件处理闭环。</p> </a> <a href="/ai/self-hosted-n8n-ai-workflows/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">自托管部署</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">n8n 自托管部署 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">在边缘 NAS 或局域网 Docker 下稳定托管运行，终结昂贵的云端 API 按次收费账单。</p> </a> <a href="/ai/n8n-queue-mode-redis-worker/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">STEP 02 / PERFORMANCE</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">Redis 队列模式 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">高吞吐量集群搭建，通过独立的后台 Worker 进程，彻底隔离 Web 触发器的负载。</p> </a> <a href="/ai/n8n-ai-workflow-error-handling/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">STEP 03 / ROBUSTNESS</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">错误捕获与重试 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">面对第三方大模型服务不可用或网络抖动时，设计自适应指数退避重试流。</p> </a> <a href="/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">STEP 04 / SELECTION</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">主流自动化工具选型 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从成本控制、数据合规性、生态广度等物理维度，深入剖析三者之间的优劣势。</p> </a> <a href="/ai/ai-workflow-automation-production/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">STEP 05 / METRICS</div> <h4 class="text-base font-black text-slate-900 dark:text-white mb-2">自动化生产化专题 ➔</h4> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold">流程耗时、外部 API 连接监控、以及加密凭证在更换宿主机时的物理安全迁移。</p> </a> </div> </section> <section id="faq" class="mb-24 p-10 md:p-12 rounded-[50px] bg-sky-500/5 border border-sky-500/10"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl font-black italic uppercase text-slate-900 dark:text-white">AI Workflow 常见问题</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">稳定的 Workflow 不是低代码玩具，而是把触发、执行、失败恢复、凭据和成本控制都纳入系统设计。</p> </div> <div class="space-y-4"> ${workflowFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section>  <div class="space-y-24 mb-32 relative z-30 pt-16 border-t border-slate-200 dark:border-white/10"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-8 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-sky-600"></span> 按流程能力分类
</h2> ${groupedPosts.map((group) => group.articles.length > 0 && renderTemplate`<section class="space-y-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-sky-500 rounded-full"></span> ${group.title} </h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${group.articles.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl relative z-10 cursor-pointer animate-fadeUp"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">WORKFLOW</span> <span class="text-[9px] font-bold text-slate-400 font-mono italic">${formatDate(post.data.createdAt)}</span> </div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors leading-snug"> ${post.data.title} </h4> <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 font-bold leading-relaxed opacity-80"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6"> <span class="text-[9px] font-black uppercase tracking-widest text-sky-500 opacity-60 group-hover:opacity-100 transition-all">LOAD_PROTOCOL</span> <svg class="w-4 h-4 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> </section>`)}  ${otherPosts.length > 0 && renderTemplate`<section class="space-y-8 pt-8"> <h3 class="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 flex items-center gap-3"> <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> 更多实战记录 / MORE LOGS
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${otherPosts.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-6 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/30 transition-all shadow-sm block animate-fadeUp text-left"> <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors line-clamp-2 m-0 leading-normal"> ${post.data.title} </h4> </a>`)} </div> </section>`} </div> <section id="workflow-next" data-theme-surface="adaptive-workflow-next" class="p-10 md:p-12 rounded-[50px] bg-sky-50/70 text-slate-950 border border-sky-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"> <div> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300 mb-4">下一步 / Tool Conversion</div> <h2 class="text-3xl font-black italic uppercase text-slate-950 dark:text-white mb-4">从案例流量回到生产工具链</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">Workflow 专题承担 n8n 自托管、Webhook、Queue Mode、错误处理和工具选型流量；案例文做长尾入口，主力页负责把读者带回生产排障链路、Newsletter 和工具页。</p> </div> <div class="flex flex-col gap-3"> <a href="/ai/self-hosted-n8n-ai-workflows/" class="rounded-full bg-sky-600 px-6 py-3 text-xs font-black uppercase tracking-widest text-white text-center hover:bg-sky-700 transition-colors">自托管部署主力页 →</a> <a href="/ai/n8n-queue-mode-redis-worker/" class="rounded-full border border-sky-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">Queue Mode 排障 →</a> <a href="/newsletter/" class="rounded-full border border-sky-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">订阅整改复盘 →</a> <a href="/tools/" class="rounded-full border border-sky-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-800 text-center hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10">进入 XBSTACK Tools →</a> </div> </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/workflow.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/workflow.astro";
const $$url = "/ai/workflow/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Workflow,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
