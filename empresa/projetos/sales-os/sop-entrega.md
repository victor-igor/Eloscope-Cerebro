# Sales OS — SOP de Entrega
> Standard Operating Procedure. Time operacional interno.
> Seguir exatamente. Desvios devem ser documentados e aprovados por Victor.

---

## PRÉ-ENTREGA (Após fechamento)

### Checklist do Lucas (pós-fechamento)

- [ ] Contrato assinado e arquivado
- [ ] Setup pago e confirmado
- [ ] Mensalidade configurada (recorrência ou lembrete manual)
- [ ] Cliente adicionado na planilha de clientes ativos
- [ ] WhatsApp do cliente salvo na agenda
- [ ] Formulário de onboarding enviado ao cliente
- [ ] Data da reunião de diagnóstico agendada (Semana 1)
- [ ] Victor e Hugo avisados do novo cliente (nome, segmento, plano, data de início)

---

## FASE 1 — DIAGNÓSTICO

### Dia 0–1: Onboarding

**Lucas:**
- [ ] Enviar formulário de onboarding (`onboarding-formulario.md`)
- [ ] Enviar guia técnico ao cliente (`onboarding-tecnico-cliente.md`) — o cliente precisa preparar WhatsApp Business e API Key
- [ ] Dar prazo de 48h para preenchimento do formulário
- [ ] Fazer follow-up se não preencheu em 24h

**Victor:**
- [ ] Ler formulário preenchido antes da reunião
- [ ] Preparar perguntas específicas para o diagnóstico daquele cliente
- [ ] Confirmar agenda com cliente (Google Meet ou presencial)

---

### Dia 2–3: Reunião de Diagnóstico (~90 min)

**Estrutura obrigatória da reunião:**

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 — Operação | Processo lead→fechamento, canais de comunicação | 20 min |
| 2 — CRM | Tem CRM? Qual? Funil, relatórios, histórico. Sem CRM → mapear operação manual | 15 min |
| 3 — Base | Leads não fechados, clientes antigos, potencial de reativação | 15 min |
| 4 — Dores | Onde perde mais, objeções principais, o que o time reclama | 20 min |
| 5 — Captação | Canais de aquisição, investimento em tráfego | 10 min |
| Encerramento | Próximos passos, expectativas, cronograma | 10 min |

**Victor conduz. Lucas presente.**

**Durante a reunião anotar:**
- Volume de leads/mês
- Taxa de conversão estimada
- Tamanho da base parada
- CRM em uso (ou não)
- Número de vendedores ativos
- Principais objeções recebidas pelo time
- Canais de captação

---

### Dia 3–5: Relatório Diagnóstico

**Victor:**
- [ ] Redigir relatório com base nas anotações da reunião
- [ ] Estrutura do relatório:
  - Resumo executivo (1 parágrafo — qual é o gargalo principal)
  - Mapa do processo atual
  - Principais gargalos (ordenados por impacto)
  - Análise da base de contatos (potencial de reativação)
  - Plano de prioridades para Fase 2
- [ ] Revisar antes de enviar
- [ ] Enviar para Lucas encaminhar ao cliente

**Lucas:**
- [ ] Encaminhar relatório ao cliente
- [ ] Solicitar confirmação de recebimento
- [ ] Coletar feedback inicial

---

## FASE 2 — ESTRUTURA E IMPLEMENTAÇÃO

### Semana 2: Setup técnico + Playbook em paralelo

**Hugo (técnico) — prazo: até Dia 8:**
- [ ] Subir VPS (R$80/mês — configurar no plano correto)
- [ ] Instalar e configurar Openclaw
- [ ] Instalar e configurar Paperclip
- [ ] Conectar WhatsApp Business do cliente (instrução ao cliente sobre o que ele precisa fazer)
- [ ] Testar conexão — enviar mensagem de teste
- [ ] Configurar n8n para cadências
- [ ] Informar Victor quando infraestrutura estiver pronta

**Victor (playbook) — prazo: até Dia 7:**
- [ ] **CHECKPOINT antes de criar:** confirmar com Hugo que LLM está definido e API Key recebida do cliente
- [ ] Criar scripts baseados no segmento e diagnóstico:
  - Script de primeiro contato (lead frio)
  - Script de primeiro contato (lead quente / indicação)
  - Script de follow-up (1º, 2º, 3º, 4º contato)
  - Script de reativação de base
  - Script de fechamento
  - Tratamento das objeções específicas daquele cliente
  - Perguntas de qualificação (SPIN adaptado)
- [ ] Definir cadências (sequência de dias + canal para cada tipo de lead)
- [ ] Passar playbook para Hugo configurar na IA

---

### Semana 3: IA Copiloto + Dashboard

**Hugo — prazo: até Dia 12:**
- [ ] Configurar prompts da IA Copiloto (baseado no playbook do Victor)
- [ ] Testar IA Copiloto com conversa simulada — validar com Victor
- [ ] Configurar cadências automatizadas no n8n
- [ ] Montar dashboard (versão beta):
  - Visão do gestor (conversão, performance, lead scoring, alertas)
  - Visão do vendedor (lista do dia, próximas ações, alertas)
- [ ] Configurar acesso do cliente ao dashboard
- [ ] Testar dashboard com dados fictícios
- [ ] Fazer demo para Victor antes de apresentar ao cliente

**Victor — CHECKPOINT de validação (obrigatório antes do treinamento):**
- [ ] Validar playbook — scripts fazem sentido para o segmento do cliente?
- [ ] Validar IA Copiloto — testar com 5 conversas simuladas, scripts aparecem corretos?
- [ ] Validar dashboard — todas as métricas corretas? Acesso do cliente funcionando?
- [ ] ✅ Aprovação formal antes de agendar treinamento — não pular este passo

---

### Semana 3–4: Treinamento

**Victor conduz. Lucas presente quando possível.**

**Sessão 1 — Vendedores (~90 min):**
- [ ] Agendar com cliente (todos os vendedores + 1 gestor)
- [ ] Preparar apresentação da sessão

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Playbook na prática — scripts, cadências, objeções | 20 min |
| 2 | IA Copiloto ao vivo — demo no WhatsApp real | 25 min |
| 3 | Como qualificar um lead (SPIN adaptado) | 15 min |
| 4 | Follow-up sem depender da memória | 15 min |
| 5 | Simulação + dúvidas | 15 min |

**Sessão 2 — Gestor (~60 min) · Growth e Scale:**
- [ ] Agendar separado com o dono/gestor

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Como ler o dashboard | 20 min |
| 2 | Lead scoring — como priorizar o time | 15 min |
| 3 | Relatório mensal — como usar para decisão | 15 min |
| 4 | Como acionar campanha de reativação | 10 min |

**Pós-treinamento:**
- [ ] Enviar trilha educacional gravada ao cliente
- [ ] Confirmar que time está acessando a IA Copiloto
- [ ] Confirmar que gestor está acessando o dashboard
- [ ] Marcar data da primeira reunião mensal (Dia 30)

---

### Go-live — Dia 10

- [ ] Hugo: confirmar que todos os sistemas estão rodando
- [ ] Victor: confirmar que treinamento foi realizado
- [ ] Lucas: confirmar com o cliente que o time começou a usar
- [ ] Victor: registrar data de go-live na planilha de clientes

---

## FASE 3 — ACOMPANHAMENTO MENSAL

### Preparação (até 3 dias antes da reunião)

**Hugo:**
- [ ] Exportar dados do dashboard do mês
- [ ] Identificar anomalias ou alertas técnicos
- [ ] Verificar saúde dos sistemas (VPS, Openclaw, conexão WhatsApp)

**Victor:**
- [ ] Analisar dados exportados
- [ ] Preparar pauta da reunião:
  - Métricas do mês (conversão, leads contatados, fechados, perdidos)
  - Comparativo com mês anterior
  - O que funcionou / o que não funcionou
  - Ajustes propostos (scripts, cadências, prompts)
  - Foco dos próximos 30 dias

---

### Reunião Mensal (~60 min)

**Victor conduz. Lucas presente quando relevante.**

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Métricas do mês — o que os números dizem | 15 min |
| 2 | O que funcionou e o que não funcionou | 15 min |
| 3 | Ajustes aprovados (scripts, cadências, IA) | 15 min |
| 4 | Foco dos próximos 30 dias | 10 min |
| 5 | Dúvidas e encerramento | 5 min |

**Pós-reunião:**
- [ ] Victor documenta ajustes decididos
- [ ] Hugo implementa ajustes técnicos (prazo: até 48h)
- [ ] Victor atualiza playbook se necessário
- [ ] Lucas: verificar satisfação do cliente / oportunidade de upsell

---

## MÉTRICAS QUE O CLIENTE VAI ACOMPANHAR

> Estas são as métricas que definimos como sucesso do Sales OS para o cliente.
> "O Sales OS funcionou" quando esses números melhoram.

| Métrica | O que mede | Como capturar |
|---------|-----------|--------------|
| **Taxa de conversão** | % de leads que fecham | Dashboard (input do vendedor) |
| **Tempo médio de resposta** | Quanto tempo para primeiro contato | IA Copiloto (automático) |
| **Taxa de follow-up** | % de leads que receberam follow-up | Cadências n8n (automático) |
| **Leads reativados** | Quantos da base parada voltaram a conversar | Dashboard (campanha reativação) |
| **Deals em aberto** | Volume no funil em cada etapa | Dashboard |
| **Receita do mês** | Fechamentos × ticket médio | Input manual do cliente |

**Benchmark de sucesso para apresentar na primeira reunião mensal:**
- Tempo de resposta: de X horas → menos de 30 minutos
- Taxa de follow-up: de X% → acima de 80%
- Taxa de conversão: melhora mensurável em 60 dias

---

## COLETA DE CASE (Dia 60–90)

- [ ] Lucas verifica: cliente está satisfeito e com resultado visível?
- [ ] Lucas envia mensagem de abertura (`template-case.md`)
- [ ] Coletar dados mês a mês na tabela de métricas do template
- [ ] Produzir case nos formatos definidos (post, vídeo, slide)
- [ ] Cliente aprova por escrito antes de publicar

---

## ESCALONAMENTO DE PROBLEMAS

| Problema | Quem resolve | Prazo |
|---------|-------------|-------|
| Client insatisfeito | Lucas (escuta) + Victor (soluciona) | Imediato |
| Bug técnico / sistema offline | Hugo | 4h úteis |
| Dashboard com dados errados | Hugo | 24h úteis |
| Solicitação fora do escopo | Lucas ouve → Victor decide | 48h |
| Cliente quer cancelar | Lucas + Victor | Imediato |

---

*Criado: 18/04/2026*
*Próxima revisão: após primeiro cliente completo (Dia 30 da entrega)*
