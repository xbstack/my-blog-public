export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const ALLOWED_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "PUT", "DELETE", "PATCH"]);
const proxyGrowthRequest = async ({ request, params }) => {
  const method = request.method.toUpperCase();
  if (!ALLOWED_METHODS.has(method)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: "METHOD_NOT_ALLOWED",
          message: `Growth Console 不支持 ${method} 请求。`
        }
      }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }
  const suffix = String(params.path || "").replace(/^\/+/, "");
  const requestUrl = new URL(request.url);
  const pythonBaseUrl = ("http://blog-python-api:50025").replace(/\/$/, "");
  const targetUrl = `${pythonBaseUrl}/api/admin/growth/${suffix}${requestUrl.search}`;
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  const cookie = request.headers.get("cookie");
  const accept = request.headers.get("accept");
  if (contentType) headers.set("Content-Type", contentType);
  if (cookie) headers.set("Cookie", cookie);
  if (accept) headers.set("Accept", accept);
  headers.set("X-XBSTACK-Admin-Proxy", "astro");
  let body;
  if (!["GET", "HEAD"].includes(method)) {
    body = await request.arrayBuffer();
  }
  try {
    const response = await fetch(targetUrl, {
      method,
      headers,
      body,
      signal: AbortSignal.timeout(12e4)
    });
    const responseBody = await response.arrayBuffer();
    return new Response(responseBody, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("content-type") || "application/json",
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: "GROWTH_BACKEND_UNAVAILABLE",
          message: "Growth Console 后端暂不可用。",
          details: { reason: error?.message || "Unknown proxy error" }
        }
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
};
const GET = proxyGrowthRequest;
const POST = proxyGrowthRequest;
const PUT = proxyGrowthRequest;
const DELETE = proxyGrowthRequest;
const PATCH = proxyGrowthRequest;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PATCH,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
