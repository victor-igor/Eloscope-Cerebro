---
tipo: referencia
status: ativo
tags: [sales-os, agentes, skills, mapa]
atualizado: 2026-05-06
---

# Agentes & Skills — Mapa por Fase

Referência cruzada: qual agente ou skill entra em cada fase.

---

## Agentes implementados

| Agente | Fase | Quando invocar |
|--------|------|---------------|
| `market-researcher` | Fase 0 | Antes da discovery call — pesquisar segmento Q2 do lead |
| `diagnostic-analyst` | Fase 0, 1 | Pós-call (mini-diagnóstico) e pós-reunião de diagnóstico |
| `onboarding-designer` | Fase 1 | Dia 0–1: gerar formulário A ou script B por vertical + pacote |
| `playbook-writer` | Fase 2 | Após Etapa 3 (análise de rota) e Etapa 4 (fluxograma aprovado) |
| `schedule-validator` | Fase 2, 3 | Antes de enviar cronograma ao cliente e antes do Gate |

## Agentes candidatos (criar conforme demanda)

| Agente | Fase | O que faz |
|--------|------|----------|
| `proposal-generator` | Fase 0 | Gera proposta nos 3 pacotes customizada por segmento |
| `contract-drafter` | Fase 0 | Gera contrato com cláusula de Gate e lista imexível |
| `followup-composer` | Fase 0 | Gera mensagens de cadência de follow-up por canal |
| `gate-reviewer` | Fase 3 | Valida se o conteúdo do processo atende critérios do Gate |
| `dashboard-spec-writer` | Fase 4 (7D) | Spec técnico do dashboard Next.js+Supabase a partir do playbook |
| `training-material-composer` | Fase 4 | Roteiro do Loom de treinamento do time do cliente |
| `case-study-writer` | Fase 5 | Transforma dados do cliente em case publicável |

---

## Skills por fase

| Fase | Skills ativas |
|------|--------------|
| Fase 0 — Pré-venda | `q2-market-knowledge` · `spin-methodology` · `eloscope-brand-voice` |
| Fase 1 — Diagnóstico | `q2-market-knowledge` · `spin-methodology` |
| Fase 2 — Processo | `spin-methodology` · `mermaid-funnel-templates` · `q2-market-knowledge` |
| Fase 3 — Gate | — |
| Fase 4 — Execução | `eloscope-stack` |
| Fase 5 — Acompanhamento | — |

---

## Squads do Eloscope OS com sobreposição direta

| Squad | Agente | Fase |
|-------|--------|------|
| Presales | `@sirius` (research) · `@orion` (SDR/qualificação) · `@halley` (follow-up) | Fase 0 |
| Delivery | `@mentor` (handover + QA) · `@temis` (QA final) · `@clio` (documentação) | Fase 4 |
| Customer Success | `@elo` (onboarding · NPS · renovação · upsell) | Fase 5 |

---

## Como criar agente novo

1. Criar `.claude/agents/{nome-do-agent}.md` com frontmatter YAML
2. Adicionar entrada neste mapa
3. Referenciar na fase correspondente
4. Commit com prefixo `agent:`

→ Guia completo: [[01-produto/agents-eloscope]]
