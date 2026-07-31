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


# v0.3 行為修正

使用 `/story-orchestrator` 後，你應該見到連續 `SKILL CALL 01...`。佢唔應該只話「最好先做」；應該顯示已完成咩前置 artifact，最後建立目標稿。

推薦測試：
```text
/story-orchestrator 我要開始做有對話劇本：晴香喺校園第一次變身，最初同桐生健用普通人力量阻止屍骸，美夜子一直在場但遲少少先出手。先完成所有前置，再建立一份 provisional 完整有對話劇本。每個重要細節要經多角度決策，建立 temp run files，並顯示所有 skill calls。
```

合理輸出應包括：
1. 建立 target contract 與 temp workspace。
2. 搜尋 canon，將使用者補充分類為 elaboration / reinterpretation / change。
3. 自動建立人物場景狀態、心理、知識、關係、voice、場所、戰鬥／對白 delivery、beat architecture。
4. 對「二人點阻擋、幾時失敗、美夜子點解此刻出手、首次變身前後講咩」建立 decision records。
5. 寫 provisional 目標稿，而唔係以全劇 Beat Sheet 未完成為由停止。

## v0.5：點樣建立角色說話方式

建議用：

```text
/story-orchestrator 先掃晒現有角色設定、已寫對白同相關場景，幫我建立呢個角色嘅說話方式第一版，再同我細執。每條重要規則要講明係 canon 直接支持、反覆模式、合理推導，定新候選；亦要分清唔同劇情時期。
```

系統應該先講：
- 有咩現成證據；
- 邊個時期證據足夠；
- 邊啲只係候選；
- 第一個需要你細執嘅重大方向。

若角色只有少量對白，系統應建立「說話方式研究與候選」，唔應假裝已完成正式 Voice Bible。


## v0.6：角色通用說話方式同今場狀態分開

通用文件：講角色全劇通常點講、不同時期同對象點變。
今場狀態：講角色喺呢一場因為剛發生嘅事、身體、關係同戰鬥壓力而點講。

測試用法：

```text
/story-orchestrator
先檢查角色有冇全劇通用說話方式文件。
如果現有文件其實只圍繞今場，請拆成：
1. 角色全劇通用說話方式文件
2. 今場戲說話狀態
請按內置參考骨架建立，唔好將單一場景反應升級成全劇固定規則。
```


# v0.7 新工作方式

新任務會先問「想帶咩感覺畀觀眾／玩家」，再決定成段內容範圍。之後系統會自動掃描角色目前欠邊類通用資料，而唔再等你逐項提出。

角色資料分三層：
1. 全劇通用核心：點講、點演、點決定、記得咩、同人關係等。
2. 故事／遊戲當刻狀態：目前受傷、信任、任務、玩家做過咩。
3. 今場用途資料：今場點講、點演、資訊由咩表達、對白被打斷點處理。

角色背景改動時，可直接用：
`/story-orchestrator <角色邊項設定改咗，請分析影響並更新>`
系統會先講受影響內容，再自動改低風險部分，同你確認高影響部分。
