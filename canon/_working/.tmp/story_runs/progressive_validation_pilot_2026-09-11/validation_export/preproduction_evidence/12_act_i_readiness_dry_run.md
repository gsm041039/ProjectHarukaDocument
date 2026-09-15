# 12 — Act I Readiness Dry Run (Stage 7)

Real repo data. **Act I NOT rewritten.** Simulation of: "我想由 Act I 開始，由粗到幼一步一步做，最後做到有對話 scene."

## Act I existing material (inspected this run)
| Artifact | Layer | State | Evidence |
|---|---|---|---|
| `ACT_I_OUTLINE.md` v1.21 | Outline | **APPROVED / STABLE** | v1.18 APPROVED 2026-04-09; v1.19–1.21 = CDL additions (219/220, QA-01~06, 249). 13 beats (0, 0c, 0d, 1, 2, 2.5, 2.6, 3, 4.2, 4.5, 5, [SQ-A], 6/E-XX), Layer 3 plant/payoff, Layer 3.5 環境敘事矩陣, AKS progression table, 開放項 table. |
| `ACT_I_BEAT_SHEET.md` | Beat Sheet | **WRONG_LAYER_REFERENCE** (partial) | Only E-01 + E-02. Both self-labeled `[SCENE REFERENCE — 2026-04-06]`, "非正式 Beat Sheet". Content is scene-grain: specific dialogue lines, camera notes, UI text. |
| `ACT_I_ANGLE_MAP.md` | support | present | (not opened this run — support doc) |
| E-01/E-02 SCENE_REFERENCE content | Scene (partial, unratified) | keep as reference | preserve per story-room Beat Sheet Mode hard rule |

## Highest genuinely-incomplete layer for Act I
**Beat Sheet** — true beat abstraction for all 13 beats. The outline itself says so (line 378: `下一層：Act I Beat Sheet`; line 7: `正式 Beat Sheet 工作將在 Outline 修訂完成後重新開始` — outline is now stable at v1.21).

## Act I current position (plain language)
- **已經有 (穩固)：** 整個 Act I 大綱 —— 13 個 beat 嘅功能、發生咩、主題起點、AKS 觀眾知識進程 (H0→S0→A0→H1)、跨幕埋位 (膠布哲學、熊公仔、下次呢、血糖手錶、梳頭夢境、美夜子靈魂錨點…)、環境敘事分佈。全部 `[AC]` / APPROVED。角色檔案齊、最新 (美夜子啱啱更新)。
- **未做：** 正式 Beat Sheet 層 —— 即係每個 beat 嘅「情感值點變、關係點推、觀眾知識點加、setup/payoff、broad gameplay form、退場條件、下一 beat 壓力」呢層抽象。而家只有 E-01/E-02 嘅場景級參考稿 (對白、鏡頭)，唔係 Beat Sheet。
- **下一步：** 由 Beat 0 開始，順住 `ACT_I_OUTLINE.md` v1.21 起 Act I Beat Sheet；E-01/E-02 場景稿保留做 `SCENE_REFERENCE`，唔當已批核 Beat。
- **Act IV 主阻塞點嘅影響：** 極小。Act I 唯一深挂 Act IV 嘅係 E-XX (夕整合 → Act IV 夕消散)，但 E-XX 喺 Act I 嘅形式已經 RESOLVED (form D，歉疚共情型 + 膠布哲學視覺化)。任何 Act I beat 掂到未解 Act IV 真相 → 標 `PROVISIONAL`。

## Obligation pass (Act I, layer = Outline → Beat Sheet descent) — summary
| Obligation source | Status for Act I |
|---|---|
| AKS progression (H0→S0→A0→H1) | `COVERED` (outline table) |
| 主題起點 TC-01 / 主題 A/B/C/D 首現 | `COVERED` (outline 總覽) |
| 跨幕 plant list (Plant-A, 14 rows) | `COVERED` — Beat Sheet must carry each plant's `setup` field per beat |
| Plant-B (2 rows: AKS-S1, 操父親陰影) | AKS-S1 `RESOLVED` (CDL-190, Act II末 — **outline line 367 label is STALE**, see `05` AG-4); 操父親陰影 `DEFERRED` → **this is the live Beat-Sheet-layer decision** (AG-5) |
| [NC] 具體 section 設計 (不安感 vs 日常感 分佈) | `DEFERRED` to Beat Sheet — CDL-104 gives quantity framework (C靈活框架); the **felt ratio** across the act is undecided |
| E-02 屍骸態度示範 具體場景 | `PARTIAL` — `[SS]` acceptable, detail-level (AUTO / CANDIDATE) |
| 操 父親陰影 Act I hint form | `DEFERRED` (AG-5) |
| Consequence Law (每 beat Cost Signal) | `PARTIAL` — outline v1.21 added E-XX dual external Cost Signal (CDL-249); other beats need the 4-beat check at Beat Sheet layer |

## First real Act I author question (Beat-Sheet-layer, upstream-most)
**Selected:** the felt **tone ratio** across Act I — how bright vs how uneasy, beat by beat.

Why this and not something else:
- Not already answered: CDL-104 fixes [NC] *count* per phase but not the *emotional weighting*. The outline calls Act I "偽亮色魔法少女感" with "不安感種子" but never fixes how heavily the dread reads before E-XX.
- Genuinely AUTHOR_DECISION: it sets each beat's `emotional value shift` and `atmosphere` field (the core Beat Sheet output), decides whether the audience feels "bright with hairline cracks" or "wrong from early on", and pre-loads (or protects) the Act I→II tonal drop. AI shouldn't unilaterally set the dramatic architecture's mood curve.
- AI can't decide it: it's a taste/intent call about how much the first act should lie to the audience vs. warn them — a directing signature choice.
- Upstream of everything: every subsequent beat/scene/dialogue decision inherits it.
- 操 father-shadow seed (AG-5) is the runner-up but is narrower and arguably better decided once Act IV's payoff exists (know the payoff before the seed) — so it can wait / be `PROVISIONAL`.

Recommendation to offer: **"bright surface, thin cracks that only pay off on a second playthrough"** — keep Beats 0–2.5 reading as genuine magical-girl warmth, let the first *consciously* uneasy beat be E-03 (可樂失味 / 後遺症), ramp through E-1.5 and E-04, land E-XX as the tonal turn. Reason: matches "偽英雄旅程假象最強收結" (outline Beat 6) and the二周目 payoff design already baked into the plants; a darker-earlier read would spend the Act III偽高潮崩塌 reversal too early.

## Micro-field to add on the first real Beat Sheet round
Write to `NEXT_ACTION.md`: `Layer: Act I Beat Sheet` + `Run workspace: <path>` (resume cleanliness — Test G).

## Stage 7 status: **PASS** — highest incomplete layer correctly detected (Beat Sheet); Act I not restarted; first question is upstream, plain-language, no codes, comes with a recommendation and consequences.
