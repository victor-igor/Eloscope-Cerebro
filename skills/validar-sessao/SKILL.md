---
name: validar-sessao
description: Valida o trabalho da sessão contra ClickUp — compara projetos, usuário, tarefas, subtarefas e prazos. Marca tasks completas como done, atualiza parciais com comentário, cria as que faltam, identifica e remove duplicatas. Roda antes do /salve para garantir que o ClickUp reflita o que foi feito de verdade. Triggers — "valida sessão", "valida clickup", "/validar-sessao", "/valida".
---

# /validar-sessao

Valida o trabalho da sessão atual contra o ClickUp. Garante que tarefas concluídas sejam marcadas como done, parciais sejam atualizadas, novas sejam criadas e duplicatas sejam removidas — antes de fechar a sessão com `/salve`.

**Pré-requisito:** MCP do ClickUp ativo (`mcp__claude_ai_ClickUp__*`).

---

## Por que existe

Sem essa skill, todo membro tem que lembrar manualmente de:
- Marcar tasks como done depois de fazer
- Criar tasks pro que foi feito sem registro
- Evitar duplicatas (problema já observado: criar macro-task quando já existem subtarefas detalhadas)
- Bumpar prazos de tasks vencidas

Resultado: ClickUp fica desatualizado, weekly precisa de cleanup manual, tasks duplicadas poluem listas.

A skill faz isso automaticamente em batch, com aprovação do usuário antes de executar.

---

## Quando rodar

- **Antes do `/salve`** — para que os IDs das tasks já fiquem registrados na sessão
- **Durante o dia** — para validar progresso intermediário sem fechar a sessão
- **Após uma execução longa** — quando completou um bloco grande de trabalho

Não rodar:
- Sessões puramente exploratórias (sem ação concreta)
- Quando ClickUp MCP está fora do ar

---

## Passo 1 — Identificar usuário

Mapear quem está operando para o ClickUp user correto. Funciona para **qualquer membro do time**.

```bash
echo $ELOBRAIN_USER   # victor / lucas / hugo / ...
```

Carregar o `clickup_id` do membro em `memory/context/people.md`:

1. Buscar entrada onde `slug == $ELOBRAIN_USER`
2. Ler campo `clickup_id` (ou variantes: `clickup_user_id`, `clickup`)
3. Se houver **múltiplos IDs** registrados para o mesmo membro (caso de conta duplicada): usar o marcado como `primary: true`, ou perguntar qual usar
4. Se o campo não existir: pedir ao usuário e oferecer salvar em `people.md` para sessões futuras

**Regra:** todo membro do time tem que estar em `people.md` com `clickup_id`. Se faltar, a skill bloqueia e pede para preencher antes — não chuta usuário.

---

## Passo 2 — Revisar a sessão

Revisar mentalmente TUDO que aconteceu na conversa atual e extrair as **ações concretas** — não pensamentos, não dúvidas, só o que foi efetivamente executado.

Agrupar por dimensão:

| Dimensão | O que coletar |
|---|---|
| **Projeto / Cliente** | A qual cliente, projeto ou frente cada ação pertence (ex: Campos Joias, Maqlam, ReabilitaCão, Eloscope interno) |
| **Tipo de ação** | Ajuste, criação, reorganização, decisão, entrega, fix |
| **Owner** | Quem fez (default: $ELOBRAIN_USER) |
| **Prazo** | Se a ação tem deadline mencionado ou se conclui task vencida |

**Exemplo extraído:**
```
- [Campos Joias] Ajuste no system prompt BDR (FAQ gate + placeholder rule)
- [Campos Joias] Reorganização cerebro: clientes/campos-joias/agente/bdr/
- [Maqlam] Regeneração do playbook HTML + PDF
- [Maqlam] Ajuste prompt SDR (chat_ia_memory logic)
- [Maqlam] Reorganização cerebro: elite-maqlam/agente/sdr/
```

---

## Passo 3 — Buscar no ClickUp

Para cada ação extraída, buscar no ClickUp usando:

```
mcp__claude_ai_ClickUp__clickup_search
  query: "<nome da ação ou cliente>"
  assignee: <ClickUp user ID>
  status: any
```

Buscar também:
- **Tasks pai** (epic/macro) que podem ter subtasks relacionadas
- **Tasks vencidas** do mesmo cliente — podem ser o que a ação concluiu

**Listas conhecidas (Eloscope workspace):**
| Cliente | List ID | Folder ID |
|---|---|---|
| Maqlam | (consultar workspace) | — |
| Campos Joia (Tarefas) | `901713180081` | `90178371131` |
| ReabilitaCão (Tarefas) | `901713180071` | `90178371124` |
| Bravo | (consultar workspace) | — |

Se não encontrar lista correspondente → marcar como "lista a definir" no Passo 4.

---

## Passo 4 — Classificar cada ação em 4 buckets

| Bucket | Critério | Ação |
|---|---|---|
| ✅ **Completa** | Task existe e a ação executou ela inteira | Marcar `done` + comentário com referência (commit, arquivo) |
| 🟡 **Parcial** | Task existe mas só parte foi feita | Atualizar status (in progress) + comentário com avanço |
| 🆕 **Nova** | Ação foi feita sem task — gap no ClickUp | Criar task (status: done se já concluída, ou aberta com prazo) |
| ⏭️ **Operacional** | Commit menor, fix pontual, exploração | Pular — não cria task |

**Casos especiais:**

- **Duplicata detectada:** se a ação executada já está coberta por **subtasks** existentes de uma macro, NÃO criar nova macro. Em vez disso, marcar as subtasks específicas como done.
- **Task vencida:** se uma task aberta tem prazo passado e foi concluída hoje, marcar done e ajustar `due_date` para hoje (registro correto).
- **Subtask órfã:** se foi feito algo que parece subtask mas a macro não existe, criar macro + subtask juntas.

---

## Passo 5 — Apresentar aprovação em batch

Mostrar tudo em uma única lista, formatada para revisão rápida:

```
📋 Validação de Sessão — DD/MM/YYYY HH:MM
Usuário: [nome] (ClickUp #[id])

═══ ✅ Completar (3) ═══
[1] 86e1d9uxx — "Ajustar prompt Grau 10K BDR" → done
    Cliente: Campos Joia · Vencimento: 14/05 (atrasada)
[2] 86e1d9uxy — "Reorganizar clientes cerebro" → done
    Cliente: Eloscope interno · Vencimento: 15/05
[3] ...

═══ 🟡 Atualizar (1) ═══
[4] 86e1d9uxz — "Maqlam SDR setup" → 60%
    Comentário: "Playbook regenerado (HTML+PDF), prompt ajustado (chat_ia_memory).
                 Pendente: saudação P1 + conflito emojis."

═══ 🆕 Criar (2) ═══
[5] [NOVA] "Regenerar playbook PDF Maqlam" 
    Lista: Maqlam · Status: done · Subtask de: [auto-detect]
[6] [NOVA] "Análise prompt × playbook Maqlam" 
    Lista: Maqlam · Status: done · Owner: Victor

═══ ⏭️ Ignorar (4) ═══
- Commit "fix typo prompt"
- Read PROPAGATION.md
- ...

────────────────────────
Aprovar tudo? [s/n] · Editar item: [número] · Remover: [-número]
```

Aguardar input do usuário. Se quiser editar, abrir o item específico, ajustar, voltar à lista.

---

## Passo 6 — Executar em paralelo

Após aprovação, executar em batch (paralelo onde possível):

**Completar:**
```
mcp__claude_ai_ClickUp__clickup_update_task
  taskId: <id>
  status: "done"
  
mcp__claude_ai_ClickUp__clickup_create_task_comment
  taskId: <id>
  text: "Concluído em <data>. Ref: <commit/arquivo>"
```

**Atualizar parcial:**
```
mcp__claude_ai_ClickUp__clickup_update_task
  taskId: <id>
  status: "in progress"

mcp__claude_ai_ClickUp__clickup_create_task_comment
  taskId: <id>
  text: "<comentário do avanço>"
```

**Criar nova:**
```
mcp__claude_ai_ClickUp__clickup_create_task
  list_id: <id_da_lista>
  name: <nome>
  status: <done|open|in progress>
  assignees: [<user_id>]
  due_date: <timestamp_ms>
  parent: <id_macro_se_for_subtask>
  description: "Criada via /validar-sessao em <data>. Ref: <commit>"
```

---

## Passo 7 — Resultado

Mostrar resumo curto:

```
✓ Validação concluída — DD/MM/YYYY HH:MM

✅ 3 tasks marcadas done:
  86e1d9uxx — Ajustar prompt Grau 10K BDR
  86e1d9uxy — Reorganizar clientes cerebro
  86e1d9uxw — ...

🟡 1 task atualizada:
  86e1d9uxz — Maqlam SDR setup (60%)

🆕 2 tasks criadas:
  86e1d9aaa — Regenerar playbook PDF Maqlam (done)
  86e1d9aab — Análise prompt × playbook Maqlam (done)

⏭️ 4 ações operacionais ignoradas.

Próximo passo sugerido: rodar /salve para registrar a sessão.
```

---

## Passo 8 — Anexar à sessão (opcional)

Se o usuário rodar `/salve` em seguida, a seção da sessão deve mencionar os IDs das tasks alteradas, pra rastreabilidade:

```markdown
### Tasks ClickUp tocadas

- ✅ 86e1d9uxx, 86e1d9uxy, 86e1d9uxw
- 🟡 86e1d9uxz
- 🆕 86e1d9aaa, 86e1d9aab
```

---

## Regras

- **Nunca executar sem aprovação** — sempre mostrar lista no Passo 5 e esperar `s` antes de tocar no ClickUp
- **Nunca criar duplicata** — se houver subtasks existentes que cobrem a ação, atualizá-las em vez de criar nova macro (regra confirmada na sessão 15/05)
- **Sempre mencionar commit/arquivo no comentário** — facilita auditoria futura
- **Membros com múltiplas contas ClickUp:** consultar `people.md` — usar a marcada como `primary: true`. Nunca chutar.
- **Lista desconhecida:** se cliente não está no mapeamento, perguntar — nunca criar task em lista aleatória
- **Idempotência:** rodar a skill duas vezes na mesma sessão não deve duplicar nada (checar comentários antes de adicionar)

---

## Convenções

### Status ClickUp

| Status | Quando usar |
|---|---|
| `open` / `to do` | Task aberta, ainda não iniciada |
| `in progress` | Em execução |
| `published` | Listas Redes Sociais e Guia de Modelos (descoberto em 15/05) |
| `done` | Concluída |

### Comentários

Formato sugerido:
```
✅ Concluído em <data>
Ref: <commit-hash | arquivo:linha | URL>
Detalhes: <1 linha do que foi feito>
```

### Prazos (due_date)

- Timestamp em milissegundos (epoch * 1000)
- Para tasks vencidas concluídas: ajustar para hoje
- Para tasks novas: usar data mencionada na conversa, ou perguntar
