import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Affiliates = createComponent(($$result, $$props, $$slots) => {
  const title = "\u53D8\u73B0\u94FE\u63A5\u7BA1\u7406 | XBSTACK Admin";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto"> ${renderComponent($$result2, "AffiliateManager", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/admin/components/AffiliateManager.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/affiliates.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/affiliates.astro";
const $$url = "/admin/affiliates/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Affiliates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
