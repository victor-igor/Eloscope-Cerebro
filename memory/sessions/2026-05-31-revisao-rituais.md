---
tipo: revisao-ritual
data: 2026-05-31
status: concluida
tags: [operacoes, rituais, revisao-mensal, priorizacao, weekly-review, triagem]
gerado-por: agente-revisao-rituais (routine #1 Anthropic Cloud)
---

# Revisão dos Rituais Operacionais — Maio 2026

> Período: 01/05/2026 a 31/05/2026 · Rituais criados em: 01/05/2026
> Fontes analisadas: sessões (26 arquivos), atas semanais (4 reuniões), decisoes/2026-05.md, pendencias.md, projects/_index.md, SPEC.md /triagem

---

## Resumo Executivo

Mês de teste com adesão parcial e assimétrica. O **Weekly Review** foi o ritual com melhor execução: 3–4 reuniões realizadas, documentadas, com métricas coletadas. O **Filtro 3 Perguntas** foi criado mas não virou hábito sistemático — aparece apenas como referência pontual. A skill **/triagem** não saiu do DRAFT: sem SKILL.md, sem aprovação formal, sem métricas. Recomendação: Weekly → **GO** com ajustes de formato; Filtro → **AJUSTAR** e reintegrar ao Weekly; /triagem → **DESCONTINUAR** o SPEC atual e redesenhar com escopo menor.

---

## 1. Filtro de Priorização — As 3 Perguntas

### Evidências do mês

**Aparições nas sessões:** O filtro é mencionado diretamente em apenas 2 dos 26 arquivos de sessão:
- `2026-05-01.md` — criação dos rituais e colagem do template
- `2026-05-29-weekly-prep.md` — "validar filtro na call" (candidatos Top 3 listados, filtro não aplicado pelo agente)

**Aplicação em tasks:** Não há registro de nenhuma task sendo explicitamente submetida ao filtro ao longo do mês. As pendências continuam sendo adicionadas com o mesmo padrão anterior: mistura de tarefas operacionais, comerciais, técnicas e de backlog sem evidência de triagem pelas 3 perguntas antes de entrar na lista.

**Anti-padrões — diagnóstico:**

| Anti-padrão | Status em maio |
|---|---|
| Owner = "Eloscope" | Reduziu. Nas weeklys documentadas, owners nominais (Lucas/Victor/Hugo) são usados consistentemente |
| Projetos guarda-chuva | Ainda presentes: "Estrutura comercial inteira" em pendências de abril não foi quebrada em micro-tasks; "Comercial 0%" na semana 22 é sintoma de frente grande demais sem sub-tasks aplicáveis |
| 🟡 eternos | Crítico: há 15+ pendências de abril ainda abertas em 31/05 sem movimento. Ex: "Template de contrato" (19/04), "Painel financeiro Supabase RLS quebrado" (27/04), "Hugo: Confirmar capacidade técnica" (18/04) |
| Task aprovada sem ClickUp | Segue acontecendo — pendencias.md e ClickUp ainda desalinhados em várias frentes |

**Frequência de aplicação estimada:** < 10% das tasks novas criadas no mês passaram pelo filtro formal. O filtro foi conceito, não hábito.

### Veredicto: AJUSTAR

**Justificativa:** O filtro tem valor real — o diagnóstico de "3ª semana sem venda nova" na weekly S22 confirma que tasks urgentes não relacionadas a receita consumiram o tempo (exatamente o que o filtro deveria evitar). O problema não é o filtro em si: é a ausência de momento fixo de aplicação e ausência de consequência para tasks que não passam. Abandonar seria errado; automatizar antes de consolidar o hábito também.

**Ajuste recomendado para junho:**
1. Aplicar o filtro **ao vivo no bloco de Planning** de cada Weekly (5 min já estão na agenda) — quem apresenta o Top 3 deve responder as 3 perguntas publicamente
2. Marcar em `pendencias.md` tasks que "falham" com `[FILTRO: REPROVADA]` em vez de simplesmente deletar — cria visibilidade antes de arquivar
3. Auditar as 15+ pendências de abril ainda abertas usando o filtro e arquivar as que não passam na Pergunta 1

---

## 2. Weekly Review (Sextas 16h → Manhã 8h30)

### Evidências do mês

**Reuniões realizadas:**

| Data | Semana | Ata | Duração registrada | Métricas coletadas |
|---|---|---|---|---|
| 01/05 | Retro inicial | `2026-05-01-semanal-retro.md` | 140 min (diagnóstico estratégico) | Parcial |
| 15/05 | S20 | `2026-05-15-semanal.md` | 60 min (8h30–9h30) | Sim — R$0, ~50 tasks, 1 reunião venda |
| 22/05 | S21 | `2026-05-22-semanal.md` | 60 min (8h30–9h30) | Sim — parcialmente preenchidas |
| 29/05 | S22 | `2026-05-29-semanal.md` | 60 min (8h30–9h30) | Parcialmente preenchidas |

> Nota: a reunião de 08/05 (primeira execução prevista no template "sexta 16h") não tem ata separada — provavelmente não aconteceu ou foi informal. A partir de 15/05 o ritual se consolidou mas com horário diferente (8h30 vs 16h do template).

**Métricas — coleta real:**
- 💰 Receita fechada: coletada em S20 (R$0), S22 (R$0) — S21 incompleta
- ⏱️ Lead → proposta (dias médios): `[A PREENCHER NA CALL]` nas 3 weeklys — **nunca preenchida**
- ✅ Tarefas concluídas vs. abertas: coletada parcialmente (S20: ~50 done; S22: 38 done, 43 abertas com deadline S23)

**Top 3 por pessoa:**
- S20: definido como Top 3 de clientes (não por pessoa como o template especifica)
- S21: Top 3 listado por Victor no prep — não há confirmação de Hugo
- S22: candidatos listados no prep automático, filtro a validar na call

**Facilitador rotativo:** Hugo facilitou S21 (confirmado). S20 e S22 ficaram "[_definir_]" — não houve rotatividade formal.

**Pré-requisitos (15 min antes):** Não há evidência de que Lucas, Victor ou Hugo fizeram o pré-trabalho individualmente antes de entrar nas calls. As atas são prep automático + preenchimento ao vivo.

**Ajuste de horário:** O ritual migrou de "sexta 16h" para "manhã 8h30". Isso não está documentado como decisão formal, mas é positivo se funcionou para o time — mantém a cadência semanal.

**Resumo via WhatsApp:** Feito uma vez (15/05) — "mensagem de resumo enviada ao grupo Squad Eloscope via uazapi". Não há registro de repetição nas semanas 21 e 22.

**Prep automático (agente #3):** Funcionou em 29/05 — arquivo `2026-05-29-weekly-prep.md` gerado automaticamente às 15:30 com análise de bloqueios, métricas e candidatos ao Top 3. Valor agregado real.

### Veredicto: GO (com ajustes)

**Justificativa:** 3 weeklys documentadas com ata, participação dos 3 membros, métricas básicas coletadas, Top 3 discutido — o núcleo do ritual aconteceu. Cadência 100% no mês (nenhuma semana pulada após a primeira). O valor gerado é visível: diagnóstico de "comercial 0% por 3 semanas" foi articulado na weekly S22 com causa-raiz e solução decidida. Sem o ritual, esse diagnóstico viria tarde demais.

**Ajustes necessários para junho:**
1. **Formalizar o horário 8h30** no arquivo `weekly-review.md` (template ainda diz 16h — gera confusão)
2. **"Lead → proposta (dias médios)"** está sempre em branco. Victor precisa preencher antes da call ou o indicador muda para algo que o time consegue medir (ex: número de propostas enviadas no mês)
3. **Top 3 por pessoa** — retomar o formato original: 3 tarefas por pessoa (9 no total), não 3 clientes. Isso é onde o filtro se integra
4. **Facilitador rotativo** — Hugo facilitou S21, quem facilita S23? Definir na próxima call e registrar
5. **Resumo WhatsApp** — repetir em todas as weeklys (só aconteceu uma vez)

---

## 3. Skill /triagem (DRAFT)

### Evidências do mês

**SKILL.md existe?** Não. O diretório `skills/triagem/` contém apenas `SPEC.md`. Nenhum `SKILL.md` foi criado.

**Aprovação formal (Lucas + Victor)?** A pendência `[01/05] Aprovar SPEC /triagem antes de 16/05 (Semana 3)` permanece aberta em `pendencias.md` sem ✅. Não há decisão registrada em `decisoes/2026-05.md` sobre aprovação ou rejeição do SPEC.

**Cronograma original vs. real:**

| Semana | Planejado | Real |
|---|---|---|
| S1 (02-08/05) | Templates colados, ClickUp decidido | ✅ Feito |
| S2 (09-15/05) | Ritual leve validado (daily + weekly) | ⚠️ Parcial — weekly funciona, daily não documentada |
| S3 (16-22/05) | Implementar `/triagem` | ❌ Não implementado |
| S4 (23-29/05) | Squad task-triage se ROI > 60% | ❌ Sem base para avaliar |

**Por que não foi implementada?**
Pela análise das sessões, o time esteve 100% focado em entregas de clientes (Maqlam RAG, Morgana API oficial, Bravo Skills, ReabilitaCão fixes, Elo OS Content Studio). A aprovação do SPEC nunca foi colocada em pauta e o próprio SPEC especificava dependências que não foram validadas: "ClickUp owner nominal consistente — **a auditar antes de construir**" e "filtro 3 perguntas em uso há ≥ 1 semana".

**As dependências foram atendidas?**
- ✅ `pendencias.md` estável no formato atual
- ⚠️ ClickUp como source of truth: parcialmente — Lucas tem atraso acumulado em tasks ("tarefas pendente com due de 10-17/05" registrado na weekly S22)
- ❌ Filtro 3 perguntas em uso sistemático há ≥ 1 semana: não aconteceu

**Métricas de aceitação (60 dias):** impossível avaliar, pois a skill nunca foi rodada.

**Ainda faz sentido?**
O problema que a skill resolve é real: o time gasta tempo em triagem manual e tasks mal-formadas continuam existindo. Porém o SPEC atual tem escopo grande (integração ClickUp + Google Calendar + Fathom, ~20k tokens por execução, outputs complexos). Com o ritual humano ainda instável, automatizar agora replicaria o caos.

### Veredicto: DESCONTINUAR o SPEC atual — redesenhar versão simplificada

**Justificativa:** O SPEC v0.1 foi escrito para um estado operacional que o time ainda não atingiu. Com filtro não consolidado e ClickUp desalinhado, a skill produziria sugestões que o time não conseguiria confirmar/rejeitar com confiança — e viraria ruído. DESCONTINUAR não significa abandonar a ideia; significa não continuar investindo tempo no SPEC atual.

**Recomendação para junho:**
1. Arquivar `SPEC.md` atual como `SPEC-v0.1-arquivado.md`
2. **Não criar SKILL.md ainda** — esperar 4 semanas de Weekly Review com Top 3 por pessoa funcionando
3. Se em julho o filtro estiver sendo aplicado com consistência, criar `/triagem` com escopo mínimo: apenas lê `pendencias.md` + pergunta as 3 questões sobre cada 🟡, sugere mover para ⚪ ou ✅. Sem ClickUp, sem Calendar, sem Fathom na v1

---

## Recomendações Consolidadas para Junho

| Ritual | Veredicto | Ação principal |
|---|---|---|
| Filtro 3 Perguntas | **AJUSTAR** | Integrar formalmente no bloco de Planning do Weekly; auditar 🟡 eternos de abril com o filtro |
| Weekly Review | **GO** | Formalizar horário 8h30; corrigir métrica Lead→Proposta; retomar Top 3 por pessoa; confirmar facilitador S23 |
| Skill /triagem | **DESCONTINUAR** SPEC atual | Arquivar SPEC v0.1; não implementar agora; redesenhar versão minimal após 4 semanas de Weekly estável |

**Próxima revisão de rituais:** 30/06/2026 (ou ao final do próximo ciclo de 30 dias).

---

*Gerado em: 31/05/2026 · Agente: Revisão Rituais Eloscope (routine Anthropic Cloud #1) · Branch: revisao-rituais-2026-05*
