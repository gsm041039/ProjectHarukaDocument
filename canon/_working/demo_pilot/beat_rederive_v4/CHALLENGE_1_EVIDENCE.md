# CHALLENGE_1 — Canon Evidence Audit（DERIVATION_V4 §1／§2）

`[DRAFT / 暫定 — pending full-story beat lock]` ｜ Inherited Obligation Challenge 角色 ①（證據審核）｜ 2026-10-08
範圍：只做證據同質疑；冇批核、冇答作者問題、冇改 DERIVATION_V4。
讀咗：DERIVATION_V4 §1–§3、RUN_MANIFEST、SRC_1–SRC_4；原檔核對：ACT_I_OUTLINE.md、CANON_DECISION_LOG.md、ACT_I_BEAT_SHEET.md、HARD_CONSTRAINTS_TABLE.md、CROSS_ACT_FORESHADOW_MANIFEST.md、INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md、haruka.md／miyako.md／ayakomoji_misao.md、01_world_rules_and_costs.md、07_entities_and_devices.md、09_information_design.md、11_directing_playbook.md、00_Story_Brief.html。
冇讀：demo_pilot 其他檔（包括 DERIVATION_LEDGER，所以凡係引 §12.2／D-13 嘅 AD 只可標「無法核實」）、PROJECT_STATUS／NEXT_ACTION／SESSION_LEDGER／QUESTION_QUEUE。

## A. 抽查紀錄（實際打開原檔核對，>25 行）

全部吻合（行號＋內容）：O:5、O:17–22、O:36–40、O:76–78、O:88–91、O:100、O:136–145、O:171–177、O:240–242、O:290、O:320、O:331、O:366；CDL:12（408）、35（381）、59（357）、60（356）、61（355）、79（322）、84（317）、123（032）、124（033）、125（034）、143（050）、147（053）、148（054）、149（055）、155（060）、183（083）、184（084）、191（089）、198（095）、208（103）、221（114）、226（118）、229（121）、232（123）、237（128）、242（132）、251（138）、252（139）、254（141）、297（173）、303（176）、305（178）、358（223）、359（224）、360（225）；BS:1–12、153、195、199、281；HC:3–5、32、66；FM:19–20；GT:20–30；H:79、81、83、300；M:200、278、282；S:116、251、256；01:220–229、674、855–862；07:558–567；09:32–36；11:606–612；Brief:4846、6098、6381、6414、7575–7645、9280–9330、9416–9424、10432、11224。

來源包本身行號準確度高；問題主要喺 DERIVATION_V4 點用呢啲證據（分類、級別、漏項）。

## B. 問題表

| row id | problem | evidence | severity |
|---|---|---|---|
| §1（漏行）／MP1／O10'／O17 | **首次情緒連結嘅成員同後遺症時點冇列做 Parent Consistency 項**。RUN_MANIFEST 已記低「首次連結成員（canon 四人 vs Outline E-02 合併）」係關鍵張力，但 §1 冇對應 PC 行。canon 內部：CDL-121 嘅 Flash 包括紫音細佬＋操手術室＋美夜子見凜（四人）；CDL-225 ③ 寫「E-02情緒連結＝所有防衛機制同時強行突破…直接導致『四人協議』」；04_timeline 首次連結＝四人即場連鎖崩潰；S:116 操喺「情緒連結首戰」感受到紫音嘅怒火；但 CDL-139 寫紫音 E-02 之後先入隊（「E-03情緒連結包含紫音四人」）。Demo 三人版（無紫音）+ E-02 連結，即係靜靜揀咗一個未解決嘅全局真相（連結係三人定四人、跨污染係 E-02 即發定 E-03 先發）。按 Global Dependency Protection，要標 `PROVISIONAL`／`BLOCKED_AT_THIS_DEPENDENCY`，唔可以只靠 MP1 處理內部次序 | CDL:229（CDL-121）；CDL:360（CDL-225 ③）；CDL:252（CDL-139）；ayakomoji_misao.md:116；SRC_3:36–37（04_timeline:139–141）；SRC_2 §0 衝突第 1 點；RUN_MANIFEST 進度 log | BLOCKS |
| PC6／O8／O10'／O12 | **D-13「結尾溫暖取代勝利後靜默」直接撞 AC 嘅 CDL-224**，但冇記成 parent patch 或者 DEV。CDL-224 定 E-02 情緒連結首戰＝Act I 最強懷疑觸發點；O:136 將「勝利後的靜默」執行語法掛喺 Beat 2 標題。CDL-224 本文寫「E-03戰後無歡呼」，即係靜默可以理解成 E-03 先承載；但 V4 寫「取代」，意思係推翻。D-13 唔喺 CDL 入面（grep 搵唔到），只係 demo 內嘅 AD，DERIVATION_LEDGER 又唔准讀，所以呢度核實唔到。要做嘅係：(a) 改講法做「靜默由 E-03 承載，E-02 結尾暖」，並且用 CDL-224 原文支持；或者 (b) 標 DEV＋排 parent patch。仲有，PC6 話「可共存」，但冇處理 CDL-224 要求 E-02 本身要令觀眾「發出紅色警報」呢一點 | CDL:359（CDL-224）；O:136；CANON_DECISION_LOG.md 搵唔到 D-13 | SHOULD_FIX |
| PC1 | **分類錯**：寫做 `STALE_PARENT_CONTENT`，又話「CDL-128/132 已將幽靈重量＋夜瞓搬去 Beat 0 早晨」。實際上 CDL-128 只係設計 Beat 0a（E-01 之前嗰朝）嘅症狀，冇任何一句話將佢哋由 0d 移走；CDL-123（AC）仍然明文將 ①幽靈重量 ②「夜瞓」藉口 ③熱可可 放喺 0d。SRC_1 T3 自己都寫「冇 CDL 明文講 0d 移除症狀，屬隱性搬移」。即係 Outline 0d 漏咗 CDL-123 ①②，唔係父層過時。V4 將佢當 stale 刪走，等於靜靜解決咗矛盾。應改做 UNRESOLVED／source tension，排入 parent patch 或者問作者；唔可以當已推翻 | CDL:232（CDL-123）；CDL:237（CDL-128 寫「Beat 0a 幽靈重量設計確認」）；O:38、O:77；SRC_1:62、207 | SHOULD_FIX |
| PC2／MP5 | **處理過頭**：V4 將 0d「強迫自己正常／壓制」解讀做「唔係壓制」。但 CDL-355 拎走嘅係面具同童年創傷，唔係壓制呢個 coping。已同步 CDL-355 嘅 GT 起點狀態仍然寫「強行正常掩蓋不安感」，Coping 欄寫「熱可可儀式（假裝製造幸福感）」（SS）；CDL-357 壓抑稅（Act I 可樂失味嘅個人化部分）本身要求 Act I 已經有未處理嘅心理能量。所以應該分類做 PERSPECTIVE_DIFFERENCE（冇面具，但有 coping 式壓制），唔係 SEMANTIC_CONTRADICTION；「正常＝真心想返日常」呢個講法冇來源支持 | INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md:20、23；CDL:59（CDL-357 ①）；haruka.md:79 | SHOULD_FIX |
| PC12／P14' | **「PASS」講得太滿，而且時序同 Brief 撞**：Brief 嘅甜品掉牙放喺 Act I strip 第 4 段「日常裂開」，喺第 3 段「連結污染」之後（即係首次四人連結後遺症之後，相當於 E-03 之後）；Brief 操角色卡寫牙齒鬆動係「因長期使用魔法而開始崩壞」；01:674 崩壞線次序係「鬆動→絲線縫牙→冷化」。Demo 將真跌牙放喺基地尾（E-03 之前），同 Brief 次序、「長期」同 P17 累積原則都有張力。另外 Brief:6098「先處理現場才掉牙」係講全部少女嘅通則（「她們」），唔係操專屬；Brief:6381 講據點分食甜甜圈，唔係掉牙。應改做 PERSPECTIVE_DIFFERENCE／DEV（AD 跟 Brief 嘅形式，但唔跟 Brief 嘅位置），標 REVALIDATE | Brief:9312–9328（strip 3→4）；Brief:7587；Brief:6098；Brief:6381；01_world_rules_and_costs.md:674；11_directing_playbook.md:610 | SHOULD_FIX |
| PC10／P9' | **證據級別過高**：P9' 標 CS，但「戰鬥用槍→戰後反彈低血糖＝觸發」係推論。來源（O:171、CDL-141、Brief:11224）寫嘅觸發係「葡萄糖注射槍耗盡」（存貨冇晒），唔係反彈。07:563 嘅反彈要有前提（回彈 >180 先觸發，而且係講晴香嘅代謝系統）。應改做 CS（耗盡）＋SI（反彈機制做因果補強） | O:171；CDL:254；07_entities_and_devices.md:563；Brief:11224 | SHOULD_FIX |
| P2 | **歸屬錯**：寫「熱可可＝Act II 可樂失味前置」，照抄 O:78。但 CDL-034 將可樂失味放喺 E-03（Act I），O:21、O:186、GT「Act I 結束狀態」亦一樣。Outline 自己前後唔一致；V4 承繼咗錯嘅版本。E-03 就係 demo 範圍緊接之後，所以 setup 同 payoff 距離其實好近，會影響熱可可要畫幾重 | CDL:125（CDL-034）；O:21；O:78；GT:29 | SHOULD_FIX |
| P7 | 級別標「CS（DRAFT）」唔啱：來源只係 BS:198/203，屬正式 Beat 層 `[DRAFT]`（AI 寫、未批），唔係 canon 決定。應改做 SI（CDL-055「精心隱藏真正代價」可以間接支持「迴避」，但「觀眾感到資訊唔完整」係 DRAFT 推論） | ACT_I_BEAT_SHEET.md:1–12（DRAFT 說明）；BS:198、203；CDL:149 | SHOULD_FIX |
| O3 | 將 C4（CDL-083，AC）同 C5（咬唇半拍，O:242／CDL-347 標「擺位建議（未定案）」）合埋一齊標 CS。咬唇習慣本身係 canon（M:278），但擺喺 E-02 呢個位置未定案，應拆開標 CS＋候選 | O:242；CDL:69（CDL-347）；miyako.md:278 | SHOULD_FIX |
| O6／MP3 | O6「光幕催眠」寫做無條件嘅 CS 去街戰，但 01:229 講明光幕美化只喺維多利亞之淚覆蓋範圍內先生效。如果 MP3 揀範圍外（為咗操牙），O6、O7（市民圍觀）同 C14 直播 UI 都要重新核對。呢個依賴關係冇標出嚟 | 01_world_rules_and_costs.md:223–229；SRC_3:28–29 | SHOULD_FIX |
| PC8／O14／MP2 | O14 只引 CDL-033，冇提 Outline 已經有嘅「奪舍示範 [NC]」（CDL-118/172/177：E-02 之後某事件中間嘅小事件，奪舍母親輕拍小孩、美夜子冷台詞、晴香膠布式覆蓋）。CDL-033 嘅「反面奪舍被阻」好可能就係由呢個 [NC] 承載，而呢個 [NC] 嘅窗口（E-02 後）可以落喺 demo 範圍（2.6 之前）。MP2 嘅候選空間漏咗呢條現成載體 | O:236（奪舍示範 [NC] 行）；CDL:226、296、304 | SHOULD_FIX |
| PC4 | CDL-095「功能性冷漠／口吻係解說唔係邀請」冇被任何 CDL 明文取代；CDL-408 改嘅係日常底色同對圈外人嘅態度。分類應該係 PERSPECTIVE_DIFFERENCE（解說口吻保留、冷嘅程度軟化），唔係 STALE。V4 嘅處理（解說口吻＋暗地照顧）本身冇錯，係標籤錯 | CDL:198；CDL:12 | NOTE |
| P6 | 引 SRC1-B8（CDL-053）但冇標佢「部分被取代」：CDL-053 嘅根源「童年雙重失去創傷」已經由 CDL-355 resolve 做唔存在（GT:22）。P6 本身用 CDL-355 嘅「拯救＝被需要」係啱，但來源欄應該註明 CDL-053 根源已過時，免得下游再引舊版本 | CDL:147；CDL:61；GT:22 | NOTE |
| O15 | HC-4f 嘅來源標籤係 `[DC]`，唔係 [AC]，而且 HC 整檔標 PARTIALLY_STALE。「CS（stale）」應改做 SI／stale，同 Act I「變身蜜月期」（06:986–991、Stage 1 夢幻鏡）呢個 tension 要一併標 | HC:66；HC:3–5；SRC_3:131–132 | NOTE |
| PC7 | 叫 C25（BS:281）做「SR」唔準：BS:281 喺正式 Beat 層 `[DRAFT]`（L11–589），唔係 SCENE REFERENCE（L594+）；C29（BS:749–763）先係 SR。結論（次序未定）不變 | ACT_I_BEAT_SHEET.md:9（SRC_1 縮寫說明）；BS:281 | NOTE |
| P8／PC16／O12／P10'（三人） | 引 AD §12.2／D-13：證據喺禁讀檔（DERIVATION_LEDGER），本輪無法核實，只可以當作 orchestrator 轉述 | — | NOTE |
| PC5 | 冇提 CDL-223 ②／CDL-225 ① 仍然寫「E-04總部被襲＋操認錯＋晴香原諒」（同 O:197–217 唔一致，SRC_1 T12）。P12' 用「基地越暖日後越痛」做對比，但承載嘅毀滅事件喺 canon 入面仍未定 | CDL:358；CDL:360；SRC_1:216 | NOTE |

## C. Outline 有、§2 冇嘅義務（Beat 0d／天台／Beat 2／Beat 2.6）

| 段 | 漏咗嘅義務 | 來源 | severity |
|---|---|---|---|
| 0d | CDL-123 ①幽靈重量雙層症狀 ②「夜瞓」日常藉口（V4 經 PC1 刪咗，但冇 CDL 授權刪，見上面 PC1） | CDL:232 | SHOULD_FIX |
| 天台 | 晴香處於「震驚＋好奇」狀態（CDL-095）——P8 只有「驚」，冇「好奇」呢個推動佢主動赴約、問落去嘅動力 | CDL:198 | SHOULD_FIX |
| 天台 | 美夜子底層「靈魂本能殘留，口說工具、身體守護」（CDL-060，O:89）——§2 只喺街戰（O3）有，天台冇 | CDL:155；O:89 | NOTE |
| 天台 | 知情約束：市民眼中魔法少女係「命運選中嘅民間英雄」；魔法少女唔知裝置有監控後門（CDL-125）——美夜子講解時唔可以越過呢條線 | CDL:234；SRC_1 B12 | NOTE |
| 天台 | E-01 只係緊急交付，天台先係「系統性解說」；E-01 現場晴香只係直覺上覺得「唔對」（CDL-109/113） | CDL:215、220 | NOTE |
| Beat 2 | **燈塔效應明示（CDL-089，AC）**：E-02 晴香好奇問「點解美夜子去學校？」，美夜子正式解釋「我所在之處屍骸必來，無法停用。所以才需要維多利亞天使存在。」§2 完全冇（O4 只用燈塔講操） | CDL:191 | SHOULD_FIX |
| Beat 2 | 主題B：首次變身嘅美好謊言（外在光輝感 vs 底層成本） | O:141 | SHOULD_FIX |
| Beat 2 | 屍骸形態＝人形扭曲版（被強烈情緒佔據嘅人）（CDL-031）；HC-4b 唔可以寫成純怪物／空殼 | O:140；CDL:122；HC:62 | SHOULD_FIX |
| Beat 2 | 美夜子 Act I 全程貓形態＋魔法防護（冰壁／爪擊／光幕），無人形暗示（CDL-108） | O:140；CDL:214 | NOTE |
| Beat 2 | AKS＝H0 繼續（觀眾完全盲目）——全段都要守嘅約束，§2 冇列 | O:22；O:145 | NOTE |
| Beat 2 | 玩家同晴香嘅認知錯位（晴香天真當係散播希望，玩家逐漸覺得異常不安）；NPC 下注討論 | O:142；CDL:151、171 | NOTE |
| Beat 2 | 經理人做共謀之後第一場做莊、確保晴香最佳鏡頭（CDL-165，幕後知情約束）；桐生健唔喺 E-02 現場（CDL-098） | CDL:287；CDL:201 | NOTE |
| Beat 2 | 晴香知情出場狀態：知道「連結可以增幅力量」，唔知後遺症 | BS:288（DRAFT）；CDL:123 | NOTE |
| Beat 2.6 | 任務目標：醫療室（葡萄糖針劑／繃帶）＋化學實驗室（道具原料）＋備用桌椅沙發（佈置據點） | O:172；Brief:11224 | SHOULD_FIX |
| Beat 2.6 | 遊戲形式＝特殊任務，「可觸發可唔觸發」；窗口 E-02 後至隊員離隊前。Demo 當咗佢係必經 beat，要標明係 DEV 定係 demo 只走觸發路線 | O:176；CDL:254 | SHOULD_FIX |
| Beat 2.6 | 玩家體驗：「選擇唔係自由，係被迫」「為咗活落去，少女要偷嘢」 | Brief:11225 | NOTE |
| Beat 2.6 | 血糖數值規則（<70 黑白＋手震；<40 強制昏厥），係 P9' 觸發嘅可玩化依據 | CDL:221；07:561–564 | NOTE |

## D. 總結

- 1 BLOCKS：首次情緒連結係三人定四人、跨污染喺 E-02 即發定 E-03 先發——canon 內部互撞，V4 §1 冇列，demo 等於靜靜揀咗一個全局真相。
- 11 SHOULD_FIX（問題表）＋7 SHOULD_FIX（漏項）：主要係將「Outline 漏寫」當成「父層過時」（PC1）、處理過頭（PC2）、時序同 Brief 撞但標 PASS（PC12）、證據級別過高（P9'／P7／O3）、照抄錯嘅幕次（P2）、AD 撞 AC 冇排 patch（D-13 vs CDL-224）、漏咗 CDL-089 燈塔明示同 2.6 任務目標／可選性。
- 其餘 NOTE。來源包嘅行號同引文本身準確，抽查冇發現捏造引文。

SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR
