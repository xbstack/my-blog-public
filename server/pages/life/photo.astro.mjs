import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Photo = createComponent(async ($$result, $$props, $$slots) => {
  const entries = (await getCollection("lens", ({ data }) => !data.draft && data.lang !== "en" && (data.category === "photo" || (data.tags || []).includes("photo")))).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "PHOTO" }));
  const cards = [{ title: "\u57CE\u5E02\u4E0E\u591C\u95F4\u5F71\u50CF", href: "/life/lens-city-light/", desc: "\u57CE\u5E02\u5149\u7EBF\u3001\u591C\u95F4\u73AF\u5883\u4E0E\u4F4E\u7167\u5EA6\u573A\u666F\u3002" }, { title: "\u5C71\u91CE\u4E0E\u68EE\u6797", href: "/life/lens-forest/", desc: "\u6797\u5730\u3001\u6EAA\u6D41\u3001\u5C71\u91CE\u5929\u6C14\u4E0E\u73B0\u573A\u6784\u56FE\u3002" }, { title: "\u96EA\u5C71\u4E0E\u9AD8\u6D77\u62D4", href: "/life/lens-snow-peak/", desc: "\u96EA\u7EBF\u3001\u9AD8\u53CD\u5DEE\u3001\u4F4E\u6E29\u548C\u9AD8\u6D77\u62D4\u73AF\u5883\u4E2D\u7684\u62CD\u6444\u5224\u65AD\u3002" }, { title: "Lens \u5F71\u50CF\u5165\u53E3", href: "/life/", desc: "\u56DE\u5230 Lens \u6D4F\u89C8\u6237\u5916\u3001\u65C5\u884C\u3001\u6444\u5F71\u4E0E\u88C5\u5907\u7684\u73B0\u573A\u8BB0\u5F55\u3002" }];
  const description = "XBSTACK \u5F71\u50CF\u8BB0\u5F55\u7D22\u5F15\uFF0C\u6574\u7406\u8D35\u5DDE\u57CE\u5E02\u3001\u5C71\u91CE\u3001\u96EA\u5C71\u4E0E\u591C\u95F4\u6237\u5916\u7684\u771F\u5B9E\u6444\u5F71\u8BB0\u5F55\uFF0C\u5305\u542B\u5730\u70B9\u3001\u5929\u6C14\u3001\u5668\u6750\u9009\u62E9\u3001\u73B0\u573A\u5224\u65AD\u4E0E\u7167\u7247\u80CC\u540E\u7684\u6545\u4E8B\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u5F71\u50CF\u8BB0\u5F55\u4E0E\u73B0\u573A\u6444\u5F71", "seoTitle": "\u5F71\u50CF\u8BB0\u5F55\u4E0E\u73B0\u573A\u6444\u5F71\uFF1A\u5730\u70B9\u3001\u5929\u6C14\u3001\u5668\u6750\u4E0E\u771F\u5B9E\u573A\u666F | XBSTACK", "description": description, "keywords": "\u8D35\u5DDE\u6444\u5F71, \u6237\u5916\u6444\u5F71, \u96EA\u5C71\u6444\u5F71, \u591C\u666F\u6444\u5F71, \u73B0\u573A\u5F71\u50CF", "eyebrow": "Photography & Visual Field Notes", "intro": "\u7167\u7247\u4E0D\u662F\u6587\u7AE0\u88C5\u9970\u3002\u8FD9\u4E2A\u7D22\u5F15\u628A\u5730\u70B9\u3001\u65F6\u95F4\u3001\u5929\u6C14\u3001\u5668\u6750\u548C\u73B0\u573A\u5224\u65AD\u4E0E\u56FE\u7247\u653E\u56DE\u540C\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u4FDD\u7559\u4E3A\u4EC0\u4E48\u62CD\u3001\u600E\u4E48\u62CD\u3001\u54EA\u91CC\u5931\u8D25\u3002", "searchPlaceholder": "\u641C\u7D22\u6444\u5F71\u5730\u70B9\u3001\u5929\u6C14\u3001\u5668\u6750\u3001\u573A\u666F\u6216\u7167\u7247\u8BB0\u5F55\u2026", "chips": [{ title: "\u57CE\u5E02", href: "/life/lens-city-light/" }, { title: "\u68EE\u6797", href: "/life/lens-forest/" }, { title: "\u96EA\u5C71", href: "/life/lens-snow-peak/" }, { title: "Lens", href: "/life/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "Lens \u603B\u5165\u53E3", href: "/life/" }, { title: "\u5F92\u6B65\u8DEF\u7EBF", href: "/life/hiking/" }, { title: "\u88C5\u5907\u5B9E\u6D4B", href: "/life/gear/" }, { title: "Lens \u5F71\u50CF\u5165\u53E3", href: "/life/" }], "canonical": "https://www.xbstack.com/life/photo/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/photo.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/photo.astro";
const $$url = "/life/photo/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Photo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
