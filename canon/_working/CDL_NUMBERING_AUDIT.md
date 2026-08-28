# CDL_NUMBERING_AUDIT

## Purpose

呢個檔案追蹤 `CANON_DECISION_LOG.md`（CDL）編號完整性：phantom references（被引用但冇對應log row嘅編號）、gaps（編號序列中嘅空缺）、同 collisions（同一個編號被用咗兩次或以上）。

呢個係喺分配任何新 CDL 編號之前，**必須查核**嘅權威位置——避免重蹈之前發生過嘅撞號事故（例如 CDL-389 曾經因為撞號而要 renumber 做 CDL-397）。

## How to use

喺分配任何新 CDL 編號之前：

1. Grep `CANON_DECISION_LOG.md` 檔案開頭（table 係 newest-first 存放），確認目前最高嘅 `CDL-NNN`：
   ```
   grep -m1 -oE 'CDL-[0-9]+' canon/_working/CANON_DECISION_LOG.md
   ```
   （或者直接睇 `## Confirmed Decisions` table 第一個 data row。）
2. 檢查本檔案「Audit Log」表，睇下最高編號之上有冇已知 phantom / 已聲稱但未真正落檔嘅編號——避免用到一個表面睇落「未用過」但其實已經喺其他地方被提及過嘅編號。
3. 新編號 = 已確認最高編號 + 1。分配完之後，如果過程中發現任何新嘅 phantom / gap / collision，記返落嚟呢個檔案嘅 Audit Log。

**已確認嘅事實（2026-08-26 audit）：**
- `CANON_DECISION_LOG.md` table 入面實際登記嘅最高編號係 **CDL-399**（1–399 全部有對應 row，冇 gap）。
- 已知會喺全 repo 掃描時跳出嚟、但**唔係**真正登記緊用中編號嘅 phantom：**CDL-405**（詳見下面 Audit Log）。
- Table 本身入面有 9 個 row 嘅 ID 同其他 row 撞號（真正嘅「collision」，唔係 phantom）——詳見下面 Audit Log。

## Audit Log

| Date | Finding | Status | Resolution |
|---|---|---|---|
| 2026-08-26 | **Phantom reference：CDL-405**——全 canon 掃描（`canon/` 全部 .md，排除 `canon/_reports/`）搵到嘅所有 `CDL-[0-9]+` 引用之中，`CDL-405` 係唯一一個數值超出 `CANON_DECISION_LOG.md` 已登記範圍（1–399）嘅編號，即冇任何對應 log row。出現位置：`canon/_working/NEXT_ACTION.md:117`（Round 112 記錄，「CDL-352/CDL-405係working file入面已知嘅失效/幻影引用」）；`canon/_working/SESSION_LEDGER.md:604`（同一句「已知失效/幻影引用」措辭）；`canon/_working/SESSION_LEDGER.md:1549`（「CDL-405/320/352不存在」）；`canon/_working/REASONING_LOG.md:1326`（「三個不存在的 CDL 編號（最高 CDL = CDL-285）：E-III-J9 [CDL-405]、E-III-L5 [CDL-320]、E-III-L9 [CDL-352]」）；`canon/_working/QUESTION_QUEUE.md:498`（QQ-97，「Q-SV-02：E-III-J9/L5/L9 三個 beat 的設計依據為何（CDL 編號不存在）」）。**重要脈絡**：QQ-97 早喺 2026-05-19 已經 RESOLVED——確認咗呢三個 Act III beat（E-III-J9/L5/L9）原本錯誤標咗 CDL-405/320/352，`ACT_III_OUTLINE.md` 已經修正做 `[btd — CDL待登記]` placeholder（已核實現時 `ACT_III_OUTLINE.md` 已經冇任何 `CDL-405` 字面引用）。即係話：**CDL-405 呢個 phantom 本身已經有歷史解決記錄，現存嘅全部引用都係「事後記錄呢件事已經處理咗」嘅 retrospective 文字，唔係活躍嘅懸空 cross-reference**。但因為呢個編號從來未真正入過 `CANON_DECISION_LOG.md` 嘅 table，技術上佢仍然符合「phantom」定義，故正式記錄喺此，供作者確認是否需要任何進一步動作（例如喺 log 補一句永久性 dead-number 註記，防止將來又被誤用）。 | OPEN — needs author decision | |
| 2026-08-26 | **Collision（log 內部）：CDL-176 被用咗兩次，指向兩個完全唔同嘅決定**——`CANON_DECISION_LOG.md` line 287：「維多利亞之淚：市民層認知 = 偽永動機（哲學層 + 敘事映射確認）」；line 289：「Q32 緋潮視覺 = B（E-02+E-04強度遞增）」。兩個 row 內容完全唔相關，明顯係兩個獨立決定意外攞咗同一個編號，並非同一決定嘅重複記錄。 | OPEN — needs author decision | |
| 2026-08-27 | **Collision（兩個並行sub-agent同時claim CDL-401）**——同一輪story-orchestrator討論入面，兩個並行sub-agent各自獨立處理心之器/護甲/魔法屍骸/解離兵器統一機制討論嘅唔同部分（「Part 1」負責心之器/護甲/光譜統一；「Part 2」負責靈樹retcon/操父親科技），兩者互不知情之下都用咗「CDL-401」——Part 2正式register落`CANON_DECISION_LOG.md`；Part 1淨係喺`01_world_rules_and_costs.md`內文標咗「CDL-401」但未落log。**根因**：兩個agent都只查證咗自己開始執行嗰一刻嘅log最高編號（CDL-400），冇考慮到並行agent可能同一時間都喺claim緊下一個編號——呢個屬於本檔案「How to use」步驟未覆蓋嘅情況（單一agent查核程序，冇處理「多個agent同時查核、同時claim」嘅race condition）。 | RESOLVED（orchestrator人手核對兩個sub-agent報告後即場執正） | Part 1嘅「護甲對執念錨點嘅強化作用」正式改用**CDL-406**（`01_world_rules_and_costs.md`第1136行已更新），並喺`CANON_DECISION_LOG.md`補齊CDL-402/403/404/406四條entry；Part 2嘅CDL-401（操父親科技/靈樹retcon）保持不變，已移除警告標記。**刻意跳過CDL-405**，避免同上面已知嘅歷史phantom reference混淆。**建議**：如果之後仲會有多個sub-agent並行寫canon嘅情況，應該喺任務指示入面明確要求每個agent喺「執行完畢、即將log嗰一刻」先再次即時grep一次最高編號（唔淨係開始嗰陣check一次），或者由orchestrator人手序列化分配編號區間，減少race condition風險。 |
| 2026-08-26 | **Collision（log 內部）：CDL-290 被用咗兩次，指向兩個完全唔同嘅決定**——`CANON_DECISION_LOG.md` line 83：「Alpha 線死因 OVERRIDE（覆蓋 CDL-006/007）」；line 428：「QQ-102=B RESOLVED — 鐵絲網偶遇整合方式 = 新增獨立揭露 beat（J2.5）；ACT_III_OUTLINE 升至 v0.3」。同 CDL-176 情況一樣，兩個 row 內容完全唔相關，明顯係兩個獨立決定撞咗同一個編號。 | OPEN — needs author decision | |
| 2026-08-26 | **內容重複（非撞號）：CDL-243、CDL-244、CDL-245、CDL-246、CDL-247 呢五個 row 喺 log 入面各自出現咗兩次，且每一對嘅內容係逐字元完全一致（byte-identical）**——第一組出現喺 line 368–372，第二組出現喺 line 374–378（diff 確認完全相同）。呢個唔係兩個決定撞號（同 CDL-176/290 唔同類），睇落似係編輯時意外將成個五行 block 貼咗兩次。5 個決定分別係：CDL-243（Q-026-01 美夜子 Glitch Form）、CDL-244（Q-026-02 夕社死機制）、CDL-245（Q-026-03 隊友拉走晴香）、CDL-246（Q-026-04 玻璃庭院茶會幕末切斷）、CDL-247（Q-026-05 守恆定律 Layer 編號重定義）。 | OPEN — needs author decision | 高信心懷疑：其中一組五行係意外重複貼上，應該直接刪除重複嗰組（保留任何一組即可，因為內容完全一樣，刪走邊組都唔影響 canon 內容）——但實際刪除邊一組、以及刪除前需唔需要再核實冇任何其他地方分別 cross-reference 咗呢兩個物理位置（例如按 line number 而非 CDL 編號嘅罕見引用方式），留待作者確認先執行。 |
| 2026-08-26 | **已核實非問題（false positive，記錄以防重複調查）：CDL-308 同 CDL-320、CDL-352 唔算 phantom/collision**——初步掃描一度將 `CDL-308-B`（line 454，正式 sub-ID 格式，非撞號）誤判做 CDL-308 重複；`CDL-337 續`（line 478，「續」= 延續前一個決定嘅補充記錄，正式做法）誤判做 CDL-337 重複——兩者均為刻意使用嘅合法後綴格式，唔係編號錯誤。另外 `CDL-320`、`CDL-352` 喺舊 working file 筆記（見上面 CDL-405 finding）一度被列為「不存在」，但目前兩個編號喺 `CANON_DECISION_LOG.md` 都有合法 row（CDL-320＝紫音 Change Trigger 地點修正；CDL-352＝八個角色心理habit擺位入Outline），並且喺 `iwakura_akane.md`／`ACT_III_OUTLINE.md` 等檔案嘅實際引用內容同 log row 主題吻合，證實呢兩個編號早已經被合法補登記，現時引用有效，唔屬於 phantom。 | CLOSED — no author action needed | 唔需要 renumber 或修改任何檔案；純粹記錄畀將來 session 參考，避免重新調查同一件已經證實冇問題嘅事。 |
| 2026-08-26 | **Gap check：1–399 全序列掃描，冇發現任何 gap**——用 `CANON_DECISION_LOG.md` table 入面全部 408 個 row 嘅 ID（399 個唯一編號 + 9 個因上述 collision/重複而出現嘅額外 row）同完整序列 1–399 比對，確認 1 到 399 之間每一個編號都至少有一個 row，冇任何編號係完全缺席嘅。 | CLOSED — informational only | 唔需要動作；純粹確認 gap 唔係現時嘅問題。 |

