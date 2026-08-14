import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Lb3doMJi.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$PolicyPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PolicyPage;
  const { title, description, updated = "2026-08-13", sections } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | XBSTACK`, "description": description, "noindex": false, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-[var(--xb-line)] bg-[var(--xb-surface)]"><div class="xb-shell py-11 md:py-14"><div class="mx-auto max-w-[860px]"><div class="xb-kicker">Legal & Policy</div><h1 class="mt-3 text-[clamp(2.5rem,5vw,4.6rem)] font-black leading-none tracking-[-.055em] text-[var(--xb-ink)]">${title}</h1><p class="mt-4 max-w-[760px] text-[14px] leading-7 text-[var(--xb-muted)]">${description}</p><p class="mt-4 text-[10px] text-[var(--xb-faint)]">最后更新：${updated}</p></div></div></section> <div class="xb-shell py-9 md:py-12"><div class="mx-auto grid max-w-[980px] grid-cols-1 gap-10 lg:grid-cols-[190px_minmax(0,1fr)]"><aside class="lg:sticky lg:top-[92px] lg:h-fit"><div class="xb-side-card"><h3>本文目录</h3>${sections.map((section, index) => renderTemplate`<a${addAttribute(`#policy-${index + 1}`, "href")}><span>${index + 1}. ${section.title}</span><span>↓</span></a>`)}</div></aside><main class="min-w-0"><div class="xb-surface p-6 md:p-9">${sections.map((section, index) => renderTemplate`<section${addAttribute(`policy-${index + 1}`, "id")} class="scroll-mt-24 border-b border-[var(--xb-line)] py-7 first:pt-0 last:border-0 last:pb-0"><h2 class="m-0 text-[22px] font-bold tracking-[-.025em] text-[var(--xb-ink)]">${index + 1}. ${section.title}</h2>${section.paragraphs.map((p) => renderTemplate`<p class="mt-4 text-[14px] leading-8 text-[var(--xb-text)]">${p}</p>`)}</section>`)}</div></main></div></div> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/search-site/PolicyPage.astro", void 0);

export { $$PolicyPage as $ };
