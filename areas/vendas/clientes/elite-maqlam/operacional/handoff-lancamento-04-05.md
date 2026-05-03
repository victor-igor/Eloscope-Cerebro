---
tipo: handoff
empresa: Elite Maqlam
data: 2026-05-04
tags: [cliente/maqlam, handoff, cashback, bdr, chips]
---

# Handoff — Lançamento 04/05/2026 (segunda-feira)

> Campanha começa **04/05 às 12h**.
> Sequência revisada com dependências e URLs técnicas.

---

## Sistema — referências rápidas

| O quê | URL / dado |
|-------|-----------|
| Sistema (produção) | https://elo.elitemaqlam.com.br |
| Tela de contatos (cashback) | https://elo.elitemaqlam.com.br/contacts |
| Tela de campanhas | https://elo.elitemaqlam.com.br/campaigns |
| Tela de cashback | https://elo.elitemaqlam.com.br/cashback |
| Repo | `git@github.com:victor-igor/Maqlam.git` |
| Módulo agente AI | `src/features/ai` |
| Módulo campanhas | `src/features/campaigns` |
| Edge Function disparo | `campaign-executor` (Supabase) |
| Edge Function agente | `ai-agent-respond` (Supabase) |
| WhatsApp oficial | Meta Cloud API (credenciais em Settings → Integrations) |
| Chips prospecção | +55 11 9 2700-9804 · +55 17 9 2004-2308 |

---

## Sequência do dia — 04/05 (segunda-feira)

### 8h — Victor (primeiro da manhã)

- [ ] **Testar SDR/BDR Bumble end-to-end** (`86e16ubnu`)
  - Acessar o sistema como cliente: https://elo.elitemaqlam.com.br
  - Mandar mensagem para o chip BDR (+55 11 9 2700-9804 ou +55 17 9 2004-2308)
  - Testar as entradas: `OI` → `INFO` → `QUERO` → `PREÇO`
  - Confirmar transferência para humano quando solicitado
  - Validar hybrid search: pergunta sobre produto → agente busca em `search-knowledge`
  - Confirmar sincronização do Reg (FAQ + memória)
  - **Avisa Lucas até 8h30:** ✅ OK ou ❌ bug (descrever)

- [ ] **Se bug:** Hugo corrige no módulo `src/features/ai` + redeploy Vercel + retestar
  - Prazo máximo para correção: **10h** (antes de Lucas configurar campanha)

---

### 8h30 — Lucas

- [ ] **Enviar 3 variações de mensagem para Denis validar** (`86e16ub51`)
  - WhatsApp Denis: *"Denis, segue as 3 opções de mensagem para o disparo das 12h. Pode escolher 1 ou a gente rotaciona as 3."*
  - Variações completas em: [[comercial/cashback-mensagens]]
  - **Denis responde até 10h30**

- [ ] **Enviar BDR Bumble para Denis testar** (`86e16ub5t`)
  - Mensagem separada (não misturar com a de cashback)
  - Passar o número do chip + instrução simples: *"Denis, manda 'OI' para esse número pra você ver como funciona o BDR"*
  - **Denis dá feedback até 10h30**

- [ ] **Chips — Day 1 do aquecimento**
  - +55 11 9 2700-9804: 10–15 mensagens manuais (grupos ativos, conhecidos)
  - +55 17 9 2004-2308: 10–15 mensagens manuais (grupos ativos, conhecidos)
  - Protocolo completo: [[operacional/chips-aquecimento]]

---

### 10h30 — Lucas (após ok de Denis)

- [ ] **Configurar campanha no sistema** (salvar como draft, não disparar ainda)
  - Acessar: https://elo.elitemaqlam.com.br/campaigns → Nova campanha
  - Nome: `Cashback Pós-Feira — 04/05`
  - Audiência: todos os contatos com WhatsApp ativo
  - Mensagens: inserir a(s) variação(ões) aprovadas por Denis com rotação
  - Personalização: `[NOME]` = campo nome do contato
  - Canal: chips aquecidos (não-oficial) ou WhatsApp oficial Meta se disponível
  - Horário agendado: **04/05 às 12h00**
  - Salvar draft — não apertar disparar ainda

---

### 11h30 — Go / No-Go (Lucas + Victor)

| Checklist | Status |
|-----------|--------|
| SDR testado e ok (Victor confirmou) | ⬜ |
| Denis aprovou as mensagens | ⬜ |
| Denis confirmou BDR funcionando | ⬜ |
| Campanha configurada no sistema (draft) | ⬜ |

**Todos ✅ → disparo às 12h.**

Se algum ❌ → decidir juntos: atrasar disparo ou lançar sem o item bloqueado.

---

### 12h — Lucas

- [ ] **Disparar campanha** (`86e16ub4p`)
  - Abrir https://elo.elitemaqlam.com.br/campaigns
  - Abrir draft `Cashback Pós-Feira — 04/05` → confirmar configurações → **Disparar**
  - Monitorar primeiros envios por 15–20 min
  - Verificar se `campaign-executor` (Edge Function) está processando sem erros

---

### Tarde (13h–15h) — Lucas

- [ ] **Loom para Marcella e Juliano** (`86e16u6bj`)
  - Abrir: https://elo.elitemaqlam.com.br/contacts
  - Gravar mostrando: filtro cashback acumulado → saldo por cliente → como dar baixa na hora da compra
  - Exemplo no vídeo: cliente com R$50 acumulado → compra R$150 → cashback entra como desconto
  - Enviar para Denis, Marcella e Juliano (WhatsApp ou link Loom)
  - *Não é bloqueante pro disparo — é para gestão contínua da equipe*

- [ ] **Monitoramento pós-disparo**
  - Primeiras respostas chegando? BDR Bumble respondendo via `ai-agent-respond`?
  - Clientes com dúvidas → avaliar se SDR está tratando corretamente

---

### Qualquer hora do dia — Victor

- [ ] **Agendar CS meeting com Denis** (`86e16u6bb`)
  - Data: 08 ou 09/05
  - Pauta: resultados cashback + BDR + resistência equipe + expansão contrato

---

## Resumo — quem faz o quê

| Quem | O quê | Prazo |
|------|-------|-------|
| ~~Lucas~~ | ~~Importar leads~~ | ✅ 03/05 |
| **Victor** | **Testar SDR → avisa Lucas** | **8h** |
| Hugo (se bug) | Corrigir SDR → redeploy | até 10h |
| Lucas | Enviar msgs + BDR → Denis | 8h30 |
| Denis | Aprovar msgs + testar BDR | até 10h30 |
| Lucas | Configurar campanha (draft) | 10h30 |
| Lucas + Victor | Go/no-go | 11h30 |
| **Lucas** | **Disparar campanha** | **12h** |
| Lucas | Loom equipe de vendas | tarde |
| Lucas | Chips Day 1 | ao longo do dia |
| Victor | Agendar CS meeting 08-09/05 | ao longo do dia |

---

## Regras da campanha

| Regra | Detalhe |
|-------|---------|
| Cashback | 5% sobre valor de cada compra |
| Resgate | Cliente compra 3× o acumulado (ex: R$50 → R$150) |
| Validade | 30 dias por transação |
| Vigência | 04/05/2026 a 02/06/2026 |
| Audiência | Base completa com WhatsApp ativo |

---

*Criado: 2026-05-03 · Revisado: 2026-05-03 (domingo → segunda, URLs técnicas adicionadas)*
