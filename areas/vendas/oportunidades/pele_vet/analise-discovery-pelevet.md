---
tipo: discovery
status: discovery-concluido
cliente: pele-vet
segmento: clinica-veterinaria
data-discovery: 2026-05-07
proximo-passo: reuniao-tecnica-presencial
tags:
  - cliente/pele-vet
  - vendas/oportunidade
  - segmento/veterinaria
  - discovery
fontes:
  - "[[transcricao-discovery-pelevet]]"
  - anotacao-manual-discovery
---

# PeleVet Cuidados Integrados — Análise de Discovery

> [!info] Sobre este documento
> Consolidação das **anotações manuais** + **transcrição da reunião** (`discobery-pele-vet.m4a`).
> Em divergências, prevalecem as **anotações manuais** (transcrição erra valores/nomes). Ver seção [[#Divergências e pontos a confirmar]].

---

## 1. Resumo executivo

Clínica veterinária especializada (dermatologia + endocrinologia + banho dermatoterapêutico) buscando **substituir/complementar o SimplesVet** por uma solução personalizada que resolva 3 dores centrais:

1. **Financeiro estruturado** com centros de custo (consultório A, consultório B, pet shop, banho) e dashboards casados (faturamento bruto, líquido, recebido).
2. **CRM + IA de atendimento** integrados ao prontuário, para qualificar leads e responder fora do horário comercial.
3. **Plano de acompanhamento de doenças crônicas** (módulo recorrente) e gestão de pacotes/serviços.

Operação enxuta (1 recepcionista, 2 sócias-veterinárias), tráfego pago já roda há tempo (R$ 1.000/mês, ~250 leads/mês a R$ 2,30 CPL), mas **conversão trava no físico** porque não há braço para receber e qualificar o lead.

**Temperatura:** quente. Já pediram proposta. Reunião técnica marcada com o Vítor.

> [!success] Diagnóstico de potencial (ver [[analise-mercado-sjrp]])
> A PeleVet captura **<3% do TAM dermatológico** e **<16% do SAM premium** de São José do Rio Preto. O ticket de R$ 700 está no **topo nacional** (equivalente a clínicas premium da capital paulista). LTV/CAC estimado: **30-90×**.
> 
> **O problema NÃO é mercado, NÃO é preço, NÃO é tráfego — é conversão (1,5%).** Dobrar pra 3% = +5-10 clientes novos/mês com **R$ 0 a mais em mídia**, cada um com LTV de R$ 10K-30K.
> 
> Concorrência direta no nicho (dermato vet) em SJRP: praticamente só **Zilda Mayer** (35+ anos, generalista com dermato). **Oceano azul regional.**

---

## 2. Empresa e contexto

| Campo | Detalhe |
|-------|---------|
| **Razão social/marca** | PeleVet → **PeleVet Cuidados Integrados** (rebranding em dez/2024) |
| **Origem** | Operação desde 2017 (era só dermatologia) |
| **Especialidades atuais** | Dermatologia, Endocrinologia, Banho Dermatoterapêutico, venda de produtos prescritos |
| **Não atendem** | Internação, consulta geral, vacinação, cirurgia, estética geral, pet shop completo |
| **Localização** | Rio Preto (mesma cidade da Eloscope) |
| **E-mail oficial** | pellevetoficial@gmail.com |

> [!note] Marco de dez/2024
> A Sílvia passou a atender **endocrinologia** e foi adicionado o **banho dermatoterapêutico**. Antes era só dermato. O rebranding "Cuidados Integrados" reflete essa expansão.

---

## 3. Estrutura societária e centros de custo

> [!important] Modelo de negócio peculiar
> Esse desenho determina toda a necessidade do módulo financeiro.

```
PeleVet (todo)
├── Consultório
│   ├── Veterinária A — Sílvia de Paula → custos e receitas próprios
│   └── Veterinária B — Sílvia (sobrenome a confirmar) → custos e receitas próprios
├── Pet Shop (só produtos prescritos) → sociedade 50/50
└── Banho Dermatoterapêutico → sociedade 50/50
```

- **Cada veterinária responde pelos próprios custos e receitas no consultório** (produtos comprados, consultas, etc.).
- **Pet shop e banho** são sociedade 50/50.
- O sistema atual (SimplesVet) **não permite essa separação** — falta centro de custo e contas contábeis configuráveis.

---

## 4. Stakeholders

| Pessoa | Papel | Observações |
|--------|-------|-------------|
| **Sílvia de Paula** | Sócia-veterinária | Dermato + Endocrinologia (entrou em endo em dez/2024). |
| **Sílvia** *(sobrenome a confirmar)* | Sócia-veterinária | Veterinária B do consultório. |
| **Thaísa** | Estrategista de Marketing (acumula Financeiro) | **Não é sócia.** Faz financeiro, atendimento, ajuda no banho, marketing. **Dor principal: tirar a Thaísa do financeiro** para liberá-la 100% para marketing. |
| Recepcionista | Atendimento de campo | Faz mensagens de confirmação manualmente. |
| Alida | Apoio (mídias/Meta) | Referência para configurar API oficial Meta. |

> [!note] As duas sócias são "Silvia"
> Sílvia de Paula + outra Sílvia (sobrenome a confirmar). Quando a Sílvia diz "só eu e minha sócia somos as donas", refere-se à outra Sílvia. **Thaísa não é sócia** — é estrategista de marketing que acumulou financeiro.

---

## 5. Stack atual

### Sistemas em uso

| Sistema | Função | Custo | Limitação |
|---------|--------|-------|-----------|
| **SimplesVet** | Núcleo (agenda, prontuário, vendas, estoque) | **R$ 389/mês** (5 acessos) | API fechada, sem IA, financeiro raso, dashboards fracionados |
| **VetSmart** | App de bulário + gravação de consulta | ~R$ 600/ano (modo sistema) | Grava 1h mas só transcreve 15-20min. "Péssimo." |
| **WhatsApp Business** | Atendimento | — | Sem CRM, histórico só no celular ("se roubarem o celular, lascou") |
| **PetLove (planos)** | Plano de acompanhamento | — | Comprou SimplesVet e VetSmart, ecossistema fechado |
| **Google Drive** | Apoio para fotos/docs | — | Querem centralizar tudo no sistema |

### O que o SimplesVet **faz bem** (não vale recriar do zero)
- Agenda multi-acesso (5 logins, ações rastreadas por usuário)
- Ficha de paciente rica (atendimentos, peso, patologia, fotos, exames, vacinas)
- Cliente "guarda-chuva" com múltiplos pets
- Cadastro de produtos, exames, procedimentos
- Compras e controle de estoque
- Lista de preço

### O que o SimplesVet **não resolve** (= escopo Eloscope)
- Centro de custo / contas contábeis configuráveis
- Faturamento bruto vs. líquido vs. recebido (conciliação de cartão com descontos)
- Dashboards casados (consultas por especialidade × vendas × banho × por sócia)
- Disparo de mensagem (confirmação, lembrete, aniversário do pet) — só faz por SMS
- Integração com IA (API fechada)
- CRM com pipeline de venda
- Gravação/transcrição confiável de anamnese
- Teleconsulta com receita digital assinada (Conselho Federal de Medicina Veterinária já permite — Sílvia confirmou)

---

## 6. Captação e marketing

| Métrica | Valor |
|---------|-------|
| **Investimento em tráfego pago** | R$ 1.000/mês |
| **Leads/mês (média)** | **~250** |
| **CPL** | R$ 2,30 |
| **Leads no fim de semana (sem atendimento)** | ~15/sem (~60/mês) |
| **Conversão (clientes novos/mês via tráfego)** | 3-4 (ROI baixo) |
| **Atendimentos totais/mês** | ~60 (incluindo retornos, banho, etc.) |
| **Ticket médio** | **R$ 700** |
| **Mensagens diárias (follow-up interno)** | 40 (até 50 estourando) |
| **Leads novos/dia** | ~10 |

### Canais de captação (por ordem de conversão)
1. **Indicação de parceiros** (outras especialidades) — converte mais, lead já confia
2. **Mídias sociais** (Instagram principalmente)
3. **Orgânico** (tráfego direto)

> [!warning] Gargalo identificado
> Lead barato + conversão baixa = problema **não é o topo do funil**, é a **falta de braço para qualificar e converter**. Eles freiam o online porque "se rodar mais, não temos como receber".
> 
> A capacidade física **não dá para expandir agora** — o destravamento tem que vir por **automação e IA**, não por mais gente.

### Programa de indicação
- Existe campo no SimplesVet, mas **não conseguem mensurar** de onde vem cada indicação.

---

## 7. Atendimento e operação

### Como é hoje
- **1 recepcionista** atende WhatsApp + presencial + confirmação manual
- Funciona **segunda a sexta** (final de semana, descoberto)
- Agendamento: **manual no SimplesVet**, confirmação por SMS
- Histórico de conversas: **só no celular** (sem backup)
- Já perderam agendamentos, mas **"não é crise"** (final de semana muitos já vieram marcados)

### O que querem
- IA de **pré-atendimento** (qualificação + agendamento automático em horários reservados)
- IA com **acesso ao prontuário** para responder dúvidas de tutores existentes de forma personalizada
- **CRM com pipeline visual** (cards) para acompanhar o pós-captação
- **Disparos** de confirmação, lembrete, aniversário do pet, NPS
- **Central única** que receba Instagram + WhatsApp + outros canais (sugerido: Chatwoot)

### Teleconsulta (item levantado pela Sílvia)
- Já fazem por Meet, mas querem algo **integrado ao sistema**:
  - Gravação segura
  - Transcrição automática da anamnese
  - Emissão de receita com assinatura digital (CFMV permite)
  - Tudo já lançado no prontuário do paciente

### Anamnese
- Hoje gravam no VetSmart (que falha). Querem **gravação por áudio + transcrição automática + PDF para o tutor + memória da IA**.

---

## 8. Operação clínica e produtos

- **Plano de acompanhamento para doenças crônicas** (recorrência) — escopo novo prioritário
- **Pacotes/combos de serviço** — precisam de módulo de baixa por item consumido (entrada, exclusão, controle financeiro do pacote)
- Trabalham com **muita imagem** (fotos de paciente, exames, documentos) → **memória/armazenamento é prioridade**
- Querem tudo concentrado no sistema (parar de usar Drive paralelo)

---

## 9. Financeiro (dor #1)

> [!important] Quote da Thaísa
> "Tirar a Thaísa do financeiro." → Hoje ela acumula financeiro + marketing + ajuda no banho. **Liberar o tempo dela = destravar marketing e crescimento.**

### Dores específicas
- **Conciliação de cartão**: descontos não aparecem em relatório → não dá para saber faturamento líquido vs. recebido
- **Dashboards fracionados**: sabe o que faturou, o que vendeu, mas **não consegue casar informações**
- **Fluxo de caixa "parece conta contábil"** — querem algo simples, não para especialista
- Já consideraram **Power BI acoplado**, mas: precisa de manutenção, alguém atualizando, quebra com mudança de schema → **não escala**

### Relatórios desejados (exemplo dado pela Sílvia)
- Quantas consultas no mês? Quantas dermatológicas? Quantas endocrinológicas?
- Quanto vendeu no pet shop? Na farmácia? Na estética?
- Apanhado geral + recortes por sócia + por unidade

### Solução proposta na call
- Módulo financeiro Eloscope com **IA fazendo conciliação** (importa extrato, aloca, pede confirmação)
- Lançamento via WhatsApp para um número dedicado da agente IA
- Conta bancária + contas contábeis + centro de custo configuráveis

---

## 10. Dores priorizadas (ranking explícito da call)

| # | Dor | Quote |
|---|-----|-------|
| 1 | **Financeiro estruturado** | "Crescer organizado, preciso de um financeiro organizado" |
| 2 | **CRM + atendimento (IA)** | "Preciso mensurar o que é que está chegando para poder trabalhar certo" |
| 3 | **Liberar a Thaísa** do operacional | "Tirar a Thaísa do financeiro" |
| 4 | **Plano de acompanhamento crônico** | módulo recorrente |
| 5 | **Pacotes/combos de serviço** | gestão de baixa por item |

---

## 11. Escopo provável da proposta Eloscope

### Núcleo (replicar do SimplesVet)
- Agenda multi-usuário com rastreamento por ação
- Ficha do paciente (atendimentos, peso, patologia, fotos, exames, vacinas)
- Cliente guarda-chuva com múltiplos pets
- Cadastro de produtos/exames/procedimentos
- Estoque e compras
- Lista de preço

### Diferencial (o que o SimplesVet não faz)
- **Módulo financeiro** com centro de custo, contas contábeis, faturamento bruto/líquido/recebido, conciliação automática com IA
- **Dashboards inteligentes** customizados (sem Power BI acoplado)
- **CRM com pipeline visual** + IA sugerindo movimentação de cards
- **Central de atendimento** (Chatwoot) integrada — Instagram + WhatsApp + canais
- **IA de atendimento** (pré-qualificação + agendamento + acesso ao prontuário)
- **Disparos de mensagem** (confirmação, lembrete, aniversário, NPS)
- **Gravação + transcrição de anamnese** + envio de PDF para tutor
- **Teleconsulta** com receita digital (validar CFMV)
- **Módulo de planos crônicos** + **pacotes de serviço**

### Infraestrutura
- VPS próprio do cliente (PeleVet paga armazenamento)
- Stack open-source (Chatwoot homologado Meta, sistema próprio Eloscope)
- IA personalizada com tom de voz da clínica

> [!info] Padrão de infra
> Seguir [[feedback_infra_nginx_tailscale|padrão Eloscope]]: Nginx direto no VPS para handover ao cliente, Tailscale só para acesso interno.

---

## 12. Posicionamento Eloscope dado na call

- "Não é só sistema, é construção" — adaptação contínua ao modelo de negócio
- IA entra **aos poucos**, área por área, para não gerar ruído operacional
- Cliente compra o **código do sistema** + opcionalmente a manutenção (mensalidade)
- Tudo no servidor do cliente (autonomia total)
- Treinamento da IA segue o **tom de voz e os limites de cada negócio**

---

## 13. Próximos passos

| Quando | O quê | Quem |
|--------|-------|------|
| **Quinta 17h (online)** | Reunião de alinhamento (amanhã da call) | Lucas + Sílvia + Thaísa |
| **Segunda dia 11, 13h (presencial)** | Reunião técnica para apresentar proposta | Lucas + **Vítor** (técnico) + Sílvia + Thaísa |

> [!todo] Pendências da Eloscope antes da reunião técnica
> - [ ] Montar **proposta comercial** (escopo + pricing + cronograma)
> - [ ] Mapear arquitetura (módulos a entregar fase 1 vs. roadmap)
> - [ ] Validar viabilidade de **teleconsulta com receita digital CFMV**
> - [ ] Definir estratégia de migração de dados do SimplesVet (export base de clientes)
> - [ ] Propor faseamento (financeiro primeiro? CRM primeiro? juntos?)

> [!todo] Pendências do lado PeleVet
> - [ ] Confirmar com Alida se a **API oficial Meta** está corretamente configurada (telefone está como offline)
> - [ ] Definir cartão internacional (Meta cobra em dólar)

---

## 14. Divergências e pontos a confirmar

| Campo | Anotação | Transcrição | Decisão |
|-------|----------|-------------|---------|
| **Ticket médio** | R$ 700 | R$ 300 | ✅ **R$ 700** (confirmado por Lucas) |
| **Sócias** | Sílvia de Paula + Sílvia + Thaísa | Sílvia + Thaísa | ✅ **Duas sócias são as Sílvias** (Sílvia de Paula + Sílvia, sobrenome a confirmar). Thaísa = estrategista de marketing, não sócia. |
| **Pacientes/mês** | "60 com tudo de atendimento" (parece meta) | 60 atuais | Provavelmente **60 atuais**. Meta não foi explicitada. Confirmar. |
| **ROI** | "3-4%" | "ROI de 3-4 por mês" (clientes convertidos) | **Não é %**, são 3-4 clientes novos/mês via tráfego |
| **SimplesVet preço** | R$ 389 | R$ 380 | R$ 389 (anotação) |
| **Leads fim de semana** | "15-60 no mês" | "15 por aí" (por fim de semana) | **15/fim de semana ≈ 60/mês** — bate |
| **Sobrenome da 2ª Sílvia** | — | — | ⏳ A confirmar |

---

## 15. Quotes que valem ouro (para a proposta e o follow-up)

> "Tirar a Thaísa do financeiro." — **Sílvia**

> "A gente ri de nervoso agora, para não chorar. Histórico está tudo no celular. Se roubarem, lascou." — **Thaísa** (sobre WhatsApp)

> "A gente está parando muito no físico e está deixando o online porque se a gente trabalha no online o pessoal chega, a gente não tem como receber." — **Thaísa**

> "Crescer organizado, preciso de um financeiro organizado." — **Sílvia**

> "Power BI acoplado super funciona, mas você tem que ter alguém atualizando, dá problema toda hora. Não é funcional a médio e longo prazo." — **Thaísa**

---

## 16. Potencial de crescimento (sensação do Lucas + análise de mercado)

> [!important] Por que vale investir esforço comercial nessa conta
> Sensação na call + análise de mercado convergem: **operação enxuta com fundamentos sólidos pra escalar 3-5×**.

### Fundamentos sólidos
- **Ticket de R$ 700** = topo nacional do segmento veterinário (média BR: R$ 200-500). Não precisa "vender mais barato" pra crescer.
- **CPL de R$ 2,30 com tráfego rodando há tempo** = aprendizado de mídia maduro. Não é problema de topo de funil.
- **Indicação de parceiros** já é o canal #1 — base orgânica forte que tende a crescer com NPS sistemático (que hoje não fazem).
- **Dermato + endo são doenças crônicas** = LTV altíssimo (R$ 10K-30K/tutor estimado em 4-8 visitas/ano por 3-7 anos).
- **2 sócias-veterinárias** com expansão recente (endocrinologia em dez/2024) = apetite real de crescimento.

### Vetores de expansão (ver [[analise-mercado-sjrp#5-vetores-de-expansão]])
1. **Automação de conversão** (entrega 1 da Eloscope) → destrava os outros 5 vetores
2. **Telemedicina** (CFMV regulamentou em 2022) — abre o atendimento pra **toda a região metropolitana** (~1M habitantes), não só SJRP município
3. **Plano crônico próprio** — defesa contra Petlove (que tem ~65% do mercado de planos pet) e captura de LTV recorrente
4. **Programa de indicação mensurado** — hoje é #1 mas não medem, dá pra dobrar com pouco esforço
5. **Parcerias B2B** — pet shops e banhos de bairro indicarem casos dermato (já funciona organicamente)
6. **Unidade satélite ou sala compartilhada** — médio prazo, depois que a operação atual estiver destravada

### Teto factível (estimativa conservadora)
- Hoje: 60 atendimentos/mês × R$ 700 = **R$ 42K/mês**
- Com automação destravando conversão (1,5% → 3%): +5-10 novos/mês × LTV → **R$ 70-90K/mês em 6-12 meses**
- Com telemedicina + plano crônico: **R$ 120K+/mês em 18-24 meses**

> [!quote] Gancho de venda principal (Eloscope)
> "Vocês operam em **menos de 16% do potencial da própria cidade**. O problema não é mercado, não é preço, não é tráfego — é **conversão**. Hoje 1,5% (3-4 clientes em 250 leads). Dobrar pra 3% = +5-10 clientes novos/mês **sem aumentar 1 real de mídia**, cada um com LTV estimado de R$ 10K-30K. É isso que a IA de atendimento + CRM destravam na primeira fase."

---

## 17. Pontos a validar antes da reunião de segunda

> [!todo] Pendências de validação (vieram da análise de mercado)
> - [ ] **CPL recalculado**: 1.000/250 = R$ 4 (não R$ 2,30 como Thaísa passou). Pode ser que o investimento real seja outro, ou os 250 inclua mensagens não-lead. Conferir com ela.
> - [ ] **Faturamento mensal real** (R$ 42K é estimativa minha). Não pediu na call, vale entrar com tato na próxima.
> - [ ] **Recorrência média de paciente crônico**: quantas visitas/ano? quanto tempo de tratamento? — fundamenta o LTV
> - [ ] **Já fizeram benchmark com Zilda Mayer?** (única concorrente direta dermato em SJRP)
> - [ ] **Apetite por telemedicina veterinária** — Sílvia mencionou na call ("a gente está aumentando, viu?"). Quanto exatamente?
> - [ ] **Faturamento do banho dermatoterapêutico** isolado — pode ser canal de aquisição barato pra dermato

---

## Links

- Áudio original: `discobery-pele-vet.m4a`
- Transcrição completa: [[transcricao-discovery-pelevet]]
- **Análise de mercado SJRP**: [[analise-mercado-sjrp]] ⭐ (gancho de venda)
- Padrão de infra: [[feedback_infra_nginx_tailscale]]
- Squad nova de discovery: `squads/discovery-analyzer/README.md`
