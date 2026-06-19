# CONFLICT_REGISTER.md — Auto Canon Sync (ACS-2026-06-01-001)

## Summary
This register covers the full working-vs-canon sync pass (2026-06-01).
Prior conflict history lives in canon/_working/conflict_resolution/CONFLICT_REGISTER.md.

---

## ACS-001: CDL-217/218 Venue Addendum Missing

| Field | Value |
|---|---|
| Conflict ID | ACS-001 |
| Title | CDL-217/218 entries lack venue addendum (嘆息之橋→帝國廣場) |
| Status | **RESOLVED ✅** |
| Files Involved | canon/_working/CANON_DECISION_LOG.md (lines ~265–266) |
| Conflicting Claims | CDL-217/218 reference 嘆息之橋 as紫音 Day 14 venue; AC 2026-05-19 changed to 帝國廣場 |
| Owner File | canon/_working/CANON_DECISION_LOG.md |
| Classification | Safe stale annotation — documentation fix only, no story meaning change |
| Severity | LOW |
| Evidence | SESSION_STATE.md CR-2026-05-19-001 WB-01 to WB-05: venue fixes applied to all canon files; NEXT_ACTION.md ⬜ pending addendum |
| Proposed Resolution | Add ⚠️ venue addendum note to CDL-217 and CDL-218 entries |
| Resolution Applied | ✅ Added addendum notes to CDL-217 and CDL-218 in CANON_DECISION_LOG.md |
| Loop Discovered | 1 |
| Loop Resolved | 3 |
| Follow-up | None |

---

## ACS-002: NEXT_ACTION.md Stale Status for QQ-96/97

| Field | Value |
|---|---|
| Conflict ID | ACS-002 |
| Title | NEXT_ACTION.md shows QQ-96/97 as ⏳ but both are RESOLVED |
| Status | **RESOLVED ✅** |
| Files Involved | canon/_working/NEXT_ACTION.md |
| Conflicting Claims | NEXT_ACTION.md: QQ-96/97 marked ⏳; QUESTION_QUEUE.md: both marked RESOLVED (A, 2026-05-19) |
| Owner File | canon/_working/NEXT_ACTION.md (working state) |
| Classification | Safe stale summary — state file update |
| Severity | LOW |
| Evidence | QUESTION_QUEUE.md QQ-96: "RESOLVED（A — 2026-05-19 FRESH_FULL_PASS 文件掃描確認）"; QQ-97: same |
| Proposed Resolution | Update NEXT_ACTION.md to ✅ for QQ-96 and QQ-97 |
| Resolution Applied | ✅ Updated NEXT_ACTION.md |
| Loop Discovered | 1 |
| Loop Resolved | 3 |
| Follow-up | None |

---

## ACS-003: QQ-102 — CDL-288 鐵絲網偶遇 Integration Gap

| Field | Value |
|---|---|
| Conflict ID | ACS-003 |
| Title | CDL-288 (鐵絲網偶遇) not integrated into ACT_III_OUTLINE J2 three-weapons sequence |
| Status | **RESOLVED ✅ — B (AC 2026-06-01)** |
| Files Involved | canon/_working/story_construction/ACT_III_OUTLINE.md; CANON_DECISION_LOG.md (CDL-290) |
| Conflicting Claims | CDL-288 confirms 鐵絲網偶遇 = core reveal in J-phase; J2 three-weapons (CDL-266) does not include it |
| Classification | Resolved by new beat |
| Resolution | New E-III-J2.5 beat added; outline upgraded to v0.3; CDL-290 logged |
| Loop Discovered | 1 | Loop Resolved | 5 |

---

## ACS-004: QQ-103 — CDL-289 Loop N Warden Role

| Field | Value |
|---|---|
| Conflict ID | ACS-004 |
| Title | CDL-289 Loop N Warden role not reflected in ACT_III J3 outline |
| Status | **RESOLVED ✅ — No Warden outline beat (AC 2026-06-01)** |
| Files Involved | canon/_working/story_construction/ACT_III_OUTLINE.md; CDL-291 |
| Resolution | Author: 依家冇Warden設定. CDL-289 remains as worldbuilding background; no outline beat. CDL-291 logged. |
| Loop Discovered | 1 | Loop Resolved | 5 |

---

## ACS-009: 01_world_rules_and_costs — rule-causal-backflow semantic contradiction vs CDL-287

| Field | Value |
|---|---|
| Conflict ID | ACS-009 |
| Title | `rule-causal-backflow` describes time-reversal mechanism; CDL-287 establishes double causal overlap at Y102 |
| Status | **RESOLVED ✅** |
| Files Involved | canon/01_world_rules_and_costs.md (lines 460-482) |
| Classification | Semantic world-rule contradiction — stale backup mechanism vs author-confirmed CDL |
| Evidence | Line 464 "源自晴香**未來**施展「改變現實」的時間因果逆流" contradicts CDL-287 (AC 2026-05-12) "雙重因果疊加①改變現實②鐵絲網偶遇信標" |
| Resolution | Rewrote section with CDL-287 mechanism; marked old time-reversal as SUPERSEDED; updated constraints |
| Loop Discovered | 12 | Loop Resolved | 12 |

## ACS-010: HARD_CONSTRAINTS_TABLE — HC-4g stale constraint reason

| Field | Value |
|---|---|
| Conflict ID | ACS-010 |
| Title | HC-4g reason uses old time-reversal mechanism |
| Status | **RESOLVED ✅** |
| Files Involved | canon/_working/story_construction/HARD_CONSTRAINTS_TABLE.md |
| Classification | Stale reason — constraint valid, explanation superseded by CDL-287 |
| Resolution | Updated reason to CDL-287 double causal + CDL-007 emotion harvesting |
| Loop Discovered | 12 | Loop Resolved | 12 |

## ACS-011: 05_story_outline_canon — Kurokane power description imprecision

| Field | Value |
|---|---|
| Conflict ID | ACS-011 |
| Title | story_outline_canon line 457 "因果逆流借來的" uses old borrowed/reversal framing |
| Status | **RESOLVED ✅** |
| Files Involved | canon/05_story_outline_canon.md |
| Classification | Minor wording imprecision vs CDL-287 mechanism |
| Resolution | Updated to "帝國歷102年創世事件雙重因果賦予（CDL-287）" while preserving therapeutic insight |
| Loop Discovered | 16 | Loop Resolved | 16 |

## ACS-014: CROSS_ACT_CONTROL_LAYERS — Kurokane power description stale

| Field | Value |
|---|---|
| Conflict ID | ACS-014 |
| Title | CROSS_ACT_CONTROL_LAYERS line 51 "借晴香之力改變現實（因果逆流結構性力量）" = old time-reversal framing |
| Status | **RESOLVED ✅** |
| Files Involved | canon/_working/story_construction/CROSS_ACT_CONTROL_LAYERS.md |
| Classification | Stale mechanism description in working control layers file — AUTO_FIX_SAFE |
| Resolution | Updated to CDL-287 double causal (fence wish + reality override at Y102); CDL-289 Loop N noted |
| Loop Discovered | 21 | Loop Resolved | 21 |

## ACS-015: CDL-204 術語 — 執念飽和度 — PROVEN_SAFE

| Field | Value |
|---|---|
| Conflict ID | ACS-015 |
| Title | 執念飽和度 listed in CDL-204 as abolished, but still present in multiple canon files |
| Status | **PROVEN_SAFE ✅** |
| Evidence | Other 4 CDL-204 abolished terms (共鳴式調律/調音叉/共鳴波動/情緒諧振) are completely absent from glossary; 執念飽和度 serves a different function (diagnostic measurement) vs. mechanism operations that were abolished |
| Classification | Intentional retention — diagnostic concept vs. abolished mechanism operation terms |
| Loop Discovered | 21 |

## ACS-012: haruka.md guilt arc re: wire-fence — PROVEN_SAFE

| Field | Value |
|---|---|
| Conflict ID | ACS-012 |
| Title | Does CDL-288 wire-fence reveal require haruka.md update? |
| Status | **PROVEN_SAFE ✅** |
| Evidence | CDL-288 explicitly targets timeline + aya.md (not haruka.md); wire-fence is J2.5 Act III secret — haruka.md correctly omits it |
| Loop Discovered | 12 |

## ACS-013: Warden/Soul Traversal terminology — PROVEN_SAFE

| Field | Value |
|---|---|
| Conflict ID | ACS-013 |
| Title | CDL-291 (no Warden outline beat) — drift in glossary/aya.md/timeline? |
| Status | **PROVEN_SAFE ✅** |
| Evidence | All files correctly use Soul Traversal as background worldbuilding; no "Warden reveal" language in canon |
| Loop Discovered | 13 |

## ACS-006: canon/13 + working/07 — 鐵板獨舞 / 紫音 Day 10 stale references

| Field | Value |
|---|---|
| Conflict ID | ACS-006 |
| Title | 鐵板獨舞 terminology + 5月第10天 date stale in canon/13 and _working/story_construction/07 |
| Status | **RESOLVED ✅** |
| Files Involved | canon/13_major_events_relationship_impact.md; canon/_working/story_construction/07_Major_Events_Relationship_Impact.md |
| Conflicting Claims | CDL-218 = 鋼鐵獨舞 Day 13 (操) / Day 14 (紫音); files used 鐵板獨舞 and 5月第10天 for紫音 |
| Classification | Stale terminology + stale date — AUTO_FIX_MEDIUM |
| Evidence | CDL-218 (AC 2026-04-13); files NOT in CR-2026-05-19/20 update list |
| Resolution | Updated E-13 dates, E-14 titles in both files (Day 14 正午 + 鋼鐵獨舞) |
| Loop Discovered | 9 | Loop Resolved | 9-11 |

## ACS-007: canon/09 — 鐵板獨舞 terminology

| Field | Value |
|---|---|
| Conflict ID | ACS-007 |
| Title | 鐵板獨舞 terminology in canon/09_information_design.md (2 instances) |
| Status | **RESOLVED ✅** |
| Files Involved | canon/09_information_design.md |
| Classification | Stale terminology — AUTO_FIX_SAFE |
| Resolution | All instances replaced with 鋼鐵獨舞 (replace_all) |
| Loop Discovered | 10 | Loop Resolved | 10 |

## ACS-008: E-15 嘆息之橋 structural label — PROVEN_SAFE

| Field | Value |
|---|---|
| Conflict ID | ACS-008 |
| Title | E-15 "嘆息之橋——雙重代價收割" name in canon/13 and working/07 vs 帝國廣場 venue change |
| Status | **PROVEN_SAFE ✅** |
| Files Involved | canon/13_major_events_relationship_impact.md; canon/09_information_design.md |
| Classification | Metaphorical structural event label, NOT a physical location reference |
| Evidence | Line 363 explicitly explains "嘆息之橋命名意義：嘆息是有聲音的哀悼；橋是兩端之間必須走完的路段" — structural/thematic naming, not geographic |
| Resolution | No fix needed; label is intentional |
| Loop Discovered | 9 | Loop Resolved | 9 |

## LOOP 32 RESULT: Series Bible Theme Descriptions — PROVEN_SAFE

| Field | Value |
|---|---|
| Loop | 32 |
| File Audited | canon/00_series_bible.md |
| Focus | Core theme, emotion conservation, CDL-248 唯識宇宙, 修正主義 framing, time-reversal language risk |
| Status | **PROVEN_SAFE ✅** |
| Findings | (1) "態度 vs. 命運" core theme consistent with all audited theme logic. (2) "20 年的時間折返後" (logline line 43) = narrative shorthand for "after 20 years elapsed" — NOT time-reversal mechanics; Premise section (line 51) correctly describes CDL mechanism (因果債務困在集體潛意識). (3) Emotion conservation cited correctly ("本檔只使用其命題效果"). (4) CDL-248 唯識宇宙 correctly cited in ontological premise. (5) Kurokane "修正主義" vs Haruka "共情承擔式" framing consistent with audited theme logic. |
| Fixes Required | None |

---

## LOOP 31 RESULT: Timeline Canon Event Entry Audit — PROVEN_SAFE

| Field | Value |
|---|---|
| Loop | 31 |
| File Audited | canon/04_timeline_canon.md |
| Focus | CDL-217/218 dates, 鋼鐵獨舞 terminology, CDL-288 wire-fence beacon in power description |
| Status | **PROVEN_SAFE ✅** |
| Findings | (1) "鋼鐵獨舞" correct (not 鐵板獨舞) ✅. (2) Day 13 操 / Day 14 紫音 帝國廣場 consistent with CDL-218 ✅. (3) Line 53 already has CDL-288 language "鐵絲網許願的因果信標" ✅. (4) "能量逆流擊中黑奏" = energy backflow from creation event, NOT temporal causality reversal — CDL-287 consistent ✅. |
| Fixes Required | None |

---

## LOOP 30 RESULT: Relationship Logic Semantic Audit — PROVEN_SAFE

| Field | Value |
|---|---|
| Loop | 30 |
| Files Audited | canon/03_characters/haruka.md, miyako.md, aya.md, rin.md, ayakomoji_misao.md; canon/13_major_events_relationship_impact.md |
| Focus | All key character pair relationship descriptions for cross-file consistency |
| Status | **PROVEN_SAFE ✅** |
| Findings | (1) Haruka↔Kurokane: CDL-288 wire-fence beacon in aya.md power source; "病態愛/恨偏執" framing consistent ✅. (2) Haruka↔Miyako: "互不知情" + utility-distance coping consistent across both files ✅. (3) Miyako↔Rin: "喀嚓" PTSD anchor consistent; CDL-022/140 trauma consistent ✅. (4) Haruka↔Sou: dual-lens framing (savior complex / perfect mask) = complementary POV design, NOT contradiction ✅. |
| Fixes Required | None |

---

## LOOP 29 RESULT: Gameplay-Canon Interpretation Consistency — PROVEN_SAFE

| Field | Value |
|---|---|
| Loop | 29 |
| File Audited | canon/10_gameplay_bible.md (full) |
| Focus | Emotion conservation, soul-in-corpse mechanics, Mirror Law, Trinity Spectrum, theme alignment |
| Status | **PROVEN_SAFE ✅** |
| Findings | (1) Debt Echo system (CF-T15) correctly encodes emotion conservation: "消除"→集體潛意識回聲佇列, consistent with CF-WORLD-0003. (2) Soul extraction system requires suppressing corpse then extracting soul from inside — CONSISTENT with CDL-271 (soul trapped in body). No language suggests soul has left before extraction. (3) Denial-type corpse "靈魂與外殼共生" — directly consistent with CDL-271 soul-in-body. (4) Mirror Law used in level design as "理想與現實" symmetric space — valid thematic extension of CDL-282. (5) Player route matrix Act IV goal "我仍可選擇態度" = direct mechanical expression of theme "facing fate depends on attitude". (6) 執念飽和度 appears as gameplay diagnostic measure — consistent with ACS-015 PROVEN_SAFE retention. |
| Fixes Required | None |

---

## ACS-005: QQ-104 — Phase J Timeline vs I3 Timing

| Field | Value |
|---|---|
| Conflict ID | ACS-005 |
| Title | Phase J timeline "114年5月中~底" may conflict with J1 "救紫音" after I3 Day 14 紫音犧牲 |
| Status | **DEFERRED — author 唔知; [⏳TIMELINE_TBD] added to outline; Beat Sheet resolves** |
| Files Involved | canon/_working/story_construction/ACT_III_OUTLINE.md |
| Resolution | TBD marker added to Phase J timeline row; QQ-104 moved to DEFERRED |
| Loop Discovered | 1 | Loop Resolved | 5 (partial — deferred) |
