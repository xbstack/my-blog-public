import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_Bid3_Fbn.mjs';
import { G as GrowthIntelligenceConsole } from '../../../chunks/GrowthIntelligenceConsole_BtPZhcYM.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Health = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Growth \u7AD9\u70B9\u5065\u5EB7" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthIntelligenceConsole", GrowthIntelligenceConsole, { "client:load": true, "mode": "health", "client:component-hydration": "load", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/growth/components/GrowthIntelligenceConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/health.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/health.astro";
const $$url = "/admin/growth/health/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Health,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
