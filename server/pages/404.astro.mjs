import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const description = "\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22 XBSTACK\uFF0C\u6216\u8FDB\u5165 AI\u3001Tools\u3001Horizon\u3001Lens \u548C\u5F52\u6863\u7EE7\u7EED\u67E5\u627E\u3002";
  const routes = [
    { title: "AI \u5DE5\u7A0B", href: "/ai/", desc: "Agent\u3001MCP\u3001LangGraph\u3001Workflow \u4E0E\u5DE5\u7A0B\u5B9E\u8DF5\u3002" },
    { title: "Tools", href: "/tools/", desc: "AI Finance\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest \u4E0E\u5F00\u53D1\u8005\u5DE5\u5177\u3002" },
    { title: "Horizon", href: "/horizon/", desc: "\u6295\u8D44\u3001Reading\u3001\u957F\u671F\u51B3\u7B56\u4E0E\u4E2A\u4EBA\u8D44\u4EA7\u590D\u76D8\u3002" },
    { title: "Lens", href: "/life/", desc: "\u6237\u5916\u3001\u6444\u5F71\u3001\u88C5\u5907\u4E0E\u771F\u5B9E\u73B0\u573A\u8BB0\u5F55\u3002" }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const trackNotFoundPage=()=>{const params=new URLSearchParams(window.location.search);const missingPath=params.get('from')||window.location.pathname;const eventKey=`${window.location.href}|${missingPath}`;if(window.__xbstack404Tracked===eventKey)return;window.__xbstack404Tracked=eventKey;if(typeof window.xbTrackEvent==='function'){window.xbTrackEvent('page_not_found',{event_category:'technical_seo',event_label:missingPath,missing_path:missingPath,page_location:window.location.href,page_referrer:document.referrer||''})}};document.addEventListener('astro:page-load',trackNotFoundPage);trackNotFoundPage();\n<\/script>"], ["", " <script>\n  const trackNotFoundPage=()=>{const params=new URLSearchParams(window.location.search);const missingPath=params.get('from')||window.location.pathname;const eventKey=\\`\\${window.location.href}|\\${missingPath}\\`;if(window.__xbstack404Tracked===eventKey)return;window.__xbstack404Tracked=eventKey;if(typeof window.xbTrackEvent==='function'){window.xbTrackEvent('page_not_found',{event_category:'technical_seo',event_label:missingPath,missing_path:missingPath,page_location:window.location.href,page_referrer:document.referrer||''})}};document.addEventListener('astro:page-load',trackNotFoundPage);trackNotFoundPage();\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - \u9875\u9762\u672A\u627E\u5230 | XBSTACK", "description": description, "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-14 md:py-20"> <div class="mx-auto max-w-[820px] text-center"> <div class="text-[clamp(4.5rem,15vw,9rem)] font-black leading-none tracking-[-.07em] text-[var(--xb-ink)]">404</div> <h1 class="mt-3 text-[clamp(1.7rem,4vw,2.8rem)] font-black tracking-[-.035em] text-[var(--xb-ink)]">这个页面不存在或已经迁移</h1> <p class="mx-auto mt-4 max-w-[620px] text-[14px] leading-7 text-[var(--xb-muted)]">不要猜新地址。先搜索原来的文章标题、报错或关键词；如果是旧 URL，搜索结果会优先带你到当前有效页面。</p> <form action="/search/" method="GET" class="mx-auto mt-7 flex max-w-[680px] gap-2 rounded-xl border border-[var(--xb-line-strong)] bg-[var(--xb-surface)] p-2 text-left shadow-sm"> <input name="q" type="search" placeholder="搜索文章、报错、MCP、LangGraph、n8n、工具…" class="min-w-0 flex-1 bg-transparent px-3 py-2 text-[13px] text-[var(--xb-ink)] outline-none placeholder:text-[var(--xb-faint)]"> <button type="submit" class="rounded-lg bg-blue-600 px-5 py-2 text-[12px] font-bold text-white hover:bg-blue-700">搜索</button> </form> <div class="xb-chip-row mt-5 justify-center"><a class="xb-chip" href="/">返回首页</a><a class="xb-chip" href="/archive/">内容归档</a><a class="xb-chip" href="/contact/">反馈坏链</a></div> </div> </div> </section> <div class="xb-shell py-9 md:py-11"><div class="mx-auto max-w-[980px]"><div class="xb-grid-4">${routes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-card"><h2 class="m-0 text-[15px] font-bold text-[var(--xb-ink)]">${item.title}</h2><p class="mt-2">${item.desc}</p><div class="mt-4 text-[10px] font-bold text-blue-600 dark:text-blue-400">进入 →</div></a>`)}</div></div></div> ` }));
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/404.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
