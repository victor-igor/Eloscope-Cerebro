---
name: secure-payment
description: Analisa e blinda estrutura financeira do contrato — modelo de pagamento, garantias de recebimento, risk score, condições de fechamento
agent: hermes-legal
triggers:
  - Delegação de Thêmis durante analyze-contract
  - Revisão financeira pontual de contrato
inputs:
  - contract_path: caminho do contrato
  - total_value: valor total do contrato
  - client_profile: novo/recorrente, porte, histórico
outputs:
  - payment_report: estrutura + garantias + risk score
  - risk_score: 0-100
  - pending_conditions: lista de pendências para fechar
---

# Task: Secure Payment

## Pré-requisitos
- Contrato com valor definido
- Perfil do cliente (novo/recorrente, porte)

## Passos

### 1. Avaliar modelo de pagamento atual
Ler cláusula de pagamento do contrato e identificar:
- Modelo (à vista, 50/50, parcelado, recorrente)
- Datas de vencimento
- Condições para cada parcela

### 2. Verificar garantias de recebimento
Checar presença de:
- [ ] Multa por atraso (máx 2%)
- [ ] Juros de mora (1% a.m.)
- [ ] Correção monetária (IPCA/IGPM)
- [ ] Cláusula resolutiva expressa
- [ ] Título executivo extrajudicial (2 testemunhas)
- [ ] Retenção de entregáveis até quitação
- [ ] Vencimento antecipado das parcelas em caso de inadimplência

### 3. Calcular risk score
Avaliar com base em:
- Ticket vs. porte do cliente (peso alto)
- Histórico de pagamento (peso alto)
- Estrutura de pagamento escolhida (peso alto)
- Garantias contratuais presentes (peso médio)
- Tipo de relacionamento (peso baixo)

### 4. Recomendar ajustes
Se risk score > 30:
- Sugerir antecipação maior
- Recomendar garantias adicionais
- Propor modelo de pagamento alternativo

### 5. Checar condições de fechamento
Verificar que tudo está pronto para assinar:
- [ ] Valor e forma definidos
- [ ] Datas de vencimento explícitas
- [ ] Dados bancários no contrato
- [ ] Multa/juros definidos
- [ ] Testemunhas previstas
- [ ] Nota fiscal definida (quem emite, quando)

### 6. Gerar relatório
No formato padrão de Hermes-Legal com estrutura, garantias, score e pendências.
