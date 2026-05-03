# PyWhy — 출판 메타데이터 시트

> ISBN/Gumroad 등록 + 검색엔진 노출용 메타데이터를 한 곳에 모음.
> 비즈니스 결정(가격·발행연월)은 H0NG 확인 후 채움.

---

## 기본 정보

| 항목 | 값 |
|---|---|
| **제목** | PyWhy — 공식 문서로 분해하는 파이썬 사고법 |
| 영문 제목 | PyWhy: Decomposing Python with Official Documentation |
| 부제 | 공식 문서로 분해하는 파이썬 사고법 |
| 영문 부제 | A Why-Driven Python Curriculum from CPython Internals |
| 저자 (한글) | H0NG |
| 저자 (영문) | H0NG |
| 발행자 | 1인 출판 (TBD: 1인출판사 등록) |
| 판형 | B5 (176 × 250 mm) |
| 본문 분량 | 991쪽 (PDF v1.0) |
| 본문 분량 (대략) | 약 1,000쪽 |
| 형식 | PDF (디지털 전자책) |
| 언어 | 한국어 (코드/용어 영문 병기) |
| 분류 (KDC) | 005 — 컴퓨터과학 |
| 분류 (DDC) | 005.133 — Specific programming languages |
| 분류 (Dewey) | 005.13 — Programming languages |
| 대상 독자 | 컴퓨터·소프트웨어 전공 학부 1–4학년, 비전공 백엔드 전환자, 현직 백엔드 개발자 |

## 비즈니스 (H0NG 확인 대기)

| 항목 | 제안 | 결정 |
|---|---|---|
| 가격 (정가) | 29,900원 | TBD |
| 가격 (할인 기간) | 19,900원 (출시 첫 2주) | TBD |
| 무료 미리보기 범위 | week01 전체 (65쪽 PDF) | TBD |
| 발행 연월 | TBD | TBD |
| Gumroad 정산 | PayPal 사업용 또는 Stripe Atlas | TBD |
| 도메인 | soccz.github.io/python-why/ | TBD |

## ISBN (한국 — 무료, 국립중앙도서관)

> **신청 시점**: 100부 판매 후 (CLAUDE.md 정책). 그때 아래 정보로 양식 채움.

| 항목 | 값 |
|---|---|
| 발행 형태 | 전자책 (PDF) — ISBN 13자리 (978-89- 또는 979-11- prefix) |
| 발행자 / 출판사 | TBD (1인출판사 등록 필요) |
| 발행지 | 대한민국 |
| 첫 5단어 본문 발췌 | "코딩을 배우기 전에, 먼저" |
| 키워드 | 파이썬, Python, CPython, 바이트코드, AST, 인터프리터, 타입 힌트, asyncio |

## 검색엔진 (이미 적용됨)

- ✅ JSON-LD Schema.org `Book` (index.html)
- ✅ Open Graph (og:type, og:title, og:description, og:image, og:locale=ko_KR)
- ✅ Twitter Card (summary_large_image)
- ✅ Canonical URL
- ✅ keywords meta
- ✅ author + alternate hreflang

## 디자인 자산

| 자산 | 경로 | 상태 |
|---|---|---|
| 표지 (앞) | `book/cover.html` + `css/print.css` `.book-cover` | ✅ 완성 (Py/Why 컬러 분할 + 비트 패턴 + LEGB 모티브) |
| 표지 (뒤) | `book/back-cover.html` | ✅ 완성 (헤드라인 + 4지표 + 3컬럼 차례 + 인용) |
| 챕터 디바이더 | `css/print.css` `.week-header` | ✅ 강화 완료 (원 그라디언트 + 4레벨 점 + ? 워터마크) |
| Open Graph 이미지 | `assets/og-card.png` | TBD (1200×630 제작 필요) |
| 파비콘 | `assets/favicon.svg` | ✅ |

## 통계 (PyWhy v1.0 기준)

| 항목 | 수치 |
|---|---|
| 총 페이지 수 | 991쪽 |
| PDF 파일 크기 | 7.9 MB |
| 주차 수 | 15 |
| 코드 블록 | 660+ |
| 다이어그램 (SVG) | 19개 |
| 색인 항목 (한글) | 115 |
| 색인 항목 (영문) | 263 |
| 인용 PEP | 38개 |
| 인용 CPython 식별자 | 95+ |
| 4단계 학습 시스템 | 초급/중급/고급/전공자 |

## 출판 전 최종 체크리스트

- [x] 모든 주차 페이지별 검수 (15주차)
- [x] 코드 결정적 출력값 검증 (660개 블록 자동 + 12개 핵심 직접)
- [x] PEP/CPython 식별자 인용 정합성 (38 + 95)
- [x] AI 흔적 제거 (HTML/PDF 메타/footer)
- [x] 한국어 조사 자동 교열 (158건)
- [x] 표지 / 뒷표지 / 챕터 디바이더 강화
- [x] 책 차원 색인 (한글/영문 2단 컬럼)
- [x] 통합 PDF 빌드 (PyWhy_v1.pdf)
- [x] 무료 미리보기 PDF (PyWhy_preview_week01.pdf)
- [x] SEO 메타 (JSON-LD + OG + Twitter Card)
- [ ] 베타 리더 5–10명 사전 배포 (저자 영역)
- [ ] 가격/발행연월 확정 (저자 영역)
- [ ] Open Graph 이미지 1200×630 제작
- [ ] Gumroad 페이지 카피라이팅
- [ ] 추천사 1–3건 확보
