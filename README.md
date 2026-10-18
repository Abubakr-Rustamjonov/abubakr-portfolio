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

> **Placeholders to replace:** the GitHub/LinkedIn URLs and the three sample projects
> are examples only. Update them before sharing the link.

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
│   ├── components/   # Nav, Hero, Marquee, Work, About, Contact, Footer
│   │   ├── Reveal.tsx       # scroll-triggered fade-up wrapper
│   │   ├── SplitText.tsx    # masked word-by-word headings
│   │   ├── Tilt.tsx         # 3D pointer tilt + glare
│   │   ├── Magnetic.tsx     # pointer-magnet buttons
│   │   ├── Cursor.tsx       # trailing cursor ring
│   │   └── ScrollProgress.tsx
│   ├── hooks/useReducedMotion.ts
│   ├── data/profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
└── vite.config.ts
```

## Motion

All motion is hand-built with CSS and small React hooks — no animation library.

- **Kinetic hero** — per-letter 3D entrance, pointer-reactive gradient field, drifting orbs,
  and scroll parallax/fade.
- **Scroll progress** — a gradient bar tracks reading progress above the nav.
- **Masked headings** — words slide up out of a mask when each section enters view.
- **3D project cards** — tilt toward the pointer with a moving glare and a floating glyph.
- **Magnetic buttons** — primary links pull gently toward the cursor.
- **Trailing cursor** — a soft ring lags behind the pointer and expands over links.
- **Rotating badge** — the contact section carries a continuously orbiting availability seal.

The motion layer is opt-in where it makes sense: pointer effects only run on fine pointers,
and every effect is disabled under `prefers-reduced-motion`.

## Accessibility & performance

- Semantic landmarks, skip link, visible focus states, `aria-hidden` on decoration.
- Split headings expose their full text via `aria-label`; the hero has a screen-reader-only
  headline so animated letters never garble the page outline.
- `prefers-reduced-motion` disables reveals, kinetic type, cursor, tilt, orbs and marquee.
- Animations use transform/opacity, with scroll and pointer work batched into
  `requestAnimationFrame`; system font fallbacks and CSS-only visuals keep the payload light.
