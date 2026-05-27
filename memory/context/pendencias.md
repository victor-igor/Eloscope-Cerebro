---
title: Pendências Ativas
type: note
---

# Pendências Ativas

> Formato: `[DATA] Aguardando [QUEM] sobre [O QUÊ]`
> Atualizar: sempre que uma pendência for criada ou resolvida.
> ✅ = resolvida (mover para "Resolvidas" no final do mês)

---

## 🔴 Críticas (bloqueiam progresso)

- ✅ [21/05/2026] **Maqlam — integração Chatwoot no painel** — RESOLVIDO 21/05 · erro "Configuração não encontrada" era RLS escondendo row `integration_settings` com `organization_id` placeholder errado (fix no banco) + status sempre "Desconectado" por ler `status.enabled` em vez de `chatwoot_enabled` (fix `InstancesManager.tsx`, commit `bb0bed3`). Agora mostra inbox conectada e reconecta na mesma. Resolve bloqueador B-1.4-A. ⚠️ Auditar outras tabelas multi-tenant com org_id placeholder `0000...0001`. · Victor
- [22/05/2026] 🔥 **Abrir PR `feat/meta-channel-setup`** · branch da integração Meta WhatsApp fase 1 (canal + templates + campanha) está em produção no Supabase mas PR não foi aberto por falta de `gh auth login` · ClickUp `86e1gwd6v` (urgent, due 22/05) · Lucas
- [22/05/2026] 🔥 **Validar Chatwoot recebendo WhatsApp pós-update de Rails** · Maqlam e Morgana — verificar se mensagens entram corretamente depois do ajuste de versão feito em 21/05 (~1h de trabalho com Victor) · ClickUp `86e1gwd7v` (high, due 22/05) · Lucas
- [22/05/2026] **Conferir possível número Maqlam não anotado** · audit de 21/05 mostrou 6 pagos / 9 verificados — sobra dúvida se um número Maqlam ficou de fora · ClickUp `86e1gwd8k` (high, due 22/05) · Lucas
- [22/05/2026] **Próxima etapa Meta — desdobrada por canal** (coexistência ≠ direto):
  - **Maqlam — envio via WhatsApp Cloud API oficial direto + replicação Chatwoot** · ClickUp `86e1gwd9t` (high, Elite Maqlam)
  - **Morgana — envio via Dualhook (coexistência) → n8n → replicação Chatwoot** · ClickUp `86e1gwda3` (high, Morgana)
- [22/05/2026] **Story 8.2 — Reorganizar wizard de campanha (separar etapa canal/agentes)** · projeto Morgana · ClickUp `86e1gwd96` (high) · Lucas
- [22/05/2026] **Story 8.3 — Agendamento de campanha em ondas (lotes + horário por lote)** · projeto Morgana · ClickUp `86e1gwd9e` (high) · Lucas
- [22/05/2026] **Sites Evoled — Câmara de Urupês + ACEU Uchoa** · postar e-mails/docs Urupês + atualizar página ACEU Uchoa · ClickUp `86e1gwdan` e `86e1gwdb1` (normal, due 22/05) · Lucas
- [19/05/2026] **ReabilitaCão — bug trigger sync_queue pula INSERT quando pai foi soft-deletado** · descoberto investigando agendamento Ivy/Camila (456936) que sumiu do Google Calendar da Francine · pai 456825 foi soft-deletado e o substituto 456936 nunca entrou na sync_queue · padrão "delete velho + insert novo apontando pro velho via `recorrencia_pai_id`" usado pelo sistema em edições · `tr_enqueue_calendar_sync` provavelmente pula o INSERT quando pai existe deletado (lógica "edição já tratada pelo pai", mas pai foi deletado, deixando órfão) · Victor · pode afetar outros casos no histórico
- ✅ [15/05/2026] 🔥 **Morgana — conta WhatsApp banida (10/05)** — RESOLVIDO via migração API oficial · 22/05: API oficial + dualhook via N8N configurados, templates habilitados, **campanhas iniciando hoje no número secundário**. Próximo: ativar API no número principal (tráfego real) + alinhar horários de atendimento com a IA (Lucas, semana 22, task `86e1d9hmk`)
- [22/05/2026] 🔴 **Bravo — projeto atrasado 2-3 sprints** · entrega final era 23/05 mas ainda na Skill 1 (API configurada por Hugo, falta validar). Gargalo: cliente (Gustavo) lento para validar e liberar acessos. Reunião de validação Skill 1 hoje + renegociar prazo/escopo (Hugo + Lucas, tasks `86e1d9uzf` `86e18dt45`). 2ª parcela R$975 vence 25/05 (Lucas, task `86e1gx7je`)
- [22/05/2026] 🔴 **Comercial parado 2 semanas** · sem prospecção ativa, sem reunião marcada, R$0 venda nova. Prioridade #1 semana 22: retomar prospecção + marcar ≥1 reunião (Lucas, task `86e1gx7md`)
- [18/05/2026] **PeleVet — ligação na semana de 02/06** · Thaísa retornou 18/05 pedindo mais tempo (Sílvias viajam 18-22/05 e 25-29/05); proposta Growth R$ 21K/6m sem objeção, só falta as sócias sentarem juntas · ligar terça 02/06 · ver `areas/vendas/oportunidades/pele_vet/follow-up-thaisa-2026-05-18.md`
- ✅ [15/05/2026] **Pipeline Comercial / CRM (Lucas)** — RESOLVIDO 15/05 · `MAPA-FUNIL.md` bumped pra v0.2 com T4-T8 preenchidos (fluxograma Mermaid 3-raias · tabela operacional com SLA · régua D+1/D+4/D+8 · painel 4 métricas-cockpit · handover Lucas→Victor com 4 gates) · 6 etapas criadas (01, 02, 03, 05, 06, 07) replicando padrão `04-reuniao.md` · 12 subtarefas cobertas (ver MAPA-FUNIL v0.2)
- ✅ [15/05/2026] **Rotina Comercial Diária (Lucas)** — RESOLVIDO 15/05 · `areas/vendas/rotinas/ROTINA-DIARIA.md` v0.2 criado com 13 seções cobrindo 13 subtarefas (blocos horário · checklist · SLA por canal · cadência microcopy · metas Q2 · análise sexta · recorrências · priorização P1-P5 · sprint recuperação · SLA pós-reunião). Piloto semana 21 (18-22/05), revisão na weekly 22/05
- [15/05/2026] **Jean — status e próximos passos** · estava no planejamento da semana 20 sem registro de andamento · validar na weekly 15/05
- [20/05/2026] **Funil — 6 limpezas no `_status-atual.md`** · após coleta de ~17 contatos reais do Lucas (commit `d8ef43b`): (1) recuperar nome do lead `5511998057965` que fechou e nunca pagou; (2) desambiguar Marcos advogado `5517992792044` vs `adv-leonardo`; (3) confirmar dígito Petmania `5517981158196`; (4) pegar nº Frango Lando direto do Joan Antonieto; (5) reauditar incluindo números pessoais do Lucas (`17920008344` + pessoal — onde vivem várias conversas comerciais); (6) marcar Alex do Ads / Evandro (GT Dustato) / Rodolfo (Agradare) como canal **relacionamento**, não outbound · Lucas/Claude próxima sessão
- [20/05/2026] **Funil — inferir etapa real dos leads quentes via WhatsApp** · com os números reais já coletados, ler últimas conversas (uazapi) pra classificar a etapa de fato (não a assumida) e atualizar `_status-atual.md` · próxima sessão

- ✅ [09/05/2026] **PeleVet — proposta comercial pronta para reunião 11/05** · sumário em `proposta-entregaveis-pelevet.md` (Cenário Growth R$ 21K/6m, payback 3º mês) + processo AS-IS Mermaid (@icarus) + pricing Asaas validado (@tesouro). Reunião 13h presencial com Vítor
- ✅ [09/05/2026] **Morgana — API oficial Meta destravada e configurada** · André (Autem) gerou Usuário de Sistema + token, cartão em dólar cadastrado, número oficial `55 17 98154-2837` configurado no sistema (não mais teste). Próximo: submeter templates + atualizar `mod-campaigns` (Lucas)
- [09/05/2026] **Morgana — morganasales_core atualizar para API oficial** · módulo de campanhas (`eloscope-ai/mod-campaigns`) ainda em API não-oficial · Lucas implementa para abrir Grupo 1 · tarefa ClickUp `86e19hqg5`
- [09/05/2026] **Morgana — submeter templates transacionais** · desbloqueado pelo cartão · 24-48h aprovação Meta · pré-requisito da campanha de ativação base ~9k leads
- ✅ [09/05/2026] **Bravo — OpenClaw onboarding finalizado** · call com Gustavo p/ clonar WhatsApp Business + token OpenAI configurado + Nginx instalado (decisão: substitui Tailscale, menos suporte ao cliente) + Cloudflare nova conta criada para Gustavo + DNS `elo.mktbravo.com.br` apontado e acessível via HTTPS
- ✅ [09/05/2026] **Bravo — login OpenAI Codex/ChatGPT concluído** · todo processo de login + IP allowlist resolvido pelo Lucas no mesmo dia
- [09/05/2026] 🔥 **Bravo — handover Hugo** · receber infra (OpenClaw + Nginx + Cloudflare + token OpenAI), validar fluxo end-to-end (envio + recebimento WhatsApp + chamada IA) · checklist em ClickUp `86e18dtm5`
- [08/05/2026] 🔥 **Bravo — acesso Gemini Code/Codex pendente** · sem acesso não dá para configurar ambiente de IA complementar · Lucas cobrar Gustavo
- [06/05/2026] 🔥 **Bravo — 4 bloqueantes vermelhos travam Sprint 2** · Gustavo precisa responder até 08/05: (1) acesso Hostinger, (2) nome assistente IA, (3) cliente-piloto Skill 1, (4) prazo SLA 48h ou 72h. Lucas dispara mensagem-modelo HOJE (vide `areas/vendas/clientes/bravo-agencia/operacional/apis-credenciais.md` §4). Critério NO-GO: 12/05 sem resposta = pausar e renegociar.
- [06/05/2026] **Bravo — Hugo submete templates WhatsApp + App Review Meta dia 1 do Sprint 2** · 24-48h aprovação template + 3-7 dias App Review = se atrasar, Sprint 3 desliza
- ✅ [06/05/2026] **Bravo — sync ClickUp ↔ Notion Sprint Board** · concluído: 55 tasks antigas renomeadas [ARQUIVADO], 6 tasks pai + 29 subtasks criadas com descrição executável completa (passos, inputs, DoD, dependências)
- [27/04/2026] 🔥 **Maqlam — risco regulatório API oficial Meta** · atualização pode remover número do lead, matando fluxo híbrido WhatsApp · sem fallback definido · origem: Sprint 17/04 · Victor + Hugo precisam mapear plano B
- [27/04/2026] **Painel financeiro Supabase com RLS quebrado** · dados 2025 incompletos · origem: Trimestral 02/04 · Victor
- [27/04/2026] **Validar Cloud Code recebe WhatsApp** (não só envia) · pré-requisito técnico do pivot · origem: Trimestral 02/04 · Victor
- [27/04/2026] **Base de outcome inexistente** · sem baseline antes/depois nos clientes · difícil vender resultado sem evidência · origem: Sprint 17/04 · Lucas + Victor precisam estruturar coleta
- [19/04/2026] **Template de contrato** — sem isso o fechamento trava. Responsável: Victor. Criar antes do primeiro cliente. ✅ Inserida no ClickUp (Comercial).
- [22/04/2026] **SDR Morgana — Hugo** — ATRASADO (era 22/03). ✅ Inserida no ClickUp (Plataforma SaaS, urgente).
- [22/04/2026] **Hugo: Confirmar capacidade técnica** — Openclaw/Paperclip end-to-end, WhatsApp QR, CRMs via n8n. ✅ Inserida no ClickUp (Plataforma SaaS, urgente).

## 🟡 Importantes (não bloqueiam mas precisam de ação)

- [21/05/2026] **Morgana — agente Morg prompt v2 (secretária, grau-10k)** · v2 criado em `Agentes/BDR/prompt-v2.md`. Faltam 3 coisas: (1) decidir se a secretária orienta sobre disponibilidade/horários antes do transbordo (hoje "nunca confirma data"); (2) criar tríade própria `rag-base-estetica` + `rag-playbook-estetica` (conteúdo hoje espalhado em `comercial/agente-morg-mensagens-ativacao` + `lead-profile`); (3) deploy do v2 no n8n · Victor · task RAG criada `86e1gx7cz` (semana 22)
- [22/05/2026] **Maqlam — testes beta da campanha** · site do cliente resolvido, API oficial configurada, templates prontos. Próximo: ~~validar RAG (waves 1–5 aplicadas 27/05, pipeline funcional)~~ → **configurar agentId no N8N** (task `86e1k160z`) → testes beta (task `86e1gx7nq`) → produção · Victor + Lucas
- [27/05/2026] **Maqlam — N8N search-knowledge sem agentId** · search-knowledge retorna `results:[]` porque N8N não envia `agentId` no body → todos os playbooks `private` (44 registros) são excluídos. Fix: adicionar `agentId: "767e8044-0856-4430-832f-8950b4c0da15"` no nó HTTP Request do N8N · ClickUp `86e1k160z` (high, due 28/05) · Victor
- [22/05/2026] **Processo — reunião semanal de validação em projetos** · todo projeto de desenvolvimento deve sair do onboarding com reunião semanal de validação já agendada com o cliente (evita gargalo tipo Bravo). Adicionar ao checklist de onboarding · Victor/Lucas
- [22/05/2026] **Financeiro maio — organizar e lançar** · Victor: cadastrar recorrentes no Elosystem-v2 + extrato maio + 6 pendências (planos premium/OVERDUE/billingType/DARFs/cancelar Algesaude+Pedrão SRural) · task `86e1gx7eu` (semana 22)
- [18/05/2026] 🔴 **Pacote financeiro Eloscope — auditoria receita + custos fixos (v3 CANÔNICO — pronto pra lançar)** (Victor lançar no Elosystem-v2) · 2 arquivos prontos:
  - `areas/operacoes/auditoria-assinaturas-site-2026-05-18.md` — **14 assinaturas de site, MRR R$ 1.071,40** (regra <R$ 200/mês = fixo). Custo direto R$ 19 × 14 = R$ 266 (margem ~75%)
  - `areas/operacoes/custos-fixos-2026-05-18.md` — **custos fixos consolidados ~R$ 5.600-6.300/mês** baseado em cartão Sicredi •••1842 (jan-mai/26) + extrato CC #126356084 (jan-mai/26) + HCA + INSS
  - 🔴 **Urgências:** (1) HCA Contábil — confirmar abril pago, cobrar maio R$ 350 (vigência iniciada abr/26, só 1 mês pago); (2) INSS Lucas atrasado PA 03+04/2026 = R$ 356,62; (3) Claude AI crescendo 110→550 em 3 meses; (4) Recarga números maio (Maqlam 4n + Eloscope 5n × R$ 25); (5) Cancelar HostGator R$ 15 se não usa
  - **Stack IA atualizada (Lucas confirmou 18/05):** ❌ Fireflies cancelado (migrou Fathom gratuito) · ❌ Cursor não usa mais · 🟢 só Claude Code · Hetzner ~R$ 120/mês só pra testes
  - Hospedagens cliente via Demerge: Campos Joias ~R$ 89 + Maqlam ~R$ 89 (R$ 180/mês total)
  - Telefonia: Maqlam 4 nrs (compra R$ 35 + recarga R$ 25/2 meses) + Eloscope 5 nrs (R$ 25/2 meses) — confirmar provedor "Correios vs Surf Telecom"
  - Pró-labore mensal: Lucas R$ 1.621 + Victor R$ 1.621 = R$ 3.242 (Victor recebe desde jan/26 mas só formaliza INSS em mai/26)
  - **SRural esclarecida:** parceira que hospeda 4 clientes nossos (Translouvar, Cooperlimão, GT Dustato, Proteja) + email Eloscope = **R$ 141,00/mês após cancelar Algesaude (R$ 49,90, plano cancelado) e Pedrão Hortifruti (R$ 19,90, cliente saiu faz tempo — Lucas avisa **Vitor sócio SRural** e tenta reembolso retroativo do Pedrão)**. Vitor (SRural) ajusta cobrança recorrente do lado deles; Eloscope cadastra pagamento mensal fixo R$ 141 (Victor Igor). **GT Dustato e Proteja com margem só R$ 10/mês — INTENCIONAL** (preço renegociado pra manter cliente em carteira, expandir escopo depois — NÃO reajustar). ⚠️ Não confundir **Vitor (SRural, fornecedor)** com **Victor Igor (sócio Eloscope)**
  - **Investigar:** (a) Posicionamento Digital LTDA mesmo CNPJ 19540550 que Eloscope LTDA — razão social anterior?; (b) Yuri Lima R$ 500 jan+fev parou — cancelado oficial?; (c) Associação Comercial faltou mar e mai; (d) DARF R$ 541,50 em 27/02 — que tributo é?; (e) R$ 3.500 extra pra Lucas+Victor em 13/04 — bônus?
  - Confirmar com Lucas: licenças Elementor anuais · LINK HUB TRINOVA (Piracicaba — coworking?) · Victor
- [18/05/2026] **uazapi — MCP precisa apontar pra linha Lucas principal (5517920008791)** · hoje MCP `claude-uazapi-elo` está conectado só na LunaJ6 v2 · Lucas tem instância pessoal conectada em `https://eloscope.uazapi.com` · trocar/expandir tokens na config local do MCP (tokens NÃO ficam no git — ver `seguranca/uazapi-instancias.md` pra metadados) · ideal: MCP suportar AS DUAS pra escolher por contexto (BDR Luna / comercial Lucas) · @devops
- [18/05/2026] **uazapi — MCP sem tools de leitura de conversa** · tools atuais só enviam (não leem histórico) · precisa expor `get_messages` / `get_chat_history` no plugin `claude-uazapi-elo` pra Claude consumir conversas · @devops
- [17/05/2026] **Elo OS / Content Studio — resolver UX confusa "Imagem de Fundo vs Grade"** · 2 painéis editam coisas diferentes da mesma imagem (`slide.image_url` vs `slide.grid_images[0]`), usuário não sabe qual usar quando ambos coexistem · 3 opções: esconder Imagem de Fundo quando grade ativa / aviso amarelo / unificar painéis em 1 · pergunta foi feita ao Victor, ele interrompeu — pendente decisão · Victor
- [17/05/2026] **Elo OS / Content Studio — commit das mudanças sessão 17/05** · sessão massiva no `elosystem-v2` branch `feature/12.24-import-fatura-conta-cartao`: ~15 arquivos modificados + 2 migrations + 2 componentes novos no ui-kit (ColorPickerPopover + PromptDialog) ainda **não commitada**. Aguardando confirmação do Victor pra commit atômico após teste visual · Victor
- [09/05/2026] **PeleVet — validar antes da reunião 11/05:** CPL real (R$ 4 vs R$ 2,30), faturamento mensal real, recorrência média de paciente crônico (LTV), benchmark Zilda Mayer, apetite por telemedicina, faturamento isolado do banho, sobrenome da segunda Sílvia · Lucas
- [09/05/2026] **Squad `discovery-analyzer` evoluir para v0.2** · stub criado em `squads/discovery-analyzer/` + `skills/discovery-analyze/SKILL.md` · 4 specialists (00-03) + 2 utilities standalone adicionados em 09/05: `04-mermaid-mapper` (Icarus — flowchart visual) e `05-calculadora-asaas` (Tesouro — pricing reverso) · próximo: parser + auto-dispatch dos 3 agents paralelos · usar no próximo discovery
- [07/05/2026] **Campos Joias — implementar módulo RAG** · nova sessão: rodar migrations (pgvector + 6 tabelas/funções) → deploy 4 Edge Functions → lib frontend `src/lib/rag/` → página `/base-conhecimento` · spec completa em `RAG_MODULO_EXPORTACAO.md` · Victor
- [07/05/2026] **Campos Joias — habilitar RLS** em `documents` e `n8n_chat_histories` com policies adequadas antes de produção · Victor

- [06/05/2026] **Carrossel 01 — corrigir fonte Outfit → Syne nos 6 slides** · todos os slides foram construídos com `Outfit` mas o design system real da Eloscope usa `Syne 800` para headlines · screenshots bloqueados no Paper Pro (reset em 2 dias) · fazer numa nova sessão com update_styles em cada nó de headline
- [06/05/2026] **Carrossel 01 — gerar imagens placeholder** · Slide 01: neural network circuit abstrato dark `#0A0A0A` com traços cyan · Slide 04: mockup dark de interface de processo · Slide 05: foto real de dono de PME em operação · substituir placeholders no Paper após geração
- [06/05/2026] **Atualizar skill `carrossel-eloscope`** · alinhar com guia v2 após carrossel 01 finalizado · fontes (Syne/Inter/JetBrains Mono), cores (#0A0A0A, #00D4FF), padrões A–K

- [25/04/2026] ✅ **Enertelles — proposta v4 reestruturada** · setup modular (A=processo+IA R$3.500, B=site+marca R$3.000), CRM externo, blog automatizado R$487/mês, parcelamento 12×R$650
- [25/04/2026] ✅ **Enertelles — proposta HTML v4 finalizada** (30/04) · Bloco A alinhado com Sales OS Starter (R$1.500/mês mín 3 meses) · Asaas calc correto (12×R$376/R$322/R$699) · 12 páginas com PAGE 08 escopo + PAGE 09 investimento + PAGE 10 ROI 3 cenários (substituiu régua 5% CAC)
- [25/04/2026] 🔥 **Bravo — validar reframe pós-discovery com Gustavo** · trocar 3 skills (Análise/Planejamento/Copy) por (Aprovação/Agendamento/Análise mensal) · `proposta-pos-discovery.md` · Content Machine já cobre copy/criativo
- [25/04/2026] **Bravo — redigir aditivo de SLA contratual** · Lucas modela (48h ou 72h?), Gustavo manda pro advogado · base da Skill 1 (Aprovação automatizada)
- [25/04/2026] ✅ **Bravo — Javi era Ravi** (resolvido 26/04) · Ravi (multifunção, presencial no discovery) confirmado. "Javi" foi erro de transcrição Whisper. Há **dois Rafael**: Rafa (designer, presencial) e Rafael Gobi (editor vídeo, remoto, transcrito como "Gabi")
- [25/04/2026] ⚠️ **Bravo — Etapa 4 custos parcial** (26/04) · Gustavo passou: Rafa R$2.200, Ravi R$2.000, Gobi R$1.700, ferramentas R$1.265,50, infra R$2.200 = **R$ 9.365,50/mês** (sem Gustavo). Pró-labore Gustavo **não divulgado** (atua como bombeiro, sem tarefa fixa). Custo-hora: ~R$ 26/h. Custo/cliente: ~R$ 468 (margem ~53%)
- [25/04/2026] **Bravo — atualizar `framework-processo.md` + `bpmn-basico.md` + `plano-execucao.md`** · refletir 3 skills novas após validação Gustavo
- [25/04/2026] **Bravo — refinar script de treinamento Thiago** · objetivos, tópicos principais, CTAs ao final
- [25/04/2026] **Bravo — confirmar reunião presencial 13h45** com Thiago · endereço, pauta, duração
- [25/04/2026] **Bravo — alinhar envio de contrato + forma de pagamento** com Thiago · prazo + responsável
- [25/04/2026] ✅ **Maqlam — campanha cashback pós-feira estruturada** (27/04) · regras 5%/3×/30d, vigência 02/05–02/06 definidas com Denis · task `86e13a626` no ClickUp pra importar planilha em 02/05
- [25/04/2026] **Morgana — desbloquear ou substituir número** (bloqueado nos testes de disparo de imagem) · task `86e13a62g` no ClickUp (urgent)
- [25/04/2026] ✅ **Maqlam — IA BDR (Bumble) ativação cadastrada** (27/04) · task `86e13a62b` urgent · Victor cadastra script Bumble + ativa MAC1 · Denis confirmou multi-persona
- [27/04/2026] **Maqlam — pedir autorização ao Denis** pra usar cortes 4 e 6 da call de 24/04 como conteúdo público · cortes 1, 2, 5, 7 podem rodar sem identificação · ver `areas/marketing/cortes-conteudo/2026-04-24-maqlam-checklist-review.md`
- [08/05/2026] **Maqlam × Olist — validar ideia Denis com Victor** · Denis sugeriu sincronizar memória da IA com produtos da Olist · verificar se faz sentido técnico e de negócio antes de qualquer avanço · Lucas + Victor
- [08/05/2026] **Contabilidade não respondeu** · Lucas ligar de volta amanhã (09/05)
- [27/04/2026] **Maqlam — agendar call de follow-up** ~08-09/05 (sexta 01/05 é feriado, Marcella viaja na seguinte) · task `86e13a64a`
- [02/05/2026] ✅ **Maqlam — pipeline "Retenção de Clientes" criado no Supabase Elosystem** · migration `add_retencao_churn_pipeline` · 6 stages: Ativo/Atenção/Risco de Churn/Engajando/Recuperado/Churn Confirmado · Denis e equipe populam durante CS meeting 08-09/05
- [25/04/2026] **Revisar definição de ticket por produto + ICP** (insight palestra Verhaw/ACIRP) · possível espelho do modelo Verhaw

- [23/04/2026] **Gustavo Bravo — enviar contrato para assinatura** · Gustavo já enviou dados (CNPJ/CPF) · preencher contrato, enviar pra assinar, lançar pagamento · antes de sábado 26/04
- [24/04/2026] **Gustavo Bravo — confirmar horário sábado 26/04** · sessão presencial discovery · participantes: Lucas + Gustavo + Rafael + Javi
- [25/04/2026] 🔥 **Enertelles — enviar proposta v4 pro Alex** · `proposta-alex-review.md` + `proposta-enertelles.md` · pricing reestruturado (modular R$3.500+R$3.000, 12×R$650, blog R$487/mês) · Alex revisa → call Telles+Alex+Lucas
- [25/04/2026] **Enertelles — alinhar split com Alex** · comissão/recorrente se fechar (5-10% mensalidade?) · alinhar antes da call com Telles
- [23/04/2026] **Enertelles — marcar call** Telles + Alex + Lucas · 45 min · Alex agenda
- [23/04/2026] **Elite Maqlam — reunião 24/04 às 15h** · apresentar alterações de cashback · falta: testar geração de leads (bug cursor), salvar leads em remessa
- [23/04/2026] **Morgana — inserir primeira lista do Matheus** · começar prospecções com os contatos recebidos
- [21/04/2026] **Mentoria Agências — definir pricing final** · R$5.500 único ou R$1.500 + 3×R$1.300 parcelado · validar com Lucas antes de apresentar

- ✅ [19/04/2026] **Slides Elo OS — validação visual** — deck `slides-elo-os-v4.html` aprovado em sessão 06/05
- [07/05/2026] **Inserir slide ROI no deck `slides-elo-os-v4.html`** · entre Slide 8 (garantia) e Slide 9 (investimento) · preview aprovado em `slide-roi-preview.html` · lógica: leads não atendidos × taxa recuperação · counter sobe de 11 → 12 · Victor
- [07/05/2026] **Preencher WhatsApp do Lucas no Slide 11** · substituir `(19) 99XXX-XXXX` pelo número real · Lucas confirma número

- [18/04/2026] **Hugo: Responder 7 perguntas técnicas** em `stack-tecnica.md` (VPS provider, LLM em uso, estabilidade QR, Openclaw→Paperclip, dashboard Fran, tempo de setup, CRMs testados)
- [18/04/2026] **Lucas: Iniciar abordagem** — Morgana (esta semana), Denis e Matheus (semana que vem) · guia-comercial-lucas.md tem os scripts
- [25/04/2026] ✅ **Valor/hora consultoria avulsa definido: R$ 180/hora** — pacote mensal inclui 5h, acima disso cobra. "Vista grossa" na prática mas mantido no contrato. (resolvia pendência de 18/04)
- [17/04/2026] **Contratos e pagamento** — definir responsável e estrutura (condições, prazo, renovação) · template a criar
- [18/04/2026] **Hugo: Confirmar capacidade técnica** — Openclaw/Paperclip end-to-end, conexão WhatsApp (QR code funciona?), quais CRMs integra via n8n · bloqueante para primeira entrega
- [18/04/2026] **Hugo: Decidir ferramenta do dashboard** — Metabase, Grafana, custom ou nativo Openclaw/Paperclip · definir antes do Dia 8 do primeiro cliente
- [18/04/2026] **Hugo/Victor: Definir LLM recomendado** — OpenAI API ou outro · custo estimado por cliente · como cliente contrata

- [27/04/2026] **ReabilitaCão — bug Maia** · pede CPF/CEP a cada novo pet do mesmo tutor (UX cliente final) · Victor
- [27/04/2026] **ReabilitaCão — bug Maia regressão** · parou de direcionar contatos novos via WhatsApp · Victor
- [27/04/2026] **ReabilitaCão — bug ERP** · 3 pacotes da bolsa não excluem · Victor
- [27/04/2026] **Conteúdo Instagram parado** · frequência insuficiente para novo posicionamento (modelo dia-a-dia) · origem: Trimestral 02/04 · Lucas
- [27/04/2026] **Voltrucks 2 pausado sem horizonte** · origem: Sprint 17/04

- [27/04/2026] **WhatsApp — playbook de aquecimento documentado** · bloqueios recorrentes: Maqlam (2 números 5h), Morgana (24h só com testes), Jean (2 números só configurando WhatsApp Web) · Lucas + Hugo
- [27/04/2026] **Maqlam — cliente exemplo para monitorar** · aguardando envio do Denis (alinhamento 24/04) · Lucas
- [27/04/2026] **Estrutura comercial inteira pendente** · apresentação vendas, playbook, funil (in/out/indicação), LP, lista leads, papéis → todas com link ClickUp criado, prazo próxima semana · Lucas + Victor
- [27/04/2026] **Conteúdo Instagram não estruturado** · pessoal + Eloscope · Victor
- [27/04/2026] **Pagamento Jean — 2ª parcela** · 1+2 finais, segunda pendente · prazo 01/05 · Lucas (task `86e13dg5n`)
- [27/04/2026] **Pagamento Maqlam vence 25/04** · pendente · Lucas
- [29/04/2026] ✅ **Bravo — 1ª parcela R$975 paga** (assinatura) · próximas: 15/05, 15/06, 15/07 (4× R$975 = R$3.900) · 3 cobranças futuras criadas no ClickUp
- [29/04/2026] **Enertelles — call 30/04 com Telles + Alex confirmada** · último check da proposta v4 hoje (29/04) + atualizar `proposta-enertelles.html` v3→v4 antes da call
- [29/04/2026] 🔥 **Daniel Queiroz — validar pricing OpenClaw com Victor antes da call de hoje** · setup R$1.800 + mensal R$690 + adicionais (vendedor R$150, canal R$400+R$250) · todos marcados `[VALIDAR]` em `proposta-comercial.md` v2 · também: confirmar caso real OpenClaw pra demo + garantia 30 dias devolução setup
- [29/04/2026] **Daniel Queiroz — registrar resultado da call** · fechou / pediu prazo / não / puxou outro produto · se fechou: criar `memory/projects/openclaw-daniel.md` · se não: follow-up 06/05
- [30/04/2026] ✅ **Bravo — recalcular horas estáticos vs vídeo no deck** · vídeo confirmado maior (R$1.932 vs R$930 estáticos) · top 3 reordenado: vídeo>captação>estático · deck atualizado (commit d5c8dac)
- [29/04/2026] **Morgana — cadastrar lista do Matheus + ativar IA de ativação** · 2 chips novos já recebidos · script da IA + modelo de incentivo coletivo documentado no sistema · ClickUp tasks `86e150f6z`, `86e150f7n`, `86e150f7z`
- [27/04/2026] **Gustavo Bravo — pagamento 4× boleto** · 1ª paga 29/04 ✅ · acompanhar 15/05, 15/06, 15/07
- [20/05/2026] 🔴 **Bravo — 2ª parcela R$975 ATRASADA (venceu 15/05)** · Gustavo é historicamente enrolado com pagamentos (baixa expectativa de pontualidade) — cobrança tende a se arrastar · evento criado na agenda "Lucas Calls Estratégicas" 20/05 09h pra disparar lembrete (WhatsApp + PIX/boleto em mãos) · avaliar se vale exigir antecipação ou ajustar prazo contratual nas próximas · Lucas
- [27/04/2026] **Financeiro — extratos pendentes** · subir últimos extratos antes de fechar 100% · prazo 28/04 · Victor (task `86e13dfum`)

## ⚪ Backlog (sem urgência imediata)

- [17/04/2026] Projeção financeira detalhada (quantos clientes para operação sustentável)
- [17/04/2026] Projeção financeira detalhada (quantos clientes para operação sustentável)

---

## 🟡 Vendas — squad de análise de call (criadas 02/05)

- [02/05/2026] **Confirmar status oportunidade vs cliente: Marcos Consultrain** · oportunidade ou cliente? · Lucas
- [02/05/2026] **Confirmar status oportunidade vs cliente: Jean Imobiliária** · proposta atual: manter em clientes mesmo com cobrança 2ª parcela pendente (fronteira) · Lucas
- [02/05/2026] **Mover pastas para `oportunidades/`** após confirmação · Enertelles, Daniel Queiroz, Marcos Consultrain · `git mv` pra preservar histórico · Claude na próxima sessão
- [02/05/2026] ✅ **Enertelles — call 01/05 transcrita e analisada** · Fireflies `01KQN35F64MHZ63N5KET1PY0A3` · resultado: não fechou · follow-up site 08/05 + Bloco A 1ª semana junho · meeting notes em `areas/vendas/oportunidades/enertelles/meeting-notes/call-2026-05-01.md`
- [08/05/2026] **Enertelles — enviar portfólio para Telles amanhã (09/05)** · ligou hoje, não atendeu · Alex (gestor tráfego) também não respondeu · Lucas
- [02/05/2026] 🔥 **Enertelles — follow-up site (Bloco B)** · Telles decide sobre concorrentes · evento no Calendar 08/05 10h · Lucas
- [02/05/2026] **Enertelles — follow-up Bloco A** · equipe volta de férias/licença · evento no Calendar 02/06 10h · Lucas
- [20/05/2026] **Enertelles — nutrição esporádica (manter contato vivo)** · estratégia: toques tipo "olha isso, lembrei daquilo que conversamos" — não cobrança, não pitch · algo genuinamente útil (insight/case/link/ferramenta) · evento recorrente quinzenal na agenda "Lucas Calls Estratégicas" a partir de 02/06 (6 ocorrências) · Lucas
- [02/05/2026] ⚪ **[DÉBITO TÉCNICO] Skill `/analisar-call`** · squad sales-call-analyzer (spin-coach/objection-curator/seller-profiler/call-orchestrator) + workflow + skill · invocar @aiox-master → @sm → @dev · baixa prioridade, desbloqueado após N≥10 calls reais
- [02/05/2026] **Consolidar `objecoes-biblioteca.md`** · 8 objeções Enertelles + objeções Reabilita/Bravo espalhadas · categorizadas (preço/timing/autoridade/concorrência/risco-tech/ceticismo-IA)
- [02/05/2026] **Coaching loop** · tabela "se eixo X < target → ação Y" pra coaching pós-call
- [02/05/2026] **Validar SPIN playbook contra N≥10 calls reais** · calibrar pesos por correlação real, não por benchmark Huthwaite/Gong
- [02/05/2026] ⚪ **Conectar Supabase MCP (CRM fase 2)** · schema oportunidades/calls/objeções/scores SPIN + RLS · `NEXT_PUBLIC_SUPABASE_URL=https://jaygqiooeolzachevvfa.supabase.co` no `.env` · MCP a configurar · @gaia
- [02/05/2026] **Daniel Queiroz — registrar resultado da call 29/04** · pendência herdada · Lucas

---

## 🟡 uazapi / WhatsApp toolkit (criadas 15/05)

- [15/05/2026] 🔥 **Rotacionar tokens uazapi de AMBAS as instâncias (`eloscope` + `lucas`)** · token `eloscope` (`0105a49e-...`) foi pasted em chat 1 + grupo Squad Eloscope 11:37; token `lucas` (`d10db1ea-...`) foi pasted em chat hoje pra cadastro. Painel uazapi.dev → cada instância → regenerar token → rodar `/uazapi setup` (ou editar `.env` direto) · Lucas
- ✅ [15/05/2026] **Apontar MCP `mcp_whatsapp_uazapi` pra instância `lucas`** — RESOLVIDO/DECIDIDO 20/05: **mantém MCP na Luna J6 mesmo** (instância `eloscope`, 5517920002289). Não trocar pra linha pessoal do Lucas. Workaround do prefixo `[Recado do Lucas via Luna J6]` segue válido quando precisar mandar do número pessoal via MCP.
- [15/05/2026] **Reiniciar Claude Code pra registrar skills `/whatsapp-resumo` e `/whatsapp-pendencias`** · skills só são detectadas no SessionStart. Foram symlinkadas durante sessão anterior, CLI ainda não registrou como slash commands. Próxima sessão deve resolver automaticamente · trivial
- ✅ [15/05/2026] **Empacotar `/uazapi` como produto plugin** · plugin `claude-uazapi-elo` v0.3.0 publicado em https://github.com/eloscopecoo-rgb/claude-uazapi-elo · 3 skills (/uazapi, /whatsapp-pendencias, /whatsapp-resumo) · INSTALL.md + plugin.json + symlinks no cerebro
- ✅ [15/05/2026] **Skills derivadas v0.1** · `/whatsapp-pendencias` (classificação 🟢🟡🔴⚪❓) e `/whatsapp-resumo` (chats ativos no período) entregues e smoke-tested contra instância `eloscope`
- ✅ [15/05/2026] **Cadastrar instância uazapi com WhatsApp principal do Lucas** · slug `lucas` (5517920008791, perfil "Lucas Eloscope") cadastrado e ativo. Pipeline comercial real visível (Priorize, Maqlam, Facility, Squad Eloscope, ReabilitaCão). Skills derivadas (`/whatsapp-resumo`, `/whatsapp-pendencias`) agora rodam com dados reais.
- [15/05/2026] **Adicionar coluna WhatsApp em `people.md`** · skills derivadas tentam `people.md` primeiro pra resolver categoria→número, mas tabela atual só tem email. Falso positivo "Matheus Rocha" em vez de "Matheus Campos" caiu no fallback fuzzy. Adicionar `+55 17 9XXXX-XXXX` em coluna nova ou no campo Notas · Lucas
- [15/05/2026] **Construir `/whatsapp-projetos`** (3ª skill derivada do plugin) · mapeia grupos a projetos ativos · backlog · esperar primeiro uso real de /pendencias e /resumo · Lucas

---

## 🟡 elobrain — framework instalável (criadas 13/05)

- ✅ [13/05/2026] **Instalar `gbrain` localmente na máquina Lucas** · `gbrain 0.33.0` em `/Users/lucasnegreiro/.bun/bin/gbrain`, funcional
- [13/05/2026] **Criar `INSTALL_ELOBRAIN.md` runbook reaproveitável** · vira parte do produto que vai ser vendido a clientes (Claude Code + segundo cérebro) · Lucas
- ✅ [13/05/2026] **Primeira indexação `gbrain sync --source cerebro`** · confirmado em 15/05: 766 pages, 3372 chunks, last_commit `e4f5cf52` (HEAD) no schema `brain` do Supabase Elosystem
- ✅ [13/05/2026] **MCP `elobrain` configurado e conectado** · registrado em 15/05 via `claude mcp add --scope local` em `~/.claude.json` (não `.mcp.local.json` — formato inexistente). `claude mcp list` mostra `elobrain: ✓ Connected`
- [15/05/2026] **Reiniciar Claude Code novamente** · pra ativar tools `mcp__elobrain__*` no registry (registrado durante sessão; precisa reload) · Lucas
- [15/05/2026] **Testar query MCP elobrain após restart** · ex. `mcp__elobrain__query "pendências críticas"` · Lucas
- [15/05/2026] **Decidir 4 skillpacks recomendados** · article-enrichment, voice-note-ingest, perplexity-research, concept-synthesis · Lucas + Victor
- [15/05/2026] **Localizar implementação skill `/elo` v0.4** · commit `6adfb20` (Victor) só menciona — não está em `~/elobrain/skills/` nem `~/.claude/skills/`; provavelmente em workspace `growth-os-skills` separado · Victor
- [15/05/2026] ⚪ **Rodar `gbrain frontmatter generate --fix` com escopo correto** · só sobre vault (memory/, areas/, empresa/, squads/, skills/, time/, agentes/) — **nunca** sobre `.aios-core/` `.aiox-core/` `.claude/` (framework protegido). Próxima execução: especificar pasta-alvo, não a raiz do repo · Lucas
- [13/05/2026] ⚪ **Empacotar produto "Cerebro Claude Code by Eloscope"** · template repo + runbook + migrations + `.env.example` + `.claude/settings.json` pré-configurado · backlog (depende de validação interna primeiro) · Lucas + Victor

---

## 🟡 Operação interna — rituais e agentes (criadas 01/05)

- [01/05/2026] **Validar routine #3 (Prep Weekly Review)** disparada às 15:18 — confirmar se chegou WhatsApp + se agente conseguiu clonar repo privado · Lucas
- [01/05/2026] 🔥 **Repo privado pode bloquear agentes Anthropic Cloud** · se #3 falhar, autorizar GitHub em https://claude.ai/settings/integrations · Lucas
- [01/05/2026] **Confirmar com Victor:** ClickUp = source of truth operacional / pendencias.md = camada cognitiva · não duplicar · Lucas + Victor
- [01/05/2026] **Aprovar SPEC `/triagem`** antes de 16/05 (Semana 3) · `skills/triagem/SPEC.md` · Lucas + Victor
- [01/05/2026] **Bloquear sextas 16h-17h no Calendar** dos 3 (Lucas, Victor, Hugo) — Weekly Review 60min · primeiro: 08/05 · Lucas
- [01/05/2026] **Aplicar filtro 3 perguntas em todas as 🔴/🟡 atuais** durante primeiro Weekly Review (08/05) · `areas/operacoes/rituais/filtro-priorizacao.md` · time todo
- [01/05/2026] ⚪ **Revisar descrição da skill `assinar`** (estava como só "Skill" — atualizou na 2ª leitura mas vale revisar SKILL.md frontmatter) · Lucas
- [01/05/2026] ⚪ **WhatsApp uazapi vive em domínio de cliente** — risco se ReabilitaCão trocar instância · planejar instância própria Eloscope · Hugo

---

## 🟡 Pipeline comercial — cruzamento Drive × WhatsApp × Pipeline (criadas 16/05)

> Origem: `_status-atual.md` v0.2 (`areas/vendas/oportunidades/_status-atual.md`) — audit completo 16/05.

- [16/05/2026] 🔥 **Alex Automação — silêncio 499d + Drive mais recente** · proposta abandonada · 🚨 sinal cruzado "Drive > WhatsApp" — Lucas decidir reativar (parceria white-label) ou arquivar
- [16/05/2026] 🔥 **Morgana Sales — 🔴 silêncio 18d** · Q2 alvo-6OS travado · última nossa 28/04 sem retorno · Lucas precisa retomar comunicação com Dra. Morgana / Matheus Campos
- ✅ [16/05/2026] **ReabilitaCão — falso alarme do audit** · audit marcou 🟡 11d sem retorno, mas confirmação Lucas: cliente ativo funcionando bem, retorno positivo, conversa flui pelo grupo WhatsApp (audit filtrou grupos fora). Sem urgência.
- [16/05/2026] **Enertelles — pivot: focar venda do Site (Bloco B)** · Telles é duro na venda direta · estratégia nova: gerar demanda real pelo Bloco B (site standalone) primeiro · Bloco A (processo+IA) fica em segundo plano até Site fechar · Lucas
- [16/05/2026] 🔥 **PeleVet — ligar pra Vítor / Sílvias** · sem retorno após reunião 11/05 · resposta passiva não vem · ação proativa: ligar direto OU se disponibilizar pra reunião extra · Lucas
- [16/05/2026] **Adv. Leonardo Lopes — ⚪ respondeu 31/10 (197d aguardando ação nossa)** · ⚠️ Drive mais recente · proposta esquecida — Lucas decidir reativar
- [16/05/2026] **Eduarda Satisfact — ⚪ respondeu 06/11 (191d aguardando)** · ⚠️ Drive mais recente · mesma situação acima
- [16/05/2026] **Leandro Telecom — ⚪ respondeu 11/02 (94d aguardando)** · ⚠️ Drive mais recente · qualificar time comercial (Hugo) antes de retomar
- [16/05/2026] **Eduardo Nabuco — 🔴 silêncio 192d** · pipeline ativo, sem follow-up · Lucas
- [16/05/2026] **Marcos Consultrain — ⚪ respondeu 30/01 (106d)** · agendar discovery · Lucas
- [16/05/2026] **Atualizar `pipeline.md` v0.3** · 6 leads "desconhecidos" agora identificados via match WhatsApp+Drive: `joao` (Joao), `simone` (Simone), `perossi` (Escritorio Perossi), `elielton` (Elielton Souza), `kaua` (Kaua), `agradare` (Agradare). Renomear + qualificar setor · Lucas
- [16/05/2026] **6 folders Drive sem match no pipeline — qualificar e adicionar** · Voltrucks (cliente ativo, já mapeado em outro lugar), HandsCustom (já no pipeline, alias falhou), Juliano Fotografia, Magazine Borelo - Heitor, Guilherme Marchione, Paula Análise de Desempenho · Lucas
- [16/05/2026] ⚪ **Investigar API uazapi `/message/find` filtragem por chatid** · endpoint retorna 200 OK mas ignora `where:{chatid:X}`, `wa_chatid`, `chat_id`, `jid`, `sender`. Sem isso, perdemos preview de texto das últimas mensagens. Procurar doc oficial ou contactar suporte uazapi.dev · Lucas

---

## ✅ Resolvidas

- [22/04/2026] **ClickUp setup completo** — 32 tarefas inseridas via Python script (ClickUp API direta). Nomes corrigidos: FURA→Samuel/Voltrucks, WTACON→Franciele/ReabilitaCão, Maquilão→Denis/Elite Maqlam. "Cobranças" separado de projetos (Gestão Interna > Cobranças). Projetos Internos recriado do zero (pasta deletada anteriormente). Script: `scripts/clickup_setup.py`
- [20/04/2026] **ReabilitaCao — Epic 28 Story 28.1** — @dev deve implementar migration SQL em nova sessão · branch `feat/agendamento-recorrente` · spec em `docs/superpowers/specs/2026-04-20-agendamento-recorrente-design.md`
- [19/04/2026] Copy Squad implementada nos docs — slide 6, proposta abertura, landing-page.md criado, bio instagram inclusa
- [19/04/2026] Marcos 30/60 dias reinseridos — proposta-cliente.md e sop-entrega.md
- [19/04/2026] Garantia sem número em toda copy — "devolvemos o setup" (sem citar R$3.000)
- [19/04/2026] Produto renomeado de "Sales OS" → "Elo OS" — 18 arquivos atualizados
- [19/04/2026] Pasta sales-os reorganizada em 4 subpastas — 01-produto / 02-comercial / 03-entrega / 04-apresentacao
- [19/04/2026] Slides de call de vendas criados — `slides-call-vendas.md` (11 slides + guia de objeções)
- [18/04/2026] Criar slide "Por que o Elo OS" — slide 7 criado e inserido (21 slides total)
- [18/04/2026] Slide Meta atualizado — R$1M removido, nova meta R$15k MRR com 3 marcos
- [18/04/2026] Slide Para Quem É atualizado — público ampliado (serviço ou produto, B2B/B2C, 1 vendedor conta)
- [18/04/2026] Quadrante foco definido: Q2 — Serviço com time comercial (confirmado por unanimidade no sprint)
- [18/04/2026] Promessa mãe definida
- [18/04/2026] Oferta Híbrida C Q2 estruturada completa (3 camadas + pricing)
- [18/04/2026] Sprint realizado com Lucas e Hugo — entregáveis votados, papéis discutidos, leads priorizados
- [18/04/2026] Modelo de precificação direcionado — TCV abandonado, novo modelo setup R$2k + R$1.5k/mês + 3 meses mínimo
- [18/04/2026] Hugo adicionou Lucas no WhatsApp da Fran ✅
- [18/04/2026] Reunião com Lucas e Hugo realizada (237 min — sprint completo)
- [18/04/2026] Papéis e responsabilidades definidos — Victor (produto/playbook/reunião mensal), Lucas (comercial), Hugo (tech)
- [18/04/2026] Proposta formal criada — `proposta-cliente.md` (enviável ao cliente)
- [18/04/2026] SOP de entrega criado — `sop-entrega.md` (checklist por fase)
- [18/04/2026] produto-bible.md atualizado — precificação beta corrigida, Fase 3 detalhada, papéis preenchidos
- [18/04/2026] IA skills spec criado — `ia-skills-spec.md` (7 skills Copiloto + 6 skills Assistida, por plano)
- [18/04/2026] Formulário de onboarding criado — `onboarding-formulario.md`
- [18/04/2026] Guia técnico do cliente criado — `onboarding-tecnico-cliente.md`
- [18/04/2026] Template de case criado — `template-case.md`
- [18/04/2026] Guia comercial do Lucas criado — `guia-comercial-lucas.md` (scripts, SPIN, objeções, cadência)
- [18/04/2026] Funil de vendas criado — `funil-vendas.md` (outbound/indicação/inbound + métricas + pipeline)
- [19/04/2026] Pricing definitivo definido — 3 planos (Starter/Growth/Scale), setup R$3k, promessa com garantia de devolução
- [19/04/2026] Todos os documentos comerciais atualizados com pricing e promessa consistentes
- [19/04/2026] Landing page ainda não construída — copy pronta em `landing-page.md` (bio instagram inclusa)
- [19/04/2026] Lista de leads Eloscope para reativação GTM beta — Victor precisa extrair
- [19/04/2026] **Slides call de vendas: montar no Canva** com design system Eloscope · arquivo base em `04-apresentacao/slides-call-vendas.md`
- [19/04/2026] **Definir quem conduz a call de vendas** — Victor ou Lucas (impacta treinamento e preparação)

- [24/04/2026] **Bravo — ClickUp estruturado** · pasta "Bravo Agency" criada com 6 listas e 33 tarefas · workspace 90171169593 / Espaço da equipe

*Atualizado: 09/05/2026*

- [14/05/2026] **ReabilitaCao — Vercel Deployment Protection** · desativar "authorized users only" no painel do projeto Vercel para não bloquear deploys de `victor_igor7@hotmail.com` · Victor
