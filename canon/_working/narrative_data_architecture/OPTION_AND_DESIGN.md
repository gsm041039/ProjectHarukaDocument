# T-023 Stage 2 — 現成方案選擇與 prototype 設計

日期：2026-11-26

## 選擇

先以 **Graphiti 0.32.1 + Relate embedded driver** 做 Stage 3 prototype。呢個係測試候選，未係建議直接取代正式知識管理。

理由係它目前最接近本次要測的組合：來源 episode、人物／事件節點、帶時間及來源的關係、混合檢索，而且 Relate 可在 Python process 內運行。0.32.1 在 2026-11-24 加入 Relate driver並移除 Kuzu，故選版本固定的釋出包測試，不跟 main 漂移。

## 根據實際實作比較

| 方案 | 資料模型／抽取 | 檢索／更新 | 本次判斷 |
|---|---|---|---|
| **Graphiti + Relate** | Episode 保存來源原文；Entity／Edge 保存人物及事實；edge 有 `valid_at`／`invalid_at`（故事事實時間）及 `created_at`／`expired_at`（系統記錄時間），邊連回來源 episode。`add_episode` 會用 LLM 抽取／消歧／處理矛盾；亦可用 `add_triplet` 直接給結構化事實。 | 有 BM25、向量搜尋及關係擴展；Relate 是嵌入式資料庫。 | 最貼近「時間＋證據＋關係」，且可本地試。缺少角色主觀時間、作者確認狀態、分支等一等欄位；需要以可追來源的自訂 attributes 補足，並不自動保證證據真確。Relate 實作目前未保存 `episode_metadata`；BM25 對單一中文字詞找不到結果，較長來源原句可命中。 |
| **Microsoft GraphRAG** | 以 text units 作來源，LLM 抽 Entity／Relationship／Claim，產生 communities／reports；另有 FastGraphRAG。 | Local Search 把圖上下文同原文片段合併；支援增量 indexing。 | 適合大語料的主題／社群摘要與多跳問答，但標準索引多輪 LLM 抽取及彙總；repo 自述目前主要維護模式。對一個小型故事範圍，成本和建立的社群層不值得先引入。 |
| **LightRAG** | 以 chunk 為根，抽實體及關係；保存原文片段、抽取結果快取及 source id。 | 有 local/global/hybrid 等檢索，亦有依來源追蹤 graph contribution、刪除文件後重建受影響 entity／relation 的實作。 | 更新／來源清理做得比簡單 graph demo 完整，值得日後回看；但有多種 KV、向量、Graph、文件狀態 storage，內建抽取亦需 LLM。核心抽取關係係自由文字而非作者確認／敘事狀態；現階段非最省維護的測試入口。 |
| **HippoRAG 2** | OpenIE 建 passage/entity/fact 圖；分別保留 chunk、entity、fact embeddings。 | Personalized PageRank 做關聯檢索；有 index manifest、防止模型設定不一致時誤用舊索引。 | 關聯跳轉值得借鑑，但要建 OpenIE 與 embedding 索引；無 Haruka 的作者意圖、故事分支及多種時間模型。 |
| **GOLEM / Drammar** | GOLEM 是 fiction/narrative OWL ontology，有人物、事件、setting、narrative sequence、時間等概念；Drammar 以角色 belief／goal／plan 等 BDI 方式建戲劇表示。 | 係知識詞彙／本體，不是可直接對 Markdown 增量索引及回答問題的 RAG 工具。 | 只借可用概念，不整套遷移；否則要先手工把大量故事轉成 OWL 個體。 |
| **現有 story_kb** | 人工 Markdown facts；逐字來源、權威、狀態及時間欄位清晰，改寫來源後可查 quote drift。 | about/kind/time 過濾；`probe` 以文字命中段落，不做語意關係展開。 | 低成本、狀態語義較貼作者工作；缺口係未覆蓋到全故事，也沒有由原檔差異自動重建關係的管線。唔預設保留，只用作基線。 |

## Graphiti smoke trial（無故事 API 呼叫）

- 以獨立 Python 3.13 venv 安裝 `graphiti-core[relate]==0.32.1`；依賴安裝成功，5.9 秒、29 個套件，下載約 30 MB。正式 repo 無加 dependency。
- 建立 in-memory Relate graph，手工寫入一個人物節點、一個世界規則節點、一個來源 episode、一條具 `story_world_interval`／`subjective_interval`／`canon_status`／`cause_kind` 的 edge。
- `Graphiti.search_` 用 BM25-only config 對完整中文原句取回 1 條 edge＋1 個 source episode，無需 LLM 或 embedding 呼叫。短 query「晴香」命中 0；對長原句命中。呢個試驗只證明資料落地／來源連結／字詞查詢可行，未證明自然語意檢索或創作改善。
- Relate episode round-trip 丟失 `episode_metadata`（其 `save` 實作不寫此欄）；試驗中的 source path 因此需保存在 `source_description`／edge attributes。這是實測限制。
- Graphiti constructor 預設初始化 OpenAI clients；本測試以不可能授權的 placeholder client 設定並只選 BM25，沒有 LLM／embedding API call。SDK 預設會收集匿名 PostHog telemetry；首次 smoke 未先停用，程序輸出顯示一個事件 flush 未完成。事件內容按源碼是產品版本與機器架構等，不含故事文本；是否有任何 telemetry 成功送達無法確認。後續腳本須在 import 前設 `GRAPHITI_TELEMETRY_ENABLED=false`，並禁用所有模型路由。

## Stage 3 控制設計

1. 同一份原文固定 4–6 個來源片段，附來源路徑及行號；不為 Graphiti 額外補寫故事事實。先匯出 baseline card-only、baseline `probe`＋來源片段，再用相同文字建立 episode／edge。
2. 同一批問題分成四個因素：資料表示（原文 vs typed nodes/edges）、來源覆蓋（只卡 vs 固定來源片段）、檢索（probe/query vs BM25／明確關係擴展）、AI 指令（同一任務 prompt／同一模型）。記錄每層輸入文字量及回覆 Token 估值；不把手動多抽出的事實當圖收益。
3. 先做可判分檢索題（人物身份、主觀／世界時間、Canon／草稿、現有相似構思、明示因果 vs 單純先後、修改事件後的已知依賴）。答案只按引用來源評分。
4. 做一個非 Canon 宏觀創作任務：先提出一個可發展的替代／新情節，再檢索及比較舊安排，檢視自由創作、重複創作、理解修訂影響。由同一模型單 agent 執行，不呼叫多 Agent、不寫回故事檔；因同一 agent 已看過部分樣本，創作比較會標為非盲測。
5. 用複製 fixture 修改／刪除一個來源片段，測試 Graphiti 自己會否偵測來源變更、標舊 edge 歷史、只重建受影響部分。若 SDK 不提供檔案差異管線，直接記錄本地同步工作量，不另造成熟系統假象。

## 本地官方源碼／文件

- Graphiti release / Relate：<https://github.com/getzep/graphiti/releases/tag/0.32.1>
- Graphiti model／來源與 fact 時間：<https://github.com/getzep/graphiti/blob/main/graphiti_core/edges.py>、<https://github.com/getzep/graphiti/blob/main/graphiti_core/nodes.py>
- Graphiti edge contradiction/update：<https://github.com/getzep/graphiti/blob/main/graphiti_core/utils/maintenance/edge_operations.py>
- Graphiti identity properties（文件列 Neo4j／FalkorDB 支援）：<https://github.com/getzep/graphiti#identity-properties>
- GraphRAG dataflow／local search：<https://microsoft.github.io/graphrag/index/overview/>、<https://microsoft.github.io/graphrag/query/local_search/>
- LightRAG indexing／maintenance：<https://github.com/HKUDS/LightRAG/blob/main/lightrag/operate.py>、<https://github.com/HKUDS/LightRAG/blob/main/docs/design/PurgeRecoveryContract.md>
- HippoRAG 2 index code：<https://github.com/OSU-NLP-Group/HippoRAG/blob/main/src/hipporag/HippoRAG.py>
- GOLEM narrative ontology：<https://github.com/GOLEM-lab/golem-ontology/blob/main/current/golem.ttl>
- Drammar paper：<https://iris.unito.it/bitstream/2318/155427/8/SWJ_Camera_Ready_4aperto.pdf.pdf>
