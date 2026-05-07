# Cérebro — Mapa Raiz

## Estrutura

### Contexto e áreas operacionais
- [empresa/](empresa/MAPA.md) — Contexto global da empresa (missão, positioning, identidade, BrandScript)
- [areas/vendas/](areas/vendas/MAPA.md) — Pipeline, leads, follow-up, clientes ativos
- [areas/marketing/](areas/marketing/MAPA.md) — Campanhas, criativos, carrosséis, tráfego pago
- [areas/atendimento/](areas/atendimento/MAPA.md) — Suporte, FAQ, bot
- [areas/operacoes/](areas/operacoes/MAPA.md) — Rotinas internas, sync, heartbeat
- [areas/design/](areas/design/MAPA.md) — Design system, tokens, assets visuais
- [areas/reunioes/](areas/reunioes/_index.md) — Reuniões transcritas (daily, semanal, vendas, onboarding, cliente)

### Memória operacional
- [memory/](memory/_index.md) — Contexto carregado a cada sessão: pendências, deadlines, decisões, projetos, equipe

### Agentes e squads
- [agentes/](agentes/_registry.md) — Registry de todos os squads e agentes (como ativar, contexto consumido)
- [squads/](squads/README.md) — 13 squads de agentes IA especializados

### Skills (comandos slash)
- [skills/](skills/README.md) — Índice de todas as skills disponíveis no cerebro

### Segurança
- [seguranca/](seguranca/permissoes.md) — Permissões e políticas de acesso

---

## Skills de sessão

| Skill | Quando usar |
|-------|-------------|
| `/cerebro` | Início de sessão — carrega todo o contexto |
| `/salve` | Fim de sessão — flush e commit |
| `/rotina` | Cockpit matinal — revisa dia e prioridades |
| `/reuniao` | Captura e processa reuniões |
| `/buscar-memoria` | Busca semântica na memória |
| `/sync` | Sincroniza ferramentas externas |
| `/triagem` | Triagem de inbox |

---

## Fluxo de sessão padrão

```
/cerebro  →  trabalho  →  /salve
```
