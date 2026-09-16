# Preservation Ledger — Part 1: World Rules / Appendix / Gameplay / JS

Scope owned by this agent (full re-read, no sampling):
- Lines 1–4432: `<head>` / CSS (checked for embedded reader-facing prose in comments)
- Lines 4433–6797: 01 入門理解 + 02 世界與系統 (這是什麼故事/為何創作/導演設計原則/主題/世界觀速覽/七個核心法則/隱藏機制/魔法少女設定/她們如何存在)
- Lines 11041–11355: 遊戲系統設計
- Lines 11362–11832: 附錄 A（情緒世界系統）+ 附錄 B（真實名字對照表）
- Lines 11835–12246: all `<script>` blocks (end of file)

Excluded (owned by other agents): character cards, 人物關係, 六階段故事, 時間線, 結局.

Format note: every entry below was written from actual line-by-line reading, not extrapolation from structural similarity. Where two locations restate the same fact, the entry says so explicitly and is classified accordingly rather than silently treated as new.

---

## A. Head/CSS scan result (lines 1–4432)

No reader-facing narrative content is hidden inside CSS comments. Two comments contain author/version metadata, not reader content:
- Line 3494: `/* v17 — pending-author-approval marker for Act III-sourced timeline content (ACT_III_OUTLINE.md v0.4 未最終批核) */`
- Line 3886: `/* v18 — 114 年分支提升為全寬重大分歧卡，避免類 Alpha / 新 Beta 被壓成普通細卡 */`

These are dev/version-history notes (why a CSS rule exists), not story content, so no ledger IDs are assigned to them. No further action needed for this range beyond the coverage confirmation below.

---

## B. Preservation Ledger Entries

### 01 入門理解 / 主題 (id prefix P1-LAW, P1-CHAR, P1-WORLD used loosely by topic)

**P1-LAW-01**
- source_location: 4550–4652 (`#what`)
- short_factual_payload: Genre/tone definition, the core driving question ("a 5-year-old used a miracle to build the whole world, but the miracle can't undo what she truly lost — who pays that debt, in the end?"), title's double meaning (奇蹟魔法少女晴香), player-facing 5-track table (主線戰鬥/日常互動/社會風評系統/Side Quest/態度選擇), Logline, and an explicit "this story IS / IS NOT" list.
- semantic_role: definition (whole-document framing)
- primary_home: `#what`
- duplicate_locations: none exact; player-track table content partially expands in P1-GAME-05 (社會風評三階段弧)
- classification: unique
- refactor_risk: high — compressing `#what` risks losing the title double-meaning explanation and the IS/IS NOT list, both of which anchor how the whole document should be read.
- proposed_treatment: KEEP_AS_IS
- destination: —

**P1-LAW-02**
- source_location: 4654–4707 (`#why`)
- short_factual_payload: Precise definition of "Dark Healing" (療癒不是逃離痛苦，而是穿越後提取態度); explicit forbidden list (虛假希望/否定痛苦/強迫正能量/廉價救贖/美化苦難/把態度綁死在死亡上); psychological-embodiment table (變身=Persona, 鏡子=Shadow, 情緒怪物=repressed emotion generalized, 痛苦流轉=情緒守恆).
- semantic_role: definition + hard rule
- primary_home: `#why`
- duplicate_locations: psychological-embodiment table is consolidated/echoed at P1-DEPICT-05 (`#psych-map`) and P1-MAHOU-09 (Jungian stage table)
- classification: unique (the forbidden list); intentional_reminder (psych table, vs `#psych-map`)
- refactor_risk: high — the forbidden list is a hard creative constraint with no other copy in the document.
- proposed_treatment: KEEP_AS_IS
- destination: —

**P1-LAW-03**
- source_location: 4709–4757 (`#directing`, 甜是武器)
- short_factual_payload: Five-step audience emotional curve (先被吸引→再感到不安→甜下見黑→理解角色痛苦→苦中有暖); explicit statement that "甜下見黑" is a *recurring micro-rhythm*, not just the macro arc.
- semantic_role: definition
- primary_home: `#directing`
- duplicate_locations: none
- classification: unique
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS (already a diagram; safe to VISUALIZE further but do not drop the "recurring micro-rhythm, not just macro" clarification)
- destination: —

**P1-LAW-04**
- source_location: 4759–4804 (身體代價 × 債務)
- short_factual_payload: Core directing formula. Physical-cost symptom list (牙齦出血/手震/掉牙/嘔吐/失焦/耳鳴); Victoria's Tears-as-debt economy table (individual vs society: borrowing/principal/enforcement); identity-document mechanism (citizens must periodically re-sign ID papers using their *own* harvested pain as ink — cannot be substituted by someone else's pain; rich districts get subsidized near-painless renewal, poor districts pay full+painful — same bureaucratic prop is both worldbuilding and social-injustice evidence); id="law-day-happiness" note (day-district citizens genuinely, sincerely believe they are happy — not performance — while their faces show numbed cost they can't recognize as cost); debt psychological chain (傷口→需要→救援/交換→債務→索取權→自我剝奪); 逃避型 vs 成癮型 borrowing patterns.
- semantic_role: definition + world rule + exception
- primary_home: `#directing`
- duplicate_locations: day-happiness idea repeated in district-card prose (P1-WORLD-04)
- classification: unique
- refactor_risk: high — the identity-document mechanism and the `id="law-day-happiness"` anchor are single-source facts.
- proposed_treatment: KEEP_AS_IS
- destination: —

**P1-LAW-05**
- source_location: 4805–4863 (舞台 × 傷口 Stage×Wound)
- short_factual_payload: Explicit directing-language layer unifying existing mechanisms (戰鬥直播/光幕濾鏡/維多利亞之淚/膠布哲學) into one lens: 私人傷口被看見→解讀→加工→交換重播→新期待→代價回歸. 3-step diagram (成形/裂口/結算取回). Core question (誰整理形式/誰有權觀看解讀使用保留重新命名/代價落誰身上/能否取回停止權). 5-position viewing table (消費式/審判式/理解式/陪伴式/見證式), noting a character can occupy multiple positions simultaneously (including being one's own audience). Stage's two eras (destruction before/after — differs in HOW watching continues). Three-layer visual composite (完整美學/傷口/怪物) with a **hard rule**: scenes about a character's body becoming an object of others' gaze must show "the character discovering their body is no longer defined by themselves" via loss-of-control physical signs (breath, shaking, fatigue, wanting-to-hide-but-seen) — **never** substituted with sexualized display.
- semantic_role: definition + hard rule (content-safety/creative constraint)
- primary_home: `#directing`
- duplicate_locations: none
- classification: unique
- refactor_risk: high — the body-gaze boundary rule is a critical constraint governing all future scene-writing.
- proposed_treatment: KEEP_AS_IS
- destination: —

**P1-LAW-06**
- source_location: 4864–4881 (溫柔的殘酷)
- short_factual_payload: Core visual creed — beauty amplifies pain, doesn't conceal it (example: losing a tooth mid-bite at a dessert shop while laughing). Design rule: no cheap gore/jump-scares; all cruelty must be wrapped in tragic beauty.
- semantic_role: definition
- primary_home: `#directing`
- classification: unique
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS

**P1-LAW-07**
- source_location: 4882–4903 (見證守則 Witness Principle)
- short_factual_payload: Witnessing = non-judgmental companionship; how a character copes (avoid/collapse/self-harm/silence) is *seen but never scored*. Four named traps that corrupt companionship (背書痛苦/美化痛苦/否定痛苦/冷漠評判態度). Witness can be another character OR the narrative/camera itself. "自己接住自己" = self-witnessing, reconciliation ≠ defeating the shadow. Explicit requirement: the story must contain pure breathing-room scenes serving no plot function, or tenderness collapses into "setup for the next tragedy."
- semantic_role: definition + hard rule
- primary_home: `#directing`
- classification: unique
- refactor_risk: high — the 4 traps and the pure-breathing-room requirement are exactly what a compression pass drops first.
- proposed_treatment: KEEP_AS_IS

**P1-LAW-08**
- source_location: 4904–4916 (破碎的美學)
- short_factual_payload: Highest aesthetic ideal = imperfection/scars, not perfection. Philosophical reference: 哥窯開片 × 金繼 (kintsugi). 裂痕蔓延=collapse process; 裂痕透光=beginning of acceptance; 金繼=continuing to exist while scarred, not restoration to original.
- semantic_role: definition
- primary_home: `#directing`
- classification: unique
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS

**P1-LAW-09**
- source_location: 4917–4961 (膠布哲學)
- short_factual_payload: Core metaphor — bandages conceal, don't heal. Whole Beta world = giant bandage over the Alpha wound. Three layers: (1) individual habits (Haruka's bandages, Miyako's ribbon, Akane's adrenaline, Sou's makeup); (2) magic-system critique (device delays, doesn't heal; leak = crystallization/緋潮); (3) world-truth (Beta = bandage over Alpha's corpse; 20 years later it's infected = 緋潮 eruption). Haruka's arc stated explicitly: over-bandaging → leaking → tearing it open → using her own existence to hold the wound (4th layer) — **with an explicit instruction that fusion being "a complete free integration victory" is deliberately left ambiguous and must NOT be read as "no longer needing a bandage = clean closure."** Body-level parallel: magically healing surface wounds doesn't erase cost — it flows into the same irreversible Body-Horror collapse line as fighting does.
- semantic_role: definition + hard rule (explicit ambiguity-preservation instruction)
- primary_home: `#directing`
- duplicate_locations: healing-cost concept echoed briefly in P1-MAHOU-01 (治癒傷口)
- classification: unique
- refactor_risk: high — the "do not read as clean closure" instruction is precisely the kind of authorial guardrail silently lost in a refactor that resolves ambiguity for tidiness.
- proposed_treatment: FLAG_FOR_AUTHOR (preserve verbatim; do not resolve the ambiguity when rewriting)
- destination: —

**P1-LAW-10**
- source_location: 4964–5034 (`#theme`)
- short_factual_payload: Theme sentence. Precise definition of "態度" (not an optimism slogan — the choice between avoid/control/deflect vs acknowledge/bear/continue-living; doesn't guarantee a good outcome; is the only subjectivity remaining in pain). 假甜 vs 真暖 comparison. Four sub-themes table (A力量的代價/B完美的幻象/C身份的本質/D連結的價值 with core proposition + representative characters).
- semantic_role: definition
- primary_home: `#theme`
- classification: unique
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS

### 02 世界與系統

**P1-WORLD-01**
- source_location: 5041–5111 (`#world-miracle`)
- short_factual_payload: "奇蹟" is literal reality-overwrite, not metaphor. Four-tier magic-ability system (情緒承接[must route through Fei; explained immunity mechanism: Fei is frozen pre-socialization "童頻" shared with 1% residual consciousness in corpses — not any shadow works]/情緒投射/現實縫合/現實覆寫=奇蹟). Table of the two miracles that ever happened (Haruka age 5; Fei's Phase-J takeover — rewrite succeeds but doesn't fill the void, causes timeline cracks + 緋潮; objectively only days pass but Haruka's consciousness is subjectively trapped 20 years). Three hard limits (cannot truly revive the dead; causal debt must be repaid; cannot overwrite original emotional memory) with a nuclear-plant metaphor. Two namings of the same event (folk "奇蹟" vs bureau "奇蹟反應").
- semantic_role: definition + technical detail + hard rule
- primary_home: `#world-miracle`
- duplicate_locations: two-naming fact repeated at P1-WORLD-08, P1-LAW-11 (law-miracle card)
- classification: unique (system table); intentional_reminder (two-naming, appears 3×)
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-02**
- source_location: 5114–5136 (前置 intro)
- short_factual_payload: Reader-onboarding narrative version of the origin: Haruka's age-5 wish "let this not be true"; Alpha線(命運層)=what truly happened; Beta線(態度層/故事舞台)=the created world where the story takes place.
- semantic_role: definition
- primary_home: `#world`
- duplicate_locations: P1-WORLD-01 (technical version), P1-WORLD-12 (full authoritative version)
- classification: near_duplicate / intentional_reminder (different rhetorical register: reader-onboarding vs technical vs authoritative)
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS (serves a distinct onboarding function)

**P1-WORLD-03**
- source_location: 5138–5157 (市民眼中的世界), incl. id="world-spirit-tree-misread"
- short_factual_payload: Magical corpses are public knowledge, treated like flood/crime. **Hidden-truth author note**: "靈樹能量殘留" (the in-world explanation for night-district innate magic) is actually a fabricated retroactive history created by Haruka's 帝歷102年 reality-rewrite backfilling through the spirit tree — nobody in-story, including imperial historians, knows this; the war's real motive (seize spirit-tree resources) is unchanged, only the deeper causal layer was secretly rewritten. Clarifies "維多利亞天使" is NOT an official idol system, just a beautifying filter + citizen misreading; official imperial stance toward magical girls is always hunt/weaponize. Haruka is the sole deliberately-managed personal-brand exception; others are not idols, just auto-surveillance footage.
- semantic_role: technical detail (buried retcon) + exception + anti-misreading warning
- primary_home: `#world`
- duplicate_locations: gothic-erosion district card (P1-WORLD-04), bureau card (P1-WORLD-08), idol-origin card (P1-WORLD-07)
- classification: unique
- refactor_risk: high — this is exactly the kind of buried single-instance retcon that a merge pass could flatten into ordinary flavor text, losing a load-bearing plot secret.
- proposed_treatment: FLAG_FOR_AUTHOR / KEEP_AS_IS verbatim

**P1-WORLD-04**
- source_location: 5159–5213 (地理設定：維多利亞城 — district cards)
- short_factual_payload: Day district: artificial sun, ideology="修正"(correction/denial of imperfection); restates day-happiness subjective-belief-vs-symptom split (near_duplicate of P1-LAW-04). Night district: **gothic erosion is a literal contagion diagnostic** — the density of gothic elements (尖拱窗/蕾絲/齒輪) directly indicates how deep Beta-line truth has penetrated that area; more gothic infection = harder to suppress Beta collective-unconscious leakage. Restates spirit-tree retcon (near_duplicate of P1-WORLD-03). Explicit reader-decoding rule: gothic decor appearing in *Alpha* space = Beta ideological erosion is happening there.
- semantic_role: definition + diagnostic rule + duplicate-cluster member
- primary_home: `#world` (district cards)
- duplicate_locations: P1-LAW-04 (day-happiness), P1-WORLD-03 (spirit-tree retcon)
- classification: mixed — gothic-erosion-as-diagnostic-signal is unique; the other two parts are near_duplicate/intentional_reminder
- refactor_risk: high for the gothic-erosion rule (easily mistaken for decoration); low for the duplicated parts
- proposed_treatment: KEEP_AS_IS for the gothic-erosion rule; MERGE the repeated day-happiness/spirit-tree text into their primary homes if consolidating
- destination: P1-LAW-04 / P1-WORLD-03

**P1-WORLD-05**
- source_location: 5214–5223 (政治設定)
- short_factual_payload: The empire was ruled by an emperor; Keishi killed him and now secretly rules *as* the emperor (identity replacement, not overthrow-and-new-title). Night district's two alternate original names (靈樹谷/夢離谷). Spirit tree = hub balancing positive/negative emotion between reality and collective unconscious. Spirit Tree War named as the institutional root of *every* subsequent tragedy (capture subjects → research emotion mechanics → build Victoria's Tears → mass-produce magical girls).
- semantic_role: definition + causal chain
- primary_home: `#world`
- classification: unique
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-06** (id="world-victoria")
- source_location: 5230–5275
- short_factual_payload: Official story vs truth table (功能/監控/Alpha線狀態/Beta線活化/隱藏功能). Hidden function: military/emperor-only deep read-write interface into the collective unconscious, able to manipulate causal-energy residue from Haruka's creation event for partial soul-preservation/body-reconstruction — explicitly decoupled from the citizen "perpetual motion machine" myth; real hidden power is soul manipulation, not pain elimination. Post-destruction: no real-time broadcast infrastructure ever rebuildable — stage permanently shifts to footage-replay/re-edit. Coverage range doubles as a residual-cost drainage system (inside=absorbed, outside=corpse-transformation accelerates; tower's destruction = one mechanical cause of 緋潮). **Exemption rule**: Haruka/Airi after true self-reconciliation are NOT bound by this drainage rule — exemption is earned psychological completeness, explicitly NOT bloodline/species privilege.
- semantic_role: definition + technical detail + exception rule
- primary_home: `#world-victoria`
- classification: unique
- refactor_risk: high — the exemption-is-earned-not-bloodline clarification is an important anti-misreading guardrail.
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-07** (id="world-idol-origin")
- source_location: 5276–5307
- short_factual_payload: Restates (as its own anchor-addressable card) that "維多利亞天使" is not an official idol system, just an auto-applied filter/propaganda label (paired with 魔女狩獵); same girl can flip from angel to threat within a day; Haruka is the sole deliberately-managed exception.
- semantic_role: definition (duplicate-cluster member)
- primary_home: `#world-idol-origin`
- duplicate_locations: P1-WORLD-03
- classification: intentional_reminder / near_duplicate
- refactor_risk: medium — if merged without checking, could delete the only anchor other content links to (`#world-idol-origin` is referenced by the TERMS glossary in P1-JS-04).
- proposed_treatment: MERGE candidate, but verify inbound `#world-idol-origin` links (confirmed: TERMS glossary at line ~12043 links here) before removing
- destination: P1-WORLD-03

**P1-WORLD-08**
- source_location: 5308–5349 (情緒管理局)
- short_factual_payload: Function-vs-truth table (監控/屍骸管理/魔法少女管理="衛生行動"物理清除/輿論控制). Restates 奇蹟/奇蹟反應 two-naming (intentional_reminder). Unique casting facts: 白銀朔 is a bureau double agent; 凜, after being reorganized by Keishi, becomes a bureau civil servant.
- semantic_role: definition + duplicate + unique character-status fact
- primary_home: `#world` (bureau card)
- duplicate_locations: P1-WORLD-01 (two-naming)
- classification: mixed
- refactor_risk: medium — the character-status sentences are easy to lose if the card is compressed.
- proposed_treatment: KEEP_AS_IS for character-status facts; MERGE the two-naming duplicate into P1-WORLD-01
- destination: P1-WORLD-01

**P1-WORLD-09** (id="world-epd")
- source_location: 5350–5377 (情緒力量裝置)
- short_factual_payload: Most magical girls cannot use magic autonomously, must depend on this device. Unlock is imperial-forced (NOT the voluntary "鏡中的承諾"). Surveillance backdoor unknown to users. Bio-safety-lock "光環"(halo) auto-snaps the wearer's neck at critical exhaustion, whitewashed as "angel symbol." Cost: burning future soul, permanent unlock-damage, "燃盡"(burnout) end-state explicitly stated to be *worse* than corpse-transformation (burnout=pure void; corpse still has a trapped soul). Sole exception: Haruka & Airi bypass the device entirely via "鏡中的承諾"/濾心機制; their heart-vessel cracks heal gold (kintsugi effect), becoming more complete than before.
- semantic_role: definition + hard mechanic + exception
- primary_home: `#world-epd`
- classification: unique
- refactor_risk: high — the halo auto-execution mechanic and burnout-worse-than-corpse distinction are technical single-source facts.
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-10** (id="world-drug")
- source_location: 5378–5442 (Emo-Visor)
- short_factual_payload: Civilian-castrated version of EPD (surveillance/bio-lock removed, only emotion-induction kept); invented by Akiho, later industrialized by empire. Hardware: Gen3 VR visor + "安普膠囊" cartridge, 30-min duration, crash-comedown drives addiction loop. Three-tier raw-material quality table (低級=daily fragments/中級=magical-girl battle emotion/頂級=解離兵器's despair, most addictive). Commercialization traced to Keishi's own imperial torture-experiment data feeding Akiho's R&D — explicit "self-inflicted closed loop" framing (Keishi later imposes the same tech city-wide). 情緒守恆 restated (happiness never created from nothing). Long-term cost: brain loses spontaneous real-emotion capacity. **Explicit anti-misreading note**: 解離 is a *result classification*, NOT a third manufacturing line — "唔好讀成大腦反芻創傷燃料嗰套已刪硬件" (explicitly references a DELETED prior mechanic).
- semantic_role: definition + technical detail + anti-misreading warning referencing deleted prior canon
- primary_home: `#world-drug`
- classification: unique
- refactor_risk: high — the Keishi self-torture closed-loop causal link, and the explicit note that an older mechanic was deleted, are both irreplaceable single-source facts.
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-11** (id="world-corpse")
- source_location: 5443–5515 (魔法屍骸)
- short_factual_payload: Heart-vessel (心之器/心匣, same object two names) defined. Intact=human; cracked-not-shattered=magical girl; fully shattered on Alpha=death. On Beta, world-law refuses soul dispersal — at the 0.1-second pre-dispersal moment, an obsession-fragment anchors the soul at the dead body's edge = magical corpse. Corpses = "people not allowed to die," not a separate species; core inside still feels pain. Sidebar "CDL-271 靈魂困禁" (Alpha-death vs Beta-death comparison). Gothic-erosion base nature: unclaimed container forcibly encased by world-law; **explicitly contingent on Haruka's psychology, not universal** ("哥德並非唯一可能，而是晴香的"). Three-tier erosion-depth scale. "渴求溫暖卻毀滅溫暖" mechanic: trapped 1% soul-residue craves positive emotion (motivational root of 燈塔效應/CDL-064) but the corpse body itself corrodes any positive emotion it nears — explicit distinction: 燈塔效應=behavioral mechanism, 渴求溫暖=motivational layer, complementary not identical.
- semantic_role: definition + technical detail (CDL-271, CDL-064) + hard rule
- primary_home: `#world-corpse`
- duplicate_locations: CDL-271/渴求溫暖 repeated near-verbatim at P1-APPENDIX-06
- classification: unique
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-12**
- source_location: 5518–5577 (Alpha線與Beta線：事件真相vs態度真相)
- short_factual_payload: Explicit "common misreading prevention" box — Alpha/Beta are NOT "real vs fake" or "past vs present"; both simultaneously real (car-crash analogy). "Beta線的回填歷史": Beta did not start running at 帝歷102年 — it was generated whole-cloth at the creation moment, *including* a backfilled history (Keishi's 帝歷79年 trauma, Emo-Visor, magical-girl system all pre-date the creation point as backfill). Distinguishes backfilled-history-as-distorted-Alpha-echo vs independent-new-world-consequence (e.g., Keishi's 帝歷103年 coup happened *after* the creation point using her own creation-day power, is NOT backfill). Three explicitly-named common misreadings refuted (① Alpha isn't a past timeline; ② Beta isn't Haruka's hallucination; ③ "remembering Alpha" ≠ "living in Alpha"). Final reframe: "event-truth vs meaning-truth," and the core irony of "changing reality" = "a bigger bandage over a bigger wound."
- semantic_role: definition + hard rule (triple-reinforced anti-misreading guardrail)
- primary_home: `#world` (Alpha/Beta section)
- duplicate_locations: P1-WORLD-02 (compressed reader-preview of the same idea)
- classification: unique (this is the authoritative full statement)
- refactor_risk: very high — this exact block (3 named misreadings + backfill-history distinction) is precisely what a well-meaning refactor compresses into "Alpha=past, Beta=present," destroying the actual canon meaning.
- proposed_treatment: KEEP_AS_IS verbatim, do not summarize

**P1-CHAR-01**
- source_location: 5578–5638 (晴香的原罪 — per-character Alpha-fate vs Beta-fate table)
- short_factual_payload: Comparison table for Haruka/Miyako/Fei/Sou/Rin/Akane/Saku(浩然)/Akiho. Notable: Sou's Beta fate includes forced childhood gender-reassignment into a male heir (father's doing) as the price of the family's restored wealth — not repeated elsewhere in this agent's range. Saku's Alpha-fate: could have properly accompanied Miyako; Beta-fate: became a corpse-hunter after her funeral, later meets Unit 01 wearing his lover's face.
- semantic_role: definition (comparative fate table)
- primary_home: `#world` (原罪 section)
- classification: unique
- refactor_risk: high
- proposed_treatment: KEEP_AS_IS

**P1-WORLD-13**
- source_location: 5640–5685 (名字系統)
- short_factual_payload: Haruka at age 5 used "Japanese magical-girl anime" as the template for Beta line, so the entire Beta-line naming/cultural-language system is a child's anime projection. Three-box framing (Japanese names=anime filter hiding Alpha's bloody truth; Chinese real names=Alpha's original reality; empire's forced promotion of Japanese culture=state-level bandage maintaining Haruka's childhood escapism). Sample name-pair table with a small etymology note ("思螢" Cantonese reading = protector-persona's self-naming).
- semantic_role: definition + etymology detail
- primary_home: `#world` (name system)
- duplicate_locations: full data table lives in Appendix B (P1-APPENDIX-B-01)
- classification: unique (this is the *rationale*; Appendix B is the *data*)
- refactor_risk: medium — the "why Japanese names exist" causal explanation only lives here; Appendix B doesn't repeat it.
- proposed_treatment: KEEP_AS_IS; cross-check that Appendix B doesn't silently drop this rationale when either is edited
- destination: P1-APPENDIX-B-01 (companion, not duplicate)

**P1-WORLD-14**
- source_location: 5686–5798 (情緒社會的黑暗層 — 5 factions)
- short_factual_payload: Five distinct shadow-structures of Beta's emotion-capitalism:
  - 情緒美食家 (id="world-gourmets"): black-market elite consuming "Raw Emotion" from living people; named roles (品酒師/收藏家/護士長); base "糖果唐樓".
  - 奇蹟販賣所 (id="world-miracle-vending"): illegal Victoria's-Tears-tapping vendors selling fake "miracles" (still requires debt repayment, unconnected to true Great Miracles); empire tacitly profits ("Pandora Protocol"-style exploitation-as-charity pattern). **Akane investigated/broke this ring**, deepening her gang's betrayal-grudge, feeding the later ambush chain (接家長日→戒斷→小光之死).
  - 食罪者 (id="world-sin-eaters"): voluntary contract sin-eaters, physical toll = skin darkening/joint petrification/immobility, names recorded in "守護者名錄". Plot-critical line: a sin-eater once thanked Haruka "感謝妳讓我感到被看見" — later weaponized by Keishi as interrogation leverage.
  - 睡夢紡織工 (id="world-dream-weavers"): imperial infra, volunteers in REM state power Beta's collective dream computation, packaged as "幸福合約," body shrinks to "幸福空殼."
  - 凡人反抗組織 (id="world-resistance"): non-magic resistance led by Saku; explicitly distinguishes 雷子健 as NOT a member, just a bottom-tier distribution runner; unique origin fact: Zi-Kin was saved by Haruka with a bandage after a corpse incident, shaping his subsequent behavior.
- semantic_role: definition (5 distinct world-faction datasets), several with plot-critical unique facts
- primary_home: `#world` (dark-layer section)
- classification: unique
- refactor_risk: high across all five — these read as "flavor factions" most likely to be cut/merged in a refactor, but each contains at least one load-bearing plot-connective fact.
- proposed_treatment: KEEP_AS_IS (all five); do not compress into a generic "black market factions exist" summary

### 世界如何運作：七個核心法則 (`#laws`)

**P1-LAW-11**
- source_location: 5828–5942 (七法則詳細版 full-text law-cards)
- short_factual_payload: This is the **authoritative full-text version** of the laws already summarized in diagram/QA form directly above it (5808–5869, which is an intentional compressed preview of THIS block, not a separate fact set). Unique technical facts not in the preview: law-vessel ties 心之器 damage directly to magical girls/情緒債務侵蝕("情緒病毒")/corpses; law-conservation precisely defines 情緒廢料; law-collective visual = old tenement back-alley, clarifies 情緒病毒 is NOT external contagion; law-tide names "L3冥河" as grief's ultimate convergence point, indiscriminate clearing. **law-mirror (full mechanic)**: mirrors/still water/polished metal are the one thing immune to Beta overwrite, triggered by high-emotion/conflict state, irreversible once revealed; reveals dual truth (objective absence-of-fake-magic vs inner-dominant reverse-mirroring, e.g. Haruka seeing Keishi's black-eyed reflection when furious); city-level day="mirrorless city," night="mirror city"; **two explicit scope limits** (mirror law only works OUTSIDE Victoria's Tears coverage, only permanently lifted after the tower's destruction; only magic-users/heart-vessel-holders see the full reflection) plus two named exceptions (near-death overload; Victoria's-Tears-interface operators like Keishi). law-miracle restates two-naming (intentional_reminder). **law-spectrum**: "魔法少女嚴格來講已是光譜一部分" — anyone can corpse-transform without passing through magical-girl stage; same axis called "靈魂距離光譜"; 護甲(armor) explicitly reframed as emotion-conservation-law's *forced debt marker* for Haruka having rewritten that person's Alpha life — **not a blessing**; 解離兵器 is the plunge *result*, not a separate system. Player-facing note: fighting corpses isn't just "killing monsters" — some can regain choice via relics/memory/emotional weakening; unsavable ones require 介錯 (mercy-kill preserving final dignity).
- semantic_role: definition (full authoritative version) + technical detail + hard rule
- primary_home: `#laws` (law-card ids: law-vessel/law-conservation/law-collective/law-tide/law-mirror/law-miracle/law-spectrum)
- duplicate_locations: compressed diagram+QA preview at 5808–5869 (intentional, not to be merged away — it's the legitimate reader on-ramp)
- classification: mixed — mirror-law full mechanic and vessel/spectrum details are unique; miracle two-naming is intentional_reminder
- refactor_risk: high — the mirror law's two scope-limit exceptions and the "armor=debt not blessing" reframe are exactly the nuance a summary/diagram pass drops.
- proposed_treatment: KEEP_AS_IS (these `law-card` divs are canonical; the diagram/QA above are a legitimate compressed preview, not a duplicate to merge away)

**P1-WORLD-15**
- source_location: 5947–5979 (`#hidden-mechanisms`)
- short_factual_payload: Five real-world-unexplainable phenomena given in-world mechanisms: 既視感(déjà vu=soul briefly receiving another timeline-self's memory), 夢境(dreams=soul entering collective-unconscious back-alley, real but hard to remember), 晨間人格解體(morning depersonalization=soul not fully "loaded" for 0.5–2 sec), 情感共鳴症(sensitive people briefly receive strangers' emotions during any strong collective event, not just tragedy), 永動機幻象(perpetual-motion illusion=Victoria's Tears is an extraction pump; empire only needs citizens to *believe* it's free).
- semantic_role: definition (5 distinct mechanics)
- primary_home: `#hidden-mechanisms`
- classification: unique
- refactor_risk: medium — moderate risk of being merged into one generic "supernatural phenomena" bullet, losing each specific mechanism.
- proposed_treatment: KEEP_AS_IS

### 魔法少女設定 (`#mahou`)

**P1-MAHOU-01**
- source_location: 5983–6029 (魔法少女能做什麼 + 本質定義)
- short_factual_payload: Powers = small-scale miracle: 具現化物件(materialization, explains free-choice of transformation appearance), 治癒傷口(healing cost flows into the *same* collapse line, not a separate mechanic — intentional_reminder of P1-LAW-09), 感知情緒(deepens into a curse, not a gift, as erosion increases). Essence definition: surface="chosen hero"; reality="a person who cut out their most painful/vulnerable part to trade for power — the costume 'strong self' isn't really her, just her wound wearing a battle uniform." Hard-rule sub-bullets: closest people are often deepest harm sources; love can cause madness (doesn't grant the right to change others); sacrifice doesn't guarantee meaning (story never stamps anyone's suffering "worth it").
- semantic_role: definition + hard rule (anti-sentimentality guardrails)
- primary_home: `#mahou`
- duplicate_locations: healing-cost note ~ P1-LAW-09
- classification: mostly unique
- refactor_risk: high — "sacrifice doesn't guarantee meaning" and "love doesn't grant right to change others" are precise thematic guardrails.
- proposed_treatment: KEEP_AS_IS

**P1-MAHOU-02**
- source_location: 6030–6124 (變身代價全圖)
- short_factual_payload: Three-dimensional cost taxonomy. (1) Physical, 4-stage table with named phenomena (星空流體虛無態/暗態, "光環" death-countdown for device users only, 3 endings: monster/halo-execution/transcend[Haruka only]); common cross-stage symptoms; "身體延遲" design principle (cost is forced to delay, e.g. vomit happens off-stage); "靈魂延遲/Soul Lag" (numbness period then pins-and-needles period, doubled pain). (2) Social cost: transformation = local reality overwrite; bystanders' memories auto-rewrite so the magical girl "was always there" and the untransformed girl "never existed" — "the people you protect can no longer recognize you." (3) Endgame cost: halo mechanism explicit warning (device-users only), irony of angel-symbol-as-execution-tool.
- semantic_role: definition + technical detail (full cost taxonomy)
- primary_home: `#mahou` (變身代價全圖)
- classification: unique
- refactor_risk: high — one of the densest unique-fact blocks in the document; named phenomena (Soul Lag, 星空流體) appear nowhere else.
- proposed_treatment: KEEP_AS_IS

**P1-MAHOU-03**
- source_location: 6125–6154 (魔法少女的工具)
- short_factual_payload: Three tools, each with a hidden-truth twist. 血糖手錶: Akiho's deliberate *double* backdoor — she monitors/protects Haruka AND the same data reports to empire; explicit clarification that when the team discovers this, Akiho does not "find out she's being used" — she already knew. 金魚雷達: origin story — Haruka's family owned goldfish before her age-5 rewrite; that event pulled the species' collective unconscious into Beta's底層編碼, giving goldfish innate resonance to world-level emotional anomaly. 金夫人花露水: folk anti-hostility tool, temporary only. Design-intent summary: tools represent how girls are "cleverly bound" — not chains but habit — each promises convenience/safety but removes the muscle of self-judgment.
- semantic_role: technical detail + unique lore + thematic framing
- primary_home: `#mahou` (工具)
- duplicate_locations: goldfish-radar/perfume restated with gameplay tradeoffs at P1-GAME-06
- classification: unique
- refactor_risk: high — goldfish-origin is a whimsical detail easily cut as "flavor," but it's tied directly to Haruka's origin event; Akiho's backdoor-awareness fact is plot-critical.
- proposed_treatment: KEEP_AS_IS

**P1-MAHOU-04**
- source_location: 6156–6274 (魔法少女的起源：三條路線, incl. full-text expansion)
- short_factual_payload: **Explicit "Canon 修正" block** (id="disassociation-weapon-card", class dedup-note): clarifies both "真正" and "裝置" routes REQUIRE Haruka's age-5 wish-mark (armor) as prerequisite; empire devices can only bypass already-marked souls; 解離兵器 is a *result classification* (unarmored person forced past obsession-anchor), NOT a single hardware production line; explicitly states Akiho's faceless-executor (debt-type self-dissolution) and Rin's Unit 00 (voluntary weaponization+reorganization) are NOT the same mechanism as generic dissociation weapons despite surface similarity. Origin chain diagram (Origin→Resource→Lab→Machine→Protocol). Three-lane comparison with named examples. Full-text adds: the Ayaka family's (綾小路) pure psychological-lock tech is explicitly *independent* of this whole military research chain. Explicit correction: "true magical girl" state should NOT be read as a Jungian "achievement unlock."
- semantic_role: hard canon-correction + definition + technical detail
- primary_home: `#mahou` (origin section)
- classification: unique — reads as an explicit author-driven retcon/clarification pass
- refactor_risk: very high — labeled "Canon修正" itself, meaning this note exists specifically because a prior looser version was misread; if a future refactor re-compresses without preserving the corrections, the same misreading could recur.
- proposed_treatment: FLAG_FOR_AUTHOR / KEEP_AS_IS verbatim — do not silently merge into a shorter "three origins" summary

**P1-MAHOU-05** (id="dissociation-weapon")
- source_location: 6276–6310 (解離兵器：結果分類, standalone deep-dive)
- short_factual_payload: Companion to P1-MAHOU-04, adds new material: origin story "一場失敗嘅私人搜尋" — mass dissociation-weapon-like results first appeared from **Keishi's personal search** after her 103-year coup (needed a container for Ying's/螢's recovered soul fragments), militarizing conscription of candidate girls (including Miyako and Rin) 103–108, repeatedly failing; Miyako/Rin kept full humanity due to Haruka's residual wish-imprint, and it was this "humanity being uncontrollable" that made Keishi formally abolish the program after Rin's sacrifice in 108, pivoting to the Pandora Protocol from 109. **Explicit deletion note**: a prior 3-layer hardware-mechanism description ("心匣熔焊／創傷反芻注射／成癮性代償回饋") is stated as "查證後從未實際套用喺任何已命名角色身上，已刪除" (verified unused on any named character, deleted from canon). Emo-Visor hidden link: a military branch drains/dilutes plunge-victims' overflow despair into civilian capsules, explicitly not tied to the deleted mechanic. Route 1/2/3 distinction (armored/unarmored+vessel/neither).
- semantic_role: definition (unique origin narrative) + explicit deletion-of-prior-canon note
- primary_home: `#mahou` (dissociation-weapon card)
- classification: unique, companion to P1-MAHOU-04 (not duplicate)
- refactor_risk: very high — Keishi's personal-search origin for Miyako/Rin's conscription, and the explicit "verified unused and deleted" editorial note (metadata about the document's own revision history), are both irreplaceable.
- proposed_treatment: KEEP_AS_IS verbatim

**P1-MAHOU-06**
- source_location: 6311–6392 (如何成為魔法少女 comparison table)
- short_factual_payload: Three-route table (裝置路線/軍方兵器化/解離兵器) across 時期/篩選方式/入門方式/開鎖激活/知情狀態/例子人物/共通代價. Mostly restates P1-MAHOU-04/05 in tabular form. New fact: Rin's Stage-1 "徵召兵器" candidate search (103–108) explicitly named as chronologically separate/prior-to Pandora Protocol (109+).
- semantic_role: comparison table (duplicate-cluster member)
- primary_home: `#mahou`
- duplicate_locations: P1-MAHOU-04, P1-MAHOU-05
- classification: intentional_reminder / near_duplicate
- refactor_risk: low-medium
- proposed_treatment: MERGE candidate if consolidating the three-route explanations, but preserve the 103–108 vs 109+ chronology fact
- destination: P1-MAHOU-04/05

**P1-MAHOU-07**
- source_location: 6402–6446 (變身體驗：被越界，唔係英雄 — explicit director's-intent tag in the h3)
- short_factual_payload: Magic use should produce "body forcibly violated" humiliation, **not** heroic-sacrifice grandeur — "this is deliberate design, not a side effect." Three chained mechanisms: ①諧振的狂喜 (mistaken for "reward of awakening"; performance note: shame-tinged pleasure, character knows it wasn't her choice) ②生理排斥 (vomiting/shaking = "body knowing it's been dirtied," not "cost"; **explicit ban**: "禁止悲壯化處理" — no tragic-grandeur treatment; correct tone = dirty/out-of-control/wanting-to-hide) ③被觀看的悖論 (the more citizens cheer, the deeper the shame). Chain logic: ecstasy(lure)→rejection(punish)→seen-yet-isolated(trap) ensures magic-use never becomes a habituated heroic act.
- semantic_role: definition + explicit director's-intent hard rule (forbidding a specific misreading/performance style)
- primary_home: `#mahou`
- classification: unique
- refactor_risk: high — the explicit "禁止悲壯化處理" ban is a hard creative constraint governing all future transformation scenes.
- proposed_treatment: KEEP_AS_IS

**P1-MAHOU-08** (id="world-lighthouse-effect")
- source_location: 6447–6452
- short_factual_payload: Lighthouse Effect — heart-vessel holders are like lighthouses in the collective unconscious, corpses instinctively hunt them; girls fight from pathological need/survival instinct, not to protect the city; "protecting the city" is explicitly a maintained empire lie.
- semantic_role: definition
- primary_home: `#world-lighthouse-effect`
- duplicate_locations: P1-WORLD-11 (CDL-064 technical/motivational-layer explanation)
- classification: intentional_reminder (paired with P1-WORLD-11 at a different depth level, not a true duplicate)
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS (both copies serve different reading depths)

**P1-MAHOU-09**
- source_location: 6453–6524 (魔法的隱喻本質 — Jungian system)
- short_factual_payload: Whole magic system explicitly built on Jungian psychology. Mapping table (變身=Persona [explicit clarification: Haruka's Act I kindness is genuine, not yet a mask]; 失去感官=numbness made physical; 變成怪物=Shadow dominant; Haruka's journey=Individuation). 鏡子/鏡中人="鏡中的承諾" explicitly stated as a **psychological image**, doesn't require a physical mirror, and is **NOT bound by the Mirror Law** (law-mirror) described elsewhere; reflection-becoming-independent-personality is theoretically possible for anyone, but Fei and Keishi are the only two known complete cases. **Explicit "3 stages not 4 categories" correction**: 未分裂→分裂/打開心之器(most magical girls stop here, NOT an achievement)→個體化(only Haruka+Fei complete this). Final line: dissociation weapons and corpses are NOT a 4th category, just failure-results of stage 2 going wrong.
- semantic_role: definition + hard rule (explicit stage-count correction, mirror-law decoupling clarification)
- primary_home: `#mahou`
- duplicate_locations: consolidated at P1-DEPICT-05 (`#psych-map`)
- classification: unique
- refactor_risk: high — the "not bound by Mirror Law" decoupling and "3 not 4 stages" correction are precisely the clarifying footnotes that vanish under summarization.
- proposed_treatment: KEEP_AS_IS

### 她們如何存在 (`#depiction`)

**P1-DEPICT-01**
- source_location: 6534–6638 (日常 — 7 vignette cards: IG/K房/便利店/隊伍據點/家長日/少女假日約會/潛入學校)
- short_factual_payload: Each vignette pairs a specific ritual/detail with a specific "disappearance" cue showing how it silently ends when a character dies. IG accounts progress through 4 named phases (強行營業→閃耀日常→數位墓碑→結局迴響). K房 scene has specific song titles (Haruka's own "Happy Sugar Magic," Miyako's "雨天" and the line "失去的感覺是通用的"). 潛入學校 is the origin of "秘密基地" and the promotion from "戰鬥搭檔" to "有共同秘密的夥伴." Design-principle box: attachment-building via cheap concrete joys, not abstract "friendship."
- semantic_role: definition (scene-bible material) + design rationale
- primary_home: `#depiction`
- duplicate_locations: IG 4-phase list restated with act-mapping at P1-GAME-07
- classification: unique
- refactor_risk: high — 7 distinct vignettes each with a unique disappearance-beat; collapsing into "they have slice-of-life moments" would lose all specificity.
- proposed_treatment: KEEP_AS_IS

**P1-DEPICT-02**
- source_location: 6639–6659 (變身描寫 — visual/narrative style rules)
- short_factual_payload: Visual rules (sequence ends on one "no expression" frame = soul lag, not victory; repeated transformations dim/desaturate; pre-transform imperfection vs post-transform "not fully present" eyes). Narrative rules (never "I got stronger," always "I spent some more of myself"; teammate greeting evolves 你還好嗎→你血糖夠嗎→silence, explicitly an indicator of relationship being consumed).
- semantic_role: hard rule (style guide for depicting transformation)
- primary_home: `#depiction`
- classification: unique
- refactor_risk: high — a style-guide-level "how to write it" rule, easily lost when content is reorganized into world-fact tables.
- proposed_treatment: KEEP_AS_IS

**P1-DEPICT-03**
- source_location: 6660–6727 (戀愛描寫 — Miyako/Saku and Sou/unnamed boy, incl. full-text expansion)
- short_factual_payload: Miyako↔Saku: recognition by combat rhythm/protective instinct/pause habits, not face; "she is her, but no longer the one in memory." **Sou↔unnamed boy — a complete, self-contained tragic subplot found ONLY here**: boy is the only classmate drawn to perfect/distant Sou's "鬆弛感"; his line "你唔使次次都綁到咁緊" is the first time someone saw her pain rather than scoring her perfection; she never learns his name until the very end; explicit reasoning for her fear ("if he really saw all of me, he'd be disappointed and leave," unlike Akane/Haruka who have someone who loves them "just because"); he takes bullying meant for her, becomes a target, his emotional volatility attracts a corpse, imperial crossfire kills him; she was present and capable of acting but didn't — explicitly stated she can't identify whether her freeze came from fear of exposing her forcibly-reassigned body, protecting her magical-girl identity, or something else — "not even being able to identify the source of her own guilt" is named as the core unforgivable thing. His sketchbook (found posthumously) contains drawings of her imperfect moments with a note; she learns his name only at the very end, it never appears on screen. Closing thematic statement on "假甜" (sweetness=survival, not lies), with specific physical-contrast details (Akane loses limbs silently but cries over a broken cheap hairclip; Haruka dry-heaves after a cheerful food photo).
- semantic_role: definition (character-relationship deep material) + thematic statement
- primary_home: `#depiction`
- classification: unique
- refactor_risk: very high — this is an entire character-defining backstory with a specific causal chain (bullying→corpse-attraction→crossfire death→3-layer unidentifiable freeze→sketchbook→delayed name-reveal) that exists only here; losing it in a refactor deletes a subplot, not flavor text.
- proposed_treatment: KEEP_AS_IS verbatim

**P1-DEPICT-04**
- source_location: 6728–6742 (戰鬥描寫)
- short_factual_payload: Battle isn't "who's stronger" but "where does emotional waste flow" (defeating a corpse = deferring, not solving). Post-battle (stated as *more* important than the battle): "no celebration, only counting losses. First-aid kit instead of trophy."
- semantic_role: hard rule (thematic framing of combat)
- primary_home: `#depiction`
- duplicate_locations: consistent with P1-MAHOU-02's body-delay principle (not a literal duplicate — combat-specific restatement)
- classification: unique
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS

**P1-DEPICT-05** (id="psych-map")
- source_location: 6743–6796 (心理學對照一覽 table)
- short_factual_payload: Consolidated reference table mapping story-element→psychological-concept→concrete-manifestation (變身系統=Persona; 菲=Shadow; 刑思=Shadow[protector-personality split under extreme trauma, control-instead-of-healing]; 魔法屍骸=unintegrated trauma; Alpha×Beta=event vs attitude; 鏡子法則=reflection of inner shadow; 情緒守恆/緋潮=consequence of repression).
- semantic_role: definition (summary table)
- primary_home: `#psych-map`
- duplicate_locations: P1-LAW-02 (psych table), P1-MAHOU-09 (Jungian stage table)
- classification: intentional_reminder (consolidation point)
- refactor_risk: medium — if this table is deleted as "redundant" without redirecting the other partial mentions here, the document loses its single clean reference point.
- proposed_treatment: KEEP_AS_IS — candidate as the canonical MERGE TARGET for P1-LAW-02 and P1-MAHOU-09's overlapping psych-mapping content
- destination: (is itself the destination)

### 遊戲系統設計 (`#game`)

**P1-GAME-01**
- source_location: 11045–11082 (核心體驗三支柱)
- short_factual_payload: Three pillars (電影化的戰術戰鬥/敘事與玩法深度融合["態度光譜" accumulates from choices, affects growth path+ending]/無縫探索與移動). Reference works (FFXIII/NieR:Automata/HxH Nen). Media-specific metaphor mapping: allies=illusion of "being needed"; enemies=truth beneath prosperity; the magical-girl mechanic itself=Haruka's felt freedom is a designed shackle.
- semantic_role: gameplay design rule + thematic mapping
- primary_home: `#game-system`
- classification: unique
- refactor_risk: medium — the mechanic-as-theme mapping is a design-philosophy note easy to drop when trimming to "just mechanics."
- proposed_treatment: KEEP_AS_IS

**P1-GAME-02**
- source_location: 11085–11166 (戰術視窗系統 + 戰鬥節拍循環, dated "2026-07 設計討論結論")
- short_factual_payload: Combat 4-beat cycle (佈局→觸發→決策→執行); tactical-window triggers with explicit exclusion ("普通雜兵攻擊不觸發"). Combat Beat redesign (implemented 2026-07-03): 4 phases with named timings (~1s 沉澱間隔, ~2.5s 玩家主導權窗口); **explicit bug-fix note** naming and resolving a specific prior issue ("間隔一完即刻被打的舊問題由此根治"). Action Time design: outcome locks at choice-confirm moment, "演出永遠只影響幾時見到，唔影響發生咩事" (a precise engineering principle). Multi-threat AT system with named data structures (ThreatResolutionProfile, RevalidateThreatGroup) and behavior differences (ranged vs melee interrupt scope). Milestone roadmap M1(done, "G103 迴歸 14/14 通過")–M4, pointing to external doc `Doc/Architecture/CombatPacing_DesignIntent.md`.
- semantic_role: technical detail (dated, versioned engineering design spec)
- primary_home: `#game-beatloop` / `#game-combat`
- classification: unique
- refactor_risk: high — a dated engineering design-decision record with named bug-fixes and milestone tracking; merging/summarizing loses the traceable "why current combat behaves this way" record and the pointer to the external architecture doc.
- proposed_treatment: KEEP_AS_IS verbatim, do not compress the milestone/bugfix language

**P1-GAME-03**
- source_location: 11168–11216 (絕對共感視界 — HUD/UI system)
- short_factual_payload: Haruka's admin-view UI (invisible truth revealed only Act III); after Fei's partial fusion (Act II), perception expands to two layers (肉體狀態層 + 被困靈魂層). HUD elements (情緒條/架勢條/心之隙縫/情緒圖標). UI-degrades-with-story-progression table (Act1=full+tutorial → Act2=noise → Act3=full collapse → Act4=selective recovery, explicitly meaning "player has learned not to fully depend on it").
- semantic_role: technical detail (UI/gameplay spec tied to narrative beats)
- primary_home: `#game-ui`
- classification: unique
- refactor_risk: high — the "only Haruka sees this UI, revealed Act III" fact is plot-critical gameplay-narrative integration; the Act4 UI-recovery-means-learned-independence note is precise design intent.
- proposed_treatment: KEEP_AS_IS

**P1-GAME-04**
- source_location: 11218–11250 (雙軌數值系統 — Kill/Purify/Extract)
- short_factual_payload: Three combat-resolution choices with explicit tradeoffs and EXP/star ratings (Kill=★★★★★+emotional debt; Purify=★★☆☆☆+partial; Extract=☆☆☆☆☆+"微弱的感謝," true value revealed Act IV). Payoff mechanic: "第三幕 Boss 無限再生" — every Kill from Acts 1–3 becomes the Act3 boss's regeneration fuel, mechanically embodying "pain doesn't disappear, only transfers."
- semantic_role: hard gameplay mechanic (tied directly to the thematic law of conservation)
- primary_home: `#game-value`
- classification: unique
- refactor_risk: high — the Kill-fuels-final-boss payoff is precise mechanical/narrative integration; losing the EXP/star framing breaks the design document's actionability.
- proposed_treatment: KEEP_AS_IS

**P1-GAME-05**
- source_location: 11252–11282 (社會風評三階段弧)
- short_factual_payload: Three-stage reputation arc table with specific mission examples per stage (維多利亞天使期: rescue/escort/clear-out; 裂痕期: "殺無攻擊性屍骸"/"協助家暴者" gray-morality commissions, shrinking pay; 魔女狩獵期: human commissions vanish entirely, wanted/refused-service/stoned — "monsters are gentler than humans").
- semantic_role: gameplay system (narrative-integrated quest-availability arc)
- primary_home: `#game-reputation`
- duplicate_locations: referenced briefly as a table row in P1-LAW-01
- classification: unique (P1-LAW-01's mention is intentional_reminder of this fuller version)
- refactor_risk: high — the specific mission examples per stage are precise design content not restated anywhere else.
- proposed_treatment: KEEP_AS_IS

**P1-GAME-06**
- source_location: 11284–11304 (戰術道具系統, collapsed `<details>`)
- short_factual_payload: Four tactical items with gameplay-specific tradeoffs: 金魚雷達(cross-refs P1-MAHOU-03 lore); 金夫人特濃花露水(numbs corpse emotion-smell but **lowers NPC affinity** — a gameplay tradeoff not present in the lore-only P1-MAHOU-03 description); 替死鬼假人(decoy, stackable with perfume); 葡萄糖注射槍(mana=blood sugar, CGM real-time monitoring, low-sugar turns screen black&white + hand-tremor blocks running — direct mechanical implementation of the body-cost lore).
- semantic_role: technical detail (gameplay item specs with lore tie-ins)
- primary_home: `#game-items`
- duplicate_locations: P1-MAHOU-03 (lore origin)
- classification: incremental_explanation (adds gameplay-mechanical facts to P1-MAHOU-03's lore)
- refactor_risk: medium
- proposed_treatment: KEEP_AS_IS; note the cross-reference to P1-MAHOU-03

**P1-GAME-07** (id="game-narrative")
- source_location: 11306–11353 (敘事承載例子)
- short_factual_payload: IG Chronicle 4-stage table restated **with explicit Act-mapping** (new info vs P1-DEPICT-01's version, which lacks act numbers). "物資短缺→潛入學校" worked example of the Consequence-Driven-Progression law applied to gameplay: explicit trigger→objective→stated design purpose ("choice isn't free, it's forced — game system directly presents moral gray zone") — complementary to P1-DEPICT-01's emotional/relationship payoff for the same vignette. Text-prop taxonomy: named relics (Miyako's broken guitar, Sou's sketchbook [cross-ref P1-DEPICT-03], Rin's pendant fragment); IG-post subtext examples; in-game text props (imperial announcements/graffiti/newspapers).
- semantic_role: gameplay-narrative integration examples + duplicate-cluster member (IG phases)
- primary_home: `#game-narrative`
- duplicate_locations: P1-DEPICT-01 (IG phases, without act-mapping)
- classification: mixed — IG table is intentional_reminder/incremental_explanation; infiltration case study and text-prop taxonomy are unique
- refactor_risk: medium-high — the infiltration case study is the clearest worked example of the Consequence-Driven-Progression law in gameplay form, valuable as a template.
- proposed_treatment: KEEP_AS_IS; MERGE candidate only for the raw IG-phase list if consolidating with P1-DEPICT-01 (keep the act-mapping detail)
- destination: P1-DEPICT-01 (`#depiction`)

### 附錄 A：情緒世界系統 (`#appendix`)

**P1-APPENDIX-01** (CDL-248)
- source_location: 11362–11541 (唯識宇宙底層公理 banner + full system-flow diagram)
- short_factual_payload: "唯識宇宙(Consciousness-Centric Universe)" numbered CDL-248 — reality maintained by collective soul-observation; large-scale soul-loss disintegrates reality; ALL systems (magic/corpse/empire/緋潮) built on this premise. Explicit reframe of what the miracle actually did: "並非創造魔法，而是將唯識宇宙的集體潛意識存取權限從靜默切換為激活模式" (a permissions-toggle, not creation-from-nothing). Full system-flow diagram: 基礎層(集體潛意識, sub-layers 回聲層→留存海→冥河, with an Alpha-line footnote: brain IS the soul-reality interface, no heart-vessel needed) → 本體層(靈魂⟷肉體/心之器) → 魔法系統層(靈魂滲漏→情緒結晶→魔法少女, forking to 情緒廢料→緋潮 OR 魔法屍骸) → 終局(緋潮). **Separate side-chain diagram**: "刑思操控奇蹟鏈 — 異質能力," explicitly marked as heterogeneous/separate from the main system — Keishi's power is residual L3-Styx-leakage energy that MANIPULATES existing miracle-tier energy (distort/redirect/contaminate), does NOT create or weaponize "emotion virus"; **hard limit**: cannot self-trigger tier-4 world-level reality overwrite; needs Cai as a "charging cable," has a cap and fluctuates; chain ends at "hard limit: can manipulate but not generate → must harvest emotion-currency or force Haruka to re-create-world." Explicit disambiguation footnote: corpses are NOT Keishi's creation — natural product of vessel-shattering + Beta's soul-non-dispersal law.
- semantic_role: definition (foundational numbered world axiom) + technical detail (full causal-flow diagram) + character-power mechanic
- primary_home: `#appendix`
- classification: unique
- refactor_risk: very high — the single most load-bearing technical diagram in the document; if a refactor "visualizes" this into a simpler diagram without preserving the Keishi side-chain's hard-limit and disambiguation notes, major plot mechanics (why Keishi can't simply self-resolve everything) lose their support.
- proposed_treatment: KEEP_AS_IS verbatim; if VISUALIZE/redraw is attempted, the Keishi side-chain, its hard limit, and disambiguation footnote MUST be preserved as explicit connected content, not dropped as a "special case"

**P1-APPENDIX-02**
- source_location: 11543–11565 (唯識宇宙 subcard, compressed restatement)
- short_factual_payload: Compressed restatement of P1-APPENDIX-01's core axiom + Alpha/Beta access-permission comparison. No new facts.
- semantic_role: definition (duplicate)
- primary_home: `#appendix`
- duplicate_locations: P1-APPENDIX-01
- classification: intentional_reminder / near_duplicate
- refactor_risk: low
- proposed_treatment: MERGE (keep P1-APPENDIX-01 as full source, this as a compressed pointer)
- destination: P1-APPENDIX-01

**P1-APPENDIX-03**
- source_location: 11566–11668 (集體潛意識如何運作, incl. full-text expansion)
- short_factual_payload: Compressed chain-steps are intentional_reminder of P1-WORLD-15/law-collective content already covered. **Unique content**: 3-depth-layer table — L2留存海 (magical girls only) states **愛莉's petrified-statue consciousness moves in this layer as "紙皮騎士"(cardboard knight)** — a unique, single-source character-status fact; L3冥河 clarified as "terminus/sediment point," NOT "source," but naturally where world-level reality-changing actions draw most power from (precise subtle distinction). Mini-matrix includes "情緒連結"(Emotion Link) — the team's core tactical mechanic: syncing emotion-fields in battle boosts power but amplifies shared trauma memories; framed explicitly as "a high-risk decision trading wounds for power," not a safe option.
- semantic_role: definition + technical detail (unique: Airi's L2 form; L3-terminus-not-source distinction; Emotion Link mechanic)
- primary_home: `#appendix`
- duplicate_locations: chain-steps/access-table ~ P1-WORLD-15, P1-APPENDIX-01
- classification: mixed — mostly intentional_reminder, but Airi's cardboard-knight fact and Emotion Link are unique
- refactor_risk: high for the Airi fact (single-source, easily lost) and Emotion Link (a named mechanic not described elsewhere)
- proposed_treatment: KEEP_AS_IS for the Airi fact and Emotion Link; MERGE the chain-steps/access-table duplicates into P1-WORLD-15/P1-APPENDIX-01

**P1-APPENDIX-04**
- source_location: 11669–11687 (靈魂)
- short_factual_payload: Foundational premise: "靈魂是先存在的實體，不由腦部產生" — brain is the soul's signal receiver, not its source; stated as the *basis* for understanding magic/corpse-transformation/Haruka's reality-change ability. Everyone has exactly one soul, naturally whole, doesn't naturally split. Soul CAN split under extreme trauma/magic violence, fragments developing into independent personalities competing for control (mechanically explains Fei/Keishi's origin). Beta death = soul-body link severance, not heartstop. Alpha footnote (near-duplicate of P1-APPENDIX-01's brain-interface note): brain IS the interface, brain-stop = immediate dispersal, no anchoring possible — "the most fundamental difference between Alpha and Beta death."
- semantic_role: definition (foundational axiom)
- primary_home: `#appendix`
- classification: unique
- refactor_risk: high — this paragraph is the metaphysical bedrock explaining why Fei/Keishi as split personalities are physically possible in-world.
- proposed_treatment: KEEP_AS_IS

**P1-APPENDIX-05**
- source_location: 11688–11700 (情緒守恆定律 + 緋潮 cards)
- short_factual_payload: 情緒守恆: explicit creditor framing — "Alpha 線是債權人" (a precise legal/personification metaphor used nowhere else). 緋潮: unique sensory-design detail — the red glow contains "無數扭曲的人形輪廓" of erased-Alpha-souls; accompanying sound is explicitly NOT screaming but "低沉疊加的哀鳴."
- semantic_role: definition + sensory/design detail
- primary_home: `#appendix`
- classification: unique
- refactor_risk: medium-high — the specific audiovisual signature of 緋潮 is exactly the kind of art/sound-direction detail lost if the appendix is trimmed to "just lore."
- proposed_treatment: KEEP_AS_IS

**P1-APPENDIX-06** (CDL-271 extended)
- source_location: 11701–11752 (魔法屍骸化機制, full detail)
- short_factual_payload: Reinforces CDL-271 (near-duplicate of P1-WORLD-11's sidebar) but adds several **unique mechanics not present in the main body**:
  - "靈魂走咗幾遠": if obsession is insufficient, the soul fully leaves the body → a genuinely empty "無主容器," externally IDENTICAL to a soul-imprisoned corpse — i.e., two visually identical "corpse" types exist, one occupied, one truly empty.
  - 歌德侵蝕底層本質: adds a specific counterfactual — "若創世者不同，可能呈現陶土或蔓藤形態" (a different creator might produce clay or vine-form encasement instead of Gothic).
  - 渴求溫暖卻毀滅溫暖 (near-duplicate/verbatim repeat of P1-WORLD-11).
  - **可逆轉時限** (unique, not in main body): corpse-transformation is reversible up to a specific 3-stage threshold (裂紋顯現→尖刺萌發→尖刺融合外殼); magical girls can pull the soul back before fusion; once fused, irreversible. Explains "conscious but body already set" corpses as having "woken too late." Directly ties to the 介錯 mercy-kill-vs-save choice in P1-LAW-11.
  - **越掙扎越易斷** (unique): struggling/forcing a soul back accelerates bond-wear and control loss; the bond can only be stabilized through 承接/接納(acceptance), never force; a precise, actionable rule for how rescue scenes must mechanically work.
- semantic_role: definition + technical detail (multiple unique mechanics: dual corpse-types, reversibility window, struggle-worsens rule)
- primary_home: `#appendix` (魔法屍骸化機制)
- duplicate_locations: CDL-271 base and 渴求溫暖 ~ P1-WORLD-11
- classification: mixed — base facts are near_duplicate/intentional_reminder; 可逆轉時限/越掙扎越易斷/靈魂走咗幾遠 are unique and appear nowhere else
- refactor_risk: very high for the three unique sub-facts — precise, actionable story/gameplay mechanics that constrain how rescue scenes and the 介錯 choice must be written; losing them would be catastrophic, not cosmetic.
- proposed_treatment: KEEP_AS_IS verbatim for 可逆轉時限/越掙扎越易斷/靈魂走咗幾遠; MERGE only the CDL-271 base definition and 渴求溫暖 repeat into P1-WORLD-11
- destination: P1-WORLD-11 (for the duplicated portion only)

**P1-APPENDIX-07**
- source_location: 11753–11760 (情緒資本主義)
- short_factual_payload: Empire treats emotion as extractable/tradeable commodity; day-district bliss is extracted from night-district poor. **Unique mechanic**: poor who chronically SELL positive emotion suffer permanent heart-vessel shrinkage — physiologically lose the capacity to feel happiness, reduced to empire's "情緒化糞池." Points to external canon files (World Rules, Glossary).
- semantic_role: definition + hard mechanic (irreversible physiological cost of selling positive emotion)
- primary_home: `#appendix`
- classification: unique
- refactor_risk: high — a precise, disturbing worldbuilding fact used nowhere else, exactly the sort of "one more paragraph" cut in condensation.
- proposed_treatment: KEEP_AS_IS

### 附錄 B：全角色真實名字對照表 (`#appendix-b`)

**P1-APPENDIX-B-01**
- source_location: 11764–11832
- short_factual_payload: Full name-pair table with a **unique symbolic annotation per character**, the authoritative full version referenced by P1-WORLD-13's summary. Notable per-row facts: 菲 has **no Alpha-line name at all** ("不屬於任何現實層面，不配擁有帝國名"); 凜 is explicitly flagged as **the only main character who has fully lost her Chinese-name identity** ("唯一完全喪失中文名身份的主要角色"); 操 has no Chinese name at all, and — unlike everyone else — this is explicitly framed as the *opposite* mechanism (feudal-family-imposed, not imperial: "不是帝國強加，而是被祖先封建傳統永久綁定"); 東雲一族 (Hanako/Akiho/Airi) use 東雲 as their real surname directly with no separate alias, a third distinct naming pattern; 白銀朔/莫浩然 is framed as a *third* distinct naming logic (bureau codename vs Alpha-name, not Beta-anime-name vs Alpha-name like the others); 刑思/葉語彩 entry expands P1-WORLD-13's brief mention (reading "Keishi" = Cantonese "思螢," self-naming replacing the host personality's identity).
- semantic_role: definition (full data table with unique per-row symbolic annotations)
- primary_home: `#appendix-b`
- duplicate_locations: P1-WORLD-13 (compressed rationale-preview, complementary not duplicate)
- classification: unique
- refactor_risk: high — the per-name symbolic annotations (Fei having no name at all, Sou's reverse mechanism, Rin being the "only one" who lost her Chinese identity) are precise character-defining facts a table-simplification pass could strip to bare name-pairs.
- proposed_treatment: KEEP_AS_IS verbatim; this table is the PRIMARY destination — if merging, P1-WORLD-13 should link here, not vice versa

### `<script>` blocks (lines 11835–12246)

**P1-JS-01**
- source_location: 11835–11940 (sidebar scroll/active-highlight + image lightbox)
- short_factual_payload: Pure UI behavior (smooth-scroll, IntersectionObserver active-link highlighting, `<dialog>`-based lightbox reading `data-title`/`data-desc`). No reader-facing content; code comments are functional labels only.
- semantic_role: N/A (pure mechanism)
- classification: N/A
- refactor_risk: low
- proposed_treatment: N/A — confirmed no embedded reader content

**P1-JS-02**
- source_location: 11941–11996 (auto-wrap sections into collapsible `<details>` + timeline jump/flash-scroll)
- short_factual_payload: `defaultOpen = ['what','why','theme','world']` — a structural fact determining which 4 sections are open-by-default on page load (the intended "most essential first read" set, consistent with the reader-dashboard framing at line 4535). `flashAndScroll` implements the `data-jump-to` highlight-pulse referenced by Part 1's CSS `.timeline-event.target-flash` rules (~line 3522).
- semantic_role: structural configuration (not prose content)
- refactor_risk: low, but flagged
- proposed_treatment: no ledger content-entry needed, but flag for whoever manages reader-map/first-read-order consistency — if the intended first-read section set changes, this array must be updated in lockstep
- destination: cross-reference only

**P1-JS-03**
- source_location: 11997–12033 (mobile nav toggle)
- short_factual_payload: Pure UI behavior, aria-label toggling. No content.
- semantic_role: N/A
- refactor_risk: low
- proposed_treatment: N/A

**P1-JS-04**
- source_location: 12035–12119 (`TERMS` tooltip glossary array — auto-annotates first occurrence of each term)
- short_factual_payload: **Major content-bearing data source.** A 29-entry glossary array providing independently-worded tooltip definitions for major terms and characters (心之器/情緒管理局/情緒力量裝置/Emo-Visor/維多利亞之淚/維多利亞天使/魔法少女/魔法屍骸/集體潛意識/情緒守恆定律/緋潮/奇蹟/情緒結晶/情緒病毒/Alpha線/Beta線/鏡像法則/金魚雷達/晴香/菲/美夜子/紫音/操/凜/秋穗/花子/愛莉/朔/語彩/刑思/解離兵器). Each tooltip is a separately-authored short definition, not copy-pasted from body text. One literal duplicate: 心之器 appears twice (both →`#law-vessel`), functionally harmless but semantically redundant. Several character tooltips state facts not found elsewhere in this agent's range: e.g. 秋穗="原諒永遠到不了她；主線最終永久困於無臉循環" (specific ending-state claim); 愛莉="早已原諒母親，但這份原諒永遠到不了秋穗" (a matched-pair fact split across two array entries, found only here); 紫音's tooltip gives the most concise single-sentence version of her gang-betrayal causal chain (cross-refs P1-WORLD-14).
- semantic_role: definition (glossary data source, cross-cutting annotation layer)
- primary_home: inline JS (no single HTML section owns it — it annotates the whole body)
- duplicate_locations: multiple entries are intentional_reminder/incremental_explanation of main-body facts (e.g. Akane vs P1-WORLD-14, 維多利亞天使 vs P1-WORLD-07); one literal internal duplicate (心之器)
- classification: mostly unique (independently worded); some intentional_reminder
- refactor_risk: **very high** — if this array is not discovered/audited during a refactor (easy to miss, deep in a `<script>` tag), any restructuring that changes anchor IDs (`#world-epd`, `#law-vessel`, `#mahou`, etc.) will **silently break every tooltip link** with no visible error. The Akiho/Airi matched-pair "forgiveness never reaches her" fact could also drift out of sync with the main body if only one side is edited.
- proposed_treatment: FLAG_FOR_AUTHOR — treat as a parallel content surface requiring its own audit pass whenever anchor IDs change or facts are revised in the main body; COMPRESS the duplicate 心之器 entry; do not assume this is "just decoration"

**P1-JS-05**
- source_location: 12121–12213 (`characterTooltips` + `characterNames` auto-linking script)
- short_factual_payload: A **second, separate** glossary structure — `characterTooltips` (14 entries: haruka/miyako/fei/keishi/sou/akane/rin/saku/akiho/airi/hanako/hotaru/sayo/hikaru) supplies hover-titles for `#c-` links AND auto-links bare character-name text. This is a **third** independently-worded description surface (alongside the main character cards [out of this agent's range] and the TERMS array). Facts found **only** in this array within this agent's assigned scope: keishi="6 歲目睹姐姐螢被殺，人格分裂 40 年" (a specific trigger age); hotaru="刑思最親愛的姊姊（無血緣）。被靈樹戰爭武器殺死，靈魂完全消散" (explicitly NOT blood-related to Keishi despite "姊姊" framing, AND her soul has **completely dispersed** — not recoverable, not a corpse, not preservable — a high-stakes fact about a name-checked-but-otherwise-undetailed character); sayo="操的管家，用一生無聲陪伴卻無法說出女性真相" (an entirely unique character, not covered anywhere else in this agent's range); hikaru="8-10 歲純真小男孩，屍骸襲擊成為紫音崩潰被導向的起因" (names the exact child victim triggering Akane's breakdown, the most specific version of the causal chain also referenced in P1-JS-04 and P1-WORLD-14). `characterNames` additionally auto-links bare-text character-name occurrences anywhere in the body — a structural/functional dependency, not just a tooltip source.
- semantic_role: definition (third independently-worded character-glossary source) + structural auto-linking dependency
- primary_home: inline JS (cross-cutting)
- duplicate_locations: haruka/miyako/fei/keishi/sou/akane/rin/saku/akiho/airi/hanako entries are incremental_explanation/near_duplicate of P1-JS-04 and (out-of-range) main character cards
- classification: unique for hotaru/sayo/hikaru (likely their only appearance with these specific facts, pending cross-check against the character-card range owned by a different agent); near_duplicate for the rest
- refactor_risk: **very high** — a third parallel content surface describing the same characters; Hotaru's "soul completely dispersed / not blood-related" fact, Sayo's entire character concept, and Hikaru's specific role may be documented **only here** in the whole file. None of this renders as visible page content (only as hover behavior), so a refactor could delete it without any visual symptom.
- proposed_treatment: FLAG_FOR_AUTHOR — strongly recommend cross-checking hotaru/sayo/hikaru against the main character-card section (owned by the character-range sub-agent); if confirmed as the only source, treatment should be RELOCATE (promote to visible character-card content), not left invisible in JS. The other 11 entries are lower-priority MERGE/COMPRESS candidates against the TERMS array, once cross-checked against the main character cards.
- destination: main character-card section (cross-team dependency — flag to the character-range agent)

**P1-JS-06**
- source_location: 12216–12239 (`addMobileTableLabels`)
- short_factual_payload: Pure structural/accessibility code — copies existing `<thead>` text into `data-label` attributes for the CSS mobile table-to-card transform (`td[data-label]::before` rule, ~line 4362). No independently-authored content.
- semantic_role: N/A (pure mechanism, derives from existing content)
- refactor_risk: low
- proposed_treatment: N/A — confirmed no new content

---

## C. Duplication Clusters (re-scanned within this agent's range)

This is a **re-scan**, not an assumption that prior clusters (群A–G) are complete or correctly assigned. Clusters found within this agent's scope:

**Cluster 1 — 奇蹟/奇蹟反應 two-naming** (folk "奇蹟" vs bureau "奇蹟反應"): appears at P1-WORLD-01 (`#world-miracle`), P1-WORLD-08 (bureau card), P1-LAW-11 (law-miracle card). Classification: intentional_reminder (3×, legitimate — reinforces a central irony at three different reading depths). Treatment: KEEP all three; do not merge, the repetition is load-bearing rhetoric, not accidental duplication.

**Cluster 2 — 唯識宇宙 CDL-248 axiom + Alpha/Beta access table**: full version at P1-APPENDIX-01, compressed restatement at P1-APPENDIX-02, chain-steps/table repeated again inside P1-APPENDIX-03. Classification: intentional_reminder / near_duplicate. Treatment: MERGE P1-APPENDIX-02 and the redundant portions of P1-APPENDIX-03 into P1-APPENDIX-01; keep Airi's L2 cardboard-knight fact and the Emotion Link mechanic (unique, inside P1-APPENDIX-03) as separate content.

**Cluster 3 — CDL-271 靈魂困禁 (魔法屍骸 mechanism)**: base definition + Alpha/Beta comparison table appears at P1-WORLD-11 (`#world-corpse`) and again at P1-APPENDIX-06 (Appendix A). Classification: near_duplicate for the base facts; the Appendix A copy additionally contains 3 unique mechanics (可逆轉時限/越掙扎越易斷/靈魂走咗幾遠) not present in the `#world-corpse` version. Treatment: MERGE the duplicated base definition into one location (recommend keeping the fuller Appendix A version as primary since it has more detail, with `#world-corpse` linking to it), but do NOT lose the reversibility-window and struggle-worsens mechanics regardless of which becomes primary.

**Cluster 4 — 渴求溫暖卻毀滅溫暖 / 燈塔效應(CDL-064)**: appears verbatim-ish at P1-WORLD-11, P1-MAHOU-08 (`#world-lighthouse-effect`), and P1-APPENDIX-06. Classification: intentional_reminder — this is a 3-location pattern (technical/summary/appendix) similar to Cluster 1. Treatment: KEEP all three; each serves a different reading depth (technical explanation in world-corpse, reader-facing summary in the lighthouse-effect card, full appendix restatement).

**Cluster 5 — 心理學對照 (psychological-embodiment mapping)**: partial tables/mentions at P1-LAW-02 (`#why`), P1-MAHOU-09 (`#mahou`, Jungian stages), and the full consolidated table at P1-DEPICT-05 (`#psych-map`). Classification: intentional_reminder, but currently *fragmented* rather than cleanly pointing to one canonical table. Treatment: MERGE candidate — recommend P1-DEPICT-05 (`#psych-map`) as the canonical destination; the other two locations could each retain a one-line pointer instead of re-deriving the mapping.

**Cluster 6 — 維多利亞天使/idol-origin "NOT an official idol system" clarification**: appears at P1-WORLD-03 (市民眼中的世界, twice within the same subcard as two separate author-notes) and again as its own anchor-card at P1-WORLD-07 (`#world-idol-origin`), and is cross-referenced by the TERMS glossary (P1-JS-04) and an inline `<abbr>` tooltip in the body. Classification: intentional_reminder / near_duplicate, but HIGH anchor-dependency risk — `#world-idol-origin` is a link target used elsewhere. Treatment: KEEP `#world-idol-origin` as the anchor-stable canonical location; the `market-view` mentions in P1-WORLD-03 could be trimmed to a pointer, but only after confirming no other content depends on reading the fuller version inline.

**Cluster 7 (NEW — not previously identified in the prior audit, per this re-scan) — Three independently-worded character-description surfaces**: (a) main character cards [out of this agent's range], (b) the `TERMS` glossary's character entries (P1-JS-04), (c) the separate `characterTooltips` object (P1-JS-05). These are not simple duplicates — each is independently authored and in at least 3 cases (Hotaru/Sayo/Hikaru) the `characterTooltips` object may hold the ONLY copy of a fact anywhere in the document. This cluster was likely missed in a prior audit pass because it lives entirely inside `<script>` tags and produces no visible rendered content of its own (only hover behavior) — exactly the kind of content a page-reading (not code-reading) audit would skip. Treatment: FLAG_FOR_AUTHOR as a cross-cutting concern; requires coordination with whichever agent owns the character-card range to determine whether RELOCATE (promote invisible-JS-only facts to visible content) is needed before any refactor of anchor IDs proceeds.

**Cluster 8 (NEW) — IG Chronicle 4-phase list**: appears at P1-DEPICT-01 (`#depiction`, no act-mapping) and P1-GAME-07 (`#game-narrative`, WITH act-mapping added). Classification: incremental_explanation (not pure duplicate — the second location adds information). Treatment: if merging, keep the act-mapping detail; do not simply delete one copy.

**Cluster 9 (NEW) — 社會風評/reputation arc**: mentioned as a table-row in P1-LAW-01 (`#what`, one line per stage) and given full detail with concrete mission examples in P1-GAME-05 (`#game-reputation`). Classification: intentional_reminder (compressed preview vs full version, same pattern as several others). Treatment: KEEP both — `#what`'s version is a legitimate reader on-ramp.

**Correction to a possible prior assumption**: this agent found NO evidence that the "七法則" diagram/QA-preview (5808–5869) and the full law-cards (5828–5942, P1-LAW-11) should be treated as accidental duplication — they are clearly two intentionally-designed reading depths (visual-compressed skim vs full technical reference) built by the site's own "Visual compressed v8" CSS pass (see CSS section, ~line 2717). Any refactor plan that assumed the compressed diagram was redundant flavor added on top of the "real" law-cards would be wrong — deleting the diagram would remove the only skimmable entry point in the section, and deleting the law-cards would remove the only place the mirror-law scope-limits and the armor-as-debt reframe exist.

---

## D. Coverage Table (100% confirmation)

| Range | Lines | Status | Notes |
|---|---|---|---|
| Head/CSS | 1–4432 | ✅ Fully read | Confirmed no reader-facing prose hidden in CSS comments (2 dev/version-history notes found, not content) |
| Body open + 01 入門理解 | 4433–5034 | ✅ Fully read | `#what`/`#why`/`#directing`/`#theme` |
| 02 世界與系統 (世界觀速覽) | 5035–5801 | ✅ Fully read | `#world` incl. all district cards, dark-layer factions, name system |
| 世界如何運作 (七個核心法則) | 5802–5943 | ✅ Fully read | Diagram, QA, and full law-cards all read |
| 隱藏機制 | 5944–5981 | ✅ Fully read | `#hidden-mechanisms` |
| 魔法少女設定 | 5982–6526 | ✅ Fully read | `#mahou`, incl. all `<details>` full-text expansions |
| 她們如何存在 | 6527–6797 | ✅ Fully read | `#depiction`, `#psych-map` |
| — (out of scope) | 6798–11040 | ⛔ Not read (out of assigned scope — owned by other agents: character cards, 人物關係, 六階段故事, 時間線, 結局) | Not claimed as covered |
| 遊戲系統設計 | 11041–11355 | ✅ Fully read | `#game`, `#game-system`, `#game-combat`, `#game-beatloop`, `#game-ui`, `#game-value`, `#game-reputation`, `#game-items`, `#game-narrative` |
| 附錄 A | 11362–11762 | ✅ Fully read | `#appendix`, incl. the full-width CDL-248 diagram and all `<details>` full-text expansions |
| 附錄 B | 11763–11832 | ✅ Fully read | `#appendix-b` |
| `<script>` blocks | 11835–12246 | ✅ Fully read | All 6 script blocks through end of file (`</html>`) |

No section within this agent's assigned scope was sampled, skimmed by heading only, or extrapolated from structural similarity. Every `<details>` full-text expansion within scope was opened and read, not assumed identical to its summary. The two out-of-scope gaps (6798–11040, and everything belonging to character cards/relationships/story-stages/timeline/ending regardless of line number) are explicitly named above and were not touched, per the task's scope boundary — they are owned by other agents and are not claimed as "read" here.
