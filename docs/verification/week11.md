# week11 검증 리포트

> 11주차: 컴프리헨션 & 제너레이터

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 6 |
| PDF 페이지 | 64 |

## 검증 핵심
- PEP 202 (list comp, 2000) ✓
- PEP 274 (dict/set comp, 2.7/3.0) ✓
- PEP 709 (inline comp, 3.12) ✓ — LOAD_FAST_AND_CLEAR로 스코프 격리 유지
- PEP 572 walrus 의도적 누출 ✓
- 제너레이터: yield, GEN_START, YIELD_VALUE ✓
- itertools — chain/islice/takewhile/accumulate/groupby ✓
- LIST_APPEND / MAP_ADD / SET_ADD ✓
- 수학 set-builder notation 기원 (SETL 1969 → Miranda 1985 → Haskell 1990 → Python 2000) ✓

## 인용
[1] PEP 202 · [2] PEP 274 · [3] PEP 709 · [4] PEP 572 · [5] itertools docs · [6] CPython source

## 산출물
PDF: 64쪽, 2.00MB
