# week13 편집 검수 — 발견 + 수정 기록

> 13주차: 클로저 & 데코레이터 — 함수를 감싸는 함수
> PDF: 57쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (14섹션)
🟢 PASS — 부제 "함수를 감싸는 함수". @property/@classmethod/@lru_cache 인용. 14섹션 모두 4레벨 표기.

### p.03-04 — §01 이번 주 이야기, §02 First-Class Function 초급
🟢 PASS — `@login_required` 동기 부여 (로그인 확인 코드 100번 복사 회피). 데코레이터→클로저→First-Class Object 학습 순서 제시. 세 변환(doubled/squared/stringified) 중복 제거 → `transform(numbers, func)` 추상화. lambda + str 함수 객체 그대로 전달 (괄호 없음) 정확.

### p.05-07 — §02 중급(make_multiplier), 고급(First-Class 5조건), 전공자 Part A
🟢 PASS — `say_hello = greet` 함수 복사 아님 (같은 객체 두 이름) — 12주차 이름표 개념 연결. `map(int, ["1","2","3"])`에서 int에 괄호 없는 이유 명료. make_multiplier(3)/make_multiplier(5) 클로저 도입. First-Class Object 5조건 (변수/자료구조/인수/반환값/속성) 정확. `greet.version = "1.0"` 함수 속성. 고차 함수 (map/filter/sorted/functools.reduce). Part A — `add.__code__`/`co_varnames`/`co_filename`/`__defaults__`/`__globals__ is globals()` True — PyFunctionObject 구조 (func_code/func_globals/func_closure/func_defaults), MAKE_FUNCTION 바이트코드.

### p.08 — Part B Lambda Calculus + §03 클로저 핵심 비유
🟢 PASS — Lambda Calculus (Alonzo Church 1930s) → LISP(1958) 첫 도입 → Haskell/Scheme/Python 계승. `lambda x: x*2` ↔ `λx.x×2` 표기 정확. 배낭(Backpack) 비유 — 자유 변수를 배낭에 챙겨감. make_counter c1/c2 독립 카운터.

### p.09-10 — §03 초급(make_counter)/중급(nonlocal/UnboundLocalError 함정)
🟢 PASS — c1.count(1→4) c2.count(1) 독립적 cell. nonlocal 없으면 UnboundLocalError 정확 ("x = 0이 함수 안에 있으면 x는 local로 간주, 읽기 전 할당이면 에러"). `f.__closure__` cell tuple, `f.__code__.co_freevars` ('x',) 정확.

### p.11-12 — §03 고급(루프-클로저 함정), 전공자 Part A(Cell)/Part B(클로저 vs 클래스)
🟢 PASS — `for i in range(3): funcs.append(lambda: i)` → [2,2,2] (예상 [0,1,2]). 수정1 `lambda i=i: i` 기본 인수 / 수정2 팩토리 함수. Part A Cell 객체 — outer 로컬 프레임과 inner 함수 객체가 동일한 PyCell 공유, MAKE_CELL (Python 3.11 bpo-43693) 도입 정확. Part B 클로저 카운터(inc/dec/get) vs 클래스 Counter 동일성 — 함수형 프로그래밍에서 상태 캡슐화 도구.

### p.13-16 — §04 데코레이터 기초 — 초급/중급/고급
🟢 PASS — 선물 포장(Gift Wrapping) 비유. `@shout`은 `say_hi = shout(say_hi)`와 완전 동일 (자동 적용). log_call 데코레이터 — `*args, **kwargs` 모든 인수 수용 + `result = func(*args)` + `return result` (return 빠뜨리면 None 반환 함정). timer 데코레이터 (time.perf_counter). 데코레이터 적용 시점 — 정의 시(import 시), 호출 시 아님. Flask `@app.route("/path")` 라우팅 테이블 등록 패턴. `return func` (원본 그대로 반환) — 등록만 하는 데코레이터.

### p.17 — §04 전공자 Part A (CALL 바이트코드) + §05 시작
🟢 PASS — `@decorator def greet()` 바이트코드 — LOAD_NAME decorator / LOAD_CONST <code object greet> / MAKE_FUNCTION 0 / CALL 0 (decorator(greet) 호출) / STORE_NAME greet. 안쪽부터 적용 (A 먼저, B 나중) `@B @A def f()` = `f = B(A(f))` 정확.

### p.18-19 — §05 functools.wraps, 전공자 Part A(WRAPPER_ASSIGNMENTS) + §06 시작
🟢 PASS — `@wraps` 없으면 `add.__name__`이 "wrapper"로, `__doc__`이 None으로 — IDE/디버거 인식 문제. `@wraps(func)`가 `__name__`/`__doc__`/`__qualname__`/`__module__`/`__annotations__`/`__dict__` 복사 + `__wrapped__ = func` 저장. Part A `WRAPPER_ASSIGNMENTS = ('__module__','__name__','__qualname__','__annotations__','__type_params__','__doc__')` (Python 3.14 기준 — `__type_params__`는 PEP 695 [3], Python 3.12+ 포함). `WRAPPER_UPDATES = ('__dict__',)`. `functools.update_wrapper` 호출, `inspect.unwrap()`로 체인 완전 벗기기 가능.

### p.20-22 — §06 매개변수 데코레이터 (3단 중첩)
🟢 PASS — `@repeat(3)` 분해 — 1단 repeat(3) → decorator 반환 / 2단 decorator(greet) → wrapper 반환 / 3단 greet = wrapper. retry 데코레이터 (max_tries/delay/exceptions) 실용 예. 유연 데코레이터 (`@repeat` `@repeat(times=3)` 둘 다 가능) — `_func is not None` 분기. 전공자 Part A — `wrapper.__closure__`에 두 cell (func, times), `wrapper.__code__.co_freevars == ('func', 'times')` 정확. Part B — GoF Decorator Pattern (Java 인터페이스 + 클래스 + 생성자 + 위임 메서드 20+줄) vs Python 클로저 3줄 비교.

### p.23-25 — §07 클래스 기반 데코레이터 (`__call__`), 전공자 Part A (callable 프로토콜) + §08 시작
🟢 PASS — CallCounter 클래스 — `__init__(self, func)` + `wraps(func)(self)` 메타데이터 복사 + `__call__(self, *args, **kwargs)` — 호출 횟수 추적. `greet.call_count` 인스턴스 속성으로 접근. Retry 클래스 — `__init__(max_tries)` + `__call__(func)` → wrapper 반환 (매개변수 클래스 데코레이터). Part A — `tp_call` 슬롯 (C 레벨), `callable(obj)`은 `type(obj).__call__` 존재 확인. 메서드 사용 시 `__get__` 구현해야 descriptor로 바인딩 (문제 12에서 후속). 양파 껍질(Onion) 비유 — 적용 순서 아래→위, 실행 순서 위→아래.

### p.26-28 — §08 데코레이터 스택 — 중급(샌드위치) + 고급(Flask 스타일) + 전공자 Part A(unwrap) + Part B(오버헤드)
🟢 PASS — outer_deco/inner_deco 출력 순서 — OUTER 전 / INNER 전 / [TARGET 실행] / INNER 후 / OUTER 후 (샌드위치 구조). `target = outer_deco(inner_deco(target))`. PREFIX_hello_SUFFIX 패턴 검증. Flask 스타일 routes/auth_required + `@route("/profile")` `@login_required`. Part A `inspect.unwrap(target)` `__wrapped__` 체인. Part B 오버헤드 실측 — 데코 0개 0.024초 / 1개 0.146초 (6.1×) / 3개 0.374초 (15.5×) — 핫 루프에서는 영향 크지만 웹 핸들러/I/O 처리에서는 100ns vs 100ms로 100만 배 차이로 무시 가능.

### p.29-32 — §09 @property — 초급/중급(getter/setter/deleter)/고급(Descriptor 정체)/전공자 Part A+B
🟢 PASS — Temperature class — `@property fahrenheit` → `t.fahrenheit` 괄호 없이 접근, `t.fahrenheit()` TypeError ("float object is not callable") 정확. Circle radius getter/setter/deleter — `@radius.setter` value < 0 검증, ValueError. `c.radius = -1` ValueError, `del c.radius` deleter 호출. setter 없으면 `f.x = 5` AttributeError. 밑줄 관례 (`_radius` 내부, `__radius` Name Mangling → `_Circle__radius`). property 수동 등가 — `radius = property(get_radius, set_radius)`. Part A — Descriptor Protocol — `c.radius` 시 `type(c).__mro__`에서 radius 탐색 → property는 Data Descriptor (`__get__` + `__set__` 모두) → instance dict보다 우선. Part B — `obj.attr` 우선순위 Data Descriptor > instance.__dict__ > Non-data Descriptor > __getattr__.

### p.33-35 — §10 @classmethod vs @staticmethod, 전공자 Part A + §11 시작
🟢 PASS — 세 메서드 유형 (instance_method/class_method/static_method) 비교. Date.from_string/Date.today 대안 생성자 (Alternative Constructor). `cls()` 사용 이유 — 서브클래싱 시 `KoreanDate.from_string()`이 KoreanDate 인스턴스 반환. 결정 기준 표 — self 필요 / cls 필요 / 둘 다 불필요. MathUtils.add/circle_area 예. Part A — classmethod는 `__get__` 구현한 Non-data Descriptor (cls 바인딩), staticmethod는 단순 원본 함수 반환.

### p.35-38 — §11 표준 라이브러리 데코레이터 — lru_cache/cache/singledispatch/contextmanager/partial/dataclass
🟢 PASS — lru_cache — fib(30) 캐시 없이 ~269만 호출(2*fib(31)-1≈2,692,537) vs 캐시 있을 때 31번. CacheInfo(hits=28, misses=31, maxsize=None, currsize=31) 정확. 인수 hashable 제약 (12주차 `__hash__` 연결). functools.cache (Python 3.9+) = lru_cache(maxsize=None). singledispatch — `@process.register(int/str/list)` 첫 인수 타입별 분기. multipledispatch/singledispatchmethod 언급. contextlib.contextmanager — yield 기준 with 블록 실행, yield 앞 = `__enter__` 뒤 = `__exit__`. functools.partial(power, exponent=2) 인수 고정. dataclass(Point) — `__init__`/`__repr__`/`__eq__` 자동 생성, label 기본값. 클래스를 인수로 받는 데코레이터.

### p.39 — §11 전공자 Part A(lru_cache C 구현) + Part B(Memoization/DP) + §12 시작
🟢 PASS — lru_cache Python 3.5+ C 구현 (`_functools_lruobject`). functools.cache는 3.9+에서 추가, maxsize=None인 lru_cache와 동일. 내부적으로 해시 테이블 + 이중 연결 리스트, 캐시 히트 시 LRU 리스트 앞으로 이동(O(1)), maxsize 초과 시 가장 오래된 항목 제거. 스레드 안전(C 레벨 잠금). Part B — Top-Down DP 자동화 — 재귀 호출 결과 캐시. fib(n) 캐시 없이 O(2^n), 캐시 시 O(n). 공간 O(n).

### p.39-41 — §12 AI 데코레이터 활용 — FastAPI/PyTorch/LangChain
🟢 PASS — FastAPI `@app.get("/users/{user_id}")` async def + 타입 힌트 자동 검증/문서화. PyTorch `@torch.no_grad()` — context manager 겸 decorator (그래디언트 비활성화). LangChain 스타일 `@tool` 도구 등록 (name/description/function 메타데이터). AI는 인터넷의 수백만 Python 파일에서 이 패턴 학습 → 검증은 독자 책임.

### p.41-44 — §13 실습(timer/simple_cache/validate_positive 직접 구현) + 연습문제 1~5
🟢 PASS — 실습 — timer/simple_cache/validate_positive 클로저 캐시 (wrapper.cache 외부 접근). `@timer @simple_cache def fibonacci(n)` 스택 적용. 연습 — 1.make_multiplier 클로저 / 2.@greet 데코레이터 (시작/끝 출력) / 3.@property age 검증 (0~150 범위, ValueError) / 4.루프-클로저 [4,4,4,4,4] 버그 + 두 수정 (기본 인수 i=i / 팩토리). / 5.@limit(n) 매개변수 데코레이터 (RuntimeError).

### p.45-48 — 연습문제 6~10
🟢 PASS — 6.@classmethod from_square 대안 생성자. 7.@staticmethod is_palindrome/word_count/capitalize_words. 8.클래스 기반 CallHistory (history list, args/kwargs/result/timestamp 기록). 9.스택 순서 분석 — `@deco_a @deco_b def hello()` → A-전/B-전/[hello]/B-후/A-후 (deco_b 안쪽 먼저 감싸고, deco_a가 그 위에 감쌈). 10.@memoize 직접 구현 (cache_clear/cache_info 외부 노출).

### p.49-51 — 연습문제 11~13 (전공자)
🟢 PASS — 11.outer(3,4) → inner의 `__closure__` 3개 cell (x=3, y=4, z=7), `co_freevars == ('x','y','z')`, f() = 3*4+7 = 19. 12.클래스 기반 데코레이터를 메서드에 사용 시 self 미전달 문제 → `__get__(obj, objtype)` 구현 + `types.MethodType(self, obj)` 바인딩. 13.MyProperty descriptor 재구현 — `__get__`/`__set__`/`__delete__` + `setter` 메서드 (체이닝). Temperature(c=100) → t.celsius 100 / t.fahrenheit 212.0 / t.celsius=0 / t.fahrenheit 32.0.

### p.52-55 — §14 요약/용어집 32개
🟢 PASS — 핵심 개념 8개 표 (First-Class Function/클로저/데코레이터/매개변수 데코레이터/@property/@classmethod/@staticmethod/@lru_cache). 용어 32개 — First-Class Object/Higher-Order Function/클로저/자유 변수/Cell 객체/nonlocal/데코레이터/Wrapper/@wraps/__wrapped__/매개변수 데코레이터/클래스 기반 데코레이터/데코레이터 스택/@property/getter/setter/deleter/@classmethod/@staticmethod/대안 생성자/lru_cache/Memoization/singledispatch/@dataclass/Descriptor/Data Descriptor/Non-data Descriptor/PyFunctionObject/MAKE_FUNCTION/Lambda Calculus/Name Mangling/inspect.unwrap. 정의 정확.

### p.56 — 다음 주 미리보기 (Week 14: 타입 힌트 & 메타클래스)
🟢 PASS — 14주차 학습 항목 (Type Hints/typing/mypy/Generic/TypeVar/메타클래스/`__init_subclass__`/`__class_getitem__`/ABC). 예고 질문 "class MyMeta(type):은 어떻게 동작하는가?".

### p.57 — 참고문헌 [1]~[6]
🟢 PASS — Python 3.14 docs (compound_stmts function-definitions, library functools `@wraps/__wrapped__/@cache/@lru_cache/@total_ordering/partial`, executionmodel naming and binding, functions @property/classmethod/staticmethod), Alonzo Church 1936 ("An Unsolvable Problem of Elementary Number Theory" American Journal of Mathematics Vol.58 No.2), CPython source (Objects/funcobject.c PyFunctionObject, Objects/cellobject.c PyCellObject, Python/ceval.c MAKE_CELL/LOAD_DEREF/STORE_DEREF, bpo-43693 Python 3.11 MAKE_CELL 도입). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.07, p.10, p.16, p.18, p.20, p.22, p.24, p.28, p.32, p.38, p.45, p.46, p.51, p.56 등 박스 하단 큰 여백 (페이지 브레이크). 가독성 자체는 문제 없음.

---
**총 57쪽**. BLOCKING 없음. 출판 가능 수준 ✅
