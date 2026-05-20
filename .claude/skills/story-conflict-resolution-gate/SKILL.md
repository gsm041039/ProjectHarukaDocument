# story-conflict-resolution-gate

## Purpose

This skill continuously hunts for real content/canon contradictions across Project Haruka story/canon documents, resolves safe contradictions automatically, asks the author only for unresolved content-truth conflicts, and writes all progress into skill-local persistent state.

It is a contradiction-resolution loop.

It is not:
- a project-progress reporter
- an approval gate
- a beat-sheet readiness checker
- a scene-placement planner
- a design-gap questionnaire
- a version manager
- a roadmap updater
- a “canon stable / project ready” announcer

---

# Absolute Core Rule

Only real canon/content contradictions can stop the loop for author input.

Design gaps must never become author-waiting questions in this skill.

If an issue is about scene placement, beat design, btd placeholder, merge/split presentation, or future staging, record it in DESIGN_GAP_REGISTER and continue scanning.

Do not ask the author about it.

Do not mark it as “waiting author”.

Do not list it as “pending question”.

Do not use it as a stop condition.

---

# What Counts As A Real Author Question

The agent may ask the author only if the issue is one of:

## REAL_CANON_CONTRADICTION

Two or more sources assert incompatible story facts.

Examples:
- One file says a character dies in one place; another says a different place.
- One file says a reality change succeeded; another says it failed.
- One file says a character is alive after an event; another says they died before it.

## WORLD_RULE_CONFLICT

A rule conflicts with another rule or event.

Examples:
- Alpha/Beta causality contradicts timeline.
- Emotional conservation contradicts ending mechanics.
- Reality rewrite mechanics contradict known cost rules.

## CHARACTER_TRUTH_CONFLICT

Character identity, backstory, motivation, relationship, transformation, or survival state conflicts.

## THEME_MEANING_CONFLICT

Two sources imply incompatible thematic meaning.

Examples:
- One source frames an action as voluntary choice; another frames it as total coercion.
- One source makes responsibility shared; another makes it single-person blame.

## HIGH_AUTHORITY_SOURCE_CONFLICT

Two high-authority sources conflict and cannot be safely reconciled.

---

# What Must Never Be Asked

The following must not be turned into author questions in this skill.

Record them in DESIGN_GAP_REGISTER only.

## SCENE_PLACEMENT_GAP

Examples:
- Where should the bridge scene go?
- Should this scene be independent or merged?
- Which day / phase / section should hold this scene?
- Should a character scene be placed in one sequence or another?

## BEAT_SHEET_DESIGN_GAP

Examples:
- 「待 Beat Sheet 設計」
- 「某場景未細化」
- 「入口動機待設計」
- 「btd placeholder」
- 「嘆息之橋新用途待定」

## PRESENTATION_ONLY_CHOICE

Examples:
- independent scene vs merged scene
- earlier reveal vs later reveal when truth is already settled
- title / heading choice
- pacing choice
- camera / staging choice
- how to dramatize a known fact

## WORKFLOW_OR_APPROVAL_CHOICE

Examples:
- can the outline be approved
- should this bump version
- is this blocking
- can story enter Beat Sheet
- is canon stable / deliverable

---

# Author Question Eligibility Gate

Before asking anything, run this gate:

```text
AUTHOR_QUESTION_ELIGIBILITY_GATE

1. Is there a direct contradiction in canon/story truth?
   - If no: DESIGN_GAP_REGISTER. Do not ask.

2. Would different answers change what is canonically true?
   - If no: DESIGN_GAP_REGISTER or PRESENTATION_TODO. Do not ask.

3. Is it only about where/how to present an already-settled truth?
   - If yes: DESIGN_GAP_REGISTER. Do not ask.

4. Is it about btd / Beat Sheet / future scene design / merge-split / staging?
   - If yes: DESIGN_GAP_REGISTER. Do not ask.

5. Is it about approval/roadmap/project readiness?
   - If yes: ignore for this skill unless APPROVAL_AWARE_PASS.

6. Can source authority/freshness safely decide it?
   - If yes: auto-fix or reject unsupported. Do not ask.

Only if unresolved canon truth remains, call ask-user-question MCP/tool.
```

If the gate fails, the loop continues.

---

# Design Gap Handling

Use:

```text
canon/_working/conflict_resolution/DESIGN_GAP_REGISTER.md
```

or equivalent.

Format:

```markdown
# Design Gap Register

| Gap ID | Summary | Affected files | Why not a contradiction | Suggested later layer | Status |
|---|---|---|---|---|---|
```

Allowed examples:

- 嘆息之橋新用途未細化
- 凜相關場景位置待設計
- 主角團前往帝國廣場的新進場動機待場面設計
- 某事件 presentation timing 未定

Status must be one of:

- RECORDED_NOT_ASKED
- PRESENTATION_TODO
- DESIGN_LAYER_TODO
- SOURCE_NOTE_ONLY

Forbidden statuses for design gaps:

- WAITING_FOR_AUTHOR
- AUTHOR_GATE
- BLOCKING
- PENDING_AUTHOR_DECISION
- NEEDS_APPROVAL

---

# Bad Report Pattern To Avoid

Bad:

```text
Loop 1:
發現 1 個 DEFERRED issue（嘆息之橋場景定位）等作者回答

最終狀態:
⏳ 1 個場景定位待作者決定
可交付狀態: CANON STABLE
```

Why bad:
- Scene positioning is not a content contradiction.
- It should not wait for author.
- It should not be an author question.
- “CANON STABLE” is project-readiness language.

Correct:

```text
Loop 1:
記錄 1 個設計細化缺口：嘆息之橋仍需要新用途，但目前未構成內容矛盾，已登記，不詢問作者。

Loop 2:
未發現由前輪修正引出的新內容矛盾。

Loop 3:
未發現新的內容矛盾或待修正安全項。

最終狀態:
CONFLICT_SCAN_STABLE_NO_NEW_FINDINGS
Stop reason: 連續兩輪無新內容矛盾、無新安全修正、無 stale cache。
```

Do not add “可交付狀態 / Canon stable / 可進入 Beat Sheet”.

---

# Continuous Loop Mode

## CANON_WIDE_CONFLICT_LOOP

Default for:
- 掃整個 canon
- 不停搵矛盾
- 自己解決
- 唔得先問我

Behavior:
1. Build scan queue.
2. Exclude workflow files.
3. Load skill-local state.
4. Run forced multi-agent discovery.
5. Detect contradictions.
6. Auto-fix safe contradictions.
7. Record design gaps without asking.
8. Ask only unresolved content-truth contradictions.
9. Rerun affected files after writeback.
10. Continue until stop condition.

---

# Stop Conditions

Stop only if:

1. WAITING_FOR_REAL_CONTENT_DECISION:
   A real canon/content contradiction needs author answer.

2. STABLE_NO_NEW_CONFLICTS:
   Two consecutive full loops over the current scope find:
   - 0 new real contradictions
   - 0 safe fixes
   - 0 stale cached claims
   - 0 newly affected files
   - 0 unresolved real content-truth questions

3. SOURCE_GAP:
   Required source is missing or unreadable.

4. SCAN_BUDGET_REACHED:
   User-defined or tool/context budget reached.

5. TOOLING_BLOCKED:
   Cannot safely read/write/diff.

Do not stop for:
- design gaps
- scene placement questions
- Beat Sheet placeholders
- btd notes
- “no blocking conflicts”
- “ready for Beat Sheet”
- “project can proceed”
- “canon stable”

---

# Final Status Vocabulary

Use only conflict-loop statuses:

Allowed:

- CONFLICT_LOOP_CONTINUES
- CONFLICT_WAITING_FOR_REAL_CONTENT_DECISION
- CONFLICT_SCAN_STABLE_NO_NEW_FINDINGS
- CONFLICT_PARTIAL_SAFE_FIXES_APPLIED
- CONFLICT_BLOCKED_BY_SOURCE_GAP
- CONFLICT_SCAN_BUDGET_REACHED
- CONFLICT_BLOCKED_BY_TOOLING
- CONFLICT_STATE_UPDATED_NO_WRITEBACK

Forbidden:

- CANON STABLE
- CANON CLEAN as deliverable state
- PROJECT READY
- READY FOR BEAT SHEET
- READY FOR APPROVAL
- 0 blocking conflicts therefore ready
- 可交付狀態
- 可進入 Beat Sheet 設計層
- 不阻礙 Outline 批核

---

# Output Language Firewall

Author-facing reports and questions must use natural story language.

Do not use as main wording:

- J1, J2, J3, J8
- K1, L1, L9, L10
- I2, I3
- Phase I/J/L
- E-III-I2, E-III-J1
- QQ-xxx
- CDL-xxx
- line numbers
- approval / blocker / readiness language

These may appear only in internal trace notes or skill-local state.

---

# Final Report Sanitizer

Before final response, run `AUTHOR_REPORT_SANITIZER`.

It must check:

1. No project readiness / approval language.
2. No “CANON STABLE” or “可交付” wording.
3. No design gap is marked waiting for author.
4. No scene placement issue is asked as an author question.
5. No forbidden internal labels as main wording.
6. No project-level workflow files are mentioned as updated.
7. Remaining issues are categorized as:
   - REAL_CONTENT_QUESTION
   - SOURCE_GAP
   - DESIGN_GAP_RECORDED_NOT_ASKED
   - PRESENTATION_TODO_RECORDED_NOT_ASKED
8. Changed file summaries use natural story descriptions.
9. If internal references are necessary, place them under “Internal trace note”.

If sanitizer fails, rewrite report.

---

# Content-First Question Rule

Ask about story fact / canon truth / setting meaning, not document placement.

Good:

```text
鐵絲網偶遇同黑奏力量來源之間，邊個設定先係 canon？

A) 真因果：晴香五歲改變現實時，間接令黑奏得到 / 強化後來毀滅世界的力量。
B) 黑奏話術：黑奏把鐵絲網偶遇包裝成「你給了我力量」，主要用來打擊晴香，不一定是客觀世界規則。
C) 半真因果：晴香創世裂縫提供條件，但黑奏後來的選擇 / 帝國系統才把力量變成災難。
D) 不成立：此連結不進 canon。
```

Bad:

```text
凜嘆息之橋獨立場景，你希望放在哪裡？
```

---

# Project-Level Workflow File Firewall

In all non-approval modes, do not read, edit, or summarize:

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

Only use skill-local state under:

```text
canon/_working/conflict_resolution/
```

or:

```text
canon_working/conflict_resolution/
```

---

# Skill-Local Persistent State

Use these files:

```text
READ_LEDGER.md
CLAIM_CACHE.md
CONFLICT_REGISTER.md
QUESTION_QUEUE.md
AUTHOR_DECISIONS.md
WRITEBACK_LOG.md
SESSION_STATE.md
MULTI_AGENT_REVIEW.md
QUESTION_DESIGN_REVIEW.md
SCAN_QUEUE.md
LOOP_LOG.md
DESIGN_GAP_REGISTER.md
```

under:

```text
canon/_working/conflict_resolution/
```

or equivalent.

---

# Forced Multi-Agent Conflict Discovery

Every canon-wide loop must run these reviewers:

1. Canon Authority Reviewer
2. Timeline / Causality Reviewer
3. Character Continuity Reviewer
4. World Rules Reviewer
5. Theme / Meaning Reviewer
6. Structure / Presentation Reviewer
7. Writeback Safety Reviewer
8. Question Discovery Reviewer
9. Design-Gap Filter Reviewer
10. Stop Condition Reviewer

## Design-Gap Filter Reviewer

Blocks bad author questions.

It checks:
- Is this a real contradiction or merely a design gap?
- Is the proposed question asking scene placement?
- Is the proposed question asking Beat Sheet design?
- Is the proposed question asking about btd placeholders?
- Can this be recorded as DESIGN_GAP_REGISTER instead?
- Should the loop continue instead of stopping?

If it says DESIGN_GAP, the agent must not ask the author.

## Stop Condition Reviewer

Checks:
- Did two consecutive loops meet stability criteria?
- Is any pending author item a real content contradiction?
- Are design gaps incorrectly being used as stop conditions?
- Did the report use project-readiness language?
- Should the loop continue?

---

# Forced Question Construction

Before asking author, every question must pass:

1. Conflict Summarizer
2. Content Truth Extractor
3. Option Builder
4. Consequence Mapper
5. Question Critic
6. Design-Gap Filter Reviewer
7. Author Visible Label Sanitizer
8. MCP Tool Caller
9. Persistence Recorder

If any step says “not a real contradiction”, record design gap and continue.

---

# Ask User Question MCP Contract

If a real author decision is needed, call ask-user-question MCP/tool.

Do not print ASK_USER_QUESTION as plain text when tool exists.

If unavailable:

```text
Ask-user-question MCP unavailable; falling back to text MC question.
```

---

# Writeback Rules

Allowed:
- canon/story file patches
- requested working story file patches
- skill-local conflict_resolution state

Forbidden:
- project-level workflow file updates
- approval status updates
- roadmap updates
- session ledger updates

---

# Output Requirements

Every loop summary must include:

1. Loop number
2. Scope scanned
3. New real contradictions found
4. Safe fixes applied
5. Design gaps recorded without asking
6. Author questions asked, if any
7. Files queued for next loop
8. Loop continuation decision

Final report must include:

1. Mode used
2. Scope scanned
3. Loop count
4. Natural-language summary of safe fixes
5. Real content-truth questions waiting for author, if any
6. Design gaps recorded but not asked
7. Stop reason
8. Final conflict-loop status

Final status options:

- CONFLICT_LOOP_CONTINUES
- CONFLICT_WAITING_FOR_REAL_CONTENT_DECISION
- CONFLICT_SCAN_STABLE_NO_NEW_FINDINGS
- CONFLICT_PARTIAL_SAFE_FIXES_APPLIED
- CONFLICT_BLOCKED_BY_SOURCE_GAP
- CONFLICT_SCAN_BUDGET_REACHED
- CONFLICT_BLOCKED_BY_TOOLING

---

# Recommended Prompt

```text
/story-conflict-resolution-gate

Mode: CANON_WIDE_CONFLICT_LOOP

掃描整個 canon/ 內嘅 story/canon 內容文件，持續搵內容矛盾。

你要不停 loop：
- 自己解決安全項
- 寫回 canon/story 文件
- 更新 conflict_resolution skill-local state
- 因 writeback 影響其他文件就排入下一輪再掃
- 直到連續兩輪無新內容矛盾 / 無新修正 / 無 stale cache，或者遇到真正內容真相矛盾需要我回答先停

只可以問我「內容 / 設定 / canon truth」矛盾。
唔准問我場景放邊、合併邊場、保留 btd、Beat Sheet 點設計、是否可進入下一層。
如果只係場面設計 gap，記入 DESIGN_GAP_REGISTER，唔好問我，繼續掃。

Design gaps must never be marked WAITING_FOR_AUTHOR.
Design gaps must never be listed as pending author questions.
Design gaps are not stop conditions.

Approval management: OFF.
唔好讀或改 PROJECT_STATUS / NEXT_ACTION / SESSION_LEDGER / project-level QUESTION_QUEUE。
唔好講批核、升版本、最高優先阻塞點、可進入 Beat Sheet、CANON STABLE、可交付狀態。

只可以更新：
1. canon/ 內需要修正嘅 story/canon 文件
2. canon/_working/conflict_resolution/ 入面嘅 skill-local state

請強制使用 multi-agent，包括 Design-Gap Filter Reviewer 同 Stop Condition Reviewer。
作者可見問題同 final report 唔准用 J幾、L幾、Phase、QQ、CDL、section code 做核心語言。

Scope:
canon/
```

---

# Failure Handling

## If the agent asks a design-gap question

Self-correct:

```text
Workflow correction:
The previous question was a design-gap / scene-placement question, not a real content contradiction.
I will record it in DESIGN_GAP_REGISTER, not as WAITING_FOR_AUTHOR, and continue scanning for actual canon contradictions.
```

## If the agent marks a design gap as waiting author

Self-correct:

```text
Workflow correction:
A design gap was incorrectly marked as waiting for author.
I will reclassify it as DESIGN_GAP_RECORDED_NOT_ASKED and continue the loop.
```

## If the agent outputs CANON STABLE / project readiness

Self-correct:

```text
Workflow correction:
The report used project-readiness language.
I will replace it with conflict-loop status only.
```

## If the agent stops because of a design gap

Self-correct:

```text
Workflow correction:
A design gap is not a stop condition.
I will continue the conflict loop unless a real content-truth contradiction needs author input.
```
