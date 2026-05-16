---
tipo: etapa-funil
funil: elo-sales-os
etapa: "02-contato-inicial"
ordem: 2
status: ativo
tempo-medio: "≤30min (Inbound) · ≤24h (Indicação/Outbound)"
dono: Lucas
tags:
  - vendas/funil
  - etapa/02-contato-inicial
  - spin
data: 2026-05-15
---

# Etapa 02 — Contato Inicial

> **Objetivo nesta etapa:** primeira mensagem ao lead com SLA respeitado, abertura calibrada por canal, e gancho específico que **provoca resposta** (não pitch, não "queria te apresentar nossa solução").
> **Tempo médio:** ≤30min após chegada (Inbound) · ≤24h (Indicação/Outbound).
> **Dono:** Lucas
> **Etapa anterior:** [[01-prospect-recebimento|← Prospect]] · **Próxima:** [[03-qualificacao|Qualificação →]]

> [!note] Lápis, não caneta
> Microcopy desta etapa é canônico no [[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.2]]. Aqui o foco é **decidir qual abordagem aplicar** e **interpretar a resposta**. Ajustar conforme taxa de resposta real.

---

## 🚪 Quando o lead ENTRA aqui

- Dossiê `oportunidades/{slug}/lead-profile.md` criado na Etapa 01
- Hipótese de dor (P) escrita
- Canal de origem identificado (Outbound · Indicação · Inbound)

## 🎯 Quando o lead SAI pra próxima

- **Resposta recebida** (qualquer resposta, mesmo "não tenho interesse")
- Estágio atualizado no `pipeline.md` para `Contatado`
- Decisão tomada: avança pra **Etapa 03 (Qualificação)** se resposta abre porta, ou **frio** se silêncio após D+8

---

## ✅ Indicadores de SUCESSO

> [!success] Sinais de abordagem que funcionou
> **Resposta rápida + engajada**
> - Resposta em **≤2h** em horário comercial — interesse claro
> - Lead **responde com pergunta** ("o que vocês fazem exatamente?") em vez de "tá bom"
> - Lead **pede agenda na mesma mensagem** ("manda 2 horários") — pulou nível
> - Lead **descreve dor antes de você perguntar** ("é exatamente o que tô precisando, perco lead toda semana")
>
> **Sinais de pré-qualificação**
> - Lead **menciona time** ("tenho 3 vendedores") sem você ter perguntado — Q2 confirmado
> - Lead **menciona urgência** ("preciso resolver antes de Q3")
> - **Indicação validada** ("o {nome do indicador} falou de vocês")

**Ação:** acelera. Pula formalidades. Marca call de qualificação rápida (15-20min) já com horário sugerido. Avança pra Etapa 03.

---

## 🚨 Indicadores de RISCO

> [!warning] Sinais que esfriam
> **Engajamento mínimo**
> - Resposta em **>48h** sem justificativa
> - Resposta em **monossílabos** ("ok", "vou ver")
> - Pediu **só material** sem agendar conversa ("manda PDF que vejo depois")
> - Visualizou mensagem (✓✓ azul) e **não respondeu em 24h**
>
> **Resistência precoce**
> - Pediu **preço logo** sem permitir contexto
> - Disse "**não é prioridade agora**" sem dar abertura futura
> - Pediu **case por escrito antes de call** (pode estar coletando pra fazer internamente)
>
> **Sinais de canal/perfil quebrado**
> - LinkedIn diz "fora de operação" / luto / sabático
> - **Site fora do ar** ou redes sociais paradas há 3+ meses
> - Indicador retroage ("acho que ele não é mais o decisor")

**Ação:**
- Disparar **Toque 2 da régua** (D+3): pergunta-aberta diferente ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §5]])
- Se silêncio persistir até D+8: encerrar com classe, mover pra `frio`
- Se pediu material: enviar **1 link** (Loom curto, não PDF gigante) + pergunta de gancho

---

## ❌ Indicadores de PERDA

> [!danger] Encerrar contato
> - **"Não tenho interesse"** explícito (sem abrir contexto futuro)
> - **"Sai dos meus contatos"** — descadastrar imediato, log no dossiê
> - **3 mensagens sem nenhuma resposta** (D+1 / D+4 / D+8) — kill-line
> - Lead **respondeu agressivo** ou **bloqueou** — encerra sem segunda chance

**Ação:** mover pra `perdido` ou `frio`. Reativação em 60-90d **só se** sinalizou janela futura ("agora não, mas talvez no Q3"). Caso contrário, descarte definitivo.

---

## 🎬 O que FAZER nesta etapa

### Inbound (LP / DM / formulário) — SLA <30min

1. **Confirmar fonte na primeira mensagem** ("Vi que você preencheu o formulário do Elo OS")
2. **Aplicar script Canal 1** ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.2 Canal 1]]) — 3 perguntas curtas pré-call
3. **Se GO nos 3:** "Perfeito. Te mando 2 horários pra call de diagnóstico de 30min."
4. **Se NO-GO claro:** descartar com classe + material da Eloscope
5. **Atualizar pipeline.md:** estágio `Contatado` + próxima ação

### Indicação — SLA ≤24h

1. **Mencionar indicador na primeira frase** ("O {indicador} me passou seu contato")
2. **Aplicar script Canal 2** ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.2 Canal 2]]) — ressonância → SIM → 2 horários
3. **Atualizar pipeline.md**

### Outbound — SLA ≤24h após decidir prospectar

1. **Usar detalhe específico** do lead na abertura (post recente, evento, conquista) — **proibido** "vi que vocês são uma empresa de X" genérico
2. **Aplicar abordagem direta** ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas §OUTBOUND]]) com pergunta-âncora que provoca resposta
3. **Não enviar PDF/material** no primeiro contato — gera leitura passiva
4. **Atualizar pipeline.md**

### Pós-evento (ACIRP, Verhaw) — SLA ≤24h

1. **Citar palavra/frase específica** dele do papo presencial
2. **Aplicar script Canal 3** ([[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §1.2 Canal 3]])
3. **Atualizar pipeline.md**

### Cadência de follow-up se silêncio

> Régua canônica em [[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §5]]. Resumo:

| Toque | Quando | Mensagem | Saída esperada |
|-------|--------|----------|----------------|
| **Toque 1** | Inicial | Script do canal | Resposta direta |
| **D+3** | Sem resposta | Pergunta diferente ("posso te mandar um Loom de 2min?") | Resposta ou silêncio |
| **D+8** | Último ativo | Kill-line: "Último contato meu. Se um dia fizer sentido, me chama." | Resposta tardia ou move pra `frio` |

---

## 🚫 O que NÃO fazer (anti-patterns)

- **Não enviar PDF/material no primeiro contato** — leitura passiva substitui call e mata a conversa
- **Não fazer pitch na primeira mensagem** — "queria te apresentar nossa solução de IA" é spam imediato. Pergunta primeiro
- **Não usar "tudo bem?" sem contexto** — abertura genérica em WhatsApp comercial = mensagem ignorada
- **Não copiar mensagem entre leads** sem ajustar detalhe específico — todo mundo identifica copy-paste
- **Não esperar "ele vai responder eventualmente"** — sem D+3 disparado, lead esfria. **Calendar agenda o D+3 automaticamente**
- **Não confundir "✓✓ azul sem resposta" com "lendo"** — visualizou e não respondeu em 24h = sinal de descarte, dispare D+3

---

## 🧠 Dica SPIN aplicável aqui

> [!tip] Pergunta de Problema (P) implícita no primeiro contato
> A primeira mensagem deve **embutir uma pergunta de Problema** disfarçada de conversa.
>
> **Exemplo Outbound (imobiliária):**
> ❌ "Olá, somos uma empresa de IA que ajuda imobiliárias..."
> ✅ "{Nome}, vi que vocês têm 5 corretores e LP rodando. Curiosidade: como vocês qualificam lead que chega fora do horário comercial hoje?"
>
> A segunda mensagem **força** o lead a pensar na dor (ou não tem dor — descobre logo).
>
> **Por que funciona aqui:** SPIN-puro diz "Situação no início, Problema depois". Mas em primeiro contato frio, Problema embutido em Situação **filtra interesse genuíno** vs curiosidade vazia.

Detalhe completo: [[../../metodologia/spin-playbook-v0.2|SPIN Playbook v0.2]]

---

## 📜 Scripts / templates pra usar

- [[../../../empresa/projetos/sales-os/02-comercial/playbook|Playbook §1.2 — Scripts por canal]] (Inbound · Indicação · Pós-evento)
- [[../../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas §funis paralelos]]
- `empresa/projetos/sales-os/templates/comercial/Objecoes_Matriz_Template.md` — objeções comuns no primeiro contato

---

## 📊 Métricas dessa etapa

| Métrica | Como medir | Meta Q2 | Por quê |
|---------|------------|---------|---------|
| **Taxa de resposta — Outbound** | Responderam / mensagens enviadas | **>20%** | Abaixo disso, script ou lista estão ruins ([[../../../empresa/projetos/sales-os/02-comercial/funil-vendas\|funil-vendas]]) |
| **Taxa de resposta — Indicação** | Responderam / abordados | **>80%** | Pré-aquecido pelo indicador |
| **Taxa de resposta — Inbound** | Responderam / chegou pelo formulário | **>90%** | Já quis falar — se não responde, foi atraso seu |
| **Tempo de primeira resposta** | Lead respondeu em quanto tempo | Inbound <2h · Outros <24h | Sinal de urgência mútua |
| **% que vira call agendada** | Calls marcadas / responderam | **>50%** | Conversão de "respondeu" pra "topou conversar" |

---

## 🔗 Próxima etapa

→ [[03-qualificacao|Etapa 03: Qualificação]]

---

## 🧪 Case real — Matheus → Morgana (Indicação)

> Matheus Campos (sócio Campos Joias + marido Dra. Morgana) **passou a primeira lista** de contatos pra prospecção.
>
> Como funcionou:
> 1. Matheus já tinha contexto da Eloscope (relacionamento anterior + interesse em IA de ativação)
> 2. Lucas abordou Morgana **mencionando o Matheus na primeira frase**
> 3. Resposta veio em ≤24h
> 4. Reunião agendada → Morgana virou cliente (ativo-upsell em maio)
>
> **Lição aplicada aqui:** indicação só funciona se o indicador **validou** ativamente. Indicação morna ("pode ser que se interesse") = trate como outbound, não indicação.

---

## Changelog

- **2026-05-15 (v0.2):** versão inicial. SLA por canal · régua D+3/D+8 · proibição de pitch+PDF na primeira mensagem. Caso Matheus→Morgana como referência de indicação validada.
