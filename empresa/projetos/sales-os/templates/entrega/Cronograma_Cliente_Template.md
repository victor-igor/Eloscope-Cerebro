# Cronograma — [Nome do Cliente]

**Versão:** 0.1
**Data de emissão:** [YYYY-MM-DD]
**Kickoff previsto:** [YYYY-MM-DD]
**Rota:** [1 — cliente tem processo / 2 — cliente não tem processo]
**Pacote contratado:** [Lean / Beta / Real / Modular]
**Camada de execução (Etapa 7):** [7A / 7B / 7C / 7D]

---

## 1. Resumo executivo

- **Duração total (kickoff → operar):** [5-8 semanas conforme rota e pacote]
- **Gate formal:** semana [N] — decisão go/no-go antes de qualquer automação
- **Primeiro marco de valor ao cliente:** [diagnóstico entregue / playbook aprovado / agente em produção]
- **Stack de execução travada:** [preencher — ex.: OpenClaw + Paperclip + Supabase + WhatsApp Meta Business API]

---

## 2. Gantt (Mermaid)

> Fonte editável. Ajustar `[YYYY-MM-DD]` e durações por cliente. Em rota 2, somar +1 a +2 semanas nas Etapas 3 e 4.

```mermaid
gantt
    title Cronograma Sales OS — [Nome do Cliente]
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    excludes weekends

    section Fase 0 — Pré-venda
    Discovery + proposta            :done,    f0a, [YYYY-MM-DD], 7d
    Contrato assinado               :milestone, f0m, after f0a, 0d

    section Fase 1 — Diagnóstico
    Coleta e auditoria              :active,  f1a, after f0m, 5d
    Devolutiva (60min)              :milestone, f1m, after f1a, 0d

    section Fase 2 — Processo
    Onboarding (A formulário / B OpenClaw):  f2a, after f1m, 5d
    Análise e rota                  :         f3a, after f2a, 5d
    Fluxograma Mermaid              :         f4a, after f3a, 3d
    Playbook SPIN                   :         f5a, after f4a, 5d

    section Gate
    Reunião de aprovação (2h)       :crit,    f6a, after f5a, 1d
    Decisão formal (go/no-go)       :milestone, gate, after f6a, 0d

    section Fase 7 — Execução
    7A Treinamento (Lean)           :         f7a, after gate, 3d
    7B Agente SDR (Paperclip+OpenClaw) :      f7b, after gate, 10d
    7C Integração stack cliente (n8n) :       f7c, after gate, 10d
    7D Dashboard Next.js+Supabase   :         f7d, after f7b, 14d

    section Fase 8 — Operação
    Review mensal recorrente        :         f8a, after f7d, 30d
```

**Como usar o gantt acima:**
- Manter apenas a linha de 7A/7B/7C/7D que corresponde ao pacote contratado. Apagar as demais.
- Se rota 2, aumentar `f3a` para 10d e `f4a` para 5d.
- Se cliente não tiver Meta Business API provisionada, adicionar barra paralela "Provisionamento WABA" começando junto com `f1a` (leva 3-10 dias úteis).

---

## 3. Tabela de marcos

| # | Marco | Semana alvo | Responsável | Pré-requisito | Evidência |
|---|---|---|---|---|---|
| M0 | Contrato assinado | S0 | Comercial Eloscope | Proposta aceita | PDF Clicksign/D4Sign |
| M1 | Diagnóstico entregue | S1 | `diagnostic-analyst` + lead consultor | Acesso Meta Ads/Google Ads/CRM do cliente | Doc auditoria + ata devolutiva |
| M2 | Onboarding concluído | S2 | `onboarding-designer` + cliente | Formulário A preenchido OU grupo WhatsApp B encerrado | Dataset staging (Supabase/Sheets) |
| M3 | Rota definida | S2-S3 | Consultor Eloscope | Dataset M2 | Doc "Mapa do Estado Atual" ou "Processo-Base" |
| M4 | Fluxograma aprovado | S3-S4 | `playbook-writer` (diagrama) | M3 | .mmd commitado + PNG |
| M5 | Playbook entregue | S4-S5 | `playbook-writer` | M4 | Playbook.md + templates de mensagem |
| **M6** | **GATE — Go/No-go** | S5 | Cliente + Eloscope | M4 + M5 | **Ata assinada + escolha 7A/B/C/D** |
| M7 | Execução entregue | S6-S8 | Dev Eloscope | M6 = go | Agente em produção / dashboard no ar / treinamento gravado |
| M8 | Operação iniciada | S8+ | Operação Eloscope | M7 | Review mensal agendado + relatório semanal ativo |

---

## 4. Dependências de ferramenta (pré-requisitos técnicos)

Checklist que precisa estar verde **antes** de cada fase. O `schedule-validator` usa essa tabela pra bloquear avanço.

| Dependência | Obrigatório para | Prazo para provisionar | Responsável |
|---|---|---|---|
| Acesso leitura Meta Ads Manager | Etapa 1 | 1 dia | Cliente |
| Acesso leitura Google Ads | Etapa 1 (se aplicável) | 1 dia | Cliente |
| Export CRM atual (HubSpot/Pipedrive/RD/Kommo) | Etapa 1 | 2 dias | Cliente |
| Meta Business API (WABA) provisionada | Etapa 7B, 7D | 3-10 dias úteis | Cliente (Eloscope acompanha) |
| VPS/servidor para OpenClaw | Etapa 7B, 7D | 2 dias | Eloscope ou Cliente |
| Supabase project criado | Etapa 7B, 7D | 1 dia | Eloscope |
| Vercel project + Clerk app | Etapa 7D | 1 dia | Eloscope |
| Conexão n8n existente do cliente | Etapa 7C | 2 dias | Cliente |
| Notion workspace compartilhado | Etapas 2-8 | 1 dia | Eloscope |
| Fireflies/Fathom capturando reuniões | Etapas 6, 8 | ativo | Eloscope |

---

## 5. Regras de replanejamento

1. **Gate não move pra direita sem ata.** Se a ata não sai em 5 dias úteis após a reunião (Etapa 6), o cronograma pausa e o SLA de entrega M7 reinicia quando a ata for assinada.
2. **Rota 2 acrescenta 1-2 semanas** automaticamente na Fase 2. Não comprimir.
3. **Falta de acesso a dado do cliente** (CRM, ads) trava a Etapa 1 — não avançar com suposição.
4. **WABA não provisionada** bloqueia 7B/7D mesmo que resto esteja pronto. Se cliente contratou 7B/7D, iniciar provisionamento na semana do contrato (S0).
5. **Todo deslize >3 dias** em marco crítico (M1, M6, M7) gera aviso formal ao cliente com nova data e motivo. Não empurrar deslize em silêncio.

---

## 6. Campos parametrizáveis (preencher por cliente)

- `[Nome do Cliente]`
- Datas absolutas no gantt (seção 2)
- Rota (1 ou 2) — remove/ajusta barras do gantt
- Pacote (Lean / Beta / Real) — remove linhas 7A-D não contratadas
- Vertical (imobiliária / solar / clínica / consultoria / educação) — alimenta estimativas específicas via `q2-market-knowledge`
- Canais ativos do cliente (inbound Meta / Google / outbound / referência) — afeta Etapa 3 e Playbook
- Stack alvo de 7B/7C (Paperclip+OpenClaw default; n8n se cliente legado)
- Camada preditiva (v0.2) — marcar como "roadmap futuro", não entra no setup

---

## 7. Validação (rodar antes de mandar pro cliente)

```
use o schedule-validator para checar este cronograma contra as regras
operacionais do Sales OS e apontar riscos.
```

O validador devolve: (a) violações duras (sem Gate, stack incoerente, prazo fora da faixa), (b) riscos soft (dependências não provisionadas a tempo), (c) sugestões de ajuste.

---

**FIM do template.** Salvar cada instância em `docs/clientes/[nome]/cronograma.md`.
