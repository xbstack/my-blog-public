import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const API_BASE_URL = String("https://api.xbstack.com").replace(/\/$/, "");
function NewsletterForm({ compact = false, lang = "zh-CN" }) {
  const isEnglish = String(lang).toLowerCase().startsWith("en");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const track = (eventName, payload = {}) => {
    if (typeof window !== "undefined" && typeof window.xbTrackEvent === "function") window.xbTrackEvent(eventName, payload);
  };
  const subscribe = async (event) => {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    track("newsletter_subscribe_attempt", { event_category: "conversion", event_label: window.location.pathname });
    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await response.json() : {};
      if (!response.ok) throw new Error(data.message || (isEnglish ? "Subscription failed." : "订阅失败，请稍后重试。"));
      setStatus("success");
      setMessage(isEnglish ? "Subscribed. Please check your inbox." : "订阅成功，请留意收件箱。");
      setEmail("");
      track("newsletter_subscribe", { event_category: "conversion", event_label: "success" });
    } catch (error) {
      setStatus("error");
      setMessage(error?.message || (isEnglish ? "Could not connect to the subscription service." : "暂时无法连接订阅服务，请稍后重试。"));
      track("newsletter_subscribe_error", { event_category: "conversion", event_label: "error" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `w-full ${compact ? "" : "max-w-[620px]"}`, children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: subscribe, className: "flex flex-col gap-2 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: isEnglish ? "you@example.com" : "输入你的邮箱",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          disabled: status === "loading" || status === "success",
          className: "h-11 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3.5 text-[12px] font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white",
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: status === "loading" || status === "success",
          className: `h-11 shrink-0 rounded-lg px-5 text-[11px] font-bold transition ${status === "success" ? "bg-emerald-600 text-white" : status === "error" ? "bg-rose-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`,
          children: status === "loading" ? /* @__PURE__ */ jsx(FaSpinner, { className: "mx-auto animate-spin" }) : status === "success" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FaCheckCircle, {}),
            " ",
            isEnglish ? "Subscribed" : "已订阅"
          ] }) : isEnglish ? "Subscribe" : "订阅"
        }
      )
    ] }),
    message && /* @__PURE__ */ jsxs("p", { className: `mt-2 text-[10px] font-semibold ${status === "success" ? "text-emerald-600" : "text-rose-600"}`, children: [
      status === "error" && /* @__PURE__ */ jsx(FaExclamationCircle, { className: "mr-1 inline" }),
      message
    ] })
  ] });
}

export { NewsletterForm as N };
