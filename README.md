# Домашняя 3D-печать: интерактивный курс

Next.js-приложение с локальными типизированными данными по домашней 3D-печати: курс, каталог принтеров, материалы, программы, глоссарий, диагностика, чеклисты и FAQ.

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## PWA-проверка

PWA-слой работает в production-режиме. Для статического билда:

```bash
npm run build
npm run start
```

В проекте есть генерируемый `manifest.webmanifest`, `public/sw.js`, PNG-иконки 192/512, maskable icon и offline fallback `public/offline.html`.

## GitHub Pages

Проект настроен под `next export` через `output: "export"`. После `npm run build` статические файлы находятся в `out/`.

Для обычного репозитория GitHub Pages нужен base path:

```bash
NEXT_PUBLIC_BASE_PATH=/repo-name npm run build
```

Для репозитория вида `username.github.io` base path оставьте пустым. Workflow `.github/workflows/pages.yml` делает это автоматически.

## Структура

- `app/` — маршруты Next.js App Router.
- `components/` — переиспользуемые UI-компоненты.
- `src/data/` — локальные данные курса, принтеров, материалов, ПО, FAQ и чеклистов.
- `src/types/` — TypeScript-типы предметной области.
- `lib/` — общие утилиты.

## Данные

Основой контента служит исследовательский отчет `deep-research-report (1).md`: материал переработан в главы, карточки, таблицы, фильтры и практические подсказки для новичков и продолжающих.
