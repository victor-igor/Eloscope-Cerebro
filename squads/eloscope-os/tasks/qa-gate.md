---
task: Final QA Gate
responsavel: temis
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - build_url: URL de staging/preview
  - acceptance_criteria: critérios do escopo original (contrato)
  - contract_scope: lista de entregáveis prometidos
  - journeys: jornadas críticas a testar
Saida: |
  - qa_report: projects/{slug}/handover/qa-report.md
  - go_nogo: GO | NO-GO | GO-WITH-CONCERNS
  - bug_list: bugs categorizados (🔴 crítico | 🟡 alto | 🟢 low)
  - regression_report: comparação com versão anterior
Checklist:
  - "[ ] Testar todas as jornadas críticas (end-to-end)"
  - "[ ] Validar aceite do escopo original (contrato vs entregue)"
  - "[ ] Performance: Core Web Vitals (Cometa)"
  - "[ ] Acessibilidade: WCAG AA mínimo"
  - "[ ] Responsividade: mobile, tablet, desktop"
  - "[ ] Cross-browser: Chrome, Safari, Firefox, Edge"
  - "[ ] Segurança: OWASP top 10 checklist (Argos)"
  - "[ ] Dados de teste limpos — sem PII real em staging"
  - "[ ] Rollback plan documentado"
---

# qa-gate

**Gate final antes do cliente ver.** Regra dura: bug 🔴 crítico = NO-GO, sem exceção.

## Matriz de severidade

| Severidade | Critério | Ação |
|---|---|---|
| 🔴 Crítico | Bloqueia jornada core OU vazamento de dados OU quebra de segurança | NO-GO |
| 🟡 Alto | Degrada UX notavelmente OU contradiz escopo contratado | GO-WITH-CONCERNS (com concordância explícita do cliente) |
| 🟢 Low | Cosmético OU edge case raro | GO + tech debt registrado |

## Jornadas críticas (exemplo)

Se for um produto de qualificação de lead via WhatsApp (padrão Maya):
1. Lead entra no número → bot responde em < 5s
2. Bot coleta BANT → sem loop infinito
3. Bot classifica lead → score correto
4. Bot transfere pra humano → handoff com contexto
5. Painel admin mostra leads classificados

## Aceite vs contrato
Se entregamos 110% do escopo mas falhamos em 1 item explícito do contrato — não é GO. Contrato é lei.
