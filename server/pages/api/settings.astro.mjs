import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const SETTINGS_FILE = path.join(process.cwd(), "src", "data", "settings.json");
const GET = async () => {
  try {
    if (!fs.existsSync(SETTINGS_FILE)) {
      return new Response(JSON.stringify({}), { status: 200 });
    }
    const data = JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf-8"));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "读取配置失败" }), { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "保存配置失败" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
