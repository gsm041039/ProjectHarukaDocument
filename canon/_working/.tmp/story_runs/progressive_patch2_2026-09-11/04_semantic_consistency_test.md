# 04 — Semantic Consistency Gate: Tests 1–3

## Test 1 — Beat 0d / E-01 Ordering (primary regression, real repo evidence)

**Inspected:** `ACT_I_OUTLINE.md` (header line 4-5, Beat 0d block lines 69-78, Beat 1 block lines 81-100 incl. 天台使命說明), `CANON_DECISION_LOG.md` CDL-123, `REASONING_LOG.md` lines 737/885/1027/1096/1110.

| Field | Finding |
|---|---|
| Parent stated order | `ACT_I_OUTLINE.md` line 4-5, "正確敘事順序": `Beat 0 → Beat 0c → Beat 0d（E-01當晚）→ Beat 1（E-01）→ Beat 2...` — explicitly labeled the **correct** narrative order. Physical document section order matches this (0d's section precedes Beat 1's section). |
| Semantic event relationship | Beat 0d's own content: "E-01當晚（晴香回家後那一夜）", "呈現E-01極大心理衝擊後的情緒消化空間". Beat 1's content: "E-01：組隊" — the corpse-intrusion/transformation event itself. Beat 0d is explicitly the *aftermath* of the event Beat 1 *is*. |
| Evidence | `CANON_DECISION_LOG.md` CDL-123 (2026-04-06, author-confirmed Q8:A): Beat 0d was added specifically to bridge "E-01" and "次日天台" (the rooftop scene the next day) — "符合CDL-103（天台次日=『有一晚消化後主動赴約』，此beat提供『那一晚消化』的質感)". The 天台使命說明 scene is itself positioned at the *tail* of Beat 1's own outline block (line 99, "次日放學後"). `REASONING_LOG.md` line 737 confirms the same framing ("E-01係極大心理衝擊，現有序列直跳次日天台；當晚情緒消化缺口...") — i.e., 0d was invented to sit **between** the E-01 event and the next-day rooftop scene, both of which live inside/after Beat 1's own content. |
| Classification | **`LOCAL_ORDERING_ERROR`** — the header line's stated document/reading order does not match the fictional chronology that the beats' own content and CDL-123's stated design intent require. This is not a creative ambiguity; the evidence is internally conclusive (CDL-123 defines 0d's function in terms that require it to occur after Beat 1's event). |
| Safe derivation order | `Beat 0 → Beat 0c → Beat 1 (E-01 event + [SQ-A] immediate epilogue) → Beat 0d (that night) → 天台使命說明 (next day, already textually placed at Beat 1's tail) → Beat 2 (E-02) → ...` |
| Does approved parent require later correction? | **Yes, eventually** — the header line 5 "正確敘事順序" statement and the document's physical section order for 0d vs 1 should be corrected via the normal outline gate (housekeeping-level fix, evidence is conclusive, not a creative decision). **Not done in this task** — Patch 2 is workflow-hardening only, per hard constraint (§26): "Do NOT patch the official Beat order." |
| Does author input remain necessary? | **No, for determining the correct order** — the evidence is conclusive and internally self-consistent (CDL-123 + the rooftop scene's own placement leave no real ambiguity). Author input would only be needed for the *procedural* act of approving the eventual outline-file correction, not for resolving which order is actually correct. |

### Downstream safety record (RESOLVED_FOR_DERIVATION)
```
Parent conflict: ACT_I_OUTLINE.md header line 5 states 0d before Beat 1; 0d's own content
                 and CDL-123 require 0d after Beat 1's event.
Evidence: CDL-123 (2026-04-06, author-confirmed); REASONING_LOG.md lines 737/885/1027/1096.
Derived working order: 0 → 0c → 1 (incl. [SQ-A]) → 0d → 天台使命說明 → 2 → ...
Parent file patch required: yes (housekeeping-level; queued, not applied this task)
```
This record is what a real Beat Sheet round would carry forward — it does NOT silently reorder `ACT_I_OUTLINE.md` itself, and does NOT force a future Beat Sheet to reproduce the header's stated (incorrect) order.

**PASS** — the gate detects the conflict rather than blindly reproducing the approved parent's stated order (contrast with the prior multi-beat pilot, which followed the stated order — `Beat 0 → 0c → 0d → 1` — because it deferred to "approved = correct").

---

## Test 2 — Character Knowledge (real existing example, no Canon change)

**Example used:** Kiryuken's knowledge state around Haruka's transformation. Per `ACT_I_OUTLINE.md` Beat 1 `[SQ-A]` immediate epilogue: Kiryuken witnesses the transformation *because* of a stated causal chain — first-transformation system delay (0.5s lag) + his proximity as the closest bystander (CDL-185). His subsequent knowledge ("桐生健目睹變身") is entirely downstream of that witnessed event.

**Hypothetical reversed order tested:** if a draft Beat Sheet described Kiryuken reacting to Haruka's magical identity (e.g., showing recognition, asking about it, or referencing "妳個裝置") in a beat placed *before* Beat 1's transformation event —

**Gate response:** Knowledge-state check would flag `SEMANTIC_CONTRADICTION` — "character reacts to information they have not received" (per gate criterion §3 Knowledge State). This matches the design of `KNOWLEDGE_DEPENDENCY_MAP.md`'s CHARACTER BELIEVES / OBJECTIVE TRUTH separation and the AKS ladder logic already used for audience-knowledge tracking.

**Verified:** the gate's Knowledge State criterion would catch this class of error. No actual reversed content was written to any candidate file — this is a dry test of the rule against a real character/event pair.

---

## Test 3 — Setup/Payoff (real existing chain, temporarily reversed in test representation only)

**Real chain used:** SETUP = Beat 0's ghost-weight symptoms (mirror lag, shoulder weight) → PAYOFF = Beat 6/E-XX's integration climax (夕 fully manifests, CDL-069/070/077). Recorded in `ACT_I_OUTLINE.md` Plant-A row 1.

**Test representation (not written to any real file):**
```
[TEST ONLY] Beat 6 (E-XX integration) placed conceptually before Beat 0 (ghost-weight introduced)
```

**Gate response:** `PARENT_CONSISTENCY_FAIL`-equivalent — Setup/Payoff criterion (§3): "setup before payoff... unless current narrative explicitly uses inversion." No inversion is stated anywhere for this plant (Plant-A row 1 is a plain forward setup/payoff, not a flashback-structured reveal). The reversed representation would be rejected.

**Verified, no file mutation performed.**
