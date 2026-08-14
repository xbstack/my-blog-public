import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jbBoyPXF.mjs';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Hiking = createComponent(async ($$result, $$props, $$slots) => {
  const actualCategories = ["outdoor", "summit"];
  const TECH_HUBS = /* @__PURE__ */ new Set(["infrastructure", "nas", "workflow", "dev", "ai", "mcp"]);
  const ROUTE_KEYWORDS = /户外|徒步|高坡|草海|雪山|攀登|路线|峡谷|关岭|雅拉|哈巴|夜爬|下撤|海拔|露营/i;
  const entries = (await getCollection("lens", ({ data }) => {
    const hub = String(data.hub || "").toLowerCase();
    const text = `${data.category || ""} ${data.hub || ""} ${data.title || ""} ${data.description || ""} ${(data.tags || []).join(" ")}`;
    if (data.draft || data.lang === "en" || TECH_HUBS.has(hub) || /Docker|VPS|NAS|MCP|Agent|AI 工作流|基础设施|私有云/i.test(text)) return false;
    return actualCategories.includes(data.category) || hub === "hiking" || ROUTE_KEYWORDS.test(text);
  })).sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const posts = entries.slice(0, 20).map((entry) => ({ title: entry.data.title, href: resolveEntryUrl(entry), desc: entry.data.description || "", meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" }) : "", type: "FIELD" }));
  const cards = [
    { title: "\u8D35\u9633\u5468\u8FB9\u534A\u65E5\u5F92\u6B65", href: "/life/gaopo-cloud-top-offline/", desc: "\u5173\u6CE8\u51FA\u53D1\u65F6\u95F4\u3001\u505C\u8F66\u3001\u5929\u6C14\u548C\u5929\u9ED1\u524D\u4E0B\u64A4\u3002" },
    { title: "\u8D35\u5DDE\u7701\u5185\u4E00\u65E5\u8DEF\u7EBF", href: "/life/guizhou-hidden-trails/", desc: "\u5468\u672B\u5F53\u5929\u5F80\u8FD4\uFF0C\u91CD\u70B9\u770B\u8DEF\u51B5\u3001\u8865\u7ED9\u4E0E\u64A4\u9000\u3002" },
    { title: "\u4EB2\u6C34\u5CE1\u8C37\u4E0E\u590F\u5B63\u8DEF\u7EBF", href: "/life/guanling-ice-mortar-preview/", desc: "\u5CE1\u8C37\u3001\u6EAA\u6D41\u3001\u5CA9\u77F3\u5730\u8C8C\u4E0E\u590F\u5B63\u5B89\u5168\u8FB9\u754C\u3002" },
    { title: "\u9AD8\u6D77\u62D4\u8FDC\u7EBF", href: "/life/yala-summit/", desc: "\u96EA\u7EBF\u3001\u7F3A\u6C27\u3001\u788E\u77F3\u5761\u3001\u88C5\u5907\u5197\u4F59\u4E0E\u64A4\u9000\u8BA1\u5212\u3002" },
    { title: "\u5A01\u5B81\u8349\u6D77\u4E0E\u9AD8\u539F\u8DEF\u7EBF", href: "/life/weining-caohai-reset/", desc: "\u5F92\u6B65\u3001\u62CD\u9E1F\u3001\u9AD8\u539F\u4F53\u611F\u4E0E\u5468\u8FB9\u6D3B\u52A8\u3002" }
  ];
  const description = "XBSTACK \u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF\u7D22\u5F15\uFF0C\u8BB0\u5F55\u8D35\u9633\u5468\u8FB9\u3001\u5A01\u5B81\u8349\u6D77\u3001\u5173\u5CAD\u5CE1\u8C37\u548C\u9AD8\u6D77\u62D4\u8FDC\u7EBF\u7684\u5929\u6C14\u3001\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u98CE\u9669\u3001\u4E0B\u64A4\u548C\u8EAB\u4F53\u53CD\u9988\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF", "seoTitle": "\u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF\uFF1A\u771F\u5B9E\u8DEF\u4E66\u3001\u5929\u6C14\u3001\u8865\u7ED9\u4E0E\u4E0B\u64A4 | XBSTACK", "description": description, "keywords": "\u8D35\u5DDE\u5F92\u6B65, \u8D35\u9633\u5F92\u6B65, \u8D35\u5DDE\u6237\u5916\u8DEF\u7EBF, \u8349\u6D77, \u5173\u5CAD\u5CE1\u8C37, \u6237\u5916\u4E0B\u64A4", "eyebrow": "Hiking Routes & Field Notes", "intro": "\u8DEF\u7EBF\u9875\u4E0D\u505A\u666F\u70B9\u79CD\u8349\u3002\u6BCF\u6761\u5185\u5BB9\u5C3D\u91CF\u56DE\u7B54\uFF1A\u4ECE\u54EA\u91CC\u51FA\u53D1\u3001\u8D70\u591A\u4E45\u3001\u5929\u6C14\u548C\u8DEF\u51B5\u600E\u6837\u3001\u54EA\u91CC\u8865\u7ED9\u3001\u98CE\u9669\u5728\u54EA\u91CC\u3001\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u4E0B\u64A4\u3002", "searchPlaceholder": "\u641C\u7D22\u8D35\u5DDE\u5F92\u6B65\u3001\u8DEF\u7EBF\u3001\u5730\u70B9\u3001\u5929\u6C14\u3001\u8865\u7ED9\u6216\u4E0B\u64A4\u95EE\u9898\u2026", "chips": [{ title: "\u534A\u65E5\u8DEF\u7EBF", href: "#routes" }, { title: "\u4E00\u65E5\u8DEF\u7EBF", href: "#routes" }, { title: "\u9AD8\u6D77\u62D4", href: "#routes" }, { title: "\u5A01\u5B81", href: "/life/weining-caohai-reset/" }, { title: "\u5173\u5CAD", href: "/life/guanling-ice-mortar-preview/" }], "cards": cards, "posts": posts, "sideLinks": [{ title: "Lens \u603B\u5165\u53E3", href: "/life/" }, { title: "\u88C5\u5907\u5B9E\u6D4B", href: "/life/gear/" }, { title: "\u6444\u5F71\u8BB0\u5F55", href: "/life/photo/" }, { title: "\u88C5\u5907\u6E05\u5355\u5DE5\u5177", href: "/tools/gear-library/" }], "note": "\u73B0\u573A\u7ECF\u5386\u4F18\u5148\u3002\u516C\u5F00\u8D44\u6599\u53EA\u80FD\u8865\u5145\u5929\u6C14\u3001\u4EA4\u901A\u548C\u7BA1\u7406\u4FE1\u606F\uFF0C\u4E0D\u80FD\u4EE3\u66FF\u4EB2\u81EA\u8D70\u8FC7\u7684\u8DEF\u7EBF\u3001\u8EAB\u4F53\u53CD\u9988\u548C\u98CE\u9669\u5224\u65AD\u3002", "canonical": "https://www.xbstack.com/life/hiking/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/hiking.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/hiking.astro";
const $$url = "/life/hiking/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Hiking,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
