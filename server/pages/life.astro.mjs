import { c as createComponent, a as renderComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const xingyiHero = "/assets/uploads/guizhou-summer-escape/xingyi-wanfenglin-panorama.webp";
  const posts = (await getCollection("lens", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex")).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const getImage = (entry) => typeof entry?.data?.image === "string" ? entry.data.image : entry?.data?.image?.src;
  const latest = posts.slice(0, 8).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: getImage(entry),
    desc: entry.data.description || "",
    meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const featured = posts.filter((entry) => getImage(entry)).slice(0, 5).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: getImage(entry),
    desc: entry.data.description || ""
  }));
  const themes = [
    { title: "\u5F92\u6B65\u4E0E\u8DEF\u7EBF", href: "/life/hiking/", desc: "\u8DEF\u7EBF\u3001\u5730\u5F62\u3001\u5B63\u8282\u3001\u4EA4\u901A\u3001\u5B89\u5168\u4E0E\u771F\u5B9E\u884C\u8D70\u8BB0\u5F55\u3002", icon: "\u2197" },
    { title: "\u65C5\u884C\u4E0E\u907F\u6691", href: "/life/road-trip/", desc: "\u76EE\u7684\u5730\u3001\u4EA4\u901A\u3001\u505C\u7559\u65B9\u5F0F\u3001\u5929\u6C14\u4E0E\u771F\u5B9E\u4F53\u611F\uFF0C\u4E0D\u53EA\u5217\u666F\u70B9\u6E05\u5355\u3002", icon: "\u25B3" },
    { title: "\u6444\u5F71", href: "/life/photo/", desc: "\u7528\u7167\u7247\u3001\u5730\u70B9\u3001\u65F6\u95F4\u548C\u62CD\u6444\u80CC\u666F\u4FDD\u7559\u771F\u5B9E\u73B0\u573A\u3002", icon: "\u25CB" },
    { title: "\u88C5\u5907", href: "/life/gear/", desc: "\u4EE5\u5B9E\u9645\u4F7F\u7528\u4F53\u9A8C\u3001\u9002\u7528\u8FB9\u754C\u548C\u957F\u671F\u8010\u7528\u6027\u4E3A\u4E3B\uFF0C\u4E0D\u505A\u53C2\u6570\u642C\u8FD0\u3002", icon: "\u25A1" }
  ];
  const description = "XBSTACK Lens \u8BB0\u5F55\u6237\u5916\u3001\u65C5\u884C\u3001\u6444\u5F71\u4E0E\u88C5\u5907\u5B9E\u8DF5\u3002\u4EE5\u771F\u5B9E\u51FA\u884C\u548C\u5B9E\u9645\u4F7F\u7528\u7ECF\u9A8C\u4E3A\u57FA\u7840\uFF0C\u6574\u7406\u5F92\u6B65\u8DEF\u7EBF\u3001\u907F\u6691\u65C5\u884C\u3001\u73B0\u573A\u7167\u7247\u548C\u88C5\u5907\u5224\u65AD\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Lens\uFF1A\u6237\u5916\u3001\u65C5\u884C\u4E0E\u73B0\u573A\u8BB0\u5F55 | XBSTACK", "description": description, "keywords": "XBSTACK Lens, \u5F92\u6B65\u8DEF\u7EBF, \u8D35\u5DDE\u6237\u5916, \u907F\u6691\u65C5\u884C, \u6237\u5916\u88C5\u5907, \u6444\u5F71, \u73B0\u573A\u8BB0\u5F55", "lang": "zh-CN" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-10 md:py-14"> <div class="xb-lens-feature"> <div class="xb-lens-feature__copy"> <h1 class="xb-title">Lens\uFF1A\u6237\u5916\u3001\u65C5\u884C\u4E0E\u73B0\u573A\u8BB0\u5F55</h1> <p class="xb-lead">\u5148\u5230\u73B0\u573A\uFF0C\u518D\u7ED9\u5224\u65AD\u3002\u8FD9\u91CC\u8BB0\u5F55\u771F\u5B9E\u8D70\u8FC7\u7684\u8DEF\u7EBF\u3001\u5F85\u8FC7\u7684\u5730\u65B9\u3001\u7528\u8FC7\u7684\u88C5\u5907\u548C\u62CD\u4E0B\u7684\u7167\u7247\uFF1B\u516C\u5F00\u8D44\u6599\u53EA\u7528\u6765\u8865\u5145\uFF0C\u4E0D\u4EE3\u66FF\u771F\u5B9E\u4F53\u9A8C\u3002</p> <a href="/search/" class="xb-search-box mt-7 max-w-[650px] text-left"><span class="xb-search-box__icon">\u2315</span><span class="xb-search-box__placeholder">\u641C\u7D22\u8DEF\u7EBF\u3001\u5730\u70B9\u3001\u65C5\u884C\u3001\u6444\u5F71\u6216\u88C5\u5907\u2026</span><span class="xb-search-box__button">\u641C\u7D22</span></a> <div class="xb-chip-row mt-4"><a class="xb-chip" href="/life/hiking/">\u5F92\u6B65</a><a class="xb-chip" href="/life/road-trip/">\u65C5\u884C</a><a class="xb-chip" href="/life/photo/">\u6444\u5F71</a><a class="xb-chip" href="/life/gear/">\u88C5\u5907</a></div> </div> <div class="xb-lens-carousel" data-lens-carousel> <div class="xb-lens-carousel__viewport"> <div class="xb-lens-carousel__track" data-lens-track> ', ' </div> </div> <button type="button" class="xb-lens-carousel__arrow xb-lens-carousel__arrow--prev" data-lens-prev aria-label="\u4E0A\u4E00\u7BC7">\u2190</button> <button type="button" class="xb-lens-carousel__arrow xb-lens-carousel__arrow--next" data-lens-next aria-label="\u4E0B\u4E00\u7BC7">\u2192</button> <div class="xb-lens-carousel__dots" aria-label="\u7CBE\u9009\u6587\u7AE0\u8F6E\u64AD"> ', ' </div> </div> </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <div class="xb-hub-layout"> <main class="min-w-0"> <section id="themes" class="mb-12"> <div class="xb-divider-title"><div><h2 class="xb-h2">\u4E3B\u8981\u4E3B\u9898</h2></div></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-4"> ', ' </div> </section> <section id="latest"> <div class="xb-divider-title"><div><h2 class="xb-h2">\u6700\u65B0\u73B0\u573A\u8BB0\u5F55</h2></div></div> <div class="xb-media-list"> ', ` </div> </section> </main> <aside class="xb-side-stack"> <section class="xb-side-card"><h3>\u4E3B\u9898\u5165\u53E3</h3><a href="/life/hiking/"><span>\u5F92\u6B65\u4E0E\u8DEF\u7EBF</span><span>\u2192</span></a><a href="/life/road-trip/"><span>\u65C5\u884C\u4E0E\u907F\u6691</span><span>\u2192</span></a><a href="/life/photo/"><span>\u6444\u5F71</span><span>\u2192</span></a><a href="/life/gear/"><span>\u88C5\u5907</span><span>\u2192</span></a></section> <section class="xb-side-card"><h3>\u5B9E\u5730\u8BB0\u5F55</h3><a href="/life/xingyi-summer-travel-guide/"><span>\u5174\u4E49\uFF1A\u4E07\u5CF0\u6797 / \u9A6C\u5CAD\u6CB3 / \u4E07\u5CF0\u6E56</span><span>\u2192</span></a><a href="/life/weining-caohai-reset/"><span>\u5A01\u5B81\u8349\u6D77</span><span>\u2192</span></a><a href="/life/guanling-ice-mortar-preview/"><span>\u5173\u5CAD\u6237\u5916</span><span>\u2192</span></a></section> <section class="xb-side-card"><h3>\u76F8\u5173\u5165\u53E3</h3><a href="/tools/gear-library/"><span>\u88C5\u5907\u8D44\u6599</span><span>\u2192</span></a><a href="/tools/lunest/"><span>Lunest \u7761\u7720\u6062\u590D</span><span>\u2192</span></a><a href="/newsletter/"><span>\u8BA2\u9605\u66F4\u65B0</span><span>\u2192</span></a></section> </aside> </div> </div> <script>
    const initLensPage = () => {
      document.querySelectorAll('[data-lens-carousel]').forEach((carousel) => {
        if (carousel.dataset.ready) return;
        carousel.dataset.ready = '1';
        const track = carousel.querySelector('[data-lens-track]');
        const originalSlides = [...carousel.querySelectorAll('[data-lens-slide]')];
        const dots = [...carousel.querySelectorAll('[data-lens-dot]')];
        if (!track || originalSlides.length < 2) return;

        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.setAttribute('aria-hidden', 'true');
        lastClone.setAttribute('aria-hidden', 'true');
        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);

        const slides = [...track.children];
        const total = originalSlides.length;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let position = 1;
        let timer;
        let resetting = false;

        const logicalIndex = () => {
          if (position === 0) return total - 1;
          if (position === total + 1) return 0;
          return position - 1;
        };

        const syncState = () => {
          const activeIndex = logicalIndex();
          slides.forEach((slide, i) => {
            const active = i === position;
            slide.classList.toggle('is-active', active);
            slide.setAttribute('aria-hidden', active ? 'false' : 'true');
          });
          dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
        };

        const moveTo = (nextPosition, animate = true) => {
          position = nextPosition;
          track.classList.toggle('is-resetting', !animate);
          if (!animate) resetting = true;
          track.style.transform = \`translate3d(-\${position * 100}%,0,0)\`;
          syncState();
          if (!animate) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                track.classList.remove('is-resetting');
                resetting = false;
              });
            });
          }
        };

        moveTo(1, false);

        track.addEventListener('transitionend', () => {
          if (resetting) return;
          if (position === 0) moveTo(total, false);
          if (position === total + 1) moveTo(1, false);
        });

        const stop = () => {
          if (timer) window.clearInterval(timer);
          timer = undefined;
        };
        const start = () => {
          stop();
          if (!reducedMotion.matches) timer = window.setInterval(() => moveTo(position + 1), 4000);
        };

        carousel.querySelector('[data-lens-prev]')?.addEventListener('click', () => { moveTo(position - 1); start(); });
        carousel.querySelector('[data-lens-next]')?.addEventListener('click', () => { moveTo(position + 1); start(); });
        dots.forEach((dot, i) => dot.addEventListener('click', () => { moveTo(i + 1); start(); }));
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);
        carousel.addEventListener('focusin', stop);
        carousel.addEventListener('focusout', start);
        reducedMotion.addEventListener?.('change', start);
        start();
      });
    };
    document.addEventListener('astro:page-load', initLensPage);
    initLensPage();
  <\/script> `], [" ", '<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-10 md:py-14"> <div class="xb-lens-feature"> <div class="xb-lens-feature__copy"> <h1 class="xb-title">Lens\uFF1A\u6237\u5916\u3001\u65C5\u884C\u4E0E\u73B0\u573A\u8BB0\u5F55</h1> <p class="xb-lead">\u5148\u5230\u73B0\u573A\uFF0C\u518D\u7ED9\u5224\u65AD\u3002\u8FD9\u91CC\u8BB0\u5F55\u771F\u5B9E\u8D70\u8FC7\u7684\u8DEF\u7EBF\u3001\u5F85\u8FC7\u7684\u5730\u65B9\u3001\u7528\u8FC7\u7684\u88C5\u5907\u548C\u62CD\u4E0B\u7684\u7167\u7247\uFF1B\u516C\u5F00\u8D44\u6599\u53EA\u7528\u6765\u8865\u5145\uFF0C\u4E0D\u4EE3\u66FF\u771F\u5B9E\u4F53\u9A8C\u3002</p> <a href="/search/" class="xb-search-box mt-7 max-w-[650px] text-left"><span class="xb-search-box__icon">\u2315</span><span class="xb-search-box__placeholder">\u641C\u7D22\u8DEF\u7EBF\u3001\u5730\u70B9\u3001\u65C5\u884C\u3001\u6444\u5F71\u6216\u88C5\u5907\u2026</span><span class="xb-search-box__button">\u641C\u7D22</span></a> <div class="xb-chip-row mt-4"><a class="xb-chip" href="/life/hiking/">\u5F92\u6B65</a><a class="xb-chip" href="/life/road-trip/">\u65C5\u884C</a><a class="xb-chip" href="/life/photo/">\u6444\u5F71</a><a class="xb-chip" href="/life/gear/">\u88C5\u5907</a></div> </div> <div class="xb-lens-carousel" data-lens-carousel> <div class="xb-lens-carousel__viewport"> <div class="xb-lens-carousel__track" data-lens-track> ', ' </div> </div> <button type="button" class="xb-lens-carousel__arrow xb-lens-carousel__arrow--prev" data-lens-prev aria-label="\u4E0A\u4E00\u7BC7">\u2190</button> <button type="button" class="xb-lens-carousel__arrow xb-lens-carousel__arrow--next" data-lens-next aria-label="\u4E0B\u4E00\u7BC7">\u2192</button> <div class="xb-lens-carousel__dots" aria-label="\u7CBE\u9009\u6587\u7AE0\u8F6E\u64AD"> ', ' </div> </div> </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <div class="xb-hub-layout"> <main class="min-w-0"> <section id="themes" class="mb-12"> <div class="xb-divider-title"><div><h2 class="xb-h2">\u4E3B\u8981\u4E3B\u9898</h2></div></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-4"> ', ' </div> </section> <section id="latest"> <div class="xb-divider-title"><div><h2 class="xb-h2">\u6700\u65B0\u73B0\u573A\u8BB0\u5F55</h2></div></div> <div class="xb-media-list"> ', ` </div> </section> </main> <aside class="xb-side-stack"> <section class="xb-side-card"><h3>\u4E3B\u9898\u5165\u53E3</h3><a href="/life/hiking/"><span>\u5F92\u6B65\u4E0E\u8DEF\u7EBF</span><span>\u2192</span></a><a href="/life/road-trip/"><span>\u65C5\u884C\u4E0E\u907F\u6691</span><span>\u2192</span></a><a href="/life/photo/"><span>\u6444\u5F71</span><span>\u2192</span></a><a href="/life/gear/"><span>\u88C5\u5907</span><span>\u2192</span></a></section> <section class="xb-side-card"><h3>\u5B9E\u5730\u8BB0\u5F55</h3><a href="/life/xingyi-summer-travel-guide/"><span>\u5174\u4E49\uFF1A\u4E07\u5CF0\u6797 / \u9A6C\u5CAD\u6CB3 / \u4E07\u5CF0\u6E56</span><span>\u2192</span></a><a href="/life/weining-caohai-reset/"><span>\u5A01\u5B81\u8349\u6D77</span><span>\u2192</span></a><a href="/life/guanling-ice-mortar-preview/"><span>\u5173\u5CAD\u6237\u5916</span><span>\u2192</span></a></section> <section class="xb-side-card"><h3>\u76F8\u5173\u5165\u53E3</h3><a href="/tools/gear-library/"><span>\u88C5\u5907\u8D44\u6599</span><span>\u2192</span></a><a href="/tools/lunest/"><span>Lunest \u7761\u7720\u6062\u590D</span><span>\u2192</span></a><a href="/newsletter/"><span>\u8BA2\u9605\u66F4\u65B0</span><span>\u2192</span></a></section> </aside> </div> </div> <script>
    const initLensPage = () => {
      document.querySelectorAll('[data-lens-carousel]').forEach((carousel) => {
        if (carousel.dataset.ready) return;
        carousel.dataset.ready = '1';
        const track = carousel.querySelector('[data-lens-track]');
        const originalSlides = [...carousel.querySelectorAll('[data-lens-slide]')];
        const dots = [...carousel.querySelectorAll('[data-lens-dot]')];
        if (!track || originalSlides.length < 2) return;

        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.setAttribute('aria-hidden', 'true');
        lastClone.setAttribute('aria-hidden', 'true');
        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);

        const slides = [...track.children];
        const total = originalSlides.length;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let position = 1;
        let timer;
        let resetting = false;

        const logicalIndex = () => {
          if (position === 0) return total - 1;
          if (position === total + 1) return 0;
          return position - 1;
        };

        const syncState = () => {
          const activeIndex = logicalIndex();
          slides.forEach((slide, i) => {
            const active = i === position;
            slide.classList.toggle('is-active', active);
            slide.setAttribute('aria-hidden', active ? 'false' : 'true');
          });
          dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
        };

        const moveTo = (nextPosition, animate = true) => {
          position = nextPosition;
          track.classList.toggle('is-resetting', !animate);
          if (!animate) resetting = true;
          track.style.transform = \\\`translate3d(-\\\${position * 100}%,0,0)\\\`;
          syncState();
          if (!animate) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                track.classList.remove('is-resetting');
                resetting = false;
              });
            });
          }
        };

        moveTo(1, false);

        track.addEventListener('transitionend', () => {
          if (resetting) return;
          if (position === 0) moveTo(total, false);
          if (position === total + 1) moveTo(1, false);
        });

        const stop = () => {
          if (timer) window.clearInterval(timer);
          timer = undefined;
        };
        const start = () => {
          stop();
          if (!reducedMotion.matches) timer = window.setInterval(() => moveTo(position + 1), 4000);
        };

        carousel.querySelector('[data-lens-prev]')?.addEventListener('click', () => { moveTo(position - 1); start(); });
        carousel.querySelector('[data-lens-next]')?.addEventListener('click', () => { moveTo(position + 1); start(); });
        dots.forEach((dot, i) => dot.addEventListener('click', () => { moveTo(i + 1); start(); }));
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);
        carousel.addEventListener('focusin', stop);
        carousel.addEventListener('focusout', start);
        reducedMotion.addEventListener?.('change', start);
        start();
      });
    };
    document.addEventListener('astro:page-load', initLensPage);
    initLensPage();
  <\/script> `])), maybeRenderHead(), featured.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`xb-lens-slide ${index === 0 ? "is-active" : ""}`, "class")} data-lens-slide${addAttribute(index === 0 ? "false" : "true", "aria-hidden")}> <img${addAttribute(item.image || xingyiHero, "src")}${addAttribute(item.title, "alt")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} decoding="async"> <div class="xb-lens-slide__overlay"> <h2>${item.title}</h2> ${item.desc && renderTemplate`<p>${item.desc}</p>`} </div> </a>`), featured.map((item, index) => renderTemplate`<button type="button"${addAttribute(index === 0 ? "is-active" : "", "class")} data-lens-dot${addAttribute(index, "data-index")}${addAttribute(`\u5207\u6362\u5230\uFF1A${item.title}`, "aria-label")}></button>`), themes.map((theme) => renderTemplate`<a${addAttribute(theme.href, "href")} class="xb-card !p-5"><div class="xb-card__icon !mb-3">${theme.icon}</div><h3>${theme.title}</h3><p>${theme.desc}</p></a>`), latest.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-media-row"> <div class="xb-media-row__thumb"> ${item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy" decoding="async">` : renderTemplate`<img${addAttribute(xingyiHero, "src")} alt="XBSTACK Lens" loading="lazy" decoding="async">`} </div> <div class="xb-media-row__body"> <h3>${item.title}</h3> ${item.desc && renderTemplate`<p>${item.desc}</p>`} <div class="xb-media-row__info"><span>Lens</span><span>${item.meta}</span></div> </div> <div class="xb-media-row__arrow">→</div> </a>`)) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/life/index.astro";
const $$url = "/life/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
