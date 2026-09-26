# Rocket Money Clone

This repository contains three versions of a Rocket Money-inspired personal finance dashboard:

- Next.js app: production-ready dashboard experience
- React + Vite app: lightweight SPA dashboard
- Static HTML/CSS/JS app: simple mockup you can open directly

## Project structure

```text
rocket-money-clone/
├─ README.md
├─ package.json
├─ .gitignore
├─ apps/
│  ├─ next-app/
│  ├─ react-app/
│  └─ static-app/
```

## Run locally

### 1) Next.js app

```bash
npm install
npm run dev --workspace next-app
```

Open: http://localhost:3000

### 2) React app

```bash
npm install
npm run dev --workspace react-app
```

Open: http://localhost:5173

### 3) Static app

```bash
cd apps/static-app
python -m http.server 8000
```

Open: http://localhost:8000

## Features included

- Monthly budget summary
- Subscription tracking
- Expense categories
- Cash flow chart cards
- Smart savings insights
- Dark fintech UI inspired by Rocket Money

## Notes

The apps intentionally use mock data to showcase the product design and UX, rather than connecting to a real banking or financial API.
