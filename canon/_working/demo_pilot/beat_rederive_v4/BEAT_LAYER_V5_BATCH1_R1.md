DELIVERY_STATUS: DELIVERY_READY

<!--
BEAT_LAYER_V5 — BATCH 1 REVISION 1（N1, N2, N3）
正式故事創作修訂，唔係 skill 測試。用更新後嘅 BEAT_LAYER_DEEP_DESIGN mode（commit 29c488b 新增 Creative Challenge Gate / Design Sufficiency Check / Premise Audit）。
基底：BEAT_LAYER_V5_BATCH1.md（保留唔改）。本檔係完整修訂版，唔係 diff。
0 sub-agent；0 新 skill 修改；0 新盲審。
-->

## BEAT: N1
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 戲劇目標＝建立 E-01 戰後嘅情緒消化底色、種低強度身體代價種子（隱形揭示）、畀零前情玩家證據知道「啱啱發生過大事」。現有設計（純視覺、三個非語言動作：熱可可儀式／照鏡見異樣／揉眼自圓）足以達成呢三個目標，冇靠角色標籤代替因果——症狀本身係已確立機制（CDL-123／CDL-128），唔係「晴香係乜乜性格所以點點」嘅標籤推論。
- ALTERNATIVES_CONSIDERED: 候選 1（現用）＝克制、非語言、自我安慰式反應。候選 2＝情緒崩潰式反應（返到屋企先俾自己喊／抖震）——機制上真正唔同（被動自我安撫 vs 主動情緒釋放）。**否決候選 2**：崩潰式反應會讀成「晴香隱藏住一個重大創傷，終於爆發」，同 CDL-355／CDL-381「晴香 Act I 冇童年創傷、冇面具」嘅設計意圖相撞——佢唔係壓住一個大創傷等爆發，佢嘅驚本身冇咁重，用崩潰嚟表達會不成比例地放大咗呢個情緒。候選 1 先符合「驚但唔算創傷級」嘅份量。
- SUFFICIENCY: 意圖（想返到正常、自我安撫）→行動（熱可可儀式、自圓藉口）→本 beat 冇轉折（刻意：消化底色唔應該喺呢度完成轉折，轉折留喺 N2／N3）→後果（情緒暫時封存，帶住未散嘅驚入 N2）。因果鏈完整，冇斷。

FIELDS:
- beat_function: 首戰後情緒消化底色；熱可可安全閥 setup（→E-03 可樂失味）；身體異常首現（隱形揭示層，唔命名）
- entry_state: 晴香啱啱經歷人生第一場變身＋戰鬥（E-01，range 外），情緒過載但未崩；佢獨自返到屋企，冇任何人喺場
- pressure_trigger: N（COST_SIGNAL_NOT_APPLICABLE——純情緒消化底色 beat，BS:153）。理由：呢個 beat 嘅戲劇功能係底色建立／E-01 嘅延遲反應，唔係推進劇情嘅行動選擇，符合 consequence-driven-progression.md 嘅「有效例外」條款
- participant_intentions: 晴香＝想返到「正常」嘅感覺（唔係壓抑想消失，係想攞返一個熟悉、安全嘅動作去自我安撫）；冇第二個角色在場
- action: 返屋企；身上仲帶住首戰痕跡（污糟／小擦傷，手指貼住新膠布）；沖一杯極甜熱可可，閉眼飲，儀式感；照鏡時見到自己倒影動作慢咗 0.3 秒；身體有一種唔屬於自己嘅沉重感
- reaction: 佢揉眼、打呵欠，用「琴晚夜瞓，眼花添」呢類日常藉口自圓其說（可被否認性原則，CDL-128）；冇台詞，全部非語言
- turn: N/A — 本 beat 冇戲劇轉折，功能係情緒封存，唔係推進；「轉」會喺 N3 先發生（已經喺 Creative Challenge 確認呢個係刻意設計，唔係遺漏）
- consequence: 情緒暫時封存，驚未處理但壓落去；表面安穩其實係假安穩
- emotional_value_shift: 驚（戰鬥餘波）→ 暫時安穩（自我安撫、假裝正常嘅安穩）
- relationship_delta: N/A — 本 beat 晴香獨處，冇其他角色在場，冇關係互動可以推進
- audience_info_delta: 零前情觀眾透過身上痕跡＋膠布，讀到「佢啱啱經歷咗啲大事」；同時見到一個佢自己都唔多理嘅身體異樣（倒影慢半拍、沉重感），但唔知原因
- character_knowledge_delta: 晴香察覺身體異樣、用日常藉口自圓（唔命名原因；佢唔知呢係魔法代價）
- setup_payoff: Setup → E-03 可樂失味（CDL-034／O:78，range 外，demo 唔收 payoff）；Setup → 幽靈重量症狀鏈（CDL-123／CDL-128）；呢個 beat 本身唔 payoff 任何上游設定
- world_rule_exposure: N/A — 本 beat 唔展示／唔示範任何新世界規則，純粹角色身體狀態嘅隱形揭示，世界機制留畀後面 beat 處理
- gameplay_form: 候選＝可互動沖可可小動作（HW，Scene 層驗證可行性）或純過場鏡頭；兩者都唔影響 Beat 層功能
- exit_state: 晴香表面平靜、心裡仍有未散嘅驚；佢已經約好（E-01 尾，range 外）翌日天台見美夜子
- next_beat_pressure: 純時間銜接（硬切到翌日），唔係 cost signal；下一個壓力嚟自約定本身，唔嚟自呢個 beat 內部
- source_obligation_trace: CDL-123（E-01 當晚輕量 beat：家中獨處、無台詞、幽靈重量雙層症狀＋日常藉口＋熱可可私密習慣初建）；CDL-128（症狀呈現嘅視覺＋身體雙層疊加公式）；H:289（膠布習慣）；H:295（刮杯底糖粉）；CDL-355／CDL-381（冇童年創傷、冇面具——支撐本輪否決「崩潰式反應」候選嘅理由）
- downstream_references:
  - Scene Reference: 「刮取杯底殘留糖粉」（H:295）
  - Directing Reference: 倒影慢「0.3 秒」（CDL-123／CDL-128 共同規格）

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 12
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 晴香 Act I 設計要求「冇面具、冇隱藏創傷」（CDL-355/381）同時又要有「強迫自己正常」嘅壓制行為（CDL-357 壓抑稅機制）——呢兩個講法要並存
- CURRENT_DESIGN: 晴香嘅「正常」係真心想返到安穩感覺，同時身體有啲異樣佢真係未去深究（未覺察嘅迴避，唔係知道但收埋）
- RATIONALE: CDL-355 否定嘅係「面具」（刻意表演、收埋一個明確創傷），冇否定「壓抑」（迴避深究、用慣常動作自我安撫）——呢個 beat 用「揉眼當自己攰」表達「未覺察嘅迴避」，同冇面具並存
- RISK_TRADEOFF: 風險係 Scene 層若寫得太「鎮定」會讀成刻意壓抑；若寫得太崩潰又削弱翌日主動赴約嘅主動性（見 DESIGN_DECISION_RECORD 候選 2 否決理由）
- DESIGN_ACTION: KEEP

### ANGLE: Atmosphere/Tension
- DESIGN_REQUIREMENT: 整體調性＝好暖＋少少不安；N1 係開場，要種第一粒不安種子但唔可以壓過即將嚟嘅天台資訊量
- CURRENT_DESIGN: 不安嚟自「倒影慢半拍」「身體沉重」兩個細節，視覺／身體語言表達，唔用對白強調
- RATIONALE: Act I 低強度滲漏原則（HC-7d）要求呢類異常唔可以太顯眼；用「佢自己都唔理」嘅態度呈現，符合「少少不安」嘅份量
- RISK_TRADEOFF: 如果太戲劇化會提早觸發 HC-1b；代價係可能太細令觀眾忽略——已經用膠布＋痕跡呢個額外載體補強（見 Audience Experience 角度）
- DESIGN_ACTION: KEEP

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 熱可可同幽靈重量兩條綫係已鎖嘅跨段 setup，demo 要做好 setup 但唔偷步做 payoff
- CURRENT_DESIGN: 兩條 setup 保留；payoff 明確標記「range 外，demo 唔收」
- RATIONALE: 唔可以為自圓其說而偷步收埋一個本屬 Act I 後段嘅 payoff，會重複操牙嗰個「搶咗後段功能」嘅問題
- RISK_TRADEOFF: demo 內 N1 嘅 setup 感覺「冇收尾」，但呢係 demo（切片）嘅結構性限制
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 作者鎖＝冇前情、唔補演首戰，但觀眾要讀到「佢啱啱經歷大事」
- CURRENT_DESIGN: 用身上痕跡＋手指新膠布做可見證據，唔靠對白或畫面閃回
- RATIONALE: 膠布係晴香已有嘅行為語言（H:289），用佢做痕跡載體唔需要新增設定
- RISK_TRADEOFF: 風險係痕跡太輕，觀眾仍然睇唔出；要留意 Scene 層鏡頭畀呢個細節足夠停留時間
- DESIGN_ACTION: VERIFY（Scene 層要驗證痕跡嘅視覺份量）

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 膠布哲學同熱可可儀式係兩種唔同層面嘅 coping，要分清楚
- CURRENT_DESIGN: 膠布＝物理覆蓋傷口；熱可可＝味覺／儀式覆蓋情緒。本 beat 只直接演熱可可，膠布只做靜態痕跡
- RATIONALE: 兩種 coping 分流咗戲劇重量，避免同一 beat 太密集，亦對應唔同代價層面
- RISK_TRADEOFF: 冇明顯風險
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 問點解一定要用「非語言自圓」而唔係對白或內心獨白講出驚
- CURRENT_DESIGN: 完全冇台詞（O:77 原定），用身體動作承載
- RATIONALE: 保持 N1 純視覺，令 N2 第一次講出口嘅驚先有「第一次講出嚟」嘅份量——如果 N1 已經講出驚，N2 嘅直講就會重複
- RISK_TRADEOFF: 冇台詞嘅 beat 需要更強導演語言；已喺 Directing 角度處理
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: N1 作為第一個 beat，要考慮玩家有冇最基本互動
- CURRENT_DESIGN: 兩個候選留喺 fields（互動沖可可／純過場），未定案
- RATIONALE: Beat 層標記呢個決策點存在，避免 Scene 層冇意識到呢個已知風險
- RISK_TRADEOFF: 純過場更電影化但延續「玩家冇嘢做」缺口；互動解決缺口但可能顯得多餘
- DESIGN_ACTION: KEEP（HW 決定：揀互動沖可可小動作——低成本、可逆，直接解決盲審搵到嘅「開場玩家冇嘢做」缺口；呢個係可逆嘅執行選擇，唔影響核心創作方向，唔需要上報作者；如果 Scene 層製作資源唔夠，可以隨時改返純過場）

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 檢查冇違反「身體代價要累積，唔可以一開始最重」（11:610）同「Act I 低強度滲漏」（HC-7d）
- CURRENT_DESIGN: 症狀停留喺最低一級，冇進一步惡化，亦冇命名原因
- RATIONALE: 呢係全 demo 第一個身體代價訊號，強度必須最低，為後面代價累積留空間
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Directing/Staging Opportunity
- DESIGN_REQUIREMENT: 冇台詞嘅 beat 需要靠行為、鏡頭、環境帶出情緒
- CURRENT_DESIGN: 三個可視覺化動作，各自承載唔同資訊（儀式＝coping；照鏡＝身體代價；揉眼＝自我欺騙）
- RATIONALE: 三件事用三個獨立畫面表達，唔靠單一鏡頭或對白濃縮
- RISK_TRADEOFF: 三個動作如果拍得太快會資訊過載；需要足夠留白時間
- DESIGN_ACTION: VERIFY（Scene 層驗證三個動作嘅節奏唔會互相搶戲）

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: N1 要定好開場呼吸感——太快失去安靜消化感，太慢令玩家未投入已失去耐性
- CURRENT_DESIGN: 單一、短、冇對白嘅安靜 beat；原四個開場 beat 已經喺 N3 併咗兩個
- RATIONALE: N1 嘅安靜功能唔可以再壓縮（獨特價值在於建立晴香獨處時嘅真實樣貌）
- RISK_TRADEOFF: 若 Scene 層拍得過長，風險會返晒嚟
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保追溯引用準確
- CURRENT_DESIGN: 同時引 CDL-123（beat 本身嘅決定）同 CDL-128（症狀公式）
- RATIONALE: 兩者分工清晰，一齊引用先完整
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低晴香呢一刻知／唔知乜
- CURRENT_DESIGN: 晴香察覺身體異樣，但唔知原因，用日常藉口自圓（主動迴避深究，唔係被蒙蔽）
- RATIONALE: 「察覺但唔深究」同「完全唔覺」或「知道但隱瞞」係三種唔同知情狀態，呢度屬第一種
- RISK_TRADEOFF: 冇明顯風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀 12 個真正相關角度

---

## BEAT: N2
STATUS: DRAFT

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE: 戲劇目標＝達成作者鎖（觀眾知佢首戰後好驚）＋晴香主動赴約。現有設計（直接講出驚）基本足以達成，但純陳述句形式令「講出嚟」呢個行動冇帶出任何代價感，接近「用對白交代資訊」而唔係「戲劇化嘅第一次表白」。
- ALTERNATIVES_CONSIDERED: 候選 1（原設計）＝直接講，中間冇停頓。候選 2（採用，修訂）＝講出口前有半拍遲疑／停頓（例如一次深呼吸或者欲言又止再講），然後坦白講出嚟——機制上真正唔同之處係「講出嚟嘅過程本身帶住少少重量」vs「講出嚟純粹係資訊傳遞」。兩個候選都符合冇面具（佢最終都坦白講、冇迴避、冇被點出先認），但候選 2 令「第一次把驚講出口」有佔返少少戲劇份量，唔單純係功能性交代。**採用候選 2**：風險低、改動細（淨係加一個停頓動作），但因果份量明顯提升。
- SUFFICIENCY: 鏈完整（情緒→停頓→坦白→美夜子功能性回應）；新增嘅停頓純粹加強因果份量同戲劇重量，冇改變方向或者新增前提。

FIELDS:
- beat_function: 交代「晴香首戰後好驚」（作者鎖嘅達成點）；晴香主動赴約，由被動變主動嘅第一步
- entry_state: 晴香帶住一晚消化後仍未散嘅驚，嚟到學校天台；美夜子（貓形）早已喺高處等
- pressure_trigger: N（COST_SIGNAL_NOT_APPLICABLE——純資訊交付／對話 beat，BS:195）
- participant_intentions: 晴香＝想知發生咩事、自己仲可唔可以幫人；美夜子＝完成交代、保持距離（功能性，唔係邀請）
- action: 晴香到天台，表情震驚＋好奇並存；佢停咗半拍（深呼吸／欲言又止），然後直接講出自己驚（只講感受，唔具體講戰鬥細節）；美夜子用解說口吻回應，唔安慰【修訂：加入「停咗半拍」，令坦白呢個行動本身帶住少少重量，唔係純陳述】
- reaction: 美夜子用功能性、保持距離嘅語氣回應晴香嘅驚，唔主動安撫（CDL-095／CDL-408）
- turn: 驚講咗出口但晴香冇退縮——由「隱藏／壓住嘅驚」轉做「講出嚟但仍然留低」嘅驚；呢次「講出嚟」本身要求少少勇氣，唔係順口而出
- consequence: 晴香嘅驚被講出嚟，但冇改變佢赴約嘅決定；美夜子得知晴香驚，但唔表態
- emotional_value_shift: 隱藏嘅驚 → 講出嚟嘅驚（公開化，但唔係消除）
- relationship_delta: 晴香對美夜子＝坦白（符合 CDL-355 冇面具）；美夜子對晴香＝面硬、保持距離（符合 CDL-408）
- audience_info_delta: 觀眾知道晴香首戰後好驚（作者鎖達成）；觀眾亦見到美夜子嘅回應方式（功能性、唔溫暖）；停頓動作令觀眾感受到呢句話對晴香嚟講唔係輕易講出口
- character_knowledge_delta: 美夜子知道晴香驚（之前只能猜測，呢度明確知道）
- setup_payoff: 為 N3 嘅「使命說明」做情緒前提（晴香帶驚去聽）；未有 payoff
- world_rule_exposure: N/A — 本 beat 純角色對話交流，未涉及任何世界規則展示
- gameplay_form: 對話提示 UI（HW，等同 Act I「安全網」嘅對話提示慣例）
- exit_state: 晴香等住聽美夜子解釋；驚仍在，但已經講出咗口
- next_beat_pressure: N/A — 純敘事銜接入 N3
- source_obligation_trace: CDL-103（次日放學後赴約，主動赴約強化拯救者情結主動性）；CDL-095（天台非戰場即時 info-dump；美夜子功能性冷漠口吻）；CDL-355（晴香 Act I 冇面具，真心）；CDL-408（美夜子日常底色＝面硬話少扮唔理，但暗地照住）
- downstream_references:
  - Scene Reference: 無既有對白稿
  - Directing Reference: 無既有 timing／鏡頭引用；【新增】停頓動作嘅長度留俾 Scene／Directing 層決定（毋需喺 Beat 層定秒數）

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 11
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 晴香要第一次喺作品入面公開講出一個情緒狀態（驚），行動要同「冇面具、真心」一致，唔可以讀成「裝可憐」或「隱藏然後突然爆發」
- CURRENT_DESIGN: 停頓後直接講感受、唔講事件細節；講完之後冇進一步追問或戲劇化擴大
- RATIONALE: 「停頓後坦白」比「即時脫口而出」更貼近「講出一句重要嘅真心話需要少少勇氣」嘅真實心理節奏，同時依然冇任何表演成份（停頓唔係演戲，係真實嘅遲疑）
- RISK_TRADEOFF: 風險係停頓太長會變成拖拍，或者被誤讀成猶豫要唔要講（即係迴避）——要控制停頓短而清晰，Scene 層執行要留意
- DESIGN_ACTION: KEEP（經 Creative Challenge 修訂後保留）

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 美夜子對晴香嘅坦白要有回應，但唔可以違反「唔會主動熱情、保持距離」（CDL-198）又要符合 CDL-408「暗地照住」
- CURRENT_DESIGN: 美夜子用解說口吻接住，唔安慰——有回應（唔無視）但唔用溫暖語言處理（冇安慰）
- RATIONALE: 「唔安慰」唔等於「唔關心」；美夜子嘅關心方式係功能性
- RISK_TRADEOFF: 觀眾可能讀成冷漠；需要 Scene 層微細節（視線、姿態）暗示佢有留意
- DESIGN_ACTION: VERIFY（Scene 層補一個暗示「有留意但唔表露」嘅微行為）

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 檢查「直接講驚」會唔會撞晴香已確立嘅膠布哲學（蓋住困惑／痛楚）
- CURRENT_DESIGN: 驚被講出嚟（唔係蓋住），但講出嚟之後冇進一步處理（冇追問、冇要求安慰）
- RATIONALE: 膠布哲學處理「痛楚」（身體／創傷層），驚（情緒反應）係佢願意直接表達嘅範疇；兩者唔矛盾
- RISK_TRADEOFF: 冇明顯風險；呢個分野喺 N1／N2 之間做咗清晰區分
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 呢個 beat 只揭露晴香嘅情緒，唔好提早揭露使命內容或世界規則
- CURRENT_DESIGN: action 欄明確限制喺「只講感受」
- RATIONALE: 清楚分層令 N2（情緒）同 N3（資訊）嘅功能唔重疊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 作者鎖定「觀眾要知道晴香首戰後好驚」，要確保呢個 beat 清晰達成
- CURRENT_DESIGN: 直接講出「驚」一詞（或同義表達），加停頓強化重量，但冇曖昧處理
- RATIONALE: 呢個係明確嘅作者鎖，唔屬於需要隱晦暗示嘅範疇
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Entry Timing/Presence Control
- DESIGN_REQUIREMENT: 晴香嘅天台進場方式要強化「主動赴約」嘅主動性（CDL-103），唔可以讀成被逼或者漫不經心
- CURRENT_DESIGN: entry_state／action 明寫「主動赴約」
- RATIONALE: CDL-103 原文特別強調呢個細節本身就係設計重點
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 「驚而仍然去」係「態度 vs 命運」主題嘅其中一粒種子，要標記但唔過早講明
- CURRENT_DESIGN: 標 THEME_SEEDED（唔係 THEME_EXPLICIT）
- RATIONALE: N2 屬早期 beat，啱啱埋種，唔應該逼佢做 THEME_EXPLICIT
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 問點解一定要用「直接講（加停頓）」而唔係其他方式交代驚
- CURRENT_DESIGN: 揀直接講＋停頓，否決「被點出先認」（會逼美夜子打破自己嘅防線設定）
- RATIONALE: 直接由晴香主動開口，唔需要美夜子主動表露關心，風險最低；停頓補返「講出嚟」嘅重量
- RISK_TRADEOFF: 代價係比「被點出」少咗一層關係互動，已經用「解說口吻接住」部分補返
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: N2 係開場第二個對話 beat，考慮玩家喺呢度有冇最基本互動
- CURRENT_DESIGN: 對話提示 UI（玩家可控制對話推進節奏）
- RATIONALE: 現成系統，提供最基本操控，符合 Existing Carrier First
- RISK_TRADEOFF: 互動份量細，可能仍被讀成「玩家冇嘢做」；但 N2 本身嘅戲劇功能唔適合塞入戰鬥或選擇機制
- DESIGN_ACTION: KEEP

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: N2 係 N1 之後嘅第二個 beat，要確保開場節奏唔會連續太多靜態對話
- CURRENT_DESIGN: N2 本身短，跟住直接入 N3（已合併原 N3+N4）
- RATIONALE: 刻意令三個 beat 嘅長度／密度遞增（靜→短→長帶轉折），避免同質場景連續
- RISK_TRADEOFF: 停頓動作加咗少少長度，但份量仍然細，唔影響整體遞增結構
- DESIGN_ACTION: KEEP

### ANGLE: World Rule/Mechanic Pressure
- DESIGN_REQUIREMENT: 確認本 beat 冇違規展示世界規則
- CURRENT_DESIGN: world_rule_exposure 標 N/A，理由明確
- RATIONALE: 避免同 N3 重疊
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀 11 個真正相關角度

---

## BEAT: N3
STATUS: PROVISIONAL

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE（五問）：
  1. 不可取代嘅戲劇功能＝世界規則半真半假輪廓說明＋晴香由被動轉主動接受使命＋美夜子孤立感／隱藏代價嘅行為層表達。三個功能缺一都會令後面街戰／基地戲失去前提，呢個 beat 值得獨立存在（第 5 問答案＝值得）。
  2. 原設計「晴香接過注射槢＝接受使命」**唔足以**產生宣稱嘅角色轉變——接過一支工具同心理上承諾一個使命之間缺咗一步因果，呢個係本輪要解決嘅核心問題（第 2 問答案＝唔足以，見下 Problem A）。
  3. 原設計確實有用角色標籤代替因果嘅問題：「拯救者情結被精準命中→接受得好快」呢句本身係標籤式總結，冇展示實際因果鏈（第 3 問答案＝有，見下修正）。
  4. 有更有力、同樣符合 canon 嘅處理：將「接受」嘅因果主體由美夜子（畀槍）改為晴香自己（主動發聲／行動），並將速度嘅解釋由抽象標籤改為具體行為先例（見下 Problem A 方案）。
  5. 已答（見第 1 點）。

- **Problem A（晴香接受使命嘅機制）：**
  - **候選 A1：自我驅動嘅口頭承諾，扣連已確立嘅行為先例。** 美夜子講完半真半假框架、未講完代價嗰句停咗之後，**晴香自己先開口**——表達佢想幫人嘅理由，而且呢個理由明確扣連佢喺 E-01 已經做過嘅事（阻止美夜子抹走桐生健記憶、貼膠布「痛係證據」，CDL-088／CDL-100）：即係話，佢而家願意做「維多利亞天使」，唔係一個新嘅性格設定忽然出現，而係佢一路都係咁嘅人，而家先有一個名份。速度嘅解釋＝呢個唔係佢考慮緊嘅新決定，而係佢已有行為模式嘅延續同確認。
  - **候選 A2：非語言嘅身體承諾，扣連天台嘅空間象徵。** 晴香行到美夜子身邊、行到天台邊緣，望住城市（天台視覺語言＝高層思想／結構搖搖欲墜，06_visual_bible:945）——用身體行動（主動行去一個有少少風險嘅位置、同美夜子並排）代替語言，表達「我同你一齊企呢度」嘅承諾。
  - **比較：** A1 嘅優點係直接解答作者要求嘅「點解咁快」——答案唔係一個新嘅心理轉變，而係一個已經存在嘅性格模式被重新確認，因果最紮實；缺點係偏向語言／內心表達，Beat 層描述容易讀成「講道理」。A2 嘅優點係純行動、唔靠對白，貼合「行為層承載主題」嘅要求，亦重用咗天台已有嘅空間象徵（existing carrier）；缺點係單獨使用時，「企埋去」本身唔明確解答「點解快」，觀眾可能讀成單純嘅情感靠近，唔夠直接扣連「接受使命」。
  - **採用：合併 A1＋A2，以 A1 做因果骨幹。** 晴香行到美夜子身邊、望住城市（A2 嘅身體行動），同時講出佢想幫人嘅理由並且明確扣連 E-01 嗰次本能阻止（A1 嘅因果解釋）——一個行動、一句扣連過去先例嘅發聲，兩者同時發生，唔係分開兩個拍子。呢個先回答到作者要求嘅兩點：①保留「接受得好快」；②令人理解點解——答案係「佢一路都係咁」，唔係一個新決定。
  - **交槢嘅角色重新定位：** 晴香嘅承諾完成之後，**先**輪到美夜子用行動回應（遞上急救袋）——交槢唔再係「接受」嘅觸發機制，而係美夜子對晴香已經做出嘅承諾嘅回應（延續 CDL-060 口硬身守），同時保留「避開講代價」嗰個功能。因果方向由「美夜子畀槢→晴香接受」倒轉為「晴香承諾→美夜子回應」，令晴香先係主動方（符合 beat_function 要求嘅「被動→主動」轉折方向，轉折主體必須係晴香自己）。

- **Problem B（美夜子貓形點樣交實物）：**
  - **前提分類：**
    - CONFIRMED_CANON：貓形美夜子可以講人類語言（00_Story_Brief.html:8776「美夜子以黑貓的形態默默存在，口裡說著一切都只是職責」）；貓形有普通貓生理行為（M:302「行為像疲憊的大叔」：癱坐、嘆氣）；貓形有軍方戰術反射（M:113「深植於骨子裡的戰術反射動作」）；貓爪可發魔法光做戰鬥防護／攻擊（CDL-108：冰牆／爪擊／魔法光幕，呢個係物理力量透過爪施加喺目標物件上嘅已確認機制）。
    - **否決嘅推論跳躍：** 原方案用「貓爪亮起冰藍色魔法光芒（CDL-088，現實縫合用途）」推到「貓爪可以推／托舉實物交畀晴香」——發光係現實縫合（一種抹除／修補效果）呢個能力嘅視覺伴隨現象，唔等於佢具備「隔空操縱物件」嘅第二種能力。**呢個係 Premise Audit 明文禁止嘅跳躍**（「某能力有相關視覺效果」≠「具備另一項物理能力」），本輪否決。
    - **新方案嘅分類：** 美夜子事先準備定一個細急救袋（入面裝幾支葡萄糖注射槢），用身體／頭去撞／推呢個袋，令佢移到晴香腳邊（或者直接用口叼住袋嘅帶子遞過去——普通貓攞細袋、叼帶子係現實中貓都做得到嘅動作，唔需要任何魔法機制）；晴香自己彎身攞起。「貓用身體／頭推物件」同「貓叼住帶子」都屬於**普通貓生理行為**（同 M:302 已確立嘅「大叔式」肢體語言同一類別），分類做 STRICT_INFERENCE（有真實貓生理基礎，canon 冇逐字寫過但屬合理嘅同類延伸，風險遠低於魔法推拿）；而「佢準備定一個急救袋」（供應來源、幾時準備）仍然係 **NEW_PROPOSAL**。**HW 決定（PROVISIONAL_DEFAULT，唔上報作者）**：急救袋係美夜子「軍方戰術反射」（M:113）嘅延伸——佢本身有隨身準備應急物資嘅習慣，急救袋係呢個習慣嘅具體化，唔係一次性交代。呢個決定可逆、低損害、同 canon 相容（冇新增魔法規則，只係角色習慣嘅延伸），屬 MATERIAL 而唔係 DIRECTOR 級——唔影響角色核心意圖、主題或者不可逆嘅下游結構，由 Head Writer 處理就足夠。失效條件：如果完整版要寫明注射槢嘅正式供應鏈（例如同紗夜嘅黑市渠道扣連），要重做呢個細節；demo 內冇影響。
  - **採用：** 用急救袋（一個單一物件，入面裝幾支槢，解決數量斷鏈問題）＋貓用口或者身體推送呢個袋，唔用任何魔法操縱物件嘅講法。

FIELDS:
- beat_function: 世界規則輪廓說明（半真半假）＋晴香主動承諾延續自己已有嘅行為模式（由被動變主動，轉折主體＝晴香）；美夜子回應呢個承諾、同時迴避代價話題；美夜子孤立感首現；資訊唔完整感【合併原 N3＋N4，見 downstream_references】
- entry_state: 晴香聽完美夜子介紹使命嘅框架，站喺天台高處；美夜子保持功能性距離
- pressure_trigger: N（COST_SIGNAL_NOT_APPLICABLE——世界規則鋪陳＋晴香對已得資訊嘅反應，兩段都屬資訊交付／對話性質，BS:195）
- participant_intentions: 美夜子＝完成交代、暗地保護晴香唔知太多（唔講代價）、自己都想呢個美好版本係真嘅（共謀誤導）；晴香＝想確認自己可唔可以幫到人，呢個渴望扣連佢喺 E-01 已經做過嘅事（阻止抹走桐生健記憶）
- action: 美夜子講維多利亞天使使命：真＝對抗負面情緒（屍骸）、保護人；藏＝情感耗損、屍骸化風險、真正代價；畫面上高處俯視城市，地平線一抹暗紅。講到代價嗰邊，美夜子停咗、轉開視線——**晴香行到美夜子身邊，望住城市，講出佢想幫人嘅理由，並明確扣連 E-01 嗰次本能阻止**（即係話而家願意做「維多利亞天使」唔係新決定，係一路都係咁嘅人、而家先有名份）——**呢個係本 beat 嘅轉折（接受使命），由晴香主動完成**。晴香講完之後，美夜子先回應：用口／身體推送一個細急救袋（入面幾支葡萄糖注射槢）到晴香腳邊，只講一句「血糖低就用」，唔解釋點解會低【修訂：因果次序由「美夜子畀槢→晴香接受」倒轉為「晴香先承諾→美夜子後回應」】
- reaction: 晴香彎身攞起急救袋，自然噤收埋（當一件普通工具，未察覺重量）；美夜子完成咗交代但避開咗代價話題
- turn: 被動獲得能力（E-01 已有裝置）→ 主動接受使命（轉折完成喺晴香自己嗰句扣連 E-01 嘅承諾，唔係喺接過槢嗰刻）；美夜子由「講解」轉做「用行動回應晴香嘅承諾」
- consequence: 晴香正式接受維多利亞天使使命（由佢自己嘅發聲同行動完成，唔係由收到物件完成）；美夜子成功令晴香唔再追問代價（用交袋呢個行動分散追問時機，但呢個已經係承諾之後嘅第二件事，唔再頂住「接受」本身嘅戲劇重量）
- emotional_value_shift: 未知（世界規則）→ 有一個美好嘅解釋（偽亮色）；驚 → 希望（帶住驚，因為承諾嚟自已有嘅勇氣模式，唔係消除咗驚）
- relationship_delta: 美夜子對晴香＝共謀誤導（CDL-054）＋第一次用行動回應晴香嘅承諾（口硬身守延伸，CDL-060）；晴香對美夜子＝信任加深（晴香唔知自己被半真半假對待，但佢嘅承諾本身嚟自佢自己嘅性格，唔依賴對美夜子嘅信任程度）
- audience_info_delta: 觀眾得到世界規則輪廓；透過晴香扣連 E-01 嘅發聲，觀眾理解到「佢點解接受得咁快」（答案＝呢個唔係新決定，係佢一路嘅性格）；同時透過美夜子「停咗、轉開視線、用行動回應」，感到有嘢冇講完（P7）
- character_knowledge_delta: 晴香得到「真」嗰半，唔知被隱藏嗰半；美夜子知全部，但唔會講
- setup_payoff: Setup → P-A03（維多利亞天使信仰正式錨定，FM:19，Act III payoff）；Setup → 緋潮 Lv.1（P-A23，光度要弱過 E-04 Lv.2）；Setup → 葡萄糖注射槢實物鏈（街戰 B2 教學＋基地 M1 觸發起點，現在以急救袋形式出現，解決數量斷鏈同埋貓形操作可信度兩個問題）
- world_rule_exposure: 碎片化、唔完整（美夜子揀講乜唔講乜；減輕 HC-2e 張力）
- gameplay_form: 對話提示 UI（延續 N2）；【修訂】晴香「行到美夜子身邊」用簡單移動操作做承諾嘅實物化；美夜子回應（推送急救袋）後，玩家執行「攞起急救袋並放入物品欄」——即係話，「承諾」同「攞到工具」係兩個分開嘅玩家操作，次序配合劇情次序
- exit_state: 晴香有使命感（嚟自自己嘅承諾），身上有咗急救袋（幾支槢）；美夜子完成咗交代但冇講代價
- next_beat_pressure: 硬切（時間跳到「之後某日」屍骸入侵），純敘事銜接，唔係 cost signal
- source_obligation_trace: CDL-054（美夜子共謀誤導）；CDL-055（半真半假框架）；O:100（天台視覺語言）；CDL-176 第二條（緋潮 Lv.1）；CDL-053（拯救者情結被精準命中——而家用具體行為先例而唔係純標籤去兌現呢個 CDL）；CDL-355（晴香渴望根源＝生存框架／真心）；CDL-088／CDL-100（E-01 阻止抹走記憶、貼膠布「痛係證據」——新增，做晴香承諾嘅因果先例錨點）；00_Story_Brief.html:8776（貓形態可講話）；M:302（貓形普通肢體行為）；M:113（軍方戰術反射，支撐「準備定急救袋」嘅合理性）；GP:371（葡萄糖注射槢：夜區醫療黑市購買）
- downstream_references:
  - Scene Reference: 「妳點解會被選中」「裝置已綁定妳」「妳就係大眾嘅鎮靜劑」（BS:720-728，候選台詞，權威度低，待 Scene 層重新評估；「大眾嘅鎮靜劑」呢句可能同劇透守則有張力）
  - Directing Reference: 無既有 timing／鏡頭引用
  - **合併說明**：本 beat 取代原 v4 嘅 N3（使命說明）＋N4（接受），兩段功能全部保留；本輪修訂進一步將「接受」嘅因果主體由美夜子改為晴香，兩個戲劇拍子（說明→承諾、承諾→回應）依然可以喺 Scene 層分做兩個場景或鏡頭段落

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 12
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 晴香接受使命要符合「冇面具、真心」，而且速度要有實際因果，唔淨係標籤
- CURRENT_DESIGN: 承諾扣連 E-01 已做過嘅事（阻止抹記憶、貼膠布），即係話佢而家嘅選擇係已有行為模式嘅延續，唔係忽然嘅新決定
- RATIONALE: 「拯救者情結被精準命中」呢句原本係結論，冇展示過程；而家用一個具體、已經喺 E-01 發生過嘅行動做先例，令「快」有返個可追蹤嘅原因（佢一路都係會噤做嘅人），呢個正正係 Design Sufficiency 要求嘅「意圖→行動」唔可以有跳躍
- RISK_TRADEOFF: 風險係 Scene 層要具體演繹呢個扣連（唔可以淨係一句台詞交代完），需要畀返一兩個鏡頭嘅重量；代價係呢個 beat 嘅戲劇份量比原設計重咗少少
- DESIGN_ACTION: REVISE（已修訂：由標籤式總結改為具體行為先例）

### ANGLE: Method Necessity/Form Meaning（Problem A 核心）
- DESIGN_REQUIREMENT: 問點解接受使命一定要用「晴香主動發聲＋行到美夜子身邊」嘅形式，而唔係「接過物件」
- CURRENT_DESIGN: 採用 A1＋A2 合併方案（見 DESIGN_DECISION_RECORD），接受由晴香自己完成，交袋變成美夜子嘅後續回應
- RATIONALE: 「接過物件＝接受」將心理轉變嘅因果主體錯放咗喺美夜子身上（佢遞嘢，晴香先接受），但 beat_function 明確要求轉折主體係晴香（被動→主動，主動方必須係晴香）。如果轄接受嘅原因係「因為美夜子畀咗槢」，就同「主動」呢個詞矛盾——主動應該嚟自晴香自己嘅發聲同行動
- RISK_TRADEOFF: 代價係呢個 beat 而家需要晴香有一句扣連 E-01 嘅具體發聲，比純粹「接過物件」嘅執行難度高（要兼顧唔講到太長、唔變成講道理）；呢個風險已經喺 Character Growth 角度標記
- DESIGN_ACTION: REVISE（Problem A 嘅主要修正）

### ANGLE: World Rule/Mechanic Pressure（身體形態可行性，Problem B 核心）
- DESIGN_REQUIREMENT: 美夜子全程貓形態（CDL-108），呢個 beat 要求佢將實物交畀晴香，要確保呢個動作喺貓嘅身體形態下可信，唔可以用冇根據嘅能力跳躍
- CURRENT_DESIGN: 否決「貓爪魔法光芒推物件」（發光≠隔空操縱，係禁止嘅推論跳躍）；改用「貓用口叼帶子／用身體推」一個細急救袋——呢個係普通貓生理行為，唔需要任何魔法機制
- RATIONALE: Premise Audit 強化規則明文禁止「某能力有相關視覺效果」直接當「具備另一項物理能力」；呢個設計完全移除魔法成分，改用現實中貓都做得到嘅動作（叼袋、推動），將呢個設計由 INFERENCE（之前）降到接近 CONFIRMED（普通生理行為，M:302 已確立貓肢體語言嘅先例）
- RISK_TRADEOFF: 代價係急救袋入面「有幾支槢」呢個供應來源本身仍然係 NEW_PROPOSAL／PROVISIONAL，未解決（見下 Gameplay 角度）；但呢個已經係本輪可以收窄嘅最細缺口
- DESIGN_ACTION: REVISE（Problem B 嘅主要修正）

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 控制揭露份量——真嗰半講出嚟，藏嗰半用行為暗示
- CURRENT_DESIGN: 半真半假框架不變；隱藏嗰半依然用「停咗、轉開視線」表達，交袋依然承擔「迴避代價」嘅功能（只係唔再兼任「觸發接受」）
- RATIONALE: 修訂冇改變 Information/Reveal Control 嘅原有設計，只係將「交袋」嘅第二個功能（觸發接受）拆走，令佢專注做一件事（迴避代價）
- RISK_TRADEOFF: 冇新增風險
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 美夜子嘅共謀誤導要有行為痕跡；而家因果次序改咗，要確保美夜子嘅回應依然符合佢嘅角色設定
- CURRENT_DESIGN: 美夜子依然用行動（遞袋）代替語言表達關心（CDL-060 延伸）；只係而家呢個行動係「回應」晴香嘅承諾，唔係「觸發」佢
- RATIONALE: 「回應」呢個定位其實更貼合美夜子嘅性格——佢唔會主動開啟情感表達，但會對已經發生嘅事做功能性回應（遞實用工具），呢個同「主動安慰」有本質分別，符合佢一直嘅距離感設定
- RISK_TRADEOFF: 風險係畀美夜子嘅溫柔程度要控制，唔可以太明顯（姊妹關係要到 Act III 先揭露）
- DESIGN_ACTION: VERIFY（Scene 層要控制美夜子回應嘅溫柔程度）

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: 三條跨幕／跨 beat setup 要清楚標記去向，改動唔可以令任何一條斷鏈
- CURRENT_DESIGN: P-A03、緋潮 Lv.1、注射槢實物鏈三條全部保留；注射槢改用急救袋形式，數量斷鏈問題（「幾支」vs M1「最後一支」）喺呢個設計下更自然（一個袋入面有幾支，用完先叫「最後一支」）
- RATIONALE: 急救袋嘅形式反而令數量邏輯更清晰（唔再係「點解美夜子逐支逐支攞出嚟」，而係「一個袋，用到剩一支」）
- RISK_TRADEOFF: 緋潮 Lv.1 光度要求不變，留俾 Scene 層
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 觀眾要感到「少少不安」但唔可以具體連結到魔法代價；同時而家要清楚讀到「晴香點解咁快答應」
- CURRENT_DESIGN: 不安嚟自美夜子嘅停頓同冇解釋嘅急救袋；「咁快答應」嘅理解嚟自晴香明確扣連 E-01 嘅發聲
- RATIONALE: 兩個資訊需求（少少不安、理解速度）而家由兩個唔同嘅行動分別負責（美夜子嘅迴避＝不安；晴香嘅扣連發聲＝速度解釋），冇互相干擾
- RISK_TRADEOFF: 風險係如果晴香嘅扣連發聲講得太長，會削弱「快」嘅感覺本身——Scene 層要控制呢句嘅長度，一兩句就要完成
- DESIGN_ACTION: VERIFY（Scene 層控制晴香發聲嘅長度，唔可以變成一大段解釋）

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 美夜子揀講乜唔講乜要戲劇化主題，而家晴香嘅主動承諾加埋另一層主題材料
- CURRENT_DESIGN: 標 THEME_EXPLICIT——美夜子嘅隱藏行動（保護同欺騙同時發生）＋晴香嘅主動承諾（驚但仍然選擇延續自己嘅行為模式，態度 vs 命運嘅直接示範）兩層並存
- RATIONALE: 晴香呢層新增嘅主題材料比原設計（純粹「接受得快」）更扎實——佢唔係因為一個新嘅渴望被命中而答應，而係因為佢一路都係噤樣嘅人，呢個正正係「態度」（佢點樣做人）凌駕於「命運」（忽然嘅新身份）嘅示範
- RISK_TRADEOFF: 冇新增風險，呢個係本輪修訂嘅正面收穫
- DESIGN_ACTION: KEEP（經修訂後主題表達更強）

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低兩個角色呢一刻知／唔知乜
- CURRENT_DESIGN: character_knowledge_delta 不變（晴香得真嗰半，美夜子知全部但唔講）
- RATIONALE: 因果次序改咗，但知情狀態本身冇變
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保新增引用（E-01 先例、貓形講話／肢體行為先例）準確
- CURRENT_DESIGN: source_obligation_trace 加入 CDL-088／CDL-100（E-01 先例）、Brief:8776（貓形講話）、M:302／M:113（貓形肢體行為同戰術反射）
- RATIONALE: 每條新引用都經本輪親自核對原文（唔係憑印象），貓形講話呢條尤其重要——如果呢條冇confirmed，全個 N2／N3 嘅對話設計都會有問題，而家已經確認係 confirmed canon
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 「承諾」同「攞到工具」而家係兩個分開嘅玩家操作，要確保次序清晰、冇混淆
- CURRENT_DESIGN: 玩家先操作晴香行到美夜子身邊（承諾嘅實物化），然後先攞急救袋入物品欄
- RATIONALE: 兩個操作分開令玩家清楚感受到「我而家做咗一個選擇」同「我而家攞到一件工具」係兩件唔同嘅事，唔會混淆成「攞到工具就等於做咗選擇」
- RISK_TRADEOFF: 「美夜子點樣準備定呢個急救袋」依然係 NEW_PROPOSAL——完整版如果要寫明正式供應鏈，要重做呢個細節
- DESIGN_ACTION: KEEP（HW 決定：急救袋＝美夜子軍方戰術反射嘅習慣延伸，PROVISIONAL_DEFAULT，可逆、唔影響核心創作方向，唔上報作者；見 DESIGN_DECISION_RECORD）

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: N3 依家揩負兩個戲劇拍子（說明＋承諾／回應），要確保合併後唔會過載或倉促
- CURRENT_DESIGN: beat_function／action 欄分開寫三個清晰段落（講述 → 晴香承諾 → 美夜子回應），downstream_references 明確講可以分場景
- RATIONALE: 修訂後拍子數目由兩個（原設計：講述、接受）變成三個（講述、承諾、回應），但每個拍子都更短、更明確，整體唔會比原設計長好多
- RISK_TRADEOFF: 風險係三個拍子如果冇留白會顯得趕；已經喺 downstream_references 提示 Scene 層可以分場景處理
- DESIGN_ACTION: VERIFY（Scene 層落場時決定三個拍子點樣分配時間）

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀 13 個真正相關角度，覆蓋原功能＋本輪兩個核心問題嘅全部修正
