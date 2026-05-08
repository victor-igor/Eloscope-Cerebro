---
tipo: processo
status: ativo
tags: [sales-os, fase-4, execucao, implantacao]
atualizado: 2026-05-06
---

# Fase 4 — Execução

**Trigger:** Gate GO + pacote escolhido.
**Saída:** sistema em produção + time do cliente treinado + go-live confirmado.
**Donos:** Hugo (técnico) · Victor (playbook + treinamento) · Lucas (go-live confirm + client-side).
**Duração:** 3 dias (7A) · 1–2 semanas (7B/7C) · 2–4 semanas (7D).

---

## Agentes e skills

| Papel | Agente / Skill |
|-------|---------------|
| Spec do dashboard (só 7D) | `dashboard-spec-writer` ¹ |
| Roteiro do treinamento gravado | `training-material-composer` ¹ |
| Skills ativas | `eloscope-stack` |

---

## Por pacote

### 7A — Lean (só processo + playbook)
- [ ] Hugo: sem setup técnico (N/A)
- [ ] Victor: preparar treinamento gravado 2h (roteiro com `training-material-composer` ¹)
- [ ] Victor: conduzir sessão ao vivo de dúvidas (~60 min)
- [ ] Entregar: docs + Loom gravado + biblioteca de templates de mensagem

### 7B — Agente SDR (WhatsApp)
- [ ] Hugo — até Dia 8: subir VPS · instalar Openclaw · instalar Paperclip · conectar WhatsApp Business do cliente · testar envio · configurar n8n para cadências · avisar Victor quando pronto
- [ ] Victor — até Dia 7: criar scripts (1º contato frio, 1º contato quente, follow-up 1-4, reativação, fechamento, objeções, qualificação SPIN) · definir cadências (dias + canal por tipo de lead) · passar playbook para Hugo configurar na IA
- [ ] Hugo — Semana 3: configurar prompts da IA Copiloto · testar com conversa simulada · validar com Victor antes de mostrar ao cliente

### 7C — Integração no stack do cliente
- [ ] Confirmar CRM do cliente (HubSpot / Pipedrive / RD Station / Kommo)
- [ ] Hugo: configurar agente dentro do CRM via n8n (self-hosted ou Eloscope)
- [ ] Testar fluxo completo lead → ação automatizada → alerta humano

### 7D — Completo (7B + Dashboard)
- [ ] Executar 7B primeiro
- [ ] Hugo: montar dashboard Next.js + Supabase + Clerk (spec via `dashboard-spec-writer` ¹)
- [ ] Métricas obrigatórias: leads por canal · conversão por etapa · tempo de resposta · ticket médio · forecast
- [ ] Testar com dados fictícios → demo para Victor antes de mostrar ao cliente

---

## Checkpoint obrigatório (Victor, antes do treinamento)

Não avança para treinamento sem:
- [ ] Playbook validado — scripts fazem sentido para o segmento?
- [ ] IA Copiloto testada com 5 conversas simuladas — scripts aparecem corretos?
- [ ] Dashboard com todas as métricas corretas e acesso do cliente funcionando? (só 7D)

---

## Treinamento

**Sessão 1 — Time de vendas (~90 min):** todos os vendedores + 1 gestor.

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Playbook na prática — scripts, cadências, objeções | 20 min |
| 2 | IA Copiloto ao vivo no WhatsApp real | 25 min |
| 3 | Como qualificar (SPIN adaptado) | 15 min |
| 4 | Follow-up sem depender da memória | 15 min |
| 5 | Simulação + dúvidas | 15 min |

**Sessão 2 — Gestor (~60 min):** agendada separada.

| Bloco | Conteúdo | Tempo |
|-------|---------|-------|
| 1 | Como ler o dashboard | 20 min |
| 2 | Lead scoring — como priorizar o time | 15 min |
| 3 | Relatório mensal — como usar para decisão | 15 min |
| 4 | Como acionar campanha de reativação | 10 min |

---

## Go-live — Dia 10

- [ ] Hugo: todos os sistemas rodando
- [ ] Victor: treinamento realizado
- [ ] Lucas: confirmar com o cliente que o time começou a usar
- [ ] Victor: registrar data de go-live em `docs/clientes/{slug}/`
- [ ] **Go-live confirmado → dispara Fase 5**
