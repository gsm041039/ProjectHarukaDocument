# ACT I SEQUENCE MAP

**狀態：全部內容 `[DRAFT — AI_PROPOSED_CANDIDATE，待作者過目]`**
**依據：** ACT_I_OUTLINE.md v1.22（已批核 `[AC]`）+ ACT_I_BEAT_SHEET.md「正式 BEAT SHEET 層（2026-09-11 生產）」13 個 beat 條目 `[DRAFT]` + CROSS_ACT_FORESHADOW_MANIFEST.md
**層級聲明：** 本文件係 Sequence Boundary 層——決定邊幾個 beat 組成一場連續戲、中間喺邊度切。唔含具體對白 / 鏡頭 / timing（呢啲留返 Scene/Script 層）。
**決策級別：** 純結構組織決定（分段方案 + 邊界揀選），屬 AI_PROPOSED_CANDIDATE，唔涉及主題/角色身份/reveal 策略，故由 AI 自行揀選推薦方案，唔設 author-choice 選項式提問；但全部內容status 標 DRAFT，待作者過目/ 可推翻。

---

## ⚠️ 前置修正：Beat 排序錯誤（設計本文件時發現）

設計 sequence 邊界時，發現 `ACT_I_BEAT_SHEET.md` 嘅章節頭述行（Beat 次序清單）將 **Beat 4.5（E-1.5）錯放喺天台使命說明之後、Beat 2 之前**，同埋將 **Beat 4.2（彩正式入隊）錯放喺 Beat 3 之後、Beat 5 之前**。

證據對比：
- Beat 4.5 自己嘅 entry state 寫明「承接 E-03 後遺症期間嘅日常互動」（CDL-138）
- Beat 4.2 自己嘅觸發條件寫明「E-04悲鳴女妖首戰後」（CDL-151）
- `ACT_I_OUTLINE.md` v1.22 已批核嘅「正確敘事順序」頭述行本身就係：Beat 0 → Beat 0c → Beat 1（E-01）→ Beat 0d → Beat 2（E-02）→ Beat 2.5 → Beat 2.6 → Beat 3（E-03）→ **Beat 4.5（E-1.5）→ Beat 5（E-04）** → [NC]+[SQ-A] → Beat 6（E-XX）

三個證據互相印證，確認正確順序係 Beat 3 → Beat 4.5 → Beat 5 → Beat 4.2，同 Beat Sheet 頭述行原寫嘅相反。呢個屬 `LOCAL_ORDERING_ERROR`（純標示錯誤，同 Outline v1.22 修正嗰種同一性質），**唔係 AUTHOR_DECISION**，已直接修正：`ACT_I_BEAT_SHEET.md` 章節頭述行、Beat 4.5／Beat 3／天台使命說明三個條目嘅 exit state／pressure into next beat 欄位、以及 Obligation Pass 入面「Missing bridges」一行都已同步更正並加咗 housekeeping correction 註記。

下面嘅 Sequence Map 全部以修正後嘅順序（Beat 3 → Beat 4.5 → Beat 5 → Beat 4.2）為準。

---

## 三個分段方案比較

### 方案 A — 跟場景地點分（location-based）

按物理場景/地點分組：家中街道 / 學校欺凌 / 學校戰場 / 家中夜晚+天台 / 城市戰場+秘密基地 / 日常後遺症場景 / 悲鳴女妖戰場 / 鏡中異空間，約 8 個 sequence。

**優點：** 對美術/環境資產分工、場景製作排程最直觀；每個 sequence = 一組要準備嘅場景資產。

**缺點：** 會將 Beat 0/0c 呢種 Outline 明確要求「一氣呵成」（CDL-127/132）嘅連續動作硬生生斬開做兩個 sequence；純粹跟地點分冇反映邊個位先係真正嘅戲劇單元邊界，容易將同一場緊張情緒嘅戲（例如 Beat 0c 僵局直接被 Beat 1 屍骸入侵打斷，中間冇任何場景轉換）錯誤地切成兩段。

### 方案 C — 純戰鬥次數分段（coarse battle-block）

以「每場戰鬥 = 一個大 sequence」做單位，將戰鬥前後所有日常/伏筆材料整塊塞入同一個大 sequence（例如「E-01 前後全部」「E-02 到 E-03 之間全部」），得出約 4-5 個超大 sequence。

**優點：** 心智模型最簡單，同劇本統籌時「呢場戰邊個範圍」嘅直覺一致。

**缺點：** Sequence 會過度肥大（十幾個 beat 塞一齊），核心戲劇問題會被稀釋——例如「Beat 0d + 天台使命」呢個獨立嘅「消化與承諾」情感單元、「Beat 3 + Beat 4.5」呢個獨立嘅「代價浮現與疏離感」情感單元，都會被吞併入更大嘅區塊，失去自己嘅 dramatic question，對後續 Scene 層設計冇幫助（Scene 設計師會搞唔清呢段到底核心係乜）。

### 方案 B — 戲劇單元分段（cost-signal-bounded dramatic unit，**推薦**）

以「外部觸發事件/時間地點斷裂點」為邊界，每個 sequence = 一個有獨立進入點、獨立戲劇問題、獨立收尾點嘅連續行動單元；邊界劃喺 Beat Sheet 本身已標註嘅 `pressure into next beat`／時間跳躍/地點轉換嘅位置。

**優點：** 直接沿用 Beat Sheet 已經做好嘅 Cost Signal Applicability 分類（`consequence-driven-progression.md`）——每個 sequence 嘅開始事件本身就係前一個 beat 嘅 cost signal 或明確時間跳躍，唔使另外發明分界邏輯；每個 sequence 都有清楚獨立嘅戲劇問題，方便直接對應落 Scene Objective 設計；sequence 數量（6 個）適中，唔會太瑣碎都唔會太肥大。

**缺點：** 需要跨場景/地點嘅 sequence（例如 SEQ1 橫跨家中→街道→學校→戰場），對美術資產分工冇方案 A 咁直觀；有少少判斷成分（部分邊界要睇 emotional beat 而唔淨係睇明確 cost signal）。

**推薦理由：** Sequence 嘅本質係「一場連續嘅戲，戲劇目的喺邊個位完成」，呢個定義同方案 A（純地點）或方案 C（純戰鬥次數）都唔完全對應，反而最貼近方案 B 嘅「戲劇單元」定義。而且方案 B 直接繼承咗 Beat Sheet 已經做嘅工，一致性最高，下游 Scene 層設計師睇到邊界就即刻知道呢段戲要交付咩情感/資訊功能。

---

## 推薦方案（方案 B）：6 個 Sequence

---

### SEQ 1 — 破曉與命運闖入

**包含 beat：** Beat 0（開場：家中→街道）+ Beat 0c（彩登場 + 桐生健欺凌）+ Beat 1／E-01（組隊，含變身）+ [SQ-A] 即時尾聲（桐生健記憶處理）+ 組隊後 [NC] 日常尾聲

**開始事件：** 晴香喺家中起床，展開規律日常儀式

**結束事件：** 桐生健事件（現實縫合失效 → 小貓膠布 + 「痛係證據」）處理完，晴香帶著「被需要」嘅初體驗放學回家

**核心戲劇問題：** 一個努力扮演「正常」嘅女仔，會唔會被迫直視自己控制唔到嘅命運？

**場景數量粗估：** 7-8 場（家中/街道一氣呵成算 1-2 場、學校走廊欺凌 1 場、屍骸入侵戰鬥 2-3 場、SQ-A 桐生健尾聲 1 場、組隊後 NC 日常 1-2 場）

**同下一個 sequence 嘅銜接：** 時間跳躍（放學回家 → 當晚），SEQ 2 由晴香獨處嘅夜晚開始

---

### SEQ 2 — 消化與承諾

**包含 beat：** Beat 0d（E-01 當晚）+ 天台使命說明（次日）

**開始事件：** 晴香獨自喺屋企消化 E-01 心理衝擊，熱可可儀式

**結束事件：** 天台上，晴香主動追問「咁我要點做？」，全盤接受「維多利亞天使」使命

**核心戲劇問題：** 呢個新身份係咪真係佢渴望嘅嘢，定係另一個陷阱？

**場景數量粗估：** 2-3 場（夜晚獨處無台詞純視覺 1 場、天台對話 1-2 場）

**同下一個 sequence 嘅銜接：** 時間推進（日常繼續累積，直到下一場戰鬥觸發），近乎場景轉換

**⚠️ 核實結果（2026-09-11）：SEQ2 內容已喺 SEQ1 場景 8 完整涵蓋，唔需要獨立 Blueprint/Script/Review 檔。** 核對 `ACT_I_SEQ1_SCENE_ARCHITECTURE.md`／`ACT_I_SEQ1_DIALOGUE_BLUEPRINT.md`／`ACT_I_SEQ1_SCRIPT.md` 確認：SEQ2 定義嘅兩個 beat（Beat 0d 夜晚獨處、天台使命說明）已經分別完整寫成 SEQ1 嘅場景 7（夜晚獨處段，無台詞純視覺，熱可可儀式）同場景 8（天台使命說明，完整對白+Blueprint 三段式結構），三份 SEQ1 文件本身已明文註記呢個跨 sequence 邊界安排（見 `ACT_I_SEQ1_SCENE_ARCHITECTURE.md`「同 Sequence Map 嘅邊界差異」段）。SEQ2 冇剩返任何未涵蓋嘅內容，故唔需要另開 `ACT_I_SEQ2_DIALOGUE_BLUEPRINT.md`／`ACT_I_SEQ2_SCRIPT.md`／`ACT_I_SEQ2_COVERAGE_REVIEW.md`——SEQ1 既有文件同時滿足 SEQ1 同 SEQ2 兩個 sequence 嘅交付。

---

### SEQ 3 — 偽亮色隊伍組建期

**包含 beat：** Beat 2／E-02（首戰 + 操入隊）+ Beat 2.5／E-02.5（紫音珍寶珠入隊）+ Beat 2.6（[NC] 秘密基地建立任務）

**開始事件：** 大型屍骸戰鬥爆發（首次魔法少女協同戰鬥）

**結束事件：** 秘密基地建立完成，四人由「戰鬥搭檔」升格為「有共同秘密嘅夥伴」

**核心戲劇問題：** 呢班各自帶住唔同傷口嘅少女，可唔可以建立返真正嘅羈絆？

**場景數量粗估：** 6-7 場（E-02 戰鬥 2-3 場、紫音後巷珍寶珠 1 場、秘密基地夜潛任務 2-3 場）

**同下一個 sequence 嘅銜接：** 時間跳躍（物資/日常推進，直到後遺症症狀顯現）

---

### SEQ 4 — 代價浮現與疏離感

**包含 beat：** Beat 3／E-03（情緒連結後遺症）+ Beat 4.5／E-1.5（彩/黑奏切換目睹，AKS-S0）

**開始事件：** 情緒連結使用後守恆定律 Layer 1 首次顯現（異常疲憊 + 可樂失味）

**結束事件：** 晴香目睹彩短暫失神，被若無其事轉移話題後，不安感沉澱喺表面平靜之下

**核心戲劇問題：** 呢種身體代價、呢種怪異嘅一瞬異常，係咪淨係自己諗多咗？

**場景數量粗估：** 4 場（後遺症現象層展示+慶功對比 1-2 場、紫音遞可樂日常 1 場、E-1.5 切換目睹 1-2 場）

**同下一個 sequence 嘅銜接：** 時間跳躍（日常繼續，直到下一場戰鬥觸發）

---

### SEQ 5 — 體制壓迫初現

**包含 beat：** Beat 5／E-04（悲鳴女妖首戰 + 凜前史初建 + 紫音肢體扭曲）+ Beat 4.2（彩正式入隊）

**開始事件：** 無臉執行官（悲鳴女妖）出現，晴香等人不敵

**結束事件：** 全員重傷後，彩以怯懦但堅定姿態提出幫手，正式加入隊伍，五人隊定型

**核心戲劇問題：** 呢個世界真正嘅敵人，係咪淨係隨機怪物咁簡單？

**場景數量粗估：** 4-5 場（悲鳴女妖戰鬥 2 場、紫音超載阻止+凜PTSD閃回 1 場、情緒管理局遠景彩蛋 1 場、彩入隊 1 場）

**同下一個 sequence 嘅銜接：** 短暫日常緩衝（近乎無縫，[NC] 過場後直入幕末觸發）

---

### SEQ 6 — 幕末：夕的顯現

**包含 beat：** Beat 6／E-XX（夕整合，含觸發前 [NC] 緩衝）

**開始事件：** 雙重外部 Cost Signal 夾擊（CGM 低血糖警報驟響 + 面對 E-04 戰鬥物理衝擊已有裂縫嘅鏡子）

**結束事件：** 夕整合完成，晴香回到隊伍，五人隊偽溫暖畫面收結，自然銜接 Act II 開場

**核心戲劇問題：** 晴香壓抑咗成十幾年嘅嘢，終於要面對？

**場景數量粗估：** 3 場（觸發前獨處緩衝 1 場、鏡中夕接觸/道歉/融合 1-2 場、回歸隊伍收尾 1 場）

**同下一個 sequence 嘅銜接：** 場景轉換，Act I → Act II

---

## Cross-Act Foreshadow 落點檢查

對照 `CROSS_ACT_FORESHADOW_MANIFEST.md`：Act I 全部 plant（P-A01~A25）都係喺各自嘅原生 beat 內完成植入，冇一個 plant 需要跨 sequence 邊界先完成（例如 P-A09 紫音手臂傷口喺 SEQ5 內完整種入；P-A05/AKS-S0 喺 SEQ4 內完整種入；P-A10/AKS-H1 喺 SEQ6 完整觸發）。故本 sequence 分段冇破壞任何已確認嘅伏線植入完整性。

---

## AUTHOR_DECISION 撞擊檢查

本輪設計過程中**冇撞到**主題/角色身份/reveal 策略/Act 架構級嘅 AUTHOR_DECISION。唯一撞到嘅係上面已記錄嘅 Beat 排序標示錯誤，屬純結構性 housekeeping correction（同 Outline v1.22 修正同一性質），已自行修正並留低完整證據追溯，**無需寫入 QUESTION_QUEUE.md**。

---

**Last Updated:** 2026-09-11（首次設計，AI_PROPOSED_CANDIDATE，待作者過目）
