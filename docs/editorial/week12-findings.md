# week12 편집 검수 — 발견 + 수정 기록

> 12주차: 클래스 심화 & 던더 메서드 — 연산자 디스패치 원리
> PDF: 69쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (14섹션)
🟢 PASS — 부제 "연산자 디스패치 원리". `__init__`은 생성자가 아니라 초기화자. `super()`는 부모가 아니라 MRO의 다음 클래스. +, ==, len(), with — 모든 연산자가 던더 메서드 호출. 14개 섹션 모두 4레벨 표기.

### p.03-04 — §01 이번 주 이야기
🟢 PASS — Vector class v1+v2가 `__add__` 호출, len(v1)이 `__len__`, print(v1)이 `__str__`. 핵심 질문 4개 (`__new__` vs `__init__` / `==` vs `is` / super() vs MRO+C3 / with문). Point 클래스 `__add__`/`__eq__`/`__repr__` 미구현 시 TypeError/False/`<__main__.Point object at 0x...>`. 인터프리터의 약속.

### p.04-05 — §02 던더 메서드란 — 인터프리터와의 약속 (초급)
🟢 PASS — 번역기 비유 — `a + b` → `a.__add__(b)`, `len(a)` → `a.__len__()`, `a[0]` → `a.__getitem__(0)`. a + b Python 내부 디스패치 다이어그램 — `type(a)->tp_as_number->nb_add` 슬롯 직접 조회 (속성 dict 거치지 않음). 실패 시 b.`__radd__`(a) 시도, 없으면 TypeError. Box 클래스 `__init__`/`__len__`/`__getitem__`/`__repr__` 구현 시 `len(box)`/`box[2]`/`for item in box` (자동 이터러블) 동작 정확.

### p.06-07 — §02 중급 — 주요 던더 메서드 분류
🟢 PASS — FullDemo 클래스 — 객체 생성 (`__init__`), 문자열 표현 (`__repr__`/`__str__`), 비교 (`__eq__`/`__lt__`/`__le__`), 산술 (`__add__`/`__mul__`), 컨테이너 (`__len__`/`__contains__`), 불리언 (`__bool__`). 결과 — `a + b` FullDemo(30), `a < b` True, `"1" in a` True (str(10)에 "1" 포함).

### p.07-08 — §02 고급 — Reflected Methods (반사 메서드)
🟢 PASS — `a + b`에서 `a.__add__(b)`가 NotImplemented 반환하면 `b.__radd__(a)` 시도. Currency class `__add__` int/float 처리 + Currency 객체 처리, return NotImplemented (모르겠다, 오른쪽한테 물어봐). `__radd__` 정의로 `50 + c` (int 먼저 → NotImplemented → c.`__radd__`(50)) → Currency(150). sum([Currency(10), Currency(20), Currency(30)]) — sum은 0 + item 시작 → `__radd__` 호출. NotImplemented (반환값 — 다른 쪽에 물어봐) vs NotImplementedError (예외 — 서브클래스가 구현해야 함) 구분 정확.

### p.08 — §02 전공자 Part A — CPython 던더 메서드 조회 방식
🟢 PASS — CPython은 던더 메서드를 일반 속성 조회 (`getattr`)로 찾지 않고, 타입 객체의 C 함수 포인터 슬롯 (`tp_*` 필드)을 직접 참조. `len()` → `type(s).__len__` → tp_as_sequence->sq_length 캐싱. 인스턴스 딕셔너리는 조회 안 함. `s.__len__ = lambda: 99` 인스턴스에 직접 붙여도 len()은 무시 — 따라서 던더 메서드는 클래스에 정의해야 함. 정확.

### p.09 — Part B functools.total_ordering
🟢 PASS — 6개 비교 메서드 (lt/le/gt/ge/eq/ne) 중 `__eq__`와 하나만 구현하면 나머지 자동 생성. Temperature 예시 — `__eq__` + `__lt__` 구현 → total_ordering이 `__gt__`/`__le__` 자동 생성. sorted([Temperature(30), 10, 20]) 정상 동작.

### p.09-10 — §03 __new__ vs __init__ (초급)
🟢 PASS — 공장과 인테리어 비유 — `__new__` 공장에서 빈 집의 뼈대 (콘크리트 구조) / `__init__` 완성된 뼈대 안에 가구 배치 + 색 칠함. 생성자 = `__new__`, 초기화자 = `__init__`. Dog class — `__init__` 시점에서 self는 이미 만들어진 빈 Dog 인스턴스 (`__new__`가 메모리 할당). `Dog("바둑이", "진돗개")` 호출 시 `Dog.__new__(Dog, ...)` → `Dog.__init__(새객체, ...)` 순. 대부분 `__new__` 직접 구현 안 해도 됨 (`object.__new__` 기본).

### p.10-11 — §03 중급 — `__new__` 오버라이드해야 할 때
🟢 PASS — 싱글톤 패턴 — `_instance` 클래스 변수, `__new__` 첫 호출 시 super().`__new__`(cls)로 인스턴스 생성, 이후 항상 같은 객체 반환. `a is b` True, `id(a) == id(b)` 같은 주소. 불변 타입 (int/str/tuple) 서브클래싱 시 `__new__` 필수 — `__init__`에서 값 변경 불가, `__new__`에서 값 설정. PositiveInt(int) — `__new__(cls, value)`에서 `value <= 0` 검증 후 `super().__new__(cls, value)`. p + 3 → 8 (int처럼 동작).

### p.11-12 — §03 고급 — __new__와 __init__의 인자 전달 규칙
🟢 PASS — Verbose class — `__new__`에 *args/**kwargs / `__init__`에 같은 인자. obj = Verbose(42, label="test") → `__new__(cls=Verbose, args=(42,), kwargs={'label': 'test'})` → `__init__(self=0x..., value=42, label=test)`. `__new__`와 `__init__`은 같은 인자를 받음. `__new__`가 현재 클래스와 다른 타입의 인스턴스를 반환하면 `__init__`은 호출되지 않음. Factory 예시 — `__new__`가 int/str 반환 시 `__init__` 출력 없음 / Factory 반환 시 `__init__` 호출됨.

### p.12-13 — §03 전공자 Part A — CPython 객체 생성 전체 흐름 + Part B
🟢 PASS — Point(1, 2) 호출 시 CPython 내부 흐름 — type.`__call__`(Point, 1, 2) 실행 → a. `Point.__new__`(Point, 1, 2) → instance 반환 → b. isinstance(instance, Point) 확인 → c. `instance.__init__`(1, 2) 호출 (조건부) → d. instance 반환. 슈도코드 정확. 바이트코드 — CALL_INTRINSIC_1 또는 CALL → type.`__call__`로 연결. Part B — `__init_subclass__` (PEP 487, Python 3.6) — 메타클래스 없이 "서브클래스 등록" 같은 간단한 훅 구현. 서브클래스 만들어질 때 자동 호출. 정확.

### p.13-14 — Plugin 예시 + §04 시작
🟢 PASS — Plugin._registry, `__init_subclass__(cls, plugin_name=None, **kwargs)` super 호출 + 등록. AudioPlugin(Plugin, plugin_name="audio") / VideoPlugin(Plugin, plugin_name="video"). Plugin._registry["audio"]() 동적 사용 정확.

### p.14-15 — §04 __repr__ vs __str__ (초급)
🟢 PASS — 명함과 자기소개 비유 — `__repr__` 개발자용 명함 "Point(x=3, y=4)" eval로 복원 가능. `__str__` 사용자용 자기소개 "(3, 4)". Python 원칙 — repr()은 eval()로 복원 가능해야. Point 예시 — repr(p) Point(3, 4) / str(p) (3, 4) / print(p) (3, 4) / f"{p}" (3, 4) / f"{p!r}" Point(3, 4) (`!r`은 repr 강제). 컨테이너 안에서는 항상 repr (리스트 출력 시). `__str__` 없으면 Python은 `__repr__`로 대체. 반대는 아님 — `__repr__`은 항상 구현해야.

### p.15 — §04 중급 — `__format__` — f-string의 커스터마이즈
🟢 PASS — Money class — `__init__(amount, currency="KRW")` / `__repr__` Money(amount, currency!r) / `__str__` "{amount:,} {currency}" / `__format__(spec)` — "usd" → "${amount/1300:,.2f}" / "plain" → "{amount}" / 기본은 str(self). m = Money(130000) → str(m) "130,000 KRW" / f"{m:usd}" "$100.00" / f"{m:plain}" "130000". 정확.

### p.16-17 — §04 고급 — `__repr__`의 계약 + eval(repr(x)) == x
🟢 PASS — datetime.date(2024, 1, 15) repr "datetime.date(2024, 1, 15)" / eval(repr(d)) == d True. Color class repr "Color(255, 0, 0)" + `__eq__`. eval(repr(c))는 Color 클래스가 네임스페이스에 있을 때만 동작. 실무에서는 항상 가능하지 않을 수 있지만 "eval 가능한 형식"이 관례. 시스템 자원 (파일 핸들, 소켓, DB 연결)은 복원 불가 — `<...>` 형식 사용 (예: `<open file 'data.txt', mode 'r'>`).

### p.17-18 — §04 전공자 Part A — reprlib (재귀 구조 안전한 repr) + Part B logging
🟢 PASS — reprlib.repr() — 자기 참조 리스트 안전 출력 + 길이/깊이 제한. `r.maxlist = 3` / `r.maxstring = 10` 커스터마이즈. ApiRequest class — `__repr__`에서 민감 정보 마스킹 (Authorization/api-key는 "***"). logging.debug 호출 시 마스킹된 정확. 보안 patterns 좋음.

### p.18-19 — §05 __eq__ & __hash__ — 쌍둥이 계약 (초급)
🟢 PASS — 비유: 집 주소(is)와 생김새(==). 쌍둥이는 생김새(==)는 같지만 같은 사람(is)은 아님. a, b 값 같지만 다른 객체 → `a == b` True, `a is b` False. c = a → `a is c` True. 기본적으로 클래스의 `==`는 `is`와 같음 (`__eq__` 정의 안 하면 동일성 비교). BetterPoint `__eq__` 구현 시 값 비교, NotImplemented 반환 패턴 (다른 타입 비교).

### p.19-20 — §05 중급 — `__eq__` 오버라이드 시 `__hash__`가 None이 되는 이유
🟢 PASS — 쌍둥이 계약 — A == B이면 hash(A) == hash(B). 깨지면 딕셔너리/세트 망가짐. Python은 `__eq__` 오버라이드하면 `__hash__`를 None으로 설정 — "안전하게 해시 불가 타입으로". Point class — `__eq__` 정의 + `__hash__` 정의 안 함 → Python이 None으로 설정 → hash(p) TypeError "unhashable type: 'Point'". HashablePoint — `__eq__` + `__hash__` (`hash((self.x, self.y))` tuple 활용) 둘 다 구현 → set/dict 사용 가능. 같은 좌표 두 객체 → set 길이 1.

### p.20-21 — §05 고급 — 해시 충돌과 딕셔너리 성능
🟢 PASS — BadHash `__hash__` return 1 (모두 같은 해시) → 딕셔너리 O(n)으로 느려짐. GoodHash `__hash__` return hash((self.a, self.b, self.c)) (튜플은 각 원소 혼합). str/bytes hash() SipHash-2-4 (Python 3.4+), SipHash-1-3 (Python 3.12+). int/tuple은 별도 해시 함수 (int는 자기 자신, tuple은 xxHash 기반). 해시 시드는 매 실행마다 바뀜 (hash randomization). PYTHONHASHSEED=0으로 고정 가능 (테스트용). 가변 객체는 해시 불가로 두는 게 맞음 — 값이 바뀌면 해시도 바뀌어야 하는데, 딕셔너리는 키의 해시가 변하면 찾을 수 없음 (리스트가 unhashable인 이유).

### p.21-22 — §05 전공자 Part A + Part B
🟢 PASS — Part A Python 딕셔너리의 해시 테이블 구현 — Python 3.7+ 삽입 순서 보장. compact 구조 — 인덱스 배열 (각 슬롯이 엔트리 배열의 인덱스 저장) + 엔트리 배열 (`(hash, key, value)` 튜플 삽입 순서). 충돌 해결: open addressing + perturbation. d = {} 8개 슬롯 시작, 부하 2/3 초과 시 리사이징 (대략 2배씩, 삭제가 많으면 4배 성장도 가능). Part B — `__eq__`와 None 비교 관례. None과 비교 시 항상 is/is not 사용 (==를 쓰면 `__eq__`가 호출되어 의도치 않은 동작 가능). Tricky class `__eq__` return True (모든 것과 같다고 주장) → t == None True (버그) / t is None False (올바름). PEP 8 명시 인용.

### p.22-23 — §06 MRO & super() (초급)
🟢 PASS — 상속 = "물려받기". 강아지도 동물이다 비유. Animal 부모 class (`__init__`, breathe, eat) → Dog/Cat 자식. Dog는 breathe/eat 상속받음 + bark 추가. isinstance(dog, Dog)/isinstance(dog, Animal) 둘 다 True.

### p.23-24 — §06 중급 — super()는 부모가 아니라 "다음 차례"
🟢 PASS — 회사 결재선 비유. A에게 결재 요청했는데 A가 "나는 모르겠어, 위에 B한테 물어봐" → super(). A/B/C/D 다중 상속 D(B, C). D.mro() → [D, B, C, A, object]. D().hello() — D.hello → B.hello (super는 C로 위임, A 아님!) → C.hello (super는 A로) → A.hello. 다중 상속에서 super()가 부모(A)가 아닌 "MRO 다음(C)"으로 위임 — 정확.

### p.25 — §06 super()가 중요한 이유: 다이아몬드 문제 + super().`__init__`() 누락 함정
🟢 PASS — D → B, C → A 다이아몬드 구조에서 A.hello가 두 번 호출되는 문제를 MRO + super()가 해결. Dog가 `__init__` 오버라이드 후 super().`__init__`(name) 안 부르면 self.name 설정 안 됨 → AttributeError. 올바른 방법은 super().`__init__`(name) 명시적 호출. Mixin pattern — Base/Mixin1/Mixin2 (`**kwargs` 패턴) → Combined(Mixin1, Mixin2) → super().`__init__`(a=a, b=b) → Mixin1과 Mixin2 둘 다 호출.

### p.26-27 — §06 고급 — C3 선형화 알고리즘 + 불가능한 MRO
🟢 PASS — MRO C3 알고리즘 규칙 — 1. 자식 클래스는 부모보다 먼저 / 2. 부모 클래스의 순서 유지 / 3. 위 규칙이 충돌하면 TypeError. C3 수동 계산 예시 (D(B, C): B는 A 상속, C는 A 상속) — L[D] = D + merge(L[B], L[C], [B, C]) → 결과: D → B → C → A → object. 불가능한 MRO 예시 — A(X, Y), B(Y, X) 후 C(A, B): X와 Y의 순서가 A, B에서 충돌 → TypeError "Cannot create a consistent method resolution order". 정확.

### p.27-28 — §06 전공자 Part A — super()의 내부 구현 + Part B Mixin
🟢 PASS — super() 두 인자 형식 — super() (셀 변수에서 `__class__`와 self를 자동으로 가져옴, Python 3) / super(cls, obj) (명시적 지정). 컴파일러가 `__class__` 셀 변수를 클로저로 자동 추가. inspect.getclosurevars 검증. Part B 다중 상속이 위험한가 — 다이아몬드 문제, 이름 충돌, 복잡한 MRO. 그래서 Java는 다중 상속 금지, C++ virtual inheritance는 복잡한 메커니즘. Python 절충 — 다중 상속 허용하되, "동작은 사용 패턴"인 관례적 정합. 믹스인 (Mixin) — 단일 기능만 제공하는 작은 클래스. 인스턴스화하지 않고, 다른 클래스의 "능력"을 추가하는 용도. JSONMixin/LogMixin/ValidationMixin 예시 + User class 다중 상속. Django View 시스템 (LoginRequiredMixin, PermissionRequiredMixin) 실전 예. MRO: User → JSONMixin → LogMixin → ValidationMixin → object 정확.

### p.29 — §07 __enter__ / __exit__ — with문의 실제 동작 (초급)
🟢 PASS — 비서 비유. with 블록 진입 시 `__enter__` 호출, 나갈 때 `__exit__` 호출 (예외 발생해도). open() 없이 close()는 예외 시 호출 안 됨. with문의 내부 번역 — `mgr = open()` → `f = mgr.__enter__()` (반환값을 as 변수에) → try: ... finally: `mgr.__exit__(None, None, None)`. 정확.

### p.30 — §07 as 변수 + 직접 컨텍스트 매니저 구현
🟢 PASS — as 변수는 `__enter__`의 반환값. open()은 파일 객체의 `__enter__`가 self 반환. `__enter__()`가 None 반환하면 as 생략 가능. Timer class — `__enter__` start = perf_counter, return self / `__exit__(exc_type, exc_val, exc_tb)` elapsed 출력, return False (예외 억제 안 함). 3 인자 명시 — exc_type/exc_val/exc_tb 정확.

### p.31 — §07 contextmanager 데코레이터 + 고급 __exit__ 예외 처리
🟢 PASS — `@contextmanager` + yield 패턴 — yield 전 = `__enter__`, yield 후 = `__exit__`. timer() 함수 try/finally 패턴. DatabaseTransaction class — `__enter__` BEGIN, `__exit__` exc_type None이면 COMMIT, 아니면 ROLLBACK. return False는 예외 그대로 전파.

### p.32-33 — §07 사용 예 + contextlib.suppress + Part A 바이트코드
🟢 PASS — 성공 케이스 (BEGIN → 쿼리 → COMMIT) / 실패 케이스 (BEGIN → 쿼리 → ROLLBACK 예외 ValueError + 예외 처리 완료). contextlib.suppress(FileNotFoundError) — 파일 없어도 조용히 넘어감. Part A — Python 3.11에서 BEFORE_WITH 도입 (SETUP_WITH 대체), 3.12/3.13 사용. Python 3.14에서 BEFORE_WITH 제거 → LOAD_SPECIAL로 대체 — 정확. Python 3.12 바이트코드 — CALL → BEFORE_WITH (`__enter__` 호출, `__exit__`를 스택에 저장) → STORE_FAST 0 (f) → 블록 → `__exit__`(None, None, None). 예외 시 zero-cost exception handling (Python 3.11+) — 예외 테이블 기반.

### p.34 — Part B ExitStack + §08 시작
🟢 PASS — ExitStack — 개수가 런타임에 결정되는 컨텍스트 관리자들. files = [stack.enter_context(open(f, "w")) for f in filenames]. 블록 종료 시 c.txt → b.txt → a.txt 역순으로 닫힘. 조건부 컨텍스트 매니저 (use_lock=True면 lock 사용). 예외처리 — try/except/else/finally. 비행기 블랙박스 비유 — try 정상 비행 / except 사고 처리 / else 정상 착륙 후 / finally 항상 기록.

### p.35 — §08 try/except/else/finally 예시
🟢 PASS — divide(a, b) — try: a/b / except ZeroDivisionError + except TypeError as e / else (예외 없을 때) / finally (항상). divide(10, 2) → 성공 + 항상 실행됨. divide(10, 0) → 0으로 나눌 수 없습니다 + 항상 실행됨.

### p.36 — §08 except Exception 함정
🟢 PASS — `except:` (모든 예외 무시 — KeyboardInterrupt/SystemExit도 잡힘 — 나쁨). `except Exception:` (오류 삼킴 — 어디서 뭐가 잘못됐는지 모름). 좋은 패턴 — `except ValueError:` (구체적). 예외 계층 BaseException → SystemExit/KeyboardInterrupt/Exception → ValueError/TypeError/AttributeError/KeyError/IndexError/RuntimeError. 정확.

### p.37-38 — §08 중급 — 커스텀 예외 + raise from
🟢 PASS — AppError(Exception) 베이스 / ValidationError(AppError) field+message 저장 / DatabaseError(AppError) query+original_error. raise ValidationError("age", "음수는 허용되지 않습니다"). raise from — `raise RuntimeError(...) from e` 원인 예외를 연결, 디버깅 시 체인이 보임. e.`__cause__`에 원인 저장.

### p.38-39 — §08 고급 — finally의 반환값 함정 + Part A 바이트코드
🟢 PASS — tricky() — try return "try에서 반환" / finally return "finally에서 반환" → "finally에서 반환" (try의 return이 무시됨). 예외 같은 방식 억제 — suppress_exception() try raise ValueError / finally return → ValueError 사라짐 (대부분 의도치 않은 버그). finally에서 return/break/continue 쓰지 마세요 — finally는 정리(close, rollback, log) 용도. 올바른 finally 사용 패턴 — safe_read(filepath) f = None / try: f = open / except / finally: if f: f.close() (반환값/예외 영향 없음). Part A 예외 처리 바이트코드 — handle() try/except 컴파일 → PUSH_EXC_INFO, POP_EXCEPT 예외 테이블 기반. Python 3.11+ zero-cost exception handling — 예외 발생 안 하면 try 블록에 추가 비용 없음, 예외 발생 시에만 테이블 참조하여 except 블록으로 점프.

### p.39-40 — Part B ExceptionGroup (Python 3.11+) + §09 시작
🟢 PASS — Python 3.11+ — 여러 예외를 동시에 발생/처리. async with TaskGroup() as tg: tg.create_task(failing_task(1)) + tg.create_task(failing_task(2)). except* ValueError as eg: ExceptionGroup으로 여러 예외를 한 번에 처리. asyncio.run(main()). PEP 654 정확. AI와 OOP — Anthropic Python SDK MessageResponse class 개념 코드 — `__init__`/`__repr__`/`__iter__`/`__len__`/`__getitem__`. 실제 사용 — `response[0].text` (`__getitem__`) / `for block in response` (`__iter__`) / `len(response)` (`__len__`).

### p.41-42 — §09 컨텍스트 매니저와 API 연결 관리 + AI가 OOP를 설계하는 패턴
🟢 PASS — AISession class — `__init__(api_key, model="claude-opus-4-6")` / `__enter__` 세션 시작 + return self / chat(message) / `__exit__(exc_type, exc_val, exc_tb)` 세션 종료. AI(LLM)는 클래스를 설계할 때 5가지 휴리스틱 — 1. 데이터 + 행동 함께 → 클래스 / 2. 같은 타입 객체 여러 개 생성 → 클래스 / 3. `__repr__` 항상 (디버깅) / 4. 비교 가능 → `__eq__` / 5. 자원 관리 → `__enter__`/`__exit__`.

### p.43-46 — §10 실습: Vector 클래스 완전히 만들기
🟢 PASS — 실습 A 기본 구조 — `__repr__`/`__str__`. 실습 B 연산자 구현 — `__add__`/`__sub__`/`__mul__`/`__rmul__` (`3 * v` 동작) / `__abs__` (math.sqrt) / `__bool__` (영벡터 검사) / `__eq__` / `__hash__` (튜플 활용). 결과 v1+v2 Vector(4, 6) / v1*2 Vector(6, 8) / 3*v1 Vector(9, 12) / abs(v1) 5.0 / bool(Vector(0,0)) False. 실습 C 컨텍스트 매니저로 연산 추적 — Vector.`__add__`를 tracked_add로 임시 교체, ops dict에 카운트 누적, finally에서 원래 메서드 복원. 결과: 10.63, 연산 횟수 {add: 1, mul: 1, abs: 1}.

### p.47-58 — §11 연습문제 13개
🟢 PASS — 초급 4문제 (1: print/repr/f-string에서 어떤 던더 호출되는지 / 2: `__eq__`만 구현 시 hash 시도 → TypeError / 3: D MRO 예측 / 4: with → try/finally 변환). 중급 4문제 (5: BoundedList 클래스 `__len__`/`__getitem__`/`__contains__`/`__repr__` / 6: D().method() 결과 "D→B→C→A" — MRO super 체인 / 7: contextmanager + 클래스 두 가지 timer / 8: try/except/else/finally 각 블록 실행 조건). 고급 2문제 (9: ImmutablePoint `__new__`에서 object.`__setattr__` 직접 설정 / `__setattr__` AttributeError / `__hash__` / 10: Temperature 6개 비교 메서드 vs functools.total_ordering 비교 — 핵심: total_ordering은 편리하지만 자동 생성된 메서드는 2번의 비교를 수행하므로 성능이 중요하면 직접 구현이 낫다 + NotImplemented 반환해야 Python이 역방향 비교 시도 가능). 전공자 3문제 (11: `s.__len__ = lambda: 99`가 len(s)에 영향 없는 이유 — type 슬롯 직접 참조 / 12: C3 선형화 알고리즘 직접 구현 / 13: `__init_subclass__`로 플러그인 레지스트리 시스템 — Serializer + format_name 키워드).

### p.59-61 — §12 이번 주 정리
🟢 PASS — 던더 메서드 표 (`__new__`/`__init__`/`__repr__`/`__str__`/`__eq__`/`__hash__`/`__add__`+`__radd__`/`__call__`/`__getattr__`/`__getitem__`/`__enter__`/`__exit__`) — 호출 시점, 반환값, 주의사항 정확. 핵심 통찰 — Python의 내장 연산자 (+, ==, len(), with, for)는 전부 던더 메서드. super()는 부모가 아닌 MRO의 다음 클래스에 위임 — 다중 상속이 안전한 이유. 이번 주에 다루지 않은 주요 던더 메서드 — `__getattr__` (FlexibleConfig 예시) / `__call__` (Multiplier 예시 — 인스턴스를 함수처럼) / 컨테이너 프로토콜 (`__getitem__`/`__len__`/`__contains__` — Deck 클래스 예시).

### p.62-67 — §13 용어 사전 32개
🟢 PASS — Dunder Method / Magic Method / `__new__` / `__init__` / `__repr__` / `__str__` / `__format__` / `__eq__` / `__hash__` / Identity / Equality / NotImplemented / Reflected Method / MRO / C3 Linearization / super() / Diamond Problem / Mixin / Context Manager / `__enter__` / `__exit__` / contextmanager / ExitStack / try-except-else-finally / raise from / BaseException / total_ordering / Singleton Pattern / `__init_subclass__` / Hash Collision / Hash Randomization / tp_slots.

### p.68 — 다음 주 맛보기 — 13주차: 데코레이터
🟢 PASS — timer 데코레이터 + `@wraps` 예시. `@timer` def slow_sum(n) → slow_sum = timer(slow_sum). 13주차 주제 — 클로저와 데코레이터, functools.wraps, 인자를 받는 데코레이터, 클래스 데코레이터, 데코레이터 스택, 실전 패턴 (캐싱, 로깅, 인증, 재시도).

### p.69 — 참고문헌 [1]~[6]
🟢 PASS — Python 3.14 Language Reference — 3. Data Model: Special method names (모든 던더 메서드 명세), PEP 487 (Martin Teichmann, Simpler customisation of class creation, Python 3.6, `__init_subclass__` 메타클래스 없이 서브클래스 등록), Samuele Pedroni — Python 2.3 Method Resolution Order — C3 Linearization (Dylan 언어에서 가져옴, monotonicity / consistency / local precedence order 보장), PEP 343 (Guido van Rossum, The "with" statement, Python 2.5, `__enter__`/`__exit__` 컨텍스트 매니저 프로토콜), Python 3.14 Library Reference — functools (`@total_ordering`/`@cache`/`@lru_cache`/partial/wraps), CPython source — Objects/typeobject.c (type.`__call__`/slot_wrappers/`_PyType_Lookup`)/Python/ceval.c (BINARY_OP/COMPARE_OP/던더 메서드 C 슬롯 디스패치, type 메타클래스 호출 흐름의 1차 출처). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.42 §09 마지막 부분 (3-5번 항목)이 페이지 상단에 압축되어 있고 하단에 큰 여백 — 페이지 브레이크 후 다음 컨텐츠 시작 전. 가독성 자체는 문제 없음.
- p.43 §10 실습 제목만 있고 본문이 다음 페이지로 넘어감. 페이지 브레이크 정상.
- p.49 BoundedList 문제 정답 박스 안에 BoundedList add 메서드가 명확히 표시됨. 정확.

---
**총 69쪽**. BLOCKING 없음. 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)

재검수 결과 새 발견 없음
