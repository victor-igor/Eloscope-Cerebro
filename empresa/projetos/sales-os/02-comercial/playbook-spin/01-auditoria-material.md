---
tipo: auditoria
status: concluido
fase: 1
projeto: sales-os
criado: 2026-05-06
executor: @aiox-master
---

# Fase 1 — Auditoria do Material Existente

## O que já existe (inventário)

| Arquivo | Conteúdo | Qualidade | Gap |
|---------|---------|-----------|-----|
| `guia-comercial-lucas.md` | ICP, funil 7 etapas, scripts WPP, perguntas SPIN 4 blocos, scripts de objeção básicos | ✅ Sólido | Objeções com 1 frase de resposta — sem causa raiz, sem contra-argumento, sem reframe |
| `script-primeira-call-v1.md` | Script detalhado 690 linhas — abertura / discovery / pitch / fechamento (5 fases) | ✅ Muito bom | Fase N (Need-Payoff) não tem perguntas dedicadas separadas — está diluída na Fase 3 |
| `funil-vendas.md` | 3 funis com SLAs, 15 métricas semanais, alertas de deal em risco | ✅ Completo | — |
| `oferta-padrao.md` | Pricing definitivo, pacotes, comparativo de planos | ✅ OK | Sem script de apresentação de preço / manejo de ancoragem |
| `pacote-6os-q2.md` | Escopo Q2 detalhado | ✅ OK | — |
| `pipeline.md` | Estágios do pipeline | ✅ OK | — |

---

## O que o guia-comercial-lucas.md já tem de SPIN

### Situação (coletado)
- Como funciona o processo de vendas hoje (do lead até fechar)
- Quantos leads chegam por mês e de onde
- Usa CRM ou gerencia no WhatsApp

### Problema (mapeado)
- Maior dificuldade do time — onde perde mais
- Time faz follow-up com todos os leads ou só os que respondem de cara
- Base de leads antigos que não fecharam — sabe o tamanho

### Implicação (3 perguntas)
- Se conversão melhorasse 5pp, quanto representa em R$/mês
- Quando lead some por falta de follow-up, quanto estima que perdeu
- Se o melhor vendedor saísse hoje, qual seria o impacto no faturamento

### Need-Payoff (2 perguntas — fraco)
- Se você tivesse visibilidade em tempo real do que cada vendedor está fazendo, como mudaria sua gestão
- O que o time precisa pra ter certeza do próximo passo com cada lead

**Gap SPIN identificado:** Need-Payoff tem apenas 2 perguntas e são genéricas — não levam Telles a DECLARAR a solução com as próprias palavras. O prospect precisa dizer "se eu tivesse X, ficaria muito mais fácil fazer Y" — isso é a função do N.

---

## O que o script-primeira-call-v1.md já tem

### Estrutura de 5 fases (40 min)
1. **Abertura** [0-5min] — aquecimento, agenda, contexto vindo de onde
2. **Descoberta** [5-20min] — 15 perguntas, dados de mercado por segmento
3. **Apresentação** [20-33min] — pitch 3 problemas / 3 soluções
4. **Tratamento de objeções** [33-38min] — 5 objeções com scripts
5. **Fechamento** [38-40min] — próximo passo concreto

### Objeções já endereçadas no script
1. "Não sei se vai funcionar pra mim" — com reframing + garantia
2. "Tá caro / não tenho budget" — com ROI + ancoragem 1 venda extra
3. "Vou pensar / preciso conversar com o sócio" — com "o que faltou pra você ter certeza agora"
4. "Já tenho CRM / já tentei outras coisas" — com diagnóstico do que travou
5. "Meu time não vai usar / meu time é resistente" — com treinamento incluso + gradualidade

### Gaps no script atual
- **N (Need-Payoff)** aparece diluído na Fase 2 — não há transição explícita do I para o N
- **Timing objeção** não coberta — "equipe reduzida / estamos em período ruim"
- **Concorrente** não coberta — "estou cotando com outro"
- **Não é prioridade agora** não coberta diretamente

---

## Gaps Consolidados (o que falta para o playbook)

| # | Gap | Seção no Playbook | Prioridade |
|---|-----|------------------|------------|
| 1 | **N (Need-Payoff) fraco** — 2 perguntas genéricas | Seção 3 — SPIN | 🔴 Alta |
| 2 | **Objeção de timing** — "equipe reduzida / mau momento" | Seção 5 — Objeções | 🔴 Alta |
| 3 | **Objeção de concorrente** — "estou cotando com outro" | Seção 5 — Objeções | 🔴 Alta |
| 4 | **Objeção de crença** — "já tentei consultoria / já tentei IA / não funcionou" | Seção 5 — Objeções | 🔴 Alta |
| 5 | **Ancoragem de preço** — script de apresentação do preço no momento certo | Seção 3 — SPIN | 🟡 Média |
| 6 | **Cadência de follow-up** — sequência completa dia a dia após call | Seção 4 — Cadências | 🟡 Média |
| 7 | **Reativação de base fria** — script específico para leads que não fecharam | Seção 4 — Cadências | 🟡 Média |
| 8 | **Handoff interno** — o que passa de Lucas → Victor → Hugo | Seção 6 — Handoff | 🟡 Média |
| 9 | **KPIs semanais consolidados** — painel do Lucas | Seção 7 — KPIs | ⚪ Baixa |
| 10 | **Regras IA/Humano** — o que o copiloto faz vs. decide o vendedor | Seção 8 — IA | ⚪ Baixa |
