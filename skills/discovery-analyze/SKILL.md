---
name: discovery-analyze
description: >
  Roda análise estratégica completa sobre uma transcrição de discovery comercial.
  Dispara em paralelo 3 agentes (Leitor de Processo + SPIN Analyzer + Dimensionamento)
  e consolida tudo em 4 arquivos prontos pra apresentação/orçamento. Anti-alucinação
  via tags [CONFIRMADO/INFERIDO/AUSENTE]. Squad invocada: discovery-analyzer.
trigger: /discovery-analyze
triggers_naturais:
  - analisa esse discovery
  - roda discovery-analyze
  - SPIN dessa reuniao
  - dimensiona esse discovery
  - analise estrategica desse discovery
---

# /discovery-analyze — Análise estratégica de discovery

> Skill que invoca a squad [[squads/discovery-analyzer/README|discovery-analyzer]]. Pega uma transcrição de reunião comercial e devolve 4 análises (processo + SPIN + dimensionamento + consolidada) na pasta do cliente.

> [!warning] Status: stub v0.1
> Este SKILL.md descreve o comportamento esperado. A execução real depende de:
> - Parser do path da transcrição
> - Dispatch paralelo pros 3 agentes
> - Coleta dos outputs e geração do consolidado
>
> Por enquanto, executar **manualmente** invocando `@cassandra *analyze {path}` (ver §3 abaixo).

---

## 1. Quando usar

- Transcrição de discovery já existe em `areas/vendas/oportunidades/{cliente}/transcricao-*.md`
- Vendedor precisa: prep para apresentação OU briefing para orçamento OU dimensionamento financeiro
- Antes de mandar proposta, sempre

## 2. Triggers

```bash
/discovery-analyze {path-da-transcricao}
/discovery-analyze areas/vendas/oportunidades/pele-vet/transcricao-discovery-pelevet.md
```

Modo só uma análise:
```bash
/discovery-analyze --only=processo {path}
/discovery-analyze --only=spin {path}
/discovery-analyze --only=dimensionamento {path}
```

Modo re-consolidar (3 outputs já existem):
```bash
/discovery-analyze --reconsolidate areas/vendas/oportunidades/{cliente}/
```

## 3. Fluxo de execução (versão manual atual)

Enquanto a skill não é executável de fato, fazer manualmente:

### Passo 1 — Validar entrada

Confirmar que o arquivo de transcrição:
- Existe e tem >= 1.500 palavras
- Tem falas atribuídas (60%+ das linhas)
- Menciona ao menos 1 dor + 1 número + 1 stakeholder

Se algo falhar, pedir ajustes antes de continuar.

### Passo 2 — Disparar a squad

```
@cassandra
*analyze areas/vendas/oportunidades/{cliente}/transcricao-{nome}.md
```

Cassandra (orquestrador) vai:
1. Validar a transcrição
2. Disparar em paralelo: `@mapeador`, `@spin-analyst`, `@quant`
3. Cada um produz seu output na pasta do cliente
4. Consolidar em `analise-consolidada-{cliente}.md`

### Passo 3 — Receber output

Mensagem final no padrão:
```
✅ Análise pronta para {Cliente} (confiança: {nivel})

Arquivos:
- {path-consolidada} ← comece por aqui
- {path-processo}
- {path-spin}
- {path-dimensionamento}

⚠ {N} divergências sinalizadas
Top 3 perguntas pendentes: ...
```

### Passo 4 — Revisar e validar

Vendedor lê, ajusta divergências, muda `status: rascunho` → `status: validado` no frontmatter.

---

## 4. Saída esperada

4 arquivos do fluxo de discovery em `areas/vendas/oportunidades/{cliente}/`:
- `analise-processo-{cliente}.md`
- `analise-spin-{cliente}.md`
- `analise-dimensionamento-{cliente}.md`
- `analise-consolidada-{cliente}.md` ← entregável final do discovery

Cada um com frontmatter Obsidian completo (tipo, status, cliente, agente, confiança, tags).

### Outputs adicionais (utilities — invocáveis em separado)

Os agentes utility geram artefatos sob demanda (não no fluxo paralelo):

| Agente | Comando | Output | Quando usar |
|--------|---------|--------|-------------|
| [[squads/discovery-analyzer/agentes/04-mermaid-mapper\|@icarus]] | `*map {path}` | `processo-atual-{cliente}.md` (flowchart Mermaid + tabela gargalos) | Visualizar processo AS-IS pra reunião |
| [[squads/discovery-analyzer/agentes/05-calculadora-asaas\|@tesouro]] | `*calc {liquido} {parcelas} --promo` | Tabela bruto/cartão/antecipação/líquido | Montar pricing da proposta com cálculo Asaas |

Sequência típica pós-discovery → proposta:
1. `/discovery-analyze {transcricao}` → 4 análises
2. `@icarus *map {analise-processo}` → flowchart visual
3. `@tesouro *calc {liquido} {parcelas} --promo` → pricing por cenário (Starter/Growth/Scale)
4. Consolidar tudo em `proposta-entregaveis-{cliente}.md`

---

## 5. Princípios

1. **Anti-alucinação radical** — tags [CONFIRMADO/INFERIDO/AUSENTE] em toda afirmação
2. **3 olhos independentes** — agentes não leem output uns dos outros
3. **Divergência é feature** — orquestrador marca, vendedor decide
4. **Rascunho até revisão humana** — squad nunca declara nada como "validado"
5. **Pasta do cliente é a fonte** — output mora junto da transcrição, não na pasta da squad

---

## 6. Erros comuns e tratamento

| Sintoma | Causa provável | Como resolver |
|---------|----------------|---------------|
| Cassandra aborta na validação | Transcrição muito curta ou sem falas atribuídas | Reprocessar [[skills/reuniao/SKILL\|/reuniao]] com edição manual de quem falou o quê |
| 1 dos 3 agentes falha | Lacunas críticas na categoria daquele agente | Continuar com os outros 2; consolidado marca o ausente |
| Confiança "baixa" em todos | Reunião foi mais discovery raso que estruturado | Marcar próxima reunião com perguntas pendentes do consolidado |
| Divergência grave em números | Transcrição com erro de Fathom (valores errados) | Conferir áudio, corrigir transcrição, re-rodar |

---

## 7. Roadmap da skill

| Versão | Capacidade | Status |
|--------|------------|--------|
| v0.1 | Spec + execução manual via @cassandra | ✅ atual |
| v0.2 | Parser do path + dispatch automático | TODO |
| v0.3 | Cache de análise + diff entre versões | TODO |
| v0.4 | `--reconsolidate` funcional | TODO |
| v0.5 | Saída em PDF para anexar no orçamento | TODO |
| v1.0 | Integração ClickUp (criar tasks de perguntas pendentes) | TODO |

---

## 8. Referências

- Squad: [[squads/discovery-analyzer/README]]
- Agentes specialists (paralelo):
  - [[squads/discovery-analyzer/agentes/00-orquestrador]]
  - [[squads/discovery-analyzer/agentes/01-leitor-processo]]
  - [[squads/discovery-analyzer/agentes/02-spin-analyzer]]
  - [[squads/discovery-analyzer/agentes/03-dimensionamento]]
- Agentes utility (standalone):
  - [[squads/discovery-analyzer/agentes/04-mermaid-mapper]] — Icarus (flowchart visual)
  - [[squads/discovery-analyzer/agentes/05-calculadora-asaas]] — Tesouro (pricing reverso)
- Skill irmã: [[skills/reuniao/SKILL]] (captura/transcrição)
- Caso real completo: PeleVet (2026-05-09)
  - [[areas/vendas/oportunidades/pele_vet/analise-discovery-pelevet]] (discovery)
  - [[areas/vendas/oportunidades/pele_vet/processo-atual-pelevet]] (Mermaid via Icarus)
  - [[areas/vendas/oportunidades/pele_vet/pricing-pelevet-asaas]] (Asaas via Tesouro)
  - [[areas/vendas/oportunidades/pele_vet/proposta-entregaveis-pelevet]] (sumário pra reunião)
