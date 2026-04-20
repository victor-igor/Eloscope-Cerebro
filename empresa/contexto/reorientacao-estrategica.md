ELOSCOPE
Consultoria & Agentes de IA
DOCUMENTO DE REORIENTAÇÃO ESTRATÉGICA
Reunião Trimestral — 02 de Abril de 2026
Participantes: Eloscope (COO) & Victor Igor (CTO)
Classificação: Confidencial — Uso Interno

Sumário



1. Contexto e Objetivo do Documento
Este documento consolida os principais pontos levantados na Reunião Trimestral de 02/04/2026 entre Eloscope (COO) e Victor Igor (CTO), com foco na reorientação estratégica do negócio. O objetivo é servir como base de validação, auditoria e planejamento para a primeira entrega formatada da próxima semana.

Objetivo Central: Transição de modelo SaaS/Desenvolvimento sob demanda para um modelo de Serviço Cunhado com IA (Service-as-Software), focado em entregas escaláveis, educação e agentes prontos.

2. Diagnóstico do Negócio Atual
2.1 Situação Financeira
Situação crítica identificada na reunião, com os seguintes números levantados:

Indicador
Valor Atual
Observação
Faturamento (últimos 3 meses)
~R$ 25.000 – R$ 30.000
Muito abaixo do potencial
Caixa estimado
~R$ 18.000
Margem de operação mínima
Implantações ativas finalizadas
2 (em atraso)
Gianna e Morgana pendentes
Indicações recebidas
18+
Segmentos diferentes — sem verticalização
Meta de margem
30% sobre R$ 10M ARR
Meta de longo prazo

2.2 Problemas no Modelo de Entrega Atual
Os seguintes problemas estruturais foram identificados no modelo atual de entrega:

	•	Ciclo de implantação excessivamente longo — projetado para 1 mês, executado em 5+ meses
	•	100% da entrega baseada em desenvolvimento de sistema/software sob medida — alta complexidade, baixa margem e retrabalho constante
	•	Dependência do cliente utilizar o sistema: se o cliente não usa, o produto não gera valor e gera churn
	•	Uso de WhatsApp API não oficial (clandestina): alto risco regulatório, manutenção infinita e responsabilidade recaindo sobre a empresa
	•	Personalizações excessivas por projeto — impossível escalar sem aumentar headcount proporcionalmente
	•	Margens apertadas: R$12k de implantação + R$2-3k/mês de manutenção representa muito trabalho para pouco retorno recorrente
	•	Sem padronização de processos financeiros e comerciais — visão de caixa imprecisa e dificuldade de controle

2.3 Insight Estratégico Central
"A próxima empresa que vai faturar bilhões não é SaaS, é serviço cunhado com IA." — Victor Igor, Reunião Trimestral 02/04/2026


3. Proposta de Novo Modelo de Negócio
Com base na discussão, foi proposto um modelo de três pilares interdependentes que permitem escala sem crescimento proporcional de custo:

3.1 Pilar 1 — Educação & Comunidade
Modelo inspirado em players como G4 Educação, Alan Nicholas e Celo.ia. A ideia central é criar um ecossistema educacional que gera receita recorrente e alimenta o pipeline de clientes para os demais pilares.

	•	Plataforma de conteúdo educacional sobre IA, Cloud Code e agentes autônomos
	•	Comunidade fechada com acesso via assinatura mensal (modelo MRR)
	•	Aulas práticas com exemplos reais de automação para pequenas e médias empresas
	•	Conteúdo inicial voltado para uso eficaz das ferramentas — reduzindo churn pós-implantação

Formato
Pricing Proposto
Modelo de Receita
Comunidade (assinatura)
R$ 200 – R$ 500/mês
MRR recorrente
Treinamento intensivo
R$ 5.000 – R$ 14.000
One-time + follow-up
Conteúdo gratuito (topo de funil)
Gratuito
Geração de leads

3.2 Pilar 2 — Agentes de IA Prontos (Não customização)
Ao invés de desenvolver sistemas sob medida para cada cliente, a proposta é criar agentes pré-configurados e verticulalizados por função de negócio, vendidos como produto ou serviço gerenciado.

	•	Agente Financeiro: relatórios automáticos, fluxo de caixa, alertas de cobrança
	•	Agente de Marketing: análise de campanhas Meta/Google/TikTok, geração de relatórios de performance
	•	Agente de Vendas: SDR/BDR automatizado, qualificação de leads, acompanhamento de pipeline
	•	Agente CEO/CTO: briefings executivos, monitoramento de KPIs, síntese de informações

Tipo de Agente
Pricing Venda Única
Pricing Mensal (Gerenciado)
Complexidade
Agente simples (rule-based)
R$ 2.000 – R$ 5.000
R$ 500 – R$ 1.500/mês
Baixa
Agente customizado por vertical
R$ 5.000 – R$ 20.000
R$ 2.000 – R$ 5.000/mês
Média
Agente enterprise + integrações
R$ 50.000+
R$ 5.000 – R$ 15.000/mês
Alta

3.3 Pilar 3 — Consultoria Estratégica com IA
Serviço de alto valor agregado focado em entregar resultado mensurável — não vender ferramenta. O diferencial é a combinação de consultoria de processos com implementação de IA.

	•	Diagnóstico e mapeamento de processos do cliente (fase de entrada)
	•	Design e implementação de solução com agentes (Cloud Code + LLMs)
	•	Acompanhamento e iteração mensal pós-implantação
	•	Modelo de cobrança orientado a ROI — cliente paga pelo resultado, não pela hora

Fase
Entregável
Pricing
Diagnóstico + Design
Relatório + Plano de IA
R$ 10.000 – R$ 20.000
Desenvolvimento de Agente
Agente funcional em produção
R$ 20.000 – R$ 50.000
Operação Gerenciada
Manutenção + Evolução mensal
R$ 2.000 – R$ 5.000/mês


4. Stack Tecnológica e Ferramentas
4.1 Ferramentas Core
	•	Cloud Code (Anthropic Claude) — ferramenta central para desenvolvimento e operação dos agentes
	•	Meta Ads / Google Ads / TikTok Ads — fontes de dados para agentes de marketing
	•	ClickUp / Notion — integração para agentes de produtividade e gestão
	•	Supabase — banco de dados e backend para agentes
	•	N8N — orquestração de workflows e automações

4.2 Canais de Comunicação
Importante decisão estratégica identificada na reunião: migrar de WhatsApp API clandestina para alternativas oficiais e mais seguras:

	•	Telegram: mais aberto para bots e automações, recomendado para clientes tech/educação
	•	WhatsApp Business API oficial: permitida para agentes de negócio verticalizados (suporte, vendas, leads), mas chatbots genéricos estão sendo banidos pela Meta desde jan/2026
	•	Instagram API: canal adicional para integração de agentes de atendimento

Decisão: Descontinuar uso de WhatsApp API não oficial. Migrar para Telegram + WhatsApp Business API oficial nos novos projetos.

4.3 Infraestrutura
	•	Hostinger / Hetzner — provedores para implantação simplificada com templates
	•	Criar templates padronizados de deployment para reduzir tempo de implantação
	•	Organizar e otimizar servidores existentes (Supabase Maquilheira) para reduzir custos operacionais


5. Análise de Mercado e Benchmarks
5.1 Tamanho e Crescimento do Mercado
O mercado de agentes de IA está em expansão acelerada, tanto globalmente quanto no Brasil:

Indicador
Dado
Fonte/Período
Mercado global de AI Agents (2025)
USD 7,6 – 7,8 bilhões
Pesquisa de mercado 2025
Projeção do mercado global (2033)
USD 182 – 199 bilhões
CAGR ~49,6%
Investimento em IA no Brasil (2026)
R$ 3,4 bilhões
>30% crescimento YoY
Participação de agentes no orçamento IA
~1/3 do orçamento total
Empresas que investem em IA

Janela estratégica: Primeiros movers em verticais específicas capturam market share desproporcionalmente alto. Big 4 ignora PMEs; startups VC ainda imaturas — vácuo ideal para agências ágeis.

5.2 Benchmarks de Concorrentes
Referências estudadas na reunião e complementadas por pesquisa de mercado:

Empresa
Modelo
Pricing Estimado
Observação
G4 Educação
Educação + Agentes + Comunidade
R$ 3.900 – R$ 15.000+/ano
Referência principal citada
Alan Nicholas
Agentes prontos + skills + educação
R$ 5.000 – R$ 20.000
Mais técnico, comunidade ativa
Celo.ia (CODA)
Comunidade de IA acessível
R$ 500 – R$ 2.000/mês
Modelo de menor ticket
FCamara
Consultoria IA enterprise
R$ 200.000 – R$ 500.000+
Segmento enterprise
Ateliware
Software house IA/ML
R$ 50.000 – R$ 500.000
Customizado

5.3 Por que Service-as-Software ganha do SaaS tradicional
Dimensão
SaaS Tradicional
Service-as-Software (IA)
O que o cliente paga
Ferramenta (software)
Resultado automatizado
Margem típica
60 – 70%
75 – 85%
Resistência de compra
Alta (precisa aprender a usar)
Baixa (venda por ROI)
Escala
Linear (requer mais clientes)
Exponencial (agentes operam 24/7)
Churn
Alto (cliente desengaja)
Baixo (resultado contínuo)


6. Clientes Atuais — Insights e Aprendizados
A reunião trouxe reflexões importantes sobre os clientes ativos e o que cada caso ensina sobre o modelo de negócio:

Cliente
Status
Aprendizado Chave
Matheus
Melhor cliente ativo
Documenta bem, investe R$20k em tráfego, quer otimização de campanhas com IA — perfil ideal de ICP
Fran (Clínica)
Ativo, resultado interno
Sistema de agendamento funciona mas retorno é produtividade (não receita) — difícil de vender ROI
Morgana
Em implantação (atraso)
Projeto complexo com WhatsApp — valida o problema de ciclo longo de entrega
Gianna
Em implantação (atraso)
Reforça necessidade de simplificar o modelo de entrega
Voltrux
Perdido por baixo uso
Nunca usou o sistema entregue — processo comercial do cliente fraco. Lição: qualificar uso pós-venda

Key Learning: Clientes que usam o produto ficam. Clientes que não usam geram churn. O novo modelo precisa garantir adoção — seja via educação, acompanhamento ou produto que funciona sem esforço do cliente.


7. Próximos Passos e Ações Imediatas
7.1 Ações para Esta Semana (até 08/04/2026)
Victor Igor
	•	Pesquisar modelos de integração e entrega com Cloud Code e agentes de IA para clientes
	•	Pesquisar como G4, Alan Nicholas e Celo entregam seus produtos (pricing, formato, suporte)
	•	Refinar e desenvolver agentes Cloud Code para geração de relatórios automáticos
	•	Definir estrutura e metodologia de venda e entrega dos agentes (acesso, atualizações, manutenção)
	•	Pesquisar integração dos agentes com ferramentas de mercado: ClickUp, Trello, Meta Ads
	•	Auxiliar na criação e organização da comunidade para treinamento de clientes

Eloscope
	•	Elaborar modelo educacional + serviço prático para oferecer Cloud Code de forma acessível a clientes
	•	Criar templates de implantação para simplificar entrega em provedores como Hostinger e Hetzner
	•	Desenvolver plano de lançamento da oferta de treinamento e serviços com acompanhamento inicial
	•	Pesquisar concorrentes e modelos de agentes IA no segmento — incluindo ClickUp, Obsidian como referências
	•	Organizar e resolver dados financeiros (caixa, faturamento, pendências de cobrança)
	•	Preparar materiais para escalar oferta com foco em processos, não em produto final complexo

Victor Igor + Eloscope (Conjunto)
	•	Reunião de alinhamento no sábado (05/04) — manhã — para definir roadmap e ICP
	•	Preparar validação inicial de mercado para ofertas combinadas: educação + implantação + assinatura de agentes
	•	Definir primeiro produto lançável para a próxima semana (MVP agente ou oferta educacional)

7.2 Roadmap de 90 Dias
Período
Foco
Meta de MRR
Entregas-chave
Semana 1-2 (Abr)
Definição de ICP + MVP de agente
R$ 0 (validação)
1 agente funcional, 3 pilotos recrutados
Semana 3-4 (Abr)
Validação com pilotos + playbook de vendas
R$ 2.000 – R$ 5.000
Case study inicial, 1-pager com ROI
Maio
Lançamento da oferta + primeiras vendas
R$ 8.000 – R$ 15.000
Comunidade ativa, 5-7 clientes, templates
Junho
Escala + verticalização
R$ 15.000 – R$ 25.000
2ª vertical, playbook refinado, 10+ clientes


8. Primeiro Formato de Entrega — Semana de 07/04/2026
Com base em tudo discutido, o primeiro produto/entrega validável para a próxima semana deve ter as seguintes características:

8.1 O que Entregar
	•	Um agente de IA funcional focado em análise de campanhas de marketing (Meta Ads / Google Ads) — perfil do cliente Matheus como ICP de validação
	•	Entregável: Relatório automático de performance de campanhas gerado pelo agente, com insights e sugestões de otimização
	•	Formato de acesso: Dashboard simples ou envio via WhatsApp/Telegram com resumo semanal

8.2 Por que este produto
	•	Resolve dor clara e mensurável (tempo gasto em análise de campanhas = 10-40h/mês)
	•	ROI facilmente calculável e apresentável em pitch de vendas
	•	Usa a tecnologia que já existe (Cloud Code + APIs de Meta/Google)
	•	Pode ser replicado para múltiplos clientes sem grande customização
	•	Matheus já é cliente ativo — validação com risco mínimo

8.3 Critérios de Validação
Critério
Meta Mínima
Como Medir
Funcionamento técnico do agente
100% funcional
Teste interno antes de apresentar ao cliente
Tempo de geração do relatório
Menos de 5 minutos
Cronometrar execução
Aprovação do cliente piloto (Matheus)
Sim / Quer continuar
Feedback direto na reunião de validação
Precificação testada
R$ 500 – R$ 1.500/mês
Teste de aceitação do pricing
Documentação mínima do processo
1 pager + vídeo demo
Criado e revisado pela dupla

9. Checklist de Auditoria e Validação
Use este checklist na reunião de sábado (05/04) e na revisão da próxima semana:

Item de Validação
Responsável
Status
Data Limite
ICP definido (setor, porte, dor primária)
Ambos
Pendente
05/04/2026
Vertical escolhida para MVP
Ambos
Pendente
05/04/2026
Agente v1 funcional (análise de campanhas)
Victor
Pendente
07/04/2026
Templates de deployment criados
Eloscope
Pendente
07/04/2026
Pesquisa de concorrentes consolidada
Victor
Pendente
05/04/2026
Modelo de pricing definido
Ambos
Pendente
05/04/2026
Situação financeira organizada
Eloscope
Pendente
05/04/2026
1-pager da oferta redigido
Ambos
Pendente
07/04/2026
Piloto recrutado para teste
Ambos
Pendente
07/04/2026
Plano de comunidade/educação esboçado
Ambos
Pendente
11/04/2026


10. Considerações Finais e Riscos
10.1 Riscos Identificados
	•	Risco de execução paralela: tentar manter projetos antigos (Morgana, Gianna) enquanto pivota pode dividir o foco — avaliar priorização clara
	•	Risco de mercado: o segmento de agentes de IA está em rápida evolução — concorrentes surgem em semanas, não meses
	•	Risco financeiro imediato: caixa de R$18k é crítico — garantir cobrança dos clientes ativos antes de investir em produto novo
	•	Risco de churn: clientes atuais podem perder interesse se o modelo de entrega mudar radicalmente — comunicar mudanças com cuidado

10.2 Forças do Negócio
	•	Equipe técnica competente com experiência real em Cloud Code e automação
	•	Base de clientes ativa (mesmo que pequena) com casos de uso reais
	•	18+ indicações recebidas — sinal de mercado e confiança no nome
	•	Conhecimento profundo das dores do cliente PME brasileiro
	•	Timing perfeito: o mercado de agentes de IA no Brasil ainda não tem líderes consolidados em PMEs

Momento é agora. A janela para se tornar early mover em serviços de IA para PMEs brasileiras é de 12-18 meses. A estrutura e o aprendizado já estão disponíveis — falta execução focada e modelo de entrega simples.


Documento gerado em 02 de Abril de 2026 | Revisão prevista: 05/04/2026 (Reunião de Sábado)
Eloscope COO: ___________________     Victor Igor CTO: ___________________
