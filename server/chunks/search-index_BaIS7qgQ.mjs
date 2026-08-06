import { g as getCollection } from './_astro_content_DQag2m34.mjs';
import { r as resolveEntryUrl } from './content-route_Id4Hifd6.mjs';

const collections = ["ai", "lens", "horizon", "notes", "newsletter"];
const isSearchableEntry = ({ data }) => {
  if (data.draft || data.indexing === "noindex") return false;
  const isEnglish = String(data.lang || "").toLowerCase().startsWith("en");
  if (isEnglish && data.translationStatus === "machine") return false;
  return true;
};
const safeGetCollection = async (name) => {
  try {
    return await getCollection(name, isSearchableEntry);
  } catch {
    return [];
  }
};
const normalizeSearchBody = (body) => String(body || "").replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ").replace(/[\[\]#>*_`~]/g, " ").replace(/\s+/g, " ").trim().slice(0, 1200);
const buildSearchIndex = async (language) => {
  const entries = (await Promise.all(collections.map((name) => safeGetCollection(name)))).flat();
  return entries.filter((item) => {
    if (!item?.id) return false;
    if (language === "all") return true;
    const itemLanguage = String(item.data?.lang || "").toLowerCase().startsWith("en") ? "en" : "zh-CN";
    return itemLanguage === language;
  }).map((item) => ({
    id: item.id.replace(/\.(md|mdx)$/i, ""),
    collection: item.collection,
    data: {
      lang: String(item.data?.lang || "").toLowerCase().startsWith("en") ? "en" : "zh-CN",
      title: item.data?.title || item.id,
      description: item.data?.description || item.data?.excerpt || "",
      category: item.data?.category || "",
      tags: Array.isArray(item.data?.tags) ? item.data.tags.slice(0, 8) : [],
      createdAt: item.data?.createdAt || "",
      custom_url: resolveEntryUrl(item)
    },
    body: normalizeSearchBody(item.body)
  }));
};
const searchIndexHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
};

export { buildSearchIndex as b, searchIndexHeaders as s };
