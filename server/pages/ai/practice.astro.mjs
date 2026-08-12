import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../../chunks/PublicLayout_DpzxR7uC.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CEdkLuU4.mjs';
import { S as SITE_INFO } from '../../chunks/config_CLUEJusO.mjs';
import { f as formatDate } from '../../chunks/formatDate_DQ3YI9r0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$Practice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Practice;
  const displayTitle = "\u6280\u672F\u5B9E\u8DF5";
  const actualCategories = ["nas", "web", "deployment"];
  const collection = "ai";
  const posts = (await getCollection(collection, ({ data }) => {
    return !data.draft && data.lang !== "en" && (actualCategories.includes(data.category) || data.tags && data.tags.some((t) => actualCategories.includes(t)));
  })).sort((a, b) => new Date(b.data.createdAt).valueOf() - new Date(a.data.createdAt).valueOf());
  const pageTitle = `AI \u6280\u672F\u5B9E\u8DF5\uFF1ANAS\u3001\u81EA\u6258\u7BA1\u3001\u90E8\u7F72\u4E0E\u5DE5\u7A0B\u5316\u8BB0\u5F55 - ${SITE_INFO.SITE_NAME}`;
  const pageDescription = "XBSTACK AI \u6280\u672F\u5B9E\u8DF5\u9875\u6574\u7406 NAS\u3001\u81EA\u6258\u7BA1\u3001\u90E8\u7F72\u3001Web \u5DE5\u7A0B\u548C AI \u5E94\u7528\u8FD0\u884C\u73AF\u5883\u7684\u5B9E\u6218\u8BB0\u5F55\uFF0C\u5173\u6CE8\u53EF\u590D\u73B0\u7684\u67B6\u6784\u3001\u6545\u969C\u6392\u67E5\u548C\u751F\u4EA7\u5316\u914D\u7F6E\u3002";
  const keywords = "AI \u6280\u672F\u5B9E\u8DF5, NAS \u81EA\u6258\u7BA1, AI \u90E8\u7F72, Web \u5DE5\u7A0B, Docker, Cloudflare Tunnel, XBSTACK, \u5DE5\u7A0B\u5316\u8BB0\u5F55";
  const noindex = true;
  const practiceDomains = [
    { title: "NAS \u81EA\u6258\u7BA1", desc: "\u628A\u6570\u636E\u3001\u670D\u52A1\u548C\u4EFB\u52A1\u6267\u884C\u7559\u5728\u81EA\u5DF1\u7684\u57FA\u7840\u8BBE\u65BD\u91CC\uFF0C\u91CD\u70B9\u5173\u6CE8\u7F51\u7EDC\u3001\u5907\u4EFD\u3001\u6743\u9650\u548C\u6545\u969C\u6062\u590D\u3002" },
    { title: "Cloudflare Tunnel", desc: "\u5904\u7406\u516C\u7F51\u8BBF\u95EE\u3001\u53CD\u5411\u4EE3\u7406\u3001\u8DEF\u5F84\u8F6C\u53D1\u548C\u670D\u52A1\u66B4\u9732\u8FB9\u754C\uFF0C\u964D\u4F4E\u5BB6\u5EAD\u7F51\u7EDC\u90E8\u7F72\u95E8\u69DB\u3002" },
    { title: "Astro SSR", desc: "\u8BB0\u5F55 Node SSR\u3001\u5185\u5BB9\u96C6\u5408\u3001\u52A8\u6001\u8DEF\u7531\u3001\u6784\u5EFA\u8B66\u544A\u548C\u7EBF\u4E0A\u6E32\u67D3\u95EE\u9898\u3002" },
    { title: "Docker / Compose", desc: "\u6C89\u6DC0\u5BB9\u5668\u7F16\u6392\u3001\u5377\u6302\u8F7D\u3001\u73AF\u5883\u53D8\u91CF\u3001\u6570\u636E\u5E93\u8FC1\u79FB\u548C\u670D\u52A1\u91CD\u542F\u7B56\u7565\u3002" },
    { title: "AI \u5DE5\u4F5C\u6D41\u90E8\u7F72", desc: "\u8986\u76D6 n8n\u3001\u961F\u5217\u3001Webhook\u3001\u51ED\u636E\u3001\u6A21\u578B API \u548C\u4EFB\u52A1\u5931\u8D25\u91CD\u8BD5\u3002" },
    { title: "\u540E\u53F0\u7CFB\u7EDF", desc: "\u56F4\u7ED5\u53D1\u5E03\u4E2D\u5FC3\u3001\u589E\u957F\u540E\u53F0\u3001\u70ED\u70B9\u7CFB\u7EDF\u548C\u5185\u5BB9\u5206\u53D1\u94FE\u8DEF\u505A\u771F\u5B9E\u5DE5\u7A0B\u590D\u76D8\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "noindex": noindex }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-32 pb-24 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-500/10 to-transparent blur-[120px] -z-10 opacity-30"></div> <div class="max-w-6xl mx-auto px-6"> <nav class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-sky-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/ai" class="hover:text-sky-500 transition-colors">AI开发</a> <span class="opacity-30">/</span> <span class="text-sky-500">${displayTitle}</span> </nav> <header class="mb-20 space-y-5"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black border border-sky-500/20 uppercase tracking-[0.3em]">Production Practice / 工程实践</div> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic uppercase tracking-tighter"> ${displayTitle} / <span class="text-sky-500">工程记录</span> </h1> <p class="max-w-3xl text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed">记录 AI 应用落地时真正会遇到的部署、网络、自托管、NAS、容器和服务稳定性问题，优先保留可复现步骤。</p> </header> <section class="mb-20 p-8 md:p-10 rounded-[42px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5"> <h2 class="text-2xl font-black italic uppercase text-slate-900 dark:text-white mb-6">工程实践案例集</h2> <p class="max-w-4xl text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-8">这里记录的是 AI 应用真正落地时绕不开的工程问题：服务怎么跑、数据怎么存、凭据怎么迁、故障怎么查、系统怎么恢复。每个案例都优先保留可复现环境和决策原因。</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${practiceDomains.map((item) => renderTemplate`<article class="p-6 rounded-[30px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-sky-500 mb-3">${item.title}</div> <p class="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </article>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/ai/${post.id.replace(/\.(md|mdx)$/, "")}/`, "href")} class="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between h-full"> <div> <div class="flex items-center gap-3 mb-4"> <span class="px-3 py-1 rounded-full bg-sky-500/10 text-[9px] font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">${post.data.category || displayTitle}</span> <span class="text-[9px] font-bold text-slate-400">${formatDate(post.data.createdAt)}</span> </div> <h3 class="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors leading-snug"> ${post.data.title} </h3> <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 font-medium"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-sky-500 opacity-60 group-hover:opacity-100 transition-all">
阅读全文 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </div> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic">正在编写该分类下的实战记录...</div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/practice.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/ai/practice.astro";
const $$url = "/ai/practice/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Practice,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
