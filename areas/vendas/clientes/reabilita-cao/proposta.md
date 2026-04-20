# Proposta Comercial 6OS — ReabilitaCao (Dra. Fran)

> **Stub de proposta.** Base: [`Proposta_Lead_Template.md`](../../templates/Proposta_Lead_Template.md). Preencher antes de enviar.

---

**Preparada por:** Lucas Negreiro — Eloscope
**Data:** 2026-04-{TODO}
**Validade:** 15 dias
**Contato:** eloscope.coo@gmail.com · WhatsApp {TODO}

---

## 1. Contexto

ReabilitaCao é clínica de fisioterapia multi-profissional conduzida por Dra. Fran, cliente Eloscope desde {TODO}. Hoje opera com custom antigo; migração pra 6OS Beta traz padronização + case.

## 2. Dor diagnosticada

"Tempo da secretária em agendamento manual + no-show alto + falta de follow-up de paciente de alta." {Validar na call de migração.}

Referência: [VPC clínica multi — Proposta_Valor_Template.md](../../templates/Proposta_Valor_Template.md#vpc-por-vertical-q2)

## 3. Proposta de valor

**Promessa-âncora:**
> "Playbook aprovado + agente rodando + CRM organizado em 8 semanas. Em 90 dias: redução de no-show, recuperação de pacientes de alta, relatório semanal automatizado."

**Para o seu caso específico:**
- Dor: no-show + follow-up manual
- Valor: secretária foca em paciente físico, agente cuida de WhatsApp
- Resultado esperado em 90 dias: {TODO — ex: reduzir no-show de X% pra Y%}

## 4. Caminho recomendado

### 🅱️ 6OS Beta

- **Entrega:** Diagnóstico + Estruturação + Acompanhamento mensal
- **Duração:** ~8 semanas até operar, 3 meses mínimo
- **Investimento:** R$ 2.500 setup (dentro do range 2-3k) + R$ 1.500/mês
- **Diferencial Beta:** migração do custom, preço-case, case público

Detalhes: [Processo_Entrega_Template.md §Fase 2](../../templates/Processo_Entrega_Template.md#fase-2--estruturação)

## 5. Processo de entrega

3 fases (Diagnóstico / Estruturação / Acompanhamento). Gates formais. **Nada de automação antes do playbook aprovado.**

Diagrama: [Processo_Entrega_Template.md §Diagrama sequence](../../templates/Processo_Entrega_Template.md#diagrama-sequence-mermaid)

## 6. Cronograma

Ver [`cronograma.md`](./cronograma.md) desta pasta.

## 7. Stack técnico

WhatsApp Business API (WABA) · n8n · OpenClaw · Supabase · CRM Eloscope multi-tenant.

Detalhe: [Custos_Stack_Template.md §Stack canônico](../../templates/Custos_Stack_Template.md#stack-canônico-6os)

## 8. Tempo por ferramenta

Ver [Tempo_Template.md](../../templates/Tempo_Template.md).

## 9. Custos

### Investimento Eloscope

| Item | Beta |
|---|---|
| Setup | R$ 2.500 |
| Mensal | R$ 1.500 |
| Total 3 meses | R$ 7.000 |

### Custos diretos cliente

| Item | Valor |
|---|---|
| WhatsApp conversations (Meta) | R$ 50–300/mês |
| Supabase | R$ 0 (tier free compartilhado Eloscope) |

## 10. Garantias / SLA

- Anti-lock-in: playbook e dados saem com o cliente
- LGPD: DPA padrão + RLS + guardrails PII
- Review mensal + relatório semanal

## 11. Objeções antecipadas

Top-3 do vertical clínica (de [Objecoes_Matriz_Template.md](../../templates/Objecoes_Matriz_Template.md)):

1. **"Sigilo médico / paciente não confia em IA"** — agente é copiloto da secretária, não substitui consulta; PII guardada com guardrails; paciente vê "Bruna da recepção", não robô
2. **"Já tenho software de agendamento"** — 6OS integra ou substitui; foco é playbook + funil, não ferramenta isolada
3. **"Caro demais"** — ROI em 1 mês se reduzir no-show em 15%; custom atual já rodando sem resultado consolidado

## 12. Próximos passos

- [ ] Aceitar migração custom → 6OS Beta
- [ ] Assinatura contrato (3 meses)
- [ ] Kickoff — Fase 1 diagnóstico (4 dias)
- [ ] Implantação 8 semanas
