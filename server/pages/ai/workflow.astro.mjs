import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Workflow = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex");
  const posts = all.filter((entry) => {
    const id = entry.id.toLowerCase();
    const tags = (entry.data.tags || []).map((tag) => String(tag).toLowerCase());
    return id.includes("n8n") || id.includes("workflow") || tags.some((tag) => tag.includes("n8n") || tag.includes("workflow"));
  }).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
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
      title: "\u81EA\u6258\u7BA1\u3001\u8FD0\u884C\u73AF\u5883\u4E0E\u5347\u7EA7",
      href: "/ai/self-hosted-n8n-ai-workflows/",
      desc: "Docker\u3001VPS\u3001NAS\u3001Database\u3001\u73AF\u5883\u53D8\u91CF\u3001\u5907\u4EFD\u548C\u5347\u7EA7\u8FB9\u754C\uFF0C\u5148\u628A\u5DE5\u4F5C\u6D41\u8FD0\u884C\u5E95\u5EA7\u7A33\u5B9A\u4E0B\u6765\u3002",
      links: [
        { title: "Self-host n8n", href: "/ai/self-hosted-n8n-ai-workflows/" },
        { title: "n8n Starter Kit", href: "/ai/n8n-ai-starter-kit/" },
        { title: "Distroless ARM64 \u6392\u969C", href: "/ai/n8n-distroless-arm64-glibc-error/" }
      ]
    },
    {
      title: "Triggers\u3001Webhook \u4E0E\u5165\u53E3\u6CBB\u7406",
      href: "/ai/n8n-webhook-production-hardening/",
      desc: "Webhook\u3001\u5B9A\u65F6\u4EFB\u52A1\u3001\u5916\u90E8\u4E8B\u4EF6\u3001\u7B7E\u540D\u6821\u9A8C\u3001\u901F\u7387\u9650\u5236\u4E0E\u5165\u53E3\u5B89\u5168\uFF0C\u907F\u514D\u89E6\u53D1\u7AEF\u6210\u4E3A\u751F\u4EA7\u8584\u5F31\u70B9\u3002",
      links: [
        { title: "Webhook Hardening", href: "/ai/n8n-webhook-production-hardening/" },
        { title: "Gmail Summarizer", href: "/ai/n8n-ai-gmail-summarizer-openai-google-sheets/" },
        { title: "Slack Daily Digest", href: "/ai/n8n-ai-slack-daily-digest-bot/" }
      ]
    },
    {
      title: "Queue\u3001Worker \u4E0E\u5E76\u53D1\u6269\u5C55",
      href: "/ai/n8n-queue-mode-redis-worker/",
      desc: "Redis\u3001Queue Mode\u3001Worker\u3001\u5E76\u53D1\u3001\u4EFB\u52A1\u5806\u79EF\u4E0E\u80CC\u538B\uFF0C\u628A\u91CD\u4EFB\u52A1\u4ECE\u4E3B\u5B9E\u4F8B\u4E2D\u89E3\u8026\u3002",
      links: [
        { title: "Queue Mode + Redis", href: "/ai/n8n-queue-mode-redis-worker/" },
        { title: "Task Queue", href: "/ai/ai-financial-report-task-queue/" },
        { title: "\u5E76\u53D1\u4E0E Worker", href: "/ai/n8n-queue-mode-redis-worker/" }
      ]
    },
    {
      title: "Retry\u3001Idempotency \u4E0E\u5931\u8D25\u6062\u590D",
      href: "/ai/n8n-ai-workflow-error-handling/",
      desc: "\u9519\u8BEF\u5206\u7EA7\u3001\u91CD\u8BD5\u3001\u5E42\u7B49\u3001\u8865\u507F\u548C\u5931\u8D25\u6062\u590D\uFF0C\u907F\u514D\u81EA\u52A8\u5316\u4EA7\u751F\u91CD\u590D\u5199\u5165\u4E0E\u9690\u6027\u526F\u4F5C\u7528\u3002",
      links: [
        { title: "Error Handling", href: "/ai/n8n-ai-workflow-error-handling/" },
        { title: "Agent \u4E0D\u8C03\u7528\u5DE5\u5177", href: "/ai/n8n-ai-agent-not-calling-tools/" },
        { title: "Baserow \u53C2\u6570\u4F9D\u8D56\u9519\u8BEF", href: "/ai/n8n-baserow-parameter-dependencies-activation-error/" }
      ]
    },
    {
      title: "\u51ED\u636E\u3001\u5B89\u5168\u4E0E\u5916\u90E8\u7CFB\u7EDF\u8FB9\u754C",
      href: "/ai/n8n-webhook-production-hardening/",
      desc: "Credentials\u3001Secret\u3001\u5916\u90E8 API\u3001\u6570\u636E\u5E93\u8D26\u53F7\u3001Webhook \u8EAB\u4EFD\u548C\u6700\u5C0F\u6743\u9650\uFF0C\u51CF\u5C11\u81EA\u52A8\u5316\u94FE\u8DEF\u7684\u653B\u51FB\u9762\u3002",
      links: [
        { title: "Webhook Security", href: "/ai/n8n-webhook-production-hardening/" },
        { title: "Self-host Security", href: "/ai/self-hosted-n8n-ai-workflows/" },
        { title: "Production Checklist", href: "/ai/ai-workflow-automation-production/" }
      ]
    },
    {
      title: "\u6210\u672C\u3001\u76D1\u63A7\u4E0E\u957F\u671F\u8FD0\u7EF4",
      href: "/ai/n8n-ai-workflow-error-handling/",
      desc: "\u6A21\u578B\u8C03\u7528\u6210\u672C\u3001\u65E5\u5FD7\u3001\u544A\u8B66\u3001\u7248\u672C\u3001\u5931\u8D25\u7387\u548C\u8FD0\u884C\u5BA1\u8BA1\uFF0C\u8BA9 Workflow \u5177\u5907\u53EF\u89C2\u5BDF\u548C\u53EF\u7EF4\u62A4\u7684\u8FD0\u8425\u95ED\u73AF\u3002",
      links: [
        { title: "Cost Monitoring", href: "/ai/n8n-ai-workflow-error-handling/" },
        { title: "Production Workflow", href: "/ai/ai-workflow-automation-production/" },
        { title: "n8n Starter Kit", href: "/ai/n8n-ai-starter-kit/" }
      ]
    }
  ];
  const featured = [
    { type: "DEPLOY", title: "How to Self-Host n8n for AI Workflows with Docker, VPS and NAS", href: "/ai/self-hosted-n8n-ai-workflows/", desc: "\u4ECE\u90E8\u7F72\u5E95\u5EA7\u3001\u6301\u4E45\u5316\u548C\u73AF\u5883\u7BA1\u7406\u5F00\u59CB\u5EFA\u7ACB\u957F\u671F\u53EF\u8FD0\u884C\u7684 n8n\u3002" },
    { type: "OPERATIONS", title: "n8n AI Workflow\uFF1A\u9519\u8BEF\u5904\u7406\u3001\u91CD\u8BD5\u4E0E\u6210\u672C\u76D1\u63A7", href: "/ai/n8n-ai-workflow-error-handling/", desc: "\u628A\u5931\u8D25\u3001\u91CD\u8BD5\u3001\u6210\u672C\u4E0E\u76D1\u63A7\u7EB3\u5165\u5DE5\u4F5C\u6D41\u9ED8\u8BA4\u67B6\u6784\u3002" },
    { type: "QUEUE", title: "n8n Queue Mode + Redis Worker", href: "/ai/n8n-queue-mode-redis-worker/", desc: "\u5F02\u6B65\u4EFB\u52A1\u3001Worker \u6269\u5C55\u4E0E\u9AD8\u5E76\u53D1\u6267\u884C\u8FB9\u754C\u3002" },
    { type: "SECURITY", title: "n8n Webhook Production Hardening", href: "/ai/n8n-webhook-production-hardening/", desc: "\u751F\u4EA7 Webhook \u7684\u8BA4\u8BC1\u3001\u91CD\u653E\u3001\u9650\u6D41\u4E0E\u9519\u8BEF\u8FB9\u754C\u3002" },
    { type: "BUILD", title: "n8n AI Workflow\uFF1AGmail Summarizer + OpenAI + Google Sheets", href: "/ai/n8n-ai-gmail-summarizer-openai-google-sheets/", desc: "\u771F\u5B9E\u4E1A\u52A1\u94FE\u8DEF\u4E2D\u7684\u89E6\u53D1\u3001\u6A21\u578B\u8C03\u7528\u4E0E\u7ED3\u6784\u5316\u843D\u5E93\u3002" },
    { type: "BUILD", title: "How to Build an AI Notion Knowledge Base Agent with n8n and OpenAI", href: "/ai/n8n-ai-notion-knowledge-base-agent/", desc: "\u77E5\u8BC6\u5E93\u81EA\u52A8\u5316\u7684\u91C7\u96C6\u3001\u5904\u7406\u4E0E\u5199\u5165\u8DEF\u5F84\u3002" }
  ];
  const popularTopics = [
    { title: "Self-host", href: "/ai/self-hosted-n8n-ai-workflows/" },
    { title: "Webhook", href: "/ai/n8n-webhook-production-hardening/" },
    { title: "Queue Mode", href: "/ai/n8n-queue-mode-redis-worker/" },
    { title: "Retry", href: "/ai/n8n-ai-workflow-error-handling/" },
    { title: "Cost", href: "/ai/n8n-ai-workflow-error-handling/" },
    { title: "n8n", href: "/ai/n8n-ai-starter-kit/" }
  ];
  const sidebars = [
    {
      title: "\u4E13\u9898\u5BFC\u822A",
      links: [
        { title: "n8n Starter Kit", href: "/ai/n8n-ai-starter-kit/" },
        { title: "Self-host", href: "/ai/self-hosted-n8n-ai-workflows/" },
        { title: "Queue Mode", href: "/ai/n8n-queue-mode-redis-worker/" },
        { title: "Error Handling", href: "/ai/n8n-ai-workflow-error-handling/" }
      ]
    },
    {
      title: "\u76F8\u5173\u4E13\u9898",
      links: [
        { title: "AI Agent", href: "/ai/agent/" },
        { title: "MCP", href: "/ai/mcp/" },
        { title: "LangGraph", href: "/ai/langgraph/" },
        { title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93", href: "/ai/" }
      ]
    },
    {
      title: "\u4EA7\u54C1\u4E0E\u5DE5\u5177",
      links: [
        { title: "\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u4EA7\u54C1", href: "/tools/" },
        { title: "Templates", href: "/tools/templates/" },
        { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }
      ]
    }
  ];
  const description = "XBSTACK AI Workflow \u81EA\u52A8\u5316\u4E0E\u751F\u4EA7\u8FD0\u7EF4\u4E13\u9898\uFF0C\u8986\u76D6 n8n \u81EA\u6258\u7BA1\u3001Webhook\u3001Queue Mode\u3001Redis Worker\u3001Retry\u3001Idempotency\u3001\u51ED\u636E\u5B89\u5168\u3001\u6210\u672C\u76D1\u63A7\u548C\u957F\u671F\u8FD0\u7EF4\u3002";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "AI Workflow \u81EA\u52A8\u5316\u4E0E\u751F\u4EA7\u8FD0\u7EF4", url: "https://www.xbstack.com/ai/workflow/", description, inLanguage: "zh-CN" };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI Workflow \u81EA\u52A8\u5316\u4E0E\u751F\u4EA7\u8FD0\u7EF4\uFF1An8n\u3001Queue\u3001Retry \u4E0E\u76D1\u63A7 | XBSTACK", "description": description, "keywords": "AI Workflow, n8n, n8n self-host, n8n Queue Mode, Webhook, Retry, Idempotency, AI Automation, Cost Monitoring", "hubTitle": "AI Workflow \u81EA\u52A8\u5316\u4E0E\u751F\u4EA7\u8FD0\u7EF4", "eyebrow": "AI Workflow Automation & Operations Hub", "intro": "\u56F4\u7ED5 n8n\u3001\u81EA\u6258\u7BA1\u3001Webhook\u3001Queue\u3001Worker\u3001Retry\u3001Idempotency\u3001Credentials\u3001\u6210\u672C\u4E0E\u76D1\u63A7\uFF0C\u628A\u81EA\u52A8\u5316\u4ECE\u201C\u8282\u70B9\u80FD\u8FDE\u8D77\u6765\u201D\u63A8\u8FDB\u5230\u7A33\u5B9A\u3001\u53EF\u6062\u590D\u3001\u53EF\u8FD0\u8425\u3002", "searchPlaceholder": "\u641C\u7D22 n8n \u90E8\u7F72\u3001Webhook\u3001Queue\u3001Retry\u3001\u51ED\u636E\u3001\u6210\u672C\u6216\u751F\u4EA7\u6545\u969C\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "Workflow \u9002\u5408\u6B65\u9AA4\u6E05\u6670\u3001\u5206\u652F\u53EF\u679A\u4E3E\u3001\u5931\u8D25\u89C4\u5219\u660E\u786E\u7684\u4E1A\u52A1\u81EA\u52A8\u5316\u3002\u771F\u6B63\u7684\u5DE5\u7A0B\u6210\u672C\u4E0D\u5728\u8282\u70B9\u6570\u91CF\uFF0C\u800C\u5728\u89E6\u53D1\u5165\u53E3\u3001\u5E42\u7B49\u3001\u91CD\u8BD5\u3001\u961F\u5217\u3001\u51ED\u636E\u548C\u957F\u671F\u8FD0\u7EF4\u3002\u53EA\u6709\u8DEF\u5F84\u9700\u8981\u6A21\u578B\u52A8\u6001\u5224\u65AD\u65F6\uFF0C\u624D\u9010\u6B65\u5F15\u5165 Agent\u3002", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/ai/workflow/", "lang": "zh-CN" })}`;
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
