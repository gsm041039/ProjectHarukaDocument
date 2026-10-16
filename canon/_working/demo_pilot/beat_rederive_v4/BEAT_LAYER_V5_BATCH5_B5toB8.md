DELIVERY_STATUS: DELIVERY_READY

<!--
BEAT_LAYER_V5 — BATCH 5：B5–B8（操中陷阱 → 戰後暖收束＋神秘身影鏡頭）升級做 BEAT_LAYER_DEEP_DESIGN mode
基底：BEAT_LAYER_V4_1.md 嘅 B5–B8；B8 整合 BATCH2 已經加嘅「神秘身影」追加元素。
0 sub-agent；0 改 skill；0 改 canon；0 新盲審。
-->

## BEAT: B5
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝操中陷阱，製造 B6 嘅致命危機；牙前兆（延遲代價）。值得獨立存在。冇靠標籤代替因果——操中陷阱嘅原因明確係佳自己嘅弱點（地面層攻擊），唔係「因為劇情需要」。

FIELDS:
- beat_function: 操中陷阱（由佳自己弱點造成）；牙前兆（延遲代價）
- entry_state: 操喺戰場上，已經出手介入
- pressure_trigger: R（REQUIRED）——外部事件：屍骸反撲，用地面層攻擊纏住操
- participant_intentions: 操＝維持優雅姿態、寧受傷唔逃（S:310：寧可承受傷害也不允許姿態狼狽）
- action: 屍骸從地面層攻擊操（操弱點，S:365：絕對不接觸地面，地面攻擊會打斷絲線系統令傀儡失控）；操唔肯狼狽閃避，下顎被擦咗一下（觀眾讀成戰傷，實為牙嘅前兆）；致命一擊逼近
- reaction: 操嘅傀儡系統受地面攻擊影響，失控邊緣
- turn: N/A——轉折留喺 B6
- consequence: 操陷入危機，操嘅弱點被曝露（但未必畀隊友留意到）
- emotional_value_shift: 優勢 → 危機
- relationship_delta: N/A——本 beat 冇關係互動
- audience_info_delta: 觀眾見操受傷（唔知同牙有關）
- character_knowledge_delta: N/A——操自己知道弱點被觸發，但冇講
- setup_payoff: Setup → 牙前兆（M4 掉牙嘅延遲代價，承接「身體代價唔應一開始最重」原則，11:610）
- world_rule_exposure: 操嘅戰鬥弱點（地面層攻擊）首次示範
- gameplay_form: 戰鬥 NPC 行為（操陷入危機，玩家見到但未操控）
- exit_state: 操危急，致命一擊逼近
- next_beat_pressure: R——致命一擊即將落下，逼出 B6 晴香嘅反應
- source_obligation_trace: S:365（操絕對不接觸地面，弱點：地面層攻擊）；S:310（寧可承受傷害也不允許姿態狼狽——戰鬥潔癖）；11:610（身體代價不應一開始就最重，支撐牙前兆嘅輕量程度）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 10
### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 操中陷阱嘅原因要由佳自己嘅弱點造成，唔可以係「為咗劇情要危急」而強行安排
- CURRENT_DESIGN: 地面層攻擊正正係 canon 已確立嘅弱點（S:365），操自己嘅性格（寧傷唔狼狽，S:310）令佳唔肯用狼狽嘅方式避開
- RATIONALE: 用角色自己嘅弱點同性格造成危機，比起「逼佳落陷阱」更有說服力，亦符合 Design Sufficiency 要求嘅行動因果鏈
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 操嘅「寧傷唔狼狽」要同佳嘅 coping（形式主義、唔露破綻）一致
- CURRENT_DESIGN: 操唔肯用狼狽嘅方式閃避，寧願受傷
- RATIONALE: S:310、S:205（唔露破綻）都支撐呢個行為邏輯——對操嚎講，「狼狽」本身就係一種破綻
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 牙前兆要夠輕，唔可以一開始就太重
- CURRENT_DESIGN: 下顎擦傷，觀眾讀成戰傷
- RATIONALE: 11:610 要求身體代價累積，呢個係全 demo 操第一個身體代價訊號，強度要最低
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 操嘅弱點（地面層攻擊）要準確示範
- CURRENT_DESIGN: 屍骸用地面層攻擊纏住操，打斷絲線系統
- RATIONALE: S:365 明確定義呢個弱點嘅機制
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要感到緊張但唔可以提早知道「牙」嘅因果
- CURRENT_DESIGN: 擦傷讀成普通戰傷，冇任何暗示
- RATIONALE: 牙嘅因果（魔法消耗代價）要留到 M4 先揭示，呢度只係埋咗一粒種
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 操自己知道弱點，但唔會講出嚎
- CURRENT_DESIGN: character_knowledge_delta 標 N/A 加註：操知但冇講
- RATIONALE: 符合操唔露破綻嘅性格
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 S:365、S:310、11:610（本輪親自重新核實原文）
- RATIONALE: 核對無誤
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 B5 嘅危機會唔會同 B2（晴香危機）重複
- CURRENT_DESIGN: B2 係晴香血糖危機（資源耗盡型）；B5 係操地面陷阱（性格弱點型）——危機嘅成因唔同
- RATIONALE: 兩種危機用唔同機制造成，唔算重複
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B5 要由 B4 嘅「操登場」推進到「操危急」，製造張力
- CURRENT_DESIGN: 短、快，由優勢直接轉做危機
- RATIONALE: 呢個 beat 功能單純，應該快
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 操中陷阱要有可視覺化嘅畫面（傀儡失控、地面攻擊）
- CURRENT_DESIGN: 傀儡系統受地面攻擊影響，視覺上可以做失控嘅畫面
- RATIONALE: 純動作場面，唔靠對白
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀10個真正相關角度

---

## BEAT: B6
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- 本 beat 已經喺之前輪次做過一次完整示範（B6_FULL_DEMO.md，smoke test），本批直接攞返嚎用，只係整合落正式 BATCH 系列，內容冇改變。

FIELDS:
- beat_function: 操嘅轉折觸發點；晴香天真善意建隊（P-A04 plant）；街戰嘅情感高峰
- entry_state: 操被地面層攻擊纏住（S:365 弱點），唔肯狼狽閃避（S:310），致命一擊逼近；晴香連結增幅中但唔屬於操隊友，系統冇為佳開戰術掩護視窗
- pressure_trigger: R（REQUIRED）。外部觸發＝屍骸對操嘅致命一擊；consequence-driven-progression 要求外部 cost signal 先逼出反應——致命一擊係物理外部事件，唔係晴香「突然覺得要救人」
- participant_intentions: 晴香＝本能衝前（冇計算，H:83 偏鬆風險評估）；操＝維持優雅姿態、寧受傷唔逃（S:310，佳自己唔想被救）；美夜子＝旁觀，佳嘅魔法防護已經用喺 B2，呢刻冇再出手（刻意）
- action: 玩家冇得到戰術視窗（操未入隊，GP:30 視窗只對隊友），玩家按嘅係閃避鍵；晴香反而用身體撲出去擋咗致命一擊，滿身污糟
- reaction: 操震驚（佳冇要求、冇預期被救，S:205 唔露破綻嘅人突然被人用身體撞開呢個「破綻」）；晴香笑住問操條裙有冇整污糟（CDL-050 原句）
- turn: 操第一次感到「有人在乎『佳』多過戰果」（S:251；由「義務式戰鬥」轉做「因被在乎而留低」嘅起點）
- consequence: 操嘅完美防線被一個「未被告知的接觸」（S:376 量尺強迫觸發條件）撞開；呢個 beat 本身唔直接導致入隊（入隊喺 B7），但建立咗操肯留低嘅情感理由
- emotional_value_shift: 危機（操可能死）→ 震驚的溫暖（操被在乎、晴香冇得到任何回報就去擋）
- relationship_delta: 操對晴香：由陌生人→「呢個人唔顧自己安全去擋我」（忠誠線起點，同 B2 美夜子忠誠線第一步對照，但主體換成晴香）；呢個 delta 喺 B6 只係觸發，完整兌現喺 B7 入隊
- audience_info_delta: 觀眾見到晴香嘅行動模式（唔計算、本能救人）同操嘅行為模式（執著儀態、寧傷唔狼狽）正面碰撞；觀眾未必察覺「未被告知的接觸」呢個操專屬觸發條件（呢個係設計層資訊，唔係觀眾層資訊）
- character_knowledge_delta: 操知道咗晴香為佳擋（佳清醒，冇眼罩或背向畫面阻擋）；晴香唔知操嘅「量尺」習慣，單純覺得操講嘢惡但人唔差
- setup_payoff: Setup → B7（操答應入隊）；Setup → B8（操私下整理被觸碰位，只觀眾見）；呼應 CDL-050（操入隊觸發原句）
- world_rule_exposure: N/A — 本 beat 純粹角色行動對撞，冇新增或示範世界規則
- gameplay_form: 一次性按鍵互動（玩家按閃避鍵，觸發晴香嘅「身體擋」動畫，非戰術視窗系統、無失敗分支）；刻意唔用戰術視窗，因為視窗嘅「只對隊友」規則（GP:30）本身成為呢個 beat 嘅主題載體——晴香喺系統之外當操係隊友
- exit_state: 操站起身，表面鎮定但內在已鬆動；晴香冇意識到自己剛做咗一件對操嚎講好重大嘅事
- next_beat_pressure: 操嘅震驚需要一個出口（B7 嘅傲嬌入隊）；呢個 beat 冇獨立 cost signal 帶入下一個，次一個 beat 嘅觸發係「戰鬥未完」
- source_obligation_trace: O4（CDL-050「不顧儀態用身體擋攻擊，笑著問條裙有無整污糟」）；O5（操轉折＝S:251）；O16（晴香天真善意建隊，SRC_1-C37／FM:20 P-A04）；P20（操量尺強迫觸發條件＝「未被告知的接觸」，S:376）
- downstream_references:
  - Scene Reference: 「晴香不顧儀態用身體擋攻擊，笑著問『條裙有無整污糟』」（CDL-050 原句）
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 13
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操喺 Act I 嘅弧線起點係「義務式戰鬥、形式主義強迫」，要有一個具體時刻開始偏離呢個起點
- CURRENT_DESIGN: B6 用「被未告知接觸」（S:376 操嘅量尺強迫觸發條件）做呢個起點
- RATIONALE: 操嘅 coping（形式主義、唔露破綻）決定咗佳唔會主動卸防；用一個「被迫發生」嘅身體事件打開缺口，先符合佳自己唔會自願行動嘅設定
- RISK_TRADEOFF: 風險係觀眾未必讀到「未被告知的接觸」對操嘅特殊意義，呢個係 Scene 層先可見嘅微行為
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 操同晴香範圍開始時完全未相識，要喺呢場戰鬥入面由零建立到「操肯入隊」嘅關係基礎
- CURRENT_DESIGN: B6＝單向行動（晴香擋操），冇對白交流基礎；關係 delta 完全靠行動本身承載
- RATIONALE: 操嘅角色設定（極少說話、節能模式，S:309）令佳唔會用語言回應情感衝擊；用行動對行動去推進關係
- RISK_TRADEOFF: 風險係單靠行動，觀眾可能唔讀出呢個係關係轉捩點，要靠 B7 嘅台詞同 B8 嘅微行為補強
- DESIGN_ACTION: VERIFY（Scene 層要驗證行動本身嘅視覺語言夠唔夠清楚）

### ANGLE: Structural Beat Function
- DESIGN_REQUIREMENT: 呢個 beat 要喺「操入隊」嘅因果鏈上做轉折點，唔可以只係一個戰鬥動作
- CURRENT_DESIGN: beat_function 明寫「操嘅轉折觸發點」；turn 欄寫明「第一次感到有人在乎」
- RATIONALE: 將「轉折」獨立標出，令下一層（Scene）知道呢個時刻嘅戲劇功能
- RISK_TRADEOFF: 若 Scene 層冇承接呢個轉折，beat 層嘅功能就會落空
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: CDL-050 原句（擋＋問裙）係已鎖嘅 Scene Reference，要確保 beat 層冇重寫呢句嘅功能
- CURRENT_DESIGN: setup_payoff 欄列明 → B7（入隊）、→ B8（操私下整理）、呼應 CDL-050
- RATIONALE: 分開「呢個 beat 做乜」同「呢個 beat 為乜鋪路」，令完整性 gate 嘅 setup/payoff 角度有實質內容核對
- RISK_TRADEOFF: 若 B7／B8 日後被改，呢度嘅 setup 清單要重掃
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: demo 面向零前情玩家，要確保呢個 beat 冇要求玩家已知操嘅背景先睇得明
- CURRENT_DESIGN: audience_info_delta 寫明「觀眾未必察覺『未被告知的接觸』」，並明確標呢個係設計層資訊唔係觀眾層要求
- RATIONALE: 分清「設計師知道嘅深層原因」同「玩家需要知道嘅表面因果」——玩家只需要睇到「晴香救咗操、操好似好介意但冇講」
- RISK_TRADEOFF: 風險係如果 Scene 層畫蛇添足解釋咗操嘅量尺機制，會過早揭示 Act I 唔應該露嘅身體崩壞細節
- DESIGN_ACTION: VERIFY

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: GP:30/GP:52 定義戰術掩護視窗只對隊友開；呢個 beat 要符合玩法系統邊界
- CURRENT_DESIGN: 刻意唔用戰術視窗系統，改用一次性按鍵互動
- RATIONALE: 直接解決咗「掩護視窗只對隊友，操未入隊」衝突——將呢個系統限制轉做主題語言：玩家被逼經歷「規則話唔係隊友」，但晴香嘅行動違反規則
- RISK_TRADEOFF: 代價係呢個 beat 冇用到核心 loop（戰術視窗）
- DESIGN_ACTION: NEEDS_AUTHOR_DECISION（demo 核心 loop 教學不足嘅問題已經喺 B2 用另一種方式處理；呢度維持原決定，唔重開）

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 呢個 beat 要有可視覺化嘅行為載體，唔淨係靠對白／內心先成立
- CURRENT_DESIGN: 核心行動（身體擋）同反應（操震驚）都係純動作／表情，冇依賴對白
- RATIONALE: 主題要求用行動承載碰撞
- RISK_TRADEOFF: 操「震驚」嘅表演幅度唔可以太大（S:309 操嘅節能模式）
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B6 喺連續戰鬥 beat 之中，要確保唔同其他擋／救動作重複
- CURRENT_DESIGN: B6 係全場唯一一次「晴香用身體擋人」；B2 係美夜子擋晴香，B4 係操順手救路人
- RATIONALE: 刻意分配唔同角色做「擋」嘅動作，避免同一個手法重複
- RISK_TRADEOFF: 風險係三個相似手法仍可能令觀眾覺得「老係都係救人」
- DESIGN_ACTION: VERIFY

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 B6 有冇同 B2、B4 功能重疊
- CURRENT_DESIGN: participant_intentions 欄明寫「美夜子呢刻冇再出手（刻意）」
- RATIONALE: 如果美夜子呢刻又出手，B6 嘅「晴香獨力救操」焦點會被稀釋
- RISK_TRADEOFF: 美夜子喺呢個 beat 嘅存在感短暫降低（但 B8 有微反應補返）
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 問點解一定要用「身體擋」呢種形式令操入隊
- CURRENT_DESIGN: 用「未被告知的接觸」（操專屬觸發條件）做形式
- RATIONALE: 換成純對白驅動，操嘅轉折會失去「身體代價即角色語言」嘅全劇美學（playbook:604）
- RISK_TRADEOFF: 失去嘅係一個更簡單嘅版本
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 操「寧受傷唔狼狽」同「絕不露破綻」嘅 coping，會點樣被撞擊
- CURRENT_DESIGN: entry_state 明寫操「唔肯狼狽閃避」
- RATIONALE: 操嘅 coping 唔可以喺呢個 beat 被講道理拆除——必須係物理上嚎得切
- RISK_TRADEOFF: 若 Scene 層畫面畀操反應時間，佳嘅性格邏輯會要求佳拒絕
- DESIGN_ACTION: VERIFY

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: CDL-050 原句已鎖，B6 唔可以改動佳嘅字面功能
- CURRENT_DESIGN: action／reaction 欄直接保留「擋攻擊」＋「問條裙」嘅組合
- RATIONALE: 保留呢句令 Beat 層同 Scene 層之間有清晰嘅銜接點
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Writing Execution/Draftability
- DESIGN_REQUIREMENT: 「未被告知的接觸」呢個操專屬心理機制，要喺冇對白解釋嘅情況下寫得出嚎
- CURRENT_DESIGN: Beat 層只標記呢個觸發條件存在，具體點樣用畫面表達留畀 Scene 層
- RATIONALE: Beat 層嘅角色就係標記「呢個轉折需要乜」，唔係解決「點寫」
- RISK_TRADEOFF: 風險係 Scene 層如果接手嘅人冇讀到呢個 rationale，可能寫唔出操嘅微妙反應
- DESIGN_ACTION: VERIFY

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀13個真正相關角度（延續之前嘅 smoke test 示範）

---

## BEAT: B7
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝操傲嬌答應入隊（B6 轉折嘅兌現）；屍骸態度示範一半（正面消散）。值得獨立存在。現有設計（B6 震驚→B7 直接傲嬌答應）**唔足以**產生宣稱嘅角色轉變——由「極度戒備、獨行」到「答應留低」之間缺一步因果，同晴香（N3）、紫音（M1）之前已經修正過嘅同類問題一樣，呢度之前只係記低缺口、冇真正修正，本輪補做。
- **否決原機制**：「震驚→即刻傲嬌答應」靠「傲嬌」呢個性格標籤去跳過中間嘅心理步驟，撞 Design Sufficiency 嘅「唔可以靠標籤代替因果」要求。
- **候選 C1：晴香嘅「唔計算」本身就係打開操心防嘅鑰匙，加一拍操想拒絕但講唔出口嘅猶豫。** 操核心恐懼係「被發現係假嘅就會被拋棄」（S:60），佳嘅生存方式係「表演＋被見證」換取存在感（GT:66）——即係話佳一直活喺一個交易邏輯（有用先值得留低）。晴香擋咗佳一次，冇要求任何回報，甚至繼續笑住問裙污糟未——完全唔係交易邏輯。操張開口想講返平時嗰套（多謝，或者拒絕），但發現自己講唔出口，因為晴香嘅反應令佳一時間搵唔到平時用慣嘅應對劇本——跟住操先用傲嬌掩飾呢個失語嘅空隙。
- **候選 C2：操唔喺 B7 正式入隊，改做「暫時唔反對」，真正入隊延後到 M 系列先完成（類似紫音嘅漸進式跟隨）。** 操極度戒備嘅性格，一場戰鬥內由陌生到入隊，本身對佳嚎講風險太高；改為 B7 淨係答應「暫時指導」（唔算正式入隊），真正嘅信任要到基地戲（M4，操喺四人／三人面前露出跌牙嗰刻嘅脆弱）先完成。
- **比較：** C1 嘅優點係直接解答「點解快」——答案唔係「操忽然變開放」，而係晴香嘅行為本身違反操一直賴以生存嘅交易邏輯，令佳一時間冇劇本可用，呢個因果紮實，亦唔改動現有嘅 beat 結構（仍然係 B7 內完成）。缺點係要畀多一拍「操想講嘢但講唔出口」嘅表演空間。C2 嘅優點係更忠於操嘅極度戒備性格（一場戰鬥唔會令佳真係信人）；缺點係改動結構——B7 嘅「正式入隊」宣稱要拆走，入隊嘅完成時刻要搬去 M4，呢個會影響 M4 嘅戲劇重量分配（M4 本身已經有操跌牙嗰個重場面，再疊埋「正式入隊時刻」可能過載）。
- **採用 C1。** 理由：C2 嘅代價（搬動入隊時刻、令 M4 過載）比 C1 嘅代價（加一拍表演）大；C1 用嘅因果機制（晴香嘅行為打破操嘅交易邏輯）亦同佳已確立嘅核心恐懼直接扣連，唔係新發明嘅心理。
- SUFFICIENCY（跟 C1 重新檢查）：動機成立——操唔係「忽然信人」，而係一時間搵唔到應對劇本（具體、可追蹤嘅心理機制，唔係標籤）；觀眾理解成立——晴香擋操、笑問裙污糟（B6 已畀觀眾睇過）已經足夠解釋「呢個人唔同慣常」，唔需要觀眾知道操嘅交易邏輯細節；行動到後果成立——「操講唔出口」直接解釋咗「傲嬌」呢個表達方式嘅起源（掩飾失語，唔係掩飾深思熟慮嘅決定）；玩家能動性——呢個 beat 玩家冇操作，純粹觀察，唔涉及呢條檢查。

FIELDS:
- beat_function: 操傲嬌答應入隊（B6 轉折嘅兌現）；屍骸態度示範一半（正面消散）
- entry_state: 操喺 B6 被晴香擋過致命一擊，內心已鬆動但表面鎮定
- pressure_trigger: N（COST_SIGNAL_NOT_APPLICABLE——情感兌現，唔係外部事件觸發）
- participant_intentions: 操＝想用返平時慣用嘅應對劇本（多謝或者拒絕），但搵唔到；三人＝合力收尾戰鬥
- action: 操張開口想講返平時嗰套，但發現自己講唔出口——晴香冇要求回報、仲繼續笑住問裙污糟未，完全唔係操慣用嘅「表演換存在感」交易邏輯，令佳一時間冇劇本可用；操用傲嬌掩飾呢個失語嘅空隙，答應「暫時指導」；三人收尾；屍骸倒下前一拍停止抵抗、似有人樣，然後消散；UI Likes 爆升
- reaction: 晴香高興接受操嘅答應（傲嬌包裝唔影響佳嘅理解，佳冇察覺操剛剛失語咗一拍）
- turn: 操由「震驚」（B6）轉做「搵唔到慣用劇本」（失語）再轉做「用傲嬌掩飾空隙」——「答應」本身唔係一個深思熟慮嘅決定，而係操慣用嘅交易邏輯被晴香嘅唔計算打破之後、冇現成應對方式嘅即時反應
- consequence: 操正式入隊（三人組成）；屍骸消散，戰鬥結束
- emotional_value_shift: 震驚的溫暖 → 傲嬌掩飾下嘅接納
- relationship_delta: 操對三人＝正式隊友（表面不情願，底層已經被打動）
- audience_info_delta: 觀眾見到操「傲嬌」嘅語言模式，可能讀出「佳其實想留低」
- character_knowledge_delta: 晴香／美夜子唔知操內心嘅鬆動程度，只見到表面傲嬌
- setup_payoff: Payoff（B6 嘅轉折兌現）；Setup → 屍骸態度反面（奪舍）延後 REVALIDATE
- world_rule_exposure: 屍骸態度選擇示範（正面消散，CDL-033；反面奪舍延後）
- gameplay_form: 戰鬥結算 UI（Likes 爆升）
- exit_state: 操正式入隊，戰鬥結束
- next_beat_pressure: N/A——純敘事銜接入 B8 戰後
- source_obligation_trace: CDL-050（傲嬌入隊語句）；CDL-033（屍骸態度對比，正面消散示範）；S:251（第一次感受到有人在乎佳而非戰果）；S:60（核心恐懼：「被發現係假嘅就會被拋棄」）；GT:66（操想要被見證、靠表演同規則確定性換取存在感）；S:205（維持表演，不讓任何人看到真實的自己）
- downstream_references:
  - Scene Reference: 「暫時指導庶民」（CDL-050 候選台詞）
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 10
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操嘅答應要同佳嘅性格一致，速度要有具體因果，唔淨係靠「傲嬌」呢個標籤
- CURRENT_DESIGN: 操張開口想用返平時嘅應對劇本（多謝／拒絕），但搵唔到，因為晴香嘅唔計算完全唔喺佳慣用嘅「表演換存在感」交易邏輯入面——操用傲嬌掩飾呢個失語空隙
- RATIONALE: 呢個係本輪修正（原本撤銷嘅缺口）：由「傲嬌＝直接答應」改為「傲嬌＝掩飾一時搵唔到劇本嘅失語」，令「快」有一個可追蹤嘅具體機制（S:60 核心恐懼、GT:66 交易邏輯），唔再係標籤跳躍
- RISK_TRADEOFF: 風險係 Scene 層要畀呢個「搵唔到劇本」嘅失語一拍足夠嘅停留時間（哪怕好短），否則呢個設計會跟返舊版一樣顯得太快；操嘅表演幅度要克制（S:309 節能模式），唔可以表現得太明顯
- DESIGN_ACTION: KEEP（已修正，唔再係 VERIFY／已知缺口）

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 操正式入隊，要清楚標記呢個關係嘅表裡落差
- CURRENT_DESIGN: relationship_delta 寫明「表面不情願，底層已經被打動」
- RATIONALE: 呢個落差係操角色嘅核心設計（傲嬌），要保留
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 屍骸態度示範要符合「兩種對比」原定要求（CDL-033），但 demo 只做一半
- CURRENT_DESIGN: 只做正面消散，反面奪舍延後 REVALIDATE
- RATIONALE: 之前質疑輪已經決定呢個取捨（避免 demo 過載），本批沿用
- RISK_TRADEOFF: 只做一半＝只交付氣氛，未完全交付主題（之前盲審已經指出），記錄但唔重做
- DESIGN_ACTION: KEEP（已知限制，記錄喺此）

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: B6 嘅轉折要有兌現
- CURRENT_DESIGN: consequence 明寫「操正式入隊」
- RATIONALE: 直接兌現 B6 種落嘅種子
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 操入隊要帶出「態度 vs 命運」主題
- CURRENT_DESIGN: THEME_EXPLICIT——操嘅傲嬌（表面抗拒命運式嘅義務）同內心已經被晴香嘅態度打動，兩者並存
- RATIONALE: 操嘅「暫時指導」語言本身就係態度對抗命運嘅表現（唔願意承認自己已經被改變）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要感受到「偽亮色高峰」，但屍骸消散嗰下要有少少唔對路
- CURRENT_DESIGN: UI Likes 爆升嘅歡樂同屍骸消散前「似有人樣」嘅一拍並存
- RATIONALE: 偽亮色高峰同少少不安種子同時存在，符合整體調性
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 CDL-050、CDL-033、S:251
- RATIONALE: 核對無誤
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查操答應入隊會唔會同紫音入隊（M1）喺表面模式上重複，令玩家覺得「呢個demo所有人都答應好快」
- CURRENT_DESIGN: 兩次表面都係「快速接納」，但而家兩個因果機制已經分別補完，唔再係標籤：操係「交易邏輯被打破→一時失語→傲嬌掩飾」；紫音係「戰鬥成癮者嘅求存反射被一個唔求回報嘅善意觸動（大腦當機）」——兩者嘅心理路徑完全唔同
- RATIONALE: 兩個「快」而家都有具體、可追蹤嘅因果鏈支撐（唔係靠「操係傲嬌」「紫音係戰鬥狂」兩個標籤跳過程），表面接納速度相似但底層機制唔同，呢個屬合理嘅風格重複（兩個角色都「冇得唔跟」），唔算偷懶
- RISK_TRADEOFF: Scene 層仍然要用唔同嘅演出節奏表達（操嘅失語應該短而克制；紫音嘅「大腦當機」可以停留耐少少），避免畫面上都係「震一下就跟咗」
- DESIGN_ACTION: KEEP（因果已補完；演出節奏差異留 Scene 層執行）

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B7 要做街頭大戰嘅收束，節奏要由戰鬥轉做情感
- CURRENT_DESIGN: 戰鬥結束＋入隊同時發生，過渡緊湊
- RATIONALE: 唔需要額外嘅過渡 beat，呢個收束本身就係自然嘅銜接點
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 戰鬥結算 UI（Likes 爆升）要畀玩家一個清晰嘅「贏咗」回饋，同時唔可以令玩家對假數值系統冇任何疑問種子
- CURRENT_DESIGN: 結算畫面純粹展示 Likes 數字飆升，玩家冇額外操作
- RATIONALE: B1 已經示範過呢個 UI 嘅存在（CDL-073），B7 嘅結算係呼應，唔需要重新教學；玩家純粹接收反饋就夠
- RISK_TRADEOFF: 純展示冇互動，風險係玩家可能完全唔留意呢個 UI 嘅「假」性質——但呢個刻意（Act III 先揭露虛假），唔算缺口
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀10個真正相關角度

---

## BEAT: B8
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 不可取代嘅戲劇功能＝暖收束（有錯位嘅暖）；燈塔效應明示；神秘身影鋪墊（為 M1 做準備）。值得獨立存在。
- 整合聲明：本 beat 整合 BATCH2 已經加嘅「神秘身影」追加元素，正式落入完整格式。

FIELDS:
- beat_function: 戰後暖收束（有錯位嘅暖，D-13 作者決定嘅暖對比底色）；燈塔效應明示；三人未熟嘅團隊狀態；神秘身影鋪墊（為 M1 紫音登場做準備）
- entry_state: 戰鬥剛結束，操正式入隊
- pressure_trigger: N（NOT_APPLICABLE——作者決定嘅暖對比底色，唔係外部觸發）
- participant_intentions: 市民＝歡呼求簽名；路人＝想感謝操；操＝想避開關注；晴香＝好奇點解操會出現
- action: 市民歡呼求簽名；操避鏡頭；路人向操道謝，操冷處理否認，轉身後一瞬被打動（只觀眾見）；晴香睇到佳否認；晴香問美夜子點解操會成日喺學校／屍骸點解跟住嚎→美夜子講燈塔效應。**大屍骸消散前後、三人仍喺善後嗰刻，一個模糊身影喺遠處閂入、閂出，速度快到睇唔清係乜，冇人嚎得切反應**
- reaction: 三人站埋一齊，暖，但未熟（操撐傘先走）
- turn: N/A——呢個 beat 冇新轉折，功能係收束同鋪墊
- consequence: 三人名義上組隊；燈塔效應明示；神秘身影成為一個未解嘅謎（為 M1 做準備）
- emotional_value_shift: 戰鬥 → 有隊友（但有錯位嘅暖——路人嘅真誠道謝 vs 操嘅冷處理）
- relationship_delta: 三人隊成立（表面），但未熟、有距離
- audience_info_delta: 知屍骸會追住持有者（燈塔效應）；操有嘢收埋（輕，CDL-322 三重解讀）；見到一個睇唔清嘅神秘身影，留下疑問
- character_knowledge_delta: 晴香知燈塔效應；三人都唔知神秘身影係邊個
- setup_payoff: Setup → M1（紫音正式登場，呢度嘅神秘身影就係佳，CDL-139 要求 1-2 次搶怪黨神秘出現嘅鋪墊）
- world_rule_exposure: 燈塔效應明示（CDL-064：持有裝置者係本能獵殺目標）
- gameplay_form: 戰後結算畫面；神秘身影做一個快速、冇互動嘅視覺鏡頭
- exit_state: 三人離開現場；神秘身影嘅謎未解
- next_beat_pressure: N/A——純敘事銜接，時間推進到 M1
- source_obligation_trace: O7（市民圍觀歡呼求簽名）、O8（偽亮色高峰、結尾溫暖）、O13（操否認一次）、O18（燈塔效應明示）、P20（操私下整理被觸碰位）、CDL-064（燈塔效應）、CDL-139（③需要 1–2 次搶怪黨出現建立紫音野性印象）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 11
### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 「有錯位嘅暖」要戲劇化（唔淨係暖，要有一個落差）
- CURRENT_DESIGN: 路人嘅真誠道謝 vs 操嘅冷處理否認，形成落差
- RATIONALE: 純粹嘅暖會太直白，呢個落差保留咗操嘅性格複雜度同埋少少不安
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 神秘身影要刻意唔解釋，但要留低足夠印象等 M1 可以接住
- CURRENT_DESIGN: 快速、冇互動、睇唔清嘅鏡頭
- RATIONALE: CDL-139 明文要求 1-2 次神秘出現先入隊，本 beat 承擔第一次
- RISK_TRADEOFF: 如果鏡頭太短／太唔清楚，玩家可能完全冇留意到，同 M1 連埋唔到——已經喺之前（BATCH2）記錄呢個風險
- DESIGN_ACTION: VERIFY（Scene 層要確保呢個鏡頭雖然朦，但要畀玩家事後回想得起）

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 燈塔效應要明示，但唔可以過度解釋世界規則嘅陰暗面
- CURRENT_DESIGN: 晴香問，美夜子答「屍骸會追住持有者」，簡單直接
- RATIONALE: 燈塔效應本身係一個中性事實陳述，唔需要深入講隱性代價嗰層（07:79-93 動機層，demo 唔收）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 三人隊要清楚標記「未熟」，唔可以表現成已經好熟
- CURRENT_DESIGN: relationship_delta 寫明「表面」、「未熟、有距離」；操撐傘先走
- RATIONALE: 符合 CDL-254「四人關係未熟，被迫合作」嘅既定設計方向，三人版同樣適用
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 神秘身影必須為 M1 做鋪墊，呢個 setup 要明確
- CURRENT_DESIGN: setup_payoff 欄明確指向 M1
- RATIONALE: 直接扣連 BATCH2 嘅 M1 設計
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情觀眾要感受到暖收束，但同時帶住一個未解嘅疑問（神秘身影）
- CURRENT_DESIGN: 暖收束畫面＋神秘身影鏡頭並存
- RATIONALE: 兩種情緒（滿足、疑問）同時種落，為下一場戲做情緒過渡
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低操「被打動但否認」嘅知情狀態，只有觀眾知
- CURRENT_DESIGN: character_knowledge_delta 隱含喺 action 欄「只觀眾見」嘅標記
- RATIONALE: 延續操 B6/B7 嘅「表裡落差」設計
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確
- CURRENT_DESIGN: 逐一核對 O7/O8/O13/O18/P20/CDL-064/CDL-139
- RATIONALE: 核對無誤，CDL-139 嘅引用係本批新增（整合 BATCH2 嘅神秘身影元素）
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 B8 嘅暖收束會唔會同 M5 嘅暖收束重複
- CURRENT_DESIGN: 之前已經做過區分（【改：同M5分開兩種暖】）——B8＝有錯位嘅暖（路人 vs 操）；M5＝真暖（四人分食甜嘢）
- RATIONALE: 兩種暖嘅來源同性質唔同，避免重複感
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B8 要做街頭大戰段落嘅完整收尾，同時過渡去 M1
- CURRENT_DESIGN: 暖收束＋神秘身影鏡頭，兩個功能喺同一個 beat 完成
- RATIONALE: 避免額外加一個過渡 beat，保持 demo 長度合理
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 神秘身影嘅鏡頭要有足夠嘅視覺設計去達成「朦但記得住」
- CURRENT_DESIGN: 快速閂入閂出
- RATIONALE: 純視覺懸念手法
- RISK_TRADEOFF: 已經喺 Information/Reveal Control 角度標記風險
- DESIGN_ACTION: VERIFY

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀11個真正相關角度

---

## SEMANTIC GATE 結果
B5、B8：全部角度 KEEP 或 VERIFY（Scene 層執行細節），冇阻斷。
B7：之前版本只記低「操答應入隊快得有啲薄」做已知缺口，叫 Scene 層自己執，呢個做法違反咗 Design Sufficiency Check「核心轉折唔成立唔准外判」嘅規則。本輪已經真正修正——用 Creative Challenge Gate 做咗 C1／C2 兩個候選比較，採用 C1：操嘅「答應」由「交易邏輯被晴香嘅唔計算打破→一時搵唔到慣用劇本→傲嬌掩飾」組成，因果鏈完整，扣連操已確立嘅核心恐懼（S:60）同生存邏輯（GT:66），唔再靠「傲嬌」呢個標籤跳過程。
**結論：結構 validator PASS（見下）；語意抽查完成，核心轉折因果鏈完整（B3 全局矛盾、B7 操答應速度兩個之前標記嘅風險，一個已核實唔相撞、一個已經真正修正），`DELIVERY_STATUS` 標 `DELIVERY_READY`。**
