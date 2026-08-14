import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$LegacyTopicPage } from '../../chunks/LegacyTopicPage_BySIXPFv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LegacyTopicPage", $$LegacyTopicPage, { "title": "NAS\u3001\u81EA\u6258\u7BA1\u4E0E\u4E2A\u4EBA\u57FA\u7840\u8BBE\u65BD", "description": "XBSTACK NAS \u5386\u53F2\u5165\u53E3\uFF0C\u76F8\u5173\u5185\u5BB9\u5DF2\u7EDF\u4E00\u8FDB\u5165 AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u57FA\u7840\u8BBE\u65BD\u8BB0\u5F55\u3002", "intro": "NAS\u3001Docker\u3001\u5907\u4EFD\u3001\u8FDC\u7A0B\u8BBF\u95EE\u548C\u79C1\u6709\u670D\u52A1\u73B0\u5728\u7EDF\u4E00\u6309\u81EA\u6258\u7BA1\u4E0E\u57FA\u7840\u8BBE\u65BD\u95EE\u9898\u7EC4\u7EC7\u3002NAS \u662F\u6570\u636E\u548C\u670D\u52A1\u5E95\u5EA7\uFF0C\u4E0D\u518D\u4F5C\u4E3A\u72EC\u7ACB\u4E3B\u680F\u76EE\u3002", "primaryTitle": "AI \u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u57FA\u7840\u8BBE\u65BD\u8BB0\u5F55", "primaryHref": "/ai/", "primaryDesc": "NAS\u3001\u81EA\u6258\u7BA1\u3001Docker\u3001Cloudflare\u3001Astro SSR \u4E0E\u751F\u4EA7\u90E8\u7F72\u3002", "related": [{ title: "AI Workflow", href: "/ai/workflow/", desc: "\u628A n8n \u548C\u81EA\u52A8\u5316\u670D\u52A1\u8FD0\u884C\u5728\u53EF\u7EF4\u62A4\u57FA\u7840\u8BBE\u65BD\u4E0A\u3002" }, { title: "\u88C5\u5907\u4E0E NAS \u68C0\u67E5\u5DE5\u5177", href: "/tools/gear-library/", desc: "\u68C0\u67E5 UPS\u3001\u5FEB\u7167\u548C\u5F02\u5730\u5907\u4EFD\u7B49\u57FA\u7840\u7F3A\u53E3\u3002" }] })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/nas/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/nas/index.astro";
const $$url = "/productivity/nas/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
