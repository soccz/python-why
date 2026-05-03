# week08 검증 리포트

> 8주차: 반복문 — while / 상태를 보는 루프

**검증일**: 2026-05-01

## 종합

| 지표 | 수치 |
|---|---|
| 검증 섹션 | 14 |
| 사실 오류 | **0** ✓ |
| 신규 인용 | 4 |
| PDF 페이지 | 102 |

## 검증 핵심
- while assignment_expression ":" suite (walrus 허용) ✓
- POP_JUMP_IF_FALSE + JUMP_BACKWARD bytecode ✓
- Newton's method √2 수렴 ✓
- 이진 탐색 정확성 ✓
- iter(callable, sentinel) 두 인자 형태 ✓
- Walrus + COPY + STORE_FAST 바이트코드 ✓

## 인용
[1] reference/compound_stmts §8.2 · [2] PEP 572 · [3] iter(callable, sentinel) · [4] CPython source

## 산출물
- PDF: 102쪽, 2.03MB → `/home/soccz/22tb/python-why-pdf/week08_sample.pdf`
