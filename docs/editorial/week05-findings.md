# week05 편집 검수 — 발견 + 수정 기록

> 5주차: 조건문 — 컴퓨터의 결정 메커니즘
> PDF: 65쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차 (14섹션)
🟢 PASS — 부제 "컴퓨터의 결정 메커니즘" 1줄.

### p.03-05 — Hook + 핵심 질문 + 왜 조건문 + 고급 (구조적 프로그래밍)
🟢 PASS — Dijkstra 1968 "Go To Statement Considered Harmful" 인용 [1]. Python 공식 문서 (compound_stmts) 인용 [2]. ceval.c POP_JUMP_IF_FALSE 정확.

### p.06-09 — 전공자 (Part A: ceval.c 조건 처리) + if/elif/else 구조
🟢 PASS — switch(opcode) 분기 / Python 3.12+ JUMP 명령어 통일.

### p.10-14 — Suite/Clause/표현식 vs 문 + 조건문 종합
🟢 PASS — if_stmt BNF + named_expr_test/suite/clause 정확 정의.

### p.15-19 — Truthiness 활용 + None 체크 함정
🟢 PASS — db.get(name) 0 vs None 차이 정확. "is None 사용" 권장 정확.

### p.20 — Truthiness CPython 내부 (PyObject_IsTrue)
🟢 PASS — Objects/object.c -1/0/1 반환 + ceval.c err 처리 정확.

### p.21-25 — 복합 조건 and/or/not + 단락 평가 바이트코드
🟢 PASS — Python 3.12 POP_JUMP_IF_FALSE/TRUE 통일 정확.

### p.26-29 — 중첩 조건문 + Guard Clause 패턴
🟢 PASS — 중첩 깊이 줄이는 Pythonic 패턴.

### p.30-32 — 조건식 한 줄짜리 if (Conditional Expression)
🟢 PASS — PEP 308 (a if cond else b) 인용 [4].

### p.33-37 — match/case 구조적 패턴 매칭 (PEP 634)
🟢 PASS — Python 3.10+ wildcard / OR 패턴 / 시퀀스 패턴 / guard clause 정확.

### p.38-39 — match/case 클래스 패턴 + __match_args__
🟢 PASS — PEP 634 정확.

### p.40-43 — AI와 조건문 (= vs ==, == None vs is None, == [] vs not items)
🟢 PASS — Pythonic 패턴 적용 정확.

### p.44-47 — 실습 (조건 예측 + if vs match 비교)
🟢 PASS — http_status 예제 적합.

### p.48-58 — 연습문제 1~10 (전공자 3 포함)
🟢 PASS — Truthiness 우선순위 (__bool__ > __len__) 정답 정확. CPython Objects/object.c 인용 정확.

### p.59-60 — 이번 주 정리 + 용어 사전 (22개) 시작
🟢 PASS.

### p.61-63 — 용어 사전 (Conditional/Branch/Compound Statement/Suite/Clause 등)
🟢 PASS.

### p.64 — 다음 주 맛보기 + 핵심 질문 (리스트/튜플)
🟢 PASS.

### p.65 — 참고문헌 [1]~[5]
🟢 PASS — Dijkstra 1968 / Python 3.14 docs / PEP 634 / PEP 308 / CPython source — 모두 1차 출처.

---

## 종합 평가
**총 65쪽**. 이미 일괄 print.css 변경 적용된 상태로 빌드. 발견된 BLOCKING 없음. 출판 가능 수준 ✅

## 재검수 추가 발견 (2026-05-02)
재검수 결과 새 발견 없음.

- 65쪽 전수 시각 확인 (Read tool 1쪽씩).
- p.12 COMPARE_OP 인코딩(68 = (4<<4)|4, Python 3.12 상위 4비트=비교 종류, 하위 4비트=인라인 캐시) — 실제 Python 3.12.9 dis 출력과 일치 확인.
- p.12 "Python 3.13+ 인코딩 변경 — opname >> 5, opname & 16 = bool 강제" — Python 3.14 docs `library/dis.txt` L1188-1195 (COMPARE_OP / 버전 3.13에서 변경) 일치.
- p.55 `__len__()` 음수 반환 시 `ValueError: __len__() should return >= 0` — 실제 실행으로 확인.
- p.5 compound_stmts §8.1 영문 인용 — 의미상 reference/compound_stmts.txt 첫 단락과 일치.
