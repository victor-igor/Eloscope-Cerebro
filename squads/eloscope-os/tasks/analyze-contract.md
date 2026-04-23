---
name: analyze-contract
description: Análise completa de contrato — classifica natureza, verifica cláusulas, identifica riscos, gera score e relatório
agent: themis
triggers:
  - Novo contrato criado
  - Contrato existente precisa de revisão
  - Pré-assinatura
inputs:
  - contract_path: caminho do contrato (.md ou .html)
  - client_name: nome do cliente
  - contract_type: tipo esperado (service/saas/consulting/mixed)
outputs:
  - analysis_report: relatório no formato padrão de Thêmis
  - score: 0-100
  - recommendation: sign/adjust/rewrite
---

# Task: Análise Contratual

## Pré-requisitos
- Contrato disponível para leitura
- Contexto do cliente (quem é, o que contratou)

## Passos

### 1. Ler contrato completo
Ler o documento de ponta a ponta. Não pular seções.

### 2. Classificar natureza jurídica
- Prestação de serviço (CC art. 593+)
- Licenciamento de software (Lei 9.609/98)
- Consultoria
- Misto

### 3. Verificar cláusulas obrigatórias
Usar checklist do agent Thêmis conforme tipo identificado.
Marcar cada cláusula como presente/ausente.

### 4. Delegar compliance → Sólon
Pedir ao Sólon para:
- Classificar relação jurídica (B2B/B2C)
- Verificar legalidade de cada cláusula
- Checar segurança da informação
- Listar gaps regulatórios

### 5. Delegar payment → Hermes-Legal
Pedir ao Hermes-Legal para:
- Avaliar estrutura de pagamento
- Verificar garantias de recebimento
- Calcular risk score
- Checar condições de fechamento

### 6. Consolidar análise
Gerar relatório unificado com:
- Classificação
- Cláusulas presentes/ausentes
- Riscos identificados
- Resultado do compliance (Sólon)
- Resultado do payment (Hermes-Legal)
- Score final
- Recomendação: assinar / ajustar / reescrever

### 7. Entregar relatório
Salvar em `{contract_dir}/analise-contratual.md`
