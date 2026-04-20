# Custos & Stack — 6OS

**Fonte:** reunião 18/04/2026 + `CLAUDE.md` Sales OS + v1.0.
**Uso:** (a) preencher seção "Custos" do `Proposta_Lead_Template.md`; (b) validar orçamento pro cliente antes de enviar; (c) revisar trimestralmente quando preço de SaaS mudar.

## Stack canônico 6OS

### Ação com cliente final (WhatsApp, follow-up, atendimento)
**n8n** — estável, templates prontos, todos agentes atuais em produção (Maya, Morgana, Maquilana, Jean).

### Inteligência interna (orquestração, crons, análise, decisão)
**OpenClaw / OpenCloud** — on-prem, memória persistente, skills próprias.
Regra: **não fala direto com cliente final exceto no Caminho B da Fase 2 (onboarding)**.

### Canal
**WhatsApp Business API (WABA)** via Meta. Sem exceção.

### Persistência
**Supabase** (Postgres + Auth + RLS multi-tenant).

### CRM (2 modos)
1. **Eloscope multi-tenant** (padrão Beta) — React + n8n. Custo de dev único já pago.
2. **Integração ao CRM do cliente** (HubSpot / Pipedrive / RD / Kommo) — só se cliente já usa e não quer migrar. Filtro anti-software-house aplica: se aparecer em 3+ clientes a gente prioriza; menos que 3 = cliente paga custo extra.

### Frontend dashboard (só na versão Real + 7D)
**Next.js + Tailwind v4 + shadcn/ui + Clerk + Supabase**.

### Docs / handoff
Notion, Google Docs, Loom.

### Diagramas
Mermaid em Miro ou FigJam.

### Monitoramento de reunião
Fireflies (principal), Fathom (secundário).

### Em teste / não-produção
**Paperclip** — não entra em Beta.

## Tabela de custos — Versão Beta

### Setup (one-time)

| Ferramenta | Custo Eloscope (time) | Licença/SaaS (cliente paga direto) | Alocado no setup R$ 2.000–3.000 |
|---|---|---|---|
| n8n (self-hosted) | 8–16h × R$150 = R$1.200–2.400 | R$ 0 (infra Eloscope) | Sim |
| OpenClaw / OpenCloud | 12–24h × R$150 = R$1.800–3.600 | R$ 0 (on-prem Eloscope) | Sim |
| Supabase schema + RLS | 4–8h × R$150 = R$600–1.200 | R$ 0 (tier free ou Eloscope shared) | Sim |
| WABA Business Verification | 6–12h × R$150 = R$900–1.800 | **Cliente:** R$ 0 verification, ~R$ 0,03–0,40 por conversation | Sim (setup Eloscope); conversas direto conta Meta |
| CRM Eloscope multi-tenant | 4–8h × R$150 = R$600–1.200 | R$ 0 (multi-tenant Eloscope) | Sim |
| Playbook (doc + scripts) | 20–40h × R$150 = R$3.000–6.000 | R$ 0 | Sim |
| Treinamento gravado | 8–12h × R$150 = R$1.200–1.800 | R$ 0 | Sim |
| Loom (gravações) | 0 | R$ 0 (tier free Eloscope) | — |
| **TOTAL custo-time Beta setup** | **R$ 9.300–18.000** | — | — |
| **Preço cobrado ao cliente** | | | **R$ 2.000–3.000** |
| **Delta (investimento Eloscope)** | | | **Negativo — esperado no Beta** |

> **Nota:** o setup Beta é deficitário por design. Investimento em metodologia + case. O payback vem via (a) conversão Beta → Real, (b) reuso de playbook/skill em clientes seguintes, (c) case pra fechar próxima imobiliária/clínica sem Beta gratuito.

### Mensal operação Beta

| Item | Custo Eloscope (time) | Custo direto do cliente |
|---|---|---|
| Fase 3 Acompanhamento (10–20h/mês) | R$1.500–3.000 | — |
| WhatsApp conversations | 0 | ~R$ 50–500/mês conforme volume (conta Meta) |
| Supabase (tier free até ~50k req) | R$ 0 | R$ 0 (se estourar: ~R$ 125/mês do tier Pro, cliente passa pra Real) |
| n8n infra | R$ 50–100 | — (Eloscope absorve) |
| OpenClaw / OpenCloud infra | R$ 100–200 | — (Eloscope absorve) |
| CRM Eloscope multi-tenant | R$ 0 | — |
| **TOTAL custo-time Eloscope/mês** | **R$ 1.500–3.000** | |
| **Custo mensal cliente direto (Meta, SaaS)** | | **R$ 50–500** |
| **Preço cobrado ao cliente (Eloscope)** | | **R$ 1.500** |

## Tabela de custos — Versão Real

### Setup (one-time)

Base da Beta + 7C (integração CRM existente) e/ou 7D (dashboard).

| Item extra (além da Beta) | Custo-time | SaaS cliente | Alocado em setup R$ 4.000–6.000 |
|---|---|---|---|
| 7C Integração CRM existente (HubSpot etc.) | 8–20h × R$150 = R$1.200–3.000 | Cliente já paga licença do CRM (~R$100–2.000/mês conforme tier) | Sim |
| 7D Dashboard Next.js | 40–80h × R$150 = R$6.000–12.000 | Vercel hobby grátis ou R$20–80/mês Pro | Sim |
| Clerk auth (só 7D) | 4h × R$150 = R$600 | Clerk Starter grátis até 10k MAU; Pro ~R$125/mês | Sim |
| **TOTAL setup extra Real** | **R$7.800–15.600** | | |
| **Preço cobrado setup Real** | | | **R$ 4.000–6.000** |

### Mensal Real

| Item | Custo Eloscope | Custo cliente direto |
|---|---|---|
| Fase 3 Acompanhamento + tuning dashboard | 15–25h/mês × R$150 = R$2.250–3.750 | — |
| Vercel Pro (se 7D) | R$ 0 | ~R$ 80/mês |
| Clerk Pro | R$ 0 | ~R$ 125/mês |
| Supabase Pro | R$ 0 | ~R$ 125/mês se passar de tier free |
| CRM licença do cliente | R$ 0 | ~R$ 100–2.000/mês (cliente já paga) |
| WhatsApp conversations | R$ 0 | ~R$ 200–2.000/mês (volume maior que Beta) |
| **TOTAL custo-time Eloscope/mês** | **R$ 2.250–3.750** | |
| **Custo mensal cliente direto** | | **R$ 500–4.000** conforme CRM e volume |
| **Preço cobrado Real** | | **R$ 3.000–5.000** |

## Diagnóstico isolado (Fase 1 sem 6OS)

| Item | Custo-time | Preço cobrado |
|---|---|---|
| 8 entregáveis Fase 1 (ver `Processo_Entrega_Template.md`) | 20–30h × R$150 = R$3.000–4.500 | **R$ 1.200** one-time |

Conversão em até 30 dias pra 6OS Beta → crédito de 100% no setup.

## Comparativo com v1.0 (referência histórica)

| | v1.0 (19/04) | Sprint 18/04 (decisão recente) | Manter |
|---|---|---|---|
| Nome do produto | Sales OS (3 pacotes Lean/Beta/Real) | **6OS (1 produto, 2 versões)** | **Sprint** |
| Diagnóstico standalone | R$ 1.200 | Não refez o número, mantém | **R$ 1.200** |
| Beta setup | R$ 2.500 | R$ 2.000–3.000 | **R$ 2.000–3.000 range** |
| Beta mensal | R$ 1.500 | R$ 1.500 | **R$ 1.500** |
| Beta fidelidade | 3 meses | 3 meses | **3 meses** |
| Real setup | R$ 6.000 | R$ 4.000–6.000 | **R$ 4.000–6.000 range** |
| Real mensal | R$ 3.500 | R$ 3.000–5.000 | **R$ 3.000–5.000 range** |
| Real fidelidade | 6 meses | 3 meses (decisão mais flexível no sprint) | **3 meses** |

## Regras de aplicação

1. **Preço é range, não negociação.** Ticket sai dentro do range baseado em porte do cliente e complexidade. Abaixo do range = anti-software-house violado.
2. **Desconto nunca sem contrapartida.** Beta já é o desconto; abaixo disso não.
3. **Custo extra do cliente (Meta, SaaS) sempre transparente.** Proposta lista e cliente aprova.
4. **Reavaliação trimestral** de preços de SaaS e hora-time.
5. **Paperclip fora do custo de Beta.** Se entrar, contrato separado.
