# RULES R2 VOTE｜performance_motion（2026-11-10 21:46 HKT）

讀咗：`MSG_RULES_R2_20261110.txt`、`BRIEF_RULES_R2_20261110.md`、`INTEGRATION_RULES_R1_20261110.md`（§4 R4 裁決、§6 歸類）、`RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md`（G01–G15）。只開新檔；冇改任何既有檔、v7、REF v7、草稿或者人哋嘅檔；冇 git merge/push；冇掂官方原圖；冇 Haruka 設計。

**本輪新量度（可重產）**
- 腳本：`research/performance_motion/rules_r2_scripts/analyze_rules_r2_pm.py`（相對 ROOT＝腳本上兩層；`--root`／`--out` 可改）。一條指令：`python3 research/performance_motion/rules_r2_scripts/analyze_rules_r2_pm.py`
- 輸出：`research/performance_motion/rules_r2_img/R2_G15_bboxtop_vs_head_squares.png`（md5 9036287bfb290849dd120f3a12ea9e7e）、`rules_r2_img/metrics.json`（md5 155a7fd97a710bd4d81e4d9c8ed72380）。連跑兩次 md5 一樣；`--out /tmp/r2alt` 由第二個 cwd 跑，PNG md5 一樣。官方圖 38 個 md5 對我哋 I3 OFFICIAL 表全部 OK（記喺 metrics.json `official_md5`）。
- 輸入遮罩：我哋 I3 嘅 tight 剪影 `i3_img/EXNN/<unit>_sil.png`（官方 alpha≥128 matte；EX02／EX04 紙白遮罩；EX14 剔劍＝tv_simplify v2 人手多邊形）。每個 sil md5 記喺 metrics.json。冇用色閾髮遮罩（R3）。
- **定義**（通道：全身 tight 剪影＋頭肩方框，正面／背面照原圖；唔係 h64 縮圖主張）：
  - HEAD 框＝人手地標（IMAGE_REVIEW，喺 5%／2% 格線放大圖讀）：頭髮／頭飾頂 → 下巴；左右含頭飾，唔含下巴以下長髮。
  - `head_top_offset`＝(HEAD 頂 − bbox 頂)／bbox 高；≈0（−0.008…0.008，負數係 I3 pad）＝bbox 頂就係頭。
  - bbox 頂方框＝邊長 0.25×bbox 高，頂＝bbox 頂，中心 x＝頂部 0.25 高行內前景平均 x；頭錨方框＝同邊長，頂＝HEAD 頂，中心＝HEAD 中心。`square_IoU`＝兩框 IoU。冇通用門檻；IoU 低亦可以係我 HEAD 框闊（例如 EX01 側髮），所以 G15 判定以 offset＋目視「持物／手入唔入 HEAD 框」為主，IoU 輔助。
  - 層帶：bbox 高某帶內每行左右端 span 嘅最大值／另一帶中位數。
- 靜態圖，冇動畫、布料、觀眾 PASS。

**R4 裁決點處理（我哋 R1 IoU 數）**
- 0.963／0.970（EX01 同衫平靜 vs 哭）：照准用，只寫「內收手勢幾乎唔改全身外包絡」。
- 0.769／0.770（EX01 平民 vs 戰鬥，配對姿勢）：只寫外包絡差；唔寫改稿幅度、身份分、「換咗 23%」。
- 0.821（EX14 同姿勢含／剔劍）：只寫持物效應，XOR 約 92% 喺 0–60% 高度帶，註明剔劍遮罩＝tv_simplify v2 人手多邊形。
- 0.708（EX14 剔劍 vs TV 卡）：**唔引**，只寫「混淆，唔量」。
- 0.42（EX05 char_s vs char_s2）：**唔引做載體幅度**，只寫「載體同姿勢分唔開」。
- 亦唔用：我哋 I4 ERRATUM E1–E3、head_hair EX03／04／11／14 髮區數、REF v7 §11 數、其他已列作廢數。

## 1. 投票（12 條）

| 規則 | 票 | 取代句（AWE 先填） | 圖像證據（路徑＋數字＋點量＋通道） |
|---|---|---|---|
| G03 | ACCEPT | — | 我哋 R1 修改（宣傳立繪姿勢唔算一欄）已收入第 3 點。EX05 日常 IoU 0.55 已標「含姿勢（R4）」，冇當幅度。`research/performance_motion/img_examples_20261110/analysis_v2/01b_sheet_pair_color.png`（全身彩色，正面，目視）。 |
| G05 | ACCEPT | — | 限制已寫「EX04 頭剪影被持物穿過（見 G15）」。本輪佐證：EX04 battle `head_top_offset` 0.25、bbox 頂方框 vs 頭錨方框 IoU 0.0012（`rules_r2_img/metrics.json`；tight 剪影＋頭肩方框，正面）→ 形錨必須用以頭為錨嘅頭部裁切，唔可以用 bbox 頂裁切；同 G05「形錨＝頭部彩色裁切 64」唔衝突。EX02 島崎原句由整合者核到，我哋 R1 已 fetch。 |
| G06 | ACCEPT | — | 「姿勢同持物入表（PM）」已收入。EX14 含劍寬高比 0.7443 vs 剔劍 0.5801（本輪再量一致；`metrics.json` layer_extras；全身 tight 剪影，正面）＝持物層，唔係減法幅度。 |
| G07 | ACCEPT | — | 「表演件（掩面、手勢）都要指定通道」已收入；EX01 0.963／0.970 照 R4 准用句。本輪：EX01 civ_cry 雙手喺 HEAD 框內（目視，`rules_r2_img/R2_G15_bboxtop_vs_head_squares.png` 第 1 行），全身框冇變（寬高比 0.6275 vs 0.6246，本輪量）。舉手同樣會令 bbox 頂唔係頭，我建議喺 G15 補（見 G15）。 |
| G08 | ACCEPT | — | 冇本輪 PM 反證；PM 冇量相鄰對比。 |
| G09 | ACCEPT | — | 冇 PM 反證；PM 範圍只同意「夜景／劇照照明≠意圖」（EX07 係劇照，我哋 I3 標 NT）。 |
| G10 | ACCEPT | — | 「可動要用代表動作驗」已收入；「正面全身或填實 64 證唔到」同我哋 R1 一致。靜態圖唔當動作 PASS。 |
| G11 | ACCEPT | — | 「穿法係咪存活睇媒介可動」已收入；provisional 狀態誠實。EX05 0.964／0.481／0.441 係同一角色局部份額，唔係跨姿勢 IoU，R4 OK。 |
| G12 | ACCEPT | — | (a) 引 0.963／0.970 vs 0.769／0.770，限制寫「IoU 數只量外包絡（R4）」；EX05 0.42 只寫「分唔開」——同 R4 裁決一致。`lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/rerun_pm/R1_pose_vs_carrier_iou_overlays.png`（全身 H=256 NEAREST 底對齊 IoU，正面）。(b) provisional 合理。 |
| G13 | ACCEPT | — | 「唔准寫宣傳姿勢入去（PM）」已收入。 |
| G14 | ACCEPT_WITH_EDITS | 講「剪影」之前先寫係邊層：**人體／衣物／頭髮頭飾／持物／姿勢**；量之前先剔**非角色層**（設定稿手寫註、模特兒架、背景殘留）。設計主張落喺邊層就喺嗰層量同驗；全身外包絡（bbox、寬高比、全身 IoU）混埋幾層，唔可以當身份或者改稿幅度（R4）。可選用 FS 描述：錨點 → 擴張 → 收尾。 | (1) EX08 `i3_img/EX08/far_worn_sil.png`：bbox 頂 9.1% 高度係模特兒頸桿（每行 span＜0.10W 連續行／bbox 高；`metrics.json` EX08_far_worn；全身 tight 剪影，正面）。(2) EX02 B1 正面設定稿：手寫註筆劃喺紙白遮罩入面（目視，`i3_img/EX02/b1_front_color.png` 右上 x≈0.68、y≈0.04–0.10）。兩者都會入 bbox／IoU。(3) 同時佐證頭髮層主導外包絡：EX02 B2 正面 35–55% 帶最大 span 0.660 H vs 70–90% 腿帶中位 0.107 H（比 6.18；B1 正面 2.42）——全身框主要係髮披翼，唔係衣物（`metrics.json` layer_extras；全身 tight 剪影，正面）。 |
| G15 | ACCEPT_WITH_EDITS | 持物（武器、槍、披巾、浮遊件）同**舉起嘅手／表演手勢**可以主導全身外包絡、令 bbox 頂唔係頭、或者闖入頭框。設計時：1）寫明持物或手勢係咪識別件／刻意表演件（係就喺 G07 指定通道）；唔係就喺宣傳／縮圖構圖入面令佢離開頭部安全區。2）頭像通道裁切以頭為錨——**頂同中心 x 都以頭定**，唔以 bbox 頂或者頂部前景重心定；人手 QC。3）識別句唔靠持物，除非持物本身係主張。 | `rules_r2_img/R2_G15_bboxtop_vs_head_squares.png`＋`metrics.json`（tight 剪影＋頭肩方框；正面，EX02 b1_back 背面）：**舉手**：EX12 cure offset 0.115、IoU 0.309（舉臂做 bbox 頂，冇持物）；EX09 cafe_chi 舉拳喺頂行，IoU 0.611；EX09 lyc_taki 手入 HEAD 框（目視）。**中心 x 偏**：EX02 b1_back bbox 頂＝頭（offset ≈0），但伸臂＋槍喺頂 25% 帶，IoU 0.324；EX14 含劍 offset 0.008，IoU 0.416（劍喺頭左，冇入 HEAD 框）。**持物入頭框**：EX04 battle offset 0.25、IoU 0.0012；EX05 怪盗刀刃＋手套喺 HEAD 框內（目視），IoU 0.868。**「會」改「可以」**：EX14 劍冇入頭框（目視＋offset 0.008）——原句「亦會闖入頭框」唔係每例成立。 |

票數：ACCEPT 10、ACCEPT_WITH_EDITS 2、REJECT 0。

## 2. G14／G15 × 14 例

代碼：S＝支持、C＝反例／部分反例、NA＝規則條件唔適用、NT＝未測。數字來源：〔R2〕＝本輪 `rules_r2_img/metrics.json`；〔v7〕＝v7 有效數；〔重產〕＝整合者重產。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G14 | S：寬約 1.20 vs 面積約 1.01〔v7〕；同衫姿勢 IoU 0.963／0.970 vs 配對姿勢 0.769／0.770〔重產〕＝姿勢層同載體外包絡分開讀（只係外包絡差） | S：B2 正面髮披翼帶 span 0.660 H vs 腿 0.107 H（比 6.18）〔R2〕＝頭髮層主導全身框；設定稿手寫註入遮罩（目視）＝非角色層 | S（弱）：寬高比 クルミ 0.481 vs ユズ 0.387〔R2〕，クルミ伸手（姿勢層）＋ユズ長髮（頭髮層）混埋；規定制服相同，全身框差唔係衣物層 | S：全身 IoU 約 0.13 vs 頭部裁切 0.56〔v7〕；battle bbox 頂係刃翼／槍，頭由 0.25 H 先開始〔R2〕 | S：char_s vs char_s2 只寫「載體同姿勢分唔開」（R4）；hero 日常 vs 怪盗寬高比 0.426 vs 0.861〔R2〕混披風＋姿勢＋刀，只係外包絡差 | NA：直立、冇持物，外包絡≈衣物層（寬高比 0.610／0.516〔R2〕），分層唔改結論 | NT：劇照，冇遮罩 | S：bbox 頂 9.1% 係模特兒頸桿〔R2〕＝非角色層 | S：全身 IoU 約 0.53，差約 88% 喺肢體〔v7〕＝姿勢層 | S：ミステル bbox 大，但穿法外伸喺ノワール〔v7〕；寬高比 0.338 vs 0.419〔R2〕同穿法結論相反 | NT：寬高比 0.374 vs 0.257〔R2〕，但大衣／姿勢冇分層量 | S：cure bbox 頂係舉臂，頭頂喺 0.115 H〔R2〕＝姿勢層入全身框 | S：尾尖約 0.68–0.69 H vs 膝環 0.73–0.74 H〔v7／I4 整合〕＝喺頭髮層、側面量 | S：含劍 0.7443 vs 剔劍 0.5801〔重產；R2 再量一致〕；同姿勢含／剔劍 IoU 0.821，XOR 約 92% 喺 0–60%〔重產；tv_simplify v2 人手多邊形遮罩〕 |
| G15 | S（表演手勢分支，要 AWE）：冇持物；cry 雙手喺 HEAD 框內（目視）；offset ≈0，IoU 0.63–0.85〔R2〕；原文淨講持物＝NA | S（裁切中心）：b1_back bbox 頂＝頭（offset ≈0），伸臂＋槍拉偏頂部重心，IoU 0.324〔R2〕；槍冇入 HEAD 框；其餘 3 張 IoU 0.85–0.92 | NA：冇持物、冇舉手；offset ≈0，IoU 0.93／0.91〔R2〕（對照） | S：battle offset 0.25、IoU 0.0012〔R2〕；槍喺頭旁穿過（目視）；private 0.000／0.82 | S：怪盗刀＋手套入 HEAD 框（目視），但 bbox 頂仍係頭（offset ≈0，IoU 0.868〔R2〕）；日常眼鏡喺下巴邊；其餘 6 個怪盗本輪冇量（CO 4／7 未由 PM 重量） | NA：冇持物；IoU 0.88／0.85〔R2〕 | NT：冇遮罩 | NA：冇頭（模特兒） | S（舉手分支）：cafe_chi 舉拳喺頂行，IoU 0.611；lyc_taki 手入 HEAD 框（目視）〔R2〕 | NA：冇持物；IoU 0.90／0.79〔R2〕 | NA：冇持物；手喺胸／下巴邊；IoU 0.73／0.91〔R2〕 | S（舉手分支）：cure offset 0.115、IoU 0.309〔R2〕；daily 0.74（冇持物，HEAD 框闊） | NA：A-pose 冇持物（目視；複雜背景遮罩唔可靠，冇量） | S（外包絡）＋C（入頭框）：寬高比 0.7443 vs 0.5801、IoU 0.821〔重產〕；劍冇入 HEAD 框（offset 0.008，目視），IoU 0.416 係重心偏〔R2〕；TV 卡 vs 剔劍 0.708 混淆，唔量 |

合計：G14 S 11、NA 1、NT 2；G15 S 7（其中 EX01、EX09、EX12 靠 AWE 嘅手勢／舉手分支）、C 1（EX14 部分：入頭框）、NA 6、NT 1（EX07）。EX14 一格 S＋C。

## 3. 歸類異議（可選）

- 冇異議反對 §6（PM P1→G12(a)、PM P2＋CO M1→G15、PM P3＋FS G02→G10）。
- 補充：G15 用途閘門已有「舉手姿勢」，但規則句淨講持物；我嘅 AWE 只係將閘門同規則句對齊，唔係新規則。

## 4. 對 G01／G02／G04 澄清句嘅意見（可選，唔投票）

- G01：「載體差要喺中性或配對姿勢下成立（PM；見 G12(a)）」同 R4 一致，冇意見。
- G02：PM 冇量度；EX13 數照 v7／I4 整合，冇意見。
- G04：PM 範圍外，冇意見。

## 5. 自我勘誤、限制

- 一手來源（本輪重新 fetch）：
  - TF2 NPAR07 講稿 https://cdn.fastly.steamstatic.com/apps/valve/2007/NPAR07_IllustrativeRenderingInTeamFortress2.pdf （curl＋pdftotext，PDF md5 87b07e8dde1ae968b72eb5e60c7ede9b）：「The body proportions, weapons and silhouette lines as determined by footwear, hats and clothing folds were explicitly designed to give each character a unique silhouette.」→ 支持 G15 第 1 點「持物可以係識別件，要寫明」；**唔支持**頭部安全區（講稿冇講裁切）。
  - アニメイトタイムズ 守屋×上内 https://www.animatetimes.com/news/details.php?id=1640588189&p=2 （2022-01-08）：「ペコリーヌの王冠はゲームだと（尖った部分が）5本ですけど、アニメだと3本しかないんです」；「キャルの杖の先端にある猫の飾りを少し簡略化している」（訪問者問句）→ 支持 G14「頭飾」同「持物」分層各自改。
  - 頭部安全區／以頭為錨裁切嘅業內一手：本輪冇搵，寫 NOT_FOUND；G15 第 2 點只靠圖像。
- HEAD 框係人手地標（單一研究員，冇第二人 QC）；誤差估 ±0.02 寬高。EX02 四張一開始讀錯（x 偏左），放大 2% 格線後已改，第一版輸出已被覆寫（只係我自己嘅新檔）。
- `square_IoU` 冇門檻；HEAD 框闊（長側髮）會拉低 IoU（EX01 civ 0.63、EX12 daily 0.74，冇持物）。所以 S／NA 以 offset＋目視為主。
- 本輪量全部喺 tight 剪影解像度，唔係 h64；冇 64 px 主張。可見≠認得≠記得：冇人測。
- 冇量：EX05 另外 6 個怪盗（CO 4／7 未由 PM 重量）、EX07（劇照）、EX13（遮罩唔可靠）、EX11 分層。
- 靜態圖：舉手／持物入頭框係單張構圖事實，唔代表動畫中嘅干涉；冇動畫、布料 PASS。
