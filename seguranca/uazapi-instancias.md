---
title: uazapi — Instâncias WhatsApp Eloscope
type: referencia
tags: [seguranca, uazapi, whatsapp, integracoes]
sensibilidade: media
---

# uazapi — Instâncias WhatsApp Eloscope

> [!important] **Regra de segurança:** tokens uazapi **NÃO vão pro git**.
> Tokens são inseridos manualmente em cada máquina local quando o MCP `claude-uazapi-elo` é instalado (passados como parâmetro de instalação / variável de ambiente / config local).
> Este arquivo guarda apenas **metadados** (servidor, IDs, números, propósito). Pra recuperar token: pedir ao Lucas ou consultar painel uazapi.

## Server

- **URL:** `https://eloscope.uazapi.com`
- **Painel:** acessível via navegador na URL acima

## Instâncias ativas

### 1. Lucas Pessoal/Principal

| Campo | Valor |
|---|---|
| Número | `+55 17 92000-8791` (`5517920008791`) |
| Status | `connected` (confirmado 18/05/2026) |
| Uso | Lucas COO — prospecção, follow-up comercial, contatos diretos da linha pessoal |
| Token | **Local** — inserir manualmente na config do MCP |

### 2. LunaJ6 v2

| Campo | Valor |
|---|---|
| Instance ID | `r2ee1c8d2536831` |
| Profile Name | `Luna J6` |
| Número | `+55 17 92000-2289` (`5517920002289`) |
| Status | `connected` |
| Plataforma | smba (WhatsApp Business API) |
| Criado | 14/04/2026 |
| Uso | Instância business para Luna J6 (BDR automatizado) |
| Token | **Local** — inserir manualmente na config do MCP |

## MCP `claude-uazapi-elo` — como instalar com múltiplas instâncias

Quando instalar o MCP em uma máquina nova, passar a **lista de tokens uazapi** como parâmetro de instalação / config local. Cada máquina mantém sua própria lista — nada disso entra no repositório.

⚠️ **Estado atual:** o MCP aponta hoje apenas para a instância **LunaJ6 v2**. Pra usar a linha Lucas principal pelo Claude Code, atualizar config local do MCP com o token da instância 1.

Repo do plugin MCP: `eloscopecoo-rgb/claude-uazapi-elo`

## Tools MCP disponíveis hoje

- `verificar_instancia` — status da conexão
- `verificar_numero` — valida se número existe (atualmente com bug, retorna Bad Request)
- `enviar_mensagem` — envia texto pra número/grupo
- `listar_contatos` — lista contatos da instância
- `listar_grupos` — lista grupos da instância

❌ **Faltam tools de leitura** (`get_messages`, `get_chat_history`) — pra Claude consumir conversas, expor essas no MCP.

## Pendências

- [18/05/2026] @devops — atualizar config local do MCP `claude-uazapi-elo` pra apontar pra instância Lucas principal (ou suportar as duas com seleção por contexto)
- [18/05/2026] @devops — expor tools de leitura de histórico no MCP (`get_messages`, `get_chat_history`)
