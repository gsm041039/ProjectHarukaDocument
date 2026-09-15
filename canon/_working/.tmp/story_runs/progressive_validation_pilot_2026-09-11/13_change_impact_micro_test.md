# 13 — Change-Impact Micro Test

**TEST ONLY — not written back.** Simulated change: "假設 Act I 嘅 tonal rule 被改成更早出現明顯不安（e.g. from Beat 0 itself, not E-03）。"

## Impact on the pilot's own fields

| Field / artifact | Classification | Why |
|---|---|---|
| `06_question_necessity_audit.md` conclusion ("do not ask author") | `INVALIDATED` | The whole finding rests on the *current* approved bright→crack curve; a rule change moving the first crack to Beat 0 directly contradicts the outline's own atmosphere fields and would itself become a real `AUTHOR_DECISION` (a rewrite of Act I's tonal identity), not something AI can resolve. |
| `09_pilot_beat_sheet_candidate.md` — Emotional value shift row | `PATCH_REQUIRED` | "Bright surface / deniable crack" framing would need to become "visible unease from the outset." |
| `09` — all other fields (participant intention, action/reaction, setup/payoff, knowledge delta, gameplay form) | `NO_CHANGE` | These describe *what happens* (mirror lag, shoulder weight, Akiho's voice), which is fixed by CDL-126/128 regardless of how "visible" the unease is read to be — only the *tone framing* changes, not the plot content. |
| `10_pilot_traceability.md` upward-trace rows for CDL-126/128 content | `NO_CHANGE` | Same reasoning — those facts are unaffected. |
| `10` reverse-trace #2 (AKS-H0 obligation) | `REVALIDATE` | Making Beat 0 visibly uneasy risks weakening "完全盲目" if unease reads as *meaningful* rather than deniable — needs a check against AKS-H0's definition, not an automatic invalidation. |
| Beats 1/2 (E-01/E-02, "偽亮色感最強點/高峰") in the real `ACT_I_OUTLINE.md` | `AUTHOR_REVIEW_REQUIRED` | These are the outline's own approved atmosphere calls; changing the curve shape touches APPROVED content and needs the author, not just this pilot. |
| Beats 3/5/6 (E-03/E-04/E-XX) atmosphere fields | `AUTHOR_REVIEW_REQUIRED` | Same — the whole curve is one coherent, approved design; a change to "when" ripples to relative pacing of all of them. |
| CDL-104 [NC] density table, Layer 3.5 Text Prop density table | `AUTHOR_REVIEW_REQUIRED` | Both encode the same curve independently; both would need re-approval together, not patched separately (avoids re-introducing the contradiction the original design avoided). |
| Beats 0c, 0d, 1, 2.5, 2.6, 3(non-atmosphere fields), 4.2, 4.5, [SQ-A] | `NO_CHANGE` | Plot mechanics unaffected; only mood framing on the specific already-listed beats changes. |
| Fact Map / control files (`CONTROL_OBJECTIVES_MASTER` etc.) | `NO_CHANGE` | Already flagged stale/out-of-scope for Beat 0 content; this hypothetical doesn't touch them further. |

## Scope discipline check
**Did this correctly avoid marking the entire project stale?** Yes — only the specific atmosphere-curve fields across a named, small set of beats (1, 2, 3, 5, 6) plus the two directing-grammar density tables are flagged; character facts, world rules, relationship states, and 10 of the act's other beats are explicitly `NO_CHANGE`. The change-impact skills (`story-character-change-impact-manager` + `story-downstream-consistency-auditor`) would only need to touch ~7 artifacts, not re-run the whole Act I pass.
