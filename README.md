# Project Builder Kit

Project Builder Kit is a starter dashboard for tracking discounts, promotions, and marketing campaigns across multiple channels. It ships with ready-made UI components, routing, and Supabase-ready infrastructure so you can focus on product logic instead of setup.

## Project setup

1. Install dependencies: `npm install`
2. Start the dev server with hot reload: `npm run dev`
3. Build for production: `npm run build`
4. Preview the built output on a local server: `npm run preview`

Any push to your git remote is the canonical source of truth; sync your work before deploying.

## Tech stack

- Vite + React (App Router + BrowserRouter)
- TypeScript
- Tailwind CSS with shadcn-ui primitives
- Supabase & TanStack Query for data fetching
- Sonner + custom Toaster stack for notifications

## Structure highlights

- `src/pages/` - entry points for `/app`, `/admin`, and misc routes.
- `src/components/ui/` - shared UI primitives (cards, badges, toasts, etc.).
- `src/services/` - adapters for Supabase + custom hooks.
- `public/` - static assets and the new Open Graph image/favicon.

## Next steps

1. Update `src/services` with your real data sources.
2. Customize `public/og-image.svg` and `favicon.svg` to match your brand.
3. Run `npm run lint` or `npm test` before pushing to catch regressions.
