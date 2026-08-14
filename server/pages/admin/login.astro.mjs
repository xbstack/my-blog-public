import { c as createComponent, x as renderHead, e as renderScript, r as renderTemplate } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const title = "\u6B22\u8FCE\u4F7F\u7528 XBSTACK \u8D44\u4EA7\u7BA1\u7406\u7CFB\u7EDF";
  return renderTemplate`<html lang="zh-CN" class="dark" data-astro-cid-rf56lckb> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>系统访问控制 | XBSTACK</title>${renderHead()}</head> <body data-astro-cid-rf56lckb> <div class="glow" data-astro-cid-rf56lckb></div> <div class="login-card" data-astro-cid-rf56lckb> <h1 data-astro-cid-rf56lckb>XBSTACK <span data-astro-cid-rf56lckb>System</span></h1> <div class="subtitle" data-astro-cid-rf56lckb>${title}</div> <form id="login-form" data-astro-cid-rf56lckb> <div class="form-group" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>Admin Identity</label> <input type="text" id="username" name="username" required placeholder="USERNAME" data-astro-cid-rf56lckb> </div> <div class="form-group" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>Entry Secret</label> <input type="password" id="password" name="password" required placeholder="PASSWORD" data-astro-cid-rf56lckb> <div id="toggle-password" class="toggle-pass" data-astro-cid-rf56lckb> <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-rf56lckb><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-rf56lckb></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c3.85 0 7.13 2.149 8.83 5.354M2.458 12c1.274 4.057 5.065 7 9.542 7 3.85 0 7.13-2.149 8.83-5.354M12 19c-4.477 0-8.268-2.943-9.542-7" data-astro-cid-rf56lckb></path></svg> </div> </div> <div class="form-group" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>TOTP Authenticator Code</label> <input type="text" id="otp" name="otp" required maxlength="6" class="totp-input" placeholder="000000" data-astro-cid-rf56lckb> </div> <button type="submit" id="submit-btn" data-astro-cid-rf56lckb>Authorize Entry</button> <div id="error-msg" data-astro-cid-rf56lckb>Protocol Error: Access Denied</div> </form> <div id="change-password-section" data-astro-cid-rf56lckb> <div class="change-notice" data-astro-cid-rf56lckb> <p data-astro-cid-rf56lckb>首次登录 detected<br data-astro-cid-rf56lckb>请设置新密码以完成安全初始化</p> </div> <div class="form-group" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>New Secret</label> <input type="password" id="new-password" placeholder="新密码 (至少 8 位)" data-astro-cid-rf56lckb> </div> <div class="form-group" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>Confirm New Secret</label> <input type="password" id="confirm-password" placeholder="再次输入新密码" data-astro-cid-rf56lckb> </div> <p class="password-hint" data-astro-cid-rf56lckb>密码至少 8 位, 建议包含大小写字母、数字和符号</p> <button type="button" id="change-btn" style="background:#10b981;box-shadow:0 10px 15px -3px rgba(16,185,129,0.3)" data-astro-cid-rf56lckb>Set New Password</button> <div id="change-error-msg" style="color:#ef4444;font-size:0.7rem;font-weight:800;margin-top:1rem;display:none;" data-astro-cid-rf56lckb></div> </div> <a href="https://www.xbstack.com" class="home-link" data-astro-cid-rf56lckb> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-astro-cid-rf56lckb><path d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-rf56lckb></path></svg>
返回站点首页
</a> </div> ${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/login.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/login.astro";
const $$url = "/admin/login/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
