---
task: Project Kickoff
responsavel: regente
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - closed_deal: handoff de Fênix com contrato fechado
  - contract: path do contrato assinado
  - client_expectations: expectativas em termos de timeline e entregáveis
Saida: |
  - kickoff_doc: projects/{slug}/kickoff.md
  - squad_allocation: áreas envolvidas + orchestrators acionados
  - milestones: cronograma em milestones de 1-2 semanas
  - status_tracker: projects/{slug}/status.md (baseline)
  - risk_register: projects/{slug}/risks.md (baseline)
Checklist:
  - "[ ] Ler contrato + discovery + proposta"
  - "[ ] Identificar áreas envolvidas (engineering | ai | geo | design)"
  - "[ ] Criar handoffs pra cada orchestrator (Hefesto, Minerva, Hélio)"
  - "[ ] Definir milestones + aceite por milestone"
  - "[ ] Agendar kickoff com cliente (se aplicável)"
  - "[ ] Criar projects/{slug}/ com estrutura padrão"
  - "[ ] Registrar riscos iniciais (Cassandra quando existir — por enquanto Regente)"
---

# project-kickoff

Transição comercial → execução. Momento crítico onde expectativa vs escopo precisa ficar inequívoco.

## Estrutura projects/{slug}/

```
projects/{slug}/
├── kickoff.md
├── status.md           # atualizado semanalmente
├── risks.md
├── handoffs/
├── deliverables/
├── meetings/           # atas/fireflies links
└── handover/           # quando Mentor assumir
```

## Red flags no kickoff
- Expectativa ≠ escopo contratado → renegociar ANTES da execução
- Decisor real é diferente do signatário → confirmar quem aprova entregas
- Stack preferida do cliente conflita com proposta → Hefesto decide via ADR
