# story-source-recovery-gate — Search Before Gap

## Purpose
Prevent the assistant from mistaking “not currently in context” for “not in canon”. This skill is mandatory before marking a named setting/event as missing.

## Core Rule

```text
UNKNOWN_UNSEARCHED ≠ MISSING
NOT_YET_SEARCHED ≠ NEEDS_CANON_SUPPORT
```

## When to Invoke
Invoke automatically when:
- user mentions a named setting, event, organization, device, drug, crisis, CDL, outline beat, or character detail
- assistant is about to ask “is this canon?”
- assistant is about to mark something as `NEEDS_CANON_SUPPORT`
- user says “canon 有，你自己搵”
- discussion needs to fit new idea into existing events

## Required Search Strategy
Search by:
1. exact term
2. aliases / likely variants
3. related terms
4. location in likely files

For narrative canon, likely files include:
- `canon/00_series_bible.md`
- `canon/01_world_rules_and_costs.md`
- `canon/02_glossary.md`
- `canon/03_character_index.md`
- `canon/03_characters/*.md`
- `canon/04_timeline_canon.md`
- `canon/05_story_outline_canon.md`
- `canon/07_entities_and_devices.md`
- `canon/08_narrative_design_bible.md`
- `canon/13_major_events_relationship_impact.md`
- `canon/_working/QUESTION_QUEUE.md`
- `canon/_working/CANON_DECISION_LOG.md`
- `canon/_working/story_construction/*.md`

## Output Digest
Do not dump full search output. Return a digest:

```md
Source Recovery Digest
Searched: <terms / aliases>
Found:
- <file / section>: <short fact>
Partial / uncertain:
- ...
Not found:
- ...
Allowed next step: <continue discussion / ask author / mark gap>
```

## Gap State Ladder

```text
UNKNOWN_UNSEARCHED
→ SOURCE_RECOVERY_REQUIRED
→ SEARCHED_FOUND
→ SEARCHED_PARTIAL
→ SEARCHED_NOT_FOUND
→ NEEDS_CANON_SUPPORT / AUTHOR_QUESTION only if still unsupported
```

## Important Behavior
If the canon item is found, resume creative discussion. Do not get stuck in lookup mode.

If the item is partially found, propose the strongest safe version and mark remaining uncertainty.

If not found, ask a focused author question or propose a hypothesis sandbox entry.

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 搵呢個設定 | 用原詞、別名、相關詞喺 canon 同工作檔搵{goal}，出摘要：搵到咩、部分、搵唔到，同下一步可以點。
- 📂 只睇現行檔 | 只搵現行權威檔同目標幕檔，唔掃 backup。
- 🗄️ 連 backup 搵 | 現行檔搵唔夠，按條件連 backup 一齊搵，backup 內容唔可以蓋過現行真相。
- ❓ 搵唔到點算 | 搵唔到就提一個聚焦問題或假設沙盒條目；用選項卡問我。
