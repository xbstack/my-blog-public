# Version matrix

Tested on 2026-08-04.

| OS | Python | langgraph | langgraph-prebuilt | langchain-core | Sync limit 1 | Async limit 1 | Semaphore workaround |
|---|---|---:|---:|---:|---:|---:|---:|
| macOS 26.5.2 arm64 | 3.11.15 | 1.2.10 | 1.1.0 | 1.5.3 | `max_active=1` | `max_active=4` | `max_active=1` |

## Matrix details

Four tools, each sleeping for approximately 80 ms, were invoked through one `ToolNode`.

| Mode | Configured limit | Observed maximum active tools | Elapsed |
|---|---:|---:|---:|
| sync | 1 | 1 | 0.3461 s |
| async | 1 | 4 | 0.0877 s |
| sync | 2 | 2 | 0.1727 s |
| async | 2 | 4 | 0.0845 s |
| sync | 4 | 4 | 0.0913 s |
| async | 4 | 4 | 0.0953 s |

Timing is machine-dependent. The concurrency counters and trace ordering are the primary evidence.

## Source-path verification

Installed `ToolNode._func()` uses `get_executor_for_config(config)` and `executor.map(...)`.

Installed `ToolNode._afunc()` appends all `_arun_one(...)` coroutines and executes `await asyncio.gather(*coros)` without reading `config["max_concurrency"]`.

`langchain_core.runnables.utils.gather_with_concurrency` is present with signature:

```text
(n: int | None, *coros: Coroutine[Any, Any, Any]) -> list[Any]
```

## Test suite

```text
11 passed in 1.11s
```
