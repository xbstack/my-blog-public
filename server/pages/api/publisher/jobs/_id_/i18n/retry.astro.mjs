import { r as retryPublisherI18n } from '../../../../../../chunks/pipeline_DFB3LFP5.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const POST = async ({ params }) => {
  const id = String(params.id || "");
  try {
    const job = retryPublisherI18n(id);
    return json({ success: true, data: job }, 202);
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
