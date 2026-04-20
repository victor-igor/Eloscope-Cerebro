# ReabilitaCao (Sistema Veterinário)

> Status: 🟢 Em desenvolvimento ativo

## O que é
Sistema veterinário fullstack (React + Supabase) com módulos de agendamentos, receituários, exames, pacotes e integração Google Calendar. Projeto principal de produto.

## Stack
- Frontend: React + TypeScript + Tailwind + shadcn/ui
- Backend: Supabase (Postgres + Edge Functions Deno)
- Infra: Supabase branches para desenvolvimento isolado
- Framework dev: Synkra AIOX (agentes @dev, @qa, @sm, @architect, etc.)

## Responsáveis
- **Victor:** Product Owner / Dev Lead
- **@dev (Dex):** Implementação
- **@qa (Quinn):** Quality Gate
- **@devops (Gage):** Git push / PRs

## Branches Ativos
| Branch Git | Branch Supabase | Épico |
|------------|-----------------|-------|
| `feat/agendamento-recorrente` | `feat/ajuste-agendamento` | Epic 28 |
| `feat/transcricao-consultas` | — | Epic 27 |

## Épicos em andamento
| Epic | Título | Status |
|------|--------|--------|
| 27 | Transcrição de Consultas com Deepgram | Done (27.1–27.5) — redesign UX aprovado mas não implementado |
| 28 | Agendamento Recorrente com Google Calendar | Em andamento — 28.1 Done, 28.2 Done, 28.3 Done, 28.4–28.9 Ready |

## Epic 28 — Agendamento Recorrente
- **Branch Git:** `feat/agendamento-recorrente`
- **Branch Supabase:** `feat/ajuste-agendamento`
- **Stories Done:** 28.1, 28.2, 28.3
- **Próxima story:** 28.4 — Webhook inbound google-calendar-webhook

### Progresso por story
| Story | Título | Status | Commits |
|-------|--------|--------|---------|
| 28.1 | Migration: campos + indexes + constraint + trigger | ✅ Done | `a02234d`, `759df79` |
| 28.2 | RPCs: create/edit/delete_recurring_appointment | ✅ Done | `ee7077c` |
| 28.3 | Edge Function google-auth: actions recorrência | ✅ Done | `aec6884` |
| 28.4–28.9 | — | Ready | — |

### Observações técnicas desta sessão
- `recorrencia_regra` usa chave `frequencia` (legado) — constraint `NOT VALID` para não quebrar dados históricos
- Supabase MCP troca de branch automaticamente — cuidado com cherry-pick sempre necessário após deploy
- `feat/transcricao-consultas` tem commits extras (cherry-picks revertidos) — OK

## Decisões Tomadas
- [20/04/2026] Banco local como fonte de verdade; Google Calendar como espelho
- [20/04/2026] Google native recurrence (1 evento RRULE)
- [20/04/2026] Eager expansion: série com fim → instâncias; infinita → 365 dias + cron
- [20/04/2026] 3 scopes: THIS / THIS_AND_FOLLOWING / ALL
- [20/04/2026] RRULE expansion no frontend (rrule.js)
- [20/04/2026] `THIS_AND_FOLLOWING` no Google: modifica UNTIL no RRULE do pai
- [20/04/2026] Constraint `chk_recorrencia_regra_freq` com `NOT VALID` (dados históricos incompatíveis)

## Pendências
- [ ] QA gate Story 28.3 (não feito — contexto esgotado)
- [ ] Revert do cherry-pick em `feat/transcricao-consultas` (Story 28.3)
- [ ] Implementar Story 28.4 → 28.9 na próxima sessão

---
*Criado: 20/04/2026*
