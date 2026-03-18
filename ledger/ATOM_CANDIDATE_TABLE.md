# ATOM CANDIDATE TABLE — P4 Master Output
Generated: 2026-03-18
Phase: P4 Atom Candidate Extraction — COMPLETE
Total Candidates: 185 (CA: 91 / SB: 57 / SC: 37)

---

## (1) SCOPE CONFIRMATION

| Parameter | Value |
|-----------|-------|
| Source documents | 79 files (全範圍：canon/ + backup/ + art/ + root/) |
| Canon baseline | CAN-01 to CAN-24 (24 files) → ATOM_CANDIDATES_A.md |
| Backup SW+DIR | SCR-01 to SCR-17, DIR-01 to DIR-10 (27 files) → ATOM_CANDIDATES_B.md |
| Other (Draft+Art+Root) | DFT-01–06, OAR-01–11, ARC-01, GP-01, META-01, ART-01–05, ROOT-01–03 (28 files) → ATOM_CANDIDATES_C.md |
| Skipped (justified) | META-01 (navigation only), DFT-03 (chapter nav only), ROOT-03 (empty), ART-04/ART-05 (fully duplicated by CAN-20) |
| Author authorization | Q-001 RESOLVED 2026-03-18 — scope C（兩者都處理）→ 全範圍 |
| CandidateID prefixes | CA- (canon), SB- (backup SW+DIR), SC- (draft+art+root) |

---

## (2) ASSUMPTIONS & LIMITS

1. **No judgment performed.** P4 extracts candidates only. Every extracted item is provisional until P5 Author Gate.
2. **Conservative grain.** Each atom = one distinct narrative unit (fact, rule, event, relationship, theme claim, or visual spec). Compound facts that cannot be split without losing meaning are kept together.
3. **Full traceability.** Every candidate cites DocID.SectionID. All raw quotes are copied verbatim from SECTION_TABLES source files; none are paraphrased or reconstructed.
4. **Canon as comparison baseline.** CAN-01 to CAN-24 are treated as the current authoritative layer. SB- and SC- candidates are cross-referenced against CA- entries and flagged as duplicates or new content accordingly.
5. **CF-T decisions respected.** CAN-24 (Decision Log) records all CF-T conflict resolutions. Backup files predating CF-T decisions are noted as potentially superseded; the specific atoms affected carry Possible Conflict With references to the relevant CAN-24 section.
6. **Name variants not resolved.** Q-004 (Misao/Sou, Aeri/Airi) remains BLOCKED. Both name forms appear in the table as-is from source documents; no unification has been applied.
7. **Hallucination prevention.** All atoms were extracted in the same agent session that read the source SECTION_TABLES files. No cross-session context handoff. All raw quotes were spot-checked against source files before write.
8. **[INFER] column:** No candidate is marked [INFER]=Yes without explicit source support. Interpretation-type entries that extrapolate beyond raw text are marked Nature=Interpretation or Nature=EmotionalReading, not [INFER]=Yes.

---

## (3) ATOM CANDIDATE TABLE

Full tables are stored in three files. Do not edit these files directly — use P6 Write-back after P5 Author Gate.

| File | Prefix | Count | Source |
|------|--------|-------|--------|
| [ledger/ATOM_CANDIDATES_A.md](ATOM_CANDIDATES_A.md) | CA- | 91 | SECTION_TABLES_CAN.md |
| [ledger/ATOM_CANDIDATES_B.md](ATOM_CANDIDATES_B.md) | SB- | 57 | SECTION_TABLES_BACKUP_SW_DIR.md |
| [ledger/ATOM_CANDIDATES_C.md](ATOM_CANDIDATES_C.md) | SC- | 37 | SECTION_TABLES_OTHER.md |
| **Total** | | **185** | |

### Type Distribution (cross-group estimate)

| Type | Examples |
|------|---------|
| ThemeClaim | CA-0002, CA-0003, SB-0001, SB-0002, SB-0016, SB-0021, SB-0042 |
| Rule | CA-0004, CA-0005, CA-0006, CA-0008, CA-0010, CA-0012, SC-0004 |
| Character | CA-0019–CA-0065 (per-character atoms), SB-0005–SB-0035, SC-0005–SC-0030 |
| Relationship | CA-0015, CA-0016, CA-0017 |
| World | CA-0011, SB-0014, SB-0018, SB-0019 |
| Event | SB-0022, SB-0023, SB-0024, SC-0002, SC-0007, SC-0008 |
| Reveal | CA-0013, CA-0017, SC-0001, SB-0040 |
| VisualDirection | SC-0009, SC-0010, SC-0011, SC-0016, SC-0019, SC-0020 |
| Object | SC-0015, SC-0017, SC-0022 |
| Dialogue | SB-0036 |

### Needs Author Decision = Yes (flagged atoms summary)

| CandidateID | Issue | Priority |
|-------------|-------|----------|
| SB-0036 | CONFLICT: "共振地獄/Resonance Hell" vs CAN-24-S11 "情緒結算儀式" rename | HIGH — direct conflict |
| SC-0002 | CONFLICT: DFT-01 chart claims both Hanako+Miyako died simultaneously in Alpha; CAN-17 implies sequential | HIGH — timeline integrity |
| SB-0028 | Two Rin raw quote variants (SCR-03.S01 vs SCR-07.S07); author must canonize one phrasing | MEDIUM |
| SB-0017 | "Soul Traversal" as distinct named mechanic not listed in CAN-03-S05 | MEDIUM |
| SB-0019 | Sin-Eaters / Dream Weavers / Emotion Gourmets organizations not in CAN by name | MEDIUM |
| SB-0022 | Day 10 / Day 13 specific schedule anchors within Horror House arc not in CAN-18-S06 | MEDIUM |
| SB-0027 | Yuu left-hand interception mechanic + post-integration behavioral change not in CAN-16 | MEDIUM |
| SB-0033 | "Crimson Storm" (緋雨) named form for Aeri not in CAN-10-S03 | MEDIUM |
| SB-0039 | "Echo" (餘響) named terminal state not in CAN-20 lifecycle table | MEDIUM |
| SB-0025 | "Attitude Deprivation" framing + raw quote not in CAN-05 | MEDIUM |
| SB-0029 | Kurokanae Cantonese raw quote not in CAN-11-S05 | MEDIUM |
| SB-0031 | Akane raw quote + emotional formulation richer than CAN-12 | MEDIUM |
| SB-0032 | Spider/swan raw quote for Sou not in CAN-13 | MEDIUM |
| SB-0037 | "Unsanctioned Salvation" as named concept not in CAN | LOW |
| SB-0040 | "This is not Miyako's curse, this is Haruka's wish" — key reframing not in CAN-06 or CAN-03 | MEDIUM |
| SB-0041 | Raw quote "完美但無感覺 = 比地獄更可怕" not in CAN-13 | MEDIUM |
| SB-0042 | Specific resonance-plan logic raw quote not in CAN-11 | MEDIUM |

---

## (4) CANDIDATE RISK NOTES

### RISK-01 — RESOLVED (2026-03-18)
**SB-0036 vs CAN-24-S11**
- 作者裁決：選項 A — Raw quote「這不是報復，這是『絕對的互不侵犯條約』。」有效保留。
- P6 指示：整合此 quote 時統一使用「情緒結算儀式」命名框架，不再使用「共振地獄」術語。

### RISK-02 — RESOLVED (2026-03-18)
**SC-0002 vs CAN-17.S02**
- 作者裁決：選項 A — Alpha 線中花子與美夜子**同時死亡**，DFT-01 chart 確認為正確。
- P6 指示：CAN-17 及相關文件如有需要，可補充「同時死亡」細節以與 DFT-01 chart 一致。

### RISK-03 — DUPLICATE RAW QUOTE (minor, low urgency)
**SB-0009 vs SB-0028** (both Rin throat/voice quotes)
- SB-0009 (SCR-03.S01): "她本來想用聲音救人，最後卻只剩下一條被扭斷、再也唱不完的喉嚨。"
- SB-0028 (SCR-07.S07): "她本來想用聲音救人，最後卻連自己的聲音都留不住。"
- Risk: Two variants circulate; using wrong one in write-back creates inconsistency.
- Resolution path: Author picks canonical phrasing for rin.md.

### RISK-04 — NEW NAMED CONCEPTS NOT IN CANON (integration candidates)
The following backup/draft atoms introduce named concepts not present in canon documents. They are not conflicts, but require author decision on integration:
- SB-0019: Sin-Eaters, Dream Weavers, Emotion Gourmets
- SB-0033: Crimson Storm (緋雨) — Aeri named form
- SB-0039: Echo (餘響) — named terminal magical girl state
- SB-0025: Attitude Deprivation — named Haruka curse pattern
- SB-0037: Unsanctioned Salvation — named thematic concept
- SB-0017: Soul Traversal — named Kurokanae mechanic
- SB-0027: Left-hand interception — Yuu-in-Haruka behavioral mechanic

### RISK-05 — HIGH-VALUE CANTONESE QUOTES NOT YET IN CANON
These carry strong character voice and are not in current canon character sheets. High integration value for P6:
- SB-0026: 夕 — "妳對佢哋就咁好。"
- SB-0029: 黑奏 — "我想睇妳崩，但我又比任何人都更想妳唔好崩。"
- SC-0021: 朱音 — "晴香，妳今天的悲傷...食落去好似過期嘅士多啤梨牛奶。"
- SC-0022: 朱音 — "呢個係我嘅晚餐，要加調味先好食。"
- SB-0042: 黑奏 — "如果我打你一拳，我的神經系統會即時收到同等的痛覺訊號，那我就物理上無法再打你。"

---

## (5) PRELIMINARY CLUSTERS

Thematic groupings for P5 Author Gate organization. Not canon decisions — illustrative only.

### Cluster 1 — 世界物理規則 (World Physics)
CA-0005 (Trinity Spectrum), CA-0006 (magic cost), CA-0007 (Alpha/Beta definition), CA-0008 (Emotion Conservation), CA-0009 (world immune response), CA-0010 (corpse irreversibility), CA-0012 (healing failure types), SB-0013 (Spectrum as continuous), SB-0016 (Emotion Conservation Law phrasing), SB-0038 (immune-cell metaphor)

### Cluster 2 — 晴香弧 (Haruka Arc)
CA-0001 (logline), CA-0002 (Dark Healing theme), CA-0003 (attitude not winning), CA-0019 (Haruka central paradox), CA-0020 (5-year-old wish event), CA-0021 (Static Cradle ending), SB-0005 (5-year-old wish with raw quote), SB-0025 (Attitude Deprivation curse), SC-0010 (Ontological Assimilation visual), SC-0011 (Act IV integration visual), SC-0012 (anxiety sleeve tell)

### Cluster 3 — 黑奏 / 彩弧 (Kurokanae + Aya Arc)
SC-0001 (Kurosou = Haruka's future negative power), SB-0006 (Kurokanae as protector-alter), SB-0029 (love-hate raw quote), SB-0036 (Resonance Hell/Settlement Ritual conflict), SB-0042 (resonance mechanics raw quote), SB-0017 (Soul Traversal mechanic), SC-0005 (148cm true body reveal), SC-0006 (Alpha corpse confrontation dialogue), SC-0015 (Aya bear plush), SC-0016 (kaleidoscope embroidery)

### Cluster 4 — 美夜子弧 (Miyako Arc)
CA-0023 (Unit 01 status), CA-0024 (Shelter Curse), CA-0025 (Rin/PTSD link), CA-0026 (Miyako ending), SB-0007 (held in Beta by Haruka's wish), SB-0040 ("This is Haruka's wish" reveal), SC-0013 (cat form star clip), SC-0014 (dual MP7A1 PTSD weapon)

### Cluster 5 — 凜弧 (Rin Arc)
CA-0060+ (fan suicide Alpha wound), CA-0061+ (destiny displacement), CA-0062+ (halo execution), CA-0063+ (emotional imprint rule), CA-0064+ (no final words), SB-0009 (broken throat quote v1), SB-0028 (broken throat quote v2 — needs canonization), SB-0039 (Echo named terminal state)

### Cluster 6 — 夕弧 (Yu Arc)
CA-0056+ (shadow-self identity), CA-0057+ (audio production rule), CA-0058+ (unconscious farm reveal), CA-0059+ (Reality Change takeover), SB-0008 (cosmological grief), SB-0026 (jealousy Cantonese quote), SB-0027 (left-hand interception mechanic)

### Cluster 7 — 朱音弧 (Akane Arc)
CA-0046+ (Alpha wound 5-step), CA-0047+ (Ko Hikaru trigger), CA-0048+ (last words), SB-0031 (giving-kills raw quote), SB-0034 (door-watching behavioral habit), SC-0021 (taste-synesthesia strawberry milk), SC-0022 (seasoning tin ritual)

### Cluster 8 — 操 / 綾小路弧 (Sou/Misao Arc)
CA-0051+ (Alpha wound 5-step), CA-0052+ (Steel Solo last words), CA-0053+ (Bridge of Sighs last words), SB-0032 (spider/swan raw quote), SB-0035 (cat-doll only non-performing time), SB-0041 (puppet-no-sensation raw quote), SC-0003 (bucket list group photo — likely Sou)

### Cluster 9 — 愛莉弧 (Airi/Aeri Arc)
CA-0040+ (gatekeeper rule), CA-0041+ (exploitation relationship), CA-0042+ (paper armor meaning), SB-0010 (Aeri → Airi name note), SB-0033 (Crimson Storm named form), SC-0009 (crystallization color spec), SC-0020 (Paper Knight visual)

### Cluster 10 — 秋穗弧 (Akiho Arc)
CA-0043+ (Airi accident causal wall), CA-0044+ (Faceless Executor reveal), SB-0012 (grief bargaining stage), SC-0018 (mimicking Hanako vocal patterns), SC-0019 (Faceless Executor visual spec — face dissolves to starlit void)

### Cluster 11 — 地點 / 世界觀 (Location + World-Building)
CA-0011 (Victoria City Sun/Night division), SB-0014 (Day Zone false perfection), SB-0018 (folk tech: Goldfish Radar, Florida Water, etc.), SB-0019 (Sin-Eaters / Dream Weavers / Emotion Gourmets), SC-0006 (Alpha corpse space-tear)

### Cluster 12 — 生產規則 (Production Rules)
CA-0004 (narrative promises), CA-0014 (no trauma deletion rule), SB-0003 (four-act as three-act), SB-0004 (Dark Healing definition), SC-0004 (chapter placement rules)

---

## (6) AUTHOR-GATE PREP NOTES

P5 Author Gate must address the following before P6 Write-back proceeds:

### Gate-A — CONFLICT RESOLUTION (mandatory, blocks P6)
1. **SB-0036 (RISK-01):** "共振地獄" raw quote — retain under "情緒結算儀式" framing, reframe, or deprecate?
2. **SC-0002 (RISK-02):** Hanako Alpha-timeline death moment — simultaneous with Miyako, or separate?

### Gate-B — NAMED CONCEPT INTEGRATION (author decides per item)
For each item below, author chooses: (a) integrate into canon doc, (b) keep in backup layer only, (c) deprecate.
- SB-0019: Sin-Eaters / Dream Weavers / Emotion Gourmets
- SB-0033: Crimson Storm (緋雨) — Aeri
- SB-0039: Echo (餘響) — terminal state
- SB-0017: Soul Traversal — Kurokanae mechanic
- SB-0027: Yuu left-hand interception + post-integration behavior
- SB-0025: Attitude Deprivation — Haruka pattern
- SB-0037: Unsanctioned Salvation — thematic concept

### Gate-C — RAW QUOTE CANONIZATION (author picks one phrasing)
- Rin throat quote: SB-0009 vs SB-0028 — which version for rin.md?

### Gate-D — CANTONESE QUOTE INTEGRATION (high value, low risk)
No conflicts; author simply decides whether to integrate into character sheets:
- SB-0026 (夕), SB-0029 (黑奏), SC-0021 (朱音), SC-0022 (朱音), SB-0042 (黑奏)

### Gate-E — NAME UNIFICATION (Q-004, RESOLVED 2026-03-18)
- **Misao（操）係真名**，Sou 係別名／舊稿用法。
- **Aeri 係真名**，Airi 係別名／舊稿用法。
- P6 任務：**完全替換**——CAN 文件中所有 Sou→Misao、Airi→Aeri，包括文件名、標題、內文，不保留別名。
- 所有 SB- 條目使用 Misao/Aeri 為正確。

### Total flagged for author decision: ~29 items (all Needs Author Decision = Yes rows across A/B/C)

---

## (7) LEDGER UPDATE SUMMARY

| Item | Status |
|------|--------|
| P4 phase | COMPLETE |
| ATOM_CANDIDATES_A.md | 91 candidates extracted (CA-0001 to CA-0091) |
| ATOM_CANDIDATES_B.md | 57 candidates extracted (SB-0001 to SB-0057) |
| ATOM_CANDIDATES_C.md | 37 candidates extracted (SC-0001 to SC-0037) |
| Total candidates | 185 |
| Conflicts found | 2 (RISK-01, RISK-02) |
| Needs Author Decision = Yes | ~29 items |
| Needs Author Decision = No (duplicates) | ~156 items |
| Q-006 | RESOLVED — P4 authorized and complete |
| SESSION_LEDGER.md | Updated → P4 COMPLETE |
| NEXT_ACTION.md | Updated → P5 Author Gate awaiting author |
| QUESTION_QUEUE.md | Q-006 RESOLVED |
