import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
export { renderers } from '../../renderers.mjs';

function getPagePath(slug) {
  const pagesDir = path.join(process.cwd(), "src", "content", "pages");
  const mdxPath = path.join(pagesDir, `_${slug}.mdx`);
  if (fs.existsSync(mdxPath)) return mdxPath;
  const mdPath = path.join(pagesDir, `_${slug}.md`);
  if (fs.existsSync(mdPath)) return mdPath;
  return mdxPath;
}
const GET = async ({ url }) => {
  const slug = url.searchParams.get("slug") || "about";
  try {
    const filePath = getPagePath(slug);
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ content: "", slug }), { status: 200 });
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return new Response(JSON.stringify({ data, content, slug }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
const POST = async ({ request, url }) => {
  const slug = url.searchParams.get("slug") || "about";
  try {
    const { data, content } = await request.json();
    const filePath = getPagePath(slug);
    let existingData = {};
    if (fs.existsSync(filePath)) {
      const existing = fs.readFileSync(filePath, "utf-8");
      existingData = matter(existing).data;
    }
    const mergedData = { ...existingData, ...data };
    const frontmatter = yaml.dump(mergedData, { skipInvalid: true });
    const newContent = `---
${frontmatter}---

${content}`;
    fs.writeFileSync(filePath, newContent, "utf-8");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
