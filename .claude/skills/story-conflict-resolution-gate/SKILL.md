# story-conflict-resolution-gate

## Purpose

This skill finds contradictions across Project Haruka story documents, resolves safe conflicts automatically, asks the author only for story-meaning conflicts, then applies controlled writeback.

This version requires persistent state, forced multi-agent conflict discovery, forced question construction, and a strict author-facing internal-label ban.

The author should answer story/content truth questions, not file-structure questions.

---

# Non-Negotiable Requirements

The agent must:

1. Use persistent state files.
2. Use forced multi-agent review to discover conflicts.
3. Use multi-agent questioning to convert conflicts into good author questions.
4. Ask content-truth questions, not placement / section / approval questions.
5. Use ask-user-question MCP/tool when available.
6. Record read state, claims, conflicts, questions, decisions, and writebacks.
7. Avoid duplicate questions by checking persistent state.
8. Auto-fix safe local issues.
9. Ask the author only when content truth / meaning cannot be safely decided.
10. Remove internal labels from all author-facing question text and options.

The agent must not:

- rely only on chat memory
- ask only one or two obvious questions then stop
- ask J2/J3/L1/L2/Phase/QQ/CDL placement questions before content truth is settled
- use project-level QUESTION_QUEUE as scope entry
- manage act approval unless explicitly requested
- print ASK_USER_QUESTION text when the MCP/tool exists
- show internal working labels in author-facing MC questions

---

# CRITICAL: Author-Facing Internal Label Ban

When asking the author a question, the visible question and options must not contain internal document labels such as:

- J1, J2, J3, J4, J5, J6, J7, J8, J9
- K1, K2, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11
- Phase A/B/C/D/E/F/G/H/I/J/K/L
- E-XX, E-III-H1, E-III-H2, Act II-XX
- Weapon ① / ② / ③ as the main option label
- QQ-xxx
- CDL-xxx
- ACT_III_OUTLINE v0.2 / v0.3 approval path
- file section codes
- source IDs as decision choices

These labels may be kept in internal notes and persistent state files, but they must not appear in the author-facing MCP question title, conflict summary, or option labels.

## Allowed place for labels

If source traceability is needed, put labels only in a source note or persistent state, not as the question wording.

Allowed:

```text
Source note for traceability only: internal refs include CDL-288 and ACT_III_OUTLINE section codes.
```

Not allowed:

```text
A) Put this into J2
B) Put this into J3
C) Add new reveal between J2 and J3
```

## Author-facing replacement rule

Replace internal labels with plain-language scene descriptions.

Examples:

- J2 / 三武器序列 -> 「黑奏對晴香進行心理處刑的真相揭露場」
- J3 / 守恆定律歷史揭露 -> 「黑奏解釋世界因果與情緒守恆歷史的段落」
- L9-L10 -> 「最終決戰後晴香選擇承接痛苦、成為世界平衡點的段落」
- Phase H -> 「美夜子與凜真相揭露附近的月下對峙段落」
- QQ-102 -> 「先前未解決的鐵絲網偶遇設定問題」
- CDL-288 -> 「先前確認過的鐵絲網偶遇設定依據」

## Label-sanitization step

Before calling ask-user-question MCP/tool, run `AUTHOR_VISIBLE_LABEL_SANITIZER`.

It must check:

- title
- conflict
- why_needed
- every option label
- every effect
- every risk
- recommendation
- reply instructions

If any internal label remains, rewrite the question.

If labels cannot be removed safely, do not ask yet. Record SOURCE_NEEDED or ask a simpler content-truth question.

---

# Critical: Content-First Question Rule

The agent must ask about story fact / canon truth / setting meaning, not about internal outline section placement.

Bad:

- “Should this go into J2 or J3?”
- “Should this be placed after Weapon ③?”
- “Does option A/C allow Act III approval?”
- “Should this require v0.3?”
- “L9-L10 應唔應該加入某句？”

Good:

- “鐵絲網偶遇同黑奏力量來源之間，邊個設定先係 canon？”
- “這是客觀因果、黑奏話術、半真因果，還是舊稿殘留？”
- “晴香是否需要承擔這條力量來源的間接責任？”
- “最終晴香承接痛苦時，是否仍保留主動選擇的意義？”
- “美夜子與凜的關係，重點是『拯救失敗』還是『尊重對方最後選擇』？”

The author decides what is true. The agent decides where to patch after truth is decided.

---

# Question Type Separation

Every author-facing question must be one of:

## CONTENT_TRUTH_DECISION

Default. Ask what is canonically true.

## MEANING_DECISION

Ask what thematic meaning should be preserved.

## PRESENTATION_DECISION

Ask how to present known truth.

Only ask PRESENTATION_DECISION if content truth is already settled, and the user explicitly asks for structure/presentation, or presentation order changes meaning and cannot be resolved safely.

Even then, do not use internal labels. Use plain-language scene descriptions.

---

# Forced Multi-Agent Conflict Discovery

For every FRESH_FULL_PASS, ISOLATED_CONFLICT_PASS on a large file, or any pass touching act outlines / canon summaries / timeline / character foundations, the agent must run all reviewer passes below.

The lead agent must not finalize conflicts until all required reviewers have contributed.

## Required Discovery Reviewers

1. Canon Authority Reviewer
2. Timeline / Causality Reviewer
3. Character Continuity Reviewer
4. World Rules Reviewer
5. Theme / Meaning Reviewer
6. Structure / Presentation Reviewer
7. Writeback Safety Reviewer
8. Question Discovery Reviewer

---

# Forced Multi-Agent Question Construction

The agent must not directly ask the author after finding a conflict.

Every AUTHOR_GATE_LOCAL question must pass this question-design pipeline:

1. Conflict Summarizer
2. Content Truth Extractor
3. Option Builder
4. Consequence Mapper
5. Question Critic
6. Author Visible Label Sanitizer
7. MCP Tool Caller
8. Persistence Recorder

## Conflict Summarizer

Converts the conflict into plain language. Must remove internal labels from the main question.

## Content Truth Extractor

Identifies the underlying canon truth question.

Bad:
- “放 J2 定 J3？”

Good:
- “鐵絲網偶遇同黑奏力量來源之間，邊個設定先係 canon？”

## Option Builder

Creates A/B/C/D options based on content truth, not placement. Options must be mutually distinguishable.

## Consequence Mapper

For each option, states what becomes canon, what changes in affected files, and thematic / character / world-rule risk.

## Question Critic

Rejects bad questions. It must check:

- Is the question asking content truth?
- Does it avoid J2/J3/L1/L2/Phase/QQ/CDL as option core?
- Can the author answer without reading the working file?
- Are options concrete?
- Is “Other / manual” included?
- Is recommendation justified?
- Is it not about approval / version path?
- Does it avoid leading the author unfairly?

## Author Visible Label Sanitizer

Rejects the question if author-facing text still contains internal labels.

It must inspect:

- question title
- question body
- conflict summary
- options
- effects
- risks
- recommendation
- reply format

If any internal labels remain, rewrite before tool call.

## MCP Tool Caller

Calls the ask-user-question MCP/tool if available. Must not merely print `ASK_USER_QUESTION`.

## Persistence Recorder

Writes the question to skill-local QUESTION_QUEUE.md and updates CONFLICT_REGISTER.md.

---

# Question Design Review File

Record all author-question design reviews in:

```text
canon/_working/conflict_resolution/QUESTION_DESIGN_REVIEW.md
```

Format:

```markdown
# Question Design Review

## Questions Reviewed

### Q-001
- Conflict ID:
- Original conflict:
- Question type:
- Internal labels detected:
- Label-sanitized:
- Content truth extracted:
- Rejected placement wording:
- Final author-facing question:
- Options:
- Question Critic verdict:
- Author Visible Label Sanitizer verdict:
- MCP/tool used:
- Status:
```

---

# Ask User Question MCP / Tool Contract

When AUTHOR_GATE_LOCAL is required, the agent must use the available ask-user-question MCP/tool.

Printing a text block is allowed only if the MCP/tool is unavailable or fails.

If fallback happens, write:

```text
Ask-user-question MCP unavailable; falling back to text MC question.
```

The MCP/tool question must include:

- question_id
- type: multiple_choice
- natural-language title without internal labels
- conflict in natural language without internal labels
- affected files if necessary
- optional source note only after the core question
- why decision is needed
- A/B/C/D content-truth options
- effect of each option
- risk of each option
- recommendation if justified

---

# Example Rewrite:鐵絲網偶遇

If source conflict says:

- a prior decision source says 鐵絲網偶遇 is part of Kurosou core reveal
- current outline has no clear reveal slot

Do not ask:

```text
A) 放入 J2 武器③後
B) 放入 J3
C) J2/J3 之間新增第四揭露
```

Ask:

```text
鐵絲網偶遇同黑奏力量來源之間，邊個設定先係 canon？

A) 真因果：晴香五歲改變現實時，間接令黑奏得到 / 強化後來毀滅世界的力量。
B) 黑奏話術：黑奏把鐵絲網偶遇包裝成「你給了我力量」，主要用來打擊晴香，不一定是客觀世界規則。
C) 半真因果：晴香創世裂縫提供條件，但黑奏後來的選擇 / 帝國系統才把力量變成災難。
D) 不成立：鐵絲網偶遇不應成為黑奏力量來源設定，只保留為象徵 / 舊稿殘留。
```

After author answers, the agent decides placement and writeback.

---

# Persistent State Files

Use these skill-local state files:

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

Create them if missing. These are skill-local memory files, not canon truth.

## Persistent State Hard Rules

- Always write state after scan, comparison, question, answer, or writeback.
- At startup, read skill-local state files to avoid duplicate work.
- State files do not override content files.
- Before asking, check QUESTION_QUEUE.md, AUTHOR_DECISIONS.md, and CONFLICT_REGISTER.md.
- If already answered, do not ask again.
- If pending, reuse existing Question ID.

---

# No Scope Inference Rule

If no explicit scope is provided, infer scope from recently modified story content files only.

Do not use project-level workflow-state files as initial scope:

- project-level QUESTION_QUEUE.md
- PROJECT_STATUS.md
- NEXT_ACTION.md
- TODO.md
- roadmap files
- approval status files

Skill-local persistent files may be read for memory, but they do not define content scope.

---

# Question Discovery Sufficiency Rule

The agent must not under-ask by stopping after one or two obvious conflicts.

For each scanned large file / act outline, the agent must run and record these passes:

1. Canon authority pass
2. Timeline / ordering pass
3. Character continuity pass
4. World rules pass
5. Theme / meaning pass
6. Structure / presentation pass
7. Duplicate claim variation pass
8. Writeback safety pass
9. Question discovery sufficiency pass

For every pass, record:

- checked
- conflicts found
- no conflicts found
- blocked by source gap

This does not mean inventing questions. It means proving the scan was broad enough.

---

# Independent Operation Rule

By default, this skill must operate independently.

It must not say:

- “最高優先：Q1，直接影響 Act III v0.2 能否批核”
- “回答 Q1 後批核路徑即可確定”
- “選 A/C = 不升版本可批核；選 B = 升 v0.3”
- “目前 project progress 是...”

unless user explicitly requested APPROVAL_AWARE_PASS.

---

# Supported Modes

## ISOLATED_CONFLICT_PASS

Default for specific files / folders. Use skill-local persistent state. Do not use project-level workflow files as scope. Must run forced multi-agent conflict discovery when scope is large or high-risk.

## FRESH_FULL_PASS_WITH_MULTI_AGENT_REVIEW

Broad scan with all reviewers and persistent state.

## RESUME_FROM_CONFLICT_STATE

Continue skill-local state. Read SESSION_STATE.md, CONFLICT_REGISTER.md, QUESTION_QUEUE.md, AUTHOR_DECISIONS.md first. Do not rescan full project unless needed.

## APPLY_AUTHOR_DECISIONS

Apply answered MC decisions.

## APPROVAL_AWARE_PASS

Only when user explicitly asks for approval / version / roadmap decision.

---

# Startup Procedure

At start:

1. Determine mode.
2. Load skill-local SESSION_STATE.md if exists.
3. Load READ_LEDGER.md, CONFLICT_REGISTER.md, QUESTION_QUEUE.md, AUTHOR_DECISIONS.md if exists.
4. Determine requested content scope.
5. Check whether cached claims are stale.
6. Decide what files actually need reading.
7. Proceed.

If state files are missing, create them.

---

# Output Requirements

Every run must output:

1. Mode used
2. Scope mode
3. Persistent state files used / created
4. Files read this run
5. Files skipped due to cache
6. Multi-agent passes completed
7. Question-design passes completed
8. Label-sanitization result for any asked question
9. Source Freshness Ledger summary
10. Conflicts found / updated
11. Questions asked through MCP / pending
12. Auto-applied fixes
13. Changed files list
14. Exact diff summary
15. Remaining pending questions
16. Final status

Final status:

- CONFLICT_CLEAN
- CONFLICT_PARTIAL_SAFE_FIXES_APPLIED
- CONFLICT_WAITING_FOR_MCP_ANSWER
- CONFLICT_WAITING_FOR_MC_ANSWERS_TEXT_FALLBACK
- CONFLICT_BLOCKED_BY_SOURCE_GAP
- CONFLICT_STATE_UPDATED_NO_WRITEBACK
- CONFLICT_BLOCKED_BY_TOOLING

---

# Recommended Prompt

```text
/story-conflict-resolution-gate

Mode: ISOLATED_CONFLICT_PASS

獨立處理以下 scope 內嘅文件矛盾。
唔好根據整個 project 進度問我問題。
唔好判斷 Act 能否批核。
唔好討論升唔升版本。
唔好由 project-level QUESTION_QUEUE 開始。

請使用 persistent state，並強制使用 multi-agent：
- Canon Authority Reviewer
- Timeline / Causality Reviewer
- Character Continuity Reviewer
- World Rules Reviewer
- Theme / Meaning Reviewer
- Structure / Presentation Reviewer
- Writeback Safety Reviewer
- Question Discovery Reviewer

每個重大問題要再經過 question pipeline：
- Conflict Summarizer
- Content Truth Extractor
- Option Builder
- Consequence Mapper
- Question Critic
- Author Visible Label Sanitizer
- MCP Tool Caller
- Persistence Recorder

作者可見問題同選項完全唔准用 J幾、L幾、Phase、QQ、CDL、section code 做核心語言。
內部編號只可以留喺 source note / state file。
問題要問內容 / 設定 / canon truth，唔好問段落放置位置。

Scope:
[填文件 / folder]
```

---

# Failure Handling

If multi-agent review was skipped:

```text
Workflow correction:
Forced multi-agent conflict discovery was skipped.
I will run the required reviewers before finalizing conflicts or asking questions.
```

If question pipeline was skipped:

```text
Workflow correction:
The author question was not passed through the question-design pipeline.
I will rewrite it through Content Truth Extractor, Option Builder, Consequence Mapper, Question Critic, and Author Visible Label Sanitizer before asking.
```

If author-facing text contains internal labels:

```text
Workflow correction:
The question still contains author-facing internal labels.
I will remove J/L/Phase/QQ/CDL/section labels from the visible question and options, keep them only in source notes, and ask again.
```

If the agent asks placement-first:

```text
Workflow correction:
The question asked placement instead of content truth.
I will rewrite it as a content/canon-truth MCP question.
```

If same question is asked again:

```text
Workflow correction:
This conflict already has a recorded question or author decision.
I will reuse the existing Question ID / Decision ID instead of asking again.
```
