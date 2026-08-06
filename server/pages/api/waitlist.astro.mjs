import fs from 'node:fs/promises';
import path from 'node:path';
export { renderers } from '../../renderers.mjs';

const DB_PATH = path.join(process.cwd(), "data", "waitlist.json");
const sanitizeText = (value, max = 500) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const GET = async () => {
  return new Response(JSON.stringify({
    success: true,
    service: "xbstack_waitlist",
    storage: "local_json_file",
    accepts: ["POST"],
    fields: ["email", "name", "platform", "useCase", "source", "attribution"]
  }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const email = sanitizeText(data.email, 160).toLowerCase();
    const source = sanitizeText(data.source, 120) || "unknown";
    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ success: false, error: "请输入有效邮箱地址" }), { status: 400 });
    }
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      email,
      name: sanitizeText(data.name, 80),
      platform: sanitizeText(data.platform, 80),
      useCase: sanitizeText(data.useCase, 800),
      source,
      attribution: {
        page_path: sanitizeText(data.attribution?.page_path, 240),
        page_title: sanitizeText(data.attribution?.page_title, 240),
        referrer: sanitizeText(data.attribution?.referrer, 500),
        utm_source: sanitizeText(data.attribution?.utm_source, 120),
        utm_medium: sanitizeText(data.attribution?.utm_medium, 120),
        utm_campaign: sanitizeText(data.attribution?.utm_campaign, 160),
        utm_term: sanitizeText(data.attribution?.utm_term, 160),
        utm_content: sanitizeText(data.attribution?.utm_content, 160)
      },
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "new"
    };
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    let rows = [];
    try {
      const fileContent = await fs.readFile(DB_PATH, "utf-8");
      rows = JSON.parse(fileContent);
      if (!Array.isArray(rows)) rows = [];
    } catch (err) {
      rows = [];
    }
    const existingIndex = rows.findIndex((item) => item.email === email && item.source === source);
    if (existingIndex >= 0) {
      rows[existingIndex] = {
        ...rows[existingIndex],
        ...entry,
        id: rows[existingIndex].id,
        createdAt: rows[existingIndex].createdAt,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        status: rows[existingIndex].status || "new"
      };
    } else {
      rows.unshift(entry);
    }
    await fs.writeFile(DB_PATH, JSON.stringify(rows, null, 2), "utf-8");
    return new Response(JSON.stringify({
      success: true,
      message: existingIndex >= 0 ? "你已经在名单里，我已更新这次提交的信息。" : "已加入名单。后续会通过邮件通知测试入口、上线进度或使用说明。"
    }), { status: 200 });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return new Response(JSON.stringify({ success: false, error: "服务器内部错误" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
