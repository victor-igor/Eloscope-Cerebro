---
tipo: operacional
empresa: Elite Maqlam
tags: [cliente/maqlam, tecnico, backlog]
---

# Pendências Técnicas — Elite Maqlam

> Backlog técnico do sistema elo.elitemaqlam.com.br.
> Responsável principal: Hugo (implementação) + Victor (validação produto).

---

## 🔴 Crítico

| Item | Detalhe | Responsável | ClickUp |
|------|---------|-------------|---------|
| Risco API oficial Meta | Atualização pode remover número do lead, matando fluxo híbrido WhatsApp. Sem fallback definido. | Victor + Hugo | `86e16u6du` |

---

## 🟡 Backlog ativo

| Item | Detalhe | Responsável | ClickUp |
|------|---------|-------------|---------|
| API Olist quebrada | Story 1.6 do repo bloqueada (B-1.5-A) — Denis precisa fornecer credenciais Olist/Tiny/Bling | Denis → Hugo | `86e16u6cg` |
| Botão "Chatútil" | Adicionar na tela de contato 360° (pedido na call 24/04) | Hugo | `86e16u6cn` |
| Refresh do Kanban | Atualização automática do board de tarefas | Hugo | `86e16u6cv` |
| Mensagens de erro no exportador | Melhorar feedback de erro na exportação de leads | Hugo | `86e16u6d3` |
| Filtros geográficos no Gerador de Leads | Filtros por região/cidade mais granulares | Victor | `86e16u6db` |
| Admin Marcella/Juliano na Knowledge Base | Acesso confirmado na call 24/04 — validar se foi configurado | Hugo | `86e16u6dj` |

---

## ⚪ Débito técnico do repo (stories abertas)

| Story | Título | Status | Bloqueio |
|-------|--------|--------|---------|
| 1.6 | Integração Catálogo Olist | 🔴 Bloqueada | B-1.5-A — credenciais Denis |
| B-1.4-A | Token Chatwoot | 🟡 Parcial | Token ausente do .env |

> Ref: `BLOCKERS.md` no repo `git@github.com:victor-igor/Maqlam.git`

---

## ✅ Resolvido recentemente

| Item | Resolvido em | Como |
|------|-------------|------|
| Asaas fatura ajustada para R$1.197 | 24/04/2026 | Lucas ajustou manualmente |
| Acesso admin Marcella + Juliano | 24/04/2026 | Denis solicitou, confirmado na reunião |
| Script Bumble (MAC1) cadastrado | abr/2026 | Victor cadastrou + ativou |

---

---

## ClickUp — Tasks criadas (semana 04–08/05)

| Task | ID | Responsável |
|------|----|-------------|
| CS meeting Victor + equipe Maqlam (08-09/05) | `86e16u6bb` | Victor |
| Loom cashback report para equipe vendas | `86e16u6bj` | Lucas |
| Testar BDR Bumble + enviar para Denis testar | `86e16ub5t` | Victor + Lucas |
| Validar mensagens cashback com Denis | `86e16ub51` | Lucas |
| Disparo campanha cashback — 04/05 12h | `86e16ub4p` | Denis |
| Tag de atenção equipe de vendas | `86e16uawt` | Victor |
| Update resultados → Denis | `86e16uawy` | Lucas |
| Documentar projeto (código, fluxos, integrações) | `86e16uaxc` | Lucas |

> Chips Day 1–5 (04–08/05): criar tasks avulsas diárias no início de cada dia.

---

*Atualizado: 2026-05-03*
