import { g as getConfiguredImageService, i as imageConfig, s as serverDir, o as outDir } from '../../chunks/_astro_assets_cm5UI8r_.mjs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { i as isRemotePath, r as removeQueryString, a as isParentDirectory } from '../../chunks/path_CpYqPZEY.mjs';
import { i as isRemoteAllowed } from '../../chunks/remote_DVMROsal.mjs';
import * as mime from 'mrmime';
export { renderers } from '../../renderers.mjs';

const fnv1a52 = (str) => {
  const len = str.length;
  let i = 0, t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t2 = 0, v2 = 40164, t3 = 0, v3 = 52210;
  while (i < len) {
    v0 ^= str.charCodeAt(i++);
    t0 = v0 * 435;
    t1 = v1 * 435;
    t2 = v2 * 435;
    t3 = v3 * 435;
    t2 += v0 << 8;
    t3 += v1 << 8;
    t1 += t0 >>> 16;
    v0 = t0 & 65535;
    t2 += t1 >>> 16;
    v1 = t1 & 65535;
    v3 = t3 + (t2 >>> 16) & 65535;
    v2 = t2 & 65535;
  }
  return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const etag = (payload, weak = false) => {
  const prefix = weak ? 'W/"' : '"';
  return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
};

async function loadRemoteImage(src) {
  try {
    const res = await fetch(src, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      return void 0;
    }
    if (!res.ok) {
      return void 0;
    }
    return Buffer.from(await res.arrayBuffer());
  } catch {
    return void 0;
  }
}
const handleImageRequest = async ({
  request,
  loadLocalImage
}) => {
  const imageService = await getConfiguredImageService();
  if (!("transform" in imageService)) {
    throw new Error("Configured image service is not a local service");
  }
  const url = new URL(request.url);
  const transform = await imageService.parseURL(url, imageConfig);
  if (!transform?.src) {
    return new Response("Invalid request", { status: 400 });
  }
  let inputBuffer = void 0;
  if (isRemotePath(transform.src)) {
    if (!isRemoteAllowed(transform.src, imageConfig)) {
      return new Response("Forbidden", { status: 403 });
    }
    inputBuffer = await loadRemoteImage(new URL(transform.src));
  } else {
    inputBuffer = await loadLocalImage(removeQueryString(transform.src), url);
  }
  if (!inputBuffer) {
    return new Response("Internal Server Error", { status: 500 });
  }
  const { data, format } = await imageService.transform(inputBuffer, transform, imageConfig);
  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": mime.lookup(format) ?? `image/${format}`,
      "Cache-Control": "public, max-age=31536000",
      ETag: etag(data.toString()),
      Date: (/* @__PURE__ */ new Date()).toUTCString()
    }
  });
};

async function loadLocalImage(src, url) {
  const outDirURL = resolveOutDir();
  const idx = url.pathname.indexOf("/_image");
  if (idx > 0) {
    src = src.slice(idx);
  }
  if (!URL.canParse("." + src, outDirURL)) {
    return void 0;
  }
  const fileUrl = new URL("." + src, outDirURL);
  if (fileUrl.protocol !== "file:") {
    return void 0;
  }
  if (!isParentDirectory(fileURLToPath(outDirURL), fileURLToPath(fileUrl))) {
    return void 0;
  }
  try {
    return await readFile(fileUrl);
  } catch {
    return void 0;
  }
}
const GET = async ({ request }) => {
  try {
    return await handleImageRequest({ request, loadLocalImage });
  } catch (err) {
    console.error("Could not process image request:", err);
    return new Response("Internal Server Error", {
      status: 500
    });
  }
};
function resolveOutDir() {
  const serverDirPath = fileURLToPath(serverDir);
  const rel = path.relative(serverDirPath, fileURLToPath(outDir));
  const serverFolder = path.basename(serverDirPath);
  let serverEntryFolderURL = path.dirname(import.meta.url);
  while (!serverEntryFolderURL.endsWith(serverFolder)) {
    serverEntryFolderURL = path.dirname(serverEntryFolderURL);
  }
  const serverEntryURL = serverEntryFolderURL + "/entry.mjs";
  const outDirURL = new URL(appendForwardSlash(rel), serverEntryURL);
  return outDirURL;
}
function appendForwardSlash(pth) {
  return pth.endsWith("/") ? pth : pth + "/";
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
