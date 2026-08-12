import fs from 'fs';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const ROOT_DIR = process.cwd();
const UPLOAD_SUBDIR = path.join("public", "assets", "uploads");
const UPLOAD_DIR = path.join(ROOT_DIR, UPLOAD_SUBDIR);
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("multipart/form-data")) {
      return new Response(
        JSON.stringify({ errno: 1, message: "非法请求协议" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const formData = await request.formData();
    const imageFile = formData.get("image");
    if (!imageFile) {
      return new Response(
        JSON.stringify({ errno: 1, message: "未检测到上传负载" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];
    if (!allowedTypes.includes(imageFile.type)) {
      return new Response(
        JSON.stringify({ errno: 1, message: "文件格式不受支持，仅限主流图片格式" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const ext = path.extname(imageFile.name) || ".jpg";
    const timestamp = Date.now();
    const fingerprint = Math.round(Math.random() * 1e6);
    const fileName = `as-${timestamp}-${fingerprint}${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, new Uint8Array(buffer));
    const publicUrl = `/assets/uploads/${fileName}`;
    return new Response(
      JSON.stringify({
        errno: 0,
        success: true,
        message: "资产已入库",
        data: {
          url: publicUrl,
          alt: imageFile.name
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("[Upload Engine Error]:", error);
    return new Response(
      JSON.stringify({ errno: 1, message: "后端存储系统异常", details: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
