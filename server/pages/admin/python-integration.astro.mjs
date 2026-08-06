import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, a as renderScript } from '../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Bid3_Fbn.mjs';
/* empty css                                                 */
export { renderers } from '../../renderers.mjs';

const $$PythonIntegration = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "Python \u529F\u80FD\u96C6\u6210", "data-astro-cid-l2uad4wf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-container" data-astro-cid-l2uad4wf> <div class="flex justify-between items-center mb-6" data-astro-cid-l2uad4wf> <h2 data-astro-cid-l2uad4wf>🐍 Python 功能集成</h2> <div id="service-status" class="status-badge checking" data-astro-cid-l2uad4wf>检查服务中...</div> </div> <div class="dashboard-grid" data-astro-cid-l2uad4wf> <!-- 服务概览 --> <div class="dashboard-card full-width" data-astro-cid-l2uad4wf> <h3 data-astro-cid-l2uad4wf>服务状态</h3> <p data-astro-cid-l2uad4wf>此模块连接到运行在端口 8000 的 FastAPI 服务，提供 AI 文本分析、SEO 优化建议和内容质量检测。</p> <div class="api-info mt-4" data-astro-cid-l2uad4wf> <code data-astro-cid-l2uad4wf>API Endpoint: http://localhost:8000</code> </div> </div> <!-- 功能测试 --> <div class="dashboard-card" data-astro-cid-l2uad4wf> <h3 data-astro-cid-l2uad4wf>情感分析测试</h3> <textarea id="analysis-text" class="form-input mb-4" rows="3" placeholder="输入一段文字进行情感分析..." data-astro-cid-l2uad4wf></textarea> <button id="test-analysis-btn" class="admin-btn" data-astro-cid-l2uad4wf>开始分析</button> <div id="analysis-result" class="result-box mt-4 hidden" data-astro-cid-l2uad4wf></div> </div> <div class="dashboard-card" data-astro-cid-l2uad4wf> <h3 data-astro-cid-l2uad4wf>内容优化建议</h3> <p class="text-gray-600 mb-4" data-astro-cid-l2uad4wf>自动检测文章的关键词密度、阅读难度和 SEO 评分。</p> <button class="admin-btn admin-btn-secondary" disabled data-astro-cid-l2uad4wf>前往编辑器使用</button> </div> </div> </div> ${renderScript($$result2, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/python-integration.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/python-integration.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/python-integration.astro";
const $$url = "/admin/python-integration/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PythonIntegration,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
