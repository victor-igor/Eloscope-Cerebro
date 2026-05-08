---
tipo: operacional
empresa: Morgana Sales Estética
tags: [cliente/morgana-sales, handoff, ativacao]
---

# Handoff — Ativação Morgana Sales (semana 04–08/05)

> Estado atual da operação Morgana, o que aconteceu, onde estamos e para onde vamos.
> Snapshot de 2026-05-04.

---

## Onde estamos

A primeira campanha de ativação de leads começou na **semana de 29/04 → 03/05**, usando o número `5517981542833` (que era da Campos Joia — Matheus migrou para Morgana enquanto a Campos Joia espera as fotos novas para retomar).

O número **bloqueou com frequência** durante a campanha — sinal claro de que estava sub-aquecido após a migração de finalidade. Decidimos:

1. Pausar a campanha no `5517981542833`
2. Reaquecer o `5517981542833` (chip principal)
3. Aquecer 2 chips novos que Matheus entregou no treinamento de 28/04 (`5517981267711` + `5517981267748`)
4. Só retomar disparos quando os 3 chips estiverem saudáveis

Em paralelo, o sistema `elo.morgana.com.br` está em produção, treinamento da Dra. Morgana foi feito presencialmente em 28/04, e ela operou sem fricção.

---

## Onde queremos chegar (estado-alvo até fim de semana 11–15/05)

| # | Componente | Estado-alvo |
|---|-----------|-------------|
| 1 | 3 chips reaquecidos | Validados saudáveis em 08/05 |
| 2 | Ativação base retomada | Disparo gradual (10 → 30 → 50/dia) com copy aprovada |
| 3 | Instagram + Facebook no Chatwoot | Plugados, recebendo DMs e mensagens |
| 4 | API Oficial WhatsApp (WABA) | Aprovada e plugada no Chatwoot |
| 5 | Agente SDR (Morg) no ar | Recebendo leads de campanha → qualifica → transfere para número principal da clínica |
| 6 | Cadência de Follow-up ativa | 5 toques automáticos (D+0/+3/+7/+14/+30) |

---

## Sequência recomendada (próximos 7 dias)

| Dia | Ação | Dono |
|-----|------|------|
| 04–08/05 | Continuar reaquecimento dos 3 chips (humanizar conversas) | Lucas |
| 05/05 | Conectar Instagram + Facebook no Chatwoot | Hugo |
| 05–06/05 | Iniciar processo WABA (API Oficial) — submissão ao Meta | Hugo |
| 06–07/05 | Deploy Agente SDR (Morg) em ambiente de teste | Hugo + Lucas |
| 08/05 | Checklist final de saúde dos chips — go/no-go | Lucas |
| ✅ 04/05 | ~~Definir número principal~~ — confirmado por Matheus: **+55 17 99633-2788** | — |
| 09–11/05 | Testar Agente SDR com 5 leads internos | Lucas |
| 12/05 | Retomar ativação base — fase 1 (10 msg/dia por chip) | Lucas |
| 13/05 | Ativar cadência de Follow-up | Hugo |
| 14–15/05 | Subir volume gradual + monitorar | Lucas |

---

## Decisões fechadas (referência)

- **Chatwoot fora do uso pelas atendentes** (28/04) — atendentes seguem em WhatsApp comum nos chips. Chatwoot só para a IA.
- **API Oficial WhatsApp só para o Agente SDR** — não substitui as atendentes. Fluxo: lead chega no número WABA → IA Morg responde e qualifica → **dispara alerta no Grupo de Notificação da Morgana** (atendentes vêem) → atendente humana puxa o lead no WhatsApp comum (número principal da clínica).
- **WABA precisa de Business Manager da Morgana** — duas vias: (a) Marketing da Morgana cria o app no BM e relaciona, ou (b) Eloscope recebe acesso admin no BM e cria. Decisão pendente.
- **Sem comissão individual / meta coletiva** — modelo de incentivo já confirmado.
- **`5517981542833` é da Morgana** enquanto Campos Joia aguarda novas fotos.
- **Número principal da clínica = +55 17 99633-2788** — todos os leads qualificados pela IA são roteados para esse número (confirmado por Matheus 04/05).
- **Lista do Matheus já importada** no sistema (04/05) — pronta para puxar na ativação quando chips liberarem.

---

## Riscos / pontos de atenção

| Risco | Mitigação |
|-------|-----------|
| `5517981542833` bloquear de novo após reaquecimento | Iniciar disparo em volume baixíssimo (10/dia) e subir gradualmente |
| WABA demorar a aprovar | Iniciar processo já em 05/05 — Meta pode levar 5+ dias úteis |
| Lead qualificado pela IA cair em fila ociosa | Definir com clareza qual número recebe + treinar atendente |
| Conflito entre IA e atendente humana no mesmo lead | Regra de transferência: a partir do handoff, IA para de responder |

---

## Referências

- [[chips-aquecimento]] — protocolo dos 3 chips
- [[pendencias-tecnicas]] — backlog completo + ClickUp
- [[../comercial/agente-morg-mensagens-ativacao]] — copy aprovada
- [[../meeting-notes/2026-04-28-treinamento-presencial]] — treinamento Morgana

---

*Atualizado: 2026-05-04*
