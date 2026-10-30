# MCP -32700 Parse Error: 30-Second Diagnostic Checklist

Use this checklist when a local `stdio` MCP Server reports:

- `-32700 Parse Error`
- `Unexpected non-JSON line`
- `Tool list failed`
- failure to initialize in Claude Desktop, Cursor, or another MCP client

## Identify the failing layer first

```text
Process cannot start
  └─ Inspect stderr: executable path, PATH, permissions, imports, package exports, SDK major version

Process starts but the client cannot parse messages
  └─ Inspect stdout: ordinary logs, banners, warnings, truncated JSON, unescaped line breaks

initialize succeeds but tools/list fails
  └─ Inspect capabilities, tools/list response structure, protocol version, and client compatibility
```

## macOS / Linux

```bash
/usr/local/bin/node /absolute/path/server.js \
  1>/tmp/mcp-stdout.log \
  2>/tmp/mcp-stderr.log

python3 mcp-stdout-validator.py /tmp/mcp-stdout.log
```

For a Python Server:

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

## Passing criteria

- every non-empty stdout line parses as JSON;
- every protocol message contains `"jsonrpc": "2.0"`;
- logs, debug output, banners, and warnings go only to stderr or a separate log file;
- executable, script, and working-directory paths are verifiable absolute paths;
- after an SDK upgrade, inspect the lockfile and official migration guide before treating a startup dependency failure as a Parse Error.

Full guide:

https://www.xbstack.com/en/ai/mcp-json-rpc-parse-error/?utm_source=github&utm_medium=referral&utm_campaign=mcp_parse_error_fix&utm_content=diagnostic_readme
