---
tipo: ritual
status: ativo
tags: [operacoes, ritual, priorizacao]
criado: 2026-05-01
---

# Filtro de Priorização — As 3 Perguntas

> Critério único pra decidir se uma tarefa entra na semana ou fica no backlog.
> Aplicado por: Lucas, Victor, Hugo (auto-aplicação) + skill `/triagem` (sugere).
> Frequência: toda sexta no Weekly Review + sempre que nova tarefa surgir.

---

## As 3 Perguntas (em ordem)

### 1. **Move ponteiro de receita nos próximos 30 dias?**

Ponteiro = uma destas três coisas:
- 💰 Receita nova (proposta enviada / fechamento / upsell)
- 🛡️ Receita em risco (cobrança vencida / churn risk / SLA quebrado)
- 🚀 Pré-requisito comprovado para ponteiros acima (ex: aquecimento WhatsApp para SDR rodar)

❌ **Não passa:** "melhoria interna", "limpar pasta", "documentar pra futuro", "experimentar ferramenta nova", "refatorar"

✅ **Passa:** "ligar pro Daniel Queiroz hoje", "pagamento Maqlam vence 25/04", "deploy do agente Bravo skill 1"

> ⚠️ Exceção: bugs em cliente ativo passam direto (categoria "receita em risco").

---

### 2. **Tem owner único nominal?**

Owner = **Lucas, Victor ou Hugo** — nome próprio. Nunca "Eloscope", "time", "alguém", "todos".

❌ **Não passa:**
- "Eloscope precisa documentar" → quem? Lucas ou Victor?
- "Definir estratégia comercial" → muito vago, quebra em sub-tarefas

✅ **Passa:**
- "Victor: importar leads cashback Maqlam"
- "Hugo: desenhar fluxo skill 1 Bravo"
- "Lucas: enviar proposta v4 Enertelles"

> ⚠️ Se tarefa precisa de duas pessoas, escolhe quem **inicia**. A outra entra como dependência, não co-owner.

---

### 3. **Cabe em 1 semana de trabalho?**

Tempo estimado: ≤ 8h de trabalho efetivo.

❌ **Não passa:** "Estruturar área comercial inteira", "Refazer landing page"
✅ **Passa:** "Escrever copy 5 carrosseis IG", "Fechar reconciliação Inter"

> ⚠️ Se não cabe em 1 semana, **quebra em milestones semanais antes de aceitar**. Não deixa "projeto guarda-chuva" na semana — vira backlog ⚪.

---

## Resultado da aplicação

| Resultado | O que fazer |
|---|---|
| ✅ Passa nas 3 | Entra na semana. Marca 🔴 (esta semana) ou 🟡 (próxima) em `pendencias.md` + cria task no ClickUp com owner |
| ⚠️ Passa em 2/3 | Vai pro backlog ⚪. Re-aplicar filtro em 30 dias |
| ❌ Passa em 0-1 | **Deletar** ou arquivar. Não vai pra backlog — backlog também tem custo de revisão |

---

## Onde aplicar

| Momento | Quem | Como |
|---|---|---|
| Sexta no Weekly Review | Time todo | Aplica nas pendências da semana seguinte |
| Toda nova tarefa que surge | Quem cria | Antes de adicionar em `pendencias.md` ou ClickUp |
| Ação a partir de reunião (Fathom) | Skill `/reuniao` | Auto-flag tarefas que falham no filtro |
| Manhã de cada dia | Skill `/triagem` | Re-aplica nas tarefas do dia, sugere ajustes |

---

## Anti-padrões observados (para combater)

1. **"Resolvida" demais cedo:** ainda não fechou no ClickUp mas já marca ✅ → mantém pendência aberta até task ClickUp fechar
2. **"Importante mas não urgente" virando 🟡 eterno:** se está há 3 semanas como 🟡 sem mover, **falha na pergunta 1** — deleta ou move pra backlog
3. **Owner = "Eloscope":** sempre quebra antes de aceitar — quem inicia?
4. **Projeto guarda-chuva:** "Estrutura comercial inteira" = não. Quebra em "Lucas: escrever playbook discovery" + "Victor: definir 3 indicadores comerciais"

---

*Criado em: 2026-05-01 · Revisão: a cada 30 dias*
