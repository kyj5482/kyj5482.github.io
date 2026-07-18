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

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve   # http://127.0.0.1:4000
```

배포는 main 브랜치 푸시 시 GitHub Actions(`.github/workflows/jekyll.yml`)가 자동으로 수행합니다.

## 관련 프로젝트

[swim.meets](https://github.com/kyj5482/swim.meets) · [swim.capsule](https://github.com/kyj5482/swim.capsule) · [SwimVault](https://github.com/kyj5482/swim.meet.portfolio) · [SplitLane](https://github.com/kyj5482/swim.meet.timer)

테마: [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (MIT)
