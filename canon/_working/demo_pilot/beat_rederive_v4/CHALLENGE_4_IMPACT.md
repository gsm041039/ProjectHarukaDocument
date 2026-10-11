# CHALLENGE ④ — Canon／跨幕影響（Inherited Obligation Challenge）

`[DRAFT / 暫定 — pending full-story beat lock]` ｜ EVIDENCE + FLAGGING ONLY（冇改任何檔）｜ 2026-10-08
**讀咗：** beat_rederive_v4/DERIVATION_V4.md、SRC_1..SRC_3；story_construction/ACT_II_OUTLINE.md、ACT_III_OUTLINE.md、LATE_REVEAL_SEEDING_AUDIT.md；CROSS_ACT_FORESHADOW_MANIFEST.md；CANON_DECISION_LOG.md（逐行核）；03_characters/ayakomoji_misao.md；另核 04_timeline_canon.md:136–143（首次連結定義）。
**冇讀：** demo_pilot 其他檔、PROJECT_STATUS／NEXT_ACTION／SESSION_LEDGER／QUESTION_QUEUE。
**ACT_IV_OUTLINE.md 唔存在**（LATE_REVEAL_SEEDING_AUDIT.md:11 確認）；Act IV 材料只喺 ACT_III_OUTLINE.md 後段 L-phase 草稿（例 III:702–720），狀態未批核。
**縮寫：** II＝ACT_II_OUTLINE.md；III＝ACT_III_OUTLINE.md；FM＝CROSS_ACT_FORESHADOW_MANIFEST.md；LRS＝LATE_REVEAL_SEEDING_AUDIT.md；CDL＝CANON_DECISION_LOG.md（行號）；S＝ayakomoji_misao.md；TL＝04_timeline_canon.md。
**嚴重度：** BREAK（下游 AC 設計直接失效）／STRAIN（仍可成立但要改寫或補位）／OK（核過冇事，記低理由）。

---

## 0. 頭條發現（最影響 promotion 嘅幾點）

1. **操牙鏈同 CDL-233（AC/SS）四段式正面相撞**：canon 寫明「掉牙」係 Act II E-09a Stage 2a、「縫牙第一次使用」亦喺 E-09a（CDL:369；II:371；S:292）。Act I 真跌牙＝將最重一級提前到最前，同 Stage 1「牙齦滲血、觀眾初讀為戰鬥受傷」嘅誤導（II:192）互斥。Act I 大綱全無「牙」字（grep ACT_I_*.md 零命中）＝全新 plant，冇 FM row。→ 見 §1。
2. **DERIVATION PC7／MP1 將 E-07b 依賴讀錯咗對象**：CDL-317（CDL:84）同 II:191、S:116、S:417 講嘅「深度連結」係**操↔紫音**（「操感受到紫音嘅怒火，紫音感受到操完美面具下喊緊嘅細路」S:116），唔係「同操」或晴香↔操。E-02 無論連結喺操到場前定後，紫音都唔喺場（CDL-139 紫音 E-02 後先入隊，CDL:252）→ **E-02 次序完全滿足唔到 E-07b**；呢個依賴只可以由 E-03 四人連結承載。MP1 可以唔再考慮 E-07b，但 E-03 必須保留「四人、操↔紫音互相穿透」。→ 見 §3。
3. **「情緒連結首戰」喺 canon 入面指緊兩件唔同嘅事**：TL:139 首戰＝四人、連鎖崩潰、四人協議（即 Outline 嘅 E-03 內容），而且 TL:136「潛入學校」排喺首戰之前；Outline／CDL-032/224 則將首戰放 E-02（2–3 人）。S:116/S:417 跟 TL 版本（而且 anchor `#event-emotion-link-battle` 指去唔存在嘅 id，TL 實際係 `event-emotion-link-first`）。Demo 承襲咗呢個上游矛盾。→ §3。
4. **基地唔止要活到 E-04，要活到 Act II E-09**：II:382「晴香喺秘密基地因 Fallen Angel 影片洩露陷入絕望」；II:384 E-09/E-09a 先「失去所有日區立足點」。但 CDL-141 將基地定為「可觸發可唔觸發」特殊任務（CDL:254）——上游已經自相矛盾（可選任務 vs Act II 必經場景）。→ §5。
5. **P-A23 緋潮 Lv.1 係 Act I–II 之間僅有兩粒種之一**（LRS:82：成個 Act II 零 touchpoint）。E-02 地點／時間（MP3）同「暖結尾」嘅光線選擇，直接決定呢粒種生唔生存、同 E-04 Lv.2「日落晚霞異常深邃」（CDL:303）嘅遞增有冇對比。→ §6。

---

## 1. 作者鎖定偏離 ③：操牙 Act I 真跌、操收埋（P14'）

| # | 下游位 | file:line | 現有 canon | Act I 真跌後點斷 | 嚴重度 |
|---|---|---|---|---|---|
| T-1 | Stage 1 牙齦滲血 | II:192；CDL:369；S:290；CDL:84（CDL-317 將觸發點移至 E-07b） | Act II Phase A–B，「首次」症狀；「觀眾可能初讀為戰鬥受傷」 | 觀眾已見過 Act I 掉牙 → Stage 1 唔再係首次、亦冇可能誤讀為戰鬥傷；E-07b「第一次因紫音選擇付出物理代價」嘅因果重量被分薄（牙已經壞咗喺先） | BREAK（誤導功能）／STRAIN（因果） |
| T-2 | Stage 2a 鬆動＋脫落＋縫牙 | CDL:369（「E-09a…牙齒開始鬆動甚至脫落…利用傀儡絲線將斷牙縫回」）；II:366、II:371（「縫牙（Stage 2）在情緒崩潰中『第一次使用』的情境在此發生」）；S:292 | 脫落＝E-09a、縫牙首用＝E-09a，同耳鳴封印同一瞬間 | ①「開始脫落」已提前到 Act I；②如果操 Act I 用絲線收埋顆牙 → E-09a「第一次使用」失效，CDL-231/232 Double-hit 嘅「縫牙＝崩潰中自救」起點被搶；③如果 Act I 唔縫（收埋顆牙／遮缺口）→ E-09a 首縫可保，但要寫明 Act I 點樣遮、點解唔即縫 | BREAK（如 Act I 縫）／STRAIN（如唔縫） |
| T-3 | Stage 2a 位置本身上游已唔一致 | II:285（E-08 段落寫 Stage 2a）vs II:357/371、CDL:369（E-09a） | 同一份 Act II 兩處 | Act I 再加一個掉牙位，Stage 2a 會變成三個候選位（Act I／E-08／E-09a），更難鎖 | STRAIN（上游既有） |
| T-4 | 操鏡像法則第一步 | II:287；CDL:70（CDL-346 ④） | 第一步＝Act II「縫牙後」攞小鏡檢查 → 微弱一閃原本女性身影 | Act I 收埋牙時，如果寫咗「照鏡確認」而地點喺覆蓋範圍外（MP3 選項）→ 鏡像法則會生效（SRC3 引 01_world_rules:1055）→ 搶走 CDL-346 第一步。**約束：Act I 牙 beat 唔可以有鏡面確認，或者必須喺覆蓋範圍內** | BREAK（如有鏡）／OK（如冇鏡） |
| T-5 | Stage 3 黑奏撬口揭露 | III:97、III:249；CDL:367/368（CDL-231/232）；S:298；FM:41、FM:106（P-A25 第二段） | 「揭露絲線縫牙全貌」＋紗夜遺言清晰還原 Double-hit | 機制唔斷：Act I 舊牙可以成為「全貌」入面最早嘅一顆（加深歷史感）。但要確認「全貌」嘅震撼係對隊友／晴香，而唔係對觀眾（觀眾 Act II 已見縫合，II:285「只在口腔內可見」）；Act I 加一次觀眾目擊，觀眾已知量再前移 | OK／STRAIN（觀眾已知量） |
| T-6 | P-D02 plant row | II:802（「E-07b/E-08｜Stage 1→Stage 2」） | plant 起點 E-07b | 起點變 Act I；FM 冇對應 P-A row（FM 全表無「牙」） | STRAIN（表要改） |
| T-7 | 身體代價累積原則 | 11_directing_playbook.md:610（經 SRC3 §2b） | 「身體代價不應一開始就最重；必須累積」 | 原設計次序：滲血→鬆動／脫落→縫→撬口。Act I 掉牙令最重之一嘅「脫落」排第一，之後 Act II 滲血反而輕 → 遞增倒轉。DERIVATION P17 要求牙前要有前兆，但前兆只喺 demo 內，冇解決 Act I→Act II 嘅倒退 | BREAK（除非 Act II Stage 1 重寫為「再發／惡化」） |
| T-8 | Act I 揭示上限 | 09_information_design.md:34（SRC3 §2b）；CDL:358（CDL-223 Plausible Deniability）；HC-1b（SRC1-0.8） | Act I 只可「隱形揭示」；唔可過早揭黑暗本質 | 掉牙係可見 body horror。Brief:7636–7639 支持（「冇人察覺」），所以角色層合規；但觀眾層屬「看得見嘅代價」，要靠「冇人知、甜品局溫暖蓋住」維持 deniability | STRAIN |
| T-9 | 操 Act I 視覺／量尺狀態 | S:242–244（「完美的瓷娃娃」）；S:376（第一幕「不可見（完美偽裝）」）；S:385（「零破綻」） | Act I 零破綻 | 對隊友仍零破綻（操收埋）→ 角色層 OK；但角色檔 Act I 段落要加「觀眾可見、隊友不可見」嘅第一道裂縫 | STRAIN（文件同步） |
| T-10 | 戰鬥地點因果 | 01_world_rules_and_costs.md:223–225（SRC3 §1b） | 範圍外代價自留、加速崩壞線（操＝牙） | 如牙因 E-02 而起，E-02 要喺範圍外；但 O6/O7 直播＋光幕＋市民歡呼要喺範圍內（CDL-056/057）→ 同一場戲兩個條件互斥（DERIVATION MP3 已列）。下游：E-02 地點一揀，CDL-176 緋潮讀法、O6 直播 UI 一齊受影響 | STRAIN |
| T-11 | Gate A tracker | INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md:71（經 SRC2 §5：操 Act I coping 代價＝BK） | BK | Act I 牙會填咗呢格；tracker 要更新先合規 | STRAIN（文件同步） |
| T-12 | CDL 層 | CDL:369（CDL-233 AC/SS） | AC 四段式 | 偏離係作者鎖定，但 CDL-233 未有 amendment；promotion 前要新 CDL row 改 Stage 劃分（建議形式：Act I「Stage 0／隱藏前兆」），否則 demo 同 AC canon 並存衝突 | BREAK（gate） |

**牙鏈 promotion 最低條件（只列，唔決定）：** (a) Act I 唔用絲線縫（保 E-09a 首縫＋CDL-231 同步）；(b) Act I 牙 beat 冇鏡面（保 CDL-346 第一步）；(c) Act II Stage 1 改寫做「再發」而唔係「首發」，並放棄或替換「初讀為戰鬥受傷」誤導；(d) 新 CDL 修 CDL-233 Stage 編號；(e) FM 新增 Act I 牙 plant row。

---

## 2. 作者鎖定偏離 ②：暖結尾取代「勝利後靜默」（O8／D-13）

| # | 下游位 | file:line | 現有 canon | 影響 | 嚴重度 |
|---|---|---|---|---|---|
| W-1 | 「勝利後靜默」導演語法 | CDL:359（CDL-224）；SRC1-E6（O:136） | 語法明文掛喺 **E-03**（「E-03戰後無歡呼、無擊掌，四人癱倒」） | E-02 暖結尾本身唔撞 CDL-224；**只要 D-13 唔滲入 E-03**。如 E-03 都軟化 → Peak Moment of Doubt 失去載體 | OK（限 E-02）／BREAK（如延伸 E-03） |
| W-2 | 連結入侵本質被勝利感蓋住 | CDL:358（CDL-223 ③）；CDL:360（CDL-225 ③「E-02情緒連結＝所有防衛機制同時強行突破」） | E-02 入侵真實發生、被勝利蓋住 | 暖結尾＝「蓋住」嘅載體，方向一致；風險係 O10' 強度被 D-13 壓到冇行為痕跡 → CDL-225 ③ 冇落地 | STRAIN |
| W-3 | Act IV 拒絕「全人類情緒互聯」 | CDL:359（「晴香親身體驗『情緒強制透明的恐怖』→Act IV拒絕…極具說服力」）；III:704–714（L6/L7 草稿：「強制的透明，不是真正的理解」）；DERIVATION O17 | 恐怖體驗來源＝E-02＋E-03 序列 | E-02 變暖 → 全部「恐怖」重量落 E-03；E-03 要獨力撐起 Act IV 主題演講嘅記憶根據。Act IV 未有正式 outline，payoff 本身未穩 | STRAIN（REVALIDATE_REQUIRED） |
| W-4 | 晴香 Act II 拒絕共振計劃動機 | CDL:227（CDL-119：「個人記得後遺症的極致恐怖感」） | 記憶驅動 | 同 W-3，依賴 E-03 | STRAIN |
| W-5 | 純粹喘息規則 | CDL:475（CDL-330 ②：喘息場面「不得出現喺任何 Plant/Payoff 表」） | — | 如暖結尾／基地溫暖被登記為「日後失去」嘅 plant（DERIVATION P12'），就唔再係「純粹喘息」；要分清邊個 beat 係工具化對比、邊個係純喘息 | STRAIN（分類） |
| W-6 | 美夜子信賴分水嶺 | II:335–338（CDL-191：E-09「兩人從功利走向信賴的絕對分水嶺」）；FM:28、III:278–283（P-A12 → I4 貓殼碎裂無語言相認） | Act I 美夜子＝口說工具、身體守護 | 暖結尾如果令美夜子嘅照顧變「明顯溫柔」，E-09 分水嶺同 I4 payoff 嘅對比會縮水。CDL-408 八千代型只准「暗地」 | STRAIN |

---

## 3. 首次情緒連結成員（O1'／MP1）同 E-07b 依賴

| # | 下游位 | file:line | 內容 | 影響 | 嚴重度 |
|---|---|---|---|---|---|
| L-1 | E-07b「聽唔到」落差 | II:191（「兩人之前已透過情緒連結直接感受過對方最深層情緒」）；CDL:84（CDL-317）；S:116、S:417 | 「兩人」＝**操＋紫音** | E-02 冇紫音（CDL:252）→ E-02 次序（連結喺操到場前／後）同 E-07b 冇關。**DERIVATION PC7「（同操）」係錯讀**；MP1 應刪呢條考慮 | BREAK（推導依據錯）→ 修正後 OK |
| L-2 | E-03 必須承載操↔紫音深層互穿 | CDL:252（CDL-139 ①「E-03情緒連結包含紫音四人」）；TL:139（四人感知其他三人最深私密層） | — | E-07b 依賴實際落喺 E-03；E-03 一定要四人、一定要有操↔紫音互穿內容。Demo 唔掂 E-03，但 promotion 時 E-03 Beat Sheet 要明寫 | REVALIDATE_REQUIRED |
| L-3 | 「首戰」所指 | TL:136–141（潛入學校→…→首戰＝四人連鎖崩潰＋四人協議）vs Outline／CDL:123（CDL-032 首次使用＝E-02）、CDL:359 | 兩套時間線 | TL 版：基地喺首次連結之前、首次連結四人；Outline 版：E-02 首次（2–3 人）、E-03 後遺症。S:116/417 引 TL 版而 anchor 斷（`#event-emotion-link-battle` 唔存在，TL 實際 `event-emotion-link-first`）。Demo 跟 Outline 版 → 同 TL 衝突 | BREAK（上游既有，demo 承襲） |
| L-4 | E-02 連結強度 vs 「四人協議」因果 | CDL:360（CDL-225 ③「E-02…直接導致『四人協議』」） | E-02 連結直接導致四人協議 | E-02 只有 2–3 人，協議係「四人」→ 因果要經 E-03 再發先成立；同 SRC1-T8（首發即後遺症 vs 多次使用後先發）同源 | STRAIN |
| L-5 | 連結跨污染「最恐怖」位 | Brief:9422（SRC3 §5「第一次四人聯手戰鬥後，最恐怖的代價才出現」） | 四人戰之後 | 支持 E-02 輕、E-03 重；同 D-13 方向兼容 | OK |
| L-6 | 操 Act I 連結暴露 | S:417（「首次觸發情緒連結時，紫音穿透操的完美面具」） | 操面具第一次被穿透＝由紫音 | 如 MP1 揀「連結喺操到場後（三人）」，晴香／美夜子會先穿透操面具 → 搶咗 S:417「紫音先穿透」嘅位，同 E-07b 嘅雙向深度唔再獨特。揀「操到場前（兩人）」則冇呢個問題 | STRAIN（MP1 傾向證據） |
| L-7 | P-A07 晴香倒下脆弱點 | FM:23、FM:91；II:426、II:815；CDL:178（CDL-078） | E-03 晴香倒下 → E-11a PAID | Demo 唔掂；但如 demo 喺 E-02 放晴香明顯身體崩潰（O10'），會分薄 E-03 晴香倒下嘅首發性 | OK（如 E-02 只有痕跡） |

---

## 4. E-03 四人後遺症（邊界）＋紫音缺席（偏離 ①）

| # | 下游位 | file:line | 內容 | 影響 | 嚴重度 |
|---|---|---|---|---|---|
| E-1 | 紫音必須喺 E-03 前入隊 | CDL:252（CDL-139）；SRC1-X1/X4（BS:334–335） | E-02.5 喺 E-02 後、E-03 前；2.5 exit 嘅血糖消耗係 2.6 前提 | 三人基地有兩種讀法，**DERIVATION 冇講明揀邊個**：(a) 2.6 排喺 2.5 之前 → BS:334–335「2.5 → 2.6 前提鋪墊」斷，BS:582 breathing room（2.5＋2.6 連續）斷；(b) 紫音已入隊但冇參與 → CDL:254「四人」分工＋「共同秘密的夥伴」將紫音排除出「共同秘密」，同 CDL-225「病態默契」隊伍結構撞 | BREAK（需揀一） |
| E-2 | 可樂失味其中一場＝紫音遞可樂 | CDL:125（CDL-034 C） | E-03 | Demo 外；只要 E-03 前紫音入隊就 OK | OK（條件式） |
| E-3 | 四人癱倒／四人協議 | CDL:359、CDL:227（CDL-119）；TL:141 | 「紫音／美夜子因經歷較多略好」 | 同上，條件式 | OK（條件式） |
| E-4 | 紫音被排出基地嘅 Act II 後果 | II:382（E-09 晴香喺秘密基地）；II:199（E-07b 放逐紫音） | — | 讀法 (b) 下，紫音從未屬於基地「共同秘密」→ E-07b 放逐、Act III 紫音回歸（III:107「為紫音 Day 14 回歸積累情感位能」）嘅「被趕出家」重量會變輕（佢本來就唔喺入面）。讀法 (a) 冇呢個問題（紫音之後再加入基地） | STRAIN（讀法 b） |
| E-5 | 紫音分工功能缺口 | CDL:254（「紫音＝暴躁差點暴力破門（被晴香拉住）」） | 晴香拉住紫音＝晴香主動照顧 | DERIVATION PC11 已記「唔補（REVALIDATE）」 | REVALIDATE_REQUIRED |
| E-6 | 便利店作戰（四人） | CDL:311（CDL-183，經 SRC1-X3） | E-02.5 至 E-03 之間 | Demo 外，唔受影響 | OK |

---

## 5. 基地存活（P15）

| # | 下游位 | file:line | 內容 | 影響 | 嚴重度 |
|---|---|---|---|---|---|
| B-1 | 彩 E-04 後入隊監控基地 | CDL:267（CDL-151） | 「正式進入秘密基地＝近距離監控」 | DERIVATION P15 只寫到 E-04 | OK |
| B-2 | **Act II E-09 晴香身處秘密基地** | II:382 | 「晴香喺秘密基地因 Fallen Angel 影片洩露陷入絕望」 | 基地要存活到 113 年 7 月（E-09），**P15 範圍寫少咗** | STRAIN（P15 要擴） |
| B-3 | 基地喪失嘅實際載體 | II:384（「團隊失去所有日區立足點，倉皇逃入夜區」）；II:418 | E-09/E-09a 雙線災難 | 呢個先係 P12'「基地越暖，日後失去越痛」嘅真正 payoff 位（取代已刪嘅 CDL-141 虛榮洩露）。現有 Act II 冇明寫「基地被毀／放棄」一刻 → payoff 未落地 | STRAIN（payoff 冇 beat） |
| B-4 | 可選任務 vs 必經存在 | CDL:254（「可觸發可唔觸發」）vs CDL:267、II:382 | 上游自相矛盾 | 如玩家唔觸發 2.6，彩監控同 E-09 場景冇場地。Demo 將 2.6 當主線做 → 等於靜靜解咗呢個矛盾 → 要列作 parent patch／author gate，唔可以 demo 自己定 | BREAK（gate） |
| B-5 | 舊「虛榮洩露」殘留 | CDL:254（CDL-141 尾段）；CDL:358/360（CDL-223 ②、CDL-225 ①「E-04總部被襲…操」）；S:377、S:386（「據點事件後」閾值降低／放鬆控制） | CDL-317（CDL:84）已刪 E-05a | S:377/386 仍引用「據點事件」→ 指向已刪 beat；demo 唔種虛榮洩露係啱，但呢兩行角色檔要 REVALIDATE | STRAIN（上游 stale） |
| B-6 | 相簿三／四人合照 | II:142、II:148 | 「三人或四人的日常照」 | 三人基地 OK | OK |

---

## 6. 指定 plants：P-A04／P-A12／P-A23

| Plant | 植入（FM） | Payoff | Demo 影響 | 嚴重度 |
|---|---|---|---|---|
| **P-A04** 晴香天真善意建隊 | FM:20（E-02/E-02.5；擋操＋珍寶珠） | FM:96、II:174、II:180、II:813（E-07 珍寶珠 PAID）；「全作：非英雄姿態」 | Demo 只承載 E-02 半（擋操，O16）；Act II PAID 嗰半（珍寶珠）完全依賴 E-02.5，而 demo 跳過 2.5。Promotion 時 2.5 必須仍喺 E-02→E-03 之間（同 §4 E-1 綁定）。擋操 beat 要保「不顧儀態用身體擋＋笑問條裙」（CDL:143）原形，否則「非英雄姿態」全作 payoff 失錨 | STRAIN |
| **P-A12** 美夜子靈魂錨點 | FM:28（E-01/[NC]）；CDL:155、CDL:429（CDL-280） | FM:28／FM:117 寫「地下據點月下場景（CDL-274 Step 1）」；**但 III:184 已將 Step 1 移去 I4（III:278–283）** → FM 本身 stale | Demo O3（非計劃保護＋功利掩蓋＋咬唇）係 P-A12 嘅 Act I 載體，方向 OK。風險：D-13 暖結尾／CDL-408 令保護變得太顯 → 見 W-6。另 FM:28 payoff 位要跟 III:184 改 | OK（demo）／STRAIN（FM stale） |
| **P-A23** 緋潮日落偽裝 | FM:39（E-02/E-04 背景）；CDL:303（CDL-176 Q32：E-02 Lv.1「可解讀為霓虹燈折射／工廠廢氣」；E-04 Lv.2「日落晚霞異常深邃」） | FM:104（HIGH）；Act III/IV 揭露；LRS:82「Act II 零 touchpoint」 | ①E-02 係 Act I–II 僅有兩粒種之一，demo 唔可以靜靜刪（O9 有列，OK）；②MP3 地點：夜區／範圍外 → 霓虹讀法自然，但「日落偽裝」（FM:39）冇日落；日區日間（BS:740 SR）→ 要靠黃昏先有日落讀法；③暖結尾如用黃昏暖光，會將 Lv.1 同 E-04 Lv.2「日落」撞名，遞增對比（Lv.1 極難察覺 → Lv.2 異常深邃）會模糊。CDL-176 編號重複（SRC1-T11）亦要處理 | STRAIN |

---

## 7. 其他由 DERIVATION 義務牽出嘅跨幕位（簡列）

- **O14 奪舍示範（MP2）**：LRS:78 指奪舍示範係「三位一體首個伏筆」→ Act II E-07b 三位一體辯論（II:194–198）；LRS:81 屍骸化機制早期線索已經「薄弱」。Demo 唔帶就要標 REVALIDATE，唔可以當冇咗。另 TL:138 仍係舊「老婆婆借小孩傳話」版（CDL-172/177 已改），stale。→ STRAIN。
- **O13 操順手救路人**：S:256、S:263 → Phase D 主動幫人＋桐生健目擊（CDL-322/323）。Demo 必須保「表面否認、內心動搖」，否則 Phase D 由被動到主動嘅弧冇起點。→ OK（DERIVATION 有列）。
- **P2 熱可可 → Act II 可樂失味**：Act II 只見 II:336「遞沒氣可樂」（CDL-191），可樂失味本身喺 E-03（CDL:125）；demo 熱可可 setup 方向無撞。→ OK。
- **紗夜實體出場（X3 OPTIONAL）**：FM:41 P-A25 植入＝「操日常[NC]」，係 E-09a／Act III Double-hit 前置（CRITICAL，FM:98/106）。Demo 唔取可以，但 Act I 其他位一定要有，否則 P-A25 兩段 payoff 冇種。→ REVALIDATE（非 demo 責任，但 promotion 時要核）。

---

## 8. Promotion 時要 REVALIDATE 嘅檔案清單

| 檔案 | 位置 | 原因 |
|---|---|---|
| canon/_working/CANON_DECISION_LOG.md | CDL-233（:369）；CDL-141（:254 四人分工、可選任務、虛榮洩露尾段）；CDL-139（:252）；CDL-224/225（:359/:360 E-02 導致四人協議、E-04 總部被襲 stale）；CDL-346（:70 操鏡像第一步）；CDL-176 編號重複（:301/:303） | 牙 Stage 改編、三人基地、首戰定義、鏡像第一步保護 |
| canon/_working/story_construction/ACT_II_OUTLINE.md | :192（Stage 1 首發＋誤導）；:285 vs :371（Stage 2a 位置）；:287（鏡像第一步）；:191（E-07b 依賴來源寫明 E-03）；:382–384（基地 E-09 存在＋失去載體）；:802（P-D02 起點）；:813（P-A04 依賴 2.5） | 牙鏈、E-07b、基地 |
| canon/_working/story_construction/ACT_III_OUTLINE.md | :97、:249（Stage 3「全貌」包括 Act I 舊牙？）；:107（紫音回歸重量，如採三人基地讀法 b）；:184/:278–283（P-A12 位置，FM 要跟）；:702–720（Act IV 草稿：強制透明主題演講依賴 E-03） | 牙、紫音、Act IV 主題記憶根據 |
| canon/_working/CROSS_ACT_FORESHADOW_MANIFEST.md | :20/:96（P-A04）；:23/:91（P-A07）；:28/:117（P-A12 payoff stale）；:39/:104（P-A23）；:41/:98/:106（P-A25）；新增 Act I 操牙 plant row | plant 表同步 |
| canon/03_characters/ayakomoji_misao.md | :116、:417（首戰定義＋斷 anchor）；:242–246（Act I 段落加隱藏裂縫）；:290–300（Body Horror 四段式）；:376–377、:385–386（量尺／視覺表 Act I「不可見」＋「據點事件」stale） | 牙、首戰、stale 據點事件 |
| canon/04_timeline_canon.md | :136–141（基地喺首次連結前；首次連結四人）；:138（奪舍舊版） | 同 Outline 次序撞 |
| canon/_working/story_construction/ACT_I_OUTLINE.md／ACT_I_BEAT_SHEET.md | 牙（全無）；2.5／2.6 次序；0d／天台 parent patch（DERIVATION PC2/PC3/PC4/PC14 已列） | demo 回寫上層 |
| canon/_working/story_construction/INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md | :71（操 Act I coping 代價 BK） | 牙填格 |
| canon/_working/story_construction/LATE_REVEAL_SEEDING_AUDIT.md | :78、:81、:82 | 奪舍／緋潮種子存活狀態 |
| canon/01_world_rules_and_costs.md | :223–229（範圍內外代價）；:1055（鏡像法則） | 只核唔改：E-02 地點同牙因果、鏡像第一步保護 |

---

## 9. 唔喺本角色範圍、交返 orchestrator 嘅判斷位（唔係作者問題，屬 MATERIAL）

- 三人基地採讀法 (a)「2.6 前移」定 (b)「紫音已入隊但缺席」——兩者斷嘅嘢唔同（§4 E-1）。
- Act I 牙係咪「唔縫、唔照鏡」——保 CDL-231/232/346 最便宜嘅做法（§1 條件 a/b）；要配 Act II Stage 1 改寫，屬上層 parent patch。
- MP1 刪走 E-07b 考慮之後，L-6（S:417 紫音先穿透操面具）變成揀「連結喺操到場前」嘅主要跨幕證據。

SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR
