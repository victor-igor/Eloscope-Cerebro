# Agentes — Registry de Squads

> Os agentes vivem em `squads/`. Este arquivo é o índice de referência — o que cada squad faz, como ativar e qual contexto do cérebro cada um consome.

## Como ativar um squad

```
@nome-do-agente          ← ativa diretamente pelo nome do agente
/squad-name:agent-name   ← via slash command com prefixo do squad
```

---

## Squads Disponíveis

### 🏛️ C-Level Squad
**Path:** `squads/c-level-squad/`
**Foco:** Estratégia, operações, marketing, tecnologia, AI e receita comercial.

| Agente | Ativação | Papel |
|--------|----------|-------|
| CEO | `@ceo` | Orquestrador — contrata os especialistas certos |
| Vision Chief | `@vision-chief` | Visão de longo prazo e propósito |
| COO | `@coo-orchestrator` | Operações e execução |
| CMO | `@cmo-architect` | Marketing e crescimento |
| CTO | `@cto-architect` | Tecnologia e arquitetura |
| CIO | `@cio-engineer` | Sistemas e informação |
| CAIO | `@caio-architect` | Estratégia de IA |
| CSO | `@cso` | Vendas e receita |

**Contexto do cérebro:** `business-context`, `projetos/_index`, `pendencias`, `deadlines`

---

### 📋 Advisory Board
**Path:** `squads/advisory-board/`
**Foco:** Conselheiros estratégicos — Ray Dalio, Charlie Munger, Naval Ravikant, Peter Thiel, Reid Hoffman, Simon Sinek, Brené Brown e mais.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Board Chair | `@board-chair` | Orquestrador do board |
| Charlie Munger | `@charlie-munger` | Mental models, investimento |
| Ray Dalio | `@ray-dalio` | Princípios, macroeconomia |
| Naval Ravikant | `@naval-ravikant` | Leverage, criação de riqueza |
| Peter Thiel | `@peter-thiel` | Zero to one, competição |
| Reid Hoffman | `@reid-hoffman` | Blitzscaling, redes |
| Simon Sinek | `@simon-sinek` | Why, liderança |
| Brené Brown | `@brene-brown` | Vulnerabilidade, cultura |

**Contexto do cérebro:** `business-context`, `decisoes/YYYY-MM`

---

### ✍️ Copy Squad
**Path:** `squads/copy-squad/`
**Foco:** 23 copywriters lendários — direct response, email, VSLs, cartas de vendas, funis.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Copy Chief | `@copy-chief` | Orquestrador |
| Gary Halbert | `@gary-halbert` | Direct response clássico |
| Eugene Schwartz | `@eugene-schwartz` | Mass desire, headlines |
| David Ogilvy | `@david-ogilvy` | Brand + direct |
| Dan Kennedy | `@dan-kennedy` | Marketing direto, ofertas |
| André Chaperon | `@andre-chaperon` | Email, soap opera |
| Ben Settle | `@ben-settle` | Email diário |
| + 17 mais | — | Ver `squads/copy-squad/agents/` |

**Contexto do cérebro:** `business-context` (produto, avatar, oferta)

---

### 🏷️ Brand Squad
**Path:** `squads/brand-squad/`
**Foco:** Brand equity, posicionamento, identidade, arquitetura e crescimento de marca.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Brand Chief | `@brand-chief` | Orquestrador |
| David Aaker | `@david-aaker` | Brand equity model |
| Al Ries | `@al-ries` | Posicionamento |
| Alina Wheeler | `@alina-wheeler` | Brand identity |
| + mais | — | Ver `squads/brand-squad/agents/` |

**Contexto do cérebro:** `business-context` (missão, produto, posicionamento)

---

### 📣 Traffic Masters
**Path:** `squads/traffic-masters/`
**Foco:** Meta Ads, Google Ads, YouTube, media buying, criativos, scaling, tracking.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Traffic Chief | `@traffic-chief` | Orquestrador |
| Ad Midas | `@ad-midas` | Meta Ads avançado |
| Creative Analyst | `@creative-analyst` | Análise de criativos |
| Ads Analyst | `@ads-analyst` | Performance e métricas |
| + 12 mais | — | Ver `squads/traffic-masters/agents/` |

**Contexto do cérebro:** `business-context`, métricas de projetos

---

### 📊 Data Squad
**Path:** `squads/data-squad/`
**Foco:** Analytics, CLV, growth, comunidade, customer success.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Data Chief | `@data-chief` | Orquestrador |
| Avinash Kaushik | `@avinash-kaushik` | Web analytics |
| Sean Ellis | `@sean-ellis` | Growth hacking |
| David Spinks | `@david-spinks` | Comunidade |
| + mais | — | Ver `squads/data-squad/agents/` |

**Contexto do cérebro:** `business-context`, métricas de projetos

---

### 🎨 Design Squad
**Path:** `squads/design-squad/`
**Foco:** Design systems, UX/UI, design operations.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Design Chief | `@design-chief` | Orquestrador |
| Brad Frost | `@brad-frost` | Atomic design, design systems |
| Dan Mall | `@dan-mall` | Design operations |
| Dave Malouf | `@dave-malouf` | Design leadership |
| + mais | — | Ver `squads/design-squad/agents/` |

**Contexto do cérebro:** `business-context` (produto, marca)

---

### 💰 Hormozi Squad
**Path:** `squads/hormozi-squad/`
**Foco:** Frameworks Alex Hormozi — offers, leads, pricing, sales, scaling.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Hormozi Chief | `@hormozi-chief` | Orquestrador |
| Hormozi Advisor | `@hormozi-advisor` | Estratégia geral |
| Hormozi Audit | `@hormozi-audit` | Diagnóstico do negócio |
| Hormozi Ads | `@hormozi-ads` | Criativos e hooks |
| + 12 mais | — | Ver `squads/hormozi-squad/agents/` |

**Contexto do cérebro:** `business-context`, `projetos/_index`, `pendencias`

---

### 📖 Storytelling Squad
**Path:** `squads/storytelling/`
**Foco:** Narrativa, mitologia, screenwriting, business storytelling, pitching.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Story Chief | `@story-chief` | Orquestrador |
| Joseph Campbell | `@joseph-campbell` | Jornada do herói |
| Blake Snyder | `@blake-snyder` | Save the cat, estrutura |
| Dan Harmon | `@dan-harmon` | Story circle |
| + mais | — | Ver `squads/storytelling/agents/` |

**Contexto do cérebro:** `business-context` (missão, produto)

---

### 🔒 Cybersecurity Squad
**Path:** `squads/cybersecurity/`
**Foco:** Pentest, red team, blue team, AppSec, incident response.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Cyber Chief | `@cyber-chief` | Orquestrador |
| Busterer | `@busterer` | OSINT, reconhecimento |
| Cartographer | `@cartographer` | Mapeamento de rede |
| + 12 mais | — | Ver `squads/cybersecurity/agents/` |

**Contexto do cérebro:** `seguranca/permissoes`

---

### 🤖 Claude Code Mastery
**Path:** `squads/claude-code-mastery/`
**Foco:** Hooks, MCP servers, configuração, swarms, automação avançada no Claude Code.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Claude Mastery Chief | `@claude-mastery-chief` | Orquestrador |
| Hooks Architect | `@hooks-architect` | Hooks e automação |
| Config Engineer | `@config-engineer` | Configuração AIOS |
| + mais | — | Ver `squads/claude-code-mastery/agents/` |

**Contexto do cérebro:** — (técnico, sem necessidade de contexto de negócio)

---

### 🌊 Movement Squad
**Path:** `squads/movement/`
**Foco:** Construção de movimentos, fenomenologia, identidade, manifestos, comunidades.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Movement Chief | `@movement-chief` | Orquestrador |
| Fenomenólogo | `@fenomenologo` | Identidade e propósito |
| Estrategista de Ciclo | `@estrategista-de-ciclo` | Ciclos de crescimento |
| + mais | — | Ver `squads/movement/agents/` |

**Contexto do cérebro:** `business-context` (missão, propósito)

---

### ⚙️ Prompt Engineer Squad
**Path:** `squads/prompt-engineer-squad/`
**Foco:** Engenharia de prompts para agentes n8n e arquiteturas de IA conversacional.

| Agente | Ativação | Especialidade |
|--------|----------|--------------|
| Prompt Architect | `@prompt-architect` | Arquitetura de prompts |
| Prompt Engineer | `@prompt-engineer` | Implementação |

**Contexto do cérebro:** — (técnico)

---

## Referência Rápida

| Preciso de... | Squad |
|---------------|-------|
| Decisão estratégica | Advisory Board ou C-Level |
| Escalar negócio / oferta | Hormozi Squad |
| Copy para anúncio/email/VSL | Copy Squad |
| Tráfego pago | Traffic Masters |
| Branding / posicionamento | Brand Squad |
| Analytics / métricas | Data Squad |
| Design / UX | Design Squad |
| Narrativa / storytelling | Storytelling Squad |
| Segurança | Cybersecurity Squad |
| Configurar Claude Code | Claude Code Mastery |
| Construir movimento/comunidade | Movement Squad |
| Prompts para n8n / IA | Prompt Engineer Squad |
