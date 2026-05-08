---
tipo: artefato
status: rascunho
tags: [sales-os, playbook, cliente]
cliente: {cliente-slug}
vertical: {vertical}
gerado-por: playbook-writer
revisado-por: Victor
atualizado: YYYY-MM-DD
---

# Playbook de Vendas — {Nome do Cliente}

> Gerado pelo `playbook-writer`. Revisado por Victor antes do Gate.
> Baseado em: diagnóstico [[diagnostico]] + fluxograma aprovado.

---

## 1. Qualificação de Leads

**Critérios SPIN adaptados ao segmento:**

| Critério | Como checar | Peso |
|---------|------------|------|
| | | |

**Pergunta de abertura:**
> "..."

---

## 2. Funil do Cliente

```
[canal] → [1º contato] → [qualificação] → [proposta] → [fechamento]
```

| Etapa | Critério de entrada | Critério de saída | SLA |
|-------|-------------------|------------------|-----|
| | | | |

---

## 3. Scripts por canal

### WhatsApp — 1º contato (lead frio)
>

### WhatsApp — 1º contato (lead quente / indicação)
>

### WhatsApp — Follow-up 1 (Dia 1)
>

### WhatsApp — Follow-up 2 (Dia 3)
>

### WhatsApp — Follow-up 3 (Dia 7)
>

### WhatsApp — Reativação de base
>

### WhatsApp — Fechamento
>

---

## 4. Cadências de Follow-up

| Tipo de lead | Dia 1 | Dia 3 | Dia 7 | Dia 14 |
|-------------|-------|-------|-------|--------|
| Frio (outbound) | | | | |
| Quente (indicação) | | | | |
| Base parada | | | | |

---

## 5. Matriz de Objeções

| Objeção | Resposta-base | Tom |
|---------|--------------|-----|
| "É muito caro" | | direto |
| "Não sei se terá retorno rápido" | | lógico |
| "Dá trabalho envolver meu time" | | racional |
| | | |

---

## 6. Handoff SDR → Closer

**SDR para:**
- Lead respondeu e tem fit (critério: ...)

**Closer assume quando:**
- Lead pediu proposta formal
- Lead pediu reunião
- Lead Very Hot (pontuação ...)

**Passagem inclui:**
- Resumo da conversa
- Dor principal identificada
- Objeção levantada (se houver)

---

## 7. KPIs e Metas por Etapa

| Métrica | Meta | Como medir |
|---------|------|-----------|
| Taxa de resposta (outbound) | >20% | Responderam / enviados |
| Taxa de qualificação | >60% | Qualificados / responderam |
| Taxa de reunião | >70% | Reunião feita / agendada |
| Taxa fechamento | >30% | Fechados / propostas |
| Tempo 1º contato → fechamento | <14 dias | Data 1º contato → data fechamento |

---

## 8. Regras IA / Humano

| Ação | Quem faz |
|------|---------|
| 1º contato frio | IA (agente SDR) |
| Follow-up Dia 1–3 | IA (cadência n8n) |
| Lead Very Hot (>50 pts) | **Humano — ligar em <5 min** |
| Proposta formal | Humano (Lucas) |
| Negociação | Humano (Lucas + Victor se necessário) |
| Reunião de diagnóstico | Humano (Victor) |
| Ajuste fino de scripts | Humano (Victor) valida antes de rodar |
