import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_Bid3_Fbn.mjs';
import { G as GrowthIntelligenceConsole } from '../../../chunks/GrowthIntelligenceConsole_BtPZhcYM.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Changes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Growth \u4F18\u5316\u590D\u67E5" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthIntelligenceConsole", GrowthIntelligenceConsole, { "client:load": true, "mode": "changes", "client:component-hydration": "load", "client:component-path": "/Users/beijingchaoyang/MyWeb/blog/src/features/growth/components/GrowthIntelligenceConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/changes.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/changes.astro";
const $$url = "/admin/growth/changes/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Changes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
