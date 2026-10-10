# 圖案轉譯來源假設的修正

STATUS：工作文件DRAFT_PATCH，已寫可撤回研究副本；未改正式canon，未批准角色VFX。原文、改稿及diff保留。

## 問題一 既有姿態被寫成既定軌跡

CLAIM：v0.2 PATTERN_GRAMMAR「晴香：A沿既有拳路彎曲」及VFX「背脊跟既有動作軌跡」。
ISSUE_TYPE：UNSUPPORTED_INFERENCE。

[haruka L323–336](https://github.com/gsm041039/ProjectHarukaDocument/blob/dd7ecf83afeff3adef24f0a636d9b5dc62a15aec/canon/03_characters/haruka.md#L323-L336) 支持拳套、迎擊姿態與拳擊手身份；本輪來源不足以指定完整拳路。已實看的動作PNG有青藍光弧，但概念圖外觀不自動定義時序。iwakura_akane的大鎚亦不自動決定鎚路。

改善：讓研究自由提出開放淺弧或折轉，明標NEW_MOTION_PROPOSAL。保留迎面力量、圓厚推進、硬折重量；犧牲的是假稱已有整套軌跡的確定性，沒有削弱角色行動。已有確認動作資產時，才按該資產實際軌跡適配。

## 問題二 單線試片被外推成能力上限

歷史PROPOSALS曾寫「單線最小版」「真端點仍單一」，又以「有第二筆便錯讀操能力」作反例；後來工作語法沿用單線禁止。本輪引用的[ayakomoji_misao L352–365](https://github.com/gsm041039/ProjectHarukaDocument/blob/dd7ecf83afeff3adef24f0a636d9b5dc62a15aec/canon/03_characters/ayakomoji_misao.md#L352-L365) 支持絲線媒介與不觸地，不足以證明能力全局僅一線／一端。本輪沒有因此聲稱全repo從無其他限制。

ISSUE_TYPE：OVERGENERALIZED_RULE。改善：單線是本試片的局部取樣／控變，不為圖案新增支線或端點；不把研究控制升格canon。保留細絲、懸吊與媒介辨識，允許整體角色能力仍按正式來源呈現，沒有新增線數能力。

## 問題三 正式採用核對被變成所有試稿的前置gate

W09「先指定批准效果，再畫對照」過度阻擋未署名可撤回試片。正式角色資產身份與採用範圍仍須核；本輪原生向量動勢不改人物／武器，故可直接研究。

ISSUE_TYPE：OVERGENERALIZED_RULE。改善：先做圓厚／纖細／硬折三種控制與候選；正式角色套用另核。取捨是暫不聲稱已完成角色識別或正式VFX，換取可開始製作的實物證據。

## 提案與測試分開

完整替換文字在PATTERN_GRAMMAR、MAGIC_MATERIAL_BRIEF、ART_FOUNDATION_BACKLOG W09；PATTERN_TRANSFER_CORRECTION.diff只對working語法。歷史PROPOSALS保留原文，讀取時依最新澄清。

下一對照固定同列中心路徑／端點／方向，三列不強制等黑面積；單線如果只能靠變粗吊飾保住共同圖案，應記不適配，允許不使用。64／128px僅本次展示樣本，非所有TV／遊戲的驗收門檻。製作開始不等已測；幾何通過不等角色已採用。

## 反方覆核後修正

覆核找出最小母樣段仍將三節畫成三控制線說成角色越界，以及歷史「紫音」標籤可能被當本輪正式正名。已改為三種未署名動勢；單線只本試片控制；角色厚重方向以iwakura_akane來源檔定位，名稱沿革本輪未核，不另作正式對應。這些修正不新增能力。
