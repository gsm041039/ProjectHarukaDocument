# DOC_REGISTER
**P3 Canon Intake — 完整文件登錄表**

生成日期：2026-03-18
總文件數：79 份
覆蓋範圍：canon/ + backup/ + art/ + root/

> 本表由實際文件讀取產生，所有摘要均源自文件內容，非推測。
> 各文件之詳細分節見 SECTION_TABLES_*.md。

---

## 統計摘要

| 群組 | 前綴 | 文件數 | Canon Status 分布 |
|------|------|--------|-------------------|
| canon/ 核心文件 | CAN | 24 | 全部 Canon |
| backup/screenwriter/ | SCR | 17 | Backup / Backup(Draft) |
| backup/director/ | DIR | 10 | Backup / Backup(Draft) |
| backup/draft/ (非美術) | DFT | 6 | Draft / Idea Bank / Legacy |
| backup/draft/art_originals/ | OAR | 11 | Backup |
| backup/其他 | ARC/GP/META | 3 | Legacy / Backup |
| art/ | ART | 5 | Draft |
| root/ | ROOT | 3 | Canon / Unknown |
| **合計** | | **79** | |

---

## 欄位說明

- **Reliability**：High（已定稿或接近定稿）/ Med（部分定稿）/ Low（草稿或空文件）
- **Canon Status**：Canon（正本）/ Backup（備份源文件）/ Backup(Draft)（備份草稿）/ Draft（草稿）/ Idea Bank（素材庫）/ Legacy（過時）/ Unknown（不明）
- **Primary Owner**：Character / World / Plot / Scene / Theme / Visual / Gameplay / Mixed / Meta

---

## Group 1 — Canon 核心文件（CAN）

> 這些文件是項目正式 canon 的唯一授權版本。衝突以 CAN-24（Decision Log）為最終仲裁。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| CAN-01 | canon/00_series_bible.md | series_bible | Establishes the project's logline (dark magical girl healing story set in a Hong Kong-inspired dystopia), core themes (Dark Healing, Attitude vs. Fate), visual philosophy (Tender Cruelty, Aesthetics of Flawed), narrative promises, and audience experience targets. Defines the emotional contract with the audience. | Global | Current (Phase 55+) | High | Canon | Author | Root document; all other files serve this logline |
| CAN-02 | canon/01_world_rules_and_costs.md | world_rules | Defines all operative world laws: Trinity Spectrum (human→magical girl→magical corpse), Soul Mechanics (dual-soul, fragmentation, extraction), Magic System (heart container, costs, physiological rejection), Alpha/Beta timeline narrative mechanics, Emotion Conservation Law (scarlet tide, emotional capitalism), World Immune System, and the irreversible rules index. Also contains Alpha Wound 5-step template, healing failure types, and low-tech survival rules. | Global | Current (Phase 55+) | High | Canon | World | Primary rule authority; all other files reference this |
| CAN-03 | canon/02_glossary.md | glossary | Defines 72+ terms across 8 categories: worldview core (Victoria City, Night/Sun District, Alpha/Beta Line), magic system (heart container, halo, shackle mark, transformation mirror), emotion system (emotion conservation, scarlet tide, emotional capitalism, Emo-Visor), magical girl/corpse taxonomy, laws/mechanics (mirror law, reality stitching, physiological rejection), visual laws, character-specific abilities, and philosophy (Dark Healing, Band-Aid Philosophy). | Global | Current (Phase 55+) | High | Canon | Mixed | Terminology hub; all files link here for term definitions |
| CAN-04 | canon/03_character_index.md | character_index | Hub document for 12 main characters (4 magical girls, 3 non-combat core, 5 antagonists/special) and 5 minor character stubs. Contains role/archetype/survival overview table, mermaid relationship diagram, thematic groupings (sub-themes A–D), and minor character entries (Hanako, Hotaru, Sayo, Emperor, Akane's brother). | Global — Characters | Current | High | Canon | Character | Navigation hub linking to all 12 character sheets |
| CAN-05 | canon/03_characters/haruka.md | character | Amemiya Haruka, 17, idol/unknowing creator of Beta timeline. Emotional amplifier and integration candidate. Archetype arc: Savior→Martyr→Bearer. Key mechanics: Alpha wound (lost sister+mother), 5-year-old's wish creating Beta line, integration with Yu shadow self. Final state: "Static Cradle" — consciousness permanently asleep as world emotional filter. 11 behavior hooks defined. Visual arc across 4 acts. | Character — Haruka | Current | High | Canon | Character | Central node; most other files reference her |
| CAN-06 | canon/03_characters/miyako.md | character | Mizunashi Miyako, only truly dead character (Alpha line), revived as Unit 01 military weapon, cursed into black cat form by Haruka's 5-year-old wish. Archetype: Executioner→Farewell Keeper→Guardian. Cursed by Shelter Curse (cannot naturally die). Four-act arc ends with curse broken; fulfills blood oath by shooting Unit 00 (Rin). Happy Ending: dies naturally at ~80 as human, soul scarred but intact. | Character — Miyako | Current | High | Canon | Character | Key relationship node with Haruka, Saku, Rin |
| CAN-07 | canon/03_characters/iroha.md | character | Kagura Iroha (Aya), 40-year-old imprisoned primary personality sharing body with Kurokanae. Appears as transfer student. Archetype: Prisoner→Witness→Redeemer. Final state: eternal time loop protecting her 6-year-old self, preventing infinite Kurokanae instances. Key events: Hotaru's death as trauma origin, devil's contract with Akiho, internal revolution disabling Kurokanae's defense field at Act III climax. | Character — Iroha/Aya | Current | High | Canon | Character | Shares identity with CAN-11 (Kurokanae) |
| CAN-08 | canon/03_characters/saku.md | character | Shirogane Saku, Night District spirit tree guardian and double agent. Miyako's Alpha-line lover (青梅竹馬). Archetype: Avenger→Guardian→Liberator. Survives. Key arc: discovers Unit 01 (Miyako's face on military weapon), works to liberate souls imprisoned by the system. Leads civilian resistance organization with Kirigyu Ken. | Character — Saku | Current | High | Canon | Character | Key relationship with Miyako; leads civilian resistance |
| CAN-09 | canon/03_characters/akiho.md | character | Shinonome Akiho, mad scientist/Haruka's maternal aunt, created the emotional power device prototype that caused Airi's accident. Made devil's contract with Kurokanae (Kurokanae provides means to revive Airi; Akiho cultivates Haruka). Archetype: Mad Scientist→Remorseful Mother→One Who Lets Go. Survives. Revealed as the Faceless Executor in failed timelines. | Character — Akiho | Current | High | Canon | Character | Structural nexus: connects Haruka, Airi, Kurokanae |
| CAN-10 | canon/03_characters/airi.md | character | Shinonome Airi, Akiho's daughter, first artificial magical corpse (stone statue). "Paper Knight" in collective unconscious, gatekeeper of the collective unconscious entry point. Filter mechanism for Emo-Visor emotional waste. Alpha/Beta boundary anchor. Paper armor cracks deepen with each use as gatekeeper. Archetype: Suffering Saint→Unnamed Gatekeeper→Paper Knight. Final state: stone statue with living consciousness. | Character — Airi | Current | High | Canon | Character | Unique mechanical role as collective unconscious node |
| CAN-11 | canon/03_characters/antagonist.md | character | Kurokanae (Black Resonance), protective alter personality born from Aya's trauma at Hotaru's death. Became empire emperor. True motivation (CF-T04): revive Hotaru via Emotional Settlement Ritual. Power source: causal backflow from Haruka's future reality change. Three-stage plan: monetize human pain → accumulate emotional currency → settlement to revive Hotaru. Archetype: Protector→Corrector→Dictator. Dissipates when Aya fills the causal crack with her soul. | Character — Kurokanae | Current | High | Canon | Character | Main antagonist; shares identity with CAN-07 |
| CAN-12 | canon/03_characters/iwakura_akane.md | character | Iwakura Akane, Night District combat addict. Alpha wound: mother's Emo-Visor addiction; brother died from emotion crystal. Anchored by Ko Hikaru; became corpse queen after Ko Hikaru's corpse-transformation. Final act at Bridge of Sighs: self-destructs into candy mountain. Archetype: Addict→Fallen Mother→Burning Penitent. Alpha wound 5-step template applied (CF-T20). | Character — Akane | Current | High | Canon | Character | Paired arc with Sou at Bridge of Sighs |
| CAN-13 | canon/03_characters/ayakomoji_sou.md | character | Ayakomoji Sou, biological female raised as male heir, puppeteer magical girl. Perfectionist driven by fear of exposure. Maid Sayo's death + father's betrayal triggers near-corpse-transformation. Final act: "Steel Solo" self-amputation + puppet wall barricade at Bridge of Sighs. Archetype: Cracked Porcelain→Perfectionist→Authentic Self. Alpha wound 5-step template applied (CF-T21). | Character — Sou | Current | High | Canon | Character | Paired arc with Akane at Bridge of Sighs |
| CAN-14 | canon/03_characters/ko_hikaru.md | character | Ko Hikaru, 8–10 year old Night District schoolboy, Akane's last warm anchor. Corpse-transformed to Type B "废铁型" (scrap metal type). Symbol: lollipop turning black and moldy. His corpse-transformation is the trigger for Akane's full descent. Archetype: Pure One→Sacrifice→Cause of Downfall. | Character — Ko Hikaru | Current | High | Canon | Character | Catalyst for Akane's arc |
| CAN-15 | canon/03_characters/rin.md | character | Ayase Rin, military magical girl #4, Miyako's war companion. Alpha wound (CF-T08): fan suicide event destroyed her idol career. Killed by halo execution; reconstructed by Kurokanae as civil servant with erased memories. Becomes pain devotee ("I hurt therefore I am"). Voluntarily becomes Unit 00-Null. Archetype: Gentle Idol→Perfectionist→Pain Devotee→Voluntary Weapon. Emotional imprint survives memory wipe (CF-T02). | Character — Rin | Current | High | Canon | Character | Key relationship with Miyako; her fate completes Miyako's arc |
| CAN-16 | canon/03_characters/yu.md | character | Yu, Haruka's unconscious shadow-self personality, exists only in Beta line, carries Alpha line memories. Three-stage voice emergence specification: hidden (Act I) → semi-transparent (Act II) → fully manifest (Act III–IV). Final state: integrated with Haruka at climax. Functions as Kurokanae's unconscious emotional farm (unbeknownst to Yu). Archetype: Shadow Self→Inner Voice→Integrated Fragment. | Character — Yu | Current | High | Canon | Character | Internal counterpart to Haruka; integrated at story end |
| CAN-17 | canon/04_timeline_canon.md | timeline | Chronological event log from Empire Year 0 to Year 134+, covering: Shared History (Y0–101), Alpha Divergence (Y102), Beta Pre-history (Y103–112), Main Story Y113–114 (80+ key events with anchor IDs), 20-Year Vigil, Awakening, Final Battle. Includes Critical Scene Index table and Eternal Return section (Aya's loop, Akiho's loop, Haruka's forced ascension). | Global — Events | Current | High | Canon | Plot | Event authority; character sheets and outline link here |
| CAN-18 | canon/05_story_outline_canon.md | outline | Four-act story structure (起承轉合). Contains: four-act overview table, prologue, Act I–IV key events and character arc tables, Silent Voice Interlude, Alpha/Beta deployment timing (3 leakage mechanisms, 4-act intensity table), emotional waveform diagram, key emotional node table, Kurokanae's 5-stage plan, team pressure curve, thematic threads ("Magic as Symptom" framework), Band-Aid Philosophy 4-layer reveal, and player route matrix. | Global — Story | Current | High | Canon | Plot | Story authority; references timeline and character sheets |
| CAN-19 | canon/06_visual_bible.md | visual | Visual philosophy and execution specifications. Covers: Tender Cruelty/What is Real/Aesthetics of Flawed philosophy; 5 core visual laws (Corruption, Entropy, Mirror, Physiological Rejection, plus derived principles); worldview art direction (Imperial Court, Night District, Sun District, Imperial Agents); Magical Girl Visual Language (design contrast table, Halo specs, 3-stage transformation mirror system, corruption 3-stage specs); Character Design Framework; Alpha/Beta dual-line visual language + 4D grammar table (GAP-34/35); Scene Visual Language; Illustration Style Guide; 10+ supplementary visual specs. 920 lines total. | Global — Visual | Current | High | Canon | Visual | Visual authority; character sheets and gameplay reference this |
| CAN-20 | canon/07_entities_and_devices.md | entities | Defines all key prop/device entities. Heart Container section (natural awakening vs. device-forced, Kurokanae/Aya shared heart container, Echo/burnout final state). Magical Corpse visual design (Clockpunk Body Horror philosophy, Type A/B taxonomy, Crying/Denial psychology classification, visual hierarchy system, 6 named variants, 4-way mixed matrix). Organizations, Emo-Visor generational history (Gen 1–3 + black market), device lifecycle table, low-tech survival devices. | Global — Entities | Current | High | Canon | World | Device/entity authority; gameplay and visual bible reference this |
| CAN-21 | canon/08_narrative_design_bible.md | narrative_design | Narrative design rules for scene construction. Contains: Three-Layer Symbolic Analysis framework; Attitude vs. Fate core theme with 4 sub-themes; Dark Healing System (definition, formula, prohibition list); Four-Act atmosphere design; Cost Visibility Principles; Scene Execution Grammar; Four Walls Classification; Four-Beat Scene Template; 4 Narrative Service Channels; Three-Layer Daily Interleave method (trauma-via-behavior protocol, no direct flashback). | Global — Narrative | Current | High | Canon | Theme | Scene/direction authority; companion to Story Outline |
| CAN-22 | canon/09_information_design.md | information_design | Information reveal architecture and key scene execution guide. Contains: 3-layer reveal structure; "Gratitude as Poison" 5-stage reveal; 5 key scene execution specs with Cantonese dialogue, color specs, shot timing (Akane Guillotine / Sou Steel Solo / Sou Perfect Doll / Miyako Three-Stage Awakening / Rin Overdue Ending); Canonical Cantonese dialogue archive (GAP-93/94/95). | Global — Information/Scene | Current | High | Canon | Scene | Scene execution authority; references Timeline and Story Outline |
| CAN-23 | canon/10_gameplay_bible.md | gameplay | Game design specifications. Core loop: Dynamic Intervention System. Empathy Interface. Dual Progression System. Social Reputation System. IG Chronicle. Girl Psychology 6 extended dimensions. Emotion Conservation gameplay mechanics. Fake RPG 4-act evolution. Tactical items. Level design 3-layer system. Player route matrix (efficiency/balance/compassion → ending differentiation). Soul extraction expanded specs. Cinematic camera system. 545 lines total. | Global — Gameplay | Current | High | Canon | Gameplay | Gameplay authority; references world rules, visual bible, entities |
| CAN-24 | canon/99_decision_log.md | decision_log | Canon conflict arbitration log. Phase 1 (CF-001–008). Phase 2 (CF-T01–T30): HIGH resolutions include Rin's pre-trauma personality (CF-T01), emotional imprint survival (CF-T02), Kurokanae's motivation to revive Hotaru (CF-T04), Rin's Alpha wound as fan suicide (CF-T08), Haruka's wish (CF-T09–11), 5-step Alpha wound template (CF-T19), Akane/Sou template (CF-T20/21), Airi as sole artificial anchor (CF-T27). MEDIUM/LOW resolutions include city naming, collective unconscious structure, healing failure classification, visual language, halo execution. 538 lines total. | Global — Arbitration | Current | High | Canon | Mixed | **Supersedes all other files on conflict points** |

---

## Group 2 — Backup: Screenwriter（SCR）

> backup/screenwriter/ — 舊版劇本素材，Canon 的源文件。內容仍有效但可能早於 CAN-24 決議。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| SCR-01 | backup/screenwriter/00_Story_Brief.md | story_brief | High-level story brief: dark magical girl × psychological thriller × existentialist coming-of-age. Core theme: attitude vs fate. Covers genre, tone, protagonist summary, four-act deceptive structure, and dark-healing declaration. | Global / All Acts | — | High | Backup | Theme | Foundation document |
| SCR-02 | backup/screenwriter/01_Character_Background_Story.md | character | Full background stories for main cast: Haruka, Aya/Kurosou, Miyako, Yuu, Akane, Misao. Includes Alpha vs Beta contrast for each. | Character / All Acts | — | High | Backup | Character | Primary source for all main character backstory |
| SCR-03 | backup/screenwriter/02_Secondary_Character_Background_Story.md | character | Background stories for secondary cast: Akane, Misao, Akiho, Aeri, Hanako/Yuu sub-personalities, Sayo, Rin, Saku/Kōran, Kiriyu Ken, the Emperor. Each with motivation, trauma, narrative role. | Character / All Acts | — | High | Backup | Character | Referenced by event analysis and relationship files |
| SCR-04 | backup/screenwriter/03_Worldview_Setting.md | worldview | Comprehensive world rules (1052 lines): Trinity Spectrum, Shadow Sight, Light Veil, the Empire, Victoria City, Tears of Victoria, Emotional Capitalism, Alpha/Beta dual-reality, Emotion Conservation Law, Mirror Law, Low-Tech Survival Culture, Magic Physiological Costs. | World / All Acts | Draft | High | Backup (Draft) | World | Foundation for all worldbuilding |
| SCR-05 | backup/screenwriter/04_Story_Structure_Atmosphere_Events_Deep_Analysis.md | analysis | Deep analysis of core themes and four-act structure. Sub-themes A–D. Alpha/Beta dual-reality overview. Acceptance vs Correction as central conflict. Atmosphere design per act. | Global / All Acts | — | High | Backup | Theme | Analytical companion to SCR-01 |
| SCR-06 | backup/screenwriter/05_Story_Outline_Director_Notes.md | outline | 986-line detailed story outline with director notes. Band-Aid Philosophy. Emotion Conservation as narrative tool. Node-by-node event sequencing across four acts. "恐怖家家酒" sequence, Sighs Bridge arc. | Plot / All Acts | 2026-01-18 | High | Backup | Plot | Primary plot sequence document |
| SCR-07 | backup/screenwriter/06_Character_Psychology_Analysis.md | character | 2150-line exhaustive character psychology: Haruka, Yuu, Miyako, Rin, Kurosou/Aya, Akiho, Saku, Akane, Misao. Alpha/Beta psychological integration table. Full healing spectrum table for all characters. | Character / All Acts | — | High | Backup | Character | Most comprehensive character psychology resource |
| SCR-08 | backup/screenwriter/07_Major_Events_Character_Relationship_Impact_Analysis.md | analysis | 1072-line analysis of 12 major events with per-character emotional impact, relationship change tables, and relationship network diagram. Events 1–12 span all four acts. | Plot / All Acts | — | High | Backup | Plot | Definitive relationship-impact analysis |
| SCR-09 | backup/screenwriter/08_Emotion_Setting_Overview.md | worldview | 862-line unified emotion system: emotion types, Alpha/Beta mechanics, Mirror Law, Emo-Visor evolution, Aeri's Filter Mechanism, Zero Point Leakage, Crimson Tide formation, Collective Unconscious rules. | World / All Acts | Draft | High | Backup (Draft) | World | Primary emotion-system rules reference |
| SCR-10 | backup/screenwriter/09_Character_Senses_Private_Habits_Setting.md | character | 1034-line detailed sensory and private-habits for all major characters. Per-character rituals, compulsions, behavioral hooks, IG habits. Director application guide appended. | Character / All Acts | — | High | Backup | Character | Embodied/behavioral layer; pairs with SCR-07 |
| SCR-11 | backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md | character | 356-line file covering girl psychology in social settings, daily interaction patterns, IG narrative arc (three stages), social reputation dynamics, character-specific social personas. | Character / Acts 1–3 | — | Med | Backup | Character | Social/daily-life layer |
| SCR-12 | backup/screenwriter/11_Deep_Philosophy_Concepts.md | analysis | 781-line deep philosophical concepts: 共振地獄, 未經同意的救贖, 情緒資本主義, 執念飽和度, 世界免疫系統, 永劫回歸, 鏡之真相, 態度剝奪, and others. Each with L1/L2/L3 thematic analysis. | Theme / All Acts | — | High | Backup | Theme | Core philosophical reference |
| SCR-13 | backup/screenwriter/12_Social_Evaluation_Quest_System.md | gameplay | 356-line social reputation and quest system: three-stage arc, Light Veil filter, dual reputation tracks, Corpse Help Mechanism (5 types), 15 example quests, IG narrative sync. | Gameplay / Acts 1–3 | — | High | Backup | Gameplay | Primary gameplay design for social/quest systems |
| SCR-14 | backup/screenwriter/14_Alpha_Beta_Narrative_Mechanics.md | rules | 630-line Alpha/Beta narrative mechanics: philosophical framework, 4 core mechanisms (Synchronization/Naming/Shared Validation/Corpse-ification), Beta Line birth, Causality Backflow, 3 narrative mechanisms (Transformation/Scene Palimpsest/Physiological Leakage), integration ending philosophy. | Rules / All Acts | — | High | Backup | Mixed | Definitive Alpha/Beta mechanics reference |
| SCR-15 | backup/screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md | rules | 477-line magical girl system: Heart Casket rules, two transformation paths, Device key creation, Reality Stitching, Kurosou/Aya shared heart casket, Aya's Soul Lag, Magical Girl final fate "Echo", character special abilities (Haruka/Miyako/Misao/Aeri). | Rules / All Acts | Draft | High | Backup (Draft) | Mixed | Authoritative magical-system rules; canon upgrade target |
| SCR-16 | backup/screenwriter/Magical_Girl_Themes_Detailed_Explanation.md | character_visual | 259-line magical girl theme and visual design: dual-theme design rationale, per-character theme details (Haruka/Miyako/Kurosou/Aya/Akane/Misao), entry motivation comparison table. | Character / All Acts | — | High | Backup | Visual | Visual/thematic design for transformation sequences |
| SCR-17 | backup/screenwriter/Villain_Master_Plan.md | character | 191-line villain master plan for Kurosou: pain privatization logic, Resonance Hell 3-phase plan, Data Farming Plan, Cross-Timeline Energy Harvest, Disguise as Aya, Yu as unwitting energy farm. | Character / All Acts | — | High | Backup | Plot | Definitive villain motivation document |

---

## Group 3 — Backup: Director（DIR）

> backup/director/ — 導演層素材，部分與 canon/08_narrative_design_bible.md 及 canon/09_information_design.md 有重疊。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| DIR-01 | backup/director/00_Story_Director_Handbook_Draft.md | director_notes | 172-line director handbook draft: directing principles, 4-act deceptive structure, 3-layer pyramid, character psychological presentation, magic system directing intent, key motif objects (cola/guitar/sketchbook/pendant/mirror), event storyboard table (Events 1–11). | Direction / All Acts | Draft | High | Backup (Draft) | Mixed | Top-level directing handbook |
| DIR-02 | backup/director/01_Creative_Core_Principles.md | director_notes | ~200-line creative core principles: Dark Healing Declaration, 3 key healing moments, sub-theme healing interpretation table, dark-healing prohibitions, Attitude vs Fate, Band-Aid Philosophy 3-layer structure. canon_target: CAN-01 + CAN-21. | Direction / Global | Draft | High | Backup (Draft) | Theme | Core creative principles; series bible equivalent |
| DIR-03 | backup/director/02_Alpha_Line_Integration_Guide.md | director_notes | ~180-line Alpha line integration director guide: Scene Palimpsest (3 phases), per-character visual designs, Transformation Glitch pollution specs, Mirror Truth (3 techniques), audio design (Environmental sound leakage, per-character audio palettes). | Direction / All Acts | — | High | Backup | Visual | Alpha-line visual/audio technical implementation |
| DIR-04 | backup/director/Character_Atmosphere_Director_Handbook_Four_Act_Structure.md | director_notes | 494-line character atmosphere handbook: per-act character atmosphere tables, per-act gameplay evolution, detailed scene director notes for Act 3 key scenes (Akane Guillotine / Misao Iron Solo / Misao Perfect Doll / Miyako Three-Stage Awakening), Aya gradual-reveal hint design, Act 4 integration ending design. | Direction / All Acts | — | High | Backup | Mixed | Most detailed per-scene directing guide |
| DIR-05 | backup/director/Core_Characters_Symbolism_Analysis.md | director_notes | Short symbolic object analysis: Cola (Haruka, 4 stages L1/L2/L3) and Guitar (Haruka, 4 stages L1/L2/L3). Sketchbook/pendant/mirror entries noted as pending. | Direction / All Acts | — | Med | Backup | Visual | Symbol/motif reference; **incomplete** |
| DIR-06 | backup/director/Information_Control_Audience_Experience_Design.md | director_notes | 111-line information control design: Sync→Mislead→Co-discover→Eternal Gap strategy, reveal planning tables covering world rules, character secrets, relationship dynamics, Emotion Conservation layered reveal, social reputation, Haruka-created-magic-world truth reveal (Items 1–36). | Direction / All Acts | — | High | Backup | Plot | Master information-control timing document |
| DIR-07 | backup/director/Major_Events_Character_Relationships_Analysis.md | director_notes | 81-line director analysis of major events: L1/L2/L3 breakdown for Events 1–4 only (school invasion, Mirror Image, Rin sacrifice, Yuu identity exposure). Events 5+ noted as pending. | Direction / Acts 1–2 | — | Med | Backup | Plot | Director companion to SCR-08; **incomplete** (covers Events 1–4 only) |
| DIR-08 | backup/director/Story_Structure_Atmosphere_Design.md | director_notes | 338-line structure and atmosphere design: "Gentle Cruelty" core tone, 4-act atmosphere tables, 3-level audience emotion framework, per-act scene-level service tables, emotional curve diagram, audience cognitive gap table, per-character audience connection strategy. | Direction / All Acts | — | High | Backup | Theme | Master audience-experience design document |
| DIR-09 | backup/director/Story_Structure_Character_Archetype_Analysis.md | director_notes | ~136-line archetype integration analysis: core archetypes (Hero/Shadow/Mentor/Seeker/Ruler/Creator/Devotee), four-act archetype function table, Hero vulnerability analysis, mirror visualization of fallen-hero, Kurosou's "revealer not attacker" tactic. | Direction / All Acts | — | High | Backup | Theme | Archetype analysis; bridges character psychology to structure |
| DIR-10 | backup/director/Worldview_Scene_Analysis.md | director_notes | 149-line world and scene analysis: world tone table (Day/Night Zone, Tears of Victoria, Crimson Tide with L1/L2/L3), deep analysis of Crimson Tide 3-layer causality, daily ritual supernatural phenomena, Alpha Line Integration Director Guide (visual/audio grammar, scene staging). | Direction / All Acts | — | High | Backup | World | Scene-level world analysis |

---

## Group 4 — Backup: Draft（DFT）

> backup/draft/ — 草稿文件，包含原始大綱、時間線、場景細節及素材庫。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| DFT-01 | backup/draft/charts_reference.md | reference | Collection of Mermaid diagram charts covering character relations, emotion system architecture, story structure, timeline Gantt, and character attitude matrices. | Full cast, all 4 acts, emotion system, timeline | N/A | High | Backup | Mixed | Global |
| DFT-02 | backup/draft/idea_bank/13_Interesting_Chapters_Special_Plot_Setting.md | ideas | Idea bank for non-combat slice-of-life and life-death attitude chapters, with usage guidelines for placement relative to main plot. | All magical girls, daily life & death themes | N/A | Med | Idea Bank | Theme | Acts 1–2 |
| DFT-03 | backup/draft/legacy_navigation.md | navigation | Legacy navigation guide listing all documents by department (art/, screenwriter/, director/, gameplay/) with reading order recommendations. | All departments, all backup files | N/A | Med | Legacy | Meta | Global |
| DFT-04 | backup/draft/outline_raw.md | outline | Full raw story outline (415 lines) covering all four acts with director's notes inline, wikilinks, social reputation stages, and detailed scene references. | Full story (Acts 1–4), all major characters | status: Draft | High | Draft | Plot | Acts 1–4 |
| DFT-05 | backup/draft/scenes/05_detailed_scenes.md | scenes | Detailed scene descriptions extracted from the story outline, organised by chapter; covers key confrontations, character joins, philosophical dialogues, and pivotal emotional moments. 35k+ tokens file. | All major characters, Acts 1–3 | status: Draft | High | Draft | Scene | Acts 1–3 |
| DFT-06 | backup/draft/timeline_raw.md | timeline | Detailed chronological timeline covering Shared History (Imperial Year 0–98), Alpha Line, Beta Line main events (IY 102–134), and Time Loop endings. | Full story, all major characters, Alpha/Beta timelines | status: Draft | High | Draft | Plot | Global |

---

## Group 5 — Backup: Art Originals（OAR）

> backup/draft/art_originals/ — 美術視覺設計原始版本，對應 art/ 的前身文件。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| OAR-01 | backup/draft/art_originals/01_Core_Visual_Pillars_Detailed.md | visual | Detailed exposition of three core visual laws: Substance (emotion-material table), Corruption (three-stage soul decay), and Mirror (five visual laws of reflective surfaces). | World rules, emotion system visual, all characters | status: Draft | High | Backup | Visual | Global |
| OAR-02 | backup/draft/art_originals/202_Character_Visual_Design_Haruka.md | character_visual | Visual design brief for Haruka: body shape, colour palette, dual-identity costumes, four-stage visual evolution, acting guide and key tells. | Haruka only | N/A | High | Backup | Visual | Acts 1–4 |
| OAR-03 | backup/draft/art_originals/203_Character_Visual_Design_Miyako.md | character_visual | Visual design brief for Miyako: cat form vs civilian vs magical girl (Unit 01), weapon evolution (ribbon/ice skate → MP7A1), behavioural contradiction notes. | Miyako only | N/A | High | Backup | Visual | Acts 1–4 |
| OAR-04 | backup/draft/art_originals/204_Character_Visual_Design_Iroha.md | character_visual | Visual design brief for Iroha/Kurosou (Aya/Black Conductor): two-form design (disguised schoolgirl vs usurper emperor), kaleidoscope magic effects, acting guide for both personalities. | Iroha/Kurosou (Aya) only | N/A | High | Backup | Visual | Acts 2–4 |
| OAR-05 | backup/draft/art_originals/205_Character_Visual_Design_Saku.md | character_visual | Visual design brief for Saku (double-agent): day form (white suit imperial agent) vs night form (ethnic/Tibetan hunter), crescent moon earring emotional symbol, dual combat styles. | Saku only | N/A | High | Backup | Visual | Acts 1–3 |
| OAR-06 | backup/draft/art_originals/206_Character_Visual_Design_Akiho.md | character_visual | Visual design brief for Akiho (Autumn): three forms (landlady disguise / imperial scientist / Faceless Executor), acting guide for guilt-ridden performance vs cold original self. | Akiho only | N/A | High | Backup | Visual | Acts 1–4 |
| OAR-07 | backup/draft/art_originals/207_Character_Visual_Design_Airi.md | character_visual | Visual design brief for Airi (Eiri): four forms (delinquent / Cardboard Knight / crystallised statue / new-reality Saint Knight), detailed battle stances for spiritual-world guardian mode. | Airi only | N/A | High | Backup | Visual | Acts 1–4 |
| OAR-08 | backup/draft/art_originals/208_Character_Visual_Design_Iwakura_Akane.md | character_visual | Comprehensive visual design for Akane (Rev. 2.0): civilian, magical girl, Corpse Queen form, plus extended sections on behavioural quirks (synesthetic hunger, shark teeth, seasoning tin ritual, corpse-queen scene-by-scene). | Akane only | Rev. 2.0 | High | Backup | Visual | Acts 1–3 |
| OAR-09 | backup/draft/art_originals/209_Character_Visual_Design_Ayakomoji_Sou.md | character_visual | Visual design for Misao (Ayakomoji Sou): Modern Victorian Goth monochrome, paired puppet weapons ("Father/Mother"), extended behavioural quirks (measuring obsession, gloves, levitation, puppet-wall final form). | Misao only | N/A | High | Backup | Visual | Acts 1–3 |
| OAR-10 | backup/draft/art_originals/210_Character_Visual_Design_Rin.md | character_visual | Visual design for Rin (Unit 4 / The Golden Saint): magical girl form (golden staff, saint armour, radiant cape), civilian form, post-reintegration puppet state; detailed pre/post-reborn distinction table. | Rin only | Rev. 1.0 (implied) | High | Backup | Visual | Acts 1–2 |
| OAR-11 | backup/draft/art_originals/211_Character_Visual_Design_Ko_Hikaru.md | character_visual | Comprehensive visual design for Ko Hikaru: human form, Type B Scrap Metal corpse form, emotional symbolism analysis, full storyboard-level scene directions for three key scenes. | Ko Hikaru only; Akane relationship | Rev. 1.0 | High | Backup | Visual | Act 2 |

---

## Group 6 — Backup: 其他（ARC / GP / META）

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| ARC-01 | backup/archive/15_Alpha_Beta_Discussion_Archive.md | archive | Archive of design discussions on Alpha/Beta narrative mechanics, documenting integrated vs. non-integrated decisions for philosophical framework, character Alpha-line settings, and psychological integration. | Alpha/Beta mechanics, Haruka/Akane/Misao/Miyako/Yu | N/A | Med | Legacy | Plot | Global |
| GP-01 | backup/gameplay/00_Core_Gameplay_Design_Document.md | gameplay | Core game design document: game vision, three experience pillars, dynamic intervention (Tactical Window) combat loop, four-act game flow, and detailed combat system. | Full gameplay system, all story acts | N/A | High | Backup | Gameplay | Global |
| META-01 | backup/REPO_STRUCTURE.md | meta | Repository structure reference document for the backup/ system, listing all folder hierarchies and document hierarchy table. | Entire repository structure | 2026-02-17 | High | Backup | Meta | Global |

---

## Group 7 — Art（ART）

> art/ — 美術視覺文件，標注有 canon_target 但仍為 Draft 狀態。尚未確認是否已完全整合入 CAN-19。

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| ART-01 | art/00_Core_Visual_Foundation.md | visual | Supreme visual philosophy document defining three core principles (Gentle Cruelty, What is Real, Aesthetics of the Flawed) and three visual pillars (Substance, Corruption/Entropy, Mirror Laws). canon_target: CAN-01 + CAN-19. | World-wide visual rules, all characters | status: Draft | High | Draft | Visual | Global |
| ART-02 | art/02_Advanced_Narrative_Design.md | visual | Character illustration framework: duality principle, corruption visualisation, colour language of emotion, faction style guides (Sun/Night/Imperial), magical girl design framework. | All characters, all factions | status: Draft | High | Draft | Visual | Global |
| ART-03 | art/04_Character_Illustration_Style_Guide.md | visual | Technical illustration style guide: art style (Modern JP Light Novel/Gacha), cel-shading technique, colour strategy, VFX/lighting, character proportion standards, expression specifications. | All characters (technical illustration) | N/A | High | Draft | Visual | Global |
| ART-04 | art/302_Magical_Corpse_Visual_Design.md | visual | Magical Corpse visual design: clockpunk body-horror philosophy, gear/mirror symbolism, Type A (Doll) and other types, full visual element breakdown. canon_target: CAN-20/magical_corpse. | All magical corpse entities | status: Draft | High | Draft | Visual | Global |
| ART-05 | art/INDEX.md | meta | Index file for the art/ directory listing all Markdown design documents and ConceptArt directory structure with per-character image file inventory and naming conventions. | Art directory structure, all characters concept art | 2026-02-17 | High | Draft | Meta | Global |

---

## Group 8 — Root Files（ROOT）

| DocID | Path | Type | Summary | Scope | Date/Version | Reliability | Canon Status | Primary Owner | Structure Relation |
|-------|------|------|---------|-------|--------------|-------------|--------------|---------------|-------------------|
| ROOT-01 | 00_Story_Brief.md | story_brief | Comprehensive 5-minute story brief: genre/tone, logline, themes, world overview, Alpha/Beta setting, magical girl mechanics (Jungian framework), core characters, relationship map, event beats, ending analysis. | Full story, all major characters, all acts | N/A | High | Canon | Mixed | Global |
| ROOT-02 | Navigation_Guide.md | navigation | Canon navigation guide (SSOT) pointing exclusively to canon/ directory files; provides reading routes (first-time, character, setting/performance) and maintenance rules. | Entire canon/ structure | 2026-02-14 | High | Canon | Meta | Global |
| ROOT-03 | REPO_STRUCTURE.md | meta | Root-level repo structure file — **empty/stub** (1 line). | None | N/A | Low | Unknown | Meta | Meta |

---

## 初步跨文件警示（Initial Cross-Doc Alerts）

> 以下為 P3 intake 識別到的早期警示。均為「可能」等級，未確認。不在此處做任何最終判斷。

### 🟡 可能重疊（Possible Duplicate Coverage）

1. **世界規則重疊** — SCR-04（backup/screenwriter/03_Worldview_Setting.md）與 CAN-02（canon/01_world_rules_and_costs.md）均涵蓋 Trinity Spectrum、魔法系統、Alpha/Beta 力學、情緒守恆定律。SCR-04 為 1052 行源文件；CAN-02 為正式 canon 版本。需確認 SCR-04 是否有尚未整合入 CAN-02 的獨特內容。

2. **情緒系統重疊** — SCR-09（backup/screenwriter/08_Emotion_Setting_Overview.md）與 CAN-02 均涵蓋情緒系統。SCR-09 為 862 行，可能包含 CAN-02 未收錄的細節（特別是 Collective Unconscious 規則及 Soul Dive 互動規則）。

3. **故事大綱重疊** — DFT-04（backup/draft/outline_raw.md）vs SCR-06（backup/screenwriter/05_Story_Outline_Director_Notes.md）vs CAN-18（canon/05_story_outline_canon.md）— 三個版本均涵蓋四幕大綱，版本演化關係需釐清。

4. **時間線重疊** — DFT-06（backup/draft/timeline_raw.md）vs CAN-17（canon/04_timeline_canon.md）— raw 版本與 canon 版本可能存在差異或衝突，具體事件日期需核對。

5. **Story Brief 重疊** — ROOT-01（00_Story_Brief.md）vs SCR-01（backup/screenwriter/00_Story_Brief.md）— 同名文件存在於 root 和 backup，內容可能有差異。需確認哪個為最新版本。

6. **美術視覺重疊** — art/ 群組（ART-01 至 ART-05）vs CAN-19（canon/06_visual_bible.md）及 CAN-20（canon/07_entities_and_devices.md）— art/ 文件標注了 canon_target 但仍為 Draft，尚未確認整合狀態。

7. **角色視覺設計重疊** — OAR-02 至 OAR-11（backup/draft/art_originals/ 角色視覺）vs art/ 中不存在的對應文件 — art/ 目錄只有 5 份文件而非 11 份角色視覺，關係不清晰。

8. **資訊控制重疊** — DIR-06（backup/director/Information_Control_Audience_Experience_Design.md）vs CAN-22（canon/09_information_design.md）— 均涵蓋資訊揭露時機設計，需確認整合程度。

9. **玩法系統重疊** — GP-01（backup/gameplay/00_Core_Gameplay_Design_Document.md）vs SCR-13（backup/screenwriter/12_Social_Evaluation_Quest_System.md）vs CAN-23（canon/10_gameplay_bible.md）— 三個文件均涵蓋玩法，版本演化需確認。

10. **導演原則重疊** — DIR-02（backup/director/01_Creative_Core_Principles.md）vs CAN-01（canon/00_series_bible.md）及 CAN-21（canon/08_narrative_design_bible.md）— DIR-02 標注 canon_target 為兩者，整合狀態需確認。

### 🔴 可能版本過時（Possible Version Fork / Stale Content）

11. **backup 文件早於 CAN-24 決議** — 所有 backup/screenwriter/ 和 backup/director/ 文件可能使用早於 Phase 2 CF-T 系列決議的角色設定。特別是 CF-T01（Rin 原始人格）、CF-T04（Kurokanae 動機）、CF-T08（Rin Alpha 原傷）等已修訂內容，在 backup 文件中可能仍為舊版本。**作者確認需要後才能以 backup 內容更新 canon。**

12. **名稱差異警示** — backup 文件使用「Misao」（操），canon 文件使用「Sou」（綾小路操的英文名）；backup 使用「Aeri」，canon 使用「Airi」。需確認這是版本演化中的正式改名，還是並存的不同稱呼。

13. **DIR-05 不完整** — DIR-05（Core_Characters_Symbolism_Analysis.md）只有 Cola 和 Guitar 的分析，Sketchbook/Pendant/Mirror 條目明確標注「待補充」。

14. **DIR-07 不完整** — DIR-07（Major_Events_Character_Relationships_Analysis.md）只涵蓋 Events 1–4，Events 5+ 明確標注「待補充」。

15. **ROOT-03 空文件** — REPO_STRUCTURE.md（根目錄）為空文件（1 行），可能為待填充的佔位文件。

### 🟢 結構性觀察（Scope Notes）

16. **art/ 目錄缺少部分角色視覺** — OAR 群組在 backup/draft/art_originals/ 中有 11 份角色視覺設計，但 art/ 目錄只有 ART-01 至 ART-04（非角色視覺）和 ART-05（INDEX）。意味著角色視覺設計的 canon 版本可能整合進了 CAN-19（06_visual_bible.md）而不是獨立文件。

17. **Yu 角色 canon 文件相對精簡** — CAN-16（canon/03_characters/yu.md）在整個角色群中篇幅最短，但 Yu 是故事核心機制之一。backup 中 SCR-02/SCR-07 有更多 Yu 的心理與行為細節，需確認是否已完全整合。

---

## 文件已更新

- ledger/DOC_REGISTER.md（本文件）— 新建
- ledger/SECTION_TABLES_CAN.md — 新建（canon/ 24 份文件，~190 sections）
- ledger/SECTION_TABLES_BACKUP_SW_DIR.md — 新建（backup/screenwriter/ + director/ 27 份文件，99 sections）
- ledger/SECTION_TABLES_OTHER.md — 新建（backup/draft/ + art/ + root/ 28 份文件）
