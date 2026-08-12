import { slug } from 'github-slugger';
import { marked } from 'marked';

marked.use({
  mangle: false,
  headerIds: false,
  // 启用标题ID，便于目录跳转
  gfm: true,
  // 启用GitHub风格的Markdown
  breaks: true,
  // 支持换行符转换为<br>
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
const renderer = new marked.Renderer();
renderer.heading = function(text, level) {
  const escapedText = slug(text);
  return `<h${level} id="${escapedText}">
    <a href="#${escapedText}" class="anchor-link">${text}</a>
  </h${level}>`;
};
renderer.code = function(code, language) {
  const validLang = language && language !== "" ? language : "text";
  return `<div class="code-block-wrapper">
    <div class="code-block-header">
      <span class="code-language">${validLang}</span>
      <button class="copy-code-btn" onclick="copyCode(this)" title="复制代码">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
    <pre><code class="language-${validLang}">${code}</code></pre>
  </div>`;
};
renderer.table = function(header, body) {
  return `<div class="table-wrapper">
    <table class="markdown-table">
      <thead>${header}</thead>
      <tbody>${body}</tbody>
    </table>
  </div>`;
};
renderer.link = function(href, title, text) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  const titleAttr = title ? ` title="${title}"` : "";
  return `<a href="${href}"${titleAttr}${target}>${text}</a>`;
};
renderer.image = function(href, title, text) {
  const titleAttr = title ? ` title="${title}"` : "";
  return `<figure class="markdown-image">
    <img src="${href}" alt="${text}"${titleAttr} loading="lazy" class="responsive-image" />
    ${text ? `<figcaption>${text}</figcaption>` : ""}
  </figure>`;
};
renderer.blockquote = function(quote) {
  return `<blockquote class="markdown-blockquote">${quote}</blockquote>`;
};
marked.setOptions({ renderer });
const slugify = (content) => {
  if (!content) return "";
  return slug(content.toString());
};
const markdownify = async (content, div) => {
  const options = { renderer };
  return div ? marked.parse(content, options) : marked.parseInline(content, options);
};
const upperHumanize = (content) => {
  if (!content) return "";
  return content.toLowerCase().replace(/-/g, " ").replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
};

export { markdownify as m, slugify as s, upperHumanize as u };
