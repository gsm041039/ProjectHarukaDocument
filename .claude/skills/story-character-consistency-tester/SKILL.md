---
name: story-character-consistency-tester
description: Stress-tests character voice, performance, knowledge, decisions, relationships, and runtime states across contrasting situations to find generic, contradictory, or prematurely evolved behaviour.
---

# story-character-consistency-tester

Task:
$ARGUMENTS

## Mission
用不同情境測試角色仍然似唔似同一個人，而唔係只審當前劇本。

## Test Sets
- 道歉、求救、講大話、被揭穿、被羞辱、安慰、發怒
- 公開、私人、獨處、戰鬥、疲勞、受傷、崩潰
- 對最信任、最防備、權威、陌生人、敵人
- 角色知道／不知道／誤解資訊嘅版本
- 對白被中斷、重試、事件次序改變

找出：
- 所有人講法／動作太相似
- 後期成長提前
- 角色知道作者先知嘅事
- 招牌動作過度重複
- gameplay 資訊令角色變成 UI

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🧪 全套壓力測試 | 用道歉、求救、講大話、被揭穿、戰鬥、疲勞、對唔同人等情境測試 {goal}，搵出不一致同提早成長。
- 🎭 對照唔同對象 | 只測角色對最信任、防備、權威、陌生人同敵人時仲似唔似同一個人。
- 🧠 知識邊界測試 | 只測知道／唔知道／誤解版本，搵角色講出作者先知嘅嘢。
- 🎮 運行狀態測試 | 只測對白被中斷、重試、事件次序改變時，角色會唔會變成 UI 或重複招牌動作。
