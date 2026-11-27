// Cloudflare Pages Function, scoped exclusively to /news-sitemap.xml.
// Public feed contains only validated approved metadata, never the editorial ledger.
const SITE='https://www.xbstack.com';
const WINDOW=48*60*60*1000;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function renderNewsSitemap(records, now=Date.now()) {
  if(!Array.isArray(records)||!Number.isFinite(now)) throw Error('invalid manifest');
  const seen=new Set();
  const items=[];
  for(const r of records){
    if(!r || typeof r.route!=='string'||!/^\/(?:[a-z0-9-]+\/)+$/.test(r.route)||!['zh','en'].includes(r.language)||typeof r.title!=='string'||!r.title.trim()||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(r.publishedAt||'')||!Number.isFinite(Date.parse(r.publishedAt))) throw Error('invalid public entry');
    if(seen.has(r.route)) throw Error('duplicate route');
    seen.add(r.route);
    const age=now-Date.parse(r.publishedAt);
    if(age<0||age>=WINDOW)continue;
    items.push('<url><loc>'+esc(SITE+r.route)+'</loc><news:news><news:publication><news:name>XBSTACK</news:name><news:language>'+(r.language==='zh'?'zh-cn':'en')+'</news:language></news:publication><news:publication_date>'+esc(r.publishedAt)+'</news:publication_date><news:title>'+esc(r.title)+'</news:title></news:news></url>');
  }
  if(items.length>1000) throw Error('news sitemap limit exceeded');
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">'+items.join('\n')+'</urlset>\n';
}
export async function onRequest({request,env}) {
  if(!['GET','HEAD'].includes(request.method))return new Response(null,{status:405,headers:{Allow:'GET, HEAD'}});
  const headers={'Content-Type':'application/xml; charset=utf-8','Cache-Control':'no-store','CDN-Cache-Control':'no-store','Cloudflare-CDN-Cache-Control':'no-store'};
  try {
    const response=await env.ASSETS.fetch(new URL('/news-sitemap-data.json',request.url));
    if(!response.ok)throw Error('manifest unavailable');
    const data=await response.json();
    if(data.version!==1)throw Error('manifest version');
    const xml=renderNewsSitemap(data.entries);
    return new Response(request.method==='HEAD'?null:xml,{status:200,headers});
  }catch{
    return new Response(request.method==='HEAD'?null:'News sitemap temporarily unavailable',{status:503,headers:{...headers,'Content-Type':'text/plain; charset=utf-8','Retry-After':'300'}});
  }
}
