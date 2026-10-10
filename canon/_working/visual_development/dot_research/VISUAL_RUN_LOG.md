# v4 實圖及方法紀錄
2026-10-10，研究專用。來源基準 main dd7ecf83afeff3adef24f0a636d9b5dc62a15aec。有效指令 v4，研究生圖／改圖已授權，正式採用／canon／skill部署待作者。

## 實際執行
內建 image_gen，2個初始板，各1次編輯，共4個輸出。沒有額外付費API、沒有假設模型名／seed。完整提示見 visual_tests/prompts.json。
- cosmos_compare_v01.png：約09:02，A互含／B單一宇宙。由 root、design_cosmic_endpoint、review_cosmic_visual_strength 逐圖查看。
- pattern_mothers_v01.png：09:06，A/B/C母構及三處理。root與compose_magic_pattern_grammar查看。
- cosmos_B2_v02.png：09:08，B方形厚層編輯及局部修紅，兩個變更，非單變因因果實驗。root與review_cosmic_visual_strength查看。
- pattern_mothers_v02.png：09:09，只修左上A，root與compose_magic_pattern_grammar查看；其餘母型偏差保留。
初版與修訂均保存，不只交最佳圖。所有結果是研究評圖，不是觀眾盲測或採用。

## 實際方法使用
review_cosmic_visual_strength 完整讀取 pinned .agents/skills/story-co-design-discussion/SKILL.md（blob 61149248e2d1e7dcd615d468f4dc7d748709d203），人工執行 Visual Development Intent Discussion Mode：意圖→當前選擇→觀察→反事實／取捨→下一證據。
輸入：PROPOSALS/EVIDENCE、v4、11L108–122、實際兩張cosmos圖。
實際決定：如何保留B宇宙力量同時令方圓圖式成為厚空間。反事實：移軸删環不能補缺少的方界，反而犧牲已可見力量。產出：工作文件修正、B2建議及像素終評。
這是已讀／已人工執行的方法，不是安裝、正式部署、自動runtime invocation或模型隔離eval。未建立新skill pilot。

## 工作文件修正理由
正式11L108–122反對的是「人物無意義」結論，不禁止巨大宇宙、中軸、莊嚴。故本輪撤回對canon的疑慮，修的是先前研究文件自行加的限制。
1 中度灰稿與高端圖可並行；灰稿只回答容量／通行診斷。
2 中軸或偏心均可，以人物主動姿態、受力方向、作用對象判斷，不自動以減對稱解決。
3 有來源的可辨宗教圖式可研究；形式不等於採納教義、新神位或新機制。
保留過往版本、反例、85候選backlog；本轮沒有擴張。

## 測試誠信
附件20 T案例、18 C案例、12 V4案例都是公開DEV規格，仍 NOT_EXECUTED。當前工作未照其測試協議完整跑，不能回填PASS，也不是盲測。靜圖未驗證動作、玩家、效能、Unity或生理／宗教理解。

## 施工母版實作
按原座標建立SVG獨立細胞版、單輪廓版、展示板，Inkscape渲染PNG並由root實看。執行中心脊連續／三開腔的採樣數學檢查，結果記JSON。這不是image_gen多一輪，沒有修改生成像素。不是新skill，也不是DEV suite。
repo 圖片為同尺寸 JPEG 預覽（格式轉換，未改構圖）；四张原始PNG、全部提示與SVG另存交付ZIP。對PNG的觀察仍指原始檔，非宣稱JPEG無損。
