# story-work-flow／story-orchestrator 使用觀察（逐 beat 慢慢分析過程中記低）

衍生自：`.claude/skills/story-work-flow/SKILL.md`、`.claude/skills/story-orchestrator/SKILL.md`
依據：`QUESTION_MATRIX.md`「Demo Beat 層逐 beat 慢慢分析」
狀態：DRAFT 觀察清單（唔係已批改動；作者揀咗先改 skill）

## 2026-11-02 第一輪（覆蓋檢查＋第一個 beat）
1. 冇定義咩先算「分析」：只講「揀 10–14 個角度」，我先數標題當分析。建議每角度最低＝出處（檔:行）＋一次攻擊＋結論。
2. 冇講明要「講出嚟畀作者聽」：skill 叫「2–3 行結論、直接寫檔」。建議固定講法：點解存在（出處）／逐角度／攻擊／發現／未核對。
3. 「批核前覆蓋檢查」同「逐 beat 慢慢講」混埋：兩樣唔同，要分開寫幾時用邊個。
4. 報到次序冇強制：skill 內容係叫咗先到，已經做咗幾步；建議喺 CLAUDE.md 寫「叫 skill 之前唔做其他工具調用」。
5. 步驟檔同實際檔唔同步，冇對賬步驟（Stage 3–6 仍 TODO 但設計檔已寫好）。
6. 冇亂碼檢查：「佢→佳」「嚟→嚎」共 87 處係偶然發現。
7. 「已定案」冇寫決定者：「HW 決定，已定案」差啲當成作者批准。建議決定欄標明 作者／舊編劇／canon。
8. 核對出處太貴：每條要自己 grep；建議加「查設定編號」小工具。
9. 補件冇分清誰做：AI 可做嘅補件要直接做，只有要作者決定先問。

## 2026-11-02 第二輪（第二個 beat：天台到場）
10. 檔案自己嘅出處有錯，skill 冇叫我逐條核：呢個 beat 引 CDL-198 講美夜子保持距離，實際係黑奏動機揭示；「Act I 安全網對話提示慣例」喺玩法文件搵唔到（對話提示係戰鬥機制）。建議：分析一個 beat 時，其 source_obligation_trace 同每個角度入面嘅出處全部逐條對原文，唔止核新增嘅。
11. 冇雙向依賴核對：下一個 beat 靠「呢個 beat 一句想幫人嘅台詞」撐因果，但呢個 beat 動作欄冇呢句（只有意圖欄）。Beat 範本冇「我依賴上／下一個 beat 乜」欄，亦冇叫我兩邊對。建議每 beat 加「被依賴／依賴」兩欄，批核前逐對核。
12. 冇「點解係獨立 beat 而唔係合併」嘅標準問題：Beat Sheet 原本得一個「天台使命說明」beat，V4 拆成三個再併兩個。skill 冇叫我追問拆分理由，我係自己想到。建議存在理由三問：canon 出處／唔做會斷咩／點解唔併入鄰近 beat。
13. 追溯粒度唔一致：呢個 beat 引 Beat Sheet 嘅行，實際對應嘅係合併前整個使命說明 beat。建議追溯標明「部分對應」。
14. 邊啲嘢分析時可以順手改，skill 冇寫：我改咗出處同暫定標記（唔改設計）。建議明文：逐 beat 分析時可修出處錯誤、補標記；改設計內容要先問。
15. 每個 beat 要 8 次左右工具調用，大量重複讀同一批設定：建議層級開始時一次過載入該層常引設定摘要。
16. 逐 beat 分析變成「審核模式」，我冇主動提新方向。**呢個係我冇跟常設規則（Candidates-First、story-solution-space-designer 嘅 Proactive Opportunity Mode），唔係 skill 冇叫我——2026-11-02 作者糾正，我頭先推卸咗。** Skill 可以做嘅補強：逐 beat 範本加固定欄「新建議（2–3 個，最少 1 個現有內容以外嘅新方向，標 CANDIDATE，核對 canon 先講）」，令漏做時一眼睇到；但主因係我自己要守規則。
17. 新建議要先核 canon 先可以講：我第一次講『講驚時捏膠布邊』，核對後發現 canon 嘅摸膠布動作（CDL-357）係『助人前半秒』，用喺驚就用錯意思，已撤回改版。建議：任何新建議提出前，跟 Angle Basis Rule 核出處，唔好憑印象講。
18. 新建議嘅分析深度冇標準：我第一次只核 5 個角度。Angle Basis Rule 本身寫明『中等＝每角度一行』，但範本冇提醒；建議每個 CANDIDATE 一定附同一套角度（至少 10 個）嘅並排比較，三方包括『現狀』。
19. 對話內提設定編號（CDL-xxx）：CLAUDE.md 同 protocol 禁止，我多次違反；建議喺回覆前自檢清單加『有冇編號』。
20. 分析別人（或我自己）剛做嘅修改時，要同相鄰 beat 核對有冇功能重複：我加咗 N2 想幫手，隔一個 beat 就發現同 N3 撞。建議每次改 beat 後即時讀前後各一個 beat 核對。
21. 查設定編號工具要處理『同號兩條』：決定記錄裡 CDL-176 有兩個完全唔同嘅條目（維多利亞之淚／緋潮視覺），第一次 grep -m1 會攞錯。建議查詢工具返回所有同號條目；亦建議記錄檔加重號檢查。
22. 行數式出處（IM:52、GT:27、M:302）易過期：這次 IM:52 實為 IM:55。建議出處寫『檔名＋欄名』而唔係單純行數，或者驗證腳本檢查。
23. 上層硬約束（HC 表）冇自動帶入逐 beat 分析：HC-2e（先感受後被告知）係 High，我係查另一條設定時偶然見到。建議逐 beat 開始時自動列出該 beat 觸及嘅 HC 項。
24. 『同一 beat 幾件事』冇上限規則：本 beat 六件事，Angle 26 功能重複／過載只靠我自覺。建議 Beat 範本加『功能數量』欄，超過 N 個要解釋。
25. 解釋要『冷讀都明』：我用『洩露一點，違背精心隱藏』『功能過載』『二周目』呢類內部說法，作者需要識背景先明。建議 Plain-Language Rule 加：任何概念第一次出現，先用日常句子講一次（例：『美夜子要瞞住晴香用魔法會好傷身，直到 Act III』），術語唔好單獨出現。
26. 『canon 唔可以改』嘅錯覺：我將舊設定當死規則，只列『搬返／兩處／承認偏離』。作者話如果新做法更好，可以提出討論。建議 skill 明文：發現新做法優於舊文件，要主動提出『我認為新做法更好，點解，舊文件咁寫，由你決定』，唔係只列合規選項。
27. 發現『同設定唔一致』之前，要先查該 beat 嘅推導／質疑紀錄（CHALLENGE_*、DERIVATION、SOLUTION_SPACE）：緋潮搬天台其實 v4 已經有人提出同我一樣嘅理由並搬咗，我卻當成新發現同『漂移』。建議逐 beat 分析第一步固定『讀推導歷史』，區分『有意偏離但冇登記』同『無意漂移』。
28. 用字要貼住作者揀咗嘅意思：作者揀『天台第一次＋街戰保留』，我寫成『搬去天台』，偏離範圍亦寫大咗。建議：落檔前把『改動前／改動後』兩句對返作者原話，確認冇多講或少講；遇到『搬／移／取代』呢類字眼要特別核對係新增定移走。
29. 提出問題時要標明屬邊一層：我將『話多唔多』（場景層）當成 beat 層待決定。建議逐 beat 分析每條發現固定標『屬 Beat 層／屬 Scene 層（交接）』，場景層事項只寫交接備註，唔放入 beat 層待決定清單。
30. 要比對『前提』唔止『內容』：教學階梯喺推導紀錄假設玩家已有首戰操作，V5 檔假設冇，兩個版本前提矛盾。建議逐 beat 分析時，列出該 beat 依賴嘅前提（玩家已有咩、角色已知咩），同上游版本逐項對。
31. 相鄰 beat 出口／入口要有對接核對：上一個 beat 出口係驚＋使命感，本 beat 入口寫『平靜』。Beat 範本有 entry_state／exit_state 但冇『同上一個 beat 對得上』核對步驟；建議跨 beat 對接表。
32. 『非計劃內／第一次』類 canon 條件要檢查前面有冇預先用盡：美夜子『本能擋』係非計劃內，若前一 beat 已寫佢計劃性防護支援，身份會被削弱。
33. 逐 beat 分析漏咗『beat 之間』：我每個 beat 都睇自己嘅觸發同角度，冇問『點解由上一個 beat 去到呢個』。Consequence-Driven Progression 只要求每個 beat 有外部觸發，唔保證觀眾睇得見前後因果。建議：每對相鄰 beat 固定四問（狀態變咗乜／點解而家發生／點解係佢反應／留低咩後果），寫入『接駁表』，由 skill 要求同 beat 分析一齊做。
34. 被舊編劇預設刪走嘅過渡 beat 冇人覆核：『B0 開頭日常』標 HW_DEFAULT 可刪，v4 推導直接刪走，作者一直冇見過決定。建議：任何標『可刪』嘅 beat 被刪走，要列入偏離登記畀作者知。
35. 條件來源要追到 canon 對應：Beat Sheet 寫教學階梯由首戰兩個 beat 承擔（demo 範圍外），所以 demo 必須補教學；我第一次分析只講前提矛盾，冇追到 canon 原本點安排。建議：遇到範圍外 beat 承擔嘅功能（教學、世界觀），逐項列出『demo 邊度補』。

## 改動提案（待作者批，2026-11-02；未改任何 skill）
背景：作者指出 skill 應該自己知道有咩位要補，唔使作者提醒。今次逐 beat 過程中，作者要親自提醒過：角度分析定義、講出嚟、新建議、新建議都要角度、解釋要日常、舊文件可以挑戰、分層、beat 之間因果、用字（搬）。
現有 skill 其實已有：`story-room` Delivery Gate 第 4 項『跨 beat 銜接』、CROSS_RECORD_CONSISTENCY_GATE、Premise Audit。失敗原因：①只係一句話，由寫手自己宣稱通過；②Premise Audit 只查『能力跳躍』類前提；③validator 只驗格式；④`story-work-flow` 冇路由入 `story-room` 嘅 BEAT_LAYER_DEEP_DESIGN mode；⑤我今次冇叫 story-room。
提案：P1 接駁表（每對相鄰 beat 四問，答『硬切』自動標 GAP）｜P2 前提對賬（玩家已有／觀眾已知／角色已知／時間道具）｜P3 範圍外功能承擔登記＋被刪／被降級項目進偏離登記｜P4 每 beat 自動列觸及嘅高優先約束＋發現標層＋功能數量上限｜P5 逐 beat 固定『新建議』欄（2–3 個，≥1 新方向，同套角度並排含現狀）｜P6 validator 加機械檢查（無出處比例、全『冇風險』比例、entry／exit 對接、功能數量）＋查設定編號小工具（處理同號多條）｜P7 story-work-flow 逐 beat 工作必須進 story-room mode。
36. 角度集合自揀會漂移：skill 話用 Master Angle Registry，我卻自揀 13–17 個，仲改咗名。建議逐 beat 輸出固定 28 行表（每行：AFFECTED／UNAFFECTED＋依據），UNAFFECTED 要引設計內容講理由，缺行即未完成；Pool 2（13–18）NOT_RELEVANT 必須落檔。
37. 世界觀／設定介紹有專屬文件（Layer 3.5 環境敘事矩陣、CDL-175／181）但逐 beat 流程冇叫我查：V5 五份 beat 檔對呢個矩陣零分配。建議：任何 beat 觸及世界規則或設定，必須查矩陣並寫明『用邊種媒介（Text Props／道具描述／NPC 碎話／背景視覺／假數值 UI）、第幾個』。
38. 『beat 結論』標準冇定義：TARGETED 觀察被我當成結論講。建議定義：Beat 結論＝FULL 28 角度＋Gate A／B／C＋知情狀態表＋四拍＋環境敘事分配＋約束逐項＋接駁表；缺任何一項只可叫『觀察』。
39. 範圍外 beat 承擔嘅設定介紹功能要有帳：canon Beat 0 負責光幕、日夜區、帝國宣傳、直播文化；demo 切走後冇人補。對應提案 P3，建議加例子。

## 已批並已改（2026-11-02，作者批准『按整個對話提出嘅改善位修改』）
對應表（觀察編號 → 改咗邊度）：
- 1 分析定義、36 固定 28 行表、38 beat 結論標準 → `story-room` H.4／K；`story-orchestrator` Angle Basis Rule（固定 28 行表）
- 2 講出嚟格式、3 覆蓋檢查 vs 逐 beat 講、29 標層、20 改完讀前後 beat → `story-room` H.2／H.6、I.12
- 4 報到次序、5 步驟檔對賬、9 補件分工、P7 路由 → `story-work-flow` 步驟 1／3／批核關卡
- 10 出處逐條核、21 同號多條、22 行數易過期、8 查編號工具 → `story-room` I.10；新 `.claude/story_system/lookup_id.py`（已測：CDL-176 回報 2 條並標重號）
- 11／31／33 接駁、27 先查推導歷史、34 被刪過渡 beat → `story-room` H.1、I.3、I.4；`story-orchestrator` Completeness Gate 12
- 12 存在理由三問 → `story-room` H.2
- 13／35／39 範圍外功能帳、30 前提對賬 → `story-room` I.1、I.2；Gate 13
- 14 順手改範圍 → `story-room` H.5
- 16／17／18 主動新建議、並排含現狀、先核 canon → `story-room` J；`story-orchestrator` Candidates-First 主動提
- 23 硬約束自動列、24 功能數量上限、32 非計劃內預先用盡 → `story-room` I.5、I.7、I.8；validator 功能數量提示
- 25 冷讀都明、26 新做法優於舊文件、28 用字貼原話 → `story-orchestrator` Plain-Language Rule 兩條新 bullet；`CLAUDE.md`
- 37 設定介紹查環境敘事矩陣 → `story-room` I.6；Gate 11
- 6 亂碼、7 決定者欄、P6 validator → `validate_beat_layer.py` 新增 6 類非阻斷提示（出處比例、全『冇風險』、全 KEEP、亂碼、HW 定案、硬切接駁、功能>5）；Markdown 範本加選填欄 decided_by／function_count／env_narrative_allocation／prev_link
- 15 預載常引設定 → 未做（需要另開設定摘要檔，待作者決定）
未同步：`.agents/skills/story-orchestrator` 同 `.agents/skills/story-room` 係另一個舊格式短檔（無 Angle Basis Rule／深度設計模式），冇改；`.agents/skills/story-work-flow` 已同步。
40. 新流程試跑結果（日常巡街）：Gap Scan 自己搵到 6 類缺口（被刪項、範圍外功能帳、道具數量、硬約束、功能數量、環境敘事）；漏咗『下游孤兒』（其他文件依賴嘅埋位／場景已被刪）。建議 story-room I 加第 13 項『下游依賴核對』：搜對白工作坊、表演文件、其他 beat 有冇引用呢個場景或埋位；同時 I.4 加明確步驟『對返作者已揀範圍文件（例 SCOPE_AND_CUT_LIST）逐項核，被標 HW 額外嘅項目係咪其實屬作者決定』。待作者批。
## 已批並已改（第二批，2026-11-02，作者揀日常巡街試跑後『批 skill 補第 13 項』＋『前台更易讀更人話、後台不變』）
- 40 下游依賴核對 → `story-room` I.13；I.4 加『對返作者已揀範圍文件逐項核』；Delivery Gate 第 8 項加下游孤兒。
- 顯示層 → `story-room` L（前台後台分工、固定圖表工具、28 角度人話對照、術語白話、發現三句、預設長度）；`story-orchestrator` Plain-Language Rule 加一條；`.agents` 總管硬規則加第 9 點。
- 新網頁卡片（`tools/workbench/public/cards/`）：`scan.js`（一覽清單）、`chain.js`（流程圖）、`compare.js`（並排比較表）；協議文件 `web-ui-protocol.md` 已加欄位說明。已用 node 假 DOM 測試三張卡渲染結構，未喺真網頁睇過（要重新載入網頁）。
- `.agents`：story-room、story-work-flow 與 .claude 一致；總管硬規則加第 9 點。
41. 新流程第二段實戰：後台檔（28 行×2、三關卡、知情表、四拍、環境敘事、下游）可一次過產出，但前台要分段摘要；建議 skill 提供後台分析檔範本（章節固定），減少每次砌格式嘅時間。
42. 角度表 28 行×2 內容量大，部分格（例如 PR1 UNAFFECTED 市民）理由偏短；建議 validator 加檢查『28 行齊、UNAFFECTED 有理由』。
43. 漏讀角色檔：分析 PR1 時我只核對咗『引用嘅設定』，冇讀美夜子角色檔本身；`miyako.md` L180 已有燈塔效應揭示時機（CDL-089），我寫反咗因果。建議 Gap Scan 加第 14 項『角色檔核對』：每個在場角色嘅角色檔、行為習慣、已定知情／揭示時機逐項對。
44. 『角色明知風險仍行動』冇專屬檢查：落喺 Character Knowledge State／Moral Tradeoff／Ideology／Design Sufficiency A 之間，我 Moral Tradeoff 一格用『觀眾未知故未成立』輕輕帶過。建議 Gap Scan 加第 15 項『知情→行動一致性』：角色知道咩→點解仍做→係咪撞佢立場→觀眾點讀。
45. 同主題多條設定要對賬：燈塔效應有 CDL-064（持有者啟動被獵殺）同 CDL-089（美夜子本身係燈塔）兩條，我只用一條。建議 Gap Scan 加第 16 項『同主題多條設定對賬』：用 lookup_id.py 同 grep 主題詞搵晒相關決定，列出疊加／衝突。
46. Registry 清單缺口規則未執行：掃完要問『有冇相關但冇列嘅角度』並記入 ledger、向作者建議。今次候選：知情→行動一致性、責任歸屬（出事誰承擔）、角色討喜度（觀眾點睇美夜子）。按 angle-system『唔加新角度 ID』，建議以 Gap Scan 項目形式補，唔加新 ID。
## 已批並已改（第三批，2026-11-02）
- 43 → `story-room` I.14；44 → I.15；45 → I.16；46 → 清單缺口記錄（責任歸屬、討喜度）寫入 I.16 後括號，唔加新角度 ID；Delivery Gate 新增九項；.agents room／work-flow 一致，.agents orchestrator 次數同步。
