import fs from 'fs';
import path from 'path';
import { P as PLATFORM_REGISTRY } from './types_SOVn2iN6.mjs';

const CONFIG_PATH = process.env.PUBLISHER_PLATFORM_CONFIG_PATH || path.join(process.cwd(), "data", "publisher", "platform-config.json");
const MASK = "••••••••";
const DIRECT_API_PLATFORMS = /* @__PURE__ */ new Set(["devto", "linkedin"]);
const BROWSER_DRAFT_PLATFORMS = /* @__PURE__ */ new Set(["zhihu", "juejin", "csdn", "hashnode", "medium", "hackernoon", "hackernews"]);
function readPlatformConfig() {
  try {
    if (!fs.existsSync(CONFIG_PATH)) return {};
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw || "{}");
  } catch {
    return {};
  }
}
function writePlatformConfig(config) {
  fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  return config;
}
function savePlatformConfig(platform, patch) {
  const current = readPlatformConfig();
  const previous = current[platform] || {};
  const nextValue = patch.authValue === MASK ? previous.authValue : patch.authValue;
  const next = {
    ...current,
    [platform]: {
      ...previous,
      ...patch,
      authValue: nextValue,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
  return writePlatformConfig(next);
}
function maskPlatformConfig(config) {
  return Object.fromEntries(
    Object.entries(config).map(([platform, value]) => [
      platform,
      {
        ...value,
        authValue: value?.authValue ? MASK : "",
        hasAuthValue: Boolean(value?.authValue)
      }
    ])
  );
}
function getPlatformV2Status() {
  const config = readPlatformConfig();
  return PLATFORM_REGISTRY.map((meta) => {
    const cfg = config[meta.id] || {};
    const configured = isConfigured(meta.id, cfg);
    const enabled = cfg.enabled !== false;
    return {
      id: meta.id,
      name: meta.name,
      method: meta.method,
      category: meta.category,
      enabled,
      configured,
      autoPublish: Boolean(cfg.autoPublish),
      publishMode: cfg.publishMode || defaultPublishMode(meta.id),
      authMode: cfg.authMode || defaultAuthMode(meta.id),
      account: cfg.account || "",
      serviceUrl: cfg.serviceUrl || "",
      updatedAt: cfg.updatedAt || "",
      status: !enabled ? "disabled" : configured ? "ready" : "needs_config",
      message: buildStatusMessage(meta.id, enabled, configured)
    };
  });
}
function testPlatformConfig(platform) {
  const meta = PLATFORM_REGISTRY.find((item) => item.id === platform);
  if (!meta) return { ok: false, message: "未知平台" };
  const cfg = readPlatformConfig()[platform] || {};
  const enabled = cfg.enabled !== false;
  const configured = isConfigured(platform, cfg);
  if (!enabled) return { ok: false, message: `${meta.name} 已停用` };
  if (!configured) return { ok: false, message: `${meta.name} 还没有完成发布配置` };
  return { ok: true, message: `${meta.name} 配置可用；当前模式：${cfg.publishMode || defaultPublishMode(platform)}` };
}
function isConfigured(platform, cfg) {
  if (platform === "xbstack") return true;
  if (platform === "wechat") return Boolean(process.env.WENYAN_SERVER_URL && process.env.WENYAN_API_KEY) || Boolean(cfg.serviceUrl && cfg.authValue);
  if (platform === "devto") return Boolean(process.env.DEVTO_API_KEY || cfg.authValue);
  if (platform === "linkedin") {
    return Boolean((process.env.LINKEDIN_ACCESS_TOKEN || cfg.authValue) && (process.env.LINKEDIN_AUTHOR_URN || cfg.account));
  }
  if (BROWSER_DRAFT_PLATFORMS.has(platform)) {
    return Boolean(process.env.MULTIPOST_TOKEN || cfg.account || cfg.note || cfg.serviceUrl);
  }
  if (cfg.authMode === "manual") return true;
  if (cfg.authMode === "browser") return Boolean(cfg.account || cfg.note || cfg.serviceUrl);
  if (cfg.authMode === "env") return true;
  return Boolean(cfg.authValue || cfg.account || cfg.serviceUrl || cfg.note);
}
function defaultAuthMode(platform) {
  if (platform === "wechat" || DIRECT_API_PLATFORMS.has(platform)) return "env";
  if (platform === "xbstack") return "none";
  return "browser";
}
function defaultPublishMode(platform) {
  if (platform === "wechat" || BROWSER_DRAFT_PLATFORMS.has(platform)) return "draft";
  if (platform === "xbstack" || DIRECT_API_PLATFORMS.has(platform)) return "direct";
  return "export";
}
function buildStatusMessage(platform, enabled, configured) {
  if (!enabled) return "平台已停用，不会参与发布任务。";
  if (configured) {
    if (DIRECT_API_PLATFORMS.has(platform)) return "官方 API 直接发布配置已就绪。";
    if (BROWSER_DRAFT_PLATFORMS.has(platform)) return "本机浏览器草稿推送配置已就绪。";
    return "平台配置已保存，可以在发布中心选择使用。";
  }
  if (platform === "wechat") return "需要配置 Wenyan Server 或平台服务地址。";
  if (platform === "devto") return "需要配置 DEVTO_API_KEY。";
  if (platform === "linkedin") return "需要 LINKEDIN_ACCESS_TOKEN、LINKEDIN_AUTHOR_URN 和可用的发布权限。";
  if (BROWSER_DRAFT_PLATFORMS.has(platform)) return "需要启动本机 MultiPost 服务，并在专用 Chrome 中登录平台。";
  return "建议填写账号备注、发布模式或浏览器自动化说明。";
}

export { getPlatformV2Status as g, maskPlatformConfig as m, readPlatformConfig as r, savePlatformConfig as s, testPlatformConfig as t };
