# Análise de Custo por Processo — Bravo Agency

> **Objetivo:** Descobrir o custo real de cada processo por cliente,
> para saber onde automação gera mais economia.
> **Método:** Custo-hora real (hora-máquina) + Ishikawa (causa-raiz dos gargalos)

---

## Parte 1 — Custo-Hora Real da Bravo

### Passo 1: Custos fixos mensais totais

Levantar com o Gustavo TUDO que ele paga por mês para a operação rodar:

| Categoria | Item | Custo/mês |
|-----------|------|-----------|
| **Pessoas** | Gustavo (pró-labore) | R$ ___ |
| | Rafael (design) | R$ ___ |
| | Javi (multifunção) | R$ ___ |
| | Rafael Editor (vídeo) | R$ ___ |
| | Lilian (se ainda ativa) | R$ ___ |
| **Subtotal Pessoas** | | **R$ ___** |
| **Ferramentas** | ChatGPT (assinatura) | R$ ___ |
| | Claude (plano Pro) | R$ ~92 |
| | Canva (se pago) | R$ ___ |
| | ClickUp (se pago) | R$ ___ |
| | Gemini (se pago) | R$ ___ |
| | mLabs / agendador | R$ ___ |
| | Lovable / Vercel | R$ ___ |
| | IOX/Squads (comprou R$66) | R$ ___ (único) |
| | Outras ferramentas | R$ ___ |
| **Subtotal Ferramentas** | | **R$ ___** |
| **Infraestrutura** | Escritório / coworking / home | R$ ___ |
| | Internet | R$ ___ |
| | Energia | R$ ___ |
| | Contador | R$ ___ |
| | Impostos (DAS/simples) | R$ ___ |
| **Subtotal Infra** | | **R$ ___** |
| | | |
| **CUSTO FIXO TOTAL** | | **R$ ___** |

### Passo 2: Horas disponíveis por mês

| Pessoa | Horas/dia | Dias/mês | Horas/mês | % operacional* | Horas produtivas |
|--------|-----------|----------|-----------|----------------|-----------------|
| Gustavo | ___ h | ___ d | ___ h | ___% | ___ h |
| Rafael | ___ h | ___ d | ___ h | ___% | ___ h |
| Javi | ___ h | ___ d | ___ h | ___% | ___ h |
| Rafael Editor | ___ h | ___ d | ___ h | ___% | ___ h |
| **TOTAL** | | | | | **___ h** |

*\* % operacional = tempo efetivo trabalhando para clientes (descontar reuniões internas, almoço, deslocamento, admin, etc.)*

**Referência típica:** 8h/dia × 22 dias = 176h brutas → ~70% produtivas = **~123h/mês por pessoa**

### Passo 3: Custo-hora real

```
CUSTO-HORA REAL = Custo Fixo Total ÷ Total Horas Produtivas
```

| Métrica | Cálculo | Valor |
|---------|---------|-------|
| Custo fixo total/mês | (Pessoas + Ferramentas + Infra) | R$ ___ |
| Horas produtivas totais/mês | (soma de todas as pessoas) | ___ h |
| **Custo-hora real da Bravo** | total ÷ horas | **R$ ___/h** |

### Passo 4: Custo-hora por pessoa (opcional, mais preciso)

| Pessoa | Custo individual/mês* | Horas produtivas | Custo-hora |
|--------|----------------------|-------------------|-----------|
| Gustavo | R$ ___ | ___ h | R$ ___/h |
| Rafael | R$ ___ | ___ h | R$ ___/h |
| Javi | R$ ___ | ___ h | R$ ___/h |
| Rafael Editor | R$ ___ | ___ h | R$ ___/h |

*\* Custo individual = salário + encargos + rateio proporcional de ferramentas e infra*

---

## Parte 2 — Custo por Processo por Cliente

### Passo 5: Mapear tempo gasto por processo POR CLIENTE

Perguntar pro time: **"Para 1 cliente, quanto tempo vocês gastam em cada etapa por mês?"**

| # | Processo | Quem faz | Tempo/cliente/mês | ×20 clientes | Custo-hora | Custo total/mês |
|---|----------|----------|-------------------|-------------|-----------|----------------|
| 1 | Análise/relatório do mês anterior | | ___min | ___h | R$___ | R$___ |
| 2 | Planejamento de conteúdo | | ___min | ___h | R$___ | R$___ |
| 3 | Geração de copy (textos) | | ___min | ___h | R$___ | R$___ |
| 4 | Criação de design/criativos | | ___min | ___h | R$___ | R$___ |
| 5 | Edição de vídeo (se aplicável) | | ___min | ___h | R$___ | R$___ |
| 6 | Enviar para aprovação do cliente | | ___min | ___h | R$___ | R$___ |
| 7 | Follow-up / cobrar aprovação | | ___min | ___h | R$___ | R$___ |
| 8 | Ajustes pós-feedback do cliente | | ___min | ___h | R$___ | R$___ |
| 9 | Postagem / agendamento | | ___min | ___h | R$___ | R$___ |
| 10 | Onboarding (cliente novo) | | ___min | ___h | R$___ | R$___ |
| 11 | Comunicação geral (WhatsApp, email) | | ___min | ___h | R$___ | R$___ |
| 12 | Reuniões internas | | ___min | ___h | R$___ | R$___ |
| | **TOTAL** | | | **___h** | | **R$___** |

### Passo 6: Custo por cliente

```
CUSTO POR CLIENTE = Custo Total Mensal Operação ÷ 20 clientes
```

| Métrica | Valor |
|---------|-------|
| Custo operacional total/mês | R$ ___ |
| Número de clientes | 20 |
| **Custo por cliente/mês** | **R$ ___** |
| Ticket médio cobrado/cliente | ~R$ 1.200 |
| **Margem por cliente** | **R$ ___** |
| **Margem %** | **____%** |

### Passo 7: Ranking de processos por custo (do mais caro ao mais barato)

| Rank | Processo | Custo/mês (×20 clientes) | % do custo total |
|------|----------|------------------------|-----------------|
| 1 | | R$ ___ | ___% |
| 2 | | R$ ___ | ___% |
| 3 | | R$ ___ | ___% |
| 4 | | R$ ___ | ___% |
| 5 | | R$ ___ | ___% |

**Os 3 processos mais caros são os candidatos naturais para as 3 skills.**

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

### Cenário Atual (20 clientes, sem automação)

| Métrica | Valor |
|---------|-------|
| Faturamento mensal | ~R$24.000 (20 × ~R$1.200) |
| Custo operacional mensal | R$ ___ |
| **Margem operacional** | **R$ ___** |
| **Margem %** | **____%** |
| Horas produtivas totais/mês | ___ h |
| Horas por cliente/mês | ___ h |
| **Capacidade máxima** | **___ clientes** |

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
