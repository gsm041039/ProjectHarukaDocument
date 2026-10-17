---
name: author-lens
description: 記錄作者每次親自講嘅嘢（唔係掣／模板），再由呢份紀錄歸納作者慣常問嘅角度同關注點，令自動討論（story-auto-discussion）或任何設計對話可以用返「作者會點問」嘅方式挑戰方案。讀寫 canon/_working/author_voice/。方法學習，唔抄措辭，唔係 canon／劇情／決定權威。
---

# author-lens — 作者視角紀錄 + 問法模型

## 用途

呢個 skill 做兩件事：

1. **紀錄**：作者每次親自打／講嘅嘢，自動存落 `canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl`（跟住 repo 行，兩部電腦都齊）。
2. **歸納**：需要時，由紀錄抽出作者慣常嘅**問法、關注角度、否決理由、追問方式**，寫成 `canon/_working/author_voice/AUTHOR_LENS.md`，畀自動討論同設計對話用嚟模擬「作者會點挑戰呢個方案」。

同 `user-discussion-agent` 嘅分別：嗰個係一次過由歷史 mine 出嚟嘅固定模型；呢個係**持續累積**嘅原始紀錄＋可隨時重新歸納嘅活模型。兩者可以並用——author-lens 嘅新紀錄可以餵返去更新 user-discussion-agent。

## 紀錄點樣入

- **VSCode／terminal**：`.claude/hooks/log_author_prompt.py`（UserPromptSubmit hook，`.claude/settings.json` 已登記）。SDK 來源（即網頁）會跳過，避免同下面重複。
- **Haruka Workbench 網頁**：`server.mjs` 只將作者**親手打嘅字**入 log（新對話話題、回覆、選項卡嘅「自己寫」、自動討論插話），**掣同模板 prompt 唔入**（`said` 欄冇傳就唔記）。
- **補返舊紀錄**：`python .claude/skills/author-lens/backfill.py`（先 `--dry-run` 睇數）由本機過往 transcript 抽返作者親手打嘅嘢，去重，可喺每部電腦安全重複跑。

每行 JSONL：`{t, src, session, text}`。`src` 分到來源（`cli`／`claude-vscode`／`workbench:*`／`backfill:*`）。只記作者親手講嘅，唔記工具結果、系統提示、IDE context、掣 prompt。

## 幾時用（歸納模式）

- 作者叫「更新／睇我嘅問法」「用返我會問嘅角度挑戰」。
- 砌自動討論時想加一個「作者視角」角色（魔鬼代言人以外，專問作者慣問嗰啲）。
- 設計對話想自我檢查「作者通常會喺呢度窒我咩」。

## 歸納點做

1. 讀 `AUTHOR_UTTERANCES.jsonl`（全部，或近 N 條）。唔夠料就先叫作者多傾幾輪，或跑 backfill。
2. 淨出**問法層面**嘅嘢，唔抄措辭、唔抄粗口（粗口＝對求其答案嘅不滿，唔係要複製嘅風格）：
   - **慣問角度**：作者反覆從邊啲切入？（例：要求「用人話講白D」、追問「點解一定要咁」、要求設定可互相推導、質疑係咪 OOC、要求引入價值觀衝突、驚方案太易太順）。
   - **否決訊號**：乜嘢令佢唔收貨？（抽象、堆術語、冇代價、冇因果、答得求其）。
   - **深度控制**：幾時叫你收窄、幾時叫你一次過睇 canon 再建議、幾時叫落檔。
   - **跨電腦／接力**：成日提「聽日另一部電腦再傾」「入 canon」——反映佢重視狀態留底。
3. 寫入 `AUTHOR_LENS.md`：每條一個 pattern，附證據（引紀錄日期／節錄，唔好淨係講結論），再寫「下次點用呢個角度去挑戰方案」。
4. 想順便更新 `user-discussion-agent` 就照 `discussion-skill-builder` 流程，將新紀錄當增量證據。

## 界線（硬規則）

- **唔抄措辭／唔扮作者**：用 pattern 做「點諗／點問」嘅先驗，唔係講稿。同 `user-discussion-agent` 嘅 Anti-Imitation Rule 一致。
- **唔係 canon／劇情／決定權威**：只影響**點問**，唔改**canon 講咩**或**作者決定咗咩**。優先次序：作者明示 → canon → story-orchestrator → 專科 skill → 呢個視角模型。
- **私隱**：log 可能有粗口、題外話（例：破解 rar、閒聊）。歸納時只取創作問法層面，題外話唔入 `AUTHOR_LENS.md`。
- 唔自動改 canon；歸納結果係**輔助視角**，唔係作者批准。

## Workbench Choices

- 📝 更新問法模型 | 讀 `canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl`，照 author-lens 歸納作者慣問角度／否決訊號，寫入 `AUTHOR_LENS.md`，淨係問法層面唔抄措辭。{goal}
- 🔄 補返舊紀錄 | 跑 `python .claude/skills/author-lens/backfill.py --dry-run` 畀我睇數，講清會加幾多條，等我批先正式跑。
- 🎭 用作者視角挑戰方案 | 讀 `AUTHOR_LENS.md`（冇就先歸納），用作者慣問嘅角度逐點窒下面個方案，講清每點係邊個 pattern、證據喺邊。{goal}
