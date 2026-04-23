---
task: Client Documentation Bundle
responsavel: clio
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - project_scope: escopo entregue
  - features_delivered: lista de features
  - user_personas: personas que usarão o produto
  - admin_personas: quem administra (se diferente)
Saida: |
  - user_manual: projects/{slug}/handover/user-manual.md
  - runbook: projects/{slug}/handover/runbook.md
  - faq: projects/{slug}/handover/faq.md
  - video_scripts: projects/{slug}/handover/video-scripts/*.md
  - onboarding_deck: projects/{slug}/handover/onboarding.pdf
Checklist:
  - "[ ] User manual — linguagem do usuário, não do dev"
  - "[ ] Runbook — operações do dia-a-dia + incidentes comuns + contatos de escalation"
  - "[ ] FAQ — perguntas que previmos + as que já apareceram no discovery"
  - "[ ] Video scripts — 3-5min cada, jornada principal passo a passo"
  - "[ ] Onboarding deck — primeira semana do cliente"
  - "[ ] Sem jargão técnico — testar com alguém não-técnico"
  - "[ ] Screenshots atualizados da UI final"
---

# client-docs-bundle

Documentação pro cliente, não pra dev. Se o cliente precisa traduzir pra entender, Clio falhou.

## Princípios
- **Linguagem de usuário:** "cadastrar cliente" > "criar registro na tabela customers"
- **Jornada, não feature:** "Como atender um novo lead" > "Módulo de leads"
- **Resolvendo problemas:** FAQ é organizada por dor, não por feature
- **Captura de tela atualizada:** screenshot desatualizado é pior que nenhum

## Runbook — seções obrigatórias

1. Operação diária (rotina normal)
2. O que fazer se {X} acontecer (troubleshooting)
3. Quem chamar (escalation matrix — Eloscope, fornecedor, infra)
4. Como exportar dados (LGPD — direito de acesso)
5. Como deletar dados (LGPD — direito ao esquecimento)
