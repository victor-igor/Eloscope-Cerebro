# Task: Coach Seller — CSO

```yaml
task: coach-seller()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: seller_name
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "Lucas"
  - campo: period
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "últimas 2 semanas"
  - campo: meetings_analyzed
    tipo: array
    origem: Obsidian (01 - Reuniões/) ou User Input
    obrigatorio: false
    description: "Lista de reuniões de venda do período para análise consolidada"

Saida:
  - campo: coaching_session
    tipo: markdown
    destino: Console + Obsidian (06 - Time/{seller}/Coaching/)
    persistido: true

Checklist:
  - "[ ] Reuniões do período coletadas e analisadas"
  - "[ ] Padrões positivos identificados (mínimo 2)"
  - "[ ] Gaps recorrentes identificados (mínimo 2)"
  - "[ ] Plano de melhoria com foco em 2-3 comportamentos"
  - "[ ] Exercícios práticos definidos por gap"
  - "[ ] Próxima reunião de coaching agendada"
```

---

## Phase 1: Coleta de Dados do Período

Buscar ou solicitar:
- Reuniões de venda do vendedor no período
- Scores das análises de reunião (se disponíveis)
- Feedback de prospects (se houver)
- Deals fechados vs perdidos no período

---

## Phase 2: Análise de Padrões

Consolidar scores de todas as reuniões e identificar:

**Padrões Positivos (score ≥7 recorrente):**
- Quais etapas o vendedor domina?
- Em quais tipos de reunião performa melhor?
- O que está funcionando?

**Gaps Recorrentes (score <6 em 2+ reuniões):**
- Quais etapas são consistentemente fracas?
- Em quais tipos de reunião performa pior?
- Há padrão de comportamento específico que causa os gaps?

---

## Phase 3: Priorização de Coaching

Selecionar os **2-3 comportamentos mais impactantes** para focar.

Critérios de priorização:
1. Impacto na taxa de conversão (etapas com maior peso: Discovery 25%, Objeções 15%, BANT 15%)
2. Frequência do gap (quantas vezes apareceu)
3. Facilidade de mudança (quick win vs mudança estrutural)

---

## Phase 4: Plano de Melhoria

Para cada gap priorizado:
- **Comportamento atual:** O que o vendedor faz hoje
- **Comportamento alvo:** O que deve fazer diferente
- **Exemplo prático:** Script ou frase concreta para usar
- **Exercício:** Como praticar antes da próxima reunião
- **Métrica de sucesso:** Como saberemos que melhorou

---

## Output Format

```markdown
# Sessão de Coaching — {seller_name} | {period}
**CSO | {data}**

## Resumo do Período
- **Reuniões analisadas:** {n}
- **Score médio:** {score}/10 (vs {score_anterior} período anterior)
- **Deals avançados:** {n} | **Fechados:** {n} | **Perdidos:** {n}

## 💪 O que está funcionando bem

### {Comportamento Positivo 1}
**Evidência:** "{trecho ou exemplo da transcrição}"
**Impacto:** {por que isso é importante}
→ **Continue fazendo isso.**

### {Comportamento Positivo 2}
...

## 📈 Foco de Desenvolvimento (top {n} prioridades)

### Prioridade 1: {gap}
**O que acontece hoje:** {descrição do comportamento atual}
**O que deve acontecer:** {comportamento alvo}
**Exemplo prático:**
> "{script ou frase sugerida}"

**Exercício antes da próxima reunião:**
{exercício concreto}

**Como vou medir a melhora:**
{métrica ou comportamento observável}

### Prioridade 2: {gap}
...

## 📊 Evolução de Score

| Etapa | Período Anterior | Período Atual | Δ |
|-------|-----------------|--------------|---|
| Rapport | {score} | {score} | {+/-} |
| Discovery/SPIN | {score} | {score} | {+/-} |
| BANT | {score} | {score} | {+/-} |
| Fechamento | {score} | {score} | {+/-} |

## Próximos Passos
- [ ] Lucas pratica exercício 1 antes de {data}
- [ ] Próxima sessão de coaching: {data}
- [ ] CSO acompanha as {n} próximas reuniões com foco em {prioridade 1}
```

---

## Completion Criteria

- [ ] Mínimo 2 padrões positivos identificados com evidência
- [ ] 2-3 gaps priorizados com plano de ação
- [ ] Exercícios práticos definidos
- [ ] Output salvo em `06 - Time/Lucas/Coaching/coaching-{YYYY-MM}.md`
