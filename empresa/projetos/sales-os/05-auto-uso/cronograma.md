# Cronograma — Eloscope (self-client 01, dogfooding)

**Versão:** 0.1
**Data de emissão:** 2026-04-19
**Kickoff previsto:** 2026-04-20 (segunda-feira)
**Rota:** 2 — produto Sales OS é novo, Eloscope não tem processo comercial estruturado para vendê-lo; material existente é v1.0 do planejamento, falta funil/scripts/cadência
**Pacote "contratado":** Beta (simulado — R$2.500 setup + R$1.500/mês × 3 meses como referência de escopo, não transação financeira)
**Camada de execução (Etapa 7):** 7B — Agente SDR em n8n que prospecta Q2 para Eloscope, com OpenClaw como orquestrador interno (crons, relatório no WhatsApp do Lucas/Victor, escalonamento pra humano)

> **Natureza deste doc:** dogfooding. A Eloscope aplica o Sales OS a si mesma como cliente 01, para (a) validar a metodologia num caso real, (b) produzir os artefatos que vão faltar pra vender os 5 Beta slots (proposta, contrato, roteiro, funil), (c) gerar o primeiro case/depoimento interno antes de entregar ao primeiro Beta externo. Gate interno passa por Lucas + Victor.

---

## 1. Resumo executivo

- **Duração total (kickoff → operar):** 6 semanas (20/04 → 27/05/2026) — **compressão justificada** em 1-2 semanas vs. padrão v1.0 porque (a) dados do "cliente" estão na cabeça do time, (b) artefatos base já existem no repo (`templates/`, `.claude/skills/`, `v1.0`), (c) prazo competitivo: 5 Beta slots a fechar até 19/05 per v1.0
- **Gate interno:** 14/05/2026 (semana 4) — Lucas + Victor aprovam o processo comercial da Eloscope antes de ir para execução
- **Primeiro marco de valor:** diagnóstico interno entregue 23/04 (4 dias) — audit do motor comercial da Eloscope, com mapa do funil atual e gargalos
- **Stack de execução:** n8n (agente SDR prospectando Q2 no WhatsApp/LinkedIn) + OpenClaw (inteligência interna — lê Supabase, dispara crons, alerta via WhatsApp) + Supabase (persistência) + CRM próprio Eloscope (tenant "eloscope-self")
- **Sem dashboard web (7D)** — Lucas/Victor consultam relatório via WhatsApp conversando com OpenClaw, consistente com v1.0

---

## 2. Gantt (Mermaid)

```mermaid
gantt
    title Cronograma Sales OS — Eloscope (self-client dogfooding)
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    excludes weekends

    section Fase 0 — Pré-venda (N/A — self)
    Decisão interna de dogfooding   :done,    f0a, 2026-04-19, 1d
    Kickoff marcado                 :milestone, f0m, 2026-04-20, 0d

    section Dependências
    WABA (Meta Business) Eloscope   :crit,    dep1, 2026-04-20, 10d
    Tenant "eloscope-self" no CRM   :         dep2, 2026-04-20, 2d
    Supabase project (já existe)    :done,    dep3, 2026-04-20, 0d

    section Fase 1 — Diagnóstico
    Audit motor comercial Eloscope  :active,  f1a, 2026-04-20, 4d
    Devolutiva Lucas + Victor       :milestone, f1m, 2026-04-23, 0d

    section Fase 2 — Processo
    Onboarding Caminho A (formulário interno) :  f2a, 2026-04-24, 1d
    Análise Rota 2 (processo-base venda Q2)   :  f3a, 2026-04-27, 5d
    Fluxograma Mermaid do funil Eloscope      :  f4a, 2026-05-04, 3d
    Playbook venda Sales OS para Q2 (2 camadas) : f5a, 2026-05-07, 5d

    section Gate interno
    Reunião aprovação Lucas + Victor :crit,   f6a, 2026-05-14, 1d
    Ata interna + decisão 7B         :milestone, gate, 2026-05-14, 0d

    section Fase 7B — Execução
    Agente SDR n8n (prospecção Q2)  :         f7b1, 2026-05-15, 7d
    Skills OpenClaw (orquestração)  :         f7b2, 2026-05-15, 5d
    Testes com 3 prospects reais    :         f7b3, 2026-05-22, 3d
    Go-live interno                 :milestone, golive, 2026-05-27, 0d

    section Paralelo — Captação Beta
    Venda manual dos 5 Beta slots   :         beta, 2026-04-27, 30d
    Meta: 5 Beta assinados          :milestone, betaend, 2026-05-27, 0d

    section Fase 8 — Operação
    Review semanal interno (Lucas + Victor) : f8a, 2026-05-27, 30d
```

**Notas de leitura:**
- **Duas faixas paralelas em maio:** (a) o time constrói o Sales OS aplicado a si mesmo, (b) o time vende manualmente os 5 Beta slots usando o próprio material sendo produzido. Isso é dogfood radical — o playbook é usado antes mesmo de estar pronto.
- **WABA no caminho crítico.** Sem ela, 7B não vai ao ar dia 27/05. Se deslizar, empurra só o 7B, não o Gate.
- **Etapa 1 em 4 dias** (vs. 7 do padrão) porque o "cliente" (a própria Eloscope) já tem auto-conhecimento. O consultor é o próprio time, entrevistando a si mesmo com honestidade.
- **Etapa 3 em 5 dias úteis** (rota 2 normal é 10d) comprimido porque o benchmark Q2 já foi feito no VPC detalhado de `Planejamento/VPC_Detalhado_Eloscope_5Quadrantes.md`.

---

## 3. Tabela de marcos

| # | Marco | Data alvo | Responsável | Pré-requisito | Evidência |
|---|---|---|---|---|---|
| M0 | Decisão dogfooding | 19/04 | Lucas | v1.0 do planejamento fechada | Este cronograma |
| M1 | Diagnóstico interno entregue | 23/04 | Time Eloscope (auto-audit) | Dados do funil atual (indicação, LinkedIn, network) | Doc auditoria + Loom 60min |
| M2 | Onboarding concluído | 24/04 | Lucas + Victor | Formulário A preenchido pelos sócios | Dataset no CRM próprio Eloscope |
| M3 | Rota 2 definida (processo-base Q2) | 01/05 | Consultor Eloscope (role = Lucas) | M2 + VPC Q2 já existente | Doc "Processo-Base de Venda Sales OS Q2" |
| M4 | Fluxograma aprovado | 06/05 | `playbook-writer` + time | M3 | .mmd commitado no repo + PNG Miro |
| M5 | Playbook entregue | 13/05 | `playbook-writer` | M4 + template base | `docs/clientes/eloscope-self/playbook.md` + templates WhatsApp/LinkedIn |
| **M6** | **GATE interno — Go/No-go** | **14/05** | Lucas + Victor | M4 + M5 | **Ata .md assinada pelos sócios, decisão 7B confirmada** |
| M7 | 7B em produção (agente Eloscope) | 27/05 | Dev Eloscope | M6 + WABA ativa | Agente rodando no WhatsApp da Eloscope prospectando Q2 |
| M7.5 | 5 Beta slots fechados | 27/05 | Comercial Eloscope (manual + 7B) | Prospecção paralela + proposta templada | 5 contratos Clicksign |
| M8 | Operação iniciada | 27/05 | Time Eloscope | M7 | Review semanal interno + relatório WhatsApp |

---

## 4. Dependências de ferramenta

| Dependência | Obrigatório para | Início previsto | Responsável | Status |
|---|---|---|---|---|
| WABA Meta Business Eloscope | 7B | 20/04 (10d úteis) | Lucas/Victor | Pendente — caminho crítico |
| Supabase project | Etapas 2-8 | 20/04 | Dev Eloscope | Já existe |
| CRM próprio tenant "eloscope-self" | Etapa 2+ | 20/04 | Dev Eloscope | Criar tenant + dev multi-tenant se ainda single-tenant |
| VPS/servidor OpenClaw | Etapa 7B | 22/04 | Dev Eloscope | Servidor interno já operacional |
| Notion workspace interno | Etapas 2-8 | Já existe | — | Ok |
| Fireflies capturando Gate interno | Etapa 6 | 14/05 | Integração ativa | Ok |
| Templates mensagem WhatsApp/LinkedIn | Etapa 5 | 07/05 | `playbook-writer` | A criar |
| Proposta comercial templada (3 pacotes) | Venda paralela | 01/05 | Comercial | A criar — bloqueante pros Beta slots |
| Contrato com cláusula anti-software-house | Venda paralela | 01/05 | Jurídico + Lucas | A criar — bloqueante |

**Alertas duros:** proposta + contrato não podem deslizar depois de 01/05, senão a venda paralela dos 5 Beta slots trava e o M7.5 não bate.

---

## 5. Regras de replanejamento aplicadas

1. **WABA não sair até 04/05:** escala 7B sem mexer no Gate — Gate pode acontecer sem WABA, 7B só vai ao ar quando ela estiver ativa.
2. **Rota 2 comprimida.** Se o mapeamento de concorrentes Q2 (Paperclip SaaS, n8n consultorias, agências IA) estiver fraco em 01/05, segurar o fluxograma.
3. **Deslize >3 dias em M1, M6 ou M7.5:** alerta no grupo Eloscope e reunião de replanejamento no mesmo dia.
4. **Se 5 Beta slots não fecharem até 27/05:** revisar playbook e cadência, reabrir Etapa 3 (rota/processo) com dados do que funcionou/não funcionou nos leads reais.

---

## 6. Escopo explícito (anti-software-house aplicado a si mesma)

**Dentro do dogfooding:**
- Tenant novo no CRM próprio (sem dev custom — usa multi-tenant existente)
- Agente SDR em n8n usando template imobiliária/solar que já roda em clientes legados (Maya/Morgana/Maquilana/Jean), customizando só scripts pra venda B2B de automação
- OpenClaw orquestrando crons e relatório no WhatsApp — skill "self-reporting-eloscope" criada uma vez, pode virar template pra Beta

**Fora do dogfooding (vira projeto separado se vier demanda):**
- Dashboard web custom pra vendas — não se justifica (Lucas/Victor são 2 usuários, relatório via WhatsApp resolve)
- Integração com LinkedIn API paga (Sales Navigator) — custo e manutenção não justificam para 5 Beta slots
- Sistema de scoring automático na prospecção (feature v0.2) — OpenClaw recebe skill simples na Etapa 8 se aparecer padrão útil

**Princípio anti-software-house aplicado internamente também:** se durante a construção do motor próprio surgir demanda "quero dev X só pra Eloscope", antes de fazer perguntar — isso aparece em 3+ clientes Beta? Se sim, feature multi-tenant. Se não, deixa pra depois.

---

## 7. Meta — o que este exercício produz para o Sales OS

Ao fim deste cronograma, além do motor comercial da Eloscope, o repo ganha:

- `docs/clientes/eloscope-self/diagnostico.md` — modelo de doc de diagnóstico (template para Beta externo)
- `docs/clientes/eloscope-self/playbook.md` — primeiro playbook real, template para Beta externo
- `docs/clientes/eloscope-self/ata-gate.md` — modelo de ata do Gate em Markdown
- Skill OpenClaw "self-reporting" — primeira skill pós-v1.0 que pode virar template
- Proposta comercial templada (3 pacotes) — usada nos 5 Beta slots
- Contrato com cláusula anti-software-house — mesmo uso
- Template n8n do agente SDR Eloscope — primeira customização do template legado para Q2 B2B

Cada um desses artefatos vale mais do que o cronograma em si. Dogfood é sobre os subprodutos.

---

## 8. Validação pendente

Rodar agora:

```
use o schedule-validator para checar docs/clientes/eloscope-self/cronograma.md
```

Veredito esperado: **APROVADO COM RESSALVA** — a compressão de 6 semanas vs. 7-8 do padrão deve aparecer como risco soft justificado, não violação dura. Se aparecer violação dura, corrigir antes de 20/04 (kickoff).
