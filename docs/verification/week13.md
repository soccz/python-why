# week13 검증 리포트

> 13주차: 클로저 & 데코레이터 — 함수를 감싸는 함수

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 6 |
| PDF 페이지 | 73 |

## 검증 핵심
- First-class function (변수, 인자, 반환, 자료구조 저장, 속성) ✓
- Closure = 함수 + 자유 변수 (cell 객체) ✓
- nonlocal 키워드 ✓
- Late binding closure trap (lambda i=i: i) ✓
- `@D def f` = `f = D(f)` syntactic sugar ✓
- functools.wraps (__name__, __doc__, __wrapped__) ✓
- MAKE_CELL bytecode (Python 3.11+, bpo-43693) ✓
- Lambda Calculus origin (Church 1936) ✓
- @property / @classmethod / @staticmethod descriptor ✓

## 인용
[1] reference/decorators · [2] functools · [3] Church 1936 · [4] reference/executionmodel · [5] CPython source · [6] property/classmethod/staticmethod

## 산출물
PDF: 73쪽, 2.12MB
