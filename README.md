# Savitrix Limited — Corporate Website

Public-facing website for **Savitrix Limited**, the parent company behind [CounselCA](https://counselca.com), [LawNest](https://lawnest.co), and other vertical SaaS ventures.

Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to Vercel and point **savitrix.com** to the project:

```bash
npm run build
```

## Structure

| Path | Purpose |
|------|---------|
| `src/app/` | Next.js App Router pages & layout |
| `src/components/` | Interactive UI sections |
| `src/lib/brands.ts` | Portfolio data (add new ventures here) |

## Adding a new venture

Edit `src/lib/brands.ts` and add an entry to the `brands` array with name, tagline, URL, category, and accent color.
