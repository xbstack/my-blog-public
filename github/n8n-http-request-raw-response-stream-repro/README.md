# n8n HTTP Request Raw Body → response stream repro

Minimal XBSTACK reproduction for n8n issue #36402.

## Observed behavior

On 2026-08-18, XBSTACK ran the same POST request through four HTTP Request configurations on local `n8n 1.112.4`:

| Case | Result |
| --- | --- |
| Raw body + explicit JSON response | Returns stream internals such as `_readableState`, `_writableState`, `bytesWritten` |
| JSON body + explicit JSON response | Returns parsed JSON |
| Raw body + Auto-detect response | Returns parsed JSON |
| Raw body + explicit Text response | Returns text wrapper |

The tagged `n8n@2.34.5` source still contains the same mechanism reported in #36402: Raw body forces `useStream = true`, while stream consumption for JSON/text is inside the auto-detection branch.

**Evidence boundary:** this repository contains a runtime reproduction on `n8n 1.112.4` plus source confirmation for tagged `n8n@2.34.5`. It does not claim an end-to-end 2.34.5 runtime reproduction on the XBSTACK machine.

## Import

```bash
n8n import:workflow --input=workflow.json
```

Then run workflow id `xbstack-n8n-raw-response-repro` and compare the four branch outputs.

## Tested workaround

If the outgoing payload is JSON, use **Body Content Type = JSON** rather than Raw. In the local control, keeping **Response Format = JSON** then returns normal parsed JSON.

If Raw is mandatory, leaving **Response Format = Auto-detect** also returned parsed JSON in the local control. Treat this as a workaround, not an upstream fix.

## Evidence

- `workflow.json` — four-branch control workflow
- `logs/2026-08-18-n8n-1.112.4.json` — compact runtime result
- Upstream issue: https://github.com/n8n-io/n8n/issues/36402
- Tagged source: https://github.com/n8n-io/n8n/blob/n8n%402.34.5/packages/nodes-base/nodes/HttpRequest/V3/HttpRequestV3.node.ts

## Deep explanation

https://www.xbstack.com/en/ai/n8n-http-request-raw-body-response-stream/?utm_source=github&utm_medium=referral&utm_campaign=n8n_http_raw_response_stream&utm_content=repository_readme
