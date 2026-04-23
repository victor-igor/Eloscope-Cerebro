---
workflow: client-handover
areas_involved: [delivery, success]
trigger: projeto aprovado em QA gate (Têmis GO)
ends_when: cliente em produção + CS assumiu
---

# Workflow — Client Handover

Transição de execução pro cliente + CS. Momento crítico — é onde churn começa se mal feito.

## Sequência

```
1. temis → qa-gate (já rodou no workflow engineering-delivery)

2. Paralelo:
   ├─ clio → client-docs-bundle (manual, runbook, FAQ, videos)
   └─ mentor → cronograma de treinamento + go-live

3. Treinamento:
   ├─ usuários finais (1-2 sessões)
   └─ admins (1 sessão profunda)

4. Go-live checklist:
   ├─ dados migrados
   ├─ DNS/domínio apontado
   ├─ monitoring ativo
   ├─ rollback plan testado
   └─ cliente treinado

5. mentor → aceita sign-off do cliente

6. mentor → handoff final pra elo
   └─ baseline de sucesso + aha moment definido + milestones 30/60/90

7. elo → assume CS
   ├─ check-in dia 7
   ├─ check-in dia 30 (health-check)
   ├─ check-in dia 60
   └─ QBR dia 90
```

## Handoffs obrigatórios

| De | Para | Artefato |
|---|---|---|
| temis | mentor | `handoff-temis-mentor-{date}.md` + qa-report GO |
| clio | mentor | `handoff-clio-mentor-{date}.md` + doc bundle |
| mentor | cliente | sign-off document assinado |
| mentor | elo | `handoff-mentor-elo-{date}.md` + baseline + milestones |

## Gates

- **Gate 1 (docs):** Manual + runbook + FAQ entregues e revisados
- **Gate 2 (treinamento):** Atestado pelo cliente que time sabe usar
- **Gate 3 (go-live):** Checklist 100% completo + rollback testado
- **Gate 4 (sign-off):** Cliente assinou aceite formal

## Aha moment
Definido no kickoff, validado aqui. Se em 30 dias pós go-live o cliente não atingiu aha moment, Elo escala pra mentor + time de execução pra intervenção.

## Feedback loop
30 dias após go-live, Elo avalia se cliente é case study candidate → handoff pra Andrômeda coletar métricas e quote.
