# 06 K 問題→實際 diff 追蹤（POST_HOC）
## 結論
**冇可追蹤嘅 diff。** 「Beat v3.1」只存在於 ledger §15.4 嘅 patch 清單（a–j，L331 起）；§14.2（Beat v3，L193 起）同 §8 B 節點表（L80–94）都冇被改成 v3.1，亦冇獨立 v3.1 表。

## 我之前「inconclusive」嘅 §14.2 vs 輸入包比較——已解釋
- 輸入包 00_INPUT_BEAT_V3.md 有 22 行節點（N1–N4、B1–B10 含 B4b／B6b／B7b、M1–M4、H1），**係合成**：§14.2（N／M／H 節點＋L207–211 「B0 刪／B1 保留／B2–B8、B7b 保留／B9 加預埋／B10 保留」差異表）＋ §8 B 節點（L80–94 含 B4b L85、B6b L88、B7b L90）。
- §14.2 自己只有 N1–N4、B0、B1、B9、B10、M1–M4、H1 行；B2–B8 靠「保留」指向 §8。所以 B4b 唔喺 L193–226 係**預期**，唔係被改。
- 輸入包同 ledger 逐行唔相同（22 行 0 行逐字吻合），因為輸入包做咗合併＋縮寫；**輸入包係咪忠實代表 v3**＝只可話「結構上合理」，未做語義逐行比對（NOT_DONE）。
- git：§8–§15 全部 uncommitted（git diff 顯示 +242／−0 於 L107），所以 git 唔能隔離 §15 嘅增量。

## K 項處理狀態
- §15.3 K1–K20「APPLIED」＝記入 §15.4 patch（HW／PROVISIONAL）；grep v3.1 特有詞（「安全區外圍」「唯一漏網路人」）只喺 ledger L335（§15.4 d）同 DEMO_BEAT_LAYER.md L55（舊 L6 紀錄，早於盲審）。
- **「已改入 Beat v3.1」嘅講法超出事實**：準確講法＝「已列入 patch 清單，Beat 表未更新」。tracker 條目 35、status_add 已用「已記為 HW／PROVISIONAL」，tracker 同句「已按 Head Writer 權限改入 Beat v3.1」則偏強。
