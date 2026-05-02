---
tipo: empresa
status: ativo
cliente: daniel-queiroz
tags: [cliente/daniel-queiroz, empresa/fac-maestria, vendas, projeto-ativo]
data: 2026-04-29
---

# FAC + Maestria (com Deolane Bezerra)

> [!info] Operação principal do Daniel. Sociedade com **Deolane Bezerra** (não a "Deolane Bezerra advogada/Lavanda Mídia" — é a Deolane do método HMI, comportamental). Daniel toca operação, Deolane é a face.

## Modelo de negócio

```
TRÁFEGO → AULÃO GRATUITO (FAC.X) → FAC ESSENCIAL (paga) → FAC VIP (upgrade) → MAESTRIA (R$ 4.990 / 12 meses)
```

- **FAC** = formação introdutória, com versão gratuita (aulão), Essencial e VIP. Roda em lançamentos (FAC.7, FAC.8, FAC.9 — número da turma).
- **Maestria** = produto principal. R$ 4.990 por 12 meses. Base atual ~300 alunos.
- **Método HMI** = framework comportamental proprietário (130 páginas, "ponta do iceberg"). Há landing page específica vendendo o mapeamento HMI por créditos.
- **Lançamentos** acontecem em janelas (ex.: FAC.9 em novembro/25) com aulão ao vivo + janela de venda + closers fazendo sessão estratégica. Estão migrando parte pra **evergreen gravado**.

## Stack atual (Eloscope construiu/mantém)

| Camada | Tool | Status |
|---|---|---|
| CRM | GoHighLevel (via Fullfunnel whitelabel do Daniel) | Em produção |
| Automação fluxos | GHL Workflows + n8n | Em produção (23 workflows ativos só na FAC.9) |
| Banco | Supabase | Em produção (Fase 4 do projeto IA Maestria, jun/25) |
| Hospedagem | Hostinger (VPS); avaliando Hetzner/Contabo | Em produção |
| Mensageria | API WhatsApp + WhatsApp Cloud Oficial (Meta) | Em produção (multi-chip — 1, 3, oficial) |
| LLM | OpenAI GPT-4.1 mini (assistente Iara) | Em produção |
| Pagamento | Eduzz (checkout) + Asaas (cobrança) | Integrado via webhook |
| Plataforma curso | Cademi | API mapeada, integração pendente |

## Equipe operacional

- **Daniel** — operação geral
- **Deolane** — face / método HMI / mentoria
- **Ana Alice** — apoio operacional histórico
- **Samira (Samiramis)** — operação atual de campanhas (substituiu Ana em out/25)
- **Closers:** Poliana (P1) e Fernanda (F2)
- **João** — gestor de tráfego
- **Hatch** — parceiro estratégico (mencionado em out/25)
- **Bianca** — vai estruturar funil de social selling (mencionada out/25)

## Dores levantadas (resumo executivo)

### 1. Topo do funil — qualificação
- Volume alto de leads chegando no WhatsApp; humano não dá vazão.
- Time de closer com habilidade variável (uma closer convertia muito por mensagem; quando virou call, desandou).
- Desejo: SDR IA 24/7 que qualifica e já agenda call com closer.

### 2. Meio do funil — super interessados parados
- Lista de 120+ "super interessados" pós-aulão sem follow-up — "pecado, gente que disse que tinha interesse e a gente deixou esfriar" (17/06).
- Daniel quer agente que ler check-in HMI + reativa por WhatsApp + propõe agendamento.

### 3. Pós-venda — retenção / renovação
- Maestria custa R$ 4.990 e renova anual. Não há sistema de monitoramento de aplicação, alerta de inativo, ou intervenção proativa.
- API Cademi tem dados de progresso, mas não está integrada.
- Discovery de ago/25 desenhou plano em 3 fases (30/60/90 dias) com modelo de **sucesso compartilhado** (% sobre aumento de renovação) e garantia de ROI 5x.

### 4. Operacional — disparo em janela de lançamento
- Processo manual sob estresse (ver transcript 17/11/25 — 1h50min de troubleshooting de webhook + janela 24h Meta + queima de número).
- Erro de template (Essencial recebendo email VIP, 05/11/25) gerou retrabalho e risco reputacional.

### 5. Closer / agenda
- Pol e Fer travam agenda manualmente; closer não tem CRM, só Google Calendar; configuração delicada da rotina (problema mãe/horário em 03/07/25).

> Detalhes completos em [[../historico/dores-mapeadas]].

## Entregas Eloscope (resumo)

- **2025-06 → 2025-07:** Setup inicial do agente IA (FAC.7→FAC.8 clonagem, Supabase, n8n, GHL whitelabel). Fluxos closer.
- **2025-08:** Discovery estratégico pós-venda (proposta retenção Maestria 300 alunos).
- **2025-09:** Master Agenda do Daniel (mentoria empresários, sessões 2h).
- **2025-10:** Reativação de turma Maestria (~97 alunos vencendo) + estrutura social selling.
- **2025-11:** Operação completa do **lançamento FAC.9** — 23 workflows + 6 pipelines + 15 emails + 18 reuniões em ~22h. Aulão 17/11. Disparo segmentado FAC/VIP/aulão antigo. Assistente Iara em produção.
- **2026-01 → 2026-04:** (nenhuma reunião registrada no Drive nem Fathom — ver pendência abaixo).

> Lista detalhada em [[../historico/entregas-realizadas]].

## Modelo comercial

| Tipo | Valor |
|---|---|
| Bot Agendamento/Qualificação (closers) | R$ 1.400 (pontual) |
| Bot Suporte/Atendimento FAC | R$ 1.400 (pontual) |
| Disparo grupo + preenchimento form | R$ 500 cada |
| **Mensalidade corrente** | **R$ 497–997** (atualização servidor + integrações + ajustes prompt 10h + suporte/automações GHL 10h) |

## Pendência de info

- Nenhuma reunião FAC/Maestria registrada em jan-abr/2026. Confirmar com Lucas se a operação ainda roda OU se houve esfriamento depois do FAC.9 (provável: lançamento intenso em nov/25 → pausa estratégica).
