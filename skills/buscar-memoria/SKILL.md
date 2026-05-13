---
name: buscar-memoria
description: >
  Busca híbrida no segundo cérebro (vector + FTS + grafo) via elobrain MCP.
  Pergunta em linguagem natural retorna trechos relevantes com citações.
  Fallback para grep se o MCP não estiver disponível.
  Triggers: "buscar memoria", "/buscar-memoria", "lembra", "procura no cerebro",
  "o que decidi sobre", "quando falamos de".
---

# /buscar-memoria

Consulta semântica no segundo cérebro usando hybrid search (dense vector + BM25 + knowledge graph).

---

## Quando usar

- "O que decidimos sobre hora avulsa?"
- "Quando falamos da Bravo pela última vez?"
- "Lembra o que o Victor disse sobre exclusividade?"
- "Tudo que tenho sobre cliente Voltrucks"
- "Decisões de abril sobre pricing"

---

## Como funciona

A skill detecta o backend disponível e roteia automaticamente:

```
1. MCP elobrain disponível?
   SIM → hybrid search via gbrain query (recomendado)
   NÃO → fallback grep estruturado (modo legado)
```

### Backend primário: elobrain MCP

Quando o MCP server `elobrain` está conectado, usar as ferramentas:

| Tool MCP | Quando usar |
|---|---|
| `query` | Pergunta em linguagem natural ("o que decidimos sobre X") — busca semântica + síntese com citações |
| `search` | Termo específico/nome próprio ("Bravo Agency", "Hugo") — match exato BM25 |
| `get_page` | Já sabe o slug exato — recupera a page completa |
| `get_backlinks` | "O que cita esta decisão?" — grafo reverso |
| `traverse_graph` | "Quem trabalha com Denis?" — caminho no grafo |
| `get_timeline` | "Linha do tempo de Maqlam" — eventos cronológicos |

**Source padrão:** `cerebro` (configurado em `GBRAIN_SOURCE`)

### Algoritmo de roteamento

```
parse(query) → {tipo_intent, termos, filtros}

se tipo_intent == "lookup_específico" (nome próprio, slug):
    → search (BM25)
    
se tipo_intent == "pergunta_conceitual" ("como", "por que", "o que"):
    → query (hybrid + synthesis)
    
se tipo_intent == "relacional" ("quem trabalha com", "o que cita"):
    → traverse_graph ou get_backlinks
    
se tipo_intent == "temporal" ("quando", "histórico"):
    → get_timeline ou query com filtro de data
```

---

## Output (modo elobrain)

```markdown
## Resposta

[Síntese em 2-4 linhas baseada nos chunks recuperados]

## Fontes

1. **[memory/context/decisoes/2026-04#hora-avulsa-180h]** (score: 0.94)
   > "Definida hora avulsa R$180/h, pacote mensal inclui 5h..."
   _decisao | 2026-04-18 | tags: #pricing #politica_

2. **[memory/sessions/2026-04-25]** (score: 0.81)
   > "...validar política de hora avulsa com Victor antes de comunicar ao Bravo..."
   _sessao | 2026-04-25_

## Conexões (grafo)

- [[decisoes/2026-04]] → cita → [[areas/vendas/playbook]]
- [[sessions/2026-04-25]] → mencionou → [[people#victor-igor]]

## Sugestões

- Refinar: `/buscar-memoria "hora avulsa" --tipo=decisao`
- Ver MOC: `memory/projects/_index`
```

---

## Fallback grep (modo legado)

Se o MCP `elobrain` não estiver disponível, cai no modo grep estruturado.

### Argumentos

```
/buscar-memoria <query> [--tipo=X] [--tag=Y] [--cliente=Z] [--desde=YYYY-MM-DD]
```

### Algoritmo grep

```bash
# Camada 1: frontmatter (mais relevante)
grep -rl --include="*.md" -E "^tipo: $TIPO|^tags:.*$TAG" "$SECOND_BRAIN_PATH/memory/" "$SECOND_BRAIN_PATH/areas/"

# Camada 2: headings
grep -rn --include="*.md" -E "^#+ .*$QUERY" "$SECOND_BRAIN_PATH/"

# Camada 3: corpo do texto
grep -rni --include="*.md" -B 1 -A 2 "$QUERY" "$SECOND_BRAIN_PATH/"
```

### Ranking grep

| Sinal | Peso |
|-------|------|
| Match em frontmatter (tipo/tag) | 10 |
| Match em H1/H2 | 5 |
| Match em H3+ | 3 |
| Match em corpo (negrito/código) | 2 |
| Match em corpo (texto comum) | 1 |
| Arquivo modificado <7 dias | ×1.5 |
| Arquivo em `memory/sessions/` | ×1.3 |
| Arquivo em `memory/context/decisoes/` | ×1.4 |

### Filtros suportados

| Flag | Exemplo | Comportamento |
|------|---------|---------------|
| `--tipo=` | `--tipo=decisao` | Frontmatter `tipo: decisao` |
| `--tag=` | `--tag=cliente/bravo` | Frontmatter `tags:` ou inline `#cliente/bravo` |
| `--cliente=` | `--cliente=bravo` | Atalho para `--tag=cliente/bravo` |
| `--desde=` | `--desde=2026-04-01` | Data no nome do arquivo ou frontmatter `data:` |
| `--ate=` | `--ate=2026-04-30` | Limite superior |
| `--pasta=` | `--pasta=memory` | Restringe à subpasta |

---

## Como saber qual backend está ativo

No início da execução, indicar discretamente:

```
🧠 buscar-memoria (backend: elobrain)
```
ou
```
🧠 buscar-memoria (backend: grep — elobrain MCP indisponível)
```

---

## Pastas no escopo

| Prioridade | Pasta | Quando |
|---|---|---|
| 1 | `memory/context/decisoes/` | Decisões formais |
| 2 | `memory/context/pendencias.md`, `deadlines.md`, `people.md`, `business-context.md` | Estado operacional |
| 3 | `memory/projects/` | Projetos individuais |
| 4 | `memory/sessions/` | Sessões diárias |
| 5 | `areas/` | Áreas operacionais (vendas, marketing, etc.) |
| 6 | `empresa/` | Brandbook, posicionamento |
| 7 | `agentes/`, `squads/` | Só se query mencionar agente/squad |

> **Excluir sempre:** `.aiox-core/`, `.obsidian/`, `node_modules/`, `lasted-entregas/`

---

## Modo "deep search"

Se a busca padrão retorna <3 resultados relevantes (score < 0.5), escalar:

**No elobrain:**
1. Multi-query expansion (gerar 3 reformulações via LLM)
2. Aumentar `detail=high` (recupera compiled_truth completo)
3. Buscar em sources federadas (todas, não só `cerebro`)
4. Seguir wikilinks dos top-3 resultados (`traverse_graph --depth=1`)

**No grep:**
1. Sinônimos PT/EN ("preço" ↔ "pricing" ↔ "valor")
2. Expandir para arquivos linkados via wikilinks dos top resultados (1 hop)
3. Sugerir queries alternativas baseadas em tags próximas

---

## Output: regras gerais

- **Sempre** usar wikilinks `[[arquivo#heading]]` nos resultados — clicável no Obsidian
- **Sempre** mostrar o `tipo` e `data` extraídos do frontmatter
- **Snippet** de 1-2 linhas com contexto (linhas adjacentes ao match)
- **Citações no modo elobrain:** toda afirmação tem que rastrear ao slug fonte
- Se nenhum resultado: sugerir refinamentos, **nunca inventar conteúdo**
- Em PT-BR, tom direto, sem preâmbulo

---

## Integração com /cerebro e /salve

- `/cerebro` carrega contexto base. `/buscar-memoria` é para perguntas específicas que não estão no briefing.
- `/salve` roda `gbrain sync --source cerebro` no final → mantém embeddings atualizados → próxima busca encontra o que foi salvo na sessão.
- Decisão recorrentemente buscada via `/buscar-memoria` é candidata a entrar permanentemente em `business-context.md`.

---

## Implementação prática

> [!tip] Custo de embeddings
> `text-embedding-3-large` custa **$0.13 / 1M tokens**. O vault inteiro (~200 .md, ~150k tokens) custa ~$0.02 na primeira indexação. Sync incremental do `/salve` custa centavos por sessão.

### Quando o backend muda

Se você tinha `/buscar-memoria` rodando em grep e agora o elobrain MCP foi conectado:
- Próxima invocação detecta o MCP e usa hybrid search automaticamente
- Não precisa de migração — os mesmos arquivos `.md` viraram embeddings via `gbrain sync`
- Pode comparar resultados rodando a mesma query: `query` (elobrain) vs `grep` (legado)

---

*Atualizado: 2026-05-13 — integração elobrain MCP (hybrid search Supabase pgvector) com fallback grep.*
