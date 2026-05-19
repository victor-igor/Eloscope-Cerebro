# SDC — Story Development Cycle

Orquestra o ciclo completo de desenvolvimento de uma story usando os agentes nativos do Claude Code.

## Quando usar

- Usuário diz "desenvolve a story X", "implementa o epic Y", "cria e implementa feature Z"
- Precisa do fluxo completo: criar → validar → implementar → revisar → publicar

## Fluxo SDC

O SDC tem 4 fases sequenciais. Execute fase a fase, aguardando resultado antes de avançar.

---

### Fase 1 — Create (Agent: sm)

Invoque o agente `sm` (River) para criar a story:

```
Use the Agent tool with subagent_type="sm" to create the story.
Brief the sm agent with: the epic context, the PRD location if exists, and what feature/story needs to be created.
The sm agent will produce a story file at docs/stories/{epicNum}.{storyNum}.story.md with status Draft.
Report back the story file path when done.
```

**Output esperado:** arquivo `docs/stories/*.story.md` com status `Draft`

---

### Fase 2 — Validate (Agent: po)

Invoque o agente `po` (Pax) para validar a story criada:

```
Use the Agent tool with subagent_type="po" to validate the story.
Brief the po agent with: the story file path from Phase 1.
The po agent will run the 10-point checklist and return GO or NO-GO.
If NO-GO: return to sm with the correction list and repeat Phase 1.
If GO: the story status is updated to Ready. Proceed to Phase 3.
```

**Output esperado:** veredito GO/NO-GO. Em GO, story com status `Ready`.

---

### Fase 3 — Implement (Agent: dev)

Invoque o agente `dev` (Dex) para implementar:

```
Use the Agent tool with subagent_type="dev" to implement the story.
Brief the dev agent with: the story file path, the implementation mode (interactive/yolo/preflight — ask user if not specified, default: interactive).
The dev agent will implement all tasks, mark checkboxes, commit changes locally.
When done, report: files changed, commit hash, any blockers.
```

**Output esperado:** código implementado, commits locais, story com todas as tasks marcadas.

---

### Fase 4a — QA Gate (Agent: qa)

Invoque o agente `qa` (Quinn) para revisão:

```
Use the Agent tool with subagent_type="qa" to review the implementation.
Brief the qa agent with: the story file path, the git diff or list of changed files.
The qa agent will run the 7-point quality gate and return PASS/CONCERNS/FAIL.
Report the verdict and feedback to the user.
```

**Se FAIL:** Inicie QA Loop (veja skill `/qa-loop`).  
**Se PASS ou CONCERNS:** Avance para Fase 4b.

---

### Fase 4b — Push & PR (Agent: devops)

Invoque o agente `devops` (Gage) para publicar:

```
Use the Agent tool with subagent_type="devops" to push and create PR.
Brief the devops agent with: branch name, story summary for PR title, list of changes for PR body.
The devops agent will: run quality gates, push to remote, create PR via gh pr create.
Report back the PR URL.
```

**Output esperado:** PR criado, URL reportada ao usuário.

---

## Execução

Ao receber o comando SDC:

1. Pergunte ao usuário (se não especificado):
   - Qual epic/feature/story criar?
   - Modo de implementação: interactive (padrão), yolo ou preflight?
   - Branch alvo para o PR?

2. Execute as fases 1→2→3→4a→4b em sequência

3. Ao final reporte:
   - Story criada: `{path}`
   - Implementação: `{commit hash}`
   - QA: `{veredito}`
   - PR: `{URL}`

## Abreviações suportadas

- `/sdc` sem args → pergunta o que implementar
- `/sdc "nome da feature"` → inicia com a feature especificada
- `/sdc "feature" yolo` → modo yolo
