import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_pMHxHuJm.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
import { g as getCollection } from '../chunks/_astro_content_DQag2m34.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const newsletters = (await getCollection(
    "newsletter",
    ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex" && data.translationStatus !== "machine"
  )).sort((a, b) => (b.data.issueNumber || 0) - (a.data.issueNumber || 0));
  const latestIssue = newsletters[0];
  const title = "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5\uFF1A\u771F\u5B9E\u5B9E\u9A8C\u3001\u6545\u969C\u4E0E\u751F\u4EA7\u5B9E\u8DF5";
  const description = "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5\u4E0D\u662F\u65B0\u95FB\u6458\u8981\uFF0C\u800C\u662F\u9762\u5411 AI \u5F00\u53D1\u8005\u7684\u751F\u4EA7\u5B9E\u8DF5\u8BB0\u5F55\uFF1A\u6846\u67B6\u4E0E API \u53D8\u5316\u3001\u771F\u5B9E\u6545\u969C\u3001\u53EF\u590D\u73B0\u5B9E\u9A8C\u3001\u5DE5\u5177\u8BC4\u4F30\u548C XBSTACK \u9879\u76EE\u8FDB\u5C55\u3002";
  const keywords = "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5, AI Engineering Weekly, AI \u5F00\u53D1\u8005\u5468\u62A5, AI Agent, MCP, LangGraph, AI SDK, Tool Calling, RAG, Agent Reliability";
  const sections = [
    {
      index: "01",
      title: "What changed",
      zh: "\u53D1\u751F\u4E86\u4EC0\u4E48\u53D8\u5316",
      desc: "\u53EA\u6574\u7406\u4F1A\u5F71\u54CD\u5F00\u53D1\u3001\u8FC1\u79FB\u6216\u751F\u4EA7\u51B3\u7B56\u7684\u6A21\u578B\u3001API\u3001\u6846\u67B6\u4E0E\u534F\u8BAE\u53D8\u5316\uFF0C\u4E0D\u505A\u53D1\u5E03\u4F1A\u590D\u8FF0\u3002"
    },
    {
      index: "02",
      title: "What broke",
      zh: "\u54EA\u91CC\u771F\u7684\u574F\u4E86",
      desc: "\u8BB0\u5F55 Tool Call\u3001MCP\u3001Agent\u3001RAG\u3001\u90E8\u7F72\u548C\u6570\u636E\u94FE\u8DEF\u4E2D\u7684\u771F\u5B9E Bug\u3001\u5931\u8D25\u6761\u4EF6\u4E0E\u4FEE\u590D\u8BC1\u636E\u3002"
    },
    {
      index: "03",
      title: "What I tested",
      zh: "\u672C\u5468\u4EB2\u81EA\u9A8C\u8BC1\u4E86\u4EC0\u4E48",
      desc: "\u516C\u5F00 AI SDK\u3001LangGraph\u3001n8n \u4E0E Agent \u5DE5\u7A0B\u5B9E\u9A8C\u7684\u4EE3\u7801\u3001\u7ED3\u679C\u3001\u8FB9\u754C\u548C\u53EF\u590D\u73B0\u547D\u4EE4\u3002"
    },
    {
      index: "04",
      title: "Tools worth trying",
      zh: "\u503C\u5F97\u8BD5\u7528\u7684\u5DE5\u5177",
      desc: "\u57FA\u4E8E\u5B9E\u9645\u5DE5\u4F5C\u6D41\u7B5B\u9009\u5F00\u53D1\u5DE5\u5177\uFF0C\u8BF4\u660E\u9002\u7528\u573A\u666F\u3001\u9650\u5236\u3001\u6210\u672C\u548C\u662F\u5426\u503C\u5F97\u8FDB\u5165\u751F\u4EA7\u73AF\u5883\u3002"
    },
    {
      index: "05",
      title: "XBSTACK updates",
      zh: "XBSTACK \u66F4\u65B0",
      desc: "\u540C\u6B65\u6DF1\u5EA6\u6587\u7AE0\u3001GitHub \u5B9E\u9A8C\u4ED3\u5E93\u3001\u5F00\u53D1\u5DE5\u5177\u548C\u4E0B\u4E00\u8F6E\u53EF\u9A8C\u8BC1\u7684\u5DE5\u7A0B\u4EFB\u52A1\u3002"
    }
  ];
  const newsletterFaqs = [
    {
      question: "\u8FD9\u662F\u4E00\u4EFD AI \u65B0\u95FB\u5468\u62A5\u5417\uFF1F",
      answer: "\u4E0D\u662F\u3002\u5B83\u4E0D\u4F1A\u6309\u6570\u91CF\u6C47\u603B\u4E00\u5468\u65B0\u95FB\uFF0C\u53EA\u4FDD\u7559\u4F1A\u6539\u53D8\u5DE5\u7A0B\u51B3\u7B56\u7684\u53D8\u5316\uFF0C\u5E76\u8865\u5145\u771F\u5B9E\u5B9E\u9A8C\u3001\u5931\u8D25\u6761\u4EF6\u548C\u751F\u4EA7\u5EFA\u8BAE\u3002"
    },
    {
      question: "\u9002\u5408\u54EA\u4E9B\u8BFB\u8005\uFF1F",
      answer: "\u9002\u5408\u6B63\u5728\u5F00\u53D1 AI Agent\u3001MCP\u3001LangGraph\u3001RAG\u3001Tool Calling\u3001\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\u6216 AI \u5E94\u7528\u7684\u5F00\u53D1\u8005\u548C\u72EC\u7ACB\u5F00\u53D1\u8005\u3002"
    },
    {
      question: "\u591A\u4E45\u53D1\u9001\u4E00\u6B21\uFF1F",
      answer: "\u76EE\u6807\u662F\u6309\u5468\u53D1\u9001\uFF1B\u6CA1\u6709\u5B8C\u6210\u53EF\u9A8C\u8BC1\u5B9E\u9A8C\u6216\u6CA1\u6709\u503C\u5F97\u4FDD\u5B58\u7684\u751F\u4EA7\u7ED3\u8BBA\u65F6\uFF0C\u4E0D\u4F1A\u4E3A\u4E86\u9891\u7387\u62FC\u51D1\u5185\u5BB9\u3002"
    },
    {
      question: "\u6BCF\u671F\u662F\u5426\u63D0\u4F9B\u4EE3\u7801\u548C\u539F\u59CB\u8BC1\u636E\uFF1F",
      answer: "\u6D89\u53CA XBSTACK \u81EA\u6709\u5B9E\u9A8C\u65F6\uFF0C\u4F1A\u4F18\u5148\u94FE\u63A5 GitHub \u4ED3\u5E93\u3001\u6D4B\u8BD5\u547D\u4EE4\u3001\u539F\u59CB\u7ED3\u679C\u3001\u67B6\u6784\u8BF4\u660E\u548C\u5BF9\u5E94\u6DF1\u5EA6\u6587\u7AE0\u3002"
    },
    {
      question: "\u4F1A\u901A\u8FC7\u5FAE\u4FE1\u516C\u4F17\u53F7\u5206\u53D1\u5417\uFF1F",
      answer: "\u4E0D\u4F1A\u3002\u6280\u672F\u5185\u5BB9\u7684\u56FA\u5B9A\u5206\u53D1\u94FE\u8DEF\u662F XBSTACK\u3001GitHub\u3001Newsletter\uFF0C\u4EE5\u53CA\u77E5\u4E4E\u3001\u6398\u91D1\u3001CSDN\u3001DEV\u3001Hashnode\u3001HackerNoon \u548C LinkedIn \u7B49\u5F00\u53D1\u8005\u5E73\u53F0\u3002"
    }
  ];
  const newsletterSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5",
      description,
      url: "https://www.xbstack.com/newsletter/",
      inLanguage: "zh-CN",
      author: {
        "@type": "Person",
        name: "\u5C0F\u767D",
        url: "https://www.xbstack.com/about/"
      },
      about: ["AI Engineering", "AI Agents", "MCP", "LangGraph", "AI SDK", "Tool Calling"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: newsletterFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "SubscribeAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://buttondown.email/api/emails/embed-subscribe/xbstack",
        actionPlatform: "https://schema.org/DesktopWebPlatform"
      },
      result: {
        "@type": "Message",
        description: "Subscribe to XBSTACK AI Engineering Weekly."
      }
    }
  ];
  const geoConfig = {
    geo_summary: "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5\u662F\u4E00\u4EFD\u9762\u5411 AI \u5F00\u53D1\u8005\u7684\u751F\u4EA7\u5B9E\u8DF5 Newsletter\uFF0C\u4E0D\u505A\u65B0\u95FB\u6458\u8981\uFF0C\u56FA\u5B9A\u5305\u542B What changed\u3001What broke\u3001What I tested\u3001Tools worth trying \u548C XBSTACK updates\uFF0C\u5E76\u7528 GitHub \u4ED3\u5E93\u3001\u539F\u59CB\u5B9E\u9A8C\u4E0E\u6DF1\u5EA6\u6587\u7AE0\u652F\u6491\u7ED3\u8BBA\u3002",
    geo_questions: [
      "What is XBSTACK AI Engineering Weekly?",
      "Is XBSTACK AI Engineering Weekly a news digest?",
      "What does XBSTACK test each week?",
      "Does XBSTACK publish AI SDK and Agent experiments?",
      "Where can developers find XBSTACK source code?"
    ],
    geo_entities: [
      "XBSTACK AI Engineering Weekly",
      "XBSTACK AI \u5DE5\u7A0B\u5468\u62A5",
      "AI Engineering",
      "AI Agents",
      "Vercel AI SDK",
      "MCP",
      "LangGraph",
      "Tool Calling",
      "Agent Reliability"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": newsletterSchema }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": geoConfig.geo_summary, "questions": geoConfig.geo_questions, "entities": geoConfig.geo_entities })} ${maybeRenderHead()}<main class="container mx-auto px-4 py-12 lg:py-24 max-w-5xl min-h-screen"> <header class="mb-14 text-center animate-fadeUp"> <p class="text-[11px] font-black uppercase tracking-[0.34em] text-orange-500 mb-5">XBSTACK / AI ENGINEERING WEEKLY</p> <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-950 dark:text-white">
XBSTACK AI 工程周报
</h1> <p class="text-xl md:text-2xl font-black text-slate-700 dark:text-slate-200 mb-5">
不是新闻摘要，而是 AI 开发者生产实践总结。
</p> <p class="text-base text-slate-500 dark:text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed">
每期只保留会影响工程决策的变化、真实故障、可复现实验、值得试用的工具和 XBSTACK 项目进展。
</p> <div class="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black tracking-wider text-slate-500"> <span class="w-2 h-2 rounded-full bg-green-500"></span>
目标周更 · 没有有效结论时不凑数
</div> </header> <section data-theme-surface="adaptive-newsletter-structure" class="mb-16 p-7 md:p-10 rounded-[36px] bg-orange-50/70 text-slate-950 border border-orange-200 shadow-sm animate-fadeUp dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400 mb-3">One issue / Five evidence blocks</p> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white">每期固定五个部分</h2> </div> <p class="text-sm font-bold text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
从变化到故障、从实验到工具，再回到实际项目，避免把技术周报写成链接堆积。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${sections.map((item, index) => renderTemplate`<article${addAttribute([
    "p-6 rounded-[26px] bg-white border border-orange-100 dark:bg-white/[0.06] dark:border-white/10",
    index === sections.length - 1 && "md:col-span-2"
  ], "class:list")}> <div class="flex items-center gap-3 mb-4"> <span class="text-[10px] font-black text-orange-600 dark:text-orange-400 tracking-widest">${item.index}</span> <h3 class="text-lg font-black text-slate-950 dark:text-white">${item.title}</h3> <span class="text-xs font-bold text-slate-500 dark:text-slate-400">/ ${item.zh}</span> </div> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </article>`)} </div> </section> <section class="mb-16 p-8 md:p-12 rounded-[42px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-center relative overflow-hidden animate-fadeUp"> <div class="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Subscribe</p> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-4">把真实工程结论送到邮箱</h2> <p class="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 font-bold max-w-2xl mx-auto leading-relaxed">
不追热点数量，不发送投资和户外内容；只分发 AI 工程变化、故障、实验、工具与项目更新。
</p> <form action="https://buttondown.email/api/emails/embed-subscribe/xbstack" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/xbstack', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10"> <input type="email" name="email" id="bd-email" required placeholder="name@example.com" class="flex-1 px-6 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm shadow-inner"> <button type="submit" class="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-md">
订阅 / Subscribe
</button> </form> <p class="text-[10px] text-slate-400 mt-6 font-mono tracking-wider">随时退订 · 不出售邮箱 · 不发送无关推广</p> </section> ${latestIssue && renderTemplate`<section class="mb-16 p-8 rounded-[36px] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/30 animate-fadeUp"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Latest published issue</p> <h2 class="text-2xl md:text-3xl font-black text-slate-950 dark:text-white mb-4">${latestIssue.data.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400 mb-6">${latestIssue.data.description}</p> <a${addAttribute(latestIssue.data.route || `/newsletter/${latestIssue.id}/`, "href")} class="inline-flex px-6 py-3 rounded-full bg-orange-500 text-white text-xs font-black tracking-widest hover:bg-orange-600 transition-colors">
阅读最近一期 →
</a> </section>`} <section id="faq" class="mb-16 animate-fadeUp"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">订阅前先确认定位</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${newsletterFaqs.map((faq, index) => renderTemplate`<article${addAttribute([
    "p-6 rounded-[26px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10",
    index === newsletterFaqs.length - 1 && "md:col-span-2"
  ], "class:list")}> <h3 class="text-base font-black text-slate-900 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <section id="historical-issues" class="scroll-mt-28"> <div class="flex items-end justify-between gap-4 mb-8"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Archive</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white">历史期刊</h2> </div> <a href="/en/newsletter/" class="text-xs font-black text-slate-500 hover:text-orange-500 transition-colors">English edition →</a> </div> <div class="space-y-8"> ${newsletters.length > 0 ? newsletters.map((post, index) => renderTemplate`<div class="animate-fadeUp"${addAttribute(`animation-delay: ${index * 80}ms`, "style")}> ${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })} </div>`) : renderTemplate`<div class="text-center py-20 rounded-[32px] border border-dashed border-slate-300 dark:border-white/15 text-slate-400 font-bold">
新定位下的第一期正在准备中。
</div>`} </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/newsletter/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/newsletter/index.astro";
const $$url = "/newsletter/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
