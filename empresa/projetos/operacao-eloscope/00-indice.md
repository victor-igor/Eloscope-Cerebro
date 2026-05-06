---
tipo: indice
projeto: operacao-eloscope
status: em construção
data-inicio: 2026-05-05
autor: Victor + C-Level Squad (CMO, CSO, COO)
tags: [operacao, playbook, marketing, comercial, operacional, pos-venda, indice]
---

# Operação Eloscope — Índice Mestre
> Mapeamento completo da operação da agência: do primeiro contato até o pós-venda.
> Construído em sessão com os agentes C-Level Squad (@cmo-architect · @cso · @coo-orchestrator).
> **Fonte única de verdade** para como a Eloscope opera em cada frente.

---

## Estrutura do Projeto

```
operacao-eloscope/
│
├── 00-indice.md                    ← Você está aqui
│
├── 01-marketing/                   ← Como o lead chega
│   ├── playbook-aquisicao.md
│   └── estrategia-social-media-branding.md
│
├── 02-comercial/                   ← Como o lead vira cliente
│   ├── playbook-sdr-qualificacao.md    [🔄 Sprint 2 — a criar]
│   └── playbook-closer-fechamento.md   [🔄 Sprint 3 — a criar]
│
├── 03-operacional/                 ← Como a entrega acontece
│   ├── playbook-onboarding.md          [🔄 Sprint 4 — a criar]
│   └── playbook-entrega.md             [🔄 Sprint 4 — a criar]
│
└── 04-pos-venda/                   ← Como o cliente é retido
    ├── playbook-cs.md                  [⚪ Backlog]
    └── playbook-retencao.md            [⚪ Backlog]
```

---

## Status dos Sprints

| Sprint | Área | Status | Agente responsável | Arquivo(s) |
|--------|------|--------|-------------------|------------|
| **Sprint 1** | Marketing & Aquisição | ✅ Concluído | @cmo-architect | `01-marketing/` |
| **Sprint 2** | Comercial: SDR + Qualificação | 🔄 Próximo | @cso | `02-comercial/playbook-sdr-qualificacao.md` |
| **Sprint 3** | Comercial: Reunião + Fechamento | ⏳ Aguardando Sprint 2 | @cso | `02-comercial/playbook-closer-fechamento.md` |
| **Sprint 4** | Operacional: Onboarding + Entrega | ⏳ Aguardando Sprint 3 | @coo-orchestrator | `03-operacional/` |
| **Backlog** | Pós-venda: CS + Retenção | ⚪ Backlog | @coo-orchestrator | `04-pos-venda/` |

---

## 01 — Marketing & Aquisição ✅

> **Como o lead chega até a Eloscope.**

### Resumo do que foi definido

**Canais ativos agora (Fase 1):**
- Indicação sistematizada (script de pedido + protocolo de abordagem)
- Outbound eventos (protocolo pós-evento 3 toques em 7 dias)
- Conteúdo orgânico Instagram (3x/semana — calendário semanal)
- LP capturando leads via formulário (www.eloscope.com)

**Fase 2 (quando financeiro organizado + 2 clientes validados):**
- Meta Ads · CPL ≤ R$80 · Budget inicial R$3-5k/mês
- Retargeting LP

**Posicionamento da marca (frases âncora):**
- *"Operação Automatizada. Margem Preservada. Escala Sem Contratar."*
- *"Seus Agentes de IA como sócios silenciosos."*

**4 Pilares de conteúdo:**
1. Desmistificando a IA para PMEs (Carrossel · 1x/semana)
2. Agentes de IA: Sócios Silenciosos (Reel · 1x/semana)
3. ROI na Prática: Cases de Sucesso (Misto · quinzenal → semanal)
4. Autonomia e Capacitação (Carrossel+Reel · 1x/semana)

**SLAs de handoff para o Comercial:**
- Inbound (LP): < 30 minutos
- Indicação: < 24 horas
- Pós-evento: < 24 horas

### Documentos
- [`01-marketing/playbook-aquisicao.md`](01-marketing/playbook-aquisicao.md) — Estratégia de canais, formulário, indicação, eventos, métricas
- [`01-marketing/estrategia-social-media-branding.md`](01-marketing/estrategia-social-media-branding.md) — Posicionamento, tom de voz, pilares, iscas digitais, SEO em copy
- [`01-marketing/guia-producao-conteudo.md`](01-marketing/guia-producao-conteudo.md) — Padrão oficial de layout, direção de arte (dark mode + ciano) e estrutura de carrosséis/Reels

---

## 02 — Comercial: SDR + Qualificação 🔄

> **O que acontece do formulário/abordagem até o lead estar qualificado e com reunião marcada.**

### O que será construído no Sprint 2

- Roteiro de abordagem por canal (Inbound · Outbound · Indicação)
- SLA e cadência: quantas tentativas, em que intervalos, em quais canais
- Framework de qualificação (BANT + critérios ICP Eloscope)
- Script do WhatsApp (mensagem 1, follow-up 1, follow-up 2, fallback)
- O que fazer quando o lead não responde
- Critério de desqualificação (quando parar de tentar)
- Handoff para o Closer: o que o SDR entrega, em qual formato

*Documento a criar: `02-comercial/playbook-sdr-qualificacao.md`*

---

## 03 — Comercial: Reunião + Fechamento ⏳

> **Da reunião agendada até o contrato assinado.**

### O que será construído no Sprint 3

- Estrutura da reunião de vendas (abertura · reframe · diagnóstico SPIN · oferta · objeções · fechamento)
- Scripts SPIN adaptados por perfil de cliente (Q2: serviço com time comercial)
- Matriz de objeções com respostas LAER
- Follow-up pós-reunião (sequência se não fechou)
- Quando e como Victor entra na call junto com Lucas
- Critério de aprovação de desconto / negociação

*Documento a criar: `02-comercial/playbook-closer-fechamento.md`*

> Referência existente: `areas/vendas/metodologia/spin-playbook-v0.2.md`

---

## 04 — Operacional: Onboarding + Entrega ⏳

> **Do "fechou" até o cliente operando com a IA — e o que acontece depois.**

### O que será construído no Sprint 4

- Checklist de onboarding (disparo de contrato → formulário → kick-off → semana 1)
- SOP de entrega por produto (Elo OS Starter · Growth · Scale)
- O que o cliente recebe em cada fase (D1, D3, D7, D30)
- Protocolo de kick-off (pauta, quem participa, o que é decidido)
- Rotina de acompanhamento mensal (CS meeting)
- O que é critério de sucesso ao final do mês 2

*Documentos a criar: `03-operacional/playbook-onboarding.md` + `03-operacional/playbook-entrega.md`*

> Referência existente: `empresa/projetos/sales-os/03-entrega/sop-entrega.md`

---

## 05 — Pós-Venda: CS + Retenção ⚪

> **Como o cliente é mantido, expandido e transformado em indicador.**

*Backlog — construir depois que os 4 sprints anteriores estiverem rodando.*

---

## Documentos relacionados (fora desta pasta)

| Documento | Localização | Relação |
|-----------|------------|---------|
| Funil de Vendas | `empresa/projetos/sales-os/02-comercial/funil-vendas.md` | Base do Sprint 2 |
| SPIN Playbook v0.2 | `areas/vendas/metodologia/spin-playbook-v0.2.md` | Base do Sprint 3 |
| SOP de Entrega | `empresa/projetos/sales-os/03-entrega/sop-entrega.md` | Base do Sprint 4 |
| Guia Comercial Lucas | `empresa/projetos/sales-os/02-comercial/guia-comercial-lucas.md` | Referência Sprint 2+3 |
| Oferta Padrão | `empresa/projetos/sales-os/02-comercial/oferta-padrao.md` | Referência Sprint 3 |
| Pipeline CRM | `areas/vendas/oportunidades/` | Onde os deals vivem |
| Pendências ativas | `memory/context/pendencias.md` | Estado atual do negócio |

---

## Decisões abertas (consolidadas)

| Decisão | Quem decide | Prazo |
|---------|------------|-------|
| Victor cria visual de conteúdo sozinho ou contrata editor? | Victor | Esta semana |
| Automação DM Instagram (iscas digitais) — Hugo implementa? | Victor + Hugo | Semana 3 |
| Nomear e criar identidade dos Agentes além da Íris (SDR, BDR, Follow-up) | Victor | 2 semanas |
| Webhook n8n: LP → notificação Lucas em < 30min | Hugo | Antes de ligar Meta Ads |

---

*Eloscope — Operação Completa · Índice Mestre v1.0 · Maio 2026*
*Atualizar este índice sempre que um sprint for concluído.*
