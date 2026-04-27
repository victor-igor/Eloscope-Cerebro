---
tipo: reuniao
subtipo: semanal
data: 2026-04-06
semana: 15
duracao_min: 60
participantes: [Lucas, Victor]
fonte: fathom
fonte_id: 135477162
fonte_url: https://fathom.video/calls/624594831
tags: [reuniao, semanal, interno, planejamento, estrategia]
status: processada-summary
---

# Semanal — 2026-04-06 (Semana 15)

> 📅 2026-04-06 · ⏱ ~60 min · 👥 Lucas, Victor

## Retrospectiva da semana

**Entregas:**
- Fran: feature de prescrição completa.
- McLaren: novo flow N8N v2 criado para testar filtro de extração de número de telefone (sem mexer no flow live).

**O que travou:**
- Morgana: bloqueado em implementação de RAG.
- Campo Joias: números de WhatsApp do cliente caíram.
- Cloud Code bloqueou conexões diretas com ferramentas externas — força abordagem API-only que complica integração.

**Aprendizados:**
- Modelo atual de projetos custom é high-effort low-margin → não escala.
- OpenCloud tem arquitetura agent-based mais adequada para assistentes client-facing autônomos com memória e scheduling.
- Vue.js → TypeScript no frontend para suportar multi-tenant.

## Métricas-chave

| Métrica | Valor | vs. semana anterior |
|---------|-------|---------------------|
| (sem métricas numéricas — reunião estratégica) | — | — |

## Planejamento próxima semana

**Top 3 prioridades:**
1. Instalar OpenCloud em servidor Hatchner (teste inicial).
2. Implementar RAG para Morgana (replicar estrutura existente).
3. Validar McLaren N8N v2 e investigar Campo Joias.

**Por pessoa:**
- **Victor:** instalar OpenCloud, validar McLaren v2, reunião com Fran 14h, investigar Campo Joias.
- **Eloscope (Lucas):** RAG Morgana, agendar treinamento Gia, planejar conteúdo educacional da nova plataforma.
- **Todos:** Discord em ~40min para discutir Morgana.

## Decisões

- **Pivot estratégico (DECISÃO MAIOR):** abandonar custom puro, ir para modelo de duas frentes:
  - **Plataforma educacional** (DIY clients, time-rich cash-poor): cursos + marketplace de agentes/skills.
  - **Serviço produtizado** (custom clients, cash-rich time-poor): versão multi-tenant do sistema atual.
- **Adotar OpenCloud** como plataforma core, substituindo Cloud Code (arquitetura agent-based superior para client-facing).
- **Rebuild frontend** Vue.js → TypeScript para suporte multi-cliente.

## Action Items

| # | Ação | Responsável | Prazo |
|---|------|-------------|-------|
| 1 | Instalar OpenCloud em servidor Hatchner | Victor | semana |
| 2 | Validar McLaren N8N flow v2 | Victor | semana |
| 3 | Reunião com Fran 14h hoje (review prescrição) | Victor | hoje |
| 4 | Investigar problema WhatsApp Campo Joias | Victor | semana |
| 5 | Implementar RAG para Morgana | Lucas | semana |
| 6 | Agendar treinamento Gia | Lucas | semana |
| 7 | Planejar conteúdo educacional nova plataforma | Lucas | semana |

---

_Summary-only: transcrição completa não foi processada (otimização de tokens). Recuperável via [Fathom](https://fathom.video/calls/624594831)._
