---
workflow: engineering-delivery
areas_involved: [engineering, delivery]
trigger: handoff de Regente pra Hefesto
ends_when: QA gate PASS, Mentor aceita pra handover
---

# Workflow — Engineering → Delivery

Fluxo de execução técnica completa até handover final.

## Sequência

```
1. hefesto → architecture-decision (ADR)

2. Delegação por especialidade:
   ├─ dedalo (React/TS)
   ├─ pigmento (Tailwind/shadcn)
   ├─ gaia (Supabase)
   ├─ cerbero (Clerk auth)
   └─ ariadne → hermes/lyra (n8n workflows)

3. vesta → gera testes (Vitest unit + Playwright E2E)

4. argos → code review (gate antes de merge)
   └─ 🔴 crítico? → volta pra specialist
   └─ 🟡 alto? → decisão hefesto
   └─ 🟢 low? → merge + tech debt

5. cometa → performance audit

6. temis → qa-gate final
   └─ GO-WITH-CONCERNS exige aprovação explícita do cliente
   └─ NO-GO → volta pra engineering

7. clio → client-docs-bundle

8. mentor → aceita handover
```

## Handoffs obrigatórios

| De | Para | Artefato |
|---|---|---|
| regente | hefesto | `handoff-regente-hefesto-{date}.md` + escopo |
| hefesto | specialists | `handoff-hefesto-{specialist}-{date}.md` + ADR + tasks |
| specialists | argos | `handoff-{specialist}-argos-{date}.md` + PR link |
| argos | temis | `handoff-argos-temis-{date}.md` + review report |
| temis | mentor | `handoff-temis-mentor-{date}.md` + qa-report GO |
| mentor | elo | `handoff-mentor-elo-{date}.md` + baseline de sucesso |

## Gates

- **Gate Argos:** sem 🔴 crítico aberto = pode prosseguir
- **Gate Cometa:** CWV todos verdes = pode prosseguir
- **Gate Têmis:** GO ou GO-WITH-CONCERNS assinado pelo cliente
- **Gate Mentor:** docs completas + training agendado

## Invariantes
- Toda mudança em schema (Gaia) vira migration versionada
- Todo contract inter-área (Hefesto ↔ Minerva se IA envolvida) em ai/contracts/
