# Abubakr — Portfolio

A fast, editorial-style personal portfolio built with **React**, **TypeScript** and **Vite**.
Dark, typographic, hand-written CSS — no UI framework, no runtime dependencies beyond React.

![Portfolio preview](https://img.shields.io/badge/status-ready%20to%20customize-ff5c35)

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

Requires Node.js 20+.

## Customize

Everything people read lives in one file: [`src/data/profile.ts`](src/data/profile.ts).

| Field | What it controls |
| --- | --- |
| `name`, `role` | Hero headline and footer |
| `email`, `socials` | Contact section and GitHub button |
| `lede`, `bio` | Hero intro and about copy |
| `projects` | Work cards (index, title, blurb, tags, link, year) |
| `skills`, `experience` | About panels |
| `marquee` | Scrolling technology strip |

> **Placeholders to replace:** the email address, GitHub/LinkedIn URLs, and the three
> sample projects are examples only. Update them before sharing the link.

Design tokens (colors, fonts, spacing) are at the top of [`src/styles.css`](src/styles.css).
Swap `--accent` to re-theme the whole site.

## Deploy to GitHub Pages

The repo ships with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push to `main`.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The next push builds and publishes to `https://<user>.github.io/<repo>/`.

`vite.config.ts` uses `base: './'`, so the same build also works on Netlify, Vercel,
Cloudflare Pages, or a custom domain without changes.

## Structure

```
├── public/favicon.svg
├── src/
│   ├── components/   # Nav, Hero, Marquee, Work, About, Contact, Footer, Reveal
│   ├── data/profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
└── vite.config.ts
```

## Accessibility & performance

- Semantic landmarks, skip link, visible focus states, `aria-hidden` on decoration.
- `prefers-reduced-motion` disables reveals, marquee and entrance animations.
- System font fallbacks, no images to download, CSS-only visuals.
