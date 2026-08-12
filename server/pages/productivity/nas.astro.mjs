import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "NAS \u79C1\u6709\u4E91\uFF1A\u8D44\u6599\u5907\u4EFD\u3001Docker \u670D\u52A1\u3001\u8FDC\u7A0B\u8BBF\u95EE\u4E0E\u4E2A\u4EBA\u6570\u636E\u5E95\u5EA7 - XBSTACK";
  const description = "XBSTACK NAS \u79C1\u6709\u4E91\u4E13\u9898\uFF0C\u6574\u7406 NAS \u8D44\u6599\u5907\u4EFD\u3001Docker \u670D\u52A1\u3001\u8FDC\u7A0B\u8BBF\u95EE\u3001\u5BB6\u5EAD\u6570\u636E\u4E2D\u5FC3\u3001\u672C\u5730 AI\u3001\u5185\u5BB9\u7CFB\u7EDF\u548C\u4E2A\u4EBA\u6570\u5B57\u8D44\u4EA7\u5E95\u5EA7\u3002";
  const keywords = "NAS\u79C1\u6709\u4E91, NAS \u5907\u4EFD, Docker NAS, \u5BB6\u5EAD\u6570\u636E\u4E2D\u5FC3, \u8FDC\u7A0B\u8BBF\u95EE, Tailscale, Cloudflare Tunnel, \u672C\u5730AI, XBSTACK";
  const cards = [{ title: "\u8D44\u6599\u5907\u4EFD", desc: "\u7167\u7247\u3001\u6587\u6863\u3001\u4EE3\u7801\u3001\u6587\u7AE0\u7D20\u6750\u548C\u957F\u671F\u8D44\u6599\u5FC5\u987B\u53EF\u5907\u4EFD\u3001\u53EF\u6062\u590D\u3002", href: "/productivity/notes/" }, { title: "Docker \u670D\u52A1", desc: "\u628A\u5185\u5BB9\u540E\u53F0\u3001\u81EA\u52A8\u5316\u3001\u6570\u636E\u5E93\u548C\u672C\u5730\u5DE5\u5177\u8DD1\u5728\u81EA\u5DF1\u7684\u57FA\u7840\u8BBE\u65BD\u4E0A\u3002", href: "/productivity/automation/" }, { title: "\u6237\u5916\u548C\u88C5\u5907", desc: "\u6570\u5B57\u8D44\u4EA7\u6709 NAS\uFF0C\u7269\u7406\u4E16\u754C\u4E5F\u9700\u8981\u53EF\u9760\u88C5\u5907\u548C\u8DEF\u7EBF\u7CFB\u7EDF\u3002", href: "/life/gear/" }];
  const faqs = [
    { question: "\u8FD9\u4E2A\u4E13\u9898\u4E3B\u8981\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", answer: "NAS \u4E0D\u662F\u786C\u4EF6\u70AB\u6280\uFF0C\u800C\u662F\u4E2A\u4EBA\u8D44\u6599\u3001\u81EA\u52A8\u5316\u670D\u52A1\u3001\u672C\u5730 AI \u548C\u5185\u5BB9\u7CFB\u7EDF\u7684\u957F\u671F\u7269\u7406\u5E95\u5EA7\u3002" },
    { question: "\u548C XBSTACK \u4E3B\u7AD9\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F", answer: "\u5B83\u662F XBSTACK \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\uFF0C\u4F1A\u548C AI Hub\u3001Tools\u3001Horizon\u3001Life \u7B49\u9875\u9762\u4E92\u76F8\u627F\u63A5\u3002" },
    { question: "\u540E\u7EED\u4F1A\u7EE7\u7EED\u66F4\u65B0\u5417\uFF1F", answer: "\u4F1A\u3002\u8FD9\u4E2A\u4E13\u9898\u4F18\u5148\u8865\u771F\u5B9E\u4F7F\u7528\u573A\u666F\u3001\u5DE5\u5177\u94FE\u3001\u8E29\u5751\u8BB0\u5F55\u548C\u4E0B\u4E00\u6B65\u9605\u8BFB\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u5806\u7A7A\u6CDB\u65B9\u6CD5\u8BBA\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-6xl"> <a href="/productivity/" class="text-sm font-bold text-blue-500">← 效率系统</a> <header class="mt-8 mb-14 max-w-4xl"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">NAS Private Cloud</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white">NAS私有云</h1> <p class="mt-6 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">NAS 不是硬件炫技，而是个人资料、自动化服务、本地 AI 和内容系统的长期物理底座。</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"> ${cards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.035] hover:border-blue-500/50 transition-colors block"> <h2 class="text-xl font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">继续 →</div> </a>`)} </section> <section id="faq" class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/nas/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/productivity/nas/index.astro";
const $$url = "/productivity/nas/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
