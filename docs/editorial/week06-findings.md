# week06 편집 검수 — 발견 + 수정 기록

> 6주차: 리스트와 튜플 — 여러 값을 담는 컨테이너
> PDF: 68쪽

## 페이지별 기록

### p.01-02 — 챕터 디바이더 + 목차
🟢 PASS — 부제 "여러 값을 담는 컨테이너" 1줄.

### p.03-09 — Hook + 핵심 질문 + 컨테이너 + 시퀀스 분류
🟢 PASS — Mutable/Immutable Sequences 정확. Python docs (library/stdtypes) 인용 [1].

### p.10-14 — 리스트 생성 + 얕은/깊은 복사 + 인덱싱/수정
🟢 PASS — copy.deepcopy 시연 정확.

### p.15-19 — 리스트 메서드 + sort vs sorted + 시간 복잡도
🟢 PASS — Tim Peters Timsort 인용 [4]. O(n log n) Average/Worst.

### p.20-25 — 슬라이싱 + Part A (BINARY_SLICE Python 3.12+ 최적화)
🟢 PASS — Python 3.12+ BINARY_SLICE 단일 명령어 vs 3.11 BUILD_SLICE+BINARY_SUBSCR 비교 정확.

### p.26-30 — 튜플 — 변경 불가능한 이유 + PyListObject vs PyTupleObject 비교표
🟢 PASS — CPython 메모리 구조 비교 정확. 빈 튜플 () 싱글톤.

### p.31-35 — 튜플 사용처 + 언패킹 (Extended Unpacking *)
🟢 PASS — *rest 패턴 정확.

### p.36-40 — 컴프리헨션 도입 + 함정 (소괄호=제너레이터) + Part A (PEP 709 Python 3.12 인라인)
🟢 PASS — PEP 709 [3] Python 3.12 인라인 컴프리헨션 정확.

### p.41-45 — 컴프리헨션 vs for vs map + AI와 리스트/튜플 + Part A (tracemalloc 메모리 프로파일링)
🟢 PASS — LIST_APPEND 바이트코드 + tracemalloc 활용.

### p.46-50 — 실습 + 연습문제 1~3
🟢 PASS.

### p.51-60 — 연습문제 4~10 (전공자 3 포함)
🟢 PASS — 리스트 회전 / Timsort / PEP 709 검증 등.

### p.61-67 — 이번 주 정리 + 용어 사전 (22개) + 다음 주 맛보기
🟢 PASS.

### p.68 — 참고문헌 [1]~[5]
🟢 PASS — Python docs / sorting HOWTO / PEP 709 / Tim Peters Timsort / CPython source — 모두 1차 출처.

---
**총 68쪽**. BLOCKING 없음. 출판 가능 수준 ✅

---

## 재검수 추가 발견 (2026-05-02)

### P1 — p.18 sys.getsizeof 출력값 오류
"Part A (계속): PyListObject의 동적 할당 — allocated vs ob_size" 코드 출력 결과:
```
항목 17개: 312 bytes ← resize 발생! (16 → 24슬롯)
```
실제 Python 3.12.9에서 측정: 항목 17개 → **248 bytes** (16 → 24슬롯). 본문에 인용된 과할당 공식
`((newsize) + (newsize >> 3) + 6) & ~3` 으로도 newsize=17일 때 17+2+6=25, &~3=24슬롯이며
56(헤더) + 24×8(포인터) = **248 bytes**가 정답. "312 bytes"(=32슬롯에 해당)는 잘못된 숫자.
→ HTML 수정 필요: `312 bytes` → `248 bytes`.

### P2 — p.61 전공자10(PEP 709) 페이지 브레이크 공백
p.60 마지막의 "전공자 10 — PEP 709 인라인 컴프리헨션 검증" 정답 코드박스가 p.60→p.61로
넘어가면서 p.61 상단에 코드 일부만 붙어 있고, 이후 페이지 70% 이상이 빈 공간으로 남고
좌측에 박스 테두리(주황·녹·보라 컬러 보더)만 잔재처럼 표시됨. 시각적으로 어색.
→ `print.css`의 `page-break-inside`/`break-inside: avoid` 또는 박스 분할 정책 점검 필요.

기타 P1 없음. 정확성·인용 정합성·코드 출력값 (위 1건 제외) 전부 확인 완료.
