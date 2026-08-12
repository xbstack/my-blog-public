import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CVKVJgiO.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_Bid3_Fbn.mjs';
/* empty css                                         */
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "\u65B0\u5EFA\u6587\u7AE0", "data-astro-cid-wgyxkl7j": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="admin-container" data-astro-cid-wgyxkl7j> <h2 data-astro-cid-wgyxkl7j>\u65B0\u5EFA\u6587\u7AE0</h2> <form id="create-article-form" class="edit-form" data-astro-cid-wgyxkl7j> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="title" data-astro-cid-wgyxkl7j>\u6807\u9898 *</label> <input type="text" id="title" name="title" required placeholder="\u6587\u7AE0\u6807\u9898" data-astro-cid-wgyxkl7j> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="slug" data-astro-cid-wgyxkl7j>URL\u8DEF\u5F84 *</label> <input type="text" id="slug" name="slug" required placeholder="url-path (\u4F7F\u7528\u82F1\u6587\u548C\u8FDE\u5B57\u7B26)" data-astro-cid-wgyxkl7j> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="description" data-astro-cid-wgyxkl7j>\u6458\u8981</label> <textarea id="description" name="description" rows="3" placeholder="\u6587\u7AE0\u6458\u8981\u6216\u7B80\u4ECB" data-astro-cid-wgyxkl7j></textarea> </div> <div class="form-row" data-astro-cid-wgyxkl7j> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="status" data-astro-cid-wgyxkl7j>\u72B6\u6001</label> <select id="status" name="status" data-astro-cid-wgyxkl7j> <option value="draft" data-astro-cid-wgyxkl7j>\u8349\u7A3F</option> <option value="published" data-astro-cid-wgyxkl7j>\u5DF2\u53D1\u5E03</option> <option value="archived" data-astro-cid-wgyxkl7j>\u5F52\u6863</option> </select> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="author" data-astro-cid-wgyxkl7j>\u4F5C\u8005</label> <input type="text" id="author" name="author" value="\u5C0F\u767D" data-astro-cid-wgyxkl7j> </div> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="categories" data-astro-cid-wgyxkl7j>\u5206\u7C7B</label> <input type="text" id="categories" name="categories" placeholder="\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5206\u7C7B" data-astro-cid-wgyxkl7j> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="tags" data-astro-cid-wgyxkl7j>\u6807\u7B7E</label> <input type="text" id="tags" name="tags" placeholder="\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u6807\u7B7E" data-astro-cid-wgyxkl7j> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="featuredImg" data-astro-cid-wgyxkl7j>\u5C01\u9762\u56FE\u7247</label> <input type="text" id="featuredImg" name="featuredImg" placeholder="\u56FE\u7247\u8DEF\u5F84\uFF0C\u5982: /assets/uploads/image.jpg" data-astro-cid-wgyxkl7j> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="createdAt" data-astro-cid-wgyxkl7j>\u53D1\u5E03\u65F6\u95F4</label> <input type="datetime-local" id="createdAt" name="createdAt" data-astro-cid-wgyxkl7j> </div> <div class="form-group checkbox-group" data-astro-cid-wgyxkl7j> <label data-astro-cid-wgyxkl7j> <input type="checkbox" name="featured" data-astro-cid-wgyxkl7j>\n\u8BBE\u4E3A\u7279\u8272\u6587\u7AE0\n</label> </div> <div class="form-group checkbox-group" data-astro-cid-wgyxkl7j> <label data-astro-cid-wgyxkl7j> <input type="checkbox" name="recommended" data-astro-cid-wgyxkl7j>\n\u8BBE\u4E3A\u63A8\u8350\u6587\u7AE0\n</label> </div> <div class="form-group checkbox-group" data-astro-cid-wgyxkl7j> <label data-astro-cid-wgyxkl7j> <input type="checkbox" name="hideToc" data-astro-cid-wgyxkl7j>\n\u9690\u85CF\u76EE\u5F55\n</label> </div> <div class="form-group" data-astro-cid-wgyxkl7j> <label for="content" data-astro-cid-wgyxkl7j>\u5185\u5BB9 *</label> <input type="hidden" id="content" name="content" data-astro-cid-wgyxkl7j> ', ` </div> <div class="form-actions" data-astro-cid-wgyxkl7j> <button type="submit" class="admin-btn" data-astro-cid-wgyxkl7j>\u521B\u5EFA\u6587\u7AE0</button> <a href="/admin/content" class="admin-btn admin-btn-secondary" data-astro-cid-wgyxkl7j>\u53D6\u6D88</a> </div> </form> </div> <script>
    document.getElementById('create-article-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const articleData = Object.fromEntries(formData);
      
      // \u786E\u4FDD content \u5B57\u6BB5\u6709\u503C
      const contentInput = document.getElementById('content');
      if (contentInput) {
        articleData.content = contentInput.value;
      }
      
      // \u5904\u7406\u5206\u7C7B\u548C\u6807\u7B7E\uFF08\u8F6C\u6362\u4E3A\u6570\u7EC4\uFF09
      articleData.categories = articleData.categories ? articleData.categories.split(',').map(c => c.trim()).filter(c => c) : [];
      articleData.tags = articleData.tags ? articleData.tags.split(',').map(t => t.trim()).filter(t => t) : [];
      
      // \u5904\u7406\u590D\u9009\u6846
      articleData.featured = formData.get('featured') === 'on';
      articleData.recommended = formData.get('recommended') === 'on';
      articleData.hideToc = formData.get('hideToc') === 'on';
      
      // \u5904\u7406\u65E5\u671F\u65F6\u95F4
      if (articleData.createdAt) {
        articleData.createdAt = new Date(articleData.createdAt).toISOString();
      } else if (articleData.status === 'published') {
        articleData.createdAt = new Date().toISOString();
      }
      
      // \u8BBE\u7F6E\u8349\u7A3F\u72B6\u6001
      articleData.draft = articleData.status === 'draft';
      
      try {
        const response = await fetch('/api/content/blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(articleData)
        });
        
        if (response.ok) {
          await response.json();
          alert('\u6587\u7AE0\u521B\u5EFA\u6210\u529F\uFF01');
          window.location.href = '/admin/content';
        } else {
          const error = await response.json();
          alert('\u521B\u5EFA\u5931\u8D25: ' + error.error);
        }
      } catch (error) {
        console.error('\u521B\u5EFA\u6587\u7AE0\u65F6\u51FA\u9519:', error);
        alert('\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u63A7\u5236\u53F0\u9519\u8BEF\u4FE1\u606F');
      }
    });
  <\/script>  `])), maybeRenderHead(), renderComponent($$result2, "MarkdownEditor", null, { "client:only": "react", "value": "", "inputId": "content", "client:component-hydration": "only", "data-astro-cid-wgyxkl7j": true, "client:component-path": "@features/content-editor/components/EnhancedMarkdownEditorWithPreview.jsx", "client:component-export": "default" })) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/content/create/blog.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/content/create/blog.astro";
const $$url = "/admin/content/create/blog/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
