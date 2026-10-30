#!/usr/bin/env python3
"""Validate that a captured MCP stdio stdout file contains only JSON-RPC 2.0 messages."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Check every non-empty stdout line as a JSON-RPC 2.0 message."
    )
    parser.add_argument("stdout_log", type=Path, help="Path to the captured stdout log")
    return parser.parse_args()


def validate_message(value: Any, line_number: int) -> str | None:
    if not isinstance(value, dict):
        return f"line {line_number}: expected a JSON object, got {type(value).__name__}"
    if value.get("jsonrpc") != "2.0":
        return f"line {line_number}: missing jsonrpc=2.0"
    if not any(key in value for key in ("method", "result", "error")):
        return f"line {line_number}: no method, result, or error field"
    return None


def main() -> int:
    args = parse_args()
    path: Path = args.stdout_log.expanduser()

    if not path.is_file():
        print(f"ERROR: file does not exist: {path}", file=sys.stderr)
        return 2

    checked = 0
    errors: list[str] = []

    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except UnicodeDecodeError as exc:
        print(f"ERROR: stdout is not valid UTF-8: {exc}", file=sys.stderr)
        return 2
    except OSError as exc:
        print(f"ERROR: cannot read {path}: {exc}", file=sys.stderr)
        return 2

    for line_number, raw in enumerate(lines, 1):
        line = raw.strip()
        if not line:
            continue
        checked += 1
        try:
            message = json.loads(line)
        except json.JSONDecodeError as exc:
            preview = line[:160]
            errors.append(
                f"line {line_number}: invalid JSON ({exc.msg} at column {exc.colno}): {preview!r}"
            )
            continue

        error = validate_message(message, line_number)
        if error:
            errors.append(error)

    if errors:
        print("FAILED: stdout contains invalid MCP protocol output", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    if checked == 0:
        print(
            "PASS: stdout has no non-empty lines. The server may be waiting for initialize; "
            "inspect stderr and the client startup command next."
        )
        return 0

    print(f"PASS: validated {checked} JSON-RPC 2.0 message(s) in {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
