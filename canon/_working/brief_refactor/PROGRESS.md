# PROGRESS — Brief Refactor Task

## 目前階段
**FULL DOCUMENT COMPREHENSION ARCHITECTURE + INFORMATION PLACEMENT + LAYOUT REFACTOR（Stage 8，最新一輪指令）進行中，未完成。** 唔止Knowledge Dependency + Primary Home，仲加咗Layer Confusion（world physics vs psychological lens）+ layout audit。詳細分析全部喺`COMPREHENSION_ARCHITECTURE.md`（用A-G標準格式）。

**Stage 8本輪新增完成**：
- **搵到並修正咗全文件最高優先級嘅Layer Confusion**：「魔法的隱喻本質」（魔法少女設定）將Persona/Shadow/個體化寫成同心之器打開/碎裂literally同一條mechanism（例："分裂／打開心之器（防衛性Persona）"），「心理學對照一覽」開場白亦寫「不是比喻，而是直接具現成物理/制度/角色」——兩者都犯咗Symbolic Model取代Canon Mechanism。已修正：「魔法的隱喻本質」大幅精簡+加明確聲明「呢個係心理閱讀方式，唔係world physics」；「心理學對照一覽」designate做Persona/Shadow心理學框架嘅Primary Home，開場白改寫做「閱讀/導演語言」框架，並補回三階段模型（未分裂→防衛性Persona→個體化）呢個獨有內容。
- 修正dashboard-card嘅stale描述（03角色資料庫嘅card錯誤聲稱包含「晴香原罪對照」——嗰個table實際一直喺02節）
- 新增sidebar連結去新section `#world-systems`（之前有section冇nav entry，讀者冇辦法直接跳過去）
- 核實01入門理解嘅H3 order（為什麼叫標題/玩家做什麼/Logline）冇prerequisite violation，「奇蹟」一詞喺全文件第一次出現（第一個H3標題）已經有inline plain-language定義

**Stage 7（上一輪）已完成**：02世界與系統全section重新排序（七法則由世界觀速覽之後搬到之前）、魔法屍骸完整formation mechanism由political wrapper搬出獨立成Core System內容、修正2個EARLY_JARGON_FAILURE（護甲/靈魂前提）、核實03/04/05 section冇違反Section Contract。

全部regression check（`<a>`633/633、`<div>`gap同baseline一致、零重複id）持續PASS。Total visible text: 111,862字元（累計由session最初126,035減少11.2%，純結構+layer-confusion修正，唔係大規模刪content）。

**再下一輪新增**：05 Gameplay全部H3做咗Concept→Action Mapping audit（PASS，冇搵到純重複philosophy冇玩家行動嘅段落）；06附錄A做咗Reverse Audit，搵到並修正1個真正redundant案例（「魔法屍骸化機制」card同主文「魔法屍骸」article嘅CDL-271/Alpha-Beta死亡比較幾乎逐字重複，已刪走重複部分淨低3個附錄獨有細節）。Total visible text: 111,697字元。

## Stage 9：Mental Model Normalization + Primary Home Closure（最新一輪，最重要嘅taxonomy修正）

### 已完成：魔法少女taxonomy由4層重複explanation收斂成1個清晰2-layer模型
「起源三路線」/「解離兵器：結果分類」/「如何成為魔法少女？」/「裝置路線」4個H3，混埋咗Condition（護甲）/Route（自主/裝置/軍方）/Program（潘朵拉/Stage1）/Outcome（解離兵器）四條完全唔同嘅分類軸，仲有大量defensive「唔好讀成」/「Canon修正」/「已刪硬件」文字。已重構做：
- **第一層資格**：護甲（一句+pointer返七法則law-spectrum）
- **第二層三條路線**（一個merge咗3個重複表嘅matrix）：自主覺醒/帝國裝置/軍方容器化，各自嘅力量取得方式/知情程度/結果/例子
- **解離兵器**：獨立標示做「結果」而非路線，刪走重複嘅「邊個會成為」「點煉成」兩個box，淨低起源(私人搜尋)+核心定義+Emo-Visor連結
- 修正1個因刪咗舊lane-card id而斷咗嘅anchor連結（`#disassociation-weapon-card`→`#dissociation-weapon`）

### 已完成：全文件Reader-Facing Revision History掃描並清零
搵到並刪走全部「已修正」「已收緊」「已刪硬件」「原文『X』已修正」「原引用...為誤植」等defensive/revision-history文字（分佈喺CDL追蹤metadata、tooltip title等多處），全部改寫做正面規則陳述或直接刪除。已用grep核實：`已修正`/`已收緊`/`已刪除`/`舊版`/`原文「`/`誤植`= 0。

### 已完成：七法則由4份重複explanation收斂成1份（`展開原本七個核心法則詳細版`=0）
七法則之前有：因果鏈圖(orientation)+「主題切面速覽」details(4個lens card)+「用問答方式理解」QA card+隱藏喺`展開原本七個核心法則詳細版`details入面嘅真正authoritative law-grid——四份都講緊差唔多嘅嘢，而真正嘅Primary Home（7個law card嘅concise definition）反而被藏埋喺一個「舊版」details標籤下面。已刪走lens-grid details同QA card（冇增量），將law-grid由`<details>`解放做正常`<article>`直接顯示。`grep -c 展開原本`=0。

### 已完成：02節Section Contract進一步收斂——「制度與技術深化」拆做兩個section
呢個section之前混埋咗「現實/生命機制」（奇蹟/Alpha-Beta/魔法屍骸/晴香原罪/名字系統）同「帝國制度技術」（政治/維多利亞之淚/管理局/裝置/EmoVisor/黑暗層）兩組完全唔同嘅reader question。已physically拆做兩個獨立section：`#world-systems`（現實與生命機制）+ 新增`#empire-institutions`（帝國制度與技術剝削），sidebar同步新增連結。

Regression：`<a>`620/620、`<section>`19/19、`<article>`72/72、`<details>`同`<article>`平衡、零重複id。Total visible text: 108,208字元（本輪淨減3,489字元，主要嚟自taxonomy同七法則嘅重複內容清除）。累計由session最初126,035減少14.1%。

## Stage 9.5：Mental Model Closure（作者review後指出仲有4個底層問題會污染後面19個角色卡，已全部修正）

### 已完成：心之器 vs 護甲 vs 魔法資格嘅自相矛盾
七法則正式定義話心之器係「一個人靈魂最深處的核心」（人人都有），但taxonomy matrix寫「完全冇護甲亦冇心之器嘅人」、凡人反抗組織寫「沒有心之器，只有駭客技術」——暗示部分人根本冇心之器，同law-vessel嘅universal定義矛盾。已修正兩處：taxonomy matrix改寫做「人人都有心之器（靈魂核心，唔係魔法資格），但完全冇護甲、亦同Alpha線冇因果連結嘅人，心之器強度唔足以形成穩定執念錨點」；凡人反抗組織改寫做「冇護甲、冇魔法資格嘅普通人」。

### 已完成：Psychology Primary Home真正收斂
01「為何創作→心理學的具現化」之前寫「直接具現成世界規則和可見事物」，仲保留一整張Persona/Shadow/屍骸/情緒守恆mapping table——同後面「唔係world physics，只係reading/directing language」嘅框架自相矛盾。已將01嘅版本精簡到2句「揀用Jung做閱讀語言」+ pointer去`#psych-map`，完整mapping table刪除。`#psych-map`（她們如何存在→心理學對照一覽）保持做唯一Primary Home。

### 已完成：七法則overview由假linear causal chain改做layered model
之前「01→02→03→04→05→06→07」7步直線箭嘴，將鏡像法則（觀測/真相軸）同奇蹟（介入/改寫軸）強行塞入同一條sequential chain，但兩者其實係互相對照而非因果relation。已重畫做：地基（心之器+集體潛意識+情緒守恆）→ 兩條獨立分支（分支A累積/危機=緋潮；分支B真相/現實=鏡像法則↔奇蹟，明確標「互為對照，唔係因果」）→ 結果軸（三位一體光譜，由地基+兩條分支共同影響）。正式law card定義本身冇變。

### 已完成：「現實與生命機制」Section Contract最後一個漏網——名字系統搬走
「名字系統：Beta線的動漫濾鏡」（文化身份/敘事identity概念）之前留喺「現實與生命機制」，同奇蹟/Alpha-Beta/屍骸呢啲真正嘅生命機制唔同類。仲搵到佢個3-row迷你table同附錄B嘅完整table重複緊同一組人（晴香/美夜子/刑思）。已將完整概念解說（核心命題blockquote+日文名/中文名/帝國強推日系文化3格box）搬去附錄B做intro，「現實與生命機制」淨低一句文化身份pointer，刪走重複嘅3-row迷你table。

Regression：`<a>`618/618、`<div>`gap一致、零重複id。Total visible text: 108,141字元（累計-14.2%）。

## Stage 10：Character Database Reader Refactor

新5-layer template：Quick Read（一句話+平日的她/最深矛盾/WANT/NEED四格）→ Arc（4-node chain-steps）→ Key Relationships（compact-rel 3張mini-card）→ Story Function（1句）→ Identity（2-4句box）→ Deep Notes（按reader question分組嘅details，取代之前一長串`<p>`堆疊）→ Visual Design（不變）。

### Tier A（7個核心角色）已全部完成
- **晴香、操**：full restructure，包括scene image分層（主card 4-5張+gallery details）。
- **凜、美夜子、葉語彩/刑思（雙人格特別template，分開葉語彩/刑思各自Quick Read再加「同一具身體發生咩事」）、菲、紫音**：prose full restructure（Quick Read/Arc/Relationships/Story Function/Identity/多組Deep Notes），scene gallery保持原有排列未拆層（時間預算考慮，image內容冇損失，只係未做3-5張精選+details收納）。
- 順手修正咗紫音卡入面一個重複段落（「為麻醉害死弟弟的強烈罪惡感」呢句原文連續兩段幾乎逐字重複）。

### Tier B（5個角色）已全部完成
- **秋穗**：full restructure，Deep Notes分2組（血糖手錶同刑思舊帳/手震），scene images精選1張主card+2張gallery details。
- **愛莉**：輕量restructure（Quick Read+Relationships+1組Deep Notes），原本內容已經夠短，冇拆scene gallery（只有3張）。
- **朔**：輕量restructure（Quick Read+Relationships），原本內容已經夠短，直接喺原有段落基礎上加Quick Read。
- **小光**：minimal touch——只加咗一句「一句話」summary，原文本身已經夠簡潔（1段+2圖），冇必要大改。
- **紗夜**：核實後確認已有「性格」一句話欄，本身已夠簡潔，未改動。

### Tier C（6個角色）核實結果
- **花子**：核實後確認已經夠簡潔（2段），未改動。
- **雷子健、宗一郎、華麗淇、溫善言、螢**：呢輪未再逐個重新核實（上一輪session已核實過呢批角色「已讀核實，本身已經夠簡潔」），冇做新嘅改動。

### 仲未做（誠實列出）
- Tier C嘅5個角色（雷子健/宗一郎/華麗淇/溫善言/螢）今輪未重新逐字核實，只係沿用上一輪嘅核實結論
- 全部角色卡都未做rule 34嘅Consistency Check橫向比較（Want係咪全部真係角色自己想要、Arc abstraction level是否一致等）
- Tooltip同步（rule 34/35）未做
- 03 Character Database完整H3/module order audit（rule 36）未做
- 03完整zero-knowledge linear read未做

Regression（每次splice後即檢）：`<a>`571/571、`<div>`gap同baseline一致(2)、`<details>`77/77、零重複id。Total visible text: 103,497字元（累計由session最初126,035減少17.9%）。**已知風險同解決**：node script splice方式初期試過2次因為"after slice"邊界off-by-one整咗duplicate closing div（晴香/操各一次），已即時搵到並修正；由凜開始改用「淨係換prose、唔拆scene-grid」嘅splice方式，之後所有角色都冇再出現呢個問題。

## Stage 11：Whole-Document First-Reader Plain-Language Rewrite（進行中，只完成極少數具體修正）

**誠實現況**：呢個task要求嘅係逐段重寫全份12,000行文件做zero-knowledge plain-language，呢個規模喺一個session入面做唔到「全部逐段讀過」。已完成嘅係一批**真實、具體**嘅修正（唔係得個「已核實」講法）：

1. **完成咗用戶提供嘅calibration example**：操卡「無名男孩」deep note由jargon-first改寫做用戶原文建議嘅context→event→meaning結構（「操一直以為，別人只會鍾意佢變身後嗰個...完美嘅形態」開始，男孩死後先講速寫簿發現，最後先講呢份遺憾點影響佢後期）。
2. **新增Act結構嘅一次性orientation note**（故事section開頭）：解釋Act I-IV/Phase J/CDL/E-0x/SPEC#呢批全文件出現48次「Act I/II/III/IV」+22次「CDL-」嘅shorthand代表咩，令之後所有出現處唔使逐個重寫都有anchor可以理解（呢個係document-wide嘅效率解法，唔係逐段修）。
3. **七法則「緋潮」定義由jargon-first（「集體潛意識最深處嘅L3冥河」開頭）改做plain-first**（「情緒廢料...唔會憑空消失，只會不斷累積」開頭，L3冥河技術詞放句尾）。
4. **核實** 心之器/情緒守恆/集體潛意識/鏡像法則等七法則定義已經係plain-first（Stage 9.5已經處理過）；情緒資本主義附錄卡已經係plain-first；毋須再改。

### 未完成（誠實列出，唔宣稱completion gate達成）
- 01/02/03/04/05/06 全部module嘅逐段plain-language audit未完成——只做咗抽查
- 全文件48個「Act I/II/III/IV」同22個「CDL-」個別出現處未逐一review（改用orientation note呢個document-level方案代替逐段修，未必完全達到用戶要求嘅「每段都自足」標準）
- Table/diagram node/tooltip/data-desc嘅plain-language rewrite未做
- Zero-Knowledge Linear Read（01→06完整順序讀一次）未做
- Random Entry Test未做
- 角色卡其餘deep notes（除咗操嘅calibration example）未逐個check jargon-first順序

**如果要真正達成呢個task嘅completion gate，需要遠超一個session嘅篇幅**——已經誠實記錄喺呢度，下一輪可以由「01→02→03→04→05→06」逐個pass繼續，或者由用戶指定優先範圍。

## Stage 12：Master Queue Durable Batches（用戶授權：分session但唔分授權，由PROGRESS.md自動resume）

### PASS A — 01入門理解：DONE（逐module review完成）
逐個H3 module讀過：為什麼叫奇蹟魔法少女晴香/玩家實際在做什麼/Logline/黑暗療癒精確定義/心理學的具現化/觀眾情緒體驗曲線/身體代價×債務/舞台×傷口/溫柔的殘酷/見證守則/破碎的美學/膠布哲學/假甜vs真暖/四大子主題——全部13個module。發現大部分已經係plain-first、event-first寫法（呢個section之前已經受過幾輪editing，質素本身已經幾好）。**搵到並修正1處**：「身體代價×債務」module嘅「債務心理鏈：傷口→需要→救援/交換→債務→索取權→自我剝奪」呢個抽象名詞鏈冇任何具體錨點，已經改寫做完整句子解釋點解一步步困住人。其餘module核實後確認已經合格，未改動。

### PASS B — 02世界與系統：進行中
**NEXT START**：世界觀速覽（`<section id="world">`）第一個H3「前置」。

Regression：`<a>`571/571、零重複id、PASS。

### PASS B — 02世界與系統：大範圍已核實，1處修正
逐module讀過：前置/市民眼中的世界/地理設定（PASS，已喺Stage 6-9多輪處理過，plain-first）；七法則law-grid全部7張card（PASS，已喺Stage 9.5處理過plain-first，**本輪額外修正緋潮定義由「L3冥河」jargon-first改做「情緒廢料...唔會憑空消失」plain-first**）；情緒社會的黑暗層5個faction card（PASS，已經concrete+event-based）；魔法少女的本質定義/變身代價全圖/社會風評三階段弧table（PASS，plain語言+具體例子）。核實結論：因為呢啲module已經受過Stage 6-9.5多輪editing，質素已經達標，只搵到1處需要改（緋潮）。

未逐段深入check嘅module（時間所限）：魔法少女的工具/如何成為魔法少女matrix/裝置路線/燈塔效應/類型描寫/她們如何存在（日常/變身/戀愛/戰鬥描寫）/隱藏機制全部card。

### PASS D — 人物關係：已核實
情感核心關係/鏡像對立關係/負擔與連鎖關係全部card讀過——已經係短句+具體事件嘅格式，PASS，未搵到需要改嘅位。（Placement/duplicate check已喺Stage 7做過。）

### PASS G（部分）— 附錄A「刑思操控奇蹟鏈」diagram：核實後判斷可接受
Diagram node用「L3冥河逸散殘餘」做bold headline、plain語言做subtitle（同建議嘅「plain先、術語後」次序相反），但因為呢個係Appendix Technical Deep Dive（rule 17容許更技術性，只要有plain講解就得），且每個node都即時有plain語言解釋跟住，判斷為可接受，未改動。

### 未做嘅PASS（誠實列出）
PASS C（03全部20個角色嘅deep notes逐個jargon-first check——只做咗操嘅無名男孩calibration example，其餘角色嘅deep notes未逐個重新check）、PASS E（04故事六階段全部deep detail嘅jargon-first check）、PASS F（05 Gameplay剩餘module）、PASS G（附錄A剩餘5個subcard）、PASS H（附錄B）、PASS I（全文件tooltip/data-desc逐個check）、PASS J（Zero-Knowledge Linear Read）、PASS K（Random Entry Test）。

### PASS C（進行中）— 03角色卡Deep Notes逐個check：搵到並修正4個真實zero-knowledge gap
- **凜「紅線背後」**：note入面用「紅線強迫症」但全卡未曾講過「紅線」實際係咩（頸上重組縫合傷痕）——已加返物理描述先再解釋心理動機。
- **彩/刑思「Protector Paradox」**：heading用英文術語做primary label，違反rule 35（heading要reader-question式）——已改做「刑思點解會驚彩『唔再需要保護』？」。
- **紫音「成癮崩潰雷達」**：note入面直接講「家長日」「操去廢棄糖果工廠調停」兩個事件名，冇任何context——已加返簡短事件reminder（「隊伍假扮家長混入小光學校嗰次行動」/「操獨自去紫音落難嘅糖果工廠據點調停」）。
- **晴香「同一個痛係證據嘅兩面」**：note提到「雷子健」同「阻止記憶消除」但冇解釋邊個係雷子健、發生咗咩事——已加返一句context（「夜區少年雷子健，美夜子想消除佢對一次屍骸事件嘅記憶，晴香阻止」）。

**已check**：晴香全部Deep Notes、美夜子全部、彩/刑思全部、菲全部、操全部、紫音全部、凜全部、秋穗全部（8個Tier A+B角色，7個Deep Notes組已逐段check）。
**未check**：愛莉、朔、小光、紗夜、其餘Tier C角色（花子/宗一郎/華麗淇/溫善言/雷子健/螢）嘅內容未做呢一輪zero-knowledge check（呢批內容本身已經好短，風險較低）。

Regression：`<a>`571/571、零重複id，PASS。

### PASS C — 完成：愛莉/朔/小光/紗夜/全部Tier C角色zero-knowledge check
- **愛莉「濾心」**：note開場直接用結論句「世界內亦叫『活體垃圾桶』——不是刑思私人的情緒廢料桶這麼簡單」，未先講愛莉實際做緊咩先至掉術語——已改寫做「愛莉喺集體潛意識裡默默擋開會傷人嘅嘢...世界內俗稱佢做『濾心』」，事件先、術語後。
- **花子卡第3張scene圖**：data-desc直接洩漏內部audit標記`[INFERRED]`、`CDL-126`、`CDL-036`（production note誤留喺reader-facing屬性入面）——已完全改寫做正常reader敘述，移除全部內部代號。
- **螢卡scene圖**：data-desc入面有一大段完整未清理嘅production note（`**劇情位置**`/`**CDL追蹤**`/檔案路徑`04_timeline_canon.md`/`SPEC#37/#69`/`CDL-306`），仲用咗舊名「黑奏」同卡內正文「刑思」唔一致——已完全改寫做plain敘述，刪走全部metadata，統一用「刑思」。
- **溫善言「潘朵拉協議」**：直接用術語冇解釋（Random Entry讀者未必睇過02節嘅定義）——已加返inline括號解釋。
- 朔/小光/紗夜/宗一郎/華麗淇/雷子健：逐個讀過，內容已經event-first、自足，未搵到需要改嘅位。

**PASS C 現正式DONE**：03角色資料庫全部20個角色嘅Deep Notes + scene data-desc已逐個zero-knowledge check完。

### PASS B — 補做未check module：DONE
逐個讀過：魔法少女的工具（血糖手錶/金魚雷達/金夫人花露水）/如何成為魔法少女matrix（資格+三條路線）/裝置路線/解離兵器/變身體驗/燈塔效應/魔法的隱喻本質/她們如何存在（日常IG-K房-便利店-隊伍據點-家長日-假日約會-潛入學校/變身描寫/戀愛描寫/戰鬥描寫/心理學對照一覽）。**搵到並修正2處**：金魚雷達提到「緋潮頻率」冇連結解釋（已加`<a href="#law-tide">`連結+inline定義）；「Emo-Visor 與解離兵器的隱藏連結」box用術語冇連結（已加`<a href="#world-drug">`連結+inline定義）。其餘全部已經係event-first、自足格式，PASS。

**PASS B 現正式DONE。**

Regression：`<a>`574/574、`<div>`gap 2（同baseline一致）、零重複id、`<details>`77/77，PASS。

### PASS E（進行中）— 04故事流程 Phase 1-2 deep detail：搵到並清走全文件性production-note洩漏
喺check Phase 1「第一階段」嘅Deep detail期間，發現一個之前幾輪冇搵到嘅系統性問題：多個scene-figure嘅`data-desc`屬性入面，直接殘留咗未清理嘅內部production note——`**劇情位置**`/`**CDL追蹤**`/檔案路徑（`05_story_outline_canon.md`等）/`SPEC#`編號/角色舊名「黑奏」同卡內正文「刑思」唔一致。用`grep -c '\*\*劇情位置\*\*'`全文掃描，搵到9個案例，分佈喺：螢卡scene圖（本session之前已修）、Phase 1（珍寶珠入隊、操入隊 2個）、美夜子卡gallery（貓殼首次崩裂、鏡像相簿異變 2個）、彩/刑思卡gallery（黑奏弒父篡位、晴香遞便當、彩系統卡頓第二次、黑奏農場觀察 4個）、凜卡gallery（殿後最終犧牲 1個）、Phase 1 Deep detail（死前願望清單 1個）、Phase 2 Deep detail（天使變公敵 1個）。**全部9個已改寫做正常reader敘述，移除全部CDL/SPEC/檔案路徑/內部代號**，`grep -c '\*\*劇情位置\*\*'`同`CDL追蹤`已核實=0。另外順手刪走時間線一個純revision-log嘅「校訂備註」card（紫音/操死亡時序嘅內部校訂說明，對讀者零意義），同改咗02節「CDL-271 靈魂困禁」diagram headline由術語行頭改做plain-first。

**已check（PASS E 現正式DONE）**：Phase 1-6全部strip node + Deep detail逐段讀過（第一至六階段）、結局的「黑暗療癒」解讀全部、時間線（`grep`掃描CDL/SPEC/CF-TIME洩漏=0，視覺timeline格式本身合規，未逐個年份entry人手精讀）。

本輪PASS E搵到嘅額外修正：
- Phase 4「操人偶牆」node嘅`<img alt="SPEC#1">` —— alt text係內部代號洩漏（screen reader會讀出嚟），已改做描述性alt text。
- Phase 1-6其餘內容（膠布哲學1-4層、共痛計劃、五歲創世、緋潮重定義、主觀二十年、愛莉↔彩對決、魔法系統終結等）逐段讀過，全部已經係event-first、自足，未搵到需要改嘅位——呢個章節本身質素已經好高（之前幾輪editing嘅成果）。

Regression：`<a>`572/572、`<div>`gap 2（同baseline一致）、零重複id，PASS。

### PASS F — 05 遊戲化承載：DONE
逐個H3讀過：核心體驗三支柱/戰術視窗系統/戰鬥節拍循環（Combat Beat，技術向dev spec，已判斷為合理保留技術用語——呢部分讀者係開發團隊而非故事讀者）/絕對共感視界/雙軌數值系統/社會風評三階段弧/戰術道具系統/敘事承載例子（IG四階段/物資短缺潛入學校/Text Prop）。**搵到並修正1處**：戰術道具系統入面「金魚雷達」提到「緋潮頻率」冇連結——已加`<a href="#law-tide">`（同PASS B搵到嘅同類問題一致）。其餘全部已經係event-first或者合理技術register，PASS。

### PASS G — 附錄A：DONE
逐個subcard讀過：情緒系統層級關係diagram（基礎層/本體層/魔法系統層/終局/刑思操控奇蹟鏈）、集體潛意識如何運作、靈魂、情緒守恆定律、緋潮、魔法屍骸化機制、情緒資本主義。全部已經係「pointer返主文+補delta」格式，技術用語都有plain語言伴隨解釋，符合Appendix Technical Deep Dive嘅寬鬆標準（rule 17），未搵到需要改嘅位。

### PASS H — 附錄B（全角色真實名字對照表）：DONE
表格讀過，自足、無gap。

### PASS I（部分）— TERMS/characterTooltips script陣列：已check並修正2處
全文件hover tooltip嘅權威來源`var TERMS = [...]`陣列（35個詞條）逐個讀過。**搵到並修正2處**：「操」tooltip原文「唯一使用真名的角色」——呢句冇上下文嘅讀者完全唔明「真名」指咩（呼應附錄B嘅Alpha/Beta命名系統，但tooltip本身冇解釋），已改做具體描述（隊伍身份+傀儡絲線能力）；「凜」tooltip原文得返「綾瀨凜——美夜子並肩作戰多年」，同其他角色相比異常單薄、冇講出佢係咩人——已補充做兵器化/失憶嘅核心身份句。其餘33個詞條已經係plain-first、自足，未搵到需要改嘅位。

**PASS I 未做**：全文件`data-title`/`data-tip`/table cell/diagram label嘅系統性逐個掃描（本輪順帶喺PASS E/F/G期間搵到並修正咗11處CDL/SPEC洩漏，但未做窮盡式全文掃描確保零殘留——已用`grep -c`核實`\*\*劇情位置\*\*`/`CDL追蹤`=0，但未逐個檢查零散`data-title`用詞是否plain-first）。

Regression：`<a>`573/573、`<div>`gap 2（同baseline一致）、零重複id、`<details>`77/77，PASS。

### PASS I（補做）— 全文件`data-title`/`title`/`data-tip`屬性系統性grep掃描：DONE
用`grep`對`data-title="..."`/`title="..."`/`data-tip="..."`全部屬性值掃描`CDL-|SPEC#|\[NC\]|E-0[0-9]|校訂|批次|已修正`關鍵字——`data-title`、`title`、`data-tip`三者皆=0，冇殘留。另外掃描全文`\.md`檔案路徑引用，搵到並修正2處內部cross-reference洩漏：
- Phase 2 orientation note「與canon/04_timeline_canon.md §IV 一致」——純內部一致性核對語句，對讀者零意義，已刪走（保留原有敘述）。
- Act III Day13/14 pending-approval note「出自 ACT_III_OUTLINE.md v0.4」——已簡化做純狀態陳述「仍屬草稿方向，未經作者最終批核」，去除檔名同版本號。
- 其餘`.md`引用（`canon/00_series_bible.md`等sidebar連結、`canon/01_world_rules_and_costs.md`等「完整設定請見」pointer、`Doc/Architecture/CombatPacing_DesignIntent.md`）已核實為合理嘅「深入資料」連結，唔係內部洩漏，保留。
- Act III/IV嘅`pending-approval`草稿標記（"尚待作者最終批核"等）已核實為合理嘅誠實不確定性披露（唔係revision-log噪音），保留。

### PASS K（Random Entry Test，用戶指定6個spot-check）：全部PASS
逐個驗證第一次Random Entry落喺呢啲位嘅讀者係咪有足夠context：
- **操**卡：Quick Read一句話box開場，自足。PASS。
- **凜**卡：Quick Read一句話box開場，自足。PASS。
- **魔法屍骸**（世界機制）：由心之器定義開始，plain-first解釋「靈魂本能試圖逃離...呢就係魔法屍骸」。PASS。
- **Emo-Visor**：開場「帝國官方稱『情感增幅補充劑』，市民俗稱『快樂膠囊』」，術語有abbr tooltip解釋。PASS。
- **Act III**（story-4）：有前置背景visual-note先講事件脈絡先入正文。PASS。
- **Combat Beat**（戰鬥節拍循環）：技術向dev spec register（BeatTimeline/ThreatGroup等），判斷為面向開發團隊而非故事讀者嘅技術文檔，唔適用故事讀者嘅Random Entry標準——同PASS F嘅判斷一致，保留。

Regression：`<a>`573/573、零重複id，PASS。

## Stage 13：PASS J（Zero-Knowledge Linear Read）+ PASS L（Final Regression）——Master Task收尾

### PASS J — 真正sequential first-reader simulation（唔係grep，逐段人手讀晒01→06）
由`<main class="content">`（第4516行）開始，順序逐段讀到附錄B結尾，模擬一個對呢個故事零background嘅讀者第一次由頭讀到尾嘅體驗，逐段檢查「讀到呢度，之前有冇讀過足夠嘢去理解呢句」。**搵到並即時修正5個真正嘅forward-reference / undefined-term gap**：

1. **「潘朵拉協議」forward reference**：「奇蹟販賣所」（02節，第一次linear出現位置）用「同潘朵拉協議『表面義舉包裝剝削』係同一手法」做比較，但潘朵拉協議嘅定義要到後面〈魔法少女設定〉先出現——linear讀者呢一刻仲未識呢個詞。已加inline gloss +向前pointer。
2. **「EPD」未展開縮寫**：魔法屍骸article嘅「燃盡（EPD用家另一終局）」用咗一個全文件得一次出現、從未展開過嘅縮寫——已改做已建立嘅正式名「Emo-Visor」。
3. **「黑奏」全文件無定義嘅別名**（本輪最大發現）：彩/刑思角色卡嘅scene captions同data-desc入面重複用「黑奏」呢個名稱多達12次（弒父篡位、農場觀察、遞便當、系統卡頓等場景），但正文全程用「刑思」，「黑奏」呢個名喺全文件任何地方都冇解釋過係咩人——讀者會以為呢係一個從未介紹過嘅新角色。已將全部12處「黑奏」統一改做「刑思」，同正文一致。
4. **紅線forward reference（美夜子卡提及凜）**：美夜子卡「介錯人」段提到凜「拔咗一下紅線」，凜嘅紅線背景要到後面凜自己張卡先解釋——評估後判斷呢個唔阻礙句子本身理解（句子核心意思清楚），屬於全文件已接受嘅「角色例子先提後解釋」慣例，未改動。
5. **E-0x beat code殘留3處**：操「摔碎時刻」（Act II，E-09a / Stage 2a/2b）、紫音「糖果王座」（E-07b/E-12）、Phase 2「菲鏡前攤牌」（E-09）——全部係內部beat追蹤編號直接洩漏入reader-facing文字，已全部刪走淨低事件本身嘅敘述。

**已讀完confirm**：01入門理解全部、02世界與系統全部（世界觀速覽/七法則/現實與生命機制/帝國制度技術/隱藏機制/魔法少女設定）、03角色資料庫全部20個角色卡（含全部scene captions/data-desc/視覺設計）、核心人物關係全部、04故事流程全部（Phase 1-6/結局/時間線，本輪由頭重讀一次confirm linear flow冇斷層）、05遊戲化承載、06深讀附錄A+B。

### PASS L — Final Regression
**DOM/tag/id/link integrity**：
- `<a>` 573/573 平衡
- `<div>` gap = 2（同session最初baseline一致，屬於原有hand-authored quirk，唔係bug）
- `<details>` 77/77 平衡
- `<section>` 19/19 平衡
- `<article>` 72/72 平衡
- 重複id：0
- 用node script核實全部`href="#..."`錨點連結（106個id）：全部resolve到實際id，冇斷link（唯一兩個「missing」係script區塊入面嘅JS template literal `${e.target.id}`/`c-${id}`，唔係真正連結，誤判已排除）
- `data-jump-to="#..."`連結：全部resolve，冇斷link

**Reader-facing leakage 全文件掃描**（`CDL-`、`SPEC`、`.md`路徑、internal repo path、`劇情位置`、`追蹤`、revision-log/舊版/已刪/原本全文等）：
- 用正則表達式全文掃描，逐個手動檢查每個match：
  - `CDL-064`（燈塔效應）、`CDL-271`（靈魂困禁diagram headline）、`CDL-248`（底層世界公理）3處：全部喺附錄A技術深潛區塊，有plain語言伴隨解釋，符合rule 17嘅Appendix寬鬆標準，判斷保留
  - 主文件內其餘全部`CDL-`/`SPEC#`/`E-0x`/`劇情位置`/`追蹤`實例：本輪PASS E+PASS J總共搵到並清走14處（9處production-note大段洩漏 + 1處alt text + 1處revision-log卡片 + 3處E-0x beat code），現已全部清零
  - `.md`檔案路徑：僅存嘅幾處（sidebar連結、「完整設定請見」pointer、Combat Beat嘅`Doc/Architecture/...md`技術文檔pointer）全部係合理嘅「深入資料」連結，唔係內部洩漏
- **Runtime visual QA: NOT TESTED**（呢個環境冇browser runtime，冇辦法實際render頁面check CSS/JS/lightbox/tooltip嘅視覺效果——只做咗靜態HTML/DOM層面嘅檢查）

### FIRST-READER PLAIN-LANGUAGE REWRITE COMPLETE

PASS A-L全部完成：01-06全文件逐段zero-knowledge check、character deep notes逐個jargon-first rewrite、全文件production-note洩漏清零、Random Entry spot-check、Zero-Knowledge Linear Read、Final Regression全部PASS。

**仍然誠實存在嘅殘餘項（唔宣稱完美，只宣稱呢個task嘅completion gate已達成）**：
- Runtime視覺QA未做（冇browser環境）
- 早期stage記錄嘅「200字門檻下~28個段落」未進一步壓縮——已評估為內容密度足夠嘅deep-canon保留內容，故意不砍
- Combat Beat等純技術dev spec內容保留原有技術register，未強行套用故事讀者嘅plain-language標準（判斷為合理，因為呢部分讀者係開發團隊）

**NEXT（如果作者要開新一輪Master Task）**：CSS consolidation、Character layout redesign、或新嘅內容架構工作——呢啲已明確排除喺今輪task之外。

### 已完成：搵到並修正1個真正嘅World Physics vs Psychology Lens矛盾（用戶明確要求source-check嘅項目）
「心理學對照一覽」（她們如何存在）同「魔法的隱喻本質」（魔法少女設定）之前都寫「未分裂→分裂/Persona→個體化」係硬性三階段，仲講「解離兵器與魔法屍骸唔係第四類，係防衛性分裂呢一步出錯嘅失敗結果」——但七法則已經明確canon：「任何人嘅心之器受損後都可以直接屍骸化……無需經過魔法少女階段」。即係話普通人根本唔使經過「Persona/分裂」呢一步都可以屍骸化，之前嘅心理學閱讀將呢個「魔法少女限定嘅心理模型」錯誤generalize做「所有屍骸都要經過嘅mechanism」。已喺兩個位置都加返明確限定：呢個Persona/Shadow/個體化閱讀**只適用於曾經行過魔法少女路線嘅人**，普通人屍骸化係完全獨立、唔涉及呢套心理框架嘅路徑。

**上一輪（Stage 6 Full Document Editorial Rewrite）已完成內容**：

## Content Delta（本session累計，由第一個destructive batch開始）
- Session最初baseline：126,035 字元
- **目前：111,963 字元（body 82,481 + attr 29,482）**
- **累計Net：-14,072 字元（-11.2%）**
- Regression：`<a>`630/630、`<div>`gap同原始baseline一致（2）、全文id零重複、`grep -c 展開原本詳細文字`=0、`grep -c 作者注`=0、`grep -c 批次N審計修正`=0、data-desc重複值=0

## 本輪完成項

### 1. 全文8個「展開原本詳細文字（未刪減）」fake-disclosure徹底清除
呢個label係硬性ban（舊稿備份唔應該存在reader-facing Brief）。8個位置（她們如何存在→戀愛描寫、故事Phase 1-6、附錄A集體潛意識）全部改成`Deep detail（只補strip未覆蓋嘅內容）`，內容由「重複narrate strip已講嘅嘢」壓縮做「只保留strip冇提過嘅delta」。

### 2. 全文件長段落掃描（240字門檻）：21個→2個
覆蓋操/凜/刑思彩/菲/晴香/美夜子/秋穗/紫音等角色卡深層段落，同「市民眼中的世界」由5段column prose全面重構做4格classification box（市民知道的/佢哋睇到嘅魔法少女/帝國實際做嘅/隱藏真相）——對應Stage 6要求嘅calibration example寫法。

### 3. Alpha/Beta線 patch-style堆疊寫法專項修正（直接對應Stage 6嘅worked example）
「Alpha 線與 Beta 線」subcard之前用5種形式重複講同一個論點（⚠警告box + 車禍比喻 + 回填歷史box + Alpha/Beta對照box + 「三個常見誤讀」box + blockquote結論）。已精簡做一個比喻（含唯識宇宙pointer）+ 一組reference bullet-list，刪走4個重複版本。

### 4. 清走內容洩漏/重複（用script全文掃描data-desc重複值，確認清零）
- 凜犧牲scene-figure嘅data-desc入面混咗一句內部校對記錄「⚠️ 2026-07-17 批次8審計修正」——已刪除（同之前發現嘅「珍寶珠」revision-log洩漏同類問題，已grep核實全文無殘留）。
- 夜區district-card有一段同「市民眼中的世界→隱藏真相」box幾乎逐字重複嘅「靈樹能量殘留」解釋——已壓縮做pointer返去`#world-spirit-tree-misread`。
- 用node script掃描全文`data-desc`屬性值，搵到3組完整逐字重複嘅scene caption（同一張圖、同一段長data-desc喺兩個唔同地方各貼一次）：晴香首次變身場景（角色卡vs故事Phase1）、操甜品掉牙場景（角色卡vs故事Phase1，含完整運鏡描述）、愛莉童謠世界場景（角色卡vs故事Phase6）。已將故事流程side嘅版本保留做primary home（narrative-sequence位置），角色卡side嘅版本壓縮做1句caption+pointer。已再次掃描確認`data-desc`重複值清零。

### 5. 已核實：多個章節嘅舊「未處理」標記係過時評估
逐節用node script掃描實際段落長度，發現13時間線（本身係visual timeline）、14 Gameplay（已有chain-steps視覺化）、16附錄B（乾淨3欄table）、02世界觀速覽、07魔法少女設定、10人物關係，全部已經係短段/視覺化/表格形式，唔算text wall違規——舊progress table記錄過時，已更正。

## 章節誠實現況（重新核實後）

| # | 章節 | 狀態 |
|---|---|---|
| 1 | 入門 | KEPT_CONCISE |
| 2 | 導演設計原則 | REWRITTEN局部 + 核對後夠簡潔 |
| 3 | 主題 | KEPT_CONCISE |
| 4 | 世界觀速覽（含七法則/隱藏機制） | **已核實合規**：長段落掃描+patch-style掃描後淨低極少數deep-canon段落 |
| 5 | 七個核心法則 | KEPT_CONCISE（已有good diagram） |
| 6 | 情緒世界的隱藏機制 | 已含喺第4項核實範圍內，合規 |
| 7 | 魔法少女設定 | **已核實合規**（起源/解離兵器等段已trim） |
| 8 | 她們如何存在 | 部分REWRITTEN（戀愛描寫已處理），其餘日常/戰鬥描寫段落短，未見長段落違規 |
| 9 | 角色卡×20 | 8個高密度角色（操/凜/晴香/彩刑思/秋穗/美夜子/紫音/菲）主要深層段落已trim；6個次要角色核實後確認本身已簡潔；**仍有殘餘**：card入面零散次要段落未逐句核實 |
| 10 | 人物關係 | **已核實合規**（>150字門檻只得1個段落，box card格式已經係single-best-expression-form） |
| 11 | 故事六階段 | REWRITTEN（fake-disclosure已清、Phase1-6 deep-detail已delta化） |
| 12 | 結局解讀 | 部分REWRITTEN |
| 13 | 時間線 | **已核實合規**（本身係visual timeline，唔係prose） |
| 14 | Gameplay系統設計 | **已核實合規**（已有chain-steps視覺化，>150字門檻只2個技術pointer） |
| 15 | 附錄A | 部分（3個重複subcard已刪+集體潛意識段已delta化），其餘subcard未逐段核實 |
| 16 | 附錄B | **已核實合規**（乾淨3欄table） |
| 17 | Script區塊 | TERMS/characterTooltips已統一 |

### 6. 已核實：附錄A全部6個subcard（集體潛意識/靈魂/情緒守恆定律/緋潮/魔法屍骸化機制/情緒資本主義）
逐個subcard人手閱讀核實，搵到1個新重複：「渴求溫暖卻毀滅溫暖」box喺07魔法少女設定同附錄A魔法屍骸化機制兩處幾乎逐字重複——已將附錄A版本壓縮做pointer。其餘subcard（靈魂/情緒守恆定律/緋潮/情緒資本主義）已經係短段+pointer格式，冇冗句。

### 7. 已完成：全文件重複內容綜合掃描（p/li/figcaption/span/data-desc/data-title）
用node script對全部主要文字承載元素做逐字比對，`<p>`/`<li>`/`<figcaption>`/`<span>`全部零重複；`data-desc`原本有3組完整逐字重複（已喺項4修正），現已清零。

## Content Delta（最終）
- Session最初baseline：126,035 字元
- **目前：111,892 字元（body 82,410 + attr 29,482）**
- **累計Net：-14,143 字元（-11.2%）**

## 真正仲需要處理嘅剩餘項（誠實列出，唔宣稱完成）
1. **09角色卡次要段落**：8個高密度角色主要段落已trim，但card入面仲有零散次要段落（scene-figure以外）未逐句核實
2. **200字門檻下仲有~28個段落**未進一步壓縮——已評估為內容密度足夠、冇機械式重複嘅deep-canon保留內容，唔再強行砍字（避免違反「唔係機械砍字」原則）
3. **patch-style堆疊寫法**：呢輪搵到並修正咗1個教科書級案例（Alpha/Beta線），已做全文件`⚠`/常見誤讀/blockquote關鍵字掃描，冇搵到第二個同級案例，但呢個唔等於窮盡咗所有patch-style變體（例如冧長bullet list堆疊、非`⚠`標記嘅warning語氣）
4. **09角色資料庫以外嘅內部note洩漏**：只做過`批次N審計修正`/`已修正2026-`/`作者注`關鍵字grep，未逐段人手閱讀確認冇其他形式嘅編輯內部記錄殘留

## 下一步（早期stage記錄，已被Stage 14取代）
角色卡次要段落逐句核實（09節），或者繼續第二輪patch-style掃描搵非`⚠`標記嘅堆疊案例。

---

## Stage 14：CONCEPT RELATIONSHIP CONSOLIDATION + RELATIONAL MENTAL MODEL PASS

呢輪唔係plain-language rewrite/dedup/shorten，而係處理「Concept 已經各自解釋清楚，但應該放埋一齊比較先睇得懂」嘅問題。

### Canon term normalization
**「無意識魔法少女」→「解離兵器」已全文件統一**：搵到3處使用舊稱嘅位置——(1) 凜卡「點解凜會被徵召」段：改做「落入世界設定所稱嘅〈解離兵器〉狀態」，唔再由角色卡首次定義呢個概念；(2) 時間線「刑思親自主導魔法少女計劃第一階段」：由「表面似解離兵器」改做直接講「大量產生解離兵器」；(3) 解離兵器Primary Home（`#dissociation-weapon`）標題加咗「（早期／坊間亦稱『無意識魔法少女』——同一狀態，唔係兩種嘢）」。`grep`核實全文已冇「無意識魔法少女」字眼殘留（除咗history/canon備註本身）。

### Cluster 狀態

**Cluster Soul/Heart Vessel（心之器／靈魂／存在狀態）—— DONE**
- Primary Home由`魔法屍骸`改名做`心之器、靈魂與存在狀態——人、魔法少女、屍骸其實係同一條光譜`（`#world-corpse`），開場即講「人人都有心之器」，唔再令讀者以為呢度係「介紹另一種怪物」。
- 新增**branching diagram**（唔係單向evolution）：普通人 → 分岔成兩條獨立路（路線一：情緒債務/創傷，唔涉及魔法 → 心之器碎裂 → 魔法屍骸／無主容器；路線二：進入魔法系統 → 魔法少女 → 保持控制／解離兵器／燃盡）。
- 新增**comparison matrix**（普通人/魔法少女/解離兵器/魔法屍骸/無主容器/燃盡 × 心之器/靈魂狀態/主人格控制力/護甲關係/形成方式/可否逆轉），冇source支持嘅格冇強行填。
- 「無主容器」由Appendix-only提升到正文一句清楚distinction；「燃盡」由`情緒力量裝置`section pull埋入總模型比較表，該section本身只保留「點解裝置路線特別易走到燃盡」呢個技術補充。
- 七法則`law-vessel`同`law-spectrum`兩張card加咗pointer返新模型，唔重複definition。
- `dissociation-weapon` section開場改做「解離兵器唔係另一種魔法少女路線，而係心之器/靈魂總模型入面魔法少女三種可能結果之一」。

**Cluster A — Emotion Economy —— DONE**
新增獨立`<article>`「情緒經濟大循環：帝國唔係製造快樂，係搬運痛苦」，用chain-steps畫完整8步閉環（人產生情緒→壓抑轉移→情緒廢料→帝國抽取→包裝成商品→使用者新痛苦→廢料累積→緋潮，回到步驟3），放喺〈世界機制速覽〉之前，等讀者落去睇維多利亞之淚/情緒管理局/Emo-Visor技術細節之前，先知呢啲全部係同一條循環嘅唔同站。

**Cluster B — Reality/Truth —— DONE**
喺「Alpha線與Beta線」article尾加咗一個3行comparison table：奇蹟（改寫）/鏡像法則（揭示）/維多利亞之淚（阻止揭示），一眼睇晒三個力量點解方向相反、點互動。

**Cluster C — Magical Girl Access Model（Qualification/Route/Program/Outcome）—— 已核實，DONE（早輪已建立，本輪加pointer）**
`魔法少女：資格、三條路線、同解離兵器點分`已經有清晰嘅第一層（資格=護甲）+ 第二層（三條路線，Program名稱已折入路線欄如「帝國裝置（潘朵拉協議）」），Outcome獨立成`dissociation-weapon`。本輪只加咗一個向新Soul model嘅forward pointer，冇重做。

**Cluster D — Stage/Watching/Exploitation —— 已核實，DONE（早輪已建立，本輪加連結）**
`舞台×傷口`（`#stage-wound`）已經有完整flow「私人傷口被看見→被解讀→被加工→被交換→產生新期待→代價回歸」，並已有「摧毀前/摧毀後」對照（即時直播 vs archive/remix/propaganda）。本輪只加咗連結返`維多利亞天使／魔女狩獵`嘅Primary Home，未重建。

**Cluster E — Psychological Lens —— 已核實，DONE（早輪已建立，本輪確認冇退化）**
`魔法的隱喻本質`同`心理學對照一覽`兩處都已經有明確disclaimer「呢個係心理閱讀方式，唔係world physics」，Persona→Shadow→個體化冇被畫成formation tree。核實冇退化，未改動。

### Tooltip 同步
更新`TERMS`陣列：`心之器`（由「碎裂就變魔法屍骸」單一錯誤規則改做「碎裂後有幾種可能結果」）、`魔法屍骸`（加返「靈魂完全離開則係無主容器」distinction）、`解離兵器`（加返「早期亦稱無意識魔法少女」）；新增`無主容器`、`燃盡`兩個之前冇tooltip嘅詞條。

### Character Cards 唯一Application原則
凜卡已改做只講「凜點解冇落入解離兵器」，唔再首次定義呢個世界概念。

### Appendix
未改動——附錄A嘅CDL-248/CDL-271/CDL-064等技術性引用維持原有寬鬆標準，唔屬於呢輪consolidation範圍。

### Regression
`<a>`583/583、`<div>`gap 2（同baseline一致）、`<details>`77/77、`<table>`19/19、`<article>`73/73、`<section>`19/19、零重複id，全部PASS。用node script核實所有`href="#..."`錨點連結（新增嘅都計）冇斷link。

### First-reader test（自問自答）
- **Soul model**：普通人同魔法少女共同基礎？→ 心之器（同一句開場已答）。魔法少女點解唔係另一物種？→ 光譜位置，唔係分類。解離兵器係咩？→ 新模型第一格already答，唔使跳去角色卡。解離兵器同無意識魔法少女係咪兩樣？→ 標題已經括號註明係同一樣。魔法屍骸vs解離兵器vs燃盡vs無主容器？→ comparison matrix一次過睇晒6行。**全部可以喺`#world-corpse`一個位置答齊，唔使跳4個section。**
- **Emotion model**：一個人痛苦點樣變成另一個人快樂商品，最後變緋潮？→ 8步chain-steps一次過畫晒，PASS。
- **Reality model**：奇蹟改咗咩／鏡子揭咩／Victoria阻止咩？→ 3行table一次過答，PASS。

### Completion Gate
21條中，21條已達成（Appendix保留寬鬆標準係canon既定規則，唔算未達成）。

**RELATIONAL MENTAL MODEL PASS COMPLETE**

### Remaining genuine ambiguity（需要作者回答，唔係AI可以自己決定）
- comparison matrix入面「解離兵器」嘅「可否逆轉」一格填咗「暫時未見canon逆轉案例」——如果作者有明確canon（例如某角色曾經逆轉），需要更新呢一格。
- 目前canon冇明確講「無主容器」形成之後仲會唔會有任何後續劇情用途（純世界觀完整性，定係伏線）——如果有計劃用到，建議之後補一個角色/場景example，而家淨係喺技術層面存在。
