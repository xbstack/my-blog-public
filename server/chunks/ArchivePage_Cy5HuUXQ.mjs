import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, y as Fragment } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_DhkRtcHh.mjs';
import { $ as $$BlogListCard } from './BlogListCard_pMHxHuJm.mjs';
import { $ as $$Sidebar } from './Sidebar_c6kFuudu.mjs';
import { g as getCollection } from './_astro_content_CEdkLuU4.mjs';

const ARCHIVE_PAGE_SIZE = 48;
const archiveCollections = ["ai", "horizon", "lens", "notes"];
const getArchivePosts = async () => {
  const groups = await Promise.all(
    archiveCollections.map(
      (collection) => getCollection(collection, (entry) => !entry.data?.draft && entry.data?.lang !== "en")
    )
  );
  return groups.flat().sort(
    (a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()
  );
};
const getArchiveSidebarData = (posts) => ({
  categories: [
    { name: "AI Hub", slug: "ai", count: posts.filter((post) => post.collection === "ai").length },
    { name: "Horizon", slug: "horizon", count: posts.filter((post) => post.collection === "horizon").length },
    { name: "Notes", slug: "notes", count: posts.filter((post) => post.collection === "notes").length },
    { name: "Lens", slug: "lens", count: posts.filter((post) => post.collection === "lens").length }
  ],
  tags: [...new Set(posts.flatMap((post) => post.data.tags || []))].slice(0, 30)
});
const getArchivePageHref = (page) => page <= 1 ? "/archive/" : `/archive/page/${page}/`;

const $$Astro = createAstro("https://www.xbstack.com");
const $$ArchivePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchivePage;
  const { posts, categories, tags, totalPosts, currentPage, totalPages } = Astro2.props;
  const isFirstPage = currentPage === 1;
  const title = isFirstPage ? "\u5168\u90E8\u6587\u7AE0 | \u5F52\u6863\u7D22\u5F15 - XBSTACK" : `\u5168\u90E8\u6587\u7AE0\u5F52\u6863\u7B2C ${currentPage} \u9875 | XBSTACK`;
  const description = isFirstPage ? "XBSTACK \u5168\u90E8\u6587\u7AE0\u5F52\u6863\uFF0C\u6309\u65F6\u95F4\u7D22\u5F15 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u590D\u5229\u6295\u8D44\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001NAS \u79C1\u6709\u4E91\u3001\u8D35\u5DDE\u6237\u5916\u548C\u88C5\u5907\u6444\u5F71\u5185\u5BB9\u3002" : `XBSTACK \u5168\u90E8\u6587\u7AE0\u5F52\u6863\u7B2C ${currentPage} \u9875\uFF0C\u7EE7\u7EED\u6309\u65F6\u95F4\u56DE\u6EAF AI \u5DE5\u7A0B\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u6295\u8D44\u9605\u8BFB\u4E0E\u6237\u5916\u73B0\u573A\u5185\u5BB9\u3002`;
  const keywords = "XBSTACK \u5F52\u6863, \u5168\u90E8\u6587\u7AE0, AI Agent, MCP, LangGraph, n8n, \u5DE5\u5177\u4EA7\u54C1, \u590D\u5229\u6295\u8D44, \u6237\u5916\u751F\u6D3B, NAS";
  const previousHref = currentPage > 1 ? getArchivePageHref(currentPage - 1) : null;
  const nextHref = currentPage < totalPages ? getArchivePageHref(currentPage + 1) : null;
  const visiblePages = Array.from({ length: totalPages }, (_, index) => index + 1).filter(
    (page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white/95 dark:bg-[#020617]/90 backdrop-blur-[15px]"></div> </div> <main class="relative z-10 pt-32 pb-24"> <header class="container mx-auto px-4 mb-20 text-center"> <h1 class="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">全部<span class="text-orange-500">文章</span></h1> <p class="text-lg md:text-xl font-bold text-slate-500 border-y border-slate-200 dark:border-white/5 py-4 max-w-3xl mx-auto">
共 ${totalPosts} 篇内容 · 第 ${currentPage}/${totalPages} 页 · 每页最多 48 篇
</p> </header> <div class="container mx-auto px-4 max-w-[1440px]"> ${isFirstPage && renderTemplate`<section class="mb-14 p-8 rounded-[36px] bg-orange-500/5 border border-orange-500/10"> <p class="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Archive Guide</p> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-5">归档适合回溯，专题适合进入</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> <a href="/guides/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">专题指南 →</a> <a href="/ai/mcp/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">MCP Hub →</a> <a href="/ai/workflow/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">Workflow Hub →</a> <a href="/tools/" class="p-4 rounded-2xl bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 text-sm font-black">Tools →</a> </div> </section>`} <div class="grid grid-cols-1 lg:grid-cols-4 gap-12"> <div class="lg:col-span-3"> <div class="grid gap-6"> ${posts.map((post, index) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": post, "loading": index === 0 ? "eager" : "lazy", "fetchPriority": index === 0 ? "high" : "auto" })}`)} </div> ${posts.length === 0 && renderTemplate`<div class="py-32 text-center text-slate-500">当前分页没有文章。</div>`} ${totalPages > 1 && renderTemplate`<nav class="mt-14 flex flex-wrap items-center justify-center gap-3" aria-label="文章归档分页"> ${previousHref ? renderTemplate`<a${addAttribute(previousHref, "href")} rel="prev" class="rounded-xl border border-slate-200 dark:border-white/10 px-5 py-3 text-sm font-black hover:border-orange-500">← 上一页</a>` : renderTemplate`<span class="rounded-xl border border-slate-100 dark:border-white/5 px-5 py-3 text-sm font-black text-slate-300 dark:text-slate-700" aria-disabled="true">← 上一页</span>`} ${visiblePages.map((page, index) => {
    const priorPage = visiblePages[index - 1];
    const showGap = priorPage && page - priorPage > 1;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${showGap && renderTemplate`<span class="px-1 text-slate-400" aria-hidden="true">…</span>`}<a${addAttribute(getArchivePageHref(page), "href")}${addAttribute(page === currentPage ? "page" : void 0, "aria-current")}${addAttribute([
      "min-w-11 rounded-xl border px-4 py-3 text-center text-sm font-black transition-colors",
      page === currentPage ? "border-orange-500 bg-orange-500 text-white" : "border-slate-200 dark:border-white/10 hover:border-orange-500"
    ], "class:list")}> ${page} </a> ` })}`;
  })} ${nextHref ? renderTemplate`<a${addAttribute(nextHref, "href")} rel="next" class="rounded-xl border border-slate-200 dark:border-white/10 px-5 py-3 text-sm font-black hover:border-orange-500">下一页 →</a>` : renderTemplate`<span class="rounded-xl border border-slate-100 dark:border-white/5 px-5 py-3 text-sm font-black text-slate-300 dark:text-slate-700" aria-disabled="true">下一页 →</span>`} </nav>`} </div> <aside class="lg:col-span-1"> <div class="sticky top-24"> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "tags": tags, "categories": categories, "allBlogCount": totalPosts })} </div> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/archive/ArchivePage.astro", void 0);

export { $$ArchivePage as $, ARCHIVE_PAGE_SIZE as A, getArchiveSidebarData as a, getArchivePosts as g };
