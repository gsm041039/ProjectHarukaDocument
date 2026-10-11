# Agent F — 漏洞搜尋員（GAP HUNTER）盲審 v4

被審：`ARTIFACT_BEAT_LAYER_V4.md`｜2026-10-08｜PILOT｜唔批核、唔代作者決定、唔改被審檔。

## 接觸申報（Exposure）
- **寫入次序**：Part 1 同 Part 2 喺同一次寫入落檔（API 中斷後恢復），唔係嚴格「先寫 Part 1 再開清單」；Part 1 內容係 persona 工作問題產出，Part 2 映射喺 Part 1 定稿後先做。
- **angle-system.md 預先載入**：session 開頭，`CLAUDE.md` 用 `@.claude/story_system/angle-system.md` 自動將角度清單載入 context（喺任何 persona pass 之前，類型＝系統自動 include，唔係我主動開）。所以 persona pass 唔係真正「冇見過清單」；我刻意用五個 persona 嘅工作問題去搵，唔跟清單逐格掃，但唔可以聲稱完全盲。
- **禁讀檔案**：冇開任何禁讀檔內容。只係喺 session 開頭 git status 見到檔名（PROJECT_STATUS／NEXT_ACTION／QUESTION_QUEUE／SESSION_LEDGER／BEAT_LAYER_V3_2／DERIVATION_LEDGER 等），類型＝檔名曝光，冇內容。
- **實際讀過（准讀範圍內）**：`ACT_I_BEAT_SHEET.md`（147–312、635–807）、`CANON_DECISION_LOG.md`（grep 指定 CDL 行）、`03_characters/ayakomoji_misao.md`、`03_characters/miyako.md`（grep）、`03_characters/haruka.md:295,298`、`07_entities_and_devices.md:559–568`、`10_gameplay_bible.md:371`、`00_Story_Brief.html:4846/5676/6098`、`HARD_CONSTRAINTS_TABLE.md`（HC-2e/4f）、`CROSS_ACT_FORESHADOW_MANIFEST.md:19`、`IDEOLOGY_THEME_STANCE_MATRIX.md:67`、`ACT_I_OUTLINE.md:91,173`。

---

## PART 1 — Persona pass（先寫，未用角度 ID）

### F01｜引用錯號：倒影 0.3 秒唔係 CDL-237（續編者）
- **發生咩：** N1 DOWNSTREAM 寫「Directing Ref 倒影『0.3 秒』（CDL-237）」。CDL-237 係 E-12「屍骸女王討伐」框架修正（`CANON_DECISION_LOG.md:374`），同倒影無關。0.3 秒其實喺 CDL-123（`CANON_DECISION_LOG.md:232`：「倒影慢半拍0.3秒＋身體沉重感」）。
- **點解要緊：** 追溯欄係呢份表最主要嘅可信度來源；錯號會令後面 Scene 層去錯檔核實。
- **點改：** 改返 CDL-123。代價：零。

### F02｜引用錯號：「肚咕嚕引嚟保安」唔係 CDL-254，而且原文係「差點」（續編者）
- **發生咩：** M3 觸發寫「晴香把風時肚咕嚕引嚟保安（CDL-254 原文；外部事件）」。CDL-254 係 E-12 衛生行動計時器（`CANON_DECISION_LOG.md:402`）。正確來源係 CDL-141（`CANON_DECISION_LOG.md:254`）同 `ACT_I_OUTLINE.md:173`：「晴香=把風緊張肚子咕嚕叫**差點**引來保安」。
- **點解要緊：** 兩個問題：①錯號；②「原文」標籤底下其實改咗事實——canon 係「差點」，v4 變成「真係引嚟」，再由此推出「三人臨時合作匿埋」。呢個係 elaboration，可以接受，但唔可以標「原文」。
- **點改：** 改號做 CDL-141；將「引嚟保安」標 DEV／IA（由「差點」升級）。代價：要承認呢段係推導唔係原文。放棄咗：「CS 原文」嘅可信度光環。

### F03｜H:298 錯引（續編者，NOTE）
- **發生咩：** M5「佢強拉隊友影相嘅習慣，H:298」。`haruka.md:298` 係 IG 雙帳號（habit 10），「強行拉隊友影相」嘅來源係 CDL-125（`ACT_I_BEAT_SHEET.md` E-01後 [NC]：「強行拉隊友影相；美夜子用手擋鏡頭」）。
- **點改：** 加 CDL-125。代價零。

### F04｜操掉牙嘅「時期」同「成因」同 canon 嘅 body horror 分期撞，但表入面冇標（續編者／故事編輯）
- **發生咩：** 作者已鎖「操一隻牙真係跌」，我唔推翻。但 canon `ayakomoji_misao.md:290–292`（CDL-233）寫明：Stage 1（Act II 前期）＝牙齦滲血；Stage 2a（Act II E-09a）＝「牙齒開始鬆動乃至脫落」→絲線縫牙。`misao.md:376` 第一幕外部可見度＝「不可見（完美偽裝）」。v4 將「掉牙」放喺 Act I E-02 後幾日，即係將 Stage 2a 提前成兩幕。M4 狀態只寫「AD／DEV／PROVISIONAL」，冇點名 CDL-233／Stage 表要 REVALIDATE。
- **另一個問題（成因）：** canon 成因＝「魔法過度消耗代價」（守恆定律 Layer 1 物理層，`misao.md:288–290`）。v4 M4 將成因寫成「既有身體崩壞＋**戰中擦傷**」，B5 仲刻意畫一下下顎擦傷做前兆。咁會令「擦傷」變成物理成因之一，同「代價＝魔法消耗」嘅規則唔一致；canon 只係話觀眾**可能初讀**為戰傷，唔係真係由戰傷造成。
- **點改：** ①M4 加 `REVALIDATE_REQUIRED: CDL-233 Stage 1/2a 分期、misao.md:376 Act I 可見度`；②B5 擦傷降為「觀眾誤讀錨」而唔係成因，M4 成因只寫「魔法消耗累積，延遲爆發（Brief:6098）」。代價：B5 少咗一個「物理解釋」，牙跌嗰下對新玩家更突兀。放棄咗：「擦傷→牙」嘅直線因果（但嗰條因果本身同世界規則撞）。

### F05｜美夜子喺 M5 入相，同 canon「美夜子用手擋鏡頭」撞（續編者／演出）
- **發生咩：** M5「晴香硬拉避開咗嘅操入鏡……三人一齊」。canon CDL-125 兩次寫「美夜子用手擋鏡頭」「操加入後……美夜子仍擋鏡頭」（`ACT_I_BEAT_SHEET.md` E-01後／E-02後 [NC] 表）。v4 只處理咗操避鏡，冇處理美夜子。
- **點解要緊：** 合照係 demo 最後一個畫面（M5 功能＝真暖收尾）。如果美夜子都乖乖入相，就同佢已確立嘅習慣衝突；如果佢擋鏡，就要寫入 beat，因為會改變「三人一齊」嘅收尾讀法。
- **點改：** 兩條路：(a) 美夜子照擋鏡／半身出界——保留習慣，收尾變「兩個避鏡嘅人都畀晴香拉入嚟」，暖但帶刺；(b) 美夜子今次冇擋——要寫明係例外，等於喺 demo 消耗咗一個偏後嘅關係進度。我傾向 (a)：成本低、唔透支後段。

### F06｜血糖手錶未派發，但 demo 玩法靠血糖狀態——HUD 冇交代（遊戲設計／製作人）
- **發生咩：** canon 遊戲呈現＝「無傳統 MP 條，改用血糖值 mg/dL 顯示魔力狀態」（CDL-114，`CANON_DECISION_LOG.md:221`），而血糖手錶係 **E-02 之後** 秋穗喺茶餐廳先派（CDL-110；`ACT_I_BEAT_SHEET.md` E-02後 [NC]「血糖手錶派發」）。v4 嘅 B2 要玩家「被迫用一次注射槍」、M1 要「手震」驅動任務，但成份表冇講 demo 時期玩家用咩讀數知道自己血糖跌——冇錶、冇 MP 條。
- **點解要緊：** 注射槍教學（B2）係呢段嘅核心玩法教學；冇資源讀數，玩家唔知幾時應該用，教學會變成強制 QTE。
- **點改：** Beat 層至少標 `BLOCKED_AT_THIS_DEPENDENCY: demo 期血糖 HUD 來源`，候選：(a) 只用身體訊號（灰畫面＋手震）做唯一 UI——貼 CDL-114 嘅低血糖表現，但精確度低；(b) 將秋穗派錶提前——會撞 CDL-110 位置同秋穗出場設計；(c) demo 用一個臨時「心之器光度」——要新資產、可能撞「無 MP 條」。我傾向 (a)，因為唔使改 canon，代價係戰鬥資訊量低、難度要調。

### F07｜「魔法燒血糖」唔係 M1 先隱形揭示，早喺 N4／B2 已經講白咗（故事編輯／新玩家）
- **發生咩：** M1 觀眾Δ＝「魔法要燒血糖（隱形揭示）」。但 N4 美夜子已講「血糖低就用」，B2 戰鬥中晴香血糖跌、畫面變灰、要打針——新玩家喺 B2 已經可以完全推到「打得多→血糖跌」。到 M1 已經唔係揭示。
- **點解要緊：** 知情表（觀眾欄）同 beat 內容唔一致；M1 嘅觀眾功能其實係「資源有限、會用完」（稀缺），唔係「機制揭示」。
- **點改：** M1 觀眾Δ改做「補給有限＝生存壓力」；「魔法燒血糖」嘅揭示歸 B2。代價：M1 少咗一個「發現」位，純粹係壓力 beat。

### F08｜注射槍來源同 canon 唔一致（續編者）
- **發生咩：** N4 前提「美夜子有存貨（IA）」；M2 計劃去「學校醫療室攞葡萄糖針劑」。canon `10_gameplay_bible.md:371`：注射槍取得＝「夜區醫療黑市購買」；`07_entities_and_devices.md:565`：「黑市流通」。學校醫療室有葡萄糖（CDL-141 只講「葡萄糖耗盡」），但唔會有黑市魔法少女注射槍。
- **點改：** M2 目標改「醫療室葡萄糖（口服／針劑原料）」，唔好寫成補返同一款注射槍；N4 IA 補一句「存貨來源＝黑市（canon），demo 唔交代」。代價：M2 嘅「補給」變成次級替代品——其實更好，因為可以留伏線「真貨要去夜區買」。

### F09｜注射後反彈性低血糖冇反映（遊戲設計，NOTE／機會）
- **發生咩：** `07_entities_and_devices.md:564`：注射後回彈 >180 會觸發反應性低血糖、「約 20 分鐘後耗損更劇烈；不可連續使用超過兩次」。B2 打完針，B3 觸發寫「仍然唔夠打（O1'）」——冇用呢條現成 canon 代價。
- **點改：** B3 觸發可加「注射回彈開始」做第二層 Cost Signal，令「提出連結」更被迫。代價：B2→B3 時間要夠長，可能要縮減 B2；亦令首戰教學帶多一條規則，新玩家負擔加重。屬可選。

### F10｜紫音 E-02 尾段現身被刪，E-02.5 嘅觸發前提斷咗，冇標下游（續編者／跨幕）
- **發生咩：** 作者已鎖紫音唔出場，我唔推翻。但 canon Beat 2 嘅 `pressure into next beat` 明寫：「紫音戒斷症狀……係下一 beat（E-02.5）嘅外部觸發前提，本 beat 結尾嘅『搶怪黨』形象係鋪墊」（`ACT_I_BEAT_SHEET.md:293`，SCENE 6 CDL-052）。v4 只喺 M3 標咗「紫音差點破門功能缺＝REVALIDATE」，B7／B8 冇標 E-02.5 鋪墊斷咗。
- **點改：** B7 或 B8 加 `REVALIDATE_REQUIRED: CDL-052 紫音首現／E-02.5 前置（demo 範圍外處理）`。代價零，純標記。

### F11｜「全 demo 唯一一次察覺冇問」嘅宣稱同 N4 打架（故事編輯，NOTE）
- **發生咩：** B3 寫晴香察覺美夜子猶豫但冇問＝「全 demo 唯一一次」。但 N4 美夜子交槍「唔講點解會低」，晴香接過冇問；N3 美夜子「講到代價邊就轉開／望開」，觀眾感到有嘢冇講——晴香察唔察覺？表冇講。如果晴香察覺咗都唔問，「唯一一次」就唔成立；如果冇察覺，N4 要寫明佢冇察覺（拯救者情結令佢唔睇細節），否則演員／編劇會自己填。
- **點改：** N3／N4 角色知情欄明寫「晴香冇察覺迴避」。代價：晴香喺 N3–N4 更天真，要靠觀眾單方面不安承載。

### F12｜美夜子全程係貓，但 beat 寫咗人類身體動作（演出導演）
- **發生咩：** CDL-108：Act I 全程貓形態、無人類形態暗示（`CANON_DECISION_LOG.md:214`；`miyako.md:188`）。v4 嘅身體動作：B2「咬唇半拍」（CDL-083 SI）、N4「交一支注射槍畀晴香」、M3「暗地擋喺操同危險之間」、M4「望住晴香」。「咬唇」對貓唔成立；貓「交」一支槍要講用口咬住推過去定點（E-01 SCENE 2 有先例：「將裝置推到晴香腳邊」）。
- **點解要緊：** 呢啲係 Beat 層嘅行為載體；如果載體本身做唔到，演出會靜靜改成人類姿態，撞 CDL-108「無人類形態暗示」。
- **點改：** B2「咬唇」換貓身體語言（例：耳向後／尾一下停）——要作者或演出層確認；N4 交槍沿用 E-01「推到腳邊」語法。代價：失去「咬唇」呢個 SI 錨點，要重新搵貓版嘅等價訊號。

### F13｜零前情新玩家：會講嘢嘅黑貓喺 N2 冇任何介紹（新玩家）
- **發生咩：** 作者鎖「冇前情回顧」，唔推翻。但新玩家第一次見美夜子係 N2 天台——一隻會講嘢、講解世界觀嘅黑貓。v4 N2 嘅觀眾Δ只寫「知晴香驚」，冇處理「玩家點理解呢隻貓係咩」。同樣，晴香手上個裝置、「首戰」打嘅係咩，都要靠 N2–N3 對話順帶交代。
- **點解要緊：** N2 嘅作者鎖功能（交代驚）同新玩家定向（貓係誰、裝置係咩）擠喺同一 beat，冇寫明分配，容易令 N2 變成資訊 dump 或者反過來令玩家迷失。
- **點改：** N2 觀眾Δ加「玩家接受美夜子＝會講嘢嘅貓、係晴香嘅引路人（唔解釋點解係貓）」，N3 承擔世界觀。代價：N2 多一個義務，「驚」嗰下要更精準。

### F14｜開場節奏：四個 beat 無戰鬥／三個天台 beat 都係對話（製作人／遊戲設計）
- **發生咩：** demo 頭四個 beat（N1–N4）全部 Cost Signal＝N，其中 N2–N4 三個都喺同一天台、靠對話。新玩家要捱完夜＋三段天台先郁得到戰鬥（B1）。canon BS 0d 同天台都係「玩家操作極簡」。
- **點解要緊：** demo 係試玩，頭段流失風險最高；而且三段天台都係「美夜子講、晴香聽」，演出同玩法差異細。
- **點改（候選，唔代決定）：** (a) N2–N4 合併成一個 beat 內三個 turn——減製作量，但 Beat 層會失去「驚講出口」嘅獨立節點；(b) 保留但喺 N1 加可互動（v4 已 HW 標）——成本低；(c) 將 N3 部分世界觀移去 B8 燈塔對話——但會撞「天台＝使命交付」canon。我傾向 (b)＋將 N2–N4 喺 Scene 層做成一個連續場景（Beat 保留三個節點）。

### F15｜晴香 N1 壓抑 → N2 隔日直接講出驚，中間冇載體（故事編輯／演出）
- **發生咩：** canon BS 0d consequence：「晴香『強迫自己正常』嘅壓制模式首次具現化」；`haruka.md:295` 熱可可＝「強行製造虛假幸福感以維持『永遠充滿活力』的假象」。v4 N2 晴香「自己直接講出佢驚（只講感受）」。作者鎖嘅係「由晴香／美夜子對話帶出驚」，冇鎖「晴香主動自己講」。前一晚剛示範壓抑，隔日就主動講，角色邏輯要一個觸發（例如美夜子一句直白嘅問、或者晴香嘅手仲震被睇到）。
- **點改：** N2 觸發加一個小外部載體（美夜子直接問／身體露餡），晴香先講。代價：「晴香主動坦白」變「被問先講」，佢主動性略降；但 CDL-355 撤咗面具設定，坦白本身唔撞 canon，所以呢個係 SHOULD_FIX 唔係 blocker。

### F16｜操 M4 掉牙之後要講嘢——聲音表現冇方向（配音／演出）
- **發生咩：** M4 操「即刻收埋、強忍、繼續扮正常」，M5「閉住嘴入咗相」。M4→M5 之間操有冇講嘢？缺一隻牙會唔會影響發音（漏風）？如果有對白，配音要知；如果刻意令操之後唔出聲，就係一個演出選擇（沉默＝收埋），應該喺 Beat 層寫明「操由掉牙到收尾唔再主動講嘢」或相反。
- **點改：** M4／M5 加演出約束一句。代價：如果揀「唔出聲」，M5 少咗操嘅傲嬌反應位。

### F17｜知情總表漏行（續編者，NOTE）
- **發生咩：** 表頭話「入場→出場有變先列」，但 B2（晴香學識用槍、美夜子保護被晴香照字面收）、M1（觀眾知補給有限）、B7（觀眾見屍骸似有人樣）有變都冇列。
- **點改：** 補三行。代價零。

### F18｜Cost Signal 一覽講「缺 0」，但 B7、M2 嘅 R 好薄（故事編輯，NOTE）
- **發生咩：** B7 觸發「R——戰鬥未完」、M2「R（承 M1）」——兩個都唔係新外部事件，係延續。操答應入隊其實係對 B6 嘅反應（合理），但標 R 會令「缺 0」嘅統計睇落比實際乾淨。
- **點改：** B7、M2 改標「R（承上 beat）」或 O，誠實反映。代價：統計唔再係完美零。

### F19｜基地任務由 canon「可選特殊任務」變主線強制，冇記錄（製作人）
- **發生咩：** CDL-141／BS Beat 2.6：基地任務「可觸發可唔觸發」、時間窗口 E-02 後到隊員離隊前（`ACT_I_BEAT_SHEET.md:375`）。v4 SEQ3b 將佢做 demo 收尾主線。作者鎖咗 demo range 包含三人基地戲，所以唔撞作者；但 Beat 層冇記低「demo 版＝強制；正式版＝可選」，日後會混淆。
- **點改：** SEQ3b 頭加一行 demo-only 標記。代價零。

### F20｜Brief:6098 「延後代價」嘅時間尺度被拉長（故事編輯，NOTE）
- **發生咩：** Brief:6098：「戰鬥中沒事——落台之後才嘔吐；先處理現場才掉牙、失聲」——講嘅係同一場戰之後即時延後。v4 用嚟支持「幾日後」基地嘅掉牙。M1 有「又一場戰（短）」，所以可以讀成「M1 呢場戰之後延後」，但 M4 觸發寫「＋戰中擦傷（B5）延遲到處理完現場先爆」，指嘅係幾日前嗰場。時間尺度唔對。
- **點改：** 同 F04 一齊處理：成因掛 M1 嗰場短戰＋累積，唔掛 B5。

### F21｜製作量：五個場景、多個一次性 NPC（製作人，NOTE）
- **發生咩：** 晴香屋企（夜）、天台（日落）、日區街道（大戰＋直播＋市民＋路人）、學校夜間內部（潛行＋保安＋閉路鏡頭）、基地（佈置＋甜品＋合照）。仲有一次性 VFX（牙跌、屍骸似人樣再消散、變身代價視覺）同潛行玩法系統（只用一次）。
- **點解要緊：** 潛行玩法只喺 M3 出現一次，demo 要為一段做一套 stealth 系統，性價比最低。
- **點改：** M3 標「潛行可降級為 scripted 匿埋事件」做 fallback。代價：「失手段落重置」嘅玩法感消失。

---

## PART 2 — 角度對照（寫完 Part 1 先打開 angle-system.md；見頂部申報：其實已被 CLAUDE.md 預載）

| Finding | 主角度 | 副角度 | 備註 |
|---|---|---|---|
| F01 錯號 CDL-237 | 11 | — | |
| F02 錯號 CDL-254＋「差點」變「真係」 | 11 | 22 | |
| F03 H:298 錯引 | 11 | — | |
| F04 掉牙時期／成因 | 11 | 8, 28, 9 | |
| F05 美夜子入相 | 11 | 17, 2 | |
| F06 demo 期血糖 HUD | 23 | 8, 11 | |
| F07 M1 揭示已提前 | 21 | 3, 26 | |
| F08 注射槍來源 | 11 | 8 | |
| F09 反彈低血糖未用 | 8 | 22, 23 | |
| F10 紫音 E-02.5 前置 | 28 | 11 | |
| F11 「唯一一次察覺冇問」 | 20 | 12 | |
| F12 貓身體做人類動作 | **NO_MATCH** | （最近：24、12） | 見下 |
| F13 新玩家見會講嘢嘅貓 | 10 | 21, 7 | 部分覆蓋，見下 |
| F14 開場四段無戰鬥 | 25 | 23, 27 | |
| F15 壓抑→坦白冇載體 | 1 | 13, 22 | |
| F16 掉牙後聲音表現 | **NO_MATCH** | （最近：24、12） | 見下 |
| F17 知情表漏行 | 20 | 21 | |
| F18 Cost Signal 統計 | 22 | — | |
| F19 可選→強制冇記錄 | 23 | 11, 27 | |
| F20 延後代價時間尺度 | 8 | 22 | |
| F21 製作量／單次系統 | 27 | 23 | |

**NO_MATCH 數：2**（F12、F16），另 F13 部分覆蓋。

### NO_MATCH 說明（清單缺口）
1. **F12 → 「角色身體形態／演出載體可行性」（Performer Embodiment Feasibility）**：24（導演／調度）問嘅係「有冇可視覺化嘅行為載體」，假設咗載體係人；12（Draftability）問「寫唔寫得出」，係寫作層。冇一格問「呢個角色喺呢個時期嘅身體形態（貓／傀儡／Glitch Form／失聲）做唔做到 beat 指定嘅動作」。本作有大量非人／受損身體（美夜子貓、操絲線懸吊唔落地、屍骸人形扭曲、後期縫牙／斷手），呢類撞法會反覆出現。
2. **F16 → 「聲音／配音演出狀態」（Voice & Vocal Performance State）**：清單冇聲音軸。身體代價會改變發聲（掉牙、失聲 Brief:6098、晴香低血糖氣促），但 1–28 冇一格問「呢個 beat 角色嘅發聲狀態係咩、有冇對白、配音要知咩」。24 只講視覺；12 只講文字。
3. **F13（部分）→ 「新玩家定向負載／冷開場」（Cold-open Onboarding）**：10、21 管觀眾知情，但冇一格專門問「零前情玩家喺第一次見到某角色／機制時要接受幾多未解釋前提」。demo 結構（作者鎖冇回顧）令呢格好重要；10 可以勉強吸收，所以只算部分。

建議（要作者知道，唔自行加 ID）：考慮將 1、2 加入 Registry；3 可以寫入 10 嘅問題說明。

---

## JSON cells
```jsonl
{"CELL_ID":"F-01","ANGLE_ID":"11","TARGET_ID":"G1","QUESTION":"N1 倒影 0.3 秒引用號碼啱唔啱？","EVIDENCE":"ARTIFACT:21 'CDL-237'; CANON_DECISION_LOG.md:374 CDL-237=E-12屍骸女王; :232 CDL-123 '倒影慢半拍0.3秒'","COUNTERCHECK":"SEARCHED: CDL-237 全行，無倒影內容","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-02","ANGLE_ID":"11","TARGET_ID":"G4","QUESTION":"M3 保安觸發標 CDL-254 原文，係咪原文？","EVIDENCE":"ARTIFACT:135; CANON_DECISION_LOG.md:402 CDL-254=E-12計時器; :254 CDL-141; ACT_I_OUTLINE.md:173 '差點引來保安'","COUNTERCHECK":"SEARCHED: 咕嚕 全 canon，只見 CDL-141／BS:365／OUTLINE:173","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-03","ANGLE_ID":"11","TARGET_ID":"G4","QUESTION":"M5 強拉影相習慣出處？","EVIDENCE":"ARTIFACT:150 'H:298'; haruka.md:298=IG雙帳號; ACT_I_BEAT_SHEET E-01後[NC] CDL-125","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-04","ANGLE_ID":"11","TARGET_ID":"G4","QUESTION":"Act I 掉牙同 CDL-233 分期／成因有冇撞，有冇標？","EVIDENCE":"ARTIFACT:142,145; ayakomoji_misao.md:288-292 (Stage1 Act II 牙齦／Stage2a E-09a 脫落／成因=魔法過度消耗); :376 Act I 不可見","COUNTERCHECK":"COUNTER: 作者已鎖掉牙（00_INPUT_PACKAGE:9）→唔推翻，只要求標 REVALIDATE 同修成因","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-05","ANGLE_ID":"11","TARGET_ID":"G4","QUESTION":"M5 三人合照同美夜子擋鏡習慣撞唔撞？","EVIDENCE":"ARTIFACT:150-151; ACT_I_BEAT_SHEET E-01後/E-02後[NC] CDL-125 '美夜子用手擋鏡頭''美夜子仍擋鏡頭'","COUNTERCHECK":"SEARCHED: 美夜子入相例外 — 無","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-06","ANGLE_ID":"23","TARGET_ID":"G2","QUESTION":"demo 期冇血糖手錶，注射槍教學用咩讀數？","EVIDENCE":"ARTIFACT:67-68; CANON_DECISION_LOG.md:221 CDL-114 '無傳統MP條，改用血糖值'; :216 CDL-110 秋穗 E-02/E-03後派錶; BS E-02後[NC]","COUNTERCHECK":"COUNTER: CDL-114 低血糖畫面黑白＋手震可作唯一訊號，但精度低","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-07","ANGLE_ID":"21","TARGET_ID":"G4","QUESTION":"M1『魔法燒血糖隱形揭示』係咪已喺 N4/B2 講咗？","EVIDENCE":"ARTIFACT:46 '血糖低就用'; :67-68 血糖跌＋打針; :124","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-08","ANGLE_ID":"11","TARGET_ID":"G1","QUESTION":"注射槍來源同 canon 一致？","EVIDENCE":"ARTIFACT:51,130; 10_gameplay_bible.md:371 '夜區醫療黑市購買'; 07_entities_and_devices.md:565 黑市流通","COUNTERCHECK":"COUNTER: N4 已標 IA；但 M2 醫療室針劑未標","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-09","ANGLE_ID":"8","TARGET_ID":"G2","QUESTION":"注射後反彈低血糖有冇用到？","EVIDENCE":"07_entities_and_devices.md:564; ARTIFACT:74","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-10","ANGLE_ID":"28","TARGET_ID":"G3","QUESTION":"刪紫音首現有冇標 E-02.5 前置斷裂？","EVIDENCE":"ACT_I_BEAT_SHEET.md:293; SCENE 6 CDL-052; ARTIFACT:138 只標 M3","COUNTERCHECK":"COUNTER: 作者鎖紫音唔出場→只要求標記","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-11","ANGLE_ID":"20","TARGET_ID":"G1","QUESTION":"晴香 N3/N4 有冇察覺迴避？『唯一一次』成唔成立？","EVIDENCE":"ARTIFACT:36,46,75","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-12","ANGLE_ID":"NO_MATCH","TARGET_ID":"G2","QUESTION":"貓形美夜子做唔做到 beat 指定動作（咬唇／交槍）？","EVIDENCE":"ARTIFACT:46,68; CANON_DECISION_LOG.md:214 CDL-108 全程貓形態無人類暗示; BS E-01 SCENE2 推到腳邊","COUNTERCHECK":"SEARCHED: angle 24/12 定義，皆未涵蓋形態可行性","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-13","ANGLE_ID":"10","TARGET_ID":"G1","QUESTION":"零前情玩家點理解會講嘢嘅貓／裝置？","EVIDENCE":"ARTIFACT:23-31; 00_INPUT_PACKAGE:7 冇前情回顧","COUNTERCHECK":"COUNTER: 作者鎖冇回顧→唔加回顧，只要求分配定向責任","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-14","ANGLE_ID":"25","TARGET_ID":"G1","QUESTION":"開場四 beat 無戰鬥、三段天台對話，節奏得唔得？","EVIDENCE":"ARTIFACT:172; BS:165 玩家操作極簡; BS:207","COUNTERCHECK":"COUNTER: 作者鎖開場由對話交代驚＋range 由當晚起","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-15","ANGLE_ID":"1","TARGET_ID":"G1","QUESTION":"N1 壓抑→N2 主動講驚，有冇外部載體？","EVIDENCE":"ACT_I_BEAT_SHEET.md:158 '強迫自己正常嘅壓制模式首次具現化'; haruka.md:295; ARTIFACT:27","COUNTERCHECK":"COUNTER: CDL-355 撤 Act I 面具，坦白唔撞 canon","VERDICT":"FINDING","SEVERITY":"SHOULD_FIX","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-16","ANGLE_ID":"NO_MATCH","TARGET_ID":"G4","QUESTION":"操掉牙後發聲狀態／有冇對白？","EVIDENCE":"ARTIFACT:143,150; Brief:6098 掉牙、失聲","COUNTERCHECK":"SEARCHED: angle 1-28 無聲音／配音軸","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-17","ANGLE_ID":"20","TARGET_ID":"G2","QUESTION":"知情總表有冇漏有變嘅 beat？","EVIDENCE":"ARTIFACT:157-169 缺 B2/B7/M1","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-18","ANGLE_ID":"22","TARGET_ID":"G3","QUESTION":"B7/M2 R 標記係咪新外部事件？","EVIDENCE":"ARTIFACT:105,129,172","COUNTERCHECK":"COUNTER: 兩者都承上 beat 外部壓力，唔算 INTENTION-DRIVEN","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
{"CELL_ID":"F-19","ANGLE_ID":"23","TARGET_ID":"G4","QUESTION":"基地任務由可選變強制有冇記錄？","EVIDENCE":"ACT_I_BEAT_SHEET.md:375 可觸發可唔觸發; CANON_DECISION_LOG.md:254 CDL-141","COUNTERCHECK":"COUNTER: 作者鎖 demo 含基地戲","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"HIGH"}
{"CELL_ID":"F-20","ANGLE_ID":"8","TARGET_ID":"G4","QUESTION":"延後代價時間尺度合 Brief:6098？","EVIDENCE":"00_Story_Brief.html:6098; ARTIFACT:142","COUNTERCHECK":"COUNTER: M1 有短戰，可掛 M1","VERDICT":"MERGED_TO","SEVERITY":"NOTE","MERGED_TO":"F-04","CONFIDENCE":"MED"}
{"CELL_ID":"F-21","ANGLE_ID":"27","TARGET_ID":"G4","QUESTION":"一次性潛行系統性價比？","EVIDENCE":"ARTIFACT:136","COUNTERCHECK":"NO_DIRECT_COUNTER:","VERDICT":"FINDING","SEVERITY":"NOTE","MERGED_TO":null,"CONFIDENCE":"MED"}
```

## 每個用到嘅角度：冇呢個角度會漏咩
- **11 Canon/Continuity**：會漏三個錯號（F01–F03）同掉牙分期撞 CDL-233（F04）、美夜子擋鏡（F05）——全部係「睇落有追溯、其實追錯」，最危險。
- **23 Gameplay**：會漏 demo 期冇錶冇 MP 條嘅 HUD 真空（F06）。
- **21／20 知情**：會漏 M1 揭示已提前（F07）同表漏行（F17）、晴香察覺狀態未寫（F11）。
- **28 跨幕**：會漏紫音 E-02.5 前置斷（F10）。
- **8 世界規則**：會漏反彈低血糖機會（F09）同延後代價尺度（F20）。
- **25 節奏**：會漏開場四段無戰鬥（F14）。
- **1 角色成長**：會漏壓抑→坦白跳躍（F15）。
- **22 因果鏈**：會漏 R 標記灌水（F18）。
- **27 製作量**：會漏單次潛行系統（F21）。
- **10 觀眾體驗**：會漏新玩家見會講嘢嘅貓（F13，部分）。

## 未列入角度嘅關注點
1. 角色身體形態／演出載體可行性（F12）— NO_MATCH。
2. 聲音／配音演出狀態（F16）— NO_MATCH。
3. 冷開場新玩家定向負載（F13）— 部分由 10 覆蓋，建議寫入 10 嘅說明。
4. 「追溯欄標籤誠實度」（例：F02 標『原文』但改咗事實）— 11 有覆蓋事實撞，但冇一格專門檢查「證據等級標籤（CS／SI／IA／原文）用得啱唔啱」；暫歸 11，唔算 NO_MATCH。

SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR
