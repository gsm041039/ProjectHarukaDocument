# 24_ANGLE_SUPPORT_CHECKLIST

## Purpose
呢份 checklist 用於任何角色行為、事件目的、scene lab、劇本 QA、motivation review。佢唔係要求每次寫 30 段長文，而係要求 AI 主動掃描：哪些角度已支撐、哪些缺資料、哪些有風險。

## Status labels
每項用以下狀態：

```text
SUPPORTED      = 有足夠支撐
PARTIAL        = 有少量支撐，但仍需注意
MISSING        = 缺支撐
RISK           = 有可能錯用 / 誤讀 / 衝突
NOT_RELEVANT   = 本輪不適用
BLOCKER        = 不處理會令任務不可安全完成
```

## Checklist

1. **Canon Fact Support**：事實有無 canon/source 支持？
2. **Backstory Support**：角色背景是否足以支撐該動機 / 性格？
3. **Prior Behavior Pattern**：角色以前有無重複類似行為？
4. **Relationship History**：關係歷史是否支持此互動？
5. **Emotional Wound / Trauma Support**：如使用創傷解釋，是否有事件支撐？
6. **Desire / Want Support**：角色想要甚麼，有無 source？
7. **Fear / Avoidance Support**：角色害怕/逃避甚麼，有無 source？
8. **Value System Support**：角色價值觀有無明確支撐？
9. **Moral Logic**：角色道德選擇是否 consistent？
10. **Survival / Tactical Logic**：行動在當時風險下是否合理？
11. **World Rule / Mechanic Pressure**：世界規則、能力代價、科技限制是否支持？
12. **Institution / Social Pressure**：帝國、夜區、組織、階級、制度有無壓力？
13. **Timeline / Causality**：時間順序同因果有無問題？
14. **Knowledge State**：角色此刻知道 / 不知道甚麼？
15. **Growth Stage**：角色成長階段是否容許呢個反應？
16. **Theme Alignment**：是否服務本作主題，而非 generic trope？
17. **Scene Function**：此行為在 scene / act 裏有咩功能？
18. **Setup / Payoff**：是否需要前置鋪墊或後續回收？
19. **Dialogue Voice**：對白聲音 / 語氣是否有支撐？
20. **Directing Logic**：blocking / camera / silence / performance 是否支持情緒？
21. **Audience Interpretation**：觀眾會點理解？有無誤讀風險？
22. **Alternative Explanation Check**：是否存在更保守、更少改動解釋？
23. **Contradiction Check**：有無反證、舊稿衝突、角色 drift？
24. **Counter-evidence Check**：有無 source 直接削弱此解釋？
25. **Trope Leakage Check**：是否套用常見套路而非本作 evidence？
26. **Minimum-change Explanation**：是否有「最小補充」方案？
27. **Draftability / Scene Usability**：是否能安全寫成 scene？
28. **Writeback Safety**：是否可以入 canon，定只可留作 candidate？

## Required output template

```text
ANGLE SUPPORT SNAPSHOT
1. Canon Fact Support — SUPPORTED — [short reason]
2. Backstory Support — PARTIAL — [short reason]
...

BLOCKERS
- ...

HIGH-RISK WEAK CLAIMS
- ...

SAFE DEFAULTS
- ...

AUTHOR QUESTIONS GENERATED
- ...
```
