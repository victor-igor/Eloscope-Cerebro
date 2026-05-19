---
title: Custos Fixos Recorrentes — Eloscope Ltda (CANÔNICO)
type: planilha
status: pronto-victor-lancar
owner: Victor
data: 2026-05-18
versao: v3 (com confirmações Lucas 18/05)
fonte: Asaas (receita) + cartão Inter (faturas jan-mai/26) + extrato CC #126356084 (01/01-18/05/26) + proposta HCA + INSS PA 03/2026 + ajustes diretos Lucas
tags: [financeiro, custos-fixos, recorrencia, victor, lancar, canonico]
---

# 📊 Custos Fixos Recorrentes — Eloscope Ltda

> **DOCUMENTO CANÔNICO PARA VICTOR LANÇAR NO FINANCEIRO (Elosystem-v2).**
> Snapshot: 18/05/2026 · Saldo CC atual: R$ 12.677,49

## 🏦 Bancos/contas em uso

| Banco | Conta | Uso |
|---|---|---|
| **Asaas** | — | Recebimento de clientes (assinaturas + cobranças avulsas) |
| **Inter** | Cartão crédito •••1842 | Pagamento de SaaS, IAs, infra |
| **Sicredi** | CC #126356084 | Conta corrente operacional (PIX, boletos, pró-labore) |

> Lucas confirmou 18/05: hoje só usam **Asaas + Inter** ativamente. Sicredi mantém CC operacional mas faturas/recebimentos concentram em Asaas+Inter.

---

## 🎯 Resumo Executivo (revisado)

| Bloco | Valor mensal | Observação |
|---|---|---|
| **Custos diretos cliente (sites)** | **R$ 266,00** | R$ 19 × 14 sites ativos (servidor próprio) |
| **SRural — hospedagem parceira** | **R$ 141,00** | 4 clientes + email Eloscope (Algesaude e Pedrão cancelados — Lucas avisa SRural) |
| **Hospedagens dedicadas cliente** | **R$ 180,00** | Hostinger Campos Joias ~R$ 90 + Hostinger Maqlam ~R$ 90 (via Demerge) |
| **Números WhatsApp/Telefonia** | **~R$ 75/mês equiv.** | Maqlam 4n × R$ 25/bimestre + Eloscope 5n × R$ 25/bimestre = R$ 112,50 bimestral |
| **Pró-labore sócios** | **R$ 3.242,00** | R$ 1.621 Lucas + R$ 1.621 Victor |
| **Hugo (operacional)** | **~R$ 300-650** | pagamento variável via PIX |
| **Obrigações sócios (INSS)** | **R$ 356,62** | Lucas R$ 178,31 (em atraso desde abril) + Victor R$ 178,31 (mai/26) |
| **Contabilidade (HCA)** | **R$ 350,00** | iniciado abril/26 — Lucas pagou só **1 mês** |
| **Associação Comercial** | **~R$ 100,00** | "ASSOCIACAO COMERCIAL E EMPRESA" boleto |
| **Infra/SaaS recorrente** | **~R$ 650-1.000** | Claude Code + UAZAPI + Hetzner testes + Supabase + Google/Miro |
| **Parcelamentos ativos** | **R$ 153,05** | LINK Trinova + Airbnb + Kiwify |
| **🟰 Total operacional estimado** | **~R$ 5.600-6.300/mês** | sem contar tributos federais (DARFs trimestrais) |

---

## 1️⃣ Custos diretos por cliente (sites)

> Regra Lucas: **R$ 19/cliente/mês** = fatia servidor compartilhado.

| Métrica | Valor |
|---|---|
| Sites ativos | 14 |
| Custo por cliente | R$ 19,00 |
| **Subtotal mensal** | **R$ 266,00** |

**⚠️ Anual:** Licenças Elementor — Lucas, quantas? Valor? Vencimento?

---

## 2️⃣ Hospedagens dedicadas de cliente (PIX Demerge)

> "DEMERGE BRASIL FACILITADORA DE PAGAMENTOS LTDA" (CNPJ 25021356) — provavelmente intermediador da Hostinger.

| Data | Valor | Hipótese |
|---|---|---|
| 05/01 | R$ 89,99 | Campos Joias |
| 12/01 | R$ 38,99 | ? (valor menor — confirmar) |
| 26/01 | R$ 89,99 | Maqlam |
| 05/02 | R$ 89,99 | Campos Joias |
| 13/02 | R$ 89,99 | Maqlam |
| 16/03 | R$ 89,99 | Campos Joias |
| 17/03 | R$ 70,99 | ? (confirmar) |
| 23/04 | R$ 108,99 | ? (subiu) |
| 05/05 | R$ 89,99 | Campos Joias |

**Padrão Lucas confirmou:**
- **Hostinger Campos Joias** ~R$ 89/mês
- **Hostinger Elite Maqlam** ~R$ 89/mês
- **Subtotal:** ~R$ 180/mês

⚠️ Ações Victor:
- Confirmar com Demerge/Hostinger quais clientes/serviços geram cada cobrança
- Investigar valor menor de R$ 38,99 (12/01) e R$ 70,99 (17/03) e maior R$ 108,99 (23/04)

---

## 3️⃣ Telefonia / Números WhatsApp

> Lucas confirmou estrutura em 18/05/2026.

### Maqlam — 4 números (operação cliente)

| Item | Valor | Frequência | Onde aparece no extrato |
|---|---|---|---|
| Compra inicial (1×) | R$ 35,00/número | único | **04/03: 4× R$ 35 = R$ 140** (PIX CORREIOS) |
| Recarga | R$ 25,00/número | a cada 2 meses | em maio/26 vence próxima recarga (Lucas confirmou) |

### Eloscope — 5 números (operação interna)

| Item | Valor | Frequência |
|---|---|---|
| Recarga | R$ 25,00/número | a cada 2 meses |
| Total bimestral | R$ 125,00 | a cada 2 meses |
| Equivalente mensal | **R$ 62,50/mês** | |

### Cobranças identificadas no extrato

> **Lucas confirmou 18/05:** Surf Telecom = Correios (mesma empresa/provedor — labels diferentes no extrato).

| Data | Beneficiário | Valor | Interpretação |
|---|---|---|---|
| 06/01 | SURF TELECOM SA | R$ 25,00 | recarga 1 número |
| 10/01 | SURF TELECOM SA | R$ 25,00 | recarga 1 número |
| 04/03 | EMPRESA BRAS. CORREIOS E TELEGRAFOS | 4× R$ 35,00 = R$ 140 | **compra inicial 4 números Maqlam** |
| 28/04 | EMPRESA BRAS. CORREIOS E TELEGRAFOS | 2× R$ 35,00 = R$ 70 | compra 2 números adicionais |
| 28/04 | SURF TELECOM SA | R$ 25,00 | recarga 1 número |

**Estimativa mensal equivalente:**
- Maqlam: 4 nrs × R$ 25 ÷ 2 meses = **R$ 50/mês**
- Eloscope: 5 nrs × R$ 25 ÷ 2 meses = **R$ 62,50/mês**
- **Subtotal telefonia: ~R$ 112,50/mês** (pagos em lotes bimestrais via PIX Surf/Correios)
- Compras de chip novo: esporádico (R$ 35/número)

---

## 4️⃣ Contabilidade

### 🔴 SÃO LUCAS SMALL BUSINESS (contabilidade ANTIGA — substituída)

| Data | Valor |
|---|---|
| 12/01 | R$ 426,90 |
| 10/02 | R$ 439,55 |
| 10/03 | R$ 409,65 |
| 16/03 (PIX extra) | R$ 639,59 |

**Total pago jan-mar:** R$ 1.915,69 · **Última cobrança: março/26.**

### 🟢 HCA Gestão Contábil (NOVA — desde abril)

| Item | Valor |
|---|---|
| Honorário mensal | R$ 350,00 |
| Início vigência | **abril/2026** (Lucas confirmou) |
| Pagos até hoje | **apenas 1 mês** (Lucas confirmou "acho que pagamos só abril") |
| Pendente | **maio/26** (R$ 350) |
| Honorário extra dezembro | base novembro (~R$ 350) |
| Reajuste | Salário Mínimo Nacional (anual) |

**Contato:** WWW.HCACONTABILIDADE.COM · CNPJ 10.641.797/0001-60

⚠️ Ações Victor:
- Confirmar com HCA recebimento da fatura abril/26
- Cobrar fatura de maio/26 (vencimento próximo)
- Cadastrar pagamento recorrente

---

## 5️⃣ INSS Contribuinte Individual (sócios)

| Sócio | Valor | PA | Situação |
|---|---|---|---|
| **Lucas** | R$ 178,31/mês | PA 03/2026 (venc. 20/04) | 🔴 não pago desde abril → 2 parcelas (abr/mai) |
| **Victor** | R$ 178,31/mês | inicia mai/2026 | começa agora |
| **Total a partir mai/26** | **R$ 356,62/mês** | | |

**Pagamentos identificados no extrato:**
- 20/02 — DARF NUMERADO R$ 178,31 (este é o INSS PA 01/2026 pago via débito automático) ✅
- 20/01 — DARF R$ 166,98 + R$ 111,51 = R$ 278,49 (outros tributos)
- 27/02 — DARF R$ 541,50 (tributo trimestral?)

⚠️ Ações Victor:
- Gerar/recuperar guia Lucas PA 03/2026 + PA 04/2026
- Verificar se DARF R$ 541,50 (27/02) é PIS/COFINS ou IRPJ trimestral
- Cadastrar Victor como sócio com data de entrada maio/2026

---

## 6️⃣ Associação Comercial

| Data | Valor | Beneficiário |
|---|---|---|
| 12/01 | R$ 90,58 | ASSOCIACAO COMERCIAL E EMPRESA |
| 12/02 | R$ 90,58 | ASSOCIACAO COMERCIAL E EMPRESA |
| 22/04 | R$ 103,89 | ASSOCIACAO COMERCIAL E EMPRESA |
| 22/04 | R$ 107,66 | ASSOCIACAO COMERCIAL E EMPRESA |

**Padrão:** ~R$ 90-100/mês (com reajuste em abril). Faltou pagamento de **março e maio** no extrato — atrasado ou pago por outro meio?

⚠️ Confirmar com Lucas: qual associação? (provável **ACIRP - Assoc. Comercial Rio Preto** ou **ACE Catanduva**)

---

## 7️⃣ Pró-labore sócios (PIX recorrente)

| Sócio | Valor padrão | Frequência observada |
|---|---|---|
| **Lucas Negreiro** (CPF 18236120) | R$ 1.621,00 | jan (2×), mar (2×), abr (+R$ 3.500 extra), mai |
| **Victor Jacinto** (CPF 212808575) | R$ 1.621,00 | jan, fev, mar, abr (+R$ 3.500 extra), mai |

**Total mensal padrão:** **R$ 3.242,00**

⚠️ Confirmar com Lucas:
- Victor entra "em maio" para INSS mas já recebe pró-labore desde janeiro — formalização contratual?
- R$ 3.500 extras em 13/04 pra ambos = R$ 7.000 — bônus ou adiantamento?

---

## 8️⃣ Hugo (operação técnica)

| Data | Valor |
|---|---|
| 13/02 | R$ 300,00 |
| 03/03 | R$ 300,00 |
| 16/03 | R$ 300,00 |
| 21/04 | R$ 650,00 |

CNPJ Hugo: 60316276 (PJ "60 316 276 Hugo de Oliveira Alexandre Fi")

**Padrão:** ~R$ 300-650/mês — pagamento por demanda (não fixo)

---

## 9️⃣ Yuri Lima (?)

| Data | Valor |
|---|---|
| 20/01 | R$ 500,00 |
| 22/02 | R$ 500,00 |

⚠️ **Parou em março.** Quem é Yuri Lima? Era recorrente, foi descontinuado?

---

## 🔟 Cartão de crédito Inter (recorrências validadas com ajustes Lucas)

> ❌ Riscar: **Cursor, Fireflies** — Lucas confirmou em 18/05: hoje usa só Claude Code; Fireflies cancelado, migrou pra Fathom (gratuito).

### 🟢 Fixos confirmados

| Fornecedor | Valor mensal | Categoria |
|---|---|---|
| **UAZAPI** (WhatsApp API) | R$ 138,00 | Operação cliente |
| **Hostinger** (cartão, valor menor — Lucas?) | ~R$ 95-100 | Hospedagem |
| **Google One** | R$ 49,99 | Storage/Email |
| **Miro** | R$ 45,00 | Colaboração |
| **Gamma App** | R$ 40,00 (parou em mai?) | Apresentações |
| **Supabase** | ~R$ 140,00 | DB cloud |
| **Seg Cart Plus** | R$ 4,90 | Tarifa banco |

### 🟡 Variáveis confirmados

| Fornecedor | Faixa | Observação |
|---|---|---|
| **Claude AI Subscription** | R$ 110 → R$ 550 (crescendo) | Lucas confirmou: é a única IA que usam hoje |
| **Hetzner Online** | ~R$ 120/mês | Lucas confirmou: usam pra **testes** (não produção cliente) |
| **OpenAI** | R$ 50-115/mês | API por uso |
| **OpenRouter** | R$ 30-90/mês | gateway IA |

### ❌ Cancelados / descontinuados

| Fornecedor | Situação |
|---|---|
| **Fireflies AI** | ❌ Cancelado · migrado pra Fathom gratuito |
| **Cursor AI** | ❌ Não usam mais · só Claude Code |
| **Anthropic API direto** | esporádico R$ 5 (não recorrente) |

### Parcelamentos ativos no cartão

| Compra | Parcela em mai | Restantes | Valor mensal | Termina em | O que é |
|---|---|---|---|---|---|
| **LINK HUB TRINOVA** (Piracicaba) | 6/11 | 5 parcelas | R$ 99,90 | out/2026 | 🏢 **Endereço fiscal Eloscope** (Lucas confirmou 18/05) |
| **AIRBNB** | 9/12 | 3 parcelas | R$ 48,09 | nov/2026 | viagem operacional |
| **KIWIFY GrowthAI** | 3/6 | 3 parcelas | R$ 5,06 | ago/2026 | curso/produto digital |

> **LINK Hub Trinova = endereço fiscal** da Eloscope LTDA em Piracicaba. Apesar de aparecer como "parcelamento" no cartão (compra parcelada em 11x), é despesa recorrente fixa de operação societária. Quando terminar out/26 vai renovar.

---

## 1️⃣1️⃣ Despesas pontuais observadas (não recorrentes)

| Data | Beneficiário | Valor | Categoria |
|---|---|---|---|
| 22/01 | POSTO SAO PEDRO RIO PRETO | R$ 235,48 | combustível |
| 28/01 | Marcus Vinicius Machado | R$ 300,00 | serviço esporádico |
| 06/04 | HOSTGATOR BRASIL | R$ 15,00 | hospedagem residual? |
| 09/04 | 99 TECNOLOGIA | R$ 17,10 | transporte |
| 09/03 | INPI | R$ 440,00 | registro marca/patente |
| 06-11/05 | UBER (5 corridas) | R$ 63,59 total | transporte |

⚠️ **HOSTGATOR R$ 15:** ainda tem algum site/cliente lá? Migrar ou cancelar.

---

## 1️⃣2️⃣ SRural — Parceira de hospedagem (FORNECEDOR + CLIENTE)

> **Lucas confirmou 18/05:** SRural é **parceira histórica** que **vende e hospeda sites** pra Eloscope. É **duplo papel:**
> - **Cliente nossa** no Asaas (`cus_000033756488`, R$ 49,90/mês de manutenção)
> - **Fornecedora nossa** — eles têm o servidor onde alguns dos nossos clientes estão hospedados
>
> Lucas paga **sempre em atraso** — daí os PIX em lotes de R$ 900-1.047.

### Lançamentos pendentes SRural (relatório 15/04/2026)

> Conta 290 = "LUCAS NEGREIRO DOS SANTOS MARKETING E TECNOLOGIA" (CNPJ pessoa física do Lucas antes da Eloscope LTDA)

| Cód SRural | Cliente final | Mensal | Status |
|---|---|---|---|
| 290 | **Eloscope** (caixas de email Enovas) | R$ 16,50 + R$ 19,90 = **R$ 36,40** | mantém |
| 290 | **Eloscope** (10GB Algesaude) | R$ 49,90 | 🔴 **CANCELAR** (plano cancelado — Lucas vai avisar SRural) |
| 273 | **Pedrão Hortifruti** (1 caixa email 10GB) | R$ 19,90 | 🔴 **CANCELAR** (cliente saiu faz tempo — Lucas vai avisar SRural) |
| 299 | **Translouvar** (5 caixas email 10GB) | R$ 29,90 | repasse cliente |
| 274 | **Cooperlimão** (1 caixa email 10GB) | R$ 34,90 | repasse cliente |
| 277 | **GT Dustato** (1 caixa email 10GB) | R$ 19,90 | repasse cliente |
| 315 | **Proteja Segurança** (hospedagem) | R$ 19,90 | repasse cliente |

**Subtotal mensal SRural HOJE (em cobrança):** R$ 210,80/mês
**Subtotal após cancelar Algesaude + Pedrão (Lucas vai avisar SRural):** **R$ 141,00/mês**
**Economia mensal:** R$ 69,80/mês (R$ 837,60/ano)

**Total pendente em atraso (relatório 15/04):** R$ 1.047,70 — Lucas pagou via PIX em 07/05/2026 ✅

### Cross-check com receita Asaas (margem por cliente hospedado na SRural)

| Cliente | MRR Asaas | Custo SRural | **Margem bruta** |
|---|---|---|---|
| Translouvar | R$ 95,80 | R$ 29,90 | R$ 65,90 (69%) |
| Cooperlimão | R$ 84,80 | R$ 34,90 | R$ 49,90 (59%) |
| **GT Dustato** | R$ 29,90 | R$ 19,90 | **R$ 10,00 (33%)** — preço **renegociado intencionalmente** pra manter cliente em carteira (jogada de longo prazo: ativar trabalho mais robusto depois) |
| **Proteja Segurança** | R$ 29,90 | R$ 19,90 | **R$ 10,00 (33%)** — mesma lógica: preço renegociado pra manter relacionamento, expandir depois |

### ⚠️ Achados críticos

1. **🔴 CANCELAR Algesaude R$ 49,90/mês** — plano cancelado (Lucas vai avisar SRural)
2. **🔴 CANCELAR Pedrão Hortifruti R$ 19,90/mês** — cliente saiu faz tempo (Lucas vai avisar SRural). Histórico: foi pago R$ 99,50 já no relatório de abr/26 — possível pedido de **reembolso/desconto** com a SRural pelos meses cobrados indevidamente
3. **🟡 Margem apertada em GT Dustato e Proteja — INTENCIONAL** — só R$ 10/mês de margem, mas **preço renegociado de propósito** pra manter cliente em carteira. Estratégia: relacionamento ativo agora → expansão de escopo (trabalho mais robusto) depois. **Não cancelar, não reajustar agressivo.** Monitorar oportunidade de upsell.
4. **Custo real SRural HOJE: R$ 210,80/mês** → **após cancelamentos: R$ 141,00/mês**
5. **Pagar SRural em dia** — débito automático ou mensalidade fixa pra não acumular atraso

### Histórico de pagamentos SRural

| Data | Valor | Período coberto |
|---|---|---|
| 14/01/2026 | R$ 900,00 | meses anteriores em atraso |
| 07/05/2026 | R$ 1.047,00 | dez/25 a abr/26 (5 meses) — quitação relatório 15/04 |

⚠️ Ações:
- **Lucas:** avisar **Vitor (sócio SRural)** pra cancelar **Algesaude** (R$ 49,90/mês) e **Pedrão Hortifruti** (R$ 19,90/mês). Tentar negociar reembolso/desconto retroativo do Pedrão (cliente saiu faz tempo)
- **Vitor (SRural):** cadastrar do lado deles cobrança mensal recorrente SRural **R$ 141,00/mês** (após cancelamentos) — pra Eloscope pagar em dia
- **GT Dustato + Proteja:** ⚠️ **NÃO reajustar pricing.** Margem R$ 10/mês é fruto de renegociação intencional pra manter cliente em carteira (estratégia de longo prazo — expandir escopo depois). Tratar como CAC pago, não como problema de pricing.
- **Eloscope (Victor Igor):** parar de pagar em lotes atrasados — débito automático ou agendamento fixo no Asaas/banco

> ⚠️ **Atenção de nomenclatura:** "Vitor" (com 1 't', sócio da SRural — fornecedor) ≠ "Victor Igor" (sócio Eloscope). Não confundir nas ações.

---

## 💰 Receitas observadas (jan-mai/26)

| Origem | Total recebido | Frequência |
|---|---|---|
| **POSICIONAMENTO DIGITAL LTDA** (CNPJ 19540550) | R$ 19.300,00 | 4 pagamentos (jan, jan, mar, abr) |
| **ELOSCOPE LTDA** (CNPJ 19540550) | R$ 15.000,00 | 3 pagamentos (abr, mai, mai) — transferência entre contas? |
| **LAVINTE SOLUCOES** | R$ 1.550,00 | 2 pagamentos (fev, mar) |
| **MATHEUS ALBUQUERQUE CAMPOS** | R$ 11.310,00 | 1× em fev (Maqlam?) |
| **REABILITACAO VETERINARIA** | R$ 2.000,00 | 1× em jan |
| **Total recebido jan-mai** | **R$ 49.160,00** | ~R$ 10K/mês |

⚠️ **Mesmo CNPJ 19540550 para Posicionamento Digital e Eloscope?** Verificar se é razão social anterior ou conta-mãe.

---

## 🎯 Plano de ação para o Victor

### 🔴 Esta semana
1. **HCA Contábil** — confirmar abril pago, cobrar fatura de maio (R$ 350)
2. **INSS Lucas** — gerar guias PA 03/2026 + 04/2026 (R$ 356,62)
3. **Recarga números maio/26** — 4 Maqlam + 5 Eloscope = 9 × R$ 25 = **R$ 225** (via PIX Surf Telecom/Correios)
4. **Lucas avisa SRural pra cancelar Algesaude (R$ 49,90) + Pedrão Hortifruti (R$ 19,90)** — economia R$ 69,80/mês (R$ 837,60/ano). Tentar reembolso retroativo do Pedrão
5. **Auditar Claude Subscription** — R$ 110→464→550 em 3 meses · setar teto
6. **Cancelar HostGator** (R$ 15/mês) se não estiver em uso
7. **Cadastrar SRural como pagamento mensal recorrente** — R$ 141,00/mês após cancelamentos (parar de pagar em atraso)

### 🟡 Próxima semana
8. **Padronizar billingType** das 14 assinaturas Asaas (12/14 UNDEFINED)
9. **Reajustar assinaturas 2022** (R$ 29,90/49,90 muito defasadas — agora ainda mais urgente com custo SRural R$ 19,90 reduzindo margem a R$ 10)
10. ~~Investigar Pedrão Hortifruti~~ ✅ Resolvido — cliente saiu faz tempo (Lucas confirmou). Cancelar na SRural
11. **Reavaliar pricing GT Dustato e Proteja Segurança** — margem bruta apertada (33%, só R$ 10/mês após SRural)
12. **Mapear Demerge** — saber exatamente qual cliente cada R$ 89,99 atende (Campos Joias vs Maqlam)
13. **Yuri Lima** parou em fev — cancelado oficialmente?
14. **Associação Comercial** falhou em mar/mai — verificar se atrasou ou pago via outro meio

### ⚪ Backlog
15. **Licenças Elementor anuais** — catalogar (quantas, valor, vencimento)
16. **Calcular margem real por cliente** (receita − custo direto SRural/Hostinger − rateio overhead)
17. **Pró-labore Victor** — formalizar contrato com data de entrada (recebe desde jan, formaliza INSS mai/26)
18. **DARFs trimestrais** — mapear PIS/COFINS/IRPJ/CSLL e cadastrar no calendário
19. **Renovar LINK Hub Trinova** — endereço fiscal Piracicaba acaba em out/26, planejar renovação
20. **Negociar com SRural** — desconto/migração para servidor próprio em clientes de baixa margem

---

## 📂 Arquivos-fonte

- `janeiro.csv` → `maio.csv` — faturas cartão Sicredi •••1842 (jan-mai/26)
- `Extrato-01-01-2026-a-18-05-2026-CSV.csv` — extrato CC Sicredi #126356084
- `20_03_2026_A_ORÇAMENTO_Serviços Contabeis_ELOSCOPE LTDA.pdf` — proposta HCA
- `areas/operacoes/auditoria-assinaturas-site-2026-05-18.md` — receita lado site

---

## 📋 Modelo de lançamento (planilha pro Victor)

```
Categoria       | Fornecedor          | Vencimento | Valor    | Forma         | Status
----------------|---------------------|------------|----------|---------------|--------
OP. cliente     | Servidor rateio     | dia X      | 266,00   | ?             | recorrente
OP. cliente     | SRural (4 cli + email) | mensal  | 141,00   | PIX           | recorrente — PAGAR EM DIA (atrasado hoje)
OP. cliente     | Hostinger Campos    | mensal     | ~90,00   | PIX (Demerge) | recorrente
OP. cliente     | Hostinger Maqlam    | mensal     | ~90,00   | PIX (Demerge) | recorrente
OP. cliente     | UAZAPI              | dia 15     | 138,00   | Cartão Inter  | recorrente
TELEFONIA       | Maqlam (4 números)  | bimestral  | 100,00   | PIX Surf/Corr | recorrente
TELEFONIA       | Eloscope (5 nrs)    | bimestral  | 125,00   | PIX Surf/Corr | recorrente
INFRA           | Hetzner (testes)    | mensal     | ~120,00  | Cartão Inter  | recorrente variável
INFRA           | Supabase            | dia 14-18  | ~140,00  | Cartão Inter  | recorrente
SAAS            | Google One          | dia 22-26  | 49,99    | Cartão Inter  | recorrente
SAAS            | Miro                | dia 6-19   | 45,00    | Cartão Inter  | recorrente
SAAS            | Gamma App           | dia 22     | 40,00    | Cartão Inter  | recorrente (?)
IA              | Claude AI           | variável   | ~370,00  | Cartão Inter  | crescente — AUDITAR
IA              | OpenAI              | variável   | ~80,00   | Cartão Inter  | recorrente
IA              | OpenRouter          | variável   | ~50,00   | Cartão Inter  | recorrente
CONTÁBIL        | HCA                 | mensal     | 350,00   | a def.        | desde abr/26
TRIBUTOS        | INSS Lucas          | dia 20     | 178,31   | GPS           | em atraso (abr+mai)
TRIBUTOS        | INSS Victor         | dia 20     | 178,31   | GPS           | inicia mai/26
TRIBUTOS        | DARFs trimestrais   | trimestre  | varia    | DARF          | recorrente
ASSOC.          | Associação Com.     | dia 12-22  | ~100,00  | boleto        | recorrente
ENDEREÇO FISCAL | LINK Hub Trinova    | dia 4      | 99,90    | Cartão Inter  | parcela 6/11 (renova out/26)
SÓCIOS          | Pró-labore Lucas    | mensal     | 1.621,00 | PIX Sicredi   | recorrente
SÓCIOS          | Pró-labore Victor   | mensal     | 1.621,00 | PIX Sicredi   | recorrente
OPERAÇÃO        | Hugo                | variável   | 300-650  | PIX Sicredi   | por demanda
PARCELAMENTO    | Airbnb              | dia 14     | 48,09    | Cartão Inter  | até nov/26
PARCELAMENTO    | Kiwify GrowthAI     | dia 18     | 5,06     | Cartão Inter  | até ago/26
TARIFA BANCO    | Seg Cartão Plus     | dia 8      | 4,90     | Cartão Inter  | recorrente
```

---

## ✅ Confirmações finais Lucas (18/05/2026)

- ✅ Stack IA: **só Claude Code** (Cursor e Fireflies cancelados; Fathom gratuito substituiu Fireflies)
- ✅ Hetzner: ~R$ 120/mês para **testes** (não produção cliente)
- ✅ HCA: vigência iniciada **abril/2026**, pago **só 1 mês** até agora
- ✅ Surf Telecom = Correios (mesma operadora, labels diferentes no extrato)
- ✅ LINK Hub Trinova Piracicaba = **endereço fiscal** da Eloscope LTDA
- ✅ Bancos ativos: **Asaas (receita) + Inter (cartão) + Sicredi (CC operacional)**
- ✅ SRural = parceira que hospeda 4 clientes nossos + email Eloscope (R$ 141,00/mês após cancelar Algesaude e Pedrão). Lucas paga sempre em atraso — cadastrar mensal
- ✅ Algesaude (R$ 49,90/mês na SRural) — **cancelar** (plano cliente cancelado)
- ✅ Pedrão Hortifruti (R$ 19,90/mês na SRural) — **cancelar** (cliente saiu faz tempo — Lucas avisa SRural e tenta reembolso retroativo)
- ⏳ Falta: licenças Elementor anuais (catalogar)
- ⏳ Falta: contrato formal Victor (pró-labore desde jan, INSS começa mai/26)
