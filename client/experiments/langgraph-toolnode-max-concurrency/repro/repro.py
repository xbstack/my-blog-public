from __future__ import annotations

import argparse
import asyncio
import json
import platform
import sys
import threading
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Iterable

from importlib.metadata import version
from langchain_core.messages import AIMessage
from langchain_core.tools import StructuredTool
from langgraph.graph import END, START, MessagesState, StateGraph
from langgraph.prebuilt import ToolNode


@dataclass
class ProbeResult:
    mode: str
    max_concurrency: int
    tool_count: int
    max_active: int
    elapsed_seconds: float
    trace: list[str]

    @property
    def respected_limit(self) -> bool:
        return self.max_active <= self.max_concurrency


class SyncProbe:
    def __init__(self) -> None:
        self.active = 0
        self.max_active = 0
        self.trace: list[str] = []
        self.lock = threading.Lock()

    def run(self, name: str, delay: float, fail: bool = False) -> str:
        with self.lock:
            self.trace.append(f"{name}:start")
            self.active += 1
            self.max_active = max(self.max_active, self.active)
        try:
            time.sleep(delay)
            if fail:
                raise RuntimeError(f"{name} failed")
            return "ok"
        finally:
            with self.lock:
                self.active -= 1
                self.trace.append(f"{name}:end")


class AsyncProbe:
    def __init__(self) -> None:
        self.active = 0
        self.max_active = 0
        self.trace: list[str] = []

    async def run(self, name: str, delay: float, fail: bool = False) -> str:
        self.trace.append(f"{name}:start")
        self.active += 1
        self.max_active = max(self.max_active, self.active)
        try:
            await asyncio.sleep(delay)
            if fail:
                raise RuntimeError(f"{name} failed")
            return "ok"
        finally:
            self.active -= 1
            self.trace.append(f"{name}:end")


def graph_input(tool_names: Iterable[str]) -> dict[str, Any]:
    return {
        "messages": [
            AIMessage(
                content="",
                tool_calls=[
                    {"id": f"call-{index}", "name": name, "args": {}}
                    for index, name in enumerate(tool_names, start=1)
                ],
            )
        ]
    }


def compile_graph(tools: list[StructuredTool]):
    builder = StateGraph(MessagesState)
    builder.add_node("tools", ToolNode(tools))
    builder.add_edge(START, "tools")
    builder.add_edge("tools", END)
    return builder.compile()


def run_sync_case(max_concurrency: int, tool_count: int = 4, delay: float = 0.08) -> ProbeResult:
    probe = SyncProbe()
    names = [f"sync_tool_{index}" for index in range(tool_count)]
    tools: list[StructuredTool] = []

    for name in names:
        def tool_function(tool_name: str = name) -> str:
            return probe.run(tool_name, delay)

        tools.append(
            StructuredTool.from_function(
                func=tool_function,
                name=name,
                description=f"Sync probe tool {name}",
            )
        )

    graph = compile_graph(tools)
    started = time.perf_counter()
    graph.invoke(graph_input(names), config={"max_concurrency": max_concurrency})
    elapsed = time.perf_counter() - started
    return ProbeResult(
        mode="sync",
        max_concurrency=max_concurrency,
        tool_count=tool_count,
        max_active=probe.max_active,
        elapsed_seconds=round(elapsed, 4),
        trace=probe.trace,
    )


async def run_async_case(
    max_concurrency: int,
    tool_count: int = 4,
    delay: float = 0.08,
) -> ProbeResult:
    probe = AsyncProbe()
    names = [f"async_tool_{index}" for index in range(tool_count)]
    tools: list[StructuredTool] = []

    for name in names:
        async def tool_coroutine(tool_name: str = name) -> str:
            return await probe.run(tool_name, delay)

        tools.append(
            StructuredTool.from_function(
                coroutine=tool_coroutine,
                name=name,
                description=f"Async probe tool {name}",
            )
        )

    graph = compile_graph(tools)
    started = time.perf_counter()
    await graph.ainvoke(graph_input(names), config={"max_concurrency": max_concurrency})
    elapsed = time.perf_counter() - started
    return ProbeResult(
        mode="async",
        max_concurrency=max_concurrency,
        tool_count=tool_count,
        max_active=probe.max_active,
        elapsed_seconds=round(elapsed, 4),
        trace=probe.trace,
    )


async def run_matrix(limits: Iterable[int] = (1, 2, 4)) -> list[ProbeResult]:
    results: list[ProbeResult] = []
    for limit in limits:
        results.append(run_sync_case(limit))
        results.append(await run_async_case(limit))
    return results


def environment() -> dict[str, str]:
    packages = ["langgraph", "langgraph-prebuilt", "langchain-core", "pytest"]
    return {
        "os": platform.platform(),
        "python": sys.version.replace("\n", " "),
        **{package: version(package) for package in packages},
    }


def render_text(results: list[ProbeResult]) -> str:
    lines = ["environment:", json.dumps(environment(), ensure_ascii=False, indent=2), "", "results:"]
    for result in results:
        lines.append(
            f"{result.mode:5s} max_concurrency={result.max_concurrency} "
            f"max_active={result.max_active} respected={result.respected_limit} "
            f"elapsed={result.elapsed_seconds:.4f}s"
        )
        lines.append(f"  trace={result.trace}")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Reproduce ToolNode async max_concurrency behavior")
    parser.add_argument("--json-output", type=Path)
    parser.add_argument("--text-output", type=Path)
    args = parser.parse_args()

    results = asyncio.run(run_matrix())
    text = render_text(results)
    print(text, end="")

    payload = {
        "environment": environment(),
        "results": [
            {**asdict(result), "respected_limit": result.respected_limit}
            for result in results
        ],
    }
    if args.json_output:
        args.json_output.parent.mkdir(parents=True, exist_ok=True)
        args.json_output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if args.text_output:
        args.text_output.parent.mkdir(parents=True, exist_ok=True)
        args.text_output.write_text(text, encoding="utf-8")

    async_limit_one = next(
        result for result in results if result.mode == "async" and result.max_concurrency == 1
    )
    return 1 if async_limit_one.respected_limit else 0


if __name__ == "__main__":
    raise SystemExit(main())
