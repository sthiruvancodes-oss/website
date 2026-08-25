# Saison Thiruvananthaselvan

Personal site.

## Run locally

Node.js 22.12+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
pnpm build
pnpm preview
```

## Content

| File | What it controls |
| --- | --- |
| `src/data/resume.tsx` | Name, bio, work, education, projects, skills, social links |
| `src/data/config.ts` | Site URL, SEO, theme |
| `src/content/blog/*.mdx` | Blog posts |
| `public/me.png` | Profile photo |
| `public/` | Resume PDFs and other static files |

## Deploy

Hosted on Vercel. Push to `main` to publish.
