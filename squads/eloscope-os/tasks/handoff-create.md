---
task: Create Handoff Artifact
responsavel: any-agent
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - from_agent: agent origem
  - to_agent: agent destino
  - date: YYYY-MM-DD (default: hoje)
  - project: slug do projeto
  - payload_type: tipo do artefato (discovery-report | adr | qa-report | proposal-brief | ...)
  - payload_path: caminho do artefato principal
  - context: contexto em 3-5 linhas
  - acceptance_criteria: lista de critérios mensuráveis
Saida: |
  - handoff_file: path para handoff-{from}-{to}-{date}.md salvo em projects/{project}/handoffs/
Checklist:
  - "[ ] Carregar templates/handoff-template.md"
  - "[ ] Preencher frontmatter com from/to/date/project/payload_type"
  - "[ ] Adicionar contexto, payload, critérios, prazo, dependências"
  - "[ ] Validar: arquivo referenciado em payload_path existe?"
  - "[ ] Salvar em projects/{project}/handoffs/handoff-{from}-{to}-{date}.md"
  - "[ ] Invariante: nunca usar conversa livre — sempre este artefato"
---

# handoff-create

Cria o artefato estruturado que formaliza a transição entre dois agents. Invariante #1 da Eloscope: **nenhum handoff é conversa livre — sempre artefato**.

## Uso

```
@{any-agent}
*task handoff-create \
  --from orion \
  --to andromeda \
  --project cliente-xyz \
  --payload-type discovery-report \
  --payload-path projects/cliente-xyz/discovery/cliente-xyz-discovery.md
```

## Output esperado

```
projects/cliente-xyz/handoffs/handoff-orion-andromeda-2026-04-20.md
```
