---
task: Proposal Architecture
responsavel: andromeda
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - discovery_report: path pro discovery estruturado
  - bmc: Business Model Canvas do prospect (se disponível — Copérnico)
  - client_profile: porte, segmento, urgência
Saida: |
  - proposal_brief: propostas/{slug}/proposal-brief.md (usa templates/proposal-brief-template.md)
  - pricing_tier: básico | standard | enterprise
  - scope: lista de entregáveis
  - timeline: cronograma em semanas
  - cases: 2-3 cases similares selecionados (Ecos)
Checklist:
  - "[ ] Ler discovery report completo"
  - "[ ] Invocar Prisma — VPC (pain relievers + gain creators)"
  - "[ ] Invocar Ecos — buscar 2-3 cases similares (setor + dor + porte)"
  - "[ ] Invocar Mercúrio — recomendar tier de pricing com justificativa"
  - "[ ] Preencher templates/proposal-brief-template.md"
  - "[ ] Definir OUT of scope explicitamente (anti scope creep)"
  - "[ ] Antecipar objeções (Égide pré-ativado)"
  - "[ ] Criar handoff → Íris (briefing → deck)"
---

# proposal-architecture

Transforma discovery em matéria-prima para Íris montar o deck. Não gera deck — gera o **briefing estruturado** que alimenta o deck.

## Princípios
- **Anti scope creep:** OUT of scope sempre explícito
- **Anchor alto:** Mercúrio apresenta opção premium pra comparar
- **Cases são prova:** sem caso similar, menos conversão — Ecos é mandatório
- **Frases de valor testáveis:** 3 frases que podem ser A/B testadas em cold outreach futuro
