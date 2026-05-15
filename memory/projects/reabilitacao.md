# ReabilitaCao (Sistema Veterinário)

> Status: 🟢 Em desenvolvimento ativo

## O que é
Sistema veterinário fullstack (React + Supabase) com módulos de agendamentos, receituários, exames, pacotes, dietas, automações pós-consulta e integração Google Calendar. Projeto principal de produto.

## Stack
- Frontend: React + TypeScript + Tailwind + shadcn/ui
- Backend: Supabase (Postgres + Edge Functions Deno)
- Deploy: Vercel (plano Hobby, conta `eloscope.coo@gmail.com`)
- Framework dev: Synkra AIOX (agentes @dev, @qa, @sm, @architect, etc.)

## Responsáveis
- **Victor:** Product Owner / Dev Lead
- **@dev (Dex):** Implementação
- **@qa (Quinn):** Quality Gate

## Branch Atual
- `feat/auto-save-gravacao-parcial` — pushed para main em 14/05/2026

## Épicos Concluídos (pushados para main em 14/05)
| Epic | Título | Status |
|------|--------|--------|
| 27 | ConsultationRecorder: auto-save + histórico gravações | ✅ Done |
| 28 | Google Calendar sync bugs (28.1–28.12) | ✅ Done |
| 36 | Automações Pós-Consulta (36.1–36.8) | ✅ Done |

## Epic 36 — Automações Pós-Consulta
- Schema `automacoes` + `automacao_execucoes` com trigger_config, pg_cron
- Edge Functions: `trigger-automacao`, `execute-automacao`, `process-birthday-triggers`
- Builder v2 com trigger selector (pós-consulta / aniversário / datas fixas)
- Lista com stats de envios/falhas, rota `/automacoes/metrics`
- Integração com ConsultationForm (disparo automático ao concluir)

## ConsultationRecorder — Auto-save & Histórico
- Auto-save transcript a cada `is_final` do Deepgram
- Banner de restauração de gravação parcial
- Histórico de gravações com restore + audio player

## Agendamentos Recorrentes — Bugs Resolvidos (14/05)
- Fix: EditSeriesDialog ao editar PAI + scope=ALL deleta filhos corretamente
- Fix: separação `canonicalPaiId` vs `seriesQueryId` — scope=ALL não cria PAI fantasma ao adicionar serviço
- Fix: canonical PAI com deleted_at usa child.id como fallback para RPC
- Fix: rrule_string, recorrencia_regra, deduplicação fingerprint

## Decisões Técnicas
- [20/04/2026] Banco local como fonte de verdade; Google Calendar como espelho
- [20/04/2026] 3 scopes: THIS / THIS_AND_FOLLOWING / ALL
- [14/05/2026] Nunca usar Co-Authored-By nos commits — Vercel Hobby bloqueia deploy

## Pendências
- [ ] Vercel Deployment Protection: desativar "authorized users only" no painel
- [ ] Módulo Dietas: DietaDetailsModal + DietasTab (prev/next) — ver epic 29
- [ ] UI filter calendários virtuais em GoogleCalendarSelector.tsx (não-crítico)

---
*Atualizado: 14/05/2026*
