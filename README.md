# React Homework

Учебный проект на React + Vite: задания по JSX, условиям, функциям, формам, данным, компонентам и хукам.

## Разработка

```bash
npm install
npm run dev
```

Dev-сервер поднимается на [http://localhost:3000](http://localhost:3000). `npm start` — алиас для `npm run dev`.

## Сборка

```bash
npm run build
```

Готовая статика появляется в папке `dist`. Базовый путь для продакшена — `/ppp/` (GitHub Pages), для локальной разработки — `/`. Настроено в `vite.config.js`.

Посмотреть production-сборку локально:

```bash
npm run preview
```

## Структура

- `src/App.jsx` — маршруты и общий макет страницы;
- `src/navigation.js` — список заданий, группы и ссылки на уроки;
- `src/Header.jsx`, `src/Header.css` — шапка и раскрывающийся список заданий;
- `src/index.css` — глобальные стили;
- `src/dz/**` — задания, сгруппированные по темам.
