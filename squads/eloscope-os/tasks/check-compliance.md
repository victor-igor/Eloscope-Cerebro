---
name: check-compliance
description: Verifica contrato contra legislação vigente — legalidade, abusividade, segurança da informação, gaps regulatórios
agent: solon
triggers:
  - Delegação de Thêmis durante analyze-contract
  - Dúvida legal pontual sobre cláusula
inputs:
  - contract_path: caminho do contrato
  - relationship_type: B2B/B2C/mixed (se já conhecido)
outputs:
  - compliance_report: parecer com cláusulas verificadas e gaps
  - verdict: conforme/ajustes/risco
---

# Task: Compliance Check

## Pré-requisitos
- Contrato disponível
- Contexto da relação (quem são as partes)

## Passos

### 1. Classificar relação jurídica
- **B2B:** Código Civil prevalece
- **B2C:** CDC prevalece
- **B2B com vulnerabilidade:** CDC pode se aplicar (MEI/micro vs. grande empresa)

### 2. Mapear legislação aplicável
Listar todas as leis relevantes para este contrato:
- CC (obrigatório)
- CDC (se B2C)
- Marco Civil (se serviço digital)
- LGPD (se dados pessoais)
- Lei de Software (se entrega software)

### 3. Verificar cada cláusula

Para cada cláusula do contrato, responder:

| Check | Pergunta |
|-------|----------|
| Legal? | Viola algum artigo de lei? |
| Abusiva? | Cria desvantagem exagerada? (CDC art. 51) |
| Proporcional? | Penalidades são proporcionais? |
| Recíproca? | Obrigações são mútuas? |
| Clara? | Linguagem permite dupla interpretação? |

### 4. Verificar segurança da informação
Checar presença e qualidade de:
- Confidencialidade
- Definição de informação confidencial
- Prazo de sigilo
- Exceções ao sigilo
- Obrigação de devolver/destruir dados
- Notificação de incidente
- Responsabilidade por vazamento

### 5. Identificar gaps
Listar o que falta, com:
- Severidade (alta/média/baixa)
- Referência legal (artigo/lei)
- Recomendação de correção

### 6. Emitir parecer
- **Conforme:** todas as cláusulas OK, sem gaps críticos
- **Ajustes necessários:** gaps não-críticos identificados
- **Risco jurídico:** gaps críticos, não assinar sem corrigir
