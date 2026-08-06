const SITE_ORIGIN = "https://www.xbstack.com";
const normalizePath = (value) => {
  const pathname = value.startsWith("http") ? new URL(value, SITE_ORIGIN).pathname : value;
  const clean = `/${pathname}`.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return clean === "" ? "/" : `${clean}/`;
};
const canonicalPath = (canonical) => {
  if (typeof canonical !== "string" || !canonical.trim()) return null;
  try {
    const url = new URL(canonical, SITE_ORIGIN);
    if (url.origin !== SITE_ORIGIN) return null;
    return normalizePath(url.pathname);
  } catch {
    return null;
  }
};
const resolveEntryUrl = (entry, explicitSlug) => {
  const data = entry?.data || {};
  if (typeof explicitSlug === "string" && explicitSlug.startsWith("/")) {
    return normalizePath(explicitSlug);
  }
  for (const candidate of [data.route, data.permalink, data.url]) {
    if (typeof candidate === "string" && candidate.startsWith("/")) {
      return normalizePath(candidate);
    }
  }
  const fromCanonical = canonicalPath(data.canonical);
  if (fromCanonical) return fromCanonical;
  const rawEntryId = String(explicitSlug || entry?.id || "").replace(/\.(md|mdx)$/, "").replace(/^\/+|\/+$/g, "");
  const entryId = rawEntryId.replace(/^(en|zh|zh-cn|zh-hans|zh-tw)\//i, "");
  const collection = String(entry?.collection || "").trim();
  const isEnglish = String(data.lang || "").toLowerCase().startsWith("en") || /^en\//i.test(rawEntryId);
  const languagePrefix = isEnglish ? "/en" : "";
  if (!entryId) return isEnglish ? "/en/" : "/";
  if (collection === "horizon") {
    return data.category === "reading" ? `${languagePrefix}/horizon/reading/${entryId}/` : `${languagePrefix}/investing/${entryId}/`;
  }
  if (collection === "lens") {
    return `${languagePrefix}/life/${entryId}/`;
  }
  if (collection === "ai" && [data.section, data.hub, data.subcategory].includes("tools-lab")) {
    return `${languagePrefix}/ai/tools-lab/${entryId}/`;
  }
  if (collection === "newsletter") {
    return `${languagePrefix}/newsletter/${entryId}/`;
  }
  if (collection === "notes") {
    return `${languagePrefix}/notes/${entryId}/`;
  }
  return normalizePath(`${languagePrefix}/${collection}/${entryId}`);
};

export { resolveEntryUrl as r };
