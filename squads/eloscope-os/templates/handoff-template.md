---
type: handoff
from: {from-agent}
to: {to-agent}
date: {YYYY-MM-DD}
project: {projeto-slug}
payload_type: {ex: discovery-report | proposal-brief | adr | qa-report}
---

# Handoff {from} → {to} — {data}

## Contexto
{O que aconteceu até aqui em 3-5 linhas. Qual gatilho deste handoff.}

## Payload
- **Tipo:** {discovery-report | adr | qa-report | ...}
- **Path:** `{caminho/do/artefato.md}`
- **Versão:** {se aplicável}

## Critérios de aceite
- [ ] {Critério 1 mensurável}
- [ ] {Critério 2 mensurável}
- [ ] {Critério 3 mensurável}

## Prazo
{data limite ou "best effort"}

## Dependências
- {bloqueios externos, contratos, inputs faltantes}

## Handoff loop
- **Quando retornar:** {condição que dispara resposta do receptor}
- **Formato de retorno:** {artefato esperado de volta}

## Observações
{notas livres — o mínimo possível}

---
*Gerado via `@{from}` — siga o invariante: Handoffs são SEMPRE artefato, nunca conversa livre.*
