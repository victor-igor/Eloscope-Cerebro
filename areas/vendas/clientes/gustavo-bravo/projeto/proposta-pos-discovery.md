---
tipo: proposta
status: rascunho
cliente: bravo
data: 2026-04-25
tags: [cliente/bravo, proposta, pos-discovery, mentoria-agencias]
relacionados: [[levantamento-discovery]], [[causa-efeito]], [[plano-execucao]], [[framework-processo]]
---

# Bravo Agency — Proposta Pós-Discovery (Análise de Processo)

> **Síntese:** o que sai da fase de análise de processo como entregável formal, após o discovery presencial de 25/04.
> **Status:** rascunho — depende de validação com Gustavo antes de virar adendo do contrato.
> **Pricing mantido:** Opção B — R$3.900 (4 semanas, suporte 30 dias).

---

## 1. Reframe do escopo — o que mudou após o discovery

### Tese pré-discovery (proposta original)
3 skills: **Análise de cliente · Planejamento de conteúdo · Geração de copy**.
Premissa: copy/criativo eram gargalos.

### Realidade observada no discovery
- **Copy/criativo já está automatizado** via Content Machine (Figma + Bridge Codec) — alimentado por Docs estruturado no padrão ChatGPT. Cliente "chato" (Diego) aprovou no primeiro envio.
- **Planejamento mensal** consome 3-4h por cliente, mas é tarefa de pensamento estratégico — não é o gargalo crítico.
- **Os gargalos reais são outros**:
  1. **Aprovação do cliente** — 2-3 dias de espera, sem SLA, sem lembrete automatizado. Trava todo o ciclo.
  2. **Agendamento manual** — Meta Business 20-30min × 20 clientes = ~10h/mês manuais que ninguém quer fazer.
  3. **Edição de vídeo** — Gabi entrega 1-2 vídeos/dia quando o ideal são 3+. Backlog crônico. (Problema humano + ferramenta — endereçar como POC, não como skill core.)
  4. **Análise mensal** — sem ritual estruturado, decisões de planejamento partem de "achismo".

### Tese pós-discovery (proposta revisada)
**3 skills core:** Aprovação · Agendamento · Análise mensal.
**3 bônus de processo:** SLA contratual · Briefing onboarding · POC Premiere+Claude Code.

---

## 2. Entregáveis revisados

### Skill 1 — Aprovação automatizada com SLA
**Substitui:** "Skill 3 — Geração de copy" da proposta original.

| Item | Detalhe |
|------|---------|
| O que faz | Envia pacote de planejamento/criativos ao cliente via WhatsApp (n8n), monitora resposta, dispara lembretes em 24h e 48h, escala para Gustavo se passar de 72h. |
| Stack | n8n + WhatsApp Business API + handoff JSON do Content Machine |
| Entrada | Link/pacote aprovado internamente + telefone do cliente |
| Saída | Status de aprovação por peça (aprovado / ajuste / rejeitado) registrado em log |
| **Cláusula contratual nova** | Aditivo de SLA — cliente tem X dias para aprovar; após o prazo, considera-se aprovado por decurso. Lucas redige modelo, Gustavo valida com advogado. |
| Ganho estimado | Redução de 2-3 dias para 24h no ciclo de aprovação |

### Skill 2 — Agendador multi-cliente
**Nova — não estava na proposta original.**

| Item | Detalhe |
|------|---------|
| O que faz | Recebe pacote aprovado + cronograma do mês, agenda automaticamente nas plataformas (Meta, Instagram, futuro: TikTok/LinkedIn) |
| Stack | Meta Graph API + n8n + fila de jobs por cliente |
| Entrada | JSON com peças aprovadas + datas/horários/legendas finais |
| Saída | Confirmação de agendamento + link da publicação |
| Substitui | M-Labs / Reportei / Canva agendador (descartados no discovery) |
| Ganho estimado | ~10h/mês de operação manual eliminada (20-30min × 20 clientes) |

### Skill 3 — Análise mensal estruturada
**Substitui:** "Skill 1 — Análise de cliente" da proposta original (mais focada e ritualizada).

| Item | Detalhe |
|------|---------|
| O que faz | Todo dia 1-3 do mês roda análise comparativa: métricas Instagram + Google Analytics + benchmarks anteriores. Gera dossiê executivo + recomendações para o planejamento. |
| Stack | Claude Code skill + handoff JSON para Content Machine |
| Entrada | Acessos do cliente (já mapeados no onboarding) |
| Saída | Relatório markdown + JSON estruturado para alimentar o planejamento mensal |
| Ritual | Cronometrar uma análise real de cliente para calibrar (ainda não medido) |
| Ganho estimado | Decisão baseada em dado em vez de achismo + economia de ~1h/cliente/mês |

---

## 3. Bônus de processo (sem custo extra, dentro das 4 semanas)

### Bônus A — Cláusula de SLA + lembretes
Modelo de aditivo contratual entregue junto com a Skill 1. Inclui texto de WhatsApp de lembrete (24h, 48h, 72h).

### Bônus B — Onboarding com Typeform + NPS Day-1
- **Typeform de briefing** padronizado para cliente novo (substitui briefing por WhatsApp solto).
- **NPS automatizado no dia 1** — pergunta de satisfação 30 dias após onboarding via n8n. Permite medir o impacto antes do churn.

### Bônus C — POC Premiere + Claude Code (edição de vídeo)
- Não é entregável de produção. É **prova de conceito** para destravar a frente de vídeo.
- Lucas monta exemplo de skill que assiste vídeo bruto, sugere cortes, gera roteiro de edição.
- Output: vídeo de 1 cliente real editado em parceria com Gabi para validar viabilidade.
- Se POC for positivo, vira Skill 4 em projeto seguinte (fora do escopo atual).

---

## 4. O que sai do escopo (explicitado)

| Item descartado | Razão |
|-----------------|-------|
| Substituir o Gabi (editor de vídeo) | Problema humano + capacitação, não automação. Mitigar com POC Premiere. |
| Landing pages em Lovable/Vercel | Bravo não priorizou — agendamento + aprovação têm maior ROI. |
| IA Avatar / clones de voz | Fora do bottleneck atual. |
| Skill de copy independente | Content Machine já cobre. |
| Skill de planejamento independente | É tarefa estratégica humana — IA entra como suporte (Skill 3 alimenta dado). |
| Reportei / M-Labs / Canva agendador | Substituídos pela Skill 2. |

---

## 5. Cronograma revisado (mantém 4 semanas)

| Semana | Foco | Entregáveis |
|--------|------|-------------|
| **1** (28/04 → 02/05) | Setup + processo | VPS + OpenClaw + Claude Code + GitHub · Documento de processo aprovado · Cláusula de SLA redigida |
| **2** (05/05 → 09/05) | Skill 1 (Aprovação) | n8n + WhatsApp + lembretes funcionando com 1 cliente-piloto · Typeform de onboarding entregue |
| **3** (12/05 → 16/05) | Skill 2 (Agendador) + Skill 3 (Análise) | Agendador testado com 2 clientes · Skill de análise rodada com 1 cliente real · NPS Day-1 ativo |
| **4** (19/05 → 23/05) | Treinamento + POC | 4 módulos de treinamento (5h) · POC Premiere+Claude Code com Gabi · Documentação final |
| **Suporte** | 24/05 → 23/06 | Ajustes, dúvidas, refinamentos via WhatsApp |

---

## 6. Pricing — sem alteração

**Opção B — R$3.900** (mantida).
3× R$1.300 ou Pix à vista com 5%.

Justificativa para manter preço apesar da troca de skills:
- Complexidade equivalente (Skill 1 e 2 envolvem n8n + APIs externas, equilibra a Skill 3 mais leve).
- Bônus B e C agregam sem custo — entram dentro das horas já alocadas para discovery+treinamento.

---

## 7. Métricas de sucesso (proposta de medição)

| KPI | Baseline (hoje) | Meta pós-entrega |
|-----|-----------------|------------------|
| Tempo médio de aprovação de cliente | 2-3 dias | < 24h em 70% dos casos |
| Horas mensais em agendamento manual | ~10h | < 1h (apenas exceções) |
| Frequência de análise mensal estruturada | Ad-hoc | 100% dos clientes ativos no dia 1-3 do mês |
| NPS dia 1 medido | Não existe | Coleta ativa em 100% dos novos clientes |
| Vídeos/dia entregues pela Gabi | 1-2 | 3+ (após POC validar) |

Medição: dashboard simples no Notion/ClickUp atualizado pela própria n8n na entrega de cada job.

---

## 8. Próximos passos

1. **Validar este reframe com Gustavo** — call de 30min ou WhatsApp. Trocas de skill não são automáticas; precisa OK formal.
2. **Atualizar `framework-processo.md`** — recalcular automation score com dados reais.
3. **Atualizar `bpmn-basico.md`** — swimlanes refletindo Aprovação/Agendamento/Análise.
4. **Atualizar `plano-execucao.md`** — substituir as 3 skills antigas pelas novas.
5. **Etapa 4 do discovery (1:1 Gustavo)** — bloco de custos/pró-labore (não tocado nessa reunião).
6. **Redigir aditivo de SLA** — Lucas escreve modelo, Gustavo manda para o advogado.
7. **Confirmar Javi no treinamento** — pendência aberta do discovery.

---

## 9. Decisões pendentes (precisam confirmação)

- [ ] Gustavo aceita troca das 3 skills core?
- [ ] Cliente-piloto da Skill 1 (Aprovação) — qual será?
- [ ] Cláusula de SLA — qual o prazo padrão (48h? 72h?)
- [ ] POC de vídeo — Gabi topa participar dentro das 4 semanas?
- [ ] Mantém preço R$3.900 mesmo com troca de skills?

---

*Criado: 25/04/2026 a partir do discovery presencial + transcrições Seaac Rio Preto (parte 1+2)*
*Substitui as seções "Skills v1" e "Skills Finais" do `plano-execucao.md` quando aprovado.*
