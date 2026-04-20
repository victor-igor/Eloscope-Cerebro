# Sales OS — Etapas, Ferramentas, Formulários e Cronograma

**Versão:** 0.1 (draft de trabalho)
**Data:** 18/04/2026
**Uso:** alinhamento interno do time Eloscope para definir escopo, stack e prazos do produto Sales OS antes dos primeiros contratos Beta do quadrante Q2.

---

## Princípio norteador

**Nada de IA ou automação antes do processo comercial estar claro.** A sequência é sempre: diagnóstico → processo → playbook → (gate) → IA / integração / dashboard. Esse gate é o que diferencia a Eloscope de uma agência que vende automação empacotada e é o antídoto ao scope creep que o VPC aponta como risco dominante do Q2.

---

## Visão geral — macro cronograma

| Fase | Etapas | Duração típica | Entregável-chave |
|---|---|---|---|
| Pré-venda | 0 | 2-4 semanas | Contrato assinado |
| Diagnóstico | 1 | 1 semana | Doc de auditoria comercial |
| Processo | 2, 3, 4, 5 | 3-4 semanas | Fluxograma + Playbook |
| Gate | 6 | 2-5 dias | Go / no-go de execução |
| Execução | 7 | 1-4 semanas | Agente / Integração / Dashboard |
| Operação | 8 | contínua | Review mensal + relatórios |
| Upsell | 9 | quando aplicável | Arm web (site, logo, SEO/GEO) |

**Total do fechamento até operar:** 5-8 semanas, dependendo da rota (tem processo / não tem) e do pacote escolhido na Etapa 6.

---

## Etapa 0 — Pré-venda

**Objetivo:** lead Q2 qualificado → contrato assinado.

**Entregáveis:**
- Call de discovery (SPIN)
- Mini-diagnóstico preliminar (gratuito, usado como hook)
- Proposta comercial com pacote escolhido (Lean / Beta / Real)
- Contrato com escopo travado

**Formulários:**
- Qualificação pré-call (lead form)
- Proposta comercial templated
- Contrato padrão

**Ferramentas possíveis:**
- CRM: HubSpot (free tier), Pipedrive, RD Station
- Proposta: Pandadoc, Notion público, Google Docs
- Contrato + assinatura: Clicksign, D4Sign, Pandadoc

**Duração:** 2-4 semanas (ciclo típico Q2 conforme VPC §3).

---

## Etapa 1 — Diagnóstico Comercial

**Objetivo:** mapear o estado atual da operação comercial do cliente.

**Entregáveis:**
- Doc de auditoria (~10-15 páginas) cobrindo canais de aquisição ativos e volume/mês, material de venda existente (playbook, scripts, site), eficácia de conversão por canal e etapa, ticket médio real calculado, mapa do fluxo atual do lead ao fechamento
- Reunião de devolutiva (60 min)

**Formulários:**
- Checklist de auditoria (interno Eloscope)
- Planilha de extração de métricas (canais × volume × conversão × ticket)

**Ferramentas possíveis:**
- Coleta: Google Sheets, Airtable, Notion database
- Análise de ads: acesso direto a Meta Business e Google Ads do cliente
- Análise de conversão: planilha ou Looker Studio conectado
- Entrega: Google Docs, Notion, PDF

**Duração:** 1 semana (pode cair para 3 dias se o cliente já tem dados organizados).

---

## Etapa 2 — Onboarding

**Objetivo:** capturar os dados operacionais do cliente para alimentar as etapas seguintes. Aqui começa oficialmente o contrato.

### Caminho A — Cliente organizado (dados acessíveis)

Formulário estruturado + cliente compartilha credenciais ou relatórios exportados.

### Caminho B — Cliente bagunçado (dados dispersos)

Grupo WhatsApp dedicado com agente OpenClaw que puxa campo por campo conversando, explicando o porquê de cada dado. O onboarding já vira camada educacional.

**Entregáveis:**
- Dataset estruturado com os dados do cliente (canais, volumes, CRM exportado, ticket, time comercial)
- Ata de onboarding assinada para travar o que foi entregue vs. pendente

**Formulários:**
- Formulário de Onboarding (A): ~25 campos estruturados
- Script do Agente OpenClaw (B): fluxo conversacional equivalente ao formulário

**Ferramentas possíveis:**
- Formulário (A): Google Forms, Tally, Typeform, Notion Forms
- Grupo (B): WhatsApp oficial (Meta Business API) + OpenClaw rodando o agente
- Armazenamento: Supabase, Airtable ou Google Sheets como staging

**Duração:** 3-7 dias.

---

## Etapa 3 — Análise e Rota

**Objetivo:** decidir se o trabalho é refinar processo existente (Rota 1) ou construir do zero (Rota 2). Essa decisão afeta prazo e preço.

### Rota 1 — Cliente tem processo rodando

- Mapear fluxo atual (canais → SDR → closer → fechamento)
- Identificar gargalos (onde o lead morre)
- Listar canais fracos (baixa conversão, alto CAC)

### Rota 2 — Cliente não tem processo

- Analisar produto, posicionamento e mercado
- Estudar concorrência (3-5 players Q2 do mesmo segmento)
- Desenhar processo-base Q2 adaptado ao cliente
- Justifica setup mais alto e prazo +1-2 semanas

**Entregáveis:**
- Doc "Mapa do Estado Atual" (Rota 1) ou "Processo-Base Proposto" (Rota 2)
- Lista priorizada de oportunidades

**Ferramentas possíveis:**
- Análise: Notion, Miro, Google Docs
- Benchmarking (Rota 2): Semrush, SimilarWeb (free), pesquisa manual
- Dados de entrada: dataset capturado na Etapa 2

**Duração:** 1 semana (Rota 1) ou 2 semanas (Rota 2).

---

## Etapa 4 — Fluxograma do Funil

**Objetivo:** visualizar o fluxo aprovado em diagrama editável.

**Entregáveis:**
- Fluxograma em Mermaid (fonte editável) + PNG exportado
- Representa canais, etapas, taxas de conversão alvo, pontos de automação futura (flags para a Etapa 7)

**Ferramentas possíveis:**
- Diagramação: Mermaid (código) renderizado em Figma/FigJam ou Miro
- Compartilhamento com o cliente: Miro board em modo read-only

**Duração:** 3-5 dias.

---

## Etapa 5 — Playbook de Vendas

**Objetivo:** entregar ao time comercial do cliente (ou criar um do zero) o manual operacional.

**Entregáveis:**
- Playbook doc estruturado com scripts por canal e etapa (SPIN adaptado), cadências de follow-up (tempos, mensagens, canais), matriz de objeções e respostas, critérios de qualificação (BANT ou customizado), handoff SDR → closer, KPIs e metas por etapa
- Templates prontos de mensagem (WhatsApp, e-mail, LinkedIn)

**Formulários:**
- Template padrão de playbook Eloscope — reutilizável entre clientes, adaptado no conteúdo

**Ferramentas possíveis:**
- Doc: Notion workspace do cliente, Google Docs, Gamma (se quiser visual forte)
- Templates de mensagem: biblioteca reutilizável no Notion da Eloscope

**Duração:** 1 semana.

---

## Etapa 6 — Aprovação + GATE

**Objetivo:** validar com o cliente que o processo desenhado faz sentido antes de investir em automação.

**Entregáveis:**
- Reunião de aprovação (2h) mostrando fluxograma + playbook
- Ata com ajustes pedidos
- Decisão formal do cliente sobre qual camada de execução contratar (7A, 7B, 7C ou 7D)

**Ferramentas possíveis:**
- Reunião: Google Meet ou Zoom, gravada no Fathom (ou Fireflies, como fallback)
- Registro: ata em Notion + link do fluxograma

**Regra do gate:** se o cliente não aprovar ou não tiver clareza do processo, não avança para a Etapa 7. A Eloscope devolve a Fase 2 com ajustes ou rescinde conforme multa pactuada no contrato da Etapa 0.

**Duração:** 2-5 dias (incluindo possível iteração).

---

## Etapa 7 — Execução (modular)

O cliente escolhe a camada na Etapa 6. Cada sub-etapa tem sua própria stack e prazo.

### 7A — Pacote Lean (só processo e playbook)

- Entregável: docs + 1 treinamento do time do cliente (2h gravado)
- Ferramentas: Notion, Loom, Google Meet
- Duração: 3-5 dias após aprovação

### 7B — Agente SDR Eloscope

- Entregável: agente de qualificação e follow-up em produção
- Stack prioritária: **Paperclip + OpenClaw**
- Fallback: n8n se integração externa pedir
- Canal: WhatsApp oficial (Meta Business API)
- Persistência: Supabase para logs e histórico
- Duração: 1-2 semanas

### 7C — Integração no stack existente do cliente

- Entregável: agente rodando dentro do n8n ou CRM que o cliente já usa
- Ferramentas: n8n (self-hosted do cliente ou Eloscope), conectores para HubSpot, Pipedrive, RD Station, Kommo
- Duração: 1-2 semanas (depende do CRM)

### 7D — Pacote completo (agente + dashboard)

- Entregável: 7B + dashboard web do cliente
- Stack: **Next.js + Supabase**, Clerk para auth, Tailwind + shadcn/ui
- Métricas: leads por canal, conversão por etapa, tempo de resposta, ticket médio, forecast
- Duração: 2-4 semanas

---

## Etapa 8 — Operação Mensal

**Objetivo:** manter o sistema funcionando e evoluindo com dados reais.

**Entregáveis:**
- Manutenção técnica (tokens, prompts, integrações)
- Review mensal de 60 min com o cliente
- Relatório semanal automatizado
- Ajustes pequenos no playbook com base em dados operacionais

**Ferramentas possíveis:**
- Monitoramento das reuniões: Fireflies
- Documentação evolutiva: Notion do cliente
- Relatório: e-mail ou dashboard (se 7D), PDF semanal
- Suporte: canal WhatsApp dedicado

**Duração:** contínua, enquanto houver contrato.

---

## Etapa 9 — Upsell Arm Web (opcional, contrato separado)

**Objetivo:** oferecer o braço de web/design da Eloscope depois que o Sales OS está maduro com o cliente.

**Entregáveis:**
- Site institucional ou landing page
- Redesign de logo/identidade
- SEO + GEO
- Gestão de tráfego (se o cliente quiser)

**Ferramentas possíveis:**
- Next.js + Tailwind + shadcn/ui + Supabase
- Figma para design
- Lighthouse, GTmetrix, Semrush para SEO
- Google Search Console, Meta Ads Manager

**Duração:** 3-8 semanas (escopo e preço à parte do Sales OS).

---

## Stack map — onde cada ferramenta aparece

| Ferramenta | Etapas |
|---|---|
| Notion | 1, 2 (A), 3, 5, 6, 8 |
| Google Forms / Tally / Typeform | 2 (A) |
| WhatsApp oficial (Meta Business API) | 2 (B), 7B, 7D |
| OpenClaw + Paperclip | 2 (B), 7B, 7D |
| IA preditiva e ativa (stack a definir) | v0.2 — roadmap futuro, não entra no setup |
| n8n | 7B (fallback), 7C |
| Supabase | 2, 7B, 7D |
| Next.js + Tailwind + shadcn | 7D, 9 |
| Clerk | 7D |
| Mermaid + Figma / Miro | 4 |
| Loom | 7A, 8 |
| Fireflies / Fathom | 6, 8 |
| Meta Ads / Google Ads (acesso) | 1 |
| Semrush / SimilarWeb / Lighthouse | 3 (Rota 2), 9 |
| Clicksign / D4Sign | 0 |

---

## Pontos em aberto (decidir antes de fechar o primeiro Beta)

1. **Diagnóstico avulso** — vende separado como porta de entrada ou só dentro do Sales OS?
2. **CRM do cliente** — se ele não tiver, entra "configuração de CRM" no setup ou joga tudo em Supabase custom?
3. **Stack do agente nos primeiros Beta** — já parte direto em Paperclip + OpenClaw, ou começa n8n pra ganhar velocidade e migra depois?
4. **Treinamento gravado (2-3h)** — incluso no Real ou upsell à parte?
5. **Ata de Gate** — template próprio Eloscope ou documento livre?
6. **Camada preditiva e ativa (v0.2)** — quais ferramentas avaliar (Clay, Correlated, modelo custom em Supabase, outras), e quando entra no roadmap — meses 3-6 de um cliente Real, ou produto separado vendido depois?

---

## Próximos artefatos a produzir (quando os pontos acima estiverem decididos)

- Formulário de Onboarding (Caminho A) — estruturado em Markdown, convertível para Google Forms ou Notion
- Script/prompt do Agente OpenClaw (Caminho B) — fluxo conversacional equivalente
- Template do Playbook de Vendas — esqueleto reutilizável entre clientes
- Template do Fluxograma do Funil em Mermaid — base Q2 para adaptar por cliente
- Template de Proposta Comercial — versões Lean, Beta e Real
- Modelo de contrato com cláusula de Gate

## Artefatos já disponíveis

- `templates/Cronograma_Cliente_Template.md` — Mermaid gantt + tabela de marcos, parametrizável por rota e pacote. Validado pelo agent `schedule-validator`.

---

**FIM.**
