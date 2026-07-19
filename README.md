# kyj5482.github.io — 1인 스타트업

> **생각은 내가, 완성은 AI가.** 20년차 플랫폼 개발자의 1인 스타트업 실험을 기록하는 블로그입니다.
>
> 🌐 https://kyj5482.github.io · 📮 뉴스레터: [Newsletter 탭](https://kyj5482.github.io/newsletter/) · 🏊 앱: [SplitLane](https://github.com/kyj5482/swim.meet.timer)

## 이 레포가 돌아가는 방식

이 블로그의 모든 글은 **Claude Code 에이전트가 초안을 만들고, 내가 검수해서 발행**합니다.
전략·로드맵·콘텐츠 시스템은 [`_branding/`](_branding/) 폴더에 있습니다 (사이트에는 노출되지 않는 운영 문서).

| 하고 싶은 것 | 방법 |
|-------------|------|
| 새 글 발행 | Claude Code에 `_branding/README.md`의 프롬프트로 요청 → `_posts/`에 초안 생성 → 검수 → main 머지 시 자동 배포 |
| 전략/로드맵 확인 | [`_branding/01-brand-strategy.md`](_branding/01-brand-strategy.md) · [`02-roadmap-2026-2028.md`](_branding/02-roadmap-2026-2028.md) |
| 이번 주 쓸 주제 고르기 | [`_branding/04-topic-backlog.md`](_branding/04-topic-backlog.md) (L1 입문 주제부터) |
| 내가 할 일 확인 | [`_branding/05-checklist.md`](_branding/05-checklist.md) |

## 구조

```
_posts/      발행 글 (YYYY-MM-DD-제목.md, Chirpy front matter)
_tabs/       About · Projects · Newsletter 등 고정 페이지
_branding/   브랜딩 전략·로드맵·콘텐츠 시스템 (비공개 아님, 단 사이트 미노출)
_config.yml  사이트 설정 (제목·소셜·아바타·GA)
```

글 카테고리: `[Developing]` 기술 · `[Building]` 앱 개발 일지 · `[Swim Parent]` 수영 부모 · `[Startup]` 1인 스타트업

---

## ✍️ 블로그 글은 어떻게 퍼즐과 연결되나 (직접 쓰기·수정용)

블로그 글은 **읽어 내려갈수록 상단 이미지가 3×3 조각으로 완성되는 퍼즐 리딩** 방식입니다.
그런데 `.md` 파일만 보면 어디가 퍼즐과 연결되는지 안 보입니다. 핵심은 이것 하나입니다:

> **글 자체는 그냥 마크다운이고, 퍼즐 효과는 맨 위 두 줄이 자동으로 붙여준다.**
> 이미지 한 장만 지정하면 `puzzle.js`가 알아서 3×3으로 쪼개 스크롤에 맞춰 보여준다.

### 글 파일 해부 (한 편이 이렇게 생겼다)

```markdown
---
title: 글 제목
author: maple
description: 목록·검색에 뜨는 한 줄 요약
date: 2026-08-10 09:00:00 +0900
categories: [Developing]        # 카테고리 1개
tags: [tag1, tag2]
---                              # ← 여기까지가 front matter (메타데이터)

<div class="puzzle-hero" data-img="/assets/img/posts/슬러그.svg"><div class="pz-inner"></div></div>
<script defer src="/assets/js/puzzle.js"></script>
      ▲ 이 두 줄이 "퍼즐 연결부"다. data-img 의 이미지가 퍼즐 그림이 된다.
        이미지만 바꾸면 퍼즐도 바뀐다. 조각 쪼개기·스크롤 연동은 전부 자동.

<div class="pz-q">❓ <b>시작 질문</b> — 질문?<span>안내문</span></div>
      ▲ 파란 질문 박스. 글 전체가 이 질문 하나에 답하는 구조다.

## 🧩 조각 1 — 소질문?
본문. **핵심 한 문장은 굵게.**
      ▲ 그냥 마크다운 소제목이다. 퍼즐 조각과 1:1로 매칭되는 건 아니고,
        "읽은 분량"에 비례해 조각이 열린다 (조각 3~4개 = 이미지 9조각을 나눠서 공개).

> 💡 **개념 — 용어**
> 비유 + 정의.
> 📖 더 보기: [출처](https://…)
      ▲ 인용문(>)이 💡로 시작하면 자동으로 "개념 카드" 스타일(시안 박스)이 입혀진다.

## 🧩 마지막 조각 — 완성된 그림
시작 질문의 최종 답.

<div class="takeaway"><b class="tk-title">🎁 이 글에서 가져갈 것</b>
<ul><li><b>키워드</b>: 독자가 오늘 할 행동</li></ul>
</div>
      ▲ 이 HTML 블록이 초록 "가져갈 것" 박스가 된다.
```

### 어떤 파일이 무엇을 하나

| 파일 | 역할 | 내가 건드릴 일 |
|------|------|----------------|
| `_posts/YYYY-MM-DD-슬러그.md` | 글 내용 | **여기만 쓰면 된다.** 위 구조대로 |
| `assets/img/posts/슬러그.svg` | 퍼즐이 될 이미지 (16:9) | 글마다 한 장. 없으면 에이전트에게 요청 |
| `assets/js/puzzle.js` | 스크롤→조각 공개 로직 | **건드릴 필요 없음** (한 번 만들어 둠) |
| `assets/css/…chirpy.scss` | 퍼즐·개념카드·가져갈것 스타일 | 건드릴 필요 없음 |

### 직접 쓰거나 고칠 때 규칙 (3가지만)

1. **맨 위 `puzzle-hero` 두 줄 + `data-img` 경로**를 그대로 두고, 이미지 파일명만 글 슬러그와 맞춘다.
2. **front matter에 `image:` 필드는 넣지 않는다** — 퍼즐 히어로가 대표 이미지를 대신한다 (넣으면 이미지가 두 번 나옴).
3. **개념 카드**는 `> 💡`로 시작하는 인용문, **가져갈 것**은 `<div class="takeaway">` HTML — 이 형식을 지켜야 스타일이 붙는다.

> 📘 조각 준비법(5칸 표), 복붙용 템플릿, 개념 카드 사전, 포맷 체크리스트는
> **[`_branding/07-puzzle-writing-guide.md`](_branding/07-puzzle-writing-guide.md)** 에 전부 있다. 새 글은 여기서 시작.

---

## 🪨 Obsidian으로 주제 노트 쓰고 → 블로그로 연결하기

평소 **Obsidian에서 아이디어·주제를 메모**하고, 준비되면 그 노트를 블로그 글로 발행하는 흐름입니다.

### 최초 1회 설정
1. Obsidian에서 **이 저장소 폴더를 Vault로 열기** (`Open folder as vault` → 이 repo 선택).
2. `_notes/` 폴더가 작업 공간이다. (언더스코어 폴더라 **블로그에는 발행되지 않는다** — 초안·아이디어 보관용)
3. (선택) Obsidian **Git 플러그인**을 설치하면 메모가 자동으로 커밋·푸시된다.

### 평소 흐름
```
_notes/topics/     주제·아이디어 노트를 자유롭게 (Obsidian [[위키링크]]로 서로 연결)
_notes/templates/  퍼즐 글 템플릿 (새 노트 만들 때 복사)
        │
        │  "이 노트를 글로 발행해줘"
        ▼
_posts/            에이전트가 front matter·퍼즐 두 줄·이미지 붙여 완성 → 검수 → 발행
```

- Obsidian **그래프 뷰**로 주제들이 어떻게 연결되는지 한눈에 볼 수 있다 — 사이트의 [탐구 지도](https://kyj5482.github.io/#history)와 같은 발상이다.
- 노트끼리는 `[[다른 노트]]` 위키링크로 자유롭게 잇는다. **발행 시 에이전트가 위키링크를 실제 블로그 링크로 변환**한다.

### 발행 요청 (에이전트에게)
```
_notes/topics/(노트파일) 을 블로그 글로 발행해줘.
_branding/00-history-source.md, 01, 07 을 근거로 퍼즐 형식으로 만들고,
[[위키링크]]는 해당 글이 있으면 실제 링크로, 없으면 일반 텍스트로 바꿔줘.
히어로 이미지도 만들어줘.
```

> 자세한 사용법과 예시 노트: **[`_notes/README.md`](_notes/README.md)**

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve   # http://127.0.0.1:4000
```

배포는 main 브랜치 푸시 시 GitHub Actions(`.github/workflows/jekyll.yml`)가 자동으로 수행합니다.

## 관련 프로젝트

[swim.meets](https://github.com/kyj5482/swim.meets) · [swim.capsule](https://github.com/kyj5482/swim.capsule) · [SwimVault](https://github.com/kyj5482/swim.meet.portfolio) · [SplitLane](https://github.com/kyj5482/swim.meet.timer)

테마: [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (MIT)
