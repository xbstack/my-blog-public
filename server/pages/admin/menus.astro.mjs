import { c as createComponent, a as renderComponent, r as renderTemplate, f as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DUrOWMw0.mjs';
import fs from 'fs';
import path from 'path';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Menus = createComponent(async ($$result, $$props, $$slots) => {
  const MENUS_FILE = path.join(process.cwd(), "src", "data", "menus.json");
  let initialMenus = { header: [], footer: [] };
  if (fs.existsSync(MENUS_FILE)) {
    try {
      const fileContent = fs.readFileSync(MENUS_FILE, "utf-8");
      if (fileContent.trim()) {
        initialMenus = JSON.parse(fileContent);
      }
    } catch (e) {
      console.error("Error loading menus.json:", e);
    }
  }
  if (!initialMenus.header) initialMenus.header = [];
  if (!initialMenus.footer) initialMenus.footer = [];
  if (!initialMenus.footerInfo) {
    initialMenus.footerInfo = {
      copyrightName: "XBSTACK",
      copyrightUrl: "/",
      beianText: "",
      beianUrl: "#"
    };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "\u5BFC\u822A\u4F53\u7CFB\u7BA1\u7406", "data-astro-cid-7wtbhw3h": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="max-w-7xl mx-auto space-y-12 bg-slate-900" data-astro-cid-7wtbhw3h>  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-fadeUp" data-astro-cid-7wtbhw3h> <div data-astro-cid-7wtbhw3h> <div class="flex items-center gap-3 mb-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-sky-500 rounded-full" data-astro-cid-7wtbhw3h></span> <span class="text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest" data-astro-cid-7wtbhw3h>\u62D3\u6251\u7ED3\u6784\u63A7\u5236</span> </div> <h2 class="text-3xl font-black text-white italic tracking-tighter uppercase" data-astro-cid-7wtbhw3h>\u83DC\u5355\u67B6\u6784\u7BA1\u7406</h2> </div> <button id="save-menus-btn" class="group relative px-10 py-4 rounded-3xl bg-orange-600 text-white font-bold text-xs tracking-widest uppercase transition-all hover:scale-105 hover:shadow-xl shadow-orange-600/20 overflow-hidden" data-astro-cid-7wtbhw3h> <span class="relative z-10" data-astro-cid-7wtbhw3h>\u6267\u884C\u5168\u7AD9\u540C\u6B65</span> <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-7wtbhw3h></div> </button> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10" data-astro-cid-7wtbhw3h> <!-- \u9876\u90E8\u4E3B\u5BFC\u822A (Header) --> <section class="p-8 rounded-[40px] bg-slate-800 border border-white/5 shadow-2xl animate-fadeUp [animation-delay:100ms]" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-10 pb-6 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xs font-black text-sky-500 uppercase tracking-widest italic flex items-center gap-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-sky-500 rounded-full" data-astro-cid-7wtbhw3h></span>
\u9876\u90E8\u4E3B\u5BFC\u822A
</h3> <button onclick="window.addMenuItem('header')" class="px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-sky-600 hover:text-white transition-all" data-astro-cid-7wtbhw3h>+ \u65B0\u589E\u4E00\u7EA7\u83DC\u5355</button> </header> <div id="header-menu-list" class="space-y-4" data-astro-cid-7wtbhw3h></div> </section> <!-- \u5E95\u90E8\u77E9\u9635 (Footer) --> <section class="space-y-8 animate-fadeUp [animation-delay:200ms]" data-astro-cid-7wtbhw3h> <div class="p-8 rounded-[40px] bg-slate-800 border border-white/5 shadow-2xl overflow-hidden relative group" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-10 pb-6 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xs font-black text-orange-500 uppercase tracking-widest italic flex items-center gap-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-orange-500 rounded-full" data-astro-cid-7wtbhw3h></span>
\u5E95\u90E8\u77E9\u9635\u94FE\u63A5
</h3> <button onclick="window.addMenuItem('footer')" class="px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-orange-600 hover:text-white transition-all" data-astro-cid-7wtbhw3h>+ \u65B0\u589E\u5E95\u90E8\u94FE\u63A5</button> </header> <div id="footer-menu-list" class="space-y-4 mb-12" data-astro-cid-7wtbhw3h></div> <div class="pt-8 border-t border-white/5 space-y-6" data-astro-cid-7wtbhw3h> <h4 class="text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest" data-astro-cid-7wtbhw3h>\u9875\u811A\u5143\u6570\u636E\u914D\u7F6E</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-7wtbhw3h> <input type="text" id="footer-copyright-name" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-[11px] font-bold text-white outline-none focus:border-orange-500 transition-all" placeholder="\u7248\u6743\u6240\u6709\u8005\u540D\u79F0" oninput="window.updateFooterInfo('copyrightName', this.value)" data-astro-cid-7wtbhw3h> <input type="text" id="footer-copyright-url" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-[11px] font-bold text-white outline-none focus:border-orange-500 transition-all" placeholder="\u7248\u6743\u8DF3\u8F6C URL" oninput="window.updateFooterInfo('copyrightUrl', this.value)" data-astro-cid-7wtbhw3h> </div> </div> </div> </section> </div> </div> <div id="link-selector-modal" class="modal hidden fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl transition-all duration-500" data-astro-cid-7wtbhw3h> <div class="w-full max-w-xl p-10 rounded-[50px] bg-slate-900 border border-slate-200 dark:border-white/10 shadow-3xl overflow-hidden relative" data-astro-cid-7wtbhw3h> <div class="relative z-10 flex flex-col h-[60vh]" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-8 pb-4 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xl font-black text-white italic tracking-tighter uppercase" data-astro-cid-7wtbhw3h>\u9009\u62E9\u5185\u5BB9\u76EE\u6807</h3> <button class="text-slate-700 dark:text-slate-500 hover:text-white transition-colors" id="close-link-modal-btn" data-astro-cid-7wtbhw3h>\u5173\u95ED [\xD7]</button> </header> <input type="text" id="link-search-input" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm font-bold text-white mb-6 outline-none focus:border-sky-500" placeholder="\u641C\u7D22\u9875\u9762\u3001\u6587\u7AE0\u6216\u5206\u7C7B\u8DEF\u5F84..." data-astro-cid-7wtbhw3h> <div id="link-options-container" class="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2" data-astro-cid-7wtbhw3h></div> </div> </div> </div> <script>(function(){`, `
    import { adminApi } from '@lib/adminApi';
    let menus = JSON.parse(JSON.stringify(initialMenus));
    let expandedItem = null;
    let linkOptions = [];
    let currentEditingItem = null;

    function render() {
        renderList('header', menus.header);
        renderList('footer', menus.footer);
        const fi = menus.footerInfo || {};
        const setV = (id, v) => { const el = document.getElementById(id); if(el) el.value = v || ''; };
        setV('footer-copyright-name', fi.copyrightName); setV('footer-copyright-url', fi.copyrightUrl);
    }

    function renderList(type, items) {
        const container = document.getElementById(\`\${type}-menu-list\`);
        if (!container) return;
        if (!items || items.length === 0) {
            container.innerHTML = \`<div class="p-10 text-center rounded-[30px] border border-dashed border-white/5 text-[10px] font-bold text-slate-600 uppercase italic">\u7B49\u5F85\u521D\u59CB\u5316\u9996\u4E2A\u8282\u70B9...</div>\`;
            return;
        }

        container.innerHTML = items.map((item, index) => {
            const isExpanded = expandedItem && expandedItem.type === type && expandedItem.index === index;
            const subHtml = isExpanded ? \`
                <div class="mt-4 ml-10 p-6 rounded-[30px] bg-black/20 border border-white/5 space-y-3 animate-fadeUp">
                    \${item.children.length === 0 ? '<div class="text-[9px] font-bold text-slate-600 uppercase italic">\u6682\u65E0\u5B50\u83DC\u5355\u8282\u70B9</div>' : 
                        item.children.map((child, cIndex) => \`
                        <div class="flex items-center gap-3 group/sub">
                            <span class="text-sky-500 font-mono text-xs">\u21B3</span>
                            <input type="text" class="bg-transparent border-b border-white/5 text-[11px] font-black text-white outline-none w-24 focus:border-sky-500 transition-all" value="\${child.name}" oninput="window.updateChildItem(this, '\${type}', \${index}, \${cIndex}, 'name', this.value)">
                            <div class="flex-1 h-px bg-slate-100 dark:bg-white/5"></div>
                            <input type="text" class="bg-transparent border-b border-white/5 text-[10px] font-mono text-slate-700 dark:text-slate-500 outline-none w-32" value="\${child.url}" oninput="window.updateChildItem(this, '\${type}', \${index}, \${cIndex}, 'url', this.value)">
                            <button class="text-rose-500 opacity-30 hover:opacity-100 transition-all" onclick="window.deleteChildItem('\${type}', \${index}, \${cIndex})">\u5220\u9664</button>
                        </div>
                    \`).join('')}
                    <button class="mt-4 text-[9px] font-black text-sky-500 uppercase tracking-widest hover:text-white transition-all" onclick="window.addChildItem('\${type}', \${index})">+ \u6302\u8F7D\u5B50\u8282\u70B9 (Sub-Node)</button>
                </div>
            \` : '';

            return \`
            <div class="group/item relative p-5 rounded-[25px] bg-slate-900/50 border border-white/5 hover:bg-slate-700/30 transition-all duration-500">
                <div class="flex items-center gap-4">
                    <div class="drag-handle cursor-move opacity-20 group-hover/item:opacity-100 text-xs">\u2630</div>
                    <input type="text" class="bg-transparent border-none text-sm font-black text-white uppercase tracking-widest w-32 outline-none focus:text-orange-500 transition-colors" value="\${item.name}" oninput="window.updateItem(this, '\${type}', \${index}, 'name', this.value)">
                    <div class="flex-1 h-px bg-slate-100 dark:bg-white/5"></div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.openLinkSelector('\${type}', \${index})" class="px-3 py-1.5 rounded-lg bg-slate-950 text-[9px] font-black text-slate-700 dark:text-slate-500 hover:text-white transition-all border border-white/5">\u94FE\u63A5</button>
                        <button onclick="window.toggleChildren('\${type}', \${index})" class="px-3 py-1.5 rounded-lg bg-slate-950 text-[9px] font-black \${isExpanded ? 'text-orange-500 border-orange-500/30' : 'text-slate-700 dark:text-slate-500 border-white/5'} hover:text-white transition-all border">
                            \${isExpanded ? '\u5173\u95ED\u7BA1\u7406' : \`\u5B50\u83DC\u5355 (\${item.children.length})\`}
                        </button>
                        <button onclick="window.deleteItem('\${type}', \${index})" class="p-2 text-rose-500 opacity-20 hover:opacity-100 transition-all">\u5220\u9664</button>
                    </div>
                </div>
                \${subHtml}
            </div>
            \`;
        }).join('');
    }

    // \u5168\u5C40\u51FD\u6570\u6865\u63A5
    window.addMenuItem = (t) => { menus[t].push({ name: '\u65B0\u83DC\u5355\u9879', url: '/', children: [] }); render(); };
    window.addChildItem = (t, i) => { menus[t][i].children.push({ name: '\u5B50\u9879', url: '/' }); render(); };
    window.deleteItem = async (t, i) => { if(await window.adminConfirm('\u786E\u8BA4\u5220\u9664\u8BE5\u8282\u70B9\u53CA\u5176\u5B50\u96C6\uFF1F')) { menus[t].splice(i, 1); render(); } };
    window.deleteChildItem = (t, i, ci) => { menus[t][i].children.splice(ci, 1); render(); };
    window.toggleChildren = (t, i) => { if(expandedItem?.index === i) expandedItem = null; else expandedItem = { type: t, index: i }; render(); };
    window.updateItem = (_el, t, i, f, v) => { menus[t][i][f] = v; };
    window.updateChildItem = (_el, t, i, ci, f, v) => { menus[t][i].children[ci][f] = v; };
    window.updateFooterInfo = (f, v) => { menus.footerInfo = menus.footerInfo || {}; menus.footerInfo[f] = v; };

    // --- \u94FE\u63A5\u9009\u62E9\u5668 ---
    window.openLinkSelector = async (t, i, ci = null) => {
        currentEditingItem = { t, i, ci };
        document.getElementById('link-selector-modal').classList.remove('hidden');
        if (linkOptions.length === 0) {
            linkOptions = await adminApi.get('/api/link-options');
        }
        renderLinkOptions();
    };

    function renderLinkOptions(filter = '') {
        const cont = document.getElementById('link-options-container');
        const f = filter.toLowerCase();
        let h = '';
        linkOptions.forEach(g => {
            const opts = g.options.filter(o => o.label.toLowerCase().includes(f) || o.value.toLowerCase().includes(f));
            if (opts.length > 0) {
                h += \`<div class="pb-4"><div class="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3 px-2">\${g.label}</div>\`;
                h += opts.map(o => \`<div onclick="window.selectLink('\${o.value}', '\${o.label}')" class="p-3 rounded-2xl hover:bg-sky-500/10 border border-transparent hover:border-sky-500/30 cursor-pointer flex justify-between items-center group/opt">
                    <span class="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover/opt:text-white">\${o.label}</span>
                    <span class="text-[9px] font-mono text-slate-600">\${o.value}</span>
                </div>\`).join('');
                h += \`</div>\`;
            }
        });
        cont.innerHTML = h || '<div class="text-center py-8 text-slate-600">\u672A\u627E\u5230\u5339\u914D\u76EE\u6807</div>';
    }

    window.selectLink = (url, _label) => {
        const { t, i, ci } = currentEditingItem;
        if (ci !== null) menus[t][i].children[ci].url = url;
        else menus[t][i].url = url;
        render();
        document.getElementById('link-selector-modal').classList.add('hidden');
    };

    // \u4FDD\u5B58
    document.getElementById('save-menus-btn').addEventListener('click', async () => {
        const result = await adminApi.safePost('/api/menus', menus, '\u5BFC\u822A\u534F\u8BAE\u540C\u6B65\u6210\u529F');
        if (!result) window.showToast('\u4FDD\u5B58\u5931\u8D25', 'error');
    });

    document.getElementById('link-search-input').addEventListener('input', (e) => renderLinkOptions(e.target.value));
    document.getElementById('close-link-modal-btn').addEventListener('click', () => document.getElementById('link-selector-modal').classList.add('hidden'));

    render();
  })();<\/script>  `], [" ", `<div class="max-w-7xl mx-auto space-y-12 bg-slate-900" data-astro-cid-7wtbhw3h>  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-fadeUp" data-astro-cid-7wtbhw3h> <div data-astro-cid-7wtbhw3h> <div class="flex items-center gap-3 mb-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-sky-500 rounded-full" data-astro-cid-7wtbhw3h></span> <span class="text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest" data-astro-cid-7wtbhw3h>\u62D3\u6251\u7ED3\u6784\u63A7\u5236</span> </div> <h2 class="text-3xl font-black text-white italic tracking-tighter uppercase" data-astro-cid-7wtbhw3h>\u83DC\u5355\u67B6\u6784\u7BA1\u7406</h2> </div> <button id="save-menus-btn" class="group relative px-10 py-4 rounded-3xl bg-orange-600 text-white font-bold text-xs tracking-widest uppercase transition-all hover:scale-105 hover:shadow-xl shadow-orange-600/20 overflow-hidden" data-astro-cid-7wtbhw3h> <span class="relative z-10" data-astro-cid-7wtbhw3h>\u6267\u884C\u5168\u7AD9\u540C\u6B65</span> <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-7wtbhw3h></div> </button> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10" data-astro-cid-7wtbhw3h> <!-- \u9876\u90E8\u4E3B\u5BFC\u822A (Header) --> <section class="p-8 rounded-[40px] bg-slate-800 border border-white/5 shadow-2xl animate-fadeUp [animation-delay:100ms]" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-10 pb-6 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xs font-black text-sky-500 uppercase tracking-widest italic flex items-center gap-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-sky-500 rounded-full" data-astro-cid-7wtbhw3h></span>
\u9876\u90E8\u4E3B\u5BFC\u822A
</h3> <button onclick="window.addMenuItem('header')" class="px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-sky-600 hover:text-white transition-all" data-astro-cid-7wtbhw3h>+ \u65B0\u589E\u4E00\u7EA7\u83DC\u5355</button> </header> <div id="header-menu-list" class="space-y-4" data-astro-cid-7wtbhw3h></div> </section> <!-- \u5E95\u90E8\u77E9\u9635 (Footer) --> <section class="space-y-8 animate-fadeUp [animation-delay:200ms]" data-astro-cid-7wtbhw3h> <div class="p-8 rounded-[40px] bg-slate-800 border border-white/5 shadow-2xl overflow-hidden relative group" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-10 pb-6 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xs font-black text-orange-500 uppercase tracking-widest italic flex items-center gap-2" data-astro-cid-7wtbhw3h> <span class="w-1.5 h-4 bg-orange-500 rounded-full" data-astro-cid-7wtbhw3h></span>
\u5E95\u90E8\u77E9\u9635\u94FE\u63A5
</h3> <button onclick="window.addMenuItem('footer')" class="px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-orange-600 hover:text-white transition-all" data-astro-cid-7wtbhw3h>+ \u65B0\u589E\u5E95\u90E8\u94FE\u63A5</button> </header> <div id="footer-menu-list" class="space-y-4 mb-12" data-astro-cid-7wtbhw3h></div> <div class="pt-8 border-t border-white/5 space-y-6" data-astro-cid-7wtbhw3h> <h4 class="text-[10px] font-black text-slate-700 dark:text-slate-500 uppercase tracking-widest" data-astro-cid-7wtbhw3h>\u9875\u811A\u5143\u6570\u636E\u914D\u7F6E</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-7wtbhw3h> <input type="text" id="footer-copyright-name" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-[11px] font-bold text-white outline-none focus:border-orange-500 transition-all" placeholder="\u7248\u6743\u6240\u6709\u8005\u540D\u79F0" oninput="window.updateFooterInfo('copyrightName', this.value)" data-astro-cid-7wtbhw3h> <input type="text" id="footer-copyright-url" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-[11px] font-bold text-white outline-none focus:border-orange-500 transition-all" placeholder="\u7248\u6743\u8DF3\u8F6C URL" oninput="window.updateFooterInfo('copyrightUrl', this.value)" data-astro-cid-7wtbhw3h> </div> </div> </div> </section> </div> </div> <div id="link-selector-modal" class="modal hidden fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl transition-all duration-500" data-astro-cid-7wtbhw3h> <div class="w-full max-w-xl p-10 rounded-[50px] bg-slate-900 border border-slate-200 dark:border-white/10 shadow-3xl overflow-hidden relative" data-astro-cid-7wtbhw3h> <div class="relative z-10 flex flex-col h-[60vh]" data-astro-cid-7wtbhw3h> <header class="flex justify-between items-center mb-8 pb-4 border-b border-white/5" data-astro-cid-7wtbhw3h> <h3 class="text-xl font-black text-white italic tracking-tighter uppercase" data-astro-cid-7wtbhw3h>\u9009\u62E9\u5185\u5BB9\u76EE\u6807</h3> <button class="text-slate-700 dark:text-slate-500 hover:text-white transition-colors" id="close-link-modal-btn" data-astro-cid-7wtbhw3h>\u5173\u95ED [\xD7]</button> </header> <input type="text" id="link-search-input" class="w-full bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm font-bold text-white mb-6 outline-none focus:border-sky-500" placeholder="\u641C\u7D22\u9875\u9762\u3001\u6587\u7AE0\u6216\u5206\u7C7B\u8DEF\u5F84..." data-astro-cid-7wtbhw3h> <div id="link-options-container" class="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2" data-astro-cid-7wtbhw3h></div> </div> </div> </div> <script>(function(){`, `
    import { adminApi } from '@lib/adminApi';
    let menus = JSON.parse(JSON.stringify(initialMenus));
    let expandedItem = null;
    let linkOptions = [];
    let currentEditingItem = null;

    function render() {
        renderList('header', menus.header);
        renderList('footer', menus.footer);
        const fi = menus.footerInfo || {};
        const setV = (id, v) => { const el = document.getElementById(id); if(el) el.value = v || ''; };
        setV('footer-copyright-name', fi.copyrightName); setV('footer-copyright-url', fi.copyrightUrl);
    }

    function renderList(type, items) {
        const container = document.getElementById(\\\`\\\${type}-menu-list\\\`);
        if (!container) return;
        if (!items || items.length === 0) {
            container.innerHTML = \\\`<div class="p-10 text-center rounded-[30px] border border-dashed border-white/5 text-[10px] font-bold text-slate-600 uppercase italic">\u7B49\u5F85\u521D\u59CB\u5316\u9996\u4E2A\u8282\u70B9...</div>\\\`;
            return;
        }

        container.innerHTML = items.map((item, index) => {
            const isExpanded = expandedItem && expandedItem.type === type && expandedItem.index === index;
            const subHtml = isExpanded ? \\\`
                <div class="mt-4 ml-10 p-6 rounded-[30px] bg-black/20 border border-white/5 space-y-3 animate-fadeUp">
                    \\\${item.children.length === 0 ? '<div class="text-[9px] font-bold text-slate-600 uppercase italic">\u6682\u65E0\u5B50\u83DC\u5355\u8282\u70B9</div>' : 
                        item.children.map((child, cIndex) => \\\`
                        <div class="flex items-center gap-3 group/sub">
                            <span class="text-sky-500 font-mono text-xs">\u21B3</span>
                            <input type="text" class="bg-transparent border-b border-white/5 text-[11px] font-black text-white outline-none w-24 focus:border-sky-500 transition-all" value="\\\${child.name}" oninput="window.updateChildItem(this, '\\\${type}', \\\${index}, \\\${cIndex}, 'name', this.value)">
                            <div class="flex-1 h-px bg-slate-100 dark:bg-white/5"></div>
                            <input type="text" class="bg-transparent border-b border-white/5 text-[10px] font-mono text-slate-700 dark:text-slate-500 outline-none w-32" value="\\\${child.url}" oninput="window.updateChildItem(this, '\\\${type}', \\\${index}, \\\${cIndex}, 'url', this.value)">
                            <button class="text-rose-500 opacity-30 hover:opacity-100 transition-all" onclick="window.deleteChildItem('\\\${type}', \\\${index}, \\\${cIndex})">\u5220\u9664</button>
                        </div>
                    \\\`).join('')}
                    <button class="mt-4 text-[9px] font-black text-sky-500 uppercase tracking-widest hover:text-white transition-all" onclick="window.addChildItem('\\\${type}', \\\${index})">+ \u6302\u8F7D\u5B50\u8282\u70B9 (Sub-Node)</button>
                </div>
            \\\` : '';

            return \\\`
            <div class="group/item relative p-5 rounded-[25px] bg-slate-900/50 border border-white/5 hover:bg-slate-700/30 transition-all duration-500">
                <div class="flex items-center gap-4">
                    <div class="drag-handle cursor-move opacity-20 group-hover/item:opacity-100 text-xs">\u2630</div>
                    <input type="text" class="bg-transparent border-none text-sm font-black text-white uppercase tracking-widest w-32 outline-none focus:text-orange-500 transition-colors" value="\\\${item.name}" oninput="window.updateItem(this, '\\\${type}', \\\${index}, 'name', this.value)">
                    <div class="flex-1 h-px bg-slate-100 dark:bg-white/5"></div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.openLinkSelector('\\\${type}', \\\${index})" class="px-3 py-1.5 rounded-lg bg-slate-950 text-[9px] font-black text-slate-700 dark:text-slate-500 hover:text-white transition-all border border-white/5">\u94FE\u63A5</button>
                        <button onclick="window.toggleChildren('\\\${type}', \\\${index})" class="px-3 py-1.5 rounded-lg bg-slate-950 text-[9px] font-black \\\${isExpanded ? 'text-orange-500 border-orange-500/30' : 'text-slate-700 dark:text-slate-500 border-white/5'} hover:text-white transition-all border">
                            \\\${isExpanded ? '\u5173\u95ED\u7BA1\u7406' : \\\`\u5B50\u83DC\u5355 (\\\${item.children.length})\\\`}
                        </button>
                        <button onclick="window.deleteItem('\\\${type}', \\\${index})" class="p-2 text-rose-500 opacity-20 hover:opacity-100 transition-all">\u5220\u9664</button>
                    </div>
                </div>
                \\\${subHtml}
            </div>
            \\\`;
        }).join('');
    }

    // \u5168\u5C40\u51FD\u6570\u6865\u63A5
    window.addMenuItem = (t) => { menus[t].push({ name: '\u65B0\u83DC\u5355\u9879', url: '/', children: [] }); render(); };
    window.addChildItem = (t, i) => { menus[t][i].children.push({ name: '\u5B50\u9879', url: '/' }); render(); };
    window.deleteItem = async (t, i) => { if(await window.adminConfirm('\u786E\u8BA4\u5220\u9664\u8BE5\u8282\u70B9\u53CA\u5176\u5B50\u96C6\uFF1F')) { menus[t].splice(i, 1); render(); } };
    window.deleteChildItem = (t, i, ci) => { menus[t][i].children.splice(ci, 1); render(); };
    window.toggleChildren = (t, i) => { if(expandedItem?.index === i) expandedItem = null; else expandedItem = { type: t, index: i }; render(); };
    window.updateItem = (_el, t, i, f, v) => { menus[t][i][f] = v; };
    window.updateChildItem = (_el, t, i, ci, f, v) => { menus[t][i].children[ci][f] = v; };
    window.updateFooterInfo = (f, v) => { menus.footerInfo = menus.footerInfo || {}; menus.footerInfo[f] = v; };

    // --- \u94FE\u63A5\u9009\u62E9\u5668 ---
    window.openLinkSelector = async (t, i, ci = null) => {
        currentEditingItem = { t, i, ci };
        document.getElementById('link-selector-modal').classList.remove('hidden');
        if (linkOptions.length === 0) {
            linkOptions = await adminApi.get('/api/link-options');
        }
        renderLinkOptions();
    };

    function renderLinkOptions(filter = '') {
        const cont = document.getElementById('link-options-container');
        const f = filter.toLowerCase();
        let h = '';
        linkOptions.forEach(g => {
            const opts = g.options.filter(o => o.label.toLowerCase().includes(f) || o.value.toLowerCase().includes(f));
            if (opts.length > 0) {
                h += \\\`<div class="pb-4"><div class="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3 px-2">\\\${g.label}</div>\\\`;
                h += opts.map(o => \\\`<div onclick="window.selectLink('\\\${o.value}', '\\\${o.label}')" class="p-3 rounded-2xl hover:bg-sky-500/10 border border-transparent hover:border-sky-500/30 cursor-pointer flex justify-between items-center group/opt">
                    <span class="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover/opt:text-white">\\\${o.label}</span>
                    <span class="text-[9px] font-mono text-slate-600">\\\${o.value}</span>
                </div>\\\`).join('');
                h += \\\`</div>\\\`;
            }
        });
        cont.innerHTML = h || '<div class="text-center py-8 text-slate-600">\u672A\u627E\u5230\u5339\u914D\u76EE\u6807</div>';
    }

    window.selectLink = (url, _label) => {
        const { t, i, ci } = currentEditingItem;
        if (ci !== null) menus[t][i].children[ci].url = url;
        else menus[t][i].url = url;
        render();
        document.getElementById('link-selector-modal').classList.add('hidden');
    };

    // \u4FDD\u5B58
    document.getElementById('save-menus-btn').addEventListener('click', async () => {
        const result = await adminApi.safePost('/api/menus', menus, '\u5BFC\u822A\u534F\u8BAE\u540C\u6B65\u6210\u529F');
        if (!result) window.showToast('\u4FDD\u5B58\u5931\u8D25', 'error');
    });

    document.getElementById('link-search-input').addEventListener('input', (e) => renderLinkOptions(e.target.value));
    document.getElementById('close-link-modal-btn').addEventListener('click', () => document.getElementById('link-selector-modal').classList.add('hidden'));

    render();
  })();<\/script>  `])), maybeRenderHead(), defineScriptVars({ initialMenus })) })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/menus.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/admin/menus.astro";
const $$url = "/admin/menus/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Menus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
