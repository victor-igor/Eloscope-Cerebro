# Eloscope OS

> Sistema operacional de agentes da Eloscope — cobre o ciclo completo **Aquisição → Execução → Pós-venda** com 27 agentes organizados em 6 áreas funcionais sob um meta-orchestrator (Regente).

**Filosofia:** Conectar inteligências para ampliar horizontes. Cada agent tem escopo estreito, contrato de entrada/saída claro, e handoffs formalizados. Sem conversa livre entre agents — sempre artefato estruturado.

**Naming:** Astronômico e mitológico, em linha com *Luna* (em produção no WhatsApp) e *Eloscope* (telescópio do elo).

---

## Estrutura

```
eloscope-os/
├── squad.yaml              # Manifest oficial (validado contra squad-schema.json)
├── README.md               # Este arquivo
├── agents/                 # 27 agents em 6 áreas + command
│   ├── command/            # regente (meta-orchestrator)
│   ├── presales/           # orion, sirius, andromeda, halley
│   ├── engineering/        # hefesto + 9 specialists
│   ├── ai/                 # minerva + 4 specialists
│   ├── geo/                # helio, nova, cometa
│   ├── delivery/           # mentor, temis, clio
│   └── success/            # elo
├── tasks/                  # 15 tasks (handoff + fluxos core)
├── workflows/              # 4 workflows cross-area
├── templates/              # 5 templates (handoff, ADR, proposta, discovery, contrato IA)
├── checklists/             # 5 checklists (DoD por área + LGPD)
├── config/                 # Coding standards, tech stack, source tree
└── schemas/                # JSON Schemas (handoff, discovery-report)
```

---

## Áreas e orchestrators

| Área | Orchestrator | Agents | Propósito |
|---|---|---|---|
| **command** | Regente | 1 | Coordenação global inter-área |
| **presales** | Órion | 4 | Prospectar → qualificar → propor → follow-up |
| **engineering** | Hefesto | 10 | Arquitetar → implementar → integrar → revisar |
| **ai** | Minerva | 5 | Desenhar agents → memória → prompts → evals → guardrails |
| **geo** | Hélio | 3 | Visibilidade em LLMs + SEO + performance |
| **delivery** | Mentor | 3 | Fechar projeto: QA, docs, go-live |
| **success** | Elo | 1 | Pós-venda, adoption, expansion |

**Sub-orchestrator:** Ariadne (dentro de engineering) orquestra Hermes + Lyra no padrão n8n.

---

## Invariantes (não-negociáveis)

1. **Handoffs são artefato, nunca conversa livre.** Formato: `handoff-{from}-{to}-{date}.md`
2. **Um orchestrator por área.** Sub-agents só falam com seu orchestrator
3. **Regente é o único com visão global.** Coordenação inter-área passa por ele
4. **Evals antes de produção.** Todo agent cliente-facing passa por Minos
5. **LGPD por padrão.** Qualquer fluxo com dado pessoal invoca Pallas
6. **Contratos versionados.** Integrações inter-área vivem em `ai/contracts/` com version bump
7. **DoD por agent.** Cada agent tem checklist de Definition of Done

---

## Matriz de handoffs formais

| De | Para | Payload |
|---|---|---|
| Órion | Andrômeda | Lead qualificado + dossiê Sírius |
| Andrômeda | Fênix* | Proposta aprovada internamente |
| Fênix* | Regente | Deal fechado + contrato + expectativas |
| Regente | Hefesto / Minerva / Hélio | Escopo por área + cronograma |
| Hefesto ↔ Minerva | ambas | Contrato de integração (endpoint, schema, SLA) |
| Execução | Mentor | Projeto pronto pra handover |
| Mentor | Elo | Cliente em produção + baseline de sucesso |
| Elo | Andrômeda | Case study qualificado (feedback loop) |

*Fênix ainda não implementado — fallback: Andrômeda → Regente direto.

---

## Como usar

### Invocar um agent

Os 27 agents vivem em `.claude/agents/` do projeto host (copiados desta squad). Invoque via:

```
@regente   # Kickoff de projeto
@hefesto   # Arquitetura técnica
@minerva   # Arquitetura de IA
@orion     # Qualificação de lead
# ...
```

### Executar uma task

```
*task tasks/handoff-create.md
*task tasks/qa-gate.md
```

### Rodar workflow cross-area

```
*workflow workflows/presales-to-kickoff.md
*workflow workflows/ai-feature-launch.md
```

---

## Gap analysis

| Item | Status |
|---|---|
| Agents implementados | 27 / 53 planejados (~51%) |
| Agents pendentes | Polaris, Vega, Atlas, Kepler, Copérnico, Prisma, Ecos, Mercúrio, Égide, Fênix (presales) • Íris, Musa, Apolo, Pitágoras, Aurora, Esboço, Maquete (produção visual) • Sprint, Cassandra, Jano (orquestração) • Grafo, Ceres, Fluxo, Oráculo (ai/dados) • Aurum, Telescópio (visibilidade) |
| Política | Manter como spec em `Agents/Agentes.md` até demanda justificar criação (regra do `CLAUDE.md`) |

---

## Referências

- **Arquitetura completa (53 agents, 7 squads originais):** `/Agents/Agentes.md`
- **Skills reutilizáveis entre agents:** `/Skills/Habilidades.md`
- **Convenções do repo:** `/CLAUDE.md`
- **Squad schema:** `.aiox-core/schemas/squad-schema.json`

---

**Versão:** 1.0.0
**Licença:** UNLICENSED (proprietário Eloscope)
**Criado por:** `@squad-creator` (Craft) via `*design-squad` → `*create-squad`
