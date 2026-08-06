import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent, y as Fragment } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { f as formatDate } from './formatDate_DQ3YI9r0.mjs';
import { $ as $$Image } from './_astro_assets_CyEcQoQM.mjs';
import { $ as $$LiquidGlassLess } from './LiquidGlassLess_Cxf5e6fF.mjs';
import 'clsx';
import { r as readingTime, t } from './translation_DCSIwKpR.mjs';
import { r as resolveEntryUrl } from './content-route_Id4Hifd6.mjs';
/* empty css                           */

const $$Astro$1 = createAstro("https://www.xbstack.com");
const $$PlaceholderImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaceholderImage;
  const { title, className = "" } = Astro2.props;
  const getHash = (str) => {
    let hash2 = 0;
    for (let i = 0; i < str.length; i++) {
      hash2 = (hash2 << 5) - hash2 + str.charCodeAt(i);
      hash2 |= 0;
    }
    return Math.abs(hash2);
  };
  const hash = getHash(title || "XBSTACK");
  const keywords = ["technology", "minimal", "abstract", "nature", "workspace", "code", "architecture", "mountain", "forest", "city"];
  const keyword = keywords[hash % keywords.length];
  const randomImageUrl = `https://loremflickr.com/600/800/${keyword}?lock=${hash}`;
  const normalizedTitle = (title || "").trim();
  const firstChar = normalizedTitle.charAt(0).toUpperCase();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative w-full h-full overflow-hidden flex items-center justify-center bg-slate-200 dark:bg-slate-800 ${className}`, "class")}>  <img${addAttribute(randomImageUrl, "src")}${addAttribute(title, "alt")} class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0" loading="lazy" onerror="this.style.display='none'"> <div class="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>  <div class="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500"> <span class="text-4xl md:text-5xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"> ${firstChar} </span> </div>  <div class="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div> </div>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/PlaceholderImage.astro", void 0);

const $$Astro = createAstro("https://www.xbstack.com");
const $$BlogListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogListCard;
  const { content, entry: entryProp, slug, fetchPriority = "auto", loading = "lazy" } = Astro2.props;
  const entry = content || entryProp;
  if (!entry || !entry.data) {
    return null;
  }
  const data = entry.data || {};
  const isEnglish = String(data.lang || "").toLowerCase().startsWith("en");
  const title = data.title || "Untitled";
  const description = data.description || "";
  const publishedDate = data.createdAt;
  const categories = data.categories || [];
  const category = data.category || "";
  const image = data.image;
  const imageAlt = data.imageAlt || "";
  const complexity = data.complexity || 1;
  const displayCategories = categories.length > 0 ? categories : category ? [category] : [];
  const entryId = entry.id?.replace(/\.(md|mdx)$/, "") || "post";
  const finalUrl = slug ? resolveEntryUrl(entry, slug) : resolveEntryUrl(entry, entryId);
  const hasCustomImage = !!(image && (typeof image === "object" || typeof image === "string" && image.length > 0));
  const isAstroImage = !!(image && typeof image === "object");
  const displayImageAlt = (imageAlt || title) + " - XBSTACK";
  const entryDate = publishedDate ? formatDate(publishedDate) : null;
  const estimatedTime = readingTime(entry.body || "", complexity);
  const entryDescription = description?.substring(0, 100) || "";
  return renderTemplate`${maybeRenderHead()}<div class="group relative my-4 block" data-astro-cid-hs6yaznx> ${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-[35px] min-h-[220px] md:min-h-[240px] transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.99]", "textClass": "h-full", "animation": "fadeUp", "data-astro-cid-hs6yaznx": true }, { "default": ($$result2) => renderTemplate` <div class="flex h-full p-2 relative overflow-hidden" data-astro-cid-hs6yaznx>  <a${addAttribute(finalUrl, "href")} class="absolute inset-0 z-30 opacity-0"${addAttribute(title, "aria-label")} data-astro-cid-hs6yaznx></a> <!-- 左侧图片 --> <div class="relative w-32 md:w-64 h-full flex-shrink-0 overflow-hidden rounded-[28px]" data-astro-cid-hs6yaznx> ${hasCustomImage ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-hs6yaznx": true }, { "default": ($$result3) => renderTemplate`${isAstroImage ? renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110", "src": image, "alt": displayImageAlt, "width": 400, "height": 500, "sizes": "(min-width: 768px) 256px, 128px", "quality": 60, "format": "webp", "loading": loading, "fetchpriority": fetchPriority, "data-astro-cid-hs6yaznx": true })}` : renderTemplate`<img class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110"${addAttribute(image, "src")}${addAttribute(displayImageAlt, "alt")} width="400" height="500"${addAttribute(loading, "loading")} decoding="async"${addAttribute(fetchPriority, "fetchpriority")} data-astro-cid-hs6yaznx>`}<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-hs6yaznx></div> ` })}` : renderTemplate`<div class="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" data-astro-cid-hs6yaznx> ${renderComponent($$result2, "PlaceholderImage", $$PlaceholderImage, { "title": title, "className": "w-full h-full", "data-astro-cid-hs6yaznx": true })} </div>`} </div> <!-- 右侧内容 --> <div class="flex-1 py-4 px-5 md:px-10 flex flex-col justify-center min-w-0" data-astro-cid-hs6yaznx> <div class="flex-1 flex flex-col justify-center" data-astro-cid-hs6yaznx> <h2 class="mb-3 text-xl md:text-[1.65rem] font-black text-slate-950 dark:text-white line-clamp-2 leading-[1.2] tracking-tight transition-colors group-hover:text-orange-500" data-astro-cid-hs6yaznx> ${title} </h2> <p class="mb-4 line-clamp-2 leading-relaxed text-slate-700 dark:text-slate-300 hidden md:block text-sm font-medium opacity-80" data-astro-cid-hs6yaznx> ${entryDescription} </p> <div class="flex flex-wrap items-center gap-4" data-astro-cid-hs6yaznx> ${displayCategories.length > 0 && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-hs6yaznx> ${displayCategories.map((cat) => renderTemplate`<span class="px-2.5 py-0.5 rounded-full aqua-pill text-[10px] font-black uppercase tracking-widest text-sky-700 dark:text-sky-300 border border-sky-500/30 shadow-sm relative z-40" data-astro-cid-hs6yaznx> ${isEnglish ? cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) : t(cat)} </span>`)} </div>`} ${entryDate && renderTemplate`<div class="flex items-center text-slate-900 dark:text-slate-100" data-astro-cid-hs6yaznx> <span class="font-mono text-[11px] font-black tracking-tight italic opacity-80" data-astro-cid-hs6yaznx> ${entryDate} </span> </div>`} </div> </div> <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-200 dark:border-white/10 flex items-center justify-between" data-astro-cid-hs6yaznx> <span class="flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 transition-colors group-hover:text-orange-700" data-astro-cid-hs6yaznx> ${isEnglish ? "Read Article" : "\u6DF1\u5EA6\u9605\u8BFB"} <svg class="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hs6yaznx><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-astro-cid-hs6yaznx></path></svg> </span> ${parseInt(estimatedTime) > 2 && renderTemplate`<div class="flex items-center text-slate-900 dark:text-slate-100 relative z-40" data-astro-cid-hs6yaznx> <span class="font-mono text-[10px] font-black uppercase tracking-tighter" data-astro-cid-hs6yaznx> ${isEnglish ? `${parseInt(estimatedTime)} min` : `\u9700 ${parseInt(estimatedTime)} \u5206\u949F`} </span> </div>`} </div> </div> </div> ` })} </div> `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/BlogListCard.astro", void 0);

export { $$BlogListCard as $ };
