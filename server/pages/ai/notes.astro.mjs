import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Notes = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && (data.category === "dev" || (data.tags || []).includes("dev")))).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const latest = posts.slice(0, 10).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), image: typeof entry.data.image === "string" ? entry.data.image : entry.data.image?.src || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "" }));
  const areas = [
    { title: "Bug \u4E0E\u6545\u969C\u901F\u8BB0", href: "/ai/", desc: "\u9519\u8BEF\u73B0\u8C61\u3001\u89E6\u53D1\u6761\u4EF6\u3001\u5B9A\u4F4D\u8DEF\u5F84\u548C\u6700\u7EC8\u4FEE\u590D\uFF0C\u9002\u5408\u72EC\u7ACB\u5C0F\u95EE\u9898\u548C\u540E\u7EED\u957F\u6587\u7EBF\u7D22\u3002", links: [{ title: "\u5B8C\u6574 AI \u6392\u969C", href: "/ai/" }] },
    { title: "\u6982\u5FF5\u4E0E\u8FB9\u754C\u5224\u65AD", href: "/ai/", desc: "Agent\u3001Workflow\u3001MCP\u3001LangGraph \u7B49\u6982\u5FF5\u5728\u5177\u4F53\u5DE5\u7A0B\u573A\u666F\u4E2D\u7684\u8FB9\u754C\u4E0E\u53D6\u820D\u3002", links: [{ title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u4F53\u7CFB", href: "/ai/" }] },
    { title: "\u90E8\u7F72\u4E0E\u73AF\u5883\u8BB0\u5F55", href: "/ai/", desc: "Docker\u3001NAS\u3001SSR\u3001\u53CD\u5411\u4EE3\u7406\u3001\u81EA\u6258\u7BA1\u548C\u73AF\u5883\u5DEE\u5F02\u7684\u77ED\u8BB0\u5F55\u3002", links: [{ title: "\u5DE5\u7A0B\u5B9E\u8DF5", href: "/ai/" }] },
    { title: "\u95EE\u9898\u5230\u6B63\u5F0F\u6587\u7AE0\u7684\u7D22\u5F15", href: "/search/", desc: "\u6709\u590D\u7528\u4EF7\u503C\u7684\u901F\u8BB0\u7EE7\u7EED\u5347\u7EA7\u6210\u5B8C\u6574\u6392\u969C\u6587\u7AE0\u3001\u4E13\u9898 Hub \u6216 Builder Log\u3002", links: [{ title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }] }
  ];
  const description = "XBSTACK AI \u5DE5\u7A0B\u6280\u672F\u7B14\u8BB0\uFF0C\u6536\u5F55 AI Agent\u3001MCP\u3001LangGraph\u3001\u90E8\u7F72\u4E0E\u5F00\u53D1\u5B9E\u8DF5\u4E2D\u7684\u77ED\u95EE\u9898\u3001\u6982\u5FF5\u8FB9\u754C\u548C\u6392\u969C\u7EBF\u7D22\u3002";
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI \u5DE5\u7A0B\u6280\u672F\u7B14\u8BB0\u4E0E\u6392\u969C\u901F\u8BB0 | XBSTACK", "description": description, "keywords": "AI \u6280\u672F\u7B14\u8BB0, MCP \u6392\u969C, LangGraph \u7B14\u8BB0, \u5F00\u53D1\u8BB0\u5F55", "hubTitle": "AI \u5DE5\u7A0B\u6280\u672F\u7B14\u8BB0\u4E0E\u6392\u969C\u901F\u8BB0", "eyebrow": "Engineering Notes & Troubleshooting Index", "intro": "\u77ED\u95EE\u9898\u5C31\u4FDD\u7559\u4E3A\u77ED\u7B14\u8BB0\uFF0C\u80FD\u5F62\u6210\u590D\u7528\u8DEF\u5F84\u7684\u5185\u5BB9\u518D\u5347\u7EA7\u6210\u957F\u6587\u6216\u4E13\u9898\u3002\u8FD9\u91CC\u662F\u5FEB\u901F\u7D22\u5F15\uFF0C\u4E0D\u66FF\u4EE3 MCP\u3001LangGraph\u3001Agent \u548C Workflow \u4E3B Hub\u3002", "searchPlaceholder": "\u641C\u7D22\u6280\u672F\u7B14\u8BB0\u3001\u9519\u8BEF\u73B0\u8C61\u3001\u6982\u5FF5\u6216\u90E8\u7F72\u8BB0\u5F55\u2026", "popularTopics": [{ title: "MCP", href: "/ai/mcp/" }, { title: "LangGraph", href: "/ai/langgraph/" }, { title: "Agent", href: "/ai/agent/" }, { title: "Workflow", href: "/ai/workflow/" }], "areas": areas, "featured": latest.slice(0, 6), "latest": latest, "sidebars": [{ title: "\u4E3B\u4E13\u9898", links: [{ title: "AI \u5DE5\u7A0B\u603B\u5165\u53E3", href: "/ai/" }, { title: "MCP", href: "/ai/mcp/" }, { title: "LangGraph", href: "/ai/langgraph/" }, { title: "Workflow", href: "/ai/workflow/" }] }, { title: "\u5176\u4ED6\u7D22\u5F15", links: [{ title: "\u6280\u672F\u5B9E\u8DF5", href: "/ai/" }, { title: "\u6587\u7AE0\u5F52\u6863", href: "/archive/" }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }] }], "canonical": "https://www.xbstack.com/ai/", "lang": "zh-CN" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/notes.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/notes.astro";
const $$url = "/ai/notes/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Notes,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
