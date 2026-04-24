# /assinar — Skill de Assinatura Digital

## O que faz

Envia contratos aprovados para assinatura digital via plataforma (Autentique). Valida dados das partes, confere integridade do documento e despacha com confirmacao humana obrigatoria.

## Como usar

### Enviar contrato para assinatura

```
/assinar
```

O skill vai perguntar:
1. Qual contrato (caminho do arquivo)
2. Qual plataforma (Autentique)
3. Dados do contratante (nome, CNPJ/CPF, email)
4. Dados do contratado
5. Apresenta resumo para confirmacao

Apos confirmacao, envia pela API da Autentique.

### Verificar status

```
/assinar status {document_id}
```

Retorna quem assinou, quem falta, e link do PDF assinado quando completo.

### Reenviar notificacao

```
/assinar reenviar {document_id} {email}
```

Reenvia o email de assinatura para um signatario pendente.

## Pre-requisitos

1. `AUTENTIQUE_KEY` configurada no `.env`
2. Contrato em PDF (ou HTML que sera convertido)
3. Dados completos das partes (nome, documento, email)

## Fluxo completo

```
Contrato pronto
    |
Themis (revisao juridica) -> Solon (compliance) -> Hermes-Legal (pagamento)
    |
Themis emite GO
    |
/assinar
    |
Notario valida:
  - Contratante (nome, CNPJ/CPF, email)
  - Contratado (nome, CNPJ, email)
  - Documento (PDF, variaveis preenchidas, datas, valores)
  - Conferencia cruzada com proposta
    |
Apresenta resumo -> Confirmacao humana
    |
Envia para Autentique
    |
Signatarios recebem email com link
    |
Webhook/verificacao -> PDF assinado
```

## Agente responsavel

**Notario** (`squads/eloscope-os/agents/legal/notario.md`) — o tabeliao digital. Orquestra validacao e envio. Nunca envia sem:
- GO de Themis (closing-review)
- Confirmacao humana do resumo

## API Autentique — Referencia rapida

| Item | Valor |
|------|-------|
| Endpoint | `POST https://api.autentique.com.br/v2/graphql` |
| Auth | `Authorization: Bearer {AUTENTIQUE_KEY}` |
| Formato | GraphQL via multipart/form-data |
| Rate limit | 60 req/min |
| Documentacao completa | `lasted-entregas/autentique-api-research.md` |

## Plataformas suportadas

| Plataforma | Status |
|-----------|--------|
| Autentique | Ativo |
| DocuSign | Futuro |
| Clicksign | Futuro |

## Arquivos relacionados

| Arquivo | Descricao |
|---------|-----------|
| `skills/assinar/SKILL.md` | Definicao da skill |
| `squads/eloscope-os/agents/legal/notario.md` | Agent Notario |
| `squads/eloscope-os/tasks/send-contract-autentique.md` | Task de envio |
| `squads/eloscope-os/tasks/check-signature-status.md` | Task de verificacao |
| `squads/eloscope-os/workflows/contract-review.md` | Workflow completo |
| `lasted-entregas/autentique-api-research.md` | Dossie API |
