# week15 검증 리포트

> 15주차: 동시성 & 비동기 프로그래밍 — 기다리지 않는 코드

**검증일**: 2026-05-01

| 지표 | 수치 |
|---|---|
| 사실 오류 | 0 ✓ |
| 신규 인용 | 8 |
| PDF 페이지 | 59 |

## 검증 핵심
- GIL = Global Interpreter Lock ✓
- sys.getswitchinterval() = 0.005s default ✓
- PEP 703 (Sam Gross, Python 3.13+) ✓
- Greg Stein 1999 free threading 시도 ✓
- Biased Reference Counting ✓
- threading vs multiprocessing trade-offs ✓
- PEP 255/342/380/492/525 coroutine evolution ✓
- async def / await / asyncio.run ✓
- gather vs create_task ✓
- epoll/kqueue/IOCP I/O multiplexing ✓
- C10K problem ✓
- fork vs spawn vs forkserver ✓

## 인용
[1] PEP 703 · [2] Guido "It Isn't Easy to Remove the GIL" · [3] asyncio docs · [4] PEP 492 · [5] PEP 380 · [6] threading/multiprocessing docs · [7] C10K · [8] CPython source

## 산출물
PDF: 59쪽, 1.95MB
