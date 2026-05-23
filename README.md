# Vishal Ambilkar — Portfolio

Premium AI developer portfolio built with React, Vite, and Tailwind CSS v4.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Production build (single `dist/index.html` file) |
| `npm run preview` | Preview the production build locally |

## Customize

### Links (GitHub, LinkedIn, Gmail)

Edit **`src/content.ts`** — set `email`, `github`, and `linkedin`. Handles on the contact cards update automatically.

### Images (from your device)

1. Copy your photos into **`public/images/`** (see `public/images/README.md` for filenames).
2. Refresh the dev server — images are served at `/images/...` and included when you deploy.

Update copy and project details in `src/components/` as needed.

## Deploy

After `npm run build`, upload **`dist/index.html`** to any static host (GitHub Pages, Netlify, Vercel, etc.). The build inlines CSS and JS into one file for easy hosting.
