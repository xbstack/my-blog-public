import fs from 'fs';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const PUBLIC_DIR = path.join(process.cwd(), "public");
const ROBOTS_FILE = path.join(PUBLIC_DIR, "robots.txt");
const GET = async () => {
  try {
    let content = "";
    if (fs.existsSync(ROBOTS_FILE)) {
      content = fs.readFileSync(ROBOTS_FILE, "utf-8");
    } else {
      content = "User-agent: *\nAllow: /";
    }
    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "无法读取 robots.txt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const { content } = await request.json();
    fs.writeFileSync(ROBOTS_FILE, content);
    return new Response(JSON.stringify({ success: true, message: "robots.txt 已更新" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "更新失败" }), {
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
