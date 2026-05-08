---
tipo: processo
status: ativo
tags: [sales-os, fase-1, kickoff, diagnostico]
atualizado: 2026-05-06
---

# Fase 1 — Kickoff & Diagnóstico

**Trigger:** setup pago confirmado + contrato assinado.
**Saída:** relatório de diagnóstico entregue + aprovado pelo cliente.
**Donos:** Lucas (SOP checklist + coordenação) · Victor (conduz reunião + redige relatório).
**Duração:** 1 semana (3 dias se cliente já tem dados organizados).

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Desenhar formulário de onboarding | `onboarding-designer` |
| Analisar transcrição da reunião | `diagnostic-analyst` |
| Skills ativas | `q2-market-knowledge` · `spin-methodology` |

---

## Dia 0 — Checklist pós-fechamento (Lucas)

- [ ] Contrato assinado e arquivado
- [ ] Setup pago e confirmado
- [ ] Recorrência configurada (manual ou automática)
- [ ] WhatsApp do cliente salvo na agenda
- [ ] Victor e Hugo avisados: nome, segmento, plano, data de início
- [ ] Criar pasta do cliente → `docs/clientes/{slug}/` a partir do template
- [ ] Atualizar [[02-comercial/pipeline]] (status → `ativo`)

---

## Dias 0–1 — Onboarding

**Lucas:**
- [ ] Enviar formulário de onboarding ao cliente (prazo 48h para preencher)
- [ ] Enviar guia técnico → [[03-entrega/onboarding-tecnico-cliente]]
- [ ] Fazer follow-up se não preencheu em 24h

**Caminho A — cliente organizado:** formulário estruturado ~25 campos.
**Caminho B — cliente bagunçado:** agente OpenClaw no grupo WhatsApp puxa dado por dado conversando.

→ Rodar `onboarding-designer` com: vertical + pacote + especificidades do cliente.

---

## Dias 1–2 — Quick Win (entregar antes da reunião)
> Conceito FMS: dar ganho rápido em 7–15 dias antes da infra completa.

- [ ] Hugo: verificar se o número WhatsApp do cliente já tem SLA crítico (>30 min = problema)
- [ ] Se sim → configurar resposta automática básica como entrega imediata
- [ ] Victor: identificar leads mortos na base (>30 dias sem contato) como candidatos a reativação

---

## Dias 2–3 — Reunião de Diagnóstico (~90 min)

**Victor conduz. Lucas presente.**

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 — Operação | Processo lead→fechamento, canais | 20 min |
| 2 — CRM | Qual CRM? Funil, histórico. Sem CRM → mapear manual | 15 min |
| 3 — Base | Leads não fechados, potencial de reativação | 15 min |
| 4 — Dores | Onde perde mais, objeções do time, reclamações | 20 min |
| 5 — Captação | Canais de aquisição, tráfego pago | 10 min |
| Encerramento | Próximos passos, cronograma | 10 min |

**Anotar obrigatório:**
- Volume leads/mês · taxa de conversão estimada · tamanho base parada
- CRM em uso · número de vendedores · principais objeções · canais de captação

---

## Dias 3–5 — Relatório de Diagnóstico

**Victor:**
- [ ] Rodar `diagnostic-analyst` na transcrição
- [ ] Redigir relatório: resumo executivo · mapa do processo atual · gargalos por impacto · análise da base · plano de prioridades para Fase 2
- [ ] Revisar antes de enviar

**Lucas:**
- [ ] Encaminhar relatório ao cliente
- [ ] Confirmar recebimento e coletar feedback

**Relatório aprovado pelo cliente → dispara Fase 2.**
