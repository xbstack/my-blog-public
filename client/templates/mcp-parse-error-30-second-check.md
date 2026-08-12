# MCP -32700 Parse Error：30 秒排查卡

适用于本地 `stdio` MCP Server 出现以下问题：

- `-32700 Parse Error`
- `Unexpected non-JSON line`
- `Tool list failed`
- Server 在 Claude Desktop、Cursor 等客户端中无法完成初始化

## 先判断故障发生在哪一层

```text
进程无法启动
  └─ 先看 stderr：路径、PATH、权限、ImportError、module not found、SDK 主版本

进程能够启动，但客户端解析失败
  └─ 检查 stdout：普通日志、banner、warning、截断 JSON、未转义换行

initialize 成功，但 tools/list 失败
  └─ 检查 capabilities、tools/list 返回结构、协议版本和客户端兼容性
```

## macOS / Linux

```bash
/usr/local/bin/node /absolute/path/server.js \
  1>/tmp/mcp-stdout.log \
  2>/tmp/mcp-stderr.log

python3 mcp-stdout-validator.py /tmp/mcp-stdout.log
```

Python Server：

```bash
/usr/bin/python3 /absolute/path/server.py \
  1>/tmp/mcp-stdout.log \
  2>/tmp/mcp-stderr.log

python3 mcp-stdout-validator.py /tmp/mcp-stdout.log
```

## Windows PowerShell

```powershell
& "C:\Program Files\nodejs\node.exe" "C:\absolute\path\server.js" `
  1> "$env:TEMP\mcp-stdout.log" `
  2> "$env:TEMP\mcp-stderr.log"

python .\mcp-stdout-validator.py "$env:TEMP\mcp-stdout.log"
```

## 通过标准

- stdout 中的每一条非空行都能解析为 JSON；
- 每条协议消息都包含 `"jsonrpc": "2.0"`；
- 普通日志、调试输出、版权声明和 warning 只出现在 stderr 或独立日志文件；
- 启动命令、脚本路径和工作目录使用可验证的绝对路径；
- SDK 升级后先检查锁文件和官方迁移指南，不把启动期依赖错误误判为 Parse Error。

完整排查说明：

- 中文：https://www.xbstack.com/ai/mcp-json-rpc-parse-error/?utm_source=github&utm_medium=referral&utm_campaign=mcp_parse_error_fix&utm_content=diagnostic_readme
- English: https://www.xbstack.com/en/ai/mcp-json-rpc-parse-error/?utm_source=github&utm_medium=referral&utm_campaign=mcp_parse_error_fix&utm_content=diagnostic_readme
