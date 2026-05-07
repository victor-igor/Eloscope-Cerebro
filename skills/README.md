# Skills — Índice

> Skills são comandos slash que o Claude Code executa dentro do cerebro.
> Cada skill tem um `SKILL.md` com as instruções completas.
> Ativação: `/nome-da-skill` no prompt do Claude Code.

---

## Skills Disponíveis

| Skill | Pasta | Quando usar |
|-------|-------|-------------|
| `/cerebro` | `cerebro/` | Início de sessão — carrega todo o contexto (pendências, deadlines, decisões, projetos, equipe) |
| `/salve` | `salve/` | Fim de sessão — flush completo, atualiza memory/, faz commit e push |
| `/rotina` | `rotina/` | Cockpit matinal — revisa o dia, prioridades e próximos passos |
| `/reuniao` | `reuniao/` | Captura e processa reuniões (Fathom/Fireflies/manual) com manifest anti-refetch |
| `/buscar-memoria` | `buscar-memoria/` | Busca semântica na memória persistente do cerebro |
| `/sync` | `sync/` | Sincroniza dados entre ferramentas (ClickUp, Notion, etc.) |
| `/triagem` | `triagem/` | Triagem de inbox — classifica e prioriza mensagens e tarefas |
| `/assinar` | `assinar/` | Assina documentos e contratos com o padrão da empresa |
| `/carrossel-eloscope` | `carrossel-eloscope/` | Produção de carrosséis para Instagram — brief, copy, design e HTML |

---

## Fluxo de Sessão Padrão

```
Início  →  /cerebro   (carrega contexto)
Trabalho →  [skills específicas conforme necessidade]
Fim     →  /salve     (flush e commit)
```

---

## Templates da skill `/reuniao`

| Template | Tipo de reunião |
|----------|----------------|
| `templates/daily.md` | Stand-up diário |
| `templates/semanal.md` | Planejamento/retrospectiva semanal |
| `templates/interna.md` | Alinhamento entre sócios |
| `templates/cliente.md` | Reunião de acompanhamento com cliente |
| `templates/venda.md` | Discovery / follow-up / fechamento |
| `templates/onboarding.md` | Kick-off pós-fechamento |
