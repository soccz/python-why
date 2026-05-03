# week12 검증 리포트

> 12주차: 클래스 심화 & 던더 메서드 — 파이썬이 연산자를 처리하는 방법

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 6 |
| PDF 페이지 | 108 |

## 검증 핵심
- 던더 메서드는 type C 슬롯(tp_*) 직접 참조 — 인스턴스 dict 우회 ✓
- __new__ vs __init__ (생성 vs 초기화) ✓
- type.__call__ → __new__ → __init__ 흐름 ✓
- __init_subclass__ (PEP 487, Python 3.6+) ✓
- __eq__ / __hash__ 쌍둥이 계약 ✓
- functools.total_ordering ✓
- C3 MRO (Pedroni 2003) ✓
- @contextmanager / __enter__ / __exit__ (PEP 343) ✓
- NotImplemented (반환값) vs NotImplementedError (예외) 구분 ✓
- reprlib for self-referencing structures ✓

## 인용
[1] reference/datamodel — Special method names · [2] PEP 487 · [3] C3 MRO · [4] PEP 343 · [5] functools · [6] CPython source

## 산출물
PDF: 108쪽, 1.92MB
