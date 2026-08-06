from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from run_verification import first_iteration_payload, later_iteration_payload
from tool_choice_proxy import (
    inject_required_first_iteration,
    response_contains_tool_call,
    simulate_compatible_provider,
)


class ToolChoiceProxyTests(unittest.TestCase):
    def test_first_iteration_injects_required(self) -> None:
        request, decision = inject_required_first_iteration(first_iteration_payload())
        self.assertTrue(decision.injected)
        self.assertEqual(request["tool_choice"], "required")

    def test_later_iteration_is_not_forced(self) -> None:
        request, decision = inject_required_first_iteration(later_iteration_payload())
        self.assertFalse(decision.injected)
        self.assertEqual(decision.reason, "later_agent_iteration")
        self.assertNotIn("tool_choice", request)

    def test_explicit_none_is_preserved(self) -> None:
        payload = first_iteration_payload()
        payload["tool_choice"] = "none"
        request, decision = inject_required_first_iteration(payload)
        self.assertFalse(decision.injected)
        self.assertEqual(request["tool_choice"], "none")

    def test_no_tools_is_unchanged(self) -> None:
        payload = first_iteration_payload()
        payload["tools"] = []
        request, decision = inject_required_first_iteration(payload)
        self.assertFalse(decision.injected)
        self.assertEqual(decision.reason, "no_tools_bound")
        self.assertNotIn("tool_choice", request)

    def test_simulated_provider_requires_explicit_required(self) -> None:
        original = first_iteration_payload()
        response = simulate_compatible_provider(original, run_id=1)
        self.assertFalse(response_contains_tool_call(response))

        proxied, _ = inject_required_first_iteration(original)
        response = simulate_compatible_provider(proxied, run_id=2)
        self.assertTrue(response_contains_tool_call(response))


if __name__ == "__main__":
    unittest.main()
