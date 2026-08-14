import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Opportunities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Growth Console \xB7 SEO \u673A\u4F1A" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthOperationsConsole", null, { "mode": "opportunities", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/growth/components/GrowthOperationsConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/opportunities.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/opportunities.astro";
const $$url = "/admin/growth/opportunities/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Opportunities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
