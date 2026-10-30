from __future__ import annotations

import argparse
import asyncio
import inspect
import json
import sys
import tempfile
from collections.abc import AsyncIterator
from pathlib import Path
from typing import Any

import agents
from agents import (
    Agent,
    GuardrailFunctionOutput,
    OutputGuardrail,
    OutputGuardrailTripwireTriggered,
    RunContextWrapper,
    Runner,
    SQLiteSession,
    function_tool,
    set_tracing_disabled,
)
from agents.agent_output import AgentOutputSchemaBase
from agents.handoffs import Handoff
from agents.items import ModelResponse, TResponseInputItem, TResponseOutputItem, TResponseStreamEvent
from agents.model_settings import ModelSettings
from agents.models.interface import Model, ModelTracing
from agents.tool import Tool
from agents.usage import Usage
from openai.types.responses import (
    Response,
    ResponseCompletedEvent,
    ResponseContentPartAddedEvent,
    ResponseContentPartDoneEvent,
    ResponseCreatedEvent,
    ResponseFunctionCallArgumentsDeltaEvent,
    ResponseFunctionCallArgumentsDoneEvent,
    ResponseFunctionToolCall,
    ResponseInProgressEvent,
    ResponseOutputItemAddedEvent,
    ResponseOutputItemDoneEvent,
    ResponseOutputMessage,
    ResponseOutputText,
    ResponseTextDeltaEvent,
    ResponseTextDoneEvent,
    ResponseUsage,
)
from openai.types.responses.response_usage import InputTokensDetails, OutputTokensDetails

set_tracing_disabled(True)


class DeterministicStreamingModel(Model):
    """Provider-free model copied down to the minimum events required by the SDK runner."""

    def __init__(self) -> None:
        self.turn_outputs: list[list[TResponseOutputItem]] = []
        self.last_turn_args: dict[str, Any] = {}

    def set_next_output(self, output: list[TResponseOutputItem]) -> None:
        self.turn_outputs.append(output)

    def _next_output(self) -> list[TResponseOutputItem]:
        if not self.turn_outputs:
            return []
        return self.turn_outputs.pop(0)

    async def get_response(
        self,
        system_instructions: str | None,
        input: str | list[TResponseInputItem],
        model_settings: ModelSettings,
        tools: list[Tool],
        output_schema: AgentOutputSchemaBase | None,
        handoffs: list[Handoff],
        tracing: ModelTracing,
        *,
        previous_response_id: str | None,
        conversation_id: str | None,
        prompt: Any | None,
    ) -> ModelResponse:
        self.last_turn_args = {"input": input}
        return ModelResponse(output=self._next_output(), usage=Usage(), response_id="resp-xbstack")

    async def stream_response(
        self,
        system_instructions: str | None,
        input: str | list[TResponseInputItem],
        model_settings: ModelSettings,
        tools: list[Tool],
        output_schema: AgentOutputSchemaBase | None,
        handoffs: list[Handoff],
        tracing: ModelTracing,
        *,
        previous_response_id: str | None = None,
        conversation_id: str | None = None,
        prompt: Any | None = None,
    ) -> AsyncIterator[TResponseStreamEvent]:
        self.last_turn_args = {"input": input}
        output = self._next_output()
        response = _response(output)
        sequence_number = 0

        yield ResponseCreatedEvent(
            type="response.created", response=response, sequence_number=sequence_number
        )
        sequence_number += 1
        yield ResponseInProgressEvent(
            type="response.in_progress", response=response, sequence_number=sequence_number
        )
        sequence_number += 1

        for output_index, item in enumerate(output):
            yield ResponseOutputItemAddedEvent(
                type="response.output_item.added",
                item=item,
                output_index=output_index,
                sequence_number=sequence_number,
            )
            sequence_number += 1

            if isinstance(item, ResponseFunctionToolCall):
                yield ResponseFunctionCallArgumentsDeltaEvent(
                    type="response.function_call_arguments.delta",
                    item_id=item.call_id,
                    output_index=output_index,
                    delta=item.arguments,
                    sequence_number=sequence_number,
                )
                sequence_number += 1
                yield ResponseFunctionCallArgumentsDoneEvent(
                    type="response.function_call_arguments.done",
                    item_id=item.call_id,
                    output_index=output_index,
                    arguments=item.arguments,
                    name=item.name,
                    sequence_number=sequence_number,
                )
                sequence_number += 1
            elif isinstance(item, ResponseOutputMessage):
                for content_index, part in enumerate(item.content or []):
                    if not isinstance(part, ResponseOutputText):
                        continue
                    yield ResponseContentPartAddedEvent(
                        type="response.content_part.added",
                        item_id=item.id,
                        output_index=output_index,
                        content_index=content_index,
                        part=part,
                        sequence_number=sequence_number,
                    )
                    sequence_number += 1
                    yield ResponseTextDeltaEvent(
                        type="response.output_text.delta",
                        item_id=item.id,
                        output_index=output_index,
                        content_index=content_index,
                        delta=part.text,
                        logprobs=[],
                        sequence_number=sequence_number,
                    )
                    sequence_number += 1
                    yield ResponseTextDoneEvent(
                        type="response.output_text.done",
                        item_id=item.id,
                        output_index=output_index,
                        content_index=content_index,
                        text=part.text,
                        logprobs=[],
                        sequence_number=sequence_number,
                    )
                    sequence_number += 1
                    yield ResponseContentPartDoneEvent(
                        type="response.content_part.done",
                        item_id=item.id,
                        output_index=output_index,
                        content_index=content_index,
                        part=part,
                        sequence_number=sequence_number,
                    )
                    sequence_number += 1

            yield ResponseOutputItemDoneEvent(
                type="response.output_item.done",
                item=item,
                output_index=output_index,
                sequence_number=sequence_number,
            )
            sequence_number += 1

        yield ResponseCompletedEvent(
            type="response.completed", response=response, sequence_number=sequence_number
        )


def _response(output: list[TResponseOutputItem]) -> Response:
    return Response(
        id="resp-xbstack",
        created_at=123,
        model="xbstack-deterministic-model",
        object="response",
        output=output,
        tool_choice="none",
        tools=[],
        top_p=None,
        parallel_tool_calls=False,
        usage=ResponseUsage(
            input_tokens=0,
            output_tokens=0,
            total_tokens=0,
            input_tokens_details=InputTokensDetails(cache_write_tokens=0, cached_tokens=0),
            output_tokens_details=OutputTokensDetails(reasoning_tokens=0),
        ),
    )


def _tool_call() -> ResponseFunctionToolCall:
    return ResponseFunctionToolCall(
        arguments="{}",
        call_id="call-approved-xbstack",
        name="approval_tool",
        type="function_call",
        status="completed",
    )


def _text_message(text: str) -> ResponseOutputMessage:
    return ResponseOutputMessage(
        id="msg-after-resume",
        content=[ResponseOutputText(annotations=[], text=text, type="output_text")],
        role="assistant",
        status="completed",
        type="message",
    )


async def _consume_stream(result: Any) -> None:
    async for _event in result.stream_events():
        pass


async def run_regression(db_path: Path) -> dict[str, Any]:
    guardrail_state = {"tripwire": True}
    effect_counter = {"count": 0}

    @function_tool(name_override="approval_tool", needs_approval=True)
    def approval_tool() -> str:
        effect_counter["count"] += 1
        return "approved-result"

    def output_guardrail(
        _context: RunContextWrapper[Any],
        _agent: Agent[Any],
        _output: Any,
    ) -> GuardrailFunctionOutput:
        return GuardrailFunctionOutput(
            output_info={"source": "xbstack-stream-resume-regression"},
            tripwire_triggered=guardrail_state["tripwire"],
        )

    model = DeterministicStreamingModel()
    model.set_next_output([_tool_call()])
    agent = Agent(
        name="xbstack-stream-resume-agent",
        model=model,
        tools=[approval_tool],
        tool_use_behavior="stop_on_first_tool",
        output_guardrails=[OutputGuardrail(guardrail_function=output_guardrail)],
    )
    session = SQLiteSession("xbstack-stream-resume", db_path=db_path)
    await session.clear_session()

    first = Runner.run_streamed(agent, "Use approval_tool", session=session)
    await _consume_stream(first)
    if len(first.interruptions) != 1:
        raise AssertionError(f"expected one interruption, got {len(first.interruptions)}")

    state = first.to_state()
    state.approve(first.interruptions[0])

    tripwire_error = None
    resumed = Runner.run_streamed(agent, state, session=session)
    try:
        await _consume_stream(resumed)
    except OutputGuardrailTripwireTriggered as exc:
        tripwire_error = f"{type(exc).__name__}: {exc}"

    saved_after_tripwire = await session.get_items()
    saved_after_tripwire_types = [
        item.get("type") or item.get("role")
        for item in saved_after_tripwire
        if isinstance(item, dict)
    ]
    saved_tool_items = [
        item
        for item in saved_after_tripwire
        if isinstance(item, dict)
        and item.get("type") in {"function_call", "function_call_output"}
    ]

    guardrail_state["tripwire"] = False
    model.set_next_output([_text_message("continued-after-tripwire")])
    continued = Runner.run_streamed(agent, "Continue", session=session)
    await _consume_stream(continued)
    model_input = model.last_turn_args.get("input")
    replayed_tool_items = [
        item
        for item in model_input
        if isinstance(model_input, list)
        and isinstance(item, dict)
        and item.get("type") in {"function_call", "function_call_output"}
    ] if isinstance(model_input, list) else []

    close_result = session.close()
    if inspect.isawaitable(close_result):
        await close_result

    return {
        "environment": {
            "python": sys.version.split()[0],
            "openai_agents": getattr(agents, "__version__", "unknown"),
            "provider_api_used": False,
        },
        "tripwire_error": tripwire_error,
        "tool_effect_count": effect_counter["count"],
        "saved_after_tripwire_types": saved_after_tripwire_types,
        "saved_tool_items": [
            {
                "type": item.get("type"),
                "call_id": item.get("call_id"),
                "output": item.get("output"),
            }
            for item in saved_tool_items
        ],
        "continued_final_output": continued.final_output,
        "replayed_tool_items": [
            {
                "type": item.get("type"),
                "call_id": item.get("call_id"),
                "output": item.get("output"),
            }
            for item in replayed_tool_items
        ],
        "assertions": {
            "approval_paused_before_effect": effect_counter["count"] == 1,
            "tripwire_triggered": tripwire_error is not None,
            "approved_tool_call_persisted": any(
                item.get("type") == "function_call" for item in saved_tool_items
            ),
            "approved_tool_output_persisted": any(
                item.get("type") == "function_call_output"
                and item.get("output") == "approved-result"
                for item in saved_tool_items
            ),
            "approved_pair_replayed_next_turn": len(replayed_tool_items) == 2,
        },
    }


async def async_main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()

    with tempfile.TemporaryDirectory(prefix="xbstack-openai-stream-resume-") as directory:
        result = await run_regression(Path(directory) / "session.sqlite3")
    serialized = json.dumps(result, ensure_ascii=False, indent=2)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(serialized + "\n", encoding="utf-8")
    print(serialized)


if __name__ == "__main__":
    asyncio.run(async_main())
