import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qQA58Esh.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const title = "\u9690\u79C1\u653F\u7B56 / Privacy Policy - XBSTACK";
  const description = "XBSTACK \u9690\u79C1\u653F\u7B56\u8BF4\u660E\u672C\u7AD9\u5982\u4F55\u5904\u7406\u8BBF\u95EE\u7EDF\u8BA1\u3001\u8BC4\u8BBA\u6570\u636E\u3001Cookie\u3001Cloudflare\u3001Google Analytics \u548C\u7B2C\u4E09\u65B9\u670D\u52A1\u3002\u6211\u4EEC\u575A\u6301\u6700\u5C0F\u5316\u91C7\u96C6\u548C\u900F\u660E\u62AB\u9732\uFF0C\u5E2E\u52A9\u8BFB\u8005\u7406\u89E3\u81EA\u5DF1\u7684\u6570\u636E\u8FB9\u754C\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-24 min-h-screen max-w-4xl text-left selection:bg-orange-500/20"> <div class="space-y-16 animate-fadeUp">  <header class="space-y-8"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black border border-sky-500/20 uppercase tracking-[0.3em]">
Data Sovereignty / 数据主权
</div> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase leading-[0.85] tracking-tighter">
Privacy<br> <span class="italic text-sky-500">Commitment.</span> </h1> <p class="text-xl font-bold text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed italic">
"我们不相信免费的午餐，更不相信以牺牲隐私为代价的服务。" —— 小白
</p> </header> <div class="prose prose-slate dark:prose-invert max-w-none space-y-12"> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-sky-500 pl-6 uppercase tracking-tight">1. 信息收集声明 / Information Collection</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
本站坚持“最小化收集”原则。我们不会主动要求您提供姓名、电话或住址。
</p> <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400"> <li><strong>访问统计</strong>：使用 Google Analytics (GA4) 收集匿名访问数据（如浏览器类型、访问时间、停留页面），用于优化网站性能。</li> <li><strong>评论系统</strong>：使用自托管 Waline 存储注册账号所需的显示名称、邮箱、密码哈希，以及您主动提交的评论内容；为防滥用和安全审计，服务端还可能记录 IP 地址与浏览器 User-Agent。</li> <li><strong>Cookies</strong>：仅用于维持您的暗黑模式偏好和基本的分析功能。</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-sky-500 pl-6 uppercase tracking-tight">2. 第三方服务 / Third-party Services</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
我们整合了以下第三方服务，其隐私策略与本站对齐但不完全受控：
</p> <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400"> <li>Google Analytics (匿名统计)</li> <li>Cloudflare (DDoS 防护与 CDN 加速)</li> <li>Waline（本站自托管评论软件）</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-sky-500 pl-6 uppercase tracking-tight">3. 数据安全 / Security</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
本站部署于私有 NAS 节点并经过 Cloudflare Tunnel 物理隔离加密。我们尽最大努力保障数据链路的安全性，但建议您不要在任何评论区留下真实的个人身份信息。
</p> </section> <section class="space-y-4 pt-12 border-t border-slate-100 dark:border-white/5"> <p class="text-[10px] font-mono text-slate-400 uppercase tracking-widest italic">
Last Updated: 2026-02-21 // Protocol: Private_First_v1.0
</p> </section></div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/privacy.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/privacy.astro";
const $$url = "/privacy/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
