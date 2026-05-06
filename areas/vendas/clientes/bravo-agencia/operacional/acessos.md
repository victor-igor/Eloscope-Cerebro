---
tipo: operacional
empresa: Agência Bravo
tags: [cliente/bravo, acessos, infra, checklist]
status: ativo
---

# Acessos — Agência Bravo

> Checklist de credenciais a coletar do Gustavo para destravar o setup técnico.
> Origem: call **Definição Skills — 30/04/2026** ([Fathom](https://fathom.video/calls/657369535) `142594826`).
> Responsável de cobrança: **Lucas** · Responsável técnico: **Hugo**.

---

## 🔴 Bloqueante — semana 05–09/05

| # | Acesso | Responsável Bravo | Pra quê | Status |
|---|--------|-------------------|---------|--------|
| 1 | **Hostinger** (login + senha + 2FA) | Gustavo | VPS para hospedar OpenClaw + n8n + Claude Code | ⬜ Pedido |
| 2 | **Nome do assistente IA** | Gustavo | Branding da skill no WhatsApp do cliente final | ⬜ Pedido |
| 3 | **Meta Business Suite — Business Manager ID** + acesso de admin | Gustavo | Pré-requisito Skill 2 (Agendamento) — API Graph | ⬜ Pedido |
| 4 | **Cliente-piloto da Skill 1** (qual?) | Gustavo escolhe | Definir quem testa Aprovação automatizada primeiro | ⬜ Pedido |

---

## 🟡 Necessário até semana 2 (12–16/05)

| # | Acesso | Responsável Bravo | Pra quê | Status |
|---|--------|-------------------|---------|--------|
| 5 | **WhatsApp Business API** — credenciais (token + phone_number_id) | Gustavo + Hugo | Skill 1 envia lembretes + recebe respostas via webhook | ⬜ |
| 6 | **ClickUp da Bravo** — workspace ID + token API | Gustavo | Centralizar fluxo de aprovação (alternativa ao Google Sheets) | ⬜ |
| 7 | **Google Sheets template aprovações** (caso ClickUp não rolar) | Lucas cria + Gustavo libera permissão | Plano B Skill 1 — quadro centralizado | ⬜ |
| 8 | **Telefone do cliente-piloto** (campo no quadro) | Gustavo | Skill 1 envia WhatsApp pro cliente | ⬜ |

---

## 🟡 Necessário até semana 3 (19–23/05)

| # | Acesso | Responsável Bravo | Pra quê | Status |
|---|--------|-------------------|---------|--------|
| 9 | **Meta Graph API** — App ID + App Secret + tokens de páginas dos clientes | Gustavo coleta cliente a cliente | Skill 2 agenda no Instagram + Facebook de cada cliente | ⬜ |
| 10 | **Google Analytics dos clientes** (acesso de leitura) | Gustavo | Skill 3 puxa métricas para análise mensal | ⬜ |
| 11 | **Lista dos 20 clientes** (nome, segmento, redes ativas) | Gustavo | Cadastrar no sistema + priorizar onboarding nas skills | ⬜ |
| 12 | **Reportei / M-Labs** (se ainda em uso) | Gustavo informa | Decidir se substituímos completo ou integramos | ⬜ |

---

## ⚪ Opcional — fase 2 (pós-entrega)

| # | Acesso | Pra quê |
|---|--------|---------|
| 13 | TikTok Business API | Expansão Skill 2 |
| 14 | LinkedIn Business API | Expansão Skill 2 |
| 15 | WordPress dos clientes (admin) | Skill 2 pode publicar blog |
| 16 | Premiere Pro (licença Bravo) | POC Skill 4 (vídeo) |

---

## Mensagem-modelo para o Gustavo (WhatsApp)

```
Gustavo, segue checklist do que precisamos pra começar setup essa semana
(Skills 1, 2 e 3 que validamos na call de 30/04):

URGENTE (até 09/05):
1. Acesso Hostinger (login + senha)
2. Nome que você quer dar pro assistente IA
3. Meta Business Manager ID + você me adicionar como admin
4. Qual cliente vai ser o piloto da Skill 1 (Aprovação)?

PRÓXIMA SEMANA (12–16/05):
5. WhatsApp Business API (te oriento como gerar)
6. ClickUp da Bravo (workspace ID + token) ou Google Sheets compartilhado
7. Telefone do cliente-piloto

FASE 3 (semana de 19/05):
8. Acessos das contas Meta de cada cliente (Instagram + Facebook)
9. Google Analytics dos 20 clientes
10. Planilha com nome/segmento dos 20 clientes

Posso te mandar tutorial em vídeo/print de como gerar cada um?
```

---

## Quando recebido — onde guardar

| Tipo de credencial | Local seguro |
|--------------------|--------------|
| Hostinger / VPS | 1Password Eloscope (vault `bravo-infra`) |
| Tokens API (Meta/WhatsApp/ClickUp) | `.env` do repo Bravo (a criar) + 1Password |
| Acessos clientes (GA/Meta) | 1Password (vault `bravo-clientes`) — um item por cliente |

> Nunca commitar tokens. Sempre `.env.example` no repo + `.env` gitignored.

---

*Criado: 2026-05-03 · Atualizar status conforme acessos chegam.*
