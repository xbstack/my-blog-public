import { e as createAstro, c as createComponent, H as defineStyleVars, m as maybeRenderHead, d as addAttribute, r as renderTemplate, u as unescapeHTML, w as renderSlot, b as renderComponent } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_CyEcQoQM.mjs';
import { SiXiaohongshu } from 'react-icons/si';
import { FaWeixin, FaEnvelope, FaGithub } from 'react-icons/fa';
/* empty css                         */
import 'clsx';
import { S as SITE_INFO } from './config_CLUEJusO.mjs';

const AuthorImage = new Proxy({"src":"/_astro/avatar.BzDyfp9G.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/beijingchaoyang/MyWeb/blog/src/assets/avatar.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://www.xbstack.com");
const $$GlassButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GlassButton;
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    icon,
    iconPosition = "left",
    className = "",
    id,
    title,
    type = "button",
    onClick,
    open = true
  } = Astro2.props;
  const variantStyles = {
    primary: {
      base: "rgba(255, 186, 186, 0.25)",
      hover: "rgba(239, 68, 68, 0.35)",
      border: "rgba(248, 113, 113, 0.4)",
      hoverBorder: "rgba(248, 113, 113, 0.6)",
      color: "#dc2626",
      hoverColor: "#ef4444",
      shadow: "rgba(220, 38, 38, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    secondary: {
      base: "rgba(59, 130, 246, 0.25)",
      hover: "rgba(59, 130, 246, 0.35)",
      border: "rgba(71, 158, 255, 0.4)",
      hoverBorder: "rgba(73, 158, 254, 0.6)",
      color: "#2563eb",
      hoverColor: "#3b82f6",
      shadow: "rgba(37, 99, 235, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    success: {
      base: "rgba(34, 197, 94, 0.25)",
      hover: "rgba(34, 197, 94, 0.35)",
      border: "rgba(74, 222, 128, 0.4)",
      hoverBorder: "rgba(74, 222, 128, 0.6)",
      color: "#16a34a",
      hoverColor: "#22c55e",
      shadow: "rgba(22, 163, 74, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    warning: {
      base: "#fb923c",
      hover: "#ffa155",
      border: "#fb7d3c",
      hoverBorder: "#ff6900",
      color: "#ffffff",
      hoverColor: "#ffffff",
      shadow: "rgba(217, 119, 6, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    danger: {
      base: "rgba(239, 68, 68, 0.25)",
      hover: "rgba(239, 68, 68, 0.35)",
      border: "rgba(248, 113, 113, 0.4)",
      hoverBorder: "rgba(248, 113, 113, 0.6)",
      color: "#dc2626",
      hoverColor: "#ef4444",
      shadow: "rgba(220, 38, 38, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    info: {
      base: "rgb(244, 244, 244, 0.4)",
      hover: "rgb(244, 244, 244, 0.6)",
      border: "rgba(255, 255, 255, 0.8)",
      hoverBorder: "rgba(255, 255, 255, 0.9)",
      color: "#383838",
      hoverColor: "#272727",
      shadow: "rgba(99, 102, 241, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    menu: {
      base: "rgb(244, 244, 244, 0.4)",
      hover: "rgb(244, 244, 244, 0.6)",
      border: "rgba(255, 255, 255, 0.8)",
      hoverBorder: "rgba(255, 255, 255, 0.9)",
      color: "rgb(234, 88, 12)",
      hoverColor: "rgb(249, 115, 22)",
      shadow: "rgba(150, 150, 150, 0.6)",
      gradient: "rgba(255, 255, 255, 0.3)"
    }
  };
  const sizeStyles = {
    sm: {
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
      iconSize: "0.875rem",
      gap: "0.375rem",
      // borderRadius: "0.75rem",
      borderRadius: "999px"
    },
    md: {
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      iconSize: "1rem",
      gap: "0.5rem",
      // borderRadius: "1rem",
      borderRadius: "999px"
    },
    lg: {
      padding: "1rem 1.25rem",
      fontSize: "1.1rem",
      iconSize: "1.125rem",
      gap: "0.625rem",
      // borderRadius: "1.25rem",
      borderRadius: "30px"
    },
    menu: {
      padding: "0.5rem 1rem",
      iconSize: "1.25rem",
      fontSize: "inherit",
      gap: "inherit",
      // borderRadius: "9999px",
      borderRadius: "37px"
    }
  };
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];
  const $$definedVars = defineStyleVars([{
    variantBase: currentVariant.base,
    variantHover: currentVariant.hover,
    variantBorder: currentVariant.border,
    variantHoverBorder: currentVariant.hoverBorder,
    variantColor: currentVariant.color,
    variantHoverColor: currentVariant.hoverColor,
    variantShadow: currentVariant.shadow,
    variantGradient: currentVariant.gradient,
    sizePadding: currentSize.padding,
    sizeFontSize: currentSize.fontSize,
    sizeIconSize: currentSize.iconSize,
    sizeGap: currentSize.gap,
    sizeBorderRadius: currentSize.borderRadius
  }]);
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(type, "type")}${addAttribute(open ? `glass-button glass-button--${variant} glass-button--${size} select-none ${className} ` : `gap-[${currentSize.gap}] p-[${currentSize.padding}] select-none ${className} `, "class")}${addAttribute(disabled || loading, "disabled")}${addAttribute(title, "title")}${addAttribute(onClick, "onclick")} data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> ${loading && renderTemplate`<svg class="glass-button__spinner" viewBox="0 0 24 24" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}></circle> <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}></path> </svg>`} ${icon && iconPosition === "left" && !loading && renderTemplate`<span class="glass-button__icon" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span>`} <span class="glass-button__content" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </span> ${icon && iconPosition === "right" && !loading && renderTemplate`<span class="glass-button__icon" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span>`} </button> `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/ui/GlassButton.astro", void 0);

const $$Astro$1 = createAstro("https://www.xbstack.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const {
    links,
    showLabels = false,
    wechatLabel = "\u5FAE\u4FE1\u516C\u4F17\u53F7",
    githubLabel = "GitHub",
    emailLabel = "Email",
    className = ""
  } = Astro2.props;
  const liClass = showLabels ? "min-w-0 flex-1 w-full" : "inline-block px-1 intersect:animate-fade opacity-0";
  const buttonClass = showLabels ? "w-full min-w-0 justify-center gap-2 px-3 text-xs font-black" : "min-w-10 justify-center";
  return renderTemplate`${links && renderTemplate`${maybeRenderHead()}<ul${addAttribute(["flex items-center", showLabels ? "w-full gap-2" : "py-2", className], "class:list")}>${links.wechat && renderTemplate`<li${addAttribute(liClass, "class")}><a class="wechat-trigger block" href="/wechat/"${addAttribute(links.wechat, "data-wechat-qr")}${addAttribute(wechatLabel, "aria-label")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "variant": "info", "size": "sm", "iconPosition": "left", "title": wechatLabel, "className": buttonClass }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaWeixin", FaWeixin, { "className": "w-5 h-5 shrink-0 dark:hover:text-green-500 hover:text-green-600 transition duration-300" })}${showLabels ? renderTemplate`<span class="truncate">${wechatLabel}</span>` : renderTemplate`<span class="sr-only">${wechatLabel}</span>`}` })}</a></li>`}${links.xhs && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.xhs, "href")} target="_blank" rel="noopener noreferrer" aria-label="小红书">${renderComponent($$result, "GlassButton", $$GlassButton, { "variant": "info", "size": "sm", "iconPosition": "left", "title": "\u5C0F\u7EA2\u4E66", "className": buttonClass }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SiXiaohongshu", SiXiaohongshu, { "className": "w-5 h-5 shrink-0 dark:hover:text-red-500 hover:text-red-600 transition duration-300" })}${showLabels ? renderTemplate`<span>小红书</span>` : renderTemplate`<span class="sr-only">小红书</span>`}` })}</a></li>`}${links.email && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(`mailto:${links.email}`, "href")}${addAttribute(emailLabel, "aria-label")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "variant": "info", "size": "sm", "iconPosition": "left", "title": emailLabel, "className": buttonClass }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "w-5 h-5 shrink-0 dark:hover:text-yellow-300 hover:text-yellow-500 transition duration-300" })}${showLabels ? renderTemplate`<span>${emailLabel}</span>` : renderTemplate`<span class="sr-only">${emailLabel}</span>`}` })}</a></li>`}${links.github && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.github, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(githubLabel, "aria-label")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "variant": "info", "size": "sm", "iconPosition": "left", "title": githubLabel, "className": buttonClass }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "FaGithub", FaGithub, { "className": "w-5 h-5 shrink-0 dark:hover:text-white hover:text-black transition duration-300" })}${showLabels ? renderTemplate`<span>${githubLabel}</span>` : renderTemplate`<span class="sr-only">${githubLabel}</span>`}` })}</a></li>`}</ul>`}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/Social.astro", void 0);

const $$Astro = createAstro("https://www.xbstack.com");
const $$AuthorSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorSidebar;
  const {
    variant = "default",
    lang = "zh-CN",
    className = ""
  } = Astro2.props;
  const isEnglish = lang === "en";
  const isDefault = variant === "default";
  const isMobile = variant === "mobile";
  const socialLinks = isEnglish ? {
    email: SITE_INFO.SOCIAL_LINKS.email,
    github: SITE_INFO.SOCIAL_LINKS.github
  } : {
    wechat: SITE_INFO.SOCIAL_LINKS.wechat,
    ...isDefault ? { email: SITE_INFO.SOCIAL_LINKS.email } : {},
    github: SITE_INFO.SOCIAL_LINKS.github
  };
  const bio = isEnglish ? "Xiaobai, a full-stack AI engineer building production Agent systems, product tools and independent software assets." : "\u5C0F\u767D\uFF0C\u5168\u6808 AI \u5DE5\u7A0B\u5E08\uFF0C\u6301\u7EED\u6784\u5EFA\u751F\u4EA7\u7EA7 Agent \u7CFB\u7EDF\u3001\u4EA7\u54C1\u5DE5\u5177\u4E0E\u72EC\u7ACB\u8F6F\u4EF6\u8D44\u4EA7\u3002";
  const aboutHref = isEnglish ? "/en/about/" : "/about/";
  const displayName = isEnglish ? "Xiaobai" : "\u5C0F\u767D";
  const aboutLabel = isEnglish ? "About Xiaobai & XBSTACK \u2192" : "\u4E86\u89E3\u5C0F\u767D\u4E0E XBSTACK \u2192";
  const wechatLabel = isEnglish ? `WeChat \xB7 ${SITE_INFO.SOCIAL_LINKS.wechatNickname}` : `\u516C\u4F17\u53F7\uFF1A${SITE_INFO.SOCIAL_LINKS.wechatNickname}`;
  return renderTemplate`${isDefault ? renderTemplate`${maybeRenderHead()}<div${addAttribute(["p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm sticky top-32", className], "class:list")}><div class="flex flex-col items-center text-center space-y-6"><a${addAttribute(aboutHref, "href")} class="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative group"${addAttribute(aboutLabel, "aria-label")}>${renderComponent($$result, "Image", $$Image, { "src": AuthorImage, "alt": isEnglish ? "Xiaobai" : "\u5C0F\u767D", "class": "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" })}<div class="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div></a><a${addAttribute(aboutHref, "href")} class="group"><h3 class="text-2xl font-black text-slate-950 dark:text-white uppercase italic tracking-tighter group-hover:text-orange-500 transition-colors">${displayName}</h3><p class="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mt-2">Full-Stack AI Engineer</p></a><p class="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
" Build autonomous assets. Own your stack. Master the logic. "
</p><div class="w-full h-px bg-slate-100 dark:bg-white/5 my-4"></div>${renderComponent($$result, "Social", $$Social, { "links": socialLinks })}</div></div>` : renderTemplate`<section${addAttribute([
    "bg-white/85 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm",
    isMobile ? "rounded-[24px] p-5 sm:p-6" : "rounded-[24px] p-5",
    className
  ], "class:list")}${addAttribute(isEnglish ? "Author profile" : "\u4F5C\u8005\u540D\u7247", "aria-label")}><a${addAttribute(aboutHref, "href")}${addAttribute([
    "group flex items-center",
    isMobile ? "gap-4 text-left" : "flex-col gap-3 text-center"
  ], "class:list")}><div${addAttribute([
    "rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md relative shrink-0",
    isMobile ? "w-16 h-16" : "w-[72px] h-[72px]"
  ], "class:list")}>${renderComponent($$result, "Image", $$Image, { "src": AuthorImage, "alt": displayName, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })}</div><div${addAttribute(isMobile ? "min-w-0" : "w-full", "class")}><h3 class="text-base font-black text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${displayName}</h3><p class="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-blue-500">Full-Stack AI Engineer</p></div></a><p${addAttribute([
    "font-bold text-slate-600 dark:text-slate-400 leading-relaxed",
    isMobile ? "mt-4 text-sm" : "mt-4 text-xs text-center"
  ], "class:list")}>${bio}</p><a${addAttribute(aboutHref, "href")} class="mt-4 block text-center text-[10px] font-black tracking-[0.12em] text-blue-600 dark:text-blue-400 hover:underline">${aboutLabel}</a><div class="my-4 h-px bg-slate-100 dark:bg-white/5"></div>${renderComponent($$result, "Social", $$Social, { "links": socialLinks, "showLabels": true, "githubLabel": "GitHub", "wechatLabel": wechatLabel, "className": isMobile ? "" : "flex-col" })}</section>`}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/authorSidebar.astro", void 0);

export { $$AuthorSidebar as $, AuthorImage as A };
