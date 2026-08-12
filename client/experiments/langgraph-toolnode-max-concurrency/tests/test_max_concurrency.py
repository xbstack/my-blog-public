from __future__ import annotations

import asyncio

import pytest

from repro import run_async_case, run_sync_case
from workaround import gather_with_limit, run_semaphore_workaround


@pytest.mark.parametrize("limit,expected", [(1, 1), (2, 2), (4, 4)])
def test_sync_toolnode_respects_max_concurrency(limit: int, expected: int) -> None:
    result = run_sync_case(limit, tool_count=4, delay=0.03)
    assert result.max_active == expected
    assert result.respected_limit is True


@pytest.mark.parametrize("limit", [1, 2])
def test_async_toolnode_currently_ignores_lower_max_concurrency(limit: int) -> None:
    result = asyncio.run(run_async_case(limit, tool_count=4, delay=0.03))
    assert result.max_active == 4
    assert result.respected_limit is False


def test_async_toolnode_limit_four_matches_tool_count() -> None:
    result = asyncio.run(run_async_case(4, tool_count=4, delay=0.03))
    assert result.max_active == 4
    assert result.respected_limit is True


@pytest.mark.parametrize("limit,expected", [(1, 1), (2, 2), (4, 4)])
def test_semaphore_workaround_enforces_limit(limit: int, expected: int) -> None:
    result = asyncio.run(
        run_semaphore_workaround(
            max_concurrency=limit,
            tool_count=4,
            delay=0.03,
        )
    )
    assert result.max_active == expected
    assert result.active_after_run == 0
    assert result.semaphore_locked_after_run is False


def test_semaphore_workaround_releases_permit_after_tool_error() -> None:
    result = asyncio.run(
        asyncio.wait_for(
            run_semaphore_workaround(
                max_concurrency=1,
                tool_count=3,
                delay=0.02,
                include_failure=True,
            ),
            timeout=2,
        )
    )
    assert result.max_active == 1
    assert result.active_after_run == 0
    assert result.semaphore_locked_after_run is False
    assert len([item for item in result.trace if item.endswith(":end")]) == 3


def test_bounded_gather_helper_limits_coroutines() -> None:
    async def scenario() -> int:
        active = 0
        max_active = 0

        async def job() -> None:
            nonlocal active, max_active
            active += 1
            max_active = max(max_active, active)
            try:
                await asyncio.sleep(0.02)
            finally:
                active -= 1

        await gather_with_limit(2, *(job() for _ in range(5)))
        return max_active

    assert asyncio.run(scenario()) == 2
