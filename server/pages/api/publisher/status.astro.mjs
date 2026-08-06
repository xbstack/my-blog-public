import { a as getPublisherStatus } from '../../../chunks/config_rjp9Q1W5.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  return new Response(JSON.stringify({ success: true, data: getPublisherStatus() }), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
