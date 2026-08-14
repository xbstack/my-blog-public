# GPT Image Plan — MCP 2026-07-28 Migration Article

All images for this article must be generated with GPT image generation. Do not use screenshots copied from vendor documentation, stock-photo libraries, conference slides, third-party diagrams, or logos as dominant visual elements. Tables remain native Markdown/HTML so readers and search engines can inspect the underlying text.

## Shared visual direction

- Brand: XBSTACK technical field notes.
- Style: precise editorial systems diagram, dark charcoal background, restrained cyan and warm amber accents, subtle grid, no decorative robot heads or code rain.
- Language: use minimal English labels inside diagrams to avoid generated Chinese text errors; article captions and alt text carry the complete Chinese/English explanation.
- Aspect ratios:
  - cover: 16:9, 1600×900 source, later exported as WebP;
  - body diagrams: 16:9 or 4:3, minimum 1400 px wide;
  - matrices/checklists: 4:3, with generous whitespace.
- Copyright: original composition generated for XBSTACK; no trademarked UI recreation, copied documentation layout, source screenshots, or third-party photography.

## 01 — Cover

**Filename:** `mcp-2026-07-28-stateless-migration-cover.webp`

**Purpose:** Communicate the architectural shift from instance-bound protocol sessions to stateless, horizontally scalable MCP requests.

**Prompt:**

> Create a professional editorial cover illustration for a senior software engineering article about the MCP 2026-07-28 migration. Show a central load balancer distributing self-contained protocol request packets to two identical server replicas. On the left, a fading broken session chain is tied to a single server; on the right, explicit state handles connect both replicas to an external durable data store. Dark charcoal background, precise cyan network lines, restrained amber warning accents, subtle technical grid, clean enterprise architecture aesthetic, high information density but no tiny text. Include only the large title text “MCP 2026-07-28” and the smaller English words “Stateless Migration”. No company logos, no robot, no human face, no code rain. 16:9, publication-quality.

**Chinese alt:** MCP 2026-07-28 无状态迁移封面，展示负载均衡、双实例、协议 Session 断裂和显式业务 Handle 外置状态。

**English alt:** MCP 2026-07-28 stateless migration cover showing load balancing, two replicas, a broken protocol session, and explicit application handles backed by external state.

## 02 — Test scope and evidence boundaries

**Filename:** `02-mcp-migration-test-scope.webp`

**Prompt:**

> Draw an original engineering evidence map with three concentric layers: official release candidate facts, local wire-level HTTP experiment, and Python SDK 2.0.0b2 import smoke test. Outside the circles, place a clearly separated “Not tested” zone containing Kubernetes production traffic, managed cloud load balancers, final July 28 specification conformance, OAuth interoperability, and performance benchmarks. Dark technical editorial style, legible minimal English labels, no logos, 16:9.

**Caption:** 本文的证据由官方 RC、真实 localhost HTTP 轮询实验和 SDK 导入冒烟测试组成；生产 Kubernetes、正式规范一致性和性能不在结论范围内。

## 03 — Legacy session failure behind round robin

**Filename:** `03-legacy-session-round-robin-failure.webp`

**Prompt:**

> Create a sequence diagram showing an old MCP client sending initialize through a round-robin proxy to Replica A, receiving Mcp-Session-Id, then sending tools/call which is routed to Replica B. Replica B has a separate in-memory session map and returns HTTP 400 “Unknown MCP session”. Use five vertical lanes, numbered arrows, cyan for successful initialize, amber/red for the failed follow-up, minimal English text, no copied vendor style, 16:9.

**Caption:** 旧协议的失败不是“负载均衡随机坏掉”，而是 Session 被隐式绑定到生成它的进程。

## 04 — Stateless request flow

**Filename:** `04-stateless-request-cross-replica.webp`

**Prompt:**

> Draw a clean architecture flow for stateless MCP requests. A client sends server/discover to Replica A and tools/list to Replica B through the same round-robin proxy. Each request visibly carries protocol version, method routing metadata, client info and trace context. Neither replica has a session cache. Both return successful JSON-RPC results. Precise enterprise systems diagram, dark background, cyan lines, 16:9.

**Caption:** 新协议把必要的协商信息放回每次请求，使独立请求可以被不同实例处理。

## 05 — Explicit application handle lifecycle

**Filename:** `05-explicit-handle-lifecycle.webp`

**Prompt:**

> Create a lifecycle diagram for an explicit application handle named basket_id. Step 1 create_basket reaches Replica A and writes an active record to external SQLite/Postgres. Step 2 add_item reaches Replica B and validates basket_id before updating the same record. Step 3 expire_basket marks the handle expired. Step 4 a stale write is rejected. Show protocol statelessness separated from durable business state. Minimal English labels, dark editorial architecture style, 16:9.

**Caption:** 无状态协议不等于业务无状态；状态应通过可见、可验证、可过期的 Handle 显式表达。

## 06 — Compatibility matrix

**Filename:** `06-mcp-client-server-compatibility.webp`

**Prompt:**

> Design a 2×2 compatibility matrix for MCP client and server protocol generations. Rows: 2025 client, 2026 client. Columns: 2025 server, 2026 server. Show direct old-old and new-new paths as supported, mixed direct paths as incompatible without an adapter. Add a small side panel showing a dual-protocol gateway as the migration bridge. Clean table-like infographic, high readability, dark charcoal, cyan and amber, 4:3.

**Caption:** 新旧协议不能依靠“请求差不多”直接互通，灰度期需要版本路由或双协议适配层。

## 07 — Python SDK beta migration failure

**Filename:** `07-python-sdk-v2-import-boundary.webp`

**Prompt:**

> Create an original developer migration diagnostic illustration. On the left, a Python package box labeled mcp 1.x exposes mcp.server.fastmcp. On the right, a package box labeled mcp 2.0.0b2 has a reorganized server module layout and the old import path ends in ModuleNotFoundError. Between them, show an explicit version pin and an isolated environment. No terminal screenshot imitation, no copied package artwork, dark technical style, 16:9.

**Caption:** 本地安装的 `mcp==2.0.0b2` 可以导入，但旧 `mcp.server.fastmcp` 路径不可用，说明迁移不只是修改协议版本字符串。

## 08 — MRTR and explicit request state

**Filename:** `08-mrtr-request-state-flow.webp`

**Prompt:**

> Draw a multi-round tool result flow: server returns InputRequiredResult with requestState and schema, client collects user input, client resubmits inputResponses plus the opaque requestState, server validates and continues. Emphasize that requestState is explicit and passed by the client, not hidden in a transport session. Original systems diagram, minimal English labels, dark background, cyan flow, amber validation gate, 16:9.

**Caption:** MRTR 用显式 `requestState` 承接多轮输入，让交互状态脱离隐式连接 Session。

## 09 — Production gray rollout

**Filename:** `09-mcp-production-gray-rollout.webp`

**Prompt:**

> Create a production migration pipeline diagram with stages: inventory, fixture, dual protocol, shadow traffic, canary, observability gate, wider rollout, legacy retirement. Include a rollback lane returning traffic to the old server and a data compatibility checkpoint before every promotion. Enterprise release engineering aesthetic, no logos, dark charcoal with cyan progress and amber stop gates, 16:9.

**Caption:** 正确迁移路径是双协议、影子流量、灰度和可回滚，而不是直接把所有客户端切到新版本。

## 10 — Final decision tree

**Filename:** `10-mcp-migration-decision-tree.webp`

**Prompt:**

> Draw a decision tree for MCP migration readiness. Questions: remote Streamable HTTP? more than one replica? instance-local session? application state explicit? client inventory known? dual-protocol gateway available? final spec verified? End states: migrate now, build adapter first, keep old protocol temporarily, or do not publish. Minimal English labels, original clean technical infographic, dark charcoal, cyan and amber, 4:3.

**Caption:** 是否立即迁移取决于连接形态、状态位置、客户端库存、适配能力和正式规范验证，而不是 SDK 是否能安装。

## Placement map

| Image | Chinese section | English section |
|---|---|---|
| Cover | Frontmatter / card | Frontmatter / card |
| 02 | 测试范围、环境与边界 | Scope, environment, and evidence boundaries |
| 03 | 旧协议多副本失败复现 | Reproducing the legacy multi-replica failure |
| 04 | 从握手 Session 到自包含请求 | From handshake sessions to self-contained requests |
| 05 | 显式 Handle 承接业务状态 | Explicit handles for application state |
| 06 | 兼容矩阵与双协议灰度 | Compatibility matrix and dual-protocol rollout |
| 07 | Python SDK v2 Beta 迁移 | Python SDK v2 beta migration |
| 08 | MRTR 与 Tasks | MRTR and Tasks |
| 09 | 生产迁移与回滚 | Production migration and rollback |
| 10 | 最终决策 | Final decision |

## Import workflow after generation

1. Export source images from GPT as PNG at the requested dimensions.
2. Copy them into `src/assets/uploads/` using the exact filenames above, temporarily retaining `.png` if needed.
3. Run the project cover/image import and optimization workflow.
4. Replace article HTML comments with real Markdown image references.
5. Set the cover `image` and `imageAlt` fields in both frontmatters.
6. Run cover audit, build, bilingual layout audit, and public release audit.
