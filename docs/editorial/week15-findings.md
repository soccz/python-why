# week15 편집 검수 — 발견 + 수정 기록

> 15주차: 동시성 & 비동기 프로그래밍 — 기다리지 않는 코드
> PDF: 49쪽

## 페이지별 기록

### p.01-02 — 표지 + 목차 (13섹션)
🟢 PASS — 부제 "기다리지 않는 코드". 웹 서버 1000 요청 동시 처리 동기 부여 / threading/multiprocessing/asyncio 세 도구 차이 / GIL 존재 이유 / await가 무엇을 기다리는가. 13섹션 4레벨 표기.

### p.03 — §01 이번 주 이야기, §02 시작
🟢 PASS — 카페 직원 비유 (커피 기다리지 않고 다음 주문 받음). 동기 vs 비동기 코드 비교 — `result1 = fetch_from_api(...)` 4초 vs `await asyncio.gather(...)` ~2초. 세 도구 학습 명시.

### p.04 — §02 동시성 vs 병렬성 — 초급
🟢 PASS — 요리사 비유 (1명 vs 3명). fetch 3개 순차 3초 → "1초로 줄일 수 있지 않을까?" 동기 부여. 동시성 ≠ 병렬성 명료 — 동시성 "구조" / 병렬성 "실행 방식".

### p.05 — §02 중급(I/O-bound vs CPU-bound), 전공자 Part B(OS 이론)
🟢 PASS — I/O-bound (웹/파일/DB) → threading/asyncio / CPU-bound (이미지/암호화/ML) → multiprocessing. 가장 흔한 실수 ("CPU-bound에 threading 쓰면 GIL 때문에 오히려 느려짐"). Part B 동시성 모델 역사 — 프로세스(1960s Multics) → 스레드(1980s Mach) → 이벤트 루프(1990s Tcl/Tk) → 코루틴(2000s Lua/Python). 선점형(Preemptive, threading) vs 협력형(Cooperative, asyncio await). Rob Pike 인용 ("Concurrency is not parallelism").

### p.06-08 — §03 GIL — 핵심 비유(화장실 열쇠), 중급(GIL 정의), 고급(GIL 풀리는 순간)
🟢 PASS — 화장실 열쇠 비유 (메모리 1개, 열쇠 1개, 직원 3명 — 열쇠 가진 사람만 사용). 다이어그램 (Thread 1 GIL 보유 / Thread 2,3 대기, 5ms마다 GIL 전환 — `sys.getswitchinterval() = 0.005` 정확). count_up(50_000_000) 단일 0.97초 vs 2개 스레드 0.89초 (8% 빠름) — GIL 때문에 병렬 효과 거의 없음 정확. GIL 핵심 (참조 카운팅 안전 / C 확장 호환성 / PEP 703 (Python 3.13+) GIL 선택적 비활성화 진행 중) 정확. GIL 풀리는 경우 — I/O / `Py_BEGIN_ALLOW_THREADS` / NumPy 행렬 연산. io_task sleep 동안 GIL 해제 → 3초 → ~1초.

### p.09 — §03 전공자 Part A(GIL의 CPython 구현) + Part B(역사) + §04 시작
🟢 PASS — `_PyRuntime` 구조체 + `gilstate` 필드 + `PyThread_acquire_lock` / `PyThread_release_lock` (drop_gil/take_gil 함수). Python 3.11에서 GIL 구조 개선 (BPO-1856 GIL을 PyInterpreterState로 이동). Part B GIL 30년 — 1990 Python 1.0 단일 스레드 가정 / 1996 Greg Stein 논문 free threading 시도 → 실패 (싱글 스레드 성능 저하) / 2007 Greg Stein "It Isn't Easy to Remove the GIL" Artima Blog [2] / 2023 PEP 703 Sam Gross — Biased Reference Counting으로 단일 스레드 성능 손실 최소화 → Python 3.13+ 실험적 지원.

### p.10-12 — §04 threading 초급(기본)/중급(Lock/Race)/고급(daemon)
🟢 PASS — threading.Thread 3개 + start/join → 1초. counter += 1 Race condition (5만이 안 나옴) → Lock으로 보호 (with lock). threading.RLock/Semaphore/Event/Barrier/queue.Queue 도구. daemon=True (메인 종료 시 함께 종료) — "finally/`__exit__`이 실행되지 않을 수 있음" 정확.

### p.12-13 — §04 전공자 Part A(threading.Thread CPython 구현) + §05 시작
🟢 PASS — Linux pthread_create / Windows _beginthreadex 래핑. PyThreadState. LOAD_GLOBAL/STORE_FAST 단일 바이트코드는 GIL 덕분에 원자적, `counter += 1`은 LOAD_GLOBAL 0 (counter) → LOAD_CONST 1 (1) → BINARY_OP 13 (+=) → STORE_GLOBAL 0 (counter) 4개 명령어 — Python 3.11 이하 BINARY_ADD 정확. 분점(Branch Office) 비유 — multiprocessing은 각자 사무실 + 자체 GIL.

### p.13-15 — §05 multiprocessing 중급(Pool)/고급(Queue 통신)
🟢 PASS — `from multiprocessing import Pool` + `pool.map(heavy_computation, numbers)` — 4프로세스로 ~4배 빠름. multiprocessing 비용 (직렬화/PICKLE 필요, 프로세스 생성 무거움). pool.map/apply_async/imap/starmap 메서드. Process + Queue producer/consumer 패턴.

### p.16 — §05 전공자 Part A(fork vs spawn) + §06 시작
🟢 PASS — fork (Linux 기본, os.fork() 부모 복제, 빠름, 스레드+fork 데드락 위험) / spawn (Windows/macOS 기본, 새 인터프리터, 느림, pickle 직렬화) / forkserver (안전+빠름). `multiprocessing.get_start_method()` / `set_start_method('spawn')`. 카페 직원 비유 — Event Loop 1명이 효율 관리.

### p.16-17 — §06 asyncio 초급(async/await 기본)
🟢 PASS — `async def greet(name)` 코루틴 정의 / `await asyncio.sleep(1)` 양보. `result = greet("철수")` 직접 호출 → 코루틴 객체만 생성 (실행 안 됨, type = `<class 'coroutine'>`) — 반드시 await 또는 asyncio.run() 정확.

### p.17-19 — §06 중급(await 양보), 고급(이벤트 루프 동작)
🟢 PASS — task A(2초)/B(1초)/C(3초) gather → 2+1+3=6 아닌 3초 정확. asyncio.sleep vs time.sleep — time.sleep은 이벤트 루프 통째로 멈춤(동기) / asyncio.sleep은 양보. 이벤트 루프 의사코드 (ready_callbacks 실행 → selector.select(timeout) → 완료 이벤트 콜백 등록 → 타이머 확인) 정확. asyncio = OS의 I/O 멀티플렉싱 (Linux: epoll, macOS: kqueue, Windows: IOCP) 정확. 다이어그램 — Task A 실행 중 / Task B I/O 대기 / Task C 준비됨 / Event Loop / OS 알림 / 콜백 큐 / 스케줄된 타이머. asyncio.wait_for 타임아웃 (TimeoutError).

### p.20-21 — §06 전공자 Part A(코루틴 진화 PEP 역사) + Part B(I/O 멀티플렉싱)
🟢 PASS — PEP 255 (Python 2.2) yield 도입 / PEP 342 (Python 2.5) send()/throw() 양방향 / PEP 380 (Python 3.3) yield from 위임 [5] / PEP 492 (Python 3.5) async def/await 네이티브 코루틴 [4] / PEP 525 (Python 3.6) 비동기 제너레이터. cr_frame/cr_code/cr_origin 속성 + `send(None)` 재개. Part B select(2)/poll(2)/epoll(7)/kqueue 비교 — fd_set 1024 제한, O(n) → O(1). C10K 문제 (동시 1만 연결, Dan Kegel 1999 [7]).

### p.21-24 — §07 gather/create_task 중급, 고급(TaskGroup/wait/cancel/Queue)
🟢 PASS — gather (모든 결과 한 번에) / create_task (백그라운드 즉시 실행). TaskGroup (Python 3.11+) — 한 task 예외 시 나머지 모두 취소 (gather는 첫 예외만 전파, return_exceptions=True 없으면). asyncio.wait FIRST_COMPLETED + 나머지 cancel. cancel은 즉시 X — 다음 await 지점에서 CancelledError, except에서 정리 후 raise 필수. asyncio.Queue producer/consumer (코루틴 안전, 스레드 안전 X 정확).

### p.25-27 — §08 async for/async with — 고급, 전공자 Part A(De-sugaring) + §09 시작
🟢 PASS — async_range 비동기 제너레이터 + `async for num in async_range(0, 5)`. AsyncDB `__aenter__`/`__aexit__` (DB 연결/해제 시뮬). De-sugaring — `async for item in iterable:` = `_iter = aiter(iterable); item = await anext(_iter)` until StopAsyncIteration. ThreadPoolExecutor/ProcessPoolExecutor — `with ThreadPoolExecutor(max_workers=5) as executor: list(executor.map(download, urls))`.

### p.28-29 — §09 concurrent.futures 중급(Future/as_completed), 고급(run_in_executor)
🟢 PASS — Future + as_completed (완료 순서대로 처리) — A:3초/B:1초/C:2초 → B/C/A 순. `concurrent.futures` = threading/multiprocessing 통합 인터페이스. max_workers 기본값 — ThreadPoolExecutor `min(32, os.cpu_count() + 4)` (Python 3.13+ `min(32, (os.process_cpu_count() or 1) + 4)`) / ProcessPoolExecutor `os.cpu_count()` (3.13+ `os.process_cpu_count()`) 정확. `loop.run_in_executor(executor, blocking_io, "A")` — 동기 함수를 비동기로 래핑.

### p.30-31 — §10 언제 무엇을 — 중급(판단 표), 고급(성능 비교), 전공자 Part A(스레드 vs 코루틴 메모리)
🟢 PASS — 표 (asyncio: API 수천 동시 호출 / threading or asyncio: 파일 10개 / multiprocessing: 이미지 100장 / run_in_executor: 동기 라이브러리 + asyncio / concurrent.futures: 통합 API). Flask/Django는 WSGI(동기) 기반, FastAPI/Starlette는 ASGI(비동기) 정확. Django 3.1+ async 뷰 도입 정확. 100 I/O 작업 비교 — 순차 10초 / threading ~0.2초 / asyncio ~0.1초. Part A — OS 스레드 ~8MB (Linux 기본 스택), 코루틴 ~100~200바이트. 1만 스레드 = ~80GB 가상 메모리 vs 1만 코루틴 = ~2MB. C10K 해결.

### p.32 — Part B(구조화된 동시성) + §11 시작
🟢 PASS — Dijkstra 1968 goto vs if/while/for 비교 — Martin Sústrik 2016 / Nathaniel J. Smith 2018 Trio "구조화된 동시성" 원칙 정확. Python `asyncio.TaskGroup` (3.11+) — Kotlin coroutineScope/Java 21 StructuredTaskScope 동일 패턴. AI LLM API 동시 호출 비유 도입.

### p.32-33 — §11 AI와 동시성 — LLM 5개 동시 호출 (5×2초=10초 → ~2초), FastAPI + AI 패턴
🟢 PASS — `async def call_llm(prompt, delay=2)` + `gather(*[call_llm(p) for p in prompts])` 5×2초=10초 → ~2초. FastAPI `@app.post("/chat")` async def chat → 1000명 동시 호출 단일 프로세스에서 처리 (asyncio 덕분). AI 시대의 동시성 — `time.sleep`과 `asyncio.sleep` 혼용 금지, await 빼뜨리는 실수 주의.

### p.33-34 — §12 실습 비동기 웹 크롤러
🟢 PASS — `async def fetch_page(url, delay=0.5)` + `async def parse(html)` + `async def crawl(urls)` 1단계 동시 다운로드 (gather) + 2단계 동시 파싱 (gather). 10개 URL 동시 처리.

### p.35-40 — 연습문제 1~10 (초급/중급/고급)
🟢 PASS — 1.countdown 코루틴 / 2.gather로 say 3개 동시 / 3.threading 기본 (3개 스레드 ~2초) / 4.Lock으로 Race Condition 해결 (10×100_000 = 1_000_000 항상) / 5.ThreadPoolExecutor + as_completed (i^2 계산) / 6.create_task (백그라운드 다운로드, 다른 작업 가능 표현) / 7.wait_for 타임아웃 (빠른API 성공/느린API 타임아웃!/중간API 성공) / 8.async 제너레이터 fibonacci 100 미만 / 9.AsyncTimer `__aenter__`/`__aexit__` (실행 시간 ~1.000초) / 10.asyncio.Queue producer + 2 consumer.

### p.41-43 — 연습문제 11~13 (전공자)
🟢 PASS — 11.run_in_executor로 동기 → 비동기 변환 (asyncio.to_thread Python 3.9+ 사용 — 정확) / 12.GIL switch interval 실험 (sys.getswitchinterval) — CPU-bound 1/2/4 스레드 성능 측정 (GIL 때문에 빨라지지 않음). 13.코루틴 내부 상태 — type(coro) `<class 'coroutine'>`, cr_frame/cr_running False/cr_code.co_name 'example'. dis.dis(example) 바이트코드 GET_AWAITABLE/SEND. send(None) 수동 구동 → StopIteration.value 결과. close() 정리.

### p.44-47 — §13 요약/용어집 32개
🟢 PASS — 핵심 개념 7개 표 (동시성/병렬성/GIL/threading/multiprocessing/asyncio/concurrent.futures + 비유 + 적합 상황). 용어 32개 — 동시성/병렬성/I/O-bound/CPU-bound/GIL/Thread/Process/코루틴/이벤트 루프/await/asyncio.run/gather/create_task/TaskGroup/Queue/wait_for/Lock/Race Condition/Deadlock/daemon/ThreadPoolExecutor/ProcessPoolExecutor/Future/run_in_executor/epoll/kqueue/선점형/협력형/PEP 703/구조화된 동시성/async for/async with/C10K. 정의 정확.

### p.48 — 커리큘럼 완료!
🟢 PASS — 15주 회고 — 1~4주 Python 기초 / 5~8주 자료구조와 함수 / 9~10주 심화 자료구조 / 11~12주 함수형+OOP / 13~14주 고급 패턴 / 15주 동시성. "AI가 생성하는 코드를 검증하고 수정할 수 있는 역량" 강조.

### p.49 — 참고문헌 [1]~[8]
🟢 PASS — [1] Sam Gross PEP 703 (Making the Global Interpreter Lock Optional in CPython, 2023, Python 3.13+ `--disable-gil`, Biased Reference Counting). [2] Guido van Rossum "It Isn't Easy to Remove the GIL" (Artima Blog, 2007, 1999 Greg Stein 자유 스레딩 시도와 실패의 회고). [3] Python 3.14 Library Reference asyncio (asyncio.run/gather/create_task/Future/Queue/wait_for). [4] Yury Selivanov PEP 492 (Coroutines with async and await syntax, 2015, Python 3.5 네이티브 — async def/await 도입). [5] Greg Ewing PEP 380 (Syntax for Delegating to a Subgenerator, 2009, Python 3.3 yield from). [6] Python 3.14 Library Reference threading/multiprocessing/concurrent.futures (Thread/Lock/RLock/Semaphore/Event/Condition, Process/Pool/Queue/Pipe). [7] Dan Kegel "The C10K Problem" (1999, last updated 2014, kegel.com/c10k.html — 동시 1만 연결 역사적 도전). [8] CPython source — Python/ceval_gil.c (drop_gil/take_gil), Modules/_threadmodule.c, Modules/_multiprocessing/, Modules/_asynciomodule.c, Lib/asyncio/. github.com/python/cpython — GIL/스레드/프로세스/asyncio 1차 출처. `sys.getswitchinterval()` 기본 0.005초. URL 접속일 2026-05-01.

---

## 미세 레이아웃 메모 (P3급)
- p.04, p.07, p.12, p.15, p.20, p.26, p.30, p.33, p.43, p.46, p.48 등 박스/표 하단 큰 여백 (페이지 브레이크). 가독성 자체는 문제 없음.

---
**총 49쪽**. BLOCKING 없음. 출판 가능 수준 ✅
