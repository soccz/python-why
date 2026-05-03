# week11~15 본문 각주 마커 자동 삽입 — 2026-05-03

## 결과 요약

| 주차 | 매칭 | 비고 |
|---|---|---|
| week11 | 6/6 (100%) | PEP 202·274·709·572·380, itertools 모두 본문 인용 위치 적중 |
| week12 | 6/6 (100%) | __new__·PEP 487·__enter__·functools 등 던더 메서드 단락에 정확 매칭 |
| week13 | 6/6 (100%) | Decorator·Alonzo Church·__closure__·CPython·Descriptor 모두 |
| week14 | 10/10 (100%) | 마지막 ref-7(PEP 649)/ref-8(Siek) 은 점진적 타입 단락에 그룹화 매칭 |
| week15 | 7/8 (88%) | **ref-5(PEP 380 yield from) 본문에 인용 위치 없음** → 마커 미삽입 |

**총 35/36 (97%) 자동 처리 완료.**

## week15 ref-5 — 저자 검토 필요

**ref-5**: Greg Ewing. *PEP 380 — Syntax for Delegating to a Subgenerator.* 2009.
→ peps.python.org/pep-0380/ (Python 3.3 `yield from`. 코루틴 위임의 기반)

**현황**: 본문에 `yield from`, `PEP 380`, `서브제너레이터`, `delegate` 모두 등장 X.
- 자동 매칭 시 가장 가까운 키워드 'Generator'가 매칭됐으나 컨텍스트가 "I/O 멀티플렉싱" 단락이라 의미적으로 무관 → 마커 제거하고 NO MATCH로 남김

**선택지** (저자 결정):

1. **본문에 yield from 언급을 추가** — 11주차에서 `yield from` 다뤘으니 15주차 코루틴 진화 단락에 한 줄 추가하고 마커 부착
2. **ref-5를 참고문헌에서 제거** — 본문이 PEP 380을 직접 활용하지 않는다면 참고문헌 정의도 불필요
3. **그대로 둠** — 참고문헌의 일부로만 (관련 자료 추천 형태)

권장: 옵션 1. asyncio가 yield from에서 발전한 역사라 한 줄로 충분히 이어짐.

## 자동 매칭 정확도 spot-check

| ref | 매칭 위치 | 평가 |
|---|---|---|
| week14 ref-7 (PEP 649) | "점진적 타입... Any 타입이 정적/동적 경계를 연결합니다." | ✅ 적절 (PEP 649가 어노테이션 지연 평가) |
| week14 ref-8 (Siek paper) | "Jeremy Siek의 2006년 논문... PEP 484를 설계할 때 직접 참조" | ✅ 정확 |
| week15 ref-5 (PEP 380) | "I/O 멀티플렉싱... 시스템 콜에 의존합니다" | ❌ 무관 (제거함) |

## 운영 정책

- 본 리포트는 자동화 + 1차 검수 결과
- 베타 reader 피드백 수집 후 ref 매칭 위치 미세조정 가능
- v1.x 빌드에서 새 ref 추가 시 [footnote_inject.py](/home/soccz/22tb/python-why-pdf/footnote_inject.py) 재실행 → MANUAL_HINTS만 보강
