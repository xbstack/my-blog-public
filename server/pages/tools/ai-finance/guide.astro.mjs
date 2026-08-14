import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$CollectionLandingPage } from '../../../chunks/CollectionLandingPage_BgBjY5m9.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Guide = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    { type: "01", title: "AI \u8D22\u62A5\u52A9\u624B\u662F\u4EC0\u4E48", href: "/ai/ai-finance-analysis-tool/", desc: "\u5148\u5B9A\u4E49\u4EA7\u54C1\u8FB9\u754C\uFF1A\u516C\u5F00\u6570\u636E\u3001\u7ED3\u6784\u5316\u7814\u7A76\u4E0E\u98CE\u9669\u63D0\u793A\uFF0C\u4E0D\u7B49\u4E8E\u6295\u8D44\u5EFA\u8BAE\u3002" },
    { type: "02", title: "7 \u6B65\u8D22\u62A5\u5206\u6790\u6D41\u7A0B", href: "/ai/ai-finance-report-7-steps/", desc: "\u4ECE\u8F93\u5165\u5230\u98CE\u9669\u68C0\u67E5\u6E05\u5355\u7684\u4EBA\u673A\u534F\u540C\u6D41\u7A0B\u3002" },
    { type: "03", title: "\u6280\u672F\u67B6\u6784\u8BBE\u8BA1\u4E0E\u5B9E\u73B0", href: "/ai/ai-financial-report-analyzer-architecture/", desc: "\u628A\u957F\u6587\u672C\u8D22\u62A5\u8F6C\u6210\u53EF\u6267\u884C\u3001\u53EF\u68C0\u67E5\u7684\u5206\u6790\u4EFB\u52A1\u3002" },
    { type: "04", title: "PDF \u8868\u683C\u63D0\u53D6\u4E0E\u89E3\u6790", href: "/ai/financial-report-pdf-table-extraction/", desc: "\u89E3\u51B3\u8DE8\u9875\u8868\u683C\u3001\u9875\u7801\u4E0E\u6570\u503C\u9519\u4F4D\u3002" },
    { type: "05", title: "JSON Schema \u7ED3\u6784\u5316\u8F93\u51FA", href: "/ai/llm-json-schema-financial-report-extraction/", desc: "\u7EA6\u675F KPI\u3001\u98CE\u9669\u56E0\u5B50\u3001source_page \u4E0E evidence\u3002" },
    { type: "06", title: "Golden Dataset \u8BC4\u6D4B\u4F53\u7CFB", href: "/ai/ai-financial-report-evaluation-golden-dataset/", desc: "\u7528\u771F\u5B9E\u6837\u672C\u91CF\u5316\u62BD\u53D6\u4E0E\u89E3\u91CA\u9519\u8BEF\u3002" },
    { type: "07", title: "\u5F02\u6B65\u4EFB\u52A1\u961F\u5217\u4E0E\u72B6\u6001\u673A", href: "/ai/ai-financial-report-task-queue/", desc: "\u5904\u7406 PDF\u3001LLM \u957F\u4EFB\u52A1\u3001\u8FDB\u5EA6\u3001\u8D85\u65F6\u548C\u91CD\u8BD5\u3002" }
  ];
  const description = "AI \u8D22\u62A5\u5206\u6790\u52A9\u624B\u7814\u53D1\u8DEF\u7EBF\uFF0C\u8986\u76D6 PDF \u89E3\u6790\u3001JSON Schema\u3001source_page\u3001evidence\u3001\u5F02\u6B65\u4EFB\u52A1\u961F\u5217\u3001Golden Dataset \u4E0E\u4EBA\u5DE5\u590D\u6838\uFF0C\u5E76\u8FDE\u63A5\u53EF\u76F4\u63A5\u4F7F\u7528\u7684 AI Finance\u3002";
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": "AI \u8D22\u62A5\u5206\u6790\u7CFB\u7EDF\u7814\u53D1\u8DEF\u7EBF", "seoTitle": "AI \u8D22\u62A5\u5206\u6790\u7814\u53D1\u8DEF\u7EBF\uFF1APDF\u3001Schema\u3001\u4EFB\u52A1\u961F\u5217\u3001\u8BC1\u636E\u94FE\u4E0E\u8BC4\u6D4B | XBSTACK", "description": description, "keywords": "AI \u8D22\u62A5\u7814\u53D1, PDF \u89E3\u6790, JSON Schema, evidence, Golden Dataset, AI Finance", "eyebrow": "AI Finance Engineering Guide", "intro": "\u5148\u4FDD\u8BC1\u6570\u636E\u548C\u9875\u7801\u53EF\u4FE1\uFF0C\u518D\u7EA6\u675F\u7ED3\u6784\u5316\u8F93\u51FA\uFF0C\u7136\u540E\u8865\u5F02\u6B65\u4EFB\u52A1\u3001\u8BC1\u636E\u94FE\u3001\u8BC4\u6D4B\u548C\u4EBA\u5DE5\u590D\u6838\u3002\u8FD9\u4E2A Guide \u89E3\u91CA\u5DE5\u7A0B\u8DEF\u7EBF\uFF1BAI Finance \u4EA7\u54C1\u9875\u8D1F\u8D23\u5B9E\u9645\u4F7F\u7528\u3002", "searchPlaceholder": "\u641C\u7D22\u8D22\u62A5\u89E3\u6790\u3001Schema\u3001\u8BC1\u636E\u94FE\u3001\u961F\u5217\u3001\u8BC4\u6D4B\u6216\u4EA7\u54C1\u95EE\u9898\u2026", "chips": [{ title: "\u6253\u5F00 AI Finance", href: "/tools/ai-finance/" }, { title: "7 \u6B65\u6D41\u7A0B", href: "/ai/ai-finance-report-7-steps/" }, { title: "\u5168\u90E8 Tools", href: "/tools/" }], "cards": steps.slice(0, 4), "posts": steps, "sideLinks": [{ title: "AI Finance", href: "/tools/ai-finance/" }, { title: "AI Agent Evaluation", href: "/ai/ai-agent-evaluation-guide/" }, { title: "Workflow", href: "/ai/workflow/" }, { title: "\u514D\u8D23\u58F0\u660E", href: "/disclosure/" }], "note": "\u7814\u53D1\u8DEF\u7EBF\u4E2D\u7684 PDF\u3001\u961F\u5217\u548C\u8BC4\u6D4B\u80FD\u529B\u4E0D\u7B49\u4E8E\u5F53\u524D\u516C\u5F00\u5DE5\u5177\u5DF2\u5168\u90E8\u4E0A\u7EBF\uFF1B\u4EA7\u54C1\u72B6\u6001\u4EE5 AI Finance \u9875\u9762\u4E3A\u51C6\u3002", "canonical": "https://www.xbstack.com/tools/ai-finance/guide/" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/guide.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/ai-finance/guide.astro";
const $$url = "/tools/ai-finance/guide/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Guide,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
