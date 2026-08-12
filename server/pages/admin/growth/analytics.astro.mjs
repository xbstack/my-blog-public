import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_Bid3_Fbn.mjs';
import { G as GrowthIntelligenceConsole } from '../../../chunks/GrowthIntelligenceConsole_BtPZhcYM.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Growth GA4 \u884C\u4E3A\u8BCA\u65AD" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthIntelligenceConsole", GrowthIntelligenceConsole, { "client:load": true, "mode": "analytics", "client:component-hydration": "load", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/growth/components/GrowthIntelligenceConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/analytics.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/analytics.astro";
const $$url = "/admin/growth/analytics/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analytics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
