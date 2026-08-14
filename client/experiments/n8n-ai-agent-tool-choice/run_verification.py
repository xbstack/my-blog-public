from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from tool_choice_proxy import (
    inject_required_first_iteration,
    response_contains_tool_call,
    simulate_compatible_provider,
)

ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "results"


def first_iteration_payload() -> dict:
    return {
        "model": "mistralai/Mistral-Small-24B-Instruct",
        "messages": [
            {
                "role": "system",
                "content": "You MUST call the get_value tool. Do not answer without calling it.",
            },
            {"role": "user", "content": "What is the value?"},
        ],
        "tools": [
            {
                "type": "function",
                "function": {
                    "name": "get_value",
                    "description": "Returns the authoritative value.",
                    "parameters": {"type": "object", "properties": {}, "required": []},
                },
            }
        ],
        "temperature": 0.0,
        "stream": False,
    }


def later_iteration_payload() -> dict:
    payload = first_iteration_payload()
    payload["messages"].extend(
        [
            {
                "role": "assistant",
                "content": None,
                "tool_calls": [
                    {
                        "id": "call-existing",
                        "type": "function",
                        "function": {"name": "get_value", "arguments": "{}"},
                    }
                ],
            },
            {"role": "tool", "tool_call_id": "call-existing", "content": "42"},
        ]
    )
    return payload


def run_many(payload: dict, *, count: int = 20) -> dict:
    responses = [simulate_compatible_provider(payload, run_id=index) for index in range(count)]
    tool_calls = sum(response_contains_tool_call(response) for response in responses)
    return {
        "runs": count,
        "tool_call_responses": tool_calls,
        "text_responses": count - tool_calls,
        "tool_call_rate": tool_calls / count,
    }


def main() -> None:
    RESULTS.mkdir(parents=True, exist_ok=True)

    original = first_iteration_payload()
    proxied, decision = inject_required_first_iteration(original)
    later, later_decision = inject_required_first_iteration(later_iteration_payload())

    explicit_none = first_iteration_payload()
    explicit_none["tool_choice"] = "none"
    explicit_none_result, explicit_none_decision = inject_required_first_iteration(explicit_none)

    no_tools = first_iteration_payload()
    no_tools["tools"] = []
    no_tools_result, no_tools_decision = inject_required_first_iteration(no_tools)

    verification = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "experiment_type": "deterministic_request_contract",
        "scope": {
            "verified": [
                "An absent tool_choice is semantically different from required in the simulated compatible provider.",
                "The proxy injects required only on the first iteration when tools exist.",
                "The proxy preserves explicit non-default choices and stops forcing after a prior assistant tool call.",
            ],
            "not_verified": [
                "Current n8n source code or hosted n8n behavior.",
                "Real Mistral, Ollama, vLLM, LM Studio, IONOS, or Infomaniak accuracy.",
                "A general tool-calling success rate for any model family.",
            ],
        },
        "scenarios": {
            "first_iteration_without_tool_choice": run_many(original),
            "first_iteration_with_proxy": run_many(proxied),
            "later_iteration_after_tool_result": {
                "decision": later_decision.to_dict(),
                "request_tool_choice": later.get("tool_choice"),
            },
            "explicit_none_is_preserved": {
                "decision": explicit_none_decision.to_dict(),
                "request_tool_choice": explicit_none_result.get("tool_choice"),
            },
            "no_tools_is_unchanged": {
                "decision": no_tools_decision.to_dict(),
                "request_has_tool_choice": "tool_choice" in no_tools_result,
            },
        },
        "proxy_decision": decision.to_dict(),
    }

    (RESULTS / "request-without-tool-choice.json").write_text(
        json.dumps(original, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (RESULTS / "request-with-required.json").write_text(
        json.dumps(proxied, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (RESULTS / "verification.json").write_text(
        json.dumps(verification, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(json.dumps(verification, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
