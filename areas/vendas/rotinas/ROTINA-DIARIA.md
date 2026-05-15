---
tipo: rotina
area: vendas
produto: Elo Sales OS
status: v0.2
data: 2026-05-15
autor: Lucas + Claude
versao: 0.2
dono: Lucas
tags:
  - vendas/rotina/diaria
  - playbook
  - q2
fonte-canonica:
  - "[[../funil/MAPA-FUNIL|MAPA-FUNIL]]"
  - "[[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook]]"
  - "[[../../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas]]"
  - "[[../metodologia/spin-playbook-v0.2|spin-playbook]]"
relacionados:
  - "[[../../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline (46 leads)]]"
  - "[[../oportunidades]]"
  - "[[../clientes]]"
---

# Rotina Comercial Diária — Lucas

> **Para quem é isto:** Lucas (hoje único no comercial). O dia da venda em blocos executáveis.
> **O que é:** régua de tempo + checklist + cadência + metas. Cockpit operacional do funil.
> **O que NÃO é:** estratégia de funil (vai no [[../funil/MAPA-FUNIL|MAPA-FUNIL]]) nem scripts detalhados (vão no [[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook]]).

> [!info] Régua, não cárcere
> Os blocos abaixo são **referência de tempo**, não compromisso rígido. Se aparece call de cliente quente às 09h, prospecção desce no dia. **Princípio:** **bloquear no Calendar** os horários default, e **adaptar conforme contexto da semana** — mas nunca pular um bloco 2 dias seguidos sem registrar o motivo no [[../../../memory/sessions|log do dia]].

> [!warning] Status atual
> v0.2 inicial. Pilotada por 1 semana (semana 21, 18-22/05) com revisão na weekly de 22/05 — ajustar blocos/metas conforme realidade dos primeiros dias. Hoje (15/05) o pipeline real tem **5 alvos Q2 ativos** (ReabilitaCão upsell, Morgana, Jean, Enertelles, Marcos) + leads em estágios variados (ver [[../../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline]]).

---

## 1. Princípio — o dia em 3 atos

| Ato | Foco | Quando |
|-----|------|--------|
| **Abrir** | Cockpit do dia: o que está em jogo, Top 3 | 08h-08h30 |
| **Operar** | Follow-up · Prospecção · CRM · Calls | 08h30-17h |
| **Fechar** | Registro · próximas ações · agendar amanhã | 17h-17h30 |

**Regra de ouro do dia:** **nenhuma call/proposta sem registro no mesmo dia**. SLA pós-reunião é ≤2h pra dossiê + próxima ação, ≤24h pra proposta. (Detalhe na §11.)

---

## 2. Cockpit visual — blocos de horário

> [!note] Blocos pra bloquear no Google Calendar
> Recomendado criar eventos recorrentes Seg-Sex no Calendar com os títulos abaixo. O Calendar é o garantidor do bloqueio — sem isso, reuniões se espalham e a rotina desaba.

```
┌─────────────────────────────────────────────────────────────────────────┐
│  08:00  08:30  10:00  11:30  12:00 ─── tarde livre p/ calls ─── 17:00   │
│  │      │      │      │      │                                  │       │
│  ABRIR  FOLLOW PROSP  CRM    └─ calls / proposta / execução ─┘  FECHAR  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Bloco 1 — Abertura (08h-08h30) · 30min

**Objetivo:** começar o dia com clareza, não reativo a notificação.

- [ ] Rodar `/rotina` ou abrir cockpit matinal
- [ ] Ler `memory/context/pendencias.md` — quais 🔴 críticas tocam vendas?
- [ ] Ler `memory/context/deadlines.md` — algo vence hoje/amanhã?
- [ ] Olhar agenda do dia: calls? presenciais? deslocamento?
- [ ] **Definir Top 3 do dia** — escrever em voz alta (ou texto). Se não couberem em 3 linhas, refinar
- [ ] WhatsApp comercial: 5min triagem (responder o que custa <2min, agendar o resto)

**Saída:** Top 3 do dia escrito + bloco de calls confirmado.

---

### Bloco 2 — Follow-up ativo (08h30-10h) · 90min

**Objetivo:** mover leads que estão na régua (D+1/D+4/D+8) + recuperar parados.

- [ ] Abrir [[../../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline.md]] — filtrar estágio "Proposta enviada" e "Negociação"
- [ ] Para cada lead que entrou em fase de proposta nos últimos 8 dias: aplicar régua D+1/D+4/D+8 (microcopy na §5)
- [ ] Para cada lead na régua de reativação (30/60/90 dias): disparar conforme bloco
- [ ] Para cada lead silencioso há >D+8 sem kill-line ainda: mandar Toque 3 (encerramento) e mover pra `frio`
- [ ] **Atualizar pipeline** — `próxima ação` e `data` de cada lead tocado

**Saída esperada:** 5 follow-ups disparados (meta diária §6).

---

### Bloco 3 — Prospecção / Outbound (10h-11h30) · 90min

**Objetivo:** alimentar topo do funil. Sem novos prospects entrando, pipeline morre em 30 dias.

- [ ] Abrir lista de prospecção (indicações Matheus · lista BDR · saídas do `/buscar-memoria`)
- [ ] Pesquisa prévia rápida (5min/lead): site + LinkedIn + Insta + faturamento estimado
- [ ] Aplicar script de canal apropriado ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.2]] — inbound · indicação · pós-evento)
- [ ] Para cada prospect contatado: criar pasta `oportunidades/{slug}/` com `lead-profile.md`
- [ ] Adicionar linha no `pipeline.md` (estágio: `Prospectado` ou `Contatado`)

**Saída esperada:** 3 prospecções novas (meta diária §6).

> [!tip] Prospecção tem o maior ROI escondido do dia
> Toda hora não-prospectada vira buraco no funil 30-60 dias depois. Se um dia precisa cortar bloco, **NÃO corte prospecção** — corte CRM e faz na sexta.

---

### Bloco 4 — CRM update (11h30-12h) · 30min

**Objetivo:** manter o pipeline confiável. CRM desatualizado vira mentira que custa decisão.

- [ ] Revisar todos os leads tocados nos blocos 2 e 3 — estágio certo no [[../../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline.md]]?
- [ ] Tags atualizadas (quadrante Q1-Q4, caminho 🅰️/🅱️/🅾️, status `pipeline`/`frio`/`perdido`)
- [ ] **Próxima ação + data** em cada linha (sem isso é só fotografia)
- [ ] Se há leads sem `lead-profile.md`, criar dossiê mínimo

**Saída esperada:** 1 atualização cheia de pipeline (meta diária §6).

---

### Bloco 5 — Tarde livre (12h-17h) · calls + execução

**Objetivo:** entregar as calls agendadas + executar tarefas planejadas (proposta, escrita, gravação Loom etc).

- [ ] Almoço sagrado 12h-13h (não agendar call aqui)
- [ ] Calls do dia: chegar 10min antes, abrir Fireflies, ter [[../funil/etapas/04-reuniao|etapa 04-reuniao]] no segundo monitor
- [ ] Imediatamente após cada call (≤2h): atualizar dossiê em `oportunidades/{slug}/meeting-notes/` + próxima ação no pipeline + WhatsApp de reforço ao lead
- [ ] Tempo livre = escrever propostas (SLA <24h pós-reunião) ou avançar pendências comerciais

---

### Bloco 6 — Fechamento do dia (17h-17h30) · 30min

**Objetivo:** o dia não termina até estar registrado.

- [ ] Conferir Top 3 do dia (do Bloco 1): cumpriu? o que ficou?
- [ ] Atualizar `pipeline.md` se algo mudou na tarde
- [ ] Para cada call do dia: dossiê + próxima ação registrados? proposta agendada se aplicável?
- [ ] Agendar follow-ups no Calendar (datas D+1/D+4/D+8 dos que receberam proposta hoje)
- [ ] Verificar WhatsApp comercial: alguém respondeu hoje sem ter resposta minha?
- [ ] Olhar agenda de amanhã — preparar mentalmente

**Saída:** dia fechado. Nada pendente "na cabeça".

> [!success] Critério "dia fechado"
> Se desligar o computador agora, alguém abrindo `pipeline.md` consegue continuar de onde parei? Se sim, dia fechado. Se não, faltam 10min.

---

## 3. Checklist diário (cópia rápida)

```
DIA __/__/____  ·  Top 3: ___________________________________

ABRIR
[ ] /rotina + cockpit
[ ] Pendências críticas vendas
[ ] Deadlines vencendo
[ ] Agenda do dia conferida
[ ] Top 3 escrito

OPERAR
[ ] 5 follow-ups disparados
[ ] 3 prospecções novas
[ ] CRM atualizado
[ ] Calls feitas + dossiê em ≤2h
[ ] Proposta(s) pendente(s) avançada(s)

FECHAR
[ ] Pipeline reflete realidade
[ ] Follow-ups de amanhã agendados no Calendar
[ ] WhatsApp comercial zerado
[ ] Dia registrado em sessions/ via /salve
```

---

## 4. Resposta rápida a leads — SLA por canal

| Canal | SLA primeira resposta | Por quê |
|-------|----------------------|---------|
| **Inbound (LP, formulário)** | ≤30min | Lead esfria em 1h. ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas\|funil-vendas §INBOUND]]) |
| **Indicação** | ≤24h | Quente pelo indicador, mas dorme se demorar muito |
| **WhatsApp espontâneo** | ≤2h em horário comercial | Expectativa cultural BR: WhatsApp é instantâneo |
| **Pós-evento** | ≤24h com detalhe específico do papo | Sem detalhe vira spam |
| **Pós-reunião (dossiê + próxima ação)** | ≤2h | Mostra profissionalismo e mantém momentum |
| **Pós-reunião (proposta formal)** | ≤24h | Atraso aqui derruba 30-40% das chances ([[../funil/etapas/04-reuniao\|etapa 04 §métricas]]) |

> [!warning] Anti-pattern crítico
> "Te aviso quando eu tiver tempo" = **morto**. Sempre devolver com **data**. Mesmo "hoje à noite te respondo direito" é melhor que silêncio.

---

## 5. Cadência de contatos — microcopy pronto

> Microcopy completo na fonte canônica [[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §4]]. Aqui o resumo operacional.

### Régua pós-reunião sem resposta

| Toque | Quando | Canal | Mensagem (resumida) |
|-------|--------|-------|---------------------|
| **D+1** | Dia seguinte da call | WhatsApp ou email | "Conforme prometido, resumo: [dor] · [R$ na mesa] · [investimento]. Quando você acha que vai ter resposta?" |
| **D+4** | 4 dias após proposta | WhatsApp | "Só passando pra ver se chegou o resumo. Dúvida que posso responder rápido?" |
| **D+8** | Último toque ativo | WhatsApp | "Último contato meu por agora. Quando o [problema específico] estiver pesando, me chama." |
| **Kill-line D+10** | Sem resposta | — | Move pra `frio` no pipeline. Reativa em 30d. |

### Régua de reativação (frio)

| Dia | Gatilho | Microcopy |
|-----|---------|-----------|
| **30d** | Conteúdo / case novo | "Lembrei de você porque publicamos case de operação parecida. Posso te mandar?" |
| **60d** | Mudança de contexto | "2 meses depois — aquela dor que descreveu ainda trava o crescimento?" |
| **90d** | Encerramento | "Última vez que entro em contato. Se um dia fizer sentido, me procura." |

### Pós-reunião com call positiva

**WhatsApp ≤1h após call:**
> "[Nome], obrigado pela conversa. Conforme combinado, te envio a proposta até [data D+1]. Combinamos quinta às 14h pra GO/NO-GO, certo?"

### Após "sim" (fechamento)

**Imediato:**
> "Ótimo. Te mando contrato agora pelo [WhatsApp/email]. Consegue assinar ainda hoje? Kickoff [data]."

---

## 6. Metas diárias Q2

| Meta | Por dia | Por semana | Por que essa régua |
|------|---------|------------|---------------------|
| **Prospecções novas** | 3 | 15 | Topo do funil. Sem isso vira só follow-up de pipeline morrendo. |
| **Follow-ups disparados** | 5 | 25 | Mantém leads em fase de proposta vivos. |
| **Calls realizadas** | 1 | 4-5 | Combo prospecção+show: ~4-5 calls/semana é meta realista. |
| **Atualizações de pipeline** | 1 cheia | 5 cheias | Pipeline sem atualização vira mentira. |

> [!info] Metas vs. realidade
> Em semanas com presencial cliente (Bravo/Maqlam/PeleVet), prospecção desce. Compensa em semana seguinte. **Não compensa cortar follow-up** — leads quentes esfriam.

---

## 7. Análise de métricas — sexta-feira 17h

> Cadência semanal, não diária. Vai na rotina diária porque sexta é dia de exceção.

- [ ] Abrir `MAPA-FUNIL.md §5 painel "onde estou agora"`
- [ ] Recalcular 4 métricas-cockpit (resposta · qualificação · ciclo · win rate)
- [ ] Comparar com semana anterior (subiu? caiu? por quê?)
- [ ] Atualizar `pipeline.md` rodapé (changelog semanal)
- [ ] Registrar aprendizado em `memory/sessions/YYYY-MM-DD-weekly.md` — 1 frase: "o que mudei?"
- [ ] Decidir: foco da próxima semana (mais prospecção? recuperação? proposta?)

**Saída esperada:** decisão clara pra segunda. Não "vou ver" — "segunda 8h ataco X".

---

## 8. Reuniões comerciais recorrentes

| Reunião | Cadência | Quem | Pauta |
|---------|----------|------|-------|
| **Weekly comercial (sexta 17h-18h)** | Toda sexta | Lucas + Victor | O que fechou · o que travou · objeção da semana · ajuste de script |
| **Sync handover (após cada fechamento)** | Ad-hoc | Lucas → Victor | Cliente · dor principal · ROI prometido · expectativa mês 1 · kickoff ([[../funil/MAPA-FUNIL\|MAPA §6]]) |
| **Sprint recuperação (1ª segunda do mês)** | Mensal | Lucas | Auditoria leads frios últimos 30d · disparar reativação ([[#10. Recuperação de leads parados]]) |
| **Trimestral (1ª segunda do trimestre)** | Q1-Q4 | Lucas + Victor | Pipeline forecast · ajuste metas Q2 · entrada/saída de canal |

> [!note] Cliente atual quase nunca cabe em horário fixo
> Calls com lead/cliente são pontuais, não recorrentes. Use a tarde livre. Reuniões recorrentes acima são **internas** (Eloscope ↔ Eloscope), não com cliente.

---

## 9. Priorização de leads — matriz quente/morno/frio × Q2/Q3

Quando bater no Bloco 2 (follow-up) com mais de 10 leads em aberto, priorizar por essa ordem:

| Prioridade | Critério | Exemplos atuais (15/05) |
|------------|----------|-------------------------|
| **🔥 P1** | Lead Q2 + reunião feita + ainda em janela <14d | Enertelles (Bloco A 1ª sem junho), Marcos (a-classificar discovery), PeleVet (proposta 11/05) |
| **🟠 P2** | Lead Q2 + proposta enviada D+1 a D+8 | Daniel Queiroz (OpenClaw, call 29/04) |
| **🟡 P3** | Lead Q2 ativo upsell (cliente já operando) | ReabilitaCão (Fran), Morgana, Jean |
| **🔵 P4** | Lead Q2 a-classificar | Innover, Philip Funil, Lifeskill Levy |
| **⚪ P5** | Lead Q2 frio reativável | Femina, Dra Flávia, El Clinic |
| **❌ skip** | Não-Q2 ou fora-escopo-6os | Shalomshop, Levy Imperm., Bravo (WL é trilha separada) |

**Regra:** P1 e P2 **sempre antes** de P3-P5. **Nunca trabalhar lead fora-escopo no horário comercial Q2** — desperdiça cabeça.

> [!tip] Sinal de pipeline saudável
> Pelo menos 2 leads em P1 + 3 leads em P2 simultâneo. Menos que isso = sprint de prospecção urgente.

---

## 10. Recuperação de leads parados — sprint mensal

> Cadência: **primeira segunda do mês**. Bloco fixo 09h-12h no Calendar.

### Procedimento

1. **Listar candidatos** — abrir `pipeline.md`, filtrar status `frio` + última-ação > 30 dias atrás
2. **Triagem por valor** — cruzar com [[../funil/MAPA-FUNIL#1.-quem-atacamos--icp-q2|ICP Q2]]. Lead não-Q2 vai pra fila baixa.
3. **Pesquisa de contexto** — algo mudou no negócio dele? (LinkedIn recente, IPO, contratação, perda de cliente, etc)
4. **Disparar régua reativação** — usar microcopy §5 conforme dia 30/60/90
5. **Marcar resposta esperada** — agendar follow-up D+7 no Calendar pra cada disparo
6. **Atualizar pipeline** — leads que não responderem em D+7 do toque 30d → testam toque 60d daqui 30 dias

**Meta sprint:** disparar reativação em 100% dos leads frios Q2 elegíveis. Reativar **1-3 leads** por sprint = sucesso.

---

## 11. Acompanhamento pós-reunião — SLA inegociável

> **A única coisa que separa Eloscope de "mais uma empresa de IA":** profissionalismo do pós-reunião.

| Ação | Prazo | Onde registrar |
|------|-------|----------------|
| WhatsApp de reforço (agradece + reforça combinado + ETA proposta) | ≤1h após call | WhatsApp do lead |
| Dossiê atualizado (`lead-profile.md`) com tudo da call | ≤2h após call | `oportunidades/{slug}/lead-profile.md` |
| Meeting notes processado (Fireflies link + decisões + próxima ação) | ≤2h após call | `oportunidades/{slug}/meeting-notes/YYYY-MM-DD-resumo.md` |
| Próxima ação registrada no pipeline | ≤2h após call | `pipeline.md` linha do lead |
| Proposta formal enviada | ≤24h após call | Email + WhatsApp + pasta `oportunidades/{slug}/proposta.md` |
| Cobranças/follow-up futuro agendados no Calendar | ≤24h após call | Google Calendar |

> [!danger] Anti-pattern fatal
> Sair da call e esperar "ter tempo amanhã". Amanhã vem outra call e a anterior fica obsoleta. **Bloco 5 da rotina já reserva tempo pós-call** — usa.

---

## 12. Cobertura das 13 subtarefas da pendência

> Mapping pra rastreabilidade — cada subtarefa de "Rotina Comercial Diária" da pendência está coberta:

| # | Subtarefa | Onde resolveu |
|---|-----------|---------------|
| 1 | Definir horários (follow-up, prospecção, organização CRM) | §2 Cockpit visual (blocos 2, 3, 4) |
| 2 | Rotina de atualização e resposta rápida de leads | §4 SLA por canal · §6 metas diárias |
| 3 | Metas diárias | §6 |
| 4 | Análise de métricas | §7 |
| 5 | Reuniões comerciais | §8 |
| 6 | Checklist diário | §3 |
| 7 | Priorização de leads | §9 |
| 8 | Recuperação de leads parados | §10 |
| 9 | Acompanhamento pós-reunião | §11 |
| 10 | Cadência de contatos | §5 |
| 11 | Definir horários (org CRM) | §2 Bloco 4 |
| 12 | Definir horários (prospecção) | §2 Bloco 3 |
| 13 | Definir horários (follow-up) | §2 Bloco 2 |

---

## 13. Referências rápidas

| Preciso de... | Vou em... |
|---------------|-----------|
| Mapa estratégico do funil | [[../funil/MAPA-FUNIL\|MAPA-FUNIL]] |
| Detalhe de cada etapa | [[../funil/etapas/\|etapas/]] |
| Scripts completos por canal | [[../../../empresa/projetos/sales-os/02-comercial/playbook\|playbook §1.2]] |
| Pipeline real (46 leads) | [[../../../empresa/projetos/sales-os/02-comercial/pipeline\|pipeline]] |
| Tratamento de objeções | [[../../../empresa/projetos/sales-os/02-comercial/playbook\|playbook §4]] |
| Régua handover Lucas→Victor | [[../funil/MAPA-FUNIL\|MAPA-FUNIL §6]] |
| Metodologia SPIN | [[../metodologia/spin-playbook-v0.2\|spin-playbook]] |
| Dossiê de lead | [[../oportunidades]] |

---

## Changelog

- **2026-05-15 (v0.2):** versão inicial com 13 seções cobrindo 13 subtarefas da pendência. Blocos 1-6 calibrados pra realidade Lucas (única pessoa no comercial, sem ferramenta CRM dedicada, pipeline manual em `pipeline.md`). Pilotada a partir de 18/05 (semana 21).

---

*Eloscope · Elo Sales OS · Rotina Comercial Diária v0.2*
