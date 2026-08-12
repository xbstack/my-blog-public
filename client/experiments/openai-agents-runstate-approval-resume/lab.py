from __future__ import annotations

import argparse
import asyncio
import json
import os
import sqlite3
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, AsyncIterator, Mapping

import agents
from agents import Agent, Runner, RunState, function_tool, set_tracing_disabled
from agents.items import ModelResponse
from agents.models.interface import Model
from agents.usage import Usage
from openai.types.responses import (
    ResponseFunctionToolCall,
    ResponseOutputMessage,
    ResponseOutputText,
)

set_tracing_disabled(True)

ROOT = Path(__file__).resolve().parent
ARTIFACTS = ROOT / "artifacts"
DEFAULT_STATE = ARTIFACTS / "paused-state.json"
DEFAULT_APPROVED_STATE = ARTIFACTS / "approved-state.json"
DEFAULT_DB = ARTIFACTS / "effects.sqlite3"
DEFAULT_RESULTS = ARTIFACTS / "results.json"
APP_STATE_VERSION = "runstate-approval-lab/v1"
DEMO_SECRET = "DEMO_SECRET_SHOULD_NOT_PERSIST"


@dataclass
class AppContext:
    tenant_id: str
    api_token: str


class DeterministicApprovalModel(Model):
    """Provider-free model that emits one approval-gated tool call, then a final answer."""

    async def get_response(
        self,
        system_instructions: str | None,
        input: str | list[Any],
        model_settings: Any,
        tools: list[Any],
        output_schema: Any,
        handoffs: list[Any],
        tracing: Any,
        *,
        previous_response_id: str | None,
        conversation_id: str | None,
        prompt: Any,
    ) -> ModelResponse:
        items = [] if isinstance(input, str) else input
        tool_outputs = [
            item
            for item in items
            if isinstance(item, dict) and item.get("type") == "function_call_output"
        ]
        if not tool_outputs:
            output = [
                ResponseFunctionToolCall(
                    arguments=json.dumps(
                        {
                            "release": "2026.07.24",
                            "idempotency_key": "tenant-a:release:2026.07.24",
                        },
                        separators=(",", ":"),
                    ),
                    call_id="call_release_20260724",
                    name="deploy_release",
                    type="function_call",
                    status="completed",
                )
            ]
        else:
            tool_result = str(tool_outputs[-1].get("output", ""))
            output = [
                ResponseOutputMessage(
                    id="msg_after_approval",
                    content=[
                        ResponseOutputText(
                            annotations=[],
                            text=f"Release workflow finished: {tool_result}",
                            type="output_text",
                        )
                    ],
                    role="assistant",
                    status="completed",
                    type="message",
                )
            ]
        return ModelResponse(output=output, usage=Usage(requests=1), response_id=None)

    async def stream_response(self, *args: Any, **kwargs: Any) -> AsyncIterator[Any]:
        if False:
            yield None


def initialise_db(db_path: Path) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(db_path) as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS effect_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                idempotency_key TEXT NOT NULL,
                release TEXT NOT NULL,
                worker TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS idempotency_ledger (
                idempotency_key TEXT PRIMARY KEY,
                result TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            """
        )


def clear_db(db_path: Path) -> None:
    initialise_db(db_path)
    with sqlite3.connect(db_path) as connection:
        connection.execute("DELETE FROM effect_log")
        connection.execute("DELETE FROM idempotency_ledger")


def count_effects(db_path: Path) -> int:
    initialise_db(db_path)
    with sqlite3.connect(db_path) as connection:
        return int(connection.execute("SELECT COUNT(*) FROM effect_log").fetchone()[0])


def effect_rows(db_path: Path) -> list[dict[str, Any]]:
    initialise_db(db_path)
    with sqlite3.connect(db_path) as connection:
        connection.row_factory = sqlite3.Row
        return [dict(row) for row in connection.execute("SELECT * FROM effect_log ORDER BY id")]


def build_agent(db_path: Path, *, idempotent: bool, worker: str = "worker") -> Agent[AppContext]:
    initialise_db(db_path)

    @function_tool(
        name_override="deploy_release",
        description_override="Deploy one release after explicit human approval.",
        needs_approval=True,
    )
    def deploy_release(release: str, idempotency_key: str) -> str:
        if idempotent:
            with sqlite3.connect(db_path, timeout=10) as connection:
                connection.execute("BEGIN IMMEDIATE")
                existing = connection.execute(
                    "SELECT result FROM idempotency_ledger WHERE idempotency_key = ?",
                    (idempotency_key,),
                ).fetchone()
                if existing:
                    return f"reused:{existing[0]}"
                result = f"deployed:{release}"
                connection.execute(
                    "INSERT INTO effect_log(idempotency_key, release, worker) VALUES (?, ?, ?)",
                    (idempotency_key, release, worker),
                )
                connection.execute(
                    "INSERT INTO idempotency_ledger(idempotency_key, result) VALUES (?, ?)",
                    (idempotency_key, result),
                )
                return result

        with sqlite3.connect(db_path) as connection:
            connection.execute(
                "INSERT INTO effect_log(idempotency_key, release, worker) VALUES (?, ?, ?)",
                (idempotency_key, release, worker),
            )
        return f"deployed:{release}"

    return Agent(
        name="release-approval-agent",
        instructions=(
            "Prepare the release. The deploy_release tool is sensitive and must pause for approval. "
            "After the tool result, report the result exactly once."
        ),
        model=DeterministicApprovalModel(),
        tools=[deploy_release],
    )


def context_serializer(context: AppContext) -> Mapping[str, Any]:
    return {"tenant_id": context.tenant_id}


def context_deserializer(payload: Mapping[str, Any]) -> AppContext:
    return AppContext(
        tenant_id=str(payload["tenant_id"]),
        api_token=os.environ.get("LAB_API_TOKEN", "RESTORED_FROM_RUNTIME"),
    )


def write_state(path: Path, state: RunState[Any]) -> dict[str, Any]:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = state.to_json(context_serializer=context_serializer, strict_context=True)
    wrapper = {
        "app_state_version": APP_STATE_VERSION,
        "sdk_state": payload,
    }
    path.write_text(json.dumps(wrapper, ensure_ascii=False, indent=2), encoding="utf-8")
    return wrapper


async def read_state(path: Path, agent: Agent[Any]) -> RunState[Any]:
    wrapper = json.loads(path.read_text(encoding="utf-8"))
    if wrapper.get("app_state_version") != APP_STATE_VERSION:
        raise RuntimeError(
            f"Unsupported app state version: {wrapper.get('app_state_version')!r}; "
            f"expected {APP_STATE_VERSION!r}"
        )
    return await RunState.from_json(
        agent,
        wrapper["sdk_state"],
        context_deserializer=context_deserializer,
        strict_context=True,
    )


async def pause(state_path: Path, db_path: Path) -> dict[str, Any]:
    agent = build_agent(db_path, idempotent=True, worker="pause-process")
    result = await Runner.run(
        agent,
        "Deploy release 2026.07.24",
        context=AppContext(tenant_id="tenant-a", api_token=DEMO_SECRET),
    )
    if len(result.interruptions) != 1:
        raise AssertionError(f"expected one interruption, got {len(result.interruptions)}")
    state = result.to_state()
    wrapper = write_state(state_path, state)
    serialized = json.dumps(wrapper, ensure_ascii=False)
    interruption = result.interruptions[0]
    return {
        "interruption_count": len(result.interruptions),
        "tool_name": interruption.tool_name,
        "arguments": interruption.arguments,
        "sdk_schema_version": wrapper["sdk_state"].get("$schemaVersion"),
        "serialized_bytes": len(serialized.encode("utf-8")),
        "secret_present": DEMO_SECRET in serialized,
        "effect_count_before_approval": count_effects(db_path),
    }


async def approve_state(source_path: Path, target_path: Path, db_path: Path) -> dict[str, Any]:
    agent = build_agent(db_path, idempotent=True, worker="approval-process")
    state = await read_state(source_path, agent)
    interruptions = state.get_interruptions()
    if len(interruptions) != 1:
        raise AssertionError(f"expected one pending interruption, got {len(interruptions)}")
    state.approve(interruptions[0])
    wrapper = write_state(target_path, state)
    return {
        "approved": True,
        "pending_after_decision": len(state.get_interruptions()),
        "serialized_bytes": len(json.dumps(wrapper).encode("utf-8")),
    }


async def resume(state_path: Path, db_path: Path, *, idempotent: bool, worker: str) -> dict[str, Any]:
    agent = build_agent(db_path, idempotent=idempotent, worker=worker)
    state = await read_state(state_path, agent)
    result = await Runner.run(agent, state)
    return {
        "worker": worker,
        "idempotent": idempotent,
        "final_output": result.final_output,
        "effect_count": count_effects(db_path),
    }


async def reject(state_path: Path, db_path: Path) -> dict[str, Any]:
    agent = build_agent(db_path, idempotent=True, worker="reject-process")
    state = await read_state(state_path, agent)
    interruption = state.get_interruptions()[0]
    state.reject(
        interruption,
        rejection_message="Deployment was denied by the release manager.",
    )
    result = await Runner.run(agent, state)
    return {
        "final_output": result.final_output,
        "effect_count": count_effects(db_path),
    }


async def context_tests(db_path: Path) -> dict[str, Any]:
    agent = build_agent(db_path, idempotent=True, worker="context-test")

    mapping_result = await Runner.run(
        agent,
        "Deploy release 2026.07.24",
        context={"tenant_id": "tenant-a", "api_token": DEMO_SECRET},
    )
    mapping_payload = mapping_result.to_state().to_json(strict_context=True)
    mapping_serialized = json.dumps(mapping_payload, ensure_ascii=False)

    custom_result = await Runner.run(
        agent,
        "Deploy release 2026.07.24",
        context=AppContext("tenant-a", DEMO_SECRET),
    )
    custom_state = custom_result.to_state()
    strict_error = None
    try:
        custom_state.to_json(strict_context=True)
    except Exception as exc:  # exact SDK type is recorded in the result
        strict_error = f"{type(exc).__name__}: {exc}"

    safe_payload = custom_state.to_json(
        context_serializer=context_serializer,
        strict_context=True,
    )
    safe_serialized = json.dumps(safe_payload, ensure_ascii=False)
    restored = await RunState.from_json(
        agent,
        safe_payload,
        context_deserializer=context_deserializer,
        strict_context=True,
    )
    restored_context = restored._context.context  # experiment-only inspection

    return {
        "mapping_context_secret_present": DEMO_SECRET in mapping_serialized,
        "custom_context_strict_error": strict_error,
        "safe_serializer_secret_present": DEMO_SECRET in safe_serialized,
        "restored_tenant_id": restored_context.tenant_id,
        "restored_token_source": restored_context.api_token,
    }


def run_worker(state_path: Path, db_path: Path, *, idempotent: bool, worker: str) -> dict[str, Any]:
    completed = subprocess.run(
        [
            sys.executable,
            str(Path(__file__).resolve()),
            "resume",
            "--state",
            str(state_path),
            "--db",
            str(db_path),
            "--worker",
            worker,
            "--idempotent",
            "true" if idempotent else "false",
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(completed.stdout)


async def run_all(results_path: Path) -> dict[str, Any]:
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    clear_db(DEFAULT_DB)

    pause_result = await pause(DEFAULT_STATE, DEFAULT_DB)
    approval_result = await approve_state(DEFAULT_STATE, DEFAULT_APPROVED_STATE, DEFAULT_DB)

    clear_db(DEFAULT_DB)
    cross_process_approved = run_worker(
        DEFAULT_APPROVED_STATE,
        DEFAULT_DB,
        idempotent=True,
        worker="approved-worker",
    )

    clear_db(DEFAULT_DB)
    rejection_result = await reject(DEFAULT_STATE, DEFAULT_DB)

    clear_db(DEFAULT_DB)
    duplicate_non_idempotent = [
        run_worker(DEFAULT_APPROVED_STATE, DEFAULT_DB, idempotent=False, worker="retry-a"),
        run_worker(DEFAULT_APPROVED_STATE, DEFAULT_DB, idempotent=False, worker="retry-b"),
    ]
    non_idempotent_count = count_effects(DEFAULT_DB)
    non_idempotent_rows = effect_rows(DEFAULT_DB)

    clear_db(DEFAULT_DB)
    duplicate_idempotent = [
        run_worker(DEFAULT_APPROVED_STATE, DEFAULT_DB, idempotent=True, worker="retry-a"),
        run_worker(DEFAULT_APPROVED_STATE, DEFAULT_DB, idempotent=True, worker="retry-b"),
    ]
    idempotent_count = count_effects(DEFAULT_DB)
    idempotent_rows = effect_rows(DEFAULT_DB)

    context_result = await context_tests(DEFAULT_DB)

    results = {
        "environment": {
            "python": sys.version.split()[0],
            "openai_agents": getattr(agents, "__version__", "unknown"),
            "provider_api_used": False,
            "app_state_version": APP_STATE_VERSION,
        },
        "pause": pause_result,
        "approval_decision": approval_result,
        "cross_process_approved_resume": cross_process_approved,
        "rejection": rejection_result,
        "redelivery_without_idempotency": {
            "workers": duplicate_non_idempotent,
            "effect_count": non_idempotent_count,
            "rows": non_idempotent_rows,
        },
        "redelivery_with_idempotency": {
            "workers": duplicate_idempotent,
            "effect_count": idempotent_count,
            "rows": idempotent_rows,
        },
        "context_serialization": context_result,
        "assertions": {
            "paused_before_effect": pause_result["effect_count_before_approval"] == 0,
            "secret_removed_by_serializer": not pause_result["secret_present"],
            "approved_resume_effect_once": cross_process_approved["effect_count"] == 1,
            "rejection_effect_zero": rejection_result["effect_count"] == 0,
            "redelivery_duplicates_without_ledger": non_idempotent_count == 2,
            "redelivery_deduped_with_ledger": idempotent_count == 1,
            "mapping_context_can_leak_secret": context_result["mapping_context_secret_present"],
            "safe_custom_context_does_not_leak": not context_result["safe_serializer_secret_present"],
        },
    }
    if not all(results["assertions"].values()):
        raise AssertionError(json.dumps(results["assertions"], indent=2))
    results_path.parent.mkdir(parents=True, exist_ok=True)
    results_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    return results


def parse_bool(value: str) -> bool:
    return value.lower() in {"1", "true", "yes", "on"}


def parser() -> argparse.ArgumentParser:
    command_parser = argparse.ArgumentParser(description=__doc__)
    subparsers = command_parser.add_subparsers(dest="command", required=True)

    run_all_parser = subparsers.add_parser("run-all")
    run_all_parser.add_argument("--results", type=Path, default=DEFAULT_RESULTS)

    pause_parser = subparsers.add_parser("pause")
    pause_parser.add_argument("--state", type=Path, default=DEFAULT_STATE)
    pause_parser.add_argument("--db", type=Path, default=DEFAULT_DB)

    approve_parser = subparsers.add_parser("approve")
    approve_parser.add_argument("--state", type=Path, default=DEFAULT_STATE)
    approve_parser.add_argument("--output", type=Path, default=DEFAULT_APPROVED_STATE)
    approve_parser.add_argument("--db", type=Path, default=DEFAULT_DB)

    resume_parser = subparsers.add_parser("resume")
    resume_parser.add_argument("--state", type=Path, required=True)
    resume_parser.add_argument("--db", type=Path, required=True)
    resume_parser.add_argument("--worker", default="worker")
    resume_parser.add_argument("--idempotent", type=parse_bool, default=True)

    reject_parser = subparsers.add_parser("reject")
    reject_parser.add_argument("--state", type=Path, default=DEFAULT_STATE)
    reject_parser.add_argument("--db", type=Path, default=DEFAULT_DB)

    return command_parser


async def async_main() -> None:
    args = parser().parse_args()
    if args.command == "run-all":
        result = await run_all(args.results)
    elif args.command == "pause":
        result = await pause(args.state, args.db)
    elif args.command == "approve":
        result = await approve_state(args.state, args.output, args.db)
    elif args.command == "resume":
        result = await resume(
            args.state,
            args.db,
            idempotent=args.idempotent,
            worker=args.worker,
        )
    elif args.command == "reject":
        result = await reject(args.state, args.db)
    else:
        raise AssertionError(args.command)
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    asyncio.run(async_main())
