import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Mcp = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex");
  const posts = all.filter((entry) => entry.id.toLowerCase().includes("mcp") || (entry.data.tags || []).some((tag) => String(tag).toLowerCase().includes("mcp"))).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
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
      title: "\u534F\u8BAE\u6A21\u578B\u4E0E\u80FD\u529B\u8FB9\u754C",
      href: "/ai/mcp-protocol-deep-dive/",
      desc: "Client / Server\u3001Tools\u3001Resources\u3001Prompts\u3001JSON-RPC \u4E0E\u751F\u547D\u5468\u671F\uFF1B\u5148\u77E5\u9053 MCP \u89E3\u51B3\u4EC0\u4E48\u3001\u4E0D\u89E3\u51B3\u4EC0\u4E48\u3002",
      links: [
        { title: "MCP \u534F\u8BAE\u8BE6\u89E3", href: "/ai/mcp-protocol-deep-dive/" },
        { title: "MCP vs Function Calling", href: "/ai/mcp-vs-function-calling/" },
        { title: "MCP vs Semantic Kernel", href: "/ai/mcp-vs-semantic-kernel/" }
      ]
    },
    {
      title: "Server \u6784\u5EFA\u4E0E\u672C\u5730\u63A5\u5165",
      href: "/ai/mcp-filesystem-server/",
      desc: "stdio\u3001Filesystem\u3001SQLite\u3001Tool Schema \u4E0E\u672C\u5730\u5F00\u53D1\u94FE\u8DEF\uFF0C\u5148\u628A\u80FD\u529B\u5728\u53D7\u63A7\u73AF\u5883\u4E2D\u8DD1\u901A\u3002",
      links: [
        { title: "Filesystem Server", href: "/ai/mcp-filesystem-server/" },
        { title: "SQLite Server", href: "/ai/mcp-server-sqlite/" },
        { title: "Tool Call", href: "/ai/mcp-tool-call-truncated-fix/" }
      ]
    },
    {
      title: "Transport \u4E0E\u8FDC\u7A0B\u90E8\u7F72",
      href: "/ai/mcp-streamable-http-deployment/",
      desc: "\u4ECE\u672C\u5730 stdio \u5230 Streamable HTTP\u3001Stateless\u3001\u8DE8\u526F\u672C\u548C\u8FDC\u7A0B\u90E8\u7F72\uFF0C\u660E\u786E\u8FDE\u63A5\u4E0E\u72B6\u6001\u8FB9\u754C\u3002",
      links: [
        { title: "Streamable HTTP", href: "/ai/mcp-streamable-http-deployment/" },
        { title: "Stateless Migration", href: "/ai/mcp-2026-07-28-stateless-migration/" },
        { title: "\u751F\u4EA7\u6CBB\u7406", href: "/ai/mcp-server-production-governance/" }
      ]
    },
    {
      title: "\u8BA4\u8BC1\u3001\u5B89\u5168\u4E0E\u6743\u9650\u6CBB\u7406",
      href: "/ai/mcp-oauth-authentication/",
      desc: "OAuth\u3001allowedRoots\u3001\u591A\u7528\u6237\u9694\u79BB\u3001\u6700\u5C0F\u6743\u9650\u3001\u5BA1\u8BA1\u548C\u654F\u611F\u6570\u636E\u8FB9\u754C\u3002",
      links: [
        { title: "OAuth \u8BA4\u8BC1", href: "/ai/mcp-oauth-authentication/" },
        { title: "\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5", href: "/ai/mcp-security-best-practices/" },
        { title: "\u751F\u4EA7\u6CBB\u7406", href: "/ai/mcp-server-production-governance/" }
      ]
    },
    {
      title: "JSON-RPC \u4E0E\u534F\u8BAE\u6392\u969C",
      href: "/ai/mcp-json-rpc-parse-error/",
      desc: "Parse Error\u3001stdio \u6C61\u67D3\u3001handshake\u3001Content-Type\u3001\u6D88\u606F\u8FB9\u754C\u4E0E\u534F\u8BAE\u7248\u672C\u517C\u5BB9\u3002",
      links: [
        { title: "JSON-RPC Parse Error", href: "/ai/mcp-json-rpc-parse-error/" },
        { title: "stdio \u6C61\u67D3", href: "/ai/mcp-json-rpc-parse-error/" },
        { title: "Tool Result Truncated", href: "/ai/mcp-tool-call-truncated-fix/" }
      ]
    },
    {
      title: "\u751F\u4EA7\u9A8C\u8BC1\u4E0E\u53EF\u89C2\u6D4B\u6027",
      href: "/ai/mcp-server-production-governance/",
      desc: "\u8BF7\u6C42\u94FE\u8DEF\u3001\u5BA1\u8BA1\u3001\u5F02\u5E38\u3001\u7070\u5EA6\u3001\u7248\u672C\u3001\u56DE\u6EDA\u548C\u53EF\u91CD\u590D\u9A8C\u8BC1\uFF0C\u628A MCP \u4ECE\u201C\u80FD\u8FDE\u201D\u63A8\u8FDB\u5230\u201C\u53EF\u8FD0\u8425\u201D\u3002",
      links: [
        { title: "Production Governance", href: "/ai/mcp-server-production-governance/" },
        { title: "Stateless \u5B9E\u9A8C", href: "/ai/mcp-2026-07-28-stateless-migration/" },
        { title: "\u5DE5\u5177\u8C03\u7528\u8FB9\u754C", href: "/ai/mcp-tool-call-truncated-fix/" }
      ]
    }
  ];
  const featured = [
    { type: "GUIDE", title: "MCP \u548C Function Calling \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u771F\u5B9E\u9879\u76EE\u9009\u578B", href: "/ai/mcp-vs-function-calling/", desc: "\u4ECE\u534F\u8BAE\u5C42\u3001\u5E94\u7528\u8FB9\u754C\u3001\u6743\u9650\u548C\u5DE5\u5177\u751F\u6001\u5224\u65AD\u662F\u5426\u9700\u8981 MCP\u3002" },
    { type: "DEPLOY", title: "MCP Streamable HTTP \u90E8\u7F72\uFF1A\u4ECE\u672C\u5730\u5230\u8FDC\u7A0B Server", href: "/ai/mcp-streamable-http-deployment/", desc: "\u8FDC\u7A0B\u4F20\u8F93\u3001\u8FDE\u63A5\u6A21\u578B\u3001Server \u90E8\u7F72\u548C\u751F\u4EA7\u73AF\u5883\u6CE8\u610F\u4E8B\u9879\u3002" },
    { type: "SECURITY", title: "MCP OAuth \u8BA4\u8BC1\u5B9E\u6218", href: "/ai/mcp-oauth-authentication/", desc: "\u8FDC\u7A0B MCP Server \u7684\u8EAB\u4EFD\u3001\u6388\u6743\u3001Token \u4E0E\u8BBF\u95EE\u8FB9\u754C\u3002" },
    { type: "LAB", title: "MCP Stateless Migration\uFF1A\u8DE8\u526F\u672C\u72B6\u6001\u600E\u4E48\u5904\u7406", href: "/ai/mcp-2026-07-28-stateless-migration/", desc: "\u901A\u8FC7\u771F\u5B9E\u8FC1\u79FB\u5B9E\u9A8C\u9A8C\u8BC1 Session \u4E0E Request State \u7684\u8FB9\u754C\u3002" },
    { type: "FIX", title: "MCP JSON-RPC Parse Error \u6392\u67E5", href: "/ai/mcp-json-rpc-parse-error/", desc: "\u4F18\u5148\u68C0\u67E5 stdout\u3001\u6D88\u606F\u7ED3\u6784\u3001\u7F16\u7801\u4E0E\u534F\u8BAE\u7248\u672C\u3002" },
    { type: "FIX", title: "MCP Tool Call Result Truncated\uFF1A\u7ED3\u679C\u4E3A\u4EC0\u4E48\u88AB\u622A\u65AD", href: "/ai/mcp-tool-call-truncated-fix/", desc: "\u4ECE\u534F\u8BAE\u8FD4\u56DE\u3001\u5BA2\u6237\u7AEF\u9650\u5236\u548C\u4E0A\u4E0B\u6587\u8FB9\u754C\u5B9A\u4F4D\u7ED3\u679C\u4E22\u5931\u3002" }
  ];
  const popularTopics = [
    { title: "Protocol", href: "/ai/mcp-protocol-deep-dive/" },
    { title: "Server", href: "/ai/mcp-filesystem-server/" },
    { title: "Transport", href: "/ai/mcp-streamable-http-deployment/" },
    { title: "OAuth", href: "/ai/mcp-oauth-authentication/" },
    { title: "Security", href: "/ai/mcp-security-best-practices/" },
    { title: "JSON-RPC", href: "/ai/mcp-json-rpc-parse-error/" }
  ];
  const sidebars = [
    {
      title: "\u4E13\u9898\u5BFC\u822A",
      links: [
        { title: "MCP vs Function Calling", href: "/ai/mcp-vs-function-calling/" },
        { title: "\u90E8\u7F72 Streamable HTTP", href: "/ai/mcp-streamable-http-deployment/" },
        { title: "\u914D\u7F6E OAuth", href: "/ai/mcp-oauth-authentication/" },
        { title: "\u6392\u67E5 -32700", href: "/ai/mcp-json-rpc-parse-error/" }
      ]
    },
    {
      title: "\u76F8\u5173\u4E13\u9898",
      links: [
        { title: "AI Agent", href: "/ai/agent/" },
        { title: "LangGraph", href: "/ai/langgraph/" },
        { title: "Workflow", href: "/ai/workflow/" },
        { title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93", href: "/ai/" }
      ]
    },
    {
      title: "\u76F8\u5173\u8D44\u6E90",
      links: [
        { title: "\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u4EA7\u54C1", href: "/tools/" },
        { title: "GitHub", href: "https://github.com/xbstack" },
        { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }
      ]
    }
  ];
  const description = "XBSTACK MCP \u5DE5\u7A0B\u4E0E\u751F\u4EA7\u5B9E\u8DF5\u4E13\u9898\uFF0C\u8986\u76D6 Model Context Protocol\u3001MCP Server\u3001stdio\u3001Streamable HTTP\u3001OAuth\u3001allowedRoots\u3001\u5B89\u5168\u3001Stateless\u3001JSON-RPC\u3001\u534F\u8BAE\u6392\u969C\u4E0E\u751F\u4EA7\u6CBB\u7406\u3002";
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "MCP \u5DE5\u7A0B\u4E0E\u751F\u4EA7\u5B9E\u8DF5", url: "https://www.xbstack.com/ai/mcp/", description, inLanguage: "zh-CN" };
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "MCP \u5DE5\u7A0B\u4E0E\u751F\u4EA7\u5B9E\u8DF5\uFF1AServer\u3001Transport\u3001\u5B89\u5168\u4E0E\u6392\u969C | XBSTACK", "description": description, "keywords": "MCP, Model Context Protocol, MCP Server, Streamable HTTP, MCP OAuth, MCP Security, JSON-RPC, allowedRoots, MCP \u6392\u969C", "hubTitle": "MCP \u5DE5\u7A0B\u4E0E\u751F\u4EA7\u5B9E\u8DF5", "eyebrow": "Model Context Protocol Engineering Hub", "intro": "\u4ECE\u534F\u8BAE\u6A21\u578B\u3001Server \u6784\u5EFA\u548C Transport\uFF0C\u5230 OAuth\u3001\u6743\u9650\u3001\u5B89\u5168\u3001Stateless\u3001JSON-RPC \u4E0E\u751F\u4EA7\u6392\u969C\u3002\u76EE\u6807\u4E0D\u662F\u201C\u5B66\u4F1A MCP \u540D\u8BCD\u201D\uFF0C\u800C\u662F\u628A MCP \u5B89\u5168\u3001\u7A33\u5B9A\u5730\u63A5\u8FDB\u771F\u5B9E\u7CFB\u7EDF\u3002", "searchPlaceholder": "\u641C\u7D22 MCP \u62A5\u9519\u3001Server\u3001Transport\u3001OAuth\u3001\u5B89\u5168\u6216\u90E8\u7F72\u95EE\u9898\u2026", "popularTopics": popularTopics, "areas": areas, "featured": featured, "latest": latest, "sidebars": sidebars, "summary": "\u5DE5\u7A0B\u4E0A\u5E94\u5148\u786E\u5B9A MCP \u662F\u5426\u771F\u7684\u9700\u8981\uFF1A\u5355\u5E94\u7528\u5185\u90E8\u7684\u5C11\u91CF\u51FD\u6570\u8C03\u7528\u901A\u5E38\u4E0D\u9700\u8981 MCP\uFF1B\u5F53\u5DE5\u5177\u9700\u8981\u8DE8\u5BA2\u6237\u7AEF\u590D\u7528\u3001\u6807\u51C6\u53D1\u73B0\u3001\u72EC\u7ACB\u90E8\u7F72\u3001\u8BA4\u8BC1\u3001\u6743\u9650\u4E0E\u5BA1\u8BA1\u65F6\uFF0CMCP \u624D\u5F00\u59CB\u4F53\u73B0\u534F\u8BAE\u5C42\u4EF7\u503C\u3002", "schemaJsonLd": schema, "canonical": "https://www.xbstack.com/ai/mcp/", "lang": "zh-CN" })}`;
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
