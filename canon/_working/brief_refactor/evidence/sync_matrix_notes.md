# Brief vs Canon Sync Audit — Evidence Notes (since Round 164 / commit cc67165)

Scope: read-only audit. No files modified except this note.

## Checkpoint verification

- Confirmed: Round 164 sync checkpoint = commit `cc67165` (2026-09-05), per PROJECT_STATUS.md/NEXT_ACTION.md text quoted in task brief.
- `git log --oneline cc67165..HEAD -- canon/` → **only 1 commit** since checkpoint: `e4c5743` (2026-09-10, msg "u").
- `git status --porcelain -- canon/` (uncommitted working-tree state, checked because it reflects current real file content) → 43 entries, but **all** are under `canon/_working/` (working-state/log/draft files: PROJECT_STATUS, SESSION_LEDGER, NEXT_ACTION, canon_fact_map/*, story_construction/ACT_I_*, CONTROL_OBJECTIVES_MASTER, story_runs/*, DIRECTING_LANGUAGE_V0.5_BASELINE_DRAFT, brief_refactor/*, etc.). **Zero** uncommitted changes to any `canon/0X_*.md` or `canon/03_characters/*.md` source-of-truth file.
- Net result: the **only** actual canon source-file content change since Round 164 is commit e4c5743, touching exactly two files: `canon/03_characters/iwakura_akane.md` and `canon/03_characters/miyako.md`. Everything else changed since checkpoint is `_working/` scaffolding, logs, or DRAFT-layer story-construction artifacts (Beat Sheet/Outline/Sequence Map/Control tables) — not eligible as "confirmed canon" for Brief sync per task scope (draft, pending full-story beat lock).

## CDL-408 (2026-09-10, author-confirmed, canon writeback) — the only new confirmed decision

Full entry read in `CANON_DECISION_LOG.md` (diff vs cc67165 shows this as the only added row; CDL-404/406/407 rows are pre-existing context, already present at cc67165, so already covered by Round 164 sync).

Content: 美夜子日常底色 reframe — "解離性麻木/真冷漠＝身份" → "八千代型底色（面硬話少扮唔理，但暗地關心默默照住人）＋『解離性麻木』降級為急性創傷反應期限定狀態（凜死、貓殼碎裂後）"。Three edits:
1. `miyako.md` §故作堅強 CDL-337 忠誠段: "對信任圈外嘅人...美夜子係**真係冷漠**，唔係演出嚟嘅冷淡掩護" → "...唔會主動熱情、保持明顯距離、外殼拮手——但呢個係...**防備姿態，唔等於唔關心**"；仍會暗地留意/執手尾唔認。Added 七海八千代 texture reference note + "解離性麻木唔屬於呢個日常底色" clarifying paragraph.
2. New Behavior Hook #14 "扮唔理，暗地執手尾" added to `miyako.md`.
3. `iwakura_akane.md` habit #12 (成癮崩潰雷達): "睇穿美夜子的『解離性麻木』" → "睇穿美夜子頂唔順時的解離抽離（急性創傷反應期，非其日常底色）".

Also propagated (confirmed, same CDL) into `canon/_working/character-voice-bibles/miyako.md` (2 rule sections + 1 candidate-line note) and `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` (正面特質 row). Both verified via diff — consistent with the CDL-408 entry, no drift.

QUESTION_QUEUE.md QQ-224 status line confirms scope precisely: "美夜子部分（2026-09-10，CDL-408）...resolve 咗...其餘全部仍 OPEN：D 之『美夜子加 wit/幽默』、張力#3（美夜子 pre-trauma 核心薄）、A/B/C/E/F/G、紫音全部" — i.e. everything else touched by the 2026-09-09 psychology/likability discussion (QQ-224) remains unresolved/exploratory and must NOT be read into the Brief.

## Sync matrix (per-claim)

| # | Source / CDL | Claim | Status | HTML current state | HTML location | Suggested action |
|---|---|---|---|---|---|---|
| 1 | CDL-408 | 美夜子對信任圈外人士並非「真冷漠」，而係防備姿態＋暗地默默照住人（唔主動熱情/保持距離仍然係真，但底層有關心） | CONFIRMED | **STALE — directly contradicts.** HTML still says: 「忠誠邊界：忠誠只給她信任的人；信任圈外（未信任的隊友、市民、未認定的血親）是真冷漠，不是口硬心軟。圈外讀成『貓形態唔多熱情』，其實係一直啱嘅本能戒備。」This is the exact pre-CDL-408 wording that the decision log explicitly superseded. | `00_Story_Brief.html` line 7051, inside `<div id="c-miyako">` character card body, right after the "目的" paragraph | Rewrite the 忠誠邊界 paragraph to match the softened framing: keep "唔主動熱情/保持距離/外殼拮手" but replace "是真冷漠" with "係防備姿態，唔等於唔關心；仍會暗地留意、默默照住（否認得到）". |
| 2 | CDL-408 | 「解離性麻木」係急性創傷反應期限定狀態，唔係美夜子日常底色/本性 | CONFIRMED | Not directly contradicted (HTML never uses the phrase 解離性麻木 for 美夜子 at all — 0 grep hits for that exact term anywhere in the file), but also never states the corrected framing (i.e. absent, not wrong). The nearby personality tag line at 7038-7039 ("日常外在：冷酷嚴厲・默默保護・不苟言笑・行動派・功能性思考") is actually already compatible with the new 八千代型 framing and needs no change. | N/A (absence, not staleness) — closest related text is the 忠誠邊界 line above (#1) | Optional/low priority: could add one clause noting solitude/coldness is a defensive front, not numbness, but this is covered by fixing #1. No standalone action required. |
| 3 | CDL-408 | Behavior Hook #14「扮唔理，暗地執手尾」(new hook,圈外最低限度版 of 沉默守護) | CONFIRMED | **MISSING.** No trace of this behavior (返彈匣/行位擋一擋/記得邊隻手受傷/執手尾唔認) anywhere in the 美夜子 character card or scene gallery. | N/A — would belong near line 7051 (忠誠邊界 paragraph) or as an added bullet/scene note in the `#c-miyako` card | Given Brief is reader-facing encyclopedia (not full behavior-hook ledger like character.md), this is a judgment call: could fold one concrete example into the reworded #1 paragraph rather than add a whole new entry. Flag for main agent / author decision on Brief's granularity level. |
| 4 | CDL-408 (iwakura_akane.md habit #12 edit) | 紫音成癮崩潰雷達 example referencing 美夜子's state relabeled | CONFIRMED | **NOT APPLICABLE.** HTML's 紫音 "成癮崩潰雷達" paragraph (line 7906) and the Act I gallery mention (line 9438) only reference her reading 晴香 and 操's states — it never mentioned 美夜子 in this context pre- or post-CDL-408. No stale text exists to fix. | `00_Story_Brief.html` lines 7906, 9438 (checked, no 美夜子 reference present) | None needed. |
| 5 | QQ-224 remainder (A–G except 美夜子 D-half), QQ-222 D-1~D-8, QQ-221 | Psychology-embodiment / likability / Beta-world-layers / 冷漠評判態度 director-language open items | DRAFT / UNRESOLVED / BLOCKED | Not applicable — these are not confirmed canon and must not be written into the Brief regardless of HTML's current state. Note: HTML line 4893 already has an unrelated pre-existing "冷漠評判態度" bullet (見證守則 four traps) — this is old, unrelated canon (CDL-392 lineage), NOT part of QQ-221/CDL-408, do not conflate. | — | No action — correctly out of scope. |
| 6 | Round 187–197 Act I Beat Sheet/Sequence Map/Scene Architecture/Dialogue Blueprint/Script production | All `[DRAFT]`, pending full-story beat lock | DRAFT | Not checked against HTML in detail (out of scope per task instructions — draft layer content must not be treated as Brief-eligible fact regardless of HTML state) | — | No action — correctly excluded from this audit by design. |
| 7 | Round 185 Directing Language v0.5 baseline draft | Not merged, still DRAFT | DRAFT | Not checked | — | No action. |
| 8 | Round 183 psychology embodiment/likability discussion log | Exploratory, checkpoint BLOCKED, no canon writeback except the 美夜子 half now folded into CDL-408 | DRAFT/EXPLORATORY (except CDL-408 subset already covered in row 1-3) | N/A | — | No action beyond rows 1-3. |

## Unread scope (explicitly not covered this pass)

- `00_Story_Brief.html`: not read top-to-bottom exhaustively (871KB / 12,245 lines). Coverage was targeted grep + read of the full `#c-miyako` character card (~lines 6980-7160) and its immediate relationship-section headers (lines 6664, 6697, 9174-9214, not opened in full), plus tooltip/index JS blocks (~12059-12145). Did **not** read: 六大章 other than the 美夜子/紫音-touching sections, the appendix, the full relationship-detail bodies for 美夜子↔浩然/凜/晴香 (headers only), any section outside grep hits for the search terms used (冷漠/麻木/解離/忠誠/排他/信任圈/扮唔理/拮手/八千代/崩潰雷達/miyako tooltip data).
- `canon/_working/QUESTION_MATRIX.md`, `REASONING_LOG.md`, `SESSION_LEDGER.md`, `PROJECT_STATUS.md`, `NEXT_ACTION.md`, `BEAT_SHEET_SOURCE_MANIFEST.md` diffs since cc67165: not diffed in detail (relied on QUESTION_QUEUE.md QQ-224 row + CANON_DECISION_LOG.md as the authoritative confirmed-decision sources; these files are status/log mirrors of the same facts, low risk of containing an undiscovered separate confirmed decision, but not independently verified).
- `canon/_working/2026-09-09_PSYCHOLOGY_EMBODIMENT_AND_LIKABILITY_DISCUSSION_LOG.md` full content: not read (only its resolution status via QQ-224 was checked).
- All `canon/_working/.tmp/story_runs/*` and `story_construction/*` DRAFT files: not diffed in detail (deliberately out of scope — draft layer).

## Confidence level

- **High confidence**: (a) that CDL-408 is the only confirmed canon-fact change to `canon/03_characters/*.md` (or any `canon/0X_*.md`) since Round 164 — verified via full git diff of the commit range plus working-tree status covering the entire `canon/` tree; (b) that HTML line 7051 is stale and directly contradicts CDL-408 — verified by direct text comparison against the CANON_DECISION_LOG.md entry and the actual miyako.md diff.
- **Medium confidence**: that no other HTML location mentions 美夜子 outsider-coldness or 解離性麻木 — based on full-file grep for the specific terms (解離性麻木, 冷漠, 麻木, 解離, 忠誠, 排他, 信任圈, 扮唔理, 拮手, 八千代), which should catch paraphrases using those exact words but could miss a rephrasing that avoids all of them (e.g. a scene description implying coldness without using any trigger term). Recommend a human skim of the 美夜子↔浩然 and 美夜子↔凜 relationship-detail bodies (lines ~6664-6720, ~9174-9224) which were not fully read.
- **Not independently verified**: whether QUESTION_MATRIX.md / SESSION_LEDGER.md contain any additional confirmed decision not reflected in CANON_DECISION_LOG.md — considered low risk since CANON_DECISION_LOG.md is the authoritative writeback ledger per the state-files spec, but a main-agent cross-check is advisable if time permits.
