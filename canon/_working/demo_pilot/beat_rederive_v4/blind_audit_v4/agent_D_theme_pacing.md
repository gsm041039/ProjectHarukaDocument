# Blind audit v4 — Agent D（氣氛／主題／象徵／故事判定／節奏＋Gate C）

被審：`ARTIFACT_BEAT_LAYER_V4.md`｜角度：4 Atmosphere/Tension、5 Theme Expression、17 Symbolic/Ritual、18 Narrative Validation Level、25 Pacing/Breathing｜加 Gate C｜模式：FULL（指定角度 × G1–G4）
狀態：AUDIT ONLY，唔批核、唔代作者決定、唔改被審檔。中途 API 中斷一次，由頭寫（中斷前未有落檔）。

## 0. Exposure 申報
- **讀 artifact 之前／類型＝CLAUDE.md @import 載入內容：** angle-system.md、state-files.md、character-ideology-gate.md、consequence-driven-progression.md（全部屬准讀／協議檔，無禁讀內容）。
- **讀 artifact 之前／類型＝檔名／路徑洩漏：** session 開頭 gitStatus snapshot 顯示咗禁讀檔名（`BEAT_LAYER_V3_2.md`、`BEAT_LAYER_ANGLE_SCAN.md`、`DERIVATION_LEDGER.md`、`DEMO_PILOT_TRACKER.md`、`PROJECT_STATUS.md` 等）。只見檔名，冇讀內容。
- 實際 Read／Grep 路徑：本資料夾兩檔；`canon/_working/story_construction/{ACT_I_BEAT_SHEET,THEME_CONFLICT_EXPRESSION_TABLE,IDEOLOGY_THEME_STANCE_MATRIX}.md`；`canon/_working/CANON_DECISION_LOG.md`；`canon/03_characters/{ayakomoji_misao,haruka,miyako}.md`；`00_Story_Brief.html`。冇讀任何禁讀內容。

---

## 1. 暖／不安曲線（逐 beat，0–5 主觀刻度，依 artifact 每 beat「價值／觀眾Δ」欄推出）

| Beat | 暖 | 不安 | 張力（緊張度） | 依據（artifact 原文） | 曲線備註 |
|---|---|---|---|---|---|
| N1 | 2 | 2 | 1 | 「驚 → 暫時安穩（假安穩）」「倒影慢半拍」 | 靜；暖係假暖 |
| N2 | 1 | 3 | 2 | 「隱藏嘅驚 → 講出嚟嘅驚」 | 全 demo 不安最高之一（作者鎖） |
| N3 | 2 | 2 | 1 | 「未知 → 有一個美好嘅解釋（偽亮色）」「感到有嘢冇講」 | 轉：無 |
| N4 | 3 | 2 | 1 | 「驚 → 希望（帶住驚）」「接受得太快；工具冇解釋」 | 首個暖升 |
| B1 | 4 | 1 | 3 | 「平靜 → 光榮戰鬥」 | 偽亮色高峰開場 |
| B2 | 2 | 3 | 4 | 「自信 → 吃力」；美夜子擋 | 危機①＋被保護 |
| B3 | 3 | 3 | 4 | 「吃力 → 強大（底下有一下唔舒服）」 | 力量峰＋不安峰並存 |
| B4 | 2 | 1 | 4 | 「兩人戰 → 三方混戰」；救路人 | 平台期 |
| B5 | 0 | 3 | 5 | 「優勢 → 危機」 | 張力最高點 |
| B6 | 4 | 1 | 4→2 | 「危機 → 震驚的溫暖」 | 危機②＋被保護 |
| B7 | 3 | 2 | 2 | 「震驚 → 勝利」「消散嗰下有啲唔對，但 UI 好歡樂」 | 偽亮色裂縫 |
| B8 | 4 | 1 | 1 | 「戰鬥 → 有隊友」「三人站埋一齊，暖」 | **第一個「收尾暖」** |
| M1 | 1 | 3 | 3 | 「日常戰鬥 → 生存危機」；手震 | 由暖急降 |
| M2 | 2 | 1 | 2 | 「被迫合作（未熟）」 | — |
| M3 | 3 | 1 | 3 | 「尷尬 → 共同秘密嘅刺激」 | 喜劇緊張 |
| M4 | 5 | 3 | 2 | 「暖峰（同一啖入面有痛）」 | 全 demo 暖＋不安同時最高 |
| M5 | 5 | 1–2 | 1 | 「孤單 → 屬於（觀眾知道有一樣嘢冇人知）」 | 真收尾 |

**形狀讀法：** N 段＝低張力、不安先行（作者鎖「好驚」）→ B 段兩個「險 → 有人擋」危機波（B2、B5/B6）→ B8 暖平台 → M1 急降 → M3 喜劇 → M4 雙峰（暖＋痛同一點）→ M5 暖落地。整體符合固定決定「好暖＋少少不安；結尾暖」。不安從未超過 3（除 B5 張力 5 屬戰鬥緊張而非「不對路」式不安），即係「少少不安」係守住咗嘅。主要問題見下：（a）B8 同 M5 兩個同強度暖收尾；（b）N1–N4 連續四個 N beat 低張力；（c）B 段兩次同形危機波。

---

## 2. Cells（JSON lines）

### Angle 4 — Atmosphere / Tension
```jsonl
{"CELL_ID":"D-04-G1","ANGLE_ID":"4","TARGET_ID":"G1","QUESTION":"N1–N4 夜＋天台，『好驚』同『少少不安』嘅氣氛有冇具體載體，定只係形容詞？","EVIDENCE":"ARTIFACT:15 N1『倒影慢半拍…自己圓過去（當攰）』；ARTIFACT:36 N3『地平線有一抹暗紅（可讀成日落）…講到代價邊就轉開／望開』；ARTIFACT:46 N4『只講「血糖低就用」，唔講點解會低』；CDL-123（CANON_DECISION_LOG:232）倒影慢半拍＋身體沉重＋自圓；CDL-176（:303）緋潮 Lv.1『地平線邊緣極難察覺的暗紅色光害』","COUNTERCHECK":"COUNTER: 天台三 beat 主要靠美夜子講解，氣氛可能淪為對白資訊交付。SEARCHED: 逐 beat 搵非對白不安載體——N1 倒影、N3 暗紅＋望開、N4 注射槍，每個 beat 至少一個視覺／道具載體。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"D-04-G2","ANGLE_ID":"4","TARGET_ID":"G2","QUESTION":"B1–B4 戰鬥中『偽亮色』同『合體技唔對路』嘅不安，會唔會被戰鬥爽感完全蓋過，或者反過嚟過重？CDL-224 要求 E-02 連結＝Act I Peak Moment of Doubt，v4 降強度係咪背離？","EVIDENCE":"ARTIFACT:75 B3『兩人嘅當下情緒一瞬間互相透明…冇任何記憶畫面』；ARTIFACT:78『強度降＝DEV』；CDL-224（CANON_DECISION_LOG:359）『將「友情合體技」扭曲為「強制心理入侵與創傷共享」，摧毀觀眾最深層的類型預期』；00_INPUT_PACKAGE:8 固定決定『整體＝好暖＋少少不安』","COUNTERCHECK":"COUNTER: CDL-224 嘅 Peak 係『E-02＋E-03 序列』，峰值靠 E-03 勝利後靜默引爆，E-03 唔喺 demo range；demo 只做前半，降強度同作者固定決定一致，並已標 DEV。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-04-G3","ANGLE_ID":"4","TARGET_ID":"G3","QUESTION":"B5–B8 危機 → 溫暖 → 勝利 → 暖收束，B7 屍骸『似有人樣』嘅不安同 UI 歡樂並置會唔會互相抵消？","EVIDENCE":"ARTIFACT:106 B7『被打倒前一拍停止抵抗、似有人樣，然後消散；UI Likes 爆升』；ARTIFACT:107『消散嗰下有啲唔對，但 UI 好歡樂（偽亮色裂縫）』；00_Story_Brief.html:4846『甜係真的，痛也係真的，而且就係同一口裡面』","COUNTERCHECK":"COUNTER: 並置可能太輕，玩家喺勝利快感中完全睇唔到。NO_DIRECT_COUNTER: 並置屬 Brief Tender Cruelty 原則嘅直接執行；可見度係 Scene／導演層問題，Beat 層已指定兩者同時發生。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-04-G4","ANGLE_ID":"4","TARGET_ID":"G4","QUESTION":"M4 掉牙係全 demo 不安最高點，會唔會壓過 M5 嘅暖，令結尾唔再係『暖』？","EVIDENCE":"ARTIFACT:143 M4『操即刻收埋、強忍、繼續扮正常。冇人察覺』；ARTIFACT:148 M5『真暖收尾（牙唔係最後畫面）』；ARTIFACT:150『操閉住嘴入咗相』；00_INPUT_PACKAGE:8–9 固定決定","COUNTERCHECK":"COUNTER: M5 『閉住嘴』將牙帶入最後一張相，觀眾最後印象可能仍係痛。SEARCHED: M5 價值欄『孤單 → 屬於（觀眾知道有一樣嘢冇人知）』——artifact 有意識將不安降做底層知識而唔係畫面主體，同固定決定『結尾暖＋少少不安』一致。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```
**冇角度 4 會漏咩：** 會漏 B3 降強度同 CDL-224『Act I 最強懷疑觸發點』之間嘅張力——其他角度會當 DEV 已標就算，但氣氛角度先會問「demo 教識玩家將連結讀成『少少怪』，正式版要唔要重新教」。

### Angle 5 — Theme Expression
```jsonl
{"CELL_ID":"D-05-G1","ANGLE_ID":"5","TARGET_ID":"G1","QUESTION":"天台使命說明喺 canon Gate C 表係 DIALOGUE_ONLY（『需 Beat Sheet 落地為行為層』），v4 有冇補到行為層？","EVIDENCE":"THEME_CONFLICT_EXPRESSION_TABLE:24『DIALOGUE_ONLY（需 Beat Sheet 落地為行為層）』；ARTIFACT:36 N3『講到代價邊就轉開／望開』；ARTIFACT:46 N4『交一支葡萄糖注射槍…唔講點解會低；晴香接過＝接受』；ARTIFACT:68 B2『玩家被迫用一次注射槍（天台得嚟嗰支）』；ARTIFACT:123 M1『最後一支注射槍用完…魔法要燒血糖（隱形揭示）』","COUNTERCHECK":"COUNTER: 『望開』仍係表演細節，唔算行為層。SEARCHED: 注射槍形成『謊言嘅禮物』行為鏈：交付（N4，隱瞞）→ 救命（B2，謊言有效）→ 耗盡（M1，代價浮面）。呢條係道具＋玩法承載，唔靠對白。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"D-05-G2","ANGLE_ID":"5","TARGET_ID":"G2","QUESTION":"B1 直播 UI 係帝國『魔法＝娛樂化情緒資本』立場嘅唯一載體，demo 有冇同晴香『我幫到人』真正交鋒？","EVIDENCE":"ARTIFACT:60 B1『直播 UI 彈出、觀眾數上升』；ARTIFACT:61『晴香唔覺直播有問題（「我幫到人」）』；THEME_CONFLICT_EXPRESSION_TABLE:26 Reality Show 行（台前 vs 後台遮戰損，[NC] E-03後）；IDEOLOGY_THEME_STANCE_MATRIX 帝國『Act I validate 其表象』","COUNTERCHECK":"COUNTER: canon 嘅台前／後台對比屬 E-03 後，唔喺 range；Act I 帝國立場本來就係『validate 表象』。SEARCHED: demo 內搵到 B7『UI Likes 爆升』對『似有人樣消散』、B8 操『避開鏡頭』——兩個輕裂縫，足夠做種子層。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-05-G3","ANGLE_ID":"5","TARGET_ID":"G3","QUESTION":"B7 屍骸『正面消散』被標為『態度示範一半』，冇反面對照，觀眾讀唔讀到『態度』呢個主題，定只係讀到『怪物死得安詳／有啲怪』？","EVIDENCE":"ARTIFACT:104『屍骸正面消散（態度示範一半）』；ARTIFACT:108『O14 正面消散（反面奪舍＝REVALIDATE）』；ACT_I_BEAT_SHEET:290 E-02『觀眾接收「屍骸態度選擇」對比示範（正面消散 vs 反面奪舍被阻）雛形』","COUNTERCHECK":"COUNTER: 半個示範都可以做 THEME_SEEDED，全劇其他位會補返反面。NO_DIRECT_COUNTER: 冇對照時，『停止抵抗、似有人樣』喺 demo 內只能讀成不安（氣氛層成功），唔能讀成『佢揀咗一個態度』（主題層失效）——即係 artifact 標『態度示範』嘅主題功能實際冇交付。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-05-G4","ANGLE_ID":"5","TARGET_ID":"G4","QUESTION":"基地段（M1–M5）有冇主題功能，定純偽亮色材料？canon Beat 2.6 標 THEME_NOT_RELEVANT。","EVIDENCE":"ACT_I_BEAT_SHEET:388 Beat 2.6『theme/stance | THEME_NOT_RELEVANT_WITH_REASON』；ARTIFACT:142 M4 觸發『延遲到「處理完現場」先爆（Brief:6098 通則）』；00_Story_Brief.html:6098『先處理現場才掉牙…她們連崩潰都沒有權利即刻崩』；ARTIFACT:124 M1『魔法要燒血糖』","COUNTERCHECK":"COUNTER: v4 將掉牙同燒血糖加入基地段，令 canon 一個『無主題』段落承載咗代價主題——係加強唔係矛盾。SEARCHED: M1/M4 兩個代價點都係身體／道具承載，冇說教。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
```
**冇角度 5 會漏咩：** B7「態度示範一半」——氣氛角度會判佢成功（有不安），但只有主題角度會發現「標咗做主題載體，實際只交付到氣氛」。

### Angle 17 — Symbolic / Ritual Behavior
```jsonl
{"CELL_ID":"D-17-G1","ANGLE_ID":"17","TARGET_ID":"G1","QUESTION":"熱可可儀式喺 N1 有冇建立到後面可以被拆穿（可樂失味／嚼冰）嘅清晰重複行為？","EVIDENCE":"ARTIFACT:15『沖極甜熱可可、閉眼飲（儀式）』；ARTIFACT:18『熱可可→E-03 可樂失味』；haruka.md:295 habit-hot-cocoa『濃稠至病態程度…刮取杯底殘留糖粉…強行製造虛假幸福感』；CDL-123（CANON_DECISION_LOG:232）","COUNTERCHECK":"COUNTER: demo 內熱可可只出現一次，未成『重複』就已經當儀式。SEARCHED: M4『晴香帶咗甜甜圈同煉乳，大家補糖』——甜食作為安全閥喺 G4 有第二次變奏（由私人儀式變共享），重複成立。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"D-17-G2","ANGLE_ID":"17","TARGET_ID":"G2","QUESTION":"B4 操『撐傘、唔掂地』嘅象徵載體同 canon 象徵語言一致嗎？","EVIDENCE":"ARTIFACT:83『撐傘、唔掂地、姿態優先』；ayakomoji_misao.md:233『傘子（逃生缺口）…隔開世界又攜帶世界，控制接觸又保留逃路』；ayakomoji_misao.md:365『絕對不接觸地面』","COUNTERCHECK":"COUNTER: 傘喺 canon 係『控制接觸』，而 B6 晴香嘅接觸係『未被告知』——同一組象徵喺 B6 被打穿，應有回應。SEARCHED: B8『操私下整理被晴香掂過嘅位』即係回應，象徵鏈閉合。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"D-17-G3","ANGLE_ID":"17","TARGET_ID":"G3","QUESTION":"牙作為操嘅身體代價象徵，喺 demo（Act I）由 B5 前兆去到 M4 真跌，會唔會壓扁 canon 嘅分期升級（Stage 1 牙齦滲血 → Stage 2a 牙鬆脫落）？","EVIDENCE":"ARTIFACT:92 B5『牙前兆』；ARTIFACT:143 M4『一隻牙跌出嚟』；ayakomoji_misao.md:290『Stage 1（Act II前期）…牙齦滲血』；ayakomoji_misao.md:292『Stage 2a（Act II中期，E-09a）…牙齒開始鬆動乃至脫落』；00_INPUT_PACKAGE:9 固定決定『操一隻牙真係跌』；ARTIFACT:145『AD／DEV／PROVISIONAL』","COUNTERCHECK":"COUNTER: 作者已固定『真係跌』，artifact 已標 DEV；唔係本格可推翻嘅事。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"D-17-G4","ANGLE_ID":"17","TARGET_ID":"G4","QUESTION":"M5 合照——相片喺 canon 係操最深恐懼嘅象徵（母親定格假笑），晴香硬拉佢入鏡，故事點對待呢個象徵？","EVIDENCE":"ARTIFACT:150 M5『晴香硬拉避開咗嘅操入鏡…操閉住嘴入咗相』；ayakomoji_misao.md:321 habit-photo-arc『起點：操極度抗拒被影相…一張相如果影到任何瑕疵，就等於證據確鑿嘅「表演失敗」』『轉捩點扣連速寫簿真相』；ayakomoji_misao.md:376 Act I 觸發閾值『任何未被告知的接觸』","COUNTERCHECK":"COUNTER: 『閉住嘴入相』本身已係抗拒＋遮瑕，象徵係對嘅。SEARCHED: M5 冇寫操入相之後嘅反應／代價（對比 B8 有『私下整理被掂過嘅位』），價值欄只寫『孤單 → 屬於』——即係 artifact 用晴香視角定義呢個 beat 嘅意思，冇定義操視角。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```
**冇角度 17 會漏咩：** M5 合照會被當純暖收尾；只有象徵角度會對到 canon「相片＝表演失敗證據」同「影相弧轉捩點屬速寫簿真相」，見到呢張相對操係恐懼觸發、而且有提早推進影相弧嘅風險。

### Angle 18 — Narrative Validation Level
```jsonl
{"CELL_ID":"D-18-G1","ANGLE_ID":"18","TARGET_ID":"G1","QUESTION":"N3/N4 美夜子『共謀誤導』：角色信乜（保護＝唔講）、故事點對待（canon＝Complicates）、demo 內有冇俾觀眾一個『呢個保護有代價』嘅讀法，定 demo 淨係 validate 咗個謊？","EVIDENCE":"IDEOLOGY_THEME_STANCE_MATRIX 美夜子『Story's treatment: Complicates——功利化被揭示為 coping…她的「保護」含有欺騙的道德代價』；CDL-054（CANON_DECISION_LOG:148）『說謊者渴望謊言是真實的』；ARTIFACT:48 N4 觀眾Δ『少少不安（接受得太快；工具冇解釋）』；ARTIFACT:124 M1 觀眾Δ『魔法要燒血糖（隱形揭示）』","COUNTERCHECK":"COUNTER: B2 注射槍救命＝謊言『有效』，demo 表面 validate 美夜子做法。SEARCHED: M1『最後一支用完』＋『魔法要燒血糖』將『唔講點解會低』嘅隱瞞翻成觀眾可推斷嘅代價——complicate 種子喺 demo 內有交付，未需要真相揭露。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-18-G2","ANGLE_ID":"18","TARGET_ID":"G2","QUESTION":"B4 救路人：CDL-322 要求『三重解讀並存』（晴香＝心地好／路人＝強者救我／操＝私下因路人感激而動搖）。v4 有冇保留第三重，定令故事暗中判定晴香讀錯？","EVIDENCE":"CDL-322（CANON_DECISION_LOG:79）『操自己嘅解讀…表面冷處理/否認…但內心因為路人事後真誠嘅感激而動搖』；ARTIFACT:84 B4『為咗求存順手擋咗一擊…（非刻意）』；ARTIFACT:113 B8『被救路人向操真誠道謝，操冷處理、否認有咩特別（晴香睇到）』；ARTIFACT:168 知情表 B8 操『收埋被掂嘅不安』（冇提感激動搖）","COUNTERCHECK":"COUNTER: 『只觀眾見』嘅私下層已用咗喺『整理被掂過嘅位』，可能已暗示操內心有郁。SEARCHED: B8 行動欄同知情表都冇任何操對『道謝』嘅私下反應；觀眾只見到『非刻意』＋『否認』，兩樣都指向『晴香讀錯』，三重解讀塌成兩重。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-18-G3","ANGLE_ID":"18","TARGET_ID":"G3","QUESTION":"B6 將晴香『唔顧儀態去救人』對 操『寧傷唔狼狽』標 THEME_EXPLICIT——demo 有冇將操嘅形式主義判死（reject），而 canon 操 treatment 仍係 BK、凜行話『操…故事同佢一齊肯定』？","EVIDENCE":"ARTIFACT:100 B6『THEME_EXPLICIT（態度：唔顧儀態去救人 vs 操「寧傷唔狼狽」）』；ARTIFACT:97『笑住問操條裙有冇整污糟』；IDEOLOGY_THEME_STANCE_MATRIX 操『Story's treatment: BK』；同檔凜行『Oppose: 操（自己講得出口「這是我的態度」，故事同佢一齊肯定）』；ayakomoji_misao.md:310『寧可承受傷害也不允許姿態狼狽』","COUNTERCHECK":"COUNTER: B5 操因唔肯狼狽而受傷、要晴香救，等同故事懲罰形式主義。SEARCHED: B6 晴香嘅問題係關心『操條裙』——即係晴香自己唔顧儀態，但尊重操嘅儀態；M4『操堅持佈置得好睇＝角色質感』又正面處理。故事喺 demo 內係 complicate（形式主義有代價但唔被嘲笑），冇提早判死。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-18-G4","ANGLE_ID":"18","TARGET_ID":"G4","QUESTION":"結尾暖（M5）會唔會令 demo 整體 validate 晴香『連結／善意會令一切好』嘅立場，超出 canon Act I『偽英雄旅程假象』嘅範圍？","EVIDENCE":"IDEOLOGY_THEME_STANCE_MATRIX 晴香『Story's treatment: Act I = validates（偽英雄旅程假象）』；ARTIFACT:151 M5『孤單 → 屬於（觀眾知道有一樣嘢冇人知）』；ARTIFACT:144 M4 觀眾Δ『獨知操嘅秘密』","COUNTERCHECK":"COUNTER: 暖結尾就係 validate。SEARCHED: canon 本身指定 Act I validate 表象；M4/M5 用『觀眾獨知牙』令 validate 帶裂縫（晴香嘅『屬於』建立喺一個佢唔知嘅隱瞞上）——同 canon『偽』字一致。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
```
**冇角度 18 會漏咩：** B8 漏咗 CDL-322 嘅「操私下動搖」——continuity 角度可能當「有道謝、有否認」就對齊；只有判定角度會問「故事係咪靜靜判咗晴香讀錯」，而呢個判定正正係 canon 刻意留做多重解讀。

### Angle 25 — Pacing / Breathing
```jsonl
{"CELL_ID":"D-25-G1","ANGLE_ID":"25","TARGET_ID":"G1","QUESTION":"Demo 開頭連續四個 N（無 Cost Signal）beat，兩個『轉：無』（N1、N3），作為遊戲 demo 開場會唔會太長冇推力？","EVIDENCE":"ARTIFACT:172『N：N1（消化底色）、N2–N4（資訊交付＋E-01 延遲反應）』；ARTIFACT:16 N1『冇轉』；ARTIFACT:37 N3『轉：無』；ARTIFACT:18 N1 玩法『可互動沖可可』；ARTIFACT:49 N4『物品入欄』；00_INPUT_PACKAGE:6–7 固定決定（range 由首戰當晚開始；只交代『好驚』）","COUNTERCHECK":"COUNTER: 範圍同開場方式係作者鎖死，N1–N4 係必然代價；而且 N2、N4 各有一個轉。SEARCHED: 有冇 beat 功能可併——N3（世界輪廓）同 N4（交槍＝接受）共用一個地點、同一對人、N3 冇轉，係壓縮最自然位；但壓縮屬建議唔係錯。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-25-G2","ANGLE_ID":"25","TARGET_ID":"G2","QUESTION":"B1–B4 由開戰到三方混戰，張力上升曲線有冇喘息位？","EVIDENCE":"ARTIFACT:64–86 B1『平靜 → 光榮戰鬥』、B2『自信 → 吃力』、B3『吃力 → 強大』、B4『兩人戰 → 三方混戰』；ARTIFACT:85 B4『晴香因為連結增幅有餘裕，睇到』","COUNTERCHECK":"COUNTER: 四個 beat 連續戰鬥，冇停。SEARCHED: B3→B4 嘅『增幅有餘裕』係戰鬥內嘅微喘息（玩家由被壓變壓人，有空間觀察操）；戰鬥段唔需要真停，起伏（升→跌→升→平）已存在。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-25-G3","ANGLE_ID":"25","TARGET_ID":"G3","QUESTION":"同一場戰入面有兩個同形危機波（B2：晴香險中招→美夜子擋；B5/B6：操險中招→晴香擋），加 B4 操擋路人，『擋一擊』出現三次，節奏會唔會變平？","EVIDENCE":"ARTIFACT:68 B2『晴香險中招，美夜子本能用魔法防護擋』；ARTIFACT:84 B4『順手擋咗一擊，救咗一個未疏散嘅路人』；ARTIFACT:97 B6『用身體擋咗致命嗰下』","COUNTERCHECK":"COUNTER: 三次擋係刻意押韻——三種保護立場（美夜子：本能＋功利藉口；操：非刻意＋否認；晴香：公開＋笑），屬主題設計（見 Gate C 表）。NO_DIRECT_COUNTER: 主題押韻成立，但節奏上三次同一動作形狀喺一場戰入面，第三次（最重要嗰次）嘅衝擊會被前兩次稀釋，除非 downstream 刻意拉開形式。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"D-25-G4","ANGLE_ID":"25","TARGET_ID":"G4","QUESTION":"B8 已經係『三人站埋一齊，暖』嘅收束，M 段再由 M1 危機起、到 M5 再一次暖收尾——會唔會有兩個同強度結尾，令 M 段似結局之後嘅尾聲？B8→M2 關係溫度由『暖、三人隊成立』跌返『被迫合作（未熟）』有冇交代？","EVIDENCE":"ARTIFACT:113–114 B8『三人站埋一齊，暖』『關係Δ：三人隊成立』；ARTIFACT:131 M2『關係Δ：被迫合作（未熟）』；ARTIFACT:151 M5『孤單 → 屬於』『夥伴升格（三人版）』；CDL-141（CANON_DECISION_LOG:254）『被迫合作（四人關係未熟）→荒謬生存行動→建立初步化學反應』","COUNTERCHECK":"COUNTER: B8 嘅暖係戰場一時嘅暖，B8 本身已有操『避開鏡頭』『冷處理』，未熟係合理。SEARCHED: B8 價值欄寫『戰鬥 → 有隊友』、關係Δ寫『三人隊成立』，冇標明暖係表層／未熟；M5 價值起點寫『孤單』——同 B8 出場狀態接唔上。兩個 beat 嘅價值欄互相打架。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```
**冇角度 25 會漏咩：** B8 同 M5 雙收尾——單 beat 檢查每個都啱（各自暖），只有睇序列曲線先見到兩個同高嘅暖平台＋中間溫度回跌冇交代。

---

## 3. Gate C — 主要事件立場交鋒

| 事件 | 主題問題 | 交鋒立場（Gate B entity） | 交鋒機制 | 承載方式 | 後果 | 觀眾理解目標 | Later payoff | 狀態 |
|---|---|---|---|---|---|---|---|---|
| N3–N4 使命說明＋交槍 | 真相係咪有助真正連結？保護可唔可以係謊言？ | 美夜子（保護＝唔講；Complicates）vs 晴香（拯救＝被需要；Act I validates） | 半真半假講解（對白）＋講到代價就望開（表演）＋交注射槍唔講用途（**道具行為**） | **ACTION＋DIALOGUE**——注射槍將 canon DIALOGUE_ONLY 行（THEME_CONFLICT_EXPRESSION_TABLE:24）升級做道具鏈 | 晴香快速接受；美夜子以工具形式照顧 | 「佢畀嘢你係為你好，但佢冇講全」 | B2 用槍、M1 用完；Act III 謊言揭露 | EVENT_CARRIED（demo 內） |
| B2 美夜子擋 | 功利 vs 靈魂本能 | 美夜子 stated（晴香係工具）vs actual（唯一安全錨點，CDL-060） | 本能擋→咬唇→功利藉口；晴香照字面收 | **ACTION**（CDL-083『動作型非語言』原則被遵守） | 忠誠線第一步 | 口硬身守 | Act II soft pivot | EVENT_CARRIED |
| B3 情緒連結 | 連結嘅代價值唔值得？ | 晴香（連結值得）vs 世界規則（強制透明，非語言） | 力量暴增＋一瞬互相透明，晴香誤判 | **ACTION／機制**（玩法增幅＋感知），但強度降（DEV） | 優勢；晴香唔知後遺症 | 「合體技有一下唔對路」 | E-03 停止；Act IV 拒絕互聯（CDL-224） | EVENT_CARRIED，**交鋒強度僅種子級**（見 D-04-G2） |
| B4–B8 操入隊 | 形式／表演 vs 天真直覺；被見證嘅需要 | 操（形式主義，BK）vs 晴香（唔顧儀態救人）；並有三種「保護」押韻：美夜子／操／晴香 | B5 操寧傷唔狼狽而中招；B6 晴香以身擋＋關心操條裙；B7 操傲嬌答應；B8 操避鏡頭、否認救人、私下整理被掂位 | **ACTION 為主**，傲嬌答應同否認有對白但唔係唯一載體 | 三人隊成立；操被在乎＋被未告知接觸 | 「有人在乎『佢』多過戰果；佢唔識接收」 | 操影相弧（CDL-347）；Phase D 主動救人（CDL-322/323） | EVENT_CARRIED；**CDL-322 第三重解讀缺**（見 D-18-G2） |
| B7 屍骸消散 vs UI | 態度能否改變命運；英雄形象係咪散播希望 | 屍骸（最後一拍似有人樣）vs 帝國（Likes 爆升） | 視覺並置 | **ACTION／視覺**，冇對白 | 勝利；偽亮色裂縫 | 「贏嗰下有啲唔對」 | Act III 感激の毒藥 | EVENT_CARRIED（帝國軸）；**態度軸只得一半**（見 D-05-G3） |
| M4 掉牙＋M5 合照 | 甜同痛同一口；表演 vs 真實存在 | 操（形式：收埋、強忍、閉嘴入相）vs 晴香（拉人入鏡＝屬於）；Brief Tender Cruelty | 咬甜嘢跌牙→收埋；硬拉入鏡→閉嘴入相 | **ACTION**，無對白依賴 | 觀眾獨知；三人夥伴 | 「暖係真，痛都係真，同一刻」 | CDL-233 縫牙分期；據點洩露（CDL-141） | EVENT_CARRIED；操視角意義未定義（見 D-17-G4） |

**Gate C 總評：** demo 主要交鋒全部有行為／道具／機制承載，冇一個淨靠對白；canon 原本唯一 DIALOGUE_ONLY 嘅天台行，v4 用注射槍補咗行為層。弱位唔係「靠對白」，而係兩條軸只交付一半（B3 強度、B7 態度對照）同一個 canon 指定解讀層缺失（B8 操私下動搖）。

---

## 4. FINDING 人話版

### D-05-G3（SHOULD_FIX）B7「態度示範」得一半，主題冇交付
- **發生咩：** B7 屍骸被打倒前一拍「停止抵抗、似有人樣」然後消散，artifact 標佢做「態度示範一半」，反面（奪舍被阻）標 REVALIDATE 冇做。
- **點解係問題：** canon E-02 嘅主題功能係「正面消散 vs 反面奪舍被阻」**對比**（ACT_I_BEAT_SHEET:290）。冇對照，觀眾喺 demo 入面只會覺得「怪物死得有啲怪」——氣氛（少少不安）交付到，但「屍骸都可以揀態度」呢個主題讀唔出。artifact 仍然叫佢主題載體，即係功能欄寫多咗。
- **點改（兩個方向）：**（a）誠實降級：B7 主題欄改做 THEME_SEEDED／氣氛裂縫，唔再聲稱「態度示範」；代價＝demo 冇任何位示範「態度 vs 命運」嘅屍骸面，放棄咗 canon 呢個 E-02 雛形；好處係零製作量、唔加暗度。（b）喺同一場戰加一個極細反面樣本（例如有隻細屍骸唔肯放手而被打散）；代價＝多一個敵人行為、暗度上升，可能撞「少少不安」上限；好處係主題成立。真正分別：（a）係認數，（b）係補數。

### D-17-G4（SHOULD_FIX）M5 合照對操嘅意義冇定義
- **發生咩：** M5 晴香硬拉避開咗嘅操入鏡，操閉住嘴入相；beat 只寫晴香／觀眾視角「孤單 → 屬於」。
- **點解係問題：** canon 寫明操極度抗拒影相，相片＝「表演失敗」嘅證據（ayakomoji_misao.md:321），而且佢剛剛跌咗牙；Act I 觸發閾值係「任何未被告知的接觸」（:376）。呢張相對操係恐懼觸發，唔係單純暖。如果 beat 唔寫操嘅狀態，downstream 好容易寫成「操其實都幾開心影相」，等於提早推進影相恐懼→珍惜弧（canon 指明轉捩點屬速寫簿真相）。
- **點改：** 喺 M5 補一行操視角狀態（例如：忍受、遮瑕、事後有一個私下反應，同 B8 整理被掂位押韻），唔寫對白鏡頭。代價＝M5 暖度減少少；放棄咗「純暖收尾」嘅乾淨感；換嚟同 M4 嘅 Tender Cruelty 一致，同埋保護影相弧起點。

### D-18-G2（SHOULD_FIX）B8 漏咗 CDL-322「操私下因感激而動搖」
- **發生咩：** B4 寫明操救路人係非刻意，B8 路人道謝、操冷處理否認；冇任何位俾觀眾見到操內心有郁。
- **點解係問題：** CDL-322（AC）要求三重解讀並存，其中操嘅私下解讀係「表面否認，內心因路人真誠感激而動搖」——呢粒種子係 Phase D 操主動救人（CDL-323）嘅起點。而家觀眾只見「非刻意＋否認」，等於故事暗中判咗晴香「佢心地好」係讀錯，三重塌成兩重。
- **點改：** B8 加一個只觀眾見嘅非語言反應（同「整理被掂位」同一層），知情表 B8 操一欄補「被感激動搖（收埋）」。代價＝B8 多一個要導演處理嘅細位；放棄嘅嘢幾乎冇；分別係保住 canon 指定嘅多重解讀，唔由 demo 靜靜定案。

### D-25-G4（SHOULD_FIX）B8 同 M5 雙收尾，中間溫度回跌冇交代
- **發生咩：** B8「三人站埋一齊，暖」＋「三人隊成立」；M2 又話「被迫合作（未熟）」；M5 價值起點係「孤單」。
- **點解係問題：** 序列上出現兩個同高嘅暖平台，M 段可能似「結局後嘅尾聲」；而且 B8 出場同 M5 入場狀態接唔上（已經「有隊友」點解又「孤單」）。
- **點改（兩個方向）：**（a）將 B8 嘅暖明確標成「戰場一時嘅暖／表層成隊」（操仍避、仍否認），M5 先係「真正屬於」；代價＝B8 收束感弱少少，好處係 M 段有成長空間、同 CDL-141「未熟→化學反應」一致。（b）改 M5 價值起點做「臨時隊友 → 有共同秘密嘅夥伴」（跟 canon Beat 2.6 turn 原文），唔用「孤單」；代價最細，只改字眼；但 B8 仍然可能同 M5 同高。真正分別：（a）改曲線，（b）只改標籤。

### D-04-G2（NOTE）B3 降強度 vs CDL-224 Peak Moment of Doubt
- CDL-224（AC）定 E-02 連結＋E-03 後遺症＝Act I 最強懷疑觸發點，要「摧毀類型預期」。v4 B3 降做「一瞬互相透明、有一下唔對路」，已標 DEV，亦符合作者固定嘅「少少不安」。提醒：demo 會教玩家將連結讀成「輕微怪」，正式版要喺 E-03 先引爆；如果 demo 片段日後直接入正式版，B3 要 REVALIDATE。唔建議而家改。

### D-17-G3（NOTE）牙象徵分期被壓縮
- canon 縫牙分期：Stage 1（Act II 前期）牙齦滲血、Stage 2a（Act II E-09a）先脫落（ayakomoji_misao.md:290–292）。demo 喺 Act I 已跌牙（作者固定）。後果：正式版 Stage 1→2a 嘅升級階梯要重排，否則 Act II 嘅「脫落」會變重複而唔係升級。已標 DEV；需要記入 cross-act REVALIDATE。

### D-25-G1（NOTE）開場四個 N beat
- N1–N4 全部冇 Cost Signal、N1/N3 冇轉；屬作者鎖死嘅代價。若 Scene 層覺得拖，最自然壓縮位係 N3＋N4（同地點、同兩人、N3 冇轉）。唔建議 Beat 層改。

### D-25-G3（NOTE）「擋一擊」一場戰三次
- B2／B4／B6 主題上係三種保護立場嘅押韻（好設計），但動作形狀一樣，第三次（B6，最重要）會被稀釋。提醒 downstream 拉開三次嘅形式（魔法／順手／以身），Beat 層已有區分字眼，唔使改。

---

## 5. 未列入角度嘅關注點
1. **引用錨點錯誤（canon 準確性，屬角度 11 範圍但我順手見到）：**
   - N1「倒影『0.3 秒』（CDL-237）」——CDL-237 係 E-12 屍骸女王框架修正（CANON_DECISION_LOG:374）；0.3 秒出自 CDL-123（:232）。
   - M3「肚咕嚕…（CDL-254 原文）」——CDL-254 係 E-12 衛生行動計時器（:402）；肚咕嚕出自 CDL-141（:254，即係 log 行號 254，懷疑將行號當 CDL 編號）。
   - M5「佢強拉隊友影相嘅習慣，H:298」——haruka.md:298 係 IG 雙帳號；我喺 haruka.md 搵唔到「強拉隊友影相」習慣（grep 合照／影相／自拍無結果），呢個習慣可能冇 canon 來源（應標 IA／DEV）。
   - 同類模式（行號當編號）可能喺其他引用重複，建議 continuity 審核員全掃。
2. **「暖」嘅歸屬視角：** artifact 嘅價值欄多數用晴香／觀眾視角定義暖，操同美夜子視角嘅「暖嘅代價」只喺 B8 一處寫低。角度 1／2 會逐人睇，但冇角度專門問「同一個暖時刻，每個在場角色各自付咗咩」——Tender Cruelty 原則（Brief:4846）喺 per-character 層面嘅檢查。可考慮作為 registry gap 提出（唔自行加）。
3. **Demo 片段被正式版重用嘅風險：** 多個 DEV（B3 強度、M4 牙、B7 半示範）喺 demo 內合理，但冇一個角度專門追蹤「pilot 偏離 canon 嘅位，正式版要點收返」。角度 28 部分覆蓋。

SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR
