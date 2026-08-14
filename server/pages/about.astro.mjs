import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { A as AuthorImage } from '../chunks/avatar_CM6aumVI.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lifeSystem = [
    {
      title: "\u521B\u9020",
      desc: "\u628A\u771F\u5B9E\u95EE\u9898\u505A\u6210\u4EA7\u54C1\u3001\u5DE5\u5177\u548C\u53EF\u590D\u7528\u7684\u65B9\u6CD5\uFF0C\u4ECE\u9700\u6C42\u3001\u8BBE\u8BA1\u3001\u5B9E\u73B0\u4E00\u76F4\u8D70\u5230\u771F\u6B63\u6709\u4EBA\u4F7F\u7528\u3002"
    },
    {
      title: "AI",
      desc: "\u6301\u7EED\u7814\u7A76\u5927\u6A21\u578B\u3001Agent\u3001MCP\u3001LangGraph\u3001Workflow \u548C AI \u5DE5\u5177\uFF0C\u66F4\u5173\u5FC3\u771F\u5B9E\u9879\u76EE\u91CC\u7684\u4EF7\u503C\u4E0E\u8FB9\u754C\u3002"
    },
    {
      title: "\u6295\u8D44",
      desc: "\u957F\u671F\u5173\u6CE8\u7F8E\u80A1\u4E0E\u6E2F\u80A1\uFF0C\u7814\u7A76\u516C\u53F8\u3001\u884C\u4E1A\u3001\u8D22\u62A5\u3001\u4F30\u503C\u548C\u5E02\u573A\u53D8\u5316\uFF0C\u7528\u8BC1\u636E\u548C\u590D\u76D8\u4FEE\u6B63\u5224\u65AD\u3002"
    },
    {
      title: "\u5B66\u4E60",
      desc: "\u9605\u8BFB\u3001\u5199\u4F5C\u3001\u7814\u7A76\u548C\u590D\u76D8\u662F\u957F\u671F\u8F93\u5165\uFF0C\u8BA9\u77E5\u8BC6\u9010\u6E10\u53D8\u6210\u5224\u65AD\u6846\u67B6\u3001\u65B9\u6CD5\u548C\u884C\u52A8\u89C4\u5219\u3002"
    },
    {
      title: "\u8FD0\u52A8",
      desc: "\u7FBD\u6BDB\u7403\u3001\u5F92\u6B65\u548C\u65E5\u5E38\u8FD0\u52A8\u7EF4\u6301\u8EAB\u4F53\u72B6\u6001\uFF0C\u4E5F\u6301\u7EED\u5173\u6CE8\u7761\u7720\u3001\u6062\u590D\u548C\u957F\u671F\u53EF\u6301\u7EED\u7684\u751F\u6D3B\u65B9\u5F0F\u3002"
    },
    {
      title: "\u65C5\u884C",
      desc: "\u53BB\u4E0D\u540C\u7684\u5730\u65B9\u771F\u6B63\u5F85\u4E00\u6BB5\u65F6\u95F4\uFF0C\u7528\u884C\u8D70\u3001\u6444\u5F71\u548C\u73B0\u573A\u4F53\u9A8C\u7406\u89E3\u4E16\u754C\uFF0C\u8BA9\u5224\u65AD\u4E0D\u53EA\u6765\u81EA\u5C4F\u5E55\u3002"
    }
  ];
  const knowledgeMap = [
    {
      title: "AI \u5DE5\u7A0B\u4E0E\u5E94\u7528",
      href: "/ai/",
      desc: "\u4ECE\u6A21\u578B\u80FD\u529B\u8D70\u5230\u771F\u5B9E\u5DE5\u7A0B\uFF1A\u5173\u6CE8 Agent \u67B6\u6784\u3001\u534F\u8BAE\u3001\u72B6\u6001\u7BA1\u7406\u3001\u81EA\u52A8\u5316\u3001\u90E8\u7F72\u548C\u751F\u4EA7\u6545\u969C\u3002",
      topics: ["Agent", "MCP", "LangGraph", "Workflow", "\u6A21\u578B\u5E94\u7528"]
    },
    {
      title: "\u4EA7\u54C1\u4E0E\u72EC\u7ACB\u5F00\u53D1",
      href: "/tools/",
      desc: "\u628A\u6280\u672F\u771F\u6B63\u53D8\u6210\u53EF\u4F7F\u7528\u7684\u4EA7\u54C1\uFF0C\u4ECE\u9700\u6C42\u5224\u65AD\u3001\u4EA7\u54C1\u8BBE\u8BA1\u3001\u5F00\u53D1\u53D1\u5E03\u4E00\u76F4\u8D70\u5230\u957F\u671F\u8FD0\u8425\u3002",
      topics: ["\u4EA7\u54C1\u8BBE\u8BA1", "iOS / Android", "Web", "\u5DE5\u5177", "\u8FD0\u8425"]
    },
    {
      title: "\u6295\u8D44\u7814\u7A76",
      href: "/investing/",
      desc: "\u957F\u671F\u7814\u7A76\u7F8E\u80A1\u4E0E\u6E2F\u80A1\uFF0C\u901A\u8FC7\u516C\u53F8\u3001\u884C\u4E1A\u3001\u8D22\u62A5\u548C\u4F30\u503C\u5EFA\u7ACB\u81EA\u5DF1\u7684\u5224\u65AD\u6846\u67B6\uFF0C\u5E76\u6301\u7EED\u590D\u76D8\u3002",
      topics: ["\u7F8E\u80A1", "\u6E2F\u80A1", "\u516C\u53F8\u7814\u7A76", "\u8D22\u62A5", "\u4F30\u503C\u4E0E\u590D\u76D8"]
    },
    {
      title: "\u9605\u8BFB\u4E0E\u5B66\u4E60",
      href: "/horizon/",
      desc: "\u9605\u8BFB\u4E0D\u662F\u6536\u85CF\u4E66\u6458\uFF0C\u800C\u662F\u628A\u4E0D\u540C\u9886\u57DF\u7684\u89C2\u70B9\u8FDE\u63A5\u5230\u5DE5\u4F5C\u3001\u6295\u8D44\u3001\u9009\u62E9\u548C\u957F\u671F\u51B3\u7B56\u3002",
      topics: ["\u9605\u8BFB", "\u5199\u4F5C", "\u77E5\u8BC6\u7BA1\u7406", "\u51B3\u7B56\u6846\u67B6", "\u957F\u671F\u601D\u8003"]
    },
    {
      title: "\u65C5\u884C\u4E0E\u6237\u5916",
      href: "/life/",
      desc: "\u901A\u8FC7\u5F92\u6B65\u3001\u65C5\u884C\u3001\u6444\u5F71\u3001\u88C5\u5907\u548C\u8FD0\u52A8\u6062\u590D\u4FDD\u6301\u771F\u5B9E\u4E16\u754C\u7684\u8F93\u5165\uFF0C\u8BB0\u5F55\u4EB2\u81EA\u8D70\u8FC7\u548C\u7528\u8FC7\u7684\u4E1C\u897F\u3002",
      topics: ["\u5F92\u6B65", "\u65C5\u884C", "\u6444\u5F71", "\u88C5\u5907", "\u8FD0\u52A8\u4E0E\u6062\u590D"]
    }
  ];
  const works = [
    {
      title: "XBSTACK",
      href: "/",
      type: "\u4E2A\u4EBA\u77E5\u8BC6\u4E0E\u4EA7\u54C1\u7CFB\u7EDF",
      mark: "XB",
      desc: "\u6211\u7684\u516C\u5F00\u77E5\u8BC6\u4E0E\u5B9E\u8DF5\u7A7A\u95F4\u3002\u628A AI \u5DE5\u7A0B\u3001\u4EA7\u54C1\u3001\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u6237\u5916\u6C89\u6DC0\u6210\u53EF\u4EE5\u641C\u7D22\u3001\u590D\u7528\u548C\u7EE7\u7EED\u8FED\u4EE3\u7684\u957F\u671F\u8D44\u4EA7\u3002"
    },
    {
      title: "Lunest",
      href: "/tools/lunest/",
      type: "\u7761\u7720\u4E0E\u6062\u590D\u4EA7\u54C1",
      mark: "L",
      desc: "\u56F4\u7ED5\u52A9\u7720\u58F0\u97F3\u3001\u7761\u7720\u8BB0\u5F55\u4E0E\u6062\u590D\u4F53\u9A8C\u6301\u7EED\u5F00\u53D1\u7684\u79FB\u52A8\u4EA7\u54C1\u3002"
    },
    {
      title: "AI Finance",
      href: "/tools/ai-finance/",
      type: "AI \u6295\u8D44\u7814\u7A76\u5DE5\u5177",
      mark: "AI",
      desc: "\u56F4\u7ED5\u516C\u5F00\u8D22\u62A5\u548C\u516C\u53F8\u57FA\u672C\u9762\uFF0C\u8BA9 AI \u5E2E\u52A9\u6574\u7406\u4E8B\u5B9E\u3001\u7406\u89E3\u8D22\u52A1\u4FE1\u606F\u5E76\u63D0\u9AD8\u7814\u7A76\u6548\u7387\u3002"
    },
    {
      title: "AI \u5DE5\u7A0B\u77E5\u8BC6\u5E93",
      href: "/ai/",
      type: "\u5DE5\u7A0B\u77E5\u8BC6\u8D44\u4EA7",
      mark: "KB",
      desc: "\u628A\u771F\u5B9E\u5F00\u53D1\u4E2D\u7684\u95EE\u9898\u3001\u5B9E\u9A8C\u3001\u5931\u8D25\u548C\u751F\u4EA7\u7ECF\u9A8C\u6574\u7406\u6210\u53EF\u641C\u7D22\u3001\u53EF\u590D\u7528\u7684\u5DE5\u7A0B\u77E5\u8BC6\u3002"
    }
  ];
  const featuredWork = works[0];
  const otherWorks = works.slice(1);
  const description = "\u5C0F\u767D / Xiaobai \u7684\u4E2A\u4EBA\u4E3B\u9875\u3002\u5168\u6808\u5F00\u53D1\u8005\u4E0E XBSTACK \u521B\u5EFA\u8005\uFF0C\u957F\u671F\u7814\u7A76 AI \u5F00\u53D1\u4E0E\u5E94\u7528\u3001\u72EC\u7ACB\u4EA7\u54C1\u3001\u7F8E\u80A1\u4E0E\u6E2F\u80A1\u6295\u8D44\uFF0C\u4E5F\u4FDD\u6301\u9605\u8BFB\u3001\u8FD0\u52A8\u3001\u65C5\u884C\u3001\u5F92\u6B65\u548C\u6237\u5916\u5B9E\u8DF5\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u5173\u4E8E\u5C0F\u767D / Xiaobai\uFF5C\u6280\u672F\u3001AI\u3001\u6295\u8D44\u3001\u9605\u8BFB\u3001\u8FD0\u52A8\u4E0E\u65C5\u884C", "description": description, "keywords": "XBSTACK, \u5C0F\u767D, Xiaobai, \u5168\u6808\u5F00\u53D1\u8005, AI \u5F00\u53D1, AI \u5E94\u7528\u7814\u7A76, \u7F8E\u80A1\u6295\u8D44, \u6E2F\u80A1\u6295\u8D44, \u9605\u8BFB, \u5B66\u4E60, \u7FBD\u6BDB\u7403, \u5F92\u6B65, \u65C5\u884C, \u6237\u5916, \u72EC\u7ACB\u5F00\u53D1\u8005, Lunest, AI Finance", "lang": "zh-CN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="xb-shell py-10 md:py-12"> <section class="xb-about-hero"> <aside class="xb-about-profile" aria-label="小白 / Xiaobai"> <img${addAttribute(AuthorImage.src, "src")} alt="小白 / Xiaobai"> <div class="xb-about-profile__meta"> <span>ABOUT / XIAOBAI</span> <strong>小白 / Xiaobai</strong> <p>全栈开发者<br>XBSTACK 创建者</p> </div> </aside> <div class="xb-about-hero__main"> <h1>在高处看世界，在底层堆资产。</h1> <p>我长期和技术打交道，但不想只把自己定义成程序员。AI 和产品是每天在做的事，美股和港股让我持续研究公司与商业，阅读帮助我修正认知，运动、徒步和旅行把我从屏幕带回真实世界。XBSTACK 记录的是这些事情如何逐渐连接成一个人的长期系统。</p> </div> </section> <section id="system" class="xb-section"> <div class="xb-divider-title"><div><h2 class="xb-h2">我的长期系统</h2></div></div> <p class="mb-6 max-w-[820px] text-[13px] leading-7 text-[var(--xb-muted)]">创造、AI、投资、学习、运动和旅行不是彼此分开的标签，而是互相提供输入、反馈和约束的六条长期线。</p> <div class="xb-system-panel"> <div class="xb-orbit-graph xb-orbit-graph--six" aria-label="小白的长期系统"> <div class="xb-orbit-ring" aria-hidden="true"></div> <div class="xb-orbit-flow xb-orbit-flow--a" aria-hidden="true"></div> <div class="xb-orbit-flow xb-orbit-flow--b" aria-hidden="true"></div> <div class="xb-orbit-center"><strong>小白</strong><span>Xiaobai</span></div> ${lifeSystem.map((item, index) => renderTemplate`<div${addAttribute(`xb-orbit-node xb-orbit-node--${index + 1}`, "class")}${addAttribute(`--xb-node-index:${index}`, "style")}> <strong>${item.title}</strong> </div>`)} </div> <div class="xb-system-notes"> ${lifeSystem.map((item, index) => renderTemplate`<div class="xb-system-note"${addAttribute(`--xb-note-index:${index}`, "style")}><strong>${item.title}</strong><p>${item.desc}</p></div>`)} </div> </div> </section> <section id="knowledge" class="xb-section xb-knowledge-section"> <div class="xb-divider-title"><div><h2 class="xb-h2">知识体系</h2></div></div> <div class="xb-knowledge-map-layout"> <div class="xb-knowledge-explain"> <p class="xb-knowledge-explain__lead">长期系统回答“我怎样生活和积累”，知识体系回答“我持续研究什么”。左边把每条知识线解释清楚，右边只呈现它们之间的结构关系。</p> <div class="xb-knowledge-explain__list"> ${knowledgeMap.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-knowledge-explain__item"${addAttribute(`--xb-path-index:${index}`, "style")}> <span class="xb-knowledge-explain__index">0${index + 1}</span> <div> <h3>${item.title}</h3> <p>${item.desc}</p> <div class="xb-knowledge-path__topics"> ${item.topics.map((topic) => renderTemplate`<span>${topic}</span>`)} </div> </div> </a>`)} </div> </div> <div class="xb-knowledge-graph" aria-label="XBSTACK 知识图谱"> <div class="xb-knowledge-graph__ring xb-knowledge-graph__ring--outer" aria-hidden="true"></div> <div class="xb-knowledge-graph__ring xb-knowledge-graph__ring--inner" aria-hidden="true"></div> <div class="xb-knowledge-graph__pulse" aria-hidden="true"></div> <div class="xb-knowledge-graph__center"><strong>知识体系</strong><span>Knowledge System</span></div> ${knowledgeMap.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`xb-knowledge-node xb-knowledge-node--${index + 1}`, "class")}${addAttribute(`--xb-node-index:${index}`, "style")}> <strong>${item.title}</strong> <span>${item.topics.slice(0, 2).join(" \xB7 ")}</span> </a>`)} </div> </div> </section> <section id="works" class="xb-section"> <div class="xb-divider-title"><div><h2 class="xb-h2">作品与产品</h2></div></div> <p class="mb-6 max-w-[820px] text-[13px] leading-7 text-[var(--xb-muted)]">这里展示真正做出来、可以被打开和使用的东西。结构按“重点作品 + 项目网格”设计，后续继续增加产品和项目时不用重新改版。</p> <div class="xb-work-showcase"> <a${addAttribute(featuredWork.href, "href")} class="xb-work-feature"> <div class="xb-work-feature__mark">${featuredWork.mark}</div> <div class="xb-work-feature__body"> <span>${featuredWork.type}</span> <h3>${featuredWork.title}</h3> <p>${featuredWork.desc}</p> </div> <div class="xb-work-feature__arrow">打开 →</div> </a> <div class="xb-work-shelf"> ${otherWorks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="xb-work-card"> <div class="xb-work-card__mark">${item.mark}</div> <div class="xb-work-card__type">${item.type}</div> <h3>${item.title}</h3> <p>${item.desc}</p> <span>查看 →</span> </a>`)} </div> <div class="xb-work-more"> <a href="/tools/">查看工具与产品 →</a> <a href="/ai/">查看 AI 工程资产 →</a> </div> </div> </section> <section id="contact" class="xb-section"> <div class="xb-divider-title"><div><h2 class="xb-h2">联系与合作</h2></div></div> <div class="xb-grid-3"> <a href="mailto:xbstack@163.com" class="xb-card"><h3>邮箱：xbstack@163.com</h3><p>点击发送邮件</p></a> <a href="https://github.com/xbstack" target="_blank" rel="noopener noreferrer" class="xb-card"><h3>GitHub：@xbstack</h3><p>点击访问 GitHub</p></a> <a href="/wechat/" class="xb-card wechat-trigger" data-wechat-qr="/assets/qrcode_guizhou_outdoor.png"><h3>微信公众号：贵州户外</h3><p>扫码关注</p></a> </div> </section> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/about/index.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
