import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_qQA58Esh.mjs';
import { $ as $$BlogListCard } from '../../chunks/BlogListCard_pMHxHuJm.mjs';
import { $ as $$Sidebar } from '../../chunks/Sidebar_c6kFuudu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Thoughts = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("notes", ({ data }) => !data.draft && data.hub === "thinking");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf());
  const categoriesWithCount = [
    { name: "\u7CFB\u7EDF\u601D\u8003", slug: "thoughts", count: allPosts.length }
  ];
  const allTags = [...new Set(allPosts.flatMap((post) => post.data.tags || []))].slice(0, 20);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thinking | \u7CFB\u7EDF\u601D\u8003\u3001\u6570\u5B57\u4E3B\u6743\u4E0E\u5168\u6808\u8FDB\u9636 - XBSTACK", "description": "XBSTACK Thinking \u8BB0\u5F55\u5C0F\u767D\u5173\u4E8E\u6570\u5B57\u4E3B\u6743\u3001\u6CE8\u610F\u529B\u7BA1\u7406\u3001\u4E2A\u4EBA\u7CFB\u7EDF\u548C\u72EC\u7ACB\u5F00\u53D1\u7684\u957F\u671F\u5FC3\u6CD5\u6587\u7AE0\u3002\u8FD9\u91CC\u4E0D\u662F\u788E\u7247\u65E5\u8BB0\uFF0C\u800C\u662F\u53EF\u590D\u76D8\u3001\u53EF\u641C\u7D22\u3001\u53EF\u7EE7\u7EED\u8FED\u4EE3\u7684\u7CFB\u7EDF\u601D\u8003\u3002" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> <main class="relative z-10 pt-40 pb-24 min-h-screen"> <header class="container mx-auto px-4 mb-24 text-center"> <nav class="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"> <a href="/" class="hover:text-purple-500 transition-colors">首页</a> <span class="opacity-30">/</span> <a href="/horizon/" class="hover:text-purple-500 transition-colors">Horizon</a> <span class="opacity-30">/</span> <span class="text-purple-500">Thinking</span> </nav> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none font-brand">Thinking / <span class="text-purple-500">深思</span></h1> <div class="max-w-3xl mx-auto space-y-6"> <p class="text-lg md:text-xl font-bold text-slate-500 italic border-y border-slate-200 dark:border-white/5 py-6">
" 在碎片化时代，构建属于自己的操作系统。"
</p> </div> </header> <div class="container mx-auto px-4 max-w-[1440px]"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-16"> <div class="lg:col-span-3 space-y-12"> <div class="grid gap-8"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post })}`)} </div> ${sortedPosts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-400 italic font-medium">正在进行系统级反思... 更多思考内容正在同步。</div>`} </div> <aside class="lg:col-span-1"> <div class="sticky top-40"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": allTags, "categories": categoriesWithCount, "allBlogCount": allPosts.length })} </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/thoughts.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/investing/thoughts.astro";
const $$url = "/investing/thoughts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thoughts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
