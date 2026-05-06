---
tipo: handoff
empresa: Agência Bravo
data: 2026-05-05
tags: [cliente/bravo, handoff, acessos, setup]
---

# Handoff — Semana de Coleta de Acessos (05–09/05)

> Pós-call **Definição Skills (30/04)**, com Gustavo aprovado o reframe das 3 skills.
> Esta semana é **destravar o setup técnico** antes da Skill 1 começar (semana de 12/05).

---

## Objetivo da semana

1. Coletar 4 acessos bloqueantes do Gustavo (Hostinger, Meta, nome IA, cliente-piloto)
2. **Lucas** documenta o que foi feito (este vault — concluído com esta sessão)
3. **Victor** mapeia em detalhe as etapas dos próximos processos (skills 1/2/3 — passo a passo)
4. **Hugo** finaliza fluxo da agência no Notion + começa setup VPS quando Hostinger chegar

---

## Sequência operacional

### Segunda 05/05 — Lucas
- [ ] **Enviar mensagem de coleta de acessos pro Gustavo** (template em [[acessos]] — seção "Mensagem-modelo")
  - WhatsApp · listar 4 itens bloqueantes da semana
  - Sondar disponibilidade pra call rápida 15min se houver dúvida em algum item
- [ ] **Redigir aditivo de SLA** (modelo padrão — 48h ou 72h?)
  - Decisão: 72h (mais defensável que 48h, dá margem ao cliente final)
  - Salvar em `projeto/3-contrato/aditivo-sla.md`
- [ ] **Atualizar `framework-processo.md` + `bpmn-basico.md` + `plano-execucao.md`**
  - Refletir as 3 skills validadas (Aprovação · Agendamento · Análise) — substituir Análise/Planejamento/Copy antigas
- [ ] Inserir tarefas novas no ClickUp Bravo Agency (lista em [[#tarefas-clickup-novas]])

### Terça 06/05 — Victor
- [ ] **Etapas detalhadas Skill 1 (Aprovação)** — fluxo passo a passo
  - Quem dispara? Onde fica o quadro? Frequência dos lembretes?
  - Diagrama BPMN ou flowchart
  - Salvar em `projeto/2-pos-discovery/etapas-skill-1-aprovacao.md`
- [ ] **Etapas detalhadas Skill 2 (Agendamento)** — fluxo passo a passo
  - Salvar em `projeto/2-pos-discovery/etapas-skill-2-agendamento.md`
- [ ] **Etapas detalhadas Skill 3 (Análise)** — fluxo passo a passo
  - Salvar em `projeto/2-pos-discovery/etapas-skill-3-analise.md`
- [ ] Validar com Lucas → enviar pro Gustavo no fim do dia

### Quarta 07/05 — Hugo
- [ ] **Documentar fluxo da agência no Notion** (página privada — link no [[_index]])
  - VPS Hostinger · OpenClaw · n8n · WhatsApp Business · Meta Graph
  - Diagrama de arquitetura
- [ ] **Se Hostinger já chegou:** começar setup VPS (Ubuntu + Docker + n8n + Postgres)
- [ ] Listar gaps de acesso ainda pendentes → repassar pro Lucas cobrar

### Quinta 08/05 — Lucas + Victor (Weekly Review 16h)
- [ ] **Weekly Review Eloscope (16h–17h)** — primeiro filtro 3 perguntas
- [ ] Bloco Bravo na pauta:
  - Status acessos (recebidos vs pendentes)
  - Validação dos 3 docs de etapas (Victor) — Gustavo já viu? Comentou?
  - Aditivo SLA — Gustavo mandou pro advogado?
  - Bloqueios pra começar Skill 1 na semana 12/05

### Sexta 09/05 — Time todo
- [ ] **Marco:** todos os acessos bloqueantes recebidos
- [ ] **Marco:** documento de etapas das 3 skills aprovado por Gustavo
- [ ] **Marco:** infra Hostinger funcional (Hugo confirma)
- [ ] Se algum marco em vermelho → escalar com Gustavo na 2ª (12/05)

---

## Tarefas ClickUp novas

> Inserir na pasta "Bravo Agency" (workspace `90171169593`) — Lucas insere segunda 05/05.

| # | Task | Lista | Owner | Prazo | Prioridade |
|---|------|-------|-------|-------|------------|
| 1 | Coleta acessos Gustavo (Hostinger + Meta + nome IA + piloto) | Comercial | Lucas | 09/05 | Urgent |
| 2 | Redigir aditivo SLA (72h) | Comercial | Lucas | 06/05 | High |
| 3 | Atualizar framework-processo + bpmn + plano-execucao | Delivery | Lucas | 06/05 | Normal |
| 4 | Documentar etapas Skill 1 (Aprovação) | Delivery | Victor | 06/05 | High |
| 5 | Documentar etapas Skill 2 (Agendamento Meta) | Delivery | Victor | 06/05 | High |
| 6 | Documentar etapas Skill 3 (Análise mensal) | Delivery | Victor | 06/05 | High |
| 7 | Documentar fluxo da agência (Notion) — VPS + n8n + APIs | Delivery | Hugo | 07/05 | High |
| 8 | Setup VPS Hostinger (após receber acesso) | Delivery | Hugo | 09/05 | Urgent |
| 9 | Validar prazo SLA com Gustavo (advogado) | Comercial | Gustavo | 12/05 | Normal |
| 10 | Definir cliente-piloto Skill 1 com Gustavo | Comercial | Lucas | 09/05 | High |
| 11 | Cronometrar análise mensal real (1 cliente Bravo) | Delivery | Lucas + Gustavo | 03/06 | Normal |
| 12 | Weekly Review com bloco Bravo | Operações | Lucas | 08/05 | Normal |
| 13 | Refinar script treinamento Thiago (Semana 4) | Delivery | Lucas | 23/05 | Normal |
| 14 | Confirmar reunião presencial 13h45 com Thiago (treinamento) | Comercial | Lucas | 19/05 | Normal |

---

## Marcos do projeto (referência)

| Data | Marco | Status |
|------|-------|--------|
| 25/04 | Discovery presencial | ✅ |
| 30/04 | Reframe das skills aprovado | ✅ |
| 09/05 | Acessos + etapas + infra prontos | 🟡 em curso |
| 16/05 | Skill 1 funcional com cliente-piloto | ⬜ |
| 23/05 | Skill 2 + Skill 3 funcionais | ⬜ |
| 30/05 | Treinamento Thiago concluído | ⬜ |
| 08/06 | Fim do suporte 30 dias | ⬜ |

---

*Criado: 2026-05-03*
