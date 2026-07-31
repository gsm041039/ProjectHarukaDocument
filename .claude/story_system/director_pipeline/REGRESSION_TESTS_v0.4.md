# Regression Tests v0.4

## Test: 晴香校園第一次變身有對話劇本前置

User asks：如果開始做晴香喺校園第一次變身、同桐生健先用普通人力量阻止屍骸嘅有對話劇本，要先做咩？

### Must Do
1. 顯示已掃現有資料。
2. 解釋仲欠：整段戲範圍、角色狀態、角色說話方式、場景與戰鬥運作、對話骨架等。
3. 問作者想「先自動做一版再細執」定「逐項由零一齊做」。
4. 作者同意後，先調用 `story-sequence-boundary-designer`，提供 2–3 個完整範圍方案。
5. 角色 Voice Bible 未完整時，提供兩個建立方式選項。
6. 每輪尾部 Mini Log 必須列 Skills used、Done、Pending、Blocked、Next。
7. 大決定同作者討論；小決定寫入 detail decision records。
8. 未確認場景範圍前，不可直接寫完整劇本。

### Automatic Fail
- 直接將欺凌、首戰、貼膠布綁成一場。
- 只寫三個角色各三項語氣筆記就開始劇本。
- 只話「可以即刻整理成草稿」。
- 冇顯示 skill 名。
- 用 Beat 0c、E-01、SQ-A 等代號而冇先完整解釋。
- 因 Beat Sheet 未完成而阻止探索。
