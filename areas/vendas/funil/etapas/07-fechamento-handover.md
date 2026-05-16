---
tipo: etapa-funil
funil: elo-sales-os
etapa: "07-fechamento-handover"
ordem: 7
status: ativo
tempo-medio: "fechamento: ≤48h após 'sim' · handover Victor: ≤7 dias"
dono: "Lucas (fechamento) → Victor (handover)"
tags:
  - vendas/funil
  - etapa/07-fechamento
  - handover
  - cliente-success
data: 2026-05-15
---

# Etapa 07 — Fechamento + Handover

> **Objetivo nesta etapa:** transformar **"sim" verbal** em **contrato assinado + 1ª parcela paga + kickoff agendado**, e fazer o **handover formal pro Victor** com todo contexto da venda preservado.
> **Tempo médio:** fechamento ≤48h após "sim" · handover Victor ≤7 dias após fechamento.
> **Dono:** Lucas (fechamento) → Victor (handover técnico + CS)
> **Etapa anterior:** [[06-follow-up-negociacao|← Follow-up / Negociação]] · **Próxima:** entrega operacional (fora do funil de vendas — ver [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao §3 caminhos comerciais]])

> [!note] Lápis, não caneta
> Esta é a etapa onde **mais coisa pode quebrar entre venda e entrega**. Cliente fechou achando uma coisa, Victor entrega outra → reclamação, churn, péssimo case. Handover bem-feito previne 80% dos problemas iniciais.

> [!warning] "Sim" verbal NÃO é fechamento
> Fechamento = contrato assinado + 1ª parcela paga. **Antes disso, lead pode retroceder.** SLA de 48h entre "sim" e contrato é dogma — atraso aqui custa fechamento.

---

## 🚪 Quando o lead ENTRA aqui

- Lead disse **"sim" explícito** (verbal ou escrito) — não "vou fechar amanhã"
- Pricing e escopo confirmados (sem objeção pendente)
- Decisor confirmou (não delegou pra outro)
- Caminho comercial definido (🅰️ / 🅱️ / 🅾️)

## 🎯 Quando o lead SAI pra próxima fase (entrega — fora do funil)

- **Contrato assinado digitalmente** (Autentique via skill `/assinar` ou similar)
- **1ª parcela paga / link de pagamento processado**
- **Kickoff agendado** com data específica
- **Handover formal pra Victor** entregue (template completo)
- Status no `pipeline.md` = `Fechado`

---

## ✅ Indicadores de SUCESSO

> [!success] Sinais de fechamento limpo
> **Assinatura rápida**
> - Lead **assina contrato no mesmo dia** que recebe ou ≤24h
> - **1ª parcela paga em ≤48h** após "sim"
> - Lead **confirma kickoff** com entusiasmo
>
> **Cliente preparado pra entrega**
> - Lead **já mencionou pessoas internas** que vão operar/acompanhar
> - Lead **liberou acessos preventivos** (CRM, Meta Business, planilha de leads) na semana de fechamento
> - Lead **expressou expectativa clara** ("nas primeiras 4 semanas espero ver X")
>
> **Handover sem ruído**
> - Victor recebeu **resumo completo da venda** (dor, ROI prometido, expectativa, contatos)
> - Cliente sabe que **Victor é o ponto focal técnico** (Lucas se afasta gradualmente)
> - Kickoff começa sem cliente perguntar "como funciona mesmo?"

**Ação:** seguir checklist de handover (§4). Acompanhar kickoff de fora (Lucas). Marcar **review 30d** ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|invariante #6 — anti-lock-in]]).

---

## 🚨 Indicadores de RISCO

> [!warning] Sinais de fechamento que ameaça quebrar
> **Atraso na assinatura**
> - Lead **disse sim mas não assinou em 48h** — está enrolando ou retrocedendo
> - **Cobrança não foi paga** mesmo após confirmação verbal
> - Lead **pediu ajuste último-minuto** no contrato (escopo, prazo, valor)
>
> **Expectativa desalinhada**
> - Lead **espera entrega em 2 semanas** quando 6OS Beta leva 8 semanas — esperar = frustração
> - Lead **expressou expectativa fora do escopo** ("quando vocês vão fazer o site novo também?") — não cobrir reabrirá venda
> - Lead **não mencionou nenhuma pessoa interna** pra operar/acompanhar — vai ter resistência futura
>
> **Handover apressado**
> - Victor entra na conversa **sem contexto** — cliente percebe e perde confiança
> - **Sem documentação escrita** do que foi prometido — vira "ele disse / ele disse"
> - **Kickoff sem data confirmada** — leve indicação de "vamos ver"

**Ação:**
- Atraso na assinatura: **Lucas liga** (não WhatsApp) pra desbloquear ou descobrir motivo real
- Expectativa desalinhada: **re-alinhar em call específica** antes do kickoff — não esperar reclamação
- Handover apressado: **adiar kickoff 1 semana** pra alinhar Victor + Lucas + cliente, melhor adiar que estragar

---

## ❌ Indicadores de PERDA (retroação)

> [!danger] Lead retrocedeu antes de assinar
> **Recusa após "sim"**
> - Lead **voltou atrás em 72h** ("conversei com sócio, vamos pausar")
> - Lead **pediu cancelamento pré-assinatura** sem contrapartida
> - Lead **sumiu** entre "sim" e contrato — silêncio total
>
> **Conflito pós-assinatura**
> - Cliente **pediu reembolso antes do kickoff** — gestão de crise, não Etapa 07
> - **Desalinhamento crítico** sobre escopo descoberto antes do kickoff
>
> **Falha estrutural**
> - Decisor que disse "sim" **não tem autoridade** pra assinar/pagar (descobre na hora)
> - **Empresa em crise financeira** revelada pós-acordo (pesquisa prévia falhou)

**Ação:**
- Recusa pós-sim: **call de saída honesta** pra entender motivo + manter porta aberta 30d
- Conflito de escopo: **negociar realinhamento** com Victor presente — não Lucas sozinho
- Crise financeira: **pausar contrato**, sugerir 🅰️ Diagnóstico (R$ 1.200) como passo menor

---

## 🎬 O que FAZER nesta etapa

### Fase 1 — Fechamento (Lucas, ≤48h após "sim")

1. **Imediato (no mesmo "sim"):**
   - "Ótimo. Vou te mandar o contrato agora. Consegue assinar ainda hoje? Kickoff em [data]?"
2. **D+0 (mesmo dia):**
   - Gerar contrato (template Eloscope + dados do lead)
   - Enviar via skill `/assinar` (Autentique digital) + WhatsApp + email — 3 canais
   - Enviar **link de pagamento Asaas** da 1ª parcela
   - Atualizar `pipeline.md` para `Fechamento em andamento`
3. **D+1:**
   - Confirmar recebimento. **Se não assinou: ligar** (não WhatsApp). Não deixar esfriar
4. **D+2 (assinou + pagou):**
   - Confirmar kickoff em data específica
   - Mover `pipeline.md` para `Fechado`
   - Atualizar `memory/projects/_index.md` com novo cliente
5. **Migrar pasta:** `areas/vendas/oportunidades/{slug}/` → `areas/vendas/clientes/{slug}/`

### Fase 2 — Handover pra Victor (≤7 dias após fechamento)

#### Template de handover Lucas → Victor

> Adaptado de [[../../../empresa/projetos/sales-os/02-comercial/playbook|playbook §6]]:

```markdown
# Handover de Venda — {Nome Cliente}

**Data fechamento:** YYYY-MM-DD
**Caminho contratado:** 🅰️ Diagnóstico / 🅱️ Beta / 🅾️ Real
**Investimento:** R$ {setup} + R$ {mensal}/mês × {N meses}

## 1. Contexto comercial
- **Empresa:** {nome, vertical, faturamento, sede}
- **Decisor principal:** {nome, cargo, WhatsApp, email}
- **Pessoas internas envolvidas:** {lista}
- **Indicador (se aplicável):** {nome}

## 2. Dor principal (em palavras DELE)
> "{frase exata do cliente sobre a dor}"

## 3. ROI prometido na venda
- Baseline atual: {N leads/mês × Y% conversão = R$ Z}
- Projeção 90d: {recuperar X% → R$ W adicional/mês}
- **Cálculo-âncora aceito na call:** sim/não/parcialmente
- **Custo da inação** (que vendeu o projeto): R$ {X}/mês

## 4. Expectativa do cliente
- **Mês 1:** {o que ele espera ver — em palavras dele}
- **Mês 2-3:** {marcos visíveis}
- **Critério de sucesso** (do cliente, não nosso): {definição}

## 5. Gates obrigatórios ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|invariantes]])
- [ ] Gate Fase 1 → Fase 2: diagnóstico aceito formalmente
- [ ] Gate playbook → agente: playbook aprovado antes de qualquer IA rodar
- [ ] LGPD: DPA assinado + RLS multi-tenant
- [ ] Anti-lock-in: playbook e workflows ficam com cliente

## 6. Stack confirmado
- {WhatsApp API · n8n · OpenClaw · Supabase · CRM próprio ou integração}

## 7. Riscos identificados na venda
- {liste objeções não totalmente resolvidas, preocupações expressas, sinais de risco no fechamento}

## 8. Próximas ações Victor (semana 1)
- [ ] Call de kickoff em {data}
- [ ] Acesso a {Meta Business / CRM / planilha}
- [ ] Cronograma 8 semanas formalizado

## 9. Contatos preferidos
- **WhatsApp principal:** {número}
- **Email:** {email}
- **Horário preferido contato:** {se mencionou}
- **Fireflies/Fathom da call:** {link}
```

#### Ciclo CS (Onboarding → Aha → Adoção → Expansão)

> Detalhe em [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao §invariantes]] + [[../MAPA-FUNIL|MAPA-FUNIL §6 handover]]. Resumo dos 4 estágios:

| Estágio | Quando | Dono | Sinal de avanço |
|---------|--------|------|----------------|
| **Onboarding** | Sem 1-4 | Victor + Hugo | Cliente preencheu playbook + deu acessos |
| **Aha** | Sem 4-8 | Victor | Cliente viu primeiro resultado tangível |
| **Adoção** | Sem 8-12 | Victor + cliente | Cliente usa sem precisar lembrar |
| **Expansão** | Mês 4+ | Lucas (volta!) | Upsell pra 🅾️ Real ou novo módulo |

> [!info] Lucas só volta no estágio Expansão
> Durante Onboarding/Aha/Adoção, Lucas **não interfere** salvo pedido do cliente ou crise. Victor é o ponto focal. Expansão = oportunidade comercial, aí Lucas volta.

---

## 🚫 O que NÃO fazer (anti-patterns)

- **Não tratar "sim" como fechado** — sem contrato + 1ª parcela, lead pode retroceder
- **Não enviar contrato em só 1 canal** — WhatsApp + email + Autentique (3 canais) garante recebimento
- **Não esperar mais que 48h pra cobrar assinatura** — silêncio aqui = retrocesso iminente
- **Não fazer handover por mensagem rápida** — handover precisa de doc escrito (§4)
- **Não desaparecer entre fechamento e kickoff** — cliente perde confiança se Lucas some
- **Não passar pro Victor sem alinhar expectativas** — Victor herda problema se Lucas vendeu errado
- **Não pular gates** ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|invariantes #1, #2, #6]]) — gate Fase 1→2 e gate playbook→agente são lei

---

## 🧠 Dica SPIN aplicável aqui

> [!tip] Pergunta de Need-payoff (N) final — fixar promessa do cliente
> Antes de mandar o contrato, fazer uma última Need-payoff que **o cliente vai ouvir Victor citar depois**.
>
> **Padrão:**
> > *"Pra fechar com clareza: daqui 90 dias, se o Elo OS funcionar como conversamos, qual vai ser a primeira coisa que vai mudar no seu dia-a-dia?"*
>
> Resposta dele vira **critério de sucesso herdado pelo Victor**. Vai no handover, vai no playbook, vai no review 30d.
>
> **Por que funciona aqui:** Need-payoff é o cliente verbalizando o ganho — e isso vira **expectativa contratual implícita** que orienta a entrega. Sem isso, "sucesso" vira interpretação subjetiva.

Detalhe completo: [[../../metodologia/spin-playbook-v0.2|SPIN Playbook v0.2 §N]].

---

## 📜 Scripts / templates pra usar

- [[../../../empresa/projetos/sales-os/02-comercial/playbook|Playbook §6 — Fechamento]] (gatilhos de urgência reais + pós-sim)
- Skill `/assinar` ([[../../../skills/assinar|skill assinar]]) — Autentique digital
- [[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|Oferta-padrao §invariantes]] — 8 regras invariantes
- [[../../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|Pacote 6OS Q2 §6 cronograma]] — onboarding 8 semanas
- Template handover acima (§4)

---

## 📊 Métricas dessa etapa

| Métrica | Como medir | Meta Q2 | Por quê |
|---------|------------|---------|---------|
| **Tempo "sim" → contrato assinado** | Datas | **≤48h** | Atraso = risco de retrocesso |
| **Tempo contrato → 1ª parcela paga** | Datas | **≤48h** | Sinal de cliente sério |
| **% retrocessos pós-sim** | Quantos voltaram atrás | **<5%** | >5% = qualificação fraca ou pricing fora |
| **Tempo fechamento → handover Victor** | Datas | **≤7 dias** | Atraso = Lucas vira gargalo |
| **Satisfação handover (Victor)** | Survey Victor após receber: "Recebi tudo que precisava?" | **5/5** | Handover ruim vira reclamação cliente |
| **NPS pós-kickoff (semana 4)** | Survey cliente | **>8/10** | Sinal de venda bem feita |

---

## 🔗 Próxima fase (fora do funil de vendas)

→ **Entrega operacional** (Victor + Hugo) — ver [[../../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|Pacote 6OS Q2]] §6 cronograma 8 semanas
→ **Ciclo CS** (Onboarding → Aha → Adoção → Expansão)
→ **Lucas volta em Expansão** (oportunidade upsell)

---

## 🧪 Case real — Bravo Agency (fechado 23/04)

> Histórico:
> - Discovery sábado 26/04 (presencial em SJRP)
> - Lead **disse "sim" verbal** logo após apresentação Opção B (R$ 3.900)
> - Contrato enviado **mesmo dia** (Autentique)
> - **1ª parcela R$ 975 paga 29/04** (3 dias após sim) — dentro do SLA 48h ✅
> - Parcelamento: 4× R$ 975 (29/04 paga, 15/05, 15/06, 15/07)
> - Handover Lucas → Hugo (operacional Bravo) em ≤7 dias ✅
> - Sprint 2 iniciou semana de 06/05
>
> **O que funcionou:**
> - SLA respeitado (sim → contrato → pagamento ≤72h)
> - Handover documentado (cronograma, framework-processo, plano-execucao)
> - Acessos liberados preventivamente (OpenClaw setup + Nginx + Cloudflare)
>
> **O que travou (lição):**
> - Pendência [06/05]: **4 bloqueantes vermelhos** travaram Sprint 2 (Gustavo precisa responder até 08/05 — acesso Hostinger, nome assistente IA, cliente-piloto, prazo SLA) ([[../../../memory/context/pendencias|pendencias.md]])
> - **Causa raiz:** Lucas não bloqueou na venda "acessos + decisões iniciais entregáveis em D+10" → virou bloqueante depois
> - **Aplicar daqui pra frente:** acessos críticos e decisões iniciais **devem entrar no contrato como entregáveis do cliente** com SLA específico ([[../../../empresa/projetos/sales-os/02-comercial/oferta-padrao|adicionar invariante #9 em revisão futura]])

---

## Changelog

- **2026-05-15 (v0.2):** versão inicial. Fases Fechamento + Handover separadas. Template handover Lucas→Victor (9 campos). Ciclo CS 4 estágios (Onboarding→Aha→Adoção→Expansão) com Lucas voltando só em Expansão. Case Bravo (fechou + travou em acessos do cliente — lição: SLA de cliente entra no contrato).
