import { p as parsePublisherMarkdown, b as buildPublisherPreview } from '../../../chunks/markdown_DRfC83uz.mjs';
import { a as getPublisherStatus } from '../../../chunks/config_rjp9Q1W5.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const article = parsePublisherMarkdown({
      markdown: String(body.markdown || ""),
      id: body.id,
      collection: body.collection,
      source: body.source || "manual",
      assetMap: body.assetMap || {}
    });
    const platforms = Array.isArray(body.platforms) ? body.platforms : void 0;
    return json({ success: true, data: buildPublisherPreview(article, platforms), status: getPublisherStatus() });
  } catch (error) {
    return json({ success: false, error: error instanceof Error ? error.message : String(error) }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
