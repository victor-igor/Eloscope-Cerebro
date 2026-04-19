# Sales OS — Stack Técnica
> Documento interno. Referência para Hugo (implementar), Victor (entender e decidir), Lucas (explicar ao cliente).
> Legenda: ✅ Confirmado · ⚠️ A confirmar com Hugo · ❓ Decisão pendente

---

## Visão geral da arquitetura

```
CLIENTE (vendedor)
    │
    │ WhatsApp Business
    ▼
[OPENCLAW]  ←──────────────────── Lê conversas em tempo real
    │                              Entrega outputs ao vendedor
    │ dados brutos
    ▼
[PAPERCLIP] ←──────────────────── Processa e agrega dados
    │                              Alimenta dashboard e scoring
    │
    ├──── [n8n] ─────────────────── Cadências, automações, triggers
    │
    ├──── [LLM] ─────────────────── Geração de scripts, análises, relatórios
    │       (OpenAI API / Claude API — custo do cliente)
    │
    ├──── [VPS] ─────────────────── Hospeda toda a infraestrutura
    │       (~R$80/mês por cliente)
    │
    └──── [DASHBOARD] ───────────── Visualização para gestor + vendedor
              (ferramenta a definir)
```

---

## Ferramentas — detalhamento

### 1. Openclaw ✅

**O que é:** plataforma open source para criação de agentes de IA conversacional. Core da IA Copiloto.

**Função no Sales OS:**
- Conecta ao WhatsApp Business do vendedor
- Lê conversas em tempo real
- Processa contexto da conversa (histórico + perfil do lead)
- Entrega outputs ao vendedor (scripts, alertas, próximo passo)
- Coleta dados de todas as conversas para o Paperclip

**Como conecta ao WhatsApp:**
- Via QR Code (igual WhatsApp Web) — vendedor escaneia uma vez, fica conectado
- Roda no VPS da Eloscope — não precisa de app adicional no celular do vendedor
- WhatsApp do vendedor continua funcionando normalmente

**Custo:** open source — zero licença. Custo = VPS onde roda.

**Quem opera:** Hugo (setup + manutenção)

**Confirmações pendentes com Hugo:**
- ⚠️ Qual versão do Openclaw está em uso na Fran?
- ⚠️ Tem alguma limitação para múltiplos WhatsApps por instância?
- ⚠️ Qual o processo exato de reconexão se o QR expirar?

---

### 2. Paperclip ✅

**O que é:** plataforma open source de integração e processamento de dados. Core da IA Assistida.

**Função no Sales OS:**
- Recebe dados brutos do Openclaw (conversas, interações, status de leads)
- Agrega e estrutura os dados por cliente, vendedor, lead
- Alimenta o dashboard com métricas processadas
- Alimenta o lead scoring com dados históricos
- Guarda memória de longo prazo das conversas (histórico do lead)

**Custo:** open source — zero licença. Custo = VPS onde roda.

**Quem opera:** Hugo

**Confirmações pendentes com Hugo:**
- ⚠️ Openclaw → Paperclip: qual é o método de integração (webhook, API, banco compartilhado)?
- ⚠️ Frequência de sincronização dos dados (tempo real, batch por hora, diário)?
- ⚠️ Capacidade: quantas conversas simultâneas o Paperclip aguenta por instância?

---

### 3. n8n ✅

**O que é:** plataforma open source de automação de workflows (tipo Zapier, mas self-hosted).

**Função no Sales OS:**
- Cadências de follow-up — dispara lembretes/triggers para o vendedor nos dias corretos
- Alertas de esfriamento — cron job que verifica leads sem contato há X dias
- Triggers pós-conversa — aciona análise após conversa encerrada
- Relatórios automáticos — dispara geração do relatório mensal
- Integrações com CRM do cliente (quando aplicável)
- Notificações internas (alertas para a Eloscope)

**Custo:** open source — zero licença. Roda no mesmo VPS.

**Quem opera:** Hugo

**CRMs que o n8n integra nativamente (via nodes oficiais):**
- HubSpot ✅
- Pipedrive ✅
- Salesforce ✅
- RD Station ✅
- Zoho CRM ✅
- Bitrix24 ✅
- Monday.com ✅
- Notion (como banco) ✅
- Google Sheets (para quem não tem CRM formal) ✅
- Qualquer CRM com API REST (via HTTP Request node)

**Confirmações pendentes com Hugo:**
- ⚠️ Quais CRMs já testou/configurou na prática?
- ⚠️ RD Station e HubSpot funcionam bem no n8n? Tem limitação de autenticação?

---

### 4. VPS (Servidor) ✅

**O que é:** servidor virtual privado onde toda a infraestrutura do cliente roda.

**Função no Sales OS:**
- Hospeda Openclaw + Paperclip + n8n por cliente
- Isolamento por cliente — cada cliente tem sua instância separada (dados não se misturam)
- Acesso remoto para Hugo fazer manutenção

**Custo:** ~R$80/mês por cliente

**Provider recomendado:** ❓ a definir com Hugo
- Opções comuns: Hetzner (~€5–10/mês), DigitalOcean (~$12/mês), Contabo (~€5/mês), OVH
- Hetzner tem melhor custo-benefício para cargas leves em BRL

**Specs mínimas por instância (estimativa):**
- 2 vCPU, 4GB RAM, 40GB SSD
- Ubuntu 22.04 LTS

**Quem provisiona:** Hugo (setup por cliente novo)

**Confirmações pendentes com Hugo:**
- ⚠️ Qual provider está usando hoje na Fran?
- ⚠️ Specs reais necessárias para rodar Openclaw + Paperclip + n8n juntos?
- ⚠️ Quanto tempo leva para subir uma instância nova do zero?

---

### 5. LLMs (Modelos de IA) ❓ custo do cliente

**O que são:** modelos de linguagem que processam as conversas e geram scripts, análises e relatórios.

**Função no Sales OS:**
- Gerar script personalizado por lead (IA Copiloto)
- Analisar conversas do WhatsApp
- Analisar transcrições de calls
- Gerar relatórios mensais
- Calcular lead scoring (análise qualitativa)

**Custo:** pago pelo cliente, não pela Eloscope. Custo estimado: R$50–300/mês dependendo do volume.

**Opção principal recomendada: OpenAI API (GPT-4o)**

| Modelo | Uso ideal | Custo estimado/mês |
|--------|----------|-------------------|
| GPT-4o | Scripts, análise de conversa, relatórios | R$50–200 |
| GPT-4o mini | Triggers simples, scoring básico | R$10–50 |
| Claude 3.5 Sonnet | Análise de call longa, relatório detalhado | R$50–200 |

**Recomendação de implementação:**
- Usar GPT-4o mini para skills de baixo custo (alertas, próximo passo simples)
- Usar GPT-4o para skills de alto valor (análise de conversa, script personalizado)
- Limite mensal configurado no painel da OpenAI (evitar surpresa de custo)

**Como o cliente contrata:**
1. Acessa platform.openai.com
2. Cria conta + adiciona cartão
3. Configura limite de gasto (recomendado: R$200/mês para começar)
4. Gera API Key e envia para Hugo
5. Hugo conecta ao Openclaw

**Alternativas aceitas:**
- Claude API (Anthropic) — mesma qualidade, preço similar
- Groq (Llama) — mais barato, menor qualidade para scripts complexos
- Gemini API (Google) — opção se cliente já usa Google Workspace

**Confirmações pendentes com Hugo:**
- ❓ Qual LLM está usando na Fran hoje?
- ❓ GPT-4o ou outro? Funcionou bem para português?
- ❓ Openclaw tem preferência de LLM ou aceita qualquer OpenAI-compatible API?

---

### 6. Dashboard ❓ ferramenta a definir

**O que é:** interface web onde gestor e vendedor acessam métricas e relatórios.

**Função no Sales OS:**
- Visão do gestor: conversão, performance do time, lead scoring, alertas, reativação
- Visão do vendedor: lista priorizada do dia, próximas ações, alertas pessoais
- Visão Eloscope (admin): todos os clientes para monitoramento

**Opções em avaliação:**

| Ferramenta | Prós | Contras | Custo |
|-----------|------|---------|-------|
| **Metabase** | Open source, bonito, fácil de configurar, self-hosted | Requer banco de dados bem estruturado | Grátis (self-hosted) |
| **Grafana** | Open source, tempo real, alertas nativos | Mais complexo, visual mais técnico | Grátis (self-hosted) |
| **Retool** | Rápido de construir, componentes prontos | Pago a partir de certo volume | $10/usuário/mês |
| **Openclaw/Paperclip nativo** | Já integrado, zero config extra | Depende do que Hugo já tem pronto | Grátis |
| **Custom (Next.js/React)** | Total controle, branding Eloscope | Tempo de dev maior | Horas de Hugo |

**Recomendação inicial:** Metabase self-hosted no VPS do cliente (Paperclip expõe banco → Metabase lê)

**Autenticação do cliente:**
- ❓ Link privado com senha simples (mais rápido de implementar)
- ❓ Login próprio por e-mail (mais profissional, mais trabalho)

**Confirmações pendentes com Hugo:**
- ❓ Qual ferramenta faz mais sentido considerando o que já está rodando na Fran?
- ❓ Metabase já está configurado ou vai ser do zero?
- ❓ Qual a frequência real de atualização dos dados?

---

### 7. WhatsApp Business (cliente) ✅

**O que é:** aplicativo do cliente (vendedor). Não é ferramenta da Eloscope — é pré-requisito do cliente.

**Requisitos:**
- WhatsApp Business instalado (não o comum)
- Número de trabalho dedicado
- Celular com internet durante horário comercial

**Como a Eloscope conecta:**
- Hugo gera QR Code via Openclaw
- Vendedor escaneia (igual WhatsApp Web)
- Conexão fica ativa enquanto celular tiver internet

**O que o cliente NÃO precisa fazer:**
- Instalar nada além do WhatsApp Business
- Trocar de número
- Configurar WhatsApp Business API oficial (isso seria outra arquitetura, mais cara)

---

## Custo total por cliente (Eloscope)

| Item | Custo mensal Eloscope | Observação |
|------|----------------------|-----------|
| VPS | R$80 | Por cliente |
| Openclaw | R$0 | Open source |
| Paperclip | R$0 | Open source |
| n8n | R$0 | Open source, self-hosted |
| LLMs | R$0 | Custo do cliente |
| Dashboard | R$0 | Metabase self-hosted |
| **Total** | **~R$80/mês** | |

**Margem bruta:**
- Starter: R$1.500 receita − R$80 custo = **R$1.420/cliente/mês (95%)**
- Growth: R$2.500 − R$80 = **R$2.420/cliente/mês (97%)**
- Scale: R$3.500 − R$80 = **R$3.420/cliente/mês (98%)**

---

## Tempo de setup por cliente (estimativa Hugo)

| Tarefa | Tempo estimado |
|--------|--------------|
| Provisionar VPS | 30 min |
| Instalar Openclaw + Paperclip + n8n | 1–2h |
| Conectar WhatsApp do vendedor (QR) | 15 min por vendedor |
| Configurar prompts da IA Copiloto | 1–2h (baseado no playbook do Victor) |
| Configurar cadências no n8n | 1h |
| Montar dashboard (Metabase) | 2–4h (primeira vez), 1h (cliente 2 em diante) |
| **Total estimado** | **6–10h por cliente** |

> ⚠️ Hugo: confirmar esses tempos com base na experiência real com a Fran.

---

## Perguntas para Hugo responder (prioridade)

Para fechar este documento e liberar a primeira entrega:

1. **Qual provider de VPS está usando na Fran e quais specs?**
2. **Qual LLM está configurado — GPT-4o? Funciona bem em português?**
3. **Openclaw conecta ao WhatsApp via QR code? A conexão é estável?**
4. **Como o Openclaw passa dados para o Paperclip (webhook, API, banco)?**
5. **Dashboard: já tem algo montado na Fran ou vai ser do zero?**
6. **Quanto tempo levou para subir tudo na Fran do zero?**
7. **Quais CRMs já integrou via n8n na prática?**

---

## Para o Lucas — como explicar a stack ao cliente

O cliente não precisa entender a stack — só o que impacta ele.

**O que o cliente precisa saber:**
- "A gente instala tudo no nosso servidor — você não precisa instalar nada"
- "A IA conecta no WhatsApp Business que seu time já usa — sem app novo"
- "O único custo extra é a IA (OpenAI) — você cria a conta, coloca R$200 de crédito, pronto"
- "Você acessa o dashboard pelo browser — link privado que a gente te manda"

**O que o cliente NÃO precisa saber:**
- Openclaw, Paperclip, n8n — são ferramentas internas
- Qual VPS — irrelevante para ele
- Arquitetura técnica — confunde mais do que ajuda

**Se o cliente perguntar "é seguro?":**
> "Cada cliente tem seu próprio servidor isolado — os seus dados não se misturam com os de nenhum outro cliente. E a conexão com o WhatsApp funciona igual ao WhatsApp Web que você já usa no computador."

---

*Criado: 19/04/2026*
*Próxima revisão: após confirmações do Hugo (marcar reunião técnica)*
