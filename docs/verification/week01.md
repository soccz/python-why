# week01 검증 리포트

> 1주차: PyWhy — 컴퓨터, AI, 그리고 우리가 코딩을 배워야 하는 이유

**검증 시작**: 2026-04-30
**검증 완료**: 2026-04-30
**검증자**: Claude
**1차 기준**: `/mnt/20t/study/self_python/python-3.14-docs-text/`
**보조 기준**: PEP 문서, CPython 소스, 표준(ASCII/Unicode/IEEE 754)
**작업 방식**: A안 — 발견 즉시 HTML 수정 + 본 리포트에 기록

---

## 종합 결과

| 지표 | 수치 |
|---|---|
| 검증 섹션 수 | 14 (§1 ~ §14) |
| 검토한 기술적 주장 | 약 90개 |
| **명백한 사실 오류** (수정함) | **2** |
| 정확성 보강 (표현 다듬기) | 4 |
| 신규 인용(footnote) 추가 | 11 |
| 신규 참고문헌 항목 | 11 |
| 통과 (수정 불필요) | 약 73개 |

### 결론
- **week01은 콘텐츠 정확성이 매우 높음**. 큰 사실 오류는 2건뿐.
- 두 사실 오류는 모두 **전공자 레벨**에서 발견됨 (입문자 영역은 깨끗).
- 출처 미부착이었던 직접 인용 4건에 모두 footnote 부착 완료.
- 모든 수정 후 → 빌드 가능 / 본문 흐름 변경 없음.

---

## §1 이번 주 이야기 — 통과
**상태**: ✓ PASS, 수정 없음
서사·동기 부여 섹션. 기술적 주장 없음.

## §2 왜 코딩을 배우는가? — 통과
**상태**: ✓ PASS, 수정 없음
철학적/동기 부여 섹션. 검증 대상 주장 없음.

## §3 컴퓨터란 무엇인가? — 인용 추가

### 초급 / 중급 — 통과
- "컴퓨터는 1초에 수십억 번 계산" → 현대 GHz 클럭 기반으로 합리적 근사. ✓
- CPU/RAM/저장장치 비유 — 일반 CS 지식. ✓

### 고급 — 인용 2건 추가
- **추가**: ASCII <code>'A' = 65 = 1000001₂</code>의 출처 명시 → `[2] Unicode Standard / U+0041`.
- **추가**: 직접 인용 "파이썬은 인터프리터 언어입니다…"의 footnote → `[1] tutorial/appetite.txt §1`.

## §4 프로그래밍 언어란? — 인용 1건 + 정확성 1건

### 초급
- "Hel" → `01001000 01100101 01101100` 검증 → H(72)/e(101)/l(108) 이진 변환 정확. ✓

### 중급 — 인용 추가
- WHY 박스의 "인터프리터는 대화형으로…" 직접 인용에 footnote 부착 → `[1]`.

### 고급 — 정확성 보강
- 기존: "파이썬은 ... PVM이 바이트코드를 한 줄씩 실행"
- 수정: "**CPython**(우리가 보통 쓰는 파이썬 구현체)은 …" + "PVM은 비공식 용어" 명시
- `.pyc` 파일명도 `module.cpython-3XX.pyc` 형식임을 PEP 3147 인용으로 명시 → `[3]`.

## §5 왜 파이썬인가? — 정확성 4건

### 초급
- C / Java / Python "Hello" 비교 코드 — 모든 언어 코드 정확. ✓

### 중급 — 정확성 1건 + 인용 2건
- **추가**: 1989년 12월 시작 사실의 출처 → `[4] Guido van Rossum, "A Brief Timeline of Python"`.
- **추가**: Zen of Python 인용 출처 → `[5] PEP 20`.
- **수정 (부정확 표현)**: "세미콜론이 없다" → "줄 끝에 세미콜론이 필요 없다"로 수정 + 한 줄에 여러 문장 시 사용 가능함을 각주로 부기.
- WHY 박스 Monty Python 인용에 footnote 부착 → `[1]`.

### 고급
- 6가지 핵심 특성 (인터프리터 / 고수준 자료형 / 동적 / 확장 / 표준 라이브러리 / 모든 것이 객체) — 모두 공식 문서와 일치. ✓
- "list/print/type 덮어쓰기" 코드 — 모든 동작 정확. ✓
- "TabError vs IndentationError" — Python 3에서 TabError가 정확하나 IndentationError 서브클래스이므로 합리적 단순화. 유지.

### 전공자 — 인용 2건
- **추가**: PyPy 4.2× 벤치마크 출처 → `[6] speed.pypy.org`.
- **수정**: PEP 발행 URL `github.com/python/peps` → `peps.python.org` (정식 발행 사이트, 소스는 GitHub).
- 4개 구현체 표 (CPython / PyPy / Jython / MicroPython) — 모두 사실 정확. ✓
- GIL 설명 (참조 카운팅 / Race Condition / Thread-Safety) — CPython 설계와 일치. ✓
- PEP 표 (3105 / 572 / 634 / 703 / 8) — 모두 PEP 번호 및 내용 정확. ✓

## §6 print() 함수 — **사실 오류 1건 수정** + 인용 1건

### 초급 / 중급 — 수정 1건 + 인용 1건
- 함수 시그니처 표시 `file=sys.stdout` → **`file=None`** (Python 공식 문서와 일치)<sup>※</sup>
- 표에 `file`, `flush` 행 추가 + "file=None은 sys.stdout을 의미"임을 명시.
- **추가**: 시그니처 출처 → `[8] library/functions.txt §1465`.
- 6개 흔한 실수 (대소문자 / 들여쓰기 / 따옴표 / str+int / sep / print() 빈괄호) — 모두 동작과 에러 메시지 정확. ✓
- 파이썬 2 → 3 이전 설명 — 정확. ✓

<sup>※ help(print)도 modern Python에서는 `file=None`으로 출력. §10의 help 출력 예시도 함께 수정.</sup>

### 고급
- `type(print) → builtin_function_or_method` ✓
- 일급 객체 / id() 활용 ✓

### 전공자 — **사실 오류 1건 수정** + 인용 1건
- **사실 오류 ❌**: PEP 3105의 저자를 "Guido van Rossum"으로 표기 → **Georg Brandl**로 수정.
  - 검증: PEP 3105의 "Author" 필드는 Georg Brandl <georg@python.org>. (귀도가 아님)
  - 수정 + footnote `[9]` 부착.
- `help(print)` 출력 예시: 옛 형식 → 최신 형식 (`file=None`) 으로 수정.
- 바이트코드 분해 (RESUME / PUSH_NULL / LOAD_GLOBAL / LOAD_CONST / CALL / POP_TOP) — Python 3.11+ 기준 정확. ✓
- CPython 내부 경로 (builtin_print → PyFile_WriteObject → PyObject_Str → tp_str) — `Python/bltinmodule.c` 실제 구현과 일치. ✓
- `Py_PRINT_RAW` 플래그 의미 (str() 사용) — 정확. ✓
- LEGB / `__builtins__` 자동 노출 — 정확. ✓

## §7 AI는 코딩을 어떻게 하는가? — **사실 오류 1건 수정**

### 초급 / 중급
- LLM 학습 데이터 / 패턴 매칭 / 할루시네이션 — 일반화된 LLM 동작 설명, 정확. ✓
- AI 할루시네이션 예시 (`age = input(...) + 10` → TypeError) — 정확한 예시. ✓
- 에러 메시지 "can only concatenate str (not 'int') to str" — Python 3.x 정확. ✓

### 고급
- 과거 vs AI 시대 개발자 비교 — 직업 환경에 대한 일반적 견해. ✓

### 전공자 — **사실 오류 1건 수정**
- **사실 오류 ❌**: "Python의 공식 문법은 Context-Free Grammar(CFG)로 정의됩니다"
  - 검증: Python 3.14 공식 문서 `reference/grammar.txt:21` 명시 — *"# PEG grammar for Python"*. PEP 617(2020)에 의해 Python 3.9부터 LL(1) 파서가 PEG(Parsing Expression Grammar)로 전환됨.
  - 수정: **"PEG(Parsing Expression Grammar)"로 변경** + Chomsky 계층 매핑이 깔끔하지 않다는 부기 추가.
  - footnote `[10] PEP 617` 부착.
  - "Grammar-Constrained Generation" 표의 "Python CFG"도 "Python 공식 문법(PEG)"으로 수정.
- BPE / tiktoken / next-token prediction (P(t_n | t_1, ..., t_{n-1})) — LLM 메커니즘 표준 설명, 정확. ✓
- Grammar-Constrained / Execution Feedback / Type Checking 3가지 접근 — 실제 연구 방향. ✓

## §8 컴퓨터는 print()를 어떻게 처리하는가? — 통과

### 메인 4단계 다이어그램
- 소스 → 파싱 → Built-in 네임스페이스 → stdout — 정확한 단순화. ✓

### 전공자 (Layer 0 ~ Layer 6)
- 6-layer 실행 스택 (소스 / 컴파일러 / PVM / TextIOWrapper / 시스템콜 / 커널 / 터미널) — 모두 사실 정확. ✓
- `io.DEFAULT_BUFFER_SIZE` Python 3.13(8KB) → 3.14(128KB), gh-117151 — CPython 변경 이력과 일치. ✓
- POSIX FD (0=stdin, 1=stdout, 2=stderr) ✓
- "python script.py 2>/dev/null" 셸 리디렉션 ✓
- 버퍼링 / 시스템콜 비용 / flush 메커니즘 — 정확. ✓

## §9 실습 + §10 REPL — 인용 1건

### §9 실습 — 통과
- Google Colab / python.org / Add to PATH / `python --version` — 모두 정확. ✓

### §10 REPL — 인용 추가 + 수정 1건
- **추가**: REPL 정의 직접 인용에 footnote 부착 → `[11] tutorial/interpreter.txt §77–80`.
- **수정**: `help(print)` 출력 예시의 시그니처를 `file=None`으로 통일 (§6와 일관성).
- "REPL = Read-Eval-Print Loop" — 정확. ✓
- repr() vs str() 차이 — 정확. ✓
- import this → Zen of Python (Tim Peters 저자) — 정확. ✓
- dis 모듈 / 4-stage 컴파일 파이프라인 (Tokenizer → PEG Parser → AST → Compiler → PVM) — 정확. ✓
- ast.dump() / compile() / co_consts / co_names 출력 — 모두 실제 출력과 일치. ✓
- tokenize 모듈 출력 — 정확. ✓

## §11 연습문제 (10문제) — 통과
**모든 문제의 코드와 정답이 실제 Python 동작과 일치.** ✓

| # | 유형 | 검증 결과 |
|---|---|---|
| 1 | 출력 예측 (초급) | ✓ `print()` 기본 줄바꿈 동작 |
| 2 | 출력 예측 (중급) | ✓ sep / end 매개변수 |
| 3 | 직접 구현 (초급) | ✓ `"=" * 20` 문자열 반복 |
| 4 | 직접 구현 (중급) | ✓ `print(..., sep="/")` |
| 5 | 버그 찾기 (중급) | ✓ unterminated string literal (Python 3.10+ 에러 메시지) |
| 6 | 왜 이럴까 (고급) | ✓ `print(print(...))` → "안녕…\nNone" |
| 7 | AI 프롬프트 챌린지 | ✓ 학습 활동, 검증 불필요 |
| 8 | AST 분석 (전공자) | ✓ Call 노드의 args / keywords 분리 |
| 9 | 바이트코드 비교 (전공자) | ✓ POP_TOP vs STORE_FAST |
| 10 | 파이프라인 추적 (전공자) | ✓ 4가지 에러의 감지 단계 |

## §12 정리 — 통과
모든 요약 항목이 본문과 일치. ✓

## §13 용어 사전 (27개) — 통과
- CPU, RAM, Interpreter, Compiler, Function, Parameter, Argument, Return Value, Object, Bytecode, PVM, Vibe Coding, None, REPL, Comment, Hallucination, Script Mode, dis 모듈, SyntaxError, CPython, GIL, PEP, AST, sys.stdout, File Descriptor, Reference Counting, __pycache__/.pyc — **모두 정확한 정의**. ✓

## §14 다음 주 맛보기 — 통과
서사 / 예고. 검증 대상 주장 없음. ✓

---

## 수정 요약

### 사실 오류 (Hard errors) — 2건
| # | 위치 | 기존 | 수정 후 | 출처 |
|---|---|---|---|---|
| 1 | §6 전공자 | "PEP 3105 (Guido van Rossum, 2006)" | "PEP 3105 (Georg Brandl, 2006)" | `[9]` PEP 3105 Author 필드 |
| 2 | §7 전공자 | "Python의 공식 문법은 Context-Free Grammar(CFG)로 정의됩니다" | "PEG(Parsing Expression Grammar)로 정의됩니다 — Python 3.9부터 PEP 617" | `[10]` PEP 617 / `reference/grammar.txt:21` |

### 정확성 보강 (Soft fixes) — 4건
| # | 위치 | 변경 |
|---|---|---|
| 1 | §4 고급 | "파이썬은…" → "**CPython**은…" + "PVM은 비공식 용어" 명시 + .pyc 파일명 형식 명확화 |
| 2 | §5 중급 | "세미콜론이 없다" → "줄 끝에 세미콜론이 필요 없다" + 사용 가능한 경우 부기 |
| 3 | §6 중급 | print() 시그니처 `file=sys.stdout` → `file=None` (공식 문서 일치) + 표에 file/flush 행 추가 |
| 4 | §10 중급 | help(print) 예시 출력의 시그니처를 `file=None`으로 통일 |
| 5 | §5 전공자 | PEP 발행 URL `github.com/python/peps` → `peps.python.org` |

### 신규 인용 (footnote markers) — 11건
모두 본문 해당 위치에 `<sup class="cite"><a href="#ref-N">[N]</a></sup>` 형태로 부착.

---

## 참고문헌 (week01 챕터 말미에 부착됨)

[1] Python 3.14 Tutorial — Ch.1 (Whetting Your Appetite)
[2] Unicode Standard / ASCII (U+0041)
[3] PEP 3147 — PYC Repository Directories
[4] Guido van Rossum, "A Brief Timeline of Python"
[5] PEP 20 — The Zen of Python
[6] PyPy Speed Center
[7] peps.python.org — PEP repository
[8] Python 3.14 Library Reference — `print()`
[9] PEP 3105 — Make print a function (Georg Brandl, 2006)
[10] PEP 617 — New PEG parser for CPython (van Rossum/Galindo/Nikolaou, 2020)
[11] Python 3.14 Tutorial — Ch.2.1.2 (Interactive Mode)

---

## 후속 작업 (저자 검토 후 결정)

- [ ] 표지·판권면에 더 추가할 메타데이터 (가격, 발행일 등) — 미정 결정 후
- [ ] Vibe Coding 용어의 출처 명시 (Andrej Karpathy, 2025) — 추가할지 결정
- [ ] 중급 비유들에 일반 CS 텍스트북 인용 추가 여부 — 학습 흐름 방해 여부 검토
- [ ] week02 검증 — 같은 프로세스로 진행
