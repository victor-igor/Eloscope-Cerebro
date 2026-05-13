---
tipo: mapa-funil
area: vendas
produto: Elo Sales OS
status: draft-v0.1
data: 2026-05-12
autor: Lucas + Claude
versao: 0.1
tags:
  - vendas
  - funil
  - elo-sales-os
  - q2
  - playbook
fonte-canonica:
  - "[[../../empresa/projetos/sales-os/02-comercial/funil-vendas|funil-vendas.md]]"
  - "[[../../empresa/projetos/sales-os/02-comercial/playbook|playbook.md]]"
  - "[[../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao.md]]"
  - "[[../metodologia/spin-playbook-v0.2|spin-playbook]]"
  - "[[../contexto/personas|personas]]"
relacionados:
  - "[[../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline (46 leads)]]"
  - "[[../oportunidades]]"
clickup-tasks:
  - id: 86e13atpj
    nome: Estruturar Funil de Vendas
  - id: 86e13dfzx
    nome: Mapear da entrada de lead até a entrega
  - id: 86e1b9cuv
    nome: Organizar Pasta comercial e playbook
---

# Mapa do Funil — Elo Sales OS

> **Para quem é isto:** Lucas (hoje único no comercial). Material vivo, atualizar sempre que algo mudar no processo.
> **O que é:** o cockpit visual do funil — quem atacamos, por onde lead anda, o que fazer em cada etapa, métricas pra olhar.
> **O que NÃO é:** scripts detalhados (estão em [[../../empresa/projetos/sales-os/02-comercial/playbook|playbook.md]]), dossiês de leads (em [[../oportunidades]]), templates de proposta (em `templates/comercial/`).

> [!info] Produto = Elo Sales OS
> Apelido interno: **6OS** (Sales Operating System). Em docs antigos pode aparecer como "6OS" — é a mesma coisa.

> [!note] Lápis, não caneta
> Tudo aqui é **direcionamento inicial**, não regra fixa. Toda call/proposta/fechamento ensina algo novo — anota, ajusta, evolui. Documento vivo, versionado a cada aprendizado. Mudou algo? Atualiza o arquivo + adiciona linha no changelog.

> [!warning] Status atual
> Oferta documentada mas ainda **sem venda real** do Elo Sales OS fechada. Pilotos candidatos: **Fran (ReabilitaCão)**, **Morgana**, **Jean Imobiliária** — já como `ativo-upsell` no [[../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline]].

> [!note] Como navegar este mapa
> Este arquivo é o **cockpit** (visão de cima). Para detalhe de **cada etapa** (o que fazer, sinais de sucesso/risco, scripts), abra a pasta [[etapas/|etapas/]]. Cada etapa tem seu próprio arquivo com indicadores de conversão e perda.

### Arquivos por etapa (pasta `etapas/`)

| # | Etapa | Status |
|---|-------|--------|
| 01 | [[etapas/01-prospect-recebimento|Prospect / Recebimento]] | _pendente_ |
| 02 | [[etapas/02-contato-inicial|Contato inicial]] | _pendente_ |
| 03 | [[etapas/03-qualificacao|Qualificação]] | _pendente_ |
| 04 | [[etapas/04-reuniao|Reunião de diagnóstico]] | ✅ pronto |
| 05 | [[etapas/05-proposta|Proposta]] | _pendente_ |
| 06 | [[etapas/06-follow-up-negociacao|Follow-up / Negociação]] | _pendente_ |
| 07 | [[etapas/07-fechamento-handover|Fechamento + Handover]] | _pendente_ |

---

## 1. Quem atacamos — ICP Q2

> Empresa de **serviço** que **já tem vendedor/dedicado** OU **precisa colocar alguém** (tem intenção + capacidade).

**Verticais Q2 confirmados:** Imobiliária · Energia solar · Clínica multi (estética/vet/médica/fisio) · Consultoria/Educação · Agência marketing

**Mínimos para qualificar:**
- Faturamento ≥ R$ 80k/mês
- 1+ vendedor dedicado a conversar com lead
- Abertura a IA como copiloto (não substituto)

**Descarte imediato:**
- Q1 (serviço sem time comercial) → produto diferente
- Q3/Q4 (produto físico/digital) → fora de escopo
- Quer "só chatbot" → produto diferente
- Pede algo "sob medida fora do padrão" → anti-software-house

**Personas detalhadas:** → [[../contexto/personas|Rafael (dono PME) · Camila (gestora) · Bruno (empreendedor digital)]]

---

## 2. Mapa visual — fluxograma do funil

> _Preenchido na T4. Mermaid renderiza nativo no Obsidian (precisa ativar em Settings → Core Plugins → Mermaid)._

`[PLACEHOLDER T4 — flowchart Mermaid com 3 raias Outbound/Indicação/Inbound → ponto comum REUNIÃO → PROPOSTA → FOLLOW-UP → FECHADO → handover Victor]`

---

## 3. Em cada etapa, fazer isto

> _Preenchido na T5. Uma linha por etapa: critério entrada/saída, SLA, script (wikilink), dica SPIN aplicável._

`[PLACEHOLDER T5 — tabela operacional]`

---

## 4. Régua de follow-up

> _Preenchido na T6. Cadência D+1 / D+3 / D+7 / D+14 / D+30 com microcopy reutilizável._

`[PLACEHOLDER T6 — régua visual + mensagens prontas]`

---

## 5. Painel "Onde estou agora"

> _Preenchido na T7. 4 métricas-chave + link pro pipeline real._

`[PLACEHOLDER T7 — métricas-cockpit + tabela pipeline embedada]`

---

## 6. Pós-venda — handover Lucas → Victor

> _Preenchido na T8. Checklist de handover + ciclo do cliente em alto nível (Onboarding → Aha → Adoção → Expansão), Victor como dono._

`[PLACEHOLDER T8 — handover + ciclo cliente]`

---

## 7. Referências rápidas

| Preciso de... | Vou em... |
|---------------|-----------|
| Scripts por canal (inbound/outbound/indicação) | [[../../empresa/projetos/sales-os/02-comercial/playbook|playbook.md]] §3 |
| Tabela BANT de qualificação | [[../../empresa/projetos/sales-os/02-comercial/playbook|playbook.md]] §1 |
| Metodologia SPIN aplicada | [[../metodologia/spin-playbook-v0.2|spin-playbook]] |
| Personas detalhadas | [[../contexto/personas|personas]] |
| Brandscript / posicionamento | [[../contexto/brandscript|brandscript]] |
| Oferta + preços + caminhos comerciais | [[../../empresa/projetos/sales-os/02-comercial/oferta-padrao|oferta-padrao.md]] |
| Pacote consolidado (público + interno) | [[../../empresa/projetos/sales-os/02-comercial/pacote-6os-q2|pacote-6os-q2.md]] |
| Pipeline atual (46 leads) | [[../../empresa/projetos/sales-os/02-comercial/pipeline|pipeline.md]] |
| Template de proposta | `empresa/projetos/sales-os/templates/comercial/Proposta_Lead_Template.md` |
| Matriz de objeções | `empresa/projetos/sales-os/templates/comercial/Objecoes_Matriz_Template.md` |
| Dossiê de lead específico | [[../oportunidades]] |

---

## Changelog

- **2026-05-12 (v0.1):** skeleton criado (T3). Estrutura de 7 seções, frontmatter Obsidian, wikilinks pras fontes canônicas. Conteúdo das §2 a §6 ainda como placeholders — preenchimento nas tasks T4–T8.

---

*Eloscope · Elo Sales OS · Mapa do Funil v0.1*
