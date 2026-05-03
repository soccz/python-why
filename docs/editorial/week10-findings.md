# week10 편집 검수 — 발견 + 수정 기록

> 10주차: 딕셔너리와 세트 — Hash, O(1) lookup, compact dict
> PDF: 84쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (14섹션)
🟢 PASS — 부제 "왜 O(1) 검색이 가능한가". 100만 개에서 list 12ms vs dict 0.001ms 동기 부여 명료. 14개 섹션 모두 4레벨 표기.

### p.03 — §01 이번 주 이야기
🟢 PASS — 10,000명 학생 list O(n) vs dict O(1) 비교. 4개 핵심 질문 (왜 O(1)인가 / hashable / {} 함정 / 삽입 순서 보장).

### p.04-06 — §02 왜 딕셔너리가 필요한가 (초급)
🟢 PASS — 사물함 vs 줄 서기 비유 명확. contacts dict CRUD. {} 함정 (빈 dict vs set()) AttributeError 예시 포함.

### p.07 — §02 중급 — O(n) vs O(1) 측정
🟢 PASS — 100만 개 데이터, list 11.234ms / dict 0.001ms / 11,234배. Big-O 표기법 명확.

### p.08-09 — §02 중급 hashable + dict() 생성자
🟢 PASS — int/str/tuple key 허용, list key TypeError. Python 3.7+ 삽입 순서 보장. dict() 생성자 4가지 방법 (리터럴/키워드/튜플리스트/zip).

### p.09 — hash() 결과
🟢 PASS — hash(42)=42, hash(3.14)=322818021289917443 (CPython 64bit). 문자열/tuple/frozenset hash randomization 명시. list/dict/set TypeError.

### p.10-11 — §02 전공자 Part A + Part B
🟢 PASS — Part A: PyDictObject sys.getsizeof — 빈 dict 64 bytes, 3개 184 bytes, 10개 272 bytes (Python 3.12, 64-bit). view 객체 실시간 반영 검증. compact dict (Python 3.6+, Raymond Hettinger 제안) — `dk_indices` (해시 테이블 슬롯, 1~8 bytes) / `dk_entries` ((me_hash, me_key, me_value), 빈 슬롯 없이 밀집 배열) 분리 이유 — 메모리 ~50% 절감 + 삽입 순서 보존. Part B Associative Array ADT — 정렬 배열+이진 탐색 (O(log n)/O(n)/정렬 순서), BST 균형 미보장 (O(n) 최악), Red-Black Tree (Java TreeMap, O(log n) 최악, 키 순서), Hash Table (Python dict, O(1) 평균, 삽입 순서). 비교 표 정확.

### p.12-13 — §03 해시의 원리 (초급)
🟢 PASS — 도서관 분류번호 비유 (1번 서가부터 vs 계산기 → 즉시). hash(42)=42, hash(0)=0, hash(True)=1, hash(False)=0 정확. hash("hello") == hash("hello") 일관성. table_size=8, hash(key) % 8 슬롯 매핑. hash randomization 명시.

### p.14 — 해시 테이블 작동 원리 다이어그램
🟢 PASS — d["지민"]=90: ① hash() → 8273619427183 → %8 → 슬롯 3 → ② 8칸 슬롯 배열에 [3]에 저장 → 직접 접근 O(1). probing perturbation 사용 명시. hash() 성질 (hash(-1)=-2 특수 케이스, CPython에서 -1은 C 레벨 오류 신호 예약) — 정확. 등호 일관성 hash(1) == hash(1.0) == hash(True).

### p.15 — hashable vs unhashable
🟢 PASS — list/dict/set Mutable → unhashable TypeError. frozenset Immutable → hashable. `__hash__` 속성 존재 여부.

### p.16 — hash randomization + 해시 함수 3조건 + 조회 흐름
🟢 PASS — Python 3.3+ 문자열·바이트·datetime 해시 실행마다 달라짐 (PEP 456 SipHash, PYTHONHASHSEED). DoS 공격 방지 동기. 좋은 해시 3조건 (결정적/균등 분포/빠름) 정확. 딕셔너리 조회 흐름 5단계 (hash → slot=h&mask → dk_indices → dk_entries 비교 → perturbation probing).

### p.17 — 커스텀 __hash__ 구현
🟢 PASS — Point class `__init__`/`__eq__`/`__hash__`/`__repr__`. tuple 해시 재활용 `hash((self.x, self.y))` Python 권장 패턴. p1==p2 → True, hash(p1)==hash(p2) → True 일관성. 새 Point(1,2)로 dict 조회 가능 검증. ** 다른 값에서 우연 해시 같을 수 있음 (해시 충돌, 정상) 명시.

### p.18-19 — §03 전공자 Part A + Part B
🟢 PASS — Part A: PyObject_Hash → long_hash. 정수 해시 자기 자신 (mod Py_HASH_MODULUS = 2^61 - 1). hash(-1)=-2 특수 케이스 (C 함수 오류 반환값과 충돌 방지) 정확. sys.hash_info 출력 — width=64, modulus=2305843009213693951 (= 2^61-1, Mersenne prime), inf=314159, algorithm='siphash13' (Python 3.12부터 SipHash-1-3, 그 전 SipHash-2-4) 정확. Part B 완전 해시 (n개 키에 충돌 없음, 키 집합 미리 알려진 경우 — 예: 키워드 집합) / 보편 해시 (충돌 확률 ≤ 1/m, PYTHONHASHSEED 기반 랜덤화) / 비둘기집 원리 (키 공간 무한 vs 슬롯 유한 → 충돌 수학적 불가피).

### p.19-20 — §04 딕셔너리 연산 CRUD (초급)
🟢 PASS — Create/Read/Update/Delete + .get() 기본값 / del / in 연산 / len.

### p.21 — KeyError 대신 .get() 사용
🟢 PASS — try/except 대안. .get(key, default) / setdefault() (없으면 추가하고 반환) / defaultdict(int) 카운팅 패턴 비교.

### p.22-23 — §04 중급 — keys/values/items + pop/setdefault + | 병합
🟢 PASS — view 객체 (복사본 아님) 명확. .pop(key, default), setdefault(key, default), .update(other), `|` 병합 (Python 3.9+, PEP 584, 새 dict 반환), `|=` (in-place). 결과 일치.

### p.23-24 — §04 고급 — defaultdict / Counter / 순회 중 수정 함정
🟢 PASS — defaultdict(int)/list 카운팅·그루핑. Counter.most_common(n), counter["없는단어"]=0 (KeyError 없음). 순회 중 d 수정 → RuntimeError "dictionary changed size during iteration".

### p.25 — 순회 중 수정 해결
🟢 PASS — 해결 1: list(d.keys()) 복사로 순회. 해결 2: `{k: v for k, v in d.items() if v >= 2}` 컴프리헨션으로 새 dict 생성.

### p.26 — 얕은 복사 vs 깊은 복사 함정
🟢 PASS — original.copy() (또는 dict()) 얕은 복사 — 내부 list 공유 → original도 변경. copy.deepcopy() 깊은 복사. 최상위 값만 수정 시 얕은 복사 충분 (문자열은 불변 → 새 객체 생성).

### p.27 — 순서 보장 + Python 3.7+ + OrderedDict
🟢 PASS — Python 3.7+ (CPython 3.6+) 삽입 순서 보장 명시. sorted(d.keys()) / OrderedDict.move_to_end() (dict에는 없는 메서드). 딕셔너리 == 비교는 순서 무관.

### p.27-28 — §04 전공자 Part A — BINARY_SUBSCR / STORE_SUBSCR
🟢 PASS — `x = d[key]` → BINARY_SUBSCR, `d[key] = value` → STORE_SUBSCR 바이트코드 정확. CPython BINARY_SUBSCR → tp_as_mapping->mp_subscript → dict_subscript() → _Py_dict_lookup() 흐름 정확. Python 3.12 Specializing Adaptive Interpreter (PEP 659) → BINARY_SUBSCR_DICT 특화 (인터프리터 오버헤드 제거) — 정확.

### p.29 — Part B + 세트(set) 시작
🟢 PASS — 상각 분석 (Amortized Analysis): 삽입 1+2 = 3 크레딧 누적, resize 시 n×2 크레딧으로 지불. 출석부 비유 (한 번만 기록).

### p.29-30 — §05 세트 (초급)
🟢 PASS — fruits 자동 중복 제거. 빈 set은 set() (`{}`은 dict). list → set 변환. in 연산 O(1). 집합 연산 |, &, -, ^ 수학과 동일.

### p.31 — 부분집합 / 추가·삭제 / 메서드
🟢 PASS — `<=` 부분집합, `<` 진부분집합, `>=` 상위집합. .add(), .discard() (없어도 OK), .remove() (없으면 KeyError). 메서드 방식 .union/.intersection/.difference (연산자 동일).

### p.32 — 흔한 실수 — 세트 연산자는 새 세트 반환
🟢 PASS — `a | b` 새 세트 반환, a 변경 없음. `a |= b` in-place. 정리 표 6줄 (|/|=/&/&=/-/-=) 정확.

### p.33-34 — §05 고급 — frozenset / 순서 보존 중복 제거 / 성능
🟢 PASS — frozenset 불변 → hashable → dict key 가능. set은 unhashable → TypeError. deduplicate 함수 (seen set + result list 패턴). 100만 개 set in 0.001ms vs list in 11.234ms / 11,234배.

### p.34-35 — §05 전공자 Part A — PySetObject
🟢 PASS — set sys.getsizeof — 빈 set 216 bytes, 3개 set 216 bytes (초기 8 슬롯 동일), 20개 set 2264 bytes, frozenset 3개 216 bytes. issubclass(frozenset, object)=True / issubclass(set, frozenset)=False (서로 상속 관계 아님). PySetObject 단일 setentry 배열 (값 없음, dict처럼 indices/entries 분리하지 않음). 초기 8 슬롯, fill = used + dummy, fill×5 > (mask+1)×3 (즉 fill/size > 3/5) 시 확장. 소규모 ≤50,000은 4배, 대규모는 2배 — dict와 동일.

### p.35-36 — Part B Set ADT — Hash Set vs Tree Set
🟢 PASS — Hash Set (Python set, O(1) 평균, 순서 없음) / Tree Set (Red-Black Tree, O(log n), 정렬 순서, Java TreeSet) / Sorted List (O(log n) 탐색, O(n) 추가). Python에 Tree Set이 내장되지 않은 이유 — sortedcontainers.SortedSet / bisect 모듈 활용 안내.

### p.36-37 — §06 컴프리헨션 (초급)
🟢 PASS — `{x: x**2 for x in range(1, 6)}` / `{w: len(w) for w in words}` / `{x for x in range(10) if x % 2 == 0}` 세트 / list/set/dict 컴프리헨션 타입 비교.

### p.37 — §06 중급
🟢 PASS — 조건부 필터링 / key↔value 뒤집기 / zip 결합 / 변환+필터 동시 (.strip() 패턴).

### p.38-39 — §06 고급 — dict.fromkeys() + 중첩 + 성능
🟢 PASS — dict.fromkeys(keys, 0) 동일 초기값. mutable 기본값 함정 — `dict.fromkeys(keys, [])` 모두 같은 [] 객체 참조 → 공유 변형 / `{k: [] for k in keys}` 각각 새 [] 생성. 중첩 컴프리헨션 `{(i, j): i * j for i in range(1, 4) for j in range(1, 4)}`. 성능 — 컴프리헨션 18.762ms vs 루프 25.432ms.

### p.39-40 — §06 전공자 Part A — BUILD_MAP / MAP_ADD
🟢 PASS — 리터럴 `{"a": 1, "b": 2}` → BUILD_CONST_KEY_MAP (키 튜플 + 값들로 dict 생성). 컴프리헨션 → BUILD_MAP 0 + LOAD_FAST_AND_CLEAR (외부 x 보호) + FOR_ITER 루프 + MAP_ADD 2 (key:value 추가) + STORE_FAST (외부 x 복원). PEP 709 인라인 컴프리헨션 (Python 3.12) 정확.

### p.41 — Part A 마무리 + Part B
🟢 PASS — 컴프리헨션 자체 스코프 (Python 3 이후), 내부 변수 외부 유출 안 됨 (Python 2의 list comprehension은 외부 스코프 공유 → 변수 유출 — 역사적 사실 정확). Part B 컴프리헨션 = map + filter 합성 — `dict(map(lambda k: (k, k**2), filter(lambda k: k%2==0, range(10))))` 동등 표현. PEP 274 (Dict Comprehensions, Python 2.7+) 정확.

### p.41-42 — §07 해시 충돌 (초급)
🟢 PASS — 같은 서가에 두 권의 책 비유. Open Addressing 해결책. 슬롯 8개 시 hash(key) % 8 시각화.

### p.43-44 — §07 중급 — Open Addressing / 리사이징 / 메모리
🟢 PASS — Python dict는 perturbation 기반 탐사 (군집화 방지). resize 시점 측정 — 항목 6개일 때 resize 224 → 352 bytes / 11개일 때 352 → 632 bytes. list 100개 856 bytes vs dict 100개 4688 bytes. load factor = used/total, 2/3 초과 시 자동 확장 (소규모 4배, 대규모 2배). Python 3.12 결과 합리적.

### p.44-45 — §07 고급 — 충돌의 영향 / BadHash 케이스
🟢 PASS — 키 선택 기준 3가지 (불변 / 같은 값 = 같은 해시 / 해시 분포 고름). BadHash class `__hash__` return 42 (모든 객체 같은 해시) → O(n) 충돌 → 1000개 삽입 45.32ms vs 정상 0.12ms (377.7배 느림). 실제 측정 결과 합리적.

### p.46 — §07 전공자 Part A — CPython probe sequence
🟢 PASS — `cpython_probe_sequence` 함수 (CPython Objects/dictobject.c 재현). perturb >>= 5 / `i = (i * 5 + perturb + 1) & mask` 공식 정확. mask = 7 (table_size=8). hash=0 → [0, 1, 6, 7, 4, 5, 2, 3] / hash=3 → [3, 0, 1, 6, 7, 4, 5, 2] 탐사 순서. DKIX_EMPTY (한 번도 사용 안 됨, 키 없음 확정) / Active (현재 키-값 저장) 명시. 최대 20단계 표시 제한.

### p.47 — DKIX_DUMMY + Part B + AI 시작
🟢 PASS — DKIX_DUMMY (Tombstone) — 삭제된 슬롯, 탐사 계속해야 함 (중간에 멈추면 다음 충돌 키 못 찾음) 정확. Part B Separate Chaining vs Open Addressing 비교 표 — 다음 빈 슬롯/같은 슬롯 연결 리스트 / 연속적/비연속 / 캐시 친화 / Python dict·set vs Java HashMap 정확. AI와 딕셔너리 — 체크리스트 3가지 (없는 key d[key] / 순회 중 수정 / `{}`는 빈 dict).

### p.48-49 — §08 AI와 딕셔너리 (초급+중급)
🟢 PASS — del scores[name] 순회 중 RuntimeError 해결 — list(scores.keys()) 복사. `{} = dict`이므로 빈 set은 set() 강조. AI 코드 패턴 — 카운팅 (if-else / .get() / Counter), 그루핑 (if not in / setdefault / defaultdict(list)), Counter.most_common(3).

### p.50-51 — §08 고급 — JSON ↔ dict + 중첩 탐색 + 리팩토링
🟢 PASS — json.dumps(data, ensure_ascii=False, indent=2) / json.loads(json_str). 중첩 dict 안전 탐색 — `user.get("settings", {}).get("theme", "light")` 체이닝. AI 생성 if-elif chain → 리스트+반복 리팩토링 (`thresholds = [(90, "A"), ...]`).

### p.52-53 — §08 전공자 Part A — TypedDict / dataclass / NamedTuple
🟢 PASS — TypedDict는 런타임에 일반 dict (mypy 정적 분석 전용). UserDC dataclass / UserNT NamedTuple (인덱스 접근 가능). `wrong: UserProfile = {"name": 123}` mypy 잡지만 런타임 허용 — 정확.

### p.53-54 — Part B 딕셔너리와 DB 인덱스
🟢 PASS — Hash Index O(1) 조회 / 범위 조회 불가 / 정렬 불가 / PostgreSQL Hash Index. B-Tree O(log n) 조회 / 범위 조회 O(log n + k) / 자연 지원 / 대부분 DB 기본값. Python dict는 Hash Index 원리 사용. WHERE name = '지민' O(1) / WHERE age BETWEEN 20 AND 30 O(n) — 해시로 범위 질의 불가능 정확.

### p.54-56 — §09 10주 종합 복습
🟢 PASS — 1주~10주 핵심 WHY 정리 표 (PyWhy/타입/이름표/연산자/조건문/리스트/for/while/함수/딕셔너리). 10주 연결 다이어그램 — 이름표 → 타입 → 조건 → 반복 → 함수 → key 찾기. 통합 코드 `analyze_text` (Truthiness/str/Counter/세트/딕셔너리 컴프리헨션/제너레이터 sum + Iterator Protocol/items() 순회) — 10주 개념 총동원.

### p.57 — §10 실습 1 — 딕셔너리 내부 동작 시각화
🟢 PASS — sys.getsizeof로 resize 시점 측정. Q1 load factor 2/3, Q2 resize 후 크기 배율, Q3 set도 같은 패턴.

### p.57-58 — §10 실습 2 — hash() 함수 탐구
🟢 PASS — 정수/float/bool 해시 일관성 (0/0.0/False 모두 hash 0). hash 일관성 검증 (a==b → hash(a)==hash(b)). 커스텀 GoodPoint class — `__eq__`/`__hash__` 둘 다 정의 → 같은 좌표 두 객체 → dict에서 1 항목.

### p.58 — §10 실습 3 — 집합 연산
🟢 PASS — class_a & class_b (양 반 모두) / class_a - class_b (A반만) / class_b - class_a (B반만) / class_a ^ class_b (대칭 차집합) / class_a | class_b (전체).

### p.59-65 — §11 연습문제 (초급4 + 중급4)
🟢 PASS — char_count (.get(c, 0) + 1) / invert_dict ({v: k for k, v in d.items()}) / common_keys (set(d1) & set(d2)) / unique_ordered (dict.fromkeys(lst) — Python 3.7+ 삽입 순서 보장 활용) / top_words (counts → sorted by x[1] reverse=True [:n]) / group_by (defaultdict(list)) / 컴프리헨션 (even_squares/lists_to_dict/remove_none) / compare_lists (set 연산).

### p.66-68 — 고급 9 + 전공자 10
🟢 PASS — deep_merge 재귀 (isinstance 검사로 중첩 dict 판별, 충돌 시 d2 우선) — 정확. 전공자 10 hash() 함수 탐구 — sys.hash_info.modulus = 2^61 - 1 (Mersenne prime). 정수 해시 hash(n) = n % (2^61 - 1), hash(-1) = -2 (C에서 -1은 오류 코드). float x.is_integer()이면 hash(x) == hash(int(x)). 커스텀 Vector class (`__hash__` = hash((self.x, self.y))) tuple 해시 활용. verify_hash_consistency 모든 (a, b) 쌍 검증.

### p.69-74 — 전공자 11 + 12
🟢 PASS — 11: compact dict 분석 — measure_resize_points (load factor 2/3 확인), demonstrate_view (dict_keys 실시간 업데이트 검증), d[key] 바이트코드 (BINARY_SUBSCR), dict vs set 메모리 비교. Q1 답: dk_indices/dk_entries 분리 → 항목 순서 보존 + 해시 탐사 효율 (CPython 3.6+ 구현, 3.7부터 언어 명세). Q2: dict는 key+value+hash → set보다 1.5~2배 큼. Q3: d["a"]=2 후 keys_view 반영 → 참조 증명. 12: MiniHashTable Open Addressing — EMPTY/DELETED 마커 (Tombstone), `__setitem__`/`__getitem__`/`__delitem__`/_resize, load factor > 2/3 시 _resize() 호출, 충돌 시 (slot+1) % size 선형 탐사 (실제 CPython은 perturbation), DELETED 마커가 있어 첫 발견 위치 first_deleted 기억하여 재삽입. Q1: Tombstone 없으면 EMPTY 만나면 탐사 종료 → 충돌로 뒤에 있는 항목 못 찾음. Q2: 선형 탐사 군집화 (clustering) 성능 저하. Q3: CPython i = (5*j + perturb + 1) & mask, perturb >>= 5 — 해시 상위 비트를 매 탐사마다 섞어 군집화 최소화.

### p.75 — §12 이번 주 정리
🟢 PASS — 8개 개념 표 + 다이어그램 (PyDictObject ↔ ma_keys (PyDictKeysObject) ↔ dk_indices/dk_entries + ma_used + perturbation 탐사 + PySetObject (값 없는 dict와 동일 구조)).

### p.76-80 — §13 용어 사전 30개
🟢 PASS — 딕셔너리 / Key-Value 쌍 / 해시 함수 / hashable / unhashable / 해시 테이블 / 해시 충돌 / Open Addressing / Perturbation Probing / Load Factor / compact dict / 뷰 객체 / KeyError / .get / .setdefault / 세트 / frozenset / 합집합 / 교집합 / 차집합 / 대칭 차집합 / 딕셔너리 컴프리헨션 / 세트 컴프리헨션 / defaultdict / Counter / O(1) 상각 / Tombstone (DKIX_DUMMY) / hash randomization / Separate Chaining / TypedDict.

### p.81-83 — §14 다음 단계 + 마무리
🟢 PASS — analyze_data 절차적 → DataAnalyzer 클래스 (인스턴스 변수 + 내부 상태). try/except/finally 예외 처리. with open() Context Manager (`__enter__`/`__exit__`). yield 제너레이터 (피보나치). 다음 7개 주제 (클래스/예외/파일 I/O/모듈/제너레이터/데코레이터/비동기). 마무리 메시지 — "파이썬은 왜?"의 답: 모든 것은 객체이고, 이름은 그 객체를 가리킨다.

### p.84 — 참고문헌 [1]~[5]
🟢 PASS — Python 3.14 Library Reference (dict 메서드/뷰 객체/| 병합 PEP 584), PEP 456 SipHash (Python 3.4 도입, 3.12부터 SipHash-1-3 변경), Raymond Hettinger compact dict 제안 (python-dev 2012-12, Python 3.6 도입 / 3.7 언어 명세 / dk_indices·dk_entries 분리 메모리 20-25% 절감), PEP 584 Union Operators (Python 3.9 dict | merge / |= in-place), CPython source (Objects/dictobject.c, Objects/setobject.c, Python/pyhash.c). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.10, p.20, p.25 등 코드/실행 결과 박스 하단 큰 여백 (페이지 브레이크 후 다음 컨텐츠가 새 섹션). 가독성 자체는 문제 없음.
- p.46 probe sequence 출력은 "최대 20단계"로 제한되어 있어 8 슬롯에서 모든 슬롯 방문 후 자연스럽게 종료됨 (visited 중복 검사로 break) — 정확.

---
**총 84쪽**. BLOCKING 없음. 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)

재검수 결과 새 발견 없음
