import { b as buildSearchIndex, s as searchIndexHeaders } from '../chunks/search-index_DKgLmRma.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const payload = await buildSearchIndex("all");
  return new Response(JSON.stringify(payload), { headers: searchIndexHeaders });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
