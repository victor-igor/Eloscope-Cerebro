# Task: Design Agent Architecture

**Task ID:** design-agent-architecture
**Version:** 1.0
**Purpose:** Projetar a arquitetura completa de um agente antes de escrever qualquer prompt
**Orchestrator:** @prompt-architect
**Mode:** Interactive

---

## Inputs

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `objetivo_negocio` | string | Sim | O que esse agente resolve para o negócio |
| `canal` | string | Sim | Onde opera (WhatsApp, n8n interno, API, etc.) |
| `stack` | string | Não | Stack técnica (n8n + uazapi, n8n + OpenAI, etc.) |
| `outros_agentes` | array | Não | Outros agentes no sistema que interagem com este |

---

## Steps

### Step 1: Definir Propósito
**Ação:** Formular em 1 frase o propósito do agente:
- Começa com verbo de ação
- Especifica o domínio
- Define o critério de sucesso

**Template:** "Agente que [verbo] [objeto] para [resultado esperado]"

**Exemplo:** "Agente que qualifica leads de clínica estética para conduzir à avaliação presencial"

**Veto:** Se o propósito não couber em 1 frase clara → o agente está tentando fazer coisas demais. Dividir.

### Step 2: Mapear Inputs e Outputs
**Ação:** Definir o contrato do agente:

```yaml
inputs:
  - nome: mensagem_usuario
    tipo: string
    origem: webhook WhatsApp
  - nome: historico_conversa
    tipo: array[mensagem]
    origem: banco de dados

outputs:
  - nome: resposta
    tipo: string
    destino: WhatsApp API
  - nome: status_qualificacao
    tipo: enum[quente, morno, frio]
    destino: banco de dados
```

### Step 3: Definir Memória
**Ação:** Classificar cada dado necessário:
- **Contexto de sessão** (RAM) → injetar no prompt a cada turno
- **Dados persistentes** (banco) → buscar via API antes de chamar o LLM
- **Estado de fluxo** → variável n8n entre nós

**Pergunta-chave:** "Se o usuário mandar mensagem amanhã, o que o agente precisa lembrar?"

### Step 4: Definir Ferramentas
**Ação:** Listar ferramentas que o agente pode acionar:
- APIs externas (banco, CRM, agenda)
- Outros agentes (sub-agentes)
- Ações de sistema (enviar PDF, trocar fila)

**Regra:** Se o agente não precisa de ferramentas → é um agente conversacional puro. Se precisa de muitas ferramentas → considerar dividir em sub-agentes.

### Step 5: Mapear Handoffs
**Ação:** Definir TODOS os cenários de saída do agente:

| Trigger | Destino | Payload |
|---------|---------|---------|
| Lead qualificado | Agente de transferência | nome, interesse, qualificação |
| Lead pediu humano | Fila humana | histórico completo |
| Erro irrecuperável | Log + fallback | mensagem de erro |

**Veto:** Agente sem handoff definido para cenário de erro → BLOQUEAR.

### Step 6: Gerar Documento de Arquitetura
**Ação:** Consolidar em documento usando `templates/prompt-output-tmpl.md`.

**Seções obrigatórias:**
- Propósito (1 frase)
- Contrato (inputs/outputs)
- Memória (o que persiste e onde)
- Ferramentas (lista)
- Handoffs (tabela completa)
- O que o agente NÃO faz (fronteiras)
- Diagrama de fluxo n8n (ASCII ou descritivo)

---

## Critérios de Aceite

- [ ] Propósito em 1 frase clara
- [ ] Inputs e outputs com tipos definidos
- [ ] Estratégia de memória documentada
- [ ] Todos os handoffs mapeados incluindo cenários de erro
- [ ] Fronteiras do agente explicitadas
- [ ] Documento gerado e pronto para @prompt-engineer escrever o prompt

---

## Veto Conditions

| Condição | Ação |
|----------|------|
| Propósito não cabe em 1 frase | PARAR — dividir o agente |
| Handoff de erro não definido | BLOQUEAR — risco de loop infinito |
| Agente sem nenhum output definido | PARAR — arquitetura incompleta |
