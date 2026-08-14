import { d as createAstro, c as createComponent } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Vision = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vision;
  return Astro2.redirect("/about/", 301);
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/vision.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/vision.astro";
const $$url = "/about/vision/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Vision,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
