---
tipo: spec-skill
status: draft
tags: [skill, triagem, operacoes]
criado: 2026-05-01
revisar: 2026-05-15
---

# Skill `/triagem` — Especificação (DRAFT, NÃO IMPLEMENTAR AINDA)

> Status: **proposta**. Implementar SOMENTE após Semana 2 (rituais validados).
> Aprovação requerida: Lucas + Victor.
> Construção depende de: `pendencias.md` estável + ClickUp como source of truth confirmado + filtro 3 perguntas em uso há ≥ 1 semana.

---

## Propósito

Fazer **pente-fino diário** das pendências e ClickUp, sugerindo:
- Top 3 do dia por pessoa (com base no filtro 3 perguntas)
- 🚩 Alertas de tarefas mal-formadas (sem owner, sem prazo, fora de escopo)
- 🚩 Blockers parados há mais de 3 dias

**Princípio:** **sugere, não decide.** Lucas/Victor confirmam ou rejeitam cada sugestão. Skill nunca move task no ClickUp sem confirmação explícita.

---

## Quando rodar

| Cenário | Trigger |
|---|---|
| Manhã (08:00–10:00) | Auto-sugestão do `brain-boot.sh` |
| Antes da daily de seg/qua/sex | Manual: `/triagem daily` |
| Antes do Weekly Review (sexta 15:30) | Manual: `/triagem weekly` |

---

## Inputs (lê)

### Fontes obrigatórias

1. `memory/context/pendencias.md` — pendências internas
2. ClickUp via MCP — todas as tasks abertas com owner em (Lucas, Victor, Hugo)
3. `memory/context/deadlines.md` — prazos absolutos
4. `memory/context/business-context.md` — foco do mês + clientes ativos

### Fontes opcionais

5. Google Calendar via MCP — disponibilidade do dia
6. Última sessão Fathom em `memory/sessions/` — action items recentes

---

## Outputs (gera)

### Saída padrão (em chat, ~30 linhas)

```
🌅 Triagem — [DD/MM/YYYY HH:MM] · Modo: [daily/weekly]

📊 Estado geral
- Pendências abertas: X 🔴 / Y 🟡 / Z ⚪
- ClickUp: X tasks abertas / Y atrasadas
- Foco do mês: [4 fechamentos maio]

🎯 Top 3 sugerido
### Lucas
1. ✅ Filtro: 3/3 — "Enviar proposta v4 Enertelles" (deadline hoje)
2. ✅ Filtro: 3/3 — "Call Daniel Queiroz 14h"
3. ⚠️ Filtro: 2/3 — "Refinar script Thiago Bravo" (cabe na semana? confirma)

### Victor
1. ✅ Filtro: 3/3 — "Importar leads cashback Maqlam"
...

### Hugo
...

🚩 Alertas
- 4 tasks ClickUp sem owner nominal (lista IDs)
- 2 tasks marcadas 🔴 há > 7 dias (revisar se ainda crítica)
- "Estrutura comercial inteira" não passa filtro pergunta 3 (não cabe em 1 semana) — quebrar?
- Blocker parado: "Hugo aguardando acesso Hostinger Gustavo" (5 dias) — escalar?

✅ Confirma sugestão? [s/n/ajustar]
```

### Saída secundária (apenas em `/triagem weekly`)

Adiciona:
- Diff vs. semana anterior (Top 3 anteriores foram cumpridos?)
- Métrica de adesão ao filtro: % de tasks que passaram filtro completo
- Sugestão de pendências pra mover de 🟡 → ⚪ (ou deletar) por inatividade > 30 dias

---

## Lógica core (pseudocódigo)

```
para cada owner em [Lucas, Victor, Hugo]:
    candidatas = filtrar(
        fontes=[pendencias.md 🔴, ClickUp owner=person status=open],
        excluir=[completed, archived]
    )

    para cada candidata:
        score = aplicar_filtro_3_perguntas(candidata, business_context)
        # score = (passa_p1, passa_p2, passa_p3) → tupla booleana

    top_3 = top_n(candidatas, n=3, ordenar_por=[
        deadline_proximidade,
        score_filtro,
        criticidade_emoji
    ])

    alertas = detectar_anomalias(candidatas):
        - sem owner nominal
        - 🔴 há > 7 dias sem update
        - blocker parado > 3 dias
        - não passa pergunta 3 (cabe semana)

    output(top_3, alertas)
```

---

## Não-objetivos (o que /triagem NÃO faz)

- ❌ Não fecha tasks no ClickUp
- ❌ Não move pendências entre 🔴/🟡/⚪ sem confirmação
- ❌ Não cria tasks novas
- ❌ Não envia mensagens (Slack/WhatsApp/email)
- ❌ Não substitui Weekly Review — complementa

---

## Custo estimado

| Item | Tokens |
|---|---|
| Input (pendencias + clickup + deadlines + business-context) | ~15-20k |
| Output | ~1-2k |
| **Total por execução** | **~20k** |

A 1 run/dia × 22 dias úteis = ~440k tokens/mês. Em Sonnet 4.6, isso é **~$1,50/mês** (precificação aproximada). Negligível.

---

## Métricas de sucesso (avaliar em 30 dias após implementação)

| Métrica | Meta |
|---|---|
| % Top 3 sugerido aceito sem ajuste | > 60% |
| Tempo gasto em triagem manual antes vs. depois | -50% |
| Adesão ao filtro 3 perguntas | > 80% |
| Tasks "esquecidas" (>14 dias sem update) | < 5% |

Se < meta em 60 dias: **descontinuar ou reformular**. Não manter por inércia.

---

## Dependências técnicas

- ✅ MCP ClickUp instalado (já está)
- ✅ `pendencias.md` no formato atual (já está)
- ⚠️ ClickUp owner nominal (Lucas/Victor/Hugo) consistente — **a auditar antes de construir**
- ⚠️ Skill base do Claude Code — segue padrão das existentes (`SKILL.md` com frontmatter)

---

## Próximos passos (se aprovado)

1. **Semana 2:** validar rituais humanos (filtro + weekly review) sem skill
2. **Semana 3:** auditar consistência owner ClickUp + ajustar SPEC se necessário
3. **Semana 4:** implementar `skills/triagem/SKILL.md` baseado neste SPEC
4. **Semana 5-8:** rodar e medir métricas de sucesso
5. **Semana 9:** decisão GO/NO-GO de squad formal (`@triagem` + `@distribuidor` + `@auditor-fit`)

---

*Spec versionado: v0.1 · Aprovação pendente: Lucas + Victor*
