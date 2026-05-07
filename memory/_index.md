# Memory — Índice

> Contexto operacional carregado pela skill `/cerebro` a cada sessão.
> Fonte de verdade sobre o estado atual do negócio, projetos e decisões.
> Atualizado pelo `/salve` conforme protocolo em `PROPAGATION.md`.

---

## Estrutura

### `context/` — Estado do negócio
| Arquivo | O que contém | Quando atualizar |
|---------|-------------|-----------------|
| `business-context.md` | Cache compilado: missão, equipe, produto, métricas-chave, positioning | Sempre que qualquer dado de negócio mudar |
| `pendencias.md` | Lista de tarefas e próximas ações abertas | A cada sessão — adicionar/riscar |
| `deadlines.md` | Datas e compromissos com prazo | Quando deadline novo ou concluído |
| `people.md` | Pessoas relevantes: equipe, clientes, parceiros, leads | Quando alguém novo aparecer ou role mudar |
| `organograma.md` | Estrutura do time e responsabilidades | Quando o time mudar |
| `decisoes/YYYY-MM.md` | Decisões tomadas por mês | A cada decisão relevante |

### `projects/` — Projetos ativos
| Arquivo | O que contém |
|---------|-------------|
| `_index.md` | Visão geral de todos os projetos (status, métrica-chave, links) |
| `bravo-agency.md` | Projeto Bravo Agency — sistema completo |
| `eloscope-lp.md` | Landing page Eloscope |
| `elopoly.md` | Produto Elopoly |
| `maqlam.md` | Elite Maqlam — sistema de cashback e BDR |
| `mentoria-agencias.md` | Mentoria para agências |
| `reabilitacao.md` | Sistema veterinário ReabilitaCão |
| `sales-os.md` | Eloscope Elo OS — produto principal |

### `sessions/` — Histórico de sessões
Logs diários gerados pelo `/salve`. Formato: `YYYY-MM-DD.md`.
Contém: o que foi feito, decisões e próximas ações de cada sessão.

---

## Hierarquia de Fontes

Em caso de conflito entre arquivos:

```
business-context.md  ←  cache (derivado das fontes abaixo)
    ↑
pendencias.md  ·  people.md  ·  deadlines.md  ·  decisoes/  ·  projects/
```

As fontes individuais prevalecem. `business-context.md` é o resumo compilado — sempre regenerar quando as fontes mudarem.

---

## Skills que leem este diretório

| Skill | O que lê |
|-------|---------|
| `/cerebro` | `business-context.md`, `pendencias.md`, `deadlines.md`, `projects/_index.md` |
| `/salve` | Escreve em `context/`, `projects/`, `sessions/` |
| `/rotina` | `pendencias.md`, `deadlines.md`, `projects/_index.md` |
| `/reuniao` | Propaga decisões e ações para `context/` e `projects/` |
