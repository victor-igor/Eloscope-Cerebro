# Formato 1 — Implantação de IA no Processo

> Modelo: Done-for-you · 6 semanas · escopo fixo
> Eloscope constrói. Equipe do cliente opera.

---

## O que é

A Eloscope implanta um sistema de automação com IA dentro da empresa do cliente — cobrindo infraestrutura, memória persistente e até 3 processos recorrentes automatizados. Ao final das 6 semanas, o sistema roda com a equipe do cliente.

**Não é consultoria.** Constrói ao vivo, entrega funcionando, treina quem vai operar.

---

## Escopo — o que está incluído

| # | Entrega | O que é |
|---|---------|---------|
| — | Infraestrutura | Instalação do Claude Code, OpenClaw, GitHub e Vercel |
| 0 | Segundo Cérebro da Empresa | Memória permanente: quem é a empresa, como opera, quem são os clientes |
| 1–3 | Até 3 processos automatizados | Definidos no kick-off — dentro dos critérios de elegibilidade abaixo |
| 4 | Integrações | Conexão com ferramentas listadas na tabela de compatibilidade |

**Limites fixos:** 3 processos · máx. 5 automações por processo · 3 casos/clientes piloto · 8 sessões · 6 semanas.
Escopo adicional é orçado à parte.

---

## Critérios de elegibilidade de processo

Para entrar no escopo da implantação, um processo precisa atender **todos** os critérios:

| Critério | Elegível | Fora do escopo |
|----------|----------|----------------|
| Tipo de operação | Geração de texto, análise de documentos, classificação, resumo, geração de briefing | Processos que exigem lógica de negócio complexa ou cálculo financeiro |
| Integrações | Ferramentas da tabela de compatibilidade (Notion, ClickUp, n8n, etc.) | APIs externas que exigem desenvolvimento de conector customizado |
| Frequência | Recorrente (diário, semanal, mensal) | Processo pontual ou sob demanda complexa |
| Entrada de dados | Formulário, arquivo de texto, markdown, link público | Banco de dados proprietário, ERP, sistema legado |
| Complexidade | Fluxo linear com até 3 etapas encadeadas | Fluxos com ramificações condicionais complexas ou múltiplos sistemas simultâneos |

**Na prática:** se o processo exige um desenvolvedor para ser construído, está fora do escopo desta implantação.

---

## Escopo negativo — o que NÃO está incluído

- Execução dos processos automatizados (a Eloscope implanta, não opera)
- Desenvolvimento de conectores ou APIs customizadas
- Integração com ERPs, CRMs proprietários ou sistemas legados
- Processos com mais de 3 etapas encadeadas ou lógica condicional complexa
- Configuração de ferramentas fora da tabela de compatibilidade
- Treinamento de mais de 3 pessoas
- Manutenção após os 30 dias de suporte pós-entrega
- Mais de 5 automações por processo
- Processos além dos 3 definidos no kick-off
- Estratégia de negócio ou consultoria operacional

---

## Como funciona

### Infraestrutura — Semana 1

Configura o ambiente completo antes de qualquer automação.

**O que é entregue:**
- **Claude Code** — interface principal para trabalho interativo com IA
- **OpenClaw** — orquestra agentes de forma autônoma e agendada (executa processos sozinho no dia/hora programados, sem intervenção manual)
- **GitHub** — repositório privado para versionar o Segundo Cérebro, automações e configurações. Backup, histórico e colaboração da equipe
- **Vercel** — hospedagem para qualquer entregável web gerado pelo sistema (páginas, relatórios, dashboards). Publicação automática via GitHub

| Ferramenta | Função |
|------------|--------|
| Claude Code | Trabalho interativo — você pede, ele executa |
| OpenClaw | Execução autônoma — roda sozinho no horário programado |
| GitHub | Versionamento — nada se perde, equipe colabora |
| Vercel | Publicação web — agente gera, Vercel publica automaticamente |

---

### Módulo 0 — Segundo Cérebro da Empresa
**Semana 1**

Memória permanente que faz a IA conhecer a empresa antes de você digitar a primeira palavra. Sem isso, cada sessão começa do zero.

**O que é entregue:**
- Arquivo de identidade da empresa (o que faz, como opera, tom de comunicação, regras)
- Estrutura de pastas: clientes/casos, processos, decisões, pendências
- Perfil padrão para cada cliente ou caso recorrente
- Protocolo de atualização: quando e como manter o Segundo Cérebro atualizado

**Resultado:** a IA já conhece a empresa e seus clientes antes de qualquer interação.

---

### Módulos 1, 2 e 3 — Processos Automatizados
**Semanas 2–5**

Os 3 processos são mapeados e priorizados no kick-off com base em:
- Frequência (o que acontece todo dia, semana ou mês)
- Volume (o que toma mais tempo da equipe)
- Padronização (o que segue sempre a mesma lógica)

**Exemplos de processos que podem ser automatizados** (não limitado a):
- Análise e onboarding de novo cliente
- Geração de planejamento ou relatório periódico
- Produção de documentos, briefings ou propostas
- Triagem e classificação de informações recebidas
- Geração de comunicações padronizadas
- Qualquer processo recorrente que hoje é feito manualmente

**Para cada processo, a Eloscope entrega:**
- Automação configurada e funcionando
- Integração com as ferramentas que a empresa já usa
- Documentação de operação (como acionar, o que esperar, como ajustar)
- Equipe treinada para operar

---

### Módulo 4 — Integrações e Loop de Comunicação
**Semanas 5–6**

Conecta o sistema às ferramentas existentes e fecha o ciclo de aprovação/comunicação.

**O que é entregue:**
- Integração com ferramenta de gestão de tarefas da empresa (Notion, ClickUp, Trello, planilha, etc.)
- Fluxo de comunicação automatizado via canal escolhido (WhatsApp, email, Slack, etc.)
- Rastreamento de status dos processos
- Orientação de segurança: o que pode e o que não pode ser exposto externamente

---

## Cronograma

| Semana | Sessão | Duração |
|--------|--------|---------|
| 1 | Kick-off: mapeamento dos 3 processos + definição de ferramentas | 2h |
| 1 | Infraestrutura + Segundo Cérebro | 2h |
| 2 | Processo 1: construção + teste | 2h |
| 3 | Processo 2: construção + teste | 2h |
| 4 | Processo 3: construção + teste | 2h |
| 5 | Integrações + loop de comunicação | 2h |
| 5 | Ajustes e testes com casos reais | 1.5h |
| 6 | Entrega final + handoff de operação | 2h |

**Total:** 8 sessões · ~15.5h em 6 semanas

---

## Ferramentas — a empresa usa o que já tem

A Eloscope adapta o sistema para as ferramentas que a empresa já usa. Não é necessário trocar nada.

| Categoria | Exemplos compatíveis |
|-----------|---------------------|
| IA principal | Claude, ChatGPT, Gemini |
| Gestão de tarefas | Notion, ClickUp, Trello, Asana, planilha |
| Automação | n8n, Make, Zapier |
| Comunicação | WhatsApp Business, email, Slack |
| Publicação web | Vercel, Netlify |

---

## Pricing

```
Setup (6 semanas):              R$3.000 (pago antes de começar)
Suporte pós-entrega (opcional): R$1.000/mês (máx. 3 meses)
Escopo adicional:               orçado à parte
```

---

## Garantia

> "Se ao final das 6 semanas o Processo 1 não estiver funcionando com os casos piloto definidos no kick-off, continuamos as sessões sem custo adicional até entregar."

---

*Atualizado: 21/04/2026*
