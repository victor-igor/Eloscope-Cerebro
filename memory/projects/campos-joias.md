# Campos Joias — Sistema AI Dashboard

> Status: 🔨 Em construção

## O que é
Dashboard AI para a joalheria Campos Joias, com agente de atendimento WhatsApp, campanhas, CRM de contatos e módulo RAG para base de conhecimento do bot.

## Contexto
- Cliente: Matheus Campos (sócio Eloscope + marido Dra. Morgana)
- Supabase project: `bshmmxcegwwppihlyyag`
- Repo: `/Users/victorigor/Campos-Joias`
- Artefatos do agente e campanhas: `cerebro/areas/vendas/clientes/campos-joias/`

## Responsáveis
- **Victor:** tech lead + implementação

## Tech Stack
- React + TypeScript + Vite
- Supabase (auth, DB, Edge Functions, Storage)
- WhatsApp via uazapi
- OpenAI (embeddings + LLM)

## Módulos implementados
- ✅ Dashboard (métricas)
- ✅ Campanhas (criação, logs, métricas)
- ✅ Contatos (CRM básico)
- ✅ Atendimentos encaminhados
- ✅ Follow-up automático
- 🔨 RAG / Base de Conhecimento (em planejamento)

## Timeline
| Data | Evento |
|------|--------|
| 07/05/2026 | Projeto documentado no cerebro |
| 07/05/2026 | Planejamento do módulo RAG iniciado |

## Decisões Tomadas
- [07/05/2026] **RAG — Opção A (implementação completa):** seguir spec do `RAG_MODULO_EXPORTACAO.md` integralmente — DB migrations + 4 Edge Functions + lib frontend + página `/base-conhecimento`
- [07/05/2026] **RAG — Caso de uso:** agente de atendimento WhatsApp consulta catálogo de joias, PDFs, FAQs e notas livres
- [07/05/2026] **RAG — UI:** nova página dedicada `/base-conhecimento` no dashboard admin

## Pendências
- [ ] Implementar módulo RAG (nova sessão): migrations → edge functions → lib frontend → UI `/base-conhecimento`
- [ ] Habilitar RLS nas tabelas `documents` e `n8n_chat_histories`

## Arquitetura RAG (planejada)
```
WhatsApp → n8n/bot → hybrid_search (Edge Function)
                          ↓
                   documents (pgvector + FTS)
                          ↑
                   process-knowledge-document
                   process-embeddings (worker)
                          ↑
                   /base-conhecimento (admin UI)
```

---
*Criado: 07/05/2026*
