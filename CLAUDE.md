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

- `pnpm dev` — start Next.js dev server with Turbopack
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — ESLint (config: `eslint-config-next`)

There is no test runner configured.

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript marketing site. Routes under `app/` are static pages: `about/`, `contact/`, `portfolio/`, `services/`, plus root `page.tsx`.

Key structural pieces:

- **`app/layout.tsx`** — Root server layout. Wraps everything in `ThemeProvider` (next-themes, class attribute, system default) → `SidebarProvider` → `Header` + `Main`. Loads Geist Sans/Mono via `next/font`. Holds site-wide `Metadata` (title template, OG, Twitter) — `metadataBase`, `twitter.creator`, and OG image have TODO placeholders that must be replaced before production deploy.
- **`app/main.tsx`** — Client component wrapping page content. Reads `useSidebar()` to shift main content right (`md:ml-64`) when the sidebar opens on desktop, and renders the mobile backdrop. Page content is rendered as `children` between `<Sidebar />` and `<Footer />`.
- **`components/sidebar.tsx`** — Provides `SidebarProvider` context plus `useSidebar()`. The provider lives in the server `layout.tsx`, but consumers (Header toggle, `Main` margin shift) are client components.
- **`components/nav-links.ts`** — Single source of truth for navigation entries used by both `Header` and `Sidebar`.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss`. Global tokens and `@theme inline` mapping live in `app/globals.css` (no `tailwind.config.js`). `tw-animate-css` is imported there.
- **shadcn/ui** (style: `new-york`, base color: `neutral`, RSC enabled). Generated components go to `components/ui/`. **Tailwind class prefix is `tw-`** (configured in `components.json`) — any `shadcn add` output and any utilities intended to match shadcn primitives must use the `tw-` prefix. Most existing hand-written components in `components/` use unprefixed Tailwind classes; preserve the style of the file you are editing.
- Path aliases (`tsconfig.json` + `components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils` (exports `cn`), `@/hooks`.

### Images

`next.config.ts` only whitelists `placehold.co` for `next/image` remote patterns. Add new hosts there before referencing them.

### Code style

Prettier (`.prettierrc`): single quotes, semis, 2-space indent, trailing comma `all`, `arrowParens: avoid`.
