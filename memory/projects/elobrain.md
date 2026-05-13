---
tipo: projeto
status: em-construcao
tags: [framework, produto, cerebro, claude-code]
data: 2026-05-13
---

# elobrain — Framework Segundo Cérebro

> Status: 🔨 Em construção — schema banco pronto, gbrain ainda não instalado localmente

## O que é

Framework instalável que dá superpoderes (hybrid search + embeddings + knowledge graph + MCP) para qualquer segundo cérebro de markdown. Fork público do [gbrain](https://github.com/garrytan/gbrain) em [github.com/victor-igor/elobrain](https://github.com/victor-igor/elobrain).

**Não é** parte do cerebro Eloscope — é **dependência** que o cerebro consome via MCP.

**Vai virar produto Eloscope**: cada cliente terá próprio cerebro privado + elobrain instalado + Supabase próprio. Vendido junto com setup Claude Code.

## Arquitetura

```
┌──────────────────────────────────┐
│ Cerebro (markdown vault privado) │  ← APLICAÇÃO (Eloscope-Cerebro ou cliente)
└──────────────────────────────────┘
              ↓ MCP
┌──────────────────────────────────┐
│ elobrain (framework, público)    │  ← ENGINE genérica
└──────────────────────────────────┘
              ↓ Postgres
┌──────────────────────────────────┐
│ Supabase schema `brain`          │  ← PERSISTÊNCIA por cliente
│ - pgvector (HNSW)                │
│ - hybrid search                  │
│ - knowledge graph                │
└──────────────────────────────────┘
```

## Responsáveis

- **Lucas:** integração com Cerebro Eloscope + skills (`/salve`, `/buscar-memoria`) + runbook
- **Victor:** fork upstream `victor-igor/elobrain` — manter sincronizado com `garrytan/gbrain`

## Stack técnica

- **Engine:** TypeScript + Bun (CLI `gbrain`)
- **MCP server:** 30+ ferramentas (`query`, `search`, `get_page`, `put_page`, `add_link`, `get_backlinks`, `traverse_graph`, `get_timeline`)
- **Banco:** Postgres + pgvector via Supabase (ou PGLite local)
- **Embeddings:** OpenAI `text-embedding-3-large` (1536-dim) — ~$0.13/1M tokens
- **Skills:** 34+ skills organizadas por `RESOLVER.md` (dispatcher)
- **Benchmark:** P@5 49.1%, R@5 97.9% (hybrid > vector-only puro)

## Timeline

| Data | Evento |
|------|--------|
| 13/05/2026 | Análise do fork + decisão arquitetural framework × aplicação |
| 13/05/2026 | Schema `brain` aplicado no Supabase Elosystem (3 migrations, 32 tabelas) |
| 13/05/2026 | `.env` configurado + validação end-to-end (FTS + vector search OK) |
| 13/05/2026 | Skills `/salve` e `/buscar-memoria` atualizadas com fallback defensivo |
| 13/05/2026 | `.claude/settings.json` ganhou MCP server `elobrain` |

## Decisões Tomadas

- [13/05/2026] Framework instalável, não embedded — permite update via git pull no fork sem afetar cerebros (decisões/2026-05)
- [13/05/2026] Schema `brain` dedicado no Supabase (isolamento total do `public`) — evita conflito com `public.tags` + replica padrão pra clientes
- [13/05/2026] Skills com fallback defensivo — `/salve` e `/buscar-memoria` funcionam com ou sem gbrain instalado
- [13/05/2026] MCP server registrado como `gbrain serve` — assume `gbrain` no PATH via `bun link`

## Pendências

- [ ] 🔥 Instalar `gbrain` localmente na máquina Lucas (clone + bun install + bun link)
- [ ] Criar `INSTALL_ELOBRAIN.md` runbook reaproveitável (vira parte do produto)
- [ ] Primeira indexação `gbrain sync --source cerebro`
- [ ] Reiniciar Claude Code para carregar MCP elobrain
- [ ] (Backlog) Empacotar produto "Cerebro Claude Code by Eloscope"

## Arquivos relacionados

- `.env` — DATABASE_URL com `search_path=brain,public`
- `.claude/settings.json` — MCP server `elobrain`
- `skills/salve/SKILL.md` — passo 6 com `gbrain sync`
- `skills/buscar-memoria/SKILL.md` — hybrid search via MCP, grep como fallback
- Supabase Elosystem (`jaygqiooeolzachevvfa`) schema `brain` — 32 tabelas

---

*Criado: 2026-05-13*
