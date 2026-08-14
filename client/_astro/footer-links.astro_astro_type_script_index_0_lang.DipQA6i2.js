import{a as i}from"./adminApi.CaNzUij4.js";let a=[];async function s(){const t=await i.safeGet("/api/config/footer-links");t&&(a=t,o())}function o(){const t=document.getElementById("links-table-body");t&&(t.innerHTML=a.map((e,n)=>`
        <tr class="group border-b border-white/5 hover:bg-white/5 transition-colors">
          <td class="py-4 px-4">
            <input type="text" value="${e.icon}" onchange="(window as any).updateLink(${n}, 'icon', this.value)" 
              class="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white w-12 text-center" />
          </td>
          <td class="py-4 px-4">
            <input type="text" value="${e.label}" onchange="(window as any).updateLink(${n}, 'label', this.value)" 
              class="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white w-full" />
          </td>
          <td class="py-4 px-4">
            <input type="text" value="${e.url}" onchange="(window as any).updateLink(${n}, 'url', this.value)" 
              class="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-sky-400 w-full font-mono" />
          </td>
          <td class="py-4 px-4">
            <input type="checkbox" ${e.isExternal?"checked":""} onchange="(window as any).updateLink(${n}, 'isExternal', this.checked)" 
              class="w-4 h-4 rounded border-white/10 bg-black/40 text-orange-500" />
          </td>
          <td class="py-4 px-4 text-right">
            <button onclick="(window as any).removeLink(${n})" class="text-slate-600 hover:text-red-500 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </td>
        </tr>
      `).join(""))}window.updateLink=(t,e,n)=>{a[t][e]=n};window.removeLink=async t=>{await window.adminConfirm("删除友链","确定删除此链接吗？","删除")&&(a.splice(t,1),o())};document.getElementById("add-link-btn")?.addEventListener("click",()=>{a.push({label:"新友链",url:"https://",icon:"🔗",isExternal:!0}),o()});document.getElementById("save-btn")?.addEventListener("click",async()=>{const t=document.getElementById("save-btn"),e=t.innerHTML;t.innerHTML="正在保存...",t.disabled=!0,await i.safePost("/api/config/footer-links",a,"友链配置已保存"),t.innerHTML=e,t.disabled=!1});s();
