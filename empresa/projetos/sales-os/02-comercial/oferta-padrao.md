# Oferta Padrão — 6OS

**Status:** v1.1 — ajustada conforme sprint 18/04/2026.
**Fonte-da-verdade:** `sprint - April 18.md` (decisões recentes) + `Sales_OS_Etapas_Entregaveis_v1.md` v1.0 (estrutura complementar).
**Uso:** documento que consolida o pacote padrão da Eloscope. Quem for vender abre isto primeiro e navega pelos templates-filho. **Nenhuma venda custom sem passar por aqui.**

## O produto em 1 frase

**6OS (Sales Operating System):** instala o motor comercial de empresas de serviço com time comercial (Q2) em 3 fases — Diagnóstico → Estruturação → Acompanhamento — com IA como copiloto, não piloto.

## Caminhos comerciais

### 🅰️ Diagnóstico standalone

- **Quando oferecer:** lead Q2 que ainda não sabe qual é a dor, ou quer testar metodologia antes de contrato maior
- **Escopo:** Fase 1 completa (8 entregáveis) — mapa do funil, ticket real, gargalos, devolutiva Loom
- **Duração:** 7–10 dias
- **Preço:** R$ 1.200 one-time
- **Gancho:** virou crédito de 100% no setup do Beta se cliente fechar em até 30 dias

### 🅱️ 6OS Beta (padrão recomendado)

- **Quando oferecer:** Q2 com dor clara, orçamento, abertura a IA, faturamento ≥ R$ 80k/mês
- **Escopo:** 3 fases completas na versão Beta (agente SDR 7B é o core)
- **Duração:** ~8 semanas até operação, 3 meses mínimo de contrato
- **Preço:** R$ 2.000–3.000 setup + R$ 1.500/mês
- **Contrapartida do preço Beta:** case + depoimento + uso de marca
- **Vagas:** 5 slots iniciais

### 🅾️ 6OS Real

- **Quando oferecer:** pós-case ou cliente com operação madura que quer integração com stack próprio + dashboard
- **Escopo:** Beta + 7C (integração CRM existente) + 7D (dashboard Next.js dedicado)
- **Duração:** ~10–12 semanas até operação, 3 meses mínimo
- **Preço:** R$ 4.000–6.000 setup + R$ 3.000–5.000/mês

## Público-alvo confirmado (Q2 estrito)

- Imobiliárias
- Energia solar
- Clínicas multi-profissionais (estética, vet, médica, fisio)
- Consultorias / Educação estruturada
- Agências de marketing (direto — modelo white-label é caminho separado)

**Fora do 6OS:** Q1 (serviço sem time comercial), Q3/Q4 (produto), alimentação baixo-ticket, fotografia nicho.

## Stack canônico

| Camada | Ferramenta | Obrigatória? |
|---|---|---|
| Canal cliente-final | WhatsApp Business API (Meta, oficial) | Sim |
| Automação cliente-final | n8n (self-hosted Eloscope) | Sim |
| Inteligência interna | OpenClaw / OpenCloud | Sim |
| Persistência | Supabase (RLS multi-tenant) | Sim |
| CRM | Eloscope multi-tenant OU integração ao existente | Sim (um dos dois) |
| Frontend dashboard | Next.js + Tailwind + shadcn + Clerk | Só Real (7D) |
| Docs/Handoff | Notion, Google Docs, Loom | Sim |
| Monitoramento | Fireflies (principal), Fathom (secundário) | Sim |
| **Não entra no Beta** | Paperclip | Em teste |

## Regra de decisão de caminho

```
Lead chega
  │
  ├─ É Q2? ────────────── Não → NÃO VENDE 6OS. Redirecionar (outro produto / indicação).
  │        Sim
  │         │
  ├─ Fatura ≥ R$ 80k/mês? ─ Não → Considerar Q1 padrão ou pausar
  │        Sim
  │         │
  ├─ Tem dor clara mapeável? ─ Não → 🅰️ Diagnóstico standalone
  │        Sim
  │         │
  ├─ Tem case próprio provado? ─ Sim → 🅾️ 6OS Real
  │        Não
  │         │
  └─> 🅱️ 6OS Beta
```

## Árvore de templates (a gente navega daqui)

Todos em `../templates/`:

- [**Proposta_Lead_Template.md**](../templates/Proposta_Lead_Template.md) — front-door da venda, envia ao cliente
- [**Proposta_Valor_Template.md**](../templates/Proposta_Valor_Template.md) — VPC por vertical Q2
- [**Processo_Entrega_Template.md**](../templates/Processo_Entrega_Template.md) — mapa fim-a-fim das 3 fases, com entregáveis + dono + critério de aceite
- [**Tempo_Template.md**](../templates/Tempo_Template.md) — tempo por fase e por ferramenta
- [**Custos_Stack_Template.md**](../templates/Custos_Stack_Template.md) — custos Eloscope + custos diretos do cliente
- [**Objecoes_Matriz_Template.md**](../templates/Objecoes_Matriz_Template.md) — 6 categorias × 5 verticais
- [**Cronograma_Cliente_Template.md**](../templates/Cronograma_Cliente_Template.md) — Gantt parametrizado (existia antes do sprint, continua válido)
- [**Lead_Profile_Template.md**](../templates/Lead_Profile_Template.md) — dossiê do lead

## Artefatos complementares no repo

- [**Pacote_6OS_Q2.md**](./Pacote_6OS_Q2.md) — **dossiê consolidado** (entregas + fluxos + cronograma + stack + custos + flowcharts Mermaid). Uso duplo: manual interno + anexo público da proposta (seções marcadas PÚBLICO/INTERNO).
- [**Pipeline.md**](./Pipeline.md) — tabela mestre dos 46 leads + status + caminho sugerido
- [**Cobertura_Entrega.md**](./Cobertura_Entrega.md) — gap-check (matriz fase × dimensão)
- [**Etapas_Entregaveis.md**](./Etapas_Entregaveis.md) — draft v0.1 (deprecado — manter só como histórico, usar `../Sales_OS_Etapas_Entregaveis_v1.md` + este doc)

## Regras invariantes da oferta

1. **Gate entre Fase 1 e Fase 2** — sem aceite formal do diagnóstico, não começa Fase 2.
2. **Gate entre planejamento (playbook) e implantação (agente)** dentro da Fase 2 — sem aceite formal do playbook, nenhuma IA roda.
3. **Preço é range, não negociação** — abaixo do range = anti-software-house violado.
4. **Desconto só com contrapartida** (case, depoimento, referência).
5. **Anti-lock-in** — playbook e workflows ficam com o cliente se encerrar contrato.
6. **LGPD por default** — DPA padrão + RLS multi-tenant + guardrails de PII.
7. **Fidelidade mínima 3 meses** em qualquer versão (Beta ou Real).
8. **1 produto, 2 versões** — não criar pacote Lite, Starter, Pro, etc. Se aparecer demanda, volta a este doc pra atualizar.

## Quando atualizar este documento

Dispara PR neste arquivo + changelog curto quando:
- Preço mudar (range ou valor dentro do range)
- Nova ferramenta entrar no stack (Paperclip, por exemplo)
- Vertical novo for validado além dos 5 Q2
- Nova versão do produto (Lite, Enterprise) — **exige aprovação Lucas + Victor**
- Regra invariante mudar

## Changelog

- **2026-04-19 (v1.1):** consolidado pós-sprint 18/04. De 3 pacotes → 1 produto com 2 versões. Duração contratual Real reduzida de 6m → 3m. Range de preços introduzido.
- **2026-04-19 (v1.0):** `Sales_OS_Etapas_Entregaveis_v1.md` fechado pré-sprint (referência histórica).
