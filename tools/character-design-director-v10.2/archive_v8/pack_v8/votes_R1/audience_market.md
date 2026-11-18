# RULES R1 VOTE｜audience_market（2026-11-10 21:15 HKT）

**鏡頭**：audience_market（AM）— 裁切通道第一眼存活、官方宣傳用法 vs 課文主張。  
**狀態**：IMAGE_REVIEW · TEXT_REVIEW · **PROVISIONAL** · **HUMAN_VALIDATION_PENDING**  
**讀過**：`RULES_FROM_EXAMPLES_DRAFT_R1_20261110.md`、`BRIEF_RULES_R1_20261110.md`、REF v7 §10／§11（**只用 §10 有效數**；唔用 §11 作廢數；唔引 HH draft 髮 mask）、AM I3／I4／I5。  
**新分析**：`img_examples_20261110/rules_r1_scripts/analyze_rules_r1_am.py` → `rules_r1_img/`（重用 i3 `crop_type_sheet`；**唔掂**官方原圖）。  
**可見 ≠ 認得 ≠ 記得 ≠ 喜好／銷量**；任何 64／128 主張寫通道。冇人測＝未測。

重產：
```bash
python3 research/audience_market/img_examples_20261110/rules_r1_scripts/analyze_rules_r1_am.py
# 等同：python3 research/audience_market/rules_r1_scripts/analyze_rules_r1_am.py
```

---

## 1. 投票

| 規則 | 票 | 取代句（AWE 先填） | 理由／圖像證據（路徑＋數字） |
|---|---|---|---|
| G01 | ACCEPT | | AM 通道板：日常載體唔靠舞台級外包絡分人；特殊載體另開。EX01 AM 面積比 **1.010**／寬 **1.184**（`i3_img/EX01/metrics.json` extra.r2；REF §10 約 1.01／1.2）。EX04 全身 64 戦闘第一眼槍＋刃翼、頭像先見丸子（`rules_r1_img/G07_EX04_crop_channels.png`，Read 核）。EX12 巨結／鐘形裙只喺變身行（`G07_EX12_crop_channels.png`）。TEXT：4Gamer 林P／リウイチ——私服戰唔夠型 → 開変身載體（URL 見 §6）。 |
| G02 | ACCEPT | | EX13 側面全身 64 長垂線、頭像 MAE **1.128**（AM I3 `icon_mae_rgb_lanczos_128`；REF §10）——改構喺全身側面通道，唔喺頭像。EX12 小夾全身 64 LOST → 變身巨結全身可見（`G07_EX12`）。EX07 三角 64 近消失、遠讀交面罩（AM I3）。TEXT：Riot `/dev: Modernizing the Monk`——放大既有馬尾入剪影，唔貼紙。 |
| G03 | ACCEPT | | EX03／09／10／11／05 共享文法＋一欄差。AM：EX03 頭像通道放大髮色差（I3 SUPPORT）；EX09 全身 64 紅／紺＋髮、貼臉頭像衣色大跌靠髮（I4／I5）。EX10 穿法喺全身、頭像外套 0–0.5%（REF §10）。TEXT：Febri いみぎむる——相棒極簡 → 千束加特徵，制服仍要「シルエットだけではっきりと誰かわかる」。 |
| G04 | ACCEPT_WITH_EDITS | **規則句改為**：「揀一個個人簽名色，寫明落點（髮／點色／大塊）、面積、場合；**並寫明佢要喺邊個觀看通道存活**（全身 64／頭像／官方縮圖）。唔假設簽名色＝最大面積。場合色用用途鎖住。」 | 理由：AM 核心——簽名色喺全身 vs 頭像可以相反（EX01 藍份額全身 0.026→0.162、頭框 0.015→0.16 方向同但比例不同；EX06 全身紅主導 vs 貼臉紅≤0.03）。原句缺通道。支持例維持。圖像：`G07_EX01`／`G07_EX06` crop boards；REF §10 EX01／EX06。TEXT：Platinum 島崎——鍵色青要兼視認性，面積唔能亂加大。 |
| G05 | ACCEPT_WITH_EDITS | **規則句改為**：「換載體時揀**一個**跨形態錨（形／色相／明度），寫明錨類型同**驗錨通道**（頭部彩色裁切 64 或全身 64）。衣物外包絡可以大變。」 | 理由：AM——錨唔寫通道會驗錯位（EX04 丸子唔好喺官方全身 64 驗；EX12 頭區 IoU 約 0.43 形已換、錨係紫系）。圖像：`G07_EX04`、`G07_EX12`；EX01 白髮兩態。TEXT：4Gamer 変身分載體；大暮白髮跨系列延續黒コート（G09 同源）。 |
| G06 | ACCEPT_WITH_EDITS | **「幾時用」後加一句**：「媒介簡化（減法）驗收用**官方已發佈縮圖／一覽圖**通道，唔好只用全身 64 判『睇唔到＝唔使寫入設定』（見 G07／G12）。減法分支暫標 SINGLE_EXAMPLE（EX14），加件分支有 EX01／04／12。」 | 理由：AM I3／I5——EX14 全身 64 王冠約 6–7 px 數唔到；官方 TV 一覽 176×246 可數 3 尖（`i3_img/EX14/`）。EX01 重分配面積≈1.01≠加量。圖像：`G07_EX14_crop_channels.png`。TEXT：Animate Times 守屋／上内——王冠 5→3、減線保色塊。 |
| G07 | ACCEPT | | **AM 主規則**。14 例中 13 例有多通道差（EX08 NA：舞台遠讀為主）。圖像全套：`rules_r1_img/G07_EX01`…`G07_EX14_crop_channels.png`（Read EX04／EX12）。數字：EX04 丸子 full64≈2–3 px vs 頭裁≈13–20；EX12 夾 full64≈2–3 vs 頭像≈7–12；EX06 貼臉紅≤0.03；EX13 頭像 MAE 1.128；EX14 官方縮圖可數尖（全部 REF §10 或 AM I3）。可見≠記得。 |
| G08 | ACCEPT_WITH_EDITS | **規則句改為**：「放識別件前，量佢同直接相鄰底嘅明度／色差，**並喺佢宣稱存活嘅通道**（全身 64 或頭像 64）目視會唔會併入底色。差太細會喺該通道消失。同色系角色另開明度差。」 | 理由：對比門檻喺通道之間唔同（EX12 粉 X ΔE76 11.3 全身 LOST、頭像色點仍在；EX03 黃結 vs 金髮 ΔE≈7 頭像併入）。圖像：`G07_EX12`、`G07_EX03`。TEXT：Febri 中谷——怕變モブ加ヘアアクセ；島崎鍵色視認性。 |
| G09 | ACCEPT | | EX01 戦闘更深色份額下降（更亮方向）；EX04／12／14 唔變暗；EX11 白髮 ΔL*≈60 vs 黒コート（REF §10 PSY v2）。圖像：`G07_EX01`、`G07_EX11`。TEXT：朝日新聞 and 大暮——白髮＝希望象徵，黒コート延續。照明主導幀唔診斷（EX07）。 |
| G10 | ACCEPT | | 圖像結果：EX02 前封後開（彩色背面 64 背窗膚色約 0.15–0.19，填實剪影 64 唔驗開合——AM／commercial I3）；EX08 遠讀一件破洞 0、近讀拉鏈（AM I3）；EX10 掛肘 3D 干涉→動畫先用。**次序「先根部」= TEXT**，圖只見結果。TEXT：Platinum 島崎原文「前面露出ゼロ…背面を多めに」。 |
| G11 | ACCEPT_WITH_EDITS | **支持例改為**：「主證 EX10（掛肘：上半寬 427 vs 271、淺份額約 0.32 vs 0.02；全身 64 可讀；頭像外套 0–0.5%）。弱旁證 EX05（日常着こなし＋色，剪影 IoU 0.55）——着法同色差未拆清，**唔升做第二獨立圖像例**。維持 provisional／近乎 SINGLE_EXAMPLE。」 | 理由：AM 喺 14 例搵唔到第二個「純穿法主識別」圖像例；EX05 混色。反例未見（冇人只靠穿法做到舞台級外包絡）。圖像：`G07_EX10`；REF §10 EX10。TEXT：電撃 neco——肘掛着崩係動畫先做到、對ミステル扣實。 |
| G12 | ACCEPT_WITH_EDITS | **支持例改為**：「主證 EX06（表情範圍 vs 眉固定點——**訪談**；公開像素量唔到 2°）。圖像旁證 EX14（王冠尖 5→3 要寫入設定；全身 64 唔可靠、官方一覽縮圖可數——AM I3／I5）。維持 SINGLE_EXAMPLE／provisional：表演範圍本身未有公開圖集。」 | 理由：AM 同意「縮圖唔可代替設定」；但 21 種表情集未圖像公開。圖像：`G07_EX14`。TEXT：Animate Times 芳我——表情集 21 種；眉 2 度。 |
| G13 | ACCEPT_WITH_EDITS | **規則句改為**：「每個主要角色寫一句『邊件、喺邊、靠乜（類型）、**喺邊個通道讀**』嘅識別句；類型照實標。路人可弱化但要標。」 | 理由：同 G07 對齊——唔寫通道會把 EX09 頭差填成衣物剪影、把 EX13 改構填成頭像差。圖像：總覽各 `G07_EX*`。 |

---

## 2. 規則 × 例子測試矩陣（13 × 14）

代碼：**S** 支持／**C** 反例／**NA** 唔適用／**NT** 未測。S、C 證據見 §3。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G01 | S | NA | NA | S | S | NA | NA | S | NA | S | NA | S | NA | NA |
| G02 | S | NA | NA | NA | NA | NA | S | NA | NA | NA | NA | S | S | S |
| G03 | NA | NA | S | NA | S | S | NA | NA | S | S | S | NA | NA | NA |
| G04 | S | S | S | NA | NA | S | NA | NA | S | NA | NA | S | NA | NA |
| G05 | S | NA | NA | S | S | NA | NA | NA | NA | NA | NA | S | NA | S |
| G06 | S | S | NA | S | S | NA | NA | NA | NA | NA | NA | S | S | S |
| G07 | S | S | S | S | S | S | S | NA | S | S | S | S | S | S |
| G08 | NA | NA | S | NA | NA | NA | S | S | S | NA | S | S | NA | NA |
| G09 | S | NA | NA | S | S | NA | NA | NA | NA | NA | S | S | NA | S |
| G10 | NA | S | NA | NA | NA | NT | NA | S | NA | S | NA | NA | NA | NA |
| G11 | NA | NA | NA | NA | S | NA | NA | NA | NA | S | NA | NA | NA | NA |
| G12 | NA | NA | NA | NA | NA | S | NA | NA | NA | NA | NA | NA | NA | S |
| G13 | S | S | S | S | S | S | S | S | S | S | S | S | S | S |

**矩陣備註（AM）**：本輪 **0 格 C**——未見圖像級「規則假」反例；多格 NA＝該例唔觸發規則前提（例如單一戰鬥載體、無共享制服、無跨形態）。G10 EX06＝NT（公開圖缺背／側扣位）。G11／G12 僅弱多例。

---

## 3. 證據（逐條；腳本／圖／數字／定義）

### 共用方法（今輪）
- **重用**：`research/audience_market/i3_img/EXNN/crop_type_sheet.png`＋`metrics.json`（LANCZOS 身高正規化；頭像＝tight-box 頂約 22% 方；胸像約 40%；灰底 #808080；mask=`am_i3_20261110_v1` 官方 alpha／paper——**唔做淡髮色閾**）。
- **新輸出**：`img_examples_20261110/rules_r1_img/G07_EXNN_crop_channels.png`（14 張）＋`metrics.json`／`matrix_13x14.json`。
- **定義**：全身 64＝人物框按高→64；頭像 22% h64；官方縮圖＝官方已發佈（EX14 176×246）。R2 寬／面積分開報。

### G01
- S：EX01／04／05／08／12／10（機體另載）。NA：單一載體或無日常／特殊對（EX02 續作改版≠開新場合載體；EX03／06／07／09／11／13／14）。
- 數：EX01 width_ratio **1.184** area **1.010**（AM I3）。EX04 寬高比 REF 0.29 vs 0.85。
- Web：https://www.4gamer.net/games/688/G068810/20230324056/ （今輪 WebFetch）

### G02
- S：EX13／12／07／01（結晶→翼目視）／14（減線升大塊權重，交 G06）。
- 數：EX13 MAE_RGB LANCZOS 128＝**1.1278**（AM I3）。整合者尾尖約膝（I5 已接受）。
- Web：https://www.leagueoflegends.com/en-us/news/dev/dev-modernizing-the-monk/ （今輪 WebFetch）

### G03
- S：EX03／09／10／11／05／06。NA：無共享規定 cast。
- Web：https://febri.jp/topics/lycoris_recoil_int2_1/ （今輪 WebFetch）

### G04
- S：EX03／02／09／12／06／01。AWE 加通道。
- 數：EX03 髮 ΔE≈37、制服≈0.1；ユズ結 vs 髮≈7（REF §10）。EX01 頭框藍 0.015→0.16。
- Web：https://www.platinumgames.co.jp/dev-bayonetta2/article/241 （鍵色青＋視認性）

### G05
- S：EX01／04／12／14／05。AWE 加驗錨通道。
- 圖像：`G07_EX04`（Read：全身戦闘＝槍翼；頭像先見丸子）。

### G06
- S 加件／重分配：EX01／04／12／02／05／13。S 減法：EX14（單例）。AWE：減法驗收用官方縮圖。
- 數：EX01 area≈1.01；EX12 casual→transform area_ratio AM I3 **1.538**（加件方向；定義：各 tight mask h512 NEAREST）。EX14 tip 5→3 官方一覽可見。
- Web：https://www.animatetimes.com/news/details.php?id=1640588189&p=2

### G07
- S：除 EX08 外全 S。核心證據板 14 張 `G07_*`。
- 數見投票表。Web：https://febri.jp/topics/trpr_1/ （中谷：バストショット要色數；日常細飾防モブ）

### G08
- S：EX03／12／11／08／07（近讀低對比有意）／09。AWE：對比喺宣稱通道驗。
- Web：Febri 中谷（同上）；Platinum 島崎視認性。

### G09
- S：EX01／04／05／11／12／14。
- Web：https://www.asahi.com/and/m/article/15806087 （大暮白髮＝希望）

### G10
- S：EX02／08／10。NT：EX06。(C) 構造未齊屬規則「幾時用」邊界。
- Web：Platinum 島崎ケープ前後交換（同上 241）

### G11
- S：EX10；弱 S：EX05。AWE 降 EX05 為弱旁證。
- Web：https://dengekionline.com/articles/218099/ （neco 肘掛着崩）

### G12
- S：EX06（TEXT 主）；S 旁證 EX14（尖數寫入）。AWE 標清。
- Web：https://www.animatetimes.com/news/details.php?id=1763696173 （芳我 21 表情／眉 2 度）

### G13
- S：14 例均可寫識別句；AWE 強制通道欄。
- 與 G07 交叉驗證。

---

## 4. 單例／未支持項回應

| 項 | AM 結論 |
|---|---|
| **G06 減法** | 14 例內**只得 EX14** 圖像撐「媒介減線／保大色塊」。未搵到第二減例；EX07 紋理近讀≠媒介減法。→ 維持 **SINGLE_EXAMPLE**；驗收通道跟 G07（官方縮圖）。 |
| **G11** | 主證 **EX10**；EX05 着こなし**未同色差拆清**，唔算獨立第二圖像例。未搵到「穿法做成舞台級外包絡」反例。→ **近乎 SINGLE_EXAMPLE**。 |
| **G12** | 主證 **EX06 訪談**；圖像旁證 **EX14 尖數**。21 種表情集／2° **未公開圖像**。→ 維持 provisional。 |
| **簽名主件後備**（v7 §5） | 14 例**圖像未見**「簽名色失效→單品承接」。EX07 項鍊可拆＝Carter 文本。→ **NOT_FOUND（圖像）**；建議保留作者政策、唔升規則。 |
| **隱藏第二層**（v7 §10） | 14 例**圖像未展示**隱藏層本體。→ **NOT_FOUND（圖像）**；維持預設關。G09 只撐「唔用衫色診斷創傷」。 |

---

## 5. 缺漏規則提案（每條 ≥2 例圖像）

### G14｜官方已發佈宣傳裁切係第一類驗證通道（AM）
- **規則**：除自製全身／頭像 64 外，凡官方已發出嘅商品式縮圖、宣傳臉、角色一覽圖，都要列做獨立通道；細部改動（尖數、小飾）優先喺呢啲通道驗，唔好只報「全身 64 睇唔到」。
- **幾時用**：有官方商店／官網／放送一覽圖嘅作品。**唔用**：只有單張設定、無官方縮圖時標 NT。
- **支持例**：EX14（TV 一覽 176×246 可數王冠尖；全身 64 唔可靠）——`i3_img/EX14/`、`G07_EX14`；EX06（官方宣傳臉禮裝色幾乎唔入框）——I5／commercial 路徑；EX13（Data Dragon 頭像 MAE≈1.13，改構唔入頭像）——AM I3。
- **點驗**：下載官方縮圖原生像素（唔二次縮放作來源）；人手數／MAE 寫協議。

### G15｜同一識別主張唔好跨通道偷換（AM）
- **規則**：寫「64 px 仍可見／LOST」時，禁止把全身 64 結果講成頭像結論（或相反）；一句只綁一個通道。
- **支持例**：EX12（全身 LOST vs 頭像色點）`G07_EX12`；EX04（全身刃翼 vs 頭像丸子）`G07_EX04`；EX09（全身衣色 vs 貼臉髮明度）。
- **點驗**：G07 詞彙表強制標通道。

（G14／G15 同 G07 相關但獨立：G07＝設計時分配通道；G14＝官方資產亦係通道；G15＝寫作禁令。）

---

## 6. Web 一手來源（今輪實際打開）

| 規則 | URL（今輪 WebSearch／WebFetch） | 角色 |
|---|---|---|
| G01 | https://www.4gamer.net/games/688/G068810/20230324056/ | 支持（変身分載體） |
| G01 旁 | https://cgworld.jp/regular/201811-c-ntny-furyu.html | 支持（ntny 剪影／変身提案；搜尋命中，未另 Fetch） |
| G02 | https://www.leagueoflegends.com/en-us/news/dev/dev-modernizing-the-monk/ | 支持（馬尾入剪影／clarity） |
| G03 | https://febri.jp/topics/lycoris_recoil_int2_1/ | 支持（特徵集中／シルエット分人） |
| G04／G10 | https://www.platinumgames.co.jp/dev-bayonetta2/article/241 | 支持（鍵色視認性；前後開合） |
| G06／G12 | https://www.animatetimes.com/news/details.php?id=1640588189&p=2 | 支持（王冠 5→3；減線保色） |
| G07／G08 | https://febri.jp/topics/trpr_1/ | 支持（細飾防モブ；胸像色數） |
| G09 | https://www.asahi.com/and/m/article/15806087 | 支持（白髮＝希望） |
| G11 | https://dengekionline.com/articles/218099/ | 支持（着崩／對扣實） |
| G12 | https://www.animatetimes.com/news/details.php?id=1763696173 | 支持（21 表情；眉 2 度） |
| G05 | （同 G01 4Gamer 変身；同 G09 大暮黒コート延續） | 部分支持 |
| **簽名主件後備** | — | **NOT_FOUND**（一手訪談未搵到「色失敗→單品後備」通則；EX07 Carter 文本唔升） |
| **隱藏第二層** | — | **NOT_FOUND**（一手未搵到圖像＋訪談示範隱藏層本體） |

**來源數**：今輪成功打開／核實一手 URL **10** 條（表內主列）；另搜尋命中未 Fetch **1**（CGWORLD ntny）。**NOT_FOUND 條目：2**（簽名主件後備、隱藏第二層）。Fan wiki／Wikipedia 未用。

---

## 7. 自我勘誤、限制

1. AM I3 曾誤寫 EX03「踢腳」——I5 已改；本票姿勢跟整合核圖。
2. 本票**唔引** HH draft 髮％／L*；EX03／04／11／14 髮面積用 REF §10 凍結多邊形或 NOT_REPORTED。
3. 矩陣 0 反例 ≠ 規則已人測通過；全部 PROVISIONAL。
4. Web 來源證**設計師意圖／工序**，唔證觀眾記得；同圖像結論分開標 TEXT_REVIEW vs IMAGE_REVIEW。
5. 未改 v7／REF／I1–I5／草稿；未 git merge／push；未做 Haruka 設計。

（完）
