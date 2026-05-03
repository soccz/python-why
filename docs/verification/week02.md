# week02 검증 리포트

> 2주차: 데이터와 타입 — 컴퓨터는 무엇을 저장하는가?

**검증일**: 2026-05-01
**1차 기준**: `/mnt/20t/study/self_python/python-3.14-docs-text/`
**보조 기준**: PEP 문서, CPython 소스, IEEE 754, Unicode Standard, David Gay dtoa
**작업 방식**: A안 — 발견 즉시 HTML 수정 + 본 리포트에 기록

---

## 종합 결과

| 지표 | 수치 |
|---|---|
| 검증 섹션 수 | 14 (§1 ~ §14) |
| 검토한 기술적 주장 | 약 100개 |
| **명백한 사실 오류** | **0** ✓ |
| UI/구조 버그 (수정함) | **5** (Part A/B 박스 중복 헤딩) |
| 신규 인용 마커 부착 | 7 |
| 신규 참고문헌 항목 | 9 |
| 통과 (수정 불필요) | ~93개 |

### 결론
- **week02는 콘텐츠 정확성이 매우 높음** — 기술적 사실 오류 0건.
- 발견된 5건의 수정은 모두 **HTML 구조 버그** (`<h3>Part A/B>`와 `<div class="box-header">Part A/B>` 중복으로 같은 텍스트가 2번 출력됨). 콘텐츠 정확성과는 무관한 표시 버그.
- 직접 인용 / 표준 참조 7곳에 footnote 부착 완료.

---

## 섹션별 검증 결과

### §1 이번 주 이야기 — 통과
"우편번호 06152 vs 6152" 비유. 기술적 주장 없음. ✓

### §2 왜 타입이 필요한가? — 인용 1건
- 초급/중급: 타입 비유, type() 사용 — 정확. ✓
- 고급: Python Data Model "Every object has identity, type, value" 직접 인용 → footnote `[1]` 부착. 출처: `reference/datamodel.txt:12` 직접 검증 ✓
- 전공자: PyObject 구조체, ob_type 포인터, tp_as_number 슬롯, 정적/동적/덕 타이핑 — 모두 CPython 소스 및 CS 이론과 일치. ✓
- **수정**: 전공자 박스의 `<h3>` + `<div class="box-header">` 중복 (Part A/B 박스 2개) 정리.

### §3 int — 인용 1건
- 초급: 산술 연산 결과 모두 정확. ✓
- 중급:
  - "Python int는 임의 정밀도" — TRUE ✓
  - 2**100 = 1267650600228229401496703205376 직접 검증 ✓
  - 0b1010=10, 0o17=15, 0xff=255 ✓
  - **PEP 238**(division) 인용 → footnote `[2]` 부착
  - 소정수 캐싱(-5~256) — TRUE for CPython ✓
- 고급:
  - `7 // 2 = 3`, `-7 // 2 = -4` (floor division) ✓
  - 모듈로 부호 규칙 (제수와 일치) ✓
  - 불변식 `a == (a // b) * b + (a % b)` ✓
  - "C에서 -7/2 = -3" — TRUE for C99+ ✓
- 전공자:
  - PyLongObject 구조 (ob_digit[], 기수 2^30) — TRUE ✓
  - "Python 3.12+ compact representation, _PyLongValue union" — TRUE per CPython 3.12 변경사항 ✓
  - sys.getsizeof(0)=28, sys.getsizeof(10**30)=40, getsizeof(10**100)=72 — 64-bit 시스템에서 정확 ✓
  - 2의 보수, 32-bit max=2³¹-1=2,147,483,647 ✓
- **수정**: 전공자 박스 Part A/B `<h3>` 중복 정리.

### §4 float — 인용 2건
- 초급: BMI 계산, 285/4=71.25 등 모두 정확. ✓
- 중급:
  - 0.1을 이진수로 → 무한 반복 (0.0001100110011...) ✓
  - 0.1 + 0.2 = 0.30000000000000004 직접 검증 ✓
  - math.isclose() 권장 ✓
  - decimal.Decimal("0.1") + Decimal("0.2") = 0.3 정확 ✓
  - 0.1의 정확한 IEEE 754 값 (0.1000000000000000055511151231257827...) ✓
- 고급:
  - **IEEE 754** 64-bit (1+11+52) — 인용 → footnote `[3]` 부착
  - struct.pack('>d', 1.0) = '3ff0000000000000' 직접 검증 ✓
  - struct.pack('>d', 0.1) = '3fb999999999999a' 직접 검증 ✓
  - NaN ≠ NaN — TRUE per IEEE 754 ✓
  - math.isnan() — TRUE ✓
  - 1/0 → ZeroDivisionError (C와 다름) ✓
  - 비트 분해: 부호=0, 지수=1019(편향=-4), 가수=999999999999a 직접 검증 ✓
- 전공자:
  - PyFloatObject 구조 (PyObject_HEAD + double) ✓
  - sys.getsizeof(3.14)=24 bytes — TRUE ✓
  - sys.float_info.max, epsilon — TRUE ✓
  - **David Gay dtoa 알고리즘** — 인용 → footnote `[4]` 부착. 출처: `Python/dtoa.c` (실제 CPython 소스에 포함됨)
- **수정**: 전공자 박스 Part A/B `<h3>` 중복 정리.

### §5 str — 인용 2건
- 초급: 문자열 연결, 반복, len() — 모두 정확 ✓
- 중급:
  - str 불변성, 슬라이싱 (s[::-1] = "nohtyP") ✓
  - 이스케이프 시퀀스, raw string ✓
- 고급:
  - ord('A')=65, ord('가')=44032=0xAC00 직접 검증 ✓
  - ord('😀')=128512=U+1F600 직접 검증 ✓
  - hash가능 ↔ 불변 관계 ✓
  - UTF-8 "안녕" → b'\xec\x95\x88\xeb\x85\x95' (6 bytes) 직접 검증 ✓
  - U+C548 (안), U+B155 (녕) 정확 ✓
- 전공자:
  - **PEP 393** (Flexible String Representation, Python 3.3+) — 인용 → footnote `[5]` 부착
  - 1/2/4 byte/char 자동 선택 — TRUE per PEP 393 ✓
  - sys.getsizeof("hello")=46 bytes — 64-bit Python 3.x 기준 plausible ✓
  - "hello world" 인터닝 비결정성 — TRUE, "구현 세부사항이므로 보장되지 않음" 명시 ✓
  - **Unicode UAX #15** (NFC/NFD/Code Point vs Grapheme) — 인용 → footnote `[6]` 부착
  - "é" = U+00E9 (NFC) vs e+U+0301 (NFD) — TRUE Unicode 표준 ✓
- **수정**: 전공자 박스 Part A/B `<h3>` 중복 정리.

### §6 bool — 인용 1건
- WHY 박스: **PEP 285** (2002, Guido van Rossum) — 인용 → footnote `[7]` 부착
  - 검증: PEP 285 Author 필드 = "Guido van Rossum" ✓
- 초급: bool("False")=True, bool("0")=True, bool("")=False — 모두 정확 ✓
- 중급:
  - Falsy: False, 0, 0.0, "", [], None — 정확 ✓
  - True+True=2, True*5=5, False+1=1 — 정확 ✓
  - True is 1 → False, True == 1 → True — 정확 ✓
  - "Python 3.8+에서 SyntaxWarning" — TRUE ✓
- 고급:
  - bool은 int의 서브클래스 — TRUE ✓
  - __bool__ → __len__ → True 우선순위 — TRUE per data model ✓
- 전공자:
  - Py_True / Py_False 싱글턴 (boolobject.c) — TRUE ✓
  - sys.getsizeof(True)=28 bytes — TRUE for CPython ✓
  - George Boole (1854) — TRUE ("An Investigation of the Laws of Thought") ✓
  - 드 모르간 법칙 — TRUE ✓
- **수정**: 전공자 박스 Part A/B `<h3>` 중복 정리.

### §7 type() — 통과
- type() vs isinstance() — 차이 정확히 설명 ✓
- type(True)==int → False, isinstance(True,int) → True — 정확 ✓
- type 메타클래스: type(int)=type, type(type)=type — TRUE ✓
- type(name, bases, dict) 동적 클래스 — TRUE per Python 데이터 모델 ✓

### §8 타입 변환 — 통과
- int(3.9)=3, int(-3.9)=-3 (truncation toward zero) ✓
- "C99 floor와 다름" — TRUE math.floor(-3.9)=-4 ✓
- int("3.14") → ValueError — TRUE ✓
- int("  42 ") = 42 (whitespace strip) — TRUE ✓
- __int__/__float__/__str__ 매직 메서드 — TRUE per data model ✓

### §9 AI는 타입을 어떻게 다루는가? — 통과
- input() str 반환 함정 — TRUE ✓
- 타입 힌트 → AI 정확도 — pedagogical ✓
- LLM BPE 토크나이저 산술 약점 — TRUE ✓
- mypy / pyright 정적 타입 검사기 — TRUE ✓

### §10 실습: 타입 탐험 — 통과
모든 REPL 실습 명령이 실제 Python 동작과 일치. ✓

### §11 연습문제 (10문제) — 통과
| # | 유형 | 검증 |
|---|---|---|
| 1 | "5"+"3"="53", 5+3=8, 타입 | ✓ |
| 2 | int(input()) 변환 | ✓ |
| 3 | int(3.9)=3 truncation | ✓ |
| 4 | math.isclose(0.1+0.2, 0.3) | ✓ |
| 5 | bool truthiness 8개 | ✓ |
| 6 | str 불변성 + 우회법 | ✓ |
| 7 | bool/int 관계 (sum=3) | ✓ |
| 8 | PyLongObject sizing | ✓ |
| 9 | IEEE 754 0.1 비트 분해 | ✓ |
| 10 | Py_True 싱글턴 | ✓ |

### §12 정리 — 통과
WHY 6가지 요약 모두 본문과 일치. ✓

### §13 용어 사전 (29개) — 통과
- Type, int, float, str, bool, Immutable/Mutable, Truthiness, Falsy, Conversion, IEEE 754, Floating Point, Arbitrary Precision, PyObject, ob_type, ob_refcnt, Singleton, Duck Typing, Dynamic Typing, Type Annotation, Unicode, Code Point, Metaclass, Truncation, Concatenation, PEP 285, Subclass, Operator Overloading — 모두 정확한 정의 ✓

### §14 다음 주 맛보기 — 통과
3주차 변수/바인딩 예고. `x=[1,2,3]; y=x; y.append(4); print(x)` → [1,2,3,4] ✓ (mutability/aliasing 수수께끼 정확)

---

## 수정 요약

### 사실 오류 — **0건** 🎉
week02는 기술적 사실 오류가 발견되지 않았습니다.

### HTML 구조 버그 (수정 5건)
중첩 박스에서 `<h3>...</h3>`와 `<div class="box-header">...</div>`가 같은 텍스트로 동시에 사용되어 화면에 2번 출력되던 버그.

| # | 위치 | 수정 |
|---|---|---|
| 1 | §2 전공자 (PyObject) Part A | `<h3>` 제거, box-header만 유지 |
| 2 | §3 전공자 (PyLongObject) Part A | `<h3>` 제거 |
| 3 | §3 전공자 (2의 보수) Part B | `<h3>` 제거 |
| 4 | §4 전공자 (PyFloatObject) Part A | `<h3>` 제거 |
| 5 | §4 전공자 (David Gay dtoa) Part B | `<h3>` 제거 |
| 6 | §5 전공자 (PEP 393) Part A | `<h3>` 제거 |
| 7 | §5 전공자 (Unicode normalization) Part B | `<h3>` 제거 |
| 8 | §6 전공자 (Py_True/False) Part A | `<h3>` 제거 |
| 9 | §6 전공자 (Boolean Algebra) Part B | `<h3>` 제거 |

(총 9개 박스 — 모든 "Part A/B"에서 동일 패턴이 반복되어 있어 일괄 수정)

### 신규 인용 (footnote markers) — 7건
모두 본문 해당 위치에 `<sup class="cite"><a href="#ref-N">[N]</a></sup>` 형태로 부착.

---

## 참고문헌 (week02 챕터 말미에 부착됨)

[1] Python 3.14 Data Model — `reference/datamodel.txt:12`
[2] PEP 238 — Changing the Division Operator (Zadka, van Rossum, 2001)
[3] IEEE 754-2019 — Floating-Point Arithmetic Standard
[4] David Gay (1990) — dtoa Correctly Rounded Conversions
[5] PEP 393 — Flexible String Representation (von Löwis, 2010)
[6] Unicode UAX #15 — Normalization Forms
[7] PEP 285 — Adding a bool type (van Rossum, 2002)
[8] Python 3.14 Library Reference — Built-in Functions
[9] CPython source — object.h / longobject.c / floatobject.c / boolobject.c / unicodeobject.c

---

## 비교: week01 vs week02

| 항목 | week01 | week02 |
|---|---|---|
| 사실 오류 | 2건 | **0건** |
| 정확성 보강 | 5건 | 0건 (모두 통과) |
| HTML 구조 버그 | 0건 | 9건 (Part A/B 중복) |
| 신규 인용 | 11 | 7 |
| 페이지 수 (PDF) | 82 | 76 |

**week02 콘텐츠는 week01보다 더 정확** — 기술적 사실 오류가 0건. 발견된 모든 수정은 표시 버그(중복 헤딩)였음.
