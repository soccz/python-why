# week01 편집 검수 — 발견 + 수정 기록

> 1주차: PyWhy — 컴퓨터, AI, 그리고 우리가 코딩을 배워야 하는 이유
> PDF: 74쪽 (새 density 적용 후)
> 검수 방식: 1페이지씩 시각 + 글쓰기 + 설명 + 코드 + 비유 + 페이지 사고 점검

## 검수 기준 (10항목)

각 페이지마다 확인:
1. 글쓰기 품질 (어색한 한국어, 번역체, 비문, 종결어 일관)
2. 설명 명확성 (모호 / 점프 / 비유가 본질 가리는지)
3. 코드 예제 (실행 가능 / 출력 정확 / 학습 목표 일치)
4. 페이지 시각 (어색한 break, 표 페이지 넘침, 빈 페이지)
5. 레벨 구분 (초급 어휘, 고급/전공자 차이)
6. 학습 흐름 (이전/다음 섹션 연결)
7. 연습문제 (학습 검증 / 정답 명확)
8. AI 섹션 가치 (실제 통찰)
9. 용어/정리 (정의 정확성)
10. 30,000원 값어치 관점

## 등급
- 🟢 PASS — 출판 OK
- 🟡 MINOR — 사소한 보강
- 🟠 MAJOR — 명확한 수정 필요
- 🔴 BLOCKING — 절대 출판 불가

---

## 페이지별 기록

### p.01 — 표지
🟢 PASS — PyWhy 큰 세리프, H0NG, 4레벨 컬러 점, 워터마크 ?, 전체 톤 일관.

### p.02 — 판권면
🟢 PASS — 메타정보 / 저작권 / 면책 명확. AI 흔적 없음.

### p.03 — 챕터 디바이더 (WEEK 01)
🟠→🟢 FIXED — 부제 "...우리가 코딩을 배워야 하는 이유"가 줄바꿈되며 "코" / "딩을" 중간에서 끊겨 어색했음.
**수정**: `<h1 class="week-title">` 부제를 "PyWhy<br>컴퓨터, AI, 그리고 코딩"으로 단축 (week01.html L46).
재빌드 후 1줄로 깔끔하게 떨어짐.

### p.04 — 목차
🟡 MINOR (acceptable) — 목차 항목 8 "컴퓨터는 print()를 어떻게 처리하나?"가 2줄로 줄바꿈.
**수정**: "처리하는가?" → "처리하나?"로 줄임 (week01.html L123). 줄바꿈은 여전히 발생하지만 자연스러운 위치 ("처리하" / "나?")로 떨어져 PASS 처리.

### p.05 — 이번 주 이야기 (Hook)
🟢 PASS — blockquote 내부 외국인 비유 → 0/1 → 프로그래밍 언어 흐름 자연스러움. dense 레이아웃 성공.

### p.06 — WHY 박스 + 컴퓨터란 무엇인가? 도입
🟢 PASS — WHY 박스 (번역기 비유) → 초급 박스 (=빠른 계산기) 시각 흐름 좋음. 박스 헤더 줄바꿈 없음. 본문 폰트 / 행간 적정.

### p.07 — 초급 마무리 + 중급 (3가지 부품 표)
🟢 PASS — 초급 박스가 페이지 상단에서 자연스럽게 끝나고 중급 박스로 전환. CPU/메모리/저장장치 비유 표가 한 페이지에 안정적으로 들어감. "사람의 두뇌" 단어 끊김 해결 확인.

### p.08 — 다이어그램 + 고급 박스 (트랜지스터/0과 1)
🟢 PASS — PNG 다이어그램 (저장장치→메모리→CPU 흐름) 깨끗이 렌더. 고급 박스의 트랜지스터 설명, ASCII/Unicode 각주 ²까지 한 페이지 완결. 인라인 코드 칩 (`42`, `'A'`, `65` 등) 가독성 양호.

### p.09 — CPython 컴파일/실행 + 왜 파이썬인가 도입
🟢 PASS — 고급 박스 CPython 2단계 (소스→바이트코드→PVM) + JVM 비교. PVM이 "비공식 용어"라고 명시 (정확). hello.py→.pyc→PVM 다이어그램 렌더 깨끗. 페이지 하단에 "왜 파이썬인가?" h2 시작 + 초급 박스 헤더만 들어가 빈 공간 약간 발생 — 다음 페이지에 코드블록이 길어 break 자연스러움.

### p.10 — Hello 다국어 비교 + Zen of Python
🟢 PASS — C/Java/Python 코드블록 3개 다크 테마 + 언어 라벨 헤더 깔끔. 결론 "딱 한 줄입니다" 강조. 중급 박스 "파이썬의 설계 철학" 시작 + Zen of Python 인용. 각주 [4][5] 부착.

### p.11 — 파이썬 특징 + Monty Python 어원 + 기술적 특성
🟢 PASS — 3개 박스가 한 페이지에 빼곡하지만 가독성 유지. BBC + Monty Python's Flying Circus 어원 정확. 6개 기술적 특성 (인터프리터/동적 타이핑/확장/대규모 표준 라이브러리/모든 것이 객체) 잘 정리.

### p.12 — 문법 실수 1 박스 단일
🟠 MAJOR — 페이지 하단 약 50% 빈 공간. mistake-warning 박스가 break-inside:avoid로 page 13의 두 번째 박스를 끌어올릴 수 없어 분리됨. 30,000원 가치 관점에서 손해 — 빈 공간이 너무 큼.
**수정 보류**: print.css에서 `.mistake-warning`의 break 규칙 조정 또는 박스 통합 검토 필요. (페이지 19-21에서도 동일 패턴 가능성)

### p.13 — 문법 실수 2 + 전공자 박스 시작 (언어명세 vs 구현체)
🟢 PASS — 흔한 실수 2 (BUILT-IN NAME 덮어쓰기) + 전공자 박스 도입. 코드 주석으로 keyword 모듈 활용 등 깊이 있음.

### p.14 — Part A: CPython 구현체 표 + GIL
🟢 PASS — CPython/PyPy/Jython/MicroPython 표 정확. Python 3.13+ free-threading (PEP 703) 언급 정확. WHY 박스 GIL = Reference Counting 보호 핵심 (정확).

### p.15 — Part B: PEP + print() 도입
🟢 PASS — PEP 표 (3105/572/634/703/8) 정확. peps.python.org 출처 부착. print() 첫 함수 초급 박스 시작.

### p.16 — print 시그니처 + 매개변수 표
🟢 PASS — 함수 시그니처 컬러링 (`*objects`, `sep=' '`, `end='\n'`, `file=None`, `flush=False`) 시각적으로 명확. 매개변수 표 5행 깔끔. 각주 [8] 부착.

### p.17 — sys.stdout 동작 설명 + WHY 박스
🟡 MINOR — file=None 동작 설명 + 코드 예시 + 출력 박스 + WHY 박스. 페이지 하단에 약간 빈 공간.

### p.18 — 파이썬 2/3 차이 + 흔한 실수 1 (대소문자)
🟢 PASS — Python 2 → 3 print SyntaxError 메시지 ("Did you mean print(...)?") 정확. 대소문자 NameError 코드 좋음.

### p.19 — 흔한 실수 2/3/4 (들여쓰기/따옴표/+연결)
🟡 MINOR — 3개 박스 잘 들어감, 페이지 하단 약 25% 빈 공간 (다음 박스가 더 큼).

### p.20 — 흔한 실수 5/6 (sep 효과/sep TypeError)
🟡 MINOR — 페이지 하단 약 30% 빈 공간. 다음 박스 7번이 큼.

### p.21 — 흔한 실수 7 + 고급 박스 시작 (print는 객체)
🟢 PASS — 빈 print() = 줄바꿈만 출력 동작 정확 설명. 고급 박스 print 자체 객체임을 dis/id로 검증.

### p.22 — print 객체성 마무리 + 전공자 박스 도입
🟢 PASS — built-in function / first-class object 개념 정확 도입. PEP 3105 (Georg Brandl, 2006) **저자 정확** (이전 검수에서 수정됨). statement → function 4가지 이유 정리.

### p.23 — sys.stdout 레이어 + 출력 redirection
🟢 PASS — print() 내부적 sys.stdout.write() 호출 흐름 정확. monkey-patching 예제 + output.txt 파일 캡처 시연.

### p.24 — Part A CPython 내부 (builtin_print → tp_str) + 바이트코드
🟢 PASS — dis.dis 결과 (RESUME / PUSH_NULL / LOAD_GLOBAL / LOAD_CONST / CALL / POP_TOP / RETURN_CONST) Python 3.12+ 정확. 각 명령어 화살표 주석으로 설명.

### p.25 — print 내부 경로 (builtin_print → PyObject_Str → tp_str) + CPython 소스
🟢 PASS — `__str__` vs `__repr__` 시연 + Py_PRINT_RAW 플래그 의미 정확 설명. CPython 소스 (Python/bltinmodule.c) 인용 정확.

### p.26 — Part B sys.stdout 버퍼링과 flush
🟢 PASS — line-buffered / 파이프 block 버퍼 동작 정확. flush=True 진행률 예제 + sep 매개변수 의미 설명.

### p.27 — CPython 소스에서 print의 실제 구현
🟢 PASS — builtin_print() 의사코드 + str(obj) 호출 강조. 9주차 함수 / 클래스 후속 학습 연결.

### p.28 — __builtins__ 모듈 노출 + AI는 코딩을 어떻게 도입
🟢 PASS — LEGB 규칙 (Local→Enclosing→Global→Built-in) 정확. AI 섹션 진입 깔끔.

### p.29 — 사람 vs AI 비교 + AI 할루시네이션
🟢 PASS (after fix) — flex-row 비교 박스 + caution-box 자연스럽게 흐름. (이전 빈 공간 50% 문제 해결)

### p.30 — AI 할루시네이션 결론 + 바이브 코딩 시대 개발자 역할 + LLM 메커니즘
🟢 PASS — 매우 dense하지만 가독성 유지. LLM 결정론적 vs 확률적 차이 정확.

### p.31 — Part A LLM 토크나이저 + BPE
🟡 MINOR — tiktoken 실습 코드 좋음. 페이지 하단 약간 빈 공간 (다음 코드 블록 큼).

### p.32 — Part B 형식 언어 이론 + LLM 한계
🟢 PASS — PEG (PEP 617, Python 3.9부터) 정확. Grammar-Constrained Generation 표 좋음.

### p.33 — 컴퓨터는 print("Hello")를 어떻게 처리하는가? 도입 + 4단계 다이어그램
🟠→🟢 FIXED — Step 4 라벨 "실행 → 표준 출력(stdout)으로 전송"이 옆 빨간 "Hello" 박스(x=200)와 겹쳐 "stdou" 잘림. **수정**: 라벨을 "실행"으로 단축 (week01.html L1582). 전체 의미는 SVG 하단 보조 텍스트 "화면(터미널)에 'Hello'가 표시됩니다"가 보존.

### p.34 — Layer 0~6 코드 스택 (전공자 박스 내부)
🟢 PASS (after fix) — code-block break-inside:auto 변경으로 자연스럽게 페이지 분할. 이전 빈 박스 헤더 orphan 해결.

### p.35 — Layer 코드 마무리 + Part B I/O 버퍼링 + WHY 박스
🟢 PASS — 시스템콜 비용 / sys.stdout 기본 버퍼링 / flush() 호출 시점 정확.

### p.36 — REPL 도입 + 실습 두 방식 (대화형 / 스크립트)
🟢 PASS — Python 공식 문서 (Tutorial 2.1.2) 인용 정확. 표 비유 (계산기 / 레시피) 명료.

### p.37-44 — REPL 사용법 + dis 모듈 + tokenize 모듈
🟢 PASS — Zen of Python 전문 표시 + 바이트코드 dis.dis 분석 + tokenize 토큰 분해 모두 출판 수준 콘텐츠. (개별 페이지 빈공간 없음)

### p.45 — tokenize 마무리 + 연습문제 시작
🟢 PASS (after fix) — 이전 35% 빈 공간 해결.

### p.46-58 — 연습문제 1~10 (전공자 3문제 포함)
🟢 PASS (after fix) — .problem/.answer break-inside:auto 변경으로 자연스럽게 흐름. 이전 50% 빈 공간 (p55) 해결.

### p.59-60 — 이번 주 정리 + 용어 사전 (27개)
🟢 PASS — 핵심 개념 12개 깔끔히 카드형 정리.

### p.61-63 — 다음 주 맛보기 + 참고문헌 시작
🟢 PASS — week02 변수/할당 주제 예고 + 11개 인용 정확 부착.

### p.64-65 — 참고문헌 [1]~[11]
🟢 PASS — Python 3.14 docs (8건) + PEP (3건) + Unicode/blog/blog speed (3건) 출처 완비. 각 주마다 한국어판 docs 경로도 병기 (예: tutorial/appetite.txt §1 ¶42-43). PEP 3105 저자 Georg Brandl 명시 (이전 검수에서 수정 — Guido van Rossum 아님 확인).

---

## 일괄 수정 요약 (print.css)
**74쪽 → 65쪽 (9쪽 절약)** — 전체 visual 품질 큰 개선.

1. `.callout` — break-inside: avoid 유지 (작은 atomic 경고 박스)
2. `.why-box, .ai-box, .computer-box, .caution-box, .docs-box` — break-inside: auto (긴 컨테이너는 자연 흐름)
3. `.box-header` — break-after: avoid (헤더 orphan 방지)
4. `.code-block` — break-inside: auto (긴 코드는 페이지 분할 허용)
5. `pre` (bare) — break-inside: auto
6. `.problem, .exercise, .answer` — break-inside: auto (긴 문제/답 자연 분할)

## week2-15에 적용할 가이드라인
1. **콘텐츠 정확성**: 공식 문서 / PEP / CPython 소스 인용 (week01과 동일 수준)
2. **다이어그램**: SVG 텍스트 라벨이 다른 SVG 요소와 겹치지 않는지 검수 (x좌표 / 폭 계산)
3. **레이아웃**: print.css 위 6개 규칙 이미 전역 적용됨 — 추가 작업 불필요
4. **각주 / 참고문헌**: 페이지 하단 [n] 형식 + 챕터 말미 통합 참고문헌 섹션
5. **레벨 박스**: 초급/중급/고급/전공자(Part A+B) 4단계 모두 포함
6. **전공자 Part B**: "이걸 설명하려면 이 CS 이론이 필요한가?" 기준 (week01: PEG 형식언어 / GIL / LLM 토크나이저 등)

