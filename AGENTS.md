# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

Notfallakte Generator ("Rote Mappe") — a 100% client-side React PWA for creating personal emergency documentation PDFs. **No backend, no database, no external services required.**

### Development Commands

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 5173) |
| Lint | `pnpm lint` |
| Build | `pnpm build` (runs `tsc -b && vite build`) |
| Preview prod build | `pnpm preview` |

### Key Notes

- The app uses `pnpm@10.16.1` (declared via `packageManager` field in `package.json`). Use `corepack enable` to activate it.
- Node.js 22.x is required (uses modern ES module features).
- There are **no automated tests** (no test framework configured). Validation is done via lint (`eslint`) and type-checking (`tsc`).
- All app state lives in browser `sessionStorage` — data is lost when the tab closes. No persistence layer exists.
- PDF generation runs in a Web Worker (`pdfWorker`) so the UI stays responsive.
- To quickly test the app with data, load `Muster_Notfallakte_Dummy_Daten.json` via the "Bestehendes Backup laden" button on the welcome page.
- The build produces a chunk size warning (>500 kB) — this is expected and not a build failure.
- Dev server binds to localhost:5173 by default. Use `pnpm dev --host 0.0.0.0` to expose on all interfaces.
