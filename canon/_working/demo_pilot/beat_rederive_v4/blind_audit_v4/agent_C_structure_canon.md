# Blind audit v4 — Agent C（結構＋canon）
角度：6 Structural Beat Function｜8 World Rule／Mechanic｜9 Setup／Payoff｜11 Canon／Continuity／Ownership｜19 Method Necessity／Form Meaning｜22 Causality／Cost Signal Chain｜28 Cross-Act／Downstream Impact
被審：`ARTIFACT_BEAT_LAYER_V4.md`（下稱 ART）。Mode：SCOPED_INPUT_WITH_EXPOSURE_AUDIT（唔係硬隔離）。

## 接觸申報（exposure）
- **讀 artifact 之前**：session 開頭系統 git status 顯示禁讀區檔名（`demo_pilot/BEAT_LAYER_V3_2.md`、`BEAT_LAYER_ANGLE_SCAN.md`、`DEMO_PILOT_TRACKER.md`、`DERIVATION_LEDGER.md`、`beat_rederive_v4/`）——**只係檔名，冇內容**。CLAUDE.md @import 自動載入 angle-system／state-files／character-ideology-gate／consequence-driven-progression（准讀範圍內或規則檔）。user memory index 提及 demo tracker 位置（檔名）。
- **讀 artifact 之後**：一次 `grep -rln "注射槍"` 喺 `canon/` 下冇限路徑，輸出列出檔名 `canon/_working/demo_pilot/audit_debug/02_agent_reports/agent_B_information.md`、`canon/_working/brief_refactor/...`、`canon/_working/.tmp/...`、`canon/_reports/...`——**類型＝檔名／路徑洩漏，冇開內容**。
- 冇讀任何禁讀檔內容；冇睇其他 agent 輸出。
- 追溯碼 P／O／MP／PC／§（ART 內部推導碼）：佢哋定義喺禁讀推導檔，**本 agent 無法核實**，只核實 CDL／BS／H／S／Brief／FM／IM 等 canon 錨點。

縮寫：CDL＝`canon/_working/CANON_DECISION_LOG.md`（下引「CDL檔:行」）；BS＝`story_construction/ACT_I_BEAT_SHEET.md`；OUT＝`ACT_I_OUTLINE.md`；Brief＝`00_Story_Brief.html`（去 tag 後行號，附原文）；MIS＝`canon/03_characters/ayakomoji_misao.md`；HAR＝`haruka.md`；FM＝`CROSS_ACT_FORESHADOW_MANIFEST.md`；ENT＝`canon/07_entities_and_devices.md`；GB＝`canon/10_gameplay_bible.md`。

---

## Angle 6 — Structural Beat Function

```jsonl
{"CELL_ID":"C-6-G1","ANGLE_ID":6,"TARGET_ID":"G1","QUESTION":"N1–N4 四個 beat 各自有冇唔重複嘅結構功能同 value shift？天台拆三個 N beat 會唔會變成無轉折嘅資訊段？","EVIDENCE":"ART N2『價值：隱藏嘅驚→講出嚟嘅驚』、N3『未知→有一個美好嘅解釋（偽亮色）』、N4『轉：晴香主動｜驚→希望』；BS:189–216 天台原為單一 beat，turn＝『晴香由被動獲得能力轉化為主動接受使命』","COUNTERCHECK":"COUNTER: 三連 N beat（N2–N4）冇外部事件，可能拖。SEARCHED: 每 beat 是否有獨立 value shift——三個都有，且 N4 承接 BS 原 turn；N2 係作者鎖（開場交代驚）。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-6-G2","ANGLE_ID":6,"TARGET_ID":"G2","QUESTION":"B1–B4 升級鏈（開戰→唔夠打→連結→操到場）次序同 canon E-02 結構一致？每 beat 有冇轉？","EVIDENCE":"BS:738–765 E-02 Scene 1（美夜子本能撲出擋）→Scene 2（連結）→Scene 3（操亂入）；ART B2→B3→B4 同序；B3『轉：劣勢→優勢』","COUNTERCHECK":"COUNTER: B1 冇轉（只開場），B4 價值『兩人戰→三方混戰』偏描述。SEARCHED: B1 功能係教學＋偽亮色開場，冇轉屬正常 opener；B4 有新角色入場改變局勢。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-6-G3","ANGLE_ID":6,"TARGET_ID":"G3","QUESTION":"B8 標『暖收束』，但實際承載幾多結構功能？","EVIDENCE":"ART B8 行動：市民歡呼簽名＋操避鏡＋路人道謝（CDL-322 payoff）＋操整理被掂位＋晴香問→美夜子講燈塔效應＋三人暖；觀眾Δ『知屍骸會追住持有者』","COUNTERCHECK":"COUNTER: 戰後安全區本身係 canon NC 集合位（OUT:142『NPC圍觀歡呼/求簽名』），擺多啲合理。NO_DIRECT_COUNTER: 對『世界規則揭示』擺入 N 級暖收束 beat 冇反方依據。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-6-G4","ANGLE_ID":6,"TARGET_ID":"G4","QUESTION":"M1–M5 有冇功能重疊／觀眾Δ 重複前面 beat？","EVIDENCE":"ART M1 觀眾Δ『魔法要燒血糖（隱形揭示）』；但 B2 已有『晴香血糖跌（畫面變灰、手震）』＋『玩家被迫用一次注射槍』","COUNTERCHECK":"COUNTER: M1 揭示嘅係『全隊都燒（操都手震）』，比 B2 闊。SEARCHED: M1 其他功能（觸發基地任務）成立；只係觀眾Δ 描述同 B2 重疊。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```

**C-6-G3（NOTE）** 發生咩：B8 名義上係「暖收束底色」，實際塞咗五樣嘢，其中「燈塔效應」係一條世界規則揭示（觀眾同晴香都新知）。點解：結構上，揭示規則同收暖係兩種唔同節奏；揭示掉入收尾 beat，會被暖氣氛淹冇，或者反過嚟令暖收尾變說明會。點改：將燈塔揭示抽出去（例如留到基地段或 range 外），或者明確將 B8 拆成「路人道謝／操防衛」同「燈塔」兩拍。代價：多一個 beat 或減一條資訊；放棄咗「一個位交晒」嘅效率。同現做法分別：收尾 beat 只負責情緒落地。（燈塔揭示本身嘅 canon 問題見 C-8-G3。）

**C-6-G4（NOTE）** 發生咩：M1 寫「觀眾第一次隱形得知魔法燒血糖」，但 B2 已經用畫面同強制注射教過。點改：M1 觀眾Δ 改寫成「得知全隊都受血糖限制／補給有盡頭」。代價幾乎零；放棄咗一個其實已經唔新嘅「揭示」標籤。

**冇呢個角度會漏咩：** B8 功能過載同 M1 重複揭示呢兩樣係「每格自己睇都通」但放埋 sequence 先見到嘅問題；淨睇因果或 canon 唔會捉到。

## Angle 8 — World Rule / Mechanic Pressure

```jsonl
{"CELL_ID":"C-8-G1","ANGLE_ID":8,"TARGET_ID":"G1","QUESTION":"N3 正式講世界規則會唔會撞 HC-2e（奪舍示範必須先於正式講解）？N4 注射槍嘅來源／規則同 canon 對唔對得上？","EVIDENCE":"HARD_CONSTRAINTS_TABLE:32 HC-2e『奪舍示範場景…必須出現在正式講解世界規則「之前」』；OUT:236 奪舍示範［NC］『E-02後某事件中間』；BS:800 同；CDL檔:208 CDL-103 天台＝次日；GB:371『葡萄糖注射槍…夜區醫療黑市購買』；ENT:559–566 +40mg/dL、回彈、『不可連續使用超過兩次』","COUNTERCHECK":"COUNTER: canon 自己已經將天台正式說明（CDL-103/095）放喺奪舍示範（E-02後）之前，HC-2e 張力係 canon 內部遺留，唔係 ART 製造；ART N3 已標『碎片化，唔完整（減輕 HC-2e 張力）』。注射槍：美夜子有存貨標 IA，同『黑市購買』唔矛盾。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-8-G2","ANGLE_ID":8,"TARGET_ID":"G2","QUESTION":"B2 血糖 UI（畫面變灰、手震）喺晴香未有 CGM 手錶時點樣成立？B1『晴香趕到』同燈塔效應（屍骸追持有者）係咪一致？","EVIDENCE":"CDL檔:221 CDL-114『改用血糖值 mg/dL 顯示魔力…低血糖→畫面黑白+手震』；CDL檔:216 CDL-110 手錶由秋穗『E-02/E-03後的[NC]』派發；BS:802 秋穗茶餐廳血糖手錶派發列喺『E-02後日常場景組』；CDL檔:160 CDL-064 燈塔＝持有者成為獵殺目標","COUNTERCHECK":"COUNTER: 畫面變灰＋手震係身體症狀，唔一定要手錶先成立；只有『mg/dL 數值 UI』要手錶。B1 屍骸喺街出現、晴香趕去，同『被追』唔互斥（燈塔係吸引，唔係唯一出現原因）。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-8-G3","ANGLE_ID":8,"TARGET_ID":"G3","QUESTION":"B8 美夜子向晴香明講燈塔效應，係咪違反美夜子『半真半假、藏代價』嘅資訊規則？","EVIDENCE":"CDL檔:160 CDL-064『所有魔法少女「持有裝置的隱性代價」設定基礎』；CDL檔:149 CDL-055 精心隱藏『情感耗損、變成魔法屍骸的風險、戰鬥的真正代價』；Brief:6305『她們並非為了保護城市而戰…「魔法少女保護城市」的公眾形象，是帝國精心維持的謊言』；BS:763 E-02 Scene Ref 將燈塔列為『觀眾不知的底層』；ART N3 美夜子『藏＝耗損、屍骸化、代價』；ART B8『美夜子講燈塔效應』","COUNTERCHECK":"COUNTER: 燈塔可以被包裝成『我哋係守護者所以怪物衝住我哋嚟』，唔一定曝露『為求生而戰』；BS:763 係 Scene Reference 層，唔係 AC gate。SEARCHED: CDL／OUT／KNOWLEDGE_DEPENDENCY_MAP 搵唔到晴香 Act I 得知燈塔嘅 AC 決定（KDM 冇『燈塔』字）。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-8-G4","ANGLE_ID":8,"TARGET_ID":"G4","QUESTION":"M4 掉牙嘅成因鏈（入隊前累積＋B5 戰中擦傷）同 canon 牙齒＝魔法過度消耗代價規則一致嗎？M1『美夜子係貓冇呢個問題』有冇來源？","EVIDENCE":"CDL檔:369 CDL-233『操的魔法過度消耗代價以「牙齒崩壞→絲線縫牙」…守恆定律Layer 1物理代價具現』；MIS:288 同；ART M4『掉牙＝操既有身體崩壞（入隊前累積）＋戰中擦傷』、B5『下顎被擦咗一下（觀眾讀成戰傷）』；Brief:6098『先處理現場才掉牙』；BS:362 Beat 2.6 entry『隊伍四人（晴香/美夜子/操/紫音）…面臨低血糖手震』；ART M1『晴香同操手震（美夜子係貓，冇呢個問題）』","COUNTERCHECK":"COUNTER: 『觀眾讀成戰傷』本身係 CDL-233『觀眾可能初讀為戰鬥受傷』嘅誤導設計，ART 可能想 B5 擦傷只做表層誤導。但 ART M4 觸發欄將擦傷寫成真成因之一（唔係誤導層），而『入隊前累積』搵唔到 canon 來源。美夜子免疫：SEARCHED miyako.md／world_rules 冇『貓形態唔燒血糖』條文。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```

**C-8-G2（NOTE）** 發生咩：B2 用血糖 UI 表現低血糖，但 canon 嘅 CGM 手錶要 E-02 之後先由秋穗派。點解：如果 B2 有 mg/dL 數字條，世界內冇裝置顯示佢。點改：B2 只用身體症狀（灰、震）而唔出數值 UI，或者標 HW 留 Scene 層定。代價：教學少咗一個清楚數字；放棄咗提早教玩家睇血糖條。

**C-8-G3（SHOULD_FIX）** 發生咩：N3 美夜子刻意藏代價，B8 佢又主動講「屍骸會追住持有者」。點解：canon 將燈塔定性為「持有裝置嘅隱性代價」，Brief 直接講「保護城市」係謊言、佢哋其實為求生而戰——呢粒資訊正正係美夜子喺天台要藏嘅嘢；同一晚講晒，N3「說謊者渴望謊言係真」（CDL-054）嘅張力就漏咗氣，而 P-A03（維多利亞天使信仰 → Act III 謊言揭露，FM:19）亦被提早削。點改（三選一，要作者揀）：(a) 刪 B8 燈塔解說，晴香只得疑問；(b) 保留但美夜子用美化版本講（「怪物會被光吸引」），觀眾得到多過晴香；(c) 維持現狀但寫入 REVALIDATE 對 P-A03／CDL-055。代價：(a) 少咗操被迫戰鬥嘅解釋（操嘅冇得唔打要另揾載體）；(b) 多一層包裝要 Scene 層寫得準；(c) 接受 Act III 揭露力度下降。

**C-8-G4（SHOULD_FIX）** 發生咩：M4 將掉牙歸因做「入隊前累積＋B5 擦傷」，M1 又講美夜子（貓）唔受血糖影響。點解：canon 嘅牙齒崩壞係「魔法過度消耗」嘅代價（守恆 Layer 1 物理具現），唔係外傷；將外傷寫成真成因，會令「牙＝魔法代價」呢條規則喺第一次出現就混咗。美夜子免疫冇來源，BS Beat 2.6 反而寫四人（包美夜子）都面臨手震。點改：M4 成因改寫做「魔法消耗（真）＋擦傷（觀眾誤讀層）」；M1 美夜子免疫改標 IA 或刪。代價：B5 擦傷由「成因」降做「掩護」，功能變輕；放棄咗一條較物理易明嘅因果。

**冇呢個角度會漏咩：** 燈塔揭示同 N3 隱瞞規則自相矛盾、牙齒成因同 canon 代價規則錯位——兩樣都係世界機制層嘅一致性，淨睇角色同情緒唔會覺得有問題。

## Angle 9 — Setup / Payoff

```jsonl
{"CELL_ID":"C-9-G1","ANGLE_ID":9,"TARGET_ID":"G1","QUESTION":"N1 熱可可／幽靈重量、N3 P-A03／緋潮 Lv.1、N4 注射槍 setup 嘅位置同 canon plant 規格一致嗎？","EVIDENCE":"CDL檔:232 CDL-123（熱可可、倒影慢半拍0.3秒、身體沉重）；CDL檔:125 CDL-034 可樂失味＝E-03；OUT:78 寫『熱可可→Act II可樂失味』（canon 內部不一致）；FM:19 P-A03 plant＝E-01；FM:39 P-A23 plant『E-02/E-04背景』；CDL檔:303 CDL-176『E-02…地平線邊緣極難察覺的暗紅色光害（緋潮Lv.1）；觀眾可解讀為霓虹燈折射/工廠廢氣』、『E-04：日落晚霞…（Lv.2）』；ART N3『地平線有一抹暗紅（可讀成日落）』、『緋潮 Lv.1（P-A23；光要弱過 E-04 Lv.2）』","COUNTERCHECK":"COUNTER: 天台高處俯視（CDL-095）係睇地平線最自然嘅位，搬嚟可能更好；ART 有寫要弱過 Lv.2。但 ART 冇講明係將 CDL-176 嘅 E-02 plant 搬位，而『日落』偽裝屬 Lv.2 嘅讀法。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-9-G2","ANGLE_ID":9,"TARGET_ID":"G2","QUESTION":"B2 咬唇／B3 凜信息／B1 變身代價視覺嘅 plant 係咪齊、位置啱？","EVIDENCE":"CDL檔:184 CDL-084『我以前…同一個人試過』一瞬猶豫、晴香察覺但沒問、E-04 回收；FM:24 P-A08 plant E-04；CDL檔:64 CDL-352 ⑤『美夜子咬嘴唇→E-02首戰（本能保護動作後）』；HARD_CONSTRAINTS_TABLE:66 HC-4f 每次變身要有代價視覺；ART B1『帶一下極細代價視覺 HC-4f』","COUNTERCHECK":"COUNTER: CDL-224 要 E-02 連結做 Peak Moment of Doubt 前置，B3 只得『一下唔舒服』可能 plant 太輕。SEARCHED: BS:285『情緒連結嘅奇異親密感（首次體驗）』、BS:282『守恆代價尚未顯現』——canon BS 本身都係輕 plant、重頭喺 E-03。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-9-G3","ANGLE_ID":9,"TARGET_ID":"G3","QUESTION":"B4 路人→B8 道謝、B6 掂到→B8 整理、B5 牙前兆→M4 呢幾條 demo 內 setup/payoff 有冇斷？B7 屍骸態度示範有冇漏一半？","EVIDENCE":"CDL檔:79 CDL-322（意外救路人、路人事後真誠感激、操冷處理否認）；MIS:376 第一幕觸發閾值『任何未被告知的接觸』；OUT:142 世界規則『屍骸態度選擇兩種對比示範（正面選擇消散 + 反面奪舍被阻）』；ART B7『O14 正面消散（反面奪舍＝REVALIDATE）』","COUNTERCHECK":"COUNTER: 反面奪舍漏咗＝canon E-02 對比示範得一半。SEARCHED: ART B7 已標 PROVISIONAL＋REVALIDATE，冇靜靜刪。B5→M4 成因問題已入 C-8-G4。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-9-G4","ANGLE_ID":9,"TARGET_ID":"G4","QUESTION":"M5 合照、基地（P12'/P15）嘅 setup 有冇 canon 依據同回收位？","EVIDENCE":"CDL檔:234 CDL-125『強行拉隊友影相；美夜子下意識用手擋鏡頭』；BS:803 同；MIS:321 habit-photo-arc 操極度抗拒被影相（CDL-347）；ACT_II_OUTLINE:382『晴香喺秘密基地因 Fallen Angel 影片洩露陷入絕望』（E-09）；CDL檔:84 CDL-317 移除操虛榮洩露據點","COUNTERCHECK":"COUNTER: CDL-125 寫嘅係美夜子擋鏡頭、操『批評穿搭但幫大家搭配』（BS:803），ART 改成操避鏡。SEARCHED: CDL-347（較新，2026-07-28）定操起點＝影相恐懼，支持 ART；P15 基地撐到 E-09 有 ACT_II:382 支持；P12' 唔種虛榮洩露同 CDL-317 一致。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
```

**C-9-G1（NOTE）** 發生咩：N3 將緋潮 Lv.1 由 canon 指定嘅 E-02 戰場背景搬上天台，並用「可讀成日落」——但 canon 嘅「日落」讀法屬 E-04 嘅 Lv.2，Lv.1 係「霓虹／廢氣」。點改：明寫「CDL-176 Lv.1 plant 由 E-02 搬到天台」並改用 Lv.1 嘅讀法；或者 B1 街戰背景都保留一次。代價：細；放棄咗兩級強度靠唔同偽裝區分嘅清晰度係唯一風險。另：熱可可回收位 canon 內部有 E-03（CDL-034）同 Act II（OUT:78）兩個講法，ART 跟 CDL-034，屬 canon 舊債，唔係 ART 錯。

**冇呢個角度會漏咩：** 緋潮 plant 被靜靜搬位、Lv.1／Lv.2 讀法混用；淨核 CDL 號碼會以為「有引 P-A23 就啱」。

## Angle 11 — Canon / Continuity / Ownership（逐條核追溯）

已核實正確：CDL-034、054、055、060、063、064、083（內容見 C-11-G2）、084、095、103、108、114、123、224、322、337（經 BS:301 轉引）、355、408；BS:153、BS:195；MIS:310、365、376；Brief:4846、5676、6098；FM:19。
無法核實（定義喺禁讀推導檔）：所有 P／O／MP／PC／§ 碼。

```jsonl
{"CELL_ID":"C-11-G1","ANGLE_ID":11,"TARGET_ID":"G1","QUESTION":"N1 DOWNSTREAM『倒影 0.3 秒（CDL-237）』引用係咪啱？","EVIDENCE":"CDL檔:374 CDL-237＝『E-12框架錯誤確認並修正：屍骸女王討伐』，同倒影無關；CDL檔:237（行號）＝CDL-128『倒影動作慢0.3秒微小錯位』；CDL檔:232 CDL-123 亦有『倒影慢半拍0.3秒』","COUNTERCHECK":"NO_DIRECT_COUNTER: 內容有 canon 支持（CDL-123/128），但 ID 錯——似係將 CDL 檔行號當咗 CDL 編號。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-11-G2","ANGLE_ID":11,"TARGET_ID":"G2","QUESTION":"B2『晴香照字面收』同 B3『全 demo 唯一一次察覺冇問』同 CDL-083 一致嗎？","EVIDENCE":"CDL檔:183 CDL-083『動作後立刻用功利理由掩蓋…晴香若有所感但未深究』（AC 2026-03-30）；CDL檔:184 CDL-084『晴香察覺美夜子的猶豫但沒問』；ART B2『晴香照字面收』；ART B3『晴香察覺但冇問（全 demo 唯一一次「察覺冇問」）』","COUNTERCHECK":"COUNTER: 作者想保留『察覺冇問』嘅稀缺性，所以 B2 收細。但 CDL-083 係 AC，『若有所感』係明文要求；ART 冇標 DEV。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-11-G3","ANGLE_ID":11,"TARGET_ID":"G3","QUESTION":"B4–B8 同 CDL-050／322、MIS 戰鬥規則、E-02 收尾 canon 有冇撞？","EVIDENCE":"CDL檔:143 CDL-050（中陷阱→晴香擋→笑問條裙→暫時指導庶民）；MIS:365『絕對不接觸地面…弱點：地面層攻擊』；MIS:310『寧可承受傷害也不允許姿態狼狽』；BS:786–792 Scene 6 紫音現身搶核心；OUT:140『紫音作為「搶怪黨」在戰後現身…（觀眾首次見到紫音）』；ART B7 冇紫音","COUNTERCHECK":"COUNTER: 固定作者決定『紫音未入隊、唔出場』，可以理解為全 demo 唔出場。SEARCHED: 固定決定原句掛喺『三人基地戲』後面，覆蓋範圍唔肯定；ART 冇記錄 E-02 紫音初登場被移走。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-11-G4","ANGLE_ID":11,"TARGET_ID":"G4","QUESTION":"M3『肚咕嚕（CDL-254 原文）』、M5『強拉隊友影相嘅習慣，H:298』、M4『IM:67』引用啱唔啱？","EVIDENCE":"CDL檔:402 CDL-254＝E-12 衛生行動計時器，無關；CDL檔:254（行號）＝CDL-141『晴香=把風緊張肚子咕嚕叫』；HAR:298＝habit-ig-dual-account（IG雙帳號），唔係強拉影相；強拉影相實際出處＝CDL檔:234 CDL-125／BS:803；IDEOLOGY_THEME_STANCE_MATRIX:67＝美夜子 Actual belief『晴香係她唯一感到熟悉和安全的錨點』（如 IM＝呢個檔，支持『美夜子注意力喺晴香』）","COUNTERCHECK":"NO_DIRECT_COUNTER: 兩個錯 ID（CDL-254、H:298）內容其實有 canon，但引錯位；IM 縮寫冇定義，只能推測。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
```

**C-11-G1／G4（SHOULD_FIX，同一根因）** 發生咩：ART 有兩處「CDL-xxx」其實係 CANON_DECISION_LOG 嘅**行號**（CDL-237→實為 CDL-128；CDL-254→實為 CDL-141），另一處 H:298 指去 IG 雙帳號。點解：追溯欄係 ART 宣稱「每粒都有上游」嘅證據；錯 ID 指去 E-12 屍骸女王／衛生行動，下游核對嘅人會以為冇依據或者撞到 Act II 內容。點改：全表 sweep 一次所有 CDL／H 引用，改返正確 ID（CDL-128／141／125）。代價：純文書；冇放棄任何設計。

**C-11-G2（SHOULD_FIX）** 發生咩：canon AC 要求晴香對美夜子嘅保護動作「若有所感但未深究」，ART 寫成「照字面收」，再將「察覺冇問」宣稱係全 demo 唯一一次。點解：CDL-083 係作者批過嘅 Act II soft pivot 前置（晴香要有一絲感覺），收走會削 pivot 可信度。點改：(a) B2 改返「有一絲感覺、冇追」，B3 刪「唯一一次」字眼；或 (b) 保持現狀但標 DEV 交作者。代價：(a) 「察覺冇問」嘅稀缺感少咗；(b) 偏離 AC 要作者明確批。

**C-11-G3（NOTE）** 紫音 E-02 戰後搶核心（canon 首登場）喺 ART 消失，未記錄。建議喺 ART 記一句「E-02 紫音初登場移出 demo（固定決定範圍）→REVALIDATE CDL-052／P-A04（FM:20 plant 位 E-02/E-02.5）」。代價零。

**冇呢個角度會漏咩：** 錯 ID（行號當編號）同 AC 細節（若有所感）被改寫——只有逐條打開 canon 原文先見到；其他角度只會睇「有冇引」。

## Angle 19 — Method Necessity / Form Meaning

```jsonl
{"CELL_ID":"C-19-G1","ANGLE_ID":19,"TARGET_ID":"G1","QUESTION":"N4 用『交注射槍』做接受使命嘅形式，點解唔係口頭承諾？N1 用熱可可儀式點解唔係內心獨白？","EVIDENCE":"CDL檔:155 CDL-060『口裡說「有用的工具」，身體本能守護』；CDL檔:149 CDL-055 藏代價；ART N4『只講「血糖低就用」，唔講點解會低』；HAR:295 habit-hot-cocoa；CDL檔:232 CDL-123『無台詞』","COUNTERCHECK":"COUNTER: 交槍可能係『為咗教學而塞道具』。SEARCHED: 形式同時做到三樣——美夜子以工具形式照顧（CDL-060）、物件本身載住被隱藏嘅代價（點解會低血糖）、B2 兌現；口頭承諾做唔到後兩樣。熱可可：無台詞物件儀式係 CDL-123 明文。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-19-G2","ANGLE_ID":19,"TARGET_ID":"G2","QUESTION":"B2『被迫注射』同 B3『當下情緒透明、冇記憶畫面』呢兩個形式有冇用盡 canon 嘅形式意義？","EVIDENCE":"GB:371 注射槍設計意圖『「強行維持戰鬥狀態」的代價代入——回彈後耗損更大』；ENT:564『注射後血糖回彈過高…約 20 分鐘後耗損更劇烈』；Brief:9422『第一次四人聯手戰鬥後…跨污染…看到最隱秘的羞恥、恐懼、憤怒』；ART B3『冇任何記憶畫面』、狀態『強度降＝DEV』","COUNTERCHECK":"COUNTER: B3 減強度已標 DEV＋PC17，記憶滲透留 E-03／四人連結，合理。但 B2 只用咗注射槍嘅『補血糖』表層，冇用 canon 寫明嘅形式意義（強撐→回彈更差）。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-19-G3","ANGLE_ID":19,"TARGET_ID":"G3","QUESTION":"B6 用『一次性按鍵、無失敗分支』做擋攻擊，形式有冇意義？B7 屍骸『停止抵抗似有人樣』、B8 操整理被掂位呢啲形式係咪必要？","EVIDENCE":"CDL檔:143 CDL-050 晴香不顧儀態擋；MIS:376『任何未被告知的接觸』；05_story_outline_canon.md:82–84 屍骸態度選擇；ART B6『玩家一次性按鍵互動，非戰術視窗、無失敗分支』","COUNTERCHECK":"COUNTER: 無失敗分支嘅按鍵＝假互動。SEARCHED: 呢個形式令『擋』係玩家親手做（主題：唔顧儀態去救人），而無失敗保證 canon 結果（操入隊）唔會被玩家打爛；整理被掂位係 MIS 第一幕閾值嘅唯一可見載體。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-19-G4","ANGLE_ID":19,"TARGET_ID":"G4","QUESTION":"M4『咬甜嘢跌牙』、M5『合照閉嘴』點解要用呢個形式？","EVIDENCE":"Brief:4846『同朋友仔係甜品店，開開心心一齊食甜品…咬到某一口，掉了一顆牙。甜係真的，痛也係真的，而且就係同一口裡面』；MIS:321 操影相恐懼（相片＝永遠定格嘅假象、瑕疵＝表演失敗證據）","COUNTERCHECK":"COUNTER: 甜品局跌牙係咪太巧？SEARCHED: Brief 直接以呢個畫面做 Tender Cruelty 範例，形式本身就係 canon 指定；合照＝操最驚嘅『定格瑕疵』，閉嘴入相令 M4 秘密同影相恐懼疊埋——兩層意義，換其他收尾（例如擊掌）會失去。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"HIGH"}
```

**C-19-G2（NOTE）** 發生咩：canon 嘅注射槍唔只係補血，設計意圖係「強撐戰鬥嘅代價：回彈後更差」。B2 只用咗補血功能。點改：B2／B3 之間留一個回彈位（例如 B3 嘅「仍然唔夠打」改由注射回彈觸發，見 C-22-G2）。代價：多一層機制要玩家理解；放棄咗 B2 嘅純粹教學簡潔。

**冇呢個角度會漏咩：** 注射槍有現成嘅 canon 形式意義冇被用；淨睇「有冇教到道具」會當 B2 完成咗。

## Angle 22 — Causality / Cost Signal Chain

```jsonl
{"CELL_ID":"C-22-G1","ANGLE_ID":22,"TARGET_ID":"G1","QUESTION":"N1–N4 全標 N；N4『晴香主動接受使命』係揀擇＋轉折，分類啱唔啱？","EVIDENCE":"consequence-driven-progression.md：REQUIRED 包括『角色喺壓力下揀擇／關係轉變』；BS:153（Beat 0d NOT_APPLICABLE＋延遲反應例外）；BS:195（天台 NOT_APPLICABLE）；ART N4 觸發『N（同上；接受＝對已得資訊嘅反應）』、『轉：晴香主動』","COUNTERCHECK":"COUNTER: canon BS:195 已將整個天台（包括接受 turn）分做 NOT_APPLICABLE，ART 只係跟。但 N4 其實有外部觸發可用（美夜子交槍＝他人行動），唔使靠『突然覺得』。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-22-G2","ANGLE_ID":22,"TARGET_ID":"G2","QUESTION":"B3 觸發『仍然唔夠打（O1'）』係咪具體外部事件，定係重用 B2 嘅壓力？","EVIDENCE":"ART B2 觸發『屍骸升級攻勢；晴香血糖跌』；ART B3 觸發『仍然唔夠打』；ENT:564 注射回彈→反應性低血糖；BS:279 E-02『形勢不利嘅被迫選擇』","COUNTERCHECK":"COUNTER: canon BS 都只寫『形勢不利』，屬 REQUIRED 而且有外部壓力。SEARCHED: B3 冇新事件，只係 B2 狀態延續；未至 INTENTION-DRIVEN（壓力仍係外部），但 cost signal 模糊。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-22-G3","ANGLE_ID":22,"TARGET_ID":"G3","QUESTION":"B5–B7 因果鏈；B8 標 N 但有知情同關係變化，分類啱唔啱？","EVIDENCE":"ART B5（地面攻擊）→B6（致命一擊）→B7（戰鬥未完）均 R；ART B8 觸發『N（暖收束底色；作者決定）』，但角色知情Δ『晴香知燈塔效應』、關係Δ『三人隊成立』；燈塔揭示由『晴香問美夜子』引起","COUNTERCHECK":"COUNTER: 作者固定『結尾暖』，B8 暖收束屬 NOT_APPLICABLE 類嘅『對比底色』。但 B8 入面嘅燈塔揭示係劇情資訊推進，觸發係晴香好奇（內在），而路人道謝（外部事件）本身可做 cost signal。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-22-G4","ANGLE_ID":22,"TARGET_ID":"G4","QUESTION":"M1『最後一支注射槍用完』嘅前因有冇交代？","EVIDENCE":"ART N4『美夜子交一支葡萄糖注射槍』；ART B2『玩家被迫用一次注射槍（天台得嚟嗰支）』；ART M1『最後一支注射槍用完』；GB:371 來源＝夜區醫療黑市購買；ENT:564『不可連續使用超過兩次』","COUNTERCHECK":"COUNTER: M1 前提已標『幾日內持續同隊作戰（時間跳躍，IA）』，可隱含補過貨。SEARCHED: ART 冇任何 beat 交代補貨；N4『一支』→B2 用咗→M1 又有『最後一支』，數量鏈斷。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
```

**C-22-G1（NOTE）** N4 由「交槍」做觸發分類做 O，比「N（對資訊嘅反應）」更穩陣；屬 canon BS 遺留分類，改唔改都唔會令 beat 失效。代價零。

**C-22-G2（NOTE）** 發生咩：B3 嘅觸發只係 B2 壓力延續。點改：用 canon 現成嘅注射回彈（反應性低血糖）做 B3 cost signal——注射後短暫回升、再急跌，逼美夜子提連結。代價：B2→B3 時間要夠長，Scene 層要處理；放棄咗「純粹敵人太強」嘅簡單讀法。好處：同時解 C-19-G2。

**C-22-G3（NOTE）** 發生咩：B8 標 N，但燈塔揭示係由晴香主動問推動（「角色突然想知所以問」）。點改：如保留燈塔揭示（見 C-8-G3），應由外部事件引出（例如另一隻小屍骸喺安全區邊緣出現／被吸過嚟），或者刪走揭示令 B8 真係純底色。代價：前者多一個事件；後者少一條資訊。

**C-22-G4（SHOULD_FIX）** 發生咩：N4 得一支槍、B2 用咗，M1 又「最後一支用完」——中間冇補給來源。點解：M1 係整個基地段嘅 cost signal，前因唔清楚會令「補給斷」似作者安排。點改：(a) N4 改交「一小盒」（數量有限）；或 (b) 時間跳躍入面標明美夜子由黑市補過貨（GB:371）。代價：(a) N4 嘅「一支」象徵感淡少少；(b) 多一句世界資訊。

**冇呢個角度會漏咩：** 補給數量鏈斷同 B3 觸發模糊——逐 beat 睇每格都有寫「R」，只有追因果先見到。

## Angle 28 — Cross-Act / Downstream Impact

```jsonl
{"CELL_ID":"C-28-G1","ANGLE_ID":28,"TARGET_ID":"G1","QUESTION":"N4 由美夜子交葡萄糖，會唔會同後面經理人『葡萄糖水古典制約』（關心＝葡萄糖）撞或者搶先？","EVIDENCE":"CDL檔:284 CDL-163『經理人遞葡萄糖水…晴香血糖回升→誤認為「經理人關心帶來的安全感」』；CDL檔:287 CDL-165『CDL-163葡萄糖水從E-01後首次見面即開始』；ART N4 美夜子以工具形式照顧＝交注射槍","COUNTERCHECK":"COUNTER: 兩者可以形成對照（美夜子＝真關心扮工具；經理人＝假關心扮溫柔），反而加強二周目。SEARCHED: ART 冇提 CDL-163／165，亦冇標 REVALIDATE；demo range 唔包經理人。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-28-G2","ANGLE_ID":28,"TARGET_ID":"G2","QUESTION":"B3 兩人版首次連結對 E-03 Peak Moment of Doubt（四人）同 Brief『第一次四人聯手…跨污染』有咩下游影響？有冇標？","EVIDENCE":"CDL檔:359 CDL-224（E-02連結首戰＋E-03『四人癱倒…唔再用情緒連結』）；Brief:9422；BS:399–420 Beat 3 四人；ART B3 狀態『PROVISIONAL（PC17 首次連結人數全局未解；強度降＝DEV）』","COUNTERCHECK":"COUNTER: 可能要列埋具體受影響檔。SEARCHED: ART 已用 PROVISIONAL＋DEV 標出全局未解點，冇靜靜決定；符合 Global Dependency Protection。","VERDICT":"CLEAN_AFTER_ATTACK","SEVERITY":null,"MERGED_TO":null,"CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-28-G3","ANGLE_ID":28,"TARGET_ID":"G3","QUESTION":"B8 燈塔揭示同 B7 冇紫音，對 Act III 謊言揭露同紫音入隊線有咩下游影響？","EVIDENCE":"FM:19 P-A03 Act III 謊言揭露；Brief:6305 保護城市＝謊言；FM:20 P-A04 plant『E-02/E-02.5』；CDL檔:145 CDL-052 搶怪黨；BS:304–309 E-02.5『承接 Beat 2 後嘅「搶怪黨」印象累積』","COUNTERCHECK":"COUNTER: 紫音缺席係固定決定，下游由 orchestrator 處理。SEARCHED: ART 只喺 M3 記紫音『差點破門』功能缺；E-02.5 依賴 E-02 搶怪黨印象嘅 trigger 未標。","VERDICT":"MERGED_TO","SEVERITY":null,"MERGED_TO":"C-8-G3 / C-11-G3","CONFIDENCE":"MEDIUM"}
{"CELL_ID":"C-28-G4a","ANGLE_ID":28,"TARGET_ID":"G4","QUESTION":"Act I 掉牙對操 Body Horror 四 Stage（Act II 起步）有咩下游影響？有冇 REVALIDATE？","EVIDENCE":"CDL檔:369 CDL-233 Stage 1『Act II前期…牙齦滲血』、Stage 2a『E-09a…牙齒開始鬆動乃至脫落…利用傀儡絲線將斷牙縫回』、Stage 3『Act III Day 13…撬開操嘴巴，揭露絲線縫牙』；CDL檔:84 CDL-317『操Body Horror Stage 1觸發點同步移至』E-07b；BS:399–417 Beat 3 E-03『守恆定律 Layer 1 首次觸發』、『觀眾首次接收「魔法有代價」』；ART M4 狀態『AD／DEV／PROVISIONAL』，追溯冇提 CDL-233／317","COUNTERCHECK":"COUNTER: 作者固定『操一隻牙真係跌』，且 Brief:4846 有同一畫面，所以 Act I 跌牙有上位依據。SEARCHED: 固定決定唔等於下游已處理——ART 冇列受影響 canon（Stage 1 滲血變成跌牙之後、E-09a『開始鬆動乃至脫落』變重複、Act I–E-09a 之間缺牙點遮、E-03『首次』代價揭示被提前）。","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"C-28-G4b","ANGLE_ID":28,"TARGET_ID":"G4","QUESTION":"三人基地（紫音未入隊）同 canon『E-02.5 紫音入隊→2.6 四人基地』次序有咩下游影響？","EVIDENCE":"CDL檔:254 CDL-141『四人關係未熟…紫音=暴躁差點暴力破門』；BS:309 E-02.5 exit『隊伍物資（血糖補給）自然消耗，作為 Beat 2.6 秘密基地任務嘅前提』；BS:362 Beat 2.6 entry 四人；Brief:11224『四人面臨低血糖手震』；ART M3『紫音「差點破門」功能缺＝REVALIDATE』","COUNTERCHECK":"COUNTER: 固定決定已定三人版，ART 有標 REVALIDATE。SEARCHED: ART 只標『破門功能缺』，冇標次序調換嘅連鎖：E-02.5 出口 trigger、紫音入隊後點樣進入一個已存在嘅『共同秘密』、CDL-141 四人質變 turn。","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"HIGH"}
```

**C-28-G1（NOTE）** 美夜子交葡萄糖同經理人葡萄糖水會喺 Act I 形成兩條「葡萄糖＝關心」線。建議 ART 記一行 REVALIDATE CDL-163／165（可以係加強對照，唔一定係問題）。代價零。

**C-28-G4a（SHOULD_FIX）** 發生咩：固定決定令操喺 Act I 已經跌牙，但 canon 嘅操身體崩壞係 Act II 先開始（E-07b 牙齦滲血 → E-09a 鬆脫 → 用絲線縫回 → Act III 撬開揭露）。點解：唔處理就會出現：Act II「開始出血」比 Act I「已跌牙」輕，升級倒轉；E-09a「縫斷牙」嘅新鮮感被搶；Act I 到 E-09a 之間操點樣遮住缺牙冇交代；E-03「第一次見到魔法代價」亦被 M4 搶先。點改（唔推翻固定決定）：ART M4 加 REVALIDATE 清單（CDL-233 四 Stage、CDL-317 E-07b、E-09a、BS Beat 3「首次」）；候選處理方向交作者：(a) Act I 跌牙＝提早嘅 Stage 0，之後 Stage 照升但重寫 E-09a 為「縫」嘅起點；(b) Act I 跌嘅牙操即時用絲線縫回（將縫牙提早到 Act I，Act III 揭露照舊）。代價：(a) 要改 Act II 一句描述；(b) 縫牙秘密提早一幕出現，Act III 揭露累積期更長但新鮮度下降。

**C-28-G4b（NOTE）** 三人版基地將 canon 次序（紫音入隊→四人基地）倒轉。建議 REVALIDATE：BS Beat 2.5 出口 trigger、CDL-141「四人」、Brief:11224。代價零（只係記錄）。

**冇呢個角度會漏咩：** 固定作者決定（跌牙、三人基地）喺 local demo 入面完全通順，但會靜靜令 Act II 嘅 Body Horror 升級倒轉同紫音入隊次序斷鏈——只有睇後幕先見到。

---

## 未列入角度嘅關注點
1. **追溯 ID 完整性（reference integrity）**：ART 有「CDL 檔行號當 CDL 編號」嘅系統性錯誤（至少 2 處）＋1 處 H 行號指錯。現有角度 11 只問「同 canon 撞唔撞」，冇一格專門問「引用指向嘅係咪真係嗰條」。建議 registry 考慮加「Trace / Citation Integrity」。
2. **追溯可審計性**：P／O／MP／PC／§ 碼只喺禁讀推導檔定義，盲審無法核；即係 ART 一半追溯對獨立審核係黑箱。建議 ART 喺每個內部碼旁附最終 canon 錨點。
3. **Canon 舊債被繼承**：canon 內部本身有不一致（熱可可回收位 CDL-034 E-03 vs OUT:78 Act II；CDL-125 操幫大家搭配 vs CDL-347 操影相恐懼；HC-2e vs CDL-103 天台先於奪舍示範）。ART 揀咗其中一邊但冇記錄「揀咗邊條、點解」。

## 統計
格數：7 角度 × 4 組 ＋ 1 額外（C-28-G4b）＝ 29 格。FINDING 18（SHOULD_FIX 7：C-8-G3、C-8-G4、C-11-G1、C-11-G2、C-11-G4、C-22-G4、C-28-G4a；NOTE 11）；CLEAN_AFTER_ATTACK 10；MERGED_TO 1；BLOCKS_BEAT_LAYER 0。
