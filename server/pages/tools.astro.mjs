import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "\u514D\u8D39\u5728\u7EBF\u5DE5\u5177\uFF1A\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\u3001AI \u8D22\u62A5\u5206\u6790\u3001\u590D\u5229\u8BA1\u7B97\u5668\u4E0E UTM Builder";
  const description = "XBSTACK \u514D\u8D39\u5728\u7EBF\u5DE5\u5177\u5305\u542B\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\u4F20\u7EDF\u73A9\u5177\u4E92\u52A8\u6E38\u620F\u3001\u7231\u8D22\u62A5 AI \u80A1\u7968\u8D22\u52A1\u5206\u6790\u3001\u590D\u5229\u4E0E\u5B9A\u6295\u8BA1\u7B97\u5668\u548C UTM \u94FE\u63A5\u751F\u6210\u5668\u3002\u65E0\u9700\u6CE8\u518C\u5373\u53EF\u6E38\u73A9\u3001\u5206\u6790\u3001\u6D4B\u7B97\u6216\u751F\u6210\u7ED3\u679C\u3002";
  const keywords = "\u514D\u8D39\u5728\u7EBF\u5DE5\u5177, \u7AE5\u73A9\u5B9E\u9A8C\u5BA4, \u7AF9\u77E5\u4E86\u7F51\u9875\u7248, AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177, \u80A1\u7968\u8D22\u52A1\u5206\u6790, \u590D\u5229\u8BA1\u7B97\u5668, Compound Calculator, UTM \u94FE\u63A5\u751F\u6210\u5668, UTM Builder, XBSTACK Tools";
  const sections = [
    {
      id: "more-tools",
      name: "\u66F4\u591A\u5DE5\u5177\u4E0E\u8D44\u4EA7",
      subtitle: "More Tools",
      intro: "\u89E3\u51B3\u6237\u5916\u6E05\u5355\u3001NAS \u914D\u7F6E\u548C AI \u5F00\u53D1\u8D44\u4EA7\u590D\u7528\u95EE\u9898\u3002",
      items: [
        {
          title: "\u6237\u5916\u88C5\u5907\u6E05\u5355\u4E0E NAS \u914D\u7F6E\u68C0\u67E5",
          desc: "\u6309\u884C\u7A0B\u6761\u4EF6\u751F\u6210\u88C5\u5907\u6E05\u5355\uFF0C\u68C0\u67E5 UPS\u3001\u5FEB\u7167\u548C\u5F02\u5730\u5907\u4EFD\uFF0C\u5E76\u6D4F\u89C8\u5E26\u63A8\u5E7F\u62AB\u9732\u7684\u88C5\u5907\u53C2\u8003\u3002",
          href: "/tools/gear-library/",
          status: "Live",
          tag: "Checklist Tools"
        },
        {
          title: "AI \u5F00\u53D1\u4E0E\u8FD0\u8425\u6A21\u677F\u5E93",
          desc: "\u9884\u89C8\u3001\u590D\u5236\u548C\u4E0B\u8F7D 6 \u4E2A MCP\u3001n8n\u3001LangGraph\u3001\u8D22\u62A5 Schema \u4E0E\u5185\u5BB9\u8FD0\u8425\u8D44\u4EA7\u3002",
          href: "/tools/templates/",
          status: "Live",
          tag: "Templates"
        }
      ]
    },
    {
      id: "apps",
      name: "\u72EC\u7ACB\u4EA7\u54C1",
      subtitle: "Mobile Product",
      intro: "\u5355\u72EC\u5C55\u793A\u771F\u5B9E\u5F00\u53D1\u72B6\u6001\uFF0C\u4E0D\u628A\u539F\u578B\u548C\u89C4\u5212\u5199\u6210\u5DF2\u53D1\u5E03\u529F\u80FD\u3002",
      items: [
        {
          title: "Lunest",
          desc: "\u7761\u7720\u6062\u590D App \u7684\u5F00\u53D1\u72B6\u6001\u3001\u539F\u578B\u622A\u56FE\u3001\u5DF2\u77E5\u95EE\u9898\u548C\u65E9\u671F\u6D4B\u8BD5\u540D\u5355\uFF1B\u5F53\u524D\u6CA1\u6709\u516C\u5F00\u4E0B\u8F7D\u7248\u3002",
          href: "/tools/lunest/",
          status: "Building",
          tag: "Sleep Recovery App"
        }
      ]
    },
    {
      id: "labs",
      name: "\u7814\u53D1\u4E0E\u5B75\u5316",
      subtitle: "Labs",
      intro: "noindex \u7684\u5185\u90E8\u4EA7\u54C1\u76EE\u5F55\u548C\u7814\u53D1\u8BB0\u5F55\uFF0C\u4E0D\u627F\u62C5\u641C\u7D22\u6D41\u91CF\u3002",
      items: [
        {
          title: "\u5E94\u7528\u4EA7\u54C1\u76EE\u5F55",
          desc: "\u7BA1\u7406\u79FB\u52A8\u7AEF\u4EA7\u54C1\u7BA1\u7EBF\u548C\u5F53\u524D\u72B6\u6001\uFF0C\u4E0D\u4F5C\u4E3A\u6210\u719F\u4EA7\u54C1\u5C55\u793A\u5899\u3002",
          href: "/tools/apps/",
          status: "Labs",
          tag: "Product Pipeline"
        },
        {
          title: "\u4EA7\u54C1\u5B9E\u9A8C\u5BA4",
          desc: "\u6536\u7EB3\u5C1A\u672A\u8FBE\u5230\u6B63\u5F0F\u5DE5\u5177\u95E8\u69DB\u7684\u5B9E\u9A8C\u3001\u9A8C\u8BC1\u8BB0\u5F55\u548C\u540E\u7EED\u5019\u9009\u65B9\u5411\u3002",
          href: "/tools/labs/",
          status: "Labs",
          tag: "Product Experiments"
        }
      ]
    }
  ];
  const toolUseCases = [
    {
      title: "\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\uFF1A\u7AF9\u77E5\u4E86",
      desc: "\u5FEB\u901F\u8FDE\u70B9\u53E0\u52A0\u8F6C\u901F\uFF0C\u957F\u6309\u6301\u7EED\u52A0\u901F\uFF0C\u4E5F\u53EF\u62D6\u52A8\u753B\u5708\u6216\u7528\u624B\u673A\u4F53\u611F\u8BA9\u4F20\u7EDF\u73A9\u5177\u7AF9\u77E5\u4E86\u65CB\u8F6C\u53D1\u58F0\u3002",
      href: "/tools/toy-lab/zhuzhiliao/",
      action: "\u5F00\u59CB\u73A9\u7AF9\u77E5\u4E86",
      access: "\u514D\u8D39 \xB7 \u65E0\u9700\u6CE8\u518C",
      data: "\u52A8\u4F5C\u3001\u4F20\u611F\u5668\u548C\u5206\u6570\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u8BA1\u7B97\uFF0C\u4E0D\u4E0A\u4F20\u539F\u59CB\u8F68\u8FF9"
    },
    {
      title: "\u7231\u8D22\u62A5 AI \u8D22\u62A5\u5206\u6790",
      desc: "\u8F93\u5165\u80A1\u7968\u4EE3\u7801\uFF0C\u751F\u6210\u516C\u5F00\u884C\u60C5\u3001\u5386\u53F2\u8D22\u52A1\u8D8B\u52BF\u548C\u98CE\u9669\u5BA1\u8BA1\u6458\u8981\u3002",
      href: "/tools/ai-finance/",
      action: "\u8F93\u5165\u80A1\u7968\u4EE3\u7801",
      access: "\u514D\u8D39 \xB7 \u65E0\u9700\u6CE8\u518C",
      data: "\u63D0\u4EA4\u80A1\u7968\u4EE3\u7801\u5230 XBSTACK API\uFF0C\u4E0D\u4E0A\u4F20 PDF"
    },
    {
      title: "\u590D\u5229\u4E0E\u5B9A\u6295\u8BA1\u7B97\u5668",
      desc: "\u8F93\u5165\u672C\u91D1\u3001\u6BCF\u6708\u5B9A\u6295\u3001\u5E74\u5316\u3001\u5E74\u9650\u548C\u901A\u80C0\uFF0C\u67E5\u770B\u671F\u672B\u8D44\u4EA7\u3001\u771F\u5B9E\u8D2D\u4E70\u529B\u4E0E\u76EE\u6807\u53CD\u7B97\u3002",
      href: "/tools/compound-calculator/",
      action: "\u5F00\u59CB\u6D4B\u7B97",
      access: "\u514D\u8D39 \xB7 \u65E0\u9700\u6CE8\u518C",
      data: "\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u8BA1\u7B97\uFF0C\u4E0D\u63D0\u4EA4\u672C\u91D1\u3001\u5B9A\u6295\u91D1\u989D\u6216\u76EE\u6807\u8D44\u4EA7"
    },
    {
      title: "\u6279\u91CF UTM \u94FE\u63A5\u751F\u6210\u5668",
      desc: "\u4E00\u6B21\u4E3A\u591A\u4E2A\u7AD9\u5916\u5E73\u53F0\u751F\u6210\u94FE\u63A5\uFF0C\u68C0\u67E5\u547D\u540D\u5E76\u5BFC\u51FA CSV \u6216 Markdown\u3002",
      href: "/tools/utm-builder/",
      action: "\u751F\u6210\u5206\u53D1\u94FE\u63A5",
      access: "\u514D\u8D39 \xB7 \u65E0\u9700\u6CE8\u518C",
      data: "\u5168\u90E8\u5728\u6D4F\u89C8\u5668\u751F\u6210\uFF0C\u4E0D\u63D0\u4EA4\u8F93\u5165\u7684\u7F51\u5740"
    }
  ];
  const toolCatalogItems = [
    ...toolUseCases.map((item) => ({ title: item.title, href: item.href })),
    ...sections.flatMap((section) => section.items.map((item) => ({ title: item.title, href: item.href })))
  ];
  const toolFaqs = [
    { question: "\u8FD9\u4E9B\u5DE5\u5177\u662F\u5426\u514D\u8D39\uFF0C\u9700\u8981\u6CE8\u518C\u5417\uFF1F", answer: "\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\u3001\u7231\u8D22\u62A5\u3001\u590D\u5229\u4E0E\u5B9A\u6295\u8BA1\u7B97\u5668\u3001\u6279\u91CF UTM Builder\u3001Gear Library \u548C Templates \u5F53\u524D\u90FD\u53EF\u4EE5\u514D\u8D39\u6253\u5F00\uFF0C\u4E0D\u8981\u6C42\u6CE8\u518C\u3002\u7B49\u5F85\u540D\u5355\u53EA\u7528\u4E8E\u7231\u8D22\u62A5\u6216 Lunest \u7684\u540E\u7EED\u6D4B\u8BD5\u6C9F\u901A\u3002" },
    { question: "\u5DE5\u5177\u4F1A\u63D0\u4EA4\u54EA\u4E9B\u6570\u636E\uFF1F", answer: "\u7231\u8D22\u62A5\u5411 XBSTACK API \u63D0\u4EA4\u80A1\u7968\u4EE3\u7801\uFF1B\u7AE5\u73A9\u5B9E\u9A8C\u5BA4\u7684\u52A8\u4F5C\u3001\u4F53\u611F\u4E0E\u5206\u6570\uFF0C\u4EE5\u53CA\u590D\u5229\u8BA1\u7B97\u5668\u3001UTM Builder\u3001\u6237\u5916\u6E05\u5355\u3001NAS \u68C0\u67E5\u548C\u6A21\u677F\u9884\u89C8\u5747\u5728\u6D4F\u89C8\u5668\u7AEF\u8FD0\u884C\u3002\u8054\u76DF\u5546\u54C1\u5165\u53E3\u4F1A\u5728\u8DF3\u8F6C\u524D\u660E\u786E\u62AB\u9732\u3002" },
    { question: "Live\u3001Beta\u3001Building \u548C Labs \u6709\u4EC0\u4E48\u533A\u522B\uFF1F", answer: "Live \u8868\u793A\u6838\u5FC3\u4EFB\u52A1\u5DF2\u7ECF\u53EF\u4EE5\u5B8C\u6210\uFF1BBeta \u8868\u793A\u53EF\u7528\u4F46\u4ECD\u9700\u7EE7\u7EED\u9A8C\u8BC1\u6570\u636E\u6216\u7A33\u5B9A\u6027\uFF1BBuilding \u8868\u793A\u4EA7\u54C1\u5728\u5F00\u53D1\u4E14\u6CA1\u6709\u6B63\u5F0F\u7248\u672C\uFF1BLabs \u8868\u793A noindex \u7684\u5B75\u5316\u8BB0\u5F55\u3002" },
    { question: "\u4E3A\u4EC0\u4E48 Apps \u548C Labs \u4E0D\u8FDB\u5165\u641C\u7D22\u7D22\u5F15\uFF1F", answer: "\u5B83\u4EEC\u76EE\u524D\u4E3B\u8981\u7BA1\u7406\u4EA7\u54C1\u7BA1\u7EBF\u548C\u7814\u53D1\u8BB0\u5F55\uFF0C\u8FD8\u6CA1\u6709\u5F62\u6210\u72EC\u7ACB\u3001\u7A33\u5B9A\u3001\u53EF\u5B8C\u6210\u4EFB\u52A1\u7684\u641C\u7D22\u5165\u53E3\uFF0C\u56E0\u6B64\u4FDD\u7559\u8BBF\u95EE\u4F46\u4E0D\u8FDB\u5165 Sitemap\u3002" }
  ];
  const toolSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: title,
        url: "https://www.xbstack.com/tools/",
        description,
        inLanguage: "zh-Hans",
        isPartOf: { "@id": "https://www.xbstack.com/#website" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.xbstack.com/tools/#faq",
        mainEntity: toolFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      },
      {
        "@type": "ItemList",
        name: "XBSTACK Product Tools",
        itemListElement: toolCatalogItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `https://www.xbstack.com${item.href}`
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "canonical": "https://www.xbstack.com/tools/", "schemaJsonLd": toolSchema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative z-10 text-slate-900 dark:text-white pt-32 pb-24 min-h-screen"> <section class="container mx-auto px-6 max-w-6xl"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-12"> <a href="/" class="hover:text-blue-500 transition-colors">首页</a> <span class="opacity-30">/</span> <span class="text-blue-500">产品工具</span> </nav> <header class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-end border-b border-slate-200 dark:border-white/10 pb-16 mb-16"> <div> <p class="text-xs font-black uppercase tracking-[0.35em] text-blue-500 mb-6">Free Online Tools / No Signup</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight italic leading-none mb-8">免费在线工具</h1> <p class="text-xl md:text-2xl font-black leading-relaxed text-slate-700 dark:text-slate-300 border-l-8 border-blue-500 pl-7">
直接游玩、输入、计算或生成结果：传统玩具互动、AI 股票财务分析、复利假设测算和 UTM 链接生成。
</p> </div> <div class="space-y-4 text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400"> <p>当前首屏只展示已经可以直接使用的四个工具。它们都不要求注册，并明确说明输入数据如何处理。</p> <p class="text-sm text-slate-500 dark:text-slate-500">App、模板库和研发实验保留在下方，不与可立即使用的工具混在一起。</p> </div> </header> <section data-analytics-area="tools_featured" class="mb-20 p-8 md:p-10 rounded-[40px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <div class="max-w-3xl mb-8"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Choose by Use Case / Use Now</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-4">四个可以立即使用的工具</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">先选择要完成的动作，再查看数据边界。工具页不再用“项目展示”代替真实使用入口。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"> ${toolUseCases.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-7 rounded-[30px] bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 hover:border-blue-500/60 transition-colors block"> <div class="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-blue-500">${item.access}</div> <h3 class="text-2xl font-black text-slate-950 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-5">${item.desc}</p> <p class="min-h-[42px] rounded-2xl bg-slate-50 dark:bg-white/5 px-4 py-3 text-[10px] font-bold leading-relaxed text-slate-500 dark:text-slate-400">数据说明：${item.data}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">${item.action} →</div> </a>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"> ${sections.map((section) => renderTemplate`<a${addAttribute(`#${section.id}`, "href")} class="p-6 rounded-[28px] border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> <span class="text-[9px] font-black uppercase tracking-[0.22em] text-blue-500">${section.subtitle}</span> <h2 class="text-2xl font-black mt-4 mb-3">${section.name}</h2> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${section.intro}</p> </a>`)} </div> <div class="space-y-20"> ${sections.map((section) => renderTemplate`<section${addAttribute(section.id, "id")} class="scroll-mt-32"> <div class="flex items-center gap-6 mb-8"> <div> <p class="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500 mb-2">${section.subtitle}</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white">${section.name}</h2> </div> <div class="h-px flex-1 bg-slate-200 dark:bg-white/10"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${section.items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-8 rounded-[34px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.035] hover:border-blue-500/50 transition-all"> <div class="flex items-start justify-between gap-4 mb-6"> <span class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">${item.tag}</span> <span class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1">${item.status}</span> </div> <h3 class="text-2xl font-black tracking-tight text-slate-950 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-8">${item.desc}</p> <span class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">进入页面 →</span> </a>`)} </div> </section>`)} </div> <section id="faq" class="mt-24 p-8 md:p-10 rounded-[40px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <div class="max-w-3xl mb-8"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-4">关于 XBSTACK Tools</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">工具页会优先沉淀真实运营和真实产品需求，而不是为了增加页面数量堆 Demo。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${toolFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-3">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> <section class="mt-16 p-8 rounded-[36px] bg-blue-600 text-white"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100 mb-3">Next Reading</p> <h2 class="text-3xl font-black tracking-tight mb-5">从工具回到系统：继续看 XBSTACK 如何把内容、工具和工作流连起来</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <a href="/ai/chatgpt-image-to-astro-cover-bridge/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">ChatGPT 图片自动导入 Astro 内容站 →</a> <a href="/ai/n8n-ai-starter-kit/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">n8n AI Starter Kit →</a> <a href="/ai/xbstack-content-quality-audit-builder-log/" class="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors text-sm font-black">内容质量审计 Builder Log →</a> </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/index.astro";
const $$url = "/tools/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
