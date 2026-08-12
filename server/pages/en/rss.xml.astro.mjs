import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { r as resolveEntryUrl } from '../../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../../renderers.mjs';

const collectionNames = ['ai', 'lens', 'horizon', 'notes', 'newsletter'];
const site = 'https://www.xbstack.com';

const getSafeTime = (dateVal) => {
  if (!dateVal) return 0;
  const time = new Date(dateVal).getTime();
  return Number.isNaN(time) ? 0 : time;
};

const isReviewedEnglishEntry = ({ data }) =>
  !data.draft &&
  String(data.lang || '').toLowerCase().startsWith('en') &&
  data.indexing !== 'noindex' &&
  data.translationStatus !== 'machine';

async function GET() {
  const groups = await Promise.all(
    collectionNames.map((name) => getCollection(name, isReviewedEnglishEntry).catch(() => [])),
  );

  const recentPosts = groups
    .flat()
    .sort((a, b) => getSafeTime(b.data.createdAt) - getSafeTime(a.data.createdAt));

  return rss({
    title: 'XBSTACK English',
    description: 'Reviewed English articles on AI engineering, product tools, investing systems, reading and outdoor field notes.',
    site,
    items: recentPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdAt || new Date(SITE_INFO.START_DATE),
      description: post.data.description || '',
      link: resolveEntryUrl(post),
    })),
    customData: '<language>en-us</language>',
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
