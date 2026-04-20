# Skills / Habilidades — Sales OS

Catálogo das skills do plugin Sales OS. Skills são **pacotes modulares de conhecimento de domínio** que o Claude Code carrega automaticamente quando a conversa faz match com a descrição da skill. Não precisa invocar manualmente — elas entram no contexto sozinhas.

## Para que serve uma skill

Diferente de subagent (que é um worker com contexto próprio isolado), skill é conhecimento que fica **disponível ao Claude principal** durante a conversa. É o lugar de colocar:
- Framework que o time usa repetidamente (SPIN, BANT, SMART)
- Conhecimento de domínio (Q2, vertical específico, concorrência)
- Padrões técnicos da Eloscope (stack, convenção de código, arquitetura)
- Tom de voz, regras de escrita, estilo visual
- Templates repetidos (Mermaid, proposta, contrato)

## Skills disponíveis

### `q2-market-knowledge`

**Quando entra:** qualquer conversa sobre o quadrante Q2 — dores, linguagem, segmentos, objeções, ticket, ciclo.
**O que traz:** síntese do VPC aplicada ao Sales OS, dores em 3 camadas (operacional, estratégica, educacional), linguagem do cliente, objeções com resposta base.
**Uso típico:** preparar discovery, validar se material gerado está aderente ao público.

### `spin-methodology`

**Quando entra:** qualquer discussão sobre script de venda, discovery call, cadência, treinamento de time comercial, ou análise de call.
**O que traz:** framework SPIN completo (Situação, Problema, Implicação, Need-payoff) com exemplos adaptados ao Q2, ordem canônica de call de 75min, erros comuns, cadência pós-call de 14 dias, adaptações por vertical.
**Uso típico:** geração de script para o playbook, revisão de call gravada.

### `eloscope-stack`

**Quando entra:** discussões técnicas de arquitetura, escolha entre ferramentas (Paperclip vs n8n), prazo de entrega por pacote, comparação de stack.
**O que traz:** stack canônica da Eloscope por camada (agentes IA, canal, persistência, frontend, CRM, docs, diagramas, monitoramento), quando usar cada ferramenta, regras de ouro sobre não introduzir stack nova sem motivo.
**Uso típico:** estimativa técnica em proposta, decisão de arquitetura para cliente específico.

### `eloscope-brand-voice`

**Quando entra:** geração de qualquer texto destinado ao cliente ou público externo (proposta, e-mail, script, playbook, post, landing).
**O que traz:** cinco princípios (dado > adjetivo, verbo específico, honestidade sobre escopo, pergunta antes de afirmação, PT-BR informal-profissional), lista de banimento de palavras, formato canônico por canal, versões canônicas da promessa.
**Uso típico:** qualquer material escrito — skill garante consistência entre quem gera (Claude, Lucas, Victor, Hugo).

### `mermaid-funnel-templates`

**Quando entra:** necessidade de gerar ou discutir fluxograma em Mermaid — funil de cliente, handoff SDR-closer, cadência, fluxo do próprio Sales OS.
**O que traz:** seis templates prontos (Q2 genérico, clínica, imobiliária, energia solar, handoff, entrega Sales OS) + regras de estilo Mermaid.
**Uso típico:** Etapa 4 do Sales OS (fluxograma do funil do cliente), materiais de venda, treinamento.

## Como adicionar uma skill nova

1. Criar pasta em `.claude/skills/nome-da-skill/`
2. Criar arquivo `SKILL.md` dentro dela
3. Começar com frontmatter YAML:

```yaml
---
name: nome-da-skill
description: Quando usar essa skill — descrever em 1-3 frases com palavras que a conversa normalmente usa.
---
```

4. Conteúdo da skill em markdown após o frontmatter
5. Commit no repo, avisar o time pra puxar

A `description` é crítica: é ela que determina quando o Claude vai carregar automaticamente a skill. Deve conter palavras que o usuário naturalmente escreve quando precisa daquele conhecimento. Testar: se eu digitar "como estruturar um script de outbound?", a description da `spin-methodology` faz match? Sim, porque fala em "scripts" e "discovery".

## Critério para criar skill nova vs. apenas documentar

Vira skill quando:
- Você já respondeu a mesma pergunta 3+ vezes em contextos diferentes
- O conhecimento é específico da Eloscope ou do Sales OS (não está em docs públicas)
- Existe risco de perder consistência se cada pessoa do time fizer à sua maneira
- A informação tem >500 palavras ou requer exemplos estruturados

Vira **apenas doc em `docs/`** (não skill) quando:
- É informação estática para humanos consumirem, não o Claude
- É contrato, legal, financeiro
- Muda raramente e é mais útil em PDF do que em contexto de conversa

## Skills candidatas (a criar conforme demanda aparecer)

- `imobiliaria-sp-knowledge` — especialização do Q2 para imobiliária no eixo SP-interior
- `solar-residencial-knowledge` — especialização do Q2 para energia solar
- `clinica-multi-profissional-knowledge` — especialização para clínica
- `spin-implicacao-avancada` — técnicas avançadas da pergunta de Implicação, que é a mais difícil
- `proposta-comercial-template` — template de proposta com os 3 pacotes (Lean/Beta/Real)
- `contrato-sales-os` — cláusulas padrão com Gate e lista imexível
- `dashboard-metricas-q2` — métricas canônicas do dashboard por vertical
- `onboarding-checklist-interno` — checklist do time Eloscope pro kickoff de cada cliente

Criar na ordem em que a dor aparece. Não criar especulativamente.

## Evolução da base

Toda skill é viva. A cada cliente rodado, revisar se:
- Alguma dor observada no cliente não estava mapeada? → atualiza a skill correspondente
- Apareceu objeção nova que funcionou? → adiciona na tabela
- Ticket ou ciclo mudou do observado anteriormente? → atualiza as faixas
- Alguma ferramenta nova entrou na stack da Eloscope? → atualiza `eloscope-stack`

Commits de skill devem usar prefixo `skill: ` (ex.: `skill: adiciona objeção "já tentei com outra agência" em q2-market-knowledge`).
