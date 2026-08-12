export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies }) => {
  try {
    const sessionId = cookies.get("admin_session")?.value;
    if (sessionId) {
      await fetch(`http://127.0.0.1:${process.env.PORT || 8080}/api/admin/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
    }
    cookies.delete("admin_session", { path: "/" });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Logout failed" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
