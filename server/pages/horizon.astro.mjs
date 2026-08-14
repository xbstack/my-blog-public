import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-Q10liE.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("horizon", ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex")).sort((a, b) => new Date(b.data.createdAt || 0).getTime() - new Date(a.data.createdAt || 0).getTime());
  const imageSrc = (image) => typeof image === "string" ? image : image?.src || "";
  const latest = posts.slice(0, 8).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: imageSrc(entry.data.image),
    desc: entry.data.description || "",
    meta: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const areas = [
    {
      title: "\u6295\u8D44",
      href: "/investing/",
      desc: "\u516C\u53F8\u3001\u884C\u4E1A\u3001\u4F30\u503C\u3001\u4ED3\u4F4D\u4E0E\u6295\u8D44\u590D\u76D8\u3002\u91CD\u70B9\u8BB0\u5F55\u5F53\u65F6\u4E3A\u4EC0\u4E48\u8FD9\u6837\u5224\u65AD\uFF0C\u4EE5\u53CA\u540E\u6765\u53D1\u751F\u4E86\u4EC0\u4E48\u3002"
    },
    {
      title: "\u9605\u8BFB",
      href: "/horizon/reading/",
      desc: "\u4E0D\u505A\u4E66\u6458\u5806\u79EF\uFF0C\u91CD\u70B9\u8BB0\u5F55\u54EA\u4E9B\u89C2\u70B9\u771F\u6B63\u6539\u53D8\u4E86\u95EE\u9898\u7406\u89E3\u3001\u5DE5\u4F5C\u65B9\u5F0F\u548C\u73B0\u5B9E\u9009\u62E9\u3002"
    },
    {
      title: "\u601D\u8003",
      href: "/investing/thoughts/",
      desc: "\u6280\u672F\u3001\u804C\u4E1A\u3001\u4E2A\u4EBA\u7CFB\u7EDF\u4E0E\u957F\u671F\u4E3B\u4E49\u3002\u628A\u96F6\u6563\u60F3\u6CD5\u6574\u7406\u6210\u53EF\u4EE5\u88AB\u9A8C\u8BC1\u548C\u53CD\u601D\u7684\u5224\u65AD\u3002"
    }
  ];
  const description = "XBSTACK Horizon \u8BB0\u5F55\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u957F\u671F\u601D\u8003\u3002\u91CD\u70B9\u4FDD\u7559\u5224\u65AD\u4F9D\u636E\u3001\u540E\u7EED\u7ED3\u679C\u548C\u89C4\u5219\u53D8\u5316\uFF0C\u7528\u590D\u76D8\u4E0D\u65AD\u4FEE\u6B63\u4E0B\u4E00\u6B21\u51B3\u7B56\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Horizon\uFF1A\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u957F\u671F\u601D\u8003 | XBSTACK", "description": description, "keywords": "Horizon, \u6295\u8D44\u590D\u76D8, \u957F\u671F\u6295\u8D44, \u9605\u8BFB\u7CFB\u7EDF, \u957F\u671F\u601D\u8003, \u51B3\u7B56\u590D\u76D8", "lang": "zh-CN" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"> <div class="xb-shell py-12 md:py-16"> <div class="max-w-[880px]"> <h1 class="xb-title">Horizon：投资、阅读与长期思考</h1> <p class="xb-lead">这里记录的不只是观点，而是判断如何形成、后来发生了什么，以及哪些经验应该变成下一次还能使用的规则。</p> <a href="/search/" class="xb-search-box mt-7 max-w-[720px] text-left"><span class="xb-search-box__icon">⌕</span><span class="xb-search-box__placeholder">搜索投资、阅读、思考或复盘…</span><span class="xb-search-box__button">搜索</span></a> <div class="xb-chip-row mt-4"><a class="xb-chip" href="/investing/">投资</a><a class="xb-chip" href="/horizon/reading/">阅读</a><a class="xb-chip" href="/investing/thoughts/">思考</a></div> </div> </div> </section> <div class="xb-shell py-10 md:py-12"> <div class="xb-hub-layout"> <main class="min-w-0"> <section class="mb-10 rounded-xl border border-[var(--xb-line)] bg-[var(--xb-blue-soft)] p-5"> <p class="m-0 text-[18px] font-bold leading-8 text-[var(--xb-ink)]">真正有价值的不是预测对几次，而是错误有没有修改下一次决策。</p> </section> <section id="areas" class="mb-12"> <div class="xb-divider-title"><div><h2 class="xb-h2">长期主题</h2></div></div> <div class="xb-grid-3"> ${areas.map((area) => renderTemplate`<a${addAttribute(area.href, "href")} class="xb-card"><h3>${area.title}</h3><p>${area.desc}</p><div class="mt-5 text-[11px] font-bold text-blue-600 dark:text-blue-400">进入 →</div></a>`)} </div> </section> <section id="latest"> <div class="xb-divider-title"><div><h2 class="xb-h2">最新研究与复盘</h2></div></div> <div class="xb-media-list"> ${latest.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-media-row"> <div class="xb-media-row__thumb">${item.image ? renderTemplate`<img${addAttribute(item.image, "src")} alt="" loading="lazy" decoding="async">` : renderTemplate`<span aria-hidden="true">XBSTACK</span>`}</div> <div class="xb-media-row__body"> <h3>${item.title}</h3> ${item.desc && renderTemplate`<p>${item.desc}</p>`} <div class="xb-media-row__info"><span>Horizon</span><span>${item.meta}</span></div> </div> <div class="xb-media-row__arrow">→</div> </a>`)} </div> </section> </main> <aside class="xb-side-stack"> <section class="xb-side-card"><h3>主题入口</h3><a href="/investing/"><span>投资</span><span>→</span></a><a href="/horizon/reading/"><span>阅读</span><span>→</span></a><a href="/investing/thoughts/"><span>思考</span><span>→</span></a></section> <section class="xb-side-card"><h3>代表内容</h3><a href="/horizon/reading/reading-system-for-independent-developer/"><span>把读书变成决策系统</span><span>→</span></a><a href="/investing/2025-investment-review/"><span>投资复盘</span><span>→</span></a><a href="/investing/programmer-fire-system/"><span>长期资产与财务系统</span><span>→</span></a></section> <section class="xb-side-card"><h3>相关工具</h3><a href="/tools/compound-calculator/"><span>复利计算器</span><span>→</span></a><a href="/tools/ai-finance/"><span>AI Finance</span><span>→</span></a></section> </aside> </div> </div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/horizon/index.astro";
const $$url = "/horizon/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
