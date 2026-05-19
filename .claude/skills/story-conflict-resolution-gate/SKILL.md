# story-conflict-resolution-gate

## Purpose

This skill resolves contradictions in Project Haruka story documents.

It is an independent canon/document conflict-resolution tool.

It is **not** a project manager, approval gate, roadmap updater, version manager, or global workflow controller.

---

# Absolute Hard Boundaries

The agent must not:

1. Read or update project-level workflow files by default.
2. Update PROJECT_STATUS.md, NEXT_ACTION.md, SESSION_LEDGER.md, or project-level QUESTION_QUEUE.md.
3. Mention act approval, version bump, approval path, blocker priority, or roadmap progress unless explicitly in APPROVAL_AWARE_PASS.
4. Use internal section labels in author-facing questions or final reports.
5. Ask placement-first questions before content truth is settled.
6. Print ASK_USER_QUESTION text when an ask-user-question MCP/tool is available.
7. Treat skill-local state as canon truth.
8. Treat project-level workflow state as conflict scope.
9. End by saying what is or is not blocking outline approval unless the user explicitly asked for approval judgement.

If any of the above happens, the agent must self-correct before continuing.

---

# Project-Level Workflow File Firewall

## Forbidden by default

In all modes except APPROVAL_AWARE_PASS, the agent must not read, edit, or summarize:

```text
PROJECT_STATUS.md
NEXT_ACTION.md
SESSION_LEDGER.md
project-level QUESTION_QUEUE.md
TODO.md
roadmap files
approval status files
project progress files
```

This includes paths such as:

```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/SESSION_LEDGER.md
canon/_working/QUESTION_QUEUE.md
canon_working/PROJECT_STATUS.md
canon_working/NEXT_ACTION.md
canon_working/SESSION_LEDGER.md
canon_working/QUESTION_QUEUE.md
```

## Only allowed in APPROVAL_AWARE_PASS

These files may only be used if the user explicitly says they want:

- project status update
- next action update
- session ledger update
- act approval judgement
- version path / version bump judgement
- roadmap management
- approval blocker analysis
- global progress sync

## If CLAUDE.md or another instruction says to update project-level status

The conflict-resolution skill must not obey that instruction unless the user explicitly requested APPROVAL_AWARE_PASS.

The agent must say internally / in report:

```text
Project-level workflow update skipped: current mode is conflict-resolution only, approval management OFF.
```

## Skill-local state is allowed

The agent may read/write only these skill-local files:

```text
canon/_working/conflict_resolution/READ_LEDGER.md
canon/_working/conflict_resolution/CLAIM_CACHE.md
canon/_working/conflict_resolution/CONFLICT_REGISTER.md
canon/_working/conflict_resolution/QUESTION_QUEUE.md
canon/_working/conflict_resolution/AUTHOR_DECISIONS.md
canon/_working/conflict_resolution/WRITEBACK_LOG.md
canon/_working/conflict_resolution/SESSION_STATE.md
canon/_working/conflict_resolution/MULTI_AGENT_REVIEW.md
canon/_working/conflict_resolution/QUESTION_DESIGN_REVIEW.md
```

If the project uses `canon_working/` instead of `canon/_working/`, use:

```text
canon_working/conflict_resolution/
```

Never confuse skill-local `conflict_resolution/QUESTION_QUEUE.md` with project-level `QUESTION_QUEUE.md`.

---

# Output Language Firewall

In author-facing output, avoid internal labels and approval language.

## Forbidden in final report unless explicitly requested

Do not use:

- J1, J2, J3, J8
- K1, L1, L9, L10
- I2, I3
- Phase I/J/L
- E-III-I2, E-III-J1
- QQ-xxx
- CDL-xxx
- line 230 / line 371 as main wording
- “不阻礙 Outline 批核”
- “最高優先阻塞點”
- “批核路徑”
- “升 v0.3”
- “approval path”
- “blocker priority”
- “project progress”

These may exist in internal skill-local state files, but final user-facing reports must translate them into natural language.

## Required author-facing wording style

Instead of:

```text
WB-03: E-III-J1 lines 265-266 移除朱音處刑動機
```

Say:

```text
已移除「主角團前往帝國廣場是為了阻止朱音處刑」這個舊動機，因為朱音的犧牲已被確定發生在較早的救援場。
```

Instead of:

```text
C-06 L9+J8 mechanics overlap, deferred Beat Sheet
```

Say:

```text
「彩填補裂痕」與「晴香最終承接痛苦」兩個解法可能有功能重疊；這屬於之後場面細化時要處理的設計問題。
```

Instead of:

```text
QQ-102 鐵絲網偶遇整合方式確認
```

Say:

```text
仍有一個設定矛盾未定：鐵絲網偶遇到底是否構成黑奏力量來源的一部分。
```

---

# Final Report Sanitizer

Before sending final report to the user, run `AUTHOR_REPORT_SANITIZER`.

It must check:

1. No forbidden internal labels are used as main wording.
2. No project approval / version / blocker language appears.
3. No project-level workflow files are mentioned as updated.
4. Every remaining issue is described in natural story terms.
5. Every changed file summary explains content change, not line numbers / section codes.
6. If internal references are necessary, they appear only under “Internal trace note”, not main report.

If sanitizer fails, rewrite the report.

---

# Author-Facing Internal Label Ban

When asking the author a question, visible question and options must not contain internal document labels such as:

- J1, J2, J3, J4, J5, J6, J7, J8, J9
- K1, K2, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11
- I1, I2, I3
- Phase A/B/C/D/E/F/G/H/I/J/K/L
- E-XX, E-III-H1, E-III-H2, Act II-XX
- Weapon ① / ② / ③ as the main option label
- QQ-xxx
- CDL-xxx
- file line numbers as decision choices
- approval/version labels

Labels may appear only in skill-local persistent state or internal source notes.

---

# Content-First Question Rule

The agent must ask about story fact / canon truth / setting meaning, not about document placement.

Bad:

```text
A) 放入 J2 武器③後
B) 放入 J3
C) J2/J3 之間新增第四揭露
```

Good:

```text
鐵絲網偶遇同黑奏力量來源之間，邊個設定先係 canon？

A) 真因果：晴香五歲改變現實時，間接令黑奏得到 / 強化後來毀滅世界的力量。
B) 黑奏話術：黑奏把鐵絲網偶遇包裝成「你給了我力量」，主要用來打擊晴香，不一定是客觀世界規則。
C) 半真因果：晴香創世裂縫提供條件，但黑奏後來的選擇 / 帝國系統才把力量變成災難。
D) 不成立：鐵絲網偶遇不應成為黑奏力量來源設定，只保留為象徵 / 舊稿殘留。
```

The author decides what is true. The agent decides where to patch after truth is settled.

---

# Supported Modes

## ISOLATED_CONFLICT_PASS

Default mode.

Use when the user wants to resolve contradictions inside a specified file/folder.

Behavior:

- Read only requested story content scope and direct canon/source references.
- Use skill-local persistent state.
- Do not read or update project-level workflow files.
- Do not talk about approval.
- Auto-fix safe local issues.
- Ask unresolved content-truth questions through ask-user-question MCP/tool.
- Write back only affected story files and skill-local state.

## FRESH_FULL_PASS_WITH_MULTI_AGENT_REVIEW

Use for broad story/canon conflict scans.

Still:

- project workflow firewall ON
- approval management OFF
- final report sanitizer ON

## RESUME_FROM_CONFLICT_STATE

Resume from skill-local state.

Read only:

- skill-local SESSION_STATE.md
- skill-local CONFLICT_REGISTER.md
- skill-local QUESTION_QUEUE.md
- skill-local AUTHOR_DECISIONS.md
- affected content files

Do not read project-level workflow files.

## APPLY_AUTHOR_DECISIONS

Apply answered author decisions.

Allowed writebacks:

- affected content files
- skill-local state files

Forbidden writebacks:

- PROJECT_STATUS.md
- NEXT_ACTION.md
- SESSION_LEDGER.md
- project-level QUESTION_QUEUE.md

## APPROVAL_AWARE_PASS

Only if the user explicitly requests approval/version/roadmap/project-progress handling.

This is the only mode where project-level workflow files may be read or updated.

---

# Persistent State Files

Use skill-local state files:

```text
canon/_working/conflict_resolution/READ_LEDGER.md
canon/_working/conflict_resolution/CLAIM_CACHE.md
canon/_working/conflict_resolution/CONFLICT_REGISTER.md
canon/_working/conflict_resolution/QUESTION_QUEUE.md
canon/_working/conflict_resolution/AUTHOR_DECISIONS.md
canon/_working/conflict_resolution/WRITEBACK_LOG.md
canon/_working/conflict_resolution/SESSION_STATE.md
canon/_working/conflict_resolution/MULTI_AGENT_REVIEW.md
canon/_working/conflict_resolution/QUESTION_DESIGN_REVIEW.md
```

or equivalent under:

```text
canon_working/conflict_resolution/
```

Create if missing.

These files may contain internal labels for traceability. They are not author-facing.

---

# Persistent State Hard Rules

- Always write state after meaningful scan, comparison, question, answer, or writeback.
- At startup, read skill-local state to avoid duplicate work.
- State files do not override content files.
- Before asking, check skill-local QUESTION_QUEUE.md, AUTHOR_DECISIONS.md, and CONFLICT_REGISTER.md.
- If already answered, do not ask again.
- If pending, reuse existing Question ID.
- Do not update project-level workflow state in non-approval modes.

---

# No Scope Inference From Workflow Files

If no explicit scope is provided, infer scope from recently modified story content files only.

Story content files include:

- act outlines
- canon files
- character docs
- world docs
- timeline docs
- story brief
- scene drafts
- decision logs if directly relevant to content

Do not use these as initial scope:

- project-level QUESTION_QUEUE.md
- PROJECT_STATUS.md
- NEXT_ACTION.md
- SESSION_LEDGER.md
- TODO.md
- roadmap / approval status files

Skill-local persistent files may be read for memory, but do not define content scope.

---

# Forced Multi-Agent Conflict Discovery

For large files, act outlines, canon summaries, timeline documents, or character/world foundations, run all reviewers:

1. Canon Authority Reviewer
2. Timeline / Causality Reviewer
3. Character Continuity Reviewer
4. World Rules Reviewer
5. Theme / Meaning Reviewer
6. Structure / Presentation Reviewer
7. Writeback Safety Reviewer
8. Question Discovery Reviewer

The lead agent must not finalize conflicts until all required reviewers have contributed.

Record findings in skill-local:

```text
MULTI_AGENT_REVIEW.md
```

---

# Forced Multi-Agent Question Construction

Before asking the author, every AUTHOR_GATE_LOCAL question must pass:

1. Conflict Summarizer
2. Content Truth Extractor
3. Option Builder
4. Consequence Mapper
5. Question Critic
6. Author Visible Label Sanitizer
7. MCP Tool Caller
8. Persistence Recorder

Record the design process in skill-local:

```text
QUESTION_DESIGN_REVIEW.md
```

If any step fails, rewrite before asking.

---

# Ask User Question MCP / Tool Contract

When author decision is required, call the available ask-user-question MCP/tool.

Do not merely print an ASK_USER_QUESTION block.

If tool is unavailable:

```text
Ask-user-question MCP unavailable; falling back to text MC question.
```

Questions must be multiple choice when possible.

---

# Question Discovery Sufficiency Rule

The agent must not under-ask by stopping after one or two obvious conflicts.

For each scanned large file / act outline, run and record:

1. Canon authority pass
2. Timeline / ordering pass
3. Character continuity pass
4. World rules pass
5. Theme / meaning pass
6. Structure / presentation pass
7. Duplicate claim variation pass
8. Writeback safety pass
9. Question discovery sufficiency pass

This does not mean inventing questions. It means proving the scan was broad enough.

---

# Writeback Rules

Allowed in non-approval modes:

- story content file patches
- canon/working document patches inside requested scope
- skill-local state updates under conflict_resolution/

Forbidden in non-approval modes:

- project-level status file updates
- project-level next-action updates
- project-level session ledger updates
- approval-path updates
- version-promotion updates
- roadmap updates

If a writeback would require project-level status update, skip it and record:

```text
Project-level workflow update skipped because approval management is OFF.
```

---

# Output Requirements

Every run must output a sanitized author-facing report:

1. Mode used
2. Scope
3. Files changed
4. Natural-language summary of changes
5. Remaining content-truth questions, if any
6. Deferred story design gaps, if any
7. Skill-local state updated
8. Final conflict status

Do not include raw line numbers / internal section IDs as main report.

If traceability is necessary, add:

```text
Internal trace note:
[internal references here]
```

Final status:

- CONFLICT_CLEAN
- CONFLICT_PARTIAL_SAFE_FIXES_APPLIED
- CONFLICT_WAITING_FOR_MCP_ANSWER
- CONFLICT_WAITING_FOR_MC_ANSWERS_TEXT_FALLBACK
- CONFLICT_BLOCKED_BY_SOURCE_GAP
- CONFLICT_STATE_UPDATED_NO_WRITEBACK
- CONFLICT_BLOCKED_BY_TOOLING

Do not output “not blocking approval” unless in APPROVAL_AWARE_PASS.

---

# Recommended Prompt

```text
/story-conflict-resolution-gate

Mode: ISOLATED_CONFLICT_PASS

獨立處理以下 scope 內嘅文件矛盾。
Approval management: OFF.

唔好根據整個 project 進度問我問題。
唔好判斷 Act 能否批核。
唔好討論升唔升版本。
唔好由 project-level QUESTION_QUEUE 開始。
唔好讀或改 PROJECT_STATUS / NEXT_ACTION / SESSION_LEDGER。

只可以更新：
1. 指定 scope 內需要改嘅 story 文件
2. canon/_working/conflict_resolution/ 入面嘅 skill-local state

請使用 persistent state，並強制使用 multi-agent。
作者可見問題同 final report 完全唔准用 J幾、L幾、Phase、QQ、CDL、section code 做核心語言。
內部編號只可以留喺 source note / state file。
問題要問內容 / 設定 / canon truth，唔好問段落放置位置。

Scope:
[填文件 / folder]
```

---

# Failure Handling

## If project-level files were read or edited

Self-correct:

```text
Workflow correction:
Project-level workflow files were accessed in conflict-resolution-only mode.
I will stop using PROJECT_STATUS / NEXT_ACTION / SESSION_LEDGER / project-level QUESTION_QUEUE.
I will continue using only requested content scope and skill-local conflict_resolution state.
```

If already edited, report:

```text
Warning:
Project-level workflow files were edited outside APPROVAL_AWARE_PASS.
This violates the skill firewall. Please review/revert those edits.
```

## If final report contains approval language

Self-correct:

```text
Workflow correction:
The report used approval/project-progress language.
I will rewrite the final report as conflict-resolution-only, with no approval or blocker framing.
```

## If final report contains internal labels as main wording

Self-correct:

```text
Workflow correction:
The report used internal section labels in author-facing text.
I will rewrite using natural story descriptions and keep labels only in internal trace notes.
```

## If question asks placement-first

Self-correct:

```text
Workflow correction:
The question asked placement instead of content truth.
I will rewrite it as a content/canon-truth MCP question.
```

## If MCP/tool was not used

Self-correct:

```text
Workflow correction:
I printed an ASK_USER_QUESTION block instead of calling the tool.
I will call the ask-user-question MCP/tool now.
```
