---
task: Guardrails + LGPD Policy
responsavel: pallas
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - agent_id: agent que receberá o guardrail
  - exposure_surface: [client-facing | internal | partner]
  - data_classes: [PII | PHI | financial | confidential | public]
  - jurisdictions: [BR | outros]
Saida: |
  - guardrail_policy: compliance/{agent-id}-policy.md
  - adversarial_tests: eval/suites/{agent-id}-adversarial.yaml
  - lgpd_review: compliance/{agent-id}-lgpd.md
  - escalation_rules: em que casos escalar pra humano
Checklist:
  - "[ ] Identificar PII que o agent pode receber (nome, CPF, email, telefone, endereço, saúde, financeiro)"
  - "[ ] Definir filtros: input sanitization + output redaction"
  - "[ ] Desenhar jailbreak detection (patterns conhecidos + heurísticas)"
  - "[ ] Definir content moderation (violência, discurso de ódio, etc.)"
  - "[ ] Estabelecer escalation rules — quando chamar humano"
  - "[ ] Gerar casos adversariais pra Minos testar"
  - "[ ] Review LGPD: base legal, consentimento, retenção, direito ao esquecimento"
  - "[ ] Log de auditoria: o que, quem, quando"
---

# guardrails-policy

Nenhum agent cliente-facing sobe sem Pallas. LGPD não é opcional — é pré-requisito de existência do agent.

## Base LGPD (checklist rápido)

- [ ] Base legal declarada (consentimento, execução de contrato, legítimo interesse)
- [ ] Finalidade específica e documentada
- [ ] Minimização: só colete o necessário
- [ ] Retenção: prazo definido + deletion automática
- [ ] Direito de acesso: usuário pode pedir dados dele
- [ ] Direito ao esquecimento: usuário pode deletar
- [ ] Segurança: criptografia em trânsito e repouso
- [ ] Auditoria: log de quem acessou o quê

## Padrão de output redaction

| Classe | Ação |
|---|---|
| CPF | Mascarar: ***.***.***-XX |
| Email | Mascarar domínio: u***@d***.com |
| Telefone | Últimos 4 dígitos: (**) ****-1234 |
| Endereço | Cidade + estado apenas |

## Integração
- Todo guardrail ativo → Minos inclui adversarial suite no eval
- Falha de guardrail em prod → alerta + escalation automática
