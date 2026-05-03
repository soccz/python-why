# week03 검증 리포트

> 3주차: 변수와 입출력 — 이름표와 바인딩

**검증일**: 2026-05-01
**검증자**: Claude (자율 루프 모드)
**1차 기준**: `tutorial/classes.txt` (Python 3.14)
**보조**: PEP 8, PEP 572, SICP, CPython source

## 종합 결과

| 지표 | 수치 |
|---|---|
| 검증 섹션 | 15 |
| 검토한 기술적 주장 | ~95 |
| 사실 오류 | **0** ✓ |
| 정확성 보강 | 1 (print signature `file=sys.stdout` → `file=None`, week01과 일관성) |
| HTML 구조 버그 | 0 |
| 신규 인용 | 7 (직접 인용 + PEP 8 + PEP 572 + SICP) |
| 통과 | ~94 |

## 섹션별 검증

| § | 제목 | 결과 |
|---|---|---|
| 1 | 이번 주 이야기 | 통과 (서사) |
| 2 | 왜 이름표인가? | 통과 + tutorial/classes 인용 |
| 3 | 바인딩 증명 (id/is) | 통과 |
| 4 | Mutable + 바인딩 | 통과 (in-place vs rebind) |
| 5 | 변수 이름 규칙 | 통과 + PEP 8 인용 |
| 6 | 다중 대입 & 언패킹 | 통과 (SWAP bytecode 3.11+ 정확) |
| 7 | print() 완전 해부 | print signature `file=None` 일관성 수정 |
| 8 | input() 완전 해부 | 통과 (PyOS_Readline 정확) |
| 9 | 네임스페이스 & LEGB | 통과 (frame f_locals/f_globals 정확) |
| 10 | AI와 변수 | 통과 (late binding closure 정확) |
| 11 | 실습 | 통과 |
| 12 | 연습문제 (10) | 모두 정답 정확 |
| 13 | 정리 | 통과 |
| 14 | 용어사전 (26) | 통과 |
| 15 | 다음 주 맛보기 | 통과 |

## 신규 인용
[1] Python 3.14 Tutorial Ch.9.2 — Scopes and Namespaces (직접 인용 4건)
[2] PEP 8 — Style Guide for Python Code
[3] SICP — Environment Model
[4] PEP 572 — Walrus Operator
[5] CPython source — ceval.c / frameobject.c / listobject.c / gcmodule.c

## 산출물
- PDF: 78쪽, 2.17MB → `/home/soccz/22tb/python-why-pdf/week03_sample.pdf`
