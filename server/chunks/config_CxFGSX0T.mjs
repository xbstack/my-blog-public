function getSiteInfo() {
  return {
    NAME: "XBSTACK",
    SITE_NAME: "XBSTACK | Independent Developer Asset System",
    SITE_TITLE: "XBSTACK | Look High. Build Low.",
    SITE_SLOGAN: "Look High. Build Low.",
    SUBNAME: "Independent Developer Asset System",
    DESCRIPTION: "XBSTACK is Xiaobai's independent developer asset system, covering AI engineering, product tools, productivity systems, investing notes, reading and outdoor practice.",
    URL: "https://www.xbstack.com",
    AUTHOR: "Xiaobai",
    DEV_URL: "http://127.0.0.1:4321",
    LOGO_IMAGE: "/favicon/favicon.svg",
    KEY_WORDS: "XBSTACK, Xiaobai, 小白, AI Engineering, AI Agents, Product Tools, LangGraph, MCP, AI Workflow, Compound Interest Calculator, AI Finance Tool",
    GOOGLE_ANALYTICS_ID: "G-1J4274CPMT",
    BAIDU_ANALYTICS_ID: "c7bfaf645bfc8974405a85c2a55573a0",
    START_DATE: "2026-01-12",
    ICP: {
      NUMBER: "构建主权数字领地",
      URL: "#"
    },
    SOCIAL_LINKS: {
      wechat: "/assets/qrcode_guizhou_outdoor.png",
      wechatNickname: "贵州户外",
      email: "xbstack@163.com",
      github: "https://github.com/xbstack/my-blog-public"
    },
    BLOG_NETWORK: {
      tenYearPledge: "",
      travelling: ""
    }
  };
}
const SITE_INFO = getSiteInfo();
const UI_CONFIG = {
  ENABLE_GLASS_EFFECT: true
};

export { SITE_INFO as S, UI_CONFIG as U };
