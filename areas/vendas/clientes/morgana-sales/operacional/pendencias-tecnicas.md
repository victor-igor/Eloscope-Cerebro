---
tipo: operacional
empresa: Morgana Sales Estética
tags: [cliente/morgana-sales, tecnico, backlog, clickup-sync]
---

# Pendências Técnicas — Morgana Sales

> Backlog técnico do projeto Morgana. Sistema `elo.morgana.com.br` em produção.
> Responsável principal: Hugo (implementação) + Lucas (validação produto/CS).
> **Estrutura abaixo é a fonte de verdade para sincronizar com ClickUp** (uma seção por task pai com sub-tarefas e contatos).

---

## Constantes do projeto (referência rápida)

| Item | Valor |
|------|-------|
| **Número principal da clínica** (recebe leads qualificados) | **+55 17 99633-2788** — confirmado por Matheus 04/05 |
| Grupo de Notificação Morgana (WhatsApp) | https://chat.whatsapp.com/GECojPfRGKd0kudjv78FoX |
| Sistema | https://elo.morgana.com.br |
| Horário operacional atendimento | 9h–19h (validar fechamento de sábado) |
| Chips em uso | `5517981542833` (reaquecendo) · `5517981267711` · `5517981267748` |

**Contatos:**
- **Cliente:** Dra. Morgana Sales (decisora) · Matheus Campos (sócio/ponte) · André +55 17 98814-5147 (Atendmes/Marketing — opera Business Manager)
- **Eloscope:** Lucas (CS/Produto) · Hugo (técnico) · Victor (validação copy/FAQ)

---

## 🔴 Tasks ClickUp — Críticas (semana 04–08/05)

> Cada task abaixo é uma **task pai** no ClickUp. Sub-tarefas viram sub-tasks. Marque o ID quando criar.

---

### T0 · Rodada de validações Morgana — destravar pendências

| Campo | Valor |
|-------|-------|
| **Responsável** | Victor |
| **Prioridade** | Crítica (destrava T1, T2, T3, T4, T7, T8) |
| **Prazo** | 05/05/2026 (amanhã) |
| **ClickUp ID** | {TODO} |
| **Dependência** | — (é a primeira task) |

**Descrição:**
Rodada rápida de validações com Dra. Morgana, Matheus, André (Marketing/Atendmes) e validação interna de copy/FAQ. Sem essas respostas, T1, T2, T3, T4, T7 e T8 ficam paradas. Concentrar tudo em um único bloco amanhã (05/05) para destravar o restante da semana.

**Sub-tarefas — falar com Dra. Morgana:**
- [ ] WABA: usar número novo ou um número existente da clínica?
- [ ] Sábado a clínica fecha que horas? Domingo funciona?
- [ ] Tem 3ª atendente além de Julia e Jéssica?
- [ ] Validar 3 perguntas de qualificação propostas (já fez tratamento? alergia? procedimento de interesse?) — pode acrescentar/trocar?

**Sub-tarefas — falar com André (Marketing/Atendmes · +55 17 98814-5147):**
- [ ] Apresentar a necessidade do WABA + IG/FB no Chatwoot
- [ ] Decidir fluxo: ele cria app no Business Manager **OU** dá acesso admin pra Eloscope criar
- [ ] Confirmar handle do Instagram (@morganasalesestetica?) e nome exato da página Facebook
- [ ] Combinar prazo de execução do lado dele (caso ele crie)

**Sub-tarefas — validação interna (Victor):**
- [ ] Checar Knowledge Base da Morgana — já existe FAQ pronto pro Morg usar?
- [ ] Validar copy dos 4 toques da cadência em `comercial/cadencia-followup.md` (5 perguntas no fim do arquivo)
- [ ] Decidir se mantém frase "pode parar" no toque D+30
- [ ] Confirmar se janela de envio inclui sábado

**Entregável:**
- [ ] Atualizar este arquivo (`pendencias-tecnicas.md`) com as respostas
- [ ] Atualizar `comercial/cadencia-followup.md` com copy validada
- [ ] Comunicar Hugo + Lucas as decisões pra desbloquear T1–T4

---

### T1 · Conectar Instagram + Facebook ao Chatwoot

| Campo | Valor |
|-------|-------|
| **Responsável** | Hugo (executor) + Lucas (alinhamento André) |
| **Prioridade** | Alta |
| **Prazo** | 06/05/2026 |
| **ClickUp ID** | {TODO} |
| **Dependência** | André conceder acesso admin nas páginas Meta |

**Descrição:**
Plugar inboxes do Instagram DM e Facebook Messenger da Morgana Sales no Chatwoot da clínica. Necessário para receber leads orgânicos no mesmo funil das campanhas pagas. Contato André (+55 17 98814-5147 · Atendmes) opera o Business Manager.

**Sub-tarefas:**
- [ ] Falar com André — solicitar admin nas páginas IG e FB da Morgana
- [ ] Confirmar handle correto do Instagram (@morganasalesestetica?)
- [ ] Confirmar nome exato da página Facebook
- [ ] Conectar Instagram Inbox no Chatwoot (OAuth)
- [ ] Conectar Facebook Messenger Inbox no Chatwoot
- [ ] Testar recebimento (enviar DM teste de outro perfil)
- [ ] Validar com Julia/Jéssica que mensagens aparecem no Chatwoot
- [ ] Documentar no `comercial/historico.md`

---

### T2 · Ativar API Oficial WhatsApp (WABA)

| Campo | Valor |
|-------|-------|
| **Responsável** | Hugo (técnico) + Lucas (alinhamento Marketing) |
| **Prioridade** | Crítica |
| **Prazo** | Iniciar 05/05 — aprovação Meta pode levar 5+ dias |
| **ClickUp ID** | {TODO} |
| **Dependência** | Acesso ao Business Manager da Morgana (via André) |

**Descrição:**
Configurar API Oficial WhatsApp da Meta para o Agente SDR (Morg). IA responde no número WABA → quando qualifica lead → dispara alerta no Grupo de Notificação Morgana. Atendentes seguem em WhatsApp comum (não usam WABA). André é o ponto de contato no Business Manager.

**Decisões a fechar antes:**
- [ ] Com Dra. Morgana: novo número WABA ou número existente?
- [ ] Com André: ele cria o app no BM **OU** dá acesso admin para Eloscope criar?

**Sub-tarefas — fluxo (a) André cria:**
- [ ] Reunião/áudio com André explicando o que precisa
- [ ] André cria App no Meta for Developers
- [ ] André adiciona produto WhatsApp Business
- [ ] André relaciona número aprovado pelo cliente
- [ ] André concede System User com permissão para Eloscope
- [ ] Hugo recebe credenciais e configura no Chatwoot

**Sub-tarefas — fluxo (b) Eloscope cria:**
- [ ] André adiciona Lucas/Hugo como admin no BM da Morgana
- [ ] Hugo cria App no Meta for Developers
- [ ] Hugo adiciona produto WhatsApp Business
- [ ] Hugo relaciona número aprovado pelo cliente
- [ ] Hugo configura no Chatwoot

**Sub-tarefas — comum aos dois fluxos:**
- [ ] Submeter número ao Meta (verificação WABA)
- [ ] Criar e aprovar templates HSM (copy do Morg)
- [ ] Configurar webhook no Chatwoot
- [ ] Configurar disparo de alerta no Grupo de Notificação (https://chat.whatsapp.com/GECojPfRGKd0kudjv78FoX)
- [ ] Testar envio + recebimento end-to-end
- [ ] Testar handoff: alerta cai no grupo + atendente puxa no WhatsApp comum (+55 17 99633-2788)

---

### T3 · Deploy Agente SDR (Morg) em produção

| Campo | Valor |
|-------|-------|
| **Responsável** | Hugo (deploy) + Lucas (orquestração) + Victor (FAQ/validação) |
| **Prioridade** | Crítica |
| **Prazo** | 11/05/2026 (depende de T2 + chips) |
| **ClickUp ID** | {TODO} |
| **Dependência** | T2 (WABA) + chips reaquecidos (T6) |

**Descrição:**
Subir Agente Morg conectado à API Oficial. Fluxo: recebe lead → qualifica em 3 perguntas → dispara alerta no Grupo de Notificação Morgana com resumo do lead → atendente puxa no número principal (+55 17 99633-2788) e segue no WhatsApp comum. A partir do handoff, IA para de responder àquele lead.

**Sub-tarefas — preparação:**
- [ ] Victor: checar se já existe FAQ pronto na Knowledge Base da Morgana
- [ ] Validar 3 perguntas de qualificação com Victor + Dra. Morgana:
  - [ ] (1) Já fez algum tratamento estético antes? (qual?)
  - [ ] (2) Tem alguma alergia ou restrição médica?
  - [ ] (3) Qual procedimento ou área de interesse?
- [ ] Definir formato do alerta no grupo (template: nome + telefone + respostas + interesse principal)
- [ ] Definir comportamento fora do horário 9h–19h ("nossa equipe retoma a partir das 9h")

**Sub-tarefas — implementação:**
- [ ] Cadastrar prompt do Morg no n8n / sistema
- [ ] Conectar Morg à API Oficial (saída do T2)
- [ ] Implementar lógica de transferência (3 respostas → resumo → grupo)
- [ ] Implementar regra "IA para de responder após handoff"
- [ ] Configurar opt-out automático ("pode parar" / "não tenho interesse")

**Sub-tarefas — validação:**
- [ ] Testar com 5 leads internos antes de produção (Lucas + Victor + Hugo)
- [ ] Subir lista do Matheus (já importada — reusar) + base dormente
- [ ] Monitorar primeiras 24h: taxa de resposta + bloqueios + qualidade do handoff

---

### T4 · Configurar cadência de Follow-up (5 toques)

| Campo | Valor |
|-------|-------|
| **Responsável** | Hugo (automação) + Victor (validação copy) |
| **Prioridade** | Alta |
| **Prazo** | 13/05/2026 |
| **ClickUp ID** | {TODO} |
| **Dependência** | T3 (Agente SDR no ar) |

**Descrição:**
Disparos automáticos para leads sem resposta: D+0 (mensagem inicial), D+3, D+7, D+14, D+30. Copy proposta em `comercial/cadencia-followup.md` aguarda validação do Victor. Cada toque sai automaticamente se lead não respondeu ao anterior; resposta interrompe a cadência.

**Sub-tarefas:**
- [ ] Victor: validar copy dos 4 toques (D+3, +7, +14, +30) — 5 perguntas no fim do arquivo
- [ ] Aprovar templates HSM no Meta (necessário para WABA)
- [ ] Implementar trigger D+3 (sem resposta no D+0)
- [ ] Implementar trigger D+7
- [ ] Implementar trigger D+14
- [ ] Implementar trigger D+30 (soft exit)
- [ ] Implementar regra: resposta em qualquer ponto interrompe cadência
- [ ] Implementar regra: "pode parar" sai da base imediatamente
- [ ] Restringir janela de envio ao horário comercial (9h–19h)
- [ ] Testar com 3 leads internos a sequência completa (modo simulado)

---

### T5 · Retomar ativação base — disparo gradual

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Prioridade** | Alta |
| **Prazo** | Iniciar 12/05/2026 |
| **ClickUp ID** | {TODO} |
| **Dependência** | T6 (chips validados) |

**Descrição:**
Após validar saúde dos 3 chips em 08/05, retomar campanha de ativação em 3 fases graduais para não bloquear de novo. Avaliar bloqueio entre cada fase antes de subir volume.

**Sub-tarefas:**
- [ ] 12/05 · Fase 1: 10 mensagens/dia por chip (3 chips × 10 = 30/dia total)
- [ ] 13/05 · Avaliar bloqueio nos 3 chips
- [ ] 14/05 · Fase 2: 30 mensagens/dia por chip (90/dia total)
- [ ] 15/05 · Avaliar bloqueio
- [ ] 16/05 · Fase 3: 50 mensagens/dia por chip (150/dia total)
- [ ] Reportar resultados a Dra. Morgana e Matheus (taxa resposta + bloqueios)

---

### T6 · Validar saúde dos 3 chips (checklist 08/05)

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Prioridade** | Crítica (bloqueia T5) |
| **Prazo** | 08/05/2026 |
| **ClickUp ID** | {TODO} |
| **Dependência** | Aquecimento dia 5 finalizado |

**Descrição:**
Checklist de saúde dos 3 chips antes de conectar à automação e retomar ativação. Detalhes em `chips-aquecimento.md`.

**Sub-tarefas:**
- [ ] `5517981542833` — sem bloqueio nos últimos 5 dias?
- [ ] `5517981267711` — 5 dias de histórico humano completos?
- [ ] `5517981267748` — 5 dias de histórico humano completos?
- [ ] Nenhum chip com warning ou banimento?
- [ ] Ir/no-go documentado no `chips-aquecimento.md`
- [ ] Comunicar Hugo se libera para conectar

---

### T7 · Definir comportamento do Morg no número principal

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Prioridade** | Alta |
| **Prazo** | 07/05/2026 |
| **ClickUp ID** | {TODO} |
| **Status** | ✅ Número principal definido — **+55 17 99633-2788** (confirmado por Matheus 04/05). Falta validar horário e fluxo fora do horário. |

**Descrição:**
Número principal já confirmado: **+55 17 99633-2788**. Falta fechar com Dra. Morgana o que o Morg responde fora do horário comercial e validar fechamento de sábado.

**Sub-tarefas:**
- [x] Confirmar número principal — feito com Matheus 04/05
- [ ] Confirmar com Dra. Morgana fechamento de sábado (até que horas?)
- [ ] Domingo a clínica funciona?
- [ ] Definir mensagem fora do horário ("nossa equipe retoma às 9h…")
- [ ] Definir mensagem para finais de semana se aplicável
- [ ] Documentar regras no prompt do Morg

---

### T8 · Loom de treinamento atendentes — fluxo SDR

| Campo | Valor |
|-------|-------|
| **Responsável** | Lucas |
| **Prioridade** | Média (depende de T3) |
| **Prazo** | Após Agente SDR em produção (~13/05) |
| **ClickUp ID** | {TODO} |
| **Dependência** | T3 (Agente SDR no ar) |

**Descrição:**
Loom direcionado a Julia (atendente, filha do Matheus) e Jéssica (gestão geral + atendimento). Confirmar com Dra. Morgana se há 3ª atendente. Explica como o lead chega da IA e como dar continuidade no número principal (+55 17 99633-2788).

**Sub-tarefas:**
- [ ] Confirmar com Dra. Morgana se há 3ª atendente
- [ ] Roteiro do Loom:
  - [ ] (1) Como o alerta chega no Grupo de Notificação
  - [ ] (2) Como interpretar o resumo do lead (perguntas/respostas)
  - [ ] (3) Como puxar o lead no WhatsApp comum (+55 17 99633-2788)
  - [ ] (4) Regra: a partir do handoff, IA para de responder
  - [ ] (5) O que fazer se lead voltar a falar com a IA depois
  - [ ] (6) O que fazer se lead disser "pode parar"
- [ ] Gravar Loom (5–8 min)
- [ ] Enviar para Julia + Jéssica + Dra. Morgana
- [ ] Sessão de Q&A ao vivo (15 min) — opcional

---

## ✅ Resolvido recentemente

| Item | Resolvido em | Como |
|------|-------------|------|
| Lista do Matheus importada | 04/05/2026 | Lucas — contatos cadastrados no sistema (T anterior `86e150f6z`) |
| Número principal definido | 04/05/2026 | Matheus confirmou +55 17 99633-2788 — todos os números enviam para esse |
| Treinamento presencial Morgana | 28/04/2026 | Lucas presencial — apresentou Chatwoot + sistema; recebeu 1 celular + 2 chips do Matheus |
| Decisão Chatwoot fora do uso pelas atendentes | 28/04/2026 | Atendentes seguem em WhatsApp comum; Chatwoot só para a IA |
| Decisão sem comissão individual | 28/04/2026 | Modelo de meta coletiva confirmado por Dra. Morgana e Matheus |
| Copy mensagens de ativação (3 variações) | 29/04/2026 | Documentado em `comercial/agente-morg-mensagens-ativacao.md` |
| Sistema `elo.morgana.com.br` em produção | abr/2026 | Hugo |

---

## Mapa de dependências (ordem de execução)

```
T0 (validações Victor 05/05) ──> destrava T1, T2, T3, T4, T7, T8

T6 (chips) ──┐
             ├──> T5 (retomar ativação)
T2 (WABA) ───┼──> T3 (Morg deploy) ──> T4 (cadência) ──> T8 (Loom atendentes)
T1 (IG/FB) ──┘
T7 (comportamento Morg) ──> alimenta T3
```

---

*Atualizado: 2026-05-04*
