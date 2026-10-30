#!/usr/bin/env python3
"""Minimal import smoke test for the MCP Python SDK v2 beta.

Install the exact pre-release in an isolated environment before running:

    python3 -m pip install --target /tmp/xbstack-mcp-sdk-b2 mcp==2.0.0b2
    PYTHONPATH=/tmp/xbstack-mcp-sdk-b2 python3 sdk_smoke.py

This script intentionally does not start a server or claim protocol conformance.
It records the package version and the public module layout visible to Python.
"""

from __future__ import annotations

import importlib.metadata
import json
import pkgutil
from pathlib import Path

import mcp
import mcp.server


def main() -> int:
    result = {
        "package": "mcp",
        "version": importlib.metadata.version("mcp"),
        "top_level_modules": sorted(module.name for module in pkgutil.iter_modules(mcp.__path__)),
        "server_modules": sorted(module.name for module in pkgutil.iter_modules(mcp.server.__path__)),
        "legacy_fastmcp_import_available": False,
        "note": "Import smoke only; not a conformance or production readiness test.",
    }
    try:
        __import__("mcp.server.fastmcp")
        result["legacy_fastmcp_import_available"] = True
    except ModuleNotFoundError:
        result["legacy_fastmcp_import_available"] = False

    output = Path("results/sdk-smoke.json")
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
