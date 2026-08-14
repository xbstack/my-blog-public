import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Langgraph = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex");
  const posts = all.filter((entry) => entry.id.toLowerCase().includes("langgraph") || (entry.data.tags || []).some((tag) => String(tag).toLowerCase().includes("langgraph"))).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
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
      title: "State\u3001Checkpoint \u4E0E\u6301\u4E45\u5316",
      href: "/ai/langgraph-checkpointer-memory-sqlite-redis/",
      desc: "State Schema\u3001Checkpoint\u3001Memory\u3001SQLite / Redis \u6301\u4E45\u5316\uFF0C\u4EE5\u53CA\u6062\u590D\u65F6\u5230\u5E95\u6062\u590D\u54EA\u4E00\u5C42\u72B6\u6001\u3002",
      links: [
        { title: "Checkpointer / Memory", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/" },
        { title: "\u72B6\u6001\u9694\u79BB", href: "/ai/langgraph-thread-session-state-isolation/" },
        { title: "\u751F\u4EA7 Memory", href: "/ai/langgraph-memory-checkpointing-production-agents/" }
      ]
    },
    {
      title: "Thread\u3001Session \u4E0E\u7528\u6237\u72B6\u6001\u9694\u79BB",
      href: "/ai/langgraph-thread-session-state-isolation/",
      desc: "thread_id\u3001session_id\u3001user_id \u7684\u804C\u8D23\u3001\u547D\u540D\u548C\u8FB9\u754C\uFF0C\u907F\u514D\u8DE8\u7528\u6237\u3001\u8DE8\u4F1A\u8BDD\u72B6\u6001\u6C61\u67D3\u3002",
      links: [
        { title: "thread_id \u8BBE\u8BA1", href: "/ai/langgraph-thread-session-state-isolation/" },
        { title: "Subgraph State", href: "/ai/langgraph-subgraph-worker-state/" },
        { title: "Checkpoint \u8FB9\u754C", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/" }
      ]
    },
    {
      title: "Human-in-the-loop \u4E0E\u5BA1\u6279\u6062\u590D",
      href: "/ai/langgraph-human-in-the-loop-approval/",
      desc: "Interrupt\u3001Resume\u3001\u4EBA\u5DE5\u5BA1\u6279\u3001\u8DE8\u8FDB\u7A0B\u6062\u590D\u548C\u9AD8\u98CE\u9669\u52A8\u4F5C\u7684\u4EBA\u673A\u534F\u540C\u8FB9\u754C\u3002",
      links: [
        { title: "HITL \u5BA1\u6279\u6D41", href: "/ai/langgraph-human-in-the-loop-approval/" },
        { title: "Interrupt / Resume", href: "/ai/langgraph-human-in-the-loop-approval/" },
        { title: "\u8DE8\u8FDB\u7A0B\u6062\u590D\u53C2\u8003", href: "/ai/openai-agents-sdk-runstate-approval-resume/" }
      ]
    },
    {
      title: "\u5931\u8D25\u6062\u590D\u3001Timeout \u4E0E\u5E42\u7B49",
      href: "/ai/langgraph-agent-error-recovery-retry-timeout/",
      desc: "Tool Error\u3001Timeout\u3001Retry\u3001\u53D6\u6D88\u3001\u91CD\u590D\u6062\u590D\u4E0E\u526F\u4F5C\u7528\u63A7\u5236\uFF0C\u786E\u4FDD\u5931\u8D25\u540E\u56DE\u5230\u6B63\u786E\u72B6\u6001\u3002",
      links: [
        { title: "\u5931\u8D25\u6062\u590D\u5B9E\u6218", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" },
        { title: "Cancel / Checkpoint", href: "/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/" },
        { title: "\u91CD\u8BD5\u4E0E\u8D85\u65F6", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" }
      ]
    },
    {
      title: "\u5E76\u53D1\u3001ToolNode \u4E0E Subgraph",
      href: "/ai/langgraph-toolnode-max-concurrency-ignored/",
      desc: "\u5E76\u53D1\u4E0A\u9650\u3001ToolNode\u3001Worker\u3001Subgraph \u4E0E\u5171\u4EAB\u72B6\u6001\uFF0C\u5904\u7406\u590D\u6742 Agent \u7684\u5E76\u884C\u6267\u884C\u8FB9\u754C\u3002",
      links: [
        { title: "ToolNode \u5E76\u53D1", href: "/ai/langgraph-toolnode-max-concurrency-ignored/" },
        { title: "Subgraph Worker State", href: "/ai/langgraph-subgraph-worker-state/" },
        { title: "Supervisor / Worker", href: "/ai/langgraph-supervisor-worker-handoff/" }
      ]
    },
    {
      title: "Observability \u4E0E\u751F\u4EA7\u6CBB\u7406",
      href: "/ai/langgraph-observability-agent-trace/",
      desc: "Trace\u3001\u51B3\u7B56\u8DEF\u5F84\u3001\u72B6\u6001\u53D8\u5316\u3001\u5931\u8D25\u94FE\u8DEF\u3001\u5BA1\u8BA1\u4E0E\u751F\u4EA7\u6545\u969C\u5B9A\u4F4D\uFF0C\u8BA9 Agent \u7684\u884C\u4E3A\u53EF\u4EE5\u88AB\u89E3\u91CA\u3002",
      links: [
        { title: "Observability \u5B9E\u6218", href: "/ai/langgraph-observability-agent-trace/" },
        { title: "\u751F\u4EA7\u6CBB\u7406", href: "/ai/ai-agent-production-governance/" },
        { title: "\u5931\u8D25\u94FE\u8DEF\u8FFD\u8E2A", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" }
      ]
    }
  ];
  const featured = [
    { type: "STATE", title: "LangGraph \u72B6\u6001\u9694\u79BB\uFF1Athread_id\u3001session_id\u3001user_id \u600E\u4E48\u8BBE\u8BA1", href: "/ai/langgraph-thread-session-state-isolation/", desc: "\u628A\u4F1A\u8BDD\u3001\u7528\u6237\u548C\u4E1A\u52A1\u72B6\u6001\u7684\u8FB9\u754C\u4E00\u6B21\u5206\u6E05\u3002" },
    { type: "HITL", title: "LangGraph Human-in-the-loop\uFF1A\u591A\u667A\u80FD\u4F53\u5BA1\u6279\u6D41\u600E\u4E48\u505A", href: "/ai/langgraph-human-in-the-loop-approval/", desc: "Interrupt\u3001Resume \u4E0E\u4EBA\u5DE5\u5BA1\u6279\u7684\u751F\u4EA7\u5B9E\u73B0\u3002" },
    { type: "FIX", title: "LangGraph \u591A\u667A\u80FD\u4F53\u5931\u8D25\u6062\u590D\uFF1ATool Error\u3001Timeout \u4E0E\u91CD\u8BD5\u7B56\u7565", href: "/ai/langgraph-agent-error-recovery-retry-timeout/", desc: "\u5931\u8D25\u540E\u600E\u4E48\u56DE\u5230\u6B63\u786E\u72B6\u6001\uFF0C\u5E76\u907F\u514D\u91CD\u590D\u526F\u4F5C\u7528\u3002" },
    { type: "OBSERVABILITY", title: "LangGraph Observability\uFF1A\u8FFD\u8E2A\u6BCF\u4E2A Agent \u7684\u51B3\u7B56\u8DEF\u5F84", href: "/ai/langgraph-observability-agent-trace/", desc: "\u8BA9\u72B6\u6001\u3001\u5DE5\u5177\u8C03\u7528\u548C\u5931\u8D25\u8DEF\u5F84\u771F\u6B63\u53EF\u89C1\u3002" },
    { type: "PERSISTENCE", title: "LangGraph Checkpointer\uFF1AMemory\u3001SQLite \u4E0E Redis", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/", desc: "\u4E0D\u540C\u6301\u4E45\u5316\u540E\u7AEF\u7684\u804C\u8D23\u548C\u4F7F\u7528\u8FB9\u754C\u3002" },
    { type: "LAB", title: "LangGraph Cancel / Streaming / Checkpoint State Loss", href: "/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/", desc: "\u7528\u771F\u5B9E\u5B9E\u9A8C\u9A8C\u8BC1\u53D6\u6D88\u4E0E\u72B6\u6001\u843D\u76D8\u7684\u65F6\u5E8F\u8FB9\u754C\u3002" }
  ];
  const popularTopics = [
    { title: "State", href: "/ai/langgraph-thread-session-state-isolation/" },
    { title: "Checkpoint", href: "/ai/langgraph-checkpointer-memory-sqlite-redis/" },
    { title: "HITL", href: "/ai/langgraph-human-in-the-loop-approval/" },
    { title: "Recovery", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" },
    { title: "Concurrency", href: "/ai/langgraph-toolnode-max-concurrency-ignored/" },
    { title: "Observability", href: "/ai/langgraph-observability-agent-trace/" }
  ];
  const sidebars = [
    {
      title: "\u4E13\u9898\u5BFC\u822A",
      links: [
        { title: "\u72B6\u6001\u9694\u79BB", href: "/ai/langgraph-thread-session-state-isolation/" },
        { title: "HITL \u5BA1\u6279", href: "/ai/langgraph-human-in-the-loop-approval/" },
        { title: "\u5931\u8D25\u6062\u590D", href: "/ai/langgraph-agent-error-recovery-retry-timeout/" },
        { title: "Observability", href: "/ai/langgraph-observability-agent-trace/" }
      ]
    },
    {
      title: "\u76F8\u5173\u4E13\u9898",
      links: [
        { title: "AI Agent", href: "/ai/agent/" },
        { title: "MCP", href: "/ai/mcp/" },
        { title: "Workflow", href: "/ai/workflow/" },
        { title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93", href: "/ai/" }
      ]
    },
    {
      title: "\u76F8\u5173\u8D44\u6E90",
      links: [
        { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" },
        { title: "\u5185\u5BB9\u5F52\u6863", href: "/archive/" },
        { title: "\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u4EA7\u54C1", href: "/tools/" }
      ]
    }
  ];
  const description = "XBSTACK LangGraph \u72B6\u6001\u7BA1\u7406\u4E0E Agent \u7F16\u6392\u4E13\u9898\uFF0C\u8986\u76D6 State\u3001Checkpoint\u3001Thread\u3001Session\u3001HITL\u3001Interrupt\u3001Resume\u3001\u5931\u8D25\u6062\u590D\u3001\u5E76\u53D1\u3001Subgraph\u3001ToolNode\u3001Observability \u4E0E\u751F\u4EA7\u6CBB\u7406\u3002";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "LangGraph \u72B6\u6001\u7BA1\u7406\u4E0E Agent \u7F16\u6392", url: "https://www.xbstack.com/ai/langgraph/", description, inLanguage: "zh-CN" };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "LangGraph \u72B6\u6001\u7BA1\u7406\u4E0E Agent \u7F16\u6392\uFF1ACheckpoint\u3001HITL \u4E0E\u6062\u590D | XBSTACK", "description": description, "keywords": "LangGraph, State, Checkpoint, HITL, Interrupt, Resume, Agent Recovery, ToolNode, Subgraph, Observability", "hubTitle": "LangGraph \u72B6\u6001\u7BA1\u7406\u4E0E Agent \u7F16\u6392", "eyebrow": "LangGraph Stateful Agent Engineering Hub", "intro": "\u56F4\u7ED5 State\u3001Checkpoint\u3001Thread\u3001HITL\u3001\u5931\u8D25\u6062\u590D\u3001\u5E76\u53D1\u4E0E\u53EF\u89C2\u6D4B\u6027\uFF0C\u628A LangGraph \u4ECE\u201C\u6D41\u7A0B\u56FE\u201D\u63A8\u8FDB\u5230\u53EF\u6062\u590D\u3001\u53EF\u8FFD\u8E2A\u3001\u53EF\u6CBB\u7406\u7684\u751F\u4EA7\u7EA7 Agent \u7CFB\u7EDF\u3002", "searchPlaceholder": "\u641C\u7D22 LangGraph \u72B6\u6001\u3001Checkpoint\u3001HITL\u3001\u5E76\u53D1\u3001\u6062\u590D\u6216 Trace \u95EE\u9898\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "LangGraph \u7684\u6838\u5FC3\u4EF7\u503C\u4E0D\u662F\u628A\u6D41\u7A0B\u753B\u6210\u56FE\uFF0C\u800C\u662F\u628A\u72B6\u6001\u3001\u6682\u505C\u3001\u6062\u590D\u3001\u5E76\u53D1\u548C\u5931\u8D25\u8FB9\u754C\u663E\u5F0F\u5316\u3002\u5982\u679C\u4E1A\u52A1\u53EA\u662F\u5355\u8F6E\u8C03\u7528\u6216\u56FA\u5B9A\u6D41\u7A0B\uFF0C\u4E0D\u5FC5\u4E3A\u4E86\u67B6\u6784\u611F\u5F3A\u884C\u5F15\u5165\u56FE\u7F16\u6392\u3002", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/ai/langgraph/", "lang": "zh-CN" })}`;
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
