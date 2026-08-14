import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const API_BASE_URL = String("https://api.xbstack.com").replace(/\/$/, "");
const getAttribution = () => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  let stored = {};
  try {
    stored = JSON.parse(sessionStorage.getItem("xbstack_attribution") || "{}");
  } catch (err) {
    stored = {};
  }
  return {
    page_path: window.location.pathname,
    page_title: document.title || "",
    referrer: document.referrer || "",
    utm_source: params.get("utm_source") || stored.utm_source || "",
    utm_medium: params.get("utm_medium") || stored.utm_medium || "",
    utm_campaign: params.get("utm_campaign") || stored.utm_campaign || "",
    utm_id: params.get("utm_id") || stored.utm_id || "",
    utm_term: params.get("utm_term") || stored.utm_term || "",
    utm_content: params.get("utm_content") || stored.utm_content || ""
  };
};
function WaitlistForm({
  source = "lunest_page",
  placeholder = "输入您的邮箱地址",
  idleLabel = "加入等待名单",
  loadingLabel = "正在加入...",
  successLabel = "已加入",
  privacyNote = "我们承诺绝不发送垃圾邮件，仅在产品上线、测试资格或重要更新时通知您。",
  errorFallback = "提交失败，请检查网络",
  connectionError = "连接服务器失败，请稍后重试",
  showName = false,
  showPlatform = false,
  showUseCase = false,
  platformOptions = ["iOS", "Android", "Web", "暂不确定"],
  useCasePlaceholder = "你最想解决什么问题？例如睡眠恢复、财报分析、工具内测",
  successNextSteps = []
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState(platformOptions[0] || "");
  const [useCase, setUseCase] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const track = (eventName, payload = {}) => {
    if (typeof window !== "undefined" && typeof window.xbTrackEvent === "function") {
      window.xbTrackEvent(eventName, {
        event_category: "conversion",
        event_label: source,
        waitlist_source: source,
        ...payload
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    track("waitlist_submit_attempt", { platform, has_use_case: Boolean(useCase) });
    try {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const apiUrl = isLocal ? "http://localhost:8080/api/waitlist" : `${API_BASE_URL}/api/waitlist`;
      const payload = {
        email,
        name,
        platform,
        useCase,
        source,
        attribution: getAttribution()
      };
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await response.json() : {};
      if (!response.ok) {
        throw new Error(data.error || `Waitlist API ${response.status}`);
      }
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "已加入名单。下一步会通过邮件通知测试入口、上线进度或使用说明。");
        setEmail("");
        setName("");
        setUseCase("");
        track("waitlist_submit_success", { platform });
      } else {
        setStatus("error");
        setMessage(data.error || errorFallback);
        track("waitlist_submit_error", { error_message: data.error || errorFallback });
      }
    } catch (err) {
      setStatus("error");
      setMessage(connectionError);
      track("waitlist_submit_error", { error_message: connectionError });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, "data-analytics-form": "waitlist", "data-analytics-source": source, className: "relative group space-y-4", children: [
      showName && /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "你的称呼（可选）",
          disabled: status === "loading" || status === "success",
          className: "w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-xl"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder,
            required: true,
            disabled: status === "loading" || status === "success",
            className: "flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-xl"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "loading" || status === "success",
            className: `px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 ${status === "success" ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)]"}`,
            children: status === "loading" ? loadingLabel : status === "success" ? successLabel : idleLabel
          }
        )
      ] }),
      showPlatform && /* @__PURE__ */ jsx(
        "select",
        {
          value: platform,
          onChange: (e) => setPlatform(e.target.value),
          disabled: status === "loading" || status === "success",
          className: "w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-xl",
          children: platformOptions.map((item) => /* @__PURE__ */ jsx("option", { value: item, className: "bg-slate-950 text-white", children: item }, item))
        }
      ),
      showUseCase && /* @__PURE__ */ jsx(
        "textarea",
        {
          value: useCase,
          onChange: (e) => setUseCase(e.target.value),
          placeholder: useCasePlaceholder,
          rows: 3,
          disabled: status === "loading" || status === "success",
          className: "w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-xl resize-none"
        }
      ),
      message && /* @__PURE__ */ jsx("div", { className: `text-sm font-bold animate-fadeIn ${status === "success" ? "text-green-400" : "text-rose-400"}`, children: message }),
      status === "success" && successNextSteps.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-green-400/20 bg-green-400/10 p-5 text-left animate-fadeIn", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.28em] text-green-300 mb-3", children: "Next Steps" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs font-bold leading-relaxed text-slate-200", children: successNextSteps.map((item) => /* @__PURE__ */ jsxs("li", { children: [
          "✓ ",
          item
        ] }, item)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-slate-500 font-medium leading-relaxed", children: privacyNote })
  ] });
}

export { WaitlistForm as W };
