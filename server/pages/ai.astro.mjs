import { c as createComponent, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex")).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const imageSrc = (image) => typeof image === "string" ? image : image?.src || "";
  const latest = posts.slice(0, 10).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: imageSrc(entry.data.image),
    desc: entry.data.description || "",
    meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const areas = [
    {
      title: "AI Agent",
      href: "/ai/agent/",
      desc: "\u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001Memory\u3001RAG\u3001\u8BC4\u6D4B\u3001\u6743\u9650\u4E0E\u8FD0\u884C\u65F6\u6CBB\u7406\u3002",
      links: [
        { title: "Agent \u67B6\u6784", href: "/ai/ai-agent-architecture/" },
        { title: "\u5DE5\u5177\u6743\u9650\u6CBB\u7406", href: "/ai/ai-agent-tool-authorization-policy-gate/" },
        { title: "Memory \u67B6\u6784", href: "/ai/ai-agent-memory-architecture/" }
      ]
    },
    {
      title: "MCP",
      href: "/ai/mcp/",
      desc: "Server\u3001Transport\u3001OAuth\u3001\u6743\u9650\u3001\u5B89\u5168\u4E0E\u534F\u8BAE\u6392\u969C\u3002",
      links: [
        { title: "MCP -32700 / JSON-RPC Parse Error", href: "/ai/mcp-json-rpc-parse-error/" },
        { title: "MCP vs Function Calling", href: "/ai/mcp-vs-function-calling/" },
        { title: "Streamable HTTP", href: "/ai/mcp-streamable-http-deployment/" }
      ]
    },
    {
      title: "LangGraph",
      href: "/ai/langgraph/",
      desc: "\u72B6\u6001\u3001Checkpoint\u3001HITL\u3001\u5931\u8D25\u6062\u590D\u3001\u5E76\u53D1\u4E0E\u53EF\u89C2\u6D4B\u6027\u3002",
      links: [
        { title: "\u72B6\u6001\u9694\u79BB", href: "/ai/langgraph-thread-session-state-isolation/" },
        { title: "HITL \u5BA1\u6279", href: "/ai/langgraph-human-in-the-loop-approval/" },
        { title: "\u5931\u8D25\u6062\u590D", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" }
      ]
    },
    {
      title: "Workflow Automation",
      href: "/ai/workflow/",
      desc: "n8n\u3001\u81EA\u6258\u7BA1\u3001Webhook\u3001\u961F\u5217\u3001\u91CD\u8BD5\u3001\u5E42\u7B49\u4E0E\u6210\u672C\u6CBB\u7406\u3002",
      links: [
        { title: "n8n \u81EA\u6258\u7BA1", href: "/ai/self-hosted-n8n-ai-workflows/" },
        { title: "\u9519\u8BEF\u5904\u7406\u4E0E\u6210\u672C", href: "/ai/n8n-ai-workflow-error-handling/" },
        { title: "Queue Mode", href: "/ai/n8n-queue-mode-redis-worker/" }
      ]
    },
    {
      title: "AI Tools Lab",
      href: "/ai/tools-lab/",
      desc: "\u53EA\u505A\u771F\u5B9E\u9879\u76EE\u548C\u660E\u786E\u4EFB\u52A1\u4E0A\u7684\u6A21\u578B\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u4E0E\u81EA\u52A8\u5316\u5DE5\u5177\u6D4B\u8BD5\u3002",
      links: [
        { title: "AI Tools Lab", href: "/ai/tools-lab/" },
        { title: "Model Updates", href: "/ai/model-updates/" },
        { title: "GPT-5.6 \u5B9E\u6D4B", href: "/ai/tools-lab/gpt56-test/" }
      ]
    },
    {
      title: "Local AI",
      href: "/ai/local-ai/",
      desc: "iPhone\u3001Android\u3001Core ML\u3001ONNX\u3001llama.cpp\u3001\u6A21\u578B\u4F53\u79EF\u3001\u53D1\u70ED\u3001\u6027\u80FD\u548C\u9690\u79C1\u8FB9\u754C\u3002",
      links: [
        { title: "Local AI", href: "/ai/local-ai/" },
        { title: "\u7AEF\u4FA7\u96C6\u6210\u8FB9\u754C", href: "/ai/local-ai/" },
        { title: "\u79FB\u52A8\u7AEF\u5B9E\u8DF5", href: "/ai/local-ai/" }
      ]
    }
  ];
  const featured = [
    { type: "GUIDE", title: "AI Agent \u5168\u6808\u6307\u5357\uFF1A\u4ECE\u67B6\u6784\u5230\u751F\u4EA7\u6CBB\u7406", href: "/ai/ai-agent-complete-guide/", desc: "\u5148\u5EFA\u7ACB Agent\u3001Workflow\u3001Memory\u3001RAG\u3001Tool Use \u4E0E\u751F\u4EA7\u6CBB\u7406\u7684\u7CFB\u7EDF\u8FB9\u754C\u3002" },
    { type: "MCP", title: "MCP \u548C Function Calling \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u771F\u5B9E\u9879\u76EE\u9009\u578B", href: "/ai/mcp-vs-function-calling/", desc: "\u4ECE\u534F\u8BAE\u5C42\u3001\u5DE5\u5177\u63A5\u5165\u3001\u6743\u9650\u548C\u5BA2\u6237\u7AEF\u590D\u7528\u5224\u65AD\u5E94\u8BE5\u7528\u54EA\u4E00\u79CD\u3002" },
    { type: "LANGGRAPH", title: "LangGraph \u72B6\u6001\u9694\u79BB\u5B9E\u6218", href: "/ai/langgraph-thread-session-state-isolation/", desc: "thread_id\u3001session_id\u3001user_id \u7684\u8FB9\u754C\u548C\u6301\u4E45\u5316\u8BBE\u8BA1\u3002" },
    { type: "WORKFLOW", title: "Self-hosted n8n AI Workflows", href: "/ai/self-hosted-n8n-ai-workflows/", desc: "Docker\u3001VPS\u3001NAS\u3001\u81EA\u6258\u7BA1\u4E0E\u751F\u4EA7\u8FD0\u884C\u7684\u5B8C\u6574\u8DEF\u5F84\u3002" },
    { type: "SECURITY", title: "AI Agent Tool Authorization Policy Gate", href: "/ai/ai-agent-tool-authorization-policy-gate/", desc: "\u9AD8\u98CE\u9669\u5DE5\u5177\u8C03\u7528\u524D\u7684\u6388\u6743\u3001\u5BA1\u6279\u3001\u62D2\u7EDD\u548C\u5BA1\u8BA1\u3002" },
    { type: "LAB", title: "GPT-5.6 \u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4", href: "/ai/tools-lab/gpt56-test/", desc: "\u7528\u771F\u5B9E\u9879\u76EE\u4EFB\u52A1\u5224\u65AD\u6A21\u578B\u80FD\u529B\u63D0\u5347\u662F\u5426\u771F\u7684\u6539\u53D8\u5F00\u53D1\u6D41\u7A0B\u3002" }
  ];
  const popularTopics = [
    { title: "MCP", href: "/ai/mcp/" },
    { title: "LangGraph", href: "/ai/langgraph/" },
    { title: "AI Agent", href: "/ai/agent/" },
    { title: "Workflow", href: "/ai/workflow/" },
    { title: "RAG", href: "/ai/ai-agent-rag-integration/" },
    { title: "Evaluation", href: "/ai/ai-agent-evaluation-guide/" }
  ];
  const sidebars = [
    {
      title: "\u4E13\u9898\u5BFC\u822A",
      links: [
        { title: "AI Agent", href: "/ai/agent/" },
        { title: "MCP", href: "/ai/mcp/" },
        { title: "LangGraph", href: "/ai/langgraph/" },
        { title: "Workflow", href: "/ai/workflow/" },
        { title: "AI Tools Lab", href: "/ai/tools-lab/" }
      ]
    },
    {
      title: "\u4EA7\u54C1\u4E0E\u5DE5\u5177",
      links: [
        { title: "AI Finance", href: "/tools/ai-finance/" },
        { title: "\u590D\u5229\u8BA1\u7B97\u5668", href: "/tools/compound-calculator/" },
        { title: "\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u4EA7\u54C1", href: "/tools/" }
      ]
    },
    {
      title: "\u7D22\u5F15\u4E0E\u5F52\u6863",
      links: [
        { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" },
        { title: "\u5185\u5BB9\u5F52\u6863", href: "/archive/" },
        { title: "AI \u6807\u7B7E\u7D22\u5F15", href: "/tags/" }
      ]
    }
  ];
  const description = "XBSTACK AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93\uFF0C\u56F4\u7ED5 AI Agent\u3001MCP\u3001LangGraph\u3001Workflow\u3001\u6A21\u578B\u5DE5\u5177\u4E0E\u7AEF\u4FA7 AI \u7684\u771F\u5B9E\u5F00\u53D1\u95EE\u9898\uFF0C\u6574\u7406\u67B6\u6784\u3001\u72B6\u6001\u3001\u6743\u9650\u3001\u90E8\u7F72\u3001\u8BC4\u6D4B\u3001\u53EF\u89C2\u6D4B\u6027\u4E0E\u6545\u969C\u6392\u67E5\u3002";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "XBSTACK AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93",
    url: "https://www.xbstack.com/ai/",
    description,
    inLanguage: "zh-CN"
  };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93\uFF1AAgent\u3001MCP\u3001LangGraph \u4E0E Workflow | XBSTACK", "description": description, "keywords": "AI \u5DE5\u7A0B, AI Agent, MCP, LangGraph, Workflow, RAG, Agent Runtime, Evaluation, AI Tools", "hubTitle": "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93", "eyebrow": "AI Engineering Knowledge System", "intro": "\u4ECE\u67B6\u6784\u9009\u578B\u5230\u751F\u4EA7\u6392\u969C\uFF0C\u96C6\u4E2D\u6574\u7406 AI Agent\u3001MCP\u3001LangGraph\u3001Workflow \u4E0E\u7AEF\u4FA7 AI \u7684\u771F\u5B9E\u5F00\u53D1\u95EE\u9898\u3002\u6BCF\u4E2A\u4E3B\u9898\u90FD\u5C3D\u91CF\u7ED9\u51FA\u53EF\u590D\u73B0\u7684\u65B9\u6CD5\u3001\u8FB9\u754C\u548C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002", "searchPlaceholder": "\u641C\u7D22 AI \u5DE5\u7A0B\u95EE\u9898\u3001\u62A5\u9519\u3001\u6846\u67B6\u3001\u5DE5\u5177\u6216\u751F\u4EA7\u5B9E\u8DF5\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "XBSTACK \u7684 AI \u5185\u5BB9\u6309\u95EE\u9898\u57DF\u7EC4\u7EC7\uFF1AAgent \u8D1F\u8D23\u52A8\u6001\u51B3\u7B56\u4E0E\u5DE5\u5177\u8C03\u7528\uFF0CMCP \u8D1F\u8D23\u6A21\u578B\u4E0E\u5DE5\u5177\u7684\u6807\u51C6\u8FDE\u63A5\uFF0CLangGraph \u8D1F\u8D23\u6709\u72B6\u6001\u7F16\u6392\u4E0E\u6062\u590D\uFF0CWorkflow \u8D1F\u8D23\u786E\u5B9A\u6027\u4E1A\u52A1\u81EA\u52A8\u5316\u3002\u590D\u6742\u7CFB\u7EDF\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\uFF0C\u4F46\u4E0D\u5E94\u628A\u6240\u6709\u95EE\u9898\u90FD\u585E\u8FDB\u540C\u4E00\u4E2A\u6846\u67B6\u3002", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/ai/", "lang": "zh-CN" })}`;
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
