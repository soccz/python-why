# week04 검증 리포트

> 4주차: 연산자와 표현식 — 컴퓨터는 어떻게 계산하는가?

**검증일**: 2026-05-01 / **검증자**: Claude (자율 루프 모드)

## 종합

| 지표 | 수치 |
|---|---|
| 검증 섹션 | 14 |
| 검토한 기술적 주장 | ~110 |
| 사실 오류 | **0** ✓ |
| 정확성 보강 | 0 |
| HTML 구조 버그 | 0 |
| 신규 인용 | 9 |
| PDF 페이지 | 81 |

## 검증 핵심
- BINARY_OP 13 (+=) — Python 3.11+ ✓
- COPY+POP_JUMP_IF_FALSE for and/or (Python 3.12+, JUMP_IF_FALSE_OR_POP은 3.11 이하) ✓
- ROT_TWO → SWAP (Python 3.11+) ✓
- PyObject_IsTrue 흐름 ✓
- 반사 연산 서브클래스 우선 (PyNumber_Add) ✓
- PEP 584 dict |/|= (Python 3.9+) ✓
- PEG grammar nesting ✓
- -7//2=-4, 7%-2=-1, 2**3**2=512, -2**2=-4 모두 직접 검증 ✓

## 인용
[1] reference/expressions §6.10/6.11/6.17 · [2] PEP 572 · [3] PEP 238 · [4] reference/datamodel §3.3.1 · [5] PEP 584 · [6] PEP 617 · [7] CPython source

## 산출물
- PDF: 81쪽, 2.19MB → `/home/soccz/22tb/python-why-pdf/week04_sample.pdf`
