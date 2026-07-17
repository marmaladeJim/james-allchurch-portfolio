# James Allchurch Portfolio

Next.js 15 App Router + Tailwind CSS 4 portfolio based on the approved desktop and mobile mockups.

## Features
- Responsive home, Work and About pages
- 12 statically generated project detail pages
- Vimeo showreel embed: `425431968`
- Full-card translucent rollover overlays on desktop
- Touch-friendly always-visible overlays on mobile
- Next.js metadata and image optimization
- Square corners and warm off-white `#F8F7F3` background

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Before publishing
1. Replace the placeholder LinkedIn URL in `components/footer.tsx`.
2. Replace the generated SVG artwork under `public/projects/` with real project thumbnails, keeping the same filenames or updating `data/projects.ts`.
3. Change `metadataBase` in `app/layout.tsx` to your final domain.
4. Update project descriptions and services in `data/projects.ts`.

## Deploy
Push the folder to GitHub, import the repository into Vercel, and use the default Next.js settings. Vercel detects Next.js automatically.
