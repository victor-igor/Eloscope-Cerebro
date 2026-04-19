# Eloscope Elo OS

> Status: 🔨 Em construção — fase beta

## O que é
Sistema operacional de vendas para PMEs — implementa IA no processo comercial (diagnóstico + playbook + IA copiloto/assistida + acompanhamento mensal) e acompanha resultado. Não é consultoria nem ferramenta: implementa e opera.

## Posicionamento
**Não é:** consultoria (orienta e vai embora), assessoria (guia enquanto você faz), ferramenta SaaS (automatiza sem estratégia).
**É:** equipe de resultado terceirizada — implementa, opera com IA, acompanha todo mês.
**Framing correto:** "Seu comercial vai converter mais" (resultado) — não "implementamos IA" (mecanismo).

## Responsáveis
- **Victor Igor:** Estratégia, marketing, processos, slides/conteúdo
- **Lucas:** Comercial, fechamento, relacionamento com cliente
- **Hugo:** Implementação técnica, automações n8n, IA

## Papéis a definir (reunião pendente)
- Quem lidera diagnóstico com cliente
- Quem cuida de implementação técnica por cliente
- Quem é responsável por contratos e financeiro
- Quem mantém o dashboard mensal

## Quadrante Foco (definido 18/04)
**Q2 — Serviço com time comercial** (imobiliária, energia solar, clínica multi, consultoria estruturada)
Motivo: já tem time comercial, já investe em tráfego e mesmo assim não escala — gargalo é converter o que chega, não gerar mais lead.

## Cliente Ideal
PME +R$80k/mês com demanda existente, base de contatos parada, problema real de conversão ou reativação. Vende serviço ou produto (B2B ou B2C), tem ao menos 1 vendedor ativo. **NÃO é** para quem precisa gerar tráfego do zero.

## Promessa Mãe (definida 18/04)
"O Elo OS estrutura o processo comercial da sua empresa, implementa IA que opera junto com seu time no dia a dia e acompanha resultado mês a mês — para você converter mais dos leads que já chegam, sem depender de esforço manual."

## Pricing Beta — DEFINIDO (19/04/2026)
Ver seção "Precificação — Definitiva" abaixo.

## Entregáveis por Fase
| Fase | Período | Entregáveis |
|------|---------|-------------|
| 01 Diagnóstico | Mês 1 | Relatório diagnóstico · Mapa de gargalos · Análise da base · Prioridades ranqueadas |
| 02 Estrutura | Mês 1-2 | Playbook · Scripts e cadências · IA Copiloto · IA Assistida · Lead scoring · Análise base reativação · Dashboard inicial |
| 03 Acompanhamento | Mensal | 1 reunião mensal · Dashboard atualizado · Ajuste de estratégia · Evolução contínua |

## Operação Detalhada por Fase

### Fase 01 — Diagnóstico

**Fluxo:**
1. **Formulário de onboarding** (cliente preenche antes da reunião)
   - Nome, segmento, ticket médio do serviço
   - Volume de leads/mês e canais de captação
   - Tem CRM? Qual? (→ avaliar integração via Openclaw/Paperclip)
   - Tem base de contatos histórica? Onde está?
   - Quantos vendedores no time e como trabalham hoje
   - Taxa de conversão estimada (se souber)
   - Ciclo médio de venda

2. **Reunião estratégica ao vivo** (aprofundamento)
   - **Bloco 1 — Operação atual:** processo do lead até o fechamento · canais de comunicação com o lead (WhatsApp, e-mail, ligação)
   - **Bloco 2 — CRM:** se tem → mapear funil, relatórios, histórico de leads. Se não tem → mapear operação manual (planilha, grupos WPP) → sugerir CRM; cliente pode optar por não adotar
   - **Bloco 3 — Base e histórico:** leads que não fecharam (tem registro?), clientes antigos (tem contato?), potencial de reativação
   - **Bloco 4 — Dores e gargalos:** onde perde mais (primeiro contato? follow-up? fechamento?), principais objeções, o que o time mais reclama
   - **Bloco 5 — Captação:** de onde vêm os leads, tráfego pago (quanto investe)

**Entregáveis:**
- Relatório diagnóstico (documento estruturado)
- Mapa de gargalos priorizados
- Análise da base de contatos (potencial de reativação)
- Plano de prioridades ranqueadas para Fase 2

---

### Fase 02 — Estrutura (Playbook + IA)

**Playbook completo — foco PME prestadora de serviço:**
- Scripts de primeiro contato (lead frio · lead quente · lead por indicação)
- Cadências por tipo de lead (sequência de dias + canais)
- Scripts de follow-up (1º, 2º, 3º, 4º contato)
- Tratamento de objeções (preço · tempo · "vou pensar" · concorrente)
- Script de reativação de base
- Script de fechamento
- Perguntas de qualificação (SPIN adaptado para serviço)

**IA Copiloto (stack: Openclaw + Paperclip):**
- Conecta ao WhatsApp do vendedor
- Lê conversas em tempo real
- Entrega: sugestão de próximo passo · alerta de esfriamento · análise por lead · relatório por vendedor

**IA Assistida / Dashboard (stack: Openclaw + Paperclip):**
- Dashboard da Eloscope com dados do cliente
- Lead scoring — quem priorizar hoje
- Análise da base para reativação
- Relatório de performance comercial do time

**Stack confirmado:** Openclaw · Paperclip · n8n (Hugo)

---

### Fase 03 — Acompanhamento Mensal

⚠ A detalhar na reunião com Lucas e Hugo:
- [ ] O que cobre a reunião mensal (só métricas ou também ajuste de playbook/scripts?)
- [ ] Quem da Eloscope participa de cada reunião mensal
- [ ] Como o dashboard é alimentado (automático via integração ou manual pelo cliente?)

---

### Pendências técnicas (reunião com Hugo)

- [ ] **Openclaw e Paperclip:** Hugo já domina ou vai aprender durante os primeiros clientes?
- [ ] **Conexão WhatsApp:** o vendedor do cliente precisa instalar algo ou conecta sem app adicional?
- [ ] **Dashboard:** alimentado automaticamente via integração (Openclaw/Paperclip) ou cliente exporta dados?
- [ ] **CRM com integração:** quais CRMs Hugo já sabe integrar via n8n?

## Dores → Analgésicos (mapeamento direto)

| Dor | Analgésico |
|-----|-----------|
| Leads chegam mas não convertem — time aborda igual todo mundo, sem prioridade | IA Copiloto + Playbook — script por lead, alerta esfriamento, próximo passo automático |
| Base de clientes parada — contatos que já compraram ou quase compraram sem follow-up | IA Assistida + Campanha de Reativação — análise, priorização automática, cadência configurada |
| Time comercial sem processo nem dados — cada vendedor age do seu jeito | Playbook + Dashboard de Métricas — processo padronizado, gestor vê tudo em tempo real |
| Follow-up manual e inconsistente — depende da memória do vendedor | Cadências Automatizadas — sistema dispara próximo contato, vendedor só executa |

## Causa Raiz

"Não é falta de produto. Não é falta de lead. É falta de **sistema** — processo, dados e IA trabalhando juntos para converter e reativar."

## Ecossistema Eloscope (contexto maior)

O Elo OS é o produto core. O ecossistema completo:

| Camada | Produtos |
|--------|---------|
| **Educação** (atrai e qualifica leads) | Conteúdo (Instagram/LinkedIn) · Curso IA low ticket · Newsletter |
| **Captura** (leads qualificados) | Diagnóstico gratuito · Landing Pages · Reativação de base |
| **Produtos** | Treinamento (equipe com IA) · **⭐ Elo OS (foco agora)** · AI Squads (done-for-you) |

## Glossário dos Termos

| Termo | Definição |
|-------|-----------|
| **Elo OS** | Sistema operacional de vendas — o método proprietário da Eloscope |
| **IA Copiloto** | IA que age junto com o vendedor em tempo real — sugestões, scripts, alertas |
| **IA Assistida** | IA que processa dados e entrega insights — humano decide o que fazer |
| **Lead Scoring** | Ranqueamento de leads por probabilidade de fechar — priorizar onde o time atua |
| **Playbook** | Documento operacional com scripts, cadências e processos — o manual do vendedor |
| **Reativação** | Trabalhar base parada — leads que não fecharam + clientes antigos |

## Valores (como trabalhamos)

- **Resultado:** Métricas antes de narrativas. O que mudou para o cliente? Se não tem número, não tem resultado.
- **Clareza:** IA complexa explicada de forma simples. Sem hype. Sem promessa vazia. O cliente entende o que está comprando.
- **Parceria:** Não somos fornecedores. Somos o time de AI do negócio do cliente. Ganhamos quando eles ganham.

## Gaps Críticos (a definir antes de fechar primeiro cliente)
- [ ] Escopo exato — o que está incluso em cada fase (horas, reuniões, SLA)
- [ ] Escopo negativo — o que NÃO está incluso
- [ ] Promessa mensurável — qual KPI o cliente pode esperar
- [ ] Garantia / risco reverso — o que acontece se não funcionar
- [ ] Contratos e pagamento — responsável e estrutura

## Stack de IA
⚠ A definir na reunião — ferramentas específicas por função (n8n confirmado para Hugo, resto indefinido)

## Meta (revisada 18/04)
R$15k MRR até abril de 2027 — 10 clientes ativos a R$1.500/mês. Base para escala.
Marcos: 60 dias → 2-3 beta · 6 meses → 5-6 clientes · 12 meses → 10 clientes.

## Forecast Detalhado (funil-vendas.md)
| Meta | Número | Receita |
|------|--------|--------|
| Clientes fechados (abril–junho) | 2 clientes | R$4k setup + R$3k/mês |
| MRR ao final de junho | R$3.000 (2 × Starter) | — |
| MRR ao final de setembro | R$7.500 (5 clientes) | — |
| MRR alvo (12–18 meses) | R$78.000 (26 clientes × R$3k/real) | ~R$1M/ano |

## Métricas do Funil (rastrear semanalmente — Lucas)
| Métrica | Meta beta |
|---------|----------|
| Leads prospectados/semana | 10–15 |
| Taxa de resposta (outbound) | >20% |
| Taxa de qualificação | >60% |
| Taxa de reunião | >70% |
| Taxa de proposta→fechamento | >30% |
| Tempo médio do ciclo (1º contato → fechamento) | <14 dias |

## Deals em Risco — Quando Victor entra
| Situação | Ação |
|---------|------|
| Deal >14 dias sem avanço de estágio | Lucas escalona para Victor |
| Lead pediu proposta mas não respondeu em 7 dias | Victor entra na conversa |
| Objeção que Lucas não sabe responder | Victor entra na call junto |
| Lead quer negociar preço abaixo do mínimo | Victor decide (não cabe a Lucas) |

## Go-to-Market Beta (próximos 60 dias)
1. Reativação de leads que não fecharam com a Eloscope
2. Upsell para clientes Eloscope ativos
Meta: 2-3 clientes beta. Zero custo de aquisição.

## Oferta Híbrida C — Q2 (estruturada 18/04)
- **Setup:** 7-10 dias úteis
- **Inclui:** Diagnóstico + Playbook + IA Copiloto + IA Assistida + Cadências + Treinamento do time + Trilha educacional pré-gravada + Workshop trimestral ao vivo
- **Não inclui:** Operação diária, licenças, site, novos escopos pós-contrato
- **Cliente precisa no dia 1:** lista de contatos, WhatsApp Business ativo, 1 vendedor dedicado, acesso a métricas

## Precificação — Definitiva (19/04/2026)

### Beta (Parceiro Fundador)
| Plano | Time | Setup | Mensal | Total 3 meses |
|-------|------|-------|--------|----------------|
| **Starter** | 1–2 vend. | R$3.000 | R$1.500/mês | R$7.500 |
| **Growth** | 3–5 vend. | R$3.000 | R$2.500/mês | R$10.500 |
| **Scale** | 6–10 vend. | R$3.000 | R$3.500/mês | R$13.500 |

### Real (após 3 cases)
| Plano | Setup | Mensal |
|-------|-------|--------|
| Starter | R$5.000 | R$3.000/mês |
| Growth | R$5.000 | R$5.000/mês |
| Scale | R$8.000 | R$8.000/mês |

## Promessa Mãe (definitiva — 19/04/2026)
> "Seu time perde venda todo dia por falta de processo e follow-up. O Elo OS instala o sistema comercial completo — processo, IA e acompanhamento mensal. Se nada melhorar em 60 dias, devolvemos R$3.000."

**Decisão:** sem número específico — produto em primeira versão, sem validação ainda. Quando primeiros cases saírem, inserir número real.
**Garantia:** devolução do setup (R$3.000) se nada melhorar em 60 dias.

## Arquivos
- `cerebro/empresa/projetos/sales-os/slides.html` — **21 slides** (atualizado 18/04)
- `cerebro/empresa/projetos/sales-os/ecossistema.html`

## Timeline
| Data | Evento |
|------|--------|
| 17/04/2026 | Produto estruturado, briefing e slides criados (17 slides) |
| 17/04/2026 | Slides reformulados: 20 slides, nova estrutura, pricing em discussão |
| 18/04/2026 | Slide "Por que o Elo OS" criado (slide 7) · total 21 slides |
| 18/04/2026 | Meta revisada: R$15k MRR (não R$1M) · Q2 escolhido · promessa mãe definida |
| 18/04/2026 | Oferta híbrida C Q2 estruturada · Modelos A e B precificados |
| 18/04/2026 | Funil de vendas criado — 3 funis (Outbound/Indicação/Inbound) com SLAs, métricas e alertas |
| Jun/2026 | Meta: 2-3 clientes beta fechados |
| Abr/2027 | Meta: R$15k MRR · 10 clientes |

---
*Atualizado: 19/04/2026*
