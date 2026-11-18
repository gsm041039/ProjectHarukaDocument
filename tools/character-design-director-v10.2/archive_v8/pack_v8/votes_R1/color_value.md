# RULES R1 VOTE｜color_value（2026-11-10 21:15 HKT）

> 鏡頭：配色／明暗。只寫 `research/color_value/` 新檔；唔改 v7、REF v7、I1–I5、RULES 草稿、他人檔。數字只引用 REF v7 §10，或今輪 `rules_r1_scripts/` 由 I3／I4 metrics 重讀並寫定義嘅數；**唔用 §11 作廢數**（包括 EX03 `44.33`／`35.64`／`0.39`、EX14 v1、EX13 自動 IoU／splash `13.31`、EX06 褐斗篷、EX14 I3 `orange_hairish_pct`）。沿用 I5 勘誤：EX05 官方 `char_s2` 冇字形；EX03 冇踢腳。R1–R4 照守：64／128 寫通道同量度定義；可見≠認得≠記得；淺色髮只引用人手 polygon／已 QC 框，失敗唔引用面積。全部未做人測。
>
> 新分析：`python3 /workspace/haruka/research/color_value/rules_r1_scripts/run_all_r1.py --verify`（2026-11-10 21:15 HKT 兩次連續跑通過；官方 36 檔 md5 全對；`metrics.json` md5 `8f103fe135ae0c6f7f853da6cac7ac48`）。圖：`rules_r1_img/G04_G08_G09_evidence_board.png`（數字板，唔係角色繪圖）＋重用 `i3_img/`、`i4_img/`、`i5_img/`。

## 1. 投票

| 規則 | 票 | 取代句（AWE 先填） | 理由／圖像證據（路徑＋數字） |
|---|---|---|---|
| G01 | ACCEPT | — | 14 例無反例。要大輪廓就另開載體、日常留成衣尺度：EX01 面積比約 1.01、寬約 1.20（§10）；EX04 寬高比 0.29 vs 0.85；EX05 日常／怪盗分載體；EX12 巨結只喺變身；EX10 大能力走機體；EX06 唔改禮裝載體。一手：ntny CGWORLD（A，已 fetch）私服剪影太溫和就提案變身、唔加大私服。設計「先用途後輪廓」次序本身圖證唔到（草稿已寫）。 |
| G02 | ACCEPT | — | 主證 EX13（馬尾離顱下垂，尾尖約到膝 0.68–0.69；頭像 MAE 1.128 幾乎唔變）同 EX12（小夾 1.76%→巨結 8.87%；全身 64 夾 2–3 px）。EX07 64 px 三角消失，遠讀交面罩外輪。一手：Riot ASU 概念文（A，已 fetch）為免讀成 Ezreal 改馬尾構造；Valve Francke（A／B，已 fetch Wayback）袖章太細分唔開 Medic。無圖像反例。 |
| G03 | ACCEPT | — | EX03 制服 ΔE00 約 0.1、髮約 37；EX09 喫茶衣物 IoU 0.74、髮 IoU 0.246，頭像衣色跌到紅約 0.06–0.07、紺 ≤0.02；EX10 同外套語彙差喺穿法；EX05 日常 IoU 0.55 vs 怪盗 0.33、Lab 距 42.9 vs 25.3。一手：いみぎむる Febri（A，已 fetch）「リコリスたちは基本的に制服で描かれるので、シルエットだけではっきりと誰かわかる」。 |
| G04 | ACCEPT_WITH_EDITS | 揀一個個人簽名色，寫明佢落喺邊（髮、點色、大塊）、幾大、喺咩場合出現、**喺邊個通道負責**；唔好假設簽名色＝最大面積色，**亦唔好用最大 k-means 合併塊冒稱簽名色**。場合色（例如発動、戰鬥）用用途鎖住。 | 原句正確，但本鏡頭常見「最大合併塊≠簽名色」：EX03 クルミ髮 10.5397%＜制服 28.0312%，ユズ髮 37.8242%＞制服 19.9152%（I3 凍結多邊形，`rules_r1_img/metrics.json` G04）；EX01 戰鬥最大塊 L\* 96.217、佔 28.2114%，近白，唔係藍簽名；EX02／EX05 最大塊近黑。EX06 猩紅紅可以同時係簽名同最大（red_pct 83.5148）。業內**搵唔到**設計師直述「簽名色≠最大面積」（NOT_FOUND）；規則靠圖像成立。 |
| G05 | ACCEPT_WITH_EDITS | 角色換載體時，揀一個跨形態唔變（或者只轉譯）嘅錨——通常係髮／頭部大形或色相家族——令觀眾知道係同一人；衣物外包絡可以大變。寫明錨係乜、喺邊個通道睇到，**並檢查錨喺新載體底色上仲有冇對比**（同明度／近色底可以令錨同衣合併）。 | 原句要補「錨對新底嘅對比」。EX01 白長髮跨形態連續，但戰鬥裝最大 k-means 塊近白（L\* 96.217，28.2114%），白髮同白戰鬥服有合併風險（`i3_img/EX01/06_kmeans_chips.png`、`07_Lstar_maps_h800.png`）。EX04 全身 IoU 約 0.13、頭裁 64 IoU 約 0.56；EX12 頭區 IoU 約 0.43，穩嘅係紫系家族（I3 日常紫 28.7079%，家族均值 ΔE00 12.2941，唔係同一塊色）；EX14 橙長髮＋白裙＋藍上身兩邊都在（**唔引用**已撤回 `orange_hairish_pct`）。 |
| G06 | ACCEPT | — | 重分配有多例：EX01 面積約 1.01、寬約 1.20，深色 0.347→0.243、藍 0.076→0.144（§10）；EX12 加件；EX04 戦闘多件。**減法分支仍只有 EX14**（Canny 206.1→145.7、大色塊 25.6%→42.2%；剔劍用 v2），14 例入面搵唔到第二個已量嘅媒介減法例，亦搵唔到反例。草稿已標 SINGLE_EXAMPLE，唔使改句。業內對「保留／轉譯／替換／退後」清單同「減法規則」：**NOT_FOUND**。 |
| G07 | ACCEPT | — | 本鏡頭最強支持條。全身同頭像靠唔同件：EX06 頭像紅／藍 ≤0.03／≤0.02；EX09 頭像衣色大跌、髮 ΔL\* 63–69；EX12 夾全身 64 約 2–3 px、頭框約 10–12 px（形狀唔驗，只係色點可見）；EX14 全身 64 王冠約 6–7 px，官方 TV 縮圖 176×246、王冠約 70×47 已見 3 尖；EX01 頭框藍 0.015→0.16 同全身藍要分開寫；EX13 改構喺側面全身，頭像 MAE 1.128。64 px 主張全部寫咗通道。業內**冇**「全身 64 vs 頭像 64」呢套用語（G07 精確通道分類 NOT_FOUND）；近緣係 Valve 三層可讀（色／剪影／胸前細節，A／B）。 |
| G08 | ACCEPT | — | 有件唔等於縮圖仍分開。EX03 ユズ黃結 vs 金髮 ΔE00 約 7（7.19）頭像併入髮；EX11 直人 ΔL\*≈60 全身 64 清楚、直也約 11 弱；頭像兩兄弟髮 ΔE00 約 3–5（CV I4 5.1），靠領口暗份額 0.3937 vs 0.1154；EX12 ΔE76 11.3 加全身 64 只 2–3 px；EX08 腰帶 h64 ΔL 6.5／10.0 仍在；EX07 ΔE00 0.74 屬「幾時唔用」（有意近讀層）。EX01 戰鬥白底白髮係本條警示例，唔係反例。**冇通用門檻**（草稿已寫）。EX04 淡金／銀髮面積本輪 NOT_REPORTED（R3），標 NT。 |
| G09 | ACCEPT | — | 14 例冇「強化／受傷＝變暗」圖像公式。EX01 戰鬥更亮（§10 深色 0.347→0.243；I3 隔離 L\* 57.6753→66.1216、dark 0.3518→0.2473）；EX04 I3 figures lstar（今輪新引用、§10 未列）：私服 L\* 66.5295→戦闘 78.7794，dark 0.1383→0.0291，L\*>70 0.5449→0.7628；EX05 主人公日常已偏暗（I3 L\* 18.0699／怪盗 22.6606）；EX12 兩態平均 L\* 約 70.1／70.2；EX14 TV 唔以變暗做轉譯主張。一手：大暮維人朝日（A，已 fetch）「希望の象徴として、あえて白髪にしました」。**搵唔到**有設計師直接否定「創傷＝變暗」公式嘅句子（NOT_FOUND）；大暮係做法反例，唔係公式否定句。 |
| G10 | ACCEPT | — | 本鏡頭非主戰場，但無反例。EX02 前封後開（胸腔皮膚約 0.04% vs 1.0%；背柱連腿 3.6%→11.7%）；EX08 遠讀一件（腰列破洞 0）、近讀拉鏈／魔術貼／按扣；EX10 掛肘 3D 干涉、動畫先用。一手：茅野 FASHIONSNAP（A，已 fetch）約 2 分半早換、上下分離但遠睇連身、魔術貼同按扣。「先根部後裝飾」次序本身圖證唔到。 |
| G11 | ACCEPT | — | 主證仍係 EX10（上半寬 427 vs 271；L\*>70 約 0.32 vs 0.02；全身 64 可讀，頂框外套 0–0.5%）。**第二例 EX05 有，但弱**：日常靠着こなし同色差一齊分人（IoU 0.55、Lab 距 42.9），圖像分唔開「穿法」同「色」。未搵到反例。一手：neco 電撃（A，已 fetch）ノワール着崩、ミステル「ジャケットをしっかり着ている」。草稿已標近乎 SINGLE_EXAMPLE，保留。 |
| G12 | ACCEPT | — | 主證 EX06 係芳我口述（A，已 fetch）：表情集 21 種、眉角 2 度「変わればジュリアスではなくなってしまう」；公開像素量唔到 2°（§10：4.86°±2.3°，2°≈1.8 px）。**第二例只撐半句**：EX14 王冠尖 5→3 要寫入設定，官方 TV 縮圖已見 3 尖，減線唔等於資料變少（色區件數約 46–47 vs 45）。未搵到圖像反例。草稿已標 provisional，唔改句。 |
| G13 | ACCEPT | — | 14 例主讀類型各異（髮色、穿法、頭構造、禮裝大色塊、層／可轉件），支持「照實標類型＋負責通道」。G07 已證明同一角色兩個通道可靠唔同件。識別句係 DESIGN_CLAIM，**無人測記得**；可見≠認得≠記得。 |

## 2. 規則 × 例子測試矩陣（13 × 14）

每格：S 支持／C 反例／NA 唔適用／NT 未測。本輪 **C = 0**。S、C 證據見 §3。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G01 | S | NA | NA | S | S | S | NA | S | NA | S | NA | S | NA | NA |
| G02 | S | NA | NA | S | S | NA | S | NA | NA | NA | NA | S | S | S |
| G03 | NA | NA | S | NA | S | S | NA | NA | S | S | S | NA | NA | NA |
| G04 | S | S | S | NA | S | S | S | S | S | NA | S | S | NA | S |
| G05 | S | S | NA | S | S | NA | S | NA | S | NA | NA | S | S | S |
| G06 | S | S | NA | S | S | NA | S | NA | S | NA | NA | S | S | S |
| G07 | S | S | S | S | S | S | S | S | S | S | S | S | S | S |
| G08 | S | NA | S | NT | S | S | S | S | S | S | S | S | NA | S |
| G09 | S | NA | NA | S | S | NA | NA | NA | NA | NA | S | S | NA | S |
| G10 | NA | S | NA | NA | NA | S | NA | S | NA | S | NA | NA | NA | NA |
| G11 | NA | NA | NA | NA | S | NA | NA | NA | NA | S | NA | NA | NA | NA |
| G12 | NA | NA | NA | NA | NA | S | NA | NA | NA | NA | NA | NA | NA | S |
| G13 | S | S | S | S | S | S | S | S | S | S | S | S | S | S |

格子備註（唔重複 §3 長證）：
- G01 EX13＝草稿「幾時唔用」（只有戰鬥載體，閘門變幻想錨）；EX14＝媒介轉譯，唔係日常 vs 舞台。EX02／EX07 亦係單一戰鬥載體系譜。
- G02 EX14 係「放大可以係減法」嘅相關例（權重升），主規則句仍以改構造為準，細節見 G06。
- G04 EX04／EX10／EX13：主主張唔係簽名色面積（銀白多件／穿法／馬尾構造），故 NA。
- G05 EX09：喫茶 vs リコリス視為同一人兩套官方裝，錨係髮。EX02 續作髮／黑身連續、斗篷色轉，弱 S。
- G07 EX08：舞台衣装冇頭像通道，但規則「幾時唔用」已涵蓋；遠讀通道有指定，故 S。
- G08 EX07：S 嘅係「幾時唔用」（有意低對比近讀層，ΔE00 0.74）。EX04 NT：銀／淡髮面積 NOT_REPORTED（R3）。
- G09 EX07／EX11 夜景特寫唔用單幀診斷照明（EX11 仍用對照圖嘅髮／衣 ΔL\* 撐「唔用變暗公式」）。EX10 明暗差係穿法，唔係創傷升級，故 NA。
- G10 EX06：S 指公開圖欠背／側／扣位 → 交付未齊，支持「要寫先」。
- G13 全 S：每例都可以寫出「類型＋通道」句；呢格證嘅係做法可行，**唔證觀眾記得**。

## 3. 證據（逐條規則）

量度定義（共用）：身高正規化 64／128 用 `cv2.INTER_AREA` 下採樣；檢查用 vis 放大（立方或最近鄰，已喺 I3／I4 標明）。ΔE00＝CIEDE2000（skimage）。L\*＝CIELAB。EX03 髮／制服面積用 I3 凍結人手多邊形（唔用自動閾值）。今輪腳本只重讀 I3／I4 metrics 同核官方 md5，**冇改官方像素、冇生成角色圖**。

### G01
- **圖**：`i3_img/EX01/01_side_by_side_h800.png`、`i3_img/EX04/01_side_by_side_h800.png`、`i3_img/EX05/01_side_by_side_h800.png`、`i3_img/EX12/01_side_by_side_h800.png`。§10：EX01 面積 1.01、寬 1.2、行寬 1.29–1.33；EX04 0.29 vs 0.85。
- **Web（已 fetch）**：A [CGWORLD ntny×フリュー](https://cgworld.jp/regular/201811-c-ntny-furyu.html)「そのままだとゲームのキャラクターとしてはシルエットが大人しくなってしまうので……変身の提案」。A／B [GAME Watch 副島 E3](https://game.watch.impress.co.jp/docs/news/1006008.html) 先設計制服，再諗各角色點著。A [Febri 中谷](https://febri.jp/topics/trpr_1/) 先集中剪影同服裝；日常さんご要「普通の子」又唔好變成モブ，用頭飾。

### G02
- **圖**：I4／整合者 EX13 尾尖 vs 膝；`i4_img/EX12/EX12_features_full64_icon64.png`（夾 2.64–3.30 vs 9.85–12.31 px）。§10：尾尖 0.68–0.69、膝環 0.73–0.74；頭飾 1.76%／8.87%。
- **Web（已 fetch）**：A [Riot /dev: Modernizing the Monk](https://www.leagueoflegends.com/en-us/news/dev/dev-modernizing-the-monk/) Megan O’Rourke：舊馬尾「glued in place」，ASU 令佢成為動態剪影件，因為有「read as Ezreal or other human champions」嘅清晰度問題。A／B [Wayback Game Developer／Francke Gamefest](https://web.archive.org/web/20210912143938/https://www.gamedeveloper.com/art/in-depth-how-valve-makes-art-to-enhance-gameplay)「tiny medic patch on the sleeve… nearly impossible to tell medics apart」，改用形狀＋色驅動。

### G03
- **圖**：`i3_img/EX03/01_side_by_side_h800.png`、`i3_img/EX03/09_color_vs_gray_h64_nnx6.png`；`i4_img/EX09/EX09_clothes_full64_icon64_overlay.png`。§10 數字同上表。
- **Web（已 fetch）**：A [Febri いみぎむる int2_1](https://febri.jp/topics/lycoris_recoil_int2_1/)「相棒であるたきながシンプルなぶん、千束にははっきりと特徴を出したい」「制服で描かれるので、シルエットだけではっきりと誰かわかる」。A／B 副島 GAME Watch（同上）先制服再着こなし。

### G04
- **圖／數**：`rules_r1_img/metrics.json` → `G04_signature_vs_largest`；`rules_r1_img/G04_G08_G09_evidence_board.png`；`i3_img/EX03`、`i3_img/EX01/06_kmeans_chips.png`。定義：I3 種子 numpy k-means++，合併 ΔE00≤8，最大塊佔隔離前景％；簽名色係設計主張，唔自動等於最大塊。EX14 **唔用** `orange_hairish_pct`。
- **Web**：設計師直述「簽名色唔一定係最大面積」**NOT_FOUND**。近緣（唔當本句直接證據）：副島講系列／角色色（GAME Watch 講 P5 用紅做作品色，唔係面積規則）。

### G05
- **圖／數**：EX04 頭裁 IoU 約 0.56 vs 全身 0.13（§10）；EX12 紫系家族 I3 日常 28.7079%、日常 vs 變身家族均值 ΔE00 12.2941（今輪 `metrics.json` `G05_ex12_purple_family`；家族≠同一 Lab 塊）；EX01 戰鬥最大塊近白見 G04；EX14 大色塊兩邊都在（目視＋k-means 近白塊），唔引用已撤回橙族％。
- **Web**：A いみぎむる（頭／髮做制服群差，見 G03）；A 大暮（黒コート係系列「重要なアイコン」而保留，白髮另開——延續件可以係衣，錨唔限頭髮）。跨形態「只留一個錨」嘅直接祈使句 **NOT_FOUND**（圖像歸納）。

### G06
- **圖／數**：EX01 §10 1.01／1.20、0.347→0.243、0.076→0.144；I4 全身 64 暗 0.3551→0.2072、藍 0.0259→0.1620。EX14 §10 Canny 206.1→145.7、大色塊 25.6%→42.2%（v2 剔劍；唔用 v1）。
- **Web**：「列出保留／轉譯／替換／退後」同「媒介減法」作為設計師規則 **NOT_FOUND**。近緣（唔升格）：Riot ASU 文講「translating」身份、更新剪影，但唔係加減清單。

### G07
- **圖**：`i4_img/EX06`、`i4_img/EX09`、`i4_img/EX11/EX11_value_full64_icon64.png`、`i4_img/EX12`、`i4_img/EX14`；EX07 要寫正規化軸（按畫框高：人 59.03／頭 21.69／耳 3.3–3.6 px；按畫框闊則人 24.58／頭 9.04）。
- **Web**：精確「全身 64／頭肩方框 64／貼臉 64」通道分類 **NOT_FOUND**。近緣 A／B：Valve Francke 三層可讀（色、剪影、胸前細節）；A neco 電撃：エイダ白衣加紅裏「視覚的にシルエットをぼかさない」。

### G08
- **圖／數**：見今輪 `metrics.json` `G08_contrast`。要點：ΔE00 7.19（ユズ結）、0.74（EX07 近讀）、ΔL h64 6.5／10.0（腰帶）、髮 ΔL\* 62.99–69.16（EX09）、直人／直也 ΔL\*≈60 vs ≈11、頭像髮 ΔE00 5.1、暗份額 0.3937 vs 0.1154。量度點寫喺 I3／I4／§10；本輪無新鄰接 polygon。
- **Web**：A／B Francke 袖章失敗、要用色同形；A neco 紅裏令身形唔溶。通用 ΔE 門檻 **NOT_FOUND**（同意草稿）。

### G09
- **圖／數**：`i3_img/EX01/07_Lstar_maps_h800.png`、`i3_img/EX04/07_Lstar_maps_h800.png`、`i3_img/EX05/07_Lstar_maps_h800.png`。今輪新引用（I3 figures lstar，§10 未列，定義：`paper250_chroma6_v1` 隔離前景）：EX04 私服 L\* 66.5295／戦闘 78.7794。EX01 用 I3 隔離同 §10 I1 兩套協議，方向一致（戰鬥更亮）。
- **Web**：A [朝日 and 大暮](https://www.asahi.com/and/m/article/15806087)「目覚めた先には黒い未来ではなく、明るい世界がある。という希望の象徴として、あえて白髪にしました」。直接否定「受傷就變暗」公式嘅句子 **NOT_FOUND**。

### G10
- **圖**：I3 EX02 設定畫對照；EX08 I3／construction 構造圖。§10 皮膚份額同腰帶 ΔL。
- **Web（已 fetch）**：A [FASHIONSNAP 茅野](https://www.fashionsnap.com/article/kawaii-idol-costume-osarecompany/)「日常着がアパレルだとするなら、特別なのが衣装」；約 2 分半早換；遠睇連身、實際上下分離；腰側魔術貼、內側按扣、開放拉鏈。

### G11
- **圖**：`i4_img` 未另做 EX10 新圖；重用 I3 EX10 L\*（ノワール L_mean 43.8349、L\*>70 0.3215；ミステル 27.6793／0.0248）同 §10 0.32／0.02、427 vs 271。EX05 見 I4 Lab／IoU。
- **Web（已 fetch）**：A [電撃 neco](https://dengekionline.com/articles/218099/) ノワール「ゲームではできなかった着崩し」；ミステル「ジャケットをしっかり着ています」「対照的」。A／B 副島着こなし（GAME Watch）。

### G12
- **圖**：EX06 公開像素量唔到 2°（§10）；EX14 `i4_img/EX14` 官方縮圖王冠 3 尖、全身 64 約 6.5 px 唔可靠。
- **Web（已 fetch）**：A [Animate Times 芳我](https://www.animatetimes.com/news/details.php?id=1763696173)「キャラクター設定の表情集は21種類描きました」；「眉の角度が2度変わればジュリアスではなくなってしまう」。

### G13
- 證據分散喺 G03／G07／G11：同一角色要寫「邊件、邊通道」。無人測。
- **Web**：將「一句可畫主張＋通道」寫成行業規則 **NOT_FOUND**。近緣唔升格。

## 4. 單例／未支持項回應

1. **G06 減法分支**：14 例入面**搵唔到第二個已量媒介減法例**。EX01／EX04／EX12 係加件或重分配，唔係「減競爭線、保大色塊」。**未搵到反例**（冇一例簡化係靠整體變暗或加線）。保持 SINGLE_EXAMPLE。
2. **G11**：量度主證仍係 EX10。**第二例 EX05 有但弱**（着法同色差綁埋；面積比 1.13–1.80 含姿勢，R4 唔當幅度）。未搵到「改穿法反而破壞日常尺度」嘅圖像反例。
3. **G12**：主證仍係 EX06 文本（2° 圖像量唔到）。**第二例 EX14 只撐「固定點要寫入設定」半句**（尖數 5→3；官方縮圖通道已見 3 尖），唔撐「表演範圍要寫 21 種表情」嗰半。未搵到反例。
4. **簽名主件後備**（v7 §5：簽名色做唔到就用主件承接）：14 例**圖像仍未有例**。EX07 項鍊「可拆配便服」只有 Carter 文本，本輪官方靜圖冇展示便服承接。**建議維持作者政策／provisional，唔升做 G 規則。**
5. **隱藏第二層**：14 例**圖像仍未展示「隱藏第二身份層」**。EX07 布面三角 ΔE00 0.74 係近讀母題層，唔等於第二身份。EX11 只撐「唔用衫色診斷創傷」。**維持預設關，唔升唔降。**

## 5. 缺漏規則提案（每條 ≥2 例）

### 提案 P1｜先設計能喺灰階存活嘅明度／形狀構造；唔好假設簽名色喺灰階仍然分人
- **規則**：灰階會取消色相通道。若識別要喺單色、印刷、或去色縮圖存活，就要有明度或外形構造；簽名色本身唔保證灰階分得開。**唔好為咗過灰階而拆共享制服或壓暗角色**（沿用 v7 政策）。
- **幾時用**：預計會去色、單色商品、夜景／低飽和畫面、剪影同色一齊驗。**幾時唔用**：只喺全彩遠讀、而且簽名色已被 G07 鎖喺彩色通道。
- **支持例（≥2）**：EX03（彩色髮 ΔE00 約 37，灰階靠明度差；`i3_img/EX03/09_color_vs_gray_h64_nnx6.png`）；EX09（髮 ΔL\* 63–69，灰階仍分深淺髮，紅／紺上衣通道會弱；`i3_img/EX09/09_color_vs_gray_h64_nnx6.png`）；EX11（直人 ΔL\*≈60 灰階仍強，直也約 11 弱；`i3_img/EX11/09_color_vs_gray_h64_nnx6.png`）；EX01（高彩藍 0.076→0.144 喺灰階消失，日常白髮對深校服仍有明度塊；戰鬥白對白合併風險，見 L\* 圖）。
- **點驗**：同一隔離圖並排彩色 64 同灰階 64（I3 已有 `09_color_vs_gray_*`）；寫通道；可見≠認得。
- 同 G04「限制」欄同向，但 G04 講簽名色面積，P1 講**要另開明度構造**，值得獨立成規則。

## 6. 自我勘誤、限制

- **本輪無新勘誤**。I5 兩條勘誤仍然有效，本檔已遵守：EX05 `char_s2` 本身冇 CODE NAME 字形；EX03 兩人唔係踢腳（クルミ伸臂、一靴外撇）。
- **未引用**：任何 §11 作廢數；EX14 I3 `orange_hairish_pct`（食膚）；EX13 splash 13.31；EX06 褐斗篷；「大致形可辨」。
- **今輪新引用、須寫定義**：EX04 I3 `figures[].lstar`（私服 L\* 66.5295、戦闘 78.7794 等）——§10 未收，定義見 `rules_r1_img/metrics.json` `G09_value.highlights.EX04_i3_figures_lstar_NEW_CITATION`。EX12 紫系家族均值 ΔE00 12.2941 係 I3 已量、今輪重讀。
- **限制**：全部 IMAGE_REVIEW，無人測、無動畫 PASS；G01／G10／G12 部分靠訪談講工序次序；EX01 白髮合併風險用 k-means／L\* 圖，**未做完整人手白髮多邊形**（R3），所以唔報白髮面積％；EX04／EX14 淡色髮面積維持 NOT_REPORTED。官方 md5 36／36 通過，唔表示規則已被觀眾驗證。
- **Web 方法**：今輪實際 fetch 核實 10 個 URL（見下）；引用句均來自 fetch 正文。搵唔到就寫 NOT_FOUND，無捏造來源。

### Web 來源清單（已 fetch，2026-11-10 HKT）

| # | 級 | URL | 主要用於 |
|---|---|---|---|
| 1 | A | https://cgworld.jp/regular/201811-c-ntny-furyu.html | G01 |
| 2 | A／B | https://game.watch.impress.co.jp/docs/news/1006008.html | G01、G03、G11 |
| 3 | A | https://dengekionline.com/articles/218099/ | G07 近緣、G11 |
| 4 | A | https://www.leagueoflegends.com/en-us/news/dev/dev-modernizing-the-monk/ | G02 |
| 5 | A | https://febri.jp/topics/lycoris_recoil_int2_1/ | G03、G05 |
| 6 | A | https://febri.jp/topics/trpr_1/ | G01、G02 近緣 |
| 7 | A／B | https://web.archive.org/web/20210912143938/https://www.gamedeveloper.com/art/in-depth-how-valve-makes-art-to-enhance-gameplay | G02、G07 近緣、G08 近緣 |
| 8 | A | https://www.asahi.com/and/m/article/15806087 | G09 |
| 9 | A | https://www.animatetimes.com/news/details.php?id=1763696173 | G12 |
| 10 | A | https://www.fashionsnap.com/article/kawaii-idol-costume-osarecompany/ | G01 近緣、G10 |

**NOT_FOUND 條目**（精確主張，唔用近緣冒充）：
- G04「簽名色≠最大面積」設計師直述
- G05「跨形態只留一個錨」設計師直述祈使句
- G06「保留／轉譯／替換／退後」清單，以及「媒介減法」作為規則
- G07「全身 64 vs 頭像 64」通道分類用語
- G08 通用 ΔE00／ΔL\* 門檻
- G09 直接否定「創傷／變強＝變暗」公式嘅句子（有做法反例，無否定句）
- G13「一句可畫主張＋負責通道」作為行業成文規則
- 簽名主件後備、隱藏第二層：14 例圖像例＋對應一手圖證 **NOT_FOUND**

（完）
