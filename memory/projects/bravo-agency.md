# Bravo Agency — Sistema Completo

> Status: 🟢 Ativo (discovery feito, reframe pendente de validação Gustavo)

## O que é
Primeiro cliente do modelo Mentoria Agências. Mapeamento de processos + infraestrutura IA + 3 skills + treinamento para a Bravo escalar de R$ 20k → R$ 30k de faturamento sem contratar.

## Responsáveis
- **Lucas:** Delivery lead, mapeamento, setup infra, skills, treinamento
- **Gustavo Bravo:** Sócio/decisor, comercial 100% (atua como bombeiro na operação — pró-labore não divulgado)
- **Rafa (Rafael):** Design, planejamento, Content Machine — presencial no discovery (R$ 2.200/mês)
- **Ravi:** Multifunção, socorre edição — presencial no discovery (R$ 2.000/mês)
- **Rafael Gobi:** Editor de vídeo (gargalo crítico, remoto, ausente do discovery, transcrito como "Gabi") — R$ 1.700/mês

## Dados do Projeto
- **Investimento:** R$ 3.900 (4 × R$ 975)
- **Custos recorrentes (Bravo):** ~R$ 130-280/mês (VPS + API IA)
- **Stack:** OpenClaw + Claude Code + GitHub + n8n (comunicação) + Vercel (LPs)

## Custo Operacional Bravo (levantado 26/04, sem Gustavo)
- **Pessoas (3):** R$ 5.900
- **Ferramentas (16 itens):** R$ 1.265,50
- **Infra (estúdio + utilidades):** R$ 2.200
- **Total:** R$ 9.365,50/mês
- **Custo-hora real:** ~R$ 26/h (~355h produtivas)
- **Custo-hora por pessoa:** Rafa R$ 31 · Ravi R$ 29 · Gobi R$ 21
- **Faturamento:** R$ 20k atual (meta R$ 30k), 99% mensalista, 300 estáticos + 60 vídeos/mês
- **Custo/cliente:** ~R$ 468 · **Margem ~53%** antes pró-labore

## Timeline
| Data | Evento |
|------|--------|
| 20/04/2026 | Reunião exploratória (Google Meet, 73min) |
| 23/04/2026 | Proposta apresentada, Gustavo fechou Opção B |
| 24/04/2026 | Plano de execução + frameworks + ClickUp estruturado |
| 25/04/2026 | Discovery presencial (sábado) |
| 26/04/2026 | Reframe + retrofit nomes + reorganização pasta + custos preenchidos |
| 30/04/2026 | Deck pós-discovery gerado (HTML→PDF, 15 slides) — apresentação pro Gustavo |
| 02/05/2026 | Documento de processo + infra prontos |
| 09/05/2026 | Skills finalizadas + treinamento concluído |
| 08/06/2026 | Fim do suporte pós-entrega |

## Entregas
1. Discovery presencial ✅
2. Documento de processo (módulo a módulo)
3. Infraestrutura (VPS + OpenClaw + GitHub + Claude Code)
4. 3 skills testadas
5. Documentação das skills
6. Treinamento (4 módulos, 5h total)
7. Suporte 30 dias

## Decisões Tomadas
- [23/04] Opção B escolhida (sistema completo, Eloscope monta tudo)
- [23/04] Stack: OpenClaw + Claude Code + GitHub (sem n8n no escopo de entrega)
- [24/04] ClickUp estruturado com 6 listas e 33 tarefas
- [24/04] Framework de discovery: custo-hora real + Automation Score + Ishikawa
- [25/04] **Reframe das 3 skills:** Aprovação SLA / Agendador multi-cliente / Análise mensal (substitui Análise/Planejamento/Copy)
- [26/04] **Retrofit de nomes**: "Javi" → Ravi, "Gabi" → Rafael Gobi (erros de Whisper). Há dois Rafael
- [26/04] **Pasta reorganizada** em fases: 0-pre-discovery / 1-discovery / 2-pos-discovery / 3-contrato + README índice
- [26/04] **Custo operacional levantado** (sem Gustavo): R$ 9.365,50/mês
- [30/04] **Deck pós-discovery em formato HTML→PDF** (não Pandoc/.md) — 15 slides, tom "espelho honesto", inclui o que sai do escopo

## Insight de negócio (descoberto 26/04)
Os 3 processos mais caros (criativo R$ 2.170, edição R$ 1.260, captação R$ 1.040) **não são automatizáveis** ou já estão (Content Machine). Os candidatos a skill (Aprovação R$ 260 + Agendador R$ 270) custam pouco em horas-Bravo, **mas consomem o Gustavo**, que é o único comercial. Liberar ~20h/mês do Gustavo = caminho pra fechar a meta R$ 20k → R$ 30k.

## Pendências
- [ ] Validar reframe das 3 skills com Gustavo
- [ ] Cronometrar análise mensal (não foi cronometrada na sala)
- [ ] Pró-labore Gustavo (não divulgado — tratar como capacidade variável)
- [ ] Redigir aditivo de SLA contratual (48h ou 72h?)
- [ ] Atualizar `framework-processo.md` + `bpmn-basico.md` + `plano-execucao.md` pós-validação
- [ ] Cliente-piloto a escolher

## Arquivos (estrutura nova 26/04)
```
projeto/
├── README.md (índice navegável)
├── 0-pre-discovery/  → plano-execucao, cronograma, discovery-script, framework-processo, analise-custo-processo
├── 1-discovery/      → 00-sequencia, 01-apresentacao, Transcricao, levantamento-discovery
├── 2-pos-discovery/  → causa-efeito, bpmn-basico, proposta-pos-discovery
└── 3-contrato/       → contrato (md/html/pdf)
```

---
*Criado: 24/04/2026 · Atualizado: 26/04/2026*
