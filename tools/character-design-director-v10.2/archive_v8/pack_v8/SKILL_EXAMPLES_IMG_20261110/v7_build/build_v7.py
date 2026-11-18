#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build SKILL_DRAFT v7 from v6 (read-only) + final_wording_v7. 2026-11-10 HKT.
Every replacement asserts its anchor occurs exactly once in v6."""
import os, re, hashlib, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from final_wording_v7 import W, STATUS

SD = '/workspace/haruka/lab/canon/_working/skill_distill'
V6 = f'{SD}/SKILL_DRAFT_character_design_core_v6_20261110.md'
V7 = f'{SD}/SKILL_DRAFT_character_design_core_v7_20261110.md'
V6_MD5 = 'df5dcf499c8761179a6267b362f596c7'
assert hashlib.md5(open(V6,'rb').read()).hexdigest() == V6_MD5
s = open(V6, encoding='utf-8').read()

def rep(old, new):
    global s
    n = s.count(old)
    assert n == 1, (n, old[:60])
    s = s.replace(old, new)

IMG = 'SKILL_EXAMPLES_IMG_20261110'
# ---------- title + status ----------
rep('# 角色／服裝設計核心 v6：', '# 角色／服裝設計核心 v7：')
old_status_start = s.index('> **狀態**：未安裝草稿（2026-11-10 HKT）。冇做 UpdateSkill。')
old_status_end = s.index('## CHANGELOG v5 → v6')
old_status = s[old_status_start:old_status_end]
new_status = f"""> **狀態**：未安裝草稿（2026-11-10 HKT）。冇做 UpdateSkill。
> - 基底：`SKILL_DRAFT_character_design_core_v6_20261110.md`（原檔冇改；md5 前後皆 `{V6_MD5}`；備份 `….md.bak_20261110_pre_v7`）。v7＝v6 全文＋CHANGELOG v6→v7＋14 個例塊「圖像核對」按 I3–I5 圖像回合定稿＋規則補句（正文標〔v7〕／〔v7-R5〕）＋附錄 B 追加＋新附錄 E。R1–R4 原句保留。
> - 圖像回合整合：`{IMG}/INTEGRATION_I4_20261110.md`（I4 收斂：196 格 185 CONVERGED、11 SPLIT）、`{IMG}/INTEGRATION_I5_20261110.md`（I5 投票：14 方向 × 8 句，ACCEPT 96、ACCEPT_WITH_EDITS 16、REJECT 0）。總覽圖：`{IMG}/OVERVIEW_EXAMPLES_IMG_v7_20261110.png`。
> - 證據卡：`SKILL_REF_character_design_sources_v7_20261110.md`（＝REF v6＋§9 I3–I5 證據圖＋§10 有效數字表＋§11 作廢數字表＋§12 勘誤）。例塊入面每個數都喺 §10、冇一個喺 §11（自檢腳本 `{IMG}/v7_build/check_v7.py`）。
> - v6 原狀態註（保留）：
""" + '\n'.join('> ' + l[2:] if l.startswith('> ') else l for l in old_status.rstrip('\n').split('\n')[1:]) + '\n\n'
s = s[:old_status_start] + new_status + s[old_status_end:]

CHANGELOG = f"""## CHANGELOG v6 → v7（2026-11-10 HKT）
1. **圖像回合 I3–I5**：I3 14 方向全面互審（196 格冇 CONTRADICT）；I4 逐例討論（185 格 CONVERGED、11 格 SPLIT，分佈喺 8 個例）；I5 對 8 句合併句投票（ACCEPT 96、ACCEPT_WITH_EDITS 16、REJECT 0）。16 個編修全部收入（相容嘅合併；衝突時揀圖像證據較強嗰邊，逐條見 `{IMG}/INTEGRATION_I5_20261110.md` §2）。
2. **14 個例塊「圖像核對」定稿**：每塊改用 I5 定稿句（全部例都寫「64 px（分通道）」）；舊作廢數由例塊移走，集中喺 REF v7 §11。
3. **勘誤（例塊同比較行）**：
   - EX13：ASU 馬尾尖約到膝、略高於膝環，**唔到小腿**（v6「下垂近小腿」撤回）；側框要包到金尖。
   - EX03：兩人**都冇踢腿**——クルミ一臂外伸、一靴外撇；ユズ直立、亦有一靴外撇（v6「踢腳姿勢」撤回）。
   - EX05：官方 `char_s`／`char_s2` 剪影資產**本身冇字**；殘字源自彩圖字標壓身；v6 所指 commercial I2 剔字縮圖仍見字，撤回。剪影比彩圖身體「多 22–51%」改為「剪影入面 22–51% 像素落喺彩圖身體之外」。
   - EX06：「頭像尺度第一眼係髮＋禮裝大色塊」撤回，改分三個裁切；兩套立ち絵都係高細節，邊緣密度要寫協議。
   - EX07：「2016 全幅 64 px 只剩一點」改寫正規化軸；可見差主要由光線／距離帶動；紋理殘存值唔等於可讀。
   - EX09：喫茶站姿未完全配平（千束舉拳）；頭像衣色分裁切寫。
   - EX11：head_hair「衣」係全身減髮減面，唔入人手多邊形 ΔL* 名單。
   - EX12：頭像 64 小夾「色點可見、形狀唔驗」（唔寫「大致形可辨」）。
   - EX14：官方 TV 一覽縮圖本身已見 3 尖；TV 形態唔係變暗。
   - EX01：寬度比寫定義（外接框約 1.20／最大行寬約 1.29–1.33／面積約 1.01）。
   - EX04：戦闘形態唔係變暗；含髮外包絡唔叫衣物剪影。
4. **規則句改動（逐條）**：
   - **〔v7-R5〕§8 新增「64 px 先寫通道」**：全身縮圖 vs 頭像／頭肩方框 vs 貼臉頭像 vs 官方縮圖；彩色 vs 填實剪影；裁切框同正規化軸；量度定義；重採樣協議。依據：EX01 EX06 EX09 EX12 EX14 同一物件喺唔同通道得出相反「第一眼」。
   - **〔v6-R1〕加一句註**：R1 講嘅係全身縮圖通道。
   - **〔v6-R2〕EX01 數改寫定義**（規則本身冇改）。
   - **〔v6-R3〕加一句〔v7〕**：框選樣本只報平均值唔報面積；區域定義（例如「衣物＝全身減髮減面」）要寫明。
   - **〔v6-R4〕加一句〔v7〕**：姿勢描述本身係圖像主張，要核圖、寫啱角色。
   - 其餘規則句一字冇改。
5. **Haruka 專屬**：冇。所有改動都係通用方法句；附錄 A 照舊。
6. **冇新來源**：數字同圖全部取自 14 方向 I1–I5 檔同整合者核圖（`{IMG}/I4_integration_check/`）；冇新研究。

"""
rep('## CHANGELOG v5 → v6（2026-11-10 HKT）', CHANGELOG + '## CHANGELOG v5 → v6（2026-11-10 HKT）')

# ---------- §0 note ----------
rep('圖像清單見 REF v6 §8。', '圖像清單見 REF v6 §8。v7：「圖像核對」行按 I3–I5 定稿，64 px 一律分通道寫；有效／作廢數字表見 REF v7 §10／§11。')

# ---------- per-example 圖像核對 lines ----------
lines = s.split('\n')
cur = None; done = set()
for i, l in enumerate(lines):
    m = re.match(r'> \*\*例 (EX\d\d)', l)
    if m: cur = m.group(1)
    if l.startswith('> - **圖像核對〔') and cur:
        tag = l[len('> - **圖像核對〔'):l.index('〕**：')]
        lines[i] = f'> - **圖像核對〔{tag}；{STATUS[cur]}〕**：' + W[cur]
        done.add(cur)
    if l.startswith('> - **互評**') and cur:
        lines[i] = l.rstrip() + f' I3–I5 圖像回合：{STATUS[cur]} → **收**（`{IMG}/INTEGRATION_I5_20261110.md`）。'
assert len(done) == 14, done
s = '\n'.join(lines)

# ---------- 比較／教 line errata ----------
rep('兩人衣物外包絡近似（目視；踢腳姿勢令全身剪影 IoU 唔公平，唔係全身重疊率）。',
    '兩人衣物外包絡近似（扣髮後衣物最長連續段／身高 0.305 vs 0.300；站姿未配平但兩人都冇踢腿，全身剪影 IoU 唔當衣物分）〔v7 勘誤〕。')
rep('ASU 側面馬尾離開顱骨、下垂近小腿；', 'ASU 側面馬尾離開顱骨、下垂約到膝（尾尖略高於膝環，唔到小腿）〔v7 勘誤〕；')
rep('`char_img2` 含 CODE NAME 字標。', '`char_img2` 含 CODE NAME 字標（壓住外套／腿）；`char_s`／`char_s2` 剪影資產本身冇字〔v7 勘誤〕。')
rep('外包絡加大主要係**寬度同下擺外展**（整體寬度比約 1.20），**實心面積比只約 1.01**',
    '外包絡加大主要係**寬度同下擺外展**（外接框寬比約 1.20、最大行寬比約 1.29–1.33），**實心面積比只約 1.01**')

# ---------- 圖 lines ----------
R = '../../../../research'
rep(f'；剔字標 64 px：`{R}/commercial/img_review_i2_20261110/commercial_add/ex05_hero_thief_stripped_64.png`',
    f'；剪影 vs 彩圖對齊：`{R}/commercial/i4_img/EX05/EX05_s2_vs_img2_alpha_overlay.png`；七人 `char_s2`（冇字）：`{IMG}/I4_integration_check/EX05_char_s2_vs_img2_7.png`（v6 嘅 I2 剔字 64 px 縮圖仍含字，撤回）')
def add_fig(anchor, extra):
    rep(anchor, anchor + '；' + extra)
add_fig(f'`{R}/color_value/img_examples_20261110/out/09_color_vs_gray_64_nnx6.png`', f'姿勢核圖：`{IMG}/I4_integration_check/EX03_pose_kurumi_vs_yuzu.png`')
add_fig(f'`{R}/originality/img_examples_20261110/analysis_v2/board_asu_side_recrop_qa.png`', f'尾尖 vs 膝環：`{IMG}/I4_integration_check/EX13_frame0_asu_side_tip_vs_knee.png`')
add_fig(f'`{R}/production_critic/img_examples_20261110/out/11_brow_tight_roi_julius_face02-1.png`', f'裁切定義 64：`{R}/commercial/i5_img/EX06_crop_definitions_64.png`；官方宣傳臉 64：`{R}/commercial/i4_img/EX06/EX06_official_faces_64.png`')
add_fig(f'`{R}/head_hair/img_examples_20261110/out_cafe_02_silhouettes_overlays.png`', f'全身 64 vs 貼臉頭像：`{R}/color_value/i4_img/EX09/EX09_clothes_full64_icon64_overlay.png`；喫茶舉拳 XOR：`{R}/commercial/i4_img/EX09/EX09_cafe_pose_xor.png`')
add_fig(f'`{R}/audience_market/img_examples_20261110/analysis/compare_sheet_h64_head_x8.png`', f'全身 64 vs 頭肩方框 64：`{R}/color_value/i4_img/EX12/EX12_features_full64_icon64.png`')
add_fig(f'`{R}/psychology/img_examples_20261110/v2/analysis_thumbs_h64_nearest4x.png`', f'頭像暗份額：`{R}/color_value/i4_img/EX11/EX11_value_full64_icon64.png`')

# ---------- rules ----------
rep('64 px 可見≠觀眾認得或記得（見下「四個層次」）。',
    '64 px 可見≠觀眾認得或記得（見下「四個層次」）。（〔v7〕呢條講嘅係**全身縮圖**通道；頭像同其他通道見下條。）\n'
    '- **64 px 先寫通道**〔v7-R5；圖像回合 I3–I5〕：任何 64 px 主張要寫明 (1) **通道**——全身縮圖（身高正規化，高 64）、頭肩方框（寫框邊長佔人高比例同錨點，例如貼 bbox 頂、邊長 0.22–0.28）、貼臉頭像、官方已發佈縮圖（例如 TV 一覽縮圖、宣傳臉、遊戲頭像；有就先睇）；(2) **彩色縮圖定填實黑剪影**；(3) **裁切框同正規化軸**（按畫框高／畫框闊／人物身高）；(4) **量度定義**（外接框寬、最大行寬、面積、實心度、份額分母、色分類規則）；(5) **重採樣協議**（例如 LANCZOS／BOX／INTER_AREA，直接縮定先縮後放）。同一細件可以喺全身 64 只得 2–3 px、喺頭像 64 有 10 px 以上；同一色塊可以喺全身 64 主導、喺貼臉頭像唔入框。唔同通道或定義嘅數唔可以互換，亦唔可以互相否定；頭像通道見到色點≠形狀已驗（R1 照用）。')
rep('並註明數字出自邊個遮罩版本〔v6-R3〕。',
    '並註明數字出自邊個遮罩版本〔v6-R3〕。框選樣本只報平均值，唔報面積％；區域定義（例如「衣物＝全身減髮減面」）要寫明，唔同定義嘅數唔可以對讀〔v7〕。')
rep('官方圖好少有同姿勢對照，冇就照報混淆〔v6-R4〕。',
    '官方圖好少有同姿勢對照，冇就照報混淆〔v6-R4〕。姿勢描述本身亦係圖像主張：要核圖、寫啱邊個角色、用可量詞（例如「一靴外撇、鞋底高差約身高 5%」），唔好用「踢腳」之類未核字眼〔v7〕。')
rep('換載體可以只加寬唔加面積（EX01：面積比約 1.01、寬度比約 1.20）',
    '換載體可以只加寬唔加面積（EX01：面積比約 1.01、外接框寬比約 1.20／最大行寬比約 1.29–1.33；寬度比一定要寫定義）')

# ---------- appendix B gaps ----------
rep('  - 朝日 EX11 訪談 URL 尾斜線存取不穩（各方向 200／403 結果相反）。\n\n## 附錄 C',
    '  - 朝日 EX11 訪談 URL 尾斜線存取不穩（各方向 200／403 結果相反）。\n'
    f'- **圖像回合缺口（v7，見 `{IMG}/INTEGRATION_I5_20261110.md` §4）**：\n'
    '  - 仍然冇人測：可見≠認得≠記得，全部未測；\n'
    '  - 未逐位重產（只靠兩個以上方向同向）：EX09 喫茶 XOR 27%、EX06 官方宣傳臉份額、EX07 人物佔畫高、EX11 直也髮多邊形 L*（各方向差約 9）；\n'
    '  - 淡色髮面積：EX04、EX14 NOT_REPORTED；EX09 喫茶千束 NOT_REPORTED；\n'
    '  - EX13 尾尖比例用人手地標（多方向同向），冇自動分割。\n\n## 附錄 C')

APPX_E = f"""
## 附錄 E：圖像回合 I3–I5 索引（v7）
| EX | I4 | I5 票（14 方向） | 全身 64 | 頭像／其他通道 64 | v7 主要更正 |
|---|---|---|---|---|---|
| EX01 | 全 CONVERGED | 無投票 | 兩形態可分；暗份額降、藍升 | 貼頂頭框：藍、暗份額都升 | 寬度比寫定義 |
| EX02 | 全 CONVERGED | 無投票 | 填實剪影冇開背 | 彩色背面 64 見背條、菱形唔驗 | 填實 vs 彩色分開寫 |
| EX03 | SPLIT（PM、AM）→ 化解 | ACC 11／AWE 3 | 彩色靠髮色；填實只剩髮量 | 頭肩方框 0.24 靠髮色 | 冇人踢腿；ユズ亦一靴外撇 |
| EX04 | SPLIT（HH）→ 化解 | ACC 13／AWE 1 | 彩色＋填實：槍＋刃翼；丸子 2–3 px | 頭部彩色裁切丸子 13–20 px | 唔叫衣物剪影；戦闘唔變暗 |
| EX05 | SPLIT（CO、PM）→ 化解 | ACC 13／AWE 1 | 彩色只目視、標殘字 | 填實用官方剪影資產（冇字） | char_s2 冇字；I2 剔字縮圖撤回 |
| EX06 | SPLIT（CO、PM）→ 化解 | ACC 12／AWE 2 | 禮裝大色塊＋髮；填實分鐘形裙 vs 披風 | 頭肩方框見紅領；貼臉頭像靠髮＋耳飾 | 頭像唔係禮裝大色塊；邊緣密度寫協議 |
| EX07 | 全 CONVERGED | 無投票 | 按畫框高：人物約 56–59 px | 按畫框闊：人物約 23–25 px | 「只剩一點」改寫軸 |
| EX08 | 全 CONVERGED | 無投票 | 連身輪廓、腰帶明度谷 | 冇頭像通道 | 註頸桿；ΔL 寫方向 |
| EX09 | SPLIT（CO）→ 投票收 | ACC 13／AWE 1 | 紅 vs 紺、淺 vs 深髮 | 頭肩方框留領色；貼臉頭像靠髮明度 | 千束舉拳未配平 |
| EX10 | 全 CONVERGED | 無投票 | 穿法差可讀 | 頂錨方框外套 0–0.5%；胸框 1/3 | 上半寬寫帶定義 |
| EX11 | SPLIT（AM）→ 化解 | ACC 13／AWE 1 | 直人清楚；直也弱 | 頭像靠領口明暗 | HH「衣」唔入 ΔL* 名單 |
| EX12 | SPLIT（HH）→ 化解 | ACC 9／AWE 5 | 小夾 2–3 px LOST | 頭肩方框 0.27：色點可見、形狀唔驗 | 唔寫「大致形可辨」 |
| EX13 | SPLIT（CO）→ 投票收 | ACC 12／AWE 2 | 側面（彩色＋填實）長垂線在 | 頭像 MAE 寫協議 | 尾尖到膝、唔到小腿 |
| EX14 | 全 CONVERGED | 無投票 | 王冠 6–7 px，尖數唔可靠 | 官方一覽縮圖 3 尖；頭像 64 可數 5／3 | TV 唔變暗 |

ACC＝ACCEPT；AWE＝ACCEPT_WITH_EDITS；REJECT 全部 0。方向縮寫見 `{IMG}/INTEGRATION_I4_20261110.md` §0.2。總覽圖：`{IMG}/OVERVIEW_EXAMPLES_IMG_v7_20261110.png`。
"""
rep('\n## 變更紀錄（append-only）', APPX_E + '\n## 變更紀錄（append-only）')
s = s.rstrip('\n') + '\n' + (f'- 2026-11-10 HKT：由 v6 加圖像回合 I3–I5 寫成新檔 v7；v6 原檔冇改（md5 `{V6_MD5}` 前後一致），另存備份 `.bak_20261110_pre_v7`。摘要見頂部 CHANGELOG v6 → v7；整合見 `{IMG}/INTEGRATION_I4_20261110.md`、`{IMG}/INTEGRATION_I5_20261110.md`。新規則句只有〔v7-R5〕；〔v6-R1〕至〔v6-R4〕原句保留，只加〔v7〕補句。\n')
assert not os.path.exists(V7) or '--force' in sys.argv, 'v7 exists'
open(V7, 'w', encoding='utf-8').write(s)
assert hashlib.md5(open(V6,'rb').read()).hexdigest() == V6_MD5
print('wrote', V7, len(s))
