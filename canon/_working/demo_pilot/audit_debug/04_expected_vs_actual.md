# 04 預期 vs 實際（POST_HOC_VERIFICATION；來源 scripts/*_raw_output.txt、04_cell_rows_raw.csv）

## A. 預期（協議 01_AUDIT_PROTOCOL.md L18/L28）vs 實際
| 預期 | 實際 | 判斷 | 反證／限制 |
|---|---|---|---|
| 每個指派角度 × 4 組（SEQ2 N1–N4／SEQ3a B1–B10／SEQ3b M1–M4／H1）都有格 | 28 角度全部有格；每角度 N/B/M 組全有；H1 組：角度 21、26 parser 漏讀，人手 grep 確認有（B L191、E L202） | 達標（以人手核補 parser 缺口） | 「每角度每組有至少一格」≠「每 beat 一格」；逐 beat 覆蓋未驗 |
| CLEAN 必須有核對＋攻擊 | 機械檢：以「攻擊」字眼掃整行 → 5 行被標；逐格看 attack 欄 → 4 行有真攻擊（E28、E32、E82、E151），D218 有一句攻擊但核對欄只係來源引用（弱） | 大致達標；D218 弱 | 我 heuristic 本身錯（用關鍵字而唔係欄位）；已保留原輸出 |
| 理由要有引文 | 24 行 NOT_APPLICABLE 掃引文／錨點：0 無錨 | 達標（寬鬆標準：有 L數／CDL／引號即過） | 引文是否真確＝見 C |
| 同一句唔可跨四組重用 | 重複 conclusion 前綴 ≥3 次者只係 verdict 標籤本身（CLEAN_AFTER_ATTACK 59 等）；attack 欄重複＝0 | 無發現 | 只比前 60 字；改寫式重複查唔到 |
| 引用 ID 存在 | 56 個被引 CDL／L 號全部存在 | 達標 | 只核「存在」，未核「內容同引用相符」（C 部分核過） |

## B. 格數：原始格 vs 去重問題 vs 核實問題 vs 未解 blockers（四分法）
| 類別 | 數 | 來源 | 標籤 |
|---|---|---|---|
| **原始格（可解析 pipe 行）** | 390（A99／B57／C101／D64／E69） | 04_cell_rows_raw.csv | POST_HOC |
| 原始格（B 報告以角度欄直接數） | B＝60（3:12／9:14／10:11／20:16／21:7） | awk 數第 2 欄 | POST_HOC |
| 未解析行 | 約 70 行（F／G 格式不同；其他 pipe 行格式不符）→ **冇單一精確原始總數** | unparsed_raw_output.txt | POST_HOC |
| ledger §15.1 宣稱 | 「約 357 格」（A99／C98／D63／E69／B28＋知情表） | DERIVATION_LEDGER L283 | **當時冇存推導＝NOT_CAPTURED** |
| 原始 FINDING 格 | 165（A35／B29／C50／D22／E29） | cells_raw_output | POST_HOC（A–E 格層，非「發現條數」） |
| 報告自報「發現條數」 | A15／B17／C18／D14（自報 8＋6）／E25／F17＝約 105–107 | 各報告統計行 | CAPTURED（agent 自報）＋POST_HOC 對 |
| 去重後獨立問題 | 「約 32」 | ledger §15.3 | **未獨立重數**（POST_HOC：只核 K1–K20 表存在） |
| 已核實問題（我實際對過原文） | BLOCKS 3 條：C-F1、E-F07、F-F01；另 K-cited 56 ID 存在 | 見 05 | POST_HOC |
| 未解 blockers（等作者） | 2：牙形式／範圍；連結「強制入侵」性質 | ledger §15.5、QQ-227 | CAPTURED |

## C. 對 ledger §15.1 逐項（原文不改）
| §15.1 宣稱 | POST_HOC 結果 |
|---|---|
| 「約 357 格」 | 解析得 390；差 33，B（28 vs 57/60）佔大部分，其餘 A99 一致、C 98→101、D 63→64、E 69→69。**數字非當時機械所得，且 B 嘅 28 與任何而家嘅計法都唔符** |
| 「CLEAN 格冇『攻擊』＝0」 | 欄位基準成立；關鍵字基準 5 行（4 假陽性） |
| 「冇來源引用＝0」 | 同上；只核有引、冇核引得啱 |
| 「18 行誤報人手核過」 | 當時冇記錄＝NOT_CAPTURED；而家只重現到 5 行 |
| 發現 A15／B17／C18／D14／E25／F17 | FINDING 條數與報告自報吻合；D 自報 8＋6＝14（吻合）。逐條重數：POST_HOC 只確認 B 17（heading）、C 18 |
| BLOCKS 3 | 核實：C L15（F1）、E L104（F-07）、F L53（F-01）。D、A、B 0 |
