import { exec } from 'node:child_process';
import { promisify } from 'node:util';
export { renderers } from '../../renderers.mjs';

const execPromise = promisify(exec);
const prerender = false;
const POST = async () => {
  try {
    const { stdout, stderr } = await execPromise('bash scripts/publish.sh "Admin Dashboard Triggered Sync"');
    return new Response(JSON.stringify({
      success: true,
      log: stdout,
      error: stderr
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      success: false,
      error: String(e)
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
