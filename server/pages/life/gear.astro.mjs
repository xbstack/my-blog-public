import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Gear = createComponent(async ($$result, $$props, $$slots) => {
  const entries = (await getCollection("lens", ({ data }) => {
    const text = `${data.title || ""} ${data.description || ""} ${(data.tags || []).join(" ")}`;
    const isGear = data.hub === "gear" || /EDC|户外装备|程序员装备|键盘|背包|雨衣|手电|鞋|Garmin|HHKB/i.test(text);
    const infra = data.hub === "infrastructure" || /NAS|私有云|AI 工作流|VPS|Docker|Tailscale|n8n|基础设施|自托管/i.test(text);
    return !data.draft && data.lang !== "en" && isGear && !infra;
  })).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "GEAR" }));
  const cards = [
    { title: "\u9AD8\u6D77\u62D4\u4E0E\u5F92\u6B65 EDC", href: "/life/high-altitude-edc/", desc: "\u5934\u706F\u3001\u7535\u529B\u3001\u96E8\u5177\u3001\u5BFC\u822A\u548C\u5197\u4F59\u88C5\u5907\uFF0C\u91CD\u70B9\u770B\u4E0B\u64A4\u548C\u5B89\u5168\u3002" },
    { title: "\u5F00\u53D1\u8005\u684C\u9762 EDC", href: "/life/hhkb-review/", desc: "\u952E\u76D8\u3001\u8F93\u5165\u8BBE\u5907\u4E0E\u957F\u671F\u5DE5\u4F5C\u4F53\u9A8C\uFF0C\u91CD\u89C6\u771F\u5B9E\u4F7F\u7528\u800C\u975E\u53C2\u6570\u8868\u3002" },
    { title: "\u88C5\u5907\u6E05\u5355\u5DE5\u5177", href: "/tools/gear-library/", desc: "\u6839\u636E\u5B63\u8282\u3001\u5929\u6C14\u3001\u6D77\u62D4\u548C\u540C\u884C\u4EBA\u5458\u751F\u6210\u57FA\u7840\u88C5\u5907\u63D0\u9192\u3002" }
  ];
  const description = "XBSTACK \u6237\u5916\u88C5\u5907\u4E0E\u5F00\u53D1\u8005 EDC \u5B9E\u6D4B\u7D22\u5F15\uFF0C\u8BB0\u5F55\u96E8\u8863\u3001\u5934\u706F\u3001\u80CC\u5305\u3001\u978B\u3001Garmin\u3001\u952E\u76D8\u548C\u7535\u529B\u5197\u4F59\u7684\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u3001\u98CE\u9669\u8FB9\u754C\u4E0E\u957F\u671F\u4F53\u9A8C\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u6237\u5916\u88C5\u5907\u4E0E\u5F00\u53D1\u8005 EDC \u5B9E\u6D4B", "seoTitle": "\u6237\u5916\u88C5\u5907\u4E0E\u5F00\u53D1\u8005 EDC \u5B9E\u6D4B\uFF1A\u771F\u5B9E\u4F7F\u7528\u3001\u98CE\u9669\u8FB9\u754C\u4E0E\u957F\u671F\u4F53\u9A8C | XBSTACK", "description": description, "keywords": "\u6237\u5916\u88C5\u5907\u5B9E\u6D4B, EDC, Garmin, HHKB, \u5F92\u6B65\u88C5\u5907, \u5934\u706F, \u96E8\u8863", "eyebrow": "Gear Field Tests", "intro": "\u4E0D\u5806\u53C2\u6570\uFF0C\u53EA\u56DE\u7B54\u771F\u5B9E\u4F7F\u7528\u95EE\u9898\uFF1A\u4E3A\u4EC0\u4E48\u5E26\u3001\u4EC0\u4E48\u65F6\u5019\u6709\u7528\u3001\u54EA\u91CC\u4E0D\u591F\u3001\u91CD\u91CF\u548C\u5197\u4F59\u662F\u5426\u503C\u5F97\uFF0C\u4EE5\u53CA\u5B83\u80FD\u4E0D\u80FD\u5728\u574F\u5929\u6C14\u6216\u75B2\u52B3\u72B6\u6001\u4E0B\u5E2E\u52A9\u4F60\u5B89\u5168\u56DE\u6765\u3002", "searchPlaceholder": "\u641C\u7D22\u88C5\u5907\u3001EDC\u3001\u80CC\u5305\u3001\u96E8\u8863\u3001\u5934\u706F\u3001\u5BFC\u822A\u6216\u4F7F\u7528\u573A\u666F\u2026", "chips": [{ title: "\u5F92\u6B65 EDC", href: "/life/high-altitude-edc/" }, { title: "\u5F00\u53D1\u8005 EDC", href: "/life/hhkb-review/" }, { title: "\u88C5\u5907\u5DE5\u5177", href: "/tools/gear-library/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "Lens \u603B\u5165\u53E3", href: "/life/" }, { title: "\u5F92\u6B65\u8DEF\u7EBF", href: "/life/hiking/" }, { title: "\u88C5\u5907\u6E05\u5355\u5DE5\u5177", href: "/tools/gear-library/" }, { title: "\u5E7F\u544A\u4E0E\u8054\u76DF\u653F\u7B56", href: "/advertising/" }], "note": "\u6D89\u53CA\u8054\u76DF\u94FE\u63A5\u7684\u5546\u54C1\u5165\u53E3\u5FC5\u987B\u660E\u786E\u62AB\u9732\uFF1B\u662F\u5426\u6709\u5546\u4E1A\u5173\u7CFB\u4E0D\u80FD\u6539\u53D8\u5B9E\u6D4B\u7ED3\u8BBA\u3001\u9002\u7528\u8FB9\u754C\u6216\u8D1F\u9762\u4F53\u9A8C\u3002", "canonical": "https://www.xbstack.com/life/gear/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/gear.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/gear.astro";
const $$url = "/life/gear/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Gear,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
