---
doc_id: CAN-99
title: "Decision Log（決策記錄）"
status: Canon
scope: "記錄所有矛盾解決決策，防止重覆爭議"
last_updated: 2026-02-08
---

# CAN-99: Decision Log（決策記錄）

> **目的**: 每次解決 Conflict Report 中的矛盾時，記錄採用/棄用版本及理由，確保決策可追溯。

## DL-001: （範例）Alpha/Beta 規則版本選擇

- **矛盾**: `screenwriter/14` vs `director/02` 對 Alpha/Beta 切換時機有不同描述
- **採用方案**: screenwriter/14 的規則表（更詳細完整）
- **棄用方案**: director/02 作為應用指引保留於 CAN-08
- **理由**: screenwriter/14 為規格文件，director/02 為實作層
- **決策日期**: 2026-02-08
- **記錄者**: Claude

---

## 記錄格式

每個決策記錄格式：

```markdown
## DL-XXX: 決策標題

- **矛盾**: 矛盾描述
- **採用方案**: 最終採用內容
- **棄用方案**: 未採用內容及其處置
- **理由**: 決策理由
- **決策日期**: YYYY-MM-DD
- **記錄者**: 記錄者名稱
```

---

**當前決策數**: 0
