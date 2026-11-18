#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, re, sys, hashlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from final_wording_v7 import STATUS, W
R = '/workspace/haruka/research'
OUT = '/workspace/haruka/lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/INTEGRATION_I5_20261110.md'
DIRS = [('audience_market','AM'),('color_value','CV'),('commercial','CO'),('construction_fashion','CF'),('flow_structure','FS'),
        ('head_hair','HH'),('identity_canon','IDC'),('motif_world','MW'),('originality','OR'),('performance_motion','PM'),
        ('production_critic','PC'),('psychology','PSY'),('silhouette_cast','SC'),('tv_simplify','TVS')]
EXS = ['EX03','EX04','EX05','EX06','EX09','EX11','EX12','EX13']
V = {}
for d, ab in DIRS:
    t = open(f'{R}/{d}/SKILL_EXAMPLE_IMG_I5_VOTE_20261110.md', encoding='utf-8').read()
    for ex in EXS:
        m = re.search(rf'^\|\s*{ex}\s*\|\s*(ACCEPT_WITH_EDITS|ACCEPT|REJECT)\s*\|', t, re.M)
        assert m, (d, ex); V[(ab, ex)] = m.group(1)
cnt = {k: sum(1 for v in V.values() if v == k) for k in ('ACCEPT','ACCEPT_WITH_EDITS','REJECT')}
assert cnt == {'ACCEPT': 96, 'ACCEPT_WITH_EDITS': 16, 'REJECT': 0}, cnt
L = []
A = L.append
A('# INTEGRATION I5：例子圖像回合第五輪整合（2026-11-10 HKT）')
A('')
A('> 輸入：14 份 `research/<dir>/SKILL_EXAMPLE_IMG_I5_VOTE_20261110.md`（逐份讀過，唔用轉述清單）。輸出：`skill_distill/SKILL_DRAFT_character_design_core_v7_20261110.md`、`SKILL_REF_character_design_sources_v7_20261110.md`。v6、REF v6、I3／I4／I5 檔全部冇改（md5 見 §6）。冇 git。')
A('')
A('## 1. 投票表（14 方向 × 8 個 SPLIT 例；表由 `v7_build/build_integration_i5.py` 直接由投票檔解析）')
A('')
A('| 方向 | ' + ' | '.join(EXS) + ' |'); A('|---|' + '---|' * len(EXS))
short = {'ACCEPT': 'ACC', 'ACCEPT_WITH_EDITS': '**AWE**', 'REJECT': 'REJ'}
for d, ab in DIRS:
    A(f'| {ab}（{d}） | ' + ' | '.join(short[V[(ab, ex)]] for ex in EXS) + ' |')
A('| **合計 ACC／AWE／REJ** | ' + ' | '.join(f"{sum(V[(ab,ex)]=='ACCEPT' for _,ab in DIRS)}／{sum(V[(ab,ex)]=='ACCEPT_WITH_EDITS' for _,ab in DIRS)}／{sum(V[(ab,ex)]=='REJECT' for _,ab in DIRS)}" for ex in EXS) + ' |')
A('')
A(f'- 合計：ACCEPT {cnt["ACCEPT"]}、ACCEPT_WITH_EDITS {cnt["ACCEPT_WITH_EDITS"]}、REJECT {cnt["REJECT"]}。上游轉述嘅 AWE 清單同投票檔逐格一致。')
A('- EX01、EX02、EX07、EX08、EX10、EX14 喺 I4 已 14 方向 CONVERGED，冇入 I5 投票；v7 用 I4 收斂句（連 I4 converged 修訂）。')
A('')
A('## 2. 每條修訂點處理（16／16 採納；其中 3 條調整後採納、多條合併）')
A('')
RES = [
 ('EX03','SC','64 px 通道要分開寫','**採納＋改標籤**。SC 叫「貼臉頭像」，但 CO I5 metrics 個框邊長係人高 0.244、貼頂，實際係頭肩方框；定稿寫「頭肩方框 64（貼頂，邊長約人高 0.24）」，同 v7-R5 通道名一致。'),
 ('EX03','HH','head_hair v4 34.28% 要連 mask_version 同偏低原因','**採納**。HH 自己 I3 圖（`04_head_zoom_vs_color_value.png`）見面窗食咗側髮同下巴下髮；百分比以 CV 凍結多邊形為準，HH v4 只連版本引用。HH I2 IoU 0.17／0.54 遮罩未核，列入作廢表「唔引用」。'),
 ('EX03','PM','ユズ都有一隻靴外撇','**採納**（整合者放大 `yuzu_feet` 核實：畫面左腳腳尖外撇）。クルミ嗰隻外撇靴係抬高嗰隻；鞋底高差 クルミ約 5.5%、ユズ約 2.2%。兩人都冇踢腿。'),
 ('EX04','SC','加填實剪影通道','**採納**：「官方彩色全身 64 同填實全身剪影 64 第一眼都係槍＋刃翼外包絡」。'),
 ('EX05','CO','「比彩圖身體多」定義錯','**採納**：改「剪影入面 22–51% 像素落喺彩圖身體之外（分母＝剪影）」；CO I5-E1 自己改 alpha 剔字框為 26.6–38.7%，同 CV 對齊，定稿寫約 27–39%。'),
 ('EX06','SC','加填實剪影層','**採納**（0.606 vs 0.522 實心度）。'),
 ('EX06','CF','藍門檻改 ≤0.02','**採納、同 SC 合併**。≤0.01 會漏咗 CF 0.0113 同 SC 0.016；≤0.02 包晒各方向貼臉頭像藍份額。頭肩方框紅改寫「約 0.19–0.46」（CO I5：邊長 0.22／0.28 → 0.1945／0.4628；PM 0.254 落喺範圍內），即係紅份額隨框大細大變，要寫框。'),
 ('EX09','HH','手版遮罩 0.246','**採納**（INTEGRATION_I2 已記 HH I1 手版 0.742／0.246）。髮 ΔL* 定稿「約 63–69」。'),
 ('EX11','HH','head_hair v3 唔入人手多邊形 ΔL* 名單','**採納＋調整**。HH v3「衣」＝全身減髮減面（含褲），唔係外套，所以 naoya 81.55−50.42 唔係「髮 vs 外套」，剔出名單；HH v3 77.33／15.55 只連定義引用。HH 自己替換句仍寫 naoto「62–69」，剔走 HH 之後下限唔再成立，定稿改 naoto 約 69（IDC 68.79、PC 69.33）。'),
 ('EX12','CO','頭像 64 實係頭肩方框','**採納**。CV icon_box [275,90,405,220] 邊長 130／人高 485 ≈ 0.268、貼頂 → 頭肩方框。'),
 ('EX12','CV','小夾尺寸','**採納**：長邊約 9.85–12.31 px、短邊約 7.38–9.85 px。'),
 ('EX12','CF','剔「大致形可辨」','**採納**。'),
 ('EX12','AM','剔「大致形可辨」；色點可見、形狀唔驗','**採納、同 CF／CV 合併**。MW、PM 原本接受原句，但 R1（64 px 只證大形）同 CO I3 勘誤都唔支持喺 7–12 px 講形狀，所以剔。'),
 ('EX12','PSY','跨形態頭區塊句','**採納＋改寫**。L* 數核實（日常 70.1、治癒 70.24；治癒髮 70.70、日常髮 53.84）；PSY 原句「唔係真我／治癒」屬心理解讀，改成通用句「像素唔證性格意義」。「12 倍」核實＝7714／631 px（AM I1）。'),
 ('EX13','SC','64 px 句','**採納、同 AM 合併**（SC 版係超集）。'),
 ('EX13','AM','64 px 句＋留邊','**採納、合併**。尾尖右緣：整合者放大 x≈791、底 y≈548，同 CO x 782–791（217 px 裁切）一致；SC tip_xy x=798 略偏右。定稿保留「建議留邊至 x≥795」。'),
]
A('| 例 | 方向 | 修訂點 | 處理同理由 |'); A('|---|---|---|---|')
for r in RES: A('| ' + ' | '.join(r) + ' |')
A('')
A('## 3. 有爭議數字核對')
A('')
for s in [
 '**EX11 naoya 81.55−50.42**：head_hair v3 嘅「衣」係全身減髮減面（含褲），唔係外套 → 唔入人手多邊形 ΔL* 名單；v7 例塊冇 50.42、81.55（作廢表有列）。',
 '**EX06 藍門檻**：用 ≤0.02。貼臉頭像藍份額：CF 0.0113、SC 0.016；≤0.01 會錯排走兩個方向。',
 '**EX12 頭像框**：130／485 ≈ 0.268、貼頂 → 頭肩方框，唔係貼臉頭像。',
 '**EX13 尾尖 x**：x≈782–791（整合者＋CO）；SC 798 偏右；留邊 x≥795。尾尖高度比 0.684–0.690（整合 0.685、SC 0.684、PM 0.690、CF 0.687、MW／PC 0.685）vs 膝 0.734–0.738 → 約到膝、略高於膝環、唔到小腿。',
 '**EX03 ユズ靴**：外撇成立（放大核實）；兩人都冇踢腿。',
]: A('- ' + s)
A('')
A('## 4. 仍未解決／未重現')
A('')
for s in [
 'PM 對 EX13「留邊至 x≥795」唔表態（唔係反對）；呢句係裁切建議，唔係量度。',
 'EX11 naoya 髮多邊形 L* 各方向差約 9（遮罩手畫差異）；定稿只寫方向一致嘅差，唔寫單一數。',
 '其餘未重現項（EX02「ソリッド／直線」邊緣方向未量證、EX06 21 種表情集未見、EX07 跨片唔量化、EX13 遊戲內遠讀等）列喺 v7 附錄 B。',
 '冇方向 REJECT；所有方向對整合者三張核對圖（EX03、EX05、EX13）都同意，多個方向附咗自我勘誤（CV、MW、CF、OR、PC 撤回、FS、HH、TVS、CO I5-E1／E2），已收入 REF v7 §12 或作廢表。',
]: A('- ' + s)
A('')
A('## 5. 14 例定稿「圖像核對」句（同 v7 草稿逐字一致；來源 `v7_build/final_wording_v7.py`）')
for ex in sorted(W):
    A(f'\n### {ex}　〔{STATUS[ex]}〕\n'); A(W[ex])
A('')
A('## 6. 檔案')
A('')
A('- 草稿 v7：`skill_distill/SKILL_DRAFT_character_design_core_v7_20261110.md`')
A('- REF v7：`skill_distill/SKILL_REF_character_design_sources_v7_20261110.md`（§9 證據圖、§10 有效數字、§11 作廢數字、§12 勘誤）')
A('- 自檢：`v7_build/check_v7.py` → `v7_build/check_v7_result.json`（ok=true，problems=[]）')
A('- 改動說明（俾作者）：`CHANGELOG_v6_to_v7_20261110.md`；總覽圖：`OVERVIEW_EXAMPLES_IMG_v7_20261110.png`（＋`.sources.json`、`generate_overview_v7_20261110.py`）')
A('- 備份：`….v6_20261110.md.bak_20261110_pre_v7`（兩份，md5 同原檔）')
A('- md5（寫入時）：v6 `df5dcf499c8761179a6267b362f596c7`、REF v6 `289faddc79b54fce4689bd1dac96e641`')
assert not os.path.exists(OUT) or '--force' in sys.argv
open(OUT, 'w', encoding='utf-8').write('\n'.join(L) + '\n'); print(OUT, cnt)
