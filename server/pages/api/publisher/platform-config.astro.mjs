import { r as readPlatformConfig, g as getPlatformV2Status, m as maskPlatformConfig, s as savePlatformConfig, t as testPlatformConfig } from '../../../chunks/platform-config_CXVUJP_u.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const raw = readPlatformConfig();
  return json({ success: true, data: { configs: maskPlatformConfig(raw), statuses: getPlatformV2Status() } });
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const platform = String(body.platform || "");
    if (!platform) return json({ success: false, error: "缺少 platform" }, 400);
    const patch = {
      enabled: body.enabled !== false,
      autoPublish: Boolean(body.autoPublish),
      authMode: body.authMode || "browser",
      publishMode: body.publishMode || "export",
      account: clean(body.account),
      serviceUrl: clean(body.serviceUrl),
      authValue: typeof body.authValue === "string" ? body.authValue : "",
      note: clean(body.note)
    };
    const saved = savePlatformConfig(platform, patch);
    return json({ success: true, data: { configs: maskPlatformConfig(saved), statuses: getPlatformV2Status() } });
  } catch (error) {
    return json({ success: false, error: error?.message || "保存失败" }, 500);
  }
};
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const platform = String(body.platform || "");
    if (!platform) return json({ success: false, error: "缺少 platform" }, 400);
    return json({ success: true, data: testPlatformConfig(platform) });
  } catch (error) {
    return json({ success: false, error: error?.message || "测试失败" }, 500);
  }
};
function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
