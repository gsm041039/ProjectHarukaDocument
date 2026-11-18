# RULES R2 VOTE｜production_critic（2026-11-10 21:49 HKT）

鏡頭：TV 動畫製作就緒／「可被他人重畫」（C）——固定點、色區／零件件數、線同色指定預算、跨視圖／跨形態一致。數字只引用 REF v7 §10 有效數、整合者重產數（`rules_r1_integration/rerun_pm/metrics.json`），或本向 I4／I5 已寫定義嘅數；唔用 REF v7 §11 作廢數。已計入本向撤回：EX13 尾尖 y=705／「過膝、末端近小腿」；EX05「官方剪影仍可能殘字」；EX09「全身 64 衣色弱、頭像 64 仍可讀」方向相反；EX11 I3 視窗 L\* 降為樣本。全部圖像分析；未做人測或製作現場測試。可見≠認得≠記得。64 px 主張一律寫通道、填實定彩色、定義。R4：跨姿勢／跨持物／跨鏡頭全身 IoU 只量外包絡差，唔當改稿幅度或身份分。本輪無新官方像素量度；證據複核腳本：`research/production_critic/rules_r2_scripts/verify_rules_r2_evidence.py`（一條指令，輸出 `rules_r2_img/metrics.json`）。

## 1. 投票（12 條）

| 規則 | 票 | 取代句（AWE 先填） | 圖像證據（路徑＋數字＋點量＋通道） |
|---|---|---|---|
| G03 | ACCEPT | | 先寫規定欄同邊個揀，再揀主差欄＋並行通道，同（C）色指定／線預算分工相符。EX03 制服 ΔE00 約 0.1、差欄在髮（面積 10.5%／37.8%；§10）；EX09／EX10／EX05 規定制服／制式。圖：`research/identity_canon/rules_r1_img/IDC_R1_OVERVIEW_MATRIX.png`。 |
| G05 | ACCEPT | | 跨形態留錨（形／色相／明度／頭飾或穿法／寫明組合），喺新底色仍要對比，先交得到重畫。EX01 戰鬥白服仍靠藍塊接手（全身 64 藍 0.026→0.162；頭像 0.015→0.16；§10）；EX14 三色塊組合；EX12 小夾→巨結（1.76%→8.87%）。圖：`research/identity_canon/rules_r1_img/EX01_EX04_EX05_EX12_g01_carriers_h64.png`。 |
| G06 | ACCEPT | | 四路徑版已吸收本向 R1 修訂（見 §3）。EX01 重分配（面積約 1.01、寬約 1.20；深色 0.347→0.243；§10）；EX04／EX12 加件（寬高比 0.29→0.85；巨結 8.87%）；EX14 減法：身高 512 Canny 206.1→145.7、大色塊 25.6%→42.2%、≥0.3% 色區約 46–47 vs 45（§10）；官方縮圖尖 5→3（人手；通道＝已發佈縮圖，唔用全身 64 數尖）。減法圖像仍單例。圖：`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`；`research/production_critic/i4_img/EX14/`；`research/production_critic/i4_img/EX06/canny_h512_pc60_140_pair.png`（協議敏感，唔寫「密度接近」）。文本反例本輪 curl 核到足立原句（見 §5）。 |
| G07 | ACCEPT | | 每件指定通道＋視角；官方已發佈縮圖作第一類通道；頭肩框以頭為錨＋人手 QC——同本向 I3–I5 最穩教學點一致。EX06 貼臉紅 ≤0.03、藍 ≤0.02；EX09 衣 IoU 全身 64 約 0.74 vs 貼臉頭像 0.06–0.07（已撤回反向說法）；EX12 小夾全身 64 為 2–3 px LOST、頭肩 10–12 px 色點；EX14 官方一覽 176×246 見 3 尖；EX05 怪盗 4／7 人 bbox 頂係武器／披巾（目視）。圖：`research/commercial/i5_img/EX06_crop_definitions_64.png`；`research/color_value/i4_img/EX09/EX09_clothes_full64_icon64_overlay.png`；`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`；`research/audience_market/rules_r1_img/G07_EX12_crop_channels.png`；`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_EX01_headsquare_128_neutral_vs_cry.png`。見到色點≠形狀已驗。 |
| G08 | ACCEPT | | 識別件對相鄰底要有對比；同色件靠外輪。EX11 I4 人手髮多邊形：直斗 L\* 80.28／大衣 10.95、Δ69.33；直也 76.76／外套 73.26、Δ3.50（官方 alpha；大衣／外套為記錄盒，唔用 I3 視窗冒稱全髮均值）；頭像髮 ΔE00 約 3–5，靠領口暗份額 0.39 vs 0.12（§10）。圖：`research/production_critic/i4_img/EX11/`；`research/psychology/img_examples_20261110/v2/analysis_thumbs_h64_nearest4x.png`；`research/color_value/rules_r1_img/G04_G08_G09_evidence_board.png`。 |
| G09 | ACCEPT | | 明暗／色／穿法兩邊都有，禁止公式同診斷，避免將照明或載體對比升級成性格證據。EX01 戰鬥更亮、EX12 兩態 L\* 約 70 持平、EX05 怪盗多數較暗（方向；唔引未重產嘅 6／7 L\*）。圖：`research/identity_canon/rules_r1_img/EX01_EX04_EX05_EX12_g01_carriers_h64.png`。 |
| G10 | ACCEPT | | 根部／支撐／掛點／開合同可動先於裝飾，係（C）交付項；正面填實 64 證唔到開合。EX13 尾尖約頭皮到腳底 0.68–0.69、膝環 0.73–0.74（I5 撤回 y=705／0.939；真尖約 (778,545)，草點 (763,705) RGB[68,85,34]）；EX02 背窗填實 64 為 0、彩色同填實剪影結論可相反。圖：`research/production_critic/i5_img/EX13/01_retract_tip_vs_knee.png`；`research/production_critic/i4_img/EX02/02_color_vs_filledsil_h64.png`。 |
| G11 | ACCEPT | | 穿法可以做日常主識別；純穿法圖像仍近乎單例（EX10），EX05 收為穿法＋內層色。EX10 上身寬 427 vs 271、L\*>70 為 0.32 vs 0.02，外套入頂錨框 0–0.5%（§10）；bbox 同面積可反向（見 G14）。EX05 軀幹帶 L\*<40 份額 0.964／0.481／0.441（整合者重產，差 ≤0.005；局部色區份額，唔違反 R4）。圖：`research/performance_motion/img_examples_20261110/analysis_v2/01b_sheet_pair_color.png`；`research/flow_structure/rules_r1_img/G11_P5_shujin_torso_strip.png`；`research/identity_canon/rules_r1_img/EX05_EX10_g11_wear_style.png`。 |
| G12 | ACCEPT | | (a) 可重畫資料包已收 P01「公開宣傳圖唔等於設定包」，同本向核心一致；配對中性姿＋代表動作姿先分得開載體同姿勢。EX01 同衫平靜 vs 哭全身填實 IoU 0.9634／0.9698；配對姿勢載體 0.7685／0.7698（整合者重產；身高 256、底對齊、±15% 水平搜尋；後者只准寫外包絡差）。(b) 表演範圍仍 provisional（21 種／2° 公開像素量唔到）；固定點半句見 §3。圖：`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_pose_vs_carrier_iou_overlays.png`；`research/production_critic/img_examples_20261110/out/11_brow_tight_roi_julius_face02-1.png`；`research/tv_simplify/img_examples_20261110/analysis/crown_anime_thumb_x5nearest.png`。唔引 0.7079／0.4205 做幅度。 |
| G13 | ACCEPT | | 識別句寫類型、載體、通道、組合，並同最近鄰並排，同 G07／（C）清單相容；唔用全身 IoU 做身份分。EX11 頭像最近鄰見 G08；EX14 冠＋三色塊；EX09 髮／頭飾分欄。圖：`research/identity_canon/rules_r1_img/IDC_R1_OVERVIEW_MATRIX.png`。 |
| G14 | ACCEPT | | 新規則成立：剪影要分層寫，全身外包絡唔係身份。14 例測試見 §2（S 12／NA 2／C 0）。主證：EX04 全身 IoU 約 0.13 vs 頭部裁切 0.56（§10；頭肩／頭裁切 64 vs 全身填實）；EX01 面積約 1.01 vs 寬約 1.20；EX14 含劍寬高比 0.7443 vs 剔劍 0.5801（重產；剔劍＝tv_simplify v2 人手多邊形）；EX10 bbox 同穿法外伸相反；EX09 全身差主要喺肢體（姿勢層）。圖：`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`；`research/silhouette_cast/img_examples_20261110/aligned_headfeet_color.png`；上述 IoU 疊圖；`research/flow_structure/rules_r1_img/overview_sil64_filled_x3nearest.png`。唔引未重產 FS 鏈數。 |
| G15 | ACCEPT | | 新規則成立：持物可主導外包絡並闖入頭框；頭像裁切以頭為錨；識別句唔靠持物，除非持物本身係主張。14 例測試見 §2（S 4／NA 10／C 0）。主證：EX14 同姿勢剔劍全身 IoU 0.8207，XOR 0.9251 落喺 0–60% 高度帶（重產；定義同上）；EX04 填實頭剪影被槍／刃翼穿過（頭裁切 64 疊圖 IoU 0.56 仍可見穿過）；EX05 怪盗 4／7 bbox 頂唔係頭（目視 CO 表）；EX12 舉臂＋法杖入頭框（頭肩／頭像 64）。圖：上述 IoU 疊圖；`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`；`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`；`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`；`research/audience_market/rules_r1_img/G07_EX12_crop_channels.png`。 |

計：ACCEPT 12，ACCEPT_WITH_EDITS 0，REJECT 0。

## 2. G14／G15 × 14 例

格例：S 支持／C 反例／NA 唔適用／NT 未測。本輪無 C、無 NT。詳細路徑同數字見各格下註。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G14 | S | S | S | S | S | S | NA | S | S | S | NA | S | S | S |
| G15 | NA | NA | NA | S | S | NA | NA | NA | NA | NA | NA | S | NA | S |

**判決：** G14 支持 12 例、唔適用 2 例（EX07、EX11），無反例；ACCEPT。G15 支持 4 例（EX04、EX05、EX12、EX14）、唔適用 10 例，無反例；ACCEPT。兩條都無須改字。

### G14 分例

- **EX01 S。** 面積約 1.01 vs 寬約 1.20（§10）——寬度同面積要分層寫（衣物／載體外伸，唔係人體變大）。配對姿勢載體全身填實 IoU 0.7685／0.7698 只准寫外包絡差（R4）；同衫姿勢 0.9634／0.9698 顯示姿勢層幾乎唔改全身框。通道：全身填實剪影，身高 256、底對齊。圖：`.../rerun_pm/R1_pose_vs_carrier_iou_overlays.png`；`.../EX01_EX04_EX05_EX12_g01_carriers_h64.png`。
- **EX02 S。** 衣物／披風層同人體層要分開：彩色 vs 填實剪影喺 h64 結論可相反（背窗填實 0；胸膚 0.04% vs 1.0%，背 3.6%→11.7%；§10）。圖：`research/production_critic/i4_img/EX02/02_color_vs_filledsil_h64.png`。
- **EX03 S。** 衣物層幾乎共用（制服 ΔE00 約 0.1），差在頭髮層面積 10.5%／37.8%（§10）。主張要寫係頭髮層，唔好報一條「全身剪影唔同」。
- **EX04 S。** 全身 IoU 約 0.13 vs 頭部裁切 0.56（§10）：衣物／持物層大變，頭層相對穩。寬高比 0.29→0.85 亦係加件／持物改變全身框。通道：全身填實 vs 頭裁切 64。圖：`research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png`、`aligned_headfeet_color.png`。
- **EX05 S。** 日常 vs 怪盗係衣物／載體層改外包絡；char_s vs char_s2 IoU 0.4205 **混淆載體同姿勢**，只可寫「分唔開」，唔引做幅度（R4）。官方剪影殘字主張已撤回（字在彩色圖 logo，唔在 char_s2 剪影本身）。圖：`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`。
- **EX06 S。** 禮裝／角色差落在衣物同頭髮層；全身外包絡唔等於可重畫身份。唔引未重產 FS 最闊 t。通道：全身 h64 填實／彩色要分寫。圖：`research/commercial/i5_img/EX06_crop_definitions_64.png`。
- **EX07 NA。** 主主張係近讀表面母題／掛件（項鍊三角；64 px 三角消失），本輪無跨形態剪影分層要驗。唔將近讀件升級成全身外包絡身份。
- **EX08 S。** 舞台衣物層先負責全身遠讀（腰帶 ΔL h64 6.5／10.0，腰孔 0；§10）。要寫「衣物層、全身通道」，唔好用頭像通道冒充。
- **EX09 S。** 全身差主要喺肢體（姿勢層；草稿／§10：全身 IoU 約 0.53，差約 88% 在肢體）。衣物層全身 64 仍可分色（衣 IoU 約 0.74）；貼臉頭像衣份額降至 0.06–0.07——可見通道改變，唔好用已撤回嘅反向句。圖：`research/color_value/i4_img/EX09/EX09_clothes_full64_icon64_overlay.png`。
- **EX10 S。** 穿法外伸令面積／明暗差成立，但 bbox 可以反向（ミステル框較闊）：全身外包絡混層，唔等於身份。上身寬 427 vs 271（§10）。圖：`research/performance_motion/img_examples_20261110/analysis_v2/01b_sheet_pair_color.png`。
- **EX11 NA。** 兄弟差喺領口／大衣明度同頭像組合（I4 多邊形 Δ69.33 vs Δ3.50；頭像髮 ΔE00 約 3–5），唔係人體／衣物／頭髮／持物／姿勢層嘅外包絡主張。
- **EX12 S。** 頭飾層：小夾 1.76%→巨結 8.87%；頭 IoU 0.43（§10）。全身 64 夾 2–3 px LOST，頭肩 10–12 px 只係色點。圖：`.../EX01_EX04_EX05_EX12_g01_carriers_h64.png`；`.../G07_EX12_crop_channels.png`。
- **EX13 S。** 主張落在頭髮構造層（尾尖對膝環），唔係全身外包絡身份。本向 I5：尖約頭皮到腳底 0.685、膝環 0.735；撤回 y=705。圖：`research/production_critic/i5_img/EX13/01_retract_tip_vs_knee.png`。
- **EX14 S。** 持物層主導全身框：含劍寬高比 0.7443 vs 剔劍 0.5801；同姿勢 IoU 0.8207（重產；填實剪影、身高 256）。頭飾層另有尖數 5→3。剔劍 vs TV 卡 0.7079 混淆，唔引。圖：IoU 疊圖；`research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png`。

### G15 分例

- **EX04 S。** 槍／刃翼穿過填實頭剪影，闖入頭框；頭裁切要以頭為錨。圖：`sheet_head_crop_64.png`（頭 64 疊圖）。
- **EX05 S。** 怪盗 7 人入面 4 人（anne 鞭、yusuke 刀、makoto 武器、haru 斧／帽）頭肩框頂唔係頭——bbox 頂≠頭。頭像通道必須頭錨＋人手 QC。圖：`research/commercial/rules_r1_img/EX05_everyday_vs_thief_sheet.png`（目視）。
- **EX12 S。** 變身舉臂＋法杖進入頭肩／頭像裁切。圖：`research/audience_market/rules_r1_img/G07_EX12_crop_channels.png`（頭像約 22% 高、48 px 通道可見手臂／杖入框）。
- **EX14 S。** 同姿勢只拎走劍，全身 IoU 0.8207，XOR 0.9251 喺 0–60% 高度帶——持物主導上半外包絡，並可伸入頭區。識別句若以冠＋三色塊為主張，唔好改靠把劍。圖：IoU 疊圖；`qa_game_sword_overlay_v2.png`。
- **EX01 NA。** 翼／結晶係著用載體構造，唔係手持物闖入頭框。頭框藍份額變化屬載體色塊（G07），唔屬 G15。
- **EX02 NA。** 披風係著用衣物，唔係持物主導或入頭框。
- **EX03 NA。** 無主導外包絡或入頭框嘅持物主張。
- **EX06 NA。** 無持物主導全身框或入頭框嘅比較。
- **EX07 NA。** 項鍊係掛戴件，唔主導全身外包絡、亦唔作頭框闖入證。
- **EX08 NA。** 舞台衣無此類持物主張。
- **EX09 NA。** 舉拳屬姿勢層（已於 G14 S），唔係持物。
- **EX10 NA。** 掛肘外套係穿法，唔係持物。
- **EX11 NA。** 掌焰目視唔主導全身外包絡、亦唔進入頭框；差在領口明度。
- **EX13 NA。** 尾係頭髮構造，唔係持物。

## 3. 歸類異議（可選）

**總判斷：本向 R1 嘅 G06 修訂、P01、P02 歸類正確，同意吸收結果。無投票反對。**

- **G06 修訂：已吸收。** 整合檔 §3 將本向「寫明保留嘅大塊同固定點」併入四路徑版；草稿 G06 已有「寫明保留嘅大塊同固定點（PC）」同「減線唔等於可重畫資料少（EX14 色區約 46–47 vs 45；PC）」。本向 R1 取代句已唔使再投 ACCEPT_WITH_EDITS。
- **P01：正確 MERGE → G12(a)。** 草稿已寫「公開宣傳圖唔等於設定包（PC P01）」。EX06／EX14／EX08 仍然支持呢句：公開立繪或縮圖分唔等於已交付可重畫（C）包。同意唔另立一條。
- **P02：正確 KEEP AS MEASUREMENT RULE（v7-R2／R5），並喺 G06 留一句。** 線／色區預算要寫件數、協議同尺度，本質係量度同寫作協議，唔係設計動作。EX06 I4：緊裁 h512 Canny 60／140 為 0.0661 vs 0.0857，協議一改比值可反轉，故唔好寫「密度接近」。同意呢個歸類。
- **輕度措辭備註（唔反對 G12 票，亦唔要求改歸類）：** G12(b) 標「圖像 0 例」對**表演範圍**半句係準嘅（EX06 21 種表情／眉 2° 喺已發佈解像量唔到；4.86°±2.3°）。但**固定點**半句已有圖像：EX14 官方已發佈縮圖人手可見王冠尖 5→3（`research/production_critic/i4_img/EX14/01_anime_thumb_crown_native.png`；`research/tv_simplify/img_examples_20261110/analysis/crown_anime_thumb_x5nearest.png`；通道＝官方縮圖原生，全身 64 唔可靠數尖）。建議之後將「圖像 0 例」收窄成「表演範圍圖像 0 例；固定點有 EX14 官方縮圖」。呢個唔改變 (b) 維持 provisional 嘅裁決。

## 4. 對 G01／G02／G04 澄清句嘅意見（可選，唔投票）

無異議，唔改意思，同本向（C）相容。

- **G01：** 載體差要喺中性或配對姿勢下成立；輪廓分寬度／面積／實心度——正好避免用混淆 IoU 當「加大」。日常可信同本向用途閘門一致。
- **G02：** 改構要寫新根部→自由段→收尾，並喺存活視角驗；表面印紋標近讀層。同 EX13 撤回後嘅尾尖對膝環讀法一致。
- **G04：** 簽名色寫面積、位置、用途、通道，唔等於最大塊。條件句唔推翻灰階預設政策，本向無異議。

## 5. 自我勘誤、限制

- **撤回仍然有效，今輪無翻案：** EX13 唔用 y=705／0.939／「過膝、末端近小腿」；EX05 唔寫「官方剪影仍可能殘字」；EX09 衣色方向以全身 64 可分、貼臉頭像份額下降為準；EX11 用 I4 多邊形，唔用 I3 視窗 L\* 冒稱全髮均值。
- **唔引：** REF v7 §11 作廢數；EX14 剔劍 vs TV 卡 IoU 0.7079、EX05 char_s vs char_s2 0.4205 做改稿幅度或身份分；未重產嘅 CO 通道 TVD、FS 外包絡鏈（例如 EX06 最闊 t 0.9375 vs 0.7625）、TVS 對 EX01／EX04／EX05／EX12 嘅新 Canny／大色塊、本向 I3 密度比 0.711、作廢髮面積草稿。
- **未做**觀眾測試、製作現場測試或可重畫實驗；「可見≠認得≠記得」仍然適用。64／128 只按通道同定義陳述。
- **無**改 v7、REF v7、R1／R2 草稿、整合檔、任何已有投票檔；無 git merge／push；無通知任何代理；無 Haruka 設計；無碰官方原圖。
- **本輪腳本：** `python3 /workspace/haruka/research/production_critic/rules_r2_scripts/verify_rules_r2_evidence.py` → `research/production_critic/rules_r2_img/metrics.json`。29 件既有分析圖／JSON 全部存在；由整合者 `rerun_pm/metrics.json` 抄出 IoU／寬高比（EX14 XOR 0–60% 帶 = 0.2229+0.3100+0.3922 = 0.9251）。無新官方像素量度。
- **一手來源（只計本輪獨立核到）：** 核到 **1** 條；**NOT_FOUND 0**。`https://www.swordart-online.net/special/interview02.html`：本輪 WebFetch 回 403，改用 curl（`-sL -A Mozilla/5.0`）得 HTTP 200、12854 bytes，頁面含原句「abecさんの絵はかなり線が多いんですけど、なるべく線を減らさず、服や鎧の模様となんかも減らさないようにしています」。用作 G06 減法**文本反例**，唔當第二圖像例。草稿其餘一手（渡辺、高藤、本庄、朝香栞、守屋×上內等）本輪未再抓，唔計入「本輪已核」。TF2 講稿按整合檔標「單方向核、整合者未再核」，本輪亦未核，唔做主證。
