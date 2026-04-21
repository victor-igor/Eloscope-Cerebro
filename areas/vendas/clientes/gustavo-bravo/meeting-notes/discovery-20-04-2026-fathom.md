# Impromptu Google Meet Meeting - April 20 · Fathom Summary

**Gravação:** https://fathom.video/share/bbn2PZ64xUDRBL_cCeuQMDkH6bSPBMVe

---

## Propósito da reunião

Definir um fluxo de automação de conteúdo com IA para a Bravo Agency.

---

## Principais conclusões

- Adotar uma estratégia de automação modular: Construir o fluxo em etapas (análise, planejamento, criação, aprovação) para validar cada passo e evitar falhas caras ao fazer tudo de uma vez.
- Usar um conjunto híbrido de ferramentas para segurança: Utilizar ferramentas internas como o OpenCloud (uma alternativa mais flexível ao Cloud Code) para análise e criação, mas usar o n8n para toda a comunicação com o cliente para evitar expor sistemas internos.
- Migrar para um modelo de serviços de ticket alto: Focar em clientes de serviços com faturamento >R$25 mil/mês, oferecendo um novo pacote de R$1.300+ que inclui uma landing page e gestão do Google Meu Negócio.
- Colaborar no desenvolvimento: A Eloscope vai orientar a equipe da Bravo (Rafael, Javi) para construir o sistema, tornando o projeto mais acessível e garantindo propriedade interna.

---

## Tópicos

### Objetivo de automação da Bravo

- Objetivo: Automatizar o ciclo mensal de conteúdo para 20 clientes a fim de escalar as operações sem contratar mais equipe.
- Fluxo desejado:
  1. Análise (Dia 1): Uma IA analisa os dados do mês anterior e os ativos do cliente (site, branding).
  2. Planejamento: A IA elabora um plano de conteúdo para revisão humana.
  3. Aprovação: O plano aprovado por humanos é enviado ao cliente via email/WhatsApp, com lembretes automatizados.
  4. Criação: Planos aprovados disparam tarefas de design/copy com IA.
  5. Aprovação final: O cliente aprova o criativo final antes da publicação.

### Estratégia técnica e ferramentas

- Plataforma central: Usar o OpenCloud, uma alternativa open-source mais flexível ao Cloud Code baseado em terminal, para automação interna.
- Comunicação com o cliente: Usar o n8n para todas as interações voltadas ao cliente (envio de planos, solicitação de feedback).
  - Justificativa: A segurança do OpenCloud é insuficiente para acesso direto do cliente, pois ele se conecta a sistemas internos como Google Drive e bancos de dados.
- Gestão de agentes: Os agentes "Squads" adquiridos (por exemplo, IOX) precisam ser adaptados aos processos específicos da Bravo.
- Gestão de custos:
  - Desafio: Alto uso de tokens de modelos de IA (Claude, ChatGPT, Gemini) é um gasto significativo.
  - Solução: Implementar uma estrutura de memória de curto/longo prazo para os agentes.
    - Curto prazo: Usar um resumo conciso em Markdown (.md) para acesso rápido.
    - Longo prazo: Armazenar dados detalhados do cliente em uma pasta separada.
- Automação de landing page: Integrar o OpenCloud com a Vercel para automatizar o desenvolvimento front-end e a hospedagem.

### Estratégia de negócios e foco no cliente

- Problema: Gustavo está sobrecarregado com tarefas operacionais, o que o impede de focar em vendas.
- Solução: Migrar para um modelo de clientes de serviços com ticket mais alto.
  - Novo cliente ideal: Negócios de serviços (ex: clínicas, escritórios de advocacia) com faturamento >R$25 mil/mês.
  - Novo pacote (R$1.300+): Inclui uma landing page, gestão do Google Meu Negócio (via parceiro) e serviços de conteúdo/tráfego.
  - Estratégia: Usar o pacote para gerar leads e provar valor, induzindo os clientes a melhorarem seus próprios processos de vendas.

---

## Próximos passos

- **Eloscope:**
  - Elaborar uma proposta para um projeto de desenvolvimento colaborativo.
  - Agendar um follow-up para revisar a proposta com Gustavo e sua equipe.
- **Gustavo:**
  - Designar Rafael e Javi para trabalhar com a Eloscope no projeto de automação.

---

## Action Items

- Send Gustavo proposal re: modular automation (onboarding/analysis, copy, design) — [WATCH (5 secs)](https://fathom.video/share/bbn2PZ64xUDRBL_cCeuQMDkH6bSPBMVe?timestamp=2918.9999)

---

*Fonte: Fathom auto-summary · Salvo: 21/04/2026*
