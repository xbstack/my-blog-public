import { p as parsePublisherMarkdown, b as buildPublisherPreview } from '../../../chunks/markdown_DRfC83uz.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const files = Array.isArray(body.files) ? body.files : [];
    const assets = Array.isArray(body.assets) ? body.assets : [];
    const assetMap = assets.reduce((acc, item) => {
      if (item.path && item.url) {
        acc[item.path] = item.url;
        acc[item.name] = item.url;
        acc[String(item.path).split("/").slice(1).join("/")] = item.url;
        acc[String(item.path).split("/").slice(-2).join("/")] = item.url;
      }
      return acc;
    }, {});
    const articles = files.filter((file) => /\.(md|mdx)$/i.test(String(file.name || file.path || ""))).map((file, index) => {
      const article = parsePublisherMarkdown({
        markdown: String(file.content || ""),
        id: String(file.path || file.name || `import-${index}`).replace(/\.(md|mdx)$/i, ""),
        source: "folder",
        assetMap
      });
      return buildPublisherPreview(article);
    });
    return json({
      success: true,
      data: {
        batchId: `batch_${Date.now()}`,
        importedAt: (/* @__PURE__ */ new Date()).toISOString(),
        articles,
        assets
      }
    });
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
