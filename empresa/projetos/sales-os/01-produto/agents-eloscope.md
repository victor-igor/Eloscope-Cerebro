# Agents / Agentes — Sales OS

Catálogo dos subagents do plugin Sales OS. **Subagents** são workers com contexto isolado, system prompt próprio, acesso restrito a ferramentas e (opcionalmente) memória persistente. Diferente de skill (que fica disponível ao Claude principal), subagent **roda em contexto separado** e devolve só o resultado — não polui sua conversa com a pesquisa, a análise, ou os rascunhos.

## Quando usar subagent vs. skill

**Use subagent quando:**
- A tarefa vai gerar muito output intermediário (pesquisa web, análise de transcrição longa) que você não precisa ver
- Quer isolar um papel com restrição de ferramenta (ex.: só leitura, sem write)
- A tarefa é autocontida e retorna síntese
- Quer memória persistente para acumular aprendizado entre invocações

**Use skill (não subagent) quando:**
- O conhecimento precisa estar ativo durante uma conversa aberta
- É referência de framework ou padrão
- Você quer que o Claude principal use o conhecimento diretamente

## Agents disponíveis

### `market-researcher`

**Papel:** pesquisador de mercado Q2.
**Ferramentas:** WebSearch, WebFetch, Read, Write.
**Skills que carrega:** `q2-market-knowledge`, `eloscope-brand-voice`.
**Input típico:** "investigar o mercado de clínicas de fisioterapia multi-profissional em Campinas".
**Output:** relatório markdown estruturado (panorama, players, pricing, canais, objeções, tendências, oportunidades, gaps).
**Quando invocar:** antes de abrir conversa com prospect de segmento novo, preparar proposta específica, decidir se atacar novo vertical.

### `diagnostic-analyst`

**Papel:** analisa transcrições de discovery calls.
**Ferramentas:** Read, WebFetch (para buscar transcript em Fireflies via MCP).
**Skills que carrega:** `q2-market-knowledge`, `spin-methodology`, `eloscope-brand-voice`.
**Memória:** `project` — acumula padrões observados entre calls.
**Input típico:** transcrição colada OU ID Fireflies OU pedido "consolidar padrões das últimas N calls de X vertical".
**Output:** análise estruturada em dois modos — call única (dores, red flags, próximo passo, perguntas SPIN) ou consolidação (padrões recorrentes, hipóteses).
**Quando invocar:** depois de toda call de discovery para preparar próximo passo, periodicamente para consolidar aprendizado de vertical.

### `playbook-writer`

**Papel:** gera playbook comercial customizado.
**Ferramentas:** Read, Write, Grep.
**Skills que carrega:** `spin-methodology`, `q2-market-knowledge`, `eloscope-brand-voice`, `mermaid-funnel-templates`.
**Input típico:** dados do diagnóstico (Etapa 1) + análise do `diagnostic-analyst` + segmento + pacote contratado.
**Output:** playbook completo ou seção específica em markdown — estrutura canônica com 8 seções (qualificação, funil, scripts, cadências, objeções, handoff, KPIs, regras IA/humano).
**Quando invocar:** após completar Etapas 1-3 do Sales OS, antes do Gate (Etapa 6).

### `onboarding-designer`

**Papel:** desenha os dois caminhos de onboarding da Etapa 2.
**Ferramentas:** Read, Write.
**Skills que carrega:** `q2-market-knowledge`, `eloscope-stack`, `eloscope-brand-voice`.
**Input típico:** vertical + pacote contratado + especificidades do cliente (ex.: "imobiliária com 12 corretores, usa Kommo").
**Output:** par de arquivos — Formulário A (estruturado, convertível pra Google Forms/Tally) e Script B (prompts conversacionais pro agente OpenClaw rodar no grupo WhatsApp) — consistentes entre si.
**Quando invocar:** no primeiro dia da Etapa 2, depois de contrato assinado e dados básicos do cliente definidos.

### `schedule-validator`

**Papel:** valida cronograma de cliente (preenchido a partir de `templates/Cronograma_Cliente_Template.md`) antes de mandar pro cliente ou travar como plano interno.
**Ferramentas:** Read, Grep.
**Skills que carrega:** `eloscope-stack`, `q2-market-knowledge`, `mermaid-funnel-templates`, `eloscope-brand-voice`.
**Input típico:** caminho do cronograma + rota + pacote + camada 7 (infere do doc se ausente).
**Output:** parecer em markdown com veredito (aprovado / com ressalva / reprovado), violações duras, riscos soft, sugestões de ajuste e pontos não validáveis.
**Quando invocar:** antes de fechar contrato/assinatura, antes de pro cliente, e quando um marco deslizar (replanejamento).

## Como adicionar um agent novo

1. Criar arquivo em `.claude/agents/nome-do-agent.md`
2. Frontmatter YAML obrigatório:

```yaml
---
name: nome-do-agent
description: Quando e porque usar — frase específica que orienta invocação
tools: Read, Write, WebSearch  # restrição opcional de ferramentas
skills: skill1, skill2  # opcional — skills que carregam automaticamente
model: sonnet  # opcional — default é sonnet
memory: project  # opcional — user, project, ou omitir se sem memória
---
```

3. System prompt do agente como corpo do markdown
4. Testar invocando via `/agents` ou pedindo pelo nome
5. Iterar no system prompt com base nos outputs reais

## Boas práticas ao desenhar agent novo

**Escopo restrito é melhor que amplo.** Um agente que faz "tudo sobre vendas" é pior que três agentes especializados. Especialização permite prompt mais rico e ferramentas mais restritas.

**Descrição na frontmatter é o contrato.** Ela orienta tanto invocação automática quanto as expectativas. Deve deixar claro **quando usar** e **quando NÃO usar**.

**Listar o que o agent NÃO faz.** No system prompt, sempre ter seção "O que você NÃO faz" apontando os outros agents. Evita overlap e confusão.

**Restringir ferramentas por segurança e foco.** Pesquisa não precisa de Write. Análise não precisa de WebSearch. Restrição força especialização.

**Prompt tem que envelhecer bem.** Evitar referência a cliente específico, data, valor absoluto. O agent vai rodar daqui 6 meses — precisa continuar útil.

## Agents candidatos (a criar conforme demanda)

- `proposal-generator` — gera proposta comercial nos 3 pacotes (Lean/Beta/Real) customizada
- `contract-drafter` — gera contrato com cláusulas de Gate e lista imexível a partir do diagnóstico
- `case-study-writer` — transforma dados de cliente Beta em case de estudo publicável
- `followup-composer` — gera mensagens de cadência de follow-up por canal
- `gate-reviewer` — checa se o processo validado na Etapa 6 atende os critérios de Gate antes de avançar pra Etapa 7 (complementa o `schedule-validator`: este valida o plano, aquele valida o conteúdo do Gate)
- `dashboard-spec-writer` — gera especificação técnica do dashboard Next.js+Supabase a partir do playbook aprovado
- `training-material-composer` — gera roteiro do Loom de treinamento do time do cliente

Criar conforme a dor aparecer. Não criar especulativamente.

## Como invocar um agent

Explicitamente:
```
use o market-researcher para pesquisar [segmento]
```

Por nome:
```
market-researcher: investiga [segmento]
```

Via `/agents`:
- Digitar `/agents` no Claude Code
- Escolher o agent
- Passar input

Em muitos casos, agents podem ser **encadeados** — o output do `diagnostic-analyst` vira input do `playbook-writer`. Mas, por limitação do Claude Code, um subagent **não pode spawnar outro subagent**. O encadeamento é sempre orquestrado do chat principal.

## Evolução dos agents

Toda vez que um output do agente sair ruim ou inconsistente, ajustar o system prompt e commitar. Prefixo de commit: `agent:` (ex.: `agent: playbook-writer agora marca seções S/P/I/N explicitamente`).

Se um agente vira legado e não é mais invocado em 3+ meses, removê-lo. Repo limpo > catálogo inflado.
