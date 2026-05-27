---
tipo: projeto
status: ativo
cliente: Denis Franco
empresa: Elite Maqlam
tags: [projeto, cliente/maqlam, elo-os, ativo]
url: https://elo.elitemaqlam.com.br
repo: git@github.com:victor-igor/Maqlam.git
---

# Elite Maqlam — Projeto

> Cliente ativo desde out/2025. Plataforma customizada Elo OS para loja de produtos pet.
> Plano: Top das Galáxias R$1.197/mês por 3 meses (trial), depois R$2.197/mês. Vencimento dia 25.

---

## Contatos

| Nome | Papel | Notas |
|------|-------|-------|
| Denis Franco | Dono / decisor | Contato principal comercial e operacional |
| Marcella Huber | Vendedora | Usa campanhas e follow-up no dia a dia |
| Juliano | Vendedor | Recebe acesso admin à knowledge base da AI |

---

## Produto entregue

Plataforma SaaS customizada hospedada em `https://elo.elitemaqlam.com.br`.

**Stack:** React 18 + TypeScript + Vite · TanStack Query 5 · Tailwind CSS 4 · Clerk (auth) · Supabase (PostgreSQL + Edge Functions) · Vercel (deploy)

---

## Módulos do sistema

| Módulo | Path | O que faz |
|--------|------|-----------|
| **Contatos** | `src/features/contacts` | Base central de contatos — CRUD, tags, histórico de pedidos Olist |
| **Campanhas** | `src/features/campaigns` | Disparos em massa (WhatsApp oficial Meta + não-oficial) — instant, scheduled, recurring |
| **Cashback** | `src/features/cashback` | Sistema manual de cashback (import planilha, saldo por contato, regras de resgate) |
| **Gerador de Leads** | `src/features/gerador-leads` | Scraping Google Maps por nicho/cidade → exporta pra CRM com validação WhatsApp |
| **Recompra** | `src/features/product-recompra` | Ciclos automáticos de recompra por perfil de produto (ex: cliente compra Bubble toda terça) |
| **Follow-up Sequences** | `src/features/followup-sequences` | Sequências automáticas de follow-up com stop-on-reply e blacklist |
| **EloCRM** | `src/features/elocrm` | CRM completo: Deals, Kanban, Pipelines, Accounts, Activities (schema `crmelo`) |
| **EloSales** | `src/features/elosales` | Módulo de vendas integrado |
| **Central de Tarefas** | `src/features/tarefas` | Board temporal (hoje/amanhã/essa semana/atrasadas) + link contato CRM |
| **Financeiro** | `src/features/financial` | Lançamentos, contas a receber, DRE, parcelamento |
| **Goals** | `src/features/goals` | Metas comerciais da equipe |
| **AI / MAC** | `src/features/ai` | Agente de IA (MAC = Multi-Agent Core): responde WhatsApp, RAG na knowledge base, admin de memória (feriados, horários, produtos) |
| **Usuários** | `src/features/users` | Gestão de equipe e permissões |
| **Settings** | `src/features/settings` | Integração Meta (tokens), WhatsApp, API keys |

---

## Edge Functions (Supabase)

| Função | O que faz |
|--------|-----------|
| `ai-agent-respond` | MAC responde contatos via WhatsApp em tempo real |
| `ai-process-document` | Processa documentos para a knowledge base (RAG) |
| `embed-knowledge` | Gera embeddings para busca semântica |
| `search-knowledge` | Busca RAG na knowledge base da MAC |
| `campaign-executor` | Executa disparos de campanha (chamado via pg_net trigger) |
| `get-campaign-audience` | Calcula audiência de campanha com filtros e deduplicação |
| `recompra-sender` | Dispara mensagens de ciclo de recompra |
| `sequence-scheduler` / `sequence-sender` | Agenda e envia sequências automáticas |
| `cancel-followup` | Cancela sequência de follow-up on stop-trigger |
| `leads-ingest` | Ingesta leads do gerador |
| `send-catalog` | Envia catálogo para contato |
| `chatwoot-proxy` | Proxy para API Chatwoot (deep link CRM↔WhatsApp) |
| `extract-account-ai` / `extract-contact-ai` | IA extrai dados de empresa/contato de conversa |
| `extract-deal-info` | IA extrai informações de oportunidade |
| `extract-faqs-from-file` | IA extrai FAQs de arquivo para knowledge base |
| `pdv-webhook` / `tiny-produtos` | Integração Tiny ERP (produtos, pedidos Olist) |

---

## Infraestrutura

- **Auth:** Clerk (PT-BR locale) → JWT repassado ao Supabase via token exchange
- **Banco:** Supabase Postgres · schema `public` (contatos, campanhas, financeiro) + schema `crmelo` (deals, pipelines, accounts)
- **Storage:** Supabase Storage (media de campanhas)
- **Deploy:** Vercel — branch main → produção automática
- **WhatsApp (oficial):** Meta Cloud API (credenciais em `integration_settings`)
- **WhatsApp (não-oficial):** Gateway/WPPConnect via webhook pg_net
- **ERP:** Tiny (credenciais pendentes — bloqueador B-1.5-A)

---

## Bloqueadores ativos no repo

| ID | Descrição | Responsável |
|----|-----------|-------------|
| B-1.5-A / B-1.6-A | Credenciais Olist/Tiny não fornecidas → integração catálogo (Story 1.6) bloqueada | Denis Maqlam fornecer |
| ~~B-1.4-A~~ | ✅ RESOLVIDO 21/05 — Token Chatwoot presente e endpoints validados (`integration_status.status=ok`, inbox 5 conectada na Maq Assistente) | DevOps |

---

## Chips WhatsApp (prospecção fria)

| Número | Status | Uso |
|--------|--------|-----|
| +55 11 9 2700-9804 | 🔥 Aquecendo (semana 04-08/05) | Prospecção fria (BDR) |
| +55 17 9 2004-2308 | 🔥 Aquecendo (semana 04-08/05) | Prospecção fria (BDR) |

---

## Comercial

| Data | Evento |
|------|--------|
| out/2025 | Primeiro contato (transcrição Drive) |
| nov/2025 | Apresentação + reunião Victor + Denis |
| 24/04/2026 | Checklist Review (82min) — redução para R$1.197/3 meses trial · Fathom `140986665` |
| ~08-09/05/2026 | Follow-up CS agendado — Victor conduz |

---

## Cashback pós-feira

- **Regras:** 5% sobre valor de venda · resgate exige compra 3× o cashback (ex: R$50 → R$150) · validade 30 dias
- **Vigência:** 04/05/2026 a 02/06/2026
- **Disparo:** 04/05 a partir das 12h
- **Tela de acompanhamento:** `https://elo.elitemaqlam.com.br/contacts` (filtro/relatório cashback)

---

## CRM — Pipelines

| Pipeline | Stages | Status |
|----------|--------|--------|
| Funil de Vendas | Leads (Entrada) → Qualificação → Proposta Enviada → Negociação → Fechado | ativo |
| Retenção de Clientes | Ativo → Atenção → Risco de Churn → Engajando → Recuperado → Churn Confirmado | criado 02/05 — popular na CS meeting 08-09/05 |

**Checkpoint anti-churn:** pipeline "Retenção de Clientes" criado via migration `add_retencao_churn_pipeline` em 02/05/2026. Pauta para Victor na CS meeting: mostrar o pipeline ao Denis e treinar equipe a mover clientes conforme atividade de recompra.

---

## Campanhas (personas de IA)

| Persona | Script | Uso |
|---------|--------|-----|
| Bumble (MAC1) | BDR captação fria | Prospecção automatizada por nicho/cidade |
| Maqlam | Foco no produto | Campanhas ativas para base de clientes |

---

## Pendências ativas

→ ver `memory/context/pendencias.md` (seção Maqlam)

**Crítico:** Risco API oficial Meta sem fallback — Victor + Hugo mapeiam plano B  
**Técnico (Hugo):** API Olist quebrada · botão Chatútil · refresh kanban · mensagens de erro exportador  

---

## Reuniões

| Data | Tipo | Fonte | Path |
|------|------|-------|------|
| out/2025 | Discovery inicial | Drive | `areas/reunioes/clientes/maqlam/_index.md` |
| nov/2025 | Apresentação | Drive | `areas/reunioes/clientes/maqlam/_index.md` |
| nov/2025 | Review Victor + Denis | Drive | `areas/reunioes/clientes/maqlam/_index.md` |
| 24/04/2026 | Checklist Review | Fathom `140986665` | `areas/reunioes/clientes/maqlam/2026-04-24-checklist-review.md` |

---

## Conteúdo (prova social)

8 cortes mapeados da call 24/04 — ver `areas/marketing/cortes-conteudo/2026-04-24-maqlam-checklist-review.md`

⚠️ Cortes 4 e 6 (Denis identificado) precisam de autorização antes de publicar.

---

## RAG Pipeline (agente Maq)

- **27/05/2026** — Waves 1–5 do RAG refactor aplicadas (baseado em arquitetura referencial ReabilitaCão):
  - `embedding_queue` + trigger de enfileiramento + `process-embeddings` deployada (v1 — nunca havia sido deployada, causava 404 nos crons)
  - HNSW índices Inner Product + `hybrid_search` refatorado (`websearch_to_tsquery`, `p_min_similarity 0.5`)
  - RPCs atômicas (`sync_knowledge_chunk`, `match_agent_documents`)
  - `search-knowledge` simplificada para retornar apenas `{results, mode}` (sem prompt)
  - 5 novos registros RAG inseridos (ids 146–150): fluxo geral, consumíveis, re-engajamento, alternativa econômica cortante, respostas rápidas
  - `agent_ids` atualizados em todos os 38 playbooks para incluir `767e8044-0856-4430-832f-8950b4c0da15`
- **Bloqueio ativo:** N8N não envia `agentId` na chamada search-knowledge → playbooks `private` (44 registros) invisíveis. Fix pendente em `86e1k160z`.

---

## Integração Chatwoot (painel)

- **21/05/2026** — Corrigida a integração Chatwoot na tela de Instâncias do painel. Dois fixes: (1) banco — row `integration_settings` estava com `organization_id` placeholder errado, escondida pela RLS → erro "Configuração não encontrada"; (2) frontend — status lia `status.enabled` mas a API uazapi retorna `chatwoot_enabled` → sempre "Desconectado". Agora exibe o nome da inbox conectada e reconecta na mesma inbox da instância. Commit `bb0bed3` no `origin/main` (deploy Vercel automático). Maq Assistente conectada na inbox 5.
- ⚠️ Auditar: outras tabelas multi-tenant podem ter `organization_id` placeholder `0000...0001` órfão (invisíveis via RLS).

---

*Atualizado: 2026-05-21*
