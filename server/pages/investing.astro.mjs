import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$CollectionLandingPage } from '../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const selectedCategory = Astro2.url.searchParams.get("category");
  const all = await getCollection("horizon", ({ data }) => {
    const hub = data.hub === "investing" || data.section === "horizon";
    const cat = ["investing", "finance", "reading"].includes(data.category);
    return !data.draft && data.lang !== "en" && (hub || cat);
  });
  const filtered = (selectedCategory ? all.filter((p) => p.data.category === selectedCategory) : all.filter((p) => p.data.category !== "reading")).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = filtered.slice(0, 24).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: entry.data.category === "finance" ? "FINANCE" : entry.data.category === "reading" ? "READING" : "REVIEW" }));
  const cards = [
    { title: "\u5B9A\u6295\u8FD8\u662F\u4E00\u6B21\u6027\u6295\u5165", href: "/investing/mastering-dca-strategy/", desc: "\u5DF2\u6709\u6574\u7B14\u73B0\u91D1\u548C\u6BCF\u6708\u5DE5\u8D44\u578B\u5B9A\u6295\u4E0D\u662F\u540C\u4E00\u4E2A\u95EE\u9898\uFF1A\u5148\u770B\u8DEF\u5F84\u98CE\u9669\u3001\u73B0\u91D1\u7B49\u5F85\u6210\u672C\u4E0E\u6267\u884C\u7EAA\u5F8B\u3002" },
    { title: "\u590D\u5229\u4E0E FIRE \u5047\u8BBE", href: "/tools/compound-calculator/", desc: "\u5148\u7406\u89E3\u672C\u91D1\u3001\u73B0\u91D1\u6D41\u3001\u65F6\u95F4\u3001\u6536\u76CA\u5047\u8BBE\u548C\u901A\u80C0\u7684\u6570\u5B66\u5173\u7CFB\u3002" },
    { title: "AI \u8D22\u62A5\u5206\u6790", href: "/tools/ai-finance/", desc: "\u7528\u516C\u5F00\u8D22\u62A5\u548C\u516C\u53F8\u57FA\u672C\u9762\u505A\u7ED3\u6784\u5316\u7814\u7A76\uFF0C\u7ED3\u679C\u56DE\u5230\u539F\u59CB\u62AB\u9732\u590D\u6838\u3002" },
    { title: "\u771F\u5B9E\u6295\u8D44\u590D\u76D8", href: "/investing/?category=investing", desc: "\u8BB0\u5F55\u5F53\u65F6\u5224\u65AD\u3001\u540E\u6765\u7ED3\u679C\u3001\u9519\u8BEF\u548C\u89C4\u5219\u53D8\u5316\uFF0C\u4E0D\u7ED9\u4E70\u5356\u5EFA\u8BAE\u3002" },
    { title: "Reading \u51B3\u7B56\u7CFB\u7EDF", href: "/horizon/reading/", desc: "\u7528\u9605\u8BFB\u4FEE\u6B63\u5224\u65AD\uFF0C\u628A\u89C2\u70B9\u653E\u8FDB\u73B0\u5B9E\u51B3\u7B56\u91CC\u9A8C\u8BC1\u3002" }
  ];
  const description = "XBSTACK Investing \u662F\u590D\u5229\u3001FIRE\u3001\u8D22\u62A5\u7814\u7A76\u548C\u4E2A\u4EBA\u6295\u8D44\u590D\u76D8\u5165\u53E3\uFF0C\u8BB0\u5F55\u516C\u5F00\u4FE1\u606F\u3001\u5DE5\u5177\u65B9\u6CD5\u3001\u9519\u8BEF\u3001\u98CE\u9669\u8FB9\u754C\u4E0E\u51B3\u7B56\u89C4\u5219\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u6295\u8D44\u7814\u7A76\u3001\u590D\u5229\u4E0E\u51B3\u7B56\u590D\u76D8", "seoTitle": "Investing\uFF1A\u590D\u5229\u3001FIRE\u3001\u8D22\u62A5\u7814\u7A76\u4E0E\u957F\u671F\u6295\u8D44\u590D\u76D8 | XBSTACK", "description": description, "keywords": "XBSTACK Investing, \u590D\u5229\u6295\u8D44, FIRE, \u8D22\u62A5\u5206\u6790, \u6295\u8D44\u590D\u76D8, AI Finance", "eyebrow": "Investing Research & Review", "intro": "\u4E0D\u505A\u80A1\u7968\u63A8\u8350\u9875\u3002\u8FD9\u91CC\u628A\u590D\u5229\u5047\u8BBE\u3001\u8D22\u62A5\u7814\u7A76\u3001\u516C\u5F00\u4FE1\u606F\u548C\u4E8B\u540E\u590D\u76D8\u653E\u5230\u540C\u4E00\u5957\u957F\u671F\u51B3\u7B56\u6846\u67B6\u91CC\uFF1A\u5148\u9A8C\u8BC1\u5047\u8BBE\uFF0C\u518D\u8BB0\u5F55\u9519\u8BEF\uFF0C\u6700\u540E\u4FEE\u6539\u4E0B\u4E00\u6B21\u89C4\u5219\u3002", "searchPlaceholder": "\u641C\u7D22\u590D\u5229\u3001FIRE\u3001\u516C\u53F8\u7814\u7A76\u3001\u8D22\u62A5\u3001\u6295\u8D44\u590D\u76D8\u6216\u98CE\u9669\u95EE\u9898\u2026", "chips": [{ title: "\u5168\u90E8", href: "/investing/" }, { title: "\u590D\u5229\u539F\u7406", href: "/investing/?category=finance" }, { title: "\u5B9E\u6218\u590D\u76D8", href: "/investing/?category=investing" }, { title: "Reading", href: "/investing/?category=reading" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "Horizon \u603B\u5165\u53E3", href: "/horizon/" }, { title: "\u590D\u5229\u8BA1\u7B97\u5668", href: "/tools/compound-calculator/" }, { title: "AI Finance", href: "/tools/ai-finance/" }, { title: "\u514D\u8D23\u58F0\u660E", href: "/disclosure/" }], "note": "\u6240\u6709\u6295\u8D44\u76F8\u5173\u5185\u5BB9\u53EA\u8BB0\u5F55\u516C\u5F00\u4FE1\u606F\u3001\u4E2A\u4EBA\u7814\u7A76\u4E0E\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u8BC1\u5238\u63A8\u8350\u3001\u6536\u76CA\u627F\u8BFA\u6216\u4E2A\u6027\u5316\u6295\u8D44\u5EFA\u8BAE\u3002", "canonical": "https://www.xbstack.com/investing/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/index.astro";
const $$url = "/investing/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
