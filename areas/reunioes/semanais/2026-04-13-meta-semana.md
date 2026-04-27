---
tipo: reuniao
subtipo: semanal
data: 2026-04-13
semana: 16
duracao_min: 60
participantes: [Lucas, Victor, Hugo]
fonte: fathom
fonte_id: 137351850
fonte_url: https://fathom.video/calls/634545440
tags: [reuniao, semanal, interno, planejamento]
status: processada-summary
---

# Semanal — 2026-04-13 (Semana 16)

> 📅 2026-04-13 · ⏱ ~60 min · 👥 Lucas, Victor, Hugo

## Retrospectiva da semana

**Entregas:**
- Módulo financeiro interno: bugs corrigidos, LLM trocada para ChatGPT (resolveu processamento de extratos bancários).
- Morgana (agente Fathom): completo — busca reggae, follow-up, lembretes de compra, prospecção ativa. Pronto para demo.
- Clerk (autenticação): bugs do login flow corrigidos.
- Serviço novo de criação de site automatizado estruturado em PECOL (~90% automatizado).

**O que travou:**
- Fran (recurring appointments): bloqueado por refactor de DB (precisa suportar branches/filiais, similar ao Maquilão).
- Migração Clerk: desafio de migrar usuários existentes sem quebrar relacionamentos.
- Briefing automatizado do site builder: gap — exige questionamento de fundo psicológico que não automatiza bem.

**Aprendizados:**
- Clarificação dos papéis das ferramentas AI: Langchain (framework Python) vs OpenCloud (agente pessoal high-autonomy) vs PiperClip (orquestrador multi-agente).
- Estratégia: OpenCloud como agente executivo + PiperClip como orquestrador para workflows complexos.
- JavaScript preferido sobre WordPress para compatibilidade com AI.

## Métricas-chave

| Métrica | Valor | vs. semana anterior |
|---------|-------|---------------------|
| (não apresentadas nesta semanal) | — | — |

## Planejamento próxima semana

**Top 3 prioridades:**
1. Finalizar módulo financeiro (reconciliação fixa, upload de dados, review de UI).
2. Demo do agente Morgana com cliente.
3. Plano de migração Clerk com Mike Leib.

**Por pessoa:**
- **Victor:** finalizar finance module, agendar reunião Fran, follow-up com Matheus para dados Dacan.
- **Eloscope (Lucas):** agendar demo Morgana.
- **Todos:** testar projeto McLan e identificar gaps finais; analisar plano de migração Clerk.

## Decisões

- Adotar OpenCloud + PiperClip como stack de agentes (papéis claros: executivo + orquestrador).
- ChatGPT como LLM do módulo financeiro (resolveu problema de processamento).
- JavaScript > WordPress para novos sites (compatibilidade AI).

## Action Items

| # | Ação | Responsável | Prazo |
|---|------|-------------|-------|
| 1 | Finalizar reconciliação fixa do módulo financeiro | Victor | semana |
| 2 | Upload de dados de clientes/projetos no financeiro | Victor | semana |
| 3 | Review responsividade UI módulo financeiro | Victor | semana |
| 4 | Agendar reunião projeto Fran | Victor | semana |
| 5 | Follow-up Matheus para dados Dacan | Victor | semana |
| 6 | Agendar demo Morgana Fathom agent | Lucas | semana |
| 7 | Analisar plano migração Clerk com Mike Leib | Todos | semana |

---

_Summary-only: transcrição completa não foi processada (otimização de tokens). Recuperável via [Fathom](https://fathom.video/calls/634545440)._
