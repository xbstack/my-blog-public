import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Publisher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "\u5185\u5BB9\u53D1\u5E03\u4E2D\u5FC3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PublisherConsole", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/publisher/components/PublisherConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/publisher.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/publisher.astro";
const $$url = "/admin/publisher/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publisher,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
