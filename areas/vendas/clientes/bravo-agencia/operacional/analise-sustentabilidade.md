---
tipo: parecer
empresa: Agência Bravo
tags: [cliente/bravo, sustentabilidade, decisao, mentoria-agencias]
status: ativo
data: 2026-05-06
relacionados: ["[[apis-credenciais]]", "[[pendencias-tecnicas]]", "[[../projeto/2-pos-discovery/proposta-pos-discovery]]"]
---

# Parecer de Sustentabilidade — Bravo Agency

> **Pergunta central:** o projeto Bravo Agency, do jeito que está, é sustentável financeiramente, tecnicamente e estrategicamente? Vale ir até o fim e replicar?
>
> **Recomendação executiva:** **GO COM AJUSTE** — seguir Sprints 2, 3 e 4 com 3 cortes de escopo e 1 endurecimento de processo. Detalhes na seção 5.

---

## 1. Sustentabilidade financeira

### 1.1 Custo Eloscope vs preço cobrado

| Item | Valor |
|---|---|
| Preço contratado | R$ 3.900 (Opção B) |
| Horas estimadas Sprint Board | 100h (Sprint 1: 20h, Sprint 2: 25h, Sprint 3: 30h, Sprint 4: 15h, Suporte: 10h) |
| **Receita por hora** | **R$ 39/h** |
| Composição time | Lucas (delivery), Hugo (build), Victor (validação), pontual Logos/Minos/Pallas |
| Custo-hora interno Eloscope (estimado) | R$ 80-120/h ponderado (sêniores) |
| **Margem do projeto isolado** | **Negativa** (~ -R$ 4-8k de "subsídio") |

**Leitura honesta:** Bravo é piloto **subsidiado**. R$ 39/h não cobre custo-hora de Lucas+Hugo+Victor — está mais perto do custo-hora real **da Bravo** (R$ 26/h ponderado de Rafa+Ravi+Gobi).

### 1.2 Por que faz sentido mesmo subsidiado

- **Aprendizado de produto:** primeira validação real do produto "Mentoria Agências" — vale como R&D de R$ 4-8k
- **Case e conteúdo:** se entregar bem, vira case "agência R$ 20k → R$ 30k em 90 dias com 3 skills" — replicável em vendas
- **Replicabilidade da stack:** Sprint Board, Lifelines, framework de discovery viram **template** pra próximos clientes (custo de criar = 0 pro cliente 2)
- **Custo recorrente baixo pra Bravo:** R$ 137-322/mês = <2% da receita Bravo (vide `[[apis-credenciais]]` §7) → modelo é viável pra eles

### 1.3 Cliente 2 e seguintes (escala)

Se replicar a stack sem refazer (template ready):
- Próximo cliente: ~50-60h (-40% horas, parte do trabalho já existe)
- Preço cobrável escala pra R$ 6-8k mantendo entrega
- **Margem positiva a partir do cliente 2** (R$ 100-130/h efetiva)

**Conclusão financeira:** ✅ Sustentável **se** Bravo virar template e produzir cliente 2 nos próximos 60-90 dias.

---

## 2. Sustentabilidade técnica de entrega

### 2.1 Stack — entrega as 3 skills?

| Skill | Stack | Entrega? | Risco principal |
|---|---|---|---|
| Skill 1 — Aprovação SLA | OpenClaw + WhatsApp Cloud API + ClickUp | ✅ Sim | Aprovação templates Meta (24-48h cada) |
| Skill 2 — Agendador Meta | OpenClaw + Meta Graph API + ClickUp/Sheets | ✅ Sim | App Review Meta (3-7 dias) |
| Skill 3 — Análise mensal | OpenClaw + GA4 API + Meta Insights | ⚠️ Sim com ressalva | Acessos GA4 dos 20 clientes — depende de cooperação cliente final |

**Validações técnicas feitas (vide `[[apis-credenciais]]`):**
- WhatsApp Cloud API: ✅ entrega, custo irrelevante (~$0,30/mês)
- Meta Graph API: ✅ entrega, sem limite de janela 75 dias quando via API
- GA4 Data API: ✅ entrega, free tier suficiente

### 2.2 Top 3 riscos técnicos

1. **App Review Meta** — `instagram_content_publish` + `pages_manage_posts` exigem review (3-7 dias). Mitigação: submeter no dia 1 do Sprint 2. **Se não submetido até 09/05, Sprint 3 desliza.**
2. **Templates WhatsApp aprovados** — 24-48h de aprovação Meta por template. Mitigação: Hugo redige 3 templates utility no dia 1 do Sprint 2.
3. **VPS Hostinger small plan** — n8n + Postgres + OpenClaw pode estourar 2GB RAM. Mitigação: validar plano com Hugo antes; orçar upgrade R$ 50-80/mês se necessário.

**Conclusão técnica:** ✅ Stack entrega. Riscos são gerenciáveis com 2 ações no dia 1 do Sprint 2 (templates + App Review).

---

## 3. Escopo vs prazo — onde estamos hoje (06/05)

### 3.1 Realidade vs Sprint Board

| Sprint | Plano | Status real (06/05) | Gap |
|---|---|---|---|
| Sprint 1 (28/04→02/05) | Setup + processo + escopo travado | **Parcial** — processo OK, ambiente ❌ (Hostinger não acessado), escopo ❌ (3 bloqueantes Gustavo) | -5 dias |
| Sprint 2 (05/05→09/05) | Skill 1 com piloto real | **Não iniciado** — bloqueado por cliente-piloto + SLA + Hostinger | -2 dias e contando |
| Sprint 3 (12/05→16/05) | Skill 2 + Skill 3 operacionais | Pendente | OK se Sprint 2 destravar |
| Sprint 4 (19/05→23/05) | Treinamento + handoff | Pendente | OK se Sprints 2+3 ok |

### 3.2 Cenário pessimista — Sprint 2 só destrava 12/05

Se Gustavo só responder na semana de 12/05:
- Sprint 2: 12-16/05 (1 semana)
- Sprint 3 comprime: 19-23/05 (em vez de 2 semanas, 1)
- Sprint 4 entra na zona de Suporte: 26-30/05
- Suporte vira 31/05-30/06 (cabe nos 30 dias prometidos)

**Conclusão:** delay de 1 semana **ainda cabe** dentro do contrato (delivery até 23/05 vira 30/05). Delay >2 semanas = **renegociar prazo formalmente**.

### 3.3 O que cortar se atrasar mais

Em ordem de menor dor:

1. **POC Premiere + Claude Code** (Rafael Gobi) — bônus declarado fora do escopo principal. Cortar 3h Hugo + 3h Rafael Gobi.
2. **NPS Day-1 automatizado** — bônus de processo, 1h Hugo. Cortar.
3. **Cliente-piloto Skill 1 vira "dry-run"** — em vez de cliente real, rodar Skill 1 com peça interna Bravo (Gustavo aprova). Reduz risco de feedback negativo do cliente final, mas reduz prova de conceito.
4. **Skill 3 entrega só template + Service Account** — sem rodar análise real (volta pro mês 2 do suporte). Cortar 2h Hugo + 2h Gustavo.

**Linha vermelha (não cortar):** Skill 1 + Skill 2 funcionando + Treinamento Módulo 1 (ClickUp operacional) + Encerramento formal assinado.

---

## 4. Sustentabilidade do modelo de negócio (Mentoria Agências)

### 4.1 Aprendizados Bravo aplicáveis a próximos clientes

| Aprendizado | Aplicabilidade |
|---|---|
| Framework de discovery (custo-hora real + Automation Score + Ishikawa) | ✅ Universal pra qualquer agência média |
| 3 skills validadas (Aprovação / Agendamento / Análise) | ✅ 80% das agências têm os mesmos 3 gargalos |
| Sprint Board 4 sprints / 100h | ✅ Template direto |
| Lifelines como contrato comportamental | ✅ Reusável (mudam nomes, lógica é a mesma) |
| Stack técnica (OpenClaw + Claude Code + Meta + WhatsApp) | ✅ Replicável; templates de App Review já feitos |
| Pricing R$ 3.900 | ⚠️ Bravo subsidiado — próximo cliente: R$ 6.000-8.000 |

### 4.2 Risco do modelo

- **Bravo está pagando R$ 39/h por algo que custa R$ 80-120/h Eloscope** — se virar referência de pricing pra próximos clientes, modelo não fecha
- **Mitigação:** contrato Bravo tem cláusula de "case piloto" (verificar). Próximas vendas explicar que pricing Bravo foi promocional de lançamento

### 4.3 Indicador de sucesso do modelo (90 dias)

- ✅ Bravo opera as 3 skills sozinha por 30 dias após handoff sem suporte premium
- ✅ Bravo subiu de R$ 20k → R$ 25k+ no faturamento (proxy: liberou Gustavo)
- ✅ Eloscope vendeu cliente 2 com pricing R$ 6-8k usando Bravo como case
- ✅ Replay do projeto cliente 2 leva ≤60h (vs 100h Bravo)

Se 3 dos 4 indicadores baterem em 90 dias = **modelo sustentável, escalar produto**.
Se <2 baterem = **revisitar tese**, pode ser que "Mentoria Agências" precise virar SaaS (Backlog Fase 2 já antecipou isso).

---

## 5. Recomendação executiva: **GO COM AJUSTE**

### 5.1 Seguir o projeto até o fim ✅
Razão: aprendizado, case e replicabilidade compensam o subsídio financeiro. R$ 4-8k de "loss" no projeto isolado = R$ 4-8k de R&D do produto Mentoria Agências.

### 5.2 Cortes preventivos no escopo (decidir esta semana)

| Corte | Quando decidir | Quem aprova |
|---|---|---|
| POC Premiere + Claude Code Rafael Gobi → vira backlog Fase 2 | Hoje (06/05) | Lucas decide; informa Gustavo |
| NPS Day-1 → vira backlog Fase 2 | Hoje (06/05) | Lucas decide |
| Cliente-piloto Skill 1: se Gustavo não nomear até 08/05, vira **dry-run interno** | 08/05 | Lucas decide; informa Gustavo |

### 5.3 Endurecimento de processo (esta semana)

1. **Disparar mensagem-modelo pro Gustavo HOJE** (vide `[[apis-credenciais]]` §4) — chamada 15min objetiva pra resolver os 4 bloqueantes de uma vez
2. **Hugo submete templates WhatsApp + App Review Meta no dia 1 do Sprint 2** (não esperar acessos pra começar)
3. **Validação técnica de plano Hostinger antes de Gustavo comprar** — Hugo dimensiona; evitar refazer setup
4. **Call de alinhamento semanal Gustavo+Lucas** virou bloco fixo segunda 18h até fim do projeto

### 5.4 Critério de NO-GO (revisitar tudo)

Se até 12/05 (próxima segunda) **nenhum dos 4 bloqueantes** do Gustavo destravou:
- Pausar Sprints 2-4 formalmente
- Devolver R$ 1.950 (50% do contrato — proporcional ao não entregue) **OU** renegociar escopo pra entrega 50% (1 skill em vez de 3)
- Bravo vira case "como discovery e fluxo bem-feito vale R$ 1.950 de mão-de-obra mas não substitui decisão do sócio"

---

## 6. Indicadores de acompanhamento (semanal)

| Indicador | Verde | Amarelo | Vermelho |
|---|---|---|---|
| Bloqueantes Gustavo destravados | 4/4 | 2-3/4 | 0-1/4 |
| Sprint atual no prazo | dentro do prazo | desliza ≤3 dias | desliza >3 dias |
| Custo-hora Eloscope acumulado | <100h | 100-130h | >130h |
| Templates Meta aprovados | 3/3 utility | 1-2/3 | nenhum aprovado |
| Acessos clientes finais (GA4) | >10/20 | 5-10/20 | <5/20 |

**Reportar:** toda segunda 18h na call Gustavo+Lucas + atualizar `[[../../../../memory/projects/bravo]]`.

---

## 7. Decisões pendentes (registrar quando tomadas)

- [ ] Lucas aprova cortes 5.2 (POC Gobi + NPS Day-1)
- [ ] Lucas dispara mensagem 5.3 item 1 hoje
- [ ] Hugo confirma plano Hostinger dimensionado (até 07/05)
- [ ] Gustavo responde 4 bloqueantes (até 08/05)
- [ ] Decisão NO-GO ou continuar (12/05 — só se 4/4 ainda travado)

---

*Criado: 2026-05-06 — parecer escrito pelo Lucas, base pra conversa Victor + decisão sobre execução de Sprints 2-4. Atualizar status semanal na seção 6.*
