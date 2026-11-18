# RULES FROM EXAMPLES — FINAL：由 14 個例子歸納嘅通用人物設計規則 G01–G15（2026-11-10 HKT）

> **由來**：R1 草稿＋R1 投票（125／57／0）＋R1 整合 → R2 草稿＋R2 投票（ACCEPT 155／ACCEPT_WITH_EDITS 13／REJECT 0）＋R2 整合（`INTEGRATION_RULES_R2_20261110.md`，五個衝突整合者圖像重驗）。
> **範圍**：設計規則 G01–G15。量度規則 R1–R5 喺 skill（v7／v8），呢度唔重複。作者政策另列 §3，唔係由例子歸納。
> **數字**：〔v7〕REF v7 §10 有效數；〔重產〕整合者重產（REF v8 §13 有定義）；〔方向新量〕單方向數，未重產。REF v7 §11 作廢數一律唔用。
> **冇改**：v7、REF v7、R1／R2 草稿、投票檔、官方圖。冇 git。冇 Haruka 設計。

## 0. 一頁總覽

| 規則 | 一句 | 狀態 |
|---|---|---|
| G01 | 先定用途同載體，大輪廓開新載體，唔好將日常服加大 | CONFIRMED（7） |
| G02 | 要易認就改主讀構造；印紋屬近讀層 | CONFIRMED（4） |
| G03 | 先寫規定欄＋邊個揀；衣／髮／頭飾三欄；一個主差欄 | CONFIRMED（5） |
| G04 | 簽名色寫面積、位置、用途、通道；唔等於最大面積 | CONFIRMED（5） |
| G05 | 跨形態寫錨，錨喺新底色仍要有對比 | CONFIRMED（5） |
| G06 | 換載體四條路；寫接手件同固定點；減法只係選項 | CONFIRMED；減法圖像單例 |
| G07 | 每件識別件指定通道＋視角；頭肩框以人手頭位為錨 | CONFIRMED（13） |
| G08 | 識別件對相鄰底要有對比；同色件靠外輪 | CONFIRMED（11） |
| G09 | 明暗／色／穿法冇公式；照明≠意圖；唔做診斷 | CONFIRMED（6） |
| G10 | 先定根部、支撐、掛點、開合、可動，再加裝飾 | CONFIRMED（6） |
| G11 | 穿法可以做日常主識別 | **PROVISIONAL**（2，1 混內層色） |
| G12 | (a) 可重畫資料包；(b) 表演範圍＋固定點 | (a) CONFIRMED；(b) 固定點 1 圖像例；表演範圍 **PROVISIONAL** |
| G13 | 每個主要角色寫識別句 | CONFIRMED（14） |
| G14 | 剪影分層寫（人體／衣物／頭髮／頭飾／持物／姿勢＋剔非角色層）；全身外包絡唔係身份 | CONFIRMED（14 例測，0 反例） |
| G15 | 持物／舉手／飄動件：A 可以主導外包絡；B 可以佔 bbox 頂或入頭框——分開驗；頭飾算頭 | A、B 各 CONFIRMED，各有 1 範圍反例；各 <5 強例 |

## 1. 規則

> **點讀**：每條有：**規則**／**用途閘門**（幾時用、幾時唔用）／**點驗通道＋視角**／**支持例＋數**／**圖像證據**／**反例、反來源、限制**／**一手來源**／**狀態**。數字：〔v7〕＝v7 例塊有效數（REF v7 §10）；〔重產〕＝整合者重產（REF v8 §13）；〔方向新量〕＝單方向新量，整合者未重產，只作方向。路徑以 `/workspace/haruka/` 為根。**狀態括號例數**＝R1／R2 投票矩陣多數方向標 S 嘅例數；正文只列代表例，唔係全部。
> **通用界線**：(1) R4——跨姿勢／跨持物／跨鏡頭嘅全身 IoU、寬高比只量外包絡差，唔係改稿幅度，亦唔係身份分。(2) 識別件係辨認線索，唔係性格／創傷診斷；圖像只見設計關係，唔見意圖。(3) 可見≠認得≠記得；全部未人測。(4) 64 px 主張照 v7-R5 寫通道、彩色定填實、裁切、定義、重採樣。

### G01｜先定用途同載體，再定輪廓大細
- **規則**：先答「喺邊、俾邊個睇、做緊乜」。需要舞台／戰鬥級大輪廓，就開另一個載體（戰鬥服、變身、怪盗、舞台衣装），唔好將日常服加大。日常要可信、唔舞台化；「日常尺度」＝該場合現實可穿嘅尺度——禮裝場合本身闊唔算違規（EX06 最大全幅約 0.606 H〔v7〕；唔係寬高比）。職業規定制服同特殊場合載體都**唔必然**加大（EX09 リコリス係職業規定制服，屬 G03 規定欄，唔係舞台／戰鬥特殊載體）。
- **用途閘門**：有日常＋特殊場合嘅角色。唔用：單一戰鬥載體角色（EX13，閘門變「幻想錨」）。
- **點驗通道＋視角**：全身 h64 彩色＋填實；正面；載體差要喺中性或配對姿勢下成立（G12(a)）。寬度／面積／實心度分開寫（G14）。
- **支持例**：EX01（面積約 1.01、寬約 1.20〔v7〕）、EX04（寬高比 0.29 vs 0.85〔v7〕）、EX05、EX08、EX12、EX10、EX06。
- **圖像證據**：`research/commercial/img_examples_20261110/derived/01_side_by_side_standing_neutral.png`；`research/identity_canon/rules_r1_img/EX01_EX04_EX05_EX12_g01_carriers_h64.png`。
- **限制**：冇寫實日常便服主例；「先用途後輪廓」嘅次序靠文本，圖只見結果。
- **狀態**：CONFIRMED（7 例）。

### G02｜要更易認，就改主讀構造——唔好淨係放大徽章
- **規則**：揀一件已有元素，改佢嘅結構、掛點、長度或尺度入遠讀大形；寫明新根部 → 自由段 → 收尾，喺改構存活嘅視角驗。**母題入結構、裁剪、大色塊或大可拆件；表面印紋／紋理係近讀層，唔負責遠讀。**
- **用途閘門**：易混、需要遠讀。唔用：近讀層主張。
- **點驗通道＋視角**：改構存活嘅視角（EX13＝側面全身 64）；移走圖案後主件仍指得出。
- **支持例**：EX13（尾尖約 0.68–0.69 H、膝環約 0.73–0.74 H；頭像 MAE 1.128〔v7〕）、EX07（三角面印 64 px 消失；同項鍊 ΔE00 約 0.74〔v7〕）、EX12（頭飾 1.76% → 8.87%〔v7〕）、EX01（私服格紋 64 不成遠讀件；藍 0.026→0.162〔v7〕）。
- **圖像證據**：`research/originality/img_examples_20261110/analysis_v2/board_main_asu_vs_old.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/I4_integration_check/EX13_frame0_asu_side_tip_vs_knee.png`；`research/motif_world/rules_r1_img/EX07/02_2016_fullframe_h64_nearest4x_boxes.png`。
- **限制**：EX13 同時改比例／VFX；EX07 層同可拆只有文本。
- **狀態**：CONFIRMED（4 例）。

### G03｜先寫規定欄同邊個揀，再揀一個主差欄（＋並行通道）
- **規則**：
  1. 先寫**規定欄**：邊件係組織／世界規定、**邊個揀**（組織、角色本人、設計者）。
  2. 保留共享文法，將個人差集中喺**一個主差欄**；需要時加**並行通道**；每欄寫明負責通道。
  3. **衣物剪影、頭髮剪影、頭飾分三欄寫**——冠、リボン、夾、結、帽唔好併入髮或衣。宣傳立繪姿勢唔算一欄。
  4. 差欄係辨認線索，唔係性格診斷。
- **用途閘門**：規定制服、團隊、同職角色。唔用：無規定嘅自由便服 cast（未有例）；戰鬥載體可改用輪廓分人（EX05 怪盗）。
- **點驗通道＋視角**：最似隊友並排；全身 h64 正面＋頭肩方框（以頭為錨）各驗一次。
- **支持例**：EX03（制服 ΔE00 約 0.1、髮約 37〔v7〕；ユズ帽＝頭飾層，另一欄）、EX09（下衣物 IoU 約 0.74——站姿未配平，連 v7 註「剔舉拳框後 0.80→0.84」；髮 IoU 0.246 含リボン〔v7〕；紅 vs 紺並行）、EX10（主差欄＝穿法；頭肩靠髮色／領口＝並行）、EX05（日常剪影 IoU 0.55，含姿勢〔v7〕）、EX11（髮／衣明暗）。
- **圖像證據**：`research/color_value/img_examples_20261110/out/01_side_by_side_h800.png`；`research/head_hair/rules_r2_img/EX03_g14_layers_yuzu.png`（頭飾層分板）；`research/head_hair/img_examples_20261110/out_cafe_02_silhouettes_overlays.png`。
- **限制**：「邊個揀」圖像見唔到，只靠文本（REF v7：副島、いみぎむる、neco）。
- **狀態**：CONFIRMED（5 例）。

### G04｜簽名色寫面積、位置、用途、通道
- **規則**：寫明簽名色落喺邊、幾大、咩場合、喺邊個通道負責；**唔等於最大面積**，亦唔等於最大 k-means 合併塊。只有 brief 要求灰階／單色輸出時，先另開明度構造；唔准為灰階拆制服或壓暗（v7 POLICY）。
- **用途閘門**：長期角色。做唔到簽名色見作者政策（簽名主件後備）。
- **點驗通道＋視角**：全身 h64 彩色＋頭像；寫遮罩定義（R3）。
- **支持例**：EX03（クルミ髮約 10.5%＜制服；ユズ約 37.8%＞制服〔v7〕）、EX02（B2 青 32.3%，主面積仍近黑〔v7〕）、EX09、EX12（紫系色相家族）、EX06。
- **圖像證據**：`research/color_value/img_examples_20261110/out/09_color_vs_gray_64_nnx6.png`；`research/color_value/rules_r1_img/G04_G08_G09_evidence_board.png`。
- **限制**：「簽名色≠最大面積」業內一手 NOT_FOUND，靠圖像；面積％只對該張構圖。
- **狀態**：CONFIRMED（5 例）。

### G05｜跨形態留錨；錨喺新底色仍要有對比
- **規則**：換載體時寫明**錨**：類型（形／色相家族／明度／頭飾或穿法／寫明嘅組合）＋負責通道。組合錨寫「最少保留邊幾件」。錨喺新載體底色上仍要有對比。錨係辨認線索，唔等於「真我」。頭部外輪廓係選項，唔係必須。
- **用途閘門**：變身、戰鬥形態、媒介轉譯、續作改版。
- **點驗通道＋視角**：形錨＝以頭為錨嘅頭部彩色裁切 64；色／明度錨＝全身 h64 彩色；組合錨＝官方縮圖或全身 h64；視角同原載體一致。
- **支持例**：EX01（白長髮兩形態主體積；白髮對白戰鬥服對比細，要驗）、EX04（全身 IoU 約 0.13 vs 頭部裁切 0.56〔v7〕；頭剪影被槍穿過，見 G15）、EX12（頭區 IoU 約 0.43；錨＝紫系色相家族〔v7〕）、EX14（橙髮＋白裙＋藍上身組合）、EX02（明度錨：招牌髮型改咗，近黑主面積留）。
- **圖像證據**：`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`；`research/tv_simplify/img_examples_20261110/analysis/comparison_sheet.png`；`research/flow_structure/img_examples_20261110/sheet_compare_2x2.png`。
- **一手來源**：島崎（PlatinumGames）https://www.platinumgames.co.jp/dev-bayonetta2/article/241 （「トレードマークの一つでもあったヘアスタイルをガラっと変えました」；整合者＋PSY 核到）。
- **限制**：「頭骨不變」圖像證唔到。
- **狀態**：CONFIRMED（5 例）。

### G06｜換載體或轉媒介：四條路，寫明接手件同固定點
- **規則**：列出保留／轉譯／替換／退後，再揀路徑（可混用）：(1) 重分配；(2) 英雄載體加件；(3) 特殊載體轉大色塊；(4) 媒介減法。每件退後件寫**邊個大形接手**；寫明**保留嘅大塊同固定點**；姿勢同持物入表。減線唔等於可重畫資料少。**減法係選項，唔係通則。**
- **用途閘門**：變身、戰鬥形態、遊戲→動畫、續作。唔用：同載體細修（v7 §8）。
- **點驗通道＋視角**：寫外包絡定義（R2）；全身 h64 兩態；改編用官方已發佈縮圖。
- **支持例**：EX01（面積約 1.01、寬約 1.20；深色 0.347→0.243〔v7〕＝重分配）、EX04（寬高比 0.29→0.85〔v7〕＝加件）、EX12（巨結 8.87%〔v7〕＝加件）、EX05（特殊載體轉大色塊〔方向新量：TVS，未重產〕）、EX14（Canny 206.1→145.7、大色塊 25.6%→42.2%；色區約 46–47 vs 45〔v7〕＝減法）。
- **圖像證據**：`research/commercial/img_examples_20261110/derived/01_side_by_side_standing_neutral.png`；`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`；`research/tv_simplify/rules_r1_img/g06_carrier_density_sheet.png`。
- **反來源**：足立慎吾（SAO）「なるべく線を減らさず」https://www.swordart-online.net/special/interview02.html （整合者＋PC 核到）；大貫健一 https://anime.eiga.com/news/column/loop7/120854/ （減線但盡量唔省略，部分反例）。
- **一手來源**：渡辺明夫 https://www.animatetimes.com/news/details.php?id=1607054667 （「線の数は減らして」「装備や武器の細かさはそのまま」）；高藤 https://www.akiba-plus.com/?p=126982 （「色面の比率を変えない」）；本庄雷太 https://www.valkyria-anime.com/special/interview/03-01.html （「線が間引かれ」）；守屋×上内 https://www.animatetimes.com/news/details.php?id=1640588189&p=2 （2022-01-08；王冠）。
- **限制**：減法**圖像單例**（EX14；厚塗 vs 賽璐璐、持劍、切圖干擾）；文本 3 個第二例、1 個反例、1 個部分反例。
- **狀態**：CONFIRMED；減法分支＝選項（圖像單例）。

### G07｜每件識別件指定通道＋視角；頭肩框以人手頭位為錨
- **規則**：寫明每件識別件負責邊個通道（全身遠讀／頭肩方框／貼臉頭像／官方已發佈縮圖／近讀）同邊個視角（正／側／背／俯）。全身同頭像各要有一件分人件。**官方已發佈縮圖係第一類通道**，有就先睇。**頭肩方框一律以人手標嘅頭頂同頭中心做錨（頂同 x 中心都以頭定），再人手 QC**——唔以 bbox 頂或頂部前景重心做錨，因為 bbox 頂可以係持物、飄動衣件、舉高嘅手，甚至係側傾嘅頭髮。表演件（掩面、手勢）都要指定通道。
- **用途閘門**：有縮圖、頭像、商品、遠讀需要。唔用：純單張；舞台衣装只做全身（EX08）。
- **點驗通道＋視角**：v7-R5 四通道＋視角；近讀用 ≥128（R1）。
- **支持例**：EX06（貼臉紅 ≤0.03、藍 ≤0.02〔v7〕）、EX09（ΔL* 約 63–69；リボン 2–3 px vs 12 px〔v7〕）、EX12（小夾 2–3 px vs 10–12 px〔v7〕）、EX04（丸子 2–3 vs 13–20 px〔v7〕）、EX10（外套頂錨方框 0–0.5%〔v7〕）、EX13（側面全身；頭像 MAE 1.128〔v7〕）、EX14（TV 一覽 176×246 見 3 尖〔v7〕）、EX11（暗份額 0.39 vs 0.12〔v7〕）、EX01（掩面：同衫平靜 vs 哭全身 IoU 0.963／0.970〔重產〕＝全身睇唔到，要頭肩）、EX05（怪盗 4／7 bbox 頂唔係頭〔重產目視〕，見 G15）、EX14（以 bbox 中心定 x 嘅方框切半張臉〔重產〕）。
- **圖像證據**：`research/commercial/i5_img/EX06_crop_definitions_64.png`；`research/audience_market/rules_r1_img/G07_EX14_crop_channels.png`；`research/flow_structure/rules_r2_img/G15_headbox_qc.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/EX14_sword_vs_headbox.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_EX01_headsquare_128_neutral_vs_cry.png`。
- **一手來源**：本庄「胸から上が一番表示される」（URL 見 G06）。頭部安全區／以頭為錨裁切嘅業內規格：NOT_FOUND（CO、PM）——第 2 點靠圖像。
- **限制**：見到色點≠形狀已驗；人手頭位有讀數誤差（±0.02 H 級）。
- **狀態**：CONFIRMED（13 例）。

### G08｜識別件對相鄰底有對比；同色件靠外輪對背景
- **規則**：量識別件同**直接相鄰**底嘅明度／色差；差細會喺縮圖併入。同色件（同髮同色）就靠外輪對背景。同明度、同色組成、唔同款式喺 64 會合埋。喺宣稱存活嘅通道目視。
- **用途閘門**：細飾、點綴色、同色系隊友。唔用：有意融入嘅近讀層（EX07 ΔE00 約 0.74〔v7〕）。
- **點驗通道＋視角**：相鄰區 ΔL*／ΔE00（寫取樣）；全身 h64＋頭肩方框目視；同色件加外輪對背景。
- **支持例**：EX03（ユズ結 ΔE00 約 7〔v7〕）、EX12（ΔE76 11.3，全身 64 LOST〔v7〕）、EX11（ΔL*≈60 vs ≈11〔v7〕）、EX08（腰帶明度谷 6.5／10.0〔v7〕）、EX04（同色丸子靠外輪讀到＝範圍例）、EX01（白髮落白戰鬥服＝相反風險）。
- **圖像證據**：`research/psychology/img_examples_20261110/v2/analysis_thumbs_h64_nearest4x.png`；`research/silhouette_cast/rules_r2_img/EX04/i1_head_window_lance.png`；`research/color_value/rules_r1_img/G04_G08_G09_evidence_board.png`。
- **限制**：冇通用門檻值；淡色髮要人手遮罩（R3）。同色持物 ΔE 細唔代表裁切啱（G15）。
- **狀態**：CONFIRMED（11 例；1 個範圍例已收入）。

### G09｜明暗、色、穿法冇公式（兩個方向都冇）；照明≠意圖；識別件≠診斷
- **規則**：唔准用「暗＝創傷／強化」，亦唔准用相反公式「亮＝偽裝／真我」。形態升級可以更亮、持平或較暗。夜景／劇照明暗受照明主導，唔可以當設計意圖。色、穿法同明暗一樣唔做性格／創傷診斷；像素唔可以將意圖升級成證據。
- **用途閘門**：傷痛敘事、形態升級、公開 vs 私下。呢條禁公式，唔禁用明暗做識別。
- **點驗通道＋視角**：平均 L*／深色份額（寫遮罩）；只用官方立繪，唔用夜景劇照。
- **支持例**：EX01（深色 0.347→0.243＝更亮〔v7〕）、EX04（兩態高明度）、EX05（**隊友** 6／6 怪盗較暗，L* 差 −3.81 至 −22.92；**主人公**怪盗反而略亮 18.08→22.69〔重產；alpha>20 全身 mean L*，怪盗彩圖含 CODE NAME 字標〕）、EX11（白髮 80.2＝「希望の象徴」只係文本〔v7〕）、EX12（兩態 L* 約 70〔v7〕）、EX14（TV 唔變暗）。
- **圖像證據**：`research/psychology/rules_r1_img/g09_value_board.png`；`research/psychology/rules_r1_img/ex05_team_Lstar.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/EX05_team_Lstar.json`。
- **限制**：意圖只係文本；EX05 怪盗彩圖含字標同動作姿勢（干擾）。
- **狀態**：CONFIRMED（6 例）。

### G10｜先定根部、支撐類型、掛點、開合同可動，再加裝飾
- **規則**：大件先寫：(1) 支撐類型（身體掛點／持物／浮游）；(2) 根部、髮束同頭飾掛點；(3) 布料行為、開合扣、穿脫、動作干涉；(4) 長垂件另寫掛點、終點地標（例如「到膝」）同動作清空；(5) 可動要用代表動作驗；前後交換（前封後開）寫明。掛點跟使用動作揀。
- **用途閘門**：生產交付、舞台換裝、動畫／3D。概念輪次可標「未做構造」。
- **點驗通道＋視角**：背面＋側面，或近讀 ≥128。**正面全身或填實 64 證唔到**開合、掛點、穿脫——冇背／側／≥128 就標 (C) 未齊。
- **支持例**：EX02（前胸 0.04% vs 1.0%、背柱 3.6%→11.7%；填實 64 背窗消失〔v7〕）、EX08（腰列破洞 0〔v7〕；近讀扣件）、EX10（掛肘 3D 干涉，動畫先採用）、EX13（尾尖到膝環〔v7〕）、EX04（浮遊刃＝浮游支撐，目視）、EX06（冇背／側 → (C) 未齊）。
- **圖像證據**：`research/flow_structure/img_examples_20261110/sheet_compare_2x2.png`；`research/construction_fashion/img_examples_20261110/out/construction_callout_sheet.png`；`research/flow_structure/rules_r1_img/G10_parts_EX04_battle.png`。
- **一手來源**：渡辺「側面図や背面図」（URL 見 G06）；SWAV（pixivision 2022-03-11）https://www.pixivision.net/ja/a/7406 （「右手で銃を撃つなら、どこにホルスターを着けるといい？」；CO 引、整合者核到；只引掛點邏輯，唔引佢「人格」句做診斷）。
- **限制**：「先根部後開合」次序只係 EX02 文本；動態未驗。
- **狀態**：CONFIRMED（6 例）。

### G11｜穿法可以做日常主識別
- **規則**：唔改件衫，改點著（掛肘、扣實 vs 敞開、層次），喺日常尺度做出外包絡同明暗差；類型照實標「穿法」；寫明邊個揀。穿法同內層色分開寫。穿法係咪存活睇媒介可動（G10）。
- **用途閘門**：同衣物語彙變體、日常／制服 cast。唔用：要舞台級大廓形（→G01）。
- **點驗通道＋視角**：全身 h64 彩色＋軀幹帶／上半帶（寫帶定義）；正面；頭像要另有分人件。
- **支持例**：EX10（上半寬 427 vs 271；淺份額約 0.32 vs 0.02〔v7〕）；EX05（同一件秀尽 blazer，主人公扣實、竜司／杏敞開；軀幹帶 L*<40 份額 0.964／0.4808／0.4414〔重產〕——同一角色局部份額，R4 OK）。
- **圖像證據**：`research/flow_structure/rules_r1_img/G11_P5_shujin_torso_strip.png`；`research/identity_canon/rules_r1_img/EX05_EX10_g11_wear_style.png`；`research/performance_motion/img_examples_20261110/analysis_v2/01b_sheet_pair_color.png`。
- **一手來源**：パラノマサイト「着こなしで差を出しました」https://www.ndw.jp/paranormasight-interview-1th/3/ （B，導演）。
- **限制**：EX05 敞開同時露內層色，穿法同內層色分唔開；EX10 bbox 反而ミステル大（見 G14）；穿法件喺頭像幾乎消失（0–0.5%〔v7〕）。
- **狀態**：**PROVISIONAL**（2 例，其中 1 例混內層色；純穿法量度仍只得 EX10）。

### G12｜(a) 可重畫資料包；(b) 表演範圍＋固定點
- **(a) 可重畫資料包**：正／背／側、扣位、省略規則，連每個載體一張中性姿＋一張代表動作姿。公開宣傳圖唔等於設定包。
  - 支持例：EX02（官方正背設定）、EX01（每載體官方平靜＋哭兩張：同衫姿勢 IoU 0.963／0.970 vs 配對姿勢載體 0.769／0.770〔重產〕——有配對姿先分得開載體同姿勢）；旁證 EX13（官方成品轉面幀，唔係交付設定）。反面：EX05 冇配對姿，char_s vs char_s2 載體同姿勢分唔開（唔引數做幅度）。
- **(b) 表演範圍＋固定點**：表情、姿勢可動幅，連身份固定點（眉角、尖數、髮束數、頭飾形）。
  - **固定點半句有圖像例**：EX14 王冠尖遊戲 5 → 官方 TV 一覽縮圖 3（人手數尖；唔用全身 64 數尖，約 6–7 px 唔可靠〔v7〕）——尖數係要寫入設定嘅固定點。
  - **表演範圍半句圖像 0 例**：EX06（スカーレット表情集 21 種 vs ジュリアス眉 2 度）係設計師口述，公開像素量唔到（4.86°±2.3°〔v7〕）；文本第二例：朝香栞「ここまでの表情なら」。
- **用途閘門**：動畫、遊戲、多人管線。唔用：純單張、概念輪次（標「(C) 未開」）。
- **點驗通道＋視角**：(C) 清單；近讀／官方縮圖原生；唔用 64 判固定點失敗。
- **圖像證據**：`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_pose_vs_carrier_iou_overlays.png`；`research/production_critic/i4_img/EX14/01_anime_thumb_crown_native.png`；`research/tv_simplify/img_examples_20261110/analysis/crown_anime_thumb_x5nearest.png`；`research/production_critic/img_examples_20261110/out/11_brow_tight_roi_julius_face02-1.png`。
- **一手來源**：渡辺「側面図や背面図」（G06 URL）；朝香栞 https://kizunanoallele.com/index.html@p=1115.html ；守屋×上内（G06 URL，王冠尖數）。
- **狀態**：(a) CONFIRMED（2 例＋1 旁證）；(b) 固定點＝1 圖像例＋文本；表演範圍＝**PROVISIONAL**（圖像 0、文本 2）。

### G13｜識別句：邊件、喺邊、靠乜、邊個載體、邊個通道
- **規則**：每個主要角色寫一句識別句，包括：類型（衣物剪影／頭髮剪影／頭飾／大色塊／穿法／表面／換載體／組合）、載體標籤（公開／日常／戰鬥等）、負責通道；用組合寫，寫完同最近鄰並排驗。唔准：寫宣傳姿勢入去；用全身 IoU 做身份分；靠非主張持物。識別句屬 DESIGN_CLAIM，唔係診斷；首讀唔等於真我。
- **用途閘門**：主要／長期角色。路人可標「弱化」。
- **點驗通道＋視角**：句中寫明；配 G07。
- **支持例**：EX09（髮／頭；リボン＝頭飾）、EX10（穿法）、EX13（頭／髮構造）、EX03（髮色）、EX12（頭飾）、EX07（層＋可轉件）、EX14（冠＋三色塊組合）、EX11（最近鄰：兄弟髮 ΔE00 約 3–5，靠領口 0.39 vs 0.12〔v7〕）。
- **圖像證據**：`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/OVERVIEW_EXAMPLES_IMG_v7_20261110.png`；`research/identity_canon/rules_r1_img/IDC_R1_OVERVIEW_MATRIX.png`。
- **限制**：冇人測；類型標錯會出事（EX09、EX13）。
- **狀態**：CONFIRMED（14 例）。

### G14｜剪影分層寫；全身外包絡唔係身份
- **規則**：講「剪影」之前先寫係邊層：**人體／衣物／頭髮／頭飾／持物／姿勢**（頭髮同頭飾分開兩層），同埋要先剔走嘅**非角色層**（設定稿手寫註、字樣、展示架／模特頸桿、遮罩雜點）。設計主張落喺邊層就喺嗰層量同驗；全身外包絡（bbox、寬高比、全身 IoU）混埋幾層，唔可以當身份或改稿幅度（R4）。連「外包絡」本身都唔係一個數：面積、bbox 闊、最大行寬可以互相矛盾，要分開報。著上身嘅ケープ／外套／披巾屬衣物層；手持、浮遊、未著上身先算持物層。可選用描述：錨點 → 擴張 → 收尾——最闊帶位置要寫通道同重採樣法；收尾位置對重採樣敏感，唔好單靠收尾分人。
- **用途閘門**：任何剪影主張、跨形態比較。唔用：冇剪影主張嘅近讀角色。
- **點驗通道＋視角**：按層：頭層＝以頭為錨嘅頭部裁切 64；衣物層＝全身 h64 填實（剔非角色層後）；持物層＝含／唔含持物同姿勢對比；姿勢層＝配對姿勢；視角寫明。
- **支持例**：
  - EX04：全身 IoU 約 0.13 vs 頭部裁切 0.56〔v7〕（衣物＋持物層變，頭層穩）。
  - EX01：面積約 1.01 vs 寬約 1.20〔v7〕；同衫姿勢 IoU 0.963／0.970 vs 配對姿勢載體 0.769／0.770〔重產〕。
  - EX10：bbox ミステル大，但穿法外伸喺ノワール（上半寬 427 vs 271〔v7〕）——bbox 同衣物層結論相反。
  - EX14：含劍寬高比 0.7443 vs 剔劍 0.5801〔重產〕——持物層主導全身框。
  - EX09：全身 IoU 約 0.53，差約 88% 喺肢體〔v7〕（姿勢層）。
  - EX03：ユズ髮層定最闊帶，帽同結係頭飾層（髮遮罩唔包頭飾）〔方向新量：FS、HH，未重產〕。
  - 非角色層：EX08 模特頸桿（v7 頂部 8–9%）；EX05 杏怪盗 alpha 含 CODE NAME 字樣、EX11 直也 alpha 雜點、EX02 設定稿手寫註〔方向新量：FS、PM、TVS，未重產；整合者目視 EX02 註記喺遮罩內〕。
- **圖像證據**：`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`；`research/head_hair/rules_r2_img/EX03_g14_layers_yuzu.png`；`research/flow_structure/rules_r2_img/G14_hair_layer_qc.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_pose_vs_carrier_iou_overlays.png`；`research/tv_simplify/rules_r2_img/EX08_top_qc.png`。
- **一手來源**：TF2 NPAR07 講稿 https://cdn.fastly.steamstatic.com/apps/valve/2007/NPAR07_IllustrativeRenderingInTeamFortress2.pdf （「The body proportions, weapons and silhouette lines as determined by footwear, hats and clothing folds were explicitly designed to give each character a unique silhouette.」——剪影由幾層組成；整合者＋PM 核到）；Aiming 伊勢田佑之（2025-04-02）https://developer.aiming-inc.com/design/post-12478/ （「大きな武器を持っているならこのポーズだな… ・体のシルエットを見せたいからマントは短く軽装に…」；CO 引、整合者核到）。
- **限制**：分層遮罩要人手（R3）；鏈描述只係工具。
- **狀態**：新增；CONFIRMED（14 例圖像測試，0 反例）。

### G15｜持物、舉起肢體同飄動件：外包絡同頭部安全區（兩個效應分開驗）
- **規則**：
  - **效應 A（外包絡）**：持物（武器、槍、浮遊件）**可以**主導全身外包絡——**唔一定**。量 bbox 時含持物、唔含持物各量一次，寫明主導嘅係邊個量度（寬、面積、bbox 頂、側向切入）。
  - **效應 B（頭部安全區）**：持物、舉起嘅肢體／表演手勢、飄動衣件**可以**令 bbox 頂唔係頭，或者闖入頭框——**唔一定**，亦唔一定同效應 A 同時出現。**唔好假設 bbox 頂一定係持物**，亦唔好假設 bbox 頂一定係頭。
  - 設計時：
    1. 寫明持物／手勢係咪識別件或刻意表演件（係就喺 G07 指定通道）；唔係就喺宣傳／縮圖構圖令佢離開頭部安全區。
    2. 頭像同頭肩通道以人手標嘅頭頂同頭中心做錨（頂同 x 中心），人手 QC。**頭飾（帽、羽、冠、髮結）算頭；手持件、浮遊件、飄動衣件唔算頭。**
    3. 主視覺姿勢一定要入框，就另出一張以頭為錨嘅官方頭像或縮圖（EX13 官方頭像、EX14 TV 一覽縮圖）。
    4. 識別句唔靠持物，除非持物本身係主張（G13）。
    5. 以 bbox 頂裁嘅框，色／明度統計會被持物或手臂污染——統計前剔走非識別持物，或者標明污染；同色系持物 ΔE 細唔代表裁切啱。
  - 舉手、舉拳屬**姿勢層**（G14）；喺 G15 只作效應 B 嘅例，唔當持物例。
- **用途閘門**：有持物、浮遊件、舉手姿勢或大幅飄動衣件嘅角色；縮圖、頭像、商品方形。
- **點驗通道＋視角**：頭肩方框（以人手頭位為錨）＋全身 h64（含／唔含持物）；正面；寫框邊長同錨定義。
- **支持例（效應 A）**：
  - EX14：同姿勢剔劍全身 IoU 0.821（XOR 約 92% 喺 0–60% 高度帶）；寬高比 0.7443 vs 0.5801〔重產〕。
  - EX04：寬高比 0.29→0.85，戰鬥外包絡含槍＋浮遊刃〔v7〕。
  - EX02 B1 背面：伸臂＋槍定右側極點（極點行 t 0.163–0.604，含舉槍臂）〔重產〕。
  - **範圍反例**：EX02 B2 正面雙槍喺腰，左右極點係肩羽（極點行 t 0.312–0.408）〔重產〕——持物在場但冇主導外包絡。
- **支持例（效應 B）**：
  - EX04：bbox 頂係槍／刃翼，頭頂約 0.25–0.29 H 先開始〔方向新量：PM、CV、FS、TVS，同向〕；以頭為錨嘅頭框仍被槍穿過〔v7〕。
  - EX05 怪盗 7 人入面 **4 人 bbox 頂唔係頭**：竜司（鐵通）、杏（鞭）、祐介（刀）＝持物；真（飄動披巾）＝衣物層。主人公（髮）、双葉（髮／護目鏡）、春（帽羽＝頭飾）bbox 頂係頭〔重產目視；同 SC、HH 名單一致〕。竜司差距細（約 0.02 H），屬邊際例。另：主人公把刀喺臉側入頭框，但 bbox 頂仍係髮（側向闖入）。
  - EX12：キュアコーラル舉手係 bbox 頂（高過帽／髮約 0.10–0.12 H）〔方向新量：CV、FS、TVS，同向〕——姿勢層。
  - EX09：喫茶千束舉拳入頭肩構圖（弱例，姿勢層）。
  - **範圍反例**：EX14 bbox 頂係呆毛（＝頭）；以人手頭位為錨嘅方框（邊長 0.22／0.25／0.28 H）入面劍像素 **0**〔重產〕——劍主導外包絡（效應 A）但冇入頭框（效應 B 唔成立）。以 bbox 中心定 x 嘅 0.28 H 方框先會切到劍（約 3,000 px）同切半張臉。
- **圖像證據**：`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/EX14_sword_vs_headbox.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/EX05_thief_bbox_top_top30.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/EX02_gun_vs_bbox_extremes.png`；`research/silhouette_cast/rules_r2_img/EX05/bbox_top_vs_head_top22.png`；`research/motif_world/rules_r2_img/EX04/01_battle_bbox_top_vs_head_anchor.jpg`；`research/silhouette_cast/rules_r2_img/EX12/raised_arm_vs_face_box.png`；`research/commercial/rules_r2_img/safezone_qc_sheet.png`。
- **一手來源**：TF2 NPAR07（G14 URL；持物可以係剪影識別件，**唔講**裁切）；SWAV（G10 URL）「イラストにおいて目を引くのは人間そのもの、とりわけ顔です」（頭／臉優先；整合者核到）；本庄「胸から上が一番表示される」（G06 URL）。頭部安全區嘅業內規格：NOT_FOUND。
- **限制**：EX14 剔劍 vs TV 卡、EX05 char_s vs char_s2 全身 IoU 混淆，唔引做幅度；EX14 IoU 對對位協議敏感（見 REF v8 §13）；人手頭位係單人讀數；全部靜態圖，唔代表動畫干涉。
- **狀態**：新增；效應 A＝CONFIRMED（3 例＋1 範圍反例）；效應 B＝CONFIRMED（4 例＋1 範圍反例）。


## 2. 作者政策（唔係由例子歸納；冇圖像支持）

- **簽名主件後備**：做唔到簽名色就用簽名主件承接，但主色欄唔可以取消。14 方向圖像全部 NOT_FOUND → 作者政策。
- **隱藏第二層預設關**：圖像冇例 → 作者政策；G09 只撐「唔由衫色診斷」。
- **灰階預設關**：v7 POLICY；G04 條件句唔推翻。
- **三項必查（剪影、主色、首讀氣場）**、**每輪明顯變化**、**品質工整**：v7 作者政策，維持。

## 3. 量度規則（唔入設計規則，留喺 skill R1–R5）

- R1 64 px 只驗大形；R2 寫明量咗乜；R3 淡色髮人手遮罩＋QC；R4 跨姿勢／持物／鏡頭全身 IoU 唔係改稿幅度、唔係身份分；R5 每個 64 px 主張寫通道同定義。
- R2 輪新增嘅量度定義（頭錨方框、EX14 IoU 協議、極點行、EX05 L*）見 REF v8 §13。

## 4. 仍未有／未驗

- G15 A、B 各 <5 強例；全部靜態；冇動畫干涉測試。
- G12(b) 表演範圍：圖像 0 例。G06 減法：圖像單例（EX14）。G11 純穿法：只 EX10。
- 冇寫實日常便服主例；冇 §9 衝突次序例；冇首讀氣場量度。
- 全部未人測：可見≠認得≠記得。

（完）
