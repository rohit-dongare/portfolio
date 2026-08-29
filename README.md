# Portfolio

This repository is a personal portfolio

## Tech stack

- Frontend: React + TypeScript + Vite
- Routing: React Router
- Data fetching: TanStack Query
- Backend: Node.js + Express + TypeScript
- Shared contracts: Zod + TypeScript
- Database: Supabase PostgreSQL
- Testing: Vitest + React Testing Library + Supertest
- Quality: ESLint, Prettier, strict TypeScript, Husky, lint-staged
- Security: npm audit, Dependabot, GitHub Actions

## Repository layout

- frontend/
- backend/
- packages/shared/
- .github/
- docs/
- .husky/

## Scripts

- npm run dev (starts the frontend)
- npm run dev:frontend (starts the frontend)
- npm run dev:backend (starts the backend)
- npm run build
- npm run lint
- npm run lint:fix
- npm run format
- npm run format:check
- npm run typecheck
- npm run test
- npm run test:frontend
- npm run test:backend
- npm run test:run
- npm run test:watch
- npm run test:coverage
- npm run test:coverage:frontend
- npm run test:coverage:backend
- npm run audit

## Coverage targets

- Frontend: 60–70% overall coverage, with branch/function targets kept conservative while the app is still growing.
- Backend: 70–80% overall coverage, covering routes, handlers, and validation behavior.
- Shared Zod schemas: 80–90% coverage to validate contract parsing and error cases.
- Overall repo target: ~70% across the main app surfaces.

Current Vitest coverage thresholds are enforced per package using realistic lower bounds for the current codebase.
