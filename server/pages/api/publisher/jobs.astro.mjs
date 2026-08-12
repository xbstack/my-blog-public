import { p as parsePublisherMarkdown, b as buildPublisherPreview } from '../../../chunks/markdown_DRfC83uz.mjs';
import { r as readPublisherJobs, c as createPublisherJob } from '../../../chunks/storage_cIafyEQG.mjs';
import { a as resumePendingPublisherI18nJobs } from '../../../chunks/pipeline_DFB3LFP5.mjs';
import { P as PLATFORM_REGISTRY } from '../../../chunks/types_SOVn2iN6.mjs';
export { renderers } from '../../../renderers.mjs';

const ALL_PLATFORMS = new Set(PLATFORM_REGISTRY.map((platform) => platform.id));
const GET = async () => {
  resumePendingPublisherI18nJobs();
  return json({ success: true, data: readPublisherJobs() });
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const platforms = Array.isArray(body.platforms) && body.platforms.length ? body.platforms.filter((item) => typeof item === "string" && ALL_PLATFORMS.has(item)) : ["wechat"];
    const article = body.article || parsePublisherMarkdown({ markdown: String(body.markdown || ""), source: body.source || "manual" });
    const preview = buildPublisherPreview(article, platforms);
    const job = createPublisherJob({
      title: preview.article.title,
      article: preview.article,
      platforms,
      theme: body.theme || "default"
    });
    return json({ success: true, data: job });
  } catch (error) {
    return json({ success: false, error: error instanceof Error ? error.message : String(error) }, 500);
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
