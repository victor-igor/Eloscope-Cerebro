# Task: Analyze Meeting Sales — CSO

```yaml
task: analyze-meeting-sales()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: false

Entrada:
  - campo: transcript
    tipo: string
    origem: User Input (transcrição colada) ou MeetingData JSON (vindo da skill /meeting)
    obrigatorio: true
  - campo: seller_name
    tipo: string
    origem: User Input ou MeetingData
    obrigatorio: false
    default: "Lucas"
  - campo: prospect_name
    tipo: string
    origem: User Input ou MeetingData
    obrigatorio: false
  - campo: deal_stage_before
    tipo: string
    origem: User Input ou MeetingData
    obrigatorio: false

Saida:
  - campo: sales_analysis
    tipo: object
    destino: Console + Obsidian (via /meeting:sync)
    persistido: true

Checklist:
  - "[ ] Transcrição ou MeetingData recebido"
  - "[ ] Todas as 7 etapas avaliadas com score individual"
  - "[ ] SPIN aplicado ao discovery"
  - "[ ] BANT verificado"
  - "[ ] Objeções identificadas e classificadas (tratadas / em aberto)"
  - "[ ] Score geral calculado (média ponderada)"
  - "[ ] Próximo passo avaliado (específico vs vago vs ausente)"
  - "[ ] Coaching gerado para o vendedor"
  - "[ ] Alerta para Victor disparado se score < 5.0 ou deal em risco"
  - "[ ] Estágio recomendado após reunião definido"
```

---

## Phase 1: Parse Input

Receber transcrição ou MeetingData JSON. Se transcrição bruta, extrair:
- Nome do vendedor (default: Lucas)
- Nome do prospect e empresa
- Tipo de reunião: `discovery | apresentacao | follow-up | negociacao | renovacao | upsell`
- Duração aproximada
- Estágio do deal antes da reunião (se informado)

---

## Phase 2: Score por Etapa

Avaliar cada etapa com score de 0-10 e observação específica:

### 2.1 Rapport (peso 10%)
- Houve quebra-gelo genuíno?
- Tom colaborativo estabelecido?
- Conexão pessoal ou contexto compartilhado mencionado?

**Score:** 0-10 | **Emoji:** ✅ (≥7) | ⚠️ (4-6) | ❌ (<4)

### 2.2 Contrato de Agenda (peso 10%)
- Objetivo da reunião definido logo no início?
- Tempo combinado?
- Próximo passo anunciado antecipadamente?

**Score:** 0-10

### 2.3 Discovery / SPIN (peso 25%)
Avaliar aplicação de cada elemento SPIN:
- **S (Situação):** Perguntas sobre contexto atual do negócio?
- **P (Problema):** Dores específicas identificadas?
- **I (Implicação):** Consequências do problema aprofundadas?
- **N (Necessidade):** Prospect expressou visão do estado desejado?
- Proporção fala vendedor vs prospect (ideal: vendedor <40%)

**Score:** 0-10

### 2.4 Qualificação BANT (peso 15%)
- **B:** Budget mencionado ou investigado?
- **A:** Decisor identificado? Outros envolvidos na decisão?
- **N:** Urgência e necessidade real confirmadas?
- **T:** Timeline para decisão estabelecido?

**Score:** 0-10 | Registrar o que ficou em aberto

### 2.5 Apresentação (peso 15%)
- Solução apresentada conectada às dores SPIN levantadas?
- Pitch genérico ou personalizado para o prospect?
- Benefícios tangíveis apresentados?

**Score:** 0-10

### 2.6 Tratamento de Objeções (peso 15%)
Para cada objeção identificada:
- Tipo: preço | tempo | concorrente | internal buy-in | não é prioridade | outro
- Status: tratada ✅ | parcialmente tratada ⚠️ | em aberto ❌
- Como foi tratada (se foi)

**Score:** 0-10

### 2.7 Fechamento (peso 10%)
- Próximo passo proposto?
- Data específica definida?
- Comprometimento do prospect obtido?
- Ou fechamento vago / ausente?

**Score:** 0-10

---

## Phase 3: Score Geral e Estágio

```
Score Geral = (rapport×0.10) + (agenda×0.10) + (discovery×0.25) +
              (bant×0.15) + (presentation×0.15) + (objections×0.15) +
              (closing×0.10)
```

**Estágio recomendado após reunião:**
- Baseado no que foi confirmado/qualificado na reunião
- Opções: qualificacao | discovery | apresentacao | proposta | negociacao | fechado | perdido | nurturing

---

## Phase 4: Coaching e Alertas

### Coaching para o Lucas
- 2-3 pontos fortes específicos (com exemplo da transcrição)
- 2-3 pontos de melhoria com orientação concreta de "o que fazer diferente"
- Padrão identificado (se houver reuniões anteriores para comparar)

### Alertas para Victor (disparar se qualquer condição):
- Score geral < 5.0
- Fechamento vago pela 2ª vez com mesmo prospect
- Objeção crítica não tratada
- Prospect mencionou concorrente
- Deal > 30 dias sem avanço

---

## Output Format

```markdown
## 🎯 Análise de Reunião — {seller_name} | {prospect_name} | {date}

**Score Geral:** {score}/10
**Tipo de Reunião:** {tipo}
**Estágio antes:** {stage_before} → **Estágio recomendado:** {stage_after}

### Por Etapa:
| Etapa | Score | Observação |
|-------|-------|------------|
| Rapport | {score}/10 {emoji} | {observação} |
| Contrato de Agenda | {score}/10 {emoji} | {observação} |
| Discovery / SPIN | {score}/10 {emoji} | {observação} |
| Qualificação BANT | {score}/10 {emoji} | {observação} |
| Apresentação | {score}/10 {emoji} | {observação} |
| Objeções | {score}/10 {emoji} | {observação} |
| Fechamento | {score}/10 {emoji} | {observação} |

### BANT Status:
- B: {confirmado ✅ / em aberto ⚠️ / não investigado ❌} — {detalhe}
- A: {status} — {detalhe}
- N: {status} — {detalhe}
- T: {status} — {detalhe}

### Objeções Identificadas:
- {objeção 1}: {tipo} | {status} | {como tratou ou recomendação}
- {objeção 2}: ...

### Próximo Passo:
{O que foi combinado com data e responsável, ou "⚠️ VAGO" ou "❌ AUSENTE"}

### 💪 Pontos Fortes (Lucas):
- {ponto 1 com exemplo}
- {ponto 2 com exemplo}

### 📈 Oportunidades de Melhoria:
- {gap 1}: {o que fazer diferente}
- {gap 2}: {o que fazer diferente}

### ⚠️ Alertas para Victor:
{lista de alertas ou "Nenhum alerta nesta reunião ✅"}

### 🔄 Padrão Identificado:
{padrão recorrente ou "Dados insuficientes para padrão"}
```

---

## Completion Criteria

- [ ] Score calculado para todas as 7 etapas
- [ ] SPIN e BANT avaliados individualmente
- [ ] Objeções listadas com status
- [ ] Próximo passo avaliado
- [ ] Coaching gerado para o Lucas
- [ ] Alertas disparados se aplicável
- [ ] Output no formato padrão acima
