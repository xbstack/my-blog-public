import fs from 'fs';
import path from 'path';
export { renderers } from '../../../../renderers.mjs';

const ANALYTICS_FILE = path.join(process.cwd(), "src", "data", "analytics_db.json");
const initPayload = { visits: [], pageViews: {}, notFound: {} };
if (!fs.existsSync(ANALYTICS_FILE)) {
  const dir = path.dirname(ANALYTICS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(initPayload));
}
function normalizeLogValue(value) {
  if (typeof value !== "string") return "";
  return value.slice(0, 2e3);
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const url = normalizeLogValue(data.url);
    const referrer = normalizeLogValue(data.referrer);
    const ua = normalizeLogValue(data.ua);
    const title = normalizeLogValue(data.title);
    const search = normalizeLogValue(data.search);
    const notFoundFrom = normalizeLogValue(data.notFoundFrom);
    const is404 = Boolean(data.is404);
    const db = JSON.parse(fs.readFileSync(ANALYTICS_FILE, "utf-8"));
    db.visits = Array.isArray(db.visits) ? db.visits : [];
    db.pageViews = db.pageViews && typeof db.pageViews === "object" ? db.pageViews : {};
    db.notFound = db.notFound && typeof db.notFound === "object" ? db.notFound : {};
    const parsedUrl = new URL(url || "https://www.xbstack.com/");
    const pagePath = normalizeLogValue(data.path) || parsedUrl.pathname;
    db.pageViews[pagePath] = (db.pageViews[pagePath] || 0) + 1;
    if (is404) {
      const missingPath = notFoundFrom || pagePath;
      db.notFound[missingPath] = (db.notFound[missingPath] || 0) + 1;
    }
    const log = {
      ts: (/* @__PURE__ */ new Date()).toISOString(),
      path: pagePath,
      search: search || parsedUrl.search,
      title,
      ref: referrer || "",
      ua: ua || "",
      is404,
      notFoundFrom
    };
    db.visits.unshift(log);
    if (db.visits.length > 1e4) db.visits.length = 1e4;
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(db));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        // 允许跨域，关键！
      }
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "analytics track failed";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    OPTIONS,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
