# week04 편집 검수 — 발견 + 수정 기록

> 4주차: 연산자와 표현식 — 컴퓨터의 계산 원리
> PDF: 72쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차 (14섹션)
🟢 PASS — 부제 "컴퓨터의 계산 원리" 1줄.

### p.03 — Hook (지난 수수께끼) + 핵심 질문 + 왜 연산자
🟠→🟢 FIXED — callout-tip "이번 주 핵심 질문" 8자가 wrap. **수정**: print.css에서 `.callout > strong:first-child`에 nowrap 적용.

### p.04 — 산술 연산자 출력 + 핵심 비유 (레시피) + 함정
🟢 PASS — 레시피 비유 명료.

### p.05 — 지금 바로 해봐 + 중급 (표현식 vs 문)
🟠→🟢 FIXED — box-header "표현식(Expression) — 값을 만드는 코드 조각" wrap. **수정**: print.css에서 `.box-header`도 nowrap + 폰트 10pt로 축소.

### p.06 — 왈러스 := + Python 3.8+
🟢 PASS — PEP 572 도입 정확.

### p.07 — 왜 := + 함정 + 고급 (연산자 = 매직 메서드)
🟠→🟢 FIXED — box-header "연산자는 메서드 호출의 문법 설탕" wrap → nowrap 적용.

### p.08 — 비교 연산자도 매직 메서드 + 전공자 (BINARY_OP + tp_as_number)
🟢 PASS — Python 공식 문서 인용 [1].

### p.09 — BINARY_OP 바이트코드 + tp_as_number 구조체
🟢 PASS — PyNumberMethods nb_add/nb_subtract/nb_multiply/nb_true_divide 정확. __radd__ 호출 시연.

### p.10 — __radd__ 결과 + 산술 연산자 도입 + 초급 (7가지)
🟢 PASS.

### p.11 — 산술 결과 + 주의 (/ vs //) + 중급 (문자열 연산자 재사용)
🟢 PASS — Python 2/3 / 차이 정확.

### p.12-14 — 문자열 연산자 + 고급 (Constant Folding) + 전공자 (Part A/B 우선순위)
🟢 PASS — 4 ** 5 vs (4**5)** 우결합 정확.

### p.15 — 연산자 우선순위 + 초급 (수학 계산 순서)
🟢 PASS.

### p.16-19 — 연산자 우선순위 표 + Part A/B + 비교 연산자
🟢 PASS.

### p.20 — Part B (PEG Grammar) + 비교 연산자 도입
🟢 PASS — PEP 617 (Python 3.9+ PEG, 3.10에서 LL(1) 제거) 정확.

### p.21-25 — = vs == 함정 + 비교 연산자 메서드 + Part A/B
🟢 PASS — PyObject_RichCompare(a, b, Py_EQ) 정확. __eq__/__hash__ 일관성 계약 정확.

### p.26-30 — Truthiness + Falsy/Truthy + Part A (PyObject_IsTrue)
🟢 PASS — PyObject_IsTrue 의사코드 (None/True/False fast path → __bool__ → __len__) 정확.

### p.31-35 — 단락 평가 + Python 단락 = 값 반환 + 전공자 (단락 바이트코드)
🟢 PASS — COPY + POP_JUMP_IF_FALSE/TRUE 정확. Python 3.12+ 최적화 (`if x: pass` → RESUME + RETURN_CONST) 정확.

### p.36-40 — 증강 대입 += + __iadd__ + 전공자 (Part A: __iadd__ fallback)
🟢 PASS — list.__iadd__ in-place vs int.__iadd__ → __add__ fallback 정확.

### p.41-45 — Part B (다중 참조 함정) + AI와 연산자 + 전공자 (__add__ vs __radd__)
🟢 PASS — Vector 클래스 + MyInt 서브클래스 우선 시연 정확.

### p.46-50 — AI 코드 패턴 + 실습 + 연산자 탐험
🟢 PASS — walrus + lambda/filter 함수형 vs 명령형 비교.

### p.51-65 — 연습문제 1~11 (전공자 3문제 포함)
🟢 PASS — summary 표준화 적용. Truthiness 단락 + Vector 매직 메서드 + BINARY_OP 등 정답 정확.

### p.66-69 — 이번 주 정리 + 용어 사전 (25개) + 다음 주 맛보기
🟢 PASS.

### p.70 — 참고문헌 [1]~[7]
🟢 PASS — Python 3.14 docs 4 + PEP 572/238/584/617 + CPython source. 모두 1차 출처.

---

## 종합 평가
**총 72→70쪽** (nowrap 폰트 축소 적용으로 -2쪽)

수정 적용:
1. **callout > strong:first-child** nowrap (전 주차 영향)
2. **level-section-title / box-header** nowrap 복귀 + 폰트 축소 (level-section-title 12.5→11.5pt, box-header 10.5→10pt)

품질 종합: 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)

재검수 결과 새 발견 없음
