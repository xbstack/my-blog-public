export { renderers } from '../../../renderers.mjs';

const ALL = async ({ request, params }) => {
  const path = params.path;
  const TARGET_ROOT = "http://127.0.0.1:8000/api/emote";
  const targetUrl = `${TARGET_ROOT}/${path}${new URL(request.url).search}`;
  console.log(`[Proxy-Emote] ${request.method} -> ${targetUrl}`);
  try {
    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.delete("connection");
    const fetchOptions = {
      method: request.method,
      headers
    };
    if (!["GET", "HEAD"].includes(request.method)) {
      fetchOptions.body = await request.text();
    }
    const response = await fetch(targetUrl, fetchOptions);
    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("[Proxy-Emote Error]", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
