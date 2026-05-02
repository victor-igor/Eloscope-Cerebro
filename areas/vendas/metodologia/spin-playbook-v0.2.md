---
tipo: playbook
area: vendas/metodologia
status: draft-v0.2
data: 2026-05-02
autor: pesquisa Claude + revisão Lucas (4 ajustes aplicados)
changelog:
  v0.2:
    - "seção 4 dividida em 4A (call prep observada) e 4B (padrões venda inferidos)"
    - "seção 2.5 nova — perfis de vendedor (Founder/Aliado/Vendedor-cliente) com pesos diferenciados"
    - "rubrica recalibrada: talk-ratio 10→5, pesquisa prévia 5→10"
    - "regra Need-payoff emocional vs financeiro com gatilhos explícitos"
    - "seção 3.2.5 nova — few-shot de classificação S/P/I/N (12 exemplos + 7 regras desempate)"
  v0.1:
    - "estrutura inicial: fundamentação SPIN + adaptação Eloscope + rubrica + erros + lacunas"
tags: [vendas/metodologia, spin, playbook, call-analysis, agente-ia]
referencia-fonte:
  - areas/vendas/clientes/enertelles/meeting-notes/script-reuniao-fechamento.md
  - empresa/projetos/sales-os/02-comercial/oferta-padrao.md
  - empresa/projetos/sales-os/templates/comercial/Objecoes_Matriz_Template.md
  - areas/vendas/contexto/personas.md
  - areas/vendas/contexto/brandscript.md
---

# SPIN Playbook Eloscope — DRAFT v0.1

> **Para que serve isso aqui:** alimentar um squad de agentes IA que analisa calls de venda gravadas (Fathom) e devolve diagnóstico estruturado + extração de objeções novas. Documento de calibração, não material de treinamento — direto, técnico, com referência cruzada à oferta canônica do 6OS / Elo OS.
>
> **Ler antes:** `script-reuniao-fechamento.md` (Enertelles) e `Objecoes_Matriz_Template.md`. Este playbook complementa, não substitui.

---

## 1. SPIN Selling — fundamentação enxuta

### 1.1 Origem

- **Autor:** Neil Rackham, fundador da **Huthwaite International** (UK).
- **Pesquisa:** **35.000 calls de venda** analisadas, **10.000+ vendedores**, **20+ países**, **12 anos**, orçamento ~US$ 1mi (anos 70-80).
- **Livro-mãe:** *SPIN Selling* (1988) e *Major Account Sales Strategy* (1989).
- **Contexto:** primeira metodologia de venda construída a partir de **observação empírica de campo**, não de teoria. Antes do SPIN, vendia-se com técnica de "fechamento" (ABC = Always Be Closing). Rackham mostrou que **fechamentos agressivos pioram conversão em vendas complexas**.

### 1.2 Venda transacional vs venda complexa

| Eixo | Transacional | Complexa (SPIN se aplica) |
|------|--------------|---------------------------|
| Ticket | Baixo (≤ R$ 5k) | Médio-alto (R$ 6k+ aqui na Eloscope) |
| Decisão | 1 pessoa, impulso | Múltiplos stakeholders (sócio, esposa, financeiro) |
| Ciclo | Minutos a 1 dia | Semanas a meses |
| Risco percebido | Baixo (cliente troca se não gostar) | Alto (cliente compromete operação inteira) |
| Técnica que funciona | Closing forte, urgência | Diagnóstico + construção de valor por implicação |

**Eloscope é venda complexa em todos os blocos.** Mesmo o Bloco B (R$ 3.000 site) envolve risco de marca, prazo de 6-8 semanas e decisão em comitê. SPIN se aplica integralmente.

### 1.3 Os 4 tipos de pergunta

| Tipo | Função | 1 frase |
|------|--------|---------|
| **S — Situação** | Coletar fatos básicos do contexto | "Quantos vendedores você tem hoje?" |
| **P — Problema** | Mapear dores / dificuldades / insatisfações declaradas | "Onde você sente que perde mais venda?" |
| **I — Implicação** | Amplificar a dor — mostrar consequências em cadeia | "Se isso continuar 6 meses, quanto você deixa na mesa?" |
| **N — Need-payoff** | Levar o cliente a verbalizar o valor da solução | "Se a gente recuperasse 40% desses leads, isso muda o quê pra você?" |

### 1.4 A descoberta-chave (a única que importa decorar)

> Vendedores **medianos** fazem mais perguntas de **Situação**.
> Vendedores **top** fazem mais perguntas de **Implicação + Need-payoff**.

Números da pesquisa Huthwaite:

- Top performers fazem **4x mais perguntas de Implicação** que medianos.
- Top performers fazem **>10x mais perguntas de Need-payoff** por venda fechada.
- Top performers gastam **<15% do tempo em Situação** e **>50% em Implicação + Need-payoff**.
- Pesquisa **não encontrou correlação** entre "perguntas abertas vs fechadas" e fechamento — o tipo (S/P/I/N) importa, a forma (aberta/fechada) não.
- Em vendas grandes, **necessidades implícitas não predizem fechamento**; **necessidades explícitas, sim**. (Need-payoff é o que converte implícito → explícito na boca do cliente.)

**Tradução pra Eloscope:** se o vendedor passou 20 minutos perguntando "quantos vendedores", "qual CRM usa", "qual ticket médio" e só aí foi pra dor — a call já está perdida. O cliente sentiu **entrevista**, não consultoria.

---

## 2. Adaptação Eloscope — o playbook

### 2.0 Princípios não-negociáveis antes das perguntas

1. **Pesquisa antes da call mata Situação.** Toda pergunta de Situação que poderia ter sido respondida com 10 min no site/Instagram do cliente é **proibida** — queima crédito. Exceções: confirmação ("você tem 3 vendedores, certo?") está OK; "me conta da sua empresa" está banido.
2. **Reframe primeiro, perguntas depois.** A Eloscope tem tese (`brandscript.md`): "o problema não é gerar lead, é o que acontece depois". Boa parte da call é o cliente confirmando ou ajustando essa tese — não é descoberta às cegas.
3. **Toda Implicação precisa terminar em R$.** Sem quantificação, é só conversa. Padrão: `dor → frequência → ticket → soma 12 meses`.
4. **Need-payoff não é fechamento.** É o cliente verbalizando o ganho. Se ele disser, ganhou. Se você disser, perdeu.

---

### 2.1 SITUAÇÃO (S)

**Definição (1 linha):** coletar contexto factual mínimo que NÃO podia ser pesquisado antes.

#### 5 perguntas-bala calibradas pro ICP Eloscope

1. "Hoje, quem é o primeiro humano que conversa com um lead novo no WhatsApp — você, vendedor, ou secretária?"
2. "Quantos leads chegam por mês via [canal principal] e quantos viram venda? Pode ser feeling, não precisa ser exato."
3. "Você usa CRM, planilha, ou tá tudo no WhatsApp?"
4. "O vendedor [nome citado no discovery] é dedicado a vender ou ele também entrega/visita/atende pós?"
5. "Tem meta clara — número de vendas/mês — ou ele vai pelo que aparecer?"

#### Exemplo REAL no script Enertelles

O script abre **direto em Reframe (seção 2)**, não em Situação aberta. As únicas Situations são embutidas no quebra-gelo, citando dados que o Lucas já tinha do discovery anterior:

> "Você falou na nossa primeira call que tava em **modo sobrevivência**. Mudou alguma coisa de lá pra cá? Vendedor já saiu de férias? A menina nova já tá no comercial?"
> *(— `script-reuniao-fechamento.md`, seção 1)*

Isso é Situação **calibrada**: cita palavra do próprio cliente ("modo sobrevivência"), confirma estado atual em 1 frase, e libera a call pra Reframe imediatamente.

#### Sinais de uso RUIM de Situação

- 🔴 **>5 perguntas de Situação seguidas no início** = entrevista de diagnóstico, não venda.
- 🔴 Cliente respondendo monossilábico ("sim", "tenho", "uns 30") = sinal de que ele está cansado de explicar o óbvio.
- 🔴 Vendedor pergunta dado que está no site / proposta enviada antes = burnou autoridade.
- 🟡 "Me conta um pouco da sua empresa" = pergunta-pra-encher-tempo, sem objetivo de extração.
- 🟢 OK quando: confirma um número específico ("você falou em 40 leads/mês — esse número se manteve?") ou desbloqueia algo que muda a oferta ("vendedor é PJ ou CLT?" — afeta cálculo de comissão).

---

### 2.2 PROBLEMA (P)

**Definição (1 linha):** mapear onde dói — o cliente declara dor sem ainda dimensionar custo.

#### 5 perguntas-bala calibradas

1. "Dos leads que não fecham, você sabe **por que** não fecharam? Tem registro ou é feeling?"
2. "Você tem aquela sensação de que tem cliente antigo que ia comprar de novo, mas ninguém liga? Isso te incomoda?"
3. "Quando o vendedor sai de férias / fica doente, o que acontece com o pipeline?"
4. "Tem lead que você sabe que era bom mas esfriou porque ninguém deu follow-up no tempo certo?"
5. "Você consegue dormir tranquilo sabendo que tudo que entra hoje no WhatsApp está sendo respondido em até 1h?"

#### Exemplo REAL no script Enertelles

O script faz Problema **embutido na pintura do gap** — Lucas declara o problema no lugar do cliente e pede confirmação:

> "Vende **7-8 deals/mês** quando a estrutura aguenta 20. Faltam ~12 vendas."
> *(— seção 2, Reframe)*

E depois:

> "Esse cálculo bate com o que você sente no dia a dia?"
> *(— validação do problema)*

Isso é uma **inversão consciente**: em discovery clássico o vendedor extrai problema; aqui Lucas **declara o problema com base em dado prévio** e pede o cliente para validar. Funciona porque há discovery prévio (1ª call) — não é a 1ª conversa.

> ⚠️ **Regra:** declarar problema no lugar do cliente só é permitido **na 2ª+ call**, depois de discovery. Numa 1ª call, sempre extrair via pergunta — caso contrário, o cliente sente projeção, não escuta.

#### Sinais de uso RUIM de Problema

- 🔴 Vendedor faz pergunta de problema → cliente responde "tá tudo bem" → vendedor segue mesmo assim. Se não tem dor, não tem venda. Saia da call.
- 🔴 Pergunta de problema disfarçada de pitch ("Você não acha que IA poderia automatizar isso?") — não é pergunta, é proposta.
- 🟡 Acumular >3 problemas sem ir pra Implicação — vira lista de queixas, perde foco.
- 🟢 OK: identificou 1-2 dores principais, escolheu a de maior potencial financeiro, foi pra Implicação.

---

### 2.3 IMPLICAÇÃO (I)

**Definição (1 linha):** amplificar a dor mostrando consequências em cadeia — preferencialmente em R$, tempo perdido, ou risco competitivo.

> **Esta é a pergunta-rainha do SPIN.** É onde a Eloscope ganha ou perde a venda.

#### 5 perguntas-bala calibradas

1. "Esses 12 leads/mês que não fecham — quanto custa um lead pra você gerar? Multiplica por 12. Esse dinheiro você gastou e não voltou."
2. "Sua base de [X] clientes antigos que ninguém liga — se 5% comprasse de novo no ano, isso é quanto?"
3. "Enquanto seu vendedor passa 30% do dia respondendo lead frio, ele não está fechando. Quanto ele fecharia se tirasse essas 3h/dia?"
4. "Se daqui a 6 meses seu concorrente [nome] tiver instalado IA + processo, e você não — qual a chance dele te tirar lead orgânico?"
5. "Você está em modo sobrevivência há quanto tempo? E quanto a sua saúde / família tem custado por isso?"

> A última (custo pessoal) é Implicação **emocional**, não financeira. Funciona em PME-dono-fundador (Rafael, persona principal). Cuidado: só uma vez por call, e só se houver abertura.

#### Exemplo REAL no script Enertelles

O cálculo-âncora é **Implicação em estado puro**:

> "**12 × R$17k = R$204 mil por mês** ficando na mesa. **Mais a base de 500 clientes que nunca recebeu um contato — outros R$170k de potencial imediato.**"
>
> ÂNCORA: R$ 204k/mês + R$ 170k base = R$ 2,4mi/12 meses na mesa
> *(— seção 2 e cheat-sheet)*

E o tratamento da OBJ-4 (tempo) é **Implicação reversa** — o vendedor mostra que o status quo custa MAIS tempo que a solução:

> "**Você é o gargalo hoje** — fecha tudo, visita tudo, decide tudo. (...) Você troca 12h agora por 40h/mês a partir do mês 2."
> *(— OBJ-4)*

#### Sinais de uso RUIM de Implicação

- 🔴 Implicação sem número. "Você está perdendo muito" ≠ "você está perdendo R$ 204k/mês".
- 🔴 Vendedor faz a Implicação, mas não pausa — atropela com solução. Cliente precisa **sentir o peso** antes de aliviar.
- 🟡 Implicação que cliente refuta com dado real ("não, na verdade fecho 12, não 7") — vendedor não recalcula em tempo real, fica defensivo.
- 🟢 OK: 3-5 perguntas de Implicação por call, cada uma fechando em R$ ou hora ou risco — e o cliente concordando ("é, é isso mesmo").

---

### 2.4 NEED-PAYOFF (N)

**Definição (1 linha):** levar o cliente a verbalizar — com as palavras dele — o ganho que a solução traria.

> Regra de ouro: **se o vendedor disse, perdeu. Se o cliente disse, ganhou.**

#### 5 perguntas-bala calibradas

1. "Se a gente recuperasse mesmo que 30% desses 12 leads/mês, isso muda o quê na sua operação?"
2. "Imagina seu vendedor recebendo só lead quente, com histórico, com sugestão de mensagem pronta — o que ele faz com as 3h/dia que sobram?"
3. "Se sua base de 500 clientes virasse 25 vendas extras nos próximos 90 dias — o que você fazia com esse caixa?"
4. "Você falou que queria parar de trabalhar 12h/dia. Se tirássemos 10h da sua semana, o que entra no lugar?"
5. "Quando você imagina a operação rodando com processo + IA daqui 6 meses, qual é a primeira coisa que muda no seu dia?"

#### Exemplo REAL no script Enertelles

A frase-âncora do script é **híbrido Implicação→Need-payoff feita pelo vendedor** (não pelo cliente — limitação consciente do script):

> "**Com 1 venda extra por mês — R$ 17k — o setup completo se paga em 1 mês.** A partir do mês 2, é lucro."
> *(— seção 4)*

E o fechamento da seção 7 é **Need-payoff em formato de pergunta de avanço**:

> "Telles, baseado no que conversamos, **o que faz mais sentido pra você começar?**
> - Bloco A só (R$ 3.500) e a gente vê site no mês 3?
> - Combo A+B (R$ 6.500 / 12× R$ 650)?"
> *(— seção 7)*

> ⚠️ **Gap no script:** o script Enertelles é forte em Implicação mas **fraco em Need-payoff genuíno** — Lucas faz o cálculo de payoff no lugar do cliente. Versão v2 do script deveria ter 2-3 perguntas que **forcem o Telles a verbalizar o ganho**. Anotar pra próxima iteração.

#### Sinais de uso RUIM de Need-payoff

- 🔴 Vendedor diz "imagina o quanto você vai ganhar" — não é pergunta, é pitch disfarçado.
- 🔴 Pular Need-payoff e ir direto pra fechamento ("então, vamos assinar?") — fechamento sem payoff verbalizado tem ~50% menos taxa de conversão na pesquisa Huthwaite.
- 🟡 Cliente responde Need-payoff com 1 frase curta ("seria bom") — vendedor aceita e segue. Faltou aprofundar ("bom como? O que isso desbloqueia?").
- 🟢 OK: ≥3 Need-payoff respondidas pelo cliente com frases longas, descrevendo cenário futuro positivo.

---

### 2.5 Perfis de vendedor Eloscope (rubrica diferenciada)

Vendedor diferente comete erro diferente. A rubrica do squad **muda peso conforme o perfil** de quem conduziu a call.

#### Perfil A — Founder/Autoridade Alta (Lucas)

- **Característica:** autoridade técnica e de decisão. Cliente percebe como dono. Pode declarar problema na 2ª call sem soar projeção.
- **Forças:** velocidade no reframe, segurança na quantificação em R$, fechamento técnico.
- **Ponto cego dominante:** Need-payoff narrado pelo vendedor (Erro 4B.3). Tendência a fazer cálculos no lugar do cliente porque é mais rápido.
- **Risco secundário:** atropelar pausa de Acknowledge nas objeções (Erro 4B.4) por já saber a resposta.
- **Rubrica ajustada:**
  - Critério #3 (Need-payoff respondidas pelo cliente) — **peso ×1.5** (15 → 22)
  - Critério #1 (talk-ratio) — **peso ×0.5** (10 → 5; founder fala mais e tudo bem se o cliente também falar)
  - Critério #7 (LAER em objeção) — **peso ×1.2**

#### Perfil B — Aliado/Ponte (Alex no caso Enertelles)

- **Característica:** humano que abriu a porta no cliente. Não é o vendedor formal, mas tem capital de relacionamento. Discovery natural, evita pressão.
- **Forças:** confiança pré-existente, escuta, leitura emocional do cliente.
- **Ponto cego dominante:** evita avanço com data marcada (Erro 4B.5 invertido — não fecha por medo de queimar relação).
- **Risco secundário:** acumular Problemas sem ir pra Implicação (vira lista de queixas).
- **Rubrica ajustada:**
  - Critério #5 (avanço com data) — **peso ×1.5** (15 → 22)
  - Critério #2 (razão I/S) — **peso ×1.2** (15 → 18)
  - Critério #1 (talk-ratio) — **peso ×1.2** (cliente falando muito ≠ vendedor passivo, mas ali sinaliza que talvez não está conduzindo)

#### Perfil C — Vendedor cliente / SDR no comercial do prospect

- **Característica:** vendedor da empresa do cliente — é quem o Elo OS vai monitorar/treinar. Calls onde ele aparece (treinamentos, role-plays, reuniões pós-onboarding) são scoreadas com lente de coaching, não de fechamento.
- **Forças:** conhece o produto que vende.
- **Ponto cego dominante:** tempo de resposta a lead novo (gargalo crítico identificado em todas as PMEs ICP).
- **Risco secundário:** mandar preço cedo demais.
- **Rubrica ajustada (lente de coaching):**
  - Critério #5 (avanço com data) renomeado pra **"agendou próximo passo com lead"** — peso ×1.5
  - Adicional: **tempo médio de 1ª resposta a lead** (peso 10) — vem do CRM/WhatsApp, não da call
  - Critério #4 (quantificação em R$) **inaplicável** — SDR não quantifica, qualifica

#### Como o squad detecta o perfil

1. **Metadata da call** (preferencial): se a transcript vem com `vendedor: "Lucas"`, aplica Perfil A direto.
2. **Heurística de fallback** (sem metadata):
   - Se quem conduz fala >55% do tempo E declara cifras = Perfil A
   - Se quem conduz é apresentado pelo cliente como "parceiro" ou "amigo" = Perfil B
   - Se a call é interna (cliente já contratado) e o vendedor está sendo orientado = Perfil C

> **Próxima iteração:** adicionar **Perfil D — SDR Eloscope** quando contratarmos. E avaliar se Hugo e Victor entram em Perfil A diluído ou se merecem perfil próprio.

---

## 3. Rubrica de avaliação de call (uso do agente IA)

### 3.1 Eixos de avaliação — 10 critérios, total 100 pontos

| # | Critério | Peso (base) | Como medir | Target |
|---|----------|------|------------|--------|
| 1 | **Talk ratio do vendedor** | 5 | % palavras-vendedor / total | ≤40% (ideal 35-43%) |
| 2 | **Razão Implicação/Situação** | 15 | nº perguntas I ÷ nº perguntas S | ≥1.0 (top: ≥2.0) |
| 3 | **Need-payoff respondidas pelo cliente** | 15 | contagem de respostas longas (>30s) a perguntas N | ≥3 |
| 4 | **Quantificação de dor em R$** | 10 | houve número absoluto (R$/mês ou ano) declarado e validado? | sim/não (peso integral se sim) |
| 5 | **Avanço com data marcada** | 15 | call terminou com data+hora específicas pra próximo passo? | sim/não |
| 6 | **Pesquisa prévia evidente** | 10 | vendedor citou ≥2 dados específicos do cliente sem perguntar? | ≥2 referências |
| 7 | **Tratamento de objeção via LAER** | 10 | em cada objeção: Listen → Acknowledge → Explore → Respond? | ≥80% das objeções |
| 8 | **Reframe explícito antes da oferta** | 5 | vendedor pintou o gap antes de pitchar produto? | sim/não |
| 9 | **Pré-requisitos comunicados** | 5 | os 4 pré-requisitos (vendedor dedicado, comissão, processo antes IA, investigar confiança) foram declarados? | ≥3 dos 4 |
| 10 | **Verbalização do ganho pelo cliente** | 10 | cliente disse, com palavras dele, qual ganho a solução traz? | ≥1 frase clara |

> **Pesos base = perfil A (Founder).** Para Perfil B e Perfil C, aplicar multiplicadores da seção 2.5. Se a soma após multiplicador ≠ 100, **normalizar** (cada peso ÷ soma × 100) antes de calcular nota.

#### Need-payoff emocional vs financeiro — regra v0.1

- **Financeiro (R$/hora/leads):** sempre obrigatório. Critério #4 só pontua com cifra concreta.
- **Emocional ("custo de não dormir / não ver família / esgotamento"):** só vale como Need-payoff se o cliente **declarou explicitamente** o sinal antes (frases-gatilho: "tô esgotado", "não vejo a família", "modo sobrevivência", "não durmo direito"). Caso contrário, agente **não conta** como N — mesmo se o vendedor formular bem a pergunta, não ressoa sem o sinal prévio.
- **Por que essa regra:** evita o squad flagar falso-positivo quando o vendedor empurra Need-payoff emocional num cliente que está em modo racional puro.

**Nota final 0-10** = soma ÷ 10.

### 3.2 Faixas de classificação

| Nota | Diagnóstico | Ação recomendada |
|------|-------------|------------------|
| 9.0-10 | Call exemplar | Salvar no acervo de treino. Replicar padrões. |
| 7.0-8.9 | Call sólida | Anotar 2-3 melhorias pontuais. |
| 5.0-6.9 | Call mediana | Revisar com vendedor — provavelmente excesso de Situação ou ausência de quantificação. |
| 3.0-4.9 | Call ruim | Não fechou e dificilmente fecha em re-call. Diagnóstico estruturado obrigatório. |
| 0-2.9 | Call defeituosa | Vendedor entrevistou em vez de vender. Treinamento urgente. |

### 3.2.5 Como o agente classifica pergunta como S / P / I / N — few-shot

> Sem regra explícita, dois agentes dão notas diferentes pra mesma call. As 12 perguntas abaixo são **gold-standard** — calibradas e usadas como few-shot no prompt do agente.

#### Verdes (classificação clara)

| # | Frase do vendedor | Tipo | Por quê |
|---|-------------------|------|---------|
| 1 | "Quantos vendedores você tem hoje?" | **S** | Coleta fato. Sem amplificação. |
| 2 | "Você tem CRM ou tá tudo no WhatsApp?" | **S** | Pergunta de estado, neutra. |
| 3 | "Onde você sente que perde mais venda?" | **P** | Cliente vai descrever dor, sem cálculo de impacto. |
| 4 | "Tem lead que esfriou porque ninguém deu follow-up?" | **P** | Confirma dor específica. Ainda não custou nada. |
| 5 | "Esses 12 leads/mês que não fecham — multiplica por R$17k. Quanto isso é em 12 meses?" | **I** | Amplifica em R$ + cadeia temporal. |
| 6 | "Se daqui 6 meses seu concorrente tiver IA + processo e você não, qual a chance dele te tirar lead orgânico?" | **I** | Implicação competitiva, faz cliente sentir risco. |
| 7 | "Se a gente recuperasse 30% desses 12 leads, isso muda o quê na sua operação?" | **N** | Cliente verbaliza ganho, sem o vendedor declarar. |
| 8 | "Quando você imagina rodando com processo + IA daqui 6 meses, qual é a primeira coisa que muda no seu dia?" | **N** | Pede cenário futuro positivo na boca do cliente. |

#### Edge cases (classificação delicada — onde o agente erra)

| # | Frase | Classificação correta | Armadilha |
|---|-------|----------------------|-----------|
| 9 | "Você não acha que IA poderia automatizar isso?" | **NÃO É PERGUNTA** — é pitch disfarçado | Agente ingênuo conta como P ou N. **Regra:** se a frase prescreve a solução antes de extrair dor, descarta. |
| 10 | "Imagina o quanto você vai ganhar com isso" | **NÃO É N** — é declaração | Verbo no imperativo + ausência de "?". Need-payoff exige interrogação real. |
| 11 | "Você falou que tava em modo sobrevivência. Mudou alguma coisa?" | **S calibrada (válida)** | Parece P, mas é confirmação factual de estado. Vale ponto se houve discovery prévio (sinal: cita palavra do cliente). |
| 12 | "Vende 7-8 deals/mês quando a estrutura aguenta 20. Esse cálculo bate com o que você sente?" | **HÍBRIDO P+I** — conta como I | Vendedor declara o problema E quantifica o gap em 1 frase. Em call de 2ª rodada (pós-discovery) é válido. Em 1ª call seria P forçada (Erro 4B.3). |

#### Regras de desempate (em ordem de prioridade)

1. **Sem `?` ao final** → não é pergunta, descarta.
2. **Frase que prescreve solução** ("você devia", "você não acha que") → descarta.
3. **Cifra ou cadeia temporal** ("12 meses", "R$ X", "se isso continuar") → I.
4. **Pede cliente imaginar cenário futuro positivo** → N.
5. **Pede cliente descrever dor sem dimensionar** → P.
6. **Coleta fato neutro** → S.
7. **Ambíguo entre 2 categorias** → marca categoria de menor prioridade (Situação < Problema < Implicação < Need-payoff). Critério Rackham: na dúvida, **classifica como a categoria mais fácil**, evita inflar o score do vendedor.

### 3.3 Output que o agente IA deve devolver

```yaml
call_id: <fathom_id>
data: <YYYY-MM-DD>
vendedor: <nome>
cliente: <nome>
duracao_min: <int>
nota_final: 0.0-10.0
faixa: "exemplar | solida | mediana | ruim | defeituosa"
breakdown:
  talk_ratio_vendedor: 0.42  # 42%
  contagem_perguntas:
    situacao: <int>
    problema: <int>
    implicacao: <int>
    need_payoff: <int>
  razao_I_sobre_S: <float>
  need_payoff_respondidas: <int>
  quantificacao_R$: <bool>
  avanco_data_marcada: <bool>
  pesquisa_previa_refs: <int>
  laer_compliance_pct: 0.0-1.0
  reframe_explicito: <bool>
  pre_requisitos_declarados: 0-4
  verbalizacao_ganho_cliente: <bool>
objecoes_extraidas:
  - id: nova-OBJ-X
    categoria: "preco | timing | autoridade | concorrencia | risco-tecnico | ceticismo-IA"
    texto_literal: "<frase do cliente>"
    timestamp: "MM:SS"
    ja_catalogada: <bool>
    sugestao_resposta: "<rascunho LAER>"
top3_acertos:
  - "..."
top3_melhorias:
  - "..."
proximo_passo_extraido:
  acao: "<contrato | nova-call | nada>"
  data: "<YYYY-MM-DD HH:MM ou null>"
  responsavel: "<vendedor | cliente | ambos>"
```

---

## 4. Erros observados

> **Importante separar 2 contextos:**
> - **4A — Observações da call de PREP** (30/04, recording 142664865, Lucas + Alex). Não é venda — é alinhamento interno antes de apresentar pro Telles. Erros aqui são de calibração, não de SPIN.
> - **4B — Padrões esperados em CALLS DE VENDA** (inferidos do script Enertelles + Matriz de Objeções). Esses sim alimentam a rubrica do squad.

### 4A. Call de prep 30/04 — Lucas + Alex (observado em transcript)

**Contexto:** call interna de ~50min pra alinhar abordagem da apresentação ao Telles no dia 01/05 às 16h. Lucas apresenta a proposta pro Alex (parceiro/ponte com o cliente).

#### 4A.1 — Janela útil dissipada (15-20min finais em papo lateral)

A partir do minuto ~26-27, a call deriva pra papo de gravidez (Lucas e Alex são ambos pais recentes), depois política/Catanduva, encerrando ~50min. **Tempo de prep de venda real: ~25min de 50min disponíveis.**

- **Por que importa:** call de prep com janela limitada não pode virar bate-papo. Ainda mais com Alex sinalizando ("eu vou ter que ir agora") só no fim.
- **Como detectar no transcript:** ratio "tempo em tópico-fim vs tempo em tópico-prep" > 30%.
- **Correção:** prep de venda deve ter **timeboxing explícito** ("temos 30min, 25 pro plano + 5 pra alinhamento") declarado no início. Bate-papo no fim, com timer.

#### 4A.2 — Plano B sobre presença na call não confirmado cedo

Aos ~20:06 Alex diz "amanhã às 16h ele confirmou? É. Eu acho que eu não consigo ir." Lucas responde "tranquilo, eu posso ir lá". Mas a confirmação operacional clara ("OK, então **eu vou sozinho**, **você me informa** se Telles puxar você antes") só aparece minutos depois, e mesmo assim implícita.

- **Por que importa:** ambiguidade sobre quem conduz a call do dia seguinte é o tipo de erro que vira mensagem WhatsApp confusa entre 16h e 16h05 do dia da venda.
- **Correção:** sempre que parceiro/aliado declara ausência, fechar o protocolo na hora: quem conduz, quem é fallback, quem comunica o cliente, quando.

#### 4A.3 — Tática de pressão sugerida sem operacionalização

Aos ~26:00 Alex sugere "dá uma pressão porque senão ele pode deixar pra depois". Lucas concorda com "Vamos fechar assim, vamos apertar ele, ver se ele quer ficar na mesma ou quer crescer" — mas **não traduz em mecânica concreta**: que frase específica? Em que momento da call? Qual a saída se Telles travar?

- **Por que importa:** "pressão" sem mecânica vira tom intimidador, não fechamento técnico. O script Enertelles tem várias técnicas de avanço (3 caminhos, pré-requisitos, calendário) — Lucas precisava ter dito *qual delas* vai aplicar como pressão.
- **Correção:** toda tática sugerida em prep deve fechar com "→ frase exata + momento da call + plano B".

#### 4A.4 — Métrica-chave do cálculo ficou ambígua

Aos ~07:30 Lucas calcula "12 vendas mês não realizadas" baseado em "se ele estiver fechando o fixo, aquela quantidade". Alex contradiz ali: "se bem que aquela vez ele falou que estava gerando 30, né? Eu não vou lembrar muito não, Lucas". Lucas responde "a gente coloca uma média de faturamento que vai dar isso" — sem recalibrar o número-âncora.

- **Por que importa:** o cálculo R$204k/mês é a Implicação-rainha do pitch. Se Telles puxar "fechei 12 mês passado, não 7", o vendedor tem que recalcular ao vivo — e Lucas não testou a flexibilidade do número durante a prep.
- **Correção:** sempre que o número-âncora depender de premissa do cliente, ter 2 cenários prontos (low/high) e o vendedor decora os dois.

#### 4A.5 — Ausência de simulação de objeção

A call inteira foi descrição de plano. **Zero simulação** do tipo "Alex, finge que você é o Telles e me objeta X". Resultado: Lucas chega na venda sem ter testado em voz alta nenhuma das 8 objeções do script.

- **Por que importa:** prep sem simulação é só leitura.
- **Correção:** toda call de prep deve incluir **2 role-plays cronometrados** (objeção mais provável + objeção mais difícil), 3min cada.

---

### 4B. Padrões esperados em call de venda (inferidos)

Esses cinco padrões são do que se espera de venda real (não de prep). Vão alimentar a rubrica até termos N≥10 calls reais scoreadas.

#### 4B.1 — Excesso de Situação na 1ª call (provável)

**Padrão:** vendedores Eloscope tendem a abrir com 4-6 perguntas de Situação. Em fechamento isso já não cabe — e mesmo em discovery, se 3+ dessas respostas estavam na proposta enviada antes, queima crédito.

**Detecção:** primeiros 5 min com >3 perguntas tipo "quantos / qual / quem é".

**Correção:** mover Situação não-essencial pra formulário pré-call.

#### 4B.2 — Implicação sem fechamento em R$ (provável)

**Padrão:** Lucas tem o cálculo memorizado, mas na call ao vivo pode pular direto pra "tem muito dinheiro na mesa" sem cifra concreta.

**Detecção:** "perde / deixa de ganhar / fica na mesa" aparece sem cifra nos 60s seguintes.

**Correção:** toda Implicação termina com `R$ X / mês` ou `R$ Y / 12 meses`.

#### 4B.3 — Need-payoff feito pelo vendedor (ALTA probabilidade — confirmado no script)

**Padrão:** Lucas declara o ganho ("o setup se paga em 1 mês") em vez de perguntar ao cliente. O próprio script Enertelles tem essa frase como declaração, não como pergunta.

**Detecção:** perguntas N respondidas pelo cliente <2 em call de 45min.

**Correção:** scriptar 3 perguntas N obrigatórias antes de dar qualquer número de ROI.

#### 4B.4 — Tratamento de objeção sem fase Acknowledge (provável)

**Padrão:** Lucas conhece as 8 objeções do script. Risco: pular o "entendi, faz sentido" e ir direto pro reframe — cliente sente sniper.

**Detecção:** intervalo <3s entre objeção e resposta.

**Correção:** pausa de 2s + acknowledge antes de qualquer reframe.

#### 4B.5 — Apresentação A+B antes de A-só ou B-só (probabilidade média)

**Padrão:** script tem 3 caminhos (A / B / A+B) para o cliente escolher. Risco: vendedor anuncia A+B primeiro como ancoragem, tirando do cliente a sensação de autonomia.

**Detecção:** segmento de oferta menciona "A+B" antes de "A só" ou "B só".

**Correção:** ler em voz alta na ordem A → B → A+B, com pausa entre cada.

---

## 5. Lacunas e perguntas pra próxima iteração

### 5.1 O que ficou em aberto neste DRAFT

- [ ] **Call 30/04 não foi acessada.** O MCP Fathom retornou "not found or access denied" pro call_id 142664865. Confirmar se é call_id ou recording_id, e se o usuário autenticado tem acesso. Quando rodar, refazer seção 4 com transcript real.
- [ ] **Métricas de baseline da Eloscope** — não temos ainda histórico de quantas calls fecharam vs não fecharam, nem talk-ratio médio dos vendedores. Sem baseline, a rubrica está calibrada por benchmark Huthwaite/Gong (mercado USA, B2B SaaS) — pode ser estrita demais ou frouxa demais pro contexto Brasil PME.
- [ ] **Verticalização** — o playbook está calibrado pra ICP genérico (PME B2B/B2C com gargalo de conversão). Pode haver perguntas SPIN específicas por vertical (energia solar ≠ clínica ≠ imobiliária). Próxima iteração: 5 perguntas-bala por vertical Q2.
- [ ] **Need-payoff emocional vs financeiro** — não temos protocolo claro de quando ir pra o emocional ("custo pessoal de trabalhar 12h/dia") vs o financeiro. Pode ser função do perfil DISC do cliente — hipótese a testar.

### 5.2 Recursos a consultar na próxima rodada

- **Livro:** *SPIN Selling Fieldbook* (Rackham, 1996) — versão prática com exercícios. Vale extrair os templates de pergunta por indústria.
- **Livro:** *The Challenger Sale* (Dixon & Adamson, 2011) — complementa SPIN com a dimensão "ensinar" o cliente. A tese da Eloscope ("não vende lead, vende infraestrutura de confiança") é Challenger puro embutido em SPIN.
- **Pesquisa:** Gong.io [State of the Conversation 2024-2025](https://www.gong.io/) — talk-ratio por estágio, número ideal de perguntas, etc.
- **Ferramenta:** [Claap AI SPIN Scorer](https://www.claap.io/tool-ai-spin-scorer) — referência de como outros já fazem scoring automatizado. Validar lógica deles vs a nossa.
- **Artigo:** "SPIN Selling in 2026" ([Salesmotion](https://salesmotion.io/blog/spin-selling-signals-2026)) — adaptação pra ciclo curto (call de 30min).
- **Artigo:** "Discovery Call Framework 2026" ([Auto Interview AI](https://www.autointerviewai.com/blog/discovery-call-framework-questions-structure-2026)) — distribuição S/P/I/N pra call de 30min: 1-2 S, 3-4 P, 4-6 I, 2-3 N.

### 5.3 Dados que a Eloscope precisa coletar pra calibrar a rubrica

1. **N=20 calls gravadas** (10 fechadas + 10 não-fechadas) — base mínima pra calibrar pesos por correlação real, não por benchmark importado.
2. **Talk-ratio médio atual** dos vendedores Eloscope — Lucas, Alex, eventual SDR — pra saber se 40% target é realista.
3. **Tempo médio por seção da call** (quebra-gelo, reframe, oferta, objeção, fechamento) — pra detectar desvio padrão.
4. **Catálogo de objeções novas** (não previstas no `Objecoes_Matriz_Template.md`) que aparecem nas calls — esse é exatamente o output do squad de IA. Realimenta a matriz.
5. **Conversão por nota de rubrica** — depois de 30+ calls scoradas, plotar `nota → fechou? (sim/não)`. Se calls com nota ≥7 fecham em ≥60% e calls com nota <5 fecham em ≤15%, a rubrica está validada. Se não, recalibrar pesos.

### 5.4 Perguntas estratégicas (pro Lucas decidir)

- **O squad de IA scoreia em tempo real** (durante a call, alertando o vendedor) **ou só pós-call** (relatório no dia seguinte)? Tempo real é Elo OS Copilot — pós-call é coaching. Decisões de produto diferentes.
- **A rubrica é pública pro cliente** (transparência: "essa é a nossa metodologia") **ou interna**? Pública vira diferencial competitivo, mas trava iteração.
- **Need-payoff emocional entra na rubrica** ou só financeiro? Se entrar, como medir sem viés do agente?
- **Quem é o "vendedor padrão Eloscope"?** Lucas (founder, autoridade alta, pode declarar problema) e Alex (humano discovery, autoridade média, deve perguntar) vendem diferente. A rubrica precisa diferenciar perfil de vendedor ou usar mesmo padrão pra todos?

---

## Fontes

- Rackham, Neil. *SPIN Selling*. McGraw-Hill, 1988.
- Huthwaite International — [The SPIN Methodology – 50 years of changing behaviours](https://www.huthwaiteinternational.com/spin-methodology)
- HubSpot Blog — [The SPIN selling method — deep dive](https://blog.hubspot.com/sales/spin-selling-the-ultimate-guide)
- Highspot — [SPIN selling, explained](https://www.highspot.com/blog/spin-selling/)
- Salesmotion — [SPIN Selling in 2026: Adapting Questions for Modern Sales](https://salesmotion.io/blog/spin-selling-signals-2026)
- Auto Interview AI — [Discovery Call Framework 2026](https://www.autointerviewai.com/blog/discovery-call-framework-questions-structure-2026)
- Gong.io — [Mastering the talk-to-listen ratio in sales calls](https://www.gong.io/blog/talk-to-listen-conversion-ratio)
- It's Just Revenue — [SPIN Selling Discovery Framework: Stop Running the Checklist](https://www.itsjustrevenue.com/insights/spin-discovery-call-framework)
- Walnut — [SPIN Selling Model for SaaS: Tips & Examples](https://www.walnut.io/blog/sales-tips/spin-selling-model-for-saas-tips-examples-to-close-more-deals/)
- Claap AI — [AI SPIN scorer for Sales Calls](https://www.claap.io/tool-ai-spin-scorer)
- Bliro — [SPIN Selling Explained 2025](https://www.bliro.io/en/blog/spin-selling-explained-the-complete-guide-to-successful-sales-conversations-2025)
- Oliv.ai — [SPIN Selling Sales Methodology Guide](https://www.oliv.ai/blog/spin-selling-explained)

— **Fontes internas** (vault Eloscope):
- `areas/vendas/clientes/enertelles/meeting-notes/script-reuniao-fechamento.md`
- `empresa/projetos/sales-os/02-comercial/oferta-padrao.md`
- `empresa/projetos/sales-os/templates/comercial/Objecoes_Matriz_Template.md`
- `areas/vendas/contexto/personas.md`
- `areas/vendas/contexto/brandscript.md`
