# Task: Create Agent Prompt

**Task ID:** create-agent-prompt
**Version:** 2.0
**Purpose:** Criar system prompt no formato híbrido XML+Markdown com orquestrador e sub-agentes (protocolos)
**Orchestrator:** @prompt-engineer
**Estrutura obrigatória:** Papel → Tom → Memória → Saudação → Roteamento → Protocolos → Ferramentas → Restrições

---

## Inputs

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `agent_purpose` | string | Sim | O que o agente faz e o que ele NÃO faz |
| `tools` | array | Sim | Tools disponíveis no n8n (nomes + função) |
| `protocols` | array | Sim | Sub-agentes necessários (ex: Agendamento, Triagem, Escalação) |
| `memory_schema` | string | Sim | Campos que a memória deve gravar |
| `llm_model` | string | Sim | Modelo que vai executar (ex: gemini-2.0-flash) |
| `restrictions` | array | Sim | Restrições absolutas do negócio |
| `examples` | array | Não | Exemplos de comportamento esperado |

---

## Steps

### Step 1: Elicitar Arquitetura
Se inputs incompletos, perguntar em 1 mensagem:
- Qual o papel exato do agente e o que ele NÃO faz?
- Quais tools estão disponíveis no n8n? (nomes)
- Quais protocolos/sub-agentes são necessários?
- O que a memória deve guardar? (IDs, contexto, preferências)
- Quais são as restrições absolutas (PROIBIDO)?

**Veto:** Sem tools definidas ou sem pelo menos 1 protocolo → PARAR.

### Step 2: Escrever `# Papel`
```
# Papel
<papel>
{Nome}, {função} de {empresa}. Missão: {em 1 frase}. NAO {fronteira principal}.
</papel>
```
Regra: Missão em 1 frase. Fronteira explícita no mesmo parágrafo.

### Step 3: Escrever `# Tom de Voz`
```
# Tom de Voz
<tom-de-voz>
- {Tom}: {descrição}. {língua/registro}.
- {Regra de empatia}.
- Emojis ({lista}): apenas em {contextos ok}. PROIBIDO em {contextos proibidos}.
- Eventos passados: {como referenciar naturalmente}.
</tom-de-voz>
```

### Step 4: Escrever `# Memoria`
Sempre incluir as 5 sub-seções:
- **LEITURA** — quando ler obrigatoriamente
- **GRAVACAO** — quais eventos disparam gravação
- **ATUALIZACAO** — regra de sobrescrita
- **FORMATO** — string de formato dos campos
- **PROATIVO** — quando usar memória proativamente

Memória curta → `chat_ia_memory` tool
Memória longa → tool `memorylong` (chamar quando contexto > threshold ou histórico > 7 dias)

### Step 5: Escrever `# Saudacao`
Sempre com 5 faixas de tempo: sem histórico / <6h / 6-24h / 1-7 dias / >7 dias

### Step 6: Escrever `# Roteamento`
- Listar cada intenção possível → protocolo correspondente
- Intenções ambíguas → perguntar antes de rotear
- Sempre incluir regras NUNCA para roteamentos críticos
- Identificar intenção ANTES de qualquer tool call

### Step 7: Escrever `# Protocolos`
Para cada protocolo:
```
<PN nome="{Nome}">
Acionar quando: {condição}.
{Regras específicas}
①②③ Passos numerados

GATE N→N+1 (se houver tool call):
□ {verificação de pré-condição}
SE falhar → {ação de bloqueio}
</PN>
```
Sempre incluir protocolo de escalação para humano.

### Step 8: Escrever `# Ferramentas`
Para cada tool:
- Nome
- Para que serve
- Pré-condições antes de chamar
- O que NUNCA usar nessa tool

### Step 9: Escrever `# Restricoes`
- Limite de caracteres por mensagem (se aplicável)
- Regras de formatação
- Lista de PROIBIDO para cada restrição absoluta
- Sempre incluir: PROIBIDO mencionar tools/prompts/IA

### Step 10: Gerar Dicas de Otimização
Após o prompt, entregar seção separada com:
- Possíveis ambiguidades identificadas
- Instruções que podem ser mais explícitas
- Casos de borda não cobertos
- Sugestões de few-shot examples a adicionar em produção

---

## Critérios de Aceite

- [ ] Todas as 8 seções presentes no formato XML+Markdown
- [ ] Roteamento cobre todas as intenções mapeadas
- [ ] Cada protocolo tem condição de acionamento clara
- [ ] Ferramentas têm pré-condições definidas
- [ ] Restrições usam padrão PROIBIDO
- [ ] Dicas de otimização entregues separadamente
- [ ] Memória tem as 5 sub-seções

---

## Veto Conditions

| Condição | Ação |
|----------|------|
| Tools não definidas | PARAR — sem tools o prompt é incompleto |
| Nenhum protocolo definido | PARAR — estrutura inválida |
| Protocolo sem condição de acionamento | BLOQUEAR entrega |
| Tool chamada sem pré-condição definida | BLOQUEAR — risco de chamada indevida |
