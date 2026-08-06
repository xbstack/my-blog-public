import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
export { renderers } from '../../renderers.mjs';

async function safeCollection(name) {
  try {
    return await getCollection(name);
  } catch {
    return [];
  }
}
const entrySlug = (entry) => entry.slug || entry.id.replace(/\.(md|mdx)$/, "");
const entryDate = (entry) => entry.data?.createdAt || /* @__PURE__ */ new Date(0);
const GET = async () => {
  try {
    const [aiPosts, pages, categories, tags] = await Promise.all([
      safeCollection("ai"),
      safeCollection("pages"),
      safeCollection("categories"),
      safeCollection("tags")
    ]);
    const options = [
      {
        label: "基础页面",
        options: [
          { label: "首页", value: "/" },
          { label: "AI", value: "/ai/" },
          { label: "Tools", value: "/tools/" },
          { label: "Growth Lab", value: "/growth/" },
          { label: "关于", value: "/about/" },
          { label: "搜索", value: "/search/" },
          { label: "归档", value: "/archive/" }
        ]
      },
      {
        label: "单页 (Pages)",
        options: pages.map((page) => ({
          label: page.data?.title || page.id,
          value: `/${entrySlug(page)}`
        }))
      },
      {
        label: "分类 (Categories)",
        options: categories.map((cat) => ({
          label: cat.data?.title || cat.id,
          value: `/categories/${entrySlug(cat)}`
        }))
      },
      {
        label: "标签 (Tags)",
        options: tags.map((tag) => ({
          label: tag.data?.title || tag.id,
          value: `/search/?q=${encodeURIComponent(tag.data?.title || entrySlug(tag))}`
        }))
      },
      {
        label: "最新 AI 文章",
        options: aiPosts.filter((p) => !p.data?.draft).sort((a, b) => new Date(entryDate(b)).getTime() - new Date(entryDate(a)).getTime()).slice(0, 10).map((post) => ({
          label: post.data?.title || post.id,
          value: `/ai/${entrySlug(post)}/`
        }))
      }
    ];
    return new Response(JSON.stringify(options), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "获取链接选项失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
