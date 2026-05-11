---
tipo: pricing
status: rascunho
cliente: pele-vet
agente: calculadora-asaas
data-analise: 2026-05-09
modo: promocional
referencia: "[[squads/discovery-analyzer/agentes/05-calculadora-asaas]]"
tags:
  - cliente/pele-vet
  - vendas/pricing
  - financeiro/asaas
---

# Pricing PeleVet — 3 cenários via Asaas (taxa promocional)

> [!info] Como ler
> Tabela mostra **valor bruto cobrado** (X) ao cliente vs **valor líquido recebido** pela Eloscope, descontando taxa de cartão (1,99% + R$ 0,49) + antecipação automática.
>
> Modo: **promocional** (1,99% para 1-12×). Validado pelo agente [[squads/discovery-analyzer/agentes/05-calculadora-asaas|Tesouro]] com validação reversa (diferença ≤ R$ 0,01).
>
> **Antecipação:** 1,25%/mês (1×) ou 1,74%/mês (parcelado). Total = taxa × nº parcelas.

---

## Cenário A — Starter (Sales OS Eloscope padrão)

**Escopo:** núcleo (agenda + ficha + estoque) + módulo financeiro básico + IA atendimento simples.

| Componente | Líquido desejado | Como cobrar |
|------------|------------------|-------------|
| **Setup único** | R$ 3.000 | À vista (boleto) ou cartão 12× |
| **Mensalidade** | R$ 1.500/mês × mín 3 meses | Cartão 1× recorrente |

### Setup R$ 3.000 — opções de cobrança

| Forma | Bruto cobrado | Parcela cliente | Taxa cartão | Antecipação | Líquido Eloscope |
|-------|---------------|-----------------|-------------|-------------|-------------------|
| À vista (cartão 1×) | R$ 3.100,16 | R$ 3.100,16 | R$ 62,18 | R$ 37,97 (1,25%) | R$ 3.000,00 ✓ |
| 6× cartão promo | R$ 3.418,22 | R$ 569,70 | R$ 68,51 | R$ 349,71 (10,44%) | R$ 3.000,00 ✓ |
| 12× cartão promo | R$ 3.869,20 | **R$ 322,43** | R$ 77,49 | R$ 791,71 (20,88%) | R$ 3.000,00 ✓ |

### Mensalidade R$ 1.500/mês

| Bruto cobrado/mês | Taxa cartão | Antecipação | Líquido Eloscope |
|-------------------|-------------|-------------|-------------------|
| **R$ 1.550,33** | R$ 31,34 | R$ 18,99 (1,25%) | R$ 1.500,00 ✓ |

> **Total contrato 3 meses:** Setup R$ 3.000 + 3× R$ 1.500 = **R$ 7.500 líquidos pra Eloscope.**

---

## Cenário B — Growth ⭐ RECOMENDADO

**Escopo:** Starter + CRM com pipeline visual + IA atendimento avançada (qualificação + agendamento) + central Chatwoot integrada.

| Componente | Líquido desejado | Como cobrar |
|------------|------------------|-------------|
| **Setup único** | R$ 6.000 | Cartão 12× recomendado |
| **Mensalidade** | R$ 2.500/mês × mín 6 meses | Cartão 1× recorrente |

### Setup R$ 6.000 — opções de cobrança

| Forma | Bruto cobrado | Parcela cliente | Taxa cartão | Antecipação | Líquido Eloscope |
|-------|---------------|-----------------|-------------|-------------|-------------------|
| À vista (cartão 1×) | R$ 6.199,82 | R$ 6.199,82 | R$ 123,87 | R$ 75,95 (1,25%) | R$ 6.000,00 ✓ |
| 6× cartão promo | R$ 6.835,94 | R$ 1.139,32 | R$ 136,53 | R$ 699,42 (10,44%) | R$ 6.000,00 ✓ |
| **12× cartão promo** | **R$ 7.737,89** | **R$ 644,82** | R$ 154,47 | R$ 1.583,42 (20,88%) | R$ 6.000,00 ✓ |

### Mensalidade R$ 2.500/mês

| Bruto cobrado/mês | Taxa cartão | Antecipação | Líquido Eloscope |
|-------------------|-------------|-------------|-------------------|
| **R$ 2.583,55** | R$ 51,90 | R$ 31,65 (1,25%) | R$ 2.500,00 ✓ |

> **Total contrato 6 meses:** Setup R$ 6.000 + 6× R$ 2.500 = **R$ 21.000 líquidos pra Eloscope.**
>
> **Para o cliente:** 12× R$ 644,82 (setup) + 6× R$ 2.583,55 (mensal) = compromisso visível de R$ 644 + R$ 2.583 = **~R$ 3.228/mês nos 6 primeiros meses**, depois só R$ 2.583/mês até o fim do parcelamento do setup, e depois só R$ 2.583/mês recorrente.

---

## Cenário C — Scale (full PeleVet)

**Escopo:** Growth + módulo de plano crônico recorrente + pacotes/combos + gravação/transcrição anamnese + teleconsulta com receita digital + dashboards inteligentes customizados.

| Componente | Líquido desejado | Como cobrar |
|------------|------------------|-------------|
| **Setup único** | R$ 12.000 | Cartão 12× ou híbrido (50% boleto + 50% cartão) |
| **Mensalidade** | R$ 3.500/mês × mín 6 meses | Cartão 1× recorrente |

### Setup R$ 12.000 — opções de cobrança

| Forma | Bruto cobrado | Parcela cliente | Taxa cartão | Antecipação | Líquido Eloscope |
|-------|---------------|-----------------|-------------|-------------|-------------------|
| 12× cartão promo | R$ 15.475,28 | **R$ 1.289,61** | R$ 308,45 | R$ 3.166,84 (20,88%) | R$ 12.000,00 ✓ |
| **Híbrido 50/50** | R$ 6.000 boleto + R$ 7.737,89 em 12× cartão | Boleto à vista + 12× R$ 644,82 | R$ 154,47 (só na parte cartão) | R$ 1.583,42 (só na parte cartão) | R$ 12.000,00 ✓ |

> [!tip] Por que sugerir híbrido no Scale
> Em valores altos, o impacto da antecipação fica relevante (R$ 3.166,84 só de antecipação no 12× full cartão). **Híbrido 50/50 economiza ~R$ 1.583** em antecipação **sem perder o atrativo do parcelamento** pro cliente — ele ainda paga R$ 644,82/mês na parte parcelada.

### Mensalidade R$ 3.500/mês

| Bruto cobrado/mês | Taxa cartão | Antecipação | Líquido Eloscope |
|-------------------|-------------|-------------|-------------------|
| **R$ 3.616,77** | R$ 72,46 | R$ 44,30 (1,25%) | R$ 3.500,00 ✓ |

> **Total contrato 6 meses:** Setup R$ 12.000 + 6× R$ 3.500 = **R$ 33.000 líquidos pra Eloscope.**

---

## Comparativo executivo (pra apresentar na reunião)

| Cenário | Setup líquido | Mensal líquido | Mín meses | Total contrato | Parcela cliente (12× setup) |
|---------|---------------|----------------|-----------|----------------|------------------------------|
| **A — Starter** | R$ 3.000 | R$ 1.500 | 3 | **R$ 7.500** | R$ 322,43/mês |
| **B — Growth** ⭐ | R$ 6.000 | R$ 2.500 | 6 | **R$ 21.000** | R$ 644,82/mês |
| **C — Scale** | R$ 12.000 | R$ 3.500 | 6 | **R$ 33.000** | R$ 1.289,61/mês (ou híbrido R$ 644,82 + R$ 6K boleto) |

---

## Ancoragem persuasiva — payback contra LTV

> [!important] Argumento de venda do Cenário B (Growth)
> A PeleVet captura **3-4 clientes novos/mês** hoje. LTV crônico estimado: **R$ 10K-30K/tutor** (4-8 visitas/ano por 3-7 anos × ticket R$ 700).
>
> **Investimento Cenário B:** R$ 21.000 totais em 6 meses = **R$ 3.500/mês equivalente** (média).
>
> **Compromisso mensal real do cliente nos 6 primeiros meses:** R$ 644,82 (parcela setup) + R$ 2.583,55 (mensalidade) ≈ **R$ 3.228/mês**. Depois só os R$ 2.583,55 até quitar o parcelamento, e depois só a recorrência.
>
> **Payback:** se a IA + CRM trouxerem **+1 cliente crônico novo por mês** (de 3-4 → 4-5), payback acontece **no 3º mês** (LTV de 1 cliente cobre todo o contrato). Se vierem +5-10/mês (meta da análise de mercado): payback em **30 dias**.
>
> Comparar isso com o atual: hoje a PeleVet **já gasta R$ 1.000/mês em mídia** convertendo 1,5%. O Cenário B não é mais despesa — é **destravar o ROI do que já gastam**.

---

## Garantia (padrão Eloscope)

> [!success] Devolução do setup em 30 dias
> Se em 30 dias o sistema não estiver entregando o que foi prometido (financeiro estruturado + CRM operacional + IA respondendo), a Eloscope devolve **100% do setup**. Mensalidade segue como pay-as-you-go nos meses que rodaram.

---

## Próximos passos pós-fechamento

| Ação | Quando | Quem |
|------|--------|------|
| Cobrar via Asaas (link gerado) | No momento do fechamento | Lucas |
| Migrar `memory/projects/pele-vet.md` (status: cliente ativo) | Sessão pós-fechamento | Lucas |
| Disparar onboarding técnico (acesso VPS + migração SimplesVet) | D+1 a D+3 | Vítor + Hugo |
| Agendar treinamento da equipe (Sílvias + Thaísa + recepcionista) | D+10 | Lucas + Vítor |

---

*Calculado em 2026-05-09 pelo agente Tesouro (Calculadora Asaas v1.0). Todos os valores validados por equação reversa (diferença ≤ R$ 0,01). Verificar taxa promocional Asaas trimestralmente em [asaas.com/precos](https://www.asaas.com/precos).*
