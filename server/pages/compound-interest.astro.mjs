import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { f as formatDate } from '../chunks/formatDate_DQ3YI9r0.mjs';
import { g as getCollection } from '../chunks/_astro_content_CEdkLuU4.mjs';
import { s as seoMatrix } from '../chunks/seo_matrix_BsY4qluF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "\u590D\u5229\u6D4B\u7B97\u6307\u5357\uFF1A\u672C\u91D1\u3001\u5B9A\u6295\u3001\u901A\u80C0\u3001\u56DE\u64A4\u4E0E FIRE \u5047\u8BBE - XBSTACK";
  const description = "XBSTACK \u590D\u5229\u6D4B\u7B97\u6307\u5357\u7528\u6570\u5B66\u65B9\u5F0F\u6BD4\u8F83\u672C\u91D1\u3001\u5B9A\u6295\u3001\u65F6\u95F4\u3001\u901A\u80C0\u548C\u56DE\u64A4\u5BF9\u957F\u671F\u76EE\u6807\u7684\u5F71\u54CD\uFF0C\u5E76\u8FDE\u63A5\u590D\u5229\u8BA1\u7B97\u5668\u548C\u76F8\u5173\u590D\u76D8\u6587\u7AE0\u3002\u8FD9\u91CC\u5C55\u793A\u7684\u662F\u5047\u8BBE\u6D4B\u7B97\uFF0C\u4E0D\u627F\u8BFA\u6536\u76CA\uFF0C\u4E5F\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  const keywords = "\u590D\u5229\u6D4B\u7B97\u6307\u5357, \u590D\u5229\u8BA1\u7B97\u5668\u5728\u7EBF, \u5B9A\u6295\u6536\u76CA\u8BA1\u7B97, \u5E74\u5316\u6536\u76CA\u7387\u8BA1\u7B97, FIRE \u5047\u8BBE\u6D4B\u7B97, \u901A\u80C0\u6D4B\u7B97, \u56DE\u64A4\u538B\u529B\u6D4B\u8BD5, XBSTACK";
  const COLLECTION_MAP = {
    "stack": "ai",
    "horizon": "investing",
    "lens": "life",
    "notes": "notes"
  };
  const fetchRelatedPosts = async () => {
    const collections = ["ai", "horizon", "notes"];
    let allPosts = [];
    for (const col of collections) {
      try {
        const posts = await getCollection(col, ({ data }) => {
          return !data.draft && (data.category === "finance" || data.tags?.includes("\u590D\u5229"));
        });
        allPosts = [...allPosts, ...posts];
      } catch (e) {
      }
    }
    return allPosts.sort((a, b) => new Date(b.data.createdAt).valueOf() - new Date(a.data.createdAt).valueOf());
  };
  const blogPosts = await fetchRelatedPosts();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden">  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-orange-500/15 to-transparent blur-[150px] -z-10 opacity-40"></div> <div class="max-w-6xl mx-auto px-6">  <header class="mb-24 animate-fadeUp"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-orange-500 transition-colors">首页</a> <span class="opacity-30">/</span> <span class="text-orange-500">📈 复利投资中心</span> </nav> <h1 class="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-10 tracking-tighter italic">
复利测算<br><span class="text-orange-500">假设指南</span> </h1> <p class="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed italic">
"先把本金、时间、通胀和回撤放进同一张表，再谈长期目标是否可靠。"
</p> </header>  <section class="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32"> <div class="lg:col-span-7 prose prose-lg dark:prose-invert font-medium text-slate-600 dark:text-slate-400"> <h2 class="text-3xl font-black text-slate-900 dark:text-white italic uppercase tracking-widest mb-8"> <span class="text-orange-500">01.</span> 复利公式的底层重构
</h2> <p>
复利被爱因斯坦称为“世界第八大奇迹”，但在我这种写代码的人眼里，它其实就是一段带递归的财富代码。其核心逻辑在于：<span class="font-black text-slate-900 dark:text-white">每一期的产出，都会在下一周期自动转化为输入。</span> </p> <p>
我们讨论复利，不是为了制造收益确定性，而是为了把 <span class="font-black text-slate-900 dark:text-white">本金、现金流、时间、通胀和回撤</span> 放进同一套数学假设里。只有先看清参数，才知道一个长期目标到底稳不稳。
</p> <div class="p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border-l-4 border-orange-500 my-10"> <span class="text-xs font-black uppercase text-orange-500 block mb-4 italic">The Formula</span> <p class="text-2xl font-mono font-black text-slate-900 dark:text-white text-center">A = P(1 + r)<sup>t</sup></p> <p class="text-xs mt-4 opacity-60 text-center font-bold">时间 $t$ 是唯一的指数级变量。这意味着：起步的早晚，决定了你资产的物理位阶。</p> </div> </div> <div class="lg:col-span-5"> <div data-theme-surface="adaptive-compound-start" class="p-10 rounded-[50px] bg-orange-50/70 text-slate-950 shadow-sm border border-orange-200 sticky top-24 overflow-hidden group dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full"></div> <h3 class="text-2xl font-black mb-6 italic relative z-10 text-slate-950 dark:text-white">快速启动</h3> <p class="font-bold text-slate-600 dark:text-slate-400 mb-10 leading-relaxed relative z-10">
测算只是开始。先用计算器比较保守、中性和压力测试三组假设，再决定这个目标是否值得继续执行。
</p> <a href="/tools/compound-calculator/" class="flex items-center justify-between p-6 rounded-3xl bg-white hover:bg-orange-50 border border-orange-200 transition-all font-black uppercase tracking-widest text-sm relative z-10 group-hover:border-orange-500 text-slate-900 dark:bg-white/[0.06] dark:hover:bg-white/10 dark:border-white/10 dark:text-white">
开启模拟引擎 <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> </div> </section>  <section class="mb-32"> <div class="flex items-center gap-4 mb-12"> <div class="h-8 w-1 bg-orange-500 rounded-full shadow-lg"></div> <h2 class="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white italic">实战模拟矩阵 / SIMULATOR_MATRIX</h2> </div> <div class="p-10 rounded-[60px] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5"> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${seoMatrix.map((item) => renderTemplate`<a${addAttribute(`/compound-interest/${item.slug}/`, "href")} class="px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black text-slate-500 dark:text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all truncate text-center"> ${item.p_label} @ ${item.r_label} (${item.years}年)
</a>`)} </div> </div> </section>  <section class="mb-32"> <div class="flex items-center gap-4 mb-12"> <div class="h-8 w-1 bg-sky-500 rounded-full shadow-lg"></div> <h2 class="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white italic">核心审计报告 / ANALYTICS_DOCS</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${blogPosts.map((post) => renderTemplate`<a${addAttribute(`/${COLLECTION_MAP[post.collection] || post.collection}/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500 transition-all"> <div class="flex items-center gap-3 mb-4 text-[10px] font-black text-slate-400"> <span class="uppercase">CASE_STUDY</span> <span>/</span> <span>${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors mb-4">${post.data.title}</h3> <p class="text-sm text-slate-500 dark:text-slate-400 font-bold line-clamp-2">${post.data.description}</p> </a>`)} </div> </section>  <section class="max-w-4xl mx-auto py-24 border-t border-slate-200 dark:border-white/5"> <h2 class="text-center text-3xl font-black mb-16 italic uppercase tracking-tighter">常见逻辑审计 / FAQ</h2> <div class="space-y-8"> ${[
    {
      q: "\u590D\u5229\u8BA1\u7B97\u4E2D\u7684\u901A\u80C0\u7387\u5E94\u8BE5\u600E\u4E48\u586B\uFF1F",
      a: "\u53EF\u4EE5\u5148\u8BBE\u7F6E\u4FDD\u5B88\u3001\u4E2D\u6027\u3001\u538B\u529B\u6D4B\u8BD5\u4E09\u7EC4\u901A\u80C0\u5047\u8BBE\uFF0C\u518D\u770B\u540D\u4E49\u8D44\u4EA7\u548C\u771F\u5B9E\u8D2D\u4E70\u529B\u7684\u5DEE\u8DDD\u3002\u9875\u9762\u53EA\u505A\u6570\u5B66\u6D4B\u7B97\uFF0C\u4E0D\u7ED9\u56FA\u5B9A\u53C2\u6570\u627F\u8BFA\u3002"
    },
    {
      q: "\u4E3A\u4EC0\u4E48\u8BF4\u6CE2\u52A8\u7387\u662F\u590D\u5229\u7684\u6740\u624B\uFF1F",
      a: "\u6570\u5B66\u4E0A\u8FD9\u88AB\u79F0\u4E3A\u6CE2\u52A8\u7387\u635F\u8017\uFF08Volatility Drag\uFF09\u3002\u5E73\u5747\u6536\u76CA\u7387 10% \u7684\u7A33\u5065\u8D44\u4EA7\uFF0C\u5176\u590D\u5229\u7EC8\u503C\u8FDC\u9AD8\u4E8E\u5E73\u5747\u6536\u76CA 10% \u4F46\u4F34\u968F 50% \u56DE\u64A4\u7684\u9AD8\u6CE2\u8D44\u4EA7\u3002"
    },
    {
      q: "\u72EC\u7ACB\u5F00\u53D1\u8005\u5982\u4F55\u7406\u89E3\u590D\u5229\u8D44\u4EA7\uFF1F",
      a: "\u66F4\u7A33\u7684\u7406\u89E3\u662F\uFF1A\u628A\u53EF\u590D\u7528\u4EE3\u7801\u3001\u5185\u5BB9\u7CFB\u7EDF\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u73B0\u91D1\u6D41\u8BB0\u5F55\u548C\u5B66\u4E60\u80FD\u529B\u5F53\u6210\u957F\u671F\u8D44\u4EA7\u53BB\u79EF\u7D2F\u3002\u6295\u8D44\u76F8\u5173\u5185\u5BB9\u53EA\u505A\u590D\u76D8\u548C\u5047\u8BBE\u6D4B\u7B97\uFF0C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\u3002"
    }
  ].map((faq) => renderTemplate`<div class="p-8 rounded-[40px] bg-white dark:bg-[#0B0D11] border border-slate-100 dark:border-white/5"> <h4 class="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3 italic"> <span class="w-2 h-2 rounded-full bg-orange-500"></span> ${faq.q} </h4> <p class="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed">${faq.a}</p> </div>`)} </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/compound-interest/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/compound-interest/index.astro";
const $$url = "/compound-interest/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
