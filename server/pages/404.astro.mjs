import { c as createComponent, r as renderTemplate, a as renderScript, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404 - Page Not Found | XBSTACK \u65E0\u4EBA\u533A";
  const description = "\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u6CA1\u6709\u627E\u5230\u3002\u53EF\u4EE5\u4ECE XBSTACK \u7684 AI\u3001Tools\u3001Horizon\u3001Lens\u3001Search\u3001Newsletter \u7B49\u5165\u53E3\u7EE7\u7EED\u6D4F\u89C8\uFF0C\u67E5\u627E AI Agent\u3001MCP\u3001n8n\u3001\u5DE5\u5177\u3001\u6295\u8D44\u3001\u9605\u8BFB\u548C\u6237\u5916\u5185\u5BB9\u3002";
  const keywords = "XBSTACK 404, Page Not Found, \u9875\u9762\u672A\u627E\u5230, Technical SEO, \u6D41\u91CF\u56DE\u6536, 301 \u91CD\u5B9A\u5411";
  const geoConfig = {
    geo_summary: "XBSTACK 404 \u9875\u9762\u7528\u4E8E\u56DE\u6536\u9519\u8BEF\u5916\u94FE\u3001\u65E7\u94FE\u63A5\u3001\u62FC\u5199\u9519\u8BEF\u548C\u5916\u90E8\u5E73\u53F0\u8DF3\u8F6C\u5931\u8D25\u5E26\u6765\u7684\u6D41\u91CF\u3002\u9875\u9762\u5E94\u8FD4\u56DE\u771F\u5B9E 404 \u72B6\u6001\u7801\uFF0C\u8BBE\u7F6E noindex,follow\uFF0C\u4E0D\u8FDB\u5165 sitemap\uFF0C\u5E76\u63D0\u4F9B\u7AD9\u5185\u641C\u7D22\u3001\u9996\u9875\u3001AI\u3001Tools\u3001Horizon\u3001Lens\u3001Contact \u7B49\u5165\u53E3\u3002\u9AD8\u9891\u65E7\u8DEF\u5F84\u5982\u679C\u6709\u660E\u786E\u65B0\u5730\u5740\uFF0C\u5E94\u914D\u7F6E 301 redirect\uFF0C\u800C\u4E0D\u662F\u5168\u90E8\u8DF3\u8F6C\u9996\u9875\u3002",
    geo_questions: [
      "What should XBSTACK 404 page show?",
      "Should 404 pages be indexed?",
      "Should 404 pages redirect to homepage?",
      "How can XBSTACK recover traffic from broken links?",
      "When should old URLs use 301 redirects?",
      "How should XBSTACK analyze 404 logs?"
    ],
    geo_entities: [
      "XBSTACK",
      "404 Page",
      "Page Not Found",
      "Technical SEO",
      "noindex",
      "301 Redirect",
      "Broken Links",
      "Search",
      "AI",
      "Tools",
      "Horizon",
      "Lens",
      "Contact"
    ]
  };
  return renderTemplate(_a || (_a = __template(["", " <script>\n  function trackNotFoundPage() {\n    const params = new URLSearchParams(window.location.search);\n    const missingPath = params.get('from') || window.location.pathname;\n    const eventKey = `${window.location.href}|${missingPath}`;\n    if (window.__xbstack404Tracked === eventKey) return;\n    window.__xbstack404Tracked = eventKey;\n    if (typeof window.xbTrackEvent === 'function') {\n      window.xbTrackEvent('page_not_found', {\n        event_category: 'technical_seo',\n        event_label: missingPath,\n        missing_path: missingPath,\n        page_location: window.location.href,\n        page_referrer: document.referrer || '',\n      });\n    }\n  }\n  document.addEventListener('astro:page-load', trackNotFoundPage);\n  trackNotFoundPage();\n<\/script>  ", " "], ["", " <script>\n  function trackNotFoundPage() {\n    const params = new URLSearchParams(window.location.search);\n    const missingPath = params.get('from') || window.location.pathname;\n    const eventKey = \\`\\${window.location.href}|\\${missingPath}\\`;\n    if (window.__xbstack404Tracked === eventKey) return;\n    window.__xbstack404Tracked = eventKey;\n    if (typeof window.xbTrackEvent === 'function') {\n      window.xbTrackEvent('page_not_found', {\n        event_category: 'technical_seo',\n        event_label: missingPath,\n        missing_path: missingPath,\n        page_location: window.location.href,\n        page_referrer: document.referrer || '',\n      });\n    }\n  }\n  document.addEventListener('astro:page-load', trackNotFoundPage);\n  trackNotFoundPage();\n<\/script>  ", " "])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities, "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main class="w-full min-h-screen text-left pb-40" data-astro-cid-zetdm5md>  <section class="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-24 mb-12" data-astro-cid-zetdm5md>  <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-sky-50/10 to-slate-50 dark:from-slate-950 dark:via-sky-950/5 dark:to-slate-950 -z-10" data-astro-cid-zetdm5md></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03),transparent_70%)] -z-10" data-astro-cid-zetdm5md></div> <div class="container px-6 text-center" data-astro-cid-zetdm5md> <div id="notfound-container" class="relative group inline-block p-10 md:p-20 rounded-[50px] bg-white/5 dark:bg-slate-900/20 backdrop-blur-3xl border border-slate-200/50 dark:border-white/5 shadow-2xl animate-fadeUp max-w-2xl w-full overflow-hidden" data-astro-cid-zetdm5md>  <div class="relative mb-6" data-astro-cid-zetdm5md> <div aria-hidden="true" class="text-[8rem] md:text-[12rem] font-black italic tracking-tighter leading-none text-slate-900/5 dark:text-white/5 absolute inset-0 blur-2xl select-none" data-astro-cid-zetdm5md>404</div> <h1 class="text-[8rem] md:text-[12rem] font-black italic tracking-tighter leading-none bg-gradient-to-tr from-orange-400 via-white to-orange-600 bg-clip-text text-transparent drop-shadow-2xl relative z-10 animate-pulse-slow" data-astro-cid-zetdm5md>
404
</h1> </div> <div class="relative z-20" data-astro-cid-zetdm5md> <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6" data-astro-cid-zetdm5md> <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping" data-astro-cid-zetdm5md></span>
Beyond the Horizon
</div> <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 italic tracking-tight" data-astro-cid-zetdm5md>你已进入未被记录的无人区</h2> <p class="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto font-medium leading-relaxed" data-astro-cid-zetdm5md>
这里的海拔超出了路由的物理边界。路径可能已被雪花封锁，请使用下方信道重新锚定。
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-zetdm5md> <a href="/" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-orange-500 text-white font-black text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-lg text-center" data-astro-cid-zetdm5md>
⛺ 回到大本营
</a> <a href="/search/" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 font-black text-xs tracking-widest uppercase hover:scale-105 transition-all text-center" data-astro-cid-zetdm5md>
🔍 开启全量扫描
</a> </div> </div>  <canvas id="snow-field" class="absolute inset-0 pointer-events-none rounded-[50px] z-30" data-astro-cid-zetdm5md></canvas> </div> </div> </section>  <div class="container mx-auto px-6 max-w-4xl mb-16 animate-fadeUp" data-astro-cid-zetdm5md> <form action="/search/" method="GET" class="max-w-xl mx-auto" data-astro-cid-zetdm5md> <div class="relative group" data-astro-cid-zetdm5md> <div class="absolute -inset-1 rounded-3xl bg-orange-500/20 blur-xl opacity-50 group-focus-within:opacity-100 transition-opacity" data-astro-cid-zetdm5md></div> <input type="text" name="q" placeholder="搜索 AI Agent、MCP、n8n、复利、阅读、贵州徒步……" class="relative z-10 w-full px-6 py-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/60 backdrop-blur-md text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm md:text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-bold" data-astro-cid-zetdm5md> <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 z-20 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs tracking-wider rounded-xl transition-colors" data-astro-cid-zetdm5md>
搜索 XBSTACK
</button> </div> </form> </div> <section class="container mx-auto px-6 max-w-6xl animate-fadeUp" data-astro-cid-zetdm5md> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-zetdm5md> ${[
    { title: "AI \u4E3B\u7EBF\u5165\u53E3", desc: "Agent\u3001LangGraph\u3001MCP\u3001n8n \u4E0E\u751F\u4EA7\u5316\u6392\u969C\u3002", href: "/ai/" },
    { title: "\u4EA7\u54C1\u5DE5\u5177\u5165\u53E3", desc: "AI \u8D22\u62A5\u52A9\u624B\u3001\u590D\u5229\u8BA1\u7B97\u5668\u3001Lunest \u4E0E Gear Library\u3002", href: "/tools/" },
    { title: "NAS / \u6237\u5916\u8BB0\u5F55", desc: "\u79C1\u6709\u4E91\u3001\u8FDC\u7A0B\u8BBF\u95EE\u3001\u8D35\u5DDE\u5F92\u6B65\u3001\u88C5\u5907\u4E0E\u6444\u5F71\u3002", href: "/life/" },
    { title: "\u6295\u8D44\u4E0E\u9605\u8BFB", desc: "\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u51B3\u7B56\u6A21\u578B\u4E0E\u957F\u671F\u8D44\u4EA7\u8BB0\u5F55\u3002", href: "/investing/" }
  ].map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group block p-6 rounded-[28px] bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-orange-500/40 transition-all" data-astro-cid-zetdm5md> <h3 class="text-lg font-black text-slate-950 dark:text-white mb-3 group-hover:text-orange-500 transition-colors" data-astro-cid-zetdm5md>${item.title}</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-zetdm5md>${item.desc}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500" data-astro-cid-zetdm5md>重新进入 →</div> </a>`)} </div> </section> </main> ` }), renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/pages/404.astro?astro&type=script&index=0&lang.ts"));
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
