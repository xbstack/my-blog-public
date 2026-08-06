import fs from 'node:fs/promises';
import path from 'node:path';
export { renderers } from '../../renderers.mjs';

const DB_PATH = path.join(process.cwd(), "data", "messages.json");
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "所有字段都是必填的" }), { status: 400 });
    }
    const newMessage = {
      id: Date.now().toString(),
      // 简易 ID
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "unread"
      // 默认状态：未读
    };
    let messages = [];
    try {
      const fileContent = await fs.readFile(DB_PATH, "utf-8");
      messages = JSON.parse(fileContent);
    } catch (e) {
      messages = [];
    }
    messages.unshift(newMessage);
    await fs.writeFile(DB_PATH, JSON.stringify(messages, null, 2), "utf-8");
    return new Response(JSON.stringify({ success: true, message: "消息已发送" }), { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(JSON.stringify({ error: "服务器内部错误" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
