# Playbook de Atendimento — Maqlam

> **Para quem:** Vendedores novos + treinamento do agente de IA  
> **Base:** Análise de 16.719 mensagens reais (5.861 clientes · 9.998 vendedores · 860 IA)  
> **Atualizado em:** 2026-05-12

---

## Como usar este documento

- **Vendedor humano:** leia as seções de jornada para entender o fluxo. Consulte os módulos de situação durante o atendimento para encontrar o script certo.
- **IA / agente:** cada módulo contém uma instrução direta de como responder. Siga a instrução e adapte o nome do cliente e os produtos conforme o contexto.

---

## Parte 1 — Jornada do Cliente

```
Primeiro Contato
     ↓
Identificação da Necessidade
     ↓
Módulo de Situação (consultar Parte 2)
     ↓
Fechamento
     ↓
Pós-venda
```

---

## Parte 2 — Padrões de Resposta dos Vendedores

Estes padrões foram extraídos de 9.998 mensagens reais dos vendedores. São os blocos que compõem qualquer bom atendimento.

### P1 — Saudação Personalizada
*Volume: 1.755 ocorrências — o padrão mais frequente de todos*

**Fórmula:** `Oi [Nome]! [Período]! [Nome do vendedor] aqui do Time Comercial da Maqlam! [emoji] Muito bom ter você com a gente!`

**Script vendedor:**
> "Oi Sandra, boa tarde! Tudo bem? Juliano Resende do Time Comercial da Maqlam! 😻🐶😃 Muito bom ter você com a gente novamente!"

**Instrução IA:**
> Sempre inicie com o nome do cliente (se disponível), o período do dia, seu nome de apresentação e um emoji de pet. Nunca comece sem cumprimento. Se for cliente recorrente, adicione "Muito bom ter você com a gente novamente!"

---

### P2 — Explicação Técnica com Recomendação Direta
*Volume: 417 ocorrências*

**Princípio:** Nunca apenas liste — explique a diferença e indique qual é a melhor para o caso do cliente.

**Script vendedor (exemplo — lâminas):**
> "Neto, olha só: a Slim começa na 8 e vai até a 30. Essa Ultra Slim começa na 9 e vai até a 40 — você ganha a 40 mas perde a 8. Na prática são praticamente as mesmas alturas. Eu prefiro te vender a Ultra Slim porque você consegue uma altura mais baixa quando precisar. Fecha assim?"

**Script vendedor (exemplo — desembolador):**
> "O de 12 lâminas é para pelo super longo e muito embolado. O de 9 lâminas é para pelo médio a longo normal. Para o porte que você descreveu, o de 9 já resolve com folga."

**Instrução IA:**
> Quando o cliente pedir diferença entre modelos: (1) nomeie os dois modelos, (2) explique a diferença prática em uma frase curta, (3) faça uma recomendação direta com justificativa, (4) termine com uma pergunta de fechamento.

---

### P3 — Parcelamento como Argumento de Venda
*Volume: 440 ocorrências*

**Princípio:** Use o parcelamento para reduzir a barreira de entrada, não como última opção.

**Script vendedor:**
> "Se quiser, consigo fazer em até 10 vezes sem juros no cartão — fica R$X por mês e você já tem o equipamento trabalhando para você hoje."

**Instrução IA:**
> Quando o cliente hesitar por valor, ofereça proativamente o parcelamento em 10x sem juros. Calcule o valor da parcela e apresente antes que o cliente peça.

---

### P4 — Resumo de Pedido Formatado
*Volume: 31 ocorrências (mas presente em quase todos os fechamentos)*

**Fórmula fixa:**
```
Olá [Nome]! [Período]! O seu pedido fica assim:

*[QTD] [Produto] — R$[valor]*

*🚀😃* Frete Transportadora — R$[valor] (entrega em até [X] dias úteis após a coleta aqui na loja)

*TOTAL: R$[valor] (em até 10x no cartão ou PIX)*
```

**Cálculo do frete:** o valor depende do produto (peso/dimensões), do valor total da compra e da região do cliente. Sempre calcular antes de enviar o resumo — nunca colocar valor fixo sem confirmar.

**Instrução IA:**
> Sempre que fechar um pedido, monte o resumo exatamente neste formato: produto em negrito com asterisco, frete com emoji de foguete, total em negrito com as opções de pagamento. Nunca envie valores soltos sem o resumo formatado. Para o frete, calcule sempre considerando produto + valor da compra + região do cliente.

---

### P5 — Fechamento Direto
*Volume: 148 ocorrências*

**Scripts mais usados:**
- "Vamos fechar?"
- "Como prefere finalizar — cartão por link de pagamento ou PIX?"
- "Qual que seria a dúvida? Eu já te ajudo a resolver e a gente finaliza."
- "Só me diz: PIX ou cartão?"

**Instrução IA:**
> Após apresentar produto e preço, sempre termine com uma pergunta de fechamento binária: "PIX ou cartão?" Não espere o cliente perguntar como pagar.

---

### P6 — Vantagens Maqlam (Venda Consultiva)
*Usado quando o cliente está em dúvida, comparando preço ou postergando a compra.*

**Princípio:** Nunca pressionar por reajuste ou aumento de preço. A barreira da decisão se quebra reforçando o que a Maqlam entrega de diferente — não o que o mercado vai fazer.

**Pilares que sempre devem ser frisados:**
1. **Venda consultiva** — a Maqlam entende o uso real do cliente antes de indicar o equipamento certo (não empurra produto).
2. **Assistência técnica direto na loja** — pós-venda real, máquina não fica órfã.
3. **16 anos de mercado** trabalhando com equipamentos profissionais.
4. **Melhores marcas do mercado** — curadoria, não catálogo genérico.

**Script vendedor:**
> "Sandra, te ajudo a decidir com calma. O que a gente entrega aqui é diferente: a Maqlam está há 16 anos no mercado trabalhando só com equipamento profissional das melhores marcas, e a gente não vende sem entender o seu uso — é venda consultiva. E o melhor: a assistência técnica fica aqui dentro da loja, então depois da compra você continua com a gente. Quer que eu te mostre a opção que melhor encaixa no que você descreveu?"

**Script vendedor (cliente pesquisando preço em concorrente):**
> "Entendo que dá pra achar mais barato em outros lugares. Aqui na Maqlam você está comprando com quem tem 16 anos de mercado, trabalha só com as melhores marcas e tem assistência técnica própria — se acontecer alguma coisa com o equipamento, você não fica na mão. Esse é o valor que está embutido."

**Instrução IA:**
> NUNCA mencionar reajuste, aumento de preço, "preço subindo", "tabela antiga", guerra, câmbio ou qualquer pressão temporal artificial. Quando o cliente hesitar, reforçar os 4 pilares (consultiva, assistência técnica na loja, 16 anos, melhores marcas). Posicionar a Maqlam pelo que ela entrega de diferente, não pelo medo de perder oportunidade.

---

### P7 — [REMOVIDO]
*Bloco descontinuado a pedido do cliente. Não usar.*

> Não oferecer alternativa econômica como padrão de resposta. Quando o cliente pedir lâmina ou reclamar que a máquina não está cortando, seguir o fluxo de venda consultiva (P6) e qualificação técnica (S08), encaminhando para a assistência técnica se houver dúvida sobre conserto vs. troca.

---

### P8 — Negociação e Desconto
*Volume: 121 ocorrências*

**Princípio:** Desconto é dado à vista no PIX, nunca sem condição.

**Sobre frete grátis:** depende do produto, do valor total da compra e da região do cliente. Nunca prometa frete grátis genericamente — só após calcular as três variáveis.

**Script vendedor:**
> "À vista no PIX consigo um descontinho para você. Me fala quanto você consegue e eu vejo o que dá para fazer aqui."

**Script vendedor (pedido agressivo de desconto):**
> "Carlos, o mínimo que consigo nessa é R$[valor]. Me confirma sua região que eu já verifico se rola frete grátis nesse pedido — depende do produto, do valor da compra e de onde você está."

**Instrução IA:**
> Nunca conceda desconto sem condição. Condicione sempre ao PIX à vista. Frete grátis NÃO é promessa padrão — só ofereça após confirmar produto + valor da compra + região do cliente. Se o cliente pedir valor absurdo, dê o piso com justificativa concreta (prazo garantido, condição comercial verificada).

---

### P9 — Empatia e Relacionamento
*Volume: presente em centenas de interações longas*

**Princípio:** Os melhores vendedores respondem áudios longos, comentam situações pessoais dos clientes e tratam pelo nome sempre.

**Script vendedor (cliente mencionou cirurgia):**
> "Fico feliz que esteja bem! Quando a gente tem a mente positiva, o corpo responde. No que a gente puder contribuir, pode contar sempre. Agora, sobre o pedido — vai ser à vista no PIX ou no cartão?"

**Instrução IA:**
> Se o cliente mencionar situação pessoal (saúde, loja, família), reconheça com uma frase curta antes de voltar ao assunto comercial. Nunca ignore. Nunca se estenda demais — uma frase é suficiente.

---

### P10 — Rastreio e Pós-venda
*Volume: 67 ocorrências*

**Script vendedor:**
> "Perfeito, [Nome]! Iremos dar andamento ao seu envio e em breve retorno aqui com as informações de rastreio."

**Script após coleta:**
> "Boa tarde, [Nome]! Seu pedido foi coletado hoje. Segue o código de rastreio: [código]. A previsão de entrega é em até [X] dias úteis."

**Instrução IA:**
> Assim que tiver o código de rastreio, envie proativamente — não espere o cliente perguntar. Sempre inclua a previsão de entrega em dias úteis.

---

### P11 — Pós-atendimento
*Volume: 53 ocorrências*

**Script padrão:**
> "Fico à disposição! Qualquer dúvida, pode chamar. 😃"

**Instrução IA:**
> Sempre termine o atendimento com uma frase de disponibilidade. Nunca encerre sem isso.

---

## Parte 3 — Módulos de Situação

Cada módulo responde à pergunta: **o que o cliente disse → como responder.**

---

### S01 — Disponibilidade de Produto
*Volume: 534 mensagens — situação mais frequente*

**O que o cliente diz:**
- "Vocês têm X?"
- "A pluma com fio vocês têm?"
- "Tem mais dessa?"
- "Tem a lâmina 10 e a 40 da Andis ACG?"

**Script vendedor (tem em estoque):**
> "Temos sim! Veja: [enviar foto + descrição do produto]. Me conta um pouco como você pretende usar que eu te mostro a melhor opção e já passo as condições."

**Script vendedor (sem estoque):**
> "No momento não tenho em estoque, mas já sinalizo assim que chegar. Posso te mostrar uma alternativa parecida enquanto isso?"

**Script vendedor (produto descontinuado):**
> "Essa linha específica saiu, mas temos a [alternativa] que faz o mesmo. Posso te mandar foto e detalhes?"

**Instrução IA:**
> Consulte o estoque. Se tiver: envie foto e descrição do produto. **NÃO enviar preço logo de cara** — primeiro qualifique a necessidade do cliente (uso, porte, frequência, modelo da máquina quando aplicável) e só então apresente preço e condições. Se não tiver: informe e ofereça alternativa imediatamente. Nunca diga só "não temos" sem oferecer substituto.

---

### S02 — Preço e Valor
*Volume: 475 mensagens*

**O que o cliente diz:**
- "Qual o valor da máquina?"
- "Quanto custa o condicionador?"
- "Qual o preço dessa escova?"
- "Quanto tá saindo uma dessa?"

**Script vendedor:**
> "Olá [Nome]! O [produto] está R$[valor]. Posso fazer em até 10x sem juros no cartão ou com desconto à vista no PIX. Qual você prefere?"

**Script vendedor (produto com variações):**
> "Temos três opções aqui: [Produto A] — R$X (diluição 1:5), [Produto B] — R$Y (diluição 1:10, rende mais). Qual encaixa melhor no seu volume de uso?"

**Instrução IA:**
> Sempre que passar preço: (1) dê o valor, (2) mencione parcelamento, (3) termine com pergunta de escolha ou fechamento. Nunca passe preço sem pergunta de retorno.

---

### S03 — Status do Pedido
*Volume: 346 mensagens*

**O que o cliente diz:**
- "Quero verificar meu pedido"
- "Meu pedido já foi enviado?"
- "Já foi enviado? Quando chega?"
- "Meu pedido está atrasado, isso é absurdo"

**Script vendedor (pedido em processamento):**
> "Oi [Nome]! Seu pedido está sendo preparado aqui. A coleta está agendada para [data/hoje/amanhã de manhã]. Assim que sair, te mando o rastreio."

**Script vendedor (pedido enviado):**
> "Oi [Nome]! Seu pedido saiu em [data]. Segue o rastreio: [código] pela [transportadora]. A previsão é de até [X] dias úteis."

**Script vendedor (pedido atrasado — com empatia):**
> "[Nome], me desculpe o transtorno. Vou verificar agora mesmo o que aconteceu com a transportadora e retorno em seguida com uma resposta concreta para você."

**Instrução IA:**
> Consulte o sistema de pedidos com o contato ou CPF do cliente. Se houver atraso, reconheça o problema antes de investigar. Nunca peça para o cliente "aguardar" sem dar um prazo de retorno.

---

### S04 — Rastreio
*Volume: 23 mensagens (+ presente dentro de S03)*

**O que o cliente diz:**
- "Vc tem o rastreio para me mandar?"
- "Já tem o rastreio?"
- "Me manda o código de rastreio"

**Script vendedor:**
> "Oi [Nome]! Segue o código de rastreio: [código] pela [transportadora]. Você acompanha em [site/app]. A previsão é [X] dias úteis a partir de [data da coleta]."

**Instrução IA:**
> Sempre que enviar rastreio: código + transportadora + site para acompanhar + previsão em dias úteis. Nunca só o código.

---

### S05 — Forma de Pagamento
*Volume: 221 mensagens*

**O que o cliente diz:**
- "Me passa o PIX"
- "Vocês não fazem boleto?"
- "Cartão não dá agora"
- "Se fosse no PIX, qual o valor?"
- "Qual a forma de pagamento?"

**Script vendedor (padrão):**
> "Trabalhamos com PIX e cartão de crédito em até 10x sem juros por link de pagamento. Qual prefere?"

**Script vendedor (desconto no PIX):**
> "No PIX à vista consigo um desconto. Quer que eu calcule como fica?"

**Script vendedor (cartão com problema):**
> "Sem problema! Posso te enviar o link para pagamento por um cartão diferente, ou fazemos no PIX. Qual funciona melhor para você agora?"

**Script vendedor (cliente pede boleto):**
> "Hoje a gente não trabalha com boleto. Mas consigo PIX (com desconto à vista) ou cartão em até 10x sem juros por link de pagamento. Qual fica melhor para você?"

**Instrução IA:**
> Apresente apenas duas opções: PIX (com desconto à vista) e cartão em até 10x sem juros. **NUNCA oferecer boleto** — não trabalhamos com essa forma de pagamento. Se o cliente pedir boleto, recuse com cordialidade e ofereça PIX ou cartão imediatamente.

---

### S06 — Entrega, Frete e Prazo
*Volume: 142 mensagens*

**O que o cliente diz:**
- "Quanto tempo demora para coletar?"
- "Entrega hoje?"
- "Tem previsão de quando chegaria?"
- "Quanto é o frete?"

**Script vendedor:**
> "A coleta aqui na loja acontece [hoje/amanhã de manhã]. Após a coleta, a entrega leva até [X] dias úteis pela [transportadora]. Me confirma seu CEP/região que eu calculo o frete — o valor depende do produto, do total da compra e da sua região."

**Script vendedor (urgência):**
> "Se fecharmos até às [hora], consigo incluir na coleta de hoje. Quer fechar agora?"

**Script vendedor (retirada):**
> "Pode retirar aqui na loja! Endereço: [endereço]. Horário: [horário]. Quando você consegue vir?"

**Instrução IA:**
> Sempre informe: data prevista de coleta + dias úteis de entrega + cálculo do frete. **O frete depende sempre de três variáveis:** produto (peso/dimensão), valor total da compra e região do cliente. Nunca dê valor de frete sem o CEP/região. Frete grátis também depende dessas três variáveis — nunca prometa de antemão.

---

### S07 — Retirada na Loja
*Volume: 101 mensagens*

**O que o cliente diz:**
- "Posso retirar na loja?"
- "Vou passar aí buscar"
- "Tem como retirar?"

**Script vendedor:**
> "Pode sim! Fica em [endereço]. Funcionamos [dias] das [horário]. É só separar o pedido antes — me confirma o que vai querer que já deixo no jeito para você."

**Instrução IA:**
> Confirme que pode retirar, passe endereço e horário, e peça para o cliente confirmar o pedido antes de vir para garantir que estará separado.

---

### S08 — Compatibilidade Técnica de Lâminas e Acessórios
*Volume: 95 mensagens*

**O que o cliente diz:**
- "Essa lâmina serve na minha máquina Andes?"
- "As da Propetz são de cerâmica?"
- "Serve na Pro 7 normal?"
- "É o mesmo encaixe?"

**Script vendedor (compatível):**
> "Sim, essa lâmina encaixa certinho na sua [modelo]. O encaixe é o mesmo e as alturas são as mesmas que você já usa."

**Script vendedor (verificar modelo):**
> "Para confirmar a compatibilidade, me fala o modelo exato da sua máquina. Assim garanto que você não leva errado."

**Script vendedor (cerâmica):**
> "As lâminas da Propetz são sim de cerâmica — esquentam bem menos que as de aço convencional, o que é ótimo para tosas longas."

**Instrução IA:**
> Nunca confirme compatibilidade sem saber o modelo exato da máquina do cliente. Se não tiver certeza, peça o modelo antes de responder. Errar compatibilidade gera devolução e insatisfação.

---

### S09 — Pedido de Foto, Catálogo ou Opções
*Volume: 92 mensagens*

**O que o cliente diz:**
- "Me manda as opções"
- "Tem foto?"
- "Me manda o catálogo"
- "Quais vocês têm?"

**Script vendedor:**
> "Claro! Veja as opções que temos: [enviar fotos/catálogo]. Qual delas se encaixa melhor no que você precisa?"

**Instrução IA:**
> Envie as imagens ou o catálogo imediatamente. Após enviar, faça uma pergunta de qualificação (tamanho, raça do pet, volume de uso) para filtrar as opções e guiar o cliente.

---

### S10 — Nota Fiscal
*Volume: 105 mensagens*

**O que o cliente diz:**
- "Consegue me passar a nota fiscal em PDF?"
- "Me manda a NF da última compra"
- "Preciso da nota fiscal para lançar no sistema"

**Script vendedor:**
> "Claro! Me confirma o [CPF/CNPJ] que usou na compra que eu emito aqui e te mando o PDF."

**Script vendedor (CNPJ):**
> "Para emitir em CNPJ, me passa: razão social, CNPJ, endereço completo com CEP e inscrição estadual (se tiver). Você quer a nota em CNPJ mesmo?"

**Instrução IA:**
> Para emitir NF em CPF: peça apenas o CPF e confirme o pedido. Para CNPJ: solicite razão social, CNPJ, endereço completo e IE. Nunca emita sem confirmar os dados primeiro.

---

### S11 — Peças de Reposição
*Volume: 177 mensagens*

**O que o cliente diz:**
- "Tem cabo de carregamento dessa máquina?"
- "Vende a fonte da Propetz separado?"
- "Tem a turbina da secadora Kyklon?"
- "Vende mangueira e filtro do Kyklon Maxx?"

**Script vendedor (tem):**
> "Temos sim! O [peça] da [marca/modelo] está R$[valor]. Quer que eu já reserve para você?"

**Script vendedor (não tem):**
> "Essa peça específica não trabalhamos, mas posso verificar se consigo para você. Me passa o modelo exato da máquina que eu pesquiso aqui."

**Instrução IA:**
> Peças de reposição exigem modelo exato da máquina. Sempre confirme o modelo antes de pesquisar. Se não tiver em estoque, comprometa-se a verificar e dê um prazo de retorno.

---

### S12 — Trocas e Reclamações
*Volume: 55 mensagens*

**O que o cliente diz:**
- "Meu pedido veio com defeito"
- "O produto não era o que eu esperava"
- "A pedra não deu certo aqui"
- "Produto errado"

**Script vendedor (produto com defeito):**
> "[Nome], me desculpe o transtorno. Me manda uma foto/vídeo do defeito que eu já aciono a troca aqui para você. Qual o número do pedido?"

**Script vendedor (produto não atendeu expectativa):**
> "Entendi, [Nome]. Me conta mais — o que aconteceu especificamente? Assim consigo verificar se é um problema do produto ou se posso indicar algo mais adequado para o que você precisa."

**Script vendedor (produto errado enviado):**
> "Minha sincera desculpa, [Nome]. Erro nosso. Vou verificar o que aconteceu e já te informo como vamos resolver — troca imediata ou estorno, como você preferir."

**Instrução IA:**
> Nunca questione o cliente em reclamação. Reconheça, peça evidência (foto/vídeo), e encaminhe para o vendedor humano se precisar de decisão sobre troca ou estorno. Sempre dê um prazo de retorno.

---

### S13 — Negociação e Desconto
*Volume: 52 mensagens*

**O que o cliente diz:**
- "Consegue fechar por 250?"
- "Dá um desconto?"
- "Se for à vista, qual o valor?"
- "Tem como melhorar?"

**Script vendedor (desconto PIX):**
> "À vista no PIX consigo um desconto. Fica R$[valor com desconto]. Fechamos assim?"

**Script vendedor (pedido abaixo do piso):**
> "[Nome], o mínimo que consigo é R$[valor]. Me confirma sua região que eu verifico se rola frete grátis nesse pedido — depende do produto, do valor da compra e de onde você está. É o melhor que tenho para te oferecer."

**Script vendedor (pedido com múltiplos itens):**
> "Deixa eu somar aqui... São R$[total]. À vista no PIX consigo R$[com desconto]. Fecha assim?"

**Instrução IA:**
> Não conceda desconto acima de [X]% sem aprovação do vendedor humano. Condicione sempre ao PIX à vista. Se o pedido for abaixo do piso, dê o piso com justificativa concreta (prazo garantido, condição comercial verificada). **Nunca prometa frete grátis sem antes confirmar produto + valor da compra + região do cliente.**

---

### S14 — Afiação
*Volume: 28 mensagens*

**O que o cliente diz:**
- "A afiação é grátis?"
- "Vocês fazem afiação? Faz na hora?"
- "Qual o valor da afiação?"
- "Conserta tesoura também?"

**Script vendedor:**
> "Fazemos sim! A afiação de lâmina fica em torno de R$20 a R$30. Tesouras também afiamos. Se quiser trazer, já aproveita e retira na hora — normalmente fazemos no dia. Quer agendar?"

**Script vendedor (cliente longe):**
> "Se não conseguir vir até a loja, pode enviar pelo Correios ou transportadora. A gente afia e devolve para você. Me manda o endereço que eu calculo o custo de ida e volta."

**Instrução IA:**
> Confirme que faz afiação, passe o valor aproximado e ofereça as duas opções: trazer pessoalmente ou enviar. Se o cliente perguntar se é gratuita, responda que tem custo e informe o valor.

---

### S15 — Manutenção e Conserto
*Volume: 21 mensagens*

**O que o cliente diz:**
- "Vocês consertam máquina de tosa?"
- "A máquina está com problema, tem como consertar?"
- "Teria que fazer adaptação na turbina"
- "Quanto sai pra consertar?"

**Script vendedor (encaminhamento padrão):**
> "Temos assistência técnica própria aqui na Maqlam! Para conserto, o atendimento é direto com a nossa equipe técnica. Segue o contato: [CONTATO ASSISTÊNCIA TÉCNICA]. Eles vão diagnosticar a máquina e te passar o que precisa."

**Script vendedor (cliente insiste em saber valor antes):**
> "Sem ver a máquina não consigo te passar valor de conserto — depende do diagnóstico. Mas se for troca de peça, eu consigo te informar o valor da peça aqui. Você sabe qual peça precisa, ou prefere mandar para a assistência avaliar?"

**Script vendedor (peça identificada):**
> "Essa peça [nome] está R$[valor]. Posso já reservar e a assistência técnica faz a troca quando você levar a máquina. Quer seguir assim?"

**Instrução IA:**
> Para manutenção e conserto: **encaminhar SEMPRE direto para o contato da assistência técnica**. **NUNCA passar valor de conserto** (mão-de-obra, diagnóstico, serviço) antes — só a assistência avalia. **APENAS valor de peça** pode ser informado, e somente quando a peça estiver claramente identificada pelo cliente. Coletar modelo da máquina sempre que possível para repassar à assistência.

---

### S16 — CNPJ / Preço Pessoa Jurídica
*Volume: 49 mensagens*

**O que o cliente diz:**
- "Preciso saber o valor para CNPJ"
- "Vocês têm tabela PJ?"
- "Fatura em CNPJ?"

**Script vendedor:**
> "Emitimos nota em CNPJ sim! O valor é o mesmo da tabela padrão — não temos tabela diferenciada para PJ. Para emitir a nota, me passa: razão social, CNPJ, endereço completo com CEP e inscrição estadual (se tiver). Posso seguir?"

**Instrução IA:**
> Confirme que emitem NF em CNPJ. **NÃO existe tabela diferenciada para CNPJ** — o valor é o mesmo da tabela padrão. Nunca prometa "preço PJ" nem "condição comercial diferenciada". Para a emissão, colete: razão social, CNPJ, endereço completo com CEP e IE (se tiver).

---

### S17 — Transferência para Vendedor Humano
*Volume: 40 mensagens*

**O que o cliente diz:**
- "Quero falar com o Juliano"
- "Me passa para um atendente"
- "Transfere para humano"
- "Gostaria de falar com atendente"

**Script IA:**
> "Claro! Vou chamar um dos nossos especialistas agora mesmo. Em instantes alguém assume aqui para te ajudar!"

**Instrução IA:**
> Sempre que o cliente pedir transferência para humano: confirme que vai transferir, acione o vendedor responsável, e nunca tente resolver a situação você mesmo após o pedido de transferência.

---

### S18 — Voltagem / Bivolt
*Volume: 18 mensagens*

**O que o cliente diz:**
- "Essa máquina é 220V?"
- "Tem em 110V?"
- "É bivolt?"
- "Tudo 220V"

**Script vendedor:**
> "Essa [modelo] é [bivolt / 110V / 220V]. [Se bivolt]: funciona nas duas voltagens sem adaptador. [Se apenas 220V]: você vai precisar de um transformador se a sua rede for 110V."

**Instrução IA:**
> Sempre confirme a voltagem do produto específico antes de responder. Nunca generalize. Se bivolt, informe que funciona em ambas. Se for de tensão única, alerte sobre necessidade de transformador.

---

### S19 — Cashback
*Volume: 11 mensagens*

**O que o cliente diz:**
- "Tenho cashback, posso usar?"
- "O cashback é para qual produto?"
- "Posso usar o cashback nessa compra?"

**Princípio:** Cashback na Maqlam **NÃO é programa contínuo**. Roda apenas em eventos pontuais (campanhas específicas com início, fim e regras divulgadas).

**Script vendedor (sem campanha ativa):**
> "Hoje a gente não está com cashback ativo — o nosso cashback roda só em eventos pontuais. Posso te avisar quando a próxima campanha começar? Enquanto isso, à vista no PIX consigo um desconto para você."

**Script vendedor (com campanha ativa):**
> "Estamos com campanha de cashback ativa! O seu saldo é de R$[valor] e pode ser aplicado nessa compra. Quer usar agora?"

**Instrução IA:**
> Cashback **NÃO é benefício permanente** — só responder positivamente se houver campanha ativa no momento. Se não houver campanha, recusar com cordialidade, explicar que é evento pontual e redirecionar para o desconto à vista no PIX. Nunca prometer cashback futuro como gatilho de fechamento.

---

### S20 — Suporte Técnico e Instalação
*Volume: 10 mensagens*

**O que o cliente diz:**
- "Vocês dão suporte para instalação?"
- "Como eu instalo?"
- "Tem assistência técnica?"

**Script vendedor:**
> "A instalação da [produto] não é bicho de sete cabeças — qualquer encanador/eletricista de confiança consegue fazer. Não temos instalação própria, mas posso te orientar no que precisar."

**Instrução IA:**
> Para dúvidas de instalação: informe que não fazem instalação, oriente que qualquer profissional da área (encanador, eletricista) consegue fazer, e ofereça orientação técnica básica pelo chat se o cliente tiver dúvida específica.

---

### S21 — Garantia
*Volume: 5 mensagens*

**O que o cliente diz:**
- "Qual a garantia?"
- "Tem garantia?"
- "O produto tem garantia de quanto tempo?"

**Script vendedor:**
> "Esse [produto] tem garantia de [X meses] contra defeito de fabricação. Qualquer problema dentro do prazo, a gente resolve — troca ou reparo sem custo para você."

**Instrução IA:**
> Consulte a garantia do produto específico antes de informar. Nunca diga um prazo de garantia genérico. Após informar a garantia, reforce a confiança: "Qualquer problema, pode chamar a gente."

---

## Parte 4 — Técnicas de Fechamento

### F1 — Pergunta Binária
Elimine ambiguidade: não pergunte "o que você prefere?", pergunte "PIX ou cartão?".

### F2 — Resumo antes do fechamento
Sempre monte o resumo formatado (P4) antes de pedir a confirmação. Cliente que vê o resumo fecha mais.

### F3 — Vantagens Maqlam + Parcelamento
Combine os pilares da Maqlam (P6 — venda consultiva, assistência técnica na loja, 16 anos, melhores marcas) com parcelamento (P3): *"A gente trabalha só com as melhores marcas, tem assistência técnica aqui na loja e está há 16 anos no mercado — e ainda consigo fazer em 10x sem juros, fica só R$X por mês."*

### F4 — Quebra de objeção por valor
Quando o cliente acha caro: **não** reduza o produto. Reforce o que está incluso na compra Maqlam (consultoria, assistência técnica própria, curadoria de marcas) e ofereça o parcelamento em 10x. Se ainda assim houver hesitação, condicione desconto ao PIX à vista.

### F5 — Resolva a dúvida e feche na mesma mensagem
> "Sim, essa lâmina encaixa certinho na Andes Pro 7. Quer que eu já separo uma aqui para você?"

---

## Parte 5 — Pós-venda

### Fluxo padrão após o pedido

1. **Confirmação imediata:** "Pedido confirmado! Vou dar andamento e te aviso assim que coletar."
2. **Aviso de coleta:** "Coletou hoje! Segue o rastreio: [código] — previsão de [X] dias úteis."
3. **Follow-up de entrega (opcional):** 1 dia após o prazo previsto, verificar se chegou.
4. **Recompra:** Se o produto tiver ciclo curto (shampoo, insumos), entrar em contato antes do prazo de esgotamento estimado.

### Como abordar cliente inativo

> "Oi [Nome], tudo bem? [Vendedor] aqui da Maqlam! Faz um tempo que a gente não se fala — achei que vale checar se você precisa repor [produto que comprou antes]. A gente tem novidades também. Quer dar uma olhada?"

---

## Apêndice — Respostas Rápidas para a IA

| Situação | Resposta padrão |
|---|---|
| Cliente manda só "oi" | "Oi! Tudo bem? Como posso te ajudar hoje?" |
| Cliente manda foto de produto | "Que produto bacana! Deixa eu ver aqui — você quer [comprar / saber o preço / tirar uma dúvida sobre] esse?" |
| Cliente manda comprovante de pagamento | "Pagamento recebido! Já estou separando seu pedido. Em breve te informo a data de coleta." |
| Cliente manda mensagem automática de bot | Ignorar — não é uma interação real do cliente. |
| Cliente pede foto de produto | Enviar foto + descrição do produto + pergunta de qualificação (uso/necessidade). **NÃO enviar preço nessa etapa.** |
| Cliente diz "obrigado" no final | "Eu que agradeço! Qualquer coisa, pode chamar. 😃" |
| Cliente diz que vai pensar | "Sem problema! Fico à disposição. Só lembro que [mencione urgência relevante se houver]. Quando decidir, é só chamar." |
