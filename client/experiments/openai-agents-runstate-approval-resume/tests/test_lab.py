from __future__ import annotations

import asyncio
import json
import tempfile
import unittest
from pathlib import Path

import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from lab import run_all  # noqa: E402


class RunStateApprovalLabTest(unittest.TestCase):
    def test_complete_lab(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            result_path = Path(directory) / "results.json"
            result = asyncio.run(run_all(result_path))
            self.assertTrue(result_path.exists())
            persisted = json.loads(result_path.read_text(encoding="utf-8"))
            self.assertEqual(result, persisted)
            self.assertTrue(all(result["assertions"].values()))
            self.assertEqual(
                result["redelivery_without_idempotency"]["effect_count"],
                2,
            )
            self.assertEqual(
                result["redelivery_with_idempotency"]["effect_count"],
                1,
            )
            self.assertEqual(result["rejection"]["effect_count"], 0)


if __name__ == "__main__":
    unittest.main()
