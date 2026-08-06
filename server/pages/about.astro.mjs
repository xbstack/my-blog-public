import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$PublicLayout } from '../chunks/PublicLayout_BDgPsFL4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u5173\u4E8E\u5C0F\u767D\uFF1AAI \u72EC\u7ACB\u5F00\u53D1\u8005\u3001\u5168\u6808\u5DE5\u7A0B\u5E08\u4E0E XBSTACK \u7684\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF";
  const description = "\u6211\u662F\u5C0F\u767D\uFF0C\u66FE\u5728\u5317\u4EAC\u5B66\u4E60\u548C\u5DE5\u4F5C\uFF0C\u73B0\u5728\u5B9A\u5C45\u8D35\u9633\u3002XBSTACK \u662F\u6211\u7684\u4E2A\u4EBA\u54C1\u724C\u7AD9\uFF0C\u8BB0\u5F55 AI \u5F00\u53D1\u3001\u5168\u6808\u5DE5\u7A0B\u3001\u667A\u80FD\u4F53\u3001\u81EA\u6258\u7BA1 NAS \u7CFB\u7EDF\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u3001\u6237\u5916\u5F92\u6B65\u3001\u81EA\u9A7E\u548C\u771F\u5B9E\u751F\u6D3B\u3002";
  const pageTitle = title;
  const pageDescription = description;
  const keywords = "\u5C0F\u767D, XBSTACK, \u72EC\u7ACB\u5F00\u53D1\u8005, AI \u72EC\u7ACB\u5F00\u53D1\u8005, \u5168\u6808\u5F00\u53D1, AI Agent, \u667A\u80FD\u4F53, MCP, LangGraph, n8n, NAS \u81EA\u6258\u7BA1, \u6E2F\u7F8E\u80A1\u6295\u8D44, A\u80A1\u57FA\u91D1, \u8D35\u9633\u6237\u5916, \u4E2A\u4EBA\u54C1\u724C";
  const identityCards = [
    {
      label: "Developer",
      title: "\u72EC\u7ACB\u5F00\u53D1\u8005\uFF0C\u4E0D\u662F\u53EA\u5199\u6559\u7A0B\u7684\u4EBA",
      desc: "\u6211\u66F4\u5173\u5FC3\u4E00\u4E2A\u4EA7\u54C1\u3001\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u3001\u4E00\u4E2A AI Agent \u80FD\u4E0D\u80FD\u771F\u5B9E\u8FD0\u884C\u3001\u80FD\u4E0D\u80FD\u7EF4\u62A4\u3001\u51FA\u95EE\u9898\u540E\u80FD\u4E0D\u80FD\u8FFD\u8E2A\u3002XBSTACK \u7684\u6280\u672F\u5185\u5BB9\uFF0C\u5C3D\u91CF\u4ECE\u5DE5\u7A0B\u73B0\u573A\u51FA\u53D1\uFF0C\u800C\u4E0D\u662F\u4ECE\u6982\u5FF5\u70ED\u8BCD\u51FA\u53D1\u3002"
    },
    {
      label: "Builder",
      title: "\u628A\u7F51\u7AD9\u3001\u5DE5\u5177\u548C NAS \u90FD\u5F53\u6210\u8D44\u4EA7\u6765\u642D",
      desc: "\u8FD9\u4E2A\u7AD9\u4E0D\u662F\u9759\u6001\u540D\u7247\u3002\u5B83\u80CC\u540E\u6709\u5185\u5BB9\u7CFB\u7EDF\u3001\u53D1\u5E03\u540E\u53F0\u3001AI \u8F85\u52A9\u5DE5\u4F5C\u6D41\u3001\u672C\u5730 NAS\u3001\u5B58\u50A8\u3001\u7B14\u8BB0\u3001\u81EA\u5A92\u4F53\u8FD0\u8425\u3001\u672C\u5730 AI \u548C\u5A31\u4E50\u7CFB\u7EDF\u3002\u80FD\u81EA\u5EFA\u7684\uFF0C\u6211\u4F1A\u4F18\u5148\u5C1D\u8BD5\u81EA\u5EFA\u3002"
    },
    {
      label: "Observer",
      title: "\u4ECE\u5317\u4EAC\u5230\u8D35\u9633\uFF0C\u628A\u751F\u6D3B\u91CD\u65B0\u63A5\u56DE\u8EAB\u4F53",
      desc: "\u5317\u4EAC\u7ED9\u4E86\u6211\u5DE5\u7A0B\u8BAD\u7EC3\u548C\u804C\u4E1A\u5BC6\u5EA6\uFF0C\u8D35\u9633\u7ED9\u4E86\u6211\u5C71\u3001\u8DEF\u3001\u7A7A\u6C14\u548C\u6237\u5916\u73B0\u573A\u3002\u5F92\u6B65\u3001\u81EA\u9A7E\u3001\u7FBD\u6BDB\u7403\u3001\u9605\u8BFB\u548C\u6295\u8D44\uFF0C\u4E0D\u662F\u4EBA\u8BBE\u88C5\u9970\uFF0C\u800C\u662F\u6211\u957F\u671F\u5224\u65AD\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\u3002"
    }
  ];
  const pillars = [
    {
      label: "AI / Engineering",
      title: "AI \u5F00\u53D1\u4E0E\u5168\u6808\u5DE5\u7A0B",
      desc: "\u8BB0\u5F55 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001RAG\u3001\u81EA\u6258\u7BA1\u90E8\u7F72\u3001\u5DE5\u5177\u6743\u9650\u3001\u72B6\u6001\u9694\u79BB\u3001\u5931\u8D25\u6062\u590D\u3001\u53EF\u89C2\u6D4B\u6027\u548C\u6210\u672C\u63A7\u5236\u3002\u91CD\u70B9\u4E0D\u662F\u201CAI \u5F88\u5F3A\u201D\uFF0C\u800C\u662F AI \u7CFB\u7EDF\u600E\u6837\u53EF\u9760\u843D\u5730\u3002",
      links: [
        { text: "AI Hub", href: "/ai/" },
        { text: "Agent", href: "/ai/agent/" },
        { text: "LangGraph", href: "/ai/langgraph/" },
        { text: "MCP", href: "/ai/mcp/" },
        { text: "Workflow", href: "/ai/workflow/" }
      ]
    },
    {
      label: "Products / NAS",
      title: "\u72EC\u7ACB\u4EA7\u54C1\u4E0E\u672C\u5730\u8D44\u4EA7\u6808",
      desc: "\u6211\u4F1A\u628A\u81EA\u5DF1\u7684\u9700\u6C42\u505A\u6210\u5DE5\u5177\uFF1A\u590D\u5229\u8BA1\u7B97\u5668\u3001AI \u8D22\u62A5\u52A9\u624B\u3001Lunest\u3001\u88C5\u5907\u5E93\u3001\u5185\u5BB9\u53D1\u5E03\u7CFB\u7EDF\uFF0C\u4E5F\u4F1A\u628A NAS \u4F5C\u4E3A\u4E2A\u4EBA\u6570\u5B57\u5E95\u5EA7\uFF0C\u627F\u63A5\u5B58\u50A8\u3001\u7B14\u8BB0\u3001\u672C\u5730 AI\u3001\u81EA\u5A92\u4F53\u8FD0\u8425\u548C\u5BB6\u5EAD\u5A31\u4E50\u3002",
      links: [
        { text: "Tools", href: "/tools/" },
        { text: "Compound", href: "/tools/compound-calculator/" },
        { text: "AI Finance", href: "/tools/ai-finance/" },
        { text: "Lunest", href: "/tools/lunest/" }
      ]
    },
    {
      label: "Life / Investing",
      title: "\u6295\u8D44\u3001\u9605\u8BFB\u4E0E\u771F\u5B9E\u751F\u6D3B",
      desc: "\u6211\u5173\u6CE8\u6E2F\u80A1\u3001\u7F8E\u80A1\u3001A \u80A1\u548C\u57FA\u91D1\uFF0C\u4F46\u8FD9\u91CC\u4E0D\u505A\u8350\u80A1\uFF0C\u53EA\u505A\u957F\u671F\u8BB0\u5F55\u548C\u590D\u76D8\u3002\u9605\u8BFB\u8D1F\u8D23\u6821\u6B63\u5224\u65AD\uFF0C\u6237\u5916\u5F92\u6B65\u3001\u81EA\u9A7E\u548C\u7FBD\u6BDB\u7403\u8D1F\u8D23\u628A\u4EBA\u4ECE\u5C4F\u5E55\u91CC\u62C9\u51FA\u6765\u3002",
      links: [
        { text: "Investing", href: "/investing/" },
        { text: "Reading", href: "/life/reading/" },
        { text: "Hiking", href: "/life/hiking/" },
        { text: "Gear", href: "/life/gear/" }
      ]
    }
  ];
  const timeline = [
    {
      place: "\u5317\u4EAC",
      title: "\u5B66\u4E60\u3001\u5DE5\u4F5C\u4E0E\u5DE5\u7A0B\u8BAD\u7EC3",
      desc: "\u5317\u4EAC\u9636\u6BB5\u7ED9\u6211\u7684\u4E0D\u662F\u4E00\u4E2A\u6807\u7B7E\uFF0C\u800C\u662F\u4E00\u5957\u804C\u4E1A\u8BAD\u7EC3\uFF1A\u9762\u5BF9\u590D\u6742\u9700\u6C42\u3001\u7406\u89E3\u7CFB\u7EDF\u8FB9\u754C\u3001\u7528\u5DE5\u7A0B\u65B9\u6CD5\u89E3\u51B3\u95EE\u9898\u3002\u540E\u6765\u505A\u72EC\u7ACB\u5F00\u53D1\u3001AI \u7CFB\u7EDF\u548C\u7F51\u7AD9\u67B6\u6784\uFF0C\u8FD9\u6BB5\u7ECF\u5386\u4E00\u76F4\u662F\u5E95\u5EA7\u3002"
    },
    {
      place: "\u8D35\u9633",
      title: "\u5B9A\u5C45\u3001\u6237\u5916\u4E0E\u65B0\u7684\u751F\u6D3B\u534A\u5F84",
      desc: "\u73B0\u5728\u6211\u5B9A\u5C45\u8D35\u9633\u3002\u8FD9\u91CC\u6709\u66F4\u8FD1\u7684\u5C71\u3001\u66F4\u771F\u5B9E\u7684\u8DEF\u3001\u66F4\u9002\u5408\u81EA\u9A7E\u548C\u5F92\u6B65\u7684\u5468\u672B\uFF0C\u4E5F\u8BA9\u6211\u91CD\u65B0\u610F\u8BC6\u5230\uFF0C\u4E00\u4E2A\u957F\u671F\u7CFB\u7EDF\u4E0D\u80FD\u53EA\u56F4\u7740\u5C4F\u5E55\u548C\u8D26\u6237\u8F6C\u3002"
    },
    {
      place: "XBSTACK",
      title: "\u4E2A\u4EBA IP \u4E0E\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF",
      desc: "XBSTACK \u662F\u6211\u628A\u6280\u672F\u80FD\u529B\u3001\u5DE5\u5177\u4EA7\u54C1\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u3001NAS \u672C\u5730\u57FA\u7840\u8BBE\u65BD\u548C\u771F\u5B9E\u751F\u6D3B\u653E\u5728\u4E00\u8D77\u7684\u5730\u65B9\u3002\u5B83\u4E0D\u662F\u7B80\u5386\uFF0C\u4E5F\u4E0D\u662F\u670B\u53CB\u5708\uFF0C\u800C\u662F\u4E00\u4E2A\u6301\u7EED\u8FED\u4EE3\u7684\u4E2A\u4EBA\u8D44\u4EA7\u6808\u3002"
    }
  ];
  const trustRules = [
    {
      title: "\u4E13\u4E1A\u6765\u81EA\u771F\u5B9E\u5DE5\u7A0B\uFF0C\u4E0D\u6765\u81EA\u5305\u88C5\u8BCD",
      desc: "\u6D89\u53CA AI \u548C\u5168\u6808\u5F00\u53D1\u65F6\uFF0C\u6211\u4F1A\u5C3D\u91CF\u5199\u6E05\u695A\u67B6\u6784\u9009\u62E9\u3001\u9650\u5236\u6761\u4EF6\u3001\u8E29\u5751\u8FC7\u7A0B\u548C\u9002\u7528\u8FB9\u754C\uFF0C\u800C\u4E0D\u662F\u5806\u201C\u667A\u80FD\u5316\u3001\u81EA\u52A8\u5316\u3001\u751F\u4EA7\u7EA7\u201D\u8FD9\u7C7B\u6F02\u4EAE\u8BCD\u3002"
    },
    {
      title: "\u6295\u8D44\u53EA\u505A\u8BB0\u5F55\u548C\u590D\u76D8\uFF0C\u4E0D\u505A\u8350\u80A1",
      desc: "\u6211\u4F1A\u8BB0\u5F55\u6E2F\u7F8E A\u3001\u57FA\u91D1\u548C\u957F\u671F\u8D44\u4EA7\u914D\u7F6E\u91CC\u7684\u5224\u65AD\u53D8\u5316\uFF0C\u4F46\u4E0D\u627F\u8BFA\u6536\u76CA\uFF0C\u4E0D\u4EE3\u66FF\u4EFB\u4F55\u4EBA\u7684\u6295\u8D44\u51B3\u7B56\u3002\u6295\u8D44\u5185\u5BB9\u7684\u4EF7\u503C\u5728\u590D\u76D8\uFF0C\u4E0D\u5728\u558A\u5355\u3002"
    },
    {
      title: "\u751F\u6D3B\u5185\u5BB9\u670D\u52A1\u4E2A\u4EBA IP\uFF0C\u4E0D\u55A7\u5BBE\u593A\u4E3B",
      desc: "\u5F92\u6B65\u3001\u81EA\u9A7E\u3001\u7FBD\u6BDB\u7403\u548C\u9605\u8BFB\u4F1A\u51FA\u73B0\uFF0C\u4F46\u4E0D\u4F1A\u5199\u6210\u6D41\u6C34\u8D26\u3002\u5B83\u4EEC\u7528\u4E8E\u89E3\u91CA\u4E00\u4E2A\u5F00\u53D1\u8005\u600E\u6837\u4FDD\u6301\u8EAB\u4F53\u72B6\u6001\u3001\u4FE1\u606F\u5BC6\u5EA6\u548C\u957F\u671F\u5224\u65AD\u3002"
    },
    {
      title: "\u81EA\u6258\u7BA1\u662F\u65B9\u6CD5\uFF0C\u4E0D\u662F\u70AB\u6280",
      desc: "NAS\u3001\u672C\u5730 AI\u3001\u5B58\u50A8\u3001\u7B14\u8BB0\u548C\u81EA\u5A92\u4F53\u7CFB\u7EDF\u4E0D\u662F\u4E3A\u4E86\u663E\u5F97\u786C\u6838\uFF0C\u800C\u662F\u4E3A\u4E86\u964D\u4F4E\u5916\u90E8\u4F9D\u8D56\uFF0C\u628A\u5185\u5BB9\u3001\u6570\u636E\u3001\u81EA\u52A8\u5316\u548C\u751F\u6D3B\u8D44\u6599\u53D8\u6210\u81EA\u5DF1\u53EF\u63A7\u7684\u57FA\u7840\u8BBE\u65BD\u3002"
    }
  ];
  const aboutFaqs = [
    { question: "XBSTACK \u662F\u4EC0\u4E48\uFF1F", answer: "XBSTACK \u662F\u5C0F\u767D\u7684\u4E2A\u4EBA\u54C1\u724C\u7AD9\u548C\u957F\u671F\u8D44\u4EA7\u7CFB\u7EDF\uFF0C\u8BB0\u5F55 AI \u5DE5\u7A0B\u3001\u72EC\u7ACB\u5F00\u53D1\u5DE5\u5177\u3001NAS \u81EA\u6258\u7BA1\u3001\u6295\u8D44\u590D\u76D8\u3001\u9605\u8BFB\u7CFB\u7EDF\u548C\u6237\u5916\u751F\u6D3B\u3002" },
    { question: "\u8FD9\u91CC\u9002\u5408\u8C01\u770B\uFF1F", answer: "\u9002\u5408\u5173\u6CE8 AI Agent\u3001MCP\u3001LangGraph\u3001n8n\u3001\u4E2A\u4EBA\u7F51\u7AD9\u3001\u72EC\u7ACB\u5F00\u53D1\u3001\u957F\u671F\u8D44\u4EA7\u548C\u771F\u5B9E\u751F\u6D3B\u8BB0\u5F55\u7684\u5F00\u53D1\u8005\u6216\u5185\u5BB9\u521B\u4F5C\u8005\u3002" },
    { question: "XBSTACK \u662F\u7EAF\u6280\u672F\u535A\u5BA2\u5417\uFF1F", answer: "\u4E0D\u662F\u3002AI \u6280\u672F\u662F\u4E3B\u7EBF\uFF0C\u4F46\u5DE5\u5177\u4EA7\u54C1\u3001\u6295\u8D44\u9605\u8BFB\u3001\u6237\u5916\u751F\u6D3B\u548C\u4E2A\u4EBA\u8D44\u4EA7\u7CFB\u7EDF\u4E5F\u662F\u7EC4\u6210\u90E8\u5206\u3002\u5B83\u66F4\u50CF\u4E2A\u4EBA IP \u4E2D\u67A2\uFF0C\u800C\u4E0D\u662F\u5355\u4E00\u6559\u7A0B\u7AD9\u3002" },
    { question: "\u6295\u8D44\u5185\u5BB9\u662F\u5426\u6784\u6210\u5EFA\u8BAE\uFF1F", answer: "\u4E0D\u6784\u6210\u3002\u6295\u8D44\u76F8\u5173\u5185\u5BB9\u53EA\u505A\u4E2A\u4EBA\u8BB0\u5F55\u548C\u590D\u76D8\uFF0C\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\uFF0C\u4E5F\u4E0D\u627F\u8BFA\u6536\u76CA\u3002" }
  ];
  const principles = [
    "\u5148\u505A\u771F\u5B9E\u7CFB\u7EDF\uFF0C\u518D\u5199\u65B9\u6CD5\u8BBA\u3002",
    "\u80FD\u88AB\u590D\u7528\u7684\u80FD\u529B\uFF0C\u5C3D\u91CF\u6C89\u6DC0\u6210\u5DE5\u5177\u3002",
    "AI \u662F\u653E\u5927\u5668\uFF0C\u4E0D\u662F\u66FF\u4EE3\u5224\u65AD\u7684\u501F\u53E3\u3002",
    "\u6295\u8D44\u5185\u5BB9\u53EA\u8BB0\u5F55\u903B\u8F91\u3001\u98CE\u9669\u548C\u590D\u76D8\uFF0C\u4E0D\u5236\u9020\u786E\u5B9A\u6027\u3002",
    "\u6237\u5916\u548C\u9605\u8BFB\u4E0D\u662F\u526F\u4E1A\u88C5\u9970\uFF0C\u800C\u662F\u957F\u671F\u4FDD\u6301\u5224\u65AD\u529B\u7684\u8F93\u5165\u7CFB\u7EDF\u3002"
  ];
  const representativeWorks = [
    { label: "AI Engineering", title: "MCP Streamable HTTP \u8FDC\u7A0B\u90E8\u7F72\u5B9E\u6218", href: "/ai/mcp-streamable-http-deployment/" },
    { label: "LangGraph", title: "LangGraph Observability\uFF1A\u8FFD\u8E2A Agent \u51B3\u7B56\u8DEF\u5F84", href: "/ai/langgraph-observability-agent-trace/" },
    { label: "Workflow", title: "n8n Queue Mode + Redis Worker \u5B9E\u6218", href: "/ai/n8n-queue-mode-redis-worker/" },
    { label: "Product", title: "AI \u8D22\u62A5\u5206\u6790\u5DE5\u5177", href: "/tools/ai-finance/" },
    { label: "Reading", title: "\u7A0B\u5E8F\u5458\u5982\u4F55\u628A\u8BFB\u4E66\u53D8\u6210\u51B3\u7B56\u7CFB\u7EDF", href: "/horizon/reading/reading-system-for-independent-developer/" },
    { label: "Outdoor", title: "\u8D35\u5DDE\u6237\u5916\u4E0E\u5F92\u6B65\u8DEF\u7EBF", href: "/life/hiking/" }
  ];
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.xbstack.com/about/#person",
        name: "\u5C0F\u767D",
        alternateName: ["Xiaobai", "XB", "XBStack"],
        url: "https://www.xbstack.com/about/",
        jobTitle: "Independent Developer, Full-stack Engineer and AI Systems Builder",
        homeLocation: {
          "@type": "Place",
          name: "Guiyang, Guizhou, China"
        },
        knowsAbout: ["AI Development", "AI Agent", "Full-stack Development", "Model Context Protocol", "LangGraph", "n8n", "Self-hosted NAS", "Investment Review", "Outdoor Hiking", "Reading System"],
        worksFor: { "@id": "https://www.xbstack.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.xbstack.com/#organization",
        name: "XBSTACK",
        url: "https://www.xbstack.com/",
        logo: "https://www.xbstack.com/favicon/favicon.svg",
        slogan: "\u5728\u9AD8\u5904\u770B\u4E16\u754C\uFF0C\u5728\u5E95\u5C42\u5806\u8D44\u4EA7\u3002",
        description: pageDescription
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.xbstack.com/about/#faq",
        mainEntity: aboutFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.xbstack.com/about/#webpage",
        name: pageTitle,
        url: "https://www.xbstack.com/about/",
        description: pageDescription,
        inLanguage: "zh-CN",
        isPartOf: { "@id": "https://www.xbstack.com/#website" },
        about: { "@id": "https://www.xbstack.com/about/#person" }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": pageTitle, "description": pageDescription, "keywords": keywords, "schemaJsonLd": aboutSchema, "data-astro-cid-fwdcsva6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1180px] mx-auto px-6 pt-32 pb-24" data-astro-cid-fwdcsva6> <section class="grid grid-cols-1 lg:grid-cols-[1.16fr_0.84fr] gap-12 items-start pb-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="space-y-9" data-astro-cid-fwdcsva6> <div class="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400" data-astro-cid-fwdcsva6>
About Xiaobai / Independent Developer
</div> <div class="space-y-7" data-astro-cid-fwdcsva6> <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-950 dark:text-white leading-[0.98]" data-astro-cid-fwdcsva6>
我是小白，<br class="hidden md:block" data-astro-cid-fwdcsva6>一个把 AI、代码和真实生活搭成系统的独立开发者。
</h1> <p class="text-xl md:text-2xl font-black leading-relaxed text-slate-700 dark:text-slate-300 max-w-4xl border-l-8 border-blue-500 pl-7" data-astro-cid-fwdcsva6>
北京给我工程训练，贵阳给我生活现场。XBSTACK 是我长期堆资产、看世界、做判断的地方。
</p> <div class="space-y-5 text-base md:text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl" data-astro-cid-fwdcsva6> <p data-astro-cid-fwdcsva6>
我曾在北京学习和工作，现在定居贵阳。职业上，我主要做 AI 开发、全栈开发和智能体相关系统；生活里，我喜欢户外徒步、羽毛球、自驾和阅读，也会长期记录港股、美股、A 股和基金投资里的判断变化。
</p> <p data-astro-cid-fwdcsva6>
XBSTACK 不是一个只发教程的博客。它更像我的个人 IP 中枢：一边沉淀 AI Agent、MCP、LangGraph、n8n、自托管系统和独立产品，一边记录阅读、投资、户外和 NAS 本地系统如何帮助我建立自己的长期资产栈。
</p> </div> </div> <div class="flex flex-wrap gap-3 pt-2" data-astro-cid-fwdcsva6> <a href="/ai/" class="px-6 py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.28em] hover:bg-blue-700 transition-colors" data-astro-cid-fwdcsva6>AI 开发主线</a> <a href="/tools/" class="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.28em] hover:text-blue-500 transition-colors" data-astro-cid-fwdcsva6>独立产品与工具</a> <a href="/about/vision/" class="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.28em] hover:text-blue-500 transition-colors" data-astro-cid-fwdcsva6>品牌理念</a> </div> </div> <aside class="space-y-5" data-astro-cid-fwdcsva6> <div class="xb-matrix-card p-7 rounded-[36px] bg-white/90 dark:bg-white/[0.04] border border-blue-500/15 dark:border-white/10 shadow-[0_24px_80px_rgba(37,99,235,0.10)]" data-astro-cid-fwdcsva6> <div class="flex items-start justify-between gap-4 mb-7" data-astro-cid-fwdcsva6> <div data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2" data-astro-cid-fwdcsva6>Capability Matrix</div> <h2 class="text-2xl font-black tracking-tight text-slate-950 dark:text-white" data-astro-cid-fwdcsva6>能力矩阵</h2> </div> <div class="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300 flex items-center justify-center font-black" data-astro-cid-fwdcsva6>AI</div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4" data-astro-cid-fwdcsva6> <div class="xb-pulse-item p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" style="--delay: 0s" data-astro-cid-fwdcsva6> <div class="text-blue-600 dark:text-blue-300 text-xl mb-4" data-astro-cid-fwdcsva6>✦</div> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2" data-astro-cid-fwdcsva6>AI 开发</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>智能体、RAG 与 AI 工程实践</p> </div> <div class="xb-pulse-item p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" style="--delay: 2.4s" data-astro-cid-fwdcsva6> <div class="text-blue-600 dark:text-blue-300 text-xl mb-4" data-astro-cid-fwdcsva6>▣</div> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2" data-astro-cid-fwdcsva6>全栈工程</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>系统设计、前后端与工程落地</p> </div> <div class="xb-pulse-item p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" style="--delay: 4.8s" data-astro-cid-fwdcsva6> <div class="text-blue-600 dark:text-blue-300 text-xl mb-4" data-astro-cid-fwdcsva6>↯</div> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2" data-astro-cid-fwdcsva6>效率系统</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>NAS、本地 AI 与自动化流程</p> </div> <div class="xb-pulse-item p-5 rounded-[24px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" style="--delay: 7.2s" data-astro-cid-fwdcsva6> <div class="text-blue-600 dark:text-blue-300 text-xl mb-4" data-astro-cid-fwdcsva6>◈</div> <h3 class="text-base font-black text-slate-950 dark:text-white mb-2" data-astro-cid-fwdcsva6>产品工具</h3> <p class="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>Lunest、财报助手与长期工具</p> </div> </div> </div> <div class="xb-matrix-card p-7 rounded-[36px] bg-white/90 dark:bg-white/[0.04] border border-blue-500/15 dark:border-white/10 shadow-[0_24px_80px_rgba(37,99,235,0.08)]" data-astro-cid-fwdcsva6> <div class="flex items-start justify-between gap-4 mb-6" data-astro-cid-fwdcsva6> <div data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2" data-astro-cid-fwdcsva6>Long-Term Inputs</div> <h2 class="text-2xl font-black tracking-tight text-slate-950 dark:text-white" data-astro-cid-fwdcsva6>长期输入</h2> </div> <div class="text-blue-500 font-black text-xl" data-astro-cid-fwdcsva6>∞</div> </div> <div class="grid grid-cols-2 gap-3 mb-5" data-astro-cid-fwdcsva6> <div class="xb-input-pill" style="--delay: 0s" data-astro-cid-fwdcsva6>△ 贵州户外</div> <div class="xb-input-pill" style="--delay: 2.4s" data-astro-cid-fwdcsva6>▤ 阅读笔记</div> <div class="xb-input-pill" style="--delay: 4.8s" data-astro-cid-fwdcsva6>⌁ 投资复盘</div> <div class="xb-input-pill" style="--delay: 7.2s" data-astro-cid-fwdcsva6>◇ 运动恢复</div> </div> <div class="rounded-[22px] bg-blue-500/5 border border-blue-500/10 px-5 py-4 text-xs font-black text-slate-600 dark:text-slate-300 flex items-center justify-between gap-3" data-astro-cid-fwdcsva6> <span data-astro-cid-fwdcsva6>北京学习与工作</span> <span class="text-blue-500" data-astro-cid-fwdcsva6>→</span> <span data-astro-cid-fwdcsva6>现定居贵阳</span> </div> </div> </aside> </section> <section class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="max-w-3xl mb-10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4" data-astro-cid-fwdcsva6>Identity</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-4" data-astro-cid-fwdcsva6>XBSTACK 不是一张名片，而是一个长期系统</h2> <p class="text-sm md:text-base font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>
它把我的 AI 开发、工具产品、效率系统、投资阅读和户外生活连接在一起。不是为了展示标签，而是为了把能力、经验和判断，慢慢沉淀成可以复用的资产。
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-astro-cid-fwdcsva6> ${identityCards.map((item) => renderTemplate`<article class="p-7 rounded-[34px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500 mb-3" data-astro-cid-fwdcsva6>${item.label}</div> <h3 class="text-2xl font-black text-slate-950 dark:text-white mb-4 leading-tight" data-astro-cid-fwdcsva6>${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400" data-astro-cid-fwdcsva6>${item.desc}</p> </article>`)} </div> </section> <section class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="max-w-3xl mb-10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4" data-astro-cid-fwdcsva6>What XBSTACK Covers</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-4" data-astro-cid-fwdcsva6>三条主线：技术能力、个人资产、长期判断</h2> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-astro-cid-fwdcsva6> ${pillars.map((pillar) => renderTemplate`<article class="p-7 rounded-[34px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500 mb-3" data-astro-cid-fwdcsva6>${pillar.label}</div> <h3 class="text-2xl font-black text-slate-950 dark:text-white mb-4 leading-tight" data-astro-cid-fwdcsva6>${pillar.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400 mb-6" data-astro-cid-fwdcsva6>${pillar.desc}</p> <div class="flex flex-wrap gap-2" data-astro-cid-fwdcsva6> ${pillar.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="px-3 py-2 rounded-full bg-white dark:bg-white/5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6>${link.text}</a>`)} </div> </article>`)} </div> </section> <section class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 items-start" data-astro-cid-fwdcsva6> <div class="space-y-4" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500" data-astro-cid-fwdcsva6>Path</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white" data-astro-cid-fwdcsva6>从北京到贵阳：职业密度和生活现场</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>
About 页真正要说清楚的不是流水账，而是一个人为什么会形成现在这套内容系统、产品系统和生活系统。
</p> </div> <div class="grid grid-cols-1 gap-4" data-astro-cid-fwdcsva6> ${timeline.map((item) => renderTemplate`<article class="p-6 rounded-[28px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 mb-3" data-astro-cid-fwdcsva6>${item.place}</div> <h3 class="text-xl font-black text-slate-950 dark:text-white mb-3" data-astro-cid-fwdcsva6>${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400" data-astro-cid-fwdcsva6>${item.desc}</p> </article>`)} </div> </div> </section> <section class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 items-start" data-astro-cid-fwdcsva6> <div class="space-y-4" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500" data-astro-cid-fwdcsva6>Trust</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white" data-astro-cid-fwdcsva6>专业感来自边界，而不是把自己写得很满</h2> <p class="text-sm font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>
XBSTACK 是个人品牌站，但不应该写成自我吹嘘。读者需要看到的是：我做什么、为什么做、做到哪里、哪些话不会乱说。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-fwdcsva6> ${trustRules.map((item) => renderTemplate`<article class="p-6 rounded-[28px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <h3 class="text-base font-black text-slate-950 dark:text-white mb-3" data-astro-cid-fwdcsva6>${item.title}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400" data-astro-cid-fwdcsva6>${item.desc}</p> </article>`)} </div> </div> </section> <section class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="max-w-3xl mb-10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4" data-astro-cid-fwdcsva6>Representative Work</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-4" data-astro-cid-fwdcsva6>先看这些内容，判断 XBSTACK 是否值得继续关注</h2> <p class="text-sm md:text-base font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>About 页不只介绍我是谁，也要把新读者导向真实作品、工具和可验证的长期记录。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-fwdcsva6> ${representativeWorks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group p-6 rounded-[28px] bg-white dark:bg-white/[0.035] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.28em] text-blue-500 mb-3" data-astro-cid-fwdcsva6>${item.label}</div> <h3 class="text-lg font-black text-slate-950 dark:text-white group-hover:text-blue-500 transition-colors leading-tight" data-astro-cid-fwdcsva6>${item.title}</h3> </a>`)} </div> </section> <section id="faq" class="py-20 border-b border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <div class="max-w-3xl mb-10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4" data-astro-cid-fwdcsva6>FAQ</div> <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-4" data-astro-cid-fwdcsva6>第一次了解 XBSTACK，先看这几个问题</h2> <p class="text-sm md:text-base font-bold leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-fwdcsva6>About 页不只说明我是谁，也要帮助新读者判断这个站是否值得继续看。</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-fwdcsva6> ${aboutFaqs.map((faq) => renderTemplate`<article class="p-6 rounded-[28px] bg-slate-50 dark:bg-white/[0.035] border border-slate-200 dark:border-white/10" data-astro-cid-fwdcsva6> <h3 class="text-base font-black text-slate-950 dark:text-white mb-3" data-astro-cid-fwdcsva6>${faq.question}</h3> <p class="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400" data-astro-cid-fwdcsva6>${faq.answer}</p> </article>`)} </div> </section> <section class="pt-20" data-astro-cid-fwdcsva6> <div class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10" data-astro-cid-fwdcsva6> <div class="p-8 rounded-[36px] bg-blue-500/5 border border-blue-500/10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500 mb-4" data-astro-cid-fwdcsva6>Principles</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8" data-astro-cid-fwdcsva6>写作、开发和记录原则</h2> <div class="space-y-4" data-astro-cid-fwdcsva6> ${principles.map((item, index) => renderTemplate`<div class="flex gap-4 items-start" data-astro-cid-fwdcsva6> <span class="shrink-0 mt-1 text-[10px] font-black text-blue-500 font-mono" data-astro-cid-fwdcsva6>${String(index + 1).padStart(2, "0")}</span> <p class="text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-300" data-astro-cid-fwdcsva6>${item}</p> </div>`)} </div> </div> <div data-theme-surface="adaptive-about" class="p-8 rounded-[36px] bg-slate-50 text-slate-950 border border-slate-200 shadow-sm dark:bg-white/[0.04] dark:text-white dark:border-white/10" data-astro-cid-fwdcsva6> <div class="text-[10px] font-black uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 mb-4" data-astro-cid-fwdcsva6>Start Here</div> <h2 class="text-3xl font-black tracking-tight text-slate-950 dark:text-white mb-8" data-astro-cid-fwdcsva6>第一次来，从这里开始</h2> <div class="grid gap-3" data-astro-cid-fwdcsva6> <a href="/ai/" class="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:text-blue-300" data-astro-cid-fwdcsva6>AI Hub：AI 开发、智能体与工作流系统 →</a> <a href="/tools/" class="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:text-blue-300" data-astro-cid-fwdcsva6>Tools：独立产品、财报助手、复利计算器和 Lunest →</a> <a href="/life/hiking/" class="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:text-blue-300" data-astro-cid-fwdcsva6>Lens：贵阳与贵州周边的徒步、摄影和装备 →</a> <a href="/investing/" class="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:text-blue-300" data-astro-cid-fwdcsva6>Investing：港美 A、基金与长期投资复盘 →</a> <a href="/contact/" class="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 hover:border-blue-300 hover:text-blue-600 transition-colors dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:hover:text-blue-300" data-astro-cid-fwdcsva6>联系与反馈 →</a> </div> </div> </div> </section> </main>  ` })}`;
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
