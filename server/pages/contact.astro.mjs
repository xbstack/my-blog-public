import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
import { FaEnvelope, FaWeixin, FaGithub, FaPaperPlane } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "\u8054\u7CFB\u5C0F\u767D | XBSTACK";
  const description = "\u8054\u7CFB\u5C0F\u767D\uFF1AAI Agent\u3001MCP\u3001n8n\u3001\u72EC\u7ACB\u5F00\u53D1\u5DE5\u5177\u3001\u5185\u5BB9\u7EA0\u9519\u3001\u4EA7\u54C1\u53CD\u9988\u3001\u8D35\u5DDE\u6237\u5916\u8DEF\u7EBF\u4E0E\u5408\u4F5C\u4EA4\u6D41\u3002";
  const keywords = "\u8054\u7CFB\u5C0F\u767D, XBSTACK \u8054\u7CFB, \u6280\u672F\u5408\u4F5C, \u5185\u5BB9\u53CD\u9988, \u5DE5\u5177\u53CD\u9988, AI Agent, MCP, n8n, Lunest, AI \u8D22\u62A5\u52A9\u624B, \u8D35\u5DDE\u6237\u5916";
  const contactCards = [
    {
      icon: FaEnvelope,
      label: "Email",
      title: "xbstack@163.com",
      desc: "\u9002\u5408\u6280\u672F\u53CD\u9988\u3001\u5DE5\u5177\u95EE\u9898\u3001\u5185\u5BB9\u7EA0\u9519\u3001\u5408\u4F5C\u8BF4\u660E\u3002",
      href: "mailto:xbstack@163.com",
      action: "Send Email",
      tone: "text-sky-500 bg-sky-500/10"
    },
    {
      icon: FaWeixin,
      label: "WeChat Official Account",
      title: "\u8D35\u5DDE\u6237\u5916",
      desc: "\u9002\u5408\u5173\u6CE8\u8D35\u5DDE\u5F92\u6B65\u3001\u6237\u5916\u8DEF\u7EBF\u3001\u516C\u4F17\u53F7\u5185\u5BB9\u548C\u66F4\u65B0\u3002",
      href: "/wechat/",
      action: "View QR Code",
      tone: "text-green-500 bg-green-500/10"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      title: "xbstack",
      desc: "\u9002\u5408\u67E5\u770B\u5F00\u6E90\u9879\u76EE\u3001\u63D0\u4EA4 issue \u6216\u8DDF\u8FDB\u5DE5\u7A0B\u4FA7\u66F4\u65B0\u3002",
      href: "https://github.com/xbstack",
      action: "View GitHub",
      tone: "text-slate-500 bg-slate-500/10"
    }
  ];
  const contactTopics = [
    {
      title: "AI / \u5DE5\u7A0B\u95EE\u9898",
      desc: "AI Agent\u3001MCP Server\u3001LangGraph\u3001n8n\u3001\u81EA\u6258\u7BA1\u90E8\u7F72\u3001NAS/VPS\u3001\u5DE5\u4F5C\u6D41\u6392\u9519\u3001\u5DE5\u5177\u6743\u9650\u8FB9\u754C\u3002"
    },
    {
      title: "\u5DE5\u5177\u548C\u4EA7\u54C1\u53CD\u9988",
      desc: "\u590D\u5229\u8BA1\u7B97\u5668\u3001AI \u8D22\u62A5\u52A9\u624B\u3001Lunest\u3001Gear Library \u7684\u8BA1\u7B97\u3001\u4EA4\u4E92\u3001\u517C\u5BB9\u6027\u3001\u6587\u6848\u6216\u6570\u636E\u95EE\u9898\u3002"
    },
    {
      title: "\u5185\u5BB9\u7EA0\u9519",
      desc: "\u6587\u7AE0\u94FE\u63A5 404\u3001\u547D\u4EE4\u8FC7\u65F6\u3001\u4EE3\u7801\u7247\u6BB5\u8DD1\u4E0D\u901A\u3001\u6982\u5FF5\u8868\u8FF0\u4E0D\u51C6\u786E\u3001\u8DEF\u7EBF\u4FE1\u606F\u9700\u8981\u66F4\u65B0\u3002"
    },
    {
      title: "\u5408\u4F5C\u4EA4\u6D41",
      desc: "\u9AD8\u8D28\u91CF\u5185\u5BB9\u4E92\u63A8\u3001\u6280\u672F\u65B9\u6848\u4EA4\u6D41\u3001\u72EC\u7ACB\u4EA7\u54C1\u5171\u5EFA\u3001\u771F\u5B9E\u6237\u5916\u8DEF\u7EBF\u4E0E\u88C5\u5907\u7ECF\u9A8C\u5171\u4EAB\u3002"
    }
  ];
  const boundaries = [
    "\u4E0D\u63A5\u8350\u80A1\u3001\u4EE3\u5BA2\u7406\u8D22\u3001\u865A\u5047\u6295\u8D44\u5E7F\u544A\u3002",
    "\u4E0D\u63A5\u6CA1\u6709\u771F\u5B9E\u4F53\u9A8C\u7684\u88C5\u5907\u8F6F\u6587\u3002",
    "\u4E0D\u505A\u4F4E\u8D28\u91CF SEO \u5916\u94FE\u4EA4\u6362\u3002",
    "\u4E0D\u56DE\u590D\u53EA\u6709\u4E00\u53E5\u8BDD\u3001\u6CA1\u6709\u4E0A\u4E0B\u6587\u7684\u6392\u9519\u8BF7\u6C42\u3002"
  ];
  const mailChecklist = [
    "\u4F60\u662F\u8C01\uFF1A\u7B80\u5355\u8BF4\u660E\u80CC\u666F\uFF0C\u4F8B\u5982 iOS \u5F00\u53D1\u3001\u72EC\u7ACB\u5F00\u53D1\u8005\u3001\u8BFB\u8005\u3001\u6237\u5916\u8DEF\u7EBF\u53CD\u9988\u8005\u3002",
    "\u4F60\u60F3\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1A\u5177\u4F53\u9875\u9762\u3001\u5DE5\u5177\u3001\u6587\u7AE0\u6216\u573A\u666F\u3002",
    "\u4F60\u5DF2\u7ECF\u5C1D\u8BD5\u8FC7\u4EC0\u4E48\uFF1A\u547D\u4EE4\u3001\u914D\u7F6E\u3001\u622A\u56FE\u3001\u65E5\u5FD7\u3001\u8F93\u5165\u53C2\u6570\u6216\u590D\u73B0\u6B65\u9AA4\u3002",
    "\u4F60\u5E0C\u671B\u6211\u600E\u4E48\u5904\u7406\uFF1A\u4FEE\u6B63\u5185\u5BB9\u3001\u6392\u67E5\u95EE\u9898\u3001\u7ED9\u51FA\u5EFA\u8BAE\u3001\u8BA8\u8BBA\u5408\u4F5C\uFF0C\u8FD8\u662F\u4EC5\u4F5C\u8BB0\u5F55\u3002"
  ];
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "\u8054\u7CFB\u5C0F\u767D | XBSTACK",
    description,
    url: "https://www.xbstack.com/contact/",
    email: "mailto:xbstack@163.com"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": contactSchema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1120px] mx-auto px-6 pt-32 pb-24"> <header class="mb-20 max-w-4xl"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-500 text-[10px] font-black border border-orange-500/20 mb-8 uppercase tracking-[0.3em]">
Contact / 建立连接
</div> <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.98] tracking-tighter mb-8">
有具体问题，<br>直接说现场。
</h1> <p class="text-lg md:text-xl font-bold text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
你可以因为 AI 工程、工具反馈、内容纠错、独立开发、贵州户外路线或合作交流联系我。XBSTACK 是一个长期系统，我更重视能让系统变准、变稳、变真实的反馈。
</p> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"> ${contactCards.map((card) => renderTemplate`<article class="p-7 rounded-[32px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 flex flex-col justify-between gap-8"> <div> <div${addAttribute(`w-12 h-12 rounded-2xl ${card.tone} flex items-center justify-center text-xl mb-6`, "class")}> ${renderComponent($$result2, "card.icon", card.icon, {})} </div> <div class="text-[9px] font-black text-slate-400 uppercase tracking-[0.22em] mb-2">${card.label}</div> <h2 class="text-lg font-black text-slate-950 dark:text-white mb-3">${card.title}</h2> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${card.desc}</p> </div> <a${addAttribute(card.href, "href")}${addAttribute(card.href.startsWith("http") ? "_blank" : void 0, "target")} class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-orange-500 hover:text-orange-600 transition-colors"> ${card.action} ${renderComponent($$result2, "FaPaperPlane", FaPaperPlane, {})} </a> </article>`)} </section> <section class="py-16 border-y border-slate-200 dark:border-white/10 mb-16"> <div class="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start"> <div class="space-y-4"> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">Topics</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white">适合联系的事情</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">
最好的消息不是客套，而是有上下文、有现场、有明确问题。下面这些方向最适合直接发邮件。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${contactTopics.map((item) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10"> <h3 class="text-base font-black text-slate-950 dark:text-white mb-3">${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">${item.desc}</p> </article>`)} </div> </div> </section> <section class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-16"> <div class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10"> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4">Before Email</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">联系前最好说明什么</h2> <div class="space-y-4"> ${mailChecklist.map((item, index) => renderTemplate`<div class="flex gap-4 items-start"> <span class="shrink-0 mt-1 text-[10px] font-black text-blue-500 font-mono">${String(index + 1).padStart(2, "0")}</span> <p class="text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-300">${item}</p> </div>`)} </div> </div> <div data-theme-surface="adaptive-boundaries" class="p-8 rounded-[36px] bg-orange-50/80 text-slate-950 border border-orange-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10"> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-orange-600 dark:text-orange-400 mb-4">Boundaries</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8">不适合联系的事情</h2> <div class="space-y-4"> ${boundaries.map((item, index) => renderTemplate`<div class="flex gap-4 items-start border-b border-orange-200 pb-4 last:border-0 last:pb-0 dark:border-white/10"> <span class="shrink-0 mt-1 text-[10px] font-black text-orange-600 dark:text-orange-300 font-mono">${String(index + 1).padStart(2, "0")}</span> <p class="text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-300">${item}</p> </div>`)} </div> </div> </section> <section class="pt-16 border-t border-slate-200 dark:border-white/10"> <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start"> <div class="space-y-4"> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">Continue</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white">继续了解 XBSTACK</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400">
如果你只是第一次来到这里，可以先从 About、AI Hub 和 Tools 开始，不需要直接写邮件。
</p> </div> <div class="grid gap-3"> <a href="/about/" class="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors">About：小白与 XBSTACK 的个人系统 →</a> <a href="/ai/" class="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors">AI Hub：AI Agent、MCP、LangGraph、Workflow →</a> <a href="/tools/" class="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors">Tools：复利计算器、AI 财报助手、Lunest、Gear Library →</a> <a href="/wechat/" class="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors">WeChat：公众号入口 →</a> <a href="/rss.xml" class="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors">RSS：订阅站点更新 →</a> </div> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/contact.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/contact.astro";
const $$url = "/contact/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
