# week03 편집 검수 — 발견 + 수정 기록

> 3주차: 변수와 입출력 — 이름표와 바인딩
> PDF: 64쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차 (15섹션)
🟢 PASS — 부제 "이름표와 바인딩" 1줄. 목차 양 column 균형.

### p.03 — Hook (지난 수수께끼 답) + 핵심 질문 + 왜 이름표
🟢 PASS — Python 공식 문서 인용 [1]. "x = 1은 이름표 x를 객체 1에 붙인다" 정확.

### p.04 — 상자 vs 이름표 모델 다이어그램
🟢 PASS — PNG 변환 다이어그램 깔끔. 두 모델 비교 시각적으로 명료.

### p.05 — 친구_나이 = 나이 + 함정 + 지금 바로 해봐
🟢 PASS — id() 추적 + 재바인딩 동작 정확 시연.

### p.06 — 중급 박스 (바인딩 = 이름과 객체의 연결)
🟢 PASS — 3단계 (객체 생성/이름 연결/네임스페이스 등록) 정확. Python 공식 문서 인용 [1].

### p.07 — 고급 박스 (객체 3요소 + 참조 카운트)
🟢 PASS — id 추적 + 재바인딩 결과 정확.

### p.08 — 참조 카운트 + 전공자 박스 시작 (STORE_NAME 바이트코드)
🟢 PASS — y=x → ref count 2, x = [4,5,6] → 1로 감소 정확. dis로 LOAD_CONST/STORE_NAME 분석.

### p.09 — STORE_NAME vs STORE_FAST 차이
🟢 PASS — PyDict_SetItem (dict lookup 느림) vs fastlocals[var_index] (배열 접근 빠름) 정확.

### p.10 — 네임스페이스 = 딕셔너리 + Part B (값 vs 참조 의미론)
🟢 PASS — globals() 직접 조작 시연 + C/Go/Rust value semantics vs Python reference semantics 비교.

### p.11 — Immutable + 바인딩 증명 시작
🟢 PASS — int immutable / list mutable 차이 정확. 주민등록번호 비유 좋음.

### p.12 — id()/is/== 차이 + 중급 (작은 정수 캐싱 + 인터닝)
🟢 PASS — Python 공식 문서 (C API/PyLong_FromLong) "CPython keeps an array of integer objects for all integers between -5 and 256" 정확 인용.

### p.13 — 작은 정수 캐싱 cont. + 주의 박스 (is로 값 비교 X) + 고급 (del)
🟢 PASS — 예외: None/True/False 싱글턴은 is None 사용 권장 정확.

### p.14 — del CPython 동작 + 전공자 (DELETE_NAME 바이트코드)
🟢 PASS — Python 공식 문서 인용 [1]. PyObject_DelItem(f_locals, name) + Py_DECREF + tp_dealloc 정확.

### p.15 — Mutable + 바인딩 = 수수께끼 해답 + 핵심 비유 (방-문)
🟢 PASS — week02 마지막 코드 답변. 방 = 객체 / 문 = 이름. 명확.

### p.16 — in-place vs 재바인딩 + 코드 비교
🟢 PASS — append vs + [...] 차이 정확. 얕은 복사 (.copy(), [:]) 도입.

### p.17 — 흔한 실수 (a = b = []) + 고급 (얕은 vs 깊은 복사)
🟢 PASS — copy.deepcopy() 사용 시연 정확.

### p.18 — 깊은 복사 결과 + 흔한 실수 (불변 +=)
🟢 PASS — 정수 += vs 리스트 += id 차이 시연 정확.

### p.19 — 전공자 (list.append CPython 구현) + 변수 이름 규칙 도입
🟢 PASS — listobject.c app1() pseudo-code 정확. realloc + ob_size += 1.

### p.20 — 변수 이름 3가지 규칙 + keyword 모듈 + 중급 (PEP 8 네이밍)
🟢 PASS — keyword.kwlist 결과 정확.

### p.21 — PEP 8 cont. + 고급 (이름 규칙의 의미: _private/__mangled/__dunder__/_) + 전공자 (symtable)
🟢 PASS — PEP 8 인용 [2]. Name Mangling 정확.

### p.22 — symtable 시연 + 다중 대입 도입 + 초급 (4가지 대입 방법)
🟢 PASS — LOAD_FAST/LOAD_GLOBAL/LOAD_DEREF 차이 정확.

### p.23 — 함정 (언패킹 개수) + 출력 + 중급 (스타 언패킹)
🟢 PASS — *나머지 / 첫째,*중간,끝점 정확.

### p.24 — 스타 언패킹 cont. + 고급 (값 교환 SWAP 명령어)
🟢 PASS — Python 3.11+ SWAP n 명령어 도입 정확.

### p.25 — SWAP 결과 + print() 도입 + 초급 (기본 사용)
🟢 PASS.

### p.26 — print 출력 + 중급 (시그니처 *objects, sep, end, file, flush)
🟢 PASS — 기본값과 흐름 정확.

### p.27 — print flush 시연 + 고급 (print는 __str__ 호출)
🟢 PASS — Point 클래스 __str__ vs Bare 클래스 비교 정확.

### p.28 — Bare 객체 출력 + 전공자 (print 호출 체인 — tp_str까지)
🟠→🟢 FIXED — h3 잘림 (sys.stdout.wri 까지만 표시). 단축 + level-section-title nowrap 해제 (전 주차 영향). 배지 "전 / 공 / 자" 세로 분리 → flex-shrink:0 + nowrap 강제.

### p.29 — bytecode 분석 + sys.stdout 3겹 래퍼 (TextIOWrapper/BufferedWriter/FileIO)
🟢 PASS — sys.stdout = io.StringIO 교체 가능 (Duck Typing).

### p.30 — sys.stdout 마무리 + __str__ vs __repr__ 우선순위
🟢 PASS — print → str → __str__ → __repr__ fallback 정확.

### p.31 — input() 시작 + 중요 박스 (input은 항상 str)
🟢 PASS — int(input(...)) 변환 패턴 정확.

### p.32 — input.split() + LIST(MAP(INT, INPUT().SPLIT())) 4단계 분해
🟢 PASS — 교수법 핵심 (한 줄을 4단계로 분해) 잘 적용.

### p.33 — 입력 검증 패턴 + 전공자 (input CPython 구현 — sys.stdin)
🟢 PASS — PyOS_Readline + GNU readline 정확.

### p.34 — sys.stdin Duck Typing + LEGB 규칙 도입
🟢 PASS — 코드 + 출력으로 LEGB 4단계 시연.

### p.35 — LEGB 출력 + 고급 (global과 nonlocal)
🟢 PASS — Python 공식 문서 인용 [1].

### p.36 — global/nonlocal 코드 + 함정 (UnboundLocalError)
🟢 PASS — 점수 = 점수 - 10 함정 + global 해결 정확.

### p.37 — UnboundLocalError 해설 + 전공자 (네임스페이스 CPython 구현)
🟢 PASS — PyFrameObject + f_locals/f_globals/f_localsplus/f_builtins 정확.

### p.38 — Python 3.12+ 변경 (LOAD_FAST_CHECK) + Part B (참조 카운팅 + GC)
🟢 PASS — sys.getrefcount + gc.collect 정확.

### p.39 — GC 3세대 + AI와 변수 도입 + 초급 (AI 코드 함정)
🟢 PASS — 0/1/2세대 GC + students.copy() 패턴 정확.

### p.40 — AI 코드 검토 체크포인트 + 중급 (AI 코드 변수 패턴) + 고급 도입
🟢 PASS — walrus :=, map(int, ...), 언패킹 UNPACK_SEQUENCE 정확.

### p.41 — late binding closure 버그 + 전공자 (클로저 CPython 구현)
🟢 PASS — funcs.append(lambda x=i: x) 해결 패턴 정확.

### p.42 — 클로저 cell 객체 + 전공자 Part A (LEGB 바이트코드 구현)
🟠→🟢 FIXED — h3 "Part A — LOAD_FAST vs LOAD_DEREF vs LOAD_GLOBAL: 바이트코드로 보는 LEGB" 단축 + h3 "AI가 생성하는 코드와 스코프 버그" → "AI 코드의 스코프 버그" 단축 ("버그"가 음절 분리되어).

### p.43-45 — LEGB 바이트코드 + 성능 비교 + Part B (환경 모델 vs 치환 모델)
🟢 PASS — SICP 인용 [3]. timeit 결과로 성능 차이 시연.

### p.46 — 환경 모델 / 치환 모델 + make_adder 클로저 시연
🟢 PASS — inspect.currentframe() 활용 정확.

### p.47 — 실습 1 (id 바인딩 추적) + 실습 2 (LEGB) + 실습 3 (input 파이프라인)
🟢 PASS — 실습 콘텐츠 풍부.

### p.48-58 — 연습문제 1~10 (전공자 3문제 포함)
🟠→🟢 FIXED — summary "💡 힌트 / 정답 보기" 10개 → "정답 및 해설" 통일 (전 주차 일괄 수정).

### p.59-60 — 이번 주 정리 카드 (바인딩 모델/id is/Mutable 주의/input str/LEGB/STORE_FAST)
🟢 PASS — 핵심 6개 카드 정리.

### p.61-64 — 용어 사전 (26개)
🟢 PASS — Object/Identity/Reference Count/Binding/Rebinding/Aliasing/Closure 등.

### p.65-66 — 다음 주 맛보기 + 참고문헌 (예상)
[빌드 완료 후 확인 필요]

---

## 종합 평가

**총 64→66쪽 (level-section-title wrap 적용으로 +2쪽)**

수정 적용:
1. **h3 단축** (week03.html L1306, L1959, L1867 — 3곳)
2. **level-badge nowrap + flex-shrink:0** (전 주차 영향)
3. **level-section-title / box-header nowrap 해제** (긴 제목 wrap 허용 — 전 주차 영향)
4. **summary 10개** "💡 힌트 / 정답 보기" → "정답 및 해설" (week03 + 전 주차 일괄)

품질 종합:
- 콘텐츠 정확성: Python 공식 문서 + PEP 8 + SICP + CPython 소스 (listobject.c, frameobject 등) 모두 1차 출처
- 4단계 레벨 적용 균등
- AI 섹션: late binding closure 패턴 정확
- 출판 가능 수준: ✅

## 재검수 추가 발견 (2026-05-02)

전 64쪽 1쪽씩 시각 전수 확인. 콘텐츠 정확성·인용·코드 출력값 모두 1차 출처 대조 통과.

### P3 (스타일·심미적, 출판 차단 아님)

- **p.36** — 함정 박스 본문 "왼쪽의 = 때문에" 어색한 띄어쓰기.
  현재: `"점수 = 점수 - 10"에서 왼쪽의 = 때문에`
  제안: `"점수 = 점수 - 10"에서 왼쪽의 =(대입) 때문에` 또는 `왼쪽의 대입(=) 때문에`
  사유: 문장 중 단독 기호 `=`가 가독성 저해. 코드 인라인 백틱 또는 보조 설명 추가 권장.

- **p.56** — 문제 9 정답 코드 블록 내 줄 끝 주석 줄바꿈.
  `print("클로저:", f.__closure__)                  # cell 객체` 의 주석 "cell 객체"가 코드 폭을 초과하여 그 다음 줄에 "하나" 단독 출력 (의미: "cell 객체 하나"가 두 줄로 분리).
  제안: 주석을 `# cell 한 개` 정도로 단축하거나 정렬 공백 축소.
  사유: 미관상 어색. 의미 전달은 가능.

### P2 (경미한 개선 — 다음 일괄 사이클)

- **p.12 중급 박스** — `# CPython 3.12+에서는 REPL에서도 같은 블록 내에서 True가 될 수 있음` 코멘트는 맞기는 하나, REPL은 줄 단위 별도 컴파일이라 사용자가 실제로 검증하기 어려움. "동일 코드 블록 내(예: 한 함수 안 또는 스크립트 한 파일 내) 큰 정수도 컴파일러의 상수 캐싱으로 같을 수 있음" 으로 부연하면 명확.
  사유: 학습자가 REPL에서 직접 시도해보고 False가 나오면 혼란 가능.

### P1
- 없음.

### 검증 완료 항목 (스팟 아님 · 전수)
- 페이지 카운트: PDF 64쪽, 모든 쪽 PNG 렌더링 확인.
- 바이트코드 출력 (p.8 모듈/함수 STORE_NAME/STORE_FAST, p.14 DELETE_NAME, p.24-25 SWAP, p.28 print CALL 1, p.42 LOAD_DEREF, p.44 LOAD_GLOBAL/LOAD_DEREF/LOAD_FAST): Python 3.12+ 실제 출력과 일치 (재현 확인).
- 인용: [1] Python 공식 docs tutorial/classes, [2] PEP 8, [3] SICP — 모두 본문 인라인 위치 정확.
- 작은 정수 캐시 인용: c-api/long.txt L37-40 ("array of integer objects for all integers between -5 and 256") 원문 1대1 일치.
- list.append in-place vs 재바인딩, deepcopy, late binding closure(`lambda x=i: x`), global/nonlocal/UnboundLocalError 흐름 모두 정확.
