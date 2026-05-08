---
tipo: processo
status: ativo
tags: [sales-os, fase-2, processo, playbook, fluxograma]
atualizado: 2026-05-06
---

# Fase 2 — Estrutura de Processo

**Trigger:** diagnóstico aprovado pelo cliente + rota definida.
**Saída:** fluxograma Mermaid aprovado + playbook de vendas entregue ao cliente.
**Dono:** Victor (redige e apresenta) · Lucas (valida com cliente).
**Duração:** 1 semana (Rota 1) · 2 semanas (Rota 2).

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Gerar playbook customizado | `playbook-writer` |
| Validar cronograma antes de enviar | `schedule-validator` |
| Skills ativas | `spin-methodology` · `mermaid-funnel-templates` · `q2-market-knowledge` |

---

## Escolha de rota (definida no Diagnóstico)

| Rota | Critério | Prazo extra | Setup |
|------|---------|------------|-------|
| **Rota 1** | Cliente já tem processo rodando | 0 | Padrão |
| **Rota 2** | Cliente não tem processo ou está muito bagunçado | +1–2 semanas | Mais alto (justifica) |

---

## Etapa 3 — Análise de Rota

**Rota 1:**
- [ ] Mapear fluxo atual (canais → SDR → closer → fechamento)
- [ ] Identificar gargalos (onde o lead morre)
- [ ] Listar canais com conversão baixa ou CAC alto

**Rota 2:**
- [ ] Analisar produto, posicionamento e mercado do cliente
- [ ] Estudar 3–5 concorrentes Q2 do mesmo segmento
- [ ] Desenhar processo-base Q2 adaptado ao cliente
- [ ] Entregar: "Processo-Base Proposto" em doc

---

## Etapa 4 — Fluxograma do Funil

- [ ] Gerar Mermaid com `mermaid-funnel-templates`: canais + etapas + taxas de conversão alvo + pontos de automação futura
- [ ] Exportar PNG para compartilhar com cliente (Miro board read-only)
- [ ] Rodar `schedule-validator` no cronograma antes de enviar

---

## Etapa 5 — Playbook de Vendas

Rodar `playbook-writer` com: dados do diagnóstico + segmento + pacote contratado.

**Estrutura obrigatória (8 seções):**
1. Qualificação de leads (SPIN ou BANT adaptado)
2. Funil do cliente (baseado no fluxograma da Etapa 4)
3. Scripts por canal e etapa (WhatsApp, e-mail, LinkedIn)
4. Cadências de follow-up (tempos + mensagens + canais)
5. Matriz de objeções e respostas
6. Handoff SDR → closer
7. KPIs e metas por etapa
8. Regras IA/humano (o que a IA faz sozinha, o que o humano valida)

---

## Checklist de entrega da Fase 2

- [ ] Fluxograma revisado por Victor + aprovado internamente
- [ ] Playbook revisado por Victor + aprovado internamente
- [ ] Cronograma validado pelo `schedule-validator`
- [ ] Documentos salvos em `docs/clientes/{slug}/`
- [ ] Materiais enviados ao cliente para revisão antes do Gate

**Ajustes pedidos pelo cliente → iterar aqui, max 1 rodada antes do Gate.**
**Impasse → Victor decide se vai ao Gate assim ou refaz uma seção.**
