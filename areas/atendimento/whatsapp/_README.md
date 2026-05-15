---
tipo: doc
tags: [atendimento, whatsapp, uazapi, infra]
---

# Atendimento — WhatsApp (uazapi.dev)

Pasta de runtime e referência da integração WhatsApp do cerebro via [uazapi.dev](https://uazapi.dev).

## Arquivos desta pasta

| Arquivo | Conteúdo | Commitado? |
|---|---|---|
| `_README.md` | este doc | sim |
| `.active` | 1 linha com o slug da instância uazapi ativa (ex: `eloscope`). Consumido pela skill `/uazapi` | sim |

## Como funciona

A skill `/uazapi` (em `skills/uazapi/SKILL.md`) é o toolkit base. Ela lê:

1. **Credenciais** — `$SECOND_BRAIN_PATH/.env`, variáveis prefixadas `UAZAPI_<SLUG>_*`
2. **Instância ativa** — `$SECOND_BRAIN_PATH/areas/atendimento/whatsapp/.active` (1 linha com slug)

Trocar instância ativa:

```bash
/uazapi switch maqlam     # grava "maqlam" em .active
/uazapi switch            # sem arg, lista as cadastradas
```

## Estrutura futura

Outras subpastas serão criadas conforme features evoluem:

- `resumos/YYYY-MM-DD.md` — saída da skill `/whatsapp-resumo` (resumo diário)
- `tracking/` — saída da skill `/whatsapp-pendencias` (status de avanços)
- `grupos/_index.md` — mapa de grupos relevantes a projetos

## Privacidade

A skill `/uazapi` é **read-only** e nunca exfiltra conteúdo de mensagens pra fora do cerebro. Conteúdo sensível de cliente deve ser tratado com a mesma régua do resto do segundo cérebro (gitignored se necessário; nunca commitado se for instância de cliente).

## Referência

- Skill: `skills/uazapi/SKILL.md`
- Endpoints validados: `skills/uazapi/endpoints.md`
- Instalação: `skills/uazapi/INSTALL.md`
