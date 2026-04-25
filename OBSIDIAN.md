# Convenções Obsidian — Eloscope Cerebro

> Padrões para escrever markdown que aproveitam o vault Obsidian (graph, backlinks, tags, search, dataview/bases).
> **Aplicar em arquivos novos.** Retrofit de arquivos antigos é opcional — só quando o ganho justificar.

---

## 1. Frontmatter (properties)

Todo arquivo de **conteúdo operacional** (memory, projects, clientes, sessions, decisões) deve abrir com YAML frontmatter:

```yaml
---
tipo: cliente | projeto | sessao | decisao | pendencia | pessoa | doc
status: ativo | concluido | pausado | arquivado
tags: [cliente/bravo, vendas, discovery]
data: 2026-04-25
relacionados: ["[[framework-processo]]", "[[discovery-script]]"]
---
```

### Campos por tipo

| Tipo | Campos obrigatórios | Campos opcionais |
|------|---------------------|------------------|
| `cliente` | `tipo`, `status`, `tags` | `valor`, `responsavel`, `relacionados` |
| `projeto` | `tipo`, `status`, `tags`, `cliente` | `deadline`, `owner`, `valor` |
| `sessao` | `tipo: sessao`, `data`, `tags` | `participantes`, `relacionados` |
| `decisao` | `tipo: decisao`, `data`, `status`, `owner` | `contexto`, `relacionados` |
| `pendencia` | `tipo: pendencia`, `prioridade`, `owner` | `deadline`, `relacionados` |
| `pessoa` | `tipo: pessoa`, `tags` | `empresa`, `funcao`, `contato` |
| `doc` | `tipo: doc`, `tags` | `relacionados` |

> **Plugin Bases (já habilitado):** com frontmatter consistente, dá pra montar tabelas dinâmicas de "todos clientes ativos", "decisões do mês", etc. sem precisar de Dataview.

---

## 2. Wikilinks `[[arquivo]]` em vez de paths

**Sempre** que referenciar outro arquivo do vault:

```markdown
ruim:  ver `framework-processo.md` na pasta projeto/
bom:   ver [[framework-processo]] para o detalhamento
```

Vantagens: aparece no graph view, nos backlinks do arquivo destino, autocompleta no Obsidian, sobrevive a rename.

### Formatos
- `[[framework-processo]]` — link simples
- `[[framework-processo|matriz de processos]]` — alias custom no texto
- `[[framework-processo#3. Matriz de Processos da Bravo]]` — link pra heading
- `[[framework-processo#^bloco-id]]` — link pra block reference (use `^id` ao final do parágrafo)

> **Regra:** se o arquivo destino existe no vault, usa wikilink. Se é externo (URL, arquivo fora do vault), markdown link normal `[texto](url)`.

---

## 3. Tags

Usar **tags hierárquicas** com `/`:

```
#cliente/bravo
#cliente/enertelles
#cliente/voltruck
#area/vendas
#area/marketing
#tipo/discovery
#tipo/proposta
#status/ativo
#status/concluido
```

### Onde usar
- **No frontmatter** (preferido): `tags: [cliente/bravo, area/vendas]`
- **Inline no texto** (eventual): `Falamos com #cliente/bravo sobre tráfego.`

> Inline é útil em sessões/notas onde o contexto muda parágrafo a parágrafo. Em arquivos temáticos, usa frontmatter.

---

## 4. Callouts (Obsidian-flavor)

Usar pra destacar avisos/regras/insights. Sintaxe:

```markdown
> [!note] Observação
> Conteúdo neutro de contexto.

> [!warning] Atenção
> Algo que pode dar errado.

> [!danger] Crítico
> Não fazer.

> [!tip] Dica
> Atalho ou prática útil.

> [!info] Informação
> Dado factual relevante.

> [!quote] Citação
> Fala de cliente, transcript de reunião.

> [!todo] Pendência
> Ação a executar.

> [!success] Concluído
> Marco atingido.
```

Suporta `+` (expandido por padrão) e `-` (colapsado):
```markdown
> [!warning]- Detalhes opcionais
> Conteúdo colapsado por padrão.
```

---

## 5. Block references `^id`

Marcar parágrafos para linkar diretamente:

```markdown
Decidimos hora avulsa em R$180/h. ^decisao-hora-180

Em outro arquivo: ver [[decisoes/2026-04#^decisao-hora-180]]
```

Útil para citar decisões específicas em propostas, sessions, etc.

---

## 6. Estrutura de pastas e MOC (Map of Content)

Cada pasta importante ganha um **`_index.md`** ou **`MOC-{tema}.md`** que serve de hub:

```markdown
---
tipo: moc
tags: [moc, area/vendas]
---

# MOC — Vendas

## Clientes ativos
- [[bravo]] — gestão de conteúdo
- [[enertelles]] — automação comercial
- [[voltruck]] — projeto técnico

## Templates
- [[template-proposta]]
- [[template-discovery]]
```

Já existem: `memory/projects/_index.md`, `agentes/_registry.md`. Mantém o padrão.

---

## 7. Sessions e daily notes

Arquivos em `memory/sessions/YYYY-MM-DD.md` funcionam como daily notes. Frontmatter padrão:

```yaml
---
tipo: sessao
data: 2026-04-25
tags: [sessao]
participantes: [Lucas, Victor]
projetos: ["[[enertelles]]", "[[bravo]]"]
---
```

---

## 8. Checklist para arquivos novos

- [ ] Tem frontmatter com `tipo`, `status` (se aplicável), `tags`
- [ ] Referências a outros arquivos do vault são `[[wikilinks]]`, não paths
- [ ] Avisos/regras/destaques usam callouts `> [!type]`
- [ ] Headings em hierarquia limpa (# H1 único, ## H2 para seções)
- [ ] Tags hierárquicas (`#cliente/bravo`, não `#bravo`)
- [ ] Decisões importantes marcadas com `^block-id` para referência

---

## 9. O que NÃO fazer

> [!danger] Antipadrões
> - **Não duplicar conteúdo.** Se a info já está em outro arquivo, linka — não copia.
> - **Não usar paths absolutos** (`/Users/.../arquivo.md`) — quebra em outras máquinas. Usa wikilinks ou `$SECOND_BRAIN_PATH`.
> - **Não criar tags planas** quando hierarquia faz sentido (`#vendas-bravo` ❌ → `#area/vendas` + `#cliente/bravo` ✅).
> - **Não escrever frontmatter inconsistente.** Mantém o mesmo schema por tipo.

---

*Criado: 2026-04-25 — base para retrofit gradual e arquivos novos.*
