import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Web = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Web;
  const entries = (await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en" && /Astro|Cloudflare|Web|SSR|前端|全栈/i.test(`${data.title || ""} ${data.description || ""} ${(data.tags || []).join(" ")}`))).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.slice(0, 20).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "WEB" }));
  const cards = [{ title: "Astro / SSR", href: "/ai/", desc: "\u8DEF\u7531\u3001SSR\u3001\u6784\u5EFA\u3001\u7F13\u5B58\u548C\u53D1\u5E03\u95EE\u9898\u7EDF\u4E00\u8FDB\u5165\u5DE5\u7A0B\u5B9E\u8DF5\u3002" }, { title: "Cloudflare", href: "/ai/", desc: "Tunnel\u3001\u8FB9\u7F18\u8FD0\u884C\u3001DNS \u4E0E\u90E8\u7F72\u8FB9\u754C\u3002" }, { title: "AI + Web \u4EA7\u54C1", href: "/tools/", desc: "\u628A\u6A21\u578B\u80FD\u529B\u548C\u771F\u5B9E Web \u5DE5\u5177\u3001\u4EA7\u54C1\u7ED3\u5408\u8D77\u6765\u3002" }];
  const description = "XBSTACK Web \u5DE5\u7A0B\u4E0E AI \u5E94\u7528\u5B9E\u8DF5\u7D22\u5F15\uFF0C\u6536\u5F55 Astro\u3001SSR\u3001Cloudflare\u3001\u5168\u6808\u5F00\u53D1\u3001\u6027\u80FD\u4F18\u5316\u4E0E AI Web \u4EA7\u54C1\u6784\u5EFA\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "Web \u5DE5\u7A0B\u4E0E AI \u5E94\u7528\u5B9E\u8DF5", "seoTitle": "Web \u5DE5\u7A0B\u4E0E AI \u5E94\u7528\u5B9E\u8DF5\uFF1AAstro\u3001Cloudflare\u3001SSR \u4E0E\u5168\u6808\u6784\u5EFA | XBSTACK", "description": description, "keywords": "Astro, Cloudflare, SSR, Web \u5DE5\u7A0B, AI Web \u5E94\u7528, \u5168\u6808\u5F00\u53D1", "eyebrow": "Web Engineering & AI Applications", "intro": "\u8FD9\u4E2A\u65E7\u5165\u53E3\u4FDD\u7559 Web \u5DE5\u7A0B\u641C\u7D22\u8D44\u4EA7\uFF0C\u4F46\u751F\u4EA7\u5B9E\u8DF5\u5DF2\u7ECF\u7EDF\u4E00\u5E76\u5165 AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E Tools\u3002\u4F18\u5148\u4ECE\u5177\u4F53\u6545\u969C\u3001\u90E8\u7F72\u4EFB\u52A1\u6216\u4EA7\u54C1\u95EE\u9898\u8FDB\u5165\u3002", "searchPlaceholder": "\u641C\u7D22 Astro\u3001SSR\u3001Cloudflare\u3001\u524D\u7AEF\u3001\u5168\u6808\u6216 Web AI \u95EE\u9898\u2026", "chips": [{ title: "\u5DE5\u7A0B\u5B9E\u8DF5", href: "/ai/" }, { title: "Tools", href: "/tools/" }, { title: "Growth", href: "/growth/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "AI \u5DE5\u7A0B\u603B\u5165\u53E3", href: "/ai/" }, { title: "AI \u5DE5\u5177\u94FE", href: "/ai/tools-lab/" }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }], "note": "\u8BE5\u9875\u9762\u662F Web \u5DE5\u7A0B\u517C\u5BB9\u7D22\u5F15\uFF1B\u65B0\u7684\u4E3B\u8DEF\u5F84\u4EE5 /ai/ \u548C /tools/ \u4E3A\u51C6\u3002", "noindex": true })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/web.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/web.astro";
const $$url = "/ai/web/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Web,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
