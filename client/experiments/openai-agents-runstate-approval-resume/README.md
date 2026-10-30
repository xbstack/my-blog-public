# OpenAI Agents SDK RunState Approval Resume Lab

A provider-free, reproducible lab for OpenAI Agents SDK Tool Approval and `RunState`. It now covers two layers:

1. the current `openai-agents==0.19.3` cross-process approval, rejection, redelivery, idempotency, and context-serialization behavior;
2. a `0.18.3` versus `0.19.3` regression matrix for approved tool-output persistence during streamed resume.

Read the full bilingual analysis on [XBSTACK](https://www.xbstack.com/en/ai/openai-agents-sdk-runstate-approval-resume/?utm_source=github&utm_medium=referral&utm_campaign=openai-agents-runstate-v0193&utm_content=repository_readme).

## Verified result

The streamed-resume fixture uses a deterministic model, an approval-gated function tool, `SQLiteSession`, and an output guardrail that always trips after the approved tool executes.

| openai-agents | Session after guardrail trip | Approved output persisted | Pair replayed next turn |
|---|---|---:|---:|
| 0.18.3 | `user`, `function_call` | No | No |
| 0.19.3 | `user`, `function_call`, `function_call_output` | Yes | Yes |

In both versions, the tool side effect happened once before the guardrail aborted final delivery. Version 0.18.3 therefore left durable history inconsistent with the real side effect. Version 0.19.3 persisted the complete call/output pair before output guardrails and replayed it on the next turn.

This matches the official v0.19.3 release and PR #4126. It does **not** provide business exactly-once delivery: the same approved `RunState` can still be resumed more than once unless the tool uses a stable idempotency key and a unique ledger.

## Environment

- Python 3.10.2 for the recorded results
- `openai-agents==0.19.3` for the current full lab
- `openai-agents==0.18.3` and `0.19.3` for the streamed-resume matrix
- no provider API key
- deterministic custom `Model`
- SQLite effect, idempotency, and Session storage

## Run the current full lab

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python lab.py run-all
```

The command writes `artifacts/results.json` and asserts:

- the tool pauses before any side effect;
- a serialized state can be loaded and approved in another process;
- rejection prevents tool execution;
- replaying the same approved state twice causes two effects without an idempotency ledger;
- the same replay causes one effect with a unique idempotency key;
- mapping context can persist a demo secret;
- a strict custom serializer removes the secret and restores runtime-only dependencies separately.

Recorded `0.19.3` values include:

- RunState schema `1.13`;
- approved cross-process effect count `1`;
- rejected effect count `0`;
- replay without idempotency `2` effects;
- replay with idempotency `1` effect.

## Run the streamed-resume regression

Create two isolated environments:

```bash
python3 -m venv .venv-0.18.3
.venv-0.18.3/bin/pip install openai-agents==0.18.3

python3 -m venv .venv-0.19.3
.venv-0.19.3/bin/pip install openai-agents==0.19.3
```

Run the same fixture under each version:

```bash
.venv-0.18.3/bin/python stream_resume_regression.py \
  --output artifacts/stream-resume-0.18.3.json

.venv-0.19.3/bin/python stream_resume_regression.py \
  --output artifacts/stream-resume-0.19.3.json
```

The committed evidence is:

```text
artifacts/
├── results.json
├── stream-resume-0.18.3.json
├── stream-resume-0.19.3.json
├── version-matrix.json
└── version-matrix.md
```

## Production boundary

Use `RunState` for the paused SDK execution. Use application-owned records for the business operation:

```text
approval_request
  ├── tenant_id
  ├── run_id
  ├── tool_call_id
  ├── tool_name
  ├── arguments_digest
  ├── status
  ├── state_version
  └── state_blob_location

idempotency_ledger
  ├── tenant_id
  ├── operation_key UNIQUE
  ├── result
  └── completed_at
```

A queue redelivery, manual retry, worker crash, or duplicated webhook can resume the same approved snapshot more than once. The business tool must still check an idempotency key before producing an external side effect.

## State-blob boundary

The serialized wrapper contains:

- an application-owned `app_state_version`;
- the SDK `$schemaVersion`;
- current agent identity and turn state;
- model responses and generated items;
- approval decisions and interruptions;
- usage data;
- optional conversation identifiers;
- serialized application context.

Encrypt the blob when required, isolate it by tenant and run, expire stale approvals, and avoid serializing credentials. A successful `RunState.from_json()` call does not prove that the approval is still authorized after tools, prompts, permissions, or application versions change.

## Official references

- OpenAI Agents SDK v0.19.3: <https://github.com/openai/openai-agents-python/releases/tag/v0.19.3>
- Approved streamed-resume output fix: <https://github.com/openai/openai-agents-python/pull/4126>
- Resumed tool-name collision fix: <https://github.com/openai/openai-agents-python/pull/4145>
- Tool call/output order fix: <https://github.com/openai/openai-agents-python/pull/4147>
- Human-in-the-loop documentation: <https://openai.github.io/openai-agents-python/human_in_the_loop/>
- RunState reference: <https://openai.github.io/openai-agents-python/ref/run_state/>
