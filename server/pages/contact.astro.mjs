import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const description = "\u8054\u7CFB XBSTACK\uFF1A\u6280\u672F\u8BA8\u8BBA\u3001\u4EA7\u54C1\u53CD\u9988\u3001\u5185\u5BB9\u5EFA\u8BAE\u4E0E\u5546\u52A1\u5408\u4F5C\u3002\u8054\u7CFB\u4FE1\u606F\u53EA\u5728\u672C\u9875\u548C Footer \u7684\u8054\u7CFB\u5BFC\u822A\u4E2D\u51FA\u73B0\uFF0C\u4E0D\u91CD\u590D\u5806\u5728\u5176\u4ED6\u9875\u9762\u3002";
  const methods = [
    { title: "Email", value: "xbstack@163.com", href: "mailto:xbstack@163.com", desc: "\u6280\u672F\u8BA8\u8BBA\u3001\u4EA7\u54C1\u53CD\u9988\u548C\u5408\u4F5C\u4F18\u5148\u4F7F\u7528\u90AE\u4EF6\u3002" },
    { title: "GitHub", value: "@xbstack", href: "https://github.com/xbstack", desc: "\u4EE3\u7801\u3001Repo\u3001Issue \u4E0E\u516C\u5F00\u5DE5\u7A0B\u8D44\u4EA7\u3002" },
    { title: "\u5FAE\u4FE1\u516C\u4F17\u53F7", value: "XBSTACK", href: "/wechat/", desc: "\u4E2D\u6587\u6DF1\u5EA6\u5185\u5BB9\u548C\u7AD9\u70B9\u66F4\u65B0\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u8054\u7CFB XBSTACK", "description": description, "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-12 md:py-16"><div class="max-w-[800px]"><h1 class="xb-title">联系与合作</h1><p class="xb-lead">技术问题优先在对应文章或 GitHub 中留下可复现信息；产品反馈、内容建议和合作可以通过下面的渠道联系。</p></div></div></section> <div class="xb-shell py-10 md:py-12"><div class="mx-auto max-w-[920px]"><div class="xb-grid-3">${methods.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(item.href.startsWith("http") ? "noopener noreferrer" : void 0, "rel")} class="xb-card"><h2 class="m-0 text-[17px] font-bold text-[var(--xb-ink)]">${item.title}</h2><p class="mt-2 text-[13px] font-semibold text-blue-600 dark:text-blue-400">${item.value}</p><p class="mt-4">${item.desc}</p><div class="mt-5 text-[11px] font-bold text-blue-600 dark:text-blue-400">打开 →</div></a>`)}</div><section class="mt-12 border-y border-[var(--xb-line)] py-6"><h2 class="text-[18px] font-bold text-[var(--xb-ink)]">联系时最好包含</h2><ul class="mt-4 grid gap-2 pl-5 text-[12px] leading-6 text-[var(--xb-muted)]"><li>技术问题：环境、版本、错误信息、最小复现和已经尝试过的步骤。</li><li>产品反馈：使用页面、设备/浏览器、期望行为和实际行为。</li><li>商务合作：合作对象、具体形式、时间范围和是否涉及赞助/联盟关系。</li></ul></section></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/contact.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/contact.astro";
const $$url = "/contact/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
