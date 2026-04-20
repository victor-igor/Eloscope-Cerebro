# Task: Optimize Prompt

**Task ID:** optimize-prompt
**Version:** 1.0
**Purpose:** Revisar e otimizar prompt existente identificando ambiguidades, contradições e oportunidades de melhoria
**Orchestrator:** @prompt-engineer
**Mode:** Interactive

---

## Inputs

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `prompt_atual` | string | Sim | O prompt existente a ser otimizado |
| `problemas_observados` | string | Não | Comportamentos problemáticos observados em produção |
| `llm_model` | string | Não | Modelo LLM que executa o prompt |

---

## Steps

### Step 1: Analisar o Prompt Atual
**Ação:** Ler o prompt completo e identificar:
- Estrutura presente (quais seções existem?)
- Seções faltantes
- Instruções vagas ou ambíguas
- Instruções contraditórias
- Ausência de formato de output
- Ausência de few-shot examples
- Regras implícitas que deveriam ser explícitas

**Output:** Lista de issues categorizados por severidade (CRÍTICO | ALTO | MÉDIO | BAIXO).

### Step 2: Mapear Problemas de Comportamento
**Ação:** Se `problemas_observados` foi fornecido:
- Mapear cada problema para a instrução (ou ausência dela) que o causa
- Priorizar correções por impacto no comportamento

### Step 3: Aplicar Melhorias
**Ação:** Para cada issue CRÍTICO e ALTO:
- Reescrever a instrução problemática
- Adicionar seção faltante
- Resolver contradição escolhendo a versão mais clara
- Adicionar few-shot example para comportamento crítico

**Regra:** Manter o estilo e intenção original — melhorar precisão, não reescrever do zero a menos que necessário.

### Step 4: Gerar Changelog
**Ação:** Documentar cada mudança:
```
v{versao_anterior} → v{versao_nova}
- [CRÍTICO] Removida ambiguidade em instrução de preço
- [ALTO] Adicionado formato de output JSON
- [MÉDIO] Melhorada clareza da instrução de tom
- [BAIXO] Reorganização das seções para melhor legibilidade
```

### Step 5: Score de Qualidade
**Ação:** Aplicar `checklists/prompt-quality-gate.md` no prompt otimizado e comparar score antes/depois.

---

## Critérios de Aceite

- [ ] Todos os issues CRÍTICOS resolvidos
- [ ] Todos os issues ALTOS resolvidos
- [ ] Changelog documentado
- [ ] Score de qualidade >= 7.0
- [ ] Prompt versionado (incrementar versão)

---

## Veto Conditions

| Condição | Ação |
|----------|------|
| Prompt original não fornecido | PARAR — solicitar |
| Issue CRÍTICO não resolvido | BLOQUEAR entrega |
| Score final < 7.0 | Revisar até atingir threshold |
