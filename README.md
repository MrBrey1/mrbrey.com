# mrbrey.com

Official website for **Mr Brey**, built with Next.js, React, TypeScript and Tailwind CSS.

## Main sections

- Home / focus single
- Spotify catalog
- Campaign videos
- Automatic YouTube gallery
- Artist biography
- Press / Radio EPK
- Professional contact and official social links

## Development

```bash
npm ci
npm run dev
```

Production validation:

```bash
npm run lint
npm run build
```

## Content configuration

Official artist links, the focus single, press assets and campaign YouTube IDs are centralized in `src/data/media.ts`.

The YouTube integration lives in `src/lib/youtube.ts`. The gallery attempts to load the latest videos from the official YouTube channel and falls back to the saved archive if YouTube is temporarily unavailable.

## Production readiness

The site includes canonical and social metadata, structured data, sitemap, robots.txt, web manifest, security headers, optimized Next.js image delivery, a branded 404 page, accessible focus states and reduced-motion support.

## Deployment

The site is connected to Vercel. Pull requests receive preview deployments and GitHub Actions validates lint + production build before changes are merged into `main`. CI also validates the production branch after merge.
