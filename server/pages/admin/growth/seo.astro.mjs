import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_DUrOWMw0.mjs';
import { G as GrowthIntelligenceConsole } from '../../../chunks/GrowthIntelligenceConsole_BtPZhcYM.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Seo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Growth SEO \u8BCA\u65AD" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthIntelligenceConsole", GrowthIntelligenceConsole, { "client:load": true, "mode": "seo", "client:component-hydration": "load", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/growth/components/GrowthIntelligenceConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/seo.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/seo.astro";
const $$url = "/admin/growth/seo/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Seo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
