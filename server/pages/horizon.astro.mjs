import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_CEdkLuU4.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_pMHxHuJm.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_c6kFuudu.mjs';
import { $ as $$GeoAnchor } from '../chunks/GeoAnchor_D-woECA9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allInvestingPosts = await getCollection("horizon", ({ data }) => !data.draft && data.lang !== "en" && data.category !== "reading");
  const allReadingPosts = await getCollection("horizon", ({ data }) => !data.draft && data.lang !== "en" && data.category === "reading");
  const allThinkingPosts = await getCollection("notes", ({ data }) => !data.draft && data.lang !== "en");
  const featuredInvesting = allInvestingPosts.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 2);
  const featuredReading = allReadingPosts.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()).slice(0, 2);
  const horizonStartRoutes = [
    { title: "\u590D\u5229\u6295\u8D44\u4E0E\u5B9A\u6295\u6D4B\u7B97", desc: "\u4ECE\u590D\u5229\u8BA1\u7B97\u5668\u3001FIRE \u8DEF\u5F84\u548C\u6295\u8D44\u590D\u76D8\u8FDB\u5165\uFF0C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\u3002", href: "/compound-interest/" },
    { title: "\u7231\u8D22\u62A5 Financial Report AI", desc: "\u7528 AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177\u8F85\u52A9\u9605\u8BFB\u8D22\u62A5\u3001\u63D0\u53D6\u98CE\u9669\u548C\u7ED3\u6784\u5316\u4FE1\u606F\u3002", href: "/tools/ai-finance/" },
    { title: "\u9605\u8BFB\u4F5C\u4E3A\u51B3\u7B56\u7CFB\u7EDF", desc: "\u4E0D\u5199\u6A21\u677F\u4E66\u8BC4\uFF0C\u800C\u662F\u628A\u9605\u8BFB\u53D8\u6210\u73B0\u5B9E\u5224\u65AD\u548C\u884C\u52A8\u6821\u51C6\u3002", href: "/horizon/reading/" },
    { title: "\u72EC\u7ACB\u5F00\u53D1\u548C\u4EA7\u54C1\u8D44\u4EA7", desc: "\u4ECE\u5DE5\u5177\u3001App\u3001\u5185\u5BB9\u7CFB\u7EDF\u548C\u7F51\u7AD9\u8FD0\u8425\u7406\u89E3\u4E2A\u4EBA\u4EA7\u54C1\u8D44\u4EA7\u3002", href: "/tools/" }
  ];
  const horizonFaqs = [
    { question: "Horizon \u662F\u6295\u8D44\u680F\u76EE\u5417\uFF1F", answer: "\u4E0D\u53EA\u662F\u6295\u8D44\u680F\u76EE\u3002Horizon \u8BB0\u5F55\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u4E2A\u4EBA\u54C1\u724C\u548C\u957F\u671F\u8D44\u4EA7\u5B9E\u9A8C\uFF0C\u6295\u8D44\u5185\u5BB9\u53EA\u505A\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u5EFA\u8BAE\u3002" },
    { question: "\u4E3A\u4EC0\u4E48\u628A\u9605\u8BFB\u548C\u6295\u8D44\u653E\u5728\u4E00\u8D77\uFF1F", answer: "\u56E0\u4E3A\u9605\u8BFB\u8D1F\u8D23\u4FEE\u6B63\u5224\u65AD\uFF0C\u6295\u8D44\u8D1F\u8D23\u68C0\u9A8C\u5224\u65AD\uFF0C\u72EC\u7ACB\u5F00\u53D1\u8D1F\u8D23\u628A\u80FD\u529B\u6C89\u6DC0\u6210\u4EA7\u54C1\u8D44\u4EA7\u3002\u4E09\u8005\u5171\u540C\u6784\u6210\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u3002" },
    { question: "\u8FD9\u91CC\u4F1A\u63A8\u8350\u80A1\u7968\u5417\uFF1F", answer: "\u4E0D\u4F1A\u3002Horizon \u53EA\u8BB0\u5F55\u4E2A\u4EBA\u89C2\u5BDF\u3001\u9519\u8BEF\u590D\u76D8\u3001\u5DE5\u5177\u65B9\u6CD5\u548C\u98CE\u9669\u8FB9\u754C\uFF0C\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u4E70\u5356\u5EFA\u8BAE\u3002" }
  ];
  const categoriesWithCount = [
    { name: "\u6295\u8D44\u5B9E\u6218", slug: "investing", count: allInvestingPosts.length },
    { name: "\u6DF1\u5EA6\u9605\u8BFB", slug: "reading", count: allReadingPosts.length },
    { name: "\u7CFB\u7EDF\u601D\u8003", slug: "thoughts", count: allThinkingPosts.length }
  ];
  const allTags = [...new Set([...allInvestingPosts, ...allReadingPosts].flatMap((post) => post.data.tags || []))].slice(0, 20);
  const title = "XBSTACK Horizon\uFF1A\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u72EC\u7ACB\u5F00\u53D1\u4E0E\u957F\u671F\u8D44\u4EA7\u5B9E\u9A8C";
  const description = "XBSTACK Horizon \u8BB0\u5F55\u5C0F\u767D\u5173\u4E8E\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u4E2A\u4EBA\u54C1\u724C\u548C\u957F\u671F\u8D44\u4EA7\u7684\u5B9E\u9A8C\u3002\u8FD9\u91CC\u4E0D\u63D0\u4F9B\u6295\u8D44\u5EFA\u8BAE\uFF0C\u800C\u662F\u7528\u771F\u5B9E\u590D\u76D8\u3001\u5DE5\u5177\u3001\u4E66\u7C4D\u548C\u4EA7\u54C1\u5EFA\u8BBE\uFF0C\u89C2\u5BDF\u4E00\u4E2A\u666E\u901A\u5F00\u53D1\u8005\u5982\u4F55\u79EF\u7D2F\u8D44\u4EA7\u3001\u73B0\u91D1\u6D41\u548C\u5224\u65AD\u529B\u3002";
  const keywords = "XBSTACK Horizon, \u590D\u5229\u6295\u8D44, \u5B9A\u6295\u7B56\u7565, FIRE, \u7A0B\u5E8F\u5458\u6295\u8D44, \u9605\u8BFB\u7CFB\u7EDF, \u72EC\u7ACB\u5F00\u53D1, \u4E2A\u4EBA\u8D44\u4EA7, \u6295\u8D44\u590D\u76D8, \u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF, \u9605\u8BFB\u5B9E\u8DF5, \u72EC\u7ACB\u5F00\u53D1\u8D44\u4EA7";
  const horizonInternalLinks = [
    ...horizonStartRoutes,
    ...featuredInvesting.map((post) => ({ title: post.data.title, href: `/investing/${post.id.replace(/\.(md|mdx)$/, "")}/`, desc: post.data.description })),
    ...featuredReading.map((post) => ({ title: post.data.title, href: `/horizon/reading/${post.id.replace(/\.(md|mdx)$/, "")}/`, desc: post.data.description }))
  ];
  const horizonSchema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://www.xbstack.com/horizon/#collection", "name": title, "description": description, "url": "https://www.xbstack.com/horizon/", "inLanguage": "zh-CN", "isPartOf": { "@id": "https://www.xbstack.com/#website" }, "about": ["\u590D\u5229\u6295\u8D44", "\u9605\u8BFB\u7CFB\u7EDF", "\u72EC\u7ACB\u5F00\u53D1", "\u957F\u671F\u8D44\u4EA7", "\u6295\u8D44\u590D\u76D8"].map((name) => ({ "@type": "Thing", "name": name })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.xbstack.com/" }, { "@type": "ListItem", "position": 2, "name": "Horizon", "item": "https://www.xbstack.com/horizon/" }] },
    { "@context": "https://schema.org", "@type": "ItemList", "name": "XBSTACK Horizon internal links", "itemListElement": horizonInternalLinks.slice(0, 12).map((item, index) => ({ "@type": "ListItem", "position": index + 1, "name": item.title, "url": `https://www.xbstack.com${item.href}` })) },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": horizonFaqs.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
  ];
  const horizonGeo = {
    summary: "XBSTACK Horizon \u662F\u5C0F\u767D\u7684\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u5165\u53E3\uFF0C\u56F4\u7ED5\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u5B9E\u8DF5\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u4E2A\u4EBA\u54C1\u724C\u548C\u73B0\u91D1\u6D41\u63A7\u5236\u7EC4\u7EC7\u5185\u5BB9\u3002\u9875\u9762\u4E0D\u662F\u8D22\u7ECF\u5EFA\u8BAE\u9875\uFF0C\u800C\u662F\u628A\u6295\u8D44\u590D\u76D8\u3001Reading \u51B3\u7B56\u7CFB\u7EDF\u3001\u5DE5\u5177\u8D44\u4EA7\u548C\u771F\u5B9E\u751F\u6D3B\u9A8C\u8BC1\u8FDE\u63A5\u8D77\u6765\u3002",
    questions: ["XBSTACK Horizon \u5E94\u8BE5\u4ECE\u54EA\u91CC\u5F00\u59CB\u9605\u8BFB\uFF1F", "\u6295\u8D44\u3001\u9605\u8BFB\u548C\u72EC\u7ACB\u5F00\u53D1\u4E3A\u4EC0\u4E48\u653E\u5728\u540C\u4E00\u4E2A\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\u91CC\uFF1F", "Reading \u5982\u4F55\u4ECE\u666E\u901A\u4E66\u8BC4\u53D8\u6210\u5B9E\u8DF5\u9A8C\u8BC1\u7CFB\u7EDF\uFF1F", "Investing \u4E3A\u4EC0\u4E48\u53EA\u505A\u590D\u76D8\u800C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\uFF1F"],
    entities: ["XBSTACK Horizon", "\u590D\u5229\u6295\u8D44", "\u6295\u8D44\u590D\u76D8", "Reading", "\u9605\u8BFB\u5B9E\u8DF5", "\u72EC\u7ACB\u5F00\u53D1", "Lunest", "\u590D\u5229\u8BA1\u7B97\u5668", "AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177", "\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF"],
    links: horizonInternalLinks.map((item) => ({ title: item.title, href: item.href, description: item.desc }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": horizonSchema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> ${renderComponent($$result2, "GeoAnchor", $$GeoAnchor, { "summary": horizonGeo.summary, "questions": horizonGeo.questions, "entities": horizonGeo.entities, "links": horizonGeo.links })} <main class="relative z-10 pt-40 pb-24 min-h-screen"> <header class="container mx-auto px-4 mb-24 text-center"> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none font-brand">Horizon / <span class="text-orange-500">视野</span></h1> <div class="max-w-3xl mx-auto space-y-6"> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-6">
" 长期资产实验入口：复利投资、阅读系统、独立开发与现金流控制网。"
</p> </div> </header> <div class="container mx-auto px-4 max-w-[1440px]"> <section class="mb-16 p-8 md:p-10 rounded-[40px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <div class="max-w-3xl mb-8"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Start Here</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-4">Horizon 从哪里开始？</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">如果你不是为了看单篇文章，而是想理解 XBSTACK 的长期资产系统，可以从四个入口进入。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${horizonStartRoutes.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="p-6 rounded-[28px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-colors block"> <h2 class="text-lg font-black text-slate-950 dark:text-white mb-3">${item.title}</h2> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">${item.desc}</p> <div class="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-orange-500">进入 →</div> </a>`)} </div> </section> <div class="grid grid-cols-1 lg:grid-cols-4 gap-16"> <div class="lg:col-span-3 space-y-24 animate-fadeUp">  <section> <div class="flex items-center justify-between mb-12"> <div class="flex items-center gap-4"> <span class="w-1.5 h-6 bg-orange-500 rounded-full"></span> <h2 class="text-3xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white">Investing / 投资实战</h2> </div> <a href="/investing/" class="text-xs font-black uppercase tracking-widest text-orange-500 hover:opacity-70 transition-opacity">Explore All →</a> </div> <div class="grid gap-8"> ${featuredInvesting.map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> </section>  <section> <div class="flex items-center justify-between mb-12"> <div class="flex items-center gap-4"> <span class="w-1.5 h-6 bg-sky-500 rounded-full"></span> <h2 class="text-3xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white">Reading / 深度阅读</h2> </div> <a href="/horizon/reading/" class="text-xs font-black uppercase tracking-widest text-sky-500 hover:opacity-70 transition-opacity">Explore All →</a> </div> <div class="grid gap-8"> ${featuredReading.map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> </section>  <section class="p-12 rounded-[50px] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-sm"> <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10"> <h2 class="text-4xl font-black italic uppercase mb-8 text-slate-900 dark:text-white">Audit Tools</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <a href="/tools/compound-calculator/" class="p-8 rounded-[35px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex flex-col gap-4 shadow-sm group/card"> <span class="text-4xl">📈</span> <h3 class="text-xl font-black italic text-slate-900 dark:text-white group-hover/card:text-orange-500 transition-colors">Compound Calculator</h3> <p class="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">高精度年化收益仿真，对冲通胀与购买力损耗。</p> </a> <a href="/tools/ai-finance/" class="p-8 rounded-[35px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex flex-col gap-4 shadow-sm group/card"> <span class="text-4xl">🤖</span> <h3 class="text-xl font-black italic text-slate-900 dark:text-white group-hover/card:text-orange-500 transition-colors">AI Finance Auditor</h3> <p class="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">基于 LLM 的财报深度审计，提取核心利润因子。</p> </a> </div> </div> </section>  <article class="prose prose-lg dark:prose-invert max-w-none border-t border-slate-200 dark:border-white/10 pt-16 leading-relaxed"> <h2>Horizon 是什么？</h2> <p>
Horizon 不是一个简单的财经专栏，也不是堆砌精美金句的读书角。它是小白在投资理财、独立产品开发以及自我认知构建层面的长期实验档案库。
</p> <p>
我们在这个空间里探索一个核心命题：一个拥有技术背景的普通研发人员，如何利用逻辑杠杆，逐步在数字世界与物理世界构建起属于自己的“长期资产与现金流自愈系统”。我们认为，人生的长期突围在于两个轮子的同步咬合——在最底层依靠定投、复利和独立产品默默堆积资产；在最高处通过读书、反思和系统设计来看清客观世界的风向。
</p> <h2>投资：不写建议，只写系统和复盘</h2> <p>
在财务投资频道，小白绝不推荐任何具体个股，不预测短期市场涨跌，更不承诺任何收益率。我们认为所有的盲目预测都是不诚实的技术噪音。
</p> <p>
我们的内容仅围绕两件事展开：第一是“数学逻辑的系统设计”，涵盖高精度定投模型、波动率磨损过滤、FIRE 财务独立路径以及结合通胀变动的资产购买力测算；第二是“真实的事故与人性复盘”。我们将记录自己在市场狂热时因为贪婪而低估风险、在牛市中因为迟疑而错失成长股、以及持股过程中因为心态不稳而提前交出筹码的痛点记录。把错误的逻辑赤裸裸写下来，是防止我们在下一次市场巨震时重复踩坑的唯一物理卡口。
</p> <h2>阅读：不是书评，而是决策系统</h2> <p>
我们拒绝撰写模板化的书评或干瘪的读书摘要。阅读对于小白而言，绝非单纯的信息输入，而是用于纠正现实决策、修剪多余欲望的“防错系统”。
</p> <p>
我们通过拆解《纳瓦尔宝典》中的杠杆理论、《反脆弱》中的不对称风险结构以及《原则》中的痛苦自反思机制，来观察这些人类顶级思想如何物理性地改变我们的现实选择。例如，在面对一个项目是否要启动时，我们如何用反脆弱眼光计算其下行风险与上行敞口；在面对个人精力分配时，如何遵循芒格的多维格栅框架进行决策拦截。书架上的每一本书，都应该是一颗用于构建个人防线的螺丝钉。
</p> <h2>独立开发：把能力变成产品资产</h2> <p>
程序员最大的优势在于能够直接将逻辑物理化为可运行的软件。在 Horizon 体系中，独立开发不是为了赚取零星外快，而是将个人的技术时间沉淀为能持续带来现金流的资产。
</p> <p>
无论是睡眠监测应用 Lunest，还是在线的复利计算引擎、AI 财报助手，它们都是小白的独立产品资产实验。从第一行代码的敲下，到接入 App Store 订阅模式、优化多语言 SEO/GEO 路由，我们完整记录了一个产品从无到有的生长过程。这是一场漫长的实践，教我们如何跳出单纯写代码的员工思维，去管理一个能自动运转的产品，让其成为我们抵抗通胀的坚实长板。
</p> <h2>复盘：Horizon 最重要的内容形态</h2> <p>
在这个信息过载的时代，最容易被遗忘的是失败。Horizon 坚持将复盘作为最底层的文章结构。每一篇复盘文章，都必须以极其苛刻的态度遵循以下五步走逻辑：
</p> <ol> <li><strong>当时看见了什么</strong>：还原决策发生时的原始客观数据、市场行情或产品状态，剔除后视镜偏差。</li> <li><strong>当时怎么判断</strong>：记录自己当时的推理逻辑、情绪状态与潜在假设，暴露人性的薄弱点。</li> <li><strong>后来发生了什么</strong>：列出客观现实的真实走向与最终结果。</li> <li><strong>我错在哪里</strong>：核心反思是计算公式出了错、数据源有幻觉，还是由于高估了自身的抗风险承受力。</li> <li><strong>下次如何改系统</strong>：禁止写“我以后要努力”之类的虚废话，必须提出具体的物理改动，如修改代码里的风控限额参数或在 Notion 决策卡片中增加硬性阻断条目。</li> </ol> <h2>Horizon 和 AI 主线的关系</h2> <p>
人工智能是当前最强大的生产力杠杆，但 AI 绝对不是 Horizon 实验的主角。
</p> <p>
我们将 AI 定位为极其高效的“资产加速器”。我们用 AI 财报分析助手辅助阅读，用工作流智能体自动聚类客户反馈，用 AI 生成工具图谱的 SEO 摘要。然而，系统的最终方向盘必须由我们人类握住。决定把资金分配到哪个资产类别、判定一本书的思想是否能解决眼前的困局、以及在产品中注入怎样的灵魂，这些属于主观判断力、身体实践与物理感知，它们才是 Horizon 长期主义的硬核主角。
</p> <h2>Horizon 内容集群</h2> <p>
为了理顺读者的浏览脉络，我们把 Horizon 的文章分为五个紧密配合的子模块：
</p> <ul> <li><strong>投资实战 (Investing)</strong>：复利计算、定投回测、FIRE 财务规划、真实错失个股复盘、财报勾稽检验。</li> <li><strong>认知阅读 (Reading)</strong>：决策卡片实践、金融史变迁反思、投资哲学推演、认知偏误对抗。</li> <li><strong>独立开发 (Indie)</strong>：Lunest 增长记录、自研工具产品化路径、App 国际化折腾日记、订阅模式转化率复盘。</li> <li><strong>阶段随笔 (Notes)</strong>：阶段性错误档案、自托管私有云折腾记录、内容出海增长对账。</li> <li><strong>资产系统 (Systems)</strong>：时间管理物理闭环、认知防线设计、个人资产与现金流管理底账。</li> </ul> <h2>Horizon 页面应该避免什么？</h2> <p>
本页面承担着严肃的资产实验调性，在内容和运营上必须避开以下误区：
</p> <ul> <li><strong>避免写成理财建议</strong>：严禁出现个股买入卖出时机的引导，字里行间绝不掺杂荐股情绪。</li> <li><strong>避免空泛鸡汤</strong>：拒绝任何“财富自由的十个习惯”等泛化空谈，每一篇文章必须包含具体的数据、时间、工具和复盘动作。</li> <li><strong>避免模板化书评</strong>：不允许将书籍摘抄简单拼凑，必须阐述该书观点在现实选择中引发的物理改变。</li> <li><strong>避免独立开发暴富神话</strong>：客观展现 App 订阅数增长的缓慢与折腾，不夸大收益，保留实事求是的工匠调性。</li> </ul> <h2>下一步内容建议</h2> <p>
在后续的更新中，小白计划围绕资产实验，优先产出以下深度专案：
</p> <ul> <li>我为什么要把投资记录从零散文章沉淀为可复现的系统？</li> <li>一个独立开发者的个人现金流账套：工资、广告折旧、App 订阅与服务器开销对账。</li> <li>从 0 到 1 做到现在，我最该为 Lunest 决策复盘的 5 个工程失误。</li> <li>阅读不是追求输入量，而是减少现实愚蠢决策的过滤器。</li> <li>我痛失 AI 牛股后，真正该改写的不是眼光，而是仓位限额规则。</li> </ul> <h2>总结</h2> <p>
Horizon 是 XBSTACK 的长期视野实验区。它不追逐短线热点，不灌无营养的读书鸡汤，也不把独立开发粉饰成暴富故事。它踏实地记录小白作为一个普通技术人员，如何通过复利投资、深度阅读、自研工具与产品开发，逐步把生命的时间沉淀为实实在在的现金流、内容资产与多维判断力。
</p> </article> <section id="faq" class="p-8 md:p-10 rounded-[40px] bg-orange-500/5 border border-orange-500/10"> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">FAQ</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">关于 Horizon</h2> <div class="space-y-4"> ${horizonFaqs.map((faq) => renderTemplate`<article class="p-5 rounded-[24px] bg-white dark:bg-slate-950/30 border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2">${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${faq.answer}</p> </article>`)} </div> </section> </div> <aside class="lg:col-span-1"> <div class="sticky top-40"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": allTags, "categories": categoriesWithCount, "allBlogCount": allInvestingPosts.length + allReadingPosts.length })} </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/index.astro";
const $$url = "/horizon/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
