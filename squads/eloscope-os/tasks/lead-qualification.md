---
task: Lead Qualification (BANT/ICP)
responsavel: orion
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - lead_raw: nome, empresa, canal de entrada
  - source: inbound | outbound | referral | evento
Saida: |
  - qualification_report: leads/{slug}/qualification.md
  - bant_score: 0-100
  - icp_score: 0-100 (cruzado com ICP Eloscope)
  - next_action: [passar-para-atlas | descartar | nurture | pedir-info-extra]
Checklist:
  - "[ ] Invocar Sírius para enriquecer dossiê"
  - "[ ] Aplicar SPIN inicial (Situation + Problem) via mensagem ou discovery call curto"
  - "[ ] Rodar Polaris (ICP validator) — cruzar faturamento, setor, decisor, dor, abertura IA"
  - "[ ] Calcular BANT: Budget, Authority, Need, Timing"
  - "[ ] Registrar em leads/{slug}/qualification.md"
  - "[ ] Decidir próxima ação e criar handoff se for pra Atlas"
---

# lead-qualification

Primeiro filtro comercial. Aplica SPIN Selling no primeiro contato e cruza com ICP Eloscope antes de gastar recurso de outreach profundo.

## ICP Eloscope (resumo)
- Faturamento R$ 80k-800k/mês
- Setores validados: clínicas, imobiliárias, advogados, pet shops, e-commerce, educação, fitness, gastronomia, automotivo, jurídico
- Tomador de decisão acessível
- Dor clara em processo manual ou qualificação de lead
- Abertura para IA

## Thresholds
- ICP score < 50 → descartar ou nurture
- ICP score 50-70 + BANT > 60 → nurture com Vega
- ICP score > 70 + BANT > 70 → passar para Atlas (discovery profundo)
