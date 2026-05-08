# Bravo Agency — Sistema Completo

> Status: 🟡 Sprint 2 travado (06/05) — 4 bloqueantes vermelhos no Gustavo. Recomendação: GO COM AJUSTE (vide `[[../../areas/vendas/clientes/bravo-agencia/operacional/analise-sustentabilidade]]`)
>
> **Fonte única APIs/credenciais:** `[[../../areas/vendas/clientes/bravo-agencia/operacional/apis-credenciais]]`
> **Plano oficial:** Notion Sprint Board (PDFs em `bravo-agencia/operacional/`)
> **Sync ClickUp ↔ Notion:** `[[../../areas/vendas/clientes/bravo-agencia/operacional/clickup-sync-map]]` (execução pendente)

## O que é
Primeiro cliente do modelo Mentoria Agências. Mapeamento de processos + infraestrutura IA + 3 skills + treinamento para a Bravo escalar de R$ 20k → R$ 30k de faturamento sem contratar.

## Responsáveis
- **Lucas:** Delivery lead, mapeamento, setup infra, skills, treinamento
- **Gustavo Bravo:** Sócio/decisor, comercial 100% (atua como bombeiro na operação — pró-labore não divulgado)
- **Rafa (Rafael):** Design, planejamento, Content Machine — presencial no discovery (R$ 2.200/mês)
- **Ravi:** Multifunção, socorre edição — presencial no discovery (R$ 2.000/mês)
- **Rafael Gobi:** Editor de vídeo (gargalo crítico, remoto, ausente do discovery, transcrito como "Gabi") — R$ 1.700/mês

## Dados do Projeto
- **Investimento:** R$ 3.900 (4 × R$ 975)
- **Custos recorrentes (Bravo):** ~R$ 130-280/mês (VPS + API IA)
- **Stack:** OpenClaw + Claude Code + GitHub + n8n (comunicação) + Vercel (LPs)

## Custo Operacional Bravo (levantado 26/04, sem Gustavo)
- **Pessoas (3):** R$ 5.900
- **Ferramentas (16 itens):** R$ 1.265,50
- **Infra (estúdio + utilidades):** R$ 2.200
- **Total:** R$ 9.365,50/mês
- **Custo-hora real:** ~R$ 26/h (~355h produtivas)
- **Custo-hora por pessoa:** Rafa R$ 31 · Ravi R$ 29 · Gobi R$ 21
- **Faturamento:** R$ 20k atual (meta R$ 30k), 99% mensalista, 300 estáticos + 60 vídeos/mês
- **Custo/cliente:** ~R$ 468 · **Margem ~53%** antes pró-labore

## Timeline (atualizada 06/05 — alinhada ao Notion Sprint Board)
| Data | Evento |
|------|--------|
| 20/04/2026 | Reunião exploratória (Google Meet, 73min) |
| 23/04/2026 | Proposta apresentada, Gustavo fechou Opção B |
| 24/04/2026 | Plano de execução + frameworks + ClickUp estruturado (plano antigo) |
| 25/04/2026 | Discovery presencial (sábado) |
| 26/04/2026 | Reframe + retrofit nomes + reorganização pasta + custos preenchidos |
| 30/04/2026 | Deck pós-discovery gerado + Sprint Board novo no Notion |
| 28/04→02/05 | **Sprint 1** — Setup + processo + escopo travado (parcial — bloqueantes Gustavo) |
| 05/05→09/05 | **Sprint 2** — Skill 1 com piloto real (em curso, travado) |
| 06/05/2026 | apis-credenciais.md + analise-sustentabilidade.md + clickup-sync-map.md criados |
| 12/05→16/05 | **Sprint 3** — Skill 2 + Skill 3 operacionais |
| 19/05→23/05 | **Sprint 4** — Treinamento + handoff final |
| 24/05→23/06 | Suporte pós-entrega (30 dias) |

## Entregas
1. Discovery presencial ✅
2. Documento de processo (módulo a módulo)
3. Infraestrutura (VPS + OpenClaw + GitHub + Claude Code)
4. 3 skills testadas
5. Documentação das skills
6. Treinamento (4 módulos, 5h total)
7. Suporte 30 dias

## Decisões Tomadas
- [23/04] Opção B escolhida (sistema completo, Eloscope monta tudo)
- [23/04] Stack: OpenClaw + Claude Code + GitHub (sem n8n no escopo de entrega)
- [24/04] ClickUp estruturado com 6 listas e 33 tarefas
- [24/04] Framework de discovery: custo-hora real + Automation Score + Ishikawa
- [25/04] **Reframe das 3 skills:** Aprovação SLA / Agendador multi-cliente / Análise mensal (substitui Análise/Planejamento/Copy)
- [26/04] **Retrofit de nomes**: "Javi" → Ravi, "Gabi" → Rafael Gobi (erros de Whisper). Há dois Rafael
- [26/04] **Pasta reorganizada** em fases: 0-pre-discovery / 1-discovery / 2-pos-discovery / 3-contrato + README índice
- [26/04] **Custo operacional levantado** (sem Gustavo): R$ 9.365,50/mês
- [30/04] **Deck pós-discovery em formato HTML→PDF** (não Pandoc/.md) — 15 slides, tom "espelho honesto", inclui o que sai do escopo
- [01/05] **Pricing removido do deck** — R$ 3.900 não aparece mais na apresentação (slide 14); pricing fica para discussão verbal
- [01/05] **Metodologia de custo** — `metodologia-custo-hora.html` criado como doc interno: fórmula custo-hora, custo processo a processo, precisão de cada medição, pendências abertas

## Insight de negócio (descoberto 26/04)
Os 3 processos mais caros (criativo R$ 2.170, edição R$ 1.260, captação R$ 1.040) **não são automatizáveis** ou já estão (Content Machine). Os candidatos a skill (Aprovação R$ 260 + Agendador R$ 270) custam pouco em horas-Bravo, **mas consomem o Gustavo**, que é o único comercial. Liberar ~20h/mês do Gustavo = caminho pra fechar a meta R$ 20k → R$ 30k.

## Pendências (08/05 — atualizado)

### 🔴 Bloqueantes operacionais (Lucas — em execução)
- [ ] **OpenClaw — concluir onboarding** (parou no meio em 08/05) → próximo passo: instalar Nginx → handover Hugo
- [ ] **Acesso Gemini Code/Codex** — Lucas cobrar Gustavo (sem isso ambiente IA não configura)
- [ ] **Número WhatsApp Bravo** — só resolvido após tempo perdido em 08/05; revalidar amanhã

### 🟢 Concluído em 08/05
- [x] Hostinger configurado e domínio apontado
- [x] OpenClaw instalação iniciada (não finalizada)
- [x] Acessos coletados aos poucos: Facebook, Hostinger, ClickUp

### 🔴 Bloqueantes vermelhos (travam Sprint 2 — destravar até 08/05)
- [ ] Acesso Hostinger (Gustavo) — ✅ resolvido 08/05
- [ ] Nome do assistente IA (Gustavo)
- [ ] Cliente-piloto Skill 1 definido (Gustavo)
- [ ] Prazo SLA 48h ou 72h? (Gustavo + advogado)

### 🟡 Sprint 2 (semana 05-09/05)
- [ ] Disparar mensagem-modelo Gustavo HOJE (`apis-credenciais.md` §4)
- [ ] Hugo redige + submete 3 templates utility WhatsApp (24-48h aprovação Meta)
- [ ] Hugo submete App Review Meta `instagram_content_publish` + `pages_manage_posts` (3-7 dias)
- [ ] Lucas executa sync ClickUp (vide `clickup-sync-map.md`) — 1h via MCP

### 🟡 Sprint 3+ (semanas seguintes)
- [ ] Cronometrar análise mensal real (1 cliente Bravo, dia 1-3 do mês)
- [ ] Lista 20 clientes (Gustavo) — nome, segmento, link IG, link GA4
- [ ] Coordenar acesso GA4 dos 20 clientes (Gustavo + tutorial 1-pager)

### Decisões pendentes
- [ ] Lucas aprova cortes de escopo: POC Premiere + NPS Day-1 → Backlog Fase 2
- [ ] Decisão NO-GO ou continuar (12/05 — só se 4/4 bloqueantes ainda travados)
- [ ] Pró-labore Gustavo (não divulgado — tratar como capacidade variável)

## Arquivos (estrutura nova 26/04)
```
projeto/
├── README.md (índice navegável)
├── 0-pre-discovery/  → plano-execucao, cronograma, discovery-script, framework-processo, analise-custo-processo
├── 1-discovery/      → 00-sequencia, 01-apresentacao, Transcricao, levantamento-discovery
├── 2-pos-discovery/  → causa-efeito, bpmn-basico, proposta-pos-discovery, processo-detalhado
│                        apresentacao-bravo-pos-discovery.html (deck 15 slides, sem pricing)
│                        metodologia-custo-hora.html (doc interno — fórmula + custo processo a processo)
└── 3-contrato/       → contrato (md/html/pdf)
```

---
*Criado: 24/04/2026 · Atualizado: 26/04/2026*
