# 01 — System Ownership Audit (Stage 0) — CORRECTED 2026-09-10

## ⚠️ Correction notice
First pass wrongly treated `.agents/` (Codex) as the implementation target and classified many
capabilities as MISSING / PORT because they were absent from `.agents/`.

**Authoritative frame (corrected):**
- **Primary runtime = Claude / `.claude/`.** This is the active production workflow.
- `.agents/` = secondary compatibility reference only. NOT this run's implementation scope.
- Gap classification is now: does a `.claude/` owner (skill, `.claude/story_system/` doc, or a
  `canon/_working/` artifact) exist and is it routed?
- "PORT to Codex" work is **out of scope** for this run and removed below.

Evidence = files read this run (`.claude/skills/*/SKILL.md`, `.claude/story_system/director_pipeline/`,
`canon/_working/` listing). Dates from `git log` / `stat`.

---

## Capability → Owner map (Claude-authoritative)

| # | Capability | `.claude` Owner(s) | State | Evidence | Gap | Action |
|---|---|---|---|---|---|---|
| 1 | Full-story outline | `story-outline-synthesis-gate` (user-invocable) | GOOD | SKILL.md: 4-act enforced, source hierarchy, anti-stale-backup, consequence check | none | KEEP |
| 2 | Act outline | `story-outline-synthesis-gate` (argument-hint: "act outline task") | GOOD (owner) / artifact PARTIAL | Act I–III outlines exist; Act IV missing (project's declared blocker) | owner fine; artifact gap is Act IV, not a system gap | KEEP |
| 3 | Act-level question/decision work | `story-room` + `QUESTION_MATRIX.md` + `BLOCKED_DECISIONS.md` + angle-system | GOOD | story-room SKILL.md: Question Matrix Gate, 24-angle scan | none | KEEP |
| 4 | Sequence / event grouping | `story-sequence-boundary-designer` + orchestrator §"Sequence Boundary Must Come First" (line 102-103) | **GOOD** | SKILL.md read; orchestrator line 88 "先設計整段 sequence 由邊度開始…". First-pass "no owner" was WRONG. | none | KEEP |
| 5 | **Beat Sheet layer** (Act-level: 每 beat 發生咩 / 情感弧 / A-B-C 設計決定 / CDL 錨點, no dialogue) | **none dedicated.** `story-dialogue-architect` = beat arch of *a dialogue scene*; `story-scene-lab` = story-breaking at scene grain; `story-outline-synthesis-gate` = outline + per-beat consequence check but not "produce Act II beat sheet" | **MISSING (real, both sides)** | grep across `.claude/skills` for beat-sheet ownership → only references, no owner; artifact `ACT_I_BEAT_SHEET.md` self-labels E-01/E-02 as `[SCENE REFERENCE]`, "正式 Beat Sheet 工作將在 Outline 修訂完成後重新開始" | **No routed skill owns the CLAUDE.md pipeline layer 2.** | EXTEND `story-outline-synthesis-gate` (add beat-sheet mode) OR PATCH `story-scene-lab` (add Act-beat grain) OR NEW_ONLY_IF_PROVEN — decide Stage 4 |
| 6 | Sequence boundary | `story-sequence-boundary-designer` (Hard Rule: no full dialogue script before author confirms range) | **GOOD** | SKILL.md read | none | KEEP |
| 7 | Character state | `story-character-context-recovery`, `story-character-arc-positioner`, `story-scene-performance-state-builder`; artifact `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` | GOOD | `.claude/skills` cluster present | none (system); tracker freshness = CURRENT (git status M) | KEEP |
| 8 | Character knowledge | `story-knowledge-state-mapper`, `story-character-memory-state-manager`; artifact `KNOWLEDGE_DEPENDENCY_MAP.md`; fact map `CHARACTER_KNOWLEDGE_FACTS.md` | GOOD | skills present | fact-map data stale (see 03) | KEEP (system) |
| 9 | Relationship state | `story-relationship-dynamics`; artifacts `13_major_events_relationship_impact.md`, `story_construction/07_Major_Events_Relationship_Impact.md`, fact map `RELATIONSHIP_FACTS.md` | GOOD | skill present | none (system) | KEEP |
| 10 | Reveal / audience knowledge | `story-room`, `story-knowledge-state-mapper`, `story-audience-experience-designer`; artifacts `LATE_REVEAL_SEEDING_AUDIT.md`, `canon/09_information_design.md`, `CROSS_ACT_FORESHADOW_MANIFEST.md` | GOOD | skills + artifacts | none | KEEP |
| 11 | Theme / control objectives | artifacts `CONTROL_OBJECTIVES_MASTER.md` + 4 sub-tables; Gate A/B/C in `.claude/story_system/character-ideology-gate.md` | PRESENT_BUT_STALE (artifacts) | control files last real edit 2026-04-15 (COM); ~CDL-160 → CDL-408 behind | files stale; no skill "refreshes" them automatically | PATCH artifacts (Stage 2) |
| 12 | Source recovery | `story-source-recovery-gate` (mandatory before marking MISSING) | GOOD | SKILL.md read | none | KEEP |
| 13 | Source freshness / canon reconciliation | `story-canon-sync-gate` (v3), `story-canon`, `story-canon-reconciliation`, `story-document-synthesis-gate` | GOOD (some overlap) | 4 related skills | routing ambiguity sync-gate vs document-synthesis-gate | KEEP; pick primary in Stage 2 |
| 14 | Fact Map | `story-canon-fact-map-builder`; data `canon/_working/canon_fact_map/` | PRESENT_BUT_STALE (data) | last build 2026-06-22; ~200 CDLs since | delta rebuild needed | PATCH/delta (Stage 1) |
| 15 | Conflict escalation | `story-conflict-resolution-gate`, `story-atom-gate`; data `conflict_resolution/`, `CONFLICT_CANDIDATES.md` | GOOD | skills + dirs | none | KEEP |
| 16 | Temp evidence workspace / resumable run | `story-run-workspace-manager` (full: 00–10 temp files, manifest, context checkpoints, resume action) | **GOOD** | SKILL.md read; per-run folder convention `canon/_working/.tmp/story_runs/<id>/`. First-pass "partial / port" was WRONG. | none | KEEP |
| 17 | Resume | `story-resume` + `HANDOFF_SUMMARY.md` + state files | GOOD | SKILL.md read | none | KEEP |
| 18 | Change impact | `story-character-change-impact-manager`, `story-downstream-consistency-auditor`, `story-downstream-opportunity-planner` | **GOOD** | `.claude/skills` present. First-pass "MISSING" was Codex-only. | none (system); integration with progressive flow = Stage 5 | KEEP |
| 19 | Scene objective | `story-scene-objective-architect` (SCENE PURPOSE CONTRACT + beat-level objective progression) | **GOOD** | SKILL.md read | none | KEEP |
| 20 | Scene architecture | `story-scene-lab`, `story-scene-expression-planner`, `story-scene-psychology-mapper` | GOOD | skills present | none | KEEP |
| 21 | Character speaking state / voice | `story-character-voice-designer`, `story-scene-speaking-state-builder`, `story-character-voice-evidence-auditor`, `story-character-performance-bible-designer`; data `character-voice-bibles/`, `character-voice-workshops/`; `.claude/story_system/director_pipeline/GLOBAL_VOICE_DOCUMENT_PROTOCOL_v0.6.md` | **GOOD** | skills + data + protocol doc. First-pass "port" was WRONG. | none | KEEP |
| 22 | Dialogue readiness | `story-dialogue-readiness-gate` | **GOOD** | SKILL.md read; line 31 "未完成全劇 Beat Sheet 不等於 NOT_READY" | none (system) — but see C2 | KEEP |
| 23 | Dialogue draft | `story-dialogue-script` (post-gate), `story-dialogue-architect` (pre-draft beat arch), `story-dialogue-room` (review), `story-dialogue-runtime-variant-designer` | GOOD | skills present | none | KEEP |
| 24 | Directing / gameplay integration | Full pipeline: `story-game-director`, `story-gameplay-cinematic-integrator`, `story-gameplay-dialogue-integrator`, `story-storyboard-designer`, `story-performance-director`, `story-location-stage-director`, `story-montage-editor`, `story-director-delivery-builder`, `story-directing-language-architect/-auditor`; docs `.claude/story_system/director_pipeline/` (v0.8, 28-angle matrix, schema, USER_GUIDE_zh-HK) | **GOOD (rich)** | dir listing read. First-pass "partial" was Codex-only. | none | KEEP |
| 25 | Review / audit | `story-grounding-auditor`, `story-multi-agent-room`, `story-coverage-table-read`, `story-holistic-supervisor`, `story-experience-alignment-auditor`, `story-downstream-consistency-auditor` | GOOD | skills present | none | KEEP |
| 26 | Director preference / signature learning | `discussion-skill-builder` + `user-discussion-agent` (mined 41 sessions, full coverage) | **GOOD** | `.claude/skills` present + repo memory note | none | KEEP |

---

## Router / orchestrator explicit mapping (gate requirement)

- **`story-orchestrator` (`.claude`, 334L):** COLLABORATIVE_DEVELOPMENT + TRACE_COMPACT. Scans, explains missing prep in plain language, offers 2 options, auto-does low-risk work, stops only at high-impact co-design points. Has §"Sequence Boundary Must Come First". **Explicitly: line 49 "唔可以因為全劇 Beat Sheet 未完成而停止。只可將成品標成草稿／暫定。"**
- **`story-router` (`.claude`, 153L):** modes CO_DESIGN_DISCUSSION / SOURCE_RECOVERY / MOTIVATION_REVIEW / SCENE_LAB / DIRECTING_PIPELINE / (+ QUICK_LOOKUP / FULL_AUDIT). SCENE_LAB chain routes through sequence-boundary implicitly via scene-lab.
- **`story-outline-synthesis-gate`:** mapped, GOOD, KEEP.
- **`story-room`:** mapped, GOOD, KEEP.
- **`story-scene-lab`:** mapped, GOOD for scene grain.
- **`story-work-readiness-diagnostician`:** the plain-language "what's missing, want me to start?" front door — directly serves the pack's target UX.

### The one orchestration gap
Orchestrator + router handle: discussion, source recovery, motivation, scene lab, directing pipeline.
They do **not** have an explicit **coarse-to-fine progressive mode** that:
- tracks per-Act layer state (outline? beat sheet? scene?),
- routes Act → Sequence → Beat Sheet → Scene → Dialogue in order,
- enforces the CLAUDE.md layer discipline (or the agreed draft-exception version),
- resumes at the right layer.
Sub-owners for every layer **except Beat Sheet (#5)** exist; the connective routing does not.

---

## Corrected summary

- **KEEP:** 22 of 26 capabilities — Claude side already owns them.
- **PATCH (stale artifacts/data, agent-neutral):** #11 control files, #14 fact map (+ Stage 2 list in `03`).
- **REAL system gaps (Claude-authoritative):**
  1. **Beat Sheet layer has no routed owner** (#5).
  2. **No progressive Act→Sequence→Beat→Scene orchestration mode** in orchestrator/router.
- **MISSING with no owner anywhere:** only #5.
- **PORT-to-Codex work:** removed from scope.
- **Proposed NEW permanent artifacts: still targeting 0.** #5 first tries EXTEND/PATCH before NEW.

## Stage 4 patch targets (corrected — Claude side)
1. `.claude/skills/story-orchestrator` — add progressive coarse-to-fine mode + per-Act layer-state read + layer discipline.
2. `.claude/skills/story-router` — add PROGRESSIVE_AUTHORING mode routing to it.
3. Beat Sheet owner — EXTEND `.claude/skills/story-outline-synthesis-gate` or PATCH `.claude/skills/story-scene-lab`.
4. `CLAUDE.md` — resolve C2 (pipeline law vs orchestrator/readiness-gate draft exception) after author gate.
5. `canon/_working/` control artifacts — freshness PATCH (Stage 2).
`.agents/` left untouched this run.
