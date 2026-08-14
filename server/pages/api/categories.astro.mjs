import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
export { renderers } from '../../renderers.mjs';

const CATEGORIES_DIR = path.join(process.cwd(), "src", "content", "categories");
if (!fs.existsSync(CATEGORIES_DIR)) {
  fs.mkdirSync(CATEGORIES_DIR, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { slug, title, description, color, icon } = data;
    if (!slug || !title) {
      return new Response(JSON.stringify({ error: "Slug 和标题必填" }), { status: 400 });
    }
    const filePath = path.join(CATEGORIES_DIR, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ success: true, message: "分类已存在", skipped: true }), { status: 200 });
    }
    const frontmatter = {
      title,
      description,
      color,
      icon,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const content = `---
${yaml.dump(frontmatter)}---
`;
    fs.writeFileSync(filePath, content);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
const PUT = async ({ request }) => {
  try {
    const data = await request.json();
    const { id, title, description, color, icon } = data;
    const filePath = path.join(CATEGORIES_DIR, id);
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: "分类未找到" }), { status: 404 });
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: existingData, content } = matter(fileContent);
    const updatedFrontmatter = {
      ...existingData,
      title,
      description,
      color,
      icon
    };
    const newContent = `---
${yaml.dump(updatedFrontmatter)}---
${content}`;
    fs.writeFileSync(filePath, newContent);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
const DELETE = async ({ request }) => {
  try {
    const { id } = await request.json();
    const filePath = path.join(CATEGORIES_DIR, id);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "文件不存在" }), { status: 404 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
