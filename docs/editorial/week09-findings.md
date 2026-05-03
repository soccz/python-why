# week09 편집 검수 — 발견 + 수정 기록

> 9주차: 함수 — def/return, First-class object, LEGB Scope, Pass by Object Reference, 클로저
> PDF: 86쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차 (14섹션)
🟢 PASS — 부제 "왜 함수가 존재하는가". 14개 섹션 모두 4레벨 표기.

### p.03-04 — §01 이번 주 이야기
🟢 PASS — 세 배열 binary_search 코드 중복 → 함수 도입 도입부 명료.

### p.05-12 — §02 왜 함수가 존재하는가 (초급/중급/고급/전공자 Part A+B)
🟢 PASS — DRY/Abstraction/Namespace boundary 3가지 역할. funcdef BNF (compound_stmts) [1] 정확. Part A MAKE_FUNCTION 클로저 플래그 8 정확 (CPython 3.12 기준). add5 is add10 → False (PyFunctionObject 매번 새로), __code__ 공유 → True. Part B Dijkstra/Böhm/Jacopini 구조화 프로그래밍 (1960s) 인용.

### p.12-19 — §03 def와 return (초급/중급/고급/전공자)
🟢 PASS — Parameter vs Argument 명확. return 없으면 None / 여러 return 경로 / 튜플 반환 / 기본값 매개변수 / docstring `help()` 출력 / 타입 어노테이션 PEP 3107 [3] / `__annotations__` 딕셔너리. Part A PyFunctionObject __code__ co_varnames/co_argcount/co_filename, __defaults__, __annotations__, __name__, __globals__ 모두 정확. Part B code object (PyCodeObject, immutable, def 문에서 공유) vs function object (PyFunctionObject, mutable, def 실행 시마다 생성) 구별 정확. make_counter c1/c2 cell 분리 검증.

### p.20-24 — §04 First-class Object (초급/중급/고급/전공자)
🟢 PASS — `f = square` 함수 객체 자체 / `sorted(words, key=len)` 괄호 의미. 고차 함수 map/filter/sorted/lambda. lambda PEP 8에서 변수 할당 비권장. functools.partial(power, exp=2). Factory 패턴 make_multiplier. Part A PyFunctionObject __closure__ tuple of cell + co_freevars. Part B Lambda Calculus (Alonzo Church 1930s) 정확. Guido van Rossum이 lambda 도입 + Python 3000 제거 논의 후 철회.

### p.25-32 — §05 LEGB Rule (초급/중급/고급/전공자)
🟢 PASS — 교실/복도 비유. LEGB 4단계 정확. global/nonlocal 키워드. UnboundLocalError 함정 ("x = 20이 있으면 함수 전체에서 지역") 명확. Part A LOAD_FAST/LOAD_GLOBAL/LOAD_DEREF 바이트코드 비교 + _PyInterpreterFrame (CPython 3.12+, 3.11 이전 PyFrameObject) 정확. f_locals/f_globals/f_builtins/f_back 설명 정확. Part B Lexical vs Dynamic Scoping 비교 (Emacs Lisp/초기 Perl).

### p.32-39 — §06 Pass by Object Reference (초급/중급/고급/전공자)
🟢 PASS — 위치/키워드/기본값. *args, **kwargs, keyword-only (`*` 이후). immutable (int) 함수 안 변경 시 새 객체 / mutable (list) 내용 변경 가능. Mutable Default Argument 함정 (`[]` 기본값은 함수 객체 __defaults__에 한 번 생성 → 누적). 해결: None 기본값 후 lst=[]. Part A CALL 바이트코드 (CPython 3.11+, PEP 659 [4], CALL_FUNCTION 대체) + _PyInterpreterFrame 할당 정확. Part B Eager (Strict) Evaluation 정확.

### p.39-47 — §07 재귀와 Call Stack (초급/중급/고급/전공자)
🟢 PASS — 마트료시카 비유. factorial(5) base/recursive case 명확. fib_recursive vs fib_iterative O(2^n) vs O(n). sys.getrecursionlimit() 기본 1000 정확. lru_cache fib_slow ~2,900만 호출 vs fib_fast 36회 (CacheInfo hits=8/misses=11). 하노이 탑 재귀. 꼬리 재귀(TCO) Python 미지원 + Guido 인용 (디버깅 가능성/명시성 우선). Part A inspect.stack() / sys._getframe() / f_back 체인 + _PyInterpreterFrame (3.12+) + sys.getrecursionlimit() 1000으로 스택 오버플로 방지. Part B TCO Scheme/Haskell/Scala 지원, Python 미지원 이유 (traceback 망가짐, sys.settrace 의존, 반복문 재작성이 Pythonic).

### p.48-55 — §08 클로저 (초급/중급/고급/전공자)
🟢 PASS — 가방 비유. make_greeting → say_hello가 greeting 기억. nonlocal 카운터. 데코레이터 기초 log_call. functools.wraps __name__/__doc__ 보존. 루프 변수 캡처 함정 (모든 lambda가 같은 i 참조 → [4,4,4,4,4]) + 해결 (기본 인수 `i=i` / 클로저 팩토리). Part A cell object + LOAD_DEREF / STORE_DEREF / COPY_FREE_VARS (Python 3.12) 정확. __closure__ cell tuple, .cell_contents. Part B Free Variable 환경(Environment), cell은 힙 할당으로 외부 함수 종료 후에도 생존.

### p.55-61 — §09 AI와 함수 (초급/중급/고급/전공자)
🟢 PASS — AI 함수 검토 체크리스트 3가지 (return / Side Effect / mutable 기본값). 순수 함수 vs 부작용 함수 비교. SRP (Single Responsibility Principle) 리팩토링 (filter_passing/sort_by_score/print_students 분리). Part A type annotations + inspect.signature() + sig.parameters/return_annotation 정확. Part B mypy 정적 분석 + Liskov Substitution Principle (LSP).

### p.62-64 — §10 실습 3개 (dis.dis 함수 분해, 클로저 상태 추적, LEGB 탐험)
🟢 PASS.

### p.64-77 — §11 연습문제 13개 (초급4 + 중급4 + 고급2 + 전공자3)
🟢 PASS — find_max (빈 리스트면 None) / reverse_string (for 루프) / filter_evens / convert_temp (`F = C × 9/5 + 32` 정확) / my_map / make_counter 클로저 / recursive_sum (base case + recursive case) / timer 데코레이터 (functools.wraps) / LEGB 바이트코드 분석 (LOAD_GLOBAL vs LOAD_FAST vs LOAD_DEREF + UnboundLocalError) / compose + pipe (functools.reduce 패턴) / PyFunctionObject 탐구 (co_varnames/co_argcount/__defaults__/__annotations__/__closure__ 비교) / Call Stack 추적 (inspect.stack + tracemalloc 메모리 측정) / 클로저 cell object 분석 (bad lambda i 캡처 vs good lambda i=i 기본 인수, LOAD_DEREF vs LOAD_FAST 바이트코드 차이).

### p.78 — §12 정리 (개념 표 + 바이트코드 매핑)
🟢 PASS — 8개 개념 (함수의 존재 이유 / def와 return / First-class Object / LEGB Rule / 인자 전달 / 재귀 / 클로저 / 순수 함수) 표.

### p.79-83 — §13 용어 30개
🟢 PASS — 함수 / 매개변수 / 인수 / return / docstring / DRY / First-class Object / 고차 함수 / 람다 / 스코프 / LEGB / 지역 변수 / 전역 변수 / Enclosing Scope / Built-in Scope / global / nonlocal / Pass by Object Reference / 기본값 매개변수 / 재귀 / base case / Call Stack / 클로저 / 순수 함수 / 부작용 / MAKE_FUNCTION / LOAD_FAST / LOAD_GLOBAL / LOAD_DEREF (그리고 1개 더 — TCO).

### p.84-85 — 다음 주 맛보기 (Week 10: 딕셔너리와 세트)
🟢 PASS — 전화번호부 list O(n) vs dict O(1) 동기 부여. 다음 주 학습 항목 (Hash 원리, dict 메커니즘, set in 연산 O(1), Hash Collision, dict comprehension, compact dict Python 3.6+). 참조 링크 4개 (Function definitions, Naming and Binding, functools, dis, PEP 3107).

### p.86 — 참고문헌 [1]~[5]
🟢 PASS — Python 3.14 docs (compound_stmts 8.7 Function definitions, executionmodel 4. Naming and binding), PEP 3107 (Function Annotations, Python 3.0, 2006), PEP 659 (Specializing Adaptive Interpreter, Mark Shannon 2021), CPython source (funcobject.c PyFunctionObject, codeobject.c PyCodeObject, ceval.c CALL/MAKE_FUNCTION). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.07, p.14, p.30, p.36, p.39, p.42, p.43, p.52 등 코드/`실행 결과` 박스 하단 큰 여백 (페이지 브레이크 후 다음 컨텐츠가 새 섹션). 가독성 자체는 문제 없음.

---
**총 86쪽**. BLOCKING 없음. 출판 가능 수준 ✅

---

## 재검수 추가 발견 (2026-05-02)

86쪽 전수 재검토 (PDF 1쪽씩 시각 확인). 기존 발견 모두 유효. 새 이슈:

- **P3** p.16 §03 고급 — "Python 3.5+의 타입 어노테이션(type annotation)과 반환 타입 힌트는 공식 문서의 `->` expression 부분에 해당합니다." 미세 부정확: 함수 어노테이션 문법(`->`, `:`)은 PEP 3107 (Python 3.0, 2006) 도입이고, *타입 힌트*로서 의미 부여는 PEP 484 (Python 3.5, 2014). 본 챕터 참고문헌 [3]도 PEP 3107을 인용함. "Python 3.0+의 함수 어노테이션 문법(PEP 3107) — Python 3.5+에서 PEP 484 타입 힌트로 사용"으로 분리 표기가 더 정확.
- **P3** p.5~p.6 코드 출력 — f-string `f"{num1}은 짝수"`가 "4은 짝수"로 출력. 한국어 조사 일치(받침 유무에 따라 은/는) 미적용. 의도된 학습용 단순 코드라면 OK이나, "4은"이 어색해 보일 수 있어 추후 `{'은' if num%10 in [0,1,3,6,7,8] else '는'}` 같은 한국어 처리는 별도 주제로 분리 가능. 출판 차원에서는 그대로 둬도 무방.
- **P3** p.52 § 클로저 고급 — `compute_sum: 0.029000초` 출력 후 큰 빈 여백 (페이지 절반 이상). 가독성 자체는 문제 없으나 페이지 브레이크 조정 여지.

세 항목 모두 P3 (스타일·미세 정확성). 콘텐츠·코드·출처 인용은 견고. 재빌드 불필요.
