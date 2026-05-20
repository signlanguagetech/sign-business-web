# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Business Context

This codebase supports a software engineering services business. The company works with clients to build, improve, customize, and extend software products during development.

The main offering is hands-on engineering support for client projects, especially in frontend, backend, and full-stack product development. This includes building new features, improving architecture, increasing code quality, fixing performance issues, and adapting the product to the client’s business needs.

The company does not only deliver software from scratch. It also joins existing client projects, works alongside internal teams, and helps move products forward faster with better engineering practices, stronger technical foundations, and production-ready implementation.

# What this product represents

This product is a service-business website and supporting codebase that presents the company’s capabilities and helps convert visitors into clients. The website should communicate technical credibility, clarity of services, trust, and the value of working with the team.

# Core service themes

- Build software for client projects.
- Enhance and customize software already in development.
- Collaborate directly with client teams.
- Improve architecture, maintainability, and performance.
- Deliver production-grade frontend, backend, and full-stack solutions.

# How to interpret changes in this codebase

When making changes, prioritize:
- Clear communication of services and technical expertise.
- Trust-building through professional presentation and consistency.
- Conversion-focused UX, especially around contact and consultation flows.
- Messaging that explains both implementation skill and business value.
- Flexibility to represent custom client work, ongoing collaboration, and software modernization.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`).

- `pnpm dev` — start Next.js dev server (Turbopack is the default in Next.js 16)
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — ESLint (config: `eslint-config-next`)

There is no test runner configured.

## Architecture

Next.js 16 (App Router) + React 19 + TypeScript marketing site. `app/` currently contains a single root `page.tsx` plus `not-found.tsx`, `layout.tsx`, `main.tsx`, and `globals.css` — there are no per-route subdirectories. Navigation links in `components/nav-links.ts` point to in-page anchors on the home page (`/#about`, `/#services`, `/#contact`), and `app/page.tsx` renders those as `<section id="…">` blocks (Hero, Services, Solutions Workflow, About/Values, Why Choose Us/Features, Contact). When adding a new "page", decide whether it should be a new section on the home page or a new route folder under `app/`, and update `nav-links.ts` accordingly.

Key structural pieces:

- **`app/layout.tsx`** — Root server layout. Wraps everything in `ThemeProvider` (next-themes, class attribute, system default) → `SidebarProvider` → `Header` + `Main`. Loads Geist Sans/Mono via `next/font`. Holds site-wide `Metadata` (title template, OG, Twitter) — `metadataBase`, `twitter.creator`, and OG image have TODO placeholders that must be replaced before production deploy.
- **`app/main.tsx`** — Client component wrapping page content. Reads `useSidebar()` to shift main content right (`md:ml-64`) when the sidebar opens on desktop, and renders the mobile backdrop. Page content is rendered as `children` between `<Sidebar />` and `<Footer />`.
- **`app/page.tsx`** — Single-page home (`'use client'`). Defines the `services`, `values`, and `features` arrays inline and renders each as a horizontally scrollable carousel paired with `CarouselControls`. If you add or remove items in these arrays, the pagination hook (`useCarouselPagination`) adapts automatically — no extra wiring needed.
- **`components/sidebar.tsx`** — Provides `SidebarProvider` context plus `useSidebar()`. The provider lives in the server `layout.tsx`, but consumers (Header toggle, `Main` margin shift) are client components.
- **`components/nav-links.ts`** — Single source of truth for navigation entries used by both `Header` and `Sidebar`. Entries are anchor links into `app/page.tsx` sections.
- **`components/service-card.tsx`, `feature-card.tsx`, `testimonial-card.tsx`** — Presentation cards consumed by the home page sections. Use these (not raw `Card` primitives) when adding entries to keep visual consistency.
- **`components/carousel-controls.tsx` + `hooks/useCarouselPagination.ts`** — Carousel system. The hook attaches a `ref` to a horizontally scrollable container, infers step size from the first child's width + column gap, and exposes `{ ref, active, pages, scrollBy, scrollTo }`. `CarouselControls` renders prev/next buttons and dot pagination from that state. The controls are commonly hidden on `md+` (`className="md:hidden"`) when the underlying layout switches from carousel to grid.
- **`hooks/useRotatingList.tsx`** — Helper for cycling through a list of values (e.g. rotating hero copy). Available for new sections that need timed rotation.
- **`components/contact-form.tsx`** — Client-side contact form (uses `zod` for validation; no backend submission endpoint is wired up — submission handling is a TODO).

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss`. Global tokens and `@theme inline` mapping live in `app/globals.css` (no `tailwind.config.js`). `tw-animate-css` is imported there.
- Custom theme tokens defined in `globals.css`: extra colors (`--primary-44`, `--primary-100`), custom easing functions (`--ease-back-in-out`, `--ease-back-out`, `--ease-back-in`, `--ease-curve-sidebar`), and extra radius scale (`--radius-2xl/3xl/4xl`). Reuse these (e.g. `ease-[var(--ease-back-in-out)]`) instead of introducing new ad-hoc easings or colors.
- Custom utility: `scrollbar-hide` (declared via `@utility` in `globals.css`) — apply to horizontally scrollable carousel containers to suppress the scrollbar.
- **shadcn/ui** (style: `new-york`, base color: `neutral`, RSC enabled). Generated components go to `components/ui/` (current set: `avatar`, `badge`, `button`, `card`, `dropdown-menu`, `sheet`). **Tailwind class prefix is `tw-`** (configured in `components.json`) — any `shadcn add` output and any utilities intended to match shadcn primitives must use the `tw-` prefix. Most existing hand-written components in `components/` use unprefixed Tailwind classes; preserve the style of the file you are editing.
- Path aliases (`tsconfig.json` + `components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils` (exports `cn`), `@/hooks`.

### Images

`next.config.ts` only whitelists `placehold.co` for `next/image` remote patterns. Add new hosts there before referencing them.

### Code style

Prettier (`.prettierrc`): single quotes, semis, 2-space indent, trailing comma `all`, `arrowParens: avoid`.
