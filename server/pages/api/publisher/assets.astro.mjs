import fs from 'fs';
import path from 'path';
import { g as getPublisherConfig } from '../../../chunks/config_rjp9Q1W5.mjs';
export { renderers } from '../../../renderers.mjs';

const ALLOWED_TYPES = /* @__PURE__ */ new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]);
const GET = async () => {
  const config = getPublisherConfig();
  const files = fs.existsSync(config.assetDir) ? fs.readdirSync(config.assetDir) : [];
  const images = files.filter((name) => /\.(png|jpe?g|webp|gif|avif)$/i.test(name)).map((name) => ({ name, url: `/assets/uploads/${name}` })).slice(-120).reverse();
  return json({ success: true, data: images });
};
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file) return json({ success: false, error: "没有上传文件" }, 400);
    if (!ALLOWED_TYPES.has(file.type)) return json({ success: false, error: "不支持的图片格式" }, 400);
    const config = getPublisherConfig();
    fs.mkdirSync(config.assetDir, { recursive: true });
    const ext = path.extname(file.name) || ".jpg";
    const fileName = `publisher-${Date.now()}-${Math.round(Math.random() * 1e5)}${ext}`;
    const filePath = path.join(config.assetDir, fileName);
    fs.writeFileSync(filePath, new Uint8Array(await file.arrayBuffer()));
    return json({ success: true, data: { name: file.name, url: `/assets/uploads/${fileName}` } });
  } catch (error) {
    return json({ success: false, error: error instanceof Error ? error.message : String(error) }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
