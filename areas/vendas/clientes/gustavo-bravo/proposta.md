# Proposta — Bravo Agency · Estrutura + Automação

> "Antes de automatizar, precisamos ter um processo. Senão a gente só acelera o caos."
> — alinhado na reunião de 20/04/2026

---

## O que a gente viu na reunião

O Gustavo quer escalar para mais clientes sem contratar mais pessoas. A visão está certa. Mas na nossa conversa ficou claro o problema real: **a Bravo ainda não tem processos definidos internamente** — cada cliente tem sua particularidade, cada entrega é feita de forma diferente.

Colocar automação em cima de um processo indefinido não resolve. Vai criar mais confusão, gastar token, e no fim a equipe vai perder tempo configurando coisas que não se encaixam no jeito real de trabalhar da Bravo.

**A ordem certa é:**
1. Mapear e definir o processo
2. Automatizar em cima do processo definido

---

## O que a Eloscope vai fazer

### Fase 1 — Diagnóstico e Mapeamento de Processo (Semanas 1–3)
*Eloscope conduz. Rafael e Javi participam e aprendem.*

**Semana 1 — Diagnóstico**
- Sessão de mapeamento do fluxo atual (2h com Gustavo + Rafael + Javi)
- Documentar como a Bravo trabalha hoje: onboarding de cliente, planejamento, criação, aprovação, postagem
- Identificar onde está o gargalo real e o que é ad-hoc vs. padronizado

**Semana 2 — Redesenho do Processo**
- Definir o processo ideal módulo a módulo:
  - Módulo 1: Onboarding + análise do cliente (identidade, paleta, nicho)
  - Módulo 2: Planejamento de conteúdo mensal
  - Módulo 3: Comunicação e aprovação com o cliente
  - Módulo 4: Criação (copy + design)
  - Módulo 5: Aprovação final e postagem
- Para cada módulo: quem faz, com qual ferramenta, qual o entregável esperado

**Semana 3 — Roadmap de Automação**
- Definir quais módulos automatizar primeiro (começando pelos de maior impacto)
- Escolher a stack certa para cada módulo (OpenCloud, n8n, Claude Code)
- Criar um roteiro prático: o que Rafael e Javi vão implementar, em que ordem

**Entregável da Fase 1:**
> Documento de processo + roadmap de automação com prioridades definidas.
> Rafael e Javi saem sabendo exatamente o que construir e por onde começar.

---

### Fase 2 — Implantação Modular (Semanas 4–12)
*Rafael e Javi constroem. Eloscope acompanha e desbrava o caminho.*

A automação acontece módulo a módulo — sem tentar automatizar tudo de uma vez.

| Semana | Módulo | O que acontece |
|--------|--------|----------------|
| 4–5 | Módulo 1: Onboarding + análise do cliente | Rafael e Javi constroem a skill de análise com orientação ao vivo |
| 6–7 | Módulo 2: Planejamento de conteúdo | Automação do planejamento integrada à análise |
| 8–9 | Módulo 3: Aprovação + comunicação via n8n | Cliente recebe plano por WhatsApp, aprova ou dá apontamento |
| 10–11 | Módulo 4: Criação de copy e design | Skill de copywriting + integração com ferramenta de imagem |
| 12 | Revisão ponta a ponta | Ciclo completo testado com 3 clientes reais |

**Por que n8n para comunicação com cliente:** OpenCloud não é seguro para expor ao cliente final — tem acesso direto à infraestrutura interna. O n8n fica na frente como camada de comunicação externa, sem risco.

---

## O que o Gustavo não precisa fazer

- Não precisa entender código
- Não precisa estar em todas as sessões técnicas
- Rafael e Javi são os construtores — Gustavo só entra no kick-off e nos check-ins de fase

**Gustavo participa de:**
- Kick-off (2h — Semana 1): mapeamento do processo real
- Check-in ao final de cada fase (30 min): ver o que foi construído e validar

---

## Cronograma visual

```
Sem 1–3     ████ Diagnóstico + Redesenho de Processo + Roadmap
Sem 4–5     ████ Módulo 1: Onboarding + análise do cliente
Sem 6–7     ████ Módulo 2: Planejamento de conteúdo
Sem 8–9     ████ Módulo 3: Comunicação e aprovação (n8n)
Sem 10–11   ████ Módulo 4: Copy + Design
Sem 12      ████ Ciclo completo integrado e testado
```

---

## Quanto vale essa infraestrutura

Na reunião, o Gustavo falou que quer chegar em mais clientes sem contratar mais pessoas e que o novo método vai cobrar em torno de R$1.300/mês por cliente.

A matemática é simples:

| Cenário | Clientes | Receita mensal |
|---------|----------|----------------|
| Hoje (sem processo) | 20 | ~R$26.000 |
| Com sistema rodando (+4 clientes) | 24 | ~R$31.200 |
| Com sistema rodando (+8 clientes) | 28 | ~R$36.400 |

Com o ciclo automatizado, o Rafael e o Javi conseguem absorver mais clientes sem aumentar o tempo operacional. **4 clientes a mais por mês cobrem o investimento inteiro em menos de um mês.**

Mas além da escala, tem outro ativo que não aparece no número: **a Bravo vai ser dona de um sistema que não existe no mercado do jeito certo.** Qualquer concorrente que quiser replicar vai ter que começar do zero — ou pagar um freela para montar algo genérico que não reflete o processo deles.

---

## Por que não é a mesma coisa que contratar um freela

Essa objeção vai aparecer. Vale já ter a resposta clara.

**O freela de R$500 faz a ferramenta funcionar. Não faz o processo funcionar.**

| | Freela genérico | Eloscope |
|---|---|---|
| O que entrega | Automação montada no padrão dele | Processo da Bravo mapeado + automação em cima |
| Documentação | Nenhuma (ou um tutorial rápido) | Manual do processo + roadmap completo |
| Suporte depois | Depende da disponibilidade dele | Rafael e Javi operam sozinhos — não precisa de ninguém |
| O que acontece quando tem problema | Vai demorar (ele tem 15 outros clientes no mesmo preço) | Equipe treinada resolve internamente |
| Onde fica o conhecimento | Na cabeça do freela | Na empresa |
| E se sair um funcionário? | Sistema para | Processo documentado, qualquer um assume |

O maior custo do freela barato não é o que você paga para ele — é o que você paga para consertar o que ele entregou, ou para reconstruir quando ele some.

---

## Investimento

```
Pagamento único:     R$5.500
Parcelado:           R$1.500 entrada + R$1.300/mês × 3 meses  (= R$5.400)
```

**Opção só Fase 1 (se quiser testar antes):**
```
Apenas diagnóstico + mapeamento + roadmap:   R$1.800
(Semanas 1–3 — Gustavo sai com o processo desenhado e o roteiro na mão)
(Se decidir continuar para a Fase 2, o R$1.800 abate no total)
```

---

## Garantia

> "Se ao final da Semana 3 o documento de processo e o roadmap não estiverem claros o suficiente para o Rafael e o Javi saberem por onde começar, continuamos as sessões sem custo adicional até chegar nesse ponto."

---

## Objeções comuns — como responder

*(Seção interna — não enviar ao Gustavo)*

**"R$5.500 é caro"**
> "Para 1 cliente extra por mês no novo método, você recupera em 4 meses. Se fechar 4 clientes a mais no ano porque o processo ficou eficiente, o retorno é R$62.400 contra um investimento de R$5.500. E tem a opção de começar só com a Fase 1 por R$1.800."

**"Tem freela que faz isso mais barato"**
> "Freela faz a ferramenta funcionar. A gente mapeia como a Bravo trabalha, documenta, garante que o Rafael e o Javi operam e expandem sozinhos. Quando tem problema ou você quer adicionar um cliente novo, você não precisa chamar ninguém. O problema do freela barato não é o trabalho — é que o conhecimento vai embora com ele."

**"Vou fazer sozinho / o Rafael vai aprender no YouTube"**
> "Ele já está estudando — isso é ótimo. O que não está no YouTube é qual ferramenta usar para cada módulo sem gastar token demais, como estruturar a memória dos agentes, como fazer a comunicação com cliente de forma segura. Isso a gente aprendeu na prática. A gente acelera o caminho deles em meses."

**"E se não funcionar / não tiver retorno?"**
> "A garantia cobre a Fase 1. Se o documento de processo não estiver claro na Semana 3, a gente continua sem custo. Você não está pagando pela promessa de automação — está pagando pela clareza de processo primeiro. Sem processo claro, a gente não avança."

**"E se o Rafael ou o Javi sair da empresa?"**
> "Tudo documentado. O processo fica na empresa, não na cabeça de uma pessoa. Qualquer pessoa nova que entrar consegue assumir porque o sistema está mapeado e construído."

**"Não tenho budget agora"**
> "Por isso existe a opção de começar só com a Fase 1 por R$1.800. Você valida o método, vê o processo sendo desenhado ao vivo, e decide sobre a Fase 2 com mais clareza. O R$1.800 abate no total se continuar."

---

## Sobre a parte comercial

Na reunião o Gustavo mencionou que precisa estruturar melhor o processo de venda da própria Bravo — cliente ideal, ticket, processo de fechamento. Isso fica fora desta proposta, mas pode ser uma segunda fase natural depois que o processo de entrega estiver rodando.

---

## Mensagem de WhatsApp para o Gustavo

```
Gustavo, montei a proposta.

Como a gente alinhando — antes de automatizar, a gente precisa 
ter o processo claro. Senão é só acelerar a confusão.

A lógica é essa:

Semanas 1–3: a gente mapeia o processo real da Bravo, redesenha 
módulo a módulo e define o que o Rafael e o Javi vão construir, 
em que ordem.

Semanas 4–12: eles constroem módulo por módulo, com a Eloscope 
do lado. Começando pelo onboarding do cliente e indo até o ciclo 
completo de aprovação e criação.

Você entra no kick-off (2h) e nos check-ins de fase (30 min cada).
O resto é com Rafael e Javi.

Investimento: R$5.500 único (ou R$1.500 agora + R$1.300/mês por 3 meses).

Quando você tem 30 minutos essa semana para a gente alinhar com 
o Rafael e o Javi?
```

---

## Notas internas

- Gustavo é Q1 (sem time comercial dedicado) — não é o ICP ideal do Elo OS, mas tem potencial de crescer para Q2
- Ele está reformulando o produto da Bravo (método novo ~R$1.300-2.000/mês, clientes de R$25k+/mês)
- Rafael e Javi já estão estudando OpenCloud/Claude Code — ponto positivo para a co-construção
- Não expor OpenCloud/Claude Code diretamente para o cliente final da Bravo — sempre via n8n
- Parte comercial (estruturar processo de venda da Bravo) pode virar uma segunda proposta futura

---

*Atualizado: 21/04/2026 — pivot para consultoria de processo após reunião de discovery 20/04 e alinhamento interno 21/04*
