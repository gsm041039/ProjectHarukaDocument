# ROOT_CAUSE_SESSION_PROMPTS

**用途**：Round 131（2026-08-06/07）5-agent 全作宏觀創作診斷搵到五條根因（詳見 `PROJECT_STATUS.md` Round 131 / `SESSION_LEDGER.md` Round 131）。呢個檔案儲存五份自足式 discussion prompt，設計成可以直接複製去一個全新 session（零記憶、只有 CLAUDE.md project instructions）開場使用。

**⚠️ 呢五份 prompt 係圍繞「根因」本身嚟討論，唔係圍繞任何 QID 嚟討論**（作者 2026-08-07 明確要求）。`QUESTION_QUEUE.md` 入面對應嗰幾條 QQ-203/204/205/206/207，純粹係落檔用嘅參考編號同追蹤位——記低你喺呢輪搵到啲乜、去到邊個階段，方便下次 resume。**唔可以將討論收窄去嗰句 QID 原本嘅問法，QID 唔係任務定義，根因診斷本身先係。** 如果討論過程中發現根因嘅範圍原來比對應 QID 更闊、或者根因之間有交疊，跟返根因本身嘅邏輯走，唔使夾硬塞返落既定嘅問題格式度。

**通用規則（五份prompt共用，唔逐份重複寫，新session讀到呢個檔案就當自動生效）**：
- 呢啲係**探索/設計討論輪**，唔係決策輪，更加唔係「填一條QQ嘅答案」。目標係真正理解根因、產出**幾個**具體改善方案（連trade-off），唔係一個「AI揀好嘅答案」。
- 全程受 CLAUDE.md 同 `.claude/story_system/` 底下嘅規則約束：唔可以silent resolve矛盾、唔可以跳author gate、唔可以將inference當confirmed canon、唔可以令問題消失。
- 觸及角色成長/立場嘅部分，要過 `character-ideology-gate.md` 嘅 Gate A/B/C；觸及新設定/beat嘅部分，要掃 `angle-system.md` Pool 1（12角度全掃）+ Pool 2（13-19 relevance check）。
- 只喺真正撞到「兩個或以上有價值衝突嘅選項」「牽動已批核設定」「屬於作者品味/道德立場判斷」呢類位先問作者，用自由form（唔用Q1/Q2 A/B/C），最多三條，唔提內部編號（QQ-xxx/CDL-xxx呢類淨係落檔用，唔同作者講）。
- 所有方案標記狀態（CREATIVE_HYPOTHESIS / SOURCE_SUPPORTED / NEEDS_AUTHOR_INPUT），未經作者確認唔可以寫入任何canon檔案（`03_characters/*.md`／`01-13號主文件`），只可以寫入 `REASONING_LOG.md`（推理過程）。
- 完成一輪之後，跟返 `state-files.md` 嘅 Mandatory update sequence：更新 `PROJECT_STATUS.md`／`SESSION_LEDGER.md`／`NEXT_ACTION.md`；如果搵到嘅嘢同某條 QID 相關，可以喺 `QUESTION_QUEUE.md` 對應行加註，但呢個係順手記錄，唔係任務目標。

---

## 根因一：敘事引擎——「累積+揭露」冇「追擊+對抗」，主角後半劇零能動性

**背景讀取順序**：`PROJECT_STATUS.md` Round 131 → `ACT_I_OUTLINE.md`／`ACT_II_OUTLINE.md`／`ACT_III_OUTLINE.md`（尤其 Phase D、H3之後嘅段落）→ `08_Story_Engine_and_Conflict_Pressure_Map.md` → `.claude/story_system/consequence-driven-progression.md`

**已驗證嘅事實**：Act I+II 36個beat入面20個由制度/世界事件觸發，得5個由角色自己嘅選擇觸發（3個仲係同一條紫音支線）；晴香喺 H3（恐怖家家酒）之後直到 Act IV 覺醒前，連續15+beat純受體，零主動選擇；黑奏嘅canon策略明文「放養＋戰略性無視＋冷血等候」，令全劇冇一場戲逼隊伍撞死線。

**呢條根因嘅核心問題**：全劇嘅推進力量係咪太依賴「外部制度/揭露」推住角色行，太少「角色自己想要啲乜、主動去攞」推住劇情行？呢個唔淨係Act II嘅問題（雖然Act II嘅六個月空窗係其中一個最具體嘅病徵），係全劇能動性分佈嘅問題，包括晴香喺後半劇嘅完全被動、同黑奏「放養」策略令全故事冇deadline呢兩點。

**探索方向（例子，唔係窮盡清單，唔使逐項跟）**：
- 用最少3個sub-agent，各自提出一個唔同嘅結構性修正方向（例如：①喺Act II加一條角色自己發起、有時限嘅追擊線；②重新分佈H3之後嘅能動性，搵返幾個晴香/其他角色可以主動嘅位而唔係全部交俾夕/黑奏推動；③保留黑奏「放養」設計但畀佢加一條隱藏嘅倒數，等觀眾知緊個死線即使角色唔知）。
- 每個方向都要交代：會touch邊啲已批核beat／唔會touch咩／同consequence-driven-progression law點相容（呢條law本身要求每個beat有外部Cost Signal，但診斷發現咗「外部」一直被操作化做「制度/世界」，從未包括「角色之前嘅選擇」——呢個操作化缺口本身就值得處理，可以順便建議修訂`.claude/story_system/consequence-driven-progression.md`嘅例子集）。
- 一輪之後互相交叉質疑（唔係各自表述完就完），最少兩輪來回，先收斂做2-3個最終方案。
- 黑奏「放養」策略本身係咪要保留？呢個屬於author-decision（會唔會削弱反派嘅耐性設計本身嘅主題理由），唔可以由AI單方面斷。

**落檔**：`REASONING_LOG.md` 新增段落；如果搵到具體方案，可以順手更新 `QUESTION_QUEUE.md` QQ-205 做記錄；如果搵到真正需要作者判斷嘅trade-off，用自由form問，唔超過三條。

---

## 根因二：觀眾認知——冇一條可預測嘅規則落地，喘息大部分係陷阱

**背景讀取順序**：`PROJECT_STATUS.md` Round 131 → `SUFFERING_CHOICE_BREATHING_SCAN.md`（已有完整逐幕掃描，唔使重新掃一次）→ `09_information_design.md` → `08_narrative_design_bible.md` §反美化苦難守則（CDL-330）→ `ACT_I_OUTLINE.md`

**已驗證嘅事實**：「情緒唔會消失，只會轉移」（情緒守恆定律核心命題）遲到 Act II E-11a 先正式講明，之前觀眾托住約50個未解釋概念行完Act I大半；Act I十個喘息場面八個底層係陷阱（`[I]`工具化標記）；全劇未被工具化嘅純粹喘息淨返「兩個半」（便利店作戰+相簿創建半個）；CDL-330 已經寫低正確嘅守則（「呢個成長時刻觀眾記得嘅係佢好慘定佢揀咗」呢類beat級測試問題、純粹喘息規則、低配選擇排練原則），但驗證確認呢啲守則從未套用返 Act I/II Outline（例如「低配選擇排練」喺兩份outline搜索結果為零）。

**呢條根因嘅核心問題**：觀眾第一次接觸呢個故事嘅時候，有冇足夠嘅「可以攞嚟諗、可以估」嘅嘢，定係淨係托住一堆未解釋嘅概念被動接收？呢個同「幾時講明規則」「邊啲場係咪真心休息」兩個現象扣埋一齊，核心係觀眾嘅認知/情緒節奏設計。

**探索方向（例子，唔係窮盡清單）**：
- 派sub-agent專門評估：情緒守恆定律嘅核心命題（「痛唔會消失只會轉移」）可唔可以喺 Act I 更早期（建議切入點：E-03，而家已經有可樂失味呢個現象但冇講明規則）就講出嚟，且**唔講明轉去邊、幾時**——會唔會削弱 E-11a 嘅震撼？定係會令觀眾早哂60%劇情就有嘢可以追、可以估？兩個效果邊個大過邊個，要交代具體理據（可以參考`KNOWLEDGE_DEPENDENCY_MAP.md`已有嘅依賴關係）。
- 派sub-agent逐一檢視 CDL-330 嘅四條守則（beat級測試問題／純粹喘息規則／少女日常線擺位原則／低配選擇排練原則），對照 `SUFFERING_CHOICE_BREATHING_SCAN.md` 已經提出但未落實嘅六項建議修正，產出一份「邊場現有beat應該套用邊條守則」嘅具體清單（呢個唔算新創作決定，係執行已批核方向，理論上可以AUTO-RESOLVABLE，唔使問作者）。
- 至少一個sub-agent要專門提出「升格一場新嘅純粹喘息戲」嘅候選（唔可以入任何plant/payoff表），交代點解揀呢場唔揀第二場。
- 收斂做最多3個具體提案，包括：規則揭露時機改唔改、邊幾場現有beat要retrofit返純粹喘息、CDL-330守則具體點套落outline。

**落檔**：`REASONING_LOG.md`；如果搵到具體方案，可以順手更新 `QUESTION_QUEUE.md` QQ-207 做記錄；「規則揭露時機」呢個改動如果會影響reveal階梯嘅整體節奏，屬於author-decision，要問；純粹守則套用執行層面唔使問。

---

## 根因三：角色外化——49個tell得12個入outline、鎖定0個；四人一個模版；對白幾乎唔存在

**背景讀取順序**：`PROJECT_STATUS.md` Round 131 → `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` → 11份 `03_characters/*.md`（尤其操/紫音/凜/彩四份）→ `character-voice-bibles/`（現存得晴香/美夜子）→ `05_naming_and_psychology_system.md`

**已驗證嘅事實**：49個設計好嘅心理tell，得12個（24%）擺入任何Act Outline，**鎖定咗嘅係零個**，全部標「擺位建議，未定案」；操/紫音/凜/彩四個角色共用「傷口→面具→謊言→剝落→死」嘅模版（晴香係已確認嘅結構性例外，CDL-355）；全repo最長連續對白得6行；11個角色入面得晴香/美夜子有樣本通過「盲測」（遮名分唔到邊個講嘢）。

**呢條根因嘅核心問題**：好深嘅角色心理設計，係咪真係落到觀眾睇得到嘅具體場面同聲音，定係停留喺角色卡層面？呢個包括tell冇鎖定、四個角色結構同型、同對白幾乎唔存在三個互相扣連嘅現象。

**探索方向（例子，唔係窮盡清單）**：
- 派sub-agent逐個角色（可以分組，例如操/紫音一組，凜/彩一組，秋穗/朔一組）審視現存嘅「擺位建議」tell，每個角色至少揀1-2個**正式鎖定**（唔再用「可以」「未定案」呢類語氣），並且交代點解揀呢個唔揀第二個。
- 專門派一個sub-agent做「四人同模版」呢個問題——唔係要求推翻操/紫音/凜/彩已經深挖好耐嘅心理設計（呢啲質素好高，唔可以掉），而係搵每個人**呈現手法**上可以同其他三人明確唔同嘅具體方式（例如晴香CDL-355嘅「冇童年創傷」呢個做法本身係一個示範：唔改動內在傷口，改動嘅係結構性擺位）。
- 派sub-agent參考已驗證做得到嘅示範（美夜子嘅呈現），為操/紫音/凜三個（Act III會死嘅三個角色）各自試寫一小段可以講出口嘅台詞（3-5句），用嚟測試佢哋嘅聲音喺紙面上分唔分到——呢個純粹係測試/草稿，要明確標記 `[DRAFT ONLY — NOT CANON]`，唔可以自動成為voice bible。
- 建議優先做「便利店作戰」呢場已經被多個agent flag做安全試點嘅戲——四個角色共用一個外部事件（最後一件食物），各自反應鎖定唔同，適合做差異化嘅第一個練習場。

**落檔**：`REASONING_LOG.md`；如果搵到具體方案，可以順手更新 `QUESTION_QUEUE.md` QQ-206 做記錄；鎖定tell同試寫對白唔改動任何已批核心理設定，理論上大部分屬AUTO-RESOLVABLE，除非搵到同已有canon衝突先問。

---

## 根因四：主題——bible層已經預判贏，冇一個角色「攞晒滿分態度依然被摧毀、故事唔俾解釋」

**⚠️ 呢條根因風險最高，建議放五條入面最後討論，或者作者親自主持唔淨係交俾sub-agent。**

**背景讀取順序**：`PROJECT_STATUS.md` Round 131 → `12_philosophy_and_systems.md` → `IDEOLOGY_THEME_STANCE_MATRIX.md` → `THEME_CONFLICT_EXPRESSION_TABLE.md` → `ACT_III_OUTLINE.md`（Act IV 未批核附錄部分，尤其「態度殘響...完成最後一擊」段落）→ 操/紫音/凜三份角色卡嘅死亡設計段落

**已驗證嘅事實**：`12_philosophy_and_systems.md` 直接寫低「呢個問題嘅答案係肯定嘅——紫音、操嘅選擇證明咗」；操/紫音/凜三個死亡全部帶道德背書（操揀啱咗／紫音失敗歸咎方法錯唔係底層痛苦／凜嘅Surrender故事刻意唔醜化）；Act II（94KB，全劇「承」）「態度」「命運」兩詞出現次數為零；Act IV未批核附錄仲寫住「態度殘響...完成最後一擊」，即係態度由「絕境中僅存嘅自由」升格做「必勝武器」。

**呢條根因嘅核心問題**：「態度 vs 命運」呢個主題喺bible層已經寫死咗答案（「肯定嘅」），冇一個個案畀故事真心冒險輸——呢個令主題感覺似一個已經寫低嘅結論，唔似一場故事真係願意冒險嘅辯論。

**探索方向（例子，唔係窮盡清單，本質上呢個係一個 author-decision 準備輪，唔係一個可以自己收尾嘅設計輪）**：
- 派sub-agent評估：呢個「冇解釋、唔被平反」嘅功能，係咪一定要新起一個角色先做到，定係可以用現存但未深挖嘅角色（例如朔/秋穗/愛莉）承載，唔touch操/紫音/凜已經深挖嘅設計。逐個評估可行性，唔可以只提一個選項。
- 派sub-agent專門審視 Act II 呢一整幕——唔係要塞「態度」「命運」呢兩個字入對白（嗰個係反效果），而係搵幾個現有beat可以加返一次真正嘅立場衝突（唔止苦難疊加），列出具體beat候選。
- 派sub-agent專門處理 Act IV 附錄「態度殘響完成最後一擊」呢句——呢個係未批核草稿，唔係定案，可以提出修正方向（例如「態度殘響令晴香企得住，但最後一擊要由第啲嘢承擔」），但要交代清楚呢個係建議唔係決定。
- **收斂之後，用 `character-ideology-gate.md` 嘅 Author Decision Format 寫低最終需要問作者嘅嘢**（Decision / Why this matters / Evidence / Tension / 選項 / Supervisor recommendation / Question），但同作者實際對話時要拆返做自由form白話，唔用A/B/C。呢一步唔可以由sub-agent自己落實落canon。

**落檔**：`REASONING_LOG.md`；`IDEOLOGY_THEME_STANCE_MATRIX.md`同`THEME_CONFLICT_EXPRESSION_TABLE.md`嘅Act II/IV空缺格；如果搵到具體方案，可以順手更新 `QUESTION_QUEUE.md` QQ-204 做記錄；呢條根因幾乎必然會撞到author-decision，唔使勉強AUTO-RESOLVABLE。

---

## 根因五：製作現實——冇一場戲真正被寫過，診斷寫完就停喺doctrine層冇返生產

**背景讀取順序**：`PROJECT_STATUS.md` Round 131 → `CLAUDE.md`（Pipeline規則，尤其草稿例外）→ `ACT_I_BEAT_SHEET.md` → `canon/_working/.tmp/story_runs/haruka_first_transform_school/`（之前一次未完成嘅scene lab試跑）→ `.claude/skills/story-scene-lab/SKILL.md` 或 `.claude/skills/story-dialogue-script/SKILL.md`

**已驗證嘅事實**：全repo規劃內容:戲劇內容比例約397:1；全repo最長連續對白得6行；Act IV Outline由Round 074掛到Round 130，56輪連續「唔改變主阻塞點」但全部產出係角色心理側支，一場戲都未寫過；之前一次scene lab試跑停喺寫劇本前最後一步冇繼續；作者已經診斷過近似病灶兩次（Round 083苦難美化、Round 093正面特質缺口），兩次都寫低guardrail入bible但驗證確認guardrail從未套用返實際outline。

**呢條根因嘅核心問題**：規劃、診斷、守則寫得幾好都好，如果從來冇一場戲被真正寫出嚟測試過，就冇辦法知道邊個設計真係work、邊個唔work。呢個係另外四條根因嘅共通盲點——全部都停留喺文件層。

**探索方向（例子，唔係窮盡清單）**：
- 核心任務係**實際執行**：用 `story-scene-lab` 或 `story-dialogue-script` 對應嘅gate，寫一場已經AC confirm嘅場景做真正劇本測試（建議：E-01膠布戲——桐生健縫合傷口／晴香阻止美夜子抹除記憶／「痛係證據」），全程標記 `[DRAFT ONLY — NOT CANON]`。
- 可以派多個sub-agent分別扮演唔同角色（晴香/美夜子/桐生健）各自守住自己嗰個角色嘅voice bible／角色卡，交叉檢查對白會唔會走音，呢個係一個好用嘅sub-agent陣型（唔係並行提方案，而係扮演唔同角色互相校對）。
- 寫完之後要誠實評估：呢場戲寫出嚟企唔企得住？如果唔work，準確指出係邊一條根因（一/二/三/四）先係真正病灶，唔好夾硬話寫得好。
- 平行任務：審視 `08_narrative_design_bible.md` CDL-330 嘅四條守則、`character-ideology-gate.md` Gate A模板，逐一核對邊啲已經確認嘅方向仲未寫返入 `ACT_I_OUTLINE.md`／`ACT_II_OUTLINE.md`／`ACT_III_OUTLINE.md`，產出一份具體嘅「已批核但未落地」清單（呢個純粹係執行已有決定，AUTO-RESOLVABLE，唔使問作者）。
- 如果喺過程中發現根因五其實同其他根因有更深嘅共通結構（例如診斷同修正一直停喺doctrine層嘅模式），值得展開就展開，唔使收窄返去「淨係寫一場戲」。

**落檔**：草稿本身放喺 `canon/_working/.tmp/story_runs/`（或延續之前嗰次試跑），唔寫入任何 `03_characters/*.md`；`REASONING_LOG.md` 記錄評估結果；如果搵到具體方案，可以順手更新 `QUESTION_QUEUE.md` QQ-203 做記錄；如果測試證實某條根因先係真正問題，喺對應根因段落加註。

---

*建立於 Round 131（2026-08-06），2026-08-07 修正為「以根因為主、QID只做落檔參考」。呢個檔案本身唔係canon，係流程交接工具。五個session可以以任何次序、任何時間、獨立進行，唔互相阻塞。*
