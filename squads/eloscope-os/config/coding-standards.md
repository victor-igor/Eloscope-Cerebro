# Coding Standards — Eloscope OS

## Princípios
1. **Código typesafe** — TypeScript strict, sem `any` não justificado
2. **Código self-documenting** — nomes de variáveis > comentários
3. **Funções focadas** — uma responsabilidade por função
4. **Testes por padrão** — Vesta gera, Argos revisa
5. **Sem secrets hardcoded** — sempre env vars

## Stack padrão
- **Frontend:** React 18 + Vite + TypeScript strict (Dédalo)
- **Styling:** Tailwind v4 + shadcn/ui (Pigmento)
- **Backend:** Supabase (Postgres + Edge Functions Deno) (Gaia)
- **Auth:** Clerk multi-tenant (Cérbero)
- **Workflow:** n8n (Ariadne)
- **Deploy:** Vercel (frontend) + Supabase (backend)

## Convenções

### Nomenclatura
- `camelCase` — variáveis e funções JS/TS
- `PascalCase` — componentes React e tipos
- `kebab-case` — nomes de arquivo
- `snake_case` — colunas Postgres
- `UPPER_SNAKE` — constantes e env vars

### Imports
- Absolute imports preferidos (`@/components/...` vs `../../components/...`)
- Order: external → internal → types → styles

### Error handling
```typescript
// ❌ Ruim
try { ... } catch (e) { console.log(e); }

// ✅ Bom
try { ... } catch (error) {
  logger.error({ op: 'sync-user', error }, 'failed to sync');
  throw new Error(`Failed to sync user: ${error.message}`);
}
```

### Commits (convencional)
- `feat:` nova funcionalidade
- `fix:` bug fix
- `docs:` documentação
- `refactor:` refactor sem mudança de comportamento
- `test:` teste
- `chore:` infra/config

## Handoff
Toda transição inter-área gera `handoff-{from}-{to}-{date}.md`. Nunca chat livre.
