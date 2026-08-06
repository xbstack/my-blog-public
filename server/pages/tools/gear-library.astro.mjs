import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$GearLibrary = createComponent(($$result, $$props, $$slots) => {
  const title = "\u6237\u5916\u88C5\u5907\u6E05\u5355\u751F\u6210\u5668\u4E0E NAS \u914D\u7F6E\u68C0\u67E5 - XBSTACK";
  const description = "\u6309\u884C\u7A0B\u65F6\u957F\u3001\u5B63\u8282\u3001\u5929\u6C14\u3001\u6D77\u62D4\u548C\u540C\u884C\u4EBA\u5458\u751F\u6210\u6237\u5916\u88C5\u5907\u6E05\u5355\uFF0C\u68C0\u67E5 NAS \u7684\u76D8\u4F4D\u3001UPS\u3001\u5FEB\u7167\u4E0E\u5F02\u5730\u5907\u4EFD\u7F3A\u53E3\uFF0C\u5E76\u6D4F\u89C8\u5E26\u660E\u786E\u63A8\u5E7F\u62AB\u9732\u7684\u88C5\u5907\u53C2\u8003\u5E93\u3002";
  const keywords = "\u6237\u5916\u88C5\u5907\u6E05\u5355, \u5F92\u6B65\u88C5\u5907\u6E05\u5355, \u9732\u8425\u88C5\u5907\u6E05\u5355, NAS\u914D\u7F6E\u68C0\u67E5, UPS, \u5F02\u5730\u5907\u4EFD, \u88C5\u5907\u53C2\u8003\u5E93, XBSTACK";
  const canonical = "https://www.xbstack.com/tools/gear-library/";
  const gearFaqs = [
    { question: "\u8FD9\u662F\u771F\u6B63\u7684 AI \u88C5\u5907\u5BA1\u8BA1\u5417\uFF1F", answer: "\u4E0D\u662F\u3002\u5F53\u524D\u7248\u672C\u4F7F\u7528\u660E\u786E\u89C4\u5219\u751F\u6210\u6237\u5916\u6E05\u5355\u548C NAS \u7F3A\u53E3\u63D0\u793A\uFF0C\u4E0D\u8C03\u7528\u5927\u6A21\u578B\uFF0C\u4E5F\u4E0D\u8F93\u51FA\u7F3A\u4E4F\u4F9D\u636E\u7684\u7EFC\u5408\u5206\u6570\u3002" },
    { question: "\u53C2\u8003\u91CD\u91CF\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u80CC\u5305\u79F0\u91CD\u5417\uFF1F", answer: "\u4E0D\u80FD\u3002\u9875\u9762\u91CD\u91CF\u53EA\u662F\u57FA\u7840\u4F30\u7B97\uFF0C\u4E0D\u5305\u542B\u7A7F\u7740\u88C5\u5907\uFF0C\u4E5F\u4E0D\u80FD\u8986\u76D6\u4E0D\u540C\u54C1\u724C\u3001\u98DF\u6C34\u6570\u91CF\u548C\u8DEF\u7EBF\u6761\u4EF6\u3002\u51FA\u53D1\u524D\u4ECD\u5E94\u5B9E\u9645\u79F0\u91CD\u3002" },
    { question: "\u88C5\u5907\u53C2\u8003\u5E93\u662F\u5426\u5305\u542B\u63A8\u5E7F\u94FE\u63A5\uFF1F", answer: "\u90E8\u5206\u5165\u53E3\u5305\u542B\u8054\u76DF\u4EE3\u7801\u3002\u9875\u9762\u548C\u8DF3\u8F6C\u5F39\u7A97\u90FD\u4F1A\u660E\u786E\u62AB\u9732\uFF0C\u4EF7\u683C\u3001\u6D3B\u52A8\u3001\u89C4\u683C\u548C\u5730\u533A\u53EF\u7528\u6027\u4EE5\u76EE\u6807\u9875\u9762\u4E3A\u51C6\u3002" },
    { question: "NAS \u68C0\u67E5\u80FD\u66FF\u4EE3\u4E13\u4E1A\u65B9\u6848\u5417\uFF1F", answer: "\u4E0D\u80FD\u3002\u5B83\u53EA\u68C0\u67E5\u76D8\u4F4D\u3001UPS\u3001\u5FEB\u7167\u548C\u5F02\u5730\u5907\u4EFD\u7B49\u57FA\u7840\u7F3A\u53E3\u3002\u91CD\u8981\u6570\u636E\u4ECD\u9700\u8981\u6062\u590D\u6F14\u7EC3\u3001\u6743\u9650\u9694\u79BB\u548C\u5B9E\u9645\u5BB9\u91CF\u89C4\u5212\u3002" }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "XBSTACK \u88C5\u5907\u6E05\u5355\u4E0E NAS \u914D\u7F6E\u68C0\u67E5", url: canonical, applicationCategory: "UtilitiesApplication", operatingSystem: "Web", description, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
      { "@type": "FAQPage", mainEntity: gearFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "schemaJsonLd": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-24"> <div class="mx-auto max-w-7xl px-4"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500"> <a href="/" class="hover:text-orange-500">首页</a><span>/</span><a href="/tools/" class="hover:text-orange-500">Tools</a><span>/</span><span class="text-orange-500">Gear Library</span> </nav> <header class="py-16"> <p class="text-xs font-black uppercase tracking-[0.32em] text-orange-500">Checklist & Configuration Tools</p> <h1 class="mt-6 max-w-5xl text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">户外装备清单与 NAS 配置检查</h1> <p class="mt-7 max-w-4xl text-lg font-semibold leading-9 text-slate-600 dark:text-slate-300">先根据真实场景生成清单，再检查基础设施缺口。页面不再把规则判断包装成 AI 审计，也不会把资料整理写成全部亲测。</p> <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"> <div class="rounded-2xl border border-slate-200 p-5 dark:border-white/10"><strong class="block text-slate-950 dark:text-white">户外清单</strong><span class="mt-2 block text-sm font-semibold text-slate-500">按天气、海拔和同行人员动态生成</span></div> <div class="rounded-2xl border border-slate-200 p-5 dark:border-white/10"><strong class="block text-slate-950 dark:text-white">NAS 检查</strong><span class="mt-2 block text-sm font-semibold text-slate-500">检查 UPS、快照和异地备份</span></div> <div class="rounded-2xl border border-slate-200 p-5 dark:border-white/10"><strong class="block text-slate-950 dark:text-white">推广披露</strong><span class="mt-2 block text-sm font-semibold text-slate-500">商品入口明确标识联盟属性</span></div> </div> </header> </div> ${renderComponent($$result2, "GearLibraryClient", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@features/tools/components/GearLibrary.jsx", "client:component-export": "default" })} <section id="faq" class="mx-auto mt-16 max-w-7xl px-4"> <div class="rounded-[40px] border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035] md:p-10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">FAQ</p> <h2 class="mt-3 text-3xl font-black text-slate-950 dark:text-white">使用边界</h2> <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"> ${gearFaqs.map((faq) => renderTemplate`<article class="rounded-[24px] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/30"><h3 class="font-black text-slate-950 dark:text-white">${faq.question}</h3><p class="mt-3 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300">${faq.answer}</p></article>`)} </div> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/gear-library.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/gear-library.astro";
const $$url = "/tools/gear-library/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GearLibrary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
