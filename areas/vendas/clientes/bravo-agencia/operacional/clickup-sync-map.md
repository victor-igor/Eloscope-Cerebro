---
tipo: operacional
empresa: Agência Bravo
tags: [cliente/bravo, clickup, sync, notion]
status: ativo
data: 2026-05-06
relacionados: ["[[apis-credenciais]]", "[[analise-sustentabilidade]]"]
---

# Sincronização ClickUp ↔ Notion Sprint Board

> Mapeamento das **55 tasks ClickUp** (lista `901713503273`, criada 24/04) para o **Sprint Board do Notion** (plano oficial atual, 4 sprints/100h). Tasks órfãs do plano antigo serão **arquivadas com tag `legado-plano-antigo`**, não deletadas.

> [!info] Contexto da decisão
> ClickUp foi montado em 24/04 com plano "etapas 1-6". Após discovery (25-26/04) houve reframe das 3 skills, e em 30/04 surgiu o Sprint Board novo (Notion). ClickUp ficou desincronizado. Em vez de refazer ClickUp do zero, mapeamos.

---

## 1. Sprint Board do Notion — 35 tasks oficiais

### Sprint 1 — 28/04→02/05 (20h) — Setup + processo + escopo travado
1. VPS + OpenClaw instalado e testado (Hugo, 4h)
2. Workspace ClickUp da Bravo configurado (Hugo, 3h)
3. GitHub do projeto inicializado (Hugo, 1h)
4. Documento de processo validado com Gustavo (Lucas+Gustavo, 2h)
5. Cláusula de SLA redigida (modelo) (Lucas, 2h)
6. Cliente-piloto da Skill 1 definido (Gustavo) 🔴
7. Prazo SLA acordado 48h ou 72h? (Gustavo) 🔴
8. Typeform de briefing unificado entregue (Hugo, 3h)
9. Call de alinhamento semanal realizada (Lucas+Gustavo, 1h)

### Sprint 2 — 05/05→09/05 (25h) — Skill 1 Aprovação
10. Agente OpenClaw Skill 1 desenvolvido (Hugo, 8h)
11. Templates de mensagem 3 tons escritos (Hugo+Gustavo, 2h)
12. Integração WhatsApp Business API testada (Hugo, 4h)
13. Pipeline de status no ClickUp configurado (Hugo, 2h)
14. Ciclo completo testado internamente (Hugo, 3h)
15. Ciclo rodado com cliente-piloto real (Hugo+Ravi, 3h)
16. Escalonamento Gustavo testado 72h path (Hugo, 1h)
17. Sign-off do Gustavo por escrito (Gustavo)

### Sprint 3 — 12/05→16/05 (30h) — Skill 2 + Skill 3
18. Task template de post criada no ClickUp (Hugo, 2h)
19. Google Sheets schema criado Modo B (Hugo, 1h)
20. Agente OpenClaw Skill 2 desenvolvido (Hugo, 8h)
21. Integração Meta Graph API testada (Hugo+Ravi, 4h)
22. Posts de 2 clientes agendados via API (Hugo+Ravi, 3h)
23. Handoff Skill 1→Skill 2 testado end-to-end (Hugo, 2h)
24. Agente OpenClaw Skill 3 desenvolvido (Hugo, 6h)
25. Análise mensal rodada com 1 cliente real (Hugo+Gustavo, 2h)
26. NPS Day-1 ativo bônus (Hugo, 1h) ⚠️ candidato a corte
27. Sign-off Ravi (Skill 2) + Gustavo (Skill 3)

### Sprint 4 — 19/05→23/05 (15h) — Treinamento + handoff
28. Módulo 1 — ClickUp operacional (Hugo, 1,5h)
29. Módulo 2 — Skill 1 na prática Ravi (Hugo, 1,5h)
30. Módulo 3 — Skill 2 na prática Ravi+Rafael (Hugo, 1,5h)
31. Módulo 4 — Skill 3 ritual mensal Gustavo (Hugo, 1,5h)
32. Documentação operacional final entregue (Hugo, 3h)
33. POC Premiere + Claude Code Rafael Gobi (Hugo+RGobi, 3h) ⚠️ candidato a corte
34. Backlog Fase 2 apresentado pro Gustavo (Hugo, 1h)
35. Encerramento formal assinado (Hugo+Gustavo)

### Suporte 24/05→23/06 (10h buffer)
— sem tasks fixas; reativo

---

## 2. Mapping ClickUp → Sprint Board

### Tasks ClickUp que **mapeiam direto** (manter, atualizar nome+due+tag)

| ClickUp ID | Nome ClickUp atual | Vira task Sprint Board # | Ação |
|---|---|---|---|
| 86e12jbkz | ETAPA 2 — Provisionar VPS | #1 (parte) | Renomear + due 02/05 + tag `sprint-1` |
| 86e12jbm1 | ETAPA 2 — Instalar OpenClaw no VPS | #1 (parte) | Subtask de #1 ou merge com 86e12jbkz |
| 86e12jbm8 | ETAPA 2 — Criar repo GitHub da Bravo | #3 | Renomear + due 02/05 + tag `sprint-1` |
| 86e12jbmf | ETAPA 2 — Configurar Claude Code no ambiente | #1 (parte) | Subtask de VPS |
| 86e12jbmq | ETAPA 2 — Estrutura de pastas por cliente | #2 (parte) | Subtask Workspace ClickUp |
| 86e12jbmv | ETAPA 2 — Documentar credenciais e acessos | linka [[apis-credenciais]] | Renomear "Coletar credenciais conforme apis-credenciais.md" + tag `sprint-1` |
| 86e12jbmx | ETAPA 2 — Testar acesso remoto do time | #1 (parte) | Subtask VPS |
| 86e17mqj2 | ETAPA 2 — Setup VPS Hostinger (Ubuntu+Docker+n8n+Postgres) | #1 (definitiva) | **Manter como task principal #1** + due 02/05 + tag `sprint-1` |
| 86e17mqe3 | ETAPA 2 — Documentar fluxo da agência no Notion | já feito (Notion docs prontos) | Marcar **completed** |
| 86e17mpu1 | ETAPA 2 — Coleta de acessos Gustavo | linka mensagem-modelo apis-credenciais §4 | Renomear + due 07/05 + tag `sprint-1` urgent |
| 86e150chx | ETAPA 3 — Redigir aditivo SLA contratual 48h ou 72h | #5 + #7 | Quebrar em 2: redigir modelo (Lucas) + decisão prazo (Gustavo) |
| 86e17mq5c | ETAPA 3 — Validar prazo SLA 72h com Gustavo + advogado | #7 | Renomear + due 07/05 + tag `sprint-1` 🔴 |
| 86e17mpvj | ETAPA 3 — Redigir aditivo de SLA 72h — contrato Bravo | #5 | Renomear + due 02/05 + tag `sprint-1` |
| 86e17mq6n | ETAPA 4 — Definir cliente-piloto da Skill 1 com Gustavo | #6 | Renomear + due 07/05 + tag `sprint-1` 🔴 |
| 86e17mq7u | ETAPA 4 — Cronometrar análise mensal real | #25 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jbyg | ETAPA 4 — Skill 1: Aprovação automatizada com SLA — build | #10 | Renomear "Sprint 2 — Agente OpenClaw Skill 1 desenvolvido" + due 09/05 + tag `sprint-2` |
| 86e12jbyw | ETAPA 4 — Skill 1: Aprovação — testar com cliente-piloto | #15 | Renomear + due 09/05 + tag `sprint-2` |
| 86e12jbz4 | ETAPA 4 — Skill 2: Agendador multi-cliente — build | #20 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jbz9 | ETAPA 4 — Skill 2: Agendador — testar com 2 clientes | #22 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jbzn | ETAPA 4 — Skill 3: Análise mensal estruturada — build | #24 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jc02 | ETAPA 4 — Skill 3: Análise mensal — testar com cliente real | #25 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jc12 | ETAPA 4 — Teste integrado: 3 skills em sequência | #23 | Renomear + due 16/05 + tag `sprint-3` |
| 86e12jc1h | ETAPA 4 — Documentação final das 3 skills | #32 | Renomear + due 23/05 + tag `sprint-4` |
| 86e12jc2e | ETAPA 5 — Módulo 01 — Fundamentos | #28 | Renomear + due 19/05 + tag `sprint-4` |
| 86e12jc30 | ETAPA 5 — Módulo 02 — Operando Skills | #29 | Renomear + due 20/05 + tag `sprint-4` |
| 86e12jc3m | ETAPA 5 — Módulo 03 — Uso no Dia a Dia | #30 | Renomear + due 21/05 + tag `sprint-4` |
| 86e12jc4b | ETAPA 5 — Módulo 04 — Quando Algo Muda | #31 | Renomear + due 22/05 + tag `sprint-4` |
| 86e12jc67 | ETAPA 5 — Validar que time opera sem ajuda | critério encerramento Sprint 4 | Manter + due 23/05 + tag `sprint-4` |
| 86e12jc6t | ETAPA 6 — Check-in semana 1 pós-entrega | suporte | Manter + due 31/05 + tag `suporte` |
| 86e12jc6x | ETAPA 6 — Check-in semana 2 pós-entrega | suporte | Manter + due 07/06 + tag `suporte` |
| 86e12jc77 | ETAPA 6 — Check-in semana 3 pós-entrega | suporte | Manter + due 14/06 + tag `suporte` |
| 86e12jc7d | ETAPA 6 — Encerramento do suporte | suporte | Manter + due 23/06 + tag `suporte` |

**Subtotal mantidas:** ~32 tasks ClickUp viram ~25 tasks Sprint Board (algumas merge).

### Tasks ClickUp **órfãs** — arquivar com tag `legado-plano-antigo`

| ClickUp ID | Nome | Por que arquivar |
|---|---|---|
| 86e16a2uk | ETAPA 2 — Solicitar e organizar acesso (Hostinger + Drive) | Substituída por 86e17mpu1 + apis-credenciais.md |
| 86e16a2v7 | ETAPA 3 — Desenhar fluxos operacionais e de automação no Miro | Já feito — fluxos-miro.md + Lifelines do Notion |
| 86e16a2x8 | ETAPA 3 — Enviar fluxos e estrutura para validação do cliente | Substituída por #4 (Doc validado com Gustavo) |
| 86e16a2yr | ETAPA 4 — Estruturar definição das skills/agentes | Já feito — proposta-pos-discovery.md |
| 86e150ck1 | ETAPA 3 — Atualizar framework-processo + bpmn-basico + plano-execucao | Versão antiga; consolidado em Notion + vault |
| 86e12jbn1 | ETAPA 3 — Transcrever discovery em fluxograma | Já feito — bpmn-basico.md + Lifelines |
| 86e12jbn8 | ETAPA 3 — Documentar módulos: entrada → processo → saída | Já feito — Lifelines do Notion |
| 86e12jbnj | ETAPA 3 — Marcar pontos de entrada da IA | Já feito — Lifelines |
| 86e12jbnr | ETAPA 3 — Definir handoff files (JSON entre agentes) | Vira parte de #23 (Handoff Skill 1→Skill 2) |
| 86e12jbnw | ETAPA 3 — Enviar documento para Gustavo validar | Substituída por #4 |
| 86e12jbp1 | ETAPA 3 — Versão final aprovada | Substituída por #4 |
| 86e12jc0h | ETAPA 4 — Ajustes pós-feedback Rafael/Javi | Vira evento dentro do Sprint, não task separada |
| 86e12jbmq | ETAPA 2 — Estrutura de pastas por cliente | Já estabelecido no vault local |
| 86e17mpwk | ETAPA 3 — Atualizar framework-processo + bpmn-basico + plano-execucao com 3 skills validadas | Duplicada — versão antiga 86e150ck1 |
| 86e17mpxv | ETAPA 4 — Documentar etapas Skill 1 — Follow-up de Aprovação | Lifeline Skill 1 já no Notion |
| 86e17mpzg | ETAPA 4 — Documentar etapas Skill 2 — Agendamento Meta Business | Lifeline Skill 2 já no Notion |
| 86e17mq10 | ETAPA 4 — Documentar etapas Skill 3 — Análise mensal | Lifeline Skill 3 já no Notion |
| 86e150ckm | ETAPA 5 — Confirmar Ravi no treinamento | Vira critério da call de alinhamento Lucas+Gustavo |
| 86e17mqa3 | ETAPA 5 — Confirmar reunião presencial 13h45 com Thiago (treinamento) | Pertence a outro projeto (Thiago = Bravo? confirmar — pode ser legado) |
| 86e17mq8r | ETAPA 5 — Refinar script treinamento Thiago — 4 módulos | Ver acima — provavelmente legado |
| 86e12vkxw | ETAPA 5 — Refinar script de treinamento Thiago | Duplicada |
| 86e12jc4b/3m/30/2e | (módulos 1-4 — já mapeadas acima como Sprint 4) | manter |
| 86e12jc51 | ETAPA 5 — Gravar todas as calls de treinamento | Vira regra padrão, não task; ou virar 1 sub-checklist em #28 |
| 86e12jc5c | ETAPA 5 — Material escrito de referência | Vira parte de #32 (Documentação operacional final) |
| 86e12jc6j | ETAPA 6 — Definir canal de suporte (WhatsApp) | Decisão simples — fazer agora, sem virar task |

**Subtotal a arquivar:** ~23 tasks.

### Tasks Sprint Board **a criar** no ClickUp (não existem)

| # Sprint Board | Nome | Owner | Sprint | Due |
|---|---|---|---|---|
| 4 | Documento de processo validado com Gustavo | Lucas+Gustavo | 1 | 02/05 (atrasada) |
| 8 | Typeform de briefing unificado entregue | Hugo | 1 | 02/05 (atrasada) |
| 9 | Call de alinhamento semanal | Lucas+Gustavo | recorrente | toda segunda 18h |
| 11 | Templates de mensagem 3 tons + 3 templates utility WhatsApp aprovados Meta | Hugo+Gustavo | 2 | 09/05 |
| 12 | Integração WhatsApp Business API testada (com phone_number_id Bravo) | Hugo | 2 | 09/05 |
| 13 | Pipeline status ClickUp (campo + automation) | Hugo | 2 | 09/05 |
| 14 | Ciclo completo testado internamente | Hugo | 2 | 09/05 |
| 16 | Escalonamento Gustavo testado (72h path) | Hugo | 2 | 09/05 |
| 17 | Sign-off Gustavo por escrito Skill 1 | Gustavo | 2 | 09/05 |
| 18 | Task template de post no ClickUp (custom fields) | Hugo | 3 | 12/05 |
| 19 | Google Sheets schema Modo B | Hugo | 3 | 12/05 |
| 21 | Integração Meta Graph API testada (App Review submetido) | Hugo+Ravi | 3 | 16/05 |
| 27 | Sign-off Ravi (Skill 2) + Gustavo (Skill 3) | Ravi+Gustavo | 3 | 16/05 |
| 34 | Backlog Fase 2 apresentado pro Gustavo | Hugo | 4 | 23/05 |
| 35 | Encerramento formal assinado | Hugo+Gustavo | 4 | 23/05 |
| **Acessos** | 8 sub-tasks de cobrança credenciais Gustavo (vide apis-credenciais §5) | Gustavo (assignee) | 1-3 | conforme tabela |

**Subtotal a criar:** ~16 tasks novas + 8 tasks de cobrança = 24 novas.

---

## 3. Plano de execução do sync

> **Recomendação:** fazer em batch num bloco de 1h (Lucas) usando MCP ClickUp. Não fazer task por task na UI.

### Etapa 1 — Criar tags na lista (manual no ClickUp UI)
- `sprint-1`, `sprint-2`, `sprint-3`, `sprint-4`, `suporte`, `legado-plano-antigo`, `acesso-bravo`, `bloqueante-vermelho`

### Etapa 2 — Arquivar órfãs (via MCP `clickup_update_task`)
Para cada task da seção "órfãs": adicionar tag `legado-plano-antigo` + mover pra status `closed` (ou criar status `arquivado` na lista) + comentário explicando "consolidada em [link Sprint Board]".

### Etapa 3 — Atualizar mantidas (via MCP `clickup_update_task`)
Para cada task da seção "mapeiam direto": atualizar nome, due_date, priority, tag conforme tabela.

### Etapa 4 — Criar novas (via MCP `clickup_create_task`)
Para cada task da seção "a criar": criar com nome, owner, due_date, tag, descrição (entregável 2 do plano).

### Etapa 5 — Verificação manual
Lucas abre ClickUp, filtra por tag `sprint-2`, conta 8 tasks (Sprint 2). Repete pra outros sprints.

---

## 4. Resultado esperado

| Antes | Depois |
|---|---|
| 55 tasks bagunçadas, datas vencidas, sem descrição | 35 tasks alinhadas ao Sprint Board + 8 cobrança Gustavo + 23 arquivadas |
| Plano antigo (etapas 1-6) ainda visível | Tags `sprint-N` + filtros = visão por sprint |
| Tasks duplicadas (ex: 2 versões de "atualizar framework-processo") | Consolidadas |
| Sem visibilidade de bloqueantes | Tag `bloqueante-vermelho` + priority urgent destaca |

---

*Criado: 2026-05-06 — base pra execução do sync ClickUp. Próximo passo: Lucas executar Etapas 1-5 (estimativa ~1h via MCP).*
