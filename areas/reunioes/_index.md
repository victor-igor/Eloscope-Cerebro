---
tipo: indice
area: reunioes
tags: [indice, reunioes]
---

# 📋 Reuniões — Índice

> Captura, transcrição e análise de todas as reuniões da Eloscope.
> Skill: `/reuniao` — gerencia ingestão e propagação.
> Manifest: `_processadas.json` — cache para evitar refetch.

---

## Estrutura

| Pasta | Tipo | Quando usar |
|-------|------|-------------|
| [[dailies]] | Daily interna | Stand-up diário do time |
| [[semanais]] | Reunião semanal | Planejamento/retrospectiva semanal |
| [[internas]] | Alinhamento interno | Sócios, decisões estratégicas, sprints |
| [[vendas]] | Comercial | Discovery, follow-up, fechamento (por cliente) |
| [[onboarding]] | Onboarding cliente | Kick-off pós-fechamento (por cliente) |
| [[clientes]] | Recorrente cliente | Status mensal, ajustes, suporte (por cliente) |

---

## Convenção de nomes

```
YYYY-MM-DD-tema-curto.md
```

Exemplos:
- `dailies/2026-04-27-status-bravo.md`
- `vendas/enertelles/2026-04-25-follow-up-alex.md`
- `onboarding/bravo/2026-04-26-kickoff.md`

---

## Frontmatter padrão

```yaml
---
tipo: reuniao
subtipo: daily | semanal | interna | venda | onboarding | cliente
data: YYYY-MM-DD
duracao_min: 0
participantes: [Lucas, Victor, Hugo]
cliente: nome-cliente   # quando aplicável
fonte: fathom | fireflies | manual
fonte_id: ID            # call_id Fathom, transcript_id Fireflies
fonte_url: https://...
tags: [reuniao, cliente/nome, tipo/x]
status: processada | rascunho
---
```

---

## Fluxo da skill `/reuniao`

1. Receber URL/ID/comando
2. Checar `_processadas.json` → se existe, abrir arquivo
3. Buscar via MCP (Fathom/Fireflies)
4. Classificar tipo + cliente
5. Gerar arquivo com resumo + decisões + actions + transcrição
6. Sugerir cortes → salvar em `areas/marketing/cortes-conteudo/` com link de origem
7. Confirmar criação de tasks no ClickUp
8. Atualizar manifest + commit

---

*Atualizado: 27/04/2026*
