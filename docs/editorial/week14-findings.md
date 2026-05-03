# week14 편집 검수 — 발견 + 수정 기록

> 14주차: 타입 힌트 & Protocol — 왜 "힌트"인가
> PDF: 53쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (12섹션)
🟢 PASS — 부제 "왜 힌트인가". Python 동적 타입 + 런타임 무시되는 타입 힌트 / Protocol/Generic/ABC/dataclass 학습 명시. 12섹션 모두 4레벨 표기.

### p.03 — §01 이번 주 이야기
🟢 PASS — `def process(data, config, mode)` 타입 모호 → `data: list[dict[str, int]], config: dict[str, str], mode: str ) -> list[int]` 명시. "힌트(hint)" 강조 — Python 강제 안 함. 학습 목표 (`__annotations__` 저장 / 도구 활용 / 구조적 서브타이핑).

### p.04 — §02 타입 힌트는 왜 "힌트"인가 — 초급
🟢 PASS — 요리 레시피 비유 ("달걀 2개 권장"). `def greet(name: str) -> str` + `greet(42)` → "안녕, 42" (런타임 무시). 가장 흔한 오해 — "타입이 강제된다 → 아님, mypy 같은 별도 도구". 세 가지 이유 — 문서화 / IDE 지원 / 버그 사전 탐지.

### p.05-06 — §02 중급(`__annotations__`/변수 타입 힌트), 고급(PEP 역사)
🟢 PASS — `add.__annotations__` = `{'a': <class 'int'>, 'b': <class 'int'>, 'return': <class 'int'>}` 정확. `class User: name: str / age: int` → `User.__annotations__`. 변수 어노테이션 (`name: str = "철수"` PEP 526). PEP 진화 표 — PEP 3107 (Python 3.0, 2006) 함수 어노테이션 / PEP 484 (Python 3.5, 2015) typing + 표준화 / PEP 526 (Python 3.6, 2016) 변수 어노테이션 / PEP 585 (Python 3.9, 2020) `list[int]` / PEP 604 (Python 3.10, 2021) `int | str` / PEP 695 (Python 3.12, 2023) `type X = ...` — 모두 정확한 PEP 번호와 도입 연도/버전.

### p.07 — §02 전공자 Part A(`__annotations__` 메커니즘) + Part B(타입 이론) + §03 시작
🟢 PASS — Part A `def f(x: int):` 컴파일 시 `__annotations__` 딕셔너리에 저장 정확. Python 3.14에서 PEP 649 (DEFERRED EVALUATION OF ANNOTATIONS) — lazy evaluation, PEP 749 도입 [7], `typing.get_type_hints(f)` / `from __future__ import annotations` (PEP 563) 정확. Part B 정적 vs 동적 vs 점진적 타입 — Jeremy Siek 2006년 논문 "Gradual Typing for Functional Languages" [8] + Guido PEP 484 채택. 주소 체계 비유.

### p.07-08 — §03 타입 힌트 문법 총정리 — 초급/중급
🟢 PASS — 기본 (greet/add/average), 변수 (name/age/is_student/height). `-> None` 반환값 없는 함수. 컬렉션 (Python 3.9+ PEP 585 — `list[int]`/`tuple[str, ...]`/`dict[str, int]`/`set[int]`) 정확.

### p.09-10 — §03 중급(중첩/Optional/Union), 고급(Any/Type Narrowing)
🟢 PASS — `matrix: list[list[int]]` / `users: dict[str, dict[str, int]]`. `Optional[X] = X | None` (find_user 정확). `Union[str, list[str]]` vs `str | list[str]` (PEP 604, Python 3.10+). "Optional은 선택적 매개변수 아님" 함정 정확 (값이 X 또는 None일 수 있다는 뜻). `isinstance` Type Guard — `if isinstance(x, int): return x*2` mypy가 int로 좁힘 (Type Narrowing). Any 남용 주의 (object 추천).

### p.11-12 — §03 전공자 Part A(`__class_getitem__`), Part B(Variance) + §04 시작
🟢 PASS — `list[int]` → `list.__class_getitem__(int)` 호출 → `types.GenericAlias` 반환. `alias.__origin__` = list, `alias.__args__` = (int,). Python 3.9 PEP 585 직접 구현 (메커니즘은 3.7 PEP 560 도입). `list[int]() == []` True 정확. Part B Variance — list[Dog]은 list[Animal]이 아니다 (Mutable container is Invariant) — Dog 리스트에 Cat을 추가하면 안 됨. Sequence[Dog] <: Sequence[Animal] (covariant). 함수 매개변수 Callable 반변 — Liskov 1987 [10]. 택배 상자 빈 라벨 비유.

### p.12-13 — §04 TypeVar — 중급(first/with bound/constraints)
🟢 PASS — `T = TypeVar('T') / def first(items: list[T]) -> T`. T가 호출 시 결정 (int/str/float). `TypeVar('T', bound=SupportsFloat)` / `TypeVar('Number', int, float)` constraints. 타입 변수 (Type Variable).

### p.14-15 — §04 고급(Generic Stack), 전공자 Part A(`__orig_bases__`) + Part B(System F)
🟢 PASS — `class Stack(Generic[T])` + push/pop/peek/`__len__`/`__repr__`. `int_stack: Stack[int] = Stack()`. mypy `int_stack.push("str")` 에러. PEP 695 (Python 3.12+) `class Stack[T]:` 새 문법. Part A `Stack(Generic[T])` → `Generic.__class_getitem__(T)` → `_GenericAlias`. `Stack.__orig_bases__ = (typing.Generic[~T],)`. Part B Parametric Polymorphism — ML(1973)/Haskell/Java Generics/C++ Templates. System F (Lambda Calculus + 타입 추상화). Java `<T>` Type Erasure vs Python `__orig_class__`.

### p.16-18 — §05 Protocol — 중급(Drawable)/고급(runtime_checkable/Comparable)
🟢 PASS — 오디션 vs 혈통 비유. `class Drawable(Protocol): def draw(self) -> str: ...` + Circle/Square (상속 X) → `render(Circle())` 정확. Duck Typing의 공식화 (PEP 544, Python 3.8) [5]. mypy 구조적 비교 3단계. `@runtime_checkable` + Iterable Protocol → isinstance(MyRange(5), Iterable) True / isinstance(42, Iterable) False — runtime_checkable는 메서드 존재 여부만 (시그니처 X). Comparable Protocol (`__lt__`/`__le__`/`__gt__`/`__ge__`) + `top_student(students)` `max()` 동작.

### p.19 — §06 ABC vs Protocol 시작 + 전공자 Part A(_ProtocolMeta) + Part B
🟢 PASS — `_ProtocolMeta` 메타클래스 + `__instancecheck__` 오버라이드 + `__protocol_attrs__` frozenset 저장. Part B 명목적 서브타이핑(Java `class Dog extends Animal`) vs 구조적 서브타이핑(TypeScript/Go/OCaml). Python은 둘 다 지원 (ABC + Protocol). `class Animal(ABC)` + @abstractmethod 도입.

### p.20-22 — §06 ABC 중급(Animal/Dog/BadAnimal), 고급(LoggerABC vs LoggerProtocol 비교), 전공자 Part A(ABCMeta)
🟢 PASS — `BadAnimal(Animal)` → `bad = BadAnimal()` TypeError ("Can't instantiate abstract class BadAnimal with abstract method move") 정확. ABC 핵심 제약 — `class Dog(Animal)` 명시적 상속 필수. LoggerABC(상속 강제) vs LoggerProtocol(메서드만 있으면 OK). 비교 표 (강제 상속/런타임 검사/기본 구현/제3자 라이브러리/적합한 상황). Part A — ABCMeta 메타클래스 + `@abstractmethod`가 `__isabstractmethod__ = True` 설정 + `ABCMeta.__new__`가 `__abstractmethods__` frozenset 수집 + `object.__new__`가 비어있지 않으면 TypeError. `Animal.__abstractmethods__` = frozenset({'speak', 'move'}) 정확.

### p.23-24 — §07 dataclass 자동 생성 — 초급(보일러플레이트)/중급(field/기본값)
🟢 PASS — PersonManual 수동 작성 (`__init__`/`__repr__`/`__eq__`) ~20줄 → `@dataclass class Person: name: str / age: int` 3줄. `p1 == p2` True. `field(default_factory=list)` 가변 기본값. `s1.grades.append(100)` → s1만 영향, s2 [90, 85] 독립 (각 인스턴스 독립 리스트). `grades: list[int] = []` 함정 — 일반 함수 `def f(x=[])` 위험과 같은 이유.

### p.25-26 — §07 frozen=True (불변), `__post_init__`/상속
🟢 PASS — `@dataclass(frozen=True) class Point` → `p.x = 5.0` FrozenInstanceError (AttributeError 서브클래스 dataclass 3.7+) 정확. frozen이면 hash 가능 → set/dict 키 가능. 주의: frozen=True여도 list 같은 가변 필드 내부는 변경 가능 (진정한 불변 아님). `__hash__` 메커니즘 — `__eq__` 정의하면 `__hash__ = None` (12주차 연결). frozen이면 자동 `__hash__` / `unsafe_hash=True` 강제 가능. Employee `__post_init__` (init 후 자동 호출) → `self.total_pay = self.salary * (1 + self.bonus_rate)`. Manager(Employee) 상속 — bonus_rate 오버라이드.

### p.27-28 — §07 dataclass 상속 함정/옵션, 전공자 Part A(코드 생성 메커니즘)
🟢 PASS — Parent `name: str = "기본"` + Child `age: int` → TypeError ("non-default argument 'age' follows default argument") 정확. 해결 — Child에서도 기본값 부여 (`age: int = 0`). dataclass 옵션 (init/repr/eq/order/frozen/slots Python 3.10+). order=True → `__lt__/__le__/__gt__/__ge__` 자동 (튜플 비교처럼). Part A — `__annotations__` 읽어 필드 수집 + `exec()`/`compile()`로 동적 메서드 생성 → 일반 메서드와 동일 성능. `dataclasses.fields(Point)` / `inspect.getsource(Point.__init__)` 가능.

### p.29-30 — §07 Part B(Record Type) + §08 mypy 실전 워크플로우
🟢 PASS — Part B — Haskell `data` / Kotlin `data class` / Rust `struct` / Java 16 `record` 모두 같은 개념. 구조적 동치(Structural equality) 구현. mypy 기본 사용법 — `mypy example.py` → "error: Incompatible types in assignment". 점진적 도입 전략 — 1단계 함수 시그니처 / 2단계 중요 변수 / 3단계 `# type: ignore` 레거시. mypy 설정 (pyproject.toml `[tool.mypy]` python_version="3.12" / disallow_untyped_defs=true / no_implicit_optional=true). `[[tool.mypy.overrides]]` module="tests.*" 예외.

### p.31-32 — §08 reveal_type + §09 TypedDict/Callable
🟢 PASS — `reveal_type(item)` → mypy: int | str (타입 좁히기 후 int / str 자동 추론). TypedDict(UserDict) — name: str / age: int / email: str. `bad_user: UserDict = {"age": "스물다섯"}` mypy 에러 (Expected int, got str). Callable[[int, int], int] — apply(lambda a, b: a + b, 3, 5) = 8. ParamSpec (Python 3.10+) — `P = ParamSpec('P')` `def log_call(func: Callable[P, R]) -> Callable[P, R]` mypy가 add 시그니처 (int, int) -> int 정확히 인식. ParamSpec vs TypeVar 비교.

### p.33-34 — §09 Literal, 전공자 Part A(_TypedDictMeta) + Part B(ADT)
🟢 PASS — `Literal["north", "south", "east", "west"]` — set_direction("north") OK, "up" mypy 에러. HTTP 메서드 제한 `Literal["GET", "POST", "PUT", "DELETE"] = "GET"`. Part A — TypedDict 메타클래스 + `__annotations__`/`__required_keys__`/`__optional_keys__` 설정. isinstance 사용 불가 (TypeError) 정확. 런타임에는 일반 dict. Part B Algebraic Data Types — Union[int, str] = Sum Type / Either a b / Rust enum. dataclass = Product Type. 둘 합치면 ADT. Python 3.10 match/case 패턴 매칭 — `Shape = Circle | Rectangle` + `case Circle(r): return 3.14159 * r ** 2`.

### p.35-36 — §10 AI 활용 + §11 실습 시작
🟢 PASS — AI 코드 생성에서 타입 힌트 강력한 단서 (Copilot/Claude/ChatGPT). 타입 힌트 없으면 AI가 추측 → 여러 가능성 고려, 있으면 정확한 코드 생성. FastAPI 예 — `class User(BaseModel): name: str / age: int / email: str` Pydantic 검증, `@app.post("/users/")` async def create_user(user: User) → JSON 자동 변환 + OpenAPI 자동 생성. 바이브코딩에서 mypy 검증 강조. 실습 — Product dataclass + Discountable Protocol → apply_discount.

### p.37-40 — 연습문제 1~7 (초급/중급)
🟢 PASS — 1.calculate_bmi(weight: float, height: float) -> float / is_healthy(bmi: float) -> bool. 2.@dataclass Book (title/author/price/tags). 3.safe_divide -> Optional[float]. 4.Generic Stack + IndexError 처리. 5.Serializable Protocol + User/Config (상속 X). 6.TypedDict APIResponse (status: int / message: str / data: dict[str,str]). 7.ABC Shape (@abstractmethod area/perimeter, describe 일반 메서드) + Circle.

### p.41-46 — 연습문제 8~14 (고급/전공자)
🟢 PASS — 8.compose: Callable[[int],int]을 받아 composed -> Callable[[int],int]. double_then_add(5) = 11 (5*2=10, 10+1) / add_then_double(5) = 12 (5+1=6, 6*2). 9.frozen=True + order=True Version + sorted/max + set 사용. 10.@runtime_checkable HasLength → str/list/dict/range True / int False. 11.isinstance Type Guard + Union[str, int] 처리, mypy narrowing 원리 설명, TypeGuard (Python 3.10+) 언급. 12.`__class_getitem__` 직접 구현 → `types.GenericAlias(cls, (item,))` 반환. 13.T_co covariant=True + ReadOnlyList(Generic[T_co]) + Sequence[int|float]에 list[int] 전달 가능 (1단계 명목적 + 2단계 공변성). 14.@dataclass(order=True, frozen=True) + dataclasses.fields + inspect.getsource로 자동 생성된 메서드 소스 확인.

### p.47-50 — §12 요약/용어집 32개
🟢 PASS — 핵심 개념 9개 표 (타입 힌트/`__annotations__`/TypeVar/Generic/Protocol/ABC/@dataclass/mypy + 비유). 용어 32개 — 타입 힌트/`__annotations__`/mypy/typing/Union/Optional/Any/TypeVar/Generic/Protocol/@runtime_checkable/ABC/@abstractmethod/구조적 서브타이핑/명목적 서브타이핑/@dataclass/field()/frozen/__post_init__/TypedDict/Callable/Literal/reveal_type/타입 좁히기/점진적 타입/공변성/반변성/불변성/GenericAlias/__class_getitem__/PEP 484/PEP 544. 정의 정확.

### p.51 — 다음 주 미리보기 (Week 15: asyncio)
🟢 PASS — 15주차 항목 (동기 vs 비동기 / async/await 동작 원리 / 이벤트 루프 + 코루틴 / asyncio.gather, asyncio.create_task / 비동기 컨텍스트 매니저 + 이터레이터 / GIL과 동시성의 한계). 예고 질문 "await는 정확히 무엇을 기다리는 것인가?".

### p.52-53 — 참고문헌 [1]~[10]
🟢 PASS — [1] Guido van Rossum/Jukka Lehtosalo/Łukasz Langa PEP 484 (Type Hints, Python 3.5, 2014). [2] Łukasz Langa/Ivan Levkivskyi PEP 526 (Python 3.6, 2016). [3] PEP 585 (Python 3.9, 2019). [4] Maggie Moss/Philippe Prados PEP 604 (Python 3.10, 2019, `int | str`). [5] Ivan Levkivskyi/Jukka Lehtosalo/Łukasz Langa/Michael Lee PEP 544 (Protocols, Python 3.8, 2017). [6] Eric Smith PEP 557 (Data Classes, Python 3.7, 2017). [7] Larry Hastings/Carl Meyer/Barry Warsaw/Eric Smith/Mark Shannon/Jelle Zijlstra PEP 649 (Deferred Evaluation, Python 3.14에서 시연 예정, 2021). [8] Jeremy Siek/Walid Taha "Gradual Typing for Functional Languages" Scheme and Functional Programming 2006 (PEP 484 기점). [9] Barbara H. Liskov/Jeannette M. Wing "A Behavioral Notion of Subtyping" ACM TOPLAS 16(6) 1994 (Variance 규칙 기반). [10] CPython source — Lib/typing.py / Objects/genericaliasobject.c / Lib/_collections_abc.py 1차 구현. URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.06, p.10, p.12, p.20, p.21, p.26, p.30, p.33, p.40, p.51 등 박스 하단 큰 여백 (페이지 브레이크). 가독성 자체는 문제 없음.

---
**총 53쪽**. BLOCKING 없음. 출판 가능 수준 ✅
