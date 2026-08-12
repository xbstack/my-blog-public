import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export { renderers } from '../../../renderers.mjs';

const SOCIAL_FILE = path.join(process.cwd(), "src", "content", "social", "-index.md");
function ensureFile() {
  if (!fs.existsSync(SOCIAL_FILE)) {
    const dir = path.dirname(SOCIAL_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const defaultContent = `---
title: 社交媒体配置
platforms:
  github: ""
  email: ""
  wechat: ""
  xhs: ""
---
`;
    fs.writeFileSync(SOCIAL_FILE, defaultContent);
  }
}
const GET = async () => {
  try {
    ensureFile();
    const fileContent = fs.readFileSync(SOCIAL_FILE, "utf-8");
    const { data } = matter(fileContent);
    return new Response(JSON.stringify(data.platforms || {}), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    ensureFile();
    const fileContent = fs.readFileSync(SOCIAL_FILE, "utf-8");
    const parsed = matter(fileContent);
    parsed.data.platforms = body;
    const newContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(SOCIAL_FILE, newContent);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
