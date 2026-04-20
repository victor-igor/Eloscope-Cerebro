# Task: Forecast — CSO

```yaml
task: forecast()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: pipeline_data
    tipo: string
    origem: User Input ou Obsidian (03 - Comercial/Funis/)
    obrigatorio: true
  - campo: period
    tipo: enum
    valores: [mes_atual, proximo_mes, trimestre, semestre]
    origem: User Input
    obrigatorio: false
    default: mes_atual
  - campo: conversion_rates
    tipo: object
    origem: Histórico ou User Input
    obrigatorio: false
    description: "Taxas de conversão por estágio — se não informado, usar defaults conservadores"

Saida:
  - campo: revenue_forecast
    tipo: markdown
    destino: Console + Obsidian (07 - Financeiro/Forecast/)
    persistido: true

Checklist:
  - "[ ] Pipeline atual coletado com valores e estágios"
  - "[ ] Taxas de conversão por estágio aplicadas"
  - "[ ] Três cenários calculados (pessimista/realista/otimista)"
  - "[ ] Deals mais prováveis de fechar identificados"
  - "[ ] Recomendações para maximizar receita do período"
```

---

## Phase 1: Coleta do Pipeline

Para cada deal ativo, coletar:
- Nome do deal / prospect
- Estágio atual
- Valor estimado (R$)
- Probabilidade subjetiva de fechamento (se o vendedor souber)
- Data prevista de fechamento

---

## Phase 2: Aplicar Taxas de Conversão por Estágio

**Taxas default por estágio (ajustar com histórico real quando disponível):**

| Estágio | Probabilidade default |
|---------|----------------------|
| Qualificação | 10% |
| Discovery | 20% |
| Apresentação | 35% |
| Proposta | 50% |
| Negociação | 70% |
| Commit verbal | 85% |

**Ajustes:**
- Deal inativo há >14 dias: -20%
- Objeção crítica em aberto: -15%
- Indicação de cliente ativo: +15%
- BANT 100% confirmado: +10%

---

## Phase 3: Três Cenários

**Pessimista:** Apenas deals em Negociação ou acima fecham (70%+ probabilidade)

**Realista:** Deals em Proposta ou acima com ajustes de risco

**Otimista:** Todos os deals com probabilidade ≥35%, sem desconto de risco

---

## Phase 4: Recomendações

Identificar:
- Top 3 deals para priorizar no período (maior impacto × maior probabilidade)
- Deals que podem acelerar com ação imediata
- Deals que devem ser qualificados como perdidos (liberar energia do vendedor)

---

## Output Format

```markdown
# Forecast de Receita — {period}
**CSO | {data}**

## Resumo Executivo

| Cenário | Receita Prevista | Deals |
|---------|-----------------|-------|
| 🔴 Pessimista | R$ {valor} | {n} deals |
| 🟡 Realista | R$ {valor} | {n} deals |
| 🟢 Otimista | R$ {valor} | {n} deals |

**Meta do período:** R$ {meta} (se definida)
**Gap realista para meta:** R$ {gap} ({%})

## Pipeline por Estágio

| Estágio | Deals | Valor Bruto | Prob. | Valor Ponderado |
|---------|-------|-------------|-------|----------------|
| Qualificação | {n} | R$ {valor} | 10% | R$ {valor} |
| Discovery | {n} | R$ {valor} | 20% | R$ {valor} |
| Apresentação | {n} | R$ {valor} | 35% | R$ {valor} |
| Proposta | {n} | R$ {valor} | 50% | R$ {valor} |
| Negociação | {n} | R$ {valor} | 70% | R$ {valor} |

## 🎯 Top 3 Deals para Priorizar

### 1. {Deal Name} — R$ {valor} — {estágio}
**Por que priorizar:** {razão}
**Ação imediata:** {o que fazer}
**Prazo:** {data}

### 2. ...
### 3. ...

## 🗑️ Deals para Qualificar como Perdido
{lista com justificativa ou "Nenhum — pipeline saudável ✅"}

## Recomendações para Maximizar {period}
1. {recomendação 1}
2. {recomendação 2}
3. {recomendação 3}
```

---

## Completion Criteria

- [ ] Todos os deals com valor e estágio mapeados
- [ ] Três cenários calculados
- [ ] Top 3 deals para priorizar identificados
- [ ] Recomendações de ação geradas
- [ ] Output salvo em `07 - Financeiro/Forecast/forecast-{YYYY-MM}.md`
