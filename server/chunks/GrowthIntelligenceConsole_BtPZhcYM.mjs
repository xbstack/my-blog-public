import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

class AdminApiError extends Error {
  constructor(status, body) {
    const validationMessage = Array.isArray(body?.detail) ? body.detail.map((issue) => issue?.msg).filter(Boolean).join("；") : "";
    const message = typeof body?.error === "string" ? body.error : body?.error?.message || validationMessage || body?.message || `API Error ${status}`;
    super(message);
    this.status = status;
    this.body = body;
    this.name = "AdminApiError";
  }
}
function normalizeAdminApiPath(path) {
  if (!path.startsWith("/api/admin/growth/")) return path;
  const queryIndex = path.indexOf("?");
  const pathname = queryIndex >= 0 ? path.slice(0, queryIndex) : path;
  const query = queryIndex >= 0 ? path.slice(queryIndex) : "";
  const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${normalizedPathname}${query}`;
}
async function request(method, path, body, options = {}) {
  const headers = {
    ...options.headers || {}
  };
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(normalizeAdminApiPath(path), {
    method,
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : void 0,
    ...options
  });
  if (res.status === 401) {
    try {
      sessionStorage.removeItem("xbstack:growth-query-cache:v1");
      localStorage.removeItem("xbstack:growth-jobs:v2");
    } catch {
    }
    window.location.assign("/admin/login?expired=" + Date.now());
    throw new AdminApiError(401, { error: "会话已过期, 请重新登录" });
  }
  let data;
  try {
    data = await res.json();
  } catch {
    if (res.ok) return void 0;
    throw new AdminApiError(res.status, { error: `服务器返回异常 (${res.status})` });
  }
  if (!res.ok || data && data.success === false) {
    throw new AdminApiError(res.status, data);
  }
  return data;
}
function showToast(message, type = "success") {
  if (typeof window !== "undefined" && window.showToast) {
    window.showToast(message, type);
  }
}
const adminApi = {
  get(path) {
    return request("GET", path);
  },
  post(path, body) {
    return request("POST", path, body);
  },
  put(path, body) {
    return request("PUT", path, body);
  },
  patch(path, body) {
    return request("PATCH", path, body);
  },
  del(path) {
    return request("DELETE", path);
  },
  upload(path, formData) {
    return request("POST", path, formData);
  },
  /**
   * 安全调用 — 自动处理 toast 提示
   */
  async safeGet(path, successMsg) {
    try {
      const data = await request("GET", path);
      if (successMsg) showToast(successMsg, "success");
      return data;
    } catch (e) {
      if (e instanceof AdminApiError) {
        showToast(e.message, "error");
      } else {
        showToast("网络错误, 请检查连接", "error");
      }
      return null;
    }
  },
  async safePost(path, body, successMsg) {
    try {
      const data = await request("POST", path, body);
      showToast(successMsg || "保存成功", "success");
      return data;
    } catch (e) {
      if (e instanceof AdminApiError) {
        showToast(e.message, "error");
      } else {
        showToast("网络错误, 请检查连接", "error");
      }
      return null;
    }
  },
  async safePut(path, body, successMsg) {
    try {
      const data = await request("PUT", path, body);
      showToast(successMsg || "更新成功", "success");
      return data;
    } catch (e) {
      if (e instanceof AdminApiError) {
        showToast(e.message, "error");
      } else {
        showToast("网络错误, 请检查连接", "error");
      }
      return null;
    }
  },
  async safeDel(path, successMsg) {
    try {
      const data = await request("DELETE", path);
      showToast(successMsg || "删除成功", "success");
      return data;
    } catch (e) {
      if (e instanceof AdminApiError) {
        showToast(e.message, "error");
      } else {
        showToast("网络错误, 请检查连接", "error");
      }
      return null;
    }
  }
};

const STORAGE_KEY$1 = 'xbstack:growth-query-cache:v1';
const DEFAULT_TTL = 2 * 60 * 1000;
const MAX_ENTRY_BYTES = 800 * 1024;
const MAX_STORAGE_BYTES = 3.2 * 1024 * 1024;

const memoryCache = new Map();
const inflight = new Map();

function isBrowser$1() {
  return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
}

function normalizePath$1(path) {
  try {
    const url = new URL(path, 'https://admin.xbstack.local');
    const params = [...url.searchParams.entries()].sort(([aKey, aValue], [bKey, bValue]) => {
      const keyCompare = aKey.localeCompare(bKey);
      return keyCompare || aValue.localeCompare(bValue);
    });
    const query = new URLSearchParams(params).toString();
    return `${url.pathname}${query ? `?${query}` : ''}`;
  } catch {
    return String(path || '');
  }
}

function normalizeTags(tags) {
  return [...new Set((Array.isArray(tags) ? tags : [tags]).filter(Boolean).map(String))];
}

function readStorage() {
  if (!isBrowser$1()) return {};
  try {
    const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY$1) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function trimStorage(entries) {
  const sorted = Object.entries(entries).sort(([, left], [, right]) => Number(right?.storedAt || 0) - Number(left?.storedAt || 0));
  const kept = {};
  let bytes = 2;
  for (const [key, entry] of sorted) {
    const encoded = JSON.stringify({ [key]: entry });
    if (encoded.length > MAX_ENTRY_BYTES || bytes + encoded.length > MAX_STORAGE_BYTES) continue;
    kept[key] = entry;
    bytes += encoded.length;
  }
  return kept;
}

function writeStorage(entries) {
  if (!isBrowser$1()) return;
  try {
    sessionStorage.setItem(STORAGE_KEY$1, JSON.stringify(trimStorage(entries)));
  } catch {
    try {
      sessionStorage.removeItem(STORAGE_KEY$1);
    } catch {
      // Browser storage can be disabled. Memory cache remains available.
    }
  }
}

function getEntry(key) {
  const memoryEntry = memoryCache.get(key);
  if (memoryEntry) return memoryEntry;
  const stored = readStorage()[key];
  if (stored) memoryCache.set(key, stored);
  return stored || null;
}

function setEntry(key, response, tags, ttl) {
  const entry = {
    response,
    tags: normalizeTags(tags),
    storedAt: Date.now(),
    expiresAt: Date.now() + Math.max(1_000, Number(ttl || DEFAULT_TTL)),
  };
  memoryCache.set(key, entry);
  const stored = readStorage();
  stored[key] = entry;
  writeStorage(stored);
  if (isBrowser$1()) {
    window.dispatchEvent(new CustomEvent('growth:cache-updated', {
      detail: { key, tags: entry.tags, storedAt: entry.storedAt },
    }));
  }
  return response;
}

async function fetchAndCache(path, key, options) {
  if (inflight.has(key)) return inflight.get(key);
  const request = adminApi.get(path)
    .then((response) => setEntry(key, response, options.tags, options.ttl))
    .finally(() => inflight.delete(key));
  inflight.set(key, request);
  return request;
}

async function growthCachedGet(path, options = {}) {
  const key = normalizePath$1(path);
  const ttl = Number(options.ttl || DEFAULT_TTL);
  const entry = getEntry(key);
  if (!options.force && entry && Number(entry.expiresAt || 0) > Date.now()) {
    return entry.response;
  }
  return fetchAndCache(path, key, { ...options, ttl });
}

function invalidateGrowthCache(tags = [], options = {}) {
  const normalizedTags = normalizeTags(tags);
  const pathPrefixes = normalizeTags(options.pathPrefixes || []);
  const clearAll = Boolean(options.all) || (!normalizedTags.length && !pathPrefixes.length);
  const stored = readStorage();
  const keys = new Set([...memoryCache.keys(), ...Object.keys(stored)]);
  const removed = [];

  keys.forEach((key) => {
    const entry = memoryCache.get(key) || stored[key];
    const matchesTag = normalizedTags.some((tag) => (entry?.tags || []).includes(tag));
    const matchesPath = pathPrefixes.some((prefix) => key.startsWith(prefix));
    if (clearAll || matchesTag || matchesPath) {
      memoryCache.delete(key);
      delete stored[key];
      removed.push(key);
    }
  });

  writeStorage(stored);
  if (isBrowser$1()) {
    window.dispatchEvent(new CustomEvent('growth:cache-invalidated', {
      detail: { tags: normalizedTags, pathPrefixes, removed },
    }));
  }
  return removed.length;
}

const STORAGE_KEY = 'xbstack:growth-jobs:v2';
const TERMINAL = new Set(['success', 'failed', 'cancelled']);
const ACTIVE = new Set(['queued', 'running']);
const DEFAULT_TIMEOUT = 30 * 60 * 1000;
const HISTORY_TTL = 24 * 60 * 60 * 1000;

const pollers = new Map();
const latestJobs = new Map();

function isBrowser() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function normalizePath(path) {
  const value = String(path || '');
  if (!value) return '';
  return value.endsWith('/') ? value : `${value}/`;
}

function readTracked() {
  if (!isBrowser()) return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeTracked(items) {
  if (!isBrowser()) return;
  const cutoff = Date.now() - HISTORY_TTL;
  const compact = items
    .filter((item) => ACTIVE.has(item.status) || Number(item.finishedAt || item.createdAt || 0) >= cutoff)
    .sort((left, right) => Number(right.createdAt || 0) - Number(left.createdAt || 0))
    .slice(0, 30);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compact));
  } catch {
    // Task tracking can continue in memory when browser storage is unavailable.
  }
}

function emit(name, detail) {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function upsertTracked(job, metadata = {}) {
  if (!job?.id) return null;
  const items = readTracked();
  const index = items.findIndex((item) => Number(item.id) === Number(job.id));
  const existing = index >= 0 ? items[index] : {};
  const next = {
    id: Number(job.id),
    jobType: String(job.job_type || metadata.jobType || existing.jobType || 'growth'),
    label: String(metadata.label || existing.label || jobLabel(job.job_type)),
    sourcePath: normalizePath(metadata.sourcePath || existing.sourcePath || (isBrowser() ? window.location.pathname : '')),
    cacheTags: [...new Set(['automation', ...(existing.cacheTags || []), ...(metadata.cacheTags || [])])],
    successMessage: String(metadata.successMessage || existing.successMessage || ''),
    failureMessage: String(metadata.failureMessage || existing.failureMessage || ''),
    status: String(job.status || existing.status || 'queued'),
    progress: String(jobProgressText(job) || existing.progress || '等待后台执行'),
    createdAt: Number(existing.createdAt || Date.now()),
    updatedAt: Date.now(),
    finishedAt: TERMINAL.has(job.status) ? Date.now() : Number(existing.finishedAt || 0),
    notifiedAt: Number(existing.notifiedAt || 0),
  };
  if (index >= 0) items[index] = next;
  else items.unshift(next);
  writeTracked(items);
  latestJobs.set(Number(job.id), job);
  emit('growth:jobs-changed', { jobs: getTrackedGrowthJobs(), job, metadata: next });
  return next;
}

function markNotified(jobId) {
  const items = readTracked();
  const index = items.findIndex((item) => Number(item.id) === Number(jobId));
  if (index < 0 || items[index].notifiedAt) return false;
  items[index] = { ...items[index], notifiedAt: Date.now(), updatedAt: Date.now() };
  writeTracked(items);
  return true;
}

function requestNotificationPermission() {
  if (!isBrowser() || !('Notification' in window) || Notification.permission !== 'default') return;
  try {
    void Notification.requestPermission();
  } catch {
    // Browsers may reject permission requests outside a user gesture.
  }
}

function notifyCompletion(job, metadata) {
  if (!markNotified(job.id)) return;
  const success = job.status === 'success';
  const message = success
    ? (metadata.successMessage || `${metadata.label}已完成，页面数据将自动刷新。`)
    : (metadata.failureMessage || `${metadata.label}执行失败：${job.error_message || '请打开任务中心查看详情。'}`);

  if (isBrowser() && typeof window.showToast === 'function') {
    window.showToast(`${success ? '✅' : '❌'} ${message}`, success ? 'success' : 'error');
  }

  const leftSourcePage = isBrowser() && normalizePath(window.location.pathname) !== normalizePath(metadata.sourcePath);
  if (isBrowser() && 'Notification' in window && Notification.permission === 'granted' && (document.hidden || leftSourcePage)) {
    try {
      const notification = new Notification(success ? 'Growth 查询已完成' : 'Growth 查询失败', {
        body: message,
        tag: `growth-job-${job.id}`,
      });
      notification.onclick = () => {
        window.focus();
        if (metadata.sourcePath) window.location.assign(metadata.sourcePath);
        notification.close();
      };
    } catch {
      // In-app task center and toast remain available.
    }
  }
}

function finalizeJob(job, metadata) {
  const nextMetadata = upsertTracked(job, metadata) || metadata;
  if (job.status === 'success' && nextMetadata.cacheTags?.length) {
    invalidateGrowthCache(nextMetadata.cacheTags);
  }
  emit(job.status === 'success' ? 'growth:job-complete' : 'growth:job-failed', {
    job,
    metadata: nextMetadata,
  });
  notifyCompletion(job, nextMetadata);
  return job;
}

function sleep(milliseconds) {
  return new Promise((resolve) => globalThis.setTimeout(resolve, milliseconds));
}

async function pollJob(jobId, options = {}) {
  const interval = Math.max(700, Number(options.interval || 1500));
  let connectionErrors = 0;
  while (true) {
    try {
      const response = await adminApi.get(`/api/admin/growth/jobs/${jobId}`);
      const job = response.data?.job;
      if (!job?.id) throw new Error('后台任务状态响应无效');
      connectionErrors = 0;
      const metadata = upsertTracked(job, options) || options;
      options.onProgress?.(job);
      emit('growth:job-progress', { job, metadata });
      if (TERMINAL.has(job.status)) return finalizeJob(job, metadata);
      await sleep(interval);
    } catch (error) {
      if (error instanceof AdminApiError && error.status === 401) throw error;
      if (error instanceof AdminApiError && error.status === 404) {
        const tracked = readTracked().find((item) => Number(item.id) === Number(jobId));
        return finalizeJob(
          {
            id: jobId,
            job_type: tracked?.jobType || options.jobType || 'growth',
            status: 'failed',
            error_code: 'GROWTH_JOB_NOT_FOUND',
            error_message: '后台任务记录不存在，可能已被清理。',
            progress: { message: '任务记录不存在' },
          },
          tracked || options,
        );
      }
      connectionErrors += 1;
      const tracked = readTracked().find((item) => Number(item.id) === Number(jobId));
      if (tracked) {
        const syntheticJob = {
          id: jobId,
          job_type: tracked.jobType,
          status: tracked.status || 'running',
          progress: { message: `状态连接暂时中断，正在第 ${connectionErrors} 次重试` },
        };
        upsertTracked(syntheticJob, options);
        options.onProgress?.(syntheticJob);
      }
      await sleep(Math.min(10_000, interval * Math.max(2, connectionErrors)));
    }
  }
}

function ensurePolling(jobId, options = {}) {
  const numericId = Number(jobId);
  if (pollers.has(numericId)) return pollers.get(numericId);
  const promise = pollJob(numericId, options).finally(() => pollers.delete(numericId));
  pollers.set(numericId, promise);
  return promise;
}

async function submitGrowthJob(jobType, payload = {}, options = {}) {
  if (options.requestNotification !== false) requestNotificationPermission();
  const response = await adminApi.post('/api/admin/growth/jobs', {
    job_type: jobType,
    payload,
    dedupe_key: options.dedupeKey || null,
    max_attempts: options.maxAttempts || 2,
  });
  const job = response.data?.job;
  if (!job?.id) throw new Error('后台任务未返回有效 ID');
  upsertTracked(job, { ...options, jobType });
  return waitForGrowthJob(job.id, options);
}

async function waitForGrowthJob(jobId, options = {}) {
  const timeout = Math.max(10_000, Number(options.timeout || DEFAULT_TIMEOUT));
  const polling = ensurePolling(jobId, options);
  const timeoutPromise = new Promise((_, reject) => {
    globalThis.setTimeout(() => reject(new AdminApiError(408, {
      error: {
        code: 'GROWTH_JOB_TIMEOUT',
        message: '后台任务仍在执行。你可以离开当前页面，任务完成后会收到通知。',
        details: { jobId },
      },
    })), timeout);
  });
  const job = await Promise.race([polling, timeoutPromise]);
  if (job.status === 'success') return job;
  throw new AdminApiError(500, {
    error: {
      code: job.error_code || 'GROWTH_JOB_FAILED',
      message: job.error_message || '后台任务执行失败',
      details: job,
    },
  });
}

function getTrackedGrowthJobs() {
  return readTracked().map((item) => ({
    ...item,
    job: latestJobs.get(Number(item.id)) || null,
  }));
}

function jobProgressText(job) {
  return job?.progress?.message || (job?.status === 'queued' ? '等待后台执行' : '后台执行中');
}

function jobLabel(jobType) {
  return ({
    sync: '同步 Growth 数据',
    scan_content: '扫描内容资产',
    scan_site: '检查站点健康',
    refresh_opportunities: '重新计算增长机会',
    review_due: '复查到期优化',
    automation: '执行 Growth 自动化',
  })[jobType] || '执行 Growth 后台任务';
}

function intersects(left = [], right = []) {
  const values = new Set(left);
  return right.some((value) => values.has(value));
}

function useGrowthJobRefresh(cacheTags, refresh) {
  const refreshRef = useRef(refresh);
  refreshRef.current = refresh;
  const tagKey = [...new Set(cacheTags || [])].sort().join('|');

  useEffect(() => {
    const handler = (event) => {
      const completedTags = event.detail?.metadata?.cacheTags || [];
      if (!intersects(tagKey ? tagKey.split('|') : [], completedTags)) return;
      Promise.resolve(refreshRef.current?.(true)).catch(() => {
        // The page-level loader owns visible error handling.
      });
    };
    window.addEventListener('growth:job-complete', handler);
    return () => window.removeEventListener('growth:job-complete', handler);
  }, [tagKey]);
}

const NAV_ITEMS = [
  ["/admin/growth/", "增长总览"],
  ["/admin/growth/opportunities/", "机会"],
  ["/admin/growth/seo/", "SEO 诊断"],
  ["/admin/growth/analytics/", "GA4 行为"],
  ["/admin/growth/tasks/", "任务"],
  ["/admin/growth/changes/", "优化复查"],
  ["/admin/growth/assets/", "内容资产"],
  ["/admin/growth/health/", "站点健康"],
  ["/admin/growth/settings/", "数据设置"]
];
function normalizeAdminPath(value = "") {
  if (!value) return value;
  return value.endsWith("/") ? value : `${value}/`;
}
const CHANGE_NAMES = {
  title: "标题",
  description: "描述",
  content: "正文",
  internal_link: "内链",
  faq: "FAQ",
  technical_fix: "技术修复",
  redirect: "重定向",
  new_article: "新文章",
  tool_cta: "工具 CTA"
};
const REVIEW_NAMES = {
  waiting_review: "等待复查",
  effective: "有效",
  ineffective: "无效",
  observing: "继续观察",
  waiting_data: "等待数据完整",
  insufficient_sample: "样本不足"
};
const ANALYTICS_TABS = [
  ["channels", "渠道"],
  ["attribution", "归因拆解"],
  ["landing-pages", "落地页"],
  ["events", "事件"],
  ["not-found-pages", "404 路径"],
  ["devices", "设备"],
  ["geo", "地区"]
];
function cx(...values) {
  return values.filter(Boolean).join(" ");
}
function formatNumber(value, digits = 0) {
  const number = Number(value || 0);
  return number.toLocaleString("zh-CN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}
function formatPercent(value, signed = false) {
  if (value === null || value === void 0) return "—";
  const number = Number(value || 0) * 100;
  return `${signed && number > 0 ? "+" : ""}${number.toFixed(1)}%`;
}
function statusClass(status) {
  if (["effective", "ok", "success", "eligible", "in_sitemap"].includes(status)) {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";
  }
  if (["ineffective", "critical", "http_404", "request_failed"].includes(status)) {
    return "border-rose-400/30 bg-rose-400/10 text-rose-300";
  }
  return "border-amber-400/30 bg-amber-400/10 text-amber-200";
}
function Shell({ title, description, activePath, actions, children }) {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl space-y-6 pb-24 text-slate-100", children: [
    /* @__PURE__ */ jsxs("header", { className: "rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-2xl md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-sky-400", children: "XBSTACK Growth Console" }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black tracking-tight text-white md:text-4xl", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sm leading-7 text-slate-400", children: description })
        ] }),
        actions ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: actions }) : null
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "mt-7 flex gap-2 overflow-x-auto pb-1", children: NAV_ITEMS.map(([href, label]) => /* @__PURE__ */ jsx(
        "a",
        {
          href,
          className: cx(
            "shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition",
            normalizeAdminPath(activePath) === href ? "border-sky-400/40 bg-sky-400/15 text-sky-200" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
          ),
          children: label
        },
        href
      )) })
    ] }),
    children
  ] });
}
function Button({ children, onClick, disabled, tone = "primary", type = "button" }) {
  const tones = {
    primary: "border-sky-400/30 bg-sky-500 text-white hover:bg-sky-400",
    secondary: "border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/10",
    danger: "border-rose-400/30 bg-rose-500/15 text-rose-200 hover:bg-rose-500/25"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type,
      onClick,
      disabled,
      className: cx(
        "rounded-xl border px-4 py-2.5 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-50",
        tones[tone]
      ),
      children
    }
  );
}
function Panel({ title, description, children, className = "" }) {
  return /* @__PURE__ */ jsxs("section", { className: cx("rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-xl md:p-6", className), children: [
    (title || description) && /* @__PURE__ */ jsxs("header", { className: "mb-5", children: [
      title ? /* @__PURE__ */ jsx("h2", { className: "text-lg font-black text-white", children: title }) : null,
      description ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-6 text-slate-500", children: description }) : null
    ] }),
    children
  ] });
}
function Empty({ message }) {
  return /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-white/10 px-6 py-12 text-center text-sm text-slate-500", children: message });
}
function ErrorBox({ error }) {
  if (!error) return null;
  return /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-rose-400/20 bg-rose-400/10 px-5 py-4 text-sm text-rose-200", children: error });
}
function QualityNotice({ quality }) {
  const warnings = quality?.warnings || [];
  if (!warnings.length) return null;
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-sm text-amber-100", children: [
    /* @__PURE__ */ jsx("strong", { children: "数据覆盖不足，跨周期变化已暂停计算。" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-6 text-amber-200/80", children: warnings.join("；") })
  ] });
}
function DataScope({ data, count, label = "条记录" }) {
  const window2 = data?.window || {};
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3 text-[11px] text-slate-500", children: [
    /* @__PURE__ */ jsxs("span", { children: [
      "统计周期：",
      /* @__PURE__ */ jsxs("b", { className: "text-slate-300", children: [
        window2.current_start || "—",
        " 至 ",
        window2.current_end || "—"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "数据截止：",
      /* @__PURE__ */ jsx("b", { className: "text-slate-300", children: window2.current_end || "—" })
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "当前结果：",
      /* @__PURE__ */ jsxs("b", { className: "text-slate-300", children: [
        formatNumber(count || 0),
        " ",
        label
      ] })
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "变化口径：",
      /* @__PURE__ */ jsx("b", { className: "text-slate-300", children: "与上一等长周期对比" })
    ] })
  ] });
}
function Delta({ value, inverse = false, suffix = "" }) {
  if (value === null || value === void 0 || Number.isNaN(Number(value))) return /* @__PURE__ */ jsx("span", { className: "text-slate-600", children: "—" });
  const numeric = Number(value);
  const positive = inverse ? numeric < 0 : numeric > 0;
  const negative = inverse ? numeric > 0 : numeric < 0;
  return /* @__PURE__ */ jsxs("span", { className: cx("font-bold", positive ? "text-emerald-300" : negative ? "text-rose-300" : "text-slate-400"), children: [
    numeric > 0 ? "+" : "",
    (numeric * 100).toFixed(1),
    "%",
    suffix
  ] });
}
function metricChange(current, previous) {
  const currentValue = Number(current || 0);
  const previousValue = Number(previous || 0);
  if (previousValue === 0) return currentValue === 0 ? 0 : null;
  return (currentValue - previousValue) / Math.abs(previousValue);
}
function RankDelta({ current, previous }) {
  if (!current || !previous) return /* @__PURE__ */ jsx("span", { className: "text-slate-600", children: "—" });
  const change = Number(previous) - Number(current);
  return /* @__PURE__ */ jsx("span", { className: cx("font-bold", change > 0 ? "text-emerald-300" : change < 0 ? "text-rose-300" : "text-slate-400"), children: change > 0 ? `提升 ${change.toFixed(1)}` : change < 0 ? `下降 ${Math.abs(change).toFixed(1)}` : "持平" });
}
function SignalBadge({ children, tone = "neutral" }) {
  const tones = {
    good: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
    warning: "border-amber-400/25 bg-amber-400/10 text-amber-200",
    danger: "border-rose-400/25 bg-rose-400/10 text-rose-200",
    neutral: "border-white/10 bg-white/[0.04] text-slate-300"
  };
  return /* @__PURE__ */ jsx("span", { className: cx("inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black", tones[tone] || tones.neutral), children });
}
function pageOperation(item) {
  const types = item.opportunity_types || [];
  if (types.includes("page_not_found")) return { label: "技术异常", tone: "danger", action: "优先修复 404、跳转或失效链接，再观察流量恢复。" };
  if (types.includes("content_decay")) return { label: "内容衰退", tone: "danger", action: "更新正文、补充新信息并重做内链入口。" };
  if (types.includes("language_mismatch")) return { label: "语言错配", tone: "danger", action: "强化对应语言页面的 TDK、hreflang、语言切换和同语言 Hub 内链。" };
  if (types.includes("ctr_improvement")) return { label: "高展示低点击", tone: "warning", action: "优先调整标题、摘要和搜索意图匹配。" };
  if (types.includes("ranking_improvement")) return { label: "接近首页", tone: "warning", action: "补强内容深度、FAQ、内链和主题权威性。" };
  if (types.includes("keyword_cannibalization")) return { label: "关键词冲突", tone: "danger", action: "明确主承接页，合并重复内容或调整内部链接。" };
  if (Number(item.changes?.sessions || 0) > 0.25) return { label: "流量增长", tone: "good", action: "保持更新节奏，并从相关页面增加内链放大增长。" };
  return { label: "稳定观察", tone: "neutral", action: "暂无紧急动作，继续观察下一周期变化。" };
}
function queryOperation(item) {
  const impressions = Number(item.current_impressions || 0);
  const clicks = Number(item.current_clicks || 0);
  const position = Number(item.current_position || 0);
  const change = item.impressions_change;
  if (Number(item.page_count || 0) >= 2) return { label: "多页竞争", tone: "danger", action: "确定一个主承接页，减少同词页面互相稀释。" };
  if (impressions >= 20 && clicks === 0) return { label: "有展示无点击", tone: "danger", action: "检查搜索意图，重写标题和描述提升点击率。" };
  if (position >= 8 && position <= 20) return { label: "冲击首页", tone: "warning", action: "围绕该词补内容深度、FAQ和高相关内链。" };
  if (change !== null && Number(change) < -0.3) return { label: "需求或排名下降", tone: "danger", action: "检查排名、内容新鲜度和竞争页面变化。" };
  if (change !== null && Number(change) > 0.3) return { label: "增长查询词", tone: "good", action: "扩大相关内容集群并强化主页面承接。" };
  return { label: "持续观察", tone: "neutral", action: "保持现有承接关系，等待更多样本。" };
}
function analyticsOperation(tab, item, total) {
  const primaryMetric = ["events", "not-found-pages"].includes(tab) ? "event_count" : "sessions";
  const current = Number(item[`current_${primaryMetric}`] || 0);
  const share = total > 0 ? current / total : 0;
  const change = item.changes?.[primaryMetric];
  if (tab === "channels" && item.channel_group === "Direct" && share > 0.6 && Number(item.current_engagement_rate || 0) < 0.1) return { label: "疑似低质量流量", tone: "danger", action: "结合地区、设备和 (not set) 落地页排查自动化访问；这部分不能作为真实增长。", share, change };
  if (tab === "channels" && item.channel_group === "Direct" && share > 0.6) return { label: "归因异常", tone: "danger", action: "切换到归因拆解，定位未带 UTM 的落地页和来源组合。", share, change };
  if (tab === "channels" && item.channel_group === "Unassigned" && share > 0.15 && Number(item.current_engagement_rate || 0) < 0.1) return { label: "无页面上下文", tone: "danger", action: "优先检查 (not set) 落地页、错误 UTM 和自动化流量，不把该项计入有效增长。", share, change };
  if (tab === "channels" && item.channel_group === "Unassigned" && share > 0.15) return { label: "未归因偏高", tone: "danger", action: "检查渠道命名和 GA4 默认渠道分组规则。", share, change };
  if (tab === "attribution" && item.attribution_state === "direct_unattributed") return { label: "Direct 未归因", tone: "danger", action: "检查该落地页的站外分发链接，补 utm_source、utm_medium、utm_campaign；不要根据 Direct 反推具体平台。", share, change };
  if (tab === "attribution" && item.attribution_state === "utm_campaign") return { label: "Campaign 可追踪", tone: "good", action: "保留统一 UTM 命名，并对比该 Campaign 的参与率和关键事件。", share, change };
  if (tab === "attribution") return { label: "仅来源媒介", tone: "warning", action: "已有 source/medium，但没有 Campaign；为正式分发补充统一 utm_campaign。", share, change };
  if (tab === "landing-pages" && Number(item.current_sessions || 0) >= 10 && Number(item.current_engagement_rate || 0) < 0.3) return { label: "落地质量偏低", tone: "warning", action: "优化首屏、内容匹配和下一步 CTA。", share, change };
  if (tab === "events" && String(item.event_name || "").includes("page_not_found")) return { label: "404 异常", tone: "danger", action: "切换到 404 路径报表，按缺失路径与来源逐条修复。", share, change };
  if (tab === "not-found-pages") return { label: "真实 404 访问", tone: "danger", action: item.page_referrer ? "检查来源页面；有明确替代页时配置 301，否则修正来源链接。" : "无来源信息时检查旧外链、书签、爬虫和手工输入路径。", share, change };
  if (tab === "events" && Number(item.current_key_events || 0) > 0) return { label: "核心转化事件", tone: "good", action: "继续追踪来源、落地页和转化路径。", share, change };
  if (change !== null && Number(change) < -0.3) return { label: "明显下降", tone: "danger", action: "对比来源、页面或事件配置，确认是否为真实下滑。", share, change };
  if (change !== null && Number(change) > 0.3) return { label: "明显增长", tone: "good", action: "分析增长来源并复制到相近页面或渠道。", share, change };
  if (share >= 0.35) return { label: "主要贡献项", tone: "good", action: "重点维护，避免单一来源或单一页面风险。", share, change };
  return { label: "正常观察", tone: "neutral", action: "保持监测，等待下一个完整周期。", share, change };
}
function healthOperation(item) {
  if (item.status === "http_404" || item.status === "request_failed") return { label: "确认异常", tone: "danger", action: "修复目标页面、增加 301 或移除失效内链。" };
  if (item.robots_txt_state === "blocked") return { label: "被 robots 阻止", tone: "warning", action: "确认是否需要收录；需要收录时调整 robots 规则。" };
  if (item.indexing_state === "eligible") return { label: "具备索引资格", tone: "good", action: "保持 Sitemap、内链和页面可访问性。" };
  return { label: "待核验", tone: "neutral", action: "执行在线检查并确认 HTTP 状态。" };
}
function PeriodControl({ days, setDays }) {
  return /* @__PURE__ */ jsx("div", { className: "inline-flex rounded-xl border border-white/10 bg-black/20 p-1", children: [7, 28, 90].map((value) => /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setDays(value),
      className: cx(
        "rounded-lg px-3 py-2 text-xs font-bold transition",
        days === value ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"
      ),
      children: [
        value,
        " 天"
      ]
    },
    value
  )) });
}
function DetailDrawer({ title, onClose, children }) {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-sm", onClick: onClose, children: /* @__PURE__ */ jsxs(
    "aside",
    {
      className: "h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-slate-950 p-6 shadow-2xl md:p-8",
      onClick: (event) => event.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "break-all text-xl font-black text-white", children: title }),
          /* @__PURE__ */ jsx(Button, { onClick: onClose, tone: "secondary", children: "关闭" })
        ] }),
        children
      ]
    }
  ) });
}
function SeoConsole() {
  const [tab, setTab] = useState("pages");
  const [days, setDays] = useState(28);
  const [search, setSearch] = useState("");
  const [queryFilter, setQueryFilter] = useState("");
  const [sortBy, setSortBy] = useState("impressions");
  const [data, setData] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async (force = false) => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ days: String(days), limit: "500" });
      if (tab === "pages" && search.trim()) params.set("search", search.trim());
      if (tab === "queries" && queryFilter) params.set("filter", queryFilter);
      if (tab === "queries") params.set("sort_by", sortBy);
      const result = await growthCachedGet(`/api/admin/growth/${tab}?${params.toString()}`, { force, tags: ["seo"], ttl: 18e4 });
      setData(result.data);
    } catch (requestError) {
      setError(requestError.message || "SEO 数据加载失败");
    } finally {
      setLoading(false);
    }
  }, [days, queryFilter, search, sortBy, tab]);
  useEffect(() => {
    load();
  }, [load]);
  useGrowthJobRefresh(["seo"], load);
  const openDetail = async (item) => {
    setDetail({ loading: true, title: tab === "pages" ? item.page_url : item.search_query });
    try {
      const endpoint = tab === "pages" ? "pages/detail" : "queries/detail";
      const key = tab === "pages" ? "url" : "query";
      const params = new URLSearchParams({ [key]: tab === "pages" ? item.page_url : item.search_query, days: String(days) });
      const result = await growthCachedGet(`/api/admin/growth/${endpoint}?${params.toString()}`, { tags: ["seo"], ttl: 3e5 });
      setDetail({ loading: false, title: tab === "pages" ? item.page_url : item.search_query, data: result.data });
    } catch (requestError) {
      setDetail({ loading: false, title: "详情", error: requestError.message || "详情加载失败" });
    }
  };
  const items = data?.items || [];
  return /* @__PURE__ */ jsxs(
    Shell,
    {
      title: "SEO 诊断",
      description: "按页面和查询词合并 GSC、GA4、内容资产、机会标签与优化历史，统一对比当前周期和上一周期。",
      activePath: "/admin/growth/seo",
      actions: /* @__PURE__ */ jsx(PeriodControl, { days, setDays }),
      children: [
        /* @__PURE__ */ jsx(Panel, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [["pages", "页面"], ["queries", "查询词"]].map(([value, label]) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setTab(value),
              className: cx("rounded-xl px-5 py-3 text-sm font-black", tab === value ? "bg-sky-500 text-white" : "bg-white/5 text-slate-400"),
              children: label
            },
            value
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
            tab === "pages" ? /* @__PURE__ */ jsx(
              "input",
              {
                value: search,
                onChange: (event) => setSearch(event.target.value),
                onKeyDown: (event) => event.key === "Enter" && load(),
                placeholder: "搜索 URL 或标题",
                className: "min-w-64 rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-sky-400/50"
              }
            ) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("select", { value: queryFilter, onChange: (event) => setQueryFilter(event.target.value), className: "rounded-xl border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-slate-200", children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "全部查询词" }),
                /* @__PURE__ */ jsx("option", { value: "zero_click", children: "零点击" }),
                /* @__PURE__ */ jsx("option", { value: "top10", children: "排名 1—10" }),
                /* @__PURE__ */ jsx("option", { value: "near_page_one", children: "排名 8—20" }),
                /* @__PURE__ */ jsx("option", { value: "growing", children: "增长" }),
                /* @__PURE__ */ jsx("option", { value: "declining", children: "下降" })
              ] }),
              /* @__PURE__ */ jsxs("select", { value: sortBy, onChange: (event) => setSortBy(event.target.value), className: "rounded-xl border border-white/10 bg-slate-950 px-4 py-2.5 text-sm text-slate-200", children: [
                /* @__PURE__ */ jsx("option", { value: "impressions", children: "按展示" }),
                /* @__PURE__ */ jsx("option", { value: "clicks", children: "按点击" }),
                /* @__PURE__ */ jsx("option", { value: "position", children: "按排名" }),
                /* @__PURE__ */ jsx("option", { value: "change", children: "按变化" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { onClick: load, disabled: loading, children: "刷新" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(ErrorBox, { error }),
        /* @__PURE__ */ jsx(QualityNotice, { quality: data?.data_quality }),
        /* @__PURE__ */ jsxs(
          Panel,
          {
            title: tab === "pages" ? `页面运营诊断 · ${items.length}` : `查询词运营分析 · ${items.length}`,
            description: "表格按运营动作组织：先看当前值和周期变化，再看系统判断与建议动作。数据覆盖不足时不会展示误导性涨跌。",
            children: [
              /* @__PURE__ */ jsx(DataScope, { data, count: items.length, label: tab === "pages" ? "个页面" : "个查询词" }),
              loading ? /* @__PURE__ */ jsx(Empty, { message: "正在计算当前周期和上一周期……" }) : items.length === 0 ? /* @__PURE__ */ jsx(Empty, { message: "暂无可展示的真实同步数据。" }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[1380px] text-left text-xs", children: [
                /* @__PURE__ */ jsx("thead", { className: "text-slate-500", children: tab === "pages" ? /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10", children: [
                  /* @__PURE__ */ jsx("th", { className: "pb-3", children: "页面" }),
                  /* @__PURE__ */ jsx("th", { children: "点击 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "展示 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "CTR / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "排名 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "Sessions / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "运营判断" }),
                  /* @__PURE__ */ jsx("th", { children: "建议动作" }),
                  /* @__PURE__ */ jsx("th", {})
                ] }) : /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10", children: [
                  /* @__PURE__ */ jsx("th", { className: "pb-3", children: "查询词" }),
                  /* @__PURE__ */ jsx("th", { children: "点击 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "展示 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "CTR / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "排名 / 变化" }),
                  /* @__PURE__ */ jsx("th", { children: "承接页" }),
                  /* @__PURE__ */ jsx("th", { children: "运营判断" }),
                  /* @__PURE__ */ jsx("th", { children: "建议动作" }),
                  /* @__PURE__ */ jsx("th", {})
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: items.map((item) => {
                  if (tab === "pages") {
                    const operation2 = pageOperation(item);
                    return /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/[0.06] align-top hover:bg-white/[0.02]", children: [
                      /* @__PURE__ */ jsxs("td", { className: "max-w-sm py-4 pr-5", children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: item.title || item.page_url }),
                        /* @__PURE__ */ jsx("div", { className: "mt-1 break-all text-slate-500", children: item.page_url })
                      ] }),
                      /* @__PURE__ */ jsxs("td", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current?.clicks) }),
                        /* @__PURE__ */ jsx(Delta, { value: item.changes?.clicks })
                      ] }),
                      /* @__PURE__ */ jsxs("td", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current?.impressions) }),
                        /* @__PURE__ */ jsx(Delta, { value: item.changes?.impressions })
                      ] }),
                      /* @__PURE__ */ jsxs("td", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatPercent(item.current?.ctr) }),
                        /* @__PURE__ */ jsx(Delta, { value: item.changes?.ctr })
                      ] }),
                      /* @__PURE__ */ jsxs("td", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current?.position, 1) }),
                        /* @__PURE__ */ jsx(RankDelta, { current: item.current?.position, previous: item.previous?.position })
                      ] }),
                      /* @__PURE__ */ jsxs("td", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current?.sessions) }),
                        /* @__PURE__ */ jsx(Delta, { value: item.changes?.sessions })
                      ] }),
                      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(SignalBadge, { tone: operation2.tone, children: operation2.label }) }),
                      /* @__PURE__ */ jsx("td", { className: "max-w-xs leading-6 text-slate-400", children: operation2.action }),
                      /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsx(Button, { onClick: () => openDetail(item), tone: "secondary", children: "详情" }) })
                    ] }, item.page_url);
                  }
                  const operation = queryOperation(item);
                  return /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/[0.06] align-top hover:bg-white/[0.02]", children: [
                    /* @__PURE__ */ jsx("td", { className: "max-w-sm py-4 pr-5 font-bold text-white", children: item.search_query }),
                    /* @__PURE__ */ jsxs("td", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current_clicks) }),
                      /* @__PURE__ */ jsx(Delta, { value: metricChange(item.current_clicks, item.previous_clicks) })
                    ] }),
                    /* @__PURE__ */ jsxs("td", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current_impressions) }),
                      /* @__PURE__ */ jsx(Delta, { value: item.impressions_change })
                    ] }),
                    /* @__PURE__ */ jsxs("td", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatPercent(item.current_ctr) }),
                      /* @__PURE__ */ jsx(Delta, { value: metricChange(item.current_ctr, item.previous_ctr) })
                    ] }),
                    /* @__PURE__ */ jsxs("td", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.current_position, 1) }),
                      /* @__PURE__ */ jsx(RankDelta, { current: item.current_position, previous: item.previous_position })
                    ] }),
                    /* @__PURE__ */ jsxs("td", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatNumber(item.page_count) }),
                      /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-slate-500", children: Number(item.page_count || 0) > 1 ? "存在多页竞争" : "单页承接" })
                    ] }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(SignalBadge, { tone: operation.tone, children: operation.label }) }),
                    /* @__PURE__ */ jsx("td", { className: "max-w-xs leading-6 text-slate-400", children: operation.action }),
                    /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(Button, { onClick: () => openDetail(item), tone: "secondary", children: "详情" }) })
                  ] }, item.search_query);
                }) })
              ] }) })
            ]
          }
        ),
        detail ? /* @__PURE__ */ jsx(DetailDrawer, { title: detail.title, onClose: () => setDetail(null), children: detail.loading ? /* @__PURE__ */ jsx(Empty, { message: "正在加载详情……" }) : detail.error ? /* @__PURE__ */ jsx(ErrorBox, { error: detail.error }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(Panel, { title: "趋势数据", children: /* @__PURE__ */ jsx("pre", { className: "max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-400", children: JSON.stringify(detail.data?.trends || [], null, 2) }) }),
          /* @__PURE__ */ jsx(Panel, { title: tab === "pages" ? "关联查询词" : "承接页面", children: /* @__PURE__ */ jsx("pre", { className: "max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-400", children: JSON.stringify(tab === "pages" ? detail.data?.queries : detail.data?.pages, null, 2) }) }),
          tab === "pages" ? /* @__PURE__ */ jsx(Panel, { title: "优化历史", children: /* @__PURE__ */ jsx("pre", { className: "max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-400", children: JSON.stringify(detail.data?.changes || [], null, 2) }) }) : null
        ] }) }) : null
      ]
    }
  );
}
function AnalyticsConsole() {
  const [tab, setTab] = useState("channels");
  const [days, setDays] = useState(28);
  const [data, setData] = useState(null);
  const [diagnostics, setDiagnostics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async (force = false) => {
    setLoading(true);
    setError("");
    try {
      const [report, diagnosticResult] = await Promise.all([
        growthCachedGet(`/api/admin/growth/${tab}?days=${days}&limit=500`, { force, tags: ["analytics"], ttl: 18e4 }),
        growthCachedGet(`/api/admin/growth/diagnostics?days=${days}`, { force, tags: ["analytics"], ttl: 18e4 })
      ]);
      setData(report.data);
      setDiagnostics(diagnosticResult.data?.items || []);
    } catch (requestError) {
      setError(requestError.message || "GA4 报表加载失败");
    } finally {
      setLoading(false);
    }
  }, [days, tab]);
  useEffect(() => {
    load();
  }, [load]);
  useGrowthJobRefresh(["analytics"], load);
  const items = data?.items || [];
  const trafficQuality = data?.diagnostics || {};
  const primaryMetric = ["events", "not-found-pages"].includes(tab) ? "event_count" : "sessions";
  const totalPrimary = items.reduce((sum, item) => sum + Number(item[`current_${primaryMetric}`] || 0), 0);
  const columns = useMemo(() => {
    const definitions = {
      channels: [["channel_group", "渠道"], ["source", "来源"], ["medium", "媒介"], ["current_sessions", "Sessions"], ["current_active_users", "用户"], ["current_new_users", "新用户"], ["current_engagement_rate", "参与率"], ["current_key_events", "关键事件"]],
      attribution: [["landing_page", "落地页"], ["channel_group", "渠道"], ["source", "来源"], ["medium", "媒介"], ["campaign", "Campaign"], ["current_sessions", "Sessions"], ["current_engagement_rate", "参与率"], ["current_key_events", "关键事件"]],
      "landing-pages": [["landing_page", "落地页"], ["current_sessions", "Sessions"], ["current_engaged_sessions", "参与会话"], ["current_engagement_rate", "参与率"], ["current_key_events", "关键事件"], ["gsc_clicks", "GSC 点击"], ["gsc_impressions", "GSC 展示"]],
      events: [["event_name", "事件"], ["current_event_count", "次数"], ["current_users", "用户"], ["current_key_events", "关键事件"]],
      "not-found-pages": [["page_path", "缺失路径"], ["page_referrer", "来源页面"], ["current_event_count", "404 次数"], ["current_users", "用户"]],
      devices: [["device_category", "设备"], ["current_sessions", "Sessions"]],
      geo: [["country", "国家"], ["city", "城市"], ["hostname", "主机"], ["current_sessions", "Sessions"]]
    };
    return definitions[tab] || [];
  }, [tab]);
  return /* @__PURE__ */ jsxs(Shell, { title: "GA4 行为诊断", description: "查看渠道、归因拆解、落地页、事件、设备与地区，并识别 Direct、Unassigned、未带 Campaign 的分发、404 和异常主机流量。", activePath: "/admin/growth/analytics", actions: /* @__PURE__ */ jsx(PeriodControl, { days, setDays }), children: [
    diagnostics.length ? /* @__PURE__ */ jsx("div", { className: "grid gap-3 md:grid-cols-2", children: diagnostics.map((item, index) => /* @__PURE__ */ jsxs("div", { className: cx("rounded-2xl border p-4 text-sm", statusClass(item.severity)), children: [
      /* @__PURE__ */ jsx("div", { className: "font-black", children: item.type }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 leading-6", children: item.message })
    ] }, `${item.type}-${index}`)) }) : null,
    /* @__PURE__ */ jsx(Panel, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
      ANALYTICS_TABS.map(([value, label]) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(value), className: cx("rounded-xl px-4 py-2.5 text-xs font-black", tab === value ? "bg-violet-500 text-white" : "bg-white/5 text-slate-400"), children: label }, value)),
      /* @__PURE__ */ jsx(Button, { onClick: () => load(true), disabled: loading, tone: "secondary", children: loading ? "刷新中…" : "刷新" })
    ] }) }),
    /* @__PURE__ */ jsx(ErrorBox, { error }),
    /* @__PURE__ */ jsx(QualityNotice, { quality: data?.data_quality }),
    tab === "channels" && trafficQuality.raw_sessions !== void 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
        ["GA4 原始 Sessions", trafficQuality.raw_sessions, "保留原始统计，不直接作为真实读者数"],
        ["有效流量保守下限", trafficQuality.qualified_sessions_lower_bound, `占原始流量 ${formatPercent(trafficQuality.qualified_share_lower_bound)}`],
        ["参与会话", trafficQuality.engaged_sessions, "GA4 engaged sessions"],
        ["待排查会话", trafficQuality.suspected_low_quality_sessions, "可能包含自动化、扫描或归因缺失"]
      ].map(([label, value, note]) => /* @__PURE__ */ jsxs(Panel, { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500", children: label }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 text-3xl font-black text-white", children: formatNumber(value) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-[11px] leading-5 text-slate-500", children: note })
      ] }, label)) }),
      /* @__PURE__ */ jsxs("div", { className: cx(
        "rounded-2xl border px-5 py-4 text-sm",
        trafficQuality.traffic_quality_state === "critical" ? "border-rose-400/25 bg-rose-400/10 text-rose-100" : trafficQuality.traffic_quality_state === "warning" ? "border-amber-400/25 bg-amber-400/10 text-amber-100" : "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
      ), children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          "流量质量口径：",
          trafficQuality.traffic_quality_state === "healthy" ? "正常" : trafficQuality.traffic_quality_state === "warning" ? "需要排查" : "严重失真"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-6 opacity-80", children: trafficQuality.quality_definition })
      ] })
    ] }) : null,
    tab === "attribution" && data?.custom_dimensions?.note ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-sm text-amber-100", children: [
      /* @__PURE__ */ jsx("strong", { children: "GA4 自定义归因维度尚未可查询。" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-6 text-amber-200/80", children: data.custom_dimensions.note }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-amber-200/70", children: [
        "需要注册：",
        (data.custom_dimensions.required_event_scoped_dimensions || []).join("、")
      ] })
    ] }) : null,
    /* @__PURE__ */ jsxs(
      Panel,
      {
        title: `${ANALYTICS_TABS.find(([value]) => value === tab)?.[1] || ""}运营报表 · ${items.length}`,
        description: "除原始 GA4 指标外，增加周期变化、贡献占比、异常判断和下一步运营动作。",
        children: [
          /* @__PURE__ */ jsx(DataScope, { data, count: items.length, label: "条维度记录" }),
          loading ? /* @__PURE__ */ jsx(Empty, { message: "正在读取 GA4 同步数据……" }) : items.length === 0 ? /* @__PURE__ */ jsx(Empty, { message: "该报表暂无真实同步数据。" }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[1380px] text-left text-xs", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-slate-500", children: [
              columns.map(([key, label]) => /* @__PURE__ */ jsx("th", { className: "pb-3 pr-5", children: label }, key)),
              /* @__PURE__ */ jsx("th", { children: "周期变化" }),
              /* @__PURE__ */ jsx("th", { children: "贡献占比" }),
              /* @__PURE__ */ jsx("th", { children: "运营判断" }),
              /* @__PURE__ */ jsx("th", { children: "建议动作" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: items.map((item, index) => {
              const operation = analyticsOperation(tab, item, totalPrimary);
              return /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/[0.06] align-top hover:bg-white/[0.02]", children: [
                columns.map(([key]) => /* @__PURE__ */ jsx("td", { className: "max-w-sm py-4 pr-5 break-all text-slate-300", children: key.includes("rate") ? formatPercent(item[key]) : typeof item[key] === "number" ? formatNumber(item[key]) : String(item[key] ?? "—") }, key)),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(Delta, { value: operation.change }) }),
                /* @__PURE__ */ jsxs("td", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: formatPercent(operation.share) }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-slate-500", children: "当前报表内占比" })
                ] }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(SignalBadge, { tone: operation.tone, children: operation.label }) }),
                /* @__PURE__ */ jsx("td", { className: "max-w-xs leading-6 text-slate-400", children: operation.action })
              ] }, `${tab}-${index}`);
            }) })
          ] }) })
        ]
      }
    )
  ] });
}
function ChangesConsole() {
  const initialForm = { page_url: "", change_type: "content", summary: "", reason: "", related_query: "", review_at: "" };
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [reviewingDue, setReviewingDue] = useState("");
  const [error, setError] = useState("");
  const load = useCallback(async (force = false) => {
    setLoading(true);
    try {
      const result = await growthCachedGet("/api/admin/growth/changes?limit=500", { force, tags: ["changes"], ttl: 12e4 });
      setItems(result.data?.items || []);
      setError("");
    } catch (requestError) {
      setError(requestError.message || "优化记录加载失败");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  useGrowthJobRefresh(["changes"], load);
  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      await adminApi.post("/api/admin/growth/changes", { ...form, review_at: form.review_at || null });
      invalidateGrowthCache(["changes"]);
      setForm(initialForm);
      await load(true);
      window.showToast?.("优化记录已创建，并保存修改前数据", "success");
    } catch (requestError) {
      setError(requestError.message || "创建失败");
    } finally {
      setSaving(false);
    }
  };
  const review = async (id) => {
    try {
      await adminApi.post(`/api/admin/growth/changes/${id}/review`);
      invalidateGrowthCache(["changes"]);
      await load(true);
      window.showToast?.("复查完成", "success");
    } catch (requestError) {
      setError(requestError.message || "复查失败");
    }
  };
  const reviewDue = async () => {
    setReviewingDue("正在提交批量复查…");
    try {
      await submitGrowthJob(
        "review_due",
        { limit: 100 },
        {
          dedupeKey: "manual-review-due",
          label: "批量复查到期优化",
          sourcePath: "/admin/growth/changes/",
          cacheTags: ["changes", "tasks", "overview"],
          successMessage: "到期优化复查完成，复查结果已自动刷新。",
          onProgress: (job) => setReviewingDue(jobProgressText(job))
        }
      );
      await load(true);
    } catch (requestError) {
      setError(requestError.message || "批量复查失败");
    } finally {
      setReviewingDue("");
    }
  };
  return /* @__PURE__ */ jsxs(Shell, { title: "优化记录与复查", description: "记录每次页面修改，自动保存修改前数据；到期后计算展示、点击、CTR、排名、Sessions 与事件变化。", activePath: "/admin/growth/changes", actions: /* @__PURE__ */ jsx(Button, { onClick: reviewDue, disabled: Boolean(reviewingDue), children: reviewingDue || "复查所有到期记录" }), children: [
    /* @__PURE__ */ jsx(ErrorBox, { error }),
    /* @__PURE__ */ jsx(Panel, { title: "登记一次优化", description: "页面 URL 必填。未填写复查日期时，系统默认 14 天后复查。", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx("input", { required: true, value: form.page_url, onChange: (event) => setForm({ ...form, page_url: event.target.value }), placeholder: "页面 URL，例如 /ai/langgraph/", className: "rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50 md:col-span-2" }),
      /* @__PURE__ */ jsx("select", { value: form.change_type, onChange: (event) => setForm({ ...form, change_type: event.target.value }), className: "rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white", children: Object.entries(CHANGE_NAMES).map(([value, label]) => /* @__PURE__ */ jsx("option", { value, children: label }, value)) }),
      /* @__PURE__ */ jsx("input", { type: "date", value: form.review_at, onChange: (event) => setForm({ ...form, review_at: event.target.value }), className: "rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white" }),
      /* @__PURE__ */ jsx("input", { value: form.related_query, onChange: (event) => setForm({ ...form, related_query: event.target.value }), placeholder: "关联查询词", className: "rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white" }),
      /* @__PURE__ */ jsx("input", { value: form.summary, onChange: (event) => setForm({ ...form, summary: event.target.value }), placeholder: "修改内容说明", className: "rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white" }),
      /* @__PURE__ */ jsx("textarea", { value: form.reason, onChange: (event) => setForm({ ...form, reason: event.target.value }), placeholder: "修改原因", className: "min-h-28 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white md:col-span-2" }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: saving, children: saving ? "保存中…" : "保存优化记录" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Panel, { title: `优化历史 · ${items.length}`, children: loading ? /* @__PURE__ */ jsx(Empty, { message: "正在加载……" }) : items.length === 0 ? /* @__PURE__ */ jsx(Empty, { message: "还没有优化记录。任务完成后也会自动生成记录。" }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((item) => /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-white/10 bg-black/20 p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-black text-white", children: CHANGE_NAMES[item.change_type] || item.change_type }),
            /* @__PURE__ */ jsx("span", { className: cx("rounded-full border px-2 py-1 text-[10px]", statusClass(item.review_status)), children: REVIEW_NAMES[item.review_status] || item.review_status })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 break-all text-xs text-slate-400", children: item.page_url }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-slate-300", children: item.summary || item.reason || "未填写说明" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 text-[11px] text-slate-500", children: [
            "创建：",
            item.created_at || "—",
            " · 复查：",
            item.review_at || "—"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { onClick: () => review(item.id), tone: "secondary", children: "立即复查" })
      ] }),
      item.result_json && Object.keys(item.result_json).length ? /* @__PURE__ */ jsx("pre", { className: "mt-4 max-h-64 overflow-auto rounded-xl bg-black/30 p-4 text-[11px] leading-5 text-slate-500", children: JSON.stringify(item.result_json, null, 2) }) : null
    ] }, item.id)) }) })
  ] });
}
function HealthConsole() {
  const [health, setHealth] = useState(null);
  const [indexItems, setIndexItems] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");
  const load = useCallback(async (force = false) => {
    setLoading(true);
    try {
      const [healthResult, indexResult, linkResult] = await Promise.all([
        growthCachedGet("/api/admin/growth/site-health?limit=90", { force, tags: ["health"], ttl: 3e5 }),
        growthCachedGet("/api/admin/growth/index-status?limit=1000", { force, tags: ["health"], ttl: 3e5 }),
        growthCachedGet("/api/admin/growth/internal-links?limit=1000", { force, tags: ["health"], ttl: 3e5 })
      ]);
      setHealth(healthResult.data?.latest || null);
      setIndexItems(indexResult.data?.items || []);
      setLinks(linkResult.data?.items || []);
      setError("");
    } catch (requestError) {
      setError(requestError.message || "站点健康数据加载失败");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  useGrowthJobRefresh(["health"], load);
  const scan = async (live) => {
    setScanning(live ? "正在提交在线检查…" : "正在提交本地扫描…");
    try {
      await submitGrowthJob(
        "scan_site",
        { live, max_live_pages: 100 },
        {
          dedupeKey: live ? "manual-live-site-scan" : "manual-local-site-scan",
          timeout: 15 * 60 * 1e3,
          label: live ? "在线检查站点健康" : "扫描本地站点资产",
          sourcePath: "/admin/growth/health/",
          cacheTags: ["health", "assets", "overview"],
          successMessage: live ? "在线站点检查完成，健康数据已自动刷新。" : "本地站点扫描完成，健康数据已自动刷新。",
          onProgress: (job) => setScanning(jobProgressText(job))
        }
      );
      await load(true);
    } catch (requestError) {
      setError(requestError.message || "扫描失败");
    } finally {
      setScanning("");
    }
  };
  const details = health?.details_json || {};
  return /* @__PURE__ */ jsxs(Shell, { title: "站点健康", description: "自动扫描 Astro 内容资产、内部链接、Sitemap、robots.txt、本地索引资格与 GA4 404 事件。这里不代表 Google 实际收录状态。", activePath: "/admin/growth/health", actions: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => scan(false), disabled: Boolean(scanning), tone: "secondary", children: scanning || "本地扫描" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => scan(true), disabled: Boolean(scanning), children: scanning || "在线检查" })
  ] }), children: [
    /* @__PURE__ */ jsx(ErrorBox, { error }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [["页面", health?.pages], ["HTTP 404", health?.errors_404], ["Sitemap", health?.sitemap_status], ["robots.txt", health?.robots_status]].map(([label, value]) => /* @__PURE__ */ jsxs(Panel, { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500", children: label }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 text-3xl font-black text-white", children: loading ? "…" : value ?? "—" })
    ] }, label)) }),
    /* @__PURE__ */ jsx(Panel, { title: "检查摘要", children: /* @__PURE__ */ jsx("pre", { className: "max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-400", children: JSON.stringify(details, null, 2) }) }),
    /* @__PURE__ */ jsx(Panel, { title: `本地索引资格运营表 · ${indexItems.length}`, description: "按是否需要处理排序理解：HTTP 异常和 robots 阻止优先于普通索引资格状态。这里仍不等同于 Google 实际收录。", children: indexItems.length === 0 ? /* @__PURE__ */ jsx(Empty, { message: "执行一次站点扫描后显示。" }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[1200px] text-left text-xs", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-slate-500", children: [
        /* @__PURE__ */ jsx("th", { className: "pb-3", children: "URL" }),
        /* @__PURE__ */ jsx("th", { children: "HTTP / 本地状态" }),
        /* @__PURE__ */ jsx("th", { children: "Sitemap" }),
        /* @__PURE__ */ jsx("th", { children: "robots" }),
        /* @__PURE__ */ jsx("th", { children: "索引资格" }),
        /* @__PURE__ */ jsx("th", { children: "运营判断" }),
        /* @__PURE__ */ jsx("th", { children: "建议动作" }),
        /* @__PURE__ */ jsx("th", { children: "检查说明" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: indexItems.map((item) => {
        const operation = healthOperation(item);
        return /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/[0.06] align-top hover:bg-white/[0.02]", children: [
          /* @__PURE__ */ jsx("td", { className: "max-w-md break-all py-4 pr-4 text-white", children: item.url }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: cx("rounded-full border px-2 py-1", statusClass(item.status)), children: item.status }) }),
          /* @__PURE__ */ jsx("td", { children: item.coverage_state || "—" }),
          /* @__PURE__ */ jsx("td", { children: item.robots_txt_state || "—" }),
          /* @__PURE__ */ jsx("td", { children: item.indexing_state || "—" }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(SignalBadge, { tone: operation.tone, children: operation.label }) }),
          /* @__PURE__ */ jsx("td", { className: "max-w-xs leading-6 text-slate-400", children: operation.action }),
          /* @__PURE__ */ jsx("td", { className: "max-w-sm leading-6 text-slate-500", children: item.reason || "—" })
        ] }, item.id);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Panel, { title: `内部链接 · ${links.length}`, children: /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
      "已扫描 ",
      links.length,
      " 条站内链接。无法在内容资产或 Sitemap 中找到的目标会写入健康检查摘要。"
    ] }) })
  ] });
}
function GrowthIntelligenceConsole({ mode = "seo" }) {
  if (mode === "analytics") return /* @__PURE__ */ jsx(AnalyticsConsole, {});
  if (mode === "changes") return /* @__PURE__ */ jsx(ChangesConsole, {});
  if (mode === "health") return /* @__PURE__ */ jsx(HealthConsole, {});
  return /* @__PURE__ */ jsx(SeoConsole, {});
}

export { GrowthIntelligenceConsole as G };
