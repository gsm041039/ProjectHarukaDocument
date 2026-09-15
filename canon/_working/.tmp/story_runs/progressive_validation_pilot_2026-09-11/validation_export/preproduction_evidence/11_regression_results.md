# 11 — Regression Results (Stage 6)

Walkthrough tests against the patched skills + policy. Each traces the actual instruction path an agent would follow.

| Test | Scenario | Expected | Path through patched system | Result |
|---|---|---|---|---|
| **A — Stale source** | Old working file states old truth; newer approved truth (CDL) exists. | New truth used; stale source classified; no needless author question. | `story-canon-sync-gate` (PRIMARY per C4) → freshness+authority ledger → CDL-408 wins over 2026-03 control file → AUTO_FIX_SAFE (banner/label). Control files now carry STALE banners pointing to CDL-408. | **PASS** |
| **B — Genuine active conflict** | Two active high-authority sources genuinely disagree. | `AUTHOR_DECISION`; no silent resolution; other work continues. | Decision classes (orchestrator): irreconcilable active high-authority truths → AUTHOR_DECISION. `05` AG-1/2/3 recorded, run continued. §8.3 continue-despite-gate honoured. | **PASS** |
| **C — POV difference** | Character believes X; objective truth Y. | Not treated as contradiction. | `KNOWLEDGE_DEPENDENCY_MAP` distinguishes CHARACTER BELIEVES / OBJECTIVE TRUTH (banner reaffirms). `story-knowledge-state-mapper` owns. Sync-gate hard rule "character belief vs objective truth" pre-check. | **PASS** |
| **D — Missing causal bridge** | Existing Act needs a bridge. | Claude proposes a professional repair before asking author. | Progressive Mode obligation-pass MISSING ladder: reuse→extend→merge→micro-scene→aftermath→carrier→new event, "come with a designed recommendation; do not ask 你想加咩場". Decision class = AI_PROPOSED_CANDIDATE. Consequence Law: bridge w/o Cost Signal → `[RISK: INTENTION-DRIVEN]` + author note. | **PASS** |
| **E — Info carrier missing** | Audience must know something before a later payoff. | Detect missing carrier; try reuse/extension before new major event. | Same MISSING ladder. `story-scene-expression-planner` assigns carrier. `CROSS_ACT_FORESHADOW_MANIFEST` PAYOFF_DUE check in story-room Beat Sheet Mode entry step 4. | **PASS** |
| **F — Wrong-layer detail** | Beat file contains dialogue/camera detail. | Preserve as Scene Reference; don't treat as approved Beat abstraction. | story-room Beat Sheet Mode hard rule: "既有 Scene 級細節（例 ACT_I_BEAT_SHEET E-01/E-02）→ 保留、標 SCENE_REFERENCE / DOWNSTREAM_REFERENCE，唔刪、唔當已批核 Beat 抽象". Current-level detection has `WRONG_LAYER_REFERENCE` class. | **PASS** |
| **G — Resume** | Fresh session, "繼續上次 Act I". | Recover state, don't re-ask known info. | `10` Stage 5 sim: PASS by design; fully clean once first progressive round writes `Layer:` + `Run workspace:` to `NEXT_ACTION.md`. Fallback (outline line 378 + beat-sheet self-label) already works. | **PASS (with 1 micro-field to add on first use)** |
| **H — Upstream change** | Major upstream decision changes. | Only affected downstream becomes stale. | `10` change-impact sim: E-XX change → only E-XX + its 3 explicit plants regenerate; other 11 Act I beats NO_CHANGE. `story-character-change-impact-manager` + `story-downstream-consistency-auditor` own targeted pass. | **PASS** |
| **I — No architecture explosion** | Check for bloat. | No new top-level folder / duplicate Fact Map / duplicate control registry / skill swarm. | `09` ledger: 0 new skills, 0 new files, 0 new folders. Beat Sheet = new *mode* in manifest-designated owner. Control work = in-place annotation. | **PASS** |
| **J — Human question** | Question readable without IDs / repo expertise. | Plain language, no internal codes. | `CLAUDE.md` User interaction style + orchestrator Plain-language Rule + first-real-question rule ("拒絕 filler / 叫作者自己搵 repo"). Final Act I question below (`12`) uses no QQ/CDL codes. | **PASS** |

## Self-repair performed this run
- Test G revealed the resume path is only fully clean once a progressive round records its layer. Fix = a documented micro-field addition to `NEXT_ACTION.md` (not a new file), to be written by the first Act I Beat Sheet round. Recorded in `10` + `12`. No skill redesign.

**All 10 tests: PASS** (G with a noted 1-line field to add on first progressive round).
