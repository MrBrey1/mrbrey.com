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

Official artist links, the focus single and campaign YouTube IDs are centralized in:

`src/data/media.ts`

The YouTube integration lives in:

`src/lib/youtube.ts`

The gallery attempts to load the latest videos from the official YouTube channel and falls back to the saved archive if YouTube is temporarily unavailable.

## SEO

The project includes:

- canonical metadata
- Open Graph / Twitter metadata
- structured data for Mr Brey and “Se Me Pega”
- sitemap
- robots.txt
- web manifest

## Deployment

The site is connected to Vercel. Pull requests receive preview deployments and GitHub Actions validates lint + production build before changes are merged into `main`.
