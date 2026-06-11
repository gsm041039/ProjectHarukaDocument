# Timeline Dashboard Audit
**Generated:** 2026-06-11  
**Source:** story_data.js + directions_data.js (dashboard data layer)

---

## Q1. How many events are in the timeline database?

**38 events**, spanning ord 1000–5500.

| Act | Count |
|---|---|
| 前史 (Prehistory) | 4 |
| Act I 起 | 10 |
| Act II 承 | 10 |
| Act III 轉 | 9 |
| Act IV 合 | 5 |

---

## Q2. Events with `claim: "[NEEDS_AUTHOR_INPUT]"` or `status: "blocked"`

| Event ID | Title | Status | Claim |
|---|---|---|---|
| E-04 | 悲鳴女妖首戰 | working | [NEEDS_AUTHOR_INPUT] |
| E-A2-BD09 | AKS-S2/S3螢揭示前置[NC]場景（BD-09a缺口） | **blocked** | [NEEDS_AUTHOR_INPUT] |
| E-A3-EXIT | 秋穗退場事件（BD-13缺口） | **blocked** | [NEEDS_AUTHOR_INPUT] |

**2 hard-blocked events** require author decisions before they can be designed. E-04 is working but content detail is incomplete.

---

## Q3. Directions with `missing[]` entries (design gaps)

| Direction | Missing Bridge |
|---|---|
| DIR-002 | BD-09a：AKS-S2/S3具體[NC]場景設計（Critical缺口） |
| DIR-003 | Act IV吉他payoff具體位置TBD |
| DIR-004 | BD-09a：AKS-S2/S3場景設計（影響L3成立） |
| DIR-005 | Act IV夕消散具體場景位置TBD（Beat Sheet層） |
| DIR-008 | 凜Act II存在感scene量設計 |
| DIR-009 | BD-13：退場事件設計（High blocked，影響Act III→IV過渡） |
| DIR-010 | QQ-06：三位一體具體視覺化設計 DEFERRED |
| DIR-012 | Act I-II紙皮騎士presence設計（如何存在但不引起注意） |
| DIR-013 | BD-08：Alpha線回溯場景視覺區分形式 DEFERRED |
| DIR-014 | BD-10：三個核心術語的觀眾揭示時序設計 |

10 out of 15 directions have at least one gap. The two **Critical** gaps:
- **BD-09a** (DIR-002 + DIR-004): AKS-S2/S3 螢揭示線[NC]場景設計完全缺失 → 直接威脅全作最重要情感揭示 R-5
- **BD-13** (DIR-009): 秋穗退場機制空白 → 阻塞Act III Outline

---

## Q4. Directions referencing HC-01 or DG-01

From contradiction register:

| Contradiction | References Directions |
|---|---|
| HC-01 (Critical) — Beta花子死因/黑奏預謀揭示層級 | DIR-001, DIR-007, DIR-013 |
| DG-01 (Critical) — AKS-S2/S3螢揭示線場景載體缺失 | DIR-002, DIR-004 |

**5 directions** are directly implicated in the two highest-severity open contradictions.

---

## Q5. Events not linked to any direction (no `df[]` entries)

**None.** All 38 events have at least one direction function entry.

---

## Q6. Characters appearing in the fewest events

| Character | Events Count |
|---|---|
| CHAR-006 操 (Misao) | 2 |
| CHAR-009 愛莉 (Aeri) | 2 |
| CHAR-010 秋穗 (Akiho Senior) | 2 |
| CHAR-007 凜 (Rin) | 3 |

Notes:
- 操 (CHAR-006) is a major team member whose two events are both Act III — very late, very concentrated
- 愛莉 (CHAR-009) is intentional: she exists as紙皮騎士 for most of the story, only fully manifests at Act III/IV boundary
- 凜 (CHAR-007) is a [SQ] support character — low count is by design

---

## Q7. Most referenced event across all direction functions

| Event ID | Title | Direction Count |
|---|---|---|
| **E-ACT3-PLAZA** | 帝國廣場決戰 | **5** |
| E-PRE-01 | Alpha線黑奏預謀 (113年) | 4 |
| E-A4-HARUKA | Act IV晴香靜止搖籃 | 4 |
| E-PRE-03 | Beta線花子死亡 (E-1.0) | 3 |
| E-PRE-02 | 晴香5歲許願·創世 | 3 |

**E-ACT3-PLAZA (帝國廣場決戰)** is the most structurally loaded event — it is simultaneously:
- AKS-H2/H3 climax (DIR-001)
- 守恆定律L4 reveal (DIR-011)
- 膠布哲學L3 reveal (DIR-015)
- DIR-007 農場計劃暴露節點
- DIR-013 Alpha/Beta雙線最高張力

This confirms it is the intended structural and thematic apex of Act III.

---

## Q8. Pool 2 angles (13–19) with most RELEVANT verdicts across all 15 directions

| Angle | Name | RELEVANT Count (out of 15) |
|---|---|---|
| **A16** | Moral Tradeoff | **13** |
| **A18** | Narrative Validation Level | **13** |
| **A13** | Coping / Defense Mechanism | **12** |
| **A19** | Method Necessity / Form Meaning | **12** |
| A14 | Ideology / Value System | 10 |
| A17 | Symbolic / Ritual Behavior | 9 |
| A15 | Social / Institutional Position | 6 |

Top findings:
- **A16 (Moral Tradeoff)** and **A18 (Narrative Validation)** are near-universally relevant — every direction involves a genuine moral cost AND requires the story to take a stance on the character's ideology
- **A19 (Method Necessity)** is relevant in 12/15 directions — design choices in this story consistently have form-specific meaning that cannot be substituted
- **A15 (Social/Institutional)** is least universally relevant — only 6/15 directions explicitly require institutional context (concentrated in directions involving the Empire's emotion-management system)

---

## Q9. All `[CONFLICTING]` claims in the event database

**No events** currently carry `claim: "[CONFLICTING]"` in the event database.

Conflicting issues are tracked at the contradiction level (HC-01, DG-03, IC-02, IC-03) rather than being flagged on individual events. Events whose canon status is in conflict are currently marked `[NEEDS_AUTHOR_INPUT]` or `status: "blocked"`.

See: HC-01, IC-02, IC-03 in contradictions view (`#contradictions`).

---

## Q10. Open blocked decisions (BDs) and what they block

| BD / QQ | Direction(s) | What it blocks |
|---|---|---|
| **BD-09a** (Critical) | DIR-002, DIR-004 | AKS-S2/S3 螢揭示線[NC]場景設計 → 全作最重要情感揭示 R-5 重量崩潰 |
| **BD-13** (High) | DIR-009 | 秋穗退場事件設計 → Act III Outline 無法啟動 |
| **QQ-07 / BD-10** (Medium) | DIR-001, DIR-014 | 三個核心術語觀眾揭示時序 → Act III AKS-H2 前術語前置不足 |
| **BD-08** (Medium) | DIR-013 | Alpha線回溯場景視覺區分形式 → Act III/IV 視覺設計 |
| **BD-11** (Medium) | DIR-012 | 愛莉象徵物件設計 → Beat Sheet層前需確認 |
| **QQ-06** (Medium) | DIR-006, DIR-010 | 操三位一體視覺化 → Act IV操線收束是否完整 |
| **R-7 timing** | DIR-007 | 黑奏預謀揭示時機 → Act III/IV 農場計劃情感節奏 |

**Priority order for author decisions:**
1. BD-09a — Critical，阻塞全作最高情感重量揭示
2. BD-13 — High，直接阻塞 Act III Outline
3. R-7 timing — High，Act III 後段節奏依賴此決定
4. BD-10 — Medium，Act Outline 前需確認

---

*Audit reflects data layer as of 2026-06-11. Re-run after any canon updates to story_data.js / directions_data.js.*
