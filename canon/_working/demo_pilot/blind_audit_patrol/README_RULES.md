# 獨立盲審任務：日常巡街（PT1）＋實戰前練習被打斷（PR1）

你係獨立審核員。你只准審核同搵問題，**唔准**批核、唔准代作者作決定、唔准改被審檔或包內其他檔、唔准創作新劇情。只准寫入 `out/` 入面你自己嘅輸出檔。

## 包內檔案（只准讀包內列出嘅檔 + READABLE_SOURCES.md 列出嘅 canon 路徑）
- `ARTIFACT_beats.md`：被審對象（兩個新 beat）
- `ADJACENT_beats.md`：相鄰 beat（N3、B1、B2），用嚟查對接；唔係被審對象
- `FIXED_AUTHOR_DECISIONS.md`：固定嘅作者決定
- `READABLE_SOURCES.md`：准讀 canon 路徑同禁讀清單

## 流程（逐段寫檔，唔好最後一次過寫；用量上限中斷時可以由原進度恢復）
**階段 0（開頭）：** 寫 `out/00_exposure_declaration.md`——你有冇經項目 CLAUDE.md @import 或其他途徑自動載入咗角度清單／禁讀內容；讀過邊啲禁讀路徑（含檔名洩漏）；之後每讀到禁讀內容即補申報。
**階段 A（先做，唔好讀角度清單）：** 用四個 persona 搵問題：story editor、遊戲設計／製作人、第一次玩嘅新觀眾、continuity auditor。額外要主動檢查：
  - 每個在場角色嘅**角色檔本身**同 beat 有冇衝突（行為習慣、已定知情、揭示時機）；
  - 角色**明知風險仍行動**時，動機係咪成立、有冇撞佢立場；
  - **同一主題有多條設定**（用 lookup_id.py 同 Grep 主題詞）時，beat 有冇只用一條；
  - 其他文件（聲線、表演、其他 beat）有冇依賴被刪／被改嘅場景；
  - 前後相鄰 beat 嘅因果、情緒、知情對接；
  - demo 切走嘅 beat 原本承擔嘅功能（教學、設定介紹、先感受後被告知）有冇欠帳。
  寫 `out/A_free_search.md`；每個發現附：嚴重度、具體 beat、檔案＋行號／引文（canon 引文必須現場讀原文）、建議點改（唔含對白／鏡頭／秒數）。
**階段 B：** 讀 `.claude/story_system/angle-system.md` 之後，對 PT1 同 PR1 各自逐個 Master Angle Registry 角度（1–28）出格。分四個輸出檔：
  - `out/B1_character_relationship.md`：角度 1、2、13、14、16、17、20
  - `out/B2_info_knowledge.md`：角度 3、7、10、21、22
  - `out/B3_structure_canon.md`：角度 6、8、9、11、15、18、19、28
  - `out/B4_craft.md`：角度 4、5、12、23、24、25、26、27
  每格一行 markdown 表：`CELL_ID | ANGLE | BEAT | QUESTION（具體到 beat 內容）| EVIDENCE（檔案＋行／引文，或「只憑 beat 表」）| COUNTERCHECK（COUNTER:最強反方／SEARCHED:搜過咩搵唔到）| VERDICT | SEVERITY | CONFIDENCE`
  VERDICT 只准：FINDING／CLEAN_AFTER_ATTACK／NOT_APPLICABLE／NEEDS_AUTHOR／INSUFFICIENT_EVIDENCE／MERGED_TO(<CELL_ID>)。SEVERITY 只用於 FINDING：BLOCKS_BEAT_LAYER／SHOULD_FIX／NOTE。
  每個角度完結寫：「如果冇呢個角度，會漏咗乜？」（答「冇漏」要講試過搵咩）。
**階段 Z：** 寫 `out/Z_summary.md`：發現清單（按嚴重度）、未列入角度嘅關注點（多個獨立提到＝建議加入清單）、薄格自評、你嘅獨立性等級（全盲／半盲）。

## 無效格（當冇做）
CLEAN 冇核對或冇攻擊；理由係「合理」「冇問題」「符合 canon」冇引文；同一句套話貼落多格。每個角度最少一次認真攻擊。唔好為求有發現而硬造問題，亦唔好為交差剔晒。

## 完成後
只交返 ≤10 行 handback：任務｜主要發現（最多 5 條，附嚴重度）｜最重要證據｜未解問題｜`out/Z_summary.md` 路徑。完整內容留喺 out/。
