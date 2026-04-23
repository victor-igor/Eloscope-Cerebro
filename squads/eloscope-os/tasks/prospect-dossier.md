---
task: Prospect Dossier (Research Enrichment)
responsavel: sirius
responsavel_type: agent
atomic_layer: task
elicit: false
Entrada: |
  - company_name: nome da empresa
  - contact_name: nome do contato (opcional)
  - contact_linkedin: URL (opcional)
  - source_urls: array de URLs a pesquisar (opcional)
Saida: |
  - dossier_md: prospects/{slug}/dossier.md
  - timing_signals: sinais de momento (financiamento, expansão, hiring)
  - pain_signals: sinais de dor pública (reclamações, reviews, posts)
Checklist:
  - "[ ] Buscar site da empresa + páginas sobre"
  - "[ ] Buscar LinkedIn da empresa (funcionários, vagas abertas, posts recentes)"
  - "[ ] Buscar LinkedIn do contato (histórico, posts, conexões relevantes)"
  - "[ ] Buscar notícias últimos 90 dias (Google News, Crunchbase se aplicável)"
  - "[ ] Buscar sinais de dor em reviews (Reclame Aqui, Google Reviews, redes sociais)"
  - "[ ] Identificar concorrentes diretos + como prospect se diferencia"
  - "[ ] Sintetizar em 1 página: persona + empresa + timing + dor + hook"
---

# prospect-dossier

Dossiê de 1 página que alimenta Vega (copy) e Órion (qualificação). Profundidade proporcional ao ticket esperado — não gastar 2h num lead de R$ 300/mês.

## Estrutura do output

```markdown
# Dossier — {Empresa}

## Persona: {Nome}
- Cargo, tempo na empresa, histórico, posts recentes

## Empresa
- Segmento, porte, localização, modelo de negócio

## Timing signals
- {Sinal 1 — fonte}
- {Sinal 2 — fonte}

## Pain signals
- {Sinal 1 — fonte}

## Hook sugerido pra Vega
"{gancho de 1 linha baseado em timing+dor}"

## Fontes consultadas
- [link 1], [link 2], ...
```
