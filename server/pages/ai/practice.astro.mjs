import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Practice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Practice;
  const cats = ["nas", "web", "deployment"];
  const posts = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && (cats.includes(data.category) || (data.tags || []).some((t) => cats.includes(t))))).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const latest = posts.slice(0, 10).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), image: typeof entry.data.image === "string" ? entry.data.image : entry.data.image?.src || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "" }));
  const areas = [
    { title: "NAS \u4E0E\u81EA\u6258\u7BA1\u57FA\u7840\u8BBE\u65BD", href: "/ai/", desc: "\u7F51\u7EDC\u3001\u5907\u4EFD\u3001\u6743\u9650\u3001\u5B58\u50A8\u548C\u6545\u969C\u6062\u590D\uFF0C\u8BB0\u5F55\u4E2A\u4EBA\u4E0E\u5C0F\u56E2\u961F\u53EF\u7EF4\u62A4\u7684\u81EA\u6258\u7BA1\u8DEF\u5F84\u3002", links: [{ title: "Self-host n8n", href: "/ai/self-hosted-n8n-ai-workflows/" }] },
    { title: "Cloudflare \u4E0E\u516C\u7F51\u8BBF\u95EE", href: "/ai/", desc: "Tunnel\u3001DNS\u3001\u53CD\u5411\u4EE3\u7406\u3001\u8DEF\u5F84\u8F6C\u53D1\u548C\u670D\u52A1\u66B4\u9732\u8FB9\u754C\u3002", links: [{ title: "Cloudflare Serverless", href: "/ai/cloudflare-serverless-fullstack/" }] },
    { title: "Astro SSR \u4E0E Web \u5DE5\u7A0B", href: "/ai/", desc: "Node SSR\u3001\u52A8\u6001\u8DEF\u7531\u3001\u6784\u5EFA\u3001\u7F13\u5B58\u3001404 \u4E0E\u6027\u80FD\u4F18\u5316\u3002", links: [{ title: "XBSTACK 404 \u4FEE\u590D", href: "/ai/xbstack-404-cloudflare-astro-route-fix/" }] },
    { title: "Docker / Compose", href: "/ai/", desc: "\u5BB9\u5668\u3001\u5377\u3001\u73AF\u5883\u53D8\u91CF\u3001\u6570\u636E\u5E93\u8FC1\u79FB\u3001\u91CD\u542F\u548C\u4F9D\u8D56\u517C\u5BB9\u3002", links: [{ title: "n8n \u81EA\u6258\u7BA1", href: "/ai/self-hosted-n8n-ai-workflows/" }] },
    { title: "AI Workflow \u90E8\u7F72", href: "/ai/workflow/", desc: "n8n\u3001\u961F\u5217\u3001Webhook\u3001\u51ED\u636E\u3001\u6A21\u578B API \u548C\u4EFB\u52A1\u5931\u8D25\u91CD\u8BD5\u3002", links: [{ title: "Workflow Hub", href: "/ai/workflow/" }] },
    { title: "\u5185\u5BB9\u4E0E\u540E\u53F0\u7CFB\u7EDF", href: "/growth/", desc: "\u53D1\u5E03\u4E2D\u5FC3\u3001\u589E\u957F\u540E\u53F0\u3001\u5185\u5BB9\u8D28\u68C0\u548C\u5206\u53D1\u94FE\u8DEF\u7684\u771F\u5B9E\u5DE5\u7A0B\u8BB0\u5F55\u3002", links: [{ title: "Growth Lab", href: "/growth/" }] }
  ];
  const description = "XBSTACK AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u57FA\u7840\u8BBE\u65BD\u8BB0\u5F55\uFF0C\u8986\u76D6 NAS\u3001\u81EA\u6258\u7BA1\u3001Cloudflare\u3001Astro SSR\u3001Docker\u3001AI Workflow \u90E8\u7F72\u4E0E\u540E\u53F0\u7CFB\u7EDF\u3002";
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u57FA\u7840\u8BBE\u65BD\u8BB0\u5F55 | XBSTACK", "description": description, "keywords": "NAS \u81EA\u6258\u7BA1, AI \u90E8\u7F72, Astro SSR, Docker, Cloudflare, AI Workflow", "hubTitle": "AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u57FA\u7840\u8BBE\u65BD\u8BB0\u5F55", "eyebrow": "Production Practice & Infrastructure", "intro": "\u8BB0\u5F55 AI \u5E94\u7528\u771F\u6B63\u843D\u5730\u65F6\u7ED5\u4E0D\u5F00\u7684\u90E8\u7F72\u3001\u7F51\u7EDC\u3001\u81EA\u6258\u7BA1\u3001\u5BB9\u5668\u3001\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u540E\u53F0\u7CFB\u7EDF\u95EE\u9898\u3002\u6BCF\u4E2A\u6848\u4F8B\u4F18\u5148\u4FDD\u7559\u53EF\u590D\u73B0\u73AF\u5883\u3001\u6545\u969C\u73B0\u8C61\u548C\u51B3\u7B56\u539F\u56E0\u3002", "searchPlaceholder": "\u641C\u7D22 NAS\u3001Docker\u3001Cloudflare\u3001SSR\u3001\u90E8\u7F72\u6216\u751F\u4EA7\u6545\u969C\u2026", "popularTopics": [{ title: "Self-host", href: "/ai/self-hosted-n8n-ai-workflows/" }, { title: "Docker", href: "/ai/" }, { title: "Cloudflare", href: "/ai/" }, { title: "Astro", href: "/ai/" }, { title: "Workflow", href: "/ai/workflow/" }], "areas": areas, "featured": latest.slice(0, 6), "latest": latest, "sidebars": [{ title: "\u76F8\u5173\u5165\u53E3", links: [{ title: "AI Workflow", href: "/ai/workflow/" }, { title: "AI \u5DE5\u7A0B\u603B\u5165\u53E3", href: "/ai/" }, { title: "\u6280\u672F\u7B14\u8BB0", href: "/ai/" }, { title: "\u5F00\u53D1\u8005\u5DE5\u5177", href: "/tools/" }] }, { title: "\u7D22\u5F15", links: [{ title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }, { title: "\u6587\u7AE0\u5F52\u6863", href: "/archive/" }, { title: "Growth Lab", href: "/growth/" }] }], "canonical": "https://www.xbstack.com/ai/", "lang": "zh-CN" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/practice.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/practice.astro";
const $$url = "/ai/practice/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Practice,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
