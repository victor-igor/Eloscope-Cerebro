---
tipo: processo
status: ativo
tags: [sales-os, fase-5, acompanhamento, recorrencia, cs]
atualizado: 2026-05-06
---

# Fase 5 — Acompanhamento Mensal

**Trigger:** go-live confirmado (Dia 10).
**Saída:** renovação ativa ou case publicado.
**Donos:** Lucas (NPS + upsell + case) · Victor (reunião mensal) · Hugo (manutenção técnica).
**Cadência:** mensal, enquanto houver contrato.

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Produzir case (Dia 60+) | `case-study-writer` ¹ |

---

## Preparação (até 3 dias antes da reunião)

**Hugo:**
- [ ] Exportar dados do dashboard do mês
- [ ] Identificar anomalias ou alertas técnicos
- [ ] Verificar saúde dos sistemas (VPS, Openclaw, conexão WhatsApp)

**Victor:**
- [ ] Analisar dados exportados
- [ ] Preparar pauta: métricas do mês · comparativo com mês anterior · o que funcionou / não funcionou · ajustes propostos (scripts, cadências, prompts) · foco dos próximos 30 dias

---

## Reunião Mensal (~60 min)

**Victor conduz. Lucas presente quando relevante.**

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Métricas do mês — o que os números dizem | 15 min |
| 2 | O que funcionou e o que não funcionou | 15 min |
| 3 | Ajustes aprovados (scripts, cadências, IA) | 15 min |
| 4 | Foco dos próximos 30 dias | 10 min |
| 5 | Dúvidas e encerramento | 5 min |

**Pós-reunião:**
- [ ] Victor documenta ajustes decididos
- [ ] Hugo implementa ajustes técnicos (SLA 48h)
- [ ] Victor atualiza playbook se necessário
- [ ] Lucas: check de satisfação + oportunidade de upsell (Arm Web / expansão)

---

## Marcos de resultado

### Marco Dia 30
- [ ] IA Copiloto ativa e usada diariamente pelo time
- [ ] Cadências rodando — ≥80% dos novos leads recebendo follow-up
- [ ] KPIs registrados como baseline (tempo de resposta, taxa de conversão, leads na base)
- [ ] Primeira reunião mensal realizada
- [ ] Lucas: NPS informal (o time está usando? gestor viu valor?)

### Marco Dia 60 — gatilho da garantia
- [ ] Relatório comparativo Dia 0 → Dia 60 preparado por Victor
- [ ] Pelo menos 1 indicador com melhora mensurável:
  - Tempo de resposta: X horas → <30 min
  - Taxa de follow-up: X% → >80%
  - Taxa de conversão: qualquer melhora documentada
  - Leads reativados: base parada gerou novas conversas
- [ ] Lucas: check de satisfação — cliente renova ou aciona garantia?
- [ ] **Zero melhora documentada → Victor + Lucas alinham devolução do setup**

### Marco Dia 60–90 — case
- [ ] Lucas verifica: cliente satisfeito + resultado visível?
- [ ] Abrir pedido de case → mensagem template → [[03-entrega/template-case]]
- [ ] Coletar dados mês a mês
- [ ] Rodar `case-study-writer` ¹ com os dados
- [ ] Cliente aprova por escrito antes de publicar

---

## Escalonamento de problemas

| Problema | Quem resolve | SLA |
|---------|-------------|-----|
| Cliente insatisfeito | Lucas (escuta) + Victor (soluciona) | Imediato |
| Bug técnico / sistema offline | Hugo | 4h úteis |
| Dashboard com dados errados | Hugo | 24h úteis |
| Solicitação fora do escopo | Lucas ouve → Victor decide | 48h |
| Cliente quer cancelar | Lucas + Victor | Imediato |

---

## Métricas de sucesso do cliente

| Métrica | Como capturar |
|---------|--------------|
| Taxa de conversão | Dashboard (input do vendedor) |
| Tempo médio de resposta | IA Copiloto (automático) |
| Taxa de follow-up | Cadências n8n (automático) |
| Leads reativados | Dashboard (campanha reativação) |
| Deals em aberto por etapa | Dashboard |
| Receita do mês | Input manual do cliente |

---

¹ Agente candidato — ainda não implementado.
