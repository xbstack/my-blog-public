import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Tasks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Growth Console \xB7 \u589E\u957F\u4EFB\u52A1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GrowthOperationsConsole", null, { "mode": "tasks", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/growth/components/GrowthOperationsConsole.jsx", "client:component-export": "default" })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/tasks.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/growth/tasks.astro";
const $$url = "/admin/growth/tasks/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tasks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
