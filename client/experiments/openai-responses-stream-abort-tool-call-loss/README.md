# OpenAI Responses API Stream Abort Tool Call Loss Lab

This lab models the persistence boundary behind OpenAI Python SDK Issue #3561:

> Aborting a streaming Responses API request after `response.output_item.added` exposes a `function_call` can leave the Conversation without that call. Submitting the matching `function_call_output` on the next turn then fails with `400 No tool call found for function call output`.

## Evidence boundary

This repository does **not** call the live OpenAI API and does not claim an independent reproduction of OpenAI's server behavior. The server-side behavior comes from the official `openai/openai-python` issue. The local code tests the application contract and the recovery policies that follow from that behavior.

- Live OpenAI API called: no
- OpenAI server bug independently reproduced: no
- Official issue used as evidence: yes
- Local persistence contract tested: yes
- Recovery gate tested: yes
- Idempotency behavior tested: yes

## What the lab proves

The lab separates streamed visibility from durable commitment:

1. `response.output_item.added` can expose a provisional `function_call`.
2. A completed response commits the call to the Conversation.
3. An aborted response discards provisional items in the modeled failure path.
4. Executing a side-effecting tool before commitment can create an orphaned side effect.
5. Reconciliation before execution prevents the orphaned side effect.
6. Idempotency is still required after a call is committed because delivery can repeat.

## Scenarios

| Scenario | Persisted items | Tool side effects | Next turn |
|---|---|---:|---|
| Complete stream, then execute | `function_call`, `function_call_output` | 1 | accepted |
| Execute on `output_item.added`, then abort | none | 1 | rejected with `No tool call found...` |
| Abort, reconcile, then decide | none | 0 | stale `call_id` discarded |
| Committed call delivered twice with idempotency | call + output | 1 | accepted |

## Run

```bash
python3 experiments/openai-responses-stream-abort-tool-call-loss/run_experiment.py
python3 -m unittest discover -s experiments/openai-responses-stream-abort-tool-call-loss/tests -v
```

The result is written to:

```text
experiments/openai-responses-stream-abort-tool-call-loss/results/verification.json
```

## Production rule

Do not treat a streamed `function_call` as authorization to execute an external side effect merely because the client received `response.output_item.added` or `response.function_call_arguments.done`.

Use one of these policies:

- wait for a response completion boundary and confirm the Conversation contains the call;
- persist an application-owned execution intent before calling the tool;
- protect every external write with a stable idempotency key and a result ledger;
- after an abort or ambiguous disconnect, reconcile remote state before executing or submitting output;
- if the `call_id` is absent, discard it and start a new turn rather than attaching output to a nonexistent call.

## Sources

- OpenAI Python SDK Issue #3561: https://github.com/openai/openai-python/issues/3561
- OpenAI Responses streaming events: https://developers.openai.com/api/docs/guides/streaming-responses
- OpenAI function calling guide: https://developers.openai.com/api/docs/guides/function-calling
- OpenAI conversation state guide: https://developers.openai.com/api/docs/guides/conversation-state
- Related JavaScript Agents SDK fix: https://github.com/openai/openai-agents-js/pull/1241

## Article

- Chinese: https://www.xbstack.com/ai/openai-responses-api-stream-abort-tool-call-lost/?utm_source=github&utm_medium=referral&utm_campaign=openai-responses-stream-abort&utm_content=repository_readme
- English: https://www.xbstack.com/en/ai/openai-responses-api-stream-abort-tool-call-lost/?utm_source=github&utm_medium=referral&utm_campaign=openai-responses-stream-abort&utm_content=repository_readme
