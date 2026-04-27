---
tipo: doc
status: ativo
tags: [cliente/bravo, area/vendas, tipo/apresentacao, tipo/miro]
cliente: bravo
data: 2026-04-27
relacionados: ["[[bpmn-basico]]", "[[processo-detalhado]]", "[[proposta-pos-discovery]]"]
---

# Fluxos para Miro — Apresentação Bravo

> [!info] Para que serve
> Material pronto pra importar no Miro e apresentar pro time da Bravo. **Sequência de 4 boards** que conta a história: como é hoje → onde dói → o que entra → como fica. Usa Mermaid (Miro suporta importação via plugin "Mermaid to Miro" ou copy/paste em texto sticky).

> [!tip] Como importar no Miro
> 1. Abrir o board Miro do projeto Bravo (criar 1 frame por board abaixo)
> 2. Plugin "Mermaid Diagrams for Miro" → colar o código → "Insert"
> 3. Ou: usar o site `mermaid.live` → exportar PNG/SVG → arrastar pro Miro
> 4. Para os boards de raias, ajustar manualmente o tamanho dos nós após importar (Mermaid no Miro tende a ficar comprimido)

---

## Roteiro de apresentação (sugestão de 30-45 min)

| Tempo | Board | Objetivo |
|-------|-------|----------|
| 5 min | 1. Fluxo atual | "Vocês se reconhecem aqui?" — validar que o desenho bate com a realidade |
| 10 min | 2. Onde dói (gargalos) | Mostrar onde o tempo evapora e quem segura cada gargalo |
| 5 min | 3. Custo do que dói | Tradução em horas e dinheiro do que foi visto no board 2 |
| 10 min | 4. Onde a automação entra | Apresentar OpenClaw como camada interna + as 3 skills |
| 10 min | Discussão | Validar reframe + dúvidas |

---

## Board 1 — Fluxo atual (raias cliente × Bravo)

**Objetivo:** validar com o time se o desenho representa a operação real.

```mermaid
flowchart LR
    subgraph CLIENTE [" CLIENTE FINAL "]
        direction LR
        C1([Fecha contrato]) --> C2[Preenche briefing<br>5 forms]
        C2 --> C3[Envia material<br>complementar]
        C3 -.-> C4{Aprova<br>peças?}
        C4 -->|Sim| C5([Posts no ar])
        C4 -->|Ajuste| C6[Devolve feedback]
        C6 -.-> C4
        C5 --> C7[Recebe relatório<br>mensal]
    end

    subgraph BRAVO [" TIME BRAVO "]
        direction LR
        B1[Onboarding<br>e acessos] --> B2[Setup<br>operacional]
        B2 --> B3[Captação<br>presencial]
        B3 --> B4[Planejamento<br>+ copy]
        B4 --> B5[Geração de<br>criativos]
        B5 --> B6[Edição<br>de vídeo]
        B6 --> B7[Envio para<br>aprovação]
        B7 -.-> B8[Follow-up<br>de aprovação]
        B8 -.-> B7
        B7 --> B9[Ajustes pós<br>feedback]
        B9 --> B10[Agendamento<br>Meta Business]
        B10 --> B11[Análise<br>mensal]
        B11 --> B4
    end

    C1 --> B1
    C2 --> B2
    C3 --> B3
    B7 --> C4
    C6 --> B9
    B10 --> C5
    B11 --> C7
```

**Perguntas pra fazer no board:**
- "Esse fluxo bate com como vocês trabalham?"
- "Tem alguma etapa que não aparece aqui?"
- "Os pontilhados são onde geralmente vocês esperam — concordam?"

---

## Board 2 — Onde dói (mesmo fluxo, com gargalos pintados)

**Objetivo:** apontar visualmente os 3 gargalos.

```mermaid
flowchart LR
    subgraph CLIENTE [" CLIENTE FINAL "]
        direction LR
        C1([Fecha contrato]) --> C2[Preenche briefing]
        C2 --> C3[Envia material]
        C3 -.-> C4{Aprova<br>peças?}
        C4 -->|Sim| C5([Posts no ar])
        C4 -->|Ajuste| C6[Feedback]
        C6 -.-> C4
        C5 --> C7[Recebe relatório]
    end

    subgraph BRAVO [" TIME BRAVO "]
        direction LR
        B1[Onboarding] --> B2[Setup]
        B2 --> B3[Captação]
        B3 --> B4[Planejamento + copy]
        B4 --> B5[Criativos]
        B5 --> B6[Edição]
        B6 --> B7[Envio aprovação]
        B7 -.-> B8[Follow-up<br>'carteirar']
        B8 -.-> B7
        B7 --> B9[Ajustes]
        B9 --> B10[Agendamento<br>Meta Business]
        B10 --> B11[Análise mensal]
        B11 --> B4
    end

    C1 --> B1
    C2 --> B2
    C3 --> B3
    B7 --> C4
    C6 --> B9
    B10 --> C5
    B11 --> C7

    style B8 fill:#ef4444,color:#fff,stroke:#991b1b,stroke-width:3px
    style B11 fill:#ef4444,color:#fff,stroke:#991b1b,stroke-width:3px
    style B10 fill:#eab308,stroke:#854d0e,stroke-width:3px
    style B7 fill:#eab308,stroke:#854d0e,stroke-width:3px
```

**Comentário:**
- 🔴 **Vermelho (Follow-up + Análise mensal):** consomem o sócio comercial 100%
- 🟡 **Amarelo (Envio + Agendamento):** atrito repetitivo, drena o time

**Frase-chave:**
> "Os processos que mais doem não são os mais caros — são os que travam o Gustavo. E é o Gustavo que precisa estar livre pra crescer R$ 20k → R$ 30k."

---

## Board 3 — Custo do que dói (números)

**Objetivo:** traduzir gargalo em horas e dinheiro.

```mermaid
flowchart TB
    subgraph TOPO [" Onde o tempo do time vai (×20 clientes) "]
        direction LR
        T1[Criativos<br>~70h<br>~R$ 2.170]
        T2[Edição<br>~60h<br>~R$ 1.260]
        T3[Captação<br>~40h<br>~R$ 1.040]
        T4[Planejamento+copy<br>~10h<br>~R$ 310]
    end

    subgraph CARO [" Onde DÓI (consome o sócio comercial) "]
        direction LR
        D1[Agendamento Meta<br>~10h/mês<br>~R$ 270]
        D2[Follow-up aprovação<br>~10h/mês<br>~R$ 260]
        D3[Análise mensal<br>~30-40h/mês<br>a confirmar]
    end

    subgraph LIBERA [" Liberar ~20h/mês do Gustavo "]
        direction LR
        L1[~20h libres/mês]
        L2[Vira tempo<br>comercial]
        L3[Caminho<br>R$ 20k → R$ 30k]
        L1 --> L2
        L2 --> L3
    end

    style T1 fill:#dbeafe
    style T2 fill:#dbeafe
    style T3 fill:#dbeafe
    style T4 fill:#dbeafe
    style D1 fill:#fef3c7
    style D2 fill:#fee2e2
    style D3 fill:#fee2e2
    style L3 fill:#22c55e,color:#fff
```

**Frase-chave:**
> "O criativo é mais caro mas já está automatizado (Content Machine). A dor real está em coisas que custam pouco em horas-Bravo, mas custam **o sócio comercial inteiro**."

---

## Board 4 — Onde a automação interna entra

**Objetivo:** apresentar a camada OpenClaw + 3 skills + alinhar fronteira.

```mermaid
flowchart LR
    subgraph CLIENTE [" CLIENTE FINAL "]
        direction LR
        C1([Fecha contrato]) --> C2[Briefing]
        C2 --> C3[Material]
        C3 -.-> C4{Aprova?}
        C4 -->|Sim| C5([Posts no ar])
        C4 -->|Ajuste| C6[Feedback]
        C6 -.-> C4
        C5 --> C7[Recebe relatório]
    end

    subgraph BRAVO [" TIME BRAVO "]
        direction LR
        B1[Onboarding] --> B2[Setup]
        B2 --> B3[Captação]
        B3 --> B4[Planejamento + copy]
        B4 --> B5[Criativos]
        B5 --> B6[Edição]
        B6 --> B7[Envio aprovação]
        B7 -.-> B8[Follow-up]
        B8 -.-> B7
        B7 --> B9[Ajustes]
        B9 --> B10[Agendamento Meta]
        B10 --> B11[Análise mensal]
        B11 --> B4
    end

    subgraph OPENCLAW [" OPENCLAW (interno do time da Bravo) "]
        direction LR
        O1[Skill 1<br>Aprovação SLA]
        O2[Skill 2<br>Agendador<br>multi-cliente]
        O3[Skill 3<br>Análise mensal]
    end

    C1 --> B1
    C2 --> B2
    C3 --> B3
    B7 --> C4
    C6 --> B9
    B10 --> C5
    B11 --> C7

    B7 -.assiste.-> O1
    B8 -.substitui.-> O1
    B10 -.substitui.-> O2
    B11 -.substitui.-> O3

    O1 -.lembrete cobrança.-> C4

    style O1 fill:#22c55e,color:#fff,stroke-width:2px
    style O2 fill:#22c55e,color:#fff,stroke-width:2px
    style O3 fill:#22c55e,color:#fff,stroke-width:2px
    style B8 fill:#ef4444,color:#fff
    style B11 fill:#ef4444,color:#fff
    style B10 fill:#eab308
```

**Mensagens-chave (decorar antes da reunião):**

1. **"Onde os agentes ficam":** dentro do OpenClaw da Bravo. Time abre OpenClaw, chama a skill, valida o output, segue. Não é uma plataforma nova pra aprender — é uma camada dentro do que vocês já têm.

2. **"Onde os agentes NÃO ficam":** não conversam com cliente final, não fazem login no Meta sozinhos, não respondem WhatsApp. **Única exceção:** lembrete de cobrança automatizado pra cliente que não respondeu (mensagem programada disparada pelo OpenClaw).

3. **"Por que não n8n agora":** o projeto atual entrega skills internas no OpenClaw. Integrações externas (n8n, conectores) são fase 2 — escopo e custo diferentes. Foco agora: deixar o time da Bravo com superpoderes internos.

4. **"O que vocês ganham":**
   - Skill 1: Gustavo para de carteirar manualmente (libera ~10h/mês dele)
   - Skill 2: agendamento multi-cliente sem trocar conta 20× no Meta (libera ~8-10h/mês do time)
   - Skill 3: análise mensal padronizada e rápida (libera ~20-30h/mês do Gustavo)

---

## Board 5 (opcional) — Bônus de processo: onboarding

**Objetivo:** mostrar o ganho do Typeform unificado, fora do escopo principal mas como follow-up natural.

```mermaid
flowchart LR
    subgraph HOJE [" HOJE — 5 forms separados "]
        direction TB
        H1[5 links separados] --> H2[Cliente preenche em<br>20-30 dias]
        H2 --> H3[Bravo cobra manual<br>WhatsApp]
        H3 --> H4[Setup com lacunas]
    end

    subgraph PROPOSTA [" COM TYPEFORM UNIFICADO "]
        direction TB
        P1[1 link multi-step] --> P2[Cliente preenche em<br>5-10 dias]
        P2 --> P3[Lembrete automático<br>OpenClaw]
        P3 --> P4[Setup completo]
    end

    HOJE -.-> PROPOSTA

    style H3 fill:#ef4444,color:#fff
    style P3 fill:#22c55e,color:#fff
    style P4 fill:#22c55e,color:#fff
```

**Frase-chave:**
> "Esse é bônus de processo — não está no preço, mas faz parte do roteiro. Resolve o gargalo de onboarding que hoje custa ~1h/cliente do Gustavo cobrando manualmente."

---

## Checklist da apresentação

- [ ] Importar os 4 boards no Miro (Board 5 opcional)
- [ ] Ajustar nós manualmente após import (espaçamento)
- [ ] Adicionar foto/avatar dos responsáveis na raia "Time Bravo"
- [ ] Stickies pra anotações ao vivo durante reunião
- [ ] Imprimir/exportar versão estática como backup (caso plugin falhe)
- [ ] Reservar 10 min finais pra discussão e dúvidas

---

## Pendências antes da apresentação

- [ ] Cronometrar análise mensal real (impacta board 3 — números atualizados)
- [ ] Confirmar com Gustavo se a faixa de horas liberadas (~20h/mês) bate com a percepção dele
- [ ] Decidir formato: reunião presencial ou Meet? (Miro funciona bem nos dois)

---

*Criado: 2026-04-27 — material de apresentação visual baseado no [[bpmn-basico]] e [[processo-detalhado]]*
