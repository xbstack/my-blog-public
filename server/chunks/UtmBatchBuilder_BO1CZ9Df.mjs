import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { FaClipboard, FaDownload, FaLink } from 'react-icons/fa';

function normalizeUtmValue(value) {
  return String(value ?? "").trim().replace(/\s+/g, "_").toLowerCase();
}

const PLATFORMS = [
  { id: "zhihu", zh: "知乎", en: "Zhihu", source: "zhihu", medium: "referral" },
  { id: "juejin", zh: "掘金", en: "Juejin", source: "juejin", medium: "referral" },
  { id: "csdn", zh: "CSDN", en: "CSDN", source: "csdn", medium: "referral" },
  { id: "github", zh: "GitHub", en: "GitHub", source: "github", medium: "referral" },
  { id: "devto", zh: "DEV Community", en: "DEV Community", source: "devto", medium: "referral" },
  { id: "hashnode", zh: "Hashnode", en: "Hashnode", source: "hashnode", medium: "referral" },
  { id: "medium", zh: "Medium", en: "Medium", source: "medium", medium: "referral" },
  { id: "linkedin", zh: "LinkedIn", en: "LinkedIn", source: "linkedin", medium: "referral" },
  { id: "reddit", zh: "Reddit", en: "Reddit", source: "reddit", medium: "referral" },
  { id: "twitter", zh: "X / Twitter", en: "X / Twitter", source: "twitter", medium: "referral" },
  { id: "hackernews", zh: "Hacker News（干净链接）", en: "Hacker News (clean URL)", clean: true, source: "", medium: "" }
];
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const transformUrl = (rawUrl, platform, fields, mode) => {
  const url = new URL(rawUrl.trim());
  if (platform.clean || mode === "clear") {
    UTM_KEYS.forEach((key) => url.searchParams.delete(key));
    return url.toString();
  }
  const values = {
    utm_source: platform.source,
    utm_medium: platform.medium,
    utm_campaign: normalizeUtmValue(fields.campaign),
    utm_content: normalizeUtmValue(fields.content),
    utm_term: normalizeUtmValue(fields.term)
  };
  UTM_KEYS.forEach((key) => {
    const value = values[key];
    const existing = url.searchParams.get(key);
    if (mode === "preserve" && existing) return;
    if (mode === "fill" && existing) return;
    if (value) url.searchParams.set(key, value);
    else if (mode === "overwrite") url.searchParams.delete(key);
  });
  return url.toString();
};
const download = (filename, content, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
};
function UtmBatchBuilder({ lang = "zh-CN" }) {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const t = (zh, en) => isEnglish ? en : zh;
  const [rawUrl, setRawUrl] = useState("https://www.xbstack.com/ai/n8n-ai-starter-kit/");
  const [campaign, setCampaign] = useState("n8n_agent_tool_call");
  const [content, setContent] = useState("");
  const [term, setTerm] = useState("");
  const [mode, setMode] = useState("overwrite");
  const [selected, setSelected] = useState(["zhihu", "juejin", "github", "devto", "medium"]);
  const [copied, setCopied] = useState("");
  const validation = useMemo(() => {
    const issues = [];
    try {
      new URL(rawUrl.trim());
    } catch {
      issues.push(t("请输入包含 http:// 或 https:// 的完整网址。", "Enter a complete URL beginning with http:// or https://."));
    }
    const fields = { campaign, content, term };
    Object.entries(fields).forEach(([key, value]) => {
      if (!value) return;
      if (/[A-Z]/.test(value)) issues.push(`${key}: ${t("建议统一使用小写字母", "use lowercase values")}`);
      if (/\s/.test(value)) issues.push(`${key}: ${t("空格将被转换为下划线", "spaces will become underscores")}`);
      if (/[^a-zA-Z0-9_\-.\u4e00-\u9fff]/.test(value)) issues.push(`${key}: ${t("包含不建议使用的特殊字符", "contains discouraged special characters")}`);
    });
    const normalizedCampaign = normalizeUtmValue(campaign);
    const genericCampaigns = /* @__PURE__ */ new Set(["article_distribution", "site_ops", "task_queue", "launch", "campaign", "topic_name"]);
    if (!campaign.trim() && mode !== "clear") issues.push(t("Campaign 为空，无法按主题归因。", "Campaign is empty, so traffic cannot be attributed by topic."));
    if (mode !== "clear" && genericCampaigns.has(normalizedCampaign)) issues.push(t("请把 Campaign 改成稳定的主题名，例如 mcp_parse_error_fix；不要使用通用占位词。", "Replace the Campaign with a stable topic name such as mcp_parse_error_fix; do not use a generic placeholder."));
    if (mode !== "clear" && /(?:^|_)20\d{6}(?:_|$)/.test(normalizedCampaign)) issues.push(t("Campaign 不要包含发布日期；同一主题跨平台持续使用同一个稳定名称。", "Do not put a publication date in Campaign; reuse one stable topic name across platforms."));
    if (selected.length === 0) issues.push(t("至少选择一个平台。", "Select at least one platform."));
    return issues;
  }, [rawUrl, campaign, content, term, mode, selected, isEnglish]);
  const outputs = useMemo(() => {
    if (validation.some((item) => item.includes("http://") || item.includes("https://"))) return [];
    return PLATFORMS.filter((platform) => selected.includes(platform.id)).map((platform) => ({
      ...platform,
      label: isEnglish ? platform.en : platform.zh,
      url: transformUrl(rawUrl, platform, { campaign, content, term }, mode)
    }));
  }, [rawUrl, campaign, content, term, mode, selected, validation, isEnglish]);
  const toggle = (id) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const copyText = async (value, key) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 1400);
  };
  const tableText = outputs.map((item) => `${item.label}	${item.url}`).join("\n");
  const markdown = ["| Platform | URL |", "|---|---|", ...outputs.map((item) => `| ${item.label} | ${item.url} |`)].join("\n");
  const csv = ["platform,url", ...outputs.map((item) => `"${item.label.replaceAll('"', '""')}","${item.url.replaceAll('"', '""')}"`)].join("\n");
  const record = (action) => {
    if (typeof window.xbTrackEvent === "function") window.xbTrackEvent("utm_link_generated", { event_category: "conversion", action, platform_count: outputs.length, utm_mode: mode, campaign: normalizeUtmValue(campaign) });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("section", { className: "rounded-[40px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035] md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-5", children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-slate-400", children: t("原始 URL", "Destination URL") }),
        /* @__PURE__ */ jsx("input", { value: rawUrl, onChange: (event) => setRawUrl(event.target.value), className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold outline-none focus:border-blue-500 dark:border-white/10 dark:bg-slate-950/45" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { className: "mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-slate-400", children: "Campaign" }),
          /* @__PURE__ */ jsx("input", { value: campaign, onChange: (event) => setCampaign(event.target.value), className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold outline-none dark:border-white/10 dark:bg-slate-950/45" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-slate-400", children: [
            "Content (",
            t("可选", "optional"),
            ")"
          ] }),
          /* @__PURE__ */ jsx("input", { value: content, onChange: (event) => setContent(event.target.value), placeholder: "headline_a", className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold outline-none dark:border-white/10 dark:bg-slate-950/45" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-slate-400", children: [
            "Term (",
            t("可选", "optional"),
            ")"
          ] }),
          /* @__PURE__ */ jsx("input", { value: term, onChange: (event) => setTerm(event.target.value), placeholder: "keyword", className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold outline-none dark:border-white/10 dark:bg-slate-950/45" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-slate-400", children: t("已有 UTM 处理方式", "Existing UTM handling") }),
        /* @__PURE__ */ jsxs("select", { value: mode, onChange: (event) => setMode(event.target.value), className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black outline-none dark:border-white/10 dark:bg-slate-950/45", children: [
          /* @__PURE__ */ jsx("option", { value: "overwrite", children: t("覆盖已有参数", "Overwrite existing parameters") }),
          /* @__PURE__ */ jsx("option", { value: "preserve", children: t("保留已有参数", "Preserve existing parameters") }),
          /* @__PURE__ */ jsx("option", { value: "fill", children: t("只补缺失字段", "Fill missing fields only") }),
          /* @__PURE__ */ jsx("option", { value: "clear", children: t("清除全部 UTM", "Remove all UTM parameters") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "rounded-[40px] border border-blue-500/15 bg-blue-500/5 p-6 md:p-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.24em] text-blue-500", children: t("选择分发平台", "Select distribution platforms") }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: PLATFORMS.map((platform) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toggle(platform.id), className: `rounded-xl border px-4 py-3 text-xs font-black ${selected.includes(platform.id) ? "border-blue-500 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-300"}`, children: isEnglish ? platform.en : platform.zh }, platform.id)) })
    ] }),
    validation.length > 0 && /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-900 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-100", children: [
      /* @__PURE__ */ jsx("strong", { children: t("命名检查", "Naming check") }),
      /* @__PURE__ */ jsx("ul", { className: "mt-2", children: validation.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [
        "• ",
        item
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { "data-theme-surface": "adaptive-utm-output", className: "rounded-[40px] border border-blue-200 bg-blue-50/70 p-6 text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300", children: "Generated Links" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-black text-slate-950 dark:text-white", children: t("批量分发链接", "Batch distribution links") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxs("button", { disabled: !outputs.length, onClick: async () => {
            await copyText(tableText, "all");
            record("copy_all");
          }, className: "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-black text-white hover:bg-blue-700 disabled:opacity-40", children: [
            /* @__PURE__ */ jsx(FaClipboard, {}),
            copied === "all" ? t("已复制", "Copied") : t("复制全部", "Copy all")
          ] }),
          /* @__PURE__ */ jsxs("button", { disabled: !outputs.length, onClick: () => {
            download("utm-links.csv", csv, "text/csv;charset=utf-8");
            record("download_csv");
          }, className: "inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-3 text-xs font-black text-slate-800 hover:border-blue-400 disabled:opacity-40 dark:border-white/20 dark:bg-white/[0.06] dark:text-white", children: [
            /* @__PURE__ */ jsx(FaDownload, {}),
            "CSV"
          ] }),
          /* @__PURE__ */ jsxs("button", { disabled: !outputs.length, onClick: () => {
            download("utm-links.md", markdown, "text/markdown;charset=utf-8");
            record("download_markdown");
          }, className: "inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-3 text-xs font-black text-slate-800 hover:border-blue-400 disabled:opacity-40 dark:border-white/20 dark:bg-white/[0.06] dark:text-white", children: [
            /* @__PURE__ */ jsx(FaDownload, {}),
            "Markdown"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: outputs.map((item) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-blue-100 bg-white p-4 dark:border-white/10 dark:bg-white/[0.06]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-slate-950 dark:text-white", children: item.label }),
          /* @__PURE__ */ jsx("button", { onClick: async () => {
            await copyText(item.url, item.id);
            record("copy_one");
          }, className: "rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-black text-blue-700 hover:bg-blue-100 dark:bg-white/10 dark:text-blue-200", children: copied === item.id ? t("已复制", "Copied") : t("复制", "Copy") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 break-all font-mono text-xs leading-6 text-slate-600 dark:text-slate-300", children: item.url })
      ] }, item.id)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300", children: [
      /* @__PURE__ */ jsx(FaLink, { className: "mr-2 inline" }),
      t("所有 URL 都在浏览器中生成，不会提交你输入的网址。除 Hacker News 干净链接外，平台预设统一使用 utm_medium=referral；Campaign 应使用不带日期的稳定主题名。", "All URLs are generated in the browser and never submitted. Except for the Hacker News clean URL, every platform preset uses utm_medium=referral; Campaign should be a stable topic name without a publication date.")
    ] })
  ] });
}

export { UtmBatchBuilder as U };
