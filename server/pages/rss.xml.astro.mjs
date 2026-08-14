import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
import { S as SITE_INFO } from '../chunks/config_CxFGSX0T.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const collectionNames = ['ai', 'lens', 'horizon', 'notes', 'newsletter'];

const getSafeTime = (dateVal) => {
  if (!dateVal) return 0;
  const time = new Date(dateVal).getTime();
  return Number.isNaN(time) ? 0 : time;
};

const isChinesePublicEntry = ({ data }) =>
  !data.draft &&
  !String(data.lang || '').toLowerCase().startsWith('en') &&
  data.indexing !== 'noindex';

async function GET() {
  const groups = await Promise.all(
    collectionNames.map((name) => getCollection(name, isChinesePublicEntry).catch(() => [])),
  );

  const recentPosts = groups
    .flat()
    .sort((a, b) => getSafeTime(b.data.createdAt) - getSafeTime(a.data.createdAt))
    .slice(0, 50);

  return rss({
    title: 'XBSTACK Insights',
    description: SITE_INFO.DESCRIPTION,
    site: SITE_INFO.URL,
    items: recentPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdAt || new Date(SITE_INFO.START_DATE),
      description: post.data.description || '',
      link: resolveEntryUrl(post),
    })),
    customData: '<language>zh-cn</language>',
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
