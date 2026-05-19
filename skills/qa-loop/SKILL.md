# QA Loop — Ciclo Iterativo de Qualidade

Ciclo automatizado de revisão e correção entre @qa e @dev quando uma story falha no gate de qualidade.

## Quando usar

- QA gate retornou FAIL
- Usuário diz "entra no qa loop", "itera com qa e dev"
- Depois da Fase 4a do SDC com resultado FAIL

## Configuração

- **Máximo de iterações:** 5
- **Escalação:** Se não resolver em 5 iterações → escala para @architect
- **Vereditos possíveis:** APPROVE, REJECT, BLOCKED

---

## Fluxo do Loop

### Iteração inicial

```
Estado: story implementada, qa retornou FAIL com lista de issues
```

**Loop (repete até APPROVE ou máximo 5 iterações):**

---

### Step A — Dev Fix (Agent: dev)

```
Use the Agent tool with subagent_type="dev" to fix the QA issues.
Brief the dev agent with:
  - The QA feedback (list of issues with severity: 🔴 CRÍTICO / 🟡 IMPORTANTE / 🟢 SUGESTÃO)
  - Focus on 🔴 first, then 🟡 if time allows, ignore 🟢
  - The story file path
  - Iteration number (e.g., "QA Loop iteration 2 of 5")
The dev agent will fix the issues and commit.
Report: what was fixed, what was skipped and why.
```

---

### Step B — QA Re-review (Agent: qa)

```
Use the Agent tool with subagent_type="qa" to re-review.
Brief the qa agent with:
  - The original QA feedback
  - What dev fixed in this iteration
  - The git diff of changes since last QA
  - Iteration number
The qa agent will re-run the gate focusing on the fixed items.
Report: new verdict (APPROVE/REJECT/BLOCKED) + remaining issues.
```

**Se APPROVE:** Loop termina. Avance para devops (push/PR).  
**Se REJECT:** Repita com próxima iteração.  
**Se BLOCKED:** Escale imediatamente (veja Escalação).

---

### Escalação (após 5 iterações ou BLOCKED)

```
Use the Agent tool with subagent_type="architect" to analyze the blocker.
Brief the architect agent with:
  - História completa do loop (todas as iterações)
  - Issue específico que não está resolvendo
  - Git diff completo
The architect will propose: refactor, arquitetura alternativa, ou waive justificado.
```

Após decisão do architect: reinicia loop com nova abordagem OU documenta waive na story.

---

## Tracking do loop

Mantenha um contador de iterações na conversa. A cada iteração mostre:

```
QA Loop — Iteração {N}/5
Status: {REJECT/em progresso}
Issues pendentes: {lista}
Issues resolvidos: {lista}
```

## Ao final

Reporte ao usuário:
- Total de iterações
- Issues resolvidos vs. waivers
- Próximo passo: push/PR via @devops
