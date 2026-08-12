import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Wechat = createComponent(($$result, $$props, $$slots) => {
  const title = "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7\uFF1A\u5C0F\u767D\u7684 AI\u3001\u6237\u5916\u3001\u9605\u8BFB\u3001\u6295\u8D44\u4E0E\u72EC\u7ACB\u5F00\u53D1\u8BB0\u5F55";
  const description = "\u5173\u6CE8 XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u9605\u8BFB\u5C0F\u767D\u5173\u4E8E AI Agent\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u6237\u5916\u5F92\u6B65\u3001\u6F2B\u753B\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u6295\u8D44\u590D\u76D8\u548C\u957F\u671F\u8D44\u4EA7\u5B9E\u9A8C\u7684\u4E2D\u6587\u5185\u5BB9\u3002\u516C\u4F17\u53F7\u6CE8\u518C\u4E8E 2015 \u5E74\uFF0C2026 \u5E74 5 \u6708\u91CD\u65B0\u63A5\u7BA1\uFF0C\u4F5C\u4E3A\u7F51\u7AD9\u4E4B\u5916\u66F4\u65E5\u5E38\u7684\u4E2D\u6587\u5185\u5BB9\u9635\u5730\u3002";
  const keywords = "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7, \u5C0F\u767D\u516C\u4F17\u53F7, AI Agent \u516C\u4F17\u53F7, \u7A0B\u5E8F\u5458\u6237\u5916, \u8D35\u5DDE\u5F92\u6B65\u516C\u4F17\u53F7, \u72EC\u7ACB\u5F00\u53D1\u516C\u4F17\u53F7, \u9605\u8BFB\u7CFB\u7EDF, \u6295\u8D44\u590D\u76D8, \u6237\u5916\u6F2B\u753B, \u5C0F\u767D\u6F2B\u753B, XBSTACK WeChat";
  const geoConfig = {
    geo_summary: "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7\u662F\u5C0F\u767D\u7684\u4E2D\u6587\u5185\u5BB9\u5165\u53E3\uFF0C\u8986\u76D6 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001\u72EC\u7ACB\u5F00\u53D1\u3001Lunest\u3001\u6237\u5916\u5F92\u6B65\u3001\u6F2B\u753B\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u6295\u8D44\u590D\u76D8\u548C\u957F\u671F\u8D44\u4EA7\u5B9E\u9A8C\u3002\u516C\u4F17\u53F7\u6CE8\u518C\u4E8E 2015 \u5E74\uFF0C2026 \u5E74 5 \u6708\u91CD\u65B0\u63A5\u7BA1\uFF0C\u4E0E XBSTACK \u7F51\u7AD9\u5F62\u6210\u4E92\u8865\uFF1A\u7F51\u7AD9\u8D1F\u8D23\u7CFB\u7EDF\u5316\u6C89\u6DC0\uFF0C\u516C\u4F17\u53F7\u8D1F\u8D23\u65E5\u5E38\u8868\u8FBE\u548C\u4E2D\u6587\u8BFB\u8005\u4E92\u52A8\u3002",
    geo_questions: [
      "What is XBSTACK WeChat?",
      "How can I follow Xiao Bai on WeChat?",
      "What does XBSTACK publish on WeChat?",
      "What is the difference between XBSTACK website and WeChat?",
      "Does XBSTACK WeChat cover AI and outdoor content?",
      "Does XBSTACK WeChat publish comics?"
    ],
    geo_entities: [
      "XBSTACK",
      "XBSTACK \u5FAE\u4FE1\u516C\u4F17\u53F7",
      "\u5C0F\u767D",
      "AI Agent",
      "\u72EC\u7ACB\u5F00\u53D1",
      "Lunest",
      "\u8D35\u5DDE\u5F92\u6B65",
      "\u6237\u5916\u6F2B\u753B",
      "\u9605\u8BFB\u7CFB\u7EDF",
      "\u6295\u8D44\u590D\u76D8",
      "Newsletter",
      "WeChat",
      "\u89C6\u9891\u53F7"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<main class="container mx-auto px-4 py-12 lg:py-24 max-w-4xl min-h-screen"> <!-- Header --> <header class="mb-16 text-center animate-fadeUp"> <h1 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
XiaoBai<span class="text-green-500">WeChat</span> </h1> <p class="text-lg text-slate-600 dark:text-slate-400 font-bold max-w-xl mx-auto italic">
\u201C\u7F51\u7AD9\u8D1F\u8D23\u7CFB\u7EDF\u6C89\u6DC0\uFF0C\u516C\u4F17\u53F7\u8D1F\u8D23\u65E5\u5E38\u9760\u8FD1\u3002\u201D
</p> <div class="mt-10 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-slate-500"> <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
2015\u5E74\u6CE8\u518C\u8001\u53F7 // 2026\u5E745\u6708\u91CD\u65B0\u63A5\u7BA1\u66F4\u65B0
</div> </header> <!-- WeChat QRCode Card with Rich Aesthetics --> <div class="p-12 rounded-[50px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-sm mx-auto mb-20 text-center relative overflow-hidden group shadow-sm animate-fadeUp"> <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/5 dark:bg-green-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div> <h3 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white mb-2">\u5FAE\u4FE1\u626B\u7801\u5173\u6CE8</h3> <p class="text-xs text-slate-500 dark:text-slate-400 mb-8 font-black tracking-widest font-mono">ID: \u8D35\u5DDE\u6237\u5916 (GZ_Outdoor)</p> <div class="w-64 h-64 mx-auto p-4 bg-white rounded-3xl border border-slate-200 shadow-inner mb-8 flex items-center justify-center"> <img src="/assets/xbstack-wechat-qr.webp" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF1A\u8D35\u5DDE\u6237\u5916\u4E8C\u7EF4\u7801" width="360" height="360" class="w-full h-full object-contain"> </div>  <button id="copy-wechat-btn" class="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-white/10 text-slate-950 dark:text-white font-black uppercase text-xs tracking-widest hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105 transition-all shadow-md">
\u590D\u5236\u516C\u4F17\u53F7 ID / COPY ID
</button> <p class="text-[10px] text-slate-400 mt-6 font-mono tracking-wider italic">SCAN_AND_FOLLOW_v6.6 / \u7269\u7406\u626B\u63CF\u5173\u6CE8</p> </div> <script>
      const btn = document.getElementById('copy-wechat-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          navigator.clipboard.writeText('\u8D35\u5DDE\u6237\u5916').then(() => {
            alert('\u5FAE\u4FE1\u53F7 ID \u201C\u8D35\u5DDE\u6237\u5916\u201D\u5DF2\u6210\u529F\u590D\u5236\u5230\u60A8\u7684\u526A\u8D34\u677F\uFF0C\u60A8\u53EF\u4EE5\u6253\u5F00\u5FAE\u4FE1\u76F4\u63A5\u641C\u7D22\u5173\u6CE8\uFF01');
          }).catch(() => {
            alert('\u590D\u5236\u5931\u8D25\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u624B\u52A8\u641C\u7D22\u516C\u4F17\u53F7\uFF1A\u201C\u8D35\u5DDE\u6237\u5916\u201D');
          });
        });
      }
    <\/script> </main> `])), renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities }), maybeRenderHead()) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/wechat.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/wechat.astro";
const $$url = "/wechat/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wechat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
