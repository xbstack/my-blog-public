import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Lb3doMJi.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$CollectionLandingPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionLandingPage;
  const { title, seoTitle, description, keywords, intro, searchPlaceholder, chips = [], cards = [], posts = [], sideLinks = [], note, canonical, noindex = false, lang = "zh-CN", alternates = [] } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const copy = isEnglish ? {
    primary: "Primary Paths",
    content: "Content",
    open: "Open \u2192",
    empty: "No published content yet.",
    site: "Site Navigation",
    related: "Related",
    search: "Site Search",
    archive: "Archive",
    ai: "AI Engineering",
    tools: "Tools",
    horizon: "Horizon",
    lens: "Lens",
    button: "Search"
  } : {
    primary: "\u4E3B\u8981\u5165\u53E3",
    content: "\u5185\u5BB9\u76EE\u5F55",
    open: "\u8FDB\u5165 \u2192",
    empty: "\u5F53\u524D\u6CA1\u6709\u5DF2\u53D1\u5E03\u5185\u5BB9\u3002",
    site: "\u7AD9\u5185\u5165\u53E3",
    related: "\u76F8\u5173\u5165\u53E3",
    search: "\u7AD9\u5185\u641C\u7D22",
    archive: "\u6587\u7AE0\u5F52\u6863",
    ai: "AI \u5DE5\u7A0B",
    tools: "Tools",
    horizon: "Horizon",
    lens: "Lens",
    button: "\u641C\u7D22"
  };
  const base = isEnglish ? "/en" : "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoTitle || `${title} | XBSTACK`, "description": description, "keywords": keywords, "canonical": canonical, "noindex": noindex, "lang": lang, "alternates": alternates }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-layout-contract="xbstack-collection-v7"> <section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]" data-layout-section="hero"><div class="xb-shell py-11 md:py-14"><div class="max-w-[900px]"><h1 class="xb-title">${title}</h1><p class="xb-lead">${intro}</p>${searchPlaceholder && renderTemplate`<a${addAttribute(`${base}/search/`, "href")} class="xb-search-box mt-7 max-w-[720px] text-left" data-xbstack-search-trigger><span class="xb-search-box__icon">⌕</span><span class="xb-search-box__placeholder">${searchPlaceholder}</span><span class="xb-search-box__button">${copy.button}</span></a>`}${chips.length > 0 && renderTemplate`<div class="xb-chip-row mt-4">${chips.map((item) => renderTemplate`<a class="xb-chip"${addAttribute(item.href, "href")}>${item.title}</a>`)}</div>`}</div></div></section> <div class="xb-shell py-9 md:py-11"><div class="xb-hub-layout"><main class="min-w-0"> ${note && renderTemplate`<section class="mb-10 rounded-xl border border-[var(--xb-line)] bg-[var(--xb-blue-soft)] p-5 text-[12px] leading-6 text-[var(--xb-text)]">${note}</section>`} ${cards.length > 0 && renderTemplate`<section class="mb-12" data-layout-section="primary"><div class="xb-divider-title"><div><h2 class="xb-h2">${copy.primary}</h2></div></div><div class="xb-grid-3">${cards.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-card"><div class="xb-card__icon">${String(index + 1).padStart(2, "0")}</div><h3>${item.title}</h3>${item.desc && renderTemplate`<p>${item.desc}</p>`}<div class="mt-5 text-[11px] font-bold text-blue-600 dark:text-blue-400">${copy.open}</div></a>`)}</div></section>`} <section data-layout-section="content"><div class="xb-divider-title"><div><h2 class="xb-h2">${copy.content}</h2></div></div>${posts.length > 0 ? renderTemplate`<div class="xb-list">${posts.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-list-row"><div class="xb-list-row__type">${item.type || "ARTICLE"}</div><div><h3>${item.title}</h3>${item.desc && renderTemplate`<p>${item.desc}</p>`}</div><div class="xb-list-row__meta">${item.meta || ""}</div><div class="xb-list-row__arrow">→</div></a>`)}</div>` : renderTemplate`<div class="border-y border-dashed border-[var(--xb-line-strong)] py-10 text-[12px] text-[var(--xb-muted)]">${copy.empty}</div>`}</section> </main><aside class="xb-side-stack"><section class="xb-side-card"><h3>${copy.site}</h3><a${addAttribute(`${base}/search/`, "href")}><span>${copy.search}</span><span>→</span></a><a${addAttribute(`${base}/archive/`, "href")}><span>${copy.archive}</span><span>→</span></a><a${addAttribute(`${base}/ai/`, "href")}><span>${copy.ai}</span><span>→</span></a><a${addAttribute(`${base}/tools/`, "href")}><span>${copy.tools}</span><span>→</span></a><a${addAttribute(`${base}/horizon/`, "href")}><span>${copy.horizon}</span><span>→</span></a><a${addAttribute(`${base}/life/`, "href")}><span>${copy.lens}</span><span>→</span></a></section>${sideLinks.length > 0 && renderTemplate`<section class="xb-side-card"><h3>${copy.related}</h3>${sideLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}><span>${item.title}</span><span>→</span></a>`)}</section>`}</aside></div></div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/search-site/CollectionLandingPage.astro", void 0);

export { $$CollectionLandingPage as $ };
