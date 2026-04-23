---
workflow: ai-feature-launch
areas_involved: [ai, engineering, command]
trigger: feature IA solicitada no escopo
ends_when: feature em prod com evals passando
---

# Workflow — AI Feature Launch

Fluxo específico pra features com IA. Nunca sobe sem Minos + Pallas.

## Sequência

```
1. minerva → ai-architecture
   ├─ decide padrão (single | chain | agent-loop | multi-agent)
   ├─ escolhe stack (LangChain | LangGraph | n8n | API)
   └─ gera ai-contract(s)

2. Paralelo:
   ├─ mnemosine → memory-spec (se RAG)
   ├─ logos → prompt inicial + eval cases
   └─ pallas → guardrails-policy (se PII)

3. hefesto ↔ minerva → contrato de integração versionado

4. engineering implementa (specialists por stack)

5. logos → prompt-versioning (iteração + eval)

6. minos → eval-run
   └─ PASS = libera pra staging
   └─ FAIL = volta pra logos

7. pallas → review adversarial final

8. Deploy em staging → eval de produção simulada

9. minos → eval-run (prod-like)
   └─ PASS = libera pra prod
   └─ CONCERNS = decisão hefesto + minerva
   └─ FAIL = blocker

10. regente → comunicação cliente + monitoring ativo
```

## Handoffs obrigatórios

| De | Para | Artefato |
|---|---|---|
| regente | minerva | `handoff-regente-minerva-{date}.md` + feature spec |
| minerva | logos/mnemosine/pallas | `handoff-minerva-{agent}-{date}.md` + ai-architecture doc |
| minerva | hefesto | `handoff-minerva-hefesto-{date}.md` + ai-contract versionado |
| logos | minos | `handoff-logos-minos-{date}.md` + prompt vX + eval suite |
| minos | [promotion-gate] | `handoff-minos-{gate}-{date}.md` + gate decision |

## Gates não-negociáveis

1. **Pre-prod:** Minos retorna PASS (hallucination < 2%, tone > 95%, refusal > 99%)
2. **LGPD:** Pallas review aprovado (PII filtrada, base legal, retenção)
3. **Contract:** ai-contract versionado e aceito pelos dois lados

## Monitoring em prod

- Alertas: hallucination rate subindo, latência p95 fora do SLA, guardrail triggering
- Review mensal: Minos roda eval completa de regressão
- Feedback loop: bugs em prod → case adicional em eval suite
