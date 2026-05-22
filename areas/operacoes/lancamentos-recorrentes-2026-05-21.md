---
data: 2026-05-21T00:00:00.000Z
tipo: financeiro
subtipo: lancamentos-recorrentes
owner: Victor
status: pronto-cadastrar
fonte: custos-fixos-2026-05-18 + auditoria-assinaturas-site-2026-05-18
tags: [financeiro, recorrencia, lancar, entradas, saidas, canonico]
---

# 💵 Lançamentos Recorrentes — Eloscope Ltda

> O que **cadastrar no sistema financeiro (Elosystem-v2)** como recorrente fixo.
> Compilado de `custos-fixos-2026-05-18.md` (saídas) + `auditoria-assinaturas-site-2026-05-18.md` (entradas).
> Snapshot 21/05/2026. `⚠️` = confirmar antes de cadastrar.

---

## 🟢 ENTRADAS — recebe todo mês (Asaas)

### A) Manutenção de site — 14 assinaturas · MRR R$ 1.071,40

| Cliente | Valor/mês | Venc. | Cobrança | Sub ID |
|---|---|---|---|---|
| Translouvar | R$ 95,80 | 25 | Boleto | `sub_NAIXU4zpsoVZ` |
| EVOSTORE (EvoLED) | R$ 97,00 | 20 | ⚠️ definir | `sub_vlzxl4gg6ll2rzif` |
| ACI Urupês | R$ 94,00 | 20 | ⚠️ definir | `sub_YNsFXHmhcHIw` |
| ACE Uchoa | R$ 49,90 | 20 | Boleto | `sub_tqsKKO8FG9sU` |
| Connect Systems | R$ 49,90 | 20 | ⚠️ definir | `sub_wYeG4OGlSUoG` |
| Paulon e Ribeiro Adv. | R$ 85,90 | 20 | ⚠️ definir | `sub_BcqwJDjNtSN2` |
| Cooperlimão | R$ 84,80 | 20 | ⚠️ definir | `sub_78y3VvSU2Aoh` |
| Magazine Biscoito | R$ 69,90 | 20 | ⚠️ definir | `sub_cdLQeSEH1jWJ` |
| EliteSeg | R$ 49,90 | 20 | ⚠️ definir | `sub_fnpD9a26P2Vt` |
| GT Dustato | R$ 29,90 | 20 | ⚠️ definir | `sub_OgQXkBzI90ZM` |
| JS Martins (Metalúrgica) | R$ 85,90 | 15 | ⚠️ definir | `sub_6k9nrt38zjlkufi9` |
| SRural (grupo Sites) | R$ 49,90 | 15 | ⚠️ definir | `sub_i6b389qekmrj45nt` |
| Proteja Segurança | R$ 29,90 | 15 | ⚠️ definir | `sub_Ix1b6rSvwOQZ` |
| Rodrigo Mauri (Câmara Vereadores) | R$ 150,00 | 10 | Cartão | `sub_x95g4izpx90i9qjm` |
| **Subtotal site** | **R$ 1.071,40** | | | |

> 12 das 14 estão com `billingType: UNDEFINED` → padronizar boleto/pix.

### B) Planos premium / IA recorrentes ⚠️ confirmar cliente de cada um

| Plano | Valor/mês | Sub ID | Customer |
|---|---|---|---|
| Suporte Contínuo Eloscope (IA + WhatsApp API) | R$ 1.197,00 | `sub_o2o82jjh502nbe4h` | `cus_000146652246` |
| Sistema IA premium (5h manut. + RAG) | R$ 1.987,00 | `sub_634tksloyt6l3lmg` | `cus_000137063698` |
| RAG / banco vetorial + 24/7 | R$ 1.197,00 | `sub_hl93m4pmvopsabiq` | `cus_000145394122` |
| Emails / SMTP | R$ 39,65 | `sub_890xs2h4sok66c1w` | `cus_000033671440` |
| **Subtotal premium** | **R$ 4.420,65** | | |

### 🟢 Total entradas recorrentes (Asaas): **~R$ 5.492,05/mês**
> ⚠️ Não inclui pagamentos pontuais grandes (projetos/setup) nem confirma adimplência — cruzar com `status=OVERDUE` no Asaas.

---

## 🔴 SAÍDAS — paga todo mês

### Operação cliente
| Item | Valor/mês | Dia | Forma | Nota |
|---|---|---|---|---|
| Servidor rateio (14 sites × R$ 19) | R$ 266,00 | — | — | recorrente |
| SRural (4 clientes + email Eloscope) | R$ 141,00 | mensal | PIX | ⚠️ após cancelar Algesaude + Pedrão · **pagar em dia** (hoje atrasa) |
| Hostinger Campos Joias | ~R$ 90,00 | mensal | PIX (Demerge) | |
| Hostinger Maqlam | ~R$ 90,00 | mensal | PIX (Demerge) | |
| UAZAPI (WhatsApp API) | R$ 138,00 | 15 | Cartão Inter | |

### Telefonia (paga bimestral — equivalente mensal)
| Item | Equiv./mês | Forma | Nota |
|---|---|---|---|
| Maqlam (4 números) | R$ 50,00 | PIX Surf/Correios | R$ 100 a cada 2 meses |
| Eloscope (5 números) | R$ 62,50 | PIX Surf/Correios | R$ 125 a cada 2 meses |

### Infra / SaaS
| Item | Valor/mês | Dia | Forma | Nota |
|---|---|---|---|---|
| Supabase | ~R$ 140,00 | 14–18 | Cartão Inter | |
| Hetzner (testes) | ~R$ 120,00 | mensal | Cartão Inter | variável |
| Google One | R$ 49,99 | 22–26 | Cartão Inter | |
| Miro | R$ 45,00 | 6–19 | Cartão Inter | |
| Gamma App | R$ 40,00 | 22 | Cartão Inter | ⚠️ confirmar se ainda ativo |
| Seg Cartão Plus (tarifa) | R$ 4,90 | 8 | Cartão Inter | |

### IAs (variável recorrente)
| Item | Valor/mês | Forma | Nota |
|---|---|---|---|
| Claude AI | ~R$ 370,00 | Cartão Inter | ⚠️ crescendo 110→550 — setar teto |
| OpenAI | ~R$ 80,00 | Cartão Inter | por uso |
| OpenRouter | ~R$ 50,00 | Cartão Inter | gateway |

### Pessoas
| Item | Valor/mês | Forma | Nota |
|---|---|---|---|
| Pró-labore Lucas | R$ 1.621,00 | PIX Sicredi | |
| Pró-labore Victor | R$ 1.621,00 | PIX Sicredi | |
| Hugo (operacional) | R$ 300–650 | PIX Sicredi | por demanda (variável) |

### Tributos / contábil
| Item | Valor/mês | Dia | Forma | Nota |
|---|---|---|---|---|
| HCA Contabilidade | R$ 350,00 | mensal | a definir | ⚠️ desde abr/26, só 1 mês pago — cobrar maio |
| INSS Lucas | R$ 178,31 | 20 | GPS | 🔴 atrasado abr+mai |
| INSS Victor | R$ 178,31 | 20 | GPS | inicia mai/26 |
| Associação Comercial | ~R$ 100,00 | 12–22 | Boleto | ⚠️ faltou mar e mai — verificar |
| DARFs trimestrais | varia | trimestral | DARF | ⚠️ mapear PIS/COFINS/IRPJ/CSLL |

### Endereço fiscal / parcelamentos (cartão Inter)
| Item | Valor/mês | Dia | Termina | Nota |
|---|---|---|---|---|
| LINK Hub Trinova (endereço fiscal) | R$ 99,90 | 4 | renova out/26 | parcela 6/11 |
| Airbnb | R$ 48,09 | 14 | nov/26 | |
| Kiwify GrowthAI | R$ 5,06 | 18 | ago/26 | |

### 🔴 Total saídas recorrentes: **~R$ 5.600–6.300/mês** (sem DARFs trimestrais)

---

## 📊 Base recorrente (sem pontuais)

| | Valor/mês |
|---|---|
| 🟢 Entradas recorrentes (Asaas) | ~R$ 5.492 |
| 🔴 Saídas recorrentes | ~R$ 5.600–6.300 |
| **Resultado recorrente** | **~ -R$ 100 a -R$ 800** |

> A base **recorrente** está no zero a zero / levemente negativa. O lucro vem dos **projetos e setups pontuais** (ex.: Maqlam R$ 11.310 em fev, contratos novos) — esses não entram aqui, são receita não-recorrente.

---

## ⚠️ Confirmar antes de cadastrar
1. **Planos premium (B)** — a quem pertence cada um? (Maqlam? Campos? Morgana?) — cruzar customer IDs no Asaas
2. **Adimplência** — quais das 14 + 4 estão `OVERDUE` agora
3. **Cancelar na SRural:** Algesaude (R$ 49,90) + Pedrão Hortifruti (R$ 19,90) → saída cai pra R$ 141
4. **Gamma App** — ainda ativo? · **HostGator R$ 15** — cancelar se sem uso
5. **billingType UNDEFINED** em 12 das 14 assinaturas — padronizar
6. **DARFs trimestrais** — identificar e cadastrar no calendário (o R$ 541,50 de 27/02 era qual tributo?)

---

*Fonte: [[areas/operacoes/custos-fixos-2026-05-18]] · [[areas/operacoes/auditoria-assinaturas-site-2026-05-18]]*
