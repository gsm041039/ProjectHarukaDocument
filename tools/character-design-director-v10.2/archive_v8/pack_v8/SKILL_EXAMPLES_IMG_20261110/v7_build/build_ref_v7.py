#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, sys, hashlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figures_v7 import VALID, VOID
SD = '/workspace/haruka/lab/canon/_working/skill_distill'
R6 = f'{SD}/SKILL_REF_character_design_sources_v6_20261110.md'
R7 = f'{SD}/SKILL_REF_character_design_sources_v7_20261110.md'
R6_MD5 = '289faddc79b54fce4689bd1dac96e641'
assert hashlib.md5(open(R6,'rb').read()).hexdigest() == R6_MD5
s = open(R6, encoding='utf-8').read()
IMG = 'SKILL_EXAMPLES_IMG_20261110'
assert s.startswith('# SKILL_REF v6：')
s = s.replace('# SKILL_REF v6：角色設計 skill 證據卡（2026-11-10 HKT）',
 f'# SKILL_REF v7：角色設計 skill 證據卡（2026-11-10 HKT）\n\n> v7＝REF v6 全文（§1–§8 一字冇改；v6 原檔 md5 前後皆 `{R6_MD5}`，備份 `….md.bak_20261110_pre_v7`）＋新 §9 I3–I5 證據圖＋§10 有效數字表＋§11 作廢數字表＋§12 勘誤。配套草稿：`SKILL_DRAFT_character_design_core_v7_20261110.md`。以下 v6 原文照錄。', 1)

def row(cells): return '| ' + ' | '.join(cells) + ' |'
P = []
P.append('\n## 9. I3–I5 證據圖（只列定稿句依賴嘅圖；全部係研究員或整合者由官方圖衍生，冇新來源）')
P.append('- 路徑以 `research/` 或本檔所在目錄為起點；官方原圖 md5 見 §8 同各方向 metrics.json。')
EV = {
 'EX01': ['color_value/i4_img/（全身 64 vs icon64 份額，metrics.json）', 'commercial/i4_img/EX01/metrics.json'],
 'EX03': [f'`{IMG}/I4_integration_check/EX03_pose_kurumi_vs_yuzu.png`（姿勢）', '`performance_motion/i4_img/EX03/EX03_h256_pose.png`', '`head_hair/i3_img/EX03/04_head_zoom_vs_color_value.png`（HH 面窗食側髮）', '`color_value/i3_img/EX03/10_region_masks_qc.png`（凍結多邊形 QC）'],
 'EX04': ['`head_hair/i3_img/EX04/03_thumb_bat_full_h64_lanczos.png`、`03_thumb_bat_head_h64_lanczos.png`', '`silhouette_cast/i3_img/EX04/sheet_h64_sil.png`', '`performance_motion/i4_img/EX04/EX04_headband_maskQC_t250_magenta_is_bg.png`'],
 'EX05': [f'`{IMG}/I4_integration_check/EX05_char_s2_vs_img2_7.png`（七人 char_s2 冇字）', '`commercial/i4_img/EX05/EX05_s2_vs_img2_alpha_overlay.png`', '`performance_motion/i4_img/EX05/EX05_typo_green_inside_s2_magenta_outside.png`', '`motif_world/i4_img/EX05/05_official64_vs_I2stripped.png`（I2 剔字縮圖仍含字）'],
 'EX06': ['`commercial/i5_img/EX06_crop_definitions_64.png`', '`commercial/i4_img/EX06/EX06_official_faces_64.png`', '`performance_motion/i4_img/EX06/EX06_head64_full64_nn6.png`', '`color_value/i4_img/EX06/EX06_hue_full64_icon64_overlay.png`', '`production_critic/i4_img/EX06/canny_h512_pc60_140_pair.png`', '`silhouette_cast/i4_img/EX06/channel_sheet.png`'],
 'EX07': ['color_value／commercial／motif_world I4 EX07 metrics.json（正規化軸）'],
 'EX09': ['`commercial/i4_img/EX09/EX09_cafe_pose_xor.png`', '`color_value/i4_img/EX09/EX09_clothes_full64_icon64_overlay.png`', '`motif_world/i4_img/EX09/02_lyc_c_full_vs_icon_h64_x4.png`'],
 'EX10': ['commercial I4 `i4_ex10_crop_sweep.py` → `commercial/i4_img/EX10/EX10_crop_sweep.png`'],
 'EX11': ['`production_critic/i4_img/EX11/01_hair_poly_qc_naoya.png`、`01_hair_poly_qc_naoto.png`', '`head_hair/i3_img/EX11/04_head_zoom_vs_identity_canon.png`', '`color_value/i4_img/EX11/EX11_value_full64_icon64.png`'],
 'EX12': ['`color_value/i4_img/EX12/EX12_features_full64_icon64.png`', '`motif_world/i4_img/EX12/02_daily_full_vs_icon_h64_x4.png`', '`performance_motion/i4_img/EX12/EX12_daily_head64_full64_nn6.png`'],
 'EX13': [f'`{IMG}/I4_integration_check/EX13_frame0_asu_side_tip_vs_knee.png`', '`commercial/i4_img/EX13/EX13_tip_vs_knee_qc.png`', '`silhouette_cast/i5_img/EX13/tip_vs_knee_labeled.png`', '`production_critic/i5_img/EX13/03_zoom_i4_y705_grass.png`（PC 撤回）'],
 'EX14': ['`tv_simplify/img_examples_20261110/official/anime_pecorine_thumb_pc.png`（官方一覽縮圖，§8）', 'color_value／originality I4 EX14 王冠尺寸 metrics'],
}
for ex in sorted(EV):
    P.append(f'- **{ex}**：' + '；'.join(EV[ex]))

P.append('\n## 10. 有效數字表（v7 例塊入面嘅每個數）')
P.append('- 用法：v7 例塊（比較、教、用途、圖像核對、唔證行）入面嘅每個數，都要喺對應例嘅表入面出現；`check_v7.py` 逐例核。數字係定稿句用嘅四捨五入值，括號係原值。')
P.append('- 「定義」行係通道尺寸或閾值等常數，唔係量度。')
for ex in sorted(VALID):
    P.append(f'\n### {ex}'); P.append(row(['數', '意思／定義', '出處'])); P.append('|---|---|---|')
    for nums, mean, src in VALID[ex]:
        P.append(row([' '.join(f'`{n}`' for n in nums.split()), mean, src]))

P.append('\n## 11. 作廢數字表（唔准再引用；v7 例塊冇一個）')
P.append('- `phrase:` 開頭係作廢措辭（逐字核）。其餘係數字 token。「取代」欄係而家用嘅數或處理。')
for ex in sorted(VOID):
    P.append(f'\n### {ex}'); P.append(row(['數', '作廢原因', '取代']));  P.append('|---|---|---|')
    if not VOID[ex]: P.append(row(['—', '本輪冇作廢數', '—']))
    for tok, why, rep in VOID[ex]:
        P.append(row([f'`{tok}`', why, rep]))

P.append('\n## 12. 勘誤（v6 → v7）')
for line in [
 '**EX13**：v6「下垂近小腿」錯。官方 GIF 第 0 幀：尾尖約 y=545–548、膝環約 y=578、靴底 y=755；尾尖約到膝、略高於膝環、唔到小腿（整合者＋5 個方向獨立核）。production_critic I4 嘅 (763,705) 係草地，已撤回。',
 '**EX03**：v6「踢腳姿勢」錯。兩人都冇踢腿：クルミ一臂外伸、一靴外撇（鞋底高差約身高 5.5%）；ユズ直立、亦有一靴腳尖外撇（約 2.2%）。',
 '**EX05**：官方 `char_s`／`char_s2` 剪影資產本身冇 CODE NAME 字（七人連通塊 1）。殘字係彩圖字標壓住身體；v6 指嘅 commercial I2 剔字 64 px 縮圖仍含字，撤回。CO I4「比彩圖身體多 22–51%」定義錯，改「剪影入面 22–51% 像素落喺彩圖身體之外」；「剔字框剷走 22–39%」改 27–39%。',
 '**EX06**：v6「頭像尺度第一眼身份係髮＋禮裝大色塊」只喺頭肩方框成立；貼臉頭像同官方宣傳臉禮裝色幾乎唔入框。兩套立ち絵都係高細節，邊緣密度要寫協議。',
 '**EX07**：v6「2016 全幅 64 px 只剩一點」未寫正規化軸：按畫框高人物仍約 56–59 px。',
 '**EX09**：喫茶站姿唔係完全配平（千束舉拳）；production_critic I4 嘅頭像衣色句同量度相反，已撤回。',
 '**EX11**：head_hair「衣」＝全身減髮減面（含褲），唔入人手多邊形 ΔL* 名單；psychology I4 引用嘅 head_hair v2 數已作廢。',
 '**EX12**：頭像 64 小夾「色點可見、形狀唔驗」；唔寫「大致形可辨」。',
 '**EX14**：官方 TV 一覽縮圖本身已見 3 尖；CV I3 橙族％食膚，作廢。',
 '**EX01**：originality 1.162 → 1.201。',
]:
    P.append('- ' + line)
s = s.replace('\n## 變更紀錄（append-only）', '\n'.join(P) + '\n\n## 變更紀錄（append-only）', 1)
s = s.rstrip('\n') + '\n' + f'- 2026-11-10 HKT：由 v6 寫成新檔 v7。§1–§8 照抄；加 §9 I3–I5 證據圖、§10 有效數字表、§11 作廢數字表、§12 勘誤。v6 原檔冇改（md5 `{R6_MD5}`）。\n'
assert not os.path.exists(R7) or '--force' in sys.argv
open(R7, 'w', encoding='utf-8').write(s)
assert hashlib.md5(open(R6,'rb').read()).hexdigest() == R6_MD5
print('wrote', R7)
