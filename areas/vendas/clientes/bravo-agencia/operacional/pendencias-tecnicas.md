---
tipo: operacional
empresa: Agência Bravo
tags: [cliente/bravo, tecnico, backlog]
---

# Pendências Técnicas — Agência Bravo

> Backlog técnico do projeto Mentoria Agências Bravo.
> Stack: Hostinger VPS + OpenClaw + Claude Code + n8n + Meta Graph API.
> Responsável principal: **Hugo** · Validação produto: **Victor** · Delivery: **Lucas**.

---

## 🔴 Bloqueante

| Item | Detalhe | Responsável | Bloqueio |
|------|---------|-------------|---------|
| Setup VPS Hostinger | OpenClaw + Claude Code + GitHub Actions + n8n | Hugo | Aguarda credenciais Hostinger ([[acessos]] item 1) |
| Definir nome do assistente IA | Branding da skill no WhatsApp | Lucas pede a Gustavo | Aguarda Gustavo ([[acessos]] item 2) |
| Cliente-piloto Skill 1 | Definir qual cliente testa primeiro | Gustavo escolhe | Aguarda decisão |
| Aditivo de SLA contratual | 48h ou 72h? Lucas redige modelo, Gustavo manda pro advogado | Lucas | Decisão prazo pendente |

---

## 🟡 Backlog ativo — Skills

### Skill 1 — Aprovação automatizada com SLA
| Sub-item | Stack | Owner |
|----------|-------|-------|
| Quadro centralizado de aprovações | ClickUp ou Google Sheets | Lucas (UX) + Hugo (integração) |
| Webhook WhatsApp Business → quadro | n8n | Hugo |
| Lembretes automáticos 24h / 48h / escala 72h | n8n + WhatsApp API | Hugo |
| Captura de feedback do cliente (aprovado / ajuste / rejeitado) | n8n + log JSON | Hugo |
| Aditivo SLA contratual | Lucas redige · Gustavo valida advogado | Lucas |

### Skill 2 — Agendador multi-cliente (Meta)
| Sub-item | Stack | Owner |
|----------|-------|-------|
| Integração Meta Graph API (Instagram + Facebook) | n8n + tokens de página | Hugo |
| Fila de jobs por cliente | n8n + Postgres no VPS | Hugo |
| Trigger automático após aprovação (Skill 1 → Skill 2) | n8n flow | Hugo |
| Substituir M-Labs/Reportei se redundante | Decisão Victor + Gustavo | Victor |

### Skill 3 — Análise mensal estruturada
| Sub-item | Stack | Owner |
|----------|-------|-------|
| Coleta de métricas (Meta + Google Analytics) | Claude Code skill + APIs | Hugo |
| Template de dossiê executivo (markdown + JSON) | Lucas escreve template | Lucas |
| Cronometrar análise real de 1 cliente (calibrar) | 1 cliente Bravo no dia 1-3 do mês | Lucas + Gustavo |
| Handoff JSON pra Content Machine alimentar planejamento | Skill 3 → Content Machine | Hugo |

---

## 🟡 Bônus de processo (dentro do escopo)

| Bônus | Detalhe | Owner |
|-------|---------|-------|
| Typeform de briefing onboarding | Substitui briefing solto no WhatsApp | Lucas |
| NPS Day-1 automatizado | n8n dispara 30 dias após onboarding | Hugo |
| POC Premiere + Claude Code | Skill assiste vídeo bruto, sugere cortes — 1 vídeo Rafael Gobi | Lucas + Rafael Gobi |

---

## ⚪ Fora do escopo (declarado no deck pós-discovery)

| Item | Razão |
|------|-------|
| Substituir Rafael Gobi (editor) | Problema humano + capacitação, não automação |
| Landing pages Lovable/Vercel | Bravo não priorizou |
| IA Avatar / clones de voz | Não é gargalo |
| Skill copy independente | Content Machine já cobre |
| Skill planejamento independente | Tarefa estratégica humana — Skill 3 alimenta dado |

---

## Riscos técnicos mapeados

| Risco | Mitigação |
|-------|-----------|
| WhatsApp Business API bloqueia número novo | Usar número da Bravo já aquecido + protocolo de aquecimento Eloscope |
| Meta Graph API muda política (token de página expira) | Renovação automática via n8n + alerta se token < 7 dias |
| Cliente-piloto não responde no piloto da Skill 1 | Plano B: rodar Skill 1 em modo dry-run com 2-3 clientes em paralelo |
| Hostinger VPS pequeno demais (n8n + Postgres + OpenClaw) | Validar plano com Hugo antes do setup; upgrade se necessário |

---

## ClickUp — Lista "Bravo Agency" (workspace `90171169593`)

> 6 listas e 33 tarefas já criadas em 24/04. Status individual a verificar no ClickUp.
> Tarefas novas a criar (foco da semana 05–09/05) listadas em [[handoff-coleta-acessos]].

---

*Criado: 2026-05-03*
