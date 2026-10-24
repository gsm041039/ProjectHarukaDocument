// Shared vocabulary at the Workbench/provider boundary. Provider-specific IDs
// stay opaque; old string-only links continue to mean Claude.
export const PROVIDER_CLAUDE = "claude";
export const PROVIDER_CODEX = "codex";
export const DEFAULT_PROVIDER = PROVIDER_CLAUDE;
const INTERNAL_CODE = /(?<![A-Za-z])(?:v\d+(?:\.\d+)*|[A-Z]{1,4}-?[A-Z]?\d+(?:\.\d+)?[a-z]?(?:-[A-Z]?\d+)*|batch\s*\d+|stage\s*\d+[a-z]?|phase\s*\d+)(?![A-Za-z0-9])/i;

export function normalizeProvider(value, fallback = DEFAULT_PROVIDER) {
  return value === PROVIDER_CODEX || value === PROVIDER_CLAUDE ? value : fallback;
}

export function makeProviderSessionRef(provider, sessionId) {
  if (!sessionId) return null;
  const normalized = normalizeProvider(provider, "");
  if (!normalized) throw new TypeError("Unsupported AI provider: " + provider);
  return { provider: normalized, sessionId: String(sessionId) };
}

export function readProviderSessionRef(value) {
  if (typeof value === "string" && value) return { provider: PROVIDER_CLAUDE, sessionId: value };
  if (value && typeof value === "object" && typeof value.sessionId === "string" && value.sessionId) {
    const provider = value.provider == null ? PROVIDER_CLAUDE : normalizeProvider(value.provider, "");
    if (provider) return { provider, sessionId: value.sessionId };
  }
  return null;
}

export function internalQuestionCodes(questions) {
  return [...new Set((questions || []).flatMap((question) => [
    question?.header, question?.question,
    ...(question?.options || []).flatMap((option) => [option?.label, option?.description]),
  ]).flatMap((value) => String(value || "").match(new RegExp(INTERNAL_CODE.source, "gi")) || []))];
}

export function assertProviderSession(session) {
  const methods = ["start", "send", "interrupt", "setModel", "setEffort", "history", "rename", "close"];
  const missing = methods.filter((name) => typeof session?.[name] !== "function");
  if (missing.length) throw new TypeError("Provider session is missing: " + missing.join(", "));
  return session;
}
