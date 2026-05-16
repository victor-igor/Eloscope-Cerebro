---
tipo: etapa-funil
funil: elo-sales-os
etapa: "05-proposta"
ordem: 5
status: ativo
tempo-medio: "envio ≤24h pós-reunião · ciclo 3-10 dias até decisão"
dono: Lucas
tags:
  - vendas/funil
  - etapa/05-proposta
  - spin
data: 2026-05-15
---

# Etapa 05 — Proposta

> **Objetivo nesta etapa:** transformar a aceitação da call ("manda a proposta") em **decisão clara** (sim/não/data) no menor tempo possível, com proposta que **espelha o que o lead disse na call** — não um template genérico.
> **Tempo médio:** envio ≤24h após reunião · ciclo 3-10 dias até decisão.
> **Dono:** Lucas
> **Etapa anterior:** [[04-reuniao|← Reunião de Diagnóstico]] · **Próxima:** [[06-follow-up-negociacao|Follow-up / Negociação →]]

> [!note] Lápis, não caneta
> Templates estão em `empresa/projetos/sales-os/templates/comercial/`. Pricing canônico em [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao]] (não negociar abaixo do range). Aqui o foco é **como montar, enviar e ancorar a decisão** — não como redigir do zero.

> [!warning] SLA de 24h é dogma
> Atraso aqui derruba **30-40% das chances** ([[04-reuniao|etapa 04 §métricas]]). Se a call foi quinta 16h, proposta no lead até sexta 16h. Dia 1 da régua D+1 começa a contar **da entrega da proposta**, não da call.

---

## 🚪 Quando o lead ENTRA aqui

- Etapa 04 concluída — reunião feita, cálculo-âncora aceito
- Lead **pediu proposta** ou **aceitou receber** (Não confundir "manda alguma coisa" com "pedido formal")
- Caminho comercial decidido (🅰️ Diagnóstico R$ 1.200 · 🅱️ Beta R$ 2-3k setup + R$ 1.500/mês · 🅾️ Real R$ 4-6k + R$ 3-5k/mês)
- Data combinada na call pra envio da proposta + data de retorno

## 🎯 Quando o lead SAI pra próxima

- Proposta entregue (PDF/HTML + link) **com confirmação de recebimento**
- Lead acessou o link (analytics confirmam) OU confirmou no WhatsApp
- Status no `pipeline.md` atualizado para `Proposta enviada`
- Régua de follow-up D+1/D+4/D+8 agendada no Google Calendar

---

## ✅ Indicadores de SUCESSO

> [!success] Sinais de proposta no caminho do fechamento
> **Envio dentro do SLA**
> - Proposta entregue em **<24h** após reunião
> - Proposta chega com **o problema do cliente na primeira página** (não com a empresa Eloscope)
> - Investimento aparece **depois do ROI** projetado
>
> **Engajamento pós-envio**
> - Lead **abre o link rápido** (analytics: <2h)
> - Lead **responde com pergunta concreta** sobre escopo/prazo (sinal de "vou decidir", não "vou ignorar")
> - Lead **menciona internalização** ("vou apresentar pra equipe")
> - Lead **propõe ajuste de escopo** (querer reduzir = engajamento; querer aumentar = ótimo)
>
> **Combinação de retorno**
> - Data e horário do retorno **combinados ainda na call**, não em aberto
> - Lead **confirma a data** quando enviado o lembrete D-1

**Ação:** mantém régua suave (toque D+1 reforço + check D+3) e prepara contra-argumentos em paralelo ([[06-follow-up-negociacao]]).

---

## 🚨 Indicadores de RISCO

> [!warning] Sinais de proposta indo pro buraco
> **Envio atrasado**
> - **Proposta passou de 48h** após reunião — chance cai 40-50%
> - Lead **precisa pedir** a proposta no D+2 ("não chegou ainda?")
>
> **Recepção fria**
> - Lead **não abre o link** em 48h
> - Lead responde "**recebi, vou ver**" sem pergunta concreta
> - **Visualizou no WhatsApp** mas não respondeu em 24h
> - Lead pede **PDF "pra imprimir"** sem comentar nada
>
> **Distorção de proposta**
> - Lead **pediu desconto** sem contrapartida (case/depoimento/referência)
> - Lead **pediu inclusão fora do escopo** ("dá pra incluir um site novo?")
> - Lead **trouxe outro decisor** que não estava na call (precisa pitch de novo)
>
> **Falta de retorno marcado**
> - "**Te aviso quando decidir**" — sem data combinada = morto

**Ação:**
- Disparar **Toque D+1 reforço imediato** com resumo dos pontos-chave + pergunta-âncora aberta
- Se silêncio até D+4: aplicar **Toque 2** ([[06-follow-up-negociacao]])
- Se pedido fora-escopo: rejeitar com classe ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|anti-software-house]]) — não estender escopo

---

## ❌ Indicadores de PERDA

> [!danger] Encerrar ou pausar
> **Recusa explícita**
> - "**Não vamos fechar agora**" sem abrir janela futura
> - "**Vamos com outro fornecedor**" — pedir feedback (qual gap?) + encerrar
> - "**Não justifica o investimento**" sem permitir contraposição de ROI
>
> **Lead some**
> - **3 toques sem resposta** (D+1, D+4, D+8) — kill-line
> - **Adia decisão 2x** ("semana que vem" → "próximo mês")
>
> **Decisão pra terceiro**
> - Lead **delegou pra terceiro** que nunca esteve na call ("envie pra meu sócio decidir") — sem call com decisor real, é morto
> - **Comitê novo apareceu** sem antecedência — começa do zero ou pausa

**Ação:** mover pra `frio` (se sumiu) ou `perdido` (se recusou). Reativação em 30d com gatilho de conteúdo se aplicável ([[../../rotinas/ROTINA-DIARIA|ROTINA-DIARIA §10]]).

---

## 🎬 O que FAZER nesta etapa

### Antes de redigir (na mesma noite da call ou manhã seguinte)

1. **Releitura do `lead-profile.md`** atualizado pós-call
2. **Releitura das meeting notes** + Fireflies (pontos-chave em palavras DELE)
3. **Decidir caminho comercial** definitivo (🅰️ / 🅱️ / 🅾️) — baseado em [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao §regra de decisão]]
4. **Cálculo ROI** baseado nos números que ele deu na call (NÃO inventar)

### Estrutura da proposta (PDF/HTML em ordem)

> Template: `empresa/projetos/sales-os/templates/comercial/Proposta_Lead_Template.md`. Ordem das seções **não negociável**:

1. **Resumo do diagnóstico** — a dor do cliente **nos termos dele** (frase exata se possível)
2. **O que será implementado** — 3 agentes específicos pra operação dele (não lista genérica)
3. **ROI projetado** — baseline atual × projeção em 90 dias (números dele × cálculo)
4. **Investimento** — setup + mensalidade (range fechado, mostrar custo de NÃO fazer)
5. **Próximo passo** — data de kickoff, o que acontece na semana 1
6. **Garantia / saída** — modelo de revisão 30d + anti-lock-in (playbook fica com cliente)

**Anexos opcionais:**
- 1 case relevante (sem nomear se não tem autorização)
- Stack canônico ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|§stack]])
- Cronograma ([[../../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|pacote-6os-q2 §6]])

### Envio

1. **Email + WhatsApp + Google Drive link** (3 canais — sem dependência de 1 só)
2. **Mensagem-âncora** no WhatsApp: "Conforme combinado, segue proposta. Resumo: [dor] · [ROI projetado] · [investimento]. Quinta às 14h você me dá GO/NO-GO, certo?"
3. **Salvar PDF na pasta** `oportunidades/{slug}/proposta.md` + `proposta.pdf`
4. **Atualizar `pipeline.md`** para `Proposta enviada` + próxima ação D+1
5. **Agendar Calendar:** lembrete D+1 (toque reforço) · D+4 (toque check) · D+8 (kill-line)

### Pós-envio (D+0)

1. **Confirmação de recebimento** — se lead não responder em 4h, pergunta direta no WhatsApp ("chegou?")
2. **Loom curto opcional** (3min) explicando os principais pontos da proposta — só pra leads que pediram explicação adicional

---

## 🚫 O que NÃO fazer (anti-patterns)

- **Não usar template genérico sem personalizar** — proposta sem nome do lead, vertical, números dele = lixo
- **Não passar de 24h pra enviar** — sinal de falta de profissionalismo, derruba 30-40%
- **Não colocar preço no meio** — preço **depois** do ROI sempre. Quem lê primeiro o preço sai com âncora ruim
- **Não negociar abaixo do range mínimo** ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|invariante #3]]) — desconto = contrapartida (case/depoimento)
- **Não estender escopo pra fechar** — pedido "fora do padrão" é red flag anti-software-house. Recusar com classe
- **Não enviar proposta sem combinar data de retorno** — "te aviso" = morto
- **Não responder pedido de desconto com SIM imediato** — sempre **acknowledge → explore → respond** (LAER)

---

## 🧠 Dica SPIN aplicável aqui

> [!tip] Pergunta de Need-payoff (N) na proposta
> A proposta deve **forçar o lead a verbalizar o ganho**, não você empurrar.
>
> **Onde aplicar:** na seção de ROI projetado, terminar com pergunta aberta:
> > *"Com base no que conversamos, se o Elo OS recuperar 30% dos leads que você está perdendo hoje, o que isso muda no seu Q3?"*
>
> **Por que funciona aqui:** Need-payoff é o tipo de pergunta com **>10× mais ocorrência em top performers** ([[../../metodologia/spin-playbook-v0.2|SPIN Playbook §1.4]]). Lead que **verbaliza** o ganho vai comprar. Lead que **lê** sem verbalizar pode comprar — ou não.

Detalhe completo: [[../../metodologia/spin-playbook-v0.2|SPIN Playbook v0.2]]

---

## 📜 Scripts / templates pra usar

- `empresa/projetos/sales-os/templates/comercial/Proposta_Lead_Template.md` — template canônico
- `empresa/projetos/sales-os/templates/comercial/Proposta_Valor_Template.md` — VPC por vertical Q2
- `empresa/projetos/sales-os/templates/comercial/Objecoes_Matriz_Template.md` — preparar contra-argumento
- [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao]] — pricing + caminhos
- [[../../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|pacote-6os-q2]] — escopo + cronograma (anexável)

---

## 📊 Métricas dessa etapa

| Métrica | Como medir | Meta Q2 | Por quê |
|---------|------------|---------|---------|
| **Tempo reunião → envio proposta** | Data envio menos data reunião | **<24h** | Atraso = 30-40% perda |
| **Taxa de abertura do link** | Analytics da proposta | **>80% em 48h** | Sinal de interesse genuíno |
| **Taxa proposta → fechamento** | Fechados / propostas enviadas | **>30%** ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas\|funil-vendas]]) | Métrica-chave de qualificação certa |
| **% propostas com retorno marcado na call** | Saiu da call com data específica de retorno? | **>90%** | "Te aviso" = morto |
| **Ciclo médio Proposta → Decisão** | D do envio até GO/NO-GO | **<10 dias** | >10d sem decisão = vai virar frio |

---

## 🔗 Próxima etapa

→ [[06-follow-up-negociacao|Etapa 06: Follow-up / Negociação]]

---

## 🧪 Cases reais

### Bravo Agency — Opção B (R$ 3.900) — fechou

- Discovery 26/04 (sábado presencial)
- Proposta v1.1 entregue 28/04 com **Opção A (R$ 2.900) e Opção B (R$ 3.900)** — Lucas validou em call
- Bravo **escolheu Opção B** (escopo maior, garantia 30d)
- **1ª parcela R$ 975 paga 29/04** ([[../../../memory/context/pendencias|pendencias]])
- Pagamento parcelado 4×R$ 975 (15/05, 15/06, 15/07)

**Lição aplicada:** dar **2 opções** ancora o "não comprar" como 3ª opção, não a default. Bravo escolheu a maior. Funciona quando lead já está convicto e quer escolher escopo.

### Enertelles — Proposta v4 modular — travou

- Reunião 30/04 com Telles + Alex
- Proposta v4 reestruturada: **Bloco A** (processo+IA R$ 3.500 setup + R$ 1.500/mês mín 3 meses) + **Bloco B** (site+marca R$ 3.000)
- Pricing modular permitiu **decisão por bloco** — Telles topou Bloco A pra 1ª semana de junho
- Travou no timing (equipe em férias) — não no preço

**Lição aplicada:** modularizar proposta permite cliente **comprar parte** quando não comporta o todo. Não-fechamento aqui é **adiado**, não **perdido**.

---

## Changelog

- **2026-05-15 (v0.2):** versão inicial. Estrutura 6 seções da proposta (não-negociável). SLA 24h dogma. Envio em 3 canais (email + WhatsApp + Drive). Cases Bravo (fechou) + Enertelles (modularizou e adiou) como referências.
