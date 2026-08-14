import { g as getPublisherJob } from '../../../../chunks/storage_cIafyEQG.mjs';
export { renderers } from '../../../../renderers.mjs';

const GET = async ({ params }) => {
  const job = getPublisherJob(String(params.id || ""));
  if (!job) return json({ success: false, error: "任务不存在" }, 404);
  return json({ success: true, data: job });
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
