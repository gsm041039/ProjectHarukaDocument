# RULES FROM EXAMPLES R2 投票（originality）

- 身分：originality／collision-risk 研究
- 時間：2026-11-10 21:47 HKT（Asia/Hong_Kong）
- 本輪範圍：只投 12 條——新規則 G14、G15，以及實質改寫嘅 G03、G05、G06、G07、G08、G09、G10、G11、G12、G13。唔投 G01／G02／G04（澄清；意見放 §4）。規則正文以 `RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md` 為準；brief 贏草稿。
- 本檔只係新投票檔。未改 v7、REF、I1–I5、R1 投票、草稿、官方原圖或其他隊檔。無 git merge／push。無生成圖（本輪板全部係官方像素裁切／縮放／灰階／疊框，檔名標 PROXY）。
- 數字只引用 REF v7 §10 仍有效值，或本輪 `rules_r2_scripts/analyze_r2_g14_g15.py` 新量（定義寫喺各例 `metrics.json` 同下面「量度定義」）。不用已作廢數（包括但不限於：EX03 44.33%／35.64／0.39、EX13 自動 IoU 同 splash 13.31、EX14 v1 nosword、EX14 跨畫布 0.708 當改寫幅度、EX06「brown cloak」、EX09 HSV 自動、I3 EX01 寬比 1.162、I1 EX13「近小腿」、I3／I4 EX03「抬腿」、I3 v2 框「含金尖」）。
- 可見 ≠ 認得 ≠ 記得。64／128 主張必寫通道同定義。隊內分化／外部相似／法律風險分開寫；本輪無法律評級。

## 量度定義（本輪）

- 腳本：`/workspace/haruka/research/originality/rules_r2_scripts/analyze_r2_g14_g15.py`（共用 `/workspace/haruka/research/originality/i3_scripts/i3_common.py`）。輸出：`/workspace/haruka/research/originality/rules_r2_img/EXNN/`。一條指令重產：`python3 /workspace/haruka/research/originality/rules_r2_scripts/analyze_r2_g14_g15.py`。
- 來源 SHA256／MD5：每例 `metrics.json` 記錄官方檔 SHA256；腳本啟動時核對 I3／I4 用過嘅 MD5，唔對就中止、唔覆寫官方檔。
- 縮放：PIL `Image.Resampling.LANCZOS` 高度歸一（緊 bbox 高 = 512 或 64）；闊跟比例。已細嘅檢查圖先至用 NEAREST 顯示像素，唔作正式量。
- 色彩空間：工作空間 sRGB 8-bit。本輪板主要係幾何／剪影，未另報 ΔE00。
- 遮罩：優先官方 alpha≥128。EX03 身體／外包絡用 α≥200（同 I3 身體比較門檻；本輪另核過 α≥128，Yuzu／Kurumi h512 寬同為 198／246，結論唔變）。EX02／EX04 JPEG 白底 t=250（淺色刀翼會侵蝕，本輪引 aspect 唔引 solidity）。EX07／EX08／EX13 無官方角色 alpha：只做紀錄窗嘅目視裁切，外包絡面積數標 NT，無 GrabCut。
- 通道：全身填實 64 = 緊 matte 高度歸一到 h=64 再填實；naive bbox 頂方框 64 = 以全身 bbox 頂為準、邊長 0.28×bbox_h 嘅正方形，再 LANCZOS 到 64×64；頭錨 64 = 有紀錄 ICON／頭框就用（官方畫布座標，獨立重裁），否則用「第一質量」估計（見下），再 64×64。官方已刊頭像係第一通道（G07），本輪有紀錄就並陳。
- 頂帶啟發式（唔係頭髮遮罩，必須目視 QC）：頂 5% bbox 高嘅行寬／最大行寬；< 0.35 標 spike；第一質量 y = 行寬首次 ≥ 0.35×最大行寬；`protrusion_frac = (y_mass − bbox_top) / bbox_h`。寬道具（鞭、舉臂、手套）可以唔觸發 spike，目視先算數。
- EX14 v2 剔劍剪影（297×512，黑底白／或相反單通道剪影）同官方遊戲立繪（2288×2696）唔係同一畫布，本輪只獨立量 h512／原生 aspect 同寬，唔自造跨畫布 IoU。整合者複現嘅同畫布 nosword IoU 0.821 只作引用，唔當本輪新量。
- 重現：同一腳本跑兩次（主目錄同 `--out /tmp/rules_r2_img_rerun`），36 個產物 SHA256 全部一致（`rules_r2_scripts/REPRODUCIBILITY.json`）。JSON 唔寫絕對輸出根路徑。

---

## 1. 十二條投票

| 規則 | 票 | 理由（圖像／點量要點） |
| --- | --- | --- |
| G03 | ACCEPT | 改寫後「結構本體／可替外飾」分層，同本輪 G14 層語一致。EX02 開合、EX08 遠讀一件、EX10 掛披方式，都係結構層而非「全身外包絡 = 身份」。無反例。 |
| G05 | ACCEPT | 草稿已採納 R1 我方 AWE：錨可以係書面穩定組合，唔限單一顏色塊。EX14 橙髮＋白裙＋藍軀、EX11 銀髮＋黑衣淺繃帶，正係組合錨。唔再要求改句。 |
| G06 | ACCEPT | 正文已標「選項而非通則」，並收咗足立「なるべく線を減らさず」作反例；圖像單例仍係 EX14 剔劍。本輪 h512 含劍 aspect 0.7441（寬 381）vs 剔劍 0.5801（寬 297）支持「可減」但唔支持「必須減」。無再改句。本輪未重開渡辺／高藤／本庄／足立網頁，唔當一手出處（見 §5）。 |
| G07 | ACCEPT | 官方已刊頭像係第一通道。EX14 頭像框 64 留住皇冠組合；EX06 頭像 64 紅／藍近 0（I4 有效數），全身 64 先分開。同 G14「主張落喺量到嘅層」一致。 |
| G08 | ACCEPT | 64px 同色組合併組。同 R1 我方建議（組合＋最近鄰）併入 G13＋G08 嘅處理一致。本輪無新反例。 |
| G09 | ACCEPT | 內部對照先於外部靈感標籤。EX03／EX11／EX09 隊內對仍然係分化主證。法律風險另項，本條唔當清關。 |
| G10 | ACCEPT | 開合、層數、邊類型分開寫。EX02 開合、EX10 掛披，唔好同全身 IoU 混做「改寫幅度」（R4）。 |
| G11 | ACCEPT | 同意草稿繼續標暫定。正例仍係 EX10 掛披；EX05 西裝第二例同內層色混合，未獨立成第二潔淨圖例。唔升級為已確認通則，亦唔否決條文。 |
| G12 | ACCEPT | 同意拆 (a)／(b)：(a) 表達要對齊通道，EX01 頭肩方框哭／靜（整合者複現 IoU 0.963／0.970）支持；(b) 21 表情／2° 仍然 0 圖例，維持暫定。正係我方 R1 AWE 要點，草稿已寫入，唔再另改句。 |
| G13 | ACCEPT | 身份句寫成組合，並同隊內最近鄰比。R1 我方建議嘅「缺規 G14」合理 MERGE 入 G13（寫法）＋G08（64 合併），見 §3，無分類異議。 |
| G14 | ACCEPT | 新 14 例測試：13 S、1 NT（EX07 無官方 matte），0 C。全身外包絡（bbox／寬高比／全身 IoU）混合身體／服裝／髮冠／道具／姿勢，唔等於身份或改寫幅度。關鍵反差（面積 vs 寬）見 EX01、EX03、EX10；道具層見 EX04、EX14。完整矩陣 §2。 |
| G15 | ACCEPT | 新 14 例測試：4 S（EX04、EX05、EX12、EX14）、10 NA、0 C。道具／舉臂可以主導全身包絡，並進入 naive bbox 頂方框。頭通道必須頭錨，唔用 bbox 頂。身份句唔好靠一件未稱為主件嘅道具。EX12 珊瑚啟發式漏標（手套寬），目視 bbox 頂 64 幾乎只見白手套，更加支持「唔好信 bbox 頂」。 |

無 REJECT。無 ACCEPT_WITH_EDITS（草稿已吸收 R1 嘅組合錨同 G12 拆暫定；G11／G12 暫定標記足夠，唔另寫取代句）。

---

## 2. G14／G15 × EX01–EX14

格值：S = 支持；C = 反證；NA = 呢例唔觸發該條用途閘門（例如無手持道具）；NT = 呢例缺可引用 matte／量，唔強行編數。S／C 必有路徑＋數字＋量法＋通道。

| 例 | G14 | G15 | 要點 |
| --- | --- | --- | --- |
| EX01 | S | NA | 面積比 ≈ 1，寬比明顯大；錨在髮層。無手持武器（額飾屬髮／頭飾層）。 |
| EX02 | S | NA | 開合係構造層（G10）；唔用全身 IoU 當續作改寫幅度。本幀無道具主導包絡。 |
| EX03 | S | NA | 面積比同寬比反向；髮層＋姿勢層（伸臂／靴外撇，無人踢腿）。 |
| EX04 | S | S | 戰鬥包絡由槍／刀翼主導；bbox 頂 64 幾乎無面。 |
| EX05 | S | S | 怪盜剪影含躍起姿勢；七人 char_s2 有多例 bbox 頂唔係頭。 |
| EX06 | S | NA | 禮服 vs 外套係服裝層寬差；無手持道具。 |
| EX07 | NT | NA | 無官方角色 alpha，外包絡面積 NT。項鍊係佩戴物，唔當手持道具測試。 |
| EX08 | S | NA | 遠讀「一件」係服裝層剪影主張（目視，無數值包絡）。 |
| EX09 | S | NA | 咖啡企姿：千束舉拳進入包絡（寬比 > 面積比）；身份分化在髮層（I4）。Cafe 圖無手持道具。 |
| EX10 | S | NA | 面積比同 bbox 面積比反向。頭在包絡頂，G15 唔觸發。 |
| EX11 | S | NA | 身份係銀髮＋黑衣淺繃帶組合，唔係「邊個 bbox 比較大」。兩人 aspect 並唔接近（見下），更唔能把包絡當身份。 |
| EX12 | S | S | 日常／變身分服裝、頭飾、姿勢層。珊瑚舉臂：bbox 頂 64 幾乎係白手套。 |
| EX13 | S | NA | 側讀長馬尾屬髮層（目視；面積 NT）。A-pose 無手持道具。唔升級「讀成 Ezreal」為已證混淆。 |
| EX14 | S | S | 劍主導全身寬；頭錨／官方頭像保留皇冠組合。 |

統計：G14 = 13 S、0 C、0 NA、1 NT。G15 = 4 S、0 C、10 NA、0 NT。

### 2.1 逐例證據（S／C；NT 只記限制）

**EX01（G14 S，G15 NA）**  
圖：`rules_r2_img/EX01/board_g14_g15_civ_PROXY.png`、`board_g14_g15_battle_PROXY.png`。  
量：官方 alpha≥128；兩最大連通域取最左 = 日常。LANCZOS 高歸一 512。戰鬥／日常 h512 **面積比 1.014**、**bbox 寬比 1.199**（`metrics.json` `ratios`）。通道：全身填實 64 ＋紀錄頭像框。  
讀：面積幾乎唔變，寬明顯變，差在髮層（同 §10 方向；本輪定義係 h512 雙最大 CC，取代 I3 已作廢嘅 1.162，亦唔直接把 I4 h1000 嘅 1.201／1.016 寫成同一數）。G15：無手持武器。

**EX02（G14 S，G15 NA）**  
圖：`rules_r2_img/EX02/board_g14_g15_PROXY.png`。  
量：JPEG 白底 t=250，前視紀錄窗 b1／b2；只作構造／開合目視，唔把全身 IoU 當改寫幅度（R4）。G15 唔觸發。

**EX03（G14 S，G15 NA）**  
圖：`rules_r2_img/EX03/board_g14_g15_PROXY.png`。  
量：α≥200，高歸一 512。Yuzu／Kurumi **面積比 1.365**、**bbox 寬比 0.805**（Yuzu 面積更大、bbox 更窄：長金髮加面積；Kurumi 伸臂＋靴外撇加寬）。α≥128 複核寬同樣 198 vs 246。  
讀：外包絡同時含髮層同姿勢層，唔係服裝身份分。I5 已更正「抬腿」——無人踢腿。G15 NA。

**EX04（G14 S，G15 S）**  
圖：`rules_r2_img/EX04/board_g14_g15_private_PROXY.png`、**`board_g14_g15_battle_PROXY.png`（本輪代表圖）**。  
量：JPEG t=250，高歸一 512。私服 aspect **0.2852**（寬 146），戰鬥 **0.8516**（寬 436）。戰鬥頂帶：`top_over_max_width = 0.076`，spike True，`protrusion_frac = 0.0547`。通道對照：填實 64（刀翼主導）、naive bbox 頂 64（幾乎只有槍／刀、幾乎無面）、第一質量估頭 64（槍仍穿過面）。  
讀：G14 道具／翼層主導戰鬥包絡；G15 naive 頭頂框 capt 唔到頭。唔引 solidity（門檻敏感）。

**EX05（G14 S，G15 S）**  
圖：`rules_r2_img/EX05/board_g14_hero_PROXY.png`、`board_g15_s2_a_PROXY.png`、`board_g15_s2_b_PROXY.png`。  
量：官方學校／怪盜剪影高歸一 512，aspect **0.4688 vs 0.8613**（姿勢層＋外套／帽，唔當載體幅度 IoU）。七人官方 `char_s2`（integrator 核對過嘅檔）bbox 頂啟發式（頂 5% 行寬／最大行寬 < 0.35）標到 **3／7：hero、haru、yusuke**。  
目視 QC（啟發式會漏寬道具，目視先算數）：

- anne：`board_g15_s2_a` 嘅 bbox 頂 64 明顯係鞭圈；啟發式 `top_over_max_width = 0.491` 漏標。
- makoto：同板 bbox 頂 64 係舉臂／武器；啟發式 0.423，漏標。
- yusuke：刀進入頂方框；啟發式命中（0.254）。
- hero：躍起，突出率 0.209；頂或為腳／刀，啟發式命中。
- haru：啟發式命中（0.277），但斧在側，頂方框或落在帽／髮——唔把呢例強寫成「已證非頭」。
- ryuji／futaba：頂方框目視較近頭／帽，唔計入反證。

結論：至少 **anne、makoto、yusuke** 三例目視確認 naive bbox 頂唔係頭；hero 傾向支持。唔把啟發式 3／7 或整合者「4／7」寫成同一數已重產。規則本身成立。

**EX06（G14 S，G15 NA）**  
圖：`rules_r2_img/EX06/board_g14_g15_scarlet_PROXY.png`、`board_g14_g15_julius_PROXY.png`。  
量：官方 alpha，h512 aspect 猩紅 **0.6094**（寬 312）vs 尤里烏斯 **0.5156**（寬 264）。差在服裝層（禮服裙 vs 外套），唔係「日常尺度違規」（見 §4）。G15 NA。頭像框另見 I4 有效通道對照（全身 64 紅／藍高，頭像 64 近 0）——本輪唔重報已有 Δ 值。

**EX07（G14 NT，G15 NA）**  
圖：`rules_r2_img/EX07/board_g14_g15_visual_only_PROXY.png`（2016 胸像窗／頭窗，畫面裁切，非角色 matte）。外包絡面積 NT。項鍊屬佩戴，G15 NA。

**EX08（G14 S，G15 NA）**  
圖：`rules_r2_img/EX08/board_g14_g15_visual_only_PROXY.png`。無官方角色 alpha，無數值包絡（NT 數）。目視遠讀「一件」屬服裝層剪影主張，支持「先指名層再講剪影」。G15 NA。

**EX09（G14 S，G15 NA）**  
圖：`rules_r2_img/EX09/board_g14_g15_chisato_PROXY.png`、`board_g14_g15_takina_PROXY.png`。  
量：官方 alpha，h512 千束／瀧奈 **面積比 1.057**、**bbox 寬比 1.377**。寬差明顯大於面積差，差在千束舉拳姿勢層（R4：唔當服裝身份分）。I4 已說明肖像通道分化在髮。Cafe 圖 G15 NA。

**EX10（G14 S，G15 NA）**  
圖：`rules_r2_img/EX10/board_g14_g15_PROXY.png`。  
量：官方 alpha，h512 ノワール／ミステル **面積比 1.243**、**bbox 面積比 0.805**（寬 173 vs 215）。掛披方式加面積，對方 bbox 仍然可以更大。G14 教科書級：寬同面積必須分開報。兩人頭都在包絡頂，G15 NA。

**EX11（G14 S，G15 NA）**  
圖：`rules_r2_img/EX11/board_g14_g15_PROXY.png`。  
量：官方 alpha，h512 aspect 直斗 **0.3757** vs 直也 **0.2547**——包絡並唔「相近」，板註若寫成相近屬過述，以本檔為準。身份主張係髮＋外套明度組合（G13），唔係全身 bbox 邊個大。G15 NA。ΔL* 框選取樣仍以 I4 標註為準，本輪唔重引作頭髮遮罩。

**EX12（G14 S，G15 S）**  
圖：`rules_r2_img/EX12/board_g14_g15_coral_PROXY.png`（另有 daily 板）。  
量：官方 alpha。珊瑚變身：啟發式 spike = False（`top_over_max_width` 偏高，手套寬），`protrusion_frac = 0.0487`。**目視：naive bbox 頂 64 幾乎只見舉起嘅白手套；頭錨 64（紀錄 ICON `[390, 80, 560, 250]`）先見到臉同帽飾。** 日常前視沿用 I4 分欄 x0=184、x1=435（α≥128 欄佔用）。  
讀：G14 服裝／頭飾／姿勢分層；G15 舉臂進入用途閘門。寬突出物會騙過 spike 啟發式，更加支持「頭通道必須頭錨」。

**EX13（G14 S，G15 NA）**  
圖：`rules_r2_img/EX13/board_g14_g15_visual_only_PROXY.png`。無官方角色 alpha，面積 NT。目視側讀長馬尾屬髮層（I5：馬尾尖約到膝環、略高於環，唔再寫「近小腿」；v2 側框 x=782 可能切到金尖邊緣）。A-pose 無手持道具，G15 NA。唔把「讀成 Ezreal」升級為已控實驗混淆率。

**EX14（G14 S，G15 S）**  
圖：`rules_r2_img/EX14/board_g14_g15_PROXY.png`。  
量：官方遊戲立繪 alpha≥128，高歸一 512，含劍 aspect **0.7441**（寬 381）。v2 剔劍剪影原生 297×512，aspect **0.5801**（寬 297）；兩檔唔同畫布，只比 aspect／寬，唔自造 IoU。通道：填實 64 含劍、頭錨／頭像 64 保留皇冠。  
讀：劍係道具層，主導全身包絡；身份句仍係橙髮＋白裙＋藍軀＋皇冠組合，唔靠劍。整合者同畫布 nosword IoU 0.821（XOR 質量大致在 0–60% 高帶）只作引用。

---

## 3. 分類異議

無。R1 我方提出嘅「缺規 G14」（身份寫成組合，並同隊內最近鄰比；唔把單一常見件當獨特）由整合者 MERGE 入而家嘅 G13（寫法）＋ G08（64px 同色組可合併），分類合理。組合錨已寫入 G05，唔再當被誤判。本輪新 G14／G15 係另一題（剪影分層；道具同頭安全區），同舊建議唔衝突。

---

## 4. G01／G02／G04 澄清（可選，唔投票）

- G01 日常尺度：EX06 猩紅 h512 寬 0.609 係禮服裙幅，唔係把日常人型尺度作廢。同意澄清。
- G02／G04：本輪 14 例測試無發現澄清寫歪原意。G04 同新 G14 一齊讀：遠讀主張必須指名層同通道。
- 無要求把澄清升格為改寫重投。

---

## 5. 自糾、限制、來源政策

- 本輪新分析，唔只重用舊量。舊板（I3／I4）不夠直接覆蓋 G14 層語同 G15 naive bbox 頂 vs 頭錨對照，故新跑 14 例。
- EX11 腳本板註「外包絡相近」過述；以本檔 aspect 0.3757 vs 0.2547 為準。唔改腳本重跑（兩次 SHA 已鎖）。
- EX05 唔重產「4／7」；報告啟發式同目視分開。寬道具／舉臂會漏標。
- EX04 戰鬥翼比頭闊，第一質量估頭仍可能含槍，板已並陳，目視 QC 通過先引用。
- EX07／EX08／EX13 無編造 matte。EX14 無編造跨畫布 IoU。
- 法律風險：未評估。換色 ≠ 法律安全、已核實外部相似仍 **NOT_FOUND**（本輪無新圖例，唔提案）。
- **網頁來源：** 本輪未重新打開任何網頁。G03／G05–G13 行業訪談／技術文唔當成本輪一手；需要出處嘅格子標 **NOT_FOUND（本輪未打開）**。G14／G15 主證係圖像，唔引用未打開嘅 TF2 或其他整合者新 URL。R1 曾打開過嘅頁（Clarity、CGWORLD、Febri、Animate Times 等）唔自動繼承為本輪一手。
- 64px 可見 ≠ 認得 ≠ 記得。本輪無人類辨識實驗。
- 未設計 Haruka。頭／臉／髮齡／canon 設計建議需作者批准——本輪無提出。

---

## 附：產物路徑

- 投票檔（本檔）：`/workspace/haruka/research/originality/RULES_FROM_EXAMPLES_R2_VOTE_20261110.md`
- 腳本：`/workspace/haruka/research/originality/rules_r2_scripts/analyze_r2_g14_g15.py`
- 重現紀錄：`/workspace/haruka/research/originality/rules_r2_scripts/REPRODUCIBILITY.json`
- 圖同 metrics：`/workspace/haruka/research/originality/rules_r2_img/`（`INDEX.json` + EX01–EX14 各 `board_*_PROXY.png` 與 `metrics.json`；合共 36 檔）
- 代表圖：`/workspace/haruka/research/originality/rules_r2_img/EX04/board_g14_g15_battle_PROXY.png`
- 重產指令：`python3 /workspace/haruka/research/originality/rules_r2_scripts/analyze_r2_g14_g15.py`；第二次 `python3 /workspace/haruka/research/originality/rules_r2_scripts/analyze_r2_g14_g15.py --out /tmp/rules_r2_img_rerun`
