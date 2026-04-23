---
name: closing-review
description: Review final pré-assinatura — consolida análise de Thêmis + Sólon + Hermes-Legal, executa checklist de fechamento, emite GO/NO-GO
agent: themis
triggers:
  - Após analyze-contract completo
  - Pré-assinatura final
inputs:
  - contract_path: caminho do contrato
  - analysis_report: relatório de Thêmis (se já existe)
  - compliance_report: parecer de Sólon (se já existe)
  - payment_report: relatório de Hermes-Legal (se já existe)
outputs:
  - closing_verdict: GO / NO-GO com justificativa
  - pending_items: lista de itens pendentes (se NO-GO)
---

# Task: Closing Review

## Pré-requisitos
- Contrato finalizado (versão que vai para assinatura)
- Idealmente: relatórios de Thêmis, Sólon e Hermes-Legal já gerados

## Passos

### 1. Verificar que análises foram feitas
Se faltam relatórios, executar tasks pendentes:
- analyze-contract (Thêmis)
- check-compliance (Sólon)
- secure-payment (Hermes-Legal)

### 2. Checklist de fechamento

**Estrutura do contrato:**
- [ ] Partes completas (nome, CNPJ/CPF, endereço, representante)
- [ ] Objeto claro e específico
- [ ] Entregáveis numerados
- [ ] Exclusões explícitas
- [ ] Prazo com datas absolutas (não relativas)
- [ ] Valor e pagamento definidos
- [ ] Rescisão prevista

**Compliance (Sólon):**
- [ ] Nenhuma cláusula ilegal identificada
- [ ] Nenhuma cláusula abusiva identificada
- [ ] Segurança da informação coberta
- [ ] Legislação aplicável respeitada

**Pagamento (Hermes-Legal):**
- [ ] Garantias de recebimento presentes
- [ ] Risk score aceitável (<60)
- [ ] Condições de fechamento completas
- [ ] Dados bancários definidos

**Formalidades:**
- [ ] Foro definido (cidade/estado)
- [ ] Data do documento
- [ ] Espaço para assinaturas
- [ ] Espaço para testemunhas (se título executivo)
- [ ] Referência à proposta comercial

### 3. Classificar pendências

| Tipo | Ação |
|------|------|
| **Bloqueante** | NÃO assinar até resolver |
| **Importante** | Resolver antes se possível, pode negociar |
| **Menor** | Ajuste cosmético, não impede assinatura |

### 4. Emitir veredicto

**GO:** Todas as checagens passaram, sem pendências bloqueantes.
```
✅ GO — Contrato pronto para assinatura.
Pendências menores: {lista, se houver}
```

**NO-GO:** Existem pendências bloqueantes.
```
❌ NO-GO — {N} pendência(s) bloqueante(s):
1. {pendência}
2. {pendência}

Ação necessária antes de assinar:
- {ação 1}
- {ação 2}
```
