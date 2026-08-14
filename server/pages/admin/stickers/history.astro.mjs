import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$History = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div style="background: #000; color: #fff; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif;"> <div style="text-align: center;"> <h1 style="font-size: 3rem; font-weight: 900; italic: true;">EMOJI ASSETS</h1> <p style="color: #666; margin-top: 1rem;">System path resolution in progress. Maintenance mode.</p> <a href="/admin/stickers" style="display: inline-block; margin-top: 2rem; padding: 0.5rem 1rem; border: 1px solid #333; color: #999; text-decoration: none; border-radius: 8px;">Back to Lab</a> </div> </div>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/stickers/history.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/stickers/history.astro";
const $$url = "/admin/stickers/history/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
