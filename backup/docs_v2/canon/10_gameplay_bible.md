# Gameplay Bible（遊戲聖經）

> **讀者指引**：本文件涵蓋核心玩法 loop、戰術戰鬥、UI 系統、社交系統與任務設計。首次閱讀建議從 [§ 動態干預系統](#section-core-loop) 開始。
> 相關文件：[World Rules](01_world_rules_and_costs.md) | [Glossary](02_glossary.md) | [Entities](07_entities_and_devices.md)

<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md, backup/screenwriter/12_Social_Evaluation_Quest_System.md, backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md -->

---

## <a id="section-scope"></a>文件職責邊界

- 本文件只負責其對應 Canon 範圍，不重寫其他文件的完整內容。
- 術語完整定義只放在 [Glossary](02_glossary.md)。
- 世界規則完整定義只放在 [World Rules](01_world_rules_and_costs.md)。
- 事件時間與因果完整定義只放在 [Timeline](04_timeline_canon.md)。

---
## <a id="section-core-loop"></a>Core Gameplay Loop：動態干預系統 (Dynamic Intervention System)

**遊戲願景**：你不是在「打怪」，而是在「終結魔法少女們持續複製的噩夢」。

### <a id="section-tactical-window"></a>戰術視窗 (Tactical Window) 觸發機制

玩家作為晴香在戰鬥中觀察隊友，系統動態生成最佳干預時機：

- **威脅感知**：隊友即將受到致命攻擊，晴香可插入掩護/嘲諷
- **戰術發現**：晴香察覺敵人弱點，可提示隊友利用或自己執行
- **移動機遇**：空間出現有利位置，可命令隊友移動或自己搶位
- **弱點暴露**：敵人架勢崩潰，可指揮集火或接近執行靈魂抽離
- **玩家主動**：隨時暫停進入戰術視角，手動規劃 3 秒內行動序列

### 四階段流程

1. **佈局** — 觀察隊友狀態（情緒條、架勢條、戰鬥風格）與敵人模式
2. **觸發** — 系統偵測關鍵時機彈出「戰術視窗」慢動作（子彈時間）
3. **決策** — 選擇介入方式：保護/增幅/組合攻擊/靈魂抽離/戰術物品
4. **執行** — 晴香執行指令，隊友回應（信任度影響成功率與配合度）

**設計理念**：玩家並非「控制全隊」，而是「有限度地影響已失控的戰場」。

---

## <a id="section-empathy-interface"></a>絕對共感視界 (Absolute Empathy Interface)：晴香專屬情報系統

**核心設定**：因晴香是世界創造者，她能直觀「看見」他人情緒與意圖（但無法改變）。

### UI 元素

- **情緒條 (Emotion Gauge)**：每位隊友頭頂顯示當前情緒飽和度（平靜藍→激動橙→失控紅）
- **架勢條 (Posture Bar)**：敵我雙方戰鬥姿態穩定度（滿→易被打斷，空→可處決）
- **仇恨線 (Aggro Threads)**：紅線連接敵人與目標，粗細代表威脅優先級
- **範圍警告 (AoE Prediction)**：敵人蓄力攻擊時地面提前顯示傷害範圍（橙色→紅色倒計時）
- **心之隙縫 (Soul Fissure)**：[魔法屍骸](07_entities_and_devices.md#section-magical-corpse)架勢破碎時胸口出現金色裂縫標記（可抽離靈魂）
- **情緒圖標 (Emotional Icons)**：隊友頭頂浮現即時情緒符號（憤怒/恐懼/悲傷/麻木）
- **對話提示 (Dialogue Cues)**：戰鬥中隊友呼叫晴香時，對應選項附帶「預測回應效果」標籤

### <a id="section-interface-progression"></a>與遊戲進程的關係

| 幕 | 介面狀態 | 敘事意義 |
|---|---------|---------|
| **第一幕** | 完整運作，晴香擁有「上帝視角」優勢 | 玩家相信自己掌控一切 |
| **第二幕** | [夕](03_characters/yu.md)的干擾導致雜訊（情緒條失準、仇恨線錯亂） | 開始質疑系統可靠性 |
| **第三幕** | 大規模失效，晴香被迫「像普通人一樣戰鬥」 | 失去特權，面對真實 |
| **第四幕** | 恢復，但晴香已學會不依賴它 | 成為「象徵性輔助」而非必需 |

---

## <a id="section-dual-system"></a>雙軌數值系統：假象與真實 (Dual Progression System)

**核心詭計**：遊戲刻意誤導玩家相信「殺死屍骸」是最優解，直到真相揭示。

### 假系統（遊戲前期呈現）

| 行動 | 獲得 EXP | 表面邏輯 |
|-----|---------|---------|
| **殺死** | 1000 | 「快速清場，高效升級」 |
| **淨化** | 200 | 「道德選項，但效率低」 |
| **靈魂抽離** | 0 | 「浪費時間的儀式」 |

### 真系統（遊戲後期揭示）

- **殺死** = 將情緒債務轉移到世界其他地方，製造更多屍骸（惡性循環）
- **淨化** = 暫時壓制，但未解決靈魂困境，屍骸會再次生成
- **靈魂抽離** = 真正終結痛苦循環，但耗時且需高信任度 + 精準時機

### <a id="section-system-failure"></a>系統失靈的四階段

| 階段 | 戰術視窗準確度 | 情緒條可信度 | 獎勵系統 | 象徵意義 |
|-----|-------------|------------|---------|---------|
| **完整運作** | 90%+ | 準確 | 假系統生效 | 玩家相信「殺戮有效」 |
| **輕微失靈** | 70% | 偶爾錯位 | 假系統開始穿幫 | 「為何屍骸越來越多？」 |
| **明顯失靈** | 40% | 嚴重延遲/反向 | 獎勵與結果脫鉤 | 玩家被迫質疑機制 |
| **完全崩潰** | 介面消失 | 無法讀取 | 數值無意義 | 晴香必須「憑感覺」行動 |

---

## <a id="section-soul-extraction"></a>靈魂抽離機制 (Soul Extraction Mechanic)

**核心體驗**：將戰鬥變為「心理干預」——玩家需理解屍骸生前痛苦，找到正確「解脫方式」。

### 三階段流程

1. **架勢破碎 (Posture Break)**
   - 持續攻擊或利用弱點使屍骸架勢條歸零
   - 胸口出現金色「心之隙縫」標記，進入可抽離狀態（8 秒時限）

2. **共感連結 (Empathy Link)**
   - 晴香靠近並按住互動鍵，進入靈魂對話場景
   - 玩家需從 3-4 個對話選項中選擇「最能安撫該靈魂」的回應
   - **[求救型](07_entities_and_devices.md#section-mc-psychology)**（藍色光暈）：選項偏向「理解/陪伴/承諾記住」→成功率高
   - **[拒絕型](07_entities_and_devices.md#section-mc-psychology)**（紅色光暈）：選項偏向「尊重選擇/不強迫/留有退路」→需多次嘗試

3. **靈魂抽離 (Extraction)**
   - 成功：靈魂化為光點消散，屍骸肉體崩解，獲得「記憶碎片」（解鎖 codex 條目）
   - 失敗：屍骸進入短暫「暴怒狀態」（攻擊力 +50%，移動速度 +30%，持續 15 秒）

### 隊友參與系統

部分屍骸需「特定隊友」參與抽離才能成功：
- **例**：前維多利亞之淚成員 → 朔參與成功率 +40%
- **例**：被軍方改造的少女 → 美夜子參與可解鎖隱藏對話

---

<a id="section-social-reputation"></a>
## <a id="section-social-system"></a>社交系統：風評三階段 (Social Reputation System)

**核心設定**：晴香的偶像身份與魔法少女身份存在矛盾，玩家行動會影響公眾認知。

### 階段一：維多利亞天使期（第一幕）

- **[光幕濾鏡](02_glossary.md#term-light-veil)**：[現實縫合機制](01_world_rules_and_costs.md#rule-reality-stitching)自動美化魔法少女形象
- **任務類型**：「拯救迷路小貓」「阻止銀行搶劫」「慈善活動護衛」
- **NPC 反應**：崇拜/感激/請求簽名合照
- **遊戲體驗**：輕鬆愉快，玩家享受「被需要」的錯覺

### 階段二：裂痕與質疑期（第二幕）

- **濾鏡穿幫**：現實縫合開始失效，旁觀者偶爾「看見不該看見的」
- **任務變質**：「清理廢棄工廠屍骸」「處決失控的前隊友」「阻止真相傳播」
- **NPC 反應**：困惑/恐懼/開始在網路上發布「詭異目擊」
- **風評指標**：開始出現「負面新聞」計數器，影響部分 NPC 對話與商店價格

### 階段三：魔女狩獵期（第三幕高潮）

- **濾鏡破碎**：全城同時看見魔法少女與屍骸的真實面目
- **任務崩壞**：「鎮壓平民暴動」「保護被圍攻的隊友」「委託人是屍骸」
- **NPC 反應**：尖叫/逃跑/投擲石塊/呼叫軍方
- **巔峰場景**：晴香演唱會變成公審大會，觀眾席空無一人或充滿敵意

---

## <a id="section-ig-chronicle"></a>IG 敘事線 (Instagram Chronicle)

**設計目的**：透過社交媒體模擬「少女們試圖維持正常生活假象」的悲劇。

### 四階段演變

| 階段 | 時期 | 特徵 |
|-----|------|------|
| **強行營業期** | 第一幕前半 | 晴香高頻更新，其他角色帳號幾乎無更新 |
| **閃耀的日常** | 第一幕後半～第二幕前半 | 集體活躍但刻意迴避「魔法少女」話題，隱藏細節暗示異常 |
| **數位墓碑** | 第二幕後半～第三幕 | 隊友帳號逐一停更，每人發布「意味深長的最後貼文」 |
| **結局的迴響** | 第四幕後 | 倖存者重新發文，死去角色帳號變「數位墓碑」，全員存活解鎖合照彩蛋 |

---

## <a id="section-tactical-items"></a>戰術物品系統 (Tactical Items)

晴香可攜帶最多 4 種戰術物品進入戰鬥，每種限定數量。設計核心：**不是強化戰力，而是「彌補情報缺失」或「創造安全空間」**。

| 物品 | 效果 | 主題意義 | 獲得方式 |
|-----|-----|---------|---------|
| **金魚雷達** | 臨時恢復 15 秒情緒條顯示 | 依賴外物補足失去的「共感」 | 朔的工坊製作 |
| **金夫人花露水** | 降低目標屍骸仇恨值 30% | 用「香氣」安撫怪物（象徵溫柔） | 美夜子咖啡店兌換 |
| **替死鬼假人** | 吸引全體敵人 8 秒 | 「替身」與「犧牲」的隱喻 | 操的符咒商店 |
| **血糖手錶** | 晴香瀕死時自動觸發無敵 3 秒 | 對「崩潰」的物理干預 | 秋穗贈送（信任度 Lv.3） |

---

## <a id="section-level-design"></a>Level & Performance Integration（關卡與演出結合）

**核心原則**：每個關卡不僅是「戰鬥場地」，更是「角色內心世界的物理投影」。

### 關卡設計三層次

1. **L1 物理層**：可互動環境（倒塌柱子/爆炸油桶/上鎖的門）
2. **L2 敘事層**：場景暗示角色過去（美夜子關卡的焚毀醫院、操關卡的無人豪宅）
3. **L3 象徵層**：空間本身就是隱喻（彩的萬花筒迷宮 = 破碎人格、黑奏的齒輪地獄 = 機械秩序）

### 與導演手法的配合

- **[Alpha/Beta Line](01_world_rules_and_costs.md#rule-alpha-beta) 場景**：關卡中特定區域會「疊加過去與現在」，玩家需在雙重現實中找到唯一正確路徑
- **[鏡像法則](01_world_rules_and_costs.md#rule-mirror-law)**：Boss 戰場地為完美對稱空間（中軸線兩側是「理想與現實」的對比）
- **四幕氛圍轉變**：同一場景在不同幕重訪時，光線/配樂/NPC 對話完全不同

---

## <a id="section-failure-feedback"></a>失敗回饋與債務累積（母文檔回填）

失敗不只扣血或重試，而要把世界觀代價回寫到系統層，令玩家感受到「代價會留痕」：

1. **戰術失敗**：提高該區域敵人執念飽和度，下次進場更接近失控
2. **社交失敗**：風評提前惡化，NPC 支援與資源折扣下降
3. **倫理失敗**：錯誤抽離或粗暴共感可換短期收益，但會增加[因果債務](02_glossary.md#term-causal-debt)
4. **隊伍失敗**：隊內連結值下降，後續[情緒連結](02_glossary.md#term-emotion-link)成功率受罰

這一層回饋把[情緒守恆定律](01_world_rules_and_costs.md#rule-emotion-conservation)轉為可操作的玩法壓力，而非僅劇情設定。

---

## <a id="section-appendix"></a>Appendix：核心文檔連結

- **世界規則**：[World Rules](01_world_rules_and_costs.md) — 魔法系統、情緒守恆、代價機制
- **角色數據**：[Character Sheets](03_characters/) — 全角色背景、能力、心理分析
- **視覺規格**：[Visual Bible](06_visual_bible.md) — UI 設計語言、角色動畫規範
- **設定物**：[Entities](07_entities_and_devices.md) — 心匣、屍骸、組織
- **完整 Gameplay Doc**：gameplay/00_Core_Gameplay_Design_Document.md — 包含本 Canon 未涵蓋的技術細節
- **工具矩陣**：tools/Stage_Survival_Roster_Matrix.md — 角色存活/死亡排列組合與結局影響




## <a id="section-source-backfill"></a>Source Backfill


### Mapped Units
- ### **1. 遊戲核心願景 (Game Vision)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**::U001 -->
- #### **1.1 核心概念 (One-Liner):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**::U002 -->
- 一款結合第三人稱自由探索與電影化戰術決策的動作遊戲。玩家將在一個以香港為藍本、充滿中西文化衝突的都市中，體驗一位魔法少女在殘酷命運下，透過抉擇與羈絆尋找自身存在意義的深刻故事。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**::U003 -->
- #### **1.2 核心體驗支柱 (Core Experience Pillars):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**::U004 -->
- - **電影化的戰術戰鬥 (Cinematic Tactical Combat):** 戰鬥不僅是數值比拼，更是一場充滿動畫演出感的、需要觀察與策略的博弈。這體現在動態的鏡頭語言、極具表現力的角色動畫以及 punctuates 關鍵時刻的音效設計上。從完美閃避的特寫慢動作，到釋放必殺技時的專屬演出，所有設計都旨在讓玩家感覺自己正在主導一部高品質的戰鬥動畫。玩家的感受是「我像動畫主角一樣，預判了敵人的行動並漂亮地化解了」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**::U005 -->
- - **敘事與玩法的深度融合 (Narrative-Gameplay Integration):** 遊戲機制直接是故事主題的外在表現。例如，「情感耗損」不僅是資源條，它會直接影響遊戲的視覺與聽覺呈現——當耗損值過高時，遊戲畫面色彩會褪飽和，UI界面可能出現干擾訊號，晴香的待機動畫也會從活潑轉為疲憊。玩家的每一次抉擇，無論大小，都會被系統記錄，累積成最終的「態度光譜」，直接影響角色成長路徑與故事结局。玩家的感受是「我的變強與抉擇，都與晴...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**::U006 -->
- - **探索與移動的無縫結合 (Seamless Exploration & Traversal):** 玩家能在充滿垂直層次感與視覺細節的箱庭關卡中自由移動。獨特的移動系統不僅用於探索，更是戰鬥策略的一部分，允許玩家實現立體化的戰術佈局，如利用牆壁跑到敵人上方進行突襲，或在被圍攻時快速跳躍至安全的高台。玩家的感受是「這個世界既美麗又充滿了等待我去發現的秘密」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**::U007 -->
- #### **1.3 參考遊戲 (Reference Games):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**/**1.3 參考遊戲 (Reference Games):**::U008 -->
- - **戰術決策系統：** 《Final Fantasy XIII》的「典範轉移 (Paradigm Shift)」系統，啟發我們設計需要玩家根據戰況即時切換「態度」的策略深度。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**/**1.3 參考遊戲 (Reference Games):**::U009 -->
- - **移動與關卡探索：** 《尼爾：自動人形》的流暢第三人稱移動與多層次的箱庭關卡，是我們追求無縫探索體驗的標竿。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**/**1.3 參考遊戲 (Reference Games):**::U010 -->
- - **戰鬥哲學：** 《Hunter x Hunter》漫畫中的「念能力」戰鬥，啟發我們設計一場戰鬥的勝負手不僅在於力量，更在於情报的獲取（洞察敵人弱點）、策略的應用（利用環境）以及對自身能力代價的理解。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**1.2 核心體驗支柱 (Core Experience Pillars):**/**1.3 參考遊戲 (Reference Games):**::U011 -->
- ### **2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**::U012 -->
- 遊戲的預設狀態是第三人稱即時動作，玩家始終擁有角色的直接控制權。戰鬥的核心是在高速的即時攻防中，透過情境驅動的**「戰術視窗 (Tactical Window)」**，為玩家提供充滿策略性與電影感的決策機會。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**::U013 -->
- #### **2.1 戰鬥流程 (Combat Flow):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U014 -->
- 1. **佈局 (Positioning - 自由移動模式):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U015 -->
- - 此階段是風險評估與機會創造的過程。玩家使用標準第三人稱控制器，在戰場上自由移動，其核心目標是：維持有利的戰鬥距離、利用掩體規避非致命攻擊、以及主動觀察並靠近環境中的可互動元素與「連結點」，為觸發「戰術視窗」創造條件。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U016 -->
- 2. **觸發 (Trigger → 進入戰術視窗):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U017 -->
- - 當「關鍵事件」發生時，遊戲會自動進入時間緩滯的**「戰術視窗」**。觸發條件是動態且多樣的：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U018 -->
- - **威脅感知：** 敵人即將發動無法格擋的強力攻擊或從死角偷襲。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U019 -->
- - **戰術發現：** 玩家的視角或鎖定掃過可利用的環境物件（如易爆的霓虹燈招牌、可踢擊的石塊）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U020 -->
- - **移動機遇：** 玩家靠近可進行特殊移動的**「連結點」**（如建築邊緣、垂直的牆面）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U021 -->
- - **弱點暴露：** 成功使敵人進入特定狀態（如破防、屬性弱點暴露）的瞬間。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U022 -->
- - **玩家主動：** 玩家按住「集中」鍵，消耗少量能量以手動開啟視窗，從容地規劃並使用需要詠唱或瞄準的複雜技能。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U023 -->
- 3. **決策 (Decision - -戰術視窗內):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U024 -->
- - 在此短暫的「思考時間」內，玩家需快速做出關鍵決策。UI設計將極度簡潔，以風格化的圖標和最少的文字呈現選項。決策不僅限於攻防，更包含資源管理（是否要消耗大量能量使用強力技能）與「態度」選擇（切換至克制敵人的戰鬥姿態）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U025 -->
- 4. **執行 (Execution - 回歸即時):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U026 -->
- - 玩家確認指令後，時間恢復正常流速。遊戲將以一套流暢、無縫且充滿動畫感的電影化鏡頭，播放玩家所選指令的攻防結果。一個成功的決策鏈不僅會對敵人造成巨大傷害，更可能讓晴香在演出結束後，處於一個全新的、更有利的戰術位置，無縫銜接回「佈局」階段。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**2. 核心玩法循環：動態干預系統 (Core Loop: The Dynamic Intervention System)**/**2.1 戰鬥流程 (Combat Flow):**::U027 -->
- ### **3. 遊戲流程與結構 (Game Flow & Structure)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U028 -->
- 遊戲將嚴格遵循故事的**「偽三幕，真四幕」結構**，確保玩法與敘事節奏同步，讓玩家透過互動親身體驗主角的心路歷程。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U029 -->
- - **第一幕 (起 - 內在的戰爭):** 遊戲前期，關卡設計將更為線性與封閉（如狹窄的後巷、壓抑的廢棄建築），以反映晴香的內心困境。戰鬥將聚焦於讓玩家初步體驗【希望】（防禦與回復）與【憤怒】（近戰爆發）兩種核心「態度」的切換，並透過與「夕」的對決，將閃避與反擊等核心機制遊戲化。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U030 -->
- - **第二幕 (承 - 世界的試煉):** 隨著故事格局擴大，遊戲將解鎖更開闊、充滿垂直層次感的箱庭式關卡。此階段會解鎖如【洞察】等更具策略性的「態度」，並引入AI隊友（如美夜子、朔）。玩家可以在「戰術視窗」中為隊友設定大致的「戰術方針」（如集中攻擊、分散牽制），體驗團隊合作的樂趣。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U031 -->
- - **第三幕 (轉 - 結構性地震):** 對應故事的「偽高潮」失敗事件，遊戲將設計一場極具衝擊力的、玩家在機制上**幾乎必敗**的Boss戰。此戰的UI可能會發生變化，晴香的生命條被替換為不斷減少的「意志力」，而勝利條件並非擊敗Boss，而是「存活一定時間」或「保護某個目標」。最終的「失敗」將由劇情強制觸發，讓玩家深刻體驗到敘事上的顛覆與無力感。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U032 -->
- - **第四幕 (合 - 態度的勝利):** 遊戲後期的設計，會從「如何戰勝」轉向「如何存在」。任務中會出現明確的「態度」抉擇，並直接反映在玩法上。例如，面對一個痛苦的魔法屍骸，玩家可以選擇直接「摧毀」（傳統戰鬥），或是選擇「淨化」。選擇「淨化」可能會觸發一個特殊的、基於節奏或解謎的非戰鬥玩法，成功後雖然獎勵較少，但會累積正向的「態度光譜」點數，最終影響結局。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**3. 遊戲流程與結構 (Game Flow & Structure)**::U033 -->
- ### **4. 戰鬥系統詳解：動態干預與敘事鏡頭**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**::U034 -->
- #### **4.1 「戰術視窗」的觸發與運作邏輯**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U035 -->
- - **核心哲學：有機的戰術機會** 本系統的設計核心，不再是硬性的「模式切換」，而是追求一種**「有機的戰術機會」**。玩家在流暢的第三人稱即時戰鬥中，會不斷「感知」和「發現」由系統提示的戰術機會。「戰術視窗」不是一個打斷流程的暫停，而是主角晴香因其「高共鳴性情緒增幅器」體質，在關鍵時刻感知力被放到最大的遊戲化體現。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U036 -->
- - **觸發邏輯：威脅頻率與事件分級 (Threat Frequency & Event Tiering)** 「戰術視窗」是一種有限的、寶貴的反應資源，濫用會導致主角反應不過來。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U037 -->
- - **威脅頻率限制：** 敵人的攻擊分為「普通威脅」和「致命威脅」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U038 -->
- - **普通威脅**（例如雜兵的連續普通攻擊）：不會觸發「戰術視窗」。玩家必須在即時操作中自行閃避或格擋。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U039 -->
- - **致命威脅**（精英怪的蓄力重擊、Boss的必殺技、視線外的偷襲）：才會觸發「戰術視窗」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U040 -->
- - **反應不及機制：** 如果在短時間內連續出現多個「致命威脅」（例如被三個精英怪同時蓄力圍攻），系統可能只會觸發第一個威脅的「戰術視窗」。如果玩家未能在此視窗內脫離險境，後續的攻擊將會直接造成傷害。這模擬了主角在極度混亂的戰場中「反應不及」的真實感，強調了玩家在自由移動模式下進行控場和走位的重要性。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U041 -->
- - **事件合併觸發 (Grouped Event Trigger):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U042 -->
- - 系統會智能地將時間點相近、且戰術上關聯的「致命威脅」合併為同一個「戰術視窗」，創造更複雜、更電影化的決策情境。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U043 -->
- - **情境舉例：** 敵人A從前方發動蓄力斬，同時敵人B從右後方進行射擊。「戰術視窗」開啟，玩家的視角會自動拉到一個能同時觀察到兩個威脅的廣角鏡頭，此時玩家需要做出一個能同時化解兩個危機的決策（例如，向左前方閃避，既能躲開斬擊，又能以敵人A為掩體擋住子彈）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U044 -->
- - **觀察與情報：沉浸式觀察與模糊提示 (Immersive Observation & Intel)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U045 -->
- - 為了模擬真實戰鬥的緊張感，「戰術視窗」將**不會提供精確的「預告線」**。情報的獲取將依賴玩家的主動觀察。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U046 -->
- - **沉浸式觀察：** 進入「戰術視窗」後，玩家的視角將與主角的感知同步。玩家的操作（右搖桿）不再是自由移動攝影機，而是驅動主角產生快速、自然的「環顧四周」的頭部動畫。鏡頭會跟隨主角的視線，模擬真人在電光火石間掃描威脅的緊張感，讓玩家完全代入主角的視角進行觀察與判斷。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U047 -->
- - **模糊/自然提示：** 系統會用更自然的視覺和聽覺提示取代預告線，例如敵人武器上的紅光、狙擊鏡的反光、獨特的蓄力音效或肌肉緊繃的動畫。UI上可能只會在螢幕邊緣出現模糊的危險方向指示器。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U048 -->
- - **動態反應時間 (Dynamic Reaction Time):**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U049 -->
- - 「戰術視窗」的持續時間非固定，而是根據威脅的**「反應難度」**動態變化，這也將成為遊戲難度調節的一部分（例如近戰重擊反應時間短，遠程射擊反應時間長）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.1 「戰術視窗」的觸發與運作邏輯**::U050 -->
- #### **4.2 物理與環境互動邏輯**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.2 物理與環境互動邏輯**::U051 -->
- - **玩家位移預測：** 只有當玩家使用自身消耗能量的、以「強制位移」為核心效果的強力技能時（如擊飛技），系統才會提供精確的物理軌跡預測，作為對高成本戰術決策的獎勵。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.2 物理與環境互動邏輯**::U052 -->
- - **環境互動的直覺性：** 與場景中立物件的互動（如「踢石頭」）將**不提供預測軌跡**。取而代之的是，當玩家靠近時，物件與潛在目標之間會出現一條微弱的光線連結，暗示這是一個可行的互動，鼓勵玩家進行快速、即興的動作。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.2 物理與環境互動邏輯**::U053 -->
- - **「態度」與環境的化學反應：** 不同的「態度」能與特定環境產生獨特互動。例如，【憤怒】的火焰技能可以點燃地面的油污；【悲傷】的冰霜能力可以凍結水面，製造臨時的立足點或陷阱。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.2 物理與環境互動邏輯**::U054 -->
- #### **4.3 「敘事性戰鬥鏡頭」系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U055 -->
- - **設計原則：**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U056 -->
- 1. **重質不重量 (Impact over Frequency):** 鏡頭切換是「稀有資源」，只在戰鬥發生質變的時刻觸發。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U057 -->
- 2. **服務遊戲性 (In Service of Gameplay):** 鏡頭切換所展示的事件，必須帶來即時的、可感知的 gameplay 後果，是戰場規則發生變化的「信號」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U058 -->
- 3. **保留玩家代理權 (Preserving Player Agency):** 鏡頭展示的是玩家行動的「結果」或敵人行動的「預告」，而非剝奪控制權的純粹演出。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U059 -->
- - **應用場景：**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U060 -->
- 1. **「心之器崩潰」的特寫鏡頭：** 當敵人被玩家打入「崩潰 (Stagger)」狀態時，觸發伴隨著瓷器碎裂音效的特寫鏡頭，作為「最佳攻擊機會」的強烈視覺信號。敵人將陷入長時間硬直，等待玩家的毀滅性打擊。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U061 -->
- 2. **戰場動態變化的廣角鏡頭：** 當敵我行動永久性地改變戰場結構時（如**敵人攻擊並摧毀橋樑**），觸發廣角鏡頭。這完美實現了**「直接利用遊戲系統表演」**的設計哲學，鏡頭切換不僅是為了好看，更是為了向玩家清晰地傳達「戰場規則已經改變」這一重大情報。此類事件將由遊戲系統實時演算，產生即時的Gameplay後果（如路徑消失、角色墜落）。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U062 -->
- 3. **敵人階段轉換的宣言鏡頭：** Boss血量到達特定閾值觸發階段轉換時，給予Boss一個專屬鏡頭，展示其形態或武器的變化。這不僅是演出，更代表其「態度」的轉變，其攻擊模式、屬性抗性將徹底改變，需要玩家重新【洞察】並調整策略。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U063 -->
- - **與「戰術視窗」的結合:**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U064 -->
- - **鏡頭 → 視窗：** 在「斷橋」的廣角鏡頭結束後，若玩家正好處於懸崖邊，遊戲可直接開啟「戰術視窗」，高亮顯示一條新出現的、可用的「跳躍連結」路徑，讓玩家在震撼之餘立即做出下一個戰術決策。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U065 -->
- - **視窗 → 鏡頭：** 玩家在「戰術視窗」中成功輸入「格擋反擊」指令後，遊戲可切入一個專屬的特寫鏡頭，播放晴香完美招架並反擊的帥氣動畫，作為對玩家精準決策的獎勵。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U066 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**4. 戰鬥系統詳解：動態干預與敘事鏡頭**/**4.3 「敘事性戰鬥鏡頭」系統**::U067 -->
- ### **5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**::U068 -->
- #### **5.1 設計哲學：創世者的管理員介面**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.1 設計哲學：創世者的管理員介面**::U069 -->
- 「絕對共感視界」是晴香專屬的視覺情報系統，也是她作為Beta世界創造者所擁有的「管理員權限」的遊戲化體現。**其他魔法少女角色無法看到這些UI元素**——這創造了獨特的遊戲體驗：玩家（透過晴香視角）能看到其他角色看不到的情報，形成敘事與遊戲性的深度融合。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.1 設計哲學：創世者的管理員介面**::U070 -->
- **敘事意義**：晴香誤以為這些能力是她「同理心強」的表現，實際上這是她作為世界創造者能看到「底層代碼」的外在表現。這個真相在第三幕才會揭露，製造強烈的敘事衝擊。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.1 設計哲學：創世者的管理員介面**::U071 -->
- #### **5.2 UI元素詳解**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**::U072 -->
- ##### **5.2.1 戰鬥情報系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.1 戰鬥情報系統**::U073 -->
- **情緒條 (Emotion Bar)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.1 戰鬥情報系統**::U074 -->
- - **功能**：顯示敵人/隊友的「情緒強度」 - **視覺設計**： - 紅色漸層 → 憤怒/攻擊性情緒飽滿 - 藍色漸層 → 悲傷/絕望情緒深重 - 綠色漸層 → 希望/正面情緒穩定 - 灰色空洞 → 情緒枯竭/即將屍骸化 - **遊戲性應用**： - 紅色條高時敵人攻擊更猛烈但防禦較低 - 藍色條高時敵人容易進入「崩潰」狀態 - 灰色條警告即將發生不可逆轉的事件
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.1 戰鬥情報系統**::U075 -->
- **架勢條 (Posture Bar)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.1 戰鬥情報系統**::U076 -->
- - **功能**：顯示對方的「心理防禦狀態」 - **視覺設計**：位於情緒條下方的白色細條 - 滿格：心理防線穩固，攻擊會被彈開 - 降低：防線出現裂痕，攻擊開始有效 - 破防（空格 + 瓷器碎裂特效）：進入「可處決狀態」 - **遊戲性應用**： - 與4.3節「心之器崩潰」特寫鏡頭系統連動 - 破防後開啟「戰術視窗」，玩家可選擇「淨化」或「摧毀」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.1 戰鬥情報系統**::U077 -->
- ##### **5.2.2 威脅預警系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.2 威脅預警系統**::U078 -->
- **仇恨線 (Aggro Line)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.2 威脅預警系統**::U079 -->
- - **功能**：顯示敵人的「攻擊意圖」 - **視覺設計**：從敵人核心射向目標的虛線 - 淡紅細線：敵人注意到目標但尚未攻擊 - 亮紅粗線：敵人正在鎖定目標 - 閃爍紅光 + 脈衝：即將發動攻擊（觸發「戰術視窗」） - **遊戲性應用**： - 替代4.1節提到的「模糊/自然提示」，提供更精準的情報 - 多條仇恨線匯聚時警告「圍攻」狀態 - 與「反應不及機制」配合——當仇恨線過多時，部分線條會變得模糊，表示晴香也無法完全處理
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.2 威脅預警系統**::U080 -->
- **範圍警告 (AoE Indicator)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.2 威脅預警系統**::U081 -->
- - **功能**：預見範圍攻擊的影響區域 - **視覺設計**：地面投影的半透明圓圈/扇形 - 淡紅色邊緣：初始警告範圍 - 深紅色填充：致命範圍（填充動畫表示剩餘時間） - 脈衝收縮：攻擊即將降臨 - **遊戲性應用**： - 為大型敵人/Boss的必殺技提供逃脫時間 - 與「連結點」系統配合——範圍內可能高亮顯示逃脫路線
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.2 威脅預警系統**::U082 -->
- ##### **5.2.3 弱點識破系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.3 弱點識破系統**::U083 -->
- **心之隙縫 (Heart's Crevice)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.3 弱點識破系統**::U084 -->
- - **功能**：顯示敵人/屍骸的「情緒核心」位置 - **視覺設計**：在敵人身上發光的點/裂痕 - 金色光點：殘存的希望/善意（攻擊此處可觸發「淨化」選項） - 紫色光點：核心創傷（攻擊此處造成巨額傷害） - 黑色裂痕 + 深淵效果：心之器的致命破損位置（終結技專用） - **遊戲性應用**： - 金色弱點 → 連結「態度光譜」的正向選擇 - 紫色弱點 → 連結高傷害但可能加速屍骸化 - 黑色弱點 → 觸發Boss階段轉換或終結動畫
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.3 弱點識破系統**::U085 -->
- ##### **5.2.4 社交/非戰鬥情報系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.4 社交/非戰鬥情報系統**::U086 -->
- **情緒圖標 (Emotion Icons)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.4 社交/非戰鬥情報系統**::U087 -->
- - **功能**：在日常對話/探索中顯示NPC的情緒狀態 - **視覺設計**：角色頭上方浮現的微光圖標 - 🙂 真心笑臉：真正愉快，對話加成 - 🎭 假笑面具：表面客套，隱藏真實想法 - ☁️ 烏雲：心情低落，可能需要關懷 - 💔 破碎之心：正在經歷創傷，觸發支線任務提示 - **遊戲性應用**： - 影響「態度光譜」累積 - 破碎之心圖標 → 提示可解鎖的角色支線/背景故事 - 假笑面具 → 暗示該角色可能有隱藏動機（伏筆功能）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.4 社交/非戰鬥情報系統**::U088 -->
- **對話提示 (Dialogue Hints)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.4 社交/非戰鬥情報系統**::U089 -->
- - **功能**：顯示對話選項的潛在效果 - **視覺設計**：選項旁邊的微光箭頭/圖標 - 綠色↑：此回應會提升好感度/信任 - 紅色↓：此回應會傷害對方/降低信任 - 黃色❗：此回應會觸發重要劇情分歧 - **遊戲性應用**： - 第一幕完整顯示，作為玩家的「安全網」 - 第二幕部分失靈（因劇情發展），增加不確定性 - 第三幕「態度剝奪」後完全失效，強化無力感
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.4 社交/非戰鬥情報系統**::U090 -->
- ##### **5.2.5 靈魂抽離專用介面**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U091 -->
- **靈魂連結線 (Soul Link Line)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U092 -->
- - **功能**：在靈魂抽離第二階段顯示晴香與屍骸之間的連結狀態 - **視覺設計**：從晴香胸口延伸至屍骸核心的發光光束 - 金色穩定脈動：連結成功建立，可開始意志拔河 - 紅色震動閃爍：連結不穩定，需要玩家集中精神 - 斷裂碎散特效：連結失敗，需重新嘗試 - **遊戲性應用**： - 連結線的顏色與穩定度直接反映玩家操作的準確性 - 與「微弱的感謝」累積量連動——累積越多，連結越容易穩定
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U093 -->
- **拔河進度條 (Tug of War Gauge)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U094 -->
- - **功能**：顯示意志拔河階段的雙方力量對比 - **視覺設計**：螢幕中央的水平雙向進度條 - 中央分界線：以發光光點標示 - 左側（晴香）：金色光芒，代表「理解與接納」的力量 - 右側（屍骸）：根據屍骸類型變色 - 求救型：藍色（悲傷），阻力較小 - 拒絕型：紅色（憤怒），阻力強大 - 韌度加成指示：進度條下方顯示「微弱的感謝」累積量轉化的韌度加成百分比 - **遊戲性應用**： - 玩家需要將分界線推向右側才能成功抽離 - 拒...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U095 -->
- **屍骸類型指示器 (Corpse Type Indicator)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U096 -->
- - **功能**：在「陰影視覺」啟動後，顯示屍骸的內在分類 - **視覺設計**：屍骸頭部上方浮現的光暈與圖標 - 求救型：淡藍色光暈 + 哭泣眼淚圖標 + 「...幫幫我...」低語文字 - 拒絕型：深紅色光暈 + 怒火燃燒圖標 + 「走開！」「別看我！」文字 - **遊戲性應用**： - 只有整合夕後（第二幕末）才能看見完整資訊 - 第一幕時只能看見模糊光暈，無法判斷類型 - 幫助玩家決策是否值得冒險進行靈魂抽離
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U097 -->
- **抽離成功/失敗演出**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U098 -->
- - **成功演出**： - 靈魂完全脫離屍骸外殼，展現生前人形輪廓 - 靈魂向晴香微微鞠躬（感謝姿態） - 化為金色光點緩緩消散 - 掉落「微弱的感謝」道具 - **失敗演出**： - 連結線斷裂，能量反噬 - 晴香被彈飛（扣血 + 短暫硬直） - 屍骸進入「暴怒狀態」（視覺上齒輪加速旋轉、火焰更猛烈） - 暴怒狀態下攻擊力提升，但架勢條回復速度降低
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.2 UI元素詳解**/**5.2.5 靈魂抽離專用介面**::U099 -->
- #### **5.3 與其他系統的整合**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U100 -->
- **與「戰術視窗」的關係**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U101 -->
- - 絕對共感視界的情報是**持續可見**的，而「戰術視窗」是特定時刻的決策介面 - 進入「戰術視窗」時，絕對共感視界的情報會更清晰、更詳細 - 離開「戰術視窗」後，情報恢復為較簡化的即時顯示
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U102 -->
- **與「態度」系統的關係**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U103 -->
- - 不同「態度」會強化/弱化特定情報： - 【洞察】態度：所有弱點更明顯，架勢條顯示更精確 - 【憤怒】態度：仇恨線更敏感，但弱點識別減弱 - 【悲傷】態度：情緒條細節增加，可辨識更多情緒類型
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U104 -->
- **與遊戲進程的關係**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U105 -->
- - **第一幕**：完整功能，玩家學習系統 - **第二幕**：某些UI開始出現「雜訊」，暗示系統不穩定 - **第三幕「態度剝奪」後**：大部分UI失效或扭曲 - 情緒條變成灰色/無法判讀 - 仇恨線變得模糊、遲鈍 - 對話提示完全消失 - **遊戲性體驗**：玩家突然失去長期依賴的情報來源，強化無力感 - **第四幕覺醒後**：選擇性恢復，但玩家已學會不完全依賴
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.3 與其他系統的整合**::U106 -->
- #### **5.4 美術風格指引**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U107 -->
- **整體風格**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U108 -->
- - UI元素應融入遊戲世界，像是「晴香眼中的世界」而非硬貼的HUD - 使用柔和的發光效果、水彩風格的邊緣 - 避免過於遊戲化/電玩感的設計（如數字血量）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U109 -->
- **色彩系統**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U110 -->
- - 情緒相關：紅、藍、綠、灰的漸層 - 威脅相關：紅色為主，用亮度區分危險程度 - 弱點相關：金（希望）、紫（創傷）、黑（致命）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U111 -->
- **動態效果**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U112 -->
- - 所有UI元素應有微妙的呼吸/脈動效果 - 危險程度越高，動態越明顯 - 「態度剝奪」後的扭曲效果：閃爍、撕裂、雜訊
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U113 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**5. 絕對共感視界 (The Interface of Empathy)：晴香專屬的情報視覺系統**/**5.4 美術風格指引**::U114 -->
- ### **6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**::U115 -->
- #### **6.1 設計哲學：數值陷阱與主題表達**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.1 設計哲學：數值陷阱與主題表達**::U116 -->
- 本系統的核心設計理念是透過**「反直覺的成長機制」**，讓玩家在gameplay層面親身體驗故事的核心主題——**「態度 vs 命運」**、**「接納 vs 修正」**。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.1 設計哲學：數值陷阱與主題表達**::U117 -->
- 傳統RPG教導玩家：「殺死敵人 = 獲得經驗值 = 變強」。本遊戲會在前期強化這種認知，然後在後期徹底顛覆它，迫使玩家重新思考「什麼才是真正的力量」。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.1 設計哲學：數值陷阱與主題表達**::U118 -->
- #### **6.2 假數值系統（第一幕至第三幕）**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U119 -->
- **核心機制**：傳統RPG式的經驗值成長系統
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U120 -->
- **三種終結屍骸的方式**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U121 -->
- | 終結方式 | 操作難度 | 經驗值獎勵 | 魔力回復 | 道具掉落 | |---------|---------|-----------|---------|---------| | **殺死 (Kill)** | 低 | ★★★★★ (1000 EXP) | ★★★★ | 情緒結晶（負面） | | **淨化 (Purify)** | 中 | ★★☆☆☆ (200 EXP) | ★★☆☆ | 少量素材 | | **靈魂抽離 (Ext...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U122 -->
- **玩家心理設計**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U123 -->
- - 系統通過獎勵結構**刻意引導**玩家選擇「殺死」 - 「淨化」看起來像是「道德溢價」——多花時間，少拿獎勵 - 「靈魂抽離」看起來像是**純粹的資源浪費**——高風險、零回報 - 預期玩家反應：「傻仔先會逐個救，直接殺咗佢最快」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U124 -->
- **系統失靈的階段性表現**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U125 -->
- | 遊戲階段 | 假系統狀態 | 玩家可觀察到的異常 | |---------|-----------|------------------| | **第一幕** | 完整運作 | 無異常，建立「殺戮 = 成長」的認知 | | **第二幕前期** | 輕微失靈 | 部分精英屍骸的EXP略減；「微弱的感謝」開始有神秘提示 | | **第二幕後期** | 明顯失靈 | 某些Boss戰中，殺死後會「不完全死亡」（短暫復活） | | **第三幕...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.2 假數值系統（第一幕至第三幕）**::U126 -->
- #### **6.3 真數值系統（第四幕揭露）**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U127 -->
- **核心真相**：與**「情緒守恆定律」**的連動
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U128 -->
- 根據現有世界觀設定，「痛苦不會消失，只會轉移」。假數值系統正是這個定律的遊戲化體現：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U129 -->
- | 終結方式 | 表面效果 | 深層真相 | |---------|---------|---------| | **殺死** | 獲得大量EXP | 將屍骸的負面情緒**強制轉移**至集體潛意識，累積「情緒債務」 | | **淨化** | 獲得少量EXP | 部分消解情緒，但未能完全終結痛苦 | | **靈魂抽離** | 獲得0 EXP | 讓屍骸的情緒被**理解、接納**後自然消散——**真正的終結** |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U130 -->
- **「微弱的感謝」的真正價值**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U131 -->
- - **本質**：被理解的靈魂自願給予的**「正面情緒結晶」** - **功能**： - 累積量直接決定「靈魂抽離」時拔河繩索的**韌度** - 韌度越高，抽離成功率越高、失敗懲罰越輕 - 與「態度光譜」連動，影響結局分支 - **敘事意義**：與負面情緒結晶（裝置燃料）形成對比——一個是透支未來的債務，一個是善意的饋贈
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.3 真數值系統（第四幕揭露）**::U132 -->
- #### **6.4 補救機制設計**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U133 -->
- 考慮到部分玩家可能在不知情的情況下選擇了大量殺戮，第四幕提供有限的補救途徑：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U134 -->
- **補救任務**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U135 -->
- - 特定支線任務可獲得少量「微弱的感謝」 - 任務內容與「理解屍骸」相關（聆聽遺願、完成未竟之事） - 總量不及正常累積的 50%，後期拔河難度仍明顯較高
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U136 -->
- **設計意圖**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U137 -->
- - **不完全懲罰**：避免玩家因前期選擇而無法通關 - **強調後果**：選擇的重量必須被感受到 - **主題強化**：即使補救，也需要付出額外努力——呼應「接納的道路更艱難但更真實」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U138 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**6. 雙軌數值系統：假象與真實 (Dual Value System: Illusion vs Truth)**/**6.4 補救機制設計**::U139 -->
- ### **7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**::U140 -->
- #### **7.1 觸發條件**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.1 觸發條件**::U141 -->
- 靈魂抽離並非隨時可用，需要滿足以下條件：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.1 觸發條件**::U142 -->
- 1. **屍骸進入「可終結狀態」**：架勢條（Posture Bar）歸零，觸發「心之器崩潰」特寫 2. **戰術視窗開啟**：系統自動進入時間緩滯 3. **玩家選擇「靈魂抽離」指令**：在「殺死」「淨化」「抽離」三選項中選擇
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.1 觸發條件**::U143 -->
- #### **7.2 三階段流程**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**::U144 -->
- ##### **第一階段：定身/壓制 (Suppression)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U145 -->
- **目的**：讓狂暴的屍骸停止行動，為後續階段創造條件
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U146 -->
- **角色專屬定身技能**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U147 -->
- | 角色 | 技能名稱 | 視覺表現 | 與角色設定的連結 | |-----|---------|---------|----------------| | **晴香** | 光芒束縛 | 金色光鏈從矛尖射出，環繞屍骸形成光環牢籠 | 公主女武神，光芒是守護的力量來源 | | **美夜子** | 冰封棺匣 | 冰晶從地面升起包裹下半身 | 冷漠是她的自我保護機制 | | **操** | 牽絲戲偶 | 絲線緊縛四肢，限制行動 | 人形師的...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U148 -->
- **操作要求**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U149 -->
- - 需要精準時機（類似Perfect Parry） - 失敗會消耗魔力但無法進入下一階段 - 成功後屍骸進入短暫的「壓制狀態」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第一階段：定身/壓制 (Suppression)**::U150 -->
- ##### **第二階段：靈魂連結 (Soul Link)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U151 -->
- **目的**：建立晴香與屍骸核心之間的精神連結
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U152 -->
- **操作流程**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U153 -->
- 1. 鏡頭切換至特寫，晴香伸出手朝向屍骸胸口 2. 光束/鎖鏈從晴香胸口射出，連接屍骸的「心之隙縫」 3. 玩家需要**保持準心穩定**在連結點上（類似狙擊瞄準） 4. 連結建立後，可見**半透明靈魂輪廓**開始從屍骸體內被拉出
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U154 -->
- **視覺設計**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U155 -->
- - 連結線顏色反映狀態（金色=穩定、紅色=不穩定） - 靈魂輪廓呈現屍骸生前的人形 - 屍骸外殼開始出現裂痕，發出痛苦的聲音
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第二階段：靈魂連結 (Soul Link)**::U156 -->
- ##### **第三階段：意志拔河 (Tug of War)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U157 -->
- **目的**：將靈魂完全從屍骸外殼中抽離
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U158 -->
- **操作機制**：QTE/連打對抗系統
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U159 -->
- | 屍骸類型 | 阻力程度 | QTE難度 | 特殊機制 | |---------|---------|--------|---------| | **求救型** | 低 | 簡單連打即可 | 靈魂會**主動配合**，減少所需輸入 | | **拒絕型** | 高 | 需要精準時機輸入 | 靈魂會**主動反推**，進度條會倒退 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U160 -->
- **「微弱的感謝」的作用**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U161 -->
- - 每累積一定數量，拔河時的**韌度加成**提升 - 韌度影響： - 連打所需次數減少 - 反推時的倒退幅度降低 - 失敗時的懲罰減輕
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.2 三階段流程**/**第三階段：意志拔河 (Tug of War)**::U162 -->
- #### **7.3 屍骸分類系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.3 屍骸分類系統**::U163 -->
- ##### **求救型 (Crying Type)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.3 屍骸分類系統**/**求救型 (Crying Type)**::U164 -->
- - **心理狀態**：內心深處渴望被理解、被解脫 - **識別特徵**： - 藍色光暈環繞 - 姿態蜷縮、防禦性 - 聲音：哭聲、嗚咽、「...幫幫我...」的低語 - **抽離特性**： - 阻力低，容易成功 - 靈魂會在拔河時向晴香伸出手（象徵求救） - **與現有Type A的關係**：屬於「聖化殉道者」的心理變體
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.3 屍骸分類系統**/**求救型 (Crying Type)**::U165 -->
- ##### **拒絕型 (Denial Type)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.3 屍骸分類系統**/**拒絕型 (Denial Type)**::U166 -->
- - **心理狀態**：躲在怪物外殼中尋求「安全」，恐懼被看見真實的自己 - **識別特徵**： - 紅色光暈環繞 - 姿態攻擊性、碎鏡片更多 - 聲音：怒吼、「走開！」「別看我！」「這裡很安全！」 - **抽離特性**： - 阻力高，需要更強意志力 - 靈魂會在拔河時主動反推，甚至發動「精神反擊」 - **與現有Type B的關係**：屬於「崩壞受難者」的心理變體 - **倫理困境**：強行抽離是否是「未經同意的救贖」？
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.3 屍骸分類系統**/**拒絕型 (Denial Type)**::U167 -->
- #### **7.4 失敗後果與重試機制**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U168 -->
- **失敗觸發條件**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U169 -->
- - 拔河進度條被推回晴香側的極限 - 連結線穩定度歸零導致斷裂
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U170 -->
- **失敗後果**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U171 -->
- 1. **能量反噬**：晴香被彈飛，扣除 30% 生命值 2. **短暫硬直**：約 2 秒無法行動 3. **屍骸暴怒**： - 進入「暴怒狀態」持續 30 秒 - 攻擊力提升 50% - 但架勢條回復速度降低 30%（為重試創造機會）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U172 -->
- **重試機制**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U173 -->
- - 暴怒狀態結束後，可再次嘗試 - 每次失敗會略微降低下次抽離的難度（象徵靈魂也在動搖） - 最多降低 3 次，之後難度固定
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U174 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**7. 靈魂抽離機制詳解 (Soul Extraction Mechanics)**/**7.4 失敗後果與重試機制**::U175 -->
- ### **8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**::U176 -->
- #### **8.1 前期誤導策略**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U177 -->
- **利用傳統RPG思維**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U178 -->
- - 大多數玩家習慣「最大化效率」的遊戲方式 - 系統故意讓「殺死」成為最明顯的「正確選擇」 - 「靈魂抽離」被設計成看起來像是**開發者的惡作劇**——費時費力，零回報
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U179 -->
- **UI設計的配合**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U180 -->
- - EXP獲得時有華麗的數字彈出特效 - 「微弱的感謝」獲得時只有微弱的光點，容易被忽略 - 道具描述故意模糊：「一縷微弱的感激之情。用途不明。」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U181 -->
- **NPC對話的暗示**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U182 -->
- - 美夜子：「有時候...直接結束牠們的痛苦，才是最好的選擇。」（誤導） - 夕（整合前）：「妳還在猶豫？效率才是生存的關鍵。」（誤導） - 朱音：「救？救咩救？佢哋已經唔係人啦。」（強化殺戮合理性）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.1 前期誤導策略**::U183 -->
- #### **8.2 後期反轉衝擊**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U184 -->
- **第三幕「偽高潮」Boss戰設計**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U185 -->
- 這場Boss戰是系統崩潰的關鍵節點，玩家會首次意識到「假系統」的本質。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U186 -->
- **Boss設計要點**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U187 -->
- - **名稱**：緋潮先驅（建議為黑奏操控的巨型屍骸聚合體） - **特性**： - 物理攻擊造成傷害，但傷害會在 3 秒內完全回復 - 魔法攻擊有效，但Boss血量極高，正常輸出無法在時限內擊敗 - 當血量歸零時，Boss會**立即重生**並恢復 50% 血量 - **玩家體驗**： - 第一次擊敗後的希望 - 重生時的困惑 - 多次重生後的絕望 - 最終意識到「物理方式無法解決這個問題」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U188 -->
- **揭示時刻**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U189 -->
- - 夕（整合後）：「...妳終於明白了嗎？妳殺死的每一個屍骸，牠們的痛苦從未消失。牠們只是被妳推到了看不見的地方。而現在...牠們回來了。」 - UI變化：此時「靈魂抽離」選項開始發出金色光芒，提示這才是正解
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.2 後期反轉衝擊**::U190 -->
- #### **8.3 Boss無限再生的敘事意義**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.3 Boss無限再生的敘事意義**::U191 -->
- **與「情緒守恆定律」的連結**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.3 Boss無限再生的敘事意義**::U192 -->
- - Boss的無限再生，是玩家前期選擇「殺戮」所累積的「情緒債務」的具象化 - 每一次重生，都是那些被強制轉移的痛苦在反噬
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.3 Boss無限再生的敘事意義**::U193 -->
- **與「緋潮」設定的連結**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.3 Boss無限再生的敘事意義**::U194 -->
- - 緋潮是「被壓抑的情緒」的終極反噬 - 這個Boss可視為緋潮的「先驅」或「預兆」 - 只有透過「靈魂抽離」——真正理解並接納那些痛苦——才能終結循環
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.3 Boss無限再生的敘事意義**::U195 -->
- #### **8.4 不同玩家路線的體驗差異**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.4 不同玩家路線的體驗差異**::U196 -->
- | 玩家類型 | 前期選擇 | 後期拔河難度 | 敘事體驗 | |---------|---------|------------|---------| | **效率型** | 大量殺戮 | 極高（韌度不足） | 深刻體驗「選擇的後果」 | | **平衡型** | 混合選擇 | 中等 | 標準難度曲線 | | **善良型** | 大量抽離 | 低（韌度充足） | 感受「善意的回報」 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.4 不同玩家路線的體驗差異**::U197 -->
- **設計意圖**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.4 不同玩家路線的體驗差異**::U198 -->
- - 不是為了「懲罰」效率型玩家，而是讓他們**親身體驗**主題 - 善良型玩家不是「被獎勵」，而是「選擇了更難的前期，換來更順暢的後期」 - 所有路線都可以通關，但體驗不同
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.4 不同玩家路線的體驗差異**::U199 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**8. 數值陷阱與玩家心理設計 (Value Trap & Player Psychology)**/**8.4 不同玩家路線的體驗差異**::U200 -->
- ### **9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**::U201 -->
- #### **9.1 設計哲學**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.1 設計哲學**::U202 -->
- 本系統的核心理念是**「高科技失效的世界，低科技成為主流」**。電子設備會被屍骸的魔力波干擾失效，市民被迫回歸到「土法煉鋼」的生存方式。這些道具不僅提供戰術選項，更是世界觀的具象呈現——一個被迫適應恐怖的社會。
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.1 設計哲學**::U203 -->
- #### **9.2 偵測類道具**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**::U204 -->
- ##### **金魚雷達 (The Goldfish Radar)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U205 -->
- **設定背景**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U206 -->
- - 電子雷達會被屍骸魔力波干擾失效 - 金魚對「緋潮」或「屍骸」頻率極度敏感 - 街道上掛滿透明塑膠袋裝金魚（如金魚街）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U207 -->
- **行為模式**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U208 -->
- - 平時：金魚正常游動 = 安全 - 屍骸接近：金魚集體「垂直游動」或「瘋狂撞擊玻璃」 - 緋潮來襲：金魚瞬間「翻肚」或「變色」
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U209 -->
- **遊戲機制**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U210 -->
- | 類型 | 描述 | 效果 | |-----|------|-----| | **環境物件** | 關卡中牆上/路燈上的金魚袋 | 自動觸發，提供區域威脅警報 | | **隨身道具** | 腰間可掛小型金魚袋 | 消耗品，啟動後持續30秒偵測 | | **升級版** | 「雙魚座項鍊」（稀有裝備） | 永久裝備，偵測範圍+50% |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U211 -->
- **戰術應用**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U212 -->
- - 透視隱形怪物 - 預警 Boss 即將出場 - 確認巡邏路線（潛行任務）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U213 -->
- **視覺設計**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U214 -->
- - 金魚袋以UI圖標形式出現在小地圖邊緣 - 金魚狀態變化會觸發角色自動看向威脅方向 - 配合「絕對共感視界」系統，晴香能看到更詳細的金魚反應
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U215 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金魚雷達 (The Goldfish Radar)**::U216 -->
- ##### **9.3 隱匿類道具**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**9.3 隱匿類道具**::U217 -->
- ##### **金夫人特濃花露水 (Madam Kam's Florida Water)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U218 -->
- **設定背景**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U219 -->
- - 指定品牌：紅綠色包裝、畫著詭異微笑貴婦 - 氣味：薰衣草+薄荷+樟腦+廉價酒精（「阿婆味」） - 原理：強烈化學信號「麻痺」屍骸的情緒嗅覺
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U220 -->
- **日常反差**（敘事功能）：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U221 -->
- - 返學時同學掩鼻：「邊個倒瀉咗阿婆枝藥油？」 - 晴香死撐：「依個係復古潮流！」 - 戀愛毀滅者：男同學行近聞到樟腦味即刻走人
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U222 -->
- **遊戲機制**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U223 -->
- | 使用方式 | 效果 | 持續時間 | |---------|------|---------| | **自身噴灑** | 降低敵人仇恨值，進入「疑惑」狀態 | 15秒 | | **範圍噴灑** | 在地面創造「安全區」，屍骸不會主動進入 | 30秒 | | **投擲瓶裝** | 擊中區域產生「嗅覺干擾區」，打斷追擊 | 10秒 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U224 -->
- **戰術應用**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U225 -->
- - 穿越屍骸密集區域 - 背刺前消除仇恨（配合暗殺加成） - 救援隊友時創造安全撤退路線 - 與「替死鬼假人」配合使用
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U226 -->
- **資源限制**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U227 -->
- - 每次任務攜帶上限：3瓶 - 可在特定商店購買補充 - 過度使用會導致NPC好感度下降（「好臭呀！」）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U228 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**金夫人特濃花露水 (Madam Kam's Florida Water)**::U229 -->
- ##### **9.4 誘餌類道具**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**9.4 誘餌類道具**::U230 -->
- ##### **替死鬼假人 (The Scapegoat Mannequins)**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U231 -->
- **設定背景**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U232 -->
- - 低級屍骸優先攻擊「人形物體」 - 市民在家門口、街邊擺放穿舊衣服的假人 - 有些假人穿著「死去親人的舊衫」以增加人味
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U233 -->
- **視覺細節**（敘事功能）：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U234 -->
- - 街上站著不動的全是缺手斷腳的假人 - 操極度討厭此習俗（與人偶師設定衝突） - 假人臉上經常畫有詭異的笑容或眼淚
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U235 -->
- **遊戲機制**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U236 -->
- | 類型 | 部署方式 | 效果 | |-----|---------|-----| | **環境假人** | 可推動/搬運 | 吸引屍骸攻擊，每具承受2-3次攻擊 | | **摺疊假人** | 快速展開（消耗品） | 立即吸引仇恨，持續10秒或被摧毀 | | **升級版「小丑假人」** | 裝有爆竹/聲響裝置 | 吸引範圍+100%，可遠程引爆造成干擾 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U237 -->
- **戰術應用**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U238 -->
- - 聚怪後配合範圍魔法攻擊 - 轉移 Boss 仇恨，爭取回復時間 - 潛行任務中引開巡邏路線 - 保護NPC時放置在其附近
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U239 -->
- **與其他系統的配合**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U240 -->
- - **+花露水**：假人噴上花露水後持續時間延長50% - **+操的傀儡技能**：可將假人臨時「激活」，進行主動移動誘敵
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U241 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**替死鬼假人 (The Scapegoat Mannequins)**::U242 -->
- ##### **9.5 資源管理系統**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**9.5 資源管理系統**::U243 -->
- **設定背景**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U245 -->
- - 魔力轉換需極速燃燒卡路里 - 魔法少女佩戴 CGM（連續血糖監測器）手錶 - 大腿/腰間掛類似 EpiPen 的濃縮葡萄糖針劑
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U246 -->
- **核心機制**：魔力條改為血糖值 (mg/dL)
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U247 -->
- | 狀態 | 血糖範圍 | 效果 | |-----|---------|-----| | **過高 (Hyper)** | >180 mg/dL | 攻擊力+20%，但視野邊緣模糊、持續扣血 | | **正常 (Normal)** | 70-180 mg/dL | 平衡狀態，所有數值標準 | | **過低 (Hypo)** | <70 mg/dL | 畫面變黑白、手震（瞄準困難）、無法跑動 | | **危險 (Critical)** |...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U248 -->
- **葡萄糖注射槍操作**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U249 -->
- | 劑量 | 效果 | 副作用 | |-----|------|-------| | **標準劑量** | +50 mg/dL，動畫約1秒 | 無 | | **緊急劑量** | +100 mg/dL，動畫約0.5秒 | 之後30秒內血糖下降速度+50% | | **過量注射** | +150 mg/dL | 進入「過高」狀態，攻擊力暴增但持續扣血 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U250 -->
- **戰鬥動作演出**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U251 -->
- - 手錶警報響起（嗶嗶聲） - 一手格擋/閃避 - 另一手從大腿拔出注射槍 - 扎入大腿肌肉 - 瞳孔放大（Sugar Rush特效） - 短暫提速衝刺
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U252 -->
- **資源管理**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U253 -->
- - 每次任務攜帶注射槍數量有限（初始3支，可升級至5支） - 戰鬥中可透過「進食」補充血糖（如糖果、能量棒） - 某些敵人掉落「情緒結晶糖」——高效補充但可能有副作用
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U254 -->
- **與其他系統的整合**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U255 -->
- | 系統 | 整合方式 | |-----|---------| | **情感耗損** | 情感耗損值高時，血糖消耗速度加快 | | **態度系統** | 【憤怒】態度血糖消耗+30%，【洞察】態度消耗-20% | | **戰術視窗** | 進入視窗時血糖暫停消耗（時間緩滯） | | **靈魂抽離** | 抽離過程消耗大量血糖，需預先儲備 |
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U256 -->
- ---
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.2 偵測類道具**/**血糖手錶與葡萄糖注射槍 (CGM Watch & Glucose Injector)**::U257 -->
- #### **9.6 道具系統總覽**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.6 道具系統總覽**::U258 -->
- | 道具 | 類型 | 主要功能 | 獲取方式 | |-----|------|---------|---------| | 金魚袋 | 偵測 | 反隱形/預警 | 商店購買、關卡拾取 | | 金夫人花露水 | 隱匿 | 消仇恨/潛行 | 商店購買、支線獎勵 | | 替死鬼假人 | 誘餌 | 聚怪/轉移仇恨 | 關卡拾取、製作 | | 葡萄糖注射槍 | 資源 | 魔力/血糖維持 | 自動補充、升級解鎖 | | 糖果/能量棒 | 資源 |...
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.6 道具系統總覽**::U259 -->
- #### **9.7 道具欄與快捷鍵設計**
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U260 -->
- **道具欄結構**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U261 -->
- - 4個快捷欄位（十字鍵對應） - 每個欄位可放置一種消耗品 - 戰鬥中可即時使用，動畫根據道具類型不同
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U262 -->
- **建議預設配置**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U263 -->
- - ↑：葡萄糖注射槍 - ←：金魚袋 - →：金夫人花露水 - ↓：替死鬼假人
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U264 -->
- **戰術視窗內的道具使用**：
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U265 -->
- - 進入戰術視窗後，可消耗「思考時間」選擇道具 - 選擇後退出視窗會執行道具使用動畫 - 部分道具可與攻擊/閃避動作組合（如邊閃避邊噴花露水）
<!-- Sources: backup/gameplay/00_Core_Gameplay_Design_Document.md::CU_ID=00_Core_Gameplay_Design_Document::H**1. 遊戲核心願景 (Game Vision)**/**1.1 核心概念 (One-Liner):**/**9. 戰術道具系統：低科技生存工具 (Tactical Items: Low-Tech Survival Tools)**/**9.7 道具欄與快捷鍵設計**::U266 -->
- # 少女日常與社交互動設定
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定::U001 -->
- ## 一、核心理念
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/一、核心理念::U002 -->
- > 「她們經歷了那麼多殘酷，但依然是十幾歲的少女。」
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/一、核心理念::U003 -->
- 這份「不合時宜的幼稚」——在戰場上討論甜品、在生死關頭在意瀏海、在被背叛時想「是不是我不夠乖」——才是讓觀眾深刻意識到「天啊，她們還只是孩子啊」的關鍵。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/一、核心理念::U004 -->
- **設計哲學**：透過「少女日常」與「殘酷命運」之間的強烈反差（Gap），讓觀眾同時感受到角色的可愛與悲劇性。這種錯位本身就是最有力的敘事武器。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/一、核心理念::U005 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/一、核心理念::U006 -->
- ## 二、少女心理維度延展（第6-11點）
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）::U007 -->
- 在[[導演/01_創作核心與指導原則#1.6角色塑造|現有五維度]]（對戀愛的憧憬、對前路迷茫、情緒化傾向、個人性格發展、多重角色掙扎）基礎上，新增以下六個維度：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）::U008 -->
- ### **6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**::U009 -->
- **概念**：青春期少女對身體變化最敏感。在殘酷的戰鬥環境下，這種敏感被扭曲放大——她們極度在意戰鬥留下的傷痕、體重、皮膚狀態，不是為了健康，而是為了「看起來像個正常的女孩子」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**::U010 -->
- **各角色應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**::U011 -->
- | 角色 | 具體表現 | 心理分析 | |-----|---------|---------| | 晴香（偶像） | 剛經歷生死戰鬥，回到休息室第一件事是對鏡檢查劉海有沒有亂、腿上有沒有瘀青（因為明天要穿短裙上台） | 「專業偶像的自覺」與「戰士的傷痕」之間的衝突 | | 操（性別焦慮） | 病態地護膚、脫毛，對任何「男性化」特徵（喉結、骨架）極度恐懼。被劃破臉時的反應不是「痛」，而是崩潰尖叫「變醜了/暴露了」 | 對「正確形式」的執...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**::U012 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**6. 對「外貌」與「身體」的病態關注 (Body Image & Dysmorphia)**::U013 -->
- ### **7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U014 -->
- **概念**：少女的友誼往往伴隨著嫉妒，不一定是惡意的，但很真實。在這個扭曲的世界，她們比較的東西變質了——不是成績，而是「誰更被需要」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U015 -->
- **具體應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U016 -->
- - 當晴香成為全城英雄時，朱音看著她閃閃發光，心裡除了替她高興，會有一瞬間的酸楚：「為什麼只有她是光，而我們都在陰影裡？」 - 反過來，晴香羨慕朱音的「自由」和「強大」，覺得自己只是個被包裝的玩偶 - 操羨慕晴香「天生就是女生」的理所當然
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U017 -->
- **描寫技巧**：眼神的迴避、在讚美對方時一瞬間的停頓、私下裡模仿對方的某個小動作
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U018 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**7. 同儕間的微妙「比較」與「嫉妒」 (Subtle Peer Jealousy)**::U019 -->
- ### **8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U020 -->
- **概念**：越是處於高壓環境，少女越會對微不足道的小事產生執著，以此來逃避現實。這是心理防禦機制——只要還在做這些蠢事，就覺得自己還活在「日常」裡，還不是怪物。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U021 -->
- **具體應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U022 -->
- - 剛殺完屍骸，全身是血和灰塵，但幾個人為了「便利店最後一個布丁」而認真猜拳 - 朱音可能會因為不小心弄壞了朋友送的便宜髮夾而大哭，但面對斷手斷腳的傷勢卻一聲不吭 - 晴香對限量版甜點的執著，看得比「消滅屍骸」還重
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U023 -->
- **反差痛點**：這種錯位才是最讓人心痛的地方
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U024 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**8. 末日下的「小確幸」執著 (Obsession with Trivial Joys)**::U025 -->
- ### **9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**::U026 -->
- **概念**：青春期是反叛期，但在這個故事裡，「大人」大多是加害者（經理人、父母、皇帝）。她們被迫早熟，看透了大人的骯髒，但內心深處依然是一個「想要被大人摸摸頭、誇獎說做得好」的孩子。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**::U027 -->
- **具體應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**::U028 -->
- - **晴香**：明知經理人在利用她，但當經理人偶爾展現出一點「關心」（哪怕是偽裝的），她還是忍不住想要相信、想要依賴那個父親般的背影 - **愛莉（紙皮騎士）**：她的叛逆和毒舌，其實是為了引起母親（秋穗）注意的手段——「如果你不愛乖孩子，那我就變壞，至少你會看我」 - **美夜子**：對軍方的「長官」有複雜的服從心理，即使知道自己被當工具
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**::U029 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**9. 對「大人」的矛盾心理 (Ambivalent Attitude Towards Adults)**::U030 -->
- ### **10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**::U031 -->
- **概念**：少女總有秘密。在高壓監控和戰鬥下，她們需要一個與戰鬥無關的私密空間來吐露心聲。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**::U032 -->
- **具體應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**::U033 -->
- - **匿名小號（SNS）**：晴香可能有一個只有5個粉絲的匿名帳號，裡面發的全是負能量、罵髒話、或者只是拍路邊的野貓。在那裡她不是偶像，也不是魔法少女，只是個普通的厭世少女 - **實體空間**：朱音在骯髒的夜區有一個秘密的小閣樓，裡面藏著細佬生前的玩具，或者是她搜集來的可愛貼紙。這是她的「聖域」，誰進來就殺誰
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**::U034 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**10. 秘密基地與「無人知曉的自己」 (Digital/Private Sanctuary)**::U035 -->
- ### **11. 對「死亡」的獨特理解 (Romance with Death)**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**11. 對「死亡」的獨特理解 (Romance with Death)**::U036 -->
- **概念**：中二病時期的少女有時會對死亡有唯美的幻想，尤其是在絕望的世界觀下。她們不怕死，甚至有時幻想「如果我現在死了，大家會怎麼哭？」、「怎樣死才最淒美？」
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**11. 對「死亡」的獨特理解 (Romance with Death)**::U037 -->
- **具體應用**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**11. 對「死亡」的獨特理解 (Romance with Death)**::U038 -->
- - **操（Misao）**：因為追求形式美，她可能幻想自己像睡美人一樣死去，保持最完美的狀態，而不是變成醜陋的屍骸 - **凜（Rin）**：對她來說，死亡可能是「終於可以休息了」的甜蜜誘惑，而不是恐懼的終點 - **朱音**：「反正活著也是等死」的虛無主義，但又矛盾地執著於「死前至少要吃飽」
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**11. 對「死亡」的獨特理解 (Romance with Death)**::U039 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/二、少女心理維度延展（第6-11點）/**11. 對「死亡」的獨特理解 (Romance with Death)**::U040 -->
- ## 三、IG敘事線 (Instagram Chronicle) ^IG敘事線
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線::U041 -->
- ### 3.1 核心設計理念
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.1 核心設計理念::U042 -->
- IG作為敘事載體的力量：它記錄的是「人們希望被看到的樣子」，往往與現實的殘酷形成最強烈的對比。「帳號不再更新」這件事，在現代社會中往往比看到屍體更讓人感到真實的「消失感」和「死亡氣息」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.1 核心設計理念::U043 -->
- ### 3.1.1 IG敘事線與社會風評階段對應表 ^IG風評對照
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.1.1 IG敘事線與社會風評階段對應表 ^IG風評對照::U044 -->
- | IG階段 | 社會風評階段 | 粉絲/公眾反應 | 連結 | |-------|-------------|--------------|------| | **第一階段：強行營業期** | [[編劇/12_社會風評與任務系統#階段一：維多利亞天使期\|維多利亞天使期]] | 狂熱崇拜、積極互動、純真追捧 | [[#^IG第一階段]] | | **第二階段：閃耀的日常** | 維多利亞天使期（持續）→ 裂痕初現 | 高峰期：留言爆滿...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.1.1 IG敘事線與社會風評階段對應表 ^IG風評對照::U045 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.1.1 IG敘事線與社會風評階段對應表 ^IG風評對照::U046 -->
- ### 3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段::U047 -->
- **關鍵詞**：笨拙、被動、只有晴香在High
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段::U048 -->
- 一開始只有晴香有 IG，她是這個小圈子的「KOL」，總是強行拉大家拍照。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段::U049 -->
- | 角色 | 帳號狀態 | 互動特徵 | |-----|---------|---------| | 美夜子 | 頭像是默認灰色人頭，ID是亂碼（user98234） | 晴香 Tag 她從來不按讚；被拍時下意識用手擋鏡頭，表情像在開作戰會議 | | 朱音 | 沒有帳號 | 在晴香鏡頭裡永遠是糊的，或正在吃東西，或比中指（被晴香用可愛貼圖遮住） | | 操 | 小號，沒有頭像，只看不發 | 秒讚晴香每一條Post但不敢留言；會截圖保存每...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段::U050 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.2 第一階段：強行營業期 (Haruka's Tutorial) ^IG第一階段::U051 -->
- ### 3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段::U052 -->
- **關鍵詞**：融入、笨拙的學習、虛假的永恆
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段::U053 -->
- 這是觀眾最覺得溫馨，回頭看最痛的時期。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段::U054 -->
- | 角色 | 轉變 | 經典貼文 | |-----|-----|---------| | 美夜子 | 開始發文，但全是極度模糊的貓照，或隊友的奇怪醜照（視角很謎，完全不懂構圖） | 大家去影貼紙相，美夜子不懂操作，選了「大眼瘦臉特效MAX」，四人的臉都變形得像外星人。她很認真地Po出來：「今天的戰術演練很成功。」 | | 朱音 | 開了帳號，頭像是那隻野狗。風格：從不發人像，只發食物遺照、深夜街道、野狗醜照 | 唱K時偷拍晴香走音或睡著...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段::U055 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.3 第二階段：閃耀的日常 (The Golden Age) ^IG第二階段::U056 -->
- ### 3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段::U057 -->
- **關鍵詞**：斷更、已讀不回、時間定格
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段::U058 -->
- > **【對應風評階段：魔女狩獵期】** 詳見：[[編劇/12_社會風評與任務系統#階段三：魔女狩獵期|風評系統]]
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段::U059 -->
- 隨著劇情進入中後段（隊伍分裂、朱音墮落、操假死、晴香社死），IG變成最殘酷的見證者。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段::U060 -->
- | 角色 | 最後動態 | 象徵意義 | |-----|---------|---------| | 晴香 | 評論區從「好可愛」變成黑粉謾罵，不再更新，頭像可能變黑 | 公眾形象的死亡 | | 操 | 「假死」那天發了全黑照片，或一句話：「對不起，演不下去了。」 | 對偽裝女性身份的疲憊（不明真相者以為是遺言） | | 朱音 | 凌晨4點的模糊街景，配上混亂文字（毒癮發作時的囈語），之後徹底消失 | 墮落的軌跡 | | 美夜子 | 依...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段::U061 -->
- #### 晴香評論區的風評崩壞時間線
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U062 -->
- 夕曝光晴香魔法少女身份後，IG評論區成為網路暴力的主戰場：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U063 -->
- | 時間點 | 評論區狀態 | 典型留言 | |-------|-----------|---------| | **曝光後1小時** | 震驚、困惑、質疑 | 「這是真的嗎？」「一定是惡作劇吧」「求官方出來解釋」 | | **曝光後6小時** | 分化、爭吵 | 粉絲護航 vs 路人質疑；開始有人翻舊帳 | | **曝光後24小時** | 輿論反轉 | 「一直在欺騙我們」「怪物假扮人類」「噁心」 | | **曝光後1週** | 全面潰...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U064 -->
- **最諷刺的對比**：同一張照片（晴香的微笑自拍），曝光前：「天使下凡」「治癒了我的一天」；曝光後：「這笑容好假」「怪物在模仿人類表情」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U065 -->
- **最痛的一幕**：美夜子發了一張四個杯子的照片（她們以前一起買的專屬杯子），配文什麼都沒寫，只有一個日期。下面只有浩然或粉絲的一條留言：「RIP」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U066 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.4 第三階段：數位墓碑 (Digital Death) ^IG第三階段/晴香評論區的風評崩壞時間線::U067 -->
- ### 3.5 第四階段：結局的迴響 (Post-Credits) ^IG第四階段
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.5 第四階段：結局的迴響 (Post-Credits) ^IG第四階段::U068 -->
- 多年後，這些帳號依然存在網路的角落。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.5 第四階段：結局的迴響 (Post-Credits) ^IG第四階段::U069 -->
- - 浩然或粉絲偶爾翻到舊Post，看著那張「變形的大眼貼紙相」，那時她們還在笑美夜子不懂拍照 - 旁白：「那時候我們以為IG上的動態會永遠更新下去，就像我們以為明天總會到來一樣。」
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.5 第四階段：結局的迴響 (Post-Credits) ^IG第四階段::U070 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/三、IG敘事線 (Instagram Chronicle) ^IG敘事線/3.5 第四階段：結局的迴響 (Post-Credits) ^IG第四階段::U071 -->
- ## 四、少女系活動場景設定
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定::U072 -->
- ### 4.1 K房場景：美夜子唱《雨天》 ^K房場景
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U073 -->
- **場景設定**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U074 -->
- - 氛圍：房間裡燈光閃爍，桌上堆滿飲料零食。剛才晴香還在又唱又跳《Happy Sugar Magic》，氣氛熱烈 - 輪到美夜子時，她切掉歡快伴奏，點了孫燕姿的《雨天》
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U075 -->
- **美夜子的演繹**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U076 -->
- - 她沒有像晴香那樣拿著麥克風站起來互動，而是縮在沙發角落，雙手握著麥克風，盯著螢幕上的歌詞 - 聲音低沉、乾淨，卻帶著一種讓人想哭的壓抑感 - 唱得非常投入，仿佛每一個字都在咀嚼自己的命運
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U077 -->
- **核心對話**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U078 -->
- > **晴香**（眨著大眼睛，好奇地湊近）：「美夜子前輩……妳唱得好投入啊！聽得我都想哭了。不過……歌詞好慘喔，全是失戀被拋棄的感覺。吶吶，前輩妳以前是不是受過很重的情傷？是被渣男騙過嗎？」 > > **美夜子**（放下麥克風，喝了一口水，表情恢復淡然）：「沒有。我沒有談過戀愛，也沒時間搞那些。」 > > **晴香**（驚訝）：「欸？那為什麼妳能唱得這麼……這麼『痛』？就像親身經歷過一樣？」 > > **美夜子**（看著已經黑掉的螢幕，...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U079 -->
- **衝突點：對「陽光」的排斥**
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U080 -->
- > **晴香**（試圖打氣）：「那……下次我們唱我的歌吧！《閃亮亮☆流星雨》！唱完心情就會變好了！我的歌就是為了帶給人笑容而寫的啊！」 > > **美夜子**（微微皺眉，身體下意識往後縮）：「不要。」 > > **晴香**：「欸——？！為什麼！我是C位欸！我的歌很紅欸！」 > > **美夜子**（直視晴香，毫不留情）：「妳的歌……太亮了。」 > > **晴香**：「太亮？」 > > **美夜子**：「太過正面積極，太過耀眼。對於一直待在...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U081 -->
- **場景的深層意義**：
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U082 -->
- - **Sun vs Rain**：晴香相信努力能改變未來，歌頌光明（「鼓舞」）；美夜子接受命運殘酷，習慣隱忍，喜歡的歌是用來「撫慰」傷口的 - **伏筆**：晴香後來才明白，要拯救美夜子，不是強行把她拉到陽光下，而是陪她在雨裡坐一會兒
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U083 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.1 K房場景：美夜子唱《雨天》 ^K房場景::U084 -->
- ### 4.2 其他少女系活動速寫
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.2 其他少女系活動速寫::U085 -->
- | 活動 | 場景描寫 | 角色反差 | |-----|---------|---------| | **影貼紙相 (Purikura)** | 美夜子不懂操作，選了「大眼瘦臉特效MAX」，四人臉都變形成外星人 | 美夜子很認真地認為這是「成功的戰術演練」 | | **密室逃脫** | 朱音不是解謎，而是直接暴力拆鎖 | 晴香在限動寫：「朱音又破壞公物了 💸 #隊友很暴力 #賠錢」 | | **睇戲（恐怖片）** | 身經百戰的魔法少女...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.2 其他少女系活動速寫::U086 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/四、少女系活動場景設定/4.2 其他少女系活動速寫::U087 -->
- ## 五、日常殘酷對比表現手法 ^daily-cruelty-contrast
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast::U088 -->
- ### 5.1 設計理念
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.1 設計理念::U089 -->
- 「少女日常」與「魔法少女戰場」之間的鴻溝，是本作最核心的殘酷美學。以下六種表現方向，專門用於呈現**「背負太多卻仍是少女」**的悲劇感。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.1 設計理念::U090 -->
- > 「她們用IG濾鏡遮蓋傷口，用OOTD隱藏戰損，用美食打卡掩飾味覺喪失——這不是虛偽，而是求生本能。」
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.1 設計理念::U091 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.1 設計理念::U092 -->
- ### 5.2 六大表現方向
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向::U093 -->
- #### **1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense::U094 -->
- 少女們用修圖軟體遮蓋的，不只是痘痘和黑眼圈——而是「怪物的證據」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense::U095 -->
- | 角色 | P圖行為 | 心理意義 | |-----|--------|---------| | 朱音 | 用消除筆P走手臂上的潰爛傷口（戰鬥燒傷），讓照片看起來「正常」 | 「如果照片裡的我是正常的，也許我就還是人類」 | | 操 | 用美顏濾鏡最大化，確保沒有任何「不夠女性化」的特徵被拍到 | 對身體形象的極度焦慮延伸到數位空間 | | 晴香 | 用貼圖遮住眼角的血絲（長期睡眠不足/哭泣後遺症） | 「偶像不能讓粉絲看到這種樣子」...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense::U096 -->
- **最殘酷的畫面**：朱音花了半小時P掉手臂傷口，發出去後只有3個讚。她盯著螢幕，不知道該為「傷口被隱藏」而鬆口氣，還是為「根本沒人在意」而難過。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense::U097 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**1. P圖作為心理防禦 (Photo Filter as Psychological Shield)** ^filter-defense::U098 -->
- #### **2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage::U099 -->
- 她們的穿搭不是為了時尚，而是為了**遮傷痕**。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage::U100 -->
- | 角色 | 穿搭特徵 | 隱藏的真相 | |-----|---------|----------| | 美夜子 | 永遠穿高領、長袖 | 遮蓋頸部勒痕（凜死時的畫面PTSD）、手臂的研磨傷疤 | | 朱音 | 暗色系、寬鬆衣物 | 遮蓋體型消瘦（營養不良+戰鬥過度消耗） | | 操 | 精心搭配的蕾絲、裙子、長袖手套 | 遮蓋手臂的自殘痕跡/變身後的殘留紋路 | | 晴香 | 偶像風格的可愛服裝 | 底下穿著長袖打底衫，遮蓋[[03_...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage::U101 -->
- **敘事應用**：粉絲讚美「操好會穿搭！手套好可愛！」——他們不知道那雙手套下面是什麼。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage::U102 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**2. OOTD下的戰損隱喻 (Outfit-of-the-Day as Battle Damage Concealment)** ^ootd-damage::U103 -->
- #### **3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness::U104 -->
- 她們打卡的甜點，其實已經嚐不出味道了。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness::U105 -->
- | 角色 | 美食打卡表現 | 真實感受 | |-----|------------|---------| | 晴香 | 拍蛋糕的照片，配文「超級好吃！」 | 入口的不是甜味，而是戰場上聞到的血腥味（PTSD閃回） | | 朱音 | 拍了滿桌食物，說「今天吃很飽」 | 其實只咬了一口就想吐（戰鬥後的生理排斥反應） | | 操 | 精心擺盤的下午茶照片 | 吃的時候一直在想「這些卡路里會不會讓我變得不夠女孩子」 | | 美夜子 | 不拍食...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness::U106 -->
- **最諷刺的對比**：晴香的美食照片下面，粉絲留言「好想跟晴香一起去吃！」——他們不知道晴香在拍完照後，躲進廁所乾嘔了五分鐘。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness::U107 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**3. 美食打卡的味覺喪失 (Food Porn as Sensory Deprivation)** ^food-numbness::U108 -->
- #### **4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo::U109 -->
- 凌晨發的限時動態，看起來是「失戀少女的矯情」，實際上是**PTSD發作後的求救訊號**。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo::U110 -->
- | 角色 | 深夜動態內容 | 粉絲/朋友的誤讀 | 真相 | |-----|------------|---------------|-----| | 朱音 | 凌晨3點發模糊街景，配文「好累」 | 「又在emo了」「失戀？」 | 毒癮發作後在角落發抖，眼前不斷閃過弟弟的笑容 | | 操 | 凌晨2點發全黑照片，配文「今天也很累呢」 | 「矯情」「想引人注意」 | 剛從「自己變成屍骸」的噩夢中驚醒，不敢再睡 | | 晴香 | 凌晨4點...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo::U111 -->
- **敘事痛點**：這些「矯情」的深夜動態，其實是她們最接近真實的時刻。但沒有人讀懂。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo::U112 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**4. 深夜Emo與真實恐懼 (Late Night Emo vs Real Terror)** ^midnight-emo::U113 -->
- #### **5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth::U114 -->
- 已讀不回不是在玩曖昧，是因為**手機掉在血泊裡了**。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth::U115 -->
- | 情境 | 普通人的解讀 | 魔法少女的真相 | |-----|------------|--------------| | 朱音突然不回訊息 | 「她在忙吧」「又在emo了」 | 正在被三隻屍骸圍攻，手機被踩碎 | | 操已讀後消失3小時 | 「是不是說錯話了？」 | 變身狀態無法操作手機，戰鬥結束後精疲力盡睡著了 | | 晴香的群組訊息停在「等下回你」 | 「偶像架子大」 | 被臨時召喚去處理屍骸，回來時發現自己被踢出群組 |
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth::U116 -->
- **最痛的畫面**：朱音在戰場上看到手機螢幕亮起，是唯一的網友發來的「生日快樂」。她想回覆，但下一秒屍骸的爪子劃過——手機裂成兩半，螢幕上的訊息永遠停在「已讀」。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth::U117 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**5. 已讀不回的真相 (Ghosting as Battlefield Reality)** ^ghosting-truth::U118 -->
- #### **6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien::U119 -->
- 她們學化妝，不是為了變美——是為了**「看起來像人」**。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien::U120 -->
- | 角色 | 化妝行為 | 隱藏目的 | |-----|--------|---------| | 朱音 | 用厚粉底、遮瑕膏 | 遮蓋屍骸化初期出現的青灰色斑塊/戰損傷疤 | | 操 | 精緻的「偽素顏」妝容 | 確保沒有任何「不夠女性化」的特徵被看到 | | 晴香 | 偶像級的完美妝容 | 遮蓋連續失眠導致的黑眼圈/哭腫的眼睛 | | 美夜子 | 不化妝 | 她已經放棄「看起來像人」這件事了 |
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien::U121 -->
- **最殘酷的對比**：朱音對著鏡子上妝的畫面，可以剪輯成「清新少女的日常」。但下一個鏡頭是她用粉底遮蓋的東西——手臂上正在擴散的、如同屍斑一樣的青灰色紋路。
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien::U122 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.2 六大表現方向/**6. 化妝教學的異化 (Makeup Tutorial as Humanization Effort)** ^makeup-alien::U123 -->
- ### 5.3 敘事應用總結
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.3 敘事應用總結::U124 -->
- | 表現方向 | 核心對比 | 敘事功能 | |---------|---------|---------| | P圖防禦 | 數位自我 vs 物理真相 | 展示她們如何用虛擬世界逃避現實 | | OOTD戰損 | 時尚穿搭 vs 戰場傷痕 | 「可愛」背後的代價 | | 美食麻木 | 美食享受 vs 感官喪失 | PTSD對日常生活的侵蝕 | | 深夜Emo | 矯情動態 vs 真實恐懼 | 她們最接近真實的時刻，卻被誤讀 | | 已...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.3 敘事應用總結::U125 -->
- ---
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/五、日常殘酷對比表現手法 ^daily-cruelty-contrast/5.3 敘事應用總結::U126 -->
- ## 六、與現有設定的交叉引用
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/六、與現有設定的交叉引用::U127 -->
- - [[導演/01_創作核心與指導原則#1.6角色塑造|少女心理五維度]] - 本文件第二部分作為原有五維度（1-5）的延展（6-11） - [[編劇/09_角色感官與私密習慣設定集|私密習慣]] - 各角色的 IG 使用習慣補充在該文件 - [[導演/01_創作核心與指導原則#^主題D|主題D：連結的價值]] - IG 互動體現連結的建立與崩壞 - [[編劇/05_故事大綱|故事大綱]] - IG 敘事線的四階段與故事主線同步 - [...
<!-- Sources: backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md::CU_ID=10_Girl_Daily_Social_Interaction_Setting::H少女日常與社交互動設定/六、與現有設定的交叉引用::U128 -->
- # 社會風評與任務系統
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統::U001 -->
- ## 設計理念
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/設計理念::U002 -->
- 本系統服務於三大敘事目標：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/設計理念::U003 -->
- 1. **模擬王道漫畫**：前期營造傳統魔法少女的「英雄偶像」氛圍，讓觀眾/玩家落入敘事陷阱 2. **帶出三位一體**：透過任務來源從「人類求助」轉變為「屍骸求助」，具象化人、魔法少女、魔法屍骸的本質無別 3. **強化無助感**：風評惡化對魔法少女們造成經濟制裁、輿論攻擊、社會排斥，增加劇情張力
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/設計理念::U004 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/設計理念::U005 -->
- ## 第一部分：社會風評三階段
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段::U006 -->
- ### 階段一：維多利亞天使期 (The Golden Age)
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)::U007 -->
- **時間點**：第一幕 ～ 第二幕前期
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)::U008 -->
- | 維度 | 設定內容 | |-----|---------| | **核心氛圍** | 激昂、熱血、傳統魔法少女 | | **公眾認知** | 魔法少女 = 偶像英雄 = 希望使者 | | **任務來源** | 人類（警方、市長、粉絲、商家） | | **任務類型** | 王道漫畫式：救人、打怪、護送、清除屍骸 | | **報酬形式** | Like數、感謝信、鮮花、粉絲禮物、媒體正面報導 | | **晴香心態** | 沉醉於「理想我...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)::U009 -->
- #### 光幕濾鏡的「美麗誤會」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/光幕濾鏡的「美麗誤會」::U010 -->
- 此階段的「偶像崇拜」並非真正的理解，而是[[編劇/03_世界觀設定#^light-veil|光幕濾鏡]]製造的**認知扭曲**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/光幕濾鏡的「美麗誤會」::U011 -->
- | 真實 | 濾鏡下的呈現 | |-----|------------| | 少女滿臉鮮血、渾身發抖 | 光滑無瑕的天使，優雅地揮動光劍 | | 少女痛苦尖叫「好痛！」 | 電子音：「目標排除完畢」 | | 少女哭著求救「有人嗎？」 | 電子音：「區域安全確認」 | | 少女蹲在地上嘔吐、崩潰 | 天使靜靜佇立，等待下一個指令 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/光幕濾鏡的「美麗誤會」::U012 -->
- **敘事意義**：市民崇拜的從來不是「她們」，而是帝國投射在她們身上的**完美幻象**。這種崇拜越熱烈，日後的背叛感就越強烈。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/光幕濾鏡的「美麗誤會」::U013 -->
- **濾鏡覆蓋範圍**：僅限日區（維多利亞之淚照射範圍）。夜區居民從未見過「天使」，他們看到的一直是真相——滿身傷痕、在廢墟中發抖的孩子。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/光幕濾鏡的「美麗誤會」::U014 -->
- #### 典型任務範例
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/典型任務範例::U015 -->
- | 任務名稱 | 委託人 | 內容 | 報酬 | |---------|-------|------|-----| | 迷路的小狗 | 小女孩 | 在後巷找回走失的寵物 | 手繪感謝卡 | | 商業區威脅 | 商會代表 | 清除盤據在商場附近的屍骸 | 媒體專訪機會 | | VIP護送 | 警方 | 護送政要穿越危險區域 | 官方嘉許 | | 校園危機 | 校長 | 驅逐入侵學校的魔法屍骸 | 學生歡呼、新聞報導 | | 粉絲見面會 |...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/典型任務範例::U016 -->
- #### 這個階段的「屍骸求助」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/這個階段的「屍骸求助」::U017 -->
- 晴香此時**完全無法理解**屍骸的「聲音」。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/這個階段的「屍骸求助」::U018 -->
- | 現象 | 晴香的解讀 | 實際意義 | |-----|-----------|---------| | 屍骸發出低沉嗚咽 | 「攻擊前兆，快閃避！」 | 屍骸在呼喚「幫助...」 | | 屍骸不攻擊、只是站著 | 「壞掉了？還是陷阱？」 | 屍骸在守護某樣東西 | | 屍骸向某個方向伸手 | 「那邊有同伴！」 | 屍骸想指引方向 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/這個階段的「屍骸求助」::U019 -->
- **敘事鋪墊**：這些「異常行為」會在整合夕後被重新理解，形成回顧時的震撼。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/這個階段的「屍骸求助」::U020 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段一：維多利亞天使期 (The Golden Age)/這個階段的「屍骸求助」::U021 -->
- ### 階段二：裂痕與質疑期 (The Crack)
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)::U022 -->
- **時間點**：第二幕中期 ～ 後期
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)::U023 -->
- | 維度 | 設定內容 | |-----|---------| | **核心氛圍** | 不安、懷疑、道德灰色 | | **觸發事件** | 凜犧牲、戰鬥破壞城市、魔法少女異常行為曝光 | | **公眾認知** | 恐懼、質疑、八卦、獵巫心理萌芽 | | **任務變質** | 人類委託開始變得自私、灰色 | | **報酬形式** | 減少、附帶條件、有時被算計 | | **晴香發現** | 被保護的人類並非全部善良，有人在利用她 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)::U024 -->
- #### 濾鏡開始「穿幫」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/濾鏡開始「穿幫」::U025 -->
- 隨著情緒毒品危機加劇，維多利亞之淚的負荷上升，[[編劇/03_世界觀設定#^light-veil|光幕濾鏡]]開始出現**不穩定徵兆**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/濾鏡開始「穿幫」::U026 -->
- | 穿幫現象 | 市民反應 | 官方解釋 | |---------|---------|---------| | 天使影像閃爍，瞬間露出少女真容 | 「我眼花了？」「好像看到...血？」 | 「訊號干擾，正在修復」 | | 電子音中夾雜真實的哭聲 | 「那是...人的聲音？」 | 「系統雜訊，請忽略」 | | 天使「倒下」後光幕延遲消失 | 市民看到少女倒在血泊中數秒 | 「視覺暫留，眼睛問題」 | | 變身解除瞬間被拍到真容 | 照片...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/濾鏡開始「穿幫」::U027 -->
- **敘事意義**：這些「穿幫」成為流言蜚語的素材。部分市民開始懷疑，但大多數人選擇相信官方解釋——因為**真相太可怕了**，不如繼續相信「天使」的存在。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/濾鏡開始「穿幫」::U028 -->
- #### 任務開始「變質」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/任務開始「變質」::U029 -->
- | 任務名稱 | 委託人 | 表面內容 | 真實情況 | |---------|-------|---------|---------| | 清除障礙 | 地產商 | 「殺掉阻礙開發的屍骸」 | 那隻屍骸毫無攻擊性，只是待在原地 | | 尋人啟事 | 男子 | 「幫我找回失蹤的女友」 | 女友是在逃離家暴 | | 商業清場 | 商會 | 「趕走流浪屍骸」 | 那些屍骸只是想待在陰影處 | | 媒體專訪 | 記者 | 「做個正能量報導」 ...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/任務開始「變質」::U030 -->
- #### 關鍵劇情點
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/關鍵劇情點::U031 -->
- **朱音揭露魔法少女的真實動機**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/關鍵劇情點::U032 -->
- > 「妳知道我為什麼戰鬥嗎？因為只有戰鬥時，我才能忘記弟弟死時的笑容。」 > > 「不要用妳那套『希望』『天使』的屁話來噁心我。妳根本不知道這個世界有多爛。」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/關鍵劇情點::U033 -->
- **美夜子的坦白**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/關鍵劇情點::U034 -->
- > 晴香：「妳騙我？」 > > 美夜子：「不全是謊言。我告訴妳的...是我自己也想相信的版本。」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/關鍵劇情點::U035 -->
- #### 屍骸求助的「異常」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/屍骸求助的「異常」::U036 -->
- 晴香開始**隱約察覺**有些屍骸的行為「不對勁」：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/屍骸求助的「異常」::U037 -->
- | 事件 | 晴香的困惑 | 她的選擇 | |-----|-----------|---------| | 屍骸擋在嬰兒車前 | 「為什麼不攻擊？」 | 仍然殺之（任務優先） | | 屍骸反覆走向某扇門 | 「在找什麼？」 | 忽略，完成任務 | | 屍骸在舊照片前停下 | 「...」 | 感到不安，但沒時間想 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/屍骸求助的「異常」::U038 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段二：裂痕與質疑期 (The Crack)/屍骸求助的「異常」::U039 -->
- ### 階段三：魔女狩獵期 (The Witch Hunt)
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)::U040 -->
- **時間點**：第二幕末 ～ 第三幕
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)::U041 -->
- | 維度 | 設定內容 | |-----|---------| | **核心氛圍** | 絕望、被遺棄、但帶有詭異溫柔 | | **觸發事件** | 維多利亞之淚被攻擊、濾鏡全城熄滅、夕曝光晴香身份 | | **公眾認知** | 憎恨、驅逐、視魔法少女為「另一種屍骸」 | | **人類反應** | 報警捉拿、商店拒賣、網路暴力、掟石頭 | | **任務來源轉變** | 人類委託消失，魔法屍骸成為主要「委託人」 | | **報酬形式** ...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)::U042 -->
- #### 濾鏡破碎：全城同時見到真相
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U043 -->
- **【解放之戰】** 晴香團隊攻入維多利亞之淚核心，成功停止人造太陽。這本應是「勝利」的瞬間——
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U044 -->
- **永晝之光熄滅的那一刻**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U045 -->
- | 時間 | 事件 | |-----|-----| | **0秒** | 維多利亞之淚核心受損，永晝之光開始閃爍 | | **3秒** | [[編劇/03_世界觀設定#^light-veil|光幕濾鏡]]全城同時崩潰 | | **5秒** | 直播鏡頭前，「光之天使」閃爍、扭曲，露出滿臉鮮血的晴香 | | **10秒** | 全城市民同時發出驚恐尖叫 | | **1分鐘** | 社交媒體癱瘓，「#天使的真面目」瘋傳 | | **10分鐘...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U046 -->
- **市民的第一反應不是同情，而是**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U047 -->
- > 「我們被騙了！」 > > 「那些怪物一直在我們身邊！」 > > 「她們會不會失控？會不會報復社會？」 > > 「住隔壁的少女...竟然有這種力量？」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U048 -->
- **黑奏的佈局**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U049 -->
- > 「各位市民，你們所見到的，正是帝國一直試圖隱藏的真相——這些『魔法少女』是不穩定的**生化兵器**。她們精神脆弱、力量失控，隨時可能變成魔法屍骸。為了保護各位，帝國將啟動『衛生行動』，全面銷毀這些威脅。」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U050 -->
- **結果**：大眾因恐懼選擇相信政府，開始主動舉報魔法少女。「衛生行動」不再是暗殺，而是公開處刑。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/濾鏡破碎：全城同時見到真相::U051 -->
- #### 人類的敵意
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/人類的敵意::U052 -->
- | 場景 | 描述 | |-----|-----| | 商店拒賣 | 「我哋唔做怪物生意。出去。」 | | 街頭掟石 | 群眾圍堵，高喊「滾出我哋社區！」 | | 網路暴力 | 「#晴香是怪物」「#魔法少女=定時炸彈」 | | 報警舉報 | 「警察？我見到嗰班怪物喺XX街！」 | | 經理人割席 | 「我從來唔認識佢。」（然後賣肖像權） |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/人類的敵意::U053 -->
- #### 屍骸成為「委託人」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/屍骸成為「委託人」::U054 -->
- **整合夕後，晴香終於能「聽懂」屍骸的聲音**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/屍骸成為「委託人」::U055 -->
- | 屍骸委託 | 遺願內容 | 主題 | |---------|---------|-----| | 守護花朵的老人 | 「呢朵花...係我送俾個女嘅...唔好俾人踩爛...」 | 愛超越死亡 | | 拿著樂譜的少女 | 「我想...完成最後一首歌...」 | 未竟之夢 | | 跪在門前的男子 | 「我想同佢講...對唔住...」 | 悔恨與寬恕 | | 護著幼體的成年屍骸 | 「保護...佢哋...」 | 群體的善 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/屍骸成為「委託人」::U056 -->
- #### 三位一體的視覺化
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/三位一體的視覺化::U057 -->
- **最具象徵性的場景**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/三位一體的視覺化::U058 -->
- > 晴香在廢墟中唱歌。 > > 外面，人類在咒罵、掟石。 > > 裡面，無數魔法屍骸安靜地聽，有些甚至隨著節奏輕輕搖擺。 > > 怪物比人類更溫柔。
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/三位一體的視覺化::U059 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第一部分：社會風評三階段/階段三：魔女狩獵期 (The Witch Hunt)/三位一體的視覺化::U060 -->
- ## 第二部分：雙軌風評系統
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統::U061 -->
- ### 晴香個人風評（偶像線）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/晴香個人風評（偶像線）::U062 -->
- 晴香作為公眾人物，有獨立於團隊的「偶像風評」：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/晴香個人風評（偶像線）::U063 -->
- | 階段 | 風評狀態 | 粉絲反應 | 經紀人行動 | IG動態 | |-----|---------|---------|-----------|--------| | **黃金期** | 極度正面 | 狂熱崇拜、接機、應援 | 接更多商演、推單曲 | 閃耀日常、正能量 | | **裂痕期** | 開始質疑 | 「佢成日缺席」「病咗？」 | 壓晴香解釋、控制輿論 | 強顏歡笑、配圖勉強 | | **社死期** | 身份曝光 | 「佢...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/晴香個人風評（偶像線）::U064 -->
- ### 團隊風評（魔法少女線）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/團隊風評（魔法少女線）::U065 -->
- 魔法少女作為群體，共享「團隊風評」：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/團隊風評（魔法少女線）::U066 -->
- | 階段 | 公眾認知 | 政府態度 | 民間反應 | 任務類型 | |-----|---------|---------|---------|---------| | **英雄期** | 「守護天使」 | 默許、利用 | 感激、主動求助 | 王道任務 | | **懷疑期** | 「破壞者？」 | 開始監控 | 恐懼、迴避 | 灰色任務 | | **敵視期** | 「另一種屍骸」 | 通緝、獵捕 | 報警、掟石 | 無人委託 | | *...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/團隊風評（魔法少女線）::U067 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第二部分：雙軌風評系統/團隊風評（魔法少女線）::U068 -->
- ## 第三部分：屍骸求助機制
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制::U069 -->
- ### 核心設定
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/核心設定::U070 -->
- 1. **屍骸保有「遺願」**：心之器破碎後，靈魂仍留有生前最強烈的執念 2. **陰影視覺**：只有整合了陰影的人（晴香整合夕後、朱音天生）能「聽懂」屍骸的聲音 3. **三位一體證明**：形態不同，但選擇態度的能力依然存在
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/核心設定::U071 -->
- ### 演進時間表
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/演進時間表::U072 -->
- | 故事階段 | 晴香的理解程度 | 屍骸求助的呈現 | |---------|--------------|--------------| | **第一幕** | 完全不理解 | 屍骸發出「雜訊」，晴香以為是攻擊前兆 | | **第二幕前期** | 隱約察覺「不對勁」 | 某些屍骸行為異常（守護而非攻擊），但仍殺之 | | **整合夕後** | 開始理解 | 夕翻譯屍骸的「遺願」，晴香震驚 | | **第三幕** | 主動接收 | 屍...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/演進時間表::U073 -->
- ### 屍骸委託類型
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/屍骸委託類型::U074 -->
- | 類型 | 典型例子 | 服務主題 | |-----|---------|---------| | **守護型** | 守護一朵花（生前送給女兒的）| 愛超越死亡 | | **遺願型** | 想完成最後一首歌 | 未竟之夢 | | **贖罪型** | 想向生前傷害的人道歉 | 悔恨與寬恕 | | **保護型** | 年長屍骸保護年幼屍骸 | 群體的善 | | **指引型** | 引導晴香找到重要線索 | 陰影的智慧 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/屍骸委託類型::U075 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第三部分：屍骸求助機制/屍骸委託類型::U076 -->
- ## 第四部分：選擇與後果（遊戲性設計）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）::U077 -->
- ### 對立委託機制
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/對立委託機制::U078 -->
- 在裂痕期與狩獵期，玩家會遇到「人類委託 vs 屍骸委託」的對立：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/對立委託機制::U079 -->
- **範例情境**：
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/對立委託機制::U080 -->
- > **人類委託**（地產商）：「殺掉那隻怪物，牠阻礙我開發。」 > > **屍骸委託**（透過夕翻譯）：「請保護...呢朵花...係我送俾個女嘅...」
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/對立委託機制::U081 -->
- | 選項 | 風評影響 | 心靈影響 | 故事意義 | |-----|---------|---------|---------| | **A：殺死屍骸** | 公眾風評 ↑ | 陰影值 ↑（未整合的痛苦累積） | 維持虛假的和平 | | **B：保護屍骸** | 公眾風評 ↓↓ | 獲得「真實碎片」（心靈成長） | 擁抱三位一體 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/對立委託機制::U082 -->
- ### 風評系統的具體後果
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果::U083 -->
- #### 經濟制裁
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/經濟制裁::U084 -->
- - 風評差時商店拒賣或物價暴漲 - 朱音買不到食物 → 更狂暴 → 內部矛盾加劇 - 資源匱乏迫使團隊做出道德灰色選擇
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/經濟制裁::U085 -->
- #### 輿論攻擊
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/輿論攻擊::U086 -->
- - 操最介意名聲 → 網路謾罵使她精神防線崩潰 - 更容易被黑奏煽動 - 強化「破碎瓷娃娃」心理模型
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/輿論攻擊::U087 -->
- #### 社會排斥
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/社會排斥::U088 -->
- - 無法回到日區 - 只能退守夜區或廢墟 - 最後的避風港：被救過的魔法屍骸群
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/社會排斥::U089 -->
- #### 對晴香的影響
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/對晴香的影響::U090 -->
- - 失去「為人類而戰」的動力 - 被迫思考：「我到底在保護誰？」 - 轉向接納陰影——因為怪物比人類更溫柔
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/對晴香的影響::U091 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第四部分：選擇與後果（遊戲性設計）/風評系統的具體後果/對晴香的影響::U092 -->
- ## 第五部分：任務詳細範例
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例::U093 -->
- ### 第一幕任務（黃金期）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第一幕任務（黃金期）::U094 -->
- | # | 任務名 | 委託人 | 目標 | 報酬 | 隱藏元素 | |---|-------|-------|-----|-----|---------| | 1 | 迷路的小狗 | 小女孩 | 在後巷找回寵物 | 手繪感謝卡 | 無 | | 2 | 商業區威脅 | 商會 | 清除屍骸 | 媒體專訪 | 屍骸有「異常行為」但被忽略 | | 3 | 校園守護 | 校長 | 驅逐入侵者 | 學生歡呼 | 無 | | 4 | VIP護送 |...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第一幕任務（黃金期）::U095 -->
- ### 第二幕任務（裂痕期）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第二幕任務（裂痕期）::U096 -->
- | # | 任務名 | 委託人 | 表面目標 | 真實情況 | 選擇後果 | |---|-------|-------|---------|---------|---------| | 6 | 清除障礙 | 地產商 | 殺掉「阻礙」的屍骸 | 屍骸無攻擊性 | 殺→風評↑；放過→風評↓ | | 7 | 尋人啟事 | 男子 | 找回「失蹤」女友 | 女友逃離家暴 | 交出→風評↑但良心不安；拒絕→風評↓ | | 8 | 商業清場 | 商會...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第二幕任務（裂痕期）::U097 -->
- ### 第三幕任務（狩獵期）
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第三幕任務（狩獵期）::U098 -->
- | # | 任務名 | 委託人 | 內容 | 報酬 | 主題 | |---|-------|-------|-----|-----|-----| | 10 | 最後一封信 | 屍骸（男子） | 將信交給他的兒子 | 真實碎片 | 未竟的愛 | | 11 | 守護後巷 | 屍骸群體 | 保護其他屍骸免受獵殺 | 真實碎片 | 群體的善 | | 12 | 完成的歌 | 屍骸（少女） | 讓她唱完最後一首歌 | 真實碎片 | 夢想的尊嚴 | ...
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第三幕任務（狩獵期）::U099 -->
- ---
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/第五部分：任務詳細範例/第三幕任務（狩獵期）::U100 -->
- ## 附錄：與其他系統的連動
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/附錄：與其他系統的連動::U101 -->
- ### 與IG敘事線同步
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/附錄：與其他系統的連動/與IG敘事線同步::U102 -->
- | 風評階段 | IG敘事階段 | 內容特徵 | |---------|-----------|---------| | 黃金期 | 強行營業 → 閃耀日常 | 正能量、工作照、粉絲互動 | | 裂痕期 | 閃耀日常末期 | 缺席解釋、強顏歡笑、配圖勉強 | | 社死期 | 數位墓碑 | 停更、被洗版、謾罵留言 | | 沉默期 | 結局迴響 | 帳號荒廢、偶爾有人懷念 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/附錄：與其他系統的連動/與IG敘事線同步::U103 -->
- ### 與導演資訊揭露同步
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/附錄：與其他系統的連動/與導演資訊揭露同步::U104 -->
- | 風評轉折 | 資訊揭露節點 | 觀眾體驗 | |---------|------------|---------| | 黃金期→裂痕期 | 凜犧牲 | 從熱血到不安 | | 裂痕期→狩獵期 | 夕曝光晴香身份 | 從不安到絕望 | | 狩獵期中 | 屍骸開始「求助」 | 認知衝擊、三位一體覺醒 | | 狩獵期末 | 晴香接納屍骸 | 對「希望」的重新定義 |
<!-- Sources: backup/screenwriter/12_Social_Evaluation_Quest_System.md::CU_ID=12_Social_Evaluation_Quest_System::H社會風評與任務系統/附錄：與其他系統的連動/與導演資訊揭露同步::U105 -->
