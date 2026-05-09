---
slug: pele-vet
tipo: proposta-comercial
versao: 2.0
data: 2026-05-09
status: draft
reuniao-tecnica: 2026-05-11T13:00
---

# PeleVet — Proposta Comercial

> Draft interno para alinhamento antes da reunião de segunda. Valores finais a confirmar com Lucas.

---

## O que a PeleVet está contratando

A PeleVet não está comprando uma assinatura de software. Está contratando a construção de um sistema próprio — feito especificamente para o modelo de negócio de vocês, com o código pertencendo inteiramente à clínica.

A base desse sistema já existe: foi construída para outra clínica veterinária e está em produção. Para a PeleVet, vamos replicar essa base, adaptá-la ao jeito que a clínica funciona, e construir os módulos que ainda não existem — financeiro, agente de pré-qualificação no WhatsApp e central de mensagens. Antes de configurar o agente, mapeamos o jeito da PeleVet atender e documentamos isso em um playbook.

No final da Fase 1, a PeleVet tem um sistema rodando na infraestrutura dela, com o código nas mãos dela.

---

## O que já existe e será adaptado para a PeleVet

Esses 10 módulos já estão construídos, testados e em produção em outra clínica veterinária. A PeleVet não paga pelo desenvolvimento do zero — paga pela adaptação ao contexto da clínica, pela configuração e pelo treinamento da equipe.

1. **Agenda inteligente com recorrência**
   Pacientes fixos, blocos de horário reservados por veterinária, sem conflito de agenda. Sincroniza automaticamente com o Google Calendar de cada veterinária — o que muda num, atualiza no outro em tempo real.

2. **Prontuário estruturado com PDF automático para o tutor**
   Anamnese, diagnóstico, evolução — tudo registrado durante a consulta. Ao final, o sistema gera um PDF formatado para enviar ao tutor. O tutor sai com documento em mãos, sem depender de anotação manual.

3. **Transcrição ao vivo de consultas**
   O veterinário fala durante o atendimento; o sistema ouve e monta as notas clínicas em tempo real. Acabou ficar digitando depois que o tutor foi embora.

4. **Ditado por voz em qualquer campo**
   Em vez de digitar, o veterinário fala. Funciona no prontuário, no receituário, em qualquer campo do sistema.

5. **Exames com leitura por IA**
   Sobe o PDF do laboratório, o sistema extrai os parâmetros automaticamente e plota gráfico de tendência comparando com exames anteriores. O veterinário vê a evolução do paciente em segundos — sem abrir planilha.

6. **Receituários com cálculo automático de dose**
   O sistema calcula a dose pelo peso do animal e gera a receita direto da consulta. Menos erro, mais velocidade, sem conversão manual.

7. **Dietas com IA**
   Extração automática de PDFs de dietas — sem copiar dado manualmente entre documentos.

8. **WhatsApp integrado com automação**
   Confirmação de consulta, lembrete 24h antes, mensagem de aniversário do pet, NPS pós-atendimento — tudo automático, disparado pelo sistema. Nenhum funcionário precisa fazer isso à mão.

9. **Cadastro completo de pacientes e pets**
   Histórico completo, documentos, vacinas, tudo em um lugar. Nunca mais buscar no celular da Thaísa.

10. **Infraestrutura robusta e segura**
    Banco de dados Supabase, armazenamento de arquivos, processamento em fila. O sistema aguenta o volume da clínica sem cair no horário de pico.

---

## O que será construído especificamente para a PeleVet

Esses três módulos não existem na base atual e serão desenvolvidos para a realidade da PeleVet:

**1. Módulo financeiro** — esforço: alto
A dor número um de Sílvia: não saber o número real da clínica. Esse módulo entrega centros de custo separados por veterinária, visão clara de faturamento bruto, líquido e recebido, conciliação com apoio de IA e dashboards. Sílvia passa a tomar decisões de crescimento com dado, não com intuição.

**2. Agente de pré-qualificação no WhatsApp** — esforço: médio
Os 60 leads do fim de semana hoje ficam sem resposta até segunda-feira. O agente responde no mesmo minuto em que o lead chega: faz triagem (raça, porte, sintoma, serviço), responde dúvidas básicas e qualifica o lead. Quando o lead está pronto para agendar, o agente transfere para a equipe humana via Chatwoot. O agendamento final é feito pela equipe — não pelo bot. Os leads param de sumir.

**3. Playbook de atendimento WhatsApp** — esforço: baixo | valor: alto
Antes de configurar o agente, a Eloscope mapeia como a PeleVet atende hoje. Uma IA analisa conversas reais do WhatsApp da clínica — o estilo, o tom, as frases que funcionam, como a equipe explica os serviços, como conduz o lead até o agendamento. Com esse mapeamento, a Eloscope monta um playbook de atendimento documentado e configura o agente para conversar exatamente como a equipe da PeleVet conversaria. O resultado: padronização real do atendimento, não um bot genérico. E o playbook fica com a clínica — independente de qualquer ferramenta.

**4. Central de atendimento Chatwoot** — esforço: baixo

WhatsApp e Instagram chegando num só painel, com histórico salvo de cada conversa. A equipe para de alternar entre apps, não perde contexto e nenhuma conversa se perde no celular de ninguém.

---

## Como vai funcionar a entrega

A implementação é um processo colaborativo. Veja o que cada parte faz:

**O que a Eloscope faz:**
- Configura e adapta a base do sistema para o contexto da PeleVet
- Desenvolve os três módulos novos
- Realiza testes antes de cada entrega
- Conduz o treinamento da equipe
- Acompanha o go-live e o período inicial de operação

**O que a PeleVet precisa fazer:**
- Designar uma pessoa de referência para validar cada módulo (sugerida: Thaísa)
- Participar de sessões de validação ao longo da entrega
- Fornecer acesso às ferramentas necessárias (número WhatsApp, conta Google das veterinárias, dados iniciais para importação)
- Testar os fluxos em ambiente de homologação antes do go-live

**Marcos de validação:**
1. Base configurada e equipe treinada — Thaísa valida a agenda e o prontuário funcionando
2. Módulo financeiro entregue — Sílvia valida o dashboard com dados reais da clínica
3. Agente WhatsApp + Chatwoot ativos — validação do fluxo completo de um lead entrando
4. Go-live — sistema em produção, equipe operando de forma autônoma

---

## O que a PeleVet vai ter no final

- Sistema rodando na infraestrutura da própria clínica (VPS contratado pela PeleVet)
- Código-fonte do sistema, pertencente inteiramente à PeleVet
- Todos os 10 módulos da base adaptados e configurados
- 3 módulos novos desenvolvidos especificamente para a clínica
- Documentação básica de uso e administração
- Treinamento presencial/remoto da equipe com Thaísa
- 30 dias de suporte próximo após o go-live

---

## Cronograma estimado — Fase 1

| Semanas | Atividade |
|---------|-----------|
| 1–2 | Configuração da base, adaptação ao contexto da PeleVet, treinamento inicial com Thaísa |
| 3–8 | Construção do módulo financeiro (maior esforço) |
| 3–6 (paralelo) | Agente WhatsApp + Chatwoot |
| 9–10 | Testes integrados, ajustes finais, go-live |
| Após go-live | 30 dias de suporte próximo incluído |

**Total estimado: 10 semanas.** Prazo final a alinhar na reunião de segunda conforme disponibilidade da equipe para validações.

---

## Estrutura de preço

### Implementação (Fase 1)

**Faixa: R$12.000 – R$16.000**

O raciocínio por trás da faixa: a base do sistema já existe, o que reduz custo de desenvolvimento. Mas os três módulos novos — especialmente o financeiro — têm esforço real. O financeiro é o módulo mais complexo e mais crítico para a Sílvia; sozinho ele representaria um projeto significativo em qualquer outra proposta.

O valor exato dentro dessa faixa será definido com Lucas após a reunião técnica de segunda, com o escopo detalhado.

### Mensalidade

**Faixa: R$2.000 – R$2.500/mês**

**O que são as 10 horas mensais:**

A mensalidade da Eloscope cobre 10 horas mensais de trabalho direto com a PeleVet. Esse tempo é dividido entre:

- **Manutenção técnica** — correções, atualizações de segurança, ajustes no sistema conforme a clínica cresce
- **Suporte estratégico** — análise de dados de atendimento, revisão de performance do agente, identificação de oportunidades de melhoria no fluxo de leads
- **Evolução contínua** — melhorias incrementais no sistema e no playbook de atendimento conforme os padrões mudam

A Eloscope acompanha os dados da operação — volume de leads, taxa de qualificação do agente, conversão — e traz análises para a reunião mensal com a equipe. Não é suporte reativo: é parceria de crescimento.

Horas não utilizadas em um mês não acumulam — o foco é manter cadência de melhoria contínua, não banco de horas.

---

## Custos de operação — o que a PeleVet paga diretamente

Além da mensalidade da Eloscope, a PeleVet paga diretamente pelos serviços que sustentam a operação do sistema. Esses são custos das ferramentas — não da Eloscope. A mensalidade da Eloscope é separada.

| Item | Estimativa mensal | Observação |
|------|------------------|------------|
| VPS (servidor da clínica) | R$150 – R$300 | Contratado diretamente pela PeleVet. DigitalOcean, Hetzner ou similar |
| API de transcrição (Deepgram) | R$50 – R$150 | Depende do volume de consultas transcritas por mês |
| API de IA (OpenAI) | R$50 – R$200 | Depende do volume de uso do agente e das funcionalidades de IA |
| API WhatsApp (UAZAPI) | R$100 – R$200 | Integração WhatsApp Business para o agente e as automações |
| **Total estimado** | **R$350 – R$850/mês** | Custo direto de operação, separado da mensalidade Eloscope |

> Esses custos variam conforme o volume de uso da clínica. Nos primeiros meses, tendem a ficar na faixa inferior. A Eloscope monitora o consumo e alerta se algo estiver fora do padrão esperado.

---

## Forma de pagamento

**Opção 1 — 50/50:**
- 50% na assinatura do contrato
- 50% na entrega e validação dos módulos em produção

**Opção 2 — Parcelamento em 3x:**
- 33% na assinatura do contrato
- 33% na metade da entrega (go-live dos módulos da base)
- 33% na entrega final (módulos novos em produção)

O pagamento é atrelado à entrega, não ao calendário. A PeleVet não paga o próximo marco sem validar o anterior.

---

## Por que é diferente de SaaS

**O código é ativo da clínica, não despesa recorrente para sempre.**
Em vez de pagar R$800–2.000/mês por uma plataforma genérica que nunca vai ser 100% do que a PeleVet precisa, a clínica investe uma vez e fica com o sistema adaptado à realidade dela.

**Sem restrição de funcionalidade.**
No SaaS, a clínica depende do roadmap do fornecedor. No sistema próprio, a próxima funcionalidade é decidida pela Sílvia e pela Thaísa — não por um gerente de produto em São Paulo que nunca entrou numa clínica veterinária.

**Os dados são da clínica.**
Histórico de pacientes, financeiro, leads — tudo fica na infraestrutura da PeleVet. Sem lock-in, sem risco de o fornecedor mudar de preço, descontinuar o plano ou fechar a empresa.

---

## Fase 2 — Roadmap

Quando a Fase 1 estiver estabilizada e a operação rodando com os dados, faz sentido avaliar:

- **Teleconsulta** — atendimento remoto com prontuário integrado, sem sair do sistema
- **Planos para pacientes crônicos** — mensalidade automatizada, controle de renovação e alertas de reengajamento
- **Pacotes e combos** — faturamento por pacote, controle de sessões utilizadas, relatório de rentabilidade por combo

Sem pressão de prazo nessas frentes — avançamos quando o momento operacional da clínica pedir.
