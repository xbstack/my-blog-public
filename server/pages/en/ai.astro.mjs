import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang === "en" && data.indexing !== "noindex" && data.translationStatus !== "machine")).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const imageSrc = (image) => typeof image === "string" ? image : image?.src || "";
  const latest = posts.slice(0, 10).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: imageSrc(entry.data.image),
    desc: entry.data.description || "",
    meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const areas = [
    { title: "AI Agent", href: "/en/ai/agent/", desc: "Architecture, tool use, memory, RAG, evaluation, permissions and runtime governance.", links: [
      { title: "Agent architecture", href: "/en/ai/ai-agent-architecture/" },
      { title: "Tool authorization", href: "/en/ai/ai-agent-tool-authorization-policy-gate/" },
      { title: "Memory architecture", href: "/en/ai/ai-agent-memory-architecture/" }
    ] },
    { title: "MCP", href: "/en/ai/mcp/", desc: "Servers, transports, OAuth, permissions, security and protocol troubleshooting.", links: [
      { title: "MCP -32700 / JSON-RPC Parse Error", href: "/en/ai/mcp-json-rpc-parse-error/" },
      { title: "MCP vs Function Calling", href: "/en/ai/mcp-vs-function-calling/" },
      { title: "Streamable HTTP", href: "/en/ai/mcp-streamable-http-deployment/" }
    ] },
    { title: "LangGraph", href: "/en/ai/langgraph/", desc: "State, checkpoints, HITL, failure recovery, concurrency and observability.", links: [
      { title: "State isolation", href: "/en/ai/langgraph-thread-session-state-isolation/" },
      { title: "HITL approval", href: "/en/ai/langgraph-human-in-the-loop-approval/" },
      { title: "Failure recovery", href: "/en/ai/langgraph-agent-error-recovery-retry-timeout/" }
    ] },
    { title: "Workflow Automation", href: "/en/ai/workflow/", desc: "n8n, self-hosting, webhooks, queues, retries, idempotency and cost governance.", links: [
      { title: "Self-hosted n8n", href: "/en/ai/self-hosted-n8n-ai-workflows/" },
      { title: "Error handling and cost", href: "/en/ai/n8n-ai-workflow-error-handling/" },
      { title: "Queue Mode", href: "/en/ai/n8n-queue-mode-redis-worker/" }
    ] },
    { title: "AI Tools Lab", href: "/en/ai/tools-lab/", desc: "Model and AI-tool tests based on real projects and explicit tasks.", links: [
      { title: "AI Tools Lab", href: "/en/ai/tools-lab/" },
      { title: "Model Updates", href: "/en/ai/model-updates/" },
      { title: "GPT-5.6 real project test", href: "/en/ai/tools-lab/gpt56-test/" }
    ] },
    { title: "Local AI", href: "/en/ai/local-ai/", desc: "iPhone, Android, Core ML, ONNX, llama.cpp, model size, heat, performance and privacy.", links: [
      { title: "Local AI", href: "/en/ai/local-ai/" },
      { title: "On-device integration", href: "/en/ai/local-ai/" },
      { title: "Mobile practice", href: "/en/ai/local-ai/" }
    ] }
  ];
  const featured = [
    { type: "GUIDE", title: "AI Agent Full Guide: From Architecture to Production Governance", href: "/en/ai/ai-agent-complete-guide/", desc: "Build the system boundary across agents, workflows, memory, RAG, tool use and production governance." },
    { type: "MCP", title: "MCP vs Function Calling: Real Project Selection", href: "/en/ai/mcp-vs-function-calling/", desc: "Compare protocol boundaries, permissions, tool integration and client reuse." },
    { type: "LANGGRAPH", title: "LangGraph State Isolation in Practice", href: "/en/ai/langgraph-thread-session-state-isolation/", desc: "Design thread_id, session_id and user_id boundaries and persistence." },
    { type: "WORKFLOW", title: "Self-hosted n8n AI Workflows", href: "/en/ai/self-hosted-n8n-ai-workflows/", desc: "Docker, VPS, NAS, self-hosting and production operations." },
    { type: "SECURITY", title: "AI Agent Tool Authorization Policy Gate", href: "/en/ai/ai-agent-tool-authorization-policy-gate/", desc: "Authorization, approval, rejection and auditing before high-risk tool calls." },
    { type: "LAB", title: "GPT-5.6 Real Project Test", href: "/en/ai/tools-lab/gpt56-test/", desc: "Test whether model improvements materially change real development workflows." }
  ];
  const popularTopics = [
    { title: "MCP", href: "/en/ai/mcp/" },
    { title: "LangGraph", href: "/en/ai/langgraph/" },
    { title: "AI Agent", href: "/en/ai/agent/" },
    { title: "Workflow", href: "/en/ai/workflow/" },
    { title: "RAG", href: "/en/ai/ai-agent-rag-integration/" },
    { title: "Evaluation", href: "/en/ai/ai-agent-evaluation-guide/" }
  ];
  const sidebars = [
    { title: "Topic Navigation", links: [
      { title: "AI Agent", href: "/en/ai/agent/" },
      { title: "MCP", href: "/en/ai/mcp/" },
      { title: "LangGraph", href: "/en/ai/langgraph/" },
      { title: "Workflow", href: "/en/ai/workflow/" },
      { title: "AI Tools Lab", href: "/en/ai/tools-lab/" }
    ] },
    { title: "Products & Tools", links: [
      { title: "AI Finance", href: "/en/tools/ai-finance/" },
      { title: "Compound Calculator", href: "/en/tools/compound-calculator/" },
      { title: "Developer Tools & Products", href: "/en/tools/" }
    ] },
    { title: "Indexes", links: [
      { title: "Site Search", href: "/en/search/" },
      { title: "Archive", href: "/en/archive/" },
      { title: "AI Topics", href: "/en/tags/" }
    ] }
  ];
  const description = "XBSTACK AI Engineering Knowledge Base for real AI Agent, MCP, LangGraph, Workflow, model-tool and on-device AI problems, covering architecture, state, permissions, deployment, evaluation, observability and troubleshooting.";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "XBSTACK AI Engineering Knowledge Base", url: "https://www.xbstack.com/en/ai/", description, inLanguage: "en" };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI Engineering Knowledge Base: Agents, MCP, LangGraph & Workflow | XBSTACK", "description": description, "keywords": "AI Engineering, AI Agent, MCP, LangGraph, Workflow, RAG, Agent Runtime, Evaluation, AI Tools", "hubTitle": "AI Engineering Knowledge Base", "intro": "From architecture choices to production troubleshooting, this hub organizes real AI Agent, MCP, LangGraph, Workflow and on-device AI problems. Each topic aims to provide reproducible methods, constraints and a concrete next step.", "searchPlaceholder": "Search AI engineering problems, errors, frameworks, tools or production practice\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "XBSTACK organizes AI engineering by problem domain: Agents handle dynamic decisions and tool use, MCP standardizes model-to-tool connections, LangGraph manages stateful orchestration and recovery, and Workflow handles deterministic business automation. Complex systems can combine them, but not every problem belongs in one framework.", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/en/ai/", "lang": "en", "alternates": [{ lang: "en", href: "https://www.xbstack.com/en/ai/" }, { lang: "zh-CN", href: "https://www.xbstack.com/ai/" }, { lang: "x-default", href: "https://www.xbstack.com/ai/" }] })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/en/ai/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/en/ai/index.astro";
const $$url = "/en/ai/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
