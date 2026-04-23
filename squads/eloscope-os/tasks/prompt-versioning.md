---
task: Prompt Engineering + Versioning
responsavel: logos
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - prompt_draft: texto do prompt proposto
  - agent_role: papel do agent que usará o prompt
  - eval_cases: casos de teste (input → expected output)
  - previous_version: path do prompt anterior (se mudança)
Saida: |
  - prompt_file: prompts/{agent-id}.v{X}.md
  - eval_report: eval/reports/{agent-id}-v{X}.md
  - diff_from_previous: diff semântico das mudanças
  - decision: [promover | revisar | descartar]
Checklist:
  - "[ ] Aplicar técnicas: XML structuring, few-shot, CoT, role, prefill, escape hatches"
  - "[ ] Validar tamanho — prompt eficiente, não prolixo"
  - "[ ] Rodar eval_cases via Minos"
  - "[ ] Comparar com previous_version (se houver) — regressão detectada?"
  - "[ ] Versionar em prompts/ com bump"
  - "[ ] Documentar o PORQUÊ da mudança no header do arquivo"
  - "[ ] Criar handoff → Minos se for promover pra prod"
---

# prompt-versioning

Prompt é código. Código é versionado. Mudança sem eval = regressão esperando acontecer.

## Estrutura do prompt versionado

```markdown
---
agent: {agent-id}
version: 1.2.0
date: {YYYY-MM-DD}
author: logos
changed_from: 1.1.0
change_rationale: "Reduziu hallucination em casos de dor LGPD"
---

# System Prompt — {Agent}

<role>...</role>

<context>...</context>

<instructions>...</instructions>

<examples>
<example>
  <input>...</input>
  <output>...</output>
</example>
</examples>

<output_format>...</output_format>
```

## Técnicas canônicas (Anthropic)
- XML structuring — tags claras em vez de parágrafos soltos
- Few-shot — 2-4 exemplos diversos
- CoT — "pense passo a passo antes de responder"
- Escape hatches — "se não tiver certeza, pergunte em vez de inventar"
