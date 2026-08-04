from __future__ import annotations

import asyncio
import time
from dataclasses import dataclass
from typing import Awaitable, Callable, TypeVar

from langchain_core.messages import AIMessage
from langchain_core.tools import StructuredTool
from langgraph.graph import END, START, MessagesState, StateGraph
from langgraph.prebuilt import ToolNode

T = TypeVar("T")


async def gather_with_limit(limit: int | None, *coroutines: Awaitable[T]) -> list[T]:
    """A small public-code equivalent of a bounded gather operation."""
    if limit is None:
        return list(await asyncio.gather(*coroutines))
    if limit < 1:
        raise ValueError("limit must be at least 1")

    semaphore = asyncio.Semaphore(limit)

    async def run(coroutine: Awaitable[T]) -> T:
        async with semaphore:
            return await coroutine

    return list(await asyncio.gather(*(run(coroutine) for coroutine in coroutines)))


@dataclass
class SemaphoreResult:
    max_active: int
    elapsed_seconds: float
    active_after_run: int
    semaphore_locked_after_run: bool
    trace: list[str]


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


def guarded_coroutine(
    semaphore: asyncio.Semaphore,
    function: Callable[[], Awaitable[str]],
) -> Callable[[], Awaitable[str]]:
    async def run() -> str:
        async with semaphore:
            return await function()

    return run


def compile_graph(tools: list[StructuredTool]):
    builder = StateGraph(MessagesState)
    builder.add_node("tools", ToolNode(tools, handle_tool_errors=Exception))
    builder.add_edge(START, "tools")
    builder.add_edge("tools", END)
    return builder.compile()


async def run_semaphore_workaround(
    max_concurrency: int = 1,
    tool_count: int = 4,
    delay: float = 0.08,
    include_failure: bool = False,
) -> SemaphoreResult:
    semaphore = asyncio.Semaphore(max_concurrency)
    probe = AsyncProbe()
    names = [f"guarded_tool_{index}" for index in range(tool_count)]
    tools: list[StructuredTool] = []

    for index, name in enumerate(names):
        async def raw_tool(
            tool_name: str = name,
            should_fail: bool = include_failure and index == 0,
        ) -> str:
            return await probe.run(tool_name, delay, fail=should_fail)

        tools.append(
            StructuredTool.from_function(
                coroutine=guarded_coroutine(semaphore, raw_tool),
                name=name,
                description=f"Semaphore-guarded async probe tool {name}",
            )
        )

    message = AIMessage(
        content="",
        tool_calls=[
            {"id": f"call-{index}", "name": name, "args": {}}
            for index, name in enumerate(names, start=1)
        ],
    )
    graph = compile_graph(tools)
    started = time.perf_counter()
    await graph.ainvoke(
        {"messages": [message]},
        config={"max_concurrency": max_concurrency},
    )
    elapsed = time.perf_counter() - started
    return SemaphoreResult(
        max_active=probe.max_active,
        elapsed_seconds=round(elapsed, 4),
        active_after_run=probe.active,
        semaphore_locked_after_run=semaphore.locked(),
        trace=probe.trace,
    )


if __name__ == "__main__":
    result = asyncio.run(run_semaphore_workaround())
    print(result)
