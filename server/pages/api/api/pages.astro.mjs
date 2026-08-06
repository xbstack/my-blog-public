import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
export { renderers } from '../../../renderers.mjs';

const PAGES_DIR = path.join(process.cwd(), "src", "content", "pages");
if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const { title, slug } = await request.json();
    if (!title || !slug) {
      return new Response(JSON.stringify({ error: "标题和路径必填" }), { status: 400 });
    }
    const cleanSlug = slug.replace(/^\//, "");
    const filePath = path.join(PAGES_DIR, `${cleanSlug}.md`);
    if (fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ success: true, message: "页面已存在", skipped: true }), { status: 200 });
    }
    const frontmatter = {
      title,
      layout: "page",
      // 默认布局
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const content = `---
${yaml.dump(frontmatter)}---

# ${title}

这是自动创建的新页面，请在后台编辑内容。`;
    fs.writeFileSync(filePath, content);
    return new Response(JSON.stringify({ success: true, message: "页面创建成功" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
