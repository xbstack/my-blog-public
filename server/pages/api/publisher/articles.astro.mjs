import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { p as parsePublisherMarkdown } from '../../../chunks/markdown_DRfC83uz.mjs';
export { renderers } from '../../../renderers.mjs';

const CONTENT_ROOT = path.resolve(process.cwd(), "src/content");
const ALLOWED_COLLECTIONS = /* @__PURE__ */ new Set(["ai", "archive", "horizon", "lens", "notes", "newsletter", "posts", "pages"]);
function listPublisherArticles() {
  const files = walkContentFiles(CONTENT_ROOT);
  return files.map((filePath) => {
    const markdown = fs.readFileSync(filePath, "utf-8");
    const relative = path.relative(CONTENT_ROOT, filePath);
    const [collection] = relative.split(path.sep);
    const id = relative.replace(/\.(md|mdx)$/i, "").split(path.sep).slice(1).join("/");
    const parsed = matter(markdown);
    return {
      id,
      collection,
      title: String(parsed.data.title || parsed.data.name || id),
      description: String(parsed.data.description || parsed.data.seoDescription || ""),
      cover: String(parsed.data.cover || parsed.data.image || parsed.data.featuredImg || ""),
      filePath,
      relativePath: relative
    };
  });
}
function readPublisherArticle(collection, id) {
  const safeCollection = sanitizePathPart(collection);
  const safeId = id.split("/").map(sanitizePathPart).join(path.sep);
  const mdPath = path.join(CONTENT_ROOT, safeCollection, `${safeId}.md`);
  const mdxPath = path.join(CONTENT_ROOT, safeCollection, `${safeId}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
  if (!fs.existsSync(filePath)) throw new Error("Article not found");
  const markdown = fs.readFileSync(filePath, "utf-8");
  return parsePublisherMarkdown({ markdown, id, collection, filePath, source: "library" });
}
function walkContentFiles(root) {
  if (!fs.existsSync(root)) return [];
  const result = [];
  for (const collection of fs.readdirSync(root)) {
    if (!ALLOWED_COLLECTIONS.has(collection)) continue;
    const dir = path.join(root, collection);
    if (!fs.statSync(dir).isDirectory()) continue;
    walk(dir, result);
  }
  return result;
}
function walk(dir, result) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) walk(fullPath, result);
    else if (/\.(md|mdx)$/i.test(entry)) result.push(fullPath);
  }
}
function sanitizePathPart(value) {
  return value.replace(/^\.+/, "").replace(/[\\:]/g, "").replace(/\.\./g, "");
}

const GET = async ({ url }) => {
  try {
    const collection = url.searchParams.get("collection");
    const id = url.searchParams.get("id");
    if (collection && id) {
      const article = readPublisherArticle(collection, id);
      return json({ success: true, data: article });
    }
    return json({ success: true, data: listPublisherArticles() });
  } catch (error) {
    return json({ success: false, error: error instanceof Error ? error.message : String(error) }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
