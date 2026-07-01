# Agent instructions — yunshang-homepage

## Stack

- Next.js 15 project using the **App Router** (`app/`).
- Do **not** use the Pages Router (`pages/`).
- This version may differ from older Next.js docs — check `node_modules/next/dist/docs/` when unsure.

## Before you edit

1. Read the existing project structure and nearby code first.
2. Prefer **minimal, targeted changes** — do not modify unrelated pages or components.
3. Do **not** perform large refactors without asking the user.
4. Do **not** browse external websites unless explicitly requested.
5. For a specific CSS or layout fix, fix that issue directly — do not run a broad codebase investigation.

## Reuse existing patterns

- Reuse existing components, CSS classes, fonts, and button styles before creating new ones.
- **Navbar** and **Footer** are shared layout components (`components/layout/`).
- Images live under `/public/images`. Check file name **casing** carefully — Vercel deployment is case-sensitive.

## Page boundaries

- Home page sections (`components/home/`) and About page sections (`components/about/`) stay **separate**.
- When editing the About page, only change `components/about/` and shared CSS that is strictly necessary (e.g. `app/globals.css`).

## Responsive checks

After layout or CSS changes, verify at **1440**, **1024**, **768**, and **390** px.
