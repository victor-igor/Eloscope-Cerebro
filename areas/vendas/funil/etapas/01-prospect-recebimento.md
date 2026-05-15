---
tipo: etapa-funil
funil: elo-sales-os
etapa: "01-prospect-recebimento"
ordem: 1
status: ativo
tempo-medio: "<30min (inbound) · ≤24h (indicação/outbound)"
dono: Lucas
tags:
  - vendas/funil
  - etapa/01-prospect
  - spin
data: 2026-05-15
---

# Etapa 01 — Prospect / Recebimento

> **Objetivo nesta etapa:** capturar lead de qualquer um dos 3 canais (Outbound · Indicação · Inbound), classificar minimamente (Q2? vertical? perfil?), e abrir dossiê em `oportunidades/{slug}/`.
> **Tempo médio:** <30min (Inbound) · ≤24h (Indicação/Outbound) — depende do canal.
> **Dono:** Lucas
> **Etapa anterior:** — · **Próxima:** [[02-contato-inicial|Contato Inicial →]]

> [!note] Lápis, não caneta
> Esta etapa é o **portão de entrada** do funil. Mais lead chegando ≠ mais venda — lead errado consome tempo que devia ir pros Q2. Ajustar critérios conforme calls reais ensinam.

---

## 🚪 Quando o lead ENTRA aqui

Lead chega por um dos 3 canais ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas §funis]]):

- **Outbound** — você identificou o nome e contato em pesquisa ativa (LinkedIn, listas, evento)
- **Indicação** — cliente atual, parceiro ou network passou o contato
- **Inbound** — preencheu LP, comentou conteúdo, mandou DM espontâneo

## 🎯 Quando o lead SAI pra próxima

- Pasta `oportunidades/{slug}/` criada com `lead-profile.md` mínimo (nome, vertical, canal, vincular fonte)
- Linha adicionada no [[../../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline.md]] com estágio `Prospectado`
- Hipótese de Q (quadrante) preenchida — mesmo que com `?`
- Decisão: **vale tentar contato** (avança pra Etapa 02) ou **descarte imediato** (Q1/Q3/Q4 declarados)

---

## ✅ Indicadores de SUCESSO — vale investir tempo

> [!success] Sinais positivos no recebimento
> **Encaixe Q2 visível**
> - Site/Insta mostra **operação de serviço** (consultoria, clínica, agência, imobiliária, solar)
> - Há **vendedor/SDR mencionado** ou cargo similar (Comercial, Atendimento, BDR)
> - Ticket de produto/serviço **claramente >R$ 500** (afasta Q1 de baixo ticket)
>
> **Sinais de pré-aquecimento**
> - **Indicação de cliente atual** (ReabilitaCão, Bravo, Maqlam) — quente por default
> - Inbound veio depois de **conteúdo específico** (LP do Elo OS, post de pipeline) — sabe o que quer
> - Pós-evento **com detalhe específico** do papo presencial guardado
>
> **Sinais de prontidão**
> - Lead veio com **dor articulada na primeira mensagem** ("preciso resolver follow-up", "perco lead toda semana")
> - Lead já buscou Eloscope no Google antes (track no Insta/site)

**Ação:** abre dossiê COMPLETO (não mínimo), faz pesquisa prévia de 15min, avança rápido pra Etapa 02.

---

## 🚨 Indicadores de RISCO — pode ser dispersor de tempo

> [!warning] Sinais de alerta no recebimento
> **Ambiguidade de quadrante**
> - Vertical não-óbvia (consultoria genérica, "empreendedor digital")
> - Operação solo sem mencionar time comercial
> - "Empreendedor" sem empresa registrada visível
>
> **Sinais transacionais**
> - Pediu **proposta de cara**, sem permitir qualificação ("manda preço por aqui")
> - Mencionou **só chatbot/IA-só** sem entender o que é Elo OS
> - Indicação **morna** — indicador não validou perfil ("pode ser que se interesse")
>
> **Histórico problemático**
> - Lead **já passou por aqui antes** (frio/perdido) sem mudança de contexto óbvia
> - Vem de **canal não-validado** (Pinterest, Discord aleatório)

**Ação:** dossiê mínimo apenas, hipótese de Q com `?`, e avança pra Etapa 02 **só se** Bloco 3 de prospecção do dia tem capacidade. Caso contrário, fila baixa.

---

## ❌ Indicadores de PERDA — descarte na entrada

> [!danger] Não entra no funil
> **Fora de escopo declarado**
> - Vertical **declaradamente Q1** (autônomo, freelancer, prestador solo) sem time comercial
> - Vertical **declaradamente Q3/Q4** (e-commerce, infoproduto, app) — produto, não serviço
> - **Alimentação baixo-ticket** ou **fotografia nicho** ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao §fora do 6OS]])
>
> **Pedido fora do produto**
> - Pediu **site/app/ERP customizado** (anti-software-house)
> - Pediu **só chatbot** sem operação comercial atrás (produto diferente)
> - Pediu **mentoria/consultoria standalone** (trilha separada)
>
> **Lead-spam**
> - Mensagem genérica copy-paste tipo "ofereço serviços X" (parceiro, não cliente)
> - Lead **já recusou Eloscope** com "não" explícito <90 dias atrás

**Ação:** **descarte com classe** ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.4]]). Manter na newsletter se aplicável. **Não criar pasta `oportunidades/`** — só polui o repo.

---

## 🎬 O que FAZER nesta etapa

### Para Outbound (você prospectou)

1. **Pesquisa prévia** (≤15min): site + LinkedIn empresa + LinkedIn dele + Instagram da empresa + busca de notícias
2. **Hipótese de dor** (1 frase): qual o gargalo provável pelo vertical Q2? Ver [[../../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|pacote-6os-q2 §2]] (gargalos por vertical)
3. **Encaixe persona** ([[../contexto/personas|personas]]): Rafael / Camila / Bruno?
4. **Criar dossiê** em `oportunidades/{slug}/lead-profile.md` com template
5. **Adicionar ao pipeline.md** com estágio `Prospectado`, próxima ação "abordagem outbound"
6. **Avança pra Etapa 02** no Bloco 3 da rotina (prospecção)

### Para Indicação

1. **Mensagem rápida pro indicador** (mesmo dia): "Vou abordar — qual contexto você passou pra ele?" — pra alinhar discurso
2. **Pesquisa prévia leve** (5min): apenas confirmar quem é, vertical
3. **Criar dossiê** com campo `indicador: {nome}` preenchido
4. **Adicionar ao pipeline.md** com estágio `Prospectado` (caminho Indicação)
5. **Avança IMEDIATAMENTE pra Etapa 02** (SLA: ≤24h após receber contato)

### Para Inbound (LP / DM / formulário)

1. **Verificar fonte** — qual material/canal trouxe? salvar pista
2. **Pesquisa prévia OBRIGATÓRIA** (≤10min) — porque o lead já investiu interesse, você precisa estar à altura
3. **Criar dossiê** com `fonte_inbound: {LP/Insta/Indicação/etc}` preenchido
4. **Adicionar ao pipeline.md** com estágio `Prospectado` (caminho Inbound, status alta prioridade)
5. **Avança pra Etapa 02 EM ≤30min** — SLA crítico de inbound ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas §INBOUND]])

---

## 🚫 O que NÃO fazer (anti-patterns)

- **Não criar pasta `oportunidades/` pra lead fora-escopo declarado** — só polui. Marca no pipeline como `fora-escopo-6os` e move pra newsletter se aplicável.
- **Não responder inbound em "te vejo amanhã"** — atraso aqui esfria 30-40% dos inbound. SLA <30min ou vira frio.
- **Não pular pesquisa prévia em outbound** — abordagem genérica "vi que vocês são uma empresa de X" queima crédito imediato.
- **Não confundir indicação com "indicação"** — se o indicador não recomendou ativamente, é só uma referência. Pedir validação.
- **Não passar lead pra Etapa 02 sem dossiê criado** — se você não escreveu o `lead-profile.md`, na próxima sessão você esquece o contexto.

---

## 🧠 Dica SPIN aplicável aqui

> [!tip] Não tem SPIN aqui ainda — tem hipótese
> Nesta etapa você ainda **não fez pergunta nenhuma** ao lead. Mas precisa formular **hipótese de Problema** (P) baseada no vertical Q2 dele, pra entrar na Etapa 02 com pé direito.
>
> **Exemplo:** lead = imobiliária com 5 corretores e LP rodando.
> - Hipótese P: "lead frio sem SDR — gargalo provável é qualificação inicial"
> - Pergunta de Situação que cabe na Etapa 02: "Hoje, quem é o primeiro humano que conversa com um lead novo no WhatsApp?"
> - Não vá pra Etapa 02 sem uma hipótese de dor escrita no dossiê — abordagem sem hipótese é fishing trip.

Detalhe completo: [[../../metodologia/spin-playbook-v0.2|SPIN Playbook v0.2 §2.0 princípios não-negociáveis]] (pesquisa antes da call mata Situação).

---

## 📜 Scripts / templates pra usar

- [[../../../empresa/projetos/sales-os/02-comercial/playbook|Playbook §1 — Qualificação BANT]]
- `empresa/projetos/sales-os/templates/comercial/Lead_Profile_Template.md` — dossiê do lead
- [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|Oferta-padrao §regra de decisão]] — Q2 + faturamento + dor → caminho 🅰️/🅱️/🅾️
- [[../contexto/personas|Personas]] — Rafael / Camila / Bruno

---

## 📊 Métricas dessa etapa

| Métrica | Como medir | Meta Q2 | Por quê |
|---------|------------|---------|---------|
| **Leads novos / semana** | Linhas adicionadas no `pipeline.md` na semana | 10-15 | Topo do funil. Sem fluxo, pipeline morre 30d. |
| **% Q2 vs fora-escopo** | Q2 / total de leads | **>60%** | Se <60%, prospecção está mirando errado |
| **Tempo de criação dossiê** | Da chegada ao dossiê salvo | <30min Inbound · <24h outros | SLA mata lead inbound |
| **% leads com hipótese P escrita** | Dossiês com hipótese / dossiês criados | **100%** | Hipótese é pré-requisito da Etapa 02 |

---

## 🔗 Próxima etapa

→ [[02-contato-inicial|Etapa 02: Contato Inicial]]

---

## 🧪 Case real — Daniel Queiroz (Inbound LP)

> Lead chegou via formulário da LP em 28/04. Lucas:
> 1. Verificou fonte: LP Elo OS (não LP genérica)
> 2. Pesquisa prévia ≤10min: site OpenClaw, identificou produto, ticket
> 3. Dossiê criado em `oportunidades/daniel-queiroz/`
> 4. Hipótese P: "operação OpenClaw vendendo Elo OS = setup R$1.800 + R$690/mês"
> 5. Avançou pra Etapa 02 em ≤30min
> 6. Call em 29/04 já com pricing rascunhado pra discutir
>
> Pendência: registrar resultado da call ([[../../../memory/context/pendencias|pendencias.md]]).

---

## Changelog

- **2026-05-15 (v0.2):** versão inicial replicando padrão do `04-reuniao.md`. 3 canais (Outbound · Indicação · Inbound) com SLA diferente. Caso Daniel Queiroz como referência prática.
