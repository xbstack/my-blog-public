import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Assets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Growth Console \xB7 \u5185\u5BB9\u8D44\u4EA7" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthOperationsConsole", null, { "mode": "assets", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/growth/components/GrowthOperationsConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/assets.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/assets.astro";
const $$url = "/admin/growth/assets/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Assets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
