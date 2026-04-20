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
| 27 | Transcrição de Consultas com Deepgram | Ready |
| 28 | Agendamento Recorrente com Google Calendar | Ready — aguarda implementação |

## Epic 28 — Agendamento Recorrente
- **Design Spec:** `docs/superpowers/specs/2026-04-20-agendamento-recorrente-design.md`
- **Aprovado por:** Aria (Architect) + Dara (Data Engineer)
- **Branch Git:** `feat/agendamento-recorrente`
- **Branch Supabase:** `feat/ajuste-agendamento`
- **Stories:** 28.1 → 28.9 (todas Ready)
- **Próxima ação:** @dev implementar Story 28.1 (migration SQL)

## Decisões Tomadas
- [20/04/2026] Banco local como fonte de verdade; Google Calendar como espelho
- [20/04/2026] Google native recurrence (1 evento RRULE) — não expandir em eventos individuais
- [20/04/2026] Eager expansion: série com fim → todas instâncias; infinita → 365 dias + cron semanal
- [20/04/2026] Edição/exclusão: 3 scopes (THIS / THIS_AND_FOLLOWING / ALL) — igual Google Calendar
- [20/04/2026] RRULE expansion no frontend (rrule.js) + Edge Function (webhook); não no banco
- [20/04/2026] Cron: pg_cron + net.http_post (padrão confirmado no projeto)
- [20/04/2026] `THIS_AND_FOLLOWING`: campo `recorrencia_data_corte` no pai (não cria novo pai)
- [20/04/2026] `google_event_id` instâncias: usar `event.id` direto do Google (formato `{base}_{datetime}`)

## Pendências
- [ ] @dev implementar Story 28.1 (nova sessão — contexto esgotado na sessão 20/04)
- [ ] Após 28.1: seguir sequência 28.2 → 28.3 → 28.4 → 28.5 → 28.6 → 28.7 → 28.8 → 28.9

---
*Criado: 20/04/2026*
