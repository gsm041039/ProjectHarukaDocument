# CONTRADICTION_AUDIT.md

**Last updated**: 2026-04-19（Phase 14，Round 026 canon writeback完成後）

## Summary
目前 repo 最大問題**不是大量真正 Hard Contradictions**，而是：
1. **Sync Gaps 多**
2. **Interpretation / Structural Dependency Gaps 才是真正 outline gate**
3. 若有硬衝突，主要集中在 **Beta 花子真相 / 黑奏預謀揭示層級**

## Audit Table

| Contradiction ID | Type | Topic / Keyword | File A | File B | Competing Statements | Why It Matters | Angle(s) Affected | Severity | Can Be Auto-Resolved? | Needs Author Answer? | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HC-01 | Hard / Author-Gated | Beta 花子死因真相 / 黑奏預謀揭示 | 較高層 story / reveal docs | 部分舊分析 / legacy framing | 一邊傾向存在 deeper hidden truth；另一邊傾向不應再疊過重 hidden layer | 直接影響 Act III–IV reveal spine、黑奏定位、主題收束 | Character Growth; Theme; Reveal Control; Ending | Critical | No | Yes | 現階段最接近真正硬衝突 |
| SG-01 | Sync Gap | 創世者揭示時機 | working docs 某些 block list | 較新 decision / synced state | 某些文件仍寫未定；較新資料已偏向 Act III 帝國廣場決戰揭示 | 若誤判未定，會阻礙 outline 推進 | Structure; Reveal Control; Canon Ownership | High | Yes | No | 應更新 working docs 狀態 |
| SG-02 | Sync Gap | 夕終局 | working pending docs | 較新決策狀態 | 某些文件仍寫 open；較新狀態偏向夕最後消散 | 影響 ending planning，但本質非內容衝突 | Ending; Canon; Continuity | High | Yes | No | 同步問題 |
| SG-03 | Sync Gap | 愛莉終局 | working pending docs | 較新決策狀態 | 某些文件仍 ambiguous；較新資料偏向光點消失 | 若當 blocked 會造成假不穩定 | Ending; Theme; Continuity | High | Yes | No | 同步問題 |
| IC-01 | Interpretation Conflict | 美夜子破冰機制 | character / relation framing docs | structure / emotional arc docs | 一派要求明確 pivot scene；一派主張純累積、不應單點爆發 | 影響角色 arc 設計、觀眾可讀性、Act II 情感骨架 | Character Growth; Relationship; Audience Experience; Structure | Critical | No | Yes | **RESOLVED (CDL-191 / 2026-04-15)** — 廢棄地鐵站Soft Pivot確認；miyako.md已更新 |
| IC-02 | Interpretation Conflict | 螢揭示線功能重心 | reveal design docs | relationship payoff framing docs | 一派偏 reveal engineering；一派偏情感回收，尤其 R-5 是否成立 | 影響回收方式與最終情感重量 | Reveal Control; Relationship; Audience Experience; Ending | High | No | Yes | 需作者定功能重心 |
| IC-03 | Interpretation Conflict | 操 E-2.5 敘事功能 | structure docs | pacing / ensemble balance docs | 一派視為必要前置埋點；另一派認為拖慢節奏，應刪或輕量化 | 直接影響 Act I/II 負載與操線建立 | Structure; Character; Ensemble Balance | High | No | Yes | 屬作者決策 |
| DG-01 | Structural Dependency Gap | AKS-S2/S3 螢揭示線場景載體 | 已定方向之 working docs | outline-level implementation space | 已知要做，但未有具體由哪場 scene / beat 承載 | outline 會出現假完整 | Structure; Reveal Control; Audience Experience | Critical | No | Yes | 不是純矛盾，而是 dependency gap |
| DG-02 | Structural Dependency Gap | 秋穗退場機制 | relation / ending docs | structure docs | 立場 /方向大概存在，但未正式鎖成結構節點 | 影響 Act III→IV 過渡與群像分配 | Structure; Relationship; Ending | High | No | Yes | 建議列為 P1 |
| DG-03 | Structural Dependency Gap | 若提高 Beta 真相層級所需 clue system | reveal ambitions | existing planted evidence | 若要更深 reveal，前置 clue / payoff 體系未完整 | 容易導致 late twist 失衡 | Reveal Control; Audience Experience; Theme | High | No | Yes | 與 HC-01 連動 |
| PG-01 | Priority Conflict | 先清 sync gap 還是先答 P0 | production / working docs | story blocking docs | 有文件更強調文檔清理，有些其實已顯示 P0 才是關鍵 | 關係到下一步工作順序 | Production Priority; Ownership | Medium | Yes | No | RESOLVED — 已清 Act I/II sync gap |
| SG-04 | Sync Gap | miyako.md Act II 缺Glitch Form/Soft Pivot/E-12 anchor | canon/03_characters/miyako.md | CDL-108/191/243/245 | 舊 canon 只有一句PTSD；CDL 有完整三階段弧線+承諾場景+E-12錨 | canon file 與 working outline 不同步 | Character Arc; Continuity; Canon Ownership | High | Yes | No | **RESOLVED (2026-04-19, canon writeback)** — miyako.md Act II已全面更新 |
| SG-05 | Sync Gap | iwakura_akane.md Act II缺E-07a/b cascade + E-12三重癱瘓 | canon/03_characters/iwakura_akane.md | CDL-229/230/236/239/242 | 舊 canon 只有一句「小光屍骸化後精神崩潰」；CDL 有完整cascade設計 | canon file 與 working outline 不同步 | Character Arc; Continuity; Canon Ownership | High | Yes | No | **RESOLVED (2026-04-19, canon writeback)** — iwakura_akane.md Act II/III已更新 |
| SG-06 | Sync Gap | 13_major_events_relationship_impact.md E-編號體系與ACT_II_OUTLINE.md v0.6不同步 | canon/13_major_events_relationship_impact.md | ACT_II_OUTLINE.md v0.6 | 本文件E-12=恐怖家家酒；工作文件E-12=屍骸女王討伐；Act III分界不同 | 事件追蹤文件與當前outline完全不同步 | Structure; Canon Ownership; Continuity | High | No | No | **PARTIALLY MITIGATED (2026-04-19)** — 加入sync warning header + 以[Working-E-12]格式補錄屍骸女王討伐事件；完整重新編號需作者確認後進行 |

## Counts (Working Judgment — as of 2026-04-19)
- Hard Contradictions: 1 (HC-01, OPEN)
- Sync Gaps: SG-01 RESOLVED; SG-02~03 OPEN; SG-04~05 **RESOLVED this session** (canon writeback)
- Interpretation Conflicts: IC-01 **RESOLVED** (CDL-191); IC-02~03 OPEN
- Structural Dependency Gaps: DG-01~03 OPEN
- Priority Conflicts: PG-01 RESOLVED

## Top 5 Most Critical (Current)
1. HC-01：Beta 花子死因真相 / 黑奏預謀揭示層級
2. DG-01：AKS-S2/S3 螢揭示線缺具體場景載體
3. IC-02：螢揭示線功能重心
4. IC-03：操 E-2.5 保留 / 刪除 / 替代
5. SG-06：13_major_events.md E-編號體系需全面重新同步（需作者確認後處理）
