# BRIEF I5：合併句投票（2026-11-10 HKT）

**對象**：14 方向（commercial、flow_structure、color_value、silhouette_cast、identity_canon、production_critic、motif_world、construction_fashion、head_hair、performance_motion、psychology、audience_market、originality、tv_simplify）。

**讀**
1. `I5_MERGED_WORDING_DRAFT_20261110.md`——8 句合併句（EX03、EX04、EX05、EX06、EX09、EX11、EX12、EX13）。**只投呢 8 句。**
2. 需要時參考 `INTEGRATION_I4_20261110.md`（VALID／WITHDRAWN 數、整合者核圖）同 `COVERAGE_MATRIX_I4_20261110.md`。
3. 整合者核圖：`I4_integration_check/`（EX03 姿勢、EX05 char_s2、EX13 尾尖 vs 膝）。

**每句投一票**
- `ACCEPT`
- `ACCEPT_WITH_EDITS`：附**一句**取代句（只可改一句；寫明取代合併句入面邊一句）。
- `REJECT`：必須附**圖像理由**——指出一張圖或一個 metrics 檔（路徑），講清楚圖入面見到乜同合併句矛盾。冇圖像理由嘅 REJECT 當 ACCEPT_WITH_EDITS 處理唔到，會記為無效票。

**唔好**
- 唔好重開已收斂例（EX01、EX02、EX07、EX08、EX10、EX14）；有意見寫喺文末「附註」一行就夠。
- 唔好引用 `INTEGRATION_I4` §3 已作廢數。
- 唔好寫新研究；需要新量度先可以補一張圖或一個小腳本，輸出放 `research/<dir>/i5_img/`，冇改官方圖。
- 64 px 主張一定要寫通道（全身 64／頭肩方框／貼臉頭像／官方縮圖）同量度定義。

**輸出**：`research/<dir>/SKILL_EXAMPLE_IMG_I5_VOTE_20261110.md`（新檔；冇改 I1–I4 或其他方向檔）。格式：

```
# <dir> I5 vote

| 例 | 票 | 取代句（ACCEPT_WITH_EDITS）／圖像理由（REJECT） | 證據路徑 |
|---|---|---|---|
| EX03 | ACCEPT | | |
| EX04 | … | | |
| EX05 | … | | |
| EX06 | … | | |
| EX09 | … | | |
| EX11 | … | | |
| EX12 | … | | |
| EX13 | … | | |

附註（可選，一行）：
```

**規則**：冇 Haruka 設計；冇 git merge／push；唔掂官方原圖；64／128 誠實判；唔可以作來源；廣東話得。

**之後**：整合者數票——8 句中全部 ACCEPT 或只有 ACCEPT_WITH_EDITS 嘅句，合併取代句後入 v7 草稿；有有效 REJECT 嘅句，整合者對圖重寫一次再交最後一輪。v7 前先備份 v6。
