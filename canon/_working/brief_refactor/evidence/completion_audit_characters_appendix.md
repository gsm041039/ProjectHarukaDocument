# Completion Audit — Character Reading Experience (Part 1) + Appendix A/B (Part 2)

Audited file: `00_Story_Brief.html`
Method: read-only, line-anchored. No files modified except this new evidence note.

---

## Part 1: Character Reading Experience

### Structural note (applies to all 6 cards, must be stated before the table)

Each character card is `<details class="char-card" id="c-*">`. Three cards carry the `open` attribute
(**晴香** L6829, **刑思/葉語彩** L7244, **菲** L7525 — 菲 not in this audit's 6-name list) and are
therefore visible without any click. The other three of the six audited characters —
**美夜子** (L7020), **操** (L7600), **紫音** (L7857) — are **not** `open`. Their entire card content,
including the summary box layer this audit is judging, is invisible until the reader clicks to expand
the outer `<details>`. **凜** (L8028) is also not `open`. So for 4 of 6 core characters, even the
"頭部/summary層" this task asks about requires one click just to become visible at all — a stricter
finding than what the task literally asked me to check, but material to the same IA question, so noting
it here once rather than repeating per-row.

Within an opened card, the actual layered structure (same pattern in all 6 cards) is:
`badge+name+real name` → `char-imgs` → a 2-column box (`日常外在` / `內在隱藏`) → one italic `目的` line
→ one `身份說明` dense box → **several long prose paragraphs (the "biography")** → a small `主題關聯`
box → more prose → `scene-grid` figures → nested `視覺設計 <details>`.

The task's "頭部/summary/身份說明box果層" = everything up through the `身份說明` box. Everything after
that (the multi-paragraph biography, and the `主題關聯` box which always sits embedded *inside* that
biography, never right after `身份說明`) I treat as "requires reading the full card", i.e. functionally
equivalent to REQUIRES_DETAILS_EXPANSION for the purposes of this table, even though technically it's
not behind a second nested `<details>`.

### Table

| 角色 | Who | Surface | Core conflict | Wound/pressure | Want/need | Arc direction | Key relationships | Story function |
|---|---|---|---|---|---|---|---|---|
| **晴香** | CLEAR (L6832-33) | CLEAR (L6863-64 `日常外在`) | CLEAR (L6869 `內在隱藏`: 拯救者情結底下嘅自私核心) | CLEAR (L6877-80 `身份說明`: 5歲Alpha線目睹母姊死亡) | CLEAR (L6875 `目的` line, want→need in one sentence) | REQUIRES_DETAILS_EXPANSION (ending/三位一體 only stated deep in `身份說明`'s single long paragraph L6879, and fully elaborated only at L6900-09 which is well past summary layer) | REQUIRES_DETAILS_EXPANSION (美夜子/菲/刑思/經理人 relationships only unpacked in body prose L6899, L6908, L6910, not in summary box) | REQUIRES_DETAILS_EXPANSION (`主題關聯` box at L6904-06, after 5 paragraphs of biography) |
| **美夜子** | CLEAR (L7023-24) | CLEAR (L7046-47) | CLEAR (L7052-53 `內在隱藏`: "想要"本身就是僭越) | CLEAR (L7061-66 `身份說明`: 靈魂源自Alpha線姊姊、死亡與復活、黑貓詛咒) | CLEAR (L7058 `目的` line) | REQUIRES_DETAILS_EXPANSION (Act IV 大哭/接納 resolution only at L7086, seven paragraphs into the card) | REQUIRES_DETAILS_EXPANSION (凜 is her deepest bond but isn't named until L7070/7084 in prose; summary box never mentions 凜) | REQUIRES_DETAILS_EXPANSION (`主題關聯` at L7081-83, after 5 paragraphs) |
| **刑思/葉語彩** | CLEAR (L7247-49, name line itself shows dual identity) | CLEAR — best of the six: dual persona split into two explicit `日常外在`/`內在隱藏` pairs (L7279-99) | CLEAR (L7286 彩: 自責懦弱; L7297-99 刑思: Protector Paradox named explicitly) | CLEAR (L7306 `身份說明`: 6歲目睹螢被殺、人格分裂) | CLEAR (L7303-04 `目的` line, both personas stated separately) | REQUIRES_DETAILS_EXPANSION (帝國廣場決戰/彩奪回身體/刑思退場 only at L7331-35) | REQUIRES_DETAILS_EXPANSION (relationship with 晴香-as-鑑彩 only unpacked at L7327-30; relationship with 螢 seeded in 目的 but not elaborated until prose) | REQUIRES_DETAILS_EXPANSION (`主題關聯` at L7337-40, after 5 paragraphs) |
| **操** | CLEAR (L7603-04) | CLEAR (L7622-24, plus an extra note on being ostracized for beauty) | CLEAR (L7629-31 `內在隱藏`: 自卑焦慮·不配被愛·完美表演會滲漏) | CLEAR (L7638-39 `身份說明`: 性別重置手術、父親強制男性繼承人養育) | CLEAR (L7635 `目的` line) | REQUIRES_DETAILS_EXPANSION (final "我選擇停留在我想停留的位置" resolution only at scene-figure caption ~L7790-92, deep in card) | REQUIRES_DETAILS_EXPANSION (紗夜/父親 named in `身份說明`, but 美術部男生/彩/母親 relationships only in prose L7651-60) | REQUIRES_DETAILS_EXPANSION (`主題關聯` at L7662-64, after 6+ paragraphs) |
| **紫音** | CLEAR (L7860-61) | CLEAR (L7883-84) | CLEAR (L7889-90 `內在隱藏`: 母性氾濫·刀子嘴豆腐心·渴望最基本的關懷) | CLEAR (L7897 `身份說明`: 弟弟誤食情緒結晶死、父母Emo-Visor成癮) | CLEAR (L7895 `目的` line) | PARTIAL — `身份說明` box (L7897) uniquely does sketch a fairly full early/mid arc (小光之死→精神崩潰→屍骸首領→屍骸樂園) inside the summary layer itself; but the actual resolution (地下室與母親/細佬的和解) is only at L7917, deep in prose. Best of the six on this axis but still incomplete at summary layer. | PARTIAL — 小光/父母 named in `身份說明`; 晴香/操/黑社會 relationships only in prose (L7914-16) | REQUIRES_DETAILS_EXPANSION (`主題關聯` at L7910-12 — earliest-appearing of the six, but still after the summary layer, requiring 2 paragraphs of prose first) |
| **凜** | CLEAR (L8030-32; note: unlike the other five, no age is given on the real-name line) | CLEAR (L8062-63) | CLEAR (L8068-69 `內在隱藏`: "自己是誰"從來冇一次係自己揀嘅·死抱痛覺不向虛無妥協) | CLEAR (L8077 `身份說明`: 光環處決、刑思還原肉體、記憶模糊) | CLEAR (L8074 `目的` line — even names 美夜子 directly: "讓美夜子記住她") | REQUIRES_DETAILS_EXPANSION (自願兵器化/Unit 00/美夜子介錯 resolution only at L8085-94, deep in prose) | PARTIAL — 美夜子 is named in the `目的` line itself (unusually good for this axis), but the weight/history of the bond is only in prose (L8090-94) | REQUIRES_DETAILS_EXPANSION (`主題關聯` at L8096-99, after 8+ paragraphs — the deepest-buried of the six) |

### Part 1 summary judgement

**Consistent pattern across all 6 characters:** `Who`, `Surface`, `Core conflict`, `Wound/pressure`, and
`Want/need` are genuinely CLEAR_AT_SUMMARY — the two-column box + one-line `目的` sentence design is
doing real IA work for these 5 of 8 items, and 刑思/葉語彩's dual-box layout is the strongest execution
in the whole set.

**Consistent failure across all 6 characters:** `Arc direction` and `Story function` are never available
at the summary layer — the ending/resolution beat and the `主題關聯` box are always buried multiple
paragraphs into the free-text biography, requiring a full read to extract. `Key relationships` is
likewise never given as a scannable list anywhere in any of the 6 cards — it must always be assembled by
reading the prose (紫音 and 凜 are marginally better because 目的/身份說明 happen to name one relationship
in passing, but neither gives a relationship *map*).

**Conclusion: Character IA is not complete for any of the 6.** 5 of 8 target fields are addressed by the
existing box/目的 layer design; 3 of 8 (arc direction, key relationships, story function) still require
reading the full biography, meaning the stated failure condition — "如果依然主要係幾千字biography先攞到
呢啲資訊，就係Character IA未完成" — applies to all 6 characters for those 3 fields. Additionally, 4 of
the 6 cards (美夜子/操/紫音/凜) are collapsed by default, so even the fields that *are* well-designed
require one click before any of them are visible.

---

## Part 2: Appendix Audit

### Appendix A — 情緒世界系統 (L11386-11784)

Main-text comparison baseline used: 世界如何運作：七個核心法則 section, `id="laws"`, L5807-5947
(the compact flow chart, Q&A, and the `law-card` `<details>` block at L5877-5941), plus 情緒世界的隱藏機制
section L5951-5983.

| Subcard | Verdict | Evidence |
|---|---|---|
| **唯識宇宙（底層世界公理）** (L11568-86) | **DUPLICATES_MAIN_TEXT** | The subcard's own intro (L11570) says it only adds "Alpha/Beta 喺呢條公理下嘅具體對照" — but that Alpha/Beta contrast is already given, near-verbatim, by the purple "底層世界公理·CDL-248" Banner directly above it in the same section (L11392-1417: "集體潛意識靜默待機" vs "激活", "物理因果律主宰"/"情緒能量直接覆寫", "死亡=靈魂消散"/"死亡=靈魂困禁"). The subcard's table (L11571-84: "物理因果律主導·情緒無法具現為魔法" vs "集體潛意識激活·情緒可直接覆寫現實") restates the same three contrasts in the same order with near-identical wording. No content in this subcard is absent from the Banner immediately preceding it. Confirms the task's suspicion is correct for this subcard *as it stands now* — the prior round's claimed fix (removing a duplicate opening sentence) did not remove the deeper structural duplication; the whole subcard's substantive content is still a restatement of the Banner. |
| **集體潛意識如何運作** (L11587-1689) | **MIXED** | The compressed chain (Input→Flow→Pollution→Overflow, L11590-99), the **L1/L2/L3 三層深度 table with 誰能接觸 access levels** (L11600-18), and the mini-matrix (情緒傳染/晴香危險性/情緒連結/戰術代價, L11619-36) are genuinely **new** — the compact `law-collective` card in the main 七法則 section (L5890-95) never breaks the collective unconscious into three depth layers or names who can access which layer; this is real added depth, ADDS_DEEP_DETAIL. However, the "Alpha vs Beta — 集體潛意識存取權限" comparison table embedded inside this same subcard (L11637-59) is the **third** near-identical restatement of the same Alpha/Beta contrast (after the Banner and the 唯識宇宙 subcard) — that specific block is duplicative, even though the rest of the subcard is not. |
| **靈魂** (L11690-1708) | **ADDS_DEEP_DETAIL** | The main `law-vessel` card (L5878-82) is two sentences on what 心之器 is. This subcard adds the ontological claim "靈魂是先存在的實體，不由腦部產生" (L11694), the Beta-line death mechanic (執念碎片令靈魂唔消散、錨定肉體，L11700-01), the fact that souls can split under trauma (L11701), and the Alpha-line-specific "大腦即靈魂-現實介面" mechanic (L11704-07) — none of this is in the compact law section. No duplication found. |
| **情緒守恆定律** (L11709-16) | **ADDS_DEEP_DETAIL (minor, confirmed)** | Subcard explicitly defers to the main 七法則 for the base definition (L11711) and adds only one new framing device: the blockquote "Alpha 線是債權人...情緒債務" (L11712-15). The main `law-conservation` card (L5883-89) never uses the "creditor" framing. This is the subcard the task said a previous round claimed to have fixed — independent read confirms what remains **is** non-duplicative; it is a single new metaphor, not a restatement. |
| **緋潮** (L11717-22) | **MIXED** | First sentence — "當累積超過臨界值，世界的免疫系統會強制清算...魔法壓抑越多，反撲越猛" (L11719) — is a near-verbatim restatement of the main `law-tide` card, which uses the *exact same phrase* "魔法壓抑越多，緋潮反撲越猛" (L5900-01) and the same immune-system metaphor. That sentence adds nothing. The second sentence — visual/audio detail of "無數扭曲的人形輪廓...被抹殺的原初現實的哭號" (L11720-21) — is genuinely new sensory/imagery detail absent from the main law-tide card. Net: half duplicate, half new. |
| **魔法屍骸化機制** (L11723-74) | **ADDS_DEEP_DETAIL** | The main `law-spectrum` card (L5931-41) states the general "everyone can become 屍骸, 魔法少女 already on the spectrum" idea and the 護甲=debt concept. This subcard goes well beyond that: CDL-271 1%/99% control split (L11727-33), the 困禁 vs 無主容器 distinction based on how much 執念 exists (L11731-33), the Alpha/Beta death comparison table (L11734-45), the in-world reason Gothic-spike encasement looks the way it does — tied to Haruka's 5-year-old psychological imagery (L11748-51), the "渴求溫暖卻毀滅溫暖" mechanic distinct from but complementary to 燈塔效應 (L11754-59), the three-stage reversibility window (裂紋→尖刺萌發→尖刺融合外殼, L11762-66), and the "越掙扎越易斷" mechanic (L11769-73). None of this granularity exists in the compact law section. Strongest, cleanest subcard in the appendix. |
| **情緒資本主義** (L11775-81) | **MIXED** | The core claim — 日區靠抽取夜區人民情緒運作，貧富之間是抽取關係 — duplicates the "永動機幻象：情緒能源詐騙" card already present in the main-text 隱藏機制 section (L5976-81: "帝國把日區痛苦轉移到夜區", "情緒抽水機"). Same mechanism, same day/night framing, different label. What is new: the specific physiological consequence for the poor — "心之器因持續失去正面情緒而永久萎縮" and the "情緒化糞池" phrase (L11777) — which the 永動機幻象 card does not state. Net: the macro-mechanism is a duplicate of an existing main-text card (just relabeled "情緒資本主義" instead of "永動機幻象"); the specific bodily-cost detail is new. |

### Appendix B — 全角色真實名字對照表 (L11786-1854)

**Verdict: MIXED.**

- The base pairing (常用名 ↔ 真實名字) duplicates information already stated once per character inside
  each character card's `char-real` line (e.g. 晴香's card already states "真實名字：連若晴" at L6833;
  美夜子's at L7024; 凜's at L8032; 紫音's at L7861). Collecting them into one table is a convenience
  re-listing, not new information, for that column alone.
- The **「象徵」column is genuinely new**: none of the individual character cards contain this
  interpretive gloss. Example: "「若晴」卻承受最黑暗創傷；名字越光明，心洞越深" (L11801, for 晴香) does
  not appear anywhere in 晴香's own card (L6829-7019); "從『心怡』（暖心偶像）到『凜』（冷漠刀片）；唯一
  完全喪失中文名身份的主要角色" (L11814-16, for 凜) likewise does not appear in 凜's card. The 刑思 row
  (L11834-37) even adds a fact not stated elsewhere in the brief — the reading "刑思" as Cantonese
  "思螢" — which is new lore, not a restatement.
- So: the first two columns are a duplicate re-index; the third column (象徵) is deep new content that
  exists nowhere else in the document.

---

## Bottom line for both parts

**Part 1** — 0 of 6 characters have a fully complete Character IA against the requested 8-field checklist.
All 6 succeed on 5/8 fields (who/surface/core conflict/wound/want) via the existing box+`目的`-line
design. All 6 fail on 3/8 fields (arc direction, key relationships, story function) — those still require
reading the full prose biography, i.e. exactly the failure condition the task asked me to check for. 紫音
and 凜 are marginally ahead of the other four (partial credit on arc direction / key relationships
respectively) but not materially "done." 4 of 6 cards are also collapsed by default, adding a click
barrier on top of the layout issue.

**Part 2** — Of the 7 Appendix A subcards + Appendix B: 2 clearly add real depth not in the main text
(靈魂, 魔法屍骸化機制); 1 is a confirmed minor-but-real addition (情緒守恆定律, matching the prior round's
claim); 1 is still a full duplicate despite the prior round's edit (唯識宇宙); 3 are mixed — part
duplicate, part new (集體潛意識如何運作, 緋潮, 情緒資本主義); Appendix B is mixed (name pairing
duplicates character cards, 象徵 column is new). So the appendix restructuring is roughly half-done:
genuine duplication remains in 1 full subcard and partially in 3 more (including the embedded Alpha/Beta
table that now appears three times across the section).
