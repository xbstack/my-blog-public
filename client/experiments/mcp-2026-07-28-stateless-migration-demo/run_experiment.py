#!/usr/bin/env python3
"""Deterministic wire-level experiment for the MCP 2026-07-28 migration article.

This is deliberately implemented with the Python standard library instead of an
MCP SDK so the protocol assumptions stay visible. It does not claim conformance
with the final 2026-07-28 specification. It tests the specific migration boundary
covered by the article:

* legacy initialize + instance-local Mcp-Session-Id behind round-robin routing;
* stateless self-contained requests that may reach either replica;
* explicit application handles backed by an external SQLite store;
* routing-header/body mismatch rejection;
* stale-handle rejection;
* a small old/new compatibility matrix.
"""

from __future__ import annotations

import argparse
import contextlib
import hashlib
import http.client
import json
import platform
import sqlite3
import tempfile
import threading
import time
import uuid
from dataclasses import asdict, dataclass
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Iterator
from urllib.error import HTTPError
from urllib.request import Request, urlopen

LEGACY_PROTOCOL = "2025-11-25"
DRAFT_PROTOCOL = "2026-07-28"
JSON = dict[str, Any]


@dataclass
class Exchange:
    case: str
    request_index: int
    replica: str
    method: str
    status: int
    session_id: str | None = None
    note: str | None = None


class SharedState:
    def __init__(self, db_path: Path) -> None:
        self.db_path = db_path
        self.lock = threading.Lock()
        self.exchanges: list[Exchange] = []
        self._init_db()

    def _connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path, timeout=5)
        conn.row_factory = sqlite3.Row
        return conn

    def _init_db(self) -> None:
        with self._connect() as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS baskets (
                    basket_id TEXT PRIMARY KEY,
                    status TEXT NOT NULL,
                    items_json TEXT NOT NULL,
                    created_at REAL NOT NULL,
                    updated_at REAL NOT NULL
                )
                """
            )

    def create_basket(self) -> JSON:
        basket_id = f"basket_{uuid.uuid4().hex[:12]}"
        now = time.time()
        with self._connect() as conn:
            conn.execute(
                "INSERT INTO baskets VALUES (?, 'active', '[]', ?, ?)",
                (basket_id, now, now),
            )
        return {"basket_id": basket_id, "status": "active", "items": []}

    def add_item(self, basket_id: str, item: str) -> JSON:
        with self._connect() as conn:
            row = conn.execute(
                "SELECT status, items_json FROM baskets WHERE basket_id = ?",
                (basket_id,),
            ).fetchone()
            if row is None or row["status"] != "active":
                raise KeyError(basket_id)
            items = json.loads(row["items_json"])
            items.append(item)
            conn.execute(
                "UPDATE baskets SET items_json = ?, updated_at = ? WHERE basket_id = ?",
                (json.dumps(items), time.time(), basket_id),
            )
        return {"basket_id": basket_id, "status": "active", "items": items}

    def expire_basket(self, basket_id: str) -> JSON:
        with self._connect() as conn:
            changed = conn.execute(
                "UPDATE baskets SET status = 'expired', updated_at = ? WHERE basket_id = ?",
                (time.time(), basket_id),
            ).rowcount
        if not changed:
            raise KeyError(basket_id)
        return {"basket_id": basket_id, "status": "expired"}

    def get_basket(self, basket_id: str) -> JSON:
        with self._connect() as conn:
            row = conn.execute(
                "SELECT status, items_json FROM baskets WHERE basket_id = ?",
                (basket_id,),
            ).fetchone()
        if row is None:
            raise KeyError(basket_id)
        return {
            "basket_id": basket_id,
            "status": row["status"],
            "items": json.loads(row["items_json"]),
        }

    def log(self, exchange: Exchange) -> None:
        with self.lock:
            self.exchanges.append(exchange)


class ReplicaServer(ThreadingHTTPServer):
    allow_reuse_address = True

    def __init__(
        self,
        server_address: tuple[str, int],
        replica_name: str,
        mode: str,
        shared: SharedState,
    ) -> None:
        super().__init__(server_address, ReplicaHandler)
        self.replica_name = replica_name
        self.mode = mode
        self.shared = shared
        self.sessions: set[str] = set()
        self.request_counter = 0


class ReplicaHandler(BaseHTTPRequestHandler):
    server: ReplicaServer

    def log_message(self, _format: str, *_args: object) -> None:
        return

    def _read_json(self) -> JSON:
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8"))

    def _send(self, status: int, payload: JSON, headers: dict[str, str] | None = None) -> None:
        body = json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("X-Replica", self.server.replica_name)
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def _rpc_result(self, request_id: Any, result: JSON) -> JSON:
        return {"jsonrpc": "2.0", "id": request_id, "result": result}

    def _rpc_error(self, request_id: Any, code: int, message: str, data: JSON | None = None) -> JSON:
        error: JSON = {"code": code, "message": message}
        if data:
            error["data"] = data
        return {"jsonrpc": "2.0", "id": request_id, "error": error}

    def do_POST(self) -> None:  # noqa: N802
        self.server.request_counter += 1
        request_index = self.server.request_counter
        try:
            body = self._read_json()
        except Exception as exc:  # pragma: no cover - defensive path
            self._send(400, self._rpc_error(None, -32700, "Parse error", {"detail": str(exc)}))
            return

        method = str(body.get("method", ""))
        if self.server.mode == "legacy":
            self._handle_legacy(body, method, request_index)
        elif self.server.mode == "draft":
            self._handle_draft(body, method, request_index)
        else:  # pragma: no cover
            self._send(500, self._rpc_error(body.get("id"), -32603, "Unknown server mode"))

    def _handle_legacy(self, body: JSON, method: str, request_index: int) -> None:
        request_id = body.get("id")
        if method == "initialize":
            session_id = f"session_{self.server.replica_name}_{uuid.uuid4().hex[:8]}"
            self.server.sessions.add(session_id)
            self.server.shared.log(
                Exchange("legacy", request_index, self.server.replica_name, method, 200, session_id)
            )
            self._send(
                200,
                self._rpc_result(
                    request_id,
                    {
                        "protocolVersion": LEGACY_PROTOCOL,
                        "capabilities": {"tools": {}},
                        "serverInfo": {"name": self.server.replica_name, "version": "legacy-fixture"},
                    },
                ),
                {"Mcp-Session-Id": session_id},
            )
            return

        session_id = self.headers.get("Mcp-Session-Id")
        if not session_id or session_id not in self.server.sessions:
            self.server.shared.log(
                Exchange(
                    "legacy",
                    request_index,
                    self.server.replica_name,
                    method,
                    400,
                    session_id,
                    "unknown session on this replica",
                )
            )
            self._send(
                400,
                self._rpc_error(
                    request_id,
                    -32001,
                    "Unknown MCP session",
                    {"replica": self.server.replica_name, "session_id": session_id},
                ),
            )
            return

        if method == "tools/call":
            tool_name = body.get("params", {}).get("name")
            self.server.shared.log(
                Exchange("legacy", request_index, self.server.replica_name, method, 200, session_id)
            )
            self._send(
                200,
                self._rpc_result(
                    request_id,
                    {
                        "content": [{"type": "text", "text": f"legacy:{tool_name}"}],
                        "served_by": self.server.replica_name,
                    },
                ),
            )
            return

        self._send(404, self._rpc_error(request_id, -32601, "Method not found"))

    def _handle_draft(self, body: JSON, method: str, request_index: int) -> None:
        request_id = body.get("id")
        protocol = self.headers.get("MCP-Protocol-Version")
        route_method = self.headers.get("Mcp-Method")
        route_name = self.headers.get("Mcp-Name")
        body_name = body.get("params", {}).get("name") if method == "tools/call" else None

        if protocol != DRAFT_PROTOCOL:
            self.server.shared.log(
                Exchange("draft", request_index, self.server.replica_name, method, 400, note="version rejected")
            )
            self._send(
                400,
                self._rpc_error(
                    request_id,
                    -32602,
                    "Unsupported or missing protocol version",
                    {"expected": DRAFT_PROTOCOL, "received": protocol},
                ),
            )
            return

        if route_method != method or (method == "tools/call" and route_name != body_name):
            self.server.shared.log(
                Exchange("draft", request_index, self.server.replica_name, method, 400, note="routing headers mismatch")
            )
            self._send(
                400,
                self._rpc_error(
                    request_id,
                    -32602,
                    "Routing headers do not match the JSON-RPC body",
                    {
                        "header_method": route_method,
                        "body_method": method,
                        "header_name": route_name,
                        "body_name": body_name,
                    },
                ),
            )
            return

        if method == "initialize":
            self.server.shared.log(
                Exchange("draft", request_index, self.server.replica_name, method, 404, note="initialize removed")
            )
            self._send(404, self._rpc_error(request_id, -32601, "initialize is not supported"))
            return

        if method == "server/discover":
            result = {
                "protocolVersion": DRAFT_PROTOCOL,
                "serverInfo": {"name": self.server.replica_name, "version": "draft-fixture"},
                "capabilities": {"tools": {}},
            }
        elif method == "tools/list":
            result = {
                "tools": [
                    {"name": "create_basket", "inputSchema": {"type": "object", "properties": {}}},
                    {
                        "name": "add_item",
                        "inputSchema": {
                            "type": "object",
                            "required": ["basket_id", "item"],
                            "properties": {
                                "basket_id": {"type": "string"},
                                "item": {"type": "string"},
                            },
                        },
                    },
                    {
                        "name": "expire_basket",
                        "inputSchema": {
                            "type": "object",
                            "required": ["basket_id"],
                            "properties": {"basket_id": {"type": "string"}},
                        },
                    },
                ],
                "ttlMs": 30000,
                "cacheScope": "private",
                "served_by": self.server.replica_name,
            }
        elif method == "tools/call":
            try:
                result = self._call_tool(body_name, body.get("params", {}).get("arguments", {}))
            except KeyError as exc:
                handle = str(exc.args[0])
                self.server.shared.log(
                    Exchange("draft", request_index, self.server.replica_name, method, 400, note="invalid or stale handle")
                )
                self._send(
                    400,
                    self._rpc_error(
                        request_id,
                        -32602,
                        "Invalid or expired application handle",
                        {"basket_id": handle, "served_by": self.server.replica_name},
                    ),
                )
                return
        else:
            self._send(404, self._rpc_error(request_id, -32601, "Method not found"))
            return

        result["served_by"] = self.server.replica_name
        self.server.shared.log(
            Exchange("draft", request_index, self.server.replica_name, method, 200)
        )
        self._send(200, self._rpc_result(request_id, result))

    def _call_tool(self, name: str | None, arguments: JSON) -> JSON:
        if name == "create_basket":
            data = self.server.shared.create_basket()
        elif name == "add_item":
            data = self.server.shared.add_item(str(arguments["basket_id"]), str(arguments["item"]))
        elif name == "expire_basket":
            data = self.server.shared.expire_basket(str(arguments["basket_id"]))
        elif name == "get_basket":
            data = self.server.shared.get_basket(str(arguments["basket_id"]))
        else:
            raise KeyError(name or "missing-tool-name")
        return {
            "content": [{"type": "text", "text": json.dumps(data, ensure_ascii=False)}],
            "structuredContent": data,
        }


class RoundRobinProxy(ThreadingHTTPServer):
    allow_reuse_address = True

    def __init__(self, server_address: tuple[str, int], backends: list[tuple[str, int]]) -> None:
        super().__init__(server_address, ProxyHandler)
        self.backends = backends
        self.cursor = 0
        self.lock = threading.Lock()
        self.route_history: list[str] = []

    def next_backend(self) -> tuple[str, int]:
        with self.lock:
            backend = self.backends[self.cursor % len(self.backends)]
            self.cursor += 1
            self.route_history.append(f"{backend[0]}:{backend[1]}")
            return backend


class ProxyHandler(BaseHTTPRequestHandler):
    server: RoundRobinProxy

    def log_message(self, _format: str, *_args: object) -> None:
        return

    def do_POST(self) -> None:  # noqa: N802
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length)
        host, port = self.server.next_backend()
        connection = http.client.HTTPConnection(host, port, timeout=5)
        headers = {
            key: value
            for key, value in self.headers.items()
            if key.lower() not in {"host", "content-length", "connection"}
        }
        headers["Content-Length"] = str(len(body))
        connection.request("POST", self.path, body=body, headers=headers)
        response = connection.getresponse()
        response_body = response.read()
        self.send_response(response.status)
        for key, value in response.getheaders():
            if key.lower() not in {"transfer-encoding", "connection", "date", "server"}:
                self.send_header(key, value)
        self.end_headers()
        self.wfile.write(response_body)
        connection.close()


@contextlib.contextmanager
def running(server: ThreadingHTTPServer) -> Iterator[ThreadingHTTPServer]:
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield server
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=2)


def rpc(url: str, body: JSON, headers: dict[str, str] | None = None) -> tuple[int, JSON, dict[str, str]]:
    payload = json.dumps(body).encode("utf-8")
    request_headers = {"Content-Type": "application/json", **(headers or {})}
    request = Request(url, data=payload, headers=request_headers, method="POST")
    try:
        with urlopen(request, timeout=5) as response:
            return response.status, json.loads(response.read()), dict(response.headers)
    except HTTPError as exc:
        return exc.code, json.loads(exc.read()), dict(exc.headers)


def legacy_initialize(url: str) -> tuple[int, JSON, dict[str, str]]:
    return rpc(
        url,
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": LEGACY_PROTOCOL,
                "capabilities": {},
                "clientInfo": {"name": "xbstack-fixture", "version": "1.0"},
            },
        },
    )


def legacy_call(url: str, session_id: str | None) -> tuple[int, JSON, dict[str, str]]:
    headers = {"Mcp-Session-Id": session_id} if session_id else {}
    return rpc(
        url,
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "tools/call",
            "params": {"name": "echo", "arguments": {"text": "hello"}},
        },
        headers,
    )


def draft_call(url: str, request_id: int, method: str, params: JSON | None = None, *, name: str | None = None) -> tuple[int, JSON, dict[str, str]]:
    headers = {
        "MCP-Protocol-Version": DRAFT_PROTOCOL,
        "Mcp-Method": method,
    }
    if name:
        headers["Mcp-Name"] = name
    body: JSON = {
        "jsonrpc": "2.0",
        "id": request_id,
        "method": method,
        "params": params or {},
    }
    if method == "tools/call":
        body["params"] = {
            "name": name,
            "arguments": (params or {}).get("arguments", {}),
            "_meta": {
                "io.modelcontextprotocol/clientInfo": {
                    "name": "xbstack-fixture",
                    "version": "1.0",
                },
                "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01",
            },
        }
    return rpc(url, body, headers)


def case_result(name: str, passed: bool, **details: Any) -> JSON:
    return {"name": name, "passed": passed, "details": details}


def run_all(output_path: Path) -> JSON:
    with tempfile.TemporaryDirectory(prefix="xbstack-mcp-") as tmp:
        shared = SharedState(Path(tmp) / "state.sqlite3")

        legacy_a = ReplicaServer(("127.0.0.1", 0), "legacy-a", "legacy", shared)
        legacy_b = ReplicaServer(("127.0.0.1", 0), "legacy-b", "legacy", shared)
        draft_a = ReplicaServer(("127.0.0.1", 0), "draft-a", "draft", shared)
        draft_b = ReplicaServer(("127.0.0.1", 0), "draft-b", "draft", shared)

        with running(legacy_a), running(legacy_b), running(draft_a), running(draft_b):
            legacy_proxy = RoundRobinProxy(
                ("127.0.0.1", 0),
                [legacy_a.server_address, legacy_b.server_address],
            )
            draft_proxy = RoundRobinProxy(
                ("127.0.0.1", 0),
                [draft_a.server_address, draft_b.server_address],
            )
            with running(legacy_proxy), running(draft_proxy):
                legacy_url = f"http://127.0.0.1:{legacy_proxy.server_port}/mcp"
                draft_url = f"http://127.0.0.1:{draft_proxy.server_port}/mcp"
                legacy_direct_url = f"http://127.0.0.1:{legacy_a.server_port}/mcp"

                cases: list[JSON] = []

                status, init_body, init_headers = legacy_initialize(legacy_direct_url)
                direct_session = init_headers.get("Mcp-Session-Id")
                call_status, call_body, _ = legacy_call(legacy_direct_url, direct_session)
                cases.append(
                    case_result(
                        "legacy_sticky_single_replica_succeeds",
                        status == 200 and call_status == 200,
                        initialize_status=status,
                        call_status=call_status,
                        session_id=direct_session,
                        served_by=call_body.get("result", {}).get("served_by"),
                    )
                )

                status, init_body, init_headers = legacy_initialize(legacy_url)
                rr_session = init_headers.get("Mcp-Session-Id")
                call_status, call_body, call_headers = legacy_call(legacy_url, rr_session)
                cases.append(
                    case_result(
                        "legacy_round_robin_loses_instance_local_session",
                        status == 200
                        and call_status == 400
                        and call_body.get("error", {}).get("message") == "Unknown MCP session",
                        initialize_status=status,
                        initialize_replica=init_headers.get("X-Replica"),
                        call_status=call_status,
                        call_replica=call_headers.get("X-Replica"),
                        session_id=rr_session,
                        error=call_body.get("error"),
                    )
                )

                discover_status, discover_body, discover_headers = draft_call(
                    draft_url, 10, "server/discover"
                )
                list_status, list_body, list_headers = draft_call(draft_url, 11, "tools/list")
                cases.append(
                    case_result(
                        "draft_requests_cross_replicas_without_protocol_session",
                        discover_status == 200
                        and list_status == 200
                        and discover_headers.get("X-Replica") != list_headers.get("X-Replica"),
                        discover_replica=discover_headers.get("X-Replica"),
                        list_replica=list_headers.get("X-Replica"),
                        tool_count=len(list_body.get("result", {}).get("tools", [])),
                        ttl_ms=list_body.get("result", {}).get("ttlMs"),
                    )
                )

                create_status, create_body, create_headers = draft_call(
                    draft_url,
                    12,
                    "tools/call",
                    {"arguments": {}},
                    name="create_basket",
                )
                basket_id = create_body.get("result", {}).get("structuredContent", {}).get("basket_id")
                add_status, add_body, add_headers = draft_call(
                    draft_url,
                    13,
                    "tools/call",
                    {"arguments": {"basket_id": basket_id, "item": "mcp-book"}},
                    name="add_item",
                )
                cases.append(
                    case_result(
                        "explicit_handle_preserves_application_state_across_replicas",
                        create_status == 200
                        and add_status == 200
                        and create_headers.get("X-Replica") != add_headers.get("X-Replica")
                        and add_body.get("result", {}).get("structuredContent", {}).get("items")
                        == ["mcp-book"],
                        create_replica=create_headers.get("X-Replica"),
                        add_replica=add_headers.get("X-Replica"),
                        basket_id=basket_id,
                        final_state=add_body.get("result", {}).get("structuredContent"),
                    )
                )

                expire_status, expire_body, expire_headers = draft_call(
                    draft_url,
                    14,
                    "tools/call",
                    {"arguments": {"basket_id": basket_id}},
                    name="expire_basket",
                )
                stale_status, stale_body, stale_headers = draft_call(
                    draft_url,
                    15,
                    "tools/call",
                    {"arguments": {"basket_id": basket_id, "item": "stale-write"}},
                    name="add_item",
                )
                cases.append(
                    case_result(
                        "stale_explicit_handle_is_rejected_server_side",
                        expire_status == 200
                        and stale_status == 400
                        and stale_body.get("error", {}).get("code") == -32602,
                        expire_replica=expire_headers.get("X-Replica"),
                        stale_call_replica=stale_headers.get("X-Replica"),
                        stale_error=stale_body.get("error"),
                    )
                )

                mismatch_status, mismatch_body, mismatch_headers = rpc(
                    draft_url,
                    {
                        "jsonrpc": "2.0",
                        "id": 16,
                        "method": "tools/call",
                        "params": {"name": "create_basket", "arguments": {}},
                    },
                    {
                        "MCP-Protocol-Version": DRAFT_PROTOCOL,
                        "Mcp-Method": "tools/list",
                        "Mcp-Name": "wrong-tool",
                    },
                )
                cases.append(
                    case_result(
                        "routing_header_body_mismatch_is_rejected",
                        mismatch_status == 400
                        and mismatch_body.get("error", {}).get("code") == -32602,
                        replica=mismatch_headers.get("X-Replica"),
                        error=mismatch_body.get("error"),
                    )
                )

                old_to_old_init, _, old_to_old_headers = legacy_initialize(legacy_direct_url)
                old_to_old_call, _, _ = legacy_call(
                    legacy_direct_url, old_to_old_headers.get("Mcp-Session-Id")
                )
                old_to_new_init, _, _ = legacy_initialize(draft_url)
                new_to_old_status, _, _ = draft_call(
                    legacy_direct_url,
                    20,
                    "tools/call",
                    {"arguments": {}},
                    name="echo",
                )
                new_to_new_status, _, _ = draft_call(
                    draft_url,
                    21,
                    "tools/call",
                    {"arguments": {}},
                    name="create_basket",
                )
                compatibility = [
                    {
                        "client": LEGACY_PROTOCOL,
                        "server": LEGACY_PROTOCOL,
                        "result": "pass" if old_to_old_init == 200 and old_to_old_call == 200 else "fail",
                        "reason": "initialize and subsequent request stay on the same replica",
                    },
                    {
                        "client": LEGACY_PROTOCOL,
                        "server": DRAFT_PROTOCOL,
                        "result": "fail" if old_to_new_init != 200 else "pass",
                        "reason": "draft fixture removes initialize",
                    },
                    {
                        "client": DRAFT_PROTOCOL,
                        "server": LEGACY_PROTOCOL,
                        "result": "fail" if new_to_old_status != 200 else "pass",
                        "reason": "legacy fixture requires an initialized session",
                    },
                    {
                        "client": DRAFT_PROTOCOL,
                        "server": DRAFT_PROTOCOL,
                        "result": "pass" if new_to_new_status == 200 else "fail",
                        "reason": "self-contained request with explicit version and routing headers",
                    },
                ]

                all_passed = all(case["passed"] for case in cases)
                result: JSON = {
                    "experiment": "mcp-2026-07-28-stateless-migration-demo",
                    "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                    "environment": {
                        "python": platform.python_version(),
                        "platform": platform.platform(),
                        "legacy_protocol_fixture": LEGACY_PROTOCOL,
                        "draft_protocol_fixture": DRAFT_PROTOCOL,
                        "network": "real localhost HTTP through a round-robin reverse proxy",
                        "application_state": "external SQLite file shared by both draft replicas",
                        "external_api_calls": 0,
                    },
                    "scope": {
                        "claims": [
                            "instance-local legacy sessions fail when follow-up requests hit another replica",
                            "self-contained draft requests can be served by alternating replicas",
                            "explicit handles can preserve application state when validated against external storage",
                            "stale handles and routing-header mismatches are rejectable at the server boundary",
                        ],
                        "non_claims": [
                            "full conformance with the final 2026-07-28 specification",
                            "performance or latency improvement",
                            "production Kubernetes, Cloudflare, or managed load-balancer behavior",
                            "complete SDK v2 API compatibility",
                        ],
                    },
                    "cases": cases,
                    "compatibility_matrix": compatibility,
                    "route_history": {
                        "legacy_proxy": legacy_proxy.route_history,
                        "draft_proxy": draft_proxy.route_history,
                    },
                    "exchanges": [asdict(exchange) for exchange in shared.exchanges],
                    "summary": {
                        "passed": sum(1 for case in cases if case["passed"]),
                        "total": len(cases),
                        "all_passed": all_passed,
                    },
                }

    canonical = json.dumps(result, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    result["sha256"] = hashlib.sha256(canonical.encode("utf-8")).hexdigest()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output",
        default="results/verification.json",
        help="Path relative to the current working directory",
    )
    args = parser.parse_args()
    result = run_all(Path(args.output))
    print(json.dumps(result["summary"], ensure_ascii=False))
    return 0 if result["summary"]["all_passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
