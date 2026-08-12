import { c as createComponent, b as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_Bid3_Fbn.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Growth Console \u6570\u636E\u6E90\u8BBE\u7F6E" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthSettingsConsole", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/growth/components/GrowthSettingsConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/settings.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/settings.astro";
const $$url = "/admin/growth/settings/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
