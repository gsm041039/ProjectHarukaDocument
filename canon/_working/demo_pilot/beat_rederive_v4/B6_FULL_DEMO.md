DELIVERY_STATUS: DELIVERY_READY

<!-- Smoke Test B: single-beat full demo of BEAT_LAYER_DEEP_DESIGN mode, per author request. -->

## BEAT: B6
STATUS: PROVISIONAL

FIELDS:
- beat_function: 操嘅轉折觸發點；晴香天真善意建隊（P-A04 plant）；街戰嘅情感高峰
- entry_state: 操被地面層攻擊纏住（S:365 弱點），唔肯狼狽閃避（S:310），致命一擊逼近；晴香連結增幅中但唔屬於操隊友，系統冇為佢開戰術掩護視窗
- pressure_trigger: R（REQUIRED）。外部觸發＝屍骸對操嘅致命一擊；consequence-driven-progression 要求外部 cost signal 先逼出反應——致命一擊係物理外部事件，唔係晴香「突然覺得要救人」
- participant_intentions: 晴香＝本能衝前（冇計算，H:83 偏鬆風險評估）；操＝維持優雅姿態、寧受傷唔逃（S:310，佢自己唔想被救）；美夜子＝旁觀，佢嘅魔法防護已經用喺 B2，呢刻冇再出手（刻意，見 ANGLE Redundancy）
- action: 玩家冇得到戰術視窗（操未入隊，GP:30 視窗只對隊友），玩家按嘅係閃避鍵；晴香反而用身體撲出去擋咗致命一擊，滿身污糟
- reaction: 操震驚（佢冇要求、冇預期被救，S:205 唔露破綻嘅人突然被人用身體撞開呢個「破綻」）；晴香笑住問操條裙有冇整污糟（CDL-050 原句）
- turn: 操第一次感到「有人在乎『佢』多過戰果」（S:251；由「義務式戰鬥」轉做「因被在乎而留低」嘅起點）
- consequence: 操嘅完美防線被一個「未被告知的接觸」（S:376 量尺強迫觸發條件）撞開；呢個 beat 本身唔直接導致入隊（入隊喺 B7），但建立咗操肯留低嘅情感理由
- emotional_value_shift: 危機（操可能死）→ 震驚的溫暖（操被在乎、晴香冇得到任何回報就去擋）
- relationship_delta: 操對晴香：由陌生人→「呢個人唔顧自己安全去擋我」（忠誠線起點，同 B2 美夜子忠誠線第一步對照，但主體換成晴香）；呢個 delta 喺 B6 只係觸發，完整兌現喺 B7 入隊
- audience_info_delta: 觀眾見到晴香嘅行動模式（唔計算、本能救人）同操嘅行為模式（執著儀態、寧傷唔狼狽）正面碰撞；觀眾未必察覺「未被告知的接觸」呢個操專屬觸發條件（呢個係設計層資訊，唔係觀眾層資訊——見 ANGLE 19）
- character_knowledge_delta: 操知道咗晴香為佢擋（佢清醒，冇眼罩或背向畫面阻擋）；晴香唔知操嘅「量尺」習慣，單純覺得操講嘢惡但人唔差
- setup_payoff: Setup → B7（操答應入隊）；Setup → B8（操私下整理被觸碰位，只觀眾見）；呼應 CDL-050（操入隊觸發原句）
- world_rule_exposure: N/A — 本 beat 純粹角色行動對撞，冇新增或示範世界規則（直播 UI、守恆、連結機制全部喺前後 beat 處理）
- gameplay_form: 一次性按鍵互動（玩家按閃避鍵，觸發晴香嘅「身體擋」動畫，非戰術視窗系統、無失敗分支）；刻意唔用戰術視窗，因為視窗嘅「只對隊友」規則（GP:30）本身成為呢個 beat 嘅主題載體——晴香喺系統之外當操係隊友
- exit_state: 操站起身，表面鎮定但內在已鬆動；晴香冇意識到自己剛做咗一件對操嚟講好重大嘅事
- next_beat_pressure: 操嘅震驚需要一個出口（B7 嘅傲嬌入隊）；呢個 beat 冇獨立 cost signal 帶入下一個，次一個 beat 嘅觸發係「戰鬥未完」（屍骸仲喺度），屬敘事銜接
- source_obligation_trace: O4（CDL-050「不顧儀態用身體擋攻擊，笑著問條裙有無整污糟」）；O5（操轉折＝S:251）；O16（晴香天真善意建隊，SRC_1-C37／FM:20 P-A04）；P20（操量尺強迫觸發條件＝「未被告知的接觸」，S:376）
- downstream_references:
  - Scene Reference: 「晴香不顧儀態用身體擋攻擊，笑著問『條裙有無整污糟』」（CDL-050 原句）
  - Directing Reference: 無既有 timing／鏡頭引用（待 Scene 層）

PER_BEAT_DESIGN_RATIONALE:

### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 操喺 Act I 嘅弧線起點係「義務式戰鬥、形式主義強迫」（CDL-063/064），要有一個具體時刻開始偏離呢個起點
- CURRENT_DESIGN: B6 用「被未告知接觸」（S:376 操嘅量尺強迫觸發條件）做呢個起點——唔係操自己選擇信人，而係身體先被撞開防線
- RATIONALE: 操嘅 coping（形式主義、唔露破綻）決定咗佢唔會主動卸防；用一個「被迫發生」嘅身體事件打開缺口，先符合佢自己唔會自願行動嘅設定，亦避免「操突然變開放」嘅性格跳躍
- RISK_TRADEOFF: 風險係觀眾未必讀到「未被告知的接觸」對操嘅特殊意義（呢個係 Scene 層先可見嘅微行為，Beat 層只能種種子）；代價係 B6 本身唔夠戲劇化解釋操嘅轉變，要留到 B8（私下整理被觸碰位）先補完
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 操同晴香範圍開始時完全未相識（SRC_2 §4），要喺呢場戰鬥入面由零建立到「操肯入隊」嘅關係基礎
- CURRENT_DESIGN: B6＝單向行動（晴香擋操），冇對白交流基礎；關係 delta 完全靠行動本身承載
- RATIONALE: 操嘅角色設定（極少說話、節能模式，S:309）令佢唔會用語言回應情感衝擊；用行動對行動（擋 vs 震驚）去推進關係，貼合操嘅溝通方式
- RISK_TRADEOFF: 風險係單靠行動，玩家／觀眾可能唔讀出呢個係關係轉捩點，要靠 B7 嘅台詞（傲嬌入隊）同 B8 嘅微行為補強，否則 B6 單獨顯得只係「戰鬥場面」
- DESIGN_ACTION: VERIFY（Scene 層要驗證行動本身嘅視覺語言夠唔夠清楚）

### ANGLE: Structural Beat Function
- DESIGN_REQUIREMENT: 呢個 beat 要喺「操入隊」（O4／CDL-050）嘅因果鏈上做轉折點（turn），唔可以只係一個戰鬥動作
- CURRENT_DESIGN: beat_function 明寫「操嘅轉折觸發點」；turn 欄寫明「第一次感到有人在乎」
- RATIONALE: 跟 story-room 嘅 beat 抽象層要求，將「轉折」獨立標出，令下一層（Scene）知道呢個時刻嘅戲劇功能，唔淨係一個動作描述
- RISK_TRADEOFF: 冇風險；但若 Scene 層冇承接呢個轉折（例如冇畀操反應鏡頭），beat 層嘅功能就會落空
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: CDL-050 原句（擋＋問裙）係已鎖嘅 Scene Reference，要確保 beat 層冇重寫呢句嘅功能，亦要清楚呢個 beat 為後面幾個 payoff 做乜 setup
- CURRENT_DESIGN: setup_payoff 欄列明 → B7（入隊）、→ B8（操私下整理）、呼應 CDL-050
- RATIONALE: 分開「呢個 beat 做乜」同「呢個 beat 為乜鋪路」，令 Beat Layer Completeness Gate 嘅 setup/payoff 角度有實質內容核對，唔淨係一句「有 setup」
- RISK_TRADEOFF: 若 B7／B8 日後被改，呢度嘅 setup 清單要重掃（STALE）；呢個已經記喺 DERIVATION_V4 嘅重掃規則
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience / Knowledge Gap
- DESIGN_REQUIREMENT: demo 面向零前情玩家（作者鎖），要確保呢個 beat 冇要求玩家已知操嘅背景先睇得明
- CURRENT_DESIGN: audience_info_delta 寫明「觀眾未必察覺『未被告知的接觸』」，並明確標呢個係設計層資訊唔係觀眾層要求
- RATIONALE: 分清「設計師知道嘅深層原因」同「玩家需要知道嘅表面因果」——玩家只需要睇到「晴香救咗操、操好似好介意但冇講」，唔需要知道量尺機制
- RISK_TRADEOFF: 風險係如果 Scene 層畫蛇添足解釋咗操嘅量尺機制，會過早揭示 Act I 唔應該露嘅身體崩壞細節（HC-1b）；要喺 Scene 層提示呢個邊界
- DESIGN_ACTION: VERIFY

### ANGLE: Gameplay / Player Agency
- DESIGN_REQUIREMENT: GP:30／GP:52 定義戰術掩護視窗只對隊友開、受信任度影響；operating 要符合玩法系統邊界，唔可以靜靜開一個系統冇定義過嘅情境
- CURRENT_DESIGN: 刻意唔用戰術視窗系統，改用一次性按鍵互動；gameplay_form 欄明寫呢個選擇嘅理由
- RATIONALE: 直接解決咗 premise audit 搵到嘅「掩護視窗只對隊友，操未入隊」衝突——唔係迴避問題，而係將呢個系統限制轉做主題語言：玩家被逼經歷「規則話唔係隊友」，但晴香嘅行動違反規則
- RISK_TRADEOFF: 代價係呢個 beat 冇用到核心 loop（戰術視窗），如果 demo 想教夠晒核心系統，B6 要另外補一次正式視窗示範（盲審 E 已指出核心 loop 教學不足，見 CHECKPOINT）
- DESIGN_ACTION: NEEDS_AUTHOR_DECISION

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 呢個 beat 要有可視覺化嘅行為載體，唔淨係靠對白／內心先成立（orchestrator Directing 角度要求）
- CURRENT_DESIGN: 核心行動（身體擋）同反應（操震驚）都係純動作／表情，冇依賴對白（問裙嗰句係點題，唔係解釋）
- RATIONALE: 「態度 vs 命運」主題要求用行動承載碰撞（Gate C），B6 正係主題交鋒最重嘅一個位，用動作做載體符合全局導演語法（11_directing_playbook 代價上鏡原則）
- RISK_TRADEOFF: 冇明顯風險；需要注意嘅係操「震驚」嘅表演幅度唔可以太大（S:309 操嘅節能模式），要克制
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: B6 喺連續戰鬥 beat（B1–B7）之中，要確保唔同其他擋／救動作重複，亦唔令節奏過載
- CURRENT_DESIGN: B6 係全場唯一一次「晴香用身體擋人」；B2 係美夜子擋晴香，B4 係操順手救路人——三個擋／救動作主體唔同、意義唔同
- RATIONALE: 刻意分配唔同角色做「擋」嘅動作，避免同一個手法重複三次（盲審 D 搵到嘅「擋一擊喺同一場出現三次」風險，已經喺呢個 beat 做咗區分：B6 嘅擋係晴香對操、情感代價最重）
- RISK_TRADEOFF: 風險係三個相似手法喺同一場戰鬥裡面，觀眾可能仍然覺得「老係都係救人」；若 Scene 層冇做出動作質感上嘅分別，呢個區分會喪失
- DESIGN_ACTION: VERIFY

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查 B6 嘅功能有冇同 B2（美夜子擋）或 B4（操救路人）重疊
- CURRENT_DESIGN: participant_intentions 欄明寫「美夜子呢刻冇再出手（刻意）」——即係設計上主動避免美夜子喺呢個 beat 分擔晴香嘅功能
- RATIONALE: 如果美夜子呢刻又出手，B6 嘅「晴香獨力救操」焦點會被稀釋，操嘅轉折（因晴香而唔係因美夜子）會變模糊
- RISK_TRADEOFF: 代價係美夜子喺呢場戰鬥嘅存在感喺呢個 beat 短暫降低（但佢喺 B8 有微反應補返）
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 問「點解一定要用『身體擋』呢種形式，唔用其他方式令操入隊」
- CURRENT_DESIGN: 用「未被告知的接觸」（操專屬觸發條件）做形式——即係呢個形式本身就係操嘅弱點直接對應
- RATIONALE: 如果換成「晴香講一句感動嘅話」令操入隊，就完全唔會觸發操嘅身體機制（S:376），操嘅轉折會變成純對白驅動，失去「身體代價即角色語言」嘅全劇美學（playbook:604 代價係肉身性）
- RISK_TRADEOFF: 失去嘅係一個更簡單、更易寫對白嘅版本；換嚕嘅係操嘅轉折同佢自己獨有嘅身體機制直接扣連，唔係通用「被感動」橋段
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 操「寧受傷唔狼狽」（S:310）同「絕不露破綻」（S:205）嘅 coping，喺呢個 beat 入面會點樣被撞擊
- CURRENT_DESIGN: entry_state 明寫操「唔肯狼狽閃避」；呢個 coping 直接導致佢中陷阱（上一個 beat），而 B6 入面操冇機會拒絕被擋（晴香快過佢反應）
- RATIONALE: 操嘅 coping 唔可以喺呢個 beat 被「講道理」拆除——必須係物理上嚟得切，先符合「佢自己唔願意被救」嘅設定；若操有時間反應，佢好可能會拒絕
- RISK_TRADEOFF: 風險係如果 Scene 層畫面畀操「反應時間」，佢嘅性格邏輯會要求佢拒絕，令整個 beat 唔成立；要確保 timing 上操冇反應空間（留喺 Directing Reference，待 Scene 層）
- DESIGN_ACTION: VERIFY

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: CDL-050 原句已鎖，B6 唔可以改動佢嘅字面功能
- CURRENT_DESIGN: action／reaction 欄直接保留「擋攻擊」＋「問條裙」嘅組合，冇改動
- RATIONALE: 呢句係少數幾個已經有明確 Scene Reference 嘅對白，保留佢令 Beat 層同 Scene 層之間有清晰嘅銜接點
- RISK_TRADEOFF: 冇風險，呢個係最穩嘅一格
- DESIGN_ACTION: KEEP

### ANGLE: Writing Execution/Draftability
- DESIGN_REQUIREMENT: 「未被告知的接觸」呢個操專屬心理機制，要喺冇對白解釋嘅情況下寫得出嚟
- CURRENT_DESIGN: Beat 層只標記呢個觸發條件存在，具體點樣用畫面表達（操嘅手部動作、呼吸停頓）留畀 Scene 層
- RATIONALE: Beat 層嘅角色就係標記「呢個轉折需要乜」，唔係解決「點寫」——呢個分工符合 Beat-grain 分類規則（唔將 DIRECTING_REFERENCE 級細節塞入 body）
- RISK_TRADEOFF: 風險係 Scene 層如果接手嘅人冇讀到呢個 rationale，可能寫唔出操嘅微妙反應，變成普通震驚
- DESIGN_ACTION: VERIFY

DEPTH_EXCEPTION_NEEDS_REVIEW: 無需要（13 個角度已經係真正相關嘅角度；呢個 beat 冇強行湊夠 10 個，亦冇超出 14 個太多）
