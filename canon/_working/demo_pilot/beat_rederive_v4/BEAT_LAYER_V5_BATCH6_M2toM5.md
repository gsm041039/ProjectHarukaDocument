DELIVERY_STATUS: DELIVERY_READY

<!--
BEAT_LAYER_V5 — BATCH 6：M2–M5（決定潛入 → 潛入 → 佈置／跌牙 → 收尾）升級做 BEAT_LAYER_DEEP_DESIGN mode
基底：BEAT_LAYER_V4_1.md 嘅 M2–M5＋BATCH3 輕量追加（紫音入隊後嘅整合）。本批升級做完整 19 欄位＋10-14 角度，取代 BATCH3_M2toM5.md（保留作參考，唔刪）。
0 sub-agent；0 改 skill；0 改 canon；0 新盲審。
引用修正：BEAT_LAYER_V4_1 原引用 CDL-254 做基地分工出處，呢條其實係 E-12 衛生行動計時器，同基地無關——正確出處係 CDL-141（本批修正）。
-->

## BEAT: M2
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝任務成立（補給見底→決定潛入學校）；紫音加入後嘅團隊初步互動。值得獨立存在。現有設計（美夜子提議、操嫌但跟、晴香想要地方、紫音默默跟住）冇靠標籤跳過因果——每個角色嘅反應都扣連已確立性格（美夜子軍方效率、操形式主義嫌棄但守規則、紫音剛跟隨嘅謹慎距離）。
- SUFFICIENCY：呢個 beat 冇角色要作出重大決定（補給見底係外部逼出，紫音跟隨已經喺 M1 完成），冇「答應太快」類型嘅風險。

FIELDS:
- beat_function: 任務成立（決定夜潛學校攞補給）；四人團隊初步互動（紫音加入後第一次集體決策場景）
- entry_state: 補給見底（M1 尾聲），四人（晴香／美夜子／操／紫音）企喺街頭
- pressure_trigger: R（REQUIRED）——資源匱乏（物理狀態壓力，承 M1）
- participant_intentions: 美夜子＝解決問題（軍方效率，提議具體目標）；操＝唔想但冇更好方案（形式主義嫌棄環境但守規則：唔可以冇補給）；晴香＝想搵一個冇大人嘅地方；紫音＝未熟，默默跟從
- action: 美夜子提議夜潛學校攞補給（醫療室葡萄糖針劑、化學實驗室材料、多餘傢俬）；操嫌但跟（「指導庶民」嘅責任感延續 B7）；晴香講出想要一個屬於大家、冇大人嘅地方；紫音冇講意見，只係默默跟住，企得稍遠
- reaction: 四人（鬆散地）同意，開始行動
- turn: N/A——本 beat 冇角色心理轉折，功能係任務成立
- consequence: 四人決定夜潛學校；分工隱含確立（下個 beat 執行）
- emotional_value_shift: 疲累／見底 → 有具體目標嘅行動感
- relationship_delta: 紫音對三人＝保持距離（M1 跟隨後嘅第一次集體場景，仍未熟）；操對紫音＝保持戒備距離（同佳對任何新人嘅態度一致）
- audience_info_delta: 觀眾見到團隊第一次要一齊做決定（唔止戰鬥），紫音嘅存在感低調但確實喺度
- character_knowledge_delta: 紫音知自己跟咗呢班人，但未知佳哋嘅底細；其他人知紫音剛跟隨，但唔知佳嘅真實情況（戒斷）
- setup_payoff: Setup → M3 嘅具體分工（任務目標已確立）；Setup → 基地嘅存在意義（晴香「冇大人嘅地方」嘅渴望）
- world_rule_exposure: N/A——本 beat 純粹決策交流，冇新世界規則展示
- gameplay_form: 對話／選擇過場（玩家見到團隊討論，低互動）
- exit_state: 四人出發去學校
- next_beat_pressure: R——實際潛入行動（M3）
- source_obligation_trace: CDL-141（醫療室葡萄糖針劑＋化學實驗室材料＋多餘傢俬做目標；基地≠茶餐廳，少女需要冇大人嘅私密空間）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 10
### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 紫音剛跟隨（M1），呢個 beat 要準確表達佳對新團隊嘅初步距離
- CURRENT_DESIGN: 紫音冇講意見，企得稍遠，純粹跟從
- RATIONALE: 延續「似隻畀人餵食過嘅流浪狗」嘅狀態（CDL-052）——跟但唔主動參與決策，符合一個剛建立嘅、單方面嘅跟隨關係
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操「嫌但跟」要延續 B7 已經建立嘅責任感（指導庶民），唔可以突然變成純粹抱怨
- CURRENT_DESIGN: 操嫌棄但守規則（守住自己應承咗嘅指導角色）
- RATIONALE: 操嘅形式主義性格要求佳守規則即使唔情願（S:249：否則恐慌假身份穿崩嘅規則邏輯延伸到佳自己應承嘅責任）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 任務目標要清楚列出，為 M3 嘅執行做鋪墊
- CURRENT_DESIGN: action 欄明確列出三個目標（葡萄糖針劑、化學材料、傢俬）
- RATIONALE: CDL-141 原文明確列出呢三個目標，直接沿用
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 晴香「想要冇大人嘅地方」要帶出少女求存同求歸屬嘅主題
- CURRENT_DESIGN: THEME_SEEDED——晴香嘅渴望同紫音嘅「終於有落腳地方」心理（M5 payoff）互相呼應
- RATIONALE: 早期 beat 種落種子，payoff 留喺 M5
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情玩家要理解呢個決定嘅合理性（點解要犯法潛入學校）
- CURRENT_DESIGN: 直接由「補給見底」（M1 已建立）推出嚎，冇額外解釋
- RATIONALE: 因果已經喺 M1 建立，呢度只係執行決定，唔需要重複解釋
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確（修正舊版 CDL-254 錯誤引用）
- CURRENT_DESIGN: 正確引用 CDL-141；CDL-254 已核實係 E-12 衛生行動計時器，同基地無關，本批已移除呢個錯誤引用
- RATIONALE: 誠實糾正之前版本嘅引用錯誤
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 呢個決策 beat 玩家嘅能動性有限，要確認呢個係合理取捨
- CURRENT_DESIGN: 低互動對話／選擇過場
- RATIONALE: 呢個 beat 嘅重點係角色關係同任務成立，唔需要重型玩法
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低紫音同其他人嘅知情落差
- CURRENT_DESIGN: character_knowledge_delta 已寫明
- RATIONALE: 延續一致嘅記錄方式
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查呢個 beat 有冇同 M1（紫音入隊決定）或者 M3（執行）功能重疊
- CURRENT_DESIGN: M1＝入隊本身；M2＝任務成立（決策）；M3＝執行——三者分工清楚
- RATIONALE: 冇重疊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: M2 係過渡性 beat，要短，唔可以拖慢節奏
- CURRENT_DESIGN: 單一決策場景，冇多餘鋪排
- RATIONALE: 功能單純，應該快
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀10個真正相關角度

---

## BEAT: M3
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝潛入執行；四人分工（紫音「暴躁差點破門」嘅功能喺三人版本缺席，紫音入隊後自動恢復）；美夜子暗地照住紫音（圈外新人嘅執手尾）。值得獨立存在。
- SUFFICIENCY：紫音「暴躁差點暴力破門」要有具體因果，唔可以純粹係「佳性格衝動」標籤——檢查落去：紫音係戰鬥成癮者，習慣用暴力解決阻礙（iwakura_akane.md 已確立性格），呢個反應喺「保安逼近」嘅壓力下自然出現，唔係標籤跳躍，係已確立行為模式嘅應用。

FIELDS:
- beat_function: 潛入執行；四人分工首次完整展示（紫音分工恢復，之前三人版缺席嘅功能自動補完）；美夜子暗地照住紫音
- entry_state: 四人到達學校，準備潛入
- pressure_trigger: R（REQUIRED）——保安巡邏（外部事件）；晴香肚餓咕咕聲差點引嚎保安（CDL-141：把風緊張肚子咕嚕咕嚕差點引來保安）
- participant_intentions: 美夜子＝專業潛行開路（軍方技巧）；操＝邊嫌棄灰塵邊監控閉路（確保唔被拍到）；晴香＝把風；紫音＝冇耐性，見阻礙想直接解決
- action: 美夜子（貓形）鑽入開路；操負責監控閉路電視確保唔被拍到，邊做邊嫌棄環境污糟；晴香把風，肚餓咕咕聲差點引嚎保安；保安逼近嗰刻，紫音（戰鬥成癮者，習慣用暴力解決阻礙）暴躁想直接破門／動武解決，被晴香一手拉住阻止；美夜子暗地擋喺操同危險之間（圈外新人嘅執手尾，habit #14，事後唔認）
- reaction: 保安行過冇發現；四人成功避過
- turn: N/A——呢個 beat 冇角色心理轉折，功能係展示分工同求存
- consequence: 四人成功潛入；紫音被晴香拉住呢個動作，係佳入隊後第一次被人「出手阻止」而唔係拒絕佳（呼應 M1「流浪狗」被接納嘅狀態延續）
- emotional_value_shift: 緊張（保安逼近）→ 鬆一口氣（避過）
- relationship_delta: 晴香對紫音＝第一次用行動拉住佳（唔係拒絕，係保護佳唔好衝動闖禍，延續晴香「本能救人」嘅行為模式）；美夜子對紫音＝暗地照住（圈外新人待遇，但實際有保護）
- audience_info_delta: 觀眾見到四人分工，紫音嘅衝動性格首次喺非戰鬥場景展示
- character_knowledge_delta: 紫音自己可能未察覺晴香呢個「拉住」動作背後嘅意義（單純覺得被阻止）；晴香單純出於本能反應
- setup_payoff: Payoff（恢復 CDL-141 原本四人分工，之前三人版缺席嘅功能補完）；Setup → 紫音同晴香嘅互信累積
- world_rule_exposure: N/A——本 beat 純粹角色行動展示
- gameplay_form: 潛行玩法（可玩，承 B 系列已有嘅戰鬥系統之外嘅新型互動）；潛行失手段落重置
- exit_state: 四人成功潛入校內
- next_beat_pressure: N/A——純敘事銜接入 M4
- source_obligation_trace: CDL-141（美夜子專業潛行；操監控閉路；晴香把風肚咕嚕差點引嚎保安；紫音暴躁差點暴力破門被晴香拉住——本批修正舊版誤引 CDL-254）；M:282（美夜子暗地擋喺新人同危險之間，habit #14）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 12
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 紫音「暴躁想破門」要同佳已確立性格（戰鬥成癮者、衝動）扣連，唔可以純粹係標籤
- CURRENT_DESIGN: 佳習慣用暴力解決阻礙，呢個係佳嘅既定行為模式（戰鬥成癮者嘅思維慣性），喺保安逼近嘅壓力下自然觸發
- RATIONALE: iwakura_akane.md 已確立「戰鬥帶來的寧靜——用暴力壓制」嘅 coping 模式，呢個反應係呢個模式嘅直接延伸，唔係新發明嘅標籤
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 晴香拉住紫音嗰下，要準確捕捉呢個係保護而唔係拒絕
- CURRENT_DESIGN: relationship_delta 明確標記「唔係拒絕，係保護佳唔好衝動闖禍」
- RATIONALE: 延續晴香「本能救人」嘅一致性格（同 B6 擋操嘅本能一致）；對紫音嚎講，被阻止而唔係被拒絕，係佳入隊後第一次被溫和對待嘅經驗
- RISK_TRADEOFF: 風險係 Scene 層如果畀紫音有負面反應（例如覺得被阻止好唔爽），會削弱呢個累積信任嘅意義——要留意紫音嘅反應要偏向中性／困惑，唔係反感
- DESIGN_ACTION: VERIFY（Scene 層控制紫音被拉住之後嘅反應）

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 恢復 CDL-141 原本四人分工，之前三人版缺席嘅功能要清楚標記做補完，唔係新增
- CURRENT_DESIGN: consequence 明確標記「紫音被晴香拉住」係 canon 原本分工嘅恢復
- RATIONALE: 誠實標記呢個唔係新創作，係之前因為範圍決定缺席、而家自動解決嘅缺口
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 美夜子對紫音嘅「暗地照住」要符合佳對圈外新人嘅既定態度
- CURRENT_DESIGN: 美夜子暗地擋喺操同危險之間（habit #14），事後唔認
- RATIONALE: M:282 已確立呢個行為模式，佳對未熟嘅隊友都係噤樣低調照顧
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 紫音嘅衝動性格展示要控制喺「戰鬥成癮」嘅表面層，唔可以提早揭示毒品戒斷嘅深層原因
- CURRENT_DESIGN: 本 beat 嘅衝動純粹讀做「佳性格衝動、唔耐煩」，冇連結去戒斷症狀
- RATIONALE: 延續 M1 嘅紅線（Act I 只可以輕量行為暗示），本 beat 嘅衝動係一個獨立嘅性格展示，唔係戒斷症狀
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 潛行玩法要同戰鬥系統有區別，畀玩家新嘅體驗
- CURRENT_DESIGN: 潛行玩法，失手重置段落
- RATIONALE: 呢個係 demo 入面唯一嘅非戰鬥玩法段落，值得保留做體驗多樣性
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低呢個互動對紫音嘅知情狀態
- CURRENT_DESIGN: character_knowledge_delta 寫明紫音可能未察覺呢個拉住動作背後嘅意義
- RATIONALE: 保持一致嘅知情記錄
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確，修正舊版誤引
- CURRENT_DESIGN: CDL-141 正確引用；M:282 新增引用
- RATIONALE: 誠實糾正
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情玩家要理解紫音嘅衝動行為，唔需要知道背後深層原因
- CURRENT_DESIGN: 純粹讀做性格展示（衝動、戰鬥狂），已經喺 M1 建立
- RATIONALE: 延續 M1 已建立嘅角色印象，唔需要新資訊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查紫音「暴躁想動武」會唔會同佳 M1 嘅「戰鬥狂搶尾刀」重複
- CURRENT_DESIGN: M1 係戰鬥場景入面嘅戰鬥衝動；M3 係非戰鬥場景入面嘅暴力傾向——同一性格特質喺唔同情境展示，加強一致性而唔係重複
- RATIONALE: 一個角色嘅性格特質跨場景重現，係角色一致性嘅表現，唔算功能重疊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: M3 要有緊張感（保安逼近），但唔可以拖太長
- CURRENT_DESIGN: 單一緊張事件（保安逼近→紫音衝動→晴香拉住→避過），節奏緊湊
- RATIONALE: 潛行段落唔應該太長，否則會悶
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 「被拉住而唔係被拒絕」要延續溫柔的殘酷／信任累積嘅主題材料
- CURRENT_DESIGN: THEME_SEEDED——晴香嘅保護行動係佳一貫性格嘅延伸，為紫音嘅信任累積做第二步（第一步係 M1 嘅糖）
- RATIONALE: 呢個 beat 同 M1 一齊構成紫音信任累積嘅兩步，值得標記
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀12個真正相關角度

---

## BEAT: M4
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝基地佈置完成；操跌牙（Problem：四人版「全場注意力喺晴香」嘅宣稱，要檢查喺多一個人嘅情況下仍然成立）。值得獨立存在。
- SUFFICIENCY（四人版特別檢查）：原三人版「全場注意力喺晴香，操跌牙冇人察覺」嘅因果，依家要加返紫音呢個第四個人——紫音會唔會留意到？檢查落去：紫音係戰鬥成癮者，對日常社交場面嘅興趣低（佳嘅核心渴望係戰鬥／連結，唔係觀察細節），加上佳而家忙住食緊補給嘅甜嘢（M1 戒斷後嘅生理需要延續），注意力自然落喺食物上——呢個同原本「全場注意力喺晴香」嘅宣稱唔矛盾，而且有獨立嘅因果（紫音嘅注意力唔靠「被晴香吸走」，而係靠「自己嘅生理需要」），兩條因果線並存，令「冇人察覺」呢個宣稱四人版下更加穩固（唔係淨係靠同一個原因頂住四個人）。

FIELDS:
- beat_function: 基地佈置完成；晴香想影合照（美夜子擋鏡、操避開，鬧劇）；操跌牙（全場注意力分散，冇人察覺）
- entry_state: 四人潛入成功，開始搬傢俬佈置
- pressure_trigger: R（REQUIRED，承 M1：魔法過度消耗嘅延遲身體代價）
- participant_intentions: 四人＝佈置據點；晴香＝想影合照留念；美夜子＝唔想被拍（CDL-125 擋鏡習慣）；操＝避開鏡頭（影相恐懼起點，S:321）；紫音＝食緊補給嘅甜嘢，冇特別參與
- action: 四人搬好傢俬；晴香帶嚎嘅甜甜圈同煉乳派畀大家；晴香要影合照——美夜子用手擋鏡頭，操避開，得晴香一個人喺度 High，追住佳哋；紫音坐喺一邊食緊甜嘢，冇理合照呢件事；全場注意力分散（晴香嘅鬧劇、紫音嘅食嘢）嗰刻，操退到邊，咬一啖甜嘢，一隻後排牙跌出嚎，即刻收埋，強忍扮正常
- reaction: 冇人察覺操跌牙
- turn: N/A——操嘅收埋動作延續佳一貫嘅「唔露破綻」coping，呢個 beat 冇心理轉折，功能係埋下牙嘅秘密
- consequence: 基地佈置完成；操擁有一個其他人都唔知嘅秘密（比隊友多知道一件事，觀眾獨知）
- emotional_value_shift: 暖峰（同一啖入面有痛，Tender Cruelty）
- relationship_delta: 四人共同經歷呢場荒謬嘅佈置／合照鬧劇，化學反應累積
- audience_info_delta: 觀眾獨知操跌牙；觀眾見到紫音對社交場面嘅低興趣，進一步確認佳嘅性格（戰鬥狂，唔多理日常社交）
- character_knowledge_delta: 操知＋收埋；晴香、美夜子、紫音都唔知
- setup_payoff: Setup → M5（合照最終完成嘅對比）；Setup → 完整版 Act II Stage 1／2a（REVALIDATE，demo 偏離，已記錄）
- world_rule_exposure: N/A——本 beat 冇新世界規則展示
- gameplay_form: 佈置／合照互動（玩家操作晴香搞合照）
- exit_state: 基地佈置完成；操嘅秘密已埋下
- next_beat_pressure: O（暖收束，demo 尾聲）
- source_obligation_trace: CDL-141（搬運佈置、荒謬生存→化學反應）；S:321（操影相恐懼起點）；CDL-125（美夜子擋鏡頭）；Brief:7636-7639（甜品局悄悄掉牙、旁人不覺、強忍扮正常）；11:610（身體代價累積原則）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 12
### ANGLE: Action-to-Consequence Sufficiency
- DESIGN_REQUIREMENT: 「全場冇人察覺操跌牙」呢個宣稱，依家四個人在場，要檢查真係冇人會留意到，唔可以預設成立
- CURRENT_DESIGN: 兩條獨立因果線分散晒注意力——晴香嘅合照鬧劇吸走美夜子／操（避鏡）嘅注意力；紫音因為自己嘅生理需要（食緊嘢）而冇理會合照／操
- RATIONALE: 原本三人版單靠「全場注意力喺晴香」一條因果頂住，而家加多一個人要有獨立理由，唔可以假設紫音自動被同一個原因分散注意力
- RISK_TRADEOFF: 風險係如果 Scene 層畫面太強調紫音食緊嘢，反而令觀眾覺得佳有留意周圍（因為專心食嘢可以讀成「唔理」亦可以讀成「埋頭」），要控制畫面語言令佳嘅唔理解讀清晰
- DESIGN_ACTION: VERIFY（Scene 層要確保紫音嘅「唔理」畫面清晰，唔會讀成「暗中留意」）

### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操跌牙收埋嘅行為要延續佳一貫嘅「維持表演」coping（S:205）
- CURRENT_DESIGN: 操即刻收埋、強忍扮正常，冇任何戲劇化反應
- RATIONALE: 符合「不讓任何人看到真實的自己」嘅既定性格
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 四人嘅化學反應要喺呢場荒謬嘅佈置／合照鬧劇中累積
- CURRENT_DESIGN: relationship_delta 寫明「共同經歷鬧劇，化學反應累積」
- RATIONALE: CDL-141「荒謬生存行動→初步化學反應」嘅原文精神，四人版同樣適用
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 合照失敗要為 M5 嘅完成做對比鋪墊
- CURRENT_DESIGN: Setup → M5（合照最終完成）
- RATIONALE: 兩次合照嘗試（失敗→完成）形成情感弧線
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 牙嘅因果偏離要老實記錄，唔可以假裝係 canon 原文
- CURRENT_DESIGN: Brief:7636-7639 支撐甜品局掉牙畫面；完整版 Act II Stage 1/2a 偏離已記錄 REVALIDATE
- RATIONALE: 延續之前輪次已經做過嘅誠實標記
- RISK_TRADEOFF: 完整版需要 REVALIDATE（已知，記錄喺此）
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 牙嘅因果（魔法消耗代價）唔可以被觀眾讀出，只可以讀成「操有啲古怪」
- CURRENT_DESIGN: action 欄冇任何角色或者旁白提及代價，純粹視覺事件
- RATIONALE: 延續 Act I 隱形揭示原則
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 「暖峰中嘅痛」要符合 Tender Cruelty 信條
- CURRENT_DESIGN: THEME_EXPLICIT——暖嘅高峰（合照鬧劇、分甜品）同操嘅秘密痛楚同時發生
- RATIONALE: Brief:4846「甜係真的，痛也係真的，而且就係同一口裡面」直接對應
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要獨知操跌牙，呢個知情落差要清晰
- CURRENT_DESIGN: audience_info_delta 明確標記「觀眾獨知」
- RATIONALE: 呢個係全 demo 最重要嘅觀眾獨知時刻之一
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 四人知情狀態要準確（操知，其餘三人唔知）
- CURRENT_DESIGN: character_knowledge_delta 已更新做四人版
- RATIONALE: 保持一致記錄
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 合照互動要畀玩家一個輕鬆嘅操作，對比前面幾場戰鬥
- CURRENT_DESIGN: 玩家操作晴香搞合照（失敗嘅鬧劇版本）
- RATIONALE: 呢個 beat 應該係 demo 入面最輕鬆嘅玩法段落，做節奏對比
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查操避鏡（M4）會唔會同 B8 操避鏡頭（直播後）重複
- CURRENT_DESIGN: B8＝避開公開直播鏡頭（社會性迴避，怕被公眾注視）；M4＝避開私人合照（親密關係入面嘅迴避，影相恐懼起點）——意義層次唔同
- RATIONALE: 兩次避鏡代表唔同嘅迴避對象（公眾 vs 親密關係），唔算重複，反而係遞進（由迴避公眾到迴避親近嘅人）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: M4 係 demo 嘅情感高峰，要有足夠嘅暖度先落去跌牙嘅反差
- CURRENT_DESIGN: 佈置→合照鬧劇（暖峰）→跌牙（反差）
- RATIONALE: 暖度要夠先令反差有效
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀12個真正相關角度

---

## BEAT: M5
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝真暖收尾（牙唔係最後畫面）；四人（三人原版）正式變成有共同秘密嘅夥伴；對紫音嚎講呢個收尾有額外意義（終於有落腳地方）。值得獨立存在。

FIELDS:
- beat_function: 真暖收尾（牙唔係最後畫面）；四人正式變成有共同秘密嘅夥伴；紫音第一次有落腳地方嘅意義兌現
- entry_state: 操跌牙已經收埋（M4），冇人知；基地佈置完成
- pressure_trigger: O（OPTIONAL——暖收束，唔需要外部觸發）
- participant_intentions: 四人＝想留喺呢個剛建立嘅地方；晴香＝想完成合照
- action: 晴香硬拉操入鏡完成合照（M4 失敗嘅重試）；操閂住嘴入咗相（收埋緊牙嘅缺口）；四人分食甜嘢，冇人主動講要走
- reaction: 四人氣氛暖，紫音第一次感受到「有一個地方容身」嘅感覺（唔再係自己一個喺夜區流浪搶怪）
- turn: N/A——呢個 beat 係收束，唔係轉折；情感兌現喺 consequence
- consequence: 四人正式變成「有共同秘密的夥伴」（CDL-141 原文用語）；紫音嘅渴望連結（iwakura_akane.md L127：承認渴望連結——「我唔想再一個人食飯」）喺呢度首次被（部分）滿足
- emotional_value_shift: 孤單（紫音嘅夜區流浪／三人嘅未熟）→ 屬於（四人嘅暖；同時觀眾知道有一樣嘢冇人知——操嘅秘密）
- relationship_delta: 四人夥伴關係正式確立（三人升格為四人，紫音正式融入，雖然仍帶住未揭露嘅秘密——戒斷症狀、操嘅牙）
- audience_info_delta: 觀眾已知嘅兩個秘密（操嘅牙、紫音嘅真實情況）喺呢個暖畫面底下並存，呢個落差係 demo 最後嘅「少少不安」收尾
- character_knowledge_delta: 四人表面上冇秘密，但觀眾知道有兩個；呢個知情落差延續到 demo 結束
- setup_payoff: Payoff（M2 嘅「冇大人嘅地方」渴望、M1 紫音嘅保護慾／連結渴望、M4 嘅合照失敗）全部喺呢度兌現；Setup → 基地要撐到 Act II E-09（完整版，P15，demo 唔收）
- world_rule_exposure: N/A — 純情感收束 beat，冇任何世界規則展示或示範
- gameplay_form: 過場／結尾畫面（低互動，純粹情感收束）
- exit_state: demo 結束，四人喺基地暖暖咁企埋一齊
- next_beat_pressure: N/A——demo 結尾
- source_obligation_trace: CDL-141（「戰鬥搭檔」升格「有共同秘密的夥伴」；Brief:6414-6418「秘密基地建好了」）；iwakura_akane.md L127（紫音承認渴望連結，「我唔想再一個人食飯」）；P15（基地要撐到 Act II E-09，demo 唔收 payoff，只標記）
- downstream_references:
  - Scene Reference: 「秘密基地建好了。後來有人再也沒有回來。」（Brief:6414-6418，後半句屬完整版 payoff，demo 唔用）
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 10
### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 紫音嘅「終於有落腳地方」要有具體 canon 錨點，唔可以係我老作嘅溫情
- CURRENT_DESIGN: 直接引用 iwakura_akane.md L127「承認渴望連結——我唔想再一個人食飯」
- RATIONALE: canon 已經明確寫明紫音渴望連結嘅具體表達方式（唔想一個人食飯），而呢個 beat 正正係四人一齊食嘢——因果同畫面直接對應，唔係抽象嘅「溫暖」
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 呢個 beat 要兌現之前幾個 beat 種落嘅渴望（M2 晴香、M1 紫音、M4 合照）
- CURRENT_DESIGN: setup_payoff 欄逐一列出兌現嘅線索
- RATIONALE: 清晰嘅 payoff 清單令呢個收尾嘅情感重量有根據，唔係空泛
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: demo 最後嘅「少少不安」要落喺呢度——觀眾知道嘅秘密同畫面嘅暖之間嘅落差
- CURRENT_DESIGN: audience_info_delta 明確標記「兩個秘密喺暖畫面底下並存」
- RATIONALE: 呢個落差正正係 D-13「好暖＋少少不安」整體調性喺 demo 結尾嘅最終體現
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 四人夥伴關係要清楚標記係「正式確立」，同之前幾個 beat 嘅「未熟」做對比
- CURRENT_DESIGN: relationship_delta 寫明「正式確立」
- RATIONALE: 呢個係整個 M 系列嘅關係弧線終點
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 「秘密基地建好了」呢句原文有下半句（後來有人再也沒有回來），要確保 demo 唔用呢個完整版 payoff
- CURRENT_DESIGN: downstream_references 明確標記後半句屬完整版，demo 唔用
- RATIONALE: 誠實分割一句原文嘅可用部分同唔可用部分
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 基地要撐到 Act II E-09，demo 結尾唔可以暗示基地會即刻被摧毀或者完結
- CURRENT_DESIGN: setup_payoff 標記 P15，demo 唔收 payoff，純粹標記
- RATIONALE: 避免 demo 結尾意外暗示基地嘅命運
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低 demo 結束時嘅知情狀態總覽
- CURRENT_DESIGN: character_knowledge_delta 總結「表面冇秘密，觀眾知兩個」
- RATIONALE: 作為 demo 結尾嘅知情狀態總結，方便日後銜接
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: demo 最後一個 beat 嘅互動程度要同情感收束配合，唔可以太重
- CURRENT_DESIGN: 低互動過場
- RATIONALE: 結尾應該讓玩家純粹感受情感收束，唔需要額外操作
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 M5 嘅暖同 B8 嘅暖（有錯位嘅暖）會唔會重複
- CURRENT_DESIGN: 之前已經做過區分——B8＝有錯位嘅暖（路人 vs 操）；M5＝真暖（四人共同秘密、紫音歸屬）
- RATIONALE: 延續之前輪次嘅區分，兩種暖嘅來源同性質唔同
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: M5 作為 demo 最後一個 beat，要有適當嘅收尾長度，唔可以太倉促或者太拖
- CURRENT_DESIGN: 短、純粹情感畫面（合照完成、分食甜嘢）
- RATIONALE: demo 結尾應該簡潔有力，唔需要額外鋪排
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀10個真正相關角度

---

## SEMANTIC GATE 結果
M2：純過渡性 beat，全部角度 KEEP，冇阻斷。
M3：紫音「暴躁想破門」已經用 Design Sufficiency Check 核實扣連已確立性格（戰鬥成癮者嘅暴力解決傾向），唔係標籤；美夜子暗地照住紫音嘅反應標 VERIFY（Scene 層控制），非阻斷。
M4：四人版「全場冇人察覺操跌牙」呢個宣稱，已經用 Action-to-Consequence Sufficiency 重新檢查——紫音嘅「唔理」有獨立因果（生理需要、性格），唔係假設性延續三人版嘅邏輯，標 VERIFY（Scene 層要確保畫面清晰），非阻斷。
M5：全部角度 KEEP，收尾兌現清晰。
**結論：結構 validator 應該 PASS（見下）；語意抽查完成，核心轉折因果鏈完整，四人版嘅新增因果（紫音對各場景嘅反應）已經逐一檢查，冇靠「佳係新角色所以隨便點都得」嘅假設跳過，`DELIVERY_STATUS` 標 `DELIVERY_READY`。**
