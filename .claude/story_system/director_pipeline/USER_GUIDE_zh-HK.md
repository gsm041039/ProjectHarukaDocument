# `/story-orchestrator` 使用指南

## 安裝
將壓縮檔內 `.claude` 資料夾合併到專案根目錄。保留你現有內容；同名檔案先備份，再用新版覆蓋。

## 主要用法
你只需要用：

```text
/story-orchestrator <你想做嘅工作>
```

唔需要自行指定十幾個 skills。Orchestrator 會：
1. 搜尋現有 canon / gameplay /角色文件；
2. 判斷直接做會唔會缺前置；
3. 自動完成可回收或可推導工作；
4. 提出真正需要共同決定嘅項目；
5. 跑合適 specialist skills；
6. 標示成果成熟度；
7. 提出下一個最高價值工作。

## 常用指令

### 討論對白前置
```text
/story-orchestrator 分析圖190夕鏡前攤牌，正式寫對白前仲欠咩？先唔好寫稿。
```

### 寫完整對白
```text
/story-orchestrator 為圖190寫完整遊戲對白稿。先自動回收角色、arc、心理、關係、知識、voice同gameplay前置；未定資料用依賴標記，唔好亂鎖死。
```

### 建立角色聲線
```text
/story-orchestrator 根據現有角色文件同已寫場景，建立晴香對不同角色、公開場合、私人場合、戰鬥同崩潰狀態嘅voice bible。
```

### 審現有對白
```text
/story-orchestrator 用完整Dialogue Review Room審呢份稿，至少覆蓋角色、心理、arc、關係、知識、聲線、subtext、表演、gameplay、VO同continuity；唔好直接重寫。
```

### 導演＋戰鬥共同設計
```text
/story-orchestrator 將呢段Boss戰做成完整game directing方案。角色表演優先，但要保持戰鬥可讀性；先提出未做而會明顯提升結果嘅前置工作，再共同設計。
```

### 完整交付包
```text
/story-orchestrator 產出呢場嘅完整跨部門導演包：Director Treatment、Dialogue Script、Storyboard、Gameplay Presentation Spec。Markdown為審批truth；Unity JSON只喺implementation-ready時輸出。
```

## 你會見到嘅狀態
- `READY`：可直接做。
- `READY_WITH_QUALITY_RISK`：可做，但有明確風險。
- `BLOCKED_FOR_FINAL`：可做 provisional，未可稱 final。
- `PROVISIONAL — NOT RECORDING READY`：可討論／table read前草稿。
- `IMPLEMENTATION_READY`：穩定 ID、trigger、fallback 等已足夠落 Unity。

## 點樣要求佢唔好太繁複
```text
用QUICK規模，只做會改變答案嘅前置檢查。
```

## 點樣要求最高規格
```text
用MAJOR規模，跑20–28個相關角度同跨部門審視；唔好為完成而跳過gate。
```

## 點樣要求修改 Skill
記錄實際失敗案例，然後：
```text
/story-orchestrator 回顧今次工作流失敗：<貼上問題>。指出係routing、missing prerequisite、skill boundary、output schema定audit不足，提出skill update方案，先討論唔好writeback。
```

確認後再講：
```text
按已同意方案update skills同orchestrator，列出改動、受影響流程同回歸測試。
```

## 驗收建議
第一次可用同一場戲做三個測試：
1. 「先唔寫稿，只診斷前置」；
2. 「寫完整稿」；
3. 「審自己寫嘅稿」。

檢查佢有冇：
- 自動搵 source，而唔係全部問你；
- 角色講嘢有冇隨對象、arc、心理同當下狀態改變；
- 有冇先做 beat / performance，再寫句子；
- gameplay 未定時有冇標依賴；
- 有冇提出少而重要嘅下一步，而唔係無限待辦。
