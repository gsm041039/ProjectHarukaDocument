---
name: story-audience-experience-designer
description: Defines the intended audience/player feeling before scene, dialogue, camera, combat, or performance design. Produces a plain-language experience target that all downstream story skills must follow.
---

# story-audience-experience-designer

Task:
$ARGUMENTS

## Mission
先確立「觀眾／玩家經歷完之後應該感受到咩」，再做角色、對白、鏡頭、聲音、戰鬥同玩家控制。

呢個係所有場景設計最高層目標，唔係最後先加嘅氣氛註解。

## Required Output
使用 `story_system/director_pipeline/templates/audience_experience_intent_template.md` 建立：
- 最主要感覺
- 輔助感覺
- 感覺由場頭到場尾點變
- 完場後殘留
- 玩家同角色知道／理解嘅距離
- 絕對唔想造成嘅誤讀
- 成功證據：觀眾／玩家應該睇到、做過或理解到咩

## Collaboration Rule
先掃現有 canon、場景功能、角色 arc 同 gameplay，再提出 2–3 個感受方向。
高影響項目要同作者確認：
- 主感覺
- 完場後殘留
- 禁止誤讀

低風險細節可先建立暫定第一版。

## Downstream Contract
所有下游 skill 必須引用呢份目標，並講明自己嘅選擇點樣服務主感覺。
如果某項設計會產生相反感覺，要標記並提出替代。

## Hard Rules
- 唔可以用「緊張、感動、震撼」三個空泛形容詞就完成。
- 要講清楚感覺由咩具體經歷造成。
- 要分作者意圖同玩家可能實際收到嘅感覺。
- 未確立主感覺前，不適合細執正式對白、鏡頭或音樂。
