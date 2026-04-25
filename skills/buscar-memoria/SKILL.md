---
name: buscar-memoria
description: >
  Busca semântica no segundo cérebro — pesquisa por palavra-chave, tag, tipo,
  cliente, ou período em todo o vault (memory, areas, empresa, sessions).
  Retorna resultados rankeados com contexto e wikilinks.
  Triggers: "buscar memoria", "/buscar-memoria", "lembra", "procura no cerebro",
  "o que decidi sobre", "quando falamos de".
---

# /buscar-memoria

Consulta estruturada no segundo cérebro sem ter que abrir arquivo por arquivo.

---

## Quando usar

- "O que decidimos sobre hora avulsa?"
- "Quando falamos da Bravo pela última vez?"
- "Lembra o que o Victor disse sobre exclusividade?"
- "Tudo que tenho sobre cliente Voltruck"
- "Decisões de abril sobre pricing"

---

## Argumentos

```
/buscar-memoria <query> [--tipo=X] [--tag=Y] [--cliente=Z] [--desde=YYYY-MM-DD]
```

Argumentos opcionais filtram o escopo. Sem filtro, busca em todo o vault.

---

## Algoritmo

### 1. Normalizar query
- Extrair termos-chave (remover stopwords PT-BR: "o", "que", "sobre", "lembra")
- Identificar entidades: clientes, datas, projetos
- Detectar filtros implícitos ("decisão" → tipo=decisao; "Bravo" → cliente=bravo)

### 2. Busca em camadas (por prioridade)

```bash
# Camada 1: frontmatter (mais relevante)
grep -rl --include="*.md" -E "^tipo: $TIPO|^tags:.*$TAG" "$SECOND_BRAIN_PATH/memory/" "$SECOND_BRAIN_PATH/areas/"

# Camada 2: headings (segunda mais relevante)
grep -rn --include="*.md" -E "^#+ .*$QUERY" "$SECOND_BRAIN_PATH/"

# Camada 3: corpo do texto (fallback)
grep -rn --include="*.md" -i "$QUERY" "$SECOND_BRAIN_PATH/"
```

### 3. Ranking
Score = peso por camada × recência × match exato:

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

### 4. Saída

Retornar **no máximo 8 resultados** no formato:

```markdown
## Top resultados

### 1. [[decisoes/2026-04#hora-avulsa-180h]] — score 14
**Tipo:** decisao | **Data:** 2026-04-18 | **Tags:** #pricing #politica
> "Definida hora avulsa R$180/h, pacote mensal inclui 5h..."

### 2. [[sessions/2026-04-25]] — score 11
**Tipo:** sessao | **Data:** 2026-04-25
> Trecho de contexto: "...validar política de hora avulsa com..."

[...]

## Sugestões
- Refinar com `/buscar-memoria <query> --tipo=decisao`
- Ver MOC: [[memory/projects/_index]]
```

---

## Pastas no escopo (em ordem de prioridade)

1. `memory/context/decisoes/` — decisões formais
2. `memory/context/pendencias.md`, `deadlines.md`, `people.md`, `business-context.md`
3. `memory/projects/` — projetos
4. `memory/sessions/` — sessões diárias
5. `areas/` — áreas operacionais (vendas, marketing, etc.)
6. `empresa/` — brandbook, posicionamento
7. `agentes/`, `squads/` — só se query mencionar agente/squad

> **Excluir:** `.aiox-core/`, `.obsidian/`, `node_modules/`, `lasted-entregas/`

---

## Filtros suportados

| Flag | Exemplo | Comportamento |
|------|---------|---------------|
| `--tipo=` | `--tipo=decisao` | Frontmatter `tipo: decisao` |
| `--tag=` | `--tag=cliente/bravo` | Frontmatter `tags:` ou inline `#cliente/bravo` |
| `--cliente=` | `--cliente=bravo` | Atalho para `--tag=cliente/bravo` |
| `--desde=` | `--desde=2026-04-01` | Data no nome do arquivo (`YYYY-MM-DD.md`) ou frontmatter `data:` |
| `--ate=` | `--ate=2026-04-30` | Idem, limite superior |
| `--pasta=` | `--pasta=memory` | Restringe à subpasta |

---

## Implementação prática

> [!tip] Sem stack nova
> Não precisa de SQLite, vector DB, ou Python. `grep -rn` + ranking em memória resolve. O vault inteiro tem <500 arquivos markdown — busca completa em <500ms.

### Comandos base

```bash
# Por tipo (frontmatter)
grep -rln --include="*.md" "^tipo: decisao" "$SECOND_BRAIN_PATH/memory/"

# Por tag (frontmatter ou inline)
grep -rln --include="*.md" -E "^tags:.*cliente/bravo|#cliente/bravo" "$SECOND_BRAIN_PATH/"

# Por query no corpo (case-insensitive, com contexto)
grep -rni --include="*.md" -B 1 -A 2 "hora avulsa" "$SECOND_BRAIN_PATH/memory/" "$SECOND_BRAIN_PATH/areas/"

# Por período (sessions)
ls "$SECOND_BRAIN_PATH/memory/sessions/" | awk '$0 >= "2026-04-01" && $0 <= "2026-04-30"'
```

### Pseudocódigo

```
1. parse(query) → {termos, filtros}
2. arquivos_candidatos = aplica_filtros(vault)
3. para cada arquivo:
     score = 0
     se match_frontmatter: score += 10
     se match_heading: score += 5 ou 3
     se match_corpo: score += 2 ou 1
     score *= multiplicador_recencia(arquivo)
     score *= multiplicador_pasta(arquivo)
4. retornar top 8 com snippets
```

---

## Modo "deep search"

Se a busca padrão retorna <3 resultados, escalar:

1. Buscar **sinônimos** em PT/EN ("preço" ↔ "pricing" ↔ "valor")
2. Expandir para arquivos linkados via wikilinks dos top resultados (1 hop)
3. Sugerir queries alternativas baseadas em tags próximas

---

## Output: regras

- **Sempre** usar wikilinks `[[arquivo#heading]]` nos resultados — clicável no Obsidian
- **Sempre** mostrar o `tipo` e `data` extraídos do frontmatter
- **Snippet** de 1-2 linhas com contexto (linhas adjacentes ao match)
- Se nenhum resultado: sugerir refinamentos, não inventar conteúdo
- Em PT-BR, tom direto, sem preâmbulo

---

## Integração com /cerebro e /salve

- `/cerebro` carrega contexto base (pendências, deadlines, decisões recentes). `/buscar-memoria` é para perguntas específicas que não estão no briefing.
- Se `/buscar-memoria` retorna decisão recorrente buscada, **considerar adicionar ao `business-context.md`** — sinal de que virou contexto-base.
- `/salve` deve registrar buscas frequentes em log futuro de "queries comuns" → vira candidato a entrada permanente no cache.

---

*Criado: 2026-04-25 — alternativa leve ao claude-mem, alinhada com arquitetura git-based + Obsidian do cerebro.*
