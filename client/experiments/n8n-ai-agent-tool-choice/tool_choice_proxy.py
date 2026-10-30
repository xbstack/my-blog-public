"""Deterministic request-shape experiment for n8n AI Agent tool calling.

This module does not impersonate n8n or a real model. It isolates the contract
reported in n8n issue #31135: an OpenAI-compatible provider receives tools on
the first agent iteration, but no explicit ``tool_choice``. A small provider
may therefore return prose instead of a tool call.
"""

from __future__ import annotations

from copy import deepcopy
from dataclasses import asdict, dataclass
from typing import Any, Mapping

JsonObject = dict[str, Any]


@dataclass(frozen=True)
class ProxyDecision:
    injected: bool
    reason: str
    previous_tool_call_seen: bool
    original_tool_choice: Any
    resulting_tool_choice: Any

    def to_dict(self) -> JsonObject:
        return asdict(self)


def _assistant_already_called_tool(messages: list[Mapping[str, Any]]) -> bool:
    for message in messages:
        if message.get("role") != "assistant":
            continue
        if message.get("tool_calls") or message.get("function_call"):
            return True
    return False


def should_force_tool_use(payload: Mapping[str, Any]) -> tuple[bool, str, bool]:
    """Return whether iteration one should force a tool call.

    The proxy only intervenes when tools are present, the caller did not make
    a non-default explicit choice, and no previous assistant tool call exists.
    """

    tools = payload.get("tools") or []
    if not tools:
        return False, "no_tools_bound", False

    messages = payload.get("messages") or []
    previous_tool_call_seen = _assistant_already_called_tool(messages)
    if previous_tool_call_seen:
        return False, "later_agent_iteration", True

    tool_choice = payload.get("tool_choice")
    if tool_choice not in (None, "auto"):
        return False, "explicit_non_default_choice", False

    return True, "first_iteration_with_tools", False


def inject_required_first_iteration(payload: Mapping[str, Any]) -> tuple[JsonObject, ProxyDecision]:
    """Clone a request and inject ``tool_choice=required`` when warranted."""

    result = deepcopy(dict(payload))
    original = result.get("tool_choice")
    should_force, reason, previous_tool_call_seen = should_force_tool_use(result)

    if should_force:
        result["tool_choice"] = "required"

    decision = ProxyDecision(
        injected=should_force,
        reason=reason,
        previous_tool_call_seen=previous_tool_call_seen,
        original_tool_choice=original,
        resulting_tool_choice=result.get("tool_choice"),
    )
    return result, decision


def simulate_compatible_provider(payload: Mapping[str, Any], *, run_id: int) -> JsonObject:
    """Return a deterministic provider response for request-contract testing.

    This deliberately models a weak tool-calling prior: ``required`` produces
    a tool call, while an absent or ``auto`` choice produces prose. It is not a
    benchmark of Mistral, Ollama, vLLM, LM Studio, or any hosted provider.
    """

    tools = payload.get("tools") or []
    choice = payload.get("tool_choice", "auto")

    if tools and choice == "required":
        first = tools[0]
        function = first.get("function") or {}
        tool_name = function.get("name", "get_value")
        return {
            "id": f"contract-run-{run_id}",
            "choices": [
                {
                    "finish_reason": "tool_calls",
                    "message": {
                        "role": "assistant",
                        "content": None,
                        "tool_calls": [
                            {
                                "id": f"call-{run_id}",
                                "type": "function",
                                "function": {"name": tool_name, "arguments": "{}"},
                            }
                        ],
                    },
                }
            ],
        }

    return {
        "id": f"contract-run-{run_id}",
        "choices": [
            {
                "finish_reason": "stop",
                "message": {
                    "role": "assistant",
                    "content": "The value is probably 42.",
                },
            }
        ],
    }


def response_contains_tool_call(response: Mapping[str, Any]) -> bool:
    choices = response.get("choices") or []
    if not choices:
        return False
    message = choices[0].get("message") or {}
    return bool(message.get("tool_calls") or message.get("function_call"))
