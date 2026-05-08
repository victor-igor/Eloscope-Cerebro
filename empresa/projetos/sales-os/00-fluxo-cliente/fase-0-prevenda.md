---
tipo: processo
status: ativo
tags: [sales-os, fase-0, prevenda, comercial]
atualizado: 2026-05-06
---

# Fase 0 — Pré-venda

**Trigger:** lead Q2 qualificado (outbound / indicação / inbound).
**Saída:** contrato assinado + setup pago confirmado.
**Dono:** Lucas.

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Pesquisar segmento antes da call | `market-researcher` |
| Analisar transcrição pós-discovery | `diagnostic-analyst` |
| Enriquecer perfil do lead | `@sirius` (Eloscope OS) |
| Follow-up pós-proposta | `@halley` (Eloscope OS) |
| Skills ativas | `q2-market-knowledge` · `spin-methodology` · `eloscope-brand-voice` |

---

## Tarefas

### 0.1 Pesquisa de segmento
- [ ] Rodar `market-researcher` com vertical + cidade do lead
- [ ] Validar: lead tem time de vendas ativo? (critério Q2)
- [ ] Checar: fatura R$200k–R$2M/mês? (sweet spot FMS)

### 0.2 Discovery call (~75 min, SPIN)
- [ ] Seguir script → [[02-comercial/script-primeira-call-v1]]
- [ ] Rodar 4 blocos SPIN: Situação → Problema → Implicação → Need-payoff
- [ ] Anotar: volume leads/mês, conversão atual, CRM em uso, dor principal
- [ ] Gravar no Fathom ou Fireflies

### 0.3 Mini-diagnóstico preliminar (gratuito — hook de venda)
- [ ] Rodar `diagnostic-analyst` na transcrição da call
- [ ] Entregar PDF/doc 1 página: "onde você está perdendo dinheiro agora"
- [ ] SLA: enviar em até 24h após a call

### 0.4 Proposta
- [ ] Definir pacote: Lean / Beta / Real
- [ ] Calcular setup: 10–20% do retorno esperado pelo cliente
- [ ] Mensalidade: R$1.500–R$3.500 (conforme pacote e complexidade)
- [ ] Success fee: opcional — combinar só se retorno for mensurável
- [ ] Gerar com `proposal-generator` ¹ ou template → [[templates/comercial/Proposta_Lead_Template]]
- [ ] Enviar em até 24h após a call

### 0.5 Cadência de follow-up
- [ ] Dia 1: confirmar recebimento + pergunta objetiva
- [ ] Dia 3: adicionar valor (dado de nicho, case, objeção tratada)
- [ ] Dia 7: última tentativa antes de reactivar em 30 dias
- [ ] Objeções nível 1 → [[02-comercial/playbook-spin/03-objecoes-mercado]]

### 0.6 Fechamento
- [ ] Gerar contrato com escopo travado (`contract-drafter` ¹)
- [ ] Assinar via `/assinar` (Autentique)
- [ ] Confirmar pagamento do setup
- [ ] **Setup pago = dispara Fase 1**

---

## Regras

- Não avança para Fase 1 sem setup pago. Diagnóstico começa com caixa.
- Não negocia preço abaixo do mínimo do pacote sem Victor validar.
- Lead sem resposta após 3 follow-ups → status `perdido` no [[02-comercial/pipeline]]; reativar em 30 dias.

---

¹ Agente candidato — ainda não implementado. Usar template manual até criar.
