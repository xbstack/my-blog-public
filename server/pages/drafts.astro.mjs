import { e as createAstro, c as createComponent } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import 'clsx';
import '../chunks/BaseLayout_qQA58Esh.mjs';
import '../chunks/BlogListCard_pMHxHuJm.mjs';
import '../chunks/_astro_content_DQag2m34.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Drafts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Drafts;
  {
    return Astro2.redirect("/404");
  }
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/drafts.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/drafts.astro";
const $$url = "/drafts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Drafts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
