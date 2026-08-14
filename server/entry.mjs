import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DTD37GHk.mjs';
import { manifest } from './manifest_DPfo_K75.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about/contact.astro.mjs');
const _page3 = () => import('./pages/about/vision.astro.mjs');
const _page4 = () => import('./pages/about.astro.mjs');
const _page5 = () => import('./pages/admin/account.astro.mjs');
const _page6 = () => import('./pages/admin/ads.astro.mjs');
const _page7 = () => import('./pages/admin/affiliates.astro.mjs');
const _page8 = () => import('./pages/admin/ai-settings.astro.mjs');
const _page9 = () => import('./pages/admin/ai-studio.astro.mjs');
const _page10 = () => import('./pages/admin/analytics.astro.mjs');
const _page11 = () => import('./pages/admin/article-editor.astro.mjs');
const _page12 = () => import('./pages/admin/audit-log.astro.mjs');
const _page13 = () => import('./pages/admin/categories.astro.mjs');
const _page14 = () => import('./pages/admin/comments.astro.mjs');
const _page15 = () => import('./pages/admin/content/create/blog.astro.mjs');
const _page16 = () => import('./pages/admin/content/edit/_---id_.astro.mjs');
const _page17 = () => import('./pages/admin/content.astro.mjs');
const _page18 = () => import('./pages/admin/dashboard.astro.mjs');
const _page19 = () => import('./pages/admin/footer-links.astro.mjs');
const _page20 = () => import('./pages/admin/gallery.astro.mjs');
const _page21 = () => import('./pages/admin/growth/analytics.astro.mjs');
const _page22 = () => import('./pages/admin/growth/assets.astro.mjs');
const _page23 = () => import('./pages/admin/growth/changes.astro.mjs');
const _page24 = () => import('./pages/admin/growth/health.astro.mjs');
const _page25 = () => import('./pages/admin/growth/opportunities.astro.mjs');
const _page26 = () => import('./pages/admin/growth/seo.astro.mjs');
const _page27 = () => import('./pages/admin/growth/settings.astro.mjs');
const _page28 = () => import('./pages/admin/growth/tasks.astro.mjs');
const _page29 = () => import('./pages/admin/growth.astro.mjs');
const _page30 = () => import('./pages/admin/hot-trending.astro.mjs');
const _page31 = () => import('./pages/admin/login.astro.mjs');
const _page32 = () => import('./pages/admin/menus.astro.mjs');
const _page33 = () => import('./pages/admin/messages.astro.mjs');
const _page34 = () => import('./pages/admin/newsletter.astro.mjs');
const _page35 = () => import('./pages/admin/publisher.astro.mjs');
const _page36 = () => import('./pages/admin/python-integration.astro.mjs');
const _page37 = () => import('./pages/admin/seo.astro.mjs');
const _page38 = () => import('./pages/admin/settings.astro.mjs');
const _page39 = () => import('./pages/admin/social.astro.mjs');
const _page40 = () => import('./pages/admin/sticker-lab.astro.mjs');
const _page41 = () => import('./pages/admin/stickers/history.astro.mjs');
const _page42 = () => import('./pages/admin.astro.mjs');
const _page43 = () => import('./pages/advertising.astro.mjs');
const _page44 = () => import('./pages/ai/agent.astro.mjs');
const _page45 = () => import('./pages/ai/langgraph.astro.mjs');
const _page46 = () => import('./pages/ai/local-ai.astro.mjs');
const _page47 = () => import('./pages/ai/mcp.astro.mjs');
const _page48 = () => import('./pages/ai/model-updates.astro.mjs');
const _page49 = () => import('./pages/ai/notes.astro.mjs');
const _page50 = () => import('./pages/ai/practice.astro.mjs');
const _page51 = () => import('./pages/ai/tools.astro.mjs');
const _page52 = () => import('./pages/ai/tools-lab.astro.mjs');
const _page53 = () => import('./pages/ai/tools-lab/_---slug_.astro.mjs');
const _page54 = () => import('./pages/ai/web.astro.mjs');
const _page55 = () => import('./pages/ai/workflow.astro.mjs');
const _page56 = () => import('./pages/ai.astro.mjs');
const _page57 = () => import('./pages/ai/_---slug_.astro.mjs');
const _page58 = () => import('./pages/api/about.astro.mjs');
const _page59 = () => import('./pages/api/admin/growth/_---path_.astro.mjs');
const _page60 = () => import('./pages/api/ads.astro.mjs');
const _page61 = () => import('./pages/api/analytics/track.astro.mjs');
const _page62 = () => import('./pages/api/api/about.astro.mjs');
const _page63 = () => import('./pages/api/api/ads.astro.mjs');
const _page64 = () => import('./pages/api/api/analytics/track.astro.mjs');
const _page65 = () => import('./pages/api/api/article/_---id_.astro.mjs');
const _page66 = () => import('./pages/api/api/articles.astro.mjs');
const _page67 = () => import('./pages/api/api/categories.astro.mjs');
const _page68 = () => import('./pages/api/api/contact.astro.mjs');
const _page69 = () => import('./pages/api/api/deploy.astro.mjs');
const _page70 = () => import('./pages/api/api/emote/_---path_.astro.mjs');
const _page71 = () => import('./pages/api/api/finance/audit.astro.mjs');
const _page72 = () => import('./pages/api/api/gallery.astro.mjs');
const _page73 = () => import('./pages/api/api/link-options.astro.mjs');
const _page74 = () => import('./pages/api/api/menus.astro.mjs');
const _page75 = () => import('./pages/api/api/pages.astro.mjs');
const _page76 = () => import('./pages/api/api/posts.json.astro.mjs');
const _page77 = () => import('./pages/api/api/seo/optimize.astro.mjs');
const _page78 = () => import('./pages/api/api/seo.astro.mjs');
const _page79 = () => import('./pages/api/api/settings.astro.mjs');
const _page80 = () => import('./pages/api/api/social.astro.mjs');
const _page81 = () => import('./pages/api/api/structure.astro.mjs');
const _page82 = () => import('./pages/api/api/tags.astro.mjs');
const _page83 = () => import('./pages/api/api/upload/image.astro.mjs');
const _page84 = () => import('./pages/api/api/upload/temp-image.astro.mjs');
const _page85 = () => import('./pages/api/api/upload.astro.mjs');
const _page86 = () => import('./pages/api/article.astro.mjs');
const _page87 = () => import('./pages/api/article/_---id_.astro.mjs');
const _page88 = () => import('./pages/api/articles.astro.mjs');
const _page89 = () => import('./pages/api/auth/login.astro.mjs');
const _page90 = () => import('./pages/api/auth/logout.astro.mjs');
const _page91 = () => import('./pages/api/categories.astro.mjs');
const _page92 = () => import('./pages/api/contact.astro.mjs');
const _page93 = () => import('./pages/api/deploy.astro.mjs');
const _page94 = () => import('./pages/api/emote/_---path_.astro.mjs');
const _page95 = () => import('./pages/api/finance/audit.astro.mjs');
const _page96 = () => import('./pages/api/gallery.astro.mjs');
const _page97 = () => import('./pages/api/link-options.astro.mjs');
const _page98 = () => import('./pages/api/menus.astro.mjs');
const _page99 = () => import('./pages/api/page.astro.mjs');
const _page100 = () => import('./pages/api/pages.astro.mjs');
const _page101 = () => import('./pages/api/posts.json.astro.mjs');
const _page102 = () => import('./pages/api/publisher/articles.astro.mjs');
const _page103 = () => import('./pages/api/publisher/assets.astro.mjs');
const _page104 = () => import('./pages/api/publisher/import-folder.astro.mjs');
const _page105 = () => import('./pages/api/publisher/jobs/_id_/i18n/publish.astro.mjs');
const _page106 = () => import('./pages/api/publisher/jobs/_id_/i18n/retry.astro.mjs');
const _page107 = () => import('./pages/api/publisher/jobs/_id_/publish.astro.mjs');
const _page108 = () => import('./pages/api/publisher/jobs/_id_.astro.mjs');
const _page109 = () => import('./pages/api/publisher/jobs.astro.mjs');
const _page110 = () => import('./pages/api/publisher/platform-config.astro.mjs');
const _page111 = () => import('./pages/api/publisher/preview.astro.mjs');
const _page112 = () => import('./pages/api/publisher/status.astro.mjs');
const _page113 = () => import('./pages/api/seo/optimize.astro.mjs');
const _page114 = () => import('./pages/api/seo.astro.mjs');
const _page115 = () => import('./pages/api/settings.astro.mjs');
const _page116 = () => import('./pages/api/social.astro.mjs');
const _page117 = () => import('./pages/api/structure.astro.mjs');
const _page118 = () => import('./pages/api/tags.astro.mjs');
const _page119 = () => import('./pages/api/upload/image.astro.mjs');
const _page120 = () => import('./pages/api/upload/temp-image.astro.mjs');
const _page121 = () => import('./pages/api/upload.astro.mjs');
const _page122 = () => import('./pages/api/waitlist.astro.mjs');
const _page123 = () => import('./pages/archive/page/_page_.astro.mjs');
const _page124 = () => import('./pages/archive.astro.mjs');
const _page125 = () => import('./pages/community.astro.mjs');
const _page126 = () => import('./pages/compound-interest/_slug_.astro.mjs');
const _page127 = () => import('./pages/compound-interest.astro.mjs');
const _page128 = () => import('./pages/contact.astro.mjs');
const _page129 = () => import('./pages/cookies.astro.mjs');
const _page130 = () => import('./pages/disclosure.astro.mjs');
const _page131 = () => import('./pages/drafts.astro.mjs');
const _page132 = () => import('./pages/en/about/vision.astro.mjs');
const _page133 = () => import('./pages/en/ai/langgraph-observability-agent-trace.astro.mjs');
const _page134 = () => import('./pages/en/ai.astro.mjs');
const _page135 = () => import('./pages/en/ai/_---slug_.astro.mjs');
const _page136 = () => import('./pages/en/horizon/reading.astro.mjs');
const _page137 = () => import('./pages/en/horizon/reading/_---slug_.astro.mjs');
const _page138 = () => import('./pages/en/investing.astro.mjs');
const _page139 = () => import('./pages/en/investing/_---slug_.astro.mjs');
const _page140 = () => import('./pages/en/life/reading.astro.mjs');
const _page141 = () => import('./pages/en/life.astro.mjs');
const _page142 = () => import('./pages/en/life/_---slug_.astro.mjs');
const _page143 = () => import('./pages/en/newsletter/_slug_.astro.mjs');
const _page144 = () => import('./pages/en/newsletter.astro.mjs');
const _page145 = () => import('./pages/en/notes.astro.mjs');
const _page146 = () => import('./pages/en/notes/_---slug_.astro.mjs');
const _page147 = () => import('./pages/en/rss.xml.astro.mjs');
const _page148 = () => import('./pages/en/search.astro.mjs');
const _page149 = () => import('./pages/en/tools/ai-finance.astro.mjs');
const _page150 = () => import('./pages/en/tools/ai-financial-analysis.astro.mjs');
const _page151 = () => import('./pages/en/tools/compound-calculator.astro.mjs');
const _page152 = () => import('./pages/en/tools/compound-interest-calculator.astro.mjs');
const _page153 = () => import('./pages/en/tools/gear-library.astro.mjs');
const _page154 = () => import('./pages/en/tools/lunest.astro.mjs');
const _page155 = () => import('./pages/en/tools/templates.astro.mjs');
const _page156 = () => import('./pages/en/tools/utm-builder.astro.mjs');
const _page157 = () => import('./pages/en/tools.astro.mjs');
const _page158 = () => import('./pages/en.astro.mjs');
const _page159 = () => import('./pages/en/_---slug_.astro.mjs');
const _page160 = () => import('./pages/go/_id_.astro.mjs');
const _page161 = () => import('./pages/growth.astro.mjs');
const _page162 = () => import('./pages/guides/_slug_.astro.mjs');
const _page163 = () => import('./pages/guides.astro.mjs');
const _page164 = () => import('./pages/horizon/reading.astro.mjs');
const _page165 = () => import('./pages/horizon/reading/_---slug_.astro.mjs');
const _page166 = () => import('./pages/horizon.astro.mjs');
const _page167 = () => import('./pages/investing/compound.astro.mjs');
const _page168 = () => import('./pages/investing/fire.astro.mjs');
const _page169 = () => import('./pages/investing/thoughts.astro.mjs');
const _page170 = () => import('./pages/investing/us-stocks.astro.mjs');
const _page171 = () => import('./pages/investing.astro.mjs');
const _page172 = () => import('./pages/investing/_---slug_.astro.mjs');
const _page173 = () => import('./pages/life/badminton.astro.mjs');
const _page174 = () => import('./pages/life/gear.astro.mjs');
const _page175 = () => import('./pages/life/hiking.astro.mjs');
const _page176 = () => import('./pages/life/photo.astro.mjs');
const _page177 = () => import('./pages/life/reading.astro.mjs');
const _page178 = () => import('./pages/life/road-trip.astro.mjs');
const _page179 = () => import('./pages/life.astro.mjs');
const _page180 = () => import('./pages/life/_---slug_.astro.mjs');
const _page181 = () => import('./pages/links.astro.mjs');
const _page182 = () => import('./pages/newsletter/_slug_.astro.mjs');
const _page183 = () => import('./pages/newsletter.astro.mjs');
const _page184 = () => import('./pages/notes.astro.mjs');
const _page185 = () => import('./pages/notes/_---slug_.astro.mjs');
const _page186 = () => import('./pages/practice/v7/fix.astro.mjs');
const _page187 = () => import('./pages/practice/v7/thesis.astro.mjs');
const _page188 = () => import('./pages/practice/v7.astro.mjs');
const _page189 = () => import('./pages/privacy.astro.mjs');
const _page190 = () => import('./pages/productivity/automation.astro.mjs');
const _page191 = () => import('./pages/productivity/content.astro.mjs');
const _page192 = () => import('./pages/productivity/local-ai.astro.mjs');
const _page193 = () => import('./pages/productivity/nas.astro.mjs');
const _page194 = () => import('./pages/productivity/notes.astro.mjs');
const _page195 = () => import('./pages/productivity.astro.mjs');
const _page196 = () => import('./pages/rss.astro.mjs');
const _page197 = () => import('./pages/rss.xml.astro.mjs');
const _page198 = () => import('./pages/search.astro.mjs');
const _page199 = () => import('./pages/search-index-en.json.astro.mjs');
const _page200 = () => import('./pages/search-index-zh.json.astro.mjs');
const _page201 = () => import('./pages/search-index.json.astro.mjs');
const _page202 = () => import('./pages/sitemap.xml.astro.mjs');
const _page203 = () => import('./pages/tags/_tag_.astro.mjs');
const _page204 = () => import('./pages/tags.astro.mjs');
const _page205 = () => import('./pages/tools/ai-finance/guide.astro.mjs');
const _page206 = () => import('./pages/tools/ai-finance.astro.mjs');
const _page207 = () => import('./pages/tools/apps.astro.mjs');
const _page208 = () => import('./pages/tools/compound-calculator.astro.mjs');
const _page209 = () => import('./pages/tools/finance/report/_ticker_.astro.mjs');
const _page210 = () => import('./pages/tools/gear-library.astro.mjs');
const _page211 = () => import('./pages/tools/how-to-analyze-financial-reports-with-ai.astro.mjs');
const _page212 = () => import('./pages/tools/labs.astro.mjs');
const _page213 = () => import('./pages/tools/lunest.astro.mjs');
const _page214 = () => import('./pages/tools/templates.astro.mjs');
const _page215 = () => import('./pages/tools/toy-lab/zhuzhiliao.astro.mjs');
const _page216 = () => import('./pages/tools/toy-lab.astro.mjs');
const _page217 = () => import('./pages/tools/utm-builder.astro.mjs');
const _page218 = () => import('./pages/tools.astro.mjs');
const _page219 = () => import('./pages/tos.astro.mjs');
const _page220 = () => import('./pages/wechat.astro.mjs');
const _page221 = () => import('./pages/zh-tw/tools/lunest.astro.mjs');
const _page222 = () => import('./pages/index.astro.mjs');
const _page223 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/contact.astro", _page2],
    ["src/pages/about/vision.astro", _page3],
    ["src/pages/about/index.astro", _page4],
    ["src/pages/admin/account.astro", _page5],
    ["src/pages/admin/ads.astro", _page6],
    ["src/pages/admin/affiliates.astro", _page7],
    ["src/pages/admin/ai-settings.astro", _page8],
    ["src/pages/admin/ai-studio.astro", _page9],
    ["src/pages/admin/analytics.astro", _page10],
    ["src/pages/admin/article-editor.astro", _page11],
    ["src/pages/admin/audit-log.astro", _page12],
    ["src/pages/admin/categories.astro", _page13],
    ["src/pages/admin/comments.astro", _page14],
    ["src/pages/admin/content/create/blog.astro", _page15],
    ["src/pages/admin/content/edit/[...id].astro", _page16],
    ["src/pages/admin/content/index.astro", _page17],
    ["src/pages/admin/dashboard.astro", _page18],
    ["src/pages/admin/footer-links.astro", _page19],
    ["src/pages/admin/gallery.astro", _page20],
    ["src/pages/admin/growth/analytics.astro", _page21],
    ["src/pages/admin/growth/assets.astro", _page22],
    ["src/pages/admin/growth/changes.astro", _page23],
    ["src/pages/admin/growth/health.astro", _page24],
    ["src/pages/admin/growth/opportunities.astro", _page25],
    ["src/pages/admin/growth/seo.astro", _page26],
    ["src/pages/admin/growth/settings.astro", _page27],
    ["src/pages/admin/growth/tasks.astro", _page28],
    ["src/pages/admin/growth.astro", _page29],
    ["src/pages/admin/hot-trending.astro", _page30],
    ["src/pages/admin/login.astro", _page31],
    ["src/pages/admin/menus.astro", _page32],
    ["src/pages/admin/messages.astro", _page33],
    ["src/pages/admin/newsletter.astro", _page34],
    ["src/pages/admin/publisher.astro", _page35],
    ["src/pages/admin/python-integration.astro", _page36],
    ["src/pages/admin/seo.astro", _page37],
    ["src/pages/admin/settings.astro", _page38],
    ["src/pages/admin/social.astro", _page39],
    ["src/pages/admin/sticker-lab.astro", _page40],
    ["src/pages/admin/stickers/history.astro", _page41],
    ["src/pages/admin/index.astro", _page42],
    ["src/pages/advertising.astro", _page43],
    ["src/pages/ai/agent.astro", _page44],
    ["src/pages/ai/langgraph.astro", _page45],
    ["src/pages/ai/local-ai.astro", _page46],
    ["src/pages/ai/mcp.astro", _page47],
    ["src/pages/ai/model-updates.astro", _page48],
    ["src/pages/ai/notes.astro", _page49],
    ["src/pages/ai/practice.astro", _page50],
    ["src/pages/ai/tools.astro", _page51],
    ["src/pages/ai/tools-lab.astro", _page52],
    ["src/pages/ai/tools-lab/[...slug].astro", _page53],
    ["src/pages/ai/web.astro", _page54],
    ["src/pages/ai/workflow.astro", _page55],
    ["src/pages/ai/index.astro", _page56],
    ["src/pages/ai/[...slug].astro", _page57],
    ["src/pages/api/about.ts", _page58],
    ["src/pages/api/admin/growth/[...path].ts", _page59],
    ["src/pages/api/ads.ts", _page60],
    ["src/pages/api/analytics/track.ts", _page61],
    ["src/pages/api/api/about.ts", _page62],
    ["src/pages/api/api/ads.ts", _page63],
    ["src/pages/api/api/analytics/track.ts", _page64],
    ["src/pages/api/api/article/[...id].ts", _page65],
    ["src/pages/api/api/articles.ts", _page66],
    ["src/pages/api/api/categories.ts", _page67],
    ["src/pages/api/api/contact.ts", _page68],
    ["src/pages/api/api/deploy.ts", _page69],
    ["src/pages/api/api/emote/[...path].ts", _page70],
    ["src/pages/api/api/finance/audit.ts", _page71],
    ["src/pages/api/api/gallery.ts", _page72],
    ["src/pages/api/api/link-options.ts", _page73],
    ["src/pages/api/api/menus.ts", _page74],
    ["src/pages/api/api/pages.ts", _page75],
    ["src/pages/api/api/posts.json.ts", _page76],
    ["src/pages/api/api/seo/optimize.ts", _page77],
    ["src/pages/api/api/seo.ts", _page78],
    ["src/pages/api/api/settings.ts", _page79],
    ["src/pages/api/api/social.ts", _page80],
    ["src/pages/api/api/structure.ts", _page81],
    ["src/pages/api/api/tags.ts", _page82],
    ["src/pages/api/api/upload/image.ts", _page83],
    ["src/pages/api/api/upload/temp-image.ts", _page84],
    ["src/pages/api/api/upload.ts", _page85],
    ["src/pages/api/article.ts", _page86],
    ["src/pages/api/article/[...id].ts", _page87],
    ["src/pages/api/articles.ts", _page88],
    ["src/pages/api/auth/login.ts", _page89],
    ["src/pages/api/auth/logout.ts", _page90],
    ["src/pages/api/categories.ts", _page91],
    ["src/pages/api/contact.ts", _page92],
    ["src/pages/api/deploy.ts", _page93],
    ["src/pages/api/emote/[...path].ts", _page94],
    ["src/pages/api/finance/audit.ts", _page95],
    ["src/pages/api/gallery.ts", _page96],
    ["src/pages/api/link-options.ts", _page97],
    ["src/pages/api/menus.ts", _page98],
    ["src/pages/api/page.ts", _page99],
    ["src/pages/api/pages.ts", _page100],
    ["src/pages/api/posts.json.ts", _page101],
    ["src/pages/api/publisher/articles.ts", _page102],
    ["src/pages/api/publisher/assets.ts", _page103],
    ["src/pages/api/publisher/import-folder.ts", _page104],
    ["src/pages/api/publisher/jobs/[id]/i18n/publish.ts", _page105],
    ["src/pages/api/publisher/jobs/[id]/i18n/retry.ts", _page106],
    ["src/pages/api/publisher/jobs/[id]/publish.ts", _page107],
    ["src/pages/api/publisher/jobs/[id].ts", _page108],
    ["src/pages/api/publisher/jobs.ts", _page109],
    ["src/pages/api/publisher/platform-config.ts", _page110],
    ["src/pages/api/publisher/preview.ts", _page111],
    ["src/pages/api/publisher/status.ts", _page112],
    ["src/pages/api/seo/optimize.ts", _page113],
    ["src/pages/api/seo.ts", _page114],
    ["src/pages/api/settings.ts", _page115],
    ["src/pages/api/social.ts", _page116],
    ["src/pages/api/structure.ts", _page117],
    ["src/pages/api/tags.ts", _page118],
    ["src/pages/api/upload/image.ts", _page119],
    ["src/pages/api/upload/temp-image.ts", _page120],
    ["src/pages/api/upload.ts", _page121],
    ["src/pages/api/waitlist.ts", _page122],
    ["src/pages/archive/page/[page].astro", _page123],
    ["src/pages/archive.astro", _page124],
    ["src/pages/community.astro", _page125],
    ["src/pages/compound-interest/[slug].astro", _page126],
    ["src/pages/compound-interest/index.astro", _page127],
    ["src/pages/contact.astro", _page128],
    ["src/pages/cookies.astro", _page129],
    ["src/pages/disclosure.astro", _page130],
    ["src/pages/drafts.astro", _page131],
    ["src/pages/en/about/vision.astro", _page132],
    ["src/pages/en/ai/langgraph-observability-agent-trace/index.astro", _page133],
    ["src/pages/en/ai/index.astro", _page134],
    ["src/pages/en/ai/[...slug].astro", _page135],
    ["src/pages/en/horizon/reading/index.astro", _page136],
    ["src/pages/en/horizon/reading/[...slug].astro", _page137],
    ["src/pages/en/investing/index.astro", _page138],
    ["src/pages/en/investing/[...slug].astro", _page139],
    ["src/pages/en/life/reading.astro", _page140],
    ["src/pages/en/life/index.astro", _page141],
    ["src/pages/en/life/[...slug].astro", _page142],
    ["src/pages/en/newsletter/[slug].astro", _page143],
    ["src/pages/en/newsletter/index.astro", _page144],
    ["src/pages/en/notes/index.astro", _page145],
    ["src/pages/en/notes/[...slug].astro", _page146],
    ["src/pages/en/rss.xml.js", _page147],
    ["src/pages/en/search.astro", _page148],
    ["src/pages/en/tools/ai-finance/index.astro", _page149],
    ["src/pages/en/tools/ai-financial-analysis.astro", _page150],
    ["src/pages/en/tools/compound-calculator/index.astro", _page151],
    ["src/pages/en/tools/compound-interest-calculator.astro", _page152],
    ["src/pages/en/tools/gear-library.astro", _page153],
    ["src/pages/en/tools/lunest.astro", _page154],
    ["src/pages/en/tools/templates.astro", _page155],
    ["src/pages/en/tools/utm-builder.astro", _page156],
    ["src/pages/en/tools/index.astro", _page157],
    ["src/pages/en/index.astro", _page158],
    ["src/pages/en/[...slug].astro", _page159],
    ["src/pages/go/[id].ts", _page160],
    ["src/pages/growth.astro", _page161],
    ["src/pages/guides/[slug].astro", _page162],
    ["src/pages/guides/index.astro", _page163],
    ["src/pages/horizon/reading.astro", _page164],
    ["src/pages/horizon/reading/[...slug].astro", _page165],
    ["src/pages/horizon/index.astro", _page166],
    ["src/pages/investing/compound.astro", _page167],
    ["src/pages/investing/fire.astro", _page168],
    ["src/pages/investing/thoughts.astro", _page169],
    ["src/pages/investing/us-stocks.astro", _page170],
    ["src/pages/investing/index.astro", _page171],
    ["src/pages/investing/[...slug].astro", _page172],
    ["src/pages/life/badminton/index.astro", _page173],
    ["src/pages/life/gear.astro", _page174],
    ["src/pages/life/hiking.astro", _page175],
    ["src/pages/life/photo.astro", _page176],
    ["src/pages/life/reading.astro", _page177],
    ["src/pages/life/road-trip/index.astro", _page178],
    ["src/pages/life/index.astro", _page179],
    ["src/pages/life/[...slug].astro", _page180],
    ["src/pages/links.astro", _page181],
    ["src/pages/newsletter/[slug].astro", _page182],
    ["src/pages/newsletter/index.astro", _page183],
    ["src/pages/notes/index.astro", _page184],
    ["src/pages/notes/[...slug].astro", _page185],
    ["src/pages/practice/v7/fix.astro", _page186],
    ["src/pages/practice/v7/thesis.astro", _page187],
    ["src/pages/practice/v7/index.astro", _page188],
    ["src/pages/privacy.astro", _page189],
    ["src/pages/productivity/automation/index.astro", _page190],
    ["src/pages/productivity/content/index.astro", _page191],
    ["src/pages/productivity/local-ai/index.astro", _page192],
    ["src/pages/productivity/nas/index.astro", _page193],
    ["src/pages/productivity/notes/index.astro", _page194],
    ["src/pages/productivity/index.astro", _page195],
    ["src/pages/rss.astro", _page196],
    ["src/pages/rss.xml.js", _page197],
    ["src/pages/search.astro", _page198],
    ["src/pages/search-index-en.json.ts", _page199],
    ["src/pages/search-index-zh.json.ts", _page200],
    ["src/pages/search-index.json.ts", _page201],
    ["src/pages/sitemap.xml.ts", _page202],
    ["src/pages/tags/[tag].astro", _page203],
    ["src/pages/tags/index.astro", _page204],
    ["src/pages/tools/ai-finance/guide.astro", _page205],
    ["src/pages/tools/ai-finance/index.astro", _page206],
    ["src/pages/tools/apps/index.astro", _page207],
    ["src/pages/tools/compound-calculator.astro", _page208],
    ["src/pages/tools/finance/report/[ticker].astro", _page209],
    ["src/pages/tools/gear-library.astro", _page210],
    ["src/pages/tools/how-to-analyze-financial-reports-with-ai.astro", _page211],
    ["src/pages/tools/labs/index.astro", _page212],
    ["src/pages/tools/lunest.astro", _page213],
    ["src/pages/tools/templates.astro", _page214],
    ["src/pages/tools/toy-lab/zhuzhiliao/index.astro", _page215],
    ["src/pages/tools/toy-lab/index.astro", _page216],
    ["src/pages/tools/utm-builder.astro", _page217],
    ["src/pages/tools/index.astro", _page218],
    ["src/pages/tos.astro", _page219],
    ["src/pages/wechat.astro", _page220],
    ["src/pages/zh-tw/tools/lunest.astro", _page221],
    ["src/pages/index.astro", _page222],
    ["src/pages/[...slug].astro", _page223]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///Users/beijingchaoyang/MyWeb/blog/dist/client/",
    "server": "file:///Users/beijingchaoyang/MyWeb/blog/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
