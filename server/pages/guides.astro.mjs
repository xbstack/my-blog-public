import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { g as guidesData } from '../chunks/guides_DEPxCt2w.mjs';
import { $ as $$CollectionLandingPage } from '../chunks/CollectionLandingPage_BgBjY5m9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const guides = Object.entries(guidesData).map(([slug, data]) => ({ title: data.title, href: slug === "compound-interest" ? "/compound-interest/" : `/guides/${slug}/`, desc: data.description || "", type: "GUIDE" }));
  const cards = [
    { title: "AI \u5DE5\u7A0B\u5316\u8DEF\u7EBF", href: "/ai/", desc: "\u4ECE AI Hub \u8FDB\u5165 Agent\u3001MCP\u3001LangGraph\u3001Workflow \u4E0E\u751F\u4EA7\u6CBB\u7406\u3002" },
    { title: "n8n AI Workflow", href: "/ai/workflow/", desc: "\u4ECE\u89E6\u53D1\u3001Webhook\u3001Queue\u3001Retry \u5230\u957F\u671F\u8FD0\u7EF4\u3002" },
    { title: "\u957F\u671F\u8D44\u4EA7\u4E0E\u590D\u5229", href: "/horizon/", desc: "\u590D\u5229\u3001\u6295\u8D44\u590D\u76D8\u3001Reading \u4E0E\u8D44\u4EA7\u6784\u5EFA\u3002" },
    { title: "\u57FA\u7840\u8BBE\u65BD\u4E0E\u81EA\u6258\u7BA1", href: "/ai/", desc: "NAS\u3001Docker\u3001Cloudflare\u3001Astro SSR \u4E0E\u4E2A\u4EBA\u57FA\u7840\u8BBE\u65BD\u3002" }
  ];
  const description = "XBSTACK \u4E13\u9898\u6307\u5357\u6309\u771F\u5B9E\u95EE\u9898\u548C\u5B66\u4E60\u8DEF\u5F84\u7EC4\u7EC7 AI Agent\u3001MCP\u3001LangGraph\u3001Workflow\u3001\u590D\u5229\u6295\u8D44\u548C\u57FA\u7840\u8BBE\u65BD\u5185\u5BB9\uFF0C\u9002\u5408\u4ECE\u4EFB\u52A1\u5165\u53E3\u8FDB\u5165\u800C\u4E0D\u662F\u6309\u65F6\u95F4\u7FFB\u6587\u7AE0\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u4E13\u9898\u6307\u5357\u4E0E\u5B66\u4E60\u8DEF\u5F84", "seoTitle": "\u4E13\u9898\u6307\u5357\uFF1AAI Agent\u3001MCP\u3001LangGraph\u3001Workflow \u4E0E\u957F\u671F\u8D44\u4EA7 | XBSTACK", "description": description, "keywords": "XBSTACK \u4E13\u9898\u6307\u5357, AI Agent \u5B66\u4E60\u8DEF\u7EBF, MCP \u6307\u5357, LangGraph \u6307\u5357, n8n Workflow, \u590D\u5229\u6295\u8D44", "eyebrow": "Guides & Learning Paths", "intro": "\u4E13\u9898\u6307\u5357\u4E0D\u662F\u6587\u7AE0\u5F52\u6863\u3002\u5148\u9009\u62E9\u4F60\u6B63\u5728\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u518D\u6CBF\u7740\u4E00\u4E2A\u5B8C\u6574\u8DEF\u5F84\u8FDB\u5165\u6838\u5FC3\u6982\u5FF5\u3001\u751F\u4EA7\u5B9E\u8DF5\u3001\u6392\u969C\u6587\u7AE0\u548C\u5DE5\u5177\u3002", "searchPlaceholder": "\u641C\u7D22\u4E13\u9898\u3001\u5B66\u4E60\u8DEF\u7EBF\u3001\u6846\u67B6\u3001\u5DE5\u5177\u6216\u5DE5\u7A0B\u95EE\u9898\u2026", "chips": [{ title: "AI", href: "/ai/" }, { title: "MCP", href: "/ai/mcp/" }, { title: "LangGraph", href: "/ai/langgraph/" }, { title: "Workflow", href: "/ai/workflow/" }, { title: "Horizon", href: "/horizon/" }], "cards": cards, "posts": guides, "sideLinks": [{ title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u4F53\u7CFB", href: "/ai/" }, { title: "\u5F00\u53D1\u8005\u5DE5\u5177", href: "/tools/" }, { title: "\u6587\u7AE0\u5F52\u6863", href: "/archive/" }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }], "note": "\u65B0\u8BFB\u8005\u4F18\u5148\u4ECE Hub \u8FDB\u5165\uFF1BGuides \u4FDD\u7559\u4F5C\u4E3A\u8DE8\u4E13\u9898\u5B66\u4E60\u8DEF\u5F84\uFF0C\u4E0D\u518D\u4E0E Hub \u7ADE\u4E89\u540C\u4E00\u5C42\u7EA7\u3002", "canonical": "https://www.xbstack.com/guides/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/guides/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/guides/index.astro";
const $$url = "/guides/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
