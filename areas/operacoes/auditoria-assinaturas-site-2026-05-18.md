---
title: Auditoria — Assinaturas de Manutenção de Site (Asaas)
type: auditoria
status: pendente-analise
owner: Victor
data: 2026-05-18
fonte: Asaas API (MCP asaas_listar_assinaturas + asaas_buscar_cliente)
tags: [financeiro, asaas, recorrencia, site, manutencao]
---

# Auditoria — Assinaturas Recorrentes de Site (ACTIVE)

> **Para análise do Victor.** Levantamento completo das assinaturas recorrentes da Asaas relacionadas a **manutenção de site** (descontando IA/automação/email). Regra de bolso: **assinaturas abaixo de R$ 200/mês geralmente são planos fixos de manutenção de site.**

**Snapshot:** 18/05/2026 · status filtrado `ACTIVE` (Asaas não expõe overdue como status — débitos aparecem nos *payments*, não na assinatura).

---

## 📊 Resumo

| Métrica | Valor |
|---|---|
| Total de assinaturas de site | **14** |
| MRR consolidado (site) | **R$ 1.071,40** |
| Ticket médio | **R$ 76,53** |
| Maior ticket | R$ 150,00 (Rodrigo Mauri — Câmara Vereadores) |
| Menor ticket | R$ 29,90 (GT Dustato / Proteja Segurança) |

---

## 🧾 Lista completa — Manutenção de Site

| # | Cliente | CNPJ | Cidade | Valor/mês | Vencimento | Sub ID | Customer ID | Cobrança | Criado em |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Translouvar** | 32.987.328/0001-30 | São Bernardo do Campo/SP | R$ 95,80 | 25/07 | `sub_NAIXU4zpsoVZ` | `cus_000033666451` | Boleto | 05/06/2022 |
| 2 | **EVOSTORE Iluminação (EvoLED)** | 03.719.439/0001-67 | Pindorama/SP | R$ 97,00 | 20/07 | `sub_vlzxl4gg6ll2rzif` | `cus_000093694921` | Undefined | 13/02/2026 |
| 3 | **ACI Urupês** (Assoc. Comercial) | 00.717.599/0001-89 | Urupês/SP | R$ 94,00 | 20/07 | `sub_YNsFXHmhcHIw` | `cus_000066345159` | Undefined | 18/10/2023 |
| 4 | **ACE Uchoa** (Assoc. Comercial) | 08.310.343/0001-64 | Uchoa/SP | R$ 49,90 | 20/07 | `sub_tqsKKO8FG9sU` | `cus_000033666038` | Boleto | 05/06/2022 |
| 5 | **Connect Systems** (Sérgio Catanho) | 35.549.791/0001-98 | Catanduva/SP | R$ 49,90 | 20/07 | `sub_wYeG4OGlSUoG` | `cus_000033584303` | Undefined | 03/06/2022 |
| 6 | **Paulon e Ribeiro Advogados** | 09.106.356/0001-89 | Nova Granada/SP | R$ 85,90 | 20/07 | `sub_BcqwJDjNtSN2` | `cus_000033786662` | Undefined | 07/06/2022 |
| 7 | **Cooperlimão** | 25.967.251/0001-70 | Urupês/SP | R$ 84,80 | 20/07 | `sub_78y3VvSU2Aoh` | `cus_000035246267` | Undefined | 07/07/2022 |
| 8 | **Magazine Biscoito** | 08.633.385/0001-36 | Ibirá/SP | R$ 69,90 | 20/07 | `sub_cdLQeSEH1jWJ` | `cus_000035042845` | Undefined | 04/07/2022 |
| 9 | **EliteSeg** | 43.873.381/0001-26 | Urupês/SP | R$ 49,90 | 20/07 | `sub_fnpD9a26P2Vt` | `cus_000035042161` | Undefined | 04/07/2022 |
| 10 | **GT Dustato** | 23.735.819/0001-00 | Urupês/SP | R$ 29,90 | 20/07 | `sub_OgQXkBzI90ZM` | `cus_000034048186` | Undefined | 14/06/2022 |
| 11 | **JS Martins (Metalúrgica)** | 27.461.187/0001-87 | Itajobi/SP | R$ 85,90 | 15/07 | `sub_6k9nrt38zjlkufi9` | `cus_000085230364` | Undefined | 29/05/2024 |
| 12 | **SRural** (grupo Sites) | 02.209.289/0001-89 | Urupês/SP | R$ 49,90 | 15/07 | `sub_i6b389qekmrj45nt` | `cus_000083756488` | Undefined | 07/05/2024 |
| 13 | **Proteja Segurança** | 33.014.700/0001-94 | Catanduva/SP | R$ 29,90 | 15/07 | `sub_Ix1b6rSvwOQZ` | `cus_000042123670` | Undefined | 02/01/2023 |
| 14 | **Rodrigo A. Mauri** (Câmara dos Vereadores) | 10.966.344/0001-03 | Urupês/SP | R$ 150,00 | 10/07 | `sub_x95g4izpx90i9qjm` | `cus_000050821807` | Cartão | 06/05/2025 |

**Total MRR site: R$ 1.071,40/mês**

---

## ❌ Excluídas da análise (não são site)

| Sub ID | Valor | Cliente | Motivo |
|---|---|---|---|
| `sub_o2o82jjh502nbe4h` | R$ 1.197 | `cus_000146652246` | Plano Suporte Contínuo Eloscope (IA + WhatsApp API) |
| `sub_634tksloyt6l3lmg` | R$ 1.987 | `cus_000137063698` | Sistema IA premium (5h manutenção, RAG) |
| `sub_hl93m4pmvopsabiq` | R$ 1.197 | `cus_000145394122` | RAG/banco vetorial + 24/7 |
| `sub_890xs2h4sok66c1w` | R$ 39,65 | `cus_000033671440` | Apenas emails/SMTP (não site) |

---

## 🎯 O que o Victor precisa analisar

1. **Aderência à regra "abaixo de R$ 200 = fixo"** — confirmar se todas as 14 listadas são planos de manutenção fixa. Identificar exceções (ex.: contratos com hora-trabalho que excederam).
2. **Inadimplência atual** — cruzar com `asaas_listar_pagamentos status=OVERDUE` para descobrir quais clientes desse grupo estão com débito agora.
3. **Cobranças "Undefined"** — 12 das 14 estão com `billingType: UNDEFINED`. Definir boleto/pix/cartão por padrão facilita conciliação.
4. **Reajuste anual** — assinaturas de 2022 com R$ 29,90 e R$ 49,90 estão muito defasadas; identificar candidatas a reajuste.
5. **Discrepância de descrição** — descrições variam ("Monitoramento; Backups; Atualizações" vs "Servidor; Licenças; Backups"). Padronizar pacote-base.
6. **SRural — único cliente com `group: Sites`** — verificar se faz sentido aplicar esse grupo em todos os 14 para facilitar segmentação no Asaas.

---

## 🔗 Como rodar de novo

```bash
# via MCP Asaas no Claude Code
mcp__asaas__asaas_listar_assinaturas status=ACTIVE limit=100
# depois cruzar customer IDs com mcp__asaas__asaas_buscar_cliente
```

Ou abrir direto no painel: https://www.asaas.com/subscriptions
