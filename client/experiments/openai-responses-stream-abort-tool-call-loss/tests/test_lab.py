from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from response_stream_state_lab import (  # noqa: E402
    ERROR_TEMPLATE,
    run_abort_with_eager_tool_execution,
    run_abort_with_reconciliation_gate,
    run_duplicate_delivery_with_idempotency,
    run_normal_completion,
)


class ResponseStreamStateLabTests(unittest.TestCase):
    def test_normal_completion_commits_call_before_output(self) -> None:
        result = run_normal_completion()
        self.assertEqual(
            result["persisted_item_types"],
            ["function_call", "function_call_output"],
        )
        self.assertEqual(result["tool_side_effect_count"], 1)
        self.assertEqual(result["next_turn_status"], "accepted")
        self.assertIsNone(result["error"])

    def test_abort_after_added_creates_orphaned_side_effect(self) -> None:
        result = run_abort_with_eager_tool_execution()
        self.assertEqual(result["persisted_item_types"], [])
        self.assertEqual(result["tool_side_effect_count"], 1)
        self.assertEqual(result["next_turn_status"], "rejected")
        self.assertEqual(
            result["error"],
            ERROR_TEMPLATE.format(call_id="call_aborted"),
        )

    def test_reconciliation_gate_prevents_tool_execution_after_abort(self) -> None:
        result = run_abort_with_reconciliation_gate()
        self.assertEqual(result["persisted_item_types"], [])
        self.assertEqual(result["tool_side_effect_count"], 0)
        self.assertEqual(
            result["recovery_action"],
            "discard_call_id_and_start_a_new_turn",
        )

    def test_idempotency_prevents_duplicate_side_effects(self) -> None:
        result = run_duplicate_delivery_with_idempotency()
        self.assertEqual(result["tool_delivery_count"], 2)
        self.assertEqual(result["tool_side_effect_count"], 1)
        self.assertTrue(result["results_equal"])
        self.assertEqual(result["next_turn_status"], "accepted")


if __name__ == "__main__":
    unittest.main()
