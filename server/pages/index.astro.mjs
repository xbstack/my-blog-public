import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Lb3doMJi.mjs';
import { g as getCollection } from '../chunks/_astro_content_jbBoyPXF.mjs';
import { r as resolveEntryUrl } from '../chunks/content-route_Id4Hifd6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "XBSTACK\uFF1AAI \u5DE5\u7A0B\u77E5\u8BC6\u5E93\u3001\u5DE5\u5177\u4E0E\u957F\u671F\u5B9E\u8DF5";
  const description = "\u641C\u7D22 AI Agent\u3001MCP\u3001LangGraph\u3001Workflow \u7684\u5DE5\u7A0B\u95EE\u9898\u3001\u6545\u969C\u6392\u67E5\u4E0E\u751F\u4EA7\u5B9E\u8DF5\uFF0C\u4F7F\u7528 AI Finance\u3001\u590D\u5229\u8BA1\u7B97\u5668\u548C Lunest\uFF0C\u5E76\u6D4F\u89C8\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u6237\u5916\u8BB0\u5F55\u3002";
  const keywords = "XBSTACK, AI \u5DE5\u7A0B, AI Agent, MCP, LangGraph, Workflow, \u5F00\u53D1\u8005\u5DE5\u5177, AI Finance, Lunest, \u72EC\u7ACB\u5F00\u53D1";
  const isPublicChinese = ({ data }) => !data.draft && data.lang !== "en" && data.indexing !== "noindex";
  const ai = await getCollection("ai", isPublicChinese);
  const horizon = await getCollection("horizon", isPublicChinese);
  const lens = await getCollection("lens", isPublicChinese);
  const all = [...ai, ...horizon, ...lens].sort((a, b) => {
    const tb = new Date(b.data.createdAt || 0).getTime();
    const ta = new Date(a.data.createdAt || 0).getTime();
    return tb - ta;
  });
  const imageSrc = (image) => typeof image === "string" ? image : image?.src || "";
  const latest = all.slice(0, 6).map((entry) => ({
    title: entry.data.title,
    href: resolveEntryUrl(entry),
    image: imageSrc(entry.data.image),
    desc: entry.data.description || "",
    section: entry.collection === "ai" ? "AI \u5DE5\u7A0B" : entry.collection === "horizon" ? "Horizon" : "Lens",
    date: entry.data.createdAt ? new Date(entry.data.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }) : ""
  }));
  const topics = [
    {
      title: "AI Agent",
      href: "/ai/agent/",
      desc: "\u67B6\u6784\u3001\u5DE5\u5177\u8C03\u7528\u3001Memory\u3001RAG\u3001\u8BC4\u6D4B\u3001\u6743\u9650\u4E0E\u8FD0\u884C\u65F6\u6CBB\u7406\u3002",
      links: [
        ["Agent \u67B6\u6784\u4E0E\u8FD0\u884C\u65F6", "/ai/agent/"],
        ["\u5DE5\u5177\u8C03\u7528\u4E0E\u6743\u9650", "/ai/ai-agent-tool-authorization-policy-gate/"],
        ["Memory / RAG", "/ai/ai-agent-memory-architecture/"]
      ]
    },
    {
      title: "MCP",
      href: "/ai/mcp/",
      desc: "Server\u3001Transport\u3001OAuth\u3001\u6743\u9650\u3001\u5B89\u5168\u4E0E\u534F\u8BAE\u6392\u969C\u3002",
      links: [
        ["MCP vs Function Calling", "/ai/mcp-vs-function-calling/"],
        ["Streamable HTTP", "/ai/mcp-streamable-http-deployment/"],
        ["JSON-RPC \u6392\u969C", "/ai/mcp-json-rpc-parse-error/"]
      ]
    },
    {
      title: "LangGraph",
      href: "/ai/langgraph/",
      desc: "\u72B6\u6001\u3001Checkpoint\u3001HITL\u3001\u5931\u8D25\u6062\u590D\u3001\u5E76\u53D1\u4E0E\u53EF\u89C2\u6D4B\u6027\u3002",
      links: [
        ["\u72B6\u6001\u9694\u79BB", "/ai/langgraph-thread-session-state-isolation/"],
        ["HITL \u5BA1\u6279", "/ai/langgraph-human-in-the-loop-approval/"],
        ["\u5931\u8D25\u6062\u590D", "/ai/langgraph-agent-error-recovery-retry-timeout/"]
      ]
    },
    {
      title: "Workflow Automation",
      href: "/ai/workflow/",
      desc: "n8n\u3001\u81EA\u6258\u7BA1\u3001Webhook\u3001\u961F\u5217\u3001\u91CD\u8BD5\u3001\u5E42\u7B49\u4E0E\u6210\u672C\u6CBB\u7406\u3002",
      links: [
        ["n8n \u81EA\u6258\u7BA1", "/ai/self-hosted-n8n-ai-workflows/"],
        ["\u9519\u8BEF\u5904\u7406\u4E0E\u6210\u672C", "/ai/n8n-ai-workflow-error-handling/"],
        ["Queue Mode", "/ai/n8n-queue-mode-redis-worker/"]
      ]
    }
  ];
  const hot = [
    { title: "MCP Streamable HTTP\uFF1A\u4ECE\u672C\u5730 Server \u5230\u751F\u4EA7\u90E8\u7F72", href: "/ai/mcp-streamable-http-deployment/", meta: "MCP \xB7 Production" },
    { title: "LangGraph \u72B6\u6001\u9694\u79BB\uFF1Athread_id\u3001session_id\u3001user_id \u600E\u4E48\u8BBE\u8BA1", href: "/ai/langgraph-thread-session-state-isolation/", meta: "LangGraph \xB7 State" },
    { title: "AI Agent Tool Authorization\uFF1A\u5DE5\u5177\u8C03\u7528\u524D\u5982\u4F55\u505A\u6743\u9650\u95E8\u7981", href: "/ai/ai-agent-tool-authorization-policy-gate/", meta: "Agent \xB7 Security" },
    { title: "n8n AI Workflow\uFF1A\u9519\u8BEF\u5904\u7406\u3001\u91CD\u8BD5\u4E0E\u6210\u672C\u76D1\u63A7", href: "/ai/n8n-ai-workflow-error-handling/", meta: "Workflow \xB7 Operations" }
  ];
  const tools = [
    { title: "AI Finance", href: "/tools/ai-finance/", desc: "\u516C\u5F00\u8D22\u62A5\u4E0E\u516C\u53F8\u57FA\u672C\u9762\u5206\u6790\u5DE5\u5177\u3002", status: "\u5728\u7EBF\u5DE5\u5177" },
    { title: "Lunest", href: "/tools/lunest/", desc: "\u7761\u7720\u4E0E\u6062\u590D\u4EA7\u54C1\uFF0CiOS / Android \u6301\u7EED\u5F00\u53D1\u3002", status: "\u4EA7\u54C1" }
  ];
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.xbstack.com/#website",
        name: "XBSTACK",
        url: "https://www.xbstack.com/",
        description,
        inLanguage: "zh-CN",
        slogan: "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.xbstack.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        name: "XBSTACK \u6838\u5FC3\u4E3B\u9898",
        itemListElement: topics.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://www.xbstack.com${item.href}` }))
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "schemaJsonLd": websiteSchema, "lang": "zh-CN", "alternates": [
    { lang: "zh-CN", href: "https://www.xbstack.com/" },
    { lang: "en", href: "https://www.xbstack.com/en/" },
    { lang: "x-default", href: "https://www.xbstack.com/" }
  ] }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="xb-home-hero"> <div class="xb-shell"> <div class="xb-home-hero__inner"> <h1 class="xb-title">从具体问题出发，找到能验证、能复现的答案。</h1> <p class="xb-home-hero__slogan">在高处看世界，在底层堆资产。</p> <p class="xb-home-hero__copy">这里持续更新 AI Agent、MCP、LangGraph、Workflow 的工程实践，也提供开发者工具、长期研究和户外现场记录。</p> <a href="/search/" class="xb-search-box xb-home-search text-left" data-home-search data-xbstack-search-trigger> <span class="xb-search-box__icon">⌕</span> <span class="xb-search-box__placeholder">搜索报错、技术问题、工具、主题或文章…</span> <span class="xb-search-box__button">搜索</span> </a> <div class="xb-chip-row mt-4"> <a class="xb-chip" href="/ai/mcp/">MCP</a> <a class="xb-chip" href="/ai/langgraph/">LangGraph</a> <a class="xb-chip" href="/ai/agent/">AI Agent</a> <a class="xb-chip" href="/ai/workflow/">Workflow</a> <a class="xb-chip" href="/tools/ai-finance/">AI Finance</a> </div> </div> </div> </section> <section class="xb-section"> <div class="xb-shell"> <div class="xb-divider-title"> <div> <h2 class="xb-h2">AI 工程专题</h2> </div> </div> <div class="xb-grid-4"> ${topics.map((topic, index) => renderTemplate`<article class="xb-card"> <div class="xb-card__icon">${String(index + 1).padStart(2, "0")}</div> <h3><a${addAttribute(topic.href, "href")}>${topic.title}</a></h3> <p>${topic.desc}</p> <div class="xb-card__links"> ${topic.links.map(([name, href]) => renderTemplate`<a${addAttribute(href, "href")}>${name} →</a>`)} </div> </article>`)} </div> </div> </section> <section class="xb-section"> <div class="xb-shell"> <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14"> <div> <div class="xb-divider-title !mb-5"> <div> <h2 class="xb-h2">热门问题</h2> </div> <a class="xb-link text-[11px]" href="/ai/">查看 AI 工程专题 →</a> </div> <div class="xb-list"> ${hot.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="flex items-center justify-between gap-4 border-b border-[var(--xb-line)] py-4"> <h3 class="m-0 text-[14px] font-bold leading-6 text-[var(--xb-ink)]">${item.title}</h3> <span class="xb-faint">→</span> </a>`)} </div> </div> <div> <div class="xb-divider-title !mb-5"> <div> <h2 class="xb-h2">产品与工具</h2> </div> <a class="xb-link text-[11px]" href="/tools/">查看全部产品与工具 →</a> </div> <div class="xb-grid-2"> ${tools.map((tool, index) => renderTemplate`<a${addAttribute(tool.href, "href")} class="xb-card xb-tool-card"> <div class="xb-tool-card__top"> <div class="xb-card__icon !mb-3">${index + 1}</div> </div> <h3>${tool.title}</h3> <p>${tool.desc}</p> <div class="xb-tool-card__actions text-[11px] font-bold text-blue-600 dark:text-blue-400">打开 →</div> </a>`)} </div> </div> </div> </div> </section> <section class="xb-section xb-section--tight"> <div class="xb-shell"> <div class="xb-divider-title !mb-5"> <div> <h2 class="xb-h2">最新发布</h2> </div> <div class="flex gap-4 text-[11px]"> <a class="xb-link" href="/archive/">内容归档 →</a> <a class="xb-link" href="/newsletter/">Newsletter →</a> </div> </div> <div class="xb-media-list"> ${latest.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`xb-media-row${item.image ? "" : " xb-media-row--text"}`, "class")}> ${item.image && renderTemplate`<div class="xb-media-row__thumb"><img${addAttribute(item.image, "src")} alt="" loading="lazy" decoding="async"></div>`} <div class="xb-media-row__body"> <h3>${item.title}</h3> ${item.desc && renderTemplate`<p>${item.desc}</p>`} <div class="xb-media-row__info"><span>${item.section}</span><span>${item.date}</span></div> </div> <div class="xb-media-row__arrow">→</div> </a>`)} </div> </div> </section> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/index.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
