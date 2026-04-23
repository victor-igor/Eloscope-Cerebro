# Source Tree — Eloscope OS

Convenção de paths que os agents referenciam. **Não inventar paths novos** — se precisar de um, adicione aqui primeiro.

## Em projetos Eloscope (aplicação cliente)

```
project-root/
├── .claude/
│   └── agents/            # Copiados desta squad (27 agents)
├── apps/                  # Apps (web, admin, etc.) — monorepo
├── packages/
│   ├── ui/                # Design system (Pigmento)
│   ├── db/                # Schema + migrations (Gaia)
│   └── contracts/         # Tipos compartilhados
├── supabase/
│   └── migrations/        # SQL migrations (Gaia)
├── workflows/             # n8n JSON (Ariadne)
├── prompts/               # Prompts versionados (Logos)
├── ai/
│   ├── architecture/      # ADRs de IA (Minerva)
│   └── contracts/         # Contratos entre agents IA (versionados)
├── eval/
│   ├── suites/            # Eval suites YAML (Minos)
│   └── reports/           # Reports gerados
├── compliance/            # Policies de guardrails (Pallas)
├── adr/                   # ADRs técnicos (Hefesto)
└── projects/
    └── {cliente-slug}/
        ├── kickoff.md
        ├── status.md
        ├── risks.md
        ├── handoffs/      # Todos os artefatos de handoff
        ├── discovery/
        ├── deliverables/
        ├── meetings/
        ├── geo/
        └── handover/      # Quando entrega fechar
```

## Em nível de squad (este repo `squads/eloscope-os/`)

```
eloscope-os/
├── squad.yaml                      # Manifest
├── README.md                       # Doc de entrada
├── agents/{area}/*.md              # 27 agents em 6 áreas
├── tasks/*.md                      # 15 tasks
├── workflows/*.md                  # 4 workflows cross-area
├── templates/*.md                  # 5 templates
├── checklists/*.md                 # 5 checklists (DoD + LGPD)
├── config/                         # coding-standards, tech-stack, source-tree
├── schemas/                        # JSON Schemas (handoff, etc.)
└── data/                           # Dados estáticos (ICP, pricing tiers, etc.)
```

## Artefatos de vendas (fora de projects/)

```
leads/{slug}/qualification.md       # Órion
prospects/{slug}/dossier.md         # Sírius
propostas/{slug}/proposal-brief.md  # Andrômeda
clientes/{slug}/health-check.md     # Elo
```

## Regras
- Slugs em `kebab-case` sempre
- Datas em `YYYY-MM-DD` sempre
- Nunca commitar PII em markdown — sempre anonimizar exemplos
