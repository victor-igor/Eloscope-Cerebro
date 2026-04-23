---
task: Customer Success Health Check
responsavel: elo
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - client_id: ID do cliente
  - usage_metrics: métricas de uso (DAU, features usadas, volume)
  - milestones_30_60_90: status dos milestones pós go-live
  - last_interaction: última conversa/NPS/ticket
Saida: |
  - health_score: 0-100
  - churn_risk: [low | medium | high | critical]
  - expansion_opportunities: lista priorizada de upsell
  - action_plan: próximos 30 dias
  - case_study_candidate: true | false (feedback loop pra Andrômeda)
Checklist:
  - "[ ] Calcular health score — uso, engagement, NPS, tickets, pagamento em dia"
  - "[ ] Identificar churn signals — queda de uso, silêncio > 30d, tickets não resolvidos"
  - "[ ] Mapear expansion signals — uso próximo do limite, novos use cases, indicação"
  - "[ ] Comparar com milestones 30/60/90 — está no aha moment?"
  - "[ ] Se churn risk high/critical → escalation imediata + save plan"
  - "[ ] Se case study candidate → handoff pra Andrômeda coletar métricas"
---

# cs-health-check

CS não é suporte — é garantir que o cliente fica. Health score roda semanalmente por cliente ativo.

## Cálculo de health score (baseline)

| Dimensão | Peso | Exemplo |
|---|---|---|
| Uso ativo | 30% | % de dias com login nos últimos 30 |
| Feature depth | 25% | Usa quantos % das features prometidas |
| NPS/CSAT | 20% | Última pesquisa |
| Ticket resolution | 10% | Tempo médio + % aberto |
| Financeiro | 15% | Pagamento em dia, renovação próxima |

## Thresholds

- **80-100:** Healthy → candidate a case study + expansion pitch
- **60-79:** OK → QBR trimestral + engajamento proativo
- **40-59:** At risk → save plan, executive sponsor
- **0-39:** Critical → intervenção imediata, escalation pro cliente

## Aha moment canônico
Momento em que o cliente vê valor concreto inequívoco. Mapeado no discovery, validado aqui. Se não atingiu em 60 dias, churn risk sobe automaticamente.
