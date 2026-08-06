import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

function getSettingsPath() {
  if (process.env.SETTINGS_PATH) return process.env.SETTINGS_PATH;
  const dockerPath = "/app/src/data/settings.json";
  if (fs.existsSync(dockerPath)) return dockerPath;
  return path.join(process.cwd(), "src", "data", "settings.json");
}
const SETTINGS_PATH = getSettingsPath();
const DEFAULT_SOCIAL = {
  wechat: "/assets/xbstack-wechat-qr.webp",
  wechatNickname: "贵州户外",
  email: "xbstack@163.com",
  github: "https://github.com/xbstack/my-blog-public",
  xhs: "",
  weibo: "",
  youtube: "",
  twitter: "",
  zhihu: ""
};
const GET = async () => {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
    const settings = JSON.parse(raw);
    const social = settings.social || DEFAULT_SOCIAL;
    return new Response(JSON.stringify(social), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify(DEFAULT_SOCIAL), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    let settings = {};
    try {
      const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
      settings = JSON.parse(raw);
    } catch (e) {
      settings = {};
    }
    const allowedKeys = ["wechat", "wechatNickname", "email", "github", "xhs", "weibo", "youtube", "twitter", "zhihu"];
    const socialData = {};
    for (const key of allowedKeys) {
      if (body[key] !== void 0) {
        socialData[key] = String(body[key]).trim();
      }
    }
    settings.social = { ...settings.social || {}, ...socialData };
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2), "utf-8");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
