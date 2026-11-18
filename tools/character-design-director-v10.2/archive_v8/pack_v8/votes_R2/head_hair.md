# RULES R2 VOTE｜head_hair（2026-11-10 21:50 HKT）

本檔只投 R2 指定 12 條（G03、G05–G15）。G01／G02／G04 唔投票，意見見 §4。
新分析：`research/head_hair/rules_r2_scripts/analyze_g14_g15.py`（`bash rules_r2_scripts/run_all.sh` 一條指令重產），圖同定義喺 `research/head_hair/rules_r2_img/`。定義、通道、mask 版本見同目錄 `DEFINITIONS.txt`。下列新數均經分析者用 Read 目視 QC；唔過關嘅數唔入票。

立場照舊：用途先於識別；放大只係其中一種方法；頭部外輪廓非必須；髮／頭飾／穿法可做主錨；衣物剪影同頭髮剪影分欄；頭飾再同髮、衣分欄（R1 H1）。

保持：EX04 髮面積、EX14 髮占比／髮 IoU 為 `NOT_REPORTED`；EX09 喫茶髮 IoU 用 I1 **0.246**（髮含リボン），本輪唔重算；EX03 ユズ **34.28% 係下限**（面多邊形略吃側髮；mask 行為 `i3_v4_acc_split_erratum`）；EX11「衣」＝全身減髮減臉連褲。唔用 REF v7 §11 作廢數。64／128 px 只係 code 壓力測試，寫通道同定義；可見≠認得≠記得。全身 IoU 跨姿勢／持物／鏡頭唔當改稿幅度（R4）。

## 1. 投票（12 條）

| 規則 | 票 | 取代句（AWE 先填） | 圖像證據（路徑＋數字＋點量＋通道） |
|---|---|---|---|
| G03 | ACCEPT_WITH_EDITS | 先寫規定欄：邊件係組織／世界規定、邊個揀（組織、角色本人、設計者）。保留共享文法，將個人差集中喺一個主差欄；需要時加並行通道。每欄寫明負責通道。**衣物剪影、頭髮剪影、頭飾分三欄寫**，唔好把冠、リボン、夾、結併入髮或衣。宣傳立繪姿勢唔算一欄。差欄係辨認線索，唔係性格診斷。 | R2 稿第 3 點只寫「衣物剪影同頭髮剪影」，未把已合併嘅 H1「頭飾」寫入規定欄清單。證據：EX03 ユズ綠帽＋羽飾＝頭飾層 7655 px／2.60% of char（衣 60.43%、髮 34.28% 下限），`rules_r2_img/EX03_g14_layers_yuzu.png`，通道 official PNG RGBA alpha≥128，mask 行為 `i3_v4_acc_split_erratum`（規格字串仍標 `i3_v3_hand_pale_erratum`）。EX09 I1 髮層含可見紅リボン（喫茶髮 IoU 用 I1 0.246，髮含リボン），`rules_r2_img/EX09_g14_layers_cafe_chisato.png` 洋紅髮板連リボン，通道 official PNG＋I1 人手遮罩。EX01 戰鬥形態 bbox 頂層係額上結晶（頭飾），唔係髮，`rules_r2_img/EX01_g14_layers_battle.png`，私服／戰鬥髮占比 0.2471／0.2491，通道 official RGBA 左圖 x 0–490／0–485。EX14 王冠 5→3 尖係頭飾唔係髮或衣物外包絡，`rules_r2_img/EX14_g14_crown_official.png`（髮占比 NOT_REPORTED）。 |
| G05 | ACCEPT | （唔改） | 錨類型已包括頭飾／穿法／組合，並寫明「頭部外輪廓係選項，唔係必須」，同本方向立場一致。EX01 白長髮兩形態主體積：髮占比 0.2471（私服）vs 0.2491（戰鬥），但全身寬高比 0.6275→0.7525，`rules_r2_img/EX01_g14_layers_casual.png`、`…_battle.png`，通道同上；白髮對白戰鬥服對比細，同意稿入 CV 要驗對比呢句，唔使改規則。EX04 雙丸子兩形態都在（頭層錨），全身外包絡大變（本輪 bbox 寬高比 0.2852 vs 0.8503；v7 全身 IoU 約 0.13 vs 頭部裁切 0.56），`rules_r2_img/EX04_g14_head_official.png`，通道 Famitsu JPG RGB；髮面積 NOT_REPORTED。EX12 紫系色相家族跨形態，日常中立夾＝頭飾 1.26% of mid-front char（x 270–423，mask `i3_v5_color_acc_erratum`），`rules_r2_img/EX12_g14_layers_casual.png`。 |
| G06 | ACCEPT | （唔改） | 四條路、減法係選項兼有反例，同「放大只係其中一種方法」一致。圖像：EX01 重分配（髮占比幾乎持平、衣物外包絡變，路徑同上）；EX04 英雄載體加件（寬高比 0.2852→0.8503，持械／浮遊刃入框，`rules_r2_img/EX04_g15_headbox.png`）；EX14 媒介減法嘅圖像仍單例，本輪只重產持劍外包絡（唔當改稿幅度）：含劍寬高比 0.7443 vs 剔劍 v2 0.5801，高歸一 H=256 NEAREST tight-bbox、搜 dx，IoU **0.8207**，XOR 0–60% 高帶份額 **0.9251**，`rules_r2_img/EX14_g14_sword_envelope.png`，通道 official game RGBA alpha≥128 vs tv_simplify v2 人手剔劍剪影（inventory md5 OK）。0.708（剔劍 vs TV 卡）唔引。 |
| G07 | ACCEPT | （唔改） | 「官方已發佈縮圖係第一類通道」「頭肩方框以頭為錨、人手 QC」同本方向要用嘅通道清單一致。EX14 TV 一覽縮圖（官方 176×246 量度原圖，唔當 64 px 人驗）可見王冠 3 尖，`rules_r2_img/EX14_g14_crown_official.png`。EX05 怪盗 7 人入面 4 人體全身 bbox 頂唔係中央頭錨（見 G15 新量），所以頭像裁切唔可以跟 bbox 頂。EX13 頭像通道另驗（v7 MAE 1.128），馬尾主張用側面全身，`rules_r2_img/EX13_g14_ponytail_layer.png`。 |
| G08 | ACCEPT | （唔改） | 同意「對相鄰底」同「同色件靠外輪對背景」。EX04 銀白雙丸子靠外輪對淺底／白紙讀到，`rules_r2_img/EX04_g14_head_official.png`，通道 Famitsu JPG 彩色；唔報髮面積，亦唔用灰階自動 fail。EX03 ユズ綠帽同金髮分層後，帽／羽飾先同相鄰髮比，而唔係同整塊金髮合併，`rules_r2_img/EX03_g14_layers_yuzu.png`。EX11 兄弟髮色接近、靠衣領／着法分，衣層含褲，`rules_r2_img/EX11_g14_layers_naoto.png`、`…_naoya.png`。64 px 主張如要用，必須寫通道（彩色 LANCZOS 定填實）同裁切；本票唔用 64 作來源。 |
| G09 | ACCEPT | （唔改） | 兩邊都冇公式、照明≠意圖、識別件≠診斷，同本方向 EX11 立場一致。EX01 戰鬥衣更亮／深色份額下降（v7 有效數）同時白髮錨仍在（本輪髮占比 0.2471／0.2491）。EX12 兩態仍係紫系，唔跟「升級就變暗」。EX11 白髮文本「希望の象徴」唔升級成像素診斷；衣層定義＝全身減髮減臉連褲。夜景劇照（EX07）唔當設計意圖。 |
| G10 | ACCEPT | （唔改） | 已收入髮束／頭飾掛點，同「正面填實 64 證唔到開合、掛點」。EX13 長垂件終點地標：尾尖到膝、略高於膝環（v7 尾尖約 0.68–0.69 H、膝環約 0.73–0.74 H；I5 已核到膝、不到小腿），`rules_r2_img/EX13_g14_ponytail_layer.png`，通道官方比較 GIF 抽幀（彩色）。EX04 戰鬥浮遊刃／持槍要寫支撐類型，唔好當頭髮，`rules_r2_img/EX04_g15_headbox.png`。填實 64 唔用來證掛點。 |
| G11 | ACCEPT | （唔改） | 接受 provisional：純穿法量度圖像仍以 EX10 為主，EX05 秀尽 blazer 作第二例但混內層色，稿已老實寫明。本輪 EX10：ノワール全身 bbox 寬高比 **0.3378**（454×1344）、ミステル **0.4192**（568×1355），通道 official webp RGBA alpha≥128；穿法外伸喺ノワール衣層（掛肘外套），但 bbox 反而ミステル大——同稿「淨報 bbox 會得相反結論」一致，`rules_r2_img/EX10_g14_layers_noir.png`。頭像要另有分人件（穿法件喺頭框弱）。 |
| G12 | ACCEPT_WITH_EDITS | (a) 可重畫資料包：正／背／側、扣位、省略規則，連每個載體一張中性姿＋一張代表動作姿。公開宣傳圖唔等於設定包。(b) 表演範圍＋固定點：表情、姿勢可動幅，連身份固定點（眉角、尖數、髮束數、頭飾形）。**表演範圍**目前仍主要靠文本（2 度公開像素量唔到），維持 provisional；**固定點已有圖像例**，唔好再寫「(b) 圖像 0 例」：EX14 王冠尖遊戲 5→TV 一覽縮圖 3（手動數尖，唔用 64 px 數尖），`rules_r2_img/EX14_g14_crown_official.png`；EX04 兩形態雙丸子都在（官方頭至肩裁切，髮面積 NOT_REPORTED），`rules_r2_img/EX04_g14_head_official.png`。 | 見左。R1 已提出呢兩例作固定點圖像；整合把 H1 併入 G13 時未把呢兩例寫入 G12(b)。(a) 維持 CONFIRMED。 |
| G13 | ACCEPT | （唔改） | 類型清單已有衣物剪影／頭髮剪影／頭飾，並標 HH H1，載體標籤同通道都有。識別句用組合、同最近鄰並排，唔用全身 IoU 做身份分。本方向例：EX09 リボン要標頭飾（I1 髮含リボン先會污係髮 IoU 0.246）；EX14 冠＋三色塊組合（髮占比 NOT_REPORTED）；EX11 最近鄰靠領口／衣層（含褲）而唔係髮 ΔE；EX10 主句係穿法。 |
| G14 | ACCEPT_WITH_EDITS | 講「剪影」之前先寫係邊層：**人體／衣物／頭髮／頭飾／持物／姿勢**。頭髮同頭飾要分層，唔好寫成「頭髮頭飾」一欄。設計主張落喺邊層就喺嗰層量同驗；全身外包絡（bbox、寬高比、全身 IoU）混埋幾層，唔可以當身份或者改稿幅度（R4）。頭部外輪廓唔係必須；髮、頭飾、穿法可以做主錨。可選用 FS 描述：錨點 → 擴張 → 收尾。 | 見 §2。稿把「頭髮頭飾」寫成一層，會倒退 H1。反證同支持都喺分層板：EX03 帽≠髮（頭飾 2.60%），`rules_r2_img/EX03_g14_layers_yuzu.png`；EX09 I1 髮含リボン，`…/EX09_g14_layers_cafe_chisato.png`；EX01 額上結晶係頭飾且係戰鬥形態 bbox 頂，`…/EX01_g14_layers_battle.png`；EX14 王冠同持劍外包絡係兩層，`…/EX14_g14_crown_official.png`、`…/EX14_g14_sword_envelope.png`（IoU 0.8207，XOR 0–60%＝0.9251）。14 例測試全部 S，無反例。 |
| G15 | ACCEPT | （唔改） | 見 §2。規則已寫「頭像以頭為錨，唔以 bbox 頂」「識別句唔靠持物除非持物本身係主張」，同本方向判斷一致。主力圖像：EX04 戦闘持槍多邊形 **8176 px 全部**落喺頭至肩 ROI y≤285（documented I3 ROI；通道 Famitsu JPG RGB＋人手武器多邊形），槍身穿過面錨頭框，`rules_r2_img/EX04_g15_headbox.png`；EX05 怪盗 7 人中 4 人（竜司／杏／祐介／真）全身 bbox 頂低於中央 40% 寬頭錨 dy＝20／28／69／41 px，`rules_r2_img/EX05_g15_team_bbox_top.png`，通道 official RGBA alpha≥128；EX14 同姿勢剔劍 IoU 0.8207、XOR 0–60%＝0.9251，劍刃佔頭肩構圖左側，`rules_r2_img/EX14_g14_sword_envelope.png`、`…/EX14_g15_headbox.png`（唔引用本輪 weapon∩頭框＝0，見 §5）；EX12 變身舉臂係全身 bbox 頂（衣層），`rules_r2_img/EX12_g15_headbox.png`。 |

## 2. G14／G15 × 14 例

格：S＝支持／C＝反例／NA＝唔適用／NT＝未測。每格證據喺表下。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G14 | S | S | S | S | S | S | S | S | S | S | S | S | S | S |
| G15 | NA | NA | NA | S | S | NA | NA | NA | S | NA | NA | S | NA | S |

### G14 逐例

點量（除另註）：層占比＝該層 px／char px；char＝RGBA alpha≥128（JPG EX04 用 I3 同款 L<235 close／dilate 核心，只用來量全身框，唔用來報髮面積）。衣＝char 減髮減面減頭飾減持物（EX11 連褲）。淺色髮用人手遮罩。

- **EX01 S** — 髮層占比幾乎持平（私服 0.2471、戰鬥 0.2491），全身寬高比 0.6275→0.7525，差喺衣物外包絡同額上結晶（頭飾；戰鬥 bbox 頂層＝accessory）。`rules_r2_img/EX01_g14_layers_casual.png`、`EX01_g14_layers_battle.png`。mask `i3_v2_ex01_a4_no_inner_vest_leak`／`i3_v2_ex01_a8_innerlock`。目視 QC 過關。
- **EX02 S** — B1 長髮改 B2 短髮，身份仍靠近黑主面積等錨（設計師一手已由整合者核）。全身設定剪影同頭髮層唔係同一主張。無本方向人手髮遮罩，**唔報髮面積**。`rules_r2_img/EX02_g14_front_crops.png`（I3 自官方設定 crop，彩色）。
- **EX03 S** — 共享制服在衣層；差在髮層（クルミ I3 9.77%，`i3_ex03_draft` 自動薰衣草；ユズ人手 34.28% **下限**，101015／294639 px）同ユズ綠帽頭飾 2.60%。對齊後 I3 髮 IoU 0.055、衣 IoU 0.4608（含姿勢，R4 唔當改稿幅度）。兩人冇踢腿，係クルミ伸臂、一隻靴向外撇（I5 已更正）。`rules_r2_img/EX03_g14_layers_yuzu.png`、`EX03_g14_qc_pair.png`。目視：帽／羽飾喺頭飾板、唔喺衣板；面窗略吃側髮，故 34.28% 只作下限。
- **EX04 S** — 頭層錨（雙丸子兩形態都在）同全身外包絡脫鈎：本輪 char 核心 bbox 寬高比 0.2852 vs 0.8503；v7 有效數全身 IoU 約 0.13 vs 頭部裁切 0.56。**髮面積 NOT_REPORTED**。`rules_r2_img/EX04_g14_head_official.png`，通道 Famitsu JPG 彩色官方裁切（無塗髮）。
- **EX05 S** — 日常 vs 怪盗全身寬高比 0.4257 vs 0.8606（official RGBA alpha≥128，inventory hero_daily／hero_thief）。差混咗衣物、披巾、持物同姿勢；**唔引** char_s vs char_s2 IoU 0.42 做改稿幅度（R4）。證據連 G15 隊形圖。
- **EX06 S** — 髮層細（スカーレット 0.0188、ジュリアス 0.0133，MASKS EX06:*，official PNG），禮裝外包絡主要在衣層；身份主張喺貼臉／眉等，唔係全身信封。`rules_r2_img/EX06_g14_layers_scarlet.png`、`…_julius.png`。
- **EX07 S** — 劇照；識別落喺頭罩／表面印紋（近讀層），唔負責遠讀全身外包絡。`rules_r2_img/EX07_g14_official.png`。唔報髮面積。
- **EX08 S** — 人體模型着装，無頭無髮；剪影主張在衣物層。證明頭部外輪廓非必須。`rules_r2_img/EX08_g14_official_far.png`，通道 official RGB 照片。
- **EX09 S** — 衣層同髮層要分算；I1 人手把リボン算入髮，喫茶千束髮 IoU 用 I1 **0.246**（本輪唔重算）。本輪 I1 層占比（髮含リボン）：喫茶千束 0.0708、喫茶たきな 0.1752、リコリス千束 0.096、リコリスたきな 0.1954。`rules_r2_img/EX09_g14_layers_*.png`。紅門檻∩I1髮展示板目視有金髮誤標，**唔用**其 px／比例。千束舉拳屬姿勢層（v7 已註剔舉拳框）。
- **EX10 S** — 主差在穿法（衣層）；ノワール寬高比 0.3378、ミステル 0.4192，bbox 較大嘅唔係外伸外套嗰個。`rules_r2_img/EX10_g14_layers_noir.png`、`EX10_g14_layers_mistel.png`、`EX10_g14_head_*.png`。mask `i3_v1`／`i3_ex10_mistel_hand_v1`。
- **EX11 S** — 衣層＝全身減髮減面（連褲）：直人衣 0.9420、直也 0.9066；髮 0.0423／0.0523。目視衣板含大衣同褲同鞋。`rules_r2_img/EX11_g14_layers_naoto.png`、`…_naoya.png`。mask 直人 `i3_v3_hand_pale_erratum`、直也 `i3_v2_hand_pale`。
- **EX12 S** — 日常中立（mid-front x 270–423）髮 0.1236、頭飾夾 0.0126，mask `i3_v5_color_acc_erratum`，目視夾同髮已分。`rules_r2_img/EX12_g14_layers_casual.png`。變身圖 MASKS 只有頭飾多邊形、無人手髮／面，**唔報變身髮占比**（計算值 0 作廢）；變身頭飾板含帽亦含身上大結，8.89% **唔當純頭飾面積**（v7 頭飾 1.76%→8.87% 仍以 v7 有效數為準，本輪唔重訂）。
- **EX13 S** — 馬尾係頭髮層長垂構造（到膝），唔係持物層。`rules_r2_img/EX13_g14_ponytail_layer.png`。沿用 v7 尾尖約 0.68–0.69 H。本輪唔報新髮面積。
- **EX14 S** — 持物層主導全身框：含劍 bbox 1342×1803、寬高比 **0.7443**；nosword v2 297×512、寬高比 **0.5801**；H=256 NEAREST tight-bbox 對齊 IoU **0.8207**（同整合者重產），XOR 高帶 0–22／22–40／40–60＝0.2229／0.3100／0.3922，合 **0.9251**。`rules_r2_img/EX14_g14_sword_envelope.png`。王冠（頭飾）5→3 尖，`…/EX14_g14_crown_official.png`。**髮占比／髮 IoU NOT_REPORTED**（v5 QC 未明確過關）。

### G15 逐例

頭框定義見 `rules_r2_img/DEFINITIONS.txt`。長髮角色用「髮｜面｜頭飾外包絡」做頭框會連到髮尾，**衣物入框比例唔作證據**。EX04 用 documented 頭至肩 ROI。EX05 用「全身 bbox 中央 40% 寬內最高角色像素」做頭錨。

- **EX01 NA** — 本對官方平靜全身無持械。戰鬥 bbox 頂係額上結晶（頭飾，唔係持物）。`rules_r2_img/EX01_g15_headbox.png`。
- **EX02 NA** — 官方正背設定頭區無槍／刃闖入。`rules_r2_img/EX02_g15_head_thumbs.png`（h128 彩色 LANCZOS，只供目視，唔當人驗）。
- **EX03 NA** — 官方全身無持械。ユズ bbox 頂層係綠帽（頭飾）。`rules_r2_img/EX03_g15_headbox_yuzu.png`。
- **EX04 S** — 戦闘：人手武器多邊形 8176 px，**全部**喺頭至肩 ROI y≤285（`weapon_in_head_roi_frac_of_weapon=1.0`）；目視槍身穿過面錨頭框，浮遊刃亦入框。私服對照：武器 0，雙丸子可見。`rules_r2_img/EX04_g15_headbox.png`。髮面積 NOT_REPORTED。
- **EX05 S** — 定義：頭頂＝char bbox 中央 40% 寬內最高角色像素；dy＝呢個 y 減全身最高 y；通道 official `*_char_img2.png` RGBA alpha≥128（主人公圖喺 HH inventory，其餘六張同一官方資料夾、本輪記 md5、唯讀）。7 人結果：主人公／雙葉／春 dy＝0（bbox 頂＝頭錨）；**竜司 dy＝20、杏 28、祐介 69、真 41**（bbox 頂≠頭；目視分別係棍／鞭／刀／披巾高點）。4／7，同稿同整合者目視方向一致。春嘅斧喺頭側同頭等高、但唔高過帽，唔計入 4／7。`rules_r2_img/EX05_g15_hero_headbox.png`、`EX05_g15_team_bbox_top.png`。橙＝y < 頭錨頂且喺兩側帶嘅角色像素。
- **EX06 NA** — 官方立繪無持械入頭。`rules_r2_img/EX06_g15_headbox.png`。
- **EX07 NA** — 無持物主張；頭罩係頭層／表面，唔係持物。
- **EX08 NA** — 無頭部，用途閘門唔適用。
- **EX09 S** — 閘門包括舉手姿勢。喫茶千束舉拳去到全身 bbox 頂、入頭肩構圖（姿勢層，唔係武器）。たきな同兩張リコリス無持械。`rules_r2_img/EX09_g15_headbox_cafe.png`、`EX09_g15_headbox_lycoris.png`。通道 official PNG。
- **EX10 NA** — 官方全身無持械入頭；掛肘外套係穿法／衣層，唔當持物。`rules_r2_img/EX10_g15_headbox.png`。ノワール bbox 頂 3 行像素衣／髮 48 vs 41，屬遮罩邊、目視頂係短髮，唔當「衣物高過頭」主張。
- **EX11 NA** — 無持械。直也 bbox 頂 3 px 標成衣，目視頂係髮，當作噪聲忽略。`rules_r2_img/EX11_g15_headbox.png`。
- **EX12 S** — 變身舉臂（刀叉）係全身 bbox 頂（頂層＝clothing，因為變身圖無人手髮遮罩；目視就係舉臂，唔係頭）。`rules_r2_img/EX12_g15_headbox.png`，通道 official PNG RGBA。日常中立目視頂係呆毛；計算頂層＝衣（19 px）唔引用。
- **EX13 NA** — 官方 A-pose 轉面無持械入頭；馬尾係髮層，唔當持物闖入。
- **EX14 S** — 持劍主導外包絡（數字見 G14）。目視劍刃佔頭肩構圖左側，王冠／呆毛先係圖頂（本輪冇用髮／頭飾遮罩，故 bbox 頂層算 unlabelled，唔作層標籤）。`rules_r2_img/EX14_g15_headbox.png`、`EX14_g14_sword_envelope.png`。**唔引用**本輪 `weapon_in_headbox_px=0`（面＋頸錨框頂邊切咗王冠，而且劍多邊形同框左緣對不齊，數不可靠）。0.708 唔引。

## 3. 歸類異議（可選）

H1（頭飾同髮、衣物分欄）被標 **MERGE → G13／G03（設計分欄）＋ KEEP 遮罩分色為量度規則（v7-R3）**，歸類方向正確：設計類型同遮罩分色應該分開。異議只在**措辭吸收唔完整**：

- G13 類型清單已有「頭飾」，呢部分接收得妥。
- G03 第 3 點只寫「衣物剪影同頭髮剪影分欄」，冇把頭飾寫成第三欄——見 §1 G03 AWE 同 EX03／EX09／EX01／EX14 圖。
- 新規則 G14 把「頭髮頭飾」合成一層，等於把剛合併嘅 H1 倒退。見 §1 G14 AWE。

唔認為 H1 應該改 ADD 成獨立 G 條；要嘅係 G03／G14 寫清楚三欄。遮罩分色留喺 v7-R3 冇異議。

## 4. 對 G01／G02／G04 澄清句嘅意見（可選，唔投票）

澄清句冇改壞意思，唔反對。G01 仍係用途／載體先於輪廓大細，同「用途先於識別」一致；特殊載體唔一定要加大。G02 改主讀構造、唔好淨係放大徽章，放大只係方法之一。G04 簽名色寫面積／位置／用途／通道、唔等於最大塊，同 EX03 クルミ髮 9.77%＜制服、ユズ 34.28% 下限＞制服一致。

## 5. 自我勘誤、限制

- **I5 已更正、本輪再寫一次**：EX03 兩人冇踢腿；舊 I3 metrics「抬腿」字作廢。
- **新量 QC 通過、用喺票裏**：EX14 剔劍對齊（IoU 0.8207、寬高比 0.7443／0.5801、XOR 0–60%＝0.9251；同整合者重產一致，本輪 best_dx 原點定義可能同整合者「21 px」唔同，只報 IoU／高帶）；EX04 武器∈頭至肩 ROI 1.0；EX05 4／7 dy；EX01／EX03／EX06／EX10／EX11／EX12 日常層占比（上列已引用者）；EX03 ユズ頭飾 2.60%。
- **新量做咗但 QC 唔過或定義唔穩、一律唔用**：EX09 紅門檻リボン比例（金髮誤標）；EX14 `weapon_in_headbox_px=0`；EX12 變身髮占比 0（無人手髮遮罩）同變身「頭飾」8.89%（含身上大結）；長髮「衣物入頭框」比例（頭框被髮尾拉長）；EX10／EX11／EX12 日常計算 bbox 頂層同目視頂不符嘅幾個 px。
- **維持 NOT_REPORTED**：EX04 髮面積；EX14 髮占比／髮 IoU（頭飾面積本輪亦唔報）；本方向 EX09 喫茶髮 IoU（用 I1 0.246）。
- **作廢數風險（唔好回流）**：EX14 v4 髮 10.96%／18.62%／24.11%、髮 IoU 0.065；EX04 任何舊髮面積；ユズ 34.62%／31.80%／36.53%／44.33%；color_value 凍結 37.82% 唔好當本方向髮占比；EX05 0.42、EX14 0.708 當改稿幅度；任何未標通道嘅 64 px「睇唔到＝失敗」。
- **本輪無新一手訪談**。未再開稿中 URL，故唔另引新原句；需要時沿用整合者已 curl 核到嘅來源，唔冒充本輪新開。NOT_FOUND 清單：本輪無新搜。
- 冇改 v7、REF v7、R1／R2 草稿、整合檔、官方原圖；冇 git merge／push；冇 Haruka 設計。
- 重產：`bash /workspace/haruka/research/head_hair/rules_r2_scripts/run_all.sh`

