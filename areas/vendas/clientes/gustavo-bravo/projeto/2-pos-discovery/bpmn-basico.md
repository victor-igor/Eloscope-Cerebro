# BPMN Básico — Bravo Agency

> **Projeto:** Bravo Agency — Sistema Completo
> **Objetivo:** Mapear o ciclo mensal por cliente com notação BPMN simplificada
> **Baseado em:** framework-processo.md (15 processos mapeados)
> **Uso:** Apresentar no discovery 26/04 para validar fluxo com Gustavo

---

## 1. Ciclo Mensal por Cliente (BPMN)

```mermaid
graph TD
    subgraph CAPTAÇÃO ["1. CAPTAÇÃO (evento único)"]
        START((Início)) --> A1[Prospecção e<br>Fechamento]
        A1 --> A2[Onboarding +<br>Briefing Inicial]
        A2 --> A3[Setup IA do<br>Cliente]
    end

    subgraph CICLO_MENSAL ["2. CICLO MENSAL (repete todo mês)"]
        A3 --> B1

        B1[Análise do Mês<br>Anterior] --> B2[Planejamento<br>Mensal]
        B2 --> B3[Geração de<br>Copy]
        B2 --> B4[Geração de<br>Design/Criativos]
        B3 --> B5[Montagem do<br>Criativo Final]
        B4 --> B5
        B5 --> B6{Envio para<br>Aprovação}
        B6 -->|Aprovado| B8[Postagem /<br>Agendamento]
        B6 -->|Ajustes| B7[Ajustes pós<br>Feedback]
        B7 --> B5
        B6 -->|Sem resposta<br>12h| B6F[Follow-up<br>Automático]
        B6F --> B6
        B8 --> B9[Relatório<br>Mensal]
        B9 -->|Próximo mês| B1
    end

    subgraph SUPORTE ["3. ATIVIDADES CONTÍNUAS"]
        S1[Comunicação<br>WhatsApp/Email]
        S2[Reuniões<br>Internas]
        S3[Gestão de<br>Tráfego]
        S4[Edição de<br>Vídeo]
        S5[Landing<br>Pages]
    end

    style B1 fill:#22c55e,color:#fff,stroke:#16a34a
    style B2 fill:#22c55e,color:#fff,stroke:#16a34a
    style B3 fill:#22c55e,color:#fff,stroke:#16a34a
    style B6F fill:#22c55e,color:#fff,stroke:#16a34a
    style A1 fill:#ef4444,color:#fff,stroke:#dc2626
    style A2 fill:#eab308,color:#000,stroke:#ca8a04
    style A3 fill:#eab308,color:#000,stroke:#ca8a04
    style B4 fill:#eab308,color:#000,stroke:#ca8a04
    style B8 fill:#eab308,color:#000,stroke:#ca8a04
    style B9 fill:#eab308,color:#000,stroke:#ca8a04
```

### Legenda

| Cor | Significado | Ação no projeto |
|-----|-------------|-----------------|
| **Verde** | Automatizar neste projeto (Skills 1-3) | Semanas 2-3 |
| **Amarelo** | Assistido com IA — fase 2 | Proposta futura |
| **Vermelho** | Manual (requer Gustavo) | Fora do escopo |
| **Branco** | Atividades de suporte contínuas | Paralelas ao ciclo |

---

## 2. Raias por Responsável (Swimlane)

```mermaid
graph LR
    subgraph GUSTAVO ["GUSTAVO (Sócio)"]
        G1[Prospecção] --> G2[Briefing]
        G3[Análise Mês] --> G4[Planejamento]
        G5[Aprovação + Follow-up]
        G6[Tráfego Meta/Google]
    end

    subgraph JAVI ["JAVI (Multifunção)"]
        J1[Setup IA Cliente]
        J2[Geração de Copy]
        J3[Postagem/Agendamento]
        J4[Comunicação Cliente]
    end

    subgraph RAFAEL_D ["RAFAEL (Design)"]
        R1[Criativos/Design]
        R2[Ajustes pós-feedback]
    end

    subgraph RAFAEL_E ["RAFAEL (Editor)"]
        RE1[Edição de Vídeo]
    end

    subgraph IA ["IA (Pós-Projeto)"]
        IA1[Skill 1: Análise]
        IA2[Skill 2: Planejamento]
        IA3[Skill 3: Copy]
        IA4[n8n: Follow-up Auto]
    end

    G3 -.->|substituído por| IA1
    G4 -.->|substituído por| IA2
    J2 -.->|substituído por| IA3
    G5 -.->|assistido por| IA4

    style IA1 fill:#22c55e,color:#fff
    style IA2 fill:#22c55e,color:#fff
    style IA3 fill:#22c55e,color:#fff
    style IA4 fill:#22c55e,color:#fff
```

---

## 3. Sequência Detalhada com Tempos (preencher no discovery)

| Passo | Atividade | Responsável | Tempo/cliente | Automação |
|-------|-----------|-------------|---------------|-----------|
| 1 | Análise métricas mês anterior | Gustavo | ~45min | **SKILL 1** |
| 2 | Planejamento calendário posts | Gustavo + IA | ~30min | **SKILL 2** |
| 3 | Geração de copy (8 posts) | Javi + IA | ~20min × 8 | **SKILL 3** |
| 4 | Geração de design/criativos | Rafael | ~30min × 8 | Fase 2 |
| 5 | Montagem criativo final | Rafael + Javi | ~10min × 8 | Fase 2 |
| 6 | Envio para aprovação cliente | Gustavo/Javi | ~10min | **n8n** |
| 7 | Follow-up (cobrar resposta) | Gustavo | ~5min × N | **n8n** |
| 8 | Ajustes pós-feedback | Rafael/Javi | variável | Manual |
| 9 | Postagem/agendamento | Javi | ~10min × 8 | Fase 2 |
| 10 | Relatório mensal | Gustavo | ~30min | Fase 2 |

**Tempo total estimado por cliente/mês:** ~8-10h (validar no discovery)
**Tempo com automação (Skills 1-3):** ~4-6h (-40 a -50%)

---

## 4. Gargalos Visuais

```
FLUXO ATUAL (sem automação):
══════════════════════════════════════════════════════════

Análise ──────── Planejamento ──────── Copy ────────────
 45min/cliente    30min/cliente    20min × 8 = 160min
 GUSTAVO          GUSTAVO           JAVI
 ████████████     ██████████        ████████████████████

                                    Design ─────────────
                                    30min × 8 = 240min
                                    RAFAEL
                                    ██████████████████████████████

Aprovação ──── Follow-up ──── Ajustes ──── Postagem ────
 10min + ESPERA   5min × N      variável    10min × 8
 GUSTAVO/JAVI    GUSTAVO        RAFAEL      JAVI
 ██░░░░░░░░░░    ██░░░██░░░██   ████        ████████████

══════════════════════════════════════════════════════════

GARGALOS:
  1. Gustavo concentra Análise + Planejamento + Aprovação
     → ~75min/cliente + follow-ups = ~25-35h/mês nos 20
  2. Espera do cliente na aprovação (6-12h média)
     → Bloqueia postagem, gera retrabalho
  3. Copy e Design são paralelos mas sem coordenação
     → Copy pronto mas design atrasa (ou vice-versa)
```

---

## 5. Fluxo Pós-Automação (visão futura)

```
FLUXO COM SKILLS (pós-projeto):
══════════════════════════════════════════════════════════

  IA Skill 1        IA Skill 2        IA Skill 3
  ┌─────────┐      ┌───────────┐      ┌──────────┐
  │ Análise │ ───→ │Planejam.  │ ───→ │  Copy    │
  │ ~5min   │      │ ~5min     │      │ ~2min×8  │
  │ Validar │      │ Validar   │      │ Validar  │
  └─────────┘      └───────────┘      └──────────┘
   Gustavo OK       Gustavo OK         Javi OK
   (5min)            (5min)             (16min)

                    ┌──────────────────┐
                    │Design (Rafael)   │  ← Paralelo
                    │~30min × 8 = 240m │
                    └──────────────────┘

  n8n Auto          n8n Auto
  ┌─────────┐      ┌───────────┐
  │ Envio   │ ───→ │Follow-up  │ ───→ Postagem
  │ Aprovação│      │Automático │      (Javi)
  │ WhatsApp│      │ 12h/24h   │
  └─────────┘      └───────────┘

══════════════════════════════════════════════════════════

RESULTADO:
  Gustavo: 75min → 10min por cliente (validar outputs)
  Javi: Copy manual → Revisão de copy gerado
  Aprovação: Manual → Automática com lembretes
  
  Capacidade: 20 → 30+ clientes sem contratar
```

---

*Criado: 24/04/2026*
*Baseado em: framework-processo.md + dados reunião 20/04/2026*
*Notação: BPMN simplificado com Mermaid (renderizável em qualquer viewer markdown)*
