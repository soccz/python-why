# week06 검증 리포트

> 6주차: 리스트와 튜플 — 여러 값을 담는 컨테이너

**검증일**: 2026-05-01

## 종합

| 지표 | 수치 |
|---|---|
| 검증 섹션 | 14 |
| 사실 오류 | **0** ✓ |
| 정확성 보강 | 0 |
| 신규 인용 | 5 |
| PDF 페이지 | 82 |

## 검증 핵심
- PyListObject struct (PyObject_VAR_HEAD + ob_item + allocated) ✓
- list_resize over-allocation: `((size_t)newsize + (newsize >> 3) + 6) & ~(size_t)3` ✓
- O(1) lst[i], amortized O(1) append, O(n) pop(0)/insert(0), O(n log n) sort ✓
- Timsort (Tim Peters 2002) ✓
- PEP 709 (Python 3.12) — Inlined comprehensions ✓
- LIST_APPEND bytecode ✓
- BINARY_SUBSCR + 인라인 캐시 ✓

## 인용
[1] library/stdtypes §4.6 · [2] howto/sorting · [3] PEP 709 · [4] Objects/listsort.txt · [5] CPython source

## 산출물
- PDF: 82쪽, 1.84MB
