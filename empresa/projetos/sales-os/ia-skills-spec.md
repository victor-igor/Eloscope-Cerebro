# Sales OS — Especificação das IAs e Skills
> Documento técnico + comercial. Serve para: Hugo (o que implementar), Victor (o que prometer), Lucas (o que vender).
> Versão: Abril 2026

---

## Visão geral das duas IAs

| | **IA Copiloto** | **IA Assistida** |
|--|--|--|
| **Para quem** | Vendedor | Gestor / Dono |
| **Quando atua** | Em tempo real — durante a conversa | Assíncrono — análise de dados acumulados |
| **Canal principal** | WhatsApp (onde o vendedor trabalha) | Dashboard (onde o gestor analisa) |
| **O que faz** | Opera ao lado do vendedor, entrega o que ele precisa no momento certo | Processa dados das conversas e entrega inteligência para decisão |
| **Metáfora** | Personal trainer ao lado do vendedor durante o treino | Técnico que assiste o jogo e entrega análise tática |

---

## IA COPILOTO — Skills

> Opera dentro do ambiente do vendedor (WhatsApp). Lê o contexto da conversa em tempo real e entrega resposta ao vendedor — quem escreve é sempre o vendedor.

---

### SKILL 1 — Script Personalizado por Lead ⭐ (Core)

**O que faz:**
Lê o histórico da conversa com aquele lead e gera um script personalizado baseado no perfil do lead, no estágio da negociação e no playbook do cliente.

**O que entrega:**
- Mensagem sugerida para enviar agora (já formatada para WhatsApp)
- Adaptada ao tom da conversa (formal/informal)
- Baseada no script do playbook + contexto específico daquele lead

**Exemplo prático:**
> Lead disse "tá caro" → IA Copiloto entrega: "Faz sentido, o investimento parece alto antes de ver o resultado. O que vai acontecer é [ancoragem de valor específica para o segmento]. Posso te mostrar como outros clientes como você recuperaram isso em [X dias]?"

**Planos:** Starter · Growth · Scale

---

### SKILL 2 — Próximo Passo Sugerido ⭐ (Core)

**O que faz:**
Após cada conversa (ou em intervalos configurados), analisa o status daquele lead e sugere qual deve ser a próxima ação.

**O que entrega:**
- Ação recomendada (ligar, enviar proposta, fazer follow-up, marcar reunião)
- Melhor horário sugerido para o próximo contato (baseado no histórico de quando o lead responde)
- Argumento para usar no próximo contato

**Exemplo prático:**
> "Lead respondeu ontem à tarde mas não avançou → Sugestão: enviar follow-up amanhã às 10h com a mensagem X."

**Planos:** Starter · Growth · Scale

---

### SKILL 3 — Alerta de Esfriamento ⭐ (Core)

**O que faz:**
Monitora todos os leads ativos e detecta quando um lead está esfriando (sem resposta há X dias, sem follow-up feito, conversa parou).

**O que entrega:**
- Notificação para o vendedor: "Lead [nome] está sem contato há [X dias] — risco de perder"
- Sugestão de mensagem de reaquecimento
- Prioridade para agir hoje

**Parâmetros configuráveis por cliente:**
- Tempo sem resposta para acionar alerta (padrão: 48h)
- Tipo de lead que gera alerta (quente, morno, frio)

**Planos:** Starter · Growth · Scale

---

### SKILL 4 — Análise de Conversa no WhatsApp

**O que faz:**
Ao final de uma conversa ou negociação, analisa o que aconteceu: como o vendedor se saiu, quais objeções apareceram, onde a conversa travou, o que poderia ter sido feito diferente.

**O que entrega:**
- Resumo da conversa (do que se tratou, qual o status)
- Objeções identificadas
- Ponto onde a conversa esfriou ou o lead resistiu
- Sugestão de abordagem para a próxima interação
- Score da conversa (qualidade da abordagem 1–10)

**Utilidade:** o gestor pode ver análise consolidada de todas as conversas → padrão de onde o time perde mais.

**Planos:** Growth · Scale

---

### SKILL 5 — Análise de Call / Reunião de Vendas

**O que faz:**
Recebe a gravação ou transcrição de uma call de vendas (Google Meet, Zoom, telefone com transcrição) e analisa o que aconteceu.

**O que entrega:**
- Resumo executivo da call (o que foi discutido, decisões, próximos passos)
- Objeções levantadas pelo prospect
- Momentos de interesse alto (onde o prospect engajou)
- Momentos de resistência (onde o prospect recuou)
- Análise de rapport (como foi a conexão)
- Sugestão de abordagem para o follow-up pós-call
- Score da call (1–10) com justificativa

**Como funciona na prática:**
1. Vendedor grava a call (Fathom, Fireflies, ou gravação manual)
2. Envia transcrição ou link para o sistema
3. IA analisa e devolve relatório em minutos

**Planos:** Growth · Scale

---

### SKILL 6 — Follow-up Inteligente

**O que faz:**
Vai além das cadências fixas — analisa o comportamento do lead para sugerir o follow-up certo, no momento certo, com o conteúdo certo.

**O que entrega:**
- Follow-up personalizado baseado na última conversa (não um template genérico)
- Timing otimizado (quando aquele lead tende a responder)
- Canal sugerido (WhatsApp, e-mail, ligação)
- Assunto/gancho do follow-up baseado em algo específico da conversa anterior

**Diferença do Skill 3 (alerta):** o alerta avisa que o lead esfriou. O follow-up inteligente cria a mensagem personalizada para reengajar.

**Planos:** Growth · Scale

---

### SKILL 7 — Relatório de Performance Individual do Vendedor

**O que faz:**
Gera um relatório semanal/mensal do desempenho de cada vendedor com base nas conversas analisadas.

**O que entrega:**
- Volume de leads atendidos
- Taxa de resposta (% de leads que responderam)
- Taxa de avanço no funil
- Objeções que mais recebe (ponto de melhoria)
- Velocidade de resposta (quanto tempo para primeiro contato)
- Comparativo com semana/mês anterior
- 1 sugestão de melhoria personalizada

**Planos:** Growth · Scale

---

## IA ASSISTIDA — Skills

> Opera no dashboard da Eloscope. Processa os dados agregados de todas as conversas, leads e performance do time. Entrega inteligência para o gestor tomar decisões.

---

### SKILL 1 — Lead Scoring ⭐ (Core)

**O que faz:**
Analisa todos os leads ativos e ranqueia por probabilidade de fechar, baseado em: tempo de resposta, engajamento na conversa, perfil do lead, estágio no funil.

**O que entrega:**
- Lista priorizada: "Esses são os X leads para focar HOJE"
- Score de 1–10 por lead com justificativa
- Distribuição da base: quente / morno / frio / perdido

**Benefício para o gestor:**
> "Ao invés de o time trabalhar em ordem de chegada, trabalha em ordem de probabilidade de fechar."

**Planos:** Starter · Growth · Scale

---

### SKILL 2 — Análise de Performance do Time

**O que faz:**
Consolida os dados de todos os vendedores e entrega uma visão comparativa de performance.

**O que entrega:**
- Ranking de vendedores por: conversão, velocidade de resposta, follow-up feito
- Comparativo semana/mês anterior por vendedor
- Identificação de quem está abaixo da média (e em qual métrica)
- Padrões: qual vendedor fecha mais leads de qual canal/perfil

**Benefício para o gestor:**
> "Sabe exatamente quem precisa de coaching, em qual aspecto, sem precisar ouvir cada conversa."

**Planos:** Growth · Scale

---

### SKILL 3 — Identificação de Base para Reativação

**O que faz:**
Analisa a base de contatos parada (leads que não fecharam + clientes antigos) e identifica quem tem maior probabilidade de reativar agora.

**O que entrega:**
- Lista de leads/clientes priorizados para reativação
- Tempo sem contato de cada um
- Última interação registrada
- Score de reativação (probabilidade de responder)
- Sugestão de abordagem personalizada para cada grupo

**Benefício:**
> "Dinheiro parado na base vira pipeline sem precisar investir em novos leads."

**Planos:** Starter · Growth · Scale

---

### SKILL 4 — Análise de Padrões de Objeção

**O que faz:**
Agrega as objeções coletadas em todas as conversas analisadas e identifica padrões — o que o time mais ouve, em qual estágio do funil, de qual perfil de lead.

**O que entrega:**
- Top 5 objeções por frequência
- Em qual momento da conversa cada objeção aparece
- Perfil de lead que mais levanta cada objeção
- Eficácia do tratamento atual (objeção foi contornada ou perdeu o lead?)
- Sugestão de ajuste no playbook

**Benefício:**
> "O playbook evolui com dados reais — não com achismo."

**Planos:** Growth · Scale

---

### SKILL 5 — Relatório Mensal Executivo

**O que faz:**
Gera automaticamente um relatório mensal consolidado para ser usado na reunião de resultado com a Eloscope.

**O que entrega:**
- Métricas do mês vs. mês anterior
- Taxa de conversão geral e por vendedor
- Volume de leads, follow-ups, fechamentos, perdas
- Análise dos 3 principais gargalos do mês
- Recomendações de ajuste para o próximo mês
- Exportável em PDF

**Benefício:**
> "A reunião mensal tem dados concretos — não é conversa, é análise."

**Planos:** Starter · Growth · Scale

---

### SKILL 6 — Alerta de Risco de Churn (cliente)

**O que faz:**
Monitora indicadores de que o cliente (empresa contratante do Sales OS) pode cancelar — queda de uso, time parando de usar a IA Copiloto, métricas caindo.

**O que entrega:**
- Alerta interno para a Eloscope (não para o cliente)
- Indicadores de risco: queda de uso, queda de conversão, time inativo
- Sugestão de ação preventiva (ligação do Lucas, reunião antecipada, ajuste técnico)

**Benefício:**
> "A Eloscope age antes de o cliente reclamar."

**Planos:** Growth · Scale *(uso interno Eloscope)*

---

## Skills por Plano

| Skill | Starter | Growth | Scale |
|-------|---------|--------|-------|
| **IA COPILOTO** | | | |
| Script personalizado por lead | ✅ | ✅ | ✅ |
| Próximo passo sugerido | ✅ | ✅ | ✅ |
| Alerta de esfriamento | ✅ | ✅ | ✅ |
| Análise de conversa WhatsApp | — | ✅ | ✅ |
| Análise de call / reunião de vendas | — | ✅ | ✅ |
| Follow-up inteligente | — | ✅ | ✅ |
| Relatório de performance individual | — | ✅ | ✅ |
| **IA ASSISTIDA** | | | |
| Lead Scoring | ✅ | ✅ | ✅ |
| Análise de performance do time | — | ✅ | ✅ |
| Identificação de base para reativação | ✅ | ✅ | ✅ |
| Análise de padrões de objeção | — | ✅ | ✅ |
| Relatório mensal executivo | ✅ | ✅ | ✅ |
| Alerta de risco de churn *(interno)* | — | ✅ | ✅ |

---

## Skills do roadmap (não incluídas agora — versões futuras)

| Skill | Descrição | Quando |
|-------|-----------|--------|
| Análise de sentimento em tempo real | Detecta humor/emoção do lead na conversa | v2 |
| Score preditivo de fechamento | Probabilidade de fechar aquele lead específico nos próximos 7 dias | v2 |
| Sugestão de upsell/cross-sell | Identifica quando cliente atual pode comprar mais | v2 |
| Integração com CRM (leitura + escrita) | IA alimenta o CRM automaticamente | v2 |
| Benchmark de mercado | Compara métricas do cliente com segmento | v3 |
| Coach de vendas por áudio | Feedback por áudio para o vendedor após cada conversa | v3 |

---

## Para o Hugo — Como implementar

### Stack por skill

| Skill | Ferramenta principal | Notas |
|-------|---------------------|-------|
| Script personalizado | Openclaw + LLM (prompt por segmento) | Prompt base no playbook do Victor |
| Próximo passo | Openclaw + n8n (trigger pós-conversa) | |
| Alerta esfriamento | n8n (cron job) + Openclaw | Parâmetro: X dias sem resposta |
| Análise de conversa WhatsApp | Openclaw + LLM | Roda após cada conversa ou sob demanda |
| Análise de call | LLM + transcrição (Whisper ou Fathom API) | Cliente precisa enviar o arquivo |
| Follow-up inteligente | Openclaw + LLM + n8n | |
| Relatório individual vendedor | Openclaw + n8n (semanal/mensal) | |
| Lead scoring | Paperclip + LLM (dados agregados) | |
| Análise performance time | Paperclip + dashboard | |
| Reativação | Paperclip + n8n + LLM | |
| Padrões de objeção | LLM (análise batch das conversas) | Roda mensalmente |
| Relatório mensal | n8n (trigger mensal) + LLM + Paperclip | |

### O que é core (Dia 10 — go-live obrigatório)
- ✅ Script personalizado
- ✅ Próximo passo sugerido
- ✅ Alerta de esfriamento
- ✅ Lead scoring
- ✅ Identificação base para reativação
- ✅ Relatório mensal (versão básica)

### O que pode entrar progressivamente (após go-live)
- Análise de conversa WhatsApp → Semana 3–4
- Análise de call → Mês 2 (depende de cliente ter chamadas)
- Follow-up inteligente → Mês 2
- Análise de padrões de objeção → Mês 2 (precisa de volume de dados)

---

## Para o Lucas — Como vender as skills

### Argumento por dor

| Dor que o cliente fala | Skill que resolve | Como apresentar |
|------------------------|------------------|----------------|
| "Meu time não faz follow-up" | Alerta esfriamento + Follow-up inteligente | "A IA avisa o vendedor quando o lead está esfriando e já entrega a mensagem para mandar. Não tem desculpa para perder lead por falta de contato." |
| "Cada vendedor faz do seu jeito" | Script personalizado + Playbook | "A IA entrega o script certo para aquele lead. O time não precisa improvisar — segue o que funciona." |
| "Não sei quem do time está performando" | Análise de performance + Relatório individual | "Você vai ver, todo mês, quem fecha mais, quem demora para responder, quem recebe mais objeções. Sabe exatamente onde colocar coaching." |
| "Tenho uma base parada de X contatos" | Identificação de reativação | "A IA analisa essa base e diz quem tem mais chance de voltar a comprar agora. Você transforma contato parado em pipeline." |
| "Preciso gravar as calls para analisar" | Análise de call | "Manda a transcrição, a IA devolve o diagnóstico completo: onde o lead resistiu, qual objeção levantou, o que o vendedor pode fazer diferente." |

---

*Criado: 18/04/2026*
*Próxima revisão: após validação técnica com Hugo (quais skills são viáveis no go-live)*
