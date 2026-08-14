import { c as createComponent, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$CollectionLandingPage } from '../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entries = [];
  for (const col of ["horizon", "ai", "notes"]) {
    try {
      entries.push(...await getCollection(col, ({ data }) => !data.draft && data.lang !== "en" && (data.category === "finance" || (data.tags || []).includes("\u590D\u5229"))));
    } catch {
    }
  }
  entries.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.slice(0, 24).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "FINANCE" }));
  const cards = [
    { title: "\u590D\u5229\u3001\u5B9A\u6295\u4E0E FIRE \u5047\u8BBE\u8BA1\u7B97\u5668", href: "/tools/compound-calculator/", desc: "\u76F4\u63A5\u8F93\u5165\u672C\u91D1\u3001\u73B0\u91D1\u6D41\u3001\u65F6\u95F4\u3001\u6536\u76CA\u5047\u8BBE\u4E0E\u901A\u80C0\u505A\u538B\u529B\u6D4B\u8BD5\u3002" },
    { title: "\u6295\u8D44\u7814\u7A76\u4E0E\u51B3\u7B56\u590D\u76D8", href: "/investing/", desc: "\u628A\u6570\u5B66\u5047\u8BBE\u653E\u56DE\u516C\u53F8\u7814\u7A76\u3001\u6295\u8D44\u590D\u76D8\u548C\u771F\u5B9E\u51B3\u7B56\u3002" },
    { title: "Horizon \u957F\u671F\u51B3\u7B56", href: "/horizon/", desc: "\u590D\u5229\u4E0D\u53EA\u7528\u4E8E\u6295\u8D44\uFF0C\u4E5F\u7528\u4E8E\u6280\u80FD\u3001\u4EA7\u54C1\u3001\u5185\u5BB9\u4E0E\u957F\u671F\u8D44\u4EA7\u6784\u5EFA\u3002" }
  ];
  const description = "XBSTACK \u590D\u5229\u6D4B\u7B97\u6307\u5357\uFF0C\u7528\u6570\u5B66\u65B9\u5F0F\u7406\u89E3\u672C\u91D1\u3001\u73B0\u91D1\u6D41\u3001\u65F6\u95F4\u3001\u901A\u80C0\u3001\u56DE\u64A4\u4E0E FIRE \u5047\u8BBE\uFF0C\u5E76\u8FDE\u63A5\u590D\u5229\u8BA1\u7B97\u5668\u548C\u957F\u671F\u6295\u8D44\u590D\u76D8\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u590D\u5229\u3001\u5B9A\u6295\u4E0E\u957F\u671F\u8D44\u4EA7\u6D4B\u7B97", "seoTitle": "\u590D\u5229\u6D4B\u7B97\u6307\u5357\uFF1A\u672C\u91D1\u3001\u5B9A\u6295\u3001\u901A\u80C0\u3001\u56DE\u64A4\u4E0E FIRE \u5047\u8BBE | XBSTACK", "description": description, "keywords": "\u590D\u5229\u8BA1\u7B97, \u5B9A\u6295, FIRE, \u901A\u80C0, \u56DE\u64A4, \u957F\u671F\u8D44\u4EA7", "eyebrow": "Compound Interest & Long-term Assumptions", "intro": "\u590D\u5229\u4E0D\u662F\u6536\u76CA\u627F\u8BFA\uFF0C\u800C\u662F\u4E00\u5957\u53C2\u6570\u5173\u7CFB\u3002\u5148\u628A\u672C\u91D1\u3001\u73B0\u91D1\u6D41\u3001\u65F6\u95F4\u3001\u6536\u76CA\u5047\u8BBE\u3001\u901A\u80C0\u548C\u56DE\u64A4\u653E\u8FDB\u540C\u4E00\u4E2A\u6A21\u578B\uFF0C\u518D\u5224\u65AD\u957F\u671F\u76EE\u6807\u662F\u5426\u7A33\u5065\u3002", "searchPlaceholder": "\u641C\u7D22\u590D\u5229\u3001\u5B9A\u6295\u3001FIRE\u3001\u901A\u80C0\u3001\u56DE\u64A4\u6216\u957F\u671F\u8D44\u4EA7\u95EE\u9898\u2026", "chips": [{ title: "\u590D\u5229\u8BA1\u7B97\u5668", href: "/tools/compound-calculator/" }, { title: "Investing", href: "/investing/" }, { title: "Horizon", href: "/horizon/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "AI Finance", href: "/tools/ai-finance/" }, { title: "\u514D\u8D23\u58F0\u660E", href: "/disclosure/" }, { title: "Reading", href: "/horizon/reading/" }], "note": "\u672C\u9875\u53EA\u8BA8\u8BBA\u6570\u5B66\u5047\u8BBE\u548C\u957F\u671F\u590D\u76D8\uFF0C\u4E0D\u9884\u6D4B\u5E02\u573A\uFF0C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\u3002", "canonical": "https://www.xbstack.com/compound-interest/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/compound-interest/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/compound-interest/index.astro";
const $$url = "/compound-interest/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
