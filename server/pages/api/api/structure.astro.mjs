import fs from 'node:fs';
import path from 'node:path';
export { renderers } from '../../../renderers.mjs';

const IS_BUILD = process.env.CF_PAGES;
const structureFile = path.resolve("./src/data/site-structure.json");
const GET = async () => {
  if (IS_BUILD) {
    return new Response(JSON.stringify({ note: "API not available in static build" }), { status: 200 });
  }
  try {
    if (!fs.existsSync(structureFile)) {
      return new Response(JSON.stringify({}), { status: 200 });
    }
    const data = fs.readFileSync(structureFile, "utf8");
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to read structure" }), { status: 500 });
  }
};
const POST = async ({ request }) => {
  if (IS_BUILD) {
    return new Response(JSON.stringify({ error: "Read-only environment" }), { status: 403 });
  }
  try {
    const data = await request.json();
    const dir = path.dirname(structureFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(structureFile, JSON.stringify(data, null, 2), "utf8");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to save structure" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
