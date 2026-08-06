import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Web = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Web;
  const title = "XBSTACK Web Builder Log\uFF1A\u4E2A\u4EBA\u7F51\u7AD9\u3001Astro\u3001Cloudflare \u4E0E Search Console \u590D\u76D8";
  const description = "XBSTACK Web Builder Log \u6574\u7406\u4E2A\u4EBA\u7F51\u7AD9\u8FD0\u8425\u3001Astro \u67B6\u6784\u3001Cloudflare \u90E8\u7F72\u3001Search Console \u6570\u636E\u3001404 \u6392\u67E5\u3001SEO \u5185\u94FE\u3001\u5C01\u9762\u5BFC\u5165\u548C\u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1\u590D\u76D8\uFF0C\u8BB0\u5F55\u4E00\u4E2A\u72EC\u7ACB\u5F00\u53D1\u8005\u5982\u4F55\u628A\u4E2A\u4EBA\u7F51\u7AD9\u4ECE\u6587\u7AE0\u4ED3\u5E93\u6539\u9020\u6210\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u3002";
  const keywords = "XBSTACK Web, Web Builder Log, \u4E2A\u4EBA\u7F51\u7AD9\u8FD0\u8425, \u72EC\u7ACB\u5F00\u53D1\u8005\u7F51\u7AD9, Astro SEO, Cloudflare \u90E8\u7F72, Search Console, \u7F51\u7AD9 404 \u6392\u67E5, \u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1, \u4E2A\u4EBA\u7F51\u7AD9 SEO, CTR \u4F18\u5316";
  const allPosts = await getCollection("ai", ({ data }) => !data.draft && data.lang !== "en");
  const cleanId = (id) => id.replace(/\.(md|mdx)$/, "");
  const postUrl = (post) => `/ai/${cleanId(post.id)}/`;
  const getTime = (post) => new Date(post.data.createdAt || 0).getTime() || 0;
  const webPosts = allPosts.filter((post) => post.data.category === "web").sort((a, b) => getTime(b) - getTime(a));
  const builderLogPosts = webPosts.filter((post) => post.data.section === "builder-log" || post.data.contentType === "builder-log");
  const infrastructurePosts = webPosts.filter((post) => !(post.data.section === "builder-log" || post.data.contentType === "builder-log"));
  const priorityLinks = [
    {
      title: "Search Console \u6709\u66DD\u5149\u6CA1\u70B9\u51FB",
      desc: "\u4ECE\u641C\u7D22\u8BCD\u3001\u6807\u9898\u3001Meta Description\u3001\u6B63\u6587\u5F00\u5934\u548C\u5185\u94FE\u5165\u53E3\u6392\u67E5 CTR \u4F4E\u7684\u95EE\u9898\u3002",
      href: "/ai/search-console-ctr-title-fix/",
      label: "CTR / Search Console"
    },
    {
      title: "\u4E2A\u4EBA\u7F51\u7AD9 404 \u66B4\u589E\u6392\u67E5",
      desc: "\u7528 Cloudflare \u65E5\u5FD7\u3001\u5916\u94FE\u8DEF\u5F84\u3001\u65E7 slug\u3001sitemap \u548C\u91CD\u5B9A\u5411\u89C4\u5219\u5B9A\u4F4D\u6D41\u91CF\u6F0F\u70B9\u3002",
      href: "/ai/xbstack-404-cloudflare-astro-route-fix/",
      label: "404 / Cloudflare"
    },
    {
      title: "XBSTACK \u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1",
      desc: "\u68C0\u67E5\u6587\u7AE0\u5E93\u5B58\u3001\u91CD\u590D\u9009\u9898\u3001\u5C01\u9762\u3001\u5185\u94FE\u3001Pagefind\u3001sitemap \u548C robots\u3002",
      href: "/ai/xbstack-content-quality-audit-builder-log/",
      label: "Content Audit"
    },
    {
      title: "ChatGPT \u56FE\u7247\u5BFC\u5165 Astro",
      desc: "\u628A\u5C01\u9762\u751F\u6210\u3001\u5BFC\u5165\u3001\u6821\u9A8C\u548C frontmatter \u66F4\u65B0\u53D8\u6210\u53EF\u590D\u7528\u7684\u5185\u5BB9\u5DE5\u4F5C\u6D41\u3002",
      href: "/ai/chatgpt-image-to-astro-cover-bridge/",
      label: "Content Workflow"
    }
  ];
  const routeCards = [
    { title: "\u5148\u67E5\u641C\u7D22\u5165\u53E3", desc: "\u6709\u66DD\u5149\u6CA1\u70B9\u51FB\u65F6\uFF0C\u5148\u770B Search Console query\u3001\u6807\u9898\u548C\u6458\u8981\uFF0C\u800C\u4E0D\u662F\u7EE7\u7EED\u76F2\u76EE\u52A0\u6587\u7AE0\u3002", href: "/ai/search-console-ctr-title-fix/" },
    { title: "\u518D\u67E5\u8DEF\u5F84\u6F0F\u6597", desc: "\u5916\u94FE\u3001\u65E7 slug\u3001\u641C\u7D22\u7F13\u5B58\u548C\u9519\u8BEF\u8DEF\u5F84\u4F1A\u8BA9\u771F\u5B9E\u8BBF\u95EE\u649E\u5230 404\uFF0C\u9700\u8981\u5355\u72EC\u5904\u7406\u3002", href: "/ai/xbstack-404-cloudflare-astro-route-fix/" },
    { title: "\u6700\u540E\u67E5\u5185\u5BB9\u8D44\u4EA7", desc: "\u5185\u5BB9\u662F\u5426\u91CD\u590D\u3001\u5185\u94FE\u662F\u5426\u65AD\u3001\u4E13\u9898\u5165\u53E3\u662F\u5426\u6E05\u695A\uFF0C\u51B3\u5B9A\u7F51\u7AD9\u80FD\u4E0D\u80FD\u6C89\u6DC0\u957F\u671F\u6D41\u91CF\u3002", href: "/ai/xbstack-content-quality-audit-builder-log/" }
  ];
  const faqs = [
    {
      question: "Web Builder Log \u4F1A\u4E0D\u4F1A\u7A00\u91CA XBSTACK \u7684 AI \u4E3B\u7EBF\uFF1F",
      answer: "\u4E0D\u4F1A\u3002\u8FD9\u4E2A\u9875\u9762\u4E0D\u662F\u65B0\u589E\u9876\u90E8\u4E3B\u7EBF\uFF0C\u800C\u662F AI Hub \u4E0B\u9762\u7684\u4E8C\u7EA7\u4E13\u9898\uFF0C\u7528\u6765\u627F\u63A5 XBSTACK \u81EA\u5DF1\u7684\u7F51\u7AD9\u5EFA\u9020\u3001SEO\u3001Search Console\u3001Cloudflare\u3001Astro \u548C\u5185\u5BB9\u8D44\u4EA7\u5316\u590D\u76D8\uFF0C\u670D\u52A1\u72EC\u7ACB\u5F00\u53D1\u8005\u8D44\u4EA7\u7CFB\u7EDF\u7684\u4E3B\u5B9A\u4F4D\u3002"
    },
    {
      question: "\u4E3A\u4EC0\u4E48\u4E0D\u628A\u8FD9\u4E9B\u6587\u7AE0\u7EE7\u7EED\u6563\u653E\u5728 AI \u5217\u8868\u91CC\uFF1F",
      answer: "\u6563\u653E\u4F1A\u8BA9\u641C\u7D22\u5F15\u64CE\u548C\u8BFB\u8005\u5F88\u96BE\u5224\u65AD\u8FD9\u4E9B\u6587\u7AE0\u5C5E\u4E8E\u540C\u4E00\u7EC4\u4E3B\u9898\u3002Hub \u9875\u8D1F\u8D23\u628A Search Console\u3001404\u3001\u5185\u5BB9\u5BA1\u8BA1\u3001Astro\u3001Cloudflare \u548C\u5C01\u9762\u5DE5\u4F5C\u6D41\u4E32\u6210\u4E00\u4E2A\u4E3B\u9898\u7C07\uFF0C\u8BA9\u65B0\u65E7\u6587\u7AE0\u4E92\u76F8\u4F20\u9012\u4E0A\u4E0B\u6587\u3002"
    },
    {
      question: "\u8FD9\u4E2A\u4E13\u9898\u9002\u5408\u5199\u4EC0\u4E48\u5185\u5BB9\uFF1F",
      answer: "\u53EA\u5199\u771F\u5B9E\u5EFA\u9020\u65E5\u5FD7\u548C\u53EF\u9A8C\u8BC1\u590D\u76D8\uFF0C\u4F8B\u5982\u7F51\u7AD9\u6D41\u91CF\u3001\u7D22\u5F15\u3001404\u3001\u5185\u94FE\u3001\u5C01\u9762\u3001\u6027\u80FD\u3001Cloudflare\u3001Astro \u67B6\u6784\u3001\u5185\u5BB9\u5DE5\u5177\u94FE\u548C\u641C\u7D22\u6570\u636E\u3002\u4E0D\u8981\u6269\u6210\u6CDB\u6CDB\u7684 SEO \u6559\u7A0B\u6216\u5EFA\u7AD9\u6559\u7A0B\u5927\u5168\u3002"
    }
  ];
  const webHubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.xbstack.com/ai/web/#collection",
        name: title,
        url: "https://www.xbstack.com/ai/web/",
        description,
        inLanguage: "zh-CN",
        isPartOf: { "@id": "https://www.xbstack.com/ai/#collection" },
        about: [
          { "@type": "Thing", name: "XBSTACK Web Builder Log" },
          { "@type": "Thing", name: "\u4E2A\u4EBA\u7F51\u7AD9\u8FD0\u8425" },
          { "@type": "Thing", name: "Astro" },
          { "@type": "Thing", name: "Cloudflare" },
          { "@type": "Thing", name: "Google Search Console" },
          { "@type": "Thing", name: "SEO" },
          { "@type": "Thing", name: "\u5185\u5BB9\u8D28\u91CF\u5BA1\u8BA1" }
        ],
        hasPart: webPosts.slice(0, 12).map((post) => ({
          "@type": "BlogPosting",
          headline: post.data.title,
          url: `https://www.xbstack.com${postUrl(post)}`,
          description: post.data.description
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.xbstack.com/ai/web/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xbstack.com/" },
          { "@type": "ListItem", position: 2, name: "AI Hub", item: "https://www.xbstack.com/ai/" },
          { "@type": "ListItem", position: 3, name: "Web Builder Log", item: "https://www.xbstack.com/ai/web/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.xbstack.com/ai/web/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": webHubSchema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24"> <section class="container mx-auto px-6 max-w-7xl"> <a href="/ai/" class="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors">← 返回 AI Hub</a> <header class="mt-8 mb-16 max-w-5xl"> <p class="text-[10px] font-black uppercase tracking-[0.32em] text-blue-500 mb-5">Web Builder Log / XBSTACK 建造日志</p> <h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[0.95]">
个人网站不是文章仓库，<span class="text-blue-500">是资产系统。</span> </h1> <p class="mt-8 text-lg md:text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl">
这里记录 XBSTACK 作为一个独立开发者网站，从 Astro 架构、Cloudflare 部署、Search Console、404、内容审计、封面导入、内链和 SEO 入口上的持续改造。它不是通用建站教程，而是把真实问题修成长期资产的过程。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"> ${routeCards.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-7 rounded-[34px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <h2 class="text-xl font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">继续阅读 →</div> </a>`)} </section> <section class="mb-20"> <div class="flex flex-col md:flex-row justify-between gap-6 mb-8"> <div> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3">Start Here</p> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white">优先阅读</h2> </div> <p class="max-w-2xl text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">
这几篇是 XBSTACK 当前最核心的网站运营复盘：先看搜索点击，再看路径漏斗，最后回到内容资产和生产流程。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"> ${priorityLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-6 rounded-[30px] bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <div class="text-[9px] font-black uppercase tracking-[0.25em] text-blue-500 mb-4">${item.label}</div> <h3 class="text-lg font-black text-slate-950 dark:text-white leading-tight group-hover:text-blue-500 transition-colors">${item.title}</h3> <p class="mt-4 text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> </a>`)} </div> </section> ${builderLogPosts.length > 0 && renderTemplate`<section class="mb-20"> <div class="flex items-center gap-4 mb-8"> <span class="h-4 w-1 bg-blue-500"></span> <h2 class="text-sm font-black uppercase tracking-widest italic text-slate-950 dark:text-white">Builder Log</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${builderLogPosts.map((post) => renderTemplate`<a${addAttribute(postUrl(post), "href")} class="p-7 rounded-[34px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <div class="flex flex-wrap gap-2 mb-4"> ${(post.data.tags || []).slice(0, 3).map((tag) => renderTemplate`<span class="text-[9px] font-black uppercase tracking-[0.18em] text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">${tag}</span>`)} </div> <h3 class="text-2xl font-black text-slate-950 dark:text-white leading-tight mb-4">${post.data.title}</h3> ${post.data.description && renderTemplate`<p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">${post.data.description}</p>`} <div class="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">查看复盘 →</div> </a>`)} </div> </section>`} ${infrastructurePosts.length > 0 && renderTemplate`<section class="mb-20 p-8 md:p-10 rounded-[44px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <div class="flex items-center gap-4 mb-8"> <span class="h-4 w-1 bg-slate-900 dark:bg-white"></span> <h2 class="text-sm font-black uppercase tracking-widest italic text-slate-950 dark:text-white">Web Infrastructure</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${infrastructurePosts.map((post) => renderTemplate`<a${addAttribute(postUrl(post), "href")} class="p-5 rounded-[26px] bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors block"> <h3 class="text-base font-black text-slate-950 dark:text-white leading-tight mb-3">${post.data.title}</h3> ${post.data.description && renderTemplate`<p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">${post.data.description}</p>`} </a>`)} </div> </section>`} <section id="faq" class="p-8 md:p-10 rounded-[44px] bg-blue-500/5 border border-blue-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">常见问题</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${faqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/web.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/web.astro";
const $$url = "/ai/web/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Web,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
