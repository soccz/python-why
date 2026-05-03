# PyWhy 인용·식별자 정합성 검수 — 2026-05-02

**검증 대상**: `/mnt/20t/study/self_python/python-why/weeks/week01.html` ~ `week15.html`
**1차 출처**: `/mnt/20t/study/self_python/python-3.14-docs-text/` (Python 3.14 공식 문서) + peps.python.org

---

## 1. 검증 범위 요약

| 항목 | 개수 |
|---|---|
| 본문에 등장한 PEP 번호(고유) | 38개 |
| PEP 본문 문맥(중복 포함) 등장 | 약 60회 |
| CPython 식별자(고유) — 함수/구조체/슬롯/오프코드/매크로/소스경로 | 약 95개 |
| CPython 식별자 등장(중복 포함) | 약 220회 |

---

## 2. PEP 번호 정합성 표

(**출처**: `python-3.14-docs-text/whatsnew/*.txt` 및 `contents.txt`. 부재 시 peps.python.org 메타데이터.)

| PEP | 책 본문 주장 | 검증 결과 | 판정 |
|---|---|---|---|
| PEP 8 | "Style Guide" | 실재. `whatsnew/index.txt`/PEP 인덱스 일치 | OK |
| PEP 20 | Zen of Python | 실재. 인용 문구도 PEP 20 본문과 일치 | OK |
| PEP 202 | List Comprehensions, 2000년 도입(Python 2.0) | 실재. 책 본문 "2000년"·"PEP 202" 일치 (whatsnew/2.0.txt 본문) | OK |
| PEP 238 | Changing the Division Operator, 2001 / Python 2.2 `__future__` 도입 | `whatsnew/2.2.txt` PEP 238 섹션과 일치 | OK |
| PEP 255 | Simple Generators, Python 2.2 | `whatsnew/2.2.txt` "PEP 255: Simple Generators" 일치 | OK |
| PEP 274 | Dict Comprehensions, Python 2.7/3.0 도입 | 실재. **저자 표기 부정확**: 책 ref-2(week10) — "Barry Warsaw, Just van Rossum, Raymond Hettinger" → 실제 단일 저자(Barry Warsaw) | **P2** |
| PEP 285 | A Boolean Type, 2002 (Guido van Rossum), Python 2.3 | `whatsnew/2.3.txt` PEP 285 섹션과 일치 | OK |
| PEP 308 | Conditional Expressions, Python 2.5 | `whatsnew/2.5.txt` PEP 308 섹션과 일치 | OK |
| PEP 342 | New Generator Features, Python 2.5 | `whatsnew/2.5.txt` PEP 342 섹션과 일치 | OK |
| PEP 343 | The "with" Statement, Python 2.5 | `whatsnew/2.5.txt` 일치. **저자 일부 누락**: 실제 Guido van Rossum + Nick Coghlan (책 ref-4(week12)는 Guido만 표기) | **P2** |
| PEP 380 | Syntax for Delegating to a Subgenerator, Python 3.3 | `whatsnew/3.3.txt` 일치 | OK |
| PEP 393 | Flexible String Representation, Python 3.3 | `whatsnew/index.txt` 일치 | OK |
| PEP 456 | Secure and interchangeable hash algorithm, Python 3.4, 2013 | `whatsnew/3.4.txt` PEP 456 섹션 일치 (책 본문과 ref-2(week10) 모두 OK) | OK |
| PEP 479 | Change StopIteration handling inside generators, 2014 | 실재 | OK |
| PEP 484 | Type Hints, Python 3.5 / 2014 | `whatsnew/3.5.txt` 일치 | OK |
| PEP 487 | Simpler customisation of class creation, Python 3.6 | `whatsnew/3.6.txt` 일치. ref(week12) 저자 "Martin Teichmann" 정확 | OK |
| PEP 492 | Coroutines with async and await syntax, Python 3.5 | `whatsnew/3.5.txt` 일치 | OK |
| PEP 525 | Asynchronous Generators, Python 3.6 | `whatsnew/3.6.txt` 일치 | OK |
| PEP 526 | Variable annotation syntax, Python 3.6 | `whatsnew/3.6.txt` 일치 | OK |
| PEP 544 | Protocols, Python 3.8 | `whatsnew/3.8.txt` 일치 | OK |
| PEP 557 | Data Classes, Python 3.7 | 실재. ref(week14) 저자 "Eric Smith" 정확 | OK |
| PEP 560 | Core support for typing module / generics, Python 3.7 | 실재 | OK |
| PEP 563 | Postponed Evaluation of Annotations (`__future__`), Python 3.7 | 실재 | OK |
| PEP 572 | Assignment Expressions(walrus), Python 3.8, 2018 | 저자 "Chris Angelico, Tim Peters, Guido van Rossum" 정확 | OK |
| PEP 584 | Add Union Operators To dict, Python 3.9 | 저자 "Brandt Bucher, Steven D'Aprano" 정확 | OK |
| PEP 585 | Generics in Standard Collections, Python 3.9 | 실재 | OK |
| PEP 604 | `X \| Y` Union, Python 3.10 | 실재 | OK |
| PEP 617 | New PEG parser, Python 3.9 (3.10에서 구 파서 제거) | 저자 "Guido van Rossum, Pablo Galindo, Lysandros Nikolaou" 정확 | OK |
| PEP 634 | Structural Pattern Matching, Python 3.10 | 실재 | OK |
| PEP 649 | Deferred Evaluation Of Annotations Using Descriptors, Python 3.14 | **저자 과다 표기**: ref-7(week14)에 "Larry Hastings, Carl Meyer, Barry Warsaw, Eric V. Smith, Mark Shannon, Jelle Zijlstra"로 기재. `whatsnew/3.14.txt`는 "PEP 649 was written by Larry Hastings"라고 명시 → 단일 저자가 정확. (Carl Meyer/Barry Warsaw/Eric V. Smith/Mark Shannon/Jelle Zijlstra는 PEP 649 저자 아님. Jelle Zijlstra는 PEP 749 저자.) | **P1** |
| PEP 659 | Specializing Adaptive Interpreter, Python 3.11, 2021 | 저자 "Mark Shannon" 정확 | OK |
| PEP 695 | Type Parameter Syntax, Python 3.12, 2023 | `whatsnew/3.12.txt` 일치 (Eric Traut) | OK |
| PEP 703 | Making the GIL optional in CPython, Python 3.13+ opt-in | 저자 "Sam Gross" 정확 | OK |
| PEP 709 | Inlined comprehensions, Python 3.12 | 실재 | OK |
| PEP 749 | Implementing PEP 649, Python 3.14 | 저자 "Jelle Zijlstra" 정확 (`whatsnew/3.14.txt`) | OK |
| PEP 3105 | Make print a function, Python 3.0, 2006 | 저자 "Georg Brandl" 정확 | OK |
| PEP 3107 | Function Annotations, Python 3.0 | `whatsnew/3.0.txt` 일치 | OK |
| PEP 3147 | PYC Repository Directories, Python 3.2, 2009 | 저자 "Barry Warsaw" 정확 | OK |

### PEP 결과 합계
- 검증한 고유 PEP: **38개**
- 일치(OK): **36개**
- 부분 불일치(P2 — 저자 누락/중간 길이): **2개** (PEP 274, PEP 343)
- 명백한 오류(P1 — 저자 과다 표기): **1개** (PEP 649)

---

## 3. CPython 식별자 정합성 표

(**출처**: `python-3.14-docs-text/library/dis.txt`, `c-api/*.txt`, `whatsnew/*.txt`, `howto/descriptor.txt`, CPython source tree.)

### 3.1 옵코드 (Bytecode Instructions)

| 식별자 | 책 위치 | 검증 | 판정 |
|---|---|---|---|
| `RESUME`, `LOAD_CONST`, `LOAD_FAST`, `LOAD_GLOBAL`, `LOAD_NAME`, `LOAD_ATTR`, `LOAD_DEREF`, `STORE_FAST`, `STORE_NAME`, `STORE_GLOBAL`, `STORE_DEREF`, `STORE_SUBSCR`, `POP_TOP`, `POP_JUMP_IF_FALSE`, `POP_JUMP_IF_TRUE`, `POP_JUMP_IF_NONE`, `JUMP_FORWARD`, `JUMP_BACKWARD`, `BINARY_OP`, `BINARY_SUBSCR`, `BINARY_SLICE`, `UNARY_NOT`, `RETURN_VALUE`, `FOR_ITER`, `GET_ITER`, `MAKE_FUNCTION`, `CALL`, `CALL_FUNCTION`, `COPY_FREE_VARS`, `LOAD_CLOSURE`, `LOAD_FAST_AND_CLEAR`, `LOAD_FAST_CHECK`, `LOAD_SUPER_ATTR`, `MAP_ADD`, `LIST_APPEND`, `SET_ADD`, `YIELD_VALUE`, `POP_EXCEPT` | weeks 01–15 | `library/dis.txt`에 모두 등재 | OK |
| `JUMP_IF_FALSE_OR_POP`, `JUMP_IF_TRUE_OR_POP` | week05 | 책이 "3.12에서 제거됨"이라고 명시 — 정확 | OK |
| `JUMP_ABSOLUTE` | week08 | 책이 "3.11+에서 JUMP_BACKWARD로 변경"이라고 명시 — 정확 | OK |
| `BINARY_ADD` | week15 | 책이 "Python 3.11 이하에서는 …" 명시 — 정확 | OK |
| `RETURN_CONST` | week03/05/07 | Python 3.12에서 도입, **3.14에서 제거** (`whatsnew/3.14.txt`: "RETURN_CONST opcode is removed"). 책은 dis 출력 예에 그대로 사용 — 3.14 기준 책이라면 안내 필요 | **P2** |
| `BINARY_SUBSCR_LIST_INT`, `BINARY_SUBSCR_DICT`, `CALL_PY_EXACT_ARGS` | week06 | `whatsnew/changelog.txt` 등재 — 실재 | OK |
| `BINARY_OP_INT/FLOAT` (요약 표기) | week07 ref-3 | 실제 PEP 659 특화 옵코드는 `BINARY_OP_ADD_INT`, `BINARY_OP_MULTIPLY_INT` 등 연산별로 분리. "BINARY_OP_INT/FLOAT"는 실재 옵코드명이 아닌 축약 표현 | **P2** |
| `LOAD_SPECIAL`, `LOAD_SMALL_INT` | week12 | `whatsnew/3.14.txt` 일치 | OK |
| `BEFORE_WITH` | week12 | 3.11 도입, 3.14 제거 — 책이 정확히 명시 | OK |
| `CALL_INTRINSIC_1` | week12 | 실재 (3.12 도입) | OK |

### 3.2 함수 / 매크로 / 슬롯

| 식별자 | 책 위치 | 검증 | 판정 |
|---|---|---|---|
| `tp_iter`, `tp_iternext`, `tp_call`, `tp_repr`, `tp_str`, `tp_richcompare`, `tp_dealloc`, `tp_as_number`, `tp_as_sequence`, `tp_as_mapping` | weeks 02–15 | CPython type slot 표준 — 실재 | OK |
| `tp_compare` | week04 | "Python 2의 tp_compare와 달리"로 정확히 역사 표기 — 실재(Py2) | OK |
| `nb_add`, `nb_subtract`, `nb_multiply`, `nb_true_divide`, `nb_bool` | week04 | `PyNumberMethods` 표준 슬롯 — 실재 | OK |
| `sq_length`, `mp_length`, `mp_subscript` | week06/04 | `PySequenceMethods`/`PyMappingMethods` 표준 — 실재 | OK |
| `PyObject`, `PyTypeObject`, `PyVarObject_HEAD_INIT`, `PyObject_HEAD`, `PyObject_VAR_HEAD` | weeks 02–15 | C API 매크로 — 실재 | OK |
| `PyListObject`, `PyTupleObject`, `PyDictObject`, `PyDictKeysObject`, `PySetObject`, `PyLongObject`, `PyFloatObject`, `PyCodeObject`, `PyFunctionObject`, `PyGenObject`, `PyCellObject`, `PyFrameObject` | weeks 02–15 | `Include/cpython/*.h` 등재 | OK |
| `PyASCIIObject`, `PyCompactUnicodeObject` | week02 | `Include/cpython/unicodeobject.h` 실재 (PEP 393 컴팩트 표현) | OK |
| `_PyInterpreterFrame` | week06 | 3.11+ frame 구조 — 실재 (`Include/internal/pycore_frame.h`) | OK |
| `_PyLongValue` | week02 | 3.12+ `Include/cpython/longintrepr.h` 일치 | OK |
| `_PyType_Lookup` | week13 | `howto/descriptor.txt`에 등재 — 실재 | OK |
| `_PyErr_Clear`, `_PyErr_ExceptionMatches`, `_PyRuntimeState` | weeks 06–15 | CPython internal API 실재 | OK |
| `PyObject_Str`, `PyObject_IsTrue`, `PyObject_RichCompare`, `PyObject_Hash`, `PyObject_DelItem`, `PyNumber_Add`, `PyNumber_AsSsize_t`, `PyDict_SetItem`, `PyList_GET_ITEM`, `PyList_GET_SIZE`, `PyArg_UnpackTuple`, `PyIndex_Check`, `PyLong_FromLong`, `PyFile_WriteObject`, `PyErr_Clear`, `PyErr_ExceptionMatches`, `PyExc_StopIteration`, `PyExc_IndexError`, `PyBool_Type`, `PyLong_Type` | weeks 01–15 | 모두 C API에 실재 | OK |
| `PyOS_Readline` | week03 | `Parser/myreadline.c`에 실재 (관련 함수 `PyOS_ReadlineFunctionPointer`도 존재) | OK |
| `Py_BEGIN_ALLOW_THREADS` | week15 | `Include/ceval.h` 실재 매크로 | OK |
| `PyFrame_FastToLocalsWithError`, `PyFrame_LocalsToFast` | week03 | `c-api/frame.txt` 등재. 단 **3.13+에서 효력 제거(no-op)** — 책 본문은 효력 변화를 별도로 안내하지 않음 | **P2** |

### 3.3 소스 파일 경로

| 경로 | 등장 위치 | 검증 | 판정 |
|---|---|---|---|
| `Python/ceval.c` | weeks 01–15 | 실재 (메인 평가 루프) | OK |
| `Python/bytecodes.c` | week02 | 3.12+ DSL — `whatsnew/changelog.txt` 등재 | OK |
| `Python/specialize.c` | week02 | PEP 659 특화 코드 — 실재 | OK |
| `Python/flowgraph.c` | week08 | 3.12+ — 실재 | OK |
| `Python/bltinmodule.c`, `Python/ceval_gil.c`, `Python/dtoa.c`, `Python/pyhash.c`, `Python/ast_opt.c` | weeks 03–15 | 모두 CPython tree에 실재 | OK |
| `Objects/listobject.c`, `Objects/tupleobject.c`, `Objects/dictobject.c`, `Objects/setobject.c`, `Objects/longobject.c`, `Objects/floatobject.c`, `Objects/boolobject.c`, `Objects/unicodeobject.c`, `Objects/iterobject.c`, `Objects/enumobject.c`, `Objects/rangeobject.c`, `Objects/frameobject.c`, `Objects/codeobject.c`, `Objects/funcobject.c`, `Objects/typeobject.c`, `Objects/genobject.c`, `Objects/cellobject.c`, `Objects/genericaliasobject.c`, `Objects/abstract.c`, `Objects/object.c` | weeks 02–15 | 모두 실재 | OK |
| `Include/object.h`, `Include/cpython/longintrepr.h`, `Include/cpython/listobject.h`, `Include/cpython/tupleobject.h` | weeks 02–06 | 모두 실재 | OK |

### CPython 식별자 결과 합계
- 검증한 고유 식별자: **약 95개**
- 일치(OK): **92개**
- 부분 불일치(P2): **3개** (`RETURN_CONST` 3.14 제거 미고지, `BINARY_OP_INT/FLOAT` 비표준 축약, `PyFrame_FastToLocalsWithError/LocalsToFast` 3.13+ no-op 미고지)
- 명백한 오류(P1): **0개**

---

## 4. 발견된 오류 종합

### P1 (즉시 수정 필요 — 정확성 오류)

1. **week14.html ref-7 — PEP 649 저자 과다 표기**
   - 현재: "Larry Hastings, Carl Meyer, Barry Warsaw, Eric V. Smith, Mark Shannon, Jelle Zijlstra"
   - 정정: **"Larry Hastings"** (단독 저자)
   - 근거: `python-3.14-docs-text/whatsnew/3.14.txt` — *"**PEP 649** was written by Larry Hastings."*
   - 다른 이름들은 PEP 649의 저자가 아니다. Jelle Zijlstra는 PEP 749의 저자.

### P2 (출판 전 일괄 정비)

2. **week10.html ref-2 — PEP 274 저자 과다 표기**
   - 현재: "Barry Warsaw, Just van Rossum, Raymond Hettinger"
   - 정정: **"Barry Warsaw"** (단독 저자)

3. **week10.html ref-2 본문 보조설명 — PEP 274 범위 표현**
   - 현재: "set/dict 컴프리헨션 추가"
   - 정정 권고: PEP 274의 명시적 범위는 **dict 컴프리헨션 한정**. set 컴프리헨션은 같은 시기(2.7/3.0)에 별도로 추가됨

4. **week12.html ref-4 — PEP 343 저자 누락**
   - 현재: "Guido van Rossum"
   - 정정: **"Guido van Rossum, Nick Coghlan"**

5. **week03.html — `PyFrame_FastToLocalsWithError()` / `PyFrame_LocalsToFast()` 3.13+ 효력 변화 미고지**
   - 함수 이름·존재는 정확하지만 Python 3.13에서 호출은 no-op (`whatsnew/3.13.txt`)
   - "3.12까지의 메커니즘" 또는 "3.13+에서는 fast/locals 단일화" 등 한 줄 보충 권고

6. **week03/05/07 — `RETURN_CONST` 3.14 제거 미고지**
   - dis 출력 예에 `RETURN_CONST` 사용. Python 3.14에서 제거(`LOAD_SMALL_INT`로 대체).
   - PyWhy가 Python 3.14 기준 책이라면, "3.12–3.13에서 관찰" 또는 3.14 출력 예시로 갱신 권고

7. **week07.html ref-3 — PEP 659 특화 옵코드 명칭 축약**
   - 현재: "FOR_ITER_LIST/RANGE/TUPLE/GEN, BINARY_OP_INT/FLOAT 등"
   - 권고: 실제 옵코드명은 `BINARY_OP_ADD_INT`, `BINARY_OP_MULTIPLY_INT` 등 연산자별로 분리됨. "BINARY_OP_INT/FLOAT 계열"로 표현하거나 실제 명을 한두 개 예시.

---

## 5. 결론

- **PEP 인용**: 38개 PEP 모두 번호·존재성·도입 Python 버전·연도는 정확. 일부 PEP의 **저자 표기**에서 1건의 P1(과다)과 2건의 P2(과다·누락)가 발견됨.
- **CPython 식별자**: 95개 중 명백한 오타·허구 식별자는 0건. 단, **Python 3.14 시점의 변경(제거/no-op)을 반영하지 않은 표현 3건**이 P2로 분류됨.
- **종합 판정**: 핵심 사실(PEP 번호·CPython 자료구조·소스 파일 경로)는 매우 안정적. 저자 표기 정밀도와 3.14 시점 동기화가 후속 정비 항목.

**다음 액션**: 위 P1 1건을 즉시 HTML 패치하고, P2 6건을 출판 전 일괄 정비 사이클에 포함.
