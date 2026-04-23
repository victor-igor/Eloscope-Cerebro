# Proposta — Bravo Agency · Estrutura + Acompanhamento

> "Antes de automatizar, precisamos ter um processo. Senão a gente só acelera o caos."
> — alinhado na reunião de 20/04/2026

---

## O que a Eloscope entrega

**Um documento de processo da Bravo + um roadmap de automação que o Rafael e o Javi conseguem executar sozinhos.**

Isso é o produto. Tudo o mais que vem depois é acompanhamento para garantir que a execução não saia dos trilhos.

---

## O que a Eloscope NÃO faz

- Não desenvolve os agentes de IA
- Não configura o n8n
- Não escreve o código dos módulos
- Não substitui o Rafael e o Javi na construção

**A Eloscope define o processo, mapeia o roadmap e acompanha semanalmente para garantir que a direção está certa.**

---

## O que a gente viu na reunião

O Gustavo quer escalar para mais clientes sem contratar mais pessoas. A visão está certa. Mas na nossa conversa ficou claro o problema real: **a Bravo ainda não tem processos definidos internamente** — cada cliente tem sua particularidade, cada entrega é feita de forma diferente.

Colocar automação em cima de um processo indefinido não resolve. Vai criar mais confusão, gastar token, e no fim a equipe vai perder tempo configurando coisas que não se encaixam no jeito real de trabalhar da Bravo.

**A ordem certa é:**
1. Mapear e definir o processo
2. Automatizar em cima do processo definido

---

## Como funciona

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

### Fase 2 — Acompanhamento Semanal (Semanas 4–12)
*Rafael e Javi constroem. Eloscope acompanha e destravar bloqueios.*

A automação acontece módulo a módulo — sem tentar automatizar tudo de uma vez. O Rafael e o Javi executam o roadmap definido na Fase 1. A Eloscope entra uma vez por semana para:

- Revisar o que foi construído
- Destravar bloqueios técnicos ou de processo
- Ajustar o rumo quando necessário
- Garantir que a direção continua alinhada com o processo definido

**Formato:** 1 sessão semanal de 1h (video call com Rafael e Javi)

**Por que n8n para comunicação com cliente:** OpenCloud não é seguro para expor ao cliente final — tem acesso direto à infraestrutura interna. O n8n fica na frente como camada de comunicação externa, sem risco.

---

## O que o Gustavo não precisa fazer

- Não precisa entender código
- Não precisa estar nas sessões técnicas semanais
- Rafael e Javi são os construtores — Gustavo só entra no kick-off e nos check-ins de fase

**Gustavo participa de:**
- Kick-off (2h — Semana 1): mapeamento do processo real
- Check-in ao final de cada fase (30 min): ver o que foi construído e validar

---

## Cronograma

```
Sem 1–3     ████ Diagnóstico + Redesenho de Processo + Roadmap
Sem 4–12    ████ Acompanhamento semanal (Rafael e Javi constroem)
```

---

## Investimento

```
Pagamento único:     R$5.500
Parcelado:           R$1.500 entrada + R$1.300/mês × 3 meses  (= R$5.400)
```

---

## Garantia

> "Se ao final da Semana 3 o documento de processo e o roadmap não estiverem claros o suficiente para o Rafael e o Javi saberem por onde começar, continuamos as sessões sem custo adicional até chegar nesse ponto."

---

## Validade desta proposta

Esta proposta está reservada até **30/04/2026**. Tenho capacidade para 2 novos projetos por mês — esse slot fica aberto até lá.

---

## Mensagem de WhatsApp para o Gustavo

```
Gustavo, montei a proposta.

Como a gente alinhou — antes de automatizar, a gente precisa 
ter o processo claro. Senão é só acelerar a confusão.

O que a Eloscope entrega:

Semanas 1–3: mapeamento do processo real da Bravo, redesenho 
módulo a módulo e um roadmap que o Rafael e o Javi conseguem 
executar sozinhos.

Semanas 4–12: 1 sessão semanal de 1h para acompanhar a 
construção — destravar bloqueios e garantir que a direção 
está certa. Quem constrói é o Rafael e o Javi.

Você entra no kick-off (2h) e nos check-ins de fase (30 min cada).
O resto é com Rafael e Javi.

Investimento: R$5.500 único (ou R$1.500 agora + R$1.300/mês por 3 meses).

Proposta válida até 30/04. Tenho 2 slots este mês — um está reservado para vocês.

Quando você tem 30 minutos essa semana para a gente alinhar?
```

---

## Notas internas

- Gustavo é Q1 (sem time comercial dedicado) — não é o ICP ideal do Elo OS, mas tem potencial de crescer para Q2
- Ele está reformulando o produto da Bravo (método novo ~R$1.300-2.000/mês, clientes de R$25k+/mês)
- Rafael e Javi já estão estudando OpenCloud/Claude Code — ponto positivo para a co-construção
- Não expor OpenCloud/Claude Code diretamente para o cliente final da Bravo — sempre via n8n
- Parte comercial (estruturar processo de venda da Bravo) pode virar uma segunda proposta futura

---

*v2 — 23/04/2026 — escopo limitado: Eloscope entrega processo + roadmap + acompanhamento semanal (não desenvolve automações)*
