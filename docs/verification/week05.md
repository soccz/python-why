# week05 검증 리포트

> 5주차: 조건문 — 컴퓨터는 어떻게 결정하는가?

**검증일**: 2026-05-01

## 종합

| 지표 | 수치 |
|---|---|
| 검증 섹션 | 14 |
| 사실 오류 | **0** ✓ |
| 정확성 보강 | 0 |
| HTML 구조 버그 | 0 |
| 신규 인용 | 5 |
| PDF 페이지 | 80 |

## 검증 핵심
- COMPARE_OP 4-byte oparg with inline cache (Python 3.12) ✓
- POP_JUMP_IF_FALSE / JUMP_FORWARD / RESUME 0 ✓
- match/case (PEP 634, Python 3.10+) — capture vs constant 함정 정확 ✓
- MATCH_CLASS bytecode + __match_args__ ✓
- Cyclomatic Complexity (radon, flake8) ✓
- Guard Clause + Early Return ✓
- nb_bool returning -1 = exception propagation ✓

## 인용
[1] Dijkstra 1968 — "Go To Statement Considered Harmful"
[2] reference/compound_stmts §8.1, §8.6
[3] PEP 634 — Structural Pattern Matching
[4] PEP 308 — Conditional Expressions
[5] CPython source — ceval.c / object.c

## 산출물
- PDF: 80쪽, 2.13MB → `/home/soccz/22tb/python-why-pdf/week05_sample.pdf`
