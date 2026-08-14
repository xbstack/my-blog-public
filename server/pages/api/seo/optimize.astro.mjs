import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { c as categoryMap } from '../../../chunks/translations_CAQ0naB0.mjs';
export { renderers } from '../../../renderers.mjs';

const CONTENT_ROOT = path.join(process.cwd(), "src/content");
const SETTINGS_FILE = path.join(process.cwd(), "src/data/settings.json");
const POST = async () => {
  try {
    const collections = ["ai", "horizon", "lens", "notes", "posts"];
    let optimizedList = [];
    let allTags = /* @__PURE__ */ new Set();
    let activeCategories = /* @__PURE__ */ new Set();
    for (const col of collections) {
      const colPath = path.join(CONTENT_ROOT, col);
      if (!fs.existsSync(colPath)) continue;
      const files = fs.readdirSync(colPath).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
      for (const file of files) {
        const filePath = path.join(colPath, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        let changed = false;
        const hasManualDescription = data.description && data.description.trim().length > 10;
        if (!hasManualDescription) {
          const cleanText = content.replace(/```[\s\S]*?```/g, "").replace(/<[^>]*>[\s\S]*?<\/[^>]*>/g, "").replace(/<[^>]*\/>/g, "").replace(/!\[.*\]\(.*\)/g, "").replace(/\[(.*?)\]\(.*\)/g, "$1").replace(/[#*`>|_-]/g, "").replace(/\s+/g, " ").trim();
          if (cleanText.length > 20) {
            let summary = cleanText.slice(0, 160);
            const lastFullStop = summary.lastIndexOf("。");
            const lastPeriod = summary.lastIndexOf(".");
            const cutPoint = Math.max(lastFullStop, lastPeriod);
            if (cutPoint > 100) {
              summary = summary.slice(0, cutPoint + 1);
            } else {
              summary = summary.trim() + "...";
            }
            data.description = summary;
            changed = true;
          }
        }
        if (data.tags && Array.isArray(data.tags)) data.tags.forEach((t) => allTags.add(t));
        if (data.category) activeCategories.add(data.category);
        if (changed) {
          const newContent = matter.stringify(content, data);
          fs.writeFileSync(filePath, newContent);
          optimizedList.push(`${col}/${file}`);
        }
      }
    }
    const tagList = Array.from(allTags).slice(0, 15).join(", ");
    const catList = Array.from(activeCategories).map((c) => categoryMap[c] || c).join(", ");
    const generatedAiManifest = `本站名为 XBSTACK，是由全栈专家 Maple 构建的数字化资产堡垒。内容涉及 ${catList} 等领域。当前核心索引包括：${tagList}。站点旨在通过硬核逻辑与高海拔感知，记录不被时间侵蚀的内容资产。`;
    if (fs.existsSync(SETTINGS_FILE)) {
      const settings = JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf-8"));
      if (!settings.seo) settings.seo = {};
      settings.seo.aiManifest = generatedAiManifest;
      settings.seo.lastAutoOptimize = (/* @__PURE__ */ new Date()).toISOString();
      fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "进化协议执行成功",
        stats: {
          nodesOptimized: optimizedList.length,
          optimizedList,
          aiManifest: generatedAiManifest
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "协议中断：请检查文件系统权限", error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
