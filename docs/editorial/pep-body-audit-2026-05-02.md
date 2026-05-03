# PEP 본문 대조 감사 (Body Audit)

- 작성일: 2026-05-02
- 범위: PyWhy 본문이 인용하는 5개 핵심 PEP에 대해 — 책 주장 vs PEP 본문 핵심 일치 여부 1줄 대조
- 1차 출처: `/mnt/20t/study/self_python/python-3.14-docs-text/whatsnew/*.txt` (Python 3.14 공식 문서)
- 판정 기준: OK(일치) / P1(즉시 수정, 사실 오류) / P2(개선, 보완 필요) / P3(스타일·표현)

---

## 요약 표

| PEP | 책 위치 | 책 주장 (요약) | PEP 본문 핵심 (whatsnew 기준) | 판정 |
|---|---|---|---|---|
| PEP 8 | week01 L728; week04 L990 | "스타일 가이드 — '하나의 명백한 방법' 철학 실현"; `x == None`은 비권장 | PEP 8은 코드 스타일 규약. `None` 비교는 항상 `is`/`is not` 사용 명시 | OK |
| PEP 285 | week02 L1202, L1318, L2479 (week04는 PEP 번호 없이 동일 사실 서술) | "2002년 GvR이 bool 타입 추가, 하위 호환을 위해 `int` 서브클래스로 설계" | whatsnew 2.3: "Boolean type added in 2.3 … bool is a subclass of int so that arithmetic still works"; 동기는 "코드 명확성"(주된 목표), 서브클래스는 "산술 동작 유지" | P2 |
| PEP 484 | week14 L288, L320, L2113 | "Python 3.5(2015) typing 모듈 + 타입 힌트 표준화"; "Siek의 점진적 타이핑 이론을 GvR이 직접 참조" | whatsnew 3.5: "PEP 3107의 어노테이션 의미를 정의 — 표준 정의/도구 제공하는 잠정적 모듈 도입; 런타임 타입 검사는 일어나지 않음, mypy 등 별도 검사기 가정" | OK |
| PEP 544 | week14 L728, L1999, L2129 | "PEP 544(Python 3.8) — 구조적 서브타이핑; 상속 없이 메서드 존재로 타입 호환; 덕 타이핑의 공식화" | whatsnew 3.8: "프로토콜 정의. PEP 544, typing.Protocol 및 runtime_checkable; SupportsInt 같은 ABC가 이제 Protocol 서브클래스" | OK |
| PEP 703 | week01 L727; week15 L353, L427, L2030 | "GIL-free CPython 3.13+ opt-in"; "2023 Sam Gross 제안"; "Biased Reference Counting로 단일스레드 오버헤드 최소화"; "3.13에서 실험적 빌드 `--disable-gil`" | whatsnew 3.13 L62: "3.13은 GIL 해제를 *실험적으로 지원*"; whatsnew 3.14 L404-412: "3.13에서 처음 추가, 3.14에서 PEP 703 구현 완료, 단일스레드 패널티 약 5–10%"; PEP 779에서 3.14 공식 지원 | P3 |

---

## PEP별 상세

### 1. PEP 8 — Style Guide
- **책 주장**:
  - week01 L728: "스타일 가이드 / '하나의 명백한 방법' 철학 실현"
  - week04 L990: `print(x == None)` → "비권장 — PEP 8"
- **PEP 본문 핵심**: PEP 8은 별도 PEP(스타일 규약 문서)이며 `None` 비교에 대해 "Comparisons to singletons like None should always be done with `is` or `is not`, never the equality operators"라고 명시.
- **판정**: **OK**. 책 주장과 PEP 본문 일치. 단, "하나의 명백한 방법" 철학은 PEP 20(The Zen of Python) 출처가 더 정확 — week01의 표는 PEP 8을 "스타일 가이드"로 정확히 표기하므로 사실 오류는 아님.

### 2. PEP 285 — Boolean Type
- **책 주장**(week02):
  - L1202: "PEP 285(2002)에서 GvR이 bool 타입 추가, 하위 호환을 위해 int 서브클래스로 만들었다 — 1/0을 논리값으로 쓰던 코드가 계속 동작하도록"
- **PEP 본문 핵심**(whatsnew 2.3 L529-595):
  - "Python 2.3에 Boolean type 추가, True/False 상수 도입"
  - **주된 동기**: "code clearer" (`return 1` vs `return True` 의미 명료성)
  - "bool is a subclass of int **so that arithmetic using a Boolean still works**"
- **판정**: **P2**. 책은 서브클래스 설계의 동기를 "**하위 호환성**(과거 1/0 사용 코드)"으로 서술하지만, PEP 285 / whatsnew 본문의 표현은 "**산술 호환성**(`True+1`이 `2`가 되도록)" 쪽이 더 정확. 둘은 겹치지만 PEP 본문이 강조하는 것은 산술. 보완 필요(권장: "산술 호환성 + 기존 코드 동작 유지").

### 3. PEP 484 — Type Hints
- **책 주장**(week14):
  - L288: "PEP 484 (Python 3.5, 2015): typing 모듈 + 타입 힌트 표준화"
  - L320: "Siek의 Gradual Typing 논문을 GvR이 PEP 484 설계 시 직접 참조"
- **PEP 본문 핵심**(whatsnew 3.5 L327-363):
  - "PEP 3107의 어노테이션 의미를 정의 — 표준 정의/도구 제공하는 *잠정적 모듈* 도입"
  - "런타임 타입 검사는 일어나지 않음; mypy 등 오프라인 형 검사기를 가정"
  - 작성자: GvR, Jukka Lehtosalo, Łukasz Langa
- **판정**: **OK**. 도입 시점(3.5/2015), 메커니즘(typing 모듈, 런타임 미검사), 동기(표준화) 모두 일치. Siek 참조 주장은 PEP 483/484에 명시되어 있으므로 정확.

### 4. PEP 544 — Protocols
- **책 주장**(week14):
  - L728: "Protocol은 덕 타이핑을 타입 시스템에 공식 편입(PEP 544, Python 3.8)"
  - L1999: "구조적 서브타이핑을 위한 클래스. 상속 없이 메서드 존재로 타입 호환"
- **PEP 본문 핵심**(whatsnew 3.8 L1260-1262):
  - "프로토콜 정의. PEP 544, typing.Protocol 및 typing.runtime_checkable()"
  - "SupportsInt 같은 간단한 ABC는 이제 Protocol 서브클래스"
- **판정**: **OK**. 도입 시점(3.8), 메커니즘(구조적 서브타이핑), 핵심 클래스(`Protocol`) 모두 정확.

### 5. PEP 703 — GIL-free CPython
- **책 주장**:
  - week01 L727: "GIL-free CPython (3.13+ opt-in) — 멀티코어 병렬화 한계 해소"
  - week15 L353: "PEP 703(Python 3.13+)에서 GIL 선택적 비활성화 도입 중"
  - week15 L427-431: "2023 Sam Gross 제안; Biased Reference Counting으로 단일스레드 오버헤드 최소화"
  - week15 L434: "Python 3.13(2024) 실험적 빌드 `--disable-gil` 도입"
- **PEP 본문 핵심**:
  - whatsnew 3.13 L62-64: "파이썬 3.13은 GIL 해제를 *실험적으로 지원* (free-threaded mode)"
  - whatsnew 3.14 L404-412: "PEP 703의 구현이 3.14에서 완료 (C API 변경 포함); 특수화 적응 인터프리터(PEP 659)도 free-threaded에서 활성화; 단일스레드 패널티 약 5–10%"
  - whatsnew 3.14 L84: "PEP 779: Free-threaded Python is officially supported (3.14)"
- **판정**: **P3**. 사실 일치(시점, 옵트인, Sam Gross 저자). 단 "Biased Reference Counting" 설명은 PEP 703 본문의 핵심 메커니즘 중 하나로 정확하나, whatsnew는 그 용어를 직접 사용하지 않음 — PEP 703 원문 참조 표기가 이미 week15 L2030에 있으므로 OK 수준. **권장 보완**: 3.14에서 "공식 지원"(PEP 779)이 시작됐다는 사실 추가 시 더 정확. (P3: 정보 보강, 사실 오류 아님.)

---

## 종합

- **사실 오류(P1)**: 없음
- **개선 필요(P2)**: 1건 — PEP 285 동기 서술(하위 호환 vs 산술 호환)
- **보강 권장(P3)**: 1건 — PEP 703에 3.14/PEP 779 공식 지원 시점 추가
- **OK**: 3건 (PEP 8, PEP 484, PEP 544)

---

## 후속 액션 제안

1. **week02 L1202 보완**(P2): "하위 호환성을 위해" → "**산술 호환성**(`True+1=2`)을 유지하면서 기존 1/0 코드도 계속 동작하도록"
2. **week15 L353/L434 보강**(P3): "3.14(2025)에서 PEP 779로 free-threaded 빌드가 공식 지원으로 승격" 한 줄 추가 시 더 최신 정보 반영
3. PEP 8/484/544는 현 상태 유지
