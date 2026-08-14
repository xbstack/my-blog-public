import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, w as renderSlot, m as maybeRenderHead } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$ThemeSwitcher } from './BaseLayout_Lb3doMJi.mjs';
/* empty css                       */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.xbstack.com");
const $$V7Frame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$V7Frame;
  const { title, description, section = "Prototype" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "noindex": true, "hideHeader": true, "hideFooter": true, "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="v7-page"> <a href="#v7-main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-slate-900">\u8DF3\u5230\u6B63\u6587</a> <header class="sticky top-0 z-50 border-b border-[var(--v7-line)] bg-[color:var(--v7-bg)]/92 backdrop-blur-xl"> <div class="v7-container flex min-h-[64px] items-center gap-5"> <a href="/practice/v7/" class="flex items-center gap-3 font-black tracking-[-0.03em] text-[var(--v7-ink)]" aria-label="XBSTACK V7 prototype home"> <span class="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--v7-ink)] text-[11px] font-black text-[var(--v7-bg)]">XB</span> <span class="text-[15px]">XBSTACK</span> </a> <span class="hidden h-4 w-px bg-[var(--v7-line)] sm:block"></span> <span class="hidden text-[11px] font-bold text-[var(--v7-muted)] sm:block">V7 / ', '</span> <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="V7 prototype navigation"> <a href="/practice/v7/#solve" class="rounded-lg px-3 py-2 text-[12px] font-bold text-[var(--v7-muted)] hover:bg-[var(--v7-surface-subtle)] hover:text-[var(--v7-ink)]">Solve</a> <a href="/practice/v7/thesis/" class="rounded-lg px-3 py-2 text-[12px] font-bold text-[var(--v7-muted)] hover:bg-[var(--v7-surface-subtle)] hover:text-[var(--v7-ink)]">Think</a> <a href="/practice/v7/#build" class="rounded-lg px-3 py-2 text-[12px] font-bold text-[var(--v7-muted)] hover:bg-[var(--v7-surface-subtle)] hover:text-[var(--v7-ink)]">Build</a> <a href="/practice/v7/#community" class="rounded-lg px-3 py-2 text-[12px] font-bold text-[var(--v7-muted)] hover:bg-[var(--v7-surface-subtle)] hover:text-[var(--v7-ink)]">Discuss</a> </nav> <button id="v7-search-trigger" type="button" class="v7-button !min-h-9 !px-3" aria-label="\u6253\u5F00\u7AD9\u5185\u641C\u7D22">\u2315 <span class="hidden sm:inline">Search</span></button> <div class="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--v7-line)] bg-[var(--v7-surface)]"> ', ' </div> </div> </header> <main id="v7-main"> ', ` </main> <footer class="border-t border-[var(--v7-line)] py-10"> <div class="v7-container flex flex-col gap-4 text-[12px] text-[var(--v7-muted)] sm:flex-row sm:items-center sm:justify-between"> <div><strong class="text-[var(--v7-ink)]">XBSTACK V7 Prototype</strong> \xB7 Developer Studio / Knowledge Base / Community</div> <div>Practice-only \xB7 noindex \xB7 existing URLs unchanged</div> </div> </footer> </div> <script>
    const initV7Search = () => {
      const trigger = document.getElementById('v7-search-trigger');
      if (!trigger || trigger.dataset.ready === 'true') return;
      trigger.dataset.ready = 'true';
      trigger.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('xbstack:open-search'));
      });
    };
    document.addEventListener('astro:page-load', initV7Search);
    initV7Search();
  <\/script> `])), maybeRenderHead(), section, renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, {}), renderSlot($$result2, $$slots["default"])) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/v7/V7Frame.astro", void 0);

export { $$V7Frame as $ };
