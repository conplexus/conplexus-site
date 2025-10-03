# 🌐 Conplexus Website

This repository powers the official website for **Conplexus LLC** —
a technology and consulting company building tools that connect
**informatics, pharmacy practice, and continuous quality improvement**.

🌐 Live site: https://conplexus.com

---

## Quick start — local development

Prerequisites

- Node.js 18+ (LTS recommended)
- npm (recommended) — pnpm/yarn are optional; adapt commands if you use them

Install dependencies

```powershell
npm ci
```

Run the dev server (PowerShell)

```powershell
npm run dev
# open http://localhost:3000
```

Build for production

```powershell
npm run build
npm run start
```

Useful scripts

- `npm run dev` — start Next.js in development mode
- `npm run build` — compile a production build
- `npm run start` — start the production server (after build)
- `npm run lint` — run Next/Eslint checks
- `npm run typecheck` — run TypeScript type check (no emit)

---

## Project structure

- `src/app` — Next.js App Router pages and layout
- `src/components` — UI components (Header, Footer, Sidebar, etc.)
- `public` — static assets (icons, images, og images)

---

## Contributing

Small contributions and doc fixes are welcome. Suggested workflow:

1. Fork or create a branch from `main` with a descriptive name (e.g., `fix/readme`)
2. Make changes, run `pnpm dev` and `pnpm lint` locally
3. Open a PR with a short description and link to any related issue

If you'd like CI or other automation added, open an issue or request it in the PR.

---

## Deployments

The site is deployed on Vercel (conplexus.com). Connect the GitHub repository to Vercel for previews on PRs.

---

## Notes / TODO

- Consider adding a GitHub Actions workflow to run lint, typecheck, and build on PRs
- Add Prettier + lint-staged for consistent formatting

---

## Analytics (GA4) — opt-in

This site uses Google Analytics 4 (GA4) only when a visitor explicitly opts in. Analytics are
loaded dynamically after consent and can be revoked at any time via the "Analytics settings"
control in the site footer.

Environment variable

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — set this to your GA4 Measurement ID (looks like `G-XXXXXXX`).
  - Locally: create a `.env.local` at the repo root with:

```powershell
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX
```

    - On Vercel: add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the project Environment Variables (Preview and Production as needed).

Testing the opt-in flow

- Start the dev server: `npm run dev` and open the site in an Incognito window.
- The consent banner will prompt for analytics. Accepting will inject the GA script (no data sent until enabled).
- To verify: open DevTools → Network, filter by `gtag` or `googletagmanager.com/gtag/js` to see the script load. You can also watch console logs for analytics enable/disable messages.

Privacy and data collected

- We only collect aggregated, non-identifying analytics such as page views, referral sources, and basic event data to help improve the site. No PII is intentionally collected by our analytics setup.
