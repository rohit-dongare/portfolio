# Portfolio Architecture

This repository is organized as a monorepo with three workspaces:

- frontend: React + TypeScript + Vite SPA
- backend: Express + TypeScript API
- packages/shared: shared Zod schemas, validated contracts, and types

## Architecture goals

- keep frontend and backend decoupled but contract-aware
- use shared validation on API boundaries
- keep database access isolated behind service layers
- avoid duplicating types or schema definitions

## Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Vitest + RTL + jsdom

### Backend

- Node.js
- Express
- TypeScript
- Supabase JS client
- Zod
- Vitest + Supertest

### Shared

- Zod schemas for request/response contracts
- `z.infer` derived types
- shared API payload definitions

## Request flow

### Frontend

`Page/Component -> Hook -> TanStack Query -> API Service -> Express`

### Backend

`Route -> Validation -> Controller -> Service -> Supabase`

## Validation strategy

All external boundaries should validate inputs and outputs with Zod. This includes request bodies, query params, route params, and API responses when they are consumed by clients.

## Database plan

The backend is designed to use Supabase PostgreSQL without an ORM. Database-specific types should be kept separate from API contracts until the real database schema is generated.

## Quality gates

- strict TypeScript
- ESLint flat config
- Prettier formatting
- Vitest unit/integration checks
- Husky + lint-staged pre-commit hooks
- npm audit and GitHub Actions CI

## Security

- no real `.env` files are committed
- dependency auditing runs at high severity
- Dependabot checks weekly updates
- CI prevents merges with failing lint/test/build checks
