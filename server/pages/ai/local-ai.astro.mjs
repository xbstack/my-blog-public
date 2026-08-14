import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$SearchHubPage } from '../../chunks/SearchHubPage_JUDoSfyB.mjs';
export { renderers } from '../../renderers.mjs';

const $$LocalAi = createComponent(($$result, $$props, $$slots) => {
  const areas = [
    { title: "iOS / Core ML \u7AEF\u4FA7\u63A8\u7406", href: "/ai/local-ai/", desc: "\u6A21\u578B\u4F53\u79EF\u3001Core ML\u3001ANE/NPU\u3001\u5185\u5B58\u3001\u9996 Token \u5EF6\u8FDF\u548C App \u751F\u547D\u5468\u671F\u3002", links: [{ title: "iOS \u96C6\u6210\u8FB9\u754C", href: "/ai/local-ai/" }] },
    { title: "Android / ONNX Runtime", href: "/ai/local-ai/", desc: "ONNX Runtime\u3001NNAPI / NPU\u3001\u8BBE\u5907\u5DEE\u5F02\u3001\u91CF\u5316\u548C APK \u4F53\u79EF\u3002", links: [{ title: "Android \u7AEF\u4FA7\u5B9E\u8DF5", href: "/ai/local-ai/" }] },
    { title: "llama.cpp \u4E0E\u672C\u5730 LLM", href: "/ai/local-ai/", desc: "GGUF\u3001\u91CF\u5316\u3001\u4E0A\u4E0B\u6587\u3001CPU/GPU/NPU \u8D44\u6E90\u548C\u79BB\u7EBF\u8FD0\u884C\u8FB9\u754C\u3002", links: [{ title: "Local LLM", href: "/ai/local-ai/" }] },
    { title: "\u6027\u80FD\u3001\u53D1\u70ED\u4E0E\u7535\u91CF", href: "/ai/local-ai/", desc: "\u4E0D\u662F\u53EA\u770B tokens/s\uFF1B\u8FD8\u8981\u770B\u6301\u7EED\u8D1F\u8F7D\u3001\u70ED\u964D\u9891\u3001\u7535\u6C60\u6D88\u8017\u548C\u4EA4\u4E92\u6D41\u7545\u5EA6\u3002", links: [{ title: "\u6027\u80FD\u8FB9\u754C", href: "/ai/local-ai/" }] },
    { title: "\u9690\u79C1\u4E0E\u79BB\u7EBF\u80FD\u529B", href: "/ai/local-ai/", desc: "\u4EC0\u4E48\u6570\u636E\u5E94\u8BE5\u7559\u5728\u8BBE\u5907\u3001\u4EC0\u4E48\u4EFB\u52A1\u4ECD\u9700\u8981\u4E91\u7AEF\uFF0C\u4EE5\u53CA\u672C\u5730\u6A21\u578B\u771F\u6B63\u5E26\u6765\u7684\u9690\u79C1\u6536\u76CA\u3002", links: [{ title: "\u9690\u79C1\u8BBE\u8BA1", href: "/ai/local-ai/" }] },
    { title: "\u4EA7\u54C1\u8DEF\u7531\u4E0E\u6A21\u578B\u5206\u7EA7", href: "/ai/local-ai/", desc: "\u540C\u4E00\u5957 App \u6839\u636E\u8BBE\u5907\u80FD\u529B\u9009\u62E9\u5C0F\u6A21\u578B\u3001\u5927\u6A21\u578B\u6216\u4E91\u7AEF\u6A21\u578B\uFF0C\u907F\u514D\u4F4E\u7AEF\u8BBE\u5907\u88AB\u5F3A\u884C\u62D6\u6162\u3002", links: [{ title: "\u4EA7\u54C1\u96C6\u6210", href: "/ai/local-ai/" }] }
  ];
  const featured = [
    { type: "GUIDE", title: "\u7AEF\u4FA7 AI \u7684\u771F\u6B63\u8FB9\u754C\uFF1A\u4E0D\u662F\u201C\u80FD\u8DD1\u201D\u5C31\u7B49\u4E8E\u503C\u5F97\u672C\u5730\u5316", href: "/ai/local-ai/", desc: "\u4ECE\u6027\u80FD\u3001\u9690\u79C1\u3001\u6210\u672C\u548C\u4EA7\u54C1\u4F53\u9A8C\u5224\u65AD\u54EA\u4E9B\u80FD\u529B\u5E94\u8BE5\u653E\u5230\u8BBE\u5907\u4E0A\u3002" },
    { type: "PRODUCT", title: "Lunest\uFF1A\u672C\u5730 AI \u4E0E\u4E91\u7AEF\u80FD\u529B\u5982\u4F55\u5206\u5C42", href: "/tools/lunest/", desc: "\u4EE5\u771F\u5B9E\u79FB\u52A8\u4EA7\u54C1\u4E3A\u4F8B\u8BA8\u8BBA\u8BBE\u5907\u80FD\u529B\u3001\u53D1\u70ED\u4E0E\u7528\u6237\u4F53\u9A8C\u3002" },
    { type: "LAB", title: "AI Tools Lab\uFF1A\u7AEF\u4FA7\u6A21\u578B\u5B9E\u6D4B\u5165\u53E3", href: "/ai/tools-lab/", desc: "\u6A21\u578B\u548C\u7AEF\u4FA7\u5DE5\u5177\u7EDF\u4E00\u8FDB\u5165\u771F\u5B9E\u4EFB\u52A1\u8BC4\u6D4B\u4F53\u7CFB\u3002" }
  ];
  const description = "XBSTACK \u7AEF\u4FA7 AI \u4E0E\u79FB\u52A8\u7AEF\u672C\u5730\u63A8\u7406\u5DE5\u7A0B\u4E13\u9898\uFF0C\u8986\u76D6 iOS Core ML\u3001Android ONNX\u3001llama.cpp\u3001\u91CF\u5316\u3001\u6027\u80FD\u3001\u53D1\u70ED\u3001\u7535\u91CF\u3001\u9690\u79C1\u548C\u4EA7\u54C1\u96C6\u6210\u3002";
  return renderTemplate`${renderComponent($$result, "SearchHubPage", $$SearchHubPage, { "seoTitle": "\u7AEF\u4FA7 AI \u4E0E\u79FB\u52A8\u7AEF\u672C\u5730\u63A8\u7406\u5DE5\u7A0B | XBSTACK", "description": description, "keywords": "Local AI, Core ML, ONNX Runtime, llama.cpp, Edge AI, iOS AI, Android AI, \u7AEF\u4FA7\u6A21\u578B", "hubTitle": "\u7AEF\u4FA7 AI \u4E0E\u79FB\u52A8\u7AEF\u672C\u5730\u63A8\u7406\u5DE5\u7A0B", "eyebrow": "Edge AI & On-device Inference Hub", "intro": "\u4ECE iOS / Android \u7684\u6A21\u578B\u8FD0\u884C\u3001\u91CF\u5316\u548C\u786C\u4EF6\u80FD\u529B\uFF0C\u5230\u6301\u7EED\u6027\u80FD\u3001\u53D1\u70ED\u3001\u7535\u91CF\u3001\u9690\u79C1\u4E0E\u4EA7\u54C1\u8DEF\u7531\u3002\u8FD9\u91CC\u5173\u6CE8\u7684\u4E0D\u662F\u201C\u6A21\u578B\u80FD\u4E0D\u80FD\u8DD1\u201D\uFF0C\u800C\u662F\u5B83\u662F\u5426\u503C\u5F97\u8FDB\u5165\u771F\u5B9E App\u3002", "searchPlaceholder": "\u641C\u7D22 Core ML\u3001ONNX\u3001llama.cpp\u3001\u91CF\u5316\u3001\u53D1\u70ED\u3001\u6027\u80FD\u6216\u7AEF\u4FA7\u96C6\u6210\u95EE\u9898\u2026", "popularTopics": [{ title: "Core ML", href: "/ai/local-ai/" }, { title: "ONNX", href: "/ai/local-ai/" }, { title: "llama.cpp", href: "/ai/local-ai/" }, { title: "Quantization", href: "/ai/local-ai/" }, { title: "Thermal", href: "/ai/local-ai/" }, { title: "Privacy", href: "/ai/local-ai/" }], "areas": areas, "featured": featured, "latest": featured, "sidebars": [{ title: "\u76F8\u5173\u5165\u53E3", links: [{ title: "AI Tools Lab", href: "/ai/tools-lab/" }, { title: "Lunest", href: "/tools/lunest/" }, { title: "AI \u5DE5\u7A0B\u603B\u5165\u53E3", href: "/ai/" }] }, { title: "\u5E73\u53F0", links: [{ title: "iOS", href: "/ai/local-ai/" }, { title: "Android", href: "/ai/local-ai/" }, { title: "\u5168\u90E8\u5DE5\u5177", href: "/tools/" }] }], "summary": "\u7AEF\u4FA7\u63A8\u7406\u7684\u6B63\u786E\u95EE\u9898\u4E0D\u662F\u201C\u80FD\u4E0D\u80FD\u585E\u8FDB\u624B\u673A\u201D\uFF0C\u800C\u662F\uFF1A\u5728\u76EE\u6807\u8BBE\u5907\u4E0A\uFF0C\u79BB\u7EBF\u3001\u9690\u79C1\u548C\u6210\u672C\u6536\u76CA\u80FD\u5426\u8986\u76D6\u6A21\u578B\u4F53\u79EF\u3001\u70ED\u964D\u9891\u3001\u7535\u6C60\u6D88\u8017\u3001\u517C\u5BB9\u6027\u548C\u5F00\u53D1\u7EF4\u62A4\u6210\u672C\u3002", "canonical": "https://www.xbstack.com/ai/local-ai/", "lang": "zh-CN" })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/local-ai.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/local-ai.astro";
const $$url = "/ai/local-ai/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LocalAi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
