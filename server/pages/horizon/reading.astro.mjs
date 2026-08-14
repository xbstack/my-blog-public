import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Reading = createComponent(async ($$result, $$props, $$slots) => {
  const [lensPosts, horizonPosts] = await Promise.all([
    getCollection("lens", ({ data }) => !data.draft && data.lang !== "en" && (data.hub === "reading" || data.category === "reading")),
    getCollection("horizon", ({ data }) => !data.draft && data.lang !== "en" && (data.hub === "reading" || data.category === "reading"))
  ]);
  const entries = [...lensPosts, ...horizonPosts].sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "READING" }));
  const cards = [
    { title: "\u9605\u8BFB\u7CFB\u7EDF\u5F00\u5C71\u6587", href: "/horizon/reading/reading-system-for-independent-developer/", desc: "\u4E3A\u4EC0\u4E48\u4E0D\u518D\u5199\u666E\u901A\u4E66\u8BC4\uFF0C\u4EE5\u53CA\u5982\u4F55\u628A\u9605\u8BFB\u53D8\u6210\u73B0\u5B9E\u51B3\u7B56\u7CFB\u7EDF\u3002" },
    { title: "\u6295\u8D44\u4E0E\u51B3\u7B56", href: "/horizon/reading/poor-charlies-almanack/", desc: "\u628A\u6982\u7387\u3001\u53CD\u5411\u601D\u8003\u548C\u957F\u671F\u51B3\u7B56\u653E\u8FDB\u771F\u5B9E\u6295\u8D44\u590D\u76D8\u3002" },
    { title: "\u72EC\u7ACB\u5F00\u53D1\u4E0E\u5DE5\u4F5C\u65B9\u5F0F", href: "/horizon/reading/hackers-and-painters/", desc: "\u9605\u8BFB\u53EA\u6709\u6539\u53D8\u4E86\u4EA7\u54C1\u3001\u5DE5\u4F5C\u548C\u9009\u62E9\uFF0C\u624D\u8FDB\u5165\u957F\u671F\u8D44\u4EA7\u3002" },
    { title: "\u539F\u5219\u4E0E\u53CD\u8106\u5F31", href: "/horizon/reading/principles-notes/", desc: "\u628A\u4E66\u4E2D\u7684\u5224\u65AD\u53D8\u6210\u53EF\u4EE5\u6267\u884C\u548C\u9A8C\u8BC1\u7684\u4E2A\u4EBA\u89C4\u5219\u3002" }
  ];
  const description = "XBSTACK Reading \u662F\u9605\u8BFB\u2014\u5B9E\u8DF5\u2014\u9A8C\u8BC1\u7684\u957F\u671F\u590D\u76D8\u7CFB\u7EDF\uFF0C\u4E0D\u5199\u666E\u901A\u4E66\u8BC4\u548C\u91D1\u53E5\u6458\u6284\uFF0C\u800C\u662F\u628A\u9605\u8BFB\u653E\u8FDB\u6295\u8D44\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u548C\u73B0\u5B9E\u51B3\u7B56\u4E2D\u9A8C\u8BC1\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u9605\u8BFB\u3001\u5B9E\u8DF5\u4E0E\u51B3\u7B56\u590D\u76D8\u7CFB\u7EDF", "seoTitle": "Reading\uFF1A\u628A\u9605\u8BFB\u53D8\u6210\u53EF\u9A8C\u8BC1\u7684\u957F\u671F\u51B3\u7B56\u7CFB\u7EDF | XBSTACK", "description": description, "keywords": "XBSTACK Reading, \u9605\u8BFB\u7CFB\u7EDF, \u9605\u8BFB\u5B9E\u8DF5, \u51B3\u7B56\u7CFB\u7EDF, \u7A0B\u5E8F\u5458\u9605\u8BFB, \u6295\u8D44\u9605\u8BFB", "eyebrow": "Reading \u2192 Practice \u2192 Review", "intro": "\u5E26\u7740\u73B0\u5B9E\u95EE\u9898\u8BFB\uFF0C\u628A\u89C2\u70B9\u653E\u8FDB\u6295\u8D44\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u6216\u751F\u6D3B\u91CC\u8BD5\u4E00\u6B21\uFF0C\u518D\u7528\u7ED3\u679C\u4FEE\u6539\u5224\u65AD\u3002\u8FD9\u91CC\u4E0D\u6536\u5F55\u53EA\u6709\u6458\u6284\u3001\u60C5\u7EEA\u548C\u603B\u7ED3\u7684\u666E\u901A\u4E66\u8BC4\u3002", "searchPlaceholder": "\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005\u3001\u51B3\u7B56\u95EE\u9898\u3001\u6295\u8D44\u6216\u72EC\u7ACB\u5F00\u53D1\u9605\u8BFB\u2026", "chips": [{ title: "\u5F00\u5C71\u6587", href: "/horizon/reading/reading-system-for-independent-developer/" }, { title: "\u6295\u8D44", href: "/horizon/" }, { title: "\u72EC\u7ACB\u5F00\u53D1", href: "/about/" }, { title: "\u957F\u671F\u89C4\u5219", href: "/horizon/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "Horizon \u603B\u5165\u53E3", href: "/horizon/" }, { title: "\u6295\u8D44\u590D\u76D8", href: "/investing/" }, { title: "\u5168\u90E8\u5F52\u6863", href: "/archive/" }], "note": "Reading \u7684\u56FA\u5B9A\u7ED3\u6784\uFF1A\u73B0\u5B9E\u95EE\u9898 \u2192 \u9605\u8BFB\u8F93\u5165 \u2192 \u5B9E\u8DF5\u9A8C\u8BC1 \u2192 \u5931\u8D25/\u8BEF\u5224 \u2192 \u4E0B\u4E00\u6761\u53EF\u6267\u884C\u89C4\u5219\u3002", "canonical": "https://www.xbstack.com/horizon/reading/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/reading.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/reading.astro";
const $$url = "/horizon/reading/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Reading,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
