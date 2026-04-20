ELOSCOPE
Academia de IA & Agentes Inteligentes
PLANO ESTRATÉGICO CONSOLIDADO
Reunião Trimestral 02/04 + Análise de Pipeline + Benchmarks + Plano de Ação
04 de Abril de 2026  |  Validação: Sábado 05/04/2026

Sumário



1. De Onde Viemos — Diagnóstico
1.1 Situação Atual
Dados levantados na Reunião Trimestral de 02/04/2026 entre Eloscope (COO) e Victor Igor (CTO):

Indicador
Valor
Observação
Faturamento (3 meses)
~R$ 25-30k
Abaixo do potencial
Clientes com setup fechado
9 ativos no Drive
Matheus, Jean, Morgana, Fran, Denis, Voltrucks, Elopoly, Clinica Ilumine, Deolane/Maestria
Ticket médio de setup
~R$ 12-15k
Validado com Matheus e Imobiliária Rodrigues
Pipeline aberto (Orçamentos)
46 leads mapeados
7 verde, 6 laranja, 8 marrom, 5 vermelho, 19 sem cor
Tempo médio de implantação
3-5 meses
Meta: reduzir para 1-2 semanas com Claude Code

1.2 Problemas Identificados
	•	Modelo 100% customizado — cada cliente exige desenvolvimento sob medida, impossível escalar
	•	N8N como stack principal ficando lento vs. evolução do mercado (Claude Code, Cowork, agentes nativos)
	•	Ciclo de implantação longo consome margem — o que deveria ser 30 dias vira 5 meses
	•	Dependência do cliente usar o sistema: se não usa, não gera valor, gera churn (caso Voltrucks)
	•	WhatsApp API não oficial: risco regulatório crescente (Meta baniu chatbots genéricos em jan/2026)
	•	Sem processo de qualificação pré-venda: 18+ indicações em segmentos diferentes, sem verticalização


2. Para Onde Vamos — O Novo Modelo
2.1 Tese Central
Migrar de empresa de desenvolvimento de software para Academia de IA com repositório de agentes e serviço de implementação premium.

O modelo combina três fontes de receita que se alimentam mutuamente: educação cria consciência e leads qualificados, o repositório de agentes gera receita recorrente de volume, e a implementação gera receita alta por cliente para quem quer resultado sem se envolver na parte técnica.

2.2 Infraestrutura Técnica — O que Já Existe
A Eloscope já está construindo a base técnica para esse modelo:

	•	Monorepo single-tenant em desenvolvimento — arquitetura que suporta skills, agentes e triggers nativos
	•	Migração progressiva da lógica de N8N para o ecossistema próprio (squads, triggers, orquestradores)
	•	Claude Code como ferramenta central de desenvolvimento — reduz tempo de construção de agentes de semanas para dias
	•	Cowork acelera prototipagem e documentação de agentes
	•	Capacidade comprovada: agentes contextualizados já entregues (Jade/Matheus, Imobiliária Rodrigues, etc.)

Vantagem competitiva: vocês já têm o core técnico que Viver de IA usa Lovable para construir e que G4 terceiriza via parceiros. A diferença é que vocês constroem os agentes de verdade, não apenas ensinam a usar.

2.3 As Três Camadas do Modelo

Camada
O que é
Público
Ticket
Modelo de Receita
Academia (Educação)
Aulas semanais ao vivo + conteúdo prático
Gestores de tráfego, e-commerce, marketing digital
Gratuito (topo) + R$ 200-500/mês (comunidade)
MRR de volume + qualificação de leads
Repositório de Agentes
Agentes e skills prontos para copiar, configurar e rodar
Profissionais com consciência digital alta
R$ 500-2.000/mês (assinatura)
MRR recorrente, valor acumulativo
Implementação Premium
Onboarding completo: dossiê, FAQ, contexto, agente personalizado
Empresas que querem resultado sem operar
R$ 15.000+ (setup) + R$ 2-5k/mês
Revenue alta por cliente


3. Quem é o Cliente — Filtro de Consciência
3.1 Por que Consciência > Setor
A decisão mais importante para o novo modelo não é escolher um setor — é filtrar por nível de consciência digital. Um dono de e-commerce com R$ 20k em tráfego entende o valor de um agente de análise em 30 segundos. Um dono de loja física grande, mesmo com ticket maior, pode levar meses para entender por que deveria pagar R$ 15k por algo que ele não consegue visualizar.

Perfil
Consciência
Ciclo de Venda
Ticket Potencial
Prioridade
Gestor de tráfego / Media Buyer
Alta — fala em ROAS, CPA, funil
1-2 semanas
R$ 500-2k/mês (repo) ou R$ 15k+ (impl.)
P1 — Imediato
E-commerce (dono ou gerente)
Alta — vive de dados e campanhas
2-3 semanas
R$ 800-2k/mês (repo) ou R$ 15k+ (impl.)
P1 — Imediato
Agência de marketing digital
Alta — pode ser canal de revenda
2-4 semanas
R$ 2-5k/mês (parceria/white-label)
P1 — Canal
Clínica/consultório com marketing ativo
Média-alta — usa Meta Ads, precisa de agendamento
3-4 semanas
R$ 500-1.5k/mês (repo) ou R$ 12-15k (impl.)
P2 — Próximo
Loja física grande sem digital
Baixa — precisa educação antes
2-4 meses
R$ 15k+ mas após longa educação
P3 — Futuro (via academia)

3.2 O Filtro na Prática
Três perguntas que qualificam antes de qualquer proposta:

	•	"Onde ficam os dados que você quer automatizar?" — Se responde Meta Ads, Google Analytics, planilha: alta consciência. Se responde "sistema do fulano": avaliar complexidade.
	•	"O que especificamente você gostaria que o agente fizesse toda semana?" — Se responde em uma frase clara: pronto para comprar. Se não consegue articular: precisa de educação primeiro.
	•	"Quem na sua equipe vai garantir que os dados chegam?" — Se tem alguém: viável. Se depende de exportação manual sem responsável: risco alto de churn.


4. Benchmarks — O que o Mercado Ensina
4.1 Viver de IA (Rafael Milagre)
Dimensão
Dado
Faturamento em 6 meses
R$ 21 milhões
Meta 2026
R$ 100 milhões
Empresas na base
1.200+ (incluindo WEG e G4)
Ticket médio
R$ 3.500/mês (assinatura anual)
Plataforma
Construída em 90 dias com Lovable (no-code), 1 pessoa
Crescimento
100% orgânico, sem investimento externo, lucrativo desde o mês 1
Modelo
Club (educação + comunidade + agentes prontos plug-and-play + suporte)
Diferencial
Conteúdo novo todo mês, prático, agentes para copiar e adaptar

4.2 G4 (ex-G4 Educação)
Dimensão
Dado
Faturamento 2025
R$ 509 milhões (+60% YoY)
Meta 2027
R$ 1 bilhão
Base de PMEs
77.000 empresas
Reposicionamento
Tirou "Educação" do nome — agora é plataforma de negócios para PMEs
G4 Learning
Programas presenciais, ticket ~R$ 25k (Academia de IA: 1 dia, ferramentas configuradas no ato)
G4 Communities
G4 Scale, G4 Club — comunidades de execução e networking (MRR)
G4 Tools (Marketplace)
105 parceiros, meta R$ 250M em 2026 — conecta PMEs a fornecedores de soluções
Parceria Viver de IA
Aliança formal — educação em volume (Viver de IA) + profundidade (G4)

4.3 O que Isso Significa para a Eloscope
	•	Viver de IA prova que educação + agentes prontos gera receita massiva sem investimento inicial
	•	G4 prova que ticket alto (R$ 15-25k) funciona quando o cliente chega educado
	•	G4 Tools é um marketplace aberto procurando fornecedores de implementação de IA — oportunidade direta para a Eloscope
	•	Nenhum dos dois faz implementação profunda e contextualizada — esse espaço está vazio
	•	O ecossistema monorepo + skills + agentes que vocês estão construindo é MAIS técnico que o que ambos oferecem

Posicionamento: Eloscope não compete com Viver de IA nem G4. Ocupa o último metro do funil que ambos criam — a implementação real. E cria seu próprio funil via Academia + Repositório.


5. Dados de Mercado
Indicador
Dado
Fonte/Período
Mercado global AI Agents (2025)
USD 7,6-7,8 bilhões
Market Research 2025
Projeção global (2033)
USD 182-199 bilhões
CAGR ~49,6%
Investimento IA no Brasil (2026)
R$ 3,4 bilhões
>30% crescimento YoY
PMEs no Brasil
~2,5 milhões com >R$ 50k/ano em SaaS/digital
Estimativa de mercado
Service-as-Software margem
75-85% (vs. SaaS 60-70%)
Tendência 2025-2026

6. Pipeline Atual — 46 Leads Mapeados
Base completa extraída da pasta Orçamentos do Google Drive:

Status
Qtd
% do Total
Ação com Novo Modelo
Verde (Clientes Ativos)
7
15%
Upsell: agente complementar + entrada na comunidade
Laranja (Pipeline)
6
13%
Retomar com proposta simplificada + ROI claro
Marrom (Lead Frio)
8
17%
Reativar via conteúdo educativo da Academia
Vermelho (Perdido)
5
11%
Testar 2 seletivos com produto de entrada menor
Sem Cor (Novo)
19
41%
Qualificar 7 de alta prioridade (Innover, Bravo, Philip, etc.)
Azul (Especial)
1
2%
Lifeskill Levy — parceiro potencial em educação
TOTAL
46
100%


MRR potencial estimado com base existente (90 dias): R$ 10.800/mês (conservador) a R$ 20.000+/mês (otimista) — sem gerar leads novos.


7. Primeiro Produto da Academia — Esta Semana
7.1 O que Exportar
O repositório não precisa ser construído do zero. A lógica já existe nos agentes que vocês entregam hoje. O trabalho da semana é generalizar um agente existente e disponibilizar como primeiro produto.

Opção
Descrição
Tempo
Dificuldade
Impacto
Agente de Análise de Campanhas
Generalizar o agente do Matheus (sem dados do cliente), exportar como template
2-3h
Baixa
Alto — público de tráfego reconhece valor imediatamente
Workflow N8N Exportado
Exportar JSON de um workflow funcional + Loom de 5min mostrando configuração
1-2h
Muito Baixa
Médio — mostra capacidade técnica, atrai público N8N
Template de Prompt System
Dossiê-base de agente contextualizado (formato .md) com instruções de adaptação
1h
Mínima
Médio — demonstra metodologia de contextualização
Agente SDR/Qualificação
Exportar lógica de agente BDR/SDR já testado — qualificação de leads
2-3h
Baixa
Alto — dor universal para quem roda tráfego

Recomendação: começar pelo Agente de Análise de Campanhas (já existe, público de alta consciência, case comprovado com Matheus).

7.2 Formato da Aula Semanal
	•	Duração: 20-30 minutos, ao vivo
	•	Plataforma: Instagram Live ou YouTube (onde já têm presença)
	•	Formato: tela aberta, agente rodando ao vivo, resultado aparecendo em tempo real
	•	Conteúdo: mostrar o agente funcionando — não ensinar teoria de IA
	•	Call to action final: "quer esse agente? Entra no grupo" (link para WhatsApp/Telegram)
	•	O grupo É a academia por enquanto — sem site, sem plataforma, sem logo

7.3 O que NÃO Fazer Agora
	•	Não criar plataforma ou site da academia
	•	Não gravar curso editado
	•	Não desenhar marca/logo
	•	Não tentar atingir público de baixa consciência
	•	Não parar as entregas de clientes ativos


8. Roadmap de 90 Dias
Período
Foco
Entregas
Meta
Semana 1 (07-11/04)
Lançamento mínimo
1 agente exportado, 1 aula ao vivo, grupo criado
20+ pessoas no grupo, validar interesse
Semana 2-3 (14-25/04)
Iteração + conteúdo
2 aulas, 2 agentes no repo, coletar feedback
50+ no grupo, 3 conversas de venda iniciadas
Semana 4 (28/04-02/05)
Primeira venda
Oferta formal do repositório (assinatura) + oferta de implementação
1 assinante pago + 1 proposta de R$ 15k enviada
Maio
Escala do repositório
4-6 agentes no repo, aula semanal consistente, primeiros cases documentados
R$ 5-8k MRR (repo) + 1-2 onboardings fechados
Junho
Comunidade + parceria
Proposta G4 Tools, parceria com 1 agência, comunidade ativa
R$ 15-25k MRR total, 100+ na comunidade

9. Plano de Ação — Semana 07-11/04/2026

Dia
Ação
Responsável
Tempo
Entregável
Seg 07/04
Generalizar agente de análise de campanhas (tirar dados Matheus)
Victor
2-3h
Template de agente pronto para distribuir
Seg 07/04
Criar grupo WhatsApp/Telegram da Academia
Eloscope
30min
Grupo ativo com descrição e regras
Ter 08/04
Primeira aula ao vivo (agente de campanhas rodando)
Eloscope + Victor
30min (live)
Gravação da aula + link do grupo no final
Qua 09/04
Exportar 1 workflow N8N como JSON + gravar Loom
Victor
1-2h
JSON + vídeo de setup no grupo
Qui 10/04
Retomar top 4 leads laranja com nova proposta simplificada
Eloscope
2h
4 mensagens enviadas + 2 calls agendadas
Sex 11/04
Analisar: quantos entraram, o que perguntaram, interesse em pagar
Ambos
1h
Decisão: repetir formato ou ajustar

10. Entregas de Clientes — Paralelo
As entregas dos clientes ativos continuam normalmente. A academia não substitui o serviço — ela se alimenta dele:

Cliente
Status
Entrega Pendente
Conexão com Academia
Matheus Jade Joias
Ativo
Manutenção + evolução do agente Jade
Case de referência para aula de campanhas
Imobiliária Rodrigues
Ativo
Manutenção + evolução do sistema
Case de referência para agente SDR/imobiliário
Morgana Sales Estética
Em implantação
Finalizar WhatsApp + agendamento
Case futuro para vertical saúde/estética
Denis Maqlam
Ativo
Manutenção
Case futuro para vertical beleza
ReabilitaCão (Dra. Fran)
Ativo
Agendamento + relatórios
Case futuro para agente de agendamento

Regra: a aula ao vivo mostra o que vocês JÁ fazem. Não é trabalho extra — é documentação do trabalho existente. A cada entrega de cliente, um novo agente pode ser generalizado e adicionado ao repositório.


11. Checklist — Reunião de Sábado 05/04

Item de Decisão
Opções
Decidir Até
Qual agente exportar primeiro?
Campanhas (recomendado) / SDR / Workflow N8N
Sábado
Plataforma da aula ao vivo?
Instagram / YouTube / Ambos
Sábado
Grupo: WhatsApp ou Telegram?
WhatsApp (mais acessível) / Telegram (melhor para bots)
Sábado
Quem faz a live?
Eloscope / Victor / Ambos
Sábado
Dia fixo da aula semanal?
Terça / Quarta / Quinta
Sábado
Nome provisório da academia?
Definir algo simples (pode mudar depois)
Sábado
Top 4 leads laranja para retomar?
Selecionar da lista de pipeline
Sábado
Modelo de pricing do repositório?
R$ 97/mês (entrada) / R$ 297/mês (completo) / Definir depois
Próxima semana
Proposta para G4 Tools?
Iniciar conversa / Aguardar mais cases
Definir em maio


Documento consolidado em 04 de Abril de 2026
Base: Transcrição Fireflies 02/04 + Google Drive (Orçamentos + Clientes) + Pesquisa de Mercado
Próxima revisão: Sábado 05/04/2026 (manhã)

Eloscope COO: ___________________     Victor Igor CTO: ___________________
