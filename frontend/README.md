# Portfolio Frontend

This is the React + TypeScript frontend for the portfolio project. It is configured as part of the monorepo workspace and communicates with the backend through the shared package contracts.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Vitest + Testing Library

## Scripts

From the repo root:

- `npm install` — install the workspace dependencies
- `npm run dev` — run the frontend dev server
- `npm run build --workspace frontend` — create a production build
- `npm run test:run --workspace frontend` — run frontend tests
- `npm run lint --workspace frontend` — lint the frontend

## Project structure

- `src/` — app pages, components, hooks, services, and utilities
- `tests/` — frontend test files
- `vite.config.ts` — Vite configuration
- `eslint.config.js` — active ESLint configuration for the app

## Notes

- The frontend consumes shared validation and types from the workspace package under [packages/shared](../packages/shared).
- The backend health route is expected at `/api/health` and is validated against the shared schema.
- This project uses ESLint for linting.
