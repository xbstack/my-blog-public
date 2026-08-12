import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u8D35\u5DDE\u81EA\u9A7E\u8BB0\u5F55\uFF1A\u8D35\u9633\u5468\u8FB9\u8DEF\u7EBF\u3001\u4E24\u5929\u4E00\u591C\u548C\u6237\u5916\u751F\u6D3B - XBSTACK";
  const description = "XBSTACK \u81EA\u9A7E\u8BB0\u5F55\u5165\u53E3\u6574\u7406\u8D35\u9633\u5468\u8FB9\u3001\u8D35\u5DDE\u4E24\u5929\u4E00\u591C\u3001\u8349\u539F\u3001\u5CE1\u8C37\u3001\u6F02\u6D41\u3001\u8DEF\u7EBF\u6210\u672C\u3001\u88C5\u5907\u51C6\u5907\u3001\u505C\u8F66\u8865\u7ED9\u548C\u771F\u5B9E\u51FA\u884C\u590D\u76D8\uFF0C\u548C\u8D35\u5DDE\u5F92\u6B65\u3001\u88C5\u5907\u6444\u5F71\u3001\u6237\u5916\u751F\u6D3B\u4E3B\u7EBF\u4E92\u76F8\u8FDE\u63A5\u3002";
  const keywords = "\u8D35\u5DDE\u81EA\u9A7E, \u8D35\u9633\u5468\u8FB9\u81EA\u9A7E, \u4E24\u5929\u4E00\u591C, \u6237\u5916\u8DEF\u7EBF, \u8D35\u5DDE\u65C5\u884C, \u81EA\u9A7E\u8BB0\u5F55, \u8DEF\u7EBF\u590D\u76D8, XBSTACK";
  const cards = [{ title: "\u8D35\u5DDE\u5F92\u6B65", desc: "\u5F92\u6B65\u8DEF\u7EBF\u548C\u81EA\u9A7E\u7ECF\u5E38\u4E92\u76F8\u8865\u5145\uFF0C\u5148\u770B Hiking \u4E3B\u7EBF\u3002", href: "/life/hiking/" }, { title: "\u88C5\u5907\u51C6\u5907", desc: "\u81EA\u9A7E\u548C\u6237\u5916\u90FD\u79BB\u4E0D\u5F00\u88C5\u5907\u3001\u6444\u5F71\u548C\u5E94\u6025\u5DE5\u5177\u3002", href: "/life/gear/" }, { title: "\u6237\u5916\u751F\u6D3B", desc: "\u56DE\u5230 Life \u5165\u53E3\uFF0C\u770B\u5B8C\u6574\u6237\u5916\u4EBA\u683C\u4E3B\u7EBF\u3002", href: "/life/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u9875\u9762\u4E3B\u8981\u8BB0\u5F55\u4EC0\u4E48\uFF1F", answer: "\u81EA\u9A7E\u4E0D\u662F\u5355\u7EAF\u6253\u5361\uFF0C\u800C\u662F\u628A\u8DEF\u7EBF\u3001\u5929\u6C14\u3001\u88C5\u5907\u3001\u65F6\u95F4\u6210\u672C\u548C\u771F\u5B9E\u4F53\u9A8C\u8BB0\u5F55\u4E0B\u6765\u3002" },
    { question: "\u548C XBSTACK \u7684 AI \u6280\u672F\u5185\u5BB9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u63D0\u4F9B\u771F\u5B9E\u751F\u6D3B\u8F93\u5165\uFF0C\u7528\u8EAB\u4F53\u3001\u8DEF\u7EBF\u3001\u5929\u6C14\u3001\u88C5\u5907\u548C\u6062\u590D\u72B6\u6001\u6821\u51C6\u957F\u671F\u5224\u65AD\uFF0C\u800C\u4E0D\u662F\u4E3A\u4E86\u88C5\u9970\u4EBA\u8BBE\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\uFF0C\u540E\u7EED\u4F1A\u6839\u636E\u771F\u5B9E\u8DEF\u7EBF\u3001\u8FD0\u52A8\u8BB0\u5F55\u3001\u6062\u590D\u6570\u636E\u548C\u6237\u5916\u4F53\u9A8C\u7EE7\u7EED\u8865\u5145\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 text-slate-900 dark:text-white"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/life/" class="text-sm font-bold text-blue-500">← 户外生活</a> <header class="mt-10 mb-14 max-w-4xl"> <p class="text-xs font-black uppercase tracking-[0.35em] text-blue-500 mb-5">Life System</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight italic">自驾记录</h1> <p class="mt-8 text-xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">自驾不是单纯打卡，而是把路线、天气、装备、时间成本和真实体验记录下来。</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[30px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <h2 class="text-2xl font-black mb-4">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/road-trip/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/road-trip/index.astro";
const $$url = "/life/road-trip/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
