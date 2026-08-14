import { e as defineMiddleware, s as sequence } from './chunks/render-context_DhH1UjiD.mjs';
import fs from 'fs';
import path from 'path';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CfsLN52s.mjs';
import 'piccolore';
import './chunks/astro/server_CuadZCs7.mjs';
import 'clsx';

function isValidSession(sessionId) {
  if (!sessionId) return false;
  try {
    const sessionsPath = path.join(process.cwd(), "data", "admin_sessions.json");
    if (!fs.existsSync(sessionsPath)) return false;
    const data = JSON.parse(fs.readFileSync(sessionsPath, "utf-8"));
    const now = Date.now();
    const session = data.sessions?.find(
      (s) => s.sessionId === sessionId && s.expiresAt > now
    );
    return !!session;
  } catch {
    return false;
  }
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, cookies } = context;
  const enableAdmin = process.env.ENABLE_ADMIN_PANEL === "true";
  const isAuthPage = url.pathname === "/admin/login" || url.pathname === "/admin/login/";
  const isAuthApi = url.pathname.startsWith("/api/auth");
  const isPublicApi = url.pathname.startsWith("/api/public");
  if (url.pathname.startsWith("/admin") && !isAuthPage) {
    if (!enableAdmin) {
      return context.redirect("/404");
    }
    const session = cookies.get("admin_session");
    if (!session || !isValidSession(session.value)) {
      console.log(`[Middleware] 拦截未授权访问: ${url.pathname}, 重定向至登录页`);
      return context.redirect(`/admin/login/?redirect=${encodeURIComponent(url.pathname)}`);
    }
  }
  if (url.pathname.startsWith("/api/admin")) {
    const session = cookies.get("admin_session");
    if (!session || !isValidSession(session.value)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
  }
  const isAdminApi = url.pathname.startsWith("/api/admin");
  if (url.pathname.startsWith("/api") && !isAuthApi && !isPublicApi && !isAdminApi && ["POST", "PUT", "DELETE", "PATCH"].includes(context.request.method)) {
    const token = context.request.headers.get("X-API-TOKEN");
    const apiSecret = process.env.API_SECRET;
    if (apiSecret && token !== apiSecret) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
  }
  const response = await next();
  if (url.pathname.startsWith("/admin")) {
    response.headers.set("Cache-Control", "no-store, max-age=0");
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
