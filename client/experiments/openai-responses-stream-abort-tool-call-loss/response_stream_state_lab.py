from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any, Literal


ERROR_TEMPLATE = "No tool call found for function call output with call_id {call_id}."


class NoToolCallFound(ValueError):
    """Raised when a function_call_output references an uncommitted call_id."""


@dataclass(frozen=True)
class FunctionCall:
    item_id: str
    call_id: str
    name: str
    arguments: dict[str, Any]
    status: Literal["in_progress", "completed"] = "in_progress"


@dataclass(frozen=True)
class FunctionCallOutput:
    call_id: str
    output: dict[str, Any]


@dataclass
class ConversationStore:
    """A deterministic model of the persistence boundary described in Issue #3561.

    Items emitted while a response is streaming are provisional. They only become
    addressable conversation items after the response reaches the commit boundary.
    Aborting the stream discards the provisional items.
    """

    committed_items: list[FunctionCall | FunctionCallOutput] = field(default_factory=list)
    provisional_items: list[FunctionCall] = field(default_factory=list)
    response_status: Literal["idle", "streaming", "completed", "aborted"] = "idle"

    def begin_stream(self) -> None:
        if self.response_status == "streaming":
            raise RuntimeError("a response is already streaming")
        self.provisional_items = []
        self.response_status = "streaming"

    def emit_function_call(self, call: FunctionCall) -> FunctionCall:
        if self.response_status != "streaming":
            raise RuntimeError("function calls can only be emitted while streaming")
        self.provisional_items.append(call)
        return call

    def complete_stream(self) -> None:
        if self.response_status != "streaming":
            raise RuntimeError("no active stream to complete")
        self.committed_items.extend(
            FunctionCall(
                item_id=item.item_id,
                call_id=item.call_id,
                name=item.name,
                arguments=item.arguments,
                status="completed",
            )
            for item in self.provisional_items
        )
        self.provisional_items = []
        self.response_status = "completed"

    def abort_stream(self) -> None:
        if self.response_status != "streaming":
            raise RuntimeError("no active stream to abort")
        self.provisional_items = []
        self.response_status = "aborted"

    def list_item_types(self) -> list[str]:
        result: list[str] = []
        for item in self.committed_items:
            if isinstance(item, FunctionCall):
                result.append("function_call")
            else:
                result.append("function_call_output")
        return result

    def has_call(self, call_id: str) -> bool:
        return any(
            isinstance(item, FunctionCall) and item.call_id == call_id
            for item in self.committed_items
        )

    def submit_output(self, output: FunctionCallOutput) -> None:
        if not self.has_call(output.call_id):
            raise NoToolCallFound(ERROR_TEMPLATE.format(call_id=output.call_id))
        self.committed_items.append(output)


@dataclass
class IdempotencyLedger:
    completed: dict[str, dict[str, Any]] = field(default_factory=dict)
    side_effect_count: int = 0

    def execute(self, key: str, result: dict[str, Any]) -> dict[str, Any]:
        if key in self.completed:
            return self.completed[key]
        self.side_effect_count += 1
        self.completed[key] = result
        return result


def weather_call(call_id: str = "call_demo_001") -> FunctionCall:
    return FunctionCall(
        item_id="fc_demo_001",
        call_id=call_id,
        name="get_weather",
        arguments={"location": "Amsterdam"},
    )


def run_normal_completion() -> dict[str, Any]:
    store = ConversationStore()
    ledger = IdempotencyLedger()
    call = weather_call("call_normal")

    store.begin_stream()
    store.emit_function_call(call)
    store.complete_stream()

    tool_result = ledger.execute(call.call_id, {"temp": 18, "condition": "cloudy"})
    store.submit_output(FunctionCallOutput(call_id=call.call_id, output=tool_result))

    return {
        "scenario": "normal_completion_then_execute",
        "stream_status": store.response_status,
        "persisted_item_types": store.list_item_types(),
        "call_committed_before_tool": True,
        "tool_side_effect_count": ledger.side_effect_count,
        "next_turn_status": "accepted",
        "error": None,
    }


def run_abort_with_eager_tool_execution() -> dict[str, Any]:
    store = ConversationStore()
    ledger = IdempotencyLedger()
    call = weather_call("call_aborted")

    store.begin_stream()
    store.emit_function_call(call)

    # Unsafe policy: execute as soon as response.output_item.added exposes a call_id.
    tool_result = ledger.execute(call.call_id, {"temp": 18, "condition": "cloudy"})
    store.abort_stream()

    error: str | None = None
    try:
        store.submit_output(FunctionCallOutput(call_id=call.call_id, output=tool_result))
    except NoToolCallFound as exc:
        error = str(exc)

    return {
        "scenario": "abort_after_output_item_added_with_eager_execution",
        "stream_status": store.response_status,
        "persisted_item_types": store.list_item_types(),
        "call_committed_before_tool": False,
        "tool_side_effect_count": ledger.side_effect_count,
        "next_turn_status": "rejected",
        "error": error,
    }


def run_abort_with_reconciliation_gate() -> dict[str, Any]:
    store = ConversationStore()
    ledger = IdempotencyLedger()
    call = weather_call("call_reconcile")

    store.begin_stream()
    store.emit_function_call(call)
    store.abort_stream()

    # Safe policy: reconcile the remote conversation before executing side effects.
    committed = store.has_call(call.call_id)
    if committed:
        ledger.execute(call.call_id, {"temp": 18, "condition": "cloudy"})

    return {
        "scenario": "abort_then_reconcile_before_execution",
        "stream_status": store.response_status,
        "persisted_item_types": store.list_item_types(),
        "call_committed_before_tool": committed,
        "tool_side_effect_count": ledger.side_effect_count,
        "next_turn_status": "not_submitted",
        "recovery_action": "discard_call_id_and_start_a_new_turn",
        "error": None,
    }


def run_duplicate_delivery_with_idempotency() -> dict[str, Any]:
    store = ConversationStore()
    ledger = IdempotencyLedger()
    call = weather_call("call_retry")

    store.begin_stream()
    store.emit_function_call(call)
    store.complete_stream()

    first = ledger.execute(call.call_id, {"temp": 18, "condition": "cloudy"})
    second = ledger.execute(call.call_id, {"temp": 18, "condition": "cloudy"})
    store.submit_output(FunctionCallOutput(call_id=call.call_id, output=first))

    return {
        "scenario": "committed_call_duplicate_delivery_with_idempotency",
        "stream_status": store.response_status,
        "persisted_item_types": store.list_item_types(),
        "call_committed_before_tool": True,
        "tool_delivery_count": 2,
        "tool_side_effect_count": ledger.side_effect_count,
        "results_equal": first == second,
        "next_turn_status": "accepted",
        "error": None,
    }


def run_all() -> dict[str, Any]:
    scenarios = [
        run_normal_completion(),
        run_abort_with_eager_tool_execution(),
        run_abort_with_reconciliation_gate(),
        run_duplicate_delivery_with_idempotency(),
    ]
    return {
        "experiment": "openai-responses-stream-abort-tool-call-loss",
        "evidence_scope": {
            "live_openai_api_called": False,
            "server_bug_independently_reproduced": False,
            "official_issue_used_as_server_behavior_evidence": True,
            "local_contract_and_recovery_policy_tested": True,
        },
        "invariant": (
            "A streamed function_call is not safe to execute solely because the client "
            "received response.output_item.added; side effects require a committed call "
            "or an application-owned durable intent plus idempotency."
        ),
        "scenarios": scenarios,
    }


def serializable_result() -> dict[str, Any]:
    result = run_all()
    # Exercise dataclass serialization in the public lab without exposing secrets.
    result["sample_call"] = asdict(weather_call())
    return result
