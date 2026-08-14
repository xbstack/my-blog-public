import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$ToolsLab = createComponent(async ($$result, $$props, $$slots) => {
  const tags = ["AI Tools Lab", "AI Model Review", "AI Tool Benchmark", "Model Review", "AI\u5DE5\u5177\u5B9E\u6D4B", "\u6A21\u578B\u5B9E\u6D4B", "\u6A21\u578B\u66F4\u65B0\u5B9E\u6D4B", "\u591A\u6A21\u6001\u5B9E\u6D4B", "\u7AEF\u4FA7\u6A21\u578B", "World Model"];
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && (data.series === "ai-tools-lab" || data.subcategory === "tools-lab" || data.hub === "tools-lab" || data.section === "tools-lab" || (data.tags || []).some((tag) => tags.includes(tag))))).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const latest = posts.slice(0, 10).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), image: typeof entry.data.image === "string" ? entry.data.image : entry.data.image?.src || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "" }));
  const areas = [
    { title: "\u5927\u6A21\u578B\u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4", href: "/ai/model-updates/", desc: "GPT\u3001Gemini\u3001Claude\u3001Qwen\u3001DeepSeek\u3001Kimi \u7B49\u6A21\u578B\u66F4\u65B0\u540E\u7684\u771F\u5B9E\u5F00\u53D1\u3001\u957F\u4E0A\u4E0B\u6587\u548C\u63A8\u7406\u4EFB\u52A1\u6D4B\u8BD5\u3002", links: [{ title: "Model Updates", href: "/ai/model-updates/" }, { title: "GPT-5.6 \u5B9E\u6D4B", href: "/ai/tools-lab/gpt56-test/" }] },
    { title: "AI \u7F16\u7A0B\u5DE5\u5177\u4E0E\u5F00\u53D1\u6548\u7387", href: "/ai/tools-lab/", desc: "Cursor\u3001Codex\u3001Claude Code \u7B49\u5DE5\u5177\u5728\u771F\u5B9E\u9879\u76EE\u7406\u89E3\u3001\u8DE8\u6587\u4EF6\u4FEE\u6539\u3001\u6392\u969C\u548C\u4EA4\u4ED8\u4E2D\u7684\u6548\u679C\u3002", links: [{ title: "Chat / Work / Codex \u5BF9\u6BD4", href: "/ai/tools-lab/chatgpt-work-chat-codex-difference/" }, { title: "\u771F\u5B9E\u9879\u76EE\u6A21\u578B\u6D4B\u8BD5", href: "/ai/tools-lab/kimi-k3-real-astro-project-test/" }] },
    { title: "AI \u641C\u7D22\u4E0E\u8D44\u6599\u7814\u7A76", href: "/growth/", desc: "\u641C\u7D22\u95EE\u7B54\u3001\u5F15\u7528\u51C6\u786E\u6027\u3001\u8D44\u6599\u6536\u96C6\u3001\u7ADE\u54C1\u7814\u7A76\u548C GEO \u53EF\u89C1\u6027\uFF0C\u4E0D\u53EA\u6BD4\u8F83\u56DE\u7B54\u98CE\u683C\u3002", links: [{ title: "Growth Lab", href: "/growth/" }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }] },
    { title: "\u591A\u6A21\u6001\u4E0E\u5185\u5BB9\u751F\u4EA7", href: "/ai/tools-lab/", desc: "\u56FE\u50CF\u3001\u89C6\u9891\u3001\u4E2D\u6587\u6587\u5B57\u3001\u89D2\u8272\u4E00\u81F4\u6027\u3001\u955C\u5934\u8FDE\u7EED\u6027\u548C\u751F\u6210\u6210\u672C\uFF0C\u56F4\u7ED5\u771F\u5B9E\u5185\u5BB9\u4EFB\u52A1\u9A8C\u8BC1\u3002", links: [{ title: "AI Tools Lab", href: "/ai/tools-lab/" }] },
    { title: "\u7AEF\u4FA7\u6A21\u578B\u4E0E App \u96C6\u6210", href: "/ai/local-ai/", desc: "iPhone\u3001Android\u3001Core ML\u3001ONNX\u3001llama.cpp \u7684\u6027\u80FD\u3001\u53D1\u70ED\u3001\u9690\u79C1\u548C\u4EA7\u54C1\u96C6\u6210\u4EF7\u503C\u3002", links: [{ title: "Local AI", href: "/ai/local-ai/" }] },
    { title: "Agent / Tool Evaluation", href: "/ai/ai-agent-evaluation-guide/", desc: "\u4ECE\u4EFB\u52A1\u7EA7\u901A\u8FC7\u7387\u3001\u5931\u8D25\u7C7B\u578B\u548C\u53EF\u91CD\u590D\u5B9E\u9A8C\u5224\u65AD Agent\u3001\u6A21\u578B\u548C\u5DE5\u5177\u662F\u5426\u771F\u7684\u53EF\u7528\u3002", links: [{ title: "Agent Evaluation", href: "/ai/ai-agent-evaluation-guide/" }, { title: "Golden Dataset", href: "/ai/ai-financial-report-evaluation-golden-dataset/" }] }
  ];
  const featured = latest.slice(0, 6);
  const description = "XBSTACK AI \u6A21\u578B\u4E0E\u5F00\u53D1\u5DE5\u5177\u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4\uFF0C\u8986\u76D6\u5927\u6A21\u578B\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u3001\u7AEF\u4FA7\u6A21\u578B\u4E0E Agent Evaluation\uFF0C\u5F3A\u8C03\u771F\u5B9E\u4EFB\u52A1\u3001\u5931\u8D25\u6837\u4F8B\u548C\u53EF\u91CD\u590D\u8BC1\u636E\u3002";
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI \u6A21\u578B\u4E0E\u5F00\u53D1\u5DE5\u5177\u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4 | XBSTACK", "description": description, "keywords": "AI Tools Lab, \u6A21\u578B\u5B9E\u6D4B, AI \u7F16\u7A0B\u5DE5\u5177, GPT-5.6, Codex, AI Search, Local AI", "hubTitle": "AI \u6A21\u578B\u4E0E\u5F00\u53D1\u5DE5\u5177\u771F\u5B9E\u9879\u76EE\u6D4B\u8BC4", "eyebrow": "AI Model & Developer Tool Evaluation Hub", "intro": "\u4E0D\u505A\u53D1\u5E03\u4F1A\u590D\u8FF0\uFF0C\u4E5F\u4E0D\u505A\u5DE5\u5177\u76EE\u5F55\u3002\u53EA\u7528\u771F\u5B9E\u5F00\u53D1\u3001\u5185\u5BB9\u3001\u641C\u7D22\u3001Agent \u548C App \u4EFB\u52A1\u9A8C\u8BC1\u6A21\u578B\u6216\u5DE5\u5177\u5230\u5E95\u63D0\u9AD8\u4E86\u4EC0\u4E48\u3001\u5931\u8D25\u5728\u54EA\u91CC\u3001\u503C\u4E0D\u503C\u5F97\u8FDB\u5165\u957F\u671F\u5DE5\u4F5C\u6D41\u3002", "searchPlaceholder": "\u641C\u7D22\u6A21\u578B\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001\u5B9E\u6D4B\u4EFB\u52A1\u3001\u5931\u8D25\u6848\u4F8B\u6216\u4F7F\u7528\u5EFA\u8BAE\u2026", "popularTopics": [{ title: "Models", href: "/ai/model-updates/" }, { title: "Coding Tools", href: "/ai/tools-lab/" }, { title: "AI Search", href: "/growth/" }, { title: "Multimodal", href: "/ai/tools-lab/" }, { title: "Local AI", href: "/ai/local-ai/" }, { title: "Evaluation", href: "/ai/ai-agent-evaluation-guide/" }], "areas": areas, "featured": featured, "latest": latest, "sidebars": [{ title: "\u8BC4\u6D4B\u5BFC\u822A", links: [{ title: "Model Updates", href: "/ai/model-updates/" }, { title: "Local AI", href: "/ai/local-ai/" }, { title: "Agent Evaluation", href: "/ai/ai-agent-evaluation-guide/" }, { title: "Growth Lab", href: "/growth/" }] }, { title: "\u76F8\u5173\u8D44\u6E90", links: [{ title: "Templates", href: "/tools/templates/" }, { title: "\u5168\u90E8\u5DE5\u5177", href: "/tools/" }, { title: "Newsletter", href: "/newsletter/" }] }], "summary": "\u6A21\u578B\u6216\u5DE5\u5177\u7684\u4EF7\u503C\u4E0D\u7531\u699C\u5355\u5206\u6570\u51B3\u5B9A\uFF0C\u800C\u7531\u771F\u5B9E\u4EFB\u52A1\u4E2D\u7684\u4E00\u6B21\u901A\u8FC7\u7387\u3001\u9519\u8BEF\u7C7B\u578B\u3001\u9A8C\u8BC1\u6210\u672C\u3001\u901F\u5EA6\u3001\u4EF7\u683C\u548C\u957F\u671F\u53EF\u7EF4\u62A4\u6027\u5171\u540C\u51B3\u5B9A\u3002", "canonical": "https://www.xbstack.com/ai/tools-lab/", "lang": "zh-CN" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/tools-lab.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/tools-lab.astro";
const $$url = "/ai/tools-lab/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ToolsLab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
