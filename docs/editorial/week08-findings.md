# week08 편집 검수 — 발견 + 수정 기록

> 8주차: 반복문 — while / 상태 기반 반복 + Sentinel 패턴
> PDF: 75쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차 (14섹션)
🟢 PASS — 부제 "상태를 보는 루프". 14개 섹션 모두 4레벨 표기.

### p.03-05 — §01 이번 주 이야기 + §02 왜 while이 존재하는가 (초급/중급)
🟢 PASS — for vs while 비유 (택배기사 vs 경비원), for가 안 되는 5가지 상황 (게임/네트워크/입력검증/스트림/수렴) 명확.

### p.06-08 — §02 고급 + 전공자 Part A (Walrus + bytecode 비교)
🟢 PASS — Python 공식 문서 8.2 while_stmt 문법 [1] 인용. Walrus(:=) 정규식 스캔 예제. f_for vs f_while 바이트코드 비교 (GET_ITER+FOR_ITER vs LOAD_FAST+COMPARE_OP+POP_JUMP_IF_FALSE) 정확.

### p.09-11 — §03 while 기본 문법 (초급/중급)
🟢 PASS — 경비원 비유, 3요소 (초기값/조건/상태변경), do-while 시뮬레이션, 루프 변수 스코프 (for와 동일).

### p.12-14 — §03 고급 + 전공자 Part A/B (Walrus 활용 + 바이트코드)
🟢 PASS — Walrus로 chunk read/file read/regex match 단순화. while x := next(it, None) Falsy 함정 경고. Python 3.12 바이트코드 (RESUME, LOAD_FAST, COMPARE_OP, POP_JUMP_IF_FALSE, BINARY_OP -=, JUMP_BACKWARD) 정확. Part B Walrus의 COPY+STORE_FAST 처리 정확.

### p.15-19 — §04 while True + break (초급/중급/고급/전공자)
🟢 PASS — 숫자 맞추기 게임, break 통합 패턴 (set/함수), 중첩 try-except (dead code 함정), Part A peephole 최적화 (while True는 LOAD_GLOBAL True + POP_JUMP_IF_FALSE 제거 → JUMP_BACKWARD만 남음) 정확. Part B CPython flowgraph.c의 두 단계 최적화 설명 정확.

### p.20-24 — §05 while-else (초급/중급/고급/전공자)
🟢 PASS — for-else와 동일한 "no break" 패턴. 검색 실패 감지 패턴 (스케줄링). while-else vs 플래그 변수 가독성 비교. Part A JUMP_FORWARD가 else 건너뛰는 메커니즘 정확. Part B Knuth n-and-a-half loop + Dijkstra 구조화 프로그래밍 (1968) 인용 정확.

### p.25-29 — §06 Sentinel 패턴 (초급/중급/고급/전공자)
🟢 PASS — quit 문자열, None as sentinel, object()로 절대 유일 sentinel 생성. iter(callable, sentinel) 두 인수 형태 [3] 인용. Part A StopIteration도 프로토콜 정의 sentinel. Part B object().__eq__는 self is other만 검사 → is/== 모두 identity → sentinel로 완벽.

### p.30-35 — §07 State Machine (초급/중급/고급/전공자)
🟢 PASS — 신호등 (3개 상태 + cycle 카운트), ATM (MENU/WITHDRAW/DEPOSIT/EXIT), Enum CSV parser (FIELD_START/IN_FIELD/IN_QUOTED/AFTER_QUOTE) 모두 코드 동작. Part A Generator의 yield/RESUME가 frame state 보존 (gen.gi_frame.f_locals) 정확. Part B 전이 테이블 (dict) 방식 (IDLE→RUNNING→PAUSED→RUNNING→IDLE) 검증 OK.

### p.36-40 — §08 while vs for 선택 기준 (초급/중급/고급/전공자)
🟢 PASS — 한 줄 요약 "순회면 for, 조건이면 while". binary_search O(log n). Newton-Raphson sqrt(2) 5~6회 수렴 (2차 수렴). Part A while/for 바이트코드 비교 (POP_JUMP_IF_FALSE vs FOR_ITER) 정확. Part B Loop Invariant + 알고리즘 표현력 비교.

### p.41-43 — while 흔한 실수 3가지 (무한루프/off-by-one/조건부작용)
🟢 PASS.

### p.43-47 — §09 AI와 while 루프 (초급/중급/고급/전공자 Halting Problem)
🟢 PASS — AI 코드 체크리스트 (조건 변수 업데이트/break 도달 가능/중첩 break 탈출 범위). while로 Iterable 순회는 for로 리팩토링. while True+조건 → Walrus. Part A Halting Problem (Turing 1936) — paradox(paradox) 대각선 논법 + signal.alarm 실용적 대안 정확.

### p.48-51 — §09 Part A 바이트코드 + Part B 방어 패턴 + Loop Invariant 증명
🟢 PASS — Python 3.12 바이트코드 분석 (JUMP_ABSOLUTE → JUMP_BACKWARD 3.11+ 변경 정확). MAX_ITERATIONS=10_000 안전 래퍼. binary_search Loop Invariant 3조건 (Init/Maintain/Terminate) 수학적 귀납법 비교 정확.

### p.52-53 — §10 실습 (이진탐색 / while True vs while 조건 / 자판기 State Machine)
🟢 PASS.

### p.54-68 — §11 연습문제 10개 (초급 3 + 중급 5 + 전공자 3)
🟢 PASS — 합산 루프 / 자릿수 분해 (n%10, n//=10) / 유효성 검사 (1~10 chained comparison Python vs C/Java 차이 함정) / 이진수 변환 (n%2, n//=2) / 팰린드롬 두 포인터 (s == s[::-1] 메모리 차이) / 소인수분해 (divisor*divisor<=n O(√n)) / Newton-Raphson sqrt (tolerance 너무 작으면 정밀도 손실 함정) / while True 바이트코드 분석 (loop_a/b/c COMPARE_OP/peephole/flag) / object() sentinel (IS_OP vs COMPARE_OP, module-level vs function-level) / 무한 루프 방어 데코레이터 (functools.wraps).

### p.69-72 — §12 정리 (개념 표) + §13 용어 22개
🟢 PASS — 모든 용어 본문 등장. while 문 / while True / while-else / Sentinel / object() / State Machine / Walrus / do-while 시뮬레이션 / 이진탐색 / 뉴턴-랩슨법 / 수렴 조건 / 무한 루프 / POP_JUMP_IF_FALSE / JUMP_BACKWARD / Peephole Optimization / Loop Invariant / Halting Problem / iter(callable, sentinel) / Guard Clause + while / Enum / 전이 테이블 / 수렴 vs 순회.

### p.73-74 — 다음 주 맛보기 (Week 09: 함수)
🟢 PASS — DRY / def·return / 스코프(LEGB) / Pass by Object Reference / 재귀와 Call Stack / CPython CALL+Frame 미리보기. 참조 링크 4개 (Python Docs while statement, Walrus PEP 572, iter sentinel, ceval.c).

### p.75 — 참고문헌 [1]~[4]
🟢 PASS — Python 3.14 docs (compound_stmts 8.2 while), PEP 572 (Walrus, Python 3.8, 2018), Built-in iter(object, sentinel), CPython source ceval.c (POP_JUMP_IF_FALSE, JUMP_BACKWARD, COPY+STORE_FAST). URL 접속일 2026-05-01 명시.

---

## 미세 레이아웃 메모 (P3급)
- p.20, p.32, p.43-44 등 코드블록/`실행 결과` 박스 하단 큰 여백. 콘텐츠 정확성과 무관.
- §09에서 "Part A" 라벨이 두 번 등장 (Halting Problem용 + bytecode용) — 의미 분리는 명확하나 구조 라벨로는 다소 혼동. 차후 sub-label 검토 (P3).

---
**총 75쪽**. BLOCKING 없음. 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)

재검수 결과 새 발견 없음 — 75쪽 전수 시각 확인 완료.
