import path from 'path';

function getPublisherConfig() {
  return {
    mode: process.env.PUBLISHER_MODE === "local" ? "local" : "server",
    wenyanServerUrl: process.env.WENYAN_SERVER_URL,
    wenyanApiKey: process.env.WENYAN_API_KEY,
    wenyanPublishPath: process.env.WENYAN_PUBLISH_PATH || "/api/publish",
    storagePath: path.resolve(process.cwd(), process.env.PUBLISHER_STORAGE_PATH || "data/publisher/jobs.json"),
    assetDir: path.resolve(process.cwd(), process.env.PUBLISHER_ASSET_DIR || "public/assets/uploads"),
    publicAssetBaseUrl: process.env.PUBLISHER_PUBLIC_ASSET_BASE_URL,
    i18nEnabled: process.env.PUBLISHER_I18N_ENABLED !== "false",
    i18nPolicy: process.env.PUBLISHER_I18N_POLICY === "published" ? "published" : "reviewed",
    i18nProvider: process.env.PUBLISHER_I18N_PROVIDER || "agnes"
  };
}
function getPublisherStatus() {
  const config = getPublisherConfig();
  return {
    mode: config.mode,
    wenyanConfigured: Boolean(config.wenyanServerUrl && config.wenyanApiKey),
    wenyanServerUrl: config.wenyanServerUrl ? maskUrl(config.wenyanServerUrl) : "",
    wenyanPublishPath: config.wenyanPublishPath,
    assetDir: config.assetDir,
    storagePath: config.storagePath,
    i18nEnabled: config.i18nEnabled,
    i18nPolicy: config.i18nPolicy,
    i18nProvider: config.i18nProvider
  };
}
function maskUrl(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return url.replace(/(.{12}).+/, "$1...");
  }
}

export { getPublisherStatus as a, getPublisherConfig as g };
