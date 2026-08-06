import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$CompoundCalculator = createComponent(($$result, $$props, $$slots) => {
  const title = "\u590D\u5229\u8BA1\u7B97\u5668\uFF1A\u672C\u91D1\u3001\u5B9A\u6295\u3001\u901A\u80C0\u3001\u56DE\u64A4\u4E0E FIRE \u5047\u8BBE\u6D4B\u7B97 - XBSTACK";
  const description = "XBSTACK \u590D\u5229\u8BA1\u7B97\u5668\u662F\u6570\u5B66\u5047\u8BBE\u9A8C\u8BC1\u5668\uFF0C\u7528\u6765\u6BD4\u8F83\u672C\u91D1\u3001\u5B9A\u6295\u3001\u65F6\u95F4\u3001\u901A\u80C0\u548C\u56DE\u64A4\u5BF9 FIRE \u76EE\u6807\u7684\u5F71\u54CD\uFF1B\u5B83\u4E0D\u9884\u6D4B\u6536\u76CA\uFF0C\u4E5F\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002";
  const keywords = "Compound Interest Calculator, Compound Interest Calculator Online, Online ROI Calculator, \u590D\u5229\u8BA1\u7B97\u5668, \u5B9A\u6295\u590D\u5229\u8BA1\u7B97\u5668, FIRE \u8BA1\u7B97\u5668, \u6295\u8D44\u6536\u76CA\u8BA1\u7B97, \u5B9A\u6295\u6536\u76CA\u6A21\u62DF, \u901A\u80C0\u5F71\u54CD, XBSTACK";
  const faqItems = [
    {
      question: "\u590D\u5229\u8BA1\u7B97\u5668\u80FD\u9884\u6D4B\u672A\u6765\u6536\u76CA\u5417\uFF1F",
      answer: "\u4E0D\u80FD\u3002\u5B83\u53EA\u80FD\u6839\u636E\u4F60\u8F93\u5165\u7684\u672C\u91D1\u3001\u5B9A\u6295\u3001\u5E74\u5316\u5047\u8BBE\u3001\u901A\u80C0\u548C\u65F6\u95F4\u505A\u6570\u5B66\u63A8\u6F14\uFF0C\u4E0D\u80FD\u9884\u6D4B\u5E02\u573A\uFF0C\u4E5F\u4E0D\u4FDD\u8BC1\u4EFB\u4F55\u6536\u76CA\u3002"
    },
    {
      question: "\u5E74\u5316\u6536\u76CA\u7387\u5E94\u8BE5\u600E\u4E48\u586B\uFF1F",
      answer: "\u5E74\u5316\u6536\u76CA\u7387\u5E94\u8BE5\u4F5C\u4E3A\u5047\u8BBE\u53C2\u6570\u53CD\u590D\u6D4B\u8BD5\uFF0C\u800C\u4E0D\u662F\u76EE\u6807\u627F\u8BFA\u3002\u5EFA\u8BAE\u540C\u65F6\u6D4B\u8BD5\u4FDD\u5B88\u3001\u4E2D\u6027\u3001\u4E50\u89C2\u4E09\u7EC4\u53C2\u6570\uFF0C\u5E76\u89C2\u5BDF\u56DE\u64A4\u548C\u901A\u80C0\u540E\u7684\u8D2D\u4E70\u529B\u53D8\u5316\u3002"
    },
    {
      question: "\u5B9A\u6295\u548C\u4E00\u6B21\u6027\u6295\u5165\u5E94\u8BE5\u600E\u4E48\u6BD4\u8F83\uFF1F",
      answer: "\u4E00\u6B21\u6027\u6295\u5165\u66F4\u4F9D\u8D56\u8D77\u70B9\u4F30\u503C\u548C\u957F\u671F\u6301\u6709\uFF0C\u5B9A\u6295\u66F4\u9002\u5408\u73B0\u91D1\u6D41\u5206\u6279\u8FDB\u5165\u3002\u5DE5\u5177\u4F1A\u5E2E\u52A9\u4F60\u6BD4\u8F83\u4E0D\u540C\u73B0\u91D1\u6D41\u8DEF\u5F84\u4E0B\u7684\u7ED3\u679C\u5DEE\u5F02\u3002"
    },
    {
      question: "FIRE \u6D4B\u7B97\u4E3A\u4EC0\u4E48\u8981\u8003\u8651\u901A\u80C0\uFF1F",
      answer: "FIRE \u76EE\u6807\u4E0D\u662F\u8D26\u9762\u91D1\u989D\uFF0C\u800C\u662F\u672A\u6765\u8D2D\u4E70\u529B\u3002\u901A\u80C0\u4F1A\u4FB5\u8680\u8D44\u4EA7\u771F\u5B9E\u4EF7\u503C\uFF0C\u6240\u4EE5\u9700\u8981\u540C\u65F6\u770B\u540D\u4E49\u8D44\u4EA7\u548C\u6263\u9664\u901A\u80C0\u540E\u7684\u7ED3\u679C\u3002"
    },
    {
      question: "\u8FD9\u4E2A\u5DE5\u5177\u662F\u5426\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\uFF1F",
      answer: "\u4E0D\u6784\u6210\u3002XBSTACK \u590D\u5229\u8BA1\u7B97\u5668\u53EA\u662F\u6570\u5B66\u5047\u8BBE\u9A8C\u8BC1\u5668\uFF0C\u6240\u6709\u53C2\u6570\u90FD\u9700\u8981\u4F60\u81EA\u884C\u5224\u65AD\uFF0C\u4EFB\u4F55\u6295\u8D44\u51B3\u7B56\u90FD\u5E94\u72EC\u7ACB\u5B8C\u6210\u3002"
    }
  ];
  const scenarioCards = [
    { title: "\u4E00\u6B21\u6027\u6295\u5165", desc: "\u8F93\u5165\u4E00\u7B14\u672C\u91D1\uFF0C\u89C2\u5BDF\u4E0D\u540C\u5E74\u5316\u5047\u8BBE\u548C\u6301\u6709\u5E74\u9650\u4E0B\u7684\u7EC8\u503C\u5DEE\u5F02\u3002" },
    { title: "\u6BCF\u6708\u5B9A\u6295", desc: "\u6BD4\u8F83\u6BCF\u6708 2,000\u30015,000\u300110,000 \u7B49\u73B0\u91D1\u6D41\u8FDB\u5165\u540E\u7684\u957F\u671F\u66F2\u7EBF\u3002" },
    { title: "FIRE \u76EE\u6807", desc: "\u53CD\u63A8\u8FBE\u5230\u6307\u5B9A\u6708\u652F\u51FA\u6216\u8D44\u4EA7\u89C4\u6A21\u9700\u8981\u7684\u672C\u91D1\u3001\u65F6\u95F4\u548C\u6536\u76CA\u5047\u8BBE\u3002" },
    { title: "\u901A\u80C0\u6298\u73B0", desc: "\u540C\u65F6\u67E5\u770B\u540D\u4E49\u8D44\u4EA7\u548C\u771F\u5B9E\u8D2D\u4E70\u529B\uFF0C\u907F\u514D\u53EA\u770B\u8D26\u9762\u91D1\u989D\u3002" },
    { title: "\u56DE\u64A4\u538B\u529B\u6D4B\u8BD5", desc: "\u628A\u4E50\u89C2\u53C2\u6570\u6539\u6210\u4FDD\u5B88\u53C2\u6570\uFF0C\u89C2\u5BDF\u76EE\u6807\u662F\u5426\u4ECD\u7136\u6210\u7ACB\u3002" }
  ];
  const relatedLinks = [
    { title: "Investing \u957F\u671F\u590D\u76D8", href: "/investing/" },
    { title: "Horizon \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF", href: "/horizon/" },
    { title: "AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177", href: "/tools/ai-finance/" },
    { title: "\u590D\u5229\u6295\u8D44\u6307\u5357", href: "/compound-interest/" },
    { title: "Reading \u51B3\u7B56\u7CFB\u7EDF", href: "/horizon/reading/" }
  ];
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "XBSTACK Compound Interest Calculator",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0" },
        "description": "A compound interest calculator for testing principal, recurring contributions, inflation and FIRE assumptions. It is not investment advice."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": schemaJsonLd }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative z-10 pt-32 pb-24 min-h-screen"> <div class="container mx-auto px-6 max-w-[1440px]"> <header class="mb-20 text-center animate-fadeUp"> <div class="flex items-center justify-center gap-4 mb-6"> <span class="text-[10px] font-black tracking-[0.8em] uppercase text-orange-500 italic">Assumption_Testing / 假设测算</span> </div> <h1 class="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter italic leading-none"> <span class="text-orange-500">Compound Interest</span> <br class="hidden md:block"> Calculator Online
</h1> <div class="flex items-center justify-center gap-4 mb-8"> <span class="text-sm md:text-base font-black text-slate-400 dark:text-slate-500 tracking-[0.5em] uppercase opacity-70">复利引擎 / V6.6</span> <a href="/en/tools/compound-calculator/" class="px-3 py-1 rounded-full border border-orange-500/30 text-[10px] font-black text-orange-500 hover:bg-orange-500/10 transition-all uppercase tracking-widest">English Version</a> </div> </header> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32"> <div class="lg:col-span-7"> <div class="p-1 rounded-[45px] bg-gradient-to-br from-orange-500/20 to-transparent shadow-2xl"> <div class="bg-white dark:bg-slate-900/40 backdrop-blur-3xl rounded-[44px] p-8 md:p-12 border border-white/20 dark:border-white/5"> ${renderComponent($$result2, "CompoundCalculatorClient", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/tools/CompoundCalculator.jsx", "client:component-export": "default" })} </div> </div> </div> <div class="lg:col-span-5"> <div class="sticky top-24 space-y-12 text-left"> <section class="animate-fadeLeft"> <div class="p-8 md:p-10 rounded-[45px] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-3xl relative overflow-hidden"> <div class="flex items-center gap-4 mb-8 text-left"> <div class="h-8 w-1.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div> <h2 class="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white italic">参数复盘 / <span class="text-orange-500">ASSUMPTION_AUDIT</span></h2> </div> <div class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-bold leading-relaxed space-y-6 text-sm"> <p>
复利计算器不是收益承诺工具，而是一个数学假设验证器。它把本金、定投、年化假设、通胀、时间和回撤放到同一张表里，让你先看清逻辑，再决定现实中是否承担对应风险。
</p> <p>
我用它做个人资产复盘时，重点不是追一个漂亮的年化数字，而是反复切换保守、中性、压力测试三组参数：如果收益假设更低、通胀更高、现金流中断一年，原来的 FIRE 目标是否还成立。
</p> </div> </div> </section>  <section class="space-y-6"> <h3 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-3"> <span class="h-4 w-1 bg-orange-500"></span> 具象化应用场景 / USE CASES
</h3> <div class="grid grid-cols-1 gap-4"> ${scenarioCards.map((item, index) => renderTemplate`<div class="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group hover:border-orange-500/50 transition-all"> <div class="text-[10px] font-black text-orange-500 mb-2 uppercase tracking-tight">Scenario ${String(index + 1).padStart(2, "0")}: ${item.title}</div> <p class="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">${item.desc}</p> </div>`)} </div> </section> <section class="p-8 md:p-10 rounded-[45px] bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20"> <h3 class="text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-5">风险提示 / NOT INVESTMENT ADVICE</h3> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">复利计算器只能验证假设，不保证收益。年化收益、通胀率、回撤和现金流都应该作为变量反复测试；任何投资复盘文章都不提供买卖建议。</p> </section> </div> </div> </div>  <section class="max-w-4xl mx-auto space-y-20 text-left"> <div class="prose prose-lg dark:prose-invert max-w-none"> <h2 class="text-4xl font-black italic tracking-tight">为什么你需要一个独立的复利计算器？</h2> <p class="font-bold text-slate-500">普通收益计算器经常只展示终值，容易忽略通胀、现金流中断、回撤和参数假设变化。XBSTACK 复利计算器的重点是把这些假设放到同一张表里比较。</p> <h3 class="text-2xl font-black italic underline decoration-orange-500/30">1. 还原真实的购买力</h3> <p>如果你输入较高年化收益，也应该同时输入通胀假设，观察名义资产和真实购买力之间的差距。这里展示的是数学结果，不是收益承诺。</p> <h3 class="text-2xl font-black italic underline decoration-orange-500/30">2. 用压力测试替代乐观想象</h3> <p>复利测算最有价值的部分不是生成漂亮曲线，而是把参数调低、把通胀调高、把现金流中断加入模型，看看原来的目标是否仍然成立。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-200 dark:border-white/10 pt-12"> <div class="space-y-6"> <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">常见问题 / FAQ</h4> <div class="space-y-4"> ${faqItems.map((item) => renderTemplate`<details class="group border-b border-slate-100 dark:border-white/5 pb-4"> <summary class="list-none cursor-pointer flex justify-between items-center text-sm font-bold text-slate-800 dark:text-slate-200">${item.question} <span class="group-open:rotate-180 transition-transform">↓</span></summary> <p class="pt-4 text-xs text-slate-500 leading-relaxed font-medium">${item.answer}</p> </details>`)} </div> </div> <div class="space-y-6"> <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">关联研究文章 / RELATED</h4> <ul class="space-y-4"> ${relatedLinks.map((item) => renderTemplate`<li><a${addAttribute(item.href, "href")} class="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">· ${item.title}</a></li>`)} </ul> </div> </div> </section> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/compound-calculator.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/compound-calculator.astro";
const $$url = "/tools/compound-calculator/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CompoundCalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
