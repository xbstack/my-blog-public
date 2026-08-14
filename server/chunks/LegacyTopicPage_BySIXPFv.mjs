import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$CollectionLandingPage } from './CollectionLandingPage_BgBjY5m9.mjs';

const $$Astro = createAstro("https://www.xbstack.com");
const $$LegacyTopicPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegacyTopicPage;
  const { title, description, intro, primaryTitle, primaryHref, primaryDesc, keywords, eyebrow = "Historical Topic Entry", related = [], canonical } = Astro2.props;
  const cards = [{ title: primaryTitle, href: primaryHref, desc: primaryDesc }, ...related.slice(0, 3)];
  return renderTemplate`${renderComponent($$result, "CollectionLandingPage", $$CollectionLandingPage, { "title": title, "seoTitle": `${title} | XBSTACK`, "description": description, "keywords": keywords, "eyebrow": eyebrow, "intro": intro, "searchPlaceholder": `\u641C\u7D22 ${title} \u76F8\u5173\u95EE\u9898\u3001\u6587\u7AE0\u6216\u5DE5\u5177\u2026`, "chips": [{ title: "\u4E3B\u5165\u53E3", href: primaryHref }, { title: "\u7AD9\u5185\u641C\u7D22", href: "/search/" }, { title: "\u5F52\u6863", href: "/archive/" }], "cards": cards, "posts": [], "sideLinks": [{ title: "AI \u5DE5\u7A0B", href: "/ai/" }, { title: "Tools", href: "/tools/" }, { title: "Horizon", href: "/horizon/" }, { title: "Lens", href: "/life/" }], "note": `\u8FD9\u662F\u5386\u53F2\u517C\u5BB9\u5165\u53E3\u3002\u65B0\u7684\u4E3B\u8981\u5185\u5BB9\u8DEF\u5F84\u5DF2\u7EDF\u4E00\u5230\u300C${primaryTitle}\u300D\uFF0C\u65E7 URL \u4FDD\u7559\u7528\u4E8E\u7AD9\u5185\u94FE\u63A5\u548C\u641C\u7D22\u8BBF\u95EE\u3002`, "canonical": canonical, "noindex": true })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/search-site/LegacyTopicPage.astro", void 0);

export { $$LegacyTopicPage as $ };
