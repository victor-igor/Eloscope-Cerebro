# Definition of Done — Engineering

Aplicável aos agents: hefesto, dedalo, pigmento, argos, vesta, gaia, cerbero, ariadne, hermes, lyra.

## Arquitetura (hefesto)
- [ ] ADR escrito em `adr/ADR-{NNN}.md`
- [ ] Alternativas consideradas documentadas (mínimo 2)
- [ ] Tradeoffs explícitos
- [ ] Riscos + mitigações mapeados
- [ ] Se IA envolvida: handoff pra Minerva + ai-contract versionado

## Implementação (specialists)
- [ ] Code typesafe (TypeScript strict, sem `any` não justificado)
- [ ] Sem secrets hardcoded
- [ ] Error handling com fallback definido
- [ ] Logging estruturado (correlation_id em fluxos multi-step)
- [ ] Tests unit (Vesta) — cobertura mínima da lógica de negócio
- [ ] Tests E2E (Vesta) nas jornadas críticas

## Banco de dados (gaia)
- [ ] Migration versionada em `supabase/migrations/`
- [ ] RLS policies ativas para todas as tabelas com dado de usuário
- [ ] Edge function com timeout + retry configurados
- [ ] pgvector com índices corretos (se aplicável)

## Auth (cerbero)
- [ ] Clerk webhook sync com Supabase funcionando
- [ ] Roles/permissions mapeados
- [ ] JWT template validado
- [ ] Multi-tenant isolation testado (org A não vê org B)

## n8n (ariadne, hermes, lyra)
- [ ] Workflow JSON exportado e versionado em `workflows/`
- [ ] Error workflow configurado
- [ ] Retry logic com backoff
- [ ] Idempotência via correlation_id
- [ ] Rate limit respeitado (WhatsApp, Gmail, APIs externas)

## Code review (argos)
- [ ] Review rodou antes de merge
- [ ] Zero 🔴 crítico aberto
- [ ] 🟡 alto com decisão registrada (fix ou tech debt)
- [ ] 🟢 low registrados como tech debt

## Sempre
- [ ] CI passando (lint, typecheck, tests)
- [ ] PR descrição clara + link pra story
- [ ] Handoff estruturado se transição inter-área
