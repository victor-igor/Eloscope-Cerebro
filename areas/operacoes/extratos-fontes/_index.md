---
tipo: indice
status: ativo
tags: [financeiro, extratos, fontes-primarias, sicredi, srural, hca]
atualizado: 2026-05-19
---

# Extratos-fontes — fontes primárias do financeiro

Documentos originais que embasam a auditoria de custos fixos (`areas/operacoes/custos-fixos-2026-05-18.md`) e a auditoria de assinaturas (`areas/operacoes/auditoria-assinaturas-site-2026-05-18.md`).

**Regra:** estes arquivos são **fonte primária**. Não editar — só anexar novos. As análises compiladas vivem nos `.md` da pasta `areas/operacoes/`.

## Conteúdo

### `cartao-sicredi-1842/` — Faturas cartão pessoal Sicredi •••1842
Cartão que o Lucas usa pra rodar os custos da Eloscope (assinaturas SaaS, transporte, etc.).

| Arquivo | Período |
|---------|---------|
| `2026-01-fatura.csv` | janeiro/2026 |
| `2026-02-fatura.csv` | fevereiro/2026 |
| `2026-03-fatura.csv` | março/2026 |
| `2026-04-fatura.csv` | abril/2026 |
| `2026-05-fatura.csv` | maio/2026 |

**Cabeçalho CSV:** `Descricao | Data | Cartao | Lançamento | Categoria | Tipo | Valor`

### `conta-corrente-sicredi-126356084/` — Extrato CC Eloscope
Conta corrente PJ da Eloscope LTDA no Sicredi.

| Arquivo | Período |
|---------|---------|
| `2026-01-a-2026-05-18-extrato.csv` | 01/01/2026 a 18/05/2026 (consolidado YTD) |

### `srural/` — Relatórios da parceira de hospedagem
SRural é fornecedora (hospeda 4 clientes nossos + email Eloscope ~R$ 141/mês) e também cliente nossa (manutenção R$ 49,90/mês).

| Arquivo | O que é |
|---------|---------|
| `2026-04-15-lancamentos-pendentes.pdf` | Relatório de mensalidades em atraso até 15/04/2026 — base do PIX de R$ 1.047 pago em 07/05/2026 |

⚠️ **Atenção de nomenclatura:** Vitor (1 't', sócio SRural) ≠ Victor Igor (sócio Eloscope). Ver memória `reference_pessoas_vitor_vs_victor.md`.

### `hca-contabil/` — Contabilidade
HCA Contábil é a contabilidade atual da Eloscope (vigência iniciada abr/2026, R$ 350/mês).

| Arquivo | O que é |
|---------|---------|
| `2026-03-20-orcamento-servicos-contabeis.pdf` | Orçamento original que originou o contrato — assinado/iniciado abril/2026 |

## Cross-references

- `areas/operacoes/custos-fixos-2026-05-18.md` — auditoria consolidada jan-mai/2026 que cruza estes 3 universos (cartão + CC + assinaturas + SRural + HCA)
- `areas/operacoes/auditoria-assinaturas-site-2026-05-18.md` — corte específico de assinaturas SaaS
- `memory/context/pendencias.md` linha 44-53 — síntese das urgências derivadas desta auditoria
