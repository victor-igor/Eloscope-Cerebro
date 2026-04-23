---
workflow: presales-to-kickoff
areas_involved: [presales, command]
trigger: lead entra no funil
ends_when: projeto em execução (Regente assume)
---

# Workflow — Pré-venda → Kickoff

Fluxo completo desde lead entrando até início de execução. Atravessa presales e command.

## Sequência

```
1. orion → lead-qualification
   └─ se ICP OK → passar pra discovery
   └─ se ICP fail → descartar ou nurture

2. sirius → prospect-dossier (paralelo com 1 se outbound)

3. andromeda → proposal-architecture
   └─ (usando discovery + dossier)

4. halley → followup-cadence (após envio)

5. [Fênix simulado por andromeda até existir] → deal fechado

6. regente → project-kickoff
   └─ handoffs disparados pra áreas de execução
```

## Handoffs obrigatórios (artefato, nunca chat)

| Passo | De | Para | Artefato |
|---|---|---|---|
| 2→3 | orion | andromeda | `handoff-orion-andromeda-{date}.md` + discovery-report |
| 3→4 | andromeda | halley | `handoff-andromeda-halley-{date}.md` + proposal-brief |
| 5→6 | andromeda | regente | `handoff-andromeda-regente-{date}.md` + contrato assinado |
| 6→X | regente | hefesto/minerva/helio | `handoff-regente-{orchestrator}-{date}.md` + escopo por área |

## Gates

- **Gate 1 (qualificação):** ICP score ≥ 50 → prossegue. Senão nurture.
- **Gate 2 (proposta):** Mercúrio aprovou pricing? Ecos encontrou cases similares? Se não → voltar.
- **Gate 3 (kickoff):** Contrato assinado + decisor confirmado? Se não → não inicia.

## SLAs

- Discovery → proposta: 5 dias úteis
- Proposta enviada → decisão: 20 dias (Halley cadência)
- Deal fechado → kickoff: 3 dias úteis
