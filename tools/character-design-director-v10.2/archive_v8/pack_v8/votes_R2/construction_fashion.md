# RULES R2 VOTE｜construction_fashion（2026-11-10 21:43 HKT）

> 跟 `BRIEF_RULES_R2_20261110.md`／`MSG_RULES_R2_20261110.txt`。鏡頭：根／掛點、連接、展開、收口、開合、穿脫、布料行為、前後結構、用途閘門、載體交換。只投標【R2 投】嘅 12 條。數字只用 REF v7 §10、整合者重產數、或者本方向 I3／I4／I5 已定義量度；唔用 §11 作廢數。I5 勘誤：EX13 馬尾尾尖約到膝（唔係「近小腿」）；EX03 冇踢腳。本輪無缺數要新量，故無 `rules_r2_scripts/`／`rules_r2_img/`。可見≠認得≠記得。冇改 v7、REF、I1–I5、R1／R2 草稿、整合檔。

## 1. 投票（12 條）

| 規則 | 票 | 取代句（AWE 先填） | 圖像證據（路徑＋數字＋點量＋通道） |
|---|---|---|---|
| G03 | ACCEPT | — | 「先寫規定欄同邊個揀，再揀一個主差欄（＋並行通道），每欄寫通道」同 CF 鏡頭相容。EX03 規定欄＝共享綠制服（REF §10 ΔE00 約 0.1），主差欄＝髮（I5 接受 E2／CV 髮面積 10.5%／37.8%；制服塊 28%／20%）；衣物外包絡接近（REF §10 扣髮後 0.305 vs 0.300）。通道：全身 h64 彩色＋頭像。圖：`i3_img/EX03/compare_sheet.png`、`i5_img/EX03/`。EX10 主差欄＝穿法（上身帶 18–45% 寬 187.1 vs 165.2 px，I3／I4，h800 彩色），頭肩通道靠髮／領口並行（REF §10 外套頂錨方框 0–0.5%）。EX09 衣物 IoU 約 0.74（站姿未配平，連 v7 註剔舉拳框 0.80→0.84），髮 IoU 0.246，紅 vs 紺並行。EX05 日常靠色＋着法（剪影 IoU 0.55，REF §10）。「邊個揀」圖像見唔到，只靠文本——規則已寫明，唔構成改句理由。 |
| G05 | ACCEPT | — | 錨類型擴至形／色相／明度／頭飾或穿法／組合，並要求喺新底色仍有對比，CF 同意。EX01 白長髮跨形態（全身 h64 彩色；外接框含官方髮，I3 已註白髮 vs 白戰鬥服 L* 接近、無另做髮遮罩）——規則寫「要驗對比」正確。EX04 形錨：全身 IoU 約 0.13 vs 頭部裁切 64 IoU 約 0.56（REF §10；`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`，overlay 標 0.557）；頭層可被槍／刃穿過（見 G15）。EX12 錨係紫系色相家族（頭區 IoU 約 0.43）。EX14 橙髮＋白裙＋藍上身組合。EX02 明度錨（近黑主面積留、招牌髮型改咗）屬續作改版，CF 正背圖見ケープ仍係近黑主塊（`i3_img/EX02/compare_sheet.png`）。頭部外輪廓選用、錨≠真我，無圖像反證。 |
| G06 | ACCEPT | — | 四條路（重分配／加件／特殊載體轉大塊／減法）同 CF R1 觀察一致；減法標「圖像單例、有文本反例、係選項」亦符合我哋「未搵到第二圖像例」嘅結論。EX01 重分配：實心面積比 1.0113、外接框寬比 1.1996、最大行寬比 1.2897（I3／I4；身高正規化 h800，緊框；REF §10 1.01／1.2／1.29）。EX04 加件：CF I3 寬高比 0.2863 vs 0.8000（h800，戦闘遮罩含刃＋槍）。EX12 加件：巨結約 8.87%（REF §10）。EX14 減法：Canny 206.1→145.7、大色塊 25.6%→42.2%（REF §10）；衣幅用 nosword_v2 寬 297、寬高比 0.5801，唔用含劍 379／0.7431（I3）。通道：全身 h64 彩色＋官方縮圖。圖：`i3_img/EX01/compare_sheet.png`、`i3_img/EX04/compare_sheet.png`、`i3_img/EX14/compare_sheet.png`。無圖像反證。 |
| G07 | ACCEPT | — | 加視角、頭肩框以頭為錨、官方縮圖列第一類通道，CF 已用過、同意。EX06 商業頭像 64：紅 0.0069／藍 0.0113，對全身 64 紅 0.905／藍 0.4987（I4；官方已發佈頭像窗，前景 HSV；PIL BOX）。EX12 粉紅 X 全身 64＝1.98×2.64 px vs 頭像幾何 7.38×9.85 px（I4）。EX13 改構喺側面全身 64，頭像 MAE 1.128（REF §10）；I5 尾尖／膝環 0.6867／0.7346。EX14 官方 TV 一覽 176×246、王冠約 70×47 見 3 尖；全身 64 約 6–7 px 尖數唔可靠（REF §10）。EX08 無頭像通道 → 規則「幾時唔用」成立。圖：`i4_img/EX06/evidence_sheet.png`、`i4_img/EX12/daily_h64_pink_overlay.png`、`i5_img/EX13/`、`i3_img/EX14/thumbs_h64.png`。可見≠認得≠記得。 |
| G08 | ACCEPT | — | 「對相鄰底；同色件靠外輪對背景」收得合理。EX03 ユズ黃結 vs 金髮 ΔE00 約 7，頭像併入髮（REF §10；全身＋頭像 64 彩色）。EX12 粉紅 X vs 深紫髮 ΔE76 11.3，全身 64 LOST（REF §10＋I4 幾何）。EX11 直人 ΔL*≈60（全身 64 仍約 61）vs 直也約 11（全身 64 約 14）（REF §10）。EX08 腰帶 luma709 谷：full 9.08／11.56，h64 仍見（I3；通道＝全身彩色，I1／REF §10 h64 ΔL 6.5／10.0）。EX04 同色丸子靠外輪讀到，屬已收入嘅範圍例外，唔係推翻。圖：`i3_img/EX03/compare_sheet.png`、`i3_img/EX08/construction_callout.png`、`i3_img/EX11/compare_sheet.png`。 |
| G09 | ACCEPT | — | 兩個方向都冇公式、照明≠意圖、識別件≠診斷，同 CF R1 一致。EX01 戦闘更深色份額下降 0.347→0.243（更亮，REF §10，原生前景 L*<40）。EX04 兩態高明度銀白（`i3_img/EX04/thumbs_h64.png`，全身 h64 彩色）。EX12 兩態平均 L* 約 70.1／70.2（REF §10）。EX14 TV 唔變暗。EX05 主角日常已偏暗；面積比含姿勢，唔用嚟證「真我＝變暗」。EX11 亮／白髮對黒コート係圖像事實；意圖句本方向 R1 已標 Asahi 403，今輪唔再當已核 URL。無圖像反證。 |
| G10 | ACCEPT | — | R2 已採納 CF R1 AWE：正面全身／填實 64 證唔到開合、掛點、穿脫；並加支撐類型、髮／頭飾掛點、長垂件終點地標。CF 確認字眼正確。EX02 彩色背面 64 背窗 mid-luma 份額 0.3239 vs 填實 64 同窗 0.0（I4；定義 mid-luma 80<Y<200；通道＝已發佈背面窗，全身 h64 彩色 vs 填實）。EX08 遠讀腰列破洞 0（full／h128／h64），開合只喺近讀 ≥128。EX06 公開圖無背／側／扣位 → (C) 未齊。EX13 長垂件終點：I5 目視地標尾尖 y=546、膝環 y=578、靴底 y=755（頭帶 y=88；比例 0.6867／0.7346；側面全身彩色）。EX10 掛肘（上身帶寬，見 G03）。圖：`i4_img/EX02/b2_back_color_h64_window.png`、`i3_img/EX08/construction_callout.png`、`i5_img/EX13/frame0_asu_side_landmarks.png`。EX01 翼根、EX04 浮遊刃掛點、EX07 隱形拉鏈仍 IMAGE_UNVERIFIED，規則已要求標 (C) 未齊。 |
| G11 | ACCEPT | — | 收 EX05 秀尽 blazer 做「穿法＋內層色」第二例、整條標 provisional，同 CF R1「EX05 弱／混色、純穿法仍只得 EX10」一致。EX10：上身帶 18–45% 均寬 187.1 vs 165.2 px（I3／I4，h800 彩色）；全身 bbox 反而 270 vs 335——只報 bbox 結論相反（見 G14）。EX05 軀幹帶 L*<40 份額 0.964／0.481／0.441〔整合者重產〕：同一件 blazer 扣實 vs 敞開，但敞開同時露內層色，穿法同內層色分唔開。通道：全身 h64 彩色＋軀幹／上身帶。圖：`i3_img/EX10/compare_sheet.png`、`i4_img/EX10/evidence_sheet.png`；整合者圖 `research/flow_structure/rules_r1_img/G11_P5_shujin_torso_strip.png`（只讀，本輪未重產 L*）。 |
| G12 | ACCEPT | — | 拆 (a) 可重畫資料包 CONFIRMED、(b) 表演範圍＋固定點 provisional（圖像 0），同 CF R1 判斷一致。(a) EX02 有正背設定（`i3_img/EX02/official/src_b2_sheet.jpg`，彩色正／背）；EX06 公開宣傳圖無背／側／扣位，公開圖≠設定包。(b) 仍係 EX06 文本（21 種 vs 2 度）；公開像素量唔到（REF §10 4.86°±2.3°，2°≈1.8 px）；EX14 王冠 5→3 只撐「固定點要寫入設定」，官方縮圖 176×246 見 3 尖、全身 64 唔可靠。點驗：(C) 清單；近讀；唔用 64 判固定點失敗。 |
| G13 | ACCEPT | — | 加載體標籤、類型分欄、通道、用組合寫、同最近鄰並排，CF 同意，亦補咗 R1 對 G13 文書格式一手 NOT_FOUND 嘅空位——而家係設計寫作規則，唔再依賴業內「寫一句」原話。EX10 類型＝穿法、載體＝日常、通道＝全身（唔係 bbox、唔係頭像）。EX13 類型＝頭／髮主讀構造、載體＝戰鬥、通道＝側面全身 64。EX14 類型＝冠＋三色塊組合，通道＝官方縮圖。EX11 最近鄰：頭像髮 ΔE00 約 3–5，靠領口暗份額 0.39 vs 0.12（REF §10）。唔用全身 IoU 做身份分（R4）。圖見各例 `i3_img/EX*/compare_sheet.png`。識別句屬 DESIGN_CLAIM，無人測。 |
| G14 | ACCEPT | — | CF R1 P01 正確合併入呢條。14 例測試見 §2：S 14／C 0。代表數：EX01 面積 1.0113 vs 寬 1.1996 vs 最大行寬 1.2897（I3／I4，h800，外接框含官方髮）；EX04 衣物＋持物層爆闊（0.2863 vs 0.8000，含刃＋槍）而頭層 IoU 約 0.56；EX10 穿法帶 187.1 vs 165.2 但 bbox 270 vs 335 相反；EX14 含劍寬高比 0.7431 vs 剔劍 0.5801（I3；整合者重產 0.7443／0.5801）；EX09 全身差主要喺姿勢層（REF §10 IoU 約 0.53、差約 88% 喺肢體；I3 喫茶頸下面積 99603 vs 100484，全身框卻 312 vs 227）。通道：按層（頭裁 64／全身 h64 填實／含或不含持物／配對姿勢）。圖：`i4_img/EX01/evidence_sheet.png`、`i3_img/EX04/compare_sheet.png`、`i4_img/EX10/evidence_sheet.png`、`i3_img/EX14/compare_sheet.png`。 |
| G15 | ACCEPT | — | 持物會主導外包絡、闖入頭框；頭像裁切以頭為錨。14 例測試見 §2：S 5／NA 9／C 0。代表數同圖：EX14 同姿勢剔劍，寬 379→297、寬高比 0.7431→0.5801（I3，h512；nosword_v2 人手多邊形，面積唔好用嚟比）；整合者重產全身 IoU 0.821，XOR 約 92% 落 0–60% 帶。通道：全身（含／唔含持物）＋頭錨頭框。圖：`i3_img/EX14/compare_sheet.png`、`i3_img/EX14/thumbs_h64.png`、`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`。EX04 槍斜穿頭區、浮遊刃高過雙丸子，bbox 頂唔係頭；頭裁 64 可見槍管同刃（`i3_img/EX04/official/leben_battle_famitsu_202303.jpg`；`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`）。EX05 七人怪盗表：bbox／頭肩框頂可以係武器或披巾（`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`，本輪目視確認 Yusuke 刀、Haru 斧等；CF 自家官方副本只有主人公，刀喺胸前、bbox 頂仍係頭髮，主人公唔屬「頂唔係頭」嗰批）。EX12 變身官方稿舉手高過帽沿，bbox 頂係手唔係頭（`i3_img/EX12/official/p_02_style1_pc.png`；姿勢闖入，用途閘門已包舉手）。無圖像反證。 |

## 2. G14／G15 × 14 例

每格：S 支持／C 反例／NA 唔適用／NT 未測。本輪 **C = 0**。S 嘅路徑、數字、定義、通道寫喺格下。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G14 | S | S | S | S | S | S | S | S | S | S | S | S | S | S |
| G15 | NA | S | NA | S | S | NA | NA | NA | NA | NA | NA | S | NA | S |

### G14 證據（全身外包絡混層，唔當身份／改稿幅度）

- **EX01 S**：實心面積比 1.0113 vs 外接框寬 1.1996 vs 最大行寬 1.2897（I3／I4；h800 緊框；REF §10）。外接框含官方髮；頸下寬比仍 1.1996、面積比 1.0963。通道：全身填實＋彩色。圖：`i3_img/EX01/compare_sheet.png`、`i4_img/EX01/evidence_sheet.png`。R4：只報外包絡差。
- **EX02 S**：頭髮當ケープ，同一物質跨「頭髮層／衣物層」；前後結構差（前封後開）要分層寫，唔好只用全身 bbox。鎗掛喺下擺，屬持物層（見 G15）。圖：`i3_img/EX02/compare_sheet.png`、`i3_img/EX02/official/src_b2_sheet.jpg`。
- **EX03 S**：規定衣物層接近（REF §10 扣髮後 0.305 vs 0.300），全身框差主要嚟自髮層同姿勢（I3 全身框 386 vs 309；I5：兩人直立，**無踢腳**）。身份差唔可以填成「全身剪影放大」。圖：`i3_img/EX03/compare_sheet.png`。
- **EX04 S**：私服 0.2863 vs 戦闘 0.8000（CF I3，h800，戦闘含刃＋槍）；頭層 IoU 約 0.56 vs 全身約 0.13（REF §10）。衣物層變、頭層較穩，但頭剪影被持物穿過。圖：`i3_img/EX04/compare_sheet.png`、`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`。
- **EX05 S**：怪盗撲前＋飛起外套，I3 寬比 2.0324、面積比 1.7005 **含姿勢同飛袍**，唔當載體幅度（R4；整合者 0.42 同樣唔准用）。要分衣物層（外套）同姿勢層。I5：`char_s2` 平黑無字。圖：`i3_img/EX05/compare_sheet.png`。
- **EX06 S**：分人主張喺衣物層（鐘形裙 vs 肩掛披風；I3 最大全幅／身高 0.6118 vs 0.5226；REF §10 0.606／0.522）同頭髮層，唔係「全身外包絡＝身份」。通道：全身 h64 填實＋彩色。圖：`i3_img/EX06/compare_sheet.png`。
- **EX07 S**：遠讀錨喺頭／面罩層（貓耳外輪），紋理係近讀表面，項鍊係頭飾層；全身剪影唔代表母題。圖：`i3_img/EX07/compare_sheet.png`。
- **EX08 S**：遠讀衣物層似一件（腰列破洞 0，full／h128／h64）；裙／腰寬受澎袖同層裙影響（I3 裙中帶均寬 686.8 vs 上身 491.9；I4 記過 waist_width_incl_sleeves）。圖：`i3_img/EX08/construction_callout.png`。
- **EX09 S**：リコリス千束抬腿，全身 IoU 約 0.53、差約 88% 喺肢體（REF §10；I3 已註唔用全身 IoU 當「差主要喺髮」）。喫茶頸下面積 99603 vs 100484，全身框 312 vs 227——頭髮／姿勢層同衣物層要分開。圖：`i3_img/EX09/compare_sheet.png`。
- **EX10 S**：穿法主張要用上身帶（187.1 vs 165.2），全身 bbox 270 vs 335 結論相反（開腿、伸臂、髮）。圖：`i3_img/EX10/compare_sheet.png`、`i4_img/EX10/evidence_sheet.png`。
- **EX11 S**：髮層 vs 外套層分開寫（I3 衣襬帶寬 198.8 vs 104.7；頭像通道靠領口唔靠髮色，REF §10）。全身框唔等於衣幅。圖：`i3_img/EX11/compare_sheet.png`。
- **EX12 S**：變身加頭飾層（巨結）同衣物層（鐘形裙）；日常頸下面積 25948 vs 變身 47525（I3 front_neckdown）。變身官方稿舉手屬姿勢層（見 G15）。圖：`i3_img/EX12/compare_sheet.png`。
- **EX13 S**：主讀改喺頭髮層（離顱下垂馬尾，I5 尾尖約到膝 0.6867／膝環 0.7346；側面全身彩色）；頭像幾乎唔變（MAE 1.128）。唔用全身 IoU 當改稿幅度（I3 已撤 auto IoU）。圖：`i5_img/EX13/frame0_asu_side_landmarks.png`。
- **EX14 S**：持物層主導全身框（含劍 0.7431 vs 剔劍 0.5801，I3 h512；整合者 0.7443／0.5801）。TV 卡切圖同姿勢混淆，anime bbox 唔用嚟做衣物外包絡（I4 已標）。圖：`i3_img/EX14/compare_sheet.png`。

### G15 證據（持物／舉手 vs 頭部安全區）

- **EX01 NA**：I3 `crystal_sword_on_a8_stand: false`；戦闘翼／甲係著上身嘅衣装構造，唔當手持物。圖：`i3_img/EX01/compare_sheet.png`。
- **EX02 S**：官方正背設定手鎗掛喺頭髮ケープ下擺，**離開頭部安全區**；外包絡仍主要由ケープ主導。支持「寫明持物係咪識別件；唔係頭像主張就唔好讓佢做 bbox 頂」。通道：彩色正／背全身。圖：`i3_img/EX02/official/src_b2_sheet.jpg`。
- **EX03 NA**：官方肖像無持物闖入頭框。
- **EX04 S**：槍斜舉過頭頂，浮遊刃高過雙丸子，全身 bbox 頂唔係頭；頭裁 64 彩色可見槍管同刃翼穿過（silhouette_cast overlay IoU 0.557／REF §10 0.56）。定義：戦闘官方圖（Famitsu 2023）全身＋以頭為錨嘅頭裁 64。圖：`i3_img/EX04/official/leben_battle_famitsu_202303.jpg`、`i3_img/EX04/thumbs_h64.png`、`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`。浮遊刃掛點硬件 IMAGE_UNVERIFIED（G10）。
- **EX05 S**：CO 七人怪盗全身 64／頭肩 64 表，本輪目視：至少 Yusuke 刀、Haru 斧做咗頭肩框主體，bbox 頂唔係頭（同整合者對 anne／yusuke／makoto／haru 嘅目視一致）。**限制**：CF 官方副本只有主人公；主人公怪盗刀喺胸前，bbox 頂仍係頭髮（`i3_img/EX05/official/hero_char_img2.png`），所以「4／7」呢個計數唔係本方向獨立重產，引用 CO 表＋目視。通道：官方彩色全身 64 vs 頭肩 64。圖：`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`。飛起外套亦會擴大外包絡（姿勢＋衣物，見 G14）。
- **EX06 NA**：官方禮裝全身／宣傳臉無持物闖入。
- **EX07 NA**：所引官方劇照無手持武器主導頭框（項鍊係著上身頭飾）。
- **EX08 NA**：舞台衣装照片無持物頭框問題。
- **EX09 NA**：本方向用嘅喫茶／リコリス官方立繪無槍；千束抬腿屬姿勢層（G14），唔係持物。圖：`i3_img/EX09/official/lycoris_chisato.png`。
- **EX10 NA**：對照圖無持物。
- **EX11 NA**：官方立繪無持物闖入頭框。
- **EX12 S**：變身官方 `p_02_style1_pc.png` 右手舉過帽沿，緊外接框頂係手唔係頭——支持「頭像／頭肩框以頭為錨，唔以 bbox 頂」。呢度係**舉手姿勢**闖入（規則用途閘門已包），唔係武器。日常／制服正面稿無此問題。通道：官方彩色全身。圖：`i3_img/EX12/official/p_02_style1_pc.png`、`i3_img/EX12/thumbs_h64.png`。
- **EX13 NA**：I5 所用 ASU GIF 第 0 幀側面，主讀件係馬尾（頭髮層），呢幀無持物做 bbox 頂。
- **EX14 S**：同一張遊戲立繪含劍 vs v2 人手剔劍（同姿勢）：寬 379 vs 297，寬高比 0.7431 vs 0.5801（I3，身高 512 正規化）。整合者重產全身 IoU 0.821，XOR 約 92% 喺 0–60% 高度帶。面積因劍下空洞唔好比。通道：全身含／唔含持物；官方 TV 一覽縮圖無劍。圖：`i3_img/EX14/compare_sheet.png`、`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`。0.708（剔劍 vs TV 卡）混淆，唔引做幅度。

## 3. 歸類異議

**無異議。** CF R1 P01（分開角色外包絡同衣物外包絡）正確 **ADD → G14**；G10 AWE（正面填實 64 證唔到開合／掛點／穿脫）正確合併入 G10。G11 EX05 標「穿法＋內層色／provisional」、G12 拆 (a)/(b) 而 (b) 維持 provisional，都同我哋 R1 判斷一致。

補充（唔算歸類錯，只係用詞邊界）：G15 括號把「披巾」同武器並列。著上身嘅ケープ／外套／披風應歸 **G14 衣物層**（EX02 頭髮ケープ、EX06 斗篷、EX05 飛起外套一部分）；G15 持物宜指手持、浮遊、或未著上身嘅件。EX05 飛袍可以兩層同時寫。呢點唔夠構成 AWE 或推翻歸類。

## 4. 對 G01／G02／G04 澄清句嘅意見

唔投票。三條澄清同 CF 相容，無發現改錯意思。

- **G01**：「日常＝該場合現實可穿尺度；禮裝場合本身闊唔算違規（EX06 0.606）」同我哋對 EX06 禮裝唔另開載體嘅讀法一致。特殊載體唔一定加大（EX09）亦啱。
- **G02**：「新根部 → 自由段 → 收尾」正正係 CF 構造鏈，歡迎寫入。EX13 側面全身 64 驗掛點同終點地標已有 I5 數。
- **G04**：補「寫通道」同「唔等於最大 k-means 塊」合理。灰階條件句唔推翻預設關，無異議。

## 5. 自我勘誤、限制

- 遵守 I5 勘誤：EX13 尾尖約到膝（0.6867／0.7346），唔寫「近小腿」；EX03 無踢腳。I3／I4 原文唔改。
- CF I3 無色閾／框選髮遮罩。EX03 髮面積只引 I5 已核嘅 10.5%／37.8%。EX04／EX11／EX14 髮面積仍然唔引。
- EX08 明度以 I3／I1 為構造紀錄。
- EX05「4／7 bbox 頂唔係頭」：本方向官方副本只有主人公，計數引用 CO 表＋本輪目視，**未獨立重產 4／7**，已喺 §2 標明。
- 方向新量（CO TVD、FS 鏈、TVS 新 Canny、EX05 L*）未重產，唔引具體未核數。
- 本輪無新腳本：G14／G15 所需構造量度已存在於 i3／i4／i5、REF §10 同整合者重產。未改、未重跑舊腳本。
- 全部未做觀眾或製作測試。可見≠認得≠記得。任何 64 px 主張都寫咗通道同定義。
- 無改 v7、REF、I1–I5、R1／R2 草稿、整合檔；無 git merge／push；無掂官方原圖（只讀已有副本）；無 Haruka 設計。

（完）
