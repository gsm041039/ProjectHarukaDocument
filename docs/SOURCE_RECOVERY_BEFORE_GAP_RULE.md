# Source Recovery Before Gap Rule

## Purpose

Project Haruka has a large canon and working state. The AI must not treat a term as missing simply because it does not immediately remember it.

This rule prevents the failure mode:

```text
User mentions existing canon term → AI does not search → AI labels it as new setting / needs canon support.
```

## Core rule

```text
Do not ask whether a named setting exists until source recovery has been attempted.
Do not mark something as a canon gap before searching likely canon locations.
Do not convert uncertainty into invention.
```

Chinese version:

```text
唔可以未查就問設定係咪存在。
唔可以未查就標記 canon gap。
唔可以將「我唔記得」變成「設定未有」。
```

## Status ladder

Use this ladder for all named terms, world rules, events, character details, organizations, devices, medicines, powers, locations, and timeline claims:

```text
UNKNOWN_UNSEARCHED
SOURCE_RECOVERY_REQUIRED
SEARCH_IN_PROGRESS
FOUND_CANON_SUPPORT
FOUND_PARTIAL_SUPPORT
FOUND_CONFLICTING_SUPPORT
SEARCHED_NOT_FOUND
NEEDS_CANON_SUPPORT
```

Forbidden shortcut:

```text
UNKNOWN_UNSEARCHED → NEEDS_CANON_SUPPORT
```

## When source recovery is mandatory

Mandatory before saying any of these:

```text
「呢個設定未有」
「呢個要新增 canon」
「呢個係 creative hypothesis」
「呢個世界 rule 未清楚」
「需要作者決定是否存在」
```

Mandatory when user says:

```text
canon 有
你自己搵
之前講過
現有設定有
唔係新設定
```

## Named setting rule

If a user uses a named concept, assume it may exist in canon until searched.

Example:

```text
情緒毒品
```

Wrong response:

```text
「情緒毒品係咪世界設定？需要 canon support。」
```

Correct response:

```text
「我先不當新設定，先做 source recovery：情緒毒品 / 情緒藥物 / 情緒抑制劑 / EMB / 地下市場。」
```

## Search before creative expansion

Before expanding a named concept into a new plot function, search:

```text
1. Term itself
2. Aliases
3. Related organization / location / device
4. Character files connected to the event
5. Timeline / outline files around the relevant act
6. Working questions / decision log
```

Only after this can the AI propose:

```text
- Canon-supported use
- Minimal bridge
- Candidate expansion
- Required author decision
```

## Compact result format

For discussion, show only:

```text
Source Recovery:
Status: ...
Found: ...
Impact: ...
Next: ...
```

No long grep dump unless requested.

## Integration with Context Saving

Full search notes may go into scratchpad:

```text
canon/_working/.tmp/current_run_evidence.md
```

Only durable findings should be summarized into:

```text
canon/_working/SESSION_LEDGER.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
```

## Integration with Grounding Auditor

The Grounding Auditor must flag this failure:

```text
UNSEARCHED_GAP_CLAIM
```

Meaning:

```text
AI claimed a gap / missing canon before source recovery.
```

Severity:

```text
HIGH for canon/world/character claims.
BLOCKER if it affects plot design or writeback.
```
