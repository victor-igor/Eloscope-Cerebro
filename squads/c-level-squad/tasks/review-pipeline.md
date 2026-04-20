# Task: Review Pipeline — CSO

```yaml
task: review-pipeline()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: pipeline_data
    tipo: string
    origem: User Input (lista de deals) ou Obsidian (03 - Comercial/Funis/)
    obrigatorio: true
  - campo: period
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "semana atual"

Saida:
  - campo: pipeline_review
    tipo: markdown
    destino: Console + Obsidian (03 - Comercial/Índice - Comercial.md)
    persistido: true

Checklist:
  - "[ ] Todos os deals ativos listados"
  - "[ ] Cada deal classificado por risco (verde/amarelo/vermelho)"
  - "[ ] Deals parados além do SLA identificados"
  - "[ ] Ação concreta recomendada por deal em risco"
  - "[ ] Alertas para Victor disparados se aplicável"
  - "[ ] Previsão de fechamento do período atualizada"
```

---

## Phase 1: Coleta de Dados

Solicitar ao usuário ou buscar no Obsidian:
- Lista de deals ativos com: nome do prospect, empresa, estágio atual, valor estimado, data da última interação, próximo passo definido

---

## Phase 2: Classificação de Risco

Para cada deal, classificar:

**🟢 Verde — No prazo**
- Última interação dentro do SLA do estágio
- Próximo passo definido com data
- BANT parcialmente ou totalmente confirmado

**🟡 Amarelo — Atenção**
- Última interação próxima ao limite do SLA
- Próximo passo vago ou sem data
- BANT incompleto

**🔴 Vermelho — Em risco**
- Última interação além do SLA do estágio
- Sem próximo passo definido
- Objeção crítica em aberto
- Prospect sem resposta há >7 dias

---

## Phase 3: Recomendações por Deal

Para cada deal 🟡 ou 🔴, gerar:
- Diagnóstico rápido do problema
- Ação concreta recomendada (com script sugerido se necessário)
- Prazo para execução

---

## Phase 4: Visão Geral do Pipeline

Calcular e apresentar:
- Total de deals por estágio
- Valor total em pipeline
- Valor ponderado por probabilidade de estágio
- Previsão de fechamento do mês

---

## Output Format

```markdown
# Revisão de Pipeline — {period}
**CSO | {data}**

## Resumo Executivo
- **Deals ativos:** {n}
- **Valor total em pipeline:** R$ {valor}
- **Valor ponderado:** R$ {valor}
- **Previsão de fechamento do mês:** R$ {valor}

## Status por Deal

### 🟢 No Prazo
| Deal | Empresa | Estágio | Valor | Próximo Passo |
|------|---------|---------|-------|---------------|
| {deal} | {empresa} | {stage} | R$ {valor} | {próximo passo — data} |

### 🟡 Atenção
| Deal | Empresa | Estágio | Valor | Problema | Ação |
|------|---------|---------|-------|---------|------|
| {deal} | {empresa} | {stage} | R$ {valor} | {problema} | {ação} |

### 🔴 Em Risco
| Deal | Empresa | Estágio | Valor | Problema | Ação Urgente |
|------|---------|---------|-------|---------|-------------|
| {deal} | {empresa} | {stage} | R$ {valor} | {problema} | {ação} |

## ⚠️ Alertas para Victor
{lista de alertas ou "Nenhum alerta crítico esta semana ✅"}

## Pipeline por Estágio
| Estágio | Deals | Valor |
|---------|-------|-------|
| {estágio} | {n} | R$ {valor} |
```

---

## Completion Criteria

- [ ] Todos os deals classificados por risco
- [ ] Ação concreta definida para deals amarelos e vermelhos
- [ ] Alertas disparados para Victor se aplicável
- [ ] Previsão de fechamento calculada
- [ ] Output no formato padrão
