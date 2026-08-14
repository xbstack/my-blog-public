import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_BXcEr3EY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const notesEntries = await getCollection("notes", ({ data }) => !data.draft && data.lang !== "en");
  const sortedNotes = notesEntries.sort(
    (a, b) => new Date(b.data.createdAt || 0).valueOf() - new Date(a.data.createdAt || 0).valueOf()
  );
  const title = "\u968F\u7B14\u4E0E\u65E5\u5FD7\uFF1A\u9879\u76EE\u590D\u76D8\u3001\u6237\u5916\u788E\u7247\u3001\u5F00\u53D1\u8BB0\u5F55\u4E0E\u957F\u671F\u89C2\u5BDF - \u5C0F\u767D XBSTACK";
  const description = "XBSTACK Notes \u8BB0\u5F55\u5C0F\u767D\u7684\u9879\u76EE\u590D\u76D8\u3001\u6237\u5916\u788E\u7247\u3001\u5F00\u53D1\u65E5\u5FD7\u3001\u9605\u8BFB\u6458\u8BB0\u548C\u957F\u671F\u89C2\u5BDF\u3002\u8FD9\u91CC\u4E0D\u662F\u6B63\u5F0F\u6559\u7A0B\u680F\u76EE\uFF0C\u800C\u662F\u628A\u771F\u5B9E\u751F\u6D3B\u548C\u5DE5\u7A0B\u73B0\u573A\u7559\u4E0B\u7684\u539F\u59CB\u7B14\u8BB0\u6574\u7406\u6210\u53EF\u56DE\u770B\u7684\u7D22\u5F15\u3002";
  const noteLinks = [
    { title: "AI \u5DE5\u7A0B\u4E3B\u7EBF", href: "/ai/" },
    { title: "\u6237\u5916\u751F\u6D3B", href: "/life/" },
    { title: "\u9605\u8BFB\u7CFB\u7EDF", href: "/horizon/reading/" },
    { title: "\u6548\u7387\u7CFB\u7EDF", href: "/productivity/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 -z-50 overflow-hidden"> <div class="absolute inset-0 bg-white dark:bg-[#020617]"></div> <div class="absolute inset-0 bg-[radial-gradient(#80808033_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]"></div> </div> <main class="pt-32 pb-24 min-h-screen"> <div class="container mx-auto px-6 max-w-4xl"> <header class="mb-16"> <h1 class="text-5xl font-black text-slate-900 dark:text-white italic mb-4">NOTES / <span class="text-slate-500">随笔</span></h1> <p class="text-slate-400 dark:text-slate-500 font-bold tracking-widest">CAPTURING_LIFE_FRAGMENTS</p> <p class="mt-6 text-base font-bold leading-8 text-slate-600 dark:text-slate-400">这里放的是还没有整理成正式长文的现场记录：开发踩坑、户外碎片、阅读摘记、项目判断和生活里的小证据。正式教程看 AI，真实生活入口看 Life，读书方法论看 Reading。</p> <nav class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Notes related sections"> ${noteLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-700 shadow-sm hover:border-blue-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">${item.title} →</a>`)} </nav> </header> <div class="grid gap-8"> ${sortedNotes.map((note) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "content": note, "slug": `/notes/${note.id.replace(/\.(md|mdx)$/, "")}` })}`)} </div> ${sortedNotes.length === 0 && renderTemplate`<div class="py-20 text-center border border-dashed border-white/10 rounded-3xl"> <p class="text-slate-500 font-mono text-xs uppercase tracking-widest">No_Notes_Found_In_Archive</p> </div>`} </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/notes/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/notes/index.astro";
const $$url = "/notes/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
