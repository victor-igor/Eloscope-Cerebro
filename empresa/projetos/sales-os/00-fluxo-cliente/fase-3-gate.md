---
tipo: processo
status: ativo
tags: [sales-os, fase-3, gate, aprovacao]
atualizado: 2026-05-06
---

# Fase 3 — Gate

**Trigger:** fluxograma + playbook prontos e validados internamente.
**Saída:** Go / No-Go formal + cliente escolhe pacote de execução.
**Donos:** Victor (apresenta) · Lucas (facilita + fecha decisão de pacote).
**Duração:** 2–5 dias (incluindo possível iteração).

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Checar conteúdo do processo | `gate-reviewer` ¹ |
| Checar plano de execução | `schedule-validator` |

---

## Reunião de Gate (~2h)

**Victor apresenta. Lucas facilita.**

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Recapitular diagnóstico — os gargalos encontrados | 20 min |
| 2 | Apresentar fluxograma do funil | 30 min |
| 3 | Apresentar playbook — scripts, cadências, KPIs | 40 min |
| 4 | Decisão de pacote de execução | 20 min |
| 5 | Próximos passos + cronograma | 10 min |

---

## Pacotes de execução (decisão nesta reunião)

| Pacote | Entrega | Prazo |
|--------|---------|-------|
| **7A — Lean** | Docs + treinamento gravado (2h) | 3–5 dias |
| **7B — SDR** | Agente WhatsApp (Openclaw + n8n) | 1–2 semanas |
| **7C — Integração** | Agente dentro do CRM do cliente | 1–2 semanas |
| **7D — Completo** | 7B + dashboard Next.js/Supabase | 2–4 semanas |

---

## Pós-reunião

- [ ] Victor documenta ajustes pedidos (se houver)
- [ ] Ajustes pequenos → implementar em 48h, Go confirmado
- [ ] Ajustes grandes → voltar Fase 2, max 1 iteração

**Go confirmado → dispara Fase 4 imediatamente.**

---

## Regra do Gate

Se o cliente não aprova ou não tem clareza, não avança para Fase 4.

> Eloscope não instala infraestrutura em cima de processo não validado. O Gate é a garantia do resultado — é o que diferencia de software house.

Saídas possíveis:
- **GO** → Fase 4 com pacote escolhido
- **REVISÃO** → volta Fase 2 com lista de ajustes (max 1x)
- **RESCISÃO** → conforme cláusula do contrato (multa pré-definida)

---

¹ Agente candidato — ainda não implementado.
