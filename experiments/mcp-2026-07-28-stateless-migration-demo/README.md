# MCP 2026-07-28 Stateless Migration Demo

This fixture supports the XBSTACK article about migrating remote MCP servers from the `2025-11-25` session-oriented Streamable HTTP shape to the `2026-07-28` stateless protocol core.

It is a deterministic **wire-level experiment**, not a claim of final-spec conformance. The repository was created against the locked release candidate and official draft documentation. On July 29, 2026, the official Releases page still listed `2026-07-28` as RC / pre-release and `2025-11-25` as the latest stable revision, so the fixture was rerun without relabeling it as a final-spec test.

Read the full migration analysis, compatibility matrix, and rollout boundaries on [XBSTACK](https://www.xbstack.com/en/ai/mcp-2026-07-28-stateless-migration/?utm_source=github&utm_medium=referral&utm_campaign=mcp_2026_07_28_stateless_migration&utm_content=experiment_readme).

## What the experiment proves

The standard-library HTTP fixture validates six narrow claims:

1. A legacy session works when `initialize` and the following tool call stay on one replica.
2. The same instance-local session fails when a round-robin proxy sends the follow-up request to another replica.
3. Self-contained draft requests can alternate between replicas without a protocol session.
4. Application state can survive cross-replica calls when the server returns an explicit handle and validates it against external storage.
5. An expired handle can be rejected server-side instead of being trusted because the model repeated it.
6. `Mcp-Method` / `Mcp-Name` values that disagree with the JSON-RPC body can be rejected before tool execution.

The script also records a four-cell compatibility fixture for old/new client and server shapes.

## What it does not prove

It does not prove:

- conformance with the final `2026-07-28` specification;
- SDK v2 API stability;
- production Kubernetes, Cloudflare, Envoy, NGINX or managed load-balancer behavior;
- performance or latency improvement;
- OAuth, MRTR or Tasks extension interoperability;
- compatibility with a specific commercial MCP client.

Those boundaries are repeated in `results/verification.json` so the article cannot silently upgrade a local result into a production claim.

## Run the wire experiment

```bash
cd experiments/mcp-2026-07-28-stateless-migration-demo
python3 run_experiment.py
```

Expected summary:

```json
{"passed": 6, "total": 6, "all_passed": true}
```

The detailed evidence is written to:

```text
results/verification.json
```

The result includes:

- environment and protocol fixture versions;
- per-case pass/fail state;
- replica names for every important request;
- the legacy session error;
- the explicit basket handle lifecycle;
- the routing header mismatch error;
- compatibility matrix;
- proxy route history;
- SHA-256 digest of the canonical result.

## Run the Python SDK v2 beta import smoke test

The latest pre-release visible when this experiment was created was `mcp==2.0.0b2`, published on July 14, 2026.

Install it in an isolated target directory:

```bash
python3 -m pip install --target /tmp/xbstack-mcp-sdk-b2 mcp==2.0.0b2
```

Then run:

```bash
PYTHONPATH=/tmp/xbstack-mcp-sdk-b2 python3 sdk_smoke.py
```

The smoke test writes:

```text
results/sdk-smoke.json
```

It only records package version and import/module layout. It intentionally does not start a server and does not claim protocol conformance.

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

2026 draft client
   |
   v
round-robin proxy
   |--------------------|
   v                    v
draft-a               draft-b
   |                    |
   |------ SQLite -------|
       explicit basket_id
```

The key distinction is not “state versus no state.” It is where state lives:

- **legacy fixture:** protocol session is hidden in transport metadata and bound to one process;
- **draft fixture:** each request is self-contained, while application state is represented by a visible `basket_id` and stored outside either replica.

## Reproducibility notes

- Runtime used for the recorded result: Python `3.10.2` on Apple Silicon macOS.
- Network path: real localhost HTTP through a small round-robin reverse proxy.
- External API calls: `0`.
- Random values: session IDs, basket IDs and ephemeral ports vary per run; pass/fail assertions do not depend on their exact values.
- The fixture uses `2025-11-25` and `2026-07-28` labels to make the migration boundary explicit, but it is not a full protocol implementation.

## Official references

- MCP release candidate: <https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/>
- Official Releases status: <https://github.com/modelcontextprotocol/modelcontextprotocol/releases>
- Final-release milestone: <https://github.com/modelcontextprotocol/modelcontextprotocol/milestone/5>
- Specification-release and GA task: <https://github.com/modelcontextprotocol/modelcontextprotocol/milestone/6>
- Draft changelog: <https://modelcontextprotocol.io/specification/draft/changelog>
- SEP-2567 sessionless MCP: <https://modelcontextprotocol.io/seps/2567-sessionless-mcp>
- Python SDK: <https://github.com/modelcontextprotocol/python-sdk>
- Python SDK pre-release on PyPI: <https://pypi.org/project/mcp/2.0.0b2/>
- TypeScript SDK migration note: <https://ts.sdk.modelcontextprotocol.io/v2/migration/support-2026-07-28>

## License and reuse

The fixture code was written for XBSTACK and may be reused with attribution. It contains no copied SDK source and no third-party images or datasets.
