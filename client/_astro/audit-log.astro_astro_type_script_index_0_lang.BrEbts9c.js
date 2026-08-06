import{a as y}from"./adminApi.CaNzUij4.js";let s=0;const l=50;async function a(r=!1){r&&(s=0);const n=document.getElementById("log-container");n.innerHTML='<div class="text-center py-20 text-slate-500 text-xs font-bold uppercase tracking-widest">加载中...</div>';const o=new URLSearchParams({limit:String(l),offset:String(s*l)}),d=document.getElementById("filter-action").value,c=document.getElementById("filter-resource").value,p=document.getElementById("filter-search").value.trim();d&&o.set("action",d),c&&o.set("resource",c),p&&o.set("q",p);try{const e=await y.get(`/api/admin/audit-log?${o.toString()}`);if(!e.success){n.innerHTML=`<div class="text-center py-20 text-red-500 text-xs font-bold">${e.error}</div>`;return}const i=e.data;if(document.getElementById("stats-text").textContent=`共 ${e.total} 条 | 显示 ${e.offset+1}-${Math.min(e.offset+i.length,e.total)}`,i.length===0){n.innerHTML='<div class="text-center py-20 text-slate-500 text-xs font-bold uppercase tracking-widest">暂无审计日志</div>';return}n.innerHTML=i.map(t=>{const b=new Date(t.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),m={CREATE:"bg-green-500/10 text-green-400 border-green-500/20",UPDATE:"bg-blue-500/10 text-blue-400 border-blue-500/20",DELETE:"bg-red-500/10 text-red-400 border-red-500/20",LOGIN:"bg-cyan-500/10 text-cyan-400 border-cyan-500/20",LOGOUT:"bg-slate-500/10 text-slate-400 border-slate-500/20",DEPLOY:"bg-purple-500/10 text-purple-400 border-purple-500/20"}[t.action]||"bg-white/5 text-slate-300 border-white/10",f={auth:"认证",user:"用户",session:"会话",settings:"设置",menus:"菜单",social:"社交","ai-config":"AI配置",structure:"栏目","footer-links":"友链",affiliate:"变现",page:"页面",gallery:"光影",ads:"广告",seo:"SEO",deploy:"部署"};return`<div class="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-all">
          <span class="shrink-0 w-16 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-center border ${m}">${t.action}</span>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-black text-white">${g(t.user)}</span>
              <span class="text-[9px] text-slate-500">→</span>
              <span class="text-[9px] font-bold text-orange-400">${f[t.resource]||t.resource}</span>
              <span class="text-[10px] text-slate-400 ml-auto">${b}</span>
            </div>
            <p class="text-xs text-slate-400 mb-1">${g(t.detail)}</p>
            <div class="flex gap-3 text-[9px] text-slate-600">
              <span>${t.method} ${t.path}</span>
              <span>IP: ${t.ip}</span>
              <span>Status: ${t.statusCode}</span>
            </div>
          </div>
        </div>`}).join("");const u=document.getElementById("pagination"),x=Math.ceil(e.total/l);u.innerHTML=`
        <button class="px-4 py-2 rounded-lg bg-white/5 text-xs font-bold text-slate-400 disabled:opacity-30" ${s===0?"disabled":""} onclick="prevPage()">← 上一页</button>
        <span class="text-[10px] font-bold text-slate-500">${s+1} / ${x||1}</span>
        <button class="px-4 py-2 rounded-lg bg-white/5 text-xs font-bold text-slate-400 disabled:opacity-30" ${s>=x-1?"disabled":""} onclick="nextPage()">下一页 →</button>
      `}catch{n.innerHTML='<div class="text-center py-20 text-red-500 text-xs font-bold">加载失败: 无法连接服务器</div>'}}function g(r){const n=document.createElement("div");return n.textContent=r,n.innerHTML}window.prevPage=()=>{s>0&&(s--,a())};window.nextPage=()=>{s++,a()};document.getElementById("filter-action").addEventListener("change",()=>a(!0));document.getElementById("filter-resource").addEventListener("change",()=>a(!0));document.getElementById("filter-search").addEventListener("keydown",r=>{r.key==="Enter"&&a(!0)});document.getElementById("btn-refresh").addEventListener("click",()=>a(!0));a();
