import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u81EA\u52A8\u5316\u7CFB\u7EDF\uFF1An8n\u3001Webhook\u3001\u811A\u672C\u4E0E\u5185\u5BB9\u5DE5\u4F5C\u6D41\u81EA\u52A8\u5316 - XBSTACK";
  const description = "XBSTACK \u81EA\u52A8\u5316\u7CFB\u7EDF\u4E13\u9898\uFF0C\u6574\u7406 n8n\u3001Webhook\u3001\u811A\u672C\u3001\u5B9A\u65F6\u4EFB\u52A1\u3001\u5185\u5BB9\u53D1\u5E03\u3001\u6570\u636E\u56DE\u6D41\u548C\u9519\u8BEF\u6062\u590D\uFF0C\u76EE\u6807\u662F\u628A\u91CD\u590D\u5DE5\u4F5C\u53D8\u6210\u53EF\u7EF4\u62A4\u3001\u53EF\u5BA1\u8BA1\u3001\u53EF\u6062\u590D\u7684\u6D41\u7A0B\u3002";
  const keywords = "\u81EA\u52A8\u5316\u7CFB\u7EDF, n8n, Webhook, \u5DE5\u4F5C\u6D41\u81EA\u52A8\u5316, \u5185\u5BB9\u81EA\u52A8\u5316, \u811A\u672C\u81EA\u52A8\u5316, \u9519\u8BEF\u6062\u590D, \u6570\u636E\u56DE\u6D41, XBSTACK";
  const cards = [{ title: "n8n AI Starter Kit", desc: "\u4ECE Gmail\u3001Slack\u3001Notion \u5230\u81EA\u6258\u7BA1\u3001Queue Mode \u548C Webhook Hardening\u3002", href: "/ai/n8n-ai-starter-kit/" }, { title: "Webhook Hardening", desc: "\u516C\u7F51\u5165\u53E3\u5FC5\u987B\u5904\u7406\u7B7E\u540D\u3001\u5E42\u7B49\u3001\u9650\u6D41\u548C\u9519\u8BEF\u8FD4\u56DE\u3002", href: "/ai/n8n-webhook-production-hardening/" }, { title: "\u5185\u5BB9\u5DE5\u4F5C\u6D41", desc: "\u628A\u6587\u7AE0\u3001\u5C01\u9762\u3001UTM\u3001\u5206\u53D1\u548C\u590D\u76D8\u4E32\u6210\u95ED\u73AF\u3002", href: "/productivity/content/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u4E13\u9898\u4E3B\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "\u81EA\u52A8\u5316\u4E0D\u662F\u5C11\u70B9\u51E0\u4E0B\u9F20\u6807\uFF0C\u800C\u662F\u628A\u89E6\u53D1\u3001\u6267\u884C\u3001\u5931\u8D25\u6062\u590D\u548C\u6570\u636E\u56DE\u6D41\u505A\u6210\u7A33\u5B9A\u6D41\u7A0B\u3002" },
    { question: "\u548C XBSTACK \u4E3B\u7AD9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u662F XBSTACK \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\uFF0C\u4F1A\u548C AI Hub\u3001Tools\u3001Horizon\u3001Life \u7B49\u9875\u9762\u4E92\u76F8\u627F\u63A5\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\u3002\u8FD9\u4E2A\u4E13\u9898\u4F18\u5148\u8865\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u3001\u5DE5\u5177\u94FE\u3001\u8E29\u5751\u8BB0\u5F55\u548C\u4E0B\u4E00\u6B65\u9605\u8BFB\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u5806\u7A7A\u6CDB\u65B9\u6CD5\u8BBA\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/productivity/" class="text-sm font-bold text-blue-500">← 效率系统</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Automation System</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">自动化系统</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">自动化不是少点几下鼠标，而是把触发、执行、失败恢复和数据回流做成稳定流程。</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <h2 class="text-xl font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">继续 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/automation/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/automation/index.astro";
const $$url = "/productivity/automation/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
