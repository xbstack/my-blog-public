import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$ArticleEditor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleEditor;
  const editId = Astro2.url.searchParams.get("edit");
  const collection = Astro2.url.searchParams.get("collection") || "blog";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": editId ? "\u7F16\u8F91\u6587\u7AE0" : "\u65B0\u5EFA\u6587\u7AE0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-container"> ${renderComponent($$result2, "ArticleEditorClient", null, { "client:only": "react", "initialEditId": editId || null, "collection": collection, "client:component-hydration": "only", "client:component-path": "@features/content-editor/components/ArticleEditor.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/article-editor.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/article-editor.astro";
const $$url = "/admin/article-editor/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ArticleEditor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
