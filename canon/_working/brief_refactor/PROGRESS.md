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

## 下一步
角色卡次要段落逐句核實（09節），或者繼續第二輪patch-style掃描搵非`⚠`標記嘅堆疊案例。
