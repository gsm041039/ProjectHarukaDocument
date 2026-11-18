import shutil,os,hashlib,datetime
SD='/workspace/haruka/lab/canon/_working/skill_distill/'
IMG=SD+'SKILL_EXAMPLES_IMG_20261110/'
V7=SD+'SKILL_DRAFT_character_design_core_v7_20261110.md'
R7=SD+'SKILL_REF_character_design_sources_v7_20261110.md'
V8=SD+'SKILL_DRAFT_character_design_core_v8_20261110.md'
R8=SD+'SKILL_REF_character_design_sources_v8_20261110.md'
md5=lambda p:hashlib.md5(open(p,'rb').read()).hexdigest()
m7,mr7=md5(V7),md5(R7)
assert m7=='ed7032939f23e4b96a227615ecbe5eb4' and mr7=='be96876065530a2952ea54e4e2686756'
for src in (V7,R7):
    b=src+'.bak_20261110_pre_v8'
    if not os.path.exists(b): shutil.copy2(src,b)
    assert md5(b)==md5(src)
for p in (V8,R8): assert not os.path.exists(p), p+' exists'
now=datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
body=open(IMG+'rules_r2_integration/final_rules_body.md').read()
v=open(V7).read()
L=v.split('\n')
assert L[0].startswith('# 角色／服裝設計核心 v7')
L[0]='# 角色／服裝設計核心 v8：由 14 個例子歸納嘅核心設計規則 G01–G15，先過用途閘門，再寫識別句，然後喺菜單揀手法（附業界例＋圖像證據）'
v='\n'.join(L)
status_old='> **狀態**：未安裝草稿（2026-11-10 HKT）。冇做 UpdateSkill。\n> - 基底：`SKILL_DRAFT_character_design_core_v6_20261110.md`'
assert v.count(status_old)==1
status_new=f'''> **狀態**：未安裝草稿（{now} HKT）。冇做 UpdateSkill。
> - 基底：`SKILL_DRAFT_character_design_core_v7_20261110.md`（原檔冇改；md5 前後皆 `{m7}`；備份 `….md.bak_20261110_pre_v8`）。v8＝v7 全文＋CHANGELOG v7→v8＋**新 §1A 核心設計規則 G01–G15**（由 14 例歸納，逐條有圖像證據）＋附錄 B EX14 日期勘誤＋新附錄 F（規則→例子索引）。v7 嘅 R1–R5（〔v6-R1〕至〔v6-R4〕、〔v7-R5〕）原句保留，定位改做**量度規則**；其他正文一字冇改。
> - 規則回合：`SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_FINAL_20261110.md`（最終規則）；整合 `SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R1_20261110.md`（R1 票 125／57／0）、`SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R2_20261110.md`（R2 票 155／13／0）。總覽圖：`SKILL_EXAMPLES_IMG_20261110/RULES_OVERVIEW_v8_20261110.png`。
> - 證據卡：`SKILL_REF_character_design_sources_v8_20261110.md`（＝REF v7＋§12 v7→v8 勘誤＋§13 整合者重產數＋§14 新核來源）。
> - v7 原狀態註（保留）：
> - 狀態：未安裝草稿（2026-11-10 HKT）。冇做 UpdateSkill。
> - 基底：`SKILL_DRAFT_character_design_core_v6_20261110.md`'''
v=v.replace(status_old,status_new)
cl=f'''## CHANGELOG v7 → v8（{now} HKT）
1. **新 §1A 核心設計規則 G01–G15**：作者要求「對每個例子分析後得出通用人物設計 rule」。由 14 例歸納，兩輪 14 方向投票（R1 ACCEPT 125／AWE 57／REJECT 0；R2 ACCEPT 155／AWE 13／REJECT 0），所有 AWE 收入。每條有規則句、用途閘門、通道＋視角、支持例＋數、圖像證據路徑、限制／反來源、一手來源、狀態。
2. **兩條新規則**：G14 剪影分層（人體／衣物／頭髮／頭飾／持物／姿勢；先剔非角色層）；G15 持物／舉手／飄動件，拆**效應 A 外包絡**同**效應 B 頭部安全區**分開驗；頭飾算頭。
3. **R2 衝突整合者圖像重驗**：EX14 劍喺以頭為錨方框 0 像素（效應 B 範圍反例）；EX05 怪盗 bbox 頂唔係頭＝竜司（邊際）／杏／祐介／真，4／7；EX14 IoU 0.821 定一個協議；EX12 舉手歸姿勢層；EX02 B2 雙槍冇定極點（效應 A 範圍反例）。詳見 `SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R2_20261110.md` §4。
4. **R1–R5 定位**：保留原句，定位做量度規則（點量、點報），唔再當設計規則。
5. **勘誤**：EX14 Animate Times 守屋×上内訪談刊出日 **2022-01-08**（站內時間 18:00 JST，即 HKT 17:00），v7「01-05／01-08 未解」已解；REF v8 §12。
6. **G09 修正**：EX05「怪盗較暗」只限隊友 6／6；主人公怪盗反而略亮（L* 18.08→22.69〔重產〕）。
7. **仍 provisional**：G11（純穿法只 EX10）、G12(b) 表演範圍（圖像 0 例）、G06 減法（圖像單例）、G15 A／B 各 <5 強例。作者政策（簽名主件後備、隱藏第二層預設關等）唔升做規則。

'''
anchor='## CHANGELOG v6 → v7'
assert v.count(anchor)==1
v=v.replace(anchor,cl+anchor)
sec=f'''## 1A. 核心設計規則 G01–G15（v8；由 14 例歸納）

> **定位**：§1A 係**設計規則**（做乜）。v7 嘅〔v6-R1〕至〔v6-R4〕、〔v7-R5〕係**量度規則**（點量、點報），原句保留喺原位。§3 手法菜單同 §1A 衝突時，以 §1A 用途閘門為先，再按 §9 處理（§9 冇例，見附錄 B）。
> **完整版**：`SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_FINAL_20261110.md`（同文＋作者政策＋未驗清單）。**本節路徑以 `/workspace/haruka/` 為根**（其他章節路徑仍以 `skill_distill/` 為根）。
> **作者政策唔係 §1A 規則**：簽名主件後備、隱藏第二層預設關、灰階預設關、三項必查、每輪明顯變化、品質工整——維持 v7 原句同 `POLICY` 標記。

{body}

'''
anchor2='## 2. Brief 與用途閘門'
assert v.count(anchor2)==1
v=v.replace(anchor2,sec+anchor2)
old_b='Animate Times 刊出日 01-05／01-08 未解'
assert v.count(old_b)==1
v=v.replace(old_b,'~~Animate Times 刊出日 01-05／01-08 未解~~（v8 已解：**2022-01-08**，見 REF v8 §12）')
F='''## 附錄 F：規則 → 例子索引（v8）
S＝支持；A／B＝G15 效應；範＝範圍反例；弱＝弱例；旁＝旁證；—＝唔適用／未入。依據 `SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_FINAL_20261110.md`。

| 規則 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| G01 | S | — | — | S | S | S | — | S | 註 | S | — | S | 閘 | — |
| G02 | S | — | — | — | — | — | S | — | — | — | — | S | S | — |
| G03 | — | — | S | — | S | — | — | — | S | S | S | — | — | — |
| G04 | — | S | S | — | — | S | — | — | S | — | — | S | — | — |
| G05 | S | S | — | S | — | — | — | — | — | — | — | S | — | S |
| G06 | S | — | — | S | S | — | — | — | — | — | — | S | — | S |
| G07 | S | — | — | S | S | S | — | — | S | S | S | S | S | S |
| G08 | 範 | — | S | 範 | — | — | — | S | — | — | S | S | — | — |
| G09 | S | — | — | S | S | — | — | — | — | — | S | S | — | S |
| G10 | — | S | — | S | — | 未齊 | — | S | — | S | — | — | S | — |
| G11 | — | — | — | — | S | — | — | — | — | S | — | — | — | — |
| G12 | S(a) | S(a) | — | — | 反(a) | (b)文本 | — | — | — | — | — | — | 旁(a) | S(b)固定點 |
| G13 | — | — | S | — | — | — | S | — | S | S | S | S | S | S |
| G14 | S | S | S | S | S | S | 弱 | S | S | S | 弱 | S | S | S |
| G15 | — | A S/範 | — | A S、B S | A 方向、B S | — | — | — | B 弱 | — | — | B S | 頭像分支 | A S、B 範 |

總覽圖：`SKILL_EXAMPLES_IMG_20261110/RULES_OVERVIEW_v8_20261110.png`。

'''
anchor3='## 變更紀錄（append-only）'
assert v.count(anchor3)==1
v=v.replace(anchor3,F+anchor3)
v=v.rstrip('\n')+f'\n- {now} HKT：由 v7 加核心設計規則 §1A G01–G15 寫成新檔 v8；v7 原檔冇改（md5 `{m7}` 前後一致），另存備份 `.bak_20261110_pre_v8`。摘要見頂部 CHANGELOG v7 → v8；規則見 `SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_FINAL_20261110.md`；整合見 `SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R2_20261110.md`。v7 正文只改附錄 B 一處日期（劃線保留原句）。\n'
open(V8,'w').write(v)

# ---------------- REF v8
r=open(R7).read()
L=r.split('\n'); assert L[0].startswith('# SKILL_REF v7')
L[0]='# SKILL_REF v8：角色設計 skill 證據卡（2026-11-10 HKT）'
L.insert(1,f'\n> v8＝REF v7 全文（§1–§12 照錄；v7 原檔 md5 前後皆 `{mr7}`，備份 `….md.bak_20261110_pre_v8`）＋§12 追加 v7→v8 勘誤＋新 §13 整合者重產數（R1／R2 規則回合）＋新 §14 新核一手來源。§7 EX14 表一格加 v8 解決註（劃線保留原句）。配套草稿：`SKILL_DRAFT_character_design_core_v8_20261110.md`。以下 v7 原文照錄。')
r='\n'.join(L)
old='**整合抽查未能抽到日期 → ⚠未解**'
assert r.count(old)==1
r=r.replace(old,'~~**整合抽查未能抽到日期 → ⚠未解**~~ → **v8 已解：2022-01-08**（整合者核到站內時間 2022-01-08 18:00 JST，即 HKT 17:00；見 §12 v7→v8）')
P='lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/'
add=f'''### 12.1 勘誤（v7 → v8）
- **EX14 日期**：Animate Times 守屋竜史 P×上内健太 P 訪談（https://www.animatetimes.com/news/details.php?id=1640588189 ）刊出日＝**2022-01-08**（站內 18:00 JST＝HKT 17:00；整合者 R1 規則輪核到）。E1「2022-01-05」錯；v7 §7「⚠未解」同 v7 草稿附錄 B「01-05／01-08 未解」已解。v7 草稿 EX14 標題「Animate Times 2022-01」本身冇錯，唔改。
- **EX05 bbox 頂名單（整合者 R1 整合勘誤）**：R1 整合寫「杏／祐介／真／春」錯；春 bbox 頂係帽羽＝頭飾＝頭。正確＝竜司（邊際）／杏／祐介／真，4／7（§13）。
- **EX05 怪盗明度**：「怪盗較暗」只限隊友 6／6；主人公 18.08→22.69 反而略亮（§13）。

## 13. 整合者重產數（規則回合 R1／R2；v8 新增）
只列 §1A 引用、標〔重產〕嘅數。路徑以 `/workspace/haruka/` 為根。

| 例 | 數 | 定義／協議 | 腳本／輸出 |
|---|---|---|---|
| EX01 | 同衫平靜 vs 哭全身 IoU 0.963／0.970；配對姿勢載體 0.769／0.770 | 官方立繪 alpha 剪影、同高正規化；只量外包絡差（R4） | `{P}rules_r1_integration/rerun_pm/`（`R1_pose_vs_carrier_iou_overlays.png`） |
| EX05 | 秀尽 blazer 軀幹帶 L*<40 份額 主人公 0.964／竜司 0.4808／杏 0.4414 | 同一角色身上軀幹帶局部份額（唔係跨姿勢 IoU） | `{P}INTEGRATION_RULES_R1_20261110.md` G11 列 |
| EX05 | 怪盗 bbox 頂唔係頭 4／7：竜司（鐵通，邊際）、杏（鞭）、祐介（刀）、真（飄動披巾）；主人公／双葉＝髮，春＝帽羽（頭飾＝頭） | `raw_p5/*_char_img2.png` alpha 緊框頂 30% 目視 | `{P}rules_r2_integration/ex05_top_check.py` → `EX05_thief_bbox_top_top30.png`、`.json` |
| EX05 | mean L* 日常→怪盗：主人公 18.08→22.69；竜司 34.28→30.21；杏 45.92→36.71；祐介 42.06→38.17；真 28.08→24.27；双葉 41.6→31.69；春 59.56→36.64（隊友差 −3.81 至 −22.92；主人公 +4.61） | alpha>20 全身 mean CIE L*；char_img vs char_img2；怪盗彩圖含 CODE NAME 字標 | `{P}rules_r2_integration/ex05_team_Lstar.py` → `EX05_team_Lstar.json` |
| EX14 | 含劍寬高比 0.7443 vs 剔劍 0.5801 | 官方遊戲立繪 alpha>20 緊框；剔劍＝tv_simplify v2 人手多邊形 | R1 整合；R2 FS 獨立再量一致 |
| EX14 | 含劍 vs 剔劍全身 IoU **0.821**（XOR 約 92% 喺 0–60% 高度帶） | H＝256 NEAREST、底對齊、水平偏移取全局最佳（中心起 dx 21）。協議變體：左緣起 ±38 搜索 0.6774（＝CV 0.6813 嘅成因）；左緣對齊 0.2858；中心對齊 0.454；TVS 同畫布 0.845＝另一協議，唔引 | `{P}rules_r2_integration/ex14_iou_protocols.py` → `EX14_iou_protocols.json` |
| EX14 | 以頭為錨方框（頂＝呆毛 y 268、頭中心 x 1160；邊長 0.22／0.25／0.28 H，H＝1803）劍像素 0／0／0；bbox 中心定 x 嘅 0.28 H 方框 2948 px、頂帶重心定 x 3099 px | 劍遮罩＝`qa_game_sword_overlay_v2.png` 洋紅像素，偏移 (311,268) | `{P}rules_r2_integration/ex14_sword_headbox.py` → `EX14_sword_vs_headbox.png`、`.json` |
| EX02 | 極點行 t：B1 背面右 0.163–0.604（伸臂＋槍）；B2 正面左 0.366–0.408、右 0.312–0.35（肩羽）；B2 背面 0.363–0.409 | PM i3 剪影（遮罩＝<128）；極點行＝離 bbox 邊 ≤3 px | `{P}rules_r2_integration/ex02_gun_extremes.py` → `EX02_gun_vs_bbox_extremes.png`、`.json` |

## 14. 新核一手來源（規則回合；v8 新增）
整合者親自打開、讀到引文先收。

| 來源 | URL | 級別 | 引文 | 用喺 |
|---|---|---|---|---|
| Valve, Illustrative Rendering in Team Fortress 2（NPAR 2007） | https://cdn.fastly.steamstatic.com/apps/valve/2007/NPAR07_IllustrativeRenderingInTeamFortress2.pdf （PDF md5 `87b07e8dde1ae968b72eb5e60c7ede9b`） | A（開發商） | 「The body proportions, weapons and silhouette lines as determined by footwear, hats and clothing folds were explicitly designed to give each character a unique silhouette.」 | G14、G15A（唔講裁切） |
| Aiming 伊勢田佑之（2025-04-02） | https://developer.aiming-inc.com/design/post-12478/ | B（設計師） | 「大きな武器を持っているならこのポーズだな…体のシルエットを見せたいからマントは短く軽装に…」；「武器アイコンもシルエットだけでどんなものなのか伝わるように作る必要がありました」 | G14、G15A |
| pixivision SWAV（2022-03-11） | https://www.pixivision.net/ja/a/7406 | B（畫師） | 「イラストにおいて目を引くのは人間そのもの、とりわけ顔です。」；「右手で銃を撃つなら、どこにホルスターを着けるといい？」 | G15B；G10（只引掛點邏輯） |
| PlatinumGames 島崎（Bayonetta 2 dev blog 241） | https://www.platinumgames.co.jp/dev-bayonetta2/article/241 | A | 「トレードマークの一つでもあったヘアスタイルをガラっと変えました」 | G05 |
| 渡辺明夫（Animate Times） | https://www.animatetimes.com/news/details.php?id=1607054667 | B | 「線の数は減らして」「装備や武器の細かさはそのまま」「側面図や背面図」 | G06、G10、G12 |
| 高藤 | https://www.akiba-plus.com/?p=126982 | B | 「色面の比率を変えない」 | G06 |
| 本庄雷太 | https://www.valkyria-anime.com/special/interview/03-01.html | B | 「線が間引かれ」「胸から上が一番表示される」 | G06、G07、G15B |
| 足立慎吾（SAO，反來源） | https://www.swordart-online.net/special/interview02.html | B | 「なるべく線を減らさず」 | G06 反來源 |
| 大貫健一（部分反來源） | https://anime.eiga.com/news/column/loop7/120854/ | B | 減線但盡量唔省略（意譯） | G06 |
| 朝香栞 | https://kizunanoallele.com/index.html@p=1115.html | B | 「ここまでの表情なら」 | G12(b) 文本 |
| パラノマサイト導演 | https://www.ndw.jp/paranormasight-interview-1th/3/ | B | 「着こなしで差を出しました」 | G11 |
| 守屋×上内（Animate Times） | https://www.animatetimes.com/news/details.php?id=1640588189&p=2 | B | 王冠尖數（§7 已收） | G06、G12(b) |

- **只係方向核到、整合者未親核**：PSY 引 Platinum 241「黒の装いという設定は変わらず」——唔引。
- **NOT_FOUND**：頭部安全區／以頭為錨裁切嘅業內規格（CO、PM）；「簽名色≠最大面積」嘅業內一手。

'''
anchor='## 變更紀錄（append-only）'
assert r.count(anchor)==1
r=r.replace(anchor,add+anchor)
r=r.rstrip('\n')+f'\n- {now} HKT：由 v7 寫成新檔 v8。§1–§12 照錄（§7 EX14 一格加 v8 解決註，劃線保留原句）；加 §12.1 v7→v8 勘誤、§13 整合者重產數、§14 新核一手來源。v7 原檔冇改（md5 `{mr7}`），備份 `.bak_20261110_pre_v8`。\n'
open(R8,'w').write(r)
assert md5(V7)==m7 and md5(R7)==mr7
print('v8',md5(V8),len(open(V8).read().split('\n')));print('ref8',md5(R8),len(open(R8).read().split('\n')))
