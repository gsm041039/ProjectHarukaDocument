import { query } from "@anthropic-ai/claude-agent-sdk";
import { PROVIDER_CLAUDE, PROVIDER_CODEX, normalizeProvider } from "./provider-contract.mjs";
import { runCodexPrompt } from "./codex-app-server.mjs";

// One-shot prompts share a provider route. Codex always runs read-only here;
// callers that need to persist a result must write it themselves to a fixed path.
export async function runProviderPrompt({
  provider = PROVIDER_CLAUDE, prompt, cwd = process.cwd(), model = "", effort = "",
  claudeOptions = {}, onEvent = () => {},
} = {}) {
  provider = normalizeProvider(provider);
  if (provider === PROVIDER_CODEX) {
    const result = await runCodexPrompt({
      prompt, cwd, model, effort, readOnly: true,
      developerInstructions: "This is a read-only Workbench background task. Do not edit, create, or delete files. Follow the prompt's tool and source limits.",
      onEvent,
    });
    return { ...result, cost: 0, provider };
  }

  let text = "", cost = 0, durationMs = 0;
  const options = {
    ...claudeOptions,
    cwd,
    ...(model ? { model } : {}),
    ...(effort ? { effort } : {}),
  };
  for await (const message of query({ prompt, options })) {
    if (message.type === "result") {
      text = message.result || text;
      cost = message.total_cost_usd || 0;
      durationMs = message.duration_ms || 0;
      if (message.subtype && message.subtype !== "success") throw new Error(text || message.subtype);
    } else if (message.type === "assistant") {
      for (const block of message.message?.content || []) {
        if (block.type === "text") text = block.text || text;
        else if (block.type === "tool_use") onEvent({ kind: "tool", name: block.name, input: block.input || {} });
      }
    }
  }
  return { text, cost, durationMs, provider };
}
