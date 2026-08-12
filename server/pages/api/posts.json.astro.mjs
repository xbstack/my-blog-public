import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
export { renderers } from '../../renderers.mjs';

const entrySlug = (entry) => entry.slug || entry.id.replace(/\.(md|mdx)$/, "");
const GET = async () => {
  try {
    const aiPosts = await getCollection("ai");
    const posts = aiPosts.map((post) => ({
      id: post.id,
      slug: entrySlug(post),
      title: post.data?.title,
      description: post.data?.description,
      status: post.data?.status || (post.data?.draft ? "draft" : "published"),
      categories: post.data?.categories || [post.data?.category].filter(Boolean),
      tags: post.data?.tags || [],
      createdAt: post.data?.createdAt,
      featuredImg: post.data?.featuredImg || post.data?.image,
      draft: post.data?.draft || false
    }));
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("获取文章列表时出错:", error);
    return new Response(JSON.stringify({ error: "获取文章列表失败" }), {
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
