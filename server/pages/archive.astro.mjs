import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getArchivePosts, a as getArchiveSidebarData, A as ARCHIVE_PAGE_SIZE, $ as $$ArchivePage } from '../chunks/ArchivePage_Cy5HuUXQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getArchivePosts();
  const { categories, tags } = getArchiveSidebarData(allPosts);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / ARCHIVE_PAGE_SIZE));
  const posts = allPosts.slice(0, ARCHIVE_PAGE_SIZE);
  return renderTemplate`${renderComponent($$result, "ArchivePage", $$ArchivePage, { "posts": posts, "categories": categories, "tags": tags, "totalPosts": allPosts.length, "currentPage": 1, "totalPages": totalPages })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/archive.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/archive.astro";
const $$url = "/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
