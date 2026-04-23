---
task: AI Architecture Design
responsavel: minerva
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - feature_spec: especificação da feature IA
  - data_shape: formato e volume de dados envolvidos
  - latency_budget: SLA de latência
  - cost_budget: budget mensal estimado
Saida: |
  - ai_architecture_doc: ai/architecture/{feature}.md
  - agent_contracts: ai/contracts/{from}-to-{to}.md (versionados)
  - memory_spec: handoff pra Mnemósine se RAG/memória
  - prompt_specs: handoff pra Logos (prompts iniciais)
  - eval_plan: handoff pra Minos (evals obrigatórios antes de prod)
  - guardrails_plan: handoff pra Pallas (se toca PII)
Checklist:
  - "[ ] Decidir padrão: single-prompt | chain | agent-loop | multi-agent"
  - "[ ] Escolher stack: LangChain | LangGraph | n8n | API direto"
  - "[ ] Desenhar memória: curta, longa, episódica — qual precisa?"
  - "[ ] Mapear contratos entre agents (ai-contract-template)"
  - "[ ] Definir fallback em cada agent (se LLM falhar/timeout)"
  - "[ ] Estimar custo por request + volume mensal"
  - "[ ] Se toca PII → invocar Pallas no design"
  - "[ ] Criar plan de evals pra Minos ANTES de prod"
---

# ai-architecture

Arquitetura de IA é diferente de arquitetura tradicional. Tradeoffs são: latência vs qualidade, custo vs contexto, autonomia vs controle.

## Árvore de decisão rápida

```
Precisa de raciocínio multi-step?
├── Não → single-prompt (API direto)
└── Sim
    ├── Estado linear? → chain (LangChain ou n8n)
    └── Estado complexo (loops, condicionais, human-in-the-loop)?
        ├── UI-heavy → LangGraph
        └── Orquestração visual + integrações → n8n (padrão Maya)

Precisa de memória?
├── Stateless → nada
├── Session-scoped → buffer em memória
└── Cross-session → Mnemósine (pgvector + hybrid search)

Toca dado pessoal?
└── Sempre → Pallas no design, não como afterthought
```

## Invariante
Todo agent cliente-facing passa por Minos (eval) antes de prod. Gate não negociável.
