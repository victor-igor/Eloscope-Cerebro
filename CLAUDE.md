# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## O que é este repositório

**Eloscope Cerebro** é um repositório de **contexto operacional** (segundo cérebro), não um projeto de software. O Claude Code carrega o conteúdo deste repo no `SessionStart` para ter memória persistente sobre negócio, equipe, projetos, pendências e decisões — sem precisar reexplicar nada a cada sessão.

**Dependência declarada** (`package.json`): apenas `aiox-core` — não há build, lint, test ou typecheck. Trabalho aqui é curadoria de markdown + execução de skills.

---

## Variável de ambiente crítica

Tudo depende de `$SECOND_BRAIN_PATH` apontar para a raiz deste repositório. Skills e scripts usam a variável — nunca hardcode caminhos absolutos.

```bash
echo $SECOND_BRAIN_PATH    # deve resolver pra raiz do repo
```

Se não estiver configurada, ver `COMO-USAR.md`.

---

## Skills (comandos principais)

Três skills definem o fluxo de trabalho. Vivem em `skills/` e são copiadas para `~/.claude/skills/` no setup.

| Comando | Arquivo | Quando usar |
|---------|---------|-------------|
| `/cerebro` | `skills/cerebro/SKILL.md` | Início de sessão — carrega briefing compacto (pendências, deadlines, decisões recentes, últimas sessões). Tem **Modo Setup** (primeira vez) e **Modo Briefing** (já configurado). |
| `/salve` | `skills/salve/SKILL.md` | Fim de sessão — flush completo. Percorre PROPAGATION.md, atualiza o que mudou, cria log em `memory/sessions/YYYY-MM-DD.md`, faz `git pull --rebase` + commit + push. |
| `/rotina` | `skills/rotina/SKILL.md` | Cockpit matinal — emails + agenda + pendências + deadlines + Top 3 + bloqueio opcional de calendar. |

Existe também `skills/carrossel-eloscope/` para criação de carrosséis.

---

## Arquitetura de conteúdo

```
memory/          ← CONTEXTO OPERACIONAL (lido a cada /cerebro)
  context/
    pendencias.md            ← 🔴 crítico / 🟡 importante / ⚪ backlog
    deadlines.md             ← prazos com datas absolutas
    people.md                ← equipe e contatos
    business-context.md      ← CACHE COMPILADO (empresa, foco, métricas-chave)
    decisoes/YYYY-MM.md      ← decisões do mês
  projects/
    _index.md                ← tabela-status de todos os projetos
    {nome}.md                ← detalhes de cada projeto
  sessions/YYYY-MM-DD.md     ← log por dia (criado pelo /salve)

empresa/         ← brandbook, posicionamento, projetos (Elo OS etc.)
areas/           ← vendas, marketing, design, atendimento, operacoes
agentes/         ← _registry.md dos squads (índice) + COMO-CONECTAR.md
squads/          ← 13+ squads de agentes IA (C-Level, Copy, Brand, Traffic...)
seguranca/       ← permissoes.md (o que cada agente pode acessar)
```

`lasted-entregas/` e `planejamento/` são pastas de trabalho (gitignored parcialmente — confirmar antes de commitar).

---

## Protocolo de propagação (crítico)

**`PROPAGATION.md` é a fonte de verdade sobre o que atualizar quando algo muda.** O `/salve` segue essa tabela — se a regra mudar, mude lá, não nas skills.

Regra geral: **toda ação que mude o estado deve atualizar o arquivo correspondente no momento em que acontecer.** `/salve` é safety net, não método principal.

Chave mental: `business-context.md` é **cache compilado** — atualizar sempre que qualquer dado de negócio mudar. Em conflito, as fontes individuais (`people.md`, `decisoes/`, `projects/{nome}.md`) prevalecem.

---

## Diretrizes de estilo

- **Resposta direta, sem preâmbulo.** Tom direto no output — as skills enfatizam isso.
- **Antes de criar algo novo, consultar o segundo cérebro.** Contexto operacional vive em `memory/`, não no CLAUDE.md.
- **Confirmar antes de ações irreversíveis** (git push, delete, rewrites).
- **Nunca sobrescrever sessão existente** — se `memory/sessions/YYYY-MM-DD.md` já existe, adicionar nova seção no final.
- **Conflito no push** → sempre `git pull --rebase origin main`, nunca `--force`.

---

## Git workflow colaborativo

Múltiplas pessoas podem clonar o repo em paths diferentes — tudo funciona via `$SECOND_BRAIN_PATH`, nunca paths absolutos nos `.md`.

```bash
git pull --rebase origin main   # SEMPRE antes de commitar
git add .
git commit -m "sessao: [resumo de 1 linha]"
git push origin main
```

O `/salve` já faz tudo isso automaticamente.

---

## AIOX (framework paralelo)

Este repo também inclui `.aiox-core/` — o framework Synkra AIOX de agentes. Regras, rules e boundaries do AIOX estão em `.claude/CLAUDE.md` e `.claude/rules/`. São carregadas automaticamente pelo Claude Code quando relevantes. Este `CLAUDE.md` foca no **segundo cérebro**; o AIOX tem suas próprias convenções, agentes (`@dev`, `@qa`, `@architect`, etc.) e workflows (SDC, QA Loop, Spec Pipeline, Brownfield).

**Não misturar os dois universos sem necessidade** — um é curadoria de contexto, o outro é orquestração de desenvolvimento.

---

## Referência rápida — onde buscar o quê

| Estou buscando... | Onde ir |
|-------------------|---------|
| O que está em aberto | `memory/context/pendencias.md` |
| Prazos | `memory/context/deadlines.md` |
| Decisões recentes | `memory/context/decisoes/YYYY-MM.md` |
| Status dos projetos | `memory/projects/_index.md` |
| Equipe e contatos | `memory/context/people.md` |
| Panorama de negócio | `memory/context/business-context.md` |
| Squads disponíveis | `agentes/_registry.md` |
| Setup do repo | `COMO-USAR.md` |
| O que atualizar quando algo muda | `PROPAGATION.md` |
| Índice navegável | `MAPA.md` |
