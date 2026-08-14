import { c as createComponent, a as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$AuditLog = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u5BA1\u8BA1\u65E5\u5FD7" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8 flex flex-wrap items-center gap-4"> <div class="flex gap-2"> <select id="filter-action" class="bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold text-white"> <option value="">全部操作</option> <option value="CREATE">CREATE</option> <option value="UPDATE">UPDATE</option> <option value="DELETE">DELETE</option> <option value="LOGIN">LOGIN</option> <option value="LOGOUT">LOGOUT</option> <option value="DEPLOY">DEPLOY</option> </select> <select id="filter-resource" class="bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold text-white"> <option value="">全部资源</option> <option value="auth">认证</option> <option value="user">用户</option> <option value="settings">设置</option> <option value="menus">菜单</option> <option value="social">社交</option> <option value="ai-config">AI配置</option> <option value="structure">栏目</option> <option value="footer-links">友链</option> <option value="affiliate">变现</option> <option value="page">页面</option> <option value="session">会话</option> </select> </div> <input id="filter-search" type="text" placeholder="搜索用户名/详情..." class="bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold text-white w-56"> <button id="btn-refresh" class="px-5 py-2.5 rounded-xl bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
刷新
</button> <span id="stats-text" class="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-auto"></span> </div> <div id="log-container" class="space-y-2"> <div class="text-center py-20 text-slate-500 text-xs font-bold uppercase tracking-widest">加载中...</div> </div> <div id="pagination" class="flex items-center justify-center gap-3 mt-8"></div> ` })} ${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/audit-log.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/audit-log.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/audit-log.astro";
const $$url = "/admin/audit-log/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AuditLog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
