import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "App \u5E94\u7528\uFF1ALunest \u7761\u7720\u6062\u590D App \u4E0E XBSTACK \u72EC\u7ACB\u5F00\u53D1\u4EA7\u54C1 - XBSTACK";
  const description = "XBSTACK App \u5E94\u7528\u5165\u53E3\uFF0C\u6574\u7406\u5C0F\u767D\u6B63\u5728\u5F00\u53D1\u548C\u7EF4\u62A4\u7684\u79FB\u52A8\u7AEF\u4EA7\u54C1\uFF0C\u5305\u62EC Lunest \u7761\u7720\u6062\u590D App\u3001\u672A\u6765\u5DE5\u5177\u578B App \u548C\u72EC\u7ACB\u5F00\u53D1\u4EA7\u54C1\u5B9E\u9A8C\u3002\u8FD9\u91CC\u8BB0\u5F55\u4EA7\u54C1\u5B9A\u4F4D\u3001\u6D4B\u8BD5\u8BA1\u5212\u3001\u4E0A\u7EBF\u8282\u594F\u548C\u771F\u5B9E\u5F00\u53D1\u590D\u76D8\u3002";
  const keywords = "XBSTACK App, Lunest, \u7761\u7720\u6062\u590D App, \u52A9\u7720 App, \u72EC\u7ACB\u5F00\u53D1 App, iOS App, Android App, \u79FB\u52A8\u5E94\u7528, \u5C0F\u767D, \u4EA7\u54C1\u5DE5\u5177";
  const appCards = [
    {
      title: "Lunest",
      label: "SLEEP RECOVERY",
      desc: "\u7761\u7720\u76D1\u6D4B\u3001\u52A9\u7720\u97F3\u666F\u3001\u6668\u95F4\u62A5\u544A\u548C\u957F\u671F\u6062\u590D\u8D8B\u52BF\u3002\u5F53\u524D\u4F5C\u4E3A XBSTACK \u7B2C\u4E00\u4E2A\u91CD\u70B9\u79FB\u52A8\u7AEF\u4EA7\u54C1\u63A8\u8FDB\u3002",
      href: "/tools/lunest/",
      status: "\u6D4B\u8BD5\u7248\u51C6\u5907\u4E2D"
    },
    {
      title: "\u4E0B\u4E00\u6B3E\u5DE5\u5177\u578B App",
      label: "PRODUCT PIPELINE",
      desc: "\u540E\u7EED App \u4E0D\u4F1A\u4E3A\u4E86\u51D1\u4EA7\u54C1\u6570\u91CF\u800C\u505A\uFF0C\u4F18\u5148\u4ECE\u771F\u5B9E\u5DE5\u4F5C\u6D41\u3001\u5185\u5BB9\u8FD0\u8425\u3001\u5065\u5EB7\u6062\u590D\u548C\u4E2A\u4EBA\u8D44\u4EA7\u7CFB\u7EDF\u91CC\u957F\u51FA\u6765\u3002",
      href: "/tools/labs/",
      status: "\u89C4\u5212\u4E2D"
    }
  ];
  const appFaqs = [
    { question: "XBSTACK \u7684 App \u5E94\u7528\u4E3B\u8981\u505A\u4EC0\u4E48\uFF1F", answer: "\u4F18\u5148\u670D\u52A1\u771F\u5B9E\u9700\u6C42\uFF0C\u4F8B\u5982\u7761\u7720\u6062\u590D\u3001\u5185\u5BB9\u5DE5\u4F5C\u6D41\u3001\u5DE5\u5177\u4EA7\u54C1\u548C\u4E2A\u4EBA\u8D44\u4EA7\u7CFB\u7EDF\uFF0C\u4E0D\u505A\u6CA1\u6709\u957F\u671F\u7EF4\u62A4\u4EF7\u503C\u7684\u6982\u5FF5 Demo\u3002" },
    { question: "Lunest \u4EC0\u4E48\u65F6\u5019\u5F00\u653E\u6D4B\u8BD5\uFF1F", answer: "Android \u6D4B\u8BD5\u7248\u6B63\u5728\u51C6\u5907\uFF0CiOS \u4F1A\u6839\u636E\u5F00\u53D1\u8005\u8D26\u53F7\u548C\u5BA1\u6838\u8282\u594F\u9010\u6B65\u5F00\u653E TestFlight \u6216\u5546\u5E97\u6D4B\u8BD5\u3002" },
    { question: "\u8FD9\u91CC\u4F1A\u8BB0\u5F55\u5F00\u53D1\u8FC7\u7A0B\u5417\uFF1F", answer: "\u4F1A\u3002XBSTACK \u4F1A\u8BB0\u5F55\u4EA7\u54C1\u5B9A\u4F4D\u3001\u6280\u672F\u9009\u578B\u3001\u56FD\u9645\u5316\u3001\u8BA2\u9605\u3001\u670D\u52A1\u5668\u3001\u90AE\u4EF6\u9A8C\u8BC1\u7801\u3001\u63A8\u9001\u548C\u4E0A\u7EBF\u8FC7\u7A0B\u91CC\u7684\u771F\u5B9E\u95EE\u9898\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: appFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/tools/" class="text-sm font-bold text-blue-500">← 产品工具</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Apps / Independent Products</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">App 应用</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">这里不是 App 展示墙，而是 XBSTACK 的移动端产品实验入口。优先展示已经进入真实开发和测试节奏的产品。</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"> ${appCards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-8 rounded-[34px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <div class="flex items-center justify-between gap-4 mb-5"> <span class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">${item.label}</span> <span class="px-3 py-1 rounded-full bg-blue-500/10 text-[10px] font-black text-blue-500">${item.status}</span> </div> <h2 class="text-3xl font-black text-slate-950 dark:text-white mb-4">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> <div class="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">查看产品 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">关于 XBSTACK App 应用</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${appFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/apps/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/apps/index.astro";
const $$url = "/tools/apps/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
