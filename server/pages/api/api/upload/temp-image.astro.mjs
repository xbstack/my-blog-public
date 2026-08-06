import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
export { renderers } from '../../../../renderers.mjs';

const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename$1);
const ROOT_DIR = path.resolve(__dirname$1, "../../../..");
const uploadDir = path.join(ROOT_DIR, "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("multipart/form-data")) {
      return new Response(
        JSON.stringify({ error: "Content-Type must be multipart/form-data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const formData = await request.formData();
    const imageFile = formData.get("image");
    if (!imageFile) {
      return new Response(JSON.stringify({ error: "没有上传图片文件" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!imageFile.type.startsWith("image/")) {
      return new Response(JSON.stringify({ error: "只允许上传图片文件" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ext = path.extname(imageFile.name) || ".jpg";
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const newFileName = `image-${uniqueSuffix}${ext}`;
    const filePath = path.join(uploadDir, newFileName);
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, new Uint8Array(buffer));
    const imageUrl = `/uploads/${newFileName}`;
    return new Response(
      JSON.stringify({
        errno: 0,
        success: true,
        message: "图片上传成功",
        data: {
          url: imageUrl,
          alt: imageFile.name,
          href: imageUrl
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("上传图片时出错:", error);
    return new Response(
      JSON.stringify({ error: "上传图片失败", details: error instanceof Error ? error.message : String(error) }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
