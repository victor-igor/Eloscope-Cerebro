---
name: contract-review
description: Pipeline completo de revisão contratual — análise → compliance → pagamento → closing review
area: legal
orchestrator: themis
agents: [themis, solon, hermes-legal, notario]
triggers:
  - Novo contrato pronto para revisão
  - Contrato existente precisa de validação pré-assinatura
inputs:
  - contract_path: caminho do contrato
  - client_name: nome do cliente
  - contract_value: valor total
outputs:
  - closing_verdict: GO / NO-GO
  - full_report: relatório consolidado
---

# Workflow: Contract Review Pipeline

## Visão geral

```
Contrato → Thêmis (análise) → Sólon (compliance) → Hermes-Legal (pagamento) → Thêmis (closing)
                                                                                    ↓
                                                                              GO / NO-GO
                                                                                    ↓ (se GO)
                                                                              Notário (envio)
                                                                                    ↓
                                                                        Assinatura digital (/assinar)
```

## Fases

### Fase 1: Análise contratual (Thêmis)
**Task:** `analyze-contract`
- Classifica natureza jurídica
- Verifica cláusulas obrigatórias
- Identifica riscos iniciais
- **Output:** classificação + checklist de cláusulas + riscos

### Fase 2: Compliance check (Sólon)
**Task:** `check-compliance`
- Classifica relação jurídica (B2B/B2C)
- Verifica legalidade de cada cláusula
- Checa segurança da informação
- Lista gaps regulatórios
- **Output:** parecer compliance + gaps

**Se dados pessoais envolvidos:** Sólon sinaliza → Pallas faz deep-dive LGPD (sub-workflow).

### Fase 3: Payment security (Hermes-Legal)
**Task:** `secure-payment`
- Avalia modelo de pagamento
- Verifica garantias de recebimento
- Calcula risk score
- Checa condições de fechamento
- **Output:** estrutura financeira + risk score + pendências

### Fase 4: Closing review (Thêmis)
**Task:** `closing-review`
- Consolida Fase 1 + 2 + 3
- Executa checklist final pré-assinatura
- Classifica pendências (bloqueante / importante / menor)
- Emite veredicto final

**GO:** contrato avança para Fase 5 (Notário).
**NO-GO:** lista de pendências bloqueantes + ações necessárias.

### Fase 5: Envio para assinatura (Notário) — após GO
**Task:** `send-contract-autentique` (ou plataforma escolhida)
- Valida dados das partes (contratante + contratado + testemunhas)
- Valida integridade do documento (PDF, variáveis, datas, valores)
- Conferência cruzada com proposta comercial
- Apresenta resumo → aguarda confirmação humana
- Despacha para plataforma de assinatura digital
- Registra document_id, links, status
- **Output:** registro de envio + links de assinatura

**Trigger:** skill `/assinar` ou chamada direta do Notário.

## Regras

1. Fases são sequenciais — cada uma depende da anterior
2. Se Fase 2 encontra ilegalidade → BLOQUEIA, não avança para Fase 3
3. Se Fase 3 risk score > 80 → flag para revisão humana obrigatória
4. Thêmis é dono do relatório final — consolida tudo
5. Pallas é chamada on-demand (dados pessoais), não é obrigatória em todo contrato
6. Fase 5 (Notário) só executa após GO da Fase 4 — nunca pular closing review
7. Notário exige confirmação humana antes de enviar — nunca automático
