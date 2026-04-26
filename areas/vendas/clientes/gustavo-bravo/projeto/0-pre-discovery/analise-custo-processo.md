# Análise de Custo por Processo — Bravo Agency

> **Objetivo:** Descobrir o custo real de cada processo por cliente,
> para saber onde automação gera mais economia.
> **Método:** Custo-hora real (hora-máquina) + Ishikawa (causa-raiz dos gargalos)

---

## Parte 1 — Custo-Hora Real da Bravo

### Passo 1: Custos fixos mensais totais

Levantar com o Gustavo TUDO que ele paga por mês para a operação rodar:

| Categoria                | Item                          | Custo/mês        |
| ------------------------ | ----------------------------- | ---------------- |
| **Pessoas**              | Gustavo (pró-labore)          | R$ ___ (a confirmar) |
|                          | Rafael (design)               | R$ 2.200         |
|                          | Ravi (multifunção)            | R$ 2.000         |
|                          | Rafael Gobi (vídeo)           | R$ 1.700         |
| **Subtotal Pessoas**     | (sem Gustavo)                 | **R$ 5.900**     |
| **Ferramentas**          | ChatGPT                       | R$ 110           |
|                          | Claude (Pro)                  | R$ 110           |
|                          | Internet (estúdio?)           | R$ 110           |
|                          | Adobe (assinatura craqueada)  | R$ 161           |
|                          | Email                         | R$ 25,80         |
|                          | Google Drive                  | R$ 49,90         |
|                          | Google Workspace              | R$ 99,90         |
|                          | Celular + Internet            | R$ 89            |
|                          | CapCut                        | R$ 32,90         |
|                          | Canva                         | R$ 38,10         |
|                          | ClickUp                       | R$ 0 (free)      |
|                          | Reportei                      | R$ 209,90        |
|                          | Govip (Freepik)               | R$ 45            |
|                          | Procfy (sistema)              | R$ 39            |
|                          | Lovable                       | R$ 145           |
|                          | Asaas (% transação)           | variável         |
|                          | IOX/Squads                    | R$ 66 (único)    |
| **Subtotal Ferramentas** |                               | **R$ 1.265,50**  |
| **Infraestrutura**       | Estúdio + utilidades          | R$ 2.200         |
| **Subtotal Infra**       |                               | **R$ 2.200**     |
|                          |                               |                  |
| **CUSTO FIXO TOTAL**     | (sem Gustavo)                 | **R$ 9.365,50**  |

> **Nota sobre Gustavo:** pró-labore não divulgado. Ele atua como "bombeiro" — entra onde precisa salvar (comercial, operação, edição, aprovação). Tarefas não bem definidas; tempo não rastreado. Para fim de simulação, tratamos custo Bravo sem ele e tratamos tempo dele como capacidade variável (não somada às 355h produtivas).

### Passo 2: Horas disponíveis por mês

| Pessoa        | Horas/dia | Dias/mês | Horas/mês | % operacional* | Horas produtivas |
| ------------- | --------- | -------- | --------- | -------------- | ---------------- |
| Gustavo       | variável  | ~22 d    | variável  | n/d            | n/d (bombeiro — entra onde precisa) |
| Rafael        | 7 h       | ~22 d    | 154 h     | ~70%           | ~108 h           |
| Ravi          | 7 h       | ~22 d    | 154 h     | ~70%           | ~108 h           |
| Rafael Gobi   | 9 h       | ~22 d    | 198 h     | ~70%           | ~139 h           |
| **TOTAL**     |           |          | **506 h** |                | **~355 h** (sem Gustavo) |

*\* % operacional = tempo efetivo trabalhando para clientes (descontar reuniões internas, almoço, deslocamento, admin, etc.)*

**Referência típica:** 8h/dia × 22 dias = 176h brutas → ~70% produtivas = **~123h/mês por pessoa**

### Passo 3: Custo-hora real

```
CUSTO-HORA REAL = Custo Fixo Total ÷ Total Horas Produtivas
```

| Métrica                       | Cálculo                         | Valor             |
| ----------------------------- | ------------------------------- | ----------------- |
| Custo fixo total/mês          | (Pessoas + Ferramentas + Infra) | R$ 9.365,50       |
| Horas produtivas totais/mês   | (Rafael + Ravi + Rafael Gobi)   | ~355 h            |
| **Custo-hora real da Bravo**  | total ÷ horas                   | **~R$ 26,38/h**   |

> ⚠️ Não inclui Gustavo (pró-labore a confirmar). Incluindo Gustavo, custo-hora sobe.

### Passo 4: Custo-hora por pessoa (opcional, mais preciso)

| Pessoa      | Custo individual/mês*       | Horas produtivas | Custo-hora    |
| ----------- | --------------------------- | ---------------- | ------------- |
| Gustavo     | n/d (não divulgado)         | variável         | n/d           |
| Rafael      | R$ 3.355 (2.200 + R$1.155 rateio) | ~108 h     | **~R$ 31/h**  |
| Ravi        | R$ 3.155 (2.000 + R$1.155 rateio) | ~108 h     | **~R$ 29/h**  |
| Rafael Gobi | R$ 2.855 (1.700 + R$1.155 rateio) | ~139 h     | **~R$ 21/h**  |

*Rateio de R$ 3.465,50 (ferramentas + infra) ÷ 3 = R$ 1.155 por pessoa.*

*\* Custo individual = salário + encargos + rateio proporcional de ferramentas e infra*

---

## Parte 2 — Custo por Processo por Cliente

### Passo 5: Mapear tempo gasto por processo POR CLIENTE

Perguntar pro time: **"Para 1 cliente, quanto tempo vocês gastam em cada etapa por mês?"**

> Dados extraídos do `[[levantamento-discovery]]` §5.2 + 5.3. Tempos por **cliente médio (8 estáticos + 2 vídeos)**.

| #   | Processo                                | Quem faz             | Tempo/cliente/mês | ×20 clientes | Custo-hora    | Custo total/mês |
| --- | --------------------------------------- | -------------------- | ----------------- | ------------ | ------------- | --------------- |
| 1   | Análise mensal do cliente               | Gustavo              | n/d (a cronometrar) | n/d        | n/d           | n/d             |
| 2   | Planejamento + copy (Docs+IA → .md)     | Rafa                 | ~30 min           | ~10h         | R$ 31         | R$ 310          |
| 3   | Geração de criativos estáticos (8/cli)  | Rafa (Content Machine) | ~3,5 h          | ~70h         | R$ 31         | R$ 2.170        |
| 4   | Captação de vídeo (gravação + foto)     | Gustavo + Ravi       | ~2 h (presencial) | ~40h         | R$ 26 (méd)   | R$ 1.040        |
| 5   | Edição de vídeo (~2 reels/cliente)      | Rafael Gobi          | ~3 h (1-2 vid/dia) | ~60h        | R$ 21         | R$ 1.260        |
| 6   | Envio pro cliente aprovar (WhatsApp)    | Rafa / Gustavo       | ~10 min           | ~3,3h        | R$ 30         | R$ 100          |
| 7   | Follow-up / cobrar aprovação manual     | Gustavo (segunda "carteirando") | ~30 min | ~10h        | R$ 26         | R$ 260          |
| 8   | Ajustes pós-feedback do cliente         | Rafa / Gobi          | ~30 min           | ~10h         | R$ 26         | R$ 260          |
| 9   | Agendamento Meta Business (manual)      | Ravi / Rafa          | 20-30 min         | ~8-10h       | R$ 30         | R$ 270          |
| 10  | Onboarding (cliente novo, não mensal)   | Gustavo              | ~3 sem ciclo      | ~5h amortiz. | R$ 26         | R$ 130          |
| 11  | Comunicação geral (WhatsApp interno)    | Todos                | n/d               | n/d          | n/d           | n/d             |
| 12  | Reuniões internas                       | n/a (sem daily)      | 0 min             | 0h           | —             | R$ 0            |
|     | **TOTAL (parcial, sem n/d)**            |                      |                   | **~216h**    |               | **~R$ 5.800**   |

> ⚠️ Total ≠ custo fixo (R$ 9.365). A diferença (~R$ 3.500) está em: análise mensal não cronometrada, comunicação difusa, retrabalho, capacidade ociosa de Gobi (output abaixo da meta).

### Passo 6: Custo por cliente

```
CUSTO POR CLIENTE = Custo Total Mensal Operação ÷ 20 clientes
```

| Métrica                       | Valor                                |
| ----------------------------- | ------------------------------------ |
| Custo operacional total/mês   | R$ 9.365,50 (sem Gustavo)            |
| Número de clientes            | ~20                                  |
| **Custo por cliente/mês**     | **~R$ 468**                          |
| Ticket médio (R$ 20k ÷ 20)    | ~R$ 1.000                            |
| **Margem por cliente**        | **~R$ 532** (antes pró-labore Gustavo) |
| **Margem % bruta**            | **~53%**                             |
| **Faturamento atual**         | R$ 20k (meta R$ 30k)                 |
| **Margem total/mês**          | ~R$ 10.634 (antes Gustavo + impostos) |

### Passo 7: Ranking de processos por custo (do mais caro ao mais barato)

| Rank | Processo                                  | Custo/mês (×20) | % do custo mapeado | Automação? |
| ---- | ----------------------------------------- | --------------- | ------------------ | ---------- |
| 1    | Geração de criativos estáticos (Rafa)     | R$ 2.170        | ~37%               | ✅ Já automatizado (Content Machine) — manter |
| 2    | Edição de vídeo (Rafael Gobi)             | R$ 1.260        | ~22%               | ⚠️ POC Premiere+Claude (problema é humano) |
| 3    | Captação presencial (gravação + foto)     | R$ 1.040        | ~18%               | ❌ Físico — não automatiza |
| 4    | Planejamento + copy (Docs+IA)             | R$ 310          | ~5%                | ✅ Já automatizado (Content Machine) |
| 5    | Agendamento Meta Business manual          | R$ 270          | ~5%                | 🎯 **Skill Eloscope** (Agendador multi-cliente) |
| 6    | Follow-up aprovação manual ("carteirar")  | R$ 260          | ~4%                | 🎯 **Skill Eloscope** (Aprovação SLA) |
| 7    | Ajustes pós-feedback                      | R$ 260          | ~4%                | parcial |
| 8    | Onboarding (amortizado)                   | R$ 130          | ~2%                | parcial (Typeform) |
| 9    | Envio cliente                             | R$ 100          | ~2%                | dentro do bloco aprovação |

### Insight do ranking

> [!tip] Os 3 processos mais caros **não são** os candidatos naturais — são processos físicos ou já automatizados.
>
> **Onde está o ouro real:**
> - **Custo direto baixo** (Agendamento R$270 + Aprovação R$260 = R$530/mês)
> - **Custo indireto altíssimo**: cada hora "carteirando" cliente é hora que Gustavo não vende. Meta de R$ 30k (vs. R$ 20k atual) trava porque comercial não escala.
>
> A automação de aprovação + agendador libera **~20h/mês do Gustavo** (8h agendamento + 10h follow-up + 2h captação extra) → tempo que vira **comercial digital** → diferença entre R$ 20k e R$ 30k de faturamento.

---

## Parte 3 — Ishikawa (Diagrama de Causa e Efeito)

### Para cada gargalo identificado, mapear as causas-raiz

O Ishikawa organiza causas em 6 categorias (6M). Adaptando para agência:

```
                        ┌─────────────────────────┐
        ┌───────────────┤   EFEITO (gargalo):     │
        │               │   [ex: "planejamento     │
        │               │    leva 3h por cliente"] │
        │               └─────────────────────────┘
        │
   ─────┼─────────────────────────────────────────
        │
   ┌────┴────┐  ┌────────┐  ┌────────┐
   │ MÃO DE  │  │MÉTODO  │  │MÁQUINA │
   │ OBRA    │  │        │  │(FERRAM)│
   │         │  │        │  │        │
   │• Poucos │  │• Sem   │  │• ChatGPT│
   │  no time│  │  padrão│  │  genéri-│
   │• Gustavo│  │• Cada  │  │  co    │
   │  faz    │  │  client│  │• Sem   │
   │  tudo   │  │  difer.│  │  templa-│
   │         │  │        │  │  tes   │
   └─────────┘  └────────┘  └────────┘
   ┌─────────┐  ┌────────┐  ┌────────┐
   │MATERIAL │  │MEIO    │  │MEDIÇÃO │
   │(INPUT)  │  │AMBIENTE│  │        │
   │         │  │        │  │        │
   │• Briefing│ │• Muitas│  │• Não   │
   │  vago   │  │  inter-│  │  mede  │
   │• Dados  │  │  rupções│ │  tempo │
   │  incom- │  │• Home  │  │• Não   │
   │  pletos │  │  office│  │  sabe  │
   │         │  │        │  │  custo │
   └─────────┘  └────────┘  └────────┘
```

### As 6 categorias adaptadas para agência

| Categoria | O que investigar | Perguntas pro discovery |
|-----------|-----------------|----------------------|
| **Mão de obra** | Quem faz, capacidade, sobrecarga | "Quem faz isso? Tá sobrecarregado? Alguém mais sabe fazer?" |
| **Método** | Processo definido ou improvisado | "Tem um passo-a-passo ou cada vez é diferente?" |
| **Máquina (Ferramenta)** | Ferramentas usadas, limitações | "Qual ferramenta usa? Ela ajuda ou atrapalha?" |
| **Material (Input)** | Qualidade do que entra no processo | "O que você precisa do cliente pra começar? Chega completo?" |
| **Meio ambiente** | Contexto, interrupções, comunicação | "Onde faz isso? Tem interrupção? WhatsApp atrapalha?" |
| **Medição** | Como mede resultado, tempo, qualidade | "Vocês sabem quanto tempo leva? Medem alguma coisa?" |

### Template: Ishikawa por Gargalo

Usar para os 2-3 maiores gargalos que surgirem no discovery:

```
GARGALO: _______________________________________________
EFEITO: ________________________________________________

CAUSAS:
  Mão de obra:  1. ___  2. ___  3. ___
  Método:       1. ___  2. ___  3. ___
  Ferramenta:   1. ___  2. ___  3. ___
  Input:        1. ___  2. ___  3. ___
  Meio:         1. ___  2. ___  3. ___
  Medição:      1. ___  2. ___  3. ___

CAUSA-RAIZ PROVÁVEL: ___________________________________
SOLUÇÃO PROPOSTA: ______________________________________
```

---

## Parte 4 — Simulação: Com IA vs. Sem IA

### Cenário Atual (~20 clientes, sem automação)

| Métrica                        | Valor                                      |
| ------------------------------ | ------------------------------------------ |
| Faturamento mensal médio       | ~R$ 20.000 (meta: R$ 30.000)               |
| Modelo de receita              | 99% mensalista                             |
| Mix por cliente típico         | 8 estáticos + 2 vídeos / mês               |
| Volume total mensal            | ~300 estáticos + ~60 vídeos                |
| Custo operacional (sem Gustavo)| R$ 9.365,50                                |
| **Margem antes do pró-labore** | **~R$ 10.634**                             |
| Horas produtivas totais/mês    | ~355 h (sem Gustavo)                       |
| Horas por cliente/mês (média)  | ~17,7 h (355h ÷ 20 clientes)               |
| **Capacidade máxima atual**    | **limitada por gargalo de edição/aprovação** |

### Cenário com IA (redução de tempo por processo)

Estimar redução de tempo para cada processo automatizado:

| Processo | Tempo atual | Tempo com IA | Redução | Economia/cliente |
|----------|------------|-------------|---------|-----------------|
| Análise/relatório | ___min | ___min | ___% | ___min |
| Planejamento | ___min | ___min | ___% | ___min |
| Copy | ___min | ___min | ___% | ___min |
| [outros] | ___min | ___min | ___% | ___min |
| **Total** | **___min** | **___min** | **___% ** | **___min** |

### Impacto no negócio

```
Tempo economizado por cliente/mês:  ___ min
Tempo economizado ×20 clientes:     ___ h/mês
Novos clientes possíveis com esse tempo: ___ clientes
Receita adicional potencial:        R$ ___/mês
```

| Métrica | Sem IA | Com IA | Delta |
|---------|--------|--------|-------|
| Clientes atendidos | 20 | ___ | +___ |
| Faturamento | R$24.000 | R$___ | +R$___ |
| Custo operacional | R$___ | R$___ | -R$___ |
| Custo IA (API + VPS) | R$0 | ~R$280 | +R$280 |
| **Margem** | **R$___** | **R$___** | **+R$___** |
| Horas por cliente | ___h | ___h | -___h |

### ROI do Projeto

```
Investimento:           R$3.900 (único) + ~R$280/mês (recorrente)
Economia mensal:        R$___ (horas liberadas × custo-hora)
Receita adicional/mês:  R$___ (novos clientes possíveis)
Payback:                ___ meses
ROI 12 meses:           ____%
```

---

## Parte 5 — Cheat Sheet para o Discovery

### Perguntas de custo (fazer pro Gustavo, em particular)

1. **"Quanto você gasta por mês pra manter a operação rodando? Tudo: pessoas, ferramentas, escritório, contador..."**
2. **"Quanto cada pessoa do time custa pra você por mês?"**
3. **"Quantas horas por dia cada um trabalha efetivamente nos clientes?"**
4. **"Se eu pegar 1 cliente da Bravo, do começo ao fim do mês, quantas horas vocês gastam nele?"**
5. **"Qual processo toma mais tempo? Se você pudesse eliminar uma coisa da rotina, qual seria?"**

### Perguntas de capacidade

6. **"Com 20 clientes, sobra tempo? Ou vocês estão no limite?"**
7. **"Se entrar 5 clientes novos amanhã, vocês aguentam?"**
8. **"O que te impede de crescer hoje — falta gente ou falta processo?"**

### A conta que importa

Pegar os números e fazer na hora com o Gustavo:

```
"Gustavo, olha: teu custo mensal é R$X.
 Divide por 20 clientes = R$Y por cliente.
 Teu ticket médio é R$1.200.
 Tua margem real é R$Z por cliente.
 
 Se a gente automatizar [processo X], vocês ganham N horas por mês.
 Isso dá pra atender +M clientes sem contratar ninguém.
 +M clientes × R$1.200 = R$W a mais por mês.
 
 O sistema custa R$3.900 + R$280/mês.
 Em N meses se paga sozinho."
```

---

## Parte 6 — Resumo dos Frameworks Usados

| Framework | Pra quê serve aqui |
|-----------|-------------------|
| **Custo-hora real** | Saber quanto custa cada hora de trabalho na Bravo |
| **Custo por processo** | Identificar os processos mais caros |
| **Automation Score** | Rankear o que faz sentido automatizar (do framework-processo.md) |
| **Ishikawa (6M)** | Entender POR QUE cada gargalo existe, não só o que é |
| **Simulação com/sem IA** | Mostrar o impacto real em reais e horas |

**Sequência no discovery:**
1. Custo-hora real (entender a base)
2. Mapear processos com tempo (custo por processo)
3. Ishikawa nos gargalos (causa-raiz)
4. Automation Score (priorizar)
5. Simulação (projetar futuro)

---

*Criado: 24/04/2026*
*Referências: Custo-hora industrial adaptado, Ishikawa/6M, Value Stream Mapping*
