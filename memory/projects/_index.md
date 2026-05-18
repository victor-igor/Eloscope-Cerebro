# Projetos — Índice Geral

> Fonte de verdade para status de todos os projetos.
> Detalhes em `memory/projects/{nome}.md`.
> Atualizar sempre que um projeto mudar de status.

---

## 🟢 Ativos

| Projeto | Status | Métrica-chave | Arquivo |
|---------|--------|---------------|---------|
| Eloscope (estúdio) | 🟢 Ativo | — | — |
| Cerebro / Segundo Cérebro | 🟢 Ativo | rituais operacionais + 3 agentes remotos (cockpit, prep weekly, revisão maio) | — |
| Elite Maqlam | 🟢 Ativo | R$1.197/mês trial (3 meses) · cashback rodando 04/05 · BDR Bumble ativado · 2 chips aquecendo | maqlam.md |

---

## 🔨 Em Construção

| Projeto | Status | Próximo Marco | Arquivo |
|---------|--------|---------------|---------|
| Eloscope Elo OS | 🔨 Em construção | Fechar 2-3 clientes beta (60 dias) | sales-os.md |
| Campos Joias — AI Dashboard | 🔨 Em construção | Implementar módulo RAG (nova sessão) | campos-joias.md |
| Eloscope Landing Page | 🔨 Em construção | Redesign radical + deploy Vercel | eloscope-lp.md |
| Bravo Agency — Sistema Completo | 🟢 Ativo | Discovery 26/04, entrega ~09/05 | bravo-agency.md |
| Mentoria Agências | 🔨 Em construção | Validar pricing para próximos leads | mentoria-agencias.md |
| Morgana Sales | 🔥 Ativo — API oficial bloqueada por Autem | Token Autem hoje (08/05) → número `5517981542837` → cartão → templates → campanha 10–11/05 | morgana-sales.md |
| Enertelles | 🔨 Lead em fechamento | Call Telles + Alex 30/04 — apresentar proposta v4 | enertelles.md |
| PeleVet | 🟡 Proposta entregue — aguardando sócias | Ligação semana 02/06 (Sílvias voltam de viagem 30/05) | pele-vet.md |
| elobrain (framework) | 🔨 Em construção | Instalar gbrain local + primeiro sync + runbook | elobrain.md |

---

## ⏸️ Pausados

| Projeto | Motivo | Retomar quando | Arquivo |
|---------|--------|----------------|---------|
| [Projeto 3] | [motivo] | [condição] | [projeto-3.md] |

---

## ✅ Concluídos / Arquivados

| Projeto | Resultado | Data |
|---------|-----------|------|
| [Projeto 4] | [resultado] | [data] |

---

## Mudanças Recentes

- [13/05] **elobrain (framework)** — fork público `victor-igor/elobrain` adotado como framework instalável (não embedded). Schema `brain` aplicado no Supabase Elosystem (32 tabelas, pgvector HNSW, validado end-to-end com FTS + vector search). `.env` configurado, skills `/salve` e `/buscar-memoria` atualizadas com fallback defensivo. MCP server registrado. Vai virar produto vendido a clientes (Cerebro Claude Code by Eloscope). Pendente: instalar `gbrain` localmente + primeiro sync + runbook
- [09/05] **PeleVet** — discovery 07/05 consolidado em `areas/vendas/oportunidades/pele_vet/`; análise de mercado SJRP feita (TAM 28.500 cães/ano dermato, <3% capturado); reunião técnica 11/05 13h com Vítor. Squad `discovery-analyzer` arquitetado pra reaproveitar fluxo (3 agents paralelos + Cassandra)
- [03/05] **Elite Maqlam** — projeto documentado em `maqlam.md` (estrutura sistema, módulos, edge functions, chips); 11 tasks criadas no ClickUp (cashback, BDR, CS, aquecimento chips 04-08/05)
- [02/05] **Vendas** — convenção CRM definida (oportunidades/ vs clientes/) + SPIN Playbook Eloscope v0.2 criado em `areas/vendas/metodologia/` (553 linhas) + plano do squad sales-call-analyzer (4 agentes + skill `/analisar-call`)
- [01/05] **Cerebro** — rituais operacionais Semana 1 colados (filtro 3 perguntas + weekly review template + spec /triagem); SessionStart hook ativado; 3 routines remotas Anthropic Cloud com saída via WhatsApp uazapi (cockpit diário, prep weekly, revisão mensal)
- [29/04] **Bravo Agency** — 1ª parcela R$975 paga; ClickUp Skills renomeadas para reframe pós-discovery; aditivo SLA + framework docs entram no escopo até 02/05
- [29/04] **Enertelles** — call 30/04 com Telles + Alex confirmada; vínculo Bloco A ↔ Elo OS reforçado como diferencial
- [28/04] **Morgana Sales** — treinamento presencial; chatwoot fora do uso definitivo; sistema próprio `elo.morgana.com.br`; meta coletiva sem comissão individual; IA de ativação de base como modelo principal; Matheus Campos formalizado como ponte (sócio + marido Dra. Morgana + dono Campos Joia)
- [24/04] **Bravo Agency** — plano de execução, framework de processo, análise de custo, discovery script criados + ClickUp estruturado (33 tarefas)
- [23/04] **Bravo Agency fechou** — Opção B (R$3.900), discovery sábado 26/04, pasta de projeto criada
- [21/04] Mentoria Agências — arquivos movidos para cerebro; lead Gustavo Bravo organizado em areas/vendas/clientes/gustavo-bravo/
- [21/04] Mentoria Agências — proposta Combo revisada (co-construção + fluxo real + n8n)
- [07/05] **Elo OS** — playbook comercial copiado para cerebro (`02-comercial/playbook.md`); slide ROI redesenhado (lógica LP: leads não atendidos × recuperação); pesquisa de mercado completa criada (`operacao-eloscope/pesquisa-mercado.md`)
- [07/05] **Campos Joias** — projeto documentado; planejamento do módulo RAG iniciado (Opção A: implementação completa); próxima sessão: implementar

---

*Atualizado: 09/05/2026*

| ReabilitaCao | 🟢 Ativo | Sistema veterinário — Epic 28 (agendamento recorrente) aguarda implementação | reabilitacao.md |
