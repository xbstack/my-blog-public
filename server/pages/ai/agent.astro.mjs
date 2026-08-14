import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Agent = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex");
  const posts = all.filter((entry) => entry.id.toLowerCase().includes("agent") || (entry.data.tags || []).some((tag) => String(tag).toLowerCase().includes("agent"))).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
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
      title: "Agent Architecture \u4E0E Runtime",
      href: "/ai/ai-agent-architecture/",
      desc: "\u5355 Agent\u3001\u591A Agent\u3001Planner / Executor\u3001Runtime\u3001\u4EFB\u52A1\u8FB9\u754C\u548C\u7CFB\u7EDF\u7EC4\u4EF6\uFF0C\u5148\u8BC1\u660E\u4E3A\u4EC0\u4E48\u9700\u8981 Agent\u3002",
      links: [
        { title: "Agent Architecture", href: "/ai/ai-agent-architecture/" },
        { title: "Agent vs Workflow", href: "/ai/ai-agent-vs-workflow-automation/" },
        { title: "Framework Comparison", href: "/ai/ai-agent-framework-comparison/" }
      ]
    },
    {
      title: "Tool Use \u4E0E\u6743\u9650\u63A7\u5236",
      href: "/ai/ai-agent-tool-use/",
      desc: "\u5DE5\u5177\u9009\u62E9\u3001Schema\u3001\u5931\u8D25\u56DE\u9000\u3001\u6743\u9650\u95E8\u7981\u3001\u5BA1\u6279\u548C\u5BA1\u8BA1\uFF0C\u907F\u514D\u6A21\u578B\u62E5\u6709\u4E0D\u5FC5\u8981\u7684\u6267\u884C\u6743\u9650\u3002",
      links: [
        { title: "Tool Use", href: "/ai/ai-agent-tool-use/" },
        { title: "Authorization Policy Gate", href: "/ai/ai-agent-tool-authorization-policy-gate/" },
        { title: "OpenAI RunState Approval", href: "/ai/openai-agents-sdk-runstate-approval-resume/" }
      ]
    },
    {
      title: "Memory\u3001RAG \u4E0E\u4E0A\u4E0B\u6587\u6CBB\u7406",
      href: "/ai/ai-agent-memory-architecture/",
      desc: "\u77ED\u671F\u8BB0\u5FC6\u3001\u957F\u671F\u8BB0\u5FC6\u3001\u7528\u6237\u6001\u3001\u4E1A\u52A1\u6001\u3001RAG \u4E0E\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF0C\u660E\u786E\u54EA\u4E9B\u4FE1\u606F\u5E94\u8BE5\u8FDB\u5165 Agent \u72B6\u6001\u3002",
      links: [
        { title: "Memory Architecture", href: "/ai/ai-agent-memory-architecture/" },
        { title: "Memory Implementation", href: "/ai/ai-agent-memory-implementation/" },
        { title: "RAG Integration", href: "/ai/ai-agent-rag-integration/" }
      ]
    },
    {
      title: "Planning \u4E0E\u591A\u667A\u80FD\u4F53\u534F\u4F5C",
      href: "/ai/ai-agent-planning/",
      desc: "\u4EFB\u52A1\u5206\u89E3\u3001Planner\u3001Supervisor\u3001Worker\u3001Handoff \u4E0E Multi-Agent Systems\uFF0C\u63A7\u5236\u590D\u6742\u5EA6\u800C\u4E0D\u662F\u65E0\u9650\u52A0\u89D2\u8272\u3002",
      links: [
        { title: "Agent Planning", href: "/ai/ai-agent-planning/" },
        { title: "Multi-Agent Planning", href: "/ai/multi-agent-planning/" },
        { title: "Multi-Agent Systems", href: "/ai/multi-agent-systems/" }
      ]
    },
    {
      title: "Evaluation \u4E0E Observability",
      href: "/ai/ai-agent-evaluation-guide/",
      desc: "\u4EFB\u52A1\u7EA7\u8BC4\u6D4B\u3001Golden Dataset\u3001Trace\u3001\u5DE5\u5177\u8C03\u7528\u8DEF\u5F84\u548C\u7EBF\u4E0A\u884C\u4E3A\u9A8C\u8BC1\uFF0C\u907F\u514D\u53EA\u770B Demo \u6210\u529F\u6848\u4F8B\u3002",
      links: [
        { title: "Evaluation Guide", href: "/ai/ai-agent-evaluation-guide/" },
        { title: "Agent Observability", href: "/ai/ai-agent-observability/" },
        { title: "Golden Dataset", href: "/ai/ai-financial-report-evaluation-golden-dataset/" }
      ]
    },
    {
      title: "Production\u3001Security \u4E0E Deployment",
      href: "/ai/ai-agent-production-governance/",
      desc: "\u90E8\u7F72\u3001\u6743\u9650\u3001\u6210\u672C\u3001\u5931\u8D25\u6062\u590D\u3001\u7248\u672C\u3001\u4EBA\u5DE5\u515C\u5E95\u548C\u5B89\u5168\u6CBB\u7406\uFF0C\u628A Agent \u4ECE\u53EF\u8FD0\u884C\u63A8\u8FDB\u5230\u53EF\u8FD0\u8425\u3002",
      links: [
        { title: "Production Governance", href: "/ai/ai-agent-production-governance/" },
        { title: "Agent Security", href: "/ai/ai-agent-security/" },
        { title: "Agent Deployment", href: "/ai/ai-agent-deployment/" }
      ]
    }
  ];
  const featured = [
    { type: "ARCHITECTURE", title: "AI Agent Architecture\uFF1A\u751F\u4EA7\u7CFB\u7EDF\u600E\u4E48\u62C6", href: "/ai/ai-agent-architecture/", desc: "\u5148\u5EFA\u7ACB Agent\u3001Tool\u3001Memory\u3001RAG\u3001Runtime \u4E0E\u4E1A\u52A1\u7CFB\u7EDF\u7684\u8FB9\u754C\u3002" },
    { type: "SECURITY", title: "AI Agent Tool Authorization\uFF1A\u5DE5\u5177\u8C03\u7528\u524D\u5982\u4F55\u505A\u6743\u9650\u95E8\u7981", href: "/ai/ai-agent-tool-authorization-policy-gate/", desc: "\u5141\u8BB8\u3001\u62D2\u7EDD\u3001\u5BA1\u6279\u3001\u5BA1\u8BA1\u56DB\u79CD\u6388\u6743\u7ED3\u679C\u3002" },
    { type: "MEMORY", title: "AI Agent Memory Architecture\uFF1A\u77ED\u671F\u3001\u957F\u671F\u4E0E\u7528\u6237\u6001\u8BB0\u5FC6", href: "/ai/ai-agent-memory-architecture/", desc: "\u628A\u4F1A\u8BDD\u3001\u7528\u6237\u548C\u4E1A\u52A1\u72B6\u6001\u5206\u5F00\u7BA1\u7406\u3002" },
    { type: "EVALUATION", title: "AI Agent Evaluation Guide", href: "/ai/ai-agent-evaluation-guide/", desc: "\u4ECE\u4EFB\u52A1\u7EA7\u901A\u8FC7\u7387\u3001\u5931\u8D25\u7C7B\u578B\u548C Golden Dataset \u5EFA\u7ACB\u53EF\u590D\u73B0\u8BC4\u6D4B\u3002" },
    { type: "OBSERVABILITY", title: "AI Agent Observability\uFF1A\u751F\u4EA7 Trace \u600E\u4E48\u770B", href: "/ai/ai-agent-observability/", desc: "\u628A\u6A21\u578B\u3001\u5DE5\u5177\u548C\u72B6\u6001\u53D8\u5316\u4E32\u6210\u53EF\u8FFD\u8E2A\u6267\u884C\u94FE\u3002" },
    { type: "PRODUCTION", title: "AI Agent Production Governance", href: "/ai/ai-agent-production-governance/", desc: "\u6743\u9650\u3001\u6062\u590D\u3001\u6210\u672C\u3001\u90E8\u7F72\u4E0E\u4EBA\u5DE5\u515C\u5E95\u7684\u751F\u4EA7\u6CBB\u7406\u3002" }
  ];
  const popularTopics = [
    { title: "Architecture", href: "/ai/ai-agent-architecture/" },
    { title: "Tool Use", href: "/ai/ai-agent-tool-use/" },
    { title: "Memory", href: "/ai/ai-agent-memory-architecture/" },
    { title: "RAG", href: "/ai/ai-agent-rag-integration/" },
    { title: "Evaluation", href: "/ai/ai-agent-evaluation-guide/" },
    { title: "Security", href: "/ai/ai-agent-security/" }
  ];
  const sidebars = [
    {
      title: "\u4E13\u9898\u5BFC\u822A",
      links: [
        { title: "Agent vs Workflow", href: "/ai/ai-agent-vs-workflow-automation/" },
        { title: "Tool Authorization", href: "/ai/ai-agent-tool-authorization-policy-gate/" },
        { title: "Memory Architecture", href: "/ai/ai-agent-memory-architecture/" },
        { title: "Production Governance", href: "/ai/ai-agent-production-governance/" }
      ]
    },
    {
      title: "\u76F8\u5173\u4E13\u9898",
      links: [
        { title: "MCP", href: "/ai/mcp/" },
        { title: "LangGraph", href: "/ai/langgraph/" },
        { title: "Workflow", href: "/ai/workflow/" },
        { title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93", href: "/ai/" }
      ]
    },
    {
      title: "\u5DE5\u5177\u4E0E\u7D22\u5F15",
      links: [
        { title: "AI Tools Lab", href: "/ai/tools-lab/" },
        { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" },
        { title: "\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u4EA7\u54C1", href: "/tools/" }
      ]
    }
  ];
  const description = "XBSTACK AI Agent \u67B6\u6784\u4E0E\u8FD0\u884C\u65F6\u4E13\u9898\uFF0C\u8986\u76D6 Agent Architecture\u3001Tool Use\u3001Memory\u3001RAG\u3001Planning\u3001Multi-Agent\u3001Evaluation\u3001Observability\u3001Security\u3001Deployment \u4E0E\u751F\u4EA7\u6CBB\u7406\u3002";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "AI Agent \u67B6\u6784\u4E0E\u8FD0\u884C\u65F6", url: "https://www.xbstack.com/ai/agent/", description, inLanguage: "zh-CN" };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI Agent \u67B6\u6784\u4E0E\u8FD0\u884C\u65F6\uFF1ATool\u3001Memory\u3001Evaluation \u4E0E\u751F\u4EA7\u6CBB\u7406 | XBSTACK", "description": description, "keywords": "AI Agent, Agent Architecture, Agent Runtime, Tool Use, Memory, RAG, Agent Evaluation, Agent Observability, Agent Security", "hubTitle": "AI Agent \u67B6\u6784\u4E0E\u8FD0\u884C\u65F6", "eyebrow": "AI Agent Engineering & Runtime Hub", "intro": "\u4ECE\u662F\u5426\u771F\u7684\u9700\u8981 Agent \u5F00\u59CB\uFF0C\u7CFB\u7EDF\u89E3\u51B3 Architecture\u3001Tool Use\u3001Memory\u3001RAG\u3001Planning\u3001Evaluation\u3001Permission\u3001Observability \u4E0E\u751F\u4EA7\u8FD0\u884C\u65F6\u95EE\u9898\u3002", "searchPlaceholder": "\u641C\u7D22 Agent \u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001Memory\u3001RAG\u3001\u8BC4\u6D4B\u3001\u6743\u9650\u6216\u90E8\u7F72\u95EE\u9898\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "Agent \u7684\u5DE5\u7A0B\u4EF7\u503C\u4E0D\u5728\u4E8E\u8BA9\u6A21\u578B\u62E5\u6709\u66F4\u591A\u81EA\u7531\uFF0C\u800C\u5728\u4E8E\u628A\u4E0D\u786E\u5B9A\u51B3\u7B56\u9650\u5236\u5728\u53EF\u8BC4\u6D4B\u3001\u53EF\u6388\u6743\u3001\u53EF\u6062\u590D\u7684\u8FD0\u884C\u65F6\u8FB9\u754C\u4E2D\u3002\u6D41\u7A0B\u56FA\u5B9A\u3001\u5931\u8D25\u89C4\u5219\u660E\u786E\u7684\u573A\u666F\u4F18\u5148\u4F7F\u7528 Workflow\u3002", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/ai/agent/", "lang": "zh-CN" })}`;
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
