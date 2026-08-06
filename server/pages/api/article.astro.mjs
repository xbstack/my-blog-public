import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { id, collection, title, category, draft, body } = data;
    const baseDir = path.join(process.cwd(), "src/content", collection);
    const filePath = path.join(baseDir, `${id}.md`);
    const frontmatter = {
      title,
      category,
      draft,
      createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      description: body.slice(0, 150).replace(/\n/g, " "),
      tags: [],
      mood: "focused",
      location: "贵阳·数字避难所"
    };
    const fileContent = matter.stringify(body, frontmatter);
    await fs.mkdir(baseDir, { recursive: true });
    await fs.writeFile(filePath, fileContent, "utf-8");
    return new Response(JSON.stringify({ success: true, path: filePath }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("API Save Error:", e);
    return new Response(JSON.stringify({ success: false, error: String(e) }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
