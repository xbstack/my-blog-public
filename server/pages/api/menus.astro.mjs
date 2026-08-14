import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const DATA_DIR = path.join(process.cwd(), "src", "data");
const MENUS_FILE = path.join(DATA_DIR, "menus.json");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MENUS_FILE)) {
  fs.writeFileSync(MENUS_FILE, JSON.stringify({ header: [], footer: [] }));
}
const GET = async () => {
  try {
    const data = fs.readFileSync(MENUS_FILE, "utf-8");
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "无法读取菜单配置" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const newMenus = await request.json();
    fs.writeFileSync(MENUS_FILE, JSON.stringify(newMenus, null, 2));
    return new Response(JSON.stringify({ success: true, message: "菜单设置已保存" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "保存失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
