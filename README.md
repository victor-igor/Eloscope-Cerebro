# Eloscope — Segundo Cérebro

Repositório privado de contexto operacional da Eloscope. Sincronizado automaticamente com o Claude Code via hook `SessionStart`.

---

## Como funciona

O Claude Code carrega este repositório no início de cada sessão e usa o conteúdo para ter contexto completo de negócio, equipe, projetos e pendências — sem precisar reexplicar nada.

Três comandos principais:

| Comando | O que faz |
|---------|-----------|
| `/cerebro` | Carrega briefing completo da sessão atual |
| `/salve` | Persiste decisões, pendências e log da sessão |
| `/rotina` | Cockpit do dia — pendências + deadlines + foco |

---

## Arquitetura de pastas

```
cerebro/
│
├── memory/                    ← CONTEXTO OPERACIONAL (lido a cada sessão)
│   ├── context/
│   │   ├── pendencias.md      ← O que está em aberto (🔴 crítico / 🟡 importante / ⚪ backlog)
│   │   ├── deadlines.md       ← Prazos com datas absolutas
│   │   ├── people.md          ← Equipe e contatos relevantes
│   │   ├── business-context.md← Cache compilado: empresa, foco, métricas-chave
│   │   └── decisoes/
│   │       └── YYYY-MM.md     ← Decisões do mês (uma por seção)
│   ├── projects/
│   │   ├── _index.md          ← Status de todos os projetos (tabela)
│   │   └── {nome}.md          ← Detalhes de cada projeto
│   └── sessions/
│       └── YYYY-MM-DD.md      ← Log do que foi feito em cada sessão
│
├── empresa/                   ← CONTEXTO DA EMPRESA
│   ├── contexto/
│   │   ├── identidade.md      ← Missão, visão, valores, tom de voz
│   │   └── posicionamento.md  ← Diferencial, ICP, proposta de valor
│   └── projetos/
│       └── sales-os/          ← Projeto Elo OS (produto principal)
│           ├── 01-produto/    ← produto-bible, ia-skills-spec, stack
│           ├── 02-comercial/  ← proposta, landing page, guia Lucas, funil
│           ├── 03-entrega/    ← SOP, onboarding, template case
│           └── 04-apresentacao/ ← Slides da call de vendas
│
├── areas/                     ← ÁREAS FUNCIONAIS
│   ├── vendas/                ← Pipeline, personas, brandscript
│   ├── marketing/             ← Visual ref, voz/copy, projetos Instagram
│   ├── design/                ← Design system, tokens, assets
│   ├── atendimento/           ← Tom por canal, FAQ
│   └── operacoes/             ← Rotinas internas
│
├── agentes/                   ← CONFIG DOS AGENTES IA
│   ├── _registry.md           ← Lista de agentes ativos e seus escopos
│   └── COMO-CONECTAR.md       ← Instruções de setup por agente
│
├── seguranca/
│   └── permissoes.md          ← O que cada agente pode e não pode acessar
│
├── CLAUDE.md                  ← Instruções para o Claude Code (perfil + diretrizes)
├── PROPAGATION.md             ← Protocolo de propagação: o que atualizar quando algo muda
└── MAPA.md                    ← Índice navegável de toda a estrutura
```

---

## Protocolo de propagação

Quando algo muda, o arquivo `PROPAGATION.md` define exatamente o que atualizar. Resumo:

| Evento | Onde registrar |
|--------|---------------|
| Decisão tomada | `memory/context/decisoes/YYYY-MM.md` |
| Pendência criada/resolvida | `memory/context/pendencias.md` |
| Projeto novo ou mudou status | `memory/projects/{nome}.md` + `_index.md` |
| Pessoa nova ou role mudou | `memory/context/people.md` |
| Deadline novo | `memory/context/deadlines.md` |
| Fim de sessão | `memory/sessions/YYYY-MM-DD.md` via `/salve` |

`business-context.md` é um cache compilado — atualizado sempre que qualquer dado de negócio mudar.

---

*Repositório privado — Eloscope 2026*
