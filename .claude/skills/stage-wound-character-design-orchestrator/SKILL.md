---
name: stage-wound-character-design-orchestrator
description: "Run an evidence-first, multi-sub-agent character and costume design audit for Project Haruka through the theme Stage × Wound. Use when reviewing or improving one character, one outfit, a transformation, a monster form, a visual motif, color system, pose language, or anime settei design; when the user wants distinct review angles, scope discovery, iterative image-grounded discussion, image-generation prompt variants, contradiction questions, and controlled Canon writeback after author approval."
argument-hint: "[character/form] [scope or mode]"
user-invocable: true
---

# Stage × Wound Character Design Orchestrator

## Purpose

對 Project Haruka 嘅一個角色／一套造型做持續、證據先行、多代理審視，令設計更符合「舞台 × 傷口」，同時保持角色身份、現有 Canon、製作可行性及視覺辨識度。

呢個 skill 係工作流 orchestrator，唔係自動重新設計角色嘅 generator。每輪只處理一個主要設計單位；圖像候選只係候選，永遠唔會自動取代 Canon 原圖或正式設定。

## Non-negotiable rules

1. 先讀現有文字、圖片、決策紀錄及相關 downstream；未讀證據不可提出「已經符合」嘅結論。
2. 預設每輪只審視一個角色／一套造型／一個形態。若 user 未指定範圍，先自動掃描可用資料，再提出最多三個建議範圍及推薦順序。
3. 固定 reviewer 角度必須互相分工。每個 sub-agent 必須有唯一主要決策軸、唯一修改包及獨立證據；不得用換字重複另一 agent 嘅建議。
4. 支援 user 臨時加入 reviewer angle。新角度必須先聲明 mission、邊界、不可重複嘅角度及交付物。
5. 發現 Canon 矛盾、身份改寫、主題層級改變、世界規則改變或會影響其他角色嘅選擇時，先入 question queue；未得到 author decision 不得 writeback。
6. 「確認後先寫入 Canon」係硬 gate。普通「好／繼續」只代表繼續分析，除非清楚確認 author decisions 及 writeback permission。
7. 「舞台 × 傷口」係顯式導演語言，唔係取代「態度 vs 命運」嘅新核心主題。不得把所有角色硬套成直播偶像、受害者或單一獻祭者。
8. 完整美學、傷口、怪物可以只出現其中一部分，亦可互相重疊；不得要求每個設計同時顯示三者。
9. 身體凝視只可服務羞辱、暴露、失去主體性／命名權／拒絕權或停止權；不得用性感化取代心理、關係及代價描寫。
10. 圖像 prompt 每次必須逐字附加 `references/anime-settei-prompt.md` 內嘅固定 block。角色專屬修改指示放喺 block 之前或之後，不得刪短固定 block。

## Invocation and modes

Explicit invocation:

```text
/stage-wound-character-design-orchestrator 審視晴香魔法少女服裝；先自動建議今輪範圍，暫時只做 review，不改 Canon。
```

## Claude Code execution contract

This is a Claude Code project skill. Run it from the ProjectHarukaDocument repository so relative paths, images, Canon files, and working-state files resolve against the real project.

After Phase 0 and the evidence ledger are complete, use Claude Code's `Agent` tool to dispatch reviewers A–I as separate, independent subagents. Run independent reviewers in parallel when possible. Give each subagent only its assigned angle, the target scope, the evidence paths it must inspect, and the required output contract. Do not ask one subagent to imitate or summarize another reviewer.

Subagents must be read-only during review: they may inspect files and images and return a report, but they must not modify Canon, images, decision logs, or working-state files. The main Claude Code session must collect their reports, run reviewer J (integration editor) after A–I finish, and present the author gate.

If the `Agent` tool is unavailable, run the same reviewer contracts sequentially in the main session and explicitly mark `execution: sequential-fallback` in the trace. Never silently collapse all reviewer angles into one generic opinion.

Do not use `context: fork` for this orchestrator skill: the author gate depends on the current conversation, and writeback must remain a separate, explicitly approved phase.

支援以下模式；user 未指定時使用 `REVIEW_ONLY`，完成 author decision 後才可進入 `APPLY_APPROVED`：

- `AUTO_REVIEW`: 掃描資料、建議範圍、派發 agents、整合報告、提出問題；停在 author gate。
- `REVIEW_ONLY`: 只做一輪審視，不改任何正式文件或圖片。
- `APPLY_APPROVED`: 只在明確 author decisions 後，建立 writeback map、更新文件、做 QA。
- `IMAGE_PROMPT_PACK`: 將已確認嘅修改方向拆成多個非重複圖像版本；先輸出 prompt manifest。
- `IMAGE_GENERATE`: user 明確要求生成時，先檢查 repo 內現有 Python／瀏覽器 generator，再按其介面執行；如果無可用流程，交付 prompt pack 並標記未生成。
- `RESUME`: 讀取持久狀態，從上一個未完成 gate 繼續；唔重做未受檔案變更影響嘅工作。

## Phase 0 — Intake and scope discovery

先讀 repo 根目錄及適用 instructions（例如 `AGENTS.md`、local AI instructions），再列出實際可用資料。至少搜尋：

- 角色文字、character bible、voice／心理／關係檔案
- costume／visual bible／settei／concept art／reference image
- story、Act、scene、直播、奇蹟、怪物及戰鬥演出資料
- decision log、Canon working state、上一輪 audit/report
- 任何已有 image-generation Python、browser automation 或 prompt registry

輸出 `TASK_SCOPE`：

```text
TASK_SCOPE
- Target character / form:
- Target design unit:
- Existing source files and images:
- User-requested concern:
- Auto-proposed review scope:
- Selected scope for this round:
- Out of scope:
- Mode:
- Canon write allowed now: NO / ONLY_AFTER_AUTHOR_DECISION / YES_AFTER_EXPLICIT_APPROVAL
- Missing evidence:
- Stop conditions:
```

如果 user 冇講範圍，按以下順序提出建議，並只揀一個作推薦主軸：

1. 角色身份／不可改動核心與現有辨識度。
2. 主題如何進入角色，而唔係只加傷口符號。
3. 大輪廓、服裝結構、姿態及舞台化表演語彙。
4. 色彩、圖案、材質、焦點區域及視線路徑。
5. 動作／變身／招式／受傷表現與動畫製作安全。
6. 圖像候選版本及下一輪比較問題。

唔好因為缺少資料就自行發明 Canon。將缺資料記為 `NOT_FOUND` 或 `EVIDENCE_GAP`。

## Phase 1 — Evidence ledger

先由主 agent 建立 evidence ledger，再派發 sub-agent。每個判斷最少記錄：

```text
EVIDENCE_ID | reviewer | file/image | line/page/region | exact observation | authority | confidence
```

對圖片要記錄實際觀察，例如：silhouette、主色塊、眼睛／髮型、服裝焦點、重複 motif、姿態、傷口／怪物／完整美學位置；唔好只寫「好睇」或「有舞台感」。

將資料分級：

- `CANON`: 已批准正式設定。
- `DECISION`: author 已確認但尚未完整落檔嘅決定。
- `WORKING`: 暫定、草稿或工作檔。
- `DISCUSSION`: 討論、推論或未確認提案。
- `CANDIDATE`: 新圖、prompt 變體或未採用設計。
- `NOT_FOUND`: 指定範圍內未找到證據，唔等於全 repo 沒有。

優先使用現有 `LOCAL_AI_CANON_MULTI_AGENT_AUDIT_WRITEBACK_PROMPT.md` 嘅 authority、question queue、writeback 及 QA 規則；如 repo 有實際 SSOT，按 repo 現況取代預設路徑。

## Phase 2 — Dispatch distinct sub-agents

至少派以下 reviewer。每個 reviewer 開始時先輸出：

```text
AGENT_GOAL
- Mission:
- Primary decision axis:
- Files / images to inspect:
- Search or visual tests:
- Must not decide:
- Unique deliverable:
- Stop condition:
```

### A. Canon and identity cartographer

只審核角色身份、不可改動元素、服裝概念來源、角色間差異、正式設定與候選設定嘅 authority。交付 identity lock list、conflict list 及 downstream impact；唔提出色彩或構圖改動。

### B. Theme and wound dramaturg

只審核「態度 vs 命運」如何透過此角色嘅傷口、需要、交換、債務、索取權、拒絕權及停止權顯現。檢查「停止消費傷口」；唔提出具體色碼、布料或圖案改動。

### C. Stage and performance-language director

只審核舞台作為顯式導演語言如何進入服裝、變身、招式、姿勢、視線、燈光、聲音或表演狀態。可使用 `成形 → 裂口 → 埋單／取回`，但唔強行完整套用；唔代替 visual stylist 決定 motif。

### D. Character psychology and relationship reviewer

只審核角色如何被觀看、誤讀、要求、承接、交接或取回；檢查角色心理、關係及 voice／body tell 是否互相支持。保留「Act I 晴香善良係真心，唔係先天假面」等既有角色條件；唔提出製作細節。

### E. Silhouette, costume and modern character-design specialist

只審核大輪廓、形狀語言、比例、服裝層級、視覺重心、動作可讀性、角色遠距離辨識度及當代人物設計原則。每次最多提出一個主要輪廓修改包；唔重新編寫角色心理。

### F. Color, motif and material systems specialist

只審核色彩心理、主／副／警示色、圖案語意、重複 motif、材質對比、視線路徑及角色隊伍內色彩分工。提出色彩／圖案方案時，必須說明係保留、合併、移位或刪減咩元素；唔提出大輪廓重設。

### G. TV-anime production and settei specialist

只審核 2D TV animation 可重畫性：細節預算、線稿密度、平塗、影區、正背面一致、動作 silhouette、焦點區數量及辨識度。固定 settei prompt 只由此 agent 管理技術落地，唔可藉機改角色核心。

### H. Body, shame and boundary safety reviewer

只審核身體凝視、暴露、羞辱感及觀看權力是否真正服務心理性剝奪／親密權剝奪，而唔係性化展示；檢查拒絕、解釋、保留、停止及命名權。對越界風險提出替代演出方向，唔得直接刪除 user 明確要求嘅黑暗感。

### I. Adversarial contradiction reviewer

只尋找角色撞樣、Canon 矛盾、主題層級錯置、把局部 dialect 升格成全作規則、把真誠觀看一律判成剝削、把傷口符號化、過度裝飾及 image prompt 偷改身份等問題。唔提出第九套個人美學方案。

### J. Integration editor

等待 A–I 完成後才工作。去重、分辨觀察與建議、保留真正分歧，建立 change packages。Integration editor 不得自行解決 author-level contradiction；只能提出選項及後果。

## Custom reviewer angles

如果 user 加入角度，例如「民俗圖案」、「舞台服裝史」、「色弱可讀性」、「角色商品化」、「戰鬥 hit readability」：

1. 將它加入本輪 `CUSTOM_ANGLES`。
2. 指定唯一 primary decision axis。
3. 明確列出與 A–I 不重疊嘅範圍。
4. 要求獨立 evidence、唯一 modification package 及 downstream risk。
5. 若新角度其實覆蓋既有 agent，合併其輸出，不增加重複 agent。

## Phase 3 — Non-overlapping proposals

每個 reviewer 只能提出一個主修改包，並用以下格式：

```text
PROPOSAL P-###
- Owner angle:
- Evidence:
- Current design strength to preserve:
- One dominant change:
- Why this change expresses Stage × Wound:
- What it must not change:
- Production / canon risk:
- Comparison test:
```

禁止「每個 agent 都叫角色加裂痕、加花、加紅色、加破布」。同一元素若被多 agent 提及，integration editor 必須標記 `DUPLICATE`，再判斷係共同證據、同一修改，或者真正互補嘅不同層次。

每輪只選 1 個主修改方向作下一輪圖像／設計實驗；最多加 2 個低風險 supporting adjustments。保留未選 proposal，唔好一次過把所有建議塞入設計。

## Phase 4 — Integrated audit and author questions

輸出整合表：

| ID | Finding | Evidence | Status | Owner angle | Change level | Risk | Recommendation |
|---|---|---|---|---|---|---|---|

`Status` 必須用：`CONFIRMED`、`PARTIAL`、`NOT_FOUND`、`CONTRADICTION`、`PROPOSAL_ONLY`、`IMPLEMENTATION_GAP`、`CANDIDATE_ONLY`。

按以下層級分辨問題：

1. `DESIGN_SUGGESTION`: 不改 Canon，可直接作候選實驗。
2. `LOCAL_DIALECT`: 只適用某角色／服裝／場景，唔升格成全作規則。
3. `CANON_CLARIFICATION`: 要補充正式文件，但不推翻現有 Canon。
4. `CANON_CONFLICT`: 必須由 author 選擇或明確推翻舊決定。
5. `IDENTITY_RISK`: 可能令角色唔再係同一個角色，必須停低問。

只將 3–5 條真正需要 author 判斷嘅問題放入 question queue：

```text
QUESTION Q-###
- Conflict or decision:
- Evidence A:
- Evidence B / missing evidence:
- Why the agent cannot decide safely:
- Recommended option: A / B / C
- Consequence of each option:
- Affected files and characters:
```

冇矛盾時都要明確寫 `NO_AUTHOR_BLOCKER`，但仍然要等 user 確認採用邊個 proposal 先可 writeback。

## Phase 5 — Author gate

停低並要求 user 回覆以下內容之一：

```text
Q-001: A
Q-002: 保留，但只作局部 dialect
採用 P-003 作今輪主修改；P-005 留到下一輪
確認後可建立 writeback map，但暫不生成圖片
```

冇得到清楚 author decision 前：

- 不得改正式 Canon。
- 不得刪除或覆蓋原圖。
- 不得把候選 prompt 寫成正式設計。
- 可以更新 review state、question queue 或暫存 report，但要標成 working state。

## Phase 6 — Writeback after approval

只在 author 明確確認後建立 `WRITEBACK_MAP`：

```text
WRITEBACK_MAP
- Approved decision:
- Source of truth to update:
- Supporting files to update:
- Files deliberately not updated:
- Text to add / revise / retire:
- Old wording preserved in decision history:
- Image status: CANDIDATE / APPROVED_REFERENCE / CANON_REPLACEMENT
- QA checks:
```

預設路由，實際 repo 結構優先：

- 角色心理、關係、tell：`canon/03_characters/*.md`
- 服裝、色彩、圖案、怪物、完整美學：`canon/06_visual_bible.md`
- 舞台、變身、招式、鏡頭、表演 grammar：`canon/11_directing_playbook.md`
- 主題、世界規則、身體代價：`canon/00_series_bible.md`、`01_world_rules_and_costs.md`、`12_philosophy_and_systems.md`
- 故事落地：`canon/04_timeline_canon.md`、`05_story_outline_canon.md` 或實際 scene／beat source
- 決策及 migration：`canon/99_decision_log.md`、`canon/_working/CANON_DECISION_LOG.md`、`WRITEBACK_LOG.md`
- 未解問題：`canon/_working/QUESTION_QUEUE.md`

同一個 rule 只保留一個 SSOT；其他文件只放短引用及其對角色／場景嘅應用。若係「取代」舊 wording，保留舊決策、日期、原因及受影響文件，唔好無痕刪除。

## Phase 7 — Image prompt and generation workflow

### Prompt construction

先輸出一個 prompt manifest，再生成。每個 variant 必須有：

```text
VARIANT V-###
- Reference image:
- Identity locks:
- One dominant visual change:
- Stage × Wound expression:
- Preserved elements:
- Forbidden changes:
- Fixed settei block: EXACTLY INCLUDED
- Expected comparison question:
```

每輪建議 3 個版本：

- A：舞台 silhouette／服裝結構主導。
- B：傷口／裂口／身體代價主導，但只改一個可控視覺位置。
- C：色彩／圖案／材質主導。

如 user 加入新角度，將其中一個 variant 交給該角度；不得每個版本同時改輪廓、色彩、圖案、怪物、姿態。

每個 prompt 必須逐字包含 `references/anime-settei-prompt.md` 全部固定內容。若生成器需要附加 negative prompt，將它放在固定 block 之後，唔好修改固定 block。

### Existing Python / browser flow

當 mode 為 `IMAGE_GENERATE`：

1. 用 `rg --files` 搜尋 repo 內 image、prompt、browser、ChatGPT submission script；先讀說明及 command interface。
2. 確認 script 係提交 prompt 而唔係改 Canon；先 dry-run 或只輸出 request manifest。
3. 將每個 variant 分開提交，保留 variant ID、原 prompt、reference image、生成結果路徑及時間。
4. 如果現有流程不存在、壞咗、需要登入或需要 user credentials，停止自動提交，交付完整 prompt pack，標記 `GENERATION_NOT_EXECUTED`；唔好猜測或索取敏感資料。
5. 生成圖永遠先放入候選資料夾／working state。只有 author 明確批准，先可以更新 visual bible 或指定 reference。

使用 bundled `scripts/build_settei_prompt_variants.py` 可以將 variant JSON 加上固定 settei block，作為現有 generator 嘅前置步驟；它唔會自動登入、發送網絡請求或覆蓋圖片。Claude Code 執行時優先使用：

```bash
python3 "${CLAUDE_SKILL_DIR}/scripts/build_settei_prompt_variants.py" <variants.json> <output-dir>
```

`CLAUDE_SKILL_DIR` 代表目前 skill 目錄；不要假設 skill 已經複製到 repo 其他位置。

## Phase 8 — QA and persistent state

Writeback 或 prompt pack 完成後，檢查：

- 角色身份、臉、眼睛、髮型 silhouette、主服裝概念有冇無意改寫。
- 「舞台 × 傷口」係具體視覺／表演語言，而唔係只加傷疤、花、紅色等符號。
- 完整美學／傷口／怪物只出現需要嘅部分，冇硬套三者。
- 身體羞辱感有心理及權力因果，冇滑向性化展示。
- 角色之間仍然有清楚差異；新 motif 唔會令全隊撞樣。
- TV anime settei detail budget、平塗、輪廓及重畫性達標。
- 每項正式改動都有 author decision、source of truth、日期及 destination。
- 候選圖片、正式 Canon、討論推論三者清楚分開。
- 交叉文件無未記錄矛盾、死連結、重複 SSOT 或把局部設計升格成全作規則。

建議 persistent state：

```text
canon/_working/character_design_audit/
  SESSION_STATE.md
  EVIDENCE_LEDGER.md
  REVIEW_REGISTER.md
  QUESTION_QUEUE.md
  AUTHOR_DECISIONS.md
  PROPOSAL_REGISTER.md
  PROMPT_MANIFEST.md
  WRITEBACK_LOG.md
```

每輪最後輸出短 trace：

```text
TRACE_COMPACT
- Done:
- Pending:
- Blocked:
- Next:
- Reviewer angles used:
- Custom angles:
- Canon files changed: NONE / list
- Candidate images generated: NONE / list
```

## Required behavior in the first response

當 skill 第一次觸發，唔好立即改設計。先：

1. 確認 target character／form 及現有檔案。
2. 如果 scope 缺失，自動提出 scope options。
3. 顯示本輪會呼叫嘅 reviewer angles，並列出 user 可新增角度嘅位置。
4. 聲明目前係 `REVIEW_ONLY` 及 Canon write gate。
5. 開始 evidence scan；只在完成 scan 後輸出第一輪 proposals 或 questions。
