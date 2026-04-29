---
tipo: doc
area: reunioes
tags: [doc, reunioes]
---

# 📋 Reuniões — Estrutura e Convenções

## Visão geral

Esta pasta concentra **dois mundos**:

1. **Reuniões processadas** (com transcrição + decisões + actions em `.md`) — geradas pela skill `/reuniao` a partir de Fathom/Fireflies/manual. Vivem em `dailies/`, `semanais/`, `internas/`, `vendas/`, `onboarding/`, `clientes/`.
2. **Catálogo Drive** (apenas metadados + link) — espelho navegável da pasta Drive `Reuniões` (id `1mu3QF8Wre20-bFQsXRpq3s_NZ972jUvY`). Não há `.md` por reunião; só linhas em tabela.

Os dois coexistem: o catálogo é a porta de entrada (lista tudo), e os `.md` processados são o mergulho profundo (quando vale a pena).

---

## Arquivos-chave

| Arquivo | O que é |
|---------|---------|
| `_index.md` | Índice principal — documenta a skill `/reuniao`, frontmatter, fluxo. Ao final, traz a **tabela mestra do catálogo Drive** (todas as reuniões gravadas). |
| `_README.md` | Este arquivo. |
| `_processadas.json` | Manifest da skill `/reuniao` — cache para evitar refetch (Fathom/Fireflies). |
| `clientes/{slug}/_index.md` | Catálogo por cliente recorrente. Apenas metadados + link Drive. |
| `dailies/`, `semanais/`, `internas/`, `vendas/`, `onboarding/` | `.md` processados pela skill `/reuniao`. |

---

## Categorias do catálogo

- **clientes/{slug}** — reunião com cliente identificável (recorrente). Ver `clientes/{slug}/_index.md`.
- **internas** — Lucas + Victor + Hugo (sócios), check-ins, alinhamentos, entrevistas internas.
- **prospeccao** — apresentações, diagnósticos, discoveries com leads não-fechados.
- **parceiros** — parcerias estratégicas (ex.: Fullfunnel/Daniel), trocas de IA, bate-papos.
- **?** — não classificado automaticamente. Demanda revisão manual.

---

## Convenção de link Drive

```
[YYYY-MM-DD Título](https://drive.google.com/file/d/{file_id}/view)
```

Os títulos vêm do nome do arquivo no Drive (formato `CALL - YYYY-MM-DD - {tema}.{ext}`). O `file_id` é estável.

---

## Processo manual de adição

Quando uma nova gravação é depositada na pasta Drive `Reuniões`:

1. Rodar a skill `/reuniao` se a reunião precisar de transcrição+decisões+actions formais.
2. Para o catálogo (sempre): adicionar uma linha na tabela mestra de `_index.md` e, se for cliente recorrente, na tabela de `clientes/{slug}/_index.md`.
3. Se for um cliente novo recorrente: criar `clientes/{novo-slug}/_index.md` com frontmatter padrão.

A automação completa fica para evolução futura. Por enquanto: catálogo manual baseado no script `/tmp/reunioes-cat/build.py` (snapshot 29/04/2026).

---

## Frontmatter dos índices

```yaml
---
tipo: indice
area: reunioes
cliente: {slug}        # apenas em clientes/
tags: [indice, reunioes, cliente/{slug}]
---
```

---

## Lacunas conhecidas (snapshot 29/04/2026)

- Janeiro/2026 com volume baixo de gravações no Drive.
- Fevereiro e Março/2026 sem nenhuma gravação encontrada via busca por `CALL` — possivelmente reuniões em outro provedor (Fathom/Fireflies sem export pro Drive) ou pasta separada.
- Abril/2026 só com reuniões do dia 04/04. Verificar se há backlog não-uploadado.

---

*Atualizado: 29/04/2026.*
