# INTEGRATION RULES R1：由例子歸納嘅設計規則——第一輪投票整合（2026-11-10 HKT）

> **輸入**：14 份 `research/<dir>/RULES_FROM_EXAMPLES_R1_VOTE_20261110.md`（逐份解析；表由 `rules_r1_integration/parse_votes.py` → `parsed_votes.json` 直接由檔案產生，冇用轉述清單）。草稿：`RULES_FROM_EXAMPLES_DRAFT_R1_20261110.md`。
> **輸出**：`RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md`、`BRIEF_RULES_R2_20261110.md`、`MSG_RULES_R2_20261110.txt`。
> **冇改**：v7 草稿、REF v7、R1 草稿、任何投票檔、官方原圖。冇 git。冇 Haruka 設計。
> **整合者自己重產**：performance_motion IoU（`rules_r1_integration/rerun_pm/`，輸出寫喺整合資料夾，冇覆寫 PM 檔）、flow_structure EX05 軀幹帶 L*（獨立重寫 `verify_fs_ex05_torso.py`）、Animate Times 頁面日期、9 個新一手來源嘅原文句（curl，見 §8）。

## 1. 投票表（14 方向 × 13 條）

| 方向 | G01 | G02 | G03 | G04 | G05 | G06 | G07 | G08 | G09 | G10 | G11 | G12 | G13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AM | ACC | ACC | ACC | **AWE** | **AWE** | **AWE** | ACC | **AWE** | ACC | ACC | **AWE** | **AWE** | **AWE** |
| CV | ACC | ACC | ACC | **AWE** | **AWE** | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC |
| CO | **AWE** | ACC | **AWE** | ACC | ACC | **AWE** | **AWE** | **AWE** | **AWE** | ACC | **AWE** | ACC | ACC |
| CF | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC |
| FS | ACC | **AWE** | ACC | **AWE** | **AWE** | **AWE** | **AWE** | ACC | ACC | **AWE** | **AWE** | **AWE** | ACC |
| HH | ACC | ACC | **AWE** | ACC | **AWE** | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | **AWE** |
| IDC | **AWE** | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | ACC | **AWE** |
| MW | ACC | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC | ACC | **AWE** | **AWE** | ACC |
| OR | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC | ACC | ACC | ACC | **AWE** | ACC |
| PM | **AWE** | ACC | **AWE** | ACC | **AWE** | **AWE** | **AWE** | ACC | ACC | **AWE** | **AWE** | **AWE** | **AWE** |
| PC | ACC | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC | ACC | ACC | ACC | ACC |
| PSY | ACC | ACC | **AWE** | ACC | **AWE** | ACC | ACC | ACC | **AWE** | ACC | **AWE** | ACC | **AWE** |
| SC | **AWE** | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC | ACC | **AWE** | **AWE** | **AWE** |
| TVS | ACC | ACC | ACC | ACC | ACC | **AWE** | ACC | ACC | ACC | ACC | ACC | ACC | ACC |
| **ACC／AWE／REJ** | 10／4／0 | 13／1／0 | 10／4／0 | 11／3／0 | 7／7／0 | 6／8／0 | 11／3／0 | 12／2／0 | 12／2／0 | 10／4／0 | 7／7／0 | 8／6／0 | 8／6／0 |

- 合計 182 票：**ACCEPT 125、ACCEPT_WITH_EDITS 57、REJECT 0**（逐檔核實，同轉述一致）。
- 方向縮寫：AM audience_market、CV color_value、CO commercial、CF construction_fashion、FS flow_structure、HH head_hair、IDC identity_canon、MW motif_world、OR originality、PM performance_motion、PC production_critic、PSY psychology、SC silhouette_cast、TVS tv_simplify。

## 2. 合併測試矩陣（13 條 × 14 例；14 方向）

- 每格：粗體＝合併判定；後面係 14 方向計數。S＝支持（含 CO／OR 嘅「S*」＝支持但要改句）；P＝head_hair 用嘅 PARTLY；C＝反例（只有 CO G08×EX04「C*」＝範圍反例）；NA＝唔適用；NT＝未測。
- 判定：有 C 就標 S/C；測過（S＋P＋C）≥ NA 就標 S；NA 多過測過就標 NA；全部未測標 NT。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G01 | **S** 14S·0NA | **NA** 0S·14NA | **NA** 3S·10NA·1NT | **S** 14S·0NA | **S** 14S·0NA | **S** 11S·3NA | **NA** 0S·14NA | **S** 11S·2NA·1NT | **NA** 5S·9NA | **S** 12S·1NA·1NT | **NA** 4S·10NA | **S** 14S·0NA | **NA** 5S·9NA | **NA** 0S·1P·13NA |
| G02 | **S** 10S·1P·0NA·3NT | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 6S·8NA | **NA** 5S·1P·8NA | **NA** 0S·14NA | **S** 14S·0NA | **NA** 2S·12NA | **NA** 1S·13NA | **NA** 2S·1P·11NA | **NA** 0S·14NA | **S** 14S·0NA | **S** 14S·0NA | **S** 8S·1P·5NA |
| G03 | **NA** 0S·14NA | **NA** 0S·14NA | **S** 14S·0NA | **NA** 0S·14NA | **S** 14S·0NA | **S** 9S·5NA | **NA** 0S·14NA | **NA** 2S·9NA·3NT | **S** 14S·0NA | **S** 14S·0NA | **S** 12S·1NA·1NT | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 0S·14NA |
| G04 | **S** 10S·1P·1NA·2NT | **S** 14S·0NA | **S** 14S·0NA | **NA** 2S·1P·7NA·4NT | **S** 6S·1P·2NA·5NT | **S** 14S·0NA | **NA** 5S·1P·8NA | **NA** 3S·7NA·4NT | **S** 14S·0NA | **NA** 3S·1P·8NA·2NT | **S** 9S·3NA·2NT | **S** 14S·0NA | **NA** 0S·13NA·1NT | **S** 9S·1P·1NA·3NT |
| G05 | **S** 14S·0NA | **NA** 5S·1P·7NA·1NT | **NA** 0S·14NA | **S** 14S·0NA | **S** 10S·1P·0NA·3NT | **NA** 0S·14NA | **S** 9S·1P·3NA·1NT | **NA** 0S·14NA | **NA** 5S·9NA | **NA** 1S·13NA | **NA** 0S·14NA | **S** 14S·0NA | **S** 11S·1P·2NA | **S** 14S·0NA |
| G06 | **S** 14S·0NA | **S** 14S·0NA | **NA** 0S·14NA | **S** 14S·0NA | **S** 12S·0NA·2NT | **NA** 0S·14NA | **S** 5S·1P·4NA·4NT | **NA** 0S·14NA | **NA** 1S·12NA·1NT | **NA** 0S·14NA | **NA** 0S·1P·12NA·1NT | **S** 14S·0NA | **S** 13S·1NA | **S** 14S·0NA |
| G07 | **S** 14S·0NA | **S** 11S·1NA·2NT | **S** 13S·0NA·1NT | **S** 14S·0NA | **S** 12S·1P·0NA·1NT | **S** 14S·0NA | **S** 14S·0NA | **NA** 6S·8NA | **S** 14S·0NA | **S** 14S·0NA | **S** 14S·0NA | **S** 14S·0NA | **S** 14S·0NA | **S** 14S·0NA |
| G08 | **S** 5S·3NA·6NT | **NA** 3S·6NA·5NT | **S** 14S·0NA | **S/C** 1S·1P·1C·2NA·9NT | **NA** 3S·5NA·6NT | **S** 6S·3NA·5NT | **S** 9S·5NA | **S** 13S·1NA | **S** 12S·0NA·2NT | **S** 7S·1P·2NA·4NT | **S** 14S·0NA | **S** 14S·0NA | **NA** 0S·7NA·7NT | **S** 4S·1P·3NA·6NT |
| G09 | **S** 14S·0NA | **NA** 0S·13NA·1NT | **NA** 0S·14NA | **S** 13S·0NA·1NT | **S** 14S·0NA | **NA** 0S·14NA | **NA** 1S·10NA·3NT | **NA** 0S·14NA | **NA** 1S·13NA | **NA** 3S·11NA | **S** 14S·0NA | **S** 14S·0NA | **NA** 0S·14NA | **S** 13S·0NA·1NT |
| G10 | **NA** 0S·6NA·8NT | **S** 14S·0NA | **NA** 0S·12NA·2NT | **NA** 1S·1P·3NA·9NT | **NA** 1S·8NA·5NT | **S** 10S·1P·0NA·3NT | **S** 2S·1P·3NA·8NT | **S** 13S·1NA | **NA** 0S·1P·11NA·2NT | **S** 13S·0NA·1NT | **NA** 2S·11NA·1NT | **NA** 2S·1P·6NA·5NT | **S** 8S·3NA·3NT | **NA** 1S·1P·8NA·4NT |
| G11 | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 0S·13NA·1NT | **NA** 0S·14NA | **S** 13S·1P·0NA | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 0S·13NA·1NT | **S** 14S·0NA | **NA** 0S·13NA·1NT | **NA** 0S·14NA | **NA** 0S·14NA | **NA** 0S·14NA |
| G12 | **NA** 1S·11NA·2NT | **NA** 2S·10NA·2NT | **NA** 0S·1P·11NA·2NT | **NA** 2S·1P·11NA | **NA** 0S·12NA·2NT | **S** 11S·0NA·3NT | **NA** 1S·12NA·1NT | **NA** 0S·10NA·4NT | **NA** 0S·1P·11NA·2NT | **NA** 0S·12NA·2NT | **NA** 0S·12NA·2NT | **NA** 1S·1P·11NA·1NT | **NA** 3S·1P·7NA·3NT | **S** 12S·1P·0NA·1NT |
| G13 | **S** 12S·0NA·2NT | **S** 11S·0NA·3NT | **S** 14S·0NA | **S** 12S·0NA·2NT | **S** 12S·0NA·2NT | **S** 12S·0NA·2NT | **S** 13S·0NA·1NT | **S** 11S·1NA·2NT | **S** 14S·0NA | **S** 14S·0NA | **S** 12S·0NA·2NT | **S** 13S·0NA·1NT | **S** 14S·0NA | **S** 12S·0NA·2NT |

- **合併判定為 S 嘅例數**：G01 7 ／ G02 5 ／ G03 6 ／ G04 9 ／ G05 7 ／ G06 8 ／ G07 13 ／ G08 11 ／ G09 6 ／ G10 6 ／ G11 2 ／ G12 2 ／ G13 14。
- 全矩陣只得 **1 格 C**（CO：G08 × EX04，雙丸子同髮同色，靠外輪對背景讀到——收窄 G08，見 §3）。冇方向用圖像推翻任何一條。
- G11、G12 各只得 2 例 S（G11：EX05、EX10；G12：EX06、EX14）——維持 provisional（見 §3）。

## 3. ACCEPT_WITH_EDITS 逐條處理（57／57 已處理）

處理原則：相容就合併；衝突時揀圖像＋一手來源支持較強嗰邊；每條加「點驗通道（含視角）」欄（AM、CO、SC、FS 四方向一致要求）。

| 規則 | AWE 方向 | 修訂點 | 處理 |
|---|---|---|---|
| G01 | CO、IDC、PM、SC | CO：日常＝「該場合現實可穿尺度」，禮裝場合本身闊唔算違規（EX06 0.606）；特殊載體唔一定加大（EX09 リコリス）。IDC：日常要可信、唔舞台化（收 IDC N2）。PM：載體差要喺中性／配對姿勢下成立。SC：輪廓分寬度／面積／實心度 | **全部合併**，四點互相相容。CO 嘅 EX09 新量（bbox 闊／H）含姿勢，只作「冇加大」方向，唔引數。 |
| G02 | FS | 改構要寫新根部→自由段→收尾，喺存活視角驗 | **採納**。EX13 有圖（尾尖 0.68–0.69、膝環 0.73–0.74）；EX12 巨結根喺頭側、EX07 項鍊掛領口屬目視；EX01 結晶根部 NT。另併入 MW G-MW-1（見 §6）。 |
| G03 | CO、HH、PM、PSY | CO：「一個主差欄＋並行通道」，寫每欄負責通道；EX10 其實係穿法＋髮兩欄。HH：衣物剪影同頭髮剪影分欄。PM：宣傳立繪姿勢唔算一欄。PSY：差欄係識別，唔診斷性格 | **全部合併**。CO 嘅「EX10 兩欄」同 v7 EX10 塊（全身穿法差、頂錨方框靠髮色／領口）一致，採納。再併入 IDC N1＋PSY P01「先寫規定欄同邊個揀」（§6）。 |
| G04 | AM、CV、FS | AM／CV：寫負責通道；CV：唔好用最大 k-means 合併塊冒稱簽名色（EX01 戰鬥最大塊近白）；FS：句子補完 | **全部合併**。CV「簽名色≠最大面積」業內一手 NOT_FOUND，照寫「靠圖像成立」。併入 CV P1 灰階條件句（§6）。 |
| G05 | AM、CV、FS、HH、OR、PM、PSY | 錨類型擴闊：形／色相／明度（FS、PM：EX02 招牌長髮改短，穩嘅係近黑主面積）／頭飾或穿法（HH）／寫明嘅穩定組合（OR：EX14 三色塊）；要寫驗錨通道（AM）；錨喺新載體底色仍要有對比（CV：EX01 白髮對白戰鬥服）；錨≠真我（PSY） | **全部合併**。PM 引 EX02 設計師一手（島崎「ヘアスタイルをガラっと変えました」，整合者 curl 核到）＝錨唔一定係髮，有文本＋圖支持，採納。OR「組合」同原稿「揀一個」衝突：揀 OR，因為 EX14 支持例本身係組合；但要寫「最少保留邊幾件」。 |
| G06 | AM、CO、FS、MW、PM、PC、SC、TVS | 唔好將「重分配」寫成唯一規範（TVS 四路徑：重分配／加件／特殊載體轉大色塊（EX05）／減法）；面積可以升（CO：EX12）；減法係選項、有反例來源（FS：足立「なるべく線を減らさず」；部分反例 大貫）；減法有新文本第二例（CO、FS：渡辺明夫、高藤、本庄）但圖像仍單例（MW、SC）；姿勢同持物入表（PM）；減法要保固定點（PC）；驗收用官方縮圖（AM） | **全部合併成四路徑版**。衝突只有「減法係咪仍 SINGLE_EXAMPLE」：圖像只有 EX14（全部方向同意），文本已有 3 個 A 級第二例（整合者 curl 核到渡辺、高藤、本庄原句）同 1 個 A 級反例（足立，核到）→ 標「圖像單例、文本多例、有反例：選項，唔係通則」。併入 TVS G14「接手件」（§6）。 |
| G07 | CO、FS、PM | CO：頭肩方框要以頭為錨＋人手 QC（EX05 怪盗 4／7 bbox 頂係武器／披巾）；FS：加視角維（正／側／背／俯）；PM：表演件都要指定通道（EX01 掩面只喺頭像見） | **全部合併**。整合者目視 CO `EX05_everyday_vs_thief_sheet.png` 確認 anne／yusuke／makoto／haru 頭肩框唔係頭。併入 AM G14「官方已發佈縮圖係第一類通道」（§6）。 |
| G08 | AM、CO | AM：喺宣稱存活嘅通道目視；CO：同色件（EX04 丸子同髮同色）靠外輪對背景（C*）；同明度／色組成唔同款式喺 64 會合（EX05 hero vs makoto） | **全部合併**；G08 改為「對相鄰底，或者（同色件）外輪對背景」。CO 嘅 TVD 0.004 係 CO 新量，整合者未重產，照標。 |
| G09 | CO、PSY | CO：方向兩邊都有（EX01 更亮、EX12 持平、EX05 怪盗 6／7 較暗）；PSY：唔准「更亮＝偽裝／真我」；照明≠意圖（EX07） | **全部合併**；收 PSY P02 做 G09 一部分（見 §6）。EX05「6／7 人日常比怪盗淺」CO 同 PSY 兩方向獨立量到同向，同 v7 EX05 塊「多數隊友日常反而比怪盗淺」一致；整合者未重產。 |
| G10 | CF、FS、HH、PM | CF：正面全身／填實 64 唔可以證開合、掛點、穿脫（EX02 填實 64 背窗 0.0）；FS：支撐分類（身體掛點／持物／浮游，EX04 浮遊刃 3 塊）；HH：髮束同頭飾掛點；PM：可動要用代表動作驗 | **全部合併**；再併入 PM P3「長垂件寫掛點、終點地標、動作清空」（§6）。 |
| G11 | AM、CO、FS、MW、PM、PSY、SC | **衝突**：CO、FS（＋IDC 矩陣）話 EX05 秀尽 blazer 扣實 vs 敞開係第二例；AM、MW、SC、PM 話 EX05 混色、唔算獨立第二例 | **裁決**：整合者目視 FS `G11_P5_shujin_torso_strip.png`：主人公扣實、竜司敞開露黃 T、杏敞開露白連帽衫——同一件秀尽 blazer，穿法差成立；獨立重寫腳本重產軀幹帶 L*<40 份額 0.964／0.4808／0.4414（FS 0.9663／0.4851／0.4366，差 ≤0.005）。量度係同一角色身上嘅局部色區份額，唔係跨姿勢全身 IoU，所以**唔違反 R4**；但敞開同時露出內層色，**穿法同內層色分唔開**。→ EX05 收為「穿法＋內層」第二例；「純掛法／純穿法」量度仍只得 EX10，G11 標 provisional（2 例，其中 1 例混內層色）。PSY「寫明邊個揀」、PM「穿法依賴媒介可動」都合併。 |
| G12 | AM、FS、MW、OR、PM、SC | FS：拆 (a) 可重畫資料（正背側、扣位、省略）同 (b) 表演範圍＋固定點；PM：(a) 有圖像第二例（EX02 正背設定、EX13 轉面、EX01 每載體平靜＋哭兩張）；(b) 第二例只係文本（FS：朝香栞）；AM／MW／OR／SC：維持 provisional | **採納拆分**。(a) 有圖（EX02、EX13、EX01），(b) 只有 EX06 文本＋朝香栞文本（整合者核到「ここまでの表情なら」）→ (b) **SINGLE_EXAMPLE（圖像 0）／provisional**。併入 PC P01「公開圖唔等於設定包」同 PM P1「中性姿＋代表動作姿」（§6）。 |
| G13 | AM、HH、IDC、PM、PSY、SC | 類型標籤加：衣物剪影／頭髮剪影／頭飾分欄（HH）；載體標籤（公開／日常／戰鬥，IDC）；負責通道（AM）；唔寫宣傳姿勢入識別句（PM）；DESIGN_CLAIM 唔係診斷（PSY）；唔用全身 IoU 做身份分（SC） | **全部合併**；再併入 OR G14「用組合寫、先同最近鄰並排」同 HH H1 頭飾分欄（§6）。 |

## 4. performance_motion 新 IoU 數同 R4

R4：姿勢、持物、鏡頭唔同嘅全身 IoU／寬高比只量外包絡差，唔當改稿幅度或身份分。整合者重跑 `analyze_rules_r1_pm.py --out rules_r1_integration/rerun_pm`（只讀官方圖；腳本 md5_sources 逐張 ok=True），七對 IoU **逐位重產**（0.9634、0.9698、0.7685、0.7698、0.8207、0.7079、0.4205），並目視疊圖。

| 數 | 對 | 判定 | 准用措辭 |
|---|---|---|---|
| 0.963／0.970 | EX01 同一載體、官方平靜 vs 哭（雙手掩面） | **准用**（同衫、同角色；呢個數本身就係「姿勢效應」量度，唔係改稿分） | 「同一套衫，官方平靜 vs 掩面哭姿，全身剪影 IoU 約 0.96–0.97：內收手勢幾乎唔改全身外包絡（身高 256 正規化、底對齊、±15% 水平搜尋）」→ 用喺 G07 表演件、G12(a)。 |
| 0.769／0.770 | EX01 私服 vs バトル，配對官方姿勢（平靜對平靜、哭對哭） | **准用，限外包絡差** | 「兩個載體喺配對官方姿勢下全身信封 IoU 約 0.77，兩對姿勢一致——載體外包絡差唔靠姿勢」；**唔准**寫成改稿幅度、身份分或「換咗 23%」。 |
| 0.821 | EX14 遊戲立繪含劍 vs 同圖 v2 人手剔劍（同姿勢） | **准用，限持物效應** | 「同一張圖單拎走把劍，全身信封 IoU 約 0.82，XOR 約 92% 落喺 0–60% 高度帶」→ 用喺 G14／G15（持物會主導信封）。剔劍遮罩係 tv_simplify v2 人手多邊形衍生，要連版本。 |
| 0.708 | EX14 遊戲剔劍 vs TV 資料卡 | **唔准用**（媒介＋姿勢＋切圖混淆） | 只可寫「混淆，唔量」。 |
| 0.42 | EX05 char_s vs char_s2 | **唔准用做載體幅度**（怪盗撲前動作） | 只可寫「載體同姿勢分唔開」；呢個正正係 G12(a) 要求「中性姿」嘅理由。 |

## 5. 其他重點新量核對

- **FS EX05 軀幹帶**：見 §3 G11，重產差 ≤0.005；准用，連「內層色混雜」限制。
- **FS 外包絡鏈（最闊 t、收尾 t）**：EX06 0.9375 vs 0.7625 等，FS 新量，整合者**未重產**；G14 只作 FS 定義下嘅示例，標「單方向新量」。
- **CO 通道 TVD（channel_sweep）**：CO 新量，整合者**未重產**；R2 只引方向性結論（EX03／EX09 頭肩差大過身體欄，EX06／EX11 相反）同目視結果，唔引 TVD 數。
- **TVS Canny／大色塊（EX01／EX04／EX05／EX12）**：TVS 新量，未重產；R2 只用 v7 有效數（EX12 加件、EX14 減法），EX05「特殊載體轉大色塊」標 TVS 單方向。

## 6. 缺漏規則提案：歸類同裁決

整合者對每類核咗所引證據（v7 有效數、自己重產數、或目視所引圖）。

| 類 | 提案 | 裁決 | 理由同證據 |
|---|---|---|---|
| A 剪影分層 | CF P01、SC G-SC1、FS「錨→擴張→收尾」 | **ADD → G14** | ≥2 例有效數：EX04 全身 IoU 約 0.13 vs 頭部裁切 0.56；EX01 面積 1.01 vs 寬 1.20；EX10 面積大但 bbox 細；EX14 含劍寬高比 0.744 vs 剔劍 0.580（整合者重產 0.7443／0.5801）；EX09 全身 IoU 約 0.53、差約 88% 喺肢體。設計上要先決定主張落喺邊層（人體／衣物／頭髮頭飾／持物／姿勢）。FS 鏈做 G14 選用描述法（單方向新量）。 |
| B 持物＋頭部安全區 | PM P2、CO M1 | **ADD → G15** | EX14 剔劍 IoU 0.821、XOR 約 92% 喺 0–60% 帶（重產）；EX04 頭剪影被槍／刃翼穿過（v7）；EX05 怪盗 4／7 頭肩框唔係頭（整合者目視）；EX12 コーラル舉臂入框（CO 圖）。一手 TF2（weapons＋silhouette，CO／PM 核）。 |
| C 官方縮圖通道 | AM G14 | **MERGE → G07** | EX14 TV 一覽 176×246 見 3 尖；EX06 官方宣傳臉；EX13 Data Dragon 頭像 MAE 1.128——v7 有效數。屬 G07 通道清單一項，唔使另立。 |
| D 唔跨通道偷換 | AM G15 | **KEEP AS MEASUREMENT RULE**（v7-R5） | 係寫作／量度禁令，唔係設計動作。 |
| E 規定先於個人、邊個揀 | IDC N1、PSY P01 | **MERGE → G03**（第一步） | EX03、EX09、EX10、EX05 都係規定制服／制式；「邊個揀」靠一手文本（副島、いみぎむる、neco），圖只見關係。獨立成條會同 G03 重疊。 |
| F 日常可信 | IDC N2 | **MERGE → G01** | 同 IDC 自己 G01 AWE 一致；EX05、EX12、EX01。 |
| G 母題入結構 | MW G-MW-1 | **MERGE → G02** | EX07（ΔE00 0.74、64 px 三角消失）、EX01（格紋 64 消失、藍 0.026→0.162）、EX12、EX08——G02 已含「母題入層」；加「表面印紋係近讀層」句。 |
| H 組合＋最近鄰 | OR G14、CO M2 | **MERGE → G13（組合寫法）＋G08（同色組成會合）** | EX11 頭像兄弟髮 ΔE00 3–5、靠領口 0.39 vs 0.12；EX03；EX09。CO M2（hero vs makoto TVD 0.004）未重產，只作 G08 示例。 |
| I 接手件 | TVS G14 | **MERGE → G06** | 同 FS G06 AWE「退後件由邊個大形接手」一致；EX01、EX04、EX12、EX14 有效數。 |
| J 頭飾分欄 | HH H1 | **MERGE → G13／G03（設計分欄）＋KEEP 遮罩部分為量度規則（v7-R3）** | EX14 冠、EX09 リボン（IoU 0.246 含リボン）、EX12 變身頭飾——設計上「頭飾」係獨立類型；遮罩分色屬量度。 |
| K 灰階明度構造 | CV P1 | **MERGE → G04（條件句）** | EX03、EX01、EX11（ΔL*≈60 vs ≈11）、EX09 有效數支持；但 v7 已定灰階預設關（POLICY）、唔准為灰階拆制服／壓暗——獨立成規則會將政策升級，所以只做 brief 要求時嘅條件句。 |
| L 診斷禁令 | PSY P02 | **MERGE → G09**（G09 擴成「明暗、色、穿法」） | EX11、EX05、EX01、EX12。 |
| M 設定包 | PC P01 | **MERGE → G12** | EX06、EX14、EX08。 |
| N 線／色區預算協議 | PC P02 | **KEEP AS MEASUREMENT RULE**（v7-R2／R5 協議）＋G06 一句「減線≠可重畫資料少」 | EX06 Canny 比值隨協議反轉（0.066 vs 0.086）、EX14 色區 46–47 vs 45。 |
| O 中性姿＋代表動作姿 | PM P1 | **MERGE → G12(a)** | EX01（每載體官方兩姿；0.963 vs 0.769 重產）、EX13 A-pose 轉面、EX05 反面（冇配對姿，0.42 分唔開）。 |
| P 長垂件掛點／終點地標 | PM P3、FS G02 | **MERGE → G10（＋G02 改構寫法）** | EX13 尾尖對膝環；EX02 ケープ根喺頸／胸；EX10 外套掛肘。 |

**REJECT：0**——冇提案缺圖像支持到要剔走；兩條（D、N）歸量度規則。

## 7. 勘誤：EX14 Animate Times 日期

- 整合者今輪（2026-11-10 晚，HKT）curl `https://www.animatetimes.com/news/details.php?id=1640588189`：頁面 `c-time-article` 顯示 **2022-01-08 18:00**（網站時間，即 HKT 2022-01-08 17:00），標題「冬アニメ『プリコネR』第2期 守屋竜史×上内健太インタビュー【連載第1回】」；p.2 含「王冠」同「赤の中にある線」原句。同 TVS、OR 投票檔一致。
- **勘誤**：EX14 訪談日期 **2022-01-08**（取代 v5／v7 附錄 B 嘅「01-05／01-08 未解」）。只記喺呢度同 R2 草稿；REF v8 再正式改，v7／REF v7 冇改。

## 8. 一手來源（只收方向核過、整合者今輪再 curl 核到原句嘅新來源）

| 來源 | URL | 級別 | 核到嘅句 | 用喺 |
|---|---|---|---|---|
| 渡辺明夫（グリザイア PT）Animate Times | https://www.animatetimes.com/news/details.php?id=1607054667 | A | 「線の数は減らして」「装備や武器の細かさはそのまま」「側面図や背面図」 | G06 減法文本第二例；G12(a) |
| 高藤（アークナイツ）秋葉原PLUS | https://www.akiba-plus.com/?p=126982 | A | 「色面の比率を変えない」 | G06 減法 |
| 本庄雷太（戦場のヴァルキュリア）官網 | https://www.valkyria-anime.com/special/interview/03-01.html | A | 「胸から上が一番表示される」「線が間引かれ」 | G06、G07、G15 |
| 足立慎吾（SAO）官網 | https://www.swordart-online.net/special/interview02.html | A-I／A | 「なるべく線を減らさず」 | G06 減法**反例** |
| 大貫健一 アニメ！アニメ！… eiga | https://anime.eiga.com/news/column/loop7/120854/ | A | 「線を減らす」（但盡量唔省略，FS 讀為部分反例） | G06 |
| 朝香栞 公式 | https://kizunanoallele.com/index.html@p=1115.html | A | 「ここまでの表情なら」 | G12(b) 文本第二例 |
| パラノマサイト Nintendo DREAM | https://www.ndw.jp/paranormasight-interview-1th/3/ | B（導演）／A（小林元句） | 「着こなしで差を出しました」 | G11 文本、G03 |
| 島崎（ベヨネッタ2）PlatinumGames 開発ブログ | https://www.platinumgames.co.jp/dev-bayonetta2/article/241 | A | 「トレードマークの一つでもあったヘアスタイルをガラっと変えました」 | G05 明度錨（EX02） |
| 守屋×上内 Animate Times | https://www.animatetimes.com/news/details.php?id=1640588189&p=2 | B | 「王冠」「赤の中にある線」；頁日期 2022-01-08 | G06、G12 |

- 其餘新來源（TF2 SIGGRAPH／NPAR 講稿、Riot Ask Riot Clarity、デスティニーチャイルド KKUEM、Chacott、enterstage、MHW 藤岡、Legend of Legacy 平尾、Overwatch BI／Polygon 等）只由單一方向列出，整合者**未再核**；R2 只喺標「單方向核」時引用，唔做主證。v7 REF 已有嘅來源照用。

## 9. 未核／未解

- CO channel_sweep TVD、FS 外包絡鏈、TVS 新 Canny／大色塊、CO／PSY EX05 L* 方向、CO EX09 bbox：方向新量，整合者未逐位重產（只目視圖或對照 v7 方向一致）。
- G11 純穿法仍單例；G12(b) 圖像 0 例；G06 減法圖像單例。
- 簽名主件後備、隱藏第二層：14 方向全部 NOT_FOUND（圖像）→ 維持作者政策。
- §9 衝突優先序、首讀氣場量化、寫實日常便服主例：仍冇例。
- 全部未人測：可見≠認得≠記得。

## 10. 檔案

- 本檔；`rules_r1_integration/`（`parse_votes.py`、`parsed_votes.json`、`tables.py`、`build_integration.py`、`integration_text.md`、`rerun_pm/`、`verify_fs_ex05_torso.py`／`.json`）
- `RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md`、`BRIEF_RULES_R2_20261110.md`、`MSG_RULES_R2_20261110.txt`
