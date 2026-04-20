# Prompt Engineer Squad

Squad especializado em engenharia de prompts para agentes n8n e arquiteturas de IA conversacional.

## Quick Start

```
@prompt-architect        # Projetar arquitetura do agente primeiro
*design-agent-architecture  # Mapear propósito, inputs, outputs, handoffs

@prompt-engineer         # Escrever o prompt
*create-agent-prompt     # Criar system prompt completo
*optimize-prompt         # Otimizar prompt existente
```

## Agentes

- **prompt-architect** — Projeta arquiteturas de agentes antes de qualquer prompt
- **prompt-engineer** — Escreve e otimiza system prompts para agentes n8n

## Fluxo Recomendado

```
@prompt-architect
*design-agent-architecture
    ↓
Documento de arquitetura gerado
    ↓
@prompt-engineer
*create-agent-prompt
    ↓
System prompt versionado + checklist validado
```

## Components

- **2 agentes**, **3 tasks**, **1 template**, **1 checklist**

## Requirements

- AIOS >= 4.0.0
