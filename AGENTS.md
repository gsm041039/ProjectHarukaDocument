# Codex Story Workflow Setup

## Repository expectations

- This repository already has a canonical Claude story workflow under [CLAUDE.md](/c:/Projects/ProjectHarukaDocument/CLAUDE.md) and `.claude/`.
- Do not modify `.claude/` workflow files unless the user explicitly asks.
- Codex-specific repo skills live under `.agents/skills/`.
- For Codex, prefer explicit skill invocation with `$story-router`, `$story-room`, `$story-canon`, `$story-atom-gate`, `$story-writeback`, or `$story-resume`.
- Claude-style repo slash commands under `.claude/commands/` are preserved for Claude workflows; Codex should use repo skills instead.

## Fresh-session read order

1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md` if relevant
6. `canon/_working/READ_MANIFEST.md` if relevant
7. `canon/_working/story_construction/QUESTION_MATRIX.md` if relevant

## Always-true workflow rules

- Never treat inference as confirmed canon.
- Never silently resolve contradiction, dedupe, or canonization decisions.
- Never skip author gate.
- Never ask reconstruction-level questions before source check.
- Never let deferred questions disappear.
- Never claim a round is complete before the required durable state files are updated.

## Primary durable files

- `canon/_working/PROJECT_STATUS.md` is the main resume anchor.
- `canon/_working/SESSION_LEDGER.md` is the round and phase log.
- `canon/_working/NEXT_ACTION.md` keeps the single safest next step.
- `canon/_working/QUESTION_QUEUE.md` is the source of truth for blocked, deferred, and resolved questions.
- `canon/_working/story_construction/QUESTION_MATRIX.md` is required before reconstruction-level author questioning.

## Mode routing

- Story ideation, outline, arc, reveal, theme, and section development -> `$story-room`
- Source inventory, register, sectioning, and audit -> `$story-canon`
- Candidate review, duplicate/conflict handling, ownership, and author gate -> `$story-atom-gate`
- Approved decisions back into canon files -> `$story-writeback`
- Fresh session, interruption, new machine, or uncertain state -> `$story-resume`
- If unsure which mode applies, start with `$story-router`

## Canonical references

- [CLAUDE.md](/c:/Projects/ProjectHarukaDocument/CLAUDE.md)
- [.claude/story_system/angle-system.md](/c:/Projects/ProjectHarukaDocument/.claude/story_system/angle-system.md)
- [.claude/story_system/state-files.md](/c:/Projects/ProjectHarukaDocument/.claude/story_system/state-files.md)
