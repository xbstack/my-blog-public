export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const res = await fetch(`http://127.0.0.1:${process.env.PORT || 8080}/api/admin/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (res.ok && data.success && data.sessionId) {
      cookies.set("admin_session", data.sessionId, {
        path: "/",
        httpOnly: true,
        secure: false,
        // 兼容内网 HTTP 访问
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7
      });
      return new Response(JSON.stringify({
        success: true,
        mustChangePassword: data.mustChangePassword || false,
        username: data.username,
        role: data.role
      }), { status: 200 });
    }
    return new Response(JSON.stringify({
      error: data.error || "登录失败"
    }), { status: res.status });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Auth Error: ${e.message}` }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
