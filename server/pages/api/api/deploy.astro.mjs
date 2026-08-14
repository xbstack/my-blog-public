import { exec } from 'child_process';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const POST = async () => {
  return new Promise((resolve) => {
    const scriptPath = path.join(process.cwd(), "scripts", "publish.sh");
    console.log("Executing deploy script:", scriptPath);
    exec(`"${scriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Deploy error: ${error}`);
        resolve(new Response(JSON.stringify({
          success: false,
          error: error.message,
          details: stderr
        }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }));
        return;
      }
      console.log(`Deploy stdout: ${stdout}`);
      resolve(new Response(JSON.stringify({
        success: true,
        message: "发布脚本执行成功",
        output: stdout
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }));
    });
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
