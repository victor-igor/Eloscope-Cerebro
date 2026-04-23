# Tech Stack — Eloscope OS

## Camadas

### Frontend
- **Framework:** React 18
- **Build:** Vite
- **Language:** TypeScript strict
- **Styling:** Tailwind v4
- **Components:** shadcn/ui + customizações no `packages/ui`
- **State:** React Query + Context
- **Forms:** react-hook-form + zod validation
- **Testing:** Vitest (unit) + Playwright (E2E)

### Backend
- **Database:** Postgres (Supabase)
- **Extensions:** pgvector, pg_cron
- **Auth:** Clerk (multi-tenant com organizations)
- **Edge functions:** Deno (Supabase)
- **Storage:** Supabase Storage

### AI / Workflow
- **Orchestration:** n8n (workflows cliente-facing) + OpenClaw (orquestração interna, quando aplicável)
- **LLMs:** Anthropic Claude (padrão), OpenAI GPT quando necessário
- **Memory:** pgvector no Supabase (Mnemósine)
- **Eval:** custom via Minos em `eval/`

### Integrations
- **CRM:** HubSpot (padrão), RD Station/Pipedrive se cliente já usa
- **Messaging:** WhatsApp Business API, Gmail, Google Calendar
- **Research:** Apollo, LinkedIn Sales Navigator, Fireflies
- **Deploy:** Vercel (frontend), Supabase (backend), Railway/Render pra workers

### Observability
- Logs estruturados (pino ou similar)
- Sentry pra error tracking
- Metabase pra dashboards internos
- PostHog ou Plausible pra analytics

## Decisões arquiteturais (ADRs)
Todas em `adr/ADR-{NNN}.md`. Rotineiramente consultadas pelo Hefesto antes de escolhas novas.

## O que NÃO usamos (explícito)
- **Paperclip:** em estudo, não vai pra produção ainda (ver CLAUDE.md do Sales OS)
- **Redux:** React Query cobre o caso
- **CSS-in-JS:** Tailwind cobre
- **MongoDB:** Postgres é padrão — não começamos com NoSQL

## Versionamento
- Frontend: semver em `package.json` do app
- Contratos IA: semver em `ai/contracts/` (minor = compat, major = breaking)
- Migrations: timestamp (Supabase convention)
