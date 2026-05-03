# week09 검증 리포트

> 9주차: 함수 — 왜 함수가 존재하는가

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 5 |
| PDF 페이지 | 102 |

## 검증 핵심
- MAKE_FUNCTION 8 = closure flag ✓
- code object vs function object 분리 ✓
- PyFunctionObject (__code__, __defaults__, __annotations__) ✓
- First-class function ✓
- type hints (PEP 3107) ✓
- CALL bytecode (Python 3.11+) ✓

## 인용
[1] reference/compound_stmts §8.7 · [2] reference/executionmodel · [3] PEP 3107 · [4] PEP 659 · [5] CPython source
