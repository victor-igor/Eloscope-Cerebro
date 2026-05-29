---
tipo: weekly-prep
semana: 22
data: 2026-05-29
hora-geracao: "15:30"
status: draft-automatico
---

# Weekly Review Prep — 29/05/2026

> Draft automático sexta 15:30. Editar na call 16h.
> Fontes: sessions 22–29/05 · ClickUp (38 tasks fechadas) · Fathom (sem reuniões S22 indexadas ainda) · pendencias.md · deadlines.md

---

## Conquistas (sugestão — validar ao vivo)

### Victor
- **Maqlam RAG 100% entregue** (27–28/05) — waves 1–5 aplicadas: `embedding_queue`, HNSW, `hybrid_search` refatorado, `process-embeddings` deployada (resolvia causa-raiz dos 404 no cron), 38 playbooks atualizados, fix regression HTTP 500 (parâmetro RPC renomeado)
- **Maqlam catálogo × Tiny ERP** (27/05, `86e1k40vw`) — tabela `ai_products` + sync + edge function + pg_cron + tela `/catalogo` + RBAC · 266 produtos sincronizados · catálogo no RAG (1657 embeddings 100%)
- **Maqlam envio de produtos via WhatsApp** (28/05, `86e1kebn4`) — carrinho, modal com busca de contato, reescrita de descrição com IA, campo `descricao_whatsapp` persistente
- **Maqlam SDR fix** (27/05, `86e1b9gdd`) — transbordo sem "RESUMO vazando pro cliente" · diretivas de comportamento substituindo mensagens fixas
- **Morgana campanhas go-live** (27/05, `86e1k22bt`) — API oficial ativa, campanhas disparando · RAG estética criada (`86e1gx7cz`)
- **ReabilitaCão** — fix transcrição IA sem sobrescrever anotações manuais (`86e1kxx4v`) · automações Nath/Cris (`86e1d9g4t`) · testes disparo pós-consulta · reunião Franciele (`86e1gx7gt`)
- **Content Studio milestone v21.0** — Phase 24 fechada (92 testes, typecheck OK): painéis Squad Runs, Referências/RAG e Brandbook embed entregues
- **Financeiro** — extrato maio subido, lançamentos + 6 pendências organizadas, notas fiscais da semana emitidas

### Lucas
- **Morgana em produção** — migração API oficial Meta concluída (`86e1d9hmk`) · campanhas ativas · aquecimento de números finalizado (`86e16a2e9`)
- **Chatwoot pós-Rails** — atualização de Rails para compatibilidade Meta API (`86e1gwd3u`) · validado ao vivo na weekly (`86e1gwd7v` ✅)
- **Meta WhatsApp fase 1** — integração completa canal + templates + campanha (`86e1gwcyf`) · Dualhook Elo OS configurado (`86e1gwd1f`)
- **Site Câmara de Urupês** — e-mails/documentos postados (`86e1gwdan`)
- **Bravo** — Asaas reconfiguração + 1ª NF (`86e1gwd4r`) · aditivo SLA assinado (`86e18du0h`) · processo validado com Gustavo (`86e18dtzr`) · alinhamento (`86e1d9uzf`) · vídeos/tutoriais enviados (`86e1gwd4z`)
- **2ª parcela Bravo R$975 cobrada** (`86e1gx7je`) ✅
- **Stories Morgana 8.2 e 8.3** concluídas (`86e1gwd96`, `86e1gwd9e`)

### Hugo
- **Sprint 1 Bravo concluído** (`86e18dt25`, com Lucas) — setup de infraestrutura e processo, testes alfa e beta realizados. ⚠️ Ainda não em produção — validação pendente.

---

## Bloqueios

| # | Bloqueio | Owner | Impacto | Parado há |
|---|----------|-------|---------|-----------|
| 1 | **Comercial 0%** — prospecção e estruturação completas `to do` desde 27/05. Causa raiz: entregas urgentes Maqlam consumiram tempo + API ChatGPT travada. Solução decidida: conectar tokens de API próprios (Lucas, due hoje 30/05) | Lucas | R$0 receita nova pela 3ª semana | 3 semanas |
| 2 | **Bravo Skill 2 bloqueada** — créditos OpenAI conta Bravo atingidos + bloqueantes do Gustavo (nome assistente, cliente-piloto, SLA) | Hugo + Lucas | Sprint 2 paralisa até resolver | >1 semana |
| 3 | **Cobranças Jean + Voltrucks R$6k** — pendentes apesar de urgentes (due 30/05) | Lucas | Receita em risco | Vários dias |
| 4 | **Morgana — número principal** aguardando Matheus/Dra. Morgana | Lucas | Expansão travada (produto ok) | >2 semanas |
| 5 | **Maqlam SDR — testes e2e pendentes** | Victor | Prazo Denis 16/06 | — |
| 6 | **Conteúdo Instagram 0%** — 17 roteiros de Reels prontos, nada gravado/publicado | Lucas + Victor | Aquisição parada | Vários dias |

---

## Reuniões da semana (Fathom)

> ⚠️ Fathom não retornou reuniões indexadas para a semana 22/05–29/05. A weekly S22 de hoje (29/05 8h30) pode estar em processamento. Verificar na call se Fathom gravou e preencher abaixo.

| Data | Título | Decisão-chave |
|------|--------|---------------|
| 29/05 | Weekly Semana 22 (8h30 — esta reunião) | [A PREENCHER NA CALL] |
| [verificar Fathom] | [A PREENCHER NA CALL] | [A PREENCHER NA CALL] |

> **Nota:** Reuniões diárias da semana (Victor + Lucas + Hugo) aparecem como "Daily" no Fathom — última indexada foi 14/05. Se houve dailies esta semana, verificar no Fathom após a call.

---

## Métricas

| Indicador | Valor | Δ |
|---|---|---|
| Receita fechada (semana) | **R$0** | ⬇️ 3ª semana sem venda nova |
| Clientes ativos | 5 (Maqlam, Morgana, ReabilitaCão, Campos Joia, Bravo) | ➡️ |
| Tasks concluídas semana | **38** (~16 Victor · ~20 Lucas · 2 Hugo) | — |
| Tasks abertas c/ deadline S23 (30/05–06/06) | **43** | 🔴 alto volume |
| Cobranças em aberto | Voltrucks R$6k · Jean (valor [A PREENCHER]) | 🟡 |
| Reuniões de venda / propostas | **0 / 0** | ⬇️ |
| Reels produzidos | **0** de 17 roteirizados | ⬇️ |
| Receita MRR (base recorrente) | [A PREENCHER] ~R$5,5k estimado | — |
| Lead → proposta (dias médios) | [A PREENCHER NA CALL] | — |

---

## Top 3 Próxima Semana — Candidatos (validar filtro na call)

### Lucas
1. 🔴 **Comercial — tempo blindado + ≥2 reuniões de venda** · prospecção diária + conectar API ChatGPT (`86e1m3j69` urgent due 30/05) · causa-raiz resolvida, agora executar
2. 💰 **Cobranças Jean + Voltrucks R$6k** (`86e11fy81` + `86e11fy7y`, urgent due 30/05) · já 2 semanas vencidas
3. 📞 **PeleVet — ligar Sílvias** · proposta R$21K/6m sem objeção, elas voltam 30/05 · due 02/06 (`86e1d9jj3`)

*Candidato reserva:* Site Câmara Urupês ajustes finais (`86e1m3hug` due 06/06)

### Victor
1. 🤝 **Maqlam reunião alinhamento** · apresentar catálogo + RAG + SDR (due 02/06 10h, `86e1m3j5t`) · prazo produção 16/06
2. 🔴 **Bravo reunião alinhamento** · API OpenAI conta Bravo + número WhatsApp Gustavo (`86e1m3hkg` due 02/06) · Hugo bloqueado sem isso
3. 📱 **Morgana reunião alinhamento + agente prospecção** · romper silêncio Matheus/liberar número principal (`86e1m3hjt` due 02/06)

*Candidato reserva:* Marketing — post Instagram + funil de aquisição

### Hugo
1. 🔴 **Bravo — destravar bloqueantes do Gustavo** · nome assistente + cliente-piloto + SLA (`86e18dt1b` urgent due 30/05) · sem isso Skill 2 não avança
2. ✅ **Bravo — Skill 1 validação final** (`86e1m3hvn` due 02/06) · alfa/beta feitos, falta validação
3. ⚡ **Bravo Skill 2 — resolver créditos OpenAI + avançar Meta Graph API** (`86e18dtpr`, `86e18dtp3`, `86e18dtne` due 06/06) · aguarda desbloqueio dos bloqueantes

---

## Blockers Cruzados

- **Hugo bloqueado por Gustavo** — Skill 1 não valida e Skill 2 não avança sem nome do assistente + cliente-piloto + acessos (Lucas coordena Gustavo)
- **Lucas bloqueado por API ChatGPT** — ferramentas comerciais travadas · solução: tokens próprios (due hoje)
- **Victor bloqueado por Matheus** (Morgana) — número principal do cliente só liberado após reunião de alinhamento
- **Maqlam e2e** — Victor finaliza testes SDR antes da reunião Denis 02/06 · Lucas configura N8N agentId (já feito 29/05 ✅)

---

## Foco do Mês (maio/junho)

> Extraído de `business-context.md` — seção **Foco Atual** está desatualizada (referência a Bravo discovery 26/04).
> Foco real confirmado na weekly S22 abaixo — **REVISAR?** na call se ainda é este.

**Foco maio (S22 → confirmado ao vivo):**
1. 💰 **Comercial — voltar a vender** · R$0 há 3 semanas · base recorrente ≈ custos · urgente sair do zero
2. 🚀 **Maqlam em produção** · "último metro" (SDR e2e + reunião Denis 02/06) · prazo 16/06
3. 📢 **Morgana expansão** · API oficial ativa · número principal aguarda Matheus
4. 🔴 **Bravo destravar** · Skill 1/2 bloqueadas no cliente · decisão, não adiamento

> ⚠️ **[REVISAR? na call]** — `business-context.md` ainda lista foco de abril (Bravo delivery + cobranças Denis/Matheus). Atualizar ao vivo com o foco real de junho.

---

## Notas do facilitador

- **Aprendizado S22 para registrar:** "Feature de 1 dia que levou 2 meses" — RAG Maqlam: anotado 03/04, due 24/04, concluído 29/05. Execução foi 1 dia. Problema = priorização. **Ação:** revisar backlog periodicamente para itens >2 semanas parados.
- **ClickUp Lucas** — ~80+ tasks abertas/atrasadas, muitas com due de 10–17/05. Status fantasma. Lucas limpar ao vivo.
- **Hugo e Lucas**: rodar `/salve` esta semana (sem sessão no brain = entregas invisíveis).
- **ClickUp time tracking** — limite 40/mês esgotado. ~290 min Victor não registrados. Avaliar upgrade.
- **Supabase Data API** — mudança anunciada para 30/05. Victor verificar amanhã.

---

*Gerado automaticamente em 29/05/2026 às 15:30 BRT — Eloscope Prep Weekly Agent*
