---
tipo: meeting-notes
empresa: Agência Bravo
data: 2026-04-30
participantes: [Lucas, Victor, Gustavo]
fonte: Fathom
recording_id: 142594826
url: https://fathom.video/calls/657369535
tags: [cliente/bravo, reuniao, skills, validacao]
---

# 2026-04-30 — Definição Skills (Bravo)

> Call decisiva: Gustavo aprovou o reframe das 3 skills pós-discovery e abriu a sequência de coleta de acessos.

**Fonte:** [Fathom 657369535](https://fathom.video/calls/657369535) (recording_id `142594826`)

---

## Objetivo da reunião
Definir o escopo inicial do projeto de automação IA para a Bravo Agency — validar com Gustavo as 3 skills propostas pós-discovery e alinhar próximos passos técnicos.

---

## Decisões (key takeaways)

1. **Foco inicial:** automatizar 3 checkpoints manuais que consomem tempo do dono:
   - **Skill 1 — Follow-up de aprovação** de conteúdo do cliente
   - **Skill 2 — Agendamento no Meta Business Suite**
   - **Skill 3 — Relatório/Análise mensal**
2. **Por quê estas 3:** consomem tempo do Gustavo (único comercial) e são processuais — alto ROI imediato.
3. **Estratégia de implementação:** começar com ferramentas simples (Google Sheets, ClickUp) para validar o fluxo **antes** de construir interface customizada.
4. **Próximos passos:** Gustavo fornece acesso Hostinger → Eloscope configura ambiente → desenvolvimento começa.

---

## Skill 1 — Follow-up de Aprovação

| Item | Detalhe |
|------|---------|
| Goal | Automatizar lembretes ao cliente final para aprovação de conteúdo |
| Passo 1 | **Centralizar aprovações** — sair do WhatsApp solto, entrar em plataforma estruturada (Google Sheets ou ClickUp) |
| Passo 2 | **Lembretes automáticos** — IA monitora plataforma e dispara WhatsApp aos clientes com aprovação pendente |
| Passo 3 | **Captura de feedback** — cliente aprova/rejeita/comenta na plataforma → audit trail |
| Visão futura | Interface customizada estilo "Tinder swipe" (fase 2) |

---

## Skill 2 — Agendamento Meta Business Suite

| Item | Detalhe |
|------|---------|
| Goal | Automatizar agendamento de conteúdo após aprovação |
| Passo 1 | **Integração** — IA conecta a Meta Business Suite de cada cliente via API Graph |
| Passo 2 | **Agendamento automático** — após aprovação na Skill 1, IA agenda na data/hora definida |
| Escopo inicial | Meta (Instagram + Facebook) |
| Expansão futura | TikTok + WordPress (fase 2) |

---

## Skill 3 — Relatório Mensal & Análise

| Item | Detalhe |
|------|---------|
| Goal | Automatizar coleta e análise de performance |
| Passo 1 | **Captura de dados** — IA puxa métricas direto da Meta API |
| Passo 2 | **Resumos automáticos** — IA envia performance summaries via WhatsApp ao cliente (frequência maior que mensal) |
| Passo 3 | **Strategic insights** — dados servem de base para skills futuras (sugestão de novos criativos baseada em performance) |

---

## Roadmap pós-3-skills (Fase 2 e 3)

### Fase 2 — Planejamento gerado por IA
- IA usa dados da Skill 3 para gerar planos mensais de conteúdo
- Time revisa e refina (não substitui pensamento estratégico)

### Fase 3 — Produção criativa assistida
- IA gera conceitos iniciais (Content Machine)
- Sugere stock images, reduz carga do designer
- **Vídeo:** automação inicial em tarefas simples (cortar dead air, gerar variações A/B para teste)

---

## Análise de custo discutida

- **Estáticos:** R$310/h estimado inicial **esclarecido** — reflete custo total do processo criativo (planejamento + copy + design + revisões) para 8 peças/cliente, **não só** tempo de design
- **Vídeo:** alto custo por unidade mas custo total mensal menor (2 vídeos vs 8 estáticos)
- Material interno: [[../projeto/2-pos-discovery/metodologia-custo-hora]]

---

## Next Steps (extraídos da call)

| Quem | O quê | Prazo |
|------|-------|-------|
| **Gustavo** | Fornecer credenciais de acesso à Hostinger | 09/05 |
| **Gustavo** | Escolher nome do assistente IA | 09/05 |
| **Eloscope** | Configurar ambiente Hostinger | após receber acesso |
| **Eloscope** | Solicitar todas as API keys e acessos das contas dos clientes | 09–16/05 |
| **Eloscope** | Enviar documento detalhado de análise de custos pro Gustavo | 02/05 ✅ |

---

## Pendências abertas pós-call

- Ver [[../operacional/acessos]] — checklist completo (16 itens)
- Ver [[../operacional/handoff-coleta-acessos]] — sequência semanal 05–09/05
- Cronometrar análise mensal real (1 cliente Bravo) — Lucas + Gustavo, no início de junho

---

*Resumo gerado a partir do summary Fathom — 2026-05-03.*
