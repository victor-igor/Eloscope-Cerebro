# Enertelles — Entregável Técnico (interno)

> **Audiência:** Lucas + Victor (Eloscope) · não enviar pro cliente
> **Propósito:** alinhar **como** vamos executar as 4 semanas de setup, com stack, divisão de responsabilidades e riscos
> **Status:** rascunho pra validação Lucas + Victor
> **Última atualização:** 25/04/2026

---

## 1. Filosofia técnica do projeto

**Não automatizar antes de validar.** A primeira fase é mapear, instrumentar e gerar inteligência sobre o processo real. **IA de atendimento (SDR no WhatsApp) só entra depois** — automatizar algo que ainda não sabemos se funciona é rasgar dinheiro.

**3 princípios:**
1. **Botox, não cirurgia.** Marca da Enertelles tem 5 anos de mercado e lembrança em Catanduva. Não rebrandar — ajustar (cores, símbolos, identidade visual atualizada) mantendo o que já funciona.
2. **Stack mínima viável.** Openclaw + n8n + ChatGPT API + CRM básico nosso. Sem inventar ferramenta, sem desenvolver do zero o que já existe.
3. **Inteligência antes de automação.** Openclaw analisa conversas → gera feedback via webhook → vendedor humano usa. Automação SDR é Fase 2.

---

## 2. As 4 frentes de entrega

### Frente 1 — Botox de marca

**Objetivo:** atualizar identidade visual da Enertelles pra alinhar com público-alvo de ticket alto, sem perder lembrança/equity da marca atual.

**Como vamos executar:**

1. **Discovery via Openclaw conversando com a Enertelles** (Telles + equipe)
   - Openclaw faz entrevistas estruturadas (chat ou áudio transcrito)
   - Levanta: história da marca, símbolos atuais, percepção do cliente, momentos-chave, casos de sucesso, valores
   - **Sem reunião manual longa** — Openclaw conduz, equipe responde quando puder
2. **Análise de ICP via conversas históricas**
   - Openclaw lê WhatsApp/e-mails históricos
   - Identifica perfil de quem fecha vs quem só consulta
   - Output: ICP refinado com base em dados reais (não suposição)
3. **Desenho do botox**
   - Paleta de cores ajustada (mantém base, refina contraste/aplicação)
   - Símbolos atualizados (logo refinada se necessário, ícones, padrões visuais)
   - Tipografia + grid de aplicação
   - Pequeno guia de uso (1 página, não brandbook completo)

**Ferramentas:**
- Openclaw (entrevista + análise ICP)
- Figma ou Canva (desenho da identidade)
- ChatGPT API (apoio na geração de variações)

**Entrega:** mini-guia visual (PDF + arquivos editáveis) na semana 2

---

### Frente 2 — Site + landing pages

**Objetivo:** site profissional novo + landing pages de SEO/GEO por cidade × serviço.

**Como vamos executar:**

1. **Estrutura mínima do site (5–8 páginas core)**
   - Home, Sobre, Serviços, Cases/Portfolio, Contato
   - Páginas de serviço: Solar Residencial, Solar Comercial, Manutenção
2. **Landing pages SEO/GEO**
   - "Energia solar [cidade]" (Catanduva, Atibaia, cidades vizinhas)
   - "Solar para [segmento]" (residencial, comercial, indústria)
   - Páginas otimizadas pra Google + buscas IA (ChatGPT, Perplexity)
3. **Integração com CRM**
   - Formulários do site → CRM via webhook
   - WhatsApp click-to-chat com tag de origem
4. **Stack:**
   - Frontend: Astro ou Next.js (decidir Lucas+Victor)
   - Hosting: Vercel ou Hostinger (~R$80/mês cliente paga direto)
   - CMS leve pra páginas SEO se necessário (Tina ou Notion-as-CMS)
   - Conteúdo das páginas SEO: gerado com Claude/ChatGPT, revisado humano

**Entrega:** site no ar + 5 landing pages SEO/GEO no fim da semana 3

---

### Frente 3 — Playbook comercial + script de vendas

**Objetivo:** estruturar como o vendedor da Enertelles deve abordar, qualificar, contornar objeção e fechar.

**Como vamos executar:**

1. **Discovery do processo atual**
   - Conversa estruturada com Telles + Rafaela + vendedor que vai sair
   - Mapear: como lead chega, como é tratado hoje, onde trava, onde fecha
2. **Análise de conversas históricas via Openclaw**
   - Identifica padrões de objeção mais comuns
   - Identifica linguagem que converte vs linguagem que afasta
   - Identifica vetor de confiança (marca / script / relacionamento)
3. **Construção do playbook usando AIOX-master + Claude Code + nosso conhecimento**
   - Script de **abordagem** (primeira mensagem WhatsApp/ligação)
   - Script de **qualificação** (perguntas-chave: BANT adaptado pra solar)
   - Script de **objeções** (preço, prazo, concorrente, momento)
   - Script de **follow-up** (cadência por estágio)
   - Script de **pós-venda + indicação** (reativar base 500)
4. **Treinamento da equipe** (semana 4)
   - Sessão prática com vendedor + Telles
   - Role-play de chamadas
   - Q&A

**Entrega:** playbook (PDF + cards rápidos) na semana 3 + treinamento na semana 4

---

### Frente 4 — Stack operacional (n8n + Openclaw + CRM)

**Objetivo:** infraestrutura mínima rodando — CRM com pipeline visual, Openclaw analisando conversas, n8n conectando os pedaços.

**Arquitetura:**

```
[WhatsApp Enertelles] ──┐
                        ├─→ [n8n Webhook] ──→ [Openclaw análise] ──┐
[Site → Formulários] ───┤                                          │
                        │                                          ↓
[Mídia paga (Alex)] ────┘                                  [Webhook feedback]
                                                                    │
                                                                    ↓
                                                              [CRM Eloscope]
                                                                    │
                                                                    ↓
                                                              [Dashboard]
```

**Componentes:**

1. **n8n simples pra Enertelles** (não a stack completa de IA)
   - Workflow 1: lead chega (WhatsApp/site/mídia) → grava no CRM com origem
   - Workflow 2: lead muda de estágio → notifica vendedor + atualiza dashboard
   - Workflow 3: conversa termina → envia transcrição pro Openclaw analisar
   - **Hospedagem:** n8n self-hosted ou n8n.cloud (decidir custo)
2. **Openclaw como cérebro analítico**
   - Recebe transcrições via webhook
   - Analisa: padrões de objeção, fator confiança, qualidade do atendimento
   - Devolve via webhook → vendedor recebe feedback no CRM ("nessa conversa o cliente sinalizou X, próxima abordagem deveria Y")
   - **Não responde lead automaticamente** — só gera insight pro humano
3. **CRM (versão básica nossa)**
   - Pipeline 6 etapas: lead → qualificação → visita → proposta → negociação → fechamento
   - Campos custom: origem, score, fator de confiança ativo, última interação
   - Atribuição de venda (essencial pra calcular comissão Eloscope)
4. **Dashboard**
   - Métricas core: leads, conversão por etapa, ticket médio, fonte de origem
   - Aceesso Lucas + Victor + Telles + Alex (read-only)

**Stack escolhida:**
- n8n (workflow)
- Openclaw (análise + feedback)
- ChatGPT API (consumo de Openclaw para análise profunda)
- Supabase ou Postgres simples (CRM data)
- Frontend CRM: nosso (já temos base)

**Entrega:** stack rodando + 1 conversa real analisada end-to-end na semana 3

---

### Frente 5 (futuro, NÃO incluso agora) — IA de atendimento

**Por que não agora:** automatizar resposta de lead antes de validar o processo é rasgar dinheiro. Risco de IA enviar mensagem errada, perder lead bom, prejudicar marca. **Aguardamos 60–90 dias** com processo manual rodando + Openclaw gerando feedback. Quando provarmos:
- O script funciona (vendedor humano fechando com ele)
- Os padrões de objeção são previsíveis
- O fator de confiança está mapeado

…**aí** ativamos SDR no WhatsApp. Não antes. Conversa com Telles sobre upgrade só após Mês 2 de operação rodando, com dados na mão.

---

## 3. Stack consolidado

| Ferramenta | Função | Quem paga | Custo estimado |
|------------|--------|-----------|----------------|
| **Openclaw** | Discovery, análise de conversas, feedback | Telles direto | ~R$ 80/mês |
| **n8n** | Workflows entre WhatsApp/site/CRM/Openclaw | Telles direto (cloud) ou Eloscope (self-hosted) | R$ 0–100/mês |
| **ChatGPT API** | Consumo via Openclaw + n8n | Telles direto | R$ 50–150/mês |
| **CRM Eloscope** | Pipeline + atribuição + comissão | Eloscope | (incluso) |
| **Hosting site** | Vercel/Hostinger | Telles direto | ~R$ 80/mês |
| **WhatsApp API** | Só na Fase 2 (IA SDR) | Telles direto | R$ 300–1.500/mês |
| **AIOX-master + Claude Code** | Construção interna do playbook | Eloscope | (incluso) |
| **Figma/Canva** | Design botox de marca | Eloscope | (incluso) |

**Total infra Telles paga direto:** ~R$ 200/mês (Fase 1)

---

## 4. Divisão de responsabilidades

| Frente | Lucas | Victor | Hugo |
|--------|-------|--------|------|
| Botox de marca | Discovery via Openclaw + supervisão | Aprovação visual final | — |
| Site + landing pages | Estrutura + SEO/GEO conteúdo | Revisão + aprovação | Setup técnico (deploy, domínio, integrações) |
| Playbook + script | Construção (AIOX + Claude Code) + treinamento | Revisão + role-play | — |
| Stack operacional (n8n + Openclaw + CRM) | Configuração workflows + integração | — | **Lead técnico** — n8n self-host, webhooks, CRM deploy |
| Discovery (Telles + equipe) | Conduzir | — | — |
| Relacionamento Alex/Telles | Conduzir | Suporte estratégico | — |

**Bloqueio identificado:** Hugo está atrasado com SDR Morgana e 7 perguntas técnicas pendentes. Antes de prometer 4 semanas de implementação, **alinhar capacidade do Hugo com Victor**.

---

## 5. Cronograma 4 semanas (detalhado)

### Semana 1 — Discovery + decisões de escopo
- [ ] Acesso a conversas históricas Enertelles (WhatsApp, e-mails)
- [ ] Openclaw entrevistando Telles + Rafaela + vendedor (sobre marca + processo)
- [ ] Audit base 500 clientes
- [ ] Decisão de escopo do site (5 ou 8 páginas? quais cidades pra SEO?)
- [ ] Decisão de stack (n8n cloud vs self-host, hosting site)
- [ ] Setup ambientes: n8n, Openclaw, CRM Eloscope, repo do site

### Semana 2 — Site + marca + CRM básico
- [ ] Botox de marca finalizado (paleta, símbolos, mini-guia)
- [ ] Site core (5 páginas) em staging
- [ ] CRM básico configurado (pipeline 6 etapas, campos custom)
- [ ] Playbook v1 rascunhado (abordagem + qualificação + objeções)
- [ ] Análise inicial Openclaw das conversas históricas → primeiros padrões

### Semana 3 — IA preditiva + landing pages + integração
- [ ] Site no ar (produção, domínio configurado)
- [ ] 5 landing pages SEO/GEO publicadas
- [ ] n8n workflows ativos (lead → CRM → Openclaw → feedback)
- [ ] Openclaw analisando conversa real end-to-end
- [ ] Dashboard básico funcionando
- [ ] Playbook v2 (com insights da análise Openclaw)
- [ ] Relatório do **fator de confiança** identificado

### Semana 4 — Treinamento + handoff
- [ ] Treinamento equipe comercial (vendedor + Telles)
- [ ] Role-play de chamadas
- [ ] Documentação operacional pro vendedor
- [ ] Handoff stack (Telles tem acessos, sabe operar o básico)
- [ ] Review de mês 1 + planejamento mês 2

---

## 6. Riscos técnicos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Telles atrasar acesso a conversas históricas | Alta | Alto (atrasa Openclaw) | Cláusula contratual: SLA de 5 dias úteis pra fornecer acesso |
| Hugo sobrecarregado (SDR Morgana ainda em aberto) | Alta | Alto (Frente 4 trava) | Conversar com Victor antes de assinar — alocar Hugo nominalmente |
| Openclaw não conseguir ler todas conversas (formato/permissão) | Média | Médio | Plano B: subset de conversas + entrevista manual complementar |
| n8n instável em volume alto | Baixa | Médio | Self-host com monitoramento; n8n.cloud se preocupação |
| Site SEO demora a indexar (3–6 meses) | Alta | Baixo (esperado) | Setar expectativa com Telles: SEO/GEO é colheita longa |
| Botox de marca rejeitado pelo Telles | Média | Médio | Discovery profundo via Openclaw + apresentação iterativa |
| Vendedor da Enertelles resistir ao playbook | Média | Alto | Treinamento com role-play + envolver Telles como sponsor |

---

## 7. Decisões pendentes pra fechar com Victor

1. **Stack do site:** Astro vs Next.js vs WordPress? (default: Astro pela velocidade e SEO)
2. **CMS:** precisa? Ou conteúdo estático versionado em git? (default: estático + git)
3. **n8n:** cloud ou self-host? (default: self-host na nossa infra, +R$50/mês opex)
4. **Hosting CRM:** Supabase ou nossa infra? (default: Supabase pelo speed)
5. **Hugo entra ou contratamos freela pra Frente 4?** Bloqueador real
6. **Quem assume a frente de design (botox)?** Freela ou Victor?
7. **AIOX-master + Claude Code:** quais agents específicos vamos usar (Aria/architect? Dex/dev? Uma/ux-design)?

---

## 8. Próximos passos

1. **Lucas + Victor revisam este documento** — bater martelo nas decisões pendentes
2. **Confirmar capacidade Hugo** ou backup
3. **Estimar horas reais** das 4 semanas (cabe em 4 ou precisa esticar pra 5–6?)
4. **Validar margem do projeto:**
   - Receita Mês 1: R$ 4.497 setup
   - Custo Mês 1 (estimativa): horas Lucas + horas Victor + horas Hugo + ferramentas
   - Margem real do setup → se for muito apertada, renegociar com Telles ou aceitar como CAC de longo prazo
5. **Após alinhamento:** atualizar `proposta-enertelles.md` se algo mudar de escopo
6. **Pasta `entregaveis/`** dentro de `enertelles/` pra organizar artefatos das 4 semanas (botox, site, playbook, screenshots)

---

*Lucas Negreiro · Eloscope · 25/04/2026*
