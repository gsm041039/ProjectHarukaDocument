# C｜Iterate：候選、比較、學習、決策紀錄

## 重要：唔係機械跑 100 張圖

先有可反駁假設，再生成少量**真正唔同**候選；做原版並排比較；再決定值得深化邊一個問題。不要因為生成成本低就無限刷圖；唔一定要自動揀勝者。用戶要深入討論時先討論，唔主動生成未授權圖像。

## 回合（最小 1 輪；按成本擴充）

1. `S0 Snapshot`：保存 input reference、canon 指定範圍、版本與改稿硬鎖；原版永不覆蓋。
2. `S1 Intent`：一句觀眾體驗目標、最大問題、希望保留的兩個特色、媒介觀看條件。
3. `S2 Hypotheses`：**填 `templates/change_ledger.md` 後先准出圖**；提出 A/B/可選 C，每個有**不同機制**，以及可能失敗結果、測試成本、預期 trade-off。
4. `S3 Generate / Describe`：有圖像授權就按同一人物身份與比例鎖做出可比圖；若圖片工具未能證明身份鎖或無法取得圖，就僅提供文字可畫指令，標 `NOT_RENDERED`。
5. `S4 Compare`：依預先寫好嘅 ledger，先對改動標 HIT / MISS / DRIFT；原版和候選並排；由**支持候選**與**反對候選**兩個角度審查；觀察同推論分開。先同角色原版比，再同最似隊友比。
6. `S5 Select`：可以保留多於一個候選（各有不同優點），亦可以全部淘汰；`TEST MORE` 係有效結論，候選唔自動變 canon。
7. `S6 Learn`：將新發現、失敗、待查來源寫入 doc；新規則先進 `PROPOSED_RULES`，有跨例反證及重驗先考慮提升，不直接覆蓋 G01–G15。

## Folder layout：建議，每個角色獨立

```text
character_design/
  <character_id>/
    canon/                       # 作者自己管理；AI 不自動覆寫
    candidates/
      20261111_round01/
        brief.md
        hypotheses.md
        candidate_A/
          prompt.md
          rendered_01.png       # 僅真生成才有；保留 raw
          notes.md
        candidate_B/
          prompt.md
          notes.md
        comparison.md
        decision.md
    research/
      reference_log.md
      proposed_rules.md
    design_suggestions.md       # 每輪建議追加，不只留勝出選項
    CHANGELOG.md                # append-only
```

`canon/` **只係例子路徑**；不創建或修改任何官方正式稿，除非有明確授權。`candidate_A/rendered_01.png` 只喺實際產出成功先出現；唔造假。用既有專案規範時，沿用原先目錄，而唔強迫改名。

## 每輪最小紀錄

| 欄 | 說明 |
|---|---|
| Input & lock | 來源／版本、媒介、任何「不可改」嘅 part |
| Diagnosis | 最重要 1–2 個設計問題；也記住原版優點 |
| Hypothesis | 呢個具體改動點樣改善觀感；否證條件 |
| Candidate changes | 改動列表：區域、形狀、尺寸、顏色、材質、穿法 |
| Comparison | 改善、損失、未測、同條件限制、與 cast 關係 |
| Verdict | KEEP / REJECT / TEST MORE / NO_ACCEPTABLE_CANDIDATE |
| Owner approval | `PENDING`；未經作者明示不寫 `APPROVED` |

## 每輪都要保存「所有建議」

- 候選圖入候選 folder，不覆寫／取代先前「最佳已知」或 canon。
- `design_suggestions.md` 逐條 append：建議、原因、可畫操作、成本、證據狀態、採納／拒絕理由。
- 即使方案失敗，仍保留當時假設及失敗原因；避免同一個錯誤被重新建議。
- 唔為了 demo 好睇而將未解硬鎖、畫風錯誤、比例差異藏起來。

## 何時停

- 改版已改善最重要問題，但開始犧牲身份或造型氣質；
- 新候選只係色調／小配件變換，無新假設；
- 冇可比較圖、受眾、制作資料，冇法合理再判斷；
- 超出迭代預算或作者指定範圍。

交付要寫清 `DONE`（已做）、`NOT_DONE`（未做）、`NOT_VERIFIED`（做咗但未能證）。**寫低下一輪最值得測嘅一件事**，而唔列幾十個無主次 task。


## v9.3｜測試分離
候選記錄要有 `mode`（REPAIR / REFINE / CREATIVE ALTERNATIVE）、`design_thesis`、`meaningful_delta`、`identity_tradeoff`、`image_compliance`，同 `accepted_by_author`。個別測試 brief 或角色個性不得直接寫入通用 SKILL。
