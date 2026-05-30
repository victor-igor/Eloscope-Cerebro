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
- [19/05/2026] Sync GC omite `colorId` quando inválido (fora de `'1'..'11'`) — evento herda cor do calendário do vet (paridade com `google-auth/index.ts`)
- [28/05/2026] Sobreposição de transcrição IA × anotação manual resolvida com **diálogo de escolha** (Substituir / Adicionar ao final / Cancelar) — nunca auto-substituir, anotação manual jamais perdida silenciosamente

## Phase 4 — UI/UX ExameDetailModal Responsivo (29/05)
- Modal vira bottom-sheet em mobile (`h-[95dvh]`, `rounded-t-xl sm:rounded-xl`)
- Header compacto: `text-base sm:text-xl`, botão Editar icon-only em mobile
- Tabs de arquivo com fade gradient indicador de scroll
- Barra de ações `flex-col sm:flex-row` em mobile
- iframe PDF `h-[50vh] sm:h-96`
- ParametrosTable `overflow-x-auto`
- Padding `p-4 sm:p-6`
- Commit `b087cfa` · ClickUp `86e1mdyqa`

## Phase 3 — Fix Sobreposição Transcrição IA (28/05)
- `ConsultationForm.tsx`: transcrição da IA não reseta tela nem apaga anotações digitadas
- Dialog inline de conflito quando editor já tem conteúdo (`onTranscriptReady` + `onRestoreTranscript`); editor vazio recebe direto
- Helper `applyTranscriptToContent` + `pendingTranscriptRef` + `showTranscriptConflictDialog`
- Verifier GSD 6/6 must-haves ✓, build OK; 5 cenários runtime em `03-HUMAN-UAT.md`
- Commits `3e679a2` (feat) + `a1ac586` (docs); artefatos `.planning/phases/03-fix-transcript-overwrite-consultation-form/`
- ClickUp: `86e1kxx4v` (concluído)
- Diagnóstico paralelo: rascunho órfão de gravação aparecendo em "Nova Consulta" — causa é `handleSilentSave` (cria consulta + troca URL silenciosa, título não muda). NÃO é bug de delete (CASCADE OK). Fix recomendado pendente: banner "Retomar rascunho"

## Phase 2 — Fix Sync Color ID Validation (19/05)
- Helper `sanitizeColorId()` + 5 callsites refatorados em `process-calendar-queue/index.ts`
- Deploy Supabase MCP versão 31 ACTIVE (versão 30 saiu com `verify_jwt: true` por engano, redeploy corrigiu)
- Cleanup backlog: 1.531 jobs antigos marcados completed (Danila 15/05 + Angélica 18/05)
- Reset Hugo+Nino: 20 jobs failed→pending, séries quinzenais sex 29/05→02/10/2026 criadas no Google
- Validação produção: agendamento "teste" Francine 23/05 sincronizado ✓
- Commits: `ffce852` (fix) + `a56ae5f` (artefatos Phase 2) merged em main
- Artefatos: `.planning/phases/02-fix-sync-color-id-validation/` (CONTEXT + PLAN + SUMMARY)

## Pendências
- [ ] Vercel Deployment Protection: desativar "authorized users only" no painel
- [ ] Módulo Dietas: DietaDetailsModal + DietasTab (prev/next) — ver epic 29
- [ ] UI filter calendários virtuais em GoogleCalendarSelector.tsx (não-crítico)
- [ ] Bug trigger `tr_enqueue_calendar_sync` pula INSERT quando pai foi soft-deletado (caso Ivy/Camila 456936) — investigar afetação histórica
- [ ] Fix frontend: parar de salvar cor customizada/hex em `agendamentos.cor` (backlog não-crítico, fix de boundary cobre o sync)
- [ ] CHECK constraint Postgres em `agendamentos.cor` restringindo a `NULL OR '1'..'11' OR hex` (backlog opcional)
- [ ] Validação manual 5 cenários Phase 3 transcrição (`03-HUMAN-UAT.md`)
- [ ] Rascunho órfão de gravação em "Nova Consulta" — banner "Retomar rascunho" / descartar órfão (diagnóstico no GSD, sem task ClickUp)

---
*Atualizado: 28/05/2026*
