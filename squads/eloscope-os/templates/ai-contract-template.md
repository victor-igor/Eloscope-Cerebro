---
type: ai-contract
name: {contract-name}
version: 1.0.0
date: {YYYY-MM-DD}
producer: {agent-ou-sistema-produtor}
consumer: {agent-ou-sistema-consumidor}
status: draft  # draft | active | deprecated
---

# AI Contract — {Nome}

> Contratos de integração entre agents/sistemas são **versionados**. Mudança de schema = version bump + migration documentada.

## Partes
- **Producer:** {quem gera o output}
- **Consumer:** {quem consome}
- **Intermediário:** {fila, n8n node, webhook — se houver}

## Schema de entrada (producer output)
```json
{
  "field_1": "type — descrição",
  "field_2": "type — descrição",
  "metadata": {
    "version": "1.0.0",
    "timestamp": "ISO-8601",
    "correlation_id": "uuid"
  }
}
```

## Schema de saída (consumer result)
```json
{
  "status": "success | error | partial",
  "result": {},
  "error": { "code": "", "message": "" }
}
```

## SLAs
| Dimensão | Compromisso |
|---|---|
| Latência p50 | {ms} |
| Latência p99 | {ms} |
| Disponibilidade | {%} |
| Throughput | {req/s} |
| Idempotência | {sim/não — via correlation_id} |

## Error handling
- **Retryable:** {códigos que o consumer pode re-tentar}
- **Non-retryable:** {códigos que exigem escalation}
- **Timeout:** {ms antes de falhar}
- **Circuit breaker:** {thresholds}

## Evals obrigatórias (Minos)
- [ ] Taxa de hallucination < {X}%
- [ ] Tone compliance > {Y}%
- [ ] Refusal correto em casos adversariais
- [ ] Latência dentro do SLA em 95% dos casos

## Guardrails (Pallas)
- [ ] PII filtrada na entrada e saída
- [ ] Jailbreak detection ativo
- [ ] Escalation rule definida
- [ ] Log de auditoria LGPD

## Versioning policy
- **Minor (1.x.0):** campos adicionais backward-compatible
- **Major (X.0.0):** breaking change — consumer precisa migrar antes do producer publicar

## Histórico
| Versão | Data | Mudança | Autor |
|---|---|---|---|
| 1.0.0 | {data} | Inicial | {agent} |
