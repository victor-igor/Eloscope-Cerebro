---
task: GEO + SEO Playbook
responsavel: helio
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - target_queries: queries que o cliente quer rankear
  - competitor_set: 3-5 concorrentes no nicho
  - content_baseline: inventário de conteúdo atual
  - site_url: URL do site
Saida: |
  - geo_plan: projects/{slug}/geo/playbook.md
  - kpis: métricas de sucesso (share of voice em LLMs, ranking, tráfego)
  - content_briefs: briefs por artigo a produzir
  - performance_audit: handoff pra Cometa
Checklist:
  - "[ ] Auditar presença atual em LLMs (Perplexity, ChatGPT Search, Claude web, Gemini AI Overviews)"
  - "[ ] Identificar gaps vs concorrentes"
  - "[ ] Invocar Nova — estruturas GEO (TL;DR topo, listas semânticas, FAQ schema, citações)"
  - "[ ] Invocar Cometa — audit de performance (Core Web Vitals)"
  - "[ ] Mapear keywords de oportunidade (volume + intenção + dificuldade)"
  - "[ ] Priorizar artigos: alto ROI esperado primeiro"
  - "[ ] Definir KPIs: share of LLM citations, ranking, tráfego orgânico, leads"
  - "[ ] Cronograma: 3 meses mínimo pra ver resultado"
---

# geo-playbook

**GEO é o diferencial Eloscope.** SEO tradicional ainda importa (Aurum quando existir), mas o jogo novo é ser citado por LLMs generativos.

## Estruturas que LLMs preferem (Nova)

1. **TL;DR no topo** — 2-3 bullets resumindo o artigo
2. **Headers semânticos** — H2/H3 que respondem perguntas diretas
3. **Listas numeradas** — fáceis de extrair
4. **Tabelas comparativas** — LLMs adoram citar
5. **FAQ com schema.org** — pergunta + resposta explícitas
6. **Citações com fonte** — links outbound pra fontes primárias
7. **Dados concretos** — números específicos > afirmações vagas

## Performance = pré-requisito
Se Core Web Vitals estão ruins, Cometa é blocker. Site lento não é citado.

## KPIs canônicos

| KPI | Baseline | Meta 90d |
|---|---|---|
| Citações em Perplexity (share of voice) | {baseline} | +50% |
| Ranking médio nas top 10 queries | {baseline} | top 3 |
| Tráfego orgânico | {baseline} | +30% |
| Core Web Vitals (LCP/INP/CLS) | {baseline} | todos verdes |
