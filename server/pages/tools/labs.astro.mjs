import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$CollectionLandingPage } from '../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { title: "UTM Builder", href: "/tools/utm-builder/", desc: "\u7EDF\u4E00\u5206\u53D1\u94FE\u63A5\u53C2\u6570\u548C\u6765\u6E90\u5F52\u56E0\u3002", type: "TOOL", meta: "\u5DF2\u53EF\u7528" },
    { title: "\u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1", href: "/growth/", desc: "Search Console\u3001404\u3001\u5185\u94FE\u3001\u6807\u9898\u548C\u53D1\u5E03\u8D28\u68C0\u8FDB\u5165 Growth Lab\u3002", type: "GROWTH", meta: "\u6301\u7EED\u7EF4\u62A4" },
    { title: "AI Workflow \u6A21\u677F", href: "/ai/workflow/", desc: "\u628A\u81EA\u52A8\u5316\u539F\u578B\u653E\u56DE\u771F\u5B9E Workflow \u573A\u666F\u9A8C\u8BC1\u3002", type: "WORKFLOW", meta: "\u6301\u7EED\u9A8C\u8BC1" },
    { title: "\u7AEF\u4FA7 AI \u5B9E\u9A8C", href: "/ai/local-ai/", desc: "iOS / Android \u672C\u5730\u6A21\u578B\u80FD\u529B\u6309\u8BBE\u5907\u548C\u4EA7\u54C1\u573A\u666F\u9A8C\u8BC1\u3002", type: "LOCAL AI", meta: "\u5B9E\u9A8C\u4E2D" }
  ];
  const cards = [
    { title: "\u5148\u7528\u5DF2\u7ECF\u7A33\u5B9A\u7684\u5DE5\u5177", href: "/tools/", desc: "\u6B63\u5F0F Tools \u53EA\u5C55\u793A\u5177\u6709\u660E\u786E\u7528\u9014\u548C\u957F\u671F\u7EF4\u62A4\u4EF7\u503C\u7684\u4EA7\u54C1\u3002" },
    { title: "\u518D\u770B\u589E\u957F\u5B9E\u9A8C", href: "/growth/", desc: "\u7F51\u7AD9\u8FD0\u8425\u3001\u641C\u7D22\u589E\u957F\u3001UTM \u4E0E\u53D1\u5E03\u8D28\u68C0\u96C6\u4E2D\u5728 Growth\u3002" },
    { title: "\u5DE5\u7A0B\u5B9E\u9A8C\u8FDB\u5165 AI Hub", href: "/ai/", desc: "Agent\u3001MCP\u3001LangGraph\u3001Workflow \u4E0E\u7AEF\u4FA7 AI \u8FDB\u5165\u5BF9\u5E94\u4E13\u4E1A Hub\u3002" }
  ];
  const description = "XBSTACK Labs \u6536\u7EB3\u4ECD\u5728\u9A8C\u8BC1\u4E2D\u7684\u5DE5\u5177\u548C\u5DE5\u7A0B\u5B9E\u9A8C\u3002\u6210\u719F\u9879\u76EE\u8FDB\u5165\u6B63\u5F0F Tools\uFF1B\u589E\u957F\u5B9E\u9A8C\u8FDB\u5165 Growth\uFF1BAI \u5DE5\u7A0B\u5B9E\u9A8C\u8FDB\u5165\u5BF9\u5E94 Hub\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "\u5F00\u53D1\u4E2D\u5DE5\u5177\u4E0E\u5B9E\u9A8C", "seoTitle": "XBSTACK Labs\uFF1A\u5F00\u53D1\u4E2D\u5DE5\u5177\u3001\u589E\u957F\u5B9E\u9A8C\u4E0E\u5DE5\u7A0B\u539F\u578B", "description": description, "keywords": "XBSTACK Labs, UTM Builder, \u5F00\u53D1\u4E2D\u5DE5\u5177, \u641C\u7D22\u589E\u957F, AI Workflow, \u7AEF\u4FA7 AI", "eyebrow": "Labs & Experiments", "intro": "Labs \u4E0D\u662F\u4EA7\u54C1\u5C55\u793A\u5899\u3002\u4E00\u4E2A\u5B9E\u9A8C\u53EA\u6709\u5728\u771F\u5B9E\u4EFB\u52A1\u91CC\u8BC1\u660E\u6709\u7528\u3001\u80FD\u591F\u7A33\u5B9A\u7EF4\u62A4\u5E76\u4E14\u7528\u6237\u76EE\u6807\u6E05\u6670\u540E\uFF0C\u624D\u5347\u7EA7\u6210\u6B63\u5F0F Tool \u6216\u72EC\u7ACB\u4EA7\u54C1\u3002", "searchPlaceholder": "\u641C\u7D22 UTM\u3001\u5185\u5BB9\u5BA1\u8BA1\u3001\u81EA\u52A8\u5316\u3001\u7AEF\u4FA7 AI \u6216\u5B9E\u9A8C\u8BB0\u5F55\u2026", "chips": [{ title: "\u6B63\u5F0F Tools", href: "/tools/" }, { title: "Growth", href: "/growth/" }, { title: "AI Hub", href: "/ai/" }], "cards": cards, "posts": items, "sideLinks": [{ title: "Tools", href: "/tools/" }, { title: "Growth Lab", href: "/growth/" }, { title: "AI Workflow", href: "/ai/workflow/" }, { title: "\u7AEF\u4FA7 AI", href: "/ai/local-ai/" }], "note": "\u5B9E\u9A8C\u72B6\u6001\u4F1A\u53D8\u5316\uFF1B\u9875\u9762\u53EA\u8BF4\u660E\u5F53\u524D\u65B9\u5411\uFF0C\u4E0D\u628A\u89C4\u5212\u4E2D\u7684\u80FD\u529B\u5199\u6210\u5DF2\u7ECF\u4E0A\u7EBF\u3002", "noindex": true })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/labs/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/labs/index.astro";
const $$url = "/tools/labs/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
