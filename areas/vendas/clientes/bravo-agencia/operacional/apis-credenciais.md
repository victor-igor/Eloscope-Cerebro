---
tipo: operacional
empresa: Agência Bravo
tags: [cliente/bravo, apis, credenciais, infra, fonte-unica]
status: ativo
data: 2026-05-06
relacionados: ["[[acessos]]", "[[pendencias-tecnicas]]", "[[handoff-coleta-acessos]]"]
---

# APIs e Credenciais — Bravo Agency

> **Fonte única** das APIs e credenciais necessárias pro projeto. Substitui a função catalogadora de `[[acessos]]` e `[[pendencias-tecnicas]]` (que ficam como histórico).
> Última atualização: 2026-05-06 (cruzamento Notion Sprint Board + Lifelines + validação técnica web).

> [!warning] Por que esse doc existe
> Antes de pedir credencial pro Gustavo, validamos se a API **realmente entrega** o caso de uso. Pedir e descobrir limitação depois custa 1 semana de sprint.

---

## 1. APIs — validação técnica

### 1.1 Meta Graph API (Instagram + Facebook) — **Skill 2**

| Item | Detalhe |
|---|---|
| **Endpoint** | `graph.facebook.com/v21.0` |
| **Auth** | OAuth 2.0 com Page Access Token (longo prazo, ~60 dias, renovável) ou System User Token (não expira) |
| **Permissões IG** | `instagram_basic`, `instagram_content_publish` |
| **Permissões FB** | `pages_manage_posts`, `pages_show_list`, `pages_read_engagement` |
| **Pré-requisito** | Instagram Business/Creator conectado a Facebook Page; Business Manager com app aprovado |
| **Rate limit** | 50–100 posts por janela rolling 24h (cap por app, não por página) |
| **Janela de agendamento** | Via API: **sem limite de 75 dias** (limite só existe no Meta Business Suite UI) |
| **Custo** | Free (sem cobrança por chamada) |
| **App Review** | Permissões `instagram_content_publish` e `pages_manage_posts` exigem App Review pra uso em produção (não-test). ~3-7 dias úteis |

**Validação caso de uso Bravo:** ✅ ENTREGA
- Volume: 8 posts × 20 clientes = 160 posts/mês ≈ 5/dia → muito abaixo do cap
- Janela: posts agendados podem ir além de 75 dias (não bloqueia)
- Multi-cliente: 1 token por página → System User Token na Bravo Business Manager admin de todas as páginas dos clientes

**Risco:** App Review da Meta. Se Bravo não tem app aprovado, **adicionar 1 semana** ao Sprint 3. Validar com Hugo se vamos usar app existente Eloscope ou criar app Bravo.

### 1.2 WhatsApp Business Cloud API — **Skill 1**

| Item | Detalhe |
|---|---|
| **Endpoint** | `graph.facebook.com/v21.0/{phone_number_id}/messages` (mesmo Meta Graph) |
| **Auth** | Bearer Token (System User Token recomendado) + `phone_number_id` + `business_account_id` |
| **Permissões** | `whatsapp_business_messaging`, `whatsapp_business_management` |
| **Pré-requisito** | Número WhatsApp Business verificado na Meta Business Manager + número não pode estar em uso na conta WhatsApp Business pessoal/app |
| **Templates** | **Pré-aprovação obrigatória** (24-48h por template) — sem template aprovado, só responde dentro da janela 24h após cliente escrever |
| **Categorias mensagem** | Marketing ($0,0625/msg BR), **Utility** ($0,0068/msg BR primeiros 1k, $0,0065 1k-10k), Authentication, Service (free) |
| **Janelas free** | Service window 24h após cliente responder = msgs livres; Free Entry Point 72h se cliente clicou em Ad FB/IG |
| **Rate limit** | Tier-based: começa em 1k contatos/24h, escala automaticamente até ilimitado conforme qualidade |

**Validação caso de uso Bravo:** ⚠️ ENTREGA COM AJUSTE
- Skill 1 envia **Reminder1 (24h)**, **Reminder2 (48h)**, escala Gustavo (72h) — todos fora da janela 24h
- **Cada um precisa ser template "utility" pré-aprovado** (não dá pra mandar texto solto)
- Custo estimado: 20 clientes × 2-3 reminders/mês = 40-60 msgs × $0,0068 = **~$0,30/mês** (irrelevante)
- Risco: aprovação de template → escrever templates conservadores, evitar soar promocional (vira "marketing" e sobe pra $0,0625)

**Ação obrigatória antes do build (Hugo):**
1. Redigir 3 templates utility (`bravo_aprovacao_24h`, `bravo_aprovacao_48h`, `bravo_escalacao_72h`)
2. Submeter pra aprovação Meta no dia 1 do Sprint 2 (ganha 24-48h pra rodar)
3. Garantir wording sem CTA promocional (senão re-categoriza pra marketing)

### 1.3 ClickUp API — **Skills 1, 2, 3 (orquestração)**

| Item | Detalhe |
|---|---|
| **Endpoint** | `api.clickup.com/api/v2` |
| **Auth** | Personal API Token (gerar em Settings > Apps) ou OAuth |
| **Rate limit** | 100 req/min por token |
| **Webhook** | Suporta — pra disparar Skill 2 quando task vai pra status "Aprovado" |
| **Custom fields** | Suportados via API (precisa pra schema de task de post) |
| **Custo** | Free no plano Bravo atual |

**Validação caso de uso Bravo:** ✅ ENTREGA — sem ressalvas. Verificar plano ClickUp Bravo permite webhook (geralmente sim em qualquer plano pago).

### 1.4 Google Analytics Data API (GA4) — **Skill 3**

| Item | Detalhe |
|---|---|
| **Endpoint** | `analyticsdata.googleapis.com/v1beta` |
| **Auth** | OAuth 2.0 (acesso de leitura) ou Service Account (recomendado pra multi-cliente) |
| **Permissões** | `https://www.googleapis.com/auth/analytics.readonly` |
| **Pré-requisito** | Cada cliente adicionar Service Account email como Viewer da property GA4 |
| **Rate limit** | 50 req/projeto/segundo, 1250 req/projeto/minuto |
| **Custo** | Free até 200k req/dia |

**Validação caso de uso Bravo:** ✅ ENTREGA
- Padrão: criar 1 Service Account Eloscope, Gustavo pede a cada cliente pra adicionar `bravo-skills@<projeto>.iam.gserviceaccount.com` como Viewer no GA4
- Métricas mensais (sessions, users, conversions, pageviews) cabem em 1 req por cliente

**Risco:** clientes da Bravo podem não saber adicionar viewer no GA4 → criar tutorial 1-pager + screenshot.

### 1.5 Google Sheets API — **Skill 1 (Modo B fallback) + Skill 2 (Modo B)**

| Item | Detalhe |
|---|---|
| **Endpoint** | `sheets.googleapis.com/v4` |
| **Auth** | Service Account (mesmo do GA4) ou OAuth |
| **Permissões** | `https://www.googleapis.com/auth/spreadsheets` |
| **Custo** | Free |

**Validação caso de uso Bravo:** ✅ ENTREGA. Reusar Service Account criada pro GA4.

---

## 2. Credenciais — checklist por sprint

### 🔴 Sprint 1 (já deveria estar fechado — destrava Sprint 2)

| # | Credencial | Owner Bravo | Pra quê | Onde guardar | Status |
|---|---|---|---|---|---|
| 1 | Hostinger (login + senha + 2FA) | Gustavo | VPS OpenClaw + Postgres + n8n | 1Password vault `bravo-infra` | ⬜ Pedido |
| 2 | Nome do assistente IA | Gustavo | Branding skill no WhatsApp | apis-credenciais.md (este doc) | ⬜ Pedido |
| 3 | Cliente-piloto Skill 1 (qual?) | Gustavo escolhe | Quem testa Aprovação primeiro | Sprint 2 task | 🔴 Bloqueante |
| 4 | Prazo SLA (48h ou 72h?) | Gustavo decide | Aditivo contratual | `3-contrato/` | 🔴 Bloqueante |

### 🟡 Sprint 2 (semana 05-09/05) — Skill 1

| # | Credencial | Owner | Pra quê | Onde guardar | Status |
|---|---|---|---|---|---|
| 5 | WhatsApp Business Account ID + phone_number_id | Gustavo + Hugo | Skill 1 envia reminders | `.env` Bravo + 1Password | ⬜ |
| 6 | Token System User WhatsApp (gerado por Hugo na Meta Business Bravo) | Hugo (Bravo precisa adicionar como admin antes) | Auth API | `.env` Bravo | ⬜ |
| 7 | 3 templates utility submetidos pra aprovação Meta | Hugo escreve, Gustavo aprova | Mensagens Reminder1/2/Escalação | Meta Business Suite | ⬜ |
| 8 | ClickUp Bravo: workspace ID + token API | Gustavo | Pipeline aprovação centralizado | `.env` Bravo | ⬜ |
| 9 | Telefone do cliente-piloto | Gustavo | Skill 1 envia pra ele | ClickUp custom field | ⬜ |

### 🟡 Sprint 3 (semana 12-16/05) — Skill 2 + Skill 3

| # | Credencial | Owner | Pra quê | Onde guardar | Status |
|---|---|---|---|---|---|
| 10 | Meta Business Manager ID Bravo + acesso admin pra Hugo | Gustavo | Pré-requisito tudo Meta | 1Password | ⬜ |
| 11 | Tokens System User Meta (Instagram + Facebook) por cliente | Hugo gera, Gustavo conecta páginas dos clientes na Bravo BM | Skill 2 agenda multi-cliente | `.env` Bravo (criptografado) | ⬜ |
| 12 | Service Account Google Cloud (1 só, Eloscope cria) | Lucas | Skill 3 (GA4) + Sheets (Modo B) | 1Password | ⬜ |
| 13 | Email Service Account adicionado como Viewer em cada GA4 dos 20 clientes | Gustavo coordena com clientes | Skill 3 puxa métricas | Tutorial 1-pager pros clientes | ⬜ |
| 14 | Lista 20 clientes (nome, segmento, redes ativas, link GA4, link IG/FB) | Gustavo | Cadastro no sistema | Google Sheets shared | ⬜ |

### ⚪ Sprint 4 (semana 19-23/05) — Treinamento

| # | Credencial | Owner | Pra quê | Status |
|---|---|---|---|---|
| 15 | App Meta aprovado (App Review com `instagram_content_publish` + `pages_manage_posts`) | Hugo submete, Meta aprova | Sair do modo dev pra produção | ⬜ — submeter no início do Sprint 2 (3-7 dias review) |

---

## 3. Onde guardar (regra única)

| Tipo | Local |
|---|---|
| Senhas humanas (Hostinger, ClickUp pessoal, Meta Business) | **1Password Eloscope** vault `bravo-infra` |
| Tokens API + Service Accounts | **1Password** + arquivo `.env` no repo Bravo (gitignored) |
| Acessos clientes finais (GA/Meta tokens por cliente) | **1Password** vault `bravo-clientes`, 1 item por cliente |
| Templates WhatsApp aprovados | Meta Business Suite Bravo (gerenciado lá) + cópia em `.env.templates.json` |

> **NUNCA commitar tokens.** Sempre `.env.example` no repo + `.env` gitignored. Hugo confirma antes do primeiro push.

---

## 4. Mensagem-modelo pra Gustavo (WhatsApp)

> Disparar **HOJE** (06/05). Sprint 2 já está em curso e está travado.

```
Gustavo, boa tarde. Pra destravar o Sprint 2 que começou ontem (05/05),
preciso destas 4 coisas até quarta (07/05):

URGENTE — Sprint 2:
1. Acesso Hostinger (login + senha + 2FA se tem)
2. Nome que você quer dar pro assistente IA (vai aparecer no WhatsApp do cliente)
3. Qual cliente vai ser o piloto da Skill 1 de Aprovação?
4. Prazo SLA: 48h ou 72h? (precisa pro aditivo contratual)

PRÓXIMA SEMANA — Sprint 3 (12-16/05):
5. Me adicionar como admin no seu Meta Business Manager
6. Lista dos 20 clientes (nome, segmento, link Instagram, link GA4 se tiver)

Posso te mandar tutorial em vídeo de como gerar cada um desses se ajudar.
Qual horário hoje/amanhã rola 15 min de call rápida pra resolver os 4 da
primeira lista de uma vez?
```

---

## 5. Tasks de cobrança no ClickUp (a criar)

Cada credencial bloqueante vira 1 task na lista Bravo (`901713503273`) com:
- **Assignee:** Gustavo
- **Due date:** conforme sprint
- **Priority:** urgent (Sprint 1) / high (Sprint 2) / normal (Sprint 3)
- **Tag:** `acesso-bravo`
- **Descrição:** linka pra esta seção do doc + mensagem-modelo

| Task | Sprint | Due |
|---|---|---|
| Acesso Hostinger | 1 (atrasado) | 2026-05-07 |
| Nome assistente IA | 1 (atrasado) | 2026-05-07 |
| Cliente-piloto Skill 1 | 1 (atrasado) | 2026-05-07 |
| Prazo SLA 48h ou 72h | 1 (atrasado) | 2026-05-07 |
| Admin Meta Business Manager | 2 | 2026-05-09 |
| Telefone cliente-piloto | 2 | 2026-05-09 |
| Lista 20 clientes (planilha) | 3 | 2026-05-12 |
| Coordenar acesso GA4 dos clientes | 3 | 2026-05-15 |

---

## 6. Riscos técnicos consolidados

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Templates WhatsApp categorizados como Marketing (10× mais caros) | Média | Wording conservador "Olá {{nome}}, lembrete: peça aguardando aprovação. Acesse: {{link}}" — sem CTA promocional |
| Meta App Review demora >7 dias | Média | Submeter no dia 1 do Sprint 2; ter app Eloscope existente como fallback |
| Cliente não adiciona Service Account no GA4 | Alta | Tutorial 1-pager + Gustavo cobra cliente a cliente; Skill 3 funciona em modo degradado se faltar GA4 |
| WhatsApp number warmup necessário (número novo) | Alta | Usar número Bravo já aquecido; se número novo, 7 dias de ramp-up antes de Sprint 2 piloto |
| VPS Hostinger small plan não aguenta n8n + Postgres + OpenClaw | Média | Validar plano com Hugo antes do setup; orçamento upgrade R$ 50-80/mês se necessário |
| Tokens Page Access Token (60 dias) expiram silenciosamente | Alta | System User Token (não expira) + alerta n8n se token < 7 dias |

---

## 7. Custo recorrente Bravo (consolidado)

| Item | Custo mensal | Notas |
|---|---|---|
| VPS Hostinger (KVM 2 ou 4) | R$ 35-70 | Validar dimensionamento Hugo |
| WhatsApp Cloud API msgs (60/mês utility) | < R$ 2 | Escala se chegar a marketing categoria: ~R$ 20 |
| Meta Graph API | R$ 0 | Free |
| ClickUp Bravo | já pago | Plano atual Bravo |
| Google Cloud (GA4 + Sheets API) | R$ 0 | Tier free suficiente |
| Anthropic API (Claude para skills) | R$ 100-250 | Estimativa: 3 skills × ~50k tokens/cliente/mês × 20 clientes |
| **Total recorrente Bravo** | **R$ 137-322/mês** | <2% da receita atual R$ 20k |

> Comparação: Bravo gasta R$ 1.265,50/mês em 16 ferramentas hoje. Adicionar R$ 137-322 = +11% a +25% sobre stack atual, mas elimina ~R$ 760/mês de custo de processo (Skills 1+2+3 = libera 18-20h Gustavo).

---

*Criado: 2026-05-06 — fonte única que substitui acessos.md e pendencias-tecnicas.md como catalogador. Esses dois ficam como histórico, este vira fonte de verdade.*
