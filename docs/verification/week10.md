# week10 검증 리포트

> 10주차: 딕셔너리와 세트 — 왜 O(1) 검색이 가능한가

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 5 |
| PDF 페이지 | 104 |

## 검증 핵심
- hash(int) = self, hash(-1) = -2 (CPython quirk) ✓
- SipHash-1-3 (Python 3.12+, PEP 456) ✓
- Mersenne prime 2^61-1 modulus ✓
- compact dict (Hettinger 2012, Python 3.6+) ✓
- Insertion order Python 3.7+ ✓
- BINARY_SUBSCR_DICT specialization ✓
- Amortized O(1) 회계법 분석 ✓
- Load factor 2/3 resize ✓
- defaultdict / Counter ✓
- PEP 584 dict | / |= ✓
- 비둘기집 원리 ✓

## 인용
[1] library/stdtypes — Mapping Types · [2] PEP 456 · [3] Hettinger compact dict (2012) · [4] PEP 584 · [5] CPython source

## 산출물
PDF: 104쪽, 2.17MB
