# Context-Saving Discussion Mode

## Purpose

This document defines the compact discussion layer for Project Haruka workflows.

The system must remain thorough internally, but it must not dump every checklist, agent note, evidence chain, or option table into chat during ordinary discussion. The goal is to prevent context-window exhaustion while preserving traceable reasoning through temporary notes, digests, and existing working files.

Core principle:

```text
Internal thoroughness does not require external verbosity.
For discussion tasks, think broadly, log compactly, and answer narrowly.
```

## When to use this mode

Use `DISCUSSION_COMPACT` or `CO_DESIGN_DISCUSSION` when the user is:

- discussing a possible setting, character motive, event, or scene direction;
- asking “你認為點？” / “有冇潛力？” / “一齊諗下”;
- correcting the AI’s previous assumption;
- exploring several options before canon approval;
- not explicitly asking for full audit, full report, writeback, or final script.

Do not use compact mode when the user explicitly asks for:

- full audit;
- complete 24-angle scan;
- formal Scene Lab output;
- writeback plan;
- canon approval pack;
- full script coverage / table read.

## Output levels

### Level 1 — Chat Compact, default for discussion

The visible answer should contain:

```text
1. Short direct judgement
2. 2–4 viable directions OR one focused recommendation
3. New assumptions clearly flagged
4. One recommended minimal version
5. 1–3 key unresolved questions
6. Mini Log
```

Do not show:

```text
- full checklist
- full 24-angle table
- full blind/debate/judge agent reports
- long evidence maps
- long worldbuilding essays
```

### Level 2 — Standard Report

Use when the user asks for a serious review but not a full audit.

Show:

```text
- compressed evidence snapshot
- compressed checklist
- gap notes
- recommendation
- mini log
```

### Level 3 — Full Audit

Use only when requested or before canon-critical writeback.

Show:

```text
- full checklist
- multi-agent notes
- grounding audit
- coverage table
- author questions
- writeback safeguards
```

## Mini Log format

In compact discussion, show only this at the end:

```text
Mini Log:
Done: ...
Pending: ...
Blocked: ...
Next: ...
```

The full run log, if file write access exists, should be summarized into:

```text
canon/_working/SESSION_LEDGER.md
```

Pending tasks should go to:

```text
canon/_working/NEXT_ACTION.md
```

Author questions should go to:

```text
canon/_working/QUESTION_QUEUE.md
```

## Scratchpad policy

The AI may use temporary scratchpad files for intermediate notes when analysis is too long for chat.

Recommended transient path:

```text
canon/_working/.tmp/current_run.md
canon/_working/.tmp/current_run_checklist.md
canon/_working/.tmp/current_run_evidence.md
canon/_working/.tmp/current_run_agent_notes.md
```

Rules:

- `.tmp` is temporary and overwrite-safe.
- `.tmp` is not canon.
- `.tmp` is not a new permanent working system.
- Only promote durable conclusions into `SESSION_LEDGER`, `NEXT_ACTION`, or `QUESTION_QUEUE`.
- Never treat scratchpad hypotheses as approved canon.

## Evidence Digest Rule

After reading long files, compress the relevant material into a short digest and use the digest for the rest of the task.

Digest format:

```json
{
  "source": "canon/.../file.md#section",
  "relevant_fact": "...",
  "uncertainty": "...",
  "usable_for_current_task": true,
  "evidence_level": "CANON_SUPPORTED | STRONGLY_INFERRED | WEAKLY_INFERRED | HYPOTHESIS"
}
```

Do not keep re-dumping long source excerpts into the conversation unless the user requests exact text.

## Progressive Disclosure Rule

When the user asks “你個思路係咩？” or challenges one assumption, answer the next necessary step only.

Do:

```text
- explain the reasoning in 3–5 bullets
- flag assumptions
- recommend the minimal version
- ask/identify the next decision
```

Do not:

```text
- expand the whole worldbuilding tree immediately
- invent multiple new systems without flags
- turn a small clarification into a full report
```

## Compact discussion example

Bad:

```text
Full 24-angle scan + four long options + full log + full state snapshot.
```

Good:

```text
呢個方向有潛力，但我會先用最小版。

現有支撐：父親本身已有「將人產品化」功能；操線已經有身體控制與完美人偶主題。
新增假設：綾小路家與 EMB 有醫療外判關係。
風險：如果父親變 EMB 董事，會搶黑奏/帝國主線。
建議：先用「外判商」而非「董事」。

Mini Log:
Done: 收斂父親-EMB 連動假設
Pending: 決定父親知道操身份到咩程度
Blocked: EMB 監控權限未定
Next: 定低/中/高強度版本
```
