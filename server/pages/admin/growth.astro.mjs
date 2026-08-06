import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Growth = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "XBSTACK Growth Console" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthOperationsConsole", null, { "mode": "dashboard", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/growth/components/GrowthOperationsConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth.astro";
const $$url = "/admin/growth/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Growth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
