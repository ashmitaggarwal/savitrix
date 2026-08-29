# Savitrix — AI-Native Vertical SaaS Studio

Public website for **Savitrix Limited**, the parent company behind [CounselCA](https://counselca.com), [LawNest](https://lawnest.co), and other vertical SaaS ventures.

Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **React Flow** (`@xyflow/react`).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Modern AI theme** — deep space palette, cyan/violet gradients, neural grid background
- **Interactive portfolio graph** — React Flow ecosystem map of all ventures (click nodes for details)
- **Build pipeline visualization** — animated flow from discovery → iterate
- **AI capabilities section** — semantic search, document intelligence, agentic workflows

## Structure

| Path | Purpose |
|------|---------|
| `src/app/` | Next.js App Router pages & layout |
| `src/components/` | UI sections and React Flow graphs |
| `src/components/flow/` | Custom React Flow node types |
| `src/lib/brands.ts` | Portfolio data, stats, pipeline stages |

## Deploy

Deploy to Vercel and point **savitrix.com** to the project:

```bash
npm run build
```

## Adding a new venture

Edit `src/lib/brands.ts` and add an entry to the `brands` array. The portfolio graph picks it up automatically.
