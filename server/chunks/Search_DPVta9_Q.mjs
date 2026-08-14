import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';

function Search({ searchList, isEmbedded = false, initialOpen = false, lang = "zh-CN" }) {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const [isOpen, setIsOpen] = useState(isEmbedded || initialOpen);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(Array.isArray(searchList) ? searchList : []);
  const [state, setState] = useState(Array.isArray(searchList) ? "ready" : "idle");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const lastTrackedRef = useRef("");
  const hotKeywords = isEnglish ? ["MCP", "LangGraph", "AI Agent", "n8n", "RAG", "Evaluation", "AI Finance", "Lunest"] : ["MCP", "LangGraph", "AI Agent", "n8n", "RAG", "Agent Evaluation", "AI 财报", "贵州徒步"];
  const track = (eventName, payload = {}) => {
    if (typeof window === "undefined") return;
    const fn = window.xbTrackEvent;
    if (typeof fn === "function") fn(eventName, payload);
  };
  useEffect(() => {
    if (Array.isArray(searchList)) {
      setItems(searchList);
      setState("ready");
      return;
    }
    let cancelled = false;
    setState("loading");
    fetch(isEnglish ? "/search-index-en.json" : "/search-index-zh.json", { headers: { accept: "application/json" } }).then((r) => {
      if (!r.ok) throw new Error(`Search index request failed: ${r.status}`);
      return r.json();
    }).then((payload) => {
      if (cancelled) return;
      setItems(Array.isArray(payload) ? payload : []);
      setState("ready");
    }).catch((error) => {
      if (cancelled) return;
      console.error("[XBSTACK Search] index load failed", error);
      setState("error");
    });
    return () => {
      cancelled = true;
    };
  }, [isEnglish, searchList]);
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2 || state !== "ready") {
      setResults([]);
      return;
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const scored = items.map((item) => {
      const title = String(item?.data?.title || "").toLowerCase();
      const description = String(item?.data?.description || "").toLowerCase();
      const tags = Array.isArray(item?.data?.tags) ? item.data.tags.join(" ").toLowerCase() : "";
      const id = String(item?.id || "").toLowerCase();
      const collection = String(item?.collection || "").toLowerCase();
      const body2 = String(item?.body || "").toLowerCase();
      const haystack = `${title} ${description} ${tags} ${id} ${collection} ${body2}`;
      if (!terms.every((term) => haystack.includes(term))) return null;
      let score = 0;
      for (const term of terms) {
        if (title === term) score += 120;
        else if (title.startsWith(term)) score += 80;
        else if (title.includes(term)) score += 60;
        if (tags.includes(term)) score += 28;
        if (description.includes(term)) score += 18;
        if (id.includes(term)) score += 12;
        if (collection.includes(term)) score += 8;
        if (body2.includes(term)) score += 4;
      }
      return { item, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 80);
    setResults(scored);
    const key = `${q}|${scored.length}`;
    if (key !== lastTrackedRef.current) {
      lastTrackedRef.current = key;
      track("view_search_results", { event_category: "site_search", search_term: q, result_count: scored.length });
    }
  }, [query, items, state]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);
  useEffect(() => {
    if (isEmbedded) return;
    const open = () => {
      window.__xbstackSearchRequested = false;
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 60);
    };
    const keydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(e.target?.tagName)) {
        e.preventDefault();
        open();
      }
      if (e.key === "Escape") {
        window.__xbstackSearchRequested = false;
        setIsOpen(false);
      }
    };
    window.__xbstackOpenSearch = open;
    window.__xbstackSearchMounted = true;
    window.addEventListener("xbstack:open-search", open);
    window.addEventListener("keydown", keydown);
    if (window.__xbstackSearchRequested) open();
    return () => {
      if (window.__xbstackOpenSearch === open) delete window.__xbstackOpenSearch;
      window.__xbstackSearchMounted = false;
      window.removeEventListener("xbstack:open-search", open);
      window.removeEventListener("keydown", keydown);
    };
  }, [isEmbedded]);
  if (!isOpen) return null;
  const submitSearch = (event) => {
    event.preventDefault();
    const q = query.trim();
    if (q.length < 2 || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    params.set("q", q);
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
    track("submit_search", { event_category: "site_search", search_term: q, result_count: results.length });
  };
  const input = /* @__PURE__ */ jsxs("form", { className: "relative", onSubmit: submitSearch, role: "search", children: [
    /* @__PURE__ */ jsx(FaSearch, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400", size: 15 }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: isEnglish ? "Search problems, tools, topics and articles…" : "搜索报错、技术问题、工具、主题或文章…",
        className: "h-14 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-28 text-[14px] font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      }
    ),
    query && /* @__PURE__ */ jsx("button", { type: "button", "aria-label": isEnglish ? "Clear search" : "清空搜索", onClick: () => setQuery(""), className: "absolute right-[74px] top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5", children: /* @__PURE__ */ jsx(FaTimes, { size: 13 }) }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "absolute right-2 top-1/2 inline-flex h-10 min-w-[60px] -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 px-3 text-[11px] font-bold leading-none text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30", children: isEnglish ? "Search" : "搜索" })
  ] });
  const body = /* @__PURE__ */ jsxs(Fragment, { children: [
    input,
    /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: hotKeywords.map((kw) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
      setQuery(kw);
      inputRef.current?.focus();
      track("click_search_keyword", { search_term: kw });
    }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300", children: kw }, kw)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-7", children: query.trim().length === 0 ? /* @__PURE__ */ jsx("div", { className: "border-y border-slate-200 py-10 text-center text-[12px] text-slate-500 dark:border-white/10 dark:text-slate-400", children: isEnglish ? "Enter a keyword or choose a suggested topic." : "输入关键词，或从上面的主题开始。" }) : query.trim().length < 2 ? /* @__PURE__ */ jsx("div", { className: "border-y border-slate-200 py-10 text-center text-[12px] text-slate-500 dark:border-white/10 dark:text-slate-400", children: isEnglish ? "Enter at least two characters." : "至少输入两个字符。" }) : state === "error" ? /* @__PURE__ */ jsx("div", { className: "border-y border-slate-200 py-10 text-center text-[12px] text-rose-600 dark:border-white/10", children: isEnglish ? "Search index failed to load." : "搜索索引加载失败，请稍后重试。" }) : state === "loading" || state === "idle" ? /* @__PURE__ */ jsx("div", { className: "border-y border-slate-200 py-10 text-center text-[12px] text-slate-500 dark:border-white/10 dark:text-slate-400", children: isEnglish ? "Loading search index…" : "正在加载搜索索引…" }) : results.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "border-y border-slate-200 py-10 text-center dark:border-white/10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[14px] font-bold text-slate-900 dark:text-white", children: isEnglish ? "No matching result" : "没有找到匹配内容" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] text-slate-500", children: isEnglish ? "Try a broader term or open the closest topic hub." : "尝试更短的关键词，或进入最接近的专题 Hub。" })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-[10px] font-bold text-slate-400", children: isEnglish ? `${results.length} results` : `${results.length} 条结果` }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-200 dark:border-white/10", children: results.slice(0, 40).map(({ item }, idx) => {
        const href = item?.data?.custom_url || item?.data?.url || item?.url || "#";
        const tags = Array.isArray(item?.data?.tags) ? item.data.tags.slice(0, 3) : [];
        return /* @__PURE__ */ jsx("a", { href, onClick: () => track("click_search_result", { search_term: query.trim(), result_url: href }), className: "block border-b border-slate-200 py-4 transition hover:bg-slate-50/70 dark:border-white/10 dark:hover:bg-white/[0.025]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400", children: item?.collection || item?.data?.category || "XBSTACK" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 text-[14px] font-bold leading-6 text-slate-950 dark:text-white", children: item?.data?.title || item?.id }),
            item?.data?.description && /* @__PURE__ */ jsx("p", { className: "mt-1 line-clamp-2 text-[11px] leading-5 text-slate-500 dark:text-slate-400", children: item.data.description }),
            tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: "text-[9px] text-slate-400", children: [
              "#",
              tag
            ] }, tag)) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "mt-5 text-slate-300", children: "→" })
        ] }) }, `${href}-${idx}`);
      }) })
    ] }) })
  ] });
  if (isEmbedded) return /* @__PURE__ */ jsx("div", { className: "w-full text-left", children: body });
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[900] flex items-start justify-center bg-slate-950/45 px-4 pt-[8vh] backdrop-blur-sm", role: "dialog", "aria-modal": "true", onMouseDown: (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  }, children: /* @__PURE__ */ jsxs("div", { className: "max-h-[82vh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950 md:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400", children: "XBSTACK Search" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[13px] font-semibold text-slate-600 dark:text-slate-300", children: isEnglish ? "Find an answer, topic or tool." : "快速找到答案、专题或工具。" })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsOpen(false), className: "rounded-lg border border-slate-200 p-2 text-slate-400 dark:border-white/10", children: /* @__PURE__ */ jsx(FaTimes, { size: 13 }) })
    ] }),
    body
  ] }) });
}

export { Search as S };
