import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as renderComponent, y as Fragment } from './astro/server_CuadZCs7.mjs';
import 'piccolore';
import { f as formatDate, r as readingTime, $ as $$LiquidGlassLess } from './readingTime_BMg8wGjh.mjs';
import { $ as $$Image } from './_astro_assets_cm5UI8r_.mjs';
import 'clsx';
import { r as resolveEntryUrl } from './content-route_Id4Hifd6.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://www.xbstack.com");
const $$PlaceholderImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaceholderImage;
  const { title, className = "" } = Astro2.props;
  const getHash = (str) => {
    let hash2 = 0;
    for (let i = 0; i < str.length; i++) {
      hash2 = (hash2 << 5) - hash2 + str.charCodeAt(i);
      hash2 |= 0;
    }
    return Math.abs(hash2);
  };
  const hash = getHash(title || "XBSTACK");
  const keywords = ["technology", "minimal", "abstract", "nature", "workspace", "code", "architecture", "mountain", "forest", "city"];
  const keyword = keywords[hash % keywords.length];
  const randomImageUrl = `https://loremflickr.com/600/800/${keyword}?lock=${hash}`;
  const normalizedTitle = (title || "").trim();
  const firstChar = normalizedTitle.charAt(0).toUpperCase();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative w-full h-full overflow-hidden flex items-center justify-center bg-slate-200 dark:bg-slate-800 ${className}`, "class")}>  <img${addAttribute(randomImageUrl, "src")}${addAttribute(title, "alt")} class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0" loading="lazy" onerror="this.style.display='none'"> <div class="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>  <div class="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500"> <span class="text-4xl md:text-5xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"> ${firstChar} </span> </div>  <div class="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div> </div>`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/PlaceholderImage.astro", void 0);

const tagMap = {
  // Categories (Stack)
  "finance": "资产复利",
  "dev": "全栈工程",
  "gear": "装备生产力",
  "tech": "技术",
  "ai": "AI技术",
  "workflow": "工作流",
  // Categories (Horizon)
  "roadmap": "路线图",
  "reading": "知识书架",
  // Categories (Legacy)
  "lens": "光影图集",
  "log": "记忆碎片",
  // Core Concepts (XBSTACK Identity)
  "vision": "愿景",
  "2026": "2026 纪元",
  "digital-sovereignty": "数字主权",
  "off-line-experiment": "离线生存实验",
  "launch-plan": "启动计划",
  "beta": "公测",
  "manifesto": "宣言",
  "why": "初衷",
  "project": "项目实战",
  "thinking": "深度思考",
  "habasnow": "哈巴雪山",
  // Tech & Dev
  "refactor": "代码重构",
  "v3": "V3 重构",
  "optimization": "性能调优",
  "performance": "性能优化",
  "architecture": "架构设计",
  "deploy": "自动化部署",
  "server": "服务器运维",
  "algorithm": "算法",
  "security": "安全攻防",
  "network": "网络底层",
  "brute-force": "暴力破解",
  "practice": "实战演练",
  "tutorial": "教程",
  // Languages & Frameworks (保留专业术语或标准中文名)
  "astro": "Astro",
  "react": "React",
  "nextjs": "Next.js",
  "python": "Python",
  "ios": "iOS 开发",
  "swift": "Swift",
  "objective-c": "Objective-C",
  "runtime": "Runtime 机制",
  "langchain": "LangChain",
  "semantic-kernel": "Semantic Kernel",
  "mcp": "MCP 协议",
  "rag": "RAG 检索增强",
  "llm": "大语言模型",
  "agents": "智能体",
  "genai": "生成式 AI",
  "deepseek": "DeepSeek",
  "anthropic": "Anthropic",
  "microsoft": "微软",
  "openai": "OpenAI",
  "cloudflare": "Cloudflare",
  "serverless": "无服务器",
  // Finance & Investment
  "compounding": "复利效应",
  "investment": "投资策略",
  "money": "金钱观",
  "wealth": "财富",
  "logic": "底层逻辑",
  "entropy": "熵增",
  "leverage": "杠杆",
  "strategy": "策略",
  "quant": "量化交易",
  "backtest": "策略回测",
  "risk-management": "风险管理",
  "game-theory": "博弈论",
  "mental-models": "思维模型",
  "first-principles": "第一性原理",
  "bottom-up": "自下而上",
  "antifragile": "反脆弱",
  // People & Books
  "charlie-munger": "查理·芒格",
  "warren-buffett": "巴菲特",
  "naval": "纳瓦尔",
  "taleb": "塔勒布",
  "book": "阅读",
  "history": "历史",
  "psychology": "心理学",
  "philosophy": "哲学",
  "happiness": "幸福学",
  "misjudgment": "误判心理学",
  "wall-street": "华尔街",
  "poor-charlies-almanack": "穷查理宝典",
  "the-great-game": "伟大的博弈",
  // Lifestyle & Gear
  "summit": "登顶记录",
  "mountaineering": "高海拔攀登",
  "hiking": "徒步",
  "camping": "露营",
  "photography": "摄影艺术",
  "drone": "航拍视角",
  "cinematic": "电影感",
  "minimalism": "极简主义",
  "outdoor": "户外探索",
  "edc": "EDC 装备",
  "lightweight": "轻量化",
  "hhkb": "HHKB",
  "keyboard": "机械键盘",
  "setup": "桌面配置",
  "productivity": "生产力",
  "tools": "工具",
  "remote-work": "远程工作",
  "digital-nomad": "数字游民",
  "nas": "NAS 私有云",
  "guizhou": "贵州",
  "daily": "日常",
  "diary": "日记",
  "life": "生活",
  "ideas": "灵感",
  "obsidian": "知识库",
  "review": "复盘",
  // Specific Technical Terms
  "astro-5": "Astro 5",
  "dx": "开发体验",
  "d1": "D1 数据库",
  "r2": "R2 存储",
  "free-tier": "免费额度",
  "cost-optimization": "成本优化",
  "lighthouse": "Lighthouse",
  "seo-audit": "SEO 审计",
  "crawler": "爬虫",
  "automation": "自动化",
  "sitemap": "网站地图",
  "google": "Google",
  "bing": "Bing",
  "baidu": "百度",
  // Common Fallbacks
  "blog": "博客",
  "stack": "基石",
  "legacy": "足迹",
  "horizon": "视野"
};
const t = (key) => {
  if (!key) return "";
  const normalizedKey = key.toLowerCase();
  return tagMap[normalizedKey] || key;
};

const $$Astro = createAstro("https://www.xbstack.com");
const $$BlogListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogListCard;
  const { content, entry: entryProp, slug, fetchPriority = "auto", loading = "lazy" } = Astro2.props;
  const entry = content || entryProp;
  if (!entry || !entry.data) {
    return null;
  }
  const data = entry.data || {};
  const isEnglish = String(data.lang || "").toLowerCase().startsWith("en");
  const title = data.title || "Untitled";
  const description = data.description || "";
  const publishedDate = data.createdAt;
  const categories = data.categories || [];
  const category = data.category || "";
  const image = data.image;
  const imageAlt = data.imageAlt || "";
  const complexity = data.complexity || 1;
  const displayCategories = categories.length > 0 ? categories : category ? [category] : [];
  const entryId = entry.id?.replace(/\.(md|mdx)$/, "") || "post";
  const finalUrl = slug ? resolveEntryUrl(entry, slug) : resolveEntryUrl(entry, entryId);
  const hasCustomImage = !!(image && (typeof image === "object" || typeof image === "string" && image.length > 0));
  const isAstroImage = !!(image && typeof image === "object");
  const displayImageAlt = (imageAlt || title) + " - XBSTACK";
  const entryDate = publishedDate ? formatDate(publishedDate) : null;
  const estimatedTime = readingTime(entry.body || "", complexity);
  const entryDescription = description?.substring(0, 100) || "";
  return renderTemplate`${maybeRenderHead()}<div class="group relative my-4 block" data-astro-cid-hs6yaznx> ${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-[35px] min-h-[220px] md:min-h-[240px] transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.99]", "textClass": "h-full", "animation": "fadeUp", "data-astro-cid-hs6yaznx": true }, { "default": ($$result2) => renderTemplate` <div class="flex h-full p-2 relative overflow-hidden" data-astro-cid-hs6yaznx>  <a${addAttribute(finalUrl, "href")} class="absolute inset-0 z-30 opacity-0"${addAttribute(title, "aria-label")} data-astro-cid-hs6yaznx></a> <!-- 左侧图片 --> <div class="relative w-32 md:w-64 h-full flex-shrink-0 overflow-hidden rounded-[28px]" data-astro-cid-hs6yaznx> ${hasCustomImage ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-hs6yaznx": true }, { "default": ($$result3) => renderTemplate`${isAstroImage ? renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110", "src": image, "alt": displayImageAlt, "width": 400, "height": 500, "sizes": "(min-width: 768px) 256px, 128px", "quality": 60, "format": "webp", "loading": loading, "fetchpriority": fetchPriority, "data-astro-cid-hs6yaznx": true })}` : renderTemplate`<img class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110"${addAttribute(image, "src")}${addAttribute(displayImageAlt, "alt")} width="400" height="500"${addAttribute(loading, "loading")} decoding="async"${addAttribute(fetchPriority, "fetchpriority")} data-astro-cid-hs6yaznx>`}<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-hs6yaznx></div> ` })}` : renderTemplate`<div class="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" data-astro-cid-hs6yaznx> ${renderComponent($$result2, "PlaceholderImage", $$PlaceholderImage, { "title": title, "className": "w-full h-full", "data-astro-cid-hs6yaznx": true })} </div>`} </div> <!-- 右侧内容 --> <div class="flex-1 py-4 px-5 md:px-10 flex flex-col justify-center min-w-0" data-astro-cid-hs6yaznx> <div class="flex-1 flex flex-col justify-center" data-astro-cid-hs6yaznx> <h2 class="mb-3 text-xl md:text-[1.65rem] font-black text-slate-950 dark:text-white line-clamp-2 leading-[1.2] tracking-tight transition-colors group-hover:text-orange-500" data-astro-cid-hs6yaznx> ${title} </h2> <p class="mb-4 line-clamp-2 leading-relaxed text-slate-700 dark:text-slate-300 hidden md:block text-sm font-medium opacity-80" data-astro-cid-hs6yaznx> ${entryDescription} </p> <div class="flex flex-wrap items-center gap-4" data-astro-cid-hs6yaznx> ${displayCategories.length > 0 && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-hs6yaznx> ${displayCategories.map((cat) => renderTemplate`<span class="px-2.5 py-0.5 rounded-full aqua-pill text-[10px] font-black uppercase tracking-widest text-sky-700 dark:text-sky-300 border border-sky-500/30 shadow-sm relative z-40" data-astro-cid-hs6yaznx> ${isEnglish ? cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) : t(cat)} </span>`)} </div>`} ${entryDate && renderTemplate`<div class="flex items-center text-slate-900 dark:text-slate-100" data-astro-cid-hs6yaznx> <span class="font-mono text-[11px] font-black tracking-tight italic opacity-80" data-astro-cid-hs6yaznx> ${entryDate} </span> </div>`} </div> </div> <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-200 dark:border-white/10 flex items-center justify-between" data-astro-cid-hs6yaznx> <span class="flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 transition-colors group-hover:text-orange-700" data-astro-cid-hs6yaznx> ${isEnglish ? "Read Article" : "\u6DF1\u5EA6\u9605\u8BFB"} <svg class="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hs6yaznx><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-astro-cid-hs6yaznx></path></svg> </span> ${parseInt(estimatedTime) > 2 && renderTemplate`<div class="flex items-center text-slate-900 dark:text-slate-100 relative z-40" data-astro-cid-hs6yaznx> <span class="font-mono text-[10px] font-black uppercase tracking-tighter" data-astro-cid-hs6yaznx> ${isEnglish ? `${parseInt(estimatedTime)} min` : `\u9700 ${parseInt(estimatedTime)} \u5206\u949F`} </span> </div>`} </div> </div> </div> ` })} </div> `;
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/common/BlogListCard.astro", void 0);

export { $$BlogListCard as $ };
