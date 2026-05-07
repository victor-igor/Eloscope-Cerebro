# Squads — Índice

> 13 squads de agentes IA especializados para diferentes funções do negócio.
> Detalhes de cada squad (agentes, ativação, contexto do cérebro): `agentes/_registry.md`

---

## Squads Disponíveis

| Squad | Pasta | Foco | Ativar com |
|-------|-------|------|-----------|
| Eloscope OS | `eloscope-os/` | Meta-orchestrator — sistema completo Aquisição → Entrega → Pós-venda | `@regente` |
| C-Level Squad | `c-level-squad/` | Liderança executiva (CEO, COO, CMO, CTO, CAIO, CSO) | `@ceo` |
| Advisory Board | `advisory-board/` | Conselheiros estratégicos (Dalio, Munger, Naval, Thiel...) | `@board-chair` |
| Copy Squad | `copy-squad/` | 23 copywriters (Halbert, Schwartz, Ogilvy, Kennedy...) | `@copy-chief` |
| Brand Squad | `brand-squad/` | Branding, posicionamento, identidade (Aaker, Al Ries...) | `@brand-chief` |
| Traffic Masters | `traffic-masters/` | Meta Ads, Google Ads, YouTube, media buying | `@traffic-chief` |
| Data Squad | `data-squad/` | Analytics, growth, CLV, comunidade (Sean Ellis, Kaushik...) | `@data-chief` |
| Design Squad | `design-squad/` | UX/UI, design systems (Brad Frost, Dan Mall...) | `@design-chief` |
| Hormozi Squad | `hormozi-squad/` | Ofertas, leads, pricing, scaling (framework Hormozi) | `@hormozi-chief` |
| Storytelling | `storytelling/` | Narrativa, pitching, roteiro (Campbell, Snyder, Oren Klaff...) | `@story-chief` |
| Cybersecurity | `cybersecurity/` | Pentest, red team, AppSec, incident response | `@cyber-chief` |
| Claude Code Mastery | `claude-code-mastery/` | Hooks, MCP, automação avançada no Claude Code | `@claude-mastery-chief` |
| Movement | `movement/` | Construção de movimentos e comunidades | `@movement-chief` |
| Prompt Engineer | `prompt-engineer-squad/` | Engenharia de prompts para n8n e IA conversacional | `@prompt-architect` |

---

## Referência Rápida por Necessidade

| Preciso de... | Squad |
|---------------|-------|
| Decisão estratégica | Advisory Board ou C-Level |
| Escalar negócio / estruturar oferta | Hormozi Squad |
| Copy para anúncio / email / VSL | Copy Squad |
| Tráfego pago | Traffic Masters |
| Branding / posicionamento | Brand Squad |
| Analytics / métricas | Data Squad |
| Design / UX | Design Squad |
| Narrativa / storytelling / pitch | Storytelling |
| Segurança | Cybersecurity |
| Configurar Claude Code / AIOX | Claude Code Mastery |
| Construir movimento / comunidade | Movement |
| Prompts para n8n / IA | Prompt Engineer |
| Operar o negócio ponta a ponta | Eloscope OS |

---

## Estrutura Interna de Cada Squad

```
squad-name/
├── agents/       — Definições de agentes (persona, role, greeting)
├── tasks/        — Tasks executáveis com inputs/outputs
├── workflows/    — Workflows multi-agente
├── checklists/   — Checklists de qualidade
├── config/       — Configurações do squad
└── data/         — Frameworks e catálogos de referência
```

---

> Índice detalhado com todos os agentes de cada squad: [`agentes/_registry.md`](../agentes/_registry.md)
