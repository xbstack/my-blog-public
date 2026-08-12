import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, w as renderSlot } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import 'clsx';
import { U as UI_CONFIG } from './config_CLUEJusO.mjs';

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

export { $$LiquidGlassLess as $ };
