---
tipo: proposta-entregaveis
status: rascunho
cliente: pele-vet
data-criacao: 2026-05-09
reuniao-alvo: 2026-05-11
participantes-reuniao: ["Lucas", "Vítor", "Sílvia de Paula", "Sílvia (a confirmar)", "Thaísa"]
tags:
  - cliente/pele-vet
  - vendas/proposta
  - vendas/entregaveis
---

# Proposta Eloscope × PeleVet — Sumário de Entregáveis

> [!info] Para a reunião técnica de 11/05/2026 13h presencial
> Documento síntese de **escopo + cronograma + pricing + garantia** baseado em [[analise-discovery-pelevet|discovery]] + [[analise-mercado-sjrp|análise de mercado]] + [[processo-atual-pelevet|processo atual]] + [[pricing-pelevet-asaas|pricing Asaas]].

---

## 1. Resumo executivo (pra abrir a reunião)

A PeleVet hoje opera em **<16% do potencial regional**, com fundamentos premium (ticket R$ 700, único concorrente direto Zilda Mayer) mas conversão travada em 1,5% por **ausência de braço** (1 recepcionista, 1 estrategista acumulando financeiro).

A proposta Eloscope **não é "trocar de sistema"** — é **substituir a necessidade de contratar 2-3 pessoas** (recepcionista de fim de semana + analista financeiro + analista de CRM) por **automação inteligente** que destrava os 5 gargalos identificados.

> **Investimento Cenário B (Growth):** R$ 21.000 em 6 meses = **payback no 3º mês** com +1 cliente crônico novo/mês.

---

## 2. Os 5 gargalos e o que a Eloscope entrega contra cada um

| # | Gargalo (hoje) | Entrega Eloscope | Métrica de sucesso (90 dias) |
|---|----------------|------------------|-------------------------------|
| 1 | **Conciliação financeira manual** trava Thaísa | Módulo financeiro com IA + centros de custo (consultório A, B, pet shop, banho) + dashboards casados (bruto/líquido/recebido) | Thaísa fecha mês em ≤ 2h (vs 2-3 dias hoje) |
| 2 | **Conversão 1,5%** (sem CRM nem IA) | CRM com pipeline visual + IA pré-atendimento (qualifica + agenda em horários reservados) | Conversão 1,5% → 2,5% no 90º dia |
| 3 | **Fim de semana sem atendimento** (60 leads/mês perdidos) | IA 24/7 + agendamento automático sáb/dom + handoff humano segunda 8h | Capturar ≥ 80% dos 60 leads perdidos/mês |
| 4 | **Anamnese falha (VetSmart)** | Gravação + transcrição própria (Whisper) + envio automático de PDF pro tutor | 100% das consultas com PDF entregue em ≤ 1h |
| 5 | **Sem follow-up crônico** (Petlove come o mercado) | Módulo de plano crônico + disparos automatizados (retorno, aniversário pet, NPS) | ≥ 60% dos crônicos com plano ativo no 6º mês |

---

## 3. Escopo faseado (proposta de cronograma)

### Fase 1 — Fundação (Mês 1-2)
**Foco:** destravar Thaísa + começar a capturar leads do fim de semana.

- Setup VPS + Nginx + ambiente Eloscope (padrão [[feedback_infra_nginx_tailscale]])
- Migração base de clientes do SimplesVet (export + dedupe + import)
- **Módulo financeiro v1**: centros de custo (4) + conta bancária + import de extrato + IA conciliação básica
- **Central Chatwoot** integrada (Instagram + WhatsApp Business unificados)
- **IA de pré-atendimento v1**: qualifica lead + agenda em horários reservados + handoff humano em horário comercial
- Treinamento da equipe (Sílvias + Thaísa + recepcionista)

**Entregável Fase 1:** Thaísa fechando o mês em horas (não dias), atendimento 24/7 ativo, conciliação cartão automatizada.

### Fase 2 — Conversão (Mês 3-4)
**Foco:** subir conversão de 1,5% → 2,5%.

- **CRM com pipeline visual** (cards) + IA sugerindo movimentação
- **Disparos automatizados** (confirmação, lembrete, aniversário pet, NPS pós-consulta)
- **Programa de indicação mensurado** (cada lead com origem rastreável)
- **Dashboards inteligentes v1**: consultas por especialidade × vendas × banho × por sócia
- IA de atendimento v2: acesso ao prontuário pra responder dúvidas de tutores existentes

**Entregável Fase 2:** Pipeline visível, conversão medida e em alta, indicação rastreada.

### Fase 3 — LTV (Mês 5-6)
**Foco:** capturar LTV crônico que hoje vaza pra Petlove.

- **Módulo de plano crônico**: cobrança recorrente + cronograma de visitas + alertas automáticos
- **Pacotes/combos de serviço**: gestão de baixa por item consumido
- **Gravação + transcrição de anamnese** + envio automático de PDF
- **Teleconsulta com receita digital** (validar fluxo CFMV)
- Dashboards v2 + relatórios customizados (por sócia, por unidade)

**Entregável Fase 3:** PeleVet com produto recorrente próprio competindo com Petlove no nicho dermato/endo.

> [!note] Faseamento é proposta inicial
> Pode reorganizar conforme prioridade da Sílvia/Thaísa na reunião. Sugestão: confirmar **Fase 1 fixa**, abrir Fase 2 e Fase 3 como menu (cliente escolhe ordem).

---

## 4. Pricing — 3 cenários (ver [[pricing-pelevet-asaas]] pra cálculo Asaas detalhado)

| Cenário | Setup líquido | Mensal líquido | Mínimo | Total 6m | Parcela cliente (12× setup) |
|---------|---------------|----------------|--------|----------|------------------------------|
| **A — Starter** | R$ 3.000 | R$ 1.500 | 3 meses | **R$ 7.500** | R$ 322,43/mês |
| **B — Growth** ⭐ | R$ 6.000 | R$ 2.500 | 6 meses | **R$ 21.000** | R$ 644,82/mês |
| **C — Scale** | R$ 12.000 | R$ 3.500 | 6 meses | **R$ 33.000** | R$ 1.289,61/mês (ou híbrido 50% boleto) |

### Cobertura por cenário

| | A — Starter | B — Growth | C — Scale |
|-|-------------|------------|-----------|
| Núcleo (agenda + ficha + estoque) | ✅ | ✅ | ✅ |
| Módulo financeiro + IA conciliação | ✅ básico | ✅ completo | ✅ + dashboards customizados |
| Central Chatwoot | ❌ | ✅ | ✅ |
| IA pré-atendimento | ✅ básico | ✅ avançada | ✅ + acesso prontuário |
| CRM + pipeline visual | ❌ | ✅ | ✅ |
| Disparos automatizados | ❌ | ✅ | ✅ |
| Plano crônico recorrente | ❌ | ❌ | ✅ |
| Pacotes/combos | ❌ | ❌ | ✅ |
| Gravação + transcrição anamnese | ❌ | ❌ | ✅ |
| Teleconsulta + receita digital | ❌ | ❌ | ✅ |

---

## 5. Argumento de payback (script pra Lucas usar)

> "Hoje vocês já investem **R$ 1.000/mês em mídia** para captar 250 leads. Convertem 1,5% — 3-4 clientes novos/mês. Cada cliente crônico vale entre R$ 10.000 e R$ 30.000 ao longo do tratamento.
>
> A proposta Growth custa R$ 644,82/mês de parcela do setup + R$ 2.583,55/mês recorrente nos primeiros 6 meses. Total: ~R$ 3.228/mês.
>
> **Payback no 3º mês com apenas +1 cliente novo/mês.** Não estamos adicionando uma despesa nova — estamos **multiplicando o ROI** do que vocês já gastam em mídia.
>
> E mais: depois do setup pago (mês 12), sobra só a recorrência de R$ 2.583/mês. **Equivalente a 3,7 consultas/mês.** Vocês já fazem 60."

---

## 6. Garantia

> [!success] Devolução do setup em 30 dias
> Se em 30 dias o sistema não estiver entregando o que foi prometido (financeiro estruturado + CRM operacional + IA respondendo), a Eloscope devolve **100% do setup**. Mensalidade segue como pay-as-you-go nos meses que rodaram.

---

## 7. Cronograma proposto pós-fechamento

| Quando | O quê | Quem |
|--------|-------|------|
| **D+0 (fechamento)** | Assinatura contrato + 1ª cobrança Asaas | Lucas + cliente |
| **D+1 a D+3** | Acesso VPS + setup ambiente + Cloudflare DNS | Vítor + Hugo |
| **D+5 a D+10** | Migração SimplesVet → Eloscope (export/import/dedupe) | Vítor |
| **D+10 a D+20** | Treinamento equipe + go-live módulo financeiro | Lucas + Vítor |
| **D+20 a D+30** | IA pré-atendimento ativa + Chatwoot integrado | Vítor |
| **D+30** | Checkpoint Fase 1 + decisão sobre Fase 2 | Lucas + cliente |

---

## 8. Diferenciais Eloscope (mantras pra reforçar na reunião)

1. **"Não é só sistema, é construção"** — adaptamos continuamente ao modelo de negócio
2. **VPS próprio do cliente** — autonomia total, código fica com vocês
3. **IA entra aos poucos**, área por área, pra não gerar ruído operacional
4. **Tom de voz e limites treinados** com a equipe da clínica
5. **Eloscope fica em Rio Preto também** — suporte presencial quando precisar
6. **Padrão de infra estável** ([[feedback_infra_nginx_tailscale|Nginx no VPS]]) — handover técnico documentado

---

## 9. Pontos a validar na própria reunião 11/05

> [!todo] Perguntas em aberto (vieram do discovery + análise de mercado)
> 1. **CPL real** — 1.000/250 = R$ 4 (não R$ 2,30). Confirmar com Thaísa.
> 2. **Faturamento mensal real** — R$ 42K é estimativa minha (60 × R$ 700). Sondar.
> 3. **Recorrência média de paciente crônico** — quantas visitas/ano? quantos anos? (fundamenta LTV)
> 4. **Apetite por telemedicina** — Sílvia mencionou na call. Quanto exatamente?
> 5. **Faturamento isolado do banho dermatoterapêutico** — pode virar canal de aquisição barato pra dermato.
> 6. **Sobrenome da segunda Sílvia** — pra contrato.
> 7. **Migração SimplesVet — base de quantos clientes?** Pra dimensionar esforço de import.
> 8. **Cartão internacional** (Meta cobra em dólar) — confirmar com Alida pré-go-live IA atendimento.

---

## 10. Anexos pra levar na reunião

- [[analise-discovery-pelevet]] — discovery consolidado (não compartilhar inteiro, usar como cola)
- [[analise-mercado-sjrp]] — gancho de venda principal (ler em voz alta o trecho "<16% do potencial")
- [[processo-atual-pelevet]] — flowchart Mermaid (gerar PNG e levar impresso)
- [[pricing-pelevet-asaas]] — pricing detalhado (referência se cliente pedir)

---

## Próxima ação

- [ ] **Lucas validar este documento** antes da reunião 11/05 13h
- [ ] **Lucas exportar flowchart Mermaid** pra PNG/PDF (ferramenta: mermaid.live ou Obsidian export)
- [ ] **Lucas preparar slide-resumo** (1 página) com Cenário B em destaque + payback
- [ ] **Decidir se leva os 3 cenários ou só apresenta Growth** com Starter/Scale como flancos

---

*Criado em 2026-05-09 · status `rascunho` · próxima revisão antes de 11/05 13h*
