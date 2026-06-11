'use strict';
// Project Haruka Story Dashboard — Data Layer v2.1
// [Generated 2026-06-11] [Visualization only — NOT a canon document]
// Source of truth: canon/_working/story_construction/

window.SD = {};

// ─── 1. META ────────────────────────────────────────────────────────────────
SD.meta = {
  generated: "2026-06-11", version: "2.1",
  note: "Visualization layer only. Not a canon document. See canon/_working/ for authoritative files.",
  acts: { I:"起 (Act I)", II:"承 (Act II)", III:"轉 (Act III)", IV:"合 (Act IV)", "前史":"前史" },
  lines: { Alpha:"Alpha線 (低魔現實)", Beta:"Beta線 (晴香創世高魔世界)", mixed:"跨線" }
};

// ─── 2. CHARACTERS ──────────────────────────────────────────────────────────
SD.characters = [
  { id:"CHAR-001", name:"晴香", full:"春日井晴香 / 連若晴 (Haruka)", role:"protagonist",
    color:"#e879f9",
    arc:"逃避者 → 英雄 → 失敗的英雄 → 承受者",
    states:{ "前史":"—", I:"脆弱明亮感+不安陰影；情感耗損開始", II:"英雄孤獨感；力量增長但內在萎縮", III:"徹底無力感；創世者罪責揭露（帝國廣場）", IV:"善意牢籠覺醒 → 自我整合 → 靜止搖籃" },
    coping:"用持續救人迴避面對自己是災難根源的可能性",
    secrets:["5歲時無意識創造Beta線世界，是緋潮根源","世界最終將她索回作維持新秩序代價"],
    dirs:["DIR-001","DIR-002","DIR-005","DIR-009","DIR-011","DIR-013","DIR-014","DIR-015"] },

  { id:"CHAR-002", name:"美夜子", full:"雨宮美夜子 / 水無月美夜子 (Miyako)", role:"mentor_partner",
    color:"#38bdf8",
    arc:"冰冷功利感 → 破冰 → 悲壯燃盡 → 倖存者/繼承人",
    states:{ "前史":"Alpha線已死亡；Beta線拼接式復活", I:"冰冷功利感；將晴香視為工具", II:"漸進破冰（CDL-191）；軟轉折點", III:"悲壯燃盡；20年守望集體潛意識；三段式覺醒", IV:"倖存者；用吉他演奏晴香最後的曲子；朔重逢" },
    coping:"用功利性框架和距離感保護自己免受失去晴香的恐懼",
    secrets:["是晴香Alpha線的大家姐，Beta線晴香不知","避難所詛咒：心理防線崩潰時強制變貓（CDL-243）"],
    dirs:["DIR-001","DIR-002","DIR-003","DIR-008","DIR-009","DIR-010","DIR-013","DIR-014"] },

  { id:"CHAR-003", name:"彩/黑奏", full:"彩 / 黑奏 (Sai / Kurosou)", role:"villain_dual",
    color:"#f97316",
    arc:"陰影/偽裝 → 威嚴裂痕 → 彩主人格覺醒 → 黑奏消散 → 彩永恆輪迴",
    states:{ "前史":"螢死亡→黑奏形成；Alpha線預謀殺死花子+美夜子", I:"彩偽裝轉學生；E-1.5晴香目睹切換", II:"幕後威嚴感；漸進暗示（極微弱）", III:"威嚴裂痕；茶會真身揭露；情感核彈L1+L2+L3", IV:"彩主人格覺醒；黑奏消散；彩永恆輪迴（自選）" },
    coping:"黑奏承擔彩所有無法承受的痛苦；用農場計劃將「恢復螺」轉化為結果主義目標",
    secrets:["農場計劃：以緋潮情緒能量積累『情感貨幣』以恢復螢","黑奏主動殺死Alpha線花子+美夜子令晴香創世"],
    dirs:["DIR-001","DIR-002","DIR-004","DIR-007","DIR-013","DIR-015"] },

  { id:"CHAR-004", name:"夕", full:"夕 / 菲 (Yu/Fei)", role:"shadow_entity",
    color:"#a78bfa",
    arc:"不對勁噪訊 → 首次整合 → 暗示創世者 → 沉睡 → 被迫接管→主動取控 → 消散",
    states:{ "前史":"晴香第一次改變現實的情緒守恆代價", I:"植入不對勁噪訊；首次整合（Act I幕末）", II:"暗示晴香是創世者；晴香知而拒絕承認", III:"暫時沉睡（E-10後）→ 被迫接管→主動取控（E-18）", IV:"改變現實→反悔→用自身力量undo→力量耗盡消散" },
    coping:"夕完全唔知情（不知黑奏農場；BD-12 RESOLVED）",
    secrets:["承載晴香壓抑的痛苦記憶+Alpha線真實","5歲形態：時間錨點+自我對峙+榮格創傷凍結（CDL-221）"],
    dirs:["DIR-005","DIR-011","DIR-013","DIR-014"] },

  { id:"CHAR-005", name:"朱音", full:"朱音 / 屍骸女王 (Akane)", role:"team_member",
    color:"#fb7185",
    arc:"隊伍羈絆 → 情緒毒品依賴 → 今晚我哋還在 → 嘆息之橋自毀",
    states:{ "前史":"—", I:"隊伍羈絆建立；膠布哲學L2批判者（第一個質疑晴香善意的人）", II:"情緒毒品依賴加深；小光被攻擊→屍骸化→屍骸女王", III:"完整犧牲：糖晶硬殼→逃入下水道→嘆息之橋自毀", IV:"缺席（犧牲）" },
    coping:"用護理行為（保護小光）轉移對自身創傷的關注",
    sacrifice:"「我無治癒成功。我依然係爛泥。但我起碼知道一樣嘢……我唔想再一個人食飯。」",
    dirs:["DIR-006","DIR-011","DIR-015"] },

  { id:"CHAR-006", name:"操", full:"綾小路操 (Misao)", role:"team_member",
    color:"#34d399",
    arc:"完美主義/形式主義 → 自我放逐 → 主動選擇半屍骸化（三位一體）",
    states:{ "前史":"家道中落；父親視她為瑕疵作品；管家紗夜庇護", I:"形式主義；父親「瑕疵作品」陰影（輕量暗示）", II:"操Body Horror三段（Stage1牙齦滲血→Stage2絲線縫牙→Stage3黑奏揭露）；凜崩潰後心理衝擊", III:"主動選擇半屍骸化臨界點；紗夜犧牲；台詞：「我選擇停留在我想停留的位置。」", IV:"半屍骸歸來；三位一體視覺化" },
    coping:"用完美形式主義偽裝（避免被他人視為「瑕疵」而被拋棄）",
    dirs:["DIR-006","DIR-011"] },

  { id:"CHAR-007", name:"凜", full:"綾瀨凜 (Rin)", role:"unit00",
    color:"#64748b",
    arc:"原初犧牲 → 屍骸獵人 → 拒絕治癒 → Unit 00",
    states:{ "前史":"為美夜子犧牲，被帝國光環扭斷頸部處決；被黑奏救回利用", I:"缺席（前史）", II:"屍骸獵人形式（著制服）；美夜子發現凜仍alive=震驚觸發點", III:"拒絕治癒→Unit 00（E-15a）；遲來的介錯：嘴巴張開/氣音無遺言", IV:"缺席（Unit 00）" },
    tragedy:"晴香佔了那個位置——凜本想以歌聲救人，但那個位置給了晴香",
    dirs:["DIR-008"] },

  { id:"CHAR-008", name:"朔", full:"白銀朔 (Saku)", role:"liberator",
    color:"#fbbf24",
    arc:"夜區影子 → 學識三位一體 → 解放者覺醒 → 重逢，接受美夜子已改變",
    states:{ "前史":"—", I:"夜區影子過場（[SQ]可選，CDL-090）", II:"獨立戲份啟動；學識三位一體", III:"解放者覺醒（脫離管理局，E-16嵌入）；觸發器：「保護的殘響」", IV:"重逢；接受美夜子已改變的事實" },
    dirs:["DIR-010","DIR-011"] },

  { id:"CHAR-009", name:"愛莉", full:"東雲愛莉 (Aeri)", role:"saint_knight",
    color:"#c084fc",
    arc:"石像/紙皮騎士 → 魔法少女形態觸發 → 光點消失",
    states:{ "前史":"靈魂被鎖Alpha/Beta線交叉點；秋穗研究事故→石像", I:"石像/紙皮騎士；無系統暗示（設計意圖）", II:"石像形態維持", III:"魔法少女形態觸發（晴香第2次改變現實）", IV:"光點消失（晴香接受改變現實係錯→願望消失→愛莉慢慢消失）" },
    dirs:["DIR-012"] },

  { id:"CHAR-010", name:"秋穗", full:"東雲秋穗 (Akiho)", role:"scientist_betrayer",
    color:"#94a3b8",
    arc:"母性依靠NPC → 信任加深 → 秘密揭露背叛 → 缺席終局",
    states:{ "前史":"花子的雙胞胎姊姊；「改變心之器」研究者；意外令愛莉成為人造魔法屍骸", I:"茶餐廳[NC]輕量出場；模仿花子語調（CDL-126）；輔助NPC定位", II:"信任加深；情緒毒品危機E-11a揭露：被黑奏妥協，為救愛莉而交易", III:"背叛揭露 + 退場（退場事件TBD，BD-13 BLOCKED）", IV:"缺席收結" },
    dirs:["DIR-009","DIR-011","DIR-014"] }
];

// ─── 3. EVENTS ──────────────────────────────────────────────────────────────
// ord: sortable integer. act: "前史"|"I"|"II"|"III"|"IV"
// line: "Alpha"|"Beta"|"mixed"
// status: "canon"|"working"|"unresolved"|"blocked"
// claim: "[SOURCED]"|"[INFERRED]"|"[NEEDS_AUTHOR_INPUT]"|"[CONFLICTING]"
// ci: character impacts (only directly affected chars listed; others default to not_involved)
//   role: protagonist|antagonist|victim|witness|catalyst|hidden_cause|emotional_receiver|absent_but_affected
// df: direction functions: setup|escalation|reveal|climax|payoff|reference

SD.events = [
  {
    id:"E-PRE-03", title:"螢的死亡", ord:1000, act:"前史", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"彩的摯愛螢在彩6歲時死亡。黑奏作為副人格在此時刻形成，以承擔彩無法承受的痛苦。螢的死是農場計劃和整個衝突的根本動機起點。",
    chars:["CHAR-003"],
    ci:[{ ch:"CHAR-003", role:"emotional_receiver", action:"目睹螢死亡，精神崩潰", inner:"黑奏作為副人格被召喚以承擔彩無法承受的痛苦", growth:"黑奏形成根本原因；DID起點", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-002", fn:"setup", desc:"AKS-S揭示鏈根源起點；螢不可復活的動機核心" },
        { dir:"DIR-004", fn:"setup", desc:"黑奏DID形成的emotional_trigger" },
        { dir:"DIR-007", fn:"setup", desc:"農場計劃動機根源（恢復螢）" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-PRE-01", title:"Alpha線：黑奏殺花子+美夜子", ord:1100, act:"前史", line:"Alpha",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷102年。黑奏（彩副人格）預謀殺死晴香媽媽花子+美夜子，以取得魔法力量。直接觸發晴香5歲無意識創造Beta線。BD-07 FULLY RESOLVED。",
    chars:["CHAR-001","CHAR-002","CHAR-003"],
    ci:[
      { ch:"CHAR-001", role:"hidden_cause", action:"（5歲；目睹花子+美夜子死亡，觸發無意識許願創世）", inner:"「我希望家姐還在」——5歲的善意許願成為宇宙代價的起點", growth:"創世者揭示鏈（DIR-001）最深層前置", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"victim", action:"在Alpha線被黑奏殺死", inner:"「死去的大家姐」——Beta線美夜子是Alpha線死者的拼接復活", growth:"整個「避難所詛咒/Beta線復活」機制根源", claim:"[SOURCED]" },
      { ch:"CHAR-003", role:"antagonist", action:"以副人格黑奏身份預謀並執行殺死花子+美夜子", inner:"黑奏的行動是「為了讓彩獲得魔法力量來恢復螢」的扭曲結果主義", growth:"農場計劃邏輯起點；封閉循環因果起點", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-001", fn:"setup", desc:"晴香創世者揭示的前史根源" },
        { dir:"DIR-004", fn:"setup", desc:"黑奏作為施害者的最早行動" },
        { dir:"DIR-007", fn:"setup", desc:"農場計劃封閉循環因果起點" },
        { dir:"DIR-013", fn:"setup", desc:"Alpha線分歧事件；BD-07確認" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","BLOCKED_DECISIONS.md §BD-07"],
    q:[], contra:["HC-01（Beta花子死因/揭示層級，BD-07 RESOLVED但舊文件有殘留framing）"]
  },
  {
    id:"E-PRE-02", title:"晴香5歲創世（Beta線誕生）", ord:1150, act:"前史", line:"mixed",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷102年。晴香5歲因喪親之痛無意識許願，創造了整個Beta線魔法世界。緋潮根源。整個故事的宇宙起點。膠布哲學L3的宏觀表達基礎。",
    chars:["CHAR-001"],
    ci:[{ ch:"CHAR-001", role:"protagonist", action:"5歲無意識許願，改變現實，創造Beta線", inner:"「我希望家姐還在」——善意的宇宙級代價", growth:"創世者身份的根源；整個AKS-H揭示鏈的終極答案", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-001", fn:"setup", desc:"AKS-H0→H4整條揭示鏈的宇宙起點" },
        { dir:"DIR-013", fn:"setup", desc:"Alpha/Beta線分歧機制的觸發" },
        { dir:"DIR-015", fn:"setup", desc:"膠布哲學L3的設定基礎：Beta線=膠布" }],
    src:["STORY_BASE_RECONSTRUCTION.md §二/五"], q:[], contra:[]
  },
  {
    id:"E-PRE-04", title:"美夜子拼接式復活（Beta線）", ord:1200, act:"前史", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷103年後。晴香創世令Beta線存在。美夜子在Beta線以「拼接式復活」的扭曲形式存在：Alpha線死者的記憶+Beta線的身體。避難所詛咒源於晴香幼年許願的副作用。",
    chars:["CHAR-001","CHAR-002"],
    ci:[
      { ch:"CHAR-001", role:"hidden_cause", action:"（5歲創世行為的後果之一）", inner:"晴香不知道她5歲的善意造成了這個扭曲復活", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"victim", action:"以拼接形式在Beta線存在", inner:"「我是否真的活著」——美夜子的核心身份困惑", growth:"避難所詛咒機制根源；美夜子「破冰至繼承者」弧線的設定基礎", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-003", fn:"setup", desc:"美夜子冰冷性格的設定基礎：存在本身就是代價" },
        { dir:"DIR-008", fn:"reference", desc:"美夜子×凜5年連結的世界設定背景" }],
    src:["STORY_BASE_RECONSTRUCTION.md §三"], q:[], contra:[]
  },
  {
    id:"E-PRE-05", title:"凜犧牲/光環處決", ord:1300, act:"前史", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷108年。凜為美夜子犧牲，被帝國光環扭斷頸部處決。帝國制度對「個體情感>制度忠誠」的懲罰。5年後美夜子發現凜仍alive（Unit 00形態）是Act II重大震驚。",
    chars:["CHAR-002","CHAR-007"],
    ci:[
      { ch:"CHAR-002", role:"witness", action:"目睹凜為自己犧牲", inner:"5年的罪責感+「應該是我」的倖存者陰影", growth:"美夜子冰冷功利感的部分原因：不允許自己再讓人為她犧牲", claim:"[SOURCED]" },
      { ch:"CHAR-007", role:"victim", action:"被帝國光環處決（因情感凌駕制度）", inner:"拒絕治癒：「我不需要被憐憫」", growth:"Unit 00轉化弧線起點；「遲來的介錯」前置", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-008", fn:"setup", desc:"凜弧線的前史根源；美夜子×凜5年連結的創傷起點" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-PRE-06", title:"黑奏重組凜為Unit 00", ord:1400, act:"前史", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷109年。黑奏救回被處決的凜，重組為Unit 00「屍骸獵人」形式。黑奏利用凜清除情緒突異個體（農場計劃管理）。制度對死者的工具化。",
    chars:["CHAR-003","CHAR-007"],
    ci:[
      { ch:"CHAR-003", role:"antagonist", action:"救回凜並重組為Unit 00，用以管理農場計劃", inner:"黑奏以「我給了你繼續存在的機會」合理化對凜的工具化", claim:"[SOURCED]" },
      { ch:"CHAR-007", role:"victim", action:"被重組為Unit 00屍骸獵人形式", inner:"拒絕治癒=拒絕接受自己需要被幫助", growth:"Unit 00形態的直接根源", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-008", fn:"setup", desc:"凜Unit 00形態的直接前置" },
        { dir:"DIR-007", fn:"reference", desc:"農場計劃管理工具（Unit 00的功能角色）" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },

  // ── ACT I ──────────────────────────────────────────────────────────────────
  {
    id:"E-A1-000", title:"開場：幽靈重量症狀（Beat 0）", ord:2000, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"帝國歷113年7月。晴香的「幽靈重量症狀」：情緒耗損的視覺外化，夕presence的第一個可感知訊號。AKS-H0起點：觀眾感覺「有什麼不對勁」但無解釋。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"開場，幽靈重量症狀可見", inner:"晴香尚未意識到症狀的意義", growth:"情緒守恆定律的最初訊號（DIR-011 L0）", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"absent_but_affected", action:"夕的presence以幽靈重量症狀具現化", inner:"夕作為情緒守恆代價以視覺化症狀存在", claim:"[INFERRED]" }
    ],
    df:[{ dir:"DIR-001", fn:"setup", desc:"AKS-H0：不安感起點，觀眾比晴香先感受到異常" },
        { dir:"DIR-005", fn:"setup", desc:"夕的presence首次具現化" },
        { dir:"DIR-011", fn:"setup", desc:"守恆定律L0：症狀暗示情緒代價的存在" }],
    src:["ACT_I_OUTLINE.md Beat 0"], q:[], contra:[]
  },
  {
    id:"E-A1-SQA", title:"SQ-A：桐生健傷口（膠布哲學L1）", ord:2100, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"Act I [SQ-A]。桐生健傷口+晴香選擇不抹去其記憶，台詞「痛係你存在過的證明」。膠布哲學L1植入。CDL-087 RESOLVED。整個三層膠布哲學的具體感官起點。",
    chars:["CHAR-001"],
    ci:[{ ch:"CHAR-001", role:"protagonist", action:"選擇不抹去桐生健記憶；說出「痛係你存在過的證明」", inner:"第一次主動選擇「接受真實」優先於「保護他人免受衝擊」", growth:"膠布哲學L3（帝國廣場）「接受Beta線是膠布」的道德基礎前置", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-015", fn:"setup", desc:"膠布哲學L1：最自然方式引入膠布象徵（物理傷口）" }],
    src:["ACT_I_OUTLINE.md Beat 1 §SQ-A","script_refinement §D31 A0028"],
    q:["桐生健場景的具體beat位置確認"], contra:[]
  },
  {
    id:"E-1.5", title:"E-1.5：彩/黑奏首次切換（AKS-S0）", ord:2200, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"彩和黑奏第一次可疑切換，晴香察覺異常但無解釋提供。AKS-S0起點：觀眾和晴香同樣困惑，製造長達Act II的懸念積累。",
    chars:["CHAR-001","CHAR-003"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"目睹切換，察覺異常", inner:"「什麼剛才發生了？」——觀眾和晴香同步困惑", claim:"[SOURCED]" },
      { ch:"CHAR-003", role:"protagonist", action:"無意識切換（黑奏短暫出現）", inner:"黑奏與彩的邊界在特定壓力下失穩", growth:"DID機制的首次可見訊號（AKS-S0）", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-002", fn:"setup", desc:"AKS-S0：螢揭示鏈的懸念起點" },
        { dir:"DIR-004", fn:"setup", desc:"DID機制的首次可見訊號" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-01", title:"E-01：組隊（功利性關係起點）", ord:2300, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"晴香加入魔法少女隊伍。美夜子以冰冷功利感確立「妳有用就留，無用就走」的關係框架。關係起點：美夜子對晴香的設定是「工具性同伴」。",
    chars:["CHAR-001","CHAR-002"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"加入隊伍，接受功利性框架", inner:"「我一定要證明我有用」——英雄主義的最早動機", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"antagonist", action:"以冰冷功利感設立「工具性同伴」框架", inner:"美夜子的距離感是防衛機制：不讓晴香接近以防失去", growth:"美夜子破冰弧線（CDL-191）的關係起點", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-003", fn:"setup", desc:"美夜子×晴香關係弧線的功利性起點" }],
    src:["STORY_BASE_RECONSTRUCTION.md §三"], q:[], contra:[]
  },
  {
    id:"E-02", title:"E-02：首次變身（守恆定律L1）", ord:2400, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"晴香首次魔法少女變身。設計意圖：展示諧振狂喜感，但暫時隱藏情緒代價。守恆定律L1的前置起點（之後[NC]展示異常疲憊）。",
    chars:["CHAR-001"],
    ci:[{ ch:"CHAR-001", role:"protagonist", action:"首次變身；感受諧振狂喜", inner:"「這是我的力量！」——英雄感的高峰，但代價被隱藏", growth:"守恆定律的前置：L1=[NC]異常疲憊", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-011", fn:"setup", desc:"守恆定律L1：諧振狂喜暫時隱藏代價" },
        { dir:"DIR-014", fn:"reference", desc:"信息掌控架構：資訊剝洋蔥（先給好的，再揭露代價）" }],
    src:["STORY_BASE_RECONSTRUCTION.md §八"], q:[], contra:[]
  },
  {
    id:"E-04", title:"E-04：悲鳴女妖首戰", ord:2500, act:"I", line:"Beta",
    status:"working", claim:"[NEEDS_AUTHOR_INPUT]",
    summary:"Act I Beat 5（ACT_I_OUTLINE.md §4.2）。被多處引用為膠布哲學L2的前置事件。E-04後[NC]朱音批判台詞發生在此事件後。具體事件細節待確認。",
    chars:["CHAR-001","CHAR-005"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"參與悲鳴女妖首戰", claim:"[NEEDS_AUTHOR_INPUT]" },
      { ch:"CHAR-005", role:"witness", action:"在戰後的[NC]批判晴香的「貼膠布」善意方式（膠布哲學L2）", inner:"朱音是第一個正面挑戰晴香善意的同伴", growth:"朱音作為「批判者」角色的首次具體化（CDL-120）", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-015", fn:"escalation", desc:"膠布哲學L2：朱音批判台詞的場景前置（CDL-120）" }],
    src:["ACT_I_OUTLINE.md Beat 4.2","STORY_BASE_RECONSTRUCTION.md §七"],
    q:["E-04具體事件內容確認"], contra:["BK-E-04：E-04具體內容未定義"]
  },
  {
    id:"E-A1-AKS", title:"AKS-H1：夕整合（Act I幕末）", ord:2700, act:"I", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"Act I幕末。夕首次整合（L1+L2+L3三層）。晴香第一次意識到夕的存在。AKS-H1完成：觀眾正式意識到Alpha/Beta兩線並存，「世界有什麼不對勁」的感覺獲得第一層解釋。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"完成夕首次整合", inner:"「她是什麼？為什麼她在我心裡？」——困惑但接受的起點", growth:"夕弧線（DIR-005）核心節點之一；創世者揭示前置（AKS-H1）", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"protagonist", action:"首次整合（L1+L2+L3）", inner:"夕的第一次具現化：從純粹噪訊到可溝通形式", growth:"夕→晴香的動力關係正式建立", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-001", fn:"escalation", desc:"AKS-H1：Alpha/Beta兩線並存第一層揭示" },
        { dir:"DIR-005", fn:"escalation", desc:"夕弧線的第一個核心節點" },
        { dir:"DIR-013", fn:"escalation", desc:"Alpha/Beta雙線設計：觀眾第一次意識到兩線並存" }],
    src:["STORY_BASE_RECONSTRUCTION.md §八","FULL_STORY_ROUGH_OUTLINE_V2.md §Act I"], q:[], contra:[]
  },

  // ── ACT II ─────────────────────────────────────────────────────────────────
  {
    id:"E-05a", title:"E-05a：美夜子Glitch Form觸發", ord:3000, act:"II", line:"Beta",
    status:"working", claim:"[INFERRED]",
    summary:"美夜子觸發Glitch Form（外部破壞超越避難所詛咒極限→冰藍少女殘影0.5秒）。CDL-243 RESOLVED。具體位置和觸發條件待Beat Sheet確認。",
    chars:["CHAR-001","CHAR-002"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"目睹美夜子Glitch Form", inner:"第一次看到美夜子真實形態的0.5秒殘影", growth:"美夜子「真身」的第一個感官前置", claim:"[INFERRED]" },
      { ch:"CHAR-002", role:"protagonist", action:"Glitch Form觸發：冰藍少女殘影0.5秒", inner:"避難所詛咒的邊界被外力突破", growth:"美夜子三段式覺醒（Act III）的前置積累", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-003", fn:"escalation", desc:"美夜子破冰弧線：真身第一次可見的前置" }],
    src:["STORY_BASE_RECONSTRUCTION.md §三"], q:["具體位置和觸發條件待Beat Sheet確認"], contra:[]
  },
  {
    id:"E-07a", title:"E-07a：小光之死+黑奏邏輯重構", ord:3100, act:"II", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"小光戒斷發作意外死亡，朱音情緒過載成屍骸女王。黑奏事後邏輯重構：「情緒毒品只是農場的副產品，不是目的」（黑奏的介入係事後邏輯注入，非蓄意策劃觸發小光死亡）。守恆定律L3前置（黑奏用作情緒能量收割）。",
    chars:["CHAR-003","CHAR-005"],
    ci:[
      { ch:"CHAR-003", role:"antagonist", action:"事後邏輯重構農場計劃（非蓄意策劃小光死亡）", inner:"黑奏確認「大規模屍骸化=高效情緒能量」是農場計劃的進化版", growth:"農場計劃從「隱性」到「主動推進」的升級節點", claim:"[SOURCED]" },
      { ch:"CHAR-005", role:"victim", action:"小光死亡觸發朱音情緒過載→屍骸化開始", inner:"「我沒有保護到小光」——朱音最深的罪責感觸發", growth:"朱音→屍骸女王弧線的決定性轉折", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-006", fn:"escalation", desc:"朱音屍骸化弧線的決定性轉折" },
        { dir:"DIR-007", fn:"escalation", desc:"農場計劃從隱性到主動推進的升級" },
        { dir:"DIR-011", fn:"escalation", desc:"守恆定律：屍骸化=情緒代價的極端表現" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五/九"], q:[], contra:[]
  },
  {
    id:"E-07b", title:"E-07b：廢棄糖果工廠+朱音放逐", ord:3200, act:"II", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"廢棄糖果工廠場景。朱音（部分屍骸化）被隊伍放逐/自我放逐。嘆息之橋犧牲的設定基礎建立。Act III E-14帝國廣場糖果山的payoff前置。",
    chars:["CHAR-001","CHAR-005"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"目睹朱音放逐；被迫接受無法阻止的結果", inner:"「我救不了所有人」——英雄主義第一次重大打擊", claim:"[SOURCED]" },
      { ch:"CHAR-005", role:"protagonist", action:"部分屍骸化後放逐（自我放逐或隊伍決定）", inner:"「我是個失敗者」——朱音開始接受「不完整的自己」的過程", growth:"E-14糖果山犧牲弧線的情感setup", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-006", fn:"escalation", desc:"朱音放逐：犧牲弧線的情感節點" }],
    src:["STORY_BASE_RECONSTRUCTION.md §九"], q:[], contra:[]
  },
  {
    id:"E-09a", title:"E-09a：鏡像破碎之夜（操父親背叛+紗夜犧牲）", ord:3300, act:"II", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"情緒管理局攻入操的大宅。父親「瑕疵作品」台詞（CDL-234）。紗夜犧牲保護操（「妳係我最靚嘅女」CDL-232）。操Body Horror Stage 3：黑奏揭露絲線縫牙（CDL-233）。操的心理世界全面崩潰。",
    chars:["CHAR-003","CHAR-006"],
    ci:[
      { ch:"CHAR-003", role:"antagonist", action:"揭露操的Body Horror Stage 3（絲線縫牙）；管理局攻入大宅", inner:"黑奏以「揭露操的真實狀態」作為心理武器", growth:"DIR-006 操弧線的最高壓力點", claim:"[SOURCED]" },
      { ch:"CHAR-006", role:"victim", action:"父親「瑕疵作品」台詞後；目睹紗夜犧牲", inner:"「即使是最靚的我也是瑕疵」——完美主義框架完全崩潰", growth:"Act III「我選擇停留」台詞的情感根基", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-006", fn:"climax", desc:"操弧線最高壓力點（錯位雙殺CDL-217/218的前置）" }],
    src:["STORY_BASE_RECONSTRUCTION.md §九","STORY_BASE_RECONSTRUCTION.md §CDL-232/233/234"],
    q:[], contra:["IC-03：操E-2.5敘事功能（OPEN）"]
  },
  {
    id:"E-10", title:"E-10：局部系統轉移（守恆定律L2）", ord:3400, act:"II", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"守恆定律第二層（L2）具體展示：晴香的情緒代價升級。夕暫時沉睡（E-10後）。信息掌控架構的關鍵節點：觀眾開始理解守恆定律的規模。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"承受守恆定律L2的後果：局部系統轉移", inner:"「代價比我想像的更大」", growth:"晴香對魔法系統代價的認知升級", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"absent_but_affected", action:"夕在E-10後暫時沉睡", inner:"夕的存在與守恆定律直接連結", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-011", fn:"escalation", desc:"守恆定律L2：情緒代價升級" },
        { dir:"DIR-005", fn:"escalation", desc:"夕暫時沉睡（E-10後的結果）" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-11a", title:"E-11a：情緒毒品危機+秋穗揭露（守恆定律L3）", ord:3500, act:"II", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"情緒毒品危機全面爆發。秋穗（東雲秋穗）揭露：為救愛莉而被黑奏妥協，協助情緒毒品計劃。守恆定律L3展示。信任崩潰事件。",
    chars:["CHAR-001","CHAR-008","CHAR-010"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"面對秋穗背叛揭露；情緒毒品危機", inner:"「我以為可以信任的人」——信任崩潰", growth:"DIR-009 秋穗揭露弧線的高峰；晴香英雄主義的進一步打擊", claim:"[SOURCED]" },
      { ch:"CHAR-008", role:"witness", action:"目睹守恆定律L3效果", inner:"朔理解「守恆定律對晴香的真實代價」是解放者覺醒的關鍵前置", growth:"DIR-010解放者覺醒的情感前置積累", claim:"[INFERRED]" },
      { ch:"CHAR-010", role:"protagonist", action:"被揭露：為救愛莉而與黑奏交易，協助情緒毒品計劃", inner:"「我只是想救我的孩子」——母愛驅動的道德失敗", growth:"秋穗弧線（DIR-009）核心節點；信任→背叛轉折", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-009", fn:"climax", desc:"秋穗揭露：信任崩潰事件" },
        { dir:"DIR-011", fn:"escalation", desc:"守恆定律L3" },
        { dir:"DIR-010", fn:"setup", desc:"朔解放者覺醒的情感前置" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-A2-S1", title:"AKS-S1：螢死亡報告Text Prop", ord:3600, act:"II", line:"Beta",
    status:"working", claim:"[SOURCED]",
    summary:"朔在[NC]場景發現熊公仔圖紙。螢死亡報告以Text Prop形式出現（觀眾看見但不確定重要性）。AKS-S1：觀眾開始積累「螢」的線索，但彩本人不在場。BD-09a OPEN影響具體設計。",
    chars:["CHAR-003","CHAR-008"],
    ci:[
      { ch:"CHAR-003", role:"absent_but_affected", action:"（彩不在場；螢是彩最深的創傷）", inner:"觀眾看見螢死亡報告，開始理解黑奏動機的根源", claim:"[SOURCED]" },
      { ch:"CHAR-008", role:"witness", action:"朔發現熊公仔圖紙", inner:"朔開始理解「螢」對彩的意義", growth:"DIR-010 朔解放者弧線的信息積累", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-002", fn:"escalation", desc:"AKS-S1：螢揭示鏈第一層" },
        { dir:"DIR-004", fn:"setup", desc:"熊公仔圖紙：黑奏/彩雙人格的情感線索" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"],
    q:["BD-09a：AKS-S2/S3具體場景設計OPEN"], contra:["DG-01：AKS-S2/S3場景載體缺失（BD-09a）"]
  },
  {
    id:"E-ACT2-GLASS", title:"玻璃庭院茶會（Act II幕末節點）", ord:3700, act:"II", line:"Beta",
    status:"working", claim:"[INFERRED]",
    summary:"Act II幕末。玻璃庭院茶會作為幕末場景（CDL-246引用）。⚠️ 茶會具體內容待Beat Sheet確認。注意：彩=黑奏的DID身份完整揭露（AKS-S0閉合）應在Act III Phase J發生，不是此處。此事件的實際功能需參照btd Beat Sheet。",
    chars:["CHAR-001","CHAR-003"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"（茶會中的具體情節待Beat Sheet確認）", inner:"（功能待確認）", growth:"（與彩/黑奏弧線的Act II幕末連接點）", claim:"[INFERRED]" },
      { ch:"CHAR-003", role:"protagonist", action:"（茶會設計方向已知；具體揭示內容待確認）", inner:"（功能待確認）", growth:"DIR-004 彩/黑奏弧線Act II節點", claim:"[INFERRED]" }
    ],
    df:[{ dir:"DIR-004", fn:"escalation", desc:"彩/黑奏弧線Act II幕末節點（具體功能待Beat Sheet確認）" },
        { dir:"DIR-014", fn:"reference", desc:"信息掌控架構：Act II幕末節點" }],
    src:["BLOCKED_DECISIONS.md §CDL-246"],
    q:["茶會具體內容確認（避免與Act III Phase J揭示位置衝突）"], contra:[]
  },
  {
    id:"E-A2-BD09", title:"AKS-S2：熊公仔深夜寫信/燒信（BD-09a BLOCKED）", ord:3750, act:"II", line:"Beta",
    status:"blocked", claim:"[NEEDS_AUTHOR_INPUT]",
    summary:"[NC]非戰鬥section。彩深夜寫信/燒信儀式；熊公仔作為螢象徵物件的積累。AKS-S2：觀眾視覺印象積累，為Act IV「多謝你保護咗我咁耐」做情感前置。BD-09a OPEN：具體場景設計完全空白。",
    chars:["CHAR-003"],
    ci:[{ ch:"CHAR-003", role:"protagonist", action:"深夜寫信/燒信；熊公仔儀式", inner:"彩的防衛行為：通過儀式迴避直接面對「螢不可復活」", growth:"AKS-S4（Act IV「多謝你」）的情感前置積累", claim:"[NEEDS_AUTHOR_INPUT]" }],
    df:[{ dir:"DIR-002", fn:"setup", desc:"AKS-S2：螢揭示鏈情感積累（BD-09a BLOCKED）" },
        { dir:"DIR-004", fn:"setup", desc:"熊公仔象徵物件的視覺積累" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","BLOCKED_DECISIONS.md §BD-09a"],
    q:["BD-09a：具體場景設計OPEN，影響AKS-S4情感重量"], contra:["DG-01：AKS-S2/S3場景載體缺失"]
  },

  // ── ACT III ────────────────────────────────────────────────────────────────
  {
    id:"E-A3-THAW", title:"美夜子三段式覺醒（貓殼→月下窗台→擁抱）", ord:4000, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"美夜子在Act III的三段式覺醒：①貓殼碎裂②月下窗台③晴香的擁抱。CDL-191兩步成長架構的完成。避難所詛咒的心理防線在主動選擇下崩潰。美夜子從「工具性同伴」到「無條件守護者」的轉化完成。",
    chars:["CHAR-001","CHAR-002"],
    ci:[
      { ch:"CHAR-001", role:"catalyst", action:"擁抱美夜子，不要求美夜子變成什麼", inner:"晴香的無條件接受是美夜子覺醒的最終觸發", growth:"晴香×美夜子關係弧線的最重要單一事件", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"protagonist", action:"三段式覺醒完成；從貓形態到真實形態的最後崩潰", inner:"「我不需要偽裝了」——避難所詛咒的心理核心被解除", growth:"美夜子弧線（DIR-003）高潮；繼承者角色正式啟動", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-003", fn:"climax", desc:"美夜子破冰弧線的高潮：三段式覺醒" },
        { dir:"DIR-008", fn:"reference", desc:"美夜子覺醒後可以正視凜的犧牲" }],
    src:["STORY_BASE_RECONSTRUCTION.md §三"], q:[], contra:[]
  },
  {
    id:"E-13", title:"E-13：操Day 13學校人偶牆（Act III高壓節點）", ord:4100, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"Day 13。操在學校觸發大規模屍骸化，學校人偶牆場景。操Body Horror三段完成（Stage 3終結）。半屍骸化臨界點主動選擇。台詞：「我選擇停留在我想停留的位置。」",
    chars:["CHAR-006"],
    ci:[{ ch:"CHAR-006", role:"protagonist", action:"主動選擇半屍骸化臨界點；「我選擇停留在我想停留的位置。」", inner:"「完美主義失敗了，但我仍然選擇我想成為的樣子」", growth:"操弧線（DIR-006）高潮；三位一體角色確立（Act IV）", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-006", fn:"climax", desc:"操弧線高潮：半屍骸化主動選擇" },
        { dir:"DIR-011", fn:"escalation", desc:"守恆定律：屍骸化=情緒代價的最高表現之一" }],
    src:["STORY_BASE_RECONSTRUCTION.md §九"], q:[], contra:[]
  },
  {
    id:"E-14", title:"E-14：朱音 Day 14 帝國廣場糖果山（嘆息之橋犧牲）", ord:4200, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"Day 14。朱音在帝國廣場糖果山完成最終犧牲：暴食斷頭台過載+吞過期糖果毒素→嘆息之橋自毀贖罪。台詞：「我無治癒成功。我依然係爛泥。但……我唔想再一個人食飯。」CDL-217/218 錯位雙殺。",
    chars:["CHAR-001","CHAR-005"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"目睹朱音最終犧牲", inner:"「我又救不到她」——英雄主義的最深打擊", growth:"晴香從「拯救者」到「承受者」轉化的情感積累", claim:"[SOURCED]" },
      { ch:"CHAR-005", role:"protagonist", action:"嘆息之橋自毀贖罪；最後台詞", inner:"「不完整的自己是可以有價值的」——朱音最終的接受", growth:"朱音弧線（DIR-006）完結；「垃圾鎧甲」的validate", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-006", fn:"payoff", desc:"朱音犧牲弧線完結：錯位雙殺CDL-217/218" },
        { dir:"DIR-015", fn:"reference", desc:"糖果山地點：廢棄糖果工廠→帝國廣場糖果山的payoff" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五/九"], q:[], contra:[]
  },
  {
    id:"E-15", title:"E-15：夕整合和解（鏡像閉環）", ord:4300, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"晴香×夕和解。夕弧線的核心情感節點：從「敵對的異物」到「被接受的自己的一部分」。與Act I AKS-H1的鏡像閉環。CDL-281雙層動機（晴香接受夕=接受自己壓抑的痛苦）。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"主動接受夕；和解", inner:"「她就是我，我也是她」——自我整合的第一步", growth:"晴香弧線（DIR-001）的重要情感節點；為Act IV靜止搖籃前置", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"protagonist", action:"和解；被晴香接受", inner:"「我不再需要保護晴香不知道真相」——夕防衛職責轉化", growth:"夕弧線（DIR-005）核心情感高潮；E-18被迫接管前置", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-005", fn:"climax", desc:"夕弧線的核心情感節點：和解鏡像閉環" },
        { dir:"DIR-001", fn:"escalation", desc:"晴香自我整合前置；AKS-H揭示鏈情感準備" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-15a", title:"E-15a：凜Unit 00「遲來的介錯」", ord:4400, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"凜獨立事件。凜主動選擇「Unit 00」終局：拒絕治癒。遲來的介錯：凜嘴巴張開嘗試說話，美夜子靠近聆聽，只得氣音+系統音，無遺言。「氣音無遺言」設計留白（無closure）。",
    chars:["CHAR-002","CHAR-007"],
    ci:[
      { ch:"CHAR-002", role:"witness", action:"靠近聆聽凜的最後嘗試；只得氣音", inner:"美夜子無法為凜提供closure——第二次被切斷（美夜子失憶=凜的第二次被切斷）", growth:"美夜子繼承者弧線的代價確立", claim:"[SOURCED]" },
      { ch:"CHAR-007", role:"protagonist", action:"拒絕治癒；主動選擇Unit 00；嘗試說話但只得氣音", inner:"「拒絕治癒=拒絕偽裝自己已完整」", growth:"凜弧線（DIR-008）的高潮和終結", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-008", fn:"climax", desc:"凜Unit 00弧線高潮：遲來的介錯" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-16", title:"E-16：朔解放者覺醒（脫離管理局）", ord:4500, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"朔脫離情緒管理局，與晴香建立同盟。觸發器：「保護的殘響」（非美夜子直接覺醒觸發）。CDL-255無聲盟友功能。解放者角色在E-16正式成形。",
    chars:["CHAR-001","CHAR-008"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"接受朔作為同盟", inner:"晴香在最孤立的時刻獲得新盟友", claim:"[SOURCED]" },
      { ch:"CHAR-008", role:"protagonist", action:"脫離管理局；宣告解放者立場", inner:"「保護的殘響」：朔不是因為美夜子而覺醒，而是因為看到了自己值得保護的東西", growth:"朔解放者弧線（DIR-010）高潮", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-010", fn:"climax", desc:"朔解放者覺醒：脫離管理局，CDL-255" },
        { dir:"DIR-011", fn:"reference", desc:"守恆定律：朔的覺醒是「脫離制度」的代價選擇" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-18", title:"E-18：夕被迫接管→主動取控（兩個階段）", ord:4600, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"E-18兩個階段：①被迫接管（晴香困集體潛意識，不接管就兩人都死）→②主動取控（夕發現可利用晴香改變現實，主動發動）。CDL-281雙層動機。是夕消散（Act IV）的直接前置。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"victim", action:"困於集體潛意識，夕被迫接管", inner:"晴香的「失去控制」是她最深的恐懼之一", growth:"夕消散弧線（DIR-005）的直接前置", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"protagonist", action:"①被迫接管→②主動取控（CDL-281雙層動機）", inner:"「我本來只想救晴香，但我發現我可以讓她改變現實——這是我最後能做的事」", growth:"夕弧線（DIR-005）高潮：雙層動機使道德複雜化", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-005", fn:"escalation", desc:"夕被迫接管→主動取控：雙層動機CDL-281" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-ACT3-PLAZA", title:"帝國廣場決戰（AKS-H2/H3+守恆定律L4+膠布哲學L3）", ord:4700, act:"III", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"全作最高張力場景。黑奏三段擊處刑。AKS-H2/H3雙層揭示：①晴香個人知情（創世者身份）②觀眾系統確認（緋潮=晴香創世後果）。守恆定律L4：黑奏嘲諷揭露晴香是緋潮始作俑者。膠布哲學L3：「妳只係在她屍體上貼了一塊叫做魔法世界的膠布。二十年了……傷口發炎了。」TC-03最高碰撞點。",
    chars:["CHAR-001","CHAR-002","CHAR-003","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"protagonist", action:"面對黑奏三段擊處刑；承受AKS-H2/H3雙層揭示衝擊", inner:"「我救的是我自己製造的災難」——英雄→失敗的英雄轉換核心時刻", growth:"晴香弧線（DIR-001）的最重要單一時刻；TC-03最高表達", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"witness", action:"在決戰中見証晴香揭示衝擊；知道Beta線=膠布", inner:"美夜子20年守望的意義在此場景獲得最高壓力", growth:"美夜子三段式覺醒的積累在此場景是情感基礎", claim:"[SOURCED]" },
      { ch:"CHAR-003", role:"antagonist", action:"主動揭示：膠布哲學L3+守恆定律L4+創世者身份（黑奏三段擊）", inner:"黑奏以受害者控訴方式揭示，農場計劃的邏輯終點", growth:"黑奏作為揭示者展示其「受害者立場」的最高表達", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"absent_but_affected", action:"夕沉睡中；但守恆定律L4的揭示直接指向夕存在的意義", claim:"[INFERRED]" }
    ],
    df:[{ dir:"DIR-001", fn:"climax", desc:"AKS-H2/H3：晴香知情+觀眾確認，雙層同步震驚" },
        { dir:"DIR-007", fn:"climax", desc:"農場計劃完整揭露：緋潮根源+封閉循環" },
        { dir:"DIR-011", fn:"climax", desc:"守恆定律L4：黑奏嘲諷揭露晴香是緋潮始作俑者" },
        { dir:"DIR-013", fn:"climax", desc:"Alpha/Beta雙線完整揭露：Beta線是膠布" },
        { dir:"DIR-015", fn:"climax", desc:"膠布哲學L3：「妳只係在美夜子屍體上貼了一塊叫做魔法世界的膠布」" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","04_timeline_canon.md §IV"],
    q:["L3具體對白設計（Beat Sheet層）","守恆定律L4與創世者揭示的場景節奏"], contra:[]
  },
  {
    id:"E-A3-EXIT", title:"秋穗退場（BD-13 BLOCKED）", ord:4800, act:"III", line:"Beta",
    status:"blocked", claim:"[NEEDS_AUTHOR_INPUT]",
    summary:"秋穗在Act III退場。退場機制完全空白（BD-13 BLOCKED）。方向已知（缺席終局），但具體退場事件未設計。影響Act III→IV過渡與群像分配。",
    chars:["CHAR-001","CHAR-010"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"（退場事件設計待定）", claim:"[NEEDS_AUTHOR_INPUT]" },
      { ch:"CHAR-010", role:"protagonist", action:"退場（機制TBD）", inner:"「為了愛莉」框架：母性驅動的道德失敗最終終點", growth:"秋穗弧線（DIR-009）終結；Act IV缺席收結前置", claim:"[NEEDS_AUTHOR_INPUT]" }
    ],
    df:[{ dir:"DIR-009", fn:"payoff", desc:"秋穗退場：弧線終結（機制BD-13 BLOCKED）" }],
    src:["BLOCKED_DECISIONS.md §BD-13"],
    q:["BD-13：退場事件設計OPEN（High blocked）"], contra:["DG-02：秋穗退場機制缺失（BD-13）"]
  },
  {
    id:"E-A3-AERI", title:"愛莉魔法少女形態觸發（晴香第2次改變現實）", ord:4900, act:"III", line:"mixed",
    status:"canon", claim:"[SOURCED]",
    summary:"Act III/IV邊界。晴香夕第2次改變現實時，愛莉的「有人拯救她」的內心希望觸發魔法少女形態。紙皮騎士→魔法少女騎士。BD-09b RESOLVED。",
    chars:["CHAR-001","CHAR-009"],
    ci:[
      { ch:"CHAR-001", role:"catalyst", action:"第2次改變現實（與夕協同）", inner:"「改變現實的代價」開始累積", claim:"[SOURCED]" },
      { ch:"CHAR-009", role:"protagonist", action:"魔法少女形態觸發", inner:"「有人終於來拯救我了」——愛莉等待了多少年的那一刻", growth:"愛莉弧線（DIR-012）高潮；光點消失（Act IV）的直接前置", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-012", fn:"climax", desc:"愛莉魔法少女形態：BD-09b RESOLVED" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","BLOCKED_DECISIONS.md §BD-04/BD-09b"],
    q:[], contra:[]
  },

  // ── ACT IV ─────────────────────────────────────────────────────────────────
  {
    id:"E-A4-YU", title:"夕消散（改變現實→反悔→undo→力量耗盡）", ord:5000, act:"IV", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"夕改變現實→反悔→用自身力量undo→力量耗盡消散。BD-03 RESOLVED。夕的消散是「自我接受完成後自願放手」：夕選擇撤回自己強加的願望，付出消散的代價。",
    chars:["CHAR-001","CHAR-004"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"目睹夕消散", inner:"「她消散了是因為她選擇了，不是因為我失敗了」——晴香接受夕消散的心理准備", growth:"晴香從「拯救者」到「承受者」的最後轉化", claim:"[SOURCED]" },
      { ch:"CHAR-004", role:"protagonist", action:"改變現實→反悔→undo→消散", inner:"「我不應該替晴香決定，即使我認為是對的」——夕的最終自我定義", growth:"夕弧線（DIR-005）完結：消散=自我接受", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-005", fn:"payoff", desc:"夕消散：弧線完結BD-03 RESOLVED" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","BLOCKED_DECISIONS.md §BD-03"],
    q:[], contra:[]
  },
  {
    id:"E-A4-AERI", title:"愛莉光點消失", ord:5100, act:"IV", line:"mixed",
    status:"canon", claim:"[SOURCED]",
    summary:"晴香接受「改變現實係錯」→原初願望消失→愛莉由魔法少女形態變成光點慢慢消失。BD-04 RESOLVED。愛莉的存在直接依附於晴香的第一次改變現實。",
    chars:["CHAR-001","CHAR-009"],
    ci:[
      { ch:"CHAR-001", role:"hidden_cause", action:"接受「改變現實係錯」→愛莉原初願望消失", inner:"晴香的接受直接導致愛莉消失——善意的代價仍在繼續", growth:"晴香靜止搖籃的道德基礎之一", claim:"[SOURCED]" },
      { ch:"CHAR-009", role:"protagonist", action:"由魔法少女形態→光點→慢慢消失", inner:"「終於有人拯救了我，然後我就消失了」——愛莉的終局", growth:"愛莉弧線（DIR-012）完結：BD-04 RESOLVED", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-012", fn:"payoff", desc:"愛莉光點消失：BD-04 RESOLVED" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五","BLOCKED_DECISIONS.md §BD-04"],
    q:[], contra:[]
  },
  {
    id:"E-A4-SAI", title:"彩「多謝你保護咗我咁耐」（黑奏消散）", ord:5200, act:"IV", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"AKS-S4：彩向螢（或黑奏的殘影）說出「多謝你保護咗我咁耐」。黑奏消散（彩主人格否定：「我想自己揀」）。情感核彈L3閉環。AKS-S2/S3的情感前置回收完成。",
    chars:["CHAR-001","CHAR-003"],
    ci:[
      { ch:"CHAR-001", role:"witness", action:"見証彩說出最後台詞；見証黑奏消散", inner:"晴香理解「有人比我更深刻地承受了這個世界的痛苦」", claim:"[SOURCED]" },
      { ch:"CHAR-003", role:"protagonist", action:"彩說「多謝你保護咗我咁耐」；黑奏消散；彩永恆輪迴（自選）", inner:"「黑奏一直是我的一部分，他保護了我，現在我可以保護自己了」", growth:"彩/黑奏弧線（DIR-004）完結；AKS-S4閉合", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-002", fn:"payoff", desc:"AKS-S4：螢揭示鏈最終情感回收" },
        { dir:"DIR-004", fn:"payoff", desc:"彩/黑奏弧線完結：情感核彈L3閉環" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-A4-MIYAKO", title:"美夜子吉他傳承（晴香最後的曲子）", ord:5300, act:"IV", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"美夜子用吉他演奏晴香最後的曲子。繼承者弧線（DIR-003）完結：美夜子從「工具性同伴」到「繼承晴香意志的繼承者」。晴香的遺產不是救世，而是音樂。",
    chars:["CHAR-001","CHAR-002"],
    ci:[
      { ch:"CHAR-001", role:"absent_but_affected", action:"（晴香靜止搖籃中；她的音樂被美夜子繼承）", inner:"晴香的存在通過音樂繼續", claim:"[SOURCED]" },
      { ch:"CHAR-002", role:"protagonist", action:"演奏晴香最後的曲子", inner:"「我現在有能力繼承她了」——美夜子弧線的終點", growth:"美夜子繼承者弧線（DIR-003）完結", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-003", fn:"payoff", desc:"美夜子繼承者弧線完結" }],
    src:["STORY_BASE_RECONSTRUCTION.md §三"], q:[], contra:[]
  },
  {
    id:"E-A4-SAKU", title:"朔×美夜子重逢（接受已改變的美夜子）", ord:5400, act:"IV", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"朔與美夜子重逢。朔接受「美夜子已經改變了」：不再是他記憶中的那個美夜子，但仍然值得守護。朔解放者弧線（DIR-010）的情感完結。",
    chars:["CHAR-002","CHAR-008"],
    ci:[
      { ch:"CHAR-002", role:"protagonist", action:"重逢；讓朔看見改變後的自己", inner:"「我不再是你記憶中的那個我，但我仍然在這裡」", growth:"美夜子繼承者弧線的最後一塊情感拼圖", claim:"[SOURCED]" },
      { ch:"CHAR-008", role:"protagonist", action:"接受美夜子已改變的事實", inner:"「我保護的是她，不是我對她的記憶」", growth:"朔弧線（DIR-010）情感完結", claim:"[SOURCED]" }
    ],
    df:[{ dir:"DIR-010", fn:"payoff", desc:"朔×美夜子重逢：解放者弧線情感完結" }],
    src:["STORY_BASE_RECONSTRUCTION.md §五"], q:[], contra:[]
  },
  {
    id:"E-A4-HARUKA", title:"晴香最終選擇：靜止搖籃（善意牢籠覺醒→承受）", ord:5500, act:"IV", line:"Beta",
    status:"canon", claim:"[SOURCED]",
    summary:"晴香最終選擇：接受「世界將她索回作為維持新秩序的代價」。善意牢籠覺醒後（接納花子）→自我整合→靜止搖籃（覺醒不明寫）。守恆定律L5。創世者揭示鏈（DIR-001）的最終情感收束。",
    chars:["CHAR-001"],
    ci:[{ ch:"CHAR-001", role:"protagonist", action:"接受靜止搖籃；承受而非拯救", inner:"「拯救不是答案，承受才是」——晴香從英雄到承受者的最終轉化", growth:"晴香弧線全部完結；AKS-H4閉合；守恆定律L5", claim:"[SOURCED]" }],
    df:[{ dir:"DIR-001", fn:"payoff", desc:"AKS-H4：晴香創世者揭示鏈的最終情感收束" },
        { dir:"DIR-011", fn:"payoff", desc:"守恆定律L5：最終代價承受" },
        { dir:"DIR-013", fn:"payoff", desc:"Alpha/Beta雙線：晴香接受Beta線是膠布但仍然承擔" },
        { dir:"DIR-015", fn:"payoff", desc:"膠布哲學：接受膠布下的傷口存在，但傷口下的連結是真實的" }],
    src:["STORY_BASE_RECONSTRUCTION.md §二/五","FULL_STORY_ROUGH_OUTLINE_V2.md §Act IV"],
    q:["靜止搖籃的具體視覺設計（Beat Sheet層）"], contra:[]
  }
];

// ─── 4. CONTRADICTIONS ──────────────────────────────────────────────────────
SD.contradictions = [
  { id:"HC-01", type:"Hard Contradiction", status:"OPEN", severity:"Critical",
    topic:"Beta花子死因真相 / 黑奏預謀揭示層級",
    claim:"[CONFLICTING]",
    desc:"BD-07 RESOLVED（Beta線難產為真實，Alpha線黑奏預謀確認），但舊文件有殘留framing傾向deeper hidden truth。需確認HC-01是否被BD-07完全解決或仍有殘留衝突。",
    dirs:["DIR-001","DIR-007","DIR-013"],
    author_needed:true, src:["CONTRADICTION_AUDIT.md §HC-01","BLOCKED_DECISIONS.md §BD-07"] },

  { id:"DG-01", type:"Structural Gap", status:"OPEN", severity:"Critical",
    topic:"AKS-S2/S3 螢揭示線場景載體缺失（BD-09a）",
    claim:"[UNRESOLVED]",
    desc:"熊公仔+寫信/燒信儀式方向已定，但無具體場景設計。AKS-S4「多謝你保護咗我咁耐」的情感重量直接依賴AKS-S2/S3的前置積累。",
    dirs:["DIR-002","DIR-004"],
    author_needed:true, src:["CONTRADICTION_AUDIT.md §DG-01","BLOCKED_DECISIONS.md §BD-09a"] },

  { id:"DG-02", type:"Structural Gap", status:"OPEN", severity:"High",
    topic:"秋穗退場機制缺失（BD-13）",
    claim:"[UNRESOLVED]",
    desc:"退場方向大概存在（缺席終局），但退場事件未設計。影響Act III→IV過渡與群像分配。P1：ACT_III_OUTLINE批核前必須確認。",
    dirs:["DIR-009"],
    author_needed:true, src:["CONTRADICTION_AUDIT.md §DG-02","BLOCKED_DECISIONS.md §BD-13"] },

  { id:"DG-03", type:"Structural Gap", status:"OPEN", severity:"High",
    topic:"若提高Beta真相層級所需clue system缺失",
    claim:"[UNRESOLVED]",
    desc:"與HC-01連動。若要更深reveal，前置clue/payoff體系不完整。若BD-07確認無deeper truth，此DG-03可能隨之消解。",
    dirs:["DIR-007","DIR-013"],
    author_needed:true, src:["CONTRADICTION_AUDIT.md §DG-03"] },

  { id:"IC-02", type:"Interpretation Conflict", status:"OPEN", severity:"High",
    topic:"螢揭示線功能重心（Reveal Engineering vs 情感回收）",
    claim:"[CONFLICTING]",
    desc:"一派偏reveal engineering；一派偏情感回收（R-5是否成立）。影響AKS-S回收方式與最終情感重量。⚠️ 注意：IC-02識別符係dashboard內部追蹤，未在CONTRADICTION_AUDIT.md確認存在；underlying衝突係真實的，但標籤待驗證。",
    dirs:["DIR-002"],
    author_needed:true, src:["[Dashboard internal — verify against CONTRADICTION_AUDIT.md]"] },

  { id:"IC-03", type:"Interpretation Conflict", status:"OPEN", severity:"High",
    topic:"操E-2.5敘事功能（保留/刪除/替代）",
    claim:"[CONFLICTING]",
    desc:"一派視為必要前置埋點；另一派認為拖慢節奏應刪或輕量化。直接影響Act I/II負載與操線建立。⚠️ 注意：IC-03識別符係dashboard內部追蹤，未在CONTRADICTION_AUDIT.md確認存在；underlying衝突係真實的，但標籤待驗證。",
    dirs:["DIR-006"],
    author_needed:true, src:["[Dashboard internal — verify against CONTRADICTION_AUDIT.md]"] },

  { id:"SG-06", type:"Sync Gap", status:"PARTIALLY_MITIGATED", severity:"High",
    topic:"E-編號體系不同步（13_major_events vs ACT_II_OUTLINE v0.6）",
    claim:"[CONFLICTING]",
    desc:"E-12在兩個文件指向不同事件。Dashboard使用event_index.json作為主要索引，不依賴E-編號解決此衝突。",
    dirs:["DIR-006","DIR-009"],
    author_needed:false, src:["CONTRADICTION_AUDIT.md §SG-06"] },

  { id:"BK-E-04", type:"Missing Definition", status:"OPEN", severity:"Medium",
    topic:"E-04具體事件內容未在主要文件中定義",
    claim:"[NEEDS_AUTHOR_INPUT]",
    desc:"E-04被多處引用（「E-04後[NC]朱音批判台詞」），ACT_I_OUTLINE.md §4.2描述為「悲鳴女妖首戰」（Beat 5），需完整確認。",
    dirs:["DIR-015"],
    author_needed:false, src:["ACT_I_OUTLINE.md Beat 4.2"] }
];

// ─── 5. SOURCE FILES INDEX ───────────────────────────────────────────────────
SD.sourceFiles = [
  { path:"canon/_working/story_construction/STORY_BASE_RECONSTRUCTION.md", status:"canon", role:"Primary narrative source" },
  { path:"canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md", status:"working", role:"Four-act structure outline" },
  { path:"canon/_working/story_construction/BLOCKED_DECISIONS.md", status:"working", role:"BD registry + resolution status" },
  { path:"canon/_working/story_construction/ACT_I_OUTLINE.md", status:"working", role:"Act I beat-level outline" },
  { path:"canon/04_timeline_canon.md", status:"canon", role:"Timeline canon (Alpha/Beta line events)" },
  { path:"backup/script_refinement/ProjectHaruka_NextStep_D31_D22_D40_Sectioning_Atomization.txt", status:"backup", role:"D31/D22/D40 design doc (backup — compare with canon before treating as current)" },
  { path:"ledger/CONTRADICTION_AUDIT.md", status:"ledger", role:"Contradiction + sync gap registry" },
  { path:"canon/_working/QUESTION_QUEUE.md", status:"working", role:"Open questions queue" },
  { path:"canon/_working/story_construction/CONTROL_OBJECTIVES_MASTER.md", status:"template", role:"Control objectives (template — not yet filled)" }
];

console.log(`[SD] Story data loaded: ${SD.characters.length} chars, ${SD.events.length} events, ${SD.contradictions.length} issues`);
