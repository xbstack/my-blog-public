const PLATFORM_REGISTRY = [
  // ---- 文字平台 ----
  { id: "wechat", name: "微信公众号", category: "article", hint: "草稿箱一键发布", method: "api", contentTypes: ["article", "image"] },
  { id: "zhihu", name: "知乎", category: "article", hint: "浏览器推送草稿，人工检查后发布", method: "multipost", contentTypes: ["article", "image", "video"] },
  { id: "juejin", name: "掘金", category: "article", hint: "技术文推送草稿 + UTM", method: "multipost", contentTypes: ["article"] },
  { id: "jike", name: "即刻", category: "community", hint: "短帖摘要 + UTM", method: "multipost", contentTypes: ["article", "image"] },
  { id: "csdn", name: "CSDN", category: "article", hint: "浏览器推送中文草稿，人工检查后发布", method: "multipost", contentTypes: ["article"] },
  { id: "jianshu", name: "简书", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "segmentfault", name: "思否", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "oschina", name: "开源中国", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "infoq", name: "InfoQ", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "toutiao", name: "今日头条", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article", "video"] },
  { id: "baijiahao", name: "百家号", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "souhu", name: "搜狐号", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "wangyi", name: "网易号", category: "article", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  // ---- 图文平台 ----
  { id: "xiaohongshu", name: "小红书", category: "social", hint: "文案+图片发布", method: "multipost", contentTypes: ["article", "image"] },
  { id: "weibo", name: "微博", category: "social", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article", "image", "video"] },
  // ---- 视频平台 ----
  { id: "douyin", name: "抖音", category: "video", hint: "浏览器自动发布", method: "multipost", contentTypes: ["video", "image"] },
  { id: "bilibili", name: "B站", category: "video", hint: "浏览器自动发布", method: "multipost", contentTypes: ["video", "article"] },
  { id: "kuaishou", name: "快手", category: "video", hint: "浏览器自动发布", method: "multipost", contentTypes: ["video"] },
  { id: "shipinhao", name: "微信视频号", category: "video", hint: "浏览器自动发布", method: "multipost", contentTypes: ["video", "image"] },
  { id: "youtube", name: "YouTube", category: "video", hint: "浏览器自动发布", method: "multipost", contentTypes: ["video"] },
  // ---- 全球英文平台 ----
  { id: "devto", name: "DEV Community", category: "article", hint: "官方 API 直接发布 + Canonical", method: "api", contentTypes: ["article"] },
  { id: "hashnode", name: "Hashnode", category: "article", hint: "浏览器推送免费草稿 + Canonical", method: "multipost", contentTypes: ["article"] },
  { id: "medium", name: "Medium", category: "article", hint: "浏览器推送草稿 + Canonical", method: "multipost", contentTypes: ["article"] },
  { id: "hackernoon", name: "HackerNoon", category: "article", hint: "浏览器保存投稿草稿", method: "multipost", contentTypes: ["article"] },
  { id: "linkedin", name: "LinkedIn", category: "social", hint: "官方 Posts API 直接发布", method: "api", contentTypes: ["article", "image"] },
  { id: "hackernews", name: "Hacker News", category: "community", hint: "浏览器预填提交表单，人工确认提交", method: "multipost", contentTypes: ["article"] },
  // ---- 社区 ----
  { id: "v2ex", name: "V2EX", category: "community", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article"] },
  { id: "tieba", name: "贴吧", category: "community", hint: "浏览器自动发布", method: "multipost", contentTypes: ["article", "image"] },
  // ---- 自有 ----
  { id: "xbstack", name: "XBSTACK", category: "own", hint: "站内副本", method: "copy", contentTypes: ["article"] }
];

export { PLATFORM_REGISTRY as P };
