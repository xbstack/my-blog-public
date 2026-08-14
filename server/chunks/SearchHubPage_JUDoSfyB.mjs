import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Lb3doMJi.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$SearchHubPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchHubPage;
  const {
    seoTitle,
    description,
    keywords,
    hubTitle,
    intro,
    searchPlaceholder,
    popularTopics = [],
    areas = [],
    featured = [],
    latest = [],
    sidebars = [],
    schemaJsonLd,
    canonical,
    lang = "zh-CN",
    alternates = [],
    summary
  } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const copy = isEnglish ? {
    topics: "Core Topics",
    featured: "Selected Guides & Practice",
    latest: "Latest Publications",
    subscribe: "Subscribe",
    subscribeText: "A weekly digest of AI engineering changes, real failures, tool updates and new XBSTACK assets.",
    subscribeCta: "Newsletter",
    read: "Read \u2192",
    search: "Search"
  } : {
    topics: "\u4E3B\u8981\u4E3B\u9898",
    featured: "\u7CBE\u9009\u6307\u5357\u4E0E\u5B9E\u8DF5",
    latest: "\u6700\u65B0\u53D1\u5E03",
    subscribe: "\u8BA2\u9605\u66F4\u65B0",
    subscribeText: "\u6BCF\u5468\u6574\u7406 AI \u5DE5\u7A0B\u53D8\u5316\u3001\u771F\u5B9E\u6545\u969C\u3001\u5DE5\u5177\u66F4\u65B0\u4E0E XBSTACK \u65B0\u8D44\u4EA7\u3002",
    subscribeCta: "\u8BA2\u9605 Newsletter",
    read: "\u9605\u8BFB\u5168\u6587 \u2192",
    search: "\u641C\u7D22"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoTitle, "description": description, "keywords": keywords, "schemaJsonLd": schemaJsonLd, "canonical": canonical, "lang": lang, "alternates": alternates }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-layout-contract="xbstack-search-hub-v7"> <section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]" data-layout-section="hero"> <div class="xb-shell py-12 md:py-16"> <div class="max-w-[900px]"> <h1 class="xb-title">${hubTitle}</h1> <p class="xb-lead">${intro}</p> <a class="xb-search-box mt-7 max-w-[760px] text-left"${addAttribute(isEnglish ? "/en/search/" : "/search/", "href")} data-xbstack-search-trigger> <span class="xb-search-box__icon">⌕</span><span class="xb-search-box__placeholder">${searchPlaceholder}</span><span class="xb-search-box__button">${copy.search}</span> </a> ${popularTopics.length > 0 && renderTemplate`<div class="xb-chip-row mt-4">${popularTopics.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-chip">${item.title}</a>`)}</div>`} </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <div class="xb-hub-layout"> <main class="min-w-0"> ${summary && renderTemplate`<section class="mb-10 rounded-xl border border-[var(--xb-line)] bg-[var(--xb-blue-soft)] p-5 text-[13px] leading-7 text-[var(--xb-text)]">${summary}</section>`} <section class="mb-12" data-layout-section="topics"> <div class="xb-divider-title"><div><h2 class="xb-h2">${copy.topics}</h2></div></div> <div class="xb-grid-4"> ${areas.map((area, index) => renderTemplate`<article class="xb-card"> <div class="xb-card__icon">${area.icon || String(index + 1).padStart(2, "0")}</div> <h3><a${addAttribute(area.href, "href")}>${area.title}</a></h3><p>${area.desc}</p> ${area.links?.length ? renderTemplate`<div class="xb-card__links">${area.links.slice(0, 3).map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.title} →</a>`)}</div>` : null} </article>`)} </div> </section> ${featured.length > 0 && renderTemplate`<section class="mb-12" data-layout-section="featured"> <div class="xb-divider-title"><div><h2 class="xb-h2">${copy.featured}</h2></div></div> <div class="xb-grid-3">${featured.slice(0, 6).map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-card block"><h3>${item.title}</h3>${item.desc && renderTemplate`<p>${item.desc}</p>`}<div class="mt-5 text-[11px] font-bold text-blue-600 dark:text-blue-400">${copy.read}</div></a>`)}</div> </section>`} ${latest.length > 0 && renderTemplate`<section data-layout-section="latest"> <div class="xb-divider-title"><div><h2 class="xb-h2">${copy.latest}</h2></div></div> <div class="xb-media-list">${latest.slice(0, 10).map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`xb-media-row${item.image ? "" : " xb-media-row--text"}`, "class")}>${item.image && renderTemplate`<div class="xb-media-row__thumb"><img${addAttribute(item.image, "src")} alt="" loading="lazy" decoding="async"></div>`}<div class="xb-media-row__body"><h3>${item.title}</h3>${item.desc && renderTemplate`<p>${item.desc}</p>`}${item.meta && renderTemplate`<div class="xb-media-row__info"><span>${item.meta}</span></div>`}</div><div class="xb-media-row__arrow">→</div></a>`)}</div> </section>`} </main> <aside class="xb-side-stack"> ${sidebars.map((section) => renderTemplate`<section class="xb-side-card"><h3>${section.title}</h3><div>${section.links.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}><span>${item.title}</span><span>→</span></a>`)}</div></section>`)} <section class="xb-side-card"><h3>${copy.subscribe}</h3><p class="mb-3 text-[11px] leading-6 text-[var(--xb-muted)]">${copy.subscribeText}</p><a${addAttribute(isEnglish ? "/en/newsletter/" : "/newsletter/", "href")} class="!border-0 !bg-blue-600 !px-3 !py-2.5 !text-white"><span>${copy.subscribeCta}</span><span>→</span></a></section> </aside> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/search-site/SearchHubPage.astro", void 0);

export { $$SearchHubPage as $ };
