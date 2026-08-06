import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, w as renderSlot } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_qQA58Esh.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$PublicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PublicLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/layouts/PublicLayout.astro", void 0);

export { $$PublicLayout as $ };
