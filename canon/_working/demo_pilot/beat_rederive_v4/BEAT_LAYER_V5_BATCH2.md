DELIVERY_STATUS: DELIVERY_READY

<!--
BEAT_LAYER_V5 — BATCH 2：紫音入隊場景（正式製作，用 BEAT_LAYER_DEEP_DESIGN mode）
內容由作者直接討論定案（2026-10-10/11），由我整理落正式格式。
0 sub-agent；0 改 skill；0 改 canon；0 新盲審。
範圍變更聲明：呢批內容**推翻咗之前「去紫音」嘅 demo 範圍決定**（原本 DERIVATION_LEDGER §12.1 AD）——作者本輪直接決定紫音要入返嚎。連帶影響：原本標「紫音缺席、功能未補」嘅 REVALIDATE 項目（M3 分工）而家自動解決咗，唔再係缺口。
本批只完成 B8 嘅輕量追加（唔重做全份 field contract，因為 B 系列仲未經過 deep-design mode 處理，呢次只加一個元素）同新 M1（全套 deep-design 格式）。M2–M5 嘅人數（三人→四人）同紫音分工調整留俾下一批，未做。
-->

## B8 追加（輕量，唔係全份 field contract——B 系列留返下次正式處理）
B8（戰後安全區，暖收束）原有內容唔變，**追加一個元素**：大屍骸消散前後、三人仍喺善後嗰刻，一個模糊身影喺遠處閂入、閂出，速度快到睇唔清係乜，冇人嚟得切反應。呢個係一個純粹嘅懸念鏡頭，唔解釋、唔追——為 M1 做鋪墊（canon CDL-139 要求入隊前要有 1–2 次「搶怪黨」神秘出現嘅印象）。
Source：CDL-139（③需要 1–2 次搶怪黨出現建立紫音野性印象）。
狀態：PROVISIONAL（細節、鏡頭留 Scene 層）。

---

## BEAT: M1
STATUS: PROVISIONAL

DESIGN_DECISION_RECORD:
- CHALLENGE_GATE：本 beat 嘅具體內容（紫音搶尾刀、戒斷倒地、晴香餵糖、紫音跟隨）係作者本輪直接討論定案，唔係我提方案畀作者揀——即係話呢步唔需要我生成比較方案，Challenge Gate 嘅五條問題用嚎**檢查作者方案本身夠唔夠因果充分**，唔係重新比較替代方案：
  1. 不可取代嘅戲劇功能＝紫音正式入隊；補給見底（基地戲觸發點）；打開「紫音係邊個」嘅謎（承接 B8 追加）。值得獨立存在。
  2. 現有設計（搶尾刀→倒地→餵糖→跟隨）足唔足以產生「紫音入咗隊」呢個宣稱嘅轉變？——**足以**，因為呢個因果鏈直接係 canon 已經寫好嘅完整場景（CDL-052），唔係我自己砌嘅，有具體畫面同對白支撐，唔靠標籤。
  3. 有冇靠標籤代替因果？——冇；「戰鬥狂，打怪唔需要理由」呢句本身就係紫音嘅已確立身份（iwakura_akane.md L25「戰鬥成癮者」、L47「戰鬥成為她的精神毒品」），唔係我發明嘅標籤去掩蓋冇諗清楚嘅動機，佢本身就係完整嘅角色設定。
  4. 刪除／合併／換表現方式會唔會更好？——本輪討論已經將「情緒核心」（未做實嘅設定）刪走，改成「搶尾刀」（更簡單、更貼紫音「搶怪黨」字面意思）；呢個已經係討論過程中做咗嘅修訂，唔需要再比較。
  5. 已答（見第 1 點）。
- SUFFICIENCY：
  - 動機成立（Character Motivation）：紫音見怪就撲，唔需要額外理由——已確立嘅戰鬥成癮身份直接撐住，唔靠「以前做過乜」去跳到「今次肯做乜」，佢嘅行為一致、唔靠單次事件推論。
  - 觀眾理解成立（Audience Comprehension）：觀眾唔需要知道紫音嘅背景就睇得明呢場戲——表面故事（一個古怪嘅女仔搶尾刀、攰到暈、食糖、跟住走）完整自足，唔靠任何觀眾未見過嘅材料。佳嘅真正問題（毒品戒斷）刻意唔畀觀眾知，呢個係設計意圖（CDL-158），唔係缺口。
  - 行動到後果成立（Action-to-Consequence）：「紫音跟隨」嘅後果直接由「食糖」呢個具體行動產生（canon 原文：「久違的人的微小善意令紫音大腦當機」），唔係憑空宣稱。
  - 玩家能動性成立（Player Agency）：玩家喺呢場戰鬥入面嘅操作同之前（B1–B7）一樣，冇新教學負擔；餵糖嗰下玩家可能只係睇一個過場，呢個記喺下面 Gameplay 角度，誠實標低風險唔係機制問題。
- 剩餘要作者知道嘅風險（唔係阻斷，但要你知）：**本批內容會令 demo 嘅長度／製作量明顯增加**——加多一場完整戰鬥、加多一個全新角色（紫音，需要獨立嘅模型、動作、表演），對一個原本定位做「方法試驗」嘅 demo 嚎講，係一個唔細嘅範圍擴張。呢個喺下面 Production Complexity 角度詳細講，但喺度先講明：呢個係一個關於 demo 範圍嘅決定，可能值得你諗一諗，而唔係由我自己悄悄吸收咗呢個成本。

FIELDS:
- beat_function: 紫音二次出現（戰鬥狂搶尾刀）；戒斷倒地（Act I 只讀做低血糖／攰，真相留 Act II）；晴香餵糖；紫音由此跟隨（入隊）；同時令補給用盡，成為下一步（去學校攞補給）嘅觸發點
- entry_state: 晴香／美夜子／操三人已經係隊友（承 B8）；B8 尾已經有一個睇唔清嘅神秘身影鏡頭；三人呢度遇上另一隻（規模較細嘅）屍骸——呢場係獨立事件，唔係首戰延續
- pressure_trigger: R（REQUIRED）——外部事件：新屍骸出現（燈塔效應引嚎，可以係紫音自己嘅燈塔，唔一定係呢三人嘅）；呢場戰鬥會用盡佳哋最後一支葡萄糖針（資源見底，為下一 beat 鋪路）
- participant_intentions: 三人＝清怪求存；紫音＝純粹戰鬥成癮者見怪就撲，冇額外目的，打贏之後想搶走擊殺（搶怪黨本能）
- action: 戰鬥中，B8 尾見過嘅身影再次出現，用誇張、唔計後果嘅打法衝入戰團，搶咗最後一下殺咗屍骸——三人今次先第一次睇清楚係個女仔。三人嘅最後一支葡萄糖針喺呢場戰鬥用咗。紫音未等三人反應就想閂走，但行冇幾步，忽然力竭倒地，手震、抽搐、眼神散——表面似係低血糖／攰到癱
- reaction: 晴香即刻衝過去，見佳攰得好嚴重，喺袋裡摷到最後一粒珍寶珠（波板糖），剝開塞入紫音口，講：「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。」
- turn: 紫音食完，一陣沉默嘅呆滯——一個好耐冇試過、唔求回報嘅小小善意，令佳反應唔到；佳最後冇講乜，但起身默默跟住三人走，由始敵視／陌生，變成「似隻畀人餵食過嘅流浪狗」咁跟隨
- consequence: 紫音事實上入咗隊（未經正式邀請或者對話確認，純粹用行動跟住走）；團隊由三人變四人；最後一支葡萄糖針用咗＝補給見底，直接觸發落一個 beat（去學校攞補給）
- emotional_value_shift: 三人對一個神秘威脅嘅警戒 → 對一個古怪但冇惡意嘅新成員嘅接納（未完全熟悉）
- relationship_delta: 晴香對紫音＝純粹善意（唔知背後原因，見到有人攰餓住想幫）；紫音對晴香＝深層觸動（表面機制未講明，真正原因留 Act II：佳將貓形美夜子視為「搵屍骸嘅工具」，而晴香嘅天真善良令佳諗起死去嘅細佬，觸發痛苦嘅保護慾）；美夜子／操對紫音＝陌生、保持距離（未熟）
- audience_info_delta: 觀眾知道有第四個人加入隊伍，知道佳攰倒嘅表面原因（似低血糖／攰）；觀眾唔知紫音真正嘅問題（情緒毒品戒斷）——刻意留返 Act II 先揭露
- character_knowledge_delta: 晴香當紫音係普通攰親，唔知真相；紫音自己知道真相但唔講
- setup_payoff: Setup → 紫音真正嘅毒品戒斷（Act II 揭露，range 外，demo 唔收 payoff）；Setup → 戒斷行為嘅輕量暗示（手震／暴躁／瘋狂揾甜食，Act I 許可展示嘅程度，CDL-158）；Payoff（demo 內）→ 補給用盡，直接觸發落一個 beat
- world_rule_exposure: 隱形揭示（紫音嘅「古怪」只睇得出少少，唔講明原因）
- gameplay_form: 短戰鬥（可玩，用返同 B1–B7 一樣嘅戰鬥系統，冇新教學）；紫音自動加入戰鬥（NPC 介入，玩家唔直接操控佳，避免加重教學負擔）；戰後一個簡短互動（晴香行過去、剝糖、餵糖，玩家按鍵觸發）
- exit_state: 四人（連紫音）企喺度；補給見底；下一步要搵地方補給同安置紫音
- next_beat_pressure: R——補給見底加多咗一個人，逼三人要去搵地方（學校）
- source_obligation_trace: CDL-052（入隊場景全文：搶怪黨、糖對白、「大腦當機」、「流浪狗」比喻全部源自呢條，SOURCE_FACT）；CDL-139（E-02.5 時機、1–2 次搶怪鋪墊先入隊，SOURCE_FACT）；CDL-158（Act I 戒斷行為＝輕量暗示，觀眾初讀＝低血糖，真相留 Act II，SOURCE_FACT）；iwakura_akane.md L25/L47/L211（戰鬥成癮者身份，戰鬥本身係佳嘅精神毒品，打怪唔需要額外理由，SOURCE_FACT）；iwakura_akane.md L120/L127/L130（戰鬥帶來嘅寧靜、承認渴望連結、淨係戰鬥/毒品先可以忘記——支撐佳點解對一粒糖有咁大反應，SOURCE_FACT）
- downstream_references:
  - Scene Reference: 糖對白原句「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎」（CDL-052，已鎖，Scene 層直接用）
  - Directing Reference: 無既有 timing／鏡頭引用
  - **位置偏離記錄（REQUIREMENT_CHANGE，demo 專用）**：canon 原文寫紫音戒斷倒地嘅位置係「黃昏／深夜後巷」，獨立於團隊戰鬥之外；demo 改為緊接住另一場小型戰鬥發生，地點係街頭／巷口。偏離理由：demo 要將「補給見底」同「紫音入隊」兩件事綁埋一齊發生，減少一個獨立場景嘅製作量；內容精神（戰鬥後、僻靜處、能量耗盡）不變。完整版如果要還原獨立後巷場景，呢個偏離要 REVALIDATE。

PER_BEAT_DESIGN_RATIONALE:
ANGLES_SELECTED: 14
### ANGLE: Character Growth
- DESIGN_REQUIREMENT: 紫音入隊一刻要同佳已確立嘅心理（戰鬥成癮、保護慾創傷根源）扣連，唔可以純粹係「俾個糖就肯跟」咁單薄
- CURRENT_DESIGN: 「大腦當機」同「流浪狗」比喻直接引用 canon；原因扣連佳對死去細佬嘅記憶（晴香嘅天真善良令佳諗起細佬，觸發保護慾）
- RATIONALE: 呢個轉折表面好細（食粒糖），但底層心理份量好重（久違嘅善意），canon 原文已經寫明呢個心理機制，唔需要我另外發明
- RISK_TRADEOFF: 風險係 Scene 層如果冇畫面表達到呢個心理重量，會顯得「俾粒糖就肯跟」太兒戲；要留一拍畀紫音嘅「呆滯」有足夠停留時間
- DESIGN_ACTION: KEEP

### ANGLE: Relationship Dynamics
- DESIGN_REQUIREMENT: 紫音同三人嘅關係要清楚標記係「單方面跟隨」，唔係雙向信任
- CURRENT_DESIGN: relationship_delta 寫明晴香單純善意，美夜子／操保持距離，紫音單方面跟隨
- RATIONALE: 呢個唔對等嘅關係狀態符合「未熟」嘅團隊現實，為後面（完整版）嘅關係深化留空間
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Coping/Defense Mechanism
- DESIGN_REQUIREMENT: 紫音嘅戰鬥成癮係佳嘅 coping（用暴力壓住對細佬死咗嘅痛），呢個 beat 唔可以令佳「俾粒糖就冇咗呢個 coping」
- CURRENT_DESIGN: 本 beat 只係一個細裂縫（被善意觸動咗一刻），冇改變佳嘅戰鬥成癮本質；consequence 冇寫「佳戒咗癮」
- RATIONALE: 一個 Act I beat 唔可以解決一個要留到 Act III 先完結嘅角色弧——呢度只係種子，刻意唔收尾
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Information/Reveal Control
- DESIGN_REQUIREMENT: 觀眾必須讀呢場戲做「低血糖／攰」，唔可以讀出「毒品戒斷」——呢個係最關鍵嘅紅線
- CURRENT_DESIGN: action／reaction 欄完全冇用「戒斷」「毒品」呢類字眼嘅視角描述表面畫面；character_knowledge_delta 明確標「觀眾唔知真正問題」
- RATIONALE: CDL-158 明文要求 Act I 只可以輕量行為暗示，E-02.5 本身就係一個「誤導設計」——表面溫馨、Act II 先翻轉，呢個反差本身係故仔要嘅武器，demo 唔可以提早拆穿
- RISK_TRADEOFF: 風險最高嘅一格——如果 Scene 層畫面畫得太明（例如畀紫音袋裡面漏出針筒），就會提早劇透 Act II 嘅反轉；要嚴格控制淨係用「手震、眼神散」呢類中性身體訊號
- DESIGN_ACTION: VERIFY（Scene 層要嚴格把關，呢個紅線唔可以鬆）

### ANGLE: Setup/Payoff
- DESIGN_REQUIREMENT: Act II 嘅毒品揭露要留住，demo 唔可以偷步收埋
- CURRENT_DESIGN: setup_payoff 明確標「range 外，demo 唔收 payoff」
- RATIONALE: 同之前幾個 beat 一致嘅紀律——demo 只種唔收
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Canon/Continuity/Ownership
- DESIGN_REQUIREMENT: 確保引用準確，位置偏離要老實標記
- CURRENT_DESIGN: CDL-052/139/158 逐一核實原文；位置由「獨立後巷」改為「緊接另一場戰鬥」嘅偏離已經喺 downstream_references 標記做 REQUIREMENT_CHANGE
- RATIONALE: 呢個係一個刻意嘅、有講明理由嘅偏離，唔係靜靜改
- RISK_TRADEOFF: 完整版要 REVALIDATE
- DESIGN_ACTION: KEEP

### ANGLE: Audience Experience/Knowledge Gap
- DESIGN_REQUIREMENT: 零前情玩家突然見到第四個角色加入，會唔會覺得冇啦啦、唔明點解
- CURRENT_DESIGN: B8 追加嘅神秘身影鏡頭做咗鋪墊，令紫音出現唔係完全冇預告
- RATIONALE: 「睇過一次模糊身影，再喺呢度見到同一個身影做返同一件事（搶尾刀）」比起完全冇鋪墊就拋一個新角色出嚎，更容易被玩家接受
- RISK_TRADEOFF: 風險係如果 B8 嗰個鏡頭太短／唔夠清楚，玩家可能完全冇留意到，兩者冇連埋
- DESIGN_ACTION: VERIFY（Scene 層要確保 B8 嘅鏡頭雖然朦，但要畀玩家事後回想得起「係嗰個」）

### ANGLE: Gameplay/Player Agency
- DESIGN_REQUIREMENT: 玩家喺呢場戰鬥嘅操作唔應該同 B1–B7 完全一樣（會悶），但亦唔應該加重教學負擔
- CURRENT_DESIGN: 戰鬥系統沿用，紫音做 NPC 自動介入（玩家唔操控佳）；餵糖嗰下有一個簡單按鍵互動
- RATIONALE: 保持玩法簡單，重點落喺敘事（紫音出現、入隊），唔喺機制上加新負擔
- RISK_TRADEOFF: 代價係玩家對呢場戰鬥嘅能動性偏低（主要係睇紫音表演），但呢個係合理取捨，因為呢個 beat 嘅重點本身唔係玩法
- DESIGN_ACTION: KEEP

### ANGLE: Redundancy/Function Overlap
- DESIGN_REQUIREMENT: 檢查呢場戰鬥會唔會同 B1–B7 嘅街頭大戰功能重複（兩場都係「打怪」）
- CURRENT_DESIGN: 呢場戰鬥嘅戲劇重點唔係打怪本身，而係紫音出現；戰鬥部分刻意從簡（唔重複教學，唔重複連結機制）
- RATIONALE: 兩場戰鬥嘅功能分清楚：B1–B7＝操入隊＋核心機制教學；M1＝紫音入隊＋補給見底，戰鬥只係載體，唔係重點
- RISK_TRADEOFF: 風險係如果 Scene 層將呢場戰鬥拍得同第一場一樣長／一樣仔細，玩家會覺得「又打多次」，要控制呢場戰鬥嘅長度明顯短過第一場
- DESIGN_ACTION: VERIFY（Scene 層要確保呢場戰鬥明顯短過第一場，避免重複感）

### ANGLE: Pacing/Breathing
- DESIGN_REQUIREMENT: 整個 demo 加多一場戰鬥，要評估呢個對成體節奏嘅影響
- CURRENT_DESIGN: 呢場戰鬥設計得短（見上 Redundancy 角度），功能集中喺紫音登場
- RATIONALE: 盡量將呢個新增內容對節奏嘅影響壓到最低，但呢個始終係加長咗成個 demo
- RISK_TRADEOFF: **demo 總長度明顯增加**（原本三段變成四段：消化承諾／街戰操入隊／紫音入隊／基地），呢個係一個範圍決定，已經喺 DESIGN_DECISION_RECORD 開頭標明要你知
- DESIGN_ACTION: NEEDS_AUTHOR_DECISION（唔係故事邏輯問題，係 demo 範圍／長度決定——你想要完整講紫音入隊，定係想要個更短嘅 demo，呢個真係要你決定，唔係我可以自己揀嘅執行細節）

### ANGLE: Theme Expression
- DESIGN_REQUIREMENT: 一粒糖嘅細小善意，壓過一個人成世用暴力壓住嘅痛——要同成個故仔嘅「溫柔的殘酷」美學扣連
- CURRENT_DESIGN: THEME_EXPLICIT——晴香嘅善意（無心、唔求回報）同紫音嘅痛（戰鬥成癮、保護慾創傷）直接碰撞，紫音嘅反應（大腦當機）就係呢個碰撞嘅結果
- RATIONALE: 呢個完全符合故仔嘅核心信條——用最輕嘅畫面（一粒糖）承載最重嘅情感真相，唔需要解釋
- RISK_TRADEOFF: 冇新增風險，呢個係好強嘅主題材料
- DESIGN_ACTION: KEEP

### ANGLE: Method Necessity/Form Meaning
- DESIGN_REQUIREMENT: 點解一定要用「糖」，唔用其他物件
- CURRENT_DESIGN: 用canon 已鎖嘅珍寶珠（波板糖）
- RATIONALE: 糖呢個物件剛好同成個 demo 已經運行緊嘅「血糖／糖分」母題（熱可可、葡萄糖針、基地食甜品）連埋一齊，變成一條貫穿全 demo 嘅意象線——呢個唔係我特登設計，但剛好夾中，值得保留
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Character Knowledge State
- DESIGN_REQUIREMENT: 清楚記低紫音自己知乜、其他人知乜
- CURRENT_DESIGN: character_knowledge_delta 已經寫明
- RATIONALE: 保持同之前幾個 beat 一致嘅記錄方式
- RISK_TRADEOFF: 冇風險
- DESIGN_ACTION: KEEP

### ANGLE: Production Complexity/Scope
- DESIGN_REQUIREMENT: 紫音係一個全新角色，需要獨立嘅模型、動作（戰鬥狂嘅誇張打法、戒斷嘅手震抽搐）、同埋呢場新戰鬥嘅場景
- CURRENT_DESIGN: 未簡化，照原方案做
- RATIONALE: 呢個係誠實嘅製作成本評估，唔係故事問題
- RISK_TRADEOFF: 對一個「方法試驗」性質嘅 demo 嚎講，加一個全新角色嘅製作量唔細——呢個同上面 Pacing 角度嘅「範圍決定」係同一件事嘅兩面（一個講時間長度，一個講製作資源），一齊畀你考慮
- DESIGN_ACTION: NEEDS_AUTHOR_DECISION（同 Pacing 角度嗰條一齊決定）

DEPTH_EXCEPTION_NEEDS_REVIEW: N/A — 已揀14個真正相關角度
