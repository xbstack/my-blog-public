import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_CEdkLuU4.mjs';
import { $ as $$PublicLayout } from '../chunks/PublicLayout_DpzxR7uC.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_pMHxHuJm.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_c6kFuudu.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allAIPosts = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en");
  const getSafeTime = (dateVal) => {
    if (!dateVal) return 0;
    const time = new Date(dateVal).getTime();
    return isNaN(time) ? 0 : time;
  };
  const cleanId = (id) => id.replace(/\.(md|mdx)$/, "");
  const sortedPosts = allAIPosts.sort((a, b) => {
    const timeB = getSafeTime(b.data.createdAt);
    const timeA = getSafeTime(a.data.createdAt);
    return timeB - timeA;
  });
  const toolsLabPosts = sortedPosts.filter((post) => {
    const tags = post.data.tags || [];
    return post.data.section === "tools-lab" || post.data.hub === "tools-lab" || post.data.subcategory === "tools-lab" || post.data.series === "ai-tools-lab" || tags.includes("AI Tools Lab") || tags.includes("AI\u5DE5\u5177\u5B9E\u6D4B");
  });
  const latestToolsLabPost = toolsLabPosts[0];
  const countBy = (matcher) => allAIPosts.filter((post) => matcher(cleanId(post.id))).length;
  const categoriesWithCount = [
    { name: "AI Agent", slug: "agent", count: countBy((id) => id.includes("agent")) },
    { name: "LangGraph", slug: "langgraph", count: countBy((id) => id.includes("langgraph")) },
    { name: "MCP", slug: "mcp", count: countBy((id) => id.includes("mcp")) },
    { name: "Workflow", slug: "workflow", count: countBy((id) => id.includes("workflow") || id.includes("n8n")) },
    { name: "Web Builder Log", slug: "web", count: allAIPosts.filter((post) => post.data.category === "web" || post.data.section === "builder-log").length },
    { name: "AI Tools Lab", slug: "tools-lab", count: toolsLabPosts.length },
    { name: "Production", slug: "production", count: countBy((id) => id.includes("production") || id.includes("deployment") || id.includes("evaluation") || id.includes("observability")) }
  ].filter((c) => c.count > 0);
  const allTags = [...new Set(allAIPosts.flatMap((post) => post.data.tags || []))].slice(0, 20);
  const title = "XBSTACK AI Hub\uFF1AAI Agent\u3001MCP\u3001Workflow \u4E0E AI Tools Lab \u5B9E\u6218\u8DEF\u7EBF";
  const description = "XBSTACK AI Hub \u662F AI Agent\u3001MCP\u3001n8n AI Workflow\u3001AI Tools Lab \u4E0E Local AI \u7684\u751F\u4EA7\u5316\u8DEF\u7EBF\u56FE\uFF0C\u9762\u5411\u60F3\u628A AI \u5E94\u7528\u771F\u6B63\u843D\u5730\u7684\u5F00\u53D1\u8005\uFF0C\u6574\u7406\u4ECE\u9009\u578B\u3001\u7CFB\u7EDF\u5B9E\u73B0\u3001\u6A21\u578B\u5DE5\u5177\u5B9E\u6D4B\u3001\u7AEF\u4FA7\u96C6\u6210\u5230\u8BC4\u4F30\u3001\u53EF\u89C2\u6D4B\u6027\u3001\u6743\u9650\u3001\u9519\u8BEF\u6062\u590D\u548C\u6210\u672C\u6CBB\u7406\u7684\u5B8C\u6574\u8DEF\u5F84\u3002";
  const pageTitle = title;
  const pageDescription = description;
  const keywords = "XBSTACK AI, AI Agent, MCP, LangGraph, n8n, Workflow Automation, RAG, Tool Use, Agent Evaluation, Agent Observability, Agent Deployment, Multi-Agent Systems, AI Agent \u751F\u4EA7\u5316, AI Workflow";
  const coreHubs = [
    {
      label: "Agent Engineering",
      title: "Agent \u5DE5\u7A0B\u5316",
      desc: "\u628A LangGraph\u3001Memory\u3001RAG\u3001Evaluation\u3001Human-in-the-loop \u548C\u591A\u667A\u80FD\u4F53\u534F\u4F5C\u653E\u8FDB Agent \u5DE5\u7A0B\u8DEF\u7EBF\uFF0C\u4E0D\u518D\u628A\u5BFC\u822A\u62C6\u5F97\u8FC7\u788E\u3002",
      href: "/ai/agent/",
      color: "text-emerald-500",
      glow: "bg-emerald-500/10"
    },
    {
      label: "\u5DE5\u5177\u534F\u8BAE",
      title: "MCP \u534F\u8BAE",
      desc: "\u8986\u76D6 MCP Server\u3001OAuth\u3001allowedRoots\u3001Tool Call\u3001JSON-RPC \u548C\u751F\u4EA7\u73AF\u5883\u6743\u9650\u8FB9\u754C\uFF0C\u9002\u5408\u505A\u5DE5\u5177\u63A5\u5165\u548C\u5E73\u53F0\u5316\u6CBB\u7406\u3002",
      href: "/ai/mcp/",
      color: "text-orange-500",
      glow: "bg-orange-500/10"
    },
    {
      label: "\u81EA\u52A8\u5316\u7BA1\u9053",
      title: "Workflow \u5DE5\u4F5C\u6D41",
      desc: "\u6574\u7406 n8n \u81EA\u6258\u7BA1\u3001\u961F\u5217\u6A21\u5F0F\u3001\u6570\u636E\u5E93\u3001\u9519\u8BEF\u91CD\u8BD5\u548C\u6210\u672C\u63A7\u5236\u5B9E\u8DF5\uFF0C\u9002\u5408\u642D\u5EFA\u7A33\u5B9A\u7684\u4E1A\u52A1\u81EA\u52A8\u5316\u7BA1\u9053\u3002",
      href: "/ai/workflow/",
      color: "text-sky-500",
      glow: "bg-sky-500/10"
    },
    {
      label: "\u6A21\u578B\u5DE5\u5177\u5B9E\u6D4B",
      title: "AI Tools Lab",
      desc: "\u5927\u6A21\u578B\u66F4\u65B0\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u3001\u673A\u5668\u4EBA\u4E16\u754C\u6A21\u578B\u548C\u5185\u5BB9\u751F\u4EA7\u5DE5\u5177\u7684\u771F\u5B9E\u4EFB\u52A1\u5B9E\u6D4B\u3002",
      href: "/ai/tools-lab/",
      color: "text-violet-500",
      glow: "bg-violet-500/10"
    },
    {
      label: "\u7AEF\u4FA7\u6A21\u578B",
      title: "Local AI",
      desc: "\u805A\u7126 iPhone\u3001Android\u3001Core ML\u3001ONNX\u3001llama.cpp\u3001NPU\u3001\u53D1\u70ED\u3001\u5361\u987F\u3001\u9690\u79C1\u548C App \u96C6\u6210\u8FB9\u754C\u3002",
      href: "/ai/local-ai/",
      color: "text-cyan-500",
      glow: "bg-cyan-500/10"
    },
    {
      label: "\u589E\u957F\u5B9E\u9A8C",
      title: "Growth Lab",
      desc: "\u4E0D\u8FDB\u9876\u90E8\u5BFC\u822A\uFF0C\u4F46\u627F\u63A5 SEO\u3001GEO\u3001Search Console\u3001404 \u56DE\u6536\u3001UTM \u5206\u53D1\u548C\u7F51\u7AD9\u589E\u957F\u590D\u76D8\u3002",
      href: "/growth/",
      color: "text-blue-500",
      glow: "bg-blue-500/10"
    }
  ];
  const learningPath = [
    {
      stage: "01 / \u5224\u65AD\u8FB9\u754C",
      title: "\u5148\u9009\u5BF9\u7CFB\u7EDF\u5F62\u6001",
      desc: "\u5148\u5224\u65AD\u9700\u6C42\u5C5E\u4E8E Agent\u3001Workflow\u3001MCP \u8FD8\u662F LangGraph\uFF0C\u907F\u514D\u628A\u4E0D\u540C\u7C7B\u578B\u7684 AI \u5E94\u7528\u6DF7\u5728\u540C\u4E00\u5957\u5B9E\u73B0\u91CC\u3002",
      links: [
        { title: "AI Agent \u5168\u6808\u6307\u5357", href: "/ai/ai-agent-complete-guide/" },
        { title: "AI Agent vs Workflow Automation", href: "/ai/ai-agent-vs-workflow-automation/" },
        { title: "MCP vs Function Calling", href: "/ai/mcp-vs-function-calling/" },
        { title: "n8n AI Starter Kit", href: "/ai/n8n-ai-starter-kit/" }
      ]
    },
    {
      stage: "02 / \u5B9E\u73B0\u7CFB\u7EDF",
      title: "\u518D\u505A\u53EF\u8FD0\u884C\u7248\u672C",
      desc: "\u56F4\u7ED5\u5DE5\u5177\u8C03\u7528\u3001\u72B6\u6001\u9694\u79BB\u3001\u4EBA\u5DE5\u5BA1\u6279\u3001\u63A5\u53E3\u89E6\u53D1\u548C\u81EA\u6258\u7BA1\u90E8\u7F72\uFF0C\u5148\u642D\u51FA\u53EF\u9A8C\u8BC1\u3001\u53EF\u7EF4\u62A4\u7684\u6700\u5C0F\u7CFB\u7EDF\u3002",
      links: [
        { title: "AI Agent Tool Use", href: "/ai/ai-agent-tool-use/" },
        { title: "LangGraph \u72B6\u6001\u9694\u79BB", href: "/ai/langgraph-thread-session-state-isolation/" },
        { title: "MCP Streamable HTTP \u90E8\u7F72", href: "/ai/mcp-streamable-http-deployment/" }
      ]
    },
    {
      stage: "03 / \u751F\u4EA7\u6CBB\u7406",
      title: "\u6700\u540E\u8865\u9F50\u4E0A\u7EBF\u80FD\u529B",
      desc: "\u4E0A\u7EBF\u524D\u91CD\u70B9\u8865\u9F50\u8BC4\u4F30\u3001\u53EF\u89C2\u6D4B\u6027\u3001\u9519\u8BEF\u91CD\u8BD5\u3001\u6743\u9650\u9694\u79BB\u3001\u6210\u672C\u63A7\u5236\u548C\u4EBA\u5DE5\u515C\u5E95\uFF0C\u907F\u514D Demo \u53D8\u6210\u7EBF\u4E0A\u98CE\u9669\u3002",
      links: [
        { title: "AI Agent \u751F\u4EA7\u5316\u6CBB\u7406", href: "/ai/ai-agent-production-governance/" },
        { title: "LangGraph Observability", href: "/ai/langgraph-observability-agent-trace/" },
        { title: "n8n AI Starter Kit", href: "/ai/n8n-ai-starter-kit/" },
        { title: "n8n Queue Mode + Redis", href: "/ai/n8n-queue-mode-redis-worker/" }
      ]
    }
  ];
  const intentRoutes = [
    { intent: "\u6211\u8981\u8BBE\u8BA1\u4E00\u4E2A\u80FD\u6267\u884C\u4EFB\u52A1\u7684 Agent", href: "/ai/agent/", answer: "\u9002\u5408\u8FDB\u5165 Agent Engineering\uFF0CLangGraph\u3001Memory\u3001RAG\u3001Evaluation \u548C Human Gate \u90FD\u653E\u5728\u8FD9\u6761\u5DE5\u7A0B\u8DEF\u7EBF\u91CC\u3002" },
    { intent: "\u6211\u8981\u8BA9\u5927\u6A21\u578B\u5B89\u5168\u8BBF\u95EE\u5DE5\u5177\u548C\u6570\u636E", href: "/ai/mcp/", answer: "\u9002\u5408\u8FDB\u5165 MCP \u4E13\u9898\uFF0C\u91CD\u70B9\u770B\u534F\u8BAE\u6A21\u578B\u3001Server\u3001\u8BA4\u8BC1\u3001\u6743\u9650\u8FB9\u754C\u548C\u6C99\u7BB1\u6CBB\u7406\u3002" },
    { intent: "\u6211\u8981\u628A\u4E1A\u52A1\u81EA\u52A8\u5316\u6D41\u7A0B\u7A33\u5B9A\u8DD1\u8D77\u6765", href: "/ai/workflow/", answer: "\u9002\u5408\u8FDB\u5165 Workflow \u8DEF\u7EBF\uFF0C\u91CD\u70B9\u770B n8n \u81EA\u6258\u7BA1\u3001\u961F\u5217\u6A21\u5F0F\u3001\u6570\u636E\u5B58\u50A8\u3001\u5931\u8D25\u91CD\u8BD5\u548C\u6210\u672C\u63A7\u5236\u3002" },
    { intent: "\u6211\u8981\u8DDF\u8FDB\u6A21\u578B\u548C AI \u5DE5\u5177\u66F4\u65B0", href: "/ai/tools-lab/", answer: "\u9002\u5408\u8FDB\u5165 AI Tools Lab\uFF0C\u91CD\u70B9\u770B\u6A21\u578B\u66F4\u65B0\u3001\u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u548C\u5185\u5BB9\u751F\u4EA7\u5DE5\u5177\u5B9E\u6D4B\u3002" },
    { intent: "\u6211\u8981\u8BC4\u4F30\u7AEF\u4FA7\u6A21\u578B\u80FD\u4E0D\u80FD\u8FDB App", href: "/ai/local-ai/", answer: "\u9002\u5408\u8FDB\u5165 Local AI\uFF0C\u91CD\u70B9\u770B iPhone\u3001Android\u3001Core ML\u3001ONNX\u3001\u53D1\u70ED\u3001\u5361\u987F\u3001\u9690\u79C1\u548C App \u96C6\u6210\u8FB9\u754C\u3002" },
    { intent: "\u6211\u8981\u8FD0\u8425\u7F51\u7AD9\u589E\u957F\u548C\u771F\u4EBA\u6D41\u91CF", href: "/growth/", answer: "\u9002\u5408\u8FDB\u5165 Growth Lab\uFF0C\u91CD\u70B9\u770B Search Console\u3001SEO\u3001GEO\u3001404 \u56DE\u6536\u3001UTM \u5206\u53D1\u548C\u5DE5\u5177\u627F\u63A5\u3002" }
  ];
  const decisionMatrix = [
    {
      system: "AI Agent",
      href: "/ai/agent/",
      useWhen: "\u4EFB\u52A1\u76EE\u6807\u6E05\u695A\uFF0C\u4F46\u6267\u884C\u8DEF\u5F84\u9700\u8981\u6A21\u578B\u52A8\u6001\u5224\u65AD\uFF0C\u4F8B\u5982\u5BA2\u6237\u5DE5\u5355\u5206\u6D41\u3001\u8D44\u6599\u5206\u6790\u3001\u5DE5\u5177\u8C03\u7528\u548C\u591A\u6B65\u9AA4\u8C03\u7814\u3002",
      avoidWhen: "\u6D41\u7A0B\u6BCF\u4E00\u6B65\u90FD\u56FA\u5B9A\u3001\u8F93\u5165\u8F93\u51FA\u7A33\u5B9A\u3001\u5931\u8D25\u540E\u53EA\u9700\u8981\u7B80\u5355\u91CD\u8BD5\uFF0C\u8FD9\u79CD\u573A\u666F\u7528\u5DE5\u4F5C\u6D41\u66F4\u7A33\u3002",
      firstRead: "AI Agent \u5168\u6808\u6307\u5357",
      firstHref: "/ai/ai-agent-complete-guide/"
    },
    {
      system: "LangGraph",
      href: "/ai/langgraph/",
      useWhen: "Agent \u6D41\u7A0B\u9700\u8981\u72B6\u6001\u9694\u79BB\u3001\u6682\u505C\u6062\u590D\u3001\u4EBA\u5DE5\u5BA1\u6279\u3001\u5B50\u56FE\u62C6\u5206\u3001\u5931\u8D25\u56DE\u6EDA\u548C\u53EF\u89C2\u6D4B Trace\u3002",
      avoidWhen: "\u53EA\u662F\u5355\u8F6E\u95EE\u7B54\u3001\u4E00\u6B21\u6027\u51FD\u6570\u8C03\u7528\uFF0C\u6216\u8005\u6CA1\u6709\u8DE8\u4F1A\u8BDD\u72B6\u6001\u6062\u590D\u8981\u6C42\uFF0C\u4E0D\u5FC5\u4E00\u5F00\u59CB\u5C31\u5F15\u5165\u56FE\u7F16\u6392\u3002",
      firstRead: "LangGraph \u72B6\u6001\u9694\u79BB\u5B9E\u6218",
      firstHref: "/ai/langgraph-thread-session-state-isolation/"
    },
    {
      system: "MCP",
      href: "/ai/mcp/",
      useWhen: "\u9700\u8981\u8BA9\u6A21\u578B\u4EE5\u53EF\u5BA1\u8BA1\u3001\u53EF\u6388\u6743\u3001\u53EF\u9694\u79BB\u7684\u65B9\u5F0F\u8BBF\u95EE\u6587\u4EF6\u3001\u6570\u636E\u5E93\u3001\u5185\u90E8 API \u6216\u8FDC\u7A0B\u5DE5\u5177\u3002",
      avoidWhen: "\u53EA\u662F\u7ED9\u4E00\u4E2A\u5E94\u7528\u5185\u90E8\u51FD\u6570\u8865\u5145\u6A21\u578B\u8C03\u7528\uFF0C\u4E14\u6CA1\u6709\u8DE8\u5BA2\u6237\u7AEF\u3001\u8DE8\u5DE5\u5177\u751F\u6001\u7684\u6807\u51C6\u5316\u9700\u6C42\u3002",
      firstRead: "MCP vs Function Calling",
      firstHref: "/ai/mcp-vs-function-calling/"
    },
    {
      system: "Workflow",
      href: "/ai/workflow/",
      useWhen: "\u4E1A\u52A1\u6D41\u7A0B\u6B65\u9AA4\u660E\u786E\uFF0C\u9700\u8981\u7A33\u5B9A\u8C03\u5EA6\u3001Webhook \u89E6\u53D1\u3001\u5931\u8D25\u91CD\u8BD5\u3001\u961F\u5217 worker \u548C\u4F4E\u6210\u672C\u81EA\u52A8\u5316\u3002",
      avoidWhen: "\u4EFB\u52A1\u8DEF\u5F84\u9AD8\u5EA6\u4E0D\u786E\u5B9A\uFF0C\u9700\u8981\u6A21\u578B\u5B9E\u65F6\u89C4\u5212\u5DE5\u5177\u987A\u5E8F\u3001\u5224\u65AD\u5F02\u5E38\u548C\u6539\u5199\u6267\u884C\u7B56\u7565\u3002",
      firstRead: "\u81EA\u6258\u7BA1 n8n AI Workflow",
      firstHref: "/ai/self-hosted-n8n-ai-workflows/"
    }
  ];
  const coreArticleLinks = [
    ...latestToolsLabPost ? [{ title: latestToolsLabPost.data.title, href: resolveEntryUrl(latestToolsLabPost) }] : [],
    { title: "AI Agent \u5168\u6808\u6307\u5357", href: "/ai/ai-agent-complete-guide/" },
    { title: "AI Agent vs Workflow Automation", href: "/ai/ai-agent-vs-workflow-automation/" },
    { title: "MCP vs Function Calling", href: "/ai/mcp-vs-function-calling/" },
    { title: "LangGraph \u72B6\u6001\u9694\u79BB\u5B9E\u6218", href: "/ai/langgraph-thread-session-state-isolation/" },
    { title: "LangGraph Human-in-the-loop \u5BA1\u6279\u6D41", href: "/ai/langgraph-human-in-the-loop-approval/" },
    { title: "LangGraph Observability \u5B9E\u6218", href: "/ai/langgraph-observability-agent-trace/" },
    { title: "n8n AI Starter Kit", href: "/ai/n8n-ai-starter-kit/" },
    { title: "Self-hosted n8n AI Workflow", href: "/ai/self-hosted-n8n-ai-workflows/" },
    { title: "n8n Queue Mode + Redis", href: "/ai/n8n-queue-mode-redis-worker/" },
    { title: "Web Builder Log", href: "/ai/web/" }
  ];
  const aiHubFaqs = [
    { question: "AI Agent\u3001MCP\u3001LangGraph \u548C Workflow \u5E94\u8BE5\u600E\u4E48\u533A\u5206\uFF1F", answer: "AI Agent \u89E3\u51B3\u52A8\u6001\u51B3\u7B56\u548C\u5DE5\u5177\u8C03\u7528\uFF0CMCP \u89E3\u51B3\u5DE5\u5177\u63A5\u5165\u534F\u8BAE\u548C\u6743\u9650\u8FB9\u754C\uFF0CLangGraph \u89E3\u51B3\u6709\u72B6\u6001 Agent \u7F16\u6392\uFF0CWorkflow \u89E3\u51B3\u786E\u5B9A\u6D41\u7A0B\u7684\u7A33\u5B9A\u81EA\u52A8\u5316\u3002\u771F\u6B63\u7684\u751F\u4EA7\u7CFB\u7EDF\u901A\u5E38\u4F1A\u7EC4\u5408\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u53EA\u9009\u4E00\u4E2A\u540D\u8BCD\u3002" },
    { question: "\u521D\u5B66\u8005\u5E94\u8BE5\u4ECE\u54EA\u4E2A\u4E13\u9898\u5F00\u59CB\uFF1F", answer: "\u5148\u4ECE /ai/agent/ \u5EFA\u7ACB Agent \u7684\u7CFB\u7EDF\u8FB9\u754C\uFF0C\u518D\u770B /ai/workflow/ \u7406\u89E3\u786E\u5B9A\u6027\u6D41\u7A0B\uFF0C\u968F\u540E\u8FDB\u5165 /ai/mcp/ \u7684\u5DE5\u5177\u534F\u8BAE\u548C /ai/langgraph/ \u7684\u72B6\u6001\u7F16\u6392\u3002\u8FD9\u6837\u4E0D\u5BB9\u6613\u628A\u6240\u6709 AI \u5E94\u7528\u90FD\u8BEF\u5199\u6210\u590D\u6742 Agent\u3002" },
    { question: "\u4F01\u4E1A AI \u5E94\u7528\u5E94\u8BE5\u4F18\u5148\u505A Agent \u8FD8\u662F Workflow\uFF1F", answer: "\u5982\u679C\u6D41\u7A0B\u7A33\u5B9A\u3001\u5BA1\u6279\u8282\u70B9\u660E\u786E\u3001\u5931\u8D25\u53EF\u4EE5\u91CD\u8BD5\uFF0C\u4F18\u5148 Workflow\uFF1B\u5982\u679C\u4EFB\u52A1\u9700\u8981\u6A21\u578B\u5224\u65AD\u4E0B\u4E00\u6B65\u3001\u9009\u62E9\u5DE5\u5177\u3001\u5904\u7406\u975E\u7ED3\u6784\u5316\u4FE1\u606F\uFF0C\u518D\u5F15\u5165 Agent\u3002\u751F\u4EA7\u7CFB\u7EDF\u901A\u5E38\u5148\u7528 Workflow \u56FA\u5316\u8FB9\u754C\uFF0C\u518D\u8BA9 Agent \u5904\u7406\u4E0D\u786E\u5B9A\u90E8\u5206\u3002" },
    { question: "MCP \u9002\u5408\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "MCP \u9002\u5408\u628A\u6587\u4EF6\u7CFB\u7EDF\u3001\u6570\u636E\u5E93\u3001\u5185\u90E8\u670D\u52A1\u548C\u5916\u90E8\u5DE5\u5177\u4EE5\u7EDF\u4E00\u534F\u8BAE\u66B4\u9732\u7ED9\u6A21\u578B\uFF0C\u540C\u65F6\u4FDD\u7559\u6388\u6743\u3001\u5BA1\u8BA1\u548C\u9694\u79BB\u80FD\u529B\u3002\u5B83\u4E0D\u662F\u6240\u6709\u51FD\u6570\u8C03\u7528\u7684\u66FF\u4EE3\u54C1\uFF0C\u66F4\u9002\u5408\u591A\u5DE5\u5177\u3001\u591A\u5BA2\u6237\u7AEF\u548C\u5B89\u5168\u6CBB\u7406\u573A\u666F\u3002" },
    { question: "LangGraph \u9002\u5408\u4EC0\u4E48\u573A\u666F\uFF1F", answer: "LangGraph \u9002\u5408\u9700\u8981\u72B6\u6001\u3001\u5206\u652F\u3001\u5FAA\u73AF\u3001\u4EBA\u5DE5\u5BA1\u6279\u3001\u6682\u505C\u6062\u590D\u548C\u53EF\u89C2\u6D4B Trace \u7684 Agent \u6D41\u7A0B\u3002\u6CA1\u6709\u72B6\u6001\u6062\u590D\u9700\u6C42\u7684\u7B80\u5355\u94FE\u8DEF\uFF0C\u4E0D\u9700\u8981\u4E3A\u4E86\u67B6\u6784\u611F\u5F3A\u884C\u4F7F\u7528 LangGraph\u3002" },
    { question: "XBSTACK \u7684 AI \u5185\u5BB9\u8DEF\u7EBF\u662F\u4EC0\u4E48\uFF1F", answer: "XBSTACK \u4E0D\u662F\u5355\u7EAF\u8FFD\u70ED\u70B9\u7684 AI \u6559\u7A0B\u96C6\u5408\uFF0C\u800C\u662F\u56F4\u7ED5\u751F\u4EA7\u7EA7 AI \u7CFB\u7EDF\u7EC4\u7EC7\u5185\u5BB9\uFF1A\u9009\u578B\u3001\u67B6\u6784\u3001\u5DE5\u5177\u63A5\u5165\u3001\u72B6\u6001\u7F16\u6392\u3001\u90E8\u7F72\u3001\u6392\u969C\u3001\u8BC4\u4F30\u3001\u53EF\u89C2\u6D4B\u6027\u548C\u6210\u672C\u6CBB\u7406\u3002" }
  ];
  const aiHubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.xbstack.com/ai/#collection",
        "name": pageTitle,
        "url": "https://www.xbstack.com/ai/",
        "description": pageDescription,
        "inLanguage": "zh-CN",
        "isPartOf": { "@id": "https://www.xbstack.com/#website" },
        "about": [
          { "@type": "Thing", "name": "AI Agent" },
          { "@type": "Thing", "name": "Model Context Protocol" },
          { "@type": "Thing", "name": "LangGraph" },
          { "@type": "Thing", "name": "n8n" },
          { "@type": "Thing", "name": "Workflow Automation" },
          { "@type": "Thing", "name": "Production AI Systems" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.xbstack.com/ai/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.xbstack.com/" },
          { "@type": "ListItem", "position": 2, "name": "AI Hub", "item": "https://www.xbstack.com/ai/" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.xbstack.com/ai/#topic-hubs",
        "name": "XBSTACK AI topic hubs",
        "itemListElement": coreHubs.map((hub, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": hub.title,
          "url": `https://www.xbstack.com${hub.href}`
        }))
      },
      {
        "@type": "ItemList",
        "@id": "https://www.xbstack.com/ai/#core-articles",
        "name": "XBSTACK AI core articles",
        "itemListElement": coreArticleLinks.map((article, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": article.title,
          "url": `https://www.xbstack.com${article.href}`
        }))
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.xbstack.com/ai/#faq",
        "mainEntity": aiHubFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
  const geoConfig = {
    geo_summary: "XBSTACK AI Hub \u662F AI Agent\u3001MCP\u3001n8n\u3001Workflow Automation\u3001AI Tools Lab\u3001Local AI\u3001RAG\u3001Tool Use\u3001Evaluation\u3001Observability\u3001Deployment \u548C\u4F01\u4E1A\u5E94\u7528\u667A\u80FD\u4F53\u7684\u603B\u5165\u53E3\u3002\u9875\u9762\u6309\u771F\u5B9E\u5DE5\u7A0B\u76EE\u6807\u7EC4\u7EC7\u5185\u5BB9\uFF0C\u5E76\u628A Agent Engineering\u3001MCP\u3001Workflow\u3001AI Tools Lab\u3001Local AI \u4E0E Growth Lab \u4F5C\u4E3A\u6838\u5FC3\u5185\u94FE\u67A2\u7EBD\u3002",
    geo_questions: [
      "Where should I start learning AI Agent on XBSTACK?",
      "How does XBSTACK organize MCP, LangGraph and n8n content?",
      "What is the best path to learn production AI Agents?",
      "Where can I find XBSTACK articles about RAG and document intelligence?",
      "How do AI Agent and Workflow Automation differ?"
    ],
    geo_entities: ["XBSTACK AI", "AI Agent", "MCP", "Model Context Protocol", "LangGraph", "n8n", "Workflow Automation", "RAG", "Tool Use", "Agent Evaluation", "Agent Observability", "Agent Deployment", "Production AI Agents", "Enterprise AI Agents"]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": aiHubSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> <div class="absolute inset-0 bg-[radial-gradient(#80808033_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div> </div> <main class="relative z-10 pt-32 pb-24"> <header class="container mx-auto px-4 mb-20 text-center max-w-5xl"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black border border-sky-500/20 mb-8 uppercase tracking-[0.3em]">
AI Systems Hub / 生产级智能体系统入口
</div> <h1 class="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-[0.9]">
Build AI<span class="text-sky-500"> Systems.</span> </h1> <p class="max-w-4xl mx-auto text-lg md:text-xl font-bold text-slate-500 dark:text-slate-400 italic border-y border-slate-200 dark:border-white/5 py-6 leading-relaxed">
这里不是按时间倒序堆文章，而是按真实工程路径组织内容：先判断需求适合 Agent Engineering、MCP、Workflow、AI Tools Lab、Local AI 还是 Growth Lab，再进入实现细节，最后补齐评估、可观测性、权限、重试、成本治理和网站增长复盘。
</p> <div class="flex flex-wrap justify-center gap-4 mt-10"> <a href="#route" class="px-7 py-4 rounded-2xl bg-sky-600 text-white font-black uppercase tracking-[0.25em] text-[10px] hover:bg-sky-700 transition-colors">选择目标</a> <a href="#hubs" class="px-7 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black uppercase tracking-[0.25em] text-[10px] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">查看专题</a> </div> </header> ${latestToolsLabPost && renderTemplate`<section class="container mx-auto px-4 max-w-6xl mb-14"> <a${addAttribute(resolveEntryUrl(latestToolsLabPost), "href")} class="group block p-8 md:p-10 rounded-[42px] bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-transparent border border-violet-500/20 hover:border-violet-500/50 transition-colors relative overflow-hidden"> <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[0.72fr_0.28fr] gap-8 items-end"> <div> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-violet-500 mb-4">Latest Model Test / ${latestToolsLabPost.data.tool_name || "AI Tools Lab"}</div> <h2 class="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-5 group-hover:text-violet-500 transition-colors">${latestToolsLabPost.data.title}</h2> <p class="max-w-3xl text-sm md:text-base font-bold leading-relaxed text-slate-600 dark:text-slate-400">${latestToolsLabPost.data.description}</p> </div> <div class="lg:text-right"> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400 mb-3">真实证据，不做参数搬运</div> <div class="inline-flex px-6 py-3 rounded-2xl bg-violet-600 text-white text-[10px] font-black uppercase tracking-[0.25em]">阅读完整实测 →</div> </div> </div> <div class="absolute -right-20 -bottom-24 w-72 h-72 rounded-full bg-violet-500/10 blur-[70px]"></div> </a> </section>`} <div class="container mx-auto px-4 max-w-[1440px]"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-12"> <div class="lg:col-span-3 space-y-20"> <section id="route" class="p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="flex flex-col md:flex-row justify-between gap-8 mb-10"> <div class="space-y-4 max-w-2xl"> <h2 class="text-3xl md:text-4xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white">按目标选择入口</h2> <p class="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">先根据目标选择专题，再进入对应的技术路线。这里把常见需求拆成六类：Agent Engineering、MCP、Workflow、AI Tools Lab、Local AI 和 Growth Lab。</p> </div> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">先选方向，再看文章</div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${intentRoutes.map((route) => renderTemplate`<a${addAttribute(route.href, "href")} class="group p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-sky-500 transition-colors block"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-sky-500 mb-3">${route.intent}</div> <p class="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">${route.answer}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-sky-500 transition-colors">查看路径 →</div> </a>`)} </div> </section> <section id="decision-matrix" class="p-10 md:p-12 rounded-[50px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="flex flex-col md:flex-row justify-between gap-6 mb-10"> <div class="space-y-4 max-w-3xl"> <h2 class="text-3xl md:text-4xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white">选型决策表</h2> <p class="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">生产级 AI 系统的第一步不是选择框架，而是把问题形态分清楚。下面这张表把 Agent、LangGraph、MCP 和 Workflow 的边界压缩到工程决策层。</p> </div> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Architecture Decision</div> </div> <div class="grid grid-cols-1 xl:grid-cols-2 gap-5"> ${decisionMatrix.map((item) => renderTemplate`<article class="p-6 rounded-[32px] bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10"> <div class="flex items-start justify-between gap-4 mb-5"> <a${addAttribute(item.href, "href")} class="text-2xl font-black italic uppercase text-slate-900 dark:text-white hover:text-sky-500 transition-colors">${item.system}</a> <a${addAttribute(item.firstHref, "href")} class="shrink-0 text-[9px] font-black uppercase tracking-[0.2em] text-sky-500 hover:text-sky-400">起点文章</a> </div> <div class="space-y-4 text-xs font-bold leading-relaxed"> <div> <div class="mb-1 text-[9px] font-black uppercase tracking-[0.25em] text-emerald-500">适合使用</div> <p class="text-slate-600 dark:text-slate-300">${item.useWhen}</p> </div> <div> <div class="mb-1 text-[9px] font-black uppercase tracking-[0.25em] text-rose-500">不建议使用</div> <p class="text-slate-600 dark:text-slate-300">${item.avoidWhen}</p> </div> <a${addAttribute(item.firstHref, "href")} class="inline-flex text-[10px] font-black uppercase tracking-[0.25em] text-sky-500 hover:translate-x-1 transition-transform">${item.firstRead} →</a> </div> </article>`)} </div> </section> <section id="hubs"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-10 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-sky-600"></span> 核心专题
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${coreHubs.map((hub) => renderTemplate`<a${addAttribute(hub.href, "href")} class="p-10 rounded-[48px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-sm block hover:border-sky-500/50 transition-colors"> <div class="relative z-10 space-y-4"> <div${addAttribute(`text-[10px] font-black uppercase tracking-[0.3em] ${hub.color}`, "class")}>${hub.label}</div> <h3 class="text-3xl font-black italic uppercase text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">${hub.title}</h3> <p class="text-sm text-slate-600 dark:text-slate-400 font-bold leading-relaxed italic">${hub.desc}</p> <div${addAttribute(`inline-flex items-center gap-2 text-xs font-black ${hub.color} group-hover:translate-x-1 transition-transform`, "class")}>
进入专题页 ➔
</div> </div> <div${addAttribute(`absolute -bottom-10 -right-10 w-40 h-40 ${hub.glow} blur-[60px] rounded-full`, "class")}></div> </a>`)} </div> </section> <section id="learning-path" class="pt-4"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-10 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-indigo-600"></span> 三段式学习路线
</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> ${learningPath.map((stage) => renderTemplate`<section class="p-7 rounded-[36px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[9px] font-black uppercase tracking-[0.25em] text-indigo-500 mb-4">${stage.stage}</div> <h3 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white mb-4">${stage.title}</h3> <p class="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-6">${stage.desc}</p> <div class="space-y-3"> ${stage.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block text-xs font-black text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">→ ${link.title}</a>`)} </div> </section>`)} </div> </section> <section id="must-read" class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <h2 class="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
📚 推荐起点
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <a href="/ai/ai-agent-complete-guide/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">Agent 总览</div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-2">AI Agent 全栈指南 2026 ➔</h4> <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从架构设计、工具调用、记忆系统、RAG 到本地多节点部署的全景技术路线图。</p> </a> <a href="/ai/langgraph/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-indigo-500 transition-colors"> <div class="text-[9px] font-black text-indigo-500 mb-2 font-mono">编排路线</div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-2">LangGraph 生产化 Roadmap ➔</h4> <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从状态隔离、HITL、Checkpointer、失败恢复到 Observability 的完整编排路径。</p> </a> <a href="/ai/mcp/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-orange-500 transition-colors"> <div class="text-[9px] font-black text-orange-500 mb-2 font-mono">工具协议</div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-2">MCP Server 协议与治理 ➔</h4> <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">远程 MCP 的安全阻线：OAuth 鉴权、allowedRoots 目录锁、多用户沙箱和 Tool Call 审计。</p> </a> <a href="/ai/n8n-ai-starter-kit/" class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 block hover:border-sky-500 transition-colors"> <div class="text-[9px] font-black text-sky-500 mb-2 font-mono">工作流自动化</div> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-2">n8n AI Starter Kit ➔</h4> <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">从 Gmail、Slack、Notion 到自托管、Queue Mode 和 Webhook Hardening 的 n8n AI 入门路线。</p> </a> </div> </section> <section id="faq" class="p-10 md:p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="max-w-3xl mb-10 space-y-4"> <h2 class="text-3xl md:text-4xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white">常见问题</h2> <p class="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">这些问题不是术语解释，而是做 AI 应用选型时最容易走错的地方。</p> </div> <div class="space-y-4"> ${aiHubFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <section class="pt-16 border-t border-slate-200 dark:border-white/10"> <h2 class="text-sm font-black uppercase tracking-widest italic mb-8 flex items-center gap-4 text-slate-900 dark:text-white"> <span class="h-4 w-1 bg-slate-900 dark:bg-white"></span> 最新文章
</h2> <div class="grid gap-6"> ${sortedPosts.slice(0, 12).map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> </section> </div> <aside class="lg:col-span-1"> <div class="sticky top-24"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": allTags, "categories": categoriesWithCount, "allBlogCount": allAIPosts.length })} </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/index.astro";
const $$url = "/ai/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
