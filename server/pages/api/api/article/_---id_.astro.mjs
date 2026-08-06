import { g as getCollection } from '../../../../chunks/_astro_content_DQag2m34.mjs';
export { renderers } from '../../../../renderers.mjs';

const collections = ["ai", "horizon", "lens", "notes", "newsletter", "pages"];
const normalizeId = (value) => value.replace(/\.(md|mdx)$/, "");
async function findArticle(id) {
  for (const collectionName of collections) {
    try {
      const collection = await getCollection(collectionName);
      const article = collection.find((post) => {
        const normalized = normalizeId(post.id || "");
        const slug = post.slug || normalized;
        return post.id === id || post.id === `${id}.md` || post.id === `${id}.mdx` || normalized === id || slug === id;
      });
      if (article) return article;
    } catch {
    }
  }
  return null;
}
const GET = async ({ params }) => {
  const id = Array.isArray(params.id) ? params.id.join("/") : params.id;
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing article id" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  const article = await findArticle(id);
  if (!article) {
    return new Response(JSON.stringify({ error: "Article not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
  }
  return new Response(JSON.stringify({
    id: article.id,
    slug: article.slug || normalizeId(article.id),
    collection: article.collection,
    data: article.data,
    body: article.body || ""
  }), { status: 200, headers: { "Content-Type": "application/json" } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
