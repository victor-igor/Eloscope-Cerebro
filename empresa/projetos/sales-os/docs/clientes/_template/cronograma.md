---
tipo: artefato
status: rascunho
tags: [sales-os, cronograma, cliente]
cliente: {cliente-slug}
rota: {1 | 2}
pacote: {7A | 7B | 7C | 7D}
kickoff: YYYY-MM-DD
atualizado: YYYY-MM-DD
---

# Cronograma — {Nome do Cliente}

> Validar com `schedule-validator` antes de enviar ao cliente ou travar como plano interno.

**Kickoff:** YYYY-MM-DD
**Rota:** 1 (tem processo) / 2 (processo do zero)
**Pacote:** 7A / 7B / 7C / 7D

---

## Gantt

```mermaid
gantt
    title Cronograma Sales OS — {Nome do Cliente}
    dateFormat YYYY-MM-DD
    axisFormat %d/%m

    section Fase 1 — Diagnóstico
    Formulário de onboarding       :f1a, YYYY-MM-DD, 2d
    Reunião de diagnóstico         :f1b, after f1a, 1d
    Relatório de diagnóstico       :f1c, after f1b, 3d
    Aprovação pelo cliente         :milestone, f1m, after f1c, 0d

    section Fase 2 — Processo
    Análise de rota                :f2a, after f1m, 5d
    Fluxograma Mermaid             :f2b, after f2a, 3d
    Playbook de vendas             :f2c, after f2a, 5d

    section Fase 3 — Gate
    Reunião de Gate                :crit, f3a, after f2c, 1d
    Ajustes pós-Gate               :f3b, after f3a, 2d
    GO confirmado                  :milestone, gate, after f3b, 0d

    section Fase 4 — Execução
    Setup técnico (Hugo)           :f4a, after gate, 7d
    Scripts + cadências (Victor)   :f4b, after gate, 5d
    Treinamento time               :f4c, after f4a, 2d
    Go-live                        :milestone, golive, after f4c, 0d

    section Fase 5 — Acompanhamento
    Marco Dia 30                   :milestone, m30, after golive, 20d
    Marco Dia 60                   :milestone, m60, after m30, 30d
```

---

## Marcos

| # | Marco | Data alvo | Responsável | Evidência |
|---|-------|----------|------------|-----------|
| M1 | Diagnóstico entregue | YYYY-MM-DD | Victor | Doc diagnóstico + Fathom |
| M2 | Onboarding concluído | YYYY-MM-DD | Lucas | Dataset no CRM |
| M3 | Fluxograma aprovado | YYYY-MM-DD | Victor | .mmd commitado |
| M4 | Playbook entregue | YYYY-MM-DD | Victor | `docs/clientes/{slug}/playbook.md` |
| **M5** | **GATE — Go/No-Go** | **YYYY-MM-DD** | **Lucas + Victor** | **Ata de Gate assinada** |
| M6 | Go-live | YYYY-MM-DD | Hugo | Sistemas rodando + time usando |
| M7 | Marco Dia 30 | YYYY-MM-DD | Lucas | NPS + baseline KPIs |
| M8 | Marco Dia 60 | YYYY-MM-DD | Victor | Comparativo + check garantia |

---

## Dependências críticas

| Dependência | Bloqueante para | Responsável | Status |
|------------|----------------|------------|--------|
| API Key do cliente | Fase 4 (7B/7D) | Cliente | ⏳ |
| WhatsApp Business ativo | Fase 4 (7B/7D) | Cliente | ⏳ |
| Acesso ao CRM | Fase 1 (diagnóstico) | Cliente | ⏳ |
| VPS / servidor | Fase 4 (7B) | Hugo | ⏳ |
