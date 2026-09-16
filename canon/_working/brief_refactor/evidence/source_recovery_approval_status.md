# Source Recovery — Story Phase 4-6 / Ending vs Timeline pending-approval 矛盾 — Approval Status 逐事件查核

**調查範圍**：00_Story_Brief.html Story Phase 4-6 + Ending 章節 vs 故事時間線對應節點的穩定性標籤矛盾。
**方法**：逐個事件查 `story_construction/` Outline 層、Beat Sheet 層、`CANON_DECISION_LOG.md`、`QUESTION_QUEUE.md`、`PROJECT_STATUS.md`/`SESSION_LEDGER.md` Round 記錄，分 event core / beat-sequence / scene-execution 三層判斷。
**前置引用**：本檔建立在既有 `canon/_working/brief_refactor/evidence/ledger_part3_story_timeline_ending.md`（逐行讀完 Brief 行 9251–11034 的證據）之上，該檔已識別 Cluster G（穩定性標籤不一致）同多個結構性缺口；本檔補上 story_construction 源頭側（Outline/CDL/QQ）的批核狀態核實。

**關鍵背景事實（適用於全部 8 個事件）**：
- `ACT_I_OUTLINE.md` v1.18 於 2026-04-09 **正式 APPROVED**（唯一完成正式批核的 Act）；`ACT_I_BEAT_SHEET.md` 13 個 beat 已生產但狀態仍係 `[DRAFT]` 待批核（即使 Act I，Beat Sheet 層都未批核）。
- `ACT_II_OUTLINE.md` 現時 v0.11，header 明確標 **`[DRAFT — 待作者批核]`**（2026-07-06）。Act II 全幕 Outline 從未收過任何形式（包括暫定）嘅整體批核，即使入面個別 beat 嘅底層 CDL 已經 AC。Act II **無 Beat Sheet 層**。
- `ACT_III_OUTLINE.md` v0.6 於 2026-07-09（Round 073，CDL-325）獲作者 **「暫時當批核」**——明確非最終 signoff，Beat Sheet 設計過程中如發現結構性問題仍可調整。Act III **無 Beat Sheet 層**（下一步仍是「進入 Beat Sheet 層設計」）。
- **Act IV Outline 全書仲未正式設計**——此為 2026-07-09 至最新 Round 182（2026-09-05，距今僅 10 日）持續確認嘅「主阻塞點」，逐輪 SESSION_LEDGER 記錄不斷覆述「不改變主阻塞點（Act IV Outline 正式設計）」。**呢句話屬實且係最新狀態**，並非過時講法。
- Brief timeline 引用嘅「ACT_III_OUTLINE.md v0.4」係舊版本——現存檔案已演進到 v0.6（v0.4→v0.5 移除 Phase K/L 出 Act III scope；v0.5→v0.6 新增 J0）。**版本引用本身已過時**，但 v0.4 涵蓋嘅 Phase G-J 核心事件內容在 v0.6 中大致保留延續（非被推翻），所以版本號過時不等於內容失效。

---

### 事件：操父親出賣 / 紗夜犧牲

- **event_core_status**: CONFIRMED — CDL-231（父親背叛+紗夜犧牲+耳鳴遮蔽機制）、CDL-232（QQ-58 RESOLVED，紗夜遺言呈現方式）、CDL-234（父親台詞）均為 AC，2026-04-16 作者確認；已寫入 `ACT_II_OUTLINE.md` Beat E-09a。
- **beat_sequence_status**: DRAFT — E-09a 本身作為 beat 已存在於 Outline，但 `ACT_II_OUTLINE.md` 整份 v0.11 仍係 `[DRAFT — 待作者批核]`，未有 Act II Beat Sheet 層。
- **scene_execution_status**: DRAFT — 開放項清單明確列「E-09a：紗夜犧牲場景具體執行（耳鳴起點/音效設計）；父親台詞抵達方式（電話/文件/轉述）」未定。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY — 事件核心（父親出賣+紗夜犧牲會發生）已 AC，marker 若讀作「呢件事本身可能唔發生」係過度；但執行細節確實未定，marker 對 scene 層有效。
- **Story Phase 冇標記是否屬於漏標**: YES — Phase 2 全文（story-strip + full-text）以「已發生既定事實」語氣敘述，包括感官細節（耳鳴遮蔽），冇任何暫定標記，讀者會誤以為執行細節都已批核。
- **建議**：正常寫事件核心（父親出賣/紗夜犧牲會發生），但耳鳴遮蔽嘅具體演出方式可加極輕量註記（例如「呈現手法仍在細化」），唔需要重標籤。

---

### 事件：操人偶牆

- **event_core_status**: CONFIRMED — CDL-217（Q-R6=B，公告與決戰分開事件）+ CDL-218（Q-R7=D，錯位雙殺，操 Day13/紫音 Day14）均 AC 2026-04-13，並有 2026-05-19 場地 addendum AC（帝國廣場）。timeline_raw「兩人同時犧牲」設定已被正式廢除。
- **beat_sequence_status**: DRAFT — E-III-I1 存在於 `ACT_III_OUTLINE.md` v0.6，但整份 Outline 只係「暫定批核」，無 Act III Beat Sheet。
- **scene_execution_status**: DRAFT — 死因機制細節（CDL-330，2026-07-14「本身冇預死亡，但最後死咗」精確心理分析）雖已落 CDL，但仍標「具體對白wording／鏡頭角度／XSec timing」留 Beat Sheet；遺言方向已定但逐字措辭未鎖。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY — 操會喺 Day13 用人偶牆犧牲呢個大方向已 AC，唔應被讀成「可能唔發生」；但死因心理分析嘅精確措辭、演出細節確實仍屬 Outline-provisional 層級，marker 對此有效。
- **Story Phase 冇標記是否屬於漏標**: YES — Phase 4 用近乎逐字重複嘅 story-strip + full-text 提供極精確嘅死因心理分析同遺言，完全冇暫定標記，讀者會將 scene-execution 級細節誤讀為已批核 canon。
- **建議**：正常寫「操會喺人偶牆犧牲」；死因心理分析措辭可維持現有精煉度但唔需降級，因為 CDL-330 已 AC 咗呢個心理機制本身——只需為「逐字遺言/鏡頭語言」呢類仍待 Beat Sheet 嘅部分加細小狀態提示。

---

### 事件：紫音自爆

- **event_core_status**: CONFIRMED — CDL-216（紫音為處刑目標）+ CDL-218（錯位雙殺，紫音 Day14）均 AC 2026-04-13，場地 addendum AC 2026-05-19（帝國廣場）。
- **beat_sequence_status**: DRAFT — E-III-I3 存在於 v0.6 Outline，同上，Act III 整體只暫定批核，無 Beat Sheet。
- **scene_execution_status**: DRAFT — 遺言方向已定（「我無治癒成功...」），但逐字措辭、過載觸發嘅鏡頭語言仍屬 Outline 敘述，未進 Beat Sheet/Scene 層。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY — 同操人偶牆，大方向已 AC，marker 對「呢件事會唔會發生」層面過度，但對演出細節有效。
- **Story Phase 冇標記是否屬於漏標**: YES — 同上，Phase 4 全文以定案語氣敘述。
- **建議**：同操人偶牆——大方向正常寫，逐字/鏡頭語言細節可加輕量狀態提示。

---

### 事件：凜相認與崩潰

- **event_core_status**: CONFIRMED（大方向）— CDL-215（凜弧線確定為 Unit 00-Null，AC）、CDL-219（美夜子/晴香姊妹關係設定，AC 2026-04-16）、CDL-274（兩步相認分層設計）均已落 CDL；「美夜子係晴香親姊姊」「凜選擇不治癒」呢兩個大方向已確認。
- **beat_sequence_status**: DRAFT — 具體 beat 拆分（H1/H1.5/H2/I4/I5）屬 v0.6 Outline 內容，且 CDL-274 嘅 Step 1 位置喺 2026-07-05 先被修正（由 H1.5 移至 I4），顯示呢層仍在演化中；Act III 無 Beat Sheet。
- **scene_execution_status**: DRAFT — Outline 原文明確聲明「三段式覺醒...此 beat 為 Outline 層濃縮呈現，細節留 Beat Sheet」。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY（相認崩潰部分）— 大方向已 AC，但**額外發現一個結構性缺口**：114年3-4月「凜的相認」呢個 timeline 節點，喺任何 Story Phase story-strip 都完全冇對應（Phase5 只有高度濃縮嘅「0.5 凜介錯」，冇提相認過程本身）。呢個唔止係漏標問題，而係 Brief 讀者向敘述完全跳過咗呢個事件。
- **Story Phase 冇標記是否屬於漏標**: 部分 YES（凜介錯場景有寫但冇標記）+ 部分屬於「完全冇寫」（相認過程）。
- **建議**：相認崩潰大方向正常寫；但要向作者確認 Brief 讀者向要唔要補返「相認」呢一步（現時完全缺席），定係刻意留喺 timeline 唔擴展到 Phase 敘述。

---

### 事件：美夜子三段式覺醒（打破避難所詛咒、發現黑貓係姊姊）

- **event_core_status**: CONFIRMED — P-A01（貓殼碎裂）+ P-A12（無語言相認）兩個 Plant 嘅 Payoff 位置已確認移至 I4（2026-07-05 修正）；核心事件（貓殼碎裂、確認姊妹身份）方向已定。
- **beat_sequence_status**: DRAFT — E-III-I4 屬 v0.6 Outline，Outline 原文明確標註「對齊 `04_timeline_canon.md` event-miyako-awakening，此 beat 為 Outline 層濃縮呈現，細節留 Beat Sheet」。
- **scene_execution_status**: DRAFT — 三段式覺醒嘅具體演出（存在確認測試嘅生理刺激方式、擁抱崩潰嘅鏡頭語言）全部未進 Beat Sheet/Scene 層。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY — 大方向已有 Plant/Payoff CDL 支持，但**呢個節點同樣喺 Phase5 完全冇獨立對應**（Phase5 只有「0.5 凜介錯」提及同一晚嘅事，冇覆蓋「打破詛咒」同「發現黑貓係姊姊」呢兩步）——結構性缺口，唔止係穩定性標籤問題。
- **Story Phase 冇標記是否屬於漏標**: 主要係「漏事件」而非單純漏標——呢個事件喺 Brief 讀者向敘述入面幾乎唔存在獨立段落。
- **建議**：向作者確認呢個事件係咪應該喺 Phase5 補一個獨立段落（現時只喺 timeline 出現完整版本）。

---

### 事件：晴香甦醒（主觀二十年結束）

- **event_core_status**: UNCONFIRMED（比其餘 7 項明顯低一級）— Round 080（2026-07-12）CDL-327 落檔咗結局嘅**性質**（晴香保留記憶、主動融合、非被動失憶；美夜子 80 歲自然死亡）屬 AC；但「主觀二十年」呢個具體經歷內容、L1-L3 心理機制、幾時/點樣甦醒，全部仍屬 Round 074-075（2026-07-09/10-11）co-design 階段嘅 QQ-139~147，**全部未落 CDL**，且原 Phase K/L 草稿文字明確聲明「唔代表現有寫法已確認」。截至 Round 182（2026-09-05，最新），主阻塞點依然係「Act IV Outline 正式設計」，全書未動筆。
- **beat_sequence_status**: UNCONFIRMED — 唔存在於任何已批核（哪怕暫定）嘅 Outline；相關材料全部喺 `ACT_III_OUTLINE.md` 文末「⏸️ 移出 Act III scope — Act IV 草稿材料」附錄，明確標「純屬歷史草稿保留，未經批准」。
- **scene_execution_status**: UNCONFIRMED — 未有任何 Scene/Script 層材料；連 Beat 層都未存在。
- **timeline pending-approval 標記是否仍然有效**: YES，完全有效——呢個係 8 個事件入面 marker 最準確嘅一個。Brief timeline 段末警示框（「Act IV Outline 全書仲未開始正式設計...此節僅供理解走向，唔應視為定案」）**屬實、最新、無誇大**。
- **Story Phase 冇標記是否屬於漏標**: YES，而且係最嚴重嘅一個——Phase6 + Ending 章節以完全定案嘅語氣（包括「全篇最後一個鏡頭」呢類收尾定位聲明）敘述建基於呢個尚未存在嘅 Act IV Outline 嘅內容，冇任何暫定標記。
- **建議**：**明確 draft 標籤**——Phase6 + Ending 應加入清晰狀態提示（例如段首 note：「以下內容反映目前 Act IV 方向共識，正式 Outline 尚未完成，細節可能調整」），唔應該同 Act I-III 內容同一寫法呈現。

---

### 事件：最終決戰（帝國廣場決戰）

- **event_core_status**: CONFIRMED（大方向）— 決戰喺帝國廣場發生、三武器揭露序列、夕接管、彩奪回犧牲、黑奏 Transform 消散，分別由 CDL-002/006/007/266/288（AC 2026-06-01）/321/185/076 等支持落實。
- **beat_sequence_status**: DRAFT — J0-J8 全部屬 v0.6 Outline（暫定批核），部分 beat（J5/J6/J9）本身仲標「btd — CDL待登記」，顯示連 Outline 層都未完全填滿；無 Beat Sheet。
- **scene_execution_status**: DRAFT — 三武器揭露具體順序/場景承載、J6 內容（QQ-176 討論中，明確話「唔好當定案」）等仍係開放設計項。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY — 決戰會發生、基本結構已 AC；但部分子 beat（尤其 J6）連 Outline 層都未定案，加上 Act III 只係暫定批核，marker 對細節層面有效，對「會唔會發生」層面過度。
- **Story Phase 冇標記是否屬於漏標**: YES — Phase4 以完整結構化清單（三重攻擊①②③）敘述，冇標記邊部分仍係 btd。
- **建議**：大方向正常寫；J6（晴香嘗試切除夕）呢類仍在 QQ-176 討論中嘅內容，若 Brief 有提及呢個具體情節，需要額外留意唔好寫死。

---

### 事件：114年3月「Act II幕末二段」（晴香菲部分融合、剪髮明志、情緒管理局鐵桶包圍、強制進入Act III）

- **event_core_status**: CONFIRMED（個別 CDL 層面）— E-15（部分融合/剪髮，CDL-197/228/235）+ E-16（EMB鐵桶包圍，CDL-285，經 CDL-359 由三段收斂為兩段）均係已落 CDL 嘅正式設計，寫入 `ACT_II_OUTLINE.md`。
- **beat_sequence_status**: DRAFT，而且係全部 8 個事件入面**唯一一個連「暫定批核」都未達到**嘅——E-15/E-16 雖然係正式 beat，但成份 `ACT_II_OUTLINE.md` v0.11 header 明確標 `[DRAFT — 待作者批核]`，冇收過任何形式（包括暫定）嘅整體批核，比 Act III（暫定批核）狀態更低。
- **scene_execution_status**: DRAFT — 開放項列明「E-15：剪髮具體執行（自剪/他剪/儀式環境）；陰影視覺具體感官描述」未定。
- **timeline pending-approval 標記是否仍然有效**: PARTIALLY-TO-NO——個別 CDL 已 AC，但成個 Act II Outline 未批核呢個事實令 marker 喺 beat 層面其實係合理甚至可能仲唔夠嚴謹（因為連 Act II 都仲係 DRAFT，唔止呢一個 beat）。
- **Story Phase 冇標記是否屬於漏標**: NO，呢個唔係「漏標」問題——**呢個事件完全冇喺任何 Story Phase story-strip/full-text 出現過**（Phase2 同 Phase3 之間有結構性缺口），純粹只存在於 timeline。所以唔存在「Phase 冇標記」嘅矛盾，因為 Phase 層面根本冇寫呢件事。
- **建議**：需要作者決定：(a) 補一個 Phase 段落覆蓋呢件事（若補，應帶狀態提示因為 Act II Outline 未批核），或 (b) 維持只喺 timeline 出現嘅現狀。

---

## 總結（詳見對話回覆，<400字）
