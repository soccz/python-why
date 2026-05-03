# week11 편집 검수 — 발견 + 수정 기록

> 11주차: 컴프리헨션 & 제너레이터 — 의도대로 읽히는 코드, 필요할 때만 계산하는 코드
> PDF: 52쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (12섹션)
🟢 PASS — 부제 "의도대로 읽히는 코드, 필요할 때만 계산하는 코드". 1억 개 데이터를 메모리 200바이트로 처리 동기. 12개 섹션, 4레벨 표기.

### p.03-04 — §01 이번 주 이야기
🟢 PASS — for문 4줄 → 컴프리헨션 1줄 (축약 아님). 1억 개 짝수 제곱 리스트 → 약 3.2 GB 메모리 / 제너레이터는 200 bytes (약 1600만 배 차이). Guido van Rossum PEP 202 인용 — "list comprehensions provide a more concise way to create lists in situations where map() and filter() would currently be used." (정확). 이번 주 핵심 질문 3개.

### p.05-07 — §02 리스트 컴프리헨션 (초급)
🟢 PASS — 마트 주문서 비유 (선언적). evens/threes/squares 컴프리헨션. 영어 문장처럼 읽힘 (`[표현식 for 변수 in 이터러블 if 조건]`). if-else 위치 차이 — 조건 필터 (for 뒤) vs 조건 표현식 (표현식 자리, 앞). `multiples_of_3 = [n for n in numbers if n % 3 == 0]` / `mixed = [n ** 2 if n % 2 == 0 else n for n in numbers]`.

### p.07-09 — §02 중급 — 속도보다 의도 명확성
🟢 PASS — for_loop vs comprehension timeit 측정. for문 0.369초, 컴프리헨션 0.392초 — "컴프리헨션이 항상 빠르다는 미신". 진짜 이점 — 의도 명확성 / 스코프 격리 / 버그 감소. map+filter+lambda 스타일 비교. Guido 인용. 일반 규칙 — 변환+필터 → 컴프리헨션 / 단순 함수 적용 → map.

### p.10-11 — §02 고급 — De-sugaring + 스코프 격리
🟢 PASS — 컴프리헨션 De-sugaring (Python 3.11 이전: 별도 함수 code object 생성, 그래서 루프 변수 외부 안 새는 것 — 함수 스코프). Python 3.12 (PEP 709) 인라인 처리하지만 스코프 격리 동작은 동일하게 유지 — 정확. 왜 Python은 for문 변수 누출 수정 안 했나 — 하위 호환성, `for line in file: ... line` 패턴 보호. 컴프리헨션은 Python 2.0 (2000년) 새 문법 — 정확.

### p.11-12 — §02 전공자 Part A — PEP 709 컴프리헨션 인라인 처리
🟢 PASS — Python 3.11 이전 LOAD_CONST <code object <listcomp>> + MAKE_FUNCTION + CALL_FUNCTION. Python 3.12+ (PEP 709) GET_ITER + LOAD_FAST_AND_CLEAR (외부 x 보호) + FOR_ITER + LIST_APPEND + STORE_FAST (보호된 외부 x 복원) — 정확. PEP 709는 인라인 처리하면서도 LOAD_FAST_AND_CLEAR/STORE_FAST 메커니즘으로 스코프 격리 유지.

### p.12 — Part B 다른 언어와의 비교
🟢 PASS (해상도 낮으나 텍스트 식별 가능) — Haskell의 `[x*2 | x <- [1..100], even x]` Set-builder 표기법 모태. Miranda (1985) → Haskell (1990) → Python 2.0 (2000) PEP 202 도입. Zen of Python 인용 정확.

### p.13-14 — §03 딕셔너리 & 세트 컴프리헨션 (초급+중급)
🟢 PASS — `{name: len(name) for name in names}` / `{n: n**2 for n in range(1, 6)}` / `{len(w) for w in words}` 자동 중복 제거. {} vs set() 빈 컬렉션 함정. dict 키 중복 시 마지막 값 유지 (`{85: '민수'}` "철수"가 "민수"로 덮어쓰임) — 데이터 손실 가능. 환경설정에서 None이 아닌 값만 추출. zip + 컴프리헨션 결합.

### p.14-15 — §03 고급 — 컴프리헨션 vs map+lambda 성능
🟢 PASS — 100,000개 x**2: 컴프리헨션 0.8초 vs map+list 1.0초 (약 20% 빠름) — lambda 호출 오버헤드. 단, `map(int, strings)`처럼 C 구현 함수는 map이 더 빠를 수 있음 (정확). Part A 딕셔너리 컴프리헨션 바이트코드 — LOAD_GLOBAL + GET_ITER + LOAD_FAST_AND_CLEAR + BUILD_MAP + FOR_ITER + STORE_FAST + MAP_ADD + STORE_FAST 정확.

### p.16 — §03 Part A 마무리 + Part B 수학적 기원
🟢 PASS — LIST_APPEND vs MAP_ADD vs SET_ADD 바이트코드 분리. dict.__setitem__과 동일한 키 덮어씀. 수학 Set-builder notation `S = {x² | x ∈ N, x ≥ 빠수}`. 역사 — SETL (1969년) → Miranda (1985) → Haskell (1990) → Python 2.0 (2000, PEP 202). Dict 컴프리헨션은 7년 늦게 Python 2.7/3.0 (PEP 274) — 정확. Zen of Python "We need to resist the temptation to add features."

### p.16-17 — §04 중첩 컴프리헨션 (중급)
🟢 PASS — 2중 for 읽는 순서 (왼쪽 for → 오른쪽 for). 행렬 평탄화 `[x for row in matrix for x in row]`. 가독성 규칙 — 2중까지 OK, 3중 이상은 for문 권장.

### p.17-18 — §04 고급 — walrus 연산자 (:=)
🟢 PASS — `[y := x ** 2 for x in range(5)]` y 외부로 새어나옴. PEP 572 (Python 3.8) 의도된 누출 — 컴프리헨션 안에서 계산한 중간 결과를 바깥에서 쓸 수 있게 하는 것. `[y for x in data if (y := f(x)) > 0]` 정규식 한 번만 호출 패턴. walrus의 실용적 사용 예 — `[m.group() for s in [...] if (m := re.search(r'\d+', s))]`.

### p.19 — §04 전공자 Part A — walrus 스코프 누출 CPython 구현
🟢 PASS — 일반 컴프리헨션 변수는 LOAD_FAST/STORE_FAST로 로컬 프레임에 저장. walrus 연산자 (:=)는 타깃 변수가 외부 스코프에 전달되는 메커니즘. Python 3.11 이전 STORE_DEREF (cell 변수)로 외부 스코프에 저장. Python 3.12+: 인라인 컴프리헨션이므로 STORE_FAST가 사용되지만, LOAD_FAST_AND_CLEAR가 보호 안 하므로 외부 스코프에 잔류 — 정확.

### p.19-21 — §05 제너레이터 함수 & yield (초급)
🟢 PASS — 자판기 비유 (재고 vs 주문 시 제조). 피보나치 1000개 만들었지만 17개만 사용 (1000 미만 필터). 제너레이터는 요청 시마다 하나씩. yield 있으면 제너레이터. `gen_func()` 호출하면 함수 실행 안 됨 (제너레이터 객체만 생성). next()로 시작. countdown(3) 예시 — yield n → next() 호출 시 yield까지 실행 후 정지, 다음 next()에서 재개, 마지막은 StopIteration. for문이 next() 자동 호출 + StopIteration catch.

### p.22-23 — §05 중급 — 책갈피 비유 + 메모리 비교
🟢 PASS — 책갈피 (Bookmark) 비유 — yield에서 멈추면 지역 변수, 실행 위치 모두 보존. counter() 예시 (count 보존). 10만 개 제곱 — list 800,984 bytes vs gen 200 bytes (약 4,005배 큼) 정확. "왜 200바이트인가?" — 코드 참조 + 현재 프레임 (로컬 + 실행 위치) + 메타데이터. fibonacci 무한 시퀀스 + itertools.islice. 무한 제너레이터에 list() 금지 (메모리 폭발).

### p.24-25 — §05 고급 — 소진과 재사용 / Iterable vs Iterator
🟢 PASS — 제너레이터 한 번 소진되면 빈 리스트. 재사용하려면 새로 생성. gen.gi_frame None이면 소진됨. Iterable (__iter__만 구현, 매번 새 Iterator 반환) vs Iterator (__iter__ + __next__, 자기 자신 반환). MyRange / MyRangeIterator 클래스 직접 구현. for문 De-sugaring — `_iter = iter(countdown(3))` → while True: try: num = next(_iter); except StopIteration: break.

### p.26-27 — §05 전공자 Part A — yield 구현 + Part B CO_GENERATOR
🟢 PASS — Part A YIELD_VALUE 명령어 4단계 — 스택 최상위 값을 gi_frame 반환값으로 설정 / f_lasti (마지막 명령어 오프셋)를 현재 위치로 저장 / 프레임을 비활성화 (suspended)하지만 메모리에 계속 유지 / next()는 재호출 시 f_lasti 다음 명령어 (RESUME) 1부터 실행. Python 3.4 이후 PEP 380 (yield from), PEP 342 (send/throw), PEP 492 (async/await)로 발전. Part B `CO_GENERATOR = 0x0020` 플래그 — `gen_func.__code__.co_flags & CO_GENERATOR` True / `normal_func` False. `gen_func()` PyGenObject 즉시 반환 → "함수 호출하면 실행되지 않는" CPython 구현입니다.

### p.28-29 — §06 yield from & send (고급)
🟢 PASS — yield from 서브 제너레이터로 위임. `outer_verbose` for + yield item / `outer` yield from inner() 간결화. flatten 재귀 제너레이터 (yield from 필수). yield from 양방향 통신 — accumulator + delegator, send/throw 자동 전달. send() — `value = yield total` 외부에서 값 받음. running_sum 예시. 프라이밍 — send() 전 next(gen) 필수.

### p.30 — §06 전공자 Part A — throw() + close()
🟢 PASS — error_handling_gen — try/except ValueError + g.throw(ValueError("오류!")) → 제너레이터 내부에 예외 주입, except 블록 실행. closeable_gen — try/except GeneratorExit + close() → "제너레이터가 닫힙니다" 출력. GeneratorExit 후에는 yield 금지 (return만 가능) 정확.

### p.31 — Part A 마무리 + Part B CO_ASYNC_GENERATOR + §07 시작
🟢 PASS — PEP 525 (Python 3.6+) 비동기 제너레이터. `async def + yield` = `CO_ASYNC_GENERATOR = 0x0200` 플래그 정확. CPython 코드 오브젝트 플래그 — `CO_GENERATOR = 0x0020` (동기), `CO_COROUTINE = 0x0100` (async def), `CO_ASYNC_GENERATOR = 0x0200` (async def + yield). §07 제너레이터 표현식 시작.

### p.32-33 — §07 제너레이터 표현식 — 괄호 하나의 차이
🟢 PASS — `[x ** 2 for x in range(1000)]` (8,856 bytes) vs `(x ** 2 for x in range(1000))` (200 bytes). 합계는 동일 (332833500). sum() 안에서 자동으로 제너레이터 표현식 — 괄호 생략 가능 (이중 괄호 불필요). 결정 기준 — 여러 번 사용/인덱싱 → list, 한 번만/매우 큼 → generator, len/슬라이싱 → list. 제너레이터 인덱싱 불가 / len 불가 — TypeError. 파이프라인 `step1 → step2 → step3 → sum(step3)` 1백만 개 처리 메모리 1개만 보존. De-sugaring — sum이 next 체인을 따라 하나씩.

### p.33-34 — §07 전공자 Part A — 제너레이터 표현식 vs 컴프리헨션 코드 오브젝트 차이
🟢 PASS — Python 3.12+ with_list (인라인, 별도 code object 없음, co_consts = (None,)) vs with_gen (별도 code object 존재, co_consts = (None, <code object <genexpr> ...>)) — 정확. 왜 제너레이터 표현식은 인라인되지 않는가 — 지연 평가가 본질이므로 반드시 독립적인 프레임이 필요 (yield 지점에서 상태 보존). 이것이 PEP 709가 제너레이터 표현식을 인라인하지 않는 이유.

### p.34-35 — Part B + §08 itertools (중급)
🟢 PASS — Part B `CO_ASYNC_GENERATOR = 0x0200` PEP 525. async_range 예시. 정확. itertools — count(start=10, step=3) / cycle(["빨강", "파랑", "초록"]) / chain([1,2], [3,4], [5,6]) / islice (인덱싱 불가 이터러블에 슬라이스).

### p.35-36 — §08 itertools 실용 패턴 + 고급
🟢 PASS — takewhile (조건이 True인 동안만) / dropwhile (조건이 True인 동안 건너뜀) / accumulate (누적 집계, max/lambda 가능) / product (데카르트 곱) / combinations / permutations. itertools로 피보나치 1000 미만 — `takewhile(lambda x: x < 1000, fibonacci())` 17개. groupby — 데이터 정렬 필수 (스트리밍 방식이라 연속된 같은 값만 묶음).

### p.37-38 — §08 전공자 Part A — itertools C 구현 + Part B
🟢 PASS — itertools 모든 함수는 C로 구현 (Modules/itertoolsmodule.c). Python 래핑된 호출 오버헤드 없음. 1. 바이트코드 해석 오버헤드 없음 / 2. Python 함수 호출 오버헤드 없음 / 3. C 레벨에서 직접 tp_iternext 슬롯을 호출. itertools.chain 1개 객체 연결할 때 100배 빠름. Python 3.x 설계 철학 — "성능이 필요한 핵심 루프는 C로, 나머지는 Python으로" — C 구현 라이브러리 (json, collections, functools 등). py_chain Python 구현 vs itertools.chain C 구현 비교. C가 약 1.5~2배 빠름.

### p.38-39 — §09 Lazy Evaluation (중급)
🟢 PASS — Eager (즉시 평가) 뷔페 비유 / Lazy (지연 평가) 오마카세 비유. tracemalloc 비교 — Eager 40,448,200 bytes / Lazy ~400 bytes (정확). `range(1_000_000_000)` 48 bytes (시작/끝/스텝만 저장). `500_000 in r` True (O(1) 멤버십 검사). map/filter/dict.keys()/values()/items()/itertools.* — Lazy 요소 목록 정확.

### p.40-41 — §09 전공자 Part A + Part B + §10 시작
🟢 PASS — Part A — Haskell은 기본 Lazy `let x = 1/0` 에러 안 냄 (x 사용 안 할 때). Python은 기본 Eager 이유 — 부작용 있는 코드에서 Lazy는 실행 순서 예측 어려움 (파일 삭제, 네트워크 요청, DB 커밋). Guido van Rossum 인용 — "Python은 실용적 언어이며, 부작용이 있는 코드는 명시적으로 실행되어야 한다. Lazy 필요한 곳에만 명시적으로 제너레이터 채택. Explicit is better than implicit (Zen of Python)." Part B — Doug McIlroy `|` 발명 (1970년대 Unix). `cat data | grep pattern | sort | head -10` 한 줄씩 흘려보내는 철학. Apache Kafka / Spark Streaming / Python Dask 모두 이 철학의 직접 계승. §10 AI는 이걸 어떻게 하는가.

### p.41-42 — §10 AI와 컴프리헨션
🟢 PASS — AI 모델은 for문보다 컴프리헨션 선호 (학습 데이터에서 파이썬다운 코드 평가). AI 생성 4개 패턴 — 데이터 변환 (`[name.upper() for name in names]`) / 조건부 필터링 / 딕셔너리 변환 (API 응답) / 대용량 파일 제너레이터. AI 코드 검증 포인트 3가지 — 대용량 리스트 컴프리헨션 (메모리 문제) / 복잡한 3중 컴프리헨션 (가독성) / 제너레이터 두 번 사용 (소진 후 재사용 버그).

### p.42-46 — §11 실습 & 연습문제 12개
🟢 PASS — 실습: 가상 로그 파이프라인 (yield from logs → ERROR 필터 → 메시지 추출 → 대문자 변환). 12 문제 — 1 (초급) 컴프리헨션 / 2 (초급) 딕셔너리 컴프리헨션 / 3 (초급) 카운트다운 제너레이터 / 4 (중급) 행렬 전치 (zip(*matrix)) / 5 (중급) 무한 피보나치 + takewhile / 6 (중급) 세트 컴프리헨션 중복 제거 / 7 (중급) 스코프 격리 확인 / 8 (중급) list vs gen 메모리 비교 / 9 (고급) 재귀 flatten / 10 (전공자) running_average send() / 11 (전공자) 바이트코드 차이 분석 (f1 인라인 / f2 별도 code object) / 12 (전공자) 파이프라인 메모리 분석 (메모리에 동시에 있는 최대 원소 수: 1).

### p.47 — §12 요약 표
🟢 PASS — 9개 개념 표 (리스트 컴프리헨션 / 딕셔너리 컴프리헨션 / 세트 컴프리헨션 / 스코프 격리 / 제너레이터 함수 / yield / yield from / 제너레이터 표현식 / itertools). 핵심 통찰 — 컴프리헨션은 의도를 코드로, 제너레이터는 계산을 미루는 도구.

### p.48-51 — §12 용어집 32개 + 다음 주 미리보기
🟢 PASS — List Comprehension / Dict Comprehension / Set Comprehension / Generator Expression / Generator Function / Generator Object / yield / yield from / Lazy Evaluation / Eager Evaluation / Iterable / Iterator / StopIteration / next() / iter() / send() / throw() / close() / GeneratorExit / Priming / Iterator Protocol / Scope Isolation / Walrus Operator / itertools / islice() / takewhile() / chain() / accumulate() / Pipeline / gi_frame / CO_GENERATOR / PEP 709. 12주차 미리보기 — Vector class `__init__`/`__add__`/`__repr__`, super() 호출.

### p.52 — 참고문헌 [1]~[6]
🟢 PASS — PEP 202 (Barry Warsaw, List Comprehensions, 2000, Python 2.0 도입), PEP 274 (Just van Rossum, Raymond Hettinger, Dict Comprehensions, 2001, Python 2.7/3.0), PEP 709 (Carl Meyer, Jelle Zijlstra, Inlined comprehensions, 2023, Python 3.12 / LOAD_FAST_AND_CLEAR로 스코프 격리 유지 / 최대 2배 속도 향상), PEP 572 (Chris Angelico, Tim Peters, Guido van Rossum, Assignment Expressions, 2018, Python 3.8 walrus(:=)), Python 3.14 Library Reference itertools, CPython source — Python/ceval.c (LIST_APPEND, MAP_ADD, SET_ADD, GEN_START, YIELD_VALUE), Objects/genobject.c (PyGenObject), PEP 380 (yield from). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.12 Part B 텍스트 영역이 부분적으로 페이지 하단에 압축되어 보임 (해상도 110 DPI 출력 한계). 가독성에 큰 지장 없음.
- p.31 §07 도입부가 페이지 하단에 부분적으로 잘림 (PNG 미리보기 한계). PDF 자체는 정상.
- 일부 코드/실행 결과 박스 하단 큰 여백 (페이지 브레이크 후 다음 컨텐츠 새 섹션). 가독성 자체는 문제 없음.

---
**총 52쪽**. BLOCKING 없음. 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)

전 52쪽 시각 전수 재확인 + 핵심 코드 출력값 4건 실제 실행 검증 완료.

### P2 (개선 권장)
- **p.33 `co_consts` 실측값 부정확**: 본문 주석 `# (None,)  ← 내부 code object 없음 (인라인)` 인데, 실제 Python 3.12.9에서 `with_list.__code__.co_consts`는 `(None, 5)` 반환 (`range(5)`의 `5`가 상수로 포함됨). "별도 code object 없음" 핵심 메시지는 정확하나, 표기를 `(None, 5)` 또는 `# co_consts에 <code object> 없음` 으로 수정 권장.

### 검증된 코드 출력값 (모두 정확)
- p.4 / p.32 제너레이터 크기 200 bytes ✅
- p.32 리스트 8,856 bytes / 합계 332,833,500 ✅
- p.33 / p.46 파이프라인 결과 `55,555,388,888,555,556` ✅
- p.16 Set-builder notation 한글 "x는 짝수" 원문 정확 (저해상 PNG에서 글자 깨짐처럼 보였던 부분은 폰트 렌더링 한계, PDF 자체 정상)

### 기존 findings 재확인
- 기존 P3 미세 레이아웃 메모(p.12, p.31 페이지 하단 컴팩션) 재현됨. 가독성 영향 없음 — 그대로 유지.
- 모든 PEP 인용 (202/274/572/709/525/342/492/380) 연도·저자·주제 모두 정확.
- itertools 모든 출력값(takewhile/dropwhile/accumulate/product/combinations/permutations/chain/islice) 시각상 정확.

**재검수 결론**: P1 BLOCKING 0건. P2 1건(co_consts 표기 미세 보정). 출판 가능 수준 유지 ✅
