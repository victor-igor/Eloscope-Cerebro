# Cobertura de Entrega — 6OS

**Status:** v1.1 — alinhada ao sprint 18/04/2026.
**Uso:** gap-check antes de vender. Matriz **fase × dimensão** — cada célula aponta pro arquivo/seção que cobre aquele pedaço. Célula vazia = gap documentado que precisa ser resolvido antes do próximo deal ou aceito explicitamente.
**Atualização:** toda vez que um template-filho mudar estrutura, este arquivo revalida. Toda vez que `Oferta_Padrao.md` ganhar nova versão, este arquivo é revisitado.

## Princípio

O 6OS se sustenta em **5 dimensões de entrega** que o cliente enxerga (e cobra):

1. **Proposta de valor** — o que promete e por que vale o preço
2. **Processo de entrega** — como a promessa sai do papel (entregáveis + donos + gates)
3. **Cronograma** — quando cada coisa acontece
4. **Tempo (por ferramenta)** — transparência de esforço pra justificar preço e planejar ops
5. **Objeções** — rebatida pronta pra o que o cliente vai questionar

Toda venda tem que ter cobertura explícita das 5 × 3 fases = **15 células**. A matriz abaixo prova que nenhuma está vazia.

## Matriz principal — fase × dimensão

| Fase ↓ / Dimensão → | Proposta de valor | Processo de entrega | Cronograma | Tempo (por ferramenta) | Objeções |
|---|---|---|---|---|---|
| **Fase 1 — Diagnóstico (7–10d)** | [`Proposta_Valor_Template.md` §VPC por vertical](../templates/Proposta_Valor_Template.md#vpc-por-vertical-q2) → promessa-âncora "mapa do funil em 10 dias" | [`Processo_Entrega_Template.md` §Fase 1](../templates/Processo_Entrega_Template.md#fase-1--diagnóstico) — 8 entregáveis numerados 1.1–1.8, donos + critério de aceite | [`Cronograma_Cliente_Template.md` §Sem 0–2](../templates/Cronograma_Cliente_Template.md) — Gantt com 5d úteis + buffer 2d | [`Tempo_Template.md` §Tabela A linha Fase 1](../templates/Tempo_Template.md) — 20–30h Eloscope, 4–8h cliente | [`Objecoes_Matriz_Template.md` §Categoria Timing + Ceticismo IA](../templates/Objecoes_Matriz_Template.md) — "não tenho tempo pra mapear", "já sei minha dor" |
| **Fase 2 — Estruturação (6–8s)** | [`Proposta_Valor_Template.md` §VPC por vertical](../templates/Proposta_Valor_Template.md#vpc-por-vertical-q2) → "playbook aprovado + agente rodando" | [`Processo_Entrega_Template.md` §Fase 2](../templates/Processo_Entrega_Template.md#fase-2--estruturação) — 9 entregáveis 2.1–2.9, gate formal playbook | [`Cronograma_Cliente_Template.md` §Sem 3–8](../templates/Cronograma_Cliente_Template.md) — marcos semanais + dependência WABA 5d | [`Tempo_Template.md` §Tabela A linha Fase 2 + Tabela B setup](../templates/Tempo_Template.md) — 60–130h Eloscope setup | [`Objecoes_Matriz_Template.md` §Categorias Preço, Autoridade, Risco técnico](../templates/Objecoes_Matriz_Template.md) — "caro demais", "IA não entende meu negócio", "meu vendedor resiste" |
| **Fase 3 — Acompanhamento (mensal contínuo)** | [`Proposta_Valor_Template.md` §Gain creators](../templates/Proposta_Valor_Template.md#vpc-por-vertical-q2) → "review mensal + ajuste" | [`Processo_Entrega_Template.md` §Fase 3](../templates/Processo_Entrega_Template.md#fase-3--acompanhamento) — 5 entregáveis 3.1–3.5, cadence semanal + mensal | [`Cronograma_Cliente_Template.md` §Sem 9+](../templates/Cronograma_Cliente_Template.md) — rito mensal recorrente | [`Tempo_Template.md` §Tabela B mensal operação](../templates/Tempo_Template.md) — 10–20h/mês Beta, 15–25h Real | [`Objecoes_Matriz_Template.md` §Categoria Concorrência + Timing](../templates/Objecoes_Matriz_Template.md) — "posso fazer internamente", "quando cancelo?" |

## Matriz secundária — dimensões de contrato (não-fase)

Cobre o que não é por-fase mas aparece em toda proposta:

| Dimensão | Arquivo / Seção | Observação |
|---|---|---|
| **Preço** | [`Custos_Stack_Template.md` §Tabela Beta + Real](../templates/Custos_Stack_Template.md) | Range (não negociação) |
| **Stack técnico** | [`Custos_Stack_Template.md` §Stack canônico](../templates/Custos_Stack_Template.md#stack-canônico-6os) | n8n + OpenClaw + Supabase + WABA |
| **Custo direto do cliente** | [`Custos_Stack_Template.md` §Custos cliente direto](../templates/Custos_Stack_Template.md) | Meta, Vercel, Clerk — transparente |
| **SLA / Garantias** | [`Proposta_Lead_Template.md` §10 Garantias](../templates/Proposta_Lead_Template.md#10-garantias--sla) | Diagnóstico 50% devolução, anti-lock-in |
| **LGPD / DPA** | [`Proposta_Lead_Template.md` §10 + `Oferta_Padrao.md` §Regras invariantes](../docs/Oferta_Padrao.md#regras-invariantes-da-oferta) | Cláusula DPA + RLS + guardrails |
| **Anti-lock-in** | [`Oferta_Padrao.md` §Regras invariantes #5](./Oferta_Padrao.md#regras-invariantes-da-oferta) | Cliente leva playbook e workflows |
| **Fidelidade mínima** | [`Oferta_Padrao.md` §Regras invariantes #7](./Oferta_Padrao.md#regras-invariantes-da-oferta) | 3 meses (Beta e Real) |

## Cobertura por versão (caminho)

Cada coluna deve estar integralmente coberta pelos templates. Qualquer "não cobre" = gap.

| Versão | Proposta de valor | Processo | Cronograma | Tempo | Objeções | Custos | Stack |
|---|---|---|---|---|---|---|---|
| 🅰️ **Diagnóstico standalone** | ✅ VPC-Template (promessa de "mapa em 10d") | ✅ Processo-Template §Fase 1 | ✅ Cronograma-Template (sem 0-2) | ✅ Tempo-Template Fase 1 | ✅ Objeções-Template (top-3 = timing, ceticismo, já-sei-minha-dor) | ✅ Custos-Template §Diagnóstico isolado (R$ 1.200) | ✅ n8n + OpenClaw (sem WABA ainda) |
| 🅱️ **6OS Beta** | ✅ VPC-Template 15 células (3 caminhos × 5 verticais) | ✅ Processo-Template §Fase 1+2+3 completas | ✅ Cronograma-Template Gantt 8 semanas | ✅ Tempo-Template setup + mensal | ✅ Objeções-Template 6 categorias | ✅ Custos-Template §Beta setup R$ 2-3k + R$ 1,5k/mês | ✅ Stack canônico completo, sem 7D |
| 🅾️ **6OS Real** | ✅ VPC-Template (mesma promessa + "integrado ao seu CRM") | ✅ Processo-Template §Fase 2 com 7C + 7D | ✅ Cronograma-Template + 2 semanas extra | ✅ Tempo-Template §Tabela B Real + 7D | ✅ Objeções-Template + "vale o 2x de preço?" (risco técnico) | ✅ Custos-Template §Real setup R$ 4-6k + R$ 3-5k/mês | ✅ Stack + Next.js + Tailwind + shadcn + Clerk |

## Cobertura por vertical Q2

VPC tem 5 verticais × 3 caminhos = **15 células obrigatórias**. Dimensões transversais (processo, cronograma, tempo, objeções, custos) são as mesmas, só a promessa e o VPC mudam por vertical.

| Vertical Q2 | VPC específico | Objeções específicas | Case-referência planejado |
|---|---|---|---|
| **Imobiliárias** | [`Proposta_Valor_Template.md` §Vertical 1](../templates/Proposta_Valor_Template.md) | "corretor resiste a IA", "lead frio demora" | Jean Imobiliária (a validar) |
| **Energia solar** | [`Proposta_Valor_Template.md` §Vertical 2](../templates/Proposta_Valor_Template.md) | "ciclo é longo demais", "projeto técnico não cabe em chat" | Enertelles (pipeline) |
| **Clínicas multi-profissionais** | [`Proposta_Valor_Template.md` §Vertical 3](../templates/Proposta_Valor_Template.md) | "sigilo médico", "paciente não confia em IA" | Dra Fran / ReabilitaCao (cliente ativo) |
| **Consultorias / Educação** | [`Proposta_Valor_Template.md` §Vertical 4](../templates/Proposta_Valor_Template.md) | "minha venda é consultiva demais pra IA" | Marcos Consultrain / Innover (novos) |
| **Agências de marketing** | [`Proposta_Valor_Template.md` §Vertical 5](../templates/Proposta_Valor_Template.md) | "quero white-label, não 6OS" (fora de escopo direto) | Bravo Agência (classificar caminho separado) |

## Gaps conhecidos e ação

Dessas 15 células VPC, nenhuma está literalmente vazia mas algumas têm nível de maturidade diferente:

| Gap | Célula | Impacto | Ação | Prazo |
|---|---|---|---|---|
| **Case-prova real** | Verticais Solar, Consultoria, Agência | Média — cliente pede "mostra case igual ao meu" | Fechar Beta com 1 lead de cada vertical nos próximos 90d | 2026-07-15 |
| **Linguagem de VPC específica** | Educação / Consultoria overlap | Baixa — VPC genérico funciona, mas separar faria proposta mais afiada | Quebrar vertical 4 em 4a (Consultoria) + 4b (Educação) | Próximo sprint produto |
| **Agência de marketing ≠ Q2 direto** | Vertical 5 | Alta — 6OS vende via white-label, não direto, e regra invariante #8 proíbe criar pacote novo sem aprovação Lucas+Victor | Tratar white-label em doc separado (`Oferta_WhiteLabel.md`, a criar) | Pré-venda próximo lead agência |
| **Cronograma Fase 3 genérico** | Todas as versões | Baixa — template tem rito mensal mas não detalha variação por vertical | Aceito — customização no discovery basta | — |
| **Objeção "WABA approval demora 5d"** | Fase 2 Imobiliária / Solar | Baixa — já mitigada em cronograma (5d paralelos a playbook) | Aceito — cronograma já resolve | — |

## Cobertura por arquivo (mapa reverso)

Qual arquivo cobre quais células da matriz principal:

| Arquivo | Dimensões cobertas | Fases cobertas |
|---|---|---|
| `Proposta_Valor_Template.md` | Proposta de valor | 1, 2, 3 |
| `Processo_Entrega_Template.md` | Processo de entrega | 1, 2, 3 |
| `Cronograma_Cliente_Template.md` | Cronograma | 1, 2, 3 |
| `Tempo_Template.md` | Tempo | 1, 2, 3 + setup + mensal |
| `Objecoes_Matriz_Template.md` | Objeções | 1, 2, 3 + contrato |
| `Custos_Stack_Template.md` | Custos + Stack (transversal) | — (dimensão transversal) |
| `Proposta_Lead_Template.md` | Todas (consolida em 2 páginas) | 1, 2, 3 |
| `Lead_Profile_Template.md` | — (dossiê, não venda) | — |
| `Oferta_Padrao.md` | Todas (árvore navegável) | 1, 2, 3 |

## Regra de auditoria

Antes de enviar **qualquer** proposta ao cliente, o vendedor abre este arquivo e confere:

1. [ ] Todas as 15 células da matriz principal têm link resolvível
2. [ ] O caminho escolhido (A/B/C) está coberto integralmente na matriz secundária por versão
3. [ ] O vertical do lead aparece em `Proposta_Valor_Template.md` com célula específica preenchida
4. [ ] As 3 objeções mais prováveis do vertical estão em `Objecoes_Matriz_Template.md`
5. [ ] Nenhum gap da tabela "Gaps conhecidos" bloqueia esta venda em particular

Se **qualquer** item falhar = não vende. Trava na pre-sales até resolver.

## Changelog

- **2026-04-19 (v1.1):** primeira versão consolidada pós-sprint 18/04. Estrutura 3 fases × 5 dimensões = 15 células. Matriz secundária (preço, stack, LGPD, anti-lock-in, SLA) separada. Cobertura por versão e por vertical explicitada. 5 gaps conhecidos registrados com prazo.
