# Task: Diagnose Deal — CSO

```yaml
task: diagnose-deal()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: deal_name
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: deal_context
    tipo: string
    origem: User Input ou Obsidian (03 - Comercial/Funis/{deal}.md)
    obrigatorio: true
    description: "Histórico do deal: interações, estágio, objeções, notas de reunião"

Saida:
  - campo: deal_diagnosis
    tipo: markdown
    destino: Console + Obsidian (03 - Comercial/Funis/{deal}.md)
    persistido: true

Checklist:
  - "[ ] Histórico completo do deal coletado"
  - "[ ] Causa raiz do problema identificada"
  - "[ ] BANT status revisado"
  - "[ ] Objeções em aberto mapeadas"
  - "[ ] Risco de perda avaliado (baixo/médio/alto/crítico)"
  - "[ ] Plano de reativação ou qualificação de perda gerado"
  - "[ ] Próximo passo com data e responsável definido"
```

---

## Phase 1: Coleta do Histórico

Reunir:
- Estágio atual e há quantos dias neste estágio
- Histórico de interações (reuniões, emails, calls)
- Scores das reuniões analisadas (se disponível)
- BANT status atual
- Objeções identificadas e status (tratada/em aberto)
- Último próximo passo definido e se foi executado

---

## Phase 2: Diagnóstico de Causa Raiz

Identificar a categoria principal do problema:

| Categoria | Sintomas |
|-----------|----------|
| **Qualificação falha** | BANT incompleto, autoridade errada, sem budget real |
| **Discovery insuficiente** | Dores não aprofundadas, solução não conectada ao problema |
| **Objeção não tratada** | Mesma objeção em múltiplas reuniões |
| **Fechamento fraco** | Próximos passos vagos, sem comprometimento |
| **Timing** | Prospect com prioridades internas mudadas |
| **Fit ruim** | Produto não resolve o problema real do prospect |
| **Concorrência** | Prospect avaliando alternativas ativamente |
| **Processo interno** | Burocracia do prospect, múltiplos decisores |

---

## Phase 3: Avaliação de Risco

**🟢 Baixo risco** — Deal parado por timing, prospect engajado, BANT confirmado
**🟡 Médio risco** — Deal parado >14 dias, objeção em aberto, autoridade incerta
**🔴 Alto risco** — Deal parado >30 dias, sem resposta, BANT incompleto
**⛔ Crítico** — Deal parado >60 dias, concorrente mencionado, decisor mudou

---

## Phase 4: Plano de Ação

Com base na causa raiz e nível de risco, gerar:

**Se reativável:**
- Script de reativação personalizado para o contexto
- Máximo de tentativas antes de qualificar como perdido
- Abordagem diferente da última (novo ângulo, novo canal, nova oferta de valor)

**Se perdido:**
- Motivo real da perda (para aprendizado)
- Se vale manter em nurturing (e com qual frequência)
- Lição aprendida para deals futuros

---

## Output Format

```markdown
# Diagnóstico de Deal — {deal_name}
**CSO | {data}**

## Situação Atual
- **Empresa:** {empresa}
- **Estágio:** {stage}
- **Tempo no estágio atual:** {X} dias (SLA: {X} dias)
- **Nível de risco:** {🟢/🟡/🔴/⛔} {nivel}
- **Último contato:** {data}

## BANT Status
| Critério | Status | Detalhe |
|----------|--------|---------|
| Budget | ✅/⚠️/❌ | {detalhe} |
| Authority | ✅/⚠️/❌ | {detalhe} |
| Need | ✅/⚠️/❌ | {detalhe} |
| Timeline | ✅/⚠️/❌ | {detalhe} |

## Objeções em Aberto
- {objeção 1}: {desde quando} — {status}
- {objeção 2}: ...

## 🔍 Diagnóstico de Causa Raiz
**Categoria:** {categoria}
**O que aconteceu:** {análise do que levou ao estado atual}
**Fator determinante:** {o principal elemento que bloqueia o avanço}

## Plano de Reativação

### Tentativa 1 (executar até {data})
**Canal:** {email/ligação/whatsapp/LinkedIn}
**Script sugerido:**
> "{mensagem personalizada}"
**Objetivo:** {o que queremos descobrir ou comprometer}

### Tentativa 2 (se sem resposta em {X} dias)
**Abordagem diferente:** {novo ângulo}
**Script:**
> "{mensagem}"

### Se ainda sem resposta após tentativa 2:
→ Qualificar como {perdido | nurturing de longo prazo}

## Lição Aprendida
{o que este deal ensina sobre o processo ou sobre a qualificação}

## ⚠️ Alerta para Victor
{alerta específico ou "Deal gerenciável — sem escalonamento necessário"}
```

---

## Completion Criteria

- [ ] Causa raiz identificada com categoria
- [ ] Nível de risco definido
- [ ] Plano de reativação com script gerado
- [ ] Máximo de tentativas e critério de perda definidos
- [ ] Output salvo no deal do Obsidian
