---
tipo: doc
status: ativo
tags: [cliente/bravo, area/vendas, tipo/bpmn, tipo/processo]
cliente: bravo
data: 2026-04-27
relacionados: ["[[processo-detalhado]]", "[[proposta-pos-discovery]]", "[[levantamento-discovery]]"]
---

# BPMN Básico — Bravo Agency

> [!info] O que é
> Fluxo end-to-end da operação Bravo em **raias (swimlanes)**: o que é responsabilidade do **time interno** e o que depende do **cliente final**. Sem detalhamento de cada processo (esse vive em `[[processo-detalhado]]`) — aqui é só o esqueleto pra apresentação.

> [!warning] Reframe — leitura essencial
> Este documento foi reescrito após o discovery 25/04. Substitui versão anterior (que ainda usava skills antigas Análise/Planejamento/Copy e n8n no escopo). Skills validadas agora: **Aprovação SLA / Agendador multi-cliente / Análise mensal**. Camada técnica de automação interna: **OpenClaw + agentes + skills internas usadas pelo time da Bravo**. Não há n8n no escopo de entrega.

---

## 1. Ciclo de vida do cliente — visão de raias

```mermaid
flowchart LR
    %% RAIA 1 — CLIENTE FINAL
    subgraph CLIENTE [" CLIENTE FINAL "]
        direction LR
        C1([Fecha contrato]) --> C2[Preenche briefing<br>nos forms]
        C2 --> C3[Envia material<br>complementar]
        C3 -.-> C4{Aprova<br>peças?}
        C4 -->|Sim| C5([Posts no ar])
        C4 -->|Pede ajuste| C6[Devolve feedback]
        C6 -.-> C4
        C5 --> C7[Recebe relatório<br>mensal]
    end

    %% RAIA 2 — TIME BRAVO
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

    %% Conexões cliente ↔ Bravo
    C1 --> B1
    C2 --> B2
    C3 --> B3
    B7 --> C4
    C6 --> B9
    B10 --> C5
    B11 --> C7

    style B8 fill:#ef4444,color:#fff
    style B11 fill:#ef4444,color:#fff
    style B10 fill:#eab308
    style B7 fill:#eab308
```

### Legenda de cores

| Cor | Significado |
|-----|-------------|
| 🔴 Vermelho | Gargalo crítico (consome o sócio comercial) |
| 🟡 Amarelo | Atrito/atraso recorrente |
| ⚪ Branco | Processo fluindo |

### Pontos de atenção

- **Linhas pontilhadas** entre cliente e Bravo = handoffs onde o fluxo geralmente trava (espera de resposta, follow-up)
- **B8 (Follow-up)** e **B11 (Análise mensal)** estão em vermelho — são os processos que mais consomem o Gustavo
- **B10 (Agendamento)** e **B7 (Envio)** em amarelo — atrito repetitivo que Bravo resolve no esforço bruto

---

## 2. Onde a automação interna entra

> [!info] Camada técnica
> Automação **interna** via **OpenClaw + agentes + skills**. Usada pelo time da Bravo dentro do OpenClaw deles — não é integração externa com n8n. **Única exceção** que toca o cliente final: disparo de lembrete de cobrança de aprovação (mensagem programada).

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

    subgraph OPENCLAW [" OPENCLAW (interno Bravo) "]
        direction LR
        O1[Skill 1<br>Aprovação SLA]
        O2[Skill 2<br>Agendador<br>multi-cliente]
        O3[Skill 3<br>Análise mensal]
    end

    %% Conexões cliente ↔ Bravo
    C1 --> B1
    C2 --> B2
    C3 --> B3
    B7 --> C4
    C6 --> B9
    B10 --> C5
    B11 --> C7

    %% OpenClaw substitui/assiste
    B7 -.assiste.-> O1
    B8 -.substitui.-> O1
    B10 -.substitui.-> O2
    B11 -.substitui.-> O3

    %% Único toque ao cliente final
    O1 -.lembrete cobrança.-> C4

    style O1 fill:#22c55e,color:#fff
    style O2 fill:#22c55e,color:#fff
    style O3 fill:#22c55e,color:#fff
    style B8 fill:#ef4444,color:#fff
    style B11 fill:#ef4444,color:#fff
    style B10 fill:#eab308
```

### Como ler

| Linha | Significado |
|-------|-------------|
| `B7 -.assiste.-> O1` | OpenClaw apoia a etapa, time continua no controle |
| `B8 -.substitui.-> O1` | OpenClaw assume — time só valida |
| `O1 -.lembrete cobrança.-> C4` | Único ponto onde OpenClaw fala com cliente final (mensagem programada) |

### O que **não está** no escopo

- ❌ n8n / integrações externas
- ❌ Conectores diretos com Meta Business (agendamento real fica como roteiro/preparação, time executa)
- ❌ Bots de WhatsApp respondendo cliente
- ❌ Qualquer coisa que exija servidor/infra de produção pra o cliente final

> [!tip] Filosofia da entrega
> **Eloscope monta agentes e skills no OpenClaw da Bravo.** Time da Bravo opera essas skills no dia a dia. Quando algum dia a Bravo decidir vender skill pro cliente final dela, o caminho é "exportar" — mas isso **não é deste projeto**.

---

## 3. Tabela de raias resumida

| Etapa do ciclo | Quem inicia | Quem executa | Onde OpenClaw entra |
|----------------|-------------|--------------|----------------------|
| Onboarding | Cliente | Bravo | bônus de processo (Typeform unificado) |
| Captação | Bravo | Bravo (Gustavo + Ravi) | — |
| Planejamento + copy | Bravo | Bravo (Rafa + Content Machine) | — |
| Criativos | Bravo | Bravo (Rafa + Content Machine) | — |
| Edição | Bravo | Bravo (Editor) | — |
| Envio aprovação | Bravo | Bravo (Rafa) | apoio (Skill 1) |
| Follow-up aprovação | Bravo | Bravo (Gustavo) | **substitui (Skill 1)** + lembrete pro cliente |
| Ajustes | Cliente | Bravo (Designer/Editor) | — |
| Agendamento Meta | Bravo | Bravo (Ravi/Rafa) | **substitui (Skill 2)** |
| Análise mensal | Bravo | Bravo (Gustavo) | **substitui (Skill 3)** |

---

## 4. Próximos passos

1. **Apresentar pro time da Bravo** — material está em `[[fluxos-miro]]` pronto pra importar
2. **Validar reframe** das 3 skills com Gustavo
3. **Cronometrar análise mensal** real (input crítico pra Skill 3)

---

*Criado: 24/04/2026 · Reescrito: 27/04/2026 (reframe pós-discovery + ajuste OpenClaw como camada técnica)*
