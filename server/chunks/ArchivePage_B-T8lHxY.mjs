import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, y as Fragment } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from './_astro_content_jbBoyPXF.mjs';
import { r as resolveEntryUrl } from './content-route_Id4Hifd6.mjs';

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
  const { posts, categories = [], tags = [], totalPosts, currentPage, totalPages } = Astro2.props;
  const isFirstPage = currentPage === 1;
  const title = isFirstPage ? "\u6587\u7AE0\u5F52\u6863\u4E0E\u65F6\u95F4\u7D22\u5F15 | XBSTACK" : `\u6587\u7AE0\u5F52\u6863\u7B2C ${currentPage} \u9875 | XBSTACK`;
  const description = isFirstPage ? "XBSTACK \u6587\u7AE0\u5F52\u6863\u6309\u65F6\u95F4\u56DE\u6EAF AI \u5DE5\u7A0B\u3001\u5F00\u53D1\u8005\u5DE5\u5177\u3001\u957F\u671F\u51B3\u7B56\u4E0E\u6237\u5916\u73B0\u573A\u5185\u5BB9\u3002" : `XBSTACK \u6587\u7AE0\u5F52\u6863\u7B2C ${currentPage} \u9875\u3002`;
  const previousHref = currentPage > 1 ? getArchivePageHref(currentPage - 1) : null;
  const nextHref = currentPage < totalPages ? getArchivePageHref(currentPage + 1) : null;
  const visiblePages = Array.from({ length: totalPages }, (_, index) => index + 1).filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2);
  const roleFor = (post) => post.data.contentRole || post.data.role || (post.collection === "lens" ? "FIELD" : post.collection === "horizon" ? "THESIS" : "ARTICLE");
  const dateFor = (post) => post.data.createdAt ? new Date(post.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": "XBSTACK \u5F52\u6863, \u5168\u90E8\u6587\u7AE0, AI Agent, MCP, LangGraph, n8n, Tools, Horizon, Lens", "noindex": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-11 md:py-14"> <div class="max-w-[820px]"> <div class="xb-kicker">Archive & Timeline</div> <h1 class="mt-3 text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-none tracking-[-.055em] text-[var(--xb-ink)]">文章归档与时间索引</h1> <p class="mt-4 text-[14px] leading-7 text-[var(--xb-muted)]">归档适合回溯，Hub 适合解决问题。当前共 ${totalPosts} 篇内容，第 ${currentPage}/${totalPages} 页。</p> <div class="xb-chip-row mt-5"><a class="xb-chip" href="/ai/">AI</a><a class="xb-chip" href="/tools/">Tools</a><a class="xb-chip" href="/horizon/">Horizon</a><a class="xb-chip" href="/life/">Lens</a><a class="xb-chip" href="/search/">搜索</a></div> </div> </div> </section> <div class="xb-shell py-9 md:py-11"> <div class="xb-hub-layout"> <main class="min-w-0"> <div class="border-t border-[var(--xb-line)]"> ${posts.map((post) => renderTemplate`<a${addAttribute(resolveEntryUrl(post), "href")} class="grid grid-cols-[94px_72px_minmax(0,1fr)_22px] gap-3 border-b border-[var(--xb-line)] py-4 md:grid-cols-[110px_90px_minmax(0,1fr)_130px_22px] md:gap-4"> <time class="text-[10px] text-[var(--xb-faint)]">${dateFor(post)}</time> <span class="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">${roleFor(post)}</span> <div class="min-w-0"><h2 class="m-0 text-[13px] font-bold leading-5 text-[var(--xb-ink)]">${post.data.title}</h2>${post.data.description && renderTemplate`<p class="mt-1 line-clamp-1 text-[10px] leading-5 text-[var(--xb-muted)]">${post.data.description}</p>`}</div> <span class="hidden text-right text-[10px] text-[var(--xb-faint)] md:block">${post.data.hub || post.data.category || post.collection}</span> <span class="text-[var(--xb-faint)]">→</span> </a>`)} </div> ${posts.length === 0 && renderTemplate`<div class="border-y border-[var(--xb-line)] py-14 text-center text-[12px] text-[var(--xb-muted)]">当前分页没有文章。</div>`} ${totalPages > 1 && renderTemplate`<nav class="mt-8 flex flex-wrap items-center justify-between gap-3 text-[11px]" aria-label="文章归档分页"> <div>${previousHref ? renderTemplate`<a${addAttribute(previousHref, "href")} rel="prev" class="xb-chip">← 上一页</a>` : renderTemplate`<span class="xb-chip opacity-40">← 上一页</span>`}</div> <div class="flex flex-wrap items-center justify-center gap-2"> ${visiblePages.map((page, index) => {
    const priorPage = visiblePages[index - 1];
    const showGap = priorPage && page - priorPage > 1;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${showGap && renderTemplate`<span class="px-1 text-[var(--xb-faint)]">…</span>`}<a${addAttribute(getArchivePageHref(page), "href")}${addAttribute(page === currentPage ? "page" : void 0, "aria-current")}${addAttribute(["min-w-8 rounded-lg border px-2.5 py-1.5 text-center font-bold", page === currentPage ? "border-blue-600 bg-blue-600 text-white" : "border-[var(--xb-line)] text-[var(--xb-muted)]"], "class:list")}>${page}</a>` })}`;
  })} </div> <div>${nextHref ? renderTemplate`<a${addAttribute(nextHref, "href")} rel="next" class="xb-chip">下一页 →</a>` : renderTemplate`<span class="xb-chip opacity-40">下一页 →</span>`}</div> </nav>`} </main> <aside class="xb-side-stack"> <section class="xb-side-card"><h3>专题入口</h3><a href="/ai/mcp/"><span>MCP</span><span>→</span></a><a href="/ai/langgraph/"><span>LangGraph</span><span>→</span></a><a href="/ai/agent/"><span>AI Agent</span><span>→</span></a><a href="/ai/workflow/"><span>Workflow</span><span>→</span></a></section> ${categories.length > 0 && renderTemplate`<section class="xb-side-card"><h3>栏目</h3>${categories.slice(0, 8).map((item) => renderTemplate`<a${addAttribute(item.href || item.url || "#", "href")}><span>${item.name || item.title}</span><span>${item.count ?? ""}</span></a>`)}</section>`} ${tags.length > 0 && renderTemplate`<section class="xb-side-card"><h3>常用标签</h3><div class="xb-chip-row">${tags.slice(0, 12).map((tag) => renderTemplate`<a${addAttribute(`/tags/${encodeURIComponent(tag)}/`, "href")} class="xb-chip">${tag}</a>`)}</div></section>`} </aside> </div> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/archive/ArchivePage.astro", void 0);

export { $$ArchivePage as $, ARCHIVE_PAGE_SIZE as A, getArchiveSidebarData as a, getArchivePosts as g };
