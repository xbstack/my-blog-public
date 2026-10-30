# n8n AI Agent Tool Choice Contract Lab

This lab supports the XBSTACK article about n8n AI Agent workflows that have tools connected but still answer directly.

- Chinese article: https://www.xbstack.com/ai/n8n-ai-agent-not-calling-tools/?utm_source=github&utm_medium=referral&utm_campaign=n8n_agent_tool_call&utm_content=repo_primary
- English article: https://www.xbstack.com/en/ai/n8n-ai-agent-not-calling-tools/?utm_source=github&utm_medium=referral&utm_campaign=n8n_agent_tool_call&utm_content=repo_primary

## What this verifies

The experiment isolates the request contract described in n8n issue `#31135`:

- tools are present on the first agent iteration;
- `tool_choice` is absent or `auto`;
- a provider with a weak tool-calling prior may return prose;
- a narrow proxy can inject `tool_choice: required` only on iteration one;
- explicit choices and later iterations remain untouched.

The simulated provider is deliberately deterministic. It returns a tool call only when `tool_choice` is `required`, allowing the proxy behavior to be tested without an API key or model variance.

## What this does not verify

- It does not prove the current hosted n8n service sends a particular payload.
- It does not benchmark Mistral, Ollama, vLLM, LM Studio, IONOS, Infomaniak, OpenAI, or Anthropic.
- It does not claim every skipped tool call has the same cause.
- It does not replace checking execution logs, tool schemas, provider compatibility, memory persistence, or agent prompts.

## Run

```bash
python3 run_verification.py
python3 -m unittest discover -s tests -v
```

Generated evidence is written to `results/`:

- `request-without-tool-choice.json`
- `request-with-required.json`
- `verification.json`

## Proxy decision

The load-bearing logic is in `tool_choice_proxy.py`:

1. Do nothing when no tools are bound.
2. Preserve an explicit non-default `tool_choice`.
3. Stop forcing after an assistant message already contains a tool call.
4. Otherwise inject `tool_choice: required` for the first iteration.

This is a workaround pattern, not an upstream n8n patch. Production use requires authentication, request-size limits, TLS, provider allowlists, structured logging, redaction, timeout handling, and a rollback path.

## Workflow fixture

`workflow/n8n-ai-agent-tool-choice.json` is a representative import fixture for a Chat Trigger, AI Agent v3, OpenAI-compatible chat model, and a constant Code Tool. Node versions and credential names may need adjustment for the target n8n release.

## Primary sources

- https://github.com/n8n-io/n8n/issues/31135
- https://github.com/n8n-io/n8n/issues/14361
- https://github.com/n8n-io/n8n/issues/15883
- https://docs.n8n.io/advanced-ai/examples/understand-tools/
