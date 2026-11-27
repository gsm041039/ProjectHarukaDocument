# T-023 Stage 4 — 建議與下一步

日期：2026-11-26  
範圍：根據目前正式 repo、程式碼檢視及一個 Graphiti/Relate 原型；非正式架構決策

## 建議

**目前不建議直接以 Graphiti、GraphRAG 或 LightRAG 取代 story_kb。** 這不是認定現有 KB 最佳，而是本輪沒有證據顯示任何候選在實際中文故事創作、錯誤率或總 token 上勝出；Graphiti 小樣在長期更新和 CJK BM25 亦有具體限制。

短期保留 Markdown 原文及作者決定作為權威來源。若要繼續，優先做一個可刪除、可重建的本地索引試點，並先把以下能力當成驗收條件：

1. 每條抽取事實可追到 source id、精確行／段、來源 hash、狀態及作者決定 id；草稿、候選與作者確認永不混成同一權威層。
2. 對中文姓名別名、概念改寫和多跳關係達到可量化召回；提供原文證據，遇到矛盾能並列候選而非靜默決定。
3. 來源差異能局部失效及重建依賴 facts，刪檔有 purge，舊版本可追溯；在大量人手整理前先量度每次改動成本。
4. 以同一模型、同一 prompt、同一來源覆蓋做檢索輔助故事創作對照，分開報告準確性、相似劇情發現、因果／修訂影響、自由創作和 input/output tokens。

## 候選定位

- **story_kb**：保留為現況比較基線。它的來源引文、權威和修訂狀態語義貼近作者流程，但卡片現況有未同步風險，probe 召回噪音大，沒有自動差異同步。
- **Graphiti + Relate**：可作可重建的關係索引概念驗證；在嵌入式 driver 上要補自己的來源同步、狀態 schema、中文語意檢索與更新規則。現有 trial 不足以採納。
- **LightRAG**：若下一個問題聚焦「來源修改後如何局部清理／重建」，值得比 Graphiti 優先做小型更新試點；它的 purge/recovery 更接近該維護問題，但仍未代表可保護作者決定。
- **GraphRAG**：目前故事規模及成本不支持先做完整 community index；只有當全作跨線主題探索在簡單來源索引失敗，才值得列入同資料集實測。
- **HippoRAG 2／敘事 ontology**：目前分別是可借用的圖擴展概念與詞彙參考，沒有足夠理由直接遷移。

## 研究結論的證據界線

本輪直接驗證 Graphiti in-memory 儲存、精確來源連結、BM25 查詢、episode metadata 遺失、來源文字修改不會更新依賴 edge。手動整理的 edge 能表達人物／時間／規則連結，但不是工具自動抽取能力。一次故事構思能維持來源分層並挑戰既有草稿；因為同一生成者已讀過背景，而且沒有模型 A/B，所以不能說新架構令 AI 更準、更自由、更省 token。

## 保護範圍

- 未修改正式 Canon、`CANON_DECISION_LOG.md` 或作者決定。
- 未修改 `.claude/` workflow 或正式 story files。
- 未加正式 repo dependency、沒有 commit。
- 發現的未提交概念圖改動保留原狀：`art/ConceptArt/Characters/Aeri/ConceptArt_Aeri_MagicalGirl.png`。
- 可重現原型在本研究目錄 `prototype/`；除固定小樣輸出外不含全作新索引。

## 如要延續研究

建議下一個小步係「來源變更同步試點」：拿 2–3 個複製 Markdown fixture，比較 story_kb quote drift、Graphiti 手寫 source sync 和 LightRAG purge/recovery 的局部更新成本；用同一批人物別名／時間／狀態／舊劇情查詢評分，再決定是否值得安排同模型寫作 A/B。這一步仍屬隔離研究，不需改正式架構。若之後要選定新正式索引／改變 Canon 管線，屬重大架構取捨，先交由作者決定。
