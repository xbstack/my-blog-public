import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, a as renderScript, w as renderSlot, x as renderHead, y as Fragment$1, u as unescapeHTML, f as defineScriptVars } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
/* empty css                           */
import 'clsx';
/* empty css                           */
import { IoSearch } from 'react-icons/io5';
import { S as SITE_INFO } from './config_CLUEJusO.mjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FaChevronDown, FaTimes, FaBars, FaWeixin, FaGithub, FaEnvelope, FaGift, FaGlobeAmericas, FaCopy, FaInfoCircle, FaShieldAlt, FaExternalLinkAlt, FaMountain, FaCode, FaChartLine } from 'react-icons/fa';
import { useRef, useEffect, useState, useCallback } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
/* empty css                       */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Astro$5 = createAstro("https://www.xbstack.com");
const $$ThemeScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeScript;
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<script>\n  // \u7ACB\u5373\u6267\u884C\u4EE5\u9632\u6B62\u95EA\u70C1\n  (function() {\n    const theme = localStorage.getItem("theme");\n    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);\n    if (isDark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n  })();\n\n  // \u9875\u9762\u52A0\u8F7D\u548C\u5207\u6362\u540E\u7684\u521D\u59CB\u5316\u903B\u8F91\n  function initTheme() {\n    const themeSwitchers = document.querySelectorAll("[data-theme-switcher]");\n    const isDark = document.documentElement.classList.contains("dark");\n\n    // \u540C\u6B65\u6240\u6709\u5207\u6362\u6309\u94AE\u7684\u72B6\u6001\n    themeSwitchers.forEach((el) => {\n      el.checked = isDark;\n      \n      // \u79FB\u9664\u65E7\u7684\u76D1\u542C\u5668\uFF08\u5982\u679C\u5B58\u5728\uFF09\uFF0C\u9632\u6B62\u91CD\u590D\u7ED1\u5B9A\n      // \u7531\u4E8E\u662F\u533F\u540D\u51FD\u6570\u96BE\u4EE5\u79FB\u9664\uFF0C\u6211\u4EEC\u91C7\u7528 cloneNode \u6216\u8005\u7B80\u5355\u7684\u6807\u5FD7\u4F4D\n      // Astro \u7684 View Transitions \u4F1A\u91CD\u65B0\u8FD0\u884C\u811A\u672C\uFF0C\u6240\u4EE5\u53EA\u9700\u786E\u4FDD\u4E0D\u7D2F\u79EF\n      // \u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u8986\u76D6 onclick \u6216 onchange\uFF0C\u4F46\u8FD9\u91CC\u7528 addEventListener\n      // \u6211\u4EEC\u53EF\u4EE5\u7ED9\u5143\u7D20\u52A0\u4E2A\u6807\u8BB0\n      if (el.dataset.initialized) return;\n      \n      el.addEventListener("change", (e) => {\n        const checked = e.target.checked;\n        if (checked) {\n          document.documentElement.classList.add("dark");\n          localStorage.setItem("theme", "dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n          localStorage.setItem("theme", "light");\n        }\n        \n        // \u540C\u6B65\u5176\u4ED6\u53EF\u80FD\u5B58\u5728\u7684\u5207\u6362\u6309\u94AE\uFF08\u4F8B\u5982\u79FB\u52A8\u7AEF\u548C\u684C\u9762\u7AEF\u5404\u6709\u4E00\u4E2A\uFF09\n        document.querySelectorAll("[data-theme-switcher]").forEach(other => {\n            if (other !== el) other.checked = checked;\n        });\n      });\n      \n      el.dataset.initialized = "true";\n    });\n  }\n\n  // \u7ED1\u5B9A\u4E8B\u4EF6\n  document.addEventListener("DOMContentLoaded", initTheme);\n  document.addEventListener("astro:page-load", initTheme);\n  document.addEventListener("astro:after-swap", initTheme);\n<\/script>'])));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/ThemeScript.astro", void 0);

const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex items-center justify-center w-full h-full"> <input class="sr-only" id="theme-switcher" data-theme-switcher type="checkbox"> <label class="flex items-center justify-center cursor-pointer w-full h-full group/theme" for="theme-switcher" aria-label="切换主题">  <svg class="w-5 h-5 transition-all duration-500 scale-100 dark:scale-0 opacity-100 dark:opacity-0 absolute text-orange-500 group-hover/theme:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg>  <svg class="w-5 h-5 transition-all duration-500 scale-0 dark:scale-100 opacity-0 dark:opacity-100 absolute text-sky-400 group-hover/theme:-rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </label> </div> ${renderComponent($$result, "ThemeScript", $$ThemeScript, {})}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/ThemeSwitcher.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$4 = createAstro("https://www.xbstack.com");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { lang = "zh-CN", alternates = [], variant = "desktop" } = Astro2.props;
  const currentIsEnglish = lang.toLowerCase().startsWith("en");
  const currentPath = `${Astro2.url.pathname}${Astro2.url.search}`;
  const zhAlternate = alternates.find((item) => ["zh-CN", "zh-Hans", "zh"].includes(item.lang));
  const enAlternate = alternates.find((item) => item.lang.toLowerCase().startsWith("en"));
  const hasZhTranslation = Boolean(zhAlternate);
  const hasEnTranslation = Boolean(enAlternate);
  const zhHref = currentIsEnglish ? zhAlternate?.href || "/" : zhAlternate?.href || currentPath;
  const enHref = currentIsEnglish ? enAlternate?.href || currentPath : enAlternate?.href || "/en/";
  const currentLanguageLabel = currentIsEnglish ? "English" : "\u4E2D\u6587";
  const switcherLabel = currentIsEnglish ? "Select language" : "\u9009\u62E9\u8BED\u8A00";
  const choices = [
    {
      lang: "zh-CN",
      label: "\u4E2D\u6587",
      shortLabel: "ZH",
      href: zhHref,
      current: !currentIsEnglish,
      available: hasZhTranslation,
      title: !currentIsEnglish ? "\u5F53\u524D\u8BED\u8A00\uFF1A\u4E2D\u6587" : hasZhTranslation ? "\u5207\u6362\u5230\u4E2D\u6587\u7248\u672C" : "\u5F53\u524D\u9875\u9762\u6682\u65E0\u4E2D\u6587\u7248\u672C\uFF0C\u5C06\u8FDB\u5165\u4E2D\u6587\u9996\u9875"
    },
    {
      lang: "en",
      label: "English",
      shortLabel: "EN",
      href: enHref,
      current: currentIsEnglish,
      available: hasEnTranslation,
      title: currentIsEnglish ? "Current language: English" : hasEnTranslation ? "Switch to the English version" : "No English version for this page; open the English home page"
    }
  ];
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<script>\n  if (!window.__xbstackLanguageChoiceBound) {\n    window.__xbstackLanguageChoiceBound = true;\n\n    const closeLanguageMenus = (except = null) => {\n      document.querySelectorAll('[data-language-switcher-details][open]').forEach((details) => {\n        if (details !== except) details.removeAttribute('open');\n      });\n    };\n\n    document.addEventListener('click', (event) => {\n      const clickedDetails = event.target instanceof Element\n        ? event.target.closest('[data-language-switcher-details]')\n        : null;\n      if (!clickedDetails) closeLanguageMenus();\n\n      const target = event.target instanceof Element\n        ? event.target.closest('[data-language-choice]')\n        : null;\n      if (!target) return;\n\n      const language = target.getAttribute('data-language-choice');\n      const isCurrent = target.getAttribute('data-language-current') === 'true';\n      const isAvailable = target.getAttribute('data-language-available') === 'true';\n      const parentDetails = target.closest('[data-language-switcher-details]');\n      if (!language) return;\n\n      if (isCurrent) {\n        event.preventDefault();\n        if (parentDetails) parentDetails.removeAttribute('open');\n        return;\n      }\n\n      document.cookie = `xbstack_lang=${encodeURIComponent(language)}; Path=/; Max-Age=31536000; SameSite=Lax`;\n      try {\n        localStorage.setItem('xbstack_lang', language);\n      } catch (error) {}\n      try {\n        sessionStorage.setItem('xbstack_auto_lang_checked', '1');\n        if (!isAvailable) {\n          sessionStorage.setItem('xbstack_language_notice', JSON.stringify({\n            language,\n            sourcePath: window.location.pathname,\n          }));\n        } else {\n          sessionStorage.removeItem('xbstack_language_notice');\n        }\n      } catch (error) {}\n    });\n\n    document.addEventListener('keydown', (event) => {\n      if (event.key !== 'Escape') return;\n      const openDetails = document.querySelector('[data-language-switcher-details][open]');\n      if (!openDetails) return;\n      openDetails.removeAttribute('open');\n      openDetails.querySelector('summary')?.focus();\n    });\n  }\n<\/script>"], ["", "<script>\n  if (!window.__xbstackLanguageChoiceBound) {\n    window.__xbstackLanguageChoiceBound = true;\n\n    const closeLanguageMenus = (except = null) => {\n      document.querySelectorAll('[data-language-switcher-details][open]').forEach((details) => {\n        if (details !== except) details.removeAttribute('open');\n      });\n    };\n\n    document.addEventListener('click', (event) => {\n      const clickedDetails = event.target instanceof Element\n        ? event.target.closest('[data-language-switcher-details]')\n        : null;\n      if (!clickedDetails) closeLanguageMenus();\n\n      const target = event.target instanceof Element\n        ? event.target.closest('[data-language-choice]')\n        : null;\n      if (!target) return;\n\n      const language = target.getAttribute('data-language-choice');\n      const isCurrent = target.getAttribute('data-language-current') === 'true';\n      const isAvailable = target.getAttribute('data-language-available') === 'true';\n      const parentDetails = target.closest('[data-language-switcher-details]');\n      if (!language) return;\n\n      if (isCurrent) {\n        event.preventDefault();\n        if (parentDetails) parentDetails.removeAttribute('open');\n        return;\n      }\n\n      document.cookie = \\`xbstack_lang=\\${encodeURIComponent(language)}; Path=/; Max-Age=31536000; SameSite=Lax\\`;\n      try {\n        localStorage.setItem('xbstack_lang', language);\n      } catch (error) {}\n      try {\n        sessionStorage.setItem('xbstack_auto_lang_checked', '1');\n        if (!isAvailable) {\n          sessionStorage.setItem('xbstack_language_notice', JSON.stringify({\n            language,\n            sourcePath: window.location.pathname,\n          }));\n        } else {\n          sessionStorage.removeItem('xbstack_language_notice');\n        }\n      } catch (error) {}\n    });\n\n    document.addEventListener('keydown', (event) => {\n      if (event.key !== 'Escape') return;\n      const openDetails = document.querySelector('[data-language-switcher-details][open]');\n      if (!openDetails) return;\n      openDetails.removeAttribute('open');\n      openDetails.querySelector('summary')?.focus();\n    });\n  }\n<\/script>"])), variant === "desktop" ? renderTemplate`${maybeRenderHead()}<details class="language-switcher-details relative" data-language-switcher-details data-astro-cid-iemtoba4><summary class="language-switcher-summary flex h-10 min-w-[88px] cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-slate-200/60 bg-white/50 px-3 text-[12px] font-bold text-slate-600 shadow-sm backdrop-blur-md transition-all hover:border-blue-300 hover:bg-blue-50/80 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:focus-visible:ring-offset-slate-950"${addAttribute(switcherLabel, "aria-label")}${addAttribute(switcherLabel, "title")} data-astro-cid-iemtoba4><svg aria-hidden="true" viewBox="0 0 24 24" class="h-3.5 w-3.5 flex-none" fill="none" stroke="currentColor" stroke-width="1.8" data-astro-cid-iemtoba4><circle cx="12" cy="12" r="9" data-astro-cid-iemtoba4></circle><path d="M3 12h18M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21M12 3C9.7 5.4 8.5 8.4 8.5 12S9.7 18.6 12 21" data-astro-cid-iemtoba4></path></svg><span class="whitespace-nowrap" data-astro-cid-iemtoba4>${currentLanguageLabel}</span><svg aria-hidden="true" viewBox="0 0 20 20" class="language-chevron h-3 w-3 flex-none text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-iemtoba4><path d="m5 7.5 5 5 5-5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-iemtoba4></path></svg></summary><div class="language-switcher-menu absolute right-0 top-[calc(100%+0.65rem)] z-[520] w-44 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_18px_50px_-18px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1020]/95" role="menu"${addAttribute(switcherLabel, "aria-label")} data-astro-cid-iemtoba4><div class="px-3 pb-1.5 pt-1 text-[9px] font-black uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500" data-astro-cid-iemtoba4>${currentIsEnglish ? "Language" : "\u8BED\u8A00"}</div>${choices.map((choice) => renderTemplate`<a${addAttribute(choice.href, "href")}${addAttribute(choice.lang, "data-language-choice")}${addAttribute(choice.current ? "true" : "false", "data-language-current")}${addAttribute(choice.available ? "true" : "false", "data-language-available")}${addAttribute(choice.current ? "page" : void 0, "aria-current")}${addAttribute(choice.current ? "true" : void 0, "aria-disabled")} role="menuitemradio"${addAttribute(choice.current ? "true" : "false", "aria-checked")}${addAttribute(choice.title, "title")}${addAttribute([
    "flex min-h-10 items-center gap-3 rounded-xl px-3 py-2 text-[12px] font-bold transition-colors",
    choice.current ? "cursor-default bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
  ], "class:list")} data-astro-cid-iemtoba4><span class="flex h-5 w-5 items-center justify-center" aria-hidden="true" data-astro-cid-iemtoba4>${choice.current ? renderTemplate`<svg viewBox="0 0 20 20" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.2" data-astro-cid-iemtoba4><path d="m4.5 10 3.2 3.2 7.8-7.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-iemtoba4></path></svg>` : renderTemplate`<span class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700" data-astro-cid-iemtoba4></span>`}</span><span class="flex-1" data-astro-cid-iemtoba4>${choice.label}</span><span class="text-[9px] font-black tracking-[0.14em] text-slate-400 dark:text-slate-600" data-astro-cid-iemtoba4>${choice.shortLabel}</span></a>`)}</div></details>` : renderTemplate`<div class="flex w-full items-center justify-between gap-4"${addAttribute(switcherLabel, "aria-label")} data-astro-cid-iemtoba4><div class="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300" data-astro-cid-iemtoba4><svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="1.8" data-astro-cid-iemtoba4><circle cx="12" cy="12" r="9" data-astro-cid-iemtoba4></circle><path d="M3 12h18M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21M12 3C9.7 5.4 8.5 8.4 8.5 12S9.7 18.6 12 21" data-astro-cid-iemtoba4></path></svg><span data-astro-cid-iemtoba4>${currentIsEnglish ? "Language" : "\u8BED\u8A00"}</span></div><div class="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5" data-astro-cid-iemtoba4>${choices.map((choice) => renderTemplate`<a${addAttribute(choice.href, "href")}${addAttribute(choice.lang, "data-language-choice")}${addAttribute(choice.current ? "true" : "false", "data-language-current")}${addAttribute(choice.available ? "true" : "false", "data-language-available")}${addAttribute(choice.current ? "page" : void 0, "aria-current")}${addAttribute(choice.current ? "true" : void 0, "aria-disabled")}${addAttribute(choice.title, "title")}${addAttribute([
    "flex min-h-9 min-w-[70px] items-center justify-center rounded-full px-3 text-[11px] font-bold transition-all",
    choice.current ? "cursor-default bg-white text-blue-600 shadow-sm dark:bg-blue-500/15 dark:text-blue-400" : "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
  ], "class:list")} data-astro-cid-iemtoba4>${choice.label}</a>`)}</div></div>`);
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/LanguageSwitcher.astro", void 0);

const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = path.dirname(__filename$1);
const getMenuPath = () => {
  const paths = [
    path.join(process.cwd(), "src", "data", "menus.json"),
    path.join(__dirname$1, "..", "data", "menus.json"),
    path.join(__dirname$1, "..", "..", "src", "data", "menus.json")
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return paths[0];
};
const MENUS_FILE = getMenuPath();
const DEFAULT_MENUS = {
  header: [],
  footer: [],
  footerInfo: {
    copyrightName: "XBSTACK",
    copyrightUrl: "/",
    beianText: "Build Assets. See the World.",
    beianUrl: "#"
  }
};
function getSiteMenus() {
  if (typeof process === "undefined") return DEFAULT_MENUS;
  try {
    if (fs.existsSync(MENUS_FILE)) {
      const data = fs.readFileSync(MENUS_FILE, "utf-8");
      const parsed = JSON.parse(data);
      return {
        header: parsed.header || [],
        footer: parsed.footer || [],
        footerInfo: parsed.footerInfo || DEFAULT_MENUS.footerInfo,
        footerLegal: parsed.footerLegal || []
      };
    }
  } catch (e) {
    console.error("❌ 菜单读取失败:", e);
  }
  return DEFAULT_MENUS;
}
const ENGLISH_MENU_LABELS = {
  "/ai/": "AI",
  "/ai/agent/": "Agents",
  "/ai/langgraph/": "LangGraph",
  "/ai/mcp/": "MCP",
  "/ai/workflow/": "Workflow",
  "/tools/": "Tools",
  "/tools/compound-calculator/": "Compound Calculator",
  "/tools/ai-finance/": "AI Finance Analyzer",
  "/tools/lunest/": "Lunest",
  "/horizon/": "Horizon",
  "/investing/": "Investing",
  "/horizon/reading/": "Reading",
  "/investing/thoughts/": "Thinking",
  "/life/": "Lens",
  "/life/hiking/": "Outdoor",
  "/life/photo/": "Photography",
  "/life/gear/": "Gear Lab",
  "/about/": "About"
};
const toEnglishRoute = (url) => {
  if (!url.startsWith("/")) return url;
  if (url.startsWith("/en/")) return url;
  return url === "/" ? "/en/" : `/en${url}`;
};
const localizeMenuItem = (item) => ({
  ...item,
  name: ENGLISH_MENU_LABELS[item.url] || item.name,
  url: toEnglishRoute(item.url),
  children: item.children?.map(localizeMenuItem)
});
function getLocalizedHeaderMenu(lang = "zh-CN") {
  const header = getSiteMenus().header || [];
  return String(lang).toLowerCase().startsWith("en") ? header.map(localizeMenuItem) : header;
}

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://www.xbstack.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "zh-CN", alternates = [] } = Astro2.props;
  const { pathname } = Astro2.url;
  const isEnglish = lang.toLowerCase().startsWith("en");
  const homeHref = isEnglish ? "/en/" : "/";
  const menu = getLocalizedHeaderMenu(lang);
  const isActive = (path) => {
    if (path === "/" || path === "/en/") return pathname === path;
    return pathname === path || pathname.startsWith(path);
  };
  const buildTime = /* @__PURE__ */ new Date();
  const formatClock = (timeZone) => buildTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZone
  });
  const initialClocks = {
    nyc: formatClock("America/New_York"),
    ldn: formatClock("Europe/London"),
    gy: formatClock("Asia/Shanghai")
  };
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="w-full z-[500] sticky top-0"> <div class="container px-3 lg:px-8 max-w-[1440px] mx-auto py-4 md:py-6"> <div class="header-main relative group transition-all duration-500"> <div class="absolute inset-0 rounded-[35px] header-main-bg shadow-sm dark:shadow-[0_8px_50px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-white/10"></div> <nav class="relative z-10 p-2 flex items-center min-h-[64px]"> <!-- Logo (\u65CB\u8F6C & \u547C\u5438\u706F) --> <div class="ml-4 flex-shrink-0"> <a', ' class="flex items-center group/logo"> <div class="relative flex-none isolate w-10 h-10"> <img', ' alt="XBSTACK" width="40" height="40" decoding="async" class="relative z-10 object-contain w-full h-full group-hover/logo:rotate-[360deg] transition-all duration-700"> <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 z-20 animate-pulse"></div> </div> <div class="flex flex-col ml-3 text-left"> <span class="text-xl font-black italic tracking-tighter bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:from-white dark:via-sky-400 dark:to-white bg-clip-text text-transparent uppercase font-brand leading-none">XBSTACK</span> <span class="text-[8px] font-mono font-bold text-green-500/70 uppercase tracking-widest leading-none mt-1">System Status: Online</span> </div> </a> </div> <!-- \u684C\u9762\u7AEF\u5BFC\u822A (\u65B0 IA \u67B6\u6784) --> <ul class="hidden xl:flex items-center gap-1 ml-10"> ', ' </ul> <!-- \u529F\u80FD\u533A\u57DF (\u65F6\u949F & \u641C\u7D22) --> <div class="flex items-center gap-3 ml-auto pr-4 relative z-[110]"> <div class="hidden 2xl:flex items-center gap-4 mr-4 border-r border-slate-200 dark:border-white/10 pr-6 text-right transition-all"> <div class="flex flex-col items-end"><span class="text-[7px] font-black text-slate-400 uppercase">NYC</span><time id="clock-nyc" class="text-[9px] font-mono text-slate-500 font-bold" aria-label="New York time">', '</time></div> <div class="flex flex-col items-end"><span class="text-[7px] font-black text-slate-400 uppercase">LDN</span><time id="clock-ldn" class="text-[9px] font-mono text-slate-500 font-bold" aria-label="London time">', '</time></div> <div class="flex flex-col items-end"><span class="text-[7px] font-black text-blue-500 uppercase italic">GY</span><time id="clock-gy" class="text-[9px] font-mono text-slate-900 dark:text-white font-bold" aria-label="Guiyang time">', '</time></div> </div> <div class="hidden sm:block"> ', ' </div> <div class="flex items-center gap-1.5"> <button id="global-search-trigger" type="button"', ' class="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-500 bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-full transition-all shadow-sm backdrop-blur-md cursor-pointer">', '</button> <div class="w-10 h-10 flex items-center justify-center bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-full hover:border-blue-500 transition-all">', '</div> </div> </div> <!-- \u79FB\u52A8\u7AEF Toggle --> <div class="xl:hidden flex items-center ml-2"> <button id="mobile-menu-trigger" type="button"', ' aria-controls="mobile-menu" aria-expanded="false" class="w-10 h-10 flex items-center justify-center bg-white/20 dark:bg-black/20 rounded-full border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-white"> ', ' </button> </div> </nav> </div> </div>  <div id="mobile-menu" class="fixed inset-0 z-[600] pointer-events-none invisible"> <div id="mobile-menu-overlay" class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-500"></div> <aside id="mobile-menu-panel" class="absolute top-0 right-0 bottom-0 w-[300px] bg-white dark:bg-[#0B1020] border-l border-slate-200 dark:border-white/10 translate-x-full transition-transform duration-500 flex flex-col"> <div class="h-[72px] flex items-center justify-between px-6 border-b border-slate-100 dark:border-white/5"> <span class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">', '</span> <button id="mobile-menu-close" type="button"', ' class="text-slate-400 hover:text-slate-600 dark:hover:text-white">', '</button> </div> <div class="border-b border-slate-100 px-6 py-4 dark:border-white/5 sm:hidden"> ', ' </div> <nav class="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1"> ', " </nav> </aside> </div>  <script>\n    function updateClocks() {\n      const now = new Date();\n      const format = (tz) => now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: tz });\n      if (document.getElementById('clock-nyc')) document.getElementById('clock-nyc').innerText = format('America/New_York');\n      if (document.getElementById('clock-ldn')) document.getElementById('clock-ldn').innerText = format('Europe/London');\n      if (document.getElementById('clock-gy')) document.getElementById('clock-gy').innerText = format('Asia/Shanghai');\n    }\n    document.addEventListener('astro:page-load', () => { \n      updateClocks(); \n      setInterval(updateClocks, 60000);\n      const searchTrigger = document.getElementById('global-search-trigger');\n      if (searchTrigger) {\n        searchTrigger.addEventListener('click', (e) => {\n          e.preventDefault();\n          window.dispatchEvent(new CustomEvent('xbstack:open-search'));\n        });\n      }\n      // Mobile Logic\n      const trigger = document.getElementById('mobile-menu-trigger');\n      const close = document.getElementById('mobile-menu-close');\n      const menu = document.getElementById('mobile-menu');\n      const overlay = document.getElementById('mobile-menu-overlay');\n      const panel = document.getElementById('mobile-menu-panel');\n      const toggleMenu = (open) => {\n        if (!menu || !overlay || !panel) return;\n        trigger?.setAttribute('aria-expanded', open ? 'true' : 'false');\n        const englishUi = document.documentElement.lang.toLowerCase().startsWith('en');\n        trigger?.setAttribute('aria-label', open\n          ? (englishUi ? 'Close navigation menu' : '\u5173\u95ED\u5BFC\u822A\u83DC\u5355')\n          : (englishUi ? 'Open navigation menu' : '\u6253\u5F00\u5BFC\u822A\u83DC\u5355'));\n        if (open) {\n          menu.classList.remove('invisible', 'pointer-events-none');\n          overlay.classList.add('opacity-100');\n          panel.classList.remove('translate-x-full');\n          document.body.style.overflow = 'hidden';\n          close?.focus();\n        } else {\n          overlay.classList.remove('opacity-100');\n          panel.classList.add('translate-x-full');\n          document.body.style.overflow = '';\n          setTimeout(() => { menu.classList.add('invisible', 'pointer-events-none'); }, 500);\n          trigger?.focus();\n        }\n      };\n      if (trigger) trigger.addEventListener('click', () => toggleMenu(true));\n      if (close) close.addEventListener('click', () => toggleMenu(false));\n      if (overlay) overlay.addEventListener('click', () => toggleMenu(false));\n    });\n    updateClocks();\n  <\/script> </header>"])), maybeRenderHead(), addAttribute(homeHref, "href"), addAttribute(SITE_INFO.LOGO_IMAGE, "src"), menu.map((item) => renderTemplate`<li class="relative group/item"> <a${addAttribute(item.url, "href")}${addAttribute(`nav-link px-5 py-2.5 rounded-full font-black text-[12px] tracking-[0.12em] uppercase transition-all duration-500 relative flex items-center gap-2 ${isActive(item.url) ? "text-blue-600 dark:text-blue-400 bg-blue-500/5" : "text-slate-900 dark:text-slate-400 hover:text-blue-500 hover:bg-white/5"}`, "class")}> ${item.name} ${item.children && renderTemplate`${renderComponent($$result, "FaChevronDown", FaChevronDown, { "size": 8, "className": "group-hover/item:rotate-180 transition-transform duration-300 opacity-30" })}`} </a> ${item.children && renderTemplate`<div class="submenu-container absolute top-full left-1/2 -translate-x-1/2 pt-4 invisible opacity-0 translate-y-4 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 z-[300]"> <ul class="submenu-list flex flex-col gap-1 p-2 rounded-[24px] border border-slate-200 dark:border-white/10 backdrop-blur-xl w-max min-w-[200px] shadow-2xl bg-white/90 dark:bg-[#0B1020]/90"> ${item.children.map((child) => renderTemplate`<li><a${addAttribute(child.url, "href")} class="block px-5 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-500/5 transition-all italic">${child.name}</a></li>`)} </ul> </div>`} </li>`), initialClocks.nyc, initialClocks.ldn, initialClocks.gy, renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "lang": lang, "alternates": alternates, "variant": "desktop" }), addAttribute(isEnglish ? "Open site search" : "\u6253\u5F00\u7AD9\u5185\u641C\u7D22", "aria-label"), renderComponent($$result, "IoSearch", IoSearch, {}), renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, {}), addAttribute(isEnglish ? "Open navigation menu" : "\u6253\u5F00\u5BFC\u822A\u83DC\u5355", "aria-label"), renderComponent($$result, "FaBars", FaBars, {}), isEnglish ? "Systems Menu" : "\u7CFB\u7EDF\u83DC\u5355", addAttribute(isEnglish ? "Close navigation menu" : "\u5173\u95ED\u5BFC\u822A\u83DC\u5355", "aria-label"), renderComponent($$result, "FaTimes", FaTimes, { "size": 20 }), renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "lang": lang, "alternates": alternates, "variant": "mobile" }), menu.map((item) => renderTemplate`<div class="space-y-1"> <a${addAttribute(item.url, "href")}${addAttribute(`px-6 py-4 rounded-2xl text-lg font-black tracking-tight italic uppercase transition-all flex items-center justify-between ${isActive(item.url) ? "text-blue-500 bg-blue-500/5" : "text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-white"}`, "class")}> ${item.name} ${item.children && renderTemplate`${renderComponent($$result, "FaChevronDown", FaChevronDown, { "size": 10, "className": "opacity-30" })}`} </a> ${item.children && renderTemplate`<div class="pl-8 flex flex-col gap-1"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.url, "href")} class="px-6 py-3 rounded-xl text-sm font-bold italic text-slate-500 dark:text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-tight">${child.name}</a>`)} </div>`} </div>`));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/Header.astro", void 0);

const $$Astro$2 = createAstro("https://www.xbstack.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "zh-CN" } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
  const topicLinks = getLocalizedHeaderMenu(lang).filter((item) => Array.isArray(item.children) && item.children.length > 0).slice(0, 4).map((item) => ({
    title: item.name,
    items: item.children || []
  }));
  let social = {
    github: "https://github.com/xbstack/my-blog-public",
    email: "xbstack@163.com",
    wechat: "/assets/xbstack-wechat-qr.webp",
    wechatNickname: "\u8D35\u5DDE\u6237\u5916"
  };
  try {
    const settingsPath = path.join(process.cwd(), "src", "data", "settings.json");
    const raw = fs.readFileSync(settingsPath, "utf-8");
    const settings = JSON.parse(raw);
    if (settings.social) social = { ...social, ...settings.social };
  } catch {
  }
  const legalLinks = isEnglish ? [
    { name: "Archive", url: "/en/archive/" },
    { name: "Privacy", url: "/en/privacy/" },
    { name: "Terms", url: "/en/tos/" },
    { name: "Disclosure", url: "/en/disclosure/" },
    { name: "Sitemap", url: "/sitemap-index.xml" },
    { name: "AI Index", url: "/llms.txt" }
  ] : [
    { name: "\u6587\u7AE0\u5F52\u6863", url: "/archive/" },
    { name: "\u9690\u79C1\u653F\u7B56", url: "/privacy/" },
    { name: "\u670D\u52A1\u6761\u6B3E", url: "/tos/" },
    { name: "\u514D\u8D23\u58F0\u660E", url: "/disclosure/" },
    { name: "\u7F51\u7AD9\u5730\u56FE", url: "/sitemap-index.xml" },
    { name: "AI \u7D22\u5F15", url: "/llms.txt" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="container mx-auto mt-32 animate-fadeUp px-4 pb-16 lg:px-8"> <div class="group relative rounded-[60px] border border-slate-200 bg-white p-10 shadow-2xl transition-all dark:border-white/10 dark:bg-[#0B1020] md:p-16"> <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[60px] opacity-20 dark:opacity-40"> <div class="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] transition-transform duration-1000 group-hover:scale-125"></div> <div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] transition-transform duration-1000 group-hover:scale-125"></div> </div> <div class="relative z-10 grid grid-cols-1 gap-12 border-b border-slate-100 pb-16 text-left dark:border-white/5 md:grid-cols-2 xl:grid-cols-12"> <div class="flex flex-col justify-between space-y-8 xl:col-span-4"> <div> <div class="mb-8 flex items-center gap-4"> <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-lg dark:border-white/10 dark:bg-white/5"> <img${addAttribute(SITE_INFO.LOGO_IMAGE, "src")} alt="XBSTACK" width="48" height="48" loading="lazy" decoding="async" class="h-full w-full object-contain"> </div> <span class="font-brand text-2xl font-black uppercase italic leading-none tracking-tighter text-blue-500">XBSTACK</span> </div> <div class="space-y-6"> <p class="text-2xl font-bold italic leading-tight tracking-tight text-slate-900 dark:text-slate-50"> ${isEnglish ? "\u201CLook High. Build Low.\u201D" : "\u201C\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002\u201D"} </p> <p class="max-w-sm text-[13px] font-bold leading-relaxed text-slate-600 dark:text-slate-400"> ${isEnglish ? "An independent developer asset system covering AI engineering, product tools, investing decisions, reading systems and outdoor field notes." : "\u8FD9\u662F\u4E00\u4E2A\u7531\u5168\u6808\u5F00\u53D1\u8005\u4E0E\u7406\u6027\u6295\u8D44\u8005\u6784\u5EFA\u7684\u6570\u5B57\u4E3B\u6743\u5B9E\u9A8C\u573A\u3002\u8BB0\u5F55\u4E0D\u88AB\u65F6\u95F4\u4FB5\u8680\u7684\u786C\u6838\u903B\u8F91\u4E0E\u5B9E\u6218\u8BB0\u5F55\u3002"} </p> </div> </div> <div class="flex items-center gap-4 pt-4"> <span class="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"> ${isEnglish ? "Built by Xiaobai" : "\u4E3B\u7406\u4EBA\uFF1A\u5C0F\u767D"} </span> </div> </div> <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-5"> ${topicLinks.map((column) => renderTemplate`<div class="space-y-6"> <p class="text-xs font-black uppercase italic tracking-[0.3em] text-blue-600 dark:text-blue-500">${column.title}</p> <ul class="space-y-4"> ${column.items.map((item) => renderTemplate`<li><a${addAttribute(item.url, "href")} class="text-[13px] font-black uppercase italic tracking-wider text-slate-800 transition-colors hover:text-blue-500 dark:text-slate-400">${item.name}</a></li>`)} </ul> </div>`)} </div> <div class="space-y-8 xl:col-span-3"> <p class="text-xs font-black uppercase italic tracking-[0.3em] text-slate-500 dark:text-slate-400">Systems Connect</p> <div class="flex flex-col gap-3"> <button type="button" data-wechat-qr="/assets/xbstack-wechat-qr.webp" class="wechat-trigger group/wechat flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-left transition-all hover:border-blue-500 dark:border-white/5 dark:bg-white/5"> ${renderComponent($$result, "FaWeixin", FaWeixin, { "className": "h-5 w-5 text-green-500" })} <div class="flex flex-col"> <span class="text-[12px] font-black text-slate-900 dark:text-slate-200">${isEnglish ? "WeChat: Guizhou Outdoor" : "\u516C\u4F17\u53F7\uFF1AXBSTACK\uFF08\u76EE\u524D\u540D\u79F0\uFF1A\u8D35\u5DDE\u6237\u5916\uFF09"}</span> <span class="text-[11px] font-bold leading-relaxed text-slate-600 dark:text-slate-300"> ${isEnglish ? "Chinese-language hiking routes and direct outdoor field reports from Guizhou." : "\u8BB0\u5F55\u8D35\u5DDE\u5F92\u6B65\u3001\u591C\u722C\u3001\u8DEF\u7EBF\u5B9E\u6D4B\u548C\u5C0F\u767D\u7684\u771F\u5B9E\u6237\u5916\u7ECF\u5386\uFF1BAI \u5F00\u53D1\u3001\u5DE5\u5177\u4EA7\u54C1\u4E0E\u6295\u8D44\u590D\u76D8\u4E3B\u8981\u53D1\u5E03\u5728 XBSTACK \u7F51\u7AD9\u3002"} </span> </div> </button> <a${addAttribute(social.github || "https://github.com/xbstack/my-blog-public", "href")} target="_blank" rel="noopener noreferrer" class="group/github flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-blue-500 dark:border-white/5 dark:bg-white/5"> ${renderComponent($$result, "FaGithub", FaGithub, { "className": "h-5 w-5 text-slate-900 dark:text-white" })} <div class="flex flex-col"><span class="text-[12px] font-black text-slate-900 dark:text-slate-200">GitHub: XBSTACK Lab</span><span class="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Source Code</span></div> </a> <a${addAttribute(`mailto:${social.email || "xbstack@163.com"}`, "href")} class="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-sky-500 dark:border-white/5 dark:bg-white/5"> ${renderComponent($$result, "FaEnvelope", FaEnvelope, { "className": "h-5 w-5 text-sky-500" })} <div class="flex flex-col"><span class="text-[12px] font-black text-slate-900 dark:text-slate-200">${social.email || "xbstack@163.com"}</span><span class="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Email</span></div> </a> </div> </div> </div> <div class="mt-12 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"> <div class="flex flex-wrap gap-8"> <div class="space-y-1"> <p class="text-xs font-black uppercase tracking-widest text-orange-700 dark:text-orange-500">${isEnglish ? "Risk Notice" : "\u98CE\u9669\u58F0\u660E"}</p> <p class="text-[10px] font-bold italic text-slate-500">${isEnglish ? "Content is informational and does not constitute investment advice." : "\u5185\u5BB9\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002\u6295\u8D44\u6709\u98CE\u9669\uFF0C\u5165\u5E02\u9700\u8C28\u614E\u3002"}</p> </div> <div class="space-y-1"> <p class="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-500">${isEnglish ? "Copyright" : "\u7248\u6743\u4FDD\u62A4"}</p> <p class="text-[10px] font-bold text-slate-500">${isEnglish ? "Original XBSTACK content may not be republished or scraped without permission." : "\u5185\u5BB9\u7248\u6743\u5F52 XBSTACK \u6240\u6709\u3002\u7981\u6B62\u975E\u6CD5\u91C7\u96C6\u3002"}</p> </div> </div> <div class="flex w-full flex-col items-end gap-5 lg:w-auto"> <div class="flex flex-wrap justify-end gap-6"> ${legalLinks.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="text-[11px] font-black uppercase italic text-slate-500 underline decoration-dotted transition-colors hover:text-blue-500">${item.name}</a>`)} </div> <div class="flex flex-wrap justify-end gap-3"> ${!isEnglish && renderTemplate`<a href="https://www.foreverblog.cn/go.html" target="_blank" rel="noopener noreferrer" class="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-[10px] font-black uppercase italic text-slate-500 transition-all hover:text-orange-500 dark:border-white/10 dark:bg-white/5">十年之约</a>`} ${!isEnglish && renderTemplate`<a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener noreferrer" class="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-[10px] font-black uppercase italic text-slate-500 transition-all hover:text-orange-500 dark:border-white/10 dark:bg-white/5">开往</a>`} <a${addAttribute(isEnglish ? "/en/rss.xml" : "/rss.xml", "href")} class="rounded-xl border border-blue-600/20 bg-blue-600/10 px-4 py-2 text-[10px] font-black text-blue-700 shadow-sm transition-all hover:bg-blue-500 hover:text-white dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">${isEnglish ? "English RSS" : "RSS \u8BA2\u9605"}</a> </div> </div> </div> <div class="mt-8 flex items-center justify-between border-t border-slate-100 pt-8 dark:border-white/5"> <div class="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 opacity-50">&copy; ${currentYear} XBSTACK. LABS_ACTIVE_v6.6</div> <div class="flex items-center gap-2"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span><span class="text-[9px] font-black uppercase italic tracking-widest text-emerald-600/60">Built Independently</span></div> </div> </div> </footer>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/Footer.astro", void 0);

const backgroundDay = new Proxy({"src":"/_astro/macos2.hYF-Pyun.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/beijingchaoyang/MyWeb/blog/src/assets/backgrounds/macos2.webp";
							}
							
							return target[name];
						}
					});

const backgroundNight = new Proxy({"src":"/_astro/macos2-night.DwJ7amhx.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/beijingchaoyang/MyWeb/blog/src/assets/backgrounds/macos2-night.webp";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="app-background" class="fixed inset-0 z-[-1] h-full w-full pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500"> <div id="app-background-image" class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-500"', "", ` aria-hidden="true"></div> <div class="absolute inset-0 bg-[#DFE1E6]/90 dark:bg-transparent backdrop-blur-[6px] pointer-events-none"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f611,transparent_50%)] dark:hidden pointer-events-none"></div> <div class="absolute inset-0 opacity-[0.08] dark:opacity-[0.03] pointer-events-none mix-blend-multiply" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+');"></div> </div> <script>
  (() => {
    const bindBackground = () => {
      const root = document.documentElement;
      const background = document.getElementById('app-background-image');
      if (!background || background.dataset.themeObserverBound === 'true') return;

      const applyBackground = () => {
        const source = root.classList.contains('dark') ? background.dataset.night : background.dataset.day;
        if (!source) return;
        const nextValue = \`url("\${source}")\`;
        if (background.style.backgroundImage !== nextValue) {
          background.style.backgroundImage = nextValue;
        }
      };

      applyBackground();
      const observer = new MutationObserver(applyBackground);
      observer.observe(root, { attributes: true, attributeFilter: ['class'] });
      background.dataset.themeObserverBound = 'true';
    };

    bindBackground();
    document.addEventListener('astro:page-load', bindBackground);
  })();
<\/script>`], ["", '<div id="app-background" class="fixed inset-0 z-[-1] h-full w-full pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500"> <div id="app-background-image" class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-500"', "", ` aria-hidden="true"></div> <div class="absolute inset-0 bg-[#DFE1E6]/90 dark:bg-transparent backdrop-blur-[6px] pointer-events-none"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f611,transparent_50%)] dark:hidden pointer-events-none"></div> <div class="absolute inset-0 opacity-[0.08] dark:opacity-[0.03] pointer-events-none mix-blend-multiply" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+');"></div> </div> <script>
  (() => {
    const bindBackground = () => {
      const root = document.documentElement;
      const background = document.getElementById('app-background-image');
      if (!background || background.dataset.themeObserverBound === 'true') return;

      const applyBackground = () => {
        const source = root.classList.contains('dark') ? background.dataset.night : background.dataset.day;
        if (!source) return;
        const nextValue = \\\`url("\\\${source}")\\\`;
        if (background.style.backgroundImage !== nextValue) {
          background.style.backgroundImage = nextValue;
        }
      };

      applyBackground();
      const observer = new MutationObserver(applyBackground);
      observer.observe(root, { attributes: true, attributeFilter: ['class'] });
      background.dataset.themeObserverBound = 'true';
    };

    bindBackground();
    document.addEventListener('astro:page-load', bindBackground);
  })();
<\/script>`])), maybeRenderHead(), addAttribute(backgroundDay.src, "data-day"), addAttribute(backgroundNight.src, "data-night"));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/Background.astro", void 0);

function GlobalLightbox() {
  const lightboxRef = useRef(null);
  useEffect(() => {
    const handleTriggerClick = (e) => {
      const trigger = e.target.closest(".lightbox-trigger");
      if (!trigger) return;
      if (trigger.dataset.type === "video") return;
      if (trigger.dataset.pswpWidth && trigger.dataset.pswpHeight) return;
      e.preventDefault();
      e.stopPropagation();
      const href = trigger.getAttribute("href");
      if (!href) return;
      const img = new Image();
      img.src = href;
      document.body.style.cursor = "wait";
      img.onload = () => {
        trigger.dataset.pswpWidth = String(img.naturalWidth);
        trigger.dataset.pswpHeight = String(img.naturalHeight);
        document.body.style.cursor = "default";
        trigger.click();
      };
      img.onerror = () => {
        document.body.style.cursor = "default";
        console.error("Failed to load image for Lightbox:", href);
      };
    };
    document.addEventListener("click", handleTriggerClick, true);
    const lightbox = new PhotoSwipeLightbox({
      gallery: "body",
      children: ".lightbox-trigger",
      pswpModule: () => import('photoswipe'),
      // UI 配置
      bgOpacity: 0.8,
      // 配合 backdrop-filter
      paddingFn: (viewportSize) => ({
        top: viewportSize.y < 600 ? 20 : 40,
        bottom: viewportSize.y < 600 ? 20 : 40,
        left: viewportSize.x < 600 ? 20 : 40,
        right: viewportSize.x < 600 ? 20 : 40
      }),
      wheelToZoom: true,
      // 动画与过渡
      showHideAnimationType: "zoom"
    });
    lightbox.on("contentLoad", (e) => {
      const { content, isLazy } = e;
      if (content.data.type === "video") {
        e.preventDefault();
        content.element = document.createElement("div");
        content.element.className = "pswp__content pswp__video-container";
        content.element.style.width = "100%";
        content.element.style.height = "100%";
        content.element.style.display = "flex";
        content.element.style.justifyContent = "center";
        content.element.style.alignItems = "center";
        const video = document.createElement("video");
        video.src = content.data.src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.style.maxWidth = "100%";
        video.style.maxHeight = "100%";
        video.style.boxShadow = "0 0 50px rgba(0,0,0,0.5)";
        video.style.borderRadius = "8px";
        content.element.appendChild(video);
      }
    });
    lightbox.on("uiRegister", function() {
      lightbox.pswp.ui.registerElement({
        name: "download-button",
        order: 9,
        isButton: true,
        tagName: "a",
        html: {
          isCustomSVG: true,
          inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: "pswp__icn-download"
        },
        onInit: (el, pswp) => {
          el.setAttribute("download", "");
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener");
          pswp.on("change", () => {
            if (pswp.currSlide?.data?.src) {
              el.href = pswp.currSlide.data.src;
            }
          });
        }
      });
    });
    const styleId = "lightbox-frosted-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .pswp__bg {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(10, 10, 10, 0.8) !important; /* 黑曜石风格 */
        }
        .pswp__caption__center {
          text-align: center;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: rgba(255, 255, 255, 0.9);
        }
      `;
      document.head.appendChild(style);
    }
    lightbox.init();
    lightboxRef.current = lightbox;
    return () => {
      document.removeEventListener("click", handleTriggerClick, true);
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);
  return null;
}

const AffiliatePopup = ({ id, name: initialName, inviteCode: initialInvite, rewardText: initialReward, link: initialLink, children } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ name: initialName, inviteCode: initialInvite, rewardText: initialReward, link: initialLink, type: "reward" });
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const handleGlobalOpen = (e) => {
      const payload = e.detail;
      setData({
        ...payload,
        type: payload.inviteCode ? "reward" : "redirect"
      });
      setIsOpen(true);
    };
    window.addEventListener("xbstack:open-affiliate", handleGlobalOpen);
    return () => window.removeEventListener("xbstack:open-affiliate", handleGlobalOpen);
  }, []);
  const handleClose = () => setIsOpen(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    if (data.inviteCode) {
      navigator.clipboard.writeText(data.inviteCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const handleProceed = (e) => {
    e.preventDefault();
    if (data.link) {
      window.open(data.link, "_blank", "nofollow noopener");
      setIsOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children && /* @__PURE__ */ jsx("div", { onClick: () => setIsOpen(true), className: "cursor-pointer h-full w-full", children }),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-fadeIn", onClick: handleClose }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg bg-white dark:bg-[#0B0D11] border border-slate-200 dark:border-white/10 rounded-[45px] shadow-2xl overflow-hidden animate-zoomIn text-left", children: [
        /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-0 w-full h-32 ${data.type === "reward" ? "bg-orange-500/10" : "bg-blue-500/10"}` }),
        /* @__PURE__ */ jsx("button", { onClick: handleClose, className: "absolute top-8 right-8 p-2 text-slate-400 hover:text-white transition-colors z-20", children: /* @__PURE__ */ jsx(FaTimes, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "p-10 md:p-14 relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-10 border shadow-inner ${data.type === "reward" ? "bg-orange-500/10 border-orange-500/20 text-orange-500" : "bg-blue-500/10 border-blue-500/20 text-blue-500"}`, children: data.type === "reward" ? /* @__PURE__ */ jsx(FaGift, {}) : /* @__PURE__ */ jsx(FaGlobeAmericas, { className: "animate-spin-slow" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter", children: data.type === "reward" ? "专属福利确认" : "安全跳转提示" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10", children: data.type === "reward" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            "您正在获取 ",
            /* @__PURE__ */ jsx("span", { className: "text-orange-500 font-black", children: data.name }),
            " 的专属福利。请复制邀请码以确保权益。"
          ] }) : /* @__PURE__ */ jsx(Fragment, { children: "即将离开本站，请注意隐私安全即可。" }) }),
          data.type === "reward" ? /* @__PURE__ */ jsxs("div", { className: "space-y-6 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase text-slate-400 tracking-widest italic", children: "Invite Code / 邀请码" }),
                copied && /* @__PURE__ */ jsx("span", { className: "text-[10px] text-green-500 font-black animate-pulse", children: "已复制!" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-mono font-black text-orange-600 dark:text-orange-500 tracking-tighter", children: data.inviteCode }),
                /* @__PURE__ */ jsx("button", { onClick: handleCopy, className: "p-3.5 rounded-2xl bg-orange-500 text-white shadow-lg hover:scale-105 active:scale-95 transition-transform", children: /* @__PURE__ */ jsx(FaCopy, {}) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(FaInfoCircle, { className: "mt-1 text-orange-500 shrink-0" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-orange-600 dark:text-orange-400 leading-relaxed", children: data.rewardText })
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-[35px] bg-blue-500/5 border border-blue-500/10 mb-10 text-center relative overflow-hidden group", children: [
            /* @__PURE__ */ jsx(FaShieldAlt, { className: "absolute -bottom-4 -right-4 text-blue-500/10 text-8xl" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-blue-600 dark:text-blue-400 leading-relaxed italic relative z-10", children: '"安全审计已通过。我们将为您在新窗口打开官方页面。祝您在数字丛林的补给顺利。" —— 小白' })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleProceed,
              className: `w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center justify-center gap-3 ${data.type === "reward" ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"}`,
              children: [
                data.type === "reward" ? "复制并前往官网" : "确认安全跳转",
                " ",
                /* @__PURE__ */ jsx(FaExternalLinkAlt, {})
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};

const $$Astro$1 = createAstro("https://www.xbstack.com");
const $$WechatPopup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WechatPopup;
  const { lang = "zh-CN" } = Astro2.props;
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const qrSrc = "/assets/xbstack-wechat-qr.webp";
  const copy = isEnglish ? {
    eyebrow: "Join the Journey",
    title: "Explore Further \xB7 Build for the Long Term",
    subtitle: "Outdoor Field Notes \xB7 Independent Development \xB7 Investing Systems",
    qrAlt: "QR code for the Guizhou Outdoor WeChat public account",
    hoverItems: [
      "Field-tested Guizhou hiking routes",
      "AI tools and independent products",
      "Investing systems and long-term reviews"
    ],
    hoverCta: "Open the full profile",
    closeAria: "Close WeChat public-account dialog",
    sections: [
      {
        title: "Outdoor \xB7 Field-tested Guizhou routes",
        description: "Practical notes on trail conditions, supplies, risks, and exit options."
      },
      {
        title: "Independent Development \xB7 AI tools and products",
        description: "From real user needs to launch reviews and durable digital products."
      },
      {
        title: "Investing \xB7 Compounding, risk, and long-term thinking",
        description: "Investment systems, market observations, and decision reviews\u2014not financial advice."
      }
    ],
    followLead: "Scan to follow the WeChat public account",
    accountName: "\u8D35\u5DDE\u6237\u5916 (Guizhou Outdoor)",
    followDescription: "Get new field routes, independent-development notes, and investing reviews.",
    confirm: "CLOSE"
  } : {
    eyebrow: "Join the Journey",
    title: "\u4E00\u8D77\u63A2\u7D22 \xB7 \u4E00\u8D77\u6210\u957F",
    subtitle: "\u6237\u5916\u63A2\u7D22 \xB7 \u72EC\u7ACB\u5F00\u53D1 \xB7 \u6295\u8D44\u601D\u8003",
    qrAlt: "\u5FAE\u4FE1\u516C\u4F17\u53F7\u8D35\u5DDE\u6237\u5916\u4E8C\u7EF4\u7801",
    hoverItems: ["\u8D35\u5DDE\u5F92\u6B65\u4E0E\u8DEF\u7EBF\u5B9E\u6D4B", "AI \u5DE5\u5177\u4E0E\u72EC\u7ACB\u4EA7\u54C1", "\u6295\u8D44\u4F53\u7CFB\u4E0E\u957F\u671F\u590D\u76D8"],
    hoverCta: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u540D\u7247",
    closeAria: "\u5173\u95ED\u5FAE\u4FE1\u516C\u4F17\u53F7\u5F39\u7A97",
    sections: [
      {
        title: "\u6237\u5916\u5F92\u6B65 \xB7 \u8D35\u5DDE\u8DEF\u7EBF\u5B9E\u63A2\u4E0E\u5206\u4EAB",
        description: "\u8BB0\u5F55\u6BCF\u4E00\u6B21\u51FA\u53D1\uFF0C\u63D0\u4F9B\u771F\u5B9E\u8DEF\u51B5\u3001\u8865\u7ED9\u3001\u98CE\u9669\u548C\u4E0B\u64A4\u4FE1\u606F\u3002"
      },
      {
        title: "\u72EC\u7ACB\u5F00\u53D1 \xB7 AI\u3001\u5DE5\u5177\u4E0E\u4EA7\u54C1\u5B9E\u6218",
        description: "\u4ECE\u771F\u5B9E\u9700\u6C42\u5230\u4E0A\u7EBF\u590D\u76D8\uFF0C\u6301\u7EED\u6784\u5EFA\u53EF\u957F\u671F\u79EF\u7D2F\u7684\u6570\u5B57\u4EA7\u54C1\u3002"
      },
      {
        title: "\u6295\u8D44\u601D\u8003 \xB7 \u590D\u5229\u3001\u98CE\u9669\u4E0E\u957F\u671F\u4E3B\u4E49",
        description: "\u5206\u4EAB\u6295\u8D44\u4F53\u7CFB\u3001\u5E02\u573A\u89C2\u5BDF\u548C\u4E2A\u4EBA\u51B3\u7B56\u590D\u76D8\uFF0C\u4E0D\u6784\u6210\u6295\u8D44\u5EFA\u8BAE\u3002"
      }
    ],
    followLead: "\u626B\u7801\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7",
    accountName: "\u8D35\u5DDE\u6237\u5916",
    followDescription: "\u83B7\u53D6\u6237\u5916\u8DEF\u7EBF\u3001\u72EC\u7ACB\u5F00\u53D1\u4E0E\u6295\u8D44\u590D\u76D8\u7684\u6700\u65B0\u5185\u5BB9",
    confirm: "\u77E5\u9053\u4E86 / CLOSE"
  };
  return renderTemplate`<!-- 桌面悬停卡：由全局脚本定位到当前公众号入口附近 -->${maybeRenderHead()}<div id="wechat-hover-card" class="fixed z-[9998] hidden w-[300px] pointer-events-none opacity-0 translate-y-2 transition-all duration-200" aria-hidden="true"> <div class="rounded-[30px] border border-white/15 bg-[#0d1728]/95 p-5 text-white shadow-[0_28px_80px_rgba(2,6,23,0.48)] backdrop-blur-2xl"> <div class="text-[9px] font-black uppercase tracking-[0.34em] text-orange-400">${copy.eyebrow}</div> <div class="mt-2 text-xl font-black tracking-tight">${copy.title}</div> <div class="mt-1 text-[11px] font-bold tracking-[0.12em] text-slate-400">${copy.subtitle}</div> <div class="mt-4 grid grid-cols-[112px_1fr] items-center gap-4"> <div class="rounded-[20px] border border-white/10 bg-[#060b14] p-2.5 shadow-inner"> <img id="wechat-hover-qr"${addAttribute(qrSrc, "src")} width="360" height="360"${addAttribute(copy.qrAlt, "alt")} class="block aspect-square w-full rounded-xl bg-white object-contain"> </div> <div class="space-y-2 text-[11px] font-bold leading-relaxed text-slate-300"> <p>${copy.hoverItems[0]}</p> <p>${copy.hoverItems[1]}</p> <p>${copy.hoverItems[2]}</p> </div> </div> <div class="mt-4 border-t border-white/10 pt-3 text-center text-[11px] font-black text-slate-300"> ${copy.hoverCta} </div> </div> </div> <!-- 全局点击弹窗 --> <div id="wechat-modal" class="fixed inset-0 z-[10000] hidden items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="wechat-modal-title" aria-hidden="true"> <button id="wechat-modal-backdrop" type="button"${addAttribute(copy.closeAria, "aria-label")} class="absolute inset-0 cursor-default bg-slate-950/86 backdrop-blur-xl"></button> <div id="wechat-modal-content" class="relative max-h-[94vh] w-full max-w-[460px] scale-95 overflow-y-auto rounded-[38px] border border-slate-500/45 bg-[#0d1728] text-white opacity-0 shadow-[0_40px_140px_rgba(0,0,0,0.68)] transition-all duration-300 sm:rounded-[50px]"> <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"> <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div> <div class="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]"></div> </div> <button id="wechat-modal-close" type="button"${addAttribute(copy.closeAria, "aria-label")} class="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"> ${renderComponent($$result, "FaTimes", FaTimes, {})} </button> <div class="relative z-10 px-6 pb-6 pt-10 sm:px-10 sm:pb-9 sm:pt-12"> <header class="text-center"> <div class="text-[10px] font-black uppercase tracking-[0.44em] text-orange-400 sm:text-xs">${copy.eyebrow}</div> <h2 id="wechat-modal-title" class="mt-4 text-3xl font-black tracking-tight text-white sm:text-[38px]" style="color: #ffffff !important; -webkit-text-fill-color: #ffffff !important;">${copy.title}</h2> <p class="mt-3 text-sm font-bold tracking-[0.16em] text-slate-400 sm:text-base">${copy.subtitle}</p> </header> <div class="mx-auto mt-7 max-w-[300px] rounded-[34px] border border-white/10 bg-[#070d17] p-5 shadow-inner sm:mt-8"> <div class="rounded-[24px] bg-white p-3"> <img id="wechat-modal-qr"${addAttribute(qrSrc, "src")} width="360" height="360" decoding="async"${addAttribute(copy.qrAlt, "alt")} class="block aspect-square w-full object-contain"> </div> </div> <div class="mt-7 divide-y divide-white/10 sm:mt-8"> <div class="grid grid-cols-[42px_1fr] gap-3 py-3.5"> <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-lg text-orange-400">${renderComponent($$result, "FaMountain", FaMountain, {})}</div> <div> <div class="text-sm font-black sm:text-base">${copy.sections[0].title}</div> <p class="mt-1 text-xs font-bold leading-relaxed text-slate-400">${copy.sections[0].description}</p> </div> </div> <div class="grid grid-cols-[42px_1fr] gap-3 py-3.5"> <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-lg text-orange-400">${renderComponent($$result, "FaCode", FaCode, {})}</div> <div> <div class="text-sm font-black sm:text-base">${copy.sections[1].title}</div> <p class="mt-1 text-xs font-bold leading-relaxed text-slate-400">${copy.sections[1].description}</p> </div> </div> <div class="grid grid-cols-[42px_1fr] gap-3 py-3.5"> <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-lg text-orange-400">${renderComponent($$result, "FaChartLine", FaChartLine, {})}</div> <div> <div class="text-sm font-black sm:text-base">${copy.sections[2].title}</div> <p class="mt-1 text-xs font-bold leading-relaxed text-slate-400">${copy.sections[2].description}</p> </div> </div> </div> <div class="mt-6 text-center text-sm font-black leading-relaxed text-slate-300"> ${copy.followLead} <span class="text-orange-400">“${copy.accountName}”</span> <p class="mt-1 text-xs font-bold text-slate-500">${copy.followDescription}</p> </div> <button id="wechat-modal-confirm" type="button" class="mt-7 w-full rounded-[24px] bg-white px-6 py-4 text-sm font-black tracking-[0.12em] text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 active:translate-y-0"> ${copy.confirm} </button> </div> </div> </div> ${renderScript($$result, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/WechatPopup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/WechatPopup.astro", void 0);

const SearchBoot = ({ lang = "zh-CN" }) => {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const [SearchComponent, setSearchComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const loadSearch = useCallback(async () => {
    if (isLoading || SearchComponent) {
      setShouldRender(true);
      return;
    }
    setIsLoading(true);
    setShouldRender(true);
    try {
      const { default: LoadedSearch } = await import('./Search_C9etbJuR.mjs');
      setSearchComponent(() => LoadedSearch);
    } catch (error) {
      console.error("[XBSTACK Search] lazy component load failed", error);
    } finally {
      setIsLoading(false);
    }
  }, [SearchComponent, isLoading]);
  useEffect(() => {
    const handleOpen = (event) => {
      event?.preventDefault?.();
      loadSearch();
    };
    const handleKeyDown = (event) => {
      const target = event.target;
      const tagName = target?.tagName || "";
      const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tagName) || target?.isContentEditable;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        loadSearch();
        return;
      }
      if (!isTyping && event.key === "/") {
        event.preventDefault();
        loadSearch();
      }
    };
    window.addEventListener("xbstack:open-search", handleOpen);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("xbstack:open-search", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loadSearch]);
  if (!shouldRender) return null;
  if (!SearchComponent) {
    return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/80 text-white backdrop-blur-xl", role: "status", "aria-live": "polite", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/10 px-8 py-6 text-center shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-black uppercase tracking-[0.24em] text-orange-300", children: "Loading Search" }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm font-bold text-slate-200", children: isEnglish ? "Loading XBSTACK search…" : "正在加载 XBSTACK 搜索…" })
    ] }) });
  }
  return /* @__PURE__ */ jsx(SearchComponent, { initialOpen: true, lang });
};

const byPath = /* #__PURE__ */ JSON.parse("{\"/notes/notes-philosophy/\":{\"zh-CN\":\"/notes/notes-philosophy/\",\"en\":\"/en/notes/notes-philosophy/\"},\"/en/notes/notes-philosophy/\":{\"zh-CN\":\"/notes/notes-philosophy/\",\"en\":\"/en/notes/notes-philosophy/\"},\"/notes/site-milestone-think-and-do/\":{\"zh-CN\":\"/notes/site-milestone-think-and-do/\",\"en\":\"/en/notes/site-milestone-think-and-do/\"},\"/en/notes/site-milestone-think-and-do/\":{\"zh-CN\":\"/notes/site-milestone-think-and-do/\",\"en\":\"/en/notes/site-milestone-think-and-do/\"},\"/notes/ai-career-safety-line/\":{\"zh-CN\":\"/notes/ai-career-safety-line/\",\"en\":\"/en/notes/ai-career-safety-line/\"},\"/en/notes/ai-career-safety-line/\":{\"zh-CN\":\"/notes/ai-career-safety-line/\",\"en\":\"/en/notes/ai-career-safety-line/\"},\"/newsletter/manifesto/\":{\"zh-CN\":\"/newsletter/manifesto/\",\"en\":\"/en/newsletter/manifesto/\"},\"/en/newsletter/manifesto/\":{\"zh-CN\":\"/newsletter/manifesto/\",\"en\":\"/en/newsletter/manifesto/\"},\"/newsletter/vol-001/\":{\"zh-CN\":\"/newsletter/vol-001/\",\"en\":\"/en/newsletter/vol-001/\"},\"/en/newsletter/vol-001/\":{\"zh-CN\":\"/newsletter/vol-001/\",\"en\":\"/en/newsletter/vol-001/\"},\"/newsletter/vol-002/\":{\"zh-CN\":\"/newsletter/vol-002/\",\"en\":\"/en/newsletter/vol-002/\"},\"/en/newsletter/vol-002/\":{\"zh-CN\":\"/newsletter/vol-002/\",\"en\":\"/en/newsletter/vol-002/\"},\"/horizon/reading/poor-charlies-almanack/\":{\"zh-CN\":\"/horizon/reading/poor-charlies-almanack/\",\"en\":\"/en/horizon/reading/poor-charlies-almanack/\"},\"/en/horizon/reading/poor-charlies-almanack/\":{\"zh-CN\":\"/horizon/reading/poor-charlies-almanack/\",\"en\":\"/en/horizon/reading/poor-charlies-almanack/\"},\"/horizon/reading/naval-ravikant/\":{\"zh-CN\":\"/horizon/reading/naval-ravikant/\",\"en\":\"/en/horizon/reading/naval-ravikant/\"},\"/en/horizon/reading/naval-ravikant/\":{\"zh-CN\":\"/horizon/reading/naval-ravikant/\",\"en\":\"/en/horizon/reading/naval-ravikant/\"},\"/horizon/reading/principles-notes/\":{\"zh-CN\":\"/horizon/reading/principles-notes/\",\"en\":\"/en/horizon/reading/principles-notes/\"},\"/en/horizon/reading/principles-notes/\":{\"zh-CN\":\"/horizon/reading/principles-notes/\",\"en\":\"/en/horizon/reading/principles-notes/\"},\"/horizon/reading/antifragile-reading-notes/\":{\"zh-CN\":\"/horizon/reading/antifragile-reading-notes/\",\"en\":\"/en/horizon/reading/antifragile-reading-notes/\"},\"/en/horizon/reading/antifragile-reading-notes/\":{\"zh-CN\":\"/horizon/reading/antifragile-reading-notes/\",\"en\":\"/en/horizon/reading/antifragile-reading-notes/\"},\"/horizon/reading/hackers-and-painters/\":{\"zh-CN\":\"/horizon/reading/hackers-and-painters/\",\"en\":\"/en/horizon/reading/hackers-and-painters/\"},\"/en/horizon/reading/hackers-and-painters/\":{\"zh-CN\":\"/horizon/reading/hackers-and-painters/\",\"en\":\"/en/horizon/reading/hackers-and-painters/\"},\"/investing/2025-investment-review/\":{\"zh-CN\":\"/investing/2025-investment-review/\",\"en\":\"/en/investing/2025-investment-review/\"},\"/en/investing/2025-investment-review/\":{\"zh-CN\":\"/investing/2025-investment-review/\",\"en\":\"/en/investing/2025-investment-review/\"},\"/horizon/reading/the-great-game-reading-notes/\":{\"zh-CN\":\"/horizon/reading/the-great-game-reading-notes/\",\"en\":\"/en/horizon/reading/the-great-game-reading-notes/\"},\"/en/horizon/reading/the-great-game-reading-notes/\":{\"zh-CN\":\"/horizon/reading/the-great-game-reading-notes/\",\"en\":\"/en/horizon/reading/the-great-game-reading-notes/\"},\"/investing/leek-self-cultivation-01/\":{\"zh-CN\":\"/investing/leek-self-cultivation-01/\",\"en\":\"/en/investing/leek-self-cultivation-01/\"},\"/en/investing/leek-self-cultivation-01/\":{\"zh-CN\":\"/investing/leek-self-cultivation-01/\",\"en\":\"/en/investing/leek-self-cultivation-01/\"},\"/ai/ai-agent-complete-guide/\":{\"zh-CN\":\"/ai/ai-agent-complete-guide/\",\"en\":\"/en/ai/ai-agent-complete-guide/\"},\"/en/ai/ai-agent-complete-guide/\":{\"zh-CN\":\"/ai/ai-agent-complete-guide/\",\"en\":\"/en/ai/ai-agent-complete-guide/\"},\"/ai/ai-agent-customer-support-automation/\":{\"zh-CN\":\"/ai/ai-agent-customer-support-automation/\",\"en\":\"/en/ai/ai-agent-customer-support-automation/\"},\"/en/ai/ai-agent-customer-support-automation/\":{\"zh-CN\":\"/ai/ai-agent-customer-support-automation/\",\"en\":\"/en/ai/ai-agent-customer-support-automation/\"},\"/ai/ai-agent-architecture/\":{\"zh-CN\":\"/ai/ai-agent-architecture/\",\"en\":\"/en/ai/ai-agent-architecture/\"},\"/en/ai/ai-agent-architecture/\":{\"zh-CN\":\"/ai/ai-agent-architecture/\",\"en\":\"/en/ai/ai-agent-architecture/\"},\"/ai/ai-agent-future-of-work/\":{\"zh-CN\":\"/ai/ai-agent-future-of-work/\",\"en\":\"/en/ai/ai-agent-future-of-work/\"},\"/en/ai/ai-agent-future-of-work/\":{\"zh-CN\":\"/ai/ai-agent-future-of-work/\",\"en\":\"/en/ai/ai-agent-future-of-work/\"},\"/ai/ai-agent-deployment/\":{\"zh-CN\":\"/ai/ai-agent-deployment/\",\"en\":\"/en/ai/ai-agent-deployment/\"},\"/en/ai/ai-agent-deployment/\":{\"zh-CN\":\"/ai/ai-agent-deployment/\",\"en\":\"/en/ai/ai-agent-deployment/\"},\"/ai/ai-agent-evaluation-guide/\":{\"zh-CN\":\"/ai/ai-agent-evaluation-guide/\",\"en\":\"/en/ai/ai-agent-evaluation-guide/\"},\"/en/ai/ai-agent-evaluation-guide/\":{\"zh-CN\":\"/ai/ai-agent-evaluation-guide/\",\"en\":\"/en/ai/ai-agent-evaluation-guide/\"},\"/ai/ai-agent-langchain-tutorial/\":{\"zh-CN\":\"/ai/ai-agent-langchain-tutorial/\",\"en\":\"/en/ai/ai-agent-langchain-tutorial/\"},\"/en/ai/ai-agent-langchain-tutorial/\":{\"zh-CN\":\"/ai/ai-agent-langchain-tutorial/\",\"en\":\"/en/ai/ai-agent-langchain-tutorial/\"},\"/ai/ai-agent-memory-implementation/\":{\"zh-CN\":\"/ai/ai-agent-memory-implementation/\",\"en\":\"/en/ai/ai-agent-memory-implementation/\"},\"/en/ai/ai-agent-memory-implementation/\":{\"zh-CN\":\"/ai/ai-agent-memory-implementation/\",\"en\":\"/en/ai/ai-agent-memory-implementation/\"},\"/ai/ai-agent-autogen-tutorial/\":{\"zh-CN\":\"/ai/ai-agent-autogen-tutorial/\",\"en\":\"/en/ai/ai-agent-autogen-tutorial/\"},\"/en/ai/ai-agent-autogen-tutorial/\":{\"zh-CN\":\"/ai/ai-agent-autogen-tutorial/\",\"en\":\"/en/ai/ai-agent-autogen-tutorial/\"},\"/ai/ai-agent-full-handbook/\":{\"zh-CN\":\"/ai/ai-agent-full-handbook/\",\"en\":\"/en/ai/ai-agent-full-handbook/\"},\"/en/ai/ai-agent-full-handbook/\":{\"zh-CN\":\"/ai/ai-agent-full-handbook/\",\"en\":\"/en/ai/ai-agent-full-handbook/\"},\"/ai/ai-agent-framework-comparison/\":{\"zh-CN\":\"/ai/ai-agent-framework-comparison/\",\"en\":\"/en/ai/ai-agent-framework-comparison/\"},\"/en/ai/ai-agent-framework-comparison/\":{\"zh-CN\":\"/ai/ai-agent-framework-comparison/\",\"en\":\"/en/ai/ai-agent-framework-comparison/\"},\"/ai/ai-agent-production-governance/\":{\"zh-CN\":\"/ai/ai-agent-production-governance/\",\"en\":\"/en/ai/ai-agent-production-governance/\"},\"/en/ai/ai-agent-production-governance/\":{\"zh-CN\":\"/ai/ai-agent-production-governance/\",\"en\":\"/en/ai/ai-agent-production-governance/\"},\"/ai/ai-agent-protocols-and-frameworks/\":{\"zh-CN\":\"/ai/ai-agent-protocols-and-frameworks/\",\"en\":\"/en/ai/ai-agent-protocols-and-frameworks/\"},\"/en/ai/ai-agent-protocols-and-frameworks/\":{\"zh-CN\":\"/ai/ai-agent-protocols-and-frameworks/\",\"en\":\"/en/ai/ai-agent-protocols-and-frameworks/\"},\"/ai/ai-agent-security/\":{\"zh-CN\":\"/ai/ai-agent-security/\",\"en\":\"/en/ai/ai-agent-security/\"},\"/en/ai/ai-agent-security/\":{\"zh-CN\":\"/ai/ai-agent-security/\",\"en\":\"/en/ai/ai-agent-security/\"},\"/ai/ai-agent-planning/\":{\"zh-CN\":\"/ai/ai-agent-planning/\",\"en\":\"/en/ai/ai-agent-planning/\"},\"/en/ai/ai-agent-planning/\":{\"zh-CN\":\"/ai/ai-agent-planning/\",\"en\":\"/en/ai/ai-agent-planning/\"},\"/ai/ai-agent-vs-workflow-automation/\":{\"zh-CN\":\"/ai/ai-agent-vs-workflow-automation/\",\"en\":\"/en/ai/ai-agent-vs-workflow-automation/\"},\"/en/ai/ai-agent-vs-workflow-automation/\":{\"zh-CN\":\"/ai/ai-agent-vs-workflow-automation/\",\"en\":\"/en/ai/ai-agent-vs-workflow-automation/\"},\"/ai/ai-agent-rag-integration/\":{\"zh-CN\":\"/ai/ai-agent-rag-integration/\",\"en\":\"/en/ai/ai-agent-rag-integration/\"},\"/en/ai/ai-agent-rag-integration/\":{\"zh-CN\":\"/ai/ai-agent-rag-integration/\",\"en\":\"/en/ai/ai-agent-rag-integration/\"},\"/ai/ai-agent-vs-ai-assistant/\":{\"zh-CN\":\"/ai/ai-agent-vs-ai-assistant/\",\"en\":\"/en/ai/ai-agent-vs-ai-assistant/\"},\"/en/ai/ai-agent-vs-ai-assistant/\":{\"zh-CN\":\"/ai/ai-agent-vs-ai-assistant/\",\"en\":\"/en/ai/ai-agent-vs-ai-assistant/\"},\"/ai/ai-cms-pitfalls/\":{\"zh-CN\":\"/ai/ai-cms-pitfalls/\",\"en\":\"/en/ai/ai-cms-pitfalls/\"},\"/en/ai/ai-cms-pitfalls/\":{\"zh-CN\":\"/ai/ai-cms-pitfalls/\",\"en\":\"/en/ai/ai-cms-pitfalls/\"},\"/ai/ai-agent-observability/\":{\"zh-CN\":\"/ai/ai-agent-observability/\",\"en\":\"/en/ai/ai-agent-observability/\"},\"/en/ai/ai-agent-observability/\":{\"zh-CN\":\"/ai/ai-agent-observability/\",\"en\":\"/en/ai/ai-agent-observability/\"},\"/ai/ai-customer-operations-agents/\":{\"zh-CN\":\"/ai/ai-customer-operations-agents/\",\"en\":\"/en/ai/ai-customer-operations-agents/\"},\"/en/ai/ai-customer-operations-agents/\":{\"zh-CN\":\"/ai/ai-customer-operations-agents/\",\"en\":\"/en/ai/ai-customer-operations-agents/\"},\"/ai/ai-customer-support-vs-ai-ticket-routing-agent/\":{\"zh-CN\":\"/ai/ai-customer-support-vs-ai-ticket-routing-agent/\",\"en\":\"/en/ai/ai-customer-support-vs-ai-ticket-routing-agent/\"},\"/en/ai/ai-customer-support-vs-ai-ticket-routing-agent/\":{\"zh-CN\":\"/ai/ai-customer-support-vs-ai-ticket-routing-agent/\",\"en\":\"/en/ai/ai-customer-support-vs-ai-ticket-routing-agent/\"},\"/ai/ai-agent-seo-content-workflow/\":{\"zh-CN\":\"/ai/ai-agent-seo-content-workflow/\",\"en\":\"/en/ai/ai-agent-seo-content-workflow/\"},\"/en/ai/ai-agent-seo-content-workflow/\":{\"zh-CN\":\"/ai/ai-agent-seo-content-workflow/\",\"en\":\"/en/ai/ai-agent-seo-content-workflow/\"},\"/ai/ai-agent-saas-mvp/\":{\"zh-CN\":\"/ai/ai-agent-saas-mvp/\",\"en\":\"/en/ai/ai-agent-saas-mvp/\"},\"/en/ai/ai-agent-saas-mvp/\":{\"zh-CN\":\"/ai/ai-agent-saas-mvp/\",\"en\":\"/en/ai/ai-agent-saas-mvp/\"},\"/ai/ai-agent-protocol-ecosystem/\":{\"zh-CN\":\"/ai/ai-agent-protocol-ecosystem/\",\"en\":\"/en/ai/ai-agent-protocol-ecosystem/\"},\"/en/ai/ai-agent-protocol-ecosystem/\":{\"zh-CN\":\"/ai/ai-agent-protocol-ecosystem/\",\"en\":\"/en/ai/ai-agent-protocol-ecosystem/\"},\"/ai/ai-agent-workflow/\":{\"zh-CN\":\"/ai/ai-agent-workflow/\",\"en\":\"/en/ai/ai-agent-workflow/\"},\"/en/ai/ai-agent-workflow/\":{\"zh-CN\":\"/ai/ai-agent-workflow/\",\"en\":\"/en/ai/ai-agent-workflow/\"},\"/ai/ai-code-review-agent-comparison/\":{\"zh-CN\":\"/ai/ai-code-review-agent-comparison/\",\"en\":\"/en/ai/ai-code-review-agent-comparison/\"},\"/en/ai/ai-code-review-agent-comparison/\":{\"zh-CN\":\"/ai/ai-code-review-agent-comparison/\",\"en\":\"/en/ai/ai-code-review-agent-comparison/\"},\"/ai/ai-document-intelligence-agents/\":{\"zh-CN\":\"/ai/ai-document-intelligence-agents/\",\"en\":\"/en/ai/ai-document-intelligence-agents/\"},\"/en/ai/ai-document-intelligence-agents/\":{\"zh-CN\":\"/ai/ai-document-intelligence-agents/\",\"en\":\"/en/ai/ai-document-intelligence-agents/\"},\"/ai/ai-agent-tool-use/\":{\"zh-CN\":\"/ai/ai-agent-tool-use/\",\"en\":\"/en/ai/ai-agent-tool-use/\"},\"/en/ai/ai-agent-tool-use/\":{\"zh-CN\":\"/ai/ai-agent-tool-use/\",\"en\":\"/en/ai/ai-agent-tool-use/\"},\"/ai/ai-developer-operations-agents/\":{\"zh-CN\":\"/ai/ai-developer-operations-agents/\",\"en\":\"/en/ai/ai-developer-operations-agents/\"},\"/en/ai/ai-developer-operations-agents/\":{\"zh-CN\":\"/ai/ai-developer-operations-agents/\",\"en\":\"/en/ai/ai-developer-operations-agents/\"},\"/ai/ai-financial-report-analyzer-architecture/\":{\"zh-CN\":\"/ai/ai-financial-report-analyzer-architecture/\",\"en\":\"/en/ai/ai-financial-report-analyzer-architecture/\"},\"/en/ai/ai-financial-report-analyzer-architecture/\":{\"zh-CN\":\"/ai/ai-financial-report-analyzer-architecture/\",\"en\":\"/en/ai/ai-financial-report-analyzer-architecture/\"},\"/ai/ai-finance-automation-agents/\":{\"zh-CN\":\"/ai/ai-finance-automation-agents/\",\"en\":\"/en/ai/ai-finance-automation-agents/\"},\"/en/ai/ai-finance-automation-agents/\":{\"zh-CN\":\"/ai/ai-finance-automation-agents/\",\"en\":\"/en/ai/ai-finance-automation-agents/\"},\"/ai/ai-finance-report-7-steps/\":{\"zh-CN\":\"/ai/ai-finance-report-7-steps/\",\"en\":\"/en/ai/ai-finance-report-7-steps/\"},\"/en/ai/ai-finance-report-7-steps/\":{\"zh-CN\":\"/ai/ai-finance-report-7-steps/\",\"en\":\"/en/ai/ai-finance-report-7-steps/\"},\"/ai/ai-finance-analysis-tool/\":{\"zh-CN\":\"/ai/ai-finance-analysis-tool/\",\"en\":\"/en/ai/ai-finance-analysis-tool/\"},\"/en/ai/ai-finance-analysis-tool/\":{\"zh-CN\":\"/ai/ai-finance-analysis-tool/\",\"en\":\"/en/ai/ai-finance-analysis-tool/\"},\"/ai/ai-sales-assistant-vs-lead-scoring/\":{\"zh-CN\":\"/ai/ai-sales-assistant-vs-lead-scoring/\",\"en\":\"/en/ai/ai-sales-assistant-vs-lead-scoring/\"},\"/en/ai/ai-sales-assistant-vs-lead-scoring/\":{\"zh-CN\":\"/ai/ai-sales-assistant-vs-lead-scoring/\",\"en\":\"/en/ai/ai-sales-assistant-vs-lead-scoring/\"},\"/ai/ai-github-issue-triage-agent/\":{\"zh-CN\":\"/ai/ai-github-issue-triage-agent/\",\"en\":\"/en/ai/ai-github-issue-triage-agent/\"},\"/en/ai/ai-github-issue-triage-agent/\":{\"zh-CN\":\"/ai/ai-github-issue-triage-agent/\",\"en\":\"/en/ai/ai-github-issue-triage-agent/\"},\"/ai/ai-financial-report-task-queue/\":{\"zh-CN\":\"/ai/ai-financial-report-task-queue/\",\"en\":\"/en/ai/ai-financial-report-task-queue/\"},\"/en/ai/ai-financial-report-task-queue/\":{\"zh-CN\":\"/ai/ai-financial-report-task-queue/\",\"en\":\"/en/ai/ai-financial-report-task-queue/\"},\"/ai/astro-100-score-practice/\":{\"zh-CN\":\"/ai/astro-100-score-practice/\",\"en\":\"/en/ai/astro-100-score-practice/\"},\"/en/ai/astro-100-score-practice/\":{\"zh-CN\":\"/ai/astro-100-score-practice/\",\"en\":\"/en/ai/astro-100-score-practice/\"},\"/ai/astro-gallery-practice/\":{\"zh-CN\":\"/ai/astro-gallery-practice/\",\"en\":\"/en/ai/astro-gallery-practice/\"},\"/en/ai/astro-gallery-practice/\":{\"zh-CN\":\"/ai/astro-gallery-practice/\",\"en\":\"/en/ai/astro-gallery-practice/\"},\"/ai/ai-email-routing-agent/\":{\"zh-CN\":\"/ai/ai-email-routing-agent/\",\"en\":\"/en/ai/ai-email-routing-agent/\"},\"/en/ai/ai-email-routing-agent/\":{\"zh-CN\":\"/ai/ai-email-routing-agent/\",\"en\":\"/en/ai/ai-email-routing-agent/\"},\"/ai/ai-log-analysis-agent/\":{\"zh-CN\":\"/ai/ai-log-analysis-agent/\",\"en\":\"/en/ai/ai-log-analysis-agent/\"},\"/en/ai/ai-log-analysis-agent/\":{\"zh-CN\":\"/ai/ai-log-analysis-agent/\",\"en\":\"/en/ai/ai-log-analysis-agent/\"},\"/ai/ai-workflow-automation-production/\":{\"zh-CN\":\"/ai/ai-workflow-automation-production/\",\"en\":\"/en/ai/ai-workflow-automation-production/\"},\"/en/ai/ai-workflow-automation-production/\":{\"zh-CN\":\"/ai/ai-workflow-automation-production/\",\"en\":\"/en/ai/ai-workflow-automation-production/\"},\"/ai/ai-financial-report-evaluation-golden-dataset/\":{\"zh-CN\":\"/ai/ai-financial-report-evaluation-golden-dataset/\",\"en\":\"/en/ai/ai-financial-report-evaluation-golden-dataset/\"},\"/en/ai/ai-financial-report-evaluation-golden-dataset/\":{\"zh-CN\":\"/ai/ai-financial-report-evaluation-golden-dataset/\",\"en\":\"/en/ai/ai-financial-report-evaluation-golden-dataset/\"},\"/\":{\"zh-CN\":\"/\",\"en\":\"/en/\"},\"/en/\":{\"zh-CN\":\"/\",\"en\":\"/en/\"},\"/ai/\":{\"zh-CN\":\"/ai/\",\"en\":\"/en/ai/\"},\"/en/ai/\":{\"zh-CN\":\"/ai/\",\"en\":\"/en/ai/\"},\"/investing/\":{\"zh-CN\":\"/investing/\",\"en\":\"/en/investing/\"},\"/en/investing/\":{\"zh-CN\":\"/investing/\",\"en\":\"/en/investing/\"},\"/horizon/reading/\":{\"zh-CN\":\"/horizon/reading/\",\"en\":\"/en/horizon/reading/\"},\"/en/horizon/reading/\":{\"zh-CN\":\"/horizon/reading/\",\"en\":\"/en/horizon/reading/\"},\"/life/\":{\"zh-CN\":\"/life/\",\"en\":\"/en/life/\"},\"/en/life/\":{\"zh-CN\":\"/life/\",\"en\":\"/en/life/\"},\"/notes/\":{\"zh-CN\":\"/notes/\",\"en\":\"/en/notes/\"},\"/en/notes/\":{\"zh-CN\":\"/notes/\",\"en\":\"/en/notes/\"},\"/newsletter/\":{\"zh-CN\":\"/newsletter/\",\"en\":\"/en/newsletter/\"},\"/en/newsletter/\":{\"zh-CN\":\"/newsletter/\",\"en\":\"/en/newsletter/\"},\"/tools/\":{\"zh-CN\":\"/tools/\",\"en\":\"/en/tools/\"},\"/en/tools/\":{\"zh-CN\":\"/tools/\",\"en\":\"/en/tools/\"},\"/tools/lunest/\":{\"zh-CN\":\"/tools/lunest/\",\"en\":\"/en/tools/lunest/\"},\"/en/tools/lunest/\":{\"zh-CN\":\"/tools/lunest/\",\"en\":\"/en/tools/lunest/\"},\"/tools/ai-finance/\":{\"zh-CN\":\"/tools/ai-finance/\",\"en\":\"/en/tools/ai-finance/\"},\"/en/tools/ai-finance/\":{\"zh-CN\":\"/tools/ai-finance/\",\"en\":\"/en/tools/ai-finance/\"},\"/tools/compound-calculator/\":{\"zh-CN\":\"/tools/compound-calculator/\",\"en\":\"/en/tools/compound-calculator/\"},\"/en/tools/compound-calculator/\":{\"zh-CN\":\"/tools/compound-calculator/\",\"en\":\"/en/tools/compound-calculator/\"},\"/ai/langgraph-observability-agent-trace/\":{\"zh-CN\":\"/ai/langgraph-observability-agent-trace/\",\"en\":\"/en/ai/langgraph-observability-agent-trace/\"},\"/en/ai/langgraph-observability-agent-trace/\":{\"zh-CN\":\"/ai/langgraph-observability-agent-trace/\",\"en\":\"/en/ai/langgraph-observability-agent-trace/\"},\"/about/\":{\"zh-CN\":\"/about/\",\"en\":\"/en/about/\"},\"/en/about/\":{\"zh-CN\":\"/about/\",\"en\":\"/en/about/\"},\"/about/vision/\":{\"zh-CN\":\"/about/vision/\",\"en\":\"/en/about/vision/\"},\"/en/about/vision/\":{\"zh-CN\":\"/about/vision/\",\"en\":\"/en/about/vision/\"},\"/ai/agent/\":{\"zh-CN\":\"/ai/agent/\",\"en\":\"/en/ai/agent/\"},\"/en/ai/agent/\":{\"zh-CN\":\"/ai/agent/\",\"en\":\"/en/ai/agent/\"},\"/ai/langgraph/\":{\"zh-CN\":\"/ai/langgraph/\",\"en\":\"/en/ai/langgraph/\"},\"/en/ai/langgraph/\":{\"zh-CN\":\"/ai/langgraph/\",\"en\":\"/en/ai/langgraph/\"},\"/ai/local-ai/\":{\"zh-CN\":\"/ai/local-ai/\",\"en\":\"/en/ai/local-ai/\"},\"/en/ai/local-ai/\":{\"zh-CN\":\"/ai/local-ai/\",\"en\":\"/en/ai/local-ai/\"},\"/ai/mcp/\":{\"zh-CN\":\"/ai/mcp/\",\"en\":\"/en/ai/mcp/\"},\"/en/ai/mcp/\":{\"zh-CN\":\"/ai/mcp/\",\"en\":\"/en/ai/mcp/\"},\"/ai/model-updates/\":{\"zh-CN\":\"/ai/model-updates/\",\"en\":\"/en/ai/model-updates/\"},\"/en/ai/model-updates/\":{\"zh-CN\":\"/ai/model-updates/\",\"en\":\"/en/ai/model-updates/\"},\"/ai/notes/\":{\"zh-CN\":\"/ai/notes/\",\"en\":\"/en/ai/notes/\"},\"/en/ai/notes/\":{\"zh-CN\":\"/ai/notes/\",\"en\":\"/en/ai/notes/\"},\"/ai/practice/\":{\"zh-CN\":\"/ai/practice/\",\"en\":\"/en/ai/practice/\"},\"/en/ai/practice/\":{\"zh-CN\":\"/ai/practice/\",\"en\":\"/en/ai/practice/\"},\"/ai/tools-lab/\":{\"zh-CN\":\"/ai/tools-lab/\",\"en\":\"/en/ai/tools-lab/\"},\"/en/ai/tools-lab/\":{\"zh-CN\":\"/ai/tools-lab/\",\"en\":\"/en/ai/tools-lab/\"},\"/ai/tools/\":{\"zh-CN\":\"/ai/tools/\",\"en\":\"/en/ai/tools/\"},\"/en/ai/tools/\":{\"zh-CN\":\"/ai/tools/\",\"en\":\"/en/ai/tools/\"},\"/ai/web/\":{\"zh-CN\":\"/ai/web/\",\"en\":\"/en/ai/web/\"},\"/en/ai/web/\":{\"zh-CN\":\"/ai/web/\",\"en\":\"/en/ai/web/\"},\"/ai/workflow/\":{\"zh-CN\":\"/ai/workflow/\",\"en\":\"/en/ai/workflow/\"},\"/en/ai/workflow/\":{\"zh-CN\":\"/ai/workflow/\",\"en\":\"/en/ai/workflow/\"},\"/archive/\":{\"zh-CN\":\"/archive/\",\"en\":\"/en/archive/\"},\"/en/archive/\":{\"zh-CN\":\"/archive/\",\"en\":\"/en/archive/\"},\"/compound-interest/\":{\"zh-CN\":\"/compound-interest/\",\"en\":\"/en/compound-interest/\"},\"/en/compound-interest/\":{\"zh-CN\":\"/compound-interest/\",\"en\":\"/en/compound-interest/\"},\"/contact/\":{\"zh-CN\":\"/contact/\",\"en\":\"/en/contact/\"},\"/en/contact/\":{\"zh-CN\":\"/contact/\",\"en\":\"/en/contact/\"},\"/disclosure/\":{\"zh-CN\":\"/disclosure/\",\"en\":\"/en/disclosure/\"},\"/en/disclosure/\":{\"zh-CN\":\"/disclosure/\",\"en\":\"/en/disclosure/\"},\"/growth/\":{\"zh-CN\":\"/growth/\",\"en\":\"/en/growth/\"},\"/en/growth/\":{\"zh-CN\":\"/growth/\",\"en\":\"/en/growth/\"},\"/guides/\":{\"zh-CN\":\"/guides/\",\"en\":\"/en/guides/\"},\"/en/guides/\":{\"zh-CN\":\"/guides/\",\"en\":\"/en/guides/\"},\"/horizon/\":{\"zh-CN\":\"/horizon/\",\"en\":\"/en/horizon/\"},\"/en/horizon/\":{\"zh-CN\":\"/horizon/\",\"en\":\"/en/horizon/\"},\"/investing/compound/\":{\"zh-CN\":\"/investing/compound/\",\"en\":\"/en/investing/compound/\"},\"/en/investing/compound/\":{\"zh-CN\":\"/investing/compound/\",\"en\":\"/en/investing/compound/\"},\"/investing/fire/\":{\"zh-CN\":\"/investing/fire/\",\"en\":\"/en/investing/fire/\"},\"/en/investing/fire/\":{\"zh-CN\":\"/investing/fire/\",\"en\":\"/en/investing/fire/\"},\"/investing/thoughts/\":{\"zh-CN\":\"/investing/thoughts/\",\"en\":\"/en/investing/thoughts/\"},\"/en/investing/thoughts/\":{\"zh-CN\":\"/investing/thoughts/\",\"en\":\"/en/investing/thoughts/\"},\"/investing/us-stocks/\":{\"zh-CN\":\"/investing/us-stocks/\",\"en\":\"/en/investing/us-stocks/\"},\"/en/investing/us-stocks/\":{\"zh-CN\":\"/investing/us-stocks/\",\"en\":\"/en/investing/us-stocks/\"},\"/life/badminton/\":{\"zh-CN\":\"/life/badminton/\",\"en\":\"/en/life/badminton/\"},\"/en/life/badminton/\":{\"zh-CN\":\"/life/badminton/\",\"en\":\"/en/life/badminton/\"},\"/life/gear/\":{\"zh-CN\":\"/life/gear/\",\"en\":\"/en/life/gear/\"},\"/en/life/gear/\":{\"zh-CN\":\"/life/gear/\",\"en\":\"/en/life/gear/\"},\"/life/hiking/\":{\"zh-CN\":\"/life/hiking/\",\"en\":\"/en/life/hiking/\"},\"/en/life/hiking/\":{\"zh-CN\":\"/life/hiking/\",\"en\":\"/en/life/hiking/\"},\"/life/photo/\":{\"zh-CN\":\"/life/photo/\",\"en\":\"/en/life/photo/\"},\"/en/life/photo/\":{\"zh-CN\":\"/life/photo/\",\"en\":\"/en/life/photo/\"},\"/life/reading/\":{\"zh-CN\":\"/life/reading/\",\"en\":\"/en/life/reading/\"},\"/en/life/reading/\":{\"zh-CN\":\"/life/reading/\",\"en\":\"/en/life/reading/\"},\"/life/road-trip/\":{\"zh-CN\":\"/life/road-trip/\",\"en\":\"/en/life/road-trip/\"},\"/en/life/road-trip/\":{\"zh-CN\":\"/life/road-trip/\",\"en\":\"/en/life/road-trip/\"},\"/links/\":{\"zh-CN\":\"/links/\",\"en\":\"/en/links/\"},\"/en/links/\":{\"zh-CN\":\"/links/\",\"en\":\"/en/links/\"},\"/privacy/\":{\"zh-CN\":\"/privacy/\",\"en\":\"/en/privacy/\"},\"/en/privacy/\":{\"zh-CN\":\"/privacy/\",\"en\":\"/en/privacy/\"},\"/productivity/\":{\"zh-CN\":\"/productivity/\",\"en\":\"/en/productivity/\"},\"/en/productivity/\":{\"zh-CN\":\"/productivity/\",\"en\":\"/en/productivity/\"},\"/productivity/automation/\":{\"zh-CN\":\"/productivity/automation/\",\"en\":\"/en/productivity/automation/\"},\"/en/productivity/automation/\":{\"zh-CN\":\"/productivity/automation/\",\"en\":\"/en/productivity/automation/\"},\"/productivity/content/\":{\"zh-CN\":\"/productivity/content/\",\"en\":\"/en/productivity/content/\"},\"/en/productivity/content/\":{\"zh-CN\":\"/productivity/content/\",\"en\":\"/en/productivity/content/\"},\"/productivity/local-ai/\":{\"zh-CN\":\"/productivity/local-ai/\",\"en\":\"/en/productivity/local-ai/\"},\"/en/productivity/local-ai/\":{\"zh-CN\":\"/productivity/local-ai/\",\"en\":\"/en/productivity/local-ai/\"},\"/productivity/nas/\":{\"zh-CN\":\"/productivity/nas/\",\"en\":\"/en/productivity/nas/\"},\"/en/productivity/nas/\":{\"zh-CN\":\"/productivity/nas/\",\"en\":\"/en/productivity/nas/\"},\"/productivity/notes/\":{\"zh-CN\":\"/productivity/notes/\",\"en\":\"/en/productivity/notes/\"},\"/en/productivity/notes/\":{\"zh-CN\":\"/productivity/notes/\",\"en\":\"/en/productivity/notes/\"},\"/rss/\":{\"zh-CN\":\"/rss/\",\"en\":\"/en/rss/\"},\"/en/rss/\":{\"zh-CN\":\"/rss/\",\"en\":\"/en/rss/\"},\"/search/\":{\"zh-CN\":\"/search/\",\"en\":\"/en/search/\"},\"/en/search/\":{\"zh-CN\":\"/search/\",\"en\":\"/en/search/\"},\"/tags/\":{\"zh-CN\":\"/tags/\",\"en\":\"/en/tags/\"},\"/en/tags/\":{\"zh-CN\":\"/tags/\",\"en\":\"/en/tags/\"},\"/tools/ai-finance/guide/\":{\"zh-CN\":\"/tools/ai-finance/guide/\",\"en\":\"/en/tools/ai-finance/guide/\"},\"/en/tools/ai-finance/guide/\":{\"zh-CN\":\"/tools/ai-finance/guide/\",\"en\":\"/en/tools/ai-finance/guide/\"},\"/tools/apps/\":{\"zh-CN\":\"/tools/apps/\",\"en\":\"/en/tools/apps/\"},\"/en/tools/apps/\":{\"zh-CN\":\"/tools/apps/\",\"en\":\"/en/tools/apps/\"},\"/tools/gear-library/\":{\"zh-CN\":\"/tools/gear-library/\",\"en\":\"/en/tools/gear-library/\"},\"/en/tools/gear-library/\":{\"zh-CN\":\"/tools/gear-library/\",\"en\":\"/en/tools/gear-library/\"},\"/tools/how-to-analyze-financial-reports-with-ai/\":{\"zh-CN\":\"/tools/how-to-analyze-financial-reports-with-ai/\",\"en\":\"/en/tools/how-to-analyze-financial-reports-with-ai/\"},\"/en/tools/how-to-analyze-financial-reports-with-ai/\":{\"zh-CN\":\"/tools/how-to-analyze-financial-reports-with-ai/\",\"en\":\"/en/tools/how-to-analyze-financial-reports-with-ai/\"},\"/tools/labs/\":{\"zh-CN\":\"/tools/labs/\",\"en\":\"/en/tools/labs/\"},\"/en/tools/labs/\":{\"zh-CN\":\"/tools/labs/\",\"en\":\"/en/tools/labs/\"},\"/tools/templates/\":{\"zh-CN\":\"/tools/templates/\",\"en\":\"/en/tools/templates/\"},\"/en/tools/templates/\":{\"zh-CN\":\"/tools/templates/\",\"en\":\"/en/tools/templates/\"},\"/tools/utm-builder/\":{\"zh-CN\":\"/tools/utm-builder/\",\"en\":\"/en/tools/utm-builder/\"},\"/en/tools/utm-builder/\":{\"zh-CN\":\"/tools/utm-builder/\",\"en\":\"/en/tools/utm-builder/\"},\"/tos/\":{\"zh-CN\":\"/tos/\",\"en\":\"/en/tos/\"},\"/en/tos/\":{\"zh-CN\":\"/tos/\",\"en\":\"/en/tos/\"},\"/wechat/\":{\"zh-CN\":\"/wechat/\",\"en\":\"/en/wechat/\"},\"/en/wechat/\":{\"zh-CN\":\"/wechat/\",\"en\":\"/en/wechat/\"},\"/ai/crewai-vs-autogen-for-workflow-automation/\":{\"zh-CN\":\"/ai/crewai-vs-autogen-for-workflow-automation/\",\"en\":\"/en/ai/crewai-vs-autogen-for-workflow-automation/\"},\"/en/ai/crewai-vs-autogen-for-workflow-automation/\":{\"zh-CN\":\"/ai/crewai-vs-autogen-for-workflow-automation/\",\"en\":\"/en/ai/crewai-vs-autogen-for-workflow-automation/\"},\"/ai/clawdbot-tutorial/\":{\"zh-CN\":\"/ai/clawdbot-tutorial/\",\"en\":\"/en/ai/clawdbot-tutorial/\"},\"/en/ai/clawdbot-tutorial/\":{\"zh-CN\":\"/ai/clawdbot-tutorial/\",\"en\":\"/en/ai/clawdbot-tutorial/\"},\"/ai/best-ai-agents-crm-automation/\":{\"zh-CN\":\"/ai/best-ai-agents-crm-automation/\",\"en\":\"/en/ai/best-ai-agents-crm-automation/\"},\"/en/ai/best-ai-agents-crm-automation/\":{\"zh-CN\":\"/ai/best-ai-agents-crm-automation/\",\"en\":\"/en/ai/best-ai-agents-crm-automation/\"},\"/ai/cloudflare-serverless-fullstack/\":{\"zh-CN\":\"/ai/cloudflare-serverless-fullstack/\",\"en\":\"/en/ai/cloudflare-serverless-fullstack/\"},\"/en/ai/cloudflare-serverless-fullstack/\":{\"zh-CN\":\"/ai/cloudflare-serverless-fullstack/\",\"en\":\"/en/ai/cloudflare-serverless-fullstack/\"},\"/ai/crewai-vs-langgraph-for-ai-workflows/\":{\"zh-CN\":\"/ai/crewai-vs-langgraph-for-ai-workflows/\",\"en\":\"/en/ai/crewai-vs-langgraph-for-ai-workflows/\"},\"/en/ai/crewai-vs-langgraph-for-ai-workflows/\":{\"zh-CN\":\"/ai/crewai-vs-langgraph-for-ai-workflows/\",\"en\":\"/en/ai/crewai-vs-langgraph-for-ai-workflows/\"},\"/ai/hermes-agent-analysis/\":{\"zh-CN\":\"/ai/hermes-agent-analysis/\",\"en\":\"/en/ai/hermes-agent-analysis/\"},\"/en/ai/hermes-agent-analysis/\":{\"zh-CN\":\"/ai/hermes-agent-analysis/\",\"en\":\"/en/ai/hermes-agent-analysis/\"},\"/ai/best-ai-support-agents-2026/\":{\"zh-CN\":\"/ai/best-ai-support-agents-2026/\",\"en\":\"/en/ai/best-ai-support-agents-2026/\"},\"/en/ai/best-ai-support-agents-2026/\":{\"zh-CN\":\"/ai/best-ai-support-agents-2026/\",\"en\":\"/en/ai/best-ai-support-agents-2026/\"},\"/ai/comparison-of-ai-document-analysis-agents/\":{\"zh-CN\":\"/ai/comparison-of-ai-document-analysis-agents/\",\"en\":\"/en/ai/comparison-of-ai-document-analysis-agents/\"},\"/en/ai/comparison-of-ai-document-analysis-agents/\":{\"zh-CN\":\"/ai/comparison-of-ai-document-analysis-agents/\",\"en\":\"/en/ai/comparison-of-ai-document-analysis-agents/\"},\"/ai/genai-agents-tutorial/\":{\"zh-CN\":\"/ai/genai-agents-tutorial/\",\"en\":\"/en/ai/genai-agents-tutorial/\"},\"/en/ai/genai-agents-tutorial/\":{\"zh-CN\":\"/ai/genai-agents-tutorial/\",\"en\":\"/en/ai/genai-agents-tutorial/\"},\"/ai/chatgpt-image-to-astro-cover-bridge/\":{\"zh-CN\":\"/ai/chatgpt-image-to-astro-cover-bridge/\",\"en\":\"/en/ai/chatgpt-image-to-astro-cover-bridge/\"},\"/en/ai/chatgpt-image-to-astro-cover-bridge/\":{\"zh-CN\":\"/ai/chatgpt-image-to-astro-cover-bridge/\",\"en\":\"/en/ai/chatgpt-image-to-astro-cover-bridge/\"},\"/ai/how-to-build-ai-customer-feedback-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-customer-feedback-agent/\",\"en\":\"/en/ai/how-to-build-ai-customer-feedback-agent/\"},\"/en/ai/how-to-build-ai-customer-feedback-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-customer-feedback-agent/\",\"en\":\"/en/ai/how-to-build-ai-customer-feedback-agent/\"},\"/ai/agent-memory-system/\":{\"zh-CN\":\"/ai/agent-memory-system/\",\"en\":\"/en/ai/agent-memory-system/\"},\"/en/ai/agent-memory-system/\":{\"zh-CN\":\"/ai/agent-memory-system/\",\"en\":\"/en/ai/agent-memory-system/\"},\"/ai/ai-resume-screening-agent-tutorial/\":{\"zh-CN\":\"/ai/ai-resume-screening-agent-tutorial/\",\"en\":\"/en/ai/ai-resume-screening-agent-tutorial/\"},\"/en/ai/ai-resume-screening-agent-tutorial/\":{\"zh-CN\":\"/ai/ai-resume-screening-agent-tutorial/\",\"en\":\"/en/ai/ai-resume-screening-agent-tutorial/\"},\"/ai/financial-report-pdf-table-extraction/\":{\"zh-CN\":\"/ai/financial-report-pdf-table-extraction/\",\"en\":\"/en/ai/financial-report-pdf-table-extraction/\"},\"/en/ai/financial-report-pdf-table-extraction/\":{\"zh-CN\":\"/ai/financial-report-pdf-table-extraction/\",\"en\":\"/en/ai/financial-report-pdf-table-extraction/\"},\"/ai/ai-ticket-routing-agent/\":{\"zh-CN\":\"/ai/ai-ticket-routing-agent/\",\"en\":\"/en/ai/ai-ticket-routing-agent/\"},\"/en/ai/ai-ticket-routing-agent/\":{\"zh-CN\":\"/ai/ai-ticket-routing-agent/\",\"en\":\"/en/ai/ai-ticket-routing-agent/\"},\"/ai/how-to-build-ai-expense-tracking-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-expense-tracking-agent/\",\"en\":\"/en/ai/how-to-build-ai-expense-tracking-agent/\"},\"/en/ai/how-to-build-ai-expense-tracking-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-expense-tracking-agent/\",\"en\":\"/en/ai/how-to-build-ai-expense-tracking-agent/\"},\"/ai/ai-knowledge-base-agent/\":{\"zh-CN\":\"/ai/ai-knowledge-base-agent/\",\"en\":\"/en/ai/ai-knowledge-base-agent/\"},\"/en/ai/ai-knowledge-base-agent/\":{\"zh-CN\":\"/ai/ai-knowledge-base-agent/\",\"en\":\"/en/ai/ai-knowledge-base-agent/\"},\"/ai/how-to-build-ai-ecommerce-support-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-ecommerce-support-agent/\",\"en\":\"/en/ai/how-to-build-ai-ecommerce-support-agent/\"},\"/en/ai/how-to-build-ai-ecommerce-support-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-ecommerce-support-agent/\",\"en\":\"/en/ai/how-to-build-ai-ecommerce-support-agent/\"},\"/ai/how-to-build-ai-financial-audit-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-financial-audit-agent/\",\"en\":\"/en/ai/how-to-build-ai-financial-audit-agent/\"},\"/en/ai/how-to-build-ai-financial-audit-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-financial-audit-agent/\",\"en\":\"/en/ai/how-to-build-ai-financial-audit-agent/\"},\"/ai/how-to-build-ai-inventory-forecasting-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-inventory-forecasting-agent/\",\"en\":\"/en/ai/how-to-build-ai-inventory-forecasting-agent/\"},\"/en/ai/how-to-build-ai-inventory-forecasting-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-inventory-forecasting-agent/\",\"en\":\"/en/ai/how-to-build-ai-inventory-forecasting-agent/\"},\"/ai/how-to-use-ai-agents-for-data-analysis/\":{\"zh-CN\":\"/ai/how-to-use-ai-agents-for-data-analysis/\",\"en\":\"/en/ai/how-to-use-ai-agents-for-data-analysis/\"},\"/en/ai/how-to-use-ai-agents-for-data-analysis/\":{\"zh-CN\":\"/ai/how-to-use-ai-agents-for-data-analysis/\",\"en\":\"/en/ai/how-to-use-ai-agents-for-data-analysis/\"},\"/ai/genai-agents-deep-dive/\":{\"zh-CN\":\"/ai/genai-agents-deep-dive/\",\"en\":\"/en/ai/genai-agents-deep-dive/\"},\"/en/ai/genai-agents-deep-dive/\":{\"zh-CN\":\"/ai/genai-agents-deep-dive/\",\"en\":\"/en/ai/genai-agents-deep-dive/\"},\"/ai/how-to-build-ai-contract-review-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-contract-review-agent/\",\"en\":\"/en/ai/how-to-build-ai-contract-review-agent/\"},\"/en/ai/how-to-build-ai-contract-review-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-contract-review-agent/\",\"en\":\"/en/ai/how-to-build-ai-contract-review-agent/\"},\"/ai/how-to-build-ai-meeting-summarization-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-meeting-summarization-agent/\",\"en\":\"/en/ai/how-to-build-ai-meeting-summarization-agent/\"},\"/en/ai/how-to-build-ai-meeting-summarization-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-meeting-summarization-agent/\",\"en\":\"/en/ai/how-to-build-ai-meeting-summarization-agent/\"},\"/ai/langchain-nextjs-template-analysis/\":{\"zh-CN\":\"/ai/langchain-nextjs-template-analysis/\",\"en\":\"/en/ai/langchain-nextjs-template-analysis/\"},\"/en/ai/langchain-nextjs-template-analysis/\":{\"zh-CN\":\"/ai/langchain-nextjs-template-analysis/\",\"en\":\"/en/ai/langchain-nextjs-template-analysis/\"},\"/ai/langchain-vs-crewai-for-ai-agents/\":{\"zh-CN\":\"/ai/langchain-vs-crewai-for-ai-agents/\",\"en\":\"/en/ai/langchain-vs-crewai-for-ai-agents/\"},\"/en/ai/langchain-vs-crewai-for-ai-agents/\":{\"zh-CN\":\"/ai/langchain-vs-crewai-for-ai-agents/\",\"en\":\"/en/ai/langchain-vs-crewai-for-ai-agents/\"},\"/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\"},\"/en/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-procurement-invoice-matching-agent/\"},\"/ai/how-to-build-ai-email-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-email-agent/\",\"en\":\"/en/ai/how-to-build-ai-email-agent/\"},\"/en/ai/how-to-build-ai-email-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-email-agent/\",\"en\":\"/en/ai/how-to-build-ai-email-agent/\"},\"/ai/how-to-build-ai-lead-scoring-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-lead-scoring-agent/\",\"en\":\"/en/ai/how-to-build-ai-lead-scoring-agent/\"},\"/en/ai/how-to-build-ai-lead-scoring-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-lead-scoring-agent/\",\"en\":\"/en/ai/how-to-build-ai-lead-scoring-agent/\"},\"/ai/how-to-build-ai-trading-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-trading-agent/\",\"en\":\"/en/ai/how-to-build-ai-trading-agent/\"},\"/en/ai/how-to-build-ai-trading-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-trading-agent/\",\"en\":\"/en/ai/how-to-build-ai-trading-agent/\"},\"/ai/how-to-build-ai-research-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-research-agent/\",\"en\":\"/en/ai/how-to-build-ai-research-agent/\"},\"/en/ai/how-to-build-ai-research-agent/\":{\"zh-CN\":\"/ai/how-to-build-ai-research-agent/\",\"en\":\"/en/ai/how-to-build-ai-research-agent/\"},\"/ai/how-to-build-an-ai-invoice-approval-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-invoice-approval-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-invoice-approval-agent/\"},\"/en/ai/how-to-build-an-ai-invoice-approval-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-invoice-approval-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-invoice-approval-agent/\"},\"/ai/lighthouse-optimization-log/\":{\"zh-CN\":\"/ai/lighthouse-optimization-log/\",\"en\":\"/en/ai/lighthouse-optimization-log/\"},\"/en/ai/lighthouse-optimization-log/\":{\"zh-CN\":\"/ai/lighthouse-optimization-log/\",\"en\":\"/en/ai/lighthouse-optimization-log/\"},\"/ai/langgraph-memory-checkpointing-production-agents/\":{\"zh-CN\":\"/ai/langgraph-memory-checkpointing-production-agents/\",\"en\":\"/en/ai/langgraph-memory-checkpointing-production-agents/\"},\"/en/ai/langgraph-memory-checkpointing-production-agents/\":{\"zh-CN\":\"/ai/langgraph-memory-checkpointing-production-agents/\",\"en\":\"/en/ai/langgraph-memory-checkpointing-production-agents/\"},\"/ai/gemini3-mcp-audit/\":{\"zh-CN\":\"/ai/gemini3-mcp-audit/\",\"en\":\"/en/ai/gemini3-mcp-audit/\"},\"/en/ai/gemini3-mcp-audit/\":{\"zh-CN\":\"/ai/gemini3-mcp-audit/\",\"en\":\"/en/ai/gemini3-mcp-audit/\"},\"/ai/how-to-build-an-ai-expense-approval-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-expense-approval-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-expense-approval-agent/\"},\"/en/ai/how-to-build-an-ai-expense-approval-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-expense-approval-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-expense-approval-agent/\"},\"/ai/how-to-build-an-ai-vendor-management-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-vendor-management-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-vendor-management-agent/\"},\"/en/ai/how-to-build-an-ai-vendor-management-agent/\":{\"zh-CN\":\"/ai/how-to-build-an-ai-vendor-management-agent/\",\"en\":\"/en/ai/how-to-build-an-ai-vendor-management-agent/\"},\"/ai/langgraph-human-in-the-loop-approval/\":{\"zh-CN\":\"/ai/langgraph-human-in-the-loop-approval/\",\"en\":\"/en/ai/langgraph-human-in-the-loop-approval/\"},\"/en/ai/langgraph-human-in-the-loop-approval/\":{\"zh-CN\":\"/ai/langgraph-human-in-the-loop-approval/\",\"en\":\"/en/ai/langgraph-human-in-the-loop-approval/\"},\"/ai/langgraph-supervisor-worker-handoff/\":{\"zh-CN\":\"/ai/langgraph-supervisor-worker-handoff/\",\"en\":\"/en/ai/langgraph-supervisor-worker-handoff/\"},\"/en/ai/langgraph-supervisor-worker-handoff/\":{\"zh-CN\":\"/ai/langgraph-supervisor-worker-handoff/\",\"en\":\"/en/ai/langgraph-supervisor-worker-handoff/\"},\"/ai/langgraph-agent-error-recovery-retry-timeout/\":{\"zh-CN\":\"/ai/langgraph-agent-error-recovery-retry-timeout/\",\"en\":\"/en/ai/langgraph-agent-error-recovery-retry-timeout/\"},\"/en/ai/langgraph-agent-error-recovery-retry-timeout/\":{\"zh-CN\":\"/ai/langgraph-agent-error-recovery-retry-timeout/\",\"en\":\"/en/ai/langgraph-agent-error-recovery-retry-timeout/\"},\"/ai/langgraph-subgraph-worker-state/\":{\"zh-CN\":\"/ai/langgraph-subgraph-worker-state/\",\"en\":\"/en/ai/langgraph-subgraph-worker-state/\"},\"/en/ai/langgraph-subgraph-worker-state/\":{\"zh-CN\":\"/ai/langgraph-subgraph-worker-state/\",\"en\":\"/en/ai/langgraph-subgraph-worker-state/\"},\"/ai/langgraph-checkpointer-memory-sqlite-redis/\":{\"zh-CN\":\"/ai/langgraph-checkpointer-memory-sqlite-redis/\",\"en\":\"/en/ai/langgraph-checkpointer-memory-sqlite-redis/\"},\"/en/ai/langgraph-checkpointer-memory-sqlite-redis/\":{\"zh-CN\":\"/ai/langgraph-checkpointer-memory-sqlite-redis/\",\"en\":\"/en/ai/langgraph-checkpointer-memory-sqlite-redis/\"},\"/ai/mcp-filesystem-server/\":{\"zh-CN\":\"/ai/mcp-filesystem-server/\",\"en\":\"/en/ai/mcp-filesystem-server/\"},\"/en/ai/mcp-filesystem-server/\":{\"zh-CN\":\"/ai/mcp-filesystem-server/\",\"en\":\"/en/ai/mcp-filesystem-server/\"},\"/ai/mcp-oauth-authentication/\":{\"zh-CN\":\"/ai/mcp-oauth-authentication/\",\"en\":\"/en/ai/mcp-oauth-authentication/\"},\"/en/ai/mcp-oauth-authentication/\":{\"zh-CN\":\"/ai/mcp-oauth-authentication/\",\"en\":\"/en/ai/mcp-oauth-authentication/\"},\"/ai/mcp-function-calling-api-gateway-architecture/\":{\"zh-CN\":\"/ai/mcp-function-calling-api-gateway-architecture/\",\"en\":\"/en/ai/mcp-function-calling-api-gateway-architecture/\"},\"/en/ai/mcp-function-calling-api-gateway-architecture/\":{\"zh-CN\":\"/ai/mcp-function-calling-api-gateway-architecture/\",\"en\":\"/en/ai/mcp-function-calling-api-gateway-architecture/\"},\"/ai/langgraph-thread-session-state-isolation/\":{\"zh-CN\":\"/ai/langgraph-thread-session-state-isolation/\",\"en\":\"/en/ai/langgraph-thread-session-state-isolation/\"},\"/en/ai/langgraph-thread-session-state-isolation/\":{\"zh-CN\":\"/ai/langgraph-thread-session-state-isolation/\",\"en\":\"/en/ai/langgraph-thread-session-state-isolation/\"},\"/ai/mcp-protocol-guide/\":{\"zh-CN\":\"/ai/mcp-protocol-guide/\",\"en\":\"/en/ai/mcp-protocol-guide/\"},\"/en/ai/mcp-protocol-guide/\":{\"zh-CN\":\"/ai/mcp-protocol-guide/\",\"en\":\"/en/ai/mcp-protocol-guide/\"},\"/ai/llm-json-schema-financial-report-extraction/\":{\"zh-CN\":\"/ai/llm-json-schema-financial-report-extraction/\",\"en\":\"/en/ai/llm-json-schema-financial-report-extraction/\"},\"/en/ai/llm-json-schema-financial-report-extraction/\":{\"zh-CN\":\"/ai/llm-json-schema-financial-report-extraction/\",\"en\":\"/en/ai/llm-json-schema-financial-report-extraction/\"},\"/ai/mcp-json-rpc-parse-error/\":{\"zh-CN\":\"/ai/mcp-json-rpc-parse-error/\",\"en\":\"/en/ai/mcp-json-rpc-parse-error/\"},\"/en/ai/mcp-json-rpc-parse-error/\":{\"zh-CN\":\"/ai/mcp-json-rpc-parse-error/\",\"en\":\"/en/ai/mcp-json-rpc-parse-error/\"},\"/ai/mcp-protocol-deep-dive/\":{\"zh-CN\":\"/ai/mcp-protocol-deep-dive/\",\"en\":\"/en/ai/mcp-protocol-deep-dive/\"},\"/en/ai/mcp-protocol-deep-dive/\":{\"zh-CN\":\"/ai/mcp-protocol-deep-dive/\",\"en\":\"/en/ai/mcp-protocol-deep-dive/\"},\"/ai/mcp-streamable-http-deployment/\":{\"zh-CN\":\"/ai/mcp-streamable-http-deployment/\",\"en\":\"/en/ai/mcp-streamable-http-deployment/\"},\"/en/ai/mcp-streamable-http-deployment/\":{\"zh-CN\":\"/ai/mcp-streamable-http-deployment/\",\"en\":\"/en/ai/mcp-streamable-http-deployment/\"},\"/ai/mcp-server-production-governance/\":{\"zh-CN\":\"/ai/mcp-server-production-governance/\",\"en\":\"/en/ai/mcp-server-production-governance/\"},\"/en/ai/mcp-server-production-governance/\":{\"zh-CN\":\"/ai/mcp-server-production-governance/\",\"en\":\"/en/ai/mcp-server-production-governance/\"},\"/ai/mcp-tool-call-truncated-fix/\":{\"zh-CN\":\"/ai/mcp-tool-call-truncated-fix/\",\"en\":\"/en/ai/mcp-tool-call-truncated-fix/\"},\"/en/ai/mcp-tool-call-truncated-fix/\":{\"zh-CN\":\"/ai/mcp-tool-call-truncated-fix/\",\"en\":\"/en/ai/mcp-tool-call-truncated-fix/\"},\"/ai/multi-agent-planning/\":{\"zh-CN\":\"/ai/multi-agent-planning/\",\"en\":\"/en/ai/multi-agent-planning/\"},\"/en/ai/multi-agent-planning/\":{\"zh-CN\":\"/ai/multi-agent-planning/\",\"en\":\"/en/ai/multi-agent-planning/\"},\"/ai/mcp-security-best-practices/\":{\"zh-CN\":\"/ai/mcp-security-best-practices/\",\"en\":\"/en/ai/mcp-security-best-practices/\"},\"/en/ai/mcp-security-best-practices/\":{\"zh-CN\":\"/ai/mcp-security-best-practices/\",\"en\":\"/en/ai/mcp-security-best-practices/\"},\"/ai/mcp-vs-semantic-kernel/\":{\"zh-CN\":\"/ai/mcp-vs-semantic-kernel/\",\"en\":\"/en/ai/mcp-vs-semantic-kernel/\"},\"/en/ai/mcp-vs-semantic-kernel/\":{\"zh-CN\":\"/ai/mcp-vs-semantic-kernel/\",\"en\":\"/en/ai/mcp-vs-semantic-kernel/\"},\"/ai/mcp-server-sqlite/\":{\"zh-CN\":\"/ai/mcp-server-sqlite/\",\"en\":\"/en/ai/mcp-server-sqlite/\"},\"/en/ai/mcp-server-sqlite/\":{\"zh-CN\":\"/ai/mcp-server-sqlite/\",\"en\":\"/en/ai/mcp-server-sqlite/\"},\"/ai/multi-agent-systems/\":{\"zh-CN\":\"/ai/multi-agent-systems/\",\"en\":\"/en/ai/multi-agent-systems/\"},\"/en/ai/multi-agent-systems/\":{\"zh-CN\":\"/ai/multi-agent-systems/\",\"en\":\"/en/ai/multi-agent-systems/\"},\"/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\":{\"zh-CN\":\"/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\",\"en\":\"/en/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\"},\"/en/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\":{\"zh-CN\":\"/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\",\"en\":\"/en/ai/n8n-ai-gmail-summarizer-openai-google-sheets/\"},\"/ai/mcp-vs-function-calling/\":{\"zh-CN\":\"/ai/mcp-vs-function-calling/\",\"en\":\"/en/ai/mcp-vs-function-calling/\"},\"/en/ai/mcp-vs-function-calling/\":{\"zh-CN\":\"/ai/mcp-vs-function-calling/\",\"en\":\"/en/ai/mcp-vs-function-calling/\"},\"/ai/n8n-ai-slack-daily-digest-bot/\":{\"zh-CN\":\"/ai/n8n-ai-slack-daily-digest-bot/\",\"en\":\"/en/ai/n8n-ai-slack-daily-digest-bot/\"},\"/en/ai/n8n-ai-slack-daily-digest-bot/\":{\"zh-CN\":\"/ai/n8n-ai-slack-daily-digest-bot/\",\"en\":\"/en/ai/n8n-ai-slack-daily-digest-bot/\"},\"/ai/n8n-ai-starter-kit/\":{\"zh-CN\":\"/ai/n8n-ai-starter-kit/\",\"en\":\"/en/ai/n8n-ai-starter-kit/\"},\"/en/ai/n8n-ai-starter-kit/\":{\"zh-CN\":\"/ai/n8n-ai-starter-kit/\",\"en\":\"/en/ai/n8n-ai-starter-kit/\"},\"/ai/n8n-ai-notion-knowledge-base-agent/\":{\"zh-CN\":\"/ai/n8n-ai-notion-knowledge-base-agent/\",\"en\":\"/en/ai/n8n-ai-notion-knowledge-base-agent/\"},\"/en/ai/n8n-ai-notion-knowledge-base-agent/\":{\"zh-CN\":\"/ai/n8n-ai-notion-knowledge-base-agent/\",\"en\":\"/en/ai/n8n-ai-notion-knowledge-base-agent/\"},\"/ai/n8n-queue-mode-redis-worker/\":{\"zh-CN\":\"/ai/n8n-queue-mode-redis-worker/\",\"en\":\"/en/ai/n8n-queue-mode-redis-worker/\"},\"/en/ai/n8n-queue-mode-redis-worker/\":{\"zh-CN\":\"/ai/n8n-queue-mode-redis-worker/\",\"en\":\"/en/ai/n8n-queue-mode-redis-worker/\"},\"/ai/openclaw-analysis/\":{\"zh-CN\":\"/ai/openclaw-analysis/\",\"en\":\"/en/ai/openclaw-analysis/\"},\"/en/ai/openclaw-analysis/\":{\"zh-CN\":\"/ai/openclaw-analysis/\",\"en\":\"/en/ai/openclaw-analysis/\"},\"/ai/openai-assistants-api-vs-custom-agent/\":{\"zh-CN\":\"/ai/openai-assistants-api-vs-custom-agent/\",\"en\":\"/en/ai/openai-assistants-api-vs-custom-agent/\"},\"/en/ai/openai-assistants-api-vs-custom-agent/\":{\"zh-CN\":\"/ai/openai-assistants-api-vs-custom-agent/\",\"en\":\"/en/ai/openai-assistants-api-vs-custom-agent/\"},\"/ai/openclaw-mcp-sandbox-architecture/\":{\"zh-CN\":\"/ai/openclaw-mcp-sandbox-architecture/\",\"en\":\"/en/ai/openclaw-mcp-sandbox-architecture/\"},\"/en/ai/openclaw-mcp-sandbox-architecture/\":{\"zh-CN\":\"/ai/openclaw-mcp-sandbox-architecture/\",\"en\":\"/en/ai/openclaw-mcp-sandbox-architecture/\"},\"/ai/python-quant-backtest/\":{\"zh-CN\":\"/ai/python-quant-backtest/\",\"en\":\"/en/ai/python-quant-backtest/\"},\"/en/ai/python-quant-backtest/\":{\"zh-CN\":\"/ai/python-quant-backtest/\",\"en\":\"/en/ai/python-quant-backtest/\"},\"/ai/openclaw-vs-hermes/\":{\"zh-CN\":\"/ai/openclaw-vs-hermes/\",\"en\":\"/en/ai/openclaw-vs-hermes/\"},\"/en/ai/openclaw-vs-hermes/\":{\"zh-CN\":\"/ai/openclaw-vs-hermes/\",\"en\":\"/en/ai/openclaw-vs-hermes/\"},\"/ai/n8n-ai-workflow-error-handling/\":{\"zh-CN\":\"/ai/n8n-ai-workflow-error-handling/\",\"en\":\"/en/ai/n8n-ai-workflow-error-handling/\"},\"/en/ai/n8n-ai-workflow-error-handling/\":{\"zh-CN\":\"/ai/n8n-ai-workflow-error-handling/\",\"en\":\"/en/ai/n8n-ai-workflow-error-handling/\"},\"/ai/n8n-webhook-production-hardening/\":{\"zh-CN\":\"/ai/n8n-webhook-production-hardening/\",\"en\":\"/en/ai/n8n-webhook-production-hardening/\"},\"/en/ai/n8n-webhook-production-hardening/\":{\"zh-CN\":\"/ai/n8n-webhook-production-hardening/\",\"en\":\"/en/ai/n8n-webhook-production-hardening/\"},\"/ai/n8n-vs-make-ai-workflow-automation/\":{\"zh-CN\":\"/ai/n8n-vs-make-ai-workflow-automation/\",\"en\":\"/en/ai/n8n-vs-make-ai-workflow-automation/\"},\"/en/ai/n8n-vs-make-ai-workflow-automation/\":{\"zh-CN\":\"/ai/n8n-vs-make-ai-workflow-automation/\",\"en\":\"/en/ai/n8n-vs-make-ai-workflow-automation/\"},\"/ai/semantic-kernel-skills-practice/\":{\"zh-CN\":\"/ai/semantic-kernel-skills-practice/\",\"en\":\"/en/ai/semantic-kernel-skills-practice/\"},\"/en/ai/semantic-kernel-skills-practice/\":{\"zh-CN\":\"/ai/semantic-kernel-skills-practice/\",\"en\":\"/en/ai/semantic-kernel-skills-practice/\"},\"/ai/seo-brute-force-practice/\":{\"zh-CN\":\"/ai/seo-brute-force-practice/\",\"en\":\"/en/ai/seo-brute-force-practice/\"},\"/en/ai/seo-brute-force-practice/\":{\"zh-CN\":\"/ai/seo-brute-force-practice/\",\"en\":\"/en/ai/seo-brute-force-practice/\"},\"/ai/search-console-ctr-title-fix/\":{\"zh-CN\":\"/ai/search-console-ctr-title-fix/\",\"en\":\"/en/ai/search-console-ctr-title-fix/\"},\"/en/ai/search-console-ctr-title-fix/\":{\"zh-CN\":\"/ai/search-console-ctr-title-fix/\",\"en\":\"/en/ai/search-console-ctr-title-fix/\"},\"/ai/ultimate-setup/\":{\"zh-CN\":\"/ai/ultimate-setup/\",\"en\":\"/en/ai/ultimate-setup/\"},\"/en/ai/ultimate-setup/\":{\"zh-CN\":\"/ai/ultimate-setup/\",\"en\":\"/en/ai/ultimate-setup/\"},\"/ai/self-hosted-n8n-ai-workflows/\":{\"zh-CN\":\"/ai/self-hosted-n8n-ai-workflows/\",\"en\":\"/en/ai/self-hosted-n8n-ai-workflows/\"},\"/en/ai/self-hosted-n8n-ai-workflows/\":{\"zh-CN\":\"/ai/self-hosted-n8n-ai-workflows/\",\"en\":\"/en/ai/self-hosted-n8n-ai-workflows/\"},\"/ai/xbstack-architecture/\":{\"zh-CN\":\"/ai/xbstack-architecture/\",\"en\":\"/en/ai/xbstack-architecture/\"},\"/en/ai/xbstack-architecture/\":{\"zh-CN\":\"/ai/xbstack-architecture/\",\"en\":\"/en/ai/xbstack-architecture/\"},\"/ai/xbstack-manifesto/\":{\"zh-CN\":\"/ai/xbstack-manifesto/\",\"en\":\"/en/ai/xbstack-manifesto/\"},\"/en/ai/xbstack-manifesto/\":{\"zh-CN\":\"/ai/xbstack-manifesto/\",\"en\":\"/en/ai/xbstack-manifesto/\"},\"/ai/xbstack-404-cloudflare-astro-route-fix/\":{\"zh-CN\":\"/ai/xbstack-404-cloudflare-astro-route-fix/\",\"en\":\"/en/ai/xbstack-404-cloudflare-astro-route-fix/\"},\"/en/ai/xbstack-404-cloudflare-astro-route-fix/\":{\"zh-CN\":\"/ai/xbstack-404-cloudflare-astro-route-fix/\",\"en\":\"/en/ai/xbstack-404-cloudflare-astro-route-fix/\"},\"/ai/xbstack-content-quality-audit-builder-log/\":{\"zh-CN\":\"/ai/xbstack-content-quality-audit-builder-log/\",\"en\":\"/en/ai/xbstack-content-quality-audit-builder-log/\"},\"/en/ai/xbstack-content-quality-audit-builder-log/\":{\"zh-CN\":\"/ai/xbstack-content-quality-audit-builder-log/\",\"en\":\"/en/ai/xbstack-content-quality-audit-builder-log/\"},\"/ai/xbstack-v3-refactor/\":{\"zh-CN\":\"/ai/xbstack-v3-refactor/\",\"en\":\"/en/ai/xbstack-v3-refactor/\"},\"/en/ai/xbstack-v3-refactor/\":{\"zh-CN\":\"/ai/xbstack-v3-refactor/\",\"en\":\"/en/ai/xbstack-v3-refactor/\"},\"/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\":{\"zh-CN\":\"/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\",\"en\":\"/en/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\"},\"/en/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\":{\"zh-CN\":\"/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\",\"en\":\"/en/ai/tools-lab/claude-sonnet-5-astro-bundle-optimization/\"},\"/ai/xbstack-pre-release-data-support-audit/\":{\"zh-CN\":\"/ai/xbstack-pre-release-data-support-audit/\",\"en\":\"/en/ai/xbstack-pre-release-data-support-audit/\"},\"/en/ai/xbstack-pre-release-data-support-audit/\":{\"zh-CN\":\"/ai/xbstack-pre-release-data-support-audit/\",\"en\":\"/en/ai/xbstack-pre-release-data-support-audit/\"},\"/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\":{\"zh-CN\":\"/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\",\"en\":\"/en/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\"},\"/en/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\":{\"zh-CN\":\"/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\",\"en\":\"/en/ai/zapier-vs-make-vs-n8n-for-ai-workflow-automation/\"},\"/ai/zapier-vs-ai-agents-2026/\":{\"zh-CN\":\"/ai/zapier-vs-ai-agents-2026/\",\"en\":\"/en/ai/zapier-vs-ai-agents-2026/\"},\"/en/ai/zapier-vs-ai-agents-2026/\":{\"zh-CN\":\"/ai/zapier-vs-ai-agents-2026/\",\"en\":\"/en/ai/zapier-vs-ai-agents-2026/\"},\"/ai/xbstack-utm-distribution-tracking/\":{\"zh-CN\":\"/ai/xbstack-utm-distribution-tracking/\",\"en\":\"/en/ai/xbstack-utm-distribution-tracking/\"},\"/en/ai/xbstack-utm-distribution-tracking/\":{\"zh-CN\":\"/ai/xbstack-utm-distribution-tracking/\",\"en\":\"/en/ai/xbstack-utm-distribution-tracking/\"},\"/ai/tools-lab/chatgpt-work-chat-codex-difference/\":{\"zh-CN\":\"/ai/tools-lab/chatgpt-work-chat-codex-difference/\",\"en\":\"/en/ai/tools-lab/chatgpt-work-chat-codex-difference/\"},\"/en/ai/tools-lab/chatgpt-work-chat-codex-difference/\":{\"zh-CN\":\"/ai/tools-lab/chatgpt-work-chat-codex-difference/\",\"en\":\"/en/ai/tools-lab/chatgpt-work-chat-codex-difference/\"},\"/ai/tools-lab/gpt56-test/\":{\"zh-CN\":\"/ai/tools-lab/gpt56-test/\",\"en\":\"/en/ai/tools-lab/gpt56-test/\"},\"/en/ai/tools-lab/gpt56-test/\":{\"zh-CN\":\"/ai/tools-lab/gpt56-test/\",\"en\":\"/en/ai/tools-lab/gpt56-test/\"},\"/investing/mastering-dca-strategy/\":{\"zh-CN\":\"/investing/mastering-dca-strategy/\",\"en\":\"/en/investing/mastering-dca-strategy/\"},\"/en/investing/mastering-dca-strategy/\":{\"zh-CN\":\"/investing/mastering-dca-strategy/\",\"en\":\"/en/investing/mastering-dca-strategy/\"},\"/github/\":{\"zh-CN\":\"/github/\",\"en\":\"/en/github/\"},\"/en/github/\":{\"zh-CN\":\"/github/\",\"en\":\"/en/github/\"},\"/investing/programmer-fire-system/\":{\"zh-CN\":\"/investing/programmer-fire-system/\",\"en\":\"/en/investing/programmer-fire-system/\"},\"/en/investing/programmer-fire-system/\":{\"zh-CN\":\"/investing/programmer-fire-system/\",\"en\":\"/en/investing/programmer-fire-system/\"},\"/investing/review-kunlun-perfect-miss/\":{\"zh-CN\":\"/investing/review-kunlun-perfect-miss/\",\"en\":\"/en/investing/review-kunlun-perfect-miss/\"},\"/en/investing/review-kunlun-perfect-miss/\":{\"zh-CN\":\"/investing/review-kunlun-perfect-miss/\",\"en\":\"/en/investing/review-kunlun-perfect-miss/\"},\"/investing/review-linear-thinking-trap/\":{\"zh-CN\":\"/investing/review-linear-thinking-trap/\",\"en\":\"/en/investing/review-linear-thinking-trap/\"},\"/en/investing/review-linear-thinking-trap/\":{\"zh-CN\":\"/investing/review-linear-thinking-trap/\",\"en\":\"/en/investing/review-linear-thinking-trap/\"},\"/horizon/reading/reading-system-for-independent-developer/\":{\"zh-CN\":\"/horizon/reading/reading-system-for-independent-developer/\",\"en\":\"/en/horizon/reading/reading-system-for-independent-developer/\"},\"/en/horizon/reading/reading-system-for-independent-developer/\":{\"zh-CN\":\"/horizon/reading/reading-system-for-independent-developer/\",\"en\":\"/en/horizon/reading/reading-system-for-independent-developer/\"},\"/investing/review-psychological-warfare/\":{\"zh-CN\":\"/investing/review-psychological-warfare/\",\"en\":\"/en/investing/review-psychological-warfare/\"},\"/en/investing/review-psychological-warfare/\":{\"zh-CN\":\"/investing/review-psychological-warfare/\",\"en\":\"/en/investing/review-psychological-warfare/\"},\"/investing/review-tfc-sold-too-early/\":{\"zh-CN\":\"/investing/review-tfc-sold-too-early/\",\"en\":\"/en/investing/review-tfc-sold-too-early/\"},\"/en/investing/review-tfc-sold-too-early/\":{\"zh-CN\":\"/investing/review-tfc-sold-too-early/\",\"en\":\"/en/investing/review-tfc-sold-too-early/\"},\"/investing/ultimate-compounding-guide/\":{\"zh-CN\":\"/investing/ultimate-compounding-guide/\",\"en\":\"/en/investing/ultimate-compounding-guide/\"},\"/en/investing/ultimate-compounding-guide/\":{\"zh-CN\":\"/investing/ultimate-compounding-guide/\",\"en\":\"/en/investing/ultimate-compounding-guide/\"},\"/life/gaopo-cloud-top-offline/\":{\"zh-CN\":\"/life/gaopo-cloud-top-offline/\",\"en\":\"/en/life/gaopo-cloud-top-offline/\"},\"/en/life/gaopo-cloud-top-offline/\":{\"zh-CN\":\"/life/gaopo-cloud-top-offline/\",\"en\":\"/en/life/gaopo-cloud-top-offline/\"},\"/life/guizhou-hidden-trails/\":{\"zh-CN\":\"/life/guizhou-hidden-trails/\",\"en\":\"/en/life/guizhou-hidden-trails/\"},\"/en/life/guizhou-hidden-trails/\":{\"zh-CN\":\"/life/guizhou-hidden-trails/\",\"en\":\"/en/life/guizhou-hidden-trails/\"},\"/life/guanling-ice-mortar-preview/\":{\"zh-CN\":\"/life/guanling-ice-mortar-preview/\",\"en\":\"/en/life/guanling-ice-mortar-preview/\"},\"/en/life/guanling-ice-mortar-preview/\":{\"zh-CN\":\"/life/guanling-ice-mortar-preview/\",\"en\":\"/en/life/guanling-ice-mortar-preview/\"},\"/life/habasnow/\":{\"zh-CN\":\"/life/habasnow/\",\"en\":\"/en/life/habasnow/\"},\"/en/life/habasnow/\":{\"zh-CN\":\"/life/habasnow/\",\"en\":\"/en/life/habasnow/\"},\"/life/lens-city-light/\":{\"zh-CN\":\"/life/lens-city-light/\",\"en\":\"/en/life/lens-city-light/\"},\"/en/life/lens-city-light/\":{\"zh-CN\":\"/life/lens-city-light/\",\"en\":\"/en/life/lens-city-light/\"},\"/life/high-altitude-edc/\":{\"zh-CN\":\"/life/high-altitude-edc/\",\"en\":\"/en/life/high-altitude-edc/\"},\"/en/life/high-altitude-edc/\":{\"zh-CN\":\"/life/high-altitude-edc/\",\"en\":\"/en/life/high-altitude-edc/\"},\"/life/lens-snow-peak/\":{\"zh-CN\":\"/life/lens-snow-peak/\",\"en\":\"/en/life/lens-snow-peak/\"},\"/en/life/lens-snow-peak/\":{\"zh-CN\":\"/life/lens-snow-peak/\",\"en\":\"/en/life/lens-snow-peak/\"},\"/life/hhkb-review/\":{\"zh-CN\":\"/life/hhkb-review/\",\"en\":\"/en/life/hhkb-review/\"},\"/en/life/hhkb-review/\":{\"zh-CN\":\"/life/hhkb-review/\",\"en\":\"/en/life/hhkb-review/\"},\"/life/lens-forest/\":{\"zh-CN\":\"/life/lens-forest/\",\"en\":\"/en/life/lens-forest/\"},\"/en/life/lens-forest/\":{\"zh-CN\":\"/life/lens-forest/\",\"en\":\"/en/life/lens-forest/\"},\"/life/video-climbing/\":{\"zh-CN\":\"/life/video-climbing/\",\"en\":\"/en/life/video-climbing/\"},\"/en/life/video-climbing/\":{\"zh-CN\":\"/life/video-climbing/\",\"en\":\"/en/life/video-climbing/\"},\"/life/weining-caohai-reset/\":{\"zh-CN\":\"/life/weining-caohai-reset/\",\"en\":\"/en/life/weining-caohai-reset/\"},\"/en/life/weining-caohai-reset/\":{\"zh-CN\":\"/life/weining-caohai-reset/\",\"en\":\"/en/life/weining-caohai-reset/\"},\"/life/yala-summit/\":{\"zh-CN\":\"/life/yala-summit/\",\"en\":\"/en/life/yala-summit/\"},\"/en/life/yala-summit/\":{\"zh-CN\":\"/life/yala-summit/\",\"en\":\"/en/life/yala-summit/\"},\"/life/self-hosted-ai-workflow-infrastructure/\":{\"zh-CN\":\"/life/self-hosted-ai-workflow-infrastructure/\",\"en\":\"/en/life/self-hosted-ai-workflow-infrastructure/\"},\"/en/life/self-hosted-ai-workflow-infrastructure/\":{\"zh-CN\":\"/life/self-hosted-ai-workflow-infrastructure/\",\"en\":\"/en/life/self-hosted-ai-workflow-infrastructure/\"},\"/ai/ai-agent-memory-architecture/\":{\"zh-CN\":\"/ai/ai-agent-memory-architecture/\",\"en\":\"/en/ai/ai-agent-memory-architecture/\"},\"/en/ai/ai-agent-memory-architecture/\":{\"zh-CN\":\"/ai/ai-agent-memory-architecture/\",\"en\":\"/en/ai/ai-agent-memory-architecture/\"},\"/ai/tools-lab/kimi-k3-real-astro-project-test/\":{\"zh-CN\":\"/ai/tools-lab/kimi-k3-real-astro-project-test/\",\"en\":\"/en/ai/tools-lab/kimi-k3-real-astro-project-test/\"},\"/en/ai/tools-lab/kimi-k3-real-astro-project-test/\":{\"zh-CN\":\"/ai/tools-lab/kimi-k3-real-astro-project-test/\",\"en\":\"/en/ai/tools-lab/kimi-k3-real-astro-project-test/\"},\"/ai/vercel-ai-sdk-7-migration-production/\":{\"zh-CN\":\"/ai/vercel-ai-sdk-7-migration-production/\",\"en\":\"/en/ai/vercel-ai-sdk-7-migration-production/\"},\"/en/ai/vercel-ai-sdk-7-migration-production/\":{\"zh-CN\":\"/ai/vercel-ai-sdk-7-migration-production/\",\"en\":\"/en/ai/vercel-ai-sdk-7-migration-production/\"},\"/ai/openai-agents-sdk-runstate-approval-resume/\":{\"zh-CN\":\"/ai/openai-agents-sdk-runstate-approval-resume/\",\"en\":\"/en/ai/openai-agents-sdk-runstate-approval-resume/\"},\"/en/ai/openai-agents-sdk-runstate-approval-resume/\":{\"zh-CN\":\"/ai/openai-agents-sdk-runstate-approval-resume/\",\"en\":\"/en/ai/openai-agents-sdk-runstate-approval-resume/\"},\"/ai/mcp-2026-07-28-stateless-migration/\":{\"zh-CN\":\"/ai/mcp-2026-07-28-stateless-migration/\",\"en\":\"/en/ai/mcp-2026-07-28-stateless-migration/\"},\"/en/ai/mcp-2026-07-28-stateless-migration/\":{\"zh-CN\":\"/ai/mcp-2026-07-28-stateless-migration/\",\"en\":\"/en/ai/mcp-2026-07-28-stateless-migration/\"},\"/ai/n8n-ai-agent-not-calling-tools/\":{\"zh-CN\":\"/ai/n8n-ai-agent-not-calling-tools/\",\"en\":\"/en/ai/n8n-ai-agent-not-calling-tools/\"},\"/en/ai/n8n-ai-agent-not-calling-tools/\":{\"zh-CN\":\"/ai/n8n-ai-agent-not-calling-tools/\",\"en\":\"/en/ai/n8n-ai-agent-not-calling-tools/\"},\"/ai/ai-agent-tool-authorization-policy-gate/\":{\"zh-CN\":\"/ai/ai-agent-tool-authorization-policy-gate/\",\"en\":\"/en/ai/ai-agent-tool-authorization-policy-gate/\"},\"/en/ai/ai-agent-tool-authorization-policy-gate/\":{\"zh-CN\":\"/ai/ai-agent-tool-authorization-policy-gate/\",\"en\":\"/en/ai/ai-agent-tool-authorization-policy-gate/\"},\"/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\":{\"zh-CN\":\"/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\",\"en\":\"/en/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\"},\"/en/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\":{\"zh-CN\":\"/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\",\"en\":\"/en/ai/langgraph-cancel-run-streaming-checkpoint-state-loss/\"},\"/ai/openai-agents-sdk-duplicate-tool-names/\":{\"zh-CN\":\"/ai/openai-agents-sdk-duplicate-tool-names/\",\"en\":\"/en/ai/openai-agents-sdk-duplicate-tool-names/\"},\"/en/ai/openai-agents-sdk-duplicate-tool-names/\":{\"zh-CN\":\"/ai/openai-agents-sdk-duplicate-tool-names/\",\"en\":\"/en/ai/openai-agents-sdk-duplicate-tool-names/\"},\"/ai/langgraph-toolnode-max-concurrency-ignored/\":{\"zh-CN\":\"/ai/langgraph-toolnode-max-concurrency-ignored/\",\"en\":\"/en/ai/langgraph-toolnode-max-concurrency-ignored/\"},\"/en/ai/langgraph-toolnode-max-concurrency-ignored/\":{\"zh-CN\":\"/ai/langgraph-toolnode-max-concurrency-ignored/\",\"en\":\"/en/ai/langgraph-toolnode-max-concurrency-ignored/\"},\"/ai/openai-responses-api-stream-abort-tool-call-lost/\":{\"zh-CN\":\"/ai/openai-responses-api-stream-abort-tool-call-lost/\",\"en\":\"/en/ai/openai-responses-api-stream-abort-tool-call-lost/\"},\"/en/ai/openai-responses-api-stream-abort-tool-call-lost/\":{\"zh-CN\":\"/ai/openai-responses-api-stream-abort-tool-call-lost/\",\"en\":\"/en/ai/openai-responses-api-stream-abort-tool-call-lost/\"},\"/tools/toy-lab/\":{\"zh-CN\":\"/tools/toy-lab/\",\"en\":\"/en/tools/toy-lab/\"},\"/en/tools/toy-lab/\":{\"zh-CN\":\"/tools/toy-lab/\",\"en\":\"/en/tools/toy-lab/\"},\"/tools/toy-lab/zhuzhiliao/\":{\"zh-CN\":\"/tools/toy-lab/zhuzhiliao/\",\"en\":\"/en/tools/toy-lab/zhuzhiliao/\"},\"/en/tools/toy-lab/zhuzhiliao/\":{\"zh-CN\":\"/tools/toy-lab/zhuzhiliao/\",\"en\":\"/en/tools/toy-lab/zhuzhiliao/\"},\"/life/xingyi-summer-travel-guide/\":{\"zh-CN\":\"/life/xingyi-summer-travel-guide/\",\"en\":\"/en/life/xingyi-summer-travel-guide/\"},\"/en/life/xingyi-summer-travel-guide/\":{\"zh-CN\":\"/life/xingyi-summer-travel-guide/\",\"en\":\"/en/life/xingyi-summer-travel-guide/\"},\"/ai/zhuzhiliao-web-game-builder-log/\":{\"zh-CN\":\"/ai/zhuzhiliao-web-game-builder-log/\",\"en\":\"/en/ai/zhuzhiliao-web-game-builder-log/\"},\"/en/ai/zhuzhiliao-web-game-builder-log/\":{\"zh-CN\":\"/ai/zhuzhiliao-web-game-builder-log/\",\"en\":\"/en/ai/zhuzhiliao-web-game-builder-log/\"},\"/ai/n8n-baserow-parameter-dependencies-activation-error/\":{\"zh-CN\":\"/ai/n8n-baserow-parameter-dependencies-activation-error/\",\"en\":\"/en/ai/n8n-baserow-parameter-dependencies-activation-error/\"},\"/en/ai/n8n-baserow-parameter-dependencies-activation-error/\":{\"zh-CN\":\"/ai/n8n-baserow-parameter-dependencies-activation-error/\",\"en\":\"/en/ai/n8n-baserow-parameter-dependencies-activation-error/\"},\"/ai/google-adk-state-delta-resume/\":{\"zh-CN\":\"/ai/google-adk-state-delta-resume/\",\"en\":\"/en/ai/google-adk-state-delta-resume/\"},\"/en/ai/google-adk-state-delta-resume/\":{\"zh-CN\":\"/ai/google-adk-state-delta-resume/\",\"en\":\"/en/ai/google-adk-state-delta-resume/\"},\"/ai/n8n-distroless-arm64-glibc-error/\":{\"zh-CN\":\"/ai/n8n-distroless-arm64-glibc-error/\",\"en\":\"/en/ai/n8n-distroless-arm64-glibc-error/\"},\"/en/ai/n8n-distroless-arm64-glibc-error/\":{\"zh-CN\":\"/ai/n8n-distroless-arm64-glibc-error/\",\"en\":\"/en/ai/n8n-distroless-arm64-glibc-error/\"},\"/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\":{\"zh-CN\":\"/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\",\"en\":\"/en/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\"},\"/en/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\":{\"zh-CN\":\"/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\",\"en\":\"/en/life/guizhou-summer-escape-guiyang-liupanshui-xingyi-weining/\"}}");
const i18nManifest = {
  byPath};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://www.xbstack.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const SITE_INFO = {
    SITE_NAME: "XBSTACK | Independent Developer Asset System",
    DESCRIPTION: "XBSTACK is Xiaobai's independent developer asset system, covering AI engineering, product tools, productivity systems, investing notes, reading and outdoor practice.",
    URL: "https://www.xbstack.com",
    LOGO_IMAGE: "/favicon/favicon.svg",
    GOOGLE_ANALYTICS_ID: "G-1J4274CPMT",
    BAIDU_ANALYTICS_ID: "c7bfaf645bfc8974405a85c2a55573a0"};
  const { lang = "zh-Hans", title, description, image, noindex, canonical, keywords, alternates: providedAlternates = [], ogType = "website", hideFooter = false, schemaJsonLd } = Astro2.props;
  const privateCachePrefixes = ["/admin", "/tools/finance/report/"];
  const isPrivateCacheRoute = privateCachePrefixes.some((prefix) => Astro2.url.pathname.startsWith(prefix));
  if (!isPrivateCacheRoute && ["GET", "HEAD"].includes(Astro2.request.method)) {
    Astro2.response.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    Astro2.response.headers.set("CDN-Cache-Control", "public, max-age=900, stale-while-revalidate=86400, stale-if-error=604800");
    Astro2.response.headers.set("Cloudflare-CDN-Cache-Control", "public, max-age=900, stale-while-revalidate=86400, stale-if-error=604800");
  }
  const normalizedPathname = Astro2.url.pathname.replace(/\/+$/, "") + "/";
  const qualityPathname = normalizedPathname.replace(/^\/en\//, "/");
  const lowQualityPathPrefixes = [
    "/tags/",
    "/tag/",
    "/category/",
    "/categories/",
    "/archive/",
    "/search/",
    "/api/",
    "/practice/"
  ];
  const isLowQualityPage = lowQualityPathPrefixes.some((p) => qualityPathname.startsWith(p));
  const shouldNoindex = noindex || isLowQualityPage;
  const siteUrl = SITE_INFO.URL.replace(/\/$/, "");
  const navigationMenu = getLocalizedHeaderMenu(lang);
  const navigationSchemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "XBSTACK Main Navigation",
    "itemListElement": navigationMenu.map((item, index) => ({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": item.name,
      "alternateName": item.seoName,
      "description": item.description,
      "url": `${siteUrl}${item.url}`
    }))
  };
  let currentPath = Astro2.url.pathname.replace(/\/+$/, "");
  currentPath = currentPath === "" ? "/" : currentPath + "/";
  const manifestByPath = i18nManifest?.byPath || {};
  const manifestTranslations = manifestByPath[currentPath] || {};
  const manifestAlternates = Object.entries(manifestTranslations).filter(([, href]) => typeof href === "string" && href.length > 0).map(([alternateLang, href]) => ({ alternateLang, href: new URL(href, siteUrl).href }));
  const alternateMap = /* @__PURE__ */ new Map();
  for (const item of manifestAlternates) alternateMap.set(item.alternateLang, item.href);
  for (const item of providedAlternates) alternateMap.set(item.lang, new URL(item.href, siteUrl).href);
  const chineseAlternate = alternateMap.get("zh-CN") || alternateMap.get("zh-Hans") || alternateMap.get("zh");
  if (chineseAlternate && !alternateMap.has("x-default")) alternateMap.set("x-default", chineseAlternate);
  const alternates = Array.from(alternateMap, ([alternateLang, href]) => ({ lang: alternateLang, href }));
  const isArchiveRoute = qualityPathname.startsWith("/archive/");
  const archiveCanonicalPath = lang.toLowerCase().startsWith("en") ? "/en/archive/" : "/archive/";
  const finalCanonical = canonical || (isArchiveRoute ? `${siteUrl}${archiveCanonicalPath}` : `${siteUrl}${currentPath}`);
  const normalizePageTitle = (rawTitle) => {
    if (!rawTitle) return SITE_INFO.SITE_NAME;
    const compactTitle = String(rawTitle).replace(/\s+-\s+XBSTACK\s*\|\s*Independent Developer Asset System/g, " - XBSTACK").replace(/\s+\|\s+XBSTACK\s*\|\s*Independent Developer Asset System/g, " | XBSTACK").replace(/\s+\|\s+Independent Developer Asset System/g, "").trim();
    return compactTitle.includes("XBSTACK") ? compactTitle : `${compactTitle} | XBSTACK`;
  };
  const siteTitle = normalizePageTitle(title);
  const rawDescription = String(description || SITE_INFO.DESCRIPTION).trim();
  const siteDescription = rawDescription.length >= 50 ? rawDescription : lang.startsWith("zh") ? `${rawDescription.replace(/[。！？.!?]+$/, "")}。包含核心观点、实际方法、适用边界、风险提示与相关实践入口，帮助读者快速判断是否值得继续阅读。` : `${rawDescription.replace(/[.!?]+$/, "")}. Explore the key ideas, practical steps, limitations, risks, and related implementation resources.`;
  const siteImage = image || SITE_INFO.LOGO_IMAGE;
  const ogLocaleMap = {
    "zh-CN": "zh_CN",
    "zh-Hans": "zh_CN",
    "zh-TW": "zh_TW",
    en: "en_US"
  };
  const ogLocale = ogLocaleMap[lang] || lang.replace("-", "_");
  const googleAnalyticsId = SITE_INFO.GOOGLE_ANALYTICS_ID;
  const baiduAnalyticsId = SITE_INFO.BAIDU_ANALYTICS_ID;
  return renderTemplate(_c || (_c = __template(["<html", ' class="dark"', '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script>\n      const applyTheme = () => {\n        const theme = localStorage.getItem("theme");\n        const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);\n        document.documentElement.classList.toggle("dark", isDark);\n      };\n      applyTheme();\n      document.addEventListener("astro:page-load", applyTheme);\n    </script><title>', '</title><meta name="description"', '><meta http-equiv="content-language"', ">", '<meta name="theme-color" content="#050608">', '<meta property="og:type"', '><meta property="og:locale"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><link rel="canonical"', ">", '<script type="application/ld+json">', "</script>", "", '<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg">', "", '</head> <body class="bg-white dark:bg-[#050608] text-slate-950 dark:text-white selection:bg-orange-500/20 selection:text-orange-500 overflow-x-hidden"> ', " ", " ", " ", " ", ' <div id="language-switch-notice" class="pointer-events-none fixed left-1/2 top-24 z-[700] hidden max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 px-5 py-3 text-center text-sm font-bold text-slate-700 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 dark:text-slate-200" role="status" aria-live="polite"></div> <main id="main-content" class="flex-1"> ', " </main> ", " ", " <script>\n      const showLanguageSwitchNotice = () => {\n        let payload = null;\n        try {\n          const raw = sessionStorage.getItem('xbstack_language_notice');\n          if (!raw) return;\n          payload = JSON.parse(raw);\n          sessionStorage.removeItem('xbstack_language_notice');\n        } catch (error) {\n          return;\n        }\n\n        const notice = document.getElementById('language-switch-notice');\n        if (!notice) return;\n\n        const targetIsEnglish = String(payload?.language || '').toLowerCase().startsWith('en');\n        notice.textContent = targetIsEnglish\n          ? 'This page does not have an English version yet. You have been taken to the English home page.'\n          : '当前页面暂未提供中文版本，已为你打开中文首页。';\n        notice.classList.remove('hidden');\n        window.setTimeout(() => notice.classList.add('hidden'), 4800);\n      };\n\n      document.addEventListener('astro:page-load', showLanguageSwitchNotice);\n      showLanguageSwitchNotice();\n    </script> </body> </html>"])), addAttribute(lang, "lang"), addAttribute("ga4-baidu", "data-analytics"), siteTitle, addAttribute(siteDescription, "content"), addAttribute(lang, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, shouldNoindex && renderTemplate`<meta name="robots" content="noindex,follow">`, addAttribute(ogType, "content"), addAttribute(ogLocale, "content"), addAttribute(finalCanonical, "content"), addAttribute(siteTitle, "content"), addAttribute(siteDescription, "content"), addAttribute(new URL(siteImage, siteUrl), "content"), addAttribute(finalCanonical, "content"), addAttribute(siteTitle, "content"), addAttribute(siteDescription, "content"), addAttribute(new URL(siteImage, siteUrl), "content"), addAttribute(finalCanonical, "href"), alternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.lang, "hreflang")}${addAttribute(alternate.href, "href")}>`), unescapeHTML(JSON.stringify(navigationSchemaJsonLd)), schemaJsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(schemaJsonLd))), ogType === "article" && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(Astro2.props.publishedAt || "", "content")}>${description && renderTemplate`<meta name="abstract"${addAttribute(description, "content")}>`}<meta name="speakable-selector" content=".markdown-content h2, .markdown-content p"><meta name="ai-content-access" content="allowed"><meta name="geo-optimized" content="true">` })}`, renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate(_b || (_b = __template(["<script>(function(){", `
          const productionAnalyticsHosts = new Set(['www.xbstack.com', 'xbstack.com']);
          const automationUserAgent = /HeadlessChrome|PhantomJS|Playwright|Puppeteer|Selenium|Lighthouse|PageSpeed|bot\\b|crawler|spider|slurp|curl|wget|python-requests|axios|node-fetch|facebookexternalhit|Twitterbot|LinkedInBot|Bytespider|GPTBot|ClaudeBot|PerplexityBot/i;
          const analyticsUrl = new URL(window.location.href);
          const analyticsSource = String(analyticsUrl.searchParams.get('utm_source') || '').toLowerCase();
          const analyticsCampaign = String(analyticsUrl.searchParams.get('utm_campaign') || '').toLowerCase();
          const internalAnalyticsAudit =
            analyticsUrl.searchParams.has('ga4_audit') ||
            analyticsUrl.searchParams.has('analytics_test') ||
            ['internal', 'internal_test', 'qa', 'test'].includes(analyticsSource) ||
            analyticsCampaign.includes('ga4_audit') ||
            analyticsCampaign.includes('internal_test');
          const shouldTrackAnalytics =
            Boolean(googleAnalyticsId) &&
            productionAnalyticsHosts.has(window.location.hostname.toLowerCase()) &&
            navigator.webdriver !== true &&
            !automationUserAgent.test(navigator.userAgent || '') &&
            !internalAnalyticsAudit;

          if (!shouldTrackAnalytics) {
            window.__analytics_suppressed = true;
            window.__analytics_suppression_reason = internalAnalyticsAudit ? 'internal_test' : 'environment_or_automation';
          } else if (!window.__ga4_initialized) {
            const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'];
            const UTM_ALIASES = {
              utmsource: 'utm_source',
              utmmedium: 'utm_medium',
              utmcampaign: 'utm_campaign',
              utmcontent: 'utm_content',
              utmterm: 'utm_term',
              utmid: 'utm_id',
            };
            const INTERNAL_UTM_SOURCES = new Set(['inner', 'internal', 'internal_link', 'reading_system']);
            window.normalizeUtmAliases = () => {
              try {
                const url = new URL(window.location.href);
                let changed = false;
                Object.entries(UTM_ALIASES).forEach(([alias, canonical]) => {
                  const aliasValue = url.searchParams.get(alias);
                  if (aliasValue && !url.searchParams.get(canonical)) {
                    url.searchParams.set(canonical, aliasValue);
                    changed = true;
                  }
                  if (url.searchParams.has(alias)) {
                    url.searchParams.delete(alias);
                    changed = true;
                  }
                });
                if (changed) window.history.replaceState(window.history.state, '', url.href);
              } catch (err) {}
            };
            window.normalizeUtmAliases();
            window.sanitizeInternalUtm = () => {
              try {
                const url = new URL(window.location.href);
                const source = String(url.searchParams.get('utm_source') || '').toLowerCase();
                const referrerUrl = document.referrer ? new URL(document.referrer) : null;
                const sameOriginReferrer = Boolean(referrerUrl && referrerUrl.origin === window.location.origin);
                if (!sameOriginReferrer && !INTERNAL_UTM_SOURCES.has(source)) return;
                let changed = false;
                UTM_KEYS.forEach((key) => {
                  if (url.searchParams.has(key)) {
                    url.searchParams.delete(key);
                    changed = true;
                  }
                });
                if (changed) window.history.replaceState(window.history.state, '', url.href);
              } catch (err) {}
            };
            window.sanitizeInternalUtm();

            window.__ga4_initialized = true;
            window.__ga4_client_loaded = false;
            window.__ga4_tracking_started = false;
            window.__ga4_human_verified = false;
            window.__ga4_session_class = '';
            window.__lastGA4PageKey = "";
            window.__lastGA4PageLocation = document.referrer || "";
            window.__ga4_tracking_start_reason = '';
            window.__scroll50Reported = false;
            window.__scroll90Reported = false;

            const getReferrerHost = () => {
              try {
                return document.referrer ? new URL(document.referrer).hostname.replace(/^www\\./, '') : '';
              } catch (err) {
                return '';
              }
            };

            const inferSourceHint = () => {
              const refHost = getReferrerHost();
              if (!refHost) return '';
              if (refHost.includes('zhihu')) return 'zhihu_referrer';
              if (refHost.includes('juejin')) return 'juejin_referrer';
              if (refHost.includes('csdn')) return 'csdn_referrer';
              if (refHost.includes('weixin') || refHost.includes('wechat')) return 'wechat_referrer';
              if (refHost.includes('google')) return 'google_referrer';
              if (refHost.includes('baidu')) return 'baidu_referrer';
              return refHost;
            };

            const getAttributionPayload = () => {
              const params = new URLSearchParams(window.location.search);
              const current = {};
              UTM_KEYS.forEach((key) => {
                const value = params.get(key);
                if (value) current[key] = value;
              });

              const referrerHost = getReferrerHost();
              const currentHost = window.location.hostname.replace(/^www\\./, '');
              const sourceHint = inferSourceHint();
              const hasExternalReferrer = Boolean(referrerHost && referrerHost !== currentHost);

              let stored = {};
              try {
                stored = JSON.parse(sessionStorage.getItem('xbstack_attribution') || '{}');
              } catch (err) {
                stored = {};
              }

              if (Object.keys(current).length) {
                stored = {
                  ...stored,
                  ...current,
                  landing_page: window.location.pathname,
                  referrer_host: referrerHost,
                  source_hint: current.utm_source ? \`utm:\${current.utm_source}\` : sourceHint,
                  captured_at: new Date().toISOString(),
                };
              } else if (hasExternalReferrer && !stored.captured_at) {
                // Preserve first-touch referral attribution even when the platform strips UTM parameters.
                stored = {
                  ...stored,
                  landing_page: window.location.pathname,
                  referrer_host: referrerHost,
                  source_hint: sourceHint,
                  captured_at: new Date().toISOString(),
                };
              }

              if (stored.captured_at) {
                try {
                  sessionStorage.setItem('xbstack_attribution', JSON.stringify(stored));
                } catch (err) {}
              }

              return {
                utm_source: stored.utm_source || '',
                utm_medium: stored.utm_medium || '',
                utm_campaign: stored.utm_campaign || '',
                utm_id: stored.utm_id || '',
                utm_term: stored.utm_term || '',
                utm_content: stored.utm_content || '',
                attribution_landing_page: stored.landing_page || '',
                referrer_host: stored.referrer_host || referrerHost,
                source_hint: stored.source_hint || (stored.utm_source ? \`utm:\${stored.utm_source}\` : sourceHint),
              };
            };

            const getAnalyticsPageContext = () => {
              const url = new URL(window.location.href);
              const isCompoundCalculator = [
                '/tools/compound-calculator/',
                '/en/tools/compound-calculator/',
              ].includes(url.pathname);

              if (isCompoundCalculator) {
                ['scenario', 'principal', 'monthly', 'rate', 'years', 'volatility', 'inflation', 'm2_drag', 'target', 'compare_rate'].forEach((key) => {
                  url.searchParams.delete(key);
                });
              }

              return {
                pagePath: url.pathname,
                pageLocation: url.href,
                pageSearch: url.search,
              };
            };

            window.xbTrackEvent = (eventName, payload = {}) => {
              if (
                typeof window.gtag !== 'function' ||
                !googleAnalyticsId ||
                !eventName ||
                !window.__ga4_tracking_started ||
                !window.__ga4_human_verified
              ) return;
              const analyticsPage = getAnalyticsPageContext();
              window.gtag('event', eventName, {
                transport_type: 'beacon',
                page_path: analyticsPage.pagePath,
                page_title: document.title || '',
                tracking_start_reason: window.__ga4_tracking_start_reason || 'unknown',
                traffic_verification: window.__ga4_session_class || 'unverified_session',
                ...getAttributionPayload(),
                ...payload,
              });
            };

            window.sendGA4PageView = () => {
              if (
                typeof window.gtag !== 'function' ||
                !googleAnalyticsId ||
                !window.__ga4_tracking_started
              ) return;

              const analyticsPage = getAnalyticsPageContext();
              const pageLocation = analyticsPage.pageLocation;
              const pageTitle = document.title || '';
              const pageKey = \`\${pageLocation}|\${pageTitle}\`;

              if (pageKey === window.__lastGA4PageKey) return;
              const pageReferrer = window.__lastGA4PageLocation;
              window.__lastGA4PageKey = pageKey;
              window.__lastGA4PageLocation = pageLocation;
              window.__scroll50Reported = false;
              window.__scroll90Reported = false;

              window.gtag('event', 'page_view', {
                page_title: pageTitle,
                page_location: pageLocation,
                page_path: analyticsPage.pagePath,
                page_search: analyticsPage.pageSearch,
                page_referrer: pageReferrer,
                tracking_start_reason: window.__ga4_tracking_start_reason || 'unknown',
                traffic_verification: window.__ga4_session_class || 'unverified_session',
                ...getAttributionPayload(),
              });
            };

            window.initGA4Tracking = () => {
              if (typeof window.gtag !== 'function') return;
              if (window.__ga4_events_bound) return;
              window.__ga4_events_bound = true;

              // 1. 页面滚动深度上报
              const handleScroll = (event) => {
                if (!event?.isTrusted || !window.__ga4_human_verified) return;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                if (scrollHeight <= 0) return;
                const progress = (scrollTop / scrollHeight) * 100;

                if (progress >= 50 && !window.__scroll50Reported) {
                  window.xbTrackEvent('scroll_50', { event_category: 'engagement', event_label: window.location.pathname });
                  window.__scroll50Reported = true;
                }
                if (progress >= 90 && !window.__scroll90Reported) {
                  window.xbTrackEvent('scroll_90', { event_category: 'engagement', event_label: window.location.pathname });
                  window.__scroll90Reported = true;
                }
              };

              window.addEventListener('scroll', handleScroll, { passive: true });

              // 2. 完整链接与按钮点击上报。link_click 是统一事实表，旧事件继续保留用于历史对比。
              const inferLinkArea = (target) => {
                const explicitArea = target.closest('[data-analytics-area]')?.getAttribute('data-analytics-area');
                if (explicitArea) return explicitArea.slice(0, 60);
                if (target.closest('header, nav, [role="navigation"]')) return 'navigation';
                if (target.closest('footer')) return 'footer';
                if (target.closest('[class*="related"], [class*="recommend"], [class*="next-reading"]')) return 'related_content';
                if (target.closest('[class*="sidebar"], aside')) return 'sidebar';
                if (target.closest('.markdown-content, article')) return 'article_body';
                if (target.closest('[class*="card"], [class*="grid"]')) return 'content_card';
                return 'page_other';
              };

              const classifyLink = (target, url, linkArea) => {
                const rawHref = String(target.getAttribute('href') || '');
                const protocol = String(url.protocol || '').toLowerCase();
                const path = String(url.pathname || '/');
                const host = String(url.hostname || '').replace(/^www\\./, '').toLowerCase();
                const isHttp = protocol === 'http:' || protocol === 'https:';
                const isExternal = isHttp && url.origin !== window.location.origin;
                const isDownload =
                  target.hasAttribute('download') ||
                  /\\.(pdf|zip|gz|tar|csv|xlsx?|docx?|pptx?|json|ya?ml|mp3|mp4|mov|webm)(?:$|[?#])/i.test(rawHref);

                if (protocol === 'mailto:' || protocol === 'tel:') return 'contact';
                if (isDownload) return 'download';
                if (isExternal && host === 'github.com') return 'github';
                if (isExternal) return 'external';
                if (path.startsWith('/go/')) return 'affiliate';
                if (path.startsWith('/tools/') || path.startsWith('/compound-interest/')) return 'tool';
                if (path.startsWith('/newsletter/')) return 'newsletter';
                if (url.origin === window.location.origin && path === window.location.pathname && url.hash) return 'anchor';
                if (linkArea === 'related_content') return 'related_article';
                if (linkArea === 'article_body') return 'internal_article';
                return 'internal';
              };

              const handleClick = (e) => {
                if (!e?.isTrusted || !window.__ga4_human_verified) return;
                const target = e.target.closest('a,button');
                if (!target) return;

                const label = (target.getAttribute('aria-label') || target.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 100);
                if (target.tagName === 'BUTTON') {
                  window.xbTrackEvent('click_button', {
                    event_category: 'engagement',
                    event_label: label,
                    link_area: inferLinkArea(target),
                    link_position: inferLinkArea(target),
                    source_page_path: window.location.pathname,
                  });
                  return;
                }

                const rawHref = String(target.getAttribute('href') || '').trim();
                if (!rawHref || rawHref.toLowerCase().startsWith('javascript:')) return;

                try {
                  const url = new URL(rawHref, window.location.href);
                  const linkArea = inferLinkArea(target);
                  const linkType = classifyLink(target, url, linkArea);
                  const isExternalHttp =
                    (url.protocol === 'http:' || url.protocol === 'https:') &&
                    url.origin !== window.location.origin;
                  const payload = {
                    event_category:
                      ['affiliate', 'tool', 'newsletter'].includes(linkType)
                        ? 'conversion'
                        : isExternalHttp
                          ? 'outbound'
                          : 'navigation',
                    event_label: url.href,
                    link_text: label,
                    link_url: url.href,
                    link_domain: url.hostname.replace(/^www\\./, ''),
                    link_id: target.id || '',
                    link_classes: String(target.className || '').slice(0, 120),
                    outbound: isExternalHttp,
                    link_type: linkType,
                    link_area: linkArea,
                    link_position: linkArea,
                    source_page_path: window.location.pathname,
                    target_page_path: url.pathname || '',
                  };

                  // 所有真实链接统一进入 link_click，运营报表以该事件为准。
                  window.xbTrackEvent('link_click', payload);

                  if (linkType === 'external' || linkType === 'github') {
                    window.xbTrackEvent('click_external', payload);
                  }
                  if (linkType === 'github') {
                    window.xbTrackEvent('github_click', payload);
                  }
                  if (linkType === 'download') {
                    window.xbTrackEvent('download_click', payload);
                  }
                  if (linkType === 'affiliate') {
                    window.xbTrackEvent('affiliate_click', {
                      ...payload,
                      affiliate_slug: url.pathname.replace(/^\\/go\\//, '').replace(/\\/$/, ''),
                    });
                  }
                  if (linkType === 'tool') {
                    window.xbTrackEvent('click_tool', payload);
                  }
                  if (linkType === 'newsletter') {
                    window.xbTrackEvent('newsletter_click', payload);
                  }
                  if (linkType === 'related_article') {
                    window.xbTrackEvent('related_article_click', payload);
                  }
                  if (['internal', 'internal_article', 'related_article', 'anchor'].includes(linkType)) {
                    window.xbTrackEvent('internal_link_click', payload);
                  }
                  if (
                    !isExternalHttp &&
                    ['/ai/', '/newsletter/', '/search/', '/life/', '/investing/'].some((prefix) => url.pathname.startsWith(prefix))
                  ) {
                    window.xbTrackEvent('click_internal_entry', payload);
                  }
                } catch (err) {}
              };

              const handleSubmit = (e) => {
                if (!e?.isTrusted || !window.__ga4_human_verified) return;
                const form = e.target;
                if (!form || form.tagName !== 'FORM') return;
                const action = form.getAttribute('action') || '';
                const formType = form.getAttribute('data-analytics-form') || '';
                const formData = new FormData(form);
                const searchTerm = String(formData.get('q') || '').trim();

                if (action.includes('/search') || formType === 'site-search') {
                  window.xbTrackEvent('view_search_results', {
                    event_category: 'site_search',
                    search_term: searchTerm,
                  });
                }

                if (action.includes('buttondown.email') || formType === 'newsletter') {
                  const provider = action.includes('buttondown.email') ? 'buttondown' : 'xbstack_api';
                  window.xbTrackEvent('newsletter_subscribe_attempt', {
                    event_category: 'conversion',
                    event_label: window.location.pathname,
                    newsletter_provider: provider,
                  });
                  window.xbTrackEvent('newsletter_subscribe', {
                    event_category: 'conversion',
                    event_label: 'submitted',
                    newsletter_provider: provider,
                    confirmation_status: 'submitted',
                  });
                }
              };

              document.addEventListener('click', handleClick);
              document.addEventListener('submit', handleSubmit, true);
            };

            // 原始访问先进入 GA4，再通过 traffic_verification 区分未验证访问与真人互动。
            // 这样既保留完整 page_view / session_start 基线，也能在报表层排除低质量流量。
            window.loadGA4Client = () => {
              if (window.__ga4_client_loaded) return;
              window.__ga4_client_loaded = true;
              window.dataLayer = window.dataLayer || [];
              window.gtag = function() {
                window.dataLayer.push(arguments);
              };

              const ga4Script = document.createElement('script');
              ga4Script.async = true;
              ga4Script.src = \`https://www.googletagmanager.com/gtag/js?id=\${encodeURIComponent(googleAnalyticsId)}\`;
              document.head.appendChild(ga4Script);

              window.gtag('js', new Date());
              window.gtag('config', googleAnalyticsId, {
                send_page_view: false,
                traffic_verification: window.__ga4_session_class || 'unverified_session',
              });
            };

            window.startGA4Tracking = (
              reason = 'page_load',
              sessionClass = 'unverified_session',
              humanVerified = false,
            ) => {
              if (window.__ga4_tracking_started) {
                if (humanVerified && !window.__ga4_human_verified) {
                  window.verifyGA4Human(reason, sessionClass);
                }
                return;
              }
              window.__ga4_tracking_start_reason = String(reason || 'page_load').slice(0, 60);
              window.__ga4_session_class = String(sessionClass || 'unverified_session').slice(0, 40);
              window.__ga4_human_verified = Boolean(humanVerified);
              window.__ga4_tracking_started = true;
              window.loadGA4Client();
              window.sendGA4PageView();
              window.initGA4Tracking();
            };

            window.verifyGA4Human = (reason = 'interaction', sessionClass = 'human_interaction') => {
              if (!window.__ga4_tracking_started) {
                window.startGA4Tracking(reason, sessionClass, true);
                return;
              }
              if (window.__ga4_human_verified) return;

              const previousClass = window.__ga4_session_class || 'unverified_session';
              window.__ga4_human_verified = true;
              window.__ga4_session_class = String(sessionClass || 'human_interaction').slice(0, 40);
              window.__ga4_tracking_start_reason = String(reason || 'interaction').slice(0, 60);
              window.gtag('event', 'traffic_verified', {
                transport_type: 'beacon',
                traffic_verification: window.__ga4_session_class,
                previous_traffic_verification: previousClass,
                verification_reason: window.__ga4_tracking_start_reason,
                page_path: window.location.pathname,
                page_title: document.title || '',
              });
            };

            ['pointerdown', 'keydown', 'touchstart'].forEach((eventName) => {
              window.addEventListener(
                eventName,
                (event) => {
                  if (!event?.isTrusted) return;
                  window.verifyGA4Human(\`interaction:\${eventName}\`, 'human_interaction');
                },
                { once: true, passive: true },
              );
            });

            let pointerMoveCount = 0;
            let pointerMoveDistance = 0;
            let lastPointerX = null;
            let lastPointerY = null;
            const handleHumanPointerMove = (event) => {
              if (
                window.__ga4_human_verified ||
                !event?.isTrusted ||
                event.pointerType === 'touch'
              ) return;
              if (lastPointerX !== null && lastPointerY !== null) {
                pointerMoveDistance += Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY);
              }
              lastPointerX = event.clientX;
              lastPointerY = event.clientY;
              pointerMoveCount += 1;
              if (pointerMoveCount >= 3 && pointerMoveDistance >= 120) {
                window.removeEventListener('pointermove', handleHumanPointerMove);
                window.verifyGA4Human('interaction:pointermove', 'human_interaction');
              }
            };
            window.addEventListener('pointermove', handleHumanPointerMove, { passive: true });

            // 放宽采集：所有可见前台页面都记录原始访问；真人互动后再升级质量标签。
            window.setTimeout(() => {
              if (
                window.__ga4_tracking_started ||
                document.visibilityState !== 'visible'
              ) return;
              window.startGA4Tracking('page_load:visible_800ms', 'unverified_session', false);
            }, 800);

            document.addEventListener("astro:page-load", () => {
              if (typeof window.sanitizeInternalUtm === 'function') window.sanitizeInternalUtm();
              if (window.__ga4_tracking_started) {
                window.sendGA4PageView();
                window.initGA4Tracking();
              }
            });
          } else {
            // View Transitions 切换页面时先清理内部 UTM，再触发新页面上报。
            if (typeof window.sanitizeInternalUtm === 'function') window.sanitizeInternalUtm();
            if (window.__ga4_tracking_started && typeof window.sendGA4PageView === 'function') {
              window.sendGA4PageView();
            }
          }
        })();</script><script`, `>
          const baiduId = document.currentScript?.dataset.baiduId || '';
          if (!window.__baidu_analytics_initialized) {
            window._hmt = window._hmt || [];
            window.__baidu_analytics_initialized = true;
            window.__lastBaiduPageKey = window.location.pathname + window.location.search;

            const loadBaiduAnalytics = () => {
              if (window.__baidu_script_loaded || !baiduId) return;
              window.__baidu_script_loaded = true;
              const hm = document.createElement('script');
              hm.async = true;
              hm.src = "https://hm.baidu.com/hm.js?" + baiduId;
              document.head.appendChild(hm);
              window.__lastBaiduPageKey = window.location.pathname + window.location.search;
            };

            // 百度统计不是首屏渲染依赖：首次交互时加载，若用户未交互则 12 秒后加载。
            ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((eventName) => {
              window.addEventListener(eventName, loadBaiduAnalytics, { once: true, passive: true });
            });
            window.setTimeout(loadBaiduAnalytics, 12000);

            document.addEventListener('astro:page-load', () => {
              const pageKey = window.location.pathname + window.location.search;
              if (!window.__baidu_script_loaded || pageKey === window.__lastBaiduPageKey) return;
              window.__lastBaiduPageKey = pageKey;
              window._hmt.push(['_trackPageview', pageKey]);
            });
          }
        </script>`], ["<script>(function(){", `
          const productionAnalyticsHosts = new Set(['www.xbstack.com', 'xbstack.com']);
          const automationUserAgent = /HeadlessChrome|PhantomJS|Playwright|Puppeteer|Selenium|Lighthouse|PageSpeed|bot\\\\b|crawler|spider|slurp|curl|wget|python-requests|axios|node-fetch|facebookexternalhit|Twitterbot|LinkedInBot|Bytespider|GPTBot|ClaudeBot|PerplexityBot/i;
          const analyticsUrl = new URL(window.location.href);
          const analyticsSource = String(analyticsUrl.searchParams.get('utm_source') || '').toLowerCase();
          const analyticsCampaign = String(analyticsUrl.searchParams.get('utm_campaign') || '').toLowerCase();
          const internalAnalyticsAudit =
            analyticsUrl.searchParams.has('ga4_audit') ||
            analyticsUrl.searchParams.has('analytics_test') ||
            ['internal', 'internal_test', 'qa', 'test'].includes(analyticsSource) ||
            analyticsCampaign.includes('ga4_audit') ||
            analyticsCampaign.includes('internal_test');
          const shouldTrackAnalytics =
            Boolean(googleAnalyticsId) &&
            productionAnalyticsHosts.has(window.location.hostname.toLowerCase()) &&
            navigator.webdriver !== true &&
            !automationUserAgent.test(navigator.userAgent || '') &&
            !internalAnalyticsAudit;

          if (!shouldTrackAnalytics) {
            window.__analytics_suppressed = true;
            window.__analytics_suppression_reason = internalAnalyticsAudit ? 'internal_test' : 'environment_or_automation';
          } else if (!window.__ga4_initialized) {
            const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'];
            const UTM_ALIASES = {
              utmsource: 'utm_source',
              utmmedium: 'utm_medium',
              utmcampaign: 'utm_campaign',
              utmcontent: 'utm_content',
              utmterm: 'utm_term',
              utmid: 'utm_id',
            };
            const INTERNAL_UTM_SOURCES = new Set(['inner', 'internal', 'internal_link', 'reading_system']);
            window.normalizeUtmAliases = () => {
              try {
                const url = new URL(window.location.href);
                let changed = false;
                Object.entries(UTM_ALIASES).forEach(([alias, canonical]) => {
                  const aliasValue = url.searchParams.get(alias);
                  if (aliasValue && !url.searchParams.get(canonical)) {
                    url.searchParams.set(canonical, aliasValue);
                    changed = true;
                  }
                  if (url.searchParams.has(alias)) {
                    url.searchParams.delete(alias);
                    changed = true;
                  }
                });
                if (changed) window.history.replaceState(window.history.state, '', url.href);
              } catch (err) {}
            };
            window.normalizeUtmAliases();
            window.sanitizeInternalUtm = () => {
              try {
                const url = new URL(window.location.href);
                const source = String(url.searchParams.get('utm_source') || '').toLowerCase();
                const referrerUrl = document.referrer ? new URL(document.referrer) : null;
                const sameOriginReferrer = Boolean(referrerUrl && referrerUrl.origin === window.location.origin);
                if (!sameOriginReferrer && !INTERNAL_UTM_SOURCES.has(source)) return;
                let changed = false;
                UTM_KEYS.forEach((key) => {
                  if (url.searchParams.has(key)) {
                    url.searchParams.delete(key);
                    changed = true;
                  }
                });
                if (changed) window.history.replaceState(window.history.state, '', url.href);
              } catch (err) {}
            };
            window.sanitizeInternalUtm();

            window.__ga4_initialized = true;
            window.__ga4_client_loaded = false;
            window.__ga4_tracking_started = false;
            window.__ga4_human_verified = false;
            window.__ga4_session_class = '';
            window.__lastGA4PageKey = "";
            window.__lastGA4PageLocation = document.referrer || "";
            window.__ga4_tracking_start_reason = '';
            window.__scroll50Reported = false;
            window.__scroll90Reported = false;

            const getReferrerHost = () => {
              try {
                return document.referrer ? new URL(document.referrer).hostname.replace(/^www\\\\./, '') : '';
              } catch (err) {
                return '';
              }
            };

            const inferSourceHint = () => {
              const refHost = getReferrerHost();
              if (!refHost) return '';
              if (refHost.includes('zhihu')) return 'zhihu_referrer';
              if (refHost.includes('juejin')) return 'juejin_referrer';
              if (refHost.includes('csdn')) return 'csdn_referrer';
              if (refHost.includes('weixin') || refHost.includes('wechat')) return 'wechat_referrer';
              if (refHost.includes('google')) return 'google_referrer';
              if (refHost.includes('baidu')) return 'baidu_referrer';
              return refHost;
            };

            const getAttributionPayload = () => {
              const params = new URLSearchParams(window.location.search);
              const current = {};
              UTM_KEYS.forEach((key) => {
                const value = params.get(key);
                if (value) current[key] = value;
              });

              const referrerHost = getReferrerHost();
              const currentHost = window.location.hostname.replace(/^www\\\\./, '');
              const sourceHint = inferSourceHint();
              const hasExternalReferrer = Boolean(referrerHost && referrerHost !== currentHost);

              let stored = {};
              try {
                stored = JSON.parse(sessionStorage.getItem('xbstack_attribution') || '{}');
              } catch (err) {
                stored = {};
              }

              if (Object.keys(current).length) {
                stored = {
                  ...stored,
                  ...current,
                  landing_page: window.location.pathname,
                  referrer_host: referrerHost,
                  source_hint: current.utm_source ? \\\`utm:\\\${current.utm_source}\\\` : sourceHint,
                  captured_at: new Date().toISOString(),
                };
              } else if (hasExternalReferrer && !stored.captured_at) {
                // Preserve first-touch referral attribution even when the platform strips UTM parameters.
                stored = {
                  ...stored,
                  landing_page: window.location.pathname,
                  referrer_host: referrerHost,
                  source_hint: sourceHint,
                  captured_at: new Date().toISOString(),
                };
              }

              if (stored.captured_at) {
                try {
                  sessionStorage.setItem('xbstack_attribution', JSON.stringify(stored));
                } catch (err) {}
              }

              return {
                utm_source: stored.utm_source || '',
                utm_medium: stored.utm_medium || '',
                utm_campaign: stored.utm_campaign || '',
                utm_id: stored.utm_id || '',
                utm_term: stored.utm_term || '',
                utm_content: stored.utm_content || '',
                attribution_landing_page: stored.landing_page || '',
                referrer_host: stored.referrer_host || referrerHost,
                source_hint: stored.source_hint || (stored.utm_source ? \\\`utm:\\\${stored.utm_source}\\\` : sourceHint),
              };
            };

            const getAnalyticsPageContext = () => {
              const url = new URL(window.location.href);
              const isCompoundCalculator = [
                '/tools/compound-calculator/',
                '/en/tools/compound-calculator/',
              ].includes(url.pathname);

              if (isCompoundCalculator) {
                ['scenario', 'principal', 'monthly', 'rate', 'years', 'volatility', 'inflation', 'm2_drag', 'target', 'compare_rate'].forEach((key) => {
                  url.searchParams.delete(key);
                });
              }

              return {
                pagePath: url.pathname,
                pageLocation: url.href,
                pageSearch: url.search,
              };
            };

            window.xbTrackEvent = (eventName, payload = {}) => {
              if (
                typeof window.gtag !== 'function' ||
                !googleAnalyticsId ||
                !eventName ||
                !window.__ga4_tracking_started ||
                !window.__ga4_human_verified
              ) return;
              const analyticsPage = getAnalyticsPageContext();
              window.gtag('event', eventName, {
                transport_type: 'beacon',
                page_path: analyticsPage.pagePath,
                page_title: document.title || '',
                tracking_start_reason: window.__ga4_tracking_start_reason || 'unknown',
                traffic_verification: window.__ga4_session_class || 'unverified_session',
                ...getAttributionPayload(),
                ...payload,
              });
            };

            window.sendGA4PageView = () => {
              if (
                typeof window.gtag !== 'function' ||
                !googleAnalyticsId ||
                !window.__ga4_tracking_started
              ) return;

              const analyticsPage = getAnalyticsPageContext();
              const pageLocation = analyticsPage.pageLocation;
              const pageTitle = document.title || '';
              const pageKey = \\\`\\\${pageLocation}|\\\${pageTitle}\\\`;

              if (pageKey === window.__lastGA4PageKey) return;
              const pageReferrer = window.__lastGA4PageLocation;
              window.__lastGA4PageKey = pageKey;
              window.__lastGA4PageLocation = pageLocation;
              window.__scroll50Reported = false;
              window.__scroll90Reported = false;

              window.gtag('event', 'page_view', {
                page_title: pageTitle,
                page_location: pageLocation,
                page_path: analyticsPage.pagePath,
                page_search: analyticsPage.pageSearch,
                page_referrer: pageReferrer,
                tracking_start_reason: window.__ga4_tracking_start_reason || 'unknown',
                traffic_verification: window.__ga4_session_class || 'unverified_session',
                ...getAttributionPayload(),
              });
            };

            window.initGA4Tracking = () => {
              if (typeof window.gtag !== 'function') return;
              if (window.__ga4_events_bound) return;
              window.__ga4_events_bound = true;

              // 1. 页面滚动深度上报
              const handleScroll = (event) => {
                if (!event?.isTrusted || !window.__ga4_human_verified) return;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                if (scrollHeight <= 0) return;
                const progress = (scrollTop / scrollHeight) * 100;

                if (progress >= 50 && !window.__scroll50Reported) {
                  window.xbTrackEvent('scroll_50', { event_category: 'engagement', event_label: window.location.pathname });
                  window.__scroll50Reported = true;
                }
                if (progress >= 90 && !window.__scroll90Reported) {
                  window.xbTrackEvent('scroll_90', { event_category: 'engagement', event_label: window.location.pathname });
                  window.__scroll90Reported = true;
                }
              };

              window.addEventListener('scroll', handleScroll, { passive: true });

              // 2. 完整链接与按钮点击上报。link_click 是统一事实表，旧事件继续保留用于历史对比。
              const inferLinkArea = (target) => {
                const explicitArea = target.closest('[data-analytics-area]')?.getAttribute('data-analytics-area');
                if (explicitArea) return explicitArea.slice(0, 60);
                if (target.closest('header, nav, [role="navigation"]')) return 'navigation';
                if (target.closest('footer')) return 'footer';
                if (target.closest('[class*="related"], [class*="recommend"], [class*="next-reading"]')) return 'related_content';
                if (target.closest('[class*="sidebar"], aside')) return 'sidebar';
                if (target.closest('.markdown-content, article')) return 'article_body';
                if (target.closest('[class*="card"], [class*="grid"]')) return 'content_card';
                return 'page_other';
              };

              const classifyLink = (target, url, linkArea) => {
                const rawHref = String(target.getAttribute('href') || '');
                const protocol = String(url.protocol || '').toLowerCase();
                const path = String(url.pathname || '/');
                const host = String(url.hostname || '').replace(/^www\\\\./, '').toLowerCase();
                const isHttp = protocol === 'http:' || protocol === 'https:';
                const isExternal = isHttp && url.origin !== window.location.origin;
                const isDownload =
                  target.hasAttribute('download') ||
                  /\\\\.(pdf|zip|gz|tar|csv|xlsx?|docx?|pptx?|json|ya?ml|mp3|mp4|mov|webm)(?:$|[?#])/i.test(rawHref);

                if (protocol === 'mailto:' || protocol === 'tel:') return 'contact';
                if (isDownload) return 'download';
                if (isExternal && host === 'github.com') return 'github';
                if (isExternal) return 'external';
                if (path.startsWith('/go/')) return 'affiliate';
                if (path.startsWith('/tools/') || path.startsWith('/compound-interest/')) return 'tool';
                if (path.startsWith('/newsletter/')) return 'newsletter';
                if (url.origin === window.location.origin && path === window.location.pathname && url.hash) return 'anchor';
                if (linkArea === 'related_content') return 'related_article';
                if (linkArea === 'article_body') return 'internal_article';
                return 'internal';
              };

              const handleClick = (e) => {
                if (!e?.isTrusted || !window.__ga4_human_verified) return;
                const target = e.target.closest('a,button');
                if (!target) return;

                const label = (target.getAttribute('aria-label') || target.textContent || '').trim().replace(/\\\\s+/g, ' ').slice(0, 100);
                if (target.tagName === 'BUTTON') {
                  window.xbTrackEvent('click_button', {
                    event_category: 'engagement',
                    event_label: label,
                    link_area: inferLinkArea(target),
                    link_position: inferLinkArea(target),
                    source_page_path: window.location.pathname,
                  });
                  return;
                }

                const rawHref = String(target.getAttribute('href') || '').trim();
                if (!rawHref || rawHref.toLowerCase().startsWith('javascript:')) return;

                try {
                  const url = new URL(rawHref, window.location.href);
                  const linkArea = inferLinkArea(target);
                  const linkType = classifyLink(target, url, linkArea);
                  const isExternalHttp =
                    (url.protocol === 'http:' || url.protocol === 'https:') &&
                    url.origin !== window.location.origin;
                  const payload = {
                    event_category:
                      ['affiliate', 'tool', 'newsletter'].includes(linkType)
                        ? 'conversion'
                        : isExternalHttp
                          ? 'outbound'
                          : 'navigation',
                    event_label: url.href,
                    link_text: label,
                    link_url: url.href,
                    link_domain: url.hostname.replace(/^www\\\\./, ''),
                    link_id: target.id || '',
                    link_classes: String(target.className || '').slice(0, 120),
                    outbound: isExternalHttp,
                    link_type: linkType,
                    link_area: linkArea,
                    link_position: linkArea,
                    source_page_path: window.location.pathname,
                    target_page_path: url.pathname || '',
                  };

                  // 所有真实链接统一进入 link_click，运营报表以该事件为准。
                  window.xbTrackEvent('link_click', payload);

                  if (linkType === 'external' || linkType === 'github') {
                    window.xbTrackEvent('click_external', payload);
                  }
                  if (linkType === 'github') {
                    window.xbTrackEvent('github_click', payload);
                  }
                  if (linkType === 'download') {
                    window.xbTrackEvent('download_click', payload);
                  }
                  if (linkType === 'affiliate') {
                    window.xbTrackEvent('affiliate_click', {
                      ...payload,
                      affiliate_slug: url.pathname.replace(/^\\\\/go\\\\//, '').replace(/\\\\/$/, ''),
                    });
                  }
                  if (linkType === 'tool') {
                    window.xbTrackEvent('click_tool', payload);
                  }
                  if (linkType === 'newsletter') {
                    window.xbTrackEvent('newsletter_click', payload);
                  }
                  if (linkType === 'related_article') {
                    window.xbTrackEvent('related_article_click', payload);
                  }
                  if (['internal', 'internal_article', 'related_article', 'anchor'].includes(linkType)) {
                    window.xbTrackEvent('internal_link_click', payload);
                  }
                  if (
                    !isExternalHttp &&
                    ['/ai/', '/newsletter/', '/search/', '/life/', '/investing/'].some((prefix) => url.pathname.startsWith(prefix))
                  ) {
                    window.xbTrackEvent('click_internal_entry', payload);
                  }
                } catch (err) {}
              };

              const handleSubmit = (e) => {
                if (!e?.isTrusted || !window.__ga4_human_verified) return;
                const form = e.target;
                if (!form || form.tagName !== 'FORM') return;
                const action = form.getAttribute('action') || '';
                const formType = form.getAttribute('data-analytics-form') || '';
                const formData = new FormData(form);
                const searchTerm = String(formData.get('q') || '').trim();

                if (action.includes('/search') || formType === 'site-search') {
                  window.xbTrackEvent('view_search_results', {
                    event_category: 'site_search',
                    search_term: searchTerm,
                  });
                }

                if (action.includes('buttondown.email') || formType === 'newsletter') {
                  const provider = action.includes('buttondown.email') ? 'buttondown' : 'xbstack_api';
                  window.xbTrackEvent('newsletter_subscribe_attempt', {
                    event_category: 'conversion',
                    event_label: window.location.pathname,
                    newsletter_provider: provider,
                  });
                  window.xbTrackEvent('newsletter_subscribe', {
                    event_category: 'conversion',
                    event_label: 'submitted',
                    newsletter_provider: provider,
                    confirmation_status: 'submitted',
                  });
                }
              };

              document.addEventListener('click', handleClick);
              document.addEventListener('submit', handleSubmit, true);
            };

            // 原始访问先进入 GA4，再通过 traffic_verification 区分未验证访问与真人互动。
            // 这样既保留完整 page_view / session_start 基线，也能在报表层排除低质量流量。
            window.loadGA4Client = () => {
              if (window.__ga4_client_loaded) return;
              window.__ga4_client_loaded = true;
              window.dataLayer = window.dataLayer || [];
              window.gtag = function() {
                window.dataLayer.push(arguments);
              };

              const ga4Script = document.createElement('script');
              ga4Script.async = true;
              ga4Script.src = \\\`https://www.googletagmanager.com/gtag/js?id=\\\${encodeURIComponent(googleAnalyticsId)}\\\`;
              document.head.appendChild(ga4Script);

              window.gtag('js', new Date());
              window.gtag('config', googleAnalyticsId, {
                send_page_view: false,
                traffic_verification: window.__ga4_session_class || 'unverified_session',
              });
            };

            window.startGA4Tracking = (
              reason = 'page_load',
              sessionClass = 'unverified_session',
              humanVerified = false,
            ) => {
              if (window.__ga4_tracking_started) {
                if (humanVerified && !window.__ga4_human_verified) {
                  window.verifyGA4Human(reason, sessionClass);
                }
                return;
              }
              window.__ga4_tracking_start_reason = String(reason || 'page_load').slice(0, 60);
              window.__ga4_session_class = String(sessionClass || 'unverified_session').slice(0, 40);
              window.__ga4_human_verified = Boolean(humanVerified);
              window.__ga4_tracking_started = true;
              window.loadGA4Client();
              window.sendGA4PageView();
              window.initGA4Tracking();
            };

            window.verifyGA4Human = (reason = 'interaction', sessionClass = 'human_interaction') => {
              if (!window.__ga4_tracking_started) {
                window.startGA4Tracking(reason, sessionClass, true);
                return;
              }
              if (window.__ga4_human_verified) return;

              const previousClass = window.__ga4_session_class || 'unverified_session';
              window.__ga4_human_verified = true;
              window.__ga4_session_class = String(sessionClass || 'human_interaction').slice(0, 40);
              window.__ga4_tracking_start_reason = String(reason || 'interaction').slice(0, 60);
              window.gtag('event', 'traffic_verified', {
                transport_type: 'beacon',
                traffic_verification: window.__ga4_session_class,
                previous_traffic_verification: previousClass,
                verification_reason: window.__ga4_tracking_start_reason,
                page_path: window.location.pathname,
                page_title: document.title || '',
              });
            };

            ['pointerdown', 'keydown', 'touchstart'].forEach((eventName) => {
              window.addEventListener(
                eventName,
                (event) => {
                  if (!event?.isTrusted) return;
                  window.verifyGA4Human(\\\`interaction:\\\${eventName}\\\`, 'human_interaction');
                },
                { once: true, passive: true },
              );
            });

            let pointerMoveCount = 0;
            let pointerMoveDistance = 0;
            let lastPointerX = null;
            let lastPointerY = null;
            const handleHumanPointerMove = (event) => {
              if (
                window.__ga4_human_verified ||
                !event?.isTrusted ||
                event.pointerType === 'touch'
              ) return;
              if (lastPointerX !== null && lastPointerY !== null) {
                pointerMoveDistance += Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY);
              }
              lastPointerX = event.clientX;
              lastPointerY = event.clientY;
              pointerMoveCount += 1;
              if (pointerMoveCount >= 3 && pointerMoveDistance >= 120) {
                window.removeEventListener('pointermove', handleHumanPointerMove);
                window.verifyGA4Human('interaction:pointermove', 'human_interaction');
              }
            };
            window.addEventListener('pointermove', handleHumanPointerMove, { passive: true });

            // 放宽采集：所有可见前台页面都记录原始访问；真人互动后再升级质量标签。
            window.setTimeout(() => {
              if (
                window.__ga4_tracking_started ||
                document.visibilityState !== 'visible'
              ) return;
              window.startGA4Tracking('page_load:visible_800ms', 'unverified_session', false);
            }, 800);

            document.addEventListener("astro:page-load", () => {
              if (typeof window.sanitizeInternalUtm === 'function') window.sanitizeInternalUtm();
              if (window.__ga4_tracking_started) {
                window.sendGA4PageView();
                window.initGA4Tracking();
              }
            });
          } else {
            // View Transitions 切换页面时先清理内部 UTM，再触发新页面上报。
            if (typeof window.sanitizeInternalUtm === 'function') window.sanitizeInternalUtm();
            if (window.__ga4_tracking_started && typeof window.sendGA4PageView === 'function') {
              window.sendGA4PageView();
            }
          }
        })();</script><script`, `>
          const baiduId = document.currentScript?.dataset.baiduId || '';
          if (!window.__baidu_analytics_initialized) {
            window._hmt = window._hmt || [];
            window.__baidu_analytics_initialized = true;
            window.__lastBaiduPageKey = window.location.pathname + window.location.search;

            const loadBaiduAnalytics = () => {
              if (window.__baidu_script_loaded || !baiduId) return;
              window.__baidu_script_loaded = true;
              const hm = document.createElement('script');
              hm.async = true;
              hm.src = "https://hm.baidu.com/hm.js?" + baiduId;
              document.head.appendChild(hm);
              window.__lastBaiduPageKey = window.location.pathname + window.location.search;
            };

            // 百度统计不是首屏渲染依赖：首次交互时加载，若用户未交互则 12 秒后加载。
            ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((eventName) => {
              window.addEventListener(eventName, loadBaiduAnalytics, { once: true, passive: true });
            });
            window.setTimeout(loadBaiduAnalytics, 12000);

            document.addEventListener('astro:page-load', () => {
              const pageKey = window.location.pathname + window.location.search;
              if (!window.__baidu_script_loaded || pageKey === window.__lastBaiduPageKey) return;
              window.__lastBaiduPageKey = pageKey;
              window._hmt.push(['_trackPageview', pageKey]);
            });
          }
        </script>`])), defineScriptVars({ googleAnalyticsId }), addAttribute(baiduAnalyticsId, "data-baidu-id")) })}`, renderHead(), renderComponent($$result, "GlobalLightbox", GlobalLightbox, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/ui/GlobalLightbox", "client:component-export": "default" }), renderComponent($$result, "AffiliatePopup", AffiliatePopup, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/common/AffiliatePopup.jsx", "client:component-export": "default" }), renderComponent($$result, "SearchBoot", SearchBoot, { "client:idle": true, "lang": lang, "client:component-hydration": "idle", "client:component-path": "@components/search/SearchBoot", "client:component-export": "default" }), renderComponent($$result, "Background", $$Background, {}), renderComponent($$result, "Header", $$Header, { "lang": lang, "alternates": alternates }), renderSlot($$result, $$slots["default"]), !hideFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "lang": lang })}`, renderComponent($$result, "WechatPopup", $$WechatPopup, { "lang": lang }));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/base/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
