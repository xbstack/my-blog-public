import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "\u5185\u5BB9\u8FD0\u8425\uFF1A\u4E2A\u4EBA\u7F51\u7AD9\u3001\u516C\u4F17\u53F7\u3001\u77E5\u4E4E\u6398\u91D1\u5206\u53D1\u4E0E\u6570\u636E\u590D\u76D8 - XBSTACK";
  const description = "XBSTACK \u5185\u5BB9\u8FD0\u8425\u4E13\u9898\uFF0C\u6574\u7406\u4E2A\u4EBA\u7F51\u7AD9\u3001\u516C\u4F17\u53F7\u3001\u77E5\u4E4E\u3001\u6398\u91D1\u3001UTM \u6765\u6E90\u8FFD\u8E2A\u3001\u6587\u7AE0\u5C01\u9762\u3001\u5185\u5BB9\u5BA1\u8BA1\u3001\u7AD9\u5185\u5185\u94FE\u548C Search Console \u6570\u636E\u590D\u76D8\u3002";
  const keywords = "\u5185\u5BB9\u8FD0\u8425, \u4E2A\u4EBA\u7F51\u7AD9\u8FD0\u8425, UTM \u6765\u6E90\u8FFD\u8E2A, \u77E5\u4E4E\u5206\u53D1, \u6398\u91D1\u5206\u53D1, Search Console, \u5185\u5BB9\u5BA1\u8BA1, \u5185\u94FE\u4F18\u5316, XBSTACK";
  const cards = [{ title: "Search Console CTR \u590D\u76D8", desc: "\u4ECE\u6709\u66DD\u5149\u6CA1\u70B9\u51FB\u7684\u95EE\u9898\u51FA\u53D1\uFF0C\u68C0\u67E5\u6807\u9898\u3001\u6458\u8981\u3001\u641C\u7D22\u610F\u56FE\u548C\u5165\u53E3\u627F\u63A5\u3002", href: "/ai/search-console-ctr-title-fix/" }, { title: "ChatGPT \u56FE\u7247\u5BFC\u5165 Astro", desc: "\u628A\u5C01\u9762\u751F\u6210\u3001\u5BFC\u5165\u3001\u6821\u9A8C\u548C frontmatter \u66F4\u65B0\u53D8\u6210\u81EA\u52A8\u5316\u6D41\u7A0B\u3002", href: "/ai/chatgpt-image-to-astro-cover-bridge/" }, { title: "\u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1", desc: "\u7528\u811A\u672C\u68C0\u67E5\u6587\u7AE0\u3001\u5185\u94FE\u3001\u56FE\u7247\u548C SEO \u57FA\u7840\u7ED3\u6784\u3002", href: "/ai/xbstack-content-quality-audit-builder-log/" }, { title: "XBSTACK Labs", desc: "\u89C4\u5212 UTM Builder\u3001Markdown SEO \u68C0\u67E5\u548C\u5185\u5BB9\u5DE5\u4F5C\u6D41\u5DE5\u5177\u3002", href: "/tools/labs/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u4E13\u9898\u4E3B\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "\u5185\u5BB9\u8FD0\u8425\u4E0D\u662F\u6BCF\u5929\u673A\u68B0\u53D1\u4E00\u7BC7\uFF0C\u800C\u662F\u628A\u9009\u9898\u3001\u751F\u4EA7\u3001\u5206\u53D1\u3001\u6765\u6E90\u8FFD\u8E2A\u548C\u6570\u636E\u590D\u76D8\u4E32\u6210\u7CFB\u7EDF\u3002" },
    { question: "\u548C XBSTACK \u4E3B\u7AD9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u662F XBSTACK \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\uFF0C\u4F1A\u548C AI Hub\u3001Tools\u3001Horizon\u3001Life \u7B49\u9875\u9762\u4E92\u76F8\u627F\u63A5\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\u3002\u8FD9\u4E2A\u4E13\u9898\u4F18\u5148\u8865\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u3001\u5DE5\u5177\u94FE\u3001\u8E29\u5751\u8BB0\u5F55\u548C\u4E0B\u4E00\u6B65\u9605\u8BFB\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u5806\u7A7A\u6CDB\u65B9\u6CD5\u8BBA\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/productivity/" class="text-sm font-bold text-blue-500">← 效率系统</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Content Workflow</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">内容运营</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">内容运营不是每天机械发一篇，而是把选题、生产、分发、来源追踪和数据复盘串成系统。</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <h2 class="text-xl font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">继续 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/content/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/content/index.astro";
const $$url = "/productivity/content/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
