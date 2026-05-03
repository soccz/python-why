# week14 검증 리포트

> 14주차: 타입 힌트 & Protocol — 왜 "힌트"인가

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 10 |
| PDF 페이지 | 65 |

## 검증 핵심
- PEP 3107 → 484 → 526 → 585 → 604 → 695 history ✓
- PEP 649 (Python 3.14) deferred annotations ✓
- list[int] = types.GenericAlias ✓
- Variance (Liskov 1987) — co/contra/invariant ✓
- Protocol (PEP 544) 구조적 subtyping ✓
- @runtime_checkable / __protocol_attrs__ ✓
- PEP 557 dataclass ✓
- Gradual Typing (Siek-Taha 2006) ✓

## 인용
[1] PEP 484 · [2] PEP 526 · [3] PEP 585 · [4] PEP 604 · [5] PEP 544 · [6] PEP 557 · [7] PEP 649 · [8] Siek-Taha 2006 · [9] Liskov-Wing 1994 · [10] CPython source

## 산출물
PDF: 65쪽, 1.97MB
