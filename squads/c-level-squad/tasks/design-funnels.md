# Task: Design Funnels — CSO

```yaml
task: design-funnels()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: funnel_type
    tipo: enum
    valores: [outbound, inbound, indicacao, todos]
    origem: User Input
    obrigatorio: true
    default: todos

Saida:
  - campo: funnel_definitions
    tipo: markdown
    destino: Obsidian (03 - Comercial/Funis/) + Console
    persistido: true

Checklist:
  - "[ ] Tipo(s) de funil selecionado(s)"
  - "[ ] Estágios definidos para cada funil"
  - "[ ] Critérios de entrada por estágio definidos"
  - "[ ] Critérios de saída/avanço por estágio definidos"
  - "[ ] SLA de tempo por estágio definido"
  - "[ ] Deal owner e responsabilidades definidos"
  - "[ ] Documento salvo no Obsidian"
```

---

## Phase 1: Elicitação por Funil

Para cada funil selecionado, conduzir elicitação estruturada:

### Funil Outbound
Perguntas:
1. Qual o primeiro contato? (LinkedIn, email, ligação, evento)
2. Qual o critério para um lead outbound ser considerado qualificado?
3. Qual o tempo médio esperado do primeiro contato até o fechamento?
4. Quantas tentativas de contato antes de marcar como perdido?

### Funil Inbound
Perguntas:
1. De onde vêm os leads inbound? (site, anúncio, conteúdo, parceiro)
2. Há algum formulário ou pré-qualificação automática?
3. Qual o SLA de resposta para um lead inbound?
4. Como diferenciar lead inbound quente vs frio?

### Funil Indicação
Perguntas:
1. Quem pode indicar? (clientes ativos, parceiros, time)
2. Há algum incentivo para quem indica?
3. O processo de abordagem é diferente de outbound? Como?
4. Como registrar a origem da indicação para tracking?

---

## Phase 2: Definição de Estágios

Para cada funil, definir estágios no formato:

```yaml
stage:
  id: string
  label: string
  description: string
  entry_criteria: []    # O que precisa ser verdade para entrar neste estágio
  exit_criteria: []     # O que precisa acontecer para avançar
  sla_days: number      # Máximo de dias esperado neste estágio
  owner: string         # Quem é responsável neste estágio
  activities: []        # Atividades esperadas neste estágio
```

### Estágios Sugeridos por Funil

**Outbound:**
1. Prospecção → 2. Primeiro Contato → 3. Qualificado (BANT) → 4. Discovery → 5. Proposta → 6. Negociação → 7. Fechado Ganho / Fechado Perdido

**Inbound:**
1. Lead Recebido → 2. Contatado → 3. Qualificado (BANT) → 4. Discovery → 5. Proposta → 6. Negociação → 7. Fechado Ganho / Fechado Perdido

**Indicação:**
1. Indicação Recebida → 2. Primeiro Contato → 3. Discovery → 4. Proposta → 5. Negociação → 6. Fechado Ganho / Fechado Perdido

---

## Phase 3: SLA e Alertas

Definir para cada funil:
- SLA total esperado (início → fechamento)
- SLA por estágio
- Gatilhos de alerta para CSO (deal parado além do SLA)
- Gatilhos de alerta para Victor (deals estratégicos ou alto valor)

---

## Output Format

```markdown
# Funil {tipo} — Eloscope

**Criado por:** CSO | **Data:** {data}
**Tempo médio estimado:** {X} dias

## Estágios

### 1. {Nome do Estágio}
**Descrição:** {descrição}
**Critério de entrada:** {lista}
**Critério de avanço:** {lista}
**SLA:** {X} dias
**Responsável:** {owner}
**Atividades:** {lista}

### 2. ...

## Alertas Automáticos
- Deal parado > {X} dias em {estágio} → Alerta CSO
- Deal parado > {X} dias em Negociação → Alerta Victor

## Métricas de Sucesso
- Taxa de conversão alvo por estágio: {%}
- Tempo médio de ciclo: {X} dias
- Taxa de fechamento geral: {%}
```

---

## Completion Criteria

- [ ] Todos os funis selecionados têm estágios definidos
- [ ] Critérios de entrada/saída documentados por estágio
- [ ] SLA definido por estágio
- [ ] Alertas configurados
- [ ] Documento salvo em `03 - Comercial/Funis/{tipo}-funil.md`
