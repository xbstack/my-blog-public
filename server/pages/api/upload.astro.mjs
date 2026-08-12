import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const UPLOAD_DIR = path.join(process.cwd(), "public", "assets", "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file) {
      return new Response(JSON.stringify({ error: "没有上传文件" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!file.type.startsWith("image/")) {
      return new Response(JSON.stringify({ error: "只允许上传图片" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ext = path.extname(file.name);
    const fileName = `ad-${Date.now()}-${Math.round(Math.random() * 1e3)}${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, new Uint8Array(buffer));
    const url = `/assets/uploads/${fileName}`;
    return new Response(JSON.stringify({ success: true, url }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("上传失败:", error);
    return new Response(JSON.stringify({ error: "服务器内部错误" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
