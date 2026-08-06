import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Local AI\uFF1A\u672C\u5730\u6A21\u578B\u3001\u79C1\u6709\u77E5\u8BC6\u5E93\u3001RAG \u4E0E\u4E2A\u4EBA\u6570\u636E\u5904\u7406 - XBSTACK";
  const description = "XBSTACK Local AI \u4E13\u9898\uFF0C\u6574\u7406\u672C\u5730\u6A21\u578B\u3001\u79C1\u6709\u77E5\u8BC6\u5E93\u3001RAG\u3001NAS \u6570\u636E\u3001\u79BB\u7EBF\u8D44\u6599\u5904\u7406\u548C\u4E2A\u4EBA\u5DE5\u4F5C\u6D41\uFF0C\u5173\u6CE8\u6570\u636E\u4E3B\u6743\u3001\u9690\u79C1\u548C\u53EF\u7EF4\u62A4\u7684\u672C\u5730 AI \u80FD\u529B\u3002";
  const keywords = "Local AI, \u672C\u5730AI, \u672C\u5730\u6A21\u578B, \u79C1\u6709\u77E5\u8BC6\u5E93, RAG, NAS \u6570\u636E, \u79BB\u7EBF\u8D44\u6599\u5904\u7406, \u4E2A\u4EBA AI \u5DE5\u4F5C\u6D41, XBSTACK";
  const cards = [{ title: "NAS \u79C1\u6709\u4E91", desc: "\u5148\u89E3\u51B3\u6570\u636E\u5B58\u50A8\u3001\u5907\u4EFD\u548C\u8FDC\u7A0B\u8BBF\u95EE\uFF0C\u518D\u8C08\u672C\u5730 AI\u3002", href: "/productivity/nas/" }, { title: "AI Hub", desc: "MCP\u3001Agent\u3001LangGraph \u548C n8n \u662F AI \u5DE5\u7A0B\u5316\u4E3B\u7EBF\u3002", href: "/ai/" }, { title: "\u7B14\u8BB0\u8D44\u6599", desc: "\u672C\u5730 AI \u7684\u8F93\u5165\u8D28\u91CF\u53D6\u51B3\u4E8E\u8D44\u6599\u6574\u7406\u548C\u77E5\u8BC6\u5E93\u7ED3\u6784\u3002", href: "/productivity/notes/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u4E13\u9898\u4E3B\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "\u672C\u5730 AI \u7684\u4EF7\u503C\u4E0D\u662F\u79BB\u7EBF\u70AB\u6280\uFF0C\u800C\u662F\u8BA9\u79C1\u6709\u8D44\u6599\u3001NAS \u6570\u636E\u548C\u4E2A\u4EBA\u77E5\u8BC6\u5E93\u8FDB\u5165\u53EF\u63A7\u5DE5\u4F5C\u6D41\u3002" },
    { question: "\u548C XBSTACK \u4E3B\u7AD9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u662F XBSTACK \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\uFF0C\u4F1A\u548C AI Hub\u3001Tools\u3001Horizon\u3001Life \u7B49\u9875\u9762\u4E92\u76F8\u627F\u63A5\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\u3002\u8FD9\u4E2A\u4E13\u9898\u4F18\u5148\u8865\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u3001\u5DE5\u5177\u94FE\u3001\u8E29\u5751\u8BB0\u5F55\u548C\u4E0B\u4E00\u6B65\u9605\u8BFB\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u5806\u7A7A\u6CDB\u65B9\u6CD5\u8BBA\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/productivity/" class="text-sm font-bold text-blue-500">← 效率系统</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Local AI</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">本地AI</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">本地 AI 的价值不是离线炫技，而是让私有资料、NAS 数据和个人知识库进入可控工作流。</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <h2 class="text-xl font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">继续 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/local-ai/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/local-ai/index.astro";
const $$url = "/productivity/local-ai/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
