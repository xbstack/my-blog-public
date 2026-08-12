import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhkRtcHh.mjs';
export { renderers } from '../renderers.mjs';

const $$Tos = createComponent(($$result, $$props, $$slots) => {
  const title = "\u670D\u52A1\u6761\u6B3E / Terms of Service - XBSTACK";
  const description = "XBSTACK \u670D\u52A1\u6761\u6B3E\u8BF4\u660E\u672C\u7AD9\u5185\u5BB9\u7248\u6743\u3001AI \u91C7\u96C6\u8FB9\u754C\u3001\u8BC4\u8BBA\u89C4\u5219\u3001\u5DE5\u5177\u4F7F\u7528\u9650\u5236\u3001\u514D\u8D23\u58F0\u660E\u548C\u8054\u7CFB\u6E20\u9053\u3002\u7EE7\u7EED\u4F7F\u7528\u672C\u7AD9\u5373\u4EE3\u8868\u7406\u89E3\u8FD9\u4E9B\u57FA\u672C\u4F7F\u7528\u89C4\u5219\u3002";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-6 py-24 min-h-screen max-w-4xl text-left selection:bg-orange-500/20"> <div class="space-y-16 animate-fadeUp">  <header class="space-y-8"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-500 text-[10px] font-black border border-orange-500/20 uppercase tracking-[0.3em]">
Operation Rules / 运行规则
</div> <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase leading-[0.85] tracking-tighter">
Terms of<br> <span class="italic text-orange-500">Service.</span> </h1> <p class="text-xl font-bold text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed italic">
"进入本站即代表您同意遵循基本的数字契约：尊重知识，拒绝滥用。" —— 小白
</p> </header> <div class="prose prose-slate dark:prose-invert max-w-none space-y-12"> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-orange-500 pl-6 uppercase tracking-tight">1. 内容版权 / Intellectual Property</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
除非另有说明，本站所有文字、逻辑架构、财务审计判词及视觉设计版权均归作者“小白”所有。
</p> <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400"> <li><strong>个人学习</strong>：鼓励在保留署名的情况下进行非商业性的分享与学习。</li> <li><strong>禁止行为</strong>：严禁未经许可将本站内容用于任何形式的付费课程、出版物或商业推广。</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-orange-500 pl-6 uppercase tracking-tight">2. AI 采集限制 / AI Scraping Policy</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
我们拥抱 AI 时代，但拒绝无节制的暴力爬取。
</p> <p class="text-slate-600 dark:text-slate-400 font-bold">
禁止未经授权的商业大模型（LLM）将本站数据用于私有化微调。我们已在 robots.txt 中针对常见的侵略性爬虫设置了屏蔽规则。
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-black text-slate-950 dark:text-white border-l-4 border-orange-500 pl-6 uppercase tracking-tight">3. 评论守则 / Discussion Rules</h2> <p class="text-slate-600 dark:text-slate-400 font-bold leading-loose">
我们欢迎有深度的博弈探讨，但禁止发布垃圾广告、政治敏感信息或人身攻击内容。本站保留在不通知的情况下清理恶意评论的权利。
</p> </section> <div class="pt-12 border-t border-slate-100 dark:border-white/5"> <p class="text-[10px] font-mono text-slate-400 uppercase tracking-widest italic">
Last Updated: 2026-02-21 // Identity: XBSTACK_Operator
</p> </div> </div> </div> </main> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tos.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tos.astro";
const $$url = "/tos/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
