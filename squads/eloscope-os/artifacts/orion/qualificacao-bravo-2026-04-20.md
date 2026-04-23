# Bravo Agência — Análise de Fit Pós-Venda (Retenção/Expansão)
**Data:** 2026-04-20
**Analista:** Órion
**Tipo:** Post-sale fit review — cliente em onboarding técnico

---

## Scorecard BANT

| Dim | Score 0-10 | Evidência |
|-----|-----------|-----------|
| B (Budget) | 5 | R$ 897/mês pago — tecnicamente viável. Mas faturamento R$ 28.8k/mês está abaixo do piso ICP formal (R$ 80k). Margem operacional de agência regional tende a 20-35%, o que deixa ~R$ 6-10k de lucro. Mensalidade de R$ 897 representa 3-9% do lucro estimado — pesada proporcionalmente. Setup de R$ 5k foi custo pontual alto relativo ao porte. |
| A (Authority) | 7 | Sociedade de 2 confirmada: Thiago (comercial/relacionamento) assinou, Gustavo (técnico/operacional) conduz o projeto. Ambos têm autoridade. Risco menor: Thiago pode não estar acompanhando progresso e tomar decisão de renovação sem ter visto valor. |
| N (Need) | 8 | Dor real e mensurável validada: Lilian 2h/dia manual, follow-up caótico, Trello sem visibilidade. R$ 6.740/mês em desperdício calculado. O produto entregue (Agente de Publicação) ataca exatamente a maior dor operacional. |
| T (Timing) | 5 | Contrataram em novembro, setup em dezembro, ainda em onboarding em abril — 5 meses sem go-live. Trava no SMTP para convites de equipe no Plane revela que o cliente não tem capacidade técnica de resolver bloqueios básicos sozinho. Urgência declarada na venda não se traduziu em engajamento no onboarding. |

**BANT Score: 62/100** (média ponderada: B=5, A=7, N=8, T=5)

---

## Fit ICP

- **Match persona:** Bruno (empreendedor digital, agência/info-produto) — score **5/10**
- **Match persona Rafael (alvo):** score **3/10** — faturamento abaixo do piso ICP formal (R$ 28.8k vs R$ 80k mínimo)

**Pontos fortes:**
- Dor 100% validada e mensurável — o produto resolve o problema declarado
- Decisor envolvido desde o início (Thiago assinou)
- Setor adjacente ao ICP validado (agência digital próxima de e-commerce/educação)
- 24 clientes ativos = base instalada para potencial white-label/canal

**Pontos fracos:**
- Faturamento R$ 28.8k está 64% abaixo do piso ICP formal (R$ 80k/mês) — anti-ICP explícito no `icp-eloscope.yaml`
- Onboarding manual e artesanal (Lucas configurando VPS pessoalmente) não é escalável — modelo de entrega atual não cabe num produto de R$ 897/mês de forma saudável
- 5 meses de onboarding sem go-live indica baixa capacidade técnica do cliente para absorver a solução — risco de frustração silenciosa
- Ticket médio dos clientes da Bravo (R$ 1.200) é baixo — potencial de expansão limitado se tentarmos vender para a base deles

**Sinais de churn:**
- Onboarding arrastado: trava técnica simples (SMTP) não resolvida por meses sem escalação pelo cliente — indica baixo engajamento ou baixa expectativa de valor
- Mismatch de expectativa crítico: cliente comprou "AI operando" mas recebeu "setup de infraestrutura" — quando/se perceber isso, frustração aumenta risco de saída
- Desalinhamento entre sócios: Gustavo (sócio técnico) é o ponto de contato ativo, mas Thiago (sócio comercial) pode não estar vendo progresso. Se Thiago decidir sobre renovação sem ter visto valor concreto, deal cai
- Faturamento abaixo do piso ICP: pressão de caixa do cliente pode levar à revisão de custos em qualquer ciclo ruim

**Sinais de expansão:**
- 24 clientes da Bravo são PMEs locais — potencial parceiro/canal para squads white-label se o produto funcionar
- Dor validada em múltiplos processos (publicação, contratos, aprovações, gestão) — backlog de automações possíveis além do Agente de Publicação
- Thiago operacional 12h/dia — se o produto liberar seu tempo, o ROI percebido será alto e a propensão a expandir aumenta

---

## Avaliação de Pricing vs Realidade

O plano Essencial a R$ 897/mês está subprecificado para a dor entregue (ROI teórico de 7.5x) mas **sobrecarregado para o modelo de entrega atual**. O onboarding manual de Lucas (VPS, domínio, Plane, SMTP) em 5 meses representa custo de horas não precificado. Se o modelo de entrega não for produtizado, cada cliente no porte da Bravo queima margem operacional mesmo pagando R$ 897/mês.

Para a meta Elo OS (R$ 15k MRR, 10 clientes em abr/2027 → ticket médio R$ 1.5k), a Bravo está abaixo do ticket-alvo em R$ 603/mês. Precisaria de upgrade de plano ou venda de módulos adicionais para fazer sentido no portfólio.

---

## Score final: 55/100

## Veredito: OK FIT (marginal) — risco de se tornar WRONG PRODUCT

**Razão:** Dor real e decisor envolvido salvam o score, mas faturamento abaixo do piso ICP, onboarding arrastado sem go-live em 5 meses, e modelo de entrega artesanal criam churn risk estrutural. O produto é certo para a dor, mas o cliente pode estar no segmento errado para o modelo de negócio da Eloscope hoje.

## Risco de churn: MÉDIO-ALTO

(Reclassificar para ALTO se go-live não acontecer até 2026-05-31)

---

## Próximas ações

1. **Go-live forçado até 30/04** — Gustavo/Lucas: resolver SMTP e fazer primeira publicação automatizada funcionar esta semana. Sem go-live, o cliente nunca vai perceber valor. Prazo: 2026-04-30. Responsável: Lucas (Eloscope) + Gustavo (Bravo).

2. **Check-in de valor com os 2 sócios juntos (20 min)** — Após go-live, Lucas agenda call curta com Thiago **e** Gustavo na mesma sala para mostrar o primeiro resultado concreto (ex: "Lilian não postou manualmente hoje — o agente fez"). Objetivo: alinhar a percepção de valor entre sócio comercial (Thiago) e sócio técnico (Gustavo) antes de qualquer conversa de expansão/renovação. Prazo: até 2026-05-07. Responsável: Lucas.

3. **Avaliar modelo canal/parceiro** — Se go-live ocorrer e NPS percebido for positivo (Thiago satisfeito), iniciar conversa sobre os 24 clientes da Bravo como pipeline de squads white-label. Um cliente da Bravo no porte correto (R$ 80k+/mês) vale mais para o ICP Eloscope do que a própria Bravo. Prazo: avaliar em 2026-05-15. Responsável: Órion + Atlas.

---

## Notas para o Atlas

- Se a call de valor com Thiago revelar frustração com o onboarding (muito técnico, demorado, sem resultado visível), considerar oferta de "sprint de aceleração" — 1 semana de dedicação intensiva para go-live completo, sem custo extra, como goodwill. Custo baixo, retém o cliente e transforma a narrativa.
- O mismatch de expectativa (comprou "AI operando", recebeu "infra manual") é o maior risco. Corrigir a narrativa na call de valor: mostrar que a infra é a fundação do agente, e o agente já está pronto para operar.
- Se faturamento da Bravo crescer (eles estão em onboarding de 3-4 novos clientes), reclassificar para ICP em 6 meses quando cruzarem R$ 50k/mês.
