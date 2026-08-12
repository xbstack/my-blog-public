# OpenAI Agents SDK RunState streamed-resume version matrix

Tested on August 5, 2026 with Python 3.10.2. No model-provider API was called.

## Scenario

1. A deterministic model requests an approval-gated function tool.
2. The run pauses before the tool executes.
3. The interruption is approved and resumed with `Runner.run_streamed()`.
4. The tool executes once.
5. An output guardrail trips after the approved side effect.
6. The SQLite session is inspected, then a new turn checks whether the approved tool call/output pair is replayed.

| openai-agents | Saved after guardrail trip | Tool output persisted | Pair replayed next turn | Result |
|---|---|---:|---:|---|
| 0.18.3 | `user`, `function_call` | No | No | Regression reproduced |
| 0.19.3 | `user`, `function_call`, `function_call_output` | Yes | Yes | Fixed |

## Interpretation

In 0.18.3, the external tool effect already happened, but the streamed resume session lost the approved `function_call_output` when the output guardrail aborted delivery. The next turn therefore had no complete call/output pair to replay.

In 0.19.3, the SDK persists the approved call/output pair before output guardrails run. The next turn receives both records in order. This matches the official v0.19.3 fix in PR #4126.

The fix does **not** make side effects exactly once. Replaying an approved `RunState` can still execute an external operation more than once unless the application uses a stable idempotency key and a unique ledger.

## Evidence files

- `stream-resume-0.18.3.json`
- `stream-resume-0.19.3.json`
- `version-matrix.json`
- `results.json` for the 0.19.3 cross-process, rejection, redelivery, and context-serialization lab

## Official references

- <https://github.com/openai/openai-agents-python/releases/tag/v0.19.3>
- <https://github.com/openai/openai-agents-python/pull/4126>
