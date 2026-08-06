import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderScript } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DQag2m34.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const ai = await getCollection("ai").catch(() => []);
  const investing = await getCollection("horizon").catch(() => []);
  const life = await getCollection("lens").catch(() => []);
  const notes = await getCollection("notes").catch(() => []);
  const pages = await getCollection("pages").catch(() => []);
  const currentTab = Astro2.url.searchParams.get("tab") || "ai";
  const currentPage = Number(Astro2.url.searchParams.get("page") || 1);
  const pageSize = 10;
  const startIdx = (currentPage - 1) * pageSize;
  let displayItems = [];
  let collectionName = "ai";
  switch (currentTab) {
    case "ai":
      displayItems = ai;
      collectionName = "ai";
      break;
    case "investing":
      displayItems = investing;
      collectionName = "horizon";
      break;
    case "life":
      displayItems = life;
      collectionName = "lens";
      break;
    case "notes":
      displayItems = notes;
      collectionName = "notes";
      break;
    case "pages":
      displayItems = pages;
      collectionName = "pages";
      break;
  }
  displayItems.sort((a, b) => {
    const dateA = new Date(a.data.createdAt || 0).getTime();
    const dateB = new Date(b.data.createdAt || 0).getTime();
    return dateB - dateA;
  });
  const totalCount = displayItems.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const paginatedItems = displayItems.slice(startIdx, startIdx + pageSize);
  const getThumbnail = (item) => {
    const img = item.data.image;
    if (!img) return null;
    return typeof img === "string" ? img : img.src;
  };
  const getWordCount = (body = "") => {
    return body.length;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "\u5185\u5BB9\u7BA1\u7406\u4E2D\u5FC3" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto pb-24">  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 animate-fadeUp"> <div> <div class="flex items-center gap-3 mb-2"> <span class="w-1.5 h-4 bg-orange-500 rounded-full"></span> <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Inventory Control</span> </div> <h2 class="text-3xl font-black text-white italic tracking-tighter uppercase">Content Nodes</h2> <div class="flex gap-4 mt-2"> <span class="text-[10px] text-slate-600 uppercase font-mono">Total Articles: ${totalCount}</span> </div> </div> <a${addAttribute(`/admin/content/edit/new?collection=${collectionName}`, "href")} class="px-8 py-3 rounded-xl bg-sky-600 text-white font-black uppercase text-xs tracking-widest hover:bg-sky-500 transition-all shadow-lg active:scale-95">
+ 创建新文章
</a> </div>  <div class="mb-10 flex gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/5"> ${[
    { id: "ai", label: "AI\u5F00\u53D1 / AI" },
    { id: "investing", label: "\u6295\u8D44\u590D\u5229 / INVESTING" },
    { id: "life", label: "\u751F\u6D3B\u63A2\u7D22 / LIFE" },
    { id: "notes", label: "\u95EA\u5FF5\u7B14\u8BB0 / NOTES" },
    { id: "pages", label: "\u7CFB\u7EDF\u9875\u9762 / PAGES" }
  ].map((tab) => renderTemplate`<button${addAttribute(`nav-tab px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
            ${currentTab === tab.id ? "bg-white text-black shadow-xl" : "bg-slate-800 text-slate-500 hover:text-white"}`, "class")}${addAttribute(tab.id, "data-tab")}> ${tab.label} </button>`)} </div>  <div class="grid gap-4"> ${paginatedItems.length > 0 ? paginatedItems.map((item, index) => {
    const thumb = getThumbnail(item);
    const isDraft = item.data.draft === true;
    const words = getWordCount(item.body || "");
    return renderTemplate`<div class="group flex items-center gap-6 p-5 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all"> <div class="flex items-center gap-4 shrink-0"> <span class="text-[10px] font-mono text-slate-700">${(startIdx + index + 1).toString().padStart(3, "0")}</span> <div class="w-16 h-10 rounded-lg overflow-hidden bg-slate-950 border border-white/5"> ${thumb ? renderTemplate`<img${addAttribute(thumb, "src")} alt="" class="w-full h-full object-cover">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-xs opacity-20 italic font-black">AS</div>`} </div> </div> <div class="flex-1 min-w-0"> <h3 class="text-sm font-bold text-white truncate mb-1 group-hover:text-sky-400 transition-colors"> ${item.data.title} </h3> <div class="flex items-center gap-4"> <span${addAttribute(`text-[8px] font-black uppercase tracking-widest ${isDraft ? "text-orange-500" : "text-emerald-500"}`, "class")}> ${isDraft ? "Draft" : "Published"} </span> <span class="text-[8px] text-slate-600 uppercase font-mono tracking-tighter">Words: ${words}+</span> <span class="text-[8px] text-slate-700 uppercase font-mono tracking-tighter">ID: ${item.id.split("/").pop()}</span> </div> </div> <div class="flex items-center gap-2 shrink-0"> <a${addAttribute(`/admin/content/edit/${item.collection}/${item.id.replace(/\.(md|mdx)$/, "")}`, "href")} class="px-4 py-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-700 border border-white/5 transition-all text-[10px] font-black uppercase tracking-widest">
EDIT
</a> </div> </div>`;
  }) : renderTemplate`<div class="py-32 text-center rounded-[40px] bg-slate-800/30 border border-dashed border-white/5"> <p class="text-slate-700 font-black tracking-[0.3em] uppercase text-xs">Sector Empty: No Nodes In ${currentTab.toUpperCase()}</p> </div>`} </div>  ${totalPages > 1 && renderTemplate`<div class="mt-12 flex justify-center gap-4 items-center"> <button${addAttribute(`p-2 rounded-xl bg-slate-800 ${currentPage === 1 ? "opacity-30" : "hover:bg-slate-700"}`, "class")}${addAttribute(currentPage - 1, "data-page")}>←</button> <span class="text-[10px] font-mono font-black text-slate-700">PAGE ${currentPage} / ${totalPages}</span> <button${addAttribute(`p-2 rounded-xl bg-slate-800 ${currentPage === totalPages ? "opacity-30" : "hover:bg-slate-700"}`, "class")}${addAttribute(currentPage + 1, "data-page")}>→</button> </div>`} </div> ${renderScript($$result2, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/content/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/content/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/content/index.astro";
const $$url = "/admin/content/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
