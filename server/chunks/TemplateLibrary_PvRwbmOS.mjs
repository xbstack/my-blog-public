import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaFileCode, FaClipboard, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const TEMPLATES = [
  { id: "mcp-preflight", title: "MCP Server 上线前配置检查清单", enTitle: "MCP Server Preflight Checklist", type: "Markdown", version: "1.0.0", updated: "2026-07-29", href: "/templates/mcp-server-preflight-checklist.md", article: "/ai/mcp-server-production-governance/", desc: "检查传输方式、启动命令、环境变量、Tool Schema、权限、错误和发布验证。", enDesc: "Check transport, startup commands, environment variables, tool schemas, permissions, failures and release verification." },
  { id: "n8n-retry", title: "n8n 错误处理与重试工作流", enTitle: "n8n Error and Retry Workflow", type: "JSON", version: "1.0.0", updated: "2026-07-29", href: "/templates/n8n-error-retry-workflow.json", article: "/ai/n8n-ai-workflow-error-handling/", desc: "包含 request_id、超时、状态检查、指数退避和死信输出的可修改工作流。", enDesc: "A modifiable workflow with request IDs, timeouts, status checks, exponential backoff and dead-letter output." },
  { id: "finance-schema", title: "AI 财报抽取 JSON Schema", enTitle: "AI Financial Extraction JSON Schema", type: "JSON Schema", version: "1.0.0", updated: "2026-07-29", href: "/templates/ai-finance-output-schema.json", article: "/ai/llm-json-schema-financial-report-extraction/", desc: "约束文档信息、公司、指标、风险因素、原文证据和人工复核状态。", enDesc: "Constrains document data, company fields, metrics, risk factors, source evidence and human-review status." },
  { id: "article-gate", title: "XBSTACK 文章发布前检查清单", enTitle: "XBSTACK Article Pre-Publish Checklist", type: "Markdown", version: "1.0.0", updated: "2026-07-29", href: "/templates/xbstack-article-publish-checklist.md", article: "/ai/xbstack-content-quality-audit-builder-log/", desc: "覆盖库存避重、TDK、第一屏、事实证据、SEO、内链、双语和发布核验。", enDesc: "Covers inventory checks, metadata, first-screen answers, evidence, SEO, internal links, bilingual parity and release verification." },
  { id: "distribution-ledger", title: "双语内容分发 UTM 台账", enTitle: "Bilingual Distribution UTM Ledger", type: "CSV", version: "1.0.0", updated: "2026-07-29", href: "/templates/bilingual-distribution-ledger.csv", article: "/ai/xbstack-utm-distribution-tracking/", desc: "记录中英文 Canonical、平台状态、正式 URL、标题版本、UTM 和七日数据。", enDesc: "Tracks bilingual canonicals, platform status, published URLs, headline versions, UTM fields and seven-day results." },
  { id: "langgraph-release", title: "LangGraph 生产发布检查清单", enTitle: "LangGraph Production Release Checklist", type: "Markdown", version: "1.0.0", updated: "2026-07-29", href: "/templates/langgraph-production-release-checklist.md", article: "/ai/langgraph-memory-checkpointing-production-agents/", desc: "检查状态隔离、Checkpointer、Tool 副作用、审批、多智能体、可观测性和回滚。", enDesc: "Checks state isolation, checkpoints, tool side effects, approvals, multi-agent boundaries, observability and rollback." }
];
function TemplateLibrary({ lang = "zh-CN" }) {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const t = (zh, en) => isEnglish ? en : zh;
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState("");
  const [copied, setCopied] = useState("");
  const [errors, setErrors] = useState({});
  const getContent = async (item) => {
    setLoading(item.id);
    setErrors((current) => ({ ...current, [item.id]: "" }));
    try {
      const response = await fetch(item.href, { headers: { Accept: "text/plain" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      setErrors((current) => ({ ...current, [item.id]: `${t("读取失败", "Failed to load")}: ${error.message}` }));
      return "";
    } finally {
      setLoading("");
    }
  };
  const openPreview = async (item) => {
    const content = await getContent(item);
    if (content) setPreview({ item, content });
    if (typeof window.xbTrackEvent === "function") window.xbTrackEvent("template_preview", { event_category: "conversion", template_id: item.id });
  };
  const copy = async (item) => {
    const content = await getContent(item);
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(item.id);
    setTimeout(() => setCopied(""), 1500);
    if (typeof window.xbTrackEvent === "function") window.xbTrackEvent("template_copy", { event_category: "conversion", template_id: item.id });
  };
  const download = (item) => {
    if (typeof window.xbTrackEvent === "function") window.xbTrackEvent("template_download", { event_category: "conversion", template_id: item.id, template_type: item.type });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 lg:grid-cols-2", children: TEMPLATES.map((item) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col rounded-[32px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035] md:p-7", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500", children: /* @__PURE__ */ jsx(FaFileCode, {}) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-blue-500", children: [
              item.type,
              " · v",
              item.version
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-slate-950 dark:text-white", children: isEnglish ? item.enTitle : item.title })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-[9px] font-black text-slate-500 dark:bg-white/10", children: item.updated })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 flex-1 text-sm font-semibold leading-7 text-slate-600 dark:text-slate-300", children: isEnglish ? item.enDesc : item.desc }),
      errors[item.id] && /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-bold text-rose-500", children: errors[item.id] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx("button", { type: "button", disabled: loading === item.id, onClick: () => openPreview(item), className: "rounded-xl border border-slate-200 px-4 py-3 text-xs font-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-40 dark:border-white/10", children: loading === item.id ? t("读取中", "Loading") : t("在线预览", "Preview") }),
        /* @__PURE__ */ jsxs("button", { type: "button", disabled: loading === item.id, onClick: () => copy(item), className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-40 dark:border-white/10", children: [
          /* @__PURE__ */ jsx(FaClipboard, {}),
          copied === item.id ? t("已复制", "Copied") : t("一键复制", "Copy")
        ] }),
        /* @__PURE__ */ jsxs("a", { href: item.href, download: true, onClick: () => download(item), className: "inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white dark:bg-white dark:text-slate-950", children: [
          /* @__PURE__ */ jsx(FaDownload, {}),
          t("下载原文件", "Download")
        ] }),
        /* @__PURE__ */ jsxs("a", { href: isEnglish ? item.article.replace("/ai/", "/en/ai/") : item.article, className: "inline-flex items-center gap-2 rounded-xl px-3 py-3 text-xs font-black text-slate-500 hover:text-blue-500", children: [
          t("对应文章", "Related article"),
          " ",
          /* @__PURE__ */ jsx(FaExternalLinkAlt, { size: 9 })
        ] })
      ] })
    ] }, item.id)) }),
    preview && /* @__PURE__ */ jsxs("section", { "data-theme-surface": "adaptive-template-preview", className: "rounded-[36px] border border-blue-200 bg-blue-50/70 p-5 text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300", children: "Live Preview" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-slate-950 dark:text-white", children: isEnglish ? preview.item.enTitle : preview.item.title })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPreview(null), className: "rounded-xl border border-blue-200 bg-white px-4 py-3 text-xs font-black text-slate-800 hover:border-blue-400 dark:border-white/20 dark:bg-white/[0.06] dark:text-white", children: t("关闭预览", "Close") })
      ] }),
      /* @__PURE__ */ jsx("pre", { className: "mt-6 max-h-[620px] overflow-auto whitespace-pre-wrap break-words rounded-2xl bg-slate-950 p-5 text-xs leading-6 text-slate-200", children: /* @__PURE__ */ jsx("code", { children: preview.content }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-900 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-100", children: t("模板用于减少重复搭建，不是生产保证。使用前必须检查版本、凭据、权限、数据处理、错误路径和目标平台兼容性。", "Templates reduce repeated setup; they are not production guarantees. Review versions, credentials, permissions, data handling, failure paths and platform compatibility before use.") })
  ] });
}

export { TemplateLibrary as T };
