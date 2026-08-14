import { slug } from 'github-slugger';
import { marked } from 'marked';
import { d as createAstro, c as createComponent, H as defineStyleVars, m as maybeRenderHead, b as addAttribute, r as renderTemplate, u as unescapeHTML, w as renderSlot, a as renderComponent } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_cm5UI8r_.mjs';
import { A as AuthorImage } from './avatar_CM6aumVI.mjs';
import { SiXiaohongshu } from 'react-icons/si';
import { FaWeixin, FaEnvelope, FaGithub } from 'react-icons/fa';
/* empty css                            */
import 'clsx';
import { S as SITE_INFO } from './config_CxFGSX0T.mjs';

marked.use({
  mangle: false,
  headerIds: false,
  // 启用标题ID，便于目录跳转
  gfm: true,
  // 启用GitHub风格的Markdown
  breaks: true,
  // 支持换行符转换为<br>
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
const renderer = new marked.Renderer();
renderer.heading = function(text, level) {
  const escapedText = slug(text);
  return `<h${level} id="${escapedText}">
    <a href="#${escapedText}" class="anchor-link">${text}</a>
  </h${level}>`;
};
renderer.code = function(code, language) {
  const validLang = language && language !== "" ? language : "text";
  return `<div class="code-block-wrapper">
    <div class="code-block-header">
      <span class="code-language">${validLang}</span>
      <button class="copy-code-btn" onclick="copyCode(this)" title="复制代码">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
    <pre><code class="language-${validLang}">${code}</code></pre>
  </div>`;
};
renderer.table = function(header, body) {
  return `<div class="table-wrapper">
    <table class="markdown-table">
      <thead>${header}</thead>
      <tbody>${body}</tbody>
    </table>
  </div>`;
};
renderer.link = function(href, title, text) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  const titleAttr = title ? ` title="${title}"` : "";
  return `<a href="${href}"${titleAttr}${target}>${text}</a>`;
};
renderer.image = function(href, title, text) {
  const titleAttr = title ? ` title="${title}"` : "";
  return `<figure class="markdown-image">
    <img src="${href}" alt="${text}"${titleAttr} loading="lazy" class="responsive-image" />
    ${text ? `<figcaption>${text}</figcaption>` : ""}
  </figure>`;
};
renderer.blockquote = function(quote) {
  return `<blockquote class="markdown-blockquote">${quote}</blockquote>`;
};
marked.setOptions({ renderer });
const slugify = (content) => {
  if (!content) return "";
  return slug(content.toString());
};
const markdownify = async (content, div) => {
  const options = { renderer };
  return div ? marked.parse(content, options) : marked.parseInline(content, options);
};
const upperHumanize = (content) => {
  if (!content) return "";
  return content.toLowerCase().replace(/-/g, " ").replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
};

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
  const { variant = "default", lang = "zh-CN", className = "" } = Astro2.props;
  const isEnglish = lang === "en";
  const isMobile = variant === "mobile";
  const aboutHref = isEnglish ? "/en/about/" : "/about/";
  const displayName = isEnglish ? "Xiaobai" : "\u5C0F\u767D / Xiaobai";
  const role = isEnglish ? "Developer \xB7 Builder" : "\u5F00\u53D1\u8005 \xB7 \u4EA7\u54C1\u6784\u5EFA\u8005";
  const bio = isEnglish ? "Building AI engineering systems, developer tools and long-term digital assets at XBSTACK." : "\u6301\u7EED\u6784\u5EFA AI \u5DE5\u7A0B\u7CFB\u7EDF\u3001\u5F00\u53D1\u8005\u5DE5\u5177\u4E0E\u957F\u671F\u6570\u5B57\u8D44\u4EA7\u3002";
  const socialLinks = isEnglish ? { github: SITE_INFO.SOCIAL_LINKS.github } : { wechat: SITE_INFO.SOCIAL_LINKS.wechat, github: SITE_INFO.SOCIAL_LINKS.github };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "border border-[var(--xb-line)] bg-[var(--xb-surface)]",
    isMobile ? "rounded-xl p-4" : "rounded-xl p-5",
    className
  ], "class:list")}${addAttribute(isEnglish ? "Author profile" : "\u4F5C\u8005\u4FE1\u606F", "aria-label")}> <a${addAttribute(aboutHref, "href")}${addAttribute(["group flex", isMobile ? "items-center gap-4" : "flex-col items-center text-center"], "class:list")}> <div${addAttribute(["overflow-hidden rounded-full border border-[var(--xb-line)] bg-[var(--xb-surface-soft)]", isMobile ? "h-14 w-14 shrink-0" : "h-[72px] w-[72px]"], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "src": AuthorImage, "alt": displayName, "class": "h-full w-full object-cover" })} </div> <div${addAttribute(isMobile ? "min-w-0" : "mt-3", "class")}> <h3 class="m-0 text-[14px] font-bold tracking-tight text-[var(--xb-ink)] group-hover:text-blue-600 dark:group-hover:text-blue-400">${displayName}</h3> <p class="mt-1 text-[9px] font-bold tracking-wide text-blue-600 dark:text-blue-400">${role}</p> </div> </a> <p${addAttribute(["text-[10px] leading-5 text-[var(--xb-muted)]", isMobile ? "mt-3" : "mt-4 text-center"], "class:list")}>${bio}</p> <a${addAttribute(aboutHref, "href")} class="mt-3 block text-center text-[9px] font-bold text-blue-600 hover:underline dark:text-blue-400">${isEnglish ? "About Xiaobai & XBSTACK \u2192" : "\u5173\u4E8E\u4F5C\u8005\u4E0E XBSTACK \u2192"}</a> <div class="my-3 h-px bg-[var(--xb-line)]"></div> ${renderComponent($$result, "Social", $$Social, { "links": socialLinks, "showLabels": false, "className": "justify-center" })} </section>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/authorSidebar.astro", void 0);

export { $$AuthorSidebar as $, markdownify as m, slugify as s, upperHumanize as u };
