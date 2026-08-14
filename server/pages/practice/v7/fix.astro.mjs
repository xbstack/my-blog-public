import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$V7Frame } from '../../../chunks/V7Frame_BYwqVHMF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Fix = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V7Frame", $$V7Frame, { "title": "V7 FIX \u6587\u7AE0\u539F\u578B\uFF1AMCP -32700 Parse Error", "description": "XBSTACK V7 \u641C\u7D22\u95EE\u9898\u6587\u7AE0\u539F\u578B\uFF0C\u5F3A\u8C03\u76F4\u63A5\u7B54\u6848\u3001\u73AF\u5883\u300130 \u79D2\u8BCA\u65AD\u3001\u8BC1\u636E\u4E0E\u9A8C\u8BC1\u3002", "section": "Fix" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <header class="pb-14 pt-16 sm:pb-20 sm:pt-24"> <div class="v7-reading"> <div class="v7-eyebrow text-[var(--v7-fix)]"><span class="v7-dot"></span> FIX / MCP Troubleshooting</div> <h1 class="mt-6 text-[clamp(40px,6vw,72px)] font-[820] leading-[1.02] tracking-[-0.055em] text-[var(--v7-ink)]">MCP -32700 Parse Error：先确认协议流到底收到了什么</h1> <p class="v7-lead mt-7">搜索型页面第一屏不再解释“适合谁读”。先告诉用户错误是什么意思、最先检查哪里，以及什么情况不能简单归因于 stdout 日志。</p> </div> </header> <div class="v7-container v7-meta-grid mb-12"> <div class="v7-meta-cell"><span class="v7-meta-label">Role</span><span class="v7-meta-value">FIX</span></div> <div class="v7-meta-cell"><span class="v7-meta-label">Scope</span><span class="v7-meta-value">MCP / JSON-RPC</span></div> <div class="v7-meta-cell"><span class="v7-meta-label">Evidence</span><span class="v7-meta-value">Article + runnable validator</span></div> <div class="v7-meta-cell"><span class="v7-meta-label">Goal</span><span class="v7-meta-value">30 秒判断方向</span></div> </div> <div class="v7-reading"> <section class="mb-12 border-l-2 border-[var(--v7-fix)] pl-5 sm:pl-7"> <div class="v7-eyebrow text-[var(--v7-fix)]">Direct answer</div> <p class="mt-4 text-xl font-bold leading-9 tracking-[-0.02em] text-[var(--v7-ink)]">
\`-32700\` 表示接收到的内容无法按 JSON 解析。stdio 模式先分离 stdout / stderr，但不要把所有 Parse Error 都归因于日志污染：损坏 JSON、协议 schema、SDK/客户端版本和启动失败同样可能触发错误。
</p> </section> <section class="v7-surface mb-12 overflow-hidden"> <div class="border-b border-[var(--v7-line)] px-5 py-4 sm:px-6"><div class="v7-eyebrow">30-second check</div></div> <ol class="divide-y divide-[var(--v7-line)]"> <li class="grid gap-3 px-5 py-5 sm:grid-cols-[40px_1fr] sm:px-6"><span class="font-mono text-xs text-[var(--v7-fix)]">01</span><div><strong>把 stdout 和 stderr 分开</strong><p class="mt-1 text-sm leading-6 text-[var(--v7-muted)]">协议输出必须保持可解析；日志优先进入 stderr。</p></div></li> <li class="grid gap-3 px-5 py-5 sm:grid-cols-[40px_1fr] sm:px-6"><span class="font-mono text-xs text-[var(--v7-fix)]">02</span><div><strong>保存客户端实际收到的原始行</strong><p class="mt-1 text-sm leading-6 text-[var(--v7-muted)]">不要只看最终 UI 报错，先看哪一行破坏了解析。</p></div></li> <li class="grid gap-3 px-5 py-5 sm:grid-cols-[40px_1fr] sm:px-6"><span class="font-mono text-xs text-[var(--v7-fix)]">03</span><div><strong>用 validator 区分污染与非法 JSON-RPC</strong><p class="mt-1 text-sm leading-6 text-[var(--v7-muted)]">把“猜原因”变成可复现验证。</p></div></li> </ol> </section> <div class="v7-prose"> <h2>为什么 V7 FIX 页要比普通技术文章更“窄”</h2> <p>搜索用户进来时已经带着一个明确失败状态。页面最重要的不是展示作者知道多少，而是帮助他迅速确认：错误含义、第一检查点、证据和下一步动作。因此 FIX Layout 会压缩作者简介、通用受众块、重复 CTA 和大量装饰性模块。</p> <h2>证据和工具应该紧挨着解决步骤</h2> <p>真实文章已经有 <strong>xbstack/mcp-stdio-diagnostics</strong>。V7 会把这种 repo、fixture、版本边界和验证结果放到正文上下文里，而不是只在文章底部给一个 GitHub 链接。</p> <pre><code>python validator.py fixtures/clean.jsonl
# PASS

python validator.py fixtures/polluted.jsonl
# FAIL as expected</code></pre> <h2>什么情况下这个结论不够</h2> <p>如果协议流本身是合法 JSON，但客户端仍然报 Parse Error，就要继续核对 JSON-RPC schema、SDK 版本、transport 实现和启动生命周期。页面会明确保留“边界”，避免把一个高频原因包装成唯一原因。</p> </div> <section class="my-14 grid gap-5 border-y border-[var(--v7-line)] py-7 sm:grid-cols-2"> <div><div class="v7-eyebrow">Primary evidence</div><a href="https://github.com/xbstack/mcp-stdio-diagnostics" class="v7-link mt-3 block text-lg font-extrabold">MCP stdio diagnostics →</a></div> <div><div class="v7-eyebrow">Current article</div><a href="/ai/mcp-json-rpc-parse-error/" class="v7-link mt-3 block text-lg font-extrabold">查看现有线上文章 →</a></div> </section> <div class="flex flex-wrap gap-3 pb-20"><a href="/practice/v7/" class="v7-button">← 返回 V7 首页</a><a href="/practice/v7/thesis/" class="v7-button">对比 THESIS 页面 →</a></div> </div> </article> ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/practice/v7/fix.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/practice/v7/fix.astro";
const $$url = "/practice/v7/fix/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fix,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
