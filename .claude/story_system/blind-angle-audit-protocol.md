# Blind Angle Audit Protocol（獨立盲審協議）

用途：當有人（orchestrator／AI／作者）要宣稱「某個 artifact 已經用晒所有角度考慮過」，用呢套協議做獨立檢驗。自己寫、自己剔嘅表唔算證明（作者 2026-10-02 質疑後建立）。

首次實戰：`canon/_working/demo_pilot/blind_audit/`（Demo Beat v3；6 個 agent）。

## 1. 幾時要做
- **Beat Layer／Sequence Layer Review Packet 之前**（Beat Layer Completeness Gate 第 7 項，強制）。
- 大決定（LEVEL_3 DIRECTOR、影響多個 Act 或多個 beat 嘅建議）。
- 作者質疑「你有冇真係考慮晒？」。
- 小／中建議：唔使盲審，用 Angle Basis Rule 嘅 TARGETED lens（或作者要求 FULL 時全掃）＋證據＋攻擊即可。
- 盲審係 `FULL` 模式／高風險 review 嘅配套；用語見 §3：呢套係 `SCOPED_INPUT_WITH_EXPOSURE_AUDIT`，**唔係硬隔離**。

## 2. 角色分工
| 角色 | 人數 | 做咩 |
|---|---|---|
| 分組審核員 | ≥5，按角度分組（角色／資訊／結構＋canon／觀眾體驗／玩法＋導演＋製作） | 對分配到嘅每個角度 × 每組 beat 逐格出：核對＋攻擊＋結論 |
| 漏洞搜尋員 | 1 | **唔俾角度清單**。用幾個 persona（story editor、遊戲設計／製作人、新觀眾、continuity auditor）搵問題，之後先對返角度；對唔到＝`NO_MATCH`＝清單漏咗 |

| 提案員（Proposer） | 1 | **創作模式，唔係審核。** 主動提新事件、新想法、其他形式（玩法行為、環境／道具／UI、蒙太奇、刪／併／換序、激進另類）。遵守 Existing Carrier First；每個提案要針對 beat 內具體弱點（唔准為提而提）、全角度掃描＋攻擊、人話講清做咩／點解／代價／放棄咗咩；全部 CANDIDATE，唔批核、唔代作者決定 |

（提案員工作方式＝`story-solution-space-designer` 嘅 Proactive Opportunity Mode。）審核員同漏洞搜尋員**預設唔會**主動提新創作（佢哋只搵問題＋建議修補），所以需要「新想法」時必須派提案員，唔好假設盲審自然會有。提案同樣要經 Diff 後由 orchestrator 綜合，再按 Question Funnel 決定咩上畀作者。

每個 agent 獨立，唔准互相睇對方輸出；orchestrator 只收總結＋讀檔。

## 3. 輸入包（orchestrator 準備，agent 只准讀包入面列出嘅檔）
**vNext 用語：** `SCOPED_INPUT_WITH_EXPOSURE_AUDIT`＝orchestrator 準備 scoped read-only 輸入包，agent 喺包內搜索。除非 harness 真係強制（例如只掛載包目錄），**唔可以聲稱硬隔離**。要保留 tool-access／exposure 記錄（agent 實際 Read／Grep 過咩路徑）；agent 一旦接觸禁讀內容，要申報，orchestrator 記低**接觸時間**（讀 artifact 之前定之後）同**類型**（檔名／路徑洩漏、內容、CLAUDE.md @import 載入內容）。接觸會降低獨立性信心，但**唔自動令發現作廢**——如果發現嘅 canon 錨點仍然可以現場核實，保留並標獨立性等級。
1. 被審對象：artifact 原文（唔係 orchestrator 對佢嘅分析）。附「宣稱上游」欄標明 unverified。
2. 固定嘅作者決定（避免 agent 重問／推翻）。
3. 可讀 canon 來源清單（路徑）。
4. 禁讀清單：orchestrator 自己嘅分析、ledger、tracker、狀態檔、舊 scan 表、其他 agent 輸出。**agent 一旦讀咗要喺輸出頂部講。**
5. 角度定義：`.claude/story_system/angle-system.md`（Pool 1–3）。

## 4. 每格格式
**正式多格審核（vNext）：** 用 machine-readable cell（JSON／YAML，一格一個物件；唔係俾作者睇嘅聊天輸出），欄位：`CELL_ID, ANGLE_ID, TARGET_ID, QUESTION, EVIDENCE, COUNTERCHECK, VERDICT, SEVERITY, MERGED_TO, CONFIDENCE`。`EVIDENCE` 要有檔案＋錨點／引文；`COUNTERCHECK` 獨立於 finding 文字寫（`COUNTER:` 最強反方解讀／`SEARCHED:` 搜過咩搵唔到／`NO_DIRECT_COUNTER:`）；`VERDICT` ∈ `FINDING／CLEAN_AFTER_ATTACK／NOT_APPLICABLE／NEEDS_AUTHOR／INSUFFICIENT_EVIDENCE／MERGED_TO`；`MERGED_TO` 係真實狀態（呢格同另一格重複，記目標 `CELL_ID`，唔當獨立 finding、亦唔當計數差異）。人手細審核可繼續用下面表格式（同一套結論定義）。

| 角度 | Beat | 角度向呢個 beat 問咩（具體到 beat 內容） | 實際核對咗咩（檔案＋行號／引文；或「只憑 Beat 表」） | 攻擊：最可能點樣失敗 | 結論 |

結論只准：
- `FINDING`（嚴重度＋點改＋人話解釋）
- `CLEAN_AFTER_ATTACK`（必須寫攻擊內容同點解攻唔入）
- `NOT_APPLICABLE`（必須引 beat 內容講點解唔觸及）
- `NEEDS_AUTHOR`（canon 冇答、真係要作者定）
- `INSUFFICIENT_EVIDENCE`（包內搵唔到足夠材料作判斷；唔當 CLEAN，亦唔當 FINDING）
- `MERGED_TO`（重複格，指向另一個 CELL_ID）

**無效格＝當冇做：** CLEAN 冇核對或冇攻擊；理由係「合理」「冇問題」「符合 canon」冇引文；同一句套話貼落多個 beat。
**Canon 引文必須現場讀原文。** 引錯＝扣信譽。

## 5. FINDING 格式
- 嚴重度：`BLOCKS_BEAT_LAYER`／`SHOULD_FIX`／`NOTE`
- 發生咩問題（具體 beat）
- 點解係問題（上游依據＋檔案行號）
- 建議點改（唔含對白／鏡頭／timing）＋代價＋放棄咗咩＋同現有做法真正分別

## 6. 每個角度完結要寫
「如果冇呢個角度，會漏咗咩？」——具體；答「冇漏」就要講試過搵咩。

## 7. 角度以外
每個 agent 加「未列入角度嘅關注點」。多個 agent 獨立提到同一個未列入關注點 ＝ 強烈建議加入 registry。

## 8. 禁止
- 批核層／宣稱完成／代作者答決定。
- 為求有發現而硬造問題；亦唔可以為交差剔晒。每個角度最少一次認真攻擊。
- 改被審檔或其他 agent 檔（只准寫自己輸出檔）。

## 9. Orchestrator 收尾（Diff）
1. 讀晒所有輸出，先查**無效格**（算未做，要補或重派）。計格數用 cell 欄位（`ANGLE_ID`／`TARGET_ID`）機械計，唔用關鍵字估；`MERGED_TO` 格單獨計，唔當漏格或重複 finding。
2. 同自己嘅 scan 表做 Diff：
   - 盲審搵到、我漏咗：邊個角度、點解漏（印象？套話？冇重掃？）。
   - 我搵到、盲審冇搵到：（可能係盲審格太薄，亦可能係我過度解讀。）
   - 雙方同意嘅 CLEAN（仍要記錄）。
   - 薄格數量。
3. 處理 FINDING：`BLOCKS_BEAT_LAYER` 必須處理（改 beat 或作者明確否決）；`SHOULD_FIX` 逐個處理或記低理由；`NOTE` 記入 ledger。
4. Registry gap：漏洞搜尋員 `NO_MATCH` 或多 agent 重複嘅未列入關注點 → 向作者提議加入角度（唔可以靜靜加，亦唔可以靜靜略過）。
5. 因 FINDING 而改動嘅 beat：相關角度格全部標 `STALE` 並重掃。
6. 落檔：ledger（新 section）、BEAT_LAYER_ANGLE_SCAN.md／QUESTION_MATRIX.md（NOT_RELEVANT 理由）、tracker。
7. 向作者誠實報告覆蓋：「過咗 N 個角度；盲審 X 個發現，已處理 Y，未處理 Z，W 格仍然薄」。**除非全部完成，唔可以講「完整考慮晒」。**

## 10. 已知限制
- **（vNext）呢套唔提供硬隔離**，只提供 scoped input＋exposure audit；報告用語要照實（見 §3）。
- **盲度洩漏（首次實戰發現）：** 子 agent 開局會經項目 `CLAUDE.md` 嘅 `@import` 自動載入 angle-system.md（角度 1–19）等檔，所以「唔睇角度清單」嘅漏洞搜尋員對 1–19 只係半盲，只有後加嘅角度（20–28）全盲。另外 agent 嘅 Grep 如果冇限制路徑，會見到禁讀檔嘅**檔名**（唔係內容）。輸入包要寫明「Grep 只准喺准讀路徑入面」，agent 要喺報告頂部申報洩漏；orchestrator 按「半盲／全盲」衡量結果。
- **用量上限：** 多 agent 並行可能同時中斷；要求 agent 逐段寫檔（唔好最後一次過寫），中斷後可用 SendMessage 由原進度恢復。
- 28 個角度未保證窮盡；漏洞搜尋員係測試而唔係保證。
- 盲審 agent 睇唔到未落檔嘅作者口頭意圖；固定決定要寫入輸入包。
- 同一模型家族嘅 agent 可能有同樣盲點；高風險決定可考慮作者本人快速掃一眼最重要嘅 FINDING。
