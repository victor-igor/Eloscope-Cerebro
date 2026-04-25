---
tipo: doc
status: ativo
tags: [cliente/bravo, area/vendas, tipo/discovery, tipo/playbook]
cliente: bravo
data: 2026-04-25
deadline: 2026-04-26
participantes: [Lucas, Gustavo, Rafael, Javi]
relacionados: ["[[01-apresentacao-alinhamento]]", "[[framework-processo]]", "[[bpmn-basico]]", "[[causa-efeito]]", "[[analise-custo-processo]]", "[[discovery-script]]", "[[plano-execucao]]", "[[cronograma]]"]
---

# Sequência de Aplicação — Discovery Bravo

> [!info] Como usar este arquivo
> Índice de execução do discovery [[../lead-profile|Bravo]] de 26/04. Define a ordem em que os outros arquivos da pasta entram em cena.

> [!tip] Princípio
> 1. **Permissão antes de informação** — apresentação e alinhamento abrem a porta.
> 2. **Sintoma com time, raiz com time, dinheiro só com sócio.**
> 3. **Causa-raiz antes de proposta** — solução que ataca sintoma volta como problema novo.

---

## Visão geral — 5 etapas

| Etapa | Quando                              | Com quem                        | Arquivo                                                                    | Output                                                          |
| ----- | ----------------------------------- | ------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **0** | Sábado 26/04 — bloco 0 (20min)      | Lucas + Gustavo + Rafael + Javi | [[01-apresentacao-alinhamento]]                                            | Time alinhado, regras do jogo, gravação ligada                  |
| **1** | Sábado 26/04 — bloco 1 (90min)      | Mesmo grupo                     | [[framework-processo]] (seções 1, 3, 7)                                    | Matriz preenchida com tempo/vez, volume/mês, ferramenta, dor    |
| **2** | Sábado 26/04 — bloco 2 (30min)      | Mesmo grupo                     | [[bpmn-basico]]                                                            | Fluxo desenhado e validado na frente do time                    |
| **3** | Sábado 26/04 — bloco 3 (30min)      | Mesmo grupo                     | [[causa-efeito]]                                                           | 3-4 fichas Ishikawa + 5 Whys → causa-raiz por processo top      |
| **4** | Pós-sessão — 1:1 (30-45min)         | Lucas + Gustavo apenas          | [[analise-custo-processo]]                                                 | Custo-hora real, custos fixos, ROI das 3 skills                 |
| **5** | Consolidação (Lucas, sozinho)       | —                               | [[framework-processo]] (seções 4, 6) + [[plano-execucao]] + [[cronograma]] | Definição final das 3 skills + entrega                          |

> [!success] Total estimado no sábado
> ~2h50 com time + 30-45min 1:1 com Gustavo = **~3h30**.

---

## Etapa 0 — Apresentação Eloscope + Alinhamento (20min)

**Arquivo:** [[01-apresentacao-alinhamento]]

### Como conduzir
1. Boas-vindas + ligar gravação (3min)
2. Pitch curto Eloscope — 3 frentes (5min)
3. Conectar com histórico (reunião 20/04) (3min)
4. Mostrar as 4 etapas que vêm a seguir (5min)
5. Alinhar expectativa + linhas vermelhas + compromisso "custo só com Gustavo" (4min)

> [!tip] Regra de ouro desta etapa
> **Ganhar permissão antes de pedir informação.** Sem isso, o time responde na defensiva.

> [!success] Output da etapa 0
> Sinal verde verbal de todos para iniciar o levantamento.

---

## Etapa 1 — Levantamento de processos e fluxos (90min)

**Arquivo principal:** [[framework-processo]]
**Apoio:** [[discovery-script]] (pular bloco 1.3 — Custos)

### Como conduzir
1. Abrir [[framework-processo#7. Roteiro de Perguntas por Módulo]] e ir módulo a módulo (Captação → Onboarding → Estratégia → Planejamento → Copy → Design → Aprovação → Postagem → Relatório → Tráfego → LP).
2. Para cada atividade, preencher o template da [[framework-processo#1. Mapeamento de Atividades|seção 1]] (Quem / Frequência / Tempo médio / Volume / Ferramenta / Input / Output / Dor).
3. Pedir demonstração ao vivo onde fizer sentido — Rafael abrindo Canva, Javi abrindo ChatGPT/Claude. **Cronometrar.**
4. Atualizar a matriz da [[framework-processo#3. Matriz de Processos da Bravo|seção 3]] com tempos e volumes reais.

> [!danger] NÃO perguntar nesse bloco
> - Salários, pró-labore, CLT/PJ
> - Custos fixos da operação
> - Margem por cliente
> - Faturamento detalhado
>
> Se Gustavo trouxer custo espontaneamente, anotar e seguir — mas não puxar.

---

## Etapa 2 — Validação do fluxo (30min)

**Arquivo:** [[bpmn-basico]]

### Como conduzir
1. Desenhar (papel/whiteboard ou Miro ao vivo) o fluxo mensal por cliente: Análise → Planejamento → Copy → Design → Aprovação → Postagem → Relatório.
2. Marcar dependências: o que bloqueia o quê, onde tem espera, onde tem retrabalho.
3. Confirmar com cada um: "esse desenho representa o que vocês fazem?"
4. Marcar no diagrama os pontos críticos (gargalos, esperas, retrabalho).

> [!success] Output da etapa 2
> Fluxo validado pelo time — base para a análise causa-efeito da etapa 3.

---

## Etapa 3 — Causa e efeito por processo (30min)

**Arquivo:** [[causa-efeito]]

### Como conduzir
1. Selecionar **top 3-4 processos** (score >=3.7 na matriz) — análise mensal, planejamento, copy, aprovação.
2. Para cada um, aplicar **Ishikawa 6M** (Método, Mão de obra, Material, Máquina, Medida, Meio Ambiente) — 5min por processo.
3. Eleger a causa mais citada e fazer **5 Whys** até chegar na raiz.
4. Anotar hipótese de solução (Skill IA / n8n / Processo / Treinamento).
5. Procurar **causa-raiz comum** entre processos diferentes — virou tese central da proposta.

> [!tip] Insight valioso
> Se 3 processos apontam pra mesma raiz (ex: "falta de perfil estruturado do cliente"), uma skill resolve múltiplas dores. **Esse é o argumento de venda mais forte.**

> [!success] Output da etapa 3
> Causas-raiz identificadas + validação de que as 3 skills atacam raiz, não sintoma.

---

## Etapa 4 — Custos e ROI (1:1 com Gustavo, 30-45min)

**Arquivo principal:** [[analise-custo-processo]]
**Apoio:** [[discovery-script]] bloco 1.3

### Quando

> [!warning] Janela curta
> Não atrasar pra não estourar a proposta. Opção A é a preferida.

- **Opção A (preferida):** marcar 30-45min só com Gustavo no mesmo sábado, depois que Rafael e Javi saírem.
- **Opção B:** café/call separada na semana seguinte (até 30/04 pra não atrasar a proposta).

### Como conduzir
1. Abrir bloco 1.3 do [[discovery-script]] — preencher custos fixos.
2. Perguntar pró-labore do Gustavo + salários/pagamentos da equipe (CLT? PJ? freela?).
3. Calcular custo-hora real por pessoa (fórmula em [[framework-processo#4. Análise de Custo por Processo|framework seção 4]]).
4. Recalcular a tabela "Custo mensal por atividade" com números reais.
5. Validar a economia projetada e o argumento de payback ("se paga em <1 mês").

> [!success] Output da etapa 4
> ROI fechado — munição para a proposta.

---

## Etapa 5 — Consolidação e definição das 3 skills (Lucas, sozinho)

**Arquivos:**
- [[framework-processo#4. Análise de Custo por Processo|framework seção 4]] (custos) + [[framework-processo#6. Decisão: Quais 3 Skills?|seção 6]] (decisão das 3 skills)
- [[causa-efeito]] — confirmar que skills atacam raiz
- [[plano-execucao]] — atualizar com escopo final
- [[cronograma]] — confirmar prazos

### Como conduzir
1. Recalcular scores da matriz com dados reais coletados.
2. Cruzar score com causa-raiz — skill que ataca raiz comum sobe na prioridade.
3. Escolher as 3 skills pelo ranking + critérios de desempate (sequência lógica, quick win, dor do Gustavo).
4. Atualizar [[plano-execucao]] com escopo final.
5. Validar cronograma de 4 semanas.
6. Levar para Gustavo numa call rápida de alinhamento antes de assinar.

---

## Linha do tempo — sábado 26/04

```
09:00 ─┬─ [Etapa 0] Apresentação + alinhamento ────────── 20min
09:20 ─┤
       │
09:20 ─┼─ [Etapa 1] Levantamento de processos ─────────── 90min
10:50 ─┤
       │
10:50 ─┼─ [Etapa 2] Validação do fluxo (BPMN) ─────────── 30min
11:20 ─┤
       │
11:20 ─┼─ [Etapa 3] Causa e efeito ───────────────────── 30min
11:50 ─┤
       │  ☕ Time se despede
       │
11:55 ─┼─ [Etapa 4] Custo + ROI (1:1 Gustavo) ───────── 30-45min
12:30 ─┘
```

> [!info] Buffer
> Reservar 15min de margem entre blocos. Se Etapa 1 estourar, comer da margem da 2.

---

## Checklist do sábado 26/04

> [!todo] Antes
> - [ ] Imprimir/abrir [[01-apresentacao-alinhamento]] no notebook
> - [ ] Imprimir/abrir [[framework-processo]] no notebook
> - [ ] Imprimir/abrir [[causa-efeito]] (pelo menos a seção 3 — template)
> - [ ] Abrir [[bpmn-basico]] ou ter Miro/papel pronto
> - [ ] Avisar Gustavo que custos ficam pra 1:1
> - [ ] Confirmar gravação (celular + Fathom se tiver notebook)
> - [ ] Levar 1 case rápido pra mostrar na Etapa 0

> [!todo] Durante (com time, ~2h50)
> - [ ] Etapa 0: apresentação + alinhamento (20min)
> - [ ] Etapa 1: framework — seções 1, 3, 7 (90min)
> - [ ] Etapa 2: bpmn — fluxo validado (30min)
> - [ ] Etapa 3: causa-efeito top 3-4 processos (30min)

> [!todo] Depois (1:1 Gustavo, ~30-45min)
> - [ ] Etapa 4: análise de custo + ROI

> [!todo] Pós-sessão (Lucas)
> - [ ] Consolidar matriz com dados reais
> - [ ] Cruzar com causas-raiz
> - [ ] Definir 3 skills finais
> - [ ] Atualizar [[plano-execucao]] e [[cronograma]]
> - [ ] Marcar call de alinhamento com Gustavo

---

*Criado: 2026-04-25*
*Atualizado: 2026-04-25 (5 etapas: apresentação → processos → fluxo → causa-efeito → custo → consolidação)*
*Princípio: permissão antes de info, raiz antes de proposta, números só com sócio.* ^principio-base
