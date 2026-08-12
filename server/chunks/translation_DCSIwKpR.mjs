const readingTime = (content, complexity) => {
  if (!content) {
    return "0分钟";
  }
  const CPS = 350 / 60;
  let images = 0;
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const englishRegex = /[a-zA-Z0-9]/g;
  const imageRegex = /\.(png|jpg|jpeg|svg|webp|gif)/gi;
  const imageMatches = content.match(imageRegex);
  images = imageMatches ? imageMatches.length : 0;
  const chineseChars = content.match(chineseRegex);
  const chineseCount = chineseChars ? chineseChars.length : 0;
  const englishChars = content.match(englishRegex);
  const englishWordCount = englishChars ? Math.ceil(englishChars.length / 5) : 0;
  const totalChars = chineseCount + englishWordCount;
  let imageSecs = 0;
  let imageFactor = 12;
  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  let ttr = 0;
  ttr = totalChars / CPS;
  ttr = ttr + imageSecs;
  ttr = ttr * complexity;
  ttr = Math.ceil(ttr / 60);
  if (ttr < 1) {
    ttr = 1;
  }
  return ttr + `分钟`;
};

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

export { readingTime as r, t };
