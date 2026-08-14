export { renderers } from '../../../../renderers.mjs';

const POST = async ({ request }) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6e4);
  try {
    const body = await request.json();
    const ticker = body.ticker;
    const pythonApiUrl = (undefined                               || "http://blog-python-api:8000") + "/api/finance/audit";
    console.log(`[Finance Bridge] Requesting: ${pythonApiUrl} for ${ticker}`);
    const response = await fetch(pythonApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticker }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      return new Response(JSON.stringify({
        success: false,
        error: `后端服务响应异常: ${response.status} ${response.statusText}`
      }), { status: 200, headers: { "Content-Type": "application/json" } });
    }
    const text = await response.text();
    if (!text) {
      throw new Error("Python 节点返回了空响应");
    }
    const data = JSON.parse(text);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    clearTimeout(timeoutId);
    console.error("Finance Bridge Error:", error.message);
    let errorMsg = `通信异常: ${error.message}`;
    if (error.name === "AbortError") errorMsg = "后端计算节点响应超时，大数据量分析中，请稍后刷新重试";
    return new Response(JSON.stringify({
      success: false,
      error: errorMsg
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
