# RULES R2 VOTE｜audience_market（2026-11-10 21:43 HKT）

**鏡頭**：audience_market（AM）— 裁切通道第一眼、官方宣傳用法。  
**狀態**：IMAGE_REVIEW · TEXT_REVIEW · **PROVISIONAL** · **HUMAN_VALIDATION_PENDING**  
**讀過**：`MSG_RULES_R2_20261110.txt`、`BRIEF_RULES_R2_20261110.md`、`RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md`、`INTEGRATION_RULES_R1_20261110.md` §3／§4／§6。  
**範圍**：只投 12 條（G03、G05–G13、G14、G15）；G01／G02／G04 唔投票。  
**數字**：REF v7 §10 有效數／AM I3 新量（寫定義）；唔用 §11；唔引 HH draft 髮 mask。  
**可見 ≠ 認得 ≠ 記得**。跨姿勢／持物全身 IoU 唔當身份分（R4）。

重產：
```bash
python3 research/audience_market/img_examples_20261110/rules_r2_scripts/analyze_rules_r2_am.py
# 等同：python3 research/audience_market/rules_r2_scripts/analyze_rules_r2_am.py
```

---

## 1. 投票（12 條）

| 規則 | 票 | 取代句（AWE 先填） | 圖像證據（路徑＋數字＋點量＋通道） |
|---|---|---|---|
| G03 | ACCEPT | | 規定欄→主差欄＋並行通道＋每欄寫通道——同 AM 通道紀律一致。EX03：制服 ΔE≈0.1、髮≈37（REF §10）；頭像通道髮差放大（AM I3；`rules_r1_img/G07_EX03_crop_channels.png`）。EX09：全身 64 紅／紺＋髮；貼臉頭像衣色大跌靠髮 ΔL*≈63–69（REF §10）。EX10：主差＝穿法（全身）；並行＝髮／領（頭像外套 0–0.5%）。「邊個揀」圖像見唔到＝TEXT（已標）。 |
| G05 | ACCEPT | | 錨類型擴到頭飾／穿法／組合＋新底色仍要對比＋寫通道——吸納 AM R1 AWE。EX04：全身 IoU≈0.13 vs 頭裁≈0.56（形錨；REF §10）；`rules_r2_img/G14G15_EX04_annotated.png`（Read：戦闘全身＝槍翼外包絡，頭像先見丸子）。EX12：頭區 IoU≈0.43、錨＝紫系；AM 面積比 **1.538** vs 寬 **1.038**（`i3_img/EX12` r2；定義 h512 NEAREST mask）。EX01：白髮跨形態；白 vs 白戰鬥服對比要驗（CV 提醒合理）。EX02 明度錨＝TEXT＋圖結果。 |
| G06 | ACCEPT | | 四路徑＋接手件＋官方縮圖驗收——吸納 AM R1 AWE。減法＝選項／圖像單例／有文本反例——同意。EX01：AM 寬 **1.184**／面積 **1.010**（重分配）。EX14：全身 64 尖數唔可靠；官方 TV 一覽 176×246 可數 3 尖（`rules_r1_img/G07_EX14_crop_channels.png`；REF §10）。TEXT（今輪 WebFetch）：本庄「線が間引かれ」https://www.valkyria-anime.com/special/interview/03-01.html 。 |
| G07 | ACCEPT | | **官方已發佈縮圖＝第一類通道**（AM R1 G14 已 MERGE）＋視角＋頭錨 QC——完全接受。證據：AM `rules_r1_img/G07_EX01`…`EX14`；EX13 頭像 MAE **1.128**（LANCZOS 128；AM I3）；EX06 貼臉紅≤0.03；EX04 丸子 full64≈2–3 vs 頭裁≈13–20（REF §10）。EX08 NA（舞台遠讀）合理。 |
| G08 | ACCEPT | | 「喺宣稱通道目視」＋同色件靠外輪——吸納 AM R1 AWE。EX12：粉 X ΔE76 11.3 全身 64 LOST、頭像色點仍在（`G07_EX12`）。EX03：黃結 vs 金髮 ΔE≈7 頭像併入（REF §10）。EX04：銀白丸子靠外輪（頭像通道；`G14G15_EX04`）。 |
| G09 | ACCEPT | | 兩邊公式都禁＋照明≠意圖＋識別≠診斷——同 AM「可見≠記得／診斷」。EX01 戦闘更深色份額降（更亮方向）；EX12 兩態 L*≈70；EX11 白髮 ΔL*≈60（REF §10 PSY v2）。意圖仍 TEXT。 |
| G10 | ACCEPT | | 支撐類型／長垂件終點／正面填實 64 證唔到——AM 同意（EX02 開合唔用填實 64 驗；彩色背 64 只證缺口）。EX13 尾尖到膝（I5 已接受）。EX06 (C) 未齊合理。 |
| G11 | ACCEPT | | EX10 主證＋EX05 第二例但 provisional（穿法混內層色）——同 AM R1「EX05 唔升純第二例」一致；草稿已標 provisional，**唔再 AWE**。圖像：`G07_EX10`；FS／IDC G11 圖（他方；AM 未重產軀幹 L* 數，只接受方向）。頭像要另有分人件（G07）——同意。 |
| G12 | ACCEPT | | (a) 資料包 CONFIRMED／(b) provisional——同 AM R1。EX14 尖數寫入設定＋官方縮圖通道（AM I3／I5）。(b) 21 表情／2° 仍無公開圖像——維持 provisional OK。 |
| G13 | ACCEPT | | 類型＋載體＋**負責通道**＋組合／最近鄰——吸納 AM R1 AWE。EX11 頭像兄弟髮 ΔE≈3–5、領口暗份額 0.39 vs 0.12（REF §10）。唔用全身 IoU 做身份——同 G14。 |
| G14 | ACCEPT | | 剪影分層；全身外包絡≠身份——AM 強烈支持（R2／I3 一直分開報寬 vs 面積）。見 §2 矩陣。關鍵數：EX01 寬 1.184／面 1.010；EX10 寬比 1.241／面比 0.808（結論相反）；EX04 戦闘外包絡 vs 頭層；EX14 含劍寬高比 0.744 vs 剔劍 0.580（整合者重產；`qa_game_sword_overlay_v2.png` Read：粉遮罩＝劍層）。 |
| G15 | ACCEPT | | 持物主導外包絡＋闖入頭框；頭像以頭為錨——AM EX04 已用人手 `battle_head_override`（head_top_y=220）避槍。EX12 変身舉臂污染 avatar22（`G14G15_EX12_annotated.png` Read）。EX05 怪盗 hs64 見棍／刀／大帽羽（`commercial/.../EX05_everyday_vs_thief_sheet.png` Read；**唔引**未重產 TVD 數）。EX14 劍層粉遮罩主導上半（同上）。TEXT：本庄「胸から上が一番表示される」（今輪 Fetch 同上 URL）。 |

---

## 2. G14／G15 × 14 例

代碼：**S** 支持／**C** 反例／**NA** 唔適用／**NT** 未測。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G14 | S | NA | NA | S | S | NA | NA | NA | S | S | NA | S | S | S |
| G15 | NA | NA | NA | S | S | NA | NA | NA | NA | NA | NA | S | NA | S |

### 格註（AM；S 必有圖或有效數）

| 例 | G14 | G15 |
|---|---|---|
| EX01 | S：寬 1.184≠面積 1.010（`i3_img/EX01` r2；全身 mask h512） | NA：無持物闖入頭框 |
| EX02 | NA：AM 主張係開合構造，唔係外包絡身份 | NA |
| EX03 | NA：身份＝髮色通道，唔靠全身外包絡 | NA |
| EX04 | S：戦闘全身外包絡＝槍＋刃翼；頭層另裁（`G14G15_EX04`；REF 全身 IoU≈0.13 vs 頭 0.56） | S：`battle_head_override` 避槍；頭像以頭為錨 |
| EX05 | S：日常／怪盗剪影差含姿勢＋載體（R4 警告即分層理由；`G07_EX05`） | S：怪盗 hs64 武器／大帽入框（CO sheet Read） |
| EX06 | NA：禮裝大色塊係衣物層主張，無層衝突要拆 | NA |
| EX07 | NA：母題近讀，唔做外包絡身份 | NA |
| EX08 | NA：遠讀一件＝衣物層單一主張 | NA |
| EX09 | S：全身 IoU 受信拳姿勢層（REF 剔框後升；R4） | NA：拳＝姿勢，唔當持物 G15 |
| EX10 | S：bbox 闊 Mystere 大但面積 Noir 大（寬比 1.241／面比 0.808；`i3_img/EX10`） | NA：穿法≠持物 |
| EX11 | NA：身份＝明暗／領口 | NA |
| EX12 | S：変身面積 1.538 vs 寬 1.038（加體積層；`G14G15_EX12`） | S：Cure Coral 舉臂入 avatar22／48 |
| EX13 | S：側面長垂＝頭髮構造層；頭像 MAE 1.128 幾乎唔變（通道分層） | NA：AM 頭像通道無武器主張 |
| EX14 | S：劍層改寬高比 0.744→0.580（整合者；劍 overlay Read） | S：劍主導上半外包絡；宣傳／縮圖要處理持物 |

**本輪 G14／G15：0 反例（C）。**

---

## 3. 歸類異議（可選）

**無異議。**
- AM R1 **G14（官方縮圖通道）→ MERGE G07**：正確；R2 G07 已寫「官方已發佈縮圖係第一類通道」。
- AM R1 **G15（唔跨通道偷換）→ KEEP 量度規則 v7-R5**：正確；屬寫作／量度禁令，唔係設計動作。G07／G13 已覆蓋設計側「寫明通道」。

---

## 4. 對 G01／G02／G04 澄清句嘅意見（可選，唔投票）

- **G01／G02**：澄清可接受；無改壞意思。
- **G04**：加「通道」同「≠最大 k-means 塊」——同意；灰階條件句保持 POLICY 唔升級，合理。

---

## 5. 自我勘誤、限制

1. CO EX05 sheet 嘅 TVD／dL 數係他方新量、整合者未重產——本票只作**目視**（武器／帽入 hs64），**唔引 TVD 數做主證**。
2. EX14 剔劍 IoU 0.821／寬高比 0.744 vs 0.580 用整合者重產／REF；AM 未重算剔劍遮罩（只 Read overlay QC）。
3. G11 EX05 軀幹 L* 份額未由 AM 重產——接受草稿 provisional 標籤。
4. Web：今輪 Fetch 本庄對談 1 URL；其餘沿用 R1 已打開來源，唔重複當「新作」。TF2 講稿整合者未再核——本票**唔作主證**（NOT_FOUND 作主證）。
5. 未改 v7／REF／R1–R2 草稿／整合檔／他人投票；未掂官方原圖；未 git merge／push；未做 Haruka 設計。

### Web／NOT_FOUND（今輪）

| 項目 | 結果 |
|---|---|
| 本庄雷太「胸から上」「線が間引かれ」 | 打開 https://www.valkyria-anime.com/special/interview/03-01.html （G06／G07／G15 TEXT） |
| TF2 weapons＋silhouette 講稿作 G15 主證 | **NOT_FOUND／未再核**——唔用 |
| 簽名主件後備／隱藏第二層（作者政策） | 仍 **NOT_FOUND（圖像）**——唔升規則（同 R1） |

（完）
