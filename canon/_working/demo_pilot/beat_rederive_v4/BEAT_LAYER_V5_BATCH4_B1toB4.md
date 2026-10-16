DELIVERY_STATUS: DELIVERY_READY

<!--
BEAT_LAYER_V5 — BATCH 4：B1–B4（街頭大戰開場 → 操到場）正式升級做 BEAT_LAYER_DEEP_DESIGN mode
基底：BEAT_LAYER_V4_1.md 嘅 B1–B4（已經過一輪盲審修正）。本批將佳哋升級做完整 19 欄位＋10-14 角度格式，內容唔變，只係補完整結構同分析。
0 sub-agent；0 改 skill；0 改 canon；0 新盲審。
-->

## BEAT: B1
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝開戰、變身、建立「偽亮色直播」嘅世界觀展示、教玩家基本操作。呢個係 demo 第一場戰鬥，值得獨立存在。現有設計（人形扭曲屍骸出現→變身→直播 UI→市民退後→教學）足以達成。冇靠標籤代替因果——變身、直播都係已確立嘅世界規則展示，唔係角色心理推論。
- SUFFICIENCY: 呢個 beat 純粹係外部事件觸發（屍骸出現）→角色反應（變身應戰），冇複雜嘅角色動機落差要處理。

FIELDS:
- beat_function: 開戰；變身展示（偽亮色高峰開場）；直播 UI 世界規則首現；基本戰鬥／閃避教學
- entry_state: 晴香同美夜子（貓形）喺日區街道；一個人形扭曲嘅大型屍骸出現
- pressure_trigger: R（REQUIRED）——外部事件：屍骸出現（燈塔效應引嚎，見 CDL-064）
- participant_intentions: 晴香＝變身應戰；美夜子＝魔法防護支援
- action: 晴香變身（美、帶極細代價視覺，HC-4f）；直播 UI 彈出；市民退到安全區外圍；玩家學基本攻擊／閃避
- reaction: 屍骸開始攻擊
- turn: N/A——呢個 beat 冇角色心理轉折，純粹係開戰同教學，功能係建立戰鬥場景
- consequence: 戰鬥正式開始；玩家學會基本操作
- emotional_value_shift: 平靜 → 戰鬥警覺（偽亮色高峰：外在光輝 vs 底層成本，O:141）
- relationship_delta: N/A——本 beat 冇關係互動
- audience_info_delta: 觀眾見到呢個世界嘅戰鬥直播制度（Reality Show，CDL-057）同假數值 UI（CDL-073）
- character_knowledge_delta: N/A——冇新知情變化
- setup_payoff: Setup → O19 主題B（首次變身美好謊言，外在光輝 vs 底層成本）
- world_rule_exposure: Reality Show 直播＋光幕（日區，Brief:5676）；屍骸＝人形扭曲（O20，唔係純怪物，CDL-031／HC-4b）
- gameplay_form: 基本攻擊／閃避教學（唯一主動教學承載，承 BEAT_LAYER_V4 §14.1）
- exit_state: 戰鬥進行中，玩家已學基本操作
- next_beat_pressure: R——屍骸升級攻勢，逼出 B2 嘅血糖危機
- source_obligation_trace: O:140（Outline Beat 2 事件：人形扭曲屍骸）；CDL-031（屍骸形態）；HC-4b（唔可以寫成純怪物）；CDL-057（Reality Show）；CDL-073（假數值 UI）；HC-4f（變身代價視覺）；CDL-064（燈塔效應）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 10
### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 屍骸要符合「人形扭曲」設定，唔可以寫成純怪物／空殼
- CURRENT_DESIGN: 屍骸形態＝人形扭曲版（被強烈情緒佔據的人），符合 O:140／CDL-031
- RATIONALE: HC-4b 明文禁止將屍骸定義為「純粹怪物/空殼」，寫成人形扭曲先符合三位一體世界規則
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 「首次變身美好謊言」呢條主題要有載體
- CURRENT_DESIGN: 變身畫面美麗，但帶一下極細代價視覺（HC-4f）
- RATIONALE: 「外在光輝 vs 底層成本」要同時喺同一個畫面出現，純美麗冇代價視覺會削弱主題 B
- RISK_TRADEOFF: 代價視覺太細觀眾可能完全忽略，但呢個係刻意（Act I 低強度滲漏原則，HC-7d）
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: demo 第一場戰鬥要教玩家基本操作
- CURRENT_DESIGN: B1 定為「唯一主動教學承載」（基本攻擊／閃避）
- RATIONALE: 跟教學階梯設計（BEAT_LAYER_V4 §14.1）——假設 demo 獨立開機冇 E-01，B1 要承擔最基本操作教學
- RISK_TRADEOFF: 如果 demo 獨立開機（冇先前教學），可能需要加前置教學——呢個已經喺更早期標 AUTHOR-low，未解決
- DESIGN_ACTION: VERIFY（demo 獨立開機嘅教學需求仍待定）

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 直播 UI 要喺呢個 beat 首現，but 唔可以過早揭示帝國操控嘅真相
- CURRENT_DESIGN: UI 彈出假數值（Likes／打賞），但冇任何角色質疑呢個制度
- RATIONALE: CDL-073 明文「嵌入假數值系統，Act I-III；Act III 揭露虛假」——Act I 只展示唔揭穿
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情觀眾第一次見到呢個世界嘅戰鬥，要感受到「我幫到人」嘅高效溫暖（GP:465）
- CURRENT_DESIGN: 市民退到安全區外圍，冇直接危險感，戰鬥本身有清晰目標
- RATIONALE: Act I 玩家感受目標明文要求「我幫到人」高效與溫暖、高可讀 UI、明確獎勵、低噪訊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 主題 B（首次變身美好謊言）要喺呢個 beat 建立
- CURRENT_DESIGN: THEME_SEEDED——變身美麗畫面本身就係謊言嘅表層，底層成本（HC-4f 代價視覺）只係細微暗示
- RATIONALE: 早期 beat 唔應該逼出 THEME_EXPLICIT，種子已經足夠
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B1 作為戰鬥開場，要夠快帶入節奏，唔可以拖
- CURRENT_DESIGN: 單一開場動作（出現→變身→UI→教學），冇多餘鋪排
- RATIONALE: 街頭大戰段落嘅第一個 beat，功能單純，應該快
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 O:140、CDL-031、HC-4b、CDL-057、CDL-073、HC-4f、CDL-064
- RATIONALE: 呢批引用都喺之前輪次核過，本批升級冇改變內容，只係補齊結構
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 B1 嘅功能有冇同其他 beat 重疊
- CURRENT_DESIGN: B1 專注開場＋教學，同 B2（血糖危機）、B3（連結）功能分明，冇重疊
- RATIONALE: 四個戰鬥 beat（B1-B4）各自負責唔同遞進階段
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 開場要有強烈嘅視覺衝擊，建立世界觀
- CURRENT_DESIGN: 變身畫面、直播 UI、市民反應三個視覺元素一齊建立「偽亮色」世界
- RATIONALE: 呢個係觀眾第一次見到呢個世界嘅戰鬥，要畀足夠嘅視覺資訊
- RISK_TRADEOFF: 三個元素同時出現可能資訊過載，要 Scene 層控制節奏
- DESIGN_ACTION: VERIFY（Scene 層驗證資訊密度）

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀10個真正相關角度（呢個 beat 功能單純，角色心理同關係角度大多唔適用）

---

## BEAT: B2
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝教玩家用葡萄糖針（核心機制教學）；美夜子非計劃保護晴香（忠誠線第一步）。值得獨立存在。
- ALTERNATIVES_CONSIDERED: 之前輪次已經做過一次修正——原設計「晴香照字面收美夜子嘅功利藉口」撞 CDL-083 原文要求「晴香若有所感但未深究」，已改正（見 source_obligation_trace）。本輪冇新嘅方案比較，純粹升級格式。
- SUFFICIENCY: 美夜子嘅保護行動（擋）→即講功利藉口（coping）→晴香有所感但未深究（符合佳對自己身體唔深究嘅性格，同 N1 一致）——因果鏈完整。

FIELDS:
- beat_function: 血糖危機教學（核心機制：注射針）；美夜子非計劃保護晴香，即用功利藉口掩蓋（忠誠線第一步）
- entry_state: 戰鬥進行中，屍骸升級攻勢
- pressure_trigger: R（REQUIRED）——外部事件：屍骸升級攻勢；晴香血糖跌（畫面變灰、手震，身體感知做提示，冇數字讀數——血糖手錶要 E-02 後先由秋穗送，demo 冇讀數）
- participant_intentions: 晴香＝頂住戰鬥；美夜子＝保護晴香（本能，非計算）
- action: 玩家被逼用一支注射針（教學：遇險時嘅核心機制）；戰術視窗首次出現（美夜子作為隊友遇險時開一次視窗，示範呢個系統）；晴香險中招，美夜子本能用魔法防護擋，咬唇（貓形同一動作，M:278），即講功利藉口
- reaction: 晴香若有所感（感受到美夜子嘅保護唔止係功利），但未深究，照樣繼續戰鬥
- turn: N/A——呢個 beat 冇晴香嘅心理轉折，重點係美夜子嘅忠誠線第一步
- consequence: 晴香學會用注射針；美夜子忠誠線開始（動作型非語言，CDL-083）
- emotional_value_shift: 自信 → 吃力（戰鬥升級）
- relationship_delta: 美夜子對晴香＝第一步非計劃保護（忠誠線起點，CDL-337）
- audience_info_delta: 觀眾見到美夜子口硬身守嘅模式（講功利藉口但行動先係真心）
- character_knowledge_delta: 晴香若有所感，但未深究（唔係知道但收埋，係未去深究）
- setup_payoff: Setup → 糖量計累積（M1 嘅資源見底做 payoff）；Setup → 美夜子忠誠線（後續累積）
- world_rule_exposure: 血糖機制（CDL-114）；美夜子貓形態魔法防護（CDL-108）
- gameplay_form: 教學：遇險用注射針；戰術視窗首次示範（只對隊友開，GP:30）
- exit_state: 晴香血糖回升少少，繼續戰鬥；美夜子完成第一次保護
- next_beat_pressure: R——仍然唔夠打，逼出 B3 情緒連結
- source_obligation_trace: CDL-114（血糖機制）；GP:371（注射針，夜區黑市貨）；CDL-108（貓形魔法防護）；M:278（咬嘴唇跨形態通用習慣）；CDL-083（美夜子非功利保護動作，即用功利理由掩蓋——原文要求「晴香若有所感但未深究」，呢個 beat 已經按呢個要求修正）；GP:30（戰術視窗只對隊友，CDL-110 血糖手錶 E-02 後先派，demo 冇數字讀數）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 11
### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 美夜子嘅保護行動要符合佳「大腦當工具、靈魂本能守護」嘅性格（CDL-060）
- CURRENT_DESIGN: 本能擋、即講功利藉口——動作先行，語言補救
- RATIONALE: CDL-083 明文要求「動作型非語言，比語言型更難被功利邏輯消解」——先做先講，先符合呢個設計
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 美夜子嘅「即講功利藉口」係佳嘅 coping（截停真心話），要準確
- CURRENT_DESIGN: 擋完即刻講功利理由
- RATIONALE: M:278「真心話已經衝到嘴邊，呢個動作係佢用嚎physical截停自己」——藉口嘅功能唔係呃人，係自我截停
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 晴香嘅反應要符合「若有所感但未深究」，唔可以寫成「照字面收」
- CURRENT_DESIGN: reaction 欄已修正為「若有所感但未深究」
- RATIONALE: 原本「照字面收」撞 CDL-083（美夜子期望晴香有所感先合理化佳自己嘅功利藉口有效）；呢個修正保留咗之前質疑輪嘅成果
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 教玩家核心機制（注射針）同戰術視窗系統
- CURRENT_DESIGN: 兩個教學疊喺同一個 beat（血糖危機逼用針；美夜子遇險開視窗）
- RATIONALE: 兩個機制都要喺 demo 入面教，呢個 beat 啱啱好有兩個觸發時機，避免分開兩個 beat 教學
- RISK_TRADEOFF: 兩個教學疊埋可能資訊過載，要 Scene 層控制節奏，分先後出現
- DESIGN_ACTION: VERIFY（Scene 層確保兩個教學唔同時彈出）

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 血糖機制要用身體感知表達，唔可以用數字讀數（手錶 E-02 後先有）
- CURRENT_DESIGN: 畫面變灰、手震做提示，冇數字
- RATIONALE: 盲審搵到嘅問題——血糖手錶由秋穗 E-02 後先派（CDL-110），demo 冇秋穗，用數字讀數會穿崩
- RISK_TRADEOFF: 冇數字讀數可能令玩家唔清楚「幾時要用針」，但畫面變灰已經係清晰訊號
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 呢個 beat 要為 M1 嘅資源見底做鋪墊
- CURRENT_DESIGN: Setup → 糖量計累積
- RATIONALE: 呢個 beat 用咗第一支針，令後面資源見底嘅因果更清晰
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 美夜子嘅保護行動要帶出「口硬身守」嘅主題質感
- CURRENT_DESIGN: THEME_SEEDED——動作（保護）同語言（功利藉口）嘅對比，種落「說謊者渴望謊言係真」嘅種子
- RATIONALE: 同 N3 嘅美夜子設計一致，呢個 beat 延續同一個角色主題
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要見到美夜子真心保護，但唔可以提早揭穿佳嘅姊妹身份
- CURRENT_DESIGN: 保護動作純粹讀做「隊友義氣」，冇任何暗示血緣關係
- RATIONALE: 美夜子「非普通人」第一信號要到 Act I 末（09:350），依個 beat 唔可以提早
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 CDL-114、GP:371、CDL-108、M:278、CDL-083、GP:30、CDL-110
- RATIONALE: 呢批引用大部分喺之前質疑輪已核過
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查美夜子嘅保護動作有冇同 B6（晴香擋操）重複
- CURRENT_DESIGN: B2 係美夜子擋晴香；B6 係晴香擋操——主體唔同、意義唔同（忠誠線起點 vs 操嘅轉折觸發）
- RATIONALE: 兩個「擋」動作分配咗唔同角色、唔同意義，避免重複感
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B2 要承接 B1 嘅節奏，升級緊張感
- CURRENT_DESIGN: 由「教學」升級到「危機」，節奏遞進
- RATIONALE: B1-B4 嘅節奏設計係逐步升級，B2 係第一個升級點
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀11個真正相關角度

---

## BEAT: B3
STATUS: PROVISIONAL

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝情緒連結首次使用（canon 要求嘅 beat）；令晴香有餘裕留意到 B4 操救路人。值得獨立存在。
- SUFFICIENCY：見下方「全局未解事項」——情緒連結人數（2026-10-11 補充）：紫音呢度未入隊、未出場（佳要到 M1 先出現），所以本 beat 嘅兩人用法同 canon「首次連結四人」嘅講法唔算喺同一個事件相撞——嗰個矛盾本身（canon 自己 CDL-121/225③/timeline:139 vs CDL-139 前後矛盾）依然未解決，但同呢個具體決定冇關，詳見 DERIVATION_V4.md PC17 補充（2026-10-11）。
- 全局未解事項（唔阻 demo，但要你知）：情緒連結嘅入侵強度，原本 canon 將 E-02 連結定做 Act I 最強懷疑點（CDL-224），demo 刻意降到「一瞬、雙向、冇記憶畫面」——呢個降低幅度屬於 DEV（作者 D-13 好暖決定嘅延伸），未經正式批核確認呢個降幅啱唔啱。

FIELDS:
- beat_function: 情緒連結首次使用（canon 要求）；令晴香有餘裕留意到操救路人（B4 嘅前提）
- entry_state: 仍唔夠打，B2 用咗一支針後血糖回升少少但未夠
- pressure_trigger: R（REQUIRED）——外部事件：仍然唔夠打，屍骸未倒
- participant_intentions: 美夜子＝提出連結求勝；晴香＝信任美夜子，答應
- action: 美夜子提出連結，一句提到以前同人試過，一瞬猶豫；晴香察覺冇問。連結啟動：力量暴增；兩人當下情緒一瞬互透（冇記憶畫面），晴香當自己緊張、美夜子認得但唔講
- reaction: 力量暴增，晴香成功壓住局面
- turn: 被動（求救）→ 主動（力量反擊）——連結令晴香由捱打變成可以反擊
- consequence: 晴香因增幅有餘裕望向四周（為 B4 做鋪墊）；連結機制引入（代價未顯）
- emotional_value_shift: 吃力 → 強大（底下有一下唔舒服）
- relationship_delta: 美夜子對晴香＝第一次用最珍重嘅方式（凜式連結）交付信任；晴香對美夜子＝唔問、信任
- audience_info_delta: 「合體技」有一下唔對路（少少不安），但勝利感蓋住
- character_knowledge_delta: 晴香得「連結可增幅」新知，唔知後遺症；美夜子知後遺症但唔講
- setup_payoff: Setup → O17（情緒被強制透明，Act IV 拒絕全人類互聯嘅種子）；Setup → 凜（P-A08，日後凜前史）
- world_rule_exposure: 情緒連結機制首次示範（01:857-861 L1 表層同步）
- gameplay_form: 連結啟動後力量數值可見上升；可玩載體候選：連結期間兩個唔同步嘅心跳回饋（HUD／震動），Scene 層驗證
- exit_state: 晴香力量暴增，正在壓住局面
- next_beat_pressure: N/A——純敘事銜接，操即將到場（B4）
- source_obligation_trace: CDL-123／CDL-032（情緒連結首次使用，美夜子提出）；CDL-084（凜信息一句，一瞬猶豫）；01:857-861（L1 表層同步定義）；CDL-224／CDL-225③（canon 原定連結入侵本質，demo 降低強度屬 DEV，見 DESIGN_DECISION_RECORD）；O17（情緒被強制透明，Act IV 拒絕互聯種子）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 12
### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 情緒連結首次使用要符合 canon 機制定義（L1 表層同步）
- CURRENT_DESIGN: 兩人情緒一瞬互透，冇記憶畫面，符合 L1「感知當下情緒、無傷害」
- RATIONALE: 01:857-861 定義 L1 為短期配合、戰術協作、能感知對方當下情緒、無傷害——demo 嘅設計貼呢個層級
- RISK_TRADEOFF: canon 另一邊（CDL-224/225③）將 E-02 連結定做「所有防衛機制同時強行突破」，強度比 L1 重——demo 用 L1 強度係刻意降低（DEV），完整版可能要重新校準
- DESIGN_ACTION: VERIFY（降低強度嘅幅度未經正式批核，記錄喺 DESIGN_DECISION_RECORD）

### ANGLE: Information/Reveal Control（全局矛盾核實，2026-10-11 補充）
- DESIGN_REQUIREMENT: 檢查「首次連結二人」會唔會撞 canon「首次連結四人」嘅講法
- CURRENT_DESIGN: 紫音喺 B3 未入隊、未出場（佳要到 M1 先出現）
- RATIONALE: 兩個事件唔喺同一個時間點，呢個具體決定（B3 用二人）同 canon 嘅四人講法冇直接相撞，因為紫音根本未到；canon 自己嘅內部矛盾（CDL-121/225③/timeline:139 vs CDL-139）依然未解決，但唔係因為呢個 beat 嘅決定造成嘅，亦唔係靠呢個決定解決咗
- RISK_TRADEOFF: 完整版如果要寫明「首次四人連結」係邊一場，呢個問題依然 DEFERRED 待作者
- DESIGN_ACTION: VERIFY（全局矛盾未解，但唔阻本 beat）

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 美夜子提出連結係佳珍重嘅行為（同凜試過），要有相應重量
- CURRENT_DESIGN: 一句提到以前同人試過，一瞬猶豫
- RATIONALE: CDL-084 要求「極簡一句帶情感色彩」，唔畀具體資訊，呢度跟足
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 晴香察覺美夜子猶豫但冇問，呢個係佳性格一致嘅表現
- CURRENT_DESIGN: character_knowledge_delta 寫明晴香得新知但唔知後遺症
- RATIONALE: 同 N1/N2 嘅「察覺但未深究」一致
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 連結嘅代價要延後，唔可以喺呢個 beat 顯現
- CURRENT_DESIGN: consequence 明寫「連結機制引入（代價未顯）」
- RATIONALE: HC-4a 要求魔法消痛場景標示代價，但 E-02 嘅代價延後到 E-03（T8，已知張力，demo 唔收）
- RISK_TRADEOFF: 冇風險（已知限制）
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要感到「合體技有一下唔對路」但唔可以明確讀出「呢個係入侵」
- CURRENT_DESIGN: 「少少不安但被勝利感蓋住」
- RATIONALE: 符合 D-13 好暖整體調性，同埋 HC-1b 唔過早揭示黑暗本質
- RISK_TRADEOFF: 風險係降低強度之後，不安可能太細，觀眾完全察覺唔到——呢個已經記喺 World Rule 角度做 VERIFY
- DESIGN_ACTION: VERIFY

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 連結要為 Act IV 拒絕黑奏全人類互聯做種子
- CURRENT_DESIGN: THEME_SEEDED——晴香親身體驗咗一次「情緒被強制透明」，但呢個 beat 本身唔明講
- RATIONALE: CDL-224 要求 Act IV 嘅拒絕要有說服力，根源就係呢次經歷
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 連結嘅力量暴增要有可玩表達，唔淨係數值上升
- CURRENT_DESIGN: 候選＝連結期間兩個唔同步嘅心跳回饋（HUD／震動）
- RATIONALE: 純數值上升冇戲劇感，用心跳回饋可以暗示「雙方情緒疊埋但唔同步」嘅不安
- RISK_TRADEOFF: 呢個係候選，未定案，留 Scene 層驗證
- DESIGN_ACTION: VERIFY（Scene 層決定呢個可玩載體嘅可行性）

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確，矛盾要老實標記（唔可以當冇事）
- CURRENT_DESIGN: CDL-224/225③ 同 01:857-861 嘅強度矛盾已經喺 World Rule 角度明確標記，唔係隱藏
- RATIONALE: 誠實標記未解決嘅矛盾，好過假裝已經解決
- RISK_TRADEOFF: 冇風險（呢個誠實標記本身就係風險管理）
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 點解連結要用「情緒一瞬互透」而唔係純粹力量加成，冇任何情緒交流
- CURRENT_DESIGN: 連結必然帶住情緒互透（唔止係力量外掛）
- RATIONALE: 情緒連結嘅世界規則定義本身就係「情緒場域同步」，純力量加成會違反呢個機制嘅本質（02_glossary:1070）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查連結嘅「情緒互透」會唔會同 N3 嘅「美夜子迴避代價」功能重疊
- CURRENT_DESIGN: N3 嘅迴避係語言／行為層（唔講代價）；B3 嘅互透係純情緒層（冇語言），兩者唔重疊
- RATIONALE: 兩個 beat 用唔同層面表達「有啲嘢未講清」，唔算重複
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B3 係戰鬥中段嘅高潮前奏，要有爆發感
- CURRENT_DESIGN: 連結啟動帶嚎「強大」嘅情緒轉變
- RATIONALE: 由 B2 嘅危機升級到 B3 嘅反擊，節奏遞進合理
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀12個真正相關角度

---

## BEAT: B4
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝操登場（獨行、形式主義性格確立）；操救路人（入隊理由嘅因果起點）。值得獨立存在。
- SUFFICIENCY: 操到場嘅因果（燈塔效應，冇得唔打）→救路人嘅因果（混戰求存副作用，CDL-322，唔係刻意行善）——兩步都有具體機制支撐，唔靠標籤。

FIELDS:
- beat_function: 操登場（燈塔效應、獨行、形式主義性格確立）；操救路人（為 B6「晴香覺得操心地好」做因果起點）
- entry_state: 晴香連結增幅中，壓住局面；屍骸未倒
- pressure_trigger: R（REQUIRED）——外部事件：操被燈塔效應引到（CDL-063/064，佢自己唔係挑釁，係被迫成為目標）
- participant_intentions: 操＝形式主義強迫（冇得唔打）；順手救路人＝混戰求存嘅副作用，唔係刻意行善
- action: 操由高處介入，撐傘、唔掂地、姿態優先（晴香因連結增幅有餘裕望過去，睇到操幾執著儀態）；混戰中為求存，操順手擋咗一擊，救咗一個未疏散路人（非刻意）
- reaction: 路人獲救；操自己冇特別反應（當求存副作用，CDL-322）
- turn: N/A——呢個 beat 冇操嘅心理轉折（轉折留喺 B6）
- consequence: 晴香見到操救人，形成「佳心地好」嘅印象（CDL-322 三重解讀其中一重）；三方混戰開始
- emotional_value_shift: 兩人戰 → 三方混戰
- relationship_delta: 晴香對操＝「心地好」印象起點；操對呢個路人＝自己都未必有意識到救咗人
- audience_info_delta: 觀眾第一次見到操——獨行、優雅、冷
- character_knowledge_delta: 晴香唔知操嘅真實動機（形式主義強迫，唔係選擇打），單純睇到結果（操出手、救咗人）
- setup_payoff: Setup → P-A04（晴香天真善意建隊，FM:20，Act II payoff）；Setup → CDL-322 三重解讀（操→Phase D CDL-323）
- world_rule_exposure: 燈塔效應（CDL-064：啟動裝置者係本能獵殺目標，操唔係挑釁，係被迫）
- gameplay_form: 操做 NPC 自動介入戰鬥，玩家唔操控佳
- exit_state: 操喺戰場上，晴香已經對佳有咗初步印象
- next_beat_pressure: R——屍骸反撲，操即將中陷阱（B5）
- source_obligation_trace: CDL-063／CDL-064／CDL-065（燈塔效應、冇得唔打、孤身戰鬥冇觀眾嘅空洞疲勞）；CDL-322（操順手求存副作用，三重解讀：晴香／路人／操自己各有唔同讀法）；CDL-050（操獨行俠性格，撐傘、唔掂地嘅姿態偏好）；FM:20（P-A04）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 11
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操嘅登場要確立佳 Act I 起點嘅性格（形式主義、冇得唔打），為後面轉折鋪路
- CURRENT_DESIGN: 操由燈塔效應被迫到場，唔係主動挑戰
- RATIONALE: CDL-063/064 明文操「唔係主動挑釁，而係被迫成為目標」——呢個「被迫」係操 Act I 起點嘅核心，建立「義務式戰鬥」嘅基礎，為 B6 轉折做對照
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 操救路人嘅因果要準確——係刻意行善，定係副作用
- CURRENT_DESIGN: 「混戰中求存嘅副作用」，唔係刻意
- RATIONALE: CDL-322 原文明寫「順手（非刻意，係求存嘅副作用）」；如果寫成刻意行善，會撞「操唔會自動因為世界有事而幫人」（S:256）嘅性格邏輯
- RISK_TRADEOFF: 冇風險，呢個已經係之前輪次核過嘅修正
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 晴香對操嘅印象（心地好）要有因果支撐，唔可以憑空出現
- CURRENT_DESIGN: relationship_delta 寫明「心地好」印象起點，源自目擊救人
- RATIONALE: CDL-322 定義咗三重解讀（晴香／路人／操自己），本 beat 只處理晴香嗰重讀法，為 B6 嘅入隊理由做鋪墊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 操嘅出場要保留神秘感，唔可以一次過交代佳嘅背景
- CURRENT_DESIGN: 觀眾只見到行為（獨行、優雅、救人），冇任何背景交代
- RATIONALE: 操嘅身份、家族背景留 Act I 隱藏（CDL-133 對家族話題明顯迴避）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 操到場要符合燈塔效應機制，唔可以寫成佳主動挑戰屍骸
- CURRENT_DESIGN: 操被燈塔效應引到，冇得唔打
- RATIONALE: 燈塔效應（07:62-73）係所有魔法少女持有裝置嘅隱性代價，操嘅「冇得唔打」根源就係呢個機制
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 晴香睇到操出手，但唔知操嘅真實動機
- CURRENT_DESIGN: character_knowledge_delta 明寫晴香唔知操嘅形式主義強迫，單純睇到結果
- RATIONALE: 呢個知情落差令晴香嘅「心地好」印象變成一個誤判（但係一個友善嘅誤判，後面可以慢慢修正）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: P-A04（晴香天真善意建隊）要有起點
- CURRENT_DESIGN: Setup → P-A04（FM:20，Act II payoff）
- RATIONALE: 建隊嘅種子要由操救路人呢個畫面開始種落，為 B6 做情感基礎
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情觀眾第一次見操，要留下清晰但唔完整嘅印象
- CURRENT_DESIGN: 獨行、優雅、冷嘅視覺印象，唔多作解釋
- RATIONALE: 第一印象留俾視覺語言（撐傘、唔掂地）去表達，唔靠對白解釋
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 CDL-063/064/065、CDL-322、CDL-050、FM:20
- RATIONALE: 呢批引用大部分喺之前輪次核過
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查操救路人會唔會同 B6（晴香擋操）喺功能上重複
- CURRENT_DESIGN: B4 係操救陌生人（副作用）；B6 係晴香救操（本能、刻意）——一個係副作用、一個係本能主動，意義相反但互相呼應
- RATIONALE: 兩個「救」動作分別代表操嘅「冇意識行善」同晴香嘅「有意識行善」，形成對比，唔係重複
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B4 要承接 B3 嘅高潮，引入新角色
- CURRENT_DESIGN: 連結增幅後嘅餘裕畫面轉去操登場，節奏由「晴香主場」轉去「操登場」
- RATIONALE: 呢個轉場利用咗 B3 嘅連結增幅做因果橋接（有餘裕先留意到操），唔係突然跳場
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀11個真正相關角度

---

## SEMANTIC GATE 結果
B1/B2/B4：全部角度 KEEP 或者 VERIFY（Scene 層執行細節，非阻斷）。
B3：STATUS 保持 PROVISIONAL——情緒連結入侵強度嘅降低幅度（DEV，承 D-13 好暖決定）未經正式批核確認，同埋全局「首次連結人數」矛盾（PC17）依然 DEFERRED 待作者——但呢個 beat 本身嘅具體決定（B3 用二人）已經核實唔同呢個全局矛盾直接相撞，唔阻呢個 beat 交付，只係帶住 PROVISIONAL 狀態繼續（跟 Local Vertical Refinement Policy）。
**結論：結構 validator PASS，語意抽查完成，冇阻斷問題。`DELIVERY_STATUS` 標 `DELIVERY_READY`（B3 本身狀態仍為 `PROVISIONAL`，呢個同 DELIVERY_READY 唔矛盾——交付嘅係「呢層已經做齊、可以落 Scene」，唔係「呢個故仔決定已經終局」）。**
