import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
export { renderers } from '../../renderers.mjs';

const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename$1);
const ROOT_DIR = path.resolve(__dirname$1, "../../../..");
const blogDir = path.join(ROOT_DIR, "src", "content", "blog");
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
const POST = async ({ request }) => {
  try {
    const articleData = await request.json();
    if (!articleData.title || !articleData.content) {
      return new Response(
        JSON.stringify({ error: "标题和内容不能为空" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const fileName = articleData.id || `article-${Date.now()}`;
    const filePath = path.join(blogDir, `${fileName}.md`);
    const frontmatter = {
      title: articleData.title,
      description: articleData.seoDescription || "",
      createdAt: articleData.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      categories: articleData.categories || [],
      tags: articleData.tags || [],
      featuredImg: articleData.coverImage || "",
      status: articleData.isPublished ? "published" : "draft",
      allowComments: articleData.allowComments !== void 0 ? articleData.allowComments : true,
      seoTitle: articleData.seoTitle,
      seoDescription: articleData.seoDescription,
      seoKeywords: articleData.seoKeywords || []
    };
    const yamlFrontmatter = Object.entries(frontmatter).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map((v) => `"${v}"`).join(", ")}]`;
      } else if (typeof value === "string" && value.includes("\n")) {
        return `${key}: |
  ${value.replace(/\n/g, "\n  ")}`;
      } else if (typeof value === "string" && (value.includes(": ") || value.includes("#") || value.includes("{") || value.includes("["))) {
        return `${key}: "${value}"`;
      } else if (typeof value === "boolean" || typeof value === "number") {
        return `${key}: ${value}`;
      } else {
        return `${key}: ${typeof value === "string" ? `"${value}"` : value}`;
      }
    }).join("\n");
    const markdownContent = `---
${yamlFrontmatter}
---

${articleData.content}
`;
    fs.writeFileSync(filePath, markdownContent);
    return new Response(
      JSON.stringify({
        success: true,
        message: "文章创建成功",
        data: { id: fileName }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("创建文章时出错:", error);
    return new Response(
      JSON.stringify({ error: "创建文章失败", details: error.message }),
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
