import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tools = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && (data.category === "devtools" || (data.tags || []).includes("devtools")))).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const latest = posts.slice(0, 10).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), image: typeof entry.data.image === "string" ? entry.data.image : entry.data.image?.src || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "" }));
  const areas = [
    { title: "Prompt \u4E0E\u7ED3\u6784\u5316\u8F93\u5165", href: "/tools/templates/", desc: "\u89D2\u8272\u3001\u8F93\u5165\u3001\u7EA6\u675F\u3001\u8F93\u51FA\u7ED3\u6784\u548C\u8BC4\u6D4B\u6837\u4F8B\uFF0C\u670D\u52A1\u7A33\u5B9A\u5DE5\u4F5C\u6D41\u800C\u4E0D\u662F\u4E00\u6B21\u6027\u63D0\u793A\u8BCD\u3002", links: [{ title: "Templates", href: "/tools/templates/" }] },
    { title: "\u8C03\u8BD5\u3001\u65E5\u5FD7\u4E0E\u53EF\u89C2\u6D4B\u6027", href: "/ai/ai-agent-observability/", desc: "\u6A21\u578B\u8F93\u5165\u8F93\u51FA\u3001\u5DE5\u5177\u8C03\u7528\u94FE\u3001Trace\u3001\u5931\u8D25\u6837\u4F8B\u3001\u5EF6\u8FDF\u4E0E\u6210\u672C\u3002", links: [{ title: "Agent Observability", href: "/ai/ai-agent-observability/" }] },
    { title: "\u90E8\u7F72\u4E0E\u8FD0\u884C\u73AF\u5883", href: "/ai/", desc: "Docker\u3001NAS\u3001Cloudflare\u3001Node SSR \u548C\u540E\u53F0\u4EFB\u52A1\uFF0C\u628A AI \u5E94\u7528\u653E\u5230\u53EF\u7EF4\u62A4\u73AF\u5883\u3002", links: [{ title: "\u5DE5\u7A0B\u5B9E\u8DF5", href: "/ai/" }] },
    { title: "\u81EA\u52A8\u5316\u4E0E\u53D1\u5E03\u5DE5\u5177", href: "/ai/workflow/", desc: "\u53D1\u5E03\u3001\u6458\u8981\u3001\u540C\u6B65\u3001\u6570\u636E\u6574\u7406\u548C\u5916\u90E8 API \u8C03\u7528\uFF0C\u7528 Workflow \u53D8\u6210\u53EF\u8FFD\u8E2A\u4EFB\u52A1\u3002", links: [{ title: "Workflow Hub", href: "/ai/workflow/" }] },
    { title: "\u6A21\u578B\u4E0E\u5DE5\u5177\u771F\u5B9E\u8BC4\u6D4B", href: "/ai/tools-lab/", desc: "\u6A21\u578B\u66F4\u65B0\u3001AI \u7F16\u7A0B\u5DE5\u5177\u3001AI \u641C\u7D22\u3001\u591A\u6A21\u6001\u548C\u7AEF\u4FA7\u6A21\u578B\u7EDF\u4E00\u8FDB\u5165\u771F\u5B9E\u4EFB\u52A1\u8BC4\u6D4B\u3002", links: [{ title: "AI Tools Lab", href: "/ai/tools-lab/" }, { title: "Model Updates", href: "/ai/model-updates/" }] },
    { title: "\u53EF\u76F4\u63A5\u4F7F\u7528\u7684\u7AD9\u5185\u5DE5\u5177", href: "/tools/", desc: "AI Finance\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest\u3001UTM Builder \u7B49\u4EA7\u54C1\u578B\u5DE5\u5177\u3002", links: [{ title: "\u5168\u90E8 Tools", href: "/tools/" }] }
  ];
  const description = "XBSTACK AI \u5DE5\u7A0B\u5DE5\u5177\u94FE\uFF0C\u6574\u7406 Prompt\u3001\u8C03\u8BD5\u3001\u53EF\u89C2\u6D4B\u6027\u3001\u90E8\u7F72\u3001\u81EA\u52A8\u5316\u3001\u6A21\u578B\u8BC4\u6D4B\u548C\u7AD9\u5185\u5F00\u53D1\u8005\u5DE5\u5177\u3002";
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI \u5DE5\u7A0B\u5DE5\u5177\u94FE\u4E0E\u5F00\u53D1\u8005\u6548\u7387\u7CFB\u7EDF | XBSTACK", "description": description, "keywords": "AI \u5F00\u53D1\u5DE5\u5177, Prompt, AI \u8C03\u8BD5, Observability, AI Deployment, Developer Tools", "hubTitle": "AI \u5DE5\u7A0B\u5DE5\u5177\u94FE\u4E0E\u5F00\u53D1\u8005\u6548\u7387\u7CFB\u7EDF", "eyebrow": "AI Engineering Toolchain", "intro": "\u628A Prompt\u3001\u8C03\u8BD5\u3001\u90E8\u7F72\u3001\u81EA\u52A8\u5316\u3001\u8BC4\u6D4B\u548C\u7AD9\u5185\u5DE5\u5177\u7EC4\u7EC7\u6210\u4E00\u6761\u53EF\u590D\u7528\u5DE5\u7A0B\u94FE\u8DEF\u3002\u8FD9\u4E2A\u9875\u9762\u504F\u5F00\u53D1\u8FC7\u7A0B\uFF1BTools \u9996\u9875\u5219\u504F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7684\u4EA7\u54C1\u3002", "searchPlaceholder": "\u641C\u7D22 Prompt\u3001\u8C03\u8BD5\u3001\u90E8\u7F72\u3001\u81EA\u52A8\u5316\u3001\u8BC4\u6D4B\u6216\u5F00\u53D1\u8005\u5DE5\u5177\u2026", "popularTopics": [{ title: "Prompt", href: "/tools/templates/" }, { title: "Observability", href: "/ai/ai-agent-observability/" }, { title: "Deployment", href: "/ai/" }, { title: "Workflow", href: "/ai/workflow/" }, { title: "Tools Lab", href: "/ai/tools-lab/" }], "areas": areas, "featured": latest.slice(0, 6), "latest": latest, "sidebars": [{ title: "\u76F8\u5173\u5165\u53E3", links: [{ title: "Tools \u4EA7\u54C1\u7CFB\u7EDF", href: "/tools/" }, { title: "AI Tools Lab", href: "/ai/tools-lab/" }, { title: "Model Updates", href: "/ai/model-updates/" }, { title: "\u6280\u672F\u5B9E\u8DF5", href: "/ai/" }] }, { title: "\u76F4\u63A5\u4F7F\u7528", links: [{ title: "AI Finance", href: "/tools/ai-finance/" }, { title: "Lunest", href: "/tools/lunest/" }, { title: "UTM Builder", href: "/tools/utm-builder/" }, { title: "Templates", href: "/tools/templates/" }] }], "canonical": "https://www.xbstack.com/ai/tools-lab/", "lang": "zh-CN" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/tools.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/tools.astro";
const $$url = "/ai/tools/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Tools,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
