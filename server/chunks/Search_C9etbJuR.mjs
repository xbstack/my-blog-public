import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes, FaFire, FaCompass, FaMicrochip, FaExclamationTriangle, FaRobot, FaArrowRight } from 'react-icons/fa';

const SearchModal = ({ searchList, isEmbedded = false, initialOpen = false, lang = "zh-CN" }) => {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const [isOpen, setIsOpen] = useState(isEmbedded || initialOpen);
  const [inputVal, setInputVal] = useState("");
  const [indexItems, setIndexItems] = useState(() => Array.isArray(searchList) ? searchList : []);
  const [indexState, setIndexState] = useState(Array.isArray(searchList) ? "ready" : "idle");
  const [searchResults, setSearchResults] = useState([]);
  const [coreTemp, setCoreTemp] = useState("38.2");
  const [altBars, setAltBars] = useState([2, 4, 3, 6, 5, 8]);
  const inputRef = useRef(null);
  const lastTrackedSearchRef = useRef("");
  const fuseRef = useRef(null);
  const [isFuseReady, setIsFuseReady] = useState(false);
  const isSearching = inputVal.trim().length >= 2;
  const hasNoResults = isSearching && indexState === "ready" && isFuseReady && searchResults.length === 0;
  const isSearchLoading = isSearching && indexState !== "error" && (indexState === "loading" || !isFuseReady);
  const trackSearchEvent = (eventName, payload = {}) => {
    if (typeof window === "undefined") return;
    const tracker = window.xbTrackEvent;
    if (typeof tracker === "function") {
      tracker(eventName, payload);
    }
  };
  useEffect(() => {
    if (Array.isArray(searchList)) {
      setIndexItems(searchList);
      setIndexState("ready");
      return;
    }
    let cancelled = false;
    const indexUrl = isEnglish ? "/search-index-en.json" : "/search-index-zh.json";
    setIndexState("loading");
    fetch(indexUrl, { headers: { accept: "application/json" } }).then((response) => {
      if (!response.ok) throw new Error(`Search index request failed: ${response.status}`);
      return response.json();
    }).then((payload) => {
      if (cancelled) return;
      setIndexItems(Array.isArray(payload) ? payload : []);
      setIndexState("ready");
    }).catch((error) => {
      if (cancelled) return;
      console.error("[XBSTACK Search] index load failed", error);
      setIndexItems([]);
      setIndexState("error");
    });
    return () => {
      cancelled = true;
    };
  }, [isEnglish, searchList]);
  useEffect(() => {
    let cancelled = false;
    setIsFuseReady(false);
    if (indexState !== "ready") return () => {
      cancelled = true;
    };
    import('fuse.js').then(({ default: Fuse }) => {
      if (cancelled) return;
      fuseRef.current = new Fuse(indexItems, {
        keys: ["data.title", "data.description", "data.tags", "id", "collection", "body"],
        includeMatches: false,
        minMatchCharLength: 2,
        threshold: 0.4
      });
      setIsFuseReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [indexItems, indexState]);
  const hotKeywords = isEnglish ? ["AI Agent", "MCP", "LangGraph", "n8n", "Workflow Automation", "RAG", "Agent Evaluation", "Agent Observability", "Agent Deployment", "Compound Interest", "AI Financial Analysis", "Lunest", "Investing Review", "Reading", "Guizhou Hiking", "Outdoor Gear", "Gear Library"] : ["AI Agent", "MCP", "LangGraph", "n8n", "Workflow Automation", "RAG", "Agent Evaluation", "Agent Observability", "Agent Deployment", "复利计算器", "AI 财报助手", "Lunest", "投资复盘", "Reading", "贵州徒步", "户外装备", "Gear Library"];
  const handleKeywordClick = (keyword) => {
    setInputVal(keyword);
    inputRef.current?.focus();
    trackSearchEvent("click_search_keyword", {
      event_category: "site_search",
      search_term: keyword
    });
  };
  useEffect(() => {
    if (!isOpen || isEmbedded) return;
    const timer = setInterval(() => {
      setCoreTemp((37.5 + Math.random() * 2).toFixed(1));
      setAltBars((prev) => prev.map(() => Math.floor(Math.random() * 8) + 2));
    }, 2e3);
    return () => clearInterval(timer);
  }, [isOpen, isEmbedded]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const query = params.get("q");
      if (query) {
        setInputVal(query);
      }
    }
  }, []);
  useEffect(() => {
    if (isEmbedded) return;
    const handleToggle = () => {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    };
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleToggle();
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        e.preventDefault();
        handleToggle();
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("xbstack:open-search", handleToggle);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("xbstack:open-search", handleToggle);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEmbedded]);
  useEffect(() => {
    const query = inputVal.trim();
    if (query.length >= 2 && isFuseReady && fuseRef.current) {
      const results = fuseRef.current.search(query);
      setSearchResults(results);
      const trackingKey = `${query}|${results.length}`;
      if (lastTrackedSearchRef.current !== trackingKey) {
        lastTrackedSearchRef.current = trackingKey;
        trackSearchEvent("view_search_results", {
          event_category: "site_search",
          search_term: query,
          result_count: results.length
        });
      }
    } else {
      setSearchResults([]);
    }
  }, [inputVal, isFuseReady]);
  if (!isOpen) return null;
  if (isEmbedded) {
    return /* @__PURE__ */ jsxs("div", { className: "w-full font-sans text-left space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsx("div", { className: `absolute -inset-2 rounded-[45px] blur-2xl transition-all duration-700 opacity-40 
            ${hasNoResults ? "bg-rose-500 group-focus-within:opacity-60" : "bg-orange-500 group-focus-within:opacity-100"}` }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              className: "w-full bg-white dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[40px] p-8 pl-16 text-xl md:text-2xl font-black text-slate-955 dark:text-white placeholder:text-slate-300 dark:text-slate-700 focus:outline-none focus:ring-8 focus:ring-orange-500/5 transition-all shadow-2xl",
              placeholder: isEnglish ? "Search AI Agent, MCP, n8n, compounding, reading, hiking..." : "搜索 AI Agent、MCP、n8n、复利、阅读、贵州徒步...",
              type: "text",
              value: inputVal,
              onChange: (e) => setInputVal(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-800 group-focus-within:text-orange-500 transition-colors", children: /* @__PURE__ */ jsx(FaSearch, { size: 22 }) }),
          inputVal && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setInputVal(""),
              className: "absolute right-8 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ jsx(FaTimes, { size: 16, className: "text-slate-400" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-[35px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6 text-slate-950 dark:text-white", children: [
          /* @__PURE__ */ jsx(FaFire, { className: "text-orange-500 text-sm" }),
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-black uppercase tracking-wider m-0", children: isEnglish ? "Recommended Searches / HOT_KEYWORDS" : "热门推荐搜索 / HOT_KEYWORDS" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: hotKeywords.map((kw, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleKeywordClick(kw),
            className: `px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border cursor-pointer
                  ${inputVal === kw ? "bg-orange-500 border-orange-500 text-white" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-orange-500 hover:text-orange-500"}`,
            children: kw
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6", children: inputVal.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "py-16 text-center text-slate-700 dark:text-slate-200 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-[45px]", children: [
        /* @__PURE__ */ jsx(FaCompass, { size: 40, className: "mx-auto mb-6 text-slate-400" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-black uppercase tracking-[0.3em] m-0", children: "Vault_Standby" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Index ready · Enter a keyword or choose a suggested topic" : "库位就绪 · 请输入关键词或点击热门标签" })
        ] })
      ] }) : inputVal.length < 2 ? /* @__PURE__ */ jsxs("div", { className: "py-16 text-center text-slate-700 dark:text-slate-200 rounded-[45px] bg-slate-100 dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/5", children: [
        /* @__PURE__ */ jsx(FaMicrochip, { size: 40, className: "mx-auto mb-6 text-sky-500" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-black uppercase tracking-[0.3em] m-0", children: "Lock_Depth_Low" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Enter at least 2 characters" : "扫描深度不足（最少输入 2 个字符）" })
        ] })
      ] }) : isSearchLoading ? /* @__PURE__ */ jsxs("div", { className: "py-16 text-center text-slate-700 dark:text-slate-200 rounded-[45px] bg-slate-100 dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/5", children: [
        /* @__PURE__ */ jsx(FaMicrochip, { size: 40, className: "mx-auto mb-6 text-sky-500 animate-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-black uppercase tracking-[0.3em] m-0", children: "Index_Loading" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Loading search index" : "搜索索引加载中" })
        ] })
      ] }) : searchResults.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-black uppercase tracking-widest text-slate-400", children: isEnglish ? `${searchResults.length} matching results / LOGS_FOUND` : `扫描得出 ${searchResults.length} 条符合条件的结果 / LOGS_FOUND` }),
        searchResults.map(({ item }, idx) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: item.data.custom_url,
            onClick: () => trackSearchEvent("click_search_result", {
              event_category: "site_search",
              search_term: inputVal.trim(),
              result_position: idx + 1,
              result_title: item.data.title,
              event_label: item.data.custom_url
            }),
            className: "block group p-8 rounded-[40px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-orange-500/40 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 shadow-sm hover:shadow-xl text-left",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-500 transition-colors", children: item.collection?.toUpperCase() }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-slate-400 opacity-50 tracking-tighter italic", children: "MATCH_VERIFIED" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-black italic tracking-tighter text-slate-955 dark:text-white uppercase leading-none group-hover:text-orange-500 transition-colors mb-3", children: item.data.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed line-clamp-2 m-0", children: item.data.description || (isEnglish ? "No description is available." : "无需描述，逻辑自洽。") })
            ]
          },
          idx
        ))
      ] }) : /* @__PURE__ */ jsxs("div", { className: "py-20 text-center rounded-[45px] bg-rose-500/[0.02] border-2 border-dashed border-rose-500/20 transition-all duration-500", children: [
        /* @__PURE__ */ jsx(FaExclamationTriangle, { size: 40, className: "mx-auto mb-6 text-rose-500 animate-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-rose-600 dark:text-rose-400 uppercase tracking-tighter italic m-0", children: "Logic_Void_Detected" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-rose-500/60 uppercase tracking-[0.3em] m-0", children: isEnglish ? "No matching content found" : "检索目标失联" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed space-y-2 font-medium", children: [
          /* @__PURE__ */ jsx("p", { children: isEnglish ? "No matching content was found. Try one of these options:" : "没有找到匹配的内容。您可以尝试：" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-left inline-block", children: [
            /* @__PURE__ */ jsx("li", { children: isEnglish ? "Use a shorter term, such as RAG instead of a long natural-language question." : "换一个更短的关键词，如用“RAG”代替“知识库建设”。" }),
            /* @__PURE__ */ jsx("li", { children: isEnglish ? "Try framework or protocol names such as MCP, LangGraph or n8n." : "用英文缩写词进行索引，例如 MCP、LangGraph、n8n。" }),
            /* @__PURE__ */ jsx("li", { children: isEnglish ? "Open a topic hub from the English navigation." : "使用底部的栏目指南或直接查阅下面的核心专题入口。" })
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[10000] flex flex-col overflow-hidden font-sans", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 text-left", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center scale-110 blur-[45px] opacity-30 dark:opacity-20 transition-all duration-1000",
          style: { backgroundImage: "url('/assets/uploads/macos2.jpg')" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-50/95 dark:bg-[#020617]/98 backdrop-blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#80808022_1.5px,transparent_1.5px)] bg-[size:40px_40px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-20 border-b border-black/5 dark:border-white/5 bg-white/10 dark:bg-white/[0.02] py-4 text-left", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-10 flex justify-between items-center text-xs font-mono tracking-[0.2em] text-slate-500", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-left", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("span", { children: "LOC: 26.57°N (GUIYANG)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-8 font-black text-left", children: [
          /* @__PURE__ */ jsx("span", { children: "ALT: 1,240m" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 items-end h-3 w-12 text-left", children: altBars.map((h, i) => /* @__PURE__ */ jsx("div", { className: "w-1 bg-blue-500/30 transition-all", style: { height: `${h * 10}%` } }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 uppercase font-black text-right", children: [
        /* @__PURE__ */ jsx("span", { className: hasNoResults ? "text-rose-500" : "text-green-600", children: isSearchLoading ? "STATUS: LOADING" : hasNoResults ? "STATUS: MISMATCH" : "STATUS: ACTIVE" }),
        /* @__PURE__ */ jsx("span", { className: "opacity-20", children: "|" }),
        /* @__PURE__ */ jsxs("span", { className: "tabular-nums", children: [
          "CPU_TEMP: ",
          coreTemp,
          "°C"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), className: "ml-4 p-2 hover:bg-rose-500 hover:text-white rounded-full transition-all group", children: /* @__PURE__ */ jsx(FaTimes, { className: "group-hover:rotate-90 transition-transform" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-6 py-20 custom-scrollbar text-left", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-20", children: [
      /* @__PURE__ */ jsxs("header", { className: "text-center animate-fadeUp", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-8xl font-black text-slate-955 dark:text-white mb-6 uppercase tracking-tighter italic text-center", children: "Search." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 dark:text-slate-500 font-black tracking-[0.4em] uppercase text-xs italic text-center", children: "Accessing Sovereignty Data Vault..." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative group animate-fadeUp", children: [
        /* @__PURE__ */ jsx("div", { className: `absolute -inset-2 rounded-[45px] blur-2xl transition-all duration-700 opacity-40 
              ${hasNoResults ? "bg-rose-500 group-focus-within:opacity-60" : "bg-orange-500 group-focus-within:opacity-100"}` }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              className: "w-full bg-white dark:bg-slate-950/60 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[40px] p-10 pl-16 text-2xl md:text-3xl font-black text-slate-955 dark:text-white placeholder:text-slate-300 dark:text-slate-700 focus:outline-none focus:ring-8 focus:ring-orange-500/5 transition-all shadow-2xl",
              placeholder: isEnglish ? "Enter a search keyword..." : "键入检索逻辑关键词...",
              type: "text",
              value: inputVal,
              onChange: (e) => setInputVal(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-800 group-focus-within:text-orange-500 transition-colors", children: /* @__PURE__ */ jsx(FaSearch, { size: 28 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 pb-40", children: inputVal.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "py-24 text-center text-slate-700 dark:text-slate-200 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-[60px] animate-pulse", children: [
        /* @__PURE__ */ jsx(FaRobot, { size: 60, className: "mx-auto mb-8 text-slate-400" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black uppercase tracking-[0.4em] m-0", children: "Vault_Standby" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Index ready · Waiting for a query" : "库位就绪 · 等待指令" })
        ] })
      ] }) : inputVal.length < 2 ? /* @__PURE__ */ jsxs("div", { className: "py-24 text-center text-slate-700 dark:text-slate-200 rounded-[60px] bg-slate-100 dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/5", children: [
        /* @__PURE__ */ jsx(FaMicrochip, { size: 60, className: "mx-auto mb-8 text-sky-500" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black uppercase tracking-[0.4em] m-0", children: "Lock_Depth_Low" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Enter at least 2 characters" : "扫描深度不足" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-6 font-mono tracking-widest uppercase", children: "Required: 2+ Logical Characters" })
      ] }) : isSearchLoading ? /* @__PURE__ */ jsxs("div", { className: "py-24 text-center text-slate-700 dark:text-slate-200 rounded-[60px] bg-slate-100 dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/5", children: [
        /* @__PURE__ */ jsx(FaMicrochip, { size: 60, className: "mx-auto mb-8 text-sky-500 animate-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black uppercase tracking-[0.4em] m-0", children: "Index_Loading" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] m-0", children: isEnglish ? "Loading search index" : "搜索索引加载中" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-6 font-mono tracking-widest uppercase", children: "Loading Fuse search module" })
      ] }) : searchResults.length > 0 ? searchResults.map(({ item }, idx) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.data.custom_url,
          onClick: () => trackSearchEvent("click_search_result", {
            event_category: "site_search",
            search_term: inputVal.trim(),
            result_position: idx + 1,
            result_title: item.data.title,
            event_label: item.data.custom_url
          }),
          className: "block group relative p-10 rounded-[50px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-orange-500/40 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 shadow-sm hover:shadow-2xl animate-fadeUp text-left",
          style: { animationDelay: `${idx * 40}ms` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-500 transition-colors", children: item.collection }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-slate-400 opacity-50 tracking-tighter italic", children: "COORDINATE_PASS" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-black italic tracking-tighter text-slate-955 dark:text-white uppercase leading-none group-hover:text-orange-500 transition-colors mb-4", children: item.data.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 font-bold leading-relaxed line-clamp-2 m-0", children: item.data.description || (isEnglish ? "No description is available." : "无需描述，逻辑自洽。") }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-black text-orange-500 uppercase tracking-[0.4em]", children: "INITIATE_UPLINK" }),
              /* @__PURE__ */ jsx(FaArrowRight, { className: "text-orange-500", size: 10 })
            ] })
          ]
        },
        idx
      )) : /* @__PURE__ */ jsxs("div", { className: "py-24 text-center rounded-[60px] bg-rose-500/[0.03] border-2 border-dashed border-rose-500/30 transition-all duration-500", children: [
        /* @__PURE__ */ jsx(FaExclamationTriangle, { size: 60, className: "mx-auto mb-8 text-rose-500 animate-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-rose-600 dark:text-rose-400 uppercase tracking-tighter italic m-0", children: "Logic_Void_Detected" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-rose-500/60 uppercase tracking-[0.3em] m-0", children: isEnglish ? "No matching content found" : "检索目标失联" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] max-w-sm mx-auto leading-relaxed m-0", children: "The requested entity is outside the current sovereignty nodes." }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setInputVal(""),
            className: "px-12 py-5 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.4em] hover:bg-rose-500 dark:hover:bg-rose-500 hover:text-white transition-all shadow-2xl active:scale-95 border border-white/10 dark:border-black/5",
            children: "Reboot Scanner"
          }
        ) })
      ] }) })
    ] }) })
  ] });
};

export { SearchModal as default };
