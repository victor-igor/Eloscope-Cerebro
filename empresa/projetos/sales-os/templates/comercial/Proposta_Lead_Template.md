# Proposta Comercial 6OS — {nome-do-cliente}

> **Front-door da venda.** Documento enviado ao cliente (exportar em PDF ou link Notion/Google Doc). Máximo 2 páginas. Toda seção linka pro template-pai que sustenta o conteúdo — manutenção central, não copy-paste.

---

**Preparada por:** Lucas Negreiro — Eloscope
**Data:** {YYYY-MM-DD}
**Validade:** 15 dias
**Contato:** eloscope.coo@gmail.com · WhatsApp {número}

---

## 1. Contexto

Breve descrição do cliente e do que entendemos da operação dele, em 2–3 linhas. Mostra que a gente escutou.

> Ex: "A {empresa} é {descrição} com time comercial de {N} pessoas, faturando {R$ Xk/mês} principalmente via {canal}. O comercial hoje é conduzido por {decisor} com foco em {vertical/produto}."

## 2. Dor diagnosticada

Em 1 frase o que está travando hoje.

> Ex: "Leads chegam em volume (~X/mês) mas conversão pra visita é baixa (~Y%) porque o corretor gasta mais tempo em triagem do que em venda."

Referência de apoio: [mapa de dor do vertical](./Proposta_Valor_Template.md#vpc-por-vertical-q2)

## 3. Proposta de valor

**Promessa-âncora:**

> "Estruture o processo comercial da sua empresa, implemente IA e comece a vender mais sem aumentar o time, operando com dados — em 3 meses você tem funil mapeado, playbook aprovado, agentes rodando e métricas claras."

**Para o seu caso específico:**

- Dor: "{frase-de-dor do vertical, copiada do `Proposta_Valor_Template.md`}"
- Valor: "{frase-de-valor}"
- Resultado esperado em 90 dias: "{métrica concreta — ex: dobrar taxa de visita-agendada / reduzir no-show em 40%}"

VPC completo do vertical: [Proposta_Valor_Template.md §{vertical}](./Proposta_Valor_Template.md#vertical-{n}—{vertical})

## 4. Caminho recomendado

Marque **um** (remove os outros antes de enviar):

### 🅰️ Diagnóstico standalone (recomendo se você ainda não tem clareza da dor ou quer testar)

- **Entrega:** mapa completo do seu processo comercial em 7–10 dias
- **Investimento:** R$ 1.200 one-time
- **Diferencial:** se virar 6OS Beta em até 30 dias, vira crédito de 100% no setup
- **Detalhes da entrega:** [Processo_Entrega_Template.md §Fase 1](./Processo_Entrega_Template.md#fase-1--diagnóstico)

### 🅱️ 6OS Beta (recomendação padrão pra Q2 com dor clara)

- **Entrega:** Diagnóstico + Estruturação + Acompanhamento mensal
- **Duração:** ~8 semanas até operar, 3 meses mínimo de contrato
- **Investimento:** R$ 2.000–3.000 setup + R$ 1.500/mês (fidelidade 3 meses)
- **Diferencial:** 5 vagas Beta — troca de preço menor por case, depoimento e uso de marca
- **Detalhes:** [Processo_Entrega_Template.md §Fase 2](./Processo_Entrega_Template.md#fase-2--estruturação)

### 🅾️ 6OS Real (quando case já está provado e escala)

- **Entrega:** Beta + integração com stack existente (7C) + dashboard dedicado (7D)
- **Duração:** ~10–12 semanas até operar, 3 meses mínimo
- **Investimento:** R$ 4.000–6.000 setup + R$ 3.000–5.000/mês
- **Detalhes:** [Custos_Stack_Template.md §Real](./Custos_Stack_Template.md#tabela-de-custos--versão-real)

## 5. Processo de entrega

3 fases:

1. **Diagnóstico** (7–10d) — mapa do funil, gargalos, ticket real
2. **Estruturação** (6–8s) — playbook + agente IA + CRM + treinamento
3. **Acompanhamento** (mensal contínuo) — review + ajustes + relatório semanal

Gate formal entre Fase 1 e Fase 2 (você aprova o diagnóstico) e entre Fase 2 e Fase 3 (você aprova o playbook antes de rodar agente).

> Isso é o que diferencia a gente: **nada de automação antes do processo estar aprovado.** Automatizar processo quebrado escala o erro.

Diagrama completo: [Processo_Entrega_Template.md §Diagrama sequence](./Processo_Entrega_Template.md#diagrama-sequence-mermaid)

## 6. Cronograma

Gantt completo fica em `cronograma.md` desta pasta (gerado a partir do `Cronograma_Cliente_Template.md`).

Resumo pro seu caso:

| Semana | Marco |
|---|---|
| 0 | Contrato assinado |
| 1 | Fase 1 — Diagnóstico |
| 2 | Gate 1 + início da Fase 2 |
| 3–4 | Playbook customizado + gate 2 |
| 5–7 | Deploy agente + WABA + treinamento |
| 8 | Operação em Fase 3 começa |

Link pro cronograma detalhado: [./cronograma.md](./cronograma.md)

## 7. Stack técnico

- **Canal principal:** WhatsApp Business API (WABA oficial, Meta)
- **Automação:** n8n (self-hosted Eloscope)
- **Inteligência:** OpenClaw / OpenCloud (copiloto + assistida)
- **Persistência:** Supabase (PostgreSQL + RLS multi-tenant)
- **CRM:** Eloscope multi-tenant (padrão Beta) **ou** integração com o que você já usa (HubSpot / Pipedrive / RD / Kommo)
- **Monitoramento:** dashboard web quando aplicável (versão Real)

Detalhe completo: [Custos_Stack_Template.md §Stack canônico](./Custos_Stack_Template.md#stack-canônico-6os)

## 8. Tempo por ferramenta (transparência)

| Ferramenta | Horas de setup | Horas/mês operação |
|---|---|---|
| Diagnóstico + análise | 20–30h | — |
| Playbook customizado | 20–40h | 2–4h (tuning) |
| Agente IA (OpenClaw + n8n) | 20–40h | 3–6h |
| CRM config / integração | 4–20h | 1–4h |
| Treinamento | 8–12h | — |
| Acompanhamento mensal | — | 10–20h |

Detalhe: [Tempo_Template.md](./Tempo_Template.md)

## 9. Custos (transparência total)

### Investimento Eloscope (o que você paga pra gente)

| Item | Beta | Real |
|---|---|---|
| Setup | R$ 2.000–3.000 | R$ 4.000–6.000 |
| Mensal | R$ 1.500 | R$ 3.000–5.000 |
| Fidelidade mínima | 3 meses | 3 meses |
| Total nos primeiros 3 meses | ~R$ 6.500 | ~R$ 13.000–21.000 |

### Custos diretos que você paga (transparência)

| Item | Beta | Real |
|---|---|---|
| WhatsApp conversations (Meta) | R$ 50–500/mês | R$ 200–2.000/mês |
| Supabase (se passar tier free) | R$ 0 | ~R$ 125/mês |
| Clerk / Vercel (só Real com dashboard) | R$ 0 | ~R$ 200/mês |
| CRM atual (se usar o seu) | — | Licença que você já paga |

Detalhe: [Custos_Stack_Template.md](./Custos_Stack_Template.md)

## 10. Garantias / SLA

- **Diagnóstico:** se você não considerar útil, devolvemos 50%. É um produto autônomo — seu mesmo se não virar contrato.
- **Beta:** agente roda em produção com supervisão na 1ª semana. Só opera autônomo depois do seu time validar.
- **Acompanhamento:** review mensal garantida. Relatório semanal automatizado.
- **Anti-lock-in:** seu playbook, workflows e dados saem com você se encerrar contrato. Sem refém.
- **LGPD:** cláusula DPA padrão, RLS multi-tenant no Supabase, guardrails de PII nos agentes.

## 11. Objeções antecipadas (pra conversar já)

As 3 mais comuns no seu vertical (copiar do `Objecoes_Matriz_Template.md` seção relevante):

1. **{objeção 1}** — {resposta resumida}
2. **{objeção 2}** — {resposta resumida}
3. **{objeção 3}** — {resposta resumida}

Se tiver outra dúvida, a gente responde reto. Resposta completa: [Objecoes_Matriz_Template.md](./Objecoes_Matriz_Template.md)

## 12. Próximos passos

- [ ] Você decide: Diagnóstico, Beta ou Real
- [ ] Assinatura de contrato (Clicksign/D4Sign — link ao aceitar)
- [ ] Pagamento de setup
- [ ] Kickoff agendado em até 5 dias úteis pós-pagamento

**Vagas Beta disponíveis neste ciclo:** {N de 5}

## Anexos sugeridos (quando existirem)

- [ ] Case {Fran / Morgana} — números consolidados
- [ ] Exemplo de playbook de outro cliente Q2
- [ ] Arquitetura de segurança / LGPD
- [ ] Cláusula DPA padrão

---

**Aceite:** responder este documento com "aceito, caminho {A/B/C}" no canal que preferir (WhatsApp / e-mail). Documento vale 15 dias.

---

### Notas internas (REMOVER antes de enviar ao cliente)

- Lead profile completo: [./lead-profile.md](./lead-profile.md)
- Validação do cronograma: [./validacao-cronograma.md](./validacao-cronograma.md)
- Todos os links pra templates-pai (.md) devem ser exportados como PDF ou mantidos em Google Doc se cliente abrir pelo link — cliente não enxerga repo. Alternativa: trazer copy inline deste template e manter links só na versão interna.
