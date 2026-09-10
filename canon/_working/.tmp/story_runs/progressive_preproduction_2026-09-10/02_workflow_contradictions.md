# 02 — Workflow Contradiction Audit (Stage 0)

NO FIX YET. Each entry: statement A / source A / statement B / source B / operational risk / resolving owner.

---

## C1 — Layer-skip prohibition vs scene-grain skills with no gate
- **A:** 「唔可以跳層——Outline未批核不做Beat Sheet；Beat Sheet未全部完成不做Scene」「全四幕 Beat Sheet 完成後才開始 Scene」「出現『具體對白wording / 鏡頭角度 / Xsec timing』= 已跳入 Scene 層，須退回」
  - Source A: `CLAUDE.md` → ⚠️ 故事寫作 Pipeline, 硬性規則
- **B:** `story-scene-lab` turns "一個小章節 / beat / scene" into D4 screenplay draft (dialogue + camera) with no precondition check that all four Act Beat Sheets are approved. `story-router` SCENE_LAB mode routes to it on "write a small chapter / scene / dialogue script". `ACT_I_BEAT_SHEET.md` E-01/E-02 already contain scene-level content (照鏡 0.3秒錯位, specific lines) and were retro-labeled `[SCENE REFERENCE]`.
  - Source B: `.agents/skills/story-scene-lab/SKILL.md`, `.agents/skills/story-router/SKILL.md`, `canon/_working/story_construction/ACT_I_BEAT_SHEET.md` lines 1-30
- **Risk:** HIGH. Current repo state = only ACT_I–III outlines + a partial ACT_I beat sheet; ACT_IV outline missing; II/III/IV beat sheets missing. Per pipeline law, zero Scene work is legal now. But scene runs exist (`.tmp/story_runs/haruka_first_transform_school*`). Author's coarse-to-fine goal REQUIRES the layer discipline; the skills don't enforce it.
- **Resolving owner:** `story-router` + `story-orchestrator` (add progressive-pipeline mode with a layer-state precondition check) + `story-scene-lab` entry rules. Pipeline law itself stays in `CLAUDE.md` (canonical).

## C2 — "All four Acts Beat-approved before ANY local scene" vs author's incremental coarse-to-fine goal
- **A:** 「全四幕全部完成並批核」→ then Beat Sheet; 「全四幕 Beat Sheet 完成後才開始 Scene/Script」
  - Source A: `CLAUDE.md` Pipeline diagram + 三層分工
- **B:** 「我想由 Act I 開始，由粗到幼一步一步做，最後做到有對話 scene」 — the pack's stated READY test wants Act I to reach dialogue scene without waiting for Acts II–IV.
  - Source B: `tools/ProjectHaruka_Progressive_Preproduction_Pack/00_START_HERE.md` lines 8-9, 71-88
- **Risk:** HIGH / DESIGN-LEVEL. These are directly opposed. Either (a) the pack's "down to dialogue for Act I now" is actually a `[DRAFT ONLY — NOT CANON]` sandbox (the one CLAUDE.md exception), or (b) the author intends to relax the all-four-acts gate. Needs author decision — cannot be silently resolved.
- **Resolving owner:** AUTHOR GATE. Then encode in `CLAUDE.md` (if rule changes) and orchestrator routing.

## C3 — "AI 自己補 routine story design" vs "不准 invent missing bridges"
- **A:** 「自己補 routine story design」「只問真正 high-impact 導演問題」; orchestrator Creative Momentum Rule: "proactively develop the idea", "Offer the minimum viable canon expansion when useful"
  - Source A: `00_START_HERE.md` line 82; `.agents/skills/story-orchestrator/SKILL.md` lines 8-17
- **B:** 「AI 自己補洞、亂駁事件、亂改角色弧光」= prohibited; 「不准 invent missing bridges」
  - Source B: `.agents/skills/story-outline-synthesis-gate/SKILL.md` lines 22, 327
- **B2 (partial reconciler):** Consequence-Driven Progression Law: AI may propose a bridge but must tag `[RISK: INTENTION-DRIVEN]` and add to Questions for Author if no external Cost Signal.
  - Source: `CLAUDE.md` @consequence-driven-progression.md
- **Risk:** MEDIUM. The line between "routine design AI fills" and "bridge invention that needs author" is undefined. Without a boundary the progressive flow either over-asks (defeats the pack goal) or over-invents (violates outline gate).
- **Resolving owner:** `story-outline-synthesis-gate` + `story-room` (define a "routine vs high-impact" classifier; reuse the 12/19-angle system + Consequence Law tagging).

## C4 — Codex fresh-read order vs CLAUDE.md fresh-read order (minor)
- **A:** `AGENTS.md` step 5 "`CANON_DECISION_LOG.md` if relevant", step 7 "QUESTION_MATRIX if relevant"
- **B:** `CLAUDE.md` lists CANON_DECISION_LOG as step 5「如存在」and adds step 6 `READ_MANIFEST.md`, plus `story_construction/QUESTION_MATRIX.md` step 7「如當前 task 相關」. Also `CLAUDE.md` adds `CANON_DECISION_LOG.md` as mandatory-ish.
- **Risk:** LOW. Wording drift only; both point to same files. Codex could skip CDL when it matters (Round 184 shows CDL is central).
- **Resolving owner:** `AGENTS.md` (align wording to CLAUDE.md; make CDL non-optional given current workflow reality).

## C5 — Scratchpad convention mismatch
- **A:** `story-context-manager` scratchpad policy names 3 flat files: `canon/_working/.tmp/current_run.md`, `current_run_evidence.md`, `current_run_agent_notes.md`
  - Source A: `.agents/skills/story-context-manager/SKILL.md`
- **B:** Actual convention (pack + existing runs) = per-run folders `canon/_working/.tmp/story_runs/<run-id>/`
  - Source B: `00_START_HERE.md` line 21; existing `canon/_working/.tmp/story_runs/haruka_first_transform_school*`; `.claude/skills/story-run-workspace-manager`
- **Risk:** MEDIUM. Parallel/long runs collide on the 3 flat files; no resumable per-run memory. Directly hurts the pack's "每次答完可 resume" requirement.
- **Resolving owner:** `story-context-manager` (PATCH to adopt per-run folder convention; consider PORT of `story-run-workspace-manager`).

## C6 — Overlapping canon-sync skills
- **A:** `story-canon-sync-gate` (v3, auto-writeback + loop control)
- **B:** `story-document-synthesis-gate` (v2 auto writeback) + `story-canon` + `story-canon-fact-map-builder`
  - Source: `.agents/skills/` listing; both SKILL headers describe multi-file truth arbitration
- **Risk:** LOW-MEDIUM. Two "auto writeback synthesis" skills → routing ambiguity, possible double-writeback.
- **Resolving owner:** `story-router` (declare one primary; mark the other DEPRECATE_ROUTE or scope-narrow). Decide in Stage 2.

## C7 — Author-gate format rule location
- **A:** 「唔用編號 Q1/Q2 + A/B/C 選項式問答格式」「對話入面唔用內部追蹤編號」
  - Source A: `CLAUDE.md` User interaction style (2026-07-06)
- **B:** `.agents` skills (`story-room`, `story-outline-synthesis-gate`) mostly reference this but orchestrator/router prompt templates still show structured/numbered output scaffolds.
- **Risk:** LOW. Style drift; already partly propagated. Confirm each Codex skill echoes the free-form rule.
- **Resolving owner:** each `.agents` skill referencing author questions (PATCH pass in Stage 2/4).

---

## Authoritative-workflow question (gate item: "whether Codex or Claude workflow is authoritative for Codex")
- `AGENTS.md` lines 4-6: repo has canonical Claude workflow under `CLAUDE.md` + `.claude/`; Codex must not modify `.claude/`; Codex uses `.agents/skills/`.
- Interpretation: **`.agents/` is authoritative for Codex execution; `CLAUDE.md` (pipeline law, always-true rules, interaction style, the 4 `@`-included system docs) is authoritative for workflow *rules* regardless of agent.** `.claude/skills/` = reference/port source only.
- No hard contradiction, but `.agents` is a strict subset of `.claude` capability (see 01 audit PORT_CANDIDATE list). The pack's job is to close that subset gap by PORT, not by forking rules.
