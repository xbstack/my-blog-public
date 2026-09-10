# MCP 2026-07-28 Stateless Migration Demo

This deterministic wire-level fixture supports the XBSTACK migration guide for remote MCP servers moving from the legacy session-oriented Streamable HTTP shape to the stable `2026-07-28` stateless protocol core.

MCP `2026-07-28` became a stable specification on July 28, 2026. The fixture was rerun on August 5, 2026 with all 6/6 assertions passing. The Python SDK import smoke test was also repeated with stable `mcp==2.0.0`.

Read the full migration analysis, compatibility matrix, and rollout boundaries on [XBSTACK](https://www.xbstack.com/en/ai/mcp-2026-07-28-stateless-migration/?utm_source=github&utm_medium=referral&utm_campaign=mcp-2026-07-28-stable&utm_content=repository_readme).

## What the experiment proves

The standard-library HTTP fixture validates six narrow claims:

1. A legacy session works when `initialize` and the following tool call stay on one replica.
2. The same instance-local session fails when a round-robin proxy sends the follow-up request to another replica.
3. Self-contained `2026-07-28`-shaped requests can alternate between replicas without a protocol session.
4. Application state can survive cross-replica calls when the server returns an explicit handle and validates it against external storage.
5. An expired handle can be rejected server-side instead of being trusted because the model repeated it.
6. `Mcp-Method` / `Mcp-Name` values that disagree with the JSON-RPC body can be rejected before tool execution.

The script also records a four-cell compatibility fixture for legacy/new client and server shapes.

## Evidence boundary

This is a deterministic local wire fixture, not a complete specification-conformance certification. It does not prove:

- complete MCP `2026-07-28` conformance;
- production Kubernetes, Cloudflare, Envoy, NGINX, or managed load-balancer behavior;
- OAuth, MRTR, Tasks, or MCP Apps interoperability;
- performance or latency improvement;
- compatibility with a specific commercial client;
- automatic protocol adoption merely because an SDK package has a v2 major version.

The stable specification status and the local experiment scope are separate facts.

## Run the wire experiment

```bash
cd experiments/mcp-2026-07-28-stateless-migration-demo
python3 run_experiment.py
```

Expected summary:

```json
{"passed": 6, "total": 6, "all_passed": true}
```

Detailed evidence is written to:

```text
results/verification.json
```

It includes:

- environment and protocol fixture versions;
- per-case pass/fail state;
- replica names for important requests;
- the legacy session error;
- explicit basket-handle lifecycle;
- routing-header mismatch rejection;
- compatibility matrix;
- proxy route history;
- SHA-256 digest of the canonical result.

## Run the Python SDK 2.0 import smoke test

Install the stable SDK into an isolated target directory:

```bash
python3 -m pip install --target /tmp/xbstack-mcp-sdk-v2 mcp==2.0.0
```

Then run:

```bash
PYTHONPATH=/tmp/xbstack-mcp-sdk-v2 python3 sdk_smoke.py
```

The recorded result confirms:

- package version `2.0.0`;
- v2 top-level and server module layout;
- the legacy `mcp.server.fastmcp` import path is unavailable.

The smoke test writes `results/sdk-smoke.json`. It intentionally does not start a server and does not claim protocol conformance.

## Experiment architecture

```text
legacy client
   |
   v
round-robin proxy
   |--------------------|
   v                    v
legacy-a              legacy-b
(instance session)    (different session map)

2026-07-28 client fixture
   |
   v
round-robin proxy
   |--------------------|
   v                    v
replica-a             replica-b
   |                    |
   |------ SQLite -------|
       explicit basket_id
```

The key distinction is not “state versus no state.” It is where state lives:

- **legacy fixture:** protocol session is hidden in transport metadata and bound to one process;
- **2026-07-28 fixture:** each request is self-contained, while application state is represented by a visible `basket_id` and stored outside either replica.

## Reproducibility notes

- Recorded runtime: Python `3.10.2` on Apple Silicon macOS.
- Network path: real localhost HTTP through a round-robin reverse proxy.
- External API calls: `0`.
- Random session IDs, basket IDs, and ports vary; assertions do not depend on their exact values.
- The fixture labels requests with `2025-11-25` and `2026-07-28` to make the migration boundary explicit, but it is not a complete protocol implementation.

## Official references

- Stable MCP 2026-07-28 release: <https://github.com/modelcontextprotocol/modelcontextprotocol/releases/tag/2026-07-28>
- MCP specification: <https://modelcontextprotocol.io/specification/2026-07-28>
- SEP-2567 sessionless MCP: <https://modelcontextprotocol.io/seps/2567-sessionless-mcp>
- Python SDK: <https://github.com/modelcontextprotocol/python-sdk>
- Python SDK 2.0.0: <https://pypi.org/project/mcp/2.0.0/>
- TypeScript SDK migration note: <https://ts.sdk.modelcontextprotocol.io/v2/migration/support-2026-07-28>

## License and reuse

The fixture code was written for XBSTACK and may be reused with attribution. It contains no copied SDK source and no third-party images or datasets.
