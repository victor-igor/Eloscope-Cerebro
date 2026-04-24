# Bravo Agency — Plano de Execução

> **Opção B — Sistema Completo · R$3.900**
> Início: 26/04/2026 (discovery presencial)
> Entrega: até 16/05/2026
> Suporte: até 08/06/2026

---

## Visão Geral do Escopo

### O que estamos entregando

A Bravo quer escalar de 20 para 30-40 clientes sem contratar. O sistema que vamos montar automatiza o ciclo mensal de produção de conteúdo: análise → planejamento → criação → aprovação → postagem.

### Entregáveis

| # | Entregável | Descrição |
|---|-----------|-----------|
| 1 | Discovery presencial | Mapear fluxo real da Bravo (onboarding, planejamento, criação, aprovação, postagem) |
| 2 | Documento de processo | Mapeamento módulo a módulo com pontos de entrada da IA |
| 3 | Infraestrutura | VPS + OpenClaw + GitHub + Claude Code configurados |
| 4 | 3 skills testadas | Skills dos gargalos prioritários, testadas com dados reais |
| 5 | Documentação | Manual de operação de cada skill |
| 6 | Treinamento | 4 módulos (5h total) — Rafael, Javi e Gustavo |
| 7 | Suporte 30 dias | Dúvidas, ajustes, refinamentos |

---

## Cronograma Detalhado

### Semana 1 — Discovery + Setup (26/04 → 02/05)

#### Sábado 26/04 — Discovery Presencial

**Objetivo:** Mapear o processo real e definir as 3 skills prioritárias.

**Participantes:** Lucas (Eloscope) + Gustavo + Rafael + Javi

**Roteiro da sessão (~2h):**

1. **Entender o fluxo atual (30min)**
   - Como chega um cliente novo? (onboarding)
   - O que acontece no dia 1 do mês? Quem faz o quê?
   - Onde o time perde mais tempo?
   - Quais clientes dão mais trabalho e por quê?

2. **Mapear cada módulo (30min)**
   - Módulo 1: Análise do cliente (dados do mês anterior)
   - Módulo 2: Planejamento de conteúdo mensal
   - Módulo 3: Geração de copy
   - Módulo 4: Geração de criativos (design)
   - Módulo 5: Aprovação do cliente
   - Módulo 6: Postagem/agendamento

3. **Identificar gargalos reais (15min)**
   - Onde o time gasta mais horas?
   - O que mais atrasa? (ex: cliente não aprova, briefing vago)
   - Quais tarefas são repetitivas e poderiam ser automatizadas?

4. **Definir as 3 skills prioritárias (15min)**
   - Qual módulo automatizar primeiro?
   - Critério: maior ganho de tempo × menor complexidade
   - Candidatas prováveis (validar no discovery):
     - **Skill 1:** Análise de cliente (site + Instagram + dados do mês anterior)
     - **Skill 2:** Geração de planejamento de conteúdo mensal
     - **Skill 3:** Geração de copy para posts/carrosséis

5. **Infra e acessos (15min)**
   - Coletar acessos: Instagram dos clientes, Google Analytics, site
   - Definir 1 cliente-piloto para testar as skills
   - Verificar o que Rafael/Javi já têm configurado (Claude Code, IOX/squads)

6. **Alinhamento de expectativas (15min)**
   - Reforçar: modular, não tudo de uma vez
   - Cada skill testada antes de avançar para a próxima
   - Comunicação com cliente final = n8n (não OpenClaw direto)

**Entregável:** Ata com decisões + 3 skills definidas + cliente-piloto escolhido

---

#### 28/04 → 02/05 — Setup de Infra (em paralelo)

| Tarefa | Responsável | Prazo | Status |
|--------|-------------|-------|--------|
| Provisionar VPS (~R$80/mês) | Lucas | 28/04 | [ ] |
| Instalar OpenClaw no VPS | Lucas | 29/04 | [ ] |
| Criar repo GitHub da Bravo | Lucas | 28/04 | [ ] |
| Configurar Claude Code no ambiente | Lucas | 29/04 | [ ] |
| Estrutura de pastas por cliente | Lucas | 30/04 | [ ] |
| Documentar credenciais e acessos | Lucas | 02/05 | [ ] |
| Testar acesso remoto do time | Lucas + Rafael | 02/05 | [ ] |

**Stack final:**
- **OpenClaw** — automação interna (análise, criação, skills)
- **Claude Code** — construção e execução das skills
- **GitHub** — versionamento + análise de processos
- **n8n** — comunicação com cliente final (WhatsApp, email)
- **Vercel** — landing pages (geradas por IA)

---

### Semana 2 — Documento de Processo + Skills v1 (28/04 → 02/05)

#### Documento de Processo

| Tarefa | Prazo | Status |
|--------|-------|--------|
| Transcrever discovery em fluxograma visual | 29/04 | [ ] |
| Documentar cada módulo: entrada → processo → saída | 30/04 | [ ] |
| Marcar onde a IA entra em cada etapa | 30/04 | [ ] |
| Definir handoff files (JSON entre agentes) | 01/05 | [ ] |
| Enviar para Gustavo validar (WhatsApp) | 01/05 | [ ] |
| Versão final aprovada | 02/05 | [ ] |

**Estrutura do documento:**

```
Para cada módulo:
├── Nome do módulo
├── Input (o que entra)
├── Processo atual (como o time faz hoje)
├── Processo com IA (como vai funcionar)
├── Output (o que sai)
├── Quem valida (humano ou automático)
└── Handoff file (JSON para o próximo módulo)
```

#### Skills v1 — Primeiros Testes

| Tarefa | Prazo | Status |
|--------|-------|--------|
| Skill 1: [definir no discovery] — estrutura inicial | 30/04 | [ ] |
| Skill 1: testar com dados do cliente-piloto | 01/05 | [ ] |
| Skill 2: [definir no discovery] — estrutura inicial | 01/05 | [ ] |
| Skill 2: testar com dados do cliente-piloto | 02/05 | [ ] |
| Feedback do Rafael/Javi sobre outputs | 02/05 | [ ] |

---

### Semana 3 — Skills Finais + Treinamento (05/05 → 09/05)

#### Skills — Versão Final

| Tarefa | Prazo | Status |
|--------|-------|--------|
| Skill 1: ajustes pós-feedback + documentação | 05/05 | [ ] |
| Skill 2: ajustes pós-feedback + documentação | 06/05 | [ ] |
| Skill 3: [definir no discovery] — build + teste | 06-07/05 | [ ] |
| Teste integrado: rodar as 3 skills em sequência com 1 cliente real | 08/05 | [ ] |
| Documentação final de todas as skills | 09/05 | [ ] |

**Documentação por skill:**
```
├── Nome da skill
├── O que faz (1 parágrafo)
├── Como chamar (comando exato)
├── Input necessário
├── Output esperado
├── Exemplos de uso
├── Erros comuns e como resolver
└── Quando NÃO usar
```

#### Treinamento — 4 Módulos

| Módulo | Duração | Conteúdo | Data sugerida | Status |
|--------|---------|----------|---------------|--------|
| 01 — Fundamentos | 1h | Visão end-to-end, quando IA atua vs. time decide, conceito de memória curto/longo prazo | 05/05 (seg) | [ ] |
| 02 — Operando skills | 2h | Cada skill ao vivo: chamar, input, validar output, corrigir erros | 06/05 (ter) | [ ] |
| 03 — Uso no dia a dia | 1h | Fluxo real com cliente, handoff files, ClickUp integração | 07/05 (qua) | [ ] |
| 04 — Quando algo muda | 1h | Ajustar skill, documentar novo processo, suporte vs. resolver interno | 08/05 (qui) | [ ] |

**Formato:** calls ao vivo (gravadas) + material escrito de referência

**Participantes:** Rafael + Javi (+ Gustavo quando disponível)

**Critério de sucesso:** ao final do módulo 04, o time opera sem ajuda.

---

### Semana 4-7 — Suporte Pós-Entrega (10/05 → 08/06)

| Item | Detalhes |
|------|---------|
| Canal | WhatsApp (Lucas) |
| SLA | Resposta em até 24h úteis |
| Incluso | Dúvidas operacionais, pequenos ajustes nas skills |
| Não incluso | Novas skills, mudanças de escopo, desenvolvimento |
| Encerramento | 08/06 — oferecer plano de acompanhamento contínuo |

---

## Módulos do Processo (a detalhar no discovery)

### Módulo 1 — Análise do Cliente
> Todo dia 1-5 do mês

- IA analisa dados do mês anterior (métricas Instagram, Google Analytics)
- IA analisa ativos do cliente (site, branding, paleta, estilo)
- Output: dossiê resumido do cliente + relatório de performance
- Handoff: JSON com dados para o planejamento

### Módulo 2 — Planejamento de Conteúdo
> Dia 5-8 do mês

- IA gera plano de conteúdo baseado no dossiê
- Humano revisa e ajusta
- Plano enviado ao cliente para aprovação (via n8n → WhatsApp)
- Lembretes automáticos a cada 6-12h se não responder
- Handoff: JSON com plano aprovado

### Módulo 3 — Geração de Copy
> Após aprovação do plano

- IA gera copy para cada peça do planejamento
- Formatos: post, carrossel, reels (roteiro)
- Humano revisa tom, ajustes finos
- Handoff: arquivo com copies aprovadas

### Módulo 4 — Geração de Criativos
> Após copy aprovada

- IA sugere imagens/referências visuais
- Rafael ajusta no template, paleta do cliente
- Ferramentas: Nano Banana / ChatGPT / Gemini para geração de imagem
- Humano faz ajuste fino de layout

### Módulo 5 — Aprovação Final
> Antes da postagem

- Criativos enviados ao cliente (via n8n → WhatsApp)
- Cliente aprova ou pede ajustes
- Lembretes automáticos
- Handoff: JSON com status de aprovação por peça

### Módulo 6 — Postagem
> Após aprovação

- Agendamento nas plataformas
- (Futuro: automação de postagem direta)

---

## Arquitetura Técnica

```
┌─────────────────────────────────────────────────┐
│                  BRAVO AGENCY                    │
├─────────────────────────────────────────────────┤
│                                                  │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│   │ Skill 1  │───▶│ Skill 2  │───▶│ Skill 3  │  │
│   │ Análise  │    │ Planeja- │    │  Copy    │  │
│   │          │    │  mento   │    │          │  │
│   └──────────┘    └──────────┘    └──────────┘  │
│        │               │               │        │
│        ▼               ▼               ▼        │
│   ┌──────────────────────────────────────────┐  │
│   │         Handoff Files (JSON)              │  │
│   │   cliente_status.json                     │  │
│   │   plano_aprovado.json                     │  │
│   │   copies_finais.json                      │  │
│   └──────────────────────────────────────────┘  │
│                      │                           │
│                      ▼                           │
│   ┌──────────────────────────────────────────┐  │
│   │              OpenClaw (VPS)               │  │
│   │   Orquestra skills + memória persistente  │  │
│   └──────────────────────────────────────────┘  │
│                      │                           │
│                      ▼                           │
│   ┌──────────────────────────────────────────┐  │
│   │           n8n (comunicação)               │  │
│   │   WhatsApp ◄──► Cliente final             │  │
│   │   Email, lembretes, aprovações            │  │
│   └──────────────────────────────────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Estrutura de memória

```
bravo-system/
├── clientes/
│   ├── {nome-cliente}/
│   │   ├── perfil.md          ← memória longo prazo (paleta, estilo, nicho)
│   │   ├── historico/         ← dossiês mensais
│   │   │   └── 2026-05.json
│   │   ├── planos/            ← planejamentos aprovados
│   │   │   └── 2026-05.md
│   │   └── handoff.json       ← estado atual (curto prazo)
│   └── ...
├── skills/
│   ├── analise-cliente/
│   ├── planejamento-conteudo/
│   └── geracao-copy/
├── templates/
│   ├── copy-post.md
│   ├── copy-carrossel.md
│   └── copy-reels.md
└── config/
    ├── .env
    └── cron-schedule.md
```

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Cliente-piloto não fornece acessos a tempo | Média | Alto | Pedir acessos no discovery, ter backup de 2º cliente |
| Skills não encaixam no processo real | Média | Alto | Testar com dados reais desde a v1, feedback rápido |
| Rafael/Javi não conseguem operar | Baixa | Médio | Treinamento hands-on, documentação clara, suporte 30d |
| Alto consumo de tokens | Alta | Médio | Estrutura memória curto/longo prazo, handoff files enxutos |
| OpenClaw instável | Baixa | Alto | Backup plan: rodar via Claude Code direto |

---

## Checklist Pré-Discovery (antes de sábado)

- [ ] Confirmar horário e local com Gustavo
- [ ] Preparar roteiro impresso para a sessão
- [ ] Levar notebook com Claude Code + OpenClaw rodando (demo)
- [ ] Ter exemplo de skill funcionando para mostrar ao vivo
- [ ] Preparar perguntas por módulo (análise, planejamento, copy, design, aprovação, postagem)
- [ ] Contrato pronto para assinatura (dados do Gustavo: CNPJ, endereço, email)
- [ ] Cobrar 1ª parcela (R$975) — Pix na assinatura

---

## Próximos Passos Imediatos

1. **Confirmar sábado** — horário e local com Gustavo
2. **Contrato** — preencher dados da Bravo e assinar
3. **1ª parcela** — R$975 via Pix
4. **Discovery** — seguir o roteiro acima
5. **Pós-discovery** — começar documento de processo + setup infra na segunda

---

*Criado: 24/04/2026*
*Referência: Proposta Opção B + Contrato + Discovery 20/04*
