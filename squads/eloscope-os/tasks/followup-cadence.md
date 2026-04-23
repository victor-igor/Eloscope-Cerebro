---
task: Follow-up Cadence Post-Proposal
responsavel: halley
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - proposal_id: ID no CRM
  - days_since_send: dias desde o envio
  - crm_stage: estágio atual no HubSpot
  - last_touch: última interação registrada
Saida: |
  - followup_message: texto pronto por canal (email/whatsapp)
  - angle: [confirmacao | valor | case | decisao | breakup]
  - next_touch_date: próxima data de touch
  - hubspot_update: mudança de stage se aplicável
Checklist:
  - "[ ] Calcular em qual touch estamos: dia 2, 5, 10, 20"
  - "[ ] Buscar último touch — não repetir ângulo"
  - "[ ] Escolher ângulo: valor > cobrar"
  - "[ ] Montar mensagem contextualizada (referência ao discovery)"
  - "[ ] Agendar próximo touch"
  - "[ ] Atualizar stage no HubSpot se houve sinal de decisão"
---

# followup-cadence

Mantém presença sem parecer insistente. Regra de ouro: **cada touch agrega valor**, não cobra resposta.

## Cadência canônica

| Dia | Ângulo | Conteúdo |
|---|---|---|
| 2 | Confirmação | "Recebeu a proposta? Posso esclarecer algo?" + ponto-chave 1 |
| 5 | Valor/case | Case similar fresco — prova social indireta |
| 10 | Decisão | Pergunta aberta: "Onde você está no processo de decisão?" |
| 20 | Break-up | "Vou assumir que não é o momento. Quando voltar a ser, estou aqui." |

## Anti-padrão
- ❌ "Só passando pra saber se tem novidade"
- ✅ "Vi que a {empresa concorrente} subiu conversão em X% com Y — e lembrei do que a gente conversou sobre {dor}"
