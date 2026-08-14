import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, w as renderSlot } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import 'clsx';
import { U as UI_CONFIG } from './config_CxFGSX0T.mjs';
import { format } from 'date-fns-tz';

const $$Astro = createAstro("https://www.xbstack.com");
const $$LiquidGlassLess = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LiquidGlassLess;
  const {
    containerType = "div",
    containerClass = "",
    wrapperClass = "dock",
    animation = "fadeUp",
    heavy = false,
    enableGlassEffect = UI_CONFIG.ENABLE_GLASS_EFFECT,
    textClass = "",
    effectClass = "",
    tintClass = "",
    shineClass = ""
  } = Astro2.props;
  const animationClass = animation !== "none" ? `intersect:animate-${animation} transition-all duration-300 fast-slow` : "";
  const effectClassStr = enableGlassEffect ? (heavy ? "liquidGlass-effect-h " : "liquidGlass-effect ") + effectClass : "";
  const tintClassStr = enableGlassEffect ? (heavy ? "liquidGlass-tint-h " : "liquidGlass-tint ") + tintClass : "";
  const shineClassStr = enableGlassEffect ? `liquidGlass-shine ${shineClass}` : "";
  const flatWrapperClass = enableGlassEffect ? wrapperClass : `${wrapperClass} bg-[#f8f9ff] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md`;
  return renderTemplate`${containerType === "section" ? renderTemplate`${maybeRenderHead()}<section${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></section>` : containerType === "nav" ? renderTemplate`<nav${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text drop-shadow-md-white ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></nav>` : containerType === "header" ? renderTemplate`<header${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></header>` : containerType === "footer" ? renderTemplate`<footer${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></footer>` : renderTemplate`<div${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></div>`}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/LiquidGlassLess.astro", void 0);

const formatDate = (date, format$1 = "yyyy-MM-dd") => {
  if (!date) return "";
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return format(d, format$1);
  } catch (e) {
    return "";
  }
};

const readingTime = (content, complexity) => {
  if (!content) {
    return "0分钟";
  }
  const CPS = 350 / 60;
  let images = 0;
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const englishRegex = /[a-zA-Z0-9]/g;
  const imageRegex = /\.(png|jpg|jpeg|svg|webp|gif)/gi;
  const imageMatches = content.match(imageRegex);
  images = imageMatches ? imageMatches.length : 0;
  const chineseChars = content.match(chineseRegex);
  const chineseCount = chineseChars ? chineseChars.length : 0;
  const englishChars = content.match(englishRegex);
  const englishWordCount = englishChars ? Math.ceil(englishChars.length / 5) : 0;
  const totalChars = chineseCount + englishWordCount;
  let imageSecs = 0;
  let imageFactor = 12;
  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  let ttr = 0;
  ttr = totalChars / CPS;
  ttr = ttr + imageSecs;
  ttr = ttr * complexity;
  ttr = Math.ceil(ttr / 60);
  if (ttr < 1) {
    ttr = 1;
  }
  return ttr + `分钟`;
};

export { $$LiquidGlassLess as $, formatDate as f, readingTime as r };
