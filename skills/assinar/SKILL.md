---
name: assinar
description: "Enviar contrato para assinatura digital — valida partes, documento e despacha para plataforma"
trigger: /assinar
---

# /assinar — Enviar contrato para assinatura digital

## Objetivo
Orquestrar o envio de contrato aprovado para assinatura digital. Valida dados das partes (contratante/contratado), confere integridade do documento, e despacha para a plataforma escolhida.

## Fluxo

### Etapa 1 — Coleta de informações

Perguntar ao operador:

1. **Qual contrato?** (caminho do arquivo ou nome do projeto/cliente)
2. **Qual plataforma de assinatura?**
   - `1` — Autentique (ativo)
   - `2` — DocuSign (futuro)
   - `3` — Clicksign (futuro)

### Etapa 2 — Identificar partes

Coletar ou buscar no segundo cérebro (`memory/context/people.md`, `memory/projects/`):

**Contratante (cliente):**
- Nome completo / Razão social
- CPF ou CNPJ
- Endereço
- Email (obrigatório — recebe link de assinatura)
- Telefone
- Representante legal (se PJ)

**Contratado (Eloscope ou conforme contrato):**
- Razão social
- CNPJ
- Endereço
- Email
- Representante legal

**Testemunhas (se previstas no contrato):**
- Nome + CPF + Email de cada

### Etapa 3 — Validação do documento

Ler o contrato (PDF ou markdown) e verificar:

- [ ] Todas variáveis preenchidas (nenhum `{placeholder}`)
- [ ] Datas absolutas (DD/MM/YYYY)
- [ ] Valor e parcelas corretos
- [ ] Foro preenchido
- [ ] Nomes das partes no contrato batem com dados coletados
- [ ] CPF/CNPJ no contrato batem com dados coletados

Se encontrar inconsistências → **PARAR e reportar** antes de continuar.

### Etapa 4 — Conferência cruzada (se proposta existe)

Buscar proposta vinculada ao projeto em `memory/projects/` ou `lasted-entregas/`:
- Valor do contrato = proposta aceita?
- Entregáveis = proposta?
- Prazo = proposta?

### Etapa 5 — Resumo e confirmação

Apresentar resumo completo:

```
📋 RESUMO DE ENVIO — Confirmação Obrigatória

Documento: {nome}
Plataforma: {Autentique}

CONTRATANTE
  Nome: {nome}
  Doc:  {CPF/CNPJ}
  Email: {email} ← recebe link

CONTRATADO
  Nome: {nome}
  Doc:  {CNPJ}
  Email: {email} ← recebe link

TESTEMUNHAS
  1. {nome} ({CPF}) — {email}
  2. {nome} ({CPF}) — {email}

CONTRATO
  Valor: R$ {valor}
  Prazo: {início} a {fim}
  Foro: {cidade/estado}

CONFIGURAÇÕES
  Lembrete: Semanal
  Deadline: {data}
  Recusável: Não

⚠️ Confirma o envio? (sim/não)
```

### Etapa 6 — Envio

Após confirmação:
- Se **Autentique**: executar task `send-contract-autentique` do squad `eloscope-os`
- Apresentar resultado: Document ID, links de assinatura, status

### Etapa 7 — Pós-envio

- Reportar links de assinatura ao operador
- Sugerir: "Use `/assinar status {document_id}` para verificar andamento"

## Sub-comando: /assinar status

Verificar status de assinatura existente:

```
/assinar status {document_id}
```

Executa task `check-signature-status` → retorna quem assinou, quem falta, link do PDF assinado.

## Sub-comando: /assinar reenviar

Reenviar notificação para signatário pendente:

```
/assinar reenviar {document_id} {email}
```

## Dependências
- `AUTENTIQUE_KEY` no `.env`
- Squad `eloscope-os` (área Legal)
- Agent: Notário
- Tasks: `send-contract-autentique`, `check-signature-status`

## Referência técnica
- Dossiê API: `lasted-entregas/autentique-api-research.md`
- Agent: `squads/eloscope-os/agents/legal/notario.md`
