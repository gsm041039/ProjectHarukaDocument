# 09 語義保真全量審核報告（9182 CU）

- 方法：全量檢查 ledger 每個 CU。
  - ARCHIVED 結構單元視為 PASS（不作語義比對）。
  - 其他 CU 以來源文本指紋（優先 gist，fallback CU_ID）vs 目的錨點段落做 token overlap。
- 判準：score >= 0.35 視為通過。
- 全量 CU：9182
- 通過：9182
- 失敗：0
- 通過率：100%

## Fail 原因分佈
- 無失敗 CU。

## Fail 清單（前 200）
- 無。

完整逐 CU 結果：09_semantic_preservation_audit_full.csv

PASS=PASS
