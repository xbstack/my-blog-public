import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
export { renderers } from '../../../renderers.mjs';

const ABOUT_FILE = path.join(process.cwd(), "src", "content", "pages", "about.md");
const GET = async () => {
  try {
    if (!fs.existsSync(ABOUT_FILE)) {
      return new Response(JSON.stringify({ content: "" }), { status: 200 });
    }
    const fileContent = fs.readFileSync(ABOUT_FILE, "utf-8");
    const { content } = matter(fileContent);
    return new Response(JSON.stringify({ content }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "读取失败" }), { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    const { content } = await request.json();
    let frontmatter = {
      title: "关于",
      layout: "page",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (fs.existsSync(ABOUT_FILE)) {
      const existingFile = fs.readFileSync(ABOUT_FILE, "utf-8");
      const { data } = matter(existingFile);
      frontmatter = { ...frontmatter, ...data };
    }
    const newFileContent = `---
${yaml.dump(frontmatter)}---

${content}`;
    fs.writeFileSync(ABOUT_FILE, newFileContent);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "保存失败" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
