# week02 편집 검수 — 발견 + 수정 기록

> 2주차: 데이터와 타입 — 컴퓨터가 저장하는 것
> PDF: 56쪽
> 검수 방식: 1페이지씩 시각 + 글쓰기 + 설명 + 코드 + 비유 + 페이지 사고 점검

## 등급
- 🟢 PASS / 🟡 MINOR / 🟠 MAJOR / 🔴 BLOCKING

---

## 페이지별 기록

### p.01 — 챕터 디바이더
🟢 PASS — "데이터와 타입 / 컴퓨터가 저장하는 것" 1줄로 깔끔.

### p.02 — 목차 (14개 섹션)
🟢 PASS — 양쪽 column 균형, 레벨 점 정렬 정확.

### p.03 — 이번 주 이야기 (Hook) + 핵심 질문 + 왜 타입이 필요한가 도입
🟢 PASS — 우편번호 06152 vs 숫자 6152 비유 정확. 핵심 질문 박스의 65 vs 'A' 비트 동일성 설명 (01000001) 명확.

### p.04 — 같은 모양 다른 의미 + 핵심 비유 박스 + 지금 바로 해봐
🟠→🟢 FIXED — `.callout strong` 모두가 display:block이어서 "타입은 박스의 / 레이블 / 입니다." 3줄 분리 발생. **수정**: print.css에서 `.callout strong { display: inline }` + `.callout > strong:first-child { display: block }` 오버라이드 추가. 재빌드 후 1줄 확인.

### p.05 — type() 5가지 결과 + 고급 박스 (Python Data Model)
🟢 PASS — "Every object has an identity, a type and a value" Python 3.14 Data Model 직접 인용. 3요소 (id/type/value) 명확.

### p.06 — PyObject 구조 (C 코드) + 코드
🟢 PASS — typedef PyObject {ob_refcnt, ob_type} + PyLongObject 구조 정확. cpython/Include/object.h 출처 명시.

### p.07 — Part B 동적/정적/덕 타이핑 비교
🟢 PASS — 3가지 타이핑 (Static Java/C, Dynamic Python, Duck Python의 핵심) 각 코드 예제 정확. tp_as_number / tp_as_sequence 슬롯 언급.

### p.08 — int 정수 시작 + WHY + 초급 (정수 연산)
🟢 PASS — //, %, ** 연산 전체 + 주의 박스 (/ 항상 float 반환).

### p.09 — 중급 (임의 정밀도) + PEP 238
🟢 PASS — 2**1000 (301자리) 시연 + bin/oct/hex 변환 + PEP 238 인용 정확.

### p.10 — 흔한 실수 (is vs ==) + 고급 (int 연산 세부)
🟢 PASS — CPython small int caching (-5~256) 정확. floor division/modulo 부호 규칙 정확.

### p.11 — C 정수 차이 + 전공자 박스 (PyLongObject)
🟢 PASS — Part A: cpython/Include/cpython/longintrepr.h 인용 + sys.getsizeof로 정수 크기 확인.

### p.12 — 소정수 캐싱 cont. + Part B (2의 보수) + float h2 시작
🟢 PASS — Two's Complement / wrap-around 정확. C int 한계와 Python int의 ob_digit[] 동적 배열 비교.

### p.13 — 0.1 + 0.2 ≠ 0.3 + 중급 박스 (왜)
🟢 PASS — "0.1을 이진수로 변환하면 무한소수" 정확 (0.0001100110011...). round / math.isclose 해결책 제시.

### p.14 — decimal.Decimal + 고급 (IEEE 754 64비트 구조)
🟢 PASS — IEEE 754 [3] 인용. struct.pack('>d', f).hex() 비트 직접 확인 코드 제공.

### p.15 — 특수 float 값 (inf/-inf/nan) + 함정 박스
🟢 PASS — NaN != NaN 자기 자신 비교 False, math.isnan() 사용 권장 정확.

### p.16 — 비트 분해 분석 + 언제 무엇 + 전공자 (PyFloatObject)
🟢 PASS — 부호/지수/가수 비트 시프트 분해 (>>63, >>52, &mask) 정확. Objects/floatobject.c 출처.

### p.17 — Python에서 float 확인 + Part B (David Gay dtoa)
🟢 PASS — Python 3.1+ repr 변경 (David Gay dtoa 알고리즘 [4]) 정확. "가장 짧은 십진수 표현" 설명 정확.

### p.18 — str 초급 박스 (따옴표 사이의 모든 것)
🟡 MINOR — 페이지 하단 약 35% 빈 공간. 초급 박스가 자연 종료, 다음 박스(함정)가 다음 페이지로. acceptable.

### p.19 — 함정 (immutable) + 중급 (str 불변)
🟢 PASS — TypeError: 'str' object does not support item assignment 정확. 슬라이싱 / replace로 새 객체 생성 시연.

### p.20 — 슬라이싱 cont. + 출력 + 고급 (Unicode / ord / chr)
🟢 PASS — 한글/이모지 ord() 결과 (U+AC00, U+1F600) 정확.

### p.21 — Unicode 마무리 + Python 2 vs 3 + 인코딩 도입
🟢 PASS — Python 2 str = bytes / Python 3 str = Unicode 차이 정확. UTF-8 한글 1자 = 3바이트 시연.

### p.22 — 인코딩 오류 + 출력 + 전공자 (PEP 393)
🟢 PASS — PEP 393 [5] Flexible String Representation 인용. UCS-2/UCS-4 fixed-width 문제 → 3가지 자동 표현 변환.

### p.23 — sys.getsizeof + Part B (Code Point vs Grapheme)
🟢 PASS — String Interning 동작 + "é" = e + ́ (combining accent) 2 code points 정확. NFC/NFD 정규화 [6] 인용.

### p.24 — Unicode 정규화 + bool 시작 + WHY (왜 bool은 int 서브클래스)
🟢 PASS — PEP 285 [7] (Guido van Rossum, 2002) 정확.

### p.25 — bool 초급 + 함정 (bool("False") == True)
🟢 PASS — bool은 길이 ≠ 0이면 True 동작 정확. user_input.lower() not in {"false","0","no",""} 패턴 제공.

### p.26 — Truthiness + Falsy/Truthy + 함정 (True == 1 vs True is 1)
🟢 PASS — Python 3.8+ SyntaxWarning 정확. type(True) vs type(1) bool/int 구분.

### p.27 — bool 마무리 + 전공자 (PEP 285 + __bool__)
🟢 PASS — class MyList: __bool__(self) → len(self.items) > 0 시연. 덕 타이핑 예제 명료.

### p.28 — Py_True 싱글턴 + Part B (Boolean Algebra)
🟢 PASS — boolobject.c (#define Py_True ((PyObject *) &_Py_TrueStruct)) 정확. George Boole 1854 원전 언급. 드 모르간 법칙 시연.

### p.29 — type() 초급 + 중급 (type vs isinstance)
🟢 PASS — type() == int (bool에서 False) vs isinstance() (서브클래스 포함 True) 차이 명확. 실무 권장 isinstance().

### p.30 — 함정 (type(True) == int = False) + 고급 (type 메타클래스)
🟢 PASS — type의 이중 역할 (타입 확인 함수 + 메타클래스) 정확. type(name, bases, dict) 동적 클래스 생성 시연.

### p.31 — 메타클래스 시연 + 타입 변환 h2 + WHY + 초급 (int/float/str 변환)
🟢 PASS — Python의 명시적 변환 정책 + Zen of Python "Explicit is better than implicit" 인용 적절.

### p.32 — input() str 함정 + 중급 (변환 실패 ValueError)
🟢 PASS — int("3.14") ValueError, int(float("3.14")) 2단계 우회. bool("0") == True 함정 추가.

### p.33 — 흔한 실수 (str + int) + 고급 (__int__/__float__/__str__ 매직 메서드)
🟢 PASS — Temperature 클래스의 __int__ / __float__ / __str__ 시연. "암묵적 변환은 int → float 승격뿐" 명시.

### p.34 — AI는 타입을 어떻게 다루는가 + 초급 (AI 코드 검증) + 중급 (타입 힌트)
🟢 PASS — input() str 망각 패턴 + AI 코드 검증 체크리스트 3가지. 타입 힌트가 AI 정확도 향상.

### p.35 — AI 타입 힌트 적용 + 고급 (타입 관련 버그 패턴)
🟢 PASS — 패턴 1 (float 비교 == 오류) / 패턴 2 (bool 판단 오류 result == False) / 패턴 3 (type vs isinstance) 정확.

### p.36 — 전공자 (LLM 산술 약점) + Part A (BPE) + Part B (mypy/pyright) + 실습 시작
🟢 PASS — BPE 토큰 단위 처리 → 큰 숫자 산술 약점 명확. mypy 사용 코드 + Copilot/Claude 정확도 향상 언급.

### p.37 — 단계별 실습 + 연습문제 도입
🟠→🟢 FIXED — "▶ 정답 보기를 클릭하세요" → "아래 정답 및 해설을 확인하세요"로 변경 (week02.html L1853). 또한 details summary `<summary>▶ 정답 보기</summary>` 10개를 다른 주차 표준 `<summary>정답 및 해설</summary>`으로 통일 (sed 일괄 수정).

### p.38 — 문제 1 (str + vs int +) + 정답
🟢 PASS — summary "정답 및 해설"로 표시. 핵심 비유 정확.

### p.39 — 문제 2 (input + 1) + 문제 3 (int(3.9))
🟢 PASS — int() truncation 설명 + math.floor(-3.9) = -4 차이 정확.

### p.40 — 문제 3 결론 + 문제 4 (0.1 + 0.2 == 0.3)
🟢 PASS — math.isclose() 권장 정확.

### p.41 — 문제 5 (bool() 8가지)
🟢 PASS — Falsy 값 (0, 0.0, "", []) + Truthy ("0", "False") 차이 명확.

### p.42 — 문제 6 (str item assignment) + 정답
🟢 PASS — Immutable 원인 + 두 해결법 (새 문자열 + replace).

### p.43 — 문제 7 (True == 1 vs True is 1)
🟢 PASS — 6가지 비교 예측 정확. SyntaxWarning 언급.

### p.44 — 문제 7 결론 + 문제 8 (sys.getsizeof CPython)
🟢 PASS — PyLongObject ob_digit[] 배열 크기 차이 (28/72 bytes) 정확.

### p.45 — 문제 8 결론 + 문제 9 (struct.pack IEEE 754)
🟢 PASS — sign/exp_raw/frac 비트 분해 (>>63, >>52, &mask) 정확.

### p.46 — 문제 9 결론 + 문제 10 (Py_True 싱글턴)
🟢 PASS — IEEE 754 (-1)^0 × 2^(-4) × 1.b999...16 ≈ 0.1 정확.

### p.47 — 문제 10 답변 + 이번 주 정리 시작
🟢 PASS — Py_True 전역 객체 + int.__eq__ + bool.__new__ CPython 구현 설명 정확.

### p.48 — 핵심 정리 카드 (4가지 타입 / 주의 / 핵심 함수) + WHY 요약
🟢 PASS — 6가지 WHY 카드 콜렉션 시작.

### p.49 — WHY 요약 마무리 + 용어 사전 시작 (Type/int/float/str/bool)
🟢 PASS — 용어 카드 깔끔.

### p.50 — 용어 사전 (Immutable/Mutable/Truthiness/Falsy/Type Conversion)
🟢 PASS.

### p.51 — 용어 사전 (IEEE 754/Floating Point/Arbitrary Precision/PyObject/ob_type/ob_refcnt/Singleton)
🟢 PASS.

### p.52 — 용어 사전 (Duck/Dynamic Typing/Type Annotation/Unicode/Code Point/Metaclass/Truncation)
🟢 PASS.

### p.53 — 용어 사전 (Concatenation/PEP 285/Subclass/Operator Overloading) + 다음 주 맛보기
🟢 PASS — week03 맛보기 (변수와 입출력 — 이름표와 바인딩) 자연스럽게 연결.

### p.54 — 다음 주 핵심 수수께끼 코드 + 마무리
🟡 MINOR — 페이지 하단 약 60% 빈 공간. 다음 페이지가 참고문헌 (page-break-before:always)이라 자연스러운 break.

### p.55 — 참고문헌 [1]~[7]
🟢 PASS — Python docs / PEP 238 / IEEE 754 / David Gay dtoa / PEP 393 / Unicode Annex 15 (UAX #15) / PEP 285 — 모두 URL + 한국어 docs 병기.

### p.56 — 참고문헌 [8] Library Reference + [9] CPython source
🟢 PASS — github.com/python/cpython 인용 + 본 챕터에서 인용한 모든 CPython 내부 구조의 1차 출처 명시.

---

## 종합 평가

**총 56쪽 전수 검수 완료**

수정 적용:
1. **표지 부제** (이전): "컴퓨터는 무엇을 저장하는가?" → "컴퓨터가 저장하는 것"
2. **callout strong CSS** (p4 발견): print.css에서 첫 strong만 block, 나머지 inline 강제
3. **▶ 정답 보기 → 정답 및 해설** (p37+): PDF 정적 매체 적합 + 다른 주차 표준 통일
4. **연습문제 도입 문구**: "클릭하세요" → "확인하세요"

품질 종합:
- 콘텐츠 정확성: 9개 인용 (Python 3.14 docs 5 + PEP 3 + IEEE 754 1 + David Gay 1 + Unicode 1) 모두 1차 출처
- CPython 인용: object.h / longintrepr.h / longobject.c / floatobject.c / boolobject.c / unicodeobject.c 모두 명시
- 4단계 레벨 (초급/중급/고급/전공자 Part A+B) 모든 섹션에 균등 적용
- AI 섹션: input() str 함정 / float 비교 오류 / type vs isinstance 패턴 정확
- 출판 가능 수준: ✅

---

## 재검수 추가 발견 (2026-05-02)

재검수 결과 새 발견 없음. 56쪽 전수 재확인 완료, 기존 findings의 PASS/FIXED 판정 모두 유효. 코드 출력값(p38 Problem 1, p41 Problem 5 8개 bool 결과, p43 Problem 7 6개 출력, p44 Problem 8 sys.getsizeof 28/28/40/72 bytes), CPython 인용(boolobject.c, longintrepr.h, floatobject.c, object.h), PEP 인용(238/285/393), Unicode/IEEE 754 인용 모두 1차 출처와 일치. 출판 가능 상태 유지.
