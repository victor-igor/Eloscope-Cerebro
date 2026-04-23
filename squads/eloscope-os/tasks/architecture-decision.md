---
task: Architecture Decision Record
responsavel: hefesto
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - scope: escopo da feature ou sistema
  - constraints: restrições técnicas, prazo, budget
  - stack_preferences: preferências do cliente (se houver)
  - current_architecture: arquitetura existente (se brownfield)
Saida: |
  - adr_md: adr/ADR-{NNN}.md usando templates/adr-template.md
  - implementation_plan: projects/{slug}/implementation-plan.md
  - delegations: handoffs criados pra Dédalo, Gaia, Pigmento, etc.
Checklist:
  - "[ ] Ler escopo + constraints"
  - "[ ] Listar 2-3 alternativas técnicas"
  - "[ ] Avaliar tradeoffs — performance, complexidade, custo, manutenção"
  - "[ ] Escolher + justificar em 2 parágrafos"
  - "[ ] Documentar consequências (positivas + negativas + riscos)"
  - "[ ] Se feature IA-heavy → delegar pra Minerva (AI architect)"
  - "[ ] Criar handoffs pros specialists"
  - "[ ] Numerar ADR sequencialmente em adr/"
---

# architecture-decision

Fundação de toda decisão técnica na Eloscope. ADR é contrato com o futuro — "por que escolhemos X quando tínhamos Y e Z disponíveis".

## Quando criar ADR
- ✅ Nova feature que muda stack
- ✅ Troca de banco / auth / framework
- ✅ Decisão entre single-agent vs multi-agent
- ✅ Escolha de padrão de integração (REST, GraphQL, events, n8n)
- ❌ Refactor interno sem impacto externo
- ❌ Fix de bug

## Princípio
Decisão sem alternativas consideradas é declaração, não decisão. Sempre liste o que foi descartado e por quê.
