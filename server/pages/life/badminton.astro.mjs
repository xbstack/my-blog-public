import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u8FD0\u52A8\u6062\u590D\uFF1A\u7FBD\u6BDB\u7403\u3001\u591C\u722C\u6062\u590D\u3001\u7761\u7720\u4E0E\u5F00\u53D1\u8005\u8EAB\u4F53\u72B6\u6001 - XBSTACK";
  const description = "XBSTACK \u8FD0\u52A8\u6062\u590D\u5165\u53E3\u8BB0\u5F55\u7FBD\u6BDB\u7403\u3001\u8D35\u9633\u591C\u722C\u3001\u7761\u7720\u6062\u590D\u3001\u4E45\u5750\u5BF9\u51B2\u548C\u5F00\u53D1\u8005\u957F\u671F\u8EAB\u4F53\u72B6\u6001\u7BA1\u7406\uFF0C\u8FDE\u63A5 Lunest \u7761\u7720\u6062\u590D App\u3001\u8D35\u5DDE\u6237\u5916\u8DEF\u7EBF\u3001\u8FD0\u52A8\u8BB0\u5F55\u548C\u771F\u5B9E\u6062\u590D\u53CD\u9988\u3002";
  const keywords = "\u8FD0\u52A8\u6062\u590D, \u7FBD\u6BDB\u7403, \u591C\u722C\u6062\u590D, \u7761\u7720\u6062\u590D, \u5F00\u53D1\u8005\u5065\u5EB7, \u8EAB\u4F53\u72B6\u6001, \u8D35\u9633\u8FD0\u52A8, Lunest, XBSTACK";
  const cards = [{ title: "\u7FBD\u6BDB\u7403", desc: "\u8282\u594F\u3001\u7206\u53D1\u3001\u79FB\u52A8\u3001\u80A9\u819D\u72B6\u6001\u548C\u5DE5\u4F5C\u65E5\u8FD0\u52A8\u9891\u7387\u3002", href: "/life/badminton/" }, { title: "\u7761\u7720\u6062\u590D", desc: "\u548C Lunest \u5F62\u6210\u95ED\u73AF\uFF0C\u628A\u7761\u7720\u8D28\u91CF\u653E\u8FDB\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u3002", href: "/tools/lunest/" }, { title: "\u6237\u5916\u751F\u6D3B", desc: "\u591C\u722C\u3001\u5F92\u6B65\u548C\u81EA\u9A7E\u63D0\u4F9B\u771F\u5B9E\u751F\u6D3B\u8F93\u5165\u3002", href: "/life/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u9875\u9762\u4E3B\u8981\u8BB0\u5F55\u4EC0\u4E48\uFF1F", answer: "\u7FBD\u6BDB\u7403\u3001\u591C\u722C\u548C\u7761\u7720\u4E0D\u662F\u5B64\u7ACB\u7231\u597D\uFF0C\u5B83\u4EEC\u5171\u540C\u51B3\u5B9A\u4E00\u4E2A\u5F00\u53D1\u8005\u80FD\u4E0D\u80FD\u957F\u671F\u7A33\u5B9A\u8F93\u51FA\u3002" },
    { question: "\u548C XBSTACK \u7684 AI \u6280\u672F\u5185\u5BB9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u63D0\u4F9B\u771F\u5B9E\u751F\u6D3B\u8F93\u5165\uFF0C\u7528\u8EAB\u4F53\u3001\u8DEF\u7EBF\u3001\u5929\u6C14\u3001\u88C5\u5907\u548C\u6062\u590D\u72B6\u6001\u6821\u51C6\u957F\u671F\u5224\u65AD\uFF0C\u800C\u4E0D\u662F\u4E3A\u4E86\u88C5\u9970\u4EBA\u8BBE\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\uFF0C\u540E\u7EED\u4F1A\u6839\u636E\u771F\u5B9E\u8DEF\u7EBF\u3001\u8FD0\u52A8\u8BB0\u5F55\u3001\u6062\u590D\u6570\u636E\u548C\u6237\u5916\u4F53\u9A8C\u7EE7\u7EED\u8865\u5145\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 text-slate-900 dark:text-white"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/life/" class="text-sm font-bold text-blue-500">← 户外生活</a> <header class="mt-10 mb-14 max-w-4xl"> <p class="text-xs font-black uppercase tracking-[0.35em] text-blue-500 mb-5">Life System</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight italic">运动恢复</h1> <p class="mt-8 text-xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">羽毛球、夜爬和睡眠不是孤立爱好，它们共同决定一个开发者能不能长期稳定输出。</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[30px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <h2 class="text-2xl font-black mb-4">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/badminton/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/badminton/index.astro";
const $$url = "/life/badminton/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
