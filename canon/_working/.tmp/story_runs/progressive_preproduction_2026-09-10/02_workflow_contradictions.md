# 02 — Workflow Contradiction Audit (Stage 0) — CORRECTED 2026-09-10

Frame: **Primary runtime = Claude / `.claude/`.** `.agents/` = secondary reference, not scope.
Codex-only drift items from the first pass (old C4 read-order, old C5 scratchpad, old C6 sync overlap
as a Codex problem) are demoted — see bottom. NO FIX YET.

---

## C1 — Layer discipline vs scene-grain skills with no layer-state gate
- **A:** 「唔可以跳層——Outline未批核不做Beat Sheet；Beat Sheet未全部完成不做Scene」；「出現『具體對白 wording / 鏡頭角度 / Xsec timing』= 已跳入 Scene 層，須退回」
  - Source A: `CLAUDE.md` → ⚠️ 故事寫作 Pipeline / 硬性規則
- **B:** `.claude/skills/story-scene-lab` turns "一個小 beat / 章節" into a D4 screenplay draft (dialogue + camera). `.claude/skills/story-router` SCENE_LAB routes to it whenever the user says "write a small scene". Neither checks the per-Act layer state (does this Act have an approved Beat Sheet? do all four?).
  - Source B: `.claude/skills/story-scene-lab/SKILL.md`, `.claude/skills/story-router/SKILL.md`
- **Partial mitigation already present:** `story-sequence-boundary-designer` Hard Rule + orchestrator §"Sequence Boundary Must Come First" force range agreement before a full script. But that gates *scope*, not *pipeline layer*.
- **Risk:** MEDIUM–HIGH. Current artifacts: Act I–III outlines, partial Act I beat sheet (scene-ref only), Act IV outline missing, II/III/IV beat sheets missing. A user asking scene-lab for an Act I scene today gets scene work with no layer-state warning.
- **Resolving owner:** `.claude/skills/story-orchestrator` + `story-router` (progressive mode with layer-state precondition) + `story-scene-lab` entry rule. Pipeline law itself stays in `CLAUDE.md`.

## C2 — ⭐ CLAUDE-INTERNAL RULE COLLISION (was mis-framed as Claude-vs-Codex)
- **A (absolute rule):** 「Beat Sheet 未全部完成不做Scene」；「全四幕 Beat Sheet 完成後才開始 Scene / Script」；「Outline未批核不做Beat Sheet」。Marked 硬性規則. Only stated exception: 作者明確說「試寫草稿」→ `[DRAFT ONLY — NOT CANON]`, 不進入任何 canon 文件.
  - Source A: `CLAUDE.md` → ⚠️ 故事寫作 Pipeline
- **B (skills override it broadly):**
  - `.claude/skills/story-orchestrator/SKILL.md` line 49: 「唔可以因為全劇 Beat Sheet 未完成而停止。只可將成品標成草稿／暫定。」
  - `.claude/skills/story-dialogue-readiness-gate/SKILL.md` line 31: 「未完成全劇 Beat Sheet 不等於 NOT_READY；只影響正式批准狀態。」
  - Source B: those two skill files
- **Nature:** Not a policy conflict between agents — **Claude's own operating rule (`CLAUDE.md`) and Claude's own skills disagree** on whether "all four Act Beat Sheets approved" is a hard precondition for *any* Scene work or merely a precondition for *canon-approved* Scene work. The skills already resolve it as "draft/暫定 OK, canon-approval NO" — which is a coherent reading of the CLAUDE.md draft exception, just much broader than "作者明確話試寫草稿".
- **Risk:** HIGH for this pack. The pack's target ("Act I 由粗到幼一路做到有對白 scene" while Acts II–IV are still at outline) is exactly the case these two rules split on. Stage 4 routing design cannot be written until the author confirms which reading governs.
- **Resolving owner:** **AUTHOR GATE.** Then make `CLAUDE.md` and the skills say the same thing. Recommended resolution (needs author OK): CLAUDE.md keeps "全四幕 Beat Sheet 批核 = precondition for **canon-approved** Scene/Script"; progressive per-Act Scene work below that is allowed but every output carries a status stamp (`[DRAFT / 暫定 — pending full-story beat lock]`) and cannot writeback to canon.

## C3 — "自己補 routine story design" vs "不准 invent missing bridges"
- **A:** 「自己補 routine story design」；orchestrator low-risk auto-do list includes 「根據已批准原則補低風險細節」
  - Source A: `00_START_HERE.md` line 82; `.claude/skills/story-orchestrator/SKILL.md` §低風險工作
- **B:** `.claude/skills/story-outline-synthesis-gate`: 「AI 自己補洞、亂駁事件、亂改角色弧光」= prohibited; 「不准 invent missing bridges」
  - Source B: `.claude/skills/story-outline-synthesis-gate/SKILL.md`
- **B2 (partial reconciler):** Consequence-Driven Progression Law — AI may propose a bridge, must tag `[RISK: INTENTION-DRIVEN]` + add to Questions for Author when no external Cost Signal.
  - Source: `CLAUDE.md` @consequence-driven-progression.md
- **Risk:** MEDIUM. The boundary between "low-risk detail AI fills" and "structural bridge needing author" is not defined anywhere. Progressive flow will either over-ask (kills the pack UX) or over-invent (breaks the outline gate).
- **Resolving owner:** `.claude/skills/story-outline-synthesis-gate` + `story-orchestrator` (define the routine-vs-high-impact test; reuse 12/19-angle + Consequence-Law tagging; orchestrator already lists 高影響工作 categories — extend that list into a usable classifier).

## C4 — Overlapping canon-sync skills (Claude side)
- `story-canon-sync-gate` (v3 auto-writeback) vs `story-document-synthesis-gate` (v2 auto-writeback) vs `story-canon-reconciliation`. Three skills that "read many files, arbitrate truth, auto-writeback".
  - Source: `.claude/skills/` listing + `.claude/commands/` (both sync-gate and document-synthesis-gate have slash commands)
- **Risk:** LOW–MEDIUM. Routing ambiguity, possible double-writeback if both invoked.
- **Resolving owner:** `story-router` (declare primary for Stage 1 use; scope-narrow or note the other). Decide Stage 1/2.

---

## Demoted (Codex-only, not this run's problem)
- ~~old C4 (AGENTS.md vs CLAUDE.md read-order drift)~~ — `.agents/` not in scope.
- ~~old C5 (story-context-manager flat scratchpad vs per-run folders)~~ — that was the `.agents` context-manager; Claude side `story-run-workspace-manager` already uses per-run folders correctly.
- ~~old C6 as a Codex porting problem~~ — folded into C4 above as a Claude-side routing question only.
- old C7 (author-question format echo) — still worth a light check that each `.claude` skill honours the "no Q1/A/B/C, no internal codes" rule, but low priority; keep as a Stage 2 checklist item, not a contradiction.

---

## Authoritative-workflow conclusion (corrected)
- **`.claude/` is the active production workflow. `CLAUDE.md` + `.claude/story_system/` = the rules. `.claude/skills/` = the routed capabilities.**
- `.agents/` mirrors a subset for Codex compatibility and is explicitly out of scope here.
- The only cross-system contradiction that matters is **C2, and it is internal to Claude** (`CLAUDE.md` vs its own skills). Everything else is: (C1) missing a layer-state gate, (C3) missing a routine/high-impact boundary, (C4) pick one of three sync skills.
